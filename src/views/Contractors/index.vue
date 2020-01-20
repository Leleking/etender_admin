<template>
    <div>
        <!-- display all contractors -->
         <v-container>
    <v-card>
        <v-card-title>
       
         <v-btn
          color="purple"
          dark
          @click="routeWithParams('Contractors Report')"
        >
          Generate Contractors Report
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
        :items="contractors"
        :search="search"
        :loading="loading"
        class="elevation-1"
        >
        <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
        <template v-slot:items="props" >
            <td >{{ props.item.id }}</td>
            <td >{{ props.item.name }}</td>
            <td>{{ props.item.name }}</td>
            <td v-if="props.item.status">Active</td>
            <td v-else>Ended</td>
            <td style="width:20%">
                <v-tooltip left>
                    <template v-slot:activator="{ on }">
                        <v-btn fab small color="info" dark v-on="on">
                            <v-icon>star</v-icon>
                        </v-btn>
                    </template>
                    <span>Rate this Contractor</span>
                </v-tooltip>

                
                <v-btn fab small color="warning">
                    <v-icon>visibility</v-icon>
                </v-btn>
                <v-btn fab small color="error">
                    <v-icon>delete</v-icon>
                </v-btn>
            </td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
        </v-data-table>
    </v-card>
  </v-container>
    </div>
</template>

<script>
import {apiDomain} from "@/utils/constants"
    export default {
        data() {
            return {
                objData: {},
                search:"",
                loading:true,
                contractors:[],
                headers:[
                     {
                        text: '#Contractor Id',            
                        value: 'id'
                    },
                    {
                        text:"Name",
                        value:"name"
                    },
                    {
                        text:"Company",
                        value:"company"
                    },
                    {
                        text:"Company Status",
                        value:"status"
                    },
                    {
                        text:"Options",
                        value:"options"
                    }
                ]
            }
        },
        methods:{
            routeWithParams(name){
            this.$router.push({name})
          }
        },
        created(){
            this.objData.url = apiDomain + "admin/contractors"
            this.$store.dispatch("getReqData",this.objData).then((res)=>{
                this.contractors = res.data
                this.loading = false
            }).catch((err)=>{
                console.log(err)
            })
        }
        
    }
</script>

<style  scoped>

</style>