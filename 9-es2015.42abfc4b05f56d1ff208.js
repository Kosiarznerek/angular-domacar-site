(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3E0/":function(t,n,e){"use strict";var o=e("D0XW"),i=e("7o/Q"),r=e("WMd4");function a(t,n=o.a){var e;const i=(e=t)instanceof Date&&!isNaN(+e)?+t-n.now():Math.abs(t);return t=>t.lift(new c(i,n))}e.d(n,"a",(function(){return a}));class c{constructor(t,n){this.delay=t,this.scheduler=n}call(t,n){return n.subscribe(new s(t,this.delay,this.scheduler))}}class s extends i.a{constructor(t,n,e){super(t),this.delay=n,this.scheduler=e,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const n=t.source,e=n.queue,o=t.scheduler,i=t.destination;for(;e.length>0&&e[0].time-o.now()<=0;)e.shift().notification.observe(i);if(e.length>0){const n=Math.max(0,e[0].time-o.now());this.schedule(t,n)}else this.unsubscribe(),n.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(s.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const n=this.scheduler,e=new l(n.now()+this.delay,t);this.queue.push(e),!1===this.active&&this._schedule(n)}_next(t){this.scheduleNotification(r.a.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(r.a.createComplete()),this.unsubscribe()}}class l{constructor(t,n){this.time=t,this.notification=n}}},"ct+p":function(t,n,e){"use strict";e.r(n);var o=e("ofXK"),i=e("jtHE"),r=e("z6cu"),a=e("fXoL");const c={target:null,action:"click",duration:650,easing:"easeInOutQuad",offset:0,offsetMap:new Map},s={easeInQuad:t=>t*t,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t*t:(4-2*t)*t-1,easeInCubic:t=>t*t*t,easeOutCubic:t=>--t*t*t+1,easeInOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1- --t*t*t*t,easeInOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1+--t*t*t*t*t,easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,easeOutElastic:t=>Math.pow(2,-10*t)*Math.sin((t-.25)*(2*Math.PI)/1)+1};function l(t){return t===window}class p{constructor(t,n,e,o,r,a){this._container=t,this._listenerTarget=n,this._isWindow=e,this._to=o,this._options=r,this._isBrowser=a,this._loop=()=>{this._timeLapsed+=this._tick,this._percentage=this._timeLapsed/this._options.duration,this._percentage=this._percentage>1?1:this._percentage,this._position=this._startPosition+(this._startPosition-this._to<=0?1:-1)*this._distance*s[this._options.easing](this._percentage),null!==this._lastPosition&&this._position===this._lastPosition?this.stop():(this._source$.next(this._position),this._isWindow?this._listenerTarget.scrollTo(0,Math.floor(this._position)):this._container.scrollTop=Math.floor(this._position),this._lastPosition=this._position)},this._tick=16,this._interval=null,this._lastPosition=null,this._timeLapsed=0,this._windowScrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,this._startPosition=this._container?this._isWindow?this._windowScrollTop:this._container.scrollTop:this._windowScrollTop,this._container&&!this._isWindow&&(this._to=this._to-this._container.getBoundingClientRect().top+this._startPosition);const c=this._startPosition-this._to;this._distance=this._container?Math.abs(this._startPosition-this._to):this._to,this._mappedOffset=this._options.offset,this._isBrowser&&this._options.offsetMap.forEach((t,n)=>this._mappedOffset=window.innerWidth>n?t:this._mappedOffset),this._distance+=this._mappedOffset*(c<=0?1:-1),this._source$=new i.a}start(){return clearInterval(this._interval),this._interval=setInterval(this._loop,this._tick),this._source$.asObservable()}stop(){clearInterval(this._interval),this._interval=null,this._source$.complete()}}let g=(()=>{class t{constructor(t,n){this._document=t,this._platformId=n,this._interruptiveEvents=["mousewheel","DOMMouseScroll","touchstart"]}scrollTo(t){return Object(o.u)(this._platformId)?this._start(t):(new i.a).asObservable()}_start(t){const n=Object.assign({},c,t);this._animation&&this._animation.stop();const e=this._getNode(n.target);if(n.target&&!e)return Object(r.a)("Unable to find Target Element");const i=this._getContainer(n,e);if(n.container&&!i)return Object(r.a)("Unable to find Container Element");const a=this._getListenerTarget(i)||window;let s=i?i.getBoundingClientRect().top:0;e&&(s=l(a)?e.offsetTop:e.getBoundingClientRect().top),this._animation=new p(i,a,l(a),s,n,Object(o.u)(this._platformId));const g=()=>this._animation.stop();this._addInterruptiveEventListeners(a,g);const d=this._animation.start();return this._subscribeToAnimation(d,a,g),d}_subscribeToAnimation(t,n,e){const o=t.subscribe(()=>{},()=>{},()=>{this._removeInterruptiveEventListeners(this._interruptiveEvents,n,e),o.unsubscribe()})}_getContainer(t,n){let e=null;return t.container?e=this._getNode(t.container,!0):n&&(e=this._getFirstScrollableParent(n)),e}_addInterruptiveEventListeners(t,n){t||(t=window),this._interruptiveEvents.forEach(e=>t.addEventListener(e,n,!!this._supportPassive()&&{passive:!0}))}_supportPassive(){let t=!1;try{const n=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}catch(n){}return t}_removeInterruptiveEventListeners(t,n,e){n||(n=window),t.forEach(t=>n.removeEventListener(t,e))}_getFirstScrollableParent(t){let n=window.getComputedStyle(t);const e=/(auto|scroll|overlay)/;if("fixed"===n.position)return null;for(let o=t;o=o.parentElement;null)if(n=window.getComputedStyle(o),"absolute"!==n.position&&"hidden"!==n.overflow&&"hidden"!==n.overflowY&&(e.test(n.overflow+n.overflowY)||"BODY"===o.tagName))return o;return null}_getNode(t,n=!1){let e;var o;return"string"==typeof(o=t)||o instanceof String?e=!n||"body"!==t&&"BODY"!==t?this._document.getElementById(function(t){return"#"===t.substring(0,1)?t.substring(1):t}(t)):this._document.body:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}(t)?e=this._document.getElementById(String(t)):function(t){return t instanceof a.l}(t)?e=t.nativeElement:function(t){return t instanceof HTMLElement}(t)&&(e=t),e}_getListenerTarget(t){return t?this._isDocumentBody(t)?window:t:null}_isDocumentBody(t){return"BODY"===t.tagName.toUpperCase()}}return t.\u0275fac=function(n){return new(n||t)(a.Tb(o.d),a.Tb(a.B))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),d=(()=>{class t{static forRoot(){return{ngModule:t,providers:[g]}}}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)}}),t})();var u=e("XNiG"),b=e("HDdC"),h=e("D0XW"),f=e("DH7j");function m(t){const{subscriber:n,counter:e,period:o}=t;n.next(e),this.schedule({subscriber:n,counter:e+1,period:o},o)}var O=e("1G5W"),x=e("lJxs"),_=e("vkgz"),P=e("3E0/"),w=e("tyNb");const M=["backgroundOverlay"],C=["contentWrapper"];let v=(()=>{class t{constructor(t){this._scrollToService=t,this._ngOnDestroy$=new u.a}ngOnInit(){this.onWindowScroll(),function(t=0,n=h.a){var e;return e=t,(Object(f.a)(e)||!(e-parseFloat(e)+1>=0)||t<0)&&(t=0),n&&"function"==typeof n.schedule||(n=h.a),new b.a(e=>(e.add(n.schedule(m,t,{subscriber:e,counter:0,period:t})),e))}(5e3).pipe(Object(O.a)(this._ngOnDestroy$),Object(x.a)(t=>this.backgroundOverlay.nativeElement),Object(x.a)(t=>t.getElementsByTagName("img")),Object(x.a)(t=>t.item(t.length-1)),Object(_.a)(t=>t.style.opacity="0"),Object(P.a)(500)).subscribe(t=>{t.style.opacity="1",t.parentElement.insertBefore(t,t.parentElement.children[0])})}ngOnDestroy(){this._ngOnDestroy$.next()}onWindowScroll(t){const n=this.backgroundOverlay.nativeElement,e=this._rescale(window.scrollY,0,n.clientHeight,-100,100);n.style.transform=`translate3d(0px, ${e}px, 0px)`}scrollDown(){this._scrollToService.scrollTo({offset:this.contentWrapper.nativeElement.clientHeight-window.scrollY,easing:"easeInOutQuad"})}_rescale(t,n,e,o,i){return(t-n)*(i-o)/(e-n)+o}}return t.\u0275fac=function(n){return new(n||t)(a.Kb(g))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-banner"]],viewQuery:function(t,n){var e;1&t&&(a.tc(M,!0),a.tc(C,!0)),2&t&&(a.lc(e=a.Yb())&&(n.backgroundOverlay=e.first),a.lc(e=a.Yb())&&(n.contentWrapper=e.first))},hostBindings:function(t,n){1&t&&a.Xb("scroll",(function(t){return n.onWindowScroll(t)}),!1,a.oc)},decls:16,vars:1,consts:[[1,"content-wrapper"],["contentWrapper",""],[1,"background-overlay"],["backgroundOverlay",""],["alt","","src","assets/images/baner/slide1.jpg"],["alt","","src","assets/images/baner/slide2.jpg"],["alt","","src","assets/images/baner/slide3.jpg"],[1,"container"],[1,"row"],[1,"col-12"],["ontouchstart","",1,"tt_button",3,"click"],["ontouchstart","",1,"tt_button_white",3,"routerLink"]],template:function(t,n){1&t&&(a.Pb(0,"div",0,1),a.Pb(2,"div",2,3),a.Lb(4,"img",4),a.Lb(5,"img",5),a.Lb(6,"img",6),a.Ob(),a.Pb(7,"div",7),a.Pb(8,"div",8),a.Pb(9,"div",9),a.Pb(10,"h1"),a.xc(11,"Cz\u0119\u015bci od sprawdzonych sprzedawc\xf3w"),a.Ob(),a.Pb(12,"a",10),a.Xb("click",(function(){return n.scrollDown()})),a.xc(13," Przejd\u017a ni\u017cej "),a.Ob(),a.Pb(14,"a",11),a.xc(15," O nas "),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.zb(14),a.ec("routerLink","/generals/about"))},directives:[w.f],styles:[".content-wrapper[_ngcontent-%COMP%]{height:calc(100vh - 89px);width:100%;display:flex;align-items:center;justify-content:center;margin:0;padding:0;background-color:#f7f7f7;position:relative;overflow:hidden}.content-wrapper[_ngcontent-%COMP%]   .background-overlay[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:calc(100% + 100px)}.content-wrapper[_ngcontent-%COMP%]   .background-overlay[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translateX(-50%);top:0;transition:opacity .4s ease-in-out;-o-object-fit:contain;object-fit:contain}.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{z-index:1}.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;text-align:left;letter-spacing:0;font-weight:700;color:#fff;text-decoration:none;white-space:normal;max-width:565px;margin:0 0 40px;font-size:52px;line-height:58px}@media (max-width:525px){.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10vw;line-height:11vw}}.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tt_button[_ngcontent-%COMP%]{letter-spacing:0;font-weight:900;border-radius:0;padding:17px 25px;text-align:center!important;line-height:normal!important;border:2px solid #3c5c9e;background-color:#3c5c9e;outline:none!important;transition:.3s!important;min-width:170px;font-size:14px;color:#fff;text-transform:uppercase;box-sizing:border-box;cursor:pointer;box-shadow:none;text-decoration:none;margin:0 10px 0 0;display:inline-block}.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tt_button[_ngcontent-%COMP%]:active{color:#3c5c9e;background:transparent}@media (hover){.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tt_button[_ngcontent-%COMP%]:hover{color:#3c5c9e;background:transparent}}.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tt_button_white[_ngcontent-%COMP%]{letter-spacing:0;font-weight:900;margin:0;border-radius:0;padding:17px 25px;color:#3c5c9e;text-align:center!important;line-height:normal!important;background:#fff;border:2px solid #fff;outline:none!important;transition:.3s!important;min-width:170px;font-size:14px;text-transform:uppercase;box-sizing:border-box;cursor:pointer;box-shadow:none;text-decoration:none;display:inline-block}.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tt_button_white[_ngcontent-%COMP%]:active{color:#fff;background:transparent}@media (hover){.content-wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tt_button_white[_ngcontent-%COMP%]:hover{color:#fff;background:transparent}}"]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-product-search"]],decls:27,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"col-md-6"],["placeholder","Wpisz nazw\u0119 lub numer cz\u0119\u015bci","type","text"],["ontouchstart","","type","button"],[1,"fas","fa-search"],[1,"col-md-4"],["placeholder","Marka","type","dropdown"],["placeholder","Model","type","dropdown"],["placeholder","Typ","type","dropdown"],["ontouchstart",""]],template:function(t,n){1&t&&(a.Pb(0,"section"),a.Pb(1,"div",0),a.Pb(2,"div",1),a.Pb(3,"div",2),a.Pb(4,"h2"),a.xc(5,"Wyszukiwarka cz\u0119\u015bci"),a.Ob(),a.Pb(6,"div",1),a.Pb(7,"div",3),a.Lb(8,"input",4),a.Ob(),a.Pb(9,"div",3),a.Pb(10,"button",5),a.Lb(11,"i",6),a.xc(12," Szukaj "),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(13,"div",1),a.Pb(14,"div",2),a.Pb(15,"h2"),a.xc(16,"Cz\u0119\u015bci do pojazdu"),a.Ob(),a.Pb(17,"div",1),a.Pb(18,"div",7),a.Lb(19,"input",8),a.Ob(),a.Pb(20,"div",7),a.Lb(21,"input",9),a.Ob(),a.Pb(22,"div",7),a.Lb(23,"input",10),a.Ob(),a.Ob(),a.Pb(24,"button",11),a.Lb(25,"i",6),a.xc(26," Szukaj "),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob())},styles:["section[_ngcontent-%COMP%]{background-color:#f7f7f7;padding:80px 0 50px;position:relative;font-family:Montserrat,serif!important;color:#9e9e9e;font-weight:400;font-size:14px;text-align:left;line-height:24px}.container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{margin-bottom:30px}input[_ngcontent-%COMP%]{border:2px solid #3c5c9e;background:#fff 0 0;text-transform:inherit;width:100%;box-sizing:border-box;min-width:100%;margin-bottom:10px;box-shadow:none;letter-spacing:0;outline:none;height:50px;padding:0 5px;text-align:left;font-size:14px;font-weight:900;color:#333;font-family:museo-sans;resize:none;overflow:hidden}input[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{font-family:museo-sans;color:#757575}input[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder{font-family:museo-sans;color:#757575}input[_ngcontent-%COMP%]::-ms-input-placeholder, textarea[_ngcontent-%COMP%]::-ms-input-placeholder{font-family:museo-sans;color:#757575}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{font-family:museo-sans;color:#757575}h2[_ngcontent-%COMP%]{letter-spacing:-.7px;color:#2f2f2f;font-weight:700;font-size:34px;line-height:45px;text-align:center}button[_ngcontent-%COMP%]{letter-spacing:0;font-weight:900;margin:0;border-radius:0;padding:17px 25px;color:#3c5c9e;text-align:center!important;line-height:normal!important;background:#fff;border:2px solid #3c5c9e;outline:none!important;transition:.3s!important;font-size:14px;text-transform:uppercase;box-sizing:border-box;cursor:pointer;box-shadow:none;text-decoration:none;display:block;width:100%}button[_ngcontent-%COMP%]:active{color:#fff;background:#3c5c9e}@media (hover){button[_ngcontent-%COMP%]:hover{color:#fff;background:#3c5c9e}}"]}),t})(),z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-services-icons"]],decls:24,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-lg-4"],[1,"wpb_wrapper"],[1,"far","fa-clock"],[1,"far","fa-calendar-alt"],[1,"fas","fa-boxes"]],template:function(t,n){1&t&&(a.Pb(0,"section"),a.Pb(1,"div",0),a.Pb(2,"div",1),a.Pb(3,"div",2),a.Pb(4,"div",3),a.Lb(5,"i",4),a.Pb(6,"h4"),a.xc(7,"Szybka obs\u0142uga"),a.Ob(),a.Pb(8,"p"),a.xc(9," Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor. "),a.Ob(),a.Ob(),a.Ob(),a.Pb(10,"div",2),a.Pb(11,"div",3),a.Lb(12,"i",5),a.Pb(13,"h4"),a.xc(14,"Terminowa wysy\u0142ka"),a.Ob(),a.Pb(15,"p"),a.xc(16," Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor. "),a.Ob(),a.Ob(),a.Ob(),a.Pb(17,"div",2),a.Pb(18,"div",3),a.Lb(19,"i",6),a.Pb(20,"h4"),a.xc(21,"Du\u017cy asortyment"),a.Ob(),a.Pb(22,"p"),a.xc(23," Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor. "),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob())},styles:["section[_ngcontent-%COMP%]{background-color:#f7f7f7;padding:10px 0 30px;position:relative;font-family:Montserrat,serif!important;color:#9e9e9e;font-weight:400;font-size:14px;text-align:left;line-height:24px}.wpb_wrapper[_ngcontent-%COMP%]{margin-bottom:50px}.wpb_wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:50px;float:left;width:50px;height:50px;text-align:center;line-height:1;margin:-15px 30px 0 0;color:#4362a1}.wpb_wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2f2f2f;text-transform:none;font-size:16px;margin-top:0;font-weight:700;line-height:1;margin-bottom:20px}.wpb_wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-left:80px;margin-bottom:0;font-family:museo-sans;font-weight:100}"]}),t})(),k=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-why-us"]],decls:14,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-md-5"],["ontouchstart","",3,"href"],[1,"fas","fa-plus"],[1,"col-md-7"],[1,"image"]],template:function(t,n){1&t&&(a.Pb(0,"section"),a.Pb(1,"div",0),a.Pb(2,"div",1),a.Pb(3,"div",2),a.Pb(4,"h2"),a.xc(5,"Dlaczego my"),a.Ob(),a.Pb(6,"p"),a.xc(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque libero lectus, vel dapibus augue faucibus eu. Integer pharetra, turpis id laoreet accumsan, eros libero dapibus nibh, lobortis ultricies nibh eros eu purus. "),a.Ob(),a.Pb(8,"a",3),a.Pb(9,"span"),a.xc(10,"Przeczytaj wi\u0119cej"),a.Ob(),a.Lb(11,"i",4),a.Ob(),a.Ob(),a.Pb(12,"div",5),a.Lb(13,"div",6),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.zb(8),a.ec("href","/generals/about",a.rc))},styles:["section[_ngcontent-%COMP%]{background-color:#fff;padding:80px 0;position:relative;font-family:Montserrat,serif!important;color:#9e9e9e;font-weight:400;font-size:14px;line-height:24px}h2[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{text-align:left}h2[_ngcontent-%COMP%]{letter-spacing:-.7px;color:#2f2f2f;font-weight:700;font-size:34px;line-height:45px;margin-bottom:30px}@media (min-width:960px){h2[_ngcontent-%COMP%]{margin-top:35px!important}}p[_ngcontent-%COMP%]{font-size:15px;text-align:left;margin:0 0 30px;font-weight:100}a[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:museo-sans}a[_ngcontent-%COMP%]{color:#3c5c9e;background:transparent;border:2px solid #3c5c9e;transition:.3s!important;text-align:center;min-width:170px;font-size:14px;font-weight:900;padding:17px 25px;margin:auto;text-transform:uppercase;box-sizing:border-box;line-height:1;cursor:pointer;outline:0;text-decoration:none;display:inline-block}a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus{background-color:#3c5c9e;color:#fff}@media (hover){a[_ngcontent-%COMP%]:hover{background-color:#3c5c9e;color:#fff}}a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:10px}div.image[_ngcontent-%COMP%]{background-image:url(/angular-domacar-site/assets/images/why-us.jpg);background-repeat:no-repeat;background-size:cover;min-height:300px}@media (max-width:960px){div.image[_ngcontent-%COMP%]{margin-top:30px;min-height:200px}}"]}),t})();var j=e("ZgFz");const L=["backgroundContainer"],E=["backgroundOverlay"];let I=(()=>{class t{constructor(){this.EShopCategory=j.a}ngOnInit(){}onWindowScroll(t){const n=this.backgroundContainer.nativeElement.getBoundingClientRect();let e=n.top-window.innerHeight<=0?Math.abs(n.top-window.innerHeight):0;e=e>window.innerHeight+n.height?window.innerHeight+n.height:e;const o=this._rescale(e,0,window.innerHeight+n.height,-100,100);this.backgroundOverlay.nativeElement.style.transform=`translate3d(0px, ${o}px, 0px)`}_rescale(t,n,e,o,i){return(t-n)*(i-o)/(e-n)+o}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-categories"]],viewQuery:function(t,n){var e;1&t&&(a.tc(L,!0),a.tc(E,!0)),2&t&&(a.lc(e=a.Yb())&&(n.backgroundContainer=e.first),a.lc(e=a.Yb())&&(n.backgroundOverlay=e.first))},hostBindings:function(t,n){1&t&&a.Xb("scroll",(function(t){return n.onWindowScroll(t)}),!1,a.oc)},decls:53,vars:4,consts:[[1,"parallax-container"],["backgroundContainer",""],[1,"parallax-overlay"],["backgroundOverlay",""],[1,"container"],[1,"row"],[1,"col-12"],[1,"categories"],[1,"col-sm-12","col-md-6"],[1,"category-tile"],["alt","","src","assets/images/categories/category1.jpg"],["ontouchstart","",3,"href"],["alt","","src","assets/images/categories/category2.jpg"],["alt","","src","assets/images/categories/category3.jpg"],["alt","","src","assets/images/categories/category4.jpg"]],template:function(t,n){1&t&&(a.Pb(0,"section",0,1),a.Lb(2,"div",2,3),a.Pb(4,"div",4),a.Pb(5,"div",5),a.Pb(6,"div",6),a.Pb(7,"p"),a.xc(8,"Szeroki wachlarz cz\u0119\u015bci"),a.Ob(),a.Pb(9,"h2"),a.xc(10,"Przejd\u017a do wybranej"),a.Lb(11,"br"),a.xc(12," kategori sklepu"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(13,"section",7),a.Pb(14,"div",4),a.Pb(15,"div",5),a.Pb(16,"div",8),a.Pb(17,"div",9),a.Lb(18,"img",10),a.Pb(19,"h4"),a.xc(20,"Cz\u0119\u015bci samochodowe"),a.Ob(),a.Pb(21,"p"),a.xc(22," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),a.Ob(),a.Pb(23,"a",11),a.xc(24,"Przejd\u017a"),a.Ob(),a.Ob(),a.Ob(),a.Pb(25,"div",8),a.Pb(26,"div",9),a.Lb(27,"img",12),a.Pb(28,"h4"),a.xc(29,"Felgi"),a.Ob(),a.Pb(30,"p"),a.xc(31," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),a.Ob(),a.Pb(32,"a",11),a.xc(33,"Przejd\u017a"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(34,"div",5),a.Pb(35,"div",8),a.Pb(36,"div",9),a.Lb(37,"img",13),a.Pb(38,"h4"),a.xc(39,"Opony"),a.Ob(),a.Pb(40,"p"),a.xc(41," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),a.Ob(),a.Pb(42,"a",11),a.xc(43,"Przejd\u017a"),a.Ob(),a.Ob(),a.Ob(),a.Pb(44,"div",8),a.Pb(45,"div",9),a.Lb(46,"img",14),a.Pb(47,"h4"),a.xc(48,"Akcesoria"),a.Ob(),a.Pb(49,"p"),a.xc(50," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),a.Ob(),a.Pb(51,"a",11),a.xc(52,"Przejd\u017a"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.zb(23),a.ec("href","/shop/"+n.EShopCategory.CarParts,a.rc),a.zb(9),a.ec("href","/shop/"+n.EShopCategory.Wheels,a.rc),a.zb(10),a.ec("href","/shop/"+n.EShopCategory.Tires,a.rc),a.zb(9),a.ec("href","/shop/"+n.EShopCategory.Accessories,a.rc))},styles:[".parallax-container[_ngcontent-%COMP%]{padding-top:120px;padding-bottom:230px;position:relative;overflow:hidden}.parallax-container[_ngcontent-%COMP%]   .parallax-overlay[_ngcontent-%COMP%]{background-image:url(/angular-domacar-site/assets/images/baner/slide2.jpg);background-size:cover!important;position:absolute;width:100%;height:calc(100% + 200px);top:0;opacity:1;background-position:bottom;background-repeat:no-repeat}.parallax-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative}.parallax-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#fff;text-align:left;font-family:museo-sans;font-weight:700;font-style:normal;margin:0 0 10px;width:100%;text-transform:uppercase}.parallax-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:34px;line-height:45px;margin-top:15px!important;width:100%}.categories[_ngcontent-%COMP%], .parallax-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-family:Montserrat,serif!important}.categories[_ngcontent-%COMP%]{padding:0 0 80px;position:relative;color:#9e9e9e;font-weight:400;font-size:14px;line-height:24px;background:linear-gradient(180deg,transparent 0,transparent 140px,#000 0,#f7f7f7 0,#f7f7f7);margin-top:-140px}.categories[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.categories[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child > div[_ngcontent-%COMP%]{margin-bottom:0}@media (max-width:768px){.categories[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child > div[_ngcontent-%COMP%]:first-child{margin-bottom:30px}}.categories[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px}.categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]{background-color:#fff;position:relative;height:100%}.categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100%;max-height:260px}.categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2f2f2f;margin:0;font-size:16px;font-weight:700;line-height:inherit;text-transform:uppercase;padding:15px;text-align:center}.categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;margin:0;font-family:museo-sans;font-weight:100;padding:0 15px 75px;text-align:center}.categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;bottom:0;background-color:#3c5c9e;color:#fff;border:2px solid #3c5c9e;transition:.3s!important;text-align:center;min-width:170px;font-size:14px;font-weight:900;padding:17px 25px;margin:auto;text-transform:uppercase;box-sizing:border-box;line-height:1;cursor:pointer;outline:0;text-decoration:none;font-family:museo-sans;display:inline-block;width:100%}.categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#3c5c9e;background:#fff}@media (hover){.categories[_ngcontent-%COMP%]   .category-tile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#3c5c9e;background:#fff}}"]}),t})();function S(t,n){1&t&&a.Lb(0,"i",3)}function T(t,n){1&t&&a.Lb(0,"i",4)}function q(t,n){1&t&&a.Lb(0,"i",5)}let D=(()=>{class t{constructor(){}get fullStars(){const t=this._rescale(this.currentValue,this.minValue,this.maxValue,0,5);return new Array(Math.floor(t)).fill(null)}get isHalfStar(){const t=this._rescale(this.currentValue,this.minValue,this.maxValue,0,5);return!Number.isInteger(t)}get emptyStars(){return new Array(5-this.fullStars.length-(this.isHalfStar?1:0)).fill(null)}ngOnInit(){}_rescale(t,n,e,o,i){return(t-n)*(i-o)/(e-n)+o}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-rating-stars"]],inputs:{minValue:"minValue",maxValue:"maxValue",currentValue:"currentValue"},decls:3,vars:3,consts:[["class","fas fa-star",4,"ngFor","ngForOf"],["class","fas fa-star-half-alt",4,"ngIf"],["class","far fa-star",4,"ngFor","ngForOf"],[1,"fas","fa-star"],[1,"fas","fa-star-half-alt"],[1,"far","fa-star"]],template:function(t,n){1&t&&(a.vc(0,S,1,0,"i",0),a.vc(1,T,1,0,"i",1),a.vc(2,q,1,0,"i",2)),2&t&&(a.ec("ngForOf",n.fullStars),a.zb(1),a.ec("ngIf",n.isHalfStar),a.zb(1),a.ec("ngForOf",n.emptyStars))},directives:[o.l,o.m],styles:["i[_ngcontent-%COMP%]{color:#3c5c9e}"],changeDetection:0}),t})();var W=e("O2se");function N(t,n){if(1&t&&(a.Pb(0,"div",4),a.Pb(1,"div",5),a.Lb(2,"img",6),a.Pb(3,"div",7),a.Pb(4,"h2",8),a.xc(5),a.Ob(),a.Pb(6,"p",9),a.Lb(7,"app-rating-stars",10),a.Ob(),a.Pb(8,"p",11),a.xc(9),a.bc(10,"shopCategoryToString"),a.Ob(),a.Pb(11,"p",12),a.xc(12),a.bc(13,"number"),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t){const t=n.$implicit;a.zb(1),a.ec("routerLink","/shop/"+t.category+"/product-preview/"+t.id),a.zb(1),a.ec("src",t.imgSrc,a.rc),a.zb(3),a.yc(t.displayName),a.zb(2),a.ec("currentValue",t.rating)("maxValue",5)("minValue",0),a.zb(2),a.yc(a.cc(10,9,t.category)),a.zb(3),a.Ac(" ",a.dc(13,11,t.price,"1.2-2")," ",t.priceCurrency," ")}}let F=(()=>{class t{constructor(){this.latestProducts=new Array(8).fill(0).map((t,n)=>({id:n+1,category:[j.a.Accessories,j.a.CarParts,j.a.Tires,j.a.Wheels][Math.floor(4*Math.random())],displayName:"Przyk\u0142adowy produkt ze sklepu",rating:Math.floor(2*Math.random())+3,price:Math.floor(100*Math.random())+100,priceCurrency:"z\u0142",imgSrc:`assets/images/products/product${n+1}.png`}))}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-latest-products"]],decls:10,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-12"],["class","col-sm-6 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-lg-3"],[1,"product-wrapper",3,"routerLink"],["alt","...",3,"src"],[1,"product-description"],[1,"product-name"],[1,"product-rating"],[3,"currentValue","maxValue","minValue"],[1,"product-category"],[1,"product-price"]],template:function(t,n){1&t&&(a.Pb(0,"section"),a.Pb(1,"div",0),a.Pb(2,"div",1),a.Pb(3,"div",2),a.Pb(4,"h2"),a.xc(5,"Najnowsze produkty"),a.Ob(),a.Pb(6,"p"),a.xc(7,"Przegl\u0105dnij nasze najnowsze dost\u0119pne produkty i wybierz co\u015b dla siebie."),a.Ob(),a.Ob(),a.Ob(),a.Pb(8,"div",1),a.vc(9,N,14,14,"div",3),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.zb(9),a.ec("ngForOf",n.latestProducts))},directives:[o.l,w.d,D],pipes:[W.a,o.f],styles:["section[_ngcontent-%COMP%]{background-color:#fff;padding:80px 0 50px;position:relative;font-family:Montserrat,serif!important;color:#9e9e9e;font-weight:400;font-size:14px;text-align:left;line-height:24px}.container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]:first-child   h2[_ngcontent-%COMP%]{margin:0 auto 10px;letter-spacing:-.7px;max-width:600px;color:#2f2f2f;font-weight:700;font-size:34px;text-align:center;line-height:45px;text-transform:uppercase}.container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{font-family:museo-sans;text-transform:none;text-align:center;margin:10px auto 50px;max-width:650px;font-weight:100;font-size:15px}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]{transition:all .25s ease-in-out;margin-bottom:30px;cursor:pointer;font-family:museo-sans;height:calc(100% - 30px);text-align:center;outline:none}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]:hover{box-shadow:0 20px 60px 0 rgba(0,0,0,.1);transform:translateY(-5px)}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:250px;-o-object-fit:contain;object-fit:contain}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;height:calc(100% - 250px);justify-content:center;padding:15px}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{padding:0;margin:0;font-size:16px;letter-spacing:-.3px;line-height:25px;color:#2f2f2f;font-weight:700;width:100%}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]{padding:0;margin:0}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{padding:0;margin:0;font-size:14px;text-transform:capitalize;line-height:22px}.container[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]{padding:0;margin:0;color:#1f1f1f;font-weight:900;line-height:22px;font-size:16px}"]}),t})();function B(t,n){1&t&&(a.Pb(0,"div",8),a.Pb(1,"h4"),a.xc(2," Lorem ipsum dolor sit amet, consectetur adipisicing elit? "),a.Ob(),a.Pb(3,"p"),a.xc(4," Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus. "),a.Ob(),a.Ob())}const H=function(){return[1,2,3]};let V=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-common-questions"]],decls:19,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-lg-6"],["class","question-container",4,"ngFor","ngForOf"],["placeholder","Twoje imi\u0119","type","text"],["placeholder","Tw\xf3j email","type","email"],["placeholder","Napisz wiadomo\u015b\u0107"],["ontouchstart","","type","button"],[1,"question-container"]],template:function(t,n){1&t&&(a.Pb(0,"section"),a.Pb(1,"div",0),a.Pb(2,"div",1),a.Pb(3,"div",2),a.Pb(4,"h2"),a.xc(5,"Masz pytania?"),a.Ob(),a.Pb(6,"p"),a.xc(7," Poni\u017cej znajduj\u0105 si\u0119 najcze\u015bciej zadawane pytania przez naszych klient\xf3w. Je\u017celi nie znajdziesz odpowiedzi skontaktuj si\u0119 z nami. "),a.Ob(),a.vc(8,B,5,0,"div",3),a.Ob(),a.Pb(9,"div",2),a.Pb(10,"h2"),a.xc(11,"Skontakuj si\u0119"),a.Ob(),a.Pb(12,"p"),a.xc(13," Naszym celem jest zapewnienie najlepszej obs\u0142ugi klienta i terminowe udzielanie odpowiedzi na wszystkie pytania. "),a.Ob(),a.Lb(14,"input",4),a.Lb(15,"input",5),a.Lb(16,"textarea",6),a.Pb(17,"button",7),a.xc(18,"Wy\u015blij wiadomo\u015b\u0107"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.zb(8),a.ec("ngForOf",a.fc(1,H)))},directives:[o.l],styles:["section[_ngcontent-%COMP%]{background-color:#3c5c9e;color:#fff;padding:80px 0;position:relative;font-family:Montserrat,serif!important;font-weight:400;font-size:14px;line-height:24px}h2[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{text-align:left}h2[_ngcontent-%COMP%]{letter-spacing:-.7px;font-weight:700;font-size:34px;line-height:45px;margin-top:0!important;margin-bottom:10px!important}p[_ngcontent-%COMP%]{font-size:15px;margin:10px 0 50px;font-weight:100}input[_ngcontent-%COMP%], p[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:museo-sans}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:2px solid #fff;background-color:#3c5c9e;text-transform:inherit;width:100%;box-sizing:border-box;min-width:100%;margin-bottom:10px;box-shadow:none;letter-spacing:0;outline:none;padding:0 5px;text-align:left;font-size:14px;font-weight:900;color:#fff;overflow:hidden}input[_ngcontent-%COMP%]{height:50px}textarea[_ngcontent-%COMP%]{resize:none;padding:10px 5px;height:10em}input[_ngcontent-%COMP%]::-webkit-input-placeholder, textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{font-family:museo-sans;color:hsla(0,0%,100%,.5)}input[_ngcontent-%COMP%]::-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder{font-family:museo-sans;color:hsla(0,0%,100%,.5)}input[_ngcontent-%COMP%]::-ms-input-placeholder, textarea[_ngcontent-%COMP%]::-ms-input-placeholder{font-family:museo-sans;color:hsla(0,0%,100%,.5)}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{font-family:museo-sans;color:hsla(0,0%,100%,.5)}button[_ngcontent-%COMP%]{letter-spacing:0;font-weight:900;margin:0;border-radius:0;padding:17px 25px;color:#fff;text-align:center!important;line-height:normal!important;border:2px solid #fff;outline:none!important;width:100%;transition:.3s!important;font-size:14px;text-transform:uppercase;box-sizing:border-box;cursor:pointer;box-shadow:none;text-decoration:none;display:block;background-color:#3c5c9e}button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus{color:#3c5c9e;background-color:#fff}@media (hover){button[_ngcontent-%COMP%]:hover{color:#3c5c9e;background-color:#fff}}@media (max-width:992px){.row[_ngcontent-%COMP%] > div[class*=col-][_ngcontent-%COMP%]:last-child{margin-top:30px;padding-top:30px;border-top:1px solid hsla(0,0%,100%,.15)}}@media (min-width:992px){.row[_ngcontent-%COMP%] > div[class*=col-][_ngcontent-%COMP%]:last-child{border-left:1px solid hsla(0,0%,100%,.15)}}.question-container[_ngcontent-%COMP%]{border-left:2px solid #fff;padding-left:5px}.question-container[_ngcontent-%COMP%]:not(:last-child){margin-bottom:30px}.question-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .question-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0;font-size:14px}"]}),t})(),Q=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["ng-component"]],decls:7,vars:0,template:function(t,n){1&t&&(a.Lb(0,"app-banner"),a.Lb(1,"app-product-search"),a.Lb(2,"app-services-icons"),a.Lb(3,"app-why-us"),a.Lb(4,"app-categories"),a.Lb(5,"app-latest-products"),a.Lb(6,"app-common-questions"))},directives:[v,y,z,k,I,F,V],styles:[""]}),t})();var Y=e("3Pt+");let $=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[o.c]]}),t})();e.d(n,"HomeModule",(function(){return A}));let A=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[o.c,d.forRoot(),$,w.g.forChild([{path:"",component:Q}]),Y.g]]}),t})()}}]);