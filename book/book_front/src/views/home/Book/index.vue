<template>
	<el-table :data="flag ===0 ? booklist :searchbooks" style="width: 100%" max-height="370">
		<el-table-column fixed prop="bookName" label="书名" width="150">
		</el-table-column>
		<el-table-column prop="author" label="作者" width="120">
		</el-table-column>
		<el-table-column prop="position" label="位置" width="120">
		</el-table-column>
		<el-table-column prop="totalAmount" label="总库存" width="120">
		</el-table-column>
		<el-table-column prop="amount" label="库存" width="120">
		</el-table-column>
		<el-table-column prop="borrowedTimes" label="借阅次数" width="120">
		</el-table-column>
		<el-table-column fixed="right" width="150">
			<template slot-scope="scope" >
				<el-button @click.native.prevent="borrowbook(scope.$index,scope.row)" type="text" size="medium" v-if="!isAdmin">
					借书
				</el-button>
				<el-button @click.native.prevent="delbook(scope.$index,scope.row)" type="text" size="medium" v-else>
					删除
				</el-button>
			</template>
			<template slot="header" slot-scope="scope">
				<el-input @keyup.enter.native="searchbook" v-model="name" size="medium" placeholder="输入书名" />
				<button class="del" @click="clear">x</button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex';
	import {
		searchBook,
		addBorrow,
		delbook
	} from '@/api'
	import qs from 'qs'
	export default {
		methods: {
			searchbook(e) {
				searchBook(qs.stringify({
					name: this.name
				})).then(res => {
						console.log(res.status)
						if (res.status === 200) {
							// this.$message({
							// 	showClose:true,
							// 	message:'查询成功',
							// 	type:'success'
							// })
							let data = res.data
							this.searchbooks = data
							this.flag = 1
						} else {
							this.$message({
								showClose: true,
								message: '没有找到该书籍',
								type: 'error'
							})
						}
					},
					err => {
						this.$message({
							showClose: true,
							message: 'err.msg',
							type: 'error'
						})
					})
			},
			clear() {
				this.flag = 0
				this.name = ''
				this.searchbooks = []
			},
			borrowbook(index, row) {
				// console.log(row)
				let readerId = this.$store.state.User.readerinfo.readerId
				let bookId = row.bookId
				let date = row.date
				let borrowObj = {
					readerId,
					bookId,
					date
				}
				addBorrow(qs.stringify(borrowObj)).then(res => {
					if (res.status === 200) {
						this.$message({
							showClose: true,
							message: '借书成功',
							type: 'success'
						})
						this.$store.dispatch('Books/GetBooks')
					}
					else alert("借书失败")
				},err =>{
					console.log(err.msg)
				})
			},
			delbook(index,row){
				delbook(qs.stringify({bookId:row.bookId})).then( res =>{
					if (res.status === 200) {
						this.$message({
							showClose: true,
							message: '删除成功',
							type: 'success'
						})
						this.$store.dispatch('Books/GetBooks')
					}
					else alert("删除失败")
				},err =>{
					console.log(err.msg)
				})
			},
		},
		data() {
			return {
				name: '',
				flag: 0,
				searchbooks: [],
				isAdmin:this.$store.state.User.isAdmin
			}
		},
		computed: {
			...mapState('Books', ['booklist'])
		},
		mounted() {
			this.$store.dispatch('Books/GetBooks')
		},
	}
</script>

<style>
	.del {
		position: fixed;
		left: 608px;
		top: 108.1px;
		z-index: 100;
	}
</style>