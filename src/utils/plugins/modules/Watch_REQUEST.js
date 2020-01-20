import store from '@/store'
import Vue from 'vue'
import {getHeader,loginUrl,signUpUrl} from '@/config'
const WATCH_ALL_REQUEST = () => {
    Vue.config.productionTip = false
    Vue.http.interceptors.push(function(request, next) {
    store.dispatch('setLoading',true)
    if(request.url !== loginUrl || request.url !== signUpUrl){
    const header = getHeader()
    request.headers.set('Authorization', header.Authorization)
    request.headers.set('Accept' ,header.Accept)  
    next((response)=>{
        store.dispatch('setLoading',false)
        return response
    })

    }else{
        store.dispatch('setLoading',true)
        next()
    }



})

}
export default WATCH_ALL_REQUEST