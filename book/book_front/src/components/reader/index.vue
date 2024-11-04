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
					<span slot="title">我的信息</span>
			</el-menu-item>
			<el-submenu index="2" >
				<template slot="title">
				<i class="el-icon-menu"></i>
				<span>图书</span>
				</template>
				<el-menu-item index="2-1" @click="$router.push('/home/book')">
					<i class="el-icon-menu"></i>
					<span slot="title">图书查询</span>
				</el-menu-item>	
				<el-menu-item index="2-2" @click="$router.push('/home/readerborrow')">
					<i class="el-icon-menu"></i>
					<span slot="title">我的借阅</span>
				</el-menu-item>	
			</el-submenu>
			<el-menu-item index="3" @click="$router.push('/home/comment')">
				<i class="el-icon-setting"></i>
				<span slot="title">评论社区</span>
			</el-menu-item>
			<el-menu-item index="4" @click="$router.push('/home/readerreport')">
				<i class="el-icon-setting"></i>
				<span slot="title">举报反馈</span>
			</el-menu-item>
			<el-submenu index="5">
				<template slot="title">
				<i class="el-icon-setting"></i>
				<span>设置</span>
				</template>
				<el-menu-item index="5-1" @click="$router.push('/home/Readerchange')">
					<i></i>
					<span>修改账号</span>
				</el-menu-item>
				<el-menu-item index="5-2" @click="$router.push('/Login')">
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
		name: 'ReaderBan',
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