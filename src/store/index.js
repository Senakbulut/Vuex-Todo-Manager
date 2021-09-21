
import todos from './modules/todos'
import { createStore } from 'vuex'
//Load vuex
// Vue.use(Vuex)

//Create store
// export default new Vuex.Store({
//     modules:{
//         todos
//     }
// })
export const store = createStore({
    modules:{
        todos
    }
})
