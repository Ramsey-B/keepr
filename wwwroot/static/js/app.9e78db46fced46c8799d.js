webpackJsonp([1],{"3Hcp":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-dark bg-primary top-header format"},[a("a",{staticClass:"navbar-left"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[a("a",[t._v("Home")])]),t._v(" "),t.user.id?a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Dashboard"}}},[a("a",[t._v("Vaults")])]):t._e()],1),t._v(" "),a("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.search(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")])]),t._v(" "),t.user.id?t._e():a("button",{staticClass:"navbar-brand btn btn-outline-light",attrs:{type:"button"},on:{click:t.login}},[t._v("Sign In/Login")]),t._v(" "),t.user.id?a("div",{staticClass:"d-flex flex-column"},[a("a",{staticClass:"navbar-brand"},[t._v("User: "+t._s(t.user.username))]),t._v(" "),a("button",{staticClass:"navbar-brand btn btn-outline-light",on:{click:t.signOut}},[t._v("Sign out")])]):t._e()]),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({created:function(){this.$store.dispatch("authenticate")},data:function(){return{query:""}},computed:{user:function(){return this.$store.state.userModule.user}},methods:{login:function(){this.$router.push({name:"Login"})},signOut:function(){this.$store.dispatch("signOut")},search:function(){this.$router.push({name:"Home"}),this.$store.dispatch("search",this.query)}}},i,!1,function(t){a("Pbh9")},null,null).exports,o=a("/ocq"),r=a("mtWM"),l=a.n(r),c=!window.location.host.includes("localhost")?"//i-de-trippin.herokuapp.com/":"//localhost:5000/api",u=l.a.create({baseURL:c,timeout:3e3,withCredentials:!0}),d={state:{user:{}},actions:{register:function(t,e){t.dispatch;var a=t.commit;u.post("/account/register",e).then(function(t){S.push({name:"Home"}),a("setUser",t.data)}).catch(function(t){console.log(t)})},login:function(t,e){t.dispatch;var a=t.commit;u.post("/account/login",e).then(function(t){S.push({name:"Home"}),a("setUser",t.data)}).catch(function(t){console.log(t)})},authenticate:function(t,e){var a=t.commit;t.dispatch;u.get("/account/authenticate").then(function(t){a("setUser",t.data)}).catch(function(t){console.log(t)})},signOut:function(t){var e=t.commit,a=(t.dispatch,t.state);u.delete("account/"+a.user.id).then(function(t){e("setUser",{})}).catch(function(t){console.log(t)})}},mutations:{setUser:function(t,e){t.user=e}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user jumbotron jumbotron-fluid bgImg"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-6 card"},[t.showLogin?a("div",{staticClass:"login"},[a("h1",[t._v(t._s(t.currentUser))]),t._v(" "),a("h1",[t._v("Login")]),t._v(" "),a("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.login(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"input",attrs:{type:"email",name:"email",placeholder:" e-mail",id:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",attrs:{type:"password",name:"password",placeholder:" password",id:"name"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary btn-success",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),a("br"),t._v(" "),a("div",[a("p",[t._v("Click to start "),a("button",{staticClass:"btn btn-success",on:{click:t.demoLogin}},[t._v("Demo")])])]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"user"},[t._v("Not a user?\n        "),a("em",{on:{click:t.toggle}},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Register")])])])]):t._e(),t._v(" "),t.showLogin?t._e():a("div",{staticClass:"register"},[a("h1",[t._v("Register")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.register(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.Email,expression:"user.Email"}],staticClass:"input",attrs:{type:"email",name:"email",placeholder:" e-mail",id:"email"},domProps:{value:t.user.Email},on:{input:function(e){e.target.composing||t.$set(t.user,"Email",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.Username,expression:"user.Username"}],staticClass:"input",attrs:{type:"text",name:"name",placeholder:"name",id:"name"},domProps:{value:t.user.Username},on:{input:function(e){e.target.composing||t.$set(t.user,"Username",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.Password,expression:"user.Password"}],staticClass:"input",attrs:{type:"password",name:"password",placeholder:"password",id:"name"},domProps:{value:t.user.Password},on:{input:function(e){e.target.composing||t.$set(t.user,"Password",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary btn-danger",attrs:{type:"submit"}},[t._v("Register")])]),t._v(" "),a("br"),t._v(" "),a("div"),t._v(" "),a("br"),t._v(" "),a("p",[t._v("Already a user?\n        "),a("em",{on:{click:t.toggle}},[a("button",{staticClass:"btn btn-primary btn-success",attrs:{type:"submit"}},[t._v("Login")])])])])])])])},staticRenderFns:[]};var v=a("VU/8")({name:"Login",data:function(){return{user:{Email:"",Username:"",Password:""},demo:{email:"demo@demo.com",displayName:"Demo",password:"12345"},showLogin:!0}},mounted:function(){this.$store.dispatch("authenticate")},computed:{currentUser:function(){return this.$store.state.userModule.name}},methods:{demoLogin:function(){this.$store.dispatch("login",this.demo)},login:function(){this.$store.dispatch("login",this.user)},register:function(){this.$store.dispatch("register",this.user)},toggle:function(){this.showLogin=!this.showLogin}}},p,!1,function(t){a("gQsr")},"data-v-488e2832",null).exports,m={name:"KeepsList",props:{keep:{type:Object,required:!0},viewable:{type:Boolean,required:!0},tags:{type:Array}},mounted:function(){this.user.id||this.$store.dispatch("authenticate"),this.$store.dispatch("getVaults")},data:function(){return{vault:{}}},computed:{user:function(){return this.$store.state.userModule.user},vaults:function(){return this.$store.state.vaultModule.vaults},activeVault:function(){return this.$store.state.vaultModule.activeVault},currentKeep:function(){return this.$store.state.keepsModule.activeKeep}},methods:{deleteShare:function(t){this.viewable||this.$router.push({name:"Dashboard"}),this.checkLogin(),t.vaultId=this.activeVault.id,this.$store.dispatch("deleteShare",t)},public:function(t){this.checkLogin(),t.public=!t.public,this.$store.dispatch("editKeep",t)},selectKeep:function(t){this.$store.dispatch("selectKeep",t)},addShare:function(t){this.checkLogin();var e={vaultId:this.vault.id,keepId:this.currentKeep.id};this.$store.dispatch("addShare",e)},checkLogin:function(){this.user.id||this.$router.push({name:"Login"})},activeKeep:function(t){this.$store.dispatch("activeKeep",t)}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center"},[a("div",{staticClass:"container"},[a("img",{staticClass:"card-img-top",attrs:{src:t.keep.img}}),t._v(" "),a("div",{staticClass:"buttons"},[t.viewable?a("button",{staticClass:"btn btn-success",on:{click:function(e){t.selectKeep(t.keep)}}},[t._v("view")]):t._e(),t._v(" "),t.user.id?a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#keepModal"},on:{click:function(e){t.activeKeep(t.keep)}}},[t._v("keep")]):t._e(),t._v(" "),t.user.id!=t.keep.authorId||t.keep.public?t._e():a("button",{staticClass:"btn btn-warning",on:{click:function(e){t.public(t.keep)}}},[t._v("public")]),t._v(" "),t.user.id==t.keep.authorId&&t.keep.public?a("button",{staticClass:"btn btn-warning",on:{click:function(e){t.public(t.keep)}}},[t._v("private")]):t._e(),t._v(" "),t.activeVault.id?a("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteShare(t.keep)}}},[t._v("Delete")]):t._e()])]),t._v(" "),a("h5",{staticClass:"card-title"},[t._v(t._s(t.keep.description))]),t._v(" "),a("div",{staticClass:"d-flex flex-row justify-content-center"},[a("p",{staticClass:"mr-3 card-text"},[t._v("Author: "+t._s(t.keep.author))]),t._v(" "),a("p",{staticClass:"mr-3 card-text"},[t._v("Views: "+t._s(t.keep.views))]),t._v(" "),a("p",{staticClass:"mr-3 card-text"},[t._v("Keeps: "+t._s(t.keep.keeps))])]),t._v(" "),t._l(t.tags,function(e,s){return a("div",[a("span",[a("p",[t._v(t._s(e.tag))]),t._v(" "),s<t.tags.length-1?a("p",[t._v(",")]):t._e()])])}),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"keepModal",tabindex:"-1",role:"dialog","aria-labelledby":"keepModalTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v(t._s(t.currentKeep.description))]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("h4",[t._v("Select a Vault!")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.vault,expression:"vault"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.vault=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select a Vault")]),t._v(" "),t._l(t.vaults,function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.title))])})],2)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),t.vault.id?a("button",{staticClass:"btn btn-primary btn-primary",attrs:{"data-dismiss":"modal"},on:{click:function(e){t.addShare(t.currentKeep)}}},[t._v("Submit")]):t._e()])])])])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var f=a("VU/8")(m,h,!1,function(t){a("rEU3")},null,null).exports,g={name:"Home",components:{keepsList:f},mounted:function(){this.$store.dispatch("getKeeps")},data:function(){return{}},computed:{keeps:function(){return this.$store.state.keepsModule.keeps}},methods:{}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"keeps row"},[this.keeps.length<1?e("h4",[this._v("No Keeps found!")]):this._e(),this._v(" "),this._l(this.keeps,function(t){return e("div",{staticClass:"col-4"},[e("keeps-list",{attrs:{keep:t,viewable:!0}})],1)})],2)])},staticRenderFns:[]};var b=a("VU/8")(g,_,!1,function(t){a("qtkG")},null,null).exports,C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v("\n      Create Vault\n    ")]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){e.preventDefault(),t.createVault(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.title,expression:"newVault.title"}],staticClass:"input",attrs:{type:"text",name:"title",placeholder:"Title",id:"title"},domProps:{value:t.newVault.title},on:{input:function(e){e.target.composing||t.$set(t.newVault,"title",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-primary",attrs:{"data-dismiss":"modal"},on:{click:t.createVault}},[t._v("Submit")])])])])])]),t._v(" "),a("div",{staticClass:"vaults row"},t._l(t.vaults,function(e){return a("div",{staticClass:"col-4"},[a("div",{staticClass:"card text-center"},[a("a",{on:{click:function(a){t.selectVault(e)}}},[a("h2",{staticClass:"card-title"},[t._v(t._s(e.title))])]),t._v(" "),a("div",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){t.deleteVault(e)}}},[t._v("Delete")])])])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("Create Vault")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var k={name:"Keeps",components:{keepsList:f},mounted:function(){this.$store.dispatch("getUserKeeps")},data:function(){return{tags:[],tag:{tagName:""},newKeep:{img:"",description:""},vault:{}}},computed:{keeps:function(){return this.$store.state.keepsModule.userKeeps},vaults:function(){return this.$store.state.vaultModule.vaults}},methods:{addTag:function(){var t={tagName:this.tag.tagName};this.tags.push(t),this.tag.tagName=""},createKeep:function(){this.vault.id||this.error("Please select a vault"),this.newKeep.vaultId=this.vault.id,this.newKeep.tags=this.tags,this.$store.dispatch("createKeep",this.newKeep)},removeTag:function(t){this.tags.splice(t,1)},error:function(t){document.getElementById("error").innerText=t,setTimeout(function(){document.getElementById("error").innerText=""},5e3)}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#createKeepModal"}},[t._v("\n      Create Keep\n    ")]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"createKeepModal",tabindex:"-1",role:"dialog","aria-labelledby":"createKeepModalTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){e.preventDefault(),t.createKeep(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],attrs:{type:"url",placeholder:"Image Url"},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],staticClass:"input",attrs:{type:"text",name:"description",placeholder:"Description",id:"description"},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}}),t._v(" "),a("div",{staticClass:"mt-3"},[a("div",{staticClass:"d-flex flex-row"},t._l(t.tags,function(e,s){return a("span",{staticClass:"ml-3"},[t._v(t._s(e.tagName)+"\n                    "),a("a",{staticClass:"remove-tag",on:{click:function(e){t.removeTag(s)}}},[t._v("X")])])})),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.addTag(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tag.tagName,expression:"tag.tagName"}],attrs:{type:"text",placeholder:"Add Tag"},domProps:{value:t.tag.tagName},on:{input:function(e){e.target.composing||t.$set(t.tag,"tagName",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary btn-primary",attrs:{type:"submit"}},[t._v("Add Tag")])])])]),t._v(" "),a("p",{attrs:{id:"error"}})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.vault,expression:"vault"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.vault=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select a Vault")]),t._v(" "),t._l(t.vaults,function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.title))])})],2),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),t.vault.title?a("button",{staticClass:"btn btn-primary btn-primary",attrs:{"data-dismiss":"modal"},on:{click:t.createKeep}},[t._v("Submit")]):t._e()])])])])]),t._v(" "),a("div",{staticClass:"keeps row"},t._l(t.keeps,function(t){return a("div",{staticClass:"col-4"},[a("keeps-list",{attrs:{keep:t,viewable:!0}})],1)}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("Create Keep")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]};var K={name:"Dashboard",components:{vaults:a("VU/8")({name:"Vaults",mounted:function(){this.$store.dispatch("getVaults")},data:function(){return{newVault:{title:""}}},computed:{vaults:function(){return this.$store.state.vaultModule.vaults}},methods:{createVault:function(){this.$store.dispatch("createVault",this.newVault)},selectVault:function(t){this.$store.dispatch("selectVault",t)},deleteVault:function(t){this.$store.dispatch("deleteVault",t)}}},C,!1,function(t){a("jx0/")},null,null).exports,keeps:a("VU/8")(k,w,!1,function(t){a("qFVK")},null,null).exports},data:function(){return{bool:!0}},computed:{},methods:{toggle:function(){this.bool=!this.bool}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",[e("button",{staticClass:"btn btn-primary",on:{click:this.toggle}},[this._v("Vaults")]),this._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:this.toggle}},[this._v("Keeps")])]),this._v(" "),this.bool?e("div",[e("vaults")],1):this._e(),this._v(" "),this.bool?this._e():e("div",[e("keeps")],1)])},staticRenderFns:[]};var $=a("VU/8")(K,y,!1,function(t){a("q1U+")},null,null).exports,V={name:"Vault",components:{keepsList:f},data:function(){return{}},computed:{vault:function(){return this.$store.state.vaultModule.activeVault},keeps:function(){return this.$store.state.keepsModule.userKeeps}},methods:{}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h2",[this._v(this._s(this.vault.title))])])]),this._v(" "),e("div",{staticClass:"keeps row"},this._l(this.keeps,function(t){return e("div",{staticClass:"col-4"},[e("keeps-list",{attrs:{keep:t,viewable:!0}})],1)}))])},staticRenderFns:[]};var U=a("VU/8")(V,x,!1,function(t){a("3Hcp")},null,null).exports,M={name:"Keep",components:{keepsList:f},mounted:function(){this.$store.dispatch("getTags",this.keep.id)},data:function(){return{}},computed:{keep:function(){return this.$store.state.keepsModule.keep},tags:function(){return this.$store.state.keepsModule.tags},keeps:function(){return this.$store.state.keepsModule.keeps}},methods:{}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-4 col-4"},[a("keeps-list",{attrs:{keep:t.keep,tags:t.tags,viewable:!1}})],1)]),t._v(" "),a("div",{staticClass:"row"},[t._m(0),t._v(" "),t._l(t.keeps,function(e){return a("div",{staticClass:"col-3"},[e.id!=t.keep.id?a("keeps-list",{attrs:{keep:e,viewable:!0}}):t._e()],1)})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h2",[this._v("Related Keeps")])])}]};var N=a("VU/8")(M,L,!1,function(t){a("kA5Z")},null,null).exports;s.a.use(o.a);var S=new o.a({routes:[{path:"/login",name:"Login",component:v},{path:"/",name:"Home",component:b},{path:"/dashboard",name:"Dashboard",component:$},{path:"/vault/:id",name:"Vault",component:U},{path:"/keep/:keepId",name:"Keep",component:N}]}),E=a("NYxO"),T=!window.location.host.includes("localhost")?"//i-de-trippin.herokuapp.com/":"//localhost:5000/api",P=l.a.create({baseURL:T,timeout:3e3,withCredentials:!0}),R={state:{keeps:[],userKeeps:[],tags:[],activeKeep:{}},mutations:{setKeeps:function(t,e){t.keeps=e},setUserKeeps:function(t,e){t.userKeeps=e},setNewKeep:function(t,e){t.userKeeps.unshift(e)},setTags:function(t,e){t.tags=e},removeKeep:function(t,e){var a=t.userKeeps.findIndex(function(t){return t.id=e});t.userKeeps.splice(a,1)},setKeep:function(t,e){t.keep=e},setActiveKeep:function(t,e){t.activeKeep=e}},actions:{getKeeps:function(t){var e=t.commit;t.dispatch;P.get("/keep").then(function(t){e("setKeeps",t.data)}).catch(function(t){console.log(t)})},getVaultKeeps:function(t,e){var a=t.commit;t.dispatch;P.get("/keep/vault/"+e).then(function(t){a("setUserKeeps",t.data)}).catch(function(t){console.log(t)})},getUserKeeps:function(t){var e=t.commit,a=(t.dispatch,t.rootState);P.get("/keep/user/"+a.userModule.user.id).then(function(t){e("setUserKeeps",t.data)}).catch(function(t){console.log(t)})},createKeep:function(t,e){var a=t.commit,s=(t.dispatch,t.rootState);e.author=s.userModule.user.username,P.post("/keep/"+e.vaultId,e).then(function(t){a("setNewKeep",t.data),P.post("/keep/tag/"+t.data.id,e.tags).then(function(t){a("setTags",t.data)}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},deleteShare:function(t,e){var a=t.commit;t.dispatch;P.delete("/keep/share/"+e.vaultId+"/"+e.id).then(function(t){a("removeKeep",e.id)}).catch(function(t){console.log(t)})},editKeep:function(t,e){var a=t.commit;t.dispatch;P.put("/keep/"+e.id,e).then(function(t){a("setKeep",t.data)}).catch(function(t){console.log(t)})},selectKeep:function(t,e){var a=t.commit;t.dispatch;P.get("/keep/"+e.id).then(function(t){a("setKeep",t.data),S.push({name:"Keep",params:{keepId:t.data.id}})}).catch(function(t){console.log(t)})},addShare:function(t,e){t.commit,t.dispatch;P.post("/keep/add/"+e.keepId,e).then(function(t){console.log(t.data)}).catch(function(t){console.log(t)})},getTags:function(t,e){var a=t.commit,s=t.dispatch;P.get("/keep/tags/"+e).then(function(t){a("setTags",t.data),s("getRelated",t.data)}).catch(function(t){console.log(t)})},search:function(t,e){t.dispatch;var a=t.commit;P.get("/keep/query/"+e).then(function(t){a("setKeeps",t.data)}).catch(function(t){console.log(t)})},getRelated:function(t,e){t.dispatch;var a=t.commit;P.post("/keep/query",e).then(function(t){a("setKeeps",t.data)})},activeKeep:function(t,e){t.dispatch;(0,t.commit)("setActiveKeep",e)}}},I=!window.location.host.includes("localhost")?"//i-de-trippin.herokuapp.com/":"//localhost:5000/api",q=l.a.create({baseURL:I,timeout:3e3,withCredentials:!0}),A={state:{vaults:[],activeVault:{}},mutations:{setVaults:function(t,e){t.vaults=e},setNewVault:function(t,e){t.vaults.unshift(e)},setActiveVault:function(t,e){t.activeVault=e},removeVault:function(t,e){var a=t.vaults.findIndex(function(t){return t.id==e.id});t.vaults.splice(a,1)}},actions:{getVaults:function(t){var e=t.commit,a=(t.dispatch,t.rootState);q.get("/vault/user/"+a.userModule.user.id).then(function(t){e("setVaults",t.data)}).catch(function(t){console.log(t)})},createVault:function(t,e){var a=t.commit;t.dispatch;q.post("/vault",e).then(function(t){a("setNewVault",t.data)}).catch(function(t){console.log(t)})},selectVault:function(t,e){var a=t.commit,s=t.dispatch;t.rootState;a("setActiveVault",e),s("getVaultKeeps",e.id),S.push({name:"Vault",params:{id:e.id}})},deleteVault:function(t,e){var a=t.commit;t.dispatch;q.delete("/vault/"+e.id).then(function(t){a("removeVault",t.data)}).catch(function(t){console.log(t)})}}},D=!window.location.host.includes("localhost")?"//i-de-trippin.herokuapp.com/":"//localhost:5000/api";s.a.use(E.a);l.a.create({baseURL:D,timeout:3e3,withCredentials:!0});var F=new E.a.Store({modules:{userModule:d,keepsModule:R,vaultModule:A}});s.a.config.productionTip=!1,new s.a({el:"#app",router:S,store:F,template:"<App/>",components:{App:n}})},Pbh9:function(t,e){},gQsr:function(t,e){},"jx0/":function(t,e){},kA5Z:function(t,e){},"q1U+":function(t,e){},qFVK:function(t,e){},qtkG:function(t,e){},rEU3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9e78db46fced46c8799d.js.map