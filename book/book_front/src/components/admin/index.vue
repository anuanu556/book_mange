<template>
	<div>
		<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			<el-radio-button :label="false">展开</el-radio-button>
			<el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group>
		<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
			:collapse="isCollapse">
			<el-menu-item index="1" @click="$router.push('/home/introduce')">
					<i class="el-icon-location"></i>
					<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="2" @click="$router.push('/home/adminperson')">
				<i class="el-icon-document"></i>
				<span slot="title">读者管理</span>
			</el-menu-item>
			<el-submenu index="3">
				<template slot="title">
				<i class="el-icon-menu"></i>
				<span>图书管理</span>
				</template>
				<el-menu-item index="3-1" @click="$router.push('/home/book')">
					<i class="el-icon-menu"></i>
					<span slot="title">图书查询</span>
				</el-menu-item>	
				<el-menu-item index="3-2" @click="$router.push('/home/addbook')">
					<i class="el-icon-menu"></i>
					<span slot="title">图书添加</span>
				</el-menu-item>	
			</el-submenu>
			<el-menu-item index="4" @click="$router.push('/home/adminborrow')">
				<i class="el-icon-document"></i>
				<span slot="title">借阅列表</span>
			</el-menu-item>
			<el-menu-item index="5" @click="$router.push('/home/comment')">
				<i class="el-icon-setting"></i>
				<span slot="title">评论列表</span>
			</el-menu-item>
			<el-menu-item index="6" @click="$router.push('/home/adminreport')">
				<i class="el-icon-setting"></i>
				<span slot="title">举报审核</span>
			</el-menu-item>
			<el-submenu index="7">
				<template slot="title">
				<i class="el-icon-setting"></i>
				<span>设置</span>
				</template>
				<el-menu-item index="7-1" @click="$router.push('/home/Adminchange')">
					<i></i>
					<span>修改账号</span>
				</el-menu-item>
				<el-menu-item index="7-2" @click="$router.push('/Login')">
					<i></i>
					<span>退出</span>
				</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 150px;
		min-height: 200px;
	}
</style>

<script>
	export default {
		name: 'AdminBan',
		data() {
			return {
				isCollapse: true
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>