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

var quotes = ["Aku akan terus mengatakannya padamu, jadi dengarlah baik-baik setiap hari. Aku cinta padamu",
"Cinta adalah d imana kamu selalu punya alasan untuk kembali meski kamu sudah berjalan begitu jauh", "Tuhan, ajari aku mengenal cinta sebagaimana orang-orang lain mengartikannya. Karena kata orang, dia adalah sumber segala-galanya","Karena hati tidak perlu memilih, ia selalu tahu kemana harus berlabuh","Aku mencintaimu. Itu sebabnya aku takkan pernah selesai mendoakan keselamatanmu","Mungkin ada benarnya juga buku-buku itu bilang. Orang-orang yang jatuh cinta terkadang terbelenggu oleh ilusi yang diciptakan oleh hatinya sendiri","Bersamamu aku tidak pernah takut lagi menjadi pemimpi","Melukiskanmu saat senja. Memanggil namamu ke ujung dunia. Tiada yang lebih pilu. Tiada yang menjawabku. Selain hatiku dan ombak berderu","Apakah namamu WiFi? Soalnya aku bisa merasakan konektivitas","Dibilang sayang? Iya. Dibilang cinta? Iya. Dibilang pacar? Bukan","Cinta tak pernah gagal panen. Karena bahagia dan sedih itulah hasil permanen","Jika cinta itu agama. Aku akan memelukmu seperti aku memeluk agama. Tak akan ku lepas hingga aku meregang nyawa","Halal adalah bukan hanya tentang apa yang kita makan, tapi juga tentang apa yang kita kenakan. Dan juga apa yang kita cintai","Jika menunggu itu membosankan apakah berpindah ke lain hati itu menyenangkan?","Yang sempurna cukup dia yang mau berjuang dan bertahan bersama walau suatu hari banyak orang yang akan merusak hubungan kita","Akan tiba waktu dimana rindu tak lagi butuh temu, bukan hadir orang baru namun karena hati yang telah beku","Aku mencintaimu seperti derai hujan yang ikhlas memeluk bumi, mesti engkau memilih pelangi","Kita harus sadar diri dan melihat apa yang terjadi, iya yang terjadi adalah aku memperjuangkan dia sedangkan dia memperjuangkan orang lain","Cantikmu hanya membuat orang lain menatap namun perilakumulah yang membuat ku menetap","Tolong jangan seperti yang lain, buktikan padaku kau berbeda dan tunjukkan padaku bahwa kau layak diperjuangkan","Meskipun akhirnya belum tentu bahagia, setidaknya kita pernah tertawa bersama","Karena ketika sudah kecewa, apapun yang baik akan tetap terlihat buruk","Seseorang berhenti berjuang bukan karena dia telah mendapatkan yang lain, tapi dia tau karena perjuangannya hanya akan sia-sia","Teruslah tanpa kabar, jika suatu saat nanti aku terbiasa tanpa kabarmu, jangan salahkan aku. Kau yang melatihku","Jika takdir memang menyatukan kita, semua kebahagiaan itu akan datang walau sedikit terlambat","Disaat kita mengetahui sesuatu yang membuat kita sakit hati, satu-satu obatnya adalah berhenti untuk mencari tahu","Kamu sudah terbiasanya sendiri, hingga tak menyadari ada seseorang yang ingin menghapus kesendirianmu","Aku hanya ingin kamu menganggap aku ada, walaupun itu hanya sebentar saja","Kepercayaan itu ibaratkan sebuah kaca. Bila sudah retak tidak dapat kebali seperti semula","Kamu tau rasanya mencintai tapi tidak memiliki ?. Percayalah ini lebih buruk dari pada patah hati","Buatlah orang yang mengecewakanmu menyesal karena perubahanmu, agar dia tau bahwa bunga mawar butuh waktu untuk mekar","Terimakasih sudah menggantikan posisi tepat dimana saat hati sedang dilukai, ternyata memang benar, sebuah karma akan berpulang kepada yang lebih pantas","Jika mimpi adalah satu-satunya cara agar aku bisa bersamamu, maka aku tidak akan pernah mau membuka mataku untuk bangun dari tidurku","Selamat atas keberhasilanmu yang ingin melukaiku dengan perasaan. Tapi kamu berakhir pada penyesalan","Yang membuat galau bukan dirinya, tetapi penilaianmu yang berlebihan tentang dirinya","Jangan pernah ninggalin yang baik demi yang terbaik, di saat yang baik pergi, kamu bakal sadar kalo dia adalah yang terbaik","Apapun alasan dan penjelasannya, yang namanya kehilangan itu selalu menyakitkan","Jika kita bisa menghargai sesuatu yang sederhana, bukan tidak mungkin kelak kita kan menerima sesuatu yang sempurna","Beri aku ruang, aku ingin sejenak bernafas. Kita kini sudah menjadi kenangan, tinggal bagaimana belajar untuk ikhlas","Senyum tak selalu berarti seseorang bahagia. Kadang seseorang tersenyum hanya karena tak ingin menjelaskan kenapa hatinya terluka","Teruslah seperti itu, karena nanti akan ada saat dimana aku benar-benar merasa lelah, hingga aku benar-benar tidak lagi menegurmu, tidak lagi mendesakmu, dan bahkan tidak mengingatmu lagi","Kadang, beribu kata maaf tidak dapat mengembalikan apa yang telah terjadi, dan beribu kata maaf tidak akan pernah bisa mengobati hati yang terlanjur terluka","Terkadang kamu takut terlalu dekat dgn seseorang, karena kamu tahu dia bisa pergi kapan saja, tak peduli betapa dekat kamu dan dia. Kamu dan aku hanya bagian dari kisah masa lalu… Namun hati dan perasaan ini masih nyata untukmu","Karena semenjak kamu hadir dan membuat ku nyaman, aku tak pernah tertarik dengan siapapun selain kamu","Bukan berjanji untuk tidak menyakiti, tetapi berjanji untuk tetap bertahan ketika salah satu tersakiti","Yang terbaik bukanlah yang datang dengan segala kelebihannya. Namun yang tidak pergi karena segala kekurangan kita","Berjanjilah untuk selalu ada disampingku, apapun keadaan dan kondisiku, bertahanlah untukku","Aku menemukan perbedaan pada dirimu yang telah sanggup membuatku lupa akan rasa sakit di masa lalu","Mungkin telah lama aku menantikan kehadiranmu, sosok yang mampu menghapus semua kesedihanku, membahagiakanku dan membuatku semakin mencintai diriku sendiri. Terimakasih","Ada yang sulit untuk mengungkapkan, ia hanya berusaha menunjukkan, sampai kau sadar bahwa rasa sayang tak melulu perihal yang disuarakan","Karena pada akhirnya akan ada seseorang yang datang dengan niat membahagiakan tanpa pernah berpikir untuk meninggalkan","Aku percaya dengan cara yang entah bagaimana, Tuhan akan selalu memberikan yang lebih baik dari sekedar baik","Awalnya semua bangga pada pilihannya, tapi pada akhirnya tidak semua orang setia pada pilihannya. Karena yang sulit bukan memilih tapi bertahan pada pilihan","Tak perlu seseorang yang sempurna, cukup temukan orang yang selalu membuatmu bahagia dan membuatmu berarti dari siapapun","Percayalah akan ada balasan untuk yang tetap setia menunggu dan pasti akan ada balasan pula bagi yang pergi mencari sesuatu yang baru","Merindukanmu dan selalu mendoakanmu yang terbaik, itulah cara sederhanaku mencintaimu dari kejauhan","Jangan tanyakan seberapa besar perasaanku padamu, cukup Tuhan yang tahu, seberapa bosan Dia mendengar namamu dalam setiap doaku","Jika kita ingin disukai, maka akuilah setiap kesalahan tanpa menuntup besarnya kebajikan yang telah kita lakukan","Tak ada yang salah dengan Cinta. Karena ia hanyalah sebuah kata dan kita sendirilah yang memaknainya","Aku memang tidak pernah menjanjikan untuk sebuah kebahagiaan, tapi aku bisa menjanjikan untuk sebuah kesetiaan","Cinta dan kesetiaan itu memberi untuk menerima sekaligus memberi untuk menumbuhkan","Cinta tidak menyadari kedalamannya dan akan terasa saat perpisahan tiba","Cinta adalah ketika kebahagiaan orang lain lebih penting dibandingkan kesenangan sendiri","Cinta adalah ketika kebahagiaan orang lain lebih penting dibandingkan kesenangan sendiri","Mulailah segala sesuatu dengan senyuman, karena senyuman adalah awal dari kasih sayang","Cukup kamu katakan pada semua orang, bahwa yang tulus mencintaimu hanya aku dan kamu bangga akan hal itu","Kita lahir sendiri, hidup sendiri, dan mati pun sendiri. Hanya dengan cinta dan persahabatan kita bisa menciptakan ilusi untuk mengenang hal-hal yang indah dan membuktikan bahwa kita tidak sendirian","Cinta itu api, apapun yang dilewatinya akan terbakar. Ibarat cahaya, apapun yang dikenainya akan bersinar. Seperti langit, apapun yang ada dibawahnya akan ditutupinya","Aku selalu berusaha untuk menjadi yang terbaik dari yang terbaik. Hanya untuk membuatmu bangga karena telah memilihku","Ketakutan terbesar dalam hidupku bukan kehilanganmu, tapi melihat dirimu kehilangan kebahagiaanmu","Kamu tak bisa membuat seseorang mencintai kamu, yang kamu bisa hanya memantaskan diri untuk dicintai seseorang","Cinta yang sesaat akan berkata, \“Aku mencintaimu karena aku membutuhkanmu\”, tetapi makna sejatinya akan berkata, \“Aku membutuhkanmu karena aku mencintaimu\“-","Aku mencintaimu bukan karena kau terlihat sempurna sebagai ciptaan-Nya. Tapi karena keberadaanmu, membuat ku merasa sempurna sebagai pribadi yang baik","Lebih baik disakiti dengan kejujuran daripada disakiti dengan kebohongan","Jikalau waktu adalah obat dari segala luka, maka tidur adalah bius peredam pilumu sementara","Tak ada yang bisa kulakukan selain berusaha ikhlas saat aku harus kehilanganmu dan bersabar pula untuk memulihkan luka di hatiku","Aku mengenal sakit dari sebuah penghianatan, dan aku belajar ikhlas dari kehilangan","Tangis adalah pintu pelepasan bagi sesuatu yang tak layak untuk disimpan","Tak berharap banyak engkau tuk kembali. Kan kutunjukan aku masih bisa berdiri","Jangan membuat seseorang tersenyum bahagia, apabila akhirnya orang itu harus membayarnya dengan tangisan","Kau adalah alasan mengapa ku tersenyum. Tapi terkadang kau alasan mengapa aku menangis","Jika pasanganmu meninggalkanmu demi orang lain, relakanlah. Karena, penghianat lebih cocok dengan penggoda. Jadi, biarkanlah mereka hancur bersama","Tak ada yang salah dengan kesetiaan. Yang salah adalah ketika kesetian tak mendapat penghormatan","Semua yang telah kita lewati sudah berlalu begitu saja, tapi cuma satu yang ingin aku sampaikan. Aku masih sayang kamu","Rasa sakit mengajariku untuk lebih kuat. lebih berhati-hati, lebih dewasa dan lebih baik lagi","Aku memang bukan orang yang sempurna. Aku lemah dan pengecut. Meski demikian, aku rela jika harus melepasmu untuk sebuah kebahagianmu","Kupikir kau masih mencintaiku, tapi kita tak bisa melepas kenyataan bahwa aku tak cukup untukmu","Aku hanya tersenyum, itu caraku menghiasi luka. Aku hanya tertawa, itu caraku untuk bersembunyi",
                "Aku tahu hatiku tak akan pernah sama. Tapi aku mencoba meyakinkan diriku sendiri bahwa aku baik baik saja","Lupakanlah yang saat ini meninggalkanmu demi yang lain. Meski cinta, jangan biarkan dirimu kembali terluka tuk alasan yang sama","Beberapa dari kita berpikir bahwa saling berpegangan membuat kita kuat, tapi terkadang yang membuat kita kuat adalah melepaskan","Jauh lebih baik Anda melupakan sesuatu dan tersenyum, ketimbang Anda mengingat sesuatu dan menjadi sedih karenanya","Aku yakin, dibalik semua kesedihan ini, ada sebuah kebahagiaan yang sudah duduk manis menunggu di depan sana","Rasa sakit yang terburuk adalah ketika seseorang yang membuat mu merasa begitu istimewa kemarin. Dan membuat kamu merasa begitu tidak diinginkan hari ini","Aku mendoakanmu dari kejahuan dan semoga kamu mendengarkannya dimimpimu malam ini","Untuk kita yang terpisahkan jarak semoga tetap setia serta saling mendoa agar segera berjumpa","Ikhlaskanlah apapun yang telah terjadi hari ini. Suka ataupun duka, semoga dapat menjadikanmu pribadi yang lebih baik lagi",
	"Aku hanya ingin mencintainya untuk waktu yang lama. Dan bahagia bersamanya untuk waktu yang lama pula",
	"Saat rasa sakitnya terlalu berat untuk ditanggung sendiri, datanglah padaku. Apapun masalahnya, apapun yang terjadi, aku akan tetap mencintaimu selamanya",
	"Aku memang tidak berhak mengatakan ini kepadamu. Tapi terlepas dari siapa kamu dan siapa aku, aku hanya ingin bahagia bersamamu tanpa harus memikirkan latar belakang kita",
	"Apapun itu aku ingin melaluinya bersamamu. Aku ingin menghapus setiap kenangan burukku, dangan kenangan indah saat bersamamu",
	"Bahkan, bilapun kau berkata bahwa kau menghapusnya, cinta tidak akan semudah itu sirna. Cinta tak bersemayam di ingatan, tapi ia terpatri dalam hati",
	"Cinta bukan tentang memberi, tapi menerima sesuatu",
	"Cinta mengajariku melihat dengan cara memejam dan mengerti tanpa perlu penjelasan",
	"Cinta itu sederhana, jika kamu tidak mampu membuatnya tertawa, cukup tidak membuatnya terluka",
	"Cinta itu saling menguatkan jika engkau ikhlas dalam kebersamaan", 
	"Cinta mungkin hadir karena takdir tapi tak ada salahnya kita saling memperjuangkan,"];
function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

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

