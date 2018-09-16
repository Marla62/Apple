$(function () {

    //头部菜单
    let meanBtn = $("header .list");
    let h = innerHeight;
    let bigbox=$(".bigbox");
    window.resize=function(){
        h = innerHeight;
    };
    meanBtn.click(function () {
        if (bigbox[0].style.height>100+"px"){
            $(bigbox).css("height",0+"px")
        }else{
            $(bigbox).css("height",h+"px")
        }

    });
    //头部菜单结束
    //底部手风琴菜单
    let dlbox =$("footer dl");
    $(dlbox).click(function () {
        $(this).animate({height:"100%"});
        $(this).siblings().animate({height:37})
    })
});
