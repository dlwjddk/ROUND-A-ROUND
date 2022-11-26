$(function(){
    $("#menu").click(function(){
        $("header").fadeIn()
    })
    
    $(".close").click(function(){
        $("header").fadeOut()
    })
    
    $("#btn li").eq(0).click(function(){
        $(".slide li").fadeOut()
        $(".slide li").eq(0).fadeIn()
        
        $("#btn li").removeClass("on")
        $("#btn li").eq(0).addClass("on")
    })
    
        $("#btn li").eq(1).click(function(){
        $(".slide li").fadeOut()
        $(".slide li").eq(1).fadeIn()
        
        $("#btn li").removeClass("on")
        $("#btn li").eq(1).addClass("on")
    })
    
        $("#btn li").eq(2).click(function(){
        $(".slide li").fadeOut()
        $(".slide li").eq(2).fadeIn()
        
        $("#btn li").removeClass("on")
        $("#btn li").eq(2).addClass("on")
    })
    
    
    $(document).ready(function(){
        
        var $banner=$(".slide_wrap").find("ul");
        
        var $bannerWidth=$banner.children().outerWidth();
        var $bannerHeight = $banner.children().outerHeight();
        var $bannerLength = $banner.children().length;

        var rollingId;
        
        rollingId = setInterval(function() { rollingStart(); }, 1500);

        $banner.mouseover(function(){
            clearInterval(rollingId);
			$(this).css("cursor", "pointer");
        })
        
        $banner.mouseout(function(){
            rollingId = setInterval(function() { rollingStart(); }, 3000);
			$(this).css("cursor", "default");

        })
        
        function rollingStart() {
			$banner.css("width", $bannerWidth * $bannerLength + "px");
			$banner.css("height", $bannerHeight + "px");
			//alert(bannerHeight);
			//배너의 좌측 위치를 옮겨 준다.
			$banner.animate({left: - $bannerWidth + "px"}, 1500, function() { //숫자는 롤링 진행되는 시간이다.
				//첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
				$(this).append("<li>" + $(this).find("li:first").html() + "</li>");
				//뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
				$(this).find("li:first").remove();
				//다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
				$(this).css("left", 0);
				//이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
			});
		}


    })
})