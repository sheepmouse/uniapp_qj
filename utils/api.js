import request from './service.js'

export function smsCode(data){
	return request({
		url:'/api/smsCode/send',
		method:'POST',
		data:data,
		header: {
		  'Content-Type': 'application/x-www-form-urlencoded'  
	   },
	})
}
export function LoginIn(data){
	return request({
		url:'/api/auth/user/login',
		method:'POST',
		data:data,
	})
}