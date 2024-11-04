import { initBooksList } from "@/api"

const state = {
	booklist : [],
}
const actions = {
	GetBooks({commit}){
		initBooksList().then( res=>{
			commit('GEtBOOkS',res.data)
		},err =>{
			console.log(err.msg)
		})
	}
}
const mutations = {
	GEtBOOkS(state,data){
		if(data !=null){
		state.booklist = data.filter(item =>{
			return item.status === 1
		})
		}
		else state.booklist =[]
	},
}
const getters = {
	
}
export default {
	namespaced:true,
	state,
	actions,
	mutations,
	getters
}