function cssAutoTransition(){const t=document.querySelectorAll("[auto-transition]");for(let e=0;e<t.length;e++){const n=t[e],o=n.getAttribute("auto-transition").split(" "),i=n.getAttribute("auto-transition-trigger"),s=i?document.querySelector(i):n,l=o[0],u=o[1],r=o[2],a={height:n.scrollHeight,width:n.scrollWidth};let c,d;"auto"==u?(s.addEventListener("mouseenter",(function(){clearTimeout(d),elementComputedStyles=window.getComputedStyle(n,null),c=1e3*elementComputedStyles.transitionDuration.slice(0,-1)+1e3*elementComputedStyles.transitionDelay.slice(0,-1),n.style[l]=a[l]+"px",n.offsetWidth,n.style[l]=r})),s.addEventListener("mouseleave",(function(){n.style[l]=a[l]+"px",d=setTimeout((function(){n.style.removeProperty(l)}),c)}))):"auto"==r&&(n.style[l]=u,s.addEventListener("mouseenter",(function(){n.style[l]=a[l]+"px"})),s.addEventListener("mouseleave",(function(){n.style[l]=u})))}}window.onload=function(){cssAutoTransition()};