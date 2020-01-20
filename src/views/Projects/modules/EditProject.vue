<template>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      type="info"
    >
      You have successfully added a new tender
    </v-alert>

    <v-container>
      
      <v-card>
        <v-form>
          <v-container>
            <v-layout row wrap>
            <v-flex xs6>
              <v-text-field
              label="Name of Project"
              name="name"
              value=""
              v-model="project.name"
              v-validate="'required'"
              :error-messages="errors.collect('name')"
              data-vv-name="name"
              required
              >

              </v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-select
              value=""
              v-model="project.category_id"
              :items="project_category"
              label="Project Category"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-select label="Currency" v-model="project.currency" :items="currency">
              </v-select>
            </v-flex>
            <v-flex xs4>
              <v-text-field
                value="" 
                label="Budget" 
                type="number"
                name="budget"
                v-model="project.budget"
                v-validate="'required'"
                :error-messages="errors.collect('budget')"
                data-vv-name="budget"
                required  
              >
              </v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field
                value="" 
                label="End Date" 
                type="date"
                name="end_date"
                v-model="project.end_date"
                v-validate="'required'"
                :error-messages="errors.collect('end_date')"
                data-vv-name="end_date"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-select label="Type of Tender" v-model="project.tender_type_id" :items="tender_type">
              </v-select>
            </v-flex>
            <v-flex xs4>
              <v-select label="Region" v-model="project.region_id" :items="region">
              </v-select>
            </v-flex>
            <v-flex xs4>
              <v-text-field 
                label="Agency" 
                type="text"
                name="Agency"
                value=""
                v-model="project.agency"
                v-validate="'required'"
                :error-messages="errors.collect('Agency')"
                data-vv-name="Agency"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-text-field 
                label="Contact"
                name="contact"
                value=""
                v-model="project.contact"
                v-validate="'required'"
                :error-messages="errors.collect('contact')"
                data-vv-name="contact"
                required
              >
              </v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field 
                label="Funding"
                name="funding"
                value=""
                v-model="project.funding"
                v-validate="'required'"
                :error-messages="errors.collect('funding')"
                data-vv-name="funding"
                required  
              >
              </v-text-field>
            </v-flex>
             <v-flex xs4>
              <v-select attach chips multiple label="Shortlist By" v-model="shortlist" :items="bid_specification">
              </v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
             <v-flex xs12>
              <v-textarea
              v-model="project.body"
              label="About Project"
              name="about"
              value=""
              v-validate="'required'"
              :error-messages="errors.collect('about')"
                data-vv-name="about"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>
           <v-layout row wrap>
             <v-flex xs12>
              <v-textarea
              v-model="project.skills_required"
              label="Skills Required"
              name="skills"
              value=""
              v-validate="'required'"
              :error-messages="errors.collect('skill')"
                data-vv-name="skills"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn color="primary" round block @click.prevent="save()">Update Tender</v-btn>
            </v-flex>
          </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
   
  </div>
</template>

<script>
import {apiDomain} from '@/utils/constants'
  export default {
    data() {
      return {
        alert:false,
        project_category: [
          {text:'Construction',value:1},
          {text:'IT',value:2},
          {text:'Goods and Services',value:3}
        ],
        currency:['GH','USD'],
        tender_type:[
          {text:'NCT',value:1},
          {text:'ICT',value:2}
        ],
        shortlist:[],
        bid_specification:[
          {
            text:"Shortlist below average budget",
            value:"average"

          },
          {
            text:"Shortlist with Experience",
            value:"experience"

          },
        ],
        region:[
          {text:'Greater Accra Region',value:1},
          {text:'Ashanti Region',value:2}
        ],
        project:{},
        shuffle:false,
        objData:{}
      }
    },
    methods:{
      save(){
        this.$validator.validateAll().then(()=>{
          if(!this.errors.any()){
            this.project.url = apiDomain + 'admin/project/create'
            this.project.shortlist = this.shortlist
            this.project.shuffle  = this.shuffle
            this.$store.dispatch('postReqData', this.project).then((res) => {
              console.log(res)
              this.alert = true
              this.$store.dispatch("success","Project successfully added")
            })
          }
        }).catch((err)=>{
              console.log(err)
              this.$store.dispatch("error",err.body.message)          
        }) 
      }
    },
    created(){
        this.objData.url = apiDomain + 'admin/project/' + this.$route.params.id
        this.$store.dispatch('getReqData',this.objData).then((res) => {
            console.log(res)
            this.project = res.project
            var details =  res.project_detail
            this.project = {...this.project,...details}
            console.log(this.project)
        })
    }
    
  }
</script>

<style scoped>

</style>