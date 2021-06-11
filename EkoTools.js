function openNav(){document.getElementById("myTopnav").style.left="0"}function closeNav(){document.getElementById("myTopnav").style.left="-250px"}function menuoverlayOn(){document.getElementById("menuoverlay").style.display="block"}function menuoverlayOff(){document.getElementById("menuoverlay").style.display="none"}function addClassBody(){var t,e,a;t=document.body,e="flow",a=t.className.split(" "),-1==a.indexOf(e)&&(t.className+=" "+e)}function removeClassBody(){var t=document.body;t.className=t.className.replace(/\bflow\b/g,"")}function jump(t){var e=document.getElementById(t).offsetTop;window.scrollTo(0,e)}function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?document.getElementById("backToTop").style.display="block":document.getElementById("backToTop").style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function videoPlay(t){return t.innerHTML=t.innerHTML.replace("<!--","").replace("-->",""),t.onclick=null,!1}for(var btns=document.getElementsByClassName("dropbtn"),i=0;i<btns.length;i++)btns[i].addEventListener("click",function(){var t=document.getElementsByClassName("active");t.length>0&&(t[0].className=t[0].className.replace(" active","")),this.className+=" active"});window.onclick=function(t){if(!t.target.matches(".dropbtn")){var e,a=document.getElementsByClassName("dropbtn");for(e=0;e<a.length;e++){var n=a[e];n.classList.contains("active")&&n.classList.remove("active")}}};var lazyaddthis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&lazyaddthis===!1||0!=document.body.scrollTop&&lazyaddthis===!1)&&(!function(){var t=document,e=t.createElement("script");e.src="//"+shortname+".disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}(),lazyaddthis=!0)},!0),window.onscroll=function(){scrollFunction()};var x=document.querySelectorAll(".lazyloadimg"),i;for(i=0;i<x.length;i++)x[i].innerHTML=x[i].innerHTML.replace("<!--","").replace("-->","");for(var imgEl=document.querySelectorAll(".post-body img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].removeAttribute("src"),imgEl[i].className+=" lazyload");!function(t,e){var a=e(t,t.document);t.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}("undefined"!=typeof window?window:{},function(t,e){"use strict";var a,n;if(function(){var e,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};n=t.lazySizesConfig||t.lazysizesConfig||{};for(e in a)e in n||(n[e]=a[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:n,noSupport:!0};var i=e.documentElement,l=t.Date,s=t.HTMLPictureElement,o="addEventListener",r="getAttribute",c=t[o],d=t.setTimeout,m=t.requestAnimationFrame||d,u=t.requestIdleCallback,p=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],f={},g=Array.prototype.forEach,y=function(t,e){return f[e]||(f[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),f[e].test(t[r]("class")||"")&&f[e]},b=function(t,e){y(t,e)||t.setAttribute("class",(t[r]("class")||"").trim()+" "+e)},v=function(t,e){var a;(a=y(t,e))&&t.setAttribute("class",(t[r]("class")||"").replace(a," "))},A=function(t,e,a){var n=a?o:"removeEventListener";a&&A(t,e),h.forEach(function(a){t[n](a,e)})},z=function(t,n,i,l,s){var o=e.createEvent("Event");return i||(i={}),i.instance=a,o.initEvent(n,!l,!s),o.detail=i,t.dispatchEvent(o),o},w=function(e,a){var i;!s&&(i=t.picturefill||n.pf)?(a&&a.src&&!e[r]("srcset")&&e.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[e]})):a&&a.src&&(e.src=a.src)},C=function(t,e){return(getComputedStyle(t,null)||{})[e]},E=function(t,e,a){for(a=a||t.offsetWidth;a<n.minSize&&e&&!t._lazysizesWidth;)a=e.offsetWidth,e=e.parentNode;return a},k=function(){var t,a,n=[],i=[],l=n,s=function(){var e=l;for(l=n.length?i:n,t=!0,a=!1;e.length;)e.shift()();t=!1},o=function(n,i){t&&!i?n.apply(this,arguments):(l.push(n),a||(a=!0,(e.hidden?d:m)(s)))};return o._lsFlush=s,o}(),T=function(t,e){return e?function(){k(t)}:function(){var e=this,a=arguments;k(function(){t.apply(e,a)})}},S=function(t){var e,a=0,i=n.throttleDelay,s=n.ricTimeout,o=function(){e=!1,a=l.now(),t()},r=u&&s>49?function(){u(o,{timeout:s}),s!==n.ricTimeout&&(s=n.ricTimeout)}:T(function(){d(o)},!0);return function(t){var n;(t=!0===t)&&(s=33),e||(e=!0,n=i-(l.now()-a),0>n&&(n=0),t||9>n?r():d(r,n))}},x=function(t){var e,a,n=99,i=function(){e=null,t()},s=function(){var t=l.now()-a;n>t?d(s,n-t):(u||i)(i)};return function(){a=l.now(),e||(e=d(s,n))}},L=function(){var s,m,u,h,f,E,L,N,P,_,I,M,R=/^img$/i,$=/^iframe$/i,H="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),F=0,j=0,O=0,W=-1,Q=function(t){O--,(!t||0>O||!t.target)&&(O=0)},D=function(t){return null==M&&(M="hidden"==C(e.body,"visibility")),M||"hidden"!=C(t.parentNode,"visibility")&&"hidden"!=C(t,"visibility")},U=function(t,a){var n,l=t,s=D(t);for(N-=a,I+=a,P-=a,_+=a;s&&(l=l.offsetParent)&&l!=e.body&&l!=i;)(s=(C(l,"opacity")||1)>0)&&"visible"!=C(l,"overflow")&&(n=l.getBoundingClientRect(),s=_>n.left&&P<n.right&&I>n.top-1&&N<n.bottom+1);return s},q=function(){var t,l,o,c,d,u,p,f,g,y,b,v,A=a.elements;if((h=n.loadMode)&&8>O&&(t=A.length)){for(l=0,W++;t>l;l++)if(A[l]&&!A[l]._lazyRace)if(!H||a.prematureUnveil&&a.prematureUnveil(A[l]))tt(A[l]);else if((f=A[l][r]("data-expand"))&&(u=1*f)||(u=j),y||(y=!n.expand||n.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:n.expand,a._defEx=y,b=y*n.expFactor,v=n.hFac,M=null,b>j&&1>O&&W>2&&h>2&&!e.hidden?(j=b,W=0):j=h>1&&W>1&&6>O?y:F),g!==u&&(E=innerWidth+u*v,L=innerHeight+u,p=-1*u,g=u),o=A[l].getBoundingClientRect(),(I=o.bottom)>=p&&(N=o.top)<=L&&(_=o.right)>=p*v&&(P=o.left)<=E&&(I||_||P||N)&&(n.loadHidden||D(A[l]))&&(m&&3>O&&!f&&(3>h||4>W)||U(A[l],u))){if(tt(A[l]),d=!0,O>9)break}else!d&&m&&!c&&4>O&&4>W&&h>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!f&&(I||_||P||N||"auto"!=A[l][r](n.sizesAttr)))&&(c=s[0]||A[l]);c&&!d&&tt(c)}},V=S(q),G=function(t){var e=t.target;return e._lazyCache?void delete e._lazyCache:(Q(t),b(e,n.loadedClass),v(e,n.loadingClass),A(e,X),z(e,"lazyloaded"),void 0)},K=T(G),X=function(t){K({target:t.target})},J=function(t,e){try{t.contentWindow.location.replace(e)}catch(a){t.src=e}},Y=function(t){var e,a=t[r](n.srcsetAttr);(e=n.customMedia[t[r]("data-media")||t[r]("media")])&&t.setAttribute("media",e),a&&t.setAttribute("srcset",a)},Z=T(function(t,e,a,i,l){var s,o,c,m,h,f;(h=z(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(a?b(t,n.autosizesClass):t.setAttribute("sizes",i)),o=t[r](n.srcsetAttr),s=t[r](n.srcAttr).replace(/.*?:\/\//g,"https://cdn.statically.io/img/"),l&&(c=t.parentNode,m=c&&p.test(c.nodeName||"")),f=e.firesLoad||"src"in t&&(o||s||m),h={target:t},b(t,n.loadingClass),f&&(clearTimeout(u),u=d(Q,2500),A(t,X,!0)),m&&g.call(c.getElementsByTagName("source"),Y),o?t.setAttribute("srcset",o):s&&!m&&($.test(t.nodeName)?J(t,s):t.src=s),l&&(o||m)&&w(t,{src:s})),t._lazyRace&&delete t._lazyRace,v(t,n.lazyClass),k(function(){var e=t.complete&&t.naturalWidth>1;f&&!e||(e&&b(t,"ls-is-cached"),G(h),t._lazyCache=!0,d(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&O--},!0)}),tt=function(t){if(!t._lazyRace){var e,a=R.test(t.nodeName),i=a&&(t[r](n.sizesAttr)||t[r]("sizes")),l="auto"==i;(!l&&m||!a||!t[r]("src")&&!t.srcset||t.complete||y(t,n.errorClass)||!y(t,n.lazyClass))&&(e=z(t,"lazyunveilread").detail,l&&B.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,O++,Z(t,e,l,i,a))}},et=x(function(){n.loadMode=3,V()}),at=function(){3==n.loadMode&&(n.loadMode=2),et()},nt=function(){if(!m){if(l.now()-f<999)return void d(nt,999);m=!0,n.loadMode=3,V(),c("scroll",at,!0)}};return{_:function(){f=l.now(),a.elements=e.getElementsByClassName(n.lazyClass),s=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),c("scroll",V,!0),c("resize",V,!0),t.MutationObserver?new MutationObserver(V).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[o]("DOMNodeInserted",V,!0),i[o]("DOMAttrModified",V,!0),setInterval(V,999)),c("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(t){e[o](t,V,!0)}),/d$|^c/.test(e.readyState)?nt():(c("load",nt),e[o]("DOMContentLoaded",V),d(nt,2e4)),a.elements.length?(q(),k._lsFlush()):V()},checkElems:V,unveil:tt,_aLSL:at}}(),B=function(){var t,a=T(function(t,e,a,n){var i,l,s;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),p.test(e.nodeName||""))for(i=e.getElementsByTagName("source"),l=0,s=i.length;s>l;l++)i[l].setAttribute("sizes",n);a.detail.dataAttr||w(t,a.detail)}),i=function(t,e,n){var i,l=t.parentNode;l&&(n=E(t,l,n),i=z(t,"lazybeforesizes",{width:n,dataAttr:!!e}),i.defaultPrevented||(n=i.detail.width)&&n!==t._lazysizesWidth&&a(t,l,i,n))},l=function(){var e,a=t.length;if(a)for(e=0;a>e;e++)i(t[e])},s=x(l);return{_:function(){t=e.getElementsByClassName(n.autosizesClass),c("resize",s)},checkElems:s,updateElem:i}}(),N=function(){!N.i&&e.getElementsByClassName&&(N.i=!0,B._(),L._())};return d(function(){n.init&&N()}),a={cfg:n,autoSizer:B,loader:L,init:N,uP:w,aC:b,rC:v,hC:y,fire:z,gW:E,rAF:k}});
var biofbkeren = {

  q: "\n╱◢▔◣\n╱▉╱▉\n╱◥▁▉\n╱╱╱◥◣\n",
  w: "\n╱◥◣╱╱◢◣╱╱◢◤\n╱╱◥◣◢◤◥◣◢◤\n╱╱╱◥◤╱╱◥◤╱\n╱╱╱╱╱╱╱╱╱╱\n",
  e: "\n╱▉▔◤\n╱▉■■\n╱▉▂◤\n╱╱╱╱\n",
  r: "\n╱▉▔◣\n╱▉▁◤\n╱▉◥◣\n╱╱╱╱\n",
  t: "\n◢▔▉▔◣\n╱╱▉╱╱\n╱╱▉╱╱\n╱╱╱╱╱\n",
  y: "\n╱▉╱▉\n╱◥▁▉\n╱◥▁◤\n╱╱╱╱\n",
  u: "\n╱▉╱▉\n╱▉╱▉\n╱◥▁◤\n╱╱╱╱\n",
  i: "\n╱▉\n╱▉\n╱▉\n╱╱\n",
  o: "\n╱◢▔▔◣\n╱▉╱╱▉\n╱◥▁▁◤\n╱╱╱╱╱\n",
  p: "\n╱▉▔◣\n╱▉▁■\n╱▉╱╱\n╱╱╱╱\n",
  
  Q: "\n╱◢▔◣\n╱▉╱▉\n╱◥▁▉\n╱╱╱◥◣\n",
  W: "\n╱◥◣╱╱◢◣╱╱◢◤\n╱╱◥◣◢◤◥◣◢◤\n╱╱╱◥◤╱╱◥◤╱\n╱╱╱╱╱╱╱╱╱╱\n",
  E: "\n╱▉▔◤\n╱▉■■\n╱▉▂◤\n╱╱╱╱\n",
  R: "\n╱▉▔◣\n╱▉▁◤\n╱▉◥◣\n╱╱╱╱\n",
  T: "\n◢▔▉▔◣\n╱╱▉╱╱\n╱╱▉╱╱\n╱╱╱╱╱\n",
  Y: "\n╱▉╱▉\n╱◥▁▉\n╱◥▁◤\n╱╱╱╱\n",
  U: "\n╱▉╱▉\n╱▉╱▉\n╱◥▁◤\n╱╱╱╱\n",
  I: "\n╱▉\n╱▉\n╱▉\n╱╱\n",
  O: "\n╱◢▔▔◣\n╱▉╱╱▉\n╱◥▁▁◤\n╱╱╱╱╱\n",
  P: "\n╱▉▔◣\n╱▉▁■\n╱▉╱╱\n╱╱╱╱\n",
  a: "\n╱◢▔◣\n╱▉▁▉\n╱▉╱▉\n╱╱╱╱\n",
  s: "\n╱◢▔◤\n╱◥▉◣\n╱◢▂◤\n╱╱╱╱\n",
  d: "\n╱▉▔◣\n╱▉╱▉ \n╱▉▁◤\n╱╱╱╱\n",
  
  f: "\n╱◢▔▔\n╱▉■■\n╱▉╱╱\n╱╱╱╱\n",
  g: "\n╱▉▔◣\n╱▉▔◤\n╱◥▁◤\n╱╱╱╱\n",
  h: "\n╱▉╱▉\n╱▉■▉\n╱▉╱▉\n╱╱╱╱\n",
  j: "\n╱╱╱▉\n╱╱╱▉\n╱◥▁◤\n╱╱╱╱\n",
  k: "\n╱▉╱◣\n╱▉◢◤\n╱▉◥◣\n╱◥╱╱\n",
  l: "\n╱▉╱╱\n╱▉╱╱\n╱▉▂◣\n╱╱╱╱\n",
  
  A: "\n╱◢▔◣\n╱▉▁▉\n╱▉╱▉\n╱╱╱╱\n",
  S: "\n╱◢▔◤\n╱◥▉◣\n╱◢▂◤\n╱╱╱╱\n",
  D: "\n╱▉▔◣\n╱▉╱▉ \n╱▉▁◤\n╱╱╱╱\n",
  F: "\n╱◢▔▔\n╱▉■■\n╱▉╱╱\n╱╱╱╱\n",
  G: "\n╱▉▔◣\n╱▉▔◤\n╱◥▁◤\n╱╱╱╱\n",
  H: "\n╱▉╱▉\n╱▉■▉\n╱▉╱▉\n╱╱╱╱\n",
  J: "\n╱╱╱▉\n╱╱╱▉\n╱◥▁◤\n╱╱╱╱\n",
  K: "\n╱▉╱◣\n╱▉◢◤\n╱▉◥◣\n╱◥╱╱\n",
  L: "\n╱▉╱╱\n╱▉╱╱\n╱▉▂◣\n╱╱╱╱\n",
  z: "\n╱◢▔◣\n╱◢▉◤\n╱◥▁◤\n╱╱╱╱\n",
  x: "\n╱◥◣╱╱◢◤\n╱╱◥◣◢◤╱\n╱╱◢◤◥◣╱\n╱◢◤╱╱◥◣\n",
  c: "\n╱◢▔◣\n╱▉╱╱\n╱◥▁◤\n╱╱╱╱\n",
  v: "\n◥◣╱╱◢◤\n╱◥◣◢◤\n╱╱◥◤╱\n╱╱╱╱╱\n",
  b: "\n╱▉▔◣\n╱▉■▉\n╱▉▁◤\n╱╱╱╱\n",
  n: "\n╱▉◣▉\n╱▉◥▉ \n╱▉╱▉\n╱╱╱╱\n",
  m: "\n╱▉◣◢▉\n╱▉◥◤▉\n╱▉╱╱▉\n╱╱╱╱╱\n",
  
  Z: "\n╱◢▔◣\n╱◢▉◤\n╱◥▁◤\n╱╱╱╱\n",
  X: "\n╱◥◣╱╱◢◤\n╱╱◥◣◢◤╱\n╱╱◢◤◥◣╱\n╱◢◤╱╱◥◣\n",
  C: "\n╱◢▔◣\n╱▉╱╱\n╱◥▁◤\n╱╱╱╱\n",
  V: "\n◥◣╱╱◢◤\n╱◥◣◢◤\n╱╱◥◤╱\n╱╱╱╱╱\n",
  B: "\n╱▉▔◣\n╱▉■▉\n╱▉▁◤\n╱╱╱╱\n",
  N: "\n╱▉◣▉\n╱▉◥▉ \n╱▉╱▉\n╱╱╱╱\n",
  M: "\n╱▉◣◢▉\n╱▉◥◤▉\n╱▉╱╱▉\n╱╱╱╱╱\n"
  
};
var bio_input = document.getElementById("bio_input");
var bio_output = document.getElementById("bio_output");

// Set pointer-events none as default
bio_output.style.pointerEvents = "none";

bio_input.addEventListener(
  "input",
  function() {
    bio_output.value = "";
    var val = this.value;
    val = val.split("");

    if (bio_input.value == "") {
      bio_output.style.pointerEvents = "none";
    } else {
      bio_output.style.pointerEvents = "auto";
    }

    setTimeout(function() {
      Object.keys(biofbkeren).map(function(item) {
      //Put for loop to convert same letters also
        for (var j = 0; j < val.length; j++) {
          var i = val.indexOf(item);
          if (i !== -1) {
            val[i] = biofbkeren[item];
            bio_output.value = val.join(" ");

            // Detect line break
            if (val.indexOf("\n") !== -1) {
              bio_output.value = trimIt(val.join(" "));
            }
          }
        }
      });
    }, 50);
  },
  false
);
// To trim first letter's white space in new line
function trimIt(x) {
  return x.replace(/^\s+|\s+$/gm, "");
}

// Trigger on paste
bio_input.addEventListener(
  "paste",
  function() {
    bio_input.keyup();
  },
  false
);



// Copy to clipboard
const answer = document.getElementById("copyResult");
const copy   = document.getElementById("copyButton");
const selection = window.getSelection();
const range = document.createRange();
const textToCopy = document.getElementById("textToCopy")

copy.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Disalin 😁';
    } else {
      answer.innerHTML = 'Gagal 😭';  
    }
    window.getSelection().removeAllRanges()
});

