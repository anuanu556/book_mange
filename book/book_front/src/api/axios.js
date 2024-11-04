// 对axios进行二次封装
import axios from 'axios'

const requests  = axios.create({
    //基础路径
    baseURL:'/api',
    // 代表请求超时的时间
    timeout:5000
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数
    return res.data;

},(err)=>{
    // 响应失败的回调函数
    return Promise.reject(new Error('fail'))
})


export default requests;