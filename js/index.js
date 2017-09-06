$(function(){
	$(window).scroll(function(){
		$('.floor').each(function () {
			var disH = $(this).offset().top - $(window).scrollTop();//this盒子总高减去文档超出的距离，获得盒子顶部的位置
			if (disH<300&&disH>=0) {  //如果盒子顶部在自已定义范围内，就执行下面的程序
			    var ix = $(this).index()-4;//记录目标元素的下标值  
			    if(!$('html,body').is(':animated')){//动画效果取反   只有在false才执行下面代码
			    	$('.LocationFloorList li:eq('+ix+')').addClass('ac').siblings().removeClass('ac');
			    }
			}
		})
	})
	$(".LocationFloorList li").click(function(){//给每个li绑定点击事件
		$(this).addClass('ac').siblings().removeClass('ac');//点击的目标盒子添加ac
		var ix = $(this).index();//获取点击对象的下标值
		var body_h=$('.floor:eq('+ix+')').offset().top;//获取目标盒子距离文档的总高值
		$('html,body').stop().animate({'scrollTop':body_h},1000);//点击时候，把获取的值赋给body让它动；
	});
	$('.toubiao').hover(
		function(){
			$(this).css('border','2px solid rgba(255,213,35,.4)')
		},
		function(){
			$(this).css('border','2px solid rgba(255,213,35,0)');
		}
	);
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['Html','CSS','Web','jQuery','动画','动态','静态','其他']
	    },
	    series: [
	        {
	            name:'熟练度',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '30%'],
	
	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:1135, name:'Html', selected:true},
	                {value:779, name:'css'},
	                {value:648, name:'jQuery'}
	            ]
	        },
	        {
	            name:'熟练度',
	            type:'pie',
	            radius: ['40%', '55%'],
	
	            data:[
	                {value:1005, name:'Html'},
	                {value:505, name:'CSS'},
	                {value:1048, name:'Web'},
	                {value:251, name:'动画'},
	                {value:251, name:'动态'},
	                {value:347, name:'静态'},
	                {value:102, name:'其他'}
	            ]
	        }
	    ]
	};
	
		var oBox=document.getElementById("main");
		var myChart=echarts.init(oBox)
		myChart.setOption(option);
		
		(function (){
			$(window).scroll(function(){
				$(".home").each(function(){
					var wintop = $(window).scrollTop();
					if(wintop>1000){
						$(".home").css("display","block")
					}else{
						$(".home").css("display","none")
					}
				})
			})
		})();
});