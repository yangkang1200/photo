/* ===========================================================
 * pagepiling.js 1.5.1
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * MIT licensed
 *
 * Copyright (C) 2014 alvarotrigo.com - A project by Alvaro Trigo
 *
 * ========================================================== */
(function(b,h,k,y){b.fn.pagepiling=function(J){function K(a){var e=b(".pp-section.active").index(".pp-section");a=a.index(".pp-section");return e>a?"up":"down"}function l(a,e){var d={destination:a,animated:e,activeSection:b(".pp-section.active"),anchorLink:a.data("anchor"),sectionIndex:a.index(".pp-section"),toMove:a,yMovement:K(a),leavingSection:b(".pp-section.active").index(".pp-section")+1};d.activeSection.is(a)||("undefined"===typeof d.animated&&(d.animated=!0),"undefined"!==typeof d.anchorLink&&
L(d.anchorLink,d.sectionIndex),d.destination.addClass("active").siblings().removeClass("active"),d.sectionsToMove=M(d),"down"===d.yMovement?(d.translate3d="vertical"!==c.direction?"translate3d(-100%, 0px, 0px)":"translate3d(0px, -100%, 0px)",d.scrolling="-100%",c.css3||d.sectionsToMove.each(function(a){a!=d.activeSection.index(".pp-section")&&b(this).css(u(d.scrolling))}),d.animateSection=d.activeSection):(d.translate3d="translate3d(0px, 0px, 0px)",d.scrolling="0",d.animateSection=a),b.isFunction(c.onLeave)&&
c.onLeave.call(this,d.leavingSection,d.sectionIndex+1,d.yMovement),N(d),O(d.anchorLink),P(d.anchorLink,d.sectionIndex),z=d.anchorLink,A=(new Date).getTime())}function N(a){c.css3?(B(a.animateSection,a.translate3d,a.animated),a.sectionsToMove.each(function(){B(b(this),a.translate3d,a.animated)}),setTimeout(function(){v(a)},c.scrollingSpeed)):(a.scrollOptions=u(a.scrolling),a.animated?a.animateSection.animate(a.scrollOptions,c.scrollingSpeed,c.easing,function(){C(a);v(a)}):(a.animateSection.css(u(a.scrolling)),
setTimeout(function(){C(a);v(a)},400)))}function v(a){b.isFunction(c.afterLoad)&&c.afterLoad.call(this,a.anchorLink,a.sectionIndex+1)}function M(a){return"down"===a.yMovement?b(".pp-section").map(function(e){if(e<a.destination.index(".pp-section"))return b(this)}):b(".pp-section").map(function(e){if(e>a.destination.index(".pp-section"))return b(this)})}function C(a){"up"===a.yMovement&&a.sectionsToMove.each(function(e){b(this).css(u(a.scrolling))})}function u(a){return"vertical"===c.direction?{top:a}:
{left:a}}function L(a,b){c.anchors.length?(location.hash=a,D(location.hash)):D(String(b))}function D(a){a=a.replace("#","");b("body")[0].className=b("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g,"");b("body").addClass("pp-viewing-"+a)}function w(){return(new Date).getTime()-A<600+c.scrollingSpeed?!0:!1}function B(a,b,c){a.toggleClass("pp-easing",c);a.css({"-webkit-transform":b,"-moz-transform":b,"-ms-transform":b,transform:b})}function m(a){if(!w()){a=k.event||a;a=Math.max(-1,Math.min(1,
a.wheelDelta||-a.deltaY||-a.detail));var e=b(".pp-section.active").filter(".pp-scrollable");0>a?n("down",e):n("up",e);return!1}}function n(a,b){var c,g;"down"==a?(c="bottom",g=f.moveSectionDown):(c="top",g=f.moveSectionUp);if(0<b.length)if(c="top"===c?!b.scrollTop():"bottom"===c?b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0,c)g();else return!0;else g()}function E(){return k.PointerEvent?{down:"pointerdown",move:"pointermove",up:"pointerup"}:{down:"MSPointerDown",move:"MSPointerMove",up:"MSPointerUp"}}
function F(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;return b}function G(a){return"undefined"===typeof a.pointerType||"mouse"!=a.pointerType}function Q(a){a=a.originalEvent;G(a)&&(a=F(a),p=a.y,q=a.x)}function R(a){var e=a.originalEvent;!H(a.target)&&G(e)&&(a.preventDefault(),a=b(".pp-section.active").filter(".pp-scrollable"),w()||(e=F(e),r=e.y,t=e.x,"horizontal"===c.direction&&
Math.abs(q-t)>Math.abs(p-r)?Math.abs(q-t)>g.width()/100*c.touchSensitivity&&(q>t?n("down",a):t>q&&n("up",a)):Math.abs(p-r)>g.height()/100*c.touchSensitivity&&(p>r?n("down",a):r>p&&n("up",a))))}function H(a,e){e=e||0;var d=b(a).parent();return e<c.normalScrollElementTouchThreshold&&d.is(c.normalScrollElements)?!0:e==c.normalScrollElementTouchThreshold?!1:H(d,++e)}function S(){b("body").append('<div id="pp-nav"><ul></ul></div>');var a=b("#pp-nav");a.css("color",c.navigation.textColor);a.addClass(c.navigation.position);
for(var e=0;e<b(".pp-section").length;e++){var d="";c.anchors.length&&(d=c.anchors[e]);if("undefined"!==c.navigation.tooltips){var f=c.navigation.tooltips[e];"undefined"===typeof f&&(f="")}a.find("ul").append('<li data-tooltip="'+f+'"><a href="#'+d+'"><span></span></a></li>')}a.find("span").css("border-color",c.navigation.bulletsColor)}function P(a,e){c.navigation&&(b("#pp-nav").find(".active").removeClass("active"),a?b("#pp-nav").find('a[href="#'+a+'"]').addClass("active"):b("#pp-nav").find("li").eq(e).find("a").addClass("active"))}
function O(a){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"))}function T(){var a=h.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};h.body.insertBefore(a,null);for(var f in c)a.style[f]!==y&&(a.style[f]="translate3d(1px,1px,1px)",b=k.getComputedStyle(a).getPropertyValue(c[f]));h.body.removeChild(a);return b!==
y&&0<b.length&&"none"!==b}var f=b.fn.pagepiling,g=b(this),z,A=0,I="ontouchstart"in k||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,p=0,q=0,r=0,t=0,c=b.extend(!0,{direction:"vertical",menu:null,verticalCentered:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",loopBottom:!1,loopTop:!1,css3:!0,navigation:{textColor:"#000",bulletsColor:"#000",position:"right",tooltips:[]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,
sectionSelector:".section",animateAnchor:!1,afterLoad:null,onLeave:null,afterRender:null},J);b.extend(b.easing,{easeInQuart:function(a,b,c,f,g){return f*(b/=g)*b*b*b+c}});f.setScrollingSpeed=function(a){c.scrollingSpeed=a};f.setMouseWheelScrolling=function(a){a?g.get(0).addEventListener?(g.get(0).addEventListener("mousewheel",m,!1),g.get(0).addEventListener("wheel",m,!1)):g.get(0).attachEvent("onmousewheel",m):g.get(0).addEventListener?(g.get(0).removeEventListener("mousewheel",m,!1),g.get(0).removeEventListener("wheel",
m,!1)):g.get(0).detachEvent("onmousewheel",m)};f.setAllowScrolling=function(a){a?(f.setMouseWheelScrolling(!0),I&&(a=E(),g.off("touchstart "+a.down).on("touchstart "+a.down,Q),g.off("touchmove "+a.move).on("touchmove "+a.move,R))):(f.setMouseWheelScrolling(!1),I&&(a=E(),g.off("touchstart "+a.down),g.off("touchmove "+a.move)))};f.setKeyboardScrolling=function(a){c.keyboardScrolling=a};f.moveSectionUp=function(){var a=b(".pp-section.active").prev(".pp-section");!a.length&&c.loopTop&&(a=b(".pp-section").last());
a.length&&l(a)};f.moveSectionDown=function(){var a=b(".pp-section.active").next(".pp-section");!a.length&&c.loopBottom&&(a=b(".pp-section").first());a.length&&l(a)};f.moveTo=function(a){var c="",c=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".pp-section").eq(a-1);0<c.length&&l(c)};b(c.sectionSelector).each(function(){b(this).addClass("pp-section")});c.css3&&(c.css3=T());b(g).css({overflow:"hidden","-ms-touch-action":"none","touch-action":"none"});f.setAllowScrolling(!0);b.isEmptyObject(c.navigation)||S();
var x=b(".pp-section").length;b(".pp-section").each(function(a){b(this).data("data-index",a);b(this).css("z-index",x);a||0!==b(".pp-section.active").length||b(this).addClass("active");"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);"undefined"!==typeof c.sectionsColor[a]&&b(this).css("background-color",c.sectionsColor[a]);c.verticalCentered&&!b(this).hasClass("pp-scrollable")&&b(this).addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />');--x}).promise().done(function(){c.navigation&&
(b("#pp-nav").css("margin-top","-"+b("#pp-nav").height()/2+"px"),b("#pp-nav").find("li").eq(b(".pp-section.active").index(".pp-section")).find("a").addClass("active"));b(k).on("load",function(){var a=k.location.hash.replace("#",""),a=b('.pp-section[data-anchor="'+a+'"]');0<a.length&&l(a,c.animateAnchor)});b.isFunction(c.afterRender)&&c.afterRender.call(this)});b(k).on("hashchange",function(){var a=k.location.hash.replace("#","").split("/")[0];a.length&&a&&a!==z&&(a=isNaN(a)?b('[data-anchor="'+a+'"]'):
b(".pp-section").eq(a-1),l(a))});b(h).keydown(function(a){if(c.keyboardScrolling&&!w())switch(a.which){case 38:case 33:f.moveSectionUp();break;case 40:case 34:f.moveSectionDown();break;case 36:f.moveTo(1);break;case 35:f.moveTo(b(".pp-section").length);break;case 37:f.moveSectionUp();break;case 39:f.moveSectionDown()}});c.normalScrollElements&&(b(h).on("mouseenter",c.normalScrollElements,function(){f.setMouseWheelScrolling(!1)}),b(h).on("mouseleave",c.normalScrollElements,function(){f.setMouseWheelScrolling(!0)}));
b(h).on("click touchstart","#pp-nav a",function(a){a.preventDefault();a=b(this).parent().index();l(b(".pp-section").eq(a))});b(h).on({mouseenter:function(){var a=b(this).data("tooltip");b('<div class="pp-tooltip '+c.navigation.position+'">'+a+"</div>").hide().appendTo(b(this)).fadeIn(200)},mouseleave:function(){b(this).find(".pp-tooltip").fadeOut(200,function(){b(this).remove()})}},"#pp-nav li")}})(jQuery,document,window);