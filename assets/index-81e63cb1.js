(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ms(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Si={capitalizeFirstLetter:!1};function kn(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Ei(t,e){return e.capitalizeFirstLetter?kn(t):t}function $i(t,e=Si){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Ei(r,e)}function $r(t){return t!==t.toUpperCase()}function Ai(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=$r(o)||$r(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Ci({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const ki=["january","february","march","april","may","june","july","august","september","october","november","december"];ki.map(t=>t.slice(0,3));function Pi(t){return!!t}const Ti=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ps(t,e){return t?Ti.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Oi(t,e){return t&&e.every(n=>ps(t,n))}function an(t){const e=We();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function Ri(t){return!!(ps(t,"then")&&typeof t.then=="function")}function We(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${We.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function ln(t){return t?t instanceof Error?t.message:String(t):""}function gs(t){return t instanceof Error?t:new Error(ln(t))}function Pe(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ar(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Cr(t){return!!t&&typeof t=="object"}function ys(t,e){try{if(t===e)return!0;if(Cr(t)&&Cr(e)){const n=Ar(t),r=Ar(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${ln(n)}`),n}}function vs(t,e){return Pe(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function fe(t,e){let n=!1;const r=Pe(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Pe(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function Q(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=window,or=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ar=Symbol(),kr=new WeakMap;let ws=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ar)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(or&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=kr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&kr.set(n,e))}return e}toString(){return this.cssText}};const pt=t=>new ws(typeof t=="string"?t:t+"",void 0,ar),bs=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new ws(n,t,ar)},Ni=(t,e)=>{or?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=It.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},Pr=or?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return pt(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const Wt=window,Tr=Wt.trustedTypes,Di=Tr?Tr.emptyScript:"",Or=Wt.reactiveElementPolyfillSupport,Pn={toAttribute(t,e){switch(e){case Boolean:t=t?Di:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},_s=(t,e)=>e!==t&&(e==e||t==t),pn={attribute:!0,type:String,converter:Pn,reflect:!1,hasChanged:_s};let ze=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=pn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(Pr(s))}else e!==void 0&&n.push(Pr(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ni(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=pn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Pn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Pn;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||_s)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ze.finalized=!0,ze.elementProperties=new Map,ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},Or==null||Or({ReactiveElement:ze}),((mn=Wt.reactiveElementVersions)!==null&&mn!==void 0?mn:Wt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn;const Gt=window,Ge=Gt.trustedTypes,Rr=Ge?Ge.createPolicy("lit-html",{createHTML:t=>t}):void 0,de=`lit$${(Math.random()+"").slice(9)}$`,xs="?"+de,Mi=`<${xs}>`,Ye=document,gt=(t="")=>Ye.createComment(t),yt=t=>t===null||typeof t!="object"&&typeof t!="function",Ss=Array.isArray,ji=t=>Ss(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nr=/-->/g,Dr=/>/g,we=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mr=/'/g,jr=/"/g,Es=/^(?:script|style|textarea|title)$/i,zi=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Bi=zi(1),me=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),zr=new WeakMap,Ue=Ye.createTreeWalker(Ye,129,null,!1),Ii=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=tt;for(let l=0;l<n;l++){const u=t[l];let h,c,d=-1,f=0;for(;f<u.length&&(o.lastIndex=f,c=o.exec(u),c!==null);)f=o.lastIndex,o===tt?c[1]==="!--"?o=Nr:c[1]!==void 0?o=Dr:c[2]!==void 0?(Es.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=we):c[3]!==void 0&&(o=we):o===we?c[0]===">"?(o=s??tt,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?we:c[3]==='"'?jr:Mr):o===jr||o===Mr?o=we:o===Nr||o===Dr?o=tt:(o=we,s=void 0);const v=o===we&&t[l+1].startsWith("/>")?" ":"";i+=o===tt?u+Mi:d>=0?(r.push(h),u.slice(0,d)+"$lit$"+u.slice(d)+de+v):u+de+(d===-2?(r.push(void 0),l):v)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Rr!==void 0?Rr.createHTML(a):a,r]};let Yt=class{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[u,h]=Ii(e,n);if(this.el=Yt.createElement(u,r),Ue.currentNode=this.el.content,n===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(s=Ue.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(de)){const f=h[o++];if(c.push(d),f!==void 0){const v=s.getAttribute(f.toLowerCase()+"$lit$").split(de),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:v,ctor:m[1]==="."?Li:m[1]==="?"?Hi:m[1]==="@"?Fi:un})}else l.push({type:6,index:i})}for(const d of c)s.removeAttribute(d)}if(Es.test(s.tagName)){const c=s.textContent.split(de),d=c.length-1;if(d>0){s.textContent=Ge?Ge.emptyScript:"";for(let f=0;f<d;f++)s.append(c[f],gt()),Ue.nextNode(),l.push({type:2,index:++i});s.append(c[d],gt())}}}else if(s.nodeType===8)if(s.data===xs)l.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(de,c+1))!==-1;)l.push({type:7,index:i}),c+=de.length-1}i++}}static createElement(e,n){const r=Ye.createElement("template");return r.innerHTML=e,r}};function Je(t,e,n=t,r){var s,i,o,a;if(e===me)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const u=yt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),u===void 0?l=void 0:(l=new u(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=Je(t,l._$AS(t,e.values),l,r)),e}let Ki=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Ye).importNode(r,!0);Ue.currentNode=i;let o=Ue.nextNode(),a=0,l=0,u=s[0];for(;u!==void 0;){if(a===u.index){let h;u.type===2?h=new cn(o,o.nextSibling,this,e):u.type===1?h=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(h=new qi(o,this,e)),this.u.push(h),u=s[++l]}a!==(u==null?void 0:u.index)&&(o=Ue.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},cn=class{constructor(e,n,r,s){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Je(this,e,n),yt(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==me&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ji(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Yt.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new Ki(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=zr.get(e.strings);return n===void 0&&zr.set(e.strings,n=new Yt(e)),n}k(e){Ss(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new cn(this.O(gt()),this.O(gt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},un=class{constructor(e,n,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Je(this,e,n,0),o=!yt(e)||e!==this._$AH&&e!==me,o&&(this._$AH=e);else{const a=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=Je(this,a[r+l],n,l),u===me&&(u=this._$AH[l]),o||(o=!yt(u)||u!==this._$AH[l]),u===B?e=B:e!==B&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Li=class extends un{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Ui=Ge?Ge.emptyScript:"";let Hi=class extends un{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Ui):this.element.removeAttribute(this.name)}},Fi=class extends un{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=Je(this,e,n,0))!==null&&r!==void 0?r:B)===me)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},qi=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}};const Br=Gt.litHtmlPolyfillSupport;Br==null||Br(Yt,cn),((gn=Gt.litHtmlVersions)!==null&&gn!==void 0?gn:Gt.litHtmlVersions=[]).push("2.6.1");const Vi=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new cn(e.insertBefore(gt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn,vn;let ot=class extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vi(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return me}};ot.finalized=!0,ot._$litElement$=!0,(yn=globalThis.litElementHydrateSupport)===null||yn===void 0||yn.call(globalThis,{LitElement:ot});const Ir=globalThis.litElementPolyfillSupport;Ir==null||Ir({LitElement:ot});((vn=globalThis.litElementVersions)!==null&&vn!==void 0?vn:globalThis.litElementVersions=[]).push("3.2.2");var Wi=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function Gi(){return t=>{}}let vt=class extends ot{};vt=Wi([Gi()],vt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Kr(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):Yi(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wn;((wn=window.HTMLSlotElement)===null||wn===void 0?void 0:wn.prototype.assignedElements)!=null;const Tn=Symbol("this-is-an-element-vir-declarative-element"),lr=Symbol("key for ignoring inputs not having been set yet"),Ji={[lr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cr=t=>(...e)=>({_$litDirective$:t,values:e});let ur=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function Qi(t,e){return $s(t,e,vt)}function $s(t,e,n){On(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function On(t,e){if(t.type!==Xi.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function hr(t,e){return Zi(t,e)}const Zi=cr(class extends ur{constructor(t){super(t),this.element=Qi(t,"assign")}render(t,e){return eo(t,this.element,e),me}});function eo(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function As(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof vt?!0:As(n)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Y=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},te,_e,xe,Se,Ke,Be,V,at,Rn,Nn;function to(t){if(!t)return{};const e=vs(t,(r,s)=>s instanceof Cs);return fe(e,(r,s)=>new no(s.initialValue))}const Tt=Symbol("not set");class no{constructor(e){te.add(this),_e.set(this,Tt),xe.set(this,void 0),Se.set(this,void 0),Ke.set(this,[]),Be.set(this,void 0),V.set(this,We()),e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(P(this,_e,"f")===Tt||!ys(e.trigger,P(this,_e,"f"))){Y(this,_e,e.trigger,"f");const n=e.createPromise();P(this,te,"m",Rn).call(this,n)}}else"newPromise"in e?(P(this,_e,"f"),P(this,te,"m",Rn).call(this,e.newPromise),P(this,te,"m",at).call(this)):"resolvedValue"in e?P(this,te,"m",Nn).call(this,e.resolvedValue):e.forceUpdate&&(Y(this,_e,Tt,"f"),Y(this,xe,void 0,"f"),P(this,V,"f").isSettled()||P(this,V,"f").reject("Canceled by force update"),Y(this,V,We(),"f"),P(this,te,"m",at).call(this))}getValue(){return P(this,V,"f").isSettled()?P(this,Se,"f")?P(this,Se,"f"):P(this,xe,"f"):P(this,V,"f").promise}addSettleListener(e){P(this,Ke,"f").push(e)}removeSettleListener(e){Y(this,Ke,P(this,Ke,"f").filter(n=>n!==e),"f")}}_e=new WeakMap,xe=new WeakMap,Se=new WeakMap,Ke=new WeakMap,Be=new WeakMap,V=new WeakMap,te=new WeakSet,at=function(){P(this,Ke,"f").forEach(e=>{e()})},Rn=function(e){e!==P(this,Be,"f")&&(Y(this,xe,void 0,"f"),Y(this,Se,void 0,"f"),Y(this,Be,e,"f"),P(this,V,"f").isSettled()&&Y(this,V,We(),"f"),e.then(n=>{P(this,Be,"f")===e&&P(this,te,"m",Nn).call(this,n)}).catch(n=>{P(this,Be,"f")===e&&(Y(this,Se,gs(n),"f"),P(this,V,"f").promise.catch(()=>{}),P(this,V,"f").reject(n),P(this,te,"m",at).call(this))}))},Nn=function(e){e!==P(this,xe,"f")&&(Y(this,Se,void 0,"f"),Y(this,xe,e,"f"),P(this,V,"f").isSettled()&&Y(this,V,We(),"f"),P(this,V,"f").resolve(e),P(this,te,"m",at).call(this))};class Cs{constructor(e){this.initialValue=e}}function ks(t){return new Cs(t)}function Ps(t,e){return`${t}-${Ai(e)}`}function ro(t,e){return e?fe(e,n=>pt(`--${Ps(t,String(n))}`)):{}}function so(t,e){return t?fe(t,(n,r)=>{const s=e[n];return pt(`var(${s}, ${r})`)}):{}}class io extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ts(){return t=>{var e;return e=class extends io{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function oo(){return Ts()}function ao(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ts()(n);return e[n]=r,e},{}):{}}function Lr(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Ur(t,e){const n=t;function r(i,o){e&&Lr(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Lr(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function lo(t,e){return e?fe(e,n=>Ps(t,String(n))):{}}function co({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:fe(t,(r,s)=>pt(`:host(.${s})`)),hostClassNames:fe(t,(r,s)=>pt(s)),cssVarNames:e,cssVarValues:n}}function uo({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Pe(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function ho(t,e){function n(s){Pe(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function dr(t){var e;const n=ao(t.events),r=lo(t.tagName,t.hostClasses),s=ro(t.tagName,t.cssVars),i=so(t.cssVars,s),o={...Ji,...t.options},a=typeof t.styles=="function"?t.styles(co({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||bs``,l=t.renderCallback,u=(e=class extends vt{createRenderParams(){return ho(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){As(this)&&!this.haveInputsBeenSet&&!o[lr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${hr.name}" directive on it. If no inputs are intended, use "${dr.name}" to define ${t.tagName}.`);const h=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(h));const c=t.renderCallback(h);return uo({host:h.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:h.state,inputs:h.inputs}),c}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const h=this.createRenderParams();t.cleanupCallback(h)}this.initCalled=!1}assignInputs(h){Pe(h).forEach(c=>{Kr()(this,c),this.instanceInputs[c]=h[c]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=to(t.stateInit),this.instanceInputs=Ur(this,!1),this.instanceState=Ur(this,!0);const h=t.stateInit||{};Pe(h).forEach(c=>{Kr()(this,c);const d=this.asyncStateHandlerMap[c];d?(this.instanceState[c]=d.getValue(),d.addSettleListener(()=>{this[c]=d.getValue()})):this.instanceState[c]=h[c]}),this.definition=u}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(u,{[Tn]:{value:!0,writable:!1},name:{value:$i(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:h=>h instanceof u,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,u),u}function Os(){return t=>dr({...t,options:{[lr]:!1},...t.options})}function lt(t,e){return fo(t,e)}const fo=cr(class extends ur{constructor(t){super(t),this.element=$s(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),me}}),Hr="onDomCreated",mo=cr(class extends ur{constructor(t){super(t),On(t,Hr)}update(t,[e]){On(t,Hr);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function Dn(t,e,n,r){return t instanceof Error?r?r(t):ln(t):Ri(t)?e:n?n(t):t}function po(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Os()(s(i))),defineElementNoInputs:i=>(r(i),dr(s(i)))}}function go(t,e){return t.filter((n,r)=>!e.includes(r))}function Rs(t){return t.filter(e=>Oi(e,["tagName",Tn])&&!!e.tagName&&!!e[Tn])}const Ns=new WeakMap;function yo(t,e){var n;const r=Rs(e);return(n=Ds(Ns,[t,...r]).value)===null||n===void 0?void 0:n.template}function vo(t,e,n){const r=Rs(e);return js(Ns,[t,...r],n)}function Ds(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Ms(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Ds(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Ms(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function js(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=Ms(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const u=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=u),js(u,e,n,r+1)}function zs(t,e,n){return{name:t,check:e,transform:n}}const wo=new WeakMap;function Bs(t,e,n){const r=yo(t,e),s=r??n();if(!r){const o=vo(t,e,s);if(o.result)wo.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=go(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function Is(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,u)=>{var h;const c=s.length-1,d=s[c],f=u-1,v=e[f];let m;r&&r(l),typeof d=="string"&&(m=(h=n.find(p=>p.check(d,l,v)))===null||h===void 0?void 0:h.transform,m&&(s[c]=d+m(v)+l,o.push(f))),m||s.push(l);const y=t.raw[u];m?i[c]=i[c]+m(v)+y:i.push(y)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Ks(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const bo=[zs("tag name css selector interpolation",(t,e,n)=>Ks(n),t=>t.tagName)];function _o(t,e){return Is(t,e,bo)}function Le(t,...e){const n=Bs(t,e,()=>_o(t,e));return bs(n.strings,...n.values)}const xo=[zs("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Ks(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function So(t){}function Eo(t){return Is(t.strings,t.values,xo,So)}function W(t,...e){const n=Bi(t,...e),r=Bs(t,e,()=>Eo(n));return{...n,strings:r.strings,values:r.values}}function $o(t,e){return t<e}function Ao(t,e){return t>e}function Co({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Ao:$o)(e.width/e.height,t.width/t.height)?"width":"height"}function bn({box:t,constraint:e,constraintType:n}){const r=Co({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Ls({box:t,ratio:e}){return fe(t,(n,r)=>r*e)}function Us({box:t,min:e,max:n}){return fe(t,(r,s)=>Ci({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Hs({min:t,max:e,box:n}){const r=Fs({min:t,max:e,box:n}),s=Ls({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||250),width:Math.floor(s.width||(t==null?void 0:t.width)||250)}}function Fs({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?bn({box:n,constraint:t,constraintType:"min"}):1,s=e?bn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Ls({ratio:i,box:n});return(t?bn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function wt(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=ko(o,r[a]);return`${o}${l}`});return ms(i.join(""))}function ko(t,e){return e._$litType$!=null||e._$litDirective$!=null?wt(e):Array.isArray(e)?e.map(r=>wt(r)).join(""):t.endsWith("=")?`"${e}"`:e}var Jt=(t=>(t.Html="html",t.Svg="svg",t.Image="image",t.Video="video",t))(Jt||{});async function Po(t,e){const n=t.headers.get("Content-Type")??"";return n.includes("video")?"video":n.includes("svg")||e.includes("<svg")?"svg":n.includes("html")||e.includes("<html")?"html":"image"}function To({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?wt(W`
            <img src=${n} />
        `):t==="video"?wt(W`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} type="video/mp4" />
            </video>
        `):e}async function Fr(t,e){let n;try{n=await fetch(t)}catch{}const r=await(n==null?void 0:n.text())??"",s=n?await Po(n,r):"image";return{templateString:To({imageText:r,imageType:s,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:s}}var X=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t))(X||{}),Mn=(t=>(t.FromParent="from-parent",t.FromChild="from-child",t))(Mn||{});const Oo=35;function Ro(t,e,n){return n.type===t&&n.direction===e}async function He({getMessageContext:t,message:e,verifyData:n,imageUrl:r}){let s=0,i=!1,o,a,l=!1;const u={...e,direction:"from-parent"},h=e.type;function c(m){try{const y=m.data;if(y.direction!=="from-child")return;if(y&&l&&Ro(h,"from-child",y)){let p=!1;try{p=n?n(y.data):!0}catch{}if(!p)return;i=!0,o=y}}catch(y){a=gs(y)}}let d=t();d==null||d.addEventListener("message",c);const f=Date.now();for(;!i&&s<Oo&&!a;){const m=Math.min(Math.floor(Math.pow(s,1.5))*100,5e3);await an(m);const y=t();y&&(d==null||d.removeEventListener("message",c),y.addEventListener("message",c),y!==d&&(d=y),l=!0,y.postMessage(u)),s++}const v=Date.now()-f;if(a)throw console.error({listenerError:a,imageUrl:r,messageToSend:e}),a;if(!i)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.floor(v/1e3)}' seconds for '${r}'`);return o==null?void 0:o.data}function Ee(t){var e;return(e=t.shadowRoot.querySelector("iframe"))==null?void 0:e.contentWindow}const qr=6e4;async function No({updateState:t,min:e,max:n,host:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){const a=Date.now();for(;!Ee(r);)if(await an(100),Date.now()-a>qr)throw new Error(`Took over ${Math.floor(qr/1e3)} seconds for the vir-resizable-image iframe's content window to appear for '${s.imageUrl}'`);await He({message:{type:X.Ready},imageUrl:s.imageUrl,getMessageContext:()=>Ee(r)??void 0}),await He({message:{type:X.ForceSize,data:i},imageUrl:s.imageUrl,getMessageContext:()=>Ee(r)??void 0});const l=o??await He({message:{type:X.SendSize},imageUrl:s.imageUrl,getMessageContext:()=>Ee(r)??void 0,verifyData:u=>!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height});await Do({updateState:t,min:e,max:n,imageDimensions:l,host:r,imageData:s,forcedFinalImageSize:i}),t({settled:!0})}async function Do({updateState:t,min:e,max:n,imageDimensions:r,host:s,imageData:i,forcedFinalImageSize:o}){const a=s.shadowRoot.querySelector(".frame-constraint");if(!(a instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const l=Hs({min:e,max:n,box:o??r});a.style.width=Q(Math.floor(l.width)),a.style.height=Q(Math.floor(l.height));const u=Us({min:e,max:n,box:l});l.height<u.height?t({shouldVerticallyCenter:!0}):t({shouldVerticallyCenter:!1}),s.style.width=Q(u.width),s.style.height=Q(u.height);const h=Fs({min:e,max:n,box:o??r});if(h>3?await He({message:{type:X.SendScalingMethod,data:"pixelated"},imageUrl:i.imageUrl,getMessageContext:()=>Ee(s)??void 0}):await He({message:{type:X.SendScalingMethod,data:"default"},imageUrl:i.imageUrl,getMessageContext:()=>Ee(s)??void 0}),i.imageType===Jt.Html){const c=o?{width:o.width/r.width,height:o.height/r.height}:{width:1,height:1},d={width:h*c.width,height:h*c.height};await He({message:{type:X.SendScale,data:d},imageUrl:i.imageUrl,getMessageContext:()=>Ee(s)??void 0})}}var Vr=Object.freeze,Mo=Object.defineProperty,Wr=(t,e)=>Vr(Mo(t,"raw",{value:Vr(e||t.slice())})),Gr,Yr;function jo(t,e,n){const r=Math.random(),s=W(Gr||(Gr=Wr([`
        <script>
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(/s*\\d+\\s+\\d+\\s+(\\d+)\\s+(\\d+)\\s*/);
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

            function extractHtmlSize(element) {
                if (!element) {
                    throw new Error('No element found to extract size from.');
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
                } else {
                    return extractHtmlSize(element.nextElementSibling);
                }
            }

            function getHtmlSize(element = document.body) {
                const query = '`,`' || 'body > *';
                const size = extractHtmlSize(document.querySelector(query));

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

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElement);

                if (!svgElement.getAttribute('viewBox')) {
                    svgElement.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElement.removeAttribute('width');
                svgElement.removeAttribute('height');
                svgElement.style.removeProperty('width');
                svgElement.style.removeProperty('height');

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

            const sizeGrabbers = {
                svg: getSvgSize,
                html: getHtmlSize,
                image: getImageSize,
                video: getVideoSize,
            };

            function getSize() {
                return sizeGrabbers[imageType]();
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
                    };
                    globalThis.postMessage(messageForParent);
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
                            .querySelector('body')
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

            try {
                muteEverything();
                const mutationObserver = new MutationObserver(muteEverything);
                mutationObserver.observe(document, {childList: true, subtree: true});
            } catch (error) {
                console.error(error);
            }
        <\/script>
    `],[`
        <script>
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(/s*\\\\d+\\\\s+\\\\d+\\\\s+(\\\\d+)\\\\s+(\\\\d+)\\\\s*/);
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

            function extractHtmlSize(element) {
                if (!element) {
                    throw new Error('No element found to extract size from.');
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
                } else {
                    return extractHtmlSize(element.nextElementSibling);
                }
            }

            function getHtmlSize(element = document.body) {
                const query = '`,`' || 'body > *';
                const size = extractHtmlSize(document.querySelector(query));

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

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElement);

                if (!svgElement.getAttribute('viewBox')) {
                    svgElement.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElement.removeAttribute('width');
                svgElement.removeAttribute('height');
                svgElement.style.removeProperty('width');
                svgElement.style.removeProperty('height');

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

            const sizeGrabbers = {
                svg: getSvgSize,
                html: getHtmlSize,
                image: getImageSize,
                video: getVideoSize,
            };

            function getSize() {
                return sizeGrabbers[imageType]();
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
                    };
                    globalThis.postMessage(messageForParent);
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
                            .querySelector('body')
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

            try {
                muteEverything();
                const mutationObserver = new MutationObserver(muteEverything);
                mutationObserver.observe(document, {childList: true, subtree: true});
            } catch (error) {
                console.error(error);
            }
        <\/script>
    `])),t.imageType,n??"",Mn.FromChild,Mn.FromChild,X.Ready,X.SendScale,X.SendScalingMethod,X.SendSize,X.ForceSize),i=W(Yr||(Yr=Wr([`
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

                    html.image-type-image img,
                    html.image-type-svg svg,
                    html.image-type-video video {
                        max-width: 100vw;
                        max-height: 100vh;
                        width: 100vw;
                        height: 100vh;
                        display: block;
                    }

                    .pixelated {
                        image-rendering: pixelated;
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
    `])),t.imageType.toLowerCase(),r,e??"",s);return ms(wt(i)).replace(String(r),`
${t.templateString}
`)}const zo={imageData:ks(),shouldVerticallyCenter:!1,settled:!1},Jr=W`
    <div class="click-cover"></div>
`,ct=Os()({tagName:"vir-resizable-image",stateInit:zo,hostClasses:{verticallyCenter:({state:t})=>t.shouldVerticallyCenter},styles:({hostClassSelectors:t})=>Le`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            overflow: hidden;
        }

        ${t.verticallyCenter} {
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
        }

        .error-wrapper,
        .loading-wrapper {
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
            max-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-break: break-word;
        }

        iframe {
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }
    `,renderCallback:({state:t,inputs:e,updateState:n,host:r})=>{n({imageData:{createPromise:async()=>(n({settled:!1,shouldVerticallyCenter:!1}),Fr(e.imageUrl,!!e.blockAutoPlay).catch(async()=>(await an(1e3),Fr(e.imageUrl,!!e.blockAutoPlay)))),trigger:{...vs(e,c=>c!=="extraHtml")}}});const s=e.min&&e.max?Us({box:e.min,max:e.max}):e.min,i=e.max,o=s?Le`
                  min-width: ${s.width}px;
                  min-height: ${s.height}px;
              `:"",a=e.forcedOriginalImageSize?Hs({min:s,max:i,box:e.forcedOriginalImageSize}):void 0,l=Dn(t.imageData,W`
                <div class="loading-wrapper" style=${o}>
                    <slot name="loading">Loading...</slot>
                </div>
            `,c=>(e.forcedOriginalImageSize,W`
                    <iframe
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${jo(c,e.extraHtml,e.htmlSizeQuerySelector)}
                        ${mo(async()=>{try{await No({updateState:n,min:s,max:i,host:r,imageData:c,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:a})}catch(d){console.error(d)}})}
                    ></iframe>
                    <slot name="loaded"></slot>
                `),c=>W`
                    <div class="error-wrapper">
                        <slot name="error">${ln(c)}</slot>
                    </div>
                `),u=Dn(t.imageData,Jr,c=>[Jt.Html,Jt.Video].includes(c.imageType)?"":Jr,()=>""),h=t.imageData instanceof Error?Le`
                      max-width: 100%;
                      max-height: 100%;
                  `:a?Le`
                      width: ${a.width}px;
                      height: ${a.height}px;
                  `:"";return W`
            <div class="frame-constraint" style=${h}>${l}</div>
            ${u}
        `}}),R=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,j=Object.keys,L=Array.isArray;function F(t,e){return typeof e!="object"||j(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||R.Promise||(R.Promise=Promise);const bt=Object.getPrototypeOf,Bo={}.hasOwnProperty;function J(t,e){return Bo.call(t,e)}function Xe(t,e){typeof e=="function"&&(e=e(bt(t))),(typeof Reflect>"u"?j:Reflect.ownKeys)(e).forEach(n=>{ae(t,n,e[n])})}const qs=Object.defineProperty;function ae(t,e,n,r){qs(t,e,F(n&&J(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Fe(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ae(t.prototype,"constructor",t),{extend:Xe.bind(null,t.prototype)}}}}const Io=Object.getOwnPropertyDescriptor;function fr(t,e){let n;return Io(t,e)||(n=bt(t))&&fr(n,e)}const Ko=[].slice;function Xt(t,e,n){return Ko.call(t,e,n)}function Vs(t,e){return e(t)}function st(t){if(!t)throw new Error("Assertion Failed")}function Ws(t){R.setImmediate?setImmediate(t):setTimeout(t,0)}function Gs(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function le(t,e){if(J(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=le(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:le(a,e.substr(o+1))}}function Z(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){st(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Z(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?L(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&J(t,o)||(l=t[o]={}),Z(l,a,n)}}else n===void 0?L(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function Ys(t){var e={};for(var n in t)J(t,n)&&(e[n]=t[n]);return e}const Lo=[].concat;function Js(t){return Lo.apply([],t)}const Xs="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Js([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>R[t]),Uo=Xs.map(t=>R[t]);Gs(Xs,t=>[t,!0]);let he=null;function At(t){he=typeof WeakMap<"u"&&new WeakMap;const e=jn(t);return he=null,e}function jn(t){if(!t||typeof t!="object")return t;let e=he&&he.get(t);if(e)return e;if(L(t)){e=[],he&&he.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(jn(t[n]))}else if(Uo.indexOf(t.constructor)>=0)e=t;else{const i=bt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),he&&he.set(t,e),t)J(t,s)&&(e[s]=jn(t[s]))}return e}const{toString:Ho}={};function zn(t){return Ho.call(t).slice(8,-1)}const Bn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Fo=typeof Bn=="symbol"?function(t){var e;return t!=null&&(e=t[Bn])&&e.apply(t)}:function(){return null},Ie={};function ie(t){var e,n,r,s;if(arguments.length===1){if(L(t))return t.slice();if(this===Ie&&typeof t=="string")return[t];if(s=Fo(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const mr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var ne=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Qs(t,e){ne=t,Zs=e}var Zs=()=>!0;const qo=!new Error("").stack;function Re(){if(qo)try{throw Re.arguments,new Error}catch(t){return t}return new Error}function In(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(Zs).map(r=>`
`+r).join("")):""}var ei=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],pr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ei),Vo={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function qe(t,e){this._e=Re(),this.name=t,this.message=e}function ti(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Qt(t,e,n,r){this._e=Re(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=ti(t,e)}function ut(t,e){this._e=Re(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=ti(t,e)}Fe(qe).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+In(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Fe(Qt).from(qe),Fe(ut).from(qe);var gr=pr.reduce((t,e)=>(t[e]=e+"Error",t),{});const Wo=qe;var C=pr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Re(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Vo[e]||n,this.inner=null)}return Fe(r).from(Wo),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Xr=ei.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Kt=pr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function _t(t){return t}function Go(t,e){return t==null||t===_t?e:function(n){return e(t(n))}}function Te(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Yo(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Te(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Te(s,this.onerror):s),i!==void 0?i:n}}function Jo(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Te(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Te(r,this.onerror):r)}}function Xo(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);F(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Te(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Te(i,this.onerror):i),r===void 0?o===void 0?void 0:o:F(r,o)}}function Qo(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function yr(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Kt.ModifyError=Qt,Kt.DexieError=qe,Kt.BulkError=ut;var xt={};const[Kn,Zt,Ln]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,bt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,bt(e),t]})(),ni=Zt&&Zt.then,Lt=Kn&&Kn.constructor,vr=!!Ln;var Un=!1,Zo=Ln?()=>{Ln.then(Ot)}:R.setImmediate?setImmediate.bind(null,Ot):R.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Ot(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Ot,0)},ht=function(t,e){it.push([t,e]),en&&(Zo(),en=!1)},Hn=!0,en=!0,Ae=[],Ut=[],Fn=null,qn=_t,Ve={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Zr,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Zr(t[0],t[1])}catch{}})}},A=Ve,it=[],Ce=0,Ht=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(ne&&(this._stackHolder=Re(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==xt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Wn(this,this._value))}this._state=null,this._value=null,++e.ref,si(this,t)}const Vn={get:function(){var t=A,e=tn;function n(r,s){var i=!t.global&&(t!==A||e!==tn);const o=i&&!ce();var a=new S((l,u)=>{wr(this,new ri(nn(r,t,i,o),nn(s,t,i,o),l,u,t))});return ne&&ai(a,this),a}return n.prototype=xt,n},set:function(t){ae(this,"then",t&&t.prototype===xt?Vn:{get:function(){return t},set:Vn.set})}};function ri(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function si(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Ct();n&&typeof n.then=="function"?si(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,ii(t)),r&&kt()}},Wn.bind(null,t))}catch(n){Wn(t,n)}}function Wn(t,e){if(Ut.push(e),t._state===null){var n=t._lib&&Ct();e=qn(e),t._state=!1,t._value=e,ne&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=fr(e,"stack");e._promise=t,ae(e,"stack",{get:()=>Un?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ae.some(s=>s._value===r._value)||Ae.push(r)}(t),ii(t),n&&kt()}}function ii(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)wr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ce===0&&(++Ce,ht(()=>{--Ce==0&&br()},[]))}function wr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ce,ht(ea,[n,t,e])}else t._listeners.push(e)}function ea(t,e,n){try{Fn=e;var r,s=e._value;e._state?r=t(s):(Ut.length&&(Ut=[]),r=t(s),Ut.indexOf(s)===-1&&function(i){for(var o=Ae.length;o;)if(Ae[--o]._value===i._value)return void Ae.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Fn=null,--Ce==0&&br(),--n.psd.ref||n.psd.finalize()}}function oi(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=In(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return ne&&((r=In(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&oi(t._prev,e,n)),e}function ai(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Ot(){Ct()&&kt()}function Ct(){var t=Hn;return Hn=!1,en=!1,t}function kt(){var t,e,n;do for(;it.length>0;)for(t=it,it=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(it.length>0);Hn=!0,en=!0}function br(){var t=Ae;Ae=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Ht.slice(0),n=e.length;n;)e[--n]()}function Rt(t){return new S(xt,!1,t)}function N(t,e){var n=A;return function(){var r=Ct(),s=A;try{return ge(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{ge(s,!1),r&&kt()}}}Xe(S.prototype,{then:Vn,_then:function(t,e){wr(this,new ri(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Rt(r)):this.then(null,r=>r&&r.name===e?n(r):Rt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Rt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Un=!0;var t=oi(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Un=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ae(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Ve.env=li(),Xe(S,{all:function(){var t=ie.apply(null,arguments).map(Nt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(xt,!0,t);return ai(e,Fn),e},reject:Rt,race:function(){var t=ie.apply(null,arguments).map(Nt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>tn},newPSD:pe,usePSD:Ze,scheduler:{get:()=>ht,set:t=>{ht=t}},rejectionMapper:{get:()=>qn,set:t=>{qn=t}},follow:(t,e)=>new S((n,r)=>pe((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Te(function(){(function(a){function l(){a(),Ht.splice(Ht.indexOf(l),1)}Ht.push(l),++Ce,ht(()=>{--Ce==0&&br()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Lt&&(Lt.allSettled&&ae(S,"allSettled",function(){const t=ie.apply(null,arguments).map(Nt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Lt.any&&typeof AggregateError<"u"&&ae(S,"any",function(){const t=ie.apply(null,arguments).map(Nt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const K={awaits:0,echoes:0,id:0};var ta=0,Ft=[],_n=0,tn=0,na=0;function pe(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++na;var o=Ve.env;i.env=vr?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:Qr(o.nthen,i),gthen:Qr(o.gthen,i)}:{},e&&F(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=Ze(i,t,n,r);return i.ref===0&&i.finalize(),a}function Qe(){return K.id||(K.id=++ta),++K.awaits,K.echoes+=100,K.id}function ce(){return!!K.awaits&&(--K.awaits==0&&(K.id=0),K.echoes=100*K.awaits,!0)}function Nt(t){return K.echoes&&t&&t.constructor===Lt?(Qe(),t.then(e=>(ce(),e),e=>(ce(),z(e)))):t}function ra(t){++tn,K.echoes&&--K.echoes!=0||(K.echoes=K.id=0),Ft.push(A),ge(t,!0)}function sa(){var t=Ft[Ft.length-1];Ft.pop(),ge(t,!1)}function ge(t,e){var n=A;if((e?!K.echoes||_n++&&t===A:!_n||--_n&&t===A)||ci(e?ra.bind(null,t):sa),t!==A&&(A=t,n===Ve&&(Ve.env=li()),vr)){var r=Ve.env.Promise,s=t.env;Zt.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(R,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function li(){var t=R.Promise;return vr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(R,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:Zt.then,gthen:t.prototype.then}:{}}function Ze(t,e,n,r,s){var i=A;try{return ge(t,!0),e(n,r,s)}finally{ge(i,!1)}}function ci(t){ni.call(Kn,t)}function nn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&Qe(),ge(e,!0);try{return t.apply(this,arguments)}finally{ge(s,!1),r&&ci(ce)}}}function Qr(t,e){return function(n,r){return t.call(this,nn(n,e),nn(r,e))}}(""+ni).indexOf("[native code]")===-1&&(Qe=ce=T);function Zr(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(R.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),F(r,s)):R.CustomEvent&&F(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&R.dispatchEvent&&(dispatchEvent(r),!R.PromiseRejectionEvent&&R.onunhandledrejection))try{R.onunhandledrejection(r)}catch{}ne&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var z=S.reject;function Gn(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===gr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Gn(t,e,n,r))):z(i)}return s._promise(e,(i,o)=>pe(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return z(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return z(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>Gn(t,e,n,r))}const $e=String.fromCharCode(65535),re="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",dt=[],hn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),ia=hn,oa=hn,ui=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Oe(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const hi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Dt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=At(e))[t],e)}class aa{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,u,h){if(!h.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(h.idbtrans,h)}const a=Ct();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):pe(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Gn(this.db,e,[this.name],o)}finally{a&&kt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(L(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=j(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>u.compound&&n.every(h=>u.keyPath.indexOf(h)>=0)&&u.keyPath.every(h=>n.indexOf(h)>=0))[0];if(r&&this.db._maxKey!==$e)return this.where(r.name).equals(r.keyPath.map(u=>e[u]));!r&&ne&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(u,h){try{return i.cmp(u,h)===0}catch{return!1}}const[a,l]=n.reduce(([u,h],c)=>{const d=s[c],f=e[c];return[u||d,u||!d?Oe(h,d&&d.multi?v=>{const m=le(v,c);return L(m)&&m.some(y=>o(f,y))}:v=>o(f,le(v,c))):h]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,L(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(J(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){F(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Dt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||L(e))return this.where(":id").equals(e).modify(n);{const r=le(e,this.schema.primKey.keyPath);if(r===void 0)return z(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?j(n).forEach(s=>{Z(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Dt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:hi})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let h=l&&a?e.map(Dt(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:h,wantResults:i}).then(({numFailures:c,results:d,lastResult:f,failures:v})=>{if(c===0)return i?d:f;throw new ut(`${this.name}.bulkAdd(): ${c} of ${u} operations failed`,v)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let h=l&&a?e.map(Dt(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:h,wantResults:i}).then(({numFailures:c,results:d,lastResult:f,failures:v})=>{if(c===0)return i?d:f;throw new ut(`${this.name}.bulkPut(): ${c} of ${u} operations failed`,v)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new ut(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function ft(t){var e={},n=function(a,l){if(l){for(var u=arguments.length,h=new Array(u-1);--u;)h[u-1]=arguments[u];return e[a].subscribe.apply(null,h),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,u){if(typeof a=="object")return o(a);l||(l=Qo),u||(u=T);var h={subscribers:[],fire:u,subscribe:function(c){h.subscribers.indexOf(c)===-1&&(h.subscribers.push(c),h.fire=l(h.fire,c))},unsubscribe:function(c){h.subscribers=h.subscribers.filter(function(d){return d!==c}),h.fire=h.subscribers.reduce(l,u)}};return e[a]=n[a]=h,h}function o(a){j(a).forEach(function(l){var u=a[l];if(L(u))i(l,a[l][0],a[l][1]);else{if(u!=="asap")throw new C.InvalidArgument("Invalid event config");var h=i(l,_t,function(){for(var c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];h.subscribers.forEach(function(f){Ws(function(){f.apply(null,d)})})})}})}}function nt(t,e){return Fe(e).from({prototype:t}),e}function Me(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function xn(t,e){t.filter=Oe(t.filter,e)}function Sn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Oe(r(),e()):e,t.justLimit=n&&!r}function qt(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function es(t,e,n){const r=qt(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Mt(t,e,n,r){const s=t.replayFilter?Oe(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,u)=>{if(!s||s(l,u,d=>l.stop(d),d=>l.fail(d))){var h=l.primaryKey,c=""+h;c==="[object ArrayBuffer]"&&(c=""+new Uint8Array(h)),J(i,c)||(i[c]=!0,e(a,l,u))}};return Promise.all([t.or._iterate(o,n),ts(es(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return ts(es(t,r,n),Oe(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function ts(t,e,n,r){var s=N(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=T},a=>{i.fail(a),o=T})||s(i.value,i,a=>o=a),o()})})}function H(t,e){try{const n=ns(t),r=ns(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let u=0;u<l;++u)if(s[u]!==i[u])return s[u]<i[u]?-1:1;return o===a?0:o<a?-1:1}(rs(t),rs(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let u=0;u<l;++u){const h=H(s[u],i[u]);if(h!==0)return h}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function ns(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=zn(t);return n==="ArrayBuffer"?"binary":n}function rs(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class la{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,z.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,z.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Oe(n.algorithm,e)}_iterate(e,n){return Mt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&F(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Mt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(Me(r,!0))return s.count({trans:n,query:{index:qt(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Mt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(u,h){return h?o(u[r[h]],h-1):u[s]}var a=this._ctx.dir==="next"?1:-1;function l(u,h){var c=o(u,i),d=o(h,i);return c<d?-a:c>d?a:0}return this.toArray(function(u){return u.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&Me(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=qt(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Mt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,Me(n)?Sn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Sn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Sn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return xn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return xn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Oe(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&Me(n,!0)&&n.limit>0)return this._read(s=>{var i=qt(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return xn(this._ctx,function(s){var i=s.primaryKey.toString(),o=J(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=j(e),o=i.length;s=function(m){for(var y=!1,p=0;p<o;++p){var g=i[p],b=e[g];le(m,g)!==b&&(Z(m,g,b),y=!0)}return y}}const a=n.table.core,{outbound:l,extractKey:u}=a.schema.primaryKey,h=this.db._options.modifyChunkSize||200,c=[];let d=0;const f=[],v=(m,y)=>{const{failures:p,numFailures:g}=y;d+=m-g;for(let b of j(p))c.push(p[b])};return this.clone().primaryKeys().then(m=>{const y=p=>{const g=Math.min(h,m.length-p);return a.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(b=>{const $=[],x=[],w=l?[]:null,_=[];for(let E=0;E<g;++E){const O=b[E],D={value:At(O),primKey:m[p+E]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(m[p+E]):l||H(u(O),u(D.value))===0?(x.push(D.value),l&&w.push(m[p+E])):(_.push(m[p+E]),$.push(D.value)))}const k=Me(n)&&n.limit===1/0&&(typeof e!="function"||e===En)&&{index:n.index,range:n.range};return Promise.resolve($.length>0&&a.mutate({trans:r,type:"add",values:$}).then(E=>{for(let O in E.failures)_.splice(parseInt(O),1);v($.length,E)})).then(()=>(x.length>0||k&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:w,values:x,criteria:k,changeSpec:typeof e!="function"&&e}).then(E=>v(x.length,E))).then(()=>(_.length>0||k&&e===En)&&a.mutate({trans:r,type:"delete",keys:_,criteria:k}).then(E=>v(_.length,E))).then(()=>m.length>p+g&&y(p+h))})};return y(0).then(()=>{if(c.length>0)throw new Qt("Error modifying one or more objects",c,d,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return Me(e)&&(e.isPrimKey&&!oa||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:u,numFailures:h})=>{if(h)throw new Qt("Could not delete some values",Object.keys(a).map(c=>a[c]),o-h);return o-h}))}):this.modify(En)}}const En=(t,e)=>e.value=null;function ca(t,e){return t<e?-1:t===e?0:1}function ua(t,e){return t>e?-1:t===e?0:1}function G(t,e,n){var r=t instanceof fi?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function je(t){return new t.Collection(t,()=>di("")).limit(0)}function ha(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var u=e[l];if(u!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],u)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function jt(t,e,n,r){var s,i,o,a,l,u,h,c=n.length;if(!n.every(m=>typeof m=="string"))return G(t,"String expected.");function d(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?ca:ua;var y=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});a=y.map(function(p){return p.upper}),l=y.map(function(p){return p.lower}),u=m,h=m==="next"?"":r}d("next");var f=new t.Collection(t,()=>ue(a[0],l[c-1]+r));f._ondirectionchange=function(m){d(m)};var v=0;return f._addAlgorithm(function(m,y,p){var g=m.key;if(typeof g!="string")return!1;var b=i(g);if(e(b,l,v))return!0;for(var $=null,x=v;x<c;++x){var w=ha(g,b,a[x],l[x],o,u);w===null&&$===null?v=x+1:($===null||o($,w)>0)&&($=w)}return y($!==null?function(){m.continue($+h)}:p),!1}),f}function ue(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function di(t){return{type:1,lower:t,upper:t}}class fi{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?je(this):new this.Collection(this,()=>ue(e,n,!r,!s))}catch{return G(this,re)}}equals(e){return e==null?G(this,re):new this.Collection(this,()=>di(e))}above(e){return e==null?G(this,re):new this.Collection(this,()=>ue(e,void 0,!0))}aboveOrEqual(e){return e==null?G(this,re):new this.Collection(this,()=>ue(e,void 0,!1))}below(e){return e==null?G(this,re):new this.Collection(this,()=>ue(void 0,e,!1,!0))}belowOrEqual(e){return e==null?G(this,re):new this.Collection(this,()=>ue(void 0,e))}startsWith(e){return typeof e!="string"?G(this,"String expected."):this.between(e,e+$e,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):jt(this,(n,r)=>n.indexOf(r[0])===0,[e],$e)}equalsIgnoreCase(e){return jt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ie.apply(Ie,arguments);return e.length===0?je(this):jt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ie.apply(Ie,arguments);return e.length===0?je(this):jt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,$e)}anyOf(){const e=ie.apply(Ie,arguments);let n=this._cmp;try{e.sort(n)}catch{return G(this,re)}if(e.length===0)return je(this);const r=new this.Collection(this,()=>ue(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ie.apply(Ie,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return G(this,re)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return je(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return G(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let h,c=s;function d(g,b){return c(g[0],b[0])}try{h=e.reduce(function(g,b){let $=0,x=g.length;for(;$<x;++$){const w=g[$];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=a(w[1],b[1]);break}}return $===x&&g.push(b),g},[]),h.sort(d)}catch{return G(this,re)}let f=0;const v=u?g=>s(g,h[f][1])>0:g=>s(g,h[f][1])>=0,m=l?g=>i(g,h[f][0])>0:g=>i(g,h[f][0])>=0;let y=v;const p=new this.Collection(this,()=>ue(h[0][0],h[h.length-1][1],!l,!u));return p._ondirectionchange=g=>{g==="next"?(y=v,c=s):(y=m,c=i),h.sort(d)},p._addAlgorithm((g,b,$)=>{for(var x=g.key;y(x);)if(++f,f===h.length)return b($),!1;return!!function(w){return!v(w)&&!m(w)}(x)||(this._cmp(x,h[f][1])===0||this._cmp(x,h[f][0])===0||b(()=>{c===s?g.continue(h[f][0]):g.continue(h[f][1])}),!1)}),p}startsWithAnyOf(){const e=ie.apply(Ie,arguments);return e.every(n=>typeof n=="string")?e.length===0?je(this):this.inAnyRange(e.map(n=>[n,n+$e])):G(this,"startsWithAnyOf() only works with strings")}}function ee(t){return N(function(e){return St(e),t(e.target.error),!1})}function St(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const ye=ft(null,"storagemutated");class da{_lock(){return st(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(st(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{Ze(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(st(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return st(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{St(s),this._reject(e.error)}),e.onabort=N(s=>{St(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&ye.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return z(new C.ReadOnly("Transaction is readonly"));if(!this.active)return z(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return pe(()=>{var i=new S((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,a)=>{r.then(l=>n._waitingQueue.push(N(o.bind(null,l))),l=>n._waitingQueue.push(N(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(J(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Yn(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+mi(e)}}function mi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function pi(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:Gs(n,r=>[r.name,r])}}let Et=t=>{try{return t.only([[]]),Et=()=>[[]],[[]]}catch{return Et=()=>$e,$e}};function Jn(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>le(n,e)}(t):e=>le(e,t)}function ss(t){return[].slice.call(t)}let fa=0;function mt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function ma(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:h,lowerOpen:c,upperOpen:d}=l;return u===void 0?h===void 0?null:e.upperBound(h,!!d):h===void 0?e.lowerBound(u,!!c):e.bound(u,h,!!c,!!d)}const{schema:s,hasGetAll:i}=function(l,u){const h=ss(l.objectStoreNames);return{schema:{name:l.name,tables:h.map(c=>u.objectStore(c)).map(c=>{const{keyPath:d,autoIncrement:f}=c,v=L(d),m=d==null,y={},p={name:c.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:v,keyPath:d,autoIncrement:f,unique:!0,extractKey:Jn(d)},indexes:ss(c.indexNames).map(g=>c.index(g)).map(g=>{const{name:b,unique:$,multiEntry:x,keyPath:w}=g,_={name:b,compound:L(w),keyPath:w,unique:$,multiEntry:x,extractKey:Jn(w)};return y[mt(w)]=_,_}),getIndexByKeyPath:g=>y[mt(g)]};return y[":id"]=p.primaryKey,d!=null&&(y[mt(d)]=p.primaryKey),p})},hasGetAll:h.length>0&&"getAll"in u.objectStore(h[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(u){const h=u.name;return{name:h,schema:u,mutate:function({trans:c,type:d,keys:f,values:v,range:m}){return new Promise((y,p)=>{y=N(y);const g=c.objectStore(h),b=g.keyPath==null,$=d==="put"||d==="add";if(!$&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:x}=f||v||{length:1};if(f&&v&&f.length!==v.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return y({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],k=[];let E=0;const O=U=>{++E,St(U)};if(d==="deleteRange"){if(m.type===4)return y({numFailures:E,failures:k,results:[],lastResult:void 0});m.type===3?_.push(w=g.clear()):_.push(w=g.delete(r(m)))}else{const[U,I]=$?b?[v,f]:[v,null]:[f,null];if($)for(let M=0;M<x;++M)_.push(w=I&&I[M]!==void 0?g[d](U[M],I[M]):g[d](U[M])),w.onerror=O;else for(let M=0;M<x;++M)_.push(w=g[d](U[M])),w.onerror=O}const D=U=>{const I=U.target.result;_.forEach((M,Ne)=>M.error!=null&&(k[Ne]=M.error)),y({numFailures:E,failures:k,results:d==="delete"?f:_.map(M=>M.result),lastResult:I})};w.onerror=U=>{O(U),D(U)},w.onsuccess=D})},getMany:({trans:c,keys:d})=>new Promise((f,v)=>{f=N(f);const m=c.objectStore(h),y=d.length,p=new Array(y);let g,b=0,$=0;const x=_=>{const k=_.target;p[k._pos]=k.result,++$===b&&f(p)},w=ee(v);for(let _=0;_<y;++_)d[_]!=null&&(g=m.get(d[_]),g._pos=_,g.onsuccess=x,g.onerror=w,++b);b===0&&f(p)}),get:({trans:c,key:d})=>new Promise((f,v)=>{f=N(f);const m=c.objectStore(h).get(d);m.onsuccess=y=>f(y.target.result),m.onerror=ee(v)}),query:function(c){return d=>new Promise((f,v)=>{f=N(f);const{trans:m,values:y,limit:p,query:g}=d,b=p===1/0?void 0:p,{index:$,range:x}=g,w=m.objectStore(h),_=$.isPrimaryKey?w:w.index($.name),k=r(x);if(p===0)return f({result:[]});if(c){const E=y?_.getAll(k,b):_.getAllKeys(k,b);E.onsuccess=O=>f({result:O.target.result}),E.onerror=ee(v)}else{let E=0;const O=y||!("openKeyCursor"in _)?_.openCursor(k):_.openKeyCursor(k),D=[];O.onsuccess=U=>{const I=O.result;return I?(D.push(y?I.value:I.primaryKey),++E===p?f({result:D}):void I.continue()):f({result:D})},O.onerror=ee(v)}})}(i),openCursor:function({trans:c,values:d,query:f,reverse:v,unique:m}){return new Promise((y,p)=>{y=N(y);const{index:g,range:b}=f,$=c.objectStore(h),x=g.isPrimaryKey?$:$.index(g.name),w=v?m?"prevunique":"prev":m?"nextunique":"next",_=d||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=ee(p),_.onsuccess=N(k=>{const E=_.result;if(!E)return void y(null);E.___id=++fa,E.done=!1;const O=E.continue.bind(E);let D=E.continuePrimaryKey;D&&(D=D.bind(E));const U=E.advance.bind(E),I=()=>{throw new Error("Cursor not stopped")};E.trans=c,E.stop=E.continue=E.continuePrimaryKey=E.advance=()=>{throw new Error("Cursor not started")},E.fail=N(p),E.next=function(){let M=1;return this.start(()=>M--?this.continue():this.stop()).then(()=>this)},E.start=M=>{const Ne=new Promise((q,ve)=>{q=N(q),_.onerror=ee(ve),E.fail=ve,E.stop=et=>{E.stop=E.continue=E.continuePrimaryKey=E.advance=I,q(et)}}),De=()=>{if(_.result)try{M()}catch(q){E.fail(q)}else E.done=!0,E.start=()=>{throw new Error("Cursor behind last entry")},E.stop()};return _.onsuccess=N(q=>{_.onsuccess=De,De()}),E.continue=O,E.continuePrimaryKey=D,E.advance=U,De(),Ne},y(E)},p)})},count({query:c,trans:d}){const{index:f,range:v}=c;return new Promise((m,y)=>{const p=d.objectStore(h),g=f.isPrimaryKey?p:p.index(f.name),b=r(v),$=b?g.count(b):g.count();$.onsuccess=N(x=>m(x.target.result)),$.onerror=ee(y)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:Et(e),schema:s}}function Xn({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(h,c){return c.reduce((d,{create:f})=>({...d,...f(d)}),h)}(ma(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function rn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=fr(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ae(o,s,{get(){return this.table(s)},set(l){qs(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function Qn({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function pa(t,e){return t._cfg.version-e._cfg.version}function ga(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;pe(()=>{A.trans=i,A.transless=a,e===0?(j(s).forEach(l=>{$n(n,l,s[l].primKey,s[l].indexes)}),Xn(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},u,h,c){const d=[],f=l._versions;let v=l._dbSchema=er(l,l.idbdb,c),m=!1;function y(){return d.length?S.resolve(d.shift()(h.idbtrans)).then(y):S.resolve()}return f.filter(p=>p._cfg.version>=u).forEach(p=>{d.push(()=>{const g=v,b=p._cfg.dbschema;tr(l,g,c),tr(l,b,c),v=l._dbSchema=b;const $=gi(g,b);$.add.forEach(w=>{$n(c,w[0],w[1].primKey,w[1].indexes)}),$.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=c.objectStore(w.name);w.add.forEach(k=>Zn(_,k)),w.change.forEach(k=>{_.deleteIndex(k.name),Zn(_,k)}),w.del.forEach(k=>_.deleteIndex(k))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>u){Xn(l,c),h._memoizedTables={},m=!0;let w=Ys(b);$.del.forEach(O=>{w[O]=g[O]}),Qn(l,[l.Transaction.prototype]),rn(l,[l.Transaction.prototype],j(w),w),h.schema=w;const _=mr(x);let k;_&&Qe();const E=S.follow(()=>{if(k=x(h),k&&_){var O=ce.bind(null,null);k.then(O,O)}});return k&&typeof k.then=="function"?S.resolve(k):E.then(()=>k)}}),d.push(g=>{(!m||!ia)&&function(b,$){[].slice.call($.db.objectStoreNames).forEach(x=>b[x]==null&&$.db.deleteObjectStore(x))}(p._cfg.dbschema,g),Qn(l,[l.Transaction.prototype]),rn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),h.schema=l._dbSchema})}),y().then(()=>{var p,g;g=c,j(p=v).forEach(b=>{g.db.objectStoreNames.contains(b)||$n(g,b,p[b].primKey,p[b].indexes)})})}(t,e,i,n).catch(o)})}function gi(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!hn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let u;for(u in a)l[u]||o.del.push(u);for(u in l){const h=a[u],c=l[u];h?h.src!==c.src&&o.change.push(c):o.add.push(c)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function $n(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>Zn(s,i)),s}function Zn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function er(t,e,n){const r={};return Xt(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Yn(mi(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let h=0;h<i.indexNames.length;++h){const c=i.index(i.indexNames[h]);o=c.keyPath;var u=Yn(c.name,o,!!c.unique,!!c.multiEntry,!1,o&&typeof o!="string",!1);l.push(u)}r[s]=pi(s,a,l)}),r}function tr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],u=o.index(l).keyPath,h=typeof u=="string"?u:"["+Xt(u).join("+")+"]";if(e[i]){const c=e[i].idxByName[h];c&&(c.name=l,delete e[i].idxByName[h],e[i].idxByName[l]=c)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&R.WorkerGlobalScope&&R instanceof R.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class ya{_parseStoresSpec(e,n){j(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Yn(l,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),L(u),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=pi(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?F(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{F(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,Qn(n,[n._allTables,n,n.Transaction.prototype]),rn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],j(i),i),n._storeNames=j(i),this}upgrade(e){return this._cfg.contentUpgrade=yr(this._cfg.contentUpgrade||T,e),this}}function _r(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new ke("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function xr(t){return t&&typeof t.databases=="function"}function nr(t){return pe(function(){return A.letThrough=!0,t()})}function va(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function wa(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?z(e.dbOpenError):t);ne&&(e.openCanceller._stackHolder=Re()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return S.race([r,(typeof navigator>"u"?S.resolve():va()).then(()=>new S((l,u)=>{if(s(),!n)throw new C.MissingAPI;const h=t.name,c=e.autoSchema?n.open(h):n.open(h,Math.round(10*t.verno));if(!c)throw new C.MissingAPI;c.onerror=ee(u),c.onblocked=N(t._fireOnBlocked),c.onupgradeneeded=N(d=>{if(o=c.transaction,e.autoSchema&&!t._options.allowEmptyDB){c.onerror=St,o.abort(),c.result.close();const v=n.deleteDatabase(h);v.onsuccess=v.onerror=N(()=>{u(new C.NoSuchDatabase(`Database ${h} doesnt exist`))})}else{o.onerror=ee(u);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;a=f<1,t._novip.idbdb=c.result,ga(t,f/10,o,u)}},u),c.onsuccess=N(()=>{o=null;const d=t._novip.idbdb=c.result,f=Xt(d.objectStoreNames);if(f.length>0)try{const m=d.transaction((v=f).length===1?v[0]:v,"readonly");e.autoSchema?function({_novip:y},p,g){y.verno=p.version/10;const b=y._dbSchema=er(0,p,g);y._storeNames=Xt(p.objectStoreNames,0),rn(y,[y._allTables],j(b),b)}(t,d,m):(tr(t,t._dbSchema,m),function(y,p){const g=gi(er(0,y.idbdb,p),y._dbSchema);return!(g.add.length||g.change.some(b=>b.add.length||b.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Xn(t,m)}catch{}var v;dt.push(t),d.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),d.onclose=N(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:y},p){!xr(m)&&p!=="__dbnames"&&_r(m,y).put({name:p}).catch(T)}(t._deps,h),l()},u)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(nr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.reduce(yr,T);return e.onReadyBeingFired=[],S.resolve(nr(()=>u(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),z(l)}).finally(()=>{e.openComplete=!0,i()})}function rr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):L(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function ba(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=Js(s);return[t,i,n]}function yi(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(c){return c.name===gr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>yi(t,e,n,null,s))):z(c)}const l=mr(s);let u;l&&Qe();const h=S.follow(()=>{if(u=s.call(o,o),u)if(l){var c=ce.bind(null,null);u.then(c,c)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=rr(u))},a);return(u&&typeof u.then=="function"?S.resolve(u).then(c=>o.active?c:z(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):h.then(()=>u)).then(c=>(r&&o._resolve(),o._completion.then(()=>c))).catch(c=>(o._reject(c),z(c)))})}function zt(t,e,n){const r=L(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const _a={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(h,c,d){const f=mt(h),v=s[f]=s[f]||[],m=h==null?0:typeof h=="string"?1:h.length,y=c>0,p={...d,isVirtual:y,keyTail:c,keyLength:m,extractKey:Jn(h),unique:!y&&d.unique};return v.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?h[0]:h.slice(0,m-1),c+1,d),v.sort((g,b)=>g.keyTail-b.keyTail),p}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const h of r.indexes)o(h.keyPath,0,h);function l(h){const c=h.query.index;return c.isVirtual?{...h,query:{index:c,range:(d=h.query.range,f=c.keyTail,{type:d.type===1?2:d.type,lower:zt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:zt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:h;var d,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(h){const c=s[mt(h)];return c&&c[0]}},count:h=>n.count(l(h)),query:h=>n.query(l(h)),openCursor(h){const{keyTail:c,isVirtual:d,keyLength:f}=h.query.index;return d?n.openCursor(l(h)).then(v=>v&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(zt(p,h.reverse?t.MAX_KEY:t.MIN_KEY,c)):h.unique?m.continue(m.key.slice(0,f).concat(h.reverse?t.MIN_KEY:t.MAX_KEY,c)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(zt(p,t.MAX_KEY,c),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(v)):n.openCursor(h)}}}}}};function Sr(t,e,n,r){return n=n||{},r=r||"",j(t).forEach(s=>{if(J(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=zn(i);a!==zn(o)?n[r+s]=e[s]:a==="Object"?Sr(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),j(e).forEach(s=>{J(t,s)||(n[r+s]=e[s])}),n}const xa={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:u}=o.table(e).hook;switch(i.type){case"add":if(l.fire===T)break;return o._promise("readwrite",()=>h(i),!0);case"put":if(l.fire===T&&u.fire===T)break;return o._promise("readwrite",()=>h(i),!0);case"delete":if(a.fire===T)break;return o._promise("readwrite",()=>h(i),!0);case"deleteRange":if(a.fire===T)break;return o._promise("readwrite",()=>function(d){return c(d.trans,d.range,1e4)}(i),!0)}return n.mutate(i);function h(d){const f=A.trans,v=d.keys||function(m,y){return y.type==="delete"?y.keys:y.keys||y.values.map(m.extractKey)}(r,d);if(!v)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:v}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(m,y,p){return y.type==="add"?Promise.resolve([]):m.getMany({trans:y.trans,keys:p,cache:"immutable"})}(n,d,v).then(m=>{const y=v.map((p,g)=>{const b=m[g],$={onerror:null,onsuccess:null};if(d.type==="delete")a.fire.call($,p,b,f);else if(d.type==="add"||b===void 0){const x=l.fire.call($,p,d.values[g],f);p==null&&x!=null&&(p=x,d.keys[g]=p,r.outbound||Z(d.values[g],r.keyPath,p))}else{const x=Sr(b,d.values[g]),w=u.fire.call($,x,p,b,f);if(w){const _=d.values[g];Object.keys(w).forEach(k=>{J(_,k)?_[k]=w[k]:Z(_,k,w[k])})}}return $});return n.mutate(d).then(({failures:p,results:g,numFailures:b,lastResult:$})=>{for(let x=0;x<v.length;++x){const w=g?g[x]:v[x],_=y[x];w==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(d.type==="put"&&m[x]?d.values[x]:w)}return{failures:p,results:g,numFailures:b,lastResult:$}}).catch(p=>(y.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function c(d,f,v){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:v}).then(({result:m})=>h({type:"delete",keys:m,trans:d}).then(y=>y.numFailures>0?Promise.reject(y.failures[0]):m.length<v?{failures:[],numFailures:0,lastResult:void 0}:c(d,{...f,lower:m[m.length-1],lowerOpen:!0},v)))}}}}})};function vi(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)H(e.keys[s],t[i])===0&&(r.push(n?At(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Sa={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=vi(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?At(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Er(t){return!("from"in t)}const se=function(t,e){if(!this){const n=new se;return t&&"d"in t&&F(n,t),n}F(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function $t(t,e,n){const r=H(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Er(t))return F(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(H(n,t.from)<0)return s?$t(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},is(t);if(H(e,t.to)>0)return i?$t(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},is(t);H(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),H(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&sn(t,s),i&&o&&sn(t,i)}function sn(t,e){Er(e)||function n(r,{from:s,to:i,l:o,r:a}){$t(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function Ea(t,e){const n=sr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=sr(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(H(a.from,s.to)<=0&&H(a.to,s.from)>=0)return!0;H(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function sr(t){let e=Er(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&H(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||H(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function is(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=os(o)}t.d=os(t)}function os({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}Xe(se.prototype,{add(t){return sn(this,t),this},addKey(t){return $t(this,t,t),this},addKeys(t){return t.forEach(e=>$t(this,e,e)),this},[Bn](){return sr(this)}});const $a={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new se(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,u={...s,mutate:d=>{const f=d.trans,v=f.mutatedParts||(f.mutatedParts={}),m=w=>{const _=`idb://${e}/${r}/${w}`;return v[_]||(v[_]=new se)},y=m(""),p=m(":dels"),{type:g}=d;let[b,$]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const x=d.trans._cache;return s.mutate(d).then(w=>{if(L(b)){g!=="delete"&&(b=w.results),y.addKeys(b);const _=vi(b,x);_||g==="add"||p.addKeys(b),(_||$)&&function(k,E,O,D){function U(I){const M=k(I.name||"");function Ne(q){return q!=null?I.extractKey(q):null}const De=q=>I.multiEntry&&L(q)?q.forEach(ve=>M.addKey(ve)):M.addKey(q);(O||D).forEach((q,ve)=>{const et=O&&Ne(O[ve]),fn=D&&Ne(D[ve]);H(et,fn)!==0&&(et!=null&&De(et),fn!=null&&De(fn))})}E.indexes.forEach(U)}(m,i,_,$)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),y.add(_)}else y.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return w})}},h=({query:{index:d,range:f}})=>{var v,m;return[d,new se((v=f.lower)!==null&&v!==void 0?v:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},c={get:d=>[o,new se(d.key)],getMany:d=>[o,new se().addKeys(d.keys)],count:h,query:h,openCursor:h};return j(c).forEach(d=>{u[d]=function(f){const{subscr:v}=A;if(v){const m=$=>{const x=`idb://${e}/${r}/${$}`;return v[x]||(v[x]=new se)},y=m(""),p=m(":dels"),[g,b]=c[d](f);if(m(g.name||"").add(b),!g.isPrimaryKey){if(d!=="count"){const $=d==="query"&&l&&f.values&&s.query({...f,values:!1});return s[d].apply(this,arguments).then(x=>{if(d==="query"){if(l&&f.values)return $.then(({result:_})=>(y.addKeys(_),x));const w=f.values?x.result.map(a):x.result;f.values?y.addKeys(w):p.addKeys(w)}else if(d==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const k=w.primaryKey;return p.addKey(k),k}},value:{get:()=>(_&&y.addKey(w.primaryKey),w.value)}})}return x})}p.add(n)}}return s[d].apply(this,arguments)}}),u}}}};class ke{constructor(e,n){this._middlewares={},this.verno=0;const r=ke.dependencies;this._options=n={addons:ke.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(a=>{i.dbReadyResolve=a}),i.openCanceller=new S((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=ft(this,"populate","blocked","versionchange","close",{ready:[yr,T]}),this.on.ready.subscribe=Vs(this.on.ready.subscribe,a=>(l,u)=>{ke.vip(()=>{const h=this._state;if(h.openComplete)h.dbOpenError||S.resolve().then(l),u&&a(l);else if(h.onReadyBeingFired)h.onReadyBeingFired.push(l),u&&a(l);else{a(l);const c=this;u||a(function d(){c.on.ready.unsubscribe(l),c.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,nt(la.prototype,function(a,l){this.db=o;let u=hi,h=null;if(l)try{u=l()}catch(v){h=v}const c=a._ctx,d=c.table,f=d.hook.reading.fire;this._ctx={table:d,index:c.index,isPrimKey:!c.index||d.schema.primKey.keyPath&&c.index===d.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:h,or:c.or,valueMapper:f!==_t?f:null}})),this.Table=function(a){return nt(aa.prototype,function(l,u,h){this.db=a,this._tx=h,this.name=l,this.schema=u,this.hook=a._allTables[l]?a._allTables[l].hook:ft(null,{creating:[Yo,T],reading:[Go,_t],updating:[Xo,T],deleting:[Jo,T]})})}(this),this.Transaction=function(a){return nt(da.prototype,function(l,u,h,c,d){this.db=a,this.mode=l,this.storeNames=u,this.schema=h,this.chromeTransactionDurability=c,this.idbtrans=null,this.on=ft(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,v)=>{this._resolve=f,this._reject=v}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var v=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):v&&this.idbtrans&&this.idbtrans.abort(),z(f)})})}(this),this.Version=function(a){return nt(ya.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return nt(fi.prototype,function(l,u,h){this.db=a,this._ctx={table:l,index:u===":id"?null:u,or:h};const c=a._deps.indexedDB;if(!c)throw new C.MissingAPI;this._cmp=this._ascending=c.cmp.bind(c),this._descending=(d,f)=>c.cmp(f,d),this._max=(d,f)=>c.cmp(d,f)>0?d:f,this._min=(d,f)=>c.cmp(d,f)<0?d:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=Et(n.IDBKeyRange),this._createTransaction=(a,l,u,h)=>new this.Transaction(a,l,u,this._options.chromeTransactionDurability,h),this._fireOnBlocked=a=>{this.on("blocked").fire(a),dt.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(_a),this.use(xa),this.use($a),this.use(Sa),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(pa),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return wa(this)}_close(){const e=this._state,n=dt.indexOf(this);if(n>=0&&dt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:a,IDBKeyRange:l},u){!xr(a)&&u!=="__dbnames"&&_r(a,l).delete(u).catch(T)})(this._deps,this.name),r()}),o.onerror=ee(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return j(this._allTables).map(e=>this._allTables[e])}transaction(){const e=ba.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(u=>{var h=u instanceof this.Table?u.name:u;if(typeof h!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return h}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(u=>{if(s&&s.storeNames.indexOf(u)===-1){if(!i)throw new C.SubTransaction("Table "+u+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(u){return s?s._promise(null,(h,c)=>{c(u)}):z(u)}const l=yi.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?Ze(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!J(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Aa=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Ca{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Aa](){return this}}function wi(t,e){return j(e).forEach(n=>{sn(t[n]||(t[n]=new se),e[n])}),t}function ka(t){return new Ca(e=>{const n=mr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,ye.storagemutated.unsubscribe(h)}};e.start&&e.start(o);let a=!1,l=!1;function u(){return j(i).some(d=>s[d]&&Ea(s[d],i[d]))}const h=d=>{wi(s,d),u()&&c()},c=()=>{if(a||r)return;s={};const d={},f=function(v){n&&Qe();const m=()=>pe(t,{subscr:v,trans:null}),y=A.trans?Ze(A.transless,m):m();return n&&y.then(ce,ce),y}(d);l||(ye("storagemutated",h),l=!0),a=!0,Promise.resolve(f).then(v=>{a=!1,r||(u()?c():(s={},i=d,e.next&&e.next(v)))},v=>{a=!1,e.error&&e.error(v),o.unsubscribe()})};return c(),o})}let ir;try{ir={indexedDB:R.indexedDB||R.mozIndexedDB||R.webkitIndexedDB||R.msIndexedDB,IDBKeyRange:R.IDBKeyRange||R.webkitIDBKeyRange}}catch{ir={indexedDB:null,IDBKeyRange:null}}const be=ke;function Vt(t){let e=oe;try{oe=!0,ye.storagemutated.fire(t)}finally{oe=e}}Xe(be,{...Kt,delete:t=>new be(t,{addons:[]}).delete(),exists:t=>new be(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return xr(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):_r(e,n).toCollection().primaryKeys()}(be.dependencies).then(t)}catch{return z(new C.MissingAPI)}},defineClass:()=>function(t){F(this,t)},ignoreTransaction:t=>A.trans?Ze(A.transless,t):t(),vip:nr,async:function(t){return function(){try{var e=rr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return z(n)}}},spawn:function(t,e,n){try{var r=rr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return z(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?be.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>ne,set:t=>{Qs(t,t==="dexie"?()=>!0:ui)}},derive:Fe,extend:F,props:Xe,override:Vs,Events:ft,on:ye,liveQuery:ka,extendObservabilitySet:wi,getByKeyPath:le,setByKeyPath:Z,delByKeyPath:function(t,e){typeof e=="string"?Z(t,e,void 0):"length"in e&&[].map.call(e,function(n){Z(t,n,void 0)})},shallowClone:Ys,deepClone:At,getObjectDiff:Sr,cmp:H,asap:Ws,minKey:-(1/0),addons:[],connections:dt,errnames:gr,dependencies:ir,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),be.maxKey=Et(be.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ye("storagemutated",t=>{if(!oe){let e;hn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),oe=!0,dispatchEvent(e),oe=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{oe||Vt(t)}));let oe=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),ye("storagemutated",e=>{oe||t.postMessage(e)}),t.onmessage=e=>{e.data&&Vt(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){ye("storagemutated",e=>{try{oe||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Vt(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Vt(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof qe||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Xr[t.name])return t;var n=new Xr[t.name](e||t.message,t);return"stack"in t&&ae(n,"stack",{get:function(){return this.inner.stack}}),n},Qs(ne,ui);class Pt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class as extends Pt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const dn="locationchange";let ls=!1;const Pa=window.history.pushState;function cs(...t){const e=Pa.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}const Ta=window.history.replaceState;function us(...t){const e=Ta.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}function Oa(){if(!ls){if(window.history.pushState===cs)throw new as("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===us)throw new as("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");ls=!0,window.history.pushState=cs,window.history.replaceState=us,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(dn))})}}function Ra(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Na(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Da(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?Ra(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Ma extends Pt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function bi(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const hs=6;function ds(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>hs)throw new Ma(`Route sanitization depth has exceed the max of ${hs} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(bi(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class An extends Pt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function ja(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new An(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new An(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new An(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function za(t,e,n,r=!1){const s=_i(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function _i(t,e,n=""){var r;if(!n&&e!=null)throw new Pt("Route base regexp was defined but routeBase string was not provided.");const s=Ba(e)?`/${n}`:"",i=t.search?Na(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function Ba(t){return!!(t&&window.location.pathname.match(t))}function Ia(t={}){var e;ja(t),Oa();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const u=i.getCurrentRawRoutes(),h={...u,...o},c=i.sanitizeFullRoute(h);if(!(!l&&bi(u,c)))return za(c,r,n,a)},createRoutesUrl:o=>_i(o,r,n),getCurrentRawRoutes:()=>Da(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Pt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(dn,()=>ds(i)),s=!0),o&&ds(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const xi=Ia({routeBase:"resizable-image-element"}),Ka=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],La="resizable-image-element-storage";class Ua extends ke{constructor(){super(La),this.version(1).stores({storedUrls:"&index"})}}const Cn=new Ua,fs={async set(t){const e=on(t).map((n,r)=>({index:r,url:n}));await Cn.storedUrls.clear(),await Cn.storedUrls.bulkPut(e)},async get(){const e=(await Cn.storedUrls.toArray()).map(r=>r.url),n=on(e);return Ha(n.length?n:Ka)}};function Ha(t){var e,n;try{const r=on(((n=(e=xi.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function on(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(Pi)}const{defineElement:Fa,defineElementNoInputs:qa}=po(),Bt=Fa()({tagName:"vir-url-input",events:{urlsChange:oo()},styles:Le`
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
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),W`
            <textarea
                ${lt("input",a=>{const u=a.currentTarget.value.split(`
`).map(h=>h.trim().replace(/,+$/,""));e(new n.urlsChange(u))})}
                ${lt("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),rt={max:{width:300,height:600},min:{width:300,height:150}};qa({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:ks(fs.get()),constraints:void 0,router:xi,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Le`
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

        ${t.showConstraints} ${ct} {
            border-color: blue;
        }

        ${ct} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||rt.min.width,height:Number(o==null?void 0:o.minH)||rt.min.height},max:{width:Number(o==null?void 0:o.maxW)||rt.max.width,height:Number(o==null?void 0:o.maxH)||rt.max.height}}})}const n=t.constraints??rt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!ys(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:an(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),W`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Bt}
                ${hr(Bt,{urls:r})}
                ${lt(Bt.events.urlsChange,o=>{const a=o.detail;fs.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Bt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${lt("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const u=[kn(o),kn(l)].join(" "),h=n[o][l];return W`
                            <label>
                                ${u}
                                <br />
                                ${Q(h)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${h}
                                    ${lt("input",c=>{i(c.currentTarget,o,l)})}
                                />
                            </label>
                        `});return W`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${Va(n,t.imageUrls)}</div>
        `}});function Va(t,e){return Dn(e,"Loading...",n=>on(n).map(r=>{const s=`
                height: ${Q(t.max.height)};
                max-height: ${Q(t.max.height)};
                width: ${Q(t.max.width)};
                max-width: ${Q(t.max.width)}`,i=`height: ${Q(t.min.height)}; width: ${Q(t.min.width)}`;return W`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${ct}
                            ${hr(ct,{imageUrl:r,max:t.max,min:t.min})}
                        ></${ct}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
