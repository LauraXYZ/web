(function(n){function e(e){for(var t,r,s=e[0],u=e[1],c=e[2],g=0,l=[];g<s.length;g++)r=s[g],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var n,e=0;e<i.length;e++){for(var a=i[e],t=!0,r=1;r<a.length;r++){var u=a[r];0!==o[u]&&(t=!1)}t&&(i.splice(e--,1),n=s(s.s=a[0]))}return n}var t={},o={index:0},i=[];function r(n){return s.p+"static/js/"+({"pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370":"pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370","pages-index-index":"pages-index-index","pages-myBox-algoList":"pages-myBox-algoList","pages-myBox-myBox":"pages-myBox-myBox","pages-transaction-ping":"pages-transaction-ping","pages-transaction-ping2":"pages-transaction-ping2","pages-transaction-ping3":"pages-transaction-ping3","pages-transaction-transaction":"pages-transaction-transaction","pages-myBox-subSecond":"pages-myBox-subSecond"}[n]||n)+"."+{"pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370":"4aaf37ed","pages-index-index":"526fe3b3","pages-myBox-algoList":"ff9ec1ef","pages-myBox-myBox":"8620fc9f","pages-transaction-ping":"a3ef1a36","pages-transaction-ping2":"6ba6c242","pages-transaction-ping3":"befa8b49","pages-transaction-transaction":"f4204e2c","pages-myBox-subSecond":"06abebeb"}[n]+".js"}function s(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(n){var e=[],a=o[n];if(0!==a)if(a)e.push(a[2]);else{var t=new Promise((function(e,t){a=o[n]=[e,t]}));e.push(a[2]=t);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(n);var c=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(g);var a=o[n];if(0!==a){if(a){var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+t+": "+i+")",c.name="ChunkLoadError",c.type=t,c.request=i,a[1](c)}o[n]=void 0}};var g=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=n,s.c=t,s.d=function(n,e,a){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)s.d(a,t,function(e){return n[e]}.bind(null,t));return a},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="./",s.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var g=0;g<u.length;g++)e(u[g]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(n,e,a){n.exports=a("41a5")},"0082":function(n,e,a){a("c975"),a("ac1f"),a("466d"),function(){var n=navigator.userAgent,e=window.innerWidth;(!n.match(/AppleWebKit.*Mobile.*/)||n.indexOf("iPad")>-1)&&(window.innerWidth=e/1920*750,window.onload=function(){window.innerWidth=e})}()},"1f52":function(n,e){},"29ee":function(n,e){},"41a5":function(n,e,a){"use strict";var t=a("4ea4"),o=t(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("539a"),a("06b9"),a("0082");var i=t(a("ff9d")),r=t(a("e143")),s=(t(a("a821")),a("55c1")),u=t(a("8451")),c=t(a("592e")),g=t(a("d39f")),p=t(a("50fb")),l=t(a("a3d1")),d=t(a("6cde"));r.default.use(g.default),r.default.prototype.$utils=d.default,r.default.prototype._i18n=l.default,r.default.config.productionTip=!1,r.default.prototype.$api=u.default,r.default.prototype.$msg=p.default,i.default.mpType="app";var f=new r.default((0,o.default)((0,o.default)({i18n:l.default},i.default),{},{store:c.default}));(0,s.RouterMount)(f,"#app")},"50fb":function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(n,e,a){uni.showToast({title:n,icon:e||"none",duration:a||2e3})},o=function(n,e){uni.showLoading({title:n||"",mask:e||!1})},i={msg:t,lodding:o};e.default=i},"539a":function(n,e,a){"use strict";(function(n){var e=a("4ea4");a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0");var t=e(a("e143")),o={keys:function(){return[]}};n["____EC854C6____"]=!0,delete n["____EC854C6____"],n.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarTitleText:"AlgoMarket",navigationBarBackgroundColor:"#000",backgroundColor:"#000"}},n.__uniConfig.compilerVersion="3.3.13",n.__uniConfig.router={mode:"hash",base:"./"},n.__uniConfig.publicPath="./",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=o.keys().reduce((function(n,e){var a=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=o(e);return Object.assign(n[a]||(n[a]={}),t.common||t),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=a.e,t.default.component("pages-index-index",(function(n){var e={component:Promise.all([a.e("pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370"),a.e("pages-index-index")]).then(function(){return n(a("c270"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-transaction-transaction",(function(n){var e={component:Promise.all([a.e("pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370"),a.e("pages-transaction-transaction")]).then(function(){return n(a("a7ff"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-myBox-algoList",(function(n){var e={component:Promise.all([a.e("pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370"),a.e("pages-myBox-algoList")]).then(function(){return n(a("4fee"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-myBox-myBox",(function(n){var e={component:Promise.all([a.e("pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370"),a.e("pages-myBox-myBox")]).then(function(){return n(a("0988"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-myBox-subSecond",(function(n){var e={component:a.e("pages-myBox-subSecond").then(function(){return n(a("509e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-transaction-ping",(function(n){var e={component:Promise.all([a.e("pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370"),a.e("pages-transaction-ping")]).then(function(){return n(a("53c5"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-transaction-ping2",(function(n){var e={component:Promise.all([a.e("pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370"),a.e("pages-transaction-ping2")]).then(function(){return n(a("a4d5"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-transaction-ping3",(function(n){var e={component:Promise.all([a.e("pages-index-index~pages-myBox-algoList~pages-myBox-myBox~pages-transaction-ping~pages-transaction-pi~3f463370"),a.e("pages-transaction-ping3")]).then(function(){return n(a("af3b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"AlgoMarket",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/transaction/transaction",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"AlgoMarket",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-transaction-transaction",{slot:"page"})])}},meta:{name:"pages-transaction-transaction",isNVue:!1,maxWidth:0,pagePath:"pages/transaction/transaction",windowTop:0}},{path:"/pages/myBox/algoList",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"take a look",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-myBox-algoList",{slot:"page"})])}},meta:{name:"pages-myBox-algoList",isNVue:!1,maxWidth:0,pagePath:"pages/myBox/algoList",windowTop:0}},{path:"/pages/myBox/myBox",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"AlgoMarket",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-myBox-myBox",{slot:"page"})])}},meta:{name:"pages-myBox-myBox",isNVue:!1,maxWidth:0,pagePath:"pages/myBox/myBox",windowTop:0}},{path:"/pages/myBox/subSecond",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"subSecond",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-myBox-subSecond",{slot:"page"})])}},meta:{name:"pages-myBox-subSecond",isNVue:!1,maxWidth:0,pagePath:"pages/myBox/subSecond",windowTop:0}},{path:"/pages/transaction/ping",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"AlgoMarket",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-transaction-ping",{slot:"page"})])}},meta:{name:"pages-transaction-ping",isNVue:!1,maxWidth:0,pagePath:"pages/transaction/ping",windowTop:0}},{path:"/pages/transaction/ping2",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"AlgoMarket",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-transaction-ping2",{slot:"page"})])}},meta:{name:"pages-transaction-ping2",isNVue:!1,maxWidth:0,pagePath:"pages/transaction/ping2",windowTop:0}},{path:"/pages/transaction/ping3",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"AlgoMarket",navigationBarBackgroundColor:"#000",enablePullDownRefresh:!1,titleNView:!1})},[n("pages-transaction-ping3",{slot:"page"})])}},meta:{name:"pages-transaction-ping3",isNVue:!1,maxWidth:0,pagePath:"pages/transaction/ping3",windowTop:0}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,a("c8ba"))},"592e":function(n,e,a){"use strict";var t=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(a("e143")),i=t(a("26cb"));o.default.use(i.default);var r=new i.default.Store({state:{token:""},getters:{},mutations:{setToken:function(n,e){n.token=e}},actions:{}}),s=r;e.default=s},"6cde":function(n,e,a){"use strict";a("4d63"),a("ac1f"),a("25f0"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={getUrlKey:function(n){return decodeURIComponent((new RegExp("[?|&]"+n+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}};e.default=t},"6ea8":function(n,e,a){var t=a("c11f");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var o=a("4f06").default;o("f6516664",t,!0,{sourceMap:!1,shadowMode:!1})},"78ff":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={onLaunch:function(){},onShow:function(){n.log("App Show")},onHide:function(){n.log("App Hide")}};e.default=a}).call(this,a("5a52")["default"])},"7b37":function(n,e,a){"use strict";a.r(e);var t=a("78ff"),o=a.n(t);for(var i in t)"default"!==i&&function(n){a.d(e,n,(function(){return t[n]}))}(i);e["default"]=o.a},8451:function(n,e,a){"use strict";var t=a("4ea4");a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(a("5530")),i=(t(a("e143")),t(a("a821")),t(a("592e")),t(a("4328"))),r=t(a("3fcb")),s="http://54.177.233.134:4100/api",u=r.default.create({baseURL:s,timeout:6e4});u.defaults.headers["Content-Type"]="application/x-www-form-urlencoded";u.interceptors.request.use((function(n){uni.showLoading(),"post"===n.method?n.data=i.default.stringify((0,o.default)({},n.data)):n.params=(0,o.default)({},n.params);var e=uni.getStorageSync("token");return"Login"===n.url?n:e?(n.headers.Authorization=e,n):void uni.showToast({title:"请登录...",icon:"none"})}),(function(n){return uni.hideNavigationBarLoading(),Promise.reject(n)})),u.interceptors.response.use((function(n){return uni.hideLoading(),200==n.code?n.data:(uni.showToast({title:n.msg,icon:"none"}),n)}),(function(n){uni.hideLoading(),Promise.error(n)})),u.defaults.adapter=function(n){return new Promise((function(e,t){var o=a("65a5"),i=a("a4c3");uni.request({method:n.method.toUpperCase(),url:n.baseURL+i(n.url,n.params,n.paramsSerializer),header:n.headers,data:n.data,dataType:n.dataType,responseType:n.responseType,sslVerify:n.sslVerify,complete:function(a){a={data:a.data,status:a.statusCode,errMsg:a.errMsg,header:a.header,config:n},o(e,t,a)}})}))};var c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return u.get(n,e)},g=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return u.post(n,e)},p={Get:c,Post:g};e.default=p},"84b0":function(n,e,a){"use strict";var t;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return t}));var o=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[]},a3d1:function(n,e,a){"use strict";var t=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(a("29ee")),i=t(a("1f52")),r=t(a("e143")),s=t(a("a925"));r.default.use(s.default);var u=uni.getStorageSync("system_info");u||uni.getSystemInfo({success:function(n){uni.setStorageSync("system_info",n)}});var c="en"==u.language?"en":"zh_CN",g=new s.default({locale:c||"zh_CN",messages:{en:o.default,zh_CN:i.default}}),p=g;e.default=p},a821:function(n,e,a){"use strict";var t=a("4ea4"),o=t(a("e143")),i=t(a("55c1"));o.default.use(i.default);var r=new i.default({APP:{animation:{animationType:"pop-in",animationDuration:300}},encodeURL:!1,routes:[{path:"/pages/index/index",aliasPath:"/",name:"index"},{path:"/pages/transaction/transaction",name:"transaction"},{path:"/pages/myBox/algoList",name:"algoList"},{path:"/pages/myBox/myBox",name:"myBox"},{path:"/pages/myBox/subSecond",name:"subSecond"},{path:"/pages/transaction/ping",name:"ping"},{path:"/pages/transaction/ping2",name:"ping2"},{path:"/pages/transaction/ping3",name:"ping3"}]});r.beforeEach((function(n,e,a){a()}))},c11f:function(n,e,a){var t=a("24fb");e=t(!1),e.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/*每个页面公共css */@font-face{font-family:text_sb;src:url(/static/Syncopate-Bold.ttf) format("truetype")}.content{background:#000}.logo{padding-top:10px;width:50px;height:23px}',""]),n.exports=e},cb40:function(n,e,a){"use strict";var t=a("6ea8"),o=a.n(t);o.a},ff9d:function(n,e,a){"use strict";a.r(e);var t=a("84b0"),o=a("7b37");for(var i in o)"default"!==i&&function(n){a.d(e,n,(function(){return o[n]}))}(i);a("cb40");var r,s=a("f0c5"),u=Object(s["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);e["default"]=u.exports}});