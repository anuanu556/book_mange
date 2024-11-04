<template>
<el-form label-width="100px" class="demo-ruleForm">
	<el-form-item label="账号">
		<el-input  v-model="account" autocomplete="off"></el-input>
	</el-form-item>
	<el-form-item label="密码">
		<el-input type="password" v-model="password" autocomplete="off"></el-input>
	</el-form-item>
	<el-form-item label="确认密码">
		<el-input type="password" v-model="checkpass"></el-input>
	</el-form-item>
	<el-form-item>
		<el-button type="primary" @click="submitForm">提交</el-button>
		<el-button @click="resetForm">重置</el-button>
	</el-form-item>
</el-form>
</template>
<script>
	import axios from 'axios'
	import qs from 'qs'
	import { adminChange} from '@/api'
	export default {
		name:'AdminChange',
		data(){
			return{
				account:'',
				password:'',
				checkpass:''
			}
		},
		computed:{
			
		},
		methods: {
			submitForm(){
				let info ={
					userName:this.account,
					password:this.password,
					AdminId:this.$store.state.User.admininfo.AdminId
				}
				console.log(info)
				if(this.account.length>15){
					alert('名字过长')
				}
				else if(this.account.length <7){
					alert('名字过短或为空')
				}
				else {
					if(this.password.length >12){
						alert('密码过长')
					}
					else if(this.password.length<6){
						alert('密码过短或为空')
					}
					else{
						if(this.password !== this.checkpass){
							alert('两次密码不相符')
						}
						else{
							adminChange(qs.stringify(info)).then( res =>{
								if(res.status === 200){
									this.$message({
										showClose:true,
										message:'更改成功',
										type:'success'
									})						
									this.account =''
									this.password=''
									this.$router.push('/Login')
								}
								else console.log('更改失败')
							},err =>{
								this.$message({
									showClose:true,
									message:'更改失败',
									type:'error'
								})	
							})
						}
					}
				}
			},
			resetForm(formName) { 
				this.account =''
				this.password=''
				this.checkpass=''
			}
		}
	}
</script>
<style>
</style>