function line(a,b,c,d,e,f){var g=$(`<div id=${e} class='line'><p class="text-center" id="${e}">${f}</p></div>`),h=50;g.css({top:b+h,left:a+h,width:Math.sqrt((c-a)*(c-a)+(d-b)*(d-b)),transform:"rotate("+Math.atan2(d-b,c-a)+"rad)"}),$("#router-area").append(g)}function draw(a,b){let c=a.offset().left,d=a.offset().top,e=b.offset().left,f=b.offset().top;line(c,d,e,f)}function editLine(a,b,c,d,e){var f=50;e.css({top:b+f,left:a+f,width:Math.sqrt((c-a)*(c-a)+(d-b)*(d-b)),transform:"rotate("+Math.atan2(d-b,c-a)+"rad)"})}