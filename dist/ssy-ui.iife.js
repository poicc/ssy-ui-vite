var SSYUI=function(e,t){"use strict";var n=document.createElement("style");n.textContent='*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.i-ic-baseline-add{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-check{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-delete{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-edit{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-message{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-search{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-share{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92c1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.mx-1,[mx-1=\"\"]{margin-left:0.25rem;margin-right:0.25rem;}.hover\:scale-105:hover,[hover\:scale-105=\"\"]:hover{--un-scale-x:1.05;--un-scale-y:1.05;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.transform,[transform=\"\"]{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.cursor-pointer,[cursor-pointer=\"\"]{cursor:pointer;}.border-\$\{props\.color\}-\$\{props\.plain{border-color:var(--\{props\.color\}-\$\{props\.plain);}.border-blue-400{--un-border-opacity:1;border-color:rgba(96,165,250,var(--un-border-opacity));}.border-blue-500{--un-border-opacity:1;border-color:rgba(59,130,246,var(--un-border-opacity));}.border-gray-400{--un-border-opacity:1;border-color:rgba(156,163,175,var(--un-border-opacity));}.border-gray-500{--un-border-opacity:1;border-color:rgba(107,114,128,var(--un-border-opacity));}.border-green-400{--un-border-opacity:1;border-color:rgba(74,222,128,var(--un-border-opacity));}.border-green-500{--un-border-opacity:1;border-color:rgba(34,197,94,var(--un-border-opacity));}.border-indigo-400{--un-border-opacity:1;border-color:rgba(129,140,248,var(--un-border-opacity));}.border-indigo-500{--un-border-opacity:1;border-color:rgba(99,102,241,var(--un-border-opacity));}.border-pink-400{--un-border-opacity:1;border-color:rgba(244,114,182,var(--un-border-opacity));}.border-pink-500{--un-border-opacity:1;border-color:rgba(236,72,153,var(--un-border-opacity));}.border-purple-400{--un-border-opacity:1;border-color:rgba(192,132,252,var(--un-border-opacity));}.border-purple-500{--un-border-opacity:1;border-color:rgba(168,85,247,var(--un-border-opacity));}.border-red-400{--un-border-opacity:1;border-color:rgba(248,113,113,var(--un-border-opacity));}.border-red-500{--un-border-opacity:1;border-color:rgba(239,68,68,var(--un-border-opacity));}.border-yellow-400{--un-border-opacity:1;border-color:rgba(250,204,21,var(--un-border-opacity));}.border-yellow-500{--un-border-opacity:1;border-color:rgba(234,179,8,var(--un-border-opacity));}.rounded-full,[rounded-full=\"\"]{border-radius:9999px;}.rounded-lg,[rounded-lg=\"\"]{border-radius:0.5rem;}.border-solid,[border-solid=\"\"]{border-style:solid;}.bg-\$\{props\.color\}-\$\{props\.plain{background-color:var(--\{props\.color\}-\$\{props\.plain);}.bg-blue-100,.hover\:bg-blue-100:hover{--un-bg-opacity:1;background-color:rgba(219,234,254,var(--un-bg-opacity));}.bg-blue-400,.hover\:bg-blue-400:hover{--un-bg-opacity:1;background-color:rgba(96,165,250,var(--un-bg-opacity));}.bg-blue-500,.hover\:bg-blue-500:hover{--un-bg-opacity:1;background-color:rgba(59,130,246,var(--un-bg-opacity));}.bg-gray-100,.hover\:bg-gray-100:hover{--un-bg-opacity:1;background-color:rgba(243,244,246,var(--un-bg-opacity));}.bg-gray-400,.hover\:bg-gray-400:hover{--un-bg-opacity:1;background-color:rgba(156,163,175,var(--un-bg-opacity));}.bg-gray-500,.hover\:bg-gray-500:hover{--un-bg-opacity:1;background-color:rgba(107,114,128,var(--un-bg-opacity));}.bg-green-100,.hover\:bg-green-100:hover{--un-bg-opacity:1;background-color:rgba(220,252,231,var(--un-bg-opacity));}.bg-green-400,.hover\:bg-green-400:hover{--un-bg-opacity:1;background-color:rgba(74,222,128,var(--un-bg-opacity));}.bg-green-500,.hover\:bg-green-500:hover{--un-bg-opacity:1;background-color:rgba(34,197,94,var(--un-bg-opacity));}.bg-indigo-100,.hover\:bg-indigo-100:hover{--un-bg-opacity:1;background-color:rgba(224,231,255,var(--un-bg-opacity));}.bg-indigo-400,.hover\:bg-indigo-400:hover{--un-bg-opacity:1;background-color:rgba(129,140,248,var(--un-bg-opacity));}.bg-indigo-500,.hover\:bg-indigo-500:hover{--un-bg-opacity:1;background-color:rgba(99,102,241,var(--un-bg-opacity));}.bg-pink-100,.hover\:bg-pink-100:hover{--un-bg-opacity:1;background-color:rgba(252,231,243,var(--un-bg-opacity));}.bg-pink-400,.hover\:bg-pink-400:hover{--un-bg-opacity:1;background-color:rgba(244,114,182,var(--un-bg-opacity));}.bg-pink-500,.hover\:bg-pink-500:hover{--un-bg-opacity:1;background-color:rgba(236,72,153,var(--un-bg-opacity));}.bg-purple-100,.hover\:bg-purple-100:hover{--un-bg-opacity:1;background-color:rgba(243,232,255,var(--un-bg-opacity));}.bg-purple-400,.hover\:bg-purple-400:hover{--un-bg-opacity:1;background-color:rgba(192,132,252,var(--un-bg-opacity));}.bg-purple-500,.hover\:bg-purple-500:hover{--un-bg-opacity:1;background-color:rgba(168,85,247,var(--un-bg-opacity));}.bg-red-100,.hover\:bg-red-100:hover{--un-bg-opacity:1;background-color:rgba(254,226,226,var(--un-bg-opacity));}.bg-red-400,.hover\:bg-red-400:hover{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity));}.bg-red-500,.hover\:bg-red-500:hover{--un-bg-opacity:1;background-color:rgba(239,68,68,var(--un-bg-opacity));}.bg-yellow-100,.hover\:bg-yellow-100:hover{--un-bg-opacity:1;background-color:rgba(254,249,195,var(--un-bg-opacity));}.bg-yellow-400,.hover\:bg-yellow-400:hover{--un-bg-opacity:1;background-color:rgba(250,204,21,var(--un-bg-opacity));}.bg-yellow-500,.hover\:bg-yellow-500:hover{--un-bg-opacity:1;background-color:rgba(234,179,8,var(--un-bg-opacity));}.hover\:bg-\$\{props\.color\}-400:hover{background-color:var(--\{props\.color\}-400);}.hover\:bg-blue-300:hover{--un-bg-opacity:1;background-color:rgba(147,197,253,var(--un-bg-opacity));}.hover\:bg-gray-300:hover{--un-bg-opacity:1;background-color:rgba(209,213,219,var(--un-bg-opacity));}.hover\:bg-green-300:hover{--un-bg-opacity:1;background-color:rgba(134,239,172,var(--un-bg-opacity));}.hover\:bg-indigo-300:hover{--un-bg-opacity:1;background-color:rgba(165,180,252,var(--un-bg-opacity));}.hover\:bg-pink-300:hover{--un-bg-opacity:1;background-color:rgba(249,168,212,var(--un-bg-opacity));}.hover\:bg-purple-300:hover{--un-bg-opacity:1;background-color:rgba(216,180,254,var(--un-bg-opacity));}.hover\:bg-red-300:hover{--un-bg-opacity:1;background-color:rgba(252,165,165,var(--un-bg-opacity));}.hover\:bg-yellow-300:hover{--un-bg-opacity:1;background-color:rgba(253,224,71,var(--un-bg-opacity));}.p-3,[p-3=\"\"]{padding:0.75rem;}.px-\$\{size\[props\.size\]\.x\}{padding-left:var(--\{size\[props\.size\]\.x\});padding-right:var(--\{size\[props\.size\]\.x\});}.px-1{padding-left:0.25rem;padding-right:0.25rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-5{padding-left:1.25rem;padding-right:1.25rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.px-7{padding-left:1.75rem;padding-right:1.75rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-\$\{size\[props\.size\]\.y\}{padding-top:var(--\{size\[props\.size\]\.y\});padding-bottom:var(--\{size\[props\.size\]\.y\});}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.py-7{padding-top:1.75rem;padding-bottom:1.75rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-base{font-size:1rem;line-height:1.5rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-xs{font-size:0.75rem;line-height:1rem;}.hover\:text-blue-500:hover,.text-blue-500{--un-text-opacity:1;color:rgba(59,130,246,var(--un-text-opacity));}.hover\:text-gray-500:hover,.text-gray-500{--un-text-opacity:1;color:rgba(107,114,128,var(--un-text-opacity));}.hover\:text-green-500:hover,.text-green-500{--un-text-opacity:1;color:rgba(34,197,94,var(--un-text-opacity));}.hover\:text-indigo-500:hover,.text-indigo-500{--un-text-opacity:1;color:rgba(99,102,241,var(--un-text-opacity));}.hover\:text-pink-500:hover,.text-pink-500{--un-text-opacity:1;color:rgba(236,72,153,var(--un-text-opacity));}.hover\:text-purple-500:hover,.text-purple-500{--un-text-opacity:1;color:rgba(168,85,247,var(--un-text-opacity));}.hover\:text-red-500:hover,.text-red-500{--un-text-opacity:1;color:rgba(239,68,68,var(--un-text-opacity));}.hover\:text-white:hover,.text-white,[hover\:text-white=\"\"]:hover{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.hover\:text-yellow-500:hover,.text-yellow-500{--un-text-opacity:1;color:rgba(234,179,8,var(--un-text-opacity));}.text-\$\{props\.plain{color:var(--\{props\.plain);}.text-\$\{size\[props\.size\]\.text\}{color:var(--\{size\[props\.size\]\.text\});}.transition,[transition=\"\"]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-300,[duration-300=\"\"]{transition-duration:300ms;}.ease-in-out,[ease-in-out=\"\"]{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}\n',document.head.appendChild(n);const o={color:{type:String,default:"blue"},size:{type:String,default:"medium"},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},l=t.defineComponent({name:"SButton",props:o,setup(e,{slots:n}){var o;console.log("html",null==(o=document.querySelector("#app"))?void 0:o.innerHTML);const l={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>t.createVNode("button",{class:`\n          py-${l[e.size].y}\n          px-${l[e.size].x}\n          ${e.round?"rounded-full":"rounded-lg"}\n          bg-${e.color}-${e.plain?"100":"500"}\n          hover:bg-${e.color}-400\n          border-${e.color}-${e.plain,"500"}\n          cursor-pointer\n          border-solid\n          text-${e.plain?e.color+"-500":"white"}\n          text-${l[e.size].text}\n          hover:text-white\n          transition duration-300 ease-in-out transform hover:scale-105\n          mx-1\n          `},[""!==e.icon?t.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",n.default?n.default():""])}}),r={install(e){e.component(l.name,l)}};return e.Button=l,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),e}({},Vue);
//# sourceMappingURL=ssy-ui.iife.js.map
