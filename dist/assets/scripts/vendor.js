!function(n){var r={};function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s="./src/scripts/vendor.js")}({"./node_modules/picturefill/dist/picturefill.js":function(e,me,he){"use strict";(function(de){var fe,e,t,s,n,r,i,o,c,a,pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e=window,a=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(a)&&a.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(s=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=s.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(r,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){i(),o&&o.addListener&&o.addListener(i)},s.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),i)),function(e,i,u){var s,l,a;i.createElement("picture");var x={},o=!1,t=function(){},n=i.createElement("img"),d=n.getAttribute,f=n.setAttribute,p=n.removeAttribute,c=i.documentElement,r={},T={algorithm:""},m="data-pfsrc",h=m+"set",g=navigator.userAgent,L=/rident/.test(g)||/ecko/.test(g)&&g.match(/rv\:(\d+)/)&&35<RegExp.$1,z="currentSrc",v=/\s+\+?\d+(e\d+)?w/,A=/(\([^)]+\))?\s*(.+)/,w=e.picturefillCFG,y="font-size:100%!important;",b=!0,E={},S={},P=e.devicePixelRatio,C={px:1,in:96},M=i.createElement("a"),R=!1,j=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,$=/^[^ \t\n\r\u000c]+/,_=/[,]+$/,k=/^\d+$/,O=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,D=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},N=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function U(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var I,H,q,W,G,Q,F,V,X,J,K,Y,Z,ee,te,ne,re,se,ie,oe=(I=/^([\d\.]+)(em|vw|px)$/,H=N(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in E))if(E[e]=!1,t&&(n=e.match(I)))E[e]=n[1]*C[n[2]];else try{E[e]=new Function("e",H(e))(C)}catch(e){}return E[e]}),ce=function(e,t){return e.w?(e.cWidth=x.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ae=function(e){if(o){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=(t=s.elements||x.qsa(s.context||i,s.reevaluate||s.reselect?x.sel:x.selShort)).length){for(x.setupRun(s),R=!0,n=0;n<r;n++)x.fillImg(t[n],s);x.teardownRun(s)}}};function ue(e,t){return e.res-t.res}function le(e,t){var n,r,s;if(e&&t)for(s=x.parseSet(t),e=x.makeUrl(e),n=0;n<s.length;n++)if(e===x.makeUrl(s[n].url)){r=s[n];break}return r}e.console&&console.warn,z in n||(z="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),x.ns=("pf"+(new Date).getTime()).substr(0,9),x.supSrcset="srcset"in n,x.supSizes="sizes"in n,x.supPicture=!!e.HTMLPictureElement,x.supSrcset&&x.supPicture&&!x.supSizes&&(q=i.createElement("img"),n.srcset="data:,a",q.src="data:,a",x.supSrcset=n.complete===q.complete,x.supPicture=x.supSrcset&&x.supPicture),x.supSrcset&&!x.supSizes?(W="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",G=i.createElement("img"),Q=function(){2===G.width&&(x.supSizes=!0),l=x.supSrcset&&!x.supSizes,o=!0,setTimeout(ae)},G.onload=Q,G.onerror=Q,G.setAttribute("sizes","9px"),G.srcset=W+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",G.src=W):o=!0,x.selShort="picture>img,img[srcset]",x.sel=x.selShort,x.cfg=T,x.DPR=P||1,x.u=C,x.types=r,x.setSize=t,x.makeUrl=N(function(e){return M.href=e,M.href}),x.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},x.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?x.matchesMedia=function(e){return!e||matchMedia(e).matches}:x.matchesMedia=x.mMQ,x.matchesMedia.apply(this,arguments)},x.mMQ=function(e){return!e||oe(e)},x.calcLength=function(e){var t=oe(e,!0)||!1;return t<0&&(t=!1),t},x.supportsType=function(e){return!e||r[e]},x.parseSize=N(function(e){var t=(e||"").match(A);return{media:t&&t[1],length:t&&t[2]}}),x.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(o));if(n)return t=n[0],o+=t.length,t}var f,p,t,n,s,i=r.length,o=0,m=[];function c(){var e,t,n,r,s,i,o,c,a,u=!1,l={};for(r=0;r<p.length;r++)i=(s=p[r])[s.length-1],o=s.substring(0,s.length-1),c=parseInt(o,10),a=parseFloat(o),k.test(o)&&"w"===i?((e||t)&&(u=!0),0===c?u=!0:e=c):O.test(o)&&"x"===i?((e||t||n)&&(u=!0),a<0?u=!0:t=a):k.test(o)&&"h"===i?((n||t)&&(u=!0),0===c?u=!0:n=c):u=!0;u||(l.url=f,e&&(l.w=e),t&&(l.d=t),n&&(l.h=n),n||t||e||(l.d=1),1===l.d&&(d.has1x=!0),l.set=d,m.push(l))}function a(){for(e(j),t="",n="in descriptor";;){if(s=r.charAt(o),"in descriptor"===n)if(U(s))t&&(p.push(t),t="",n="after descriptor");else{if(","===s)return o+=1,t&&p.push(t),void c();if("("===s)t+=s,n="in parens";else{if(""===s)return t&&p.push(t),void c();t+=s}}else if("in parens"===n)if(")"===s)t+=s,n="in descriptor";else{if(""===s)return p.push(t),void c();t+=s}else if("after descriptor"===n)if(U(s));else{if(""===s)return void c();n="in descriptor",o-=1}o+=1}}for(;;){if(e(B),i<=o)return m;f=e($),p=[],","===f.slice(-1)?(f=f.replace(_,""),c()):a()}}(e.srcset,e)),e.cands},x.getEmValue=function(){var e;if(!s&&(e=i.body)){var t=i.createElement("div"),n=c.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",c.style.cssText=y,e.style.cssText=y,e.appendChild(t),s=t.offsetWidth,e.removeChild(t),s=parseFloat(s,10),c.style.cssText=n,e.style.cssText=r}return s||16},x.calcListLength=function(e){if(!(e in S)||T.uT){var t=x.calcLength(function(e){var t,n,r,s,i,o,c,a=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],s=[],i=0,o=0,c=!1;function a(){n&&(r.push(n),n="")}function u(){r[0]&&(s.push(r),r=[])}for(;;){if(""===(t=e.charAt(o)))return a(),u(),s;if(c){if("*"===t&&"/"===e[o+1]){c=!1,o+=2,a();continue}o+=1}else{if(U(t)){if(e.charAt(o-1)&&U(e.charAt(o-1))||!n){o+=1;continue}if(0===i){a(),o+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){a(),u(),o+=1;continue}if("/"===t&&"*"===e.charAt(o+1)){c=!0,o+=2;continue}}n+=t,o+=1}}}(e)).length,t=0;t<r;t++)if(i=(s=n[t])[s.length-1],c=i,a.test(c)&&0<=parseFloat(c)||u.test(c)||"0"===c||"-0"===c||"+0"===c){if(o=i,s.pop(),0===s.length)return o;if(s=s.join(" "),x.matchesMedia(s))return o}return"100vw"}(e));S[e]=t||C.width}return S[e]},x.setRes=function(e){var t;if(e)for(var n=0,r=(t=x.parseSet(e)).length;n<r;n++)ce(t[n],e.sizes);return t},x.setRes.res=ce,x.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,o,c,a,u,l,d,f,p,m,h,g,v,A,w,y,b,E=t[x.ns],S=x.DPR;if(c=E.curSrc||t[z],(a=E.curCan||(d=t,f=c,!(p=e[0].set)&&f&&(p=(p=d[x.ns].sets)&&p[p.length-1]),(m=le(f,p))&&(f=x.makeUrl(f),d[x.ns].curSrc=f,(d[x.ns].curCan=m).res||ce(m,m.set.sizes)),m))&&a.set===e[0].set&&((l=L&&!t.complete&&a.res-.1>S)||(a.cached=!0,a.res>=S&&(o=a))),!o)for(e.sort(ue),o=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=S){o=e[s=r-1]&&(l||c!==x.makeUrl(n.url))&&(h=e[s].res,g=n.res,v=S,A=e[s].cached,b=y=w=void 0,"saveData"===T.algorithm?2.7<h?b=v+1:(y=(g-v)*(w=Math.pow(h-.6,1.5)),A&&(y+=.1*w),b=h+y):b=1<v?Math.sqrt(h*g):h,v<b)?e[s]:n;break}o&&(u=x.makeUrl(o.url),E.curSrc=u,E.curCan=o,u!==c&&x.setSrc(t,o),x.setSize(t))}},x.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},x.getSet=function(e){var t,n,r,s=!1,i=e[x.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&x.matchesMedia(n.media)&&(r=x.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},x.parseSets=function(e,t,n){var r,s,i,o,c=t&&"PICTURE"===t.nodeName.toUpperCase(),a=e[x.ns];(a.src===u||n.src)&&(a.src=d.call(e,"src"),a.src?f.call(e,m,a.src):p.call(e,m)),(a.srcset===u||n.srcset||!x.supSrcset||e.srcset)&&(r=d.call(e,"srcset"),a.srcset=r,o=!0),a.sets=[],c&&(a.pic=!0,function(e,t){var n,r,s,i,o=e.getElementsByTagName("source");for(n=0,r=o.length;n<r;n++)(s=o[n])[x.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,a.sets)),a.srcset?(s={srcset:a.srcset,sizes:d.call(e,"sizes")},a.sets.push(s),(i=(l||a.src)&&v.test(a.srcset||""))||!a.src||le(a.src,s)||s.has1x||(s.srcset+=", "+a.src,s.cands.push({url:a.src,d:1,set:s}))):a.src&&a.sets.push({srcset:a.src,sizes:null}),a.curCan=null,a.curSrc=u,a.supported=!(c||s&&!x.supSrcset||i&&!x.supSizes),o&&x.supSrcset&&!a.supported&&(r?(f.call(e,h,r),e.srcset=""):p.call(e,h)),a.supported&&!a.srcset&&(!a.src&&e.src||e.src!==x.makeUrl(a.src))&&(null===a.src?e.removeAttribute("src"):e.src=a.src),a.parsed=!0},x.fillImg=function(e,t){var n,r,s,i,o,c=t.reselect||t.reevaluate;(e[x.ns]||(e[x.ns]={}),n=e[x.ns],c||n.evaled!==a)&&(n.parsed&&!t.reevaluate||x.parseSets(e,e.parentNode,t),n.supported?n.evaled=a:(r=e,i=x.getSet(r),o=!1,"pending"!==i&&(o=a,i&&(s=x.setRes(i),x.applySetCandidate(s,r))),r[x.ns].evaled=o))},x.setupRun=function(){R&&!b&&P===e.devicePixelRatio||(b=!1,P=e.devicePixelRatio,E={},S={},x.DPR=P||1,C.width=Math.max(e.innerWidth||0,c.clientWidth),C.height=Math.max(e.innerHeight||0,c.clientHeight),C.vw=C.width/100,C.vh=C.height/100,a=[C.height,C.width,P].join("-"),C.em=x.getEmValue(),C.rem=C.em)},x.supPicture?(ae=t,x.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function e(){var t=i.readyState||"";te=setTimeout(e,"loading"===t?200:999),i.body&&(x.fillImgs(),(F=F||Z.test(t))&&clearTimeout(te))},te=setTimeout(ee,i.body?9:99),ne=c.clientHeight,D(e,"resize",(V=function(){b=Math.max(e.innerWidth||0,c.clientWidth)!==C.width||c.clientHeight!==ne,ne=c.clientHeight,b&&x.fillImgs()},X=99,Y=function e(){var t=new Date-K;t<X?J=setTimeout(e,X-t):(J=null,V())},function(){K=new Date,J||(J=setTimeout(Y,X))})),D(i,"readystatechange",ee)),x.picturefill=ae,x.fillImgs=ae,x.teardownRun=t,ae._=x,e.picturefillCFG={pf:x,push:function(e){var t=e.shift();"function"==typeof x[t]?x[t].apply(x,e):(T[t]=e[0],R&&x.fillImgs({reselect:!0}))}};for(;w&&w.length;)e.picturefillCFG.push(w.shift());e.picturefill=ae,"object"===pe(de)&&"object"===pe(de.exports)?de.exports=ae:(fe=function(){return ae}.call(me,he,me,de))===u||(de.exports=fe),x.supPicture||(r["image/webp"]=(re="image/webp",se="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ie=new e.Image).onerror=function(){r[re]=!1,ae()},ie.onload=function(){r[re]=1===ie.width,ae()},ie.src=se,"pending"))}(window,document)}).call(this,he("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/svgxuse/svgxuse.js":function(e,t,n){"use strict";!function(){if("undefined"!=typeof window&&window.addEventListener){var e,t,n,h=Object.create(null),g=function(){clearTimeout(t),t=setTimeout(e,100)},v=function(){},A=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,r,s;return window.XMLHttpRequest&&(n=new XMLHttpRequest,r=t(location),s=t(e),n=void 0===n.withCredentials&&""!==s&&s!==r?XDomainRequest||void 0:XMLHttpRequest),n},w="http://www.w3.org/1999/xlink";e=function(){var e,t,n,r,s,i,o,c,a,u,l=0;function d(){var e;0===(l-=1)&&(v(),window.addEventListener("resize",g,!1),window.addEventListener("orientationchange",g,!1),window.MutationObserver?((e=new MutationObserver(g)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),v=function(){try{e.disconnect(),window.removeEventListener("resize",g,!1),window.removeEventListener("orientationchange",g,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",g,!1),v=function(){document.documentElement.removeEventListener("DOMSubtreeModified",g,!1),window.removeEventListener("resize",g,!1),window.removeEventListener("orientationchange",g,!1)}))}function f(e){return function(){!0!==h[e.base]&&(e.useEl.setAttributeNS(w,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function p(r){return function(){var e,t=document.body,n=document.createElement("x");r.onload=null,n.innerHTML=r.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),d()}}function m(e){return function(){e.onerror=null,e.ontimeout=null,d()}}for(v(),a=document.getElementsByTagName("use"),s=0;s<a.length;s+=1){try{t=a[s].getBoundingClientRect()}catch(e){t=!1}e=(c=(r=a[s].getAttribute("href")||a[s].getAttributeNS(w,"href")||a[s].getAttribute("xlink:href"))&&r.split?r.split("#"):["",""])[0],n=c[1],i=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!i?(a[s].hasAttribute("href")&&a[s].setAttributeNS(w,"xlink:href",r),e.length&&(!0!==(u=h[e])&&setTimeout(f({useEl:a[s],base:e,hash:n}),0),void 0===u&&void 0!==(o=A(e))&&(u=new o,(h[e]=u).onload=p(u),u.onerror=m(u),u.ontimeout=m(u),u.open("GET",e),u.send(),l+=1))):i?e.length&&h[e]&&setTimeout(f({useEl:a[s],base:e,hash:n}),0):void 0===h[e]?h[e]=!0:h[e].onload&&(h[e].abort(),delete h[e].onload,h[e]=!0)}a="",l+=1,d()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}()},"./node_modules/webpack/buildin/module.js":function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"./src/scripts/vendor.js":function(e,t,n){"use strict";n("./temp/scripts/modernizr.js"),n("./node_modules/picturefill/dist/picturefill.js"),n("./node_modules/svgxuse/svgxuse.js")},"./temp/scripts/modernizr.js":function(e,t,n){"use strict";var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,n,t){var u=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){u.push({name:e,fn:t,options:n})},addAsyncTest:function(e){u.push({name:null,fn:e})}},l=function(){};l.prototype=r,l=new l;var d=[];var s=n.documentElement,i="svg"===s.nodeName.toLowerCase();l.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),l.addTest("video",function(){var e=function(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):i?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),function(){var e,t,n,r,s,i,o,c;for(var a in u)if(u.hasOwnProperty(a)){if(e=[],(t=u[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=t.fn,c="function",r=(void 0===o?"undefined":f(o))===c?t.fn():t.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?l[i[0]]=r:(!l[i[0]]||l[i[0]]instanceof Boolean||(l[i[0]]=new Boolean(l[i[0]])),l[i[0]][i[1]]=r),d.push((r?"":"no-")+i.join("-"))}}(),function(e){var t=s.className,n=l._config.classPrefix||"";if(i&&(t=t.baseVal),l._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}l._config.enableClasses&&(t+=" "+n+e.join(" "+n),i?s.className.baseVal=t:s.className=t)}(d),delete r.addTest,delete r.addAsyncTest;for(var o=0;o<l._q.length;o++)l._q[o]();e.Modernizr=l}(window,document)}});