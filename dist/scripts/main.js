"use strict";var view=document.getElementById("view");document.addEventListener("mousemove",function(e){e.preventDefault();var t={x:e.clientX,y:e.clientY,b:e.clientX+230,a:e.clientY+150,d:e.clientX-230,c:e.clientY+150},c=("rect("+t.a+"px, "+t.b+"px, "+t.c+"px, "+t.d+"px)","circle(16.61% at "+t.x+"px "+t.y+"px)");console.log(c),view.style.display="block",view.style.clipPath=c},!0);