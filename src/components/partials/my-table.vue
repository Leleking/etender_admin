<template>
    <table>
        <thead>
            <th v-for="(header, index) in renderedHeader" :key="index">
                {{header}}
            </th>
        </thead>
        <tbody>
            <slot name="body"></slot>
           <template v-if="entries.length">
                <tr v-for="(entry, index) in renderedValues" :key="index">
                    <td v-for="(item, index2) in entry" :key="index2">
                        {{item}}
                    </td>
                </tr>
           </template>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        headers: {
            type: Array,
            default: () => []
        },
        entries: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        renderedHeader() {
            return this.headers.map(header => {
                return header.split(':').shift();
            })
        },

        renderedValues() {
            let keys = this.headers.map(item => {
                return item.split(':').pop();

            })

            return this.entries.map(entry => {
                let temp = [];

                for(let key in keys) {
                    temp.push(entry[key]);
                }
                return temp;
            })
        }
    }
}
</script>

<style>

</style>
