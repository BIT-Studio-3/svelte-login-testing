const baseUrl = "https://web1-pr-1.onrender.com";

// Use SvelteKit load function to fetch list of institutions from API
export async function load({ fetch }) {
    const res = await fetch(`${baseUrl}/institutions`);
    const institutions = await res.json();

    return {
        institutions
    };
};

// Use SveleKit form actions to submit a new institution to the API
export const actions = {
	default: async ({ request }) => {
        try {
            const data = await request.formData();
            const institution = Object.fromEntries(data.entries());
            console.log(institution);
            
            const res = await fetch(`${baseUrl}/institutions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(institution),
            });
            console.log(res);
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        } catch (error) {
            console.error('Error posting institution:', error);
            return {
                status: 500,
                body: { error: 'Failed to post institution' }
            };
        }
    }
};