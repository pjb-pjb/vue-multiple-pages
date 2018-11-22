import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
new Vue({
	render: function (createElement) {
  		return createElement(App)
	},
	el:"#app",
	router
});