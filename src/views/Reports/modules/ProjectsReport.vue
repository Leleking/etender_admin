<template>
  <v-container>
    <v-card>
        <v-card-title>
            <div style="font-size:25px;text-align:center">
                <u>Report on all Projects</u>
            </div>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="projects"
        :search="search"
        >
        <template v-slot:items="props" >
            <td >{{ props.item.id }}</td>
            <td >{{ props.item.name }}</td>
            <td>{{ props.item.agency }}</td>
            <td>{{ props.item.budget }}</td>
            <td>{{ props.item.total_bids }}</td>
            <td>{{props.item.category}}</td>
            <td v-if="!props.item.status" class="text-xs-right">Active</td>
            <td v-else>Ended</td>
           
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
                sheet:false,
                search:"",
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
                        text: 'Status',
                        value: 'status'
                    },
                ],
                tiles: [
                    { img: 'messenger.png', title: 'All Projects',name:"projects" },
                    { img: 'messenger.png', title: 'Projects Due',name:"projects_due" },
                ],
                projects:[],
                objData:{}
            }
        },
        mounted(){
            //window.print();
            this.objData.url = apiDomain + "admin/project/view/all"
            this.$store.dispatch('getReqData',this.objData).then((res)=>{
                console.log(res)
                this.projects = res.data
            }) 
        },
        methods:{
            routeWithParams(name,id){
            this.$router.push({name,params:{id}})
          }
        }
    }
</script>

<style scoped>
a {
    color:white;
}
</style>