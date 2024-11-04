<template>
	<div class="home">
		<header>
			<img src=""/>
			<span>图书管理系统</span>
		</header>
		
		<el-row :gutter="21">
			<el-col :span="6">
				<AdminBan v-if="isAdmin"/>
				<ReaderBan v-else/>
			</el-col>
		    <el-col :span="15">
				<div class="do">
					<router-view/>
				</div>
			</el-col>
		</el-row>
		
	</div>
</template>
<script>
	import axios from 'axios'
	import qs from 'qs'
	export default {
		name :'Home',
		data(){
			return {
				
			}
		},
		computed:{
			isAdmin(){
				return this.$store.state.User.isAdmin
			}
		}
	}
</script>

<style>
	.home header{
		text-align: center;
		padding-bottom: 30px;
		font-size: 12px;
	}
	.do{
		position: relative;
		top: 29px;
		left: -20px;
	     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	     border: 1px solid #eee;
	     border-radius: 1px 1px 1px ;
	     padding: 20px;
	     min-height:200px;
	}
</style>