import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource'
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css'
import {GlobalComponents,Watch_REQUEST} from './modules'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import  filters    from '../filters'
const plugins={
    install(Vue,options){
       
        Vue.use(Vuetify,{
            iconfont:'md'
        })
        Vue.use(VueIziToast)
        Vue.use(VeeValidate)
        Vue.use(VueResource)
        Vue.use(filters)
        Watch_REQUEST()
        GlobalComponents()

        
       
        
    }
}
export default plugins