(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cd9a7da"],{"0dd8":function(t,e,n){},4137:function(t,e,n){"use strict";var i=n("0dd8"),r=n.n(i);r.a},"52e2":function(t,e,n){t.exports=n.p+"img/econom.23756a09.jpg"},"56b7":function(t,e,n){var i={"./econom.jpg":"52e2","./platinum.jpg":"9c03","./premium.jpg":"8619","./premiumPlus.jpg":"6f90","./standart.jpg":"d4df","./vip.jpg":"bec7"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=c,t.exports=r,r.id="56b7"},"6d7c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-wrapper"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.modalInfo,expression:"modalInfo"}],staticClass:"modal modal-info"},[n("div",{staticClass:"close-modal",on:{click:t.modalInfo}}),n("h2",{staticClass:"title"},[t._v("Комплект "+t._s(t.currentKit.title)+" "),n("span",{staticClass:"red"},[t._v(t._s(t.currentKit.price)+" грн")])]),n("div",{staticClass:"modal-content"},[n("img",{attrs:{src:t.getImage,alt:""}}),"Платинум"!==t.currentKit.title?n("ul",[n("li",[t._v("Передние или задние с перемычкой")]),"Эконом"!==t.currentKit.title&&"Стандарт"!==t.currentKit.title?n("li",[t._v("Коврик в багажник")]):t._e(),"Эконом"===t.currentKit.title?n("li",[t._v("Гарантия от 6 до 12 мес")]):t._e(),"Эконом"!==t.currentKit.title?n("li",[t._v("Гарантия 12 мес")]):t._e(),n("li",[t._v("Срок пошива 5-7 дней")]),n("li",[t._v("Оригинальные крепления + система липучек")]),"Эконом"!==t.currentKit.title&&"Стандарт"!==t.currentKit.title?n("li",[t._v("Бесплатная доставка")]):t._e(),"Премиум"!==t.currentKit.title?n("li",[t._v("Пакет документов")]):t._e(),"Эконом"!==t.currentKit.title?n("li",[t._v("рассрочка "+t._s(Math.floor(t.currentKit.price/4))+" грн х 4 платежа")]):t._e()]):t._e(),"Платинум"===t.currentKit.title?n("div",{staticClass:"flex"},[t._m(0),t._m(1)]):t._e()])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"column"},[n("li",[t._v("5 ковриков: 4 в салон + перемычка и багажник")]),n("li",[t._v("Оригинальные крепления + система липучек")]),n("li",[t._v("Брендированный подпятник")]),n("li",[t._v("Шильды с логотипом марки авто: 5 шт")]),n("li",[t._v("Пакет документов")]),n("li",[t._v("Фирменный подарок от компании, который формируется индивидуально под каждого клиента")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"column"},[n("li",[t._v("Бесплатная доставка по Украине")]),n("li",[t._v("Комплект накидок на переднии сидения выполенные из бархотного меха (1690 грн)")]),n("li",[t._v("Доставка до 2-х дней")]),n("li",[t._v("Пошив: 5-7 дней")]),n("li",[t._v("Отправка заказа в тот же день пошива")])])}],c=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),o=n("e67d"),u=n.n(o),l=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"modal-info",methods:s({},Object(l["c"])(["modalInfo"])),computed:s({},Object(l["b"])(["currentKit"]),{getImage:{get:function(){return n("56b7")("./".concat(this.$store.state.currentKit,".jpg"))}}}),directives:{ClickOutside:u.a}},d=p,f=(n("4137"),n("2877")),_=Object(f["a"])(d,i,r,!1,null,null,null);e["default"]=_.exports},"6f90":function(t,e,n){t.exports=n.p+"img/premiumPlus.d8907137.jpg"},8619:function(t,e,n){t.exports=n.p+"img/premium.bb788ebc.jpg"},"9c03":function(t,e,n){t.exports=n.p+"img/platinum.ba77e741.jpg"},bec7:function(t,e,n){t.exports=n.p+"img/vip.43088290.jpg"},d4df:function(t,e,n){t.exports=n.p+"img/standart.c965038d.jpg"},e67d:function(t,e){function n(t){return"function"===typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1)}function i(t,e){if(!t||!e)return!1;for(var n=0,i=e.length;n<i;n++)try{if(t.contains(e[n]))return!0;if(e[n].contains(t))return!1}catch(r){return!1}return!1}function r(t){return"undefined"!==typeof t.componentInstance&&t.componentInstance.$isServer}t.exports={bind:function(t,e,c){function o(e){if(c.context){var n=e.path||e.composedPath&&e.composedPath();n&&n.length>0&&n.unshift(e.target),t.contains(e.target)||i(c.context.popupItem,n)||t.__vueClickOutside__.callback(e)}}n(e)&&(t.__vueClickOutside__={handler:o,callback:e.value},!r(c)&&document.addEventListener("click",o))},update:function(t,e){n(e)&&(t.__vueClickOutside__.callback=e.value)},unbind:function(t,e,n){!r(n)&&document.removeEventListener("click",t.__vueClickOutside__.handler),delete t.__vueClickOutside__}}}}]);
//# sourceMappingURL=chunk-4cd9a7da.js.map