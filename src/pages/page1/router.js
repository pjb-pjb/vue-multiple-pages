import Vue from 'vue'
import Router from 'vue-router'
import Test from "./components/Test"
import Test1 from "./components/Test1"
import Root from "./components/Root"
import Page1 from "./App";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    	path:"/page1",
    	component:Root,
    	children:[
    		{
    			path:"test",
    			component:Test
    		},{
    			path:"test1",
    			component:Test1
    		}
    	]
    }
  ]
})
