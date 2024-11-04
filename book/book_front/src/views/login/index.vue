<template>
	<div class="login-wrap" v-loading="loading" :element-loading-text="loadingtext"
		element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="container">
			<!-- 注册 -->
			<div class="container-div-sign" :class="{'sign':flag}"">
			<form action=" #" class="container-div-form">
				<h3 class="form-h3">注册</h3>
				<input type="text" placeholder="账号" class="input" v-model="send_sign.account" />
				<input type="password" placeholder="密码" class="input" v-model="send_sign.password" />
				<input type="password" placeholder="手机号" class="input" v-model="send_sign.phone" />
				<button class="btn" @click="sign">注册</button>
				</form>
			</div>
			<!-- 登录 -->
			<div class="container-div-login" :class="{'login':!flag}"">
			<form class=" container-div-form">
				<h2 class="form-h2" v-html="isAdmin? '管理员登录' : '学生登录'"></h2>
				<el-button v-if="isAdmin ===false" class="Admin_change" @click="isAdmin =true"
					plain><span>管理员登录</span></el-button>
				<el-button v-else="isAdmin ===true" class="Admin_change" @click="isAdmin =false"
					plain><span>学生登录</span></el-button>
				<input type="text" placeholder="手机号" class="input" v-model="send_login.phone" />
				<input type="password" placeholder="密码" class="input" v-model="send_login.password" />
				<input type="password" placeholder="再次输入密码" class="input" v-model="send_login.make_sure" />
				<button class="btn" @click="Login">登录</button>
				</form>
			</div>

			<!-- 切换浮层 -->
			<div container-div-overlay>
				<div class="overlay">
					<el-button-group>
						<el-button v-if="flag === 1" class="overlay--btn-1" @click="flag = 0,isAdmin = false"
							plain>学生登录</el-button>
						<el-button v-if="flag === 1" class="overlay--btn-1" @click="flag = 0,isAdmin = true"
							plain>管理登录</el-button>
						<el-button v-if="flag === 0" class="overlay--btn-2" @click="flag = 1" plain>注册</el-button>
					</el-button-group>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	import qs from "qs"
	import {
		register,
		login,
		more
	} from '@/api/index'
	export default {
		name: "login",
		data() {
			return {
				loginloading: false,
				registerloading: false,
				flag: 0,
				isAdmin: false,
				send_login: {
					phone: '',
					password: '',
					make_sure: ''
				},
				send_sign: {
					account: '',
					password: '',
					phone: ''
				},
			}
		},
		computed: {
			loading() {
				if (this.loginloading || this.registerloading)
					return true
				else
					return false
			},
			loadingtext() {
				if (this.loginloading && !this.registerloading)
					return "登录中..."
				if (!this.loginloading && this.registerloading)
					return "注册中..."
				else
					return "拼命加载中..."
			}
		},
		beforeCreate(){
			more().then(res=>{
				console.res.data
			})
		},
		methods: {
			sign() {
				this.flag = 1
				// console.log(this.send_sign)
				if (this.send_sign.account === '') {
					alert("账号不能为空")
					this.send_sign.account = ''
				} else {
					if (this.send_sign.account.length > 15) {
						alert("账号长度过长")
						this.send_sign.account = ''
					} else {
						if (this.send_sign.account.length < 7) {
							alert("账号长度过短")
							this.send_sign.account = ''
						} else {
							if (this.send_sign.password === '') {
								alert("密码不能为空")
								this.send_sign.password = ''
							} else {
								if (this.send_sign.password.length > 12) {
									alert("密码过长")
									this.send_sign.password = ''
								} else {
									if (this.send_sign.password.length < 6) {
										alert("密码过短")
										this.send_sign.password = ''
									} else {
										this.registerloading = true
										let data = {
											userName: this.send_sign.account,
											password: this.send_sign.password,
											phone: this.send_sign.phone
										}
										register(qs.stringify(data)).then(res => {
											this.registerloading = false
											if (res.status === 200) {
												this.$message({
													showClose: true,
													message: '注册成功',
													type: "success"
												})
												this.send_sign.account = ''
												this.send_sign.password = ''
												this.send_sign.phone = ''
												this.flag = 0
											} else {
												this.$message({
													showClose: true,
													message: res.msg,
													type: "error"
												})
												this.send_sign.account = ''
												this.send_sign.password = ''
												this.send_sign.phone = ''
											}
										}, err => {
											console.log(err)
											this.registerloading = false
											this.$message({
												showClose: true,
												message: '注册失败',
												type: "error"
											})
											this.send_sign.account = ''
											this.send_sign.password = ''
											this.send_sign.phone = ''
										})
									}
								}
							}
						}
					}
				}
			},
			Login() {
				// console.log(this.send_login)
				if (this.send_login.phone === '') {
					this.$message({
						showClose: true,
						message: '账号不能为空',
						type: "error"
					})
				} else if (this.send_login.password === '') {
					this.$message({
						showClose: true,
						message: '密码不能为空',
						type: "error"
					})
				} else if (this.send_login.password.length > 12 || this.send_login.password.length < 6) {
					this.$message({
						showClose: true,
						message: '密码长度过长或过短',
						type: "error"
					})
				} else {
					this.loginloading = true
					let data = {
						phone: this.send_login.phone,
						password: this.send_login.password,
						isAdmin: this.isAdmin
					}
					login(qs.stringify(data)).then(res => {
							this.loginloading = false
							// console.log(res)
							if (res.status === 200) {
								this.$message({
									showClose: true,
									message: '登录成功',
									type: "success"
								})
								if (this.isAdmin) this.$store.dispatch('User/AdminInfo',res)
								else this.$store.dispatch('User/ReaderInfo',res)
								this.$store.dispatch('User/ReaderList')
								this.$router.push('/home')
								this.send_login.phone = ''
								this.send_login.password = ''
								this.send_login.make_sure = ''
							} else {
								this.$message({
									showClose: true,
									message: '登录失败',
									type: "error"
								})
							}
						},
						err => {
							this.$message({
								showClose: true,
								message: '登录失败',
								type: "error"
							})
						})
				}
			},
		},
	}
