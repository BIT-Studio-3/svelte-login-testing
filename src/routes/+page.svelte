<script>
    // Client-side JavaScript here
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- A log in form with the option to register instead -->
<form method="POST" action="?/login">
    <h2>Log in</h2>
    <label for="email">Email: </label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password: </label>
    <input type="password" id="password" name="password" required />

    <button type="submit">Submit</button>
    <p>Don't have an account? <a href="/register">Register</a></p>
</form>


<style>
    h2 {
        margin: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;
        border: #ccc solid 1px;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    label {
        margin: 0.5rem 0;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
    }

    button {
        padding: 0.5rem;
        font-size: 1rem;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
        margin-top: 1em;
    }

    button:hover {
        background-color: #555;
    }

    a {
        color: #333;
    }
</style>