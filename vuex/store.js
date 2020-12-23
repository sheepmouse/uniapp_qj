import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		tabBarList: [{
			iconPath: "/static/images/index.png",
			selectedIconPath: "/static/images/index.png",
			text: '首页',
			pagePath: "pages/home/home",
		}, {
			iconPath: "/static/images/product.png",
			selectedIconPath: "/static/images/product-on.png",
			text: '产品',
			pagePath: "pages/product/product",
		}, {
			iconPath: "/static/images/vipperson.png",
			selectedIconPath: "/static/images/vip-on.png",
			text: '会员',
			pagePath: "pages/vip/vip",
		}, {
			iconPath: "/static/images/my.png",
			selectedIconPath: "/static/images/my-on.png",
			text: '我的',
			pagePath: "pages/my/my",
		}, ],
	}
})
export default store
