"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){var r=function(){return e?window.localStorage:window.sessionStorage};return{getStorage:function(e){if(!e||!r())return"";try{var t=r().getItem(e)||"";return JSON.parse(t)}catch(e){return""}},setStorage:function(e,t){if(r())return r().setItem(e,JSON.stringify(t))},removeStorage:function(e){if(r())return r().removeItem(e)},clearStorage:function(){if(r)return r().clear()}}};exports.useLocalStorage=function(){return e(!0)},exports.useSessionStorage=function(){return e(!1)},exports.useStorage=e;
