webpackJsonp([11],{MrOn:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("bOdI"),l=r.n(a),s=r("w8L6"),c={data:function(){return l()({alert:!1,avg_budget:!1,shuffle:!1,experience_switch:!1,project_category:[{text:"Construction",value:1},{text:"IT",value:2},{text:"Goods and Services",value:3}],currency:["GH","USD"],tender_type:[{text:"NCT",value:1},{text:"ICT",value:2}],shortlist:[],bid_specification:[{text:"Shortlist below average budget",value:"average"},{text:"Shortlist with Experience",value:"experience"}],region:[{text:"Greater Accra Region",value:1},{text:"Ashanti Region",value:2}],project:{}},"shuffle",!1)},methods:{save:function(){var e=this;this.$validator.validateAll().then(function(){e.errors.any()||(e.project.url=s.c+"admin/project/create",e.project.avg_budget=e.avg_budget?1:0,e.project.shuffle=e.shuffle?1:0,e.$store.dispatch("postReqData",e.project).then(function(t){console.log(t),e.alert=!0,e.$store.dispatch("success","Project successfully added")}))}).catch(function(t){console.log(t),e.$store.dispatch("error",t.body.message)})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-alert",{attrs:{dismissible:"",type:"info"},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("\n    You have successfully added a new tender\n  ")]),e._v(" "),r("v-container",[r("v-card",[r("v-form",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Name of Project",name:"name",value:"","error-messages":e.errors.collect("name"),"data-vv-name":"name",required:""},model:{value:e.project.name,callback:function(t){e.$set(e.project,"name",t)},expression:"project.name"}})],1),e._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{value:"",items:e.project_category,label:"Project Category"},model:{value:e.project.category_id,callback:function(t){e.$set(e.project,"category_id",t)},expression:"project.category_id"}})],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{label:"Currency",items:e.currency},model:{value:e.project.currency,callback:function(t){e.$set(e.project,"currency",t)},expression:"project.currency"}})],1),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{value:"",label:"Budget",type:"number",name:"budget","error-messages":e.errors.collect("budget"),"data-vv-name":"budget",required:""},model:{value:e.project.budget,callback:function(t){e.$set(e.project,"budget",t)},expression:"project.budget"}})],1),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{value:"",label:"End Date",type:"date",name:"end_date","error-messages":e.errors.collect("end_date"),"data-vv-name":"end_date",required:""},model:{value:e.project.end_date,callback:function(t){e.$set(e.project,"end_date",t)},expression:"project.end_date"}})],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{label:"Type of Tender",items:e.tender_type},model:{value:e.project.tender_type_id,callback:function(t){e.$set(e.project,"tender_type_id",t)},expression:"project.tender_type_id"}})],1),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{label:"Region",items:e.region},model:{value:e.project.region_id,callback:function(t){e.$set(e.project,"region_id",t)},expression:"project.region_id"}})],1),e._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Agency",type:"text",name:"Agency",value:"","error-messages":e.errors.collect("Agency"),"data-vv-name":"Agency",required:""},model:{value:e.project.agency,callback:function(t){e.$set(e.project,"agency",t)},expression:"project.agency"}})],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Contact",name:"contact",value:"","error-messages":e.errors.collect("contact"),"data-vv-name":"contact",required:""},model:{value:e.project.contact,callback:function(t){e.$set(e.project,"contact",t)},expression:"project.contact"}})],1),e._v(" "),r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Funding",name:"funding",value:"","error-messages":e.errors.collect("funding"),"data-vv-name":"funding",required:""},model:{value:e.project.funding,callback:function(t){e.$set(e.project,"funding",t)},expression:"project.funding"}})],1),e._v(" "),r("v-flex",{attrs:{xs3:""}},[r("v-switch",{attrs:{label:"shortlist with average budget"},model:{value:e.avg_budget,callback:function(t){e.avg_budget=t},expression:"avg_budget"}})],1),e._v(" "),r("v-flex",{attrs:{xs3:""}},[r("v-switch",{attrs:{label:"Shuffle bids"},model:{value:e.shuffle,callback:function(t){e.shuffle=t},expression:"shuffle"}})],1),e._v(" "),r("v-flex",{attrs:{xs3:""}},[r("v-switch",{attrs:{label:"shortlist with experience"},model:{value:e.experience_switch,callback:function(t){e.experience_switch=t},expression:"experience_switch"}})],1),e._v(" "),e.experience_switch?r("v-flex",{attrs:{xs3:""}},[r("v-text-field",{attrs:{label:"Experience",name:"experience",value:""},model:{value:e.project.experience,callback:function(t){e.$set(e.project,"experience",t)},expression:"project.experience"}})],1):e._e()],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"About Project",name:"about",value:"","error-messages":e.errors.collect("about"),"data-vv-name":"about",required:""},model:{value:e.project.body,callback:function(t){e.$set(e.project,"body",t)},expression:"project.body"}})],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Skills Required",name:"skills",value:"","error-messages":e.errors.collect("skill"),"data-vv-name":"skills",required:""},model:{value:e.project.skills_required,callback:function(t){e.$set(e.project,"skills_required",t)},expression:"project.skills_required"}})],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{color:"primary",round:"",block:""},on:{click:function(t){return t.preventDefault(),e.save()}}},[e._v("Save")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=r("VU/8")(c,o,!1,function(e){r("PTYQ")},"data-v-57e212c4",null);t.default=n.exports},PTYQ:function(e,t){}});
//# sourceMappingURL=11.5bf5761e7dc003f1337d.js.map