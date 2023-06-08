(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ut(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const _r={capitalizeFirstLetter:!1};function Ye(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function $r(e,t){return t.capitalizeFirstLetter?Ye(e):e}function xr(e,t=_r){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return $r(r,t)}function Ct(e){return e!==e.toUpperCase()}function Ar(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0?s[i-1]:"",a=i<s.length-1?s[i+1]:"",c=Ct(o)||Ct(a);return r===r.toLowerCase()||i===0||!c?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Tr({value:e,min:t,max:n}){return Math.max(Math.min(e,n),t)}const Cr=["january","february","march","april","may","june","july","august","september","october","november","december"];Cr.map(e=>e.slice(0,3));function dt(e){return e?e instanceof Error?e.message:String(e):""}function j(e){return e instanceof Error?e:new Error(dt(e))}function yn(e){return!!e}function _e(e){return!!e&&typeof e=="object"}const zt="Failed to compare objects using JSON.stringify";function Rt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function ht(e,t){try{return e===t?!0:_e(e)&&_e(t)?Rt(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(r=>ht(e[r],t[r])):!1:Rt(e,t)}catch(n){const r=j(n);throw r.message.startsWith(zt)||(r.message=`${zt}: ${r.message}`),r}}const zr=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function H(e,t){return e?zr.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Rr(e,t){return e&&t.every(n=>H(e,n))}function P(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Pr(e){return P(e).map(t=>e[t])}function bn(e,t,n=!1,r={}){const i=P(e),s=new Set(P(t));if(!n){const o=i.filter(a=>!s.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}s.forEach(o=>{if(!H(e,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const c=e[o],l=t[o];r[o]||wn(c,l,a,n,r[o]??{})})}function wn(e,t,n,r,i){var a;const s=typeof e,o=typeof t;s!==o&&n(`type "${s}" did not match expected type "${o}"`);try{H(t,"constructor")&&(!H(e,"constructor")||e.constructor!==t.constructor)&&n(`constructor "${(a=e==null?void 0:e.constructor)==null?void 0:a.name}" did not match expected constructor "${t.constructor}"`)}catch(c){if(c instanceof n)throw c}Array.isArray(t)?(Array.isArray(e)||n("expected an array"),e.forEach((c,l)=>{if(t.map(d=>{try{wn(c,d,n,r,i);return}catch(h){return new Error(`entry at index "${l}" did not match expected shape: ${dt(h)}`)}}).filter(yn).length===t.length)throw new Error(`entry at index "${l}" did not match any of the possible types from "${t.join(", ")}"`)})):_e(t)&&bn(e,t,r,i)}function ft(e){return Array.isArray(e)?"array":typeof e}function X(e,t){return ft(e)===t}function Nr(e,t,n){if(!X(e,t))throw new TypeError(`'${n}' is of type '${ft(e)}' but type '${t}' was expected.`)}function Pt({jsonString:e,errorHandler:t,shapeMatcher:n}){try{const r=JSON.parse(e);return n!=null&&(X(n,"object")?bn(r,n):Nr(r,ft(n),"parsedJson")),r}catch(r){if(t)return t(r);throw r}}function Lr(e,t){return P(e).filter(r=>{const i=e[r];return t(r,i,e)}).reduce((r,i)=>(r[i]=e[i],r),{})}function Dr(e,t){return Lr(e,n=>!t.includes(n))}function fe(e,t){let n=!1;const r=P(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(P(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function $e(e){const t=Q();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Ir(e){return!!(H(e,"then")&&typeof e.then=="function")}class Or extends Error{constructor(t,n=`Promised timed out after ${t} ms.`){super(n),this.durationMs=t,this.message=n,this.name="PromiseTimeoutError"}}function Mr(e,t){return new Promise(async(n,r)=>{const i=e===1/0?void 0:setTimeout(()=>{r(new Or(e))},e);try{const s=await t;n(s)}catch(s){r(s)}finally{clearTimeout(i)}})}function Q(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Q.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function Hr(e,t){try{return Br(e,t),!0}catch{return!1}}function Br(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}const kr=globalThis.crypto;function Ur(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return kr.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}function R(e){return String(e).endsWith("px")?String(e):`${e}px`}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mt=e=>(...t)=>({_$litDirective$:e,values:t});let Re=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;const xe=window,Z=xe.trustedTypes,Nt=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,Je="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,En="?"+O,Fr=`<${En}>`,V=document,le=()=>V.createComment(""),ue=e=>e===null||typeof e!="object"&&typeof e!="function",_n=Array.isArray,Wr=e=>_n(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",De=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Dt=/>/g,k=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Ot=/"/g,$n=/^(?:script|style|textarea|title)$/i,jr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Vr=jr(1),L=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Mt=new WeakMap,F=V.createTreeWalker(V,129,null,!1),qr=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":"",o=ne;for(let c=0;c<n;c++){const l=e[c];let u,d,h=-1,m=0;for(;m<l.length&&(o.lastIndex=m,d=o.exec(l),d!==null);)m=o.lastIndex,o===ne?d[1]==="!--"?o=Lt:d[1]!==void 0?o=Dt:d[2]!==void 0?($n.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=k):d[3]!==void 0&&(o=k):o===k?d[0]===">"?(o=i??ne,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?k:d[3]==='"'?Ot:It):o===Ot||o===It?o=k:o===Lt||o===Dt?o=ne:(o=k,i=void 0);const f=o===k&&e[c+1].startsWith("/>")?" ":"";s+=o===ne?l+Fr:h>=0?(r.push(u),l.slice(0,h)+Je+l.slice(h)+O+f):l+O+(h===-2?(r.push(void 0),c):f)}const a=s+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Nt!==void 0?Nt.createHTML(a):a,r]};class de{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,c=this.parts,[l,u]=qr(t,n);if(this.el=de.createElement(l,r),F.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=F.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith(Je)||h.startsWith(O)){const m=u[o++];if(d.push(h),m!==void 0){const f=i.getAttribute(m.toLowerCase()+Je).split(O),p=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:p[2],strings:f,ctor:p[1]==="."?Jr:p[1]==="?"?Kr:p[1]==="@"?Xr:Pe})}else c.push({type:6,index:s})}for(const h of d)i.removeAttribute(h)}if($n.test(i.tagName)){const d=i.textContent.split(O),h=d.length-1;if(h>0){i.textContent=Z?Z.emptyScript:"";for(let m=0;m<h;m++)i.append(d[m],le()),F.nextNode(),c.push({type:2,index:++s});i.append(d[h],le())}}}else if(i.nodeType===8)if(i.data===En)c.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(O,d+1))!==-1;)c.push({type:7,index:s}),d+=O.length-1}s++}}static createElement(t,n){const r=V.createElement("template");return r.innerHTML=t,r}}function ee(e,t,n=e,r){var i,s,o,a;if(t===L)return t;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=ue(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(e),c._$AT(e,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(t=ee(e,c._$AS(e,t.values),c,r)),t}let Yr=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:V).importNode(r,!0);F.currentNode=s;let o=F.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new me(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new Qr(o,this,t)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=F.nextNode(),a++)}return F.currentNode=V,s}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class me{constructor(t,n,r,i){var s;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ee(this,t,n),ue(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Wr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==E&&ue(this._$AH)?this._$AA.nextSibling.data=t:this.$(V.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=de.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new Yr(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(t){let n=Mt.get(t.strings);return n===void 0&&Mt.set(t.strings,n=new de(t)),n}T(t){_n(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new me(this.k(le()),this.k(le()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class Pe{constructor(t,n,r,i,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=ee(this,t,n,0),o=!ue(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const a=t;let c,l;for(t=s[0],c=0;c<s.length-1;c++)l=ee(this,a[r+c],n,c),l===L&&(l=this._$AH[c]),o||(o=!ue(l)||l!==this._$AH[c]),l===E?t=E:t!==E&&(t+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Jr extends Pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}const Gr=Z?Z.emptyScript:"";class Kr extends Pe{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,Gr):this.element.removeAttribute(this.name)}}class Xr extends Pe{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){var r;if((t=(r=ee(this,t,n,0))!==null&&r!==void 0?r:E)===L)return;const i=this._$AH,s=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==E&&(i===E||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Qr{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ee(this,t)}}const Ht=xe.litHtmlPolyfillSupport;Ht==null||Ht(de,me),((Le=xe.litHtmlVersions)!==null&&Le!==void 0?Le:xe.litHtmlVersions=[]).push("2.7.4");const Zr=(e,t,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new me(t.insertBefore(le(),a),a,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ge=class extends Re{constructor(t){if(super(t),this.et=E,t.type!==Sn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===E||t==null)return this.ft=void 0,this.et=t;if(t===L)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Ge.directiveName="unsafeHTML",Ge.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bt=class extends Ge{};Bt.directiveName="unsafeSVG",Bt.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ei(e,t,n){return e?t():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=window,gt=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),kt=new WeakMap;let xn=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(gt&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=kt.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&kt.set(n,t))}return t}toString(){return this.cssText}};const C=e=>new xn(typeof e=="string"?e:e+"",void 0,pt),se=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new xn(n,e,pt)},ti=(e,t)=>{gt?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),i=we.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)})},Ut=gt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return C(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie;const Ae=window,Ft=Ae.trustedTypes,ni=Ft?Ft.emptyScript:"",Wt=Ae.reactiveElementPolyfillSupport,Ke={toAttribute(e,t){switch(t){case Boolean:e=e?ni:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},An=(e,t)=>t!==e&&(t==t||e==e),Oe={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:An};class Y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),t.push(i))}),t}static createProperty(t,n=Oe){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(i){const s=this[t];this[n]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Oe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Ut(i))}else t!==void 0&&n.push(Ut(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ti(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=Oe){var i;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Ke).toAttribute(n,r.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,n){var r;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Ke;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(t,n,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||An)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Y.finalized=!0,Y.elementProperties=new Map,Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Wt==null||Wt({ReactiveElement:Y}),((Ie=Ae.reactiveElementVersions)!==null&&Ie!==void 0?Ie:Ae.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me,He;class oe extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zr(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return L}}oe.finalized=!0,oe._$litElement$=!0,(Me=globalThis.litElementHydrateSupport)===null||Me===void 0||Me.call(globalThis,{LitElement:oe});const jt=globalThis.litElementPolyfillSupport;jt==null||jt({LitElement:oe});((He=globalThis.litElementVersions)!==null&&He!==void 0?He:globalThis.litElementVersions=[]).push("3.3.2");var ri=globalThis&&globalThis.__esDecorate||function(e,t,n,r,i,s){function o(b){if(b!==void 0&&typeof b!="function")throw new TypeError("Function expected");return b}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,h=!1,m=n.length-1;m>=0;m--){var f={};for(var p in r)f[p]=p==="access"?{}:r[p];for(var p in r.access)f.access[p]=r.access[p];f.addInitializer=function(b){if(h)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(b||null))};var v=(0,n[m])(a==="accessor"?{get:u.get,set:u.set}:u[c],f);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=o(v.get))&&(u.get=d),(d=o(v.set))&&(u.set=d),(d=o(v.init))&&i.push(d)}else(d=o(v))&&(a==="field"?i.push(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),h=!0},ii=globalThis&&globalThis.__runInitializers||function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},si=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function oi(){function e(t,n){return t}return e}let Tn=(()=>{let e=[oi()],t,n=[],r;return r=class extends oe{},si(r,"DeclarativeElement"),ri(null,t={value:r},e,{kind:"class",name:r.name},null,n),r=t.value,ii(r,n),r})();function Cn(e){if(_e(e))return fe(e,(n,r)=>{if(!X(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Ar(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?C(n):n.startsWith("-")?se`-${C(n)}`:se`--${C(n)}`;return{name:o,value:se`var(${o}, ${C(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${Cn.name}' function.`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function zn(e){return(t,n)=>n!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(e,t,n):ai(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Be;((Be=window.HTMLSlotElement)===null||Be===void 0?void 0:Be.prototype.assignedElements)!=null;const Xe=Symbol("this-is-an-element-vir-declarative-element"),vt=Symbol("key for ignoring inputs not having been set yet"),ci={[vt]:!0,allowPolymorphicState:!1};function Rn(e,t){const n=e.instanceState;P(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&P(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),Pn(e)}function Pn(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Nn(e,t){return Qe(e,t),e.element}function Qe(e,t){if(e.type!==Sn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function yt(e,t){return t?Vt(e,t):Vt(void 0,e)}const Vt=mt(class extends Re{constructor(e){super(e),this.element=Nn(e,"assign")}render(e,t){return li(e,this.element,t),L}});function li(e,t,n){Rn(t,n)}function Ln(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof Tn?!0:Ln(n)}function qt(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class ui extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Dn(){return e=>{var t;return t=class extends ui{constructor(n){super(e,n),this._type=e}},t.type=e,t}}function Se(){return Dn()}function di(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const r=Dn()(n);return t[n]=r,t},{}):{}}const Ze="_is_element_vir_observable_property_handler_instance",et="_is_element_vir_observable_property_handler_creator";function hi(e){return H(e,et)&&e[et]===!0}function fi(e){return H(e,Ze)&&e[Ze]===!0}function mi(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Yt(e,t){const n=e;function r(o){t?mi(o,e,e.tagName):zn()(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set:(o,a,c)=>{r(a);const l=e.observablePropertyHandlerMap[a];function u(d){o[a]=d,n[a]=d}return hi(c)&&(c=c.init()),fi(c)?(l&&c!==l?(c.addMultipleListeners(l.getAllListeners()),l.removeAllListeners()):c.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[a]=c):l?l.setValue(c):u(c),!0},ownKeys:o=>Reflect.ownKeys(o),getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has:(o,a)=>Reflect.has(o,a)})}function gi(e){return e?fe(e,t=>t):{}}function pi({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(n,r)=>({name:C(r),selector:C(`:host(.${r})`)})),cssVars:t}}function vi({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&P(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function yi(e,t){function n(i){P(i).forEach(s=>{const o=i[s];e.instanceState[s]=o})}return{dispatch:i=>e.dispatchEvent(i),updateState:n,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var bi=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function bt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const n={...ci,...e.options},r=di(e.events),i=gi(e.hostClasses);e.hostClasses&&qt(e.tagName,e.hostClasses),e.cssVars&&qt(e.tagName,e.cssVars);const s=e.cssVars?Cn(e.cssVars):{},o=typeof e.styles=="function"?e.styles(pi({hostClassNames:i,cssVars:s})):e.styles||se``,a=e.renderCallback,c=(t=class extends Tn{createRenderParams(){return yi(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Pn(this)}render(){try{Ln(this)&&!this.haveInputsBeenSet&&!n[vt]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${yt.name}" directive on it. If no inputs are intended, use "${bt.name}" to define ${e.tagName}.`),this.hasRendered=!0;const l=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(l)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=a(l);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return vi({host:l.host,hostClassesInit:e.hostClasses,hostClassNames:i,state:l.state,inputs:l.inputs}),this.lastRenderedProps={inputs:{...l.inputs},state:{...l.state}},u}catch(l){const u=j(l);throw u.message=`Failed to render '${e.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const l=this.createRenderParams();if(e.initCallback(l)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const l=this.createRenderParams();if(e.cleanupCallback(l)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(l){Rn(this,l)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Yt(this,!1),this.instanceState=Yt(this,!((u=e.options)!=null&&u.allowPolymorphicState));const l=e.stateInitStatic||{};P(l).forEach(d=>{zn()(this,d),this.instanceState[d]=l[d]}),this.definition=c}},bi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=o,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=a,t.hostClasses=i,t.cssVars=s,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{[Xe]:{value:!0,writable:!1},name:{value:xr(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:l=>l instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function In(){return e=>bt({...e,options:{[vt]:!1,...e.options}})}var On;const A=Symbol("not set");class wi{constructor(t){this.lastTrigger=A,this.resolutionValue=A,this.rejectionError=A,this.listeners=new Set,this.waitingForValuePromise=Q(),this[On]=!0,this.resetValue(t)}resetValue(t){this.resetWaitingForValuePromise(),t!==A&&(t instanceof Promise?this.setValue({newPromise:t}):this.setValue({resolvedValue:t}))}fireListeners(){const t=this.getValue();this.listeners.forEach(n=>{n(t)})}setPromise(t){t!==this.lastSetPromise&&(this.resolutionValue=A,this.rejectionError=A,this.lastSetPromise=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),t.then(n=>{this.lastSetPromise===t&&this.resolveValue(n)}).catch(n=>{this.lastSetPromise===t&&(this.rejectionError=j(n),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(n),this.fireListeners())}))}resolveValue(t){t!==this.resolutionValue&&(this.rejectionError=A,this.resolutionValue=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(t),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=Q()}setValue(t){if("createPromise"in t){if(this.lastTrigger===A||!ht(t.trigger,this.lastTrigger)){this.lastTrigger=t.trigger;const n=t.createPromise();this.setPromise(n),this.fireListeners()}}else"newPromise"in t?(this.lastTrigger,this.setPromise(t.newPromise),this.fireListeners()):"resolvedValue"in t?this.resolveValue(t.resolvedValue):"forceUpdate"in t?(this.lastTrigger=A,this.resolutionValue=A,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners()):this.resetValue(t)}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==A)return this.rejectionError;if(this.resolutionValue===A)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(t,n){this.listeners.add(n),t&&n(this.getValue())}addMultipleListeners(t){t.forEach(n=>this.listeners.add(n))}getAllListeners(){return this.listeners}removeListener(t){return this.listeners.has(t)?(this.listeners.delete(t),!0):!1}removeAllListeners(){const t=this.listeners.size;return this.listeners.clear(),t}}On=Ze;function Mn(...e){const t=Hr(e,1)?e[0]:A;return{[et]:!0,init(){return new wi(t)}}}function ae(e,t){return Si(e,t)}const Si=mt(class extends Re{constructor(e){super(e),this.element=Nn(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),L}}),Jt="onDomCreated",Gt=mt(class extends Re{constructor(e){super(e),Qe(e,Jt)}update(e,[t]){Qe(e,Jt);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}});function tt(e,t,n,r){return e instanceof Error?r?r(e):dt(e):Ir(e)?t:n?n(e):e}function Kt(e,t,n){return ei(e,()=>t,()=>n)}function Ei(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),In()(n(r))),defineElementNoInputs:r=>(t(r),bt(n(r)))}}function _i(e,t){return e.filter((n,r)=>!t.includes(r))}function Hn(e){return e.filter(t=>Rr(t,["tagName",Xe])&&!!t.tagName&&!!t[Xe])}const Bn=new WeakMap;function $i(e,t){var i;const n=Hn(t);return(i=kn(Bn,[e,...n]).value)==null?void 0:i.template}function xi(e,t,n){const r=Hn(t);return Fn(Bn,[e,...r],n)}function kn(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Un(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?kn(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Un(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Fn(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Un(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const c=a.nested??new WeakMap;return a.nested||(a.nested=c),Fn(c,t,n,r+1)}function Wn(e,t,n){return{name:e,check:t,transform:n}}const Ai=new WeakMap;function jn(e,t,n){const r=$i(e,t),i=r??n();if(!r){const o=xi(e,t,i);if(o.result)Ai.set(e,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=_i(t,i.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Vn(e,t,n,r){const i=[],s=[],o=[];return e.forEach((c,l)=>{var v;const u=i.length-1,d=i[u],h=l-1,m=t[h];let f;r&&r(c),typeof d=="string"&&(f=(v=n.find(b=>b.check(d,c,m)))==null?void 0:v.transform,f&&(i[u]=d+f(m)+c,o.push(h))),f||i.push(c);const p=e.raw[l];f?s[u]=s[u]+f(m)+p:s.push(p)}),{templateStrings:Object.assign([],i,{raw:s}),valueIndexDeletions:o}}function qn(e){return H(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Ti=[Wn("tag name css selector interpolation",(e,t,n)=>qn(n),e=>e.tagName)];function Ci(e,t){return Vn(e,t,Ti)}function G(e,...t){const n=jn(e,t,()=>Ci(e,t));return se(n.strings,...n.values)}const zi=[Wn("tag name interpolation",(e,t,n)=>{const r=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=qn(n);if(r&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&i},e=>e.tagName)];function Ri(e){}function Pi(e){return Vn(e.strings,e.values,zi,Ri)}function _(e,...t){const n=Vr(e,...t),r=jn(e,t,()=>Pi(n));return{...n,strings:r.strings,values:r.values}}function Ni(e,t){return e<t}function Li(e,t){return e>t}const Xt={width:250,height:250};function Di({constraint:e,box:t,constraintType:n="max"}){return(n==="max"?Li:Ni)(t.width/t.height,e.width/e.height)?"width":"height"}function ke({box:e,constraint:t,constraintType:n}){const r=Di({box:e,constraint:t,constraintType:n});return t[r]/e[r]}function Yn({box:e,ratio:t}){return fe(e,(n,r)=>r*t)}function nt({box:e,min:t,max:n}){return fe(e,(r,i)=>Tr({value:i,min:(t==null?void 0:t[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Jn({min:e,max:t,box:n}){const r=Gn({min:e,max:t,box:n}),i=Yn({box:n,ratio:r});return{height:Math.floor(i.height||(e==null?void 0:e.height)||Xt.height),width:Math.floor(i.width||(e==null?void 0:e.width)||Xt.width)}}function Gn({min:e,max:t,box:n}){if(!e&&!t)return 1;const r=e?ke({box:n,constraint:e,constraintType:"min"}):1,i=t?ke({box:n,constraint:t,constraintType:"max"}):1,s=r>1?r:i<1?i:1,o=Yn({ratio:s,box:n});return(e?ke({box:o,constraint:e,constraintType:"min"}):1)>1?r:s}function W(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if((!t||!(t!=null&&t.length))&&(!n||!n.length))return"";const r=[...n||[],""],s=(t??[""]).map((o,a)=>{const c=Ii(o,r[a]);return`${o}${c}`});return ut(s.join(""))}function Ii(e,t){return t._$litType$!=null||t._$litDirective$!=null?W(t):Array.isArray(t)?t.map(r=>W(r)).join(""):e.endsWith("=")?`"${t}"`:t}function Oi(e){const t=Mi(e);return X(t,"object")||X(t,"array")}function Mi(e){const t=Pt({jsonString:e,errorHandler:()=>{}});if(t)return t;const n=Hi(e);return Pt({jsonString:n,errorHandler:()=>{}})}function Hi(e){return ut(e).replace(/,\s*([}\]])/,"$1")}const wt="vir-resizable-image";function Bi(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var te=Bi();function ki(){try{if(!te||!te.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function St(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const g=Promise;function w(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function J(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function D(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function Et(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const rt="local-forage-detect-blob-support";let ve;const z={},Ui=Object.prototype.toString,ge="readonly",Ne="readwrite";function Fi(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function Wi(e){return new g(function(t){var n=e.transaction(rt,Ne),r=St([""]);n.objectStore(rt).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function ji(e){return typeof ve=="boolean"?g.resolve(ve):Wi(e).then(function(t){return ve=t,ve})}function Te(e){var t=z[e.name],n={};n.promise=new g(function(r,i){n.resolve=r,n.reject=i}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function it(e){var t=z[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function st(e,t){var n=z[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function Kn(e,t){return new g(function(n,r){if(z[e.name]=z[e.name]||er(),e.db)if(t)Te(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var s=te.open.apply(te,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(rt)}catch(c){if(c.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw c}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),it(e)}})}function _t(e){return Kn(e,!1)}function $t(e){return Kn(e,!0)}function Xn(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function Vi(e){return new g(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},r.readAsBinaryString(e)})}function Qn(e){var t=Fi(atob(e.data));return St([t],{type:e.type})}function Zn(e){return e&&e.__local_forage_encoded_blob}function qi(e){var t=this,n=t._initReady().then(function(){var r=z[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return J(n,e,e),n}function Yi(e){Te(e);for(var t=z[e.name],n=t.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,_t(e).then(i=>(e.db=i,Xn(e)?$t(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw st(e,i),i})}function I(e,t,n,r){r===void 0&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(s){if(r>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return g.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),$t(e)}).then(()=>Yi(e).then(function(){I(e,t,n,r-1)})).catch(n);n(s)}}function er(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Ji(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=z[n.name];i||(i=er(),z[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=qi);var s=[];function o(){return g.resolve()}for(var a=0;a<i.forages.length;a++){var c=i.forages[a];c!==t&&s.push(c._initReady().catch(o))}var l=i.forages.slice(0);return g.all(s).then(function(){return n.db=i.db,_t(n)}).then(function(u){return n.db=u,Xn(n,t._defaultConfig.version)?$t(n):u}).then(function(u){n.db=i.db=u,t._dbInfo=n;for(var d=0;d<l.length;d++){var h=l[d];h!==t&&(h._dbInfo.db=n.db,h._dbInfo.version=n.version)}})}function Gi(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,ge,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=c.get(e);l.onsuccess=function(){var u=l.result;u===void 0&&(u=null),Zn(u)&&(u=Qn(u)),i(u)},l.onerror=function(){s(l.error)}}catch(u){s(u)}})}).catch(s)});return w(r,t),r}function Ki(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,ge,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=c.openCursor(),u=1;l.onsuccess=function(){var d=l.result;if(d){var h=d.value;Zn(h)&&(h=Qn(h));var m=e(h,d.key,u++);m!==void 0?i(m):d.continue()}else i()},l.onerror=function(){s(l.error)}}catch(d){s(d)}})}).catch(s)});return w(r,t),r}function Xi(e,t,n){var r=this;e=D(e);var i=new g(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,Ui.call(t)==="[object Blob]"?ji(a.db).then(function(c){return c?t:Vi(t)}):t}).then(function(c){I(r._dbInfo,Ne,function(l,u){if(l)return o(l);try{var d=u.objectStore(r._dbInfo.storeName);c===null&&(c=void 0);var h=d.put(c,e);u.oncomplete=function(){c===void 0&&(c=null),s(c)},u.onabort=u.onerror=function(){var m=h.error?h.error:h.transaction.error;o(m)}}catch(m){o(m)}})}).catch(o)});return w(i,n),i}function Qi(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,Ne,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=c.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(l.error)},a.onabort=function(){var u=l.error?l.error:l.transaction.error;s(u)}}catch(u){s(u)}})}).catch(s)});return w(r,t),r}function Zi(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,Ne,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),c=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var l=c.error?c.error:c.transaction.error;i(l)}}catch(l){i(l)}})}).catch(i)});return w(n,e),n}function es(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,ge,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),c=a.count();c.onsuccess=function(){r(c.result)},c.onerror=function(){i(c.error)}}catch(l){i(l)}})}).catch(i)});return w(n,e),n}function ts(e,t){var n=this,r=new g(function(i,s){if(e<0){i(null);return}n.ready().then(function(){I(n._dbInfo,ge,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=!1,u=c.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){i(null);return}e===0||l?i(d.key):(l=!0,d.advance(e))},u.onerror=function(){s(u.error)}}catch(d){s(d)}})}).catch(s)});return w(r,t),r}function ns(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,ge,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),c=a.openKeyCursor(),l=[];c.onsuccess=function(){var u=c.result;if(!u){r(l);return}l.push(u.key),u.continue()},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return w(n,e),n}function rs(e,t){t=Et.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=g.reject("Invalid arguments");else{const o=e.name===n.name&&r._dbInfo.db?g.resolve(r._dbInfo.db):_t(e).then(a=>{const c=z[e.name],l=c.forages;c.db=a;for(var u=0;u<l.length;u++)l[u]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const c=a.version+1;Te(e);const l=z[e.name],u=l.forages;a.close();for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=null,m._dbInfo.version=c}return new g((h,m)=>{const f=te.open(e.name,c);f.onerror=p=>{f.result.close(),m(p)},f.onupgradeneeded=()=>{var p=f.result;p.deleteObjectStore(e.storeName)},f.onsuccess=()=>{const p=f.result;p.close(),h(p)}}).then(h=>{l.db=h;for(let m=0;m<u.length;m++){const f=u[m];f._dbInfo.db=h,it(f._dbInfo)}}).catch(h=>{throw(st(e,h)||g.resolve()).catch(()=>{}),h})}):i=o.then(a=>{Te(e);const c=z[e.name],l=c.forages;a.close();for(var u=0;u<l.length;u++){const h=l[u];h._dbInfo.db=null}return new g((h,m)=>{var f=te.deleteDatabase(e.name);f.onerror=()=>{const p=f.result;p&&p.close(),m(f.error)},f.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},f.onsuccess=()=>{const p=f.result;p&&p.close(),h(p)}}).then(h=>{c.db=h;for(var m=0;m<l.length;m++){const f=l[m];it(f._dbInfo)}}).catch(h=>{throw(st(e,h)||g.resolve()).catch(()=>{}),h})})}return w(i,t),i}var is={_driver:"asyncStorage",_initStorage:Ji,_support:ki(),iterate:Ki,getItem:Gi,setItem:Xi,removeItem:Qi,clear:Zi,length:es,key:ts,keys:ns,dropInstance:rs};function ss(){return typeof openDatabase=="function"}var M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",os="~~local_forage_type~",Qt=/^~~local_forage_type~([^~]+)~/,Ce="__lfsc__:",ot=Ce.length,xt="arbf",at="blob",tr="si08",nr="ui08",rr="uic8",ir="si16",sr="si32",or="ur16",ar="ui32",cr="fl32",lr="fl64",Zt=ot+xt.length,en=Object.prototype.toString;function ur(e){var t=e.length*.75,n=e.length,r,i=0,s,o,a,c;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=new ArrayBuffer(t),u=new Uint8Array(l);for(r=0;r<n;r+=4)s=M.indexOf(e[r]),o=M.indexOf(e[r+1]),a=M.indexOf(e[r+2]),c=M.indexOf(e[r+3]),u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|c&63;return l}function ct(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=M[t[r]>>2],n+=M[(t[r]&3)<<4|t[r+1]>>4],n+=M[(t[r+1]&15)<<2|t[r+2]>>6],n+=M[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function as(e,t){var n="";if(e&&(n=en.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&en.call(e.buffer)==="[object ArrayBuffer]")){var r,i=Ce;e instanceof ArrayBuffer?(r=e,i+=xt):(r=e.buffer,n==="[object Int8Array]"?i+=tr:n==="[object Uint8Array]"?i+=nr:n==="[object Uint8ClampedArray]"?i+=rr:n==="[object Int16Array]"?i+=ir:n==="[object Uint16Array]"?i+=or:n==="[object Int32Array]"?i+=sr:n==="[object Uint32Array]"?i+=ar:n==="[object Float32Array]"?i+=cr:n==="[object Float64Array]"?i+=lr:t(new Error("Failed to get type for BinaryArray"))),t(i+ct(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=os+e.type+"~"+ct(this.result);t(Ce+at+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function cs(e){if(e.substring(0,ot)!==Ce)return JSON.parse(e);var t=e.substring(Zt),n=e.substring(ot,Zt),r;if(n===at&&Qt.test(t)){var i=t.match(Qt);r=i[1],t=t.substring(i[0].length)}var s=ur(t);switch(n){case xt:return s;case at:return St([s],{type:r});case tr:return new Int8Array(s);case nr:return new Uint8Array(s);case rr:return new Uint8ClampedArray(s);case ir:return new Int16Array(s);case or:return new Uint16Array(s);case sr:return new Int32Array(s);case ar:return new Uint32Array(s);case cr:return new Float32Array(s);case lr:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var At={serialize:as,deserialize:cs,stringToBuffer:ur,bufferToString:ct};function dr(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function ls(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var i=new g(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){dr(a,n,function(){t._dbInfo=n,s()},function(c,l){o(l)})},o)});return n.serializer=At,i}function B(e,t,n,r,i,s){e.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(c,l){l.rows.length?s(c,a):dr(c,t,function(){c.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function us(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){B(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(c,l){var u=l.rows.length?l.rows.item(0).value:null;u&&(u=o.serializer.deserialize(u)),i(u)},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function ds(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){B(a,o,`SELECT * FROM ${o.storeName}`,[],function(c,l){for(var u=l.rows,d=u.length,h=0;h<d;h++){var m=u.item(h),f=m.value;if(f&&(f=o.serializer.deserialize(f)),f=e(f,m.key,h+1),f!==void 0){i(f);return}}i()},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function hr(e,t,n,r){var i=this;e=D(e);var s=new g(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var c=t,l=i._dbInfo;l.serializer.serialize(t,function(u,d){d?a(d):l.db.transaction(function(h){B(h,l,`INSERT OR REPLACE INTO ${l.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){o(c)},function(m,f){a(f)})},function(h){if(h.code===h.QUOTA_ERR){if(r>0){o(hr.apply(i,[e,c,n,r-1]));return}a(h)}})})}).catch(a)});return w(s,n),s}function hs(e,t,n){return hr.apply(this,[e,t,n,1])}function fs(e,t){var n=this;e=D(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){B(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function ms(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){B(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,c){i(c)})})}).catch(i)});return w(n,e),n}function gs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){B(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,c){var l=c.rows.item(0).c;r(l)},function(a,c){i(c)})})}).catch(i)});return w(n,e),n}function ps(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){B(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(c,l){var u=l.rows.length?l.rows.item(0).key:null;i(u)},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function vs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){B(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,c){for(var l=[],u=0;u<c.rows.length;u++)l.push(c.rows.item(u).key);r(l)},function(a,c){i(c)})})}).catch(i)});return w(n,e),n}function ys(e){return new g(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function bs(e,t){t=Et.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;return e.name?i=new g(function(s){var o;e.name===n.name?o=r._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s(ys(o))}).then(function(s){return new g(function(o,a){s.db.transaction(function(c){function l(m){return new g(function(f,p){c.executeSql(`DROP TABLE IF EXISTS ${m}`,[],function(){f()},function(v,b){p(b)})})}for(var u=[],d=0,h=s.storeNames.length;d<h;d++)u.push(l(s.storeNames[d]));g.all(u).then(function(){o()}).catch(function(m){a(m)})},function(c){a(c)})})}):i=g.reject("Invalid arguments"),w(i,t),i}var ws={_driver:"webSQLStorage",_initStorage:ls,_support:ss(),iterate:ds,getItem:us,setItem:hs,removeItem:fs,clear:ms,length:gs,key:ps,keys:vs,dropInstance:bs};function Ss(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function fr(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Es(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function _s(){return!Es()||localStorage.length>0}function $s(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=fr(e,t._defaultConfig),_s()?(t._dbInfo=n,n.serializer=At,g.resolve()):g.reject()}function xs(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return w(n,e),n}function As(e,t){var n=this;e=D(e);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return w(r,t),r}function Ts(e,t){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,c=1,l=0;l<a;l++){var u=localStorage.key(l);if(u.indexOf(s)===0){var d=localStorage.getItem(u);if(d&&(d=i.serializer.deserialize(d)),d=e(d,u.substring(o),c++),d!==void 0)return d}}});return w(r,t),r}function Cs(e,t){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return w(r,t),r}function zs(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return w(n,e),n}function Rs(e){var t=this,n=t.keys().then(function(r){return r.length});return w(n,e),n}function Ps(e,t){var n=this;e=D(e);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return w(r,t),r}function Ns(e,t,n){var r=this;e=D(e);var i=r.ready().then(function(){t===void 0&&(t=null);var s=t;return new g(function(o,a){var c=r._dbInfo;c.serializer.serialize(t,function(l,u){if(u)a(u);else try{localStorage.setItem(c.keyPrefix+e,l),o(s)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(d),a(d)}})})});return w(i,n),i}function Ls(e,t){if(t=Et.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i;return e.name?i=new g(function(s){e.storeName?s(fr(e,r._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=g.reject("Invalid arguments"),w(i,t),i}var Ds={_driver:"localStorageWrapper",_initStorage:$s,_support:Ss(),iterate:Ts,getItem:As,setItem:Ns,removeItem:Ps,clear:xs,length:Rs,key:Cs,keys:zs,dropInstance:Ls};const Is=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Os=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(Is(e[r],t))return!0;r++}return!1},mr=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},re={},tn={},K={INDEXEDDB:is,WEBSQL:ws,LOCALSTORAGE:Ds},Ms=[K.INDEXEDDB._driver,K.WEBSQL._driver,K.LOCALSTORAGE._driver],Ee=["dropInstance"],Ue=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ee),Hs={description:"",driver:Ms.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Bs(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function Fe(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(mr(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class Tt{constructor(t){for(let n in K)if(K.hasOwnProperty(n)){const r=K[n],i=r._driver;this[n]=i,re[i]||this.defineDriver(r)}this._defaultConfig=Fe({},Hs),this._config=Fe({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const i=new g(function(s,o){try{const a=t._driver,c=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(c);return}const l=Ue.concat("_initStorage");for(let h=0,m=l.length;h<m;h++){const f=l[h];if((!Os(Ee,f)||t[f])&&typeof t[f]!="function"){o(c);return}}(function(){const h=function(m){return function(){const f=new Error(`Method ${m} is not implemented by the current driver`),p=g.reject(f);return w(p,arguments[arguments.length-1]),p}};for(let m=0,f=Ee.length;m<f;m++){const p=Ee[m];t[p]||(t[p]=h(p))}})();const d=function(h){re[a]&&console.info(`Redefining LocalForage driver: ${a}`),re[a]=t,tn[a]=h,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,o):d(!!t._support):d(!0)}catch(a){o(a)}});return J(i,n,r),i}driver(){return this._driver||null}getDriver(t,n,r){const i=re[t]?g.resolve(re[t]):g.reject(new Error("Driver not found."));return J(i,n,r),i}getSerializer(t){const n=g.resolve(At);return J(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return J(r,t,t),r}setDriver(t,n,r){const i=this;mr(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(u){return i._extend(u),o(),i._ready=i._initStorage(i._config),i._ready}function c(u){return function(){let d=0;function h(){for(;d<u.length;){let f=u[d];return d++,i._dbInfo=null,i._ready=null,i.getDriver(f).then(a).catch(h)}o();const m=new Error("No available storage method found.");return i._driverSet=g.reject(m),i._driverSet}return h()}}const l=this._driverSet!==null?this._driverSet.catch(()=>g.resolve()):g.resolve();return this._driverSet=l.then(()=>{const u=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(u).then(d=>{i._driver=d._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=c(s)})}).catch(()=>{o();const u=new Error("No available storage method found.");return i._driverSet=g.reject(u),i._driverSet}),J(this._driverSet,n,r),this._driverSet}supports(t){return!!tn[t]}_extend(t){Fe(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,i=t.length;r<i;r++){const s=t[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=Ue.length;t<n;t++)Bs(this,Ue[t])}createInstance(t){return new Tt(t)}}const gr=new Tt,ks=gr;async function pr(){return await caches.open(wt)}async function Us(e){return await(await pr()).match(e)}const nn=ks.createInstance({name:wt});async function Fs(e,t){await(await pr()).put(e,t)}const We=new Map;async function Ws(e,t){var r;if(!We.has(e)){const i=Q();We.set(e,i.promise);try{const s=new Request(e),o=t?await Us(s):void 0,a=o??await fetch(s),c=t?await nn.getItem(e)??void 0:void 0,l=c??{contentType:((r=a.headers.get("Content-Type"))==null?void 0:r.toLowerCase())||"",ok:a.ok,text:await a.clone().text()??""};if(!c&&t)try{nn.setItem(e,l)}catch{}const u={blobUrl:URL.createObjectURL(await a.clone().blob()),...l};if(!o&&t)try{Fs(s,a)}catch{}i.resolve(u)}catch(s){throw i.reject(s),s}}const n=await We.get(e);if(!n)throw new Error("Stored a cached response but couldn't find it afterwards.");return n}var y=(e=>(e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf",e))(y||{});const js=["text","json"],Vs=["audio"];function rn(e){return js.includes(e)}function qs(e){return Vs.includes(e)}async function Ys(e,t){return e.includes("video")?"video":e.includes("svg")||t.includes("<svg")?"svg":e.includes("html")||t.includes("<html")?"html":Oi(t)?"json":e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?"text":e.includes("audio")?"audio":e.includes("pdf")?"pdf":"image"}function Js({imageType:e,imageText:t,imageUrl:n,blockAutoPlay:r}){return e==="image"?W(_`
            <img src=${n} />
        `):e==="video"?W(_`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):e==="text"||e==="json"?W(_`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e==="audio"?W(_`
                <audio controls src=${n}></audio>
            `):t}function Gs(e,t){if(t==="json")try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t==="html")return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function sn({imageUrl:e,blockAutoPlay:t,textTransformer:n=i=>i,allowPersistentCache:r}){const i=await Ws(e,r);if(!i.ok)throw new Error(`Failed to load '${e}'`);const s=await Ys(i.contentType,i.text),o=n(Gs(i.text,s));return{templateString:Js({imageText:o,imageType:s,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:s}}class lt extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let Ks=!1;function Xs(){return Ks}var q;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(q||(q={}));const U=Symbol("any-origin");function vr(e,t){try{return Qs(e,t),!0}catch{return!1}}function Qs(e,t){if(e===U)return;if(!e.filter(r=>t.origin===r).length)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '[${e.join(", ")}]'`)}const Zs=Symbol("dangerDisableSecurityWarningsSymbol");function eo(e,t,n){return n.type===e&&n.direction===t}function to(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function no({message:e,verifyChildData:t,iframeElement:n},r,i,s){if(!n)throw new Error("No iframe element was provided.");let o=0,a=!1,c,l,u,d=!1;const h={...e,direction:q.FromParent,messageId:Ur(32)},m=e.type,f=r===U?["*"]:r;function p(b){try{if(!vr(r,b))return;const S=b.data;if(S.type==="error")throw new Error(`Child threw an error: ${S.data}`);if(Xs(),S&&d&&eo(m,q.FromChild,S)&&S.messageId===h.messageId){let $=!1;try{$=t?t(S.data):!0}catch{}if(!$)return;a=!0,l=b,c=S}}catch(S){u=j(S)}}globalThis.addEventListener("message",p);const v=Date.now();for(;!a&&Date.now()-v<i&&!u;){if(!n.isConnected)throw new lt;const b=n.contentWindow;b&&(d=!0,f.forEach(S=>{try{b.postMessage(h,{targetOrigin:S})}catch{}})),await $e(s||to(o)),o++}if(globalThis.removeEventListener("message",p),u)throw u;if(!a)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(i/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but received a valid response");return{data:c==null?void 0:c.data,event:l}}function yr({allowedOrigins:e,timeoutMs:t=1e4,...n}){if(e!==U&&e.includes("*")&&(e=U),e===U&&!n[Zs]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),e!==U&&!e.length)throw new Error(`No allowed origins were provide to ${yr.name}. At least one must be provided.`);const r=e===U?["*"]:e;return{async sendMessageToChild(i){if(i.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await no(i,e,i.timeoutMs||t,i.intervalMs)},listenForParentMessages(i){globalThis.addEventListener("message",async s=>{if(!vr(e,s))return;const o=s.data,a=await i({...o,originalEvent:s}),c={type:o.type,direction:q.FromChild,data:a,messageId:o.messageId};r.forEach(l=>{try{globalThis.parent.postMessage(c,{targetOrigin:l})}catch{}})})}}}var T=(e=>(e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading",e))(T||{}),x=(e=>(e.Ready="ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e))(x||{});const N=yr({allowedOrigins:[window.location.origin]});async function ro(e,t){const n=Q();e.onload=()=>{n.resolve()};try{await N.sendMessageToChild({message:{type:x.Ready},iframeElement:e,timeoutMs:t})}catch{await n.promise,await N.sendMessageToChild({message:{type:x.Ready},iframeElement:e,timeoutMs:t})}}async function io({min:e,max:t,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,forcedOriginalImageSize:o,timeoutMs:a}){var l;await ro(r,a),s&&await N.sendMessageToChild({message:{type:x.ForceSize,data:s},iframeElement:r,timeoutMs:a});const c=o??(await N.sendMessageToChild({message:{type:x.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(u){return!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height}})).data;return await br({min:e,max:t,imageDimensions:c,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,sendSizeMessage:!0,timeoutMs:a}),((l=r.contentWindow)==null?void 0:l.document.documentElement.outerHTML)??""}async function br({min:e,max:t,imageDimensions:n,host:r,iframeElement:i,imageData:s,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:c}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:e,max:t,box:o??n},d=rn(s.imageType)||qs(s.imageType)?nt(u):Jn(u);l.style.width=R(Math.floor(d.width)),l.style.height=R(Math.floor(d.height));const h=nt({min:e,max:t,box:d});d.height<h.height?r.classList.add(T.VerticallyCenter):r.classList.remove(T.VerticallyCenter),r.style.width=R(h.width),r.style.height=R(h.height);const m=Gn({min:e,max:t,box:o??n});if(a){if(m>3?await N.sendMessageToChild({message:{type:x.SendScalingMethod,data:"pixelated"},iframeElement:i,timeoutMs:c}):await N.sendMessageToChild({message:{type:x.SendScalingMethod,data:"default"},iframeElement:i,timeoutMs:c}),await N.sendMessageToChild({message:{type:x.SizeDetermined,data:d},iframeElement:i,timeoutMs:c}),s.imageType===y.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},p={width:m*f.width,height:m*f.height};await N.sendMessageToChild({message:{type:x.SendScale,data:p},iframeElement:i,timeoutMs:c})}else if(rn(s.imageType)){const f=o??n;if(f.height<d.height){const p=d.width/f.width,v=d.height/f.height,b=Math.min(p,v);await N.sendMessageToChild({message:{type:x.SendScale,data:{height:b,width:b}},iframeElement:i,timeoutMs:c})}}}}const ye={x:16,y:8};var on=Object.freeze,so=Object.defineProperty,an=(e,t)=>on(so(e,"raw",{value:on(t||e.slice())})),cn,ln;function oo(e,t,n){const r=Math.random(),i=_(cn||(cn=an([`
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
    `])),e.imageType,n??"",y.Svg,y.Html,y.Image,y.Video,y.Text,y.Json,y.Audio,q.FromChild,q.FromChild,x.Ready,x.SendScale,x.SendScalingMethod,x.SendSize,x.ForceSize,x.SizeDetermined,y.Json,y.Text,ye.y,y.Audio),s=_(ln||(ln=an([`
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
    `])),e.imageType,y.Image,y.Svg,y.Video,y.Text,y.Json,y.Text,y.Json,y.Text,y.Json,y.Text,y.Json,ye.y,ye.x,y.Text,y.Json,ye.y,r,t??"",i);return ut(W(s)).replace(String(r),`
${e.templateString}
`)}const ao=1e4,co={textTransformer:"textTransformer",extraHtml:"extraHtml"},lo=Pr(co),uo={imageData:Mn(),error:void 0},ce=In()({tagName:wt,stateInitStatic:uo,events:{settled:Se(),imageDataCalculated:Se(),errored:Se()},styles:G`
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),n=e[je];t&&n&&(t.srcdoc=n)},renderCallback({state:e,inputs:t,updateState:n,host:r,dispatch:i,events:s}){const o=t.timeoutMs??ao,a=e.imageData instanceof Error?e.imageData:e.error;n({imageData:{createPromise:async()=>{if(e.error&&n({error:void 0}),r.classList.remove(T.HideLoading),i(new s.settled(!1)),r.classList.remove(T.VerticallyCenter),!t.imageUrl)return new Promise(async(S,$)=>{await $e(o),$(new Error("An imageUrl was never provided to vir-resizable-image."))});const v={imageUrl:t.imageUrl,blockAutoPlay:!!t.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!t.blockPersistentCache};let b;try{b=await Mr(o,sn(v))}catch{await $e(1e3);try{b=await sn(v)}catch($){throw $}}if(b)return b;throw new Error("no image data result")},trigger:{...Dr(t,lo)}}});const c=t.min&&t.max?nt({box:t.min,max:t.max}):t.min,l=t.max,u=t.forcedOriginalImageSize?Jn({min:c,max:l,box:t.forcedOriginalImageSize}):void 0,d=tt(e.imageData,"",v=>(i(new s.imageDataCalculated(v)),v.imageType===y.Pdf?_`
                        <iframe
                            src=${v.imageUrl}
                            ${Gt(async b=>{try{await br({forcedFinalImageSize:t.forcedFinalImageSize,host:r,iframeElement:b,imageData:v,imageDimensions:l??{width:500,height:500},max:l,min:c,sendSizeMessage:!1,timeoutMs:o}),r[je]="",i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch(S){const $=j(S);if($ instanceof lt)return;console.error($),n({error:$}),i(new s.errored($))}})}
                        ></iframe>
                    `:_`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${oo(v,t.extraHtml,t.htmlSizeQuerySelector)}
                            ${Gt(async b=>{try{const S=await io({min:c,max:l,host:r,iframeElement:b,imageData:v,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:u,timeoutMs:o});r[je]=S,i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch(S){const $=j(S);if($ instanceof lt)return;console.error($),n({error:$}),i(new s.errored($))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),v=>{n({error:v}),i(new s.errored(j(v)))}),h=tt(e.imageData,un,v=>!t.blockInteraction&&[y.Html,y.Video,y.Audio,y.Pdf].includes(v.imageType)?"":un,()=>""),m=a?G`
                  max-width: 100%;
                  max-height: 100%;
              `:u?G`
                  width: ${u.width}px;
                  height: ${u.height}px;
              `:"",f=G`
            width: ${(c==null?void 0:c.width)??250}px;
            height: ${(c==null?void 0:c.height)??250}px;
        `,p=_`
            <div class="frame-constraint" style=${m}>${d}</div>
        `;return _`
            ${Kt(!a,_`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${f}>
                ${Kt(!!a,_`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${a==null?void 0:a.message}</slot>
                        </div>
                    `,p)}
            </div>
            ${h}
        `}}),un=_`
    <div class="click-cover"></div>
`,je="latest-frame-srcdoc";class pe extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class dn extends pe{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const he="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ho=globalThis.history.pushState;function hn(...e){const t=ho.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(he)),t}const fo=globalThis.history.replaceState;function fn(...e){const t=fo.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(he)),t}function mo(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===hn)throw new dn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===fn)throw new dn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=hn,globalThis.history.replaceState=fn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(he))})}}function go(e){return Array.from(e.entries()).reduce((t,n)=>(t[n[0]]=n[1],t),{})}function po(e){const t=Object.entries(e).reduce((n,r)=>{const i=`${r[0]}=${r[1]}`;return`${n}&${i}`},"");return new URLSearchParams(t)}function vo(e){const n=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(o=>!!o),i=globalThis.location.search?go(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:i,hash:s}}class yo extends pe{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function wr(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const mn=6;function gn(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>mn)throw new yo(`Route sanitization depth has exceed the max of ${mn} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(wr(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(i=>{i(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class Ve extends pe{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function bo(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Ve(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Ve(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Ve(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function wo(e,t,n,r=!1){const i=Sr(e,t,n);r?globalThis.history.replaceState(void 0,"",i):globalThis.history.pushState(void 0,"",i)}function Sr(e,t,n=""){var c;if(!n&&t!=null)throw new pe("Route base regexp was defined but routeBase string was not provided.");const r=So(t)?`/${n}`:"",i=e.search?po(e.search).toString():"",s=i?`?${i}`:"",o=(c=e.hash)!=null&&c.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`${r}/${e.paths.join("/")}${s}${a}`}function So(e){return!!(e&&globalThis.location.pathname.match(e))}function Eo(e={}){var o;bo(e),mo();const t=(o=e.routeBase)==null?void 0:o.replace(/\/+$/,""),n=t?new RegExp(`^\\/${e.routeBase}`):void 0;let r=!1;const i=()=>gn(s),s={listeners:new Set,initParams:e,sanitizeFullRoute:a=>{const c={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(c):c},setRoutes:(a,c=!1,l=!1)=>{const u=s.getCurrentRawRoutes(),d={...u,...a},h=s.sanitizeFullRoute(d);if(!(!l&&wr(u,h)))return wo(h,n,t,c)},createRoutesUrl:a=>Sr(a,n,t),getCurrentRawRoutes:()=>vo(n),removeAllRouteListeners(){s.listeners.forEach(a=>s.removeRouteListener(a))},addRouteListener:(a,c)=>{if(e.maxListenerCount&&s.listeners.size>=e.maxListenerCount)throw new pe(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return s.listeners.add(c),r||(globalThis.addEventListener(he,i),r=!0),a&&gn(s,c),c},hasRouteListener:a=>s.listeners.has(a),removeRouteListener:a=>{const c=s.listeners.delete(a);return s.listeners.size||(globalThis.removeEventListener(he,i),r=!1),c},sanitizationDepth:0};return s}const Er=Eo({routeBase:"resizable-image-element"}),_o=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],qe=gr.createInstance({name:"resizable-image-element-example-storage"}),pn="stored-urls",vn={async set(e){const t=ze(e).map(n=>n);await qe.clear(),await qe.setItem(pn,t)},async get(){const e=await qe.getItem(pn),t=X(e,"array")?e:[],n=ze(t);return $o(n.length?n:_o)}};function $o(e){var t,n;try{const r=ze(((n=(t=Er.getCurrentRawRoutes().search)==null?void 0:t.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:e}catch{return e}}function ze(e){return e.map(t=>typeof t!="string"?"":t.replace(/^"/,"").replace(/"$/,"").trim()).filter(yn)}const{defineElement:xo,defineElementNoInputs:Ao}=Ei(),be=xo()({tagName:"vir-url-input",events:{urlsChange:Se()},styles:G`
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
`;return i&&(i==null?void 0:i.value)!==s&&(i.value=s),_`
            <textarea
                ${ae("input",a=>{const l=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));t(new n.urlsChange(l))})}
                ${ae("blur",()=>{i&&(i.value=o)})}
                .value=${i&&i.matches(":focus")?s:o}
            ></textarea>
        `}}),ie={max:{width:300,height:600},min:{width:300,height:150}};Ao({tagName:"vir-example-app",stateInitStatic:{showConstraints:!0,imageUrls:Mn(vn.get()),constraints:void 0,router:Er,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{"vir-example-app-show-constraints":({state:e})=>e.showConstraints},styles:({hostClasses:e})=>G`
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

        ${e["vir-example-app-show-constraints"].selector} ${ce} {
            border-color: blue;
        }

        ${ce} {
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
    `,renderCallback:({state:e,updateState:t})=>{if(!e.constraints){const o=e.router.getCurrentRawRoutes().search;t({constraints:{min:{width:Number(o==null?void 0:o.minW)||ie.min.width,height:Number(o==null?void 0:o.minH)||ie.min.height},max:{width:Number(o==null?void 0:o.maxW)||ie.max.width,height:Number(o==null?void 0:o.maxH)||ie.max.height}}})}const n=e.constraints??ie,r=Array.isArray(e.imageUrls)?e.imageUrls:[];function i(){return{...e.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function s(o,a,c){t({constraints:{...n,[a]:{...n[a],[c]:Number(o.value)||0}}})}return!e.urlUpdateDebounce.promise&&(!e.urlUpdateDebounce.lastSearch||!ht(i(),e.urlUpdateDebounce.lastSearch))&&t({urlUpdateDebounce:{promise:$e(1e3).then(()=>{const o=i();try{e.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}t({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:i()}}),_`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${be}
                ${yt(be,{urls:r})}
                ${ae(be.events.urlsChange,o=>{const a=o.detail;vn.set(a),t({imageUrls:{resolvedValue:o.detail}})})}
            ></${be}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${e.showConstraints}
                        ${ae("input",o=>{const a=o.currentTarget;t({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(c=>{const l=[Ye(o),Ye(c)].join(" "),u=n[o][c];return _`
                            <label>
                                ${l}
                                <br />
                                ${R(u)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${u}
                                    ${ae("input",d=>{s(d.currentTarget,o,c)})}
                                />
                            </label>
                        `});return _`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${To(n,e.imageUrls)}</div>
        `}});function To(e,t){return tt(t,"Loading...",n=>ze(n).map(r=>{const i=`
                height: ${R(e.max.height)};
                max-height: ${R(e.max.height)};
                width: ${R(e.max.width)};
                max-width: ${R(e.max.width)}`,s=`height: ${R(e.min.height)}; width: ${R(e.min.width)}`;return _`
                <div class="constraint-wrapper max" style=${i}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${ce}
                            ${yt(ce,{imageUrl:r,max:e.max,min:e.min})}
                        ></${ce}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${s}></div>
                    </div>
                </div>
            `}))}
