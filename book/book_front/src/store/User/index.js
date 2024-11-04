import {initReaderList } from "@/api"

const state = {
	admininfo:{
		username:'',
		phone :'',
		AdminId:'',
	},
	isAdmin:false,
	readerinfo:{
		readerId:'',
		readerName:'',
		readerPhone:'',
	},
	readerlist : [],
	
}
const actions = {
	AdminInfo({commit},data){
		commit('ADMININFO',data)
	},
	ReaderInfo({commit},data){
		commit('READERINFO',data)
	},
	ReaderList({commit}){
		initReaderList().then(res =>{
			commit('READERLIST',res.data)
		},
		err =>{
			console.log(err.message)
		})
	}
}
const mutations = {
	ADMININFO(state,data){
		console.log(data)
		state.admininfo.username = data.userName
		state.admininfo.phone = data.phone
		state.admininfo.AdminId = data.id
		state.isAdmin =  data.isAdmin
	},
	READERINFO(state,data){		
		console.log(data)
		let {readerId,readerName,readerPhone,borrowTimes,ovdTimes} = data
		state.readerinfo = {readerId,readerName,readerPhone,borrowTimes,ovdTimes}
		// console.log(state.readerinfo)
		state.isAdmin = data.isAdmin
	},
	READERLIST(state,data){
		// console.log(data)
		if(data !=null){
			state.readerlist = data.filter( item =>{
				return item.status == 1
			})
			// console.log(state.readerlist)
		}
		else {
			state.readerlist = []
		}
	}
	
}
const getters ={
	
}
export default{
	namespaced:true,
	state,
	actions,
	mutations,
	getters
}