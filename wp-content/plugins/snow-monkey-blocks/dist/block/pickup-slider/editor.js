!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.lodash},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.components},function(e){e.exports=JSON.parse('{"name":"snow-monkey-blocks/pickup-slider","title":"Pickup slider (Deprecated)","description":"Display posts with pickup tags as a slider. This block is being retained for backwards compatibility and is not recommended for use. Its use may slow down the page display.","category":"smb-deprecated","attributes":{"random":{"type":"boolean","default":false},"linkType":{"type":"string","default":"button"},"postsPerPage":{"type":"number","default":0},"anchor":{"type":"string","default":""}},"supports":{"anchor":true}}')},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t){e.exports=window.wp.blockEditor},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"metadata",(function(){return u})),n.d(o,"name",(function(){return m})),n.d(o,"settings",(function(){return k}));var r=n(3),i=n.n(r),c=n(0),l=(n(2),n(6)),s=(n(7),n(1)),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e},u=n(5),p=n(8),b=n(4);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=[{attributes:f(f({},u.attributes),{myAnchor:{type:"string",default:""}}),migrate:function(e){return e.anchor=e.myAnchor,e},save:function(){return null}}],m=u.name,k={icon:{foreground:"#cd162c",src:"format-gallery"},edit:function(e){var t=e.attributes,n=e.setAttributes,o=t.random,r=t.linkType,i=t.postsPerPage;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(p.InspectorControls,null,Object(c.createElement)(b.PanelBody,{title:Object(s.__)("Block Settings","snow-monkey-blocks")},Object(c.createElement)(b.ToggleControl,{label:Object(s.__)("Display in random order","snow-monkey-blocks"),checked:o,onChange:function(e){return n({random:e})}}),Object(c.createElement)(b.SelectControl,{label:Object(s.__)("Link type","snow-monkey-blocks"),value:r,onChange:function(e){return n({linkType:e})},options:[{value:"button",label:Object(s.__)("Button link","snow-monkey-blocks")},{value:"overall",label:Object(s.__)("Overall link","snow-monkey-blocks")}]}),Object(c.createElement)(b.RangeControl,{label:Object(s.__)("Maximum number of displays","snow-monkey-blocks"),help:Object(s.__)('If "0", all items are displayed.',"snow-monkey-blocks"),value:i,onChange:function(e){return n({postsPerPage:a(e,0,10)})},min:"0",max:"10"}))),Object(c.createElement)(b.Placeholder,{icon:"format-gallery",label:Object(s.__)("Pickup slider","snow-monkey-blocks")},Object(s.__)('Posts with "pickup" tag are displayed as sliders.',"snow-monkey-blocks")))},save:function(){return Object(c.createElement)("div",{"data-dynamic-block":"snow-monkey-blocks/pickup-slider","data-version":"2"})},deprecated:y};!function(e){if(e){var t=e.metadata,n=e.settings,o=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords),Object(l.unstable__bootstrapServerSideBlockDefinitions)(i()({},o,t))),Object(l.registerBlockType)(o,n)}}(o)}]);