//JavaScript Document

jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child')
        .fadeOut(1000)
        .next('a')
        .fadeIn(1000)
        .end()
        .appendTo('.imgslide');
    }, 3000);

    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    });
    $(".notice li:eq(1)").click(function(){
        $("#modal2").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
        $("#modal2").removeClass("active");
    });
});
