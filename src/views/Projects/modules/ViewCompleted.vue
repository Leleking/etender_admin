<template>
  <v-container>
    <v-card>
        <v-card-title>
        Completed Projects
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="projects"
        :search="search"
        >
        <template v-slot:items="props" >
            <td >{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.agency }}</td>
            <td class="text-xs-right">{{ props.item.budget }}</td>
            <td class="text-xs-right">{{ props.item.total_bids }}</td>
            <td v-if="!props.item.status" class="text-xs-right">Active</td>
            <td v-else class="text-xs-right">Ended</td>
            <td class="text-xs-right">options</td>
        </template>
       <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
        </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import {apiDomain} from '@/utils/constants'
    export default {
        data() {
            return {
                search:'',
                headers: [
                    {
                        text: '#Project Id',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Institution', value: 'institution' },
                    { text: 'Average Cost', value: 'cost' },
                    { text: 'Total Bids', value: 'total_bid' },
                    { text: 'Status', value: 'status'},
                    { text: 'Options', value:'options'}
                ],
                projects:[],
                objData:{}
            }
        },
        mounted(){
            this.objData.url = apiDomain + "admin/project/completed"
            this.$store.dispatch('getReqData',this.objData).then((res)=>{
                this.projects = res.data
            }) 
        }
    }
</script>

<style scoped>

</style>