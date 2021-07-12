import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state:{
        paymentsList:[],
        category:[],
    },
    mutations:{
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        addDataToPaymentList(state, payload) {
            // @ts-ignore
            state.paymentsList.push(payload)
        },
        addCategory(state, payload) {
            state.category = payload
        },
    },
    getters:{
        getPaymentList: state => state.paymentsList,
        getFullPaymentValue: state => {
            // @ts-ignore
            return state.paymentsList.reduce((res, cur)=> res + cur.value, 0)},
        // @ts-ignore
        getCategoryFull: state => {return state.paymentsList.map(i=> i.category)},
        getCategoryList: state => {return state.category}
    },
    actions:{
        someAction({commit}, res){
            commit('setPaymentsListData', res)
        },
        fetchCategoryList({commit}){
            return new Promise((resolve)=> {
                setTimeout(()=> {
                    resolve (['food', 'transport', 'education', 'internet'])
                }, 1000)
            }) 
            .then (res => commit('addCategory', res))
        },
        fetchData({dispatch}){
            return new Promise((resolve)=> {
                setTimeout(()=> {
                    const items = []
                    for (let i = 1; i < 50; i++) {
                        items.push({
                            date: '06.07.2021',
                            category: 'food',
                            value: i,
                            id: i
                        })
                    }
                    resolve(items)
                }, 2000)
            })
            .then (res=> dispatch('someAction', res))
        }

    }

})
