webpackJsonp([5],{"/NE8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("w8L6"),n={data:function(){return{search:"",loading:!1,headers:[{text:"#Project Id",value:"id"},{text:"Name",value:"name"},{text:"Agency",value:"agency"},{text:"Average Cost",value:"cost"},{text:"Total Bids",value:"total_bid"},{text:"Category",value:"category"},{text:"End Date",value:"end_date"},{text:"Status",value:"status"},{text:"Options",value:"options"}],projects:[],objData:{}}},methods:{routeWithParams:function(t,e){this.$router.push({name:t,params:{id:e}})}},mounted:function(){var t=this;this.objData.url=s.c+"admin/project/view/due",this.$store.dispatch("getReqData",this.objData).then(function(e){console.log(e),t.projects=e.data})}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-card-title",[t._v("\n      View All Projects\n      "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.projects,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id))]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(e.item.name)))]),t._v(" "),a("td",[t._v(t._s(e.item.agency))]),t._v(" "),a("td",[t._v(t._s(e.item.budget))]),t._v(" "),a("td",[t._v(t._s(e.item.total_bids))]),t._v(" "),a("td",[t._v(t._s(e.item.category))]),t._v(" "),a("td",[t._v(t._s(t._f("date")(e.item.end_date)))]),t._v(" "),e.item.status?a("td",[t._v("Ended")]):a("td",{staticClass:"text-xs-right"},[t._v("Active")]),t._v(" "),a("td",{staticStyle:{width:"25%"}},[a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{fab:"",small:"",color:"info",dark:""}},s),[a("v-icon",[t._v("edit")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("Project")])]),t._v(" "),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{fab:"",small:"",color:"warning",dark:""}},s),[a("v-icon",[t._v("visibility")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("View Tender Details")])]),t._v(" "),a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on;return[a("v-btn",t._g({attrs:{fab:"",small:"",color:"danger",dark:""},on:{click:function(a){return t.routeWithParams("bids_project",e.item.id)}}},n),[a("v-icon",[t._v("tab")])],1)]}}],null,!0)},[t._v(" "),a("span",[t._v("View all Bids on this project")])])],1)]}}])},[t._v(" "),a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n          Your search for "'+t._s(t.search)+'" found no results.\n      ')])],1)],1),t._v(" "),a("page-load",{attrs:{show:t.loading}})],1)},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("kI7j")},"data-v-bff4a3e4",null);e.default=o.exports},kI7j:function(t,e){}});
//# sourceMappingURL=5.a29c3a18fd4fcc15a0e0.js.map