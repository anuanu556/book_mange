<template>
	<el-table :data="personlist" style="width: 100%" max-height="250">
		<el-table-column fixed prop="readerName" label="账号名" width="150">
		</el-table-column>
		<el-table-column prop="phone" label="手机号" width="200">
		</el-table-column>
		<el-table-column prop="borrowTimes" label="借阅次数" width="170">
		</el-table-column>
		<el-table-column prop="ovdTimes" label="逾期次数" width="170">
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="150">
			<template slot-scope="scope">
				<el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">
					移除此读者
				</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	import { delperson } from '@/api'
	import qs from 'qs'
	export default {
		name:'AdminPerson',
		data(){
			return{
				timer:null
			}
		},
		created() {
		  this.setTime();
		},
		beforeDestroy(){
		  clearInterval(this.timer);　　// 清除定时器
		  this.timer = null;
		},
		computed:{
			personlist(){
				return this.$store.state.User.readerlist
			}
		},
		methods:{
			deleteRow(index,row){
				// console.log(row.readerId)
				delperson(qs.stringify({readerId:row.readerId})).then( res =>{
					if(res.status ===200){
						this.$message({
							showClose:true,
							message:'删除成功',
							type:'success'
						})
						this.$store.dispatch('User/ReaderList')
					}
					else console.log('删除失败')
				},err =>{
					this.$message({
						showClose:true,
						message:err.msg,
						type:'error'
					})
				})
			},
			setTime(){ 
			　　//每隔一秒运行一次方法
			      this.timer = setInterval(()=>{
			        this.saveList();
			      },1000)
			    },
			    saveList(){
					this.$store.dispatch('User/ReaderList')
			    }
		},
		
	}
		
</script>

<style>
</style>