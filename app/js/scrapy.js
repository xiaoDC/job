var Scrapy,_,data,http,req,url;http=require("http"),url="http://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91?px=default&city=%E6%9D%AD%E5%B7%9E",_=require("underscore"),data="",req=http.request(url,function(e){return e.setEncoding("utf-8"),e.on("data",function(e){return data+=e}),e.on("end",function(){return console.log(data)})}),req.end(),Scrapy=function(){function e(e){this.url=e}return e.prototype.fetch=function(e){return _.each(this.url,function(){})},e}(),module.exports=Scrapy;