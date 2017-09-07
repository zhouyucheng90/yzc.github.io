
	function init(box){
		var l=$('box').width()/5;
		var t=$('box').height()/5;
	 //单层循环
	 for (var i=0;i<25;i++) {
	 	var x=l*(i%5);//行 
	 	var y=t*parseInt(i/5);//列 

	 	$('box').append("<div class=item style=left:"+x+'px;top:'+y+'px;background-position:'+-x+'px '+-y+'px;"><div>');
	 }
	}
