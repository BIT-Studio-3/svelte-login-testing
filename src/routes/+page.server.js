import { redirect } from '@sveltejs/kit';

// const baseUrl = "https://web1-pr-1.onrender.com";
const baseUrl = "http://localhost:3000";

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// Log the user in via the API and save the token to a cookie
        const res = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        // If the response is html, the login failed
        if (res.headers.get('content-type').includes('text/html')) {
            return {
                status: 401,
                error: 'Login failed'
            };
        }
        const { token } = await res.json();
        cookies.set('token', token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict' 
        });

		throw redirect(303, '/test'); // Send the user to the app once logged in
	}
};