(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dt(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Ct(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Or({value:e,min:t,max:n}){return Math.max(Math.min(e,n),t)}function En(e){return e?e instanceof Error?e.message:$e(e,"message")?String(e.message):String(e):""}function ye(e){return e instanceof Error?e:new Error(En(e))}function _n(e){return!!e}function qe(e){return!!e&&typeof e=="object"}const zt="Failed to compare objects using JSON.stringify";function Pt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function xn(e,t){try{return e===t?!0:qe(e)&&qe(t)?Pt(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(r=>xn(e[r],t[r])):!1:Pt(e,t)}catch(n){const r=ye(n);throw r.message.startsWith(zt)||(r.message=`${zt}: ${r.message}`),r}}const Mr=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function $e(e,t){return e?Mr.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function G(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Hr(e){return G(e).map(t=>e[t])}function An(e,t,n=!1,r={}){const i=G(e),s=new Set(G(t));if(!n){const o=i.filter(a=>!s.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}s.forEach(o=>{if(!$e(e,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const c=e[o],l=t[o];r[o]||Tn(c,l,a,n,r[o]??{})})}function Tn(e,t,n,r,i){var a;const s=typeof e,o=typeof t;s!==o&&n(`type "${s}" did not match expected type "${o}"`);try{$e(t,"constructor")&&(!$e(e,"constructor")||e.constructor!==t.constructor)&&n(`constructor "${(a=e==null?void 0:e.constructor)==null?void 0:a.name}" did not match expected constructor "${t.constructor}"`)}catch(c){if(c instanceof n)throw c}Array.isArray(t)?(Array.isArray(e)||n("expected an array"),e.forEach((c,l)=>{if(t.map(d=>{try{Tn(c,d,n,r,i);return}catch(h){return new Error(`entry at index "${l}" did not match expected shape: ${En(h)}`)}}).filter(_n).length===t.length)throw new Error(`entry at index "${l}" did not match any of the possible types from "${t.join(", ")}"`)})):qe(t)&&An(e,t,r,i)}function ht(e){return Array.isArray(e)?"array":typeof e}function ae(e,t){return ht(e)===t}function Br(e,t,n){if(!ae(e,t))throw new TypeError(`'${n}' is of type '${ht(e)}' but type '${t}' was expected.`)}function Rt({jsonString:e,errorHandler:t,shapeMatcher:n}){try{const r=JSON.parse(e);return n!=null&&(ae(n,"object")?An(r,n):Br(r,ht(n),"parsedJson")),r}catch(r){if(t)return t(r);throw r}}function kr(e,t){return G(e).filter(r=>{const i=e[r];return t(r,i,e)}).reduce((r,i)=>(r[i]=e[i],r),{})}function Fr(e,t){return kr(e,n=>!t.includes(n))}function Cn(e,t){let n=!1;const r=G(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(G(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function P(e){return String(e).endsWith("px")?String(e):`${e}px`}function zn(e){const t=Ce();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class Ur extends Error{constructor(t,n=`Promised timed out after ${t} ms.`){super(n),this.durationMs=t,this.message=n,this.name="PromiseTimeoutError"}}function Wr(e,t){return new Promise(async(n,r)=>{const i=e===1/0?void 0:setTimeout(()=>{r(new Ur(e))},e);try{const s=await t;n(s)}catch(s){r(s)}finally{clearTimeout(i)}})}function Ce(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ce.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ft=e=>(...t)=>({_$litDirective$:e,values:t});let ze=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ne;const Ee=window,K=Ee.trustedTypes,Nt=K?K.createPolicy("lit-html",{createHTML:e=>e}):void 0,Je="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,Rn="?"+D,jr=`<${Rn}>`,U=document,ce=()=>U.createComment(""),le=e=>e===null||typeof e!="object"&&typeof e!="function",Nn=Array.isArray,Vr=e=>Nn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Le=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,It=/>/g,H=RegExp(`>|${Le}(?:([^\\s"'>=/]+)(${Le}*=${Le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Ot=/"/g,Ln=/^(?:script|style|textarea|title)$/i,qr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Jr=qr(1),N=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Mt=new WeakMap,k=U.createTreeWalker(U,129,null,!1),Yr=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":"",o=ee;for(let c=0;c<n;c++){const l=e[c];let u,d,h=-1,m=0;for(;m<l.length&&(o.lastIndex=m,d=o.exec(l),d!==null);)m=o.lastIndex,o===ee?d[1]==="!--"?o=Lt:d[1]!==void 0?o=It:d[2]!==void 0?(Ln.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=H):d[3]!==void 0&&(o=H):o===H?d[0]===">"?(o=i??ee,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?H:d[3]==='"'?Ot:Dt):o===Ot||o===Dt?o=H:o===Lt||o===It?o=ee:(o=H,i=void 0);const f=o===H&&e[c+1].startsWith("/>")?" ":"";s+=o===ee?l+jr:h>=0?(r.push(u),l.slice(0,h)+Je+l.slice(h)+D+f):l+D+(h===-2?(r.push(void 0),c):f)}const a=s+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Nt!==void 0?Nt.createHTML(a):a,r]};class ue{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,c=this.parts,[l,u]=Yr(t,n);if(this.el=ue.createElement(l,r),k.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=k.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith(Je)||h.startsWith(D)){const m=u[o++];if(d.push(h),m!==void 0){const f=i.getAttribute(m.toLowerCase()+Je).split(D),p=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:p[2],strings:f,ctor:p[1]==="."?Kr:p[1]==="?"?Qr:p[1]==="@"?Zr:Pe})}else c.push({type:6,index:s})}for(const h of d)i.removeAttribute(h)}if(Ln.test(i.tagName)){const d=i.textContent.split(D),h=d.length-1;if(h>0){i.textContent=K?K.emptyScript:"";for(let m=0;m<h;m++)i.append(d[m],ce()),k.nextNode(),c.push({type:2,index:++s});i.append(d[h],ce())}}}else if(i.nodeType===8)if(i.data===Rn)c.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(D,d+1))!==-1;)c.push({type:7,index:s}),d+=D.length-1}s++}}static createElement(t,n){const r=U.createElement("template");return r.innerHTML=t,r}}function X(e,t,n=e,r){var i,s,o,a;if(t===N)return t;let c=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const l=le(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((s=c==null?void 0:c._$AO)===null||s===void 0||s.call(c,!1),l===void 0?c=void 0:(c=new l(e),c._$AT(e,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(t=X(e,c._$AS(e,t.values),c,r)),t}let Gr=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:U).importNode(r,!0);k.currentNode=s;let o=k.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new he(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new ei(o,this,t)),this._$AV.push(u),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=k.nextNode(),a++)}return k.currentNode=U,s}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class he{constructor(t,n,r,i){var s;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=X(this,t,n),le(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Vr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&le(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ue.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new Gr(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(t){let n=Mt.get(t.strings);return n===void 0&&Mt.set(t.strings,n=new ue(t)),n}T(t){Nn(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new he(this.k(ce()),this.k(ce()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class Pe{constructor(t,n,r,i,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=X(this,t,n,0),o=!le(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const a=t;let c,l;for(t=s[0],c=0;c<s.length-1;c++)l=X(this,a[r+c],n,c),l===N&&(l=this._$AH[c]),o||(o=!le(l)||l!==this._$AH[c]),l===S?t=S:t!==S&&(t+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Kr extends Pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const Xr=K?K.emptyScript:"";class Qr extends Pe{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,Xr):this.element.removeAttribute(this.name)}}class Zr extends Pe{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){var r;if((t=(r=X(this,t,n,0))!==null&&r!==void 0?r:S)===N)return;const i=this._$AH,s=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==S&&(i===S||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class ei{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const Ht=Ee.litHtmlPolyfillSupport;Ht==null||Ht(ue,he),((Ne=Ee.litHtmlVersions)!==null&&Ne!==void 0?Ne:Ee.litHtmlVersions=[]).push("2.7.4");const ti=(e,t,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new he(t.insertBefore(ce(),a),a,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ye=class extends ze{constructor(t){if(super(t),this.et=S,t.type!==Pn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this.ft=void 0,this.et=t;if(t===N)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Ye.directiveName="unsafeHTML",Ye.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bt=class extends Ye{};Bt.directiveName="unsafeSVG",Bt.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ni(e,t,n){return e?t():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=window,mt=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),kt=new WeakMap;let In=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(mt&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=kt.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&kt.set(n,t))}return t}toString(){return this.cssText}};const C=e=>new In(typeof e=="string"?e:e+"",void 0,gt),re=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new In(n,e,gt)},ri=(e,t)=>{mt?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),i=be.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)})},Ft=mt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return C(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie;const _e=window,Ut=_e.trustedTypes,ii=Ut?Ut.emptyScript:"",Wt=_e.reactiveElementPolyfillSupport,Ge={toAttribute(e,t){switch(t){case Boolean:e=e?ii:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Dn=(e,t)=>t!==e&&(t==t||e==e),De={attribute:!0,type:String,converter:Ge,reflect:!1,hasChanged:Dn},Ke="finalized";class V extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),t.push(i))}),t}static createProperty(t,n=De){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(i){const s=this[t];this[n]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||De}static finalize(){if(this.hasOwnProperty(Ke))return!1;this[Ke]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Ft(i))}else t!==void 0&&n.push(Ft(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ri(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=De){var i;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Ge).toAttribute(n,r.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,n){var r;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Ge;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(t,n,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Dn)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}V[Ke]=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},Wt==null||Wt({ReactiveElement:V}),((Ie=_e.reactiveElementVersions)!==null&&Ie!==void 0?Ie:_e.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe,Me;class ie extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ti(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return N}}ie.finalized=!0,ie._$litElement$=!0,(Oe=globalThis.litElementHydrateSupport)===null||Oe===void 0||Oe.call(globalThis,{LitElement:ie});const jt=globalThis.litElementPolyfillSupport;jt==null||jt({LitElement:ie});((Me=globalThis.litElementVersions)!==null&&Me!==void 0?Me:globalThis.litElementVersions=[]).push("3.3.2");var si=globalThis&&globalThis.__esDecorate||function(e,t,n,r,i,s){function o(b){if(b!==void 0&&typeof b!="function")throw new TypeError("Function expected");return b}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,h=!1,m=n.length-1;m>=0;m--){var f={};for(var p in r)f[p]=p==="access"?{}:r[p];for(var p in r.access)f.access[p]=r.access[p];f.addInitializer=function(b){if(h)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(b||null))};var y=(0,n[m])(a==="accessor"?{get:u.get,set:u.set}:u[c],f);if(a==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=o(y.get))&&(u.get=d),(d=o(y.set))&&(u.set=d),(d=o(y.init))&&i.push(d)}else(d=o(y))&&(a==="field"?i.push(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),h=!0},oi=globalThis&&globalThis.__runInitializers||function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},ai=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function ci(){function e(t,n){return t}return e}let On=(()=>{let e=[ci()],t,n=[],r;return r=class extends ie{},ai(r,"DeclarativeElement"),si(null,t={value:r},e,{kind:"class",name:r.name},null,n),r=t.value,oi(r,n),r})();const li={capitalizeFirstLetter:!1};function ui(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function di(e,t){return t.capitalizeFirstLetter?ui(e):e}function hi(e,t=li){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return di(r,t)}const fi=["january","february","march","april","may","june","july","august","september","october","november","december"];fi.map(e=>e.slice(0,3));function Mn(e){return e?e instanceof Error?e.message:Z(e,"message")?String(e.message):String(e):""}function pt(e){return e instanceof Error?e:new Error(Mn(e))}function Vt(e){return!!e&&typeof e=="object"}const qt="Failed to compare objects using JSON.stringify";function Jt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Hn(e,t){try{return e===t?!0:Vt(e)&&Vt(t)?Jt(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(r=>Hn(e[r],t[r])):!1:Jt(e,t)}catch(n){const r=pt(n);throw r.message.startsWith(qt)||(r.message=`${qt}: ${r.message}`),r}}const mi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Z(e,t){return e?mi.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function gi(e,t){return e&&t.every(n=>Z(e,n))}function W(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Bn(e,t){let n=!1;const r=W(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(W(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function pi(e){return!!(Z(e,"then")&&typeof e.then=="function")}function Xe(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Xe.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function vi(e,t){try{return yi(e,t),!0}catch{return!1}}function yi(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Yt(e){return e!==e.toUpperCase()}function bi(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0?s[i-1]:"",a=i<s.length-1?s[i+1]:"",c=Yt(o)||Yt(a);return r===r.toLowerCase()||i===0||!c?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const wi=["january","february","march","april","may","june","july","august","september","october","november","december"];wi.map(e=>e.slice(0,3));function Si(e){return!!e&&typeof e=="object"}function Gt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function $i(e){return Array.isArray(e)?"array":typeof e}function Ei(e,t){return $i(e)===t}function _i(e,t){let n=!1;const r=Gt(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Gt(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function kn(e){if(Si(e))return _i(e,(n,r)=>{if(!Ei(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(bi(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?C(n):n.startsWith("-")?re`-${C(n)}`:re`--${C(n)}`;return{name:o,value:re`var(${o}, ${C(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${kn.name}' function.`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},Ai=(e,t,n)=>{t.constructor.createProperty(n,e)};function Fn(e){return(t,n)=>n!==void 0?Ai(e,t,n):xi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He;((He=window.HTMLSlotElement)===null||He===void 0?void 0:He.prototype.assignedElements)!=null;const Qe=Symbol("this-is-an-element-vir-declarative-element"),vt=Symbol("key for ignoring inputs not having been set yet"),Ti={[vt]:!0,allowPolymorphicState:!1};function Un(e,t){const n=e.instanceState;W(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&W(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),Wn(e)}function Wn(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function jn(e,t){return Ze(e,t),e.element}function Ze(e,t){if(e.type!==Pn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function yt(e,t){return t?Kt(e,t):Kt(void 0,e)}const Kt=ft(class extends ze{constructor(e){super(e),this.element=jn(e,"assign")}render(e,t){return Ci(e,this.element,t),N}});function Ci(e,t,n){Un(t,n)}function Vn(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof On?!0:Vn(n)}function Xt(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class zi extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function qn(){return e=>{var t;return t=class extends zi{constructor(n){super(e,n),this._type=e}},t.type=e,t}}function we(){return qn()}function Pi(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const r=qn()(n);return t[n]=r,t},{}):{}}const et="_is_element_vir_observable_property_handler_instance",tt="_is_element_vir_observable_property_handler_creator";function Ri(e){return Z(e,tt)&&e[tt]===!0}function Ni(e){return Z(e,et)&&e[et]===!0}function Li(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Qt(e,t){const n=e;function r(o){t?Li(o,e,e.tagName):Fn()(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set:(o,a,c)=>{r(a);const l=e.observablePropertyHandlerMap[a];function u(d){o[a]=d,n[a]=d}return Ri(c)&&(c=c.init()),Ni(c)?(l&&c!==l?(c.addMultipleListeners(l.getAllListeners()),l.removeAllListeners()):c.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[a]=c):l?l.setValue(c):u(c),!0},ownKeys:o=>Reflect.ownKeys(o),getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has:(o,a)=>Reflect.has(o,a)})}function Ii(e){return e?Bn(e,t=>t):{}}function Di({hostClassNames:e,cssVars:t}){return{hostClasses:Bn(e,(n,r)=>({name:C(r),selector:C(`:host(.${r})`)})),cssVars:t}}function Oi({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&W(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function Mi(e,t){function n(i){W(i).forEach(s=>{const o=i[s];e.instanceState[s]=o})}return{dispatch:i=>e.dispatchEvent(i),updateState:n,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Hi=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function bt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const n={...Ti,...e.options},r=Pi(e.events),i=Ii(e.hostClasses);e.hostClasses&&Xt(e.tagName,e.hostClasses),e.cssVars&&Xt(e.tagName,e.cssVars);const s=e.cssVars?kn(e.cssVars):{},o=typeof e.styles=="function"?e.styles(Di({hostClassNames:i,cssVars:s})):e.styles||re``,a=e.renderCallback,c=(t=class extends On{createRenderParams(){return Mi(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Wn(this)}render(){try{Vn(this)&&!this.haveInputsBeenSet&&!n[vt]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${yt.name}" directive on it. If no inputs are intended, use "${bt.name}" to define ${e.tagName}.`),this.hasRendered=!0;const l=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(l)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=a(l);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Oi({host:l.host,hostClassesInit:e.hostClasses,hostClassNames:i,state:l.state,inputs:l.inputs}),this.lastRenderedProps={inputs:{...l.inputs},state:{...l.state}},u}catch(l){const u=pt(l);throw u.message=`Failed to render '${e.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const l=this.createRenderParams();if(e.initCallback(l)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const l=this.createRenderParams();if(e.cleanupCallback(l)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(l){Un(this,l)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Qt(this,!1),this.instanceState=Qt(this,!((u=e.options)!=null&&u.allowPolymorphicState));const l=e.stateInitStatic||{};W(l).forEach(d=>{Fn()(this,d),this.instanceState[d]=l[d]}),this.definition=c}},Hi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=o,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=a,t.hostClasses=i,t.cssVars=s,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{[Qe]:{value:!0,writable:!1},name:{value:hi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:l=>l instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Jn(){return e=>bt({...e,options:{[vt]:!1,...e.options}})}var Yn;const A=Symbol("not set");class Bi{constructor(t){this.lastTrigger=A,this.resolutionValue=A,this.rejectionError=A,this.listeners=new Set,this.waitingForValuePromise=Xe(),this[Yn]=!0,this.resetValue(t)}resetValue(t){this.resetWaitingForValuePromise(),t!==A&&(t instanceof Promise?this.setValue({newPromise:t}):this.setValue({resolvedValue:t}))}fireListeners(){const t=this.getValue();this.listeners.forEach(n=>{n(t)})}setPromise(t){t!==this.lastSetPromise&&(this.resolutionValue=A,this.rejectionError=A,this.lastSetPromise=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),t.then(n=>{this.lastSetPromise===t&&this.resolveValue(n)}).catch(n=>{this.lastSetPromise===t&&(this.rejectionError=pt(n),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(n),this.fireListeners())}))}resolveValue(t){t!==this.resolutionValue&&(this.rejectionError=A,this.resolutionValue=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(t),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=Xe()}setValue(t){if("createPromise"in t){if(this.lastTrigger===A||!Hn(t.trigger,this.lastTrigger)){this.lastTrigger=t.trigger;const n=t.createPromise();this.setPromise(n),this.fireListeners()}}else"newPromise"in t?(this.lastTrigger,this.setPromise(t.newPromise),this.fireListeners()):"resolvedValue"in t?this.resolveValue(t.resolvedValue):"forceUpdate"in t?(this.lastTrigger=A,this.resolutionValue=A,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners()):this.resetValue(t)}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==A)return this.rejectionError;if(this.resolutionValue===A)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(t,n){this.listeners.add(n),t&&n(this.getValue())}addMultipleListeners(t){t.forEach(n=>this.listeners.add(n))}getAllListeners(){return this.listeners}removeListener(t){return this.listeners.has(t)?(this.listeners.delete(t),!0):!1}removeAllListeners(){const t=this.listeners.size;return this.listeners.clear(),t}}Yn=et;function Gn(...e){const t=vi(e,1)?e[0]:A;return{[tt]:!0,init(){return new Bi(t)}}}function se(e,t){return ki(e,t)}const ki=ft(class extends ze{constructor(e){super(e),this.element=jn(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),N}}),Zt="onDomCreated",en=ft(class extends ze{constructor(e){super(e),Ze(e,Zt)}update(e,[t]){Ze(e,Zt);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}});function nt(e,t,n,r){return e instanceof Error?r?r(e):Mn(e):pi(e)?t:n?n(e):e}function tn(e,t,n){return ni(e,()=>t,()=>n)}function Fi(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),Jn()(n(r))),defineElementNoInputs:r=>(t(r),bt(n(r)))}}function Ui(e,t){return e.filter((n,r)=>!t.includes(r))}function Kn(e){return e.filter(t=>gi(t,["tagName",Qe])&&!!t.tagName&&!!t[Qe])}const Xn=new WeakMap;function Wi(e,t){var i;const n=Kn(t);return(i=Qn(Xn,[e,...n]).value)==null?void 0:i.template}function ji(e,t,n){const r=Kn(t);return er(Xn,[e,...r],n)}function Qn(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Zn(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Qn(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Zn(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function er(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Zn(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const c=a.nested??new WeakMap;return a.nested||(a.nested=c),er(c,t,n,r+1)}function tr(e,t,n){return{name:e,check:t,transform:n}}const Vi=new WeakMap;function nr(e,t,n){const r=Wi(e,t),i=r??n();if(!r){const o=ji(e,t,i);if(o.result)Vi.set(e,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=Ui(t,i.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function rr(e,t,n,r){const i=[],s=[],o=[];return e.forEach((c,l)=>{var y;const u=i.length-1,d=i[u],h=l-1,m=t[h];let f;r&&r(c),typeof d=="string"&&(f=(y=n.find(b=>b.check(d,c,m)))==null?void 0:y.transform,f&&(i[u]=d+f(m)+c,o.push(h))),f||i.push(c);const p=e.raw[l];f?s[u]=s[u]+f(m)+p:s.push(p)}),{templateStrings:Object.assign([],i,{raw:s}),valueIndexDeletions:o}}function ir(e){return Z(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const qi=[tr("tag name css selector interpolation",(e,t,n)=>ir(n),e=>e.tagName)];function Ji(e,t){return rr(e,t,qi)}function J(e,...t){const n=nr(e,t,()=>Ji(e,t));return re(n.strings,...n.values)}const Yi=[tr("tag name interpolation",(e,t,n)=>{const r=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=ir(n);if(r&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&i},e=>e.tagName)];function Gi(e){}function Ki(e){return rr(e.strings,e.values,Yi,Gi)}function _(e,...t){const n=Jr(e,...t),r=nr(e,t,()=>Ki(n));return{...n,strings:r.strings,values:r.values}}function Xi(e,t){return e<t}function Qi(e,t){return e>t}const nn={width:250,height:250};function Zi({constraint:e,box:t,constraintType:n="max"}){return(n==="max"?Qi:Xi)(t.width/t.height,e.width/e.height)?"width":"height"}function Be({box:e,constraint:t,constraintType:n}){const r=Zi({box:e,constraint:t,constraintType:n});return t[r]/e[r]}function sr({box:e,ratio:t}){return Cn(e,(n,r)=>r*t)}function rt({box:e,min:t,max:n}){return Cn(e,(r,i)=>Or({value:i,min:(t==null?void 0:t[r])??0,max:(n==null?void 0:n[r])??1/0}))}function or({min:e,max:t,box:n}){const r=ar({min:e,max:t,box:n}),i=sr({box:n,ratio:r});return{height:Math.floor(i.height||(e==null?void 0:e.height)||nn.height),width:Math.floor(i.width||(e==null?void 0:e.width)||nn.width)}}function ar({min:e,max:t,box:n}){if(!e&&!t)return 1;const r=e?Be({box:n,constraint:e,constraintType:"min"}):1,i=t?Be({box:n,constraint:t,constraintType:"max"}):1,s=r>1?r:i<1?i:1,o=sr({ratio:s,box:n});return(e?Be({box:o,constraint:e,constraintType:"min"}):1)>1?r:s}function F(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if((!t||!(t!=null&&t.length))&&(!n||!n.length))return"";const r=[...n||[],""],s=(t??[""]).map((o,a)=>{const c=es(o,r[a]);return`${o}${c}`});return dt(s.join(""))}function es(e,t){return t._$litType$!=null||t._$litDirective$!=null?F(t):Array.isArray(t)?t.map(r=>F(r)).join(""):e.endsWith("=")?`"${t}"`:t}function ts(e){const t=ns(e);return ae(t,"object")||ae(t,"array")}function ns(e){const t=Rt({jsonString:e,errorHandler:()=>{}});if(t)return t;const n=rs(e);return Rt({jsonString:n,errorHandler:()=>{}})}function rs(e){return dt(e).replace(/,\s*([}\]])/,"$1")}const wt="vir-resizable-image";function is(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Q=is();function ss(){try{if(!Q||!Q.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function St(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const g=Promise;function w(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function q(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function L(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function $t(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const it="local-forage-detect-blob-support";let ge;const z={},os=Object.prototype.toString,fe="readonly",Re="readwrite";function as(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function cs(e){return new g(function(t){var n=e.transaction(it,Re),r=St([""]);n.objectStore(it).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function ls(e){return typeof ge=="boolean"?g.resolve(ge):cs(e).then(function(t){return ge=t,ge})}function xe(e){var t=z[e.name],n={};n.promise=new g(function(r,i){n.resolve=r,n.reject=i}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function st(e){var t=z[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function ot(e,t){var n=z[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function cr(e,t){return new g(function(n,r){if(z[e.name]=z[e.name]||hr(),e.db)if(t)xe(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var s=Q.open.apply(Q,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(it)}catch(c){if(c.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw c}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),st(e)}})}function Et(e){return cr(e,!1)}function _t(e){return cr(e,!0)}function lr(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function us(e){return new g(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},r.readAsBinaryString(e)})}function ur(e){var t=as(atob(e.data));return St([t],{type:e.type})}function dr(e){return e&&e.__local_forage_encoded_blob}function ds(e){var t=this,n=t._initReady().then(function(){var r=z[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return q(n,e,e),n}function hs(e){xe(e);for(var t=z[e.name],n=t.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,Et(e).then(i=>(e.db=i,lr(e)?_t(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw ot(e,i),i})}function I(e,t,n,r){r===void 0&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(s){if(r>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return g.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),_t(e)}).then(()=>hs(e).then(function(){I(e,t,n,r-1)})).catch(n);n(s)}}function hr(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function fs(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=z[n.name];i||(i=hr(),z[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=ds);var s=[];function o(){return g.resolve()}for(var a=0;a<i.forages.length;a++){var c=i.forages[a];c!==t&&s.push(c._initReady().catch(o))}var l=i.forages.slice(0);return g.all(s).then(function(){return n.db=i.db,Et(n)}).then(function(u){return n.db=u,lr(n,t._defaultConfig.version)?_t(n):u}).then(function(u){n.db=i.db=u,t._dbInfo=n;for(var d=0;d<l.length;d++){var h=l[d];h!==t&&(h._dbInfo.db=n.db,h._dbInfo.version=n.version)}})}function ms(e,t){var n=this;e=L(e);var r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,fe,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=c.get(e);l.onsuccess=function(){var u=l.result;u===void 0&&(u=null),dr(u)&&(u=ur(u)),i(u)},l.onerror=function(){s(l.error)}}catch(u){s(u)}})}).catch(s)});return w(r,t),r}function gs(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,fe,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=c.openCursor(),u=1;l.onsuccess=function(){var d=l.result;if(d){var h=d.value;dr(h)&&(h=ur(h));var m=e(h,d.key,u++);m!==void 0?i(m):d.continue()}else i()},l.onerror=function(){s(l.error)}}catch(d){s(d)}})}).catch(s)});return w(r,t),r}function ps(e,t,n){var r=this;e=L(e);var i=new g(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,os.call(t)==="[object Blob]"?ls(a.db).then(function(c){return c?t:us(t)}):t}).then(function(c){I(r._dbInfo,Re,function(l,u){if(l)return o(l);try{var d=u.objectStore(r._dbInfo.storeName);c===null&&(c=void 0);var h=d.put(c,e);u.oncomplete=function(){c===void 0&&(c=null),s(c)},u.onabort=u.onerror=function(){var m=h.error?h.error:h.transaction.error;o(m)}}catch(m){o(m)}})}).catch(o)});return w(i,n),i}function vs(e,t){var n=this;e=L(e);var r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,Re,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=c.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(l.error)},a.onabort=function(){var u=l.error?l.error:l.transaction.error;s(u)}}catch(u){s(u)}})}).catch(s)});return w(r,t),r}function ys(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,Re,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),c=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var l=c.error?c.error:c.transaction.error;i(l)}}catch(l){i(l)}})}).catch(i)});return w(n,e),n}function bs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,fe,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),c=a.count();c.onsuccess=function(){r(c.result)},c.onerror=function(){i(c.error)}}catch(l){i(l)}})}).catch(i)});return w(n,e),n}function ws(e,t){var n=this,r=new g(function(i,s){if(e<0){i(null);return}n.ready().then(function(){I(n._dbInfo,fe,function(o,a){if(o)return s(o);try{var c=a.objectStore(n._dbInfo.storeName),l=!1,u=c.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){i(null);return}e===0||l?i(d.key):(l=!0,d.advance(e))},u.onerror=function(){s(u.error)}}catch(d){s(d)}})}).catch(s)});return w(r,t),r}function Ss(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,fe,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),c=a.openKeyCursor(),l=[];c.onsuccess=function(){var u=c.result;if(!u){r(l);return}l.push(u.key),u.continue()},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return w(n,e),n}function $s(e,t){t=$t.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=g.reject("Invalid arguments");else{const o=e.name===n.name&&r._dbInfo.db?g.resolve(r._dbInfo.db):Et(e).then(a=>{const c=z[e.name],l=c.forages;c.db=a;for(var u=0;u<l.length;u++)l[u]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const c=a.version+1;xe(e);const l=z[e.name],u=l.forages;a.close();for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=null,m._dbInfo.version=c}return new g((h,m)=>{const f=Q.open(e.name,c);f.onerror=p=>{f.result.close(),m(p)},f.onupgradeneeded=()=>{var p=f.result;p.deleteObjectStore(e.storeName)},f.onsuccess=()=>{const p=f.result;p.close(),h(p)}}).then(h=>{l.db=h;for(let m=0;m<u.length;m++){const f=u[m];f._dbInfo.db=h,st(f._dbInfo)}}).catch(h=>{throw(ot(e,h)||g.resolve()).catch(()=>{}),h})}):i=o.then(a=>{xe(e);const c=z[e.name],l=c.forages;a.close();for(var u=0;u<l.length;u++){const h=l[u];h._dbInfo.db=null}return new g((h,m)=>{var f=Q.deleteDatabase(e.name);f.onerror=()=>{const p=f.result;p&&p.close(),m(f.error)},f.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},f.onsuccess=()=>{const p=f.result;p&&p.close(),h(p)}}).then(h=>{c.db=h;for(var m=0;m<l.length;m++){const f=l[m];st(f._dbInfo)}}).catch(h=>{throw(ot(e,h)||g.resolve()).catch(()=>{}),h})})}return w(i,t),i}var Es={_driver:"asyncStorage",_initStorage:fs,_support:ss(),iterate:gs,getItem:ms,setItem:ps,removeItem:vs,clear:ys,length:bs,key:ws,keys:Ss,dropInstance:$s};function _s(){return typeof openDatabase=="function"}var O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",xs="~~local_forage_type~",rn=/^~~local_forage_type~([^~]+)~/,Ae="__lfsc__:",at=Ae.length,xt="arbf",ct="blob",fr="si08",mr="ui08",gr="uic8",pr="si16",vr="si32",yr="ur16",br="ui32",wr="fl32",Sr="fl64",sn=at+xt.length,on=Object.prototype.toString;function $r(e){var t=e.length*.75,n=e.length,r,i=0,s,o,a,c;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=new ArrayBuffer(t),u=new Uint8Array(l);for(r=0;r<n;r+=4)s=O.indexOf(e[r]),o=O.indexOf(e[r+1]),a=O.indexOf(e[r+2]),c=O.indexOf(e[r+3]),u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|c&63;return l}function lt(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=O[t[r]>>2],n+=O[(t[r]&3)<<4|t[r+1]>>4],n+=O[(t[r+1]&15)<<2|t[r+2]>>6],n+=O[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function As(e,t){var n="";if(e&&(n=on.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&on.call(e.buffer)==="[object ArrayBuffer]")){var r,i=Ae;e instanceof ArrayBuffer?(r=e,i+=xt):(r=e.buffer,n==="[object Int8Array]"?i+=fr:n==="[object Uint8Array]"?i+=mr:n==="[object Uint8ClampedArray]"?i+=gr:n==="[object Int16Array]"?i+=pr:n==="[object Uint16Array]"?i+=yr:n==="[object Int32Array]"?i+=vr:n==="[object Uint32Array]"?i+=br:n==="[object Float32Array]"?i+=wr:n==="[object Float64Array]"?i+=Sr:t(new Error("Failed to get type for BinaryArray"))),t(i+lt(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=xs+e.type+"~"+lt(this.result);t(Ae+ct+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function Ts(e){if(e.substring(0,at)!==Ae)return JSON.parse(e);var t=e.substring(sn),n=e.substring(at,sn),r;if(n===ct&&rn.test(t)){var i=t.match(rn);r=i[1],t=t.substring(i[0].length)}var s=$r(t);switch(n){case xt:return s;case ct:return St([s],{type:r});case fr:return new Int8Array(s);case mr:return new Uint8Array(s);case gr:return new Uint8ClampedArray(s);case pr:return new Int16Array(s);case yr:return new Uint16Array(s);case vr:return new Int32Array(s);case br:return new Uint32Array(s);case wr:return new Float32Array(s);case Sr:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var At={serialize:As,deserialize:Ts,stringToBuffer:$r,bufferToString:lt};function Er(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function Cs(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var i=new g(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){Er(a,n,function(){t._dbInfo=n,s()},function(c,l){o(l)})},o)});return n.serializer=At,i}function M(e,t,n,r,i,s){e.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(c,l){l.rows.length?s(c,a):Er(c,t,function(){c.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function zs(e,t){var n=this;e=L(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(c,l){var u=l.rows.length?l.rows.item(0).value:null;u&&(u=o.serializer.deserialize(u)),i(u)},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function Ps(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`SELECT * FROM ${o.storeName}`,[],function(c,l){for(var u=l.rows,d=u.length,h=0;h<d;h++){var m=u.item(h),f=m.value;if(f&&(f=o.serializer.deserialize(f)),f=e(f,m.key,h+1),f!==void 0){i(f);return}}i()},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function _r(e,t,n,r){var i=this;e=L(e);var s=new g(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var c=t,l=i._dbInfo;l.serializer.serialize(t,function(u,d){d?a(d):l.db.transaction(function(h){M(h,l,`INSERT OR REPLACE INTO ${l.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){o(c)},function(m,f){a(f)})},function(h){if(h.code===h.QUOTA_ERR){if(r>0){o(_r.apply(i,[e,c,n,r-1]));return}a(h)}})})}).catch(a)});return w(s,n),s}function Rs(e,t,n){return _r.apply(this,[e,t,n,1])}function Ns(e,t){var n=this;e=L(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function Ls(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){M(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,c){i(c)})})}).catch(i)});return w(n,e),n}function Is(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){M(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,c){var l=c.rows.item(0).c;r(l)},function(a,c){i(c)})})}).catch(i)});return w(n,e),n}function Ds(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(c,l){var u=l.rows.length?l.rows.item(0).key:null;i(u)},function(c,l){s(l)})})}).catch(s)});return w(r,t),r}function Os(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){M(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,c){for(var l=[],u=0;u<c.rows.length;u++)l.push(c.rows.item(u).key);r(l)},function(a,c){i(c)})})}).catch(i)});return w(n,e),n}function Ms(e){return new g(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function Hs(e,t){t=$t.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;return e.name?i=new g(function(s){var o;e.name===n.name?o=r._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s(Ms(o))}).then(function(s){return new g(function(o,a){s.db.transaction(function(c){function l(m){return new g(function(f,p){c.executeSql(`DROP TABLE IF EXISTS ${m}`,[],function(){f()},function(y,b){p(b)})})}for(var u=[],d=0,h=s.storeNames.length;d<h;d++)u.push(l(s.storeNames[d]));g.all(u).then(function(){o()}).catch(function(m){a(m)})},function(c){a(c)})})}):i=g.reject("Invalid arguments"),w(i,t),i}var Bs={_driver:"webSQLStorage",_initStorage:Cs,_support:_s(),iterate:Ps,getItem:zs,setItem:Rs,removeItem:Ns,clear:Ls,length:Is,key:Ds,keys:Os,dropInstance:Hs};function ks(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function xr(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Fs(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Us(){return!Fs()||localStorage.length>0}function Ws(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=xr(e,t._defaultConfig),Us()?(t._dbInfo=n,n.serializer=At,g.resolve()):g.reject()}function js(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return w(n,e),n}function Vs(e,t){var n=this;e=L(e);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return w(r,t),r}function qs(e,t){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,c=1,l=0;l<a;l++){var u=localStorage.key(l);if(u.indexOf(s)===0){var d=localStorage.getItem(u);if(d&&(d=i.serializer.deserialize(d)),d=e(d,u.substring(o),c++),d!==void 0)return d}}});return w(r,t),r}function Js(e,t){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return w(r,t),r}function Ys(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return w(n,e),n}function Gs(e){var t=this,n=t.keys().then(function(r){return r.length});return w(n,e),n}function Ks(e,t){var n=this;e=L(e);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return w(r,t),r}function Xs(e,t,n){var r=this;e=L(e);var i=r.ready().then(function(){t===void 0&&(t=null);var s=t;return new g(function(o,a){var c=r._dbInfo;c.serializer.serialize(t,function(l,u){if(u)a(u);else try{localStorage.setItem(c.keyPrefix+e,l),o(s)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(d),a(d)}})})});return w(i,n),i}function Qs(e,t){if(t=$t.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i;return e.name?i=new g(function(s){e.storeName?s(xr(e,r._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=g.reject("Invalid arguments"),w(i,t),i}var Zs={_driver:"localStorageWrapper",_initStorage:Ws,_support:ks(),iterate:qs,getItem:Vs,setItem:Xs,removeItem:Ks,clear:js,length:Gs,key:Js,keys:Ys,dropInstance:Qs};const eo=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),to=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(eo(e[r],t))return!0;r++}return!1},Ar=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},te={},an={},Y={INDEXEDDB:Es,WEBSQL:Bs,LOCALSTORAGE:Zs},no=[Y.INDEXEDDB._driver,Y.WEBSQL._driver,Y.LOCALSTORAGE._driver],Se=["dropInstance"],ke=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Se),ro={description:"",driver:no.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function io(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function Fe(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(Ar(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class Tt{constructor(t){for(let n in Y)if(Y.hasOwnProperty(n)){const r=Y[n],i=r._driver;this[n]=i,te[i]||this.defineDriver(r)}this._defaultConfig=Fe({},ro),this._config=Fe({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const i=new g(function(s,o){try{const a=t._driver,c=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(c);return}const l=ke.concat("_initStorage");for(let h=0,m=l.length;h<m;h++){const f=l[h];if((!to(Se,f)||t[f])&&typeof t[f]!="function"){o(c);return}}(function(){const h=function(m){return function(){const f=new Error(`Method ${m} is not implemented by the current driver`),p=g.reject(f);return w(p,arguments[arguments.length-1]),p}};for(let m=0,f=Se.length;m<f;m++){const p=Se[m];t[p]||(t[p]=h(p))}})();const d=function(h){te[a]&&console.info(`Redefining LocalForage driver: ${a}`),te[a]=t,an[a]=h,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,o):d(!!t._support):d(!0)}catch(a){o(a)}});return q(i,n,r),i}driver(){return this._driver||null}getDriver(t,n,r){const i=te[t]?g.resolve(te[t]):g.reject(new Error("Driver not found."));return q(i,n,r),i}getSerializer(t){const n=g.resolve(At);return q(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return q(r,t,t),r}setDriver(t,n,r){const i=this;Ar(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(u){return i._extend(u),o(),i._ready=i._initStorage(i._config),i._ready}function c(u){return function(){let d=0;function h(){for(;d<u.length;){let f=u[d];return d++,i._dbInfo=null,i._ready=null,i.getDriver(f).then(a).catch(h)}o();const m=new Error("No available storage method found.");return i._driverSet=g.reject(m),i._driverSet}return h()}}const l=this._driverSet!==null?this._driverSet.catch(()=>g.resolve()):g.resolve();return this._driverSet=l.then(()=>{const u=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(u).then(d=>{i._driver=d._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=c(s)})}).catch(()=>{o();const u=new Error("No available storage method found.");return i._driverSet=g.reject(u),i._driverSet}),q(this._driverSet,n,r),this._driverSet}supports(t){return!!an[t]}_extend(t){Fe(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,i=t.length;r<i;r++){const s=t[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=ke.length;t<n;t++)io(this,ke[t])}createInstance(t){return new Tt(t)}}const Tr=new Tt,so=Tr;async function Cr(){return await caches.open(wt)}async function oo(e){return await(await Cr()).match(e)}const cn=so.createInstance({name:wt});async function ao(e,t){await(await Cr()).put(e,t)}const Ue=new Map;async function co(e,t){var r;if(!Ue.has(e)){const i=Ce();Ue.set(e,i.promise);try{const s=new Request(e),o=t?await oo(s):void 0,a=o??await fetch(s),c=t?await cn.getItem(e)??void 0:void 0,l=c??{contentType:((r=a.headers.get("Content-Type"))==null?void 0:r.toLowerCase())||"",ok:a.ok,text:await a.clone().text()??""};if(!c&&t)try{cn.setItem(e,l)}catch{}const u={blobUrl:URL.createObjectURL(await a.clone().blob()),...l};if(!o&&t)try{ao(s,a)}catch{}i.resolve(u)}catch(s){throw i.reject(s),s}}const n=await Ue.get(e);if(!n)throw new Error("Stored a cached response but couldn't find it afterwards.");return n}var v=(e=>(e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf",e))(v||{});const lo=["text","json"],uo=["audio"];function ln(e){return lo.includes(e)}function ho(e){return uo.includes(e)}async function fo(e,t){return e.includes("video")?"video":e.includes("svg")||t.includes("<svg")?"svg":e.includes("html")||t.includes("<html")?"html":ts(t)?"json":e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?"text":e.includes("audio")?"audio":e.includes("pdf")?"pdf":"image"}function mo({imageType:e,imageText:t,imageUrl:n,blockAutoPlay:r}){return e==="image"?F(_`
            <img src=${n} />
        `):e==="video"?F(_`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):e==="text"||e==="json"?F(_`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e==="audio"?F(_`
                <audio controls src=${n}></audio>
            `):t}function go(e,t){if(t==="json")try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t==="html")return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function un({imageUrl:e,blockAutoPlay:t,textTransformer:n=i=>i,allowPersistentCache:r}){const i=await co(e,r);if(!i.ok)throw new Error(`Failed to load '${e}'`);const s=await fo(i.contentType,i.text),o=n(go(i.text,s));return{templateString:mo({imageText:o,imageType:s,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:s}}class ut extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let po=!1;function vo(){return po}var j;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(j||(j={}));const B=Symbol("any-origin");function zr(e,t){try{return yo(e,t),!0}catch{return!1}}function yo(e,t){if(e===B)return;if(!e.filter(r=>t.origin===r).length)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '[${e.join(", ")}]'`)}const bo=Symbol("dangerDisableSecurityWarningsSymbol"),wo=globalThis.crypto;function So(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return wo.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}const $o=["january","february","march","april","may","june","july","august","september","october","november","december"];$o.map(e=>e.slice(0,3));function Eo(e){return e?e instanceof Error?e.message:Ao(e,"message")?String(e.message):String(e):""}function _o(e){return e instanceof Error?e:new Error(Eo(e))}const xo=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ao(e,t){return e?xo.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function To(e){const t=Pr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Pr(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Pr.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function Co(e,t,n){return n.type===e&&n.direction===t}function zo(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function Po({message:e,verifyChildData:t,iframeElement:n},r,i,s){if(!n)throw new Error("No iframe element was provided.");let o=0,a=!1,c,l,u,d=!1;const h={...e,direction:j.FromParent,messageId:So(32)},m=e.type,f=r===B?["*"]:r;function p(b){try{if(!zr(r,b))return;const $=b.data;if($.type==="error")throw new Error(`Child threw an error: ${$.data}`);if(vo(),$&&d&&Co(m,j.FromChild,$)&&$.messageId===h.messageId){let x=!1;try{x=t?t($.data):!0}catch{}if(!x)return;a=!0,l=b,c=$}}catch($){u=_o($)}}globalThis.addEventListener("message",p);const y=Date.now();for(;!a&&Date.now()-y<i&&!u;){if(!n.isConnected)throw new ut;const b=n.contentWindow;b&&(d=!0,f.forEach($=>{try{b.postMessage(h,{targetOrigin:$})}catch{}})),await To(s||zo(o)),o++}if(globalThis.removeEventListener("message",p),u)throw u;if(!a)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(i/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but received a valid response");return{data:c==null?void 0:c.data,event:l}}function Rr({allowedOrigins:e,timeoutMs:t=1e4,...n}){if(e!==B&&e.includes("*")&&(e=B),e===B&&!n[bo]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),e!==B&&!e.length)throw new Error(`No allowed origins were provide to ${Rr.name}. At least one must be provided.`);const r=e===B?["*"]:e;return{async sendMessageToChild(i){if(i.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await Po(i,e,i.timeoutMs||t,i.intervalMs)},listenForParentMessages(i){globalThis.addEventListener("message",async s=>{if(!zr(e,s))return;const o=s.data,a=await i({...o,originalEvent:s}),c={type:o.type,direction:j.FromChild,data:a,messageId:o.messageId};r.forEach(l=>{try{globalThis.parent.postMessage(c,{targetOrigin:l})}catch{}})})}}}var T=(e=>(e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading",e))(T||{}),E=(e=>(e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded",e))(E||{});const R=Rr({allowedOrigins:[window.location.origin]});async function Ro(e,t){const n=Ce();e.onload=()=>{n.resolve()};try{await R.sendMessageToChild({message:{type:E.FrameReady},iframeElement:e,timeoutMs:t})}catch{await n.promise,await R.sendMessageToChild({message:{type:E.FrameReady},iframeElement:e,timeoutMs:t})}}async function No({min:e,max:t,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,forcedOriginalImageSize:o,timeoutMs:a}){var l;await Ro(r,a),s&&await R.sendMessageToChild({message:{type:E.ForceSize,data:s},iframeElement:r,timeoutMs:a});const c=o??(await R.sendMessageToChild({message:{type:E.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(u){return!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height}})).data;return await Nr({min:e,max:t,imageDimensions:c,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,sendSizeMessage:!0,timeoutMs:a}),await R.sendMessageToChild({message:{type:E.ImageElementLoaded},iframeElement:r,timeoutMs:a}),((l=r.contentWindow)==null?void 0:l.document.documentElement.outerHTML)??""}async function Nr({min:e,max:t,imageDimensions:n,host:r,iframeElement:i,imageData:s,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:c}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:e,max:t,box:o??n},d=ln(s.imageType)||ho(s.imageType)?rt(u):or(u);l.style.width=P(Math.floor(d.width)),l.style.height=P(Math.floor(d.height));const h=rt({min:e,max:t,box:d});d.height<h.height?r.classList.add(T.VerticallyCenter):r.classList.remove(T.VerticallyCenter),r.style.width=P(h.width),r.style.height=P(h.height);const m=ar({min:e,max:t,box:o??n});if(a){if(m>3?await R.sendMessageToChild({message:{type:E.SendScalingMethod,data:"pixelated"},iframeElement:i,timeoutMs:c}):await R.sendMessageToChild({message:{type:E.SendScalingMethod,data:"default"},iframeElement:i,timeoutMs:c}),await R.sendMessageToChild({message:{type:E.SizeDetermined,data:d},iframeElement:i,timeoutMs:c}),s.imageType===v.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},p={width:m*f.width,height:m*f.height};await R.sendMessageToChild({message:{type:E.SendScale,data:p},iframeElement:i,timeoutMs:c})}else if(ln(s.imageType)){const f=o??n;if(f.height<d.height){const p=d.width/f.width,y=d.height/f.height,b=Math.min(p,y);await R.sendMessageToChild({message:{type:E.SendScale,data:{height:b,width:b}},iframeElement:i,timeoutMs:c})}}}}const pe={x:16,y:8};var dn=Object.freeze,Lo=Object.defineProperty,hn=(e,t)=>dn(Lo(e,"raw",{value:dn(t||e.slice())})),fn,mn;function Io(e,t,n){const r=Math.random(),i=_(fn||(fn=hn([`
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

                return image.complete;
            }

            const loadedGrabbers = {
                `,`: () => true,
                `,`: () => true,
                `,`: () => true,
                `,`: isVideoLoaded,
                `,`: () => true,
                `,`: () => true,
                `,`: isImageLoaded,
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

                return image.complete;
            }

            const loadedGrabbers = {
                `,`: () => true,
                `,`: () => true,
                `,`: () => true,
                `,`: isVideoLoaded,
                `,`: () => true,
                `,`: () => true,
                `,`: isImageLoaded,
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
    `])),e.imageType,n??"",v.Svg,v.Html,v.Image,v.Video,v.Text,v.Json,v.Audio,v.Svg,v.Html,v.Image,v.Video,v.Text,v.Json,v.Audio,j.FromChild,j.FromChild,E.ImageElementLoaded,E.FrameReady,E.SendScale,E.SendScalingMethod,E.SendSize,E.ForceSize,E.SizeDetermined,v.Json,v.Text,pe.y,v.Audio),s=_(mn||(mn=hn([`
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
    `])),e.imageType,v.Image,v.Svg,v.Video,v.Text,v.Json,v.Text,v.Json,v.Text,v.Json,v.Text,v.Json,pe.y,pe.x,v.Text,v.Json,pe.y,r,t??"",i);return dt(F(s)).replace(String(r),`
${e.templateString}
`)}const Do=1e4,Oo={textTransformer:"textTransformer",extraHtml:"extraHtml"},Mo=Hr(Oo),Ho={imageData:Gn(),error:void 0},Bo=[v.Html,v.Video,v.Audio,v.Pdf],oe=Jn()({tagName:wt,stateInitStatic:Ho,events:{settled:we(),imageDataCalculated:we(),errored:we()},styles:J`
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),n=e[We];t&&n&&(t.srcdoc=n)},renderCallback({state:e,inputs:t,updateState:n,host:r,dispatch:i,events:s}){const o=t.timeoutMs??Do,a=e.imageData instanceof Error?e.imageData:e.error;n({imageData:{createPromise:async()=>{if(e.error&&n({error:void 0}),r.classList.remove(T.HideLoading),i(new s.settled(!1)),r.classList.remove(T.VerticallyCenter),!t.imageUrl)return new Promise(()=>{});const y={imageUrl:t.imageUrl,blockAutoPlay:!!t.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!t.blockPersistentCache};let b;try{b=await Wr(o,un(y))}catch{await zn(1e3);try{b=await un(y)}catch(x){throw x}}if(b)return b;throw new Error("no image data result")},trigger:{...Fr(t,Mo)}}});const c=t.min&&t.max?rt({box:t.min,max:t.max}):t.min,l=t.max,u=t.forcedOriginalImageSize?or({min:c,max:l,box:t.forcedOriginalImageSize}):void 0,d=nt(e.imageData,"",y=>(i(new s.imageDataCalculated(y)),y.imageType===v.Pdf?_`
                        <iframe
                            src=${y.imageUrl}
                            ${en(async b=>{try{await Nr({forcedFinalImageSize:t.forcedFinalImageSize,host:r,iframeElement:b,imageData:y,imageDimensions:l??{width:500,height:500},max:l,min:c,sendSizeMessage:!1,timeoutMs:o}),r[We]="",i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch($){const x=ye($);if(x instanceof ut)return;console.error(x),n({error:x}),i(new s.errored(x))}})}
                        ></iframe>
                    `:_`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${Io(y,t.extraHtml,t.htmlSizeQuerySelector)}
                            ${en(async b=>{try{const $=await No({min:c,max:l,host:r,iframeElement:b,imageData:y,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:u,timeoutMs:o});r[We]=$,i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch($){const x=ye($);if(x instanceof ut)return;console.error(x),n({error:x}),i(new s.errored(x))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),y=>{n({error:y}),i(new s.errored(ye(y)))}),h=nt(e.imageData,gn,y=>t.blockInteraction===!1||t.blockInteraction==null&&Bo.includes(y.imageType)?"":gn,()=>""),m=a?J`
                  max-width: 100%;
                  max-height: 100%;
              `:u?J`
                  width: ${u.width}px;
                  height: ${u.height}px;
              `:"",f=J`
            width: ${(c==null?void 0:c.width)??250}px;
            height: ${(c==null?void 0:c.height)??250}px;
        `,p=_`
            <div class="frame-constraint" style=${m}>${d}</div>
        `;return _`
            ${tn(!a,_`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${f}>
                ${tn(!!a,_`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${a==null?void 0:a.message}</slot>
                        </div>
                    `,p)}
            </div>
            ${h}
        `}}),gn=_`
    <div class="click-cover"></div>
`,We="latest-frame-srcdoc";class me extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class pn extends me{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const de="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ko=globalThis.history.pushState;function vn(...e){const t=ko.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(de)),t}const Fo=globalThis.history.replaceState;function yn(...e){const t=Fo.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(de)),t}function Uo(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===vn)throw new pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===yn)throw new pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=vn,globalThis.history.replaceState=yn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(de))})}}function Wo(e){return Array.from(e.entries()).reduce((t,n)=>(t[n[0]]=n[1],t),{})}function jo(e){const t=Object.entries(e).reduce((n,r)=>{const i=`${r[0]}=${r[1]}`;return`${n}&${i}`},"");return new URLSearchParams(t)}function Vo(e){const n=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(o=>!!o),i=globalThis.location.search?Wo(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:i,hash:s}}class qo extends me{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Lr(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const bn=6;function wn(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>bn)throw new qo(`Route sanitization depth has exceed the max of ${bn} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(Lr(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(i=>{i(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class je extends me{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Jo(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new je(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new je(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new je(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Yo(e,t,n,r=!1){const i=Ir(e,t,n);r?globalThis.history.replaceState(void 0,"",i):globalThis.history.pushState(void 0,"",i)}function Ir(e,t,n=""){var c;if(!n&&t!=null)throw new me("Route base regexp was defined but routeBase string was not provided.");const r=Go(t)?`/${n}`:"",i=e.search?jo(e.search).toString():"",s=i?`?${i}`:"",o=(c=e.hash)!=null&&c.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`${r}/${e.paths.join("/")}${s}${a}`}function Go(e){return!!(e&&globalThis.location.pathname.match(e))}function Ko(e={}){var o;Jo(e),Uo();const t=(o=e.routeBase)==null?void 0:o.replace(/\/+$/,""),n=t?new RegExp(`^\\/${e.routeBase}`):void 0;let r=!1;const i=()=>wn(s),s={listeners:new Set,initParams:e,sanitizeFullRoute:a=>{const c={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(c):c},setRoutes:(a,c=!1,l=!1)=>{const u=s.getCurrentRawRoutes(),d={...u,...a},h=s.sanitizeFullRoute(d);if(!(!l&&Lr(u,h)))return Yo(h,n,t,c)},createRoutesUrl:a=>Ir(a,n,t),getCurrentRawRoutes:()=>Vo(n),removeAllRouteListeners(){s.listeners.forEach(a=>s.removeRouteListener(a))},addRouteListener:(a,c)=>{if(e.maxListenerCount&&s.listeners.size>=e.maxListenerCount)throw new me(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return s.listeners.add(c),r||(globalThis.addEventListener(de,i),r=!0),a&&wn(s,c),c},hasRouteListener:a=>s.listeners.has(a),removeRouteListener:a=>{const c=s.listeners.delete(a);return s.listeners.size||(globalThis.removeEventListener(de,i),r=!1),c},sanitizationDepth:0};return s}const Dr=Ko({routeBase:"resizable-image-element"}),Xo=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Ve=Tr.createInstance({name:"resizable-image-element-example-storage"}),Sn="stored-urls",$n={async set(e){const t=Te(e).map(n=>n);await Ve.clear(),await Ve.setItem(Sn,t)},async get(){const e=await Ve.getItem(Sn),t=ae(e,"array")?e:[],n=Te(t);return Qo(n.length?n:Xo)}};function Qo(e){var t,n;try{const r=Te(((n=(t=Dr.getCurrentRawRoutes().search)==null?void 0:t.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:e}catch{return e}}function Te(e){return e.map(t=>typeof t!="string"?"":t.replace(/^"/,"").replace(/"$/,"").trim()).filter(_n)}const{defineElement:Zo,defineElementNoInputs:ea}=Fi(),ve=Zo()({tagName:"vir-url-input",events:{urlsChange:we()},styles:J`
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
                ${se("input",a=>{const l=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));t(new n.urlsChange(l))})}
                ${se("blur",()=>{i&&(i.value=o)})}
                .value=${i&&i.matches(":focus")?s:o}
            ></textarea>
        `}}),ne={max:{width:300,height:600},min:{width:300,height:150}};ea({tagName:"vir-example-app",stateInitStatic:{showConstraints:!0,imageUrls:Gn($n.get()),constraints:void 0,router:Dr,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{"vir-example-app-show-constraints":({state:e})=>e.showConstraints},styles:({hostClasses:e})=>J`
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

        ${e["vir-example-app-show-constraints"].selector} ${oe} {
            border-color: blue;
        }

        ${oe} {
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
    `,renderCallback:({state:e,updateState:t})=>{if(!e.constraints){const o=e.router.getCurrentRawRoutes().search;t({constraints:{min:{width:Number(o==null?void 0:o.minW)||ne.min.width,height:Number(o==null?void 0:o.minH)||ne.min.height},max:{width:Number(o==null?void 0:o.maxW)||ne.max.width,height:Number(o==null?void 0:o.maxH)||ne.max.height}}})}const n=e.constraints??ne,r=Array.isArray(e.imageUrls)?e.imageUrls:[];function i(){return{...e.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function s(o,a,c){t({constraints:{...n,[a]:{...n[a],[c]:Number(o.value)||0}}})}return!e.urlUpdateDebounce.promise&&(!e.urlUpdateDebounce.lastSearch||!xn(i(),e.urlUpdateDebounce.lastSearch))&&t({urlUpdateDebounce:{promise:zn(1e3).then(()=>{const o=i();try{e.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}t({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:i()}}),_`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${ve}
                ${yt(ve,{urls:r})}
                ${se(ve.events.urlsChange,o=>{const a=o.detail;$n.set(a),t({imageUrls:{resolvedValue:o.detail}})})}
            ></${ve}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${e.showConstraints}
                        ${se("input",o=>{const a=o.currentTarget;t({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(c=>{const l=[Ct(o),Ct(c)].join(" "),u=n[o][c];return _`
                            <label>
                                ${l}
                                <br />
                                ${P(u)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${u}
                                    ${se("input",d=>{s(d.currentTarget,o,c)})}
                                />
                            </label>
                        `});return _`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${ta(n,e.imageUrls)}</div>
        `}});function ta(e,t){return nt(t,"Loading...",n=>Te(n).map(r=>{const i=`
                height: ${P(e.max.height)};
                max-height: ${P(e.max.height)};
                width: ${P(e.max.width)};
                max-width: ${P(e.max.width)}`,s=`height: ${P(e.min.height)}; width: ${P(e.min.width)}`;return _`
                <div class="constraint-wrapper max" style=${i}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${oe}
                            ${yt(oe,{imageUrl:r,max:e.max,min:e.min})}
                        ></${oe}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${s}></div>
                    </div>
                </div>
            `}))}
