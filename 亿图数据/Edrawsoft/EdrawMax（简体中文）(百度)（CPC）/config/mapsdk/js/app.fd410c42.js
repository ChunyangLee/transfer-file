(function(a){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(a[n]=s[n]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var a,e=0;e<i.length;e++){for(var t=i[e],n=!0,o=1;o<t.length;o++){var s=t[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),a=c(c.s=t[0]))}return a}var n={},r={app:0},i=[];function o(a){return c.p+"js/"+({}[a]||a)+"."+{"chunk-2d0aa205":"99ca719d","chunk-2d0c8a16":"a7db59e8"}[a]+".js"}function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(a){var e=[],t=r[a];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise((function(e,n){t=r[a]=[e,n]}));e.push(t[2]=n);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(a);var u=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(l);var t=r[a];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+a+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,t[1](u)}r[a]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=a,c.c=n,c.d=function(a,e,t){c.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,e){if(1&e&&(a=c(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)c.d(t,n,function(e){return a[e]}.bind(null,n));return t},c.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(e,"a",e),e},c.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},c.p="",c.oe=function(a){throw console.error(a),a};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=u;i.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"1a8b":function(a,e,t){"use strict";var n=t("dd10"),r=t.n(n);e["default"]=r.a},"1ae4":function(a,e,t){a.exports=t.p+"img/logo.54551428.svg"},"3e7d":function(a,e,t){a.exports=t.p+"img/search-icon.1a1961cc.svg"},"56d7":function(a,e,t){"use strict";t.r(e);t("d3b7"),t("ac1f"),t("3ca3"),t("841c"),t("ddb0"),t("2b3d"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=t("a925"),i=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"insertMap-contentbox",style:{paddingBottom:"zh"==a.lang?"70px":""}},[n("div",{staticClass:"map-topbar"},[n("img",{staticStyle:{cursor:"pointer"},attrs:{src:t("1ae4"),alt:""},on:{click:function(e){return a.openUrl("https://www.naturalearthdata.com")}}}),n("div",{staticClass:"map-topbar-search"},[n("img",{staticClass:"map-search-icon",attrs:{src:t("3e7d"),alt:""},on:{click:a.clickSearch}}),n("input",{directives:[{name:"model",rawName:"v-model",value:a.searchValue,expression:"searchValue"}],ref:"input",staticClass:"map-search",attrs:{placeholder:a.$t("searchMapTips")+"..."},domProps:{value:a.searchValue},on:{input:[function(e){e.target.composing||(a.searchValue=e.target.value)},function(e){return a.matchMap()}],focus:a.matchMap,blur:function(e){a.matchList=[]},keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.enterSearchValue(e)}}}),n("div",{staticClass:"search-list"},a._l(a.matchList,(function(e,t){return n("div",{key:t,staticClass:"search-list-item",on:{mousedown:function(t){return a.selectSearchValue(e)}}},[a._v(a._s(a.getName(e.name)))])})),0)])]),n("div",{staticClass:"map-label-box"},[n("div",{staticClass:"map-label"},[n("div",{staticClass:"map-category"},a._l(a.mapData,(function(e,t){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.state,expression:"item.state"}],key:t,class:{"active-category":a.categoryIndex==t},on:{click:function(e){return a.selectCategory(t)}}},[a._v(a._s(e.name))])})),0),n("div",{staticClass:"map-category-2"},a._l(a.mapData[a.categoryIndex].child,(function(e,t){return n("div",{key:t,class:{"active-category-2":a.category2Index==t,"category-2-sub":"initial"==e.type},on:{dblclick:function(n){a.selectCategory2(t,e),a.insertChart()},click:function(n){return a.selectCategory2(t,e)}}},[a._v(a._s(a.getName(e.name)))])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:a.noSearchResult,expression:"noSearchResult"}],staticClass:"map-noresult"},[n("img",{attrs:{src:t("5b30"),alt:""}}),n("p",[a._v(a._s("zh"==a.lang?"没有相关结果...":"No Result"))])])])]),a._e()]),a.showLoading?n("div",{staticClass:"map-loading"},[n("img",{attrs:{src:t("c4be"),alt:""}})]):a._e(),n("div",{staticClass:"map-naturalText"},[n("p",{on:{click:function(e){return a.openLink(e)}}},[n("span",{staticClass:"link_section_text",domProps:{innerHTML:a._s(a.$t("tips1"))}})]),n("p",[n("span",{staticClass:"link_section_text",domProps:{textContent:a._s(a.$t("tips2"))}})])]),n("div",{staticClass:"dialog-btnbox-normal"},[n("div",{staticClass:"dialog-btn-ok",on:{click:function(e){return a.insertChart()}}},[a._v(a._s(a.$t("confirm")))]),n("div",{on:{click:function(e){return a.cancelInsert()}}},[a._v(a._s(a.$t("cancel")))])])])},o=[],c=(t("7db0"),t("4160"),t("caad"),t("c975"),t("fb6a"),t("b0c0"),t("4ec9"),t("b64b"),t("4d63"),t("25f0"),t("2532"),t("466d"),t("159b"),t("bc3a")),s=t.n(c),u=t("632e"),l=t.n(u),h=t("2a3c"),d=t.n(h),p={name:"Map",components:{},data:function(){return{lang:"zh",categoryIndex:0,category2Index:0,searchValue:"",matchList:[],mapData:[{name:"世界",child:world,state:!0},{name:"国家",child:countrys,state:!0},{name:"中国",child:china,state:!1}],mapName:{},showLoading:!0,myChart:null,eChartData:{},internal:0,noSearchResult:!1}},methods:{getEChartsData:function(){var a=this,e=["geo","world","china"];return new Promise((function(t){var n=window.indexedDB.open("EChartsData");n.onsuccess=function(){for(var r=n.result,i=[],o=function(n){var o=e[n];a.eChartData[o]={};var c=r.transaction([o],"readonly"),s=c.objectStore(o),u=s.openCursor(),l=new Promise((function(e){u.onsuccess=function(){var t=u.result;if(t){var n=t.key,r=t.value;a.eChartData[o][n]=r.data,t.continue()}else e()}}));i.push(l),Promise.all(i).then((function(){t()}))},c=0;c<e.length;c++)o(c)}}))},initData:function(){var a=this,e=function(e){a.getEChartsData().then((function(t){var n=a.eChartData;for(var r in n)for(var i in n[r])echarts.registerMap(i,n[r][i]);a.showLoading=!1,e()}))},t=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EChartVersion";if("set"==a)localStorage.setItem(e,"1");else if("get"==a)return localStorage.getItem(e)},n=function(){return new Promise((function(a){var e=function(a,e,t){var n=new FileReader;n.readAsText(a);var r=new Promise((function(a){n.onload=function(n){e[t]={name:t,data:JSON.parse(n.target.result)},a()}}));return r};s.a.get("./EChartsData.tar",{responseType:"arraybuffer"}).then((function(t){l()(t.data).then((function(t){console.log(t);var n="",r={},i=[];n=t[0].name.slice(0,-1),r[n]={};for(var o=t.length,c=[],s=1;s<o;s++)if(/\/$/.test(t[s].name)){var u=t[s].name.match(/[^\/]*.(?=\/$)/)[0];r[n][u]={},c.push(u)}else{var l=t[s].name.match(/[^\/]*(?=\/.[^\/]*\.json)/)[0],h=new Blob([t[s].buffer]);r[n][l]||(r[n][l]={},c.push(l));var d=t[s].name.match(/[^\/]*(?=\.json)/)[0],p=e(h,r[n][l],d);i.push(p)}Promise.all(i).then((function(){var e=window.indexedDB.open(n,1),t=c.length,i=null;e.onupgradeneeded=function(){i=e.result;for(var a="name",n=0;n<t;n++){var r=c[n];i.objectStoreNames.contains(r)||i.createObjectStore(r,{keyPath:a})}},e.onsuccess=function(){i=e.result;for(var o=[],s=function(a){for(var e=c[a],t=r[n][e],s=i.transaction([e],"readwrite"),u=s.objectStore(e),l=Object.keys(t),h=0;h<l.length;h++)u.add(t[l[h]]);o.push(new Promise((function(a){s.oncomplete=function(){a()}})))},u=0;u<t;u++)s(u);Promise.all(o).then((function(){a(),i.close()}))}}))}))}))}))};return new Promise((function(a){"1"!=t("get")?(console.log("unloaded"),n().then((function(){t("set"),e(a)}))):(console.log("loaded"),e(a))}))},setMap:function(a){},matchMap:function(){var a=this;this.noSearchResult=!1;var e=[],t=function(t){mapHanzi[t].includes(a.searchValue)&&a.mapData[2].child.forEach((function(a,n){if(a.name==t){var r={categoryIndex:2,category2Index:n,name:t};e.push(r)}}))};for(var n in mapHanzi)t(n);var r=function(t){mapCountry[t].includes(a.searchValue)&&a.mapData[1].child.forEach((function(a,n){if(a.name==t){var r={categoryIndex:1,category2Index:n,name:t};e.push(r)}}))};for(var i in mapCountry)r(i);var o=new Map([["World","世界"],["Asia","亚洲"],["Africa","非洲"],["Antarctica","南极洲"],["Europe","欧洲"],["Oceania","大洋洲"],["South america","南美洲"],["North america","北美洲"]]);this.mapData.forEach((function(t,n){t.child.forEach((function(t,r){if("initial"!=t.type){var i=new RegExp(a.searchValue,"ig"),c=o.get(t.name)||"";if(t.name.match(i)||-1!=c.indexOf(a.searchValue)){var s={categoryIndex:n,category2Index:r,name:t.name};e.push(s)}}}))})),this.matchList=e},clickSearch:function(){var a=this,e=[],t=function(t){mapHanzi[t].includes(a.searchValue)&&a.mapData[2].child.forEach((function(a,n){if(a.name==t){var r={categoryIndex:2,category2Index:n,name:t};e.push(r)}}))};for(var n in mapHanzi)t(n);var r=function(t){mapCountry[t].includes(a.searchValue)&&a.mapData[1].child.forEach((function(a,n){if(a.name==t){var r={categoryIndex:1,category2Index:n,name:t};e.push(r)}}))};for(var i in mapCountry)r(i);var o=new Map([["World","世界"],["Asia","亚洲"],["Africa","非洲"],["Antarctica","南极洲"],["Europe","欧洲"],["Oceania","大洋洲"],["South america","南美洲"],["North america","北美洲"]]);this.mapData.forEach((function(t,n){t.child.forEach((function(t,r){if("initial"!=t.type){var i=new RegExp(a.searchValue,"ig"),c=o.get(t.name)||"";if(t.name.match(i)||-1!=c.indexOf(a.searchValue)){var s={categoryIndex:n,category2Index:r,name:t.name};e.push(s)}}}))}));var c=e.find((function(e){return a.searchValue===a.getName(e.name)}));c?(this.selectSearchValue(c),this.$refs.input.blur()):this.noSearchResult=!0},selectSearchValue:function(a){var e=this;this.noSearchResult=!1,this.categoryIndex=a.categoryIndex,this.category2Index=a.category2Index,this.$nextTick((function(){e.jumpToSelect()})),this.setMap(a)},enterSearchValue:function(){var a=this,e=this.matchList.find((function(e){return a.searchValue===a.getName(e.name)}));e?(this.selectSearchValue(e),this.$refs.input.blur()):this.noSearchResult=!0},getName:function(a){return"zh"!=this.lang?a:mapHanzi[a]?mapHanzi[a]:mapCountry[a]?mapCountry[a]:this.mapName&&this.mapName[a]?this.mapName[a]:a},selectCategory:function(a){this.categoryIndex=a,this.noSearchResult=!1,0==a?(this.category2Index=0,this.setMap(this.mapData[0].child[0])):(this.category2Index=1,this.setMap(this.mapData[a].child[1]))},selectCategory2:function(a,e){"initial"!=e.type&&(this.category2Index=a,this.setMap(e))},jumpToSelect:function(){setTimeout((function(){var a=document.querySelector(".active-category-2");a&&a.scrollIntoView({behavior:"smooth",block:"center"})}),0)},insertChart:function(){var a=["world","geo","china"],e={kind:a[this.categoryIndex],mapName:this.mapData[this.categoryIndex].child[this.category2Index].name};window.qtsdk.jsCallInsertMap(JSON.stringify(e))},cancelInsert:function(){window.qtsdk.jsCallCloseDialog()},openLink:function(a){if("A"==a.target.tagName){var e=a.target.getAttribute("data-url");this.openUrl(e)}},openUrl:function(a){window.qtsdk.jsCallOpenUrl(a)},dblclick:function(){this.insertChart()}},mounted:function(){this.setMap({type:"world",name:"World"});var a=this.lang;this.mapData=[{name:this.$t("world").toString(),child:world,state:!0},{name:this.$t("country").toString(),child:countrys,state:!0},{name:this.$t("china").toString(),child:china,state:!1}],this.internal&&"zh"==a&&(this.mapData[2].state=!0),this.mapName=this.$t("mapName"),this.showLoading=!1},created:function(){window.addEventListener("keydown",(function(a){27==a.keyCode&&window.qtsdk.jsCallCloseDialog&&window.qtsdk.jsCallCloseDialog()}));var a=new URLSearchParams(location.search),e=a.get("lang");this.internal=a.get("internal");var t=a.get("theme")||0,n=["#0977ea","#3a4275","#4f5359"];if(["zh","en"].includes(e)||(e="en"),this.lang=e,document.body.style.setProperty("--themeColor",n[t]),this.$i18n.locale=e,"undefined"==typeof window.qtsdk){var r=d.a.QWebChannel;new r(qt.webChannelTransport,(function(a){window.qtsdk=a.objects.qtsdk}))}}},m=p,f=(t("7faf"),t("2877")),g=t("1a8b"),v=Object(f["a"])(m,i,o,!1,null,null,null);"function"===typeof g["default"]&&Object(g["default"])(v);var w=v.exports;n["a"].config.productionTip=!1,n["a"].use(r["a"]);var y=new URLSearchParams(location.search),b=[];"zh"==y.get("lang")?b.push(new Promise((function(a,e){t.e("chunk-2d0c8a16").then(t.bind(null,"5665")).then((function(e){console.log(e);var t=e.world,n=e.countrys,r=e.mapCountry,i=e.mapHanzi,o=e.china;window.world=t,window.countrys=n,window.mapCountry=r,window.mapHanzi=i,window.china=o,a()}))}))):b.push(new Promise((function(a,e){t.e("chunk-2d0aa205").then(t.bind(null,"104d")).then((function(e){console.log(e);var t=e.world,n=e.countrys,r=e.mapCountry,i=e.mapHanzi,o=e.china;window.world=t,window.countrys=n,window.mapCountry=r,window.mapHanzi=i,window.china=o,a()}))})));var C=new r["a"]({locale:"zh",messages:{},silentTranslationWarn:!0,fallbackLocale:"en"});Promise.all(b).then((function(){window.app=new n["a"]({i18n:C,render:function(a){return a(w)}}).$mount("#app")}))},"5b30":function(a,e,t){a.exports=t.p+"img/noresult.84d8c6f6.svg"},"7faf":function(a,e,t){"use strict";var n=t("b8ff"),r=t.n(n);r.a},b8ff:function(a,e,t){},c4be:function(a,e,t){a.exports=t.p+"img/logoanimation.8c4e8b64.gif"},dd10:function(a,e){a.exports=function(a){a.options.__i18n=a.options.__i18n||[],a.options.__i18n.push('{"zh":{"title":"插入地图","confirm":"插入","cancel":"取消","world":"世界","country":"国家","china":"中国","searchMapTips":"搜索","mapName":{"World":"世界","Asia":"亚洲","Africa":"非洲","Antarctica":"南极洲","Europe":"欧洲","Oceania":"大洋洲","South america":"南美洲","North america":"北美洲"},"tips1":"· 该地图数据是由众多<a href=\'javascript:void(0);\' data-url=\'https://www.naturalearthdata.com/about/contributors/\'>志愿者</a>和由<a href=\'javascript:void(0);\' data-url=\'http://www.nacis.org\'>NACIS</a>支持的Natural Earth合作建立的（更多相关信息，请参见“<a href=\'javascript:void(0);\' data-url=\'https://www.naturalearthdata.com/about/terms-of-use/\'>使用条款</a>”页面）。","tips2":"· 地图数据精确程度仅限于作为示意图使用，请勿在正式场合使用，否则后果自行承担，软件作者亦不承担任何法律责任。"},"fr":{"title":"Insérer Carte","confirm":"Insérer","cancel":"Annuler","world":"Monde","country":"Pays","china":"Chine","searchMapTips":"Rechercher","mapName":{"World":"Monde","Asia":"Asie","Africa":"Afrique","Antarctica":"Antarctique","Europe":"Europe","Oceania":"Océanie","South america":"Amérique du sud","North america":"Amérique du nord"}},"de":{"title":"Diagramme einfügen","confirm":"Einfügen","cancel":"Abbrechen","world":"Welt","country":"Land","china":"China","searchMapTips":"Suchen","mapName":{"World":"Welt","Asia":"Asien","Africa":"Afrika","Antarctica":"Antarktis","Europe":"Europa","Oceania":"Ozeanien","South america":"Süd-Amerika","North america":"Nord-Amerika"}},"en":{"title":"Insert Map","confirm":"Insert","cancel":"Cancel","world":"World","country":"Country","china":"China","searchMapTips":"search","mapName":{"World":"World","Asia":"Asia","Africa":"Africa","Antarctica":"Antarctica","Europe":"Europe","Oceania":"Oceania","South america":"South America","North america":"North America"},"tips1":"· The map data was built through a collaboration of many <a href=\'javascript:void(0);\' data-url=\'https://www.naturalearthdata.com/about/contributors/\'>volunteers</a>  and Natural Earth which is supported by  <a href=\'javascript:void(0);\' data-url=\'http://www.nacis.org\'>NACIS</a> (see the  <a href=\'javascript:void(0);\' data-url=\'/about/terms-of-use/\'>Terms of Use</a> page for more information).","tips2":"· The map data is only permitted for general use. Please donot apply it to any formal occasions, or bear the consequences, and the software author does not take any legal responsibility."},"jp":{"title":"マップを挿入","confirm":"OK","cancel":"キャンセル","world":"世界","country":"国","china":"中国","searchMapTips":"検索","mapName":{"World":"世界","Asia":"アジア","Africa":"アフリカ","Antarctica":"南極大陸","Europe":"ヨーロッパ","Oceania":"オセアニア","South america":"南アメリカ","North america":"北アメリカ"}},"es":{"title":"Insertar mapa","confirm":"Insertar","cancel":"Cancelar","world":"Mundo","country":"País","china":"China","searchMapTips":"Buscar","mapName":{"World":"Mundo","Asia":"Asia","Africa":"África","Antarctica":"Antártida","Europe":"Europa","Oceania":"Oceanía","South america":"Sudamérica","North america":"América del Norte"}},"pt":{"title":"Inserir Mapa","confirm":"Inserir","cancel":"Cancelar","world":"Mundo","country":"País","china":"China","searchMapTips":"pesquisar","mapName":{"World":"Mundo","Asia":"Ásia","Africa":"África","Antarctica":"Antárctica","Europe":"Europa","Oceania":"Oceânia","South america":"América do Sul","North america":"América do Norte"}},"it":{"title":"Inserisci Mappa","confirm":"Inserisci","cancel":"Annulla","world":"Mondo","country":"Paese","china":"Cina","searchMapTips":"Cerca","mapName":{"World":"Mondo","Asia":"Asia","Africa":"Africa","Antarctica":"Antartide","Europe":"Europa","Oceania":"Oceania","South america":"Sud America","North america":"Nord America"}}}'),delete a.options._Ctor}}});
//# sourceMappingURL=app.fd410c42.js.map