(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function wr(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Zi={capitalizeFirstLetter:!1};function Dn(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function eo(t,e){return e.capitalizeFirstLetter?Dn(t):t}function to(t,e=Zi){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return eo(r,e)}function Kr(t){return t!==t.toUpperCase()}function no(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",l=s<i.length-1?i[s+1]:"",a=Kr(o)||Kr(l);return r===r.toLowerCase()||s===0||!a?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function ro({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const so=["january","february","march","april","may","june","july","august","september","october","november","december"];so.map(t=>t.slice(0,3));function _r(t){return t?t instanceof Error?t.message:String(t):""}function Ne(t){return t instanceof Error?t:new Error(_r(t))}function Ms(t){return!!t}function jn(t){return!!t&&typeof t=="object"}const Ur="Failed to compare objects using JSON.stringify";function Wr(t,e){return JSON.stringify(t)===JSON.stringify(e)}function xr(t,e){try{return t===e?!0:jn(t)&&jn(e)?Wr(Object.keys(t).sort(),Object.keys(e).sort())?Object.keys(t).every(r=>xr(t[r],e[r])):!1:Wr(t,e)}catch(n){const r=Ne(n);throw r.message.startsWith(Ur)||(r.message=`${Ur}: ${r.message}`),r}}const io=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function xe(t,e){return t?io.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function oo(t,e){return t&&e.every(n=>xe(t,n))}function re(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ao(t){return re(t).map(e=>t[e])}function Ls(t,e,n=!1,r={}){const s=re(t),i=new Set(re(e));if(!n){const o=s.filter(l=>!i.has(l));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!xe(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function l(c){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${c}`)}const a=t[o],u=e[o];r[o]||Bs(a,u,l,n,r[o]??{})})}function Bs(t,e,n,r,s){var l;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{xe(e,"constructor")&&(!xe(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(l=t==null?void 0:t.constructor)==null?void 0:l.name}" did not match expected constructor "${e.constructor}"`)}catch(a){if(a instanceof n)throw a}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((a,u)=>{if(e.map(h=>{try{Bs(a,h,n,r,s);return}catch(d){return new Error(`entry at index "${u}" did not match expected shape: ${_r(d)}`)}}).filter(Ms).length===e.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${e.join(", ")}"`)})):jn(e)&&Ls(t,e,r,s)}function Sr(t){return Array.isArray(t)?"array":typeof t}function en(t,e){return Sr(t)===e}function lo(t,e,n){if(!en(t,e))throw new TypeError(`'${n}' is of type '${Sr(t)}' but type '${e}' was expected.`)}function qr({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(en(n,"object")?Ls(r,n):lo(r,Sr(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function co(t,e){return re(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function uo(t,e){return co(t,n=>!e.includes(n))}function Le(t,e){let n=!1;const r=re(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(re(r).map(async o=>{const l=await r[o];r[o]=l})),s(r)}catch(o){i(o)}}):r}function tn(t){const e=zt();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ho(t){return!!(xe(t,"then")&&typeof t.then=="function")}class fo extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function mo(t,e){return new Promise(async(n,r)=>{const s=t===1/0?void 0:setTimeout(()=>{r(new fo(t))},t);try{const i=await e;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function zt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${zt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function po(t,e){try{return go(t,e),!0}catch{return!1}}function go(t,e,n){if(t.length<e)throw new Error(n?`'${n}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}const yo=globalThis.crypto;function vo(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return yo.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function te(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Er=t=>(...e)=>({_$litDirective$:t,values:e});let mn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bn;const nn=window,nt=nn.trustedTypes,Vr=nt?nt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Mn="$lit$",we=`lit$${(Math.random()+"").slice(9)}$`,Is="?"+we,bo=`<${Is}>`,rt=document,St=()=>rt.createComment(""),Et=t=>t===null||typeof t!="object"&&typeof t!="function",Fs=Array.isArray,wo=t=>Fs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",wn=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jr=/-->/g,Gr=/>/g,Pe=RegExp(`>|${wn}(?:([^\\s"'>=/]+)(${wn}*=${wn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yr=/'/g,Xr=/"/g,Ks=/^(?:script|style|textarea|title)$/i,_o=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),xo=_o(1),ge=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Qr=new WeakMap,Xe=rt.createTreeWalker(rt,129,null,!1),So=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=ct;for(let a=0;a<n;a++){const u=t[a];let c,h,d=-1,f=0;for(;f<u.length&&(o.lastIndex=f,h=o.exec(u),h!==null);)f=o.lastIndex,o===ct?h[1]==="!--"?o=Jr:h[1]!==void 0?o=Gr:h[2]!==void 0?(Ks.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Pe):h[3]!==void 0&&(o=Pe):o===Pe?h[0]===">"?(o=s??ct,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?Pe:h[3]==='"'?Xr:Yr):o===Xr||o===Yr?o=Pe:o===Jr||o===Gr?o=ct:(o=Pe,s=void 0);const v=o===Pe&&t[a+1].startsWith("/>")?" ":"";i+=o===ct?u+bo:d>=0?(r.push(c),u.slice(0,d)+Mn+u.slice(d)+we+v):u+we+(d===-2?(r.push(void 0),a):v)}const l=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Vr!==void 0?Vr.createHTML(l):l,r]};let Ln=class Us{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const l=e.length-1,a=this.parts,[u,c]=So(e,n);if(this.el=Us.createElement(u,r),Xe.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=Xe.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(Mn)||d.startsWith(we)){const f=c[o++];if(h.push(d),f!==void 0){const v=s.getAttribute(f.toLowerCase()+Mn).split(we),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:g[2],strings:v,ctor:g[1]==="."?$o:g[1]==="?"?Po:g[1]==="@"?Co:pn})}else a.push({type:6,index:i})}for(const d of h)s.removeAttribute(d)}if(Ks.test(s.tagName)){const h=s.textContent.split(we),d=h.length-1;if(d>0){s.textContent=nt?nt.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],St()),Xe.nextNode(),a.push({type:2,index:++i});s.append(h[d],St())}}}else if(s.nodeType===8)if(s.data===Is)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(we,h+1))!==-1;)a.push({type:7,index:i}),h+=we.length-1}i++}}static createElement(e,n){const r=rt.createElement("template");return r.innerHTML=e,r}};function st(t,e,n=t,r){var s,i,o,l;if(e===ge)return e;let a=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const u=Et(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(t),a._$AT(t,n,r)),r!==void 0?((o=(l=n)._$Co)!==null&&o!==void 0?o:l._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=st(t,a._$AS(t,e.values),a,r)),e}let Eo=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:rt).importNode(r,!0);Xe.currentNode=i;let o=Xe.nextNode(),l=0,a=0,u=s[0];for(;u!==void 0;){if(l===u.index){let c;u.type===2?c=new $r(o,o.nextSibling,this,e):u.type===1?c=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(c=new To(o,this,e)),this.u.push(c),u=s[++a]}l!==(u==null?void 0:u.index)&&(o=Xe.nextNode(),l++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},$r=class Ws{constructor(e,n,r,s){var i;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=st(this,e,n),Et(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==ge&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wo(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==M&&Et(this._$AH)?this._$AA.nextSibling.data=e:this.T(rt.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ln.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new Eo(i,this),l=o.v(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let n=Qr.get(e.strings);return n===void 0&&Qr.set(e.strings,n=new Ln(e)),n}k(e){Fs(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Ws(this.S(St()),this.S(St()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},pn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=st(this,e,n,0),o=!Et(e)||e!==this._$AH&&e!==ge,o&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=st(this,l[r+a],n,a),u===ge&&(u=this._$AH[a]),o||(o=!Et(u)||u!==this._$AH[a]),u===M?e=M:e!==M&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}o&&!s&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$o=class extends pn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}};const Ao=nt?nt.emptyScript:"";let Po=class extends pn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,Ao):this.element.removeAttribute(this.name)}},Co=class extends pn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=st(this,e,n,0))!==null&&r!==void 0?r:M)===ge)return;const s=this._$AH,i=e===M&&s!==M||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==M&&(s===M||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},To=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){st(this,e)}};const Zr=nn.litHtmlPolyfillSupport;Zr==null||Zr(Ln,$r),((bn=nn.litHtmlVersions)!==null&&bn!==void 0?bn:nn.litHtmlVersions=[]).push("2.7.0");const ko=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const l=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new $r(e.insertBefore(St(),l),l,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bn=class extends mn{constructor(e){if(super(e),this.it=M,e.type!==Hs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===M||e==null)return this._t=void 0,this.it=e;if(e===ge)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Bn.directiveName="unsafeHTML",Bn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let es=class extends Bn{};es.directiveName="unsafeSVG",es.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zo(t,e,n){return t?e():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=window,Ar=Wt.ShadowRoot&&(Wt.ShadyCSS===void 0||Wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pr=Symbol(),ts=new WeakMap;let qs=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Ar&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=ts.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ts.set(n,e))}return e}toString(){return this.cssText}};const ae=t=>new qs(typeof t=="string"?t:t+"",void 0,Pr),Vs=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new qs(n,t,Pr)},Oo=(t,e)=>{Ar?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=Wt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},ns=Ar?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return ae(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _n;const rn=window,rs=rn.trustedTypes,Ro=rs?rs.emptyScript:"",ss=rn.reactiveElementPolyfillSupport,Hn={toAttribute(t,e){switch(e){case Boolean:t=t?Ro:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Js=(t,e)=>e!==t&&(e==e||t==t),xn={attribute:!0,type:String,converter:Hn,reflect:!1,hasChanged:Js};let Ve=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=xn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(ns(s))}else e!==void 0&&n.push(ns(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Oo(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=xn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Hn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Hn;this._$El=i,this[i]=l.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Js)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ve.finalized=!0,Ve.elementProperties=new Map,Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},ss==null||ss({ReactiveElement:Ve}),((_n=rn.reactiveElementVersions)!==null&&_n!==void 0?_n:rn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sn,En;let mt=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ko(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ge}};mt.finalized=!0,mt._$litElement$=!0,(Sn=globalThis.litElementHydrateSupport)===null||Sn===void 0||Sn.call(globalThis,{LitElement:mt});const is=globalThis.litElementPolyfillSupport;is==null||is({LitElement:mt});((En=globalThis.litElementVersions)!==null&&En!==void 0?En:globalThis.litElementVersions=[]).push("3.3.0");var No=globalThis&&globalThis.__esDecorate||function(t,e,n,r,s,i){function o(m){if(m!==void 0&&typeof m!="function")throw new TypeError("Function expected");return m}for(var l=r.kind,a=l==="getter"?"get":l==="setter"?"set":"value",u=!e&&t?r.static?t:t.prototype:null,c=e||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),h,d=!1,f=n.length-1;f>=0;f--){var v={};for(var g in r)v[g]=g==="access"?{}:r[g];for(var g in r.access)v.access[g]=r.access[g];v.addInitializer=function(m){if(d)throw new TypeError("Cannot add initializers after decoration has completed");i.push(o(m||null))};var y=(0,n[f])(l==="accessor"?{get:c.get,set:c.set}:c[a],v);if(l==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(h=o(y.get))&&(c.get=h),(h=o(y.set))&&(c.set=h),(h=o(y.init))&&s.push(h)}else(h=o(y))&&(l==="field"?s.push(h):c[a]=h)}u&&Object.defineProperty(u,r.name,c),d=!0},Do=globalThis&&globalThis.__runInitializers||function(t,e,n){for(var r=arguments.length>2,s=0;s<e.length;s++)n=r?e[s].call(t,n):e[s].call(t);return r?n:void 0},jo=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Mo(){function t(e,n){return e}return t}let Gs=(()=>{let t=[Mo()],e,n=[],r;return r=class extends mt{},jo(r,"DeclarativeElement"),No(null,e={value:r},t,{kind:"class",name:r.name},null,n),r=e.value,Do(r,n),r})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Ys(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):Lo(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $n;(($n=window.HTMLSlotElement)===null||$n===void 0?void 0:$n.prototype.assignedElements)!=null;const In=Symbol("this-is-an-element-vir-declarative-element"),Cr=Symbol("key for ignoring inputs not having been set yet"),Bo={[Cr]:!0};function Xs(t,e){const n=t.instanceState;re(e).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);Ys()(t,r),"instanceInputs"in t?t.instanceInputs[r]=e[r]:t[r]=e[r]}),"instanceInputs"in t&&re(t.instanceInputs).forEach(r=>{r in e||(t.instanceInputs[r]=void 0)}),Qs(t)}function Qs(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function Zs(t,e){return Fn(t,e),t.element}function Fn(t,e){if(t.type!==Hs.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function Tr(t,e){return e?os(t,e):os(void 0,t)}const os=Er(class extends mn{constructor(t){super(t),this.element=Zs(t,"assign")}render(t,e){return Ho(t,this.element,e),ge}});function Ho(t,e,n){Xs(e,n)}function ei(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof Gs?!0:ei(n)}function ti(t,e){return`${t}-${no(e)}`}function Io(t,e){return e?Le(e,n=>ae(`--${ti(t,String(n))}`)):{}}function Fo(t,e){return t?Le(t,(n,r)=>{const s=e[n];return ae(`var(${s}, ${r})`)}):{}}class Ko extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function ni(){return t=>{var e;return e=class extends Ko{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function qt(){return ni()}function Uo(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=ni()(n);return e[n]=r,e},{}):{}}const Kn="_is_element_vir_observable_property_handler_instance",Un="_is_element_vir_observable_property_handler_creator";function Wo(t){return xe(t,Un)&&t[Un]===!0}function qo(t){return xe(t,Kn)&&t[Kn]===!0}function as(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function ls(t,e){const n=t;function r(i,o){return e&&as(o,t,t.tagName),n[o]}return new Proxy({},{get:r,set:(i,o,l)=>{e&&as(o,t,t.tagName);const a=t.observablePropertyHandlerMap[o];function u(c){i[o]=c,n[o]=c}return Wo(l)&&(l=l.init()),qo(l)?(a&&l!==a?(l.addMultipleListeners(a.getAllListeners()),a.removeAllListeners()):l.addListener(!0,c=>{u(c)}),t.observablePropertyHandlerMap[o]=l):a?a.setValue(l):u(l),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Vo(t,e){return e?Le(e,n=>ti(t,String(n))):{}}function Jo({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:Le(t,(r,s)=>ae(`:host(.${s})`)),hostClassNames:Le(t,(r,s)=>ae(s)),cssVarNames:e,cssVarValues:n}}function Go({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&re(e).forEach(i=>{const o=e[i],l=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(l):t.classList.remove(l))})}function Yo(t,e){function n(s){re(s).forEach(i=>{const o=s[i];t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Xo=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function kr(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const n=Uo(t.events),r=Vo(t.tagName,t.hostClasses),s=Io(t.tagName,t.cssVars),i=Fo(t.cssVars,s),o={...Bo,...t.options},l=typeof t.styles=="function"?t.styles(Jo({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Vs``,a=t.renderCallback,u=(e=class extends Gs{createRenderParams(){return Yo(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Qs(this)}render(){try{ei(this)&&!this.haveInputsBeenSet&&!o[Cr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${Tr.name}" directive on it. If no inputs are intended, use "${kr.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const h=a(c);return Go({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},h}catch(c){const h=Ne(c);throw h.message=`Failed to render '${t.tagName}': ${h.message}`,h}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Xs(this,c)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=ls(this,!1),this.instanceState=ls(this,!0);const c=t.stateInit||{};re(c).forEach(h=>{Ys()(this,h),this.instanceState[h]=c[h]}),this.definition=u}},Xo(e,"anonymousClass"),e.tagName=t.tagName,e.styles=l,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=a,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(u,{[In]:{value:!0,writable:!1},name:{value:to(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof u,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,u),u}function ri(){return t=>kr({...t,options:{[Cr]:!1},...t.options})}function pt(t,e){return Qo(t,e)}const Qo=Er(class extends mn{constructor(t){super(t),this.element=Zs(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ge}}),cs="onDomCreated",us=Er(class extends mn{constructor(t){super(t),Fn(t,cs)}update(t,[e]){Fn(t,cs);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function Wn(t,e,n,r){return t instanceof Error?r?r(t):_r(t):ho(t)?e:n?n(t):t}function hs(t,e,n){return zo(t,()=>e,()=>n)}var T=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},ie=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},q,Te,_e,ze,se,Je,ee,Qe,qn,Vn,gt,si;const Y=Symbol("not set");class Zo{constructor(e){q.add(this),Te.set(this,Y),_e.set(this,Y),ze.set(this,Y),se.set(this,new Set),Je.set(this,void 0),ee.set(this,zt()),this[si]=!0,this.resetValue(e)}resetValue(e){T(this,q,"m",gt).call(this),e!==Y&&(e instanceof Promise?this.setValue({newPromise:e}):this.setValue({resolvedValue:e}))}setValue(e){if("createPromise"in e){if(T(this,Te,"f")===Y||!xr(e.trigger,T(this,Te,"f"))){ie(this,Te,e.trigger,"f");const n=e.createPromise();T(this,q,"m",qn).call(this,n),T(this,q,"m",Qe).call(this)}}else"newPromise"in e?(T(this,Te,"f"),T(this,q,"m",qn).call(this,e.newPromise),T(this,q,"m",Qe).call(this)):"resolvedValue"in e?T(this,q,"m",Vn).call(this,e.resolvedValue):"forceUpdate"in e?(ie(this,Te,Y,"f"),ie(this,_e,Y,"f"),T(this,ee,"f").isSettled()||T(this,ee,"f").reject("Canceled by force update"),T(this,q,"m",gt).call(this),T(this,q,"m",Qe).call(this)):this.resetValue(e)}getValue(){if(T(this,ee,"f").isSettled()){if(T(this,ze,"f")!==Y)return T(this,ze,"f");if(T(this,_e,"f")===Y)throw new Error("Promise says it has settled but resolution value was not set!");return T(this,_e,"f")}else return T(this,ee,"f").promise}addListener(e,n){T(this,se,"f").add(n),e&&n(this.getValue())}addMultipleListeners(e){e.forEach(n=>T(this,se,"f").add(n))}getAllListeners(){return T(this,se,"f")}removeListener(e){return T(this,se,"f").has(e)?(T(this,se,"f").delete(e),!0):!1}removeAllListeners(){const e=T(this,se,"f").size;return T(this,se,"f").clear(),e}}Te=new WeakMap,_e=new WeakMap,ze=new WeakMap,se=new WeakMap,Je=new WeakMap,ee=new WeakMap,q=new WeakSet,si=Kn,Qe=function(){const e=this.getValue();T(this,se,"f").forEach(n=>{n(e)})},qn=function(e){e!==T(this,Je,"f")&&(ie(this,_e,Y,"f"),ie(this,ze,Y,"f"),ie(this,Je,e,"f"),T(this,ee,"f").isSettled()&&T(this,q,"m",gt).call(this),e.then(n=>{T(this,Je,"f")===e&&T(this,q,"m",Vn).call(this,n)}).catch(n=>{T(this,Je,"f")===e&&(ie(this,ze,Ne(n),"f"),T(this,ee,"f").promise.catch(()=>{}),T(this,ee,"f").reject(n),T(this,q,"m",Qe).call(this))}))},Vn=function(e){e!==T(this,_e,"f")&&(ie(this,ze,Y,"f"),ie(this,_e,e,"f"),T(this,ee,"f").isSettled()&&T(this,q,"m",gt).call(this),T(this,ee,"f").resolve(e),T(this,q,"m",Qe).call(this))},gt=function(){ie(this,ee,zt(),"f")};function ii(...t){const e=po(t,1)?t[0]:Y;return{[Un]:!0,init(){return new Zo(e)}}}function ea(t){const{assertInputs:e,transformInputs:n}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(r=>r)};return{defineElement:()=>r=>(e(r),ri()(n(r))),defineElementNoInputs:r=>(e(r),kr(n(r)))}}function ta(t,e){return t.filter((n,r)=>!e.includes(r))}function oi(t){return t.filter(e=>oo(e,["tagName",In])&&!!e.tagName&&!!e[In])}const ai=new WeakMap;function na(t,e){var s;const n=oi(e);return(s=li(ai,[t,...n]).value)==null?void 0:s.template}function ra(t,e,n){const r=oi(e);return ui(ai,[t,...r],n)}function li(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=ci(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?li(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function ci(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function ui(t,e,n,r=0){const{currentTemplateAndNested:s,currentKey:i,reason:o}=ci(t,e,r);if(!i)return{result:!1,reason:o};const l=s??{nested:void 0,template:void 0};if(s||t.set(i,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const a=l.nested??new WeakMap;return l.nested||(l.nested=a),ui(a,e,n,r+1)}function hi(t,e,n){return{name:t,check:e,transform:n}}const sa=new WeakMap;function di(t,e,n){const r=na(t,e),s=r??n();if(!r){const o=ra(t,e,s);if(o.result)sa.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=ta(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function fi(t,e,n,r){const s=[],i=[],o=[];return t.forEach((a,u)=>{var y;const c=s.length-1,h=s[c],d=u-1,f=e[d];let v;r&&r(a),typeof h=="string"&&(v=(y=n.find(m=>m.check(h,a,f)))==null?void 0:y.transform,v&&(s[c]=h+v(f)+a,o.push(d))),v||s.push(a);const g=t.raw[u];v?i[c]=i[c]+v(f)+g:i.push(g)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function mi(t){return xe(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const ia=[hi("tag name css selector interpolation",(t,e,n)=>mi(n),t=>t.tagName)];function oa(t,e){return fi(t,e,ia)}function Ye(t,...e){const n=di(t,e,()=>oa(t,e));return Vs(n.strings,...n.values)}const aa=[hi("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=mi(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function la(t){}function ca(t){return fi(t.strings,t.values,aa,la)}function H(t,...e){const n=xo(t,...e),r=di(t,e,()=>ca(n));return{...n,strings:r.strings,values:r.values}}function ua(t,e){return t<e}function ha(t,e){return t>e}const ds={width:250,height:250};function da({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?ha:ua)(e.width/e.height,t.width/t.height)?"width":"height"}function An({box:t,constraint:e,constraintType:n}){const r=da({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function pi({box:t,ratio:e}){return Le(t,(n,r)=>r*e)}function Jn({box:t,min:e,max:n}){return Le(t,(r,s)=>ro({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function gi({min:t,max:e,box:n}){const r=yi({min:t,max:e,box:n}),s=pi({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||ds.height),width:Math.floor(s.width||(t==null?void 0:t.width)||ds.width)}}function yi({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?An({box:n,constraint:t,constraintType:"min"}):1,s=e?An({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=pi({ratio:i,box:n});return(t?An({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function Oe(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,l)=>{const a=fa(o,r[l]);return`${o}${a}`});return wr(i.join(""))}function fa(t,e){return e._$litType$!=null||e._$litDirective$!=null?Oe(e):Array.isArray(e)?e.map(r=>Oe(r)).join(""):t.endsWith("=")?`"${e}"`:e}function ma(t){const e=pa(t);return en(e,"object")||en(e,"array")}function pa(t){const e=qr({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=ga(t);return qr({jsonString:n,errorHandler:()=>{}})}function ga(t){return wr(t).replace(/,\s*([}\]])/,"$1")}var k=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(k||{});const ya=["text","json"];function fs(t){return ya.includes(t)}async function va(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":ma(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function ba({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Oe(H`
            <img src=${n} />
        `):t==="video"?Oe(H`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Oe(H`
                <div class="text-wrapper">
                    <p class="text">
                        ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):t==="audio"?Oe(H`
                <audio controls src=${n}></audio>
            `):e}function wa(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}else if(e==="html")return t.replaceAll(/console\.\w+/g,"doNothing");return t}async function ms({imageUrl:t,blockAutoPlay:e,textTransformer:n=r=>r}){var u;const r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch '${t}'`);const s=((u=r==null?void 0:r.headers.get("Content-Type"))==null?void 0:u.toLowerCase())??"",i=await(r==null?void 0:r.text())??"",o=r?await va(s,i):"image",l=n(wa(i??"",o));return{templateString:ba({imageText:l,imageType:o,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:o}}class Gn extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let _a=!1;function xa(){return _a}var Be;(function(t){t.FromParent="from-parent",t.FromChild="from-child"})(Be||(Be={}));const ke=Symbol("any-origin");function vi(t,e){try{return Sa(t,e),!0}catch{return!1}}function Sa(t,e){if(t===ke)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}const Ea=Symbol("dangerDisableSecurityWarningsSymbol");function $a(t,e,n){return n.type===t&&n.direction===e}function Aa(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function Pa({message:t,verifyChildData:e,iframeElement:n},r,s,i){if(!n)throw new Error("No iframe element was provided.");let o=0,l=!1,a,u,c,h=!1;const d={...t,direction:Be.FromParent,messageId:vo(32)},f=t.type,v=r===ke?["*"]:r;function g(m){try{if(!vi(r,m))return;const p=m.data;if(p.type==="error")throw new Error(`Child threw an error: ${p.data}`);if(xa(),p&&h&&$a(f,Be.FromChild,p)&&p.messageId===d.messageId){let b=!1;try{b=e?e(p.data):!0}catch{}if(!b)return;l=!0,u=m,a=p}}catch(p){c=Ne(p)}}globalThis.addEventListener("message",g);const y=Date.now();for(;!l&&Date.now()-y<s&&!c;){if(!n.isConnected)throw new Gn;const m=n.contentWindow;m&&(h=!0,v.forEach(p=>{try{m.postMessage(d,{targetOrigin:p})}catch{}})),await tn(i||Aa(o)),o++}if(globalThis.removeEventListener("message",g),c)throw c;if(!l)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${Math.ceil(s/1e3)}' seconds).`);if(!u)throw new Error("Never got message event from child but received a valid response");return{data:a==null?void 0:a.data,event:u}}function bi({allowedOrigins:t,timeoutMs:e=1e4,...n}){if(t!==ke&&t.includes("*")&&(t=ke),t===ke&&!n[Ea]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==ke&&!t.length)throw new Error(`No allowed origins were provide to ${bi.name}. At least one must be provided.`);const r=t===ke?["*"]:t;return{async sendMessageToChild(s){if(s.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await Pa(s,t,s.timeoutMs||e,s.intervalMs)},listenForParentMessages(s){globalThis.addEventListener("message",async i=>{if(!vi(t,i))return;const o=i.data,l=await s({...o,originalEvent:i}),a={type:o.type,direction:Be.FromChild,data:l,messageId:o.messageId};r.forEach(u=>{try{globalThis.parent.postMessage(a,{targetOrigin:u})}catch{}})})}}}var Z=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Z||{}),F=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(F||{});const he=bi({allowedOrigins:[window.location.origin]});async function Ca(t,e){const n=zt();t.onload=()=>{n.resolve()};try{await he.sendMessageToChild({message:{type:F.Ready},iframeElement:t,timeoutMs:e})}catch{await n.promise,await he.sendMessageToChild({message:{type:F.Ready},iframeElement:t,timeoutMs:e})}}async function Ta({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o,timeoutMs:l}){var u;await Ca(r,l),i&&await he.sendMessageToChild({message:{type:F.ForceSize,data:i},iframeElement:r,timeoutMs:l});const a=o??(await he.sendMessageToChild({message:{type:F.SendSize},iframeElement:r,timeoutMs:l,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await wi({min:t,max:e,imageDimensions:a,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:l}),((u=r.contentWindow)==null?void 0:u.document.documentElement.outerHTML)??""}async function wi({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:l,timeoutMs:a}){const u=r.shadowRoot.querySelector(".frame-constraint");if(!(u instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c={min:t,max:e,box:o??n},h=fs(i.imageType)?Jn(c):gi(c);u.style.width=te(Math.floor(h.width)),u.style.height=te(Math.floor(h.height));const d=Jn({min:t,max:e,box:h});h.height<d.height?r.classList.add(Z.VerticallyCenter):r.classList.remove(Z.VerticallyCenter),r.style.width=te(d.width),r.style.height=te(d.height);const f=yi({min:t,max:e,box:o??n});if(l){if(f>3?await he.sendMessageToChild({message:{type:F.SendScalingMethod,data:"pixelated"},iframeElement:s,timeoutMs:a}):await he.sendMessageToChild({message:{type:F.SendScalingMethod,data:"default"},iframeElement:s,timeoutMs:a}),await he.sendMessageToChild({message:{type:F.SizeDetermined,data:h},iframeElement:s,timeoutMs:a}),i.imageType===k.Html){const v=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},g={width:f*v.width,height:f*v.height};await he.sendMessageToChild({message:{type:F.SendScale,data:g},iframeElement:s,timeoutMs:a})}else if(fs(i.imageType)){const v=o??n;if(v.height<h.height){const g=h.width/v.width,y=h.height/v.height,m=Math.min(g,y);await he.sendMessageToChild({message:{type:F.SendScale,data:{height:m,width:m}},iframeElement:s,timeoutMs:a})}}}}const jt={x:16,y:8};var ps=Object.freeze,ka=Object.defineProperty,gs=(t,e)=>ps(ka(t,"raw",{value:ps(e||t.slice())})),ys,vs;function za(t,e,n){const r=Math.random(),s=H(ys||(ys=gs([`
        <script>
            function doNothing() {}
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(
                    /s*(?:\\-?[\\d\\.]+)\\s+(?:\\-?[\\d\\.]+)\\s+(\\-?[\\d\\.]+)\\s+(\\-?[\\d\\.]+)\\s*/,
                );
                const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                const width =
                    Number(svgElement.getAttribute('width')?.replace(/px$/, '')) || viewBoxWidth;
                const height =
                    Number(svgElement.getAttribute('height')?.replace(/px$/, '')) || viewBoxHeight;
                if (isNaN(width) || isNaN(height)) {
                    return undefined;
                } else {
                    return {width, height};
                }
            }

            function extractHtmlSizeFromTopLevelElements(element, recurse) {
                if (!element) {
                    return undefined;
                }

                let size;
                const rawWidth = window.getComputedStyle(element).width;
                const rawHeight = window.getComputedStyle(element).height;
                const width = Number(rawWidth.replace(/px$/, ''));
                const height = Number(rawHeight.replace(/px$/, ''));

                if (width && height) {
                    size = {height, width};
                }

                if (size) {
                    if (!size.height || !size.width) {
                        throw new Error(
                            'Got invalid html size for ' +
                                imageData.imageUrl +
                                JSON.stringify(size),
                        );
                    }
                    return size;
                } else if (recurse) {
                    return extractHtmlSizeFromTopLevelElements(element.nextElementSibling, true);
                } else {
                    return undefined;
                }
            }

            function extractHtmlSizeFromAnything() {
                const allElements = Array.from(document.querySelectorAll('*'));
                let biggestSize = {
                    height: 0,
                    width: 0,
                };
                allElements.forEach((child) => {
                    const childSize = extractHtmlSizeFromTopLevelElements(child);
                    if (childSize) {
                        if (childSize.width > biggestSize.width) {
                            biggestSize.width = childSize.width;
                        }
                        if (childSize.height > biggestSize.height) {
                            biggestSize.height = childSize.height;
                        }
                    }
                });

                return {
                    width: biggestSize.width || 250,
                    height: biggestSize.height || 250,
                };
            }

            function getHtmlSize(element = document.body) {
                const query = '`,`' || 'body > *';
                const extractSizeFromHere = document.querySelector(query);
                const size =
                    extractHtmlSizeFromTopLevelElements(extractSizeFromHere, true) ??
                    extractHtmlSizeFromAnything();

                return size;
            }

            function getSvgSize() {
                if (forcedFinalImageSize) {
                    const elements = document.body.querySelectorAll('*');
                    elements.forEach((element) =>
                        element.setAttribute('preserveAspectRatio', 'none'),
                    );
                }

                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElementWithSize = svgElements.find(
                    (svgElement) => !!extractSvgSize(svgElement),
                );

                if (!svgElementWithSize) {
                    return {width: 1024, height: 1024};
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElementWithSize);

                if (!svgElementWithSize.getAttribute('viewBox')) {
                    svgElementWithSize.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElementWithSize.removeAttribute('width');
                svgElementWithSize.removeAttribute('height');
                svgElementWithSize.style.removeProperty('width');
                svgElementWithSize.style.removeProperty('height');

                return {width, height};
            }

            function getVideoSize() {
                const video = document.querySelector('video');

                const size = {
                    width: video.videoWidth,
                    height: video.videoHeight,
                };

                return size;
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            function getTextSize() {
                const textWrapper = document.querySelector('.text-wrapper');

                const size = {
                    width: textWrapper.clientWidth,
                    height: textWrapper.clientHeight,
                };

                return size;
            }

            function getAudioSize() {
                const audioElement = document.querySelector('audio');

                const size = {
                    width: audioElement.clientWidth,
                    height: audioElement.clientHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                `,`: getSvgSize,
                `,`: getHtmlSize,
                `,`: getImageSize,
                `,`: getVideoSize,
                `,`: getTextSize,
                `,`: getTextSize,
                `,`: getAudioSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

            function getSize() {
                return sizeGrabbers[imageType]();
            }

            function calculateOneLineHeight() {
                const span = document.createElement('span');
                span.innerHTML = 'hi';
                span.style.width = '200px';
                span.style.position = 'absolute';
                span.style.visibility = 'hidden';
                span.style.top = '0';
                span.style.left = '0';
                span.style.pointerEvents = 'none';
                document.body.appendChild(span);
                const height = span.clientHeight;
                span.remove();

                return height;
            }

            globalThis.addEventListener('message', async (messageEvent) => {
                const message = messageEvent.data;

                if (message.direction === '`,`') {
                    return;
                }

                function sendMessageToParent(data) {
                    const messageForParent = {
                        type: message.type,
                        direction: '`,`',
                        data,
                        messageId: message.messageId,
                    };
                    globalThis.parent.postMessage(messageForParent);
                }

                switch (message.type) {
                    case '`,`': {
                        if (!!document.querySelector('body')) {
                            sendMessageToParent();
                        }
                        return;
                    }
                    case '`,`': {
                        const scaleDimensions = message.data;

                        document
                            .querySelector('html')
                            .style.setProperty(
                                'transform',
                                'scaleX(' +
                                    scaleDimensions.width +
                                    ') scaleY(' +
                                    scaleDimensions.height +
                                    ')',
                            );
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        if (message.data === 'pixelated') {
                            document.body.classList.add('pixelated');
                        } else {
                            document.body.classList.remove('pixelated');
                        }
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        try {
                            await executeBeforeSizing();
                            const size = getSize();

                            sendMessageToParent(size);
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        try {
                            forcedFinalImageSize = message.data;
                            getSize();
                            sendMessageToParent();
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        if (
                            imageType === '`,`' ||
                            imageType === '`,`'
                        ) {
                            const size = getSize();

                            if (size.height > message.data.height) {
                                const oneLine = calculateOneLineHeight();
                                const totalLines = Math.floor(
                                    (message.data.height - 2 * `,`) / oneLine,
                                );
                                const totalHeight = oneLine * totalLines;
                                const textElement = document.querySelector('.text');
                                textElement.style.height = totalHeight + 'px';
                                textElement.style.setProperty('-webkit-line-clamp', totalLines);
                            }

                            document.documentElement.style.setProperty(
                                'justify-content',
                                size.height < message.data.height ? 'center' : 'flex-start',
                            );
                        }
                        sendMessageToParent();
                        return;
                    }
                    default: {
                        sendMessageToParent();
                        return;
                    }
                }
            });

            function muteEverything() {
                const videoElements = Array.from(document?.body?.querySelectorAll('video') ?? []);
                const audioElements = Array.from(document?.body?.querySelectorAll('audio') ?? []);
                [
                    ...videoElements,
                    ...audioElements,
                ].forEach((videoElement) => {
                    videoElement.setAttribute('muted', true);
                    videoElement.muted = true;
                });
            }

            if (imageType !== '`,`') {
                try {
                    muteEverything();
                    const mutationObserver = new MutationObserver(muteEverything);
                    mutationObserver.observe(document, {childList: true, subtree: true});
                } catch (error) {
                    console.error(error);
                }
            }
        <\/script>
    `],[`
        <script>
            function doNothing() {}
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(
                    /s*(?:\\\\-?[\\\\d\\\\.]+)\\\\s+(?:\\\\-?[\\\\d\\\\.]+)\\\\s+(\\\\-?[\\\\d\\\\.]+)\\\\s+(\\\\-?[\\\\d\\\\.]+)\\\\s*/,
                );
                const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                const width =
                    Number(svgElement.getAttribute('width')?.replace(/px$/, '')) || viewBoxWidth;
                const height =
                    Number(svgElement.getAttribute('height')?.replace(/px$/, '')) || viewBoxHeight;
                if (isNaN(width) || isNaN(height)) {
                    return undefined;
                } else {
                    return {width, height};
                }
            }

            function extractHtmlSizeFromTopLevelElements(element, recurse) {
                if (!element) {
                    return undefined;
                }

                let size;
                const rawWidth = window.getComputedStyle(element).width;
                const rawHeight = window.getComputedStyle(element).height;
                const width = Number(rawWidth.replace(/px$/, ''));
                const height = Number(rawHeight.replace(/px$/, ''));

                if (width && height) {
                    size = {height, width};
                }

                if (size) {
                    if (!size.height || !size.width) {
                        throw new Error(
                            'Got invalid html size for ' +
                                imageData.imageUrl +
                                JSON.stringify(size),
                        );
                    }
                    return size;
                } else if (recurse) {
                    return extractHtmlSizeFromTopLevelElements(element.nextElementSibling, true);
                } else {
                    return undefined;
                }
            }

            function extractHtmlSizeFromAnything() {
                const allElements = Array.from(document.querySelectorAll('*'));
                let biggestSize = {
                    height: 0,
                    width: 0,
                };
                allElements.forEach((child) => {
                    const childSize = extractHtmlSizeFromTopLevelElements(child);
                    if (childSize) {
                        if (childSize.width > biggestSize.width) {
                            biggestSize.width = childSize.width;
                        }
                        if (childSize.height > biggestSize.height) {
                            biggestSize.height = childSize.height;
                        }
                    }
                });

                return {
                    width: biggestSize.width || 250,
                    height: biggestSize.height || 250,
                };
            }

            function getHtmlSize(element = document.body) {
                const query = '`,`' || 'body > *';
                const extractSizeFromHere = document.querySelector(query);
                const size =
                    extractHtmlSizeFromTopLevelElements(extractSizeFromHere, true) ??
                    extractHtmlSizeFromAnything();

                return size;
            }

            function getSvgSize() {
                if (forcedFinalImageSize) {
                    const elements = document.body.querySelectorAll('*');
                    elements.forEach((element) =>
                        element.setAttribute('preserveAspectRatio', 'none'),
                    );
                }

                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElementWithSize = svgElements.find(
                    (svgElement) => !!extractSvgSize(svgElement),
                );

                if (!svgElementWithSize) {
                    return {width: 1024, height: 1024};
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElementWithSize);

                if (!svgElementWithSize.getAttribute('viewBox')) {
                    svgElementWithSize.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElementWithSize.removeAttribute('width');
                svgElementWithSize.removeAttribute('height');
                svgElementWithSize.style.removeProperty('width');
                svgElementWithSize.style.removeProperty('height');

                return {width, height};
            }

            function getVideoSize() {
                const video = document.querySelector('video');

                const size = {
                    width: video.videoWidth,
                    height: video.videoHeight,
                };

                return size;
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            function getTextSize() {
                const textWrapper = document.querySelector('.text-wrapper');

                const size = {
                    width: textWrapper.clientWidth,
                    height: textWrapper.clientHeight,
                };

                return size;
            }

            function getAudioSize() {
                const audioElement = document.querySelector('audio');

                const size = {
                    width: audioElement.clientWidth,
                    height: audioElement.clientHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                `,`: getSvgSize,
                `,`: getHtmlSize,
                `,`: getImageSize,
                `,`: getVideoSize,
                `,`: getTextSize,
                `,`: getTextSize,
                `,`: getAudioSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

            function getSize() {
                return sizeGrabbers[imageType]();
            }

            function calculateOneLineHeight() {
                const span = document.createElement('span');
                span.innerHTML = 'hi';
                span.style.width = '200px';
                span.style.position = 'absolute';
                span.style.visibility = 'hidden';
                span.style.top = '0';
                span.style.left = '0';
                span.style.pointerEvents = 'none';
                document.body.appendChild(span);
                const height = span.clientHeight;
                span.remove();

                return height;
            }

            globalThis.addEventListener('message', async (messageEvent) => {
                const message = messageEvent.data;

                if (message.direction === '`,`') {
                    return;
                }

                function sendMessageToParent(data) {
                    const messageForParent = {
                        type: message.type,
                        direction: '`,`',
                        data,
                        messageId: message.messageId,
                    };
                    globalThis.parent.postMessage(messageForParent);
                }

                switch (message.type) {
                    case '`,`': {
                        if (!!document.querySelector('body')) {
                            sendMessageToParent();
                        }
                        return;
                    }
                    case '`,`': {
                        const scaleDimensions = message.data;

                        document
                            .querySelector('html')
                            .style.setProperty(
                                'transform',
                                'scaleX(' +
                                    scaleDimensions.width +
                                    ') scaleY(' +
                                    scaleDimensions.height +
                                    ')',
                            );
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        if (message.data === 'pixelated') {
                            document.body.classList.add('pixelated');
                        } else {
                            document.body.classList.remove('pixelated');
                        }
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        try {
                            await executeBeforeSizing();
                            const size = getSize();

                            sendMessageToParent(size);
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        try {
                            forcedFinalImageSize = message.data;
                            getSize();
                            sendMessageToParent();
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        if (
                            imageType === '`,`' ||
                            imageType === '`,`'
                        ) {
                            const size = getSize();

                            if (size.height > message.data.height) {
                                const oneLine = calculateOneLineHeight();
                                const totalLines = Math.floor(
                                    (message.data.height - 2 * `,`) / oneLine,
                                );
                                const totalHeight = oneLine * totalLines;
                                const textElement = document.querySelector('.text');
                                textElement.style.height = totalHeight + 'px';
                                textElement.style.setProperty('-webkit-line-clamp', totalLines);
                            }

                            document.documentElement.style.setProperty(
                                'justify-content',
                                size.height < message.data.height ? 'center' : 'flex-start',
                            );
                        }
                        sendMessageToParent();
                        return;
                    }
                    default: {
                        sendMessageToParent();
                        return;
                    }
                }
            });

            function muteEverything() {
                const videoElements = Array.from(document?.body?.querySelectorAll('video') ?? []);
                const audioElements = Array.from(document?.body?.querySelectorAll('audio') ?? []);
                [
                    ...videoElements,
                    ...audioElements,
                ].forEach((videoElement) => {
                    videoElement.setAttribute('muted', true);
                    videoElement.muted = true;
                });
            }

            if (imageType !== '`,`') {
                try {
                    muteEverything();
                    const mutationObserver = new MutationObserver(muteEverything);
                    mutationObserver.observe(document, {childList: true, subtree: true});
                } catch (error) {
                    console.error(error);
                }
            }
        <\/script>
    `])),t.imageType,n??"",k.Svg,k.Html,k.Image,k.Video,k.Text,k.Json,k.Audio,Be.FromChild,Be.FromChild,F.Ready,F.SendScale,F.SendScalingMethod,F.SendSize,F.ForceSize,F.SizeDetermined,k.Json,k.Text,jt.y,k.Audio),i=H(vs||(vs=gs([`
        <!DOCTYPE html>
        <html class="image-type-`,`">
            <head>
                <style>
                    body,
                    html {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    html {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    html.image-type-`,` img,
                    html.image-type-`,` svg,
                    html.image-type-`,` video {
                        max-width: 100vw;
                        max-height: 100vh;
                        width: 100vw;
                        height: 100vh;
                        display: block;
                    }

                    .spacer {
                        padding: 0 8px;
                    }

                    .pixelated {
                        image-rendering: pixelated;
                    }

                    html.image-type-`,` body,
                    html.image-type-`,` body {
                        max-width: 100%;
                        max-height: 100%;
                        font-family: sans-serif;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    html.image-type-`,`,
                    html.image-type-`,` {
                        flex-direction: column;
                    }

                    html.image-type-`,` .text-wrapper,
                    html.image-type-`,` .text-wrapper {
                        max-width: 100%;
                        overflow: hidden;
                    }

                    html.image-type-`,` .text,
                    html.image-type-`,` .text {
                        word-break: break-all;
                        padding: `,"px ",`px 0;
                        max-width: 100%;
                        margin: 0;
                        display: -webkit-box;
                        /* -webkit-line-clamp will be set later by JavaScript */
                        -webkit-line-clamp: unset;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    html.image-type-`,` .text-wrapper,
                    html.image-type-`,` .text-wrapper {
                        /*
                            This can't be on the .text element because of it using -webkit-line-clamp. Padding will expose subsequent lines that
                            should be hidden.
                        */
                        padding-bottom: `,`px;
                    }
                </style>
                <script>
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                <\/script>
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),t.imageType,k.Image,k.Svg,k.Video,k.Text,k.Json,k.Text,k.Json,k.Text,k.Json,k.Text,k.Json,jt.y,jt.x,k.Text,k.Json,jt.y,r,e??"",s);return wr(Oe(i)).replace(String(r),`
${t.templateString}
`)}const Oa=1e4,Ra={textTransformer:"textTransformer",extraHtml:"extraHtml"},Na=ao(Ra),Da={imageData:ii(),error:void 0},yt=ri()({tagName:"vir-resizable-image",stateInit:Da,events:{settled:qt(),imageDataCalculated:qt(),errored:qt()},styles:Ye`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${ae(Z.VerticallyCenter)}) {
            align-items: center;
        }

        .click-cover {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 100;
        }

        * {
            flex-shrink: 0;
        }

        .frame-constraint {
            position: relative;
            transition: 100ms;
            z-index: 100;
        }

        .error-wrapper,
        .loading-wrapper {
            min-width: calc(100% + 2px);
            min-height: calc(100% + 2px);
            max-width: calc(100% + 2px);
            max-height: calc(100% + 2px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-break: break-word;
        }

        .loading-wrapper {
            position: absolute;
            z-index: 200;
            background-color: inherit;
            opacity: 1;
            pointer-events: none;
        }

        :host(.${ae(Z.HideLoading)}) .loading-wrapper,
        :host(.${ae(Z.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${ae(Z.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${ae(Z.HideLoading)}) iframe {
            /**
             * While showing the actual image.
             */
            opacity: 1;
        }

        iframe {
            opacity: 0;
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }

        .min-size {
            display: flex;
            justify-content: center;
        }
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[Pn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){const o=e.timeoutMs??Oa,l=t.imageData instanceof Error?t.imageData:t.error;n({imageData:{createPromise:async()=>{if(t.error&&n({error:void 0}),r.classList.remove(Z.HideLoading),s(new i.settled(!1)),r.classList.remove(Z.VerticallyCenter),!e.imageUrl)return new Promise(async(p,b)=>{await tn(o),b(new Error("An imageUrl was never provided to vir-resizable-image."))});const y={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer};let m;try{m=await mo(o,ms(y))}catch{await tn(1e3);try{m=await ms(y)}catch(b){throw b}}if(m)return m;throw new Error("no image data result")},trigger:{...uo(e,Na)}}});const a=e.min&&e.max?Jn({box:e.min,max:e.max}):e.min,u=e.max,c=e.forcedOriginalImageSize?gi({min:a,max:u,box:e.forcedOriginalImageSize}):void 0,h=Wn(t.imageData,"",y=>(s(new i.imageDataCalculated(y)),y.imageType===k.Pdf?H`
                        <iframe
                            src=${y.imageUrl}
                            ${us(async m=>{try{await wi({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:m,imageData:y,imageDimensions:u??{width:500,height:500},max:u,min:a,sendSizeMessage:!1,timeoutMs:o}),r[Pn]="",s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(p){const b=Ne(p);if(b instanceof Gn)return;console.error(b),n({error:b}),s(new i.errored(b))}})}
                        ></iframe>
                    `:H`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${za(y,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${us(async m=>{try{const p=await Ta({min:a,max:u,host:r,iframeElement:m,imageData:y,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:o});r[Pn]=p,s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(p){const b=Ne(p);if(b instanceof Gn)return;console.error(b),n({error:b}),s(new i.errored(b))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),y=>{n({error:y}),s(new i.errored(Ne(y)))}),d=Wn(t.imageData,bs,y=>!e.blockInteraction&&[k.Html,k.Video,k.Audio,k.Pdf].includes(y.imageType)?"":bs,()=>""),f=l?Ye`
                  max-width: 100%;
                  max-height: 100%;
              `:c?Ye`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",v=Ye`
            width: ${(a==null?void 0:a.width)??250}px;
            height: ${(a==null?void 0:a.height)??250}px;
        `,g=H`
            <div class="frame-constraint" style=${f}>${h}</div>
        `;return H`
            ${hs(!l,H`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${v}>
                ${hs(!!l,H`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${l==null?void 0:l.message}</slot>
                        </div>
                    `,g)}
            </div>
            ${d}
        `}}),bs=H`
    <div class="click-cover"></div>
`,Pn="latest-frame-srcdoc",R=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,L=Object.keys,U=Array.isArray;function J(t,e){return typeof e!="object"||L(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||R.Promise||(R.Promise=Promise);const $t=Object.getPrototypeOf,ja={}.hasOwnProperty;function Q(t,e){return ja.call(t,e)}function it(t,e){typeof e=="function"&&(e=e($t(t))),(typeof Reflect>"u"?L:Reflect.ownKeys)(e).forEach(n=>{me(t,n,e[n])})}const _i=Object.defineProperty;function me(t,e,n,r){_i(t,e,J(n&&Q(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ze(t){return{from:function(e){return t.prototype=Object.create(e.prototype),me(t.prototype,"constructor",t),{extend:it.bind(null,t.prototype)}}}}const Ma=Object.getOwnPropertyDescriptor;function zr(t,e){let n;return Ma(t,e)||(n=$t(t))&&zr(n,e)}const La=[].slice;function sn(t,e,n){return La.call(t,e,n)}function xi(t,e){return e(t)}function dt(t){if(!t)throw new Error("Assertion Failed")}function Si(t){R.setImmediate?setImmediate(t):setTimeout(t,0)}function Ei(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function pe(t,e){if(Q(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=pe(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var l=t[e.substr(0,o)];return l===void 0?void 0:pe(l,e.substr(o+1))}}function ne(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){dt(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)ne(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),l=e.substr(i+1);if(l==="")n===void 0?U(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var a=t[o];a&&Q(t,o)||(a=t[o]={}),ne(a,l,n)}}else n===void 0?U(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function $i(t){var e={};for(var n in t)Q(t,n)&&(e[n]=t[n]);return e}const Ba=[].concat;function Ai(t){return Ba.apply([],t)}const Pi="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ai([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>R[t]),Ha=Pi.map(t=>R[t]);Ei(Pi,t=>[t,!0]);let be=null;function Ot(t){be=typeof WeakMap<"u"&&new WeakMap;const e=Yn(t);return be=null,e}function Yn(t){if(!t||typeof t!="object")return t;let e=be&&be.get(t);if(e)return e;if(U(t)){e=[],be&&be.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Yn(t[n]))}else if(Ha.indexOf(t.constructor)>=0)e=t;else{const i=$t(t);for(var s in e=i===Object.prototype?{}:Object.create(i),be&&be.set(t,e),t)Q(t,s)&&(e[s]=Yn(t[s]))}return e}const{toString:Ia}={};function Xn(t){return Ia.call(t).slice(8,-1)}const Qn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Fa=typeof Qn=="symbol"?function(t){var e;return t!=null&&(e=t[Qn])&&e.apply(t)}:function(){return null},Ge={};function de(t){var e,n,r,s;if(arguments.length===1){if(U(t))return t.slice();if(this===Ge&&typeof t=="string")return[t];if(s=Fa(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const Or=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var le=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ci(t,e){le=t,Ti=e}var Ti=()=>!0;const Ka=!new Error("").stack;function Fe(){if(Ka)try{throw Fe.arguments,new Error}catch(t){return t}return new Error}function Zn(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(Ti).map(r=>`
`+r).join("")):""}var ki=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Rr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ki),Ua={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function et(t,e){this._e=Fe(),this.name=t,this.message=e}function zi(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function on(t,e,n,r){this._e=Fe(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=zi(t,e)}function vt(t,e){this._e=Fe(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=zi(t,e)}Ze(et).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Zn(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ze(on).from(et),Ze(vt).from(et);var Nr=Rr.reduce((t,e)=>(t[e]=e+"Error",t),{});const Wa=et;var P=Rr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Fe(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Ua[e]||n,this.inner=null)}return Ze(r).from(Wa),t[e]=r,t},{});P.Syntax=SyntaxError,P.Type=TypeError,P.Range=RangeError;var ws=ki.reduce((t,e)=>(t[e+"Error"]=P[e],t),{}),Vt=Rr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=P[e]),t),{});function z(){}function At(t){return t}function qa(t,e){return t==null||t===At?e:function(n){return e(t(n))}}function He(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Va(t,e){return t===z?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?He(r,this.onsuccess):r),s&&(this.onerror=this.onerror?He(s,this.onerror):s),i!==void 0?i:n}}function Ja(t,e){return t===z?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?He(n,this.onsuccess):n),r&&(this.onerror=this.onerror?He(r,this.onerror):r)}}function Ga(t,e){return t===z?e:function(n){var r=t.apply(this,arguments);J(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?He(s,this.onsuccess):s),i&&(this.onerror=this.onerror?He(i,this.onerror):i),r===void 0?o===void 0?void 0:o:J(r,o)}}function Ya(t,e){return t===z?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Dr(t,e){return t===z?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Vt.ModifyError=on,Vt.DexieError=et,Vt.BulkError=vt;var Pt={};const[er,an,tr]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,$t(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,$t(e),t]})(),Oi=an&&an.then,Jt=er&&er.constructor,jr=!!tr;var nr=!1,Xa=tr?()=>{tr.then(Mt)}:R.setImmediate?setImmediate.bind(null,Mt):R.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Mt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Mt,0)},bt=function(t,e){ft.push([t,e]),ln&&(Xa(),ln=!1)},rr=!0,ln=!0,De=[],Gt=[],sr=null,ir=At,tt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{xs(t[0],t[1])}catch{}})}},A=tt,ft=[],je=0,Yt=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=z,this._lib=!1;var e=this._PSD=A;if(le&&(this._stackHolder=Fe(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Pt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ar(this,this._value))}this._state=null,this._value=null,++e.ref,Ni(this,t)}const or={get:function(){var t=A,e=cn;function n(r,s){var i=!t.global&&(t!==A||e!==cn);const o=i&&!ye();var l=new S((a,u)=>{Mr(this,new Ri(un(r,t,i,o),un(s,t,i,o),a,u,t))});return le&&Mi(l,this),l}return n.prototype=Pt,n},set:function(t){me(this,"then",t&&t.prototype===Pt?or:{get:function(){return t},set:or.set})}};function Ri(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function Ni(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Rt();n&&typeof n.then=="function"?Ni(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,Di(t)),r&&Nt()}},ar.bind(null,t))}catch(n){ar(t,n)}}function ar(t,e){if(Gt.push(e),t._state===null){var n=t._lib&&Rt();e=ir(e),t._state=!1,t._value=e,le&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=zr(e,"stack");e._promise=t,me(e,"stack",{get:()=>nr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){De.some(s=>s._value===r._value)||De.push(r)}(t),Di(t),n&&Nt()}}function Di(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)Mr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),je===0&&(++je,bt(()=>{--je==0&&Lr()},[]))}function Mr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++je,bt(Qa,[n,t,e])}else t._listeners.push(e)}function Qa(t,e,n){try{sr=e;var r,s=e._value;e._state?r=t(s):(Gt.length&&(Gt=[]),r=t(s),Gt.indexOf(s)===-1&&function(i){for(var o=De.length;o;)if(De[--o]._value===i._value)return void De.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{sr=null,--je==0&&Lr(),--n.psd.ref||n.psd.finalize()}}function ji(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=Zn(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return le&&((r=Zn(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&ji(t._prev,e,n)),e}function Mi(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Mt(){Rt()&&Nt()}function Rt(){var t=rr;return rr=!1,ln=!1,t}function Nt(){var t,e,n;do for(;ft.length>0;)for(t=ft,ft=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(ft.length>0);rr=!0,ln=!0}function Lr(){var t=De;De=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Yt.slice(0),n=e.length;n;)e[--n]()}function Lt(t){return new S(Pt,!1,t)}function N(t,e){var n=A;return function(){var r=Rt(),s=A;try{return Ee(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{Ee(s,!1),r&&Nt()}}}it(S.prototype,{then:or,_then:function(t,e){Mr(this,new Ri(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Lt(r)):this.then(null,r=>r&&r.name===e?n(r):Lt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Lt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{nr=!0;var t=ji(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{nr=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new P.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&me(S.prototype,Symbol.toStringTag,"Dexie.Promise"),tt.env=Li(),it(S,{all:function(){var t=de.apply(null,arguments).map(Bt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(Pt,!0,t);return Mi(e,sr),e},reject:Lt,race:function(){var t=de.apply(null,arguments).map(Bt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>cn},newPSD:Se,usePSD:at,scheduler:{get:()=>bt,set:t=>{bt=t}},rejectionMapper:{get:()=>ir,set:t=>{ir=t}},follow:(t,e)=>new S((n,r)=>Se((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=He(function(){(function(l){function a(){l(),Yt.splice(Yt.indexOf(a),1)}Yt.push(a),++je,bt(()=>{--je==0&&Lr()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Jt&&(Jt.allSettled&&me(S,"allSettled",function(){const t=de.apply(null,arguments).map(Bt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Jt.any&&typeof AggregateError<"u"&&me(S,"any",function(){const t=de.apply(null,arguments).map(Bt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(l=>e(l),l=>{s[o]=l,--r||n(new AggregateError(s))}))})}));const K={awaits:0,echoes:0,id:0};var Za=0,Xt=[],Cn=0,cn=0,el=0;function Se(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++el;var o=tt.env;i.env=jr?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:_s(o.nthen,i),gthen:_s(o.gthen,i)}:{},e&&J(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var l=at(i,t,n,r);return i.ref===0&&i.finalize(),l}function ot(){return K.id||(K.id=++Za),++K.awaits,K.echoes+=100,K.id}function ye(){return!!K.awaits&&(--K.awaits==0&&(K.id=0),K.echoes=100*K.awaits,!0)}function Bt(t){return K.echoes&&t&&t.constructor===Jt?(ot(),t.then(e=>(ye(),e),e=>(ye(),B(e)))):t}function tl(t){++cn,K.echoes&&--K.echoes!=0||(K.echoes=K.id=0),Xt.push(A),Ee(t,!0)}function nl(){var t=Xt[Xt.length-1];Xt.pop(),Ee(t,!1)}function Ee(t,e){var n=A;if((e?!K.echoes||Cn++&&t===A:!Cn||--Cn&&t===A)||Bi(e?tl.bind(null,t):nl),t!==A&&(A=t,n===tt&&(tt.env=Li()),jr)){var r=tt.env.Promise,s=t.env;an.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(R,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function Li(){var t=R.Promise;return jr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(R,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:an.then,gthen:t.prototype.then}:{}}function at(t,e,n,r,s){var i=A;try{return Ee(t,!0),e(n,r,s)}finally{Ee(i,!1)}}function Bi(t){Oi.call(er,t)}function un(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&ot(),Ee(e,!0);try{return t.apply(this,arguments)}finally{Ee(s,!1),r&&Bi(ye)}}}function _s(t,e){return function(n,r){return t.call(this,un(n,e),un(r,e))}}(""+Oi).indexOf("[native code]")===-1&&(ot=ye=z);function xs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(R.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),J(r,s)):R.CustomEvent&&J(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&R.dispatchEvent&&(dispatchEvent(r),!R.PromiseRejectionEvent&&R.onunhandledrejection))try{R.onunhandledrejection(r)}catch{}le&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var B=S.reject;function lr(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===Nr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>lr(t,e,n,r))):B(i)}return s._promise(e,(i,o)=>Se(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return B(new P.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return B(new P.DatabaseClosed);t.open().catch(z)}return t._state.dbReadyPromise.then(()=>lr(t,e,n,r))}const Re=String.fromCharCode(65535),ce="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",wt=[],gn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),rl=gn,sl=gn,Hi=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Ie(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Ii={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ht(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Ot(e))[t],e)}class il{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(a,u,c){if(!c.schema[i])throw new P.NotFound("Table "+i+" not part of transaction");return n(c.idbtrans,c)}const l=Rt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):Se(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):lr(this.db,e,[this.name],o)}finally{l&&Nt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(U(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=L(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)&&u.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==Re)return this.where(r.name).equals(r.keyPath.map(u=>e[u]));!r&&le&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(u,c){try{return i.cmp(u,c)===0}catch{return!1}}const[l,a]=n.reduce(([u,c],h)=>{const d=s[h],f=e[h];return[u||d,u||!d?Ie(c,d&&d.multi?v=>{const g=pe(v,h);return U(g)&&g.some(y=>o(f,y))}:v=>o(f,pe(v,h))):c]},[null,null]);return l?this.where(l.name).equals(e[l.keyPath]).filter(a):r?this.filter(a):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,U(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(Q(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){J(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Ht(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{ne(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||U(e))return this.where(":id").equals(e).modify(n);{const r=pe(e,this.schema.primKey.keyPath);if(r===void 0)return B(new P.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?L(n).forEach(s=>{ne(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Ht(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{ne(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Ii})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new P.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new P.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=a&&l?e.map(Ht(a)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:v})=>{if(h===0)return i?d:f;throw new vt(`${this.name}.bulkAdd(): ${h} of ${u} operations failed`,v)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new P.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new P.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=a&&l?e.map(Ht(a)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:v})=>{if(h===0)return i?d:f;throw new vt(`${this.name}.bulkPut(): ${h} of ${u} operations failed`,v)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new vt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function _t(t){var e={},n=function(l,a){if(a){for(var u=arguments.length,c=new Array(u-1);--u;)c[u-1]=arguments[u];return e[l].subscribe.apply(null,c),t}if(typeof l=="string")return e[l]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(l,a,u){if(typeof l=="object")return o(l);a||(a=Ya),u||(u=z);var c={subscribers:[],fire:u,subscribe:function(h){c.subscribers.indexOf(h)===-1&&(c.subscribers.push(h),c.fire=a(c.fire,h))},unsubscribe:function(h){c.subscribers=c.subscribers.filter(function(d){return d!==h}),c.fire=c.subscribers.reduce(a,u)}};return e[l]=n[l]=c,c}function o(l){L(l).forEach(function(a){var u=l[a];if(U(u))i(a,l[a][0],l[a][1]);else{if(u!=="asap")throw new P.InvalidArgument("Invalid event config");var c=i(a,At,function(){for(var h=arguments.length,d=new Array(h);h--;)d[h]=arguments[h];c.subscribers.forEach(function(f){Si(function(){f.apply(null,d)})})})}})}}function ut(t,e){return Ze(e).from({prototype:t}),e}function We(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Tn(t,e){t.filter=Ie(t.filter,e)}function kn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Ie(r(),e()):e,t.justLimit=n&&!r}function Qt(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new P.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Ss(t,e,n){const r=Qt(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function It(t,e,n,r){const s=t.replayFilter?Ie(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(l,a,u)=>{if(!s||s(a,u,d=>a.stop(d),d=>a.fail(d))){var c=a.primaryKey,h=""+c;h==="[object ArrayBuffer]"&&(h=""+new Uint8Array(c)),Q(i,h)||(i[h]=!0,e(l,a,u))}};return Promise.all([t.or._iterate(o,n),Es(Ss(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Es(Ss(t,r,n),Ie(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Es(t,e,n,r){var s=N(r?(i,o,l)=>n(r(i),o,l):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,l=>o=l,l=>{i.stop(l),o=z},l=>{i.fail(l),o=z})||s(i.value,i,l=>o=l),o()})})}function V(t,e){try{const n=$s(t),r=$s(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let u=0;u<a;++u)if(s[u]!==i[u])return s[u]<i[u]?-1:1;return o===l?0:o<l?-1:1}(As(t),As(e));case"Array":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let u=0;u<a;++u){const c=V(s[u],i[u]);if(c!==0)return c}return o===l?0:o<l?-1:1}(t,e)}}catch{}return NaN}function $s(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=Xn(t);return n==="ArrayBuffer"?"binary":n}function As(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class ol{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,B.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,B.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Ie(n.algorithm,e)}_iterate(e,n){return It(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&J(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>It(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(We(r,!0))return s.count({trans:n,query:{index:Qt(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return It(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[s]}var l=this._ctx.dir==="next"?1:-1;function a(u,c){var h=o(u,i),d=o(c,i);return h<d?-l:h>d?l:0}return this.toArray(function(u){return u.sort(a)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&We(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=Qt(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return It(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,We(n)?kn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):kn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),kn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Tn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Tn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Ie(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&We(n,!0)&&n.limit>0)return this._read(s=>{var i=Qt(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Tn(this._ctx,function(s){var i=s.primaryKey.toString(),o=Q(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=L(e),o=i.length;s=function(g){for(var y=!1,m=0;m<o;++m){var p=i[m],b=e[p];pe(g,p)!==b&&(ne(g,p,b),y=!0)}return y}}const l=n.table.core,{outbound:a,extractKey:u}=l.schema.primaryKey,c=this.db._options.modifyChunkSize||200,h=[];let d=0;const f=[],v=(g,y)=>{const{failures:m,numFailures:p}=y;d+=g-p;for(let b of L(m))h.push(m[b])};return this.clone().primaryKeys().then(g=>{const y=m=>{const p=Math.min(c,g.length-m);return l.getMany({trans:r,keys:g.slice(m,m+p),cache:"immutable"}).then(b=>{const $=[],x=[],w=a?[]:null,_=[];for(let E=0;E<p;++E){const O=b[E],D={value:Ot(O),primKey:g[m+E]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(g[m+E]):a||V(u(O),u(D.value))===0?(x.push(D.value),a&&w.push(g[m+E])):(_.push(g[m+E]),$.push(D.value)))}const C=We(n)&&n.limit===1/0&&(typeof e!="function"||e===zn)&&{index:n.index,range:n.range};return Promise.resolve($.length>0&&l.mutate({trans:r,type:"add",values:$}).then(E=>{for(let O in E.failures)_.splice(parseInt(O),1);v($.length,E)})).then(()=>(x.length>0||C&&typeof e=="object")&&l.mutate({trans:r,type:"put",keys:w,values:x,criteria:C,changeSpec:typeof e!="function"&&e}).then(E=>v(x.length,E))).then(()=>(_.length>0||C&&e===zn)&&l.mutate({trans:r,type:"delete",keys:_,criteria:C}).then(E=>v(_.length,E))).then(()=>g.length>m+p&&y(m+c))})};return y(0).then(()=>{if(h.length>0)throw new on("Error modifying one or more objects",h,d,f);return g.length})})})}delete(){var e=this._ctx,n=e.range;return We(e)&&(e.isPrimKey&&!sl||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:l,lastResult:a,results:u,numFailures:c})=>{if(c)throw new on("Could not delete some values",Object.keys(l).map(h=>l[h]),o-c);return o-c}))}):this.modify(zn)}}const zn=(t,e)=>e.value=null;function al(t,e){return t<e?-1:t===e?0:1}function ll(t,e){return t>e?-1:t===e?0:1}function X(t,e,n){var r=t instanceof Ki?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function qe(t){return new t.Collection(t,()=>Fi("")).limit(0)}function cl(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),l=-1,a=0;a<o;++a){var u=e[a];if(u!==r[a])return s(t[a],n[a])<0?t.substr(0,a)+n[a]+n.substr(a+1):s(t[a],r[a])<0?t.substr(0,a)+r[a]+n.substr(a+1):l>=0?t.substr(0,l)+e[l]+n.substr(l+1):null;s(t[a],u)<0&&(l=a)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):l<0?null:t.substr(0,l)+r[l]+n.substr(l+1)}function Ft(t,e,n,r){var s,i,o,l,a,u,c,h=n.length;if(!n.every(g=>typeof g=="string"))return X(t,"String expected.");function d(g){s=function(m){return m==="next"?p=>p.toUpperCase():p=>p.toLowerCase()}(g),i=function(m){return m==="next"?p=>p.toLowerCase():p=>p.toUpperCase()}(g),o=g==="next"?al:ll;var y=n.map(function(m){return{lower:i(m),upper:s(m)}}).sort(function(m,p){return o(m.lower,p.lower)});l=y.map(function(m){return m.upper}),a=y.map(function(m){return m.lower}),u=g,c=g==="next"?"":r}d("next");var f=new t.Collection(t,()=>ve(l[0],a[h-1]+r));f._ondirectionchange=function(g){d(g)};var v=0;return f._addAlgorithm(function(g,y,m){var p=g.key;if(typeof p!="string")return!1;var b=i(p);if(e(b,a,v))return!0;for(var $=null,x=v;x<h;++x){var w=cl(p,b,l[x],a[x],o,u);w===null&&$===null?v=x+1:($===null||o($,w)>0)&&($=w)}return y($!==null?function(){g.continue($+c)}:m),!1}),f}function ve(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function Fi(t){return{type:1,lower:t,upper:t}}class Ki{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?qe(this):new this.Collection(this,()=>ve(e,n,!r,!s))}catch{return X(this,ce)}}equals(e){return e==null?X(this,ce):new this.Collection(this,()=>Fi(e))}above(e){return e==null?X(this,ce):new this.Collection(this,()=>ve(e,void 0,!0))}aboveOrEqual(e){return e==null?X(this,ce):new this.Collection(this,()=>ve(e,void 0,!1))}below(e){return e==null?X(this,ce):new this.Collection(this,()=>ve(void 0,e,!1,!0))}belowOrEqual(e){return e==null?X(this,ce):new this.Collection(this,()=>ve(void 0,e))}startsWith(e){return typeof e!="string"?X(this,"String expected."):this.between(e,e+Re,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Ft(this,(n,r)=>n.indexOf(r[0])===0,[e],Re)}equalsIgnoreCase(e){return Ft(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=de.apply(Ge,arguments);return e.length===0?qe(this):Ft(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=de.apply(Ge,arguments);return e.length===0?qe(this):Ft(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Re)}anyOf(){const e=de.apply(Ge,arguments);let n=this._cmp;try{e.sort(n)}catch{return X(this,ce)}if(e.length===0)return qe(this);const r=new this.Collection(this,()=>ve(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,l)=>{const a=i.key;for(;n(a,e[s])>0;)if(++s,s===e.length)return o(l),!1;return n(a,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=de.apply(Ge,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return X(this,ce)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,l=this._max;if(e.length===0)return qe(this);if(!e.every(p=>p[0]!==void 0&&p[1]!==void 0&&s(p[0],p[1])<=0))return X(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",P.InvalidArgument);const a=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,h=s;function d(p,b){return h(p[0],b[0])}try{c=e.reduce(function(p,b){let $=0,x=p.length;for(;$<x;++$){const w=p[$];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=l(w[1],b[1]);break}}return $===x&&p.push(b),p},[]),c.sort(d)}catch{return X(this,ce)}let f=0;const v=u?p=>s(p,c[f][1])>0:p=>s(p,c[f][1])>=0,g=a?p=>i(p,c[f][0])>0:p=>i(p,c[f][0])>=0;let y=v;const m=new this.Collection(this,()=>ve(c[0][0],c[c.length-1][1],!a,!u));return m._ondirectionchange=p=>{p==="next"?(y=v,h=s):(y=g,h=i),c.sort(d)},m._addAlgorithm((p,b,$)=>{for(var x=p.key;y(x);)if(++f,f===c.length)return b($),!1;return!!function(w){return!v(w)&&!g(w)}(x)||(this._cmp(x,c[f][1])===0||this._cmp(x,c[f][0])===0||b(()=>{h===s?p.continue(c[f][0]):p.continue(c[f][1])}),!1)}),m}startsWithAnyOf(){const e=de.apply(Ge,arguments);return e.every(n=>typeof n=="string")?e.length===0?qe(this):this.inAnyRange(e.map(n=>[n,n+Re])):X(this,"startsWithAnyOf() only works with strings")}}function oe(t){return N(function(e){return Ct(e),t(e.target.error),!1})}function Ct(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const $e=_t(null,"storagemutated");class ul{_lock(){return dt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(dt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{at(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(dt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new P.DatabaseClosed(r);case"MissingAPIError":throw new P.MissingAPI(r.message,r);default:throw new P.OpenFailed(r)}if(!this.active)throw new P.TransactionInactive;return dt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{Ct(s),this._reject(e.error)}),e.onabort=N(s=>{Ct(s),this.active&&this._reject(new P.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&$e.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return B(new P.ReadOnly("Transaction is readonly"));if(!this.active)return B(new P.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return Se(()=>{var i=new S((o,l)=>{this._lock();const a=n(o,l,this);a&&a.then&&a.then(o,l)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var l=n(i,o,this);l&&l.then&&l.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,l)=>{r.then(a=>n._waitingQueue.push(N(o.bind(null,a))),a=>n._waitingQueue.push(N(l.bind(null,a)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new P.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Q(n,e))return n[e];const r=this.schema[e];if(!r)throw new P.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function cr(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Ui(e)}}function Ui(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Wi(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:Ei(n,r=>[r.name,r])}}let Tt=t=>{try{return t.only([[]]),Tt=()=>[[]],[[]]}catch{return Tt=()=>Re,Re}};function ur(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>pe(n,e)}(t):e=>pe(e,t)}function Ps(t){return[].slice.call(t)}let hl=0;function xt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function dl(t,e,n){function r(a){if(a.type===3)return null;if(a.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:h,upperOpen:d}=a;return u===void 0?c===void 0?null:e.upperBound(c,!!d):c===void 0?e.lowerBound(u,!!h):e.bound(u,c,!!h,!!d)}const{schema:s,hasGetAll:i}=function(a,u){const c=Ps(a.objectStoreNames);return{schema:{name:a.name,tables:c.map(h=>u.objectStore(h)).map(h=>{const{keyPath:d,autoIncrement:f}=h,v=U(d),g=d==null,y={},m={name:h.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:g,compound:v,keyPath:d,autoIncrement:f,unique:!0,extractKey:ur(d)},indexes:Ps(h.indexNames).map(p=>h.index(p)).map(p=>{const{name:b,unique:$,multiEntry:x,keyPath:w}=p,_={name:b,compound:U(w),keyPath:w,unique:$,multiEntry:x,extractKey:ur(w)};return y[xt(w)]=_,_}),getIndexByKeyPath:p=>y[xt(p)]};return y[":id"]=m.primaryKey,d!=null&&(y[xt(d)]=m.primaryKey),m})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(a=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:h,type:d,keys:f,values:v,range:g}){return new Promise((y,m)=>{y=N(y);const p=h.objectStore(c),b=p.keyPath==null,$=d==="put"||d==="add";if(!$&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:x}=f||v||{length:1};if(f&&v&&f.length!==v.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return y({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],C=[];let E=0;const O=W=>{++E,Ct(W)};if(d==="deleteRange"){if(g.type===4)return y({numFailures:E,failures:C,results:[],lastResult:void 0});g.type===3?_.push(w=p.clear()):_.push(w=p.delete(r(g)))}else{const[W,I]=$?b?[v,f]:[v,null]:[f,null];if($)for(let j=0;j<x;++j)_.push(w=I&&I[j]!==void 0?p[d](W[j],I[j]):p[d](W[j])),w.onerror=O;else for(let j=0;j<x;++j)_.push(w=p[d](W[j])),w.onerror=O}const D=W=>{const I=W.target.result;_.forEach((j,Ke)=>j.error!=null&&(C[Ke]=j.error)),y({numFailures:E,failures:C,results:d==="delete"?f:_.map(j=>j.result),lastResult:I})};w.onerror=W=>{O(W),D(W)},w.onsuccess=D})},getMany:({trans:h,keys:d})=>new Promise((f,v)=>{f=N(f);const g=h.objectStore(c),y=d.length,m=new Array(y);let p,b=0,$=0;const x=_=>{const C=_.target;m[C._pos]=C.result,++$===b&&f(m)},w=oe(v);for(let _=0;_<y;++_)d[_]!=null&&(p=g.get(d[_]),p._pos=_,p.onsuccess=x,p.onerror=w,++b);b===0&&f(m)}),get:({trans:h,key:d})=>new Promise((f,v)=>{f=N(f);const g=h.objectStore(c).get(d);g.onsuccess=y=>f(y.target.result),g.onerror=oe(v)}),query:function(h){return d=>new Promise((f,v)=>{f=N(f);const{trans:g,values:y,limit:m,query:p}=d,b=m===1/0?void 0:m,{index:$,range:x}=p,w=g.objectStore(c),_=$.isPrimaryKey?w:w.index($.name),C=r(x);if(m===0)return f({result:[]});if(h){const E=y?_.getAll(C,b):_.getAllKeys(C,b);E.onsuccess=O=>f({result:O.target.result}),E.onerror=oe(v)}else{let E=0;const O=y||!("openKeyCursor"in _)?_.openCursor(C):_.openKeyCursor(C),D=[];O.onsuccess=W=>{const I=O.result;return I?(D.push(y?I.value:I.primaryKey),++E===m?f({result:D}):void I.continue()):f({result:D})},O.onerror=oe(v)}})}(i),openCursor:function({trans:h,values:d,query:f,reverse:v,unique:g}){return new Promise((y,m)=>{y=N(y);const{index:p,range:b}=f,$=h.objectStore(c),x=p.isPrimaryKey?$:$.index(p.name),w=v?g?"prevunique":"prev":g?"nextunique":"next",_=d||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=oe(m),_.onsuccess=N(C=>{const E=_.result;if(!E)return void y(null);E.___id=++hl,E.done=!1;const O=E.continue.bind(E);let D=E.continuePrimaryKey;D&&(D=D.bind(E));const W=E.advance.bind(E),I=()=>{throw new Error("Cursor not stopped")};E.trans=h,E.stop=E.continue=E.continuePrimaryKey=E.advance=()=>{throw new Error("Cursor not started")},E.fail=N(m),E.next=function(){let j=1;return this.start(()=>j--?this.continue():this.stop()).then(()=>this)},E.start=j=>{const Ke=new Promise((G,Ae)=>{G=N(G),_.onerror=oe(Ae),E.fail=Ae,E.stop=lt=>{E.stop=E.continue=E.continuePrimaryKey=E.advance=I,G(lt)}}),Ue=()=>{if(_.result)try{j()}catch(G){E.fail(G)}else E.done=!0,E.start=()=>{throw new Error("Cursor behind last entry")},E.stop()};return _.onsuccess=N(G=>{_.onsuccess=Ue,Ue()}),E.continue=O,E.continuePrimaryKey=D,E.advance=W,Ue(),Ke},y(E)},m)})},count({query:h,trans:d}){const{index:f,range:v}=h;return new Promise((g,y)=>{const m=d.objectStore(c),p=f.isPrimaryKey?m:m.index(f.name),b=r(v),$=b?p.count(b):p.count();$.onsuccess=N(x=>g(x.target.result)),$.onerror=oe(y)})}}}(a)),l={};return o.forEach(a=>l[a.name]=a),{stack:"dbcore",transaction:t.transaction.bind(t),table(a){if(!l[a])throw new Error(`Table '${a}' not found`);return l[a]},MIN_KEY:-1/0,MAX_KEY:Tt(e),schema:s}}function hr({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:l},a){return{dbcore:function(c,h){return h.reduce((d,{create:f})=>({...d,...f(d)}),c)}(dl(i,o,a),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function hn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const l=zr(o,s);(!l||"value"in l&&l.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?me(o,s,{get(){return this.table(s)},set(a){_i(this,s,{value:a,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function dr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function fl(t,e){return t._cfg.version-e._cfg.version}function ml(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),l=A.transless||A;Se(()=>{A.trans=i,A.transless=l,e===0?(L(s).forEach(a=>{On(n,a,s[a].primKey,s[a].indexes)}),hr(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:a},u,c,h){const d=[],f=a._versions;let v=a._dbSchema=mr(a,a.idbdb,h),g=!1;function y(){return d.length?S.resolve(d.shift()(c.idbtrans)).then(y):S.resolve()}return f.filter(m=>m._cfg.version>=u).forEach(m=>{d.push(()=>{const p=v,b=m._cfg.dbschema;pr(a,p,h),pr(a,b,h),v=a._dbSchema=b;const $=qi(p,b);$.add.forEach(w=>{On(h,w[0],w[1].primKey,w[1].indexes)}),$.change.forEach(w=>{if(w.recreate)throw new P.Upgrade("Not yet support for changing primary key");{const _=h.objectStore(w.name);w.add.forEach(C=>fr(_,C)),w.change.forEach(C=>{_.deleteIndex(C.name),fr(_,C)}),w.del.forEach(C=>_.deleteIndex(C))}});const x=m._cfg.contentUpgrade;if(x&&m._cfg.version>u){hr(a,h),c._memoizedTables={},g=!0;let w=$i(b);$.del.forEach(O=>{w[O]=p[O]}),dr(a,[a.Transaction.prototype]),hn(a,[a.Transaction.prototype],L(w),w),c.schema=w;const _=Or(x);let C;_&&ot();const E=S.follow(()=>{if(C=x(c),C&&_){var O=ye.bind(null,null);C.then(O,O)}});return C&&typeof C.then=="function"?S.resolve(C):E.then(()=>C)}}),d.push(p=>{(!g||!rl)&&function(b,$){[].slice.call($.db.objectStoreNames).forEach(x=>b[x]==null&&$.db.deleteObjectStore(x))}(m._cfg.dbschema,p),dr(a,[a.Transaction.prototype]),hn(a,[a.Transaction.prototype],a._storeNames,a._dbSchema),c.schema=a._dbSchema})}),y().then(()=>{var m,p;p=h,L(m=v).forEach(b=>{p.db.objectStoreNames.contains(b)||On(p,b,m[b].primKey,m[b].indexes)})})}(t,e,i,n).catch(o)})}function qi(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!gn)o.recreate=!0,n.change.push(o);else{const l=s.idxByName,a=i.idxByName;let u;for(u in l)a[u]||o.del.push(u);for(u in a){const c=l[u],h=a[u];c?c.src!==h.src&&o.change.push(h):o.add.push(h)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function On(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>fr(s,i)),s}function fr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function mr(t,e,n){const r={};return sn(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const l=cr(Ui(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),a=[];for(let c=0;c<i.indexNames.length;++c){const h=i.index(i.indexNames[c]);o=h.keyPath;var u=cr(h.name,o,!!h.unique,!!h.multiEntry,!1,o&&typeof o!="string",!1);a.push(u)}r[s]=Wi(s,l,a)}),r}function pr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let l=0;l<o.indexNames.length;++l){const a=o.indexNames[l],u=o.index(a).keyPath,c=typeof u=="string"?u:"["+sn(u).join("+")+"]";if(e[i]){const h=e[i].idxByName[c];h&&(h.name=a,delete e[i].idxByName[c],e[i].idxByName[a]=h)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&R.WorkerGlobalScope&&R instanceof R.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class pl{_parseStoresSpec(e,n){L(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,l)=>{const a=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(a)?a.match(/^\[(.*)\]$/)[1].split("+"):a;return cr(a,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),U(u),l===0)}),i=s.shift();if(i.multi)throw new P.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new P.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new P.Schema("Index must have a name and cannot be an empty string")}),n[r]=Wi(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?J(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{J(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,dr(n,[n._allTables,n,n.Transaction.prototype]),hn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],L(i),i),n._storeNames=L(i),this}upgrade(e){return this._cfg.contentUpgrade=Dr(this._cfg.contentUpgrade||z,e),this}}function Br(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Me("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function Hr(t){return t&&typeof t.databases=="function"}function gr(t){return Se(function(){return A.letThrough=!0,t()})}function gl(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function yl(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?B(e.dbOpenError):t);le&&(e.openCanceller._stackHolder=Fe()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new P.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,l=!1;return S.race([r,(typeof navigator>"u"?S.resolve():gl()).then(()=>new S((a,u)=>{if(s(),!n)throw new P.MissingAPI;const c=t.name,h=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!h)throw new P.MissingAPI;h.onerror=oe(u),h.onblocked=N(t._fireOnBlocked),h.onupgradeneeded=N(d=>{if(o=h.transaction,e.autoSchema&&!t._options.allowEmptyDB){h.onerror=Ct,o.abort(),h.result.close();const v=n.deleteDatabase(c);v.onsuccess=v.onerror=N(()=>{u(new P.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=oe(u);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;l=f<1,t._novip.idbdb=h.result,ml(t,f/10,o,u)}},u),h.onsuccess=N(()=>{o=null;const d=t._novip.idbdb=h.result,f=sn(d.objectStoreNames);if(f.length>0)try{const g=d.transaction((v=f).length===1?v[0]:v,"readonly");e.autoSchema?function({_novip:y},m,p){y.verno=m.version/10;const b=y._dbSchema=mr(0,m,p);y._storeNames=sn(m.objectStoreNames,0),hn(y,[y._allTables],L(b),b)}(t,d,g):(pr(t,t._dbSchema,g),function(y,m){const p=qi(mr(0,y.idbdb,m),y._dbSchema);return!(p.add.length||p.change.some(b=>b.add.length||b.change.length))}(t,g)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),hr(t,g)}catch{}var v;wt.push(t),d.onversionchange=N(g=>{e.vcFired=!0,t.on("versionchange").fire(g)}),d.onclose=N(g=>{t.on("close").fire(g)}),l&&function({indexedDB:g,IDBKeyRange:y},m){!Hr(g)&&m!=="__dbnames"&&Br(g,y).put({name:m}).catch(z)}(t._deps,c),a()},u)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(gr(()=>t.on.ready.fire(t.vip))).then(function a(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.reduce(Dr,z);return e.onReadyBeingFired=[],S.resolve(gr(()=>u(t.vip))).then(a)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(a=>{e.dbOpenError=a;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),B(a)}).finally(()=>{e.openComplete=!0,i()})}function yr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var l=i(o),a=l.value;return l.done?a:a&&typeof a.then=="function"?a.then(n,r):U(a)?Promise.all(a).then(n,r):n(a)}}return s(e)()}function vl(t,e,n){var r=arguments.length;if(r<2)throw new P.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=Ai(s);return[t,i,n]}function Vi(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),l={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(h){return h.name===Nr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Vi(t,e,n,null,s))):B(h)}const a=Or(s);let u;a&&ot();const c=S.follow(()=>{if(u=s.call(o,o),u)if(a){var h=ye.bind(null,null);u.then(h,h)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=yr(u))},l);return(u&&typeof u.then=="function"?S.resolve(u).then(h=>o.active?h:B(new P.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(h=>(r&&o._resolve(),o._completion.then(()=>h))).catch(h=>(o._reject(h),B(h)))})}function Kt(t,e,n){const r=U(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const bl={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(c,h,d){const f=xt(c),v=s[f]=s[f]||[],g=c==null?0:typeof c=="string"?1:c.length,y=h>0,m={...d,isVirtual:y,keyTail:h,keyLength:g,extractKey:ur(c),unique:!y&&d.unique};return v.push(m),m.isPrimaryKey||i.push(m),g>1&&o(g===2?c[0]:c.slice(0,g-1),h+1,d),v.sort((p,b)=>p.keyTail-b.keyTail),m}const l=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[l];for(const c of r.indexes)o(c.keyPath,0,c);function a(c){const h=c.query.index;return h.isVirtual?{...c,query:{index:h,range:(d=c.query.range,f=h.keyTail,{type:d.type===1?2:d.type,lower:Kt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Kt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var d,f}return{...n,schema:{...r,primaryKey:l,indexes:i,getIndexByKeyPath:function(c){const h=s[xt(c)];return h&&h[0]}},count:c=>n.count(a(c)),query:c=>n.query(a(c)),openCursor(c){const{keyTail:h,isVirtual:d,keyLength:f}=c.query.index;return d?n.openCursor(a(c)).then(v=>v&&function(g){return Object.create(g,{continue:{value:function(m){m!=null?g.continue(Kt(m,c.reverse?t.MAX_KEY:t.MIN_KEY,h)):c.unique?g.continue(g.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,h)):g.continue()}},continuePrimaryKey:{value(m,p){g.continuePrimaryKey(Kt(m,t.MAX_KEY,h),p)}},primaryKey:{get:()=>g.primaryKey},key:{get(){const m=g.key;return f===1?m[0]:m.slice(0,f)}},value:{get:()=>g.value}})}(v)):n.openCursor(c)}}}}}};function Ir(t,e,n,r){return n=n||{},r=r||"",L(t).forEach(s=>{if(Q(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const l=Xn(i);l!==Xn(o)?n[r+s]=e[s]:l==="Object"?Ir(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),L(e).forEach(s=>{Q(t,s)||(n[r+s]=e[s])}),n}const wl={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:l,creating:a,updating:u}=o.table(e).hook;switch(i.type){case"add":if(a.fire===z)break;return o._promise("readwrite",()=>c(i),!0);case"put":if(a.fire===z&&u.fire===z)break;return o._promise("readwrite",()=>c(i),!0);case"delete":if(l.fire===z)break;return o._promise("readwrite",()=>c(i),!0);case"deleteRange":if(l.fire===z)break;return o._promise("readwrite",()=>function(d){return h(d.trans,d.range,1e4)}(i),!0)}return n.mutate(i);function c(d){const f=A.trans,v=d.keys||function(g,y){return y.type==="delete"?y.keys:y.keys||y.values.map(g.extractKey)}(r,d);if(!v)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:v}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(g,y,m){return y.type==="add"?Promise.resolve([]):g.getMany({trans:y.trans,keys:m,cache:"immutable"})}(n,d,v).then(g=>{const y=v.map((m,p)=>{const b=g[p],$={onerror:null,onsuccess:null};if(d.type==="delete")l.fire.call($,m,b,f);else if(d.type==="add"||b===void 0){const x=a.fire.call($,m,d.values[p],f);m==null&&x!=null&&(m=x,d.keys[p]=m,r.outbound||ne(d.values[p],r.keyPath,m))}else{const x=Ir(b,d.values[p]),w=u.fire.call($,x,m,b,f);if(w){const _=d.values[p];Object.keys(w).forEach(C=>{Q(_,C)?_[C]=w[C]:ne(_,C,w[C])})}}return $});return n.mutate(d).then(({failures:m,results:p,numFailures:b,lastResult:$})=>{for(let x=0;x<v.length;++x){const w=p?p[x]:v[x],_=y[x];w==null?_.onerror&&_.onerror(m[x]):_.onsuccess&&_.onsuccess(d.type==="put"&&g[x]?d.values[x]:w)}return{failures:m,results:p,numFailures:b,lastResult:$}}).catch(m=>(y.forEach(p=>p.onerror&&p.onerror(m)),Promise.reject(m)))})}function h(d,f,v){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:v}).then(({result:g})=>c({type:"delete",keys:g,trans:d}).then(y=>y.numFailures>0?Promise.reject(y.failures[0]):g.length<v?{failures:[],numFailures:0,lastResult:void 0}:h(d,{...f,lower:g[g.length-1],lowerOpen:!0},v)))}}}}})};function Ji(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)V(e.keys[s],t[i])===0&&(r.push(n?Ot(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const _l={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Ji(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Ot(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Fr(t){return!("from"in t)}const ue=function(t,e){if(!this){const n=new ue;return t&&"d"in t&&J(n,t),n}J(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function kt(t,e,n){const r=V(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Fr(t))return J(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(V(n,t.from)<0)return s?kt(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Cs(t);if(V(e,t.to)>0)return i?kt(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Cs(t);V(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),V(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&dn(t,s),i&&o&&dn(t,i)}function dn(t,e){Fr(e)||function n(r,{from:s,to:i,l:o,r:l}){kt(r,s,i),o&&n(r,o),l&&n(r,l)}(t,e)}function xl(t,e){const n=vr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=vr(t);let o=i.next(s.from),l=o.value;for(;!r.done&&!o.done;){if(V(l.from,s.to)<=0&&V(l.to,s.from)>=0)return!0;V(s.from,l.from)<0?s=(r=n.next(l.from)).value:l=(o=i.next(s.from)).value}return!1}function vr(t){let e=Fr(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&V(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||V(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Cs(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},l=t[s];t.from=l.from,t.to=l.to,t[s]=l[s],o[s]=l[i],t[i]=o,o.d=Ts(o)}t.d=Ts(t)}function Ts({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}it(ue.prototype,{add(t){return dn(this,t),this},addKey(t){return kt(this,t,t),this},addKeys(t){return t.forEach(e=>kt(this,e,e)),this},[Qn](){return vr(this)}});const Sl={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new ue(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:l,outbound:a}=o,u={...s,mutate:d=>{const f=d.trans,v=f.mutatedParts||(f.mutatedParts={}),g=w=>{const _=`idb://${e}/${r}/${w}`;return v[_]||(v[_]=new ue)},y=g(""),m=g(":dels"),{type:p}=d;let[b,$]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const x=d.trans._cache;return s.mutate(d).then(w=>{if(U(b)){p!=="delete"&&(b=w.results),y.addKeys(b);const _=Ji(b,x);_||p==="add"||m.addKeys(b),(_||$)&&function(C,E,O,D){function W(I){const j=C(I.name||"");function Ke(G){return G!=null?I.extractKey(G):null}const Ue=G=>I.multiEntry&&U(G)?G.forEach(Ae=>j.addKey(Ae)):j.addKey(G);(O||D).forEach((G,Ae)=>{const lt=O&&Ke(O[Ae]),vn=D&&Ke(D[Ae]);V(lt,vn)!==0&&(lt!=null&&Ue(lt),vn!=null&&Ue(vn))})}E.indexes.forEach(W)}(g,i,_,$)}else if(b){const _={from:b.lower,to:b.upper};m.add(_),y.add(_)}else y.add(n),m.add(n),i.indexes.forEach(_=>g(_.name).add(n));return w})}},c=({query:{index:d,range:f}})=>{var v,g;return[d,new ue((v=f.lower)!==null&&v!==void 0?v:t.MIN_KEY,(g=f.upper)!==null&&g!==void 0?g:t.MAX_KEY)]},h={get:d=>[o,new ue(d.key)],getMany:d=>[o,new ue().addKeys(d.keys)],count:c,query:c,openCursor:c};return L(h).forEach(d=>{u[d]=function(f){const{subscr:v}=A;if(v){const g=$=>{const x=`idb://${e}/${r}/${$}`;return v[x]||(v[x]=new ue)},y=g(""),m=g(":dels"),[p,b]=h[d](f);if(g(p.name||"").add(b),!p.isPrimaryKey){if(d!=="count"){const $=d==="query"&&a&&f.values&&s.query({...f,values:!1});return s[d].apply(this,arguments).then(x=>{if(d==="query"){if(a&&f.values)return $.then(({result:_})=>(y.addKeys(_),x));const w=f.values?x.result.map(l):x.result;f.values?y.addKeys(w):m.addKeys(w)}else if(d==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(m.addKey(w.primaryKey),w.key)},primaryKey:{get(){const C=w.primaryKey;return m.addKey(C),C}},value:{get:()=>(_&&y.addKey(w.primaryKey),w.value)}})}return x})}m.add(n)}}return s[d].apply(this,arguments)}}),u}}}};class Me{constructor(e,n){this._middlewares={},this.verno=0;const r=Me.dependencies;this._options=n={addons:Me.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:z,dbReadyPromise:null,cancelOpen:z,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(l=>{i.dbReadyResolve=l}),i.openCanceller=new S((l,a)=>{i.cancelOpen=a}),this._state=i,this.name=e,this.on=_t(this,"populate","blocked","versionchange","close",{ready:[Dr,z]}),this.on.ready.subscribe=xi(this.on.ready.subscribe,l=>(a,u)=>{Me.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||S.resolve().then(a),u&&l(a);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(a),u&&l(a);else{l(a);const h=this;u||l(function d(){h.on.ready.unsubscribe(a),h.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,ut(ol.prototype,function(l,a){this.db=o;let u=Ii,c=null;if(a)try{u=a()}catch(v){c=v}const h=l._ctx,d=h.table,f=d.hook.reading.fire;this._ctx={table:d,index:h.index,isPrimKey:!h.index||d.schema.primKey.keyPath&&h.index===d.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:h.or,valueMapper:f!==At?f:null}})),this.Table=function(l){return ut(il.prototype,function(a,u,c){this.db=l,this._tx=c,this.name=a,this.schema=u,this.hook=l._allTables[a]?l._allTables[a].hook:_t(null,{creating:[Va,z],reading:[qa,At],updating:[Ga,z],deleting:[Ja,z]})})}(this),this.Transaction=function(l){return ut(ul.prototype,function(a,u,c,h,d){this.db=l,this.mode=a,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=h,this.idbtrans=null,this.on=_t(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,v)=>{this._resolve=f,this._reject=v}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var v=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):v&&this.idbtrans&&this.idbtrans.abort(),B(f)})})}(this),this.Version=function(l){return ut(pl.prototype,function(a){this.db=l,this._cfg={version:a,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(l){return ut(Ki.prototype,function(a,u,c){this.db=l,this._ctx={table:a,index:u===":id"?null:u,or:c};const h=l._deps.indexedDB;if(!h)throw new P.MissingAPI;this._cmp=this._ascending=h.cmp.bind(h),this._descending=(d,f)=>h.cmp(f,d),this._max=(d,f)=>h.cmp(d,f)>0?d:f,this._min=(d,f)=>h.cmp(d,f)<0?d:f,this._IDBKeyRange=l._deps.IDBKeyRange})}(this),this.on("versionchange",l=>{l.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",l=>{!l.newVersion||l.newVersion<l.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${l.oldVersion/10}`)}),this._maxKey=Tt(n.IDBKeyRange),this._createTransaction=(l,a,u,c)=>new this.Transaction(l,a,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=l=>{this.on("blocked").fire(l),wt.filter(a=>a.name===this.name&&a!==this&&!a._state.vcFired).map(a=>a.on("versionchange").fire(l))},this.use(bl),this.use(wl),this.use(Sl),this.use(_l),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(l=>l(this))}version(e){if(isNaN(e)||e<.1)throw new P.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new P.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(fl),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new P.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new P.DatabaseClosed);this.open().catch(z)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,l)=>o.level-l.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return yl(this)}_close(){const e=this._state,n=wt.indexOf(this);if(n>=0&&wt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new P.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:l,IDBKeyRange:a},u){!Hr(l)&&u!=="__dbnames"&&Br(l,a).delete(u).catch(z)})(this._deps,this.name),r()}),o.onerror=oe(s),o.onblocked=this._fireOnBlocked};if(e)throw new P.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return L(this._allTables).map(e=>this._allTables[e])}transaction(){const e=vl.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,l;e=e.replace("!","").replace("?","");try{if(l=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new P.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new P.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&l.forEach(u=>{if(s&&s.storeNames.indexOf(u)===-1){if(!i)throw new P.SubTransaction("Table "+u+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(u){return s?s._promise(null,(c,h)=>{h(u)}):B(u)}const a=Vi.bind(null,this,o,l,s,r);return s?s._promise(o,a,"lock"):A.trans?at(A.transless,()=>this._whenReady(a)):this._whenReady(a)}table(e){if(!Q(this._allTables,e))throw new P.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const El=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class $l{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[El](){return this}}function Gi(t,e){return L(e).forEach(n=>{dn(t[n]||(t[n]=new ue),e[n])}),t}function Al(t){return new $l(e=>{const n=Or(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,$e.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let l=!1,a=!1;function u(){return L(i).some(d=>s[d]&&xl(s[d],i[d]))}const c=d=>{Gi(s,d),u()&&h()},h=()=>{if(l||r)return;s={};const d={},f=function(v){n&&ot();const g=()=>Se(t,{subscr:v,trans:null}),y=A.trans?at(A.transless,g):g();return n&&y.then(ye,ye),y}(d);a||($e("storagemutated",c),a=!0),l=!0,Promise.resolve(f).then(v=>{l=!1,r||(u()?h():(s={},i=d,e.next&&e.next(v)))},v=>{l=!1,e.error&&e.error(v),o.unsubscribe()})};return h(),o})}let br;try{br={indexedDB:R.indexedDB||R.mozIndexedDB||R.webkitIndexedDB||R.msIndexedDB,IDBKeyRange:R.IDBKeyRange||R.webkitIDBKeyRange}}catch{br={indexedDB:null,IDBKeyRange:null}}const Ce=Me;function Zt(t){let e=fe;try{fe=!0,$e.storagemutated.fire(t)}finally{fe=e}}it(Ce,{...Vt,delete:t=>new Ce(t,{addons:[]}).delete(),exists:t=>new Ce(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return Hr(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):Br(e,n).toCollection().primaryKeys()}(Ce.dependencies).then(t)}catch{return B(new P.MissingAPI)}},defineClass:()=>function(t){J(this,t)},ignoreTransaction:t=>A.trans?at(A.transless,t):t(),vip:gr,async:function(t){return function(){try{var e=yr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return B(n)}}},spawn:function(t,e,n){try{var r=yr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return B(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?Ce.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>le,set:t=>{Ci(t,t==="dexie"?()=>!0:Hi)}},derive:Ze,extend:J,props:it,override:xi,Events:_t,on:$e,liveQuery:Al,extendObservabilitySet:Gi,getByKeyPath:pe,setByKeyPath:ne,delByKeyPath:function(t,e){typeof e=="string"?ne(t,e,void 0):"length"in e&&[].map.call(e,function(n){ne(t,n,void 0)})},shallowClone:$i,deepClone:Ot,getObjectDiff:Ir,cmp:V,asap:Si,minKey:-(1/0),addons:[],connections:wt,errnames:Nr,dependencies:br,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Ce.maxKey=Tt(Ce.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&($e("storagemutated",t=>{if(!fe){let e;gn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),fe=!0,dispatchEvent(e),fe=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{fe||Zt(t)}));let fe=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),$e("storagemutated",e=>{fe||t.postMessage(e)}),t.onmessage=e=>{e.data&&Zt(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){$e("storagemutated",e=>{try{fe||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Zt(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Zt(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!ws[t.name])return t;var n=new ws[t.name](e||t.message,t);return"stack"in t&&me(n,"stack",{get:function(){return this.inner.stack}}),n},Ci(le,Hi);class Dt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class ks extends Dt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const yn="locationchange";let zs=!1;const Pl=globalThis.history.pushState;function Os(...t){const e=Pl.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(yn)),e}const Cl=globalThis.history.replaceState;function Rs(...t){const e=Cl.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(yn)),e}function Tl(){if(!zs){if(globalThis.history.pushState===Os)throw new ks("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Rs)throw new ks("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");zs=!0,globalThis.history.pushState=Os,globalThis.history.replaceState=Rs,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(yn))})}}function kl(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function zl(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Ol(t){const n=(t?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(o=>!!o),s=globalThis.location.search?kl(new URLSearchParams(globalThis.location.search)):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:s,hash:i}}class Rl extends Dt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Yi(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const Ns=6;function Ds(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>Ns)throw new Rl(`Route sanitization depth has exceed the max of ${Ns} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Yi(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Rn extends Dt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Nl(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Rn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Rn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Rn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Dl(t,e,n,r=!1){const s=Xi(t,e,n);r?globalThis.history.replaceState(void 0,"",s):globalThis.history.pushState(void 0,"",s)}function Xi(t,e,n=""){var a;if(!n&&e!=null)throw new Dt("Route base regexp was defined but routeBase string was not provided.");const r=jl(e)?`/${n}`:"",s=t.search?zl(t.search).toString():"",i=s?`?${s}`:"",o=(a=t.hash)!=null&&a.startsWith("#")?"":"#",l=t.hash?`${o}${t.hash}`:"";return`${r}/${t.paths.join("/")}${i}${l}`}function jl(t){return!!(t&&globalThis.location.pathname.match(t))}function Ml(t={}){var i;Nl(t),Tl();const e=(i=t.routeBase)==null?void 0:i.replace(/\/+$/,""),n=e?new RegExp(`^\\/${t.routeBase}`):void 0;let r=!1;const s={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const l={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(o,l=!1,a=!1)=>{const u=s.getCurrentRawRoutes(),c={...u,...o},h=s.sanitizeFullRoute(c);if(!(!a&&Yi(u,h)))return Dl(h,n,e,l)},createRoutesUrl:o=>Xi(o,n,e),getCurrentRawRoutes:()=>Ol(n),addRouteListener:(o,l)=>{if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new Dt(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return s.listeners.add(l),r||(globalThis.addEventListener(yn,()=>Ds(s)),r=!0),o&&Ds(s,l),l},hasRouteListener:o=>s.listeners.has(o),removeRouteListener:o=>s.listeners.delete(o),sanitizationDepth:0};return s}const Qi=Ml({routeBase:"resizable-image-element"}),Ll=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Bl="resizable-image-element-storage";class Hl extends Me{constructor(){super(Bl),this.version(1).stores({storedUrls:"&index"})}}const Nn=new Hl,js={async set(t){const e=fn(t).map((n,r)=>({index:r,url:n}));await Nn.storedUrls.clear(),await Nn.storedUrls.bulkPut(e)},async get(){const e=(await Nn.storedUrls.toArray()).map(r=>r.url),n=fn(e);return Il(n.length?n:Ll)}};function Il(t){var e,n;try{const r=fn(((n=(e=Qi.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function fn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(Ms)}const{defineElement:Fl,defineElementNoInputs:Kl}=ea(),Ut=Fl()({tagName:"vir-url-input",events:{urlsChange:qt()},styles:Ye`
        :host {
            display: block;
        }

        textarea {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            max-height: 100%;
            height: 150px;
            font: inherit;
            outline: none;
            border: 2px solid #ccc;
            border-radius: 4px;

            white-space: pre;
            overflow-wrap: normal;
            overflow-x: scroll;
            padding: 8px;
        }

        textarea:focus {
            border-color: blue;
        }
    `,renderCallback:({inputs:t,dispatch:e,events:n,host:r})=>{const s=r.shadowRoot.querySelector("textarea"),i=t.urls.join(`
`),o=i+`
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),H`
            <textarea
                ${pt("input",l=>{const u=l.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(u))})}
                ${pt("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),ht={max:{width:300,height:600},min:{width:300,height:150}};Kl({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:ii(js.get()),constraints:void 0,router:Qi,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Ye`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 16px;
        }

        .all-image-containers {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .images-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .images-container > * {
            flex-shrink: 0;
        }

        label {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            font: inherit;
            font-size: 1.4em;
            gap: 4px;
        }

        .inline-label {
            flex-direction: row;
            align-items: center;
        }

        p {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .constraint-controls {
            display: flex;
            gap: 8px;
        }

        input {
            font: inherit;
        }

        .constraint-wrapper {
            border: 2px solid transparent;
            flex-shrink: 0;
            position: relative;
        }

        ${t.showConstraints} .constraint-wrapper.max {
            border-color: red;
        }

        ${t.showConstraints} .constraint-wrapper.min {
            border-color: lime;
        }

        ${t.showConstraints} ${yt} {
            border-color: blue;
        }

        ${yt} {
            border: 1px solid transparent;
            background-color: rgb(241, 241, 241);
            border-radius: 8px;
            flex-shrink: 0;
        }

        .constraint-wrapper.max {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .constraint-wrapper.min {
            pointer-events: none;
        }

        .constraint-wrapper .min-wrapper {
            position: absolute;
            pointer-events: none;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .constraint-wrapper a {
            cursor: pointer;
        }
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||ht.min.width,height:Number(o==null?void 0:o.minH)||ht.min.height},max:{width:Number(o==null?void 0:o.maxW)||ht.max.width,height:Number(o==null?void 0:o.maxH)||ht.max.height}}})}const n=t.constraints??ht,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,l,a){e({constraints:{...n,[l]:{...n[l],[a]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!xr(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:tn(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(l){console.warn(l)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),H`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Ut}
                ${Tr(Ut,{urls:r})}
                ${pt(Ut.events.urlsChange,o=>{const l=o.detail;js.set(l),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Ut}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${pt("input",o=>{const l=o.currentTarget;e({showConstraints:!!l.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const l=["height","width"].map(a=>{const u=[Dn(o),Dn(a)].join(" "),c=n[o][a];return H`
                            <label>
                                ${u}
                                <br />
                                ${te(c)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${c}
                                    ${pt("input",h=>{i(h.currentTarget,o,a)})}
                                />
                            </label>
                        `});return H`
                        <div class="constraint-controls">${l}</div>
                    `})}
            </p>
            <div class="images-container">${Ul(n,t.imageUrls)}</div>
        `}});function Ul(t,e){return Wn(e,"Loading...",n=>fn(n).map(r=>{const s=`
                height: ${te(t.max.height)};
                max-height: ${te(t.max.height)};
                width: ${te(t.max.width)};
                max-width: ${te(t.max.width)}`,i=`height: ${te(t.min.height)}; width: ${te(t.min.width)}`;return H`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${yt}
                            ${Tr(yt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${yt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
