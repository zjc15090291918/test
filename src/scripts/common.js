//module.exports = 'zjc';

//通过es6的方法暴露模块

//export default 'zhang';

var $ = require('./lib/jquery.js');
//console.log($);


var common = {
	getList:function(){
		$.ajax({
			url:'/api/list',
			success:function(res){
				console.log(res);
			}
		})
	}
};

module.exports = common;
