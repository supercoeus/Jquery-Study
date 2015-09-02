// jquery 判断浏览器版本
$(document).ready(function(){
    var bro=$.browser;
    var binfo="";
    if(bro.msie) {binfo="Microsoft Internet Explorer "+bro.version;}
    if(bro.mozilla) {binfo="Mozilla Firefox "+bro.version;}
    if(bro.safari) {binfo="Apple Safari "+bro.version;}
    if(bro.opera) {binfo="Opera "+bro.version;}
    alert(binfo);
    $("#browser").html(binfo);
})

//$(document).ready(function () {
//    var bro = $.browser;
//    if (bro.msie && bro.version < 9) {
//        $(window).resize(function () {
//            window.location.href = window.location.href;
//        })
//        if ($(window).width() < 1140) {
//            $(".nav_box").css("width", "970");
//            $(".nav_left,.nav_right").css("display", "none");
//        }
//    }
//})

// jquery 获得浏览器宽高
//Jquery

//alert($(window).height());                           //浏览器当前窗口可视区域高度

//alert($(document).height());                        //浏览器当前窗口文档的高度

//alert($(document.body).height());                //浏览器当前窗口文档body的高度

//alert($(document.body).outerHeight(true));  //浏览器当前窗口文档body的总高度 包括border padding margin

//alert($(window).width());                            //浏览器当前窗口可视区域宽度

//alert($(document).width());                        //浏览器当前窗口文档对象宽度

//alert($(document.body).width());                //浏览器当前窗口文档body的宽度

//alert($(document.body).outerWidth(true));  //浏览器当前窗口文档body的总宽度 包括border padding margin