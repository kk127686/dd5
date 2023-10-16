import axios from 'axios'

const service=axios.create({
    baseURL:'/api'
})
service.interceptors.response.use(res=>{
     // 未设置状态码则默认成功状态
     const code = res.data.code || 200;
     if(code===200){
        return res.data
     }else{
        console.log(res)
     }
})
export default service