</script>


<style lang="css" scoped>
	:root {
		/* 颜色 */
		--white: #e9e9e9;
		--gray: #333;
		--blue: #095c91;
		--blue-r: #315a7491;
		--lightblue: #0393a3;

		/* 圆角 */
		--button-radius: 0.7rem;

		/* 大小 */
		--max-width: 758px;
		--max-height: 420px;

		font-size: 16px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}

	.container {
		width: 370px;
		height: 170px;
		background-color: white;
		position: absolute;
		top: 105px;
		left: 190px;
		border: solid;
		box-shadow: #e9e9e9 5px 5px;
	}

	.container-div-sign {
		width: 190px;
		height: 170px;
		background-color: #0393a3;
		position: absolute;
		left: 180px;
		display: none;
	}

	.container-div-login {
		width: 190px;
		height: 170px;
		background-color: brown;
		position: absolute;
		display: none;
	}

	.input {
		position: relative;
		left: 18px;
		top: 35px;
		width: 150px;
		height: 15px;
		font-size: 8px;
		margin-bottom: 15px;
	}

	.container-div-form {
		width: 190px;
		height: 170px;
		position: absolute;
	}

	.form-h3 {
		position: absolute;
		top: -11px;
		left: 83px;
		font-size: 15px;
		color: black;
		font-weight: 400;

	}

	.form-h2 {
		position: absolute;
		top: -8px;
		left: 63px;
		font-size: 15px;
		color: black;
		font-weight: 400;
	}

	.btn {
		position: relative;
		font-size: 10px;
		width: 100px;
		height: 25px;
		top: 35px;
		left: 50px;
		background-color: white;
	}

	.overlay {
		position: fixed;
		z-index: 100;
		top: 175px;
		left: 292px;
	}

	.overlay--btn-1 {
		width: 45px;
		height: 30px;
		font-size: 7px;
		font-weight: 500;
		left: -10px;
	}

	.overlay--btn-2 {
		width: 90px;
		height: 30px;
		font-size: 12px;
		font-weight: 500;
		left: 89.2px;
	}

	.sign {
		display: block;
	}

	.login {
		display: block;
	}

	.Admin_change {
		position: fixed;
		width: 55px;
		height: 20px;
		font-size: 8px;
	}

	.Admin_change span {
		display: flex;
		justify-content: center;
		align-items: center;
	}

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