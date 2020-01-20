<template>
  <v-app >
    <navbar v-show="navR" v-if="navR"/>
    <v-content>
      <div><transition appear name="custom-classes-transition" enter-active-class="animated fadeIn"><router-view :key="$route.fullPath" /></transition></div>
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/partials/navbar'
  export default {
    name:'App',
    data: () => ({
      drawer: null,
     
    }),
    computed:{
      navR(){
        if(this.$route.name == "login" || this.$route.name == "signup" || this.$route.name == "Project Report" || this.$route.name == "Bid Report" || this.$route.name == "Contractors Report" || this.$route.name == "Projects Report"){
          return this.nav = false
        }else{
          return this.nav = true
        }
      },
    },
    props: {
      source: String
    },
    components:{
      navbar
    }
  }
</script>