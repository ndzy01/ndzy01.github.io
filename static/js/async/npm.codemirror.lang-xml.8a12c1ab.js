"use strict";(self.webpackChunkndzy=self.webpackChunkndzy||[]).push([["9649"],{3223:function(e,t,n){n.r(t),n.d(t,{autoCloseTags:function(){return C},completeFromSchema:function(){return g},xml:function(){return h},xmlLanguage:function(){return d}});var l=n(8723),o=n(3015),a=n(9348),r=n(1518);function i(e,t){let n=t&&t.getChild("TagName");return n?e.sliceString(n.from,n.to):""}function s(e,t){let n=t&&t.firstChild;return n&&"OpenTag"==n.name?i(e,n):""}function u(e){for(let t=e&&e.parent;t;t=t.parent)if("Element"==t.name)return t;return null}class m{constructor(e,t,n){this.attrs=t,this.attrValues=n,this.children=[],this.name=e.name,this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=e.textContent?e.textContent.map(e=>({label:e,type:"text"})):[]}}let c=/^[:\-\.\w\u00b7-\uffff]*$/;function p(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function f(e){return"string"==typeof e?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function g(e,t){let n=[],l=[],a=Object.create(null);for(let e of t){let t=p(e);n.push(t),e.global&&l.push(t),e.values&&(a[e.name]=e.values.map(f))}let r=[],g=[],d=Object.create(null);for(let t of e){let e=l,o=a;t.attributes&&(e=e.concat(t.attributes.map(e=>"string"==typeof e?n.find(t=>t.label==e)||{label:e,type:"property"}:(e.values&&(o==a&&(o=Object.create(o)),o[e.name]=e.values.map(f)),p(e)))));let i=new m(t,e,o);d[i.name]=i,r.push(i),t.top&&g.push(i)}!g.length&&(g=r);for(let t=0;t<r.length;t++){let n=e[t],l=r[t];if(n.children)for(let e of n.children)d[e]&&l.children.push(d[e]);else l.children=r}return e=>{var t,n,m,p;let{doc:f}=e.state,h=function(e,t){var n;let l=(0,o.qz)(e).resolveInner(t,-1),a=null;for(let e=l;!a&&e.parent;e=e.parent)("OpenTag"==e.name||"CloseTag"==e.name||"SelfClosingTag"==e.name||"MismatchedCloseTag"==e.name)&&(a=e);if(a&&(a.to>t||a.lastChild.type.isError)){let e=a.parent;if("TagName"==l.name)return"CloseTag"==a.name||"MismatchedCloseTag"==a.name?{type:"closeTag",from:l.from,context:e}:{type:"openTag",from:l.from,context:u(e)};if("AttributeName"==l.name)return{type:"attrName",from:l.from,context:a};if("AttributeValue"==l.name)return{type:"attrValue",from:l.from,context:a};let n=l==a||"Attribute"==l.name?l.childBefore(t):l;return(null==n?void 0:n.name)=="StartTag"?{type:"openTag",from:t,context:u(e)}:(null==n?void 0:n.name)=="StartCloseTag"&&n.to<=t?{type:"closeTag",from:t,context:e}:(null==n?void 0:n.name)=="Is"?{type:"attrValue",from:t,context:a}:n?{type:"attrName",from:t,context:a}:null}if("StartCloseTag"==l.name)return{type:"closeTag",from:t,context:l.parent};for(;l.parent&&l.to==t&&!(null===(n=l.lastChild)||void 0===n?void 0:n.type.isError);)l=l.parent;return"Element"==l.name||"Text"==l.name||"Document"==l.name?{type:"tag",from:t,context:"Element"==l.name?l:u(l)}:null}(e.state,e.pos);if(!h||"tag"==h.type&&!e.explicit)return null;let{type:b,from:C,context:T}=h;if("openTag"==b){let e=g,t=s(f,T);if(t){let n=d[t];e=(null==n?void 0:n.children)||r}return{from:C,options:e.map(e=>e.completion),validFor:c}}if("closeTag"==b){let n=s(f,T);return n?{from:C,to:e.pos+(">"==f.sliceString(e.pos,e.pos+1)?1:0),options:[(null===(t=d[n])||void 0===t?void 0:t.closeNameCompletion)||{label:n+">",type:"type"}],validFor:c}:null}if("attrName"==b){let e=d[i(f,T)];return{from:C,options:(null==e?void 0:e.attrs)||l,validFor:c}}else if("attrValue"==b){;let t,l;let o=(n=f,m=T,p=C,(l=(t=m&&m.getChildren("Attribute").find(e=>e.from<=p&&e.to>=p))&&t.getChild("AttributeName"))?n.sliceString(l.from,l.to):"");if(!o)return null;let r=d[i(f,T)],s=((null==r?void 0:r.attrValues)||a)[o];return s&&s.length?{from:C,to:e.pos+('"'==f.sliceString(e.pos,e.pos+1)?1:0),options:s,validFor:/^"[^"]*"?$/}:null}else{if("tag"!=b)return null;let t=s(f,T),n=d[t],l=[],o=T&&T.lastChild;t&&(!o||"CloseTag"!=o.name||i(f,o)!=t)&&l.push(n?n.closeCompletion:{label:"</"+t+">",type:"type",boost:2});let a=l.concat(((null==n?void 0:n.children)||(T?r:g)).map(e=>e.openCompletion));if(T&&(null==n?void 0:n.text.length)){let t=T.firstChild;t.to>e.pos-20&&!/\S/.test(e.state.sliceDoc(t.to,e.pos))&&(a=a.concat(n.text))}return{from:C,options:a,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}}}let d=o.qp.define({name:"xml",parser:l.E.configure({props:[o.uj.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit}),o.x0.add({Element(e){let t=e.firstChild,n=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==n.name?n.from:e.to}:null}}),o.a0.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function h(e={}){let t=[d.data.of({autocomplete:g(e.elements||[],e.attributes||[])})];return!1!==e.autoCloseTags&&t.push(C),new o.ri(d,t)}function b(e,t,n=e.length){if(!t)return"";let l=t.firstChild,o=l&&l.getChild("TagName");return o?e.sliceString(o.from,Math.min(o.to,n)):""}let C=r.tk.inputHandler.of((e,t,n,l,r)=>{if(e.composing||e.state.readOnly||t!=n||">"!=l&&"/"!=l||!d.isActiveAt(e.state,t,-1))return!1;let i=r(),{state:s}=i,u=s.changeByRange(e=>{var t,n,r;let{head:i}=e,u=s.doc.sliceString(i-1,i)==l,m=(0,o.qz)(s).resolveInner(i,-1),c;if(u&&">"==l&&"EndTag"==m.name){let l=m.parent;if((null===(n=null===(t=l.parent)||void 0===t?void 0:t.lastChild)||void 0===n?void 0:n.name)!="CloseTag"&&(c=b(s.doc,l.parent,i))){let t=i+(">"===s.doc.sliceString(i,i+1)?1:0);return{range:e,changes:{from:i,to:t,insert:`</${c}>`}}}}else if(u&&"/"==l&&"StartCloseTag"==m.name){let e=m.parent;if(m.from==i-2&&(null===(r=e.lastChild)||void 0===r?void 0:r.name)!="CloseTag"&&(c=b(s.doc,e,i))){let e=i+(">"===s.doc.sliceString(i,i+1)?1:0),t=`${c}>`;return{range:a.jT.cursor(i+t.length,-1),changes:{from:i,to:e,insert:t}}}}return{range:e}});return!u.changes.empty&&(e.dispatch([i,s.update(u,{userEvent:"input.complete",scrollIntoView:!0})]),!0)})}}]);