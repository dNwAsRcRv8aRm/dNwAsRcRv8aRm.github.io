function _bldCont1(a,b){for(var c="allEntImgs"+a,d=[],e=0,f=window[c].length;e<f;e++)d.push({href:window[c][e][0]});$.fancybox(d,{index:b,padding:3,preload:5,openEffect:openEf,closeEffect:"elastic",nextEffect:"fade",prevEffect:"fade",openEasing:"linear",nextEasing:"linear",prevEasing:"linear",fixed:fixedFlag,helpers:{title:null,overlay:{opacity:.1,speedIn:0,speedOut:0},buttons:{}}})}function videoLightbox(){$.browser.msie&&$.browser.version<10&&"BackCompat"==document.compatMode&&$("#videocontent").width($("#videocontent_obj").children().width()),$("#videocontent").width($(".vep-videocontent").children().width()),$.browser.opera&&($(".vep-videocontent").width($(".vep-videocontent").children().width()),$(".vep-videocontent").height($(".vep-videocontent").children().height())),$.fancybox({href:"#videocontent",fitToView:!1,width:"70%",height:"70%",autoSize:!0,closeClick:!1,openEffect:"none",closeEffect:"none",padding:3,fixed:fixedFlag,afterClose:function(){setTimeout($(".vep-videocontent").html(""),100)},helpers:{title:null,overlay:{opacity:.8,speedIn:0,speedOut:0},buttons:{}}})}void 0===window.ulb&&(window.ulb={}),function(a,b,c){var d,e=c(a),f=c(b),g=c.fancybox=function(){g.open.apply(this,arguments)},h=!1,j=void 0!==b.createTouch;c.extend(g,{version:"2.0.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoResize:!j,autoCenter:!j,fitToView:!0,aspectRatio:!1,topRatio:.5,fixed:!(c.browser.msie&&6>=c.browser.version||j),scrolling:"auto",wrapCSS:"fancybox-default",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+(c.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">'+ulb.error+"</p>",closeBtn:'<div title="'+ulb.closeBtn+'" class="fancybox-item fancybox-close"></div>',next:'<a title="'+ulb.next+'" href="javascript://" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="'+ulb.prev+'" href="javascript://" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,b){g.close(!0),a&&!c.isArray(a)&&(a=a instanceof c?c(a).get():[a]),g.isActive=!0,g.opts=c.extend(!0,{},g.defaults,b),c.isPlainObject(b)&&void 0!==b.keys&&(g.opts.keys=!!b.keys&&c.extend({},g.defaults.keys,b.keys)),g.group=a,g._start(g.opts.index||0)},cancel:function(){g.coming&&!1===g.trigger("onCancel")||(g.coming=null,g.hideLoading(),g.ajaxLoad&&g.ajaxLoad.abort(),g.ajaxLoad=null,g.imgPreload&&(g.imgPreload.onload=g.imgPreload.onabort=g.imgPreload.onerror=null))},close:function(a){g.cancel(),g.current&&!1!==g.trigger("beforeClose")&&(g.unbindEvents(),!g.isOpen||a&&!0===a[0]?(c(".fancybox-wrap").stop().trigger("onReset").remove(),g._afterZoomOut()):(g.isOpen=g.isOpened=!1,c(".fancybox-item, .fancybox-nav").remove(),g.wrap.stop(!0).removeClass("fancybox-opened"),g.inner.css("overflow","hidden"),g.transitions[g.current.closeMethod]()))},play:function(a){var b=function(){clearTimeout(g.player.timer)},d=function(){b(),g.current&&g.player.isActive&&(g.player.timer=setTimeout(g.next,g.current.playSpeed))},e=function(){b(),c("body").unbind(".player"),g.player.isActive=!1,g.trigger("onPlayEnd")};g.player.isActive||a&&!1===a[0]?e():g.current&&(g.current.loop||g.current.index<g.group.length-1)&&(g.player.isActive=!0,c("body").bind({"afterShow.player onUpdate.player":d,"onCancel.player beforeClose.player":e,"beforeLoad.player":b}),d(),g.trigger("onPlayStart"))},next:function(){if("undefined"==typeof getPhotoVars||d||(d=getPhotoVars()),d&&g.current){g.current.index=0;for(var a=0;a<g.group.length&&(m1=g.group[a].href.match(/\/(?:[0-9]+\.[a-z]+)$/i),m2=g.current.href.match(/\/\d+\.[^\?]+/i),m1[0]!=m2[0]);a++)g.current.index++}g.current&&g.jumpto(+g.current.index+1,1)},prev:function(){if("undefined"==typeof getPhotoVars||d||(d=getPhotoVars()),d&&g.current){g.current.index=0;for(var a=0;a<g.group.length&&(m1=g.group[a].href.match(/\/(?:[0-9]+\.[a-z]+)$/i),m2=g.current.href.match(/\/\d+\.[^\?]+/i),m1[0]!=m2[0]);a++)g.current.index++}g.current&&g.jumpto(+g.current.index-1,-1)},jumpto:function(a,b){function c(){var c=$(g.group[0]).clone()[0];g.group=new Array,i=0,$.each(d.photoUrls,function(d,e){e&&$.each(e,function(d,e){var f=$(c).clone()[0];$(f).attr("data-url","/photo/0-0-"+e[0]),f.href=e[1],g.group.push(f),g.current.href==f.href&&(a=k=i+b),i++})}),g.current&&(k=parseInt(k,10),1<g.group.length&&g.current.loop&&(k>=g.group.length?k=0:0>k&&(k=g.group.length-1)),void 0!==g.group[k]&&(g.cancel(),g._start(k)))}if("undefined"==typeof getPhotoVars||d||(d=getPhotoVars()),d){var e=g.current.href.split("?");if(j=checkPhotoPosition(d.photoUrls,e[0])){var f,h=pages=0;if($.each(d.photoUrls,function(a){for(var b in a)h++;pages++}),1==j[0]?f=res=void 0===d.photoUrls[parseInt(j[1])+1]?1:parseInt(j[1])+1:-1==j[0]&&(f=res=j[1]-1<1?Math.max.apply(Math,Object.keys(d.photoUrls)):parseInt(j[1])-1),1!=pages&&(null==d.photoUrls[f]||h!=g.group.length)){url=d.pageUrlMask.replace(/\%[pa]/gi,function(a){return"%p"==a?f:"%a"==a?1:void 0});var k=a;return void(d.photoUrls[f]?c():$.ajax({url:url,success:function(a){d.photoUrls[f]=a,c()}}))}}}g.current&&(a=parseInt(a,10),1<g.group.length&&g.current.loop&&(a>=g.group.length?a=0:0>a&&(a=g.group.length-1)),void 0!==g.group[a]&&(g.cancel(),g._start(a)))},reposition:function(a){g.isOpen&&g.wrap.css(g._getPosition(a))},update:function(a){g.isOpen&&(h||setTimeout(function(){var b=g.current;h&&(h=!1,b)&&((b.autoResize||a&&"orientationchange"===a.type)&&(b.autoSize&&(g.inner.height("auto"),b.height=g.inner.height()),g._setDimension(),b.canGrow&&g.inner.height("auto")),b.autoCenter&&g.reposition(),g.trigger("onUpdate"))},100),h=!0)},toggle:function(){g.isOpen&&(g.current.fitToView=!g.current.fitToView,g.update())},hideLoading:function(){c("#fancybox-loading").remove()},showLoading:function(){g.hideLoading(),c('<div id="fancybox-loading"><div></div></div>').click(g.cancel).appendTo("body")},getViewport:function(){return{x:e.scrollLeft(),y:e.scrollTop(),w:e.width(),h:window.innerHeight}},unbindEvents:function(){g.wrap&&g.wrap.unbind(".fb"),f.unbind(".fb"),e.unbind(".fb")},bindEvents:function(){var a=g.current,b=a.keys;a&&(e.bind("resize.fb, orientationchange.fb",g.update),b&&f.bind("keydown.fb",function(a){var d;!a.ctrlKey&&!a.altKey&&!a.shiftKey&&!a.metaKey&&0>c.inArray(a.target.tagName.toLowerCase(),["input","textarea","select","button"])&&(d=a.keyCode,-1<c.inArray(d,b.close)?(g.close(),a.preventDefault()):-1<c.inArray(d,b.next)?(g.next(),a.preventDefault()):-1<c.inArray(d,b.prev)&&(g.prev(),a.preventDefault()))}),c.fn.mousewheel&&a.mouseWheel&&1<g.group.length&&g.wrap.bind("mousewheel.fb",function(a,b){var d=c(a.target).get(0);(0===d.clientHeight||d.scrollHeight===d.clientHeight&&d.scrollWidth===d.clientWidth)&&(a.preventDefault(),g[0<b?"prev":"next"]())}))},trigger:function(a){var b,d=g[-1<c.inArray(a,["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(d){if(c.isFunction(d[a])&&(b=d[a].apply(d,Array.prototype.slice.call(arguments,1))),!1===b)return!1;d.helpers&&c.each(d.helpers,function(b,e){e&&void 0!==g.helpers[b]&&c.isFunction(g.helpers[b][a])&&g.helpers[b][a](e,d)}),c.event.trigger(a+".fb")}},isImage:function(a){return a&&(a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)||a.match(/^data:image\/(jpg|gif|png|bmp|jpeg);base64,/i))},isSWF:function(a){return a&&a.match(/\.(swf)(.*)?$/i)},_start:function(a){var b,d,e,f={},h=g.group[a]||null;h&&(h.nodeType||h instanceof c)&&(b=!0,c.metadata&&(f=c(h).metadata())),f=c.extend(!0,{},g.opts,{index:a,element:h},c.isPlainObject(h)?h:f),c.each(["href","title","content","type"],function(a,d){f[d]=g.opts[d]||b&&c(h).attr(d)||f[d]||null}),"number"==typeof f.margin&&(f.margin=[f.margin,f.margin,f.margin,f.margin]),f.modal&&c.extend(!0,f,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}}),g.coming=f,!1===g.trigger("beforeLoad")?g.coming=null:(d=f.type,a=f.href||h,d||(b&&!(e=c(h).data("fancybox-type"))&&h.className&&(d=(e=h.className.match(/fancybox\.(\w+)/))?e[1]:null),!d&&"string"===c.type(a)&&(g.isImage(a)?d="image":g.isSWF(a)?d="swf":a.match(/^#/)&&(d="inline")),d||(d=b?"inline":"html"),f.type=d),"inline"===d||"html"===d?(f.content||(f.content="inline"===d?c("string"===c.type(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):h),f.content&&f.content.length||(d=null)):a||(d=null),f.group=g.group,f.isDom=b,f.href=a,"image"===d?g._loadImage():"ajax"===d?g._loadAjax():d?g._afterLoad():g._error("type"))},_error:function(a){g.hideLoading(),c.extend(g.coming,{type:"html",autoSize:!0,minHeight:0,hasError:a,content:g.coming.tpl.error}),g._afterLoad()},_loadImage:function(){g.imgPreload=new Image,g.imgPreload.onload=function(){this.onload=this.onerror=null,g.coming.width=this.width,g.coming.height=this.height,g._afterLoad()},g.imgPreload.onerror=function(){this.onload=this.onerror=null,g._error("image")},g.imgPreload.src=g.coming.href,g.imgPreload.width||g.showLoading()},_loadAjax:function(){g.showLoading(),g.ajaxLoad=c.ajax(c.extend({},g.coming.ajax,{url:g.coming.href,error:function(a,b){"abort"!==b?g._error("ajax",a):g.hideLoading()},success:function(a,b){"success"===b&&(g.coming.content=a,g._afterLoad())}}))},_preloadImages:function(){var a,b=g.group,d=g.current,e=b.length;if(d.preload&&!(2>b.length))for(var f=1;f<=Math.min(d.preload,e-1);f++)a=b[(d.index+f)%e],(a=c(a).attr("href")||a)&&((new Image).src=a)},_afterLoad:function(){g.hideLoading(),g.coming&&!1!==g.trigger("afterLoad",g.current)?(g.isOpened?(c(".fancybox-item").remove(),g.wrap.stop(!0).removeClass("fancybox-opened"),g.inner.css("overflow","hidden"),g.transitions[g.current.prevMethod]()):(c(".fancybox-wrap").stop().trigger("onReset").remove(),g.trigger("afterClose")),g.unbindEvents(),g.isOpen=!1,g.current=g.coming,g.wrap=c(g.current.tpl.wrap).addClass("fancybox-"+(j?"mobile":"desktop")+" fancybox-tmp "+g.current.wrapCSS).appendTo("body"),g.outer=c(".fancybox-outer",g.wrap).css("padding",g.current.padding+"px"),g.inner=c(".fancybox-inner",g.wrap),g._setContent()):g.coming=!1},_setContent:function(){var a,b,d=g.current,e=d.type;switch(e){case"inline":case"ajax":case"html":a=d.content,a instanceof c&&(a=a.show().detach(),a.parent().hasClass("fancybox-inner")&&a.parents(".fancybox-wrap").trigger("onReset").remove(),c(g.wrap).bind("onReset",function(){a.appendTo("body").hide()})),d.autoSize&&(b=c('<div class="fancybox-tmp '+g.current.wrapCSS+'"></div>').appendTo("body").append(a),d.width=b.width(),d.height=b.height(),b.width(g.current.width),b.height()>d.height&&(b.width(d.width+1),d.width=b.width(),d.height=b.height()),a=b.contents().detach(),b.remove());break;case"image":a=d.tpl.image.replace("{href}",d.href),d.aspectRatio=!0;break;case"swf":a=d.tpl.swf.replace(/\{width\}/g,d.width).replace(/\{height\}/g,d.height).replace(/\{href\}/g,d.href)}if("iframe"===e){if(a=c(d.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr("scrolling",d.scrolling),d.scrolling="auto",d.autoSize)return a.width(d.width),g.showLoading(),void a.data("ready",!1).appendTo(g.inner).bind({onCancel:function(){c(this).unbind(),g._afterZoomOut()},load:function(){var a,b=c(this);try{this.contentWindow.document.location&&(a=b.contents().find("body").height()+12,b.height(a))}catch(a){d.autoSize=!1}!1===b.data("ready")?(g.hideLoading(),a&&(g.current.height=a),g._beforeShow(),b.data("ready",!0)):a&&g.update()}}).attr("src",d.href);a.attr("src",d.href)}else"image"!==e&&"swf"!==e||(d.autoSize=!1,d.scrolling="visible");g.inner.append(a),g._beforeShow()},_beforeShow:function(){g.coming=null,g.trigger("beforeShow"),g._setDimension(),g.wrap.hide().removeClass("fancybox-tmp"),g.bindEvents(),g._preloadImages(),g.transitions[g.isOpened?g.current.nextMethod:g.current.openMethod]()},_setDimension:function(){var a,b=g.wrap,d=g.outer,e=g.inner,f=g.current,h=g.getViewport(),i=f.margin,j=2*f.padding,k=f.width,l=f.height,m=f.maxWidth,n=f.maxHeight,o=f.minWidth,p=f.minHeight;if(h.w-=i[1]+i[3],h.h-=i[0]+i[2],-1<k.toString().indexOf("%")&&(k=(h.w-j)*parseFloat(k)/100),-1<l.toString().indexOf("%")&&(l=(h.h-j)*parseFloat(l)/100),i=k/l,k+=j,l+=j,f.fitToView&&(m=Math.min(h.w,m),n=Math.min(h.h,n)),f.aspectRatio?(k>m&&(k=m,l=(k-j)/i+j),l>n&&(l=n,k=(l-j)*i+j),k<o&&(k=o,l=(k-j)/i+j),l<p&&(l=p,k=(l-j)*i+j)):(k=Math.max(o,Math.min(k,m)),l=Math.max(p,Math.min(l,n))),k=Math.round(k),l=Math.round(l),c(b.add(d).add(e)).width("auto").height("auto"),e.width(k-j).height(l-j),b.width(k),a=b.height(),k>m||a>n)for(;(k>m||a>n)&&k>o&&a>p;)l-=10,f.aspectRatio?(k=Math.round((l-j)*i+j))<o&&(k=o,l=(k-j)/i+j):k-=10,e.width(k-j).height(l-j),b.width(k),a=b.height();f.dim={width:k,height:a},f.canGrow=f.autoSize&&l>p&&l<n,f.canShrink=!1,f.canExpand=!1,k-j<f.width||l-j<f.height?f.canExpand=!0:(k>h.w||a>h.h)&&k>o&&l>p&&(f.canShrink=!0),b=a-j,g.innerSpace=b-e.height(),g.outerSpace=b-d.height()},_getPosition:function(a){var b=g.current,c=g.getViewport(),d=b.margin,e=g.wrap.width()+d[1]+d[3],f=g.wrap.height()+d[0]+d[2],h={position:"absolute",top:d[0]+c.y,left:d[3]+c.x};return b.fixed&&(!a||!1===a[0])&&f<=c.h&&e<=c.w&&(h={position:"fixed",top:d[0],left:d[3]}),h.top=Math.ceil(Math.max(h.top,h.top+(c.h-f)*b.topRatio))+"px",h.left=Math.ceil(Math.max(h.left,h.left+.5*(c.w-e)))+"px",h},_afterZoomIn:function(){var a=g.current,b=a.scrolling;g.isOpen=g.isOpened=!0,g.wrap.addClass("fancybox-opened").css("overflow","visible"),g.update(),g.inner.css("overflow","yes"===b?"scroll":"no"===b?"hidden":b),(a.closeClick||a.nextClick)&&g.inner.css("cursor","pointer").bind("click.fb",a.nextClick?g.next:g.close),a.closeBtn&&c(a.tpl.closeBtn).appendTo(g.outer).bind("click.fb",g.close),a.arrows&&1<g.group.length&&((a.loop||0<a.index)&&c(a.tpl.prev).appendTo(g.inner).bind("click.fb",g.prev),(a.loop||a.index<g.group.length-1)&&c(a.tpl.next).appendTo(g.inner).bind("click.fb",g.next)),g.trigger("afterShow"),g.opts.autoPlay&&!g.player.isActive&&(g.opts.autoPlay=!1,g.play())},_afterZoomOut:function(){g.trigger("afterClose"),g.wrap.trigger("onReset").remove(),c.extend(g,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}}),g.transitions={getOrigPosition:function(){var a=g.current,b=a.element,d=a.padding,e=c(a.orig),f={},h=50,i=50;return!e.length&&a.isDom&&c(b).is(":visible")&&(e=c(b).find("img:first"),e.length||(e=c(b))),e.length?(f=e.offset(),e.is("img")&&(h=e.outerWidth(),i=e.outerHeight())):(a=g.getViewport(),f.top=a.y+.5*(a.h-i),f.left=a.x+.5*(a.w-h)),f={top:Math.ceil(f.top-d)+"px",left:Math.ceil(f.left-d)+"px",width:Math.ceil(h+2*d)+"px",height:Math.ceil(i+2*d)+"px"}},step:function(a,b){var c,d,e;"width"!==b.prop&&"height"!==b.prop||(d=e=Math.ceil(a-2*g.current.padding),"height"===b.prop&&(c=(a-b.start)/(b.end-b.start),b.start>b.end&&(c=1-c),d-=g.innerSpace*c,e-=g.outerSpace*c),g.inner[b.prop](d),g.outer[b.prop](e))},zoomIn:function(){var a,b,d=g.wrap,e=g.current;a=e.dim,"elastic"===e.openEffect?(b=c.extend({},a,g._getPosition(!0)),delete b.position,a=this.getOrigPosition(),e.openOpacity&&(a.opacity=0,b.opacity=1),g.outer.add(g.inner).width("auto").height("auto"),d.css(a).show(),d.animate(b,{duration:e.openSpeed,easing:e.openEasing,step:this.step,complete:g._afterZoomIn})):(d.css(c.extend({},a,g._getPosition())),"fade"===e.openEffect?d.fadeIn(e.openSpeed,g._afterZoomIn):(d.show(),g._afterZoomIn()))},zoomOut:function(){var a,b=g.wrap,c=g.current;"elastic"===c.closeEffect?("fixed"===b.css("position")&&b.css(g._getPosition(!0)),a=this.getOrigPosition(),c.closeOpacity&&(a.opacity=0),b.animate(a,{duration:c.closeSpeed,easing:c.closeEasing,step:this.step,complete:g._afterZoomOut})):b.fadeOut("fade"===c.closeEffect?c.closeSpeed:0,g._afterZoomOut)},changeIn:function(){var a,b=g.wrap,c=g.current;"elastic"===c.nextEffect?(a=g._getPosition(!0),a.opacity=0,a.top=parseInt(a.top,10)-200+"px",b.css(a).show().animate({opacity:1,top:"+=200px"},{duration:c.nextSpeed,easing:c.nextEasing,complete:g._afterZoomIn})):(b.css(g._getPosition()),"fade"===c.nextEffect?b.hide().fadeIn(c.nextSpeed,g._afterZoomIn):(b.show(),g._afterZoomIn()))},changeOut:function(){var a=g.wrap,b=g.current,d=function(){c(this).trigger("onReset").remove()};a.removeClass("fancybox-opened"),"elastic"===b.prevEffect?a.animate({opacity:0,top:"+=200px"},{duration:b.prevSpeed,easing:b.prevEasing,complete:d}):a.fadeOut("fade"===b.prevEffect?b.prevSpeed:0,d)}},g.helpers.overlay={overlay:null,update:function(){var a,d;this.overlay.width(0).height(0),c.browser.msie?(a=Math.max(b.documentElement.scrollWidth,b.body.scrollWidth),d=Math.max(b.documentElement.offsetWidth,b.body.offsetWidth),a=a<d?e.width():a):a=f.width(),this.overlay.width(a).height(f.height())},beforeShow:function(a){this.overlay||(a=c.extend(!0,{speedIn:"fast",closeClick:!0,opacity:1,css:{background:"black"}},a),this.overlay=c('<div id="fancybox-overlay"></div>').css(a.css).appendTo("body"),this.update(),a.closeClick&&this.overlay.bind("click.fb",g.close),e.bind("resize.fb",c.proxy(this.update,this)),this.overlay.fadeTo(a.speedIn,a.opacity))},onUpdate:function(){this.update()},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||0,function(){c(this).remove()}),this.overlay=null}},g.helpers.title={beforeShow:function(a){var b;(b=g.current.title)&&(b=c('<div class="fancybox-title fancybox-title-'+a.type+'-wrap">'+b+"</div>").appendTo("body"),"float"===a.type&&(b.width(b.width()),b.wrapInner('<span class="child"></span>'),g.current.margin[2]+=Math.abs(parseInt(b.css("margin-bottom"),10))),b.appendTo("over"===a.type?g.inner:"outside"===a.type?g.wrap:g.outer))}},c.fn.fancybox=function(a){var b,d=c(this),e=this.selector||"",h=function(f){var h=this,i="rel",j=h[i],k=b;!f.ctrlKey&&!f.altKey&&!f.shiftKey&&!f.metaKey&&(f.preventDefault(),j||(i="data-fancybox-group",j=c(h).attr("data-fancybox-group")),j&&""!==j&&"nofollow"!==j&&(h=e.length?c(e):d,h=h.filter("["+i+'="'+j+'"]'),k=h.index(this)),a.index=k,g.open(h,a))},a=a||{};return b=a.index||0,e?f.undelegate(e,"click.fb-start").delegate(e,"click.fb-start",h):d.unbind("click.fb-start").bind("click.fb-start",h),this}}(window,document,jQuery),function(a){var b=a.fancybox;b.helpers.buttons={tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="'+ulb.prev+'" href="javascript:;"></a></li><li><a class="btnPlay" title="'+ulb.btnPlay+'" href="javascript:;"></a></li><li><a class="btnNext" title="'+ulb.next+'" href="javascript:;"></a></li><li><a class="btnToggle" title="'+ulb.btnToggle+'" href="javascript:;"></a></li><li><a class="btnClose" title="'+ulb.closeBtn+'" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',list:null,buttons:{},update:function(){var a=this.buttons.toggle.removeClass("btnDisabled btnToggleOn");b.current.canShrink?a.addClass("btnToggleOn"):b.current.canExpand||a.addClass("btnDisabled")},beforeLoad:function(a){if(b.group.length<1)return b.coming.helpers.buttons=!1,void(b.coming.closeBtn=!0);b.coming.margin["bottom"===a.position?2:0]+=30},onPlayStart:function(){this.list&&this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")},onPlayEnd:function(){this.list&&this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")},afterShow:function(c){var d;this.list||(this.list=a(c.tpl||this.tpl).addClass(c.position||"top").appendTo("body"),this.buttons={prev:this.list.find(".btnPrev").click(b.prev),next:this.list.find(".btnNext").click(b.next),play:this.list.find(".btnPlay").click(b.play),toggle:this.list.find(".btnToggle").click(b.toggle)}),d=this.buttons,b.current.index>0||b.current.loop?d.prev.removeClass("btnDisabled"):d.prev.addClass("btnDisabled"),b.current.loop||b.current.index<b.group.length-1?(d.next.removeClass("btnDisabled"),d.play.removeClass("btnDisabled")):(d.next.addClass("btnDisabled"),d.play.addClass("btnDisabled")),this.update()},onUpdate:function(){this.update()},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons={}}}}(jQuery);var fixedFlag=!0,openEf="elastic";$.browser.msie&&$.browser.version<10&&"BackCompat"==document.compatMode&&(fixedFlag=!1,openEf="fade"),$(document).ready(function(){$(".ulightbox").fancybox({padding:3,preload:5,openEffect:openEf,closeEffect:"elastic",nextEffect:"fade",prevEffect:"fade",openEasing:"linear",nextEasing:"linear",prevEasing:"linear",fixed:fixedFlag,helpers:{title:null,overlay:{opacity:.1,speedIn:0,speedOut:0},buttons:{}}}),$(".uphoto .ulightbox").fancybox({padding:3,preload:5,openEffect:openEf,closeEffect:"elastic",nextEffect:"fade",prevEffect:"fade",openEasing:"linear",nextEasing:"linear",prevEasing:"linear",fixed:fixedFlag,beforeShow:function(){var a=$(this.element).data("url");a&&(this.title='<a class="ulb-photopage-link" href="'+a+'">'+ulb.photoPage+"</a>");var b=$(this.element).attr("data-title"),c=$(this.element).attr("data-alt");setTimeout(function(){b&&$(".fancybox-image").attr("title",b),c&&$(".fancybox-image").attr("alt",c)},0)},helpers:{title:{type:"float"},overlay:{opacity:.1,speedIn:0,speedOut:0},buttons:{}}}),$(window).scroll(function(){$.browser.msie&&$.browser.version<10&&"BackCompat"==document.compatMode&&$.fancybox.reposition()})});