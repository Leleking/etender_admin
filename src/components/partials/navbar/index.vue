<template>
    <div>
     <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed dark  app>
       <v-list>
         <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/static/assets/img/profile.png">
            </v-list-tile-avatar>

            <v-list-tile-content v-if="this.$store.state.authStore.authUser">
              <v-list-tile-title >{{this.$store.state.authStore.authUser.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
       </v-list>
      <v-list dense>
        <template v-for="item in routes">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader>
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children && item.meta && item.meta.nav"
            :key="item.name"
            v-model="item.meta.model"
            :prepend-icon="item.meta.icon"
            v-show="role == item.meta.role || !item.meta.role"
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.name }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="route(`${item.path}/${child.path}`)"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon v-if="child.meta.icon">{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.name }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else-if="item.meta && item.meta.nav" :key="item.name" v-show="role == item.meta.role || !item.meta.role"   @click="route(item.path)">
            <v-list-tile-action>
              <v-icon v-if="item.meta.icon">{{ item.meta.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar style="padding-down:0px;margin-down:0px" :clipped-left="$vuetify.breakpoint.lgAndUp" color="success" app dark fixed>
      <v-toolbar-title style="width: 300px">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Vector - {{getRole}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-progress-circular
        indeterminate
        :size="25"
        color="white"
        v-show="this.$store.state.routeStore.loading"
      ></v-progress-circular>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu>
        <v-btn icon  slot="activator">
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-title>logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    </div>
   
</template>

<script>
import {routes} from '@/router/routes.js'
  export default {
    data() {
      return {
      drawer:null,
      routes,
      role:this.$store.state.authStore.authUser ? this.$store.state.authStore.authUser.role: null,
      links:[]
      }
    },
    methods:{
      route(path){
        this.$router.push({path})
      },
      logout(){
          this.$store.dispatch('unsetUserObject')
          this.$router.push({name:'login'})
      },
    },
    computed:{
      getRole(){
        switch (this.role) {
          case 2:
            return "Doctor"
          case 3:
            return "Nurse"
          default:
            return "Admin" ;
        }
      }
    },
    created(){
      //console.log(this.getRole)
    }
    
  }
</script>

<style scoped>

</style>