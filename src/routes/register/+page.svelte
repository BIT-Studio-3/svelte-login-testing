<script>

</script>

<form method="POST" action="/?/register">
    <h2>Register</h2>
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email: </label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password: </label>
    <input type="password" id="password" name="password" required />

    <button type="submit">Submit</button>
    <p>Already have an account? <a href="/login">Log in</a></p>
</form>