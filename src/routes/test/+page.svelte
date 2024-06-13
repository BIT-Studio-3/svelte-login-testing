<script>
    /* A table showing all the records with the option to add a new record */

    export let data;
    export let form;
    const institutions = data.institutions.data;

    let showForm = false;
    if (form?.success) {
        showForm = false;
    }
</script>

<h1>Test</h1>

<!-- A button to show or hide the form -->
<button on:click={() => (showForm = !showForm)}>Add New Institution</button>

<!-- A form to accept institution name, region and country -->
{#if showForm}
    <form method="POST" action="?/create" class="modal">
        <label for="name">Institution Name: </label>
        <input type="text" id="name" name="name" required />

        <label for="region">Region: </label>
        <input type="text" id="region" name="region" required />

        <label for="country">Country: </label>
        <input type="text" id="country" name="country" required />

        <button type="submit">Submit</button>
    </form>
{/if}

<!-- A table to display the data -->
<table>
    <thead>
        <tr>
            <th>Institution</th>
            <th>Region</th>
            <th>Country</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {#each institutions as { id, name, region, country }}
            <tr>
                <td>{name}</td>
                <td>{region}</td>
                <td>{country}</td>
                <td>
                    <form method="POST" action="?/delete">
                        <input type="hidden" name="id" value="{id}" />
                        <button type="submit">X</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    /* Style the form as a modal */
    .modal {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        z-index: 100;
        margin-bottom: 1rem;
    }
    .modal > input {
        margin-right: 0.8rem;
    }
    .modal > *:last-child {
        margin-right: 0;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 0.5rem;
    }

    th {
        background-color: #f2f2f2;
    }
</style>
