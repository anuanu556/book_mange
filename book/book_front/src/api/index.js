import requests from "./axios";

// 统一管理接口

// 注册
export const register = (ReaderInfo) => requests({
	url:'/register',
	method:'post',
	data:ReaderInfo
})
// 登录
export const login = (ReaderInfo) => requests({
	url:'/login',
	method:'post',
	data:ReaderInfo
})
// 书籍接口
export const initBooksList = () => requests({
    url: '/books',
    method: 'post'
})
// 评论区接口
export const initCommentsList = () => requests({
    url: '/comments',
    method: 'post'
})
// 添加评论接口
export const addComment = (dataObj)=>requests({
	url: '/addcomment',
	method: 'post',
	data: dataObj
})
// 点赞接口
export const addPraise = (dataObj)=>requests({
	url: '/addpraise',
	method: 'post',
	data: dataObj
})
// 书名查找接口
export const searchBook = (bookNameObj) => requests({
    url: '/searchbook',
    method: 'post',
    data: bookNameObj
})

// 管理员获取读者信息接口
export const initReaderList = () => requests({
    url: '/initreaderlist',
    method: 'post',
})
// 再次获取读者信息
export const initReader = (readerId) => requests({
    url: '/initreader',
    method: 'post',
    data: readerId
})
// 获取读者借阅记录
export const initBorrows = (readerId) => requests({
    url: '/borrows',
    method: 'post',
    data: readerId
})
// 借书接口
export const addBorrow = (borrowObj) => requests({
    url: '/addborrow',
    method: 'post',
    data: borrowObj
})
// 续借接口
export const continueBorrow = (infoObj) => requests({
    url: '/continueborrow',
    method: 'post',
    data: infoObj
})
// 还书接口
export const returnBook = (infoObj) => requests({
    url: '/returnbook',
    method: 'post',
    data: infoObj
})
// 学生举报接口
export const reportComment = (infoObj)=>requests({
    url:'/reportcomment',
    method:'post',
    data:infoObj
})
// 管理员审核举报接口
export const auditComment = (infoObj) => requests({
    url: '/auditcomment',
    method: 'post',
    data:infoObj
})
// 获取举报列表
export const initReportList = () => requests({
    url: '/initreportlist',
    method: 'post'
})
// 读者查询举报记录接口
export const initStuReport = (readerId) => requests({
    url: '/initstureport',
    method: 'post',
    data: readerId
})
// 更改读者信息接口
export const readerChange = (infoObj) =>requests({
	url:'/readerchange',
	method:'post',
	data:infoObj
})
// 更改管理员信息接口
export const adminChange = (infoObj) =>requests({
	url:'/adminchange',
	method:'post',
	data:infoObj
})
// 管理员添加图书接口
export const addbooks = (bookinfo) => requests({
	url:'/adminaddbooks',
	method:'post',
	data:bookinfo
})
// 管理员删除读者接口
export const delperson = (readerId) => requests({
	url:'/delperson',
	method:'post',
	data:readerId
})
// 管理员删除图书
export const delbook = (bookId) => requests({
	url:'/delbook',
	method:'post',
	data:bookId
})
// 管理员删除借阅记录接口
export const deleteBorrow = (borrowObj) => requests({
    url: '/deleteborrow',
    method: 'post',
    data:borrowObj
})
// 管理员通过读者ID查找借阅记录接口
export const searchBorrow = (infoObj) => requests({
    url: '/searchborrow',
    method: 'post',
})
// 管理员查询借阅接口
export const initBorrowslist = () => requests({
    url: '/borrowslist',
    method: 'post'
})
// 管理员再次获取图书接口
export const getbook = (bookId) => requests({
	url:'/getbook',
	method:'post',
	data:bookId
})
export const more = () => requests({
	url:'/more',
	method:'post'
})