<template>
    <div>
        <v-layout row wrap>   
            <v-flex md3>
                <router-link to="/calender" class="removeline">
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Project Calender</v-card-text>
                    </v-card>
               </router-link>
            </v-flex>
            <v-flex md3>
                <router-link to="/projects/create" class="removeline">
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Create Project</v-card-text>
                    </v-card>
               </router-link>
            </v-flex>
            <v-flex md3>
               <router-link to="/settings" class="removeline">
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Settings</v-card-text>
                    </v-card>
               </router-link>
            </v-flex>
        </v-layout>
       <!--  <v-layout row wrap>
            <v-flex md6>
                 <Chart/>
            </v-flex>
        </v-layout> -->
       
    </div>
</template>

<script>
    export default {
        components:{
            Chart
        }
        
    }
</script>

<style scoped>
.removeline{
    text-decoration: none
}
</style>