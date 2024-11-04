<template>
	<el-table :data="borrowlist" style="width: 100%" max-height="300">
		<el-table-column fixed prop="bookName" label="书籍名称" width="160">
		</el-table-column>
		<el-table-column prop="author" label="作者" width="140">
		</el-table-column>
		<el-table-column prop="borrowDate" label="借阅时间" width="140">
		</el-table-column>
		<el-table-column prop="returnDate" label="应归还时间" width="140">
		</el-table-column>
		<el-table-column prop="returnDate" label="归还时间" width="140">
		</el-table-column>
		<el-table-column prop="status" label="归还状态" width="140">
		</el-table-column>
		<el-table-column fixed="right" label="操作"  width="150">
			<template slot-scope="scope">
				<el-button type="text" size="medium" @click="extend(scope.$index, scope.row)" v-if="scope.row.status =='已还'">
					续借
				</el-button>
				<el-button type="text" size="medium"  @click="back(scope.$index, scope.row)" v-else>
					还书
				</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
import qs from 'qs'	
import {continueBorrow,returnBook}  from '@/api'
	import { from } from 'core-js/fn/array'
	export default {
		data() {
			return {
				readerinfo:'',
				readerid:''
			}
		},
		methods:{
			extend(index,row){
				// console.log(row)
				let infoObj = {
				  bookId: row.bookId,
				  readerId: row.readerId,
				  borrowDate: row.borrowDate,
				}
				continueBorrow(qs.stringify(infoObj)).then( res=>{
					if(res.status ===200){
						this.$message({
							showClose:true,
							message:'续借成功',
							type:'success'
						})
						this.$store.dispatch('Borrows/Borrow',qs.stringify({readerId:this.readerid}))
					}
					else alert("续借失败")
				},err =>{
					console.log(err.msg)
				})
			},
			back(index,row){
				let infoObj = {
				  bookId: row.bookId,
				  readerId: row.readerId,
				  borrowDate: row.borrowDate,
				}
				returnBook(qs.stringify(infoObj)).then( res=>{
					if(res.status ===200){
						this.$message({
							showClose:true,
							message:'归还成功',
							type:'success'
						})
						this.$store.dispatch('Borrows/Borrow',qs.stringify({readerId:this.readerid}))
					}
					else alert("归还失败")
				},err =>{
					console.log(err.msg)
				})
			}
		},
		computed:{
			
			borrowlist(){
				return this.$store.state.Borrows.readerborows
			},
		},
		created(){
			this.readerinfo = this.$store.state.User.readerinfo
			this.readerid = this.readerinfo.readerId
			// console.log(this.readerid)
		},
		mounted(){		
			this.$store.dispatch('Borrows/Borrow',qs.stringify({readerId:this.readerid}))
		},

	}
</script>

<style>
</style>