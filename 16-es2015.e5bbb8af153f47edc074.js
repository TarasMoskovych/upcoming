(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{L6id:function(e,n,l){"use strict";l.r(n);var i=l("8Y7J");class t{}var o=l("pMnS"),r=l("npC/"),s=l("668k"),u=l("6MRr"),a=l("DKdE"),c=l("5gP/"),h=l("oBZk"),b=l("ZZ/e");class g{constructor(){this.viewMore=new i.m}onViewMore(e){this.viewMore.emit(e)}disable(){this.infiniteScroll.disabled=!0}enable(){this.infiniteScroll.disabled=!1}}var p=i.pb({encapsulation:0,styles:[["ion-infinite-scroll-content[_ngcontent-%COMP%]{margin-top:15px}"]],data:{}});function v(e){return i.Lb(2,[i.Hb(671088640,1,{infiniteScroll:0}),(e()(),i.rb(1,0,null,null,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(e,n,l){var i=!0;return"ionInfinite"===n&&(i=!1!==e.component.onViewMore(l)&&i),i},h.S,h.n)),i.qb(2,49152,[[1,4]],0,b.E,[i.h,i.k,i.x],null,null),(e()(),i.rb(3,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","Loading more ..."]],null,null,null,h.R,h.o)),i.qb(4,49152,null,0,b.F,[i.h,i.k,i.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],function(e,n){e(n,4,0,"crescent","Loading more ...")},null)}var d=l("WE+f"),m=l("aZ8m"),f=l("XOzN"),M=l("S0jo"),y=l("Zr1d"),S=l("SVse"),G=l("IzEk"),w=(l("dJ3e"),l("GTMp"));class x{constructor(e,n,l,i,t){this.dataService=e,this.headerService=n,this.loaderSerice=l,this.modalService=i,this.storageService=t,this.movies=[],this.loading=!1,this.noResults=!1,this.isGetByQuery=!1,this.isGetByGenres=!1,this.isPopular=!0,this.page=1,this.ids=[],this.query=null}ngOnInit(){this.loaderSerice.showLoader().then(this.initPage.bind(this)),this.getGenres()}onTogglePopular(e){this.loading=!0,this.clearMovies(),this.isPopular=e,this.isGetByGenres=!1,this.isGetByQuery=!1,this.getMovies(),this.headerService.dispatch(this.isPopular?"Popular":"Upcoming")}onAddToFavorites(e){this.storageService.add(e)}onRemoveFromFavorites(e){this.storageService.remove(e)}onOpenGenres(){this.ids.length=0,this.modalService.create("genres",{component:w.a}).then(()=>{this.modalService.present("genres")})}onSearch(e){this.query=e,this.clearMovies(),this.getMoviesByQuery()}itemHeightFn(){return 200}onLoadMore(e){this.page++;const n=()=>e.target.complete();this.isGetByGenres?this.getMoviesByGenres(n):this.isGetByQuery?this.getMoviesByQuery(n):this.getMovies(n)}isExists(e){return this.storageService.checkExisting(e)}initPage(e){e.present(),this.headerService.dispatch("Popular"),Promise.resolve().then(this.getMovies.bind(this,()=>e.dismiss()))}getGenres(){this.headerService.applyChanges$.subscribe(e=>{e.forEach(e=>this.ids.push(e.id)),this.clearMovies(),this.getMoviesByGenres()})}getMovies(e){const n=this.page.toString();(this.isPopular?this.dataService.getPopular(n):this.dataService.getUpcoming(n)).pipe(Object(G.a)(1)).subscribe(n=>{this.onLoadDone(n,e)})}getMoviesByGenres(e){this.isGetByGenres=!0,this.isGetByQuery=!1,this.loading=!0,this.dataService.getByParams(this.page.toString(),{with_genres:this.ids.join()}).pipe(Object(G.a)(1)).subscribe(n=>{this.onLoadDone(n,e)})}getMoviesByQuery(e){this.isGetByQuery=!0,this.isGetByGenres=!1,this.loading=!0,this.dataService.getByQuery(this.page.toString(),{query:this.query}).pipe(Object(G.a)(1)).subscribe(n=>{this.onLoadDone(n,e)})}onLoadDone(e,n){e.forEach(e=>this.movies.push(e)),this.virtualScroll&&this.virtualScroll.checkEnd(),0===e.length&&this.viewMoreComponent.disable(),this.loading=!1,this.noResults=0===this.movies.length,n&&n()}clearMovies(){this.movies.length=0,this.page=1,this.viewMoreComponent&&this.viewMoreComponent.enable()}}var A=l("cplz"),F=l("lwos"),q=l("UYTb"),I=i.pb({encapsulation:0,styles:[["ion-text[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function B(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,1,"app-loader",[],null,null,null,r.b,r.a)),i.qb(1,49152,null,0,s.a,[],null,null)],null,null)}function L(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,1,"app-movie",[],null,[[null,"addToFavorites"],[null,"removeFromFavorites"]],function(e,n,l){var i=!0,t=e.component;return"addToFavorites"===n&&(i=!1!==t.onAddToFavorites(l)&&i),"removeFromFavorites"===n&&(i=!1!==t.onRemoveFromFavorites(l)&&i),i},u.b,u.a)),i.qb(1,49152,null,0,a.a,[c.a],{movie:[0,"movie"],isExists:[1,"isExists"]},{addToFavorites:"addToFavorites",removeFromFavorites:"removeFromFavorites"})],function(e,n){e(n,1,0,n.context.$implicit,n.component.isExists(n.context.$implicit.id))},null)}function P(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,7,null,null,null,null,null,null,null)),(e()(),i.rb(1,0,null,null,6,"ion-virtual-scroll",[["approxItemHeight","200px"]],null,null,null,h.hb,h.D)),i.qb(2,835584,[[1,4]],3,b.Cb,[i.x,i.q,i.k],{approxItemHeight:[0,"approxItemHeight"],items:[1,"items"],itemHeight:[2,"itemHeight"]},null),i.Hb(335544320,3,{itmTmp:0}),i.Hb(335544320,4,{hdrTmp:0}),i.Hb(335544320,5,{ftrTmp:0}),(e()(),i.gb(16777216,null,0,1,null,L)),i.qb(7,16384,[[3,4]],0,b.Mb,[i.J,i.M],null,null)],function(e,n){var l=n.component;e(n,2,0,"200px",l.movies,l.itemHeightFn)},null)}function T(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,1,"app-view-more",[],null,[[null,"viewMore"]],function(e,n,l){var i=!0;return"viewMore"===n&&(i=!1!==e.component.onLoadMore(l)&&i),i},v,p)),i.qb(1,49152,[[2,4]],0,g,[],null,{viewMore:"viewMore"})],null,null)}function E(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,4,null,null,null,null,null,null,null)),(e()(),i.rb(1,0,null,null,3,"ion-text",[["color","primary"]],null,null,null,h.cb,h.y)),i.qb(2,49152,null,0,b.wb,[i.h,i.k,i.x],{color:[0,"color"]},null),(e()(),i.rb(3,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),i.Jb(-1,null,["No results found!"]))],function(e,n){e(n,2,0,"primary")},null)}function H(e){return i.Lb(0,[i.Hb(671088640,1,{virtualScroll:0}),i.Hb(671088640,2,{viewMoreComponent:0}),(e()(),i.rb(2,0,null,null,1,"app-header",[],null,[[null,"openGenres"],[null,"toggleArrows"],[null,"searchItems"]],function(e,n,l){var i=!0,t=e.component;return"openGenres"===n&&(i=!1!==t.onOpenGenres()&&i),"toggleArrows"===n&&(i=!1!==t.onTogglePopular(l)&&i),"searchItems"===n&&(i=!1!==t.onSearch(l)&&i),i},d.b,d.a)),i.qb(3,49152,null,0,m.a,[f.a,M.a,y.a],{scrollArea:[0,"scrollArea"]},{toggleArrows:"toggleArrows",openGenres:"openGenres",searchItems:"searchItems"}),(e()(),i.rb(4,0,null,null,9,"ion-content",[["scrollEvents","true"]],null,null,null,h.M,h.i)),i.qb(5,49152,[["scrollArea",4]],0,b.u,[i.h,i.k,i.x],{scrollEvents:[0,"scrollEvents"]},null),(e()(),i.gb(16777216,null,0,1,null,B)),i.qb(7,16384,null,0,S.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(e()(),i.gb(16777216,null,0,1,null,P)),i.qb(9,16384,null,0,S.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(e()(),i.gb(16777216,null,0,1,null,T)),i.qb(11,16384,null,0,S.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(e()(),i.gb(16777216,null,0,1,null,E)),i.qb(13,16384,null,0,S.l,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],function(e,n){var l=n.component;e(n,3,0,i.Cb(n,5)),e(n,5,0,"true"),e(n,7,0,l.loading),e(n,9,0,l.movies.length>0),e(n,11,0,!l.noResults),e(n,13,0,l.noResults&&!l.loading)},null)}function k(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,1,"app-home",[],null,null,null,H,I)),i.qb(1,114688,null,0,x,[A.a,f.a,F.a,M.a,q.a],null,null)],function(e,n){e(n,1,0)},null)}var J=i.nb("app-home",x,k,{},{},[]),C=l("s7LF"),j=l("iInd"),O=l("PCNd");l.d(n,"HomePageModuleNgFactory",function(){return Q});var Q=i.ob(t,[],function(e){return i.zb([i.Ab(512,i.j,i.Z,[[8,[o.a,J]],[3,i.j],i.v]),i.Ab(4608,S.n,S.m,[i.s,[2,S.t]]),i.Ab(4608,C.g,C.g,[]),i.Ab(4608,b.a,b.a,[i.x,i.g]),i.Ab(4608,b.Gb,b.Gb,[b.a,i.j,i.p]),i.Ab(4608,b.Jb,b.Jb,[b.a,i.j,i.p]),i.Ab(1073742336,S.c,S.c,[]),i.Ab(1073742336,j.o,j.o,[[2,j.t],[2,j.m]]),i.Ab(1073742336,C.f,C.f,[]),i.Ab(1073742336,C.a,C.a,[]),i.Ab(1073742336,b.Db,b.Db,[]),i.Ab(1073742336,O.a,O.a,[]),i.Ab(1073742336,t,t,[]),i.Ab(1024,j.k,function(){return[[{path:"",component:x}]]},[])])})}}]);