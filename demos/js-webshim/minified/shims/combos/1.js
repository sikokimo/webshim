(function(e){var t=Function.prototype.call,n=Array.prototype,r=Object.prototype,i=n.slice,s,o;Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=i.call(arguments,1),r=function(){if(this instanceof r){var s=function(){};s.prototype=t.prototype;var o=new s,u=t.apply(o,n.concat(i.call(arguments)));return u!==null&&Object(u)===u?u:o}return t.apply(e,n.concat(i.call(arguments)))};return r}),o=t.bind(r.toString),s=t.bind(r.hasOwnProperty),Array.isArray||(Array.isArray=function(e){return o(e)=="[object Array]"}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t=b(this),n=arguments[1],r=0,i=t.length>>>0;if(o(e)!="[object Function]")throw new TypeError;while(r<i)r in t&&e.call(n,t[r],r,t),r++}),Array.prototype.map||(Array.prototype.map=function(e){var t=b(this),n=t.length>>>0,r=Array(n),i=arguments[1];if(o(e)!="[object Function]")throw new TypeError;for(var s=0;s<n;s++)s in t&&(r[s]=e.call(i,t[s],s,t));return r}),Array.prototype.filter||(Array.prototype.filter=function(e){var t=b(this),n=t.length>>>0,r=[],i=arguments[1];if(o(e)!="[object Function]")throw new TypeError;for(var s=0;s<n;s++)s in t&&e.call(i,t[s],s,t)&&r.push(t[s]);return r}),Array.prototype.every||(Array.prototype.every=function(e){var t=b(this),n=t.length>>>0,r=arguments[1];if(o(e)!="[object Function]")throw new TypeError;for(var i=0;i<n;i++)if(i in t&&!e.call(r,t[i],i,t))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e){var t=b(this),n=t.length>>>0,r=arguments[1];if(o(e)!="[object Function]")throw new TypeError;for(var i=0;i<n;i++)if(i in t&&e.call(r,t[i],i,t))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=b(this),n=t.length>>>0;if(o(e)!="[object Function]")throw new TypeError;if(!n&&arguments.length==1)throw new TypeError;var r=0,i;if(arguments.length>=2)i=arguments[1];else do{if(r in t){i=t[r++];break}if(++r>=n)throw new TypeError}while(!0);for(;r<n;r++)r in t&&(i=e.call(void 0,i,t[r],r,t));return i}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e){var t=b(this),n=t.length>>>0;if(o(e)!="[object Function]")throw new TypeError;if(!n&&arguments.length==1)throw new TypeError;var r,i=n-1;if(arguments.length>=2)r=arguments[1];else do{if(i in t){r=t[i--];break}if(--i<0)throw new TypeError}while(!0);do i in this&&(r=e.call(void 0,r,t[i],i,t));while(i--);return r}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=b(this),n=t.length>>>0;if(!n)return-1;var r=0;arguments.length>1&&(r=g(arguments[1])),r=r>=0?r:n-Math.abs(r);for(;r<n;r++)if(r in t&&t[r]===e)return r;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e){var t=b(this),n=t.length>>>0;if(!n)return-1;var r=n-1;arguments.length>1&&(r=g(arguments[1])),r=r>=0?r:n-Math.abs(r);for(;r>=0;r--)if(r in t&&e===t[r])return r;return-1});if([1,2].splice(0).length!=2){var u=Array.prototype.splice;Array.prototype.splice=function(e,t){return arguments.length?u.apply(this,[e===void 0?0:e,t===void 0?this.length-e:t].concat(i.call(arguments,2))):[]}}if(!Object.keys){var a=!0,f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=f.length;for(var c in{toString:null})a=!1;Object.keys=function w(e){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError("Object.keys called on a non-object");var w=[];for(var t in e)s(e,t)&&w.push(t);if(a)for(var n=0,r=l;n<r;n++){var i=f[n];s(e,i)&&w.push(i)}return w}}Date.prototype.toISOString||(Date.prototype.toISOString=function(){var t,n,r;if(!isFinite(this))throw new RangeError;t=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],n=t.length;while(n--)r=t[n],r<10&&(t[n]="0"+r);return t.slice(0,3).join("-")+"T"+t.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(t){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()});var h="	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";if(!String.prototype.trim||h.trim()){h="["+h+"]";var p=new RegExp("^"+h+h+"*"),d=new RegExp(h+h+"*$");String.prototype.trim=function(){return String(this).replace(p,"").replace(d,"")}}if("0".split(void 0,0).length){var v=String.prototype.split;String.prototype.split=function(e,t){return e===void 0&&t===0?[]:v.apply(this,arguments)}}if("".substr&&"0b".substr(-1)!=="b"){var m=String.prototype.substr;String.prototype.substr=function(e,t){return m.call(this,e<0?(e=this.length+e)<0?0:e:e,t)}}var g=function(e){return e=+e,e!==e?e=-1:e!==0&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},y="a"[0]!="a",b=function(e){if(e==null)throw new TypeError;return y&&typeof e=="string"&&e?e.split(""):Object(e)}})(),function(e,t){var n="defineProperty",r=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);r&&Object[n]&&Object.prototype.__defineGetter__&&function(){try{var e=document.createElement("foo");Object[n](e,"bar",{get:function(){return!0}}),r=!!e.bar}catch(t){r=!1}e=null}(),Modernizr.objectAccessor=!!(r||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__),Modernizr.advancedObjectProperties=r;if(!r||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var i=Function.prototype.call,s=Object.prototype,o=i.bind(s.hasOwnProperty);t.objectCreate=function(e,n,r,i){var s,o=function(){};return o.prototype=e,s=new o,!i&&!("__proto__"in s)&&!Modernizr.objectAccessor&&(s.__proto__=e),n&&t.defineProperties(s,n),r&&(s.options=jQuery.extend(!0,{},s.options||{},r),r=s.options),s._create&&jQuery.isFunction(s._create)&&s._create(r),s},t.defineProperties=function(e,n){for(var r in n)o(n,r)&&t.defineProperty(e,r,n[r]);return e};var u=["configurable","enumerable","writable"];t.defineProperty=function(e,t,n){return typeof n!="object"||n===null?e:o(n,"value")?(e[t]=n.value,e):(e.__defineGetter__&&(typeof n.get=="function"&&e.__defineGetter__(t,n.get),typeof n.set=="function"&&e.__defineSetter__(t,n.set)),e)},t.getPrototypeOf=function(e){return Object.getPrototypeOf&&Object.getPrototypeOf(e)||e.__proto__||e.constructor&&e.constructor.prototype},t.getOwnPropertyDescriptor=function(e,t){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var n;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return n=Object.getOwnPropertyDescriptor(e,t),n}catch(r){}n={configurable:!0,enumerable:!0,writable:!0,value:undefined};var i=e.__lookupGetter__&&e.__lookupGetter__(t),s=e.__lookupSetter__&&e.__lookupSetter__(t);if(!i&&!s){if(!o(e,t))return;return n.value=e[t],n}return delete n.writable,delete n.value,n.get=n.set=undefined,i&&(n.get=i),s&&(n.set=s),n}}}(jQuery,jQuery.webshims),jQuery.webshims.register("dom-extend",function(e,t,n,r,i){"use strict";var s=t.modules,o=/\s*,\s*/,u={},a={},f={},l={},c={},h=e.fn.val,p=function(t,n,r,i,s){return s?h.call(e(t)):h.call(e(t),r)};e.fn.val=function(t){var n=this[0];arguments.length&&t==null&&(t="");if(!arguments.length)return!n||n.nodeType!==1?h.call(this):e.prop(n,"value",t,"val",!0);if(e.isArray(t))return h.apply(this,arguments);var r=e.isFunction(t);return this.each(function(s){n=this;if(n.nodeType===1)if(r){var o=t.call(n,s,e.prop(n,"value",i,"val",!0));o==null&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})};var d="_webshimsLib"+Math.round(Math.random()*1e3),v=function(t,n,r){t=t.jquery?t[0]:t;if(!t)return r||{};var s=e.data(t,d);return r!==i&&(s||(s=e.data(t,d,{})),n&&(s[n]=r)),n?s&&s[n]:s};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){return this.map(function(){var e=v(this,"shadowData");return e&&e[t.prop]||this})}}),["removeAttr","prop","attr"].forEach(function(n){u[n]=e[n],e[n]=function(t,r,s,o,l){var h=o=="val",d=h?p:u[n];if(!t||!a[r]||t.nodeType!==1||!h&&o&&n=="attr"&&e.attrFn[r])return d(t,r,s,o,l);var v=(t.nodeName||"").toLowerCase(),m=f[v],g=n!="attr"||s!==!1&&s!==null?n:"removeAttr",y,b,w;m||(m=f["*"]),m&&(m=m[r]),m&&(y=m[g]);if(y){r=="value"&&(b=y.isVal,y.isVal=h);if(g==="removeAttr")return y.value.call(t);if(s===i)return y.get?y.get.call(t):y.value;y.set&&(n=="attr"&&s===!0&&(s=r),w=y.set.call(t,s)),r=="value"&&(y.isVal=b)}else w=d(t,r,s,o,l);if((s!==i||g==="removeAttr")&&c[v]&&c[v][r]){var E;g=="removeAttr"?E=!1:g=="prop"?E=!!s:E=!0,c[v][r].forEach(function(e){(!e.only||(e.only=n=="prop")||e.only=="attr"&&n!="prop")&&e.call(t,s,E,h?"val":g,n)})}return w},l[n]=function(r,s,o){f[r]||(f[r]={}),f[r][s]||(f[r][s]={});var a=f[r][s][n],l=function(e,t,r){return t&&t[e]?t[e]:r&&r[e]?r[e]:n=="prop"&&s=="value"?function(e){var t=this;return o.isVal?p(t,s,e,!1,arguments.length===0):u[n](t,s,e)}:n=="prop"&&e=="value"&&o.value.apply?function(e){var t=u[n](this,s);return t&&t.apply&&(t=t.apply(this,arguments)),t}:function(e){return u[n](this,s,e)}};f[r][s][n]=o,o.value===i&&(o.set||(o.set=o.writeable?l("set",o,a):t.cfg.useStrict&&s=="prop"?function(){throw s+" is readonly on "+r}:e.noop),o.get||(o.get=l("get",o,a))),["value","get","set"].forEach(function(e){o[e]&&(o["_sup"+e]=l(e,a))})}});var m=Modernizr.ES5,g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),n=Object.prototype.hasOwnProperty;return function(i,s,o){var u,a;if(m&&(u=r.createElement(i))&&(a=t.getPrototypeOf(u))&&e!==a&&(!u[s]||!n.call(u,s))){var f=u[s];o._supvalue=function(){return f&&f.apply?f.apply(this,arguments):f},a[s]=o.value}else o._supvalue=function(){var e=v(this,"propValue");return e&&e[s]&&e[s].apply?e[s].apply(this,arguments):e&&e[s]},y.extendValue(i,s,o.value);o.value._supvalue=o._supvalue}}(),y=function(){var n={};t.addReady(function(r,i){var s={},o=function(t){s[t]||(s[t]=e(r.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(s[t]=s[t].add(i)))};e.each(n,function(e,n){o(e);if(!n||!n.forEach){t.warn("Error: with "+e+"-property. methods: "+n);return}n.forEach(function(t){s[e].each(t)})}),s=null});var i,s=e([]),o=function(t,s){n[t]?n[t].push(s):n[t]=[s],e.isDOMReady&&(i||e(r.getElementsByTagName(t))).each(s)},u={};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(r.getElementsByTagName(t))),i||s},flushTmpCache:function(){i=null},content:function(t,n){o(t,function(){var t=e.attr(this,n);t!=null&&e.attr(this,n,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,n,r){o(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=r})})}}}(),b=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var r=n.attr("id");return r||(t++,r="ID-"+t,n.attr("id",r)),r}}(),extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,r){var i=(e._data(t,"events")||{})[n],s;i&&i.length>1&&(s=i.pop(),r||(r="bind"),r=="bind"&&i.delegateCount?i.splice(i.delegateCount,0,s):i.unshift(s)),t=null},addShadowDom:function(){var i,s,o,u={init:!1,runs:0,test:function(){var e=u.getHeight(),t=u.getWidth();e!=u.height||t!=u.width?(u.height=e,u.width=t,u.handler({type:"docresize"}),u.runs++,u.runs<9&&setTimeout(u.test,90)):u.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if(t.type=="resize"){var r=e(n).width(),i=e(n).width();if(i==s&&r==o)return;s=i,o=r,u.height=u.getHeight(),u.width=u.getWidth()}e.event.trigger("updateshadowdom")},t.type=="resize"?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=r.body,i=r.documentElement;u[t]=function(){return Math.max(n["scroll"+e],i["scroll"+e],n["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=u.getHeight(),this.width=u.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t=e.fn.animate,n;e.fn.animate=function(){return clearTimeout(n),n=setTimeout(function(){u.test()},99),t.apply(this,arguments)}}())}};return e.event.customEvent.updateshadowdom=!0,t.docObserve=function(){t.ready("DOM",function(){u.start()})},function(n,r,i){i=i||{},n.jquery&&(n=n[0]),r.jquery&&(r=r[0]);var s=e.data(n,d)||e.data(n,d,{}),o=e.data(r,d)||e.data(r,d,{}),u={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),u=e.data(i.shadowFocusElement,d)||e.data(i.shadowFocusElement,d,u)):i.shadowFocusElement=r,s.hasShadow=r,u.nativeElement=o.nativeElement=n,u.shadowData=o.shadowData=s.shadowData={nativeElement:n,shadowElement:r,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),i.data&&(u.shadowData.data=o.shadowData.data=s.shadowData.data=i.data),i=null,t.docObserve()}}(),propTypes:{standard:function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}}},"boolean":function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return e.attr.get.call(this)!=null}}},src:function(){var t=r.createElement("a");return t.style.display="none",function(n,r){b(n);if(n.prop)return;n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n=this.getAttribute(r),i;if(n==null)return"";t.setAttribute("href",n+"");if(!e.support.hrefNormalized){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(s){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}}}}(),enumarated:function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();if(!t||e.limitedTo.indexOf(t)==-1)t=e.defaultValue;return t}}}},reflectProperties:function(n,r){typeof r=="string"&&(r=r.split(o)),r.forEach(function(r){t.defineNodeNamesProperty(n,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(n,r,i){return a[r]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,r),["prop","attr","removeAttr"].forEach(function(s){var o=i[s];o&&(s==="prop"?o=e.extend({writeable:!0},o):o=e.extend({},o,{writeable:!0}),l[s](n,r,o),n!="*"&&t.cfg.extendNative&&s=="prop"&&o.value&&e.isFunction(o.value)&&g(n,r,o),i[s]=o)}),i.initAttr&&y.content(n,r),i},defineNodeNameProperties:function(e,n,r,i){var s;for(var o in n)!i&&n[o].initAttr&&y.createTmpCache(e),r&&(n[o][r]||(n[o][r]={},["value","set","get"].forEach(function(e){e in n[o]&&(n[o][r][e]=n[o][e],delete n[o][e])}))),n[o]=t.defineNodeNameProperty(e,o,n[o]);return i||y.flushTmpCache(),n},createElement:function(n,r,i){var s;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(n),r.before&&y.createElement(n,r.before),i&&(s=t.defineNodeNameProperties(n,i,!1,!0)),r.after&&y.createElement(n,r.after),y.flushTmpCache(),s},onNodeNamesPropertyModify:function(t,n,r,i){typeof t=="string"&&(t=t.split(o)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){c[e]||(c[e]={}),typeof n=="string"&&(n=n.split(o)),r.initAttr&&y.createTmpCache(e),n.forEach(function(t){c[e][t]||(c[e][t]=[],a[t]=!0),r.set&&(i&&(r.set.only=i),c[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,r,s){s||(s={}),e.isFunction(s)&&(s.set=s),t.defineNodeNamesProperty(n,r,{attr:{set:function(e){this.setAttribute(r,e),s.set&&s.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return e==null?i:r}},removeAttr:{value:function(){this.removeAttribute(r),s.set&&s.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:s.initAttr||!1})},contentAttr:function(e,t,n){if(!e.nodeName)return;var r;if(n===i)return r=e.attributes[t]||{},n=r.specified?r.value:null,n==null?i:n;typeof n=="boolean"?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n)},activeLang:function(){var n=[],r={},i,o,u=/:\/\/|^\.*\//,a=function(n,r,i){var s;return r&&i&&e.inArray(r,i.availabeLangs||[])!==-1?(n.loading=!0,s=i.langSrc,u.test(s)||(s=t.cfg.basePath+s),t.loader.loadScript(s+r+".js",function(){n.langObj[r]?(n.loading=!1,l(n,!0)):e(function(){n.langObj[r]&&l(n,!0),n.loading=!1})}),!0):!1},f=function(e){r[e]&&r[e].forEach(function(e){e.callback()})},l=function(e,t){if(e.activeLang!=i&&e.activeLang!==o){var n=s[e.module].options;e.langObj[i]||o&&e.langObj[o]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[o],i),f(e.module)):!t&&!a(e,i,n)&&!a(e,o,n)&&e.langObj[""]&&e.activeLang!==""&&(e.activeLang="",e.callback(e.langObj[""],i),f(e.module))}},c=function(t){return typeof t=="string"&&t!==i?(i=t,o=i.split("-")[0],i==o&&(o=!1),e.each(n,function(e,t){l(t)})):typeof t=="object"&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback()):(t.activeLang||(t.activeLang=""),n.push(t),l(t))),i};return c}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,r,i,s){typeof e=="string"&&(e=e.split(o));var u={};return e.forEach(function(e){u[e]=t[n](e,r,i,s)}),u}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!Modernizr.localstorage||"hidden"in t.createElement("a"))return;var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(i,s){e.each(n,function(t,n){var o=e(t,i).add(s.filter(t));for(var u=0,a=o.length;u<a;u++)r(o[u],n)});if(i===t){var o=t.getElementsByTagName("header")[0],u=t.getElementsByTagName("footer"),a=u.length;o&&!e(o).closest("section, article")[0]&&r(o,"banner");if(!a)return;var f=u[a-1];e(f).closest("section, article")[0]||r(f,"contentinfo")}})}(jQuery,document);