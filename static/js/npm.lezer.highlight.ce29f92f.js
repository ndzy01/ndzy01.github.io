"use strict";(self.webpackChunkndzy=self.webpackChunkndzy||[]).push([["9125"],{6644:function(t,e,a){a.d(e,{Gv:function(){return l},QR:function(){return f},Vp:function(){return n},bW:function(){return g},pJ:function(){return A}});var i=a(1171);let r=0;class n{constructor(t,e,a,i){this.name=t,this.set=e,this.base=a,this.modified=i,this.id=r++}toString(){let{name:t}=this;for(let e of this.modified)e.name&&(t=`${e.name}(${t})`);return t}static define(t,e){if(t instanceof n&&(e=t),null==e?void 0:e.base)throw Error("Can not derive from a modified tag");let a=new n("string"==typeof t?t:"?",[],null,[]);if(a.set.push(a),e)for(let t of e.set)a.set.push(t);return a}static defineModifier(t){let e=new s(t);return t=>t.modified.indexOf(e)>-1?t:s.get(t.base||t,t.modified.concat(e).sort((t,e)=>t.id-e.id))}}let o=0;class s{constructor(t){this.name=t,this.instances=[],this.id=o++}static get(t,e){if(!e.length)return t;let a=e[0].instances.find(a=>a.base==t&&function(t,e){return t.length==e.length&&t.every((t,a)=>t==e[a])}(e,a.modified));if(a)return a;let i=[],r=new n(t.name,i,t,e);for(let t of e)t.instances.push(r);let o=function(t){let e=[[]];for(let a=0;a<t.length;a++)for(let i=0,r=e.length;i<r;i++)e.push(e[i].concat(t[a]));return e.sort((t,e)=>e.length-t.length)}(e);for(let e of t.set)if(!e.modified.length)for(let t of o)i.push(s.get(e,t));return r}}function l(t){let e=Object.create(null);for(let a in t){let i=t[a];for(let t of(!Array.isArray(i)&&(i=[i]),a.split(" ")))if(t){let a=[],r=2,n=t;for(let e=0;;){if("..."==n&&e>0&&e+3==t.length){r=1;break}let i=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(n);if(!i)throw RangeError("Invalid path: "+t);if(a.push("*"==i[0]?"":'"'==i[0][0]?JSON.parse(i[0]):i[0]),(e+=i[0].length)==t.length)break;let o=t[e++];if(e==t.length&&"!"==o){r=0;break}if("/"!=o)throw RangeError("Invalid path: "+t);n=t.slice(e)}let o=a.length-1,s=a[o];if(!s)throw RangeError("Invalid path: "+t);let l=new h(i,r,o>0?a.slice(0,o):null);e[s]=l.sort(e[s])}}return c.add(e)}let c=new i.md;class h{constructor(t,e,a,i){this.tags=t,this.mode=e,this.context=a,this.next=i}get opaque(){return 0==this.mode}get inherit(){return 1==this.mode}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}}function f(t,e){let a=Object.create(null);for(let e of t)if(Array.isArray(e.tag))for(let t of e.tag)a[t.id]=e.class;else a[e.tag.id]=e.class;let{scope:i,all:r=null}=e||{};return{style:t=>{let e=r;for(let i of t)for(let t of i.set){let i=a[t.id];if(i){e=e?e+" "+i:i;break}}return e},scope:i}}h.empty=new h([],2,null);function g(t,e,a,i=0,r=t.length){let n=new d(i,Array.isArray(e)?e:[e],a);n.highlightRange(t.cursor(),i,r,"",n.highlighters),n.flush(r)}class d{constructor(t,e,a){this.at=t,this.highlighters=e,this.span=a,this.class=""}startSpan(t,e){e!=this.class&&(this.flush(t),t>this.at&&(this.at=t),this.class=e)}flush(t){t>this.at&&this.class&&this.span(this.at,t,this.class)}highlightRange(t,e,a,r,n){let{type:o,from:s,to:l}=t;if(s>=a||l<=e)return;o.isTop&&(n=this.highlighters.filter(t=>!t.scope||t.scope(o)));let f=r,g=function(t){let e=t.type.prop(c);for(;e&&e.context&&!t.matchContext(e.context);)e=e.next;return e||null}(t)||h.empty,d=function(t,e){let a=null;for(let i of t){let t=i.style(e);t&&(a=a?a+" "+t:t)}return a}(n,g.tags);if(d&&(f&&(f+=" "),f+=d,1==g.mode&&(r+=(r?" ":"")+d)),this.startSpan(Math.max(e,s),f),g.opaque)return;let m=t.tree&&t.tree.prop(i.md.mounted);if(m&&m.overlay){let i=t.node.enter(m.overlay[0].from+s,1),o=this.highlighters.filter(t=>!t.scope||t.scope(m.tree.type)),c=t.firstChild();for(let h=0,g=s;;h++){let d=h<m.overlay.length?m.overlay[h]:null,p=d?d.from+s:l,u=Math.max(e,g),k=Math.min(a,p);if(u<k&&c)for(;t.from<k&&(this.highlightRange(t,u,k,r,n),this.startSpan(Math.min(k,t.to),f),!(t.to>=p)&&t.nextSibling()););if(!d||p>a)break;(g=d.to+s)>e&&(this.highlightRange(i.cursor(),Math.max(e,d.from+s),Math.min(a,g),"",o),this.startSpan(Math.min(a,g),f))}c&&t.parent()}else if(t.firstChild()){m&&(r="");do{if(t.to<=e)continue;if(t.from>=a)break;this.highlightRange(t,e,a,r,n),this.startSpan(Math.min(a,t.to),f)}while(t.nextSibling());t.parent()}}}let m=n.define,p=m(),u=m(),k=m(u),b=m(u),y=m(),N=m(y),v=m(y),w=m(),x=m(w),M=m(),O=m(),S=m(),C=m(S),R=m(),A={comment:p,lineComment:m(p),blockComment:m(p),docComment:m(p),name:u,variableName:m(u),typeName:k,tagName:m(k),propertyName:b,attributeName:m(b),className:m(u),labelName:m(u),namespace:m(u),macroName:m(u),literal:y,string:N,docString:m(N),character:m(N),attributeValue:m(N),number:v,integer:m(v),float:m(v),bool:m(y),regexp:m(y),escape:m(y),color:m(y),url:m(y),keyword:M,self:m(M),null:m(M),atom:m(M),unit:m(M),modifier:m(M),operatorKeyword:m(M),controlKeyword:m(M),definitionKeyword:m(M),moduleKeyword:m(M),operator:O,derefOperator:m(O),arithmeticOperator:m(O),logicOperator:m(O),bitwiseOperator:m(O),compareOperator:m(O),updateOperator:m(O),definitionOperator:m(O),typeOperator:m(O),controlOperator:m(O),punctuation:S,separator:m(S),bracket:C,angleBracket:m(C),squareBracket:m(C),paren:m(C),brace:m(C),content:w,heading:x,heading1:m(x),heading2:m(x),heading3:m(x),heading4:m(x),heading5:m(x),heading6:m(x),contentSeparator:m(w),list:m(w),quote:m(w),emphasis:m(w),strong:m(w),link:m(w),monospace:m(w),strikethrough:m(w),inserted:m(),deleted:m(),changed:m(),invalid:m(),meta:R,documentMeta:m(R),annotation:m(R),processingInstruction:m(R),definition:n.defineModifier("definition"),constant:n.defineModifier("constant"),function:n.defineModifier("function"),standard:n.defineModifier("standard"),local:n.defineModifier("local"),special:n.defineModifier("special")};for(let t in A){let e=A[t];e instanceof n&&(e.name=t)}f([{tag:A.link,class:"tok-link"},{tag:A.heading,class:"tok-heading"},{tag:A.emphasis,class:"tok-emphasis"},{tag:A.strong,class:"tok-strong"},{tag:A.keyword,class:"tok-keyword"},{tag:A.atom,class:"tok-atom"},{tag:A.bool,class:"tok-bool"},{tag:A.url,class:"tok-url"},{tag:A.labelName,class:"tok-labelName"},{tag:A.inserted,class:"tok-inserted"},{tag:A.deleted,class:"tok-deleted"},{tag:A.literal,class:"tok-literal"},{tag:A.string,class:"tok-string"},{tag:A.number,class:"tok-number"},{tag:[A.regexp,A.escape,A.special(A.string)],class:"tok-string2"},{tag:A.variableName,class:"tok-variableName"},{tag:A.local(A.variableName),class:"tok-variableName tok-local"},{tag:A.definition(A.variableName),class:"tok-variableName tok-definition"},{tag:A.special(A.variableName),class:"tok-variableName2"},{tag:A.definition(A.propertyName),class:"tok-propertyName tok-definition"},{tag:A.typeName,class:"tok-typeName"},{tag:A.namespace,class:"tok-namespace"},{tag:A.className,class:"tok-className"},{tag:A.macroName,class:"tok-macroName"},{tag:A.propertyName,class:"tok-propertyName"},{tag:A.operator,class:"tok-operator"},{tag:A.comment,class:"tok-comment"},{tag:A.meta,class:"tok-meta"},{tag:A.invalid,class:"tok-invalid"},{tag:A.punctuation,class:"tok-punctuation"}])}}]);