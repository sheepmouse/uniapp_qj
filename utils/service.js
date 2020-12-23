function req(obj) {
	return new Promise((resolve, reject) => {
		const HOST = '/web'
		var method = obj.method || 'post';
		var url = HOST + obj.url || '';
		var data = obj.data || {};
		var header = obj.header || {
			'Content-Type': obj.ContentType || 'application/json',
		};
		var success = obj.success //成功回调
		var fail = obj.fail
		uni.request({
			url: url,
			method: method,
			data: data,
			header: header,
			success: res => {
				if (res.statusCode === 403) {
					console.log('登录失效');
				}
				if (res.statusCode === 200) {
					resolve(res)
				}
			},
			fail: err => {
				reject(err)
			}
		});
	});
}
export default req
