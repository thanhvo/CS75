//tealium universal tag - utag.loader ut4.0.201712121549, Copyright 2017 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_dominos_main=(\/\/tags\.tiqcdn\.com\/utag\/dominos\/[^\S;]*)")){if(RegExp.$1.indexOf("/prod/")===-1){var s=RegExp.$1;while(s.indexOf("%")!=-1){s=decodeURIComponent(s);}s=s.replace(/\.\./g,"");ul(s);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/dominos/main/prod/';}}})();}catch(e){};try{window.utag_cfg_ovrd={noview:true};}catch(e){};if(!utag_condload){try{dpz&&dpz.utag&&typeof dpz.utag.remoteUtagReady==="function"&&dpz.utag.remoteUtagReady().resolve();typeof window.remoteUtagReady==="function"&&window.remoteUtagReady();}catch(e){}};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"dominos.main",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],db_log:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],lq:[],bq:{},bk:{},rf:0,ri:0,rp:0,rq:[],ready_q:[],sendq:{"pending":0},run_ready_q:function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};}},lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d,g){utag.DB('WQ:'+utag.loader.wq.length);try{if(utag.udoname&&utag.udoname.indexOf(".")<0){utag.ut.merge(utag.data,window[utag.udoname],0);}
if(utag.cfg.load_rules_at_wait){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};d=0;g=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load==4){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.load>0){g.push(b);d++;}else{this.f[b.id]=1;}}
for(a=0;a<g.length;a++){utag.loader.AS(g[a]);}
if(d==0){utag.loader.END();}},AS:function(a,b,c,d){utag.send[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'ut'+'ag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+(a.v?utag.cfg.template+a.v:utag.cfg.v);utag.rpt['l_'+a.id]=a.src;b=document;this.f[a.id]=0;if(a.load==2){utag.DB("Attach sync: "+a.src);a.uid=a.id;b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')
if(typeof a.cb!='undefined')a.cb();}else if(a.load==1||a.load==3){if(b.createElement){c='utag_dominos.main_'+a.id;if(!b.getElementById(c)){d={src:a.src,id:c,uid:a.id,loc:a.loc}
if(a.load==3){d.type="iframe"};if(typeof a.cb!='undefined')d.cb=a.cb;utag.ut.loader(d);}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},OU:function(a,b,c,d,f){try{if(typeof utag.data['cp.OPTOUTMULTI']!='undefined'){c=utag.loader.cfg;a=utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');for(d=0;d<a.length;d++){b=a[d].split(':');if(b[1]*1!==0){if(b[0].indexOf('c')==0){for(f in utag.loader.GV(c)){if(c[f].tcat==b[0].substring(1))c[f].load=0}}else if(b[0]*1==0){utag.cfg.nocookie=true}else{for(f in utag.loader.GV(c)){if(c[f].tid==b[0])c[f].load=0}}}}}}catch(e){utag.DB(e)}},RDdom:function(o){var d=document||{},l=location||{};o["dom.referrer"]=d.referrer;o["dom.title"]=""+d.title;o["dom.domain"]=""+l.hostname;o["dom.query_string"]=(""+l.search).substring(1);o["dom.hash"]=(""+l.hash).substring(1);o["dom.url"]=""+d.URL;o["dom.pathname"]=""+l.pathname;o["dom.viewport_height"]=window.innerHeight||(d.documentElement?d.documentElement.clientHeight:960);o["dom.viewport_width"]=window.innerWidth||(d.documentElement?d.documentElement.clientWidth:960);},RDcp:function(o,b,c,d){b=utag.loader.RC();for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
},RDqp:function(o,a,b,c){a=location.search+(location.hash+'').replace("#","&");if(utag.cfg.lowerqp){a=a.toLowerCase()};if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");if(c.length>1){o["qp."+c[0]]=utag.ut.decode(c[1])}}}},RDmeta:function(o,a,b,h){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){try{h=a[b].name||a[b].getAttribute("property")||"";}catch(e){h="";utag.DB(e)};if(utag.cfg.lowermeta){h=h.toLowerCase()};if(h!=""){o["meta."+h]=a[b].content}}},RDva:function(o){var readAttr=function(o,l){var a="",b;a=localStorage.getItem(l);if(!a||a=="{}")return;b=utag.ut.flatten({va:JSON.parse(a)});utag.ut.merge(o,b,1);}
try{readAttr(o,"tealium_va");readAttr(o,"tealium_va_"+o["ut.account"]+"_"+o["ut.profile"]);}catch(e){utag.DB(e)}},RDut:function(o,a){var t={};var d=new Date();var m=(utag.ut.typeOf(d.toISOString)=="function");o["ut.domain"]=utag.cfg.domain;o["ut.version"]=utag.cfg.v;t["tealium_event"]=o["ut.event"]=a||"view";t["tealium_visitor_id"]=o["ut.visitor_id"]=o["cp.utag_main_v_id"];t["tealium_session_id"]=o["ut.session_id"]=o["cp.utag_main_ses_id"];try{t["tealium_datasource"]=utag.cfg.datasource;t["tealium_account"]=o["ut.account"]=utag.cfg.utid.split("/")[0];t["tealium_profile"]=o["ut.profile"]=utag.cfg.utid.split("/")[1];t["tealium_environment"]=o["ut.env"]=utag.cfg.path.split("/")[6];}catch(e){utag.DB(e)}
t["tealium_random"]=Math.random().toFixed(16).substring(2);t["tealium_library_name"]="ut"+"ag.js";t["tealium_library_version"]=(utag.cfg.template+"0").substring(2);t["tealium_timestamp_epoch"]=Math.floor(d.getTime()/1000);t["tealium_timestamp_utc"]=(m?d.toISOString():"");d.setHours(d.getHours()-(d.getTimezoneOffset()/60));t["tealium_timestamp_local"]=(m?d.toISOString().replace("Z",""):"");utag.ut.merge(o,t,0);},RDses:function(o,a,c){a=(new Date()).getTime();c=(a+parseInt(utag.cfg.session_timeout))+"";if(!o["cp.utag_main_ses_id"]){o["cp.utag_main_ses_id"]=a+"";o["cp.utag_main__ss"]="1";o["cp.utag_main__sn"]=(1+parseInt(o["cp.utag_main__sn"]||0))+"";}else{o["cp.utag_main__ss"]="0";}
o["cp.utag_main__pn"]=o["cp.utag_main__pn"]||"1";o["cp.utag_main__st"]=c;utag.loader.SC("utag_main",{"_sn":(o["cp.utag_main__sn"]||1),"_ss":o["cp.utag_main__ss"],"_st":c,"ses_id":(o["cp.utag_main_ses_id"]||a)+";exp-session","_pn":o["cp.utag_main__pn"]+";exp-session"});},RDpv:function(o){if(typeof utag.pagevars=="function"){utag.DB("Read page variables");utag.pagevars(o);}},RD:function(o,a){utag.DB("utag.loader.RD");utag.DB(o);utag.loader.RDcp(o);if(!utag.loader.rd_flag){utag.loader.rd_flag=1;o["cp.utag_main_v_id"]=o["cp.utag_main_v_id"]||utag.ut.vi((new Date()).getTime());o["cp.utag_main__pn"]=(1+parseInt(o["cp.utag_main__pn"]||0))+"";utag.loader.SC("utag_main",{"v_id":o["cp.utag_main_v_id"]});utag.loader.RDses(o);}
if(a&&!utag.cfg.noview)utag.loader.RDses(o);utag.loader.RDqp(o);utag.loader.RDmeta(o);utag.loader.RDdom(o);utag.loader.RDut(o,a||"view");utag.loader.RDpv(o);utag.loader.RDva(o);},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv,r,s,t){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];r=/^(.*?)=(.*)$/;s=/^(.*);exp-(.*)$/;t=(new Date()).getTime();for(c=0;c<b.length;c++){if(b[c].match(r)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"){if(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0){e=cv.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){utag.DB(er)};}
o[ck]={};for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);if(k>t)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);j[f]=(k<t)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";var date=new Date();var exp=new Date();exp.setTime(date.getTime()+(365*24*60*60*1000));x=exp.toGMTString();if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=date.getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push((g+":").replace(/[\,\$\;\?]/g,"")+encodeURIComponent(d[g]))}
if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){if(!utag.loader.cfg){return}
if(this.ol==0){if(utag.loader.cfg[a].block&&utag.loader.cfg[a].cbf){this.f[a]=1;delete utag.loader.bq[a];}
for(b in utag.loader.GV(utag.loader.bq)){if(utag.loader.cfg[a].load==4&&utag.loader.cfg[a].wait==0){utag.loader.bk[a]=1;utag.DB("blocked: "+a);}
utag.DB("blocking: "+b);return;}
utag.loader.INIT();return;}
utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){this.f[a]=1;if(utag.cfg.noview!=true){if(utag.loader.cfg[a].send){utag.DB("SENDING: "+a);try{if(utag.loader.sendq.pending>0&&utag.loader.sendq[a]){utag.DB("utag.loader.LOAD:sendq: "+a);while(d=utag.loader.sendq[a].shift()){utag.DB(d);utag.sender[a].send(d.event,utag.handler.C(d.data));utag.loader.sendq.pending--;}}else{utag.sender[a].send('view',utag.handler.C(utag.data));}
utag.rpt['s_'+a]=0;}catch(e){utag.DB(e);utag.rpt['s_'+a]=1;}}}
if(utag.loader.rf==0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0||this.f[b]==2)return}
utag.loader.END();}},EV:function(a,b,c,d){if(b=="ready"){if(!utag.data){try{utag.cl={'_all_':1};utag.loader.initdata();utag.loader.RD(utag.data);}catch(e){utag.DB(e)};}
if((document.attachEvent||utag.cfg.dom_complete)?document.readyState==="complete":document.readyState!=="loading")setTimeout(c,1);else{utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}},END:function(b,c,d,e,v,w){if(this.ended){return};this.ended=1;utag.DB("loader.END");b=utag.data;if(utag.handler.base&&utag.handler.base!='*'){e=utag.handler.base.split(",");for(d=0;d<e.length;d++){if(typeof b[e[d]]!="undefined")utag.handler.df[e[d]]=b[e[d]]}}else if(utag.handler.base=='*'){utag.ut.merge(utag.handler.df,b,1);}
utag.rpt['r_0']="t";for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}
utag.rpt.ts['s']=new Date();v=utag.cfg.path;w=v.indexOf(".tiqcdn.");if(w>0&&b["cp.utag_main__ss"]==1&&!utag.cfg.no_session_count)utag.ut.loader({src:v.substring(0,v.indexOf("/ut"+"ag/")+6)+"tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");utag.handler.INIT();}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){var t;if(utag.ut.typeOf(a)=="object"){t=utag.handler.C(a)}else{t=a}
utag.db_log.push(t);try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]))}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')))}},view:function(a,c,d){return this.track({event:'view',data:a,cfg:{cb:c,uids:d}})},link:function(a,c,d){return this.track({event:'link',data:a,cfg:{cb:c,uids:d}})},track:function(a,b,c,d){if(typeof a=="string")a={event:a,data:b,cfg:{cb:c}};for(d in utag.loader.GV(utag.o)){try{utag.o[d].handler.trigger(a.event||"view",a.data||a,a.cfg)}catch(e){utag.DB(e)};}
if(a.cfg&&a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};return true},handler:{base:"",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){utag.DB('utag.handler.INIT');if(utag.initcatch){utag.initcatch=0;return}
this.iflag=1;a=utag.loader.q.length;if(a>0){utag.DB("Loader queue");for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b,c.c)}}
},test:function(){return 1},LR:function(b){utag.DB("Load Rules");for(var d in utag.loader.GV(utag.cond)){utag.cond[d]=false;}
utag.DB(b);utag.loader.loadrules(b);utag.DB(utag.cond);utag.loader.initcfg();utag.loader.OU();for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}},RE:function(a,b,c,d,e,f,g){if(c!="alr"&&!this.cfg_extend){return 0;}
utag.DB("RE: "+c);if(c=="alr")utag.DB("All Tags EXTENSIONS");utag.DB(b);if(typeof this.extend!="undefined"){g=0;for(d=0;d<this.extend.length;d++){try{e=0;if(typeof this.cfg_extend!="undefined"){f=this.cfg_extend[d];if(typeof f.count=="undefined")f.count=0;if(f[a]==0||(f.once==1&&f.count>0)||f[c]==0){e=1}else{if(f[c]==1){g=1};f.count++}}
if(e!=1){this.extend[d](a,b);utag.rpt['ex_'+d]=0}}catch(er){utag.DB(er);utag.rpt['ex_'+d]=1;utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});}}
utag.DB(b);return g;}},trigger:function(a,b,c,d,e,f){utag.DB('trigger:'+a+(c&&c.uids?":"+c.uids.join(","):""));b=b||{};utag.DB(b);if(!this.iflag){utag.DB("trigger:called before tags loaded");for(d in utag.loader.f){if(!(utag.loader.f[d]===1))utag.DB('Tag '+d+' did not LOAD')}
utag.loader.q.push({a:a,b:utag.handler.C(b),c:c});return;}
utag.ut.merge(b,this.df,0);utag.loader.RD(b,a);utag.cfg.noview=false;function sendTag(a,b,d){try{if(typeof utag.sender[d]!="undefined"){utag.DB("SENDING: "+d);utag.sender[d].send(a,utag.handler.C(b));utag.rpt['s_'+d]=0;}else if(utag.loader.cfg[d].load!=2){utag.loader.sendq[d]=utag.loader.sendq[d]||[];utag.loader.sendq[d].push({"event":a,"data":utag.handler.C(b)});utag.loader.sendq.pending++;utag.loader.AS({id:d,load:1});}}catch(e){utag.DB(e)}}
if(c&&c.uids){this.RE(a,b,"alr");for(f=0;f<c.uids.length;f++){d=c.uids[f];sendTag(a,b,d);}}else if(utag.cfg.load_rules_ajax){this.RE(a,b,"blr");this.LR(b);this.RE(a,b,"alr");for(f=0;f<utag.loader.cfgsort.length;f++){d=utag.loader.cfgsort[f];if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){sendTag(a,b,d);}}}else{this.RE(a,b,"alr");for(d in utag.loader.GV(utag.sender)){sendTag(a,b,d);}}
this.RE(a,b,"end");},C:function(a,b,c){b={};for(c in utag.loader.GV(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}},ut:{pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a},vi:function(t,a,b){if(!utag.v_id){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;}
return utag.v_id},hasOwn:function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a)},isEmptyObject:function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false}
return true},isEmpty:function(o){var t=utag.ut.typeOf(o);if(t=="number"){return isNaN(o)}else if(t=="boolean"){return false}else if(t=="string"){return o.length===0}else return utag.ut.isEmptyObject(o)},typeOf:function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();},flatten:function(o){var a={};function r(c,p){if(Object(c)!==c||c instanceof Array){a[p]=c;}else{if(utag.ut.isEmptyObject(c)){}else{for(var d in c){r(c[d],p?p+"."+d:d);}}}}
r(o,"");return a;},merge:function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d]}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined")a[d]=b[d]}}},decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=unescape(a)};return b},encode:function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=escape(a)};return b},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}},loader:function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}
o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}
if(o.id){b.id=o.id};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l])}
b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}
if(typeof o.error=="function"){utag.loader.EV(b,"error",o.error);}
if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}}};utag.o['dominos.main']=utag;utag.cfg={template:"ut4.44.",load_rules_ajax:true,load_rules_at_wait:false,lowerqp:false,noconsole:false,session_timeout:1800000,readywait:0,noload:0,domain:utag.loader.lh(),datasource:"##UTDATASOURCE##".replace("##"+"UTDATASOURCE##",""),path:"//tags.tiqcdn.com/utag/dominos/main/prod/",utid:"dominos/main/201712121549"};utag.cfg.v=utag.cfg.template+"201712121549";try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g,null,[153]);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={11:0,12:0,14:0,15:0,16:0,18:0,24:0,2:0,3:0,46:0,49:0,4:0,50:0,7:0,8:0};utag.pagevars=function(ud){ud=ud||utag.data;try{ud['js_page.google_remarketing_only']=google_remarketing_only}catch(e){utag.DB(e)};};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(_pd,_pc){var d=_pd||utag.data;var c=_pc||utag.cond;for(var l in utag.loader.GV(c)){switch(l){case'11':try{c[11]|=(d['market_language_code'].toString().toLowerCase()=='en'.toLowerCase()&&d['dom.url'].toString().toLowerCase().indexOf('espanol'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'12':try{c[12]|=(d['market_language_code'].toString().toLowerCase()=='es'.toLowerCase())||(d['dom.url'].toString().indexOf('espanol')>-1)}catch(e){utag.DB(e)};break;case'14':try{c[14]|=(d['new_loyalty_enrollment'].toString().toLowerCase()=='true'.toLowerCase())}catch(e){utag.DB(e)};break;case'15':try{c[15]|=(d['send_loyalty_enrollment_pixel'].toString().toLowerCase()=='true'.toLowerCase())}catch(e){utag.DB(e)};break;case'16':try{c[16]|=(d['dom.url'].toString().toLowerCase().indexOf('/customer/reset-password/'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'18':try{c[18]|=(d['dom.url'].toString().toLowerCase().indexOf('confirmation.jsp'.toLowerCase())>-1&&d['coupon_codes'].toString().toLowerCase().indexOf('FPMCB'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('confirmation.jsp'.toLowerCase())>-1&&d['coupon_codes'].toString().toLowerCase().indexOf('FP50MCB'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'2':try{c[2]|=(d['dom.url'].toString().toLowerCase().indexOf('confirmation.jsp'.toLowerCase())>-1&&typeof d['con_refresh']!='undefined'&&d['con_refresh'].toString().toLowerCase()=='false'.toLowerCase())}catch(e){utag.DB(e)};break;case'24':try{c[24]|=(d['dom.url'].toString().toLowerCase().indexOf('payment.jsp'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'3':try{c[3]|=(d['dom.hash'].toString().indexOf('locations/search')>-1&&d['dom.hash'].toString().toLowerCase().indexOf('type'.toLowerCase())<0)}catch(e){utag.DB(e)};break;case'4':try{c[4]|=(d['event_name'].toString().toLowerCase().indexOf('Phone Number'.toLowerCase())>-1&&d['event_action'].toString().toLowerCase().indexOf('click'.toLowerCase())>-1&&d['event_category'].toString().toLowerCase().indexOf('text'.toLowerCase())>-1)||(d['event_name'].toString().toLowerCase().indexOf('Tel�fono'.toLowerCase())>-1&&d['event_action'].toString().toLowerCase().indexOf('click'.toLowerCase())>-1&&d['event_category'].toString().toLowerCase().indexOf('text'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'46':try{c[46]|=(d['dom.url'].toString().toLowerCase().indexOf('confirmation.jsp'.toLowerCase())>-1&&typeof d['con_refresh']!='undefined'&&d['con_refresh'].toString().toLowerCase()=='false'.toLowerCase())||(typeof d['page_name']!='undefined'&&d['page_name'].toString().toLowerCase().indexOf('Home Page'.toLowerCase())>-1&&d['page_name'].toString().toLowerCase().indexOf('Profiled'.toLowerCase())<0)||(typeof d['page_name']!='undefined'&&d['page_name'].toString().toLowerCase()=='Checkout Review Order'.toLowerCase())||(typeof d['page_name']!='undefined'&&d['page_name'].toString().toLowerCase()=='Location Search'.toLowerCase())}catch(e){utag.DB(e)};break;case'49':try{c[49]|=(d['page_name'].toString().toLowerCase()=='Checkout Review Order'.toLowerCase())}catch(e){utag.DB(e)};break;case'50':try{c[50]|=(!/Checkout Review Order$/i.test(d['page_name'])&&d['page_name'].toString().toLowerCase()!='Checkout Confirmation'.toLowerCase())}catch(e){utag.DB(e)};break;case'7':try{c[7]|=(d['group']=='Home Page'&&d['user_logged_in']=='anonymous'&&/^\/[a-z][a-z]\/(index\.jsp)*$/.test(d['dom.pathname']))}catch(e){utag.DB(e)};break;case'8':try{c[8]|=(d['dom.hash'].toString().toLowerCase().indexOf('GroupOrdering'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;}}};utag.pre=function(){utag.loader.initdata();utag.pagevars();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b,c,d){b._ccity='';b._ccountry='';b._ccurrency=(typeof b['currency']!='undefined')?b['currency']:'';b._ccustid='';b._corder=(typeof b['order_id']!='undefined')?b['order_id']:'';b._cpromo='';b._cship='';b._cstate='';b._cstore=(typeof b['store_id']!='undefined')?b['store_id']:'web';b._csubtotal=(typeof b['order_subtotal']!='undefined')?b['order_subtotal']:'';b._ctax=(typeof b['order_tax']!='undefined')?b['order_tax']:'';b._ctotal=(typeof b['order_grand_total']!='undefined')?b['order_grand_total']:'';b._ctype='';b._czip='';b._cprod=(typeof b['product_id']!='undefined'&&b['product_id'].length>0)?b['product_id']:[];b._cprodname=(typeof b['product_name']!='undefined'&&b['product_name'].length>0)?b['product_name']:[];b._cbrand=[];b._ccat=[];b._ccat2=[];b._cquan=(typeof b['product_quantity']!='undefined'&&b['product_quantity'].length>0)?b['product_quantity']:[];b._cprice=(typeof b['product_price']!='undefined'&&b['product_price'].length>0)?b['product_price']:[];b._csku=(typeof b['product_sku']!='undefined'&&b['product_sku'].length>0)?b['product_sku']:[];b._cpdisc=[];for(c=0;c<b._cprice.length;c++){try{b._cprice[c]=(parseFloat(b._cprice[c])/parseInt(b._cquan[c])).toFixed(2)}catch(e){}}
if(b._cprod.length==0){b._cprod=b._csku.slice()};if(b._cprodname.length==0){b._cprodname=b._csku.slice()};function tf(a){if(a==''||isNaN(parseFloat(a))){return a}else{return(parseFloat(a)).toFixed(2)}};b._ctotal=tf(b._ctotal);b._csubtotal=tf(b._csubtotal);b._ctax=tf(b._ctax);b._cship=tf(b._cship);for(c=0;c<b._cprice.length;c++){b._cprice[c]=tf(b._cprice[c])};for(c=0;c<b._cpdisc.length;c++){b._cpdisc[c]=tf(b._cpdisc[c])};},function(a,b){try{if(1){b['currency']='USD'}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['tealium_page_event']=a}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['tealium_page_event'].toString().toLowerCase().indexOf('view'.toLowerCase())>-1){b['event_action']='';b['event_category']='';b['event_label']='';b['event_name']=''}}catch(e){utag.DB(e)}},function(a,b){if(utag_data.return_user!=undefined){utag_data.return_user=utag_data.return_user.toString();}},function(a,b,c,d,e,f,g){d=b['store_id'];if(typeof d=='undefined')return;c=[{'1027':'TRUE'},{'3313':'TRUE'},{'3325':'TRUE'},{'3328':'TRUE'},{'3329':'TRUE'},{'3333':'TRUE'},{'3334':'TRUE'},{'3336':'TRUE'},{'3337':'TRUE'},{'3339':'TRUE'},{'3340':'TRUE'},{'3347':'TRUE'},{'3348':'TRUE'},{'3366':'TRUE'},{'3448':'TRUE'},{'3486':'TRUE'},{'3511':'TRUE'},{'3517':'TRUE'},{'3521':'TRUE'},{'3522':'TRUE'},{'3523':'TRUE'},{'3528':'TRUE'},{'3531':'TRUE'},{'3534':'TRUE'},{'3535':'TRUE'},{'3536':'TRUE'},{'3537':'TRUE'},{'3545':'TRUE'},{'3554':'TRUE'},{'3597':'TRUE'},{'3612':'TRUE'},{'3630':'TRUE'},{'3643':'TRUE'},{'3644':'TRUE'},{'3646':'TRUE'},{'3647':'TRUE'},{'3649':'TRUE'},{'3650':'TRUE'},{'3651':'TRUE'},{'3653':'TRUE'},{'3654':'TRUE'},{'3655':'TRUE'},{'3657':'TRUE'},{'3659':'TRUE'},{'3660':'TRUE'},{'3662':'TRUE'},{'3667':'TRUE'},{'3668':'TRUE'},{'3669':'TRUE'},{'3677':'TRUE'},{'3678':'TRUE'},{'3679':'TRUE'},{'3691':'TRUE'},{'4910':'TRUE'},{'9164':'TRUE'},{'9930':'TRUE'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['kount_stores']=c[e][f];m=true};};if(m)break};if(!m)b['kount_stores']='FALSE';},function(a,b){try{if(1){try{b['randomnum']=Math.round(Math.random()*100000000);}catch(e){}}}catch(e){utag.DB(e)}}];utag.handler.cfg_extend=[{"alr":1,"bwq":0,"id":"2","blr":0,"end":0},{"alr":1,"bwq":0,"id":"31","blr":0,"end":0},{"alr":1,"bwq":0,"id":"37","blr":0,"end":0},{"alr":1,"bwq":0,"id":"38","blr":0,"end":0},{"alr":1,"bwq":0,"id":"61","blr":0,"end":0},{"alr":1,"bwq":0,"id":"62","blr":0,"end":0},{"alr":1,"bwq":0,"id":"78","blr":0,"end":0}];utag.loader.initcfg=function(){utag.loader.cfg={"121":{load:utag.cond[16],send:1,v:201710241359,wait:1,tid:19063},"3":{load:utag.cond[2],send:1,v:201511021507,wait:1,tid:25012},"104":{load:(utag.cond[14]&&utag.cond[15]),send:1,v:201511021507,wait:1,tid:25012},"165":{load:utag.cond[2],send:1,v:201604051314,wait:1,tid:25012},"8":{load:(utag.cond[2]&&utag.cond[11]),send:1,v:201511021507,wait:1,tid:7117},"19":{load:(utag.cond[4]&&utag.cond[11]),send:1,v:201511021507,wait:1,tid:7117},"37":{load:(utag.cond[2]&&utag.cond[12]),send:1,v:201511021507,wait:1,tid:7117},"39":{load:(utag.cond[4]&&utag.cond[12]),send:1,v:201511021507,wait:1,tid:7117},"79":{load:utag.cond[2],send:1,v:201511021507,wait:1,tid:7117},"110":{load:(utag.cond[2]&&utag.cond[11]),send:1,v:201511021507,wait:1,tid:7117},"86":{load:(utag.cond[8]&&utag.cond[4]),send:1,v:201511021507,wait:1,tid:7117},"73":{load:utag.cond[16],send:1,v:201706061658,wait:1,tid:7115},"49":{load:(utag.cond[2]&&utag.cond[11]),send:1,v:201710161330,wait:1,tid:4001},"50":{load:(utag.cond[2]&&utag.cond[12]),send:1,v:201710161330,wait:1,tid:4001},"100":{load:utag.cond[7],send:1,v:201710161330,wait:1,tid:4001},"101":{load:utag.cond[2],send:1,v:201710161330,wait:1,tid:4001},"53":{load:utag.cond[2],send:1,v:201704241313,wait:1,tid:20078},"99":{load:utag.cond[2],send:1,v:201511021507,wait:1,tid:2045},"125":{load:utag.cond[14],send:1,v:201511021507,wait:1,tid:20078},"126":{load:utag.cond[14],send:1,v:201511021507,wait:1,tid:7117},"130":{load:utag.cond[2],send:1,v:201511021507,wait:1,tid:7117},"131":{load:utag.cond[2],send:1,v:201511021507,wait:1,tid:7117},"132":{load:(utag.cond[4]&&utag.cond[11]),send:1,v:201511021507,wait:1,tid:7117},"133":{load:(utag.cond[4]&&utag.cond[11]),send:1,v:201511021507,wait:1,tid:7117},"120":{load:(utag.cond[2]&&utag.cond[11]),send:1,v:201511021507,wait:1,tid:25016},"150":{load:utag.cond[18],send:1,v:201511021507,wait:1,tid:20011},"158":{load:utag.cond[2],send:1,v:201603071441,wait:1,tid:7117},"159":{load:utag.cond[14],send:1,v:201603071441,wait:1,tid:7117},"160":{load:(utag.cond[4]&&utag.cond[11]),send:1,v:201605091345,wait:1,tid:7117},"167":{load:utag.cond[2],send:1,v:201710161330,wait:1,tid:6026},"169":{load:utag.cond[2],send:1,v:201608291355,wait:1,tid:20011},"173":{load:utag.cond[2],send:1,v:201608111401,wait:1,tid:1167},"174":{load:utag.cond[24],send:1,v:201705151258,wait:1,tid:20011},"197":{load:utag.cond[2],send:1,v:201710261437,wait:1,tid:4001},"200":{load:utag.cond[3],send:1,v:201704241319,wait:1,tid:4001},"202":{load:utag.cond[46],send:1,v:201705151258,wait:1,tid:16044},"206":{load:utag.cond[16],send:1,v:201707191310,wait:1,tid:3117},"213":{load:utag.cond[7],send:1,v:201709071522,wait:1,tid:20070},"214":{load:utag.cond[2],send:1,v:201709071522,wait:1,tid:20070},"221":{load:utag.cond[2],send:1,v:201712121549,wait:1,tid:20067},"222":{load:utag.cond[49],send:1,v:201712121549,wait:1,tid:20067},"223":{load:utag.cond[50],send:1,v:201712121549,wait:1,tid:20067}};utag.loader.cfgsort=["121","3","104","165","8","19","37","39","79","110","86","73","49","50","100","101","53","99","125","126","130","131","132","133","120","150","158","159","160","167","169","173","174","197","200","202","206","213","214","221","222","223"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(utag._i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[utag._i]=utag_cfg_ovrd[utag._i]};utag.loader.PINIT=function(a,b,c){utag.DB("Pre-INIT");if(utag.cfg.noload){return;}
try{this.GET();if(utag.handler.RE('view',utag.data,"blr")){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};a=this.cfg;c=0;for(b in this.GV(a)){if(a[b].block==1||(a[b].load>0&&(typeof a[b].src!='undefined'&&a[b].src!=''))){a[b].block=1;c=1;this.bq[b]=1;}}
if(c==1){for(b in this.GV(a)){if(a[b].block){a[b].id=b;if(a[b].load==4)a[b].load=1;a[b].cb=function(){var d=this.uid;utag.loader.cfg[d].cbf=1;utag.loader.LOAD(d)};this.AS(a[b]);}}}
if(c==0)this.INIT();};utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr");utag.rpt.ts['i']=new Date();d=this.cfgsort;for(a=0;a<d.length;a++){e=d[a];b=this.cfg[e];b.id=e;if(b.block!=1){if(utag.loader.bk[b.id]||((utag.cfg.readywait||utag.cfg.noview)&&b.load==4)){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.wait==1&&utag.loader.rf==0){utag.DB('utag.loader.INIT: waiting '+b.id);this.wq.push(b)
this.f[b.id]=2;}else if(b.load>0){utag.DB('utag.loader.INIT: loading '+b.id);this.lq.push(b);this.AS(b);}}}
if(this.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.DB('READY:utag.loader.wq');utag.loader.rf=1;utag.loader.WQ();}});else if(this.lq.length>0)utag.loader.rf=1;else if(this.lq.length==0)utag.loader.END();return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{try{if(1){utag.ebx=function(p){function NB(a,i){var n="";if(a.length==0){return[document.body,"document.body"]}else if(a.length==1){n="document.body.childNodes["+a[0]+"]"}else{n="document.body.childNodes["+a[0]+"]";for(i=1;i<a.length;i++){n=n+".childNodes["+a[i]+"]"}}return[eval(n),n]}p=p.replace("/html/body/","").split("/");var d="",a=[],e="",n=0,c=0,x=0;for(x=0;x<p.length;x++){if(p[x].indexOf("[")>0){e=p[x].match(/[a-z]+/)[0];n=p[x].match(/[0-9]+/)[0]-1}else{e=p[x]}c=0;d=NB(a)[0].childNodes;for(i=0;i<d.length;i++){if(d[i].localName==e&&n>0){if(c==n){a.push(i);break}c++}else if(d[i].localName==e){a.push(i);break}}n=0}return NB(a)};var d,n;try{n=document.createElement('div');n.innerHTML='   <div id="ttdUniversalPixelTag8c900a32f5b64367bdcb03659c9958d3" style="display:none">    </div>';d=utag.ebx('Body');d=d[0];d.appendChild(n);}catch(e){};}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){utag.ebx=function(p){function NB(a,i){var n="";if(a.length==0){return[document.body,"document.body"]}else if(a.length==1){n="document.body.childNodes["+a[0]+"]"}else{n="document.body.childNodes["+a[0]+"]";for(i=1;i<a.length;i++){n=n+".childNodes["+a[i]+"]"}}return[eval(n),n]}p=p.replace("/html/body/","").split("/");var d="",a=[],e="",n=0,c=0,x=0;for(x=0;x<p.length;x++){if(p[x].indexOf("[")>0){e=p[x].match(/[a-z]+/)[0];n=p[x].match(/[0-9]+/)[0]-1}else{e=p[x]}c=0;d=NB(a)[0].childNodes;for(i=0;i<d.length;i++){if(d[i].localName==e&&n>0){if(c==n){a.push(i);break}c++}else if(d[i].localName==e){a.push(i);break}}n=0}return NB(a)};var d,n;try{n=document.createElement('div');n.innerHTML='   <div id="ttdUniversalPixelTagf63c102660fa4148832b02a8aa9e144f" style="display:none">    </div>';d=utag.ebx('Body');d=d[0];d.appendChild(n);}catch(e){};}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};}})
if(utag.cfg.readywait||utag.cfg.waittimer){utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.cfg.readywait=1;utag.DB('READY:utag.cfg.readywait');setTimeout(function(){utag.loader.PINIT()},utag.cfg.waittimer||1);}})}else{utag.loader.PINIT()}}