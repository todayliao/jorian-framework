(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bc55c70"],{"09f4":function(e,t,n){"use strict";n.d(t,"a",function(){return l}),Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function i(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var l=s(),o=e-l,r=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=r;var s=Math.easeInOutQuad(c,l,o,t);i(s),c<t?a(e):n&&"function"===typeof n&&n()};u()}},"1f34":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("昵称")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.nickname,callback:function(t){e.$set(e.listQuery,"nickname",t)},expression:"listQuery.nickname"}}),e._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("用户名")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.username,callback:function(t){e.$set(e.listQuery,"username",t)},expression:"listQuery.username"}}),e._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("所属单位")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.company,callback:function(t){e.$set(e.listQuery,"company",t)},expression:"listQuery.company"}}),e._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:e.$t("状态"),clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e){return n("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(e._s(e.$t("table.export")))])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[e._e(),e._v(" "),n("el-table-column",{attrs:{label:e.$t("账户名"),width:"130px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.username))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("昵称"),width:"130px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.nickname))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("性别"),width:"65px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.sex?n("span",[e._v("女")]):1==t.row.sex?n("span",[e._v("男")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("角色"),align:"center","min-width":"185"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,function(t){return n("el-tag",[e._v(e._s(t.name))])})}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("单位名称"),"min-width":"140px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.company))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("状态"),width:"65px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?n("span",{staticStyle:{color:"springgreen"}},[e._v("正常")]):0==t.row.status?n("span",{staticStyle:{color:"red"}},[e._v("异常")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("手机号"),"class-name":"status-col","min-width":"110px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("创建时间"),width:"170px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("parseTime")(t.row.createTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("操作"),align:"center","min-width":"260","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit"))+"\n        ")]),e._v(" "),t.row.status?n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleModifyStatus(t.row,0)}}},[e._v(e._s(e.$t("table.lock"))+"\n        ")]):t.row.status?e._e():n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleModifyStatus(t.row,1)}}},[e._v(e._s(e.$t("table.unlock"))+"\n        ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v(e._s(e.$t("table.delete"))+"\n        ")])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"600px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:e.$t("账户名"),prop:"username"}},[n("el-input",{model:{value:e.temp.username,callback:function(t){e.$set(e.temp,"username",t)},expression:"temp.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("昵称"),prop:"nickname"}},[n("el-input",{model:{value:e.temp.nickname,callback:function(t){e.$set(e.temp,"nickname",t)},expression:"temp.nickname"}})],1),e._v(" "),e.isShowPassword?n("el-form-item",{attrs:{label:e.$t("密码"),prop:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1):e._e(),e._v(" "),e.isShowPassword?n("el-form-item",{attrs:{label:e.$t("重复密码"),prop:"repassword"}},[n("el-input",{attrs:{type:"password"},model:{value:e.repassword,callback:function(t){e.repassword=t},expression:"repassword"}})],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:e.$t("角色"),prop:"roleNameChecked"}},[n("el-checkbox-group",{model:{value:e.roleNameChecked,callback:function(t){e.roleNameChecked=t},expression:"roleNameChecked"}},e._l(e.rolesOptions,function(t){return n("el-checkbox",{key:t,attrs:{label:t.name}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("公司"),prop:"company"}},[n("el-input",{model:{value:e.temp.company,callback:function(t){e.$set(e.temp,"company",t)},expression:"temp.company"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("手机号"),prop:"phone"}},[n("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("性别")}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:e.$t("table.selectplaceholder")},model:{value:e.temp.sex,callback:function(t){e.$set(e.temp,"sex",t)},expression:"temp.sex"}},e._l(e.sexOptions,function(e){return n("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("状态")}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:e.$t("table.selectplaceholder")},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,function(e){return n("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},i=[],s=(n("7f7f"),n("ac6a"),n("5d73")),l=n.n(s),o=n("5176"),r=n.n(o),c=n("c0c7"),u=n("3528"),d=n("6724"),p=n("ed08"),m=n("333d"),f=n("61f7"),h=(n("5c96"),[{key:0,display_name:"女"},{key:1,display_name:"男"}]),v=[{key:0,display_name:"锁定"},{key:1,display_name:"正常"}],y=function(e,t,n){Object(f["f"])(t)?n():n(new Error("用户名应该由4到16位字母数字组成"))},b=function(e,t,n){Object(f["d"])(t)?n():n(new Error("密码应该由6到10位字母数字组成"))},w={name:"Login",components:{Pagination:m["a"]},directives:{waves:d["a"]},filters:{},data:function(){return{tableKey:0,list:null,total:0,isShowPassword:!1,repassword:"",listLoading:!0,listQuery:{page:1,limit:20,username:"",nickname:"",company:"",status:""},sortOptions:[{label:"ID 增序",key:"+id"},{label:"ID 倒序",key:"-id"}],sexOptions:h,statusOptions:v,rolesOptions:[],roleNameChecked:[],showReviewer:!1,temp:{id:"",createTime:"",updateTime:"",nickname:"",username:"",password:"",roles:[],sex:"",status:"",company:"",phone:"",email:"",avatar:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"修改",create:"新建"},dialogPvVisible:!1,rules:{username:[{required:!0,trigger:"blur",validator:y}],password:[{required:!0,trigger:"blur",validator:b}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(c["c"])(this.listQuery).then(function(t){e.list=t.data.records,e.total=t.data.total,e.listLoading=!1}),Object(u["c"])().then(function(t){e.rolesOptions=t.data.records})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){var n=this;e.status=t,this.temp=r()({},e),this.temp.updateTime=new Date|p["d"];var a=!0,i=!1,s=void 0;try{for(var o,u=l()(this.list);!(a=(o=u.next()).done);a=!0){var d=o.value;if(d.id===this.temp.id){var m=this.list.indexOf(d);this.list.splice(m,1,this.temp);break}}}catch(f){i=!0,s=f}finally{try{a||null==u.return||u.return()}finally{if(i)throw s}}this.dialogFormVisible=!1,Object(c["d"])(this.temp).then(function(){n.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})},sortChange:function(e){var t=e.prop,n=e.order;"id"===t&&this.sortByID(n)},sortByID:function(e){this.listQuery.sort="id",this.handleFilter()},resetTemp:function(){this.roleNameChecked=[],this.repassword="",this.temp={id:"",createTime:void 0,updateTime:void 0,nickname:void 0,username:void 0,password:void 0,roles:[],sex:void 0,status:void 0,company:void 0,phone:void 0,email:void 0,avatar:void 0}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.isShowPassword=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},createData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var n=r()({},e.temp),a=[];e.roleNameChecked.forEach(function(t){e.rolesOptions.forEach(function(e){t===e.name&&a.push(e)})}),n.roles=a,e.list.unshift(n),e.dialogFormVisible=!1,Object(c["a"])(n).then(function(){e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})}})},handleUpdate:function(e){var t=this;this.temp=r()({},e),this.roleNameChecked=[],this.temp.roles.forEach(function(e){t.roleNameChecked.push(e.name)}),this.isShowPassword=!1,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var n=r()({},e.temp),a=[];e.roleNameChecked.forEach(function(t){e.rolesOptions.forEach(function(e){t===e.name&&a.push(e)})}),n.roles=a;var i=!0,s=!1,o=void 0;try{for(var u,d=l()(e.list);!(i=(u=d.next()).done);i=!0){var p=u.value;if(p.id===n.id){var m=e.list.indexOf(p);e.list.splice(m,1,n);break}}}catch(f){s=!0,o=f}finally{try{i||null==d.return||d.return()}finally{if(s)throw o}}Object(c["d"])(n).then(function(){e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),e.getList()})}})},handleDelete:function(e){var t=this,n=this.list.indexOf(e);this.list.splice(n,1),Object(c["b"])(e.id).then(function(){t.dialogFormVisible=!1,t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-5bdd67a2"),n.e("chunk-b27dbcdc"),n.e("chunk-58293907")]).then(n.bind(null,"4bf8d")).then(function(t){var n=["id","日期","值","指标名称","指标ID"],a=["$id","Date","Value","IndicatorName","IndicatorsId"],i=e.formatJson(a,e.list);t.export_json_to_excel({header:n,data:i,filename:"table-list"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(p["d"])(t[e]):t[e]})})}}},k=w,_=n("2877"),g=Object(_["a"])(k,a,i,!1,null,null,null);t["default"]=g.exports},3528:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return o});var a=n("b775");function i(e){return Object(a["a"])({url:"/system/role/list",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/system/role/add",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/system/role/delete/"+e,method:"delete"})}function o(e){return Object(a["a"])({url:"/system/role/update",method:"put",data:e})}},6724:function(e,t,n){"use strict";var a=n("5176"),i=n.n(a),s=(n("8d41"),"@@wavesContext");function l(e,t){function n(n){var a=i()({},t.value),s=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=s.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",l.appendChild(r)),s.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(n.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(n.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=s.color,r.className="waves-ripple z-active",!1}}return e[s]?e[s].removeHandle=n:e[s]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",l(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[s].removeHandle,!1),e.addEventListener("click",l(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[s].removeHandle,!1),e[s]=null,delete e[s]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"8d41":function(e,t,n){},c0c7:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return o});var a=n("b775");function i(e){return Object(a["a"])({url:"system/user/list",method:"get",params:e})}function s(e){return Object(a["a"])({url:"system/user/add",method:"post",data:e})}function l(e){return Object(a["a"])({url:"system/user/update",method:"put",data:e})}function o(e){return Object(a["a"])({url:"system/user/delete/"+e,method:"delete"})}}}]);