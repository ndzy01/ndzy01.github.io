"use strict";(self.webpackChunkndzy=self.webpackChunkndzy||[]).push([["6383"],{31171:function(e,t,r){var n,i;r.d(t,{FE:function(){return F},Jq:function(){return a},L3:function(){return s},Lj:function(){return p},_b:function(){return O},hr:function(){return T},i9:function(){return P},md:function(){return l},mp:function(){return g},vj:function(){return n}});let s=1024,o=0;class h{constructor(e,t){this.from=e,this.to=t}}class l{constructor(e={}){this.id=o++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error("This node type doesn't define a deserialize function")})}add(e){if(this.perNode)throw RangeError("Can't add per-node props to node types");return"function"!=typeof e&&(e=a.match(e)),t=>{let r=e(t);return void 0===r?null:[this,r]}}}l.closedBy=new l({deserialize:e=>e.split(" ")}),l.openedBy=new l({deserialize:e=>e.split(" ")}),l.group=new l({deserialize:e=>e.split(" ")}),l.isolate=new l({deserialize:e=>{if(e&&"rtl"!=e&&"ltr"!=e&&"auto"!=e)throw RangeError("Invalid value for isolate: "+e);return e||"auto"}}),l.contextHash=new l({perNode:!0}),l.lookAhead=new l({perNode:!0}),l.mounted=new l({perNode:!0});class f{constructor(e,t,r){this.tree=e,this.overlay=t,this.parser=r}static get(e){return e&&e.props&&e.props[l.mounted.id]}}let u=Object.create(null);class a{constructor(e,t,r,n=0){this.name=e,this.props=t,this.id=r,this.flags=n}static define(e){let t=e.props&&e.props.length?Object.create(null):u,r=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(null==e.name?8:0),n=new a(e.name||"",t,e.id,r);if(e.props){for(let r of e.props)if(!Array.isArray(r)&&(r=r(n)),r){if(r[0].perNode)throw RangeError("Can't store a per-node prop on a node type");t[r[0].id]=r[1]}}return n}prop(e){return this.props[e.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(e){if("string"==typeof e){if(this.name==e)return!0;let t=this.prop(l.group);return!!t&&t.indexOf(e)>-1}return this.id==e}static match(e){let t=Object.create(null);for(let r in e)for(let n of r.split(" "))t[n]=e[r];return e=>{for(let r=e.prop(l.group),n=-1;n<(r?r.length:0);n++){let i=t[n<0?e.name:r[n]];if(i)return i}}}}a.none=new a("",Object.create(null),0,8);class p{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...e){let t=[];for(let r of this.types){let n=null;for(let t of e){let e=t(r);e&&(!n&&(n=Object.assign({},r.props)),n[e[0].id]=e[1])}t.push(n?new a(r.name,n,r.id,r.flags):r)}return new p(t)}}let d=new WeakMap,c=new WeakMap;(i=n||(n={}))[i.ExcludeBuffers=1]="ExcludeBuffers",i[i.IncludeAnonymous=2]="IncludeAnonymous",i[i.IgnoreMounts=4]="IgnoreMounts",i[i.IgnoreOverlays=8]="IgnoreOverlays";class g{constructor(e,t,r,n,i){if(this.type=e,this.children=t,this.positions=r,this.length=n,this.props=null,i&&i.length)for(let[e,t]of(this.props=Object.create(null),i))this.props["number"==typeof e?e:e.id]=t}toString(){let e=f.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let e of this.children){let r=e.toString();r&&(t&&(t+=","),t+=r)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new N(this.topNode,e)}cursorAt(e,t=0,r=0){let n=new N(d.get(this)||this.topNode);return n.moveTo(e,t),d.set(this,n._tree),n}get topNode(){return new v(this,0,0,null)}resolve(e,t=0){let r=b(d.get(this)||this.topNode,e,t,!1);return d.set(this,r),r}resolveInner(e,t=0){let r=b(c.get(this)||this.topNode,e,t,!0);return c.set(this,r),r}resolveStack(e,t=0){return function(e,t,r){let n=e.resolveInner(t,r),i=null;for(let e=n instanceof v?n:n.context.parent;e;e=e.parent)if(e.index<0){let s=e.parent;(i||(i=[n])).push(s.resolve(t,r)),e=s}else{let s=f.get(e.tree);if(s&&s.overlay&&s.overlay[0].from<=t&&s.overlay[s.overlay.length-1].to>=t){let o=new v(s.tree,s.overlay[0].from+e.from,-1,e);(i||(i=[n])).push(b(o,t,r,!1))}}return i?S(i):n}(this,e,t)}iterate(e){let{enter:t,leave:r,from:i=0,to:s=this.length}=e,o=e.mode||0,h=(o&n.IncludeAnonymous)>0;for(let e=this.cursor(o|n.IncludeAnonymous);;){let n=!1;if(e.from<=s&&e.to>=i&&(!h&&e.type.isAnonymous||!1!==t(e))){if(e.firstChild())continue;n=!0}for(;n&&r&&(h||!e.type.isAnonymous)&&r(e),!e.nextSibling();){;if(!e.parent())return;n=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:E(a.none,this.children,this.positions,0,this.children.length,0,this.length,(e,t,r)=>new g(this.type,e,t,r,this.propValues),e.makeTree||((e,t,r)=>new g(a.none,e,t,r)))}static build(e){return function(e){var t;let{buffer:r,nodeSet:n,maxBufferLength:i=s,reused:o=[],minRepeatType:h=n.types.length}=e,f=Array.isArray(r)?new m(r,r.length):r,u=n.types,a=0,p=0;function d(e,t,r,i,s,o,h,l,f){let u=[],a=[];for(;e.length>i;)u.push(e.pop()),a.push(t.pop()+r-s);e.push(c(n.types[h],u,a,o-s,l-o,f)),t.push(s-r)}function c(e,t,r,n,i,s,o){if(s){let e=[l.contextHash,s];o=o?[e].concat(o):[e]}if(i>25){let e=[l.lookAhead,i];o=o?[e].concat(o):[e]}return new g(e,t,r,n,o)}let y=[],b=[];for(;f.pos>0;)!function e(t,r,s,m,y,b){let{id:w,start:v,end:_,size:A}=f,k=p,C=a;for(;A<0;){if(f.next(),-1==A){let e=o[w];s.push(e),m.push(v-t);return}if(-3==A){a=w;return}else if(-4==A){p=w;return}else throw RangeError(`Unrecognized record size: ${A}`)}let S=u[w],I,N,B=v-t;if(_-v<=i&&(N=function(e,t){let r=f.fork(),n=0,s=0,o=0,l=r.end-i,u={size:0,start:0,skip:0};e:for(let i=r.pos-e;r.pos>i;){let e=r.size;if(r.id==t&&e>=0){u.size=n,u.start=s,u.skip=o,o+=4,n+=4,r.next();continue}let f=r.pos-e;if(e<0||f<i||r.start<l)break;let a=r.id>=h?4:0,p=r.start;for(r.next();r.pos>f;){if(r.size<0){if(-3==r.size)a+=4;else break e}else r.id>=h&&(a+=4);r.next()}s=p,n+=e,o+=a}return(t<0||n==e)&&(u.size=n,u.start=s,u.skip=o),u.size>4?u:void 0}(f.pos-r,y))){let e=new Uint16Array(N.size-N.skip),r=f.pos-N.size,i=e.length;for(;f.pos>r;)i=function e(t,r,n){let{id:i,start:s,end:o,size:l}=f;if(f.next(),l>=0&&i<h){let h=n;if(l>4){let i=f.pos-(l-4);for(;f.pos>i;)n=e(t,r,n)}r[--n]=h,r[--n]=o-t,r[--n]=s-t,r[--n]=i}else -3==l?a=i:-4==l&&(p=i);return n}(N.start,e,i);I=new x(e,_-N.start,n),B=N.start-t}else{let t=f.pos-A;f.next();let r=[],s=[],o=w>=h?w:-1,u=0,a=_;for(;f.pos>t;)o>=0&&f.id==o&&f.size>=0?(f.end<=a-i&&(d(r,s,v,u,f.end,a,o,k,C),u=r.length,a=f.end),f.next()):b>2500?function(e,t,r,s){let o=[],h=0,l=-1;for(;f.pos>t;){let{id:e,start:t,end:r,size:n}=f;if(n>4)f.next();else if(l>-1&&t<l)break;else l<0&&(l=r-i),o.push(e,t,r),h++,f.next()}if(h){let t=new Uint16Array(4*h),i=o[o.length-2];for(let e=o.length-3,r=0;e>=0;e-=3)t[r++]=o[e],t[r++]=o[e+1]-i,t[r++]=o[e+2]-i,t[r++]=r;r.push(new x(t,o[2]-i,n)),s.push(i-e)}}(v,t,r,s):e(v,t,r,s,o,b+1);if(o>=0&&u>0&&u<r.length&&d(r,s,v,u,v,a,o,k,C),r.reverse(),s.reverse(),o>-1&&u>0){let e=function(e,t){return(r,n,i)=>{let s=0,o=r.length-1,h,f;if(o>=0&&(h=r[o])instanceof g){if(!o&&h.type==e&&h.length==i)return h;(f=h.prop(l.lookAhead))&&(s=n[o]+h.length+f)}return c(e,r,n,i,s,t)}}(S,C);I=E(S,r,s,0,r.length,0,_-v,e,e)}else I=c(S,r,s,_-v,k-_,C)}s.push(I),m.push(B)}(e.start||0,e.bufferStart||0,y,b,-1,0);let w=null!==(t=e.length)&&void 0!==t?t:y.length?b[0]+y[0].length:0;return new g(u[e.topID],y.reverse(),b.reverse(),w)}(e)}}g.empty=new g(a.none,[],[],0);class m{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new m(this.buffer,this.index)}}class x{constructor(e,t,r){this.buffer=e,this.length=t,this.set=r}get type(){return a.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],r=this.buffer[e+3],n=this.set.types[t],i=n.name;if(/\W/.test(i)&&!n.isError&&(i=JSON.stringify(i)),r==(e+=4))return i;let s=[];for(;e<r;)s.push(this.childString(e)),e=this.buffer[e+3];return i+"("+s.join(",")+")"}findChild(e,t,r,n,i){let{buffer:s}=this,o=-1;for(let h=e;h!=t&&(!y(i,n,s[h+1],s[h+2])||(o=h,!(r>0)));h=s[h+3]);return o}slice(e,t,r){let n=this.buffer,i=new Uint16Array(t-e),s=0;for(let o=e,h=0;o<t;){i[h++]=n[o++],i[h++]=n[o++]-r;let t=i[h++]=n[o++]-r;i[h++]=n[o++]-e,s=Math.max(s,t)}return new x(i,s,this.set)}}function y(e,t,r,n){switch(e){case -2:return r<t;case -1:return n>=t&&r<t;case 0:return r<t&&n>t;case 1:return r<=t&&n>t;case 2:return n>t;case 4:return!0}}function b(e,t,r,i){for(var s;e.from==e.to||(r<1?e.from>=t:e.from>t)||(r>-1?e.to<=t:e.to<t);){let t=!i&&e instanceof v&&e.index<0?null:e.parent;if(!t)return e;e=t}let o=i?0:n.IgnoreOverlays;if(i)for(let n=e,i=n.parent;i;i=(n=i).parent)n instanceof v&&n.index<0&&(null===(s=i.enter(t,r,o))||void 0===s?void 0:s.from)!=n.from&&(e=i);for(;;){let n=e.enter(t,r,o);if(!n)return e;e=n}}class w{cursor(e=0){return new N(this,e)}getChild(e,t=null,r=null){let n=_(this,e,t,r);return n.length?n[0]:null}getChildren(e,t=null,r=null){return _(this,e,t,r)}resolve(e,t=0){return b(this,e,t,!1)}resolveInner(e,t=0){return b(this,e,t,!0)}matchContext(e){return A(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),r=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(r=t,t=e.prevSibling):t=e}return r}get node(){return this}get next(){return this.parent}}class v extends w{constructor(e,t,r,n){super(),this._tree=e,this.from=t,this.index=r,this._parent=n}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,r,i,s=0){for(let o=this;;){for(let{children:h,positions:l}=o._tree,u=t>0?h.length:-1;e!=u;e+=t){let u=h[e],a=l[e]+o.from;if(y(i,r,a,a+u.length)){if(u instanceof x){if(s&n.ExcludeBuffers)continue;let h=u.findChild(0,u.buffer.length,t,r-a,i);if(h>-1)return new C(new k(o,u,e,a),null,h)}else if(s&n.IncludeAnonymous||!u.type.isAnonymous||B(u)){let h;if(!(s&n.IgnoreMounts)&&(h=f.get(u))&&!h.overlay)return new v(h.tree,a,e,o);let l=new v(u,a,e,o);return s&n.IncludeAnonymous||!l.type.isAnonymous?l:l.nextChild(t<0?u.children.length-1:0,t,r,i)}}}if(s&n.IncludeAnonymous||!o.type.isAnonymous)return null;if(e=o.index>=0?o.index+t:t<0?-1:o._parent._tree.children.length,!(o=o._parent))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}enter(e,t,r=0){let i;if(!(r&n.IgnoreOverlays)&&(i=f.get(this._tree))&&i.overlay){let r=e-this.from;for(let{from:e,to:n}of i.overlay)if((t>0?e<=r:e<r)&&(t<0?n>=r:n>r))return new v(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function _(e,t,r,n){let i=e.cursor(),s=[];if(!i.firstChild())return s;if(null!=r){for(let e=!1;!e;)if(e=i.type.is(r),!i.nextSibling())return s}for(;;){if(null!=n&&i.type.is(n))return s;if(i.type.is(t)&&s.push(i.node),!i.nextSibling())return null==n?s:[]}}function A(e,t,r=t.length-1){for(let n=e;r>=0;n=n.parent){if(!n)return!1;if(!n.type.isAnonymous){if(t[r]&&t[r]!=n.name)return!1;r--}}return!0}class k{constructor(e,t,r,n){this.parent=e,this.buffer=t,this.index=r,this.start=n}}class C extends w{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,r){super(),this.context=e,this._parent=t,this.index=r,this.type=e.buffer.set.types[e.buffer.buffer[r]]}child(e,t,r){let{buffer:n}=this.context,i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.context.start,r);return i<0?null:new C(this.context,this,i)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}enter(e,t,r=0){if(r&n.ExcludeBuffers)return null;let{buffer:i}=this.context,s=i.findChild(this.index+4,i.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return s<0?null:new C(this.context,this,s)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new C(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new C(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:r}=this.context,n=this.index+4,i=r.buffer[this.index+3];if(i>n){let s=r.buffer[this.index+1];e.push(r.slice(n,i,s)),t.push(0)}return new g(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function S(e){if(!e.length)return null;let t=0,r=e[0];for(let n=1;n<e.length;n++){let i=e[n];(i.from>r.from||i.to<r.to)&&(r=i,t=n)}let n=r instanceof v&&r.index<0?null:r.parent,i=e.slice();return n?i[t]=n:i.splice(t,1),new I(i,r)}class I{constructor(e,t){this.heads=e,this.node=t}get next(){return S(this.heads)}}class N{get name(){return this.type.name}constructor(e,t=0){if(this.mode=t,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof v)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return!!e&&(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0)}yieldBuf(e,t){this.index=e;let{start:r,buffer:n}=this.buffer;return this.type=t||n.set.types[n.buffer[e]],this.from=r+n.buffer[e+1],this.to=r+n.buffer[e+2],!0}yield(e){return!!e&&(e instanceof v?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)))}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,r){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,r,this.mode));let{buffer:n}=this.buffer,i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.buffer.start,r);return!(i<0)&&(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,r=this.mode){return this.buffer?!(r&n.ExcludeBuffers)&&this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,r))}parent(){if(!this.buffer)return this.yieldNode(this.mode&n.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&n.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode));let{buffer:t}=this.buffer,r=this.stack.length-1;if(e<0){let e=r<0?0:this.stack[r]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(r<0?t.buffer.length:t.buffer[this.stack[r]+3]))return this.yieldBuf(e)}return r<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,r,{buffer:i}=this;if(i){if(e>0){if(this.index<i.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(i.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:r}=i)}else({index:t,_parent:r}=this._tree);for(;r;{index:t,_parent:r}=r)if(t>-1)for(let i=t+e,s=e<0?-1:r._tree.children.length;i!=s;i+=e){let e=r._tree.children[i];if(this.mode&n.IncludeAnonymous||e instanceof x||!e.type.isAnonymous||B(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,r=0;if(e&&e.context==this.buffer)e:for(let n=this.index,i=this.stack.length;i>=0;){for(let s=e;s;s=s._parent)if(s.index==n){if(n==this.index)return s;t=s,r=i+1;break e}n=this.stack[--i]}for(let e=r;e<this.stack.length;e++)t=new C(this.buffer,t,this.stack[e]);return this.bufferNode=new C(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let r=0;;){let n=!1;if(this.type.isAnonymous||!1!==e(this)){if(this.firstChild()){r++;continue}!this.type.isAnonymous&&(n=!0)}for(;n&&t&&t(this),n=this.type.isAnonymous,!this.nextSibling();){;if(!r)return;this.parent(),r--,n=!0}}}matchContext(e){if(!this.buffer)return A(this.node.parent,e);let{buffer:t}=this.buffer,{types:r}=t.set;for(let n=e.length-1,i=this.stack.length-1;n>=0;i--){if(i<0)return A(this._tree,e,n);let s=r[t.buffer[this.stack[i]]];if(!s.isAnonymous){if(e[n]&&e[n]!=s.name)return!1;n--}}return!0}}function B(e){return e.children.some(e=>e instanceof x||!e.type.isAnonymous||B(e))}let z=new WeakMap;function M(e,t){if(!e.isAnonymous||t instanceof x||t.type!=e)return 1;let r=z.get(t);if(null==r){for(let n of(r=1,t.children)){if(n.type!=e||!(n instanceof g)){r=1;break}r+=M(e,n)}z.set(t,r)}return r}function E(e,t,r,n,i,s,o,h,l){let f=0;for(let r=n;r<i;r++)f+=M(e,t[r]);let u=Math.ceil(1.5*f/8),a=[],p=[];return!function t(r,n,i,o,h){for(let f=i;f<o;){let i=f,d=n[f],c=M(e,r[f]);for(f++;f<o;f++){let t=M(e,r[f]);if(c+t>=u)break;c+=t}if(f==i+1){if(c>u){let e=r[i];t(e.children,e.positions,0,e.children.length,n[i]+h);continue}a.push(r[i])}else{let t=n[f-1]+r[f-1].length-d;a.push(E(e,r,n,i,f,d,t,null,l))}p.push(d+h-s)}}(t,r,n,i,0),(h||l)(a,p,o)}class T{constructor(){this.map=new WeakMap}setBuffer(e,t,r){let n=this.map.get(e);!n&&this.map.set(e,n=new Map),n.set(t,r)}getBuffer(e,t){let r=this.map.get(e);return r&&r.get(t)}set(e,t){e instanceof C?this.setBuffer(e.context.buffer,e.index,t):e instanceof v&&this.map.set(e.tree,t)}get(e){return e instanceof C?this.getBuffer(e.context.buffer,e.index):e instanceof v?this.map.get(e.tree):void 0}cursorSet(e,t){e.buffer?this.setBuffer(e.buffer.buffer,e.index,t):this.map.set(e.tree,t)}cursorGet(e){return e.buffer?this.getBuffer(e.buffer.buffer,e.index):this.map.get(e.tree)}}class P{constructor(e,t,r,n,i=!1,s=!1){this.from=e,this.to=t,this.tree=r,this.offset=n,this.open=(i?1:0)|(s?2:0)}get openStart(){return(1&this.open)>0}get openEnd(){return(2&this.open)>0}static addTree(e,t=[],r=!1){let n=[new P(0,e.length,e,0,!1,r)];for(let r of t)r.to>e.length&&n.push(r);return n}static applyChanges(e,t,r=128){if(!t.length)return e;let n=[],i=1,s=e.length?e[0]:null;for(let o=0,h=0,l=0;;o++){let f=o<t.length?t[o]:null,u=f?f.fromA:1e9;if(u-h>=r)for(;s&&s.from<u;){let t=s;if(h>=t.from||u<=t.to||l){let e=Math.max(t.from,h)-l,r=Math.min(t.to,u)-l;t=e>=r?null:new P(e,r,t.tree,t.offset+l,o>0,!!f)}if(t&&n.push(t),s.to>u)break;s=i<e.length?e[i++]:null}if(!f)break;h=f.toA,l=f.toA-f.toB}return n}}class O{startParse(e,t,r){return"string"==typeof e&&(e=new j(e)),r=r?r.length?r.map(e=>new h(e.from,e.to)):[new h(0,0)]:[new h(0,e.length)],this.createParse(e,t||[],r)}parse(e,t,r){let n=this.startParse(e,t,r);for(;;){let e=n.advance();if(e)return e}}}class j{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}}function F(e){return(t,r,n,i)=>new J(t,e,r,n,i)}class D{constructor(e,t,r,n,i){this.parser=e,this.parse=t,this.overlay=r,this.target=n,this.from=i}}function R(e){if(!e.length||e.some(e=>e.from>=e.to))throw RangeError("Invalid inner parse ranges given: "+JSON.stringify(e))}class W{constructor(e,t,r,n,i,s,o){this.parser=e,this.predicate=t,this.mounts=r,this.index=n,this.start=i,this.target=s,this.prev=o,this.depth=0,this.ranges=[]}}let U=new l({perNode:!0});class J{constructor(e,t,r,n,i){this.nest=t,this.input=r,this.fragments=n,this.ranges=i,this.inner=[],this.innerDone=0,this.baseTree=null,this.stoppedAt=null,this.baseParse=e}advance(){if(this.baseParse){let e=this.baseParse.advance();if(!e)return null;if(this.baseParse=null,this.baseTree=e,this.startInner(),null!=this.stoppedAt)for(let e of this.inner)e.parse.stopAt(this.stoppedAt)}if(this.innerDone==this.inner.length){let e=this.baseTree;return null!=this.stoppedAt&&(e=new g(e.type,e.children,e.positions,e.length,e.propValues.concat([[U,this.stoppedAt]]))),e}let e=this.inner[this.innerDone],t=e.parse.advance();if(t){this.innerDone++;let r=Object.assign(Object.create(null),e.target.props);r[l.mounted.id]=new f(t,e.overlay,e.parser),e.target.props=r}return null}get parsedPos(){if(this.baseParse)return 0;let e=this.input.length;for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].from<e&&(e=Math.min(e,this.inner[t].parse.parsedPos));return e}stopAt(e){if(this.stoppedAt=e,this.baseParse)this.baseParse.stopAt(e);else for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].parse.stopAt(e)}startInner(){let e=new H(this.fragments),t=null,r=null,i=new N(new v(this.baseTree,this.ranges[0].from,0,null),n.IncludeAnonymous|n.IgnoreMounts);e:for(let n,s;;){let o=!0,l;if(null!=this.stoppedAt&&i.from>=this.stoppedAt)o=!1;else if(e.hasNode(i)){if(t){let e=t.mounts.find(e=>e.frag.from<=i.from&&e.frag.to>=i.to&&e.mount.overlay);if(e)for(let r of e.mount.overlay){let n=r.from+e.pos,s=r.to+e.pos;n>=i.from&&s<=i.to&&!t.ranges.some(e=>e.from<s&&e.to>n)&&t.ranges.push({from:n,to:s})}}o=!1}else if(r&&(s=function(e,t,r){for(let n of e){if(n.from>=r)break;if(n.to>t)return n.from<=t&&n.to>=r?2:1}return 0}(r.ranges,i.from,i.to)))o=2!=s;else if(!i.type.isAnonymous&&(n=this.nest(i,this.input))&&(i.from<i.to||!n.overlay)){!i.tree&&function(e){let{node:t}=e,r=[],n=t.context.buffer;do r.push(e.index),e.parent();while(!e.tree);let i=e.tree,s=i.children.indexOf(n),o=i.children[s],h=o.buffer,l=[s];for(let n of(i.children[s]=function e(n,i,s,f,u,a){let p=r[a],d=[],c=[];L(o,n,p,d,c,f);let m=h[p+1],x=h[p+2];l.push(d.length);let y=a?e(p+4,h[p+3],o.set.types[h[p]],m,x-m,a-1):t.toTree();return d.push(y),c.push(m-f),L(o,h[p+3],i,d,c,f),new g(s,d,c,u)}(0,h.length,a.none,0,o.length,r.length-1),l)){let t=e.tree.children[n],r=e.tree.positions[n];e.yield(new v(t,r+e.from,n,e._tree))}}(i);let s=e.findMounts(i.from,n.parser);if("function"==typeof n.overlay)t=new W(n.parser,n.overlay,s,this.inner.length,i.from,i.tree,t);else{let e=q(this.ranges,n.overlay||(i.from<i.to?[new h(i.from,i.to)]:[]));e.length&&R(e),(e.length||!n.overlay)&&this.inner.push(new D(n.parser,e.length?n.parser.startParse(this.input,G(s,e),e):n.parser.startParse(""),n.overlay?n.overlay.map(e=>new h(e.from-i.from,e.to-i.from)):null,i.tree,e.length?e[0].from:i.from)),n.overlay?e.length&&(r={ranges:e,depth:0,prev:r}):o=!1}}else if(t&&(l=t.predicate(i))&&(!0===l&&(l=new h(i.from,i.to)),l.from<l.to)){let e=t.ranges.length-1;e>=0&&t.ranges[e].to==l.from?t.ranges[e]={from:t.ranges[e].from,to:l.to}:t.ranges.push(l)}if(o&&i.firstChild())t&&t.depth++,r&&r.depth++;else for(;!i.nextSibling();){if(!i.parent())break e;if(t&&!--t.depth){let e=q(this.ranges,t.ranges);e.length&&(R(e),this.inner.splice(t.index,0,new D(t.parser,t.parser.startParse(this.input,G(t.mounts,e),e),t.ranges.map(e=>new h(e.from-t.start,e.to-t.start)),t.target,e[0].from))),t=t.prev}r&&!--r.depth&&(r=r.prev)}}}}function L(e,t,r,n,i,s){if(t<r){let o=e.buffer[t+1];n.push(e.slice(t,r,o)),i.push(o-s)}}class V{constructor(e,t){this.offset=t,this.done=!1,this.cursor=e.cursor(n.IncludeAnonymous|n.IgnoreMounts)}moveTo(e){let{cursor:t}=this,r=e-this.offset;for(;!this.done&&t.from<r;)t.to>=e&&t.enter(r,1,n.IgnoreOverlays|n.ExcludeBuffers)||!t.next(!1)&&(this.done=!0)}hasNode(e){if(this.moveTo(e.from),!this.done&&this.cursor.from+this.offset==e.from&&this.cursor.tree)for(let t=this.cursor.tree;;){if(t==e.tree)return!0;if(t.children.length&&0==t.positions[0]&&t.children[0]instanceof g)t=t.children[0];else break}return!1}}class H{constructor(e){var t;if(this.fragments=e,this.curTo=0,this.fragI=0,e.length){let r=this.curFrag=e[0];this.curTo=null!==(t=r.tree.prop(U))&&void 0!==t?t:r.to,this.inner=new V(r.tree,-r.offset)}else this.curFrag=this.inner=null}hasNode(e){for(;this.curFrag&&e.from>=this.curTo;)this.nextFrag();return this.curFrag&&this.curFrag.from<=e.from&&this.curTo>=e.to&&this.inner.hasNode(e)}nextFrag(){var e;if(this.fragI++,this.fragI==this.fragments.length)this.curFrag=this.inner=null;else{let t=this.curFrag=this.fragments[this.fragI];this.curTo=null!==(e=t.tree.prop(U))&&void 0!==e?e:t.to,this.inner=new V(t.tree,-t.offset)}}findMounts(e,t){var r;let n=[];if(this.inner){this.inner.cursor.moveTo(e,1);for(let e=this.inner.cursor.node;e;e=e.parent){let i=null===(r=e.tree)||void 0===r?void 0:r.prop(l.mounted);if(i&&i.parser==t)for(let t=this.fragI;t<this.fragments.length;t++){let r=this.fragments[t];if(r.from>=e.to)break;r.tree==this.curFrag.tree&&n.push({frag:r,pos:e.from-r.offset,mount:i})}}}return n}}function q(e,t){let r=null,n=t;for(let i=1,s=0;i<e.length;i++){let o=e[i-1].to,l=e[i].from;for(;s<n.length;s++){let e=n[s];if(e.from>=l)break;!(e.to<=o)&&(!r&&(n=r=t.slice()),e.from<o?(r[s]=new h(e.from,o),e.to>l&&r.splice(s+1,0,new h(l,e.to))):e.to>l?r[s--]=new h(l,e.to):r.splice(s--,1))}}return n}function G(e,t){let r=[];for(let{pos:n,mount:i,frag:s}of e){let e=n+(i.overlay?i.overlay[0].from:0),o=e+i.tree.length,l=Math.max(s.from,e),f=Math.min(s.to,o);if(i.overlay){let o=function(e,t,r,n){let i=0,s=0,o=!1,l=!1,f=-1e9,u=[];for(;;){let a=i==e.length?1e9:o?e[i].to:e[i].from,p=s==t.length?1e9:l?t[s].to:t[s].from;if(o!=l){let e=Math.max(f,r),t=Math.min(a,p,n);e<t&&u.push(new h(e,t))}if(1e9==(f=Math.min(a,p)))break;a==f&&(o?(o=!1,i++):o=!0),p==f&&(l?(l=!1,s++):l=!0)}return u}(t,i.overlay.map(e=>new h(e.from+n,e.to+n)),l,f);for(let t=0,n=l;;t++){let h=t==o.length,l=h?f:o[t].from;if(l>n&&r.push(new P(n,l,i.tree,-e,s.from>=n||s.openStart,s.to<=l||s.openEnd)),h)break;n=o[t].to}}else r.push(new P(l,f,i.tree,-e,s.from>=e||s.openStart,s.to<=o||s.openEnd))}return r}}}]);