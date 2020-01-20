<template>
  <v-container>
    <v-card>
        <v-card-title>
        View All Projects
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
            <td >{{ props.item.id  }}</td>
            <td >{{ props.item.name | capitalize}}</td>
            <td>{{ props.item.agency }}</td>
            <td>{{ props.item.budget }}</td>
            <td>{{ props.item.total_bids }}</td>
            <td>{{props.item.category}}</td>
            <td>{{props.item.end_date | date}}</td>
            <td v-if="!props.item.status" class="text-xs-right">Active</td>
            <td v-else>Ended</td>
            <td style="width:25%">
                <v-tooltip left>
                    <template v-slot:activator="{ on }">
                        <v-btn fab small color="info" dark v-on="on">
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </template>
                    <span>Project</span>
                </v-tooltip>
               <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn fab small color="warning" dark v-on="on">
                            <v-icon>visibility</v-icon>
                        </v-btn>
                    </template>
                    <span>View Tender Details</span>
                </v-tooltip>
                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-btn fab small color="danger" @click="routeWithParams('bids_project',props.item.id)" dark v-on="on">
                            <v-icon>tab</v-icon>
                        </v-btn>
                    </template>
                    <span>View all Bids on this project</span>
                </v-tooltip>
            </td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
        </v-data-table>
    </v-card>
    <page-load :show="loading"/>
  </v-container>
</template>
<script>
import {apiDomain} from '@/utils/constants'
    export default {
        data() {
            return {
                search:"",
                loading:false,
                headers: [
                    {
                        text: '#Project Id',            
                        value: 'id'
                    },
                    { 
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        text: 'Agency',
                        value: 'agency'
                    },
                    {
                        text: 'Average Cost',
                        value: 'cost'
                    },
                    {
                        text: 'Total Bids',
                        value: 'total_bid'
                    },
                    {
                        text:'Category',
                        value:"category"
                    },
                    {
                        text:'End Date',
                        value:'end_date'
                    },
                    {
                        text: 'Status',
                        value: 'status'
                    },
                    {
                        text: 'Options',
                        value:'options'
                    }
                ],
                projects:[],
                objData:{},
            }
        },
        methods:{
            routeWithParams(name,id){
            this.$router.push({name,params:{id}})
          }

        },
        mounted(){
            this.objData.url = apiDomain + "admin/project/view/due"
            this.$store.dispatch('getReqData',this.objData).then((res)=>{
                console.log(res)
                this.projects = res.data
            }) 
        }
    }
</script>

<style scoped>

</style>