"use strict";(self.webpackChunkndzy=self.webpackChunkndzy||[]).push([["5269"],{3844:function(e,t,o){o.d(t,{G:()=>l,Z:()=>y});var r=o("3387"),i=o.n(r),n=o("7294");function l(e){var t=e.children,o=e.prefixCls,r=e.id,l=e.overlayInnerStyle,a=e.className,s=e.style;return n.createElement("div",{className:i()("".concat(o,"-content"),a),style:s},n.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:l},"function"==typeof t?t():t))}var a=o("6019"),s=o("324"),f=o("2685"),p=o("6582"),u={shiftX:64,adjustY:1},v={adjustX:1,shiftY:!0},c=[0,0],g={left:{points:["cr","cl"],overflow:v,offset:[-4,0],targetOffset:c},right:{points:["cl","cr"],overflow:v,offset:[4,0],targetOffset:c},top:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:c},bottom:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:c},topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:c},leftTop:{points:["tr","tl"],overflow:v,offset:[-4,0],targetOffset:c},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:c},rightTop:{points:["tl","tr"],overflow:v,offset:[4,0],targetOffset:c},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:c},rightBottom:{points:["bl","br"],overflow:v,offset:[4,0],targetOffset:c},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:c},leftBottom:{points:["br","bl"],overflow:v,offset:[-4,0],targetOffset:c}},m=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"];let y=(0,n.forwardRef)(function(e,t){var o=e.overlayClassName,r=e.trigger,i=e.mouseEnterDelay,u=e.mouseLeaveDelay,v=e.overlayStyle,c=e.prefixCls,y=void 0===c?"rc-tooltip":c,d=e.children,b=e.onVisibleChange,h=e.afterVisibleChange,w=e.transitionName,C=e.animation,O=e.motion,V=e.placement,N=e.align,D=e.destroyTooltipOnHide,E=e.defaultVisible,S=e.getTooltipContainer,T=e.overlayInnerStyle,P=(e.arrowContent,e.overlay),k=e.id,x=e.showArrow,I=(0,f.Z)(e,m),L=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,function(){return L.current});var Z=(0,s.Z)({},I);return"visible"in e&&(Z.popupVisible=e.visible),n.createElement(p.Z,(0,a.Z)({popupClassName:o,prefixCls:y,popup:function(){return n.createElement(l,{key:"content",prefixCls:y,id:k,overlayInnerStyle:T},P)},action:void 0===r?["hover"]:r,builtinPlacements:g,popupPlacement:void 0===V?"right":V,ref:L,popupAlign:void 0===N?{}:N,getPopupContainer:S,onPopupVisibleChange:b,afterPopupVisibleChange:h,popupTransitionName:w,popupAnimation:C,popupMotion:O,defaultPopupVisible:E,autoDestroy:void 0!==D&&D,mouseLeaveDelay:void 0===u?.1:u,popupStyle:v,mouseEnterDelay:void 0===i?0:i,arrow:void 0===x||x},Z),d)})}}]);