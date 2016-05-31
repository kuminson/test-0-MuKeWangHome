// JavaScript Document
$(function(){
	//焦点图片
	myFocus.set({
		id:"run_pic",
		pattern:"mF_fancy",
		width:1000,
		height:310,
	});
	//滚动新闻
	var $roll = $(".roll_right ul");
	var times = setInterval(function(){
		$roll.animate({marginTop:"-=1px"},0,function(){
			if($roll.offset().top < 377){
				$roll.offset({top:407});
				$roll.children().first().appendTo($roll);
			}
			
		});
	},100);
	
})
