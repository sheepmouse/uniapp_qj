import Vue from 'vue'
import App from './App'
import store from './vuex/store.js'
import uView from "uview-ui";

//引入colorUi
Vue.config.productionTip = false
App.mpType = 'app'
//引入uviewUI
Vue.use(uView);
const app = new Vue({
    ...App,
	store
})
app.$mount()
