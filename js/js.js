
//导航
$(".title_nav li,.title_nav dd").each(function(){
	
	if($(this).children(".title_nav01").hasClass("title_nav01"))//判断当前对象是否有这个title_nav01这个类，如果有进入
	{
		$(this).mouseenter(function(){//鼠标移入
			if(this.nodeName=="DD")//如果有dd这个标签进入
			{
				$(this).children("a").addClass("DDcur");//给这个dd加上DDcur这个类，（DDcur）这个类在css样式中，html没写
			}
			$(this).children(".title_nav01").stop(false,true).slideDown(400);//滑入显示
			//$(this).children(".title_nav01").show();
		});
		$(this).mouseleave(function(){//鼠标移出
			if(this.nodeName=="DD")//如果有dd这个标签进入
			{
				$(this).children("a").removeClass("DDcur");//给这个dd去除DDcur这个类，（DDcur）这个类在css样式中，html没写
			}
			$(this).children(".title_nav01").stop(false,true).slideUp(400);//滑出效果
			//$(this).children(".title_nav01").hide();
		});
	}
});

//flash
if($(".flash").length!=0)//防止其它页面没有flash这个类的页面报错
{
	var flash={};//json写法，减少全局变量
	$(".flash_nav li").mouseenter(function(){
		if($(this).hasClass("blue"))
		{
			return;
		}
		var oldPos,nowPos;
		nowPos=$(this).index();
		oldPos=$(".flash_02 .blue").index();
		
		$(".flash_nav li").eq(nowPos).addClass("blue").siblings().removeClass("blue");	
		$(".flash_img li").eq(nowPos).stop(false,true).fadeIn(800);
		$(".flash_img li").eq(oldPos).stop(false,true).fadeOut(800);
	});
	//right
	$(".flash_right").click(function(){
		var oldPos,nowPos,lastPos;
		oldPos=$(".flash_02 .blue").index();
		lastPos=$(".flash_nav li").length-1;
		nowPos=oldPos==lastPos?0:oldPos+1;
		$(".flash_nav li").eq(nowPos).addClass("blue").siblings().removeClass("blue");
		$(".flash_img li").eq(nowPos).stop(false,true).fadeIn(800);
		$(".flash_img li").eq(oldPos).stop(false,true).fadeOut(800);
	});
	//left
	$(".flash_left").click(function(){
		var oldPos,nowPos,lastPos;
		oldPos=$(".flash_02 .blue").index();
		lastPos=$(".flash_nav li").length-1;
		nowPos=oldPos==0?lastPos:oldPos-1;
		$(".flash_nav li").eq(nowPos).addClass("blue").siblings().removeClass("blue");
		$(".flash_img li").eq(nowPos).stop(false,true).fadeIn(800);
		$(".flash_img li").eq(oldPos).stop(false,true).fadeOut(800);
	});

	flash.DO=setInterval(function(){
		$(".flash_right").click();
	},3000);

	$(".flash").mouseenter(function(){
		clearInterval(flash.DO);
	});
	$(".flash").mouseleave(function(){
		
		flash.DO=setInterval(function(){$(".flash_right").click();},3000);
	});
	
	
	$(".flash_01").mouseenter(function(){
		$(".flash_left,.flash_right").show();
	});
	$(".flash_01").mouseleave(function(){
		$(".flash_left,.flash_right").hide();
	});



	
	//圆
	$(".slide_ball li").mouseenter(function(){
		if($(this).hasClass("slide_cur"))
		{
			return;//跳出函数
		}
		var oldPos=$(".slide_cur").index();
		
		$(this).addClass("slide_cur").stop().animate({"width":"500px"},400);
		$(".slide_ball li").eq(oldPos).removeClass("slide_cur").stop().animate({"width":"160px"},400);
		
		
	});
	
	
	//关于汇众
	$(".about_img .about_left").mouseenter(function(){
		$(this).find("img").stop(false,true).animate({"width":"532px","margin":"-10px 0 0 -10px"},400);
		$(this).find("i").stop(false,true).animate({"height":"100%","top":"0"},500);
	});
	$(".about_img .about_left").mouseleave(function(){
		$(this).find("img").stop(false,true).animate({"width":"492px","margin":"0 0 0 0"},400);
		$(this).find("i").stop(false,true).animate({"height":"112px","top":"129px"},500);
	});
	//right
	$(".about_btn_right").click(function(){
		$(".about_textright01 p:first").appendTo($(".about_textright01"));
		
	});
	//left
	$(".about_btn_left").click(function(){
	
		$(".about_textright01 p:last").prependTo($(".about_textright01"));
		
	});
	
	
	//合作伙伴
	//right
	$(".ad_btn_right").click(function(){
	    var liw=$(".partner_ad_list li:first").width();
	    var liwidth=parseInt($(".partner_ad_list li:first").css("margin-right"));
		$(".partner_ad_list li:last").prependTo(".partner_ad_list").css({"margin-left":-(liw+liwidth)+"px"});//把最后一个li放到ul的第一个
		$(".partner_ad_list li:first").animate({"margin-left":"0px"},200);//刚刚把最后一个li放在第一位置，是负数，在把它的margin-left慢慢变为0；
	   
	    
	    
	});
	
	
	
}
	
	//left
	$(".ad_btn_left").click(function(){
	    var liw=$(".partner_ad_list li:first").width();
	    var liwidth=parseInt($(".partner_ad_list li:first").css("margin-right"));
	   
		 $(".partner_ad_list li:first").animate({"margin-left":-(liw+liwidth)+"px"},200,function(){
		 	$(this).appendTo($(".partner_ad_list")).css({"margin-left":"0px"});
		 });
	    
	});
	//TOP
	$(window).scroll(function(){//只要滚动滚动条就触发
		var winHight=$(window).height();//获取窗口的高度
		//var winH=winHight/2;
		//var num=winHight+winH;
		//console.log("windowH:"+winHight,"一半:"+winH,num);
		var scrollval=$("body").scrollTop()+$("html").scrollTop();//获得网页的滚动条垂直距离，$("body").scrollTop()支持IE,$("html").scrollTop()支持非ie//$("body").scrollTop()+$("html").scrollTop();等价于$(window).scrollTop();
		if(scrollval>winHight)
		{
			$(".TopBtn").fadeIn(300);//淡入
		}
		else
		{
			$(".TopBtn").fadeOut(300);//淡出
		}
	});
	$(".TopBtn").click(function(){
		$("body,html").animate({"scrollTop":"0"},300);//获得网页的滚动条垂直距离，$("body").scrollTop()支持IE,$("html").scrollTop()支持非ie
	});
	
	
	
	





