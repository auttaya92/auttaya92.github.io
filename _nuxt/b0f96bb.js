(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{395:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("63c9496b",content,!0,{sourceMap:!1})},396:function(t,e,n){var o=n(16)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},421:function(t,e,n){"use strict";var o=n(2),r=(n(25),n(50),n(57),n(395),n(46)),c=n(32),l=n(33),v=n(54),d=n(112),h=n(12),m=n(1),f=n(8);e.a=Object(h.a)(r.a,c.a,v.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(m.g)(n+footer+o),paddingLeft:this.app?Object(m.g)(r):void 0,paddingRight:this.app?Object(m.g)(c):void 0,paddingTop:Object(m.g)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(f.e)("auto-height",this),0==this.timeout&&Object(f.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(m.r)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(m.r)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},516:function(t,e,n){"use strict";n.r(e);var o=n(4),r=(n(31),{middleware:"authenticated",data:function(){return{lineOA:"",disableLineOA:!0,personalLine:"",disablePersonalLine:!0,phone:"",disablePhone:!0,snackbar:!1,text:"save contracts success",timeout:2e3}},mounted:function(){this.getData()},methods:{toggleTextfield:function(t){"LINEOA"===t?this.disableLineOA=!this.disableLineOA:"LINE"===t?this.disablePersonalLine=!this.disablePersonalLine:"PHONE"===t&&(this.disablePhone=!this.disablePhone)},saveDataFirebase:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$fire.database.ref("contract/").set({lineOA:e.lineOA,personalLine:e.personalLine,phone:e.phone}).catch((function(t){return console.log(t.code,t.message)}));case 2:e.snackbar=!0,e.toggleTextfield(t),e.getData();case 5:case"end":return n.stop()}}),n)})))()},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$fire.database.ref("contract/").once("value",(function(t){console.log(t.val());var data=t.val();console.log(data),n.lineOA=data.lineOA,n.personalLine=data.personalLine,n.phone=data.phone})).catch((function(t){return console.log(t.message)}));case 3:case"end":return e.stop()}}),e)})))()}}}),c=n(69),l=n(85),v=n.n(l),d=n(179),h=n(505),m=n(506),f=n(421),k=n(404),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("H1",[t._v("EDIT CONTRACT")]),t._v(" "),n("div",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2 mt-2"},[t._v("Line Official (Line OA)")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2"},[n("v-text-field",{attrs:{outlined:"",hint:"www.example.com/page",disabled:t.disableLineOA},model:{value:t.lineOA,callback:function(e){t.lineOA=e},expression:"lineOA"}})],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2 mt-2"},[n("v-btn",{attrs:{depressed:"",color:"error"},on:{click:function(e){return t.toggleTextfield("LINEOA")}}},[t._v("\n            แก้ไข\n          ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(e){return t.saveDataFirebase("LINEOA")}}},[t._v("\n            บันทึก\n          ")])],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2 mt-2"},[t._v("Line")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2"},[n("v-text-field",{attrs:{outlined:"",hint:"example",disabled:t.disablePersonalLine},model:{value:t.personalLine,callback:function(e){t.personalLine=e},expression:"personalLine"}})],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2 mt-2"},[n("v-btn",{attrs:{depressed:"",color:"error"},on:{click:function(e){return t.toggleTextfield("LINE")}}},[t._v("\n            แก้ไข\n          ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(e){return t.saveDataFirebase("LINE")}}},[t._v("\n            บันทึก\n          ")])],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2 mt-2"},[t._v("Phone Number")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2"},[n("v-text-field",{attrs:{outlined:"",hint:"0987654321",disabled:t.disablePhone},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2 mt-2"},[n("v-btn",{attrs:{depressed:"",color:"error"},on:{click:function(e){return t.toggleTextfield("PHONE")}}},[t._v("\n            แก้ไข\n          ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(e){return t.saveDataFirebase("PHONE")}}},[t._v("\n            บันทึก\n          ")])],1)])],1)],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout,absolute:"",top:"",color:"success",outlined:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("\n        Close\n      ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    ")])],1)}),[],!1,null,"5d2a0d11",null);e.default=component.exports;v()(component,{VBtn:d.a,VCol:h.a,VRow:m.a,VSnackbar:f.a,VTextField:k.a})}}]);