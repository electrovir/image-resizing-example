(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ht(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Pr={capitalizeFirstLetter:!1};function Ye(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Rr(e,t){return t.capitalizeFirstLetter?Ye(e):e}function Nr(e,t=Pr){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Rr(r,t)}function Lr({value:e,min:t,max:n}){return Math.max(Math.min(e,n),t)}function ft(e){return e?e instanceof Error?e.message:z(e,"message")?String(e.message):String(e):""}function X(e){return e instanceof Error?e:new Error(ft(e))}function $n(e){return!!e}function Je(e){return!!e&&typeof e=="object"}const Ir=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function z(e,t){return e?Ir.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Dr(e,t){return e&&t.every(n=>z(e,n))}function L(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function _n(e,t,n=!1,r={}){const i=L(e),s=new Set(L(t));if(!n){const o=i.filter(a=>!s.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}s.forEach(o=>{if(!z(e,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const l=e[o],c=t[o];r[o]||xn(l,c,a,n,r[o]??{})})}function xn(e,t,n,r,i){var a;const s=typeof e,o=typeof t;s!==o&&n(`type "${s}" did not match expected type "${o}"`);try{z(t,"constructor")&&(!z(e,"constructor")||e.constructor!==t.constructor)&&n(`constructor "${(a=e==null?void 0:e.constructor)==null?void 0:a.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(t)?(Array.isArray(e)||n("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{xn(l,d,n,r,i);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${ft(h)}`)}}).filter($n).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Je(t)&&_n(e,t,r,i)}function mt(e){return Array.isArray(e)?"array":typeof e}function ce(e,t){return mt(e)===t}function Or(e,t,n){if(!ce(e,t))throw new TypeError(`'${n}' is of type '${mt(e)}' but type '${t}' was expected.`)}function Pt({jsonString:e,errorHandler:t,shapeMatcher:n}){try{const r=JSON.parse(e);return n!=null&&(ce(n,"object")?_n(r,n):Or(r,mt(n),"parsedJson")),r}catch(r){if(t)return t(r);throw r}}function Rt({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(r){if(n)return n(r);throw r}}const Nt="Failed to compare objects using JSON.stringify";function Lt(e,t,n){return Rt({source:e,errorHandler(r){if(n)return"";throw r}})===Rt({source:t,errorHandler(r){if(n)return"";throw r}})}function gt(e,t,n={}){try{return e===t?!0:Je(e)&&Je(t)?Lt(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(i=>gt(e[i],t[i])):!1:Lt(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(r){const i=X(r);throw i.message.startsWith(Nt)||(i.message=`${Nt}: ${i.message}`),i}}function Ce(e,t){let n=!1;const r=L(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(L(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function R(e){return String(e).endsWith("px")?String(e):`${e}px`}function An(e){const t=K();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Mr(e){return!!(z(e,"then")&&typeof e.then=="function")}class Hr extends Error{constructor(t,n=`Promised timed out after ${t} ms.`){super(n),this.durationMs=t,this.message=n,this.name="PromiseTimeoutError"}}function kr(e,t){return new Promise(async(n,r)=>{const i=e===1/0?void 0:setTimeout(()=>{r(new Hr(e))},e);try{const s=await t;n(s)}catch(s){r(s)}finally{clearTimeout(i)}})}function K(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${K.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function Br(e,t){try{return Ur(e,t),!0}catch{return!1}}function Ur(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}const Fr=globalThis.crypto;function Wr(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return Fr.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}function Ne(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pt=e=>(...t)=>({_$litDirective$:e,values:t});let ze=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;const $e=window,Z=$e.trustedTypes,It=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ge="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,Cn="?"+M,jr=`<${Cn}>`,j=document,ue=()=>j.createComment(""),de=e=>e===null||typeof e!="object"&&typeof e!="function",zn=Array.isArray,Vr=e=>zn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ie=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Ot=/>/g,B=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,Ht=/"/g,Pn=/^(?:script|style|textarea|title)$/i,qr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Yr=qr(1),I=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),kt=new WeakMap,F=j.createTreeWalker(j,129,null,!1),Jr=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":"",o=re;for(let l=0;l<n;l++){const c=e[l];let u,d,h=-1,m=0;for(;m<c.length&&(o.lastIndex=m,d=o.exec(c),d!==null);)m=o.lastIndex,o===re?d[1]==="!--"?o=Dt:d[1]!==void 0?o=Ot:d[2]!==void 0?(Pn.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=B):d[3]!==void 0&&(o=B):o===B?d[0]===">"?(o=i??re,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?B:d[3]==='"'?Ht:Mt):o===Ht||o===Mt?o=B:o===Dt||o===Ot?o=re:(o=B,i=void 0);const f=o===B&&e[l+1].startsWith("/>")?" ":"";s+=o===re?c+jr:h>=0?(r.push(u),c.slice(0,h)+Ge+c.slice(h)+M+f):c+M+(h===-2?(r.push(void 0),l):f)}const a=s+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[It!==void 0?It.createHTML(a):a,r]};class he{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,u]=Jr(t,n);if(this.el=he.createElement(c,r),F.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=F.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith(Ge)||h.startsWith(M)){const m=u[o++];if(d.push(h),m!==void 0){const f=i.getAttribute(m.toLowerCase()+Ge).split(M),p=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:p[2],strings:f,ctor:p[1]==="."?Xr:p[1]==="?"?Kr:p[1]==="@"?Zr:Pe})}else l.push({type:6,index:s})}for(const h of d)i.removeAttribute(h)}if(Pn.test(i.tagName)){const d=i.textContent.split(M),h=d.length-1;if(h>0){i.textContent=Z?Z.emptyScript:"";for(let m=0;m<h;m++)i.append(d[m],ue()),F.nextNode(),l.push({type:2,index:++s});i.append(d[h],ue())}}}else if(i.nodeType===8)if(i.data===Cn)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(M,d+1))!==-1;)l.push({type:7,index:s}),d+=M.length-1}s++}}static createElement(t,n){const r=j.createElement("template");return r.innerHTML=t,r}}function ee(e,t,n=e,r){var i,s,o,a;if(t===I)return t;let l=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const c=de(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(t=ee(e,l._$AS(e,t.values),l,r)),t}let Gr=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:j).importNode(r,!0);F.currentNode=s;let o=F.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new me(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new ei(o,this,t)),this._$AV.push(u),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=F.nextNode(),a++)}return F.currentNode=j,s}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class me{constructor(t,n,r,i){var s;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ee(this,t,n),de(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Vr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&de(this._$AH)?this._$AA.nextSibling.data=t:this.$(j.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=he.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new Gr(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(t){let n=kt.get(t.strings);return n===void 0&&kt.set(t.strings,n=new he(t)),n}T(t){zn(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new me(this.k(ue()),this.k(ue()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class Pe{constructor(t,n,r,i,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=ee(this,t,n,0),o=!de(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=ee(this,a[r+l],n,l),c===I&&(c=this._$AH[l]),o||(o=!de(c)||c!==this._$AH[l]),c===S?t=S:t!==S&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xr extends Pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const Qr=Z?Z.emptyScript:"";class Kr extends Pe{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,Qr):this.element.removeAttribute(this.name)}}class Zr extends Pe{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){var r;if((t=(r=ee(this,t,n,0))!==null&&r!==void 0?r:S)===I)return;const i=this._$AH,s=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==S&&(i===S||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class ei{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ee(this,t)}}const Bt=$e.litHtmlPolyfillSupport;Bt==null||Bt(he,me),((Le=$e.litHtmlVersions)!==null&&Le!==void 0?Le:$e.litHtmlVersions=[]).push("2.7.4");const ti=(e,t,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new me(t.insertBefore(ue(),a),a,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xe=class extends ze{constructor(t){if(super(t),this.et=S,t.type!==Tn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this.ft=void 0,this.et=t;if(t===I)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Xe.directiveName="unsafeHTML",Xe.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ut=class extends Xe{};Ut.directiveName="unsafeSVG",Ut.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ni(e,t,n){return e?t():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=window,vt=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),Ft=new WeakMap;let Rn=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(vt&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ft.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ft.set(n,t))}return t}toString(){return this.cssText}};const C=e=>new Rn(typeof e=="string"?e:e+"",void 0,yt),oe=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Rn(n,e,yt)},ri=(e,t)=>{vt?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),i=we.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)})},Wt=vt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return C(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const _e=window,jt=_e.trustedTypes,ii=jt?jt.emptyScript:"",Vt=_e.reactiveElementPolyfillSupport,Qe={toAttribute(e,t){switch(t){case Boolean:e=e?ii:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Nn=(e,t)=>t!==e&&(t==t||e==e),Oe={attribute:!0,type:String,converter:Qe,reflect:!1,hasChanged:Nn},Ke="finalized";class q extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),t.push(i))}),t}static createProperty(t,n=Oe){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(i){const s=this[t];this[n]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Oe}static finalize(){if(this.hasOwnProperty(Ke))return!1;this[Ke]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Wt(i))}else t!==void 0&&n.push(Wt(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ri(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=Oe){var i;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Qe).toAttribute(n,r.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,n){var r;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Qe;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(t,n,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Nn)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}q[Ke]=!0,q.elementProperties=new Map,q.elementStyles=[],q.shadowRootOptions={mode:"open"},Vt==null||Vt({ReactiveElement:q}),((De=_e.reactiveElementVersions)!==null&&De!==void 0?De:_e.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me,He;class ae extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ti(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return I}}ae.finalized=!0,ae._$litElement$=!0,(Me=globalThis.litElementHydrateSupport)===null||Me===void 0||Me.call(globalThis,{LitElement:ae});const qt=globalThis.litElementPolyfillSupport;qt==null||qt({LitElement:ae});((He=globalThis.litElementVersions)!==null&&He!==void 0?He:globalThis.litElementVersions=[]).push("3.3.2");var si=globalThis&&globalThis.__esDecorate||function(e,t,n,r,i,s){function o(w){if(w!==void 0&&typeof w!="function")throw new TypeError("Function expected");return w}for(var a=r.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!t&&e?r.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,r.name):{}),d,h=!1,m=n.length-1;m>=0;m--){var f={};for(var p in r)f[p]=p==="access"?{}:r[p];for(var p in r.access)f.access[p]=r.access[p];f.addInitializer=function(w){if(h)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(w||null))};var y=(0,n[m])(a==="accessor"?{get:u.get,set:u.set}:u[l],f);if(a==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=o(y.get))&&(u.get=d),(d=o(y.set))&&(u.set=d),(d=o(y.init))&&i.push(d)}else(d=o(y))&&(a==="field"?i.push(d):u[l]=d)}c&&Object.defineProperty(c,r.name,u),h=!0},oi=globalThis&&globalThis.__runInitializers||function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},ai=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function li(){function e(t,n){return t}return e}let Ln=(()=>{let e=[li()],t,n=[],r;return r=class extends ae{},ai(r,"DeclarativeElement"),si(null,t={value:r},e,{kind:"class",name:r.name},null,n),r=t.value,oi(r,n),r})();function Yt(e){return e!==e.toUpperCase()}function ci(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0?s[i-1]:"",a=i<s.length-1?s[i+1]:"",l=Yt(o)||Yt(a);return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const ui=["january","february","march","april","may","june","july","august","september","october","november","december"];ui.map(e=>e.slice(0,3));function di(e){return!!e&&typeof e=="object"}function Jt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function hi(e){return Array.isArray(e)?"array":typeof e}function fi(e,t){return hi(e)===t}function mi(e,t){let n=!1;const r=Jt(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Jt(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function In(e){if(di(e))return mi(e,(n,r)=>{if(!fi(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(ci(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?C(n):n.startsWith("-")?oe`-${C(n)}`:oe`--${C(n)}`;return{name:o,value:oe`var(${o}, ${C(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${In.name}' function.`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},pi=(e,t,n)=>{t.constructor.createProperty(n,e)};function Dn(e){return(t,n)=>n!==void 0?pi(e,t,n):gi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;((ke=window.HTMLSlotElement)===null||ke===void 0?void 0:ke.prototype.assignedElements)!=null;const Ze=Symbol("this-is-an-element-vir-declarative-element"),bt=Symbol("key for ignoring inputs not having been set yet"),vi={[bt]:!0,allowPolymorphicState:!1};function On(e,t){const n=e.instanceState;L(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&L(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),Mn(e)}function Mn(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Hn(e,t){return et(e,t),e.element}function yi(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function et(e,t){const n=yi(e),r=n?`: found in ${n}`:"";if(e.type!==Tn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function wt(e,t){return t?Gt(e,t):Gt(void 0,e)}const Gt=pt(class extends ze{constructor(e){super(e),this.element=Hn(e,"assign")}render(e,t){return bi(e,this.element,t),I}});function bi(e,t,n){On(t,n)}function kn(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof Ln?!0:kn(n)}function Xt(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class wi extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Bn(){return e=>{var t;return t=class extends wi{constructor(n){super(e,n),this._type=e}},t.type=e,t}}function Se(){return Bn()}function Si(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const r=Bn()(n);return t[n]=r,t},{}):{}}const tt="_is_element_vir_observable_property_handler_instance",nt="_is_element_vir_observable_property_handler_creator";function Ei(e){return z(e,nt)&&e[nt]===!0}function $i(e){return z(e,tt)&&e[tt]===!0}function _i(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Qt(e,t){const n=e;function r(o){t?_i(o,e,e.tagName):Dn()(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set:(o,a,l)=>{r(a);const c=e.observablePropertyHandlerMap[a];function u(d){o[a]=d,n[a]=d}return Ei(l)&&(l=l.init()),$i(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[a]=l):c?c.setValue(l):u(l),!0},ownKeys:o=>Reflect.ownKeys(o),getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has:(o,a)=>Reflect.has(o,a)})}function xi(e){return e?Ce(e,t=>t):{}}function Ai({hostClassNames:e,cssVars:t}){return{hostClasses:Ce(e,(n,r)=>({name:C(r),selector:C(`:host(.${r})`)})),cssVars:t}}function Ti({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&L(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function Ci(e,t){function n(i){L(i).forEach(s=>{const o=i[s];e.instanceState[s]=o})}return{dispatch:i=>e.dispatchEvent(i),updateState:n,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var zi=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function St(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const n={...vi,...e.options},r=Si(e.events),i=xi(e.hostClasses);e.hostClasses&&Xt(e.tagName,e.hostClasses),e.cssVars&&Xt(e.tagName,e.cssVars);const s=e.cssVars?In(e.cssVars):{},o=typeof e.styles=="function"?e.styles(Ai({hostClassNames:i,cssVars:s})):e.styles||oe``,a=e.renderCallback,l=(t=class extends Ln{createRenderParams(){return Ci(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Mn(this)}render(){try{kn(this)&&!this.haveInputsBeenSet&&!n[bt]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${wt.name}" directive on it. If no inputs are intended, use "${St.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=a(c);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Ti({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},u}catch(c){const u=X(c);throw u.message=`Failed to render '${e.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){On(this,c)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Qt(this,!1),this.instanceState=Qt(this,!((u=e.options)!=null&&u.allowPolymorphicState));const c=e.stateInitStatic||{};L(c).forEach(d=>{Dn()(this,d),this.instanceState[d]=c[d]}),this.definition=l}},zi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=o,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=a,t.hostClasses=i,t.cssVars=s,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[Ze]:{value:!0,writable:!1},name:{value:Nr(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Un(){return e=>St({...e,options:{[bt]:!1,...e.options}})}var Fn;const x=Symbol("not set");class Pi{constructor(t){this.lastTrigger=x,this.resolutionValue=x,this.rejectionError=x,this.listeners=new Set,this.waitingForValuePromise=K(),this[Fn]=!0,this.resetValue(t)}resetValue(t){if(this.resetWaitingForValuePromise(),t!==x){if(z(t,"defaultValue"))t.defaultValue instanceof Promise?this.setValue({newPromise:t.defaultValue}):this.setValue({resolvedValue:t.defaultValue});else if(z(t,"updateCallback")){this.promiseUpdater=t.updateCallback;return}}}fireListeners(){const t=this.getValue();this.listeners.forEach(n=>{n(t)})}setPromise(t){t!==this.lastSetPromise&&(this.resolutionValue=x,this.rejectionError=x,this.lastSetPromise=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),t.then(n=>{this.lastSetPromise===t&&this.resolveValue(n)}).catch(n=>{this.lastSetPromise===t&&(this.rejectionError=X(n),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(n),this.fireListeners())}))}resolveValue(t){t!==this.resolutionValue&&(this.rejectionError=x,this.resolutionValue=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(t),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=K()}setValue(t){if(z(t,"serializableTrigger")){const n={...t.serializableTrigger};if(this.lastTrigger===x||!gt(n,this.lastTrigger,{ignoreNonSerializableProperties:!0})){if(this.lastTrigger=n,!this.promiseUpdater)throw new Error("got serializableTrigger input to updateState for asyncProp but no updateCallback has been defined.");const r=this.promiseUpdater(n);this.setPromise(r),this.fireListeners()}}else if("newPromise"in t)this.lastTrigger,this.setPromise(t.newPromise),this.fireListeners();else if("resolvedValue"in t)this.resolveValue(t.resolvedValue);else if("forceUpdate"in t)this.lastTrigger=x,this.resolutionValue=x,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners();else throw new Error("Got no properties for updating asyncProp.")}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==x)return this.rejectionError;if(this.resolutionValue===x)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(t,n){this.listeners.add(n),t&&n(this.getValue())}addMultipleListeners(t){t.forEach(n=>this.listeners.add(n))}getAllListeners(){return this.listeners}removeListener(t){return this.listeners.has(t)?(this.listeners.delete(t),!0):!1}removeAllListeners(){const t=this.listeners.size;return this.listeners.clear(),t}}Fn=tt;function Wn(...e){const t=Br(e,1)?e[0]:x;return{[nt]:!0,init(){return new Pi(t)}}}function J(e,t){return Ri(e,t)}const Ri=pt(class extends ze{constructor(e){super(e),this.element=Hn(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),I}}),Kt="onDomCreated",Zt=pt(class extends ze{constructor(e){super(e),et(e,Kt)}update(e,[t]){et(e,Kt);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}});function rt(e,t,n,r){return e instanceof Error?r?r(e):ft(e):Mr(e)?t:n?n(e):e}function en(e,t,n){return ni(e,()=>t,()=>n)}function Ni(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),Un()(n(r))),defineElementNoInputs:r=>(t(r),St(n(r)))}}function Li(e,t){return e.filter((n,r)=>!t.includes(r))}function jn(e){return e.filter(t=>Dr(t,["tagName",Ze])&&!!t.tagName&&!!t[Ze])}const Vn=new WeakMap;function Ii(e,t){var i;const n=jn(t);return(i=qn(Vn,[e,...n]).value)==null?void 0:i.template}function Di(e,t,n){const r=jn(t);return Jn(Vn,[e,...r],n)}function qn(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Yn(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?qn(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Yn(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Jn(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Yn(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),Jn(l,t,n,r+1)}function Gn(e,t,n){return{name:e,check:t,transform:n}}const Oi=new WeakMap;function Xn(e,t,n){const r=Ii(e,t),i=r??n();if(!r){const o=Di(e,t,i);if(o.result)Oi.set(e,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=Li(t,i.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Qn(e,t,n,r){const i=[],s=[],o=[];return e.forEach((l,c)=>{var y;const u=i.length-1,d=i[u],h=c-1,m=t[h];let f;r&&r(l),typeof d=="string"&&(f=(y=n.find(w=>w.check(d,l,m)))==null?void 0:y.transform,f&&(i[u]=d+f(m)+l,o.push(h))),f||i.push(l);const p=e.raw[c];f?s[u]=s[u]+f(m)+p:s.push(p)}),{templateStrings:Object.assign([],i,{raw:s}),valueIndexDeletions:o}}function Kn(e){return z(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Mi=[Gn("tag name css selector interpolation",(e,t,n)=>Kn(n),e=>e.tagName)];function Hi(e,t){return Qn(e,t,Mi)}function G(e,...t){const n=Xn(e,t,()=>Hi(e,t));return oe(n.strings,...n.values)}const ki=[Gn("tag name interpolation",(e,t,n)=>{const r=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=Kn(n);if(r&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&i},e=>e.tagName)];function Bi(e){}function Ui(e){return Qn(e.strings,e.values,ki,Bi)}function $(e,...t){const n=Yr(e,...t),r=Xn(e,t,()=>Ui(n));return{...n,strings:r.strings,values:r.values}}function Fi(e,t){return e<t}function Wi(e,t){return e>t}const tn={width:250,height:250};function ji({constraint:e,box:t,constraintType:n="max"}){return(n==="max"?Wi:Fi)(t.width/t.height,e.width/e.height)?"width":"height"}function Be({box:e,constraint:t,constraintType:n}){const r=ji({box:e,constraint:t,constraintType:n});return t[r]/e[r]}function Zn({box:e,ratio:t}){return Ce(e,(n,r)=>r*t)}function it({box:e,min:t,max:n}){return Ce(e,(r,i)=>Lr({value:i,min:(t==null?void 0:t[r])??0,max:(n==null?void 0:n[r])??1/0}))}function er({min:e,max:t,box:n}){const r=tr({min:e,max:t,box:n}),i=Zn({box:n,ratio:r});return{height:Math.floor(i.height||(e==null?void 0:e.height)||tn.height),width:Math.floor(i.width||(e==null?void 0:e.width)||tn.width)}}function tr({min:e,max:t,box:n}){if(!e&&!t)return 1;const r=e?Be({box:n,constraint:e,constraintType:"min"}):1,i=t?Be({box:n,constraint:t,constraintType:"max"}):1,s=r>1?r:i<1?i:1,o=Zn({ratio:s,box:n});return(e?Be({box:o,constraint:e,constraintType:"min"}):1)>1?r:s}function W(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if((!t||!(t!=null&&t.length))&&(!n||!n.length))return"";const r=[...n||[],""],s=(t??[""]).map((o,a)=>{const l=Vi(o,r[a]);return`${o}${l}`});return ht(s.join(""))}function Vi(e,t){return t._$litType$!=null||t._$litDirective$!=null?W(t):Array.isArray(t)?t.map(r=>W(r)).join(""):e.endsWith("=")?`"${t}"`:t}function qi(e){const t=Yi(e);return ce(t,"object")||ce(t,"array")}function Yi(e){const t=Pt({jsonString:e,errorHandler:()=>{}});if(t)return t;const n=Ji(e);return Pt({jsonString:n,errorHandler:()=>{}})}function Ji(e){return ht(e).replace(/,\s*([}\]])/,"$1")}const Et="vir-resizable-image";function Gi(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var te=Gi();function Xi(){try{if(!te||!te.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function $t(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const g=Promise;function b(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function Y(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function D(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function _t(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const st="local-forage-detect-blob-support";let ve;const P={},Qi=Object.prototype.toString,ge="readonly",Re="readwrite";function Ki(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function Zi(e){return new g(function(t){var n=e.transaction(st,Re),r=$t([""]);n.objectStore(st).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function es(e){return typeof ve=="boolean"?g.resolve(ve):Zi(e).then(function(t){return ve=t,ve})}function xe(e){var t=P[e.name],n={};n.promise=new g(function(r,i){n.resolve=r,n.reject=i}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function ot(e){var t=P[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function at(e,t){var n=P[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function nr(e,t){return new g(function(n,r){if(P[e.name]=P[e.name]||or(),e.db)if(t)xe(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var s=te.open.apply(te,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(st)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),ot(e)}})}function xt(e){return nr(e,!1)}function At(e){return nr(e,!0)}function rr(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function ts(e){return new g(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},r.readAsBinaryString(e)})}function ir(e){var t=Ki(atob(e.data));return $t([t],{type:e.type})}function sr(e){return e&&e.__local_forage_encoded_blob}function ns(e){var t=this,n=t._initReady().then(function(){var r=P[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return Y(n,e,e),n}function rs(e){xe(e);for(var t=P[e.name],n=t.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,xt(e).then(i=>(e.db=i,rr(e)?At(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw at(e,i),i})}function O(e,t,n,r){r===void 0&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(s){if(r>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return g.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),At(e)}).then(()=>rs(e).then(function(){O(e,t,n,r-1)})).catch(n);n(s)}}function or(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function is(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=P[n.name];i||(i=or(),P[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=ns);var s=[];function o(){return g.resolve()}for(var a=0;a<i.forages.length;a++){var l=i.forages[a];l!==t&&s.push(l._initReady().catch(o))}var c=i.forages.slice(0);return g.all(s).then(function(){return n.db=i.db,xt(n)}).then(function(u){return n.db=u,rr(n,t._defaultConfig.version)?At(n):u}).then(function(u){n.db=i.db=u,t._dbInfo=n;for(var d=0;d<c.length;d++){var h=c[d];h!==t&&(h._dbInfo.db=n.db,h._dbInfo.version=n.version)}})}function ss(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){O(n._dbInfo,ge,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),sr(u)&&(u=ir(u)),i(u)},c.onerror=function(){s(c.error)}}catch(u){s(u)}})}).catch(s)});return b(r,t),r}function os(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){O(n._dbInfo,ge,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var h=d.value;sr(h)&&(h=ir(h));var m=e(h,d.key,u++);m!==void 0?i(m):d.continue()}else i()},c.onerror=function(){s(c.error)}}catch(d){s(d)}})}).catch(s)});return b(r,t),r}function as(e,t,n){var r=this;e=D(e);var i=new g(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,Qi.call(t)==="[object Blob]"?es(a.db).then(function(l){return l?t:ts(t)}):t}).then(function(l){O(r._dbInfo,Re,function(c,u){if(c)return o(c);try{var d=u.objectStore(r._dbInfo.storeName);l===null&&(l=void 0);var h=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),s(l)},u.onabort=u.onerror=function(){var m=h.error?h.error:h.transaction.error;o(m)}}catch(m){o(m)}})}).catch(o)});return b(i,n),i}function ls(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){O(n._dbInfo,Re,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(c.error)},a.onabort=function(){var u=c.error?c.error:c.transaction.error;s(u)}}catch(u){s(u)}})}).catch(s)});return b(r,t),r}function cs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){O(t._dbInfo,Re,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var c=l.error?l.error:l.transaction.error;i(c)}}catch(c){i(c)}})}).catch(i)});return b(n,e),n}function us(e){var t=this,n=new g(function(r,i){t.ready().then(function(){O(t._dbInfo,ge,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.count();l.onsuccess=function(){r(l.result)},l.onerror=function(){i(l.error)}}catch(c){i(c)}})}).catch(i)});return b(n,e),n}function ds(e,t){var n=this,r=new g(function(i,s){if(e<0){i(null);return}n.ready().then(function(){O(n._dbInfo,ge,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){i(null);return}e===0||c?i(d.key):(c=!0,d.advance(e))},u.onerror=function(){s(u.error)}}catch(d){s(d)}})}).catch(s)});return b(r,t),r}function hs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){O(t._dbInfo,ge,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){r(c);return}c.push(u.key),u.continue()},l.onerror=function(){i(l.error)}}catch(u){i(u)}})}).catch(i)});return b(n,e),n}function fs(e,t){t=_t.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=g.reject("Invalid arguments");else{const o=e.name===n.name&&r._dbInfo.db?g.resolve(r._dbInfo.db):xt(e).then(a=>{const l=P[e.name],c=l.forages;l.db=a;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const l=a.version+1;xe(e);const c=P[e.name],u=c.forages;a.close();for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=null,m._dbInfo.version=l}return new g((h,m)=>{const f=te.open(e.name,l);f.onerror=p=>{f.result.close(),m(p)},f.onupgradeneeded=()=>{var p=f.result;p.deleteObjectStore(e.storeName)},f.onsuccess=()=>{const p=f.result;p.close(),h(p)}}).then(h=>{c.db=h;for(let m=0;m<u.length;m++){const f=u[m];f._dbInfo.db=h,ot(f._dbInfo)}}).catch(h=>{throw(at(e,h)||g.resolve()).catch(()=>{}),h})}):i=o.then(a=>{xe(e);const l=P[e.name],c=l.forages;a.close();for(var u=0;u<c.length;u++){const h=c[u];h._dbInfo.db=null}return new g((h,m)=>{var f=te.deleteDatabase(e.name);f.onerror=()=>{const p=f.result;p&&p.close(),m(f.error)},f.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},f.onsuccess=()=>{const p=f.result;p&&p.close(),h(p)}}).then(h=>{l.db=h;for(var m=0;m<c.length;m++){const f=c[m];ot(f._dbInfo)}}).catch(h=>{throw(at(e,h)||g.resolve()).catch(()=>{}),h})})}return b(i,t),i}var ms={_driver:"asyncStorage",_initStorage:is,_support:Xi(),iterate:os,getItem:ss,setItem:as,removeItem:ls,clear:cs,length:us,key:ds,keys:hs,dropInstance:fs};function gs(){return typeof openDatabase=="function"}var H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ps="~~local_forage_type~",nn=/^~~local_forage_type~([^~]+)~/,Ae="__lfsc__:",lt=Ae.length,Tt="arbf",ct="blob",ar="si08",lr="ui08",cr="uic8",ur="si16",dr="si32",hr="ur16",fr="ui32",mr="fl32",gr="fl64",rn=lt+Tt.length,sn=Object.prototype.toString;function pr(e){var t=e.length*.75,n=e.length,r,i=0,s,o,a,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(r=0;r<n;r+=4)s=H.indexOf(e[r]),o=H.indexOf(e[r+1]),a=H.indexOf(e[r+2]),l=H.indexOf(e[r+3]),u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c}function ut(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=H[t[r]>>2],n+=H[(t[r]&3)<<4|t[r+1]>>4],n+=H[(t[r+1]&15)<<2|t[r+2]>>6],n+=H[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function vs(e,t){var n="";if(e&&(n=sn.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&sn.call(e.buffer)==="[object ArrayBuffer]")){var r,i=Ae;e instanceof ArrayBuffer?(r=e,i+=Tt):(r=e.buffer,n==="[object Int8Array]"?i+=ar:n==="[object Uint8Array]"?i+=lr:n==="[object Uint8ClampedArray]"?i+=cr:n==="[object Int16Array]"?i+=ur:n==="[object Uint16Array]"?i+=hr:n==="[object Int32Array]"?i+=dr:n==="[object Uint32Array]"?i+=fr:n==="[object Float32Array]"?i+=mr:n==="[object Float64Array]"?i+=gr:t(new Error("Failed to get type for BinaryArray"))),t(i+ut(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=ps+e.type+"~"+ut(this.result);t(Ae+ct+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function ys(e){if(e.substring(0,lt)!==Ae)return JSON.parse(e);var t=e.substring(rn),n=e.substring(lt,rn),r;if(n===ct&&nn.test(t)){var i=t.match(nn);r=i[1],t=t.substring(i[0].length)}var s=pr(t);switch(n){case Tt:return s;case ct:return $t([s],{type:r});case ar:return new Int8Array(s);case lr:return new Uint8Array(s);case cr:return new Uint8ClampedArray(s);case ur:return new Int16Array(s);case hr:return new Uint16Array(s);case dr:return new Int32Array(s);case fr:return new Uint32Array(s);case mr:return new Float32Array(s);case gr:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var Ct={serialize:vs,deserialize:ys,stringToBuffer:pr,bufferToString:ut};function vr(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function bs(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var i=new g(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){vr(a,n,function(){t._dbInfo=n,s()},function(l,c){o(c)})},o)});return n.serializer=Ct,i}function k(e,t,n,r,i,s){e.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?s(l,a):vr(l,t,function(){l.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function ws(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){k(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=o.serializer.deserialize(u)),i(u)},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function Ss(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){k(a,o,`SELECT * FROM ${o.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,h=0;h<d;h++){var m=u.item(h),f=m.value;if(f&&(f=o.serializer.deserialize(f)),f=e(f,m.key,h+1),f!==void 0){i(f);return}}i()},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function yr(e,t,n,r){var i=this;e=D(e);var s=new g(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var l=t,c=i._dbInfo;c.serializer.serialize(t,function(u,d){d?a(d):c.db.transaction(function(h){k(h,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){o(l)},function(m,f){a(f)})},function(h){if(h.code===h.QUOTA_ERR){if(r>0){o(yr.apply(i,[e,l,n,r-1]));return}a(h)}})})}).catch(a)});return b(s,n),s}function Es(e,t,n){return yr.apply(this,[e,t,n,1])}function $s(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){k(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function _s(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){k(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,l){i(l)})})}).catch(i)});return b(n,e),n}function xs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){k(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,l){var c=l.rows.item(0).c;r(c)},function(a,l){i(l)})})}).catch(i)});return b(n,e),n}function As(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){k(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;i(u)},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function Ts(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){k(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);r(c)},function(a,l){i(l)})})}).catch(i)});return b(n,e),n}function Cs(e){return new g(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function zs(e,t){t=_t.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;return e.name?i=new g(function(s){var o;e.name===n.name?o=r._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s(Cs(o))}).then(function(s){return new g(function(o,a){s.db.transaction(function(l){function c(m){return new g(function(f,p){l.executeSql(`DROP TABLE IF EXISTS ${m}`,[],function(){f()},function(y,w){p(w)})})}for(var u=[],d=0,h=s.storeNames.length;d<h;d++)u.push(c(s.storeNames[d]));g.all(u).then(function(){o()}).catch(function(m){a(m)})},function(l){a(l)})})}):i=g.reject("Invalid arguments"),b(i,t),i}var Ps={_driver:"webSQLStorage",_initStorage:bs,_support:gs(),iterate:Ss,getItem:ws,setItem:Es,removeItem:$s,clear:_s,length:xs,key:As,keys:Ts,dropInstance:zs};function Rs(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function br(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Ns(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Ls(){return!Ns()||localStorage.length>0}function Is(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=br(e,t._defaultConfig),Ls()?(t._dbInfo=n,n.serializer=Ct,g.resolve()):g.reject()}function Ds(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return b(n,e),n}function Os(e,t){var n=this;e=D(e);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return b(r,t),r}function Ms(e,t){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,l=1,c=0;c<a;c++){var u=localStorage.key(c);if(u.indexOf(s)===0){var d=localStorage.getItem(u);if(d&&(d=i.serializer.deserialize(d)),d=e(d,u.substring(o),l++),d!==void 0)return d}}});return b(r,t),r}function Hs(e,t){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return b(r,t),r}function ks(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return b(n,e),n}function Bs(e){var t=this,n=t.keys().then(function(r){return r.length});return b(n,e),n}function Us(e,t){var n=this;e=D(e);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return b(r,t),r}function Fs(e,t,n){var r=this;e=D(e);var i=r.ready().then(function(){t===void 0&&(t=null);var s=t;return new g(function(o,a){var l=r._dbInfo;l.serializer.serialize(t,function(c,u){if(u)a(u);else try{localStorage.setItem(l.keyPrefix+e,c),o(s)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(d),a(d)}})})});return b(i,n),i}function Ws(e,t){if(t=_t.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i;return e.name?i=new g(function(s){e.storeName?s(br(e,r._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=g.reject("Invalid arguments"),b(i,t),i}var js={_driver:"localStorageWrapper",_initStorage:Is,_support:Rs(),iterate:Ms,getItem:Os,setItem:Fs,removeItem:Us,clear:Ds,length:Bs,key:Hs,keys:ks,dropInstance:Ws};const Vs=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),qs=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(Vs(e[r],t))return!0;r++}return!1},wr=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},ie={},on={},Q={INDEXEDDB:ms,WEBSQL:Ps,LOCALSTORAGE:js},Ys=[Q.INDEXEDDB._driver,Q.WEBSQL._driver,Q.LOCALSTORAGE._driver],Ee=["dropInstance"],Ue=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ee),Js={description:"",driver:Ys.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Gs(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function Fe(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(wr(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class zt{constructor(t){for(let n in Q)if(Q.hasOwnProperty(n)){const r=Q[n],i=r._driver;this[n]=i,ie[i]||this.defineDriver(r)}this._defaultConfig=Fe({},Js),this._config=Fe({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const i=new g(function(s,o){try{const a=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(l);return}const c=Ue.concat("_initStorage");for(let h=0,m=c.length;h<m;h++){const f=c[h];if((!qs(Ee,f)||t[f])&&typeof t[f]!="function"){o(l);return}}(function(){const h=function(m){return function(){const f=new Error(`Method ${m} is not implemented by the current driver`),p=g.reject(f);return b(p,arguments[arguments.length-1]),p}};for(let m=0,f=Ee.length;m<f;m++){const p=Ee[m];t[p]||(t[p]=h(p))}})();const d=function(h){ie[a]&&console.info(`Redefining LocalForage driver: ${a}`),ie[a]=t,on[a]=h,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,o):d(!!t._support):d(!0)}catch(a){o(a)}});return Y(i,n,r),i}driver(){return this._driver||null}getDriver(t,n,r){const i=ie[t]?g.resolve(ie[t]):g.reject(new Error("Driver not found."));return Y(i,n,r),i}getSerializer(t){const n=g.resolve(Ct);return Y(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return Y(r,t,t),r}setDriver(t,n,r){const i=this;wr(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(u){return i._extend(u),o(),i._ready=i._initStorage(i._config),i._ready}function l(u){return function(){let d=0;function h(){for(;d<u.length;){let f=u[d];return d++,i._dbInfo=null,i._ready=null,i.getDriver(f).then(a).catch(h)}o();const m=new Error("No available storage method found.");return i._driverSet=g.reject(m),i._driverSet}return h()}}const c=this._driverSet!==null?this._driverSet.catch(()=>g.resolve()):g.resolve();return this._driverSet=c.then(()=>{const u=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(u).then(d=>{i._driver=d._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=l(s)})}).catch(()=>{o();const u=new Error("No available storage method found.");return i._driverSet=g.reject(u),i._driverSet}),Y(this._driverSet,n,r),this._driverSet}supports(t){return!!on[t]}_extend(t){Fe(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,i=t.length;r<i;r++){const s=t[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=Ue.length;t<n;t++)Gs(this,Ue[t])}createInstance(t){return new zt(t)}}const Sr=new zt,Xs=Sr;async function Er(){return await caches.open(Et)}async function Qs(e){return await(await Er()).match(e)}const an=Xs.createInstance({name:Et});async function Ks(e,t){await(await Er()).put(e,t)}const We=new Map;async function Zs(e,t){var r;if(!We.has(e)){const i=K();We.set(e,i.promise);try{const s=new Request(e),o=t?await Qs(s):void 0,a=o??await fetch(s),l=t?await an.getItem(e)??void 0:void 0,c=l??{contentType:((r=a.headers.get("Content-Type"))==null?void 0:r.toLowerCase())||"",ok:a.ok,text:await a.clone().text()??""};if(!l&&t)try{an.setItem(e,c)}catch{}const u={blobUrl:URL.createObjectURL(await a.clone().blob()),...c};if(!o&&t)try{Ks(s,a)}catch{}i.resolve(u)}catch(s){throw i.reject(s),s}}const n=await We.get(e);if(!n)throw new Error("Stored a cached response but couldn't find it afterwards.");return n}var v=(e=>(e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf",e))(v||{});const eo=["text","json"],to=["audio"];function ln(e){return eo.includes(e)}function no(e){return to.includes(e)}async function ro(e,t){return e.includes("video")?"video":e.includes("svg")||t.includes("<svg")?"svg":e.includes("html")||t.includes("<html")?"html":qi(t)?"json":e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?"text":e.includes("audio")?"audio":e.includes("pdf")?"pdf":"image"}function io({imageType:e,imageText:t,imageUrl:n,blockAutoPlay:r}){return e==="image"?W($`
            <img src=${n} />
        `):e==="video"?W($`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):e==="text"||e==="json"?W($`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e==="audio"?W($`
                <audio controls src=${n}></audio>
            `):t}function so(e,t){if(t==="json")try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t==="html")return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function cn({imageUrl:e,blockAutoPlay:t,textTransformer:n=i=>i,allowPersistentCache:r}){const i=await Zs(e,r);if(!i.ok)throw new Error(`Failed to load '${e}'`);const s=await ro(i.contentType,i.text),o=n(so(i.text,s));return{templateString:io({imageText:o,imageType:s,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:s}}class dt extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let oo=!1;function ao(){return oo}var V;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(V||(V={}));const U=Symbol("any-origin");function $r(e,t){try{return lo(e,t),!0}catch{return!1}}function lo(e,t){if(e===U)return;if(!e.filter(r=>t.origin===r).length)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '[${e.join(", ")}]'`)}const co=Symbol("dangerDisableSecurityWarningsSymbol"),uo=["january","february","march","april","may","june","july","august","september","october","november","december"];uo.map(e=>e.slice(0,3));function ho(e){return e?e instanceof Error?e.message:go(e,"message")?String(e.message):String(e):""}function fo(e){return e instanceof Error?e:new Error(ho(e))}const mo=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function go(e,t){return e?mo.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function po(e){const t=_r();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function _r(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${_r.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function vo(e,t,n){return n.type===e&&n.direction===t}function yo(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function bo({message:e,verifyChildData:t,iframeElement:n},r,i,s){if(!n)throw new Error("No iframe element was provided.");let o=0,a=!1,l,c,u,d=!1;const h={...e,direction:V.FromParent,messageId:Wr(32)},m=e.type,f=r===U?["*"]:r;function p(w){try{if(!$r(r,w))return;const _=w.data;if(_.type==="error")throw new Error(`Child threw an error: ${_.data}`);if(ao(),_&&d&&vo(m,V.FromChild,_)&&_.messageId===h.messageId){let A=!1;try{A=t?t(_.data):!0}catch{}if(!A)return;a=!0,c=w,l=_}}catch(_){u=fo(_)}}globalThis.addEventListener("message",p);const y=Date.now();for(;!a&&Date.now()-y<i&&!u;){if(!n.isConnected)throw new dt;const w=n.contentWindow;w&&(d=!0,f.forEach(_=>{try{w.postMessage(h,{targetOrigin:_})}catch{}})),await po(s||yo(o)),o++}if(globalThis.removeEventListener("message",p),u)throw u;if(!a)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(i/1e3)}' seconds).`);if(!c)throw new Error("Never got message event from child but received a valid response");return{data:l==null?void 0:l.data,event:c}}function xr({allowedOrigins:e,timeoutMs:t=1e4,...n}){if(e!==U&&e.includes("*")&&(e=U),e===U&&!n[co]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),e!==U&&!e.length)throw new Error(`No allowed origins were provide to ${xr.name}. At least one must be provided.`);const r=e===U?["*"]:e;return{async sendMessageToChild(i){if(i.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await bo(i,e,i.timeoutMs||t,i.intervalMs)},listenForParentMessages(i){globalThis.addEventListener("message",async s=>{if(!$r(e,s))return;const o=s.data,a=await i({...o,originalEvent:s}),l={type:o.type,direction:V.FromChild,data:a,messageId:o.messageId};r.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}var T=(e=>(e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading",e))(T||{}),E=(e=>(e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded",e))(E||{});const N=xr({allowedOrigins:[window.location.origin]});async function wo(e,t){const n=K();e.onload=()=>{n.resolve()};try{await N.sendMessageToChild({message:{type:E.FrameReady},iframeElement:e,timeoutMs:t})}catch{await n.promise,await N.sendMessageToChild({message:{type:E.FrameReady},iframeElement:e,timeoutMs:t})}}async function So({min:e,max:t,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,forcedOriginalImageSize:o,timeoutMs:a}){var c;await wo(r,a),s&&await N.sendMessageToChild({message:{type:E.ForceSize,data:s},iframeElement:r,timeoutMs:a});const l=o??(await N.sendMessageToChild({message:{type:E.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(u){return!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height}})).data;return await Ar({min:e,max:t,imageDimensions:l,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,sendSizeMessage:!0,timeoutMs:a}),await N.sendMessageToChild({message:{type:E.ImageElementLoaded},iframeElement:r,timeoutMs:a}),((c=r.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function Ar({min:e,max:t,imageDimensions:n,host:r,iframeElement:i,imageData:s,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:l}){const c=r.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:e,max:t,box:o??n},d=ln(s.imageType)||no(s.imageType)?it(u):er(u);c.style.width=R(Math.floor(d.width)),c.style.height=R(Math.floor(d.height));const h=it({min:e,max:t,box:d});d.height<h.height?r.classList.add(T.VerticallyCenter):r.classList.remove(T.VerticallyCenter),r.style.width=R(h.width),r.style.height=R(h.height);const m=tr({min:e,max:t,box:o??n});if(a){if(m>3?await N.sendMessageToChild({message:{type:E.SendScalingMethod,data:"pixelated"},iframeElement:i,timeoutMs:l}):await N.sendMessageToChild({message:{type:E.SendScalingMethod,data:"default"},iframeElement:i,timeoutMs:l}),await N.sendMessageToChild({message:{type:E.SizeDetermined,data:d},iframeElement:i,timeoutMs:l}),s.imageType===v.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},p={width:m*f.width,height:m*f.height};await N.sendMessageToChild({message:{type:E.SendScale,data:p},iframeElement:i,timeoutMs:l})}else if(ln(s.imageType)){const f=o??n;if(f.height<d.height){const p=d.width/f.width,y=d.height/f.height,w=Math.min(p,y);await N.sendMessageToChild({message:{type:E.SendScale,data:{height:w,width:w}},iframeElement:i,timeoutMs:l})}}}}const ye={x:16,y:8};var un=Object.freeze,Eo=Object.defineProperty,dn=(e,t)=>un(Eo(e,"raw",{value:un(t||e.slice())})),hn,fn;function $o(e,t,n,r){const i=Math.random(),s=$(hn||(hn=dn([`
        <script>
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

            function isVideoLoaded() {
                const video = document.querySelector('video');

                if (video) {
                    return video.readyState >= 3;
                } else {
                    return false;
                }
            }

            function isImageLoaded() {
                const image = document.querySelector('img');

                return image?.complete;
            }

            function isAudioLoaded() {
                const audioElement = document.querySelector('audio');

                return audioElement?.readyState >= 3;
            }

            const loadedGrabbers = {
                `,`: () => true,
                `,`: () => true,
                `,`: () => isImageLoaded,
                `,`: isVideoLoaded,
                `,`: () => true,
                `,`: () => true,
                `,`: isAudioLoaded,
            };

            function isLoaded() {
                return loadedGrabbers[imageType]();
            }

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
                        if (isLoaded()) {
                            sendMessageToParent();
                        }
                        return;
                    }
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
                        document.querySelector('html').classList.add('scaled');
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
                                const scroll = `,`;
                                const textElement = document.querySelector('.text');

                                if (!scroll) {
                                    textElement.style.height = totalHeight + 'px';
                                    textElement.style.setProperty('-webkit-line-clamp', totalLines);
                                }
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

            function isVideoLoaded() {
                const video = document.querySelector('video');

                if (video) {
                    return video.readyState >= 3;
                } else {
                    return false;
                }
            }

            function isImageLoaded() {
                const image = document.querySelector('img');

                return image?.complete;
            }

            function isAudioLoaded() {
                const audioElement = document.querySelector('audio');

                return audioElement?.readyState >= 3;
            }

            const loadedGrabbers = {
                `,`: () => true,
                `,`: () => true,
                `,`: () => isImageLoaded,
                `,`: isVideoLoaded,
                `,`: () => true,
                `,`: () => true,
                `,`: isAudioLoaded,
            };

            function isLoaded() {
                return loadedGrabbers[imageType]();
            }

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
                        if (isLoaded()) {
                            sendMessageToParent();
                        }
                        return;
                    }
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
                        document.querySelector('html').classList.add('scaled');
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
                                const scroll = `,`;
                                const textElement = document.querySelector('.text');

                                if (!scroll) {
                                    textElement.style.height = totalHeight + 'px';
                                    textElement.style.setProperty('-webkit-line-clamp', totalLines);
                                }
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
    `])),e.imageType,n??"",v.Svg,v.Html,v.Image,v.Video,v.Text,v.Json,v.Audio,v.Svg,v.Html,v.Image,v.Video,v.Text,v.Json,v.Audio,V.FromChild,V.FromChild,E.ImageElementLoaded,E.FrameReady,E.SendScale,E.SendScalingMethod,E.SendSize,E.ForceSize,E.SizeDetermined,v.Json,v.Text,ye.y,r,v.Audio),o=$(fn||(fn=dn([`
        <!DOCTYPE html>
        <html class="image-type-`," ",`">
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
                        overflow: hidden;
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

                    /*
                        If the html body has been scaled then we don't want to allow scrolling.
                    */
                    html.allow-scrolling:not(.scaled) {
                        overflow-y: auto;
                    }

                    /*
                        If the html body has been scaled then we don't want to allow scrolling.
                    */
                    html.allow-scrolling:not(.scaled) body {
                        max-height: unset;
                        overflow: unset;
                    }
                </style>
                <script>
                    function doNothing() {}
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                <\/script>
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),e.imageType,r?"allow-scrolling":"",v.Image,v.Svg,v.Video,v.Text,v.Json,v.Text,v.Json,v.Text,v.Json,v.Text,v.Json,ye.y,ye.x,v.Text,v.Json,ye.y,i,t??"",s);return ht(W(o)).replace(String(i),`
${e.templateString}
`)}const _o=[v.Html,v.Video,v.Audio,v.Pdf],xo=[v.Html,v.Text,v.Json];function mn({blockInteractionInput:e,imageType:t,allowScrolling:n}){return typeof e=="boolean"?!e:_o.includes(t)?!0:!!(n&&xo.includes(t))}const Ao=1e4,To={imageData:Wn({async updateCallback(e){if(e.updateTriggered(),!e.imageUrl)return new Promise(()=>{});const t={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer,allowPersistentCache:!e.blockPersistentCache};let n;try{n=await kr(e.timeoutMs,cn(t))}catch{await An(1e3);try{n=await cn(t)}catch(i){throw i}}if(n)return n;throw new Error("no image data result")}}),error:void 0},le=Un()({tagName:Et,stateInitStatic:To,events:{settled:Se(),imageDataCalculated:Se(),errored:Se()},styles:G`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${C(T.VerticallyCenter)}) {
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
            /*
                Make the frame constraint initially fit to the .min-size wrapper.
            */
            width: 100%;
            height: 100%;

            position: relative;
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

        :host(.${C(T.HideLoading)}) .loading-wrapper,
        :host(.${C(T.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${C(T.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${C(T.HideLoading)}) iframe {
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),n=e[je];t&&n&&(t.srcdoc=n)},renderCallback({state:e,inputs:t,updateState:n,host:r,dispatch:i,events:s}){const o=t.timeoutMs??Ao;n({imageData:{serializableTrigger:{...t,timeoutMs:o,updateTriggered(){e.error&&n({error:void 0}),r.classList.remove(T.HideLoading),i(new s.settled(!1)),r.classList.remove(T.VerticallyCenter)}}}});const a=t.min&&t.max?it({box:t.min,max:t.max}):t.min,l=t.max,c=t.forcedOriginalImageSize?er({min:a,max:l,box:t.forcedOriginalImageSize}):void 0,u=rt(e.imageData,"",y=>{if(i(new s.imageDataCalculated(y)),y.imageType===v.Pdf)return $`
                        <iframe
                            src=${y.imageUrl}
                            ${Zt(async w=>{try{await Ar({forcedFinalImageSize:t.forcedFinalImageSize,host:r,iframeElement:w,imageData:y,imageDimensions:l??{width:500,height:500},max:l,min:a,sendSizeMessage:!1,timeoutMs:o}),r[je]="",i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch(_){const A=X(_);if(A instanceof dt)return;console.error(A),n({error:A}),i(new s.errored(A))}})}
                        ></iframe>
                    `;{const w=mn({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})&&!!t.allowScrolling;return $`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${$o(y,t.extraHtml,t.htmlSizeQuerySelector,w)}
                            ${Zt(async _=>{try{const A=await So({min:a,max:l,host:r,iframeElement:_,imageData:y,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:o});r[je]=A,i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch(A){const ne=X(A);if(ne instanceof dt)return;console.error(ne),n({error:ne}),i(new s.errored(ne))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},y=>{n({error:y}),i(new s.errored(X(y)))}),d=rt(e.imageData,gn,y=>mn({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})?"":gn,()=>""),h=e.imageData instanceof Error?e.imageData:e.error,m=h?G`
                  max-width: 100%;
                  max-height: 100%;
              `:c?G`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",f=G`
            width: ${(a==null?void 0:a.width)??250}px;
            height: ${(a==null?void 0:a.height)??250}px;
        `,p=$`
            <div class="frame-constraint" style=${m}>${u}</div>
        `;return $`
            ${en(!h,$`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${f}>
                ${en(!!h,$`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${h==null?void 0:h.message}</slot>
                        </div>
                    `,p)}
            </div>
            ${d}
        `}}),gn=$`
    <div class="click-cover"></div>
`,je="latest-frame-srcdoc";class pe extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class pn extends pe{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const fe="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Co=globalThis.history.pushState;function vn(...e){const t=Co.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(fe)),t}const zo=globalThis.history.replaceState;function yn(...e){const t=zo.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(fe)),t}function Po(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===vn)throw new pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===yn)throw new pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=vn,globalThis.history.replaceState=yn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(fe))})}}function Ro(e){return Array.from(e.entries()).reduce((t,n)=>(t[n[0]]=n[1],t),{})}function No(e){const t=Object.entries(e).reduce((n,r)=>{const i=`${r[0]}=${r[1]}`;return`${n}&${i}`},"");return new URLSearchParams(t)}function Lo(e){const n=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(o=>!!o),i=globalThis.location.search?Ro(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:i,hash:s}}class Io extends pe{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Tr(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const bn=6;function wn(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>bn)throw new Io(`Route sanitization depth has exceed the max of ${bn} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(Tr(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(i=>{i(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class Ve extends pe{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Do(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Ve(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Ve(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Ve(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Oo(e,t,n,r=!1){const i=Cr(e,t,n);r?globalThis.history.replaceState(void 0,"",i):globalThis.history.pushState(void 0,"",i)}function Cr(e,t,n=""){var l;if(!n&&t!=null)throw new pe("Route base regexp was defined but routeBase string was not provided.");const r=Mo(t)?`/${n}`:"",i=e.search?No(e.search).toString():"",s=i?`?${i}`:"",o=(l=e.hash)!=null&&l.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`${r}/${e.paths.join("/")}${s}${a}`}function Mo(e){return!!(e&&globalThis.location.pathname.match(e))}function Ho(e={}){var o;Do(e),Po();const t=(o=e.routeBase)==null?void 0:o.replace(/\/+$/,""),n=t?new RegExp(`^\\/${e.routeBase}`):void 0;let r=!1;const i=()=>wn(s),s={listeners:new Set,initParams:e,sanitizeFullRoute:a=>{const l={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(l):l},setRoutes:(a,l=!1,c=!1)=>{const u=s.getCurrentRawRoutes(),d={...u,...a},h=s.sanitizeFullRoute(d);if(!(!c&&Tr(u,h)))return Oo(h,n,t,l)},createRoutesUrl:a=>Cr(a,n,t),getCurrentRawRoutes:()=>Lo(n),removeAllRouteListeners(){s.listeners.forEach(a=>s.removeRouteListener(a))},addRouteListener:(a,l)=>{if(e.maxListenerCount&&s.listeners.size>=e.maxListenerCount)throw new pe(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return s.listeners.add(l),r||(globalThis.addEventListener(fe,i),r=!0),a&&wn(s,l),l},hasRouteListener:a=>s.listeners.has(a),removeRouteListener:a=>{const l=s.listeners.delete(a);return s.listeners.size||(globalThis.removeEventListener(fe,i),r=!1),l},sanitizationDepth:0};return s}const zr=Ho({routeBase:"resizable-image-element"}),ko=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],qe=Sr.createInstance({name:"resizable-image-element-example-storage"}),Sn="stored-urls",En={async set(e){const t=Te(e).map(n=>n);await qe.clear(),await qe.setItem(Sn,t)},async get(){const e=await qe.getItem(Sn),t=ce(e,"array")?e:[],n=Te(t);return Bo(n.length?n:ko)}};function Bo(e){var t,n;try{const r=Te(((n=(t=zr.getCurrentRawRoutes().search)==null?void 0:t.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:e}catch{return e}}function Te(e){return e.map(t=>typeof t!="string"?"":t.replace(/^"/,"").replace(/"$/,"").trim()).filter($n)}const{defineElement:Uo,defineElementNoInputs:Fo}=Ni(),be=Uo()({tagName:"vir-url-input",events:{urlsChange:Se()},styles:G`
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
    `,renderCallback:({inputs:e,dispatch:t,events:n,host:r})=>{const i=r.shadowRoot.querySelector("textarea"),s=e.urls.join(`
`),o=s+`
`;return i&&(i==null?void 0:i.value)!==s&&(i.value=s),$`
            <textarea
                ${J("input",a=>{const c=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));t(new n.urlsChange(c))})}
                ${J("blur",()=>{i&&(i.value=o)})}
                .value=${i&&i.matches(":focus")?s:o}
            ></textarea>
        `}}),se={max:{width:300,height:600},min:{width:300,height:150}};Fo({tagName:"vir-example-app",stateInitStatic:{showConstraints:!0,imageUrls:Wn({defaultValue:En.get()}),constraints:void 0,router:zr,urlUpdateDebounce:{promise:void 0,lastSearch:void 0},allowScrolling:!1},hostClasses:{"vir-example-app-show-constraints":({state:e})=>e.showConstraints},styles:({hostClasses:e})=>G`
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

        ${e["vir-example-app-show-constraints"].selector} .constraint-wrapper.max {
            border-color: red;
        }

        ${e["vir-example-app-show-constraints"].selector} .constraint-wrapper.min {
            border-color: lime;
        }

        ${e["vir-example-app-show-constraints"].selector} ${le} {
            border-color: blue;
        }

        ${le} {
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
    `,renderCallback:({state:e,updateState:t})=>{if(!e.constraints){const o=e.router.getCurrentRawRoutes().search;t({constraints:{min:{width:Number(o==null?void 0:o.minW)||se.min.width,height:Number(o==null?void 0:o.minH)||se.min.height},max:{width:Number(o==null?void 0:o.maxW)||se.max.width,height:Number(o==null?void 0:o.maxH)||se.max.height}}})}const n=e.constraints??se,r=Array.isArray(e.imageUrls)?e.imageUrls:[];function i(){return{...e.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function s(o,a,l){t({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!e.urlUpdateDebounce.promise&&(!e.urlUpdateDebounce.lastSearch||!gt(i(),e.urlUpdateDebounce.lastSearch))&&t({urlUpdateDebounce:{promise:An(1e3).then(()=>{const o=i();try{e.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}t({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:i()}}),$`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${be}
                ${wt(be,{urls:r})}
                ${J(be.events.urlsChange,o=>{const a=o.detail;En.set(a),t({imageUrls:{resolvedValue:o.detail}})})}
            ></${be}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${e.showConstraints}
                        ${J("input",o=>{const a=Ne(o,HTMLInputElement);t({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${e.allowScrolling}
                        ${J("input",o=>{const a=Ne(o,HTMLInputElement);t({allowScrolling:!!a.checked})})}
                    />
                    Allow text scrolling
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const c=[Ye(o),Ye(l)].join(" "),u=n[o][l];return $`
                            <label>
                                ${c}
                                <br />
                                ${R(u)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${u}
                                    ${J("input",d=>{s(Ne(d,HTMLInputElement),o,l)})}
                                />
                            </label>
                        `});return $`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">
                ${Wo(n,e.imageUrls,e.allowScrolling)}
            </div>
        `}});function Wo(e,t,n){return rt(t,"Loading...",r=>Te(r).map(i=>{const s=`
                height: ${R(e.max.height)};
                max-height: ${R(e.max.height)};
                width: ${R(e.max.width)};
                max-width: ${R(e.max.width)}`,o=`height: ${R(e.min.height)}; width: ${R(e.min.width)}`;return $`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${i}>
                        <${le}
                            ${wt(le,{imageUrl:i,max:e.max,min:e.min,allowScrolling:n})}
                        ></${le}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${o}></div>
                    </div>
                </div>
            `}))}
