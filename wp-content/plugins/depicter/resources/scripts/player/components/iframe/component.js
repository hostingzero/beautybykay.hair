!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(Depicter,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{dpcIframe:()=>o});const o={component:e=>{const{className:t="dpc-iframe",src:o="",title:r="",disableScroll:n,fullscreen:l,layer:c}=e,i=document.createElement("div");i.classList.add(t);const a=document.createElement("iframe");a.title=r,n&&(a.scrolling="no"),l&&(a.allow="fullscreen");const d=()=>{c.holder.active&&"leaving"!==c.holder.status&&c.bpVisible&&(a.src=o)},s=()=>{a.src="about:blank"};return c.holder.on("activated",d,c),c.holder.on("deactivated",s,c),c.on("visibilityChange",((e,t,o)=>{o?o&&s():d()})),i.appendChild(a),d(),i},async:!1,pureScript:!0};return t})()));