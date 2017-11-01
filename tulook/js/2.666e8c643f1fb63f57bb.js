webpackJsonp([2],{222:function(t,s,e){function a(t){e(234)}var r=e(97)(e(236),e(237),a,null,null);t.exports=r.exports},234:function(t,s,e){var a=e(235);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(219)("8422f940",a,!0)},235:function(t,s,e){s=t.exports=e(218)(void 0),s.push([t.i,"",""])},236:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(99),r=e.n(a),i=e(51),o=e(98),n=e.n(o),l=e(50);s.default={name:"Login",components:{QCard:l.d,QCardTitle:l.g,QCardSeparator:l.f,QCardMain:l.e,QField:l.h,QInput:l.k,QBtn:l.c},data:function(){return{user:{mail:"",pass:""},loginError:""}},methods:{login:function(t){var s=this;n.a.auth().signInWithEmailAndPassword(this.user.mail,this.user.pass).then(function(e){t(),s.$store.dispatch("login"),s.$router.push("/home")},function(t){s.loginError=t})}},computed:r()({},Object(i.b)(["title"]))}},237:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",[e("q-card",{staticClass:"bg-white"},[e("q-card-title",[t._v("\n                Bienvenido a "),e("strong",[t._v(t._s(t.title))])]),t._v(" "),e("q-card-main",[e("p",[t._v("Para comenzar tenés que estar registrado")]),t._v(" "),e("q-field",{attrs:{icon:"email"}},[e("q-input",{attrs:{placeholder:"Mail",type:"email"},model:{value:t.user.mail,callback:function(s){t.user.mail=s},expression:"user.mail"}})],1),t._v(" "),e("q-field",{attrs:{icon:"lock"}},[e("q-input",{attrs:{type:"password",placeholder:"Constraseña"},model:{value:t.user.pass,callback:function(s){t.user.pass=s},expression:"user.pass"}})],1),t._v(" "),e("p",[t._v("\n                    "+t._s(t.loginError.message)+"\n                ")]),t._v(" "),e("q-btn",{staticClass:"full-width",attrs:{loader:"",color:"purple"},on:{click:t.login}},[t._v("\n                    Ingresá\n                ")]),t._v(" "),e("p",{staticClass:"text-right"},[e("router-link",{attrs:{to:"/singup"}},[e("small",[t._v("No tengo cuenta, quiero registarme")])])],1)],1)],1),t._v(" "),e("q-card",{attrs:{flat:""}},[e("q-card-main",[e("p",{staticClass:"text-white"},[t._v("Si no querés registrarte podés acceder con los siguientes servicios")]),t._v(" "),e("div",{staticClass:"row sm-gutter"},[e("div",{staticClass:"col"},[e("q-btn",{staticClass:"full-width",attrs:{icon:"fa-google",color:"red"}},[t._v("Google")])],1),t._v(" "),e("div",{staticClass:"col"},[e("q-btn",{staticClass:"full-width",attrs:{icon:"fa-facebook-official",color:"primary"}},[t._v("Facebook")])],1)])])],1)],1)])},staticRenderFns:[]}}});