"use strict";(self.webpackChunkndzy=self.webpackChunkndzy||[]).push([["7430"],{94697:function(e,t,n){let r;n.d(t,{Cj:function(){return eX},Dy:function(){return A},LB:function(){return eJ},O1:function(){return eH},VK:function(){return K},VT:function(){return I},Zj:function(){return eq},g4:function(){return b},we:function(){return eg}});var l,i,a,o,u,s,d,c,h,f,g,p,v,b,y,m,w,x,D,E,C=n(67294),M=n(73935),R=n(24285),S=n(42617);let L=(0,C.createContext)(null),k={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},O={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function T(e){let{announcements:t=O,container:n,hiddenTextDescribedById:r,screenReaderInstructions:l=k}=e,{announce:i,announcement:a}=(0,S.qg)(),o=(0,R.Ld)("DndLiveRegion"),[u,s]=(0,C.useState)(!1);if((0,C.useEffect)(()=>{s(!0)},[]),!function(e){let t=(0,C.useContext)(L);(0,C.useEffect)(()=>{if(!t)throw Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}((0,C.useMemo)(()=>({onDragStart(e){let{active:n}=e;i(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&i(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;i(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;i(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;i(t.onDragCancel({active:n,over:r}))}}),[i,t])),!u)return null;let d=C.createElement(C.Fragment,null,C.createElement(S.Mv,{id:r,value:l.draggable}),C.createElement(S.LE,{id:o,announcement:a}));return n?(0,M.createPortal)(d,n):d}function N(){}function I(e,t){return(0,C.useMemo)(()=>({sensor:e,options:null!=t?t:{}}),[e,t])}function A(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,C.useMemo)(()=>[...t].filter(e=>null!=e),[...t])}(l=g||(g={})).DragStart="dragStart",l.DragMove="dragMove",l.DragEnd="dragEnd",l.DragCancel="dragCancel",l.DragOver="dragOver",l.RegisterDroppable="registerDroppable",l.SetDroppableDisabled="setDroppableDisabled",l.UnregisterDroppable="unregisterDroppable";let j=Object.freeze({x:0,y:0});function z(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}let B=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,l=[];for(let e of r){let{id:r}=e,i=n.get(r);if(i){let n=function(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),l=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height);if(r<l&&n<i){let a=t.width*t.height,o=e.width*e.height,u=(l-r)*(i-n);return Number((u/(a+o-u)).toFixed(4))}return 0}(i,t);n>0&&l.push({id:r,data:{droppableContainer:e,value:n}})}}return l.sort(z)};function P(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:j}let F=(i=1,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((e,t)=>({...e,top:e.top+i*t.y,bottom:e.bottom+i*t.y,left:e.left+i*t.x,right:e.right+i*t.x}),{...e})});function J(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}let U={ignoreTransform:!1};function K(e,t){void 0===t&&(t=U);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=(0,R.Jj)(e).getComputedStyle(e);t&&(n=function(e,t,n){let r=J(t);if(!r)return e;let{scaleX:l,scaleY:i,x:a,y:o}=r,u=e.left-a-(1-l)*parseFloat(n),s=e.top-o-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),d=l?e.width/l:e.width,c=i?e.height/i:e.height;return{width:d,height:c,top:s,right:u+d,bottom:s+c,left:u}}(n,t,r))}let{top:r,left:l,width:i,height:a,bottom:o,right:u}=n;return{top:r,left:l,width:i,height:a,bottom:o,right:u}}function H(e){return K(e,{ignoreTransform:!0})}function X(e,t){let n=[];return e?function r(l){var i,a;if(null!=t&&n.length>=t||!l)return n;if((0,R.qk)(l)&&null!=l.scrollingElement&&!n.includes(l.scrollingElement))return n.push(l.scrollingElement),n;if(!(0,R.Re)(l)||(0,R.vZ)(l)||n.includes(l))return n;let o=(0,R.Jj)(e).getComputedStyle(l);return(l!==e&&function(e,t){void 0===t&&(t=(0,R.Jj)(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(e=>{let r=t[e];return"string"==typeof r&&n.test(r)})}(l,o)&&n.push(l),i=l,void 0===(a=o)&&(a=(0,R.Jj)(i).getComputedStyle(i)),"fixed"===a.position)?n:r(l.parentNode)}(e):n}function W(e){let[t]=X(e,1);return null!=t?t:null}function q(e){return R.Nq&&e?(0,R.FJ)(e)?e:(0,R.UG)(e)?(0,R.qk)(e)||e===(0,R.r3)(e).scrollingElement?window:(0,R.Re)(e)?e:null:null:null}function Y(e){return(0,R.FJ)(e)?e.scrollX:e.scrollLeft}function V(e){return(0,R.FJ)(e)?e.scrollY:e.scrollTop}function G(e){return{x:Y(e),y:V(e)}}function _(e){return!!R.Nq&&!!e&&e===document.scrollingElement}function $(e){let t={x:0,y:0},n=_(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},l=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,a=e.scrollTop>=r.y;return{isTop:l,isLeft:i,isBottom:a,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}(a=p||(p={}))[a.Forward=1]="Forward",a[a.Backward=-1]="Backward";let Z={x:.2,y:.2};function Q(e){return e.reduce((e,t)=>(0,R.IH)(e,G(t)),j)}function ee(e,t){if(void 0===t&&(t=K),!e)return;let{top:n,left:r,bottom:l,right:i}=t(e);if(!!W(e))(l<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}let et=[["x",["left","right"],function(e){return e.reduce((e,t)=>e+Y(t),0)}],["y",["top","bottom"],function(e){return e.reduce((e,t)=>e+V(t),0)}]];class en{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=X(t),r=Q(n);for(let[t,l,i]of(this.rect={...e},this.width=e.width,this.height=e.height,et))for(let e of l)Object.defineProperty(this,e,{get:()=>{let l=i(n),a=r[t]-l;return this.rect[e]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class er{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)})},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function el(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}function ei(e){e.preventDefault()}function ea(e){e.stopPropagation()}(o=v||(v={})).Click="click",o.DragStart="dragstart",o.Keydown="keydown",o.ContextMenu="contextmenu",o.Resize="resize",o.SelectionChange="selectionchange",o.VisibilityChange="visibilitychange",(u=b||(b={})).Space="Space",u.Down="ArrowDown",u.Right="ArrowRight",u.Left="ArrowLeft",u.Up="ArrowUp",u.Esc="Escape",u.Enter="Enter";let eo={start:[b.Space,b.Enter],cancel:[b.Esc],end:[b.Space,b.Enter]},eu=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case b.Right:return{...n,x:n.x+25};case b.Left:return{...n,x:n.x-25};case b.Down:return{...n,y:n.y+25};case b.Up:return{...n,y:n.y-25}}};class es{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new er((0,R.r3)(t)),this.windowListeners=new er((0,R.Jj)(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(v.Resize,this.handleCancel),this.windowListeners.add(v.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(v.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&ee(n),t(j)}handleKeyDown(e){if((0,R.vd)(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:l=eo,coordinateGetter:i=eu,scrollBehavior:a="smooth"}=r,{code:o}=e;if(l.end.includes(o)){this.handleEnd(e);return}if(l.cancel.includes(o)){this.handleCancel(e);return}let{collisionRect:u}=n.current,s=u?{x:u.left,y:u.top}:j;!this.referenceCoordinates&&(this.referenceCoordinates=s);let d=i(e,{active:t,context:n.current,currentCoordinates:s});if(d){let t=(0,R.$X)(d,s),r={x:0,y:0},{scrollableAncestors:l}=n.current;for(let n of l){let l=e.code,{isTop:i,isRight:o,isLeft:u,isBottom:s,maxScroll:c,minScroll:h}=$(n),f=function(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:l}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:l,width:e.clientWidth,height:e.clientHeight}}(n),g={x:Math.min(l===b.Right?f.right-f.width/2:f.right,Math.max(l===b.Right?f.left:f.left+f.width/2,d.x)),y:Math.min(l===b.Down?f.bottom-f.height/2:f.bottom,Math.max(l===b.Down?f.top:f.top+f.height/2,d.y))},p=l===b.Right&&!o||l===b.Left&&!u,v=l===b.Down&&!s||l===b.Up&&!i;if(p&&g.x!==d.x){let e=n.scrollLeft+t.x,i=l===b.Right&&e<=c.x||l===b.Left&&e>=h.x;if(i&&!t.y){n.scrollTo({left:e,behavior:a});return}i?r.x=n.scrollLeft-e:r.x=l===b.Right?n.scrollLeft-c.x:n.scrollLeft-h.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(v&&g.y!==d.y){let e=n.scrollTop+t.y,i=l===b.Down&&e<=c.y||l===b.Up&&e>=h.y;if(i&&!t.x){n.scrollTo({top:e,behavior:a});return}i?r.y=n.scrollTop-e:r.y=l===b.Down?n.scrollTop-c.y:n.scrollTop-h.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,(0,R.IH)((0,R.$X)(d,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}function ed(e){return!!(e&&"distance"in e)}function ec(e){return!!(e&&"delay"in e)}es.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=eo,onActivation:l}=t,{active:i}=n,{code:a}=e.nativeEvent;if(r.start.includes(a)){let t=i.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==l||l({event:e.nativeEvent}),!0)}return!1}}];class eh{constructor(e,t,n){var r;void 0===n&&(n=function(e){let{EventTarget:t}=(0,R.Jj)(e);return e instanceof t?e:(0,R.r3)(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:l}=e,{target:i}=l;this.props=e,this.events=t,this.document=(0,R.r3)(i),this.documentListeners=new er(this.document),this.listeners=new er(n),this.windowListeners=new er((0,R.Jj)(i)),this.initialCoordinates=null!=(r=(0,R.DC)(l))?r:j,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(v.Resize,this.handleCancel),this.windowListeners.add(v.DragStart,ei),this.windowListeners.add(v.VisibilityChange,this.handleCancel),this.windowListeners.add(v.ContextMenu,ei),this.documentListeners.add(v.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ec(t)){this.timeoutId=setTimeout(this.handleStart,t.delay);return}if(ed(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(v.Click,ea,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(v.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;let{activated:n,initialCoordinates:r,props:l}=this,{onMove:i,options:{activationConstraint:a}}=l;if(!r)return;let o=null!=(t=(0,R.DC)(e))?t:j,u=(0,R.$X)(r,o);if(!n&&a){if(ed(a)){if(null!=a.tolerance&&el(u,a.tolerance))return this.handleCancel();if(el(u,a.distance))return this.handleStart()}return ec(a)&&el(u,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onEnd:e}=this.props;this.detach(),e()}handleCancel(){let{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===b.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}let ef={move:{name:"pointermove"},end:{name:"pointerup"}};class eg extends eh{constructor(e){let{event:t}=e;super(e,ef,(0,R.r3)(t.target))}}eg.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!!n.isPrimary&&0===n.button&&(null==r||r({event:n}),!0)}}];let ep={move:{name:"mousemove"},end:{name:"mouseup"}};(s=y||(y={}))[s.RightClick=2]="RightClick";let ev={move:{name:"touchmove"},end:{name:"touchend"}};(d=m||(m={}))[d.Pointer=0]="Pointer",d[d.DraggableRect=1]="DraggableRect",(c=w||(w={}))[c.TreeOrder=0]="TreeOrder",c[c.ReversedTreeOrder=1]="ReversedTreeOrder";let eb={x:{[p.Backward]:!1,[p.Forward]:!1},y:{[p.Backward]:!1,[p.Forward]:!1}};(h=x||(x={}))[h.Always=0]="Always",h[h.BeforeDragging=1]="BeforeDragging",h[h.WhileDragging=2]="WhileDragging",(D||(D={})).Optimized="optimized";let ey=new Map;function em(e,t){return(0,R.Gj)(n=>e?n?n:"function"==typeof t?t(e):e:null,[t,e])}function ew(e){let{callback:t,disabled:n}=e,r=(0,R.zX)(t),l=(0,C.useMemo)(()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,C.useEffect)(()=>()=>null==l?void 0:l.disconnect(),[l]),l}function ex(e){return new en(K(e),e)}function eD(e,t,n){void 0===t&&(t=ex);let[r,l]=(0,C.useReducer)(function(r){if(!e)return null;if(!1===e.isConnected){var l;return null!=(l=null!=r?r:n)?l:null}let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i},null),i=function(e){let{callback:t,disabled:n}=e,r=(0,R.zX)(t),l=(0,C.useMemo)(()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,C.useEffect)(()=>()=>null==l?void 0:l.disconnect(),[l]),l}({callback(t){if(!!e)for(let n of t){let{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){l();break}}}}),a=ew({callback:l});return(0,R.LI)(()=>{l(),e?(null==a||a.observe(e),null==i||i.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==i||i.disconnect())},[e]),r}let eE=[];function eC(e,t){void 0===t&&(t=[]);let n=(0,C.useRef)(null);return(0,C.useEffect)(()=>{n.current=null},t),(0,C.useEffect)(()=>{let t=e!==j;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?(0,R.$X)(e,n.current):j}function eM(e){return(0,C.useMemo)(()=>e?function(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null,[e])}let eR=[];function eS(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return(0,R.Re)(t)?t:e}let eL=[{sensor:eg,options:{}},{sensor:es,options:{}}],ek={current:{}},eO={draggable:{measure:H},droppable:{measure:H,strategy:x.WhileDragging,frequency:D.Optimized},dragOverlay:{measure:K}};class eT extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}let eN={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new eT,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:N},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:eO,measureDroppableContainers:N,windowRect:null,measuringScheduled:!1},eI={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:N,draggableNodes:new Map,over:null,measureDroppableContainers:N},eA=(0,C.createContext)(eI),ej=(0,C.createContext)(eN);function ez(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new eT}}}function eB(e,t){switch(t.type){case g.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case g.DragMove:if(!e.draggable.active)return e;return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case g.DragEnd:case g.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case g.RegisterDroppable:{let{element:n}=t,{id:r}=n,l=new eT(e.droppable.containers);return l.set(r,n),{...e,droppable:{...e.droppable,containers:l}}}case g.SetDroppableDisabled:{let{id:n,key:r,disabled:l}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new eT(e.droppable.containers);return a.set(n,{...i,disabled:l}),{...e,droppable:{...e.droppable,containers:a}}}case g.UnregisterDroppable:{let{id:n,key:r}=t,l=e.droppable.containers.get(n);if(!l||r!==l.key)return e;let i=new eT(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function eP(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:l}=(0,C.useContext)(eA),i=(0,R.D9)(r),a=(0,R.D9)(null==n?void 0:n.id);return(0,C.useEffect)(()=>{if(!t){if(!r&&i&&null!=a){if(!(0,R.vd)(i)||document.activeElement===i.target)return;let e=l.get(a);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=(0,R.so)(e);if(t){t.focus();break}}})}}},[r,t,l,a,i]),null}let eF=(0,C.createContext)({...j,scaleX:1,scaleY:1});(f=E||(E={}))[f.Uninitialized=0]="Uninitialized",f[f.Initializing=1]="Initializing",f[f.Initialized=2]="Initialized";let eJ=(0,C.memo)(function(e){var t,n,r,l,i,a,o,u,s,d,c;let{id:h,accessibility:f,autoScroll:v=!0,children:b,sensors:y=eL,collisionDetection:D=B,measuring:S,modifiers:k,...O}=e,[N,I]=(0,C.useReducer)(eB,void 0,ez),[A,z]=function(){let[e]=(0,C.useState)(()=>new Set),t=(0,C.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,C.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)})},[e]),t]}(),[J,U]=(0,C.useState)(E.Uninitialized),H=J===E.Initialized,{draggable:{active:Y,nodes:V,translate:ee},droppable:{containers:et}}=N,er=Y?V.get(Y):null,el=(0,C.useRef)({initial:null,translated:null}),ei=(0,C.useMemo)(()=>{var e;return null!=Y?{id:Y,data:null!=(e=null==er?void 0:er.data)?e:ek,rect:el}:null},[Y,er]),ea=(0,C.useRef)(null),[eo,eu]=(0,C.useState)(null),[es,ed]=(0,C.useState)(null),ec=(0,R.Ey)(O,Object.values(O)),eh=(0,R.Ld)("DndDescribedBy",h),ef=(0,C.useMemo)(()=>et.getEnabled(),[et]);let eg=(i=S,(0,C.useMemo)(()=>({draggable:{...eO.draggable,...null==i?void 0:i.draggable},droppable:{...eO.droppable,...null==i?void 0:i.droppable},dragOverlay:{...eO.dragOverlay,...null==i?void 0:i.dragOverlay}}),[null==i?void 0:i.draggable,null==i?void 0:i.droppable,null==i?void 0:i.dragOverlay])),{droppableRects:ep,measureDroppableContainers:ev,measuringScheduled:ex}=function(e,t){let{dragging:n,dependencies:r,config:l}=t,[i,a]=(0,C.useState)(null),{frequency:o,measure:u,strategy:s}=l,d=(0,C.useRef)(e),c=function(){switch(s){case x.Always:return!1;case x.BeforeDragging:return n;default:return!n}}(),h=(0,R.Ey)(c),f=(0,C.useCallback)(function(e){if(void 0===e&&(e=[]),!h.current)a(t=>null===t?e:t.concat(e.filter(e=>!t.includes(e))))},[h]),g=(0,C.useRef)(null),p=(0,R.Gj)(t=>{if(c&&!n)return ey;if(!t||t===ey||d.current!==e||null!=i){let t=new Map;for(let n of e){if(!n)continue;if(i&&i.length>0&&!i.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new en(u(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,i,n,c,u]);return(0,C.useEffect)(()=>{d.current=e},[e]),(0,C.useEffect)(()=>{if(!c)f()},[n,c]),(0,C.useEffect)(()=>{i&&i.length>0&&a(null)},[JSON.stringify(i)]),(0,C.useEffect)(()=>{if(!c&&"number"==typeof o&&null===g.current)g.current=setTimeout(()=>{f(),g.current=null},o)},[o,c,f,...r]),{droppableRects:p,measureDroppableContainers:f,measuringScheduled:null!=i}}(ef,{dragging:H,dependencies:[ee.x,ee.y],config:eg.droppable}),eT=function(e,t){let n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return(0,R.Gj)(e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null},[r,t])}(V,Y),eN=(0,C.useMemo)(()=>es?(0,R.DC)(es):null,[es]),eI=function(){let e=(null==eo?void 0:eo.autoScrollEnabled)===!1,t="object"==typeof v?!1===v.enabled:!1===v,n=H&&!e&&!t;return"object"==typeof v?{...v,enabled:n}:{enabled:n}}(),eJ=em(eT,eg.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:l=!0}=e,i=(0,C.useRef)(!1),{x:a,y:o}="boolean"==typeof l?{x:l,y:l}:l;(0,R.LI)(()=>{if(!a&&!o||!t){i.current=!1;return}if(i.current||!r)return;let e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;let l=P(n(e),r);if(!a&&(l.x=0),!o&&(l.y=0),i.current=!0,Math.abs(l.x)>0||Math.abs(l.y)>0){let t=W(e);t&&t.scrollBy({top:l.y,left:l.x})}},[t,a,o,r,n])}({activeNode:Y?V.get(Y):null,config:eI.layoutShiftCompensation,initialRect:eJ,measure:eg.draggable.measure});let eU=eD(eT,eg.draggable.measure,eJ),eK=eD(eT?eT.parentElement:null),eH=(0,C.useRef)({activatorEvent:null,active:null,activeNode:eT,collisionRect:null,collisions:null,droppableRects:ep,draggableNodes:V,draggingNode:null,draggingNodeRect:null,droppableContainers:et,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),eX=et.getNodeFor(null==(t=eH.current.over)?void 0:t.id),eW=function(e){let{measure:t}=e,[n,r]=(0,C.useState)(null),l=ew({callback:(0,C.useCallback)(e=>{for(let{target:n}of e)if((0,R.Re)(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),i=(0,C.useCallback)(e=>{let n=eS(e);null==l||l.disconnect(),n&&(null==l||l.observe(n)),r(n?t(n):null)},[t,l]),[a,o]=(0,R.wm)(i);return(0,C.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}({measure:eg.dragOverlay.measure}),eq=null!=(n=eW.nodeRef.current)?n:eT,eY=H?null!=(r=eW.rect)?r:eU:null,eV=!!(eW.nodeRef.current&&eW.rect),eG=function(e){let t=em(e);return P(e,t)}(eV?null:eU),e_=eM(eq?(0,R.Jj)(eq):null),e$=function(e){let t=(0,C.useRef)(e),n=(0,R.Gj)(n=>e?n&&n!==eE&&e&&t.current&&e.parentNode===t.current.parentNode?n:X(e):eE,[e]);return(0,C.useEffect)(()=>{t.current=e},[e]),n}(H?null!=eX?eX:eT:null),eZ=function(e,t){void 0===t&&(t=K);let[n]=e,r=eM(n?(0,R.Jj)(n):null),[l,i]=(0,C.useReducer)(function(){return e.length?e.map(e=>_(e)?r:new en(t(e),e)):eR},eR),a=ew({callback:i});return e.length>0&&l===eR&&i(),(0,R.LI)(()=>{e.length?e.forEach(e=>null==a?void 0:a.observe(e)):(null==a||a.disconnect(),i())},[e]),l}(e$),eQ=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}(k,{transform:{x:ee.x-eG.x,y:ee.y-eG.y,scaleX:1,scaleY:1},activatorEvent:es,active:ei,activeNodeRect:eU,containerNodeRect:eK,draggingNodeRect:eY,over:eH.current.over,overlayNodeRect:eW.rect,scrollableAncestors:e$,scrollableAncestorRects:eZ,windowRect:e_}),e0=eN?(0,R.IH)(eN,ee):null,e1=function(e){let[t,n]=(0,C.useState)(null),r=(0,C.useRef)(e),l=(0,C.useCallback)(e=>{let t=q(e.target);if(!!t)n(e=>e?(e.set(t,G(t)),new Map(e)):null)},[]);return(0,C.useEffect)(()=>{let t=r.current;if(e!==t){i(t);let a=e.map(e=>{let t=q(e);return t?(t.addEventListener("scroll",l,{passive:!0}),[t,G(t)]):null}).filter(e=>null!=e);n(a.length?new Map(a):null),r.current=e}return()=>{i(e),i(t)};function i(e){e.forEach(e=>{let t=q(e);null==t||t.removeEventListener("scroll",l)})}},[l,e]),(0,C.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>(0,R.IH)(e,t),j):Q(e):j,[e,t])}(e$),e2=eC(e1),e5=eC(e1,[eU]),e3=(0,R.IH)(eQ,e2),e4=eY?F(eY,eQ):null,e9=ei&&e4?D({active:ei,collisionRect:e4,droppableRects:ep,droppableContainers:ef,pointerCoordinates:e0}):null,e7=function(e,t){if(!e||0===e.length)return null;let[n]=e;return 0,n[t]}(e9,"id"),[e6,e8]=(0,C.useState)(null);let te=(a=eV?eQ:(0,R.IH)(eQ,e5),o=null!=(l=null==e6?void 0:e6.rect)?l:null,u=eU,{...a,scaleX:o&&u?o.width/u.width:1,scaleY:o&&u?o.height/u.height:1}),tt=(0,C.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(null==ea.current)return;let l=V.get(ea.current);if(!l)return;let i=e.nativeEvent,a=new n({active:ea.current,activeNode:l,event:i,options:r,context:eH,onStart(e){let t=ea.current;if(null==t)return;let n=V.get(t);if(!n)return;let{onDragStart:r}=ec.current,l={active:{id:t,data:n.data,rect:el}};(0,M.unstable_batchedUpdates)(()=>{null==r||r(l),U(E.Initializing),I({type:g.DragStart,initialCoordinates:e,active:t}),A({type:"onDragStart",event:l})})},onMove(e){I({type:g.DragMove,coordinates:e})},onEnd:o(g.DragEnd),onCancel:o(g.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:l}=eH.current,a=null;if(t&&l){let{cancelDrop:o}=ec.current;a={activatorEvent:i,active:t,collisions:n,delta:l,over:r},e===g.DragEnd&&"function"==typeof o&&await Promise.resolve(o(a))&&(e=g.DragCancel)}ea.current=null,(0,M.unstable_batchedUpdates)(()=>{I({type:e}),U(E.Uninitialized),e8(null),eu(null),ed(null);let t=e===g.DragEnd?"onDragEnd":"onDragCancel";if(a){let e=ec.current[t];null==e||e(a),A({type:t,event:a})}})}}(0,M.unstable_batchedUpdates)(()=>{eu(a),ed(e.nativeEvent)})},[V]),tn=(0,C.useCallback)((e,t)=>(n,r)=>{let l=n.nativeEvent,i=V.get(r);if(null===ea.current&&!!i&&!l.dndKit&&!l.defaultPrevented)!0===e(n,t.options,{active:i})&&(l.dndKit={capturedBy:t.sensor},ea.current=r,tt(n,t))},[V,tt]);let tr=(s=y,d=tn,(0,C.useMemo)(()=>s.reduce((e,t)=>{let{sensor:n}=t;return[...e,...n.activators.map(e=>({eventName:e.eventName,handler:d(e.handler,t)}))]},[]),[s,d]));c=y,(0,C.useEffect)(()=>{if(!R.Nq)return;let e=c.map(e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()});return()=>{for(let t of e)null==t||t()}},c.map(e=>{let{sensor:t}=e;return t})),(0,R.LI)(()=>{eU&&J===E.Initializing&&U(E.Initialized)},[eU,J]),(0,C.useEffect)(()=>{let{onDragMove:e}=ec.current,{active:t,activatorEvent:n,collisions:r,over:l}=eH.current;if(!t||!n)return;let i={active:t,activatorEvent:n,collisions:r,delta:{x:e3.x,y:e3.y},over:l};(0,M.unstable_batchedUpdates)(()=>{null==e||e(i),A({type:"onDragMove",event:i})})},[e3.x,e3.y]),(0,C.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:l}=eH.current;if(!e||null==ea.current||!t||!l)return;let{onDragOver:i}=ec.current,a=r.get(e7),o=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,u={active:e,activatorEvent:t,collisions:n,delta:{x:l.x,y:l.y},over:o};(0,M.unstable_batchedUpdates)(()=>{e8(o),null==i||i(u),A({type:"onDragOver",event:u})})},[e7]),(0,R.LI)(()=>{eH.current={activatorEvent:es,active:ei,activeNode:eT,collisionRect:e4,collisions:e9,droppableRects:ep,draggableNodes:V,draggingNode:eq,draggingNodeRect:eY,droppableContainers:et,over:e6,scrollableAncestors:e$,scrollAdjustedTranslate:e3},el.current={initial:eY,translated:e4}},[ei,eT,e9,e4,V,eq,eY,ep,et,e6,e$,e3]),!function(e){let{acceleration:t,activator:n=m.Pointer,canScroll:r,draggingRect:l,enabled:i,interval:a=5,order:o=w.TreeOrder,pointerCoordinates:u,scrollableAncestors:s,scrollableAncestorRects:d,delta:c,threshold:h}=e,f=function(e){let{delta:t,disabled:n}=e,r=(0,R.D9)(t);return(0,R.Gj)(e=>{if(n||!r||!e)return eb;let l={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[p.Backward]:e.x[p.Backward]||-1===l.x,[p.Forward]:e.x[p.Forward]||1===l.x},y:{[p.Backward]:e.y[p.Backward]||-1===l.y,[p.Forward]:e.y[p.Forward]||1===l.y}}},[n,t,r])}({delta:c,disabled:!i}),[g,v]=(0,R.Yz)(),b=(0,C.useRef)({x:0,y:0}),y=(0,C.useRef)({x:0,y:0}),x=(0,C.useMemo)(()=>{switch(n){case m.Pointer:return u?{top:u.y,bottom:u.y,left:u.x,right:u.x}:null;case m.DraggableRect:return l}},[n,l,u]),D=(0,C.useRef)(null),E=(0,C.useCallback)(()=>{let e=D.current;if(!e)return;let t=b.current.x*y.current.x,n=b.current.y*y.current.y;e.scrollBy(t,n)},[]),M=(0,C.useMemo)(()=>o===w.TreeOrder?[...s].reverse():s,[o,s]);(0,C.useEffect)(()=>{if(!i||!s.length||!x){v();return}for(let e of M){if((null==r?void 0:r(e))===!1)continue;let n=d[s.indexOf(e)];if(!n)continue;let{direction:l,speed:i}=function(e,t,n,r,l){let{top:i,left:a,right:o,bottom:u}=n;void 0===r&&(r=10),void 0===l&&(l=Z);let{isTop:s,isBottom:d,isLeft:c,isRight:h}=$(e),f={x:0,y:0},g={x:0,y:0},v={height:t.height*l.y,width:t.width*l.x};return!s&&i<=t.top+v.height?(f.y=p.Backward,g.y=r*Math.abs((t.top+v.height-i)/v.height)):!d&&u>=t.bottom-v.height&&(f.y=p.Forward,g.y=r*Math.abs((t.bottom-v.height-u)/v.height)),!h&&o>=t.right-v.width?(f.x=p.Forward,g.x=r*Math.abs((t.right-v.width-o)/v.width)):!c&&a<=t.left+v.width&&(f.x=p.Backward,g.x=r*Math.abs((t.left+v.width-a)/v.width)),{direction:f,speed:g}}(e,n,x,t,h);for(let e of["x","y"])!f[e][l[e]]&&(i[e]=0,l[e]=0);if(i.x>0||i.y>0){v(),D.current=e,g(E,a),b.current=i,y.current=l;return}}b.current={x:0,y:0},y.current={x:0,y:0},v()},[t,E,r,v,i,a,JSON.stringify(x),JSON.stringify(f),g,s,M,d,JSON.stringify(h)])}({...eI,delta:ee,draggingRect:e4,pointerCoordinates:e0,scrollableAncestors:e$,scrollableAncestorRects:eZ});let tl=(0,C.useMemo)(()=>({active:ei,activeNode:eT,activeNodeRect:eU,activatorEvent:es,collisions:e9,containerNodeRect:eK,dragOverlay:eW,draggableNodes:V,droppableContainers:et,droppableRects:ep,over:e6,measureDroppableContainers:ev,scrollableAncestors:e$,scrollableAncestorRects:eZ,measuringConfiguration:eg,measuringScheduled:ex,windowRect:e_}),[ei,eT,eU,es,e9,eK,eW,V,et,ep,e6,ev,e$,eZ,eg,ex,e_]),ti=(0,C.useMemo)(()=>({activatorEvent:es,activators:tr,active:ei,activeNodeRect:eU,ariaDescribedById:{draggable:eh},dispatch:I,draggableNodes:V,over:e6,measureDroppableContainers:ev}),[es,tr,ei,eU,I,eh,V,e6,ev]);return C.createElement(L.Provider,{value:z},C.createElement(eA.Provider,{value:ti},C.createElement(ej.Provider,{value:tl},C.createElement(eF.Provider,{value:te},b)),C.createElement(eP,{disabled:(null==f?void 0:f.restoreFocus)===!1})),C.createElement(T,{...f,hiddenTextDescribedById:eh}))}),eU=(0,C.createContext)(null),eK="button";function eH(e){var t,n;let{id:r,data:l,disabled:i=!1,attributes:a}=e,o=(0,R.Ld)("Droppable"),{activators:u,activatorEvent:s,active:d,activeNodeRect:c,ariaDescribedById:h,draggableNodes:f,over:g}=(0,C.useContext)(eA),{role:p=eK,roleDescription:v="draggable",tabIndex:b=0}=null!=a?a:{},y=(null==d?void 0:d.id)===r,m=(0,C.useContext)(y?eF:eU),[w,x]=(0,R.wm)(),[D,E]=(0,R.wm)();let M=(t=u,n=r,(0,C.useMemo)(()=>t.reduce((e,t)=>{let{eventName:r,handler:l}=t;return e[r]=e=>{l(e,n)},e},{}),[t,n])),S=(0,R.Ey)(l);return(0,R.LI)(()=>(f.set(r,{id:r,key:o,node:w,activatorNode:D,data:S}),()=>{let e=f.get(r);e&&e.key===o&&f.delete(r)}),[f,r]),{active:d,activatorEvent:s,activeNodeRect:c,attributes:(0,C.useMemo)(()=>({role:p,tabIndex:b,"aria-disabled":i,"aria-pressed":!!y&&p===eK||void 0,"aria-roledescription":v,"aria-describedby":h.draggable}),[i,p,b,y,v,h.draggable]),isDragging:y,listeners:i?void 0:M,node:w,over:g,setNodeRef:x,setActivatorNodeRef:E,transform:m}}function eX(){return(0,C.useContext)(ej)}let eW={timeout:25};function eq(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:l}=e,i=(0,R.Ld)("Droppable"),{active:a,dispatch:o,over:u,measureDroppableContainers:s}=(0,C.useContext)(eA),d=(0,C.useRef)({disabled:n}),c=(0,C.useRef)(!1),h=(0,C.useRef)(null),f=(0,C.useRef)(null),{disabled:p,updateMeasurementsFor:v,timeout:b}={...eW,...l},y=(0,R.Ey)(null!=v?v:r),m=ew({callback:(0,C.useCallback)(()=>{if(!c.current){c.current=!0;return}null!=f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{s(Array.isArray(y.current)?y.current:[y.current]),f.current=null},b)},[b]),disabled:p||!a}),w=(0,C.useCallback)((e,t)=>{if(!!m)t&&(m.unobserve(t),c.current=!1),e&&m.observe(e)},[m]),[x,D]=(0,R.wm)(w),E=(0,R.Ey)(t);return(0,C.useEffect)(()=>{if(!!m&&!!x.current)m.disconnect(),c.current=!1,m.observe(x.current)},[x,m]),(0,R.LI)(()=>(o({type:g.RegisterDroppable,element:{id:r,key:i,disabled:n,node:x,rect:h,data:E}}),()=>o({type:g.UnregisterDroppable,key:i,id:r})),[r]),(0,C.useEffect)(()=>{n!==d.current.disabled&&(o({type:g.SetDroppableDisabled,id:r,key:i,disabled:n}),d.current.disabled=n)},[r,i,n,o]),{active:a,rect:h,isOver:(null==u?void 0:u.id)===r,node:x,over:u,setNodeRef:D}}let eY={duration:250,easing:"ease",keyframes:e=>{let{transform:{initial:t,final:n}}=e;return[{transform:R.ux.Transform.toString(t)},{transform:R.ux.Transform.toString(n)}]},sideEffects:(r={styles:{active:{opacity:"0"}}},e=>{let{active:t,dragOverlay:n}=e,l={},{styles:i,className:a}=r;if(null!=i&&i.active)for(let[e,n]of Object.entries(i.active)){if(void 0!==n)l[e]=t.node.style.getPropertyValue(e),t.node.style.setProperty(e,n)}if(null!=i&&i.dragOverlay)for(let[e,t]of Object.entries(i.dragOverlay)){if(void 0!==t)n.node.style.setProperty(e,t)}return null!=a&&a.active&&t.node.classList.add(a.active),null!=a&&a.dragOverlay&&n.node.classList.add(a.dragOverlay),function(){for(let[e,n]of Object.entries(l))t.node.style.setProperty(e,n);null!=a&&a.active&&t.node.classList.remove(a.active)}})},eV=0}}]);