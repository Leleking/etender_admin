<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex md3>
                    <router-link to="/">
                        <v-card dark color="blue-grey darken-2" class="white--text">
                            <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Add Admin</v-card-text>
                        </v-card>
                    </router-link>
                </v-flex>
                <v-flex md3>
                    <router-link to="/">
                        <v-card dark color="blue-grey darken-2" class="white--text">
                            <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Notifications</v-card-text>
                        </v-card>
                    </router-link>
                </v-flex>
                <v-flex md3>
                    <router-link to="/">
                        <v-card dark color="blue-grey darken-2" class="white--text">
                            <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Proje</v-card-text>
                        </v-card>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.removeline{
    text-decoration: none
}
a{
    text-decoration: none;
}
</style>