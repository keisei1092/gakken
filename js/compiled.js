var li="elements/0.jpg elements/1.jpg elements/2.jpg elements/3.jpg elements/4.jpg elements/5.jpg elements/6.jpg elements/7.jpg elements/8.jpg elements/9.jpg".split(" "),col="2f415e 385e2f 475e2f 545e2f 5e592f 5e4b2f 5e3d2f 5e2f2f 5e2f3d 5e2f4b".split(" ");
$(document).ready(function(){var c=Math.floor(li.length*Math.random()),a=new Image,b=0;a.src=li[c];a.onload=function(){var b=300-a.naturalHeight;$("#header").css("background-image","url("+a.src+")").animate({"background-position-y":b+"px"},3E3)};$(".club").css("background-color",function(){b++;return"#"+col[b-1]});$(".club").mouseover(function(){$(this).fadeTo("fast",1)});$(".club").mouseout(function(){$(this).fadeTo("fast",0.8)})});
