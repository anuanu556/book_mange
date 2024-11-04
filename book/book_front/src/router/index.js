import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login'
import Home from '../views/home'
import AddBook from '@/views/home/AddBook'
import AdminBorrow from '@/views/home/AdminBorrow'
import AdminPerson from '@/views/home/AdminPerson'
import AdminReport from '@/views/home/AdminReport'
import ReaderBorrow from '@/views/home/ReaderBorrow'
import ReaderReport from '@/views/home/ReaderReport'
import Book from '@/views/home/Book'
import Comment from '@/views/home/Comment'
import Introduce from '@/views/home/Introduce'
import Readerchange from '@/views/home/Readerchange'
import Adminchange from '@/views/home/AdminChange'
Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		redirect:'/Login'
	},
	{
		path:'/Login',
		component:Login
	},
	{
		path:'/home',
		component:Home,
		children:[
			{
				path:'/',
				component:Introduce
			},
			{
				path:'introduce',
				component:Introduce
			},
			{
				path:'addbook',
				component:AddBook
			},
			{
				path:'book',
				component:Book
			},
			{
				path:'adminperson',
				component:AdminPerson
			},
			{
				path:'adminreport',
				component:AdminReport
			},
			{
				path:'readerborrow',
				component:ReaderBorrow
			},
			{
				path:'readerreport',
				component:ReaderReport
			},
			{
				path:'adminborrow',
				component:AdminBorrow
			},
			{
				path:'comment',
				component:Comment
			},
			{
				path:'Readerchange',
				component:Readerchange
			},
			{
				path:'Adminchange',
				component:Adminchange
			},
		]
	}
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
