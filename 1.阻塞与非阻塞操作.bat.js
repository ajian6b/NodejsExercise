/**
 * Created by aJian on 2015/12/1.
 */
'use strict';
console.log("-----------------这是阻塞操作---------------------");
var fs=require("fs");
var data=fs.readFileSync("input.text");
console.log(data.toString());
console.log(">>>>>>阻塞操作执行完成！");

console.log("-----------------这是非阻塞操作---------------------");
fs.readFile('input.text',function(err,data){
    if(err)
      return console.err(err);
    console.log(data.toString());
});
console.log(">>>>>>非阻塞操作执行完成！");