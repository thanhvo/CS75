/*! Raygun4js - v2.4.1 - 2016-09-07
* https://github.com/MindscapeHQ/raygun4js
* Copyright (c) 2016 MindscapeHQ; Licensed MIT */

!function(a,b){function c(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function d(a){return"undefined"==typeof a}var e={},f=a.TraceKit,g=[].slice,h="?";e.noConflict=function(){return a.TraceKit=f,e},e.wrap=function(a){function b(){try{return a.apply(this,arguments)}catch(b){throw e.report(b),b}}return b},e.report=function(){function b(a){i(),m.push(a)}function d(a){for(var b=m.length-1;b>=0;--b)m[b]===a&&m.splice(b,1)}function f(a,b){var d=null;if(!b||e.collectWindowErrors){for(var f in m)if(c(m,f))try{m[f].apply(null,[a].concat(g.call(arguments,2)))}catch(h){d=h}if(d)throw d}}function h(a,b,c,d,g){var h=null;if(g)h=e.computeStackTrace(g);else if(o)e.computeStackTrace.augmentStackTraceWithInitialElement(o,b,c,a),h=o,o=null,n=null;else{var i={url:b,line:c,column:d};i.func=e.computeStackTrace.guessFunctionName(i.url,i.line),i.context=e.computeStackTrace.gatherContext(i.url,i.line),h={mode:"onerror",message:a,url:document.location.href,stack:[i],useragent:navigator.userAgent}}return f(h,"from window.onerror"),!!k&&k.apply(this,arguments)}function i(){l!==!0&&(k=a.onerror,a.onerror=h,l=!0)}function j(b){var c=g.call(arguments,1);if(o){if(n===b)return;var d=o;o=null,n=null,f.apply(null,[d,null].concat(c))}var h=e.computeStackTrace(b);throw o=h,n=b,a.setTimeout(function(){n===b&&(o=null,n=null,f.apply(null,[h,null].concat(c)))},h.incomplete?2e3:0),b}var k,l,m=[],n=null,o=null;return j.subscribe=b,j.unsubscribe=d,j}(),e.computeStackTrace=function(){function b(b){if("string"!=typeof b)return[];if(!e.remoteFetching)return"";try{var c=function(){try{return new a.XMLHttpRequest}catch(b){return new a.ActiveXObject("Microsoft.XMLHTTP")}},d=c();return d.open("GET",b,!1),d.send(""),d.responseText}catch(f){return""}}function f(a){if(!c(w,a)){var d="";a=a||"",a.indexOf&&a.indexOf(document.domain)!==-1&&(d=b(a)),w[a]=d?d.split("\n"):[]}return w[a]}function g(a,b){var c,e=/function ([^(]*)\(([^)]*)\)/,g=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,i="",j=10,k=f(a);if(!k.length)return h;for(var l=0;l<j;++l)if(i=k[b-l]+i,!d(i)){if(c=g.exec(i))return c[1];if(c=e.exec(i))return c[1]}return h}function i(a,b){var c=f(a);if(!c.length)return null;var g=[],h=Math.floor(e.linesOfContext/2),i=h+e.linesOfContext%2,j=Math.max(0,b-h-1),k=Math.min(c.length,b+i-1);b-=1;for(var l=j;l<k;++l)d(c[l])||g.push(c[l]);return g.length>0?g:null}function j(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function k(a){return j(a).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function l(a,b){for(var c,d,e=0,g=b.length;e<g;++e)if((c=f(b[e])).length&&(c=c.join("\n"),d=a.exec(c)))return{url:b[e],line:c.substring(0,d.index).split("\n").length,column:d.index-c.lastIndexOf("\n",d.index)-1};return null}function m(a,b,c){var d,e=f(b),g=new RegExp("\\b"+j(a)+"\\b");return c-=1,e&&e.length>c&&(d=g.exec(e[c]))?d.index:null}function n(b){for(var c,d,e,f,g=[a.location.href],h=document.getElementsByTagName("script"),i=""+b,m=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,n=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,o=0;o<h.length;++o){var p=h[o];p.src&&g.push(p.src)}if(e=m.exec(i)){var q=e[1]?"\\s+"+e[1]:"",r=e[2].split(",").join("\\s*,\\s*");c=j(e[3]).replace(/;$/,";?"),d=new RegExp("function"+q+"\\s*\\(\\s*"+r+"\\s*\\)\\s*{\\s*"+c+"\\s*}")}else d=new RegExp(j(i).replace(/\s+/g,"\\s+"));if(f=l(d,g))return f;if(e=n.exec(i)){var s=e[1];if(c=k(e[2]),d=new RegExp("on"+s+"=[\\'\"]\\s*"+c+"\\s*[\\'\"]","i"),f=l(d,g[0]))return f;if(d=new RegExp(c),f=l(d,g))return f}return null}function o(a){if(!a.stack)return null;for(var b,c,d=/^\s*at (.*?) ?\(?((?:file|http|https|chrome-extension):.*?):(\d+)(?::(\d+))?\)?\s*$/i,e=/^\s*(.*?)(?:\((.*?)\))?@?((?:file|http|https|chrome):.*?):(\d+)(?::(\d+))?\s*$/i,f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,j=a.stack.split("\n"),k=[],l=/^(.*) is undefined$/.exec(a.message),n=0,o=j.length;n<o;++n){if(b=e.exec(j[n]))c={url:b[3],func:b[1]||h,args:b[2]?b[2].split(","):"",line:+b[4],column:b[5]?+b[5]:null};else if(b=d.exec(j[n]))c={url:b[2],func:b[1]||h,line:+b[3],column:b[4]?+b[4]:null};else{if(!(b=f.exec(j[n])))continue;c={url:b[2],func:b[1]||h,line:+b[3],column:b[4]?+b[4]:null}}!c.func&&c.line&&(c.func=g(c.url,c.line)),c.line&&(c.context=i(c.url,c.line)),k.push(c)}return k[0]&&k[0].line&&!k[0].column&&l?k[0].column=m(l[1],k[0].url,k[0].line):k[0].column||"undefined"==typeof a.columnNumber||(k[0].column=a.columnNumber+1),k.length?{mode:"stack",name:a.name,message:a.message,url:document.location.href,stack:k,useragent:navigator.userAgent}:null}function p(a){for(var b,c=a.stacktrace,d=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,e=null!==c?c.split("\n"):c,f=[],h=0,j=e.length;h<j;h+=2)if(b=d.exec(e[h])){var k={line:+b[1],column:+b[2],func:b[3]||b[4],args:b[5]?b[5].split(","):[],url:b[6]};if(!k.func&&k.line&&(k.func=g(k.url,k.line)),k.line)try{k.context=i(k.url,k.line)}catch(l){}k.context||(k.context=[e[h+1]]),f.push(k)}return f.length?{mode:"stacktrace",name:a.name,message:a.message,url:document.location.href,stack:f,useragent:navigator.userAgent}:null}function q(b){var d=b.message.split("\n");if(d.length<4)return null;var e,h,j,m,n=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,o=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,p=/^\s*Line (\d+) of function script\s*$/i,q=[],r=document.getElementsByTagName("script"),s=[];for(h in r)c(r,h)&&!r[h].src&&s.push(r[h]);for(h=2,j=d.length;h<j;h+=2){var t=null;if(e=n.exec(d[h]))t={url:e[2],func:e[3],line:+e[1]};else if(e=o.exec(d[h])){t={url:e[3],func:e[4]};var u=+e[1],v=s[e[2]-1];if(v&&(m=f(t.url))){m=m.join("\n");var w=m.indexOf(v.innerText);w>=0&&(t.line=u+m.substring(0,w).split("\n").length)}}else if(e=p.exec(d[h])){var x=a.location.href.replace(/#.*$/,""),y=e[1],z=new RegExp(k(d[h+1]));m=l(z,[x]),t={url:x,line:m?m.line:y,func:""}}if(t){t.func||(t.func=g(t.url,t.line));var A=i(t.url,t.line),B=A?A[Math.floor(A.length/2)]:null;A&&B.replace(/^\s*/,"")===d[h+1].replace(/^\s*/,"")?t.context=A:t.context=[d[h+1]],q.push(t)}}return q.length?{mode:"multiline",name:b.name,message:d[0],url:document.location.href,stack:q,useragent:navigator.userAgent}:null}function r(a,b,c,d){var e={url:b,line:c};if(e.url&&e.line){a.incomplete=!1,e.func||(e.func=g(e.url,e.line)),e.context||(e.context=i(e.url,e.line));var f=/ '([^']+)' /.exec(d);if(f&&(e.column=m(f[1],e.url,e.line)),a.stack.length>0&&a.stack[0].url===e.url){if(a.stack[0].line===e.line)return!1;if(!a.stack[0].line&&a.stack[0].func===e.func)return a.stack[0].line=e.line,a.stack[0].context=e.context,!1}return a.stack.unshift(e),a.partial=!0,!0}return a.incomplete=!0,!1}function s(a,b){for(var c,d,f,i=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,j=[],k={},l=!1,o=s.caller;o&&!l;o=o.caller)if(o!==t&&o!==e.report){if(d={url:null,func:h,line:null,column:null},o.name?d.func=o.name:(c=i.exec(o.toString()))&&(d.func=c[1]),"undefined"==typeof d.func)try{d.func=c.input.substring(0,c.input.indexOf("{"))}catch(p){}if(f=n(o)){d.url=f.url,d.line=f.line,d.func===h&&(d.func=g(d.url,d.line));var q=/ '([^']+)' /.exec(a.message||a.description);q&&(d.column=m(q[1],f.url,f.line))}k[""+o]?l=!0:k[""+o]=!0,j.push(d)}b&&j.splice(0,b);var u={mode:"callers",name:a.name,message:a.message,url:document.location.href,stack:j,useragent:navigator.userAgent};return r(u,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),u}function t(a,b){var c=null;b=null==b?0:+b;try{if(c=p(a))return c}catch(d){if(v)throw d}try{if(c=o(a))return c}catch(d){if(v)throw d}try{if(c=q(a))return c}catch(d){if(v)throw d}try{if(c=s(a,b+1))return c}catch(d){if(v)throw d}return{mode:"failed"}}function u(a){a=(null==a?0:+a)+1;try{throw new Error}catch(b){return t(b,a+1)}}var v=!1,w={};return t.augmentStackTraceWithInitialElement=r,t.guessFunctionName=g,t.gatherContext=i,t.ofCaller=u,t}(),e.extendToAsynchronousCallbacks=function(){var b=function(b){var c=a[b];a[b]=function(){var a=g.call(arguments),b=a[0];return"function"==typeof b&&(a[0]=e.wrap(b)),c.apply?c.apply(this,a):c(a[0],a[1])}};b("setTimeout"),b("setInterval")},e.remoteFetching||(e.remoteFetching=!0),e.collectWindowErrors||(e.collectWindowErrors=!0),(!e.linesOfContext||e.linesOfContext<1)&&(e.linesOfContext=11),a.TraceKit=e}(window),function(a,b){"use strict";if(a&&a.event&&a.event.add){var c=a.event.add;a.event.add=function(d,e,f,g,h){if("function"!=typeof f&&"function"!=typeof f.handler)return c.call(this,d,e,f,g,h);var i;return f.handler?(i=f.handler,f.handler=b.wrap(f.handler)):(i=f,f=b.wrap(f)),i.guid?f.guid=i.guid:f.guid=i.guid=a.guid++,c.call(this,d,e,f,g,h)};var d=a.fn.ready;a.fn.ready=function(a){return d.call(this,b.wrap(a))};var e=a.ajax;a.ajax=function(c,d){"object"==typeof c&&(d=c,c=void 0),d=d||{};for(var f,g=["complete","error","success"];f=g.pop();)a.isFunction(d[f])&&(d[f]=b.wrap(d[f]));try{return c?e.call(this,c,d):e.call(this,d)}catch(h){throw b.report(h),h}}}}(window.jQuery,window.TraceKit);var raygunFactory=function(a,b,c){function d(a){var b=a,c=a.split("//")[1];if(c){var d=c.indexOf("?"),e=c.toString().substring(0,d),f=e.split("/").slice(0,4).join("/"),g=e.substring(0,48);b=f.length<g.length?f:g,b!==e&&(b+="..")}return b}function e(a,b,e,f){var g="AJAX Error: "+(b.statusText||"unknown")+" "+(e.type||"unknown")+" "+(d(e.url)||"unknown");(!K||0!==b.status&&b.getAllResponseHeaders())&&aa.send(f||a.type,{status:b.status,statusText:b.statusText,type:e.type,url:e.url,ajaxErrorMessage:g,contentType:e.contentType,requestData:e.data&&e.data.slice?e.data.slice(0,10240):c,responseData:b.responseText&&b.responseText.slice?b.responseText.slice(0,10240):c,activeTarget:a.target&&a.target.activeElement&&a.target.activeElement.outerHTML&&a.target.activeElement.outerHTML.slice?a.target.activeElement.outerHTML.slice(0,10240):c})}function f(){return!(!x||""===x)||(ba.log("Raygun API key has not been configured, make sure you call Raygun.init(yourApiKey)"),!1)}function g(a,b){var c,d={};for(c in a)d[c]=a[c];for(c in b)d[c]=b[c];return d}function h(a,b){return null!=b?a.concat(b):a}function i(a,b){for(var c=0;c<a.length;c++)b.call(null,c,a[c])}function j(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function k(){return Math.floor(9007199254740992*Math.random())}function l(){var b=document.documentElement,c=document.getElementsByTagName("body")[0],d=a.innerWidth||b.clientWidth||c.clientWidth,e=a.innerHeight||b.clientHeight||c.clientHeight;return{width:d,height:e}}function m(a,b){var c=(new Date).toJSON();try{var d="raygunjs="+c+"="+k();"undefined"==typeof localStorage[d]&&(localStorage[d]=JSON.stringify({url:a,data:b}))}catch(e){ba.log("Raygun4JS: LocalStorage full, cannot save exception")}}function n(){try{return"localStorage"in a&&null!==a.localStorage}catch(b){return!1}}function o(){if(n()&&localStorage&&localStorage.length>0)for(var a in localStorage)if("raygunjs="===a.substring(0,9))try{var b=JSON.parse(localStorage[a]);w(b.url,b.data),localStorage.removeItem(a)}catch(c){ba.log("Raygun4JS: Unable to send saved error")}}function p(a){"function"==typeof E&&E(a)}function q(){if(!y&&!O){var a,b="raygun4js-userid",c=ba.readCookie(b);c?a=c:(a=ba.getUuid(),ba.createCookie(b,a,744)),aa.setUser(a,!0,null,null,null,a)}}function r(a,b){if(A)for(var c=0;c<A.length;c++)if("object"==typeof A[c]&&"function"==typeof A[c].exec){if(null!==A[c].exec(a))return"[removed by filter]"}else if(A[c]===a)return"[removed by filter]";return b}function s(a,b){if(null==a)return a;if("[object Object]"!==Object.prototype.toString.call(a))return a;var c={};for(var d in a){var e=a[d];"[object Object]"===Object.prototype.toString.call(e)?"Details"!==b||"Client"!==d?c[d]=s(r(d,e),d):c[d]=e:"[object Function]"!==Object.prototype.toString.call(e)&&("undefined"!=typeof b?c[d]=r(d,e):"OccurredOn"===d&&(c[d]=e))}return c}function t(b,d){var e=[],f={};if(N){if(!b.stack||!b.stack.length)return void ba.log("Raygun4JS: Cancelling send due to null stacktrace");var g=ba.parseUrl("domain"),h="Script error",k=b.message||d.status||h;if(k.substring(0,h.length)===h&&null!==b.stack[0].url&&b.stack[0].url.indexOf(g)===-1&&(0===b.stack[0].line||"?"===b.stack[0].func))return void ba.log("Raygun4JS: cancelling send due to third-party script error with no stacktrace and message");if(null!==b.stack[0].url&&b.stack[0].url.indexOf(g)===-1){var m=!1;for(var n in U)b.stack[0].url.indexOf(U[n])>-1&&(m=!0);if(!m)return void ba.log("Raygun4JS: cancelling send due to error on non-origin, non-whitelisted domain")}}if(W instanceof Array)for(var o in W)if(W.hasOwnProperty(o)&&a.location.hostname&&a.location.hostname.match(W[o]))return void ba.log("Raygun4JS: cancelling send as error originates from an excluded hostname");if(X instanceof Array)for(var p in X)if(X.hasOwnProperty(p)&&navigator.userAgent.match(X[p]))return void ba.log("Raygun4JS: cancelling send as error originates from an excluded user agent");b.stack&&b.stack.length&&i(b.stack,function(a,b){e.push({LineNumber:b.line,ColumnNumber:b.column,ClassName:"line "+b.line+", column "+b.column,FileName:b.url,MethodName:b.func||"[anonymous]"})});var q=ba.parseUrl("?");q.length>0&&i(q.split("&"),function(a,b){var c=b.split("=");if(c&&2===c.length){var d=decodeURIComponent(c[0]),e=r(d,c[1]);f[d]=e}}),d===c&&(d={}),j(d.customData)&&("function"==typeof S?d.customData=S():d.customData=S),j(d.tags)&&("function"==typeof T?d.tags=T():d.tags=T);var t,v=a.screen||{width:l().width,height:l().height,colorDepth:8},w=d.customData&&d.customData.ajaxErrorMessage;t="customData"===Y?s(d.customData,"UserCustomData"):d.customData;try{JSON.stringify(t)}catch(x){var A="Cannot add custom data; may contain circular reference";t={error:A},ba.log("Raygun4JS: "+A)}var D=w||b.message||d.status||"Script error";D&&"string"==typeof D&&(D=D.substring(0,512));var E={OccurredOn:new Date,Details:{Error:{ClassName:b.name,Message:D,StackTrace:e},Environment:{UtcOffset:(new Date).getTimezoneOffset()/-60,"User-Language":navigator.userLanguage,"Document-Mode":document.documentMode,"Browser-Width":l().width,"Browser-Height":l().height,"Screen-Width":v.width,"Screen-Height":v.height,"Color-Depth":v.colorDepth,Browser:navigator.appCodeName,"Browser-Name":navigator.appName,"Browser-Version":navigator.appVersion,Platform:navigator.platform},Client:{Name:"raygun-js",Version:"2.4.1"},UserCustomData:t,Tags:d.tags,Request:{Url:[location.protocol,"//",location.host,location.pathname,location.hash].join(""),QueryString:f,Headers:{"User-Agent":navigator.userAgent,Referer:document.referrer,Host:document.domain}},Version:z||"Not supplied"}};if(E.Details.User=y,"all"===Y&&(E=s(E)),"function"==typeof C&&(ba.log("Raygun4JS: calling custom grouping key"),E.Details.GroupingKey=C(E,b,d)),"function"==typeof B){var F=B(E);F&&u(F)}else u(E)}function u(a){if(f()){ba.log("Sending exception data to Raygun:",a);var b=V+"/entries?apikey="+encodeURIComponent(x);w(b,JSON.stringify(a))}}function v(b,c){var d;return d=new a.XMLHttpRequest,"withCredentials"in d?d.open(b,c,!0):a.XDomainRequest&&(J&&(c=c.slice(6)),d=new a.XDomainRequest,d.open(b,c)),d.timeout=1e4,d}function w(b,c){var d=v("POST",b,c);return"function"==typeof D&&D(d),"withCredentials"in d?(d.onreadystatechange=function(){4===d.readyState&&(202===d.status?o():M&&403!==d.status&&400!==d.status&&429!==d.status&&m(b,c))},d.onload=function(){ba.log("posted to Raygun"),p(this)}):a.XDomainRequest&&(d.ontimeout=function(){M&&(ba.log("Raygun: saved locally"),m(b,c))},d.onload=function(){ba.log("posted to Raygun"),o(),p(this)}),d.onerror=function(){ba.log("failed to post to Raygun"),p(this)},d?void d.send(c):void ba.log("CORS not supported")}var x,y,z,A,B,C,D,E,F,G=TraceKit,H=a.Raygun,I=!1,J=!1,K=!1,L=!1,M=!1,N=!1,O=!1,P=!1,Q=!0,R=!1,S={},T=[],U=[],V="https://api.raygun.io",W=null,X=null,Y="customData",Z=null,$=null,_=!0,aa={noConflict:function(){return a.Raygun=H,aa},constructNewRaygun:function(){var b=a.raygunFactory(a,a.jQuery);return a.raygunJsUrlFactory(a,b),b},init:function(d,e,f){if(x=d,G.remoteFetching=!1,f&&(S=f),b&&(F=b(document)),e&&(J=e.allowInsecureSubmissions||!1,K=e.ignoreAjaxAbort||!1,L=e.ignoreAjaxError||!1,O=e.disableAnonymousUserTracking||!1,P=e.disableErrorTracking||!1,Q=e.disablePulse===c||e.disablePulse,W=e.excludedHostnames||!1,X=e.excludedUserAgents||!1,$=e.pulseMaxVirtualPageDuration||null,_=e.pulseIgnoreUrlCasing||!1,e.apiUrl&&(V=e.apiUrl),"undefined"!=typeof e.wrapAsynchronousCallbacks&&(R=e.wrapAsynchronousCallbacks),e.debugMode&&(I=e.debugMode),e.ignore3rdPartyErrors&&(N=!0),e.apiEndpoint&&(V=e.apiEndpoint)),q(),aa.RealUserMonitoring!==c&&!Q){var g=function(){Z=new aa.RealUserMonitoring(x,V,w,y,z,W,X,I,$,_),Z.attach()};e&&"onLoad"===e.from?g():a.addEventListener?a.addEventListener("load",g):a.attachEvent("onload",g)}return o(),aa},withCustomData:function(a){return S=a,aa},withTags:function(a){return T=a,aa},attach:function(){return!f()||P?aa:(a.RaygunObject&&a[a.RaygunObject]&&a[a.RaygunObject].q&&(a.onerror=null),G.report.subscribe(t),R&&G.extendToAsynchronousCallbacks(),F&&F.ajaxError&&!L&&F.ajaxError(e),aa)},detach:function(){return G.report.unsubscribe(t),F&&F.unbind("ajaxError",e),aa},send:function(a,b,c){if(P)return ba.log("Error not sent due to disabled error tracking"),aa;try{t(G.computeStackTrace(a),{customData:"function"==typeof S?g(S(),b):g(S,b),tags:"function"==typeof T?h(T(),c):h(T,c)})}catch(d){if(a!==d)throw d}return aa},setUser:function(a,b,d,e,f,g){return y={Identifier:a},"boolean"==typeof b&&(y.IsAnonymous=b),d&&(y.Email=d),e&&(y.FullName=e),f&&(y.FirstName=f),g&&(y.UUID=g),Z!==c&&null!==Z&&Z.setUser(y),aa},resetAnonymousUser:function(){ba.clearCookie("raygun4js-userid")},setVersion:function(a){return z=a,aa},saveIfOffline:function(a){return"undefined"!=typeof a&&"boolean"==typeof a&&(M=a),aa},filterSensitiveData:function(a){return A=a,aa},setFilterScope:function(a){return"customData"!==a&&"all"!==a||(Y=a),aa},whitelistCrossOriginDomains:function(a){return U=a,aa},onBeforeSend:function(a){return B=a,aa},groupingKey:function(a){return C=a,aa},onBeforeXHR:function(a){return D=a,aa},onAfterSend:function(a){return E=a,aa},endSession:function(){aa.RealUserMonitoring!==c&&Z&&Z.endSession()},trackEvent:function(a,b){aa.RealUserMonitoring!==c&&Z&&"pageView"===a&&b.path&&Z.virtualPageLoaded(b.path)}},ba=aa._private=aa._private||{},ca=aa._seal=aa._seal||function(){delete aa._private,delete aa._seal,delete aa._unseal},da=aa._unseal=aa._unseal||function(){aa._private=ba,aa._seal=ca,aa._unseal=da};return ba.getUuid=function(){function a(a){var b=(Math.random().toString(16)+"000000000").substr(2,8);return a?"-"+b.substr(0,4)+"-"+b.substr(4,4):b}return a()+a(!0)+a(!0)+a()},ba.createCookie=function(a,b,c){var d;if(c){var e=new Date;e.setTime(e.getTime()+60*c*60*1e3),d="; expires="+e.toGMTString()}else d="";document.cookie=a+"="+b+d+"; path=/"},ba.readCookie=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},ba.clearCookie=function(a){ba.createCookie(a,"",-1)},ba.log=function(b,c){a.console&&a.console.log&&I&&(a.console.log(b),c&&a.console.log(c))},a.Raygun||(a.Raygun=aa),Date.prototype.toISOString||!function(){function a(a){var b=String(a);return 1===b.length&&(b="0"+b),b}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),aa};window.__instantiatedRaygun=raygunFactory(window,window.jQuery);var raygunRumFactory=function(a,b,c){c.RealUserMonitoring=function(b,c,d,e,f,g,h,i,j,k){function l(a){var b=encodeURIComponent(a).match(/%[89ABab]/g);return a.length+(b?b.length:0)}function m(a){var b=p(D.cookieName),c=null===b,d="string"==typeof exisitingCookie&&b.length>0&&b.indexOf("timestamp")===-1,e=null;if(!c&&!d){var f=new Date(o(b,"timestamp")),g=new Date(new Date-18e5);e=f<g}if(c||d||e)D.sessionId=B(32),n(D.cookieName,D.sessionId),a(!0);else{var h=p(D.cookieName),i=o(h,"id");"undefined"===i?(D.sessionId=B(32),n(D.cookieName,D.sessionId),a(!0)):(D.sessionId=i,a(!1))}}function n(a,b,c){var d,e;if(c){var f=new Date;f.setTime(f.getTime()+60*c*60*1e3),d="; expires="+f.toGMTString()}else d="";e=(new Date).toISOString(),document.cookie=a+"=id|"+b+"&timestamp|"+e+d+"; path=/"}function o(a,b){var c=a.split(/[|&]/);return"id"===b?c[1]:"timestamp"===b?c[3]:void 0}function p(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function q(){var a,b=p(D.cookieName);if(b){var c=new Date(o(b,"timestamp")),d=new Date(new Date-18e5);a=c<d}else a=!0;a&&(D.sessionId=B(32)),n(D.cookieName,D.sessionId),a&&D.pageLoaded(!0)}function r(a){return Math.min(a,3e5)}function s(a){for(var b in a)isNaN(a[b])&&"string"!=typeof a[b]&&(a[b]=0);return a}function t(b,c){var d;return d="object"==typeof a.performance&&"function"==typeof a.performance.now?a.performance.now():0,{t:"v",du:Math.min(D.maxVirtualPageDuration,d-(b||c)),o:Math.min(D.maxVirtualPageDuration,d-c)}}function u(a,b){var c={du:a.duration,t:"p"};return c.a=b+a.fetchStart,a.domainLookupStart&&a.domainLookupStart>0&&(c.b=b+a.domainLookupStart-c.a),a.domainLookupEnd&&a.domainLookupEnd>0&&(c.c=b+a.domainLookupEnd-c.a),a.connectStart&&a.connectStart>0&&(c.d=b+a.connectStart-c.a),a.connectEnd&&a.connectEnd>0&&(c.e=b+a.connectEnd-c.a),a.responseStart&&a.responseStart>0&&(c.f=b+a.responseStart-c.a),a.responseEnd&&a.responseEnd>0&&(c.g=b+a.responseEnd-c.a),a.domLoading&&a.domLoading>0&&(c.h=b+a.domLoading-c.a),a.domInteractive&&a.domInteractive>0&&(c.i=b+a.domInteractive-c.a),a.domContentLoadedEventEnd&&a.domContentLoadedEventEnd>0&&(c.j=b+a.domContentLoadedEventEnd-c.a),a.domComplete&&a.domComplete>0&&(c.k=r(b+a.domComplete-c.a)),a.loadEventStart&&a.loadEventStart>0&&(c.l=b+a.loadEventStart-c.a),a.loadEventEnd&&a.loadEventEnd>0&&(c.m=b+a.loadEventEnd-c.a),a.secureConnectionStart&&a.secureConnectionStart>0&&(c.n=b+(a.secureConnectionStart-a.connectStart)-c.a),c=s(c)}function v(a,b){var c={du:r(a.duration).toFixed(2),t:"xmlhttprequest"===a.initiatorType?"x":0===a.duration?"e":"c",a:(b+a.fetchStart).toFixed(2)};return a.domainLookupStart&&a.domainLookupStart>0&&(c.b=b+a.domainLookupStart-c.a),a.domainLookupEnd&&a.domainLookupEnd>0&&(c.c=b+a.domainLookupEnd-c.a),a.connectStart&&a.connectStart>0&&(c.d=b+a.connectStart-c.a),a.connectEnd&&a.connectEnd>0&&(c.e=b+a.connectEnd-c.a),a.responseStart&&a.responseStart>0&&(c.f=b+a.responseStart-c.a),a.responseEnd&&a.responseEnd>0&&(c.g=b+a.responseEnd-c.a),a.secureConnectionStart&&a.secureConnectionStart>0&&(c.n=b+(a.secureConnectionStart-a.connectStart)-c.a),c=s(c)}function w(){var b=a.location.pathname;return D.ignoreUrlCasing&&(b=b.toLowerCase()),{url:a.location.protocol+"//"+a.location.host+b,userAgent:navigator.userAgent,timing:u(a.performance.timing,0),size:0}}function x(b,c,d){return D.ignoreUrlCasing&&(b=b.toLowerCase()),{url:a.location.protocol+"//"+a.location.host+b,userAgent:navigator.userAgent,timing:t(c,d),size:0}}function y(b,c){var d=b.name.split("?")[0];return D.ignoreUrlCasing&&(d=d.toLowerCase()),{url:d,timing:v(b,c?0:a.performance.timing.navigationStart),size:b.decodedBodySize||0}}function z(b,c){if(void 0!==a.performance&&a.performance.getEntries)try{for(var d=a.performance.getEntries(),e=D.offset;e<d.length;e++){var f=d[e].name.split("?")[0];0!==f.indexOf(D.apiUrl)&&(f.indexOf("favicon.ico")>0||0!==f.indexOf("about:blank")&&("j"===f[0]&&1===f.indexOf("avascript:")||0!==f.indexOf("chrome-extension://")&&0!==f.indexOf("res://")&&0!==f.indexOf("file://")&&b.push(y(d[e],c))))}D.offset=d.length}catch(g){}}function A(b,c,d){if(void 0===a.performance||void 0===a.performance.timing||void 0===a.performance.timing.fetchStart||isNaN(a.performance.timing.fetchStart))return null;var e=[];if(c&&(d&&e.push(w()),z(e)),b){D.pendingVirtualPage&&(e.push(D.pendingVirtualPage),z(e,!0));var f=null==D.pendingVirtualPage;if(D.pendingVirtualPage=x(b,D.previousVirtualPageLoadTimestamp,D.initalStaticPageLoadTimestamp),!f&&e.length>0)return e}return e}function B(a){return Math.round(Math.pow(36,a+1)-Math.random()*Math.pow(36,a)).toString(36).slice(1)}function C(b,c){a.console&&a.console.log&&D.debugMode&&(a.console.log(b),c&&a.console.log(c))}var D=this,E={};this.cookieName="raygun4js-sid",this.apiKey=b,this.apiUrl=c,this.debugMode=i,this.excludedHostNames=g,this.excludedUserAgents=h,this.maxVirtualPageDuration=j||18e5,this.ignoreUrlCasing=k,this.makePostCorsRequest=function(b,c){if(D.excludedUserAgents instanceof Array)for(var e in D.excludedUserAgents)if(D.excludedUserAgents.hasOwnProperty(e)&&navigator.userAgent.match(D.excludedUserAgents[e]))return void(D.debugMode&&C("Raygun4JS: cancelling send as error originates from an excluded user agent"));if(D.excludedHostNames instanceof Array)for(var f in D.excludedHostNames)if(D.excludedHostNames.hasOwnProperty(f)&&a.location.hostname&&a.location.hostname.match(D.excludedHostNames[f]))return void C("Raygun4JS: cancelling send as error originates from an excluded hostname");d(b,c)},this.sessionId=null,this.virtualPage=null,this.user=e,this.version=f,this.heartBeatInterval=null,this.offset=0,this.attach=function(){m(function(a){D.pageLoaded(a)});var b=function(){this.updateCookieTimestamp()}.bind(E),c=function(){var a=[];if(z(a),D.pendingVirtualPage&&(a.push(D.pendingVirtualPage),z(a,!0)),a.length>0){var b={eventData:[{sessionId:D.sessionId,timestamp:(new Date).toISOString(),type:"web_request_timing",user:D.user,version:D.version||"Not supplied",device:navigator.userAgent,data:JSON.stringify(a)}]};D.makePostCorsRequest(D.apiUrl+"/events?apikey="+encodeURIComponent(D.apiKey),JSON.stringify(b))}},d=function(){"visible"===document.visibilityState&&this.updateCookieTimestamp()}.bind(E);a.addEventListener?(a.addEventListener("click",b),document.addEventListener("visibilitychange",d),a.addEventListener("beforeunload",c)):a.attachEvent&&document.attachEvent("onclick",b)},this.pageLoaded=function(b){if(b){var c={eventData:[{sessionId:D.sessionId,timestamp:(new Date).toISOString(),type:"session_start",user:D.user,version:D.version||"Not supplied",device:navigator.userAgent}]};D.makePostCorsRequest(D.apiUrl+"/events?apikey="+encodeURIComponent(D.apiKey),JSON.stringify(c))}D.sendPerformance(!0,!0),D.heartBeat(),"object"==typeof a.performance&&"function"==typeof a.performance.now?D.initalStaticPageLoadTimestamp=a.performance.now():D.initalStaticPageLoadTimestamp=0},this.setUser=function(a){D.user=a},this.endSession=function(){var a={eventData:[{sessionId:D.sessionId,timestamp:(new Date).toISOString(),type:"session_end"}]};D.makePostCorsRequest(D.apiUrl+"/events?apikey="+encodeURIComponent(D.apiKey),JSON.stringify(a))},this.heartBeat=function(){D.heartBeatInterval=setInterval(function(){var a,b=[];if(z(b,D.virtualPage),b.length>0){var c=JSON.stringify(b);l(c)<128e3&&(a={eventData:[{sessionId:D.sessionId,timestamp:(new Date).toISOString(),type:"web_request_timing",user:D.user,version:D.version||"Not supplied",device:navigator.userAgent,data:c}]})}void 0!==a&&D.makePostCorsRequest(D.apiUrl+"/events?apikey="+encodeURIComponent(D.apiKey),JSON.stringify(a))},3e4)},this.virtualPageLoaded=function(b){var c=null==this.virtualPage;"string"==typeof b&&(b.length>0&&"/"!==b[0]&&(b+="/"),this.virtualPage=b),c?this.sendPerformance(!0,!1):this.sendPerformance(!1,!1),"string"==typeof b&&("object"==typeof a.performance&&"function"==typeof a.performance.now?this.previousVirtualPageLoadTimestamp=a.performance.now():this.previousVirtualPageLoadTimestamp=0)},this.sendPerformance=function(a,b){var c=A(this.virtualPage,a,b);if(null!==c){var d={eventData:[{sessionId:D.sessionId,timestamp:(new Date).toISOString(),type:"web_request_timing",user:D.user,version:D.version||"Not supplied",device:navigator.userAgent,data:JSON.stringify(c)}]};D.makePostCorsRequest(D.apiUrl+"/events?apikey="+encodeURIComponent(D.apiKey),JSON.stringify(d))}},E.updateCookieTimestamp=q}};raygunRumFactory(window,window.jQuery,window.__instantiatedRaygun);var raygunJsUrlFactory=function(a,b){b._private.parseUrl=function(b,c){function d(a){return!isNaN(parseFloat(a))&&isFinite(a)}return function(b,c){var e=c||a.location.toString();if(!b)return e;b=b.toString(),"//"===e.substring(0,2)?e="http:"+e:1===e.split("://").length&&(e="http://"+e),c=e.split("/");var f={auth:""},g=c[2].split("@");1===g.length?g=g[0].split(":"):(f.auth=g[0],g=g[1].split(":")),f.protocol=c[0],f.hostname=g[0],f.port=g[1]||("https"===f.protocol.split(":")[0].toLowerCase()?"443":"80"),f.pathname=(c.length>3?"/":"")+c.slice(3,c.length).join("/").split("?")[0].split("#")[0];var h=f.pathname;"/"===h.charAt(h.length-1)&&(h=h.substring(0,h.length-1));var i=f.hostname,j=i.split("."),k=h.split("/");if("hostname"===b)return i;if("domain"===b)return/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(i)?i:j.slice(-2).join(".");if("sub"===b)return j.slice(0,j.length-2).join(".");if("port"===b)return f.port;if("protocol"===b)return f.protocol.split(":")[0];if("auth"===b)return f.auth;if("user"===b)return f.auth.split(":")[0];if("pass"===b)return f.auth.split(":")[1]||"";if("path"===b)return f.pathname;if("."===b.charAt(0)){if(b=b.substring(1),d(b))return b=parseInt(b,10),j[b<0?j.length+b:b-1]||""}else{if(d(b))return b=parseInt(b,10),k[b<0?k.length+b:b]||"";if("file"===b)return k.slice(-1)[0];if("filename"===b)return k.slice(-1)[0].split(".")[0];if("fileext"===b)return k.slice(-1)[0].split(".")[1]||"";if("?"===b.charAt(0)||"#"===b.charAt(0)){var l=e,m=null;if("?"===b.charAt(0)?l=(l.split("?")[1]||"").split("#")[0]:"#"===b.charAt(0)&&(l=l.split("#")[1]||""),!b.charAt(1))return l;b=b.substring(1),l=l.split("&");for(var n=0,o=l.length;n<o;n++)if(m=l[n].split("="),m[0]===b)return m[1]||"";return null}}return""}(b,c)}};raygunJsUrlFactory(window,window.__instantiatedRaygun),window.__instantiatedRaygun._seal(),function(a,b){if(a.RaygunObject&&a[a.RaygunObject]){var c,d,e,f,g,h,i=a[a.RaygunObject].o,j=!1,k=[],l=["function (b,c,d,f,g){","||(g=new Error(b)),a[e].q=a[e].q||[]"];c=a[a.RaygunObject].q;var m=b,n=["trackEvent","send"],o=function(b){i=a[a.RaygunObject].o;for(var c in i){var d=i[c];d&&(n.indexOf(d[0])===-1?p(d):b&&k.push(d))}},p=function(a){var b=a[0],c=a[1];if(b)switch(b){case"noConflict":h=c;break;case"apiKey":d=c,j=!0;break;case"options":e=c;break;case"attach":case"enableCrashReporting":f=c,j=!0;break;case"enablePulse":g=c,j=!0;break;case"detach":m.detach();break;case"getRaygunInstance":return m;case"setUser":m.setUser(c.identifier,c.isAnonymous,c.email,c.fullName,c.firstName,c.uuid);break;case"onBeforeSend":m.onBeforeSend(c);break;case"onBeforeXHR":m.onBeforeXHR(c);break;case"onAfterSend":m.onAfterSend(c);break;case"withCustomData":m.withCustomData(c);break;case"withTags":m.withTags(c);break;case"setVersion":m.setVersion(c);break;case"filterSensitiveData":m.filterSensitiveData(c);break;case"setFilterScope":m.setFilterScope(c);break;case"whitelistCrossOriginDomains":m.whitelistCrossOriginDomains(c);break;case"saveIfOffline":"boolean"==typeof c&&m.saveIfOffline(c);break;
case"groupingKey":m.groupingKey(c);break;case"send":var i,k,l;c.error?(i=c.error,c.tags&&(k=c.tags),c.customData&&(l=c.customData)):i=c,m.send(i,l,k);break;case"trackEvent":c.type&&c.path&&m.trackEvent(c.type,{path:c.path})}};o(!0);var q=function(){if(j||o(!1),h&&(m=b.noConflict()),d&&(e||(e={}),g&&(e.disablePulse=!1),e.from="onLoad",m.init(d,e,null)),f){m.attach(),c=a[a.RaygunObject].q;for(var i in c)m.send(c[i].e,{handler:"From Raygun4JS snippet global error handler"})}else if("function"==typeof a.onerror){var n=a.onerror.toString();n.indexOf(l[0])!==-1&&n.indexOf(l[1])!==-1&&(a.onerror=null)}for(var q in k)p(k[q]);k=[],a[a.RaygunObject]=function(){return p(arguments)},a[a.RaygunObject].q=c};"complete"===document.readyState?q():a.addEventListener?a.addEventListener("load",q):a.attachEvent("onload",q)}}(window,window.__instantiatedRaygun);try{delete window.__instantiatedRaygun}catch(e){window.__instantiatedRaygun=void 0}