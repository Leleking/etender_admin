<template>
    <my-table :header="['firstname:fname', 'Surname:sname']">
        <template slot="body">
            <tr v-for="(entry, index) in res" :key="index">
                {{entry}}
            </tr>
        </template>
    </my-table>
</template>

<script>
export default {
    mounted() {
        //fetch data
    }
}
</script>

<style>

</style>
