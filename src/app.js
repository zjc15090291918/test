require('./styles/app.scss');

//var string = require('./scripts/common.js')
//console.log(string);

//通过es6的方法引入模块
//import  name from './scripts/common.js';
//console.log(name);

var common = require('./scripts/common.js');
common.getList();

