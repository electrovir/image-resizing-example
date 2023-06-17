(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ft(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Pt(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function kr({value:e,min:t,max:n}){return Math.max(Math.min(e,n),t)}function An(e){return e?e instanceof Error?e.message:Ee(e,"message")?String(e.message):String(e):""}function we(e){return e instanceof Error?e:new Error(An(e))}function Tn(e){return!!e}function Ye(e){return!!e&&typeof e=="object"}const Rt="Failed to compare objects using JSON.stringify";function Lt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Cn(e,t){try{return e===t?!0:Ye(e)&&Ye(t)?Lt(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(r=>Cn(e[r],t[r])):!1:Lt(e,t)}catch(n){const r=we(n);throw r.message.startsWith(Rt)||(r.message=`${Rt}: ${r.message}`),r}}const Br=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ee(e,t){return e?Br.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function K(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Fr(e){return K(e).map(t=>e[t])}function zn(e,t,n=!1,r={}){const i=K(e),s=new Set(K(t));if(!n){const o=i.filter(a=>!s.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}s.forEach(o=>{if(!Ee(e,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const l=e[o],c=t[o];r[o]||Pn(l,c,a,n,r[o]??{})})}function Pn(e,t,n,r,i){var a;const s=typeof e,o=typeof t;s!==o&&n(`type "${s}" did not match expected type "${o}"`);try{Ee(t,"constructor")&&(!Ee(e,"constructor")||e.constructor!==t.constructor)&&n(`constructor "${(a=e==null?void 0:e.constructor)==null?void 0:a.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(t)?(Array.isArray(e)||n("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Pn(l,d,n,r,i);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${An(h)}`)}}).filter(Tn).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):Ye(t)&&zn(e,t,r,i)}function mt(e){return Array.isArray(e)?"array":typeof e}function le(e,t){return mt(e)===t}function Ur(e,t,n){if(!le(e,t))throw new TypeError(`'${n}' is of type '${mt(e)}' but type '${t}' was expected.`)}function Nt({jsonString:e,errorHandler:t,shapeMatcher:n}){try{const r=JSON.parse(e);return n!=null&&(le(n,"object")?zn(r,n):Ur(r,mt(n),"parsedJson")),r}catch(r){if(t)return t(r);throw r}}function Wr(e,t){return K(e).filter(r=>{const i=e[r];return t(r,i,e)}).reduce((r,i)=>(r[i]=e[i],r),{})}function jr(e,t){return Wr(e,n=>!t.includes(n))}function Rn(e,t){let n=!1;const r=K(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(K(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function P(e){return String(e).endsWith("px")?String(e):`${e}px`}function Ln(e){const t=ze();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}class Vr extends Error{constructor(t,n=`Promised timed out after ${t} ms.`){super(n),this.durationMs=t,this.message=n,this.name="PromiseTimeoutError"}}function qr(e,t){return new Promise(async(n,r)=>{const i=e===1/0?void 0:setTimeout(()=>{r(new Vr(e))},e);try{const s=await t;n(s)}catch(s){r(s)}finally{clearTimeout(i)}})}function ze(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ze.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}const Jr=globalThis.crypto;function Yr(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return Jr.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}function Ne(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gt=e=>(...t)=>({_$litDirective$:e,values:t});let Pe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie;const _e=window,X=_e.trustedTypes,It=X?X.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ge="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,In="?"+D,Gr=`<${In}>`,U=document,ce=()=>U.createComment(""),ue=e=>e===null||typeof e!="object"&&typeof e!="function",Dn=Array.isArray,Kr=e=>Dn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",De=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Ot=/>/g,H=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,Ht=/"/g,On=/^(?:script|style|textarea|title)$/i,Xr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Qr=Xr(1),L=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),kt=new WeakMap,B=U.createTreeWalker(U,129,null,!1),Zr=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":"",o=ne;for(let l=0;l<n;l++){const c=e[l];let u,d,h=-1,m=0;for(;m<c.length&&(o.lastIndex=m,d=o.exec(c),d!==null);)m=o.lastIndex,o===ne?d[1]==="!--"?o=Dt:d[1]!==void 0?o=Ot:d[2]!==void 0?(On.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=H):d[3]!==void 0&&(o=H):o===H?d[0]===">"?(o=i??ne,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?H:d[3]==='"'?Ht:Mt):o===Ht||o===Mt?o=H:o===Dt||o===Ot?o=ne:(o=H,i=void 0);const f=o===H&&e[l+1].startsWith("/>")?" ":"";s+=o===ne?c+Gr:h>=0?(r.push(u),c.slice(0,h)+Ge+c.slice(h)+D+f):c+D+(h===-2?(r.push(void 0),l):f)}const a=s+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[It!==void 0?It.createHTML(a):a,r]};class de{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,u]=Zr(t,n);if(this.el=de.createElement(c,r),B.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=B.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith(Ge)||h.startsWith(D)){const m=u[o++];if(d.push(h),m!==void 0){const f=i.getAttribute(m.toLowerCase()+Ge).split(D),p=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:p[2],strings:f,ctor:p[1]==="."?ti:p[1]==="?"?ri:p[1]==="@"?ii:Re})}else l.push({type:6,index:s})}for(const h of d)i.removeAttribute(h)}if(On.test(i.tagName)){const d=i.textContent.split(D),h=d.length-1;if(h>0){i.textContent=X?X.emptyScript:"";for(let m=0;m<h;m++)i.append(d[m],ce()),B.nextNode(),l.push({type:2,index:++s});i.append(d[h],ce())}}}else if(i.nodeType===8)if(i.data===In)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(D,d+1))!==-1;)l.push({type:7,index:s}),d+=D.length-1}s++}}static createElement(t,n){const r=U.createElement("template");return r.innerHTML=t,r}}function Q(e,t,n=e,r){var i,s,o,a;if(t===L)return t;let l=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const c=ue(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(t=Q(e,l._$AS(e,t.values),l,r)),t}let ei=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:U).importNode(r,!0);B.currentNode=s;let o=B.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new fe(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new si(o,this,t)),this._$AV.push(u),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=B.nextNode(),a++)}return B.currentNode=U,s}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class fe{constructor(t,n,r,i){var s;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Q(this,t,n),ue(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Kr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&ue(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=de.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new ei(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(t){let n=kt.get(t.strings);return n===void 0&&kt.set(t.strings,n=new de(t)),n}T(t){Dn(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new fe(this.k(ce()),this.k(ce()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}}class Re{constructor(t,n,r,i,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Q(this,t,n,0),o=!ue(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Q(this,a[r+l],n,l),c===L&&(c=this._$AH[l]),o||(o=!ue(c)||c!==this._$AH[l]),c===S?t=S:t!==S&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ti extends Re{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const ni=X?X.emptyScript:"";class ri extends Re{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,ni):this.element.removeAttribute(this.name)}}class ii extends Re{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){var r;if((t=(r=Q(this,t,n,0))!==null&&r!==void 0?r:S)===L)return;const i=this._$AH,s=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==S&&(i===S||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class si{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const Bt=_e.litHtmlPolyfillSupport;Bt==null||Bt(de,fe),((Ie=_e.litHtmlVersions)!==null&&Ie!==void 0?Ie:_e.litHtmlVersions=[]).push("2.7.4");const oi=(e,t,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new fe(t.insertBefore(ce(),a),a,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ke=class extends Pe{constructor(t){if(super(t),this.et=S,t.type!==Nn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this.ft=void 0,this.et=t;if(t===L)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Ke.directiveName="unsafeHTML",Ke.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ft=class extends Ke{};Ft.directiveName="unsafeSVG",Ft.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ai(e,t,n){return e?t():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=window,pt=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),Ut=new WeakMap;let Mn=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(pt&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ut.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ut.set(n,t))}return t}toString(){return this.cssText}};const C=e=>new Mn(typeof e=="string"?e:e+"",void 0,vt),se=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Mn(n,e,vt)},li=(e,t)=>{pt?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),i=be.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)})},Wt=pt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return C(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe;const xe=window,jt=xe.trustedTypes,ci=jt?jt.emptyScript:"",Vt=xe.reactiveElementPolyfillSupport,Xe={toAttribute(e,t){switch(t){case Boolean:e=e?ci:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Hn=(e,t)=>t!==e&&(t==t||e==e),Me={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:Hn},Qe="finalized";class V extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),t.push(i))}),t}static createProperty(t,n=Me){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(i){const s=this[t];this[n]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Me}static finalize(){if(this.hasOwnProperty(Qe))return!1;this[Qe]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Wt(i))}else t!==void 0&&n.push(Wt(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return li(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=Me){var i;const s=this.constructor._$Ep(t,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Xe).toAttribute(n,r.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,n){var r;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Xe;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(t,n,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Hn)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}V[Qe]=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},Vt==null||Vt({ReactiveElement:V}),((Oe=xe.reactiveElementVersions)!==null&&Oe!==void 0?Oe:xe.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He,ke;class oe extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oi(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return L}}oe.finalized=!0,oe._$litElement$=!0,(He=globalThis.litElementHydrateSupport)===null||He===void 0||He.call(globalThis,{LitElement:oe});const qt=globalThis.litElementPolyfillSupport;qt==null||qt({LitElement:oe});((ke=globalThis.litElementVersions)!==null&&ke!==void 0?ke:globalThis.litElementVersions=[]).push("3.3.2");var ui=globalThis&&globalThis.__esDecorate||function(e,t,n,r,i,s){function o(w){if(w!==void 0&&typeof w!="function")throw new TypeError("Function expected");return w}for(var a=r.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!t&&e?r.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,r.name):{}),d,h=!1,m=n.length-1;m>=0;m--){var f={};for(var p in r)f[p]=p==="access"?{}:r[p];for(var p in r.access)f.access[p]=r.access[p];f.addInitializer=function(w){if(h)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(w||null))};var y=(0,n[m])(a==="accessor"?{get:u.get,set:u.set}:u[l],f);if(a==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(d=o(y.get))&&(u.get=d),(d=o(y.set))&&(u.set=d),(d=o(y.init))&&i.push(d)}else(d=o(y))&&(a==="field"?i.push(d):u[l]=d)}c&&Object.defineProperty(c,r.name,u),h=!0},di=globalThis&&globalThis.__runInitializers||function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},hi=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function fi(){function e(t,n){return t}return e}let kn=(()=>{let e=[fi()],t,n=[],r;return r=class extends oe{},hi(r,"DeclarativeElement"),ui(null,t={value:r},e,{kind:"class",name:r.name},null,n),r=t.value,di(r,n),r})();const mi={capitalizeFirstLetter:!1};function gi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function pi(e,t){return t.capitalizeFirstLetter?gi(e):e}function vi(e,t=mi){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return pi(r,t)}const yi=["january","february","march","april","may","june","july","august","september","october","november","december"];yi.map(e=>e.slice(0,3));function Bn(e){return e?e instanceof Error?e.message:ee(e,"message")?String(e.message):String(e):""}function yt(e){return e instanceof Error?e:new Error(Bn(e))}function Jt(e){return!!e&&typeof e=="object"}const Yt="Failed to compare objects using JSON.stringify";function Gt(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Fn(e,t){try{return e===t?!0:Jt(e)&&Jt(t)?Gt(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(r=>Fn(e[r],t[r])):!1:Gt(e,t)}catch(n){const r=yt(n);throw r.message.startsWith(Yt)||(r.message=`${Yt}: ${r.message}`),r}}const wi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ee(e,t){return e?wi.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function bi(e,t){return e&&t.every(n=>ee(e,n))}function W(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Un(e,t){let n=!1;const r=W(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(W(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function Si(e){return!!(ee(e,"then")&&typeof e.then=="function")}function Ze(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ze.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function $i(e,t){try{return Ei(e,t),!0}catch{return!1}}function Ei(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Kt(e){return e!==e.toUpperCase()}function _i(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0?s[i-1]:"",a=i<s.length-1?s[i+1]:"",l=Kt(o)||Kt(a);return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const xi=["january","february","march","april","may","june","july","august","september","october","november","december"];xi.map(e=>e.slice(0,3));function Ai(e){return!!e&&typeof e=="object"}function Xt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ti(e){return Array.isArray(e)?"array":typeof e}function Ci(e,t){return Ti(e)===t}function zi(e,t){let n=!1;const r=Xt(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Xt(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function Wn(e){if(Ai(e))return zi(e,(n,r)=>{if(!Ci(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(_i(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?C(n):n.startsWith("-")?se`-${C(n)}`:se`--${C(n)}`;return{name:o,value:se`var(${o}, ${C(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${Wn.name}' function.`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},Ri=(e,t,n)=>{t.constructor.createProperty(n,e)};function jn(e){return(t,n)=>n!==void 0?Ri(e,t,n):Pi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Be;((Be=window.HTMLSlotElement)===null||Be===void 0?void 0:Be.prototype.assignedElements)!=null;const et=Symbol("this-is-an-element-vir-declarative-element"),wt=Symbol("key for ignoring inputs not having been set yet"),Li={[wt]:!0,allowPolymorphicState:!1};function Vn(e,t){const n=e.instanceState;W(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&W(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),qn(e)}function qn(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Jn(e,t){return tt(e,t),e.element}function tt(e,t){if(e.type!==Nn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function bt(e,t){return t?Qt(e,t):Qt(void 0,e)}const Qt=gt(class extends Pe{constructor(e){super(e),this.element=Jn(e,"assign")}render(e,t){return Ni(e,this.element,t),L}});function Ni(e,t,n){Vn(t,n)}function Yn(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof kn?!0:Yn(n)}function Zt(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Ii extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Gn(){return e=>{var t;return t=class extends Ii{constructor(n){super(e,n),this._type=e}},t.type=e,t}}function Se(){return Gn()}function Di(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,n)=>{const r=Gn()(n);return t[n]=r,t},{}):{}}const nt="_is_element_vir_observable_property_handler_instance",rt="_is_element_vir_observable_property_handler_creator";function Oi(e){return ee(e,rt)&&e[rt]===!0}function Mi(e){return ee(e,nt)&&e[nt]===!0}function Hi(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function en(e,t){const n=e;function r(o){t?Hi(o,e,e.tagName):jn()(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set:(o,a,l)=>{r(a);const c=e.observablePropertyHandlerMap[a];function u(d){o[a]=d,n[a]=d}return Oi(l)&&(l=l.init()),Mi(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[a]=l):c?c.setValue(l):u(l),!0},ownKeys:o=>Reflect.ownKeys(o),getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has:(o,a)=>Reflect.has(o,a)})}function ki(e){return e?Un(e,t=>t):{}}function Bi({hostClassNames:e,cssVars:t}){return{hostClasses:Un(e,(n,r)=>({name:C(r),selector:C(`:host(.${r})`)})),cssVars:t}}function Fi({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&W(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function Ui(e,t){function n(i){W(i).forEach(s=>{const o=i[s];e.instanceState[s]=o})}return{dispatch:i=>e.dispatchEvent(i),updateState:n,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Wi=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function St(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const n={...Li,...e.options},r=Di(e.events),i=ki(e.hostClasses);e.hostClasses&&Zt(e.tagName,e.hostClasses),e.cssVars&&Zt(e.tagName,e.cssVars);const s=e.cssVars?Wn(e.cssVars):{},o=typeof e.styles=="function"?e.styles(Bi({hostClassNames:i,cssVars:s})):e.styles||se``,a=e.renderCallback,l=(t=class extends kn{createRenderParams(){return Ui(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){qn(this)}render(){try{Yn(this)&&!this.haveInputsBeenSet&&!n[wt]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${bt.name}" directive on it. If no inputs are intended, use "${St.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=a(c);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Fi({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},u}catch(c){const u=yt(c);throw u.message=`Failed to render '${e.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){Vn(this,c)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=en(this,!1),this.instanceState=en(this,!((u=e.options)!=null&&u.allowPolymorphicState));const c=e.stateInitStatic||{};W(c).forEach(d=>{jn()(this,d),this.instanceState[d]=c[d]}),this.definition=l}},Wi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=o,t.isStrictInstance=()=>!1,t.events=r,t.renderCallback=a,t.hostClasses=i,t.cssVars=s,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[et]:{value:!0,writable:!1},name:{value:vi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Kn(){return e=>St({...e,options:{[wt]:!1,...e.options}})}var Xn;const A=Symbol("not set");class ji{constructor(t){this.lastTrigger=A,this.resolutionValue=A,this.rejectionError=A,this.listeners=new Set,this.waitingForValuePromise=Ze(),this[Xn]=!0,this.resetValue(t)}resetValue(t){this.resetWaitingForValuePromise(),t!==A&&(t instanceof Promise?this.setValue({newPromise:t}):this.setValue({resolvedValue:t}))}fireListeners(){const t=this.getValue();this.listeners.forEach(n=>{n(t)})}setPromise(t){t!==this.lastSetPromise&&(this.resolutionValue=A,this.rejectionError=A,this.lastSetPromise=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),t.then(n=>{this.lastSetPromise===t&&this.resolveValue(n)}).catch(n=>{this.lastSetPromise===t&&(this.rejectionError=yt(n),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(n),this.fireListeners())}))}resolveValue(t){t!==this.resolutionValue&&(this.rejectionError=A,this.resolutionValue=t,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(t),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=Ze()}setValue(t){if("createPromise"in t){if(this.lastTrigger===A||!Fn(t.trigger,this.lastTrigger)){this.lastTrigger=t.trigger;const n=t.createPromise();this.setPromise(n),this.fireListeners()}}else"newPromise"in t?(this.lastTrigger,this.setPromise(t.newPromise),this.fireListeners()):"resolvedValue"in t?this.resolveValue(t.resolvedValue):"forceUpdate"in t?(this.lastTrigger=A,this.resolutionValue=A,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners()):this.resetValue(t)}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==A)return this.rejectionError;if(this.resolutionValue===A)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(t,n){this.listeners.add(n),t&&n(this.getValue())}addMultipleListeners(t){t.forEach(n=>this.listeners.add(n))}getAllListeners(){return this.listeners}removeListener(t){return this.listeners.has(t)?(this.listeners.delete(t),!0):!1}removeAllListeners(){const t=this.listeners.size;return this.listeners.clear(),t}}Xn=nt;function Qn(...e){const t=$i(e,1)?e[0]:A;return{[rt]:!0,init(){return new ji(t)}}}function J(e,t){return Vi(e,t)}const Vi=gt(class extends Pe{constructor(e){super(e),this.element=Jn(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),L}}),tn="onDomCreated",nn=gt(class extends Pe{constructor(e){super(e),tt(e,tn)}update(e,[t]){tt(e,tn);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}});function it(e,t,n,r){return e instanceof Error?r?r(e):Bn(e):Si(e)?t:n?n(e):e}function rn(e,t,n){return ai(e,()=>t,()=>n)}function qi(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),Kn()(n(r))),defineElementNoInputs:r=>(t(r),St(n(r)))}}function Ji(e,t){return e.filter((n,r)=>!t.includes(r))}function Zn(e){return e.filter(t=>bi(t,["tagName",et])&&!!t.tagName&&!!t[et])}const er=new WeakMap;function Yi(e,t){var i;const n=Zn(t);return(i=tr(er,[e,...n]).value)==null?void 0:i.template}function Gi(e,t,n){const r=Zn(t);return rr(er,[e,...r],n)}function tr(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=nr(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?tr(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function nr(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function rr(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=nr(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),rr(l,t,n,r+1)}function ir(e,t,n){return{name:e,check:t,transform:n}}const Ki=new WeakMap;function sr(e,t,n){const r=Yi(e,t),i=r??n();if(!r){const o=Gi(e,t,i);if(o.result)Ki.set(e,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=Ji(t,i.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function or(e,t,n,r){const i=[],s=[],o=[];return e.forEach((l,c)=>{var y;const u=i.length-1,d=i[u],h=c-1,m=t[h];let f;r&&r(l),typeof d=="string"&&(f=(y=n.find(w=>w.check(d,l,m)))==null?void 0:y.transform,f&&(i[u]=d+f(m)+l,o.push(h))),f||i.push(l);const p=e.raw[c];f?s[u]=s[u]+f(m)+p:s.push(p)}),{templateStrings:Object.assign([],i,{raw:s}),valueIndexDeletions:o}}function ar(e){return ee(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const Xi=[ir("tag name css selector interpolation",(e,t,n)=>ar(n),e=>e.tagName)];function Qi(e,t){return or(e,t,Xi)}function Y(e,...t){const n=sr(e,t,()=>Qi(e,t));return se(n.strings,...n.values)}const Zi=[ir("tag name interpolation",(e,t,n)=>{const r=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=ar(n);if(r&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&i},e=>e.tagName)];function es(e){}function ts(e){return or(e.strings,e.values,Zi,es)}function E(e,...t){const n=Qr(e,...t),r=sr(e,t,()=>ts(n));return{...n,strings:r.strings,values:r.values}}function ns(e,t){return e<t}function rs(e,t){return e>t}const sn={width:250,height:250};function is({constraint:e,box:t,constraintType:n="max"}){return(n==="max"?rs:ns)(t.width/t.height,e.width/e.height)?"width":"height"}function Fe({box:e,constraint:t,constraintType:n}){const r=is({box:e,constraint:t,constraintType:n});return t[r]/e[r]}function lr({box:e,ratio:t}){return Rn(e,(n,r)=>r*t)}function st({box:e,min:t,max:n}){return Rn(e,(r,i)=>kr({value:i,min:(t==null?void 0:t[r])??0,max:(n==null?void 0:n[r])??1/0}))}function cr({min:e,max:t,box:n}){const r=ur({min:e,max:t,box:n}),i=lr({box:n,ratio:r});return{height:Math.floor(i.height||(e==null?void 0:e.height)||sn.height),width:Math.floor(i.width||(e==null?void 0:e.width)||sn.width)}}function ur({min:e,max:t,box:n}){if(!e&&!t)return 1;const r=e?Fe({box:n,constraint:e,constraintType:"min"}):1,i=t?Fe({box:n,constraint:t,constraintType:"max"}):1,s=r>1?r:i<1?i:1,o=lr({ratio:s,box:n});return(e?Fe({box:o,constraint:e,constraintType:"min"}):1)>1?r:s}function F(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if((!t||!(t!=null&&t.length))&&(!n||!n.length))return"";const r=[...n||[],""],s=(t??[""]).map((o,a)=>{const l=ss(o,r[a]);return`${o}${l}`});return ft(s.join(""))}function ss(e,t){return t._$litType$!=null||t._$litDirective$!=null?F(t):Array.isArray(t)?t.map(r=>F(r)).join(""):e.endsWith("=")?`"${t}"`:t}function os(e){const t=as(e);return le(t,"object")||le(t,"array")}function as(e){const t=Nt({jsonString:e,errorHandler:()=>{}});if(t)return t;const n=ls(e);return Nt({jsonString:n,errorHandler:()=>{}})}function ls(e){return ft(e).replace(/,\s*([}\]])/,"$1")}const $t="vir-resizable-image";function cs(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Z=cs();function us(){try{if(!Z||!Z.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Et(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const g=Promise;function b(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function q(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function N(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function _t(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const ot="local-forage-detect-blob-support";let pe;const z={},ds=Object.prototype.toString,me="readonly",Le="readwrite";function hs(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function fs(e){return new g(function(t){var n=e.transaction(ot,Le),r=Et([""]);n.objectStore(ot).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);t(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function ms(e){return typeof pe=="boolean"?g.resolve(pe):fs(e).then(function(t){return pe=t,pe})}function Ae(e){var t=z[e.name],n={};n.promise=new g(function(r,i){n.resolve=r,n.reject=i}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function at(e){var t=z[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function lt(e,t){var n=z[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function dr(e,t){return new g(function(n,r){if(z[e.name]=z[e.name]||gr(),e.db)if(t)Ae(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var s=Z.open.apply(Z,i);t&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(e.storeName),o.oldVersion<=1&&a.createObjectStore(ot)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),at(e)}})}function xt(e){return dr(e,!1)}function At(e){return dr(e,!0)}function hr(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var s=e.db.version+1;s>e.version&&(e.version=s)}return!0}return!1}function gs(e){return new g(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:s,type:e.type})},r.readAsBinaryString(e)})}function fr(e){var t=hs(atob(e.data));return Et([t],{type:e.type})}function mr(e){return e&&e.__local_forage_encoded_blob}function ps(e){var t=this,n=t._initReady().then(function(){var r=z[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return q(n,e,e),n}function vs(e){Ae(e);for(var t=z[e.name],n=t.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,xt(e).then(i=>(e.db=i,hr(e)?At(e):i)).then(i=>{e.db=t.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw lt(e,i),i})}function I(e,t,n,r){r===void 0&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(s){if(r>0&&(!e.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return g.resolve().then(()=>{if(!e.db||s.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),At(e)}).then(()=>vs(e).then(function(){I(e,t,n,r-1)})).catch(n);n(s)}}function gr(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function ys(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=z[n.name];i||(i=gr(),z[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=ps);var s=[];function o(){return g.resolve()}for(var a=0;a<i.forages.length;a++){var l=i.forages[a];l!==t&&s.push(l._initReady().catch(o))}var c=i.forages.slice(0);return g.all(s).then(function(){return n.db=i.db,xt(n)}).then(function(u){return n.db=u,hr(n,t._defaultConfig.version)?At(n):u}).then(function(u){n.db=i.db=u,t._dbInfo=n;for(var d=0;d<c.length;d++){var h=c[d];h!==t&&(h._dbInfo.db=n.db,h._dbInfo.version=n.version)}})}function ws(e,t){var n=this;e=N(e);var r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,me,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),mr(u)&&(u=fr(u)),i(u)},c.onerror=function(){s(c.error)}}catch(u){s(u)}})}).catch(s)});return b(r,t),r}function bs(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,me,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var d=c.result;if(d){var h=d.value;mr(h)&&(h=fr(h));var m=e(h,d.key,u++);m!==void 0?i(m):d.continue()}else i()},c.onerror=function(){s(c.error)}}catch(d){s(d)}})}).catch(s)});return b(r,t),r}function Ss(e,t,n){var r=this;e=N(e);var i=new g(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,ds.call(t)==="[object Blob]"?ms(a.db).then(function(l){return l?t:gs(t)}):t}).then(function(l){I(r._dbInfo,Le,function(c,u){if(c)return o(c);try{var d=u.objectStore(r._dbInfo.storeName);l===null&&(l=void 0);var h=d.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),s(l)},u.onabort=u.onerror=function(){var m=h.error?h.error:h.transaction.error;o(m)}}catch(m){o(m)}})}).catch(o)});return b(i,n),i}function $s(e,t){var n=this;e=N(e);var r=new g(function(i,s){n.ready().then(function(){I(n._dbInfo,Le,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.delete(e);a.oncomplete=function(){i()},a.onerror=function(){s(c.error)},a.onabort=function(){var u=c.error?c.error:c.transaction.error;s(u)}}catch(u){s(u)}})}).catch(s)});return b(r,t),r}function Es(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,Le,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var c=l.error?l.error:l.transaction.error;i(c)}}catch(c){i(c)}})}).catch(i)});return b(n,e),n}function _s(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,me,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.count();l.onsuccess=function(){r(l.result)},l.onerror=function(){i(l.error)}}catch(c){i(c)}})}).catch(i)});return b(n,e),n}function xs(e,t){var n=this,r=new g(function(i,s){if(e<0){i(null);return}n.ready().then(function(){I(n._dbInfo,me,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var d=u.result;if(!d){i(null);return}e===0||c?i(d.key):(c=!0,d.advance(e))},u.onerror=function(){s(u.error)}}catch(d){s(d)}})}).catch(s)});return b(r,t),r}function As(e){var t=this,n=new g(function(r,i){t.ready().then(function(){I(t._dbInfo,me,function(s,o){if(s)return i(s);try{var a=o.objectStore(t._dbInfo.storeName),l=a.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){r(c);return}c.push(u.key),u.continue()},l.onerror=function(){i(l.error)}}catch(u){i(u)}})}).catch(i)});return b(n,e),n}function Ts(e,t){t=_t.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=g.reject("Invalid arguments");else{const o=e.name===n.name&&r._dbInfo.db?g.resolve(r._dbInfo.db):xt(e).then(a=>{const l=z[e.name],c=l.forages;l.db=a;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=a;return a});e.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(e.storeName))return;const l=a.version+1;Ae(e);const c=z[e.name],u=c.forages;a.close();for(let h=0;h<u.length;h++){const m=u[h];m._dbInfo.db=null,m._dbInfo.version=l}return new g((h,m)=>{const f=Z.open(e.name,l);f.onerror=p=>{f.result.close(),m(p)},f.onupgradeneeded=()=>{var p=f.result;p.deleteObjectStore(e.storeName)},f.onsuccess=()=>{const p=f.result;p.close(),h(p)}}).then(h=>{c.db=h;for(let m=0;m<u.length;m++){const f=u[m];f._dbInfo.db=h,at(f._dbInfo)}}).catch(h=>{throw(lt(e,h)||g.resolve()).catch(()=>{}),h})}):i=o.then(a=>{Ae(e);const l=z[e.name],c=l.forages;a.close();for(var u=0;u<c.length;u++){const h=c[u];h._dbInfo.db=null}return new g((h,m)=>{var f=Z.deleteDatabase(e.name);f.onerror=()=>{const p=f.result;p&&p.close(),m(f.error)},f.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},f.onsuccess=()=>{const p=f.result;p&&p.close(),h(p)}}).then(h=>{l.db=h;for(var m=0;m<c.length;m++){const f=c[m];at(f._dbInfo)}}).catch(h=>{throw(lt(e,h)||g.resolve()).catch(()=>{}),h})})}return b(i,t),i}var Cs={_driver:"asyncStorage",_initStorage:ys,_support:us(),iterate:bs,getItem:ws,setItem:Ss,removeItem:$s,clear:Es,length:_s,key:xs,keys:As,dropInstance:Ts};function zs(){return typeof openDatabase=="function"}var O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ps="~~local_forage_type~",on=/^~~local_forage_type~([^~]+)~/,Te="__lfsc__:",ct=Te.length,Tt="arbf",ut="blob",pr="si08",vr="ui08",yr="uic8",wr="si16",br="si32",Sr="ur16",$r="ui32",Er="fl32",_r="fl64",an=ct+Tt.length,ln=Object.prototype.toString;function xr(e){var t=e.length*.75,n=e.length,r,i=0,s,o,a,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(r=0;r<n;r+=4)s=O.indexOf(e[r]),o=O.indexOf(e[r+1]),a=O.indexOf(e[r+2]),l=O.indexOf(e[r+3]),u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c}function dt(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=O[t[r]>>2],n+=O[(t[r]&3)<<4|t[r+1]>>4],n+=O[(t[r+1]&15)<<2|t[r+2]>>6],n+=O[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function Rs(e,t){var n="";if(e&&(n=ln.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&ln.call(e.buffer)==="[object ArrayBuffer]")){var r,i=Te;e instanceof ArrayBuffer?(r=e,i+=Tt):(r=e.buffer,n==="[object Int8Array]"?i+=pr:n==="[object Uint8Array]"?i+=vr:n==="[object Uint8ClampedArray]"?i+=yr:n==="[object Int16Array]"?i+=wr:n==="[object Uint16Array]"?i+=Sr:n==="[object Int32Array]"?i+=br:n==="[object Uint32Array]"?i+=$r:n==="[object Float32Array]"?i+=Er:n==="[object Float64Array]"?i+=_r:t(new Error("Failed to get type for BinaryArray"))),t(i+dt(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=Ps+e.type+"~"+dt(this.result);t(Te+ut+o)},s.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(o){console.error("Couldn't convert value into a JSON string: ",e),t(null,o)}}function Ls(e){if(e.substring(0,ct)!==Te)return JSON.parse(e);var t=e.substring(an),n=e.substring(ct,an),r;if(n===ut&&on.test(t)){var i=t.match(on);r=i[1],t=t.substring(i[0].length)}var s=xr(t);switch(n){case Tt:return s;case ut:return Et([s],{type:r});case pr:return new Int8Array(s);case vr:return new Uint8Array(s);case yr:return new Uint8ClampedArray(s);case wr:return new Int16Array(s);case Sr:return new Uint16Array(s);case br:return new Int32Array(s);case $r:return new Uint32Array(s);case Er:return new Float32Array(s);case _r:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var Ct={serialize:Rs,deserialize:Ls,stringToBuffer:xr,bufferToString:dt};function Ar(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function Ns(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var i=new g(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){Ar(a,n,function(){t._dbInfo=n,s()},function(l,c){o(c)})},o)});return n.serializer=Ct,i}function M(e,t,n,r,i,s){e.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?s(l,a):Ar(l,t,function(){l.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function Is(e,t){var n=this;e=N(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=o.serializer.deserialize(u)),i(u)},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function Ds(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`SELECT * FROM ${o.storeName}`,[],function(l,c){for(var u=c.rows,d=u.length,h=0;h<d;h++){var m=u.item(h),f=m.value;if(f&&(f=o.serializer.deserialize(f)),f=e(f,m.key,h+1),f!==void 0){i(f);return}}i()},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function Tr(e,t,n,r){var i=this;e=N(e);var s=new g(function(o,a){i.ready().then(function(){t===void 0&&(t=null);var l=t,c=i._dbInfo;c.serializer.serialize(t,function(u,d){d?a(d):c.db.transaction(function(h){M(h,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){o(l)},function(m,f){a(f)})},function(h){if(h.code===h.QUOTA_ERR){if(r>0){o(Tr.apply(i,[e,l,n,r-1]));return}a(h)}})})}).catch(a)});return b(s,n),s}function Os(e,t,n){return Tr.apply(this,[e,t,n,1])}function Ms(e,t){var n=this;e=N(e);var r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],function(){i()},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function Hs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){M(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,l){i(l)})})}).catch(i)});return b(n,e),n}function ks(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){M(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,l){var c=l.rows.item(0).c;r(c)},function(a,l){i(l)})})}).catch(i)});return b(n,e),n}function Bs(e,t){var n=this,r=new g(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){M(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;i(u)},function(l,c){s(c)})})}).catch(s)});return b(r,t),r}function Fs(e){var t=this,n=new g(function(r,i){t.ready().then(function(){var s=t._dbInfo;s.db.transaction(function(o){M(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);r(c)},function(a,l){i(l)})})}).catch(i)});return b(n,e),n}function Us(e){return new g(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);t({db:e,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function Ws(e,t){t=_t.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;return e.name?i=new g(function(s){var o;e.name===n.name?o=r._dbInfo.db:o=openDatabase(e.name,"","",0),e.storeName?s({db:o,storeNames:[e.storeName]}):s(Us(o))}).then(function(s){return new g(function(o,a){s.db.transaction(function(l){function c(m){return new g(function(f,p){l.executeSql(`DROP TABLE IF EXISTS ${m}`,[],function(){f()},function(y,w){p(w)})})}for(var u=[],d=0,h=s.storeNames.length;d<h;d++)u.push(c(s.storeNames[d]));g.all(u).then(function(){o()}).catch(function(m){a(m)})},function(l){a(l)})})}):i=g.reject("Invalid arguments"),b(i,t),i}var js={_driver:"webSQLStorage",_initStorage:Ns,_support:zs(),iterate:Ds,getItem:Is,setItem:Os,removeItem:Ms,clear:Hs,length:ks,key:Bs,keys:Fs,dropInstance:Ws};function Vs(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Cr(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function qs(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Js(){return!qs()||localStorage.length>0}function Ys(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=Cr(e,t._defaultConfig),Js()?(t._dbInfo=n,n.serializer=Ct,g.resolve()):g.reject()}function Gs(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return b(n,e),n}function Ks(e,t){var n=this;e=N(e);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+e);return s&&(s=i.serializer.deserialize(s)),s});return b(r,t),r}function Xs(e,t){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,l=1,c=0;c<a;c++){var u=localStorage.key(c);if(u.indexOf(s)===0){var d=localStorage.getItem(u);if(d&&(d=i.serializer.deserialize(d)),d=e(d,u.substring(o),l++),d!==void 0)return d}}});return b(r,t),r}function Qs(e,t){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(e)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return b(r,t),r}function Zs(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return b(n,e),n}function eo(e){var t=this,n=t.keys().then(function(r){return r.length});return b(n,e),n}function to(e,t){var n=this;e=N(e);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return b(r,t),r}function no(e,t,n){var r=this;e=N(e);var i=r.ready().then(function(){t===void 0&&(t=null);var s=t;return new g(function(o,a){var l=r._dbInfo;l.serializer.serialize(t,function(c,u){if(u)a(u);else try{localStorage.setItem(l.keyPrefix+e,c),o(s)}catch(d){(d.name==="QuotaExceededError"||d.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(d),a(d)}})})});return b(i,n),i}function ro(e,t){if(t=_t.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i;return e.name?i=new g(function(s){e.storeName?s(Cr(e,r._defaultConfig)):s(`${e.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=g.reject("Invalid arguments"),b(i,t),i}var io={_driver:"localStorageWrapper",_initStorage:Ys,_support:Vs(),iterate:Xs,getItem:Ks,setItem:no,removeItem:to,clear:Gs,length:eo,key:Qs,keys:Zs,dropInstance:ro};const so=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),oo=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(so(e[r],t))return!0;r++}return!1},zr=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},re={},cn={},G={INDEXEDDB:Cs,WEBSQL:js,LOCALSTORAGE:io},ao=[G.INDEXEDDB._driver,G.WEBSQL._driver,G.LOCALSTORAGE._driver],$e=["dropInstance"],Ue=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat($e),lo={description:"",driver:ao.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function co(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function We(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(zr(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class zt{constructor(t){for(let n in G)if(G.hasOwnProperty(n)){const r=G[n],i=r._driver;this[n]=i,re[i]||this.defineDriver(r)}this._defaultConfig=We({},lo),this._config=We({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const i=new g(function(s,o){try{const a=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){o(l);return}const c=Ue.concat("_initStorage");for(let h=0,m=c.length;h<m;h++){const f=c[h];if((!oo($e,f)||t[f])&&typeof t[f]!="function"){o(l);return}}(function(){const h=function(m){return function(){const f=new Error(`Method ${m} is not implemented by the current driver`),p=g.reject(f);return b(p,arguments[arguments.length-1]),p}};for(let m=0,f=$e.length;m<f;m++){const p=$e[m];t[p]||(t[p]=h(p))}})();const d=function(h){re[a]&&console.info(`Redefining LocalForage driver: ${a}`),re[a]=t,cn[a]=h,s()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(d,o):d(!!t._support):d(!0)}catch(a){o(a)}});return q(i,n,r),i}driver(){return this._driver||null}getDriver(t,n,r){const i=re[t]?g.resolve(re[t]):g.reject(new Error("Driver not found."));return q(i,n,r),i}getSerializer(t){const n=g.resolve(Ct);return q(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return q(r,t,t),r}setDriver(t,n,r){const i=this;zr(t)||(t=[t]);const s=this._getSupportedDrivers(t);function o(){i._config.driver=i.driver()}function a(u){return i._extend(u),o(),i._ready=i._initStorage(i._config),i._ready}function l(u){return function(){let d=0;function h(){for(;d<u.length;){let f=u[d];return d++,i._dbInfo=null,i._ready=null,i.getDriver(f).then(a).catch(h)}o();const m=new Error("No available storage method found.");return i._driverSet=g.reject(m),i._driverSet}return h()}}const c=this._driverSet!==null?this._driverSet.catch(()=>g.resolve()):g.resolve();return this._driverSet=c.then(()=>{const u=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(u).then(d=>{i._driver=d._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=l(s)})}).catch(()=>{o();const u=new Error("No available storage method found.");return i._driverSet=g.reject(u),i._driverSet}),q(this._driverSet,n,r),this._driverSet}supports(t){return!!cn[t]}_extend(t){We(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,i=t.length;r<i;r++){const s=t[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=Ue.length;t<n;t++)co(this,Ue[t])}createInstance(t){return new zt(t)}}const Pr=new zt,uo=Pr;async function Rr(){return await caches.open($t)}async function ho(e){return await(await Rr()).match(e)}const un=uo.createInstance({name:$t});async function fo(e,t){await(await Rr()).put(e,t)}const je=new Map;async function mo(e,t){var r;if(!je.has(e)){const i=ze();je.set(e,i.promise);try{const s=new Request(e),o=t?await ho(s):void 0,a=o??await fetch(s),l=t?await un.getItem(e)??void 0:void 0,c=l??{contentType:((r=a.headers.get("Content-Type"))==null?void 0:r.toLowerCase())||"",ok:a.ok,text:await a.clone().text()??""};if(!l&&t)try{un.setItem(e,c)}catch{}const u={blobUrl:URL.createObjectURL(await a.clone().blob()),...c};if(!o&&t)try{fo(s,a)}catch{}i.resolve(u)}catch(s){throw i.reject(s),s}}const n=await je.get(e);if(!n)throw new Error("Stored a cached response but couldn't find it afterwards.");return n}var v=(e=>(e.Html="html",e.Text="text",e.Json="json",e.Svg="svg",e.Image="image",e.Video="video",e.Audio="audio",e.Pdf="pdf",e))(v||{});const go=["text","json"],po=["audio"];function dn(e){return go.includes(e)}function vo(e){return po.includes(e)}async function yo(e,t){return e.includes("video")?"video":e.includes("svg")||t.includes("<svg")?"svg":e.includes("html")||t.includes("<html")?"html":os(t)?"json":e.includes("json")||e.includes("yaml")||e.includes("yml")||e.includes("pgp-signature")||e.includes("text")||e.includes("txt")?"text":e.includes("audio")?"audio":e.includes("pdf")?"pdf":"image"}function wo({imageType:e,imageText:t,imageUrl:n,blockAutoPlay:r}){return e==="image"?F(E`
            <img src=${n} />
        `):e==="video"?F(E`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):e==="text"||e==="json"?F(E`
                <div class="text-wrapper">
                    <p class="text">
                        ${t.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):e==="audio"?F(E`
                <audio controls src=${n}></audio>
            `):t}function bo(e,t){if(t==="json")try{return JSON.stringify(JSON.parse(e),null,4)}catch{}else if(t==="html")return e.replaceAll(/console\.\w+/g,"doNothing");return e}async function hn({imageUrl:e,blockAutoPlay:t,textTransformer:n=i=>i,allowPersistentCache:r}){const i=await mo(e,r);if(!i.ok)throw new Error(`Failed to load '${e}'`);const s=await yo(i.contentType,i.text),o=n(bo(i.text,s));return{templateString:wo({imageText:o,imageType:s,imageUrl:i.blobUrl,blockAutoPlay:t}),imageUrl:i.blobUrl,imageType:s}}class ht extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let So=!1;function $o(){return So}var j;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(j||(j={}));const k=Symbol("any-origin");function Lr(e,t){try{return Eo(e,t),!0}catch{return!1}}function Eo(e,t){if(e===k)return;if(!e.filter(r=>t.origin===r).length)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '[${e.join(", ")}]'`)}const _o=Symbol("dangerDisableSecurityWarningsSymbol"),xo=["january","february","march","april","may","june","july","august","september","october","november","december"];xo.map(e=>e.slice(0,3));function Ao(e){return e?e instanceof Error?e.message:zo(e,"message")?String(e.message):String(e):""}function To(e){return e instanceof Error?e:new Error(Ao(e))}const Co=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function zo(e,t){return e?Co.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function Po(e){const t=Nr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Nr(){let e,t,n=!1;const r=new Promise((i,s)=>{e=o=>(n=!0,i(o)),t=o=>{n=!0,s(o)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Nr.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function Ro(e,t,n){return n.type===e&&n.direction===t}function Lo(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function No({message:e,verifyChildData:t,iframeElement:n},r,i,s){if(!n)throw new Error("No iframe element was provided.");let o=0,a=!1,l,c,u,d=!1;const h={...e,direction:j.FromParent,messageId:Yr(32)},m=e.type,f=r===k?["*"]:r;function p(w){try{if(!Lr(r,w))return;const _=w.data;if(_.type==="error")throw new Error(`Child threw an error: ${_.data}`);if($o(),_&&d&&Ro(m,j.FromChild,_)&&_.messageId===h.messageId){let x=!1;try{x=t?t(_.data):!0}catch{}if(!x)return;a=!0,c=w,l=_}}catch(_){u=To(_)}}globalThis.addEventListener("message",p);const y=Date.now();for(;!a&&Date.now()-y<i&&!u;){if(!n.isConnected)throw new ht;const w=n.contentWindow;w&&(d=!0,f.forEach(_=>{try{w.postMessage(h,{targetOrigin:_})}catch{}})),await Po(s||Lo(o)),o++}if(globalThis.removeEventListener("message",p),u)throw u;if(!a)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.ceil(i/1e3)}' seconds).`);if(!c)throw new Error("Never got message event from child but received a valid response");return{data:l==null?void 0:l.data,event:c}}function Ir({allowedOrigins:e,timeoutMs:t=1e4,...n}){if(e!==k&&e.includes("*")&&(e=k),e===k&&!n[_o]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),e!==k&&!e.length)throw new Error(`No allowed origins were provide to ${Ir.name}. At least one must be provided.`);const r=e===k?["*"]:e;return{async sendMessageToChild(i){if(i.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await No(i,e,i.timeoutMs||t,i.intervalMs)},listenForParentMessages(i){globalThis.addEventListener("message",async s=>{if(!Lr(e,s))return;const o=s.data,a=await i({...o,originalEvent:s}),l={type:o.type,direction:j.FromChild,data:a,messageId:o.messageId};r.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}var T=(e=>(e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading",e))(T||{}),$=(e=>(e.FrameReady="frame-ready",e.SendSize="send-size",e.SendScale="set-scale",e.SendScalingMethod="set-scaling-method",e.ForceSize="force-size",e.SizeDetermined="size-determined",e.ImageElementLoaded="image-element-loaded",e))($||{});const R=Ir({allowedOrigins:[window.location.origin]});async function Io(e,t){const n=ze();e.onload=()=>{n.resolve()};try{await R.sendMessageToChild({message:{type:$.FrameReady},iframeElement:e,timeoutMs:t})}catch{await n.promise,await R.sendMessageToChild({message:{type:$.FrameReady},iframeElement:e,timeoutMs:t})}}async function Do({min:e,max:t,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,forcedOriginalImageSize:o,timeoutMs:a}){var c;await Io(r,a),s&&await R.sendMessageToChild({message:{type:$.ForceSize,data:s},iframeElement:r,timeoutMs:a});const l=o??(await R.sendMessageToChild({message:{type:$.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(u){return!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height}})).data;return await Dr({min:e,max:t,imageDimensions:l,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,sendSizeMessage:!0,timeoutMs:a}),await R.sendMessageToChild({message:{type:$.ImageElementLoaded},iframeElement:r,timeoutMs:a}),((c=r.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function Dr({min:e,max:t,imageDimensions:n,host:r,iframeElement:i,imageData:s,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:l}){const c=r.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:e,max:t,box:o??n},d=dn(s.imageType)||vo(s.imageType)?st(u):cr(u);c.style.width=P(Math.floor(d.width)),c.style.height=P(Math.floor(d.height));const h=st({min:e,max:t,box:d});d.height<h.height?r.classList.add(T.VerticallyCenter):r.classList.remove(T.VerticallyCenter),r.style.width=P(h.width),r.style.height=P(h.height);const m=ur({min:e,max:t,box:o??n});if(a){if(m>3?await R.sendMessageToChild({message:{type:$.SendScalingMethod,data:"pixelated"},iframeElement:i,timeoutMs:l}):await R.sendMessageToChild({message:{type:$.SendScalingMethod,data:"default"},iframeElement:i,timeoutMs:l}),await R.sendMessageToChild({message:{type:$.SizeDetermined,data:d},iframeElement:i,timeoutMs:l}),s.imageType===v.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},p={width:m*f.width,height:m*f.height};await R.sendMessageToChild({message:{type:$.SendScale,data:p},iframeElement:i,timeoutMs:l})}else if(dn(s.imageType)){const f=o??n;if(f.height<d.height){const p=d.width/f.width,y=d.height/f.height,w=Math.min(p,y);await R.sendMessageToChild({message:{type:$.SendScale,data:{height:w,width:w}},iframeElement:i,timeoutMs:l})}}}}const ve={x:16,y:8};var fn=Object.freeze,Oo=Object.defineProperty,mn=(e,t)=>fn(Oo(e,"raw",{value:fn(t||e.slice())})),gn,pn;function Mo(e,t,n,r){const i=Math.random(),s=E(gn||(gn=mn([`
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
    `])),e.imageType,n??"",v.Svg,v.Html,v.Image,v.Video,v.Text,v.Json,v.Audio,v.Svg,v.Html,v.Image,v.Video,v.Text,v.Json,v.Audio,j.FromChild,j.FromChild,$.ImageElementLoaded,$.FrameReady,$.SendScale,$.SendScalingMethod,$.SendSize,$.ForceSize,$.SizeDetermined,v.Json,v.Text,ve.y,r,v.Audio),o=E(pn||(pn=mn([`
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
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                <\/script>
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),e.imageType,r?"allow-scrolling":"",v.Image,v.Svg,v.Video,v.Text,v.Json,v.Text,v.Json,v.Text,v.Json,v.Text,v.Json,ve.y,ve.x,v.Text,v.Json,ve.y,i,t??"",s);return ft(F(o)).replace(String(i),`
${e.templateString}
`)}const Ho=1e4,ko={textTransformer:"textTransformer",extraHtml:"extraHtml"},Bo=Fr(ko),Fo={imageData:Qn(),error:void 0},Uo=[v.Html,v.Video,v.Audio,v.Pdf],Wo=[v.Html,v.Text,v.Json];function vn({blockInteractionInput:e,imageType:t,allowScrolling:n}){return typeof e=="boolean"?!e:Uo.includes(t)?!0:!!(n&&Wo.includes(t))}const ae=Kn()({tagName:$t,stateInitStatic:Fo,events:{settled:Se(),imageDataCalculated:Se(),errored:Se()},styles:Y`
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
    `,cleanupCallback({host:e}){const t=e.shadowRoot.querySelector("iframe"),n=e[Ve];t&&n&&(t.srcdoc=n)},renderCallback({state:e,inputs:t,updateState:n,host:r,dispatch:i,events:s}){const o=t.timeoutMs??Ho,a=e.imageData instanceof Error?e.imageData:e.error;n({imageData:{createPromise:async()=>{if(e.error&&n({error:void 0}),r.classList.remove(T.HideLoading),i(new s.settled(!1)),r.classList.remove(T.VerticallyCenter),!t.imageUrl)return new Promise(()=>{});const y={imageUrl:t.imageUrl,blockAutoPlay:!!t.blockAutoPlay,textTransformer:t.textTransformer,allowPersistentCache:!t.blockPersistentCache};let w;try{w=await qr(o,hn(y))}catch{await Ln(1e3);try{w=await hn(y)}catch(x){throw x}}if(w)return w;throw new Error("no image data result")},trigger:{...jr(t,Bo)}}});const l=t.min&&t.max?st({box:t.min,max:t.max}):t.min,c=t.max,u=t.forcedOriginalImageSize?cr({min:l,max:c,box:t.forcedOriginalImageSize}):void 0,d=it(e.imageData,"",y=>{if(i(new s.imageDataCalculated(y)),y.imageType===v.Pdf)return E`
                        <iframe
                            src=${y.imageUrl}
                            ${nn(async w=>{try{await Dr({forcedFinalImageSize:t.forcedFinalImageSize,host:r,iframeElement:w,imageData:y,imageDimensions:c??{width:500,height:500},max:c,min:l,sendSizeMessage:!1,timeoutMs:o}),r[Ve]="",i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch(_){const x=we(_);if(x instanceof ht)return;console.error(x),n({error:x}),i(new s.errored(x))}})}
                        ></iframe>
                    `;{const w=vn({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})&&!!t.allowScrolling;return E`
                        <iframe
                            loading=${t.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            srcdoc=${Mo(y,t.extraHtml,t.htmlSizeQuerySelector,w)}
                            ${nn(async _=>{try{const x=await Do({min:l,max:c,host:r,iframeElement:_,imageData:y,forcedFinalImageSize:t.forcedFinalImageSize,forcedOriginalImageSize:u,timeoutMs:o});r[Ve]=x,i(new s.settled(!0)),r.classList.add(T.HideLoading)}catch(x){const te=we(x);if(te instanceof ht)return;console.error(te),n({error:te}),i(new s.errored(te))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `}},y=>{n({error:y}),i(new s.errored(we(y)))}),h=it(e.imageData,yn,y=>vn({allowScrolling:t.allowScrolling,blockInteractionInput:t.blockInteraction,imageType:y.imageType})?"":yn,()=>""),m=a?Y`
                  max-width: 100%;
                  max-height: 100%;
              `:u?Y`
                  width: ${u.width}px;
                  height: ${u.height}px;
              `:"",f=Y`
            width: ${(l==null?void 0:l.width)??250}px;
            height: ${(l==null?void 0:l.height)??250}px;
        `,p=E`
            <div class="frame-constraint" style=${m}>${d}</div>
        `;return E`
            ${rn(!a,E`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${f}>
                ${rn(!!a,E`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${a==null?void 0:a.message}</slot>
                        </div>
                    `,p)}
            </div>
            ${h}
        `}}),yn=E`
    <div class="click-cover"></div>
`,Ve="latest-frame-srcdoc";class ge extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class wn extends ge{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const he="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const jo=globalThis.history.pushState;function bn(...e){const t=jo.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(he)),t}const Vo=globalThis.history.replaceState;function Sn(...e){const t=Vo.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(he)),t}function qo(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===bn)throw new wn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Sn)throw new wn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=bn,globalThis.history.replaceState=Sn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(he))})}}function Jo(e){return Array.from(e.entries()).reduce((t,n)=>(t[n[0]]=n[1],t),{})}function Yo(e){const t=Object.entries(e).reduce((n,r)=>{const i=`${r[0]}=${r[1]}`;return`${n}&${i}`},"");return new URLSearchParams(t)}function Go(e){const n=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(o=>!!o),i=globalThis.location.search?Jo(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:i,hash:s}}class Ko extends ge{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Or(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const n=Object.entries(e.search).join(" "),r=Object.entries(t.search).join(" ");if(n!==r)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const $n=6;function En(e,t){const n=e.getCurrentRawRoutes();if(e.sanitizationDepth>$n)throw new Ko(`Route sanitization depth has exceed the max of ${$n} with ${JSON.stringify(n)}`);const r=e.sanitizeFullRoute(n);if(Or(r,n))e.sanitizationDepth=0,t?t(r):e.listeners.forEach(i=>{i(r)});else return e.sanitizationDepth++,e.setRoutes(r,!0)}class qe extends ge{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Xo(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new qe(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new qe(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new qe(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Qo(e,t,n,r=!1){const i=Mr(e,t,n);r?globalThis.history.replaceState(void 0,"",i):globalThis.history.pushState(void 0,"",i)}function Mr(e,t,n=""){var l;if(!n&&t!=null)throw new ge("Route base regexp was defined but routeBase string was not provided.");const r=Zo(t)?`/${n}`:"",i=e.search?Yo(e.search).toString():"",s=i?`?${i}`:"",o=(l=e.hash)!=null&&l.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`${r}/${e.paths.join("/")}${s}${a}`}function Zo(e){return!!(e&&globalThis.location.pathname.match(e))}function ea(e={}){var o;Xo(e),qo();const t=(o=e.routeBase)==null?void 0:o.replace(/\/+$/,""),n=t?new RegExp(`^\\/${e.routeBase}`):void 0;let r=!1;const i=()=>En(s),s={listeners:new Set,initParams:e,sanitizeFullRoute:a=>{const l={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(l):l},setRoutes:(a,l=!1,c=!1)=>{const u=s.getCurrentRawRoutes(),d={...u,...a},h=s.sanitizeFullRoute(d);if(!(!c&&Or(u,h)))return Qo(h,n,t,l)},createRoutesUrl:a=>Mr(a,n,t),getCurrentRawRoutes:()=>Go(n),removeAllRouteListeners(){s.listeners.forEach(a=>s.removeRouteListener(a))},addRouteListener:(a,l)=>{if(e.maxListenerCount&&s.listeners.size>=e.maxListenerCount)throw new ge(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return s.listeners.add(l),r||(globalThis.addEventListener(he,i),r=!0),a&&En(s,l),l},hasRouteListener:a=>s.listeners.has(a),removeRouteListener:a=>{const l=s.listeners.delete(a);return s.listeners.size||(globalThis.removeEventListener(he,i),r=!1),l},sanitizationDepth:0};return s}const Hr=ea({routeBase:"resizable-image-element"}),ta=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Je=Pr.createInstance({name:"resizable-image-element-example-storage"}),_n="stored-urls",xn={async set(e){const t=Ce(e).map(n=>n);await Je.clear(),await Je.setItem(_n,t)},async get(){const e=await Je.getItem(_n),t=le(e,"array")?e:[],n=Ce(t);return na(n.length?n:ta)}};function na(e){var t,n;try{const r=Ce(((n=(t=Hr.getCurrentRawRoutes().search)==null?void 0:t.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:e}catch{return e}}function Ce(e){return e.map(t=>typeof t!="string"?"":t.replace(/^"/,"").replace(/"$/,"").trim()).filter(Tn)}const{defineElement:ra,defineElementNoInputs:ia}=qi(),ye=ra()({tagName:"vir-url-input",events:{urlsChange:Se()},styles:Y`
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
`;return i&&(i==null?void 0:i.value)!==s&&(i.value=s),E`
            <textarea
                ${J("input",a=>{const c=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));t(new n.urlsChange(c))})}
                ${J("blur",()=>{i&&(i.value=o)})}
                .value=${i&&i.matches(":focus")?s:o}
            ></textarea>
        `}}),ie={max:{width:300,height:600},min:{width:300,height:150}};ia({tagName:"vir-example-app",stateInitStatic:{showConstraints:!0,imageUrls:Qn(xn.get()),constraints:void 0,router:Hr,urlUpdateDebounce:{promise:void 0,lastSearch:void 0},allowScrolling:!1},hostClasses:{"vir-example-app-show-constraints":({state:e})=>e.showConstraints},styles:({hostClasses:e})=>Y`
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

        ${e["vir-example-app-show-constraints"].selector} ${ae} {
            border-color: blue;
        }

        ${ae} {
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
    `,renderCallback:({state:e,updateState:t})=>{if(!e.constraints){const o=e.router.getCurrentRawRoutes().search;t({constraints:{min:{width:Number(o==null?void 0:o.minW)||ie.min.width,height:Number(o==null?void 0:o.minH)||ie.min.height},max:{width:Number(o==null?void 0:o.maxW)||ie.max.width,height:Number(o==null?void 0:o.maxH)||ie.max.height}}})}const n=e.constraints??ie,r=Array.isArray(e.imageUrls)?e.imageUrls:[];function i(){return{...e.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function s(o,a,l){t({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!e.urlUpdateDebounce.promise&&(!e.urlUpdateDebounce.lastSearch||!Cn(i(),e.urlUpdateDebounce.lastSearch))&&t({urlUpdateDebounce:{promise:Ln(1e3).then(()=>{const o=i();try{e.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}t({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:i()}}),E`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${ye}
                ${bt(ye,{urls:r})}
                ${J(ye.events.urlsChange,o=>{const a=o.detail;xn.set(a),t({imageUrls:{resolvedValue:o.detail}})})}
            ></${ye}>
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
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const c=[Pt(o),Pt(l)].join(" "),u=n[o][l];return E`
                            <label>
                                ${c}
                                <br />
                                ${P(u)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${u}
                                    ${J("input",d=>{s(Ne(d,HTMLInputElement),o,l)})}
                                />
                            </label>
                        `});return E`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">
                ${sa(n,e.imageUrls,e.allowScrolling)}
            </div>
        `}});function sa(e,t,n){return it(t,"Loading...",r=>Ce(r).map(i=>{const s=`
                height: ${P(e.max.height)};
                max-height: ${P(e.max.height)};
                width: ${P(e.max.width)};
                max-width: ${P(e.max.width)}`,o=`height: ${P(e.min.height)}; width: ${P(e.min.width)}`;return E`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${i}>
                        <${ae}
                            ${bt(ae,{imageUrl:i,max:e.max,min:e.min,allowScrolling:n})}
                        ></${ae}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${o}></div>
                    </div>
                </div>
            `}))}
