webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),a=i("Zzkc"),o=(i("ZA4m"),{data:function(){return{direction:"top",type:"iso",colorType:"hex",pickedColors:{hex:"#e96900",rgba:{r:"233",g:"105",b:"0",a:"1"}},width:100,height:100,degOfRotate:0,colorStyle:{top:"/t /t /c",right:"/t /t /t /c",bottom:"/c /t /t",left:"/t /c /t /t",leftTop:"/c /t /t",rightTop:"/c /t /t",rightBottom:"/t /t /c",leftBottom:"/t /t /c"},widthStyle:{top:"0 w/2 h",right:"h/2 0 h/2 w",bottom:"h w/2 0",left:"h/2 w h/2 0",leftTop:"h w 0 0",rightTop:"h 0 0 w",rightBottom:"0 0 h w",leftBottom:"0 w h 0"},normalDir:["top","right","bottom","left"],specialDir:["leftTop","rightTop","rightBottom","leftBottom"],toastVisible:!1,toastText:""}},methods:{onChangeColorPicker:function(t){this.pickedColors=t},setDirectionPositionStyle:function(t){switch(t){case"top":case"leftTop":return{top:0,left:0};case"right":case"rightTop":return{top:0,right:0};case"bottom":case"rightBottom":return{bottom:0,right:0};case"left":case"leftBottom":return{left:0,bottom:0}}},setBorderColorStyle:function(){var t=this,e=this.colorStyle[this.direction];return[{regex:/\/t/g,value:"transparent"},{regex:/\/c/g,value:function(){var e=t.pickedColors[t.colorType];return"rgba"===t.colorType?"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")":e}}].forEach(function(t){e=e.replace(t.regex,t.value)}),e},setBorderWidthStyle:function(){var t=this;this.isSpecialDir&&"equ"===this.type&&(this.type="iso");var e=this.widthStyle[this.direction],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if("equ"===t.type){var i=(Math.sqrt(3)/2*t.width).toFixed(1);return 0===(i=0===e?i:i/e)?0:i}return 0===e?t.height:t.height/e};return[{regex:/w\/2/g,value:this.width/2},{regex:/w/g,value:this.width},{regex:/h\/2/g,value:i(2)},{regex:/h/g,value:i(0)}].forEach(function(t){0!==parseInt(t.value)&&(t.value+="px"),e=e.replace(t.regex,t.value)}),e.match(/(0\s){2,}0/g)?0:e},setRotateStyle:function(){return 0===this.degOfRotate?0:"rotate("+this.degOfRotate+"deg)"},toast:function(t){var e=this;t&&(this.toastVisible||(this.toastVisible=!0,this.toastText=t,setTimeout(function(){e.toastVisible=!1},2500)))},copyCode:function(){var t=document.getElementById("pre"),e=document.createRange();e.selectNodeContents(t);var i=window.getSelection();i.removeAllRanges(),i.addRange(e),document.execCommand("copy")?this.toast("复制成功"):this.toast("复制失败, 请手动复制！！！")}},computed:{isEquType:function(){return"equ"===this.type},isSpecialDir:function(){var t=this;return this.specialDir.some(function(e){return t.direction===e})},cssCode:function(){return"width: 0;\nheight: 0;\nborder-style: solid;\nborder-width: "+this.setBorderWidthStyle()+";\nborder-color: "+this.setBorderColorStyle()+";  "+(this.degOfRotate?"\ntransform: "+this.setRotateStyle()+";\n-webkit-transform: "+this.setRotateStyle()+";":"")+"\n"}},components:{"chrome-picker":a.Chrome}}),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"triangle-generator"}},[t._m(0),t._v(" "),i("article",{staticClass:"message"},[t._m(1),t._v(" "),i("div",{staticClass:"message-body"},[i("div",{staticClass:"columns"},[i("aside",{staticClass:"sidebar column is-half"},[i("div",{staticClass:"field is-horizontal direction"},[t._m(2),t._v(" "),i("div",{staticClass:"field-body"},[i("div",{staticClass:"field"},[i("div",{staticClass:"control not-rotate"},t._l(t.specialDir,function(e,s){return i("label",{key:s,staticClass:"radio",class:{active:e===t.direction},style:t.setDirectionPositionStyle(e),attrs:{for:e}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:e},domProps:{value:e,checked:t._q(t.direction,e)},on:{change:function(i){t.direction=e}}})])})),t._v(" "),i("div",{staticClass:"control rotate"},t._l(t.normalDir,function(e,s){return i("label",{key:s,staticClass:"radio",class:{active:e===t.direction},style:t.setDirectionPositionStyle(e),attrs:{for:e}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"direction"}],attrs:{type:"radio",name:"direction",id:e},domProps:{value:e,checked:t._q(t.direction,e)},on:{change:function(i){t.direction=e}}})])})),t._v(" "),i("div",{staticClass:"centerFill"})])])]),t._v(" "),i("div",{staticClass:"field is-horizontal"},[t._m(3),t._v(" "),i("div",{staticClass:"field-body"},[i("div",{staticClass:"field is-narrow"},[i("div",{staticClass:"control"},[i("label",{staticClass:"radio",attrs:{for:"iso"}},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.type,expression:"type",modifiers:{number:!0}}],attrs:{type:"radio",id:"iso",name:"type",value:"iso",disabled:t.isSpecialDir},domProps:{checked:t._q(t.type,t._n("iso"))},on:{change:function(e){t.type=t._n("iso")}}}),t._v("\n                    等腰\n                  ")]),t._v(" "),i("label",{staticClass:"radio",attrs:{for:"equ"}},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.type,expression:"type",modifiers:{number:!0}}],attrs:{type:"radio",id:"equ",name:"type",value:"equ",disabled:t.isSpecialDir},domProps:{checked:t._q(t.type,t._n("equ"))},on:{change:function(e){t.type=t._n("equ")}}}),t._v("\n                    等边\n                  ")])])])])]),t._v(" "),i("div",{staticClass:"field is-horizontal align-center"},[t._m(4),t._v(" "),i("div",{staticClass:"field-body"},[i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.width,expression:"width"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.width},on:{input:function(e){e.target.composing||(t.width=e.target.value)}}})]),t._v(" "),t._m(5)])])]),t._v(" "),i("div",{staticClass:"field align-center has-addons"},[t._m(6),t._v(" "),i("div",{staticClass:"field-body"},[i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"input",attrs:{type:"number",placeholder:"高度",disabled:t.isEquType&&!t.isSpecialDir},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=e.target.value)}}})]),t._v(" "),i("p",{staticClass:"control"},[t.isEquType?t._e():i("span",{staticClass:"button"},[t._v("px")])])])])]),t._v(" "),i("div",{staticClass:"field align-center has-addons"},[t._m(7),t._v(" "),i("div",{staticClass:"field-body"},[i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.degOfRotate,expression:"degOfRotate",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number",placeholder:"旋转角度"},domProps:{value:t.degOfRotate},on:{input:function(e){e.target.composing||(t.degOfRotate=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("p",{staticClass:"control"},[t.isEquType?t._e():i("span",{staticClass:"button"},[t._v("deg")])])])])]),t._v(" "),i("div",{staticClass:"field is-horizontal"},[t._m(8),t._v(" "),i("div",{staticClass:"field-body"},[i("div",{staticClass:"field is-narrow"},[i("div",{staticClass:"controßl"},[i("label",{staticClass:"radio",attrs:{for:"hex"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.colorType,expression:"colorType"}],attrs:{type:"radio",id:"hex",name:"colorType",value:"hex"},domProps:{checked:t._q(t.colorType,"hex")},on:{change:function(e){t.colorType="hex"}}}),t._v("hex\n                  ")]),t._v(" "),i("label",{staticClass:"radio",attrs:{for:"rgba"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.colorType,expression:"colorType"}],attrs:{type:"radio",id:"rgba",name:"colorType",value:"rgba"},domProps:{checked:t._q(t.colorType,"rgba")},on:{change:function(e){t.colorType="rgba"}}}),t._v("rgba\n                  ")])])])])]),t._v(" "),i("div",{staticClass:"field is-horizontal"},[t._m(9),t._v(" "),i("div",{staticClass:"field-body"},[i("div",{staticClass:"field"},[i("div",{staticClass:"color-picker"},[i("chrome-picker",{on:{"change-color":t.onChangeColorPicker},model:{value:t.pickedColors,callback:function(e){t.pickedColors=e},expression:"pickedColors"}})],1)])])])]),t._v(" "),i("div",{staticClass:"workArea column"},[i("h2",{staticClass:"title"},[t._v("预览")]),t._v(" "),i("div",{staticClass:"triangleOutput"},[i("div",{ref:"triangle",staticClass:"triangle",style:{borderColor:t.setBorderColorStyle(),borderWidth:t.setBorderWidthStyle(),transform:t.setRotateStyle()}})]),t._v(" "),i("div",{staticClass:"cssOutput"},[i("h2",{staticClass:"title"},[t._v("CSS")]),t._v(" "),i("figure",{staticClass:"highlight"},[i("pre",{attrs:{id:"pre"},on:{click:function(e){t.copyCode()}}},[t._v(t._s(t.cssCode))])])])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.toastVisible,expression:"toastVisible"}],staticClass:"toast"},[t._v(t._s(t.toastText))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"title is-2"},[this._v("CSS三角形生成器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"message-header"},[e("p",[this._v("Vue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("箭头方向")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("类型")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("宽")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"control"},[e("span",{staticClass:"button"},[this._v("px")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("高")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("旋转角度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label"},[e("label",{staticClass:"label"},[this._v("颜色模式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field-label is-normal"},[e("label",{staticClass:"label"},[this._v("颜色")])])}]};var l=i("VU/8")(o,r,!1,function(t){i("gdtK")},null,null).exports;console.info("%cGitHub地址: ","color: #3fc180; font-size: 12px; font-weight: bold"),console.info("https://github.com/leekoho/triangle-generator"),s.a.config.productionTip=!0,new s.a({el:"#app",render:function(t){return t(l)}})},ZA4m:function(t,e){},gdtK:function(t,e){}},["NHnr"]);