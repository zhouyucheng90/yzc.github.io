/*
 作者：周某某
 时间：2017.6.30
 版本：1.0.1
插件：轮播图插件
 
 */
//轮播图点击切换图片=---------------------------------------------------
;(function($){
	$.fn.imgTop=function(top){
		var dsp={
			"autoPaly":true,  //自动切换图片
			"time":1000		//切换图片时间
		}
		var n_npt=$.extend(dsp,top);
		return this.each(function(){
			var _this=$(this);
			var i=0;//全局声明记录变量
			var timer;//全局声明定时器变量			
			_this.find('ol li').click(function(){//找按钮
				var n=$(this).index();//点击对象的下标致记录下来
				i=n;//点击的时候值赋值给i，传达给下面的定时器
				$(this).addClass('ac').siblings().removeClass('ac');//点击this让class设置ac 让兄弟元素删除ac				
				_this.find('ul li:eq('+n+')').show().siblings().hide();//找到图片
			});
			if(n_npt.autoPaly){//开定时器				
				var oLi=$(this).find('ol li');//两个自己的所有ol 里面的 li
				var oUl=$(this).find('ul li');
				function run(){//用函数包住定时器，方便下面调用
					timer=setInterval(function(){
						oLi.eq(i).addClass('ac').siblings().removeClass('ac');
						oUl.eq(i).show().siblings().hide();				
						i==oLi.length-1?i=0:i++;//走到最后一个时候，自动为0，从第一个开始继续走						//console.log(i)
					},n_npt.time)	
				}
				run();
				_this.hover(//鼠标进去，出来事件
					function(){	
						clearInterval(timer);//进去的时候关闭定时器
					},
					function(){	
						run();//出去的时候，从新开启定时器；
					}
				)
			}
		})
	}
})(jQuery);