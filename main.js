import Vue from 'vue'
import App from './App'
import store from './vuex/store.js'
import uView from "uview-ui"
Vue.use(uView);
//引入colorUi
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App	,
	store
})
app.$mount() //挂载Vue实例