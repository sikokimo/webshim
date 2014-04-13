!function(a){"use strict";var b=function(a){return"number"==typeof a||a&&a==1*a},c=function(a,b){return"number"==typeof a||a&&a==1*a?1*a:b},d=["step","min","max","readonly","title","disabled","tabindex"],e={_create:function(){var b;for(this.element.addClass(this.options.baseClass||"ws-range").attr({role:"slider"}).append('<span class="ws-range-rail ws-range-track"><span class="ws-range-min ws-range-progress" /><span class="ws-range-thumb"><span><span data-value="" data-valuetext="" /></span></span></span>'),this.trail=a(".ws-range-track",this.element),this.range=a(".ws-range-progress",this.element),this.thumb=a(".ws-range-thumb",this.trail),this.thumbValue=a("span[data-value]",this.thumb),this.updateMetrics(),this.orig=this.options.orig,b=0;b<d.length;b++)this[d[b]](this.options[d[b]]);this.value=this._value,this.value(this.options.value),this.initDataList(),this.element.data("rangeUi",this),this.addBindings(),this._init=!0},value:a.noop,_value:function(b,c,d){var e,f,g=this.options,h=b,i={},j={};c||parseFloat(b,10)==b||(b=g.min+(g.max-g.min)/2),c||(b=this.normalizeVal(b)),e=100*((b-g.min)/(g.max-g.min)),this._init&&b==g.value&&h==b||(g.value=b,a.fn.stop&&(this.thumb.stop(),this.range.stop()),j[this.dirs.width]=e+"%",this.vertical&&(e=Math.abs(e-100)),i[this.dirs.left]=e+"%",d&&a.fn.animate?(d="object"!=typeof d?{}:a.extend({},d),d.duration||(f=Math.abs(e-parseInt(this.thumb[0].style[this.dirs.left]||50,10)),d.duration=Math.max(Math.min(999,5*f),99)),this.thumb.animate(i,d),this.range.animate(j,d)):(this.thumb[0].style[this.dirs.left]=i[this.dirs.left],this.range[0].style[this.dirs.width]=j[this.dirs.width]),this.orig&&(h!=b||!this._init&&this.orig.value!=b)&&this.options._change(b),this._setValueMarkup())},_setValueMarkup:function(){var b=this.options,c=b.textValue?b.textValue(this.options.value):b.options[b.value]||b.value;this.element[0].setAttribute("aria-valuenow",this.options.value),this.element[0].setAttribute("aria-valuetext",c),this.thumbValue[0].setAttribute("data-value",this.options.value),this.thumbValue[0].setAttribute("data-valuetext",c),b.selectedOption&&(a(b.selectedOption).removeClass("ws-selected-option"),b.selectedOption=null),b.value in b.options&&(b.selectedOption=a('[data-value="'+b.value+'"].ws-range-ticks',this.trail).addClass("ws-selected-option"))},initDataList:function(){if(this.orig){var b,c=this,d=function(){a(c.orig).jProp("list").off("updateDatalist",d).on("updateDatalist",d),clearTimeout(b),b=setTimeout(function(){c.list&&c.list()},9)};a(this.orig).on("listdatalistchange",d),this.list()}},list:function(){var c=this.options,d=c.min,e=c.max,f=this.trail,g=this;this.element.attr({"aria-valuetext":c.options[c.value]||c.value}),a(".ws-range-ticks",f).remove(),a(this.orig).jProp("list").find("option:not([disabled])").each(function(){c.options[a.prop(this,"value")]=a.prop(this,"label")||""}),a.each(c.options,function(h,i){if(!(!b(h)||d>h||h>e)){var j=100*((h-d)/(e-d)),k='data-value="'+h+'"';i&&(k+=' data-label="'+i+'"',c.showLabels&&(k+=' title="'+i+'"')),g.vertical&&(j=Math.abs(j-100)),g.posCenter(a('<span class="ws-range-ticks"'+k+' style="'+g.dirs.left+": "+j+'%;" />').appendTo(f))}}),c.value in c.options&&this._setValueMarkup()},readonly:function(a){a=!!a,this.options.readonly=a,this.element.attr("aria-readonly",""+a),this._init&&this.updateMetrics()},disabled:function(a){a=!!a,this.options.disabled=a,a?this.element.attr({tabindex:-1,"aria-disabled":"true"}):this.element.attr({tabindex:this.options.tabindex,"aria-disabled":"false"}),this._init&&this.updateMetrics()},tabindex:function(a){this.options.tabindex=a,this.options.disabled||this.element.attr({tabindex:a})},title:function(a){this.element.prop("title",a)},min:function(a){this.options.min=c(a,0),this.element.attr("aria-valuemin",this.options.min),this.value(this.options.value,!0)},max:function(a){this.options.max=c(a,100),this.element.attr("aria-valuemax",this.options.max),this.value(this.options.value,!0)},step:function(a){var b=this.options,d="any"==a?"any":c(a,1);b.stepping&&webshims.error("stepping was removed. Use stepfactor instead."),b.stepfactor&&"any"!=d&&(d*=b.stepfactor),b.step=d,this.value(this.options.value)},normalizeVal:function(a){var b,c,d,e=this.options;return a<=e.min?a=e.min:a>=e.max?a=e.max:"any"!=e.step&&(d=e.step,b=(a-e.min)%d,c=a-b,2*Math.abs(b)>=d&&(c+=b>0?d:-d),a=1*c.toFixed(5)),a},doStep:function(a,b){var d=c(this.options.step,1);"any"==this.options.step&&(d=Math.min(d,(this.options.max-this.options.min)/10)),this.value(this.options.value+d*a,!1,b)},getStepedValueFromPos:function(a){var b,c,d,e;return 0>=a?b=this.options[this.dirs[this.isRtl?"max":"min"]]:a>100?b=this.options[this.dirs[this.isRtl?"min":"max"]]:((this.vertical||this.isRtl)&&(a=Math.abs(a-100)),b=(this.options.max-this.options.min)*(a/100)+this.options.min,e=this.options.step,"any"!=e&&(c=(b-this.options.min)%e,d=b-c,2*Math.abs(c)>=e&&(d+=c>0?e:-e),b=1*d.toFixed(5))),b},addRemoveClass:function(a,b){var c,d=-1!=this.element.prop("className").indexOf(a);!b&&d?(c="removeClass",this.element.removeClass(a),this.updateMetrics()):b&&!d&&(c="addClass"),c&&(this.element[c](a),this._init&&this.updateMetrics())},addBindings:function(){var b,c,d,e,f=this,g=this.options,h=function(){var b={};return{init:function(c,d,e){b[c]||(b[c]={fn:e},f.orig&&a(f.orig).on(c,function(){b[c].val=a.prop(f.orig,"value")})),b[c].val=d},call:function(a,c){b[a].val!=c&&(clearTimeout(b[a].timer),b[a].val=c,b[a].timer=setTimeout(function(){b[a].fn(c,f)},0))}}}(),i=function(){var a={touchstart:1,touchend:1,touchmove:1},b=["pageX","pageY"];return function(c){if(a[c.type]&&c.originalEvent&&c.originalEvent.touches&&c.originalEvent.touches.length)for(var d=0;d<b.length;d++)c[b[d]]=c.originalEvent.touches[0][b[d]];return c}}(),j=function(a,b){a!=g.value&&(f.value(a,!1,b),h.call("input",a))},k=function(a,d){"touchmove"==a.type&&(a.preventDefault(),i(a)),j(f.getStepedValueFromPos((a[f.dirs.mouse]-b)*c),d),a&&"mousemove"==a.type&&a.preventDefault()},l=function(b){b&&"mouseup"==b.type&&(h.call("input",g.value),h.call("change",g.value)),f.addRemoveClass("ws-active"),a(document).off("mousemove touchmove",k).off("mouseup touchend",l),a(window).off("blur",m),e=!1},m=function(a){a.target==window&&l()},n=function(d){if(!e&&("touchstart"!=d.type||d.originalEvent&&d.originalEvent.touches&&1==d.originalEvent.touches.length)&&(d.preventDefault(),a(document).off("mousemove touchmove",k).off("mouseup touchend",l),a(window).off("blur",m),!g.readonly&&!g.disabled)){if(i(d),f.element.trigger("focus"),f.addRemoveClass("ws-active",!0),b=f.element.offset(),c=f.element[f.dirs.innerWidth](),!c||!b)return;b=b[f.dirs.pos],c=100/c,"ws-range-ticks"==d.target.className?j(d.target.getAttribute("data-value"),g.animate):k(d,g.animate),e=!0,a(document).on("touchstart"==d.type?{touchend:l,touchmove:k}:{mouseup:l,mousemove:k}),a(window).on("blur",m),d.stopPropagation()}},o={"touchstart mousedown":n,focus:function(){g.disabled||d||(h.init("input",g.value),h.init("change",g.value),f.addRemoveClass("ws-focus",!0),f.updateMetrics()),d=!0},blur:function(){f.element.removeClass("ws-focus ws-active"),f.updateMetrics(),d=!1,h.init("input",g.value),h.call("change",g.value)},keyup:function(){f.addRemoveClass("ws-active"),h.call("input",g.value),h.call("change",g.value)},keydown:function(a){var b=!0,c=a.keyCode;g.readonly||g.disabled||(f.isRtl&&(39==c?c=37:37==c&&(c=39)),39==c||38==c?f.doStep(1):37==c||40==c?f.doStep(-1):33==c?f.doStep(10,g.animate):34==c?f.doStep(-10,g.animate):36==c?f.value(f.options.max,!1,g.animate):35==c?f.value(f.options.min,!1,g.animate):b=!1,b&&(f.addRemoveClass("ws-active",!0),h.call("input",g.value),a.preventDefault()))}};h.init("input",g.value,this.options.input),h.init("change",g.value,this.options.change),o[a.fn.mwheelIntent?"mwheelIntent":"mousewheel"]=function(a,b){b&&d&&!g.readonly&&!g.disabled&&(f.doStep(b),a.preventDefault(),h.call("input",g.value))},this.element.on(o),this.thumb.on({mousedown:n}),this.orig&&a(this.orig).jProp("form").on("reset",function(){var b=a.prop(f.orig,"value");f.value(b),setTimeout(function(){var c=a.prop(f.orig,"value");b!=c&&f.value(c)},4)}),window.webshims&&webshims.ready("WINDOWLOAD",function(){webshims.ready("dom-support",function(){if(a.fn.onWSOff){var b,c=function(){f.updateMetrics()};f.element.onWSOff("updateshadowdom",function(){clearTimeout(b),b=setTimeout(c,100)})}}),!a.fn.onWSOff&&webshims._polyfill&&webshims._polyfill(["dom-support"])})},posCenter:function(a,b){var c,d;!this.options.calcCenter||this._init&&!this.element[0].offsetWidth||(a||(a=this.thumb),d=a[0].style,b||(b=a[this.dirs.outerWidth]()),b/=-2,d[this.dirs.marginLeft]=b+"px",this.options.calcTrail&&a[0]==this.thumb[0]&&(c=this.element[this.dirs.innerHeight](),d[this.dirs.marginTop]=(a[this.dirs.outerHeight]()-c)/-2+"px",this.range[0].style[this.dirs.marginTop]=(this.range[this.dirs.outerHeight]()-c)/-2+"px",this.range[0].style[this.dirs.posLeft]=b+"px",b*=-1,this.range[0].style[this.dirs.paddingRight]=b+"px",this.trail[0].style[this.dirs.left]=b+"px",this.trail[0].style[this.dirs.right]=b+"px"))},updateMetrics:function(){var a=this.element.innerWidth();this.vertical=a&&this.element.innerHeight()-a>10,this.dirs=this.vertical?{mouse:"pageY",pos:"top",posLeft:"bottom",paddingRight:"paddingTop",min:"max",max:"min",left:"top",right:"bottom",width:"height",innerWidth:"innerHeight",innerHeight:"innerWidth",outerWidth:"outerHeight",outerHeight:"outerWidth",marginTop:"marginLeft",marginLeft:"marginTop"}:{mouse:"pageX",pos:"left",posLeft:"left",paddingRight:"paddingRight",min:"min",max:"max",left:"left",right:"right",width:"width",innerWidth:"innerWidth",innerHeight:"innerHeight",outerWidth:"outerWidth",outerHeight:"outerHeight",marginTop:"marginTop",marginLeft:"marginLeft"},this.vertical||"rtl"!=this.element.css("direction")||(this.isRtl=!0,this.dirs.left="right",this.dirs.right="left",this.dirs.marginLeft="marginRight"),this.element[this.vertical?"addClass":"removeClass"]("vertical-range")[this.isRtl?"addClass":"removeClass"]("ws-is-rtl"),this.updateMetrics=this.posCenter,this.posCenter()}},f=function(a){function b(){}return b.prototype=a,new b};a.fn.rangeUI=function(b){return b=a.extend({readonly:!1,disabled:!1,tabindex:0,min:0,step:1,max:100,value:50,input:a.noop,change:a.noop,_change:a.noop,showLabels:!0,options:{},calcCenter:!0,calcTrail:!0},b),this.each(function(){var c=a.extend(f(e),{element:a(this)});c.options=b,c._create.call(c)})},window.webshims&&webshims.isReady&&webshims.isReady("range-ui",!0)}(window.webshims?webshims.$:jQuery);