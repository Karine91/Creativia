!function(e,n,s){var l=[],a={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){l.push({name:e,fn:n,options:s})},addAsyncTest:function(e){l.push({name:null,fn:e})}},f=function(){};f.prototype=a,f=new f;var r=[];var o=n.documentElement,t="svg"===o.nodeName.toLowerCase();f.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,n,s,a,o,t;for(var i in l)if(l.hasOwnProperty(i)){if(e=[],(n=l[i]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(a="function"==typeof n.fn?n.fn():n.fn,o=0;o<e.length;o++)1===(t=e[o].split(".")).length?f[t[0]]=a:(!f[t[0]]||f[t[0]]instanceof Boolean||(f[t[0]]=new Boolean(f[t[0]])),f[t[0]][t[1]]=a),r.push((a?"":"no-")+t.join("-"))}}(),function(e){var n=o.className,s=f._config.classPrefix||"";if(t&&(n=n.baseVal),f._config.enableJSClass){var a=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(a,"$1"+s+"js$2")}f._config.enableClasses&&(n+=" "+s+e.join(" "+s),t?o.className.baseVal=n:o.className=n)}(r),delete a.addTest,delete a.addAsyncTest;for(var i=0;i<f._q.length;i++)f._q[i]();e.Modernizr=f}(window,document);