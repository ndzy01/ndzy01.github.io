"use strict";(self.webpackChunkndzy=self.webpackChunkndzy||[]).push([["1177"],{73097:function(e,t,n){n.d(t,{Z:()=>k});var r=n("16019"),u=n("67294"),o=n("50344");n("80334");var i=n("50324"),f=n("58133"),c=n("34203"),a=n("42550"),l=u.createContext(null),s=n("91033"),h=new Map,d=new s.Z(function(e){e.forEach(function(e){var t,n=e.target;null===(t=h.get(n))||void 0===t||t.forEach(function(e){return e(n)})})}),v=n("46932"),g=n("89526"),p=n("26238"),Z=n("48716"),m=function(e){(0,p.Z)(n,e);var t=(0,Z.Z)(n);function n(){return(0,v.Z)(this,n),t.apply(this,arguments)}return(0,g.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(u.Component),w=u.forwardRef(function(e,t){var n=e.children,r=e.disabled,o=u.useRef(null),s=u.useRef(null),v=u.useContext(l),g="function"==typeof n,p=g?n(o):n,Z=u.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),w=!g&&u.isValidElement(p)&&(0,a.Yr)(p),R=w?p.ref:null,k=(0,a.x1)(R,o),C=function(){var e;return(0,c.ZP)(o.current)||(o.current&&"object"===(0,f.Z)(o.current)?(0,c.ZP)(null===(e=o.current)||void 0===e?void 0:e.nativeElement):null)||(0,c.ZP)(s.current)};u.useImperativeHandle(t,function(){return C()});var b=u.useRef(e);b.current=e;var y=u.useCallback(function(e){var t=b.current,n=t.onResize,r=t.data,u=e.getBoundingClientRect(),o=u.width,f=u.height,c=e.offsetWidth,a=e.offsetHeight,l=Math.floor(o),s=Math.floor(f);if(Z.current.width!==l||Z.current.height!==s||Z.current.offsetWidth!==c||Z.current.offsetHeight!==a){var h={width:l,height:s,offsetWidth:c,offsetHeight:a};Z.current=h;var d=c===Math.round(o)?o:c,g=a===Math.round(f)?f:a,p=(0,i.Z)((0,i.Z)({},h),{},{offsetWidth:d,offsetHeight:g});null==v||v(p,e,r),n&&Promise.resolve().then(function(){n(p,e)})}},[]);return u.useEffect(function(){var e,t,n=C();if(n&&!r){;e=n,t=y,h.has(e)||(h.set(e,new Set),d.observe(e)),h.get(e).add(t)}return function(){var e,t;return e=n,t=y,void(h.has(e)&&(h.get(e).delete(t),!h.get(e).size&&(d.unobserve(e),h.delete(e))))}},[o.current,r]),u.createElement(m,{ref:s},w?u.cloneElement(p,{ref:k}):p)}),R=u.forwardRef(function(e,t){var n=e.children,i="function"==typeof n?[n]:(0,o.Z)(n);return i.map(function(n,o){var i=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(o);return u.createElement(w,(0,r.Z)({},e,{key:i,ref:0===o?t:void 0}),n)})});R.Collection=function(e){var t=e.children,n=e.onBatchResize,r=u.useRef(0),o=u.useRef([]),i=u.useContext(l),f=u.useCallback(function(e,t,u){r.current+=1;var f=r.current;o.current.push({size:e,element:t,data:u}),Promise.resolve().then(function(){f===r.current&&(null==n||n(o.current),o.current=[])}),null==i||i(e,t,u)},[n,i]);return u.createElement(l.Provider,{value:f},t)};let k=R}}]);