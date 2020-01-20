<template>
  <div>
        <v-card>
       
        <v-list>
            <v-container grid-list-md text-xs-center>
                <div style="font-size:25px;text-align:center">
                   <u>Report on {{project.name}} created on {{project.created_at | date}}</u>
                </div>
                <v-layout wrap row>
                <v-flex md6>
                     <v-btn
                    color="red"
                    dark
                    @click="analysics = !analysics"
                    >
                        Statistics
                    </v-btn>
                    <data-chart  :label="label" :labels="labels" :data="count"/>
                </v-flex>
                <v-flex md6>
                    <v-container>
                        <div>
                            Number of contractors granted an invitation : {{this.count[1]}}
                        </div>
                         <div>
                            Number of contractors active : {{this.count[2]}}
                        </div>
                         <div>
                            Number of contractors shortlisted : {{this.count[0]}}
                        </div>
                    </v-container>
                </v-flex>
            </v-layout>
            </v-container>
        </v-list>
    
      </v-card>
          
    <v-card>
        <v-card-title>
            View Bids
            <v-spacer></v-spacer>
            
          
           
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="bids"
        >
        <template v-slot:items="props">
            <tr :class="{invited:props.item.status == 1,shortlist:props.item.status == 3}">
                <td>{{ props.item.id  }}</td>
                <td >{{ props.item.company_name  }}</td>
                <td>
                    {{props.item.experience}}
                </td>
                <td>
                    GHS {{ props.item.budget }}
                </td>
                
                
                <td v-if="!props.item.status">Active
                </td>
                <td v-else-if="props.item.status == 1">Invited</td>
                <td v-else-if="props.item.status == 2 ">Granted</td>
                <td v-else-if="props.item.status == 3 ">Shortlisted</td>
            </tr>
           
        </template>
       
        </v-data-table>
    </v-card>



    
     <v-card>
        <v-card-title>
            Shortlisted Bids
            <v-spacer></v-spacer>
            
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="shortlisted"
        >
        <template v-slot:items="props">
            <tr :class="{invited:props.item.status == 1}">
                <td>{{ props.item.id  }}</td>
                <td >{{ props.item.company_name  }}</td>
                <td>
                    {{props.item.experience}}
                </td>
                <td>
                    GHS {{ props.item.budget }}
                </td>
                
                <td v-if="!props.item.status" class="text-xs-right">
                    Active
                </td>
                <td v-else-if="props.item.status == 1">Invited</td>
                <td v-else-if="props.item.status == 2 ">Granted</td>
                <td v-else-if="props.item.status == 3 ">Shortlisted</td>
                
            </tr>
           
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
        </v-alert>
        </v-data-table>
    </v-card>
    <page-load :show="loading"/>
   <!--  <div>
        <img :src="`${IMAGE_URL}/${image}`" alt="preview">
    </div> -->


    <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
     
       
         <v-container>
              <img height="500" width="500" :src="`${IMAGE_URL}/${image}`" alt="preview">
         </v-container>
       
    </v-dialog>
  </div>




  <!--  grant invitation dialog -->
  <v-dialog
      v-model="dialog1"
      max-width="500"
    >
      <v-card  dark>
        <v-card-title class="headline">Grant Invitation</v-card-title>

        <v-card-text>
         <center> Send <v-chip> {{this.name}} </v-chip>  an invitation </center> 
        </v-card-text>
        <v-card-text>
            <form>
                <v-layout>
                    <v-flex>

                    </v-flex>
                    <v-flex>

                    </v-flex>
                </v-layout>
                <v-textarea
                
                    autofocus
                    color="white"
                    auto-grow
                    solo
                    name="input-7-4"
                    label="Solo textarea"
                    v-model="message"
                    :value="`Dear ${this.name}, 
                    As a result of your application for the bid on 
                    (${this.project.name}), I would like to invite 
                    you to atten an interview on (date) at our office
                     in (sample),MA. You will have the interview with the 
                     department manager, (sample). 
                     The interview will last about (45minutes). 
                     Please bring a copy of your driver's license 
                     to the interview. If 
                     the date or time of the interview is 
                     inconvenient, please contact vector by phone 
                     on (024444444) to arrange another appointment.
                      We look forward to seeing you  `" 
                ></v-textarea>
            </form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog1 = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="sendInvitation()"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- end grant invitation -->

    <page-load :show="loading"/>





    <!-- Analysics -->
     
   
    

  </div>
</template>
<script>
import {apiDomain,IMAGE_URL,FILE_URL} from '@/utils/constants'
    export default {
        data() {
            return {
                id:0,
                analysics:false,
                message:"",
                label: "",
                labels: [],
                count: [],
                loading:false,
                search_shortlist:"",
                project:{},
                dialog:false,
                dialog1:false,
                search:"",
                loading:false,
                IMAGE_URL,
                FILE_URL,
                image:"",
                name:"",
                headers: [
                    {
                        text: '#Bid Id',            
                        value: 'id'
                    },
                    { 
                        text: 'Company Name',
                        value: 'company_name'
                    },
                    {
                        text: 'Experience',
                        value: 'experience'
                    },
                    {
                        text: 'Budget',
                        value: 'budget'
                    },
                   
                    {
                        text: 'Status',
                        value: 'status'
                    },
                ],
                bids:[],
                objData:{},
                shortlisted:[],

            }
        },
        computed: {
            _label() {
                return this.label;
            },
            _labels() {
                return this.labels;
            },
            _count() {
                return this.count;
            }
        },
        methods:{
            getBids(){
                this.objData.url = apiDomain + "admin/project/bids/" + this.$route.params.id
                this.$store.dispatch('getReqData',this.objData).then((res)=>{
                this.bids = res.data
                this.shortlisted = this.bids.filter((bid) =>{
                    return bid.status == 3
                })
                
                this.bids = this.bids.filter((bid) =>{
                    return bid.status < 3
                })
                var invited = []
                invited = this.bids.filter((bid) =>{
                    return bid.status == 1
                })
                var active = []
                active = this.bids.filter((bid) =>{
                    return bid.status == 0
                })
                this.label ="Line Chart"
                this.labels = ["Shortlisted","Invited","Active"]               
                this.count = [this.shortlisted.length,invited.length,active.length]
                console.log(this.count)
                })
                .catch((e) => {
                console.log(e)
                })
               
            },
            routeWithParams(name,id){
                this.$router.push({name,params:{id}})
            },
            viewMedia(media){
                this.dialog = true
                this.image = media
            },
            viewGrant(id,name){
                this.name = name
                this.id = id
                this.message = `Dear ${this.name}, As a result of your application for the bid on (${this.project.name}), I would like to invite you to atten an interview on (date) at our office in (sample),MA. You will have the interview with the department manager, (sample). The interview will last about (45minutes). Please bring a copy of your driver's license to the interview. If the date or time of the interview is inconvenient, please contact vector by phone on (024444444) to arrange another appointment. We look forward to seeing you  `
                this.dialog1 = true
            },
            sendInvitation(){
                this.loading = true
                this.objData.url = apiDomain + "admin/grant/interview"
                this.objData.id  = this.id
                this.objData.message = `${this.message}`
                this.$store.dispatch('postReqData',this.objData).then((res) => {
                    this.loading = false
                    this.dialog1 = false
                    this.$store.dispatch("success",res.body.data)
                    this.getBids()
                }).catch((err) => {
                    this.loading = false
                    this.dialog1 = false
                    this.$store.dispatch("error",err.body.data)
                })

            },
            getProject(){
                this.objData.url = apiDomain + "admin/project/" + this.$route.params.id
                this.$store.dispatch('getReqData',this.objData).then((res)=>{
                console.log(res)
                this.project = res.project
                }).catch((e) => {
                console.log(e)
                })
            }
          
          

        },
        created(){
            this.getProject()
            this.getBids()
            window.print()
        }
    }
</script>

<style scoped>
.invited{
    background-color:lightslategrey;
    color:white
}
.shortlist{
    background-color: #E82D38;
    color:white
}
.invited:hover{
    color:black
}
</style>

/* #F82F6C */