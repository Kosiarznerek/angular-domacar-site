(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{b8iB:function(a,e,t){"use strict";t.r(e);var n=t("ofXK"),l=t("tyNb"),r=t("pLZG"),i=t("eIep"),c=t("9M8c"),o=t("lJxs"),s=t("UXun"),p=t("VRyK"),u=t("LRne"),d=t("fXoL");const g=["parallaxOverlay"],h=function(a){return{"background-image":a}};let b=(()=>{class a{constructor(a,e){this._router=a,this._activatedRoute=e}ngOnInit(){const e=Object(p.a)(Object(u.a)(1),this._router.events.pipe(Object(r.a)(a=>a instanceof l.b))).pipe(Object(i.a)(()=>this._activatedRoute.pathFromRoot),Object(i.a)(a=>a.url),Object(c.a)(this._activatedRoute.pathFromRoot.length),Object(o.a)(a=>a.map(a=>a.join("/")).join("/")),Object(o.a)(a=>this._router.url.split(a)[1]));this.breadcrumb$=e.pipe(Object(o.a)(e=>a._GetBreadcrumbData(e)),Object(s.a)()),this.onWindowScroll()}onWindowScroll(e){const t=this.parallaxOverlay.nativeElement,n=a._Rescale(window.scrollY,0,t.clientHeight,-35,30);t.style.transform=`translate3d(0px, ${n}px, 0px)`}static _Rescale(a,e,t,n,l){return(a-e)*(l-n)/(t-e)+n}static _GetBreadcrumbData(a){switch(a){case"about":return{displayName:"O nas",parallaxSource:"/assets/images/parallax/parallax1.jpg"};case"contact":return{displayName:"Kontakt",parallaxSource:"/assets/images/parallax/parallax2.jpg"};case"payments":return{displayName:"P\u0142atno\u015bci",parallaxSource:"/assets/images/parallax/parallax3.jpg"};case"shipments":return{displayName:"Dostawa",parallaxSource:"/assets/images/parallax/parallax4.jpg"};case"returns-complaints":return{displayName:"Zwroty i reklamacje",parallaxSource:"/assets/images/parallax/parallax1.jpg"};case"privacy-policy":return{displayName:"Polityka prywatno\u015bci",parallaxSource:"/assets/images/parallax/parallax2.jpg"}}}}return a.\u0275fac=function(e){return new(e||a)(d.Kb(l.c),d.Kb(l.a))},a.\u0275cmp=d.Eb({type:a,selectors:[["ng-component"]],viewQuery:function(a,e){var t;1&a&&d.tc(g,!0),2&a&&d.lc(t=d.Yb())&&(e.parallaxOverlay=t.first)},hostBindings:function(a,e){1&a&&d.Xb("scroll",(function(a){return e.onWindowScroll(a)}),!1,d.oc)},decls:14,vars:11,consts:[[1,"single-page-heading"],[1,"parallax-overlay",3,"ngStyle"],["parallaxOverlay",""],[1,"container"],[1,"breadcrumbs"],[1,"fa","fa-angle-right"],[1,"section-heading",2,"color","#ffffff"]],template:function(a,e){1&a&&(d.Pb(0,"div",0),d.Lb(1,"div",1,2),d.bc(3,"async"),d.Pb(4,"div",3),d.Pb(5,"p",4),d.xc(6," G\u0142\xf3wna"),d.Lb(7,"span",5),d.xc(8),d.bc(9,"async"),d.Ob(),d.Pb(10,"h1",6),d.xc(11),d.bc(12,"async"),d.Ob(),d.Ob(),d.Ob(),d.Lb(13,"router-outlet")),2&a&&(d.zb(1),d.ec("ngStyle",d.gc(9,h,"url("+d.cc(3,3,e.breadcrumb$).parallaxSource+")")),d.zb(7),d.zc("",d.cc(9,5,e.breadcrumb$).displayName," "),d.zb(3),d.zc(" ",d.cc(12,7,e.breadcrumb$).displayName," "))},directives:[n.n,l.h],pipes:[n.b],styles:[".single-page-heading[_ngcontent-%COMP%]{position:relative;overflow:hidden;padding:90px 0;background:rgba(0,0,0,.05)}.single-page-heading[_ngcontent-%COMP%]   .parallax-overlay[_ngcontent-%COMP%]{background-color:#f7f7f7;position:absolute;width:100%;height:330px;top:0;left:0;background-repeat:no-repeat;background-size:cover}.single-page-heading[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative}.single-page-heading[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{color:#fff;text-align:left;max-width:100%;padding:0;font-weight:600;font-size:14px;margin:0 0 10px}.single-page-heading[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.single-page-heading[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]{text-align:left;max-width:100%;margin:0;line-height:1;letter-spacing:-.7px;font-weight:700;font-family:Montserrat,sans-serif;font-size:34px;text-transform:uppercase}"]}),a})();t.d(e,"GeneralsModule",(function(){return m}));let m=(()=>{class a{}return a.\u0275mod=d.Ib({type:a}),a.\u0275inj=d.Hb({factory:function(e){return new(e||a)},imports:[[n.c,l.g.forChild([{path:"",component:b,children:[{path:"about",pathMatch:"full",loadChildren:()=>Promise.all([t.e(2),t.e(13)]).then(t.bind(null,"LHxH")).then(a=>a.AboutModule)},{path:"contact",pathMatch:"full",loadChildren:()=>t.e(14).then(t.bind(null,"WyiD")).then(a=>a.ContactModule)},{path:"payments",pathMatch:"full",loadChildren:()=>t.e(16).then(t.bind(null,"Vq/7")).then(a=>a.PaymentsModule)},{path:"shipments",pathMatch:"full",loadChildren:()=>t.e(19).then(t.bind(null,"Lvy1")).then(a=>a.ShipmentsModule)},{path:"returns-complaints",pathMatch:"full",loadChildren:()=>t.e(18).then(t.bind(null,"UFW5")).then(a=>a.ReturnsComplaintsModule)},{path:"privacy-policy",pathMatch:"full",loadChildren:()=>t.e(17).then(t.bind(null,"2uBl")).then(a=>a.PrivacyPolicyModule)}]}])]]}),a})()}}]);