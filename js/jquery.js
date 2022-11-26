$(function(){
    $("#btn li").eq(0).hover(function(){
        $("#slide_wrap li").fadeOut()
        $("#slide_wrap li").eq(0).fadeIn()
    })
    
    $("#btn li").eq(1).hover(function(){
        $("#slide_wrap li").fadeOut()
        $("#slide_wrap li").eq(1).fadeIn()
    })
    
    $("#btn li").eq(2).hover(function(){
        $("#slide_wrap li").fadeOut()
        $("#slide_wrap li").eq(2).fadeIn()
    })
    
    $("#btn li").eq(3).hover(function(){
        $("#slide_wrap li").fadeOut()
        $("#slide_wrap li").eq(3).fadeIn()
    })

})