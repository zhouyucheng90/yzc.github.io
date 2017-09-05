//jQuety原型上扩展插件------拖拽div-------------------------------
$.fn.extend({
	
	drag:function(title){
		//console.log(this)//这里的this指对象集合
	return	this.each(function(){//把自己return出去   才能执行后面的链式操作
			
			//console.log($(this))//指每个单独的this对象
			title=title|| $(this);
			var _this=$(this);
			title.mousedown(function(ev){
				var disX=ev.pageX-$(this).offset().left;
				var disY=ev.pageY-$(this).offset().top;
				$(document).mousemove(function(ev){
					var l=ev.pageX-disX;
					var t=ev.pageY-disY;				
					//最后赋值
					if(l<0){
						l=0;
					};
					if(t<0){
						t=0;
					};
					var w_w=$(window).width();
					var w_h=$(window).height();
					if(l>w_w-_this.outerWidth()){
						l=w_w-_this.outerWidth();
					};
					if(t>w_h-_this.outerHeight()){
						t=w_h-_this.outerHeight();
					};
					
					_this.css({"left":l,"top":t});
				});
				$(document).mouseup(function(){
					
					$(document).unbind("mousemove");
				})
				return false;//阻止默认行为；
				
				});
	
			})
		//return this;  把自己return出去   才能执行后面的链式操作
	},
	
	
//让文档居中------------------------------------------------------
	showCenter:function(){
		return this.each(function(){
			var _this=$(this);
			function run(){
				var w_w=$(window).width();
				var w_h=$(window).height();
				var this_w=_this.outerWidth()
				var	this_h=_this.outerHeight();
				
				var l=(w_w-this_w)/2;
				var t=(w_h-this_h)/2;
				_this.css({"left":l,"top":t});
			};
			run();
			//改变窗口大小适合也是在中间
			$(window).resize(run);
		});
	},
//轮播图点击切换图片=---------------------------------------------------

	imgTop:function(top){
		var dsp={
			"autoPaly":true,
			"time":1000
		}
		var n_npt=$.extend(dsp,top);
		return this.each(function(){
			var _this=$(this);
			var i=0;//全局声明记录变量
			var timer;//全局声明定时器变量
			//找按钮
			_this.find('ol li').click(function(){
				var n=$(this).index();//点击对象的下标致记录下来
				i=n;//点击的时候值赋值给i，传达给下面的定时器
				$(this).addClass('ac').siblings().removeClass('ac');//点击this让class设置ac 让兄弟元素删除ac
				//找到图片
				_this.find('ul li:eq('+n+')').show().siblings().hide();
			});
			if(n_npt.autoPaly){
				//开定时器
				var oLi=$(this).find('ol li');//两个自己的所有ol 里面的 li
				var oUl=$(this).find('ul li');
				function run(){//用函数包住定时器，方便下面调用
					timer=setInterval(function(){
						oLi.eq(i).addClass('ac').siblings().removeClass('ac');
						oUl.eq(i).show().siblings().hide();				
						i==oLi.length-1?i=0:i++;//走到最后一个时候，自动为0，从第一个开始继续走
						//console.log(i)
					},n_npt.time)	
				}
				run();
				_this.hover(//鼠标进去，出来事件
					function(){
						//console.log("进")
						clearInterval(timer);//进去的时候关闭定时器
					},
					function(){
						//console.log("出")
						run();//出去的时候，从新开启定时器；
					}
				)
			}
		})
	},
	
		checkList:function (opt) {
		var _this = this;
		var num = 0;
		var ckList = $(opt).find('input');
		this.click(function(){
			var chked = $(this).prop('checked');
			ckList.prop('checked',chked);
			chked == true?num=ckList.length:num=0;
		})
		opt.find('input').click(function () {
			$(this).prop('checked') == true?num++:num--;
			_this.prop('checked',num==ckList.length?true:false);
		});
	},
	imgSlide:function () {
		var _this = this;
		this.mousemove(function (ev) {
			var mX = ev.pageX;
			var l_line = $(this).offset().left+40;//左边触发区域线
			var r_line = $(this).offset().left+$(this).width()-40;//右边触发区域线
			var mouseArea = r_line-l_line//区域范围
			if (mX>l_line&&mX<r_line) {
				var img_w = $(this).find('ul img').width();
				var img_d = $(this).find('ul img').length;
				var imgSumw = img_w*img_d;
				var img_pos = imgSumw - $(this).width(); //图片移动范围
				$(this).find('ul:eq(0)').width(imgSumw);
				//比例
				var bili = img_pos/mouseArea;
				var pos = mX-l_line;//鼠标在范围内移动距离
				$(this).find('ul:eq(0)').css({'left':-pos*bili})
				
			}
		})
	}
	
});