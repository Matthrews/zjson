(function(){var n=void 0,t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,r="object"==typeof exports&&exports&&!exports.nodeType&&exports&&"object"==typeof module&&module&&!module.nodeType&&module,u=t||e||Function("return this")(),o=u.fn,i="3.5.8",a=function(){function r(n){h(n)||sn("fun");var t=n.length-1;return function(){for(var e=Math.max(arguments.length-t,0),r=Array(e),u=-1;++u<e;)r[u]=arguments[t+u];var o=Array(t+1);for(u=0;u<t;u++)o[u]=arguments[u];switch(o[t]=r,o.length){case 0:return n.call(this);case 1:return n.call(this,o[0]);case 2:return n.call(this,o[0],o[1]);case 3:return n.call(this,o[0],o[1],o[2])}return n.apply(this,o)}}var c=r(function(n,t,e){return!!t&&(e=S(t).concat(e)).some(function(t){switch(t){case"str":return l(n);case"num":return s(n);case"bol":return p(n);case"fun":return h(n);case"nul":return v(n);case"udf":return g(n);case"err":return d(n);case"dat":return m(n);case"reg":return y(n);case"arr":return b(n);case"obj":return w(n);default:return typeof n===t}})}),f=r(function(n,t,e){return c.apply(void 0,[n,t].concat(e))&&n});function l(n){return"string"==typeof n}function s(n,t){var e="number"==typeof n;return t?e:e&&isFinite(n)}function p(n){return"boolean"==typeof n}function h(n){return"function"==typeof n}function v(n){return null===n}function g(t){return t===n}function d(n){return n instanceof Error}function m(n){return n instanceof Date}function y(n){return n instanceof RegExp}function b(n){return n instanceof Array}function w(n){return!!n&&"object"==typeof n&&-1==[t,e].indexOf(n)&&[b,h,d,m,y].every(function(t){return!t(n)})}function x(n,t){for(var e=[],r=0,u=-1;++u<n;)g(t)?e.push(r++):h(t)?e.push(t.length>0?t(u):t()):e.push(t);return e}function S(n){return b(n)?n:[n]}function E(n,t){for(var e=0;e<n.length;e++)if(w(t)){if(A(t).every(function(r){return n[e][r]===t[r]}))return e}else if(h(t)&&t(n[e]))return e;return n.indexOf(t)}function C(n,t,e){var r=[],u=[];return F(n,function(n){w(t)?A(t).every(function(e){return t[e]===n[e]})?r.push(n):u.push(n):h(t)&&(t(n)?r.push(n):u.push(n))}),e?r:u}function j(n,t){return E(n,t)>-1}function M(n,t){var e=[];return F(n,function(n){var r=c(n,"arr","obj")&&0===O(n);(n&&!r||!t&&0===n)&&e.push(n)}),e}function T(n,t){var e=[];return F(n,function(n){b(n)?e.push.apply(e,t?T(n,!0):n):e.push(n)}),e}function F(n,t){if(!n)return n;h(t)||sn("fun");var e=n.length;if(e&&e>=0&&e<Math.pow(2,53)-1)for(var r=0;r<e;r++)t(n[r],r);else{var u=A(n);for(r=-1;++r<u.length;)t(n[u[r]],u[r])}return n}function O(n){return w(n)?A(n).length:c(n,"str","arr","fun")||U(n,"length","num")?n.length:-1}var R=r(function(n,t,e){var r=n&&n.hasOwnProperty(t);return e.length?r&&c(n[t],e):r}),U=r(function(t,e,r){if(!t||!l(e))return n;var u=z(e),o=u.shift();return o?u.length?f(t[o],"object","fun")?U.apply(void 0,[t[o],u.join("/")].concat(r)):n:r.length?f.apply(void 0,[t[o]].concat(r)):t[o]:r.length?f.apply(void 0,[t].concat(r)):t});function z(n){return j(n,".")?M(n.split(".")):M(n.split("/"))}function A(n){return Object.keys(n)}var D=r(function(n,t,e){return $({},n,t,e)}),k=r(function(n,t,e){return $({},n,t,e,!0,!0)}),q=r(function(n,t,e,r){return $(n,t,e,r,!0)});function $(n,t,e,r,u,o){if(!w(t))return n;r=T(r);var i=w(e),a=A(t);function f(n,t,r){F(r,function(r){R(t,r)?n[r]=t[r]:i&&R(e,"default")&&(n[r]=e.default)})}if(c(e,"str","arr","obj")){var l=i?r:S(e).concat(r);o&&(l=a.filter(function(n){return!j(l,n)})),f(n,t,l)}else h(e)?I(t,function(t,r){var u=e(t,r);(u&&!o||!u&&o)&&(n[t]=r)}):u&&f(n,t,a);return n}function I(n,t){return h(t)||sn("fun"),F(n,function(n,e){t(e,n)})}function N(n,t,e){if(typeof n!=typeof t)return!1;if(b(n)&&b(t)){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(!N(n[r],t[r],e))return!1;return!0}if(w(n)&&w(t)){if(O(n)!==O(t))return!1;var u=A(n);if(e&&!N(u,A(t)))return!1;for(r=0;r<u.length;r++)if(!R(t,u[r])||!N(n[u[r]],t[u[r]],e))return!1;return!0}return n===t}function _(t,e,r){if(!s(t))return Math.random();var u,o;if(p(e)&&(r=e,e=n),s(e)&&t!==e){var i=t>e;return i&&(o=t,t=e,e=o),u=Math.random()*(e-t)+t,r?u:i?Math.ceil(u):Math.floor(u)}return u=Math.random()*t,r?u:Math.floor(u)}function P(n,t,e){return J(n,t,e,"interval")}function Z(n,t,e){return J(n,t,e,"timeout")}var X={},W={};function J(t,e,r,u){var o,i,a;"interval"===u?(o=X,i=setInterval,a=clearInterval):"timeout"===u&&(o=W,i=setTimeout,a=clearTimeout);var c=f(t,"str");function l(){return a(o[t])}if(c){if(g(e))return{id:o[t],stop:l,clear:l};if(j([null,!1],e))return l(),o[t]=null;h(e)&&(r=e,e=0)}if(s(t)&&h(e)&&(r=e,e=t,t=n),h(t)&&(r=t,e=0,t=n),h(r)&&s(e)&&e>=0){if(g(t))return i(r,e);if(c)return l(),o[t]=i(r,e)}}function L(n){return setTimeout(n)}function B(n){return K(n).getTime()}function H(n){var t=K(n);if(!t.getTime())return NaN;var e=V(t);return Date.UTC(e["y+"],e["M+"],e["d+"],e["h+"],e["m+"],e["s+"],e.S)}function Q(n,t){return G(n,t,!1)}function Y(n,t){return G(n,t,!0)}function K(n){return n instanceof Date?n:(n=String(n),new Date(n.match(/^[0-9]*$/)?+n:n))}function V(n,t){return t?{"y+":n.getUTCFullYear(),"M+":n.getUTCMonth()+1,"d+":n.getUTCDate(),"h+":n.getUTCHours(),"m+":n.getUTCMinutes(),"s+":n.getUTCSeconds(),S:n.getUTCMilliseconds(),"q+":Math.floor((n.getUTCMonth()+3)/3)}:{"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),S:n.getMilliseconds(),"q+":Math.floor((n.getMonth()+3)/3)}}function G(n,t,e){var r=K(t);if(!r.getTime())return"";var u=V(r,e);return I(u,function(t){if(new RegExp("("+t+")").test(n))if("y+"===t)n=n.replace(RegExp.$1,(u["y+"]+"").substr(4-RegExp.$1.length));else{var e=u[t],r=1===RegExp.$1.length?e:("00"+e).substr((e+"").length);n=n.replace(RegExp.$1,r)}}),n}function nn(n){return c(n,"arr","obj")?JSON.stringify(n,null,2):String(n)}var tn=["&","<",">"," ","'",'"'],en=["&amp;","&lt;","&gt;","&nbsp;","&#39;","&quot;"];function rn(n,t){for(var e,r="",u=0,o=-1;++o<n.length&&!(u>=t);)r+=e=n.substr(o,1),u+=cn(e,"dbChar")?2:1;return r+"..."}var un={cnChar:/[\u4e00-\u9fa5]/,dbChar:/[^x00-xff]/,email:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,mobPhone:/(\+?0?86\-?)?1[3456789]\d{9}/,telPhone:/((d{3,4})|d{3,4}-)?d{7,8}/,idCard:/(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)/,uuid:/[0-9a-zA-Z]{8}-([0-9a-zA-Z]{4}-){3}[0-9a-zA-Z]{12}/,base64Code:/([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?/,domain:/([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}/,port:/([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])/,ip:/((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)/,url_:/(\/([^?#]*))?(\?([^#]*))?(#(.*))?/};function on(t,e){if(t){if(g(e)&&(e=!0),j(["all","list"],t))return A(un);if(!R(un,t))return n;var r=un[t];return e?new RegExp("^("+r.source.replace(/^(\^|\$)$/gm,"")+")$"):r}}un.ipUrl=new RegExp("http(s)?://"+un.ip.source+"(:"+un.port.source+")?"+un.url_.source),un.domainUrl=new RegExp("http(s)?://"+un.domain.source+"(:"+un.port.source+")?"+un.url_.source),un.url=new RegExp("http(s)?://("+un.ip.source+"|"+un.domain.source+")(:"+un.port.source+")?"+un.url_.source);var an=r(function(n,t,e){return!(!n||!t)&&fn(n,[t].concat(e),!0)}),cn=r(function(n,t,e){return n&&t?fn(n,[t].concat(e),!1):null});function fn(n,t,e){var r=!0,u=!1,o=null;t.length&&c(t[t.length-1],"bol")&&(r=t.pop());for(var i=0;i<t.length;i++){var a=on(t[i],r);if(a&&(e?u=a.test(n):o=n.match(a),u||o))break}return e?u:o}function ln(t,e,r){h(t)||sn("fun");var u,o,i,a,c,l,s=0,p=!1,v=!1,d=!0;function m(e){var r=u,i=o;return u=o=n,s=e,a=t.apply(i,r)}function y(n){var t=n-l;return g(l)||t>=e||t<0||v&&n-s>=i}function b(){var n=Date.now();if(y(n))return x(n);var t=e-(n-l),r=v?Math.min(t,i-(n-s)):t;c=Z(r,b)}function x(t){return c=n,d&&u?m(t):(u=o=n,a)}function S(){var n=Date.now(),t=y(n);if(u=arguments,o=this,l=n,t){if(g(c))return s=l,c=Z(e,b),p?m(l):a;if(v)return c=Z(e,b),m(l)}return g(c)&&(c=Z(e,b)),a}return e=+e||0,f(r,"bol")?(p=!0,d=!1):w(r)&&(p=!!r.leading,(v="maxWait"in r)&&(i=Math.max(+r.maxWait||0,e)),R(r,"trailing")&&(d=!!r.trailing)),S.cancel=function(){g(c)||clearTimeout(c),s=0,u=l=o=c=n},S.flush=function(){return g(c)?a:x(Date.now())},S}function sn(n){switch(n){case"arg":throw new TypeError("Arguments type error!");case"obj":throw new TypeError("Expect an Object param!");case"fun":throw new TypeError("Expect a Function param!");case"reg":throw new TypeError("Expect a RegExp pattern!")}}function pn(){if(window.ActiveXObject){var n=new window.ActiveXObject("WScript.Shell");n&&n.SendKeys("{F11}")}}function hn(){return!!(document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)}var vn={},gn="fullscreenchange",dn=[gn,"webkit"+gn,"moz"+gn,"MS"+gn];function mn(n){if(h(n)){var t=Date.now();return vn[t]=n,F(dn,function(n){document.addEventListener(n,vn[t])}),{remove:function(){yn(t)}}}}function yn(n){F(dn,function(t){document.removeEventListener(t,vn[n])}),delete vn[n]}function bn(n){var t={value:n,val:function(){return t.value}};return F(A(wn),function(n){t[n]="match"===n?function(){Sn[n].call(arguments)}:r(function(e){return g(t.value)||(e=[t.value].concat(e)),bn(h(a[n])?a[n].apply(void 0,e):a[n])})}),t}function wn(n){return bn(n)}mn.removeAll=function(){I(vn,function(n){yn(n)})},wn.typeOf=c,wn.typeVal=f,wn.isStr=l,wn.isNum=s,wn.isBol=p,wn.isFun=h,wn.isNul=v,wn.isUdf=g,wn.isErr=d,wn.isDat=m,wn.isReg=y,wn.isArr=b,wn.isObj=w,wn.array=x,wn.range=function(t,e){var r=[];if(s(t)){function u(n){if(e>=0)for(var u=0;u<e;u++)r.push(n?u+t:u);else if(e<0)for(u=0;u>e;u--)r.push(n?u+t:u)}g(e)?(e=t,t=n,u(!1)):s(e)&&u(!0)}return r},wn.toArr=S,wn.indexOf=E,wn.find=function(t,e){var r=E(t,e);return r>-1?t[r]:n},wn.filter=function(n,t){return C(n,t,!0)},wn.reject=function(n,t){return C(n,t,!1)},wn.contains=j,wn.drop=M,wn.flatten=T,wn.pluck=function(n,t){var e=[];return f(t,"str")&&F(n,function(n){e.push(U(n,t))}),e},wn.uniq=function(t,e,r){g(r)&&(r=!0),p(e)&&(r=e,e=n),e=f(e,"str");for(var u=t.slice(),o=-1;++o<u.length-1;)for(var i=o+1;i<u.length;i++){var a;if(e){var c=U(u[o],e),l=U(u[i],e);a=r?N(c,l):c===l}else a=r?N(u[o],u[i]):u[o]===u[i];a&&u.splice(i--,1)}return u},wn.forEach=F,wn.each=F,wn.sortBy=function(n,t,e){return n.slice().sort(function(n,r){var u=U(n,t),o=U(r,t);return 0===u||u?0===o||o?u===o?0:u>o?e?-1:1:e?1:-1:e?-1:1:e?1:-1})},wn.len=O,wn.has=R,wn.get=U,wn.set=function(n,t,e){return function n(t,e,r,u){if(!e||!l(r))return t;var o=z(r),i=o.shift();return i?o.length?f(e[i],"object","fun")?n(t,e[i],o.join("/"),u):t:(e[i]=u,t):t}(n,n,t,e)},wn.keys=A,wn.pick=D,wn.omit=k,wn.extend=q,wn.forIn=I,wn.deepCopy=function n(t){var e;if(b(t)){e=[];for(var r=0;r<t.length;r++)e.push(n(t[r]))}else if(w(t))for(var u in e={},t)R(t,u)&&(e[u]=n(t[u]));else e=t;return e},wn.isEmpty=function(n){return 0===O(n)},wn.isDeepEqual=N,wn.random=_,wn.gid=function(n){g(n)&&(n=12);for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",e="",r=-1;++r<n;)e+=t[_(t.length)];return e},wn.gcolor=function(){return"#"+("00000"+(_(16777216)<<0).toString(16)).slice(-6)},wn.interval=P,wn.timeout=Z,wn.defer=L,wn.time=B,wn.timestamp=B,wn.asUtcTime=H,wn.asXyzTime=function(n,t){return H(n)-(+t?+t:0)},wn.fmtDate=Q,wn.fmtUtcDate=Y,wn.fmtXyzDate=function(n,t,e){var r=K(t);if(!r.getTime())return"";var u=r.getUTCMilliseconds();return Q(n,B(Y("yyyy/MM/dd hh:mm:ss",t))+u+(+e?+e:0))},wn.match=function(t,e,r){w(e)||sn("obj"),g(r)&&(r=!0);var u="__@fnMatch__";R(e,t)?u=t:R(e,"default")&&(u="default");var o=e[u];if("@next"===o)for(var i=A(e),a=i.indexOf(u)-1;++a<i.length;)if("@next"!==e[i[a]]){o=e[i[a]];break}return r&&h(o)?O(o)?o(t):o():"@next"===o?n:o},wn.pretty=nn,wn.escape=function(n){return F(tn,function(t,e){n=n.replace(new RegExp(t,"g"),en[e])}),n},wn.unescape=function(n){return F(en,function(t,e){n=n.replace(new RegExp(t,"g"),tn[e])}),n},wn.capitalize=function(n){return f(n,"str")?n[0].toUpperCase()+n.substr(1):n},wn.fmtCurrency=function(n,t){g(t)&&(t=2);var e,r,u,o,i=String(n.toFixed(t)).split("."),a=i[0],c=i.length>1?i[1]:"";for(r=Math.floor(a.length/3),e=a.substr(0,u=a.length%3),o=0;o<r;o++)e+=0!==o||e?","+a.substr(u,3):a.substr(u,3),u+=3;return c?e+"."+c:e},wn.maskString=function(n,t,e,r){var u=String(n);s(t)?(r=e,e=t,t="*"):l(t)||(t="*");var o=u.substr(e,r).replace(/[^\u4e00-\u9fa5]/gm,t).replace(/[\u4e00-\u9fa5]/gm,t+t);return u.substr(0,e)+o+(g(r)?"":u.substr(e+r))},wn.cutString=rn,wn.parseQueryStr=function(n){if(!j(n,"?"))return{};var t=n.substring(n.lastIndexOf("?")+1);if(""===t)return{};for(var e=t.split("&"),r={},u=-1;++u<e.length;){var o=e[u].split("="),i=decodeURIComponent;r[i(o[0])]=i(o[1]||"")}return r},wn.stringifyQueryStr=function(n){if(!c(n,"obj","arr"))return"";var t=[];return I(n=JSON.parse(JSON.stringify(n)),function(n,e){var r=encodeURIComponent;t.push(r(n)+"="+r(e))}),"?"+t.join("&")},wn.setPattern=function(n,t){n&&l(n)?y(t)?un[n]=t:sn("reg"):w(n)&&I(n,function(n,t){y(t)?un[n]=t:sn("reg")})},wn.getPattern=on,wn.testPattern=an,wn.matchPattern=cn,wn.rest=r,wn.throttle=function(n,t,e){var r=!0,u=!0;return h(n)||sn("fun"),w(e)&&(r=R(e,"leading")?!!e.leading:r,u=R(e,"trailing")?!!e.trailing:u),ln(n,t,{leading:r,maxWait:t,trailing:u})},wn.debounce=ln;var xn=Array.prototype,Sn=String.prototype;return F(["pop","push","concat","join","reverse","shift","slice","split","sort","substr","substring","splice","splice","unshift","every","some","map","reduce","trim","toLowerCase","toUpperCase","replace","search"],function(n){wn[n]=r(function(t){var e,r=t.shift();if(b(r)&&R(xn,n)&&(e=xn),l(r)&&R(Sn,n)&&(e=Sn),e)return e[n].apply(r,t);sn("arg")})}),wn.print=function(n){console.log(nn(n))},wn.log=function(n,t,e){var r;function u(n){return!R(n,"isFmt","bol")||n.isFmt}function o(n){return U(n,"title","str")||"funclib("+i+")"}f(t,"str")?p(e)?(r=e,e={}):r=u(e):p(t)?(r=t,t=o(e)):w(t)?(r=u(e=t),t=o(e)):(r=!0,t="funclib("+i+")"),n=nn(n);var a=!R(e,"isShowTime")||e.isShowTime?"["+Q("hh:mm:ss",new Date)+"] ":"",c=(a+(t=t.replace(/\n/gm,""))+"[] ").length;r||(t="( "+t+" )"),t=a+t;var l=U(e,"/width");(!l||l<30||l>100)&&(l=66),c>l?t=rn(t,l-3):r&&(t=x((l-c)/2," ").join("")+t);var s=!R(e,"isSplit","bol")||e.isSplit;if(r){for(var h="",v="",g=0;g<l;g++)h+="-",v+="=";d=v+"\n"+t+"\n"+h+"\n"+n+"\n"+v,console.log(s?"\n"+d+"\n":d)}else{var d=t+":\n"+n;console.log(s?"\n"+d+"\n":d)}},wn.fullScreen=function(n,t){if("string"==typeof n&&(n=document.querySelector(n)),n&&n.tagName){var e=n.requestFullScreen||n.webkitRequestFullScreen||n.mozRequestFullScreen||n.msRequestFullScreen;if(e?e.call(n):pn(),h(t))var r=P(100,function(){hn()&&(clearInterval(r),L(t))})}},wn.exitFullScreen=function(n){var t=document.cancelFullScreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.exitFullScreen;if(t?t.call(document):pn(),h(n))var e=P(100,function(){hn()||(clearInterval(e),L(n))})},wn.isFullScreen=hn,wn.fullScreenChange=mn,wn.copyText=function(n){g(n)&&(n="");var t=document.createElement("textarea");t.style.position="fixed",t.style.left="200%",document.body.appendChild(t),t.value=n,t.select(),document.execCommand("Copy"),document.body.removeChild(t)},wn.chain=bn,wn.noConflict=function(){return u.fn===this&&(u.fn=o),this},wn.version=i,wn}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(u.fn=a,define(function(){return a})):r?((r.exports=a).fn=a,r.fn=a):u.fn=a}).call(this);