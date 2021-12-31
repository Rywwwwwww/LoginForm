/*========== vue.js ルート機能 =========*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from './pages/Test.vue'

//ログイン
import Login from './pages/Login.vue'

Vue.use(VueRouter)

const routes = [
	{
		// リクエストを/にしたとき
		path: '/',
		component: Test
	},
	{
		// リクエストを/loginにしたとき
		path: '/login',
		component: Login
	}
]

const router = new VueRouter({
	//URL最後の#を無くす
	mode: 'history', 

	routes
})

export default router
