/**
 * incView:打开带原生导航条的页面(无返回按钮)
 * usuView:打开新页面
 * NativeView：打开带原生导航条的页面(有返回按钮)
 * url：打开页面相对路径
 * id：页面id
 * title：导航条上显示的名称
 */
var openView = {
	usuView: function(url, id, extras1,extras2,bounce) {
		var extras = extras || '';
		var bounce = bounce ||'none';
		mui.openWindow({
			url: url,
			id: id,
			waiting: {
				autoShow: false,
			},
			extras: 
			{
				value1: extras1,
				value2: extras2
			},
			styles:{
				bounce:bounce
			}
		})
	}
}

