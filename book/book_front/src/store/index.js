import Vue from "vue";
import 	Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)
import User from '@/store/User'
import Books from '@/store/Books'
import Borrows from '@/store/Borrows'
import Comment from "@/store/Comment"
import Report from "@/store/Report"


export default new Vuex.Store({
	modules:{
		User,
		Books,
		Borrows,
		Comment,
		Report,
		
	},
	plugins: [
	    createPersistedState({
	        storage: window.sessionStorage,
	        paths: ["Books", "User","Borrows"]
	    })
	]
})