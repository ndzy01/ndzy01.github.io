"use strict";(self.webpackChunkndzy=self.webpackChunkndzy||[]).push([["5815"],{6533:function(t,e,n){n.d(e,{$2:function(){return tB},E2:function(){return th},ar:function(){return tH},dy:function(){return tM},xj:function(){return R},z7:function(){return tT},zY:function(){return tf}});var r,s,i=n(1171),o=n(6644);class a{static create(t,e,n,r,s){return new a(t,e,n,r+(r<<8)+t+(e<<4)|0,s,[],[])}constructor(t,e,n,r,s,o,a){this.type=t,this.value=e,this.from=n,this.hash=r,this.end=s,this.children=o,this.positions=a,this.hashProp=[[i.md.contextHash,r]]}addChild(t,e){t.prop(i.md.contextHash)!=this.hash&&(t=new i.mp(t.type,t.children,t.positions,t.length,this.hashProp)),this.children.push(t),this.positions.push(e)}toTree(t,e=this.end){let n=this.children.length-1;return n>=0&&(e=Math.max(e,this.positions[n]+this.children[n].length+this.from)),new i.mp(t.types[this.type],this.children,this.positions,e-this.from).balance({makeTree:(t,e,n)=>new i.mp(i.Jq.none,t,e,n,this.hashProp)})}}(r=s||(s={}))[r.Document=1]="Document",r[r.CodeBlock=2]="CodeBlock",r[r.FencedCode=3]="FencedCode",r[r.Blockquote=4]="Blockquote",r[r.HorizontalRule=5]="HorizontalRule",r[r.BulletList=6]="BulletList",r[r.OrderedList=7]="OrderedList",r[r.ListItem=8]="ListItem",r[r.ATXHeading1=9]="ATXHeading1",r[r.ATXHeading2=10]="ATXHeading2",r[r.ATXHeading3=11]="ATXHeading3",r[r.ATXHeading4=12]="ATXHeading4",r[r.ATXHeading5=13]="ATXHeading5",r[r.ATXHeading6=14]="ATXHeading6",r[r.SetextHeading1=15]="SetextHeading1",r[r.SetextHeading2=16]="SetextHeading2",r[r.HTMLBlock=17]="HTMLBlock",r[r.LinkReference=18]="LinkReference",r[r.Paragraph=19]="Paragraph",r[r.CommentBlock=20]="CommentBlock",r[r.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",r[r.Escape=22]="Escape",r[r.Entity=23]="Entity",r[r.HardBreak=24]="HardBreak",r[r.Emphasis=25]="Emphasis",r[r.StrongEmphasis=26]="StrongEmphasis",r[r.Link=27]="Link",r[r.Image=28]="Image",r[r.InlineCode=29]="InlineCode",r[r.HTMLTag=30]="HTMLTag",r[r.Comment=31]="Comment",r[r.ProcessingInstruction=32]="ProcessingInstruction",r[r.Autolink=33]="Autolink",r[r.HeaderMark=34]="HeaderMark",r[r.QuoteMark=35]="QuoteMark",r[r.ListMark=36]="ListMark",r[r.LinkMark=37]="LinkMark",r[r.EmphasisMark=38]="EmphasisMark",r[r.CodeMark=39]="CodeMark",r[r.CodeText=40]="CodeText",r[r.CodeInfo=41]="CodeInfo",r[r.LinkTitle=42]="LinkTitle",r[r.LinkLabel=43]="LinkLabel",r[r.URL=44]="URL";class l{constructor(t,e){this.start=t,this.content=e,this.marks=[],this.parsers=[]}}class h{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let t=this.skipSpace(this.basePos);this.indent=this.countIndent(t,this.pos,this.indent),this.pos=t,this.next=t==this.text.length?-1:this.text.charCodeAt(t)}skipSpace(t){return u(this.text,t)}reset(t){for(this.text=t,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(t){this.basePos=t,this.baseIndent=this.countIndent(t,this.pos,this.indent)}moveBaseColumn(t){this.baseIndent=t,this.basePos=this.findColumn(t)}addMarker(t){this.markers.push(t)}countIndent(t,e=0,n=0){for(let r=e;r<t;r++)n+=9==this.text.charCodeAt(r)?4-n%4:1;return n}findColumn(t){let e=0;for(let n=0;e<this.text.length&&n<t;e++)n+=9==this.text.charCodeAt(e)?4-n%4:1;return e}scrub(){if(!this.baseIndent)return this.text;let t="";for(let e=0;e<this.basePos;e++)t+=" ";return t+this.text.slice(this.basePos)}}function f(t,e,n){if(n.pos==n.text.length||t!=e.block&&n.indent>=e.stack[n.depth+1].value+n.baseIndent)return!0;if(n.indent>=n.baseIndent+4)return!1;let r=(t.type==s.OrderedList?L:b)(n,e,!1);return r>0&&(t.type!=s.BulletList||0>k(n,e,!1))&&n.text.charCodeAt(n.pos+r-1)==t.value}let p={[s.Blockquote]:(t,e,n)=>62==n.next&&(n.markers.push(_(s.QuoteMark,e.lineStart+n.pos,e.lineStart+n.pos+1)),n.moveBase(n.pos+(d(n.text.charCodeAt(n.pos+1))?2:1)),t.end=e.lineStart+n.text.length,!0),[s.ListItem]:(t,e,n)=>(!(n.indent<n.baseIndent+t.value)||!(n.next>-1))&&(n.moveBaseColumn(n.baseIndent+t.value),!0),[s.OrderedList]:f,[s.BulletList]:f,[s.Document]:()=>!0};function d(t){return 32==t||9==t||10==t||13==t}function u(t,e=0){for(;e<t.length&&d(t.charCodeAt(e));)e++;return e}function c(t,e,n){for(;e>n&&d(t.charCodeAt(e-1));)e--;return e}function g(t){if(96!=t.next&&126!=t.next)return -1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;if(e<t.pos+3)return -1;if(96==t.next){for(let n=e;n<t.text.length;n++)if(96==t.text.charCodeAt(n))return -1}return e}function m(t){return 62!=t.next?-1:32==t.text.charCodeAt(t.pos+1)?2:1}function k(t,e,n){if(42!=t.next&&45!=t.next&&95!=t.next)return -1;let r=1;for(let e=t.pos+1;e<t.text.length;e++){let n=t.text.charCodeAt(e);if(n==t.next)r++;else if(!d(n))return -1}return n&&45==t.next&&C(t)>-1&&t.depth==e.stack.length&&e.parser.leafBlockParsers.indexOf(J.SetextHeading)>-1?-1:r<3?-1:1}function x(t,e){for(let n=t.stack.length-1;n>=0;n--)if(t.stack[n].type==e)return!0;return!1}function b(t,e,n){return(45==t.next||43==t.next||42==t.next)&&(t.pos==t.text.length-1||d(t.text.charCodeAt(t.pos+1)))&&(!n||x(e,s.BulletList)||t.skipSpace(t.pos+2)<t.text.length)?1:-1}function L(t,e,n){let r=t.pos,i=t.next;for(;i>=48&&i<=57;){if(++r==t.text.length)return -1;i=t.text.charCodeAt(r)}return r==t.pos||r>t.pos+9||46!=i&&41!=i||r<t.text.length-1&&!d(t.text.charCodeAt(r+1))||n&&!x(e,s.OrderedList)&&(t.skipSpace(r+1)==t.text.length||r>t.pos+1||49!=t.next)?-1:r+1-t.pos}function S(t){if(35!=t.next)return -1;let e=t.pos+1;for(;e<t.text.length&&35==t.text.charCodeAt(e);)e++;if(e<t.text.length&&32!=t.text.charCodeAt(e))return -1;let n=e-t.pos;return n>6?-1:n}function C(t){if(45!=t.next&&61!=t.next||t.indent>=t.baseIndent+4)return -1;let e=t.pos+1;for(;e<t.text.length&&t.text.charCodeAt(e)==t.next;)e++;let n=e;for(;e<t.text.length&&d(t.text.charCodeAt(e));)e++;return e==t.text.length?n:-1}let y=/^[ \t]*$/,w=/-->/,A=/\?>/,I=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,w],[/^\s*<\?/,A],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,y],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,y]];function T(t,e,n){if(60!=t.next)return -1;let r=t.text.slice(t.pos);for(let t=0,e=I.length-(n?1:0);t<e;t++)if(I[t][0].test(r))return t;return -1}function E(t,e){let n=t.countIndent(e,t.pos,t.indent),r=t.countIndent(t.skipSpace(e),e,n);return r>=n+5?n+1:r}function B(t,e,n){let r=t.length-1;r>=0&&t[r].to==e&&t[r].type==s.CodeText?t[r].to=n:t.push(_(s.CodeText,e,n))}let H={LinkReference:void 0,IndentedCode(t,e){let n=e.baseIndent+4;if(e.indent<n)return!1;let r=e.findColumn(n),i=t.lineStart+r,o=t.lineStart+e.text.length,a=[],l=[];for(B(a,i,o);t.nextLine()&&e.depth>=t.stack.length;)if(e.pos==e.text.length)for(let n of(B(l,t.lineStart-1,t.lineStart),e.markers))l.push(n);else if(e.indent<n)break;else{if(l.length){for(let t of l)t.type==s.CodeText?B(a,t.from,t.to):a.push(t);l=[]}for(let n of(B(a,t.lineStart-1,t.lineStart),e.markers))a.push(n);o=t.lineStart+e.text.length;let n=t.lineStart+e.findColumn(e.baseIndent+4);n<o&&B(a,n,o)}return l.length&&(l=l.filter(t=>t.type!=s.CodeText)).length&&(e.markers=l.concat(e.markers)),t.addNode(t.buffer.writeElements(a,-i).finish(s.CodeBlock,o-i),i),!0},FencedCode(t,e){let n=g(e);if(n<0)return!1;let r=t.lineStart+e.pos,i=e.next,o=n-e.pos,a=e.skipSpace(n),l=c(e.text,e.text.length,a),h=[_(s.CodeMark,r,r+o)];a<l&&h.push(_(s.CodeInfo,t.lineStart+a,t.lineStart+l));for(let n=!0;t.nextLine()&&e.depth>=t.stack.length;n=!1){let r=e.pos;if(e.indent-e.baseIndent<4)for(;r<e.text.length&&e.text.charCodeAt(r)==i;)r++;if(r-e.pos>=o&&e.skipSpace(r)==e.text.length){for(let t of e.markers)h.push(t);h.push(_(s.CodeMark,t.lineStart+e.pos,t.lineStart+r)),t.nextLine();break}{for(let r of(!n&&B(h,t.lineStart-1,t.lineStart),e.markers))h.push(r);let r=t.lineStart+e.basePos,s=t.lineStart+e.text.length;r<s&&B(h,r,s)}}return t.addNode(t.buffer.writeElements(h,-r).finish(s.FencedCode,t.prevLineEnd()-r),r),!0},Blockquote(t,e){let n=m(e);return!(n<0)&&(t.startContext(s.Blockquote,e.pos),t.addNode(s.QuoteMark,t.lineStart+e.pos,t.lineStart+e.pos+1),e.moveBase(e.pos+n),null)},HorizontalRule(t,e){if(0>k(e,t,!1))return!1;let n=t.lineStart+e.pos;return t.nextLine(),t.addNode(s.HorizontalRule,n),!0},BulletList(t,e){let n=b(e,t,!1);if(n<0)return!1;t.block.type!=s.BulletList&&t.startContext(s.BulletList,e.basePos,e.next);let r=E(e,e.pos+1);return t.startContext(s.ListItem,e.basePos,r-e.baseIndent),t.addNode(s.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+n),e.moveBaseColumn(r),null},OrderedList(t,e){let n=L(e,t,!1);if(n<0)return!1;t.block.type!=s.OrderedList&&t.startContext(s.OrderedList,e.basePos,e.text.charCodeAt(e.pos+n-1));let r=E(e,e.pos+n);return t.startContext(s.ListItem,e.basePos,r-e.baseIndent),t.addNode(s.ListMark,t.lineStart+e.pos,t.lineStart+e.pos+n),e.moveBaseColumn(r),null},ATXHeading(t,e){let n=S(e);if(n<0)return!1;let r=e.pos,i=t.lineStart+r,o=c(e.text,e.text.length,r),a=o;for(;a>r&&e.text.charCodeAt(a-1)==e.next;)a--;(a==o||a==r||!d(e.text.charCodeAt(a-1)))&&(a=e.text.length);let l=t.buffer.write(s.HeaderMark,0,n).writeElements(t.parser.parseInline(e.text.slice(r+n+1,a),i+n+1),-i);a<e.text.length&&l.write(s.HeaderMark,a-r,o-r);let h=l.finish(s.ATXHeading1-1+n,e.text.length-r);return t.nextLine(),t.addNode(h,i),!0},HTMLBlock(t,e){let n=T(e,t,!1);if(n<0)return!1;let r=t.lineStart+e.pos,i=I[n][1],o=[],a=i!=y;for(;!i.test(e.text)&&t.nextLine();){if(e.depth<t.stack.length){a=!1;break}for(let t of e.markers)o.push(t)}a&&t.nextLine();let l=i==w?s.CommentBlock:i==A?s.ProcessingInstructionBlock:s.HTMLBlock,h=t.prevLineEnd();return t.addNode(t.buffer.writeElements(o,-r).finish(l,h-r),r),!0},SetextHeading:void 0};class M{constructor(t){this.stage=0,this.elts=[],this.pos=0,this.start=t.start,this.advance(t.content)}nextLine(t,e,n){if(-1==this.stage)return!1;let r=n.content+"\n"+e.scrub(),s=this.advance(r);return!!(s>-1)&&!!(s<r.length)&&this.complete(t,n,s)}finish(t,e){return(2==this.stage||3==this.stage)&&u(e.content,this.pos)==e.content.length&&this.complete(t,e,e.content.length)}complete(t,e,n){return t.addLeafElement(e,_(s.LinkReference,this.start,this.start+n,this.elts)),!0}nextStage(t){return t?(this.pos=t.to-this.start,this.elts.push(t),this.stage++,!0):(!1===t&&(this.stage=-1),!1)}advance(t){for(;;){if(-1==this.stage)return -1;if(0==this.stage){if(!this.nextStage(tn(t,this.pos,this.start,!0)))return -1;if(58!=t.charCodeAt(this.pos))return this.stage=-1;this.elts.push(_(s.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else if(1==this.stage){if(!this.nextStage(tt(t,u(t,this.pos),this.start)))return -1}else{if(2!=this.stage)return v(t,this.pos);let e=u(t,this.pos),n=0;if(e>this.pos){let r=te(t,e,this.start);if(r){let e=v(t,r.to-this.start);e>0&&(this.nextStage(r),n=e)}}return!n&&(n=v(t,this.pos)),n>0&&n<t.length?n:-1}}}}function v(t,e){for(;e<t.length;e++){let n=t.charCodeAt(e);if(10==n)break;if(!d(n))return -1}return e}class P{nextLine(t,e,n){let r=e.depth<t.stack.length?-1:C(e),i=e.next;if(r<0)return!1;let o=_(s.HeaderMark,t.lineStart+e.pos,t.lineStart+r);return t.nextLine(),t.addLeafElement(n,_(61==i?s.SetextHeading1:s.SetextHeading2,n.start,t.prevLineEnd(),[...t.parser.parseInline(n.content,n.start),o])),!0}finish(){return!1}}let J={LinkReference:(t,e)=>91==e.content.charCodeAt(0)?new M(e):null,SetextHeading:()=>new P},N={text:"",end:0};class O{constructor(t,e,n,r){this.parser=t,this.input=e,this.ranges=r,this.line=new h,this.atEnd=!1,this.reusePlaceholders=new Map,this.stoppedAt=null,this.rangeI=0,this.to=r[r.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=r[0].from,this.block=a.create(s.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=n.length?new to(n,e):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(null!=this.stoppedAt&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:t}=this;for(;;){for(let e=0;;){let n=t.depth<this.stack.length?this.stack[this.stack.length-1]:null;for(;e<t.markers.length&&(!n||t.markers[e].from<n.end);){let n=t.markers[e++];this.addNode(n.type,n.from,n.to)}if(!n)break;this.finishContext()}if(t.pos<t.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(t.basePos))return null;t:for(;;){for(let e of this.parser.blockParsers)if(e){let n=e(this,t);if(!1!=n){if(!0==n)return null;t.forward();continue t}}break}let e=new l(this.lineStart+t.pos,t.text.slice(t.pos));for(let t of this.parser.leafBlockParsers)if(t){let n=t(this,e);n&&e.parsers.push(n)}e:for(;this.nextLine()&&t.pos!=t.text.length;){;if(t.indent<t.baseIndent+4){for(let n of this.parser.endLeafBlock)if(n(this,t,e))break e}for(let n of e.parsers)if(n.nextLine(this,t,e))return null;for(let n of(e.content+="\n"+t.scrub(),t.markers))e.marks.push(n)}return this.finishLeaf(e),null}stopAt(t){if(null!=this.stoppedAt&&this.stoppedAt<t)throw RangeError("Can't move stoppedAt forward");this.stoppedAt=t}reuseFragment(t){if(!this.fragments.moveTo(this.absoluteLineStart+t,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let e=this.fragments.takeNodes(this);return!!e&&(this.absoluteLineStart+=e,this.lineStart=ta(this.absoluteLineStart,this.ranges),this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++):this.atEnd=!0,this.readLine(),!0)}get depth(){return this.stack.length}parentType(t=this.depth-1){return this.parser.nodeSet.types[this.stack[t].type]}nextLine(){return(this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to)?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(t){if(N.end=t,t>=this.to)N.text="";else if(N.text=this.lineChunkAt(t),N.end+=N.text.length,this.ranges.length>1){let t=this.absoluteLineStart,e=this.rangeI;for(;this.ranges[e].to<N.end;){e++;let n=this.ranges[e].from,r=this.lineChunkAt(n);N.end=n+r.length,N.text=N.text.slice(0,this.ranges[e-1].to-t)+r,t=N.end-N.text.length}}return N}readLine(){let{line:t}=this,{text:e,end:n}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=n,t.reset(e);t.depth<this.stack.length;t.depth++){let e=this.stack[t.depth],n=this.parser.skipContextMarkup[e.type];if(!n)throw Error("Unhandled block context "+s[e.type]);if(!n(e,this,t))break;t.forward()}}lineChunkAt(t){let e=this.input.chunk(t),n;if(this.input.lineChunks)n="\n"==e?"":e;else{let t=e.indexOf("\n");n=t<0?e:e.slice(0,t)}return t+n.length>this.to?n.slice(0,this.to-t):n}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(t,e,n=0){this.block=a.create(t,n,this.lineStart+e,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(t,e,n=0){this.startContext(this.parser.getNodeType(t),e,n)}addNode(t,e,n){"number"==typeof t&&(t=new i.mp(this.parser.nodeSet.types[t],j,j,(null!=n?n:this.prevLineEnd())-e)),this.block.addChild(t,e-this.block.from)}addElement(t){this.block.addChild(t.toTree(this.parser.nodeSet),t.from-this.block.from)}addLeafElement(t,e){this.addNode(this.buffer.writeElements(ts(e.children,t.marks),-e.from).finish(e.type,e.to-e.from),e.from)}finishContext(){let t=this.stack.pop(),e=this.stack[this.stack.length-1];e.addChild(t.toTree(this.parser.nodeSet),t.from-e.from),this.block=e}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(t){return this.ranges.length>1?function t(e,n,r,s,o){let a=e[n].to,l=[],h=[],f=r.from+s;function p(t,r){for(;r?t>=a:t>a;){let r=e[n+1].from-a;s+=r,t+=r,a=e[++n].to}}for(let i=r.firstChild;i;i=i.nextSibling){p(i.from+s,!0);let r=i.from+s,d,u=o.get(i.tree);u?d=u:i.to+s>a?(d=t(e,n,i,s,o),p(i.to+s,!1)):d=i.toTree(),l.push(d),h.push(r-f)}return p(r.to+s,!1),new i.mp(r.type,l,h,r.to+s-f,r.tree?r.tree.propValues:void 0)}(this.ranges,0,t.topNode,this.ranges[0].from,this.reusePlaceholders):t}finishLeaf(t){for(let e of t.parsers)if(e.finish(this,t))return;let e=ts(this.parser.parseInline(t.content,t.start),t.marks);this.addNode(this.buffer.writeElements(e,-t.start).finish(s.Paragraph,t.content.length),t.start)}elt(t,e,n,r){return"string"==typeof t?_(this.parser.getNodeType(t),e,n,r):new F(t,e)}get buffer(){return new D(this.parser.nodeSet)}}class R extends i._b{constructor(t,e,n,r,s,i,o,a,l){for(let h of(super(),this.nodeSet=t,this.blockParsers=e,this.leafBlockParsers=n,this.blockNames=r,this.endLeafBlock=s,this.skipContextMarkup=i,this.inlineParsers=o,this.inlineNames=a,this.wrappers=l,this.nodeTypes=Object.create(null),t.types))this.nodeTypes[h.name]=h.id}createParse(t,e,n){let r=new O(this,t,e,n);for(let s of this.wrappers)r=s(r,t,e,n);return r}configure(t){let e=function t(e){if(!Array.isArray(e))return e;if(0==e.length)return null;let n=t(e[0]);if(1==e.length)return n;let r=t(e.slice(1));if(!r||!n)return n||r;let s=(t,e)=>(t||j).concat(e||j),i=n.wrap,o=r.wrap;return{props:s(n.props,r.props),defineNodes:s(n.defineNodes,r.defineNodes),parseBlock:s(n.parseBlock,r.parseBlock),parseInline:s(n.parseInline,r.parseInline),remove:s(n.remove,r.remove),wrap:i?o?(t,e,n,r)=>i(o(t,e,n,r),e,n,r):i:o}}(t);if(!e)return this;let{nodeSet:n,skipContextMarkup:r}=this,a=this.blockParsers.slice(),l=this.leafBlockParsers.slice(),h=this.blockNames.slice(),f=this.inlineParsers.slice(),p=this.inlineNames.slice(),d=this.endLeafBlock.slice(),u=this.wrappers;if(z(e.defineNodes)){r=Object.assign({},r);let t=n.types.slice(),a;for(let n of e.defineNodes){let{name:e,block:l,composite:h,style:f}="string"==typeof n?{name:n}:n;if(t.some(t=>t.name==e))continue;h&&(r[t.length]=(t,e,n)=>h(e,n,t.value));let p=t.length,d=h?["Block","BlockContext"]:l?p>=s.ATXHeading1&&p<=s.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;t.push(i.Jq.define({id:p,name:e,props:d&&[[i.md.group,d]]})),f&&(!a&&(a={}),Array.isArray(f)||f instanceof o.Vp?a[e]=f:Object.assign(a,f))}n=new i.Lj(t),a&&(n=n.extend((0,o.Gv)(a)))}if(z(e.props)&&(n=n.extend(...e.props)),z(e.remove))for(let t of e.remove){let e=this.blockNames.indexOf(t),n=this.inlineNames.indexOf(t);e>-1&&(a[e]=l[e]=void 0),n>-1&&(f[n]=void 0)}if(z(e.parseBlock))for(let t of e.parseBlock){let e=h.indexOf(t.name);if(e>-1)a[e]=t.parse,l[e]=t.leaf;else{let e=t.before?X(h,t.before):t.after?X(h,t.after)+1:h.length-1;a.splice(e,0,t.parse),l.splice(e,0,t.leaf),h.splice(e,0,t.name)}t.endLeaf&&d.push(t.endLeaf)}if(z(e.parseInline))for(let t of e.parseInline){let e=p.indexOf(t.name);if(e>-1)f[e]=t.parse;else{let e=t.before?X(p,t.before):t.after?X(p,t.after)+1:p.length-1;f.splice(e,0,t.parse),p.splice(e,0,t.name)}}return e.wrap&&(u=u.concat(e.wrap)),new R(n,a,l,h,d,r,f,p,u)}getNodeType(t){let e=this.nodeTypes[t];if(null==e)throw RangeError(`Unknown node type '${t}'`);return e}parseInline(t,e){let n=new tr(this,t,e);n:for(let t=e;t<n.end;){let e=n.char(t);for(let r of this.inlineParsers)if(r){let s=r(n,e,t);if(s>=0){t=s;continue n}}t++}return n.resolveMarkers(0)}}function z(t){return null!=t&&t.length>0}function X(t,e){let n=t.indexOf(e);if(n<0)throw RangeError(`Position specified relative to unknown parser ${e}`);return n}let $=[i.Jq.none];for(let t=1,e;e=s[t];t++)$[t]=i.Jq.define({id:t,name:e,props:t>=s.Escape?[]:[[i.md.group,t in p?["Block","BlockContext"]:["Block","LeafBlock"]]],top:"Document"==e});let j=[];class D{constructor(t){this.nodeSet=t,this.content=[],this.nodes=[]}write(t,e,n,r=0){return this.content.push(t,e,n,4+4*r),this}writeElements(t,e=0){for(let n of t)n.writeTo(this,e);return this}finish(t,e){return i.mp.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:t,length:e})}}class q{constructor(t,e,n,r=j){this.type=t,this.from=e,this.to=n,this.children=r}writeTo(t,e){let n=t.content.length;t.writeElements(this.children,e),t.content.push(this.type,this.from+e,this.to+e,t.content.length+4-n)}toTree(t){return new D(t).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class F{constructor(t,e){this.tree=t,this.from=e}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return j}writeTo(t,e){t.nodes.push(this.tree),t.content.push(t.nodes.length-1,this.from+e,this.to+e,-1)}toTree(){return this.tree}}function _(t,e,n,r){return new q(t,e,n,r)}let U={resolve:"Emphasis",mark:"EmphasisMark"},Z={resolve:"Emphasis",mark:"EmphasisMark"},Q={},G={};class V{constructor(t,e,n,r){this.type=t,this.from=e,this.to=n,this.side=r}}let Y="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",K=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{K=RegExp("[\\p{S}|\\p{P}]","u")}catch(t){}let W={Escape(t,e,n){if(92!=e||n==t.end-1)return -1;let r=t.char(n+1);for(let e=0;e<Y.length;e++)if(Y.charCodeAt(e)==r)return t.append(_(s.Escape,n,n+2));return -1},Entity(t,e,n){if(38!=e)return -1;let r=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(t.slice(n+1,n+31));return r?t.append(_(s.Entity,n,n+1+r[0].length)):-1},InlineCode(t,e,n){if(96!=e||n&&96==t.char(n-1))return -1;let r=n+1;for(;r<t.end&&96==t.char(r);)r++;let i=r-n,o=0;for(;r<t.end;r++)if(96==t.char(r)){if(++o==i&&96!=t.char(r+1))return t.append(_(s.InlineCode,n,r+1,[_(s.CodeMark,n,n+i),_(s.CodeMark,r+1-i,r+1)]))}else o=0;return -1},HTMLTag(t,e,n){if(60!=e||n==t.end-1)return -1;let r=t.slice(n+1,t.end),i=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(r);if(i)return t.append(_(s.Autolink,n,n+1+i[0].length,[_(s.LinkMark,n,n+1),_(s.URL,n+1,n+i[0].length),_(s.LinkMark,n+i[0].length,n+1+i[0].length)]));let o=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(r);if(o)return t.append(_(s.Comment,n,n+1+o[0].length));let a=/^\?[^]*?\?>/.exec(r);if(a)return t.append(_(s.ProcessingInstruction,n,n+1+a[0].length));let l=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(r);return l?t.append(_(s.HTMLTag,n,n+1+l[0].length)):-1},Emphasis(t,e,n){if(95!=e&&42!=e)return -1;let r=n+1;for(;t.char(r)==e;)r++;let s=t.slice(n-1,n),i=t.slice(r,r+1),o=K.test(s),a=K.test(i),l=/\s|^$/.test(s),h=/\s|^$/.test(i),f=!h&&(!a||l||o),p=!l&&(!o||h||a);return t.append(new V(95==e?U:Z,n,r,(f&&(42==e||!p||o)?1:0)|(p&&(42==e||!f||a)?2:0)))},HardBreak(t,e,n){if(92==e&&10==t.char(n+1))return t.append(_(s.HardBreak,n,n+2));if(32==e){let e=n+1;for(;32==t.char(e);)e++;if(10==t.char(e)&&e>=n+2)return t.append(_(s.HardBreak,n,e+1))}return -1},Link:(t,e,n)=>91==e?t.append(new V(Q,n,n+1,1)):-1,Image:(t,e,n)=>33==e&&91==t.char(n+1)?t.append(new V(G,n,n+2,1)):-1,LinkEnd(t,e,n){if(93!=e)return -1;for(let e=t.parts.length-1;e>=0;e--){let r=t.parts[e];if(r instanceof V&&(r.type==Q||r.type==G)){if(!r.side||t.skipSpace(r.to)==n&&!/[(\[]/.test(t.slice(n+1,n+2)))return t.parts[e]=null,-1;let i=t.takeContent(e),o=t.parts[e]=function(t,e,n,r,i){let{text:o}=t,a=t.char(i),l=i;if(e.unshift(_(s.LinkMark,r,r+(n==s.Image?2:1))),e.push(_(s.LinkMark,i-1,i)),40==a){let n=t.skipSpace(i+1),r=tt(o,n-t.offset,t.offset),a;r&&(n=t.skipSpace(r.to))!=r.to&&(a=te(o,n-t.offset,t.offset))&&(n=t.skipSpace(a.to)),41==t.char(n)&&(e.push(_(s.LinkMark,i,i+1)),l=n+1,r&&e.push(r),a&&e.push(a),e.push(_(s.LinkMark,n,l)))}else if(91==a){let n=tn(o,i-t.offset,t.offset,!1);n&&(e.push(n),l=n.to)}return _(n,r,l,e)}(t,i,r.type==Q?s.Link:s.Image,r.from,n+1);if(r.type==Q)for(let n=0;n<e;n++){let e=t.parts[n];e instanceof V&&e.type==Q&&(e.side=0)}return o.to}}return -1}};function tt(t,e,n){if(60==t.charCodeAt(e)){for(let r=e+1;r<t.length;r++){let i=t.charCodeAt(r);if(62==i)return _(s.URL,e+n,r+1+n);if(60==i||10==i)return!1}return null}{let r=0,i=e;for(let e=!1;i<t.length;i++){let n=t.charCodeAt(i);if(d(n))break;if(e)e=!1;else if(40==n)r++;else if(41==n){if(!r)break;r--}else 92==n&&(e=!0)}return i>e?_(s.URL,e+n,i+n):i==t.length&&null}}function te(t,e,n){let r=t.charCodeAt(e);if(39!=r&&34!=r&&40!=r)return!1;let i=40==r?41:r;for(let r=e+1,o=!1;r<t.length;r++){let a=t.charCodeAt(r);if(o)o=!1;else{if(a==i)return _(s.LinkTitle,e+n,r+1+n);92==a&&(o=!0)}}return null}function tn(t,e,n,r){for(let i=!1,o=e+1,a=Math.min(t.length,o+999);o<a;o++){let a=t.charCodeAt(o);if(i)i=!1;else{if(93==a)return!r&&_(s.LinkLabel,e+n,o+1+n);if(r&&!d(a)&&(r=!1),91==a)return!1;92==a&&(i=!0)}}return null}class tr{constructor(t,e,n){this.parser=t,this.text=e,this.offset=n,this.parts=[]}char(t){return t>=this.end?-1:this.text.charCodeAt(t-this.offset)}get end(){return this.offset+this.text.length}slice(t,e){return this.text.slice(t-this.offset,e-this.offset)}append(t){return this.parts.push(t),t.to}addDelimiter(t,e,n,r,s){return this.append(new V(t,e,n,(r?1:0)|(s?2:0)))}get hasOpenLink(){for(let t=this.parts.length-1;t>=0;t--){let e=this.parts[t];if(e instanceof V&&(e.type==Q||e.type==G))return!0}return!1}addElement(t){return this.append(t)}resolveMarkers(t){for(let e=t;e<this.parts.length;e++){let n=this.parts[e];if(!(n instanceof V&&n.type.resolve&&2&n.side))continue;let r=n.type==U||n.type==Z,s=n.to-n.from,i,o=e-1;for(;o>=t;o--){let t=this.parts[o];if(t instanceof V&&1&t.side&&t.type==n.type&&!(r&&(1&n.side||2&t.side)&&(t.to-t.from+s)%3==0&&((t.to-t.from)%3||s%3))){i=t;break}}if(!i)continue;let a=n.type.resolve,l=[],h=i.from,f=n.to;if(r){let t=Math.min(2,i.to-i.from,s);h=i.to-t,f=n.from+t,a=1==t?"Emphasis":"StrongEmphasis"}i.type.mark&&l.push(this.elt(i.type.mark,h,i.to));for(let t=o+1;t<e;t++)this.parts[t]instanceof q&&l.push(this.parts[t]),this.parts[t]=null;n.type.mark&&l.push(this.elt(n.type.mark,n.from,f));let p=this.elt(a,h,f,l);this.parts[o]=r&&i.from!=h?new V(i.type,i.from,h,i.side):null,(this.parts[e]=r&&n.to!=f?new V(n.type,f,n.to,n.side):null)?this.parts.splice(e,0,p):this.parts[e]=p}let e=[];for(let n=t;n<this.parts.length;n++){let t=this.parts[n];t instanceof q&&e.push(t)}return e}findOpeningDelimiter(t){for(let e=this.parts.length-1;e>=0;e--){let n=this.parts[e];if(n instanceof V&&n.type==t)return e}return null}takeContent(t){let e=this.resolveMarkers(t);return this.parts.length=t,e}skipSpace(t){return u(this.text,t-this.offset)+this.offset}elt(t,e,n,r){return"string"==typeof t?_(this.parser.getNodeType(t),e,n,r):new F(t,e)}}function ts(t,e){if(!e.length)return t;if(!t.length)return e;let n=t.slice(),r=0;for(let t of e){for(;r<n.length&&n[r].to<t.to;)r++;if(r<n.length&&n[r].from<t.from){let e=n[r];e instanceof q&&(n[r]=new q(e.type,e.from,e.to,ts(e.children,[t])))}else n.splice(r++,0,t)}return n}let ti=[s.CodeBlock,s.ListItem,s.OrderedList,s.BulletList];class to{constructor(t,e){this.fragments=t,this.input=e,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,t.length&&(this.fragment=t[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(t,e){for(;this.fragment&&this.fragment.to<=t;)this.nextFragment();if(!this.fragment||this.fragment.from>(t?t-1:0))return!1;if(this.fragmentEnd<0){let t=this.fragment.to;for(;t>0&&"\n"!=this.input.read(t-1,t);)t--;this.fragmentEnd=t?t-1:0}let n=this.cursor;!n&&(n=this.cursor=this.fragment.tree.cursor()).firstChild();let r=t+this.fragment.offset;for(;n.to<=r;)if(!n.parent())return!1;for(;;){if(n.from>=r)return this.fragment.from<=e;if(!n.childAfter(r))return!1}}matches(t){let e=this.cursor.tree;return e&&e.prop(i.md.contextHash)==t}takeNodes(t){let e=this.cursor,n=this.fragment.offset,r=this.fragmentEnd-(this.fragment.openEnd?1:0),o=t.absoluteLineStart,a=o,l=t.block.children.length,h=a,f=l;for(;;){if(e.to-n>r){if(e.type.isAnonymous&&e.firstChild())continue;break}let o=ta(e.from-n,t.ranges);if(e.to-n<=t.ranges[t.rangeI].to)t.addNode(e.tree,o);else{let n=new i.mp(t.parser.nodeSet.types[s.Paragraph],[],[],0,t.block.hashProp);t.reusePlaceholders.set(n,e.tree),t.addNode(n,o)}if(e.type.is("Block")&&(0>ti.indexOf(e.type.id)?(a=e.to-n,l=t.block.children.length):(a=h,l=f,h=e.to-n,f=t.block.children.length)),!e.nextSibling())break}for(;t.block.children.length>l;)t.block.children.pop(),t.block.positions.pop();return a-o}}function ta(t,e){let n=t;for(let r=1;r<e.length;r++){let s=e[r-1].to,i=e[r].from;s<t&&(n-=i-s)}return n}let tl=(0,o.Gv)({"Blockquote/...":o.pJ.quote,HorizontalRule:o.pJ.contentSeparator,"ATXHeading1/... SetextHeading1/...":o.pJ.heading1,"ATXHeading2/... SetextHeading2/...":o.pJ.heading2,"ATXHeading3/...":o.pJ.heading3,"ATXHeading4/...":o.pJ.heading4,"ATXHeading5/...":o.pJ.heading5,"ATXHeading6/...":o.pJ.heading6,"Comment CommentBlock":o.pJ.comment,Escape:o.pJ.escape,Entity:o.pJ.character,"Emphasis/...":o.pJ.emphasis,"StrongEmphasis/...":o.pJ.strong,"Link/... Image/...":o.pJ.link,"OrderedList/... BulletList/...":o.pJ.list,"BlockQuote/...":o.pJ.quote,"InlineCode CodeText":o.pJ.monospace,"URL Autolink":o.pJ.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":o.pJ.processingInstruction,"CodeInfo LinkLabel":o.pJ.labelName,LinkTitle:o.pJ.string,Paragraph:o.pJ.content}),th=new R(new i.Lj($).extend(tl),Object.keys(H).map(t=>H[t]),Object.keys(H).map(t=>J[t]),Object.keys(H),[(t,e)=>S(e)>=0,(t,e)=>g(e)>=0,(t,e)=>m(e)>=0,(t,e)=>b(e,t,!0)>=0,(t,e)=>L(e,t,!0)>=0,(t,e)=>k(e,t,!0)>=0,(t,e)=>T(e,t,!0)>=0],p,Object.keys(W).map(t=>W[t]),Object.keys(W),[]);function tf(t){let{codeParser:e,htmlParser:n}=t;return{wrap:(0,i.FE)((t,r)=>{let i=t.type.id;if(e&&(i==s.CodeBlock||i==s.FencedCode)){let n="";if(i==s.FencedCode){let e=t.node.getChild(s.CodeInfo);e&&(n=r.read(e.from,e.to))}let o=e(n);if(o)return{parser:o,overlay:t=>t.type.id==s.CodeText}}else if(n&&(i==s.HTMLBlock||i==s.HTMLTag))return{parser:n,overlay:function(t,e,n){let r=[];for(let s=t.firstChild,i=e;;s=s.nextSibling){let t=s?s.from:n;if(t>i&&r.push({from:i,to:t}),!s)break;i=s.to}return r}(t.node,t.from,t.to)};return null})}}let tp={resolve:"Strikethrough",mark:"StrikethroughMark"},td={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":o.pJ.strikethrough}},{name:"StrikethroughMark",style:o.pJ.processingInstruction}],parseInline:[{name:"Strikethrough",parse(t,e,n){if(126!=e||126!=t.char(n+1)||126==t.char(n+2))return -1;let r=t.slice(n-1,n),s=t.slice(n+2,n+3),i=/\s|^$/.test(r),o=/\s|^$/.test(s),a=K.test(r),l=K.test(s);return t.addDelimiter(tp,n,n+2,!o&&(!l||i||a),!i&&(!a||o||l))},after:"Emphasis"}]};function tu(t,e,n=0,r,s=0){let i=0,o=!0,a=-1,l=-1,h=!1,f=()=>{r.push(t.elt("TableCell",s+a,s+l,t.parser.parseInline(e.slice(a,l),s+a)))};for(let p=n;p<e.length;p++){let n=e.charCodeAt(p);124!=n||h?(h||32!=n&&9!=n)&&(a<0&&(a=p),l=p+1):((!o||a>-1)&&i++,o=!1,r&&(a>-1&&f(),r.push(t.elt("TableDelimiter",p+s,p+s+1))),a=l=-1),h=!h&&92==n}return a>-1&&(i++,r&&f()),i}function tc(t,e){for(let n=e;n<t.length;n++){let e=t.charCodeAt(n);if(124==e)return!0;92==e&&n++}return!1}let tg=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;class tm{constructor(){this.rows=null}nextLine(t,e,n){if(null==this.rows){let r;if(this.rows=!1,(45==e.next||58==e.next||124==e.next)&&tg.test(r=e.text.slice(e.pos))){let s=[];tu(t,n.content,0,s,n.start)==tu(t,r,e.pos)&&(this.rows=[t.elt("TableHeader",n.start,n.start+n.content.length,s),t.elt("TableDelimiter",t.lineStart+e.pos,t.lineStart+e.text.length)])}}else if(this.rows){let n=[];tu(t,e.text,e.pos,n,t.lineStart),this.rows.push(t.elt("TableRow",t.lineStart+e.pos,t.lineStart+e.text.length,n))}return!1}finish(t,e){return!!this.rows&&(t.addLeafElement(e,t.elt("Table",e.start,e.start+e.content.length,this.rows)),!0)}}let tk={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":o.pJ.heading}},"TableRow",{name:"TableCell",style:o.pJ.content},{name:"TableDelimiter",style:o.pJ.processingInstruction}],parseBlock:[{name:"Table",leaf:(t,e)=>tc(e.content,0)?new tm:null,endLeaf(t,e,n){if(n.parsers.some(t=>t instanceof tm)||!tc(e.text,e.basePos))return!1;let r=t.scanLine(t.absoluteLineEnd+1).text;return tg.test(r)&&tu(t,e.text,e.basePos)==tu(t,r,e.basePos)},before:"SetextHeading"}]};class tx{nextLine(){return!1}finish(t,e){return t.addLeafElement(e,t.elt("Task",e.start,e.start+e.content.length,[t.elt("TaskMarker",e.start,e.start+3),...t.parser.parseInline(e.content.slice(3),e.start+3)])),!0}}let tb={defineNodes:[{name:"Task",block:!0,style:o.pJ.list},{name:"TaskMarker",style:o.pJ.atom}],parseBlock:[{name:"TaskList",leaf:(t,e)=>/^\[[ xX]\][ \t]/.test(e.content)&&"ListItem"==t.parentType().name?new tx:null,after:"SetextHeading"}]},tL=/(www\.)|(https?:\/\/)|([\w.+-]+@)|(mailto:|xmpp:)/gy,tS=/[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy,tC=/[\w-]+\.[\w-]+($|\/)/,ty=/[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy,tw=/\/[a-zA-Z\d@.]+/gy;function tA(t,e,n,r){let s=0;for(let i=e;i<n;i++)t[i]==r&&s++;return s}function tI(t,e){ty.lastIndex=e;let n=ty.exec(t);if(!n)return -1;let r=n[0][n[0].length-1];return"_"==r||"-"==r?-1:e+n[0].length-("."==r?1:0)}let tT=[tk,tb,td,{parseInline:[{name:"Autolink",parse(t,e,n){let r=n-t.offset;tL.lastIndex=r;let s=tL.exec(t.text),i=-1;if(!s)return -1;if(s[1]||s[2]){if((i=function(t,e){tS.lastIndex=e;let n=tS.exec(t);if(!n||tC.exec(n[0])[0].indexOf("_")>-1)return -1;let r=e+n[0].length;for(;;){let n=t[r-1],s;if(/[?!.,:*_~]/.test(n)||")"==n&&tA(t,e,r,")")>tA(t,e,r,"("))r--;else if(";"==n&&(s=/&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(t.slice(e,r))))r=e+s.index;else break}return r}(t.text,r+s[0].length))>-1&&t.hasOpenLink){let e=/([^\[\]]|\[[^\]]*\])*/.exec(t.text.slice(r,i));i=r+e[0].length}}else s[3]?i=tI(t.text,r):(i=tI(t.text,r+s[0].length))>-1&&"xmpp:"==s[0]&&(tw.lastIndex=i,(s=tw.exec(t.text))&&(i=s.index+s[0].length));return i<0?-1:(t.addElement(t.elt("URL",n,i+t.offset)),i+t.offset)}}]}];function tE(t,e,n){return(r,s,i)=>{if(s!=t||r.char(i+1)==t)return -1;let o=[r.elt(n,i,i+1)];for(let s=i+1;s<r.end;s++){let a=r.char(s);if(a==t)return r.addElement(r.elt(e,i,s+1,o.concat(r.elt(n,s,s+1))));if(92==a&&o.push(r.elt("Escape",s,s+++2)),d(a))break}return -1}}let tB={defineNodes:[{name:"Superscript",style:o.pJ.special(o.pJ.content)},{name:"SuperscriptMark",style:o.pJ.processingInstruction}],parseInline:[{name:"Superscript",parse:tE(94,"Superscript","SuperscriptMark")}]},tH={defineNodes:[{name:"Subscript",style:o.pJ.special(o.pJ.content)},{name:"SubscriptMark",style:o.pJ.processingInstruction}],parseInline:[{name:"Subscript",parse:tE(126,"Subscript","SubscriptMark")}]},tM={defineNodes:[{name:"Emoji",style:o.pJ.character}],parseInline:[{name:"Emoji",parse(t,e,n){let r;return 58==e&&(r=/^[a-zA-Z_0-9]+:/.exec(t.slice(n+1,t.end)))?t.addElement(t.elt("Emoji",n,n+1+r[0].length)):-1}}]}}}]);