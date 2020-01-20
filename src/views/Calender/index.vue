<template>
  <v-container>
    <v-layout>
        <v-flex>
        <v-sheet height="500">
            <v-calendar
            :now="_today"
            :value="_today"
            color="primary"
            >
            <template
                slot="day"
                slot-scope="{ date }"
            >
                <template v-for="event in eventsMap[date]">
                <v-menu
                    :key="event.title"
                    v-model="event.open"
                    full-width
                    offset-x
                >
                    <div
                    v-if="!event.time"
                    slot="activator"
                    v-ripple
                    class="my-event"
                    v-html="event.title"
                    ></div>
                    <v-card
                    color="grey lighten-4"
                    min-width="350px"
                    flat
                    >
                    <v-toolbar
                        :color="checkDay(event.date)"
                        dark
                    >
                        <v-btn icon>
                        <v-icon>edit</v-icon>
                        </v-btn>
                        <v-toolbar-title v-html="event.title"></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                        </v-btn>
                        <v-btn icon>
                        <v-icon>more_vert</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-title primary-title>
                        <span v-html="event.details"></span>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn
                        flat
                        color="secondary"
                        >
                        Cancel
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-menu>
                </template>
            </template>
            </v-calendar>
        </v-sheet>
        </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
import {apiDomain} from '@/utils/constants'
  export default {
    data: () => ({
      today: '',
      events: [
        /* {
          title: 'Making Invoices',
          details: 'making invoices at sector 9!',
          date: '2018-12-30',
          open: true
        }, */
      ],
      objData:{},
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      },
      _today(){
        var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = yyyy + '-' + mm + '-' + dd;
      return today;
      }
    },
    methods: {
      open (event) {
        alert(event.title)
      },
      checkDay(payload){
        if(payload !== this._today){
          return "primary"
        }else{
          return "danger"
        }
      }
    },
    mounted(){
     
      this.objData.url = apiDomain + "admin/project/calender"
      this.$store.dispatch("getReqData",this.objData).then((res)=> {
        console.log(res.data)
        this.events =res.data
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
</script>
<style scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>