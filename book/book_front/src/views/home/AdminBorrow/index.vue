<template>
	<div class="login-wrap" v-loading="loading" :element-loading-text="loadingtext"
		element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
	<el-table :data="Listmore"
		style="width: 100%">
		<el-table-column label="读者名字" prop="readerName">
		</el-table-column>
		<el-table-column label="借阅书名" prop="bookName">
		</el-table-column>
		<el-table-column label="借阅时间" prop="borrowDate">
		</el-table-column>
		<el-table-column label="应归还时间" prop="realDate">
		</el-table-column>
		<el-table-column label="是否归还" prop="status">
		</el-table-column>
		<el-table-column align="right">
			<template slot-scope="scope">
				<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
			</template>
		</el-table-column>
	</el-table>
	</div>
</template>

<script>
	import { deleteBorrow } from '@/api'
	import qs from 'qs'
	export default {
		name: 'AdminBorrow',
		data() {
			return {
				Loading: false,
				List:[],
				Listmore:[]
			}
		},
		computed: {
			loading() {
				if (this.Loading)
					return true
				else
					return false
			},
			loadingtext() {
				if (this.Loading)
					return "拼命加载中..."
			},
			readername(){
				return this.$store.state.Borrows.name
			},
			bookname(){
				return this.$store.state.Borrows.bookName
			},
			borrowlist() {
				return this.$store.state.Borrows.borrowlist 
			},
			list(){
				return this.List
			}
			
		},
		methods:{
			handleDelete(index,row){
				this.Loading = true
				// console.log(row)
				let delinfo ={
					readerId:row.readerId,
					bookId:row.bookId,
					borrowDate:row.borrowDate,
					status:row.status
				}
				deleteBorrow(qs.stringify(delinfo)).then( res =>{
					if(res.status ===200){
						this.$message({
							showClose:true,
							message:'删除成功',
							type:'success'
						})
						this.$store.commit('Borrows/CLEAR')
						this.$store.dispatch('Borrows/Adminborow')
						this.$store.state.Borrows.borrowlist.forEach((item,index) =>{
							this.$store.dispatch('Borrows/Name',item.readerId)
							this.$store.dispatch('Borrows/BookName',item.bookId)
							this.List.push({...this.readername[index],...item})
							this.Listmore.push({...this.bookname[index],...this.List[index]})
							// console.log(item.readerId)
						})
						this.Loading = false						
					}
					else {
						this.$message({
							showClose:true,
							message:'删除失败',
							type:'error'
						})
						this.Loading = false
					}
				},err =>{
					this.$message({
						showClose:true,
						message:'err.msg',
						type:'error'
					})
					this.Loading = false
				})
			}
		},
		mounted() {
			// console.log(1)
			this.Loading = true
			this.$store.commit('Borrows/CLEAR')
			this.$store.dispatch('Borrows/Adminborow')
			this.$store.state.Borrows.borrowlist.forEach((item,index) =>{
				this.$store.dispatch('Borrows/Name',item.readerId)
				this.$store.dispatch('Borrows/BookName',item.bookId)
				this.List.push({...this.readername[index],...item})
				this.Listmore.push({...this.bookname[index],...this.List[index]})
				// console.log(item.readerId)
			})
			this.Loading = false
			// document.location.reload()
			// console.log(this.$store.state.Borrows.name)
			// console.log(this.$store.state.Borrows.borrowlist) 
			// console.log(this.Listmore)
		}

	}
</script>
<style>
	.login-wrap {
		align-items: center;
		background-color: #e9e9e9;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: grid;
		place-items: center;
	}
</style>