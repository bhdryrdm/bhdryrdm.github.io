(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be54378c"],{2320:function(e,t,r){},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"39b3":function(e,t,r){"use strict";var a=r("2320"),n=r.n(a);n.a},"6b54":function(e,t,r){"use strict";r("3846");var a=r("cb7c"),n=r("0bfb"),i=r("9e1e"),s="toString",o=/./[s],d=function(e){r("2aba")(RegExp.prototype,s,e,!0)};r("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?d(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?n.call(e):void 0)}):o.name!=s&&d(function(){return o.call(this)})},bd76:function(e,t,r){"use strict";var a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik Dávid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"Enéas Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tadeáš",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold Gáspár",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius René",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Paĉjo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto Šimun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyněk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"Félix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}];t["a"]=a},dc02:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12",xl:"6"}},[r("transition",{attrs:{name:"slide"}},[r("b-card",{attrs:{header:e.caption}},[r("b-table",{attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"id",fn:function(t){return[r("strong",[e._v(e._s(t.item.id))])]}},{key:"name",fn:function(t){return[r("strong",[e._v(e._s(t.item.name))])]}},{key:"status",fn:function(t){return[r("b-badge",{attrs:{variant:e.getBadge(t.item.status)}},[e._v(e._s(t.item.status))])]}}])}),r("nav",[r("b-pagination",{attrs:{size:"sm","total-rows":e.getRowCount(e.items),"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)],1)},n=[],i=(r("6b54"),r("bd76")),s={name:"Users",props:{caption:{type:String,default:"Users"},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1}},data:function(){return{items:i["a"].filter(function(e){return e.id<42}),fields:[{key:"id"},{key:"name"},{key:"registered"},{key:"role"},{key:"status"}],currentPage:1,perPage:5,totalRows:0}},computed:{},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(e){return e.length},userLink:function(e){return"users/".concat(e.toString())},rowClicked:function(e){var t=this.userLink(e.id);this.$router.push({path:t})}}},o=s,d=(r("39b3"),r("2877")),u=Object(d["a"])(o,a,n,!1,null,"162a2120",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-be54378c.76a9f863.js.map