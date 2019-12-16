// 切换选项
$(document).ready(function(){
    $("#set1").bind("click",function(){
        $(".slider").css("display","block");
        $(".slider2").css("display","none");
        $(".slider3").css("display","none");
    });
    
    $("#set2").on("click",function(){
        $(".slider").css("display","none");
        $(".slider2").css("display","block");
        $(".slider3").css("display","none");
    });
    
    $("#set3").click(function(){
      $(".slider3").css("display","block");
      $(".slider").css("display","none");
      $(".slider2").css("display","none");  
    });
});

// 第一块
$(function () {
  var $li = $(".slider>ul>li");
  var count = 0;
  
  $(".arrow-right").click(function () {
    count++;
    if(count == $li.length){
      count = 0;
    }
    $li.eq(count).fadeIn(1000).siblings().fadeOut(1000);
  });

  $(".arrow-left").click(function () {
    count--;
    if(count == -1){
      count = $li.length - 1;
    }
    $li.eq(count).fadeIn(1000).siblings().fadeOut(1000);
  });
});

// 第二块
$(function () {
  $("#slider2Div1").bind("click",function(){
     $("#aImage1").animate({width:"500px"},2000);
     $("#aImage2").animate({width:"0"},2000);
     $("#aImage3").css("width",0);
     $("#aImage4").animate({width:"0"},2000);
  });
  $("#slider2Div2").bind("click",function(){
     $("#aImage1").animate({width:"0"},2000);
     $("#aImage2").animate({width:"500px"},2000);
     $("#aImage3").animate({width:"0"},2000);
     $("#aImage4").css("width",0);
  });
  $("#slider2Div3").bind("click",function(){
     $("#aImage1").css("width",0);
     $("#aImage2").animate({width:"0"},2000);
     $("#aImage3").animate({width:"500px"},2000);
     $("#aImage4").animate({width:"0"},2000);
  });
  $("#slider2Div4").bind("click",function(){
     $("#aImage1").animate({width:"0"},2000);
     $("#aImage2").css("width",0);
     $("#aImage3").animate({width:"0"},2000);
     $("#aImage4").animate({width:"500px"},2000);
  });
});

// 第三块
$(function () {
  var lis = $('.slide-item');
   $('.slider3').on('mouseover', 'li', function (event) {
      var index = $(this).index()
      $(this).css({
          left: 70 * index + 'px'
      })
      for (var i = 1; i < lis.length; i++) {
          if (i > index) {
              $(lis.eq(i)).css({
                  left: 700 - 70 * (5 - i) + 'px'
              })
          }
          if (i < index) {
              $(lis.eq(i)).css({
                  left: 70 * i + 'px'
              })
          }
      }
  })
   $('.slider3').on('mouseout', function (event) {
      for (var i = 0; i < lis.length; i++) {
          $(lis.eq(i)).css({
              left: ''
          })
      }
});
});


// 定时
// 第一块定时
function change(n){
    if(n>4) n=1; 

    var $li = $(".slider>ul>li");
    $li.eq(n).fadeIn(1000).siblings().fadeOut(1000);
    
    n++;
    setTimeout("change("+n+")",3000);
}
window.onload = function(){
    setTimeout("change(1)", 3000);
}