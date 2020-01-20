<template>
    <v-container>
     
    </v-toolbar>  
    <v-card>
        <v-card-title>
      Doctors
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
       <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" v-model="dialog" @click="editedItem = {}, url = null,reset()" color="primary" dark class="mb-2">New Doctor</v-btn>

        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field 
                    v-model="editedItem.name"
                    v-validate="'required'"
                    :error-messages="errors.collect('name')"
                    label="Name"
                    data-vv-name="name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.department" label="department"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.phone"
                    v-validate="'required|max:10'"
                    :counter="10"
                    :error-messages="errors.collect('phone')"
                    label="phone"
                    data-vv-name="phone"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md12>
                  <v-text-field
                    v-model="editedItem.email"
                    v-validate="'required|email'"
                    :error-messages="errors.collect('email')"
                    label="E-mail"
                    data-vv-name="email"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                    <label for="">Profile Image</label>
                  <input type="file" @change="onFileChange" ref="fileInput"/>
                        <div id="preview">
                            <img v-if="url" width="400" height="150px" :src="url" />
                        </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="doctors"
      :search="search"
      :loading="loading"
    >
      <template slot="items" slot-scope="props">
        <td>
            <v-avatar size="32px">
            <img
                :src="`${base}/doctors/${props.item.image}`"
                alt="profile"
                class=""
            >
        </v-avatar>
        </td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.phone }}</td>
        <td>{{ props.item.department }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item.id)"
          >
            edit
          </v-icon>
          <v-icon
            small
            class="mr-2"
            @click="deleteItem(props.item.id)"
            
          >
            delete
          </v-icon>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
  <v-dialog v-model="confirm" persistent max-width="290">
      
      <v-card>
        <v-card-title class="headline">Are you sure you want to delete this?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="confirm = false">No</v-btn>
          <v-btn color="green darken-1" flat @click="confirm = false">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-container>
</template>
<script>
import {apiDomain,IMAGE_URL} from '@/utils/constants'
  export default {
    data () {
      return {
        base:IMAGE_URL,
        loading:false,
        confirm:false,
        dialog:false,
        editedIndex: -1,
        search: '',
        editedItem:{
            id:null,
            name:"",
            email:"",
            phone:"",
            department:"",
            image:"",
        },
        formTitle:"Doctor",
        headers: [
          {
            text: 'Image',
            sortable: false,
            value: 'name'
          },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
          { text: 'Department', value: 'department' },
          { text: 'Options', value: 'options' }
        ],
        doctors: [
          
        ],
        url:null
      }
    },
    mounted(){
        this.loading = true
        this.doctors.url =  apiDomain +"doctor"
        this.$store.dispatch('getReqData',this.doctors).then((res)=>{
        this.doctors = res.data
        this.loading = false
        })
    },
    methods:{
        reset(){
            const input = this.$refs.fileInput
            input.type = 'text'
            input.type = 'file'
            this.editedItem = {
                id:null,
            name:"",
            email:"",
            phone:"",
            department:"",
            image:"",
            }
        },
       editItem(id){
            var item = this.doctors.find(item => item.id === id);
            this.dialog = true
            return this.editedItem = {...item,image:null}
            
        },
        onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
        var fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (e) => {
            this.editedItem.image = e.target.result
        }
            console.log(this.editedItem)
        },
        deleteItem(id){
            var item = this.doctors.find(item => item.id === id);
            this.confirm = true
        },
        save(){
           //if(!this.editedIndex.image)

            console.log(this.editedItem)
            this.$validator.validateAll().then(()=>{
                if(!this.errors.any()){
                    this.editedItem.url = apiDomain + "doctor/add"
                    //this.editedItem.image = this.editedItem.image ? this.editedItem.image :null
                    this.$store.dispatch('postReqData',this.editedItem).then((res)=>{
                        console.log(res)
                        
                        this.$store.dispatch("success",`${this.editedItem.name} has successfully been added to the database`)
                        if(this.editedItem.id){
                            var index = this.doctors.findIndex(item => item.id === this.editedItem.id)
                            this.doctors[index] = {...this.editedItem} 
                        }else{
                        this.doctors.push(this.editedItem)                        
                        }
                        this.dialog = false
                        this.reset()
                        
                    })
                }
            }).catch()
            
        }

    }
  }
</script>