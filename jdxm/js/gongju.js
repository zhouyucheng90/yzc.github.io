//找到按钮  插入modal层 和弹窗
	
	//找到按钮
	function clretBox(text){
		//插入modal层	
		var modal=document.createElement('div');
			modal.className='modal';
			document.body.appendChild(modal);	
			
		var oBox1=document.createElement('div');
			oBox1.id='oBox';
			oBox1.innerHTML='<p>'+text+'</p><button type="button">提交</button>';
			document.body.appendChild(oBox1);
			
		//让窗口居中显示
		//先找屏幕高宽
			var w=document.documentElement.clientWidth;//浏览器宽
			var h=document.documentElement.clientHeight;//浏览器高
		//屏幕高宽减去盒子高宽/2
			var l=(w-oBox1.offsetWidth)/2;
			var r=(h-oBox1.offsetHeight)/2;
			oBox1.style.left=l+'px';//定位赋值 
			oBox1.style.top=r+'px';//定位赋值 
		
		//删除modal层和按钮
		var dle=oBox1.getElementsByTagName('button')[0];
		dle.onclick=function(){
		document.body.removeChild(modal);
		document.body.removeChild(oBox1);
		}
		
	};
	
	function chengimg(imgBox){
			//找到图片
		var ul=imgBox.getElementsByTagName('ul')[0];
		var img_li=ul.getElementsByTagName('li');
		//找到按键
		var ol=imgBox.getElementsByTagName('ol')[0];
		var ol_li=ol.getElementsByTagName('li');
		
		for(var i=0;i<ol_li.length;i++){//遍历每个Li
		//自运行函数	
			(function(rum){//点击哪个i就变
				ol_li[rum].onclick=function(){				
					for(var j=0;j<ol_li.length;j++){
					img_li[j].className='over';//每个图片都隐藏
					ol_li[j].className='';//让每个都是本身颜色
					}
					img_li[rum].className='';//点击哪个就让图片显示出来
					this.className='abc';//点哪个哪个就变颜色			
				}	
			})(i)//自运行获取的值
			//console.log(i); 返还0、1、2、3、4
		};
	};

	function backTop(){
		var bck=$('<div class="goback"></div>');
		$('body').append(bck);
		$(window).scroll(function(){
			var w_h=$(window).scrollTop();
			if(w_h>1500){
				$(bck).show();
			}else{
				$(bck).hide();
			}
		});
		$(bck).click(function(){
			$('html,body').animate({'scrollTop':0},1000);
			$(bck).hide();
		})
	};

	//var hxsd_tools={};
	//用来在jquery上增加自定义函数
	//$.extend(hxsd_tools);
	
	//调用hxsd_tools内置的方法
//	hxsd_tools.backTop=function(){
//		
//		var bck=$('<div class="goback"></div>');
//		$('body').append(bck);
//		$(window).scroll(function(){
//			var w_h=$(window).scrollTop();
//			if(w_h>1500){
//				$(bck).show();
//			}else{
//				$(bck).hide();
//			}
//		});
//		$(bck).click(function(){
//			$('html,body').animate({'scrollTop':0},1000);
//			$(bck).hide();
//		})
//	};