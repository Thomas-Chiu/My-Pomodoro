(function(t){function e(e){for(var o,s,a=e[0],u=e[1],c=e[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function s(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b3289":"e0b1abb2","chunk-2d0b59a6":"61ee7864","chunk-2d0e5e97":"8053d0f4"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=s(t);var c=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var o=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("span",[t._v(" |")]),n("router-link",{attrs:{to:"/list"}},[t._v(" List")]),n("span",[t._v(" |")]),n("router-link",{attrs:{to:"/settings"}},[t._v(" Settings")])],1),n("keep-alive",[n("router-view")],1)],1)},s=[],a=n("2877"),u={},c=Object(a["a"])(u,i,s,!1,null,null,null),l=c.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("hr"),n("h3",[t._v(t._s(t.currentText))]),n("h4",[t._v(t._s(t.timeText))]),1!=t.status?n("b-btn",{on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1==t.status?n("b-btn",{on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.todos.length>0?n("b-btn",{on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e()],1)},h=[],p=(n("99af"),{name:"Home",data:function(){return{status:0,timer:0}},computed:{currentText:function(){return this.current.length>0?this.current:this.todos.length>0?"Click to start.":"All done."},timeText:function(){var t=Math.floor(this.timeLeft/60),e=Math.floor(this.timeLeft%60);return"".concat(t," : ").concat(e)},timeLeft:function(){return this.$store.getters.timeLeft},current:function(){return this.$store.getters.current},todos:function(){return this.$store.getters.todos},alarm:function(){return this.$store.getters.alarm}},methods:{start:function(){var t=this;2===this.status?(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeLeft<=0&&t.finish(!1)}),1e3)):this.todos.length>0&&(this.$store.commit("start"),this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeLeft<=0&&t.finish(!1)}),1e3))},pause:function(){clearInterval(this.timer),this.status=2},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src="./alarms/"+this.alarm,e.play()}this.todos.length>0?this.start():setTimeout((function(){alert("You're all done!")}),500)}}}),v=p,b=Object(a["a"])(v,m,h,!1,null,null,null),g=b.exports;o["default"].use(d["a"]);var k=[{path:"/",name:"Home",component:g,meta:{title:"Home"}},{path:"/list",name:"List",component:function(){return n.e("chunk-2d0b59a6").then(n.bind(null,"1a33"))},meta:{title:"List"}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))},meta:{title:"Settings"}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))},meta:{title:"404 Error"}}],w=new d["a"]({routes:k});w.afterEach((function(t,e){document.title=t.meta.title}));var y=w,_=(n("a434"),n("b0c0"),n("2f62")),T=n("0e44");o["default"].use(_["a"]);var j=parseInt("1500"),L=parseInt("300"),O=new _["a"].Store({state:{todos:[],timeLeft:0,alarm:"alarm_engine1.mp3",current:"",isBreak:!1},getters:{todos:function(t){return t.todos},timeLeft:function(t){return t.timeLeft},alarm:function(t){return t.alarm},current:function(t){return t.current},isBreak:function(t){return t.isBreak}},mutations:{selectAlarm:function(t,e){t.alarm=e},addTodo:function(t,e){t.todos.push({name:e,edit:!1,model:e})},delTodo:function(t,e){t.todos.splice(e,1)},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},cancelTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},saveTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},dragTodo:function(t,e){t.todos=e},countdown:function(t){t.timeLeft--},start:function(t){t.isBreak?t.current="Take a break!":t.isBreak||(t.current=t.todos[0].name,t.todos.splice(0,1))},finish:function(t){t.todos.length>0&&(t.isBreak=!t.isBreak),t.current="",t.timeLeft=t.isBreak?L:j}},actions:{},modules:{},plugins:[Object(T["a"])()]}),x=n("ecee"),$=n("ad3d"),S=n("c074"),B=n("310e"),P=n.n(B);n("ecb2"),n("be55");o["default"].config.productionTip=!1,x["c"].add(S["a"],S["c"],S["g"],S["h"],S["e"],S["d"],S["b"],S["f"]),o["default"].component("font-awesome-icon",$["a"]),o["default"].component("draggable",P.a),new o["default"]({router:y,store:O,render:function(t){return t(l)}}).$mount("#app")},be55:function(t,e,n){}});
//# sourceMappingURL=app.1a6d79ca.js.map