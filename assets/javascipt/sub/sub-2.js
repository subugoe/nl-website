
window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return r($.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&y[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+S.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in w);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)w.setAttribute("type",o=e[a]),r="text"!==w.type,r&&(w.value=k,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(g.appendChild(w),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=k)),_[e[a]]=!!r;return _}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,p,f="2.8.3",m={},h=!0,g=t.documentElement,v="modernizr",b=t.createElement(v),y=b.style,w=t.createElement("input"),k=":)",x={}.toString,$=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",C=E.split(" "),S=E.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},z={},_={},j={},M=[],P=M.slice,N=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=s),!!a},D=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return N("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},F=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),A={}.hasOwnProperty;p=i(A,"undefined")||i(A.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=P.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(P.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(P.call(arguments)))};return r}),z.flexbox=function(){return l("flexWrap")},z.flexboxlegacy=function(){return l("boxDirection")},z.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},z.canvastext=function(){return!(!m.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},z.webgl=function(){return!!e.WebGLRenderingContext},z.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",$.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},z.geolocation=function(){return"geolocation"in navigator},z.postmessage=function(){return!!e.postMessage},z.websqldatabase=function(){return!!e.openDatabase},z.indexedDB=function(){return!!l("indexedDB",e)},z.hashchange=function(){return F("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},z.history=function(){return!(!e.history||!history.pushState)},z.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},z.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},z.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(y.backgroundColor,"rgba")},z.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(y.backgroundColor,"rgba")||a(y.backgroundColor,"hsla")},z.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},z.backgroundsize=function(){return l("backgroundSize")},z.borderimage=function(){return l("borderImage")},z.borderradius=function(){return l("borderRadius")},z.boxshadow=function(){return l("boxShadow")},z.textshadow=function(){return""===t.createElement("div").style.textShadow},z.opacity=function(){return o("opacity:.55"),/^0.55$/.test(y.opacity)},z.cssanimations=function(){return l("animationName")},z.csscolumns=function(){return l("columnCount")},z.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+$.join(n+e)).slice(0,-e.length)),a(y.backgroundImage,"gradient")},z.cssreflections=function(){return l("boxReflect")},z.csstransforms=function(){return!!l("transform")},z.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},z.csstransitions=function(){return l("transition")},z.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},z.generatedcontent=function(){var e;return N(["#",v,"{font:0/0 a}#",v,':after{content:"',k,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},z.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},z.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},z.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},z.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},z.webworkers=function(){return!!e.Worker},z.applicationcache=function(){return!!e.applicationCache},z.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},z.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},z.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(x.call(t.createElementNS(T.svg,"animate")))},z.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(x.call(t.createElementNS(T.svg,"clipPath")))};for(var H in z)p(z,H)&&(d=H.toLowerCase(),m[d]=z[H](),M.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)p(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),b=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function s(e){e||(e=t);var r=o(e);return!b.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var l,u,d="3.7.0",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=b,s(t)}(this,t),m._version=f,m._prefixes=$,m._domPrefixes=S,m._cssomPrefixes=C,m.mq=D,m.hasEvent=F,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=N,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+M.join(" "):""),m}(this,this.document);var initMenus,mobilecheck;$.fx.speeds._default=250,$(function(){var e,t,n,r,o,i;return t=mobilecheck(),t&&($(".desktop-only").hide(),$(".mobile-only").show()),document.getElementById("page-1616")&&-1===window.location.search.indexOf("tx_solr")&&$("aside.infocontent").hide(),$("a img").parent("a").css("border-bottom",0),initMenus(),$(".tree li").click=function(e){var t;return"undefined"!=typeof piwikTracker?(t="GOK"+document.location.pathname+$(".GOKID",this).text(),piwikTracker.trackPageView(t)):void 0},"tx_solr"===location.search.substring(1,8)&&"undefined"!=typeof piwikTracker&&(o=location.search.split("&")[0].split("=")[1],i="Searchterm/"+o,piwikTracker.trackPageView(i),piwikTracker.setCustomVariable(1,"Suchbegriff",o,"page")),$(".header_toggle-nav").click(function(){return $(".wrap").toggleClass("-show-off-canvas"),!1}),$("body").click(function(){return $(".wrap").removeClass("-show-off-canvas")}),e=$(".header").height(),r=[],n=[],$(".pagination").each(function(){var e;return r.push($(this).offset().top),e=$(this).siblings("ol, ul"),n.push(e.length?e.offset().top+e.outerHeight()-99:0)}),$(window).scroll(function(){return $(this).scrollTop()>e?$(".colophon_top-link:not(.-visible)").addClass("-visible"):$(".colophon_top-link.-visible").removeClass("-visible"),$(".pagination").each(function(e,t){var o;return o=$(window).scrollTop(),o>r[e]&&o<n[e]?$(this).addClass("-fixed"):$(this).removeClass("-fixed")})}),$(".colophon_top-link").click(function(){return $("html, body").animate({scrollTop:0}),!1}),$(".pagination.-alphabet a").click(function(){var e,t,n;return e=$(this).closest(".pagination"),t=$(this).attr("href").split("#")[1],n=e.outerHeight()*(e.is(".-fixed")?1:3),$("html, body").animate({scrollTop:$("#"+t).offset().top-n}),!1}),$("a[href$=pdf]").click(function(){return window.open($(this).attr("href")),!1})}),initMenus=function(){return $(".nav_list.-secondary").hide(),$(".nav_list").has(".-current").show(),$(".nav_link.-current").siblings().show(),$(".nav_list").each(function(){return $("#"+this.id).show()}),$(".nav_link.-toggle").click(function(){var e;return $(this).toggleClass("-open").attr("aria-expanded","true"!==$(this).attr("aria-expanded")),e=$(this).next(".nav_list"),$(".nav_link").not(this).removeClass("-open"),$(".nav_list.-secondary").not(e).slideUp(),e.slideToggle(),!1})},mobilecheck=function(){var e;return e=!1,function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e};
$(function() {
  var $lis, $moreLinks, i, j, len, len1, li, link, ref;
  $moreLinks = $('.substaff_more-link');
  for (i = 0, len = $moreLinks.length; i < len; i++) {
    link = $moreLinks[i];
    $lis = $(link).siblings('ul').children();
    if ($lis.length < 6) {
      $(link).hide();
    } else {
      ref = $lis.slice(3);
      for (j = 0, len1 = ref.length; j < len1; j++) {
        li = ref[j];
        $(li).css({
          marginTop: -$(li).height(),
          opacity: 0,
          position: 'relative',
          "z-index": -9
        });
      }
    }
  }
  return $moreLinks.click(function() {
    $(this).slideUp(250).parent().find('li').css({
      marginTop: 0,
      opacity: 1,
      transition: 'margin-top .25s, opacity .25s',
      'z-index': 1
    });
    return false;
  });
});

