(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,h=[];u<i.length;u++)o=i[u],r[o]&&h.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"099d":function(t,e,a){"use strict";var n=a("62b7"),r=a.n(n);r.a},"0d20":function(t,e,a){"use strict";var n=a("ed56"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-container",{staticStyle:{"margin-top":"48px"}},[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{absolute:"",app:"",stateless:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pa-1"},[a("v-list-tile",[a("v-list-tile",[a("div",{staticClass:"font-weight-thin font-italic display-1",staticStyle:{"text-align":"center"}},[t._v(t._s(t.$store.state.user.username))])]),a("v-list-tile-content")],1)],1),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._l(t.items,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.to},on:{click:function(e){t.drawer=!t.drawer}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),a("v-list-tile",{on:{click:t.password}},[a("v-list-tile-action",[a("v-icon",[t._v("lock")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Change Password")])],1)],1),a("v-list-tile",{on:{click:t.logout}},[a("v-list-tile-action",[a("v-icon",[t._v("logout")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Logout")])],1)],1)],2)],1),a("v-toolbar",{attrs:{color:"teal ",dark:"",app:"",flat:""}},[a("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("\n      Sure\n      "),a("b",[t._v("Chat")])]),a("v-spacer"),a("v-menu",{attrs:{bottom:"",left:"","offset-y":"","close-on-content-click":!1,"min-width":300,"max-width":500,transition:"slide-x-reverse-transition"}})],1)],1)},c=[],l=(a("a481"),a("bc3a")),d=a.n(l),u=a("a78e"),h=a.n(u),v=a("2f62");n["a"].use(v["a"]);var p=new v["a"].Store({state:{user:{}},mutations:{GET_USER:function(t){var e="api/accounts/me/";d.a.get(e).then(function(e){t.user.id=e.data.id,t.user.username=e.data.username,t.user.email=e.data.email}).catch(function(t){console.log(t)})}},actions:{},getters:{}}),f={data:function(){return{drawer:!1,items:[]}},methods:{getUserList:function(){var t=this,e="api/accounts/me/";d.a.get(e).then(function(e){e.data.id,e.data,t.items=[{title:"Messages",icon:"chat",to:"/chat"}],t.items.push()}).catch(function(t){console.log(t)})},logout:function(){window.location.replace(window.location.protocol+"//"+window.location.host+"/accounts/logout/")},password:function(){window.location.replace(window.location.protocol+"//"+window.location.host+"/accounts/password/")}},mounted:function(){this.getUserList()}},m=f,g=a("2877"),_=a("6544"),b=a.n(_),w=a("ce7e"),k=a("132d"),y=a("8860"),C=a("ba95"),x=a("40fe"),S=a("5d23"),L=a("e449"),T=a("f774"),V=a("9910"),M=a("71d9"),P=a("706c"),O=a("2a7f"),$=Object(g["a"])(m,i,c,!1,null,null,null),j=$.exports;b()($,{VDivider:w["a"],VIcon:k["a"],VList:y["a"],VListTile:C["a"],VListTileAction:x["a"],VListTileContent:S["a"],VListTileTitle:S["b"],VMenu:L["a"],VNavigationDrawer:T["a"],VSpacer:V["a"],VToolbar:M["a"],VToolbarSideIcon:P["a"],VToolbarTitle:O["a"]});var E={name:"App",components:{Navbar:j},data:function(){return{}},methods:{getUser:function(){this.$store.commit("GET_USER")}},mounted:function(){this.getUser()}},A=E,D=(a("acf3"),a("7496")),F=a("a523"),B=Object(g["a"])(A,s,o,!1,null,null,null),G=B.exports;b()(B,{VApp:D["a"],VContainer:F["a"]});var U=a("8c4f"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{depressed:"",large:"",flat:"",outline:"",color:"teal"},on:{click:function(e){t.startcondialog=!t.startcondialog}}},[a("v-icon",[t._v("account_box")]),t._v(" Start a new conversation!")],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.startcondialog,callback:function(e){t.startcondialog=e},expression:"startcondialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline teal white--text ",attrs:{"primary-title":""}},[t._v("\n          Search for a user\n        ")]),a("v-card-text",[a("v-autocomplete",{staticStyle:{margin:"auto"},attrs:{items:t.users,"search-input":t.search,"prepend-icon":"account_box","cache-items":"","hide-details":"",placeholder:"Start typing to Search for a user","solo-inverted":"",clearable:"",autofocus:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.StartConversation(),t.getThreads(),t.startcondialog=!1}}},[t._v("\n            Start a new conversation\n          ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.startcondialog=!1,t.select=""}}},[t._v("\n            Cancel\n          ")])],1)],1)],1),a("div",{staticClass:"row"},[a("div",{staticClass:"chat-body"},[a("center",[a("b",[t._v("Active Threads")])]),a("hr"),a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-flex",t._l(t.threads,function(e,n){return a("div",{key:n},[n==t.current_thread_index?a("v-avatar",{attrs:{color:"orange",size:"50"}},[t.$store.state.user.id==e.id?a("b",{staticStyle:{color:"white","font-size":"200%",cursor:"pointer"},attrs:{title:e.sender.username},on:{click:function(e){return t.setCurrentThread(n)}}},[a("v-icon",{attrs:{color:"white"}},[t._v("done_all")])],1):a("b",{staticStyle:{color:"white","font-size":"200%",cursor:"pointer"},attrs:{title:e.receiver.username},on:{click:function(e){return t.setCurrentThread(n)}}},[a("v-icon",{attrs:{color:"white"}},[t._v("done_all")])],1)]):a("v-avatar",{attrs:{color:"teal",size:"50"}},[t.$store.state.user.id==e.receiver.id?a("b",{staticStyle:{color:"white","font-size":"200%",cursor:"pointer"},attrs:{title:e.sender.username},on:{click:function(e){return t.setCurrentThread(n)}}},[t._v(t._s(e.sender.username.charAt(0).toUpperCase()))]):a("b",{staticStyle:{color:"white","font-size":"200%",cursor:"pointer"},attrs:{title:e.receiver.username},on:{click:function(e){return t.setCurrentThread(n)}}},[t._v(t._s(e.receiver.username.charAt(0).toUpperCase()))])]),a("hr")],1)}),0)],1)],1),a("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}}),a("div",{staticClass:"col msg-window-container"},[a("div",{staticClass:"card",attrs:{id:"msgWindow"}},[a("div",{staticClass:"card-header"},[t.current_chat?a("b",[t._v(" You Are Now Messaging:   "+t._s(t.current_chat)+"   "),a("v-btn",{staticClass:" right",attrs:{flat:"",depressed:"",small:"",color:"teal"},on:{click:function(e){return t.reload()}}},[a("v-icon",[t._v("refresh")]),t._v(" Refresh Threads")],1)],1):a("b",[t._v("Welcome to Sure Chat!   "),a("v-btn",{staticClass:" right",attrs:{flat:"",depressed:"",small:"",color:"teal"},on:{click:function(e){return t.reload()}}},[a("v-icon",[t._v("refresh")]),t._v(" Refresh Threads")],1)],1)]),null!==t.current_thread_index?a("div",{staticClass:"msg annoucement"},[t._v("Chat started!")]):t._e(),t._l(t.messages,function(e,n){return a("div",{key:n,staticClass:"card-body",attrs:{id:"msgs"}},[t._t("default",[e.sender.id===t.$store.state.user.id?a("div",{staticClass:"msg from",attrs:{title:e.timestamp}},[a("p",[t._v(t._s(e.text))]),a("small",[t._v(t._s(e.timestamp))])]):a("div",{staticClass:"msg to",attrs:{title:e.timestamp}},[a("p",[t._v(t._s(e.text))]),a("small",{attrs:{color:"grey"}},[t._v(t._s(e.timestamp))])])])],2)})],2),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"input-group",attrs:{id:"msgForm","data-sender":"me"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.new_message,expression:"new_message"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type message and hit [Enter] to send."},domProps:{value:t.new_message},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)},input:function(e){e.target.composing||(t.new_message=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.sendMessage}},[t._v("Send")])])])])])])],1)},z=[],N={data:function(){return{search:null,select:null,selectedid:null,id:null,startcondialog:!1,users:[],ids:[],messages:[],threads:[],current_thread:null,current_thread_index:null,current_chat:null,new_message:null}},methods:{getThreads:function(){var t=this,e="api/chatapp/threads/";d.a.get(e).then(function(e){t.threads=e.data}).catch(function(t){console.log(t)})},reload:function(){location.reload()},setCurrentThread:function(t){var e=this;this.current_thread_index=t,this.current_thread=this.threads[t].id,this.$store.state.user.id==this.threads[t].sender.id?this.current_chat=this.threads[t].receiver.username:this.current_chat=this.threads[t].sender.username,d.a.get("api/chat/messages/".concat(this.current_thread,"/")).then(function(t){e.messages=t.data;var a={headers:{"X-CSRFToken":h.a.get("csrftoken")}};d.a.put("api/chat/messages/".concat(e.current_thread,"/read/"),{read:!0},a).then(function(t){e.getThreads()}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},sendMessage:function(){var t=this;if(null!==this.current_thread_index){var e="api/chat/messages/create/",a={text:this.new_message,thread:this.current_thread},n={headers:{"X-CSRFToken":h.a.get("csrftoken")}};d.a.post(e,a,n).then(function(e){t.new_message=null,t.setCurrentThread(t.current_thread_index);var a=new Audio("https://notificationsounds.com/notification-sounds/job-done-501/download/mp3");a.play()}).catch(function(t){console.log(t)})}},update:function(){setInterval(function(){null!==this.current_thread_index&&(this.setCurrentThread(this.current_thread_index),this.getThreads())}.bind(this),1e3)},userlist:function(){var t=this,e="/api/accounts/list/",a=[],n=[];d.a.get(e).then(function(e){for(var r=0;r<e.data.length;r++)e.data[r].id!=t.$store.state.user.id&&(n[r]=e.data[r].username,a[r]=e.data[r].id);n=n.filter(function(t){return void 0!==t}),a=a.filter(function(t){return void 0!==t}),t.users=n,t.ids=a}).catch(function(t){console.log(t)})},StartConversation:function(){var t,e=this;if(""!=this.select){t=this.users.indexOf(this.select),this.selectedid=this.ids[t];var a="/api/chatapp/threads/create/",n={sender:this.$store.state.user.id,receiver:this.selectedid},r={headers:{"X-CSRFToken":h.a.get("csrftoken")}};d.a.post(a,n,r).then(function(t){location.reload(),e.getThreads(),e.setCurrentThread(e.current_thread_index),e.select="",e.selectedid=""}).catch(function(t){console.log(t),e.select="",e.selectedid=""})}}},updated:function(){},mounted:function(){this.getThreads(),this.update(),this.userlist()}},I=N,Z=(a("099d"),a("c6a6")),X=a("8212"),H=a("8336"),J=a("b0af"),W=a("99d9"),Y=a("12b2"),q=a("169a"),K=a("0e8f"),Q=Object(g["a"])(I,R,z,!1,null,null,null),tt=Q.exports;b()(Q,{VAutocomplete:Z["a"],VAvatar:X["a"],VBtn:H["a"],VCard:J["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:Y["a"],VContainer:F["a"],VDialog:q["a"],VDivider:w["a"],VFlex:K["a"],VIcon:k["a"],VSpacer:V["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("svg",{attrs:{width:"380px",height:"500px",viewBox:"0 0 837 1045",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:sketch":"http://www.bohemiancoding.com/sketch/ns"}},[a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","sketch:type":"MSPage"}},[a("path",{attrs:{d:"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z",id:"Polygon-1",stroke:"#007FB2","stroke-width":"6","sketch:type":"MSShapeGroup"}}),a("path",{attrs:{d:"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z",id:"Polygon-2",stroke:"#EF4A5B","stroke-width":"6","sketch:type":"MSShapeGroup"}}),a("path",{attrs:{d:"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z",id:"Polygon-3",stroke:"#795D9C","stroke-width":"6","sketch:type":"MSShapeGroup"}}),a("path",{attrs:{d:"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z",id:"Polygon-4",stroke:"#F2773F","stroke-width":"6","sketch:type":"MSShapeGroup"}}),a("path",{attrs:{d:"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z",id:"Polygon-5",stroke:"#36B455","stroke-width":"6","sketch:type":"MSShapeGroup"}})])]),t._m(0)])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-box"},[a("h1",[t._v("404")]),a("h2",[a("b",[t._v("Page not found")])]),a("div",{staticClass:"buttons-con"},[a("div",{staticClass:"action-link-wrap"},[a("a",{staticClass:"link-button link-back-button",attrs:{onclick:"history.back(-1)"}},[t._v("Go Back")]),a("a",{staticClass:"link-button",attrs:{href:"/"}},[t._v("Go to Home Page")])])])])}],nt={},rt=nt,st=(a("0d20"),Object(g["a"])(rt,et,at,!1,null,"72676033",null)),ot=st.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("center",[a("h2",[t._v("Database Dump files will download shortly...")])]),a("v-snackbar",{attrs:{color:"danger",bottom:"",vertical:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("p",[t._v("Please allow pop-ups in order to start downloading the file")]),a("v-btn",{attrs:{color:"teal",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n        Close\n      ")])],1)],1)},ct=[],lt={data:function(){return{snackbar:!0}},methods:{down:function(){var t="http://localhost:8000/api/chat/messages/dump/";window.open(t,"_blank")}},mounted:function(){this.down()}},dt=lt,ut=a("2db4"),ht=Object(g["a"])(dt,it,ct,!1,null,null,null),vt=ht.exports;b()(ht,{VBtn:H["a"],VSnackbar:ut["a"]}),n["a"].use(U["a"]);var pt=new U["a"]({mode:"history",base:"/",routes:[{path:"/",name:"chat",component:tt,meta:{title:"Messages"}},{path:"/Home",name:"chat",component:tt,meta:{title:"Messages"}},{path:"/chat",name:"chat",component:tt,meta:{title:"Messages"}},{path:"/dbdump",name:"DBDump",component:vt,meta:{title:"DBdump"}},{path:"*",name:"404",component:ot,meta:{title:"Not Found"}}]});pt.beforeEach(function(t,e,a){t.matched.some(function(t){return document.title=t.meta.title}),a()});var ft=pt;d.a.defaults.baseURL="http://localhost:8000/",n["a"].config.productionTip=!1,new n["a"]({router:ft,store:p,render:function(t){return t(G)}}).$mount("#app")},"62b7":function(t,e,a){},"9ce4":function(t,e,a){},acf3:function(t,e,a){"use strict";var n=a("9ce4"),r=a.n(n);r.a},ed56:function(t,e,a){}});
//# sourceMappingURL=app.b4a02cbe.js.map