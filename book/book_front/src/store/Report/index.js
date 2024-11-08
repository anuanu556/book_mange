import {initReportList,initStuReport} from '@/api'
import qs from 'qs';
import moment from 'moment';
const state = {
  reportList:[],
  stuReport:[]
}

const actions = {
    initReportList({commit}){
        initReportList().then(res=>{
            commit('INITREPORTLIST',res.data)
        },err=>console.log(err.message))
    },
    initStuReport({commit},data){
		// console.log(data)
        initStuReport(data).then(res=>{
            console.log('学生举报记录',res);
            commit('INITSTUREPORT',res.data)
        },err=>{
            console.log(err.message);
        })

    }
}

const mutations = {
    INITREPORTLIST(state,data){
    	if(data!=null){
        // 保存举报区数组
        state.reportList = data.map(item => ({...item, reportdate: moment.utc(item?.reportdate).format('YYYY-MM-DD HH:mm:ss')}))
    	}
    },
    INITSTUREPORT(state,data){
    	if(data!=null){
        state.stuReport = data.map(item => ({...item, reportdate: moment.utc(item?.reportdate).format('YYYY-MM-DD HH:mm:ss')}))
    	}
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
