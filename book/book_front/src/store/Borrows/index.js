import { initBorrows,initBorrowslist,initReader,getbook} from "@/api"
import moment from 'moment'
import qs from 'qs'
const state = {
	readerborows:[],
	borrowlist:[],
	name:[],
	namelist:[],
	bookName:[],
	bookNamelist:[]
}
const actions = {
	Borrow({commit},value){
		// console.log(value)
		initBorrows(value).then( res =>{
			// console.log(1)
			commit('BORROW',res)
		},
		err =>{
			console.log(err.msg)
		})
	},
	Adminborow({commit}){
		initBorrowslist().then( res=>{
			commit('ADMINBORROW',res)
		},
		err =>{
			console.log(err.msg)
		})
	},
	Name({commit},readerid){
		// console.log(readerid)
		initReader(qs.stringify({readerId:readerid})).then( res =>{
			// console.log(res)
			commit('NAME',res)
		})
	},
	BookName({commit},bookid){
		getbook(qs.stringify({bookId:bookid})).then( res =>{
			commit('BOOKNAME',res)
			// console.log(res)
		})
	}
}
const mutations ={
	BORROW(state,data){
		// console.log(data)
		if(data.data !==undefined){
		state.readerborows = data.data.map(item => ({...item,
		    borrowDate: moment.utc(item?.borrowDate).format('YYYY-MM-DD HH:mm:ss'),
		    returnDate: moment.utc(item?.returnDate).format('YYYY-MM-DD HH:mm:ss'),
		    realDate: moment.utc(item?.realDate).format('YYYY-MM-DD HH:mm:ss')}))
		}
		else console.log('没有记录')
	},
	ADMINBORROW(state,data){
		if(data){
			// console.log(data)
		state.borrowlist = data.data.map(item => ({...item,
		    borrowDate: moment.utc(item?.borrowDate).format('YYYY-MM-DD HH:mm:ss'),
		    returnDate: moment.utc(item?.returnDate).format('YYYY-MM-DD HH:mm:ss'),
		    realDate: moment.utc(item?.realDate).format('YYYY-MM-DD HH:mm:ss')}))
			// console.log(state.borrowlist[0].readerId)
		}
		else console.log('没有记录')
	},
	NAME(state,data){
		
		let name ={}
		name['readerName']=data.readerName
		state.namelist.push(name)
		state.name = state.namelist
		// console.log(name)
		// console.log(state.name)
	},
	BOOKNAME(state,data){
		let bookname ={}
		bookname['bookName']=data.bookName
		state.bookNamelist.push(bookname)
		state.bookName = state.bookNamelist
	},
	CLEAR(state){
		state.bookNamelist =[]
		state.namelist = []
	}
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