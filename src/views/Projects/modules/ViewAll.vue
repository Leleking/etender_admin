<template>
  <v-container>
    <v-card>
        <v-card-title>
         <v-btn
          color="purple"
          dark
          @click="route('Projects Report')"
        >
          Generate Projects Report
        </v-btn>
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
            <td >{{ props.item.name }}</td>
            <td>{{ props.item.agency }}</td>
            <td>{{ props.item.budget }}</td>
            <td>{{props.item.category}}</td>
            <td v-if="!props.item.status" class="text-xs-right">Active</td>
            <td v-else>Ended</td>
            <td style="width:25%">
                <v-btn fab small color="info">
                    <router-link :to="{ name: 'Edit Tender', params: { id: props.item.id }}"><v-icon>edit</v-icon></router-link>                    
                </v-btn>
                <v-btn fab small color="warning"
                 @click="routeWithParams('Project Report',props.item.id)">
                    <v-icon>file_copy</v-icon>
                </v-btn>
                <v-btn fab small color="error">
                    <v-icon>delete</v-icon>
                </v-btn>
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
      <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet">
       
      <v-list>
        <v-subheader>Open in</v-subheader>
        <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title ><router-link :to="{ name: 'Projects Report'}"></router-link></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
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
                        text:'Category',
                        value:"category"
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
          },
           route(name){
            this.$router.push({name})
          }
        }
    }
</script>

<style scoped>
a {
    color:white;
}
</style>