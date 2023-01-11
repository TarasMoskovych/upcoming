(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3c6d":function(t,n,e){"use strict";e.r(n),e.d(n,"GESTURE_CONTROLLER",function(){return a}),e.d(n,"createGesture",function(){return v});var r,i=e("3eIi"),o=(e("lSdy"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new l(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new u(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,n,e){return this.canStart(t)?(this.requestedStart.set(n,e),!0):(this.requestedStart.delete(n),!1)},t.prototype.capture=function(t,n,e){if(!this.start(t,n,e))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===e){this.capturedId=n,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return r.delete(n),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(n)},t.prototype.enableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0!==e&&e.delete(n)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(c)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(c)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var n=this.disabledGestures.get(t);return!!(n&&n.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),l=function(){function t(t,n,e,r,i){this.id=n,this.name=e,this.disableScroll=i,this.priority=1e6*r+n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),u=function(){function t(t,n,e,r){this.id=n,this.disable=e,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.disableGesture(n[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.enableGesture(n[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),c="backdrop-no-scroll",a=new o,s=function(t,n,e,r){var i,o,l=d(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](n,e,l),function(){t[o](n,e,l)}},d=function(t){if(void 0===r)try{var n=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},n)}catch(e){r=!1}return!!r},f=function(t){return t instanceof Document?t:t.ownerDocument},v=function(t){var n=!1,e=!1,r=!0,o=!1,l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),u=l.canStart,c=l.onWillStart,d=l.onStart,v=l.onEnd,m=l.notCaptured,g=l.onMove,y=l.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},S=function(t,n,e){var r=l.maxAngle*(Math.PI/180),i="x"===l.direction,o=Math.cos(r),u=n*n,c=0,a=0,s=!1,d=0;return{start:function(t,n){c=t,a=n,d=0,s=!0},detect:function(t,n){if(!s)return!1;var e=t-c,r=n-a,l=e*e+r*r;if(l<u)return!1;var f=Math.sqrt(l),v=(i?e:r)/f;return d=v>o?1:v<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,l.threshold),E=a.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),k=function(){n&&(o=!1,g&&g(w))},C=function(){return!(E&&!E.capture()||(n=!0,r=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,c?c(w).then(z):z(),0))},z=function(){d&&d(w),r=!0},L=function(){n=!1,e=!1,o=!1,r=!0,E.release()},T=function(t){var e=n,i=r;L(),i&&(h(w,t),e?v&&v(w):m&&m(w))},D=function(t,n,e,r,i){var o,l,u,c,a,d,v,h=0,p=function(r){h=Date.now()+2e3,n(r)&&(!l&&e&&(l=s(t,"touchmove",e,i)),u||(u=s(t,"touchend",m,i)),c||(c=s(t,"touchcancel",m,i)))},b=function(r){h>Date.now()||n(r)&&(!d&&e&&(d=s(f(t),"mousemove",e,i)),v||(v=s(f(t),"mouseup",g,i)))},m=function(t){y(),r&&r(t)},g=function(t){w(),r&&r(t)},y=function(){l&&l(),u&&u(),c&&c(),l=u=c=void 0},w=function(){d&&d(),v&&v(),d=v=void 0},S=function(){y(),w()},E=function(n){n?(o&&o(),a&&a(),o=a=void 0,S()):(o||(o=s(t,"touchstart",p,i)),a||(a=s(t,"mousedown",b,i)))};return{setDisabled:E,stop:S,destroy:function(){E(!0),r=e=n=void 0}}}(l.el,function(t){var n=b(t);return!(e||!r)&&(p(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=n,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!u||!1!==u(w))&&(E.release(),!!E.start()&&(e=!0,0===y?C():(S.start(w.startX,w.startY),!0))))},function(t){n?!o&&r&&(o=!0,h(w,t),Object(i.n)(k)):(h(w,t),S.detect(w.currentX,w.currentY)&&(S.isGesture()&&C()||_()))},T,{capture:!1}),_=function(){L(),D.stop(),m&&m(w)};return{setDisabled:function(t){t&&n&&T(void 0),D.setDisabled(t)},destroy:function(){E.destroy(),D.destroy()}}},h=function(t,n){if(n){var e=t.currentX,r=t.currentY,i=t.timeStamp;p(n,t);var o=t.currentX,l=t.currentY,u=(t.timeStamp=b(n))-i;if(u>0&&u<100){var c=(l-r)/u;t.velocityX=(o-e)/u*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=l-t.startY,t.event=n}},p=function(t,n){var e=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];e=o.clientX,r=o.clientY}else void 0!==t.pageX&&(e=t.pageX,r=t.pageY)}n.currentX=e,n.currentY=r},b=function(t){return t.timeStamp||Date.now()}},"6MRr":function(t,n,e){"use strict";var r=e("CcnG"),i=e("oBZk"),o=e("ZZ/e"),l=e("ZYCi"),u=e("Ip0R");e("DKdE"),e("5gP/"),e.d(n,"a",function(){return c}),e.d(n,"b",function(){return d});var c=r.rb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{border-radius:0;box-shadow:none;cursor:pointer;margin:0;position:relative;width:100%}ion-card[_ngcontent-%COMP%]   .text-wrapper[_ngcontent-%COMP%]{background:rgba(0,0,0,.6);bottom:5%;position:absolute;width:100%}ion-card-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;line-height:1;margin-bottom:5px}ion-card-subtitle[_ngcontent-%COMP%], ion-card-title[_ngcontent-%COMP%]{color:#fff}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;-o-object-fit:cover;object-fit:cover;padding-bottom:3px}"]],data:{}});function a(t){return r.Nb(0,[(t()(),r.tb(0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),r.tb(1,0,null,null,3,"ion-button",[["fill","outline"],["size","small"]],null,[[null,"click"]],function(t,n,e){var r=!0,i=t.component;return"click"===n&&(r=!1!==i.onAddToFavorites(e,i.movie)&&r),r},i.G,i.c)),r.sb(2,49152,null,0,o.k,[r.h,r.k,r.z],{fill:[0,"fill"],size:[1,"size"]},null),(t()(),r.tb(3,0,null,0,1,"ion-icon",[["name","star"],["slot","icon-only"]],null,null,null,i.P,i.l)),r.sb(4,49152,null,0,o.C,[r.h,r.k,r.z],{name:[0,"name"]},null)],function(t,n){t(n,2,0,"outline","small"),t(n,4,0,"star")},null)}function s(t){return r.Nb(0,[(t()(),r.tb(0,0,null,null,3,"ion-button",[["fill","outline"],["size","small"]],null,[[null,"click"]],function(t,n,e){var r=!0,i=t.component;return"click"===n&&(r=!1!==i.onRemoveFromFavorites(e,i.movie.id)&&r),r},i.G,i.c)),r.sb(1,49152,null,0,o.k,[r.h,r.k,r.z],{fill:[0,"fill"],size:[1,"size"]},null),(t()(),r.tb(2,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,i.P,i.l)),r.sb(3,49152,null,0,o.C,[r.h,r.k,r.z],{name:[0,"name"]},null)],function(t,n){t(n,1,0,"outline","small"),t(n,3,0,"close")},null)}function d(t){return r.Nb(2,[(t()(),r.tb(0,0,null,null,24,"ion-card",[],null,[[null,"click"]],function(t,n,e){var i=!0,o=t.component;return"click"===n&&(i=!1!==r.Eb(t,1).onClick()&&i),"click"===n&&(i=!1!==r.Eb(t,4).onClick(e)&&i),"click"===n&&(i=!1!==o.onViewMore(o.movie.id)&&i),i},i.K,i.e)),r.sb(1,16384,null,0,l.n,[l.m,l.a,[8,null],r.D,r.k],{routerLink:[0,"routerLink"]},null),r.Fb(2,2),r.sb(3,49152,null,0,o.m,[r.h,r.k,r.z],null,null),r.sb(4,737280,null,0,o.Kb,[u.j,o.Hb,r.k,l.m,[2,l.n]],null,null),(t()(),r.tb(5,0,null,0,1,"div",[["class","image-wrapper"]],null,null,null,null,null)),(t()(),r.tb(6,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(t()(),r.tb(7,0,null,0,17,"div",[["class","text-wrapper"]],null,null,null,null,null)),(t()(),r.tb(8,0,null,null,16,"ion-grid",[],null,null,null,i.N,i.j)),r.sb(9,49152,null,0,o.A,[r.h,r.k,r.z],null,null),(t()(),r.tb(10,0,null,0,14,"ion-row",[["class","ion-align-items-center"]],null,null,null,i.W,i.s)),r.sb(11,49152,null,0,o.ib,[r.h,r.k,r.z],null,null),(t()(),r.tb(12,0,null,0,7,"ion-col",[["size","10"]],null,null,null,i.L,i.h)),r.sb(13,49152,null,0,o.t,[r.h,r.k,r.z],{size:[0,"size"]},null),(t()(),r.tb(14,0,null,0,2,"ion-card-title",[],null,null,null,i.J,i.g)),r.sb(15,49152,null,0,o.q,[r.h,r.k,r.z],null,null),(t()(),r.Lb(16,0,[" "," "])),(t()(),r.tb(17,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.I,i.f)),r.sb(18,49152,null,0,o.p,[r.h,r.k,r.z],null,null),(t()(),r.Lb(19,0,[" "," "])),(t()(),r.tb(20,0,null,0,4,"ion-col",[["class","ion-text-end"],["size","2"]],null,null,null,i.L,i.h)),r.sb(21,49152,null,0,o.t,[r.h,r.k,r.z],{size:[0,"size"]},null),(t()(),r.ib(16777216,null,0,1,null,a)),r.sb(23,16384,null,0,u.l,[r.O,r.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(t()(),r.ib(0,[["remove",2]],0,0,null,s))],function(t,n){var e=n.component,i=t(n,2,0,"/details",e.movie.id);t(n,1,0,i),t(n,4,0),t(n,13,0,"10"),t(n,21,0,"2"),t(n,23,0,!e.isExists,r.Eb(n,24))},function(t,n){var e=n.component;t(n,6,0,e.imageService.getUrl(e.movie.backdrop_path)),t(n,16,0,e.movie.title),t(n,19,0,e.movie.release_date)})}},"6WfQ":function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var r=e("mrSG"),i=function(t,n,e,i,o){return r.b(void 0,void 0,void 0,function(){var l;return r.e(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(n,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return l="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e,i&&i.forEach(function(t){return l.classList.add(t)}),o&&Object.assign(l,o),n.appendChild(l),l.componentOnReady?[4,l.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,l]}})})},o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},DKdE:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("CcnG"),i=(e("dJ3e"),function(){function t(t){this.imageService=t,this.isExists=!1,this.addToFavorites=new r.m,this.removeFromFavorites=new r.m}return t.prototype.onViewMore=function(t){},t.prototype.onAddToFavorites=function(t,n){t.preventDefault(),t.stopPropagation(),this.addToFavorites.emit(n)},t.prototype.onRemoveFromFavorites=function(t,n){t.preventDefault(),t.stopPropagation(),this.removeFromFavorites.emit(n)},t}())},Dgxi:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,u.forEach(function(t){for(var e=n.querySelectorAll(t),r=e.length-1;r>=0;r--){var l=e[r];l.parentNode?l.parentNode.removeChild(l):n.removeChild(l);for(var u=o(l),c=0;c<u.length;c++)i(u[c])}});for(var r=o(n),l=0;l<r.length;l++)i(r[l]);var c=document.createElement("div");c.appendChild(n);var a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(s){return console.error(s),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var e=t.attributes[n],r=e.name;if(l.includes(r.toLowerCase())){var u=e.value;null!=u&&u.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var c=o(t);for(n=0;n<c.length;n++)i(c[n])}},o=function(t){return null!=t.children?t.children:t.childNodes},l=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},SF24:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return l}),e.d(n,"d",function(){return r});var r=function(){var t=window.TapticEngine;t&&t.selection()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},l=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},fXh5:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return l}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return c});var r=e("mrSG"),i=function(t,n){return null!==n.closest(t)},o=function(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},l=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},u=/^[a-z][a-z0-9+\-.]*:/,c=function(t,n,e){return r.b(void 0,void 0,void 0,function(){var i;return r.e(this,function(r){return null!=t&&"#"!==t[0]&&!u.test(t)&&(i=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,i.push(t,e)]):[2,!1]})})}},i1UR:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return f}),e.d(n,"e",function(){return v}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return i}),e.d(n,"h",function(){return d}),e.d(n,"i",function(){return a}),e.d(n,"j",function(){return s}),e.d(n,"k",function(){return l});var r=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},i=function(t){return!!t.shadowRoot&&!!t.attachShadow},o=function(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null},l=function(t,n,e,r,o){if(t||i(n)){var l=n.querySelector("input.aux-input");l||((l=n.ownerDocument.createElement("input")).type="hidden",l.classList.add("aux-input"),n.appendChild(l)),l.disabled=o,l.name=e,l.value=r||""}},u=function(t,n,e){return Math.max(t,Math.min(n,e))},c=function(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}},a=function(t){return t.timeStamp||Date.now()},s=function(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var n="rtl"===document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,n){var e=t._original||t;return{_original:t,emit:v(e.emit.bind(e),n)}},v=function(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}},i7WA:function(t,n,e){"use strict";e.d(n,"a",function(){return w}),e.d(n,"b",function(){return g}),e.d(n,"c",function(){return S}),e.d(n,"d",function(){return l});var r=e("mrSG"),i=e("3eIi"),o=e("bjU6"),l=function(t){return new Promise(function(n,e){Object(i.n)(function(){u(t),c(t).then(function(e){e.animation&&e.animation.destroy(),a(t),n(e)},function(n){a(t),e(n)})})})},u=function(t){var n=t.enteringEl,e=t.leavingEl;E(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),S(n,!1),e&&S(e,!1)},c=function(t){return r.b(void 0,void 0,void 0,function(){var n;return r.e(this,function(e){switch(e.label){case 0:return[4,s(t)];case 1:return[2,(n=e.sent())?d(n,t):f(t)]}})})},a=function(t){var n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},s=function(t){return r.b(void 0,void 0,void 0,function(){var n;return r.e(this,function(r){switch(r.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,e.e(96).then(e.bind(null,"72vL"))]:[2,void 0];case 1:return n=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(97).then(e.bind(null,"LoTI"))];case 3:n=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,n]}})})},d=function(t,n){return r.b(void 0,void 0,void 0,function(){var i;return r.e(this,function(r){switch(r.label){case 0:return[4,v(n,!0)];case 1:return r.sent(),[4,e.e(1).then(e.bind(null,"6Qsj")).then(function(e){return e.create(t,n.baseEl,n)})];case 2:return i=r.sent(),b(n.enteringEl,n.leavingEl),[4,p(i,n)];case 3:return r.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&m(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})},f=function(t){return r.b(void 0,void 0,void 0,function(){var n,e;return r.e(this,function(r){switch(r.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,v(t,!1)];case 1:return r.sent(),b(n,e),m(n,e),[2,{hasCompleted:!0}]}})})},v=function(t,n){return r.b(void 0,void 0,void 0,function(){var e;return r.e(this,function(r){switch(r.label){case 0:return e=(void 0!==t.deepWait?t.deepWait:n)?[w(t.enteringEl),w(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})},h=function(t,n){return r.b(void 0,void 0,void 0,function(){return r.e(this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},p=function(t,n){var e=n.progressCallback,r=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),r},b=function(t,n){g(n,o.c),g(t,o.a)},m=function(t,n){g(t,o.b),g(n,o.d)},g=function(t,n){if(t){var e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}},y=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},w=function(t){return r.b(void 0,void 0,void 0,function(){var n;return r.e(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(w))];case 3:e.sent(),e.label=4;case 4:return[2]}})})},S=function(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=function(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")}}}]);