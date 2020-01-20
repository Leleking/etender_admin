<template>
  <div>
    

    <v-container>
      
      <v-card>
        <v-form>
            <div style="font-size:25px;text-align:center">
                <u>Report on {{project.name}} created on {{project.created_at | date}}</u>
            </div>
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
              readonly
              >

              </v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-select
              readonly
              value=""
              v-model="project.category_id"
              :items="project_category"
              label="Project Category"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-select readonly label="Currency" v-model="project.currency" :items="currency">
              </v-select>
            </v-flex>
            <v-flex xs4>
              <v-text-field
              readonly
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
              readonly
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
              <v-select readonly label="Type of Tender" v-model="project.tender_type_id" :items="tender_type">
              </v-select>
            </v-flex>
            <v-flex xs4>
              <v-select readonly label="Region" v-model="project.region_id" :items="region">
              </v-select>
            </v-flex>
            <v-flex xs4>
              <v-text-field 
              readonly
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
              readonly
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
              readonly
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
            <v-flex xs3>
              <v-switch
              readonly
                v-if="project.avg_budget"
                v-model="project.avg_budget"
                :label="`shortlist with average budget`"
              ></v-switch> 
            </v-flex>
            <v-flex xs3>
              <v-switch
              readonly
                v-if="project.shuffle"
                v-model="project.shuffle"
                :label="`Shuffle bids`"
              ></v-switch>
            </v-flex>
           <v-flex xs3 v-if="project.experience">
              <v-text-field 
              readonly
                label="Experience"
                name="experience"
                value=""
                v-model="project.experience"
              >
              </v-text-field>
            </v-flex>
             
          </v-layout>
          <v-layout row wrap>
             <v-flex xs12>
              <v-textarea
              readonly
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
              readonly
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
    created(){
        this.objData.url = apiDomain + 'admin/project/' + this.$route.params.id
        this.$store.dispatch('getReqData',this.objData).then((res) => {
            console.log(res)
            this.project = res.project
            var details =  res.project_detail
            var specification = res.specification
            this.project = {...this.project,...details,...specification}
        })
        
    }
    
  }
</script>

<style scoped>

</style>