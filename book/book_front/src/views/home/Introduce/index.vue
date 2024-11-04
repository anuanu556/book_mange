<template>
	<el-descriptions title="用户信息" v-if="!isAdmin">
		<el-descriptions-item label="用户名">{{readerinfo.readerName}}</el-descriptions-item>
		<el-descriptions-item label="手机号">{{readerinfo.readerPhone}}</el-descriptions-item>
		<el-descriptions-item label="备注">
			<el-tag size="small">学生用户</el-tag>
		</el-descriptions-item>
		<el-descriptions-item label="借书次数">{{readerinfo.borrowTimes}}</el-descriptions-item>
		<el-descriptions-item label="逾期次数">{{readerinfo.ovdTimes}}</el-descriptions-item>
	</el-descriptions>
	<el-descriptions title="用户信息" v-else>
		<el-descriptions-item label="用户名">{{admininfo.username}}</el-descriptions-item>
		<el-descriptions-item label="手机号">{{admininfo.phone}}</el-descriptions-item>
		<el-descriptions-item label="备注">
			<el-tag size="small">管理员用户</el-tag>
		</el-descriptions-item>
	</el-descriptions>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Introduce',
		data() {
			return {

			}
		},
		computed: {
			...mapState('User',['admininfo','readerinfo','isAdmin'])
		},
		// mounted(){
		//     if(!this.isAdmin)
		//          initReader(qs.stringify({readerId:readerinfo.readerId})).then(res=>{
		//              console.log(res);
		//              this.$store.dispatch('ReaderInfo',res)
		//          },err=>{
		//              console.log(err.message);

		//          })
		// }
	}
</script>

<style>
</style>