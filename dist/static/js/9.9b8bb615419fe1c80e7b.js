webpackJsonp([9],{qNAS:function(t,e){},yqgU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("w8L6"),n={data:function(){return{objData:{},search:"",loading:!0,contractors:[],headers:[{text:"#Contractor Id",value:"id"},{text:"Name",value:"name"},{text:"Company",value:"company"},{text:"Company Status",value:"status"},{text:"Options",value:"options"}]}},methods:{routeWithParams:function(t){this.$router.push({name:t})}},created:function(){var t=this;this.objData.url=r.c+"admin/contractors",this.$store.dispatch("getReqData",this.objData).then(function(e){t.contractors=e.data,t.loading=!1}).catch(function(t){console.log(t)})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-card",[a("v-card-title",[a("v-btn",{attrs:{color:"purple",dark:""},on:{click:function(e){return t.routeWithParams("Contractors Report")}}},[t._v("\n        Generate Contractors Report\n      ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.contractors,search:t.search,loading:t.loading},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id))]),t._v(" "),a("td",[t._v(t._s(e.item.name))]),t._v(" "),a("td",[t._v(t._s(e.item.name))]),t._v(" "),e.item.status?a("td",[t._v("Active")]):a("td",[t._v("Ended")]),t._v(" "),a("td",{staticStyle:{width:"20%"}},[a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{fab:"",small:"",color:"info",dark:""}},r),[a("v-icon",[t._v("star")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Rate this Contractor")])]),t._v(" "),a("v-btn",{attrs:{fab:"",small:"",color:"warning"}},[a("v-icon",[t._v("visibility")])],1),t._v(" "),a("v-btn",{attrs:{fab:"",small:"",color:"error"}},[a("v-icon",[t._v("delete")])],1)],1)]}}])},[a("v-progress-linear",{attrs:{color:"blue",indeterminate:""},scopedSlots:t._u([{key:"progress",fn:function(){},proxy:!0}])}),t._v(" "),t._v(" "),a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n          Your search for "'+t._s(t.search)+'" found no results.\n      ')])],1)],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(t){a("qNAS")},"data-v-6a9ca8a6",null);e.default=s.exports}});
//# sourceMappingURL=9.9b8bb615419fe1c80e7b.js.map