/**
 * Created by wenwen on 2016/3/29.
 *
 * 失败品
 */
$(document).ready(function(){
    var t=0;
        n=0;
    var count=$("#img_list li").length;
    //获取数字
    $("#img_num li").click(function(){
        var i=$(this).text()-1;
        console.log('i.text()');
        n=i;
        if(i>=count) return;
        $("#img_list li").fliter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        var index=$(this).index();
        $(intex).addClass("on").siblings().removeClass("on");
        //auto

        t=setInterval("showAuto()",3000);
        $("#wrappper").hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval("showAuto()",3000);
        });
        function showAuto(){
            n=n>=(count-1) ?0 : ++n;
            $("#img_num li").eq(n).trigger("click");
        }
    });

})