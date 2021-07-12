/*!
 * see https://github.com/jieyou/lazyload
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(window.jQuery||window.Zepto)}(function(t,e){var a,r,n=window,o=t(n),l={threshold:0,failure_limit:0,event:"scroll",effect:"show",effect_params:null,container:n,data_attribute:"original",data_srcset_attribute:"original-srcset",skip_invisible:!0,appear:i,load:i,vertical_only:!1,check_appear_throttle_time:300,url_rewriter_fn:i,no_fake_img_loader:!1,placeholder_data_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",placeholder_real_img:""};function i(){}function c(t,e){return(e._$container==o?("innerHeight"in n?n.innerHeight:o.height())+o.scrollTop():e._$container.offset().top+e._$container.height())<=t.offset().top-e.threshold}function f(t,e){return(e._$container==o?o.scrollTop():e._$container.offset().top)>=t.offset().top+e.threshold+t.height()}function _(e,a){var r=0;e.each(function(l,i){var _=e.eq(l);if(!(_.width()<=0&&_.height()<=0||"none"===_.css("display")))if(a.vertical_only)if(f(_,a));else if(c(_,a)){if(++r>a.failure_limit)return!1}else d();else if(f(_,a)||function(e,a){return(a._$container==o?t.fn.scrollLeft?o.scrollLeft():n.pageXOffset:a._$container.offset().left)>=e.offset().left+a.threshold+e.width()}(_,a));else if(c(_,a)||function(e,a){return(a._$container==o?o.width()+(t.fn.scrollLeft?o.scrollLeft():n.pageXOffset):a._$container.offset().left+a._$container.width())<=e.offset().left-a.threshold}(_,a)){if(++r>a.failure_limit)return!1}else d();function d(){_.trigger("_lazyload_appear"),r=0}})}function d(t){return t.filter(function(e){return!t.eq(e).data("_lazyload_loadStarted")})}r=Object.prototype.toString,a=function(t){return r.call(t).replace("[object ","").replace("]","")},t.fn.hasOwnProperty("lazyload")||(t.fn.lazyload=function(e){var r,c,f,s=this;return t.isPlainObject(e)||(e={}),t.each(l,function(r,i){var c=a(e[r]);-1!=t.inArray(r,["threshold","failure_limit","check_appear_throttle_time"])?"String"==c?e[r]=parseInt(e[r],10):"Number"!=c&&(e[r]=i):"container"==r?(e.hasOwnProperty(r)?e[r]==n||e[r]==document?e._$container=o:e._$container=t(e[r]):e._$container=o,delete e.container):!l.hasOwnProperty(r)||e.hasOwnProperty(r)&&c==a(l[r])||(e[r]=i)}),r="scroll"==e.event,f=0==e.check_appear_throttle_time?_:function(t,e){var a,r,n,o,l=0;return function(){a=this,r=arguments;var t=new Date-l;return o||(t>=e?i():o=setTimeout(i,e-t)),n};function i(){o=0,l=+new Date,n=t.apply(a,r),a=null,r=null}}(_,e.check_appear_throttle_time),c=r||"scrollstart"==e.event||"scrollstop"==e.event,s.each(function(a,r){var n=this,o=s.eq(a),l=o.attr("src"),f=o.attr("data-"+e.data_attribute),_=e.url_rewriter_fn==i?f:e.url_rewriter_fn.call(n,o,f),u=o.attr("data-"+e.data_srcset_attribute),h=o.is("img");if(o.data("_lazyload_loadStarted")||l==_)return o.data("_lazyload_loadStarted",!0),void(s=d(s));o.data("_lazyload_loadStarted",!1),h&&!l&&o.one("error",function(){o.attr("src",e.placeholder_real_img)}).attr("src",e.placeholder_data_img),o.one("_lazyload_appear",function(){var a,r=t.isArray(e.effect_params);function l(){a&&o.hide(),h?(u&&o.attr("srcset",u),_&&o.attr("src",_)):o.css("background-image",'url("'+_+'")'),a&&o[e.effect].apply(o,r?e.effect_params:[]),s=d(s)}o.data("_lazyload_loadStarted")||(a="show"!=e.effect&&t.fn[e.effect]&&(!e.effect_params||r&&0==e.effect_params.length),e.appear!=i&&e.appear.call(n,o,s.length,e),o.data("_lazyload_loadStarted",!0),e.no_fake_img_loader||u?(e.load!=i&&o.one("load",function(){e.load.call(n,o,s.length,e)}),l()):t("<img />").one("load",function(){l(),e.load!=i&&e.load.call(n,o,s.length,e)}).attr("src",_))}),c||o.on(e.event,function(){o.data("_lazyload_loadStarted")||o.trigger("_lazyload_appear")})}),c&&e._$container.on(e.event,function(){f(s,e)}),o.on("resize load",function(){f(s,e)}),t(function(){f(s,e)}),this})});


!function(){var a=jQuery.event.special,b="D"+ +new Date,c="D"+(+new Date+1);a.scrollstart={setup:function(){var c,d=function(b){var d=this,e=arguments;c?clearTimeout(c):(b.type="scrollstart",jQuery.event.dispatch.apply(d,e)),c=setTimeout(function(){c=null},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(b,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(b))}},a.scrollstop={latency:300,setup:function(){var b,d=function(c){var d=this,e=arguments;b&&clearTimeout(b),b=setTimeout(function(){b=null,c.type="scrollstop",jQuery.event.dispatch.apply(d,e)},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(c,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(c))}}}();


// Infinite Ajax Scroll, a jQuery plugin 1.0.2
(function(e){"use strict";Date.now=Date.now||function(){return+(new Date)},e.ias=function(t){function u(){var t;i.onChangePage(function(e,t,r){s&&s.setPage(e,r),n.onPageChange.call(this,e,r,t)});if(n.triggerPageThreshold>0)a();else if(e(n.next).attr("href")){var u=r.getCurrentScrollOffset(n.scrollContainer);E(function(){p(u)})}return s&&s.havePage()&&(l(),t=s.getPage(),r.forceScrollTop(function(){var n;t>1?(v(t),n=h(!0),e("html, body").scrollTop(n)):a()})),o}function a(){c(),n.scrollContainer.scroll(f)}function f(){var e,t;e=r.getCurrentScrollOffset(n.scrollContainer),t=h(),e>=t&&(m()>=n.triggerPageThreshold?(l(),E(function(){p(e)})):p(e))}function l(){n.scrollContainer.unbind("scroll",f)}function c(){e(n.pagination).hide()}function h(t){var r,i;return r=e(n.container).find(n.item).last(),r.size()===0?0:(i=r.offset().top+r.height(),t||(i+=n.thresholdMargin),i)}function p(t,r){var s;s=e(n.next).attr("href");if(!s)return n.noneleft&&e(n.container).find(n.item).last().after(n.noneleft),l();if(n.beforePageChange&&e.isFunction(n.beforePageChange)&&n.beforePageChange(t,s)===!1)return;i.pushPages(t,s),l(),y(),d(s,function(t,i){var o=n.onLoadItems.call(this,i),u;o!==!1&&(e(i).hide(),u=e(n.container).find(n.item).last(),u.after(i),e(i).fadeIn()),s=e(n.next,t).attr("href"),e(n.pagination).replaceWith(e(n.pagination,t)),b(),c(),s?a():l(),n.onRenderComplete.call(this,i),r&&r.call(this)})}function d(t,r,i){var s=[],o,u=Date.now(),a,f;i=i||n.loaderDelay,e.get(t,null,function(t){o=e(n.container,t).eq(0),0===o.length&&(o=e(t).filter(n.container).eq(0)),o&&o.find(n.item).each(function(){s.push(this)}),r&&(f=this,a=Date.now()-u,a<i?setTimeout(function(){r.call(f,t,s)},i-a):r.call(f,t,s))},"html")}function v(t){var n=h(!0);n>0&&p(n,function(){l(),i.getCurPageNum(n)+1<t?(v(t),e("html,body").animate({scrollTop:n},400,"swing")):(e("html,body").animate({scrollTop:n},1e3,"swing"),a())})}function m(){var e=r.getCurrentScrollOffset(n.scrollContainer);return i.getCurPageNum(e)}function g(){var t=e(".ias_loader");return t.size()===0&&(t=e('<div class="ias_loader">'+n.loader+"</div>"),t.hide()),t}function y(){var t=g(),r;n.customLoaderProc!==!1?n.customLoaderProc(t):(r=e(n.container).find(n.item).last(),r.after(t),t.fadeIn())}function b(){var e=g();e.remove()}function w(t){var r=e(".ias_trigger");return r.size()===0&&(r=e('<div class="ias_trigger"><a href="#">'+n.trigger+"</a></div>"),r.hide()),e("a",r).unbind("click").bind("click",function(){return S(),t.call(),!1}),r}function E(t){var r=w(t),i;n.customTriggerProc!==!1?n.customTriggerProc(r):(i=e(n.container).find(n.item).last(),i.after(r),r.fadeIn())}function S(){var e=w();e.remove()}var n=e.extend({},e.ias.defaults,t),r=new e.ias.util,i=new e.ias.paging(n.scrollContainer),s=n.history?new e.ias.history:!1,o=this;u()},e.ias.defaults={container:"#container",scrollContainer:e(window),item:".item",pagination:"#pagination",next:".next",noneleft:!1,loader:'<img src="images/loader.gif"/>',loaderDelay:600,triggerPageThreshold:3,trigger:"Load more items",thresholdMargin:0,history:!0,onPageChange:function(){},beforePageChange:function(){},onLoadItems:function(){},onRenderComplete:function(){},customLoaderProc:!1,customTriggerProc:!1},e.ias.util=function(){function i(){e(window).load(function(){t=!0})}var t=!1,n=!1,r=this;i(),this.forceScrollTop=function(i){e("html,body").scrollTop(0),n||(t?(i.call(),n=!0):setTimeout(function(){r.forceScrollTop(i)},1))},this.getCurrentScrollOffset=function(e){var t,n;return e.get(0)===window?t=e.scrollTop():t=e.offset().top,n=e.height(),t+n}},e.ias.paging=function(){function s(){e(window).scroll(o)}function o(){var t,s,o,f,l;t=i.getCurrentScrollOffset(e(window)),s=u(t),o=a(t),r!==s&&(f=o[0],l=o[1],n.call({},s,f,l)),r=s}function u(e){for(var n=t.length-1;n>0;n--)if(e>t[n][0])return n+1;return 1}function a(e){for(var n=t.length-1;n>=0;n--)if(e>t[n][0])return t[n];return null}var t=[[0,document.location.toString()]],n=function(){},r=1,i=new e.ias.util;s(),this.getCurPageNum=function(t){return t=t||i.getCurrentScrollOffset(e(window)),u(t)},this.onChangePage=function(e){n=e},this.pushPages=function(e,n){t.push([e,n])}},e.ias.history=function(){function n(){t=!!(window.history&&history.pushState&&history.replaceState),t=!1}var e=!1,t=!1;n(),this.setPage=function(e,t){this.updateState({page:e},"",t)},this.havePage=function(){return this.getState()!==!1},this.getPage=function(){var e;return this.havePage()?(e=this.getState(),e.page):1},this.getState=function(){var e,n,r;if(t){n=history.state;if(n&&n.ias)return n.ias}else{e=window.location.hash.substring(0,7)==="#/page/";if(e)return r=parseInt(window.location.hash.replace("#/page/",""),10),{page:r}}return!1},this.updateState=function(t,n,r){e?this.replaceState(t,n,r):this.pushState(t,n,r)},this.pushState=function(n,r,i){var s;t?history.pushState({ias:n},r,i):(s=n.page>0?"#/page/"+n.page:"",window.location.hash=s),e=!0},this.replaceState=function(e,n,r){t?history.replaceState({ias:e},n,r):this.pushState(e,n,r)}}})(jQuery);

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

+(function($) {
    var LS={
        get:function(dataKey){          
            if(window.localStorage){
                return localStorage.getItem(dataKey);
            }else{
                return $.cookie(dataKey);  
            }
        },
        set:function(key,value){            
            if(window.localStorage){
                localStorage[key]=value;
            }else{
                $.cookie(key,value);
            }
        },
        remove:function(key){
            if(window.localStorage){
                localStorage.removeItem(key);
            }else{
                $.cookie(key,undefined);
            }
        }
    }




    sideroll( TBUI.roll || '' )
    function sideroll(roll){
        var side = $('.sidebar')
        if( !side.length || !roll || $('body').hasClass('is-phone') ){
            return
        }

        roll = roll.split(' ')

        var sh = side.height()
        var bh = 20
        var item = side.children('.widget')
        for (var i = 0; i < roll.length; i++) {
            var dom = item.eq(roll[i]-1)
            if( !dom.length ){
                break
            }
            bh += dom.outerHeight(true)
        }
        
        $(window).scroll(function() {
            var doc = $(document)
            var wh = doc.height()
            var rt = doc.scrollTop()
            var st = side.offset().top
            
            var b = $('.footer').outerHeight() - 20

            var oft = 20
            var fh = 0
            if( $('body').hasClass('ui-navtop') ){
                oft = $('.header').outerHeight(true)+20
                fh = $('.header').outerHeight()
                st -= fh
                b += oft
            }
            

            if( rt > st+sh ){
                for (var i = 0; i < roll.length; i++) {
                    var dom = item.eq(roll[i]-1)

                    if( !dom.length ){
                        break
                    }

                    if( rt > wh-b-bh ){
                        dom.removeClass('-roll-top').addClass('-roll-bottom').css('top', wh-b-bh-fh-st+oft)
                    }else{
                        dom.removeClass('-roll-bottom').addClass('-roll-top').css('top', oft)
                    }

                    oft += dom.outerHeight(true)
                }
            }else{
                item.removeClass('-roll-top -roll-bottom').css('top', '')
            }
        })
    }





    $('[data-event="rewards"]').on('click', function(){
        $('.rewards-popover-mask, .rewards-popover').fadeIn()
    })

    $('[data-event="rewards-close"]').on('click', function(){
        $('.rewards-popover-mask, .rewards-popover').fadeOut()
    })







    if( $('#focusslide').length ){

        var hswiper = new Swiper('#focusslide', {
            initialSlide: 0,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })

        hswiper.el.onmouseover = function(){
            hswiper.autoplay.stop()
        }
        hswiper.el.onmouseleave = function(){
            hswiper.autoplay.start()
        }


    }




    if( $('.article-content img, .woocommerce-Tabs-panel--description img').length ){

        var pics = $('.article-content img, .woocommerce-Tabs-panel--description img').map(function(index, elem) {
            var prt = $(this).parent()
            var newsrc = prt.attr('href')
            var naw = prt[0].tagName == 'A' && /.(jpg|jpeg|webp|svg|bmp|png|gif)$/.test(newsrc.toLowerCase())
            return naw ? newsrc : $(this).attr('src')
        })

        var timer = null

        $('.article-content img, .woocommerce-Tabs-panel--description img').each(function(index, el) {

            var prt = $(this).parent()
            var newsrc = prt.attr('href')
            var naw = prt[0].tagName == 'A' && /.(jpg|jpeg|webp|svg|bmp|png|gif)$/.test(newsrc.toLowerCase())
            
            if( naw ){
                prt.on('click', function(){
                    return false
                })
            }

            $(this).on('click', function(){

                if( prt[0].tagName !== 'A' || naw ){

                    clearTimeout(timer)

                    if( naw ){
                        pics[index] = newsrc
                    }
                        
                    var imgs = ''
                    for (var i = 0; i < pics.length; i++) {
                        imgs += '<div class="swiper-slide"><div class="swiper-zoom-container"><img src="'+ pics[i] +'"></div></div>'
                    }

                    var code = '<div class="swiper-container article-swiper-container">\
                        <div class="swiper-wrapper">'+ imgs +'</div>\
                        <div class="swiper-pagination"></div>\
                    </div>'

                    $('body').addClass('swiper-fixed').append(code)

                    var aswiper = new Swiper('.article-swiper-container', {
                        initialSlide: index,
                        zoom: {
                            maxRatio: 5
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'fraction',
                        },
                        on:{
                            click: function(event){
                                timer = setTimeout(function(){
                                    $('body').removeClass('swiper-fixed')
                                    $('.article-swiper-container').remove()
                                    aswiper.destroy(true,true)
                                },50)
                            },
                            slideNextTransitionStart: function(event){
                                $('.article-swiper-container .swiper-slide-prev img').addClass('article-swiper-no-transition')
                            },
                            slidePrevTransitionStart: function(event){
                                $('.article-swiper-container .swiper-slide-next img').addClass('article-swiper-no-transition')
                            },
                            slideChange: function(event){
                                $('.article-swiper-container .article-swiper-no-transition').removeClass('article-swiper-no-transition')
                            }
                        },
                    })

                    return false
                    
                }
            
            })
        })
    
    }



    /* 
     * 
     * ====================================================================================================
    */
    $('.m-search').on('click', function(){
        $('.search-form').slideToggle(200, function(){
            if( $('.m-search').css('display') == 'block' ){
                $('.search-form .form-control').focus()
            }
        })
    })



    $('.navmore').on('click', function(){
        $('body').toggleClass('navshows');
    })


    $('body').append('<div class="rollto"><a href="javascript:;"><i class="glyphicon glyphicon-chevron-up"></i></a></div>')

    // lazy avatar
    $('.content .avatar').lazyload({
        placeholder: TBUI.uri + '/images/avatar-default.png',
        event: 'scroll',
        threshold : 1000
    });

    $('.sidebar .avatar').lazyload({
        placeholder: TBUI.uri + '/images/avatar-default.png',
        event: 'scroll',
        threshold : 1000
    });

    $('.content .thumb').lazyload({
        placeholder: TBUI.uri + '/images/thumbnail.png',
        event: 'scroll',
        threshold : 1000,
    });

    $('.sidebar .thumb').lazyload({
        placeholder: TBUI.uri + '/images/thumbnail.png',
        event: 'scroll',
        threshold : 1000
    });

    $('.content .wp-smiley').lazyload({
        event: 'scroll',
        threshold : 1000
    });

    $('.sidebar .wp-smiley').lazyload({
        event: 'scroll',
        threshold : 1000
    });

    $('#postcomments img').lazyload({
        event: 'scroll',
        threshold : 1000
    });


    var elments = {
        footer: $('.footer')
    }

    $('.feed-weixin').popover({
        placement: $('body').hasClass('ui-navtop')?'bottom':'right',
        trigger: 'hover',
        container: 'body',
        html: true
    })

    if( Number(TBUI.ajaxpager) ){
        $.ias({
            triggerPageThreshold: TBUI.ajaxpager?Number(TBUI.ajaxpager)+1:5,
            history: false,
            container : '.content',
            item: '.excerpt',
            pagination: '.pagination',
            next: '.next-page a',
            loader: '<div class="pagination-loading"><img src="'+TBUI.uri+'/images/ajax-loader.gif"></div>',
            trigger: 'More',
            onRenderComplete: function() {
                $('.excerpt .thumb').each(function(index, el) {
                    $(this).lazyload({
                        placeholder: TBUI.uri + '/images/thumbnail.png',
                        threshold: 1000
                    });
                });
            }
        });
    }


    /* 
     * page search
     * ====================================================
    */
    if( $('body').hasClass('search-results') ){
        var val = $('.search-form .form-control').val()
        var reg = eval('/'+val+'/i')
        $('.excerpt h2 a, .excerpt .note').each(function(){
            $(this).html( $(this).text().replace(reg, function(w){ return '<span style="color:#FF5E52;">'+w+'</span>' }) )
        })
    }

    

    $('.excerpt header small').each(function() {
        $(this).tooltip({
            container: 'body',
            title: '此文有 ' + $(this).text() + '张 图片'
        })
    })

    $('.article-tags a, .post-tags a').each(function() {
        $(this).tooltip({
            container: 'body',
            placement: 'bottom',
            title: '查看关于 ' + $(this).text() + ' 的文章'
        })
    })

    $('.cat').each(function() {
        $(this).tooltip({
            container: 'body',
            title: '查看关于 ' + $(this).text() + ' 的文章'
        })
    })

    $('.widget_tags a').tooltip({
        container: 'body'
    })

    $('.readers a, .widget_comments a').tooltip({
        container: 'body',
        placement: 'top'
    })

    $('.article-meta li:eq(1) a').tooltip({
        container: 'body',
        placement: 'bottom'
    })
    $('.post-edit-link').tooltip({
        container: 'body',
        placement: 'right',
        title: '去后台编辑此文章'
    })


    if ($('.article-content').length){
        $('.article-content img').attr('data-tag', 'bdshare')

        video_ok()
        $(window).resize(function(event) {
            video_ok()
        });
    }

    function video_ok(){
        $('.article-content embed, .article-content video, .article-content iframe').each(function(){
            var w = $(this).attr('width'),
                h = $(this).attr('height')
            if( h ){
                $(this).css('height', $(this).width()/(w/h))
            }
        })
    }


    $('.rollto a').on('click', function() {
        scrollTo()
    })

    $(window).scroll(function() {
        var scroller = $('.rollto');
        document.documentElement.scrollTop + document.body.scrollTop > 200 ? scroller.fadeIn() : scroller.fadeOut();
    })

    /* functions
     * ====================================================
     */
    function scrollTo(name, speed) {
        if (!speed) speed = 300
        if (!name) {
            $('html,body').animate({
                scrollTop: 0
            }, speed)
        } else {
            if ($(name).length > 0) {
                $('html,body').animate({
                    scrollTop: $(name).offset().top
                }, speed)
            }
        }
    }
    

    var islogin = false
    if( $('body').hasClass('logged-in') ) islogin = true

    /* event click
     * ====================================================
     */
    $(document).on('click', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            _ta = $(target)

        if (_ta.hasClass('disabled')) return
        if (_ta.parent().attr('data-event')) _ta = $(_ta.parent()[0])
        if (_ta.parent().parent().attr('data-event')) _ta = $(_ta.parent().parent()[0])

        var type = _ta.attr('data-event')

        switch (type) {
            case 'like':
                var pid = _ta.attr('data-pid')
                if ( !pid || !/^\d{1,}$/.test(pid) ) return;
                
                if( !islogin ){
                    var lslike = LS.get('_likes') || ''
                    if( lslike.indexOf(','+pid+',')!==-1 ) return alert('你已赞！')

                    if( !lslike ){
                        LS.set('_likes', ','+pid+',')
                    }else{
                        if( lslike.length >= 160 ){
                            lslike = lslike.substring(0,lslike.length-1)
                            lslike = lslike.substr(1).split(',')
                            lslike.splice(0,1)
                            lslike.push(pid)
                            lslike = lslike.join(',')
                            LS.set('_likes', ','+lslike+',')
                        }else{
                            LS.set('_likes', lslike+pid+',')
                        }
                    }
                }

                $.ajax({
                    url: TBUI.uri + '/actions/index.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        key: 'like',
                        pid: pid
                    },
                    success: function(data, textStatus, xhr) {
                        //called when successful
                        // console.log(data)
                        if (data.error) return false;
                        // console.log( data.response )
                        // if( data.type === 1 ){
                        _ta.toggleClass('actived')
                        _ta.find('span').html(data.response)
                        // }
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        //called when there is an error
                        console.log(xhr)
                    }
                });

                break;
            case 'login':
                $('#modal-login').modal('show')


                break;
        }
    })
	
})(jQuery);



;(function($){

    $('.commentlist .url').attr('target','_blank')


    var $commentform   = $('#commentform')
        , $commentlist = $('.commentlist')
        , $submit      = $commentform.find('#submit')
        , $comment     = $commentform.find('#comment')
        , $respond     = $('#respond')

    



    $('.comment-reply-link').click(function(){
        var docancel = $(this).hasClass('active')

        $commentform = $('#commentform').clone(true)
        $submit = $commentform.find('#submit')
        $comment = $commentform.find('#comment')

        $('#commentform').remove()

        if( docancel ){
            $(this).html('回复').removeClass('active')
            $respond.append( $commentform )
        }else{
            $('.comment-reply-link.active').html('回复').removeClass('active')
            $(this).html('取消').addClass('active')
            $(this).parent().after( $commentform )
            $comment.focus()
        }

        $commentform.find('#comment_parent').val( docancel ? 0 : $(this).data('commentid') )
        $comment.attr('placeholder', docancel ? $comment.data('placeholder') : $(this).data('replyto'))

        return false
    })


    $commentform.submit(function() {
        if( $submit.attr('disabled') ){
            tip('评论过快，请稍后')
            return false 
        }

        var vsubmit = $commentform.find('[name="vcode"]').length

        if( vsubmit ){
            var vcode = Number($commentform.find('[name="vcode"]').val())
            var vcode1 = Number($commentform.find('[name="vcode1"]').val())
            var vcode2 = Number($commentform.find('[name="vcode2"]').val())
            if( !vcode || vcode1+vcode2!=vcode ){
                tip('验证码输入错误')
                return false 
            }
        }

        // BUTTON STATUS
        $submit.attr('disabled', true)

        $.ajax({
            url: TBUI.uri + '/modules/comment.php',
            // data: $commentform.serialize(),
            data: new FormData($commentform[0]),
            type: $commentform.attr('method'),
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            processData : false,
            contentType : false,
            error: function(request) {},
            success: function(data) {

                // IF ERROR
                if( data.error ){
                    tip(data.msg)
                    $submit.attr('disabled', false)
                    return false
                }

                var newcomment = data.data

                // INSERT COMMENT
                if( !$commentlist.length ){
                    $respond.after('<ol class="commentlist">'+ newcomment +'</ol>')
                }else if( Number($commentform.find('#comment_parent').val()) ){
                    var box = $('#comment-'+$commentform.find('#comment_parent').val())
                    if( box.find('.children').length ){
                        box.find('.children').prepend( newcomment )
                    }else{
                        box.append('<ul class="children">'+ newcomment +'</ul>')
                    }
                    // $('.comment-reply-link.active').click()
                }else{
                    $commentlist.prepend( newcomment )
                }

                // DELETE TEXTAREA
                $comment.val('')

                if( vsubmit ){
                    $commentform.find('[name="vcode"]').val('')
                    var vcode1 = Math.floor(Math.random()*9+1)
                    var vcode2 = Math.floor(Math.random()*9+1)
                    $commentform.find('.-item-vcode span').html(vcode1+'+'+vcode2+'=')
                    $commentform.find('[name="vcode1"]').val( vcode1 )
                    $commentform.find('[name="vcode2"]').val( vcode2 )
                }

                $submit.attr('disabled', false)
            }
        })
        return false
    })


    function tip(msg){
        var $tips = $respond.find('.comt-tips')
        if( !$tips.length ){
            $respond.append('<div class="comt-tips"></div>')
            $tips = $respond.find('.comt-tips')
        }
        $tips.stop(true,true).html(msg).css('margin-left', ($tips.width()/2+30)*-1).fadeIn(300).delay(2000).fadeOut(300)
    }

})(jQuery);