//liaison
$(".liaison_bottom").click(function(){
	
	$("body,html").animate({"scrollTop":"0px"},300);//获得网页的滚动条垂直距离，$("body").scrollTop()支持IE,$("html").scrollTop()支持非ie
});
var bool=true;
$(".liaison a:first").click(function(){
	if(bool)
	{	bool=false;
		$(this).children("img").attr({"src":"images/liaison-off.jpg"});
		$(".liaison").animate({"height":"62px"},200);
	}
	else
	{
		bool=true;
		$(this).children("img").attr({"src":"images/liaison-open.png"});
		$(".liaison").animate({"height":"198px"},200);
	}
});
//产品插件
if($(".product_img").length!=0)
{
	$('.product_list').isotope({
		itemSelector: '.product_list li'
	});
	
	$('.product_navlist li').click(function(){
		$(this).addClass('product_curr').siblings().removeClass('product_curr');
		var dataValue=$(this).attr('data');//获取data的值
		$('.product_list').isotope({
			itemSelector: '.product_list li',
			filter:dataValue
		});
	});
}

//关于我们
$(".contact_nav_list li").click(function(){
	
	var val=$(this).text();//获取li的文字
	//console.log(val);
	$(".contact_curr").html(val);//把获取的文字插入对应的span
	$(this).addClass("contact_nav_curr").siblings(".contact_nav_curr").removeClass("contact_nav_curr");
	var nowPow=$(this).index();//获取li的当前位置
	$(".text_box li").eq(nowPow).show().siblings().hide();
	
});



