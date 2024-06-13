/* Demonstration of how to list all records, add a new record and reload the list */

const baseUrl = "https://web1-pr-1.onrender.com";

// Use SvelteKit load function to fetch list of institutions from API
export async function load({ fetch }) {
    const res = await fetch(`${baseUrl}/institutions`);
    const institutions = await res.json();

    return {
        institutions
    };
};

// Use SveleKit form actions to CRUD institution records
export const actions = {
	create: async ({ request }) => {
        try {
            const data = await request.formData();
            const institution = Object.fromEntries(data.entries());
            
            const res = await fetch(`${baseUrl}/institutions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(institution),
            });
            console.log(res.status);

            return {
                success: true,
                institution // Allows us to use some of the form answers in the success message
            };

        } catch (error) {
            console.error('Error posting institution:', error);
        }
    },
    delete: async ({ request }) => {
        try {
            const data = await request.formData();
            const institution = Object.fromEntries(data.entries());
            
            const res = await fetch(`${baseUrl}/institutions/${institution.id}`, {
                method: 'DELETE',
            });
            console.log(res.status);

            return {
                success: true
            };

        } catch (error) {
            console.error('Error deleting institution:', error);
        }
    }
};