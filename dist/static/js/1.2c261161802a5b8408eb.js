webpackJsonp([1],{"5qiH":function(t,e){},"gq+x":function(t,e){},pRJt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("w8L6"),s={components:{Chart:Chart}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md3:""}},[e("router-link",{staticClass:"removeline",attrs:{to:"/calender"}},[e("v-card",{staticClass:"white--text",attrs:{dark:"",color:"blue-grey darken-2"}},[e("v-card-text",{staticClass:"px-0",staticStyle:{padding:"40px 0px 40px 0px"}},[this._v("Project Calender")])],1)],1)],1),this._v(" "),e("v-flex",{attrs:{md3:""}},[e("router-link",{staticClass:"removeline",attrs:{to:"/projects/create"}},[e("v-card",{staticClass:"white--text",attrs:{dark:"",color:"blue-grey darken-2"}},[e("v-card-text",{staticClass:"px-0",staticStyle:{padding:"40px 0px 40px 0px"}},[this._v("Create Project")])],1)],1)],1),this._v(" "),e("v-flex",{attrs:{md3:""}},[e("router-link",{staticClass:"removeline",attrs:{to:"/settings"}},[e("v-card",{staticClass:"white--text",attrs:{dark:"",color:"blue-grey darken-2"}},[e("v-card-text",{staticClass:"px-0",staticStyle:{padding:"40px 0px 40px 0px"}},[this._v("Settings")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var i={data:function(){return{objData:{},label:"",labels:[],count:[]}},components:{UserDash:a("VU/8")(s,n,!1,function(t){a("gq+x")},"data-v-726b4f96",null).exports},computed:{_label:function(){return this.label},_labels:function(){return this.labels},_count:function(){return this.count}},methods:{dosomething:function(){return alert(),this.label="Projects Bid "}},mounted:function(){var t=this;this.objData.url=r.c+"admin/project/linechart",this.$store.dispatch("getReqData",this.objData).then(function(e){var a=e.data;a=a.filter(function(t){return t.bid_count>0}),t.label="Projects Bid Ratio",t.count=a.map(function(t){return t.bid_count}),t.labels=a.map(function(t){return t.name}),console.log(t.count,t.labels)})}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[e("user-dash"),this._v(" "),e("v-layout",{staticStyle:{"padding-top":"50px"},attrs:{wrap:"",row:""}},[e("v-flex",{attrs:{md6:""}},[e("Line-chart",{attrs:{label:this._label,labels:this._labels,data:this._count}})],1),this._v(" "),e("v-flex",{attrs:{md6:""}},[this._v("\n                Projects Due Today\n            ")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(i,l,!1,function(t){a("5qiH")},"data-v-ad7a06ea",null);e.default=o.exports}});
//# sourceMappingURL=1.2c261161802a5b8408eb.js.map