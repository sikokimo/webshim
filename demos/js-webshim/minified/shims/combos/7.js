jQuery.webshims.register("form-native-extend",function(e,t,n,r,i,s){"use strict";var o=n.Modernizr,u=o.inputtypes;if(!o.formvalidation||t.bugs.bustedValidity)return;var a=t.inputTypes,f={};t.addInputType=function(e,t){a[e]=t},t.addValidityRule=function(e,t){f[e]=t},t.addValidityRule("typeMismatch",function(e,t,n,r){if(t==="")return!1;var i=r.typeMismatch;return"type"in n||(n.type=(e[0].getAttribute("type")||"").toLowerCase()),a[n.type]&&a[n.type].mismatch&&(i=a[n.type].mismatch(t,e)),i});var l=s.overrideMessages,c=!u.number||!u.time||!u.range||l,h=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],p=l?["value","checked"]:["value"],d=[],v=function(t,n){if(!t)return;var i=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();if(!l&&!a[i])return;l&&!n&&i=="radio"&&t.name?e(r.getElementsByName(t.name)).each(function(){e.prop(this,"validity")}):e.prop(t,"validity")},m={};["input","textarea","select"].forEach(function(n){var r=t.defineNodeNameProperty(n,"setCustomValidity",{prop:{value:function(i){i+="";var s=n=="input"?e(this).getNativeElement()[0]:this;r.prop._supvalue.call(s,i),t.bugs.validationMessage&&t.data(s,"customvalidationMessage",i),c&&(t.data(s,"hasCustomError",!!i),v(s))}}});m[n]=r.prop._supvalue});if(c||l)p.push("min"),p.push("max"),p.push("step"),d.push("input");l&&(p.push("required"),p.push("pattern"),d.push("select"),d.push("textarea"));if(c){var g;d.forEach(function(n){var r=t.defineNodeNameProperty(n,"validity",{prop:{get:function(){if(g)return;var i=n=="input"?e(this).getNativeElement()[0]:this,s=r.prop._supget.call(i);if(!s)return s;var o={};h.forEach(function(e){o[e]=s[e]});if(!e.prop(i,"willValidate"))return o;g=!0;var u=e(i),c={type:(i.getAttribute&&i.getAttribute("type")||"").toLowerCase(),nodeName:(i.nodeName||"").toLowerCase()},p=u.val(),d=!!t.data(i,"hasCustomError"),v;g=!1,o.customError=d;if(o.valid&&o.customError)o.valid=!1;else if(!o.valid){var y=!0;e.each(o,function(e,t){if(t)return y=!1,!1}),y&&(o.valid=!0)}return e.each(f,function(e,r){o[e]=r(u,p,c,o),o[e]&&(o.valid||!v)&&(l||a[c.type]&&a[c.type].mismatch)&&(m[n].call(i,t.createValidationMessage(i,e)),o.valid=!1,v=!0)}),o.valid?(m[n].call(i,""),t.data(i,"hasCustomError",!1)):l&&!v&&!d&&e.each(o,function(e,r){if(e!=="valid"&&r)return m[n].call(i,t.createValidationMessage(i,e)),!1}),o},writeable:!1}})}),p.forEach(function(e){t.onNodeNamesPropertyModify(d,e,function(e){v(this)})});if(r.addEventListener){var y,b=function(t){if(!("form"in t.target))return;var n=t.target.form;clearTimeout(y),v(t.target),n&&l&&e("input",n).each(function(){this.type=="password"&&v(this)})};r.addEventListener("change",b,!0),l&&(r.addEventListener("blur",b,!0),r.addEventListener("keydown",function(e){if(e.keyCode!=13)return;b(e)},!0)),r.addEventListener("input",function(e){clearTimeout(y),y=setTimeout(function(){v(e.target)},290)},!0)}var w=d.join(",");t.addReady(function(t,n){e(w,t).add(n.filter(w)).each(function(){e.prop(this,"validity")})}),l&&t.ready("DOM form-message",function(){t.activeLang({register:"form-core",callback:function(){e("input, select, textarea").getNativeElement().each(function(){if(t.data(this,"hasCustomError"))return;var n=this,r=e.prop(n,"validity")||{valid:!0},i;if(r.valid)return;i=(n.nodeName||"").toLowerCase(),e.each(r,function(e,r){if(e!=="valid"&&r)return m[i].call(n,t.createValidationMessage(n,e)),!1})})}})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,n=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[n]?n:e.type}}})}),jQuery.webshims.register("form-number-date-api",function(e,t,n,r,i){"use strict";t.getStep||(t.getStep=function(t,n){var r=e.attr(t,"step");return r==="any"?r:(n=n||l(t),!u[n]||!u[n].step?r:(r=y.number.asNumber(r),(!isNaN(r)&&r>0?r:u[n].step)*u[n].stepScaleFactor))}),t.addMinMaxNumberToCache||(t.addMinMaxNumberToCache=function(e,t,n){e+"AsNumber"in n||(n[e+"AsNumber"]=u[n.type].asNumber(t.attr(e)),isNaN(n[e+"AsNumber"])&&e+"Default"in u[n.type]&&(n[e+"AsNumber"]=u[n.type][e+"Default"]))});var s=parseInt("NaN",10),o=r,u=t.inputTypes,a=function(e){return typeof e=="number"||e&&e==e*1},f=function(t){return e('<input type="'+t+'" />').prop("type")===t},l=function(e){return(e.getAttribute("type")||"").toLowerCase()},c=function(e){return a(e)||e&&e=="0"+e*1},h=t.addMinMaxNumberToCache,p=function(e,t){e=""+e,t-=e.length;for(var n=0;n<t;n++)e="0"+e;return e},d=1e-7,v=t.bugs.bustedValidity;t.addValidityRule("stepMismatch",function(e,n,r,i){if(n==="")return!1;"type"in r||(r.type=l(e[0]));if(r.type=="date")return!1;var s=(i||{}).stepMismatch,o;if(u[r.type]&&u[r.type].step){"step"in r||(r.step=t.getStep(e[0],r.type));if(r.step=="any")return!1;"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h("min",e,r),o=r.minAsNumber,isNaN(o)&&(o=u[r.type].stepBase||0),s=Math.abs((r.valueAsNumber-o)%r.step),s=!(s<=d||Math.abs(s-r.step)<=d)}return s}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(e,n){t.addValidityRule(e.name,function(t,n,r,i){var s=(i||{})[e.name]||!1;if(n==="")return s;"type"in r||(r.type=l(t[0]));if(u[r.type]&&u[r.type].asNumber){"valueAsNumber"in r||(r.valueAsNumber=u[r.type].asNumber(n));if(isNaN(r.valueAsNumber))return!1;h(e.attr,t,r);if(isNaN(r[e.attr+"AsNumber"]))return s;s=r[e.attr+"AsNumber"]*e.factor<r.valueAsNumber*e.factor-d}return s})}),t.reflectProperties(["input"],["max","min","step"]);var m=t.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var t=this,n=l(t),r=u[n]&&u[n].asNumber?u[n].asNumber(e.prop(t,"value")):m.prop._supget&&m.prop._supget.apply(t,arguments);return r==null&&(r=s),r},set:function(n){var r=this,i=l(r);if(u[i]&&u[i].numberToString){if(isNaN(n)){e.prop(r,"value","");return}var s=u[i].numberToString(n);s!==!1?e.prop(r,"value",s):t.warn("INVALID_STATE_ERR: DOM Exception 11")}else m.prop._supset&&m.prop._supset.apply(r,arguments)}}}),g=t.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var t=this,n=l(t);return u[n]&&u[n].asDate&&!u[n].noAsDate?u[n].asDate(e.prop(t,"value")):g.prop._supget&&g.prop._supget.call(t)||null},set:function(n){var r=this,i=l(r);if(!(u[i]&&u[i].dateToString&&!u[i].noAsDate))return g.prop._supset&&g.prop._supset.apply(r,arguments)||null;if(n===null)return e.prop(r,"value",""),"";var s=u[i].dateToString(n);if(s!==!1)return e.prop(r,"value",s),s;t.warn("INVALID_STATE_ERR: DOM Exception 11")}}}),y={number:{mismatch:function(e){return!a(e)},step:1,stepScaleFactor:1,asNumber:function(e){return a(e)?e*1:s},numberToString:function(e){return a(e)?e:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(t){if(!t||!t.split||!/\d$/.test(t))return!0;var n=t.split(/\u002D/);if(n.length!==3)return!0;var r=!1;e.each(n,function(e,t){if(!c(t))return r=!0,!1});if(r)return r;if(n[0].length!==4||n[1].length!=2||n[1]>12||n[2].length!=2||n[2]>33)r=!0;return t!==this.dateToString(this.asDate(t,!0))},step:1,stepScaleFactor:864e5,asDate:function(e,t){return!t&&this.mismatch(e)?null:new Date(this.asNumber(e,!0))},asNumber:function(e,t){var n=s;if(t||!this.mismatch(e))e=e.split(/\u002D/),n=Date.UTC(e[0],e[1]-1,e[2]);return n},numberToString:function(e){return a(e)?this.dateToString(new Date(e*1)):!1},dateToString:function(e){return e&&e.getFullYear?e.getUTCFullYear()+"-"+p(e.getUTCMonth()+1,2)+"-"+p(e.getUTCDate(),2):!1}},time:{mismatch:function(t,n){if(!t||!t.split||!/\d$/.test(t))return!0;t=t.split(/\u003A/);if(t.length<2||t.length>3)return!0;var r=!1,i;return t[2]&&(t[2]=t[2].split(/\u002E/),i=parseInt(t[2][1],10),t[2]=t[2][0]),e.each(t,function(e,t){if(!c(t)||t.length!==2)return r=!0,!1}),r?!0:t[0]>23||t[0]<0||t[1]>59||t[1]<0?!0:t[2]&&(t[2]>59||t[2]<0)?!0:i&&isNaN(i)?!0:(i&&(i<100?i*=100:i<10&&(i*=10)),n===!0?[t,i]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(e){return e=new Date(this.asNumber(e)),isNaN(e)?null:e},asNumber:function(e){var t=s;return e=this.mismatch(e,!0),e!==!0&&(t=Date.UTC("1970",0,1,e[0][0],e[0][1],e[0][2]||0),e[1]&&(t+=e[1])),t},dateToString:function(e){if(e&&e.getUTCHours){var t=p(e.getUTCHours(),2)+":"+p(e.getUTCMinutes(),2),n=e.getSeconds();return n!="0"&&(t+=":"+p(n,2)),n=e.getUTCMilliseconds(),n!="0"&&(t+="."+p(n,3)),t}return!1}}};if(v||!f("range")||!f("time"))y.range=e.extend({},y.number,y.range),y.time=e.extend({},y.date,y.time);(v||!f("number"))&&t.addInputType("number",y.number),(v||!f("range"))&&t.addInputType("range",y.range),(v||!f("date"))&&t.addInputType("date",y.date),(v||!f("time"))&&t.addInputType("time",y.time)}),jQuery.webshims.register("form-number-date-ui",function(e,t,n,r,i,s){"use strict";var o=t.triggerInlineForm,u=Modernizr.inputtypes,a=function(){var e={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},t=Modernizr.prefixed&&Modernizr.prefixed("boxSizing"),n=function(n){var r="width";return t&&(r=e[n.css(t)]||r),{w:n[r](),add:r=="width"}};return function(e,r){var i=n(e);if(!i.w)return;var s={mL:parseInt(r.css("marginLeft"),10)||0,w:r.outerWidth()};i.mR=parseInt(e.css("marginRight"),10)||0,i.mR&&e.css("marginRight",0),s.mL<=s.w*-1?(r.css("marginRight",Math.floor(Math.abs(s.w+s.mL-.1)+i.mR)),e.css("paddingRight",(parseInt(e.css("paddingRight"),10)||0)+Math.abs(s.mL)),i.add&&e.css("width",Math.floor(i.w+s.mL-(t?.1:.6)))):(r.css("marginRight",i.mR),e.css("width",Math.floor(i.w-s.mL-s.w-(t?.2:.6))))}}(),f={},l=0,c=e([]),h,p=function(n,r){e("input",n).add(r.filter("input")).each(function(){var n=e.prop(this,"type");p[n]&&!t.data(this,"shadowData")&&p[n](e(this))})},d=function(t,n){if(!s.lazyDate){t.datepicker("setDate",n);return}var r=e.data(t[0],"setDateLazyTimer");r&&clearTimeout(r),e.data(t[0],"setDateLazyTimer",setTimeout(function(){t.datepicker("setDate",n),e.removeData(t[0],"setDateLazyTimer"),t=null},0))},v={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};s.copyAttrs||(s.copyAttrs={}),t.extendUNDEFProp(s.copyAttrs,v);var m=function(e){return s.calculateWidth?{css:{marginRight:e.css("marginRight"),marginLeft:e.css("marginLeft")},outerWidth:e.outerWidth()}:{}},g=v;p.common=function(n,r,i){Modernizr.formvalidation&&n.on("firstinvalid",function(e){if(!t.fromSubmit&&h)return;n.off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(r){!e.isInvalidUIPrevented()&&!r.isDefaultPrevented()&&(t.validityAlert.showFor(e.target),e.preventDefault(),r.preventDefault()),n.off("invalid.replacedwidgetbubble")})});var o,u,a=e("input, span.ui-slider-handle",r),f=n[0].attributes;for(o in s.copyAttrs)(u=f[o])&&u.specified&&(g[o]&&a[0]?a.attr(o,u.nodeValue):r[0].setAttribute(o,u.nodeValue));var l=n.attr("id"),p=l?e('label[for="'+l+'"]',n[0].form):c;r.addClass(n[0].className),t.addShadowDom(n,r,{data:i||{},shadowFocusElement:e("input.input-datetime-local-date, span.ui-slider-handle",r)[0],shadowChilds:a}),n.after(r),n[0].form&&e(n[0].form).on("reset",function(e){e.originalEvent&&!e.isDefaultPrevented()&&setTimeout(function(){n.prop("value",n.prop("value"))},0)}),p[0]&&(r.getShadowFocusElement().attr("aria-labelledby",t.getID(p)),p.on("click",function(){return n.getShadowFocusElement().focus(),!1}))},Modernizr.formvalidation&&["input","form"].forEach(function(e){var n=t.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){h=!0;var e=n.prop._supvalue.apply(this,arguments);return h=!1,e}}})});if(!u.date||s.replaceUI){var y={trigger:[.595,.395],normal:[.565,.425]},b=function(n,r,i,o){var u,a,l=function(){c.dpDiv.unbind("mousedown.webshimsmousedownhandler"),u=!1,a=!1},c=r.on({focusin:function(){l(),c.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){u=!0})},"focusout blur":function(e){u&&(a=!0,e.stopImmediatePropagation())}}).datepicker(e.extend({onClose:function(){a&&r.not(":focus")?(l(),r.trigger("focusout"),r.triggerHandler("blur")):l()}},f,s.datepicker,n.data("datepicker"))).on("change",i).data("datepicker");return c.dpDiv.addClass("input-date-datepicker-control"),o&&t.triggerDomUpdate(o[0]),["disabled","min","max","value","step","data-placeholder"].forEach(function(e){var t="attr",r=n[t](e);r&&n[t](e,r)}),c};p.date=function(n){if(!e.fn.datepicker)return;var r=e('<input class="input-date" type="text" />'),i=function(t){p.date.blockAttr=!0;var i;if(s.lazyDate){var u=e.data(r[0],"setDateLazyTimer");u&&(clearTimeout(u),e.removeData(r[0],"setDateLazyTimer"))}try{i=e.datepicker.parseDate(r.datepicker("option","dateFormat"),r.prop("value")),i=i?e.datepicker.formatDate("yy-mm-dd",i):r.prop("value")}catch(t){i=r.prop("value")}n.prop("value",i),p.date.blockAttr=!1,t.stopImmediatePropagation(),o(n[0],"input"),o(n[0],"change")},u;this.common(n,r,p.date.attrs),u=b(n,r,i),e(n).on("updateshadowdom",function(){if(u.trigger[0]){n.css({display:""});if(n[0].offsetWidth||n[0].offsetHeight){var e=m(n);e.css&&(r.css(e.css),e.outerWidth&&r.outerWidth(e.outerWidth),a(r,u.trigger))}}n.css({display:"none"})}).triggerHandler("updateshadowdom"),u.trigger[0]&&setTimeout(function(){t.ready("WINDOWLOAD",function(){e(n).triggerHandler("updateshadowdom")})},9)},p.date.attrs={disabled:function(t,n,r){e.prop(n,"disabled",!!r)},min:function(t,n,r){try{r=e.datepicker.parseDate("yy-mm-dd",r)}catch(i){r=!1}r&&e(n).datepicker("option","minDate",r)},max:function(t,n,r){try{r=e.datepicker.parseDate("yy-mm-dd",r)}catch(i){r=!1}r&&e(n).datepicker("option","maxDate",r)},"data-placeholder":function(t,n,r){var i=(r||"").split("-"),s;i.length==3&&(r=e(n).datepicker("option","dateFormat").replace("yy",i[0]).replace("mm",i[1]).replace("dd",i[2])),e.prop(n,"placeholder",r)},value:function(t,n,r){if(!p.date.blockAttr){try{var i=e.datepicker.parseDate("yy-mm-dd",r)}catch(s){var i=!1}i?d(e(n),i):e.prop(n,"value",r)}}}}if(!u.range||s.replaceUI)p.range=function(t){if(!e.fn.slider)return;var n=e('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),r=function(e,n){e.originalEvent&&(p.range.blockAttr=!0,t.prop("value",n.value),p.range.blockAttr=!1,o(t[0],"input"))};this.common(t,n,p.range.attrs),t.on("updateshadowdom",function(){t.css({display:""});if(t[0].offsetWidth||t[0].offsetHeight){var e=m(t);e.css&&(n.css(e.css),e.outerWidth&&n.outerWidth(e.outerWidth))}t.css({display:"none"})}).triggerHandler("updateshadowdom"),n.slider(e.extend(!0,{},s.slider,t.data("slider"))).on({slide:r,slidechange:function(e){e.originalEvent&&o(t[0],"change")}}),["disabled","min","max","step","value"].forEach(function(n){var r=t.prop(n),i;n=="value"&&!r&&(i=t.getShadowElement(),i&&(r=(e(i).slider("option","max")-e(i).slider("option","min"))/2)),r!=null&&t.prop(n,r)})},p.range.attrs={disabled:function(t,n,r){r=!!r,e(n).slider("option","disabled",r),e("span",n).attr({"aria-disabled":r+"",tabindex:r?"-1":"0"})},min:function(t,n,r){r=r?r*1||0:0,e(n).slider("option","min",r),e("span",n).attr({"aria-valuemin":r})},max:function(t,n,r){r=r||r===0?r*1||100:100,e(n).slider("option","max",r),e("span",n).attr({"aria-valuemax":r})},value:function(t,n,r){r=e(t).prop("valueAsNumber"),isNaN(r)||(p.range.blockAttr||e(n).slider("option","value",r),e("span",n).attr({"aria-valuenow":r,"aria-valuetext":r}))},step:function(t,n,r){r=r&&e.trim(r)?r*1||1:1,e(n).slider("option","step",r)}};if(s.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range){var w=function(n){t.data(this,"hasShadow")&&e.prop(this,"value",e.prop(this,"value"))};t.onNodeNamesPropertyModify("input","valueAsNumber",w),t.onNodeNamesPropertyModify("input","valueAsDate",w)}e.each(["disabled","min","max","value","step","data-placeholder"],function(e,n){t.onNodeNamesPropertyModify("input",n,function(e){var r=t.data(this,"shadowData");r&&r.data&&r.data[n]&&r.nativeElement===this&&r.data[n](this,r.shadowElement,e)})}),s.availabeLangs||(s.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" "));var E=function(){if(!e.datepicker)return;t.activeLang({langObj:e.datepicker.regional,module:"form-number-date-ui",callback:function(t){var n=e.extend({},f,t,s.datepicker);n.dateFormat&&s.datepicker.dateFormat!=n.dateFormat&&e("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option","dateFormat",n.dateFormat).getNativeElement().filter("[data-placeholder]").attr("data-placeholder",function(e,t){return t}),e.datepicker.setDefaults(n)}}),e(r).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")};e(r).on("jquery-uiReady.langchange input-widgetsReady.langchange",E),E(),function(){var n=function(){var t={};return function(n){return n in t?t[n]:t[n]=e('<input type="'+n+'" />')[0].type===n}}();if(n("number")&&n("time"))return;var i=r,s=t.cfg["forms-ext"],u=t.inputTypes,f={number:"0123456789.",time:"0123456789:."},l=function(n,r,i){i=i||{},"type"in i||(i.type=e.prop(n,"type")),"step"in i||(i.step=t.getStep(n,i.type)),"valueAsNumber"in i||(i.valueAsNumber=u[i.type].asNumber(e.prop(n,"value")));var s=i.step=="any"?u[i.type].step*u[i.type].stepScaleFactor:i.step,o;return t.addMinMaxNumberToCache("min",e(n),i),t.addMinMaxNumberToCache("max",e(n),i),isNaN(i.valueAsNumber)&&(i.valueAsNumber=u[i.type].stepBase||0),i.step!=="any"&&(o=Math.round((i.valueAsNumber-(i.minAsnumber||0))%i.step*1e7)/1e7,o&&Math.abs(o)!=i.step&&(i.valueAsNumber=i.valueAsNumber-o)),o=i.valueAsNumber+s*r,!isNaN(i.minAsNumber)&&o<i.minAsNumber?o=i.valueAsNumber*r<i.minAsNumber?i.minAsNumber:isNaN(i.maxAsNumber)?i.valueAsNumber:i.maxAsNumber:!isNaN(i.maxAsNumber)&&o>i.maxAsNumber?o=i.valueAsNumber*r>i.maxAsNumber?i.maxAsNumber:isNaN(i.minAsNumber)?i.valueAsNumber:i.minAsNumber:o=Math.round(o*1e7)/1e7,o};t.modules["form-number-date-ui"].getNextStep=l;if(s.stepArrows){var c={set:function(e){var n=t.data(this,"step-controls");n&&n[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};t.onNodeNamesPropertyModify("input","disabled",c),t.onNodeNamesPropertyModify("input","readonly",e.extend({},c))}var h={38:1,40:-1},p=function(t,n){function f(r){if(e.prop(t,"disabled")||t.readOnly||!r)return;s=u[n].numberToString(l(t,r,{type:n})),e.prop(t,"value",s),o(t,"input")}function c(){r=!0,setTimeout(function(){r=!1},i+9),setTimeout(function(){if(!e(t).is(":focus"))try{t.focus()}catch(n){}},1)}function h(){var n=e.prop(t,"value");n==s&&n!=a&&typeof n=="string"&&o(t,"change"),a=n}function p(){a=e(t).on({"change.stepcontrol focus.stepcontrol":function(n){if(!r||n.type!="focus")a=e.prop(t,"value")},"blur.stepcontrol":function(){r||setTimeout(function(){!r&&!e(t).is(":focus")&&h(),s=!1},i)}}).prop("value")}var r=!1,i=9,s,a;return p(),{triggerChange:h,step:f,setFocus:c}};t.addReady(function(r,i){s.stepArrows&&e("input",r).add(i.filter("input")).each(function(){var r=e.prop(this,"type");if(!u[r]||!u[r].asNumber||!s.stepArrows||s.stepArrows!==!0&&!s.stepArrows[r]||n(r)||e(i).hasClass("has-step-controls"))return;var i=this,o=p(i,r),l=e('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(i).on({"selectstart dragstart":function(){return!1},"mousedown mousepress":function(t){return e(t.target).hasClass("step-controls")||o.step(e(t.target).hasClass("step-up")?1:-1),o.setFocus(),!1},"mousepressstart mousepressend":function(t){t.type=="mousepressend"&&o.triggerChange(),e(t.target)[t.type=="mousepressstart"?"addClass":"removeClass"]("mousepress-ui")}}),c=function(e,t){if(t)return o.step(t),!1},d=e(i).addClass("has-step-controls").attr({readonly:i.readOnly,disabled:i.disabled,autocomplete:"off",role:"spinbutton"}).on("keyup",function(e){var t=h[e.keyCode];t&&o.triggerChange(t)}).on("keypress",function(e){var t=h[e.keyCode];if(t)return o.step(t),!1});f[r]&&d.on("keypress",function(){var e=f[r];return function(t){var n=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode);return t.ctrlKey||t.metaKey||n<" "||e.indexOf(n)>-1}}()),d.on({focus:function(){d.add(l).off(".mwhellwebshims").on("mousewheel.mwhellwebshims",c)},blur:function(){e(i).add(l).off(".mwhellwebshims")}}),t.data(i,"step-controls",l);if(s.calculateWidth){var v;d.on("updateshadowdom",function(){!v&&(i.offsetWidth||i.offsetHeight)&&(v=!0,a(d,l),l.css("marginTop",(d.outerHeight()-l.outerHeight())/2))}).triggerHandler("updateshadowdom")}})})}(),t.addReady(function(n,i){e(r).on("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(s){if(e.datepicker||e.fn.slider)e.datepicker&&!f.dateFormat&&(f.dateFormat=e.datepicker._defaults.dateFormat),p(n,i);e.datepicker&&e.fn.slider?e(r).unbind(".initinputui"):t.modules["input-widgets"].src||t.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});