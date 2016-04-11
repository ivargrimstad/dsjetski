/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,f){function d(a,c,e,f,h,k){null==d.RD&&(d.RD=d.s7());this.oc=a;this.Oi=c;this.r4=e;f&&f.N_&&(this.iea=f.N_);h&&(h.R_&&(this.JI=h.R_),h.Q_&&(this.II=h.Q_),h.V_&&(this.QI=h.V_),h.U_&&(this.OI=h.U_),h.S_&&(this.MI=h.S_),h.T_&&(this.RA=h.T_),h.X_&&(this.SI=h.X_),h.Y_&&(this.TI=h.Y_),h.W_&&(this.RI=h.W_));k&&(k.oX&&(this.fm=k.oX),k.h_&&(this.Bg=k.h_),k.MY&&(this.cS=k.MY),k.TY&&(this.oG=k.TY),k.y_&&(this.Um=k.y_),k.dZ&&(this.hr=k.dZ),k.xZ&&
(this.rr=k.xZ),k.wZ&&(this.Jj=k.wZ),k.vZ&&(this.Hm=k.vZ),k.C_&&(this.Dv=k.C_),k.vf&&(this.EW=k.vf),k.bg&&(this.FW=k.bg));c=document.createElement("div");e=c.style;e.display="inline-block";e.overflow="hidden";e.visibility="hidden";f=document.createElement("div");e=f.style;e.display="inline-block";c.appendChild(f);a.insertBefore(c,a.firstChild);this.tW=c;this.cp=f;var l=this;this.Fj=function(a){l.Fo(a)};this.NS=function(){l.u$()};this.Do=function(a){l.FG(a)};this.Eo=function(a){l.MG(a)}}d.prototype.Hl=
function(a,c){var d=!1;a?(d=this.zg()?!0:!1,this.oV()):(this.Jj&&this.Jj(),this.UI(c),d=this.NI());return d};d.prototype.destroy=function(){for(var a=this.oc,c=this.Bo(),d=0;d<c.length;d++){var f=c[d].style;this.Oi?f.right="":f.left="";f.top=""}a.removeChild(this.tW);this.FW=this.EW=this.Dv=this.Hm=this.Jj=this.rr=this.hr=this.Um=this.oG=this.cS=this.Bg=this.fm=this.oc=this.zk=this.vj=this.Lh=this.wj=this.Ai=this.Eo=this.Do=this.NS=this.Fj=this.cp=this.tW=null};d.prototype.resizeTile=function(a,c){var d=
this.oc.querySelector(a);if(d){this.wj||(this.wj=[]);var f=this.wj;f.push(d);f.push(c);this.vV=!0;this.nv()}};d.prototype.Bga=function(a,c){var d=this.Bo();this.Dv&&this.Dv(d);var f=null;0<=c&&c<d.length&&(f=d[c]);this.oc.insertBefore(a,f);this.nv()};d.prototype.xha=function(a){if(a=this.oc.querySelector(a))this.Lh||(this.Lh=[]),this.Lh.push(a),this.uI=!0,this.Ki!==d.NN&&this.Ki!==d.Hx?this.nv():this.uI=!1};d.prototype.uga=function(a){if(a=this.oc.querySelector(a))this.vj||(this.vj=[]),this.vj.push(a),
this.OS=!0,this.nv()};d.prototype.lha=function(){this.vV||this.OS||this.uI||(this.Jj&&this.Jj(),this.UI(!1),this.NI())};d.prototype.Yf=function(){if(this.QW)return!1;this.L4||(this.k4=this.r4?!1:d.kaa(d.RD[0],d.RD[1]),this.L4=!0);return this.k4};d.prototype.DB=function(){return null!=this.Ki||null!=this.Ai&&0<this.Ai.length};d.prototype.qB=function(){this.QW=!0;this.$k(this.QI);this.$k(this.OI);this.$k(this.MI);this.$k(this.RA);this.$k(this.SI);this.$k(this.TI);this.$k(this.RI);this.Bg(this.cp,this.JI);
this.Bg(this.cp,this.II);d.Pd(this.oc,"transitionend",this.Fj);d.Pd(this.oc,"webkitTransitionEnd",this.Fj);for(var a=this.Bo(),c=0;c<a.length;c++){var e=a[c];e.ay&&delete e.ay;d.Pd(e,"transitionend",this.Do);d.Pd(e,"webkitTransitionEnd",this.Do);d.Pd(e,"transitionend",this.Eo);d.Pd(e,"webkitTransitionEnd",this.Eo)}this.ir?(clearTimeout(this.ir),this.ir=null,this.FG(null)):this.Kr?(clearTimeout(this.Kr),this.Kr=null,this.tI()):this.Ki===d.Hx||null!=this.Ai&&0<this.Ai.length?this.Fo(null):this.Ki===
d.ON&&this.MG(null);this.QW=!1};d.T7=function(a){var c=d.iu(a);return{Gc:a.offsetWidth+(d.Lf(c.marginLeft)+d.Lf(c.marginRight)),Hg:a.offsetHeight+(d.Lf(c.marginTop)+d.Lf(c.marginBottom))}};d.S7=function(a){a=d.iu(a);return{paddingLeft:d.Lf(a.paddingLeft),paddingRight:d.Lf(a.paddingRight),paddingTop:d.Lf(a.paddingTop),paddingBottom:d.Lf(a.paddingBottom),borderLeftWidth:d.Lf(a.borderLeftWidth),borderRightWidth:d.Lf(a.borderRightWidth),borderTopWidth:d.Lf(a.borderTopWidth),borderBottomWidth:d.Lf(a.borderBottomWidth)}};
d.iu=function(a){var c=a.ownerDocument.defaultView,d=null;return d=c?c.getComputedStyle(a,null):a.currentStyle};d.Lf=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};d.$e=function(a,c,d){a.addEventListener?a.addEventListener(c,d,!1):a.attachEvent&&a.attachEvent("on"+c,d)};d.Pd=function(a,c,d){a.removeEventListener?a.removeEventListener(c,d,!1):a.detachEvent&&a.detachEvent("on"+c,d)};d.EO=function(a,c){if(a)for(var d=0;d<a.length;d++)if(a[d]==c)return d;return-1};d.kaa=
function(a,c){var d=["gecko",16,"trident",6,"webkit",533.1],f=d.length;if(0==f%2)for(var h=0;h<=f-2;h+=2)if(a==d[h]){if(c>=d[1+h])return!0;break}return!1};d.s7=function(){var a=d.Rh,c=null,e=-1,f=navigator.userAgent.toLowerCase();-1!=f.indexOf("msie")||-1!=f.indexOf("trident")?(c="trident",e=a(f,/trident\/(\d+[.]\d+)/),-1==e&&(e=a(f,/msie (\d+\.\d+);/),-1==e&&(e=a(f,/msie (\d+\.\d+)b;/)),e-=4),null!=document.documentMode&&(e=Math.min(e,document.documentMode-4))):-1!=f.indexOf("applewebkit")?(c="webkit",
e=a(f,/applewebkit\/(\d+([.]\d+)*)/)):-1!=f.indexOf("gecko/")&&(c="gecko",e=a(f,/rv:(\d+[.]\d+)/));return[c,e]};d.Rh=function(a,c){var d=a.match(c);return d&&(d=d[1])?parseFloat(d):-1};d.p5=function(a,c){return a.$B>c.$B?1:a.$B<c.$B?-1:a.ZB>c.ZB?1:a.ZB<c.ZB?-1:0};d.prototype.nv=function(){this.Fz||(this.Ki?this.NH||(this.NH=!0):this.Fz=setTimeout(this.NS,0))};d.prototype.Bo=function(){for(var a=this.oc.querySelectorAll(this.iea),c=[],d=0;d<a.length;d++){var f=a[d],h=f.style;0<f.offsetWidth&&0<f.offsetHeight&&
"hidden"!=h.visibility&&c.push(f)}return c};d.prototype.NI=function(){var a=this.Ai,c=this.zg();if(this.wj){var e=this.wj;c||(c=[]);for(var f=0;f<e.length;f+=2){var h=e[f];0>d.EO(c,h)&&c.push(h)}}e=!1;if(!c||1>c.length){if(!a||1>a.length)this.Ai=null,this.Fo(null),e=!0}else this.Ai=c;a=null!=c&&0<c.length;this.Yf()||e||this.Fo(null);return a};d.prototype.zg=function(){var a=this.oc,c=this.Bo();this.Dv&&this.Dv(c);var e=this.uE=null;this.km=0;this.ca=1;this.xr=null;var f=[],h=[],k=[],l=this.Oi,m=d.S7(a),
n=0,q=[];this.DO=q;for(var p=0;p<c.length;p++){var r=c[p],s=this.oG(r);(e=r.ay)&&delete r.ay;if(!this.uE){var t=s;e&&(t=document.createElement("div"),t.className=e,t=this.oG(t));this.uE=this.M4(r,t)}e=this.uE;this.xr||(this.km=Math.max(Math.floor((a.offsetWidth-m.paddingLeft-m.paddingRight-m.borderLeftWidth-m.borderRightWidth)/e.Gc),1),this.K$(this.km,this.ca),n=this.km);s.colSpan>n&&(n=s.colSpan);s.colSpan>this.km&&(s.colSpan=this.km);for(var v=!1,t=0;t<this.ca;t++){for(var x=0;x<this.km;x++)if(this.m7(x,
t,s)){var v=r.style,u={top:v.top};l?u.right=v.right:u.left=v.left;h.push(u);this.IH(r,x,t,s,e,m);l&&k.push(x);v=!0;q.push({ZB:x,$B:t,tile:r});break}if(v)break;t===this.ca-1&&this.pO()}}e&&(a=this.cp.style,a.width=n*e.Gc+"px",a.height=this.ca*e.Hg+"px");for(p=0;p<c.length;p++)r=c[p],v=r.style,u=h[p],(l&&parseInt(v.right,10)!==parseInt(u.right,10)||!l&&parseInt(v.left,10)!==parseInt(u.left,10)||parseInt(v.top,10)!==parseInt(u.top,10))&&f.push(r);1>f.length&&(f=null);return f};d.prototype.oV=function(){var a=
this.DO;this.DO=null;for(var a=a.sort(d.p5),c=this.Bo(),e=0;e<c.length;e++){var f=c[e],h=a[e].tile;f!=h&&(this.FW(h),f.parentNode.insertBefore(h,f),this.EW(h),f=d.EO(c,h),f>e&&(c.splice(f,1),c.splice(e,0,h)))}};d.prototype.K$=function(a,c){for(var d=this.xr=[],f=0;f<c;f++){var h=[];d.push(h);for(var k=0;k<a;k++)h[k]=!1}};d.prototype.pO=function(){this.ca++;var a=[];this.xr.push(a);for(var c=0;c<this.km;c++)a[c]=!1};d.prototype.m7=function(a,c,d){var f=d.colSpan;d=d.rowSpan;for(var h=c;h<c+d;h++){h>=
this.ca&&this.pO();for(var k=a;k<a+f;k++)if(k>=this.km||this.xr[h][k])return!1}return!0};d.prototype.IH=function(a,c,d,f,h,k){var l=f.colSpan;f=f.rowSpan;for(var m=this.xr,n=d;n<d+f;n++)for(var q=c;q<c+l;q++)m[n][q]=!0;a=a.style;a.top=k.paddingTop+d*h.Hg+"px";this.Oi?a.right=k.paddingRight+c*h.Gc+"px":a.left=k.paddingLeft+c*h.Gc+"px"};d.prototype.X3=function(a){for(var c=this.Bo(),d=0;d<c.length;d++)this.fm(c[d],a)};d.prototype.$k=function(a){for(var c=this.Bo(),d=0;d<c.length;d++)this.Bg(c[d],a)};
d.prototype.UI=function(a){this.LT||(this.pV=a,this.Yf()&&(this.X3(a?this.OI:this.QI),this.fm(this.cp,a?this.II:this.JI),d.$e(this.oc,"transitionend",this.Fj),d.$e(this.oc,"webkitTransitionEnd",this.Fj)),this.LT=!0)};d.prototype.Fo=function(a){var c=!0;if(this.Ai){var e=this.Ai;if(a){var f=a.target;for(a=0;a<e.length;a++)if(f===e[a]){e.splice(a,1);break}}else this.Yf()||(e=this.Ai=[]);0<e.length&&(c=!1)}if(c){if(this.wj&&(c=this.wj,this.wj=null,this.Yf()))for(a=0;a<c.length;a+=2)this.Bg(c[a],this.RI);
this.pV?(this.Yf()&&(this.$k(this.OI),this.Bg(this.cp,this.II)),this.pV=!1):this.Yf()&&(this.$k(this.QI),this.Bg(this.cp,this.JI));this.Yf()&&(d.Pd(this.oc,"transitionend",this.Fj),d.Pd(this.oc,"webkitTransitionEnd",this.Fj));this.uI=this.OS=this.vV=this.LT=!1;this.oV();this.rr&&this.rr();if(this.Ki===d.Hx)if(this.Yf()){var h=this;this.Kr=setTimeout(function(){h.tI()},0)}else this.tI();else this.Ki||this.Hm&&this.Hm()}};d.prototype.M4=function(a,c){var e=d.T7(a);return{Gc:e.Gc/c.colSpan,Hg:e.Hg/c.rowSpan}};
d.prototype.u$=function(){this.Fz&&(clearTimeout(this.Fz),this.Fz=null);this.Jj&&this.Jj();this.Ki=d.NN;if(this.vj&&this.Yf()){for(var a=this.vj,c=0;c<a.length;c++){var e=a[c];d.$e(e,"transitionend",this.Do);d.$e(e,"webkitTransitionEnd",this.Do);this.fm(e,this.MI)}var f=this;this.ir=setTimeout(function(){for(var c=0;c<a.length;c++){var d=a[c];f.Bg(d,f.MI);f.fm(d,f.RA)}},0)}else this.FG(null)};d.prototype.FG=function(a){this.ir&&(clearTimeout(this.ir),this.ir=null);if(a){a.preventDefault();a.stopPropagation();
a=a.target;this.Bg(a,this.RA);d.Pd(a,"transitionend",this.Do);d.Pd(a,"webkitTransitionEnd",this.Do);var c=this.vj;if(c){for(var e=0;e<c.length;e++){var f=c[e];if(f===a){c.splice(e,1);this.zk||(this.zk=[]);var h=this.zk;h.push(a);break}}1>c.length&&(this.vj=null)}}else if(!this.Yf()&&(c=this.vj)){for(e=0;e<c.length;e++)f=c[e],this.zk||(this.zk=[]),h=this.zk,h.push(f);this.vj=null}if(!this.vj){if(this.zk){h=this.zk;for(e=0;e<h.length;e++)a=h[e],this.Yf()&&this.Bg(a,this.RA),c=a.style,this.Oi?c.right=
"":c.left="",c.top="",this.hr&&this.hr(a);this.zk=null}this.Ki=d.Hx;this.UI(!1);if(this.wj)for(h=this.wj,e=0;e<h.length;e+=2)a=h[e],c=h[e+1],f=this.cS(a),this.Bg(a,f),this.fm(a,c),this.Yf()&&(this.fm(a,this.RI),a.ay=f);this.NI()}};d.prototype.tI=function(){this.Kr&&(clearTimeout(this.Kr),this.Kr=null);this.Ki=d.ON;if(this.Lh&&this.Yf())for(var a=this.Lh,c=0;c<a.length;c++){var e=a[c];d.$e(e,"transitionend",this.Eo);d.$e(e,"webkitTransitionEnd",this.Eo);this.fm(e,this.TI);this.Bg(e,this.SI)}else{if(this.Lh)for(a=
this.Lh,c=0;c<a.length;c++)e=a[c],this.Bg(e,this.SI);this.MG(null)}};d.prototype.MG=function(a){if(a){a.preventDefault();a.stopPropagation();a=a.target;this.Bg(a,this.TI);d.Pd(a,"transitionend",this.Eo);d.Pd(a,"webkitTransitionEnd",this.Eo);var c=this.Lh;if(c){for(var e=0;e<c.length;e++){var f=c[e];if(f===a){c.splice(e,1);this.Um&&this.Um(a);break}}1>c.length&&(this.Lh=null)}}else if(!this.Yf()&&(c=this.Lh)){for(e=0;e<c.length;e++)f=c[e],this.Um&&this.Um(f);this.Lh=null}this.Lh||(this.Ki=null,this.Hm&&
this.Hm(),this.NH&&(this.NH=!1,this.nv()))};d.NN=1;d.Hx=2;d.ON=3;(function(){function b(a){for(;a;){a=a.nextSibling;var b=!0;if(a){var c=a.style;!c||c.visibility!==q&&c.display!==p||(b=!1)}if(a&&1===a.nodeType&&b)return a}return null}function c(a,b){for(var c=a;c;){var d=c.style;if(d&&(d.visibility===q||d.display===p))break;d=c.parentNode;if(d===b)return c;c=d}return null}function e(a,b){return b.xc<a.xc?1:a.xc<b.xc?-1:0}function g(a){a&&a.sort(e);return a}function h(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?
b={colSpan:1,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-2x1")?b={colSpan:2,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-3x1")?b={colSpan:3,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-1x2")?b={colSpan:1,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-1x3")?b={colSpan:1,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-2x2")?b={colSpan:2,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-2x3")?b={colSpan:2,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-3x2")&&(b={colSpan:3,rowSpan:2});return b}function k(a){var b=
null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b="oj-masonrylayout-tile-1x1":a.hasClass("oj-masonrylayout-tile-2x1")?b="oj-masonrylayout-tile-2x1":a.hasClass("oj-masonrylayout-tile-3x1")?b="oj-masonrylayout-tile-3x1":a.hasClass("oj-masonrylayout-tile-1x2")?b="oj-masonrylayout-tile-1x2":a.hasClass("oj-masonrylayout-tile-1x3")?b="oj-masonrylayout-tile-1x3":a.hasClass("oj-masonrylayout-tile-2x2")?b="oj-masonrylayout-tile-2x2":a.hasClass("oj-masonrylayout-tile-2x3")?b="oj-masonrylayout-tile-2x3":
a.hasClass("oj-masonrylayout-tile-3x2")&&(b="oj-masonrylayout-tile-3x2");return b}function l(a,b){f(a).removeClass(b)}function m(a,b){f(a).addClass(b)}a.Da("oj.ojMasonryLayout",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{reorderHandle:null,beforeInsert:null,insert:null,beforeRemove:null,remove:null,beforeResize:null,resize:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-masonrylayout oj-component");this.options.disabled&&
a.u.warn(v);this.Ep=this.eventNamespace+"ReorderHandle";this.ka={};this.ka.sd=!1;this.ka.ve=!1;this.ka.uL=!1;this.ka.Kl=!1;this.ka.Hn=!1;this.Am();this.gm();this.za(!0)},refresh:function(){this._super();var a="rtl"===this.hc()!==this.cf;a&&this.gQ();this.za(a)},vk:function(){this._super();this.Nc&&this.za(this.Nc[0])},Zl:function(){this._super();this.Nc&&this.za(this.Nc[0])},Xe:function(a,b,c){this.Fba(b);this.Ye(b,c,{launcher:f(b.target).closest(":tabbable")})},za:function(b){if(this.Pt()){this.Nc=
null;this.cf="rtl"===this.hc();this.im=a.C.sf();var c=this.element,e=this.options;if(b){var f=this;this.Um=function(a){f.Sda(a)};this.hr=function(a){f.t$(a)};this.rr=function(){f.Eaa()};this.Jj=function(){f.Daa()};this.Hm=function(){f.Caa()};if(!this.gf){var p={};p.N_=s;var r={R_:"oj-masonrylayout-transition-resize-to",Q_:"oj-masonrylayout-transition-resize-to-fast",V_:"oj-masonrylayout-tile-transition-move-to",U_:"oj-masonrylayout-tile-transition-move-to-fast",S_:"oj-masonrylayout-tile-transition-hide-from",
T_:"oj-masonrylayout-tile-transition-hide-to"};r.X_=t;r.Y_="oj-masonrylayout-tile-transition-show-to";r.W_="oj-masonrylayout-tile-transition-resize-to";var n={};n.oX=m;n.h_=l;n.MY=k;n.TY=h;n.y_=this.Um;n.dZ=this.hr;n.xZ=this.rr;n.wZ=this.Jj;n.vZ=this.Hm;n.C_=g;n.vf=a.Components.vf;n.bg=a.Components.bg;this.Zca();this.gf=new d(c[0],this.cf,"enabled"===a.ba.JJ(),p,r,n)}this.wS=function(a){f.t9(a)};this.tS=function(a){f.p9(a)};this.vS=function(a){f.s9(a)};this.uS=function(a){f.q9(a)};this.rS=function(a){f.o9(a)};
this.xS=function(a){f.u9(a)};e.reorderHandle&&this.hW()}this.gf.Hl(b);b&&(this.xg=function(){f.Nf()},a.C.jh(c[0],this.xg))}else c=!1,this.Nc&&(c=this.Nc[0]),this.Nc=[b||c]},_destroy:function(){this.lo();var b=this.element;a.C.gj(b[0],this.xg);this.xg=null;this.Wca();for(var c=this.Pk(),d=c.length,e=0;e<d;e++)delete c[e].xc;this.gQ();b.removeClass("oj-masonrylayout oj-component");this.options.reorderHandle&&this.OW();this.zq=this.Hm=this.Jj=this.rr=this.hr=this.Um=this.xS=this.rS=this.uS=this.vS=this.tS=
this.wS=null;this._super()},_setOption:function(b,c,d){var e=!1;switch(b){case "reorderHandle":this.OW();e=!0;break;case "disabled":a.u.warn(v);break;case "contextMenu":a.C.sf()||(this.lo(),c&&this.Am(c))}this._super(b,c,d);e&&c&&this.hW()},resizeTile:function(a,b){var c=this.gf;c.DB()&&c.qB();var d=f(a),e=d[0],g=k(e);if(b==g)throw Error("JET MasonryLayout: Unable to resize child "+a+" to style class "+b+" because "+b+" is already applied.");!1!==this._trigger("beforeResize",null,{tile:d,previousSizeStyleClass:g,
sizeStyleClass:b})&&(this.It||(this.It=[]),this.It.push(e,g,b),c.resizeTile(a,b))},insertTile:function(b,c){var d=this.gf;d.DB()&&d.qB();isNaN(c)&&(c=-1);var e=f(b),g=e[0];!1!==this._trigger("beforeInsert",null,{tile:e,index:c})&&(g.IT=c,d.Yf()&&e.addClass(t),e=g.style,e.top="-1px",this.cf?e.right="-1px":e.left="-1px",this.Jo(g,c),d.Bga(g,c),a.Components.vf(g),this.zq||(this.zq=[]),this.zq.push(b))},removeTile:function(b){var c=this.gf;c.DB()&&c.qB();var d=f(b),e=d[0];if(a.fd.kB(e)){var g=this.Pk(!0),
e=g.indexOf(e);0<e&&(this.ZE=g[e-1])}!1!==this._trigger("beforeRemove",null,{tile:d})&&c.uga(b)},Nf:function(){this.Nt||this.VS||this.gf.lha()},Sda:function(a){var b=a.IT;delete a.IT;a={tile:f(a),index:b};this._trigger("insert",null,a)},t$:function(b){a.Components.bg(b);b.parentNode.removeChild(b);this.rA(b);b={tile:f(b)};this._trigger("remove",null,b)},Eaa:function(){if(this.zq){for(var a=this.gf,b=this.zq,c=0;c<b.length;c++)a.xha(b[c]);this.zq=null}if(this.It){a=this.It;for(c=0;c<a.length;c+=3){var b=
a[c+1],d=a[c+2],b={tile:f(a[c]),previousSizeStyleClass:b,sizeStyleClass:d};this._trigger("resize",null,b)}this.It=null}this.Nt&&(this.dy?this.r9():this.YD&&this.sS())},Daa:function(){this.VS=!0;this.Rz=null;var b=document.activeElement;b&&a.C.$j(this.element[0],b)&&(this.Rz=b)},Caa:function(){this.VS=!1;var b=this.element[0];if(this.Rz){var c=this.Rz;this.Rz=null;if(this.ZE){if(c=this.ZE,this.ZE=null,c&&a.C.$j(b,c)){var b=this.Pk(b,!0),d=b.indexOf(c);0<=d&&d<b.length-1?a.fd.HJ(b[d+1]):a.fd.HJ(c)}}else a.C.$j(b,
c)?a.fd.ew(c):a.fd.HJ(b)}},gQ:function(){var a=this.gf;a&&a.destroy();this.gf=null},Pt:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},Pk:function(a){for(var b=this.element.children(s),c=b.length,d=[],e=0;e<c;e++){var f=b[e];if(!a||a&&f!==this.od){var g=f.style;g.visibility!==q&&g.display!==p&&d.push(f)}}return d},Zca:function(){var a=this.Pk();
if(a)for(var b=0;b<a.length;b++){var c=a[b];c.xc||(c.xc=b+1)}},Wca:function(){var b=this.Pk(),c=this.Pk();g(c);for(var d=0;d<b.length;d++){var e=b[d],f=c[d];e!=f&&(a.Components.bg(f),e.parentNode.insertBefore(f,e),a.Components.vf(f),e=b.indexOf(f),e>d&&(b.splice(e,1),b.splice(d,0,f)))}},Jo:function(a,b){var c=this.Pk();0>b&&(b=c.length);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.xc&&e.xc>=b+1&&e.xc++}a.xc=b+1},rA:function(a){if(a.xc){var b=this.Pk();if(b)for(var c=0;c<b.length;c++){var d=b[c];
d.xc&&d.xc>a.xc&&d.xc--}delete a.xc}},Am:function(a){var b=null,c=null;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=a||this.options.contextMenu;c=f.type(b);if("function"==c){try{b=b()}catch(d){b=null}c=f.type(b)}if("string"===c){if(b=f(b)){b.css("display",p);c=this.ka;if(!c)return;c.ve=b;c.sd=!0}this.ka.sd&&a&&this.gm()}}},gm:function(){if(this.ka&&this.ka.sd&&this.options.reorderHandle){var a=this.ka.ve,b=this;
a.on("ojselect",f.proxy(this.Ii,this));var c=!1;a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=f(this).attr("data-oj-command").slice(17);f(this).replaceWith(b.Ci(a));f(this).addClass("oj-menu-item");c=!0}});c&&a.ojMenu("refresh");this.ka.uL=a.find("#"+x);this.ka.Kl=a.find("#"+u);this.ka.Hn=a.find("#"+w)}},lo:function(){var a=this.ka;a&&a.sd&&(a.sd=!1,a.ve.off("ojselect"),a.ve=null)},Fba:function(a){a=c(a.originalEvent.target,this.element[0]);this.ka.tile=a;
if(this.ka.sd){var d=this.ka.oB,e=!1,f=this.ka.uL;if(f){var g=f.hasClass(r),h=!1;d&&a===d&&(h=!0);h&&!g?(f.addClass(r),e=!0):!h&&g&&(f.removeClass(r),e=!0)}if(f=this.ka.Kl)g=f.hasClass(r),h=!1,d&&a!==d&&a!==b(d)||(h=!0),h&&!g?(f.addClass(r),e=!0):!h&&g&&(f.removeClass(r),e=!0);if(f=this.ka.Hn)g=f.hasClass(r),h=!1,d&&d!==a&&d!==b(a)||(h=!0),h&&!g?(f.addClass(r),e=!0):!h&&g&&(f.removeClass(r),e=!0);e&&this.ka.ve.ojMenu("refresh")}},Ci:function(a){var b=z[a];a=B[a];var c=f('\x3ca href\x3d"#"\x3e\x3c/a\x3e');
c.text(this.D(a));c.wrap("\x3cli id\x3d"+b+"\x3e\x3c/li\x3e");return c.parent()},Taa:function(a){a&&(this.ka.oB=a)},$T:function(a,b){if(a&&this.ka.oB){var c=this.ka.oB;this.ka.oB=!1;this.E6(c,a,b)}},E6:function(a,c,d){var e=a.xc-1,g=f(a);if(!1!==this._trigger("beforeReorder",null,{tile:g,fromIndex:e})){this.rA(a);var h=c.xc-1;d||h++;var p=this.element[0];d||(c=b(c));this.Jo(a,h);p.insertBefore(a,c);this.gf.Hl(!0);this._trigger("reorder",null,{tile:g,fromIndex:e,toIndex:h})}},Ii:function(a,b){var c=
b?b.item.attr("id"):void 0;c===x?this.Taa(this.ka.tile):c===u?this.$T(this.ka.tile,!0):c===w&&this.$T(this.ka.tile,!1)},kS:function(a){var b=this.Pk(!0);g(b);for(var c=b.length,d=0;d<c;d++)if(b[d]===a)return d;return-1},hW:function(){var a=this.element;a.find(this.options.reorderHandle).attr("draggable","true").addClass("oj-draggable");a.on("dragstart"+this.Ep,this.wS).on("dragenter"+this.Ep,this.tS).on("dragover"+this.Ep,this.vS).on("dragleave"+this.Ep,this.uS).on("dragend"+this.Ep,this.rS).on("drop"+
this.Ep,this.xS)},OW:function(){var a=this.element;a.find(this.options.reorderHandle).removeAttr("draggable").removeClass("oj-draggable");a.off(this.Ep)},t9:function(a){if(this.options.reorderHandle&&!this.Nt){var b=c(a.target,this.element[0]);if(b){var d=this.kS(b);b.hH=d;d={tile:f(b),fromIndex:d};!1!==this._trigger("beforeReorder",null,d)&&(a=a.originalEvent,this.G6(b,a.pageX,a.pageY,a.dataTransfer))}}},p9:function(b){b=b.originalEvent;var c=b.relatedTarget,d=this.element[0],e=!1;c?e=d!=c&&!a.C.$j(d,
c):this.vQ&&(e=(c=document.elementFromPoint(b.clientX,b.clientY))&&(c==d||a.C.$j(d,c)));e&&((this.vQ=!1,this.qm)?this.od&&(f(this.od).css("display",""),this.gf.Hl(!1,!0)):b.dataTransfer.dropEffect="none")},s9:function(a){var b=a.originalEvent;b.dataTransfer.dropEffect="move";this.F6(b.pageX,b.clientX,b.clientY);a.preventDefault();return!1},q9:function(b){var c=b.originalEvent,d=c.relatedTarget;b=this.element[0];var e=!1;e=d?b!=d&&!a.C.$j(b,d):(c=document.elementFromPoint(c.clientX,c.clientY))&&c!=
b&&!a.C.$j(b,c);e&&(this.vQ=!0,this.od&&(f(this.od).css("display",p),this.gf.Hl(!1,!0)))},o9:function(){if(!this.ZD){if(this.qm&&this.od){var b=this.qm,c=this.od;a.C.$j(this.element[0],b)&&(f(c).css("display",""),this.rA(c),c.parentNode.removeChild(c),f(b).css("display",""),this.Jo(b,b.xc-1),this.gf.Hl(!1,!0));delete b.hH}this.od=this.qm=null;this.fy=this.dy=!1;this.gF=null;this.Nt=this.YD=!1}},u9:function(a){var b=this.gf;b.DB()&&b.qB();b=a.originalEvent;this.O6(this.qm,b.pageX,b.pageY);a.stopPropagation();
return!1},G6:function(b,c,d,e){this.Nt=!0;this.fy=this.ZD=!1;this.qm=b;var g=this.element[0],h=k(b),l=this.od=document.createElement("div");l.xc=b.xc;l.className=h+" oj-drop";var h=l.style,r=b.style;h.top=r.top;this.cf?h.right=r.right:h.left=r.left;h=f(b).offset();g.insertBefore(l,b);this.gF=c={left:c-h.left,top:d-h.top};f(b).addClass("oj-drag");e.effectAllowed="move";e.setData("text/html",b.outerHTML);e.setDragImage(b,c.left,c.top);var s=this;this.H6=setTimeout(function(){r.display=p;f(b).removeClass("oj-drag");
s.H6=null;a.Components.En(b)},0)},F6:function(a,d,e){this.fy=!0;if(!this.dy){var g=this.element[0];d=document.elementFromPoint(d,e);if((d=c(d,g))&&d!==this.od&&d!==this.qm){var h=f(g).offset();e=b(this.od);a=a-h.left>=d.offsetLeft+.5*d.offsetWidth;this.rA(this.od);a&&!this.cf||!a&&this.cf?(a=b(d))?(this.Jo(this.od,a.xc-1),g.insertBefore(this.od,a)):(this.Jo(this.od,d.xc),g.appendChild(this.od)):(this.Jo(this.od,d.xc-1),g.insertBefore(this.od,d));e!==b(this.od)&&(this.dy=this.gf.Hl(!1,!0))}}},r9:function(){this.dy=
!1},O6:function(b,c,d){this.ZD=!0;var e=this.element[0],g=this.od;this.od=null;a.Components.bg(b);e.replaceChild(b,g);a.Components.vf(b);b.xc=g.xc;g=b.style;g.display="";a.Components.Il(b);var h=f(e).offset(),p=this.gF;g.top=d-p.top-h.top+n;c=c-p.left-h.left;this.cf?(g.right=e.offsetWidth-(c+f(b).outerWidth(!0))+n,g.left=""):g.left=c+n;this.gF=null;this.fy?this.YD=this.gf.Hl(!1,!0):this.sS()},sS:function(){this.fy=this.ZD=this.Nt=this.YD=!1;var a=this.qm;this.qm=null;var b=a.hH;delete a.hH;var c=
this.kS(a),a={tile:f(a),fromIndex:b,toIndex:c};this._trigger("reorder",null,a)},getNodeBySubId:function(a){return this._super(a)}});var n="px",q="hidden",p="none",r="oj-disabled",s=".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2",t="oj-masonrylayout-tile-transition-show-from",v="JET MasonryLayout: 'disabled' option not supported",
x="ojmasonrylayoutcut",u="ojmasonrylayoutpastebefore",w="ojmasonrylayoutpasteafter",z={cut:x,"paste-before":u,"paste-after":w},B={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter"}})()});