(function() {
  var $areaList, $noResults, filterTimeout, filterVal, sys_language_uid;

  $areaList = {};

  $noResults = {};

  sys_language_uid = 0;

  filterVal = '';

  filterTimeout = null;

  $(function() {
    var $target, language;
    language = $(document).children('html').attr('lang');
    sys_language_uid = (language === 'de' ? 0 : 1);
    $target = $('.search_content.-subjects');
    $('.search_tab.-subjects').click(function() {
      var noResults;
      if (!$areaList.length) {
        $areaList = $('<ul class="search_areas"/>');
        $areaList.loadSubjects("/uploads/tx_subtabs/data-" + sys_language_uid + ".js");
        $target.prepend($areaList);
        noResults = language === 'de' ? 'Keine Treffer' : 'No results';
        $noResults = $("<p class=\"search_no-results\">" + noResults + "</p>").hide();
        return $target.prepend($noResults);
      } else {
        return $('#q').keyup();
      }
    });
    $('#q').bind('keypress', function(e) {
      if (e.keyCode === 13) {
        return false;
      }
    });
    return $('#q').keyup(function(e) {
      clearTimeout(filterTimeout);
      if ($target.is(':hidden')) {
        return;
      }
      return filterTimeout = setTimeout((function(_this) {
        return function() {
          return $areaList.filterSubjects($(_this).val());
        };
      })(this), 100);
    });
  });

  $.fn.loadSubjects = function(url) {
    return this.each(function() {
      var $this;
      $this = $(this);
      return $.getJSON(url, function(areas) {
        var $area, $areaLink, $subject, $subjectLink, $subjectList, $tag, $tagList, area, i, j, k, len, len1, len2, ref, ref1, subject, tag;
        for (i = 0, len = areas.length; i < len; i++) {
          area = areas[i];
          $area = $("<li class='search_area'/>");
          $areaLink = $("<a><span class='search_title'>" + area.titel + "</span></a>");
          $areaLink.attr('href', area.seite);
          $area.append($areaLink);
          $subjectList = $('<ul class="search_subjects"/>').hide();
          ref = area.faecher;
          for (j = 0, len1 = ref.length; j < len1; j++) {
            subject = ref[j];
            $subject = $("<li class='search_subject'/>");
            $subjectLink = $("<a><span class='search_title'>" + subject.titel + "</span></a>");
            $subjectLink.attr('href', subject.seite);
            $subject.append($subjectLink);
            $tagList = $('<ul class="search_tags"/>');
            ref1 = subject.tags;
            for (k = 0, len2 = ref1.length; k < len2; k++) {
              tag = ref1[k];
              $tag = $("<li class='search_tag'><span class='search_title'>" + tag + "</span></li>");
              $tagList.append($tag);
            }
            $subject.append($tagList);
            $subjectList.append($subject);
          }
          $area.append($subjectList);
          $this.append($area);
        }
        return $('#q').keyup();
      });
    });
  };

  $.fn.filterSubjects = function(val) {
    return this.each(function() {
      var $items, $this, tokens;
      $this = $(this);
      if (val === filterVal) {
        return;
      }
      tokens = val.toLowerCase().replace(/[\^$]/g, '').split(' ');
      filterVal = val;
      $items = $this.find('li');
      if (val.length > 2 && tokens !== ['']) {
        $this.clearHighlight();
        $items.each(function(index, item) {
          var show;
          show = true;
          $.each(tokens, function(index, token) {
            var $html, $link, $newHtml, regex;
            if ($(item).text().toLowerCase().indexOf(token) === -1) {
              show = false;
              return false;
            }
            if (token > '') {
              $link = $(item).find('.search_title:first');
              $html = $link.html();
              regex = new RegExp("(" + token + ")", "gi");
              $newHtml = $html.replace(regex, '\^$1\$');
              if ($html !== $newHtml) {
                return $link.html($newHtml);
              } else {
                show = false;
                return false;
              }
            }
          });
          if (show) {
            $(item).show().parents().show();
          } else {
            $(item).hide();
          }
        });
        $noResults.toggle($items.filter(':visible').length === 0);
        $this.html($this.html().replace(/\^/g, '<span class="search_highlight">').replace(/\$/g, '</span>'));
      } else {
        $this.clearHighlight();
        $items.filter('.search_area').show();
        $items.not('.search_area').hide();
        $noResults.hide();
      }
    });
  };

  $.fn.clearHighlight = function() {
    return this.each(function() {
      return $(this).find('.search_highlight').contents().unwrap();
    });
  };

}).call(this);

(function() {
  $(function() {
    $('.search_input').focus(function() {
      if ($('.search.-show-popup').length) {
        return;
      }
      $('.search').addClass('-show-popup');
      if ($('.search_navigation .-active').length === 0) {
        $('.search_navigation a:first').trigger('click', true);
      }
      return $('.search_content').css({
        'min-height': $('.search_navigation').height() + 'px'
      });
    });
    $('.search_input').change(function() {
      $('.search_input').val($(this).val());
      return $('.search_input-label').toggle($(this).val() === '');
    });
    $('.search, .main_left, .header_show-nav').click(function(e) {
      return e.stopPropagation();
    });
    $(window).add('.search_close').click(function() {
      $('.search_input').blur();
      return $('.search').removeClass('-show-popup');
    });
    $(document).bind('keydown', function(e) {
      if (e.keyCode === 27) {
        if ($('.search_input').val() === '') {
          return $(window).click();
        } else {
          return $('.search_input').val('').change();
        }
      }
    });
    $('.search_navigation a').click(function() {
      var $parent, target;
      target = $(this).attr('href').split('#')[1];
      $parent = $(this).parent('li');
      $('.search_navigation li').not($parent).removeClass('-active');
      $parent.addClass('-active');
      $('.search_content, .search_form').not('.-' + target).removeClass('-visible');
      $('.search_content, .search_form').filter('.-' + target).addClass('-visible');
      $('.search_form.-' + target + ' input').focus();
      return false;
    });
    $('.search_content.-catalogue input[type=radio]').click(function() {
      var link;
      link = $('.search_content.-catalogue input:checked').val();
      return $('.search_form.-catalogue').attr('action', link);
    });
    $('.search_form.-catalogue').submit(function() {
      var bixPix, get, link, str, url;
      str = $('#mytextbox').val();
      link = $('.search_content.-catalogue input:checked').val();
      if ($('#katalog-4').attr('checked') === 'checked' || $('#katalog-5').attr('checked') === 'checked') {
        get = escape(str);
      } else {
        get = encodeURIComponent(str);
      }
      url = link + get;
      if ($('.search_catalog-list label:first-child input:checked').length !== 0 && window.location.hostname === 'www.sub.uni-goettingen.de') {
        bixPix = document.createElement('img');
        bixPix.setAttribute('src', 'http://dbspixel.hbz-nrw.de/count?id=AF007&page=2');
        window.open(url);
      } else {
        if ($('.search_catalog-list input:checked').hasClass('-new-window')) {
          window.open(url);
        } else {
          location.href = url;
        }
      }
      return false;
    });
    return false;
  });

}).call(this);

$(function(){return $(".short-url_link").click(function(){var r;return r=$(this).parents(".short-url"),r.find(".short-url_popup").fadeToggle(),r.find(".short-url_input").select(),!1}),$("body").click(function(){return $(".short-url_popup").fadeOut()}),$(".short-url_popup").click(function(r){return!1})});