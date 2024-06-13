<script>
    export let data;
    const institutions = data.institutions.data;
</script>

<h1>Test</h1>

<!-- A form to accept institution name, region and country -->
<form method="POST">
    <label for="institution">Institution Name: </label>
    <input type="text" id="name" name="name" required>

    <label for="region">Region: </label>
    <input type="text" id="region" name="region" required>

    <label for="country">Country: </label>
    <input type="text" id="country" name="country" required>

    <button type="submit">Submit</button>
</form>

<!-- A table to display the data -->
<table>
    <thead>
        <tr>
            <th>Institution</th>
            <th>Region</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        {#each institutions as {name, region, country}}
            <tr>
                <td>{name}</td>
                <td>{region}</td>
                <td>{country}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    form {
        margin-bottom: 1rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 0.5rem;
    }

    th {
        background-color: #f2f2f2;
    }
</style>