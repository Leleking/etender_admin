/* this folder registers all filters globally */
import moment from 'moment'
const filters =  {
    install(Vue){
        Vue.mixin({
            filters:{
                /* example filter */
                capitalize: (value) =>  {
                    if (!value) return ''
                    value = value.toString()
                    return value.charAt(0).toUpperCase() + value.slice(1)
                },
                date: (value) => {
                    return moment(value).format("MMM Do YYYY");  
                }
            }
        })

    }
}

export default filters