<template>
    <div>
        <table>
                <thead>
                        <th>id voiture</th>
                        <th>Marque</th>
                        <th>Model</th>
                        <th>couleur</th>
                </thead>
                <tbody>
                        <td>1</td>
                        <td>toyota</td>
                        <td>360</td>
                        <td>noir</td>
                </tbody>
        </table>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style >
table thead {
    background-color: rgb(21, 21, 63);
    color: aliceblue;

}

thead td {
    border-radius: 4px;
    padding: 11px;
    width: 20vh;
}
</style>