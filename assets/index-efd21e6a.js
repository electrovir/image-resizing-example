(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ys(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ci={capitalizeFirstLetter:!1};function On(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function ki(t,e){return e.capitalizeFirstLetter?On(t):t}function Pi(t,e=Ci){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return ki(r,e)}function Cr(t){return t!==t.toUpperCase()}function Ti(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",l=s<i.length-1?i[s+1]:"",a=Cr(o)||Cr(l);return r===r.toLowerCase()||s===0||!a?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Oi({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const Ri=["january","february","march","april","may","june","july","august","september","october","november","december"];Ri.map(t=>t.slice(0,3));function Ni(t){return!!t}const Di=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function vs(t,e){return t?Di.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Mi(t,e){return t&&e.every(n=>vs(t,n))}function ln(t){const e=Ve();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ji(t){return!!(vs(t,"then")&&typeof t.then=="function")}function Ve(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ve.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function cn(t){return t?t instanceof Error?t.message:String(t):""}function Wt(t){return t instanceof Error?t:new Error(cn(t))}function Pe(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function kr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Pr(t){return!!t&&typeof t=="object"}function ws(t,e){try{if(t===e)return!0;if(Pr(t)&&Pr(e)){const n=kr(t),r=kr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${cn(n)}`),n}}function bs(t,e){return Pe(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function me(t,e){let n=!1;const r=Pe(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Pe(r).map(async o=>{const l=await r[o];r[o]=l})),s(r)}catch(o){i(o)}}):r}function Q(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=window,ur=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hr=Symbol(),Tr=new WeakMap;let _s=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==hr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ur&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Tr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Tr.set(n,e))}return e}toString(){return this.cssText}};const pt=t=>new _s(typeof t=="string"?t:t+"",void 0,hr),xs=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new _s(n,t,hr)},zi=(t,e)=>{ur?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=It.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},Or=ur?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return pt(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn;const Gt=window,Rr=Gt.trustedTypes,Bi=Rr?Rr.emptyScript:"",Nr=Gt.reactiveElementPolyfillSupport,Rn={toAttribute(t,e){switch(e){case Boolean:t=t?Bi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ss=(t,e)=>e!==t&&(e==e||t==t),vn={attribute:!0,type:String,converter:Rn,reflect:!1,hasChanged:Ss};let ze=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=vn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||vn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(Or(s))}else e!==void 0&&n.push(Or(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return zi(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=vn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Rn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Rn;this._$El=i,this[i]=l.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ss)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ze.finalized=!0,ze.elementProperties=new Map,ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},Nr==null||Nr({ReactiveElement:ze}),((yn=Gt.reactiveElementVersions)!==null&&yn!==void 0?yn:Gt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wn;const Yt=window,We=Yt.trustedTypes,Dr=We?We.createPolicy("lit-html",{createHTML:t=>t}):void 0,fe=`lit$${(Math.random()+"").slice(9)}$`,Es="?"+fe,Ii=`<${Es}>`,Ge=document,gt=(t="")=>Ge.createComment(t),yt=t=>t===null||typeof t!="object"&&typeof t!="function",$s=Array.isArray,Ki=t=>$s(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mr=/-->/g,jr=/>/g,we=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zr=/'/g,Br=/"/g,As=/^(?:script|style|textarea|title)$/i,Li=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Ui=Li(1),ce=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Ir=new WeakMap,Le=Ge.createTreeWalker(Ge,129,null,!1),Hi=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=et;for(let a=0;a<n;a++){const u=t[a];let c,h,d=-1,f=0;for(;f<u.length&&(o.lastIndex=f,h=o.exec(u),h!==null);)f=o.lastIndex,o===et?h[1]==="!--"?o=Mr:h[1]!==void 0?o=jr:h[2]!==void 0?(As.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=we):h[3]!==void 0&&(o=we):o===we?h[0]===">"?(o=s??et,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?we:h[3]==='"'?Br:zr):o===Br||o===zr?o=we:o===Mr||o===jr?o=et:(o=we,s=void 0);const y=o===we&&t[a+1].startsWith("/>")?" ":"";i+=o===et?u+Ii:d>=0?(r.push(c),u.slice(0,d)+"$lit$"+u.slice(d)+fe+y):u+fe+(d===-2?(r.push(void 0),a):y)}const l=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Dr!==void 0?Dr.createHTML(l):l,r]};let Jt=class{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const l=e.length-1,a=this.parts,[u,c]=Hi(e,n);if(this.el=Jt.createElement(u,r),Le.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=Le.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(fe)){const f=c[o++];if(h.push(d),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(fe),m=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?qi:m[1]==="?"?Wi:m[1]==="@"?Gi:hn})}else a.push({type:6,index:i})}for(const d of h)s.removeAttribute(d)}if(As.test(s.tagName)){const h=s.textContent.split(fe),d=h.length-1;if(d>0){s.textContent=We?We.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],gt()),Le.nextNode(),a.push({type:2,index:++i});s.append(h[d],gt())}}}else if(s.nodeType===8)if(s.data===Es)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(fe,h+1))!==-1;)a.push({type:7,index:i}),h+=fe.length-1}i++}}static createElement(e,n){const r=Ge.createElement("template");return r.innerHTML=e,r}};function Ye(t,e,n=t,r){var s,i,o,l;if(e===ce)return e;let a=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const u=yt(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(t),a._$AT(t,n,r)),r!==void 0?((o=(l=n)._$Co)!==null&&o!==void 0?o:l._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=Ye(t,a._$AS(t,e.values),a,r)),e}let Fi=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Ge).importNode(r,!0);Le.currentNode=i;let o=Le.nextNode(),l=0,a=0,u=s[0];for(;u!==void 0;){if(l===u.index){let c;u.type===2?c=new un(o,o.nextSibling,this,e):u.type===1?c=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(c=new Yi(o,this,e)),this.u.push(c),u=s[++a]}l!==(u==null?void 0:u.index)&&(o=Le.nextNode(),l++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},un=class{constructor(e,n,r,s){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Ye(this,e,n),yt(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==ce&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ki(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ge.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Jt.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new Fi(i,this),l=o.v(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let n=Ir.get(e.strings);return n===void 0&&Ir.set(e.strings,n=new Jt(e)),n}k(e){$s(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new un(this.O(gt()),this.O(gt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},hn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Ye(this,e,n,0),o=!yt(e)||e!==this._$AH&&e!==ce,o&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=Ye(this,l[r+a],n,a),u===ce&&(u=this._$AH[a]),o||(o=!yt(u)||u!==this._$AH[a]),u===B?e=B:e!==B&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},qi=class extends hn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Vi=We?We.emptyScript:"";let Wi=class extends hn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Vi):this.element.removeAttribute(this.name)}},Gi=class extends hn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=Ye(this,e,n,0))!==null&&r!==void 0?r:B)===ce)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Yi=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}};const Kr=Yt.litHtmlPolyfillSupport;Kr==null||Kr(Jt,un),((wn=Yt.litHtmlVersions)!==null&&wn!==void 0?wn:Yt.litHtmlVersions=[]).push("2.6.1");const Ji=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const l=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new un(e.insertBefore(gt(),l),l,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bn,_n;let it=class extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ji(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ce}};it.finalized=!0,it._$litElement$=!0,(bn=globalThis.litElementHydrateSupport)===null||bn===void 0||bn.call(globalThis,{LitElement:it});const Lr=globalThis.litElementPolyfillSupport;Lr==null||Lr({LitElement:it});((_n=globalThis.litElementVersions)!==null&&_n!==void 0?_n:globalThis.litElementVersions=[]).push("3.2.2");var Xi=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function Qi(){return t=>{}}let vt=class extends it{};vt=Xi([Qi()],vt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Ur(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):Zi(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xn;((xn=window.HTMLSlotElement)===null||xn===void 0?void 0:xn.prototype.assignedElements)!=null;const Nn=Symbol("this-is-an-element-vir-declarative-element"),dr=Symbol("key for ignoring inputs not having been set yet"),eo={[dr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dn=t=>(...e)=>({_$litDirective$:t,values:e});let fn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function to(t,e){return ks(t,e,vt)}function ks(t,e,n){Dn(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function Dn(t,e){if(t.type!==Cs.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function fr(t,e){return no(t,e)}const no=dn(class extends fn{constructor(t){super(t),this.element=to(t,"assign")}render(t,e){return ro(t,this.element,e),ce}});function ro(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Ps(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof vt?!0:Ps(n)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},G=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},te,_e,xe,Se,Ke,Be,V,ot,Mn,jn;function so(t){if(!t)return{};const e=bs(t,(r,s)=>s instanceof Ts);return me(e,(r,s)=>new io(s.initialValue))}const Tt=Symbol("not set");class io{constructor(e){te.add(this),_e.set(this,Tt),xe.set(this,void 0),Se.set(this,void 0),Ke.set(this,[]),Be.set(this,void 0),V.set(this,Ve()),e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(P(this,_e,"f")===Tt||!ws(e.trigger,P(this,_e,"f"))){G(this,_e,e.trigger,"f");const n=e.createPromise();P(this,te,"m",Mn).call(this,n)}}else"newPromise"in e?(P(this,_e,"f"),P(this,te,"m",Mn).call(this,e.newPromise),P(this,te,"m",ot).call(this)):"resolvedValue"in e?P(this,te,"m",jn).call(this,e.resolvedValue):e.forceUpdate&&(G(this,_e,Tt,"f"),G(this,xe,void 0,"f"),P(this,V,"f").isSettled()||P(this,V,"f").reject("Canceled by force update"),G(this,V,Ve(),"f"),P(this,te,"m",ot).call(this))}getValue(){return P(this,V,"f").isSettled()?P(this,Se,"f")?P(this,Se,"f"):P(this,xe,"f"):P(this,V,"f").promise}addSettleListener(e){P(this,Ke,"f").push(e)}removeSettleListener(e){G(this,Ke,P(this,Ke,"f").filter(n=>n!==e),"f")}}_e=new WeakMap,xe=new WeakMap,Se=new WeakMap,Ke=new WeakMap,Be=new WeakMap,V=new WeakMap,te=new WeakSet,ot=function(){P(this,Ke,"f").forEach(e=>{e()})},Mn=function(e){e!==P(this,Be,"f")&&(G(this,xe,void 0,"f"),G(this,Se,void 0,"f"),G(this,Be,e,"f"),P(this,V,"f").isSettled()&&G(this,V,Ve(),"f"),e.then(n=>{P(this,Be,"f")===e&&P(this,te,"m",jn).call(this,n)}).catch(n=>{P(this,Be,"f")===e&&(G(this,Se,Wt(n),"f"),P(this,V,"f").promise.catch(()=>{}),P(this,V,"f").reject(n),P(this,te,"m",ot).call(this))}))},jn=function(e){e!==P(this,xe,"f")&&(G(this,Se,void 0,"f"),G(this,xe,e,"f"),P(this,V,"f").isSettled()&&G(this,V,Ve(),"f"),P(this,V,"f").resolve(e),P(this,te,"m",ot).call(this))};class Ts{constructor(e){this.initialValue=e}}function Os(t){return new Ts(t)}function Rs(t,e){return`${t}-${Ti(e)}`}function oo(t,e){return e?me(e,n=>pt(`--${Rs(t,String(n))}`)):{}}function ao(t,e){return t?me(t,(n,r)=>{const s=e[n];return pt(`var(${s}, ${r})`)}):{}}class lo extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ns(){return t=>{var e;return e=class extends lo{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function zn(){return Ns()}function co(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ns()(n);return e[n]=r,e},{}):{}}function Hr(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Fr(t,e){const n=t;function r(i,o){e&&Hr(o,t,t.tagName);const l=t.asyncStateHandlerMap[o];return l?l.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,l)=>{e&&Hr(o,t,t.tagName),i[o]=void 0;const a=t.asyncStateHandlerMap[o];return a?a.setValue(l):n[o]=l,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function uo(t,e){return e?me(e,n=>Rs(t,String(n))):{}}function ho({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:me(t,(r,s)=>pt(`:host(.${s})`)),hostClassNames:me(t,(r,s)=>pt(s)),cssVarNames:e,cssVarValues:n}}function fo({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Pe(e).forEach(i=>{const o=e[i],l=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(l):t.classList.remove(l))})}function mo(t,e){function n(s){Pe(s).forEach(i=>{const o=s[i],l=t.asyncStateHandlerMap[i];l?l.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function mr(t){var e;const n=co(t.events),r=uo(t.tagName,t.hostClasses),s=oo(t.tagName,t.cssVars),i=ao(t.cssVars,s),o={...eo,...t.options},l=typeof t.styles=="function"?t.styles(ho({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||xs``,a=t.renderCallback,u=(e=class extends vt{createRenderParams(){return mo(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Ps(this)&&!this.haveInputsBeenSet&&!o[dr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${fr.name}" directive on it. If no inputs are intended, use "${mr.name}" to define ${t.tagName}.`);const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const h=t.renderCallback(c);return fo({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),h}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Pe(c).forEach(h=>{Ur()(this,h),this.instanceInputs[h]=c[h]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=so(t.stateInit),this.instanceInputs=Fr(this,!1),this.instanceState=Fr(this,!0);const c=t.stateInit||{};Pe(c).forEach(h=>{Ur()(this,h);const d=this.asyncStateHandlerMap[h];d?(this.instanceState[h]=d.getValue(),d.addSettleListener(()=>{this[h]=d.getValue()})):this.instanceState[h]=c[h]}),this.definition=u}},e.tagName=t.tagName,e.styles=l,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=a,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(u,{[Nn]:{value:!0,writable:!1},name:{value:Pi(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof u,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,u),u}function Ds(){return t=>mr({...t,options:{[dr]:!1},...t.options})}function at(t,e){return po(t,e)}const po=dn(class extends fn{constructor(t){super(t),this.element=ks(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ce}}),qr="onDomCreated",go=dn(class extends fn{constructor(t){super(t),Dn(t,qr)}update(t,[e]){Dn(t,qr);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function Bn(t,e,n,r){return t instanceof Error?r?r(t):cn(t):ji(t)?e:n?n(t):t}function yo(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Ds()(s(i))),defineElementNoInputs:i=>(r(i),mr(s(i)))}}function vo(t,e){return t.filter((n,r)=>!e.includes(r))}function Ms(t){return t.filter(e=>Mi(e,["tagName",Nn])&&!!e.tagName&&!!e[Nn])}const js=new WeakMap;function wo(t,e){var n;const r=Ms(e);return(n=zs(js,[t,...r]).value)===null||n===void 0?void 0:n.template}function bo(t,e,n){const r=Ms(e);return Is(js,[t,...r],n)}function zs(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Bs(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?zs(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Bs(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Is(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:l}=Bs(t,e,r);if(!o)return{result:!1,reason:l};const a=i??{nested:void 0,template:void 0};if(i||t.set(o,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=(s=a.nested)!==null&&s!==void 0?s:new WeakMap;return a.nested||(a.nested=u),Is(u,e,n,r+1)}function Ks(t,e,n){return{name:t,check:e,transform:n}}const _o=new WeakMap;function Ls(t,e,n){const r=wo(t,e),s=r??n();if(!r){const o=bo(t,e,s);if(o.result)_o.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=vo(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function Us(t,e,n,r){const s=[],i=[],o=[];return t.forEach((a,u)=>{var c;const h=s.length-1,d=s[h],f=u-1,y=e[f];let m;r&&r(a),typeof d=="string"&&(m=(c=n.find(p=>p.check(d,a,y)))===null||c===void 0?void 0:c.transform,m&&(s[h]=d+m(y)+a,o.push(f))),m||s.push(a);const v=t.raw[u];m?i[h]=i[h]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Hs(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const xo=[Ks("tag name css selector interpolation",(t,e,n)=>Hs(n),t=>t.tagName)];function So(t,e){return Us(t,e,xo)}function lt(t,...e){const n=Ls(t,e,()=>So(t,e));return xs(n.strings,...n.values)}const Eo=[Ks("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Hs(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function $o(t){}function Ao(t){return Us(t.strings,t.values,Eo,$o)}function Y(t,...e){const n=Ui(t,...e),r=Ls(t,e,()=>Ao(n));return{...n,strings:r.strings,values:r.values}}function Co(t,e){return t<e}function ko(t,e){return t>e}function Po({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?ko:Co)(e.width/e.height,t.width/t.height)?"width":"height"}function Sn({box:t,constraint:e,constraintType:n}){const r=Po({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Fs({box:t,ratio:e}){return me(t,(n,r)=>r*e)}function qs({box:t,min:e,max:n}){return me(t,(r,s)=>Oi({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Vs({min:t,max:e,box:n}){const r=Ws({min:t,max:e,box:n}),s=Fs({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||250),width:Math.floor(s.width||(t==null?void 0:t.width)||250)}}function Ws({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Sn({box:n,constraint:t,constraintType:"min"}):1,s=e?Sn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Fs({ratio:i,box:n});return(t?Sn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=dn(class extends fn{constructor(t){var e;if(super(t),t.type!==Cs.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((n=this.st)===null||n===void 0)&&n.has(i))&&this.nt.add(i);return this.render(e)}const s=t.element.classList;this.nt.forEach(i=>{i in e||(s.remove(i),this.nt.delete(i))});for(const i in e){const o=!!e[i];o===this.nt.has(i)||!((r=this.st)===null||r===void 0)&&r.has(i)||(o?(s.add(i),this.nt.add(i)):(s.remove(i),this.nt.delete(i)))}return ce}}),Vr=10;function Gs(t){return Math.min(Math.max(Math.floor(Math.pow(t+1,3)*Vr),Vr),5e3)}function wt(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,l)=>{const a=Oo(o,r[l]);return`${o}${a}`});return ys(i.join(""))}function Oo(t,e){return e._$litType$!=null||e._$litDirective$!=null?wt(e):Array.isArray(e)?e.map(r=>wt(r)).join(""):t.endsWith("=")?`"${e}"`:e}var Xt=(t=>(t.Html="html",t.Svg="svg",t.Image="image",t.Video="video",t))(Xt||{});async function Ro(t,e){const n=t.headers.get("Content-Type")??"";return n.includes("video")?"video":n.includes("svg")||e.includes("<svg")?"svg":n.includes("html")||e.includes("<html")?"html":"image"}function No({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?wt(Y`
            <img src=${n} />
        `):t==="video"?wt(Y`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} type="video/mp4" />
            </video>
        `):e}async function Wr(t,e){let n;try{n=await fetch(t)}catch{}const r=await(n==null?void 0:n.text())??"",s=n?await Ro(n,r):"image";return{templateString:No({imageText:r,imageType:s,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:s}}var X=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t))(X||{}),In=(t=>(t.FromParent="from-parent",t.FromChild="from-child",t))(In||{});const Do=35;function Mo(t,e,n){return n.type===t&&n.direction===e}async function Ue({getMessageContext:t,message:e,verifyData:n,imageUrl:r}){let s=0,i=!1,o,l,a=!1;const u={...e,direction:"from-parent"},c=e.type;function h(m){try{const v=m.data;if(v.direction!=="from-child")return;if(v&&a&&Mo(c,"from-child",v)){let p=!1;try{p=n?n(v.data):!0}catch{}if(!p)return;i=!0,o=v}}catch(v){l=Wt(v)}}let d=t();d==null||d.addEventListener("message",h);const f=Date.now();for(;!i&&s<Do&&!l;){await ln(Gs(s));const m=t();m&&(d==null||d.removeEventListener("message",h),m.addEventListener("message",h),m!==d&&(d=m),a=!0,m.postMessage(u)),s++}const y=Date.now()-f;if(l)throw console.error({listenerError:l,imageUrl:r,messageToSend:e}),l;if(!i)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.floor(y/1e3)}' seconds for '${r}'`);return o==null?void 0:o.data}function Ee(t){var e;return(e=t.shadowRoot.querySelector("iframe"))==null?void 0:e.contentWindow}const Gr=6e4;async function jo({updateState:t,min:e,max:n,host:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){const l=Date.now();let a=0;for(;!Ee(r);){if(await ln(Gs(a)),Date.now()-l>Gr)throw new Error(`Took over ${Math.floor(Gr/1e3)} seconds for the vir-resizable-image iframe's content window to appear for '${s.imageUrl}'`);a++}await Ue({message:{type:X.Ready},imageUrl:s.imageUrl,getMessageContext:()=>Ee(r)??void 0}),await Ue({message:{type:X.ForceSize,data:i},imageUrl:s.imageUrl,getMessageContext:()=>Ee(r)??void 0});const u=o??await Ue({message:{type:X.SendSize},imageUrl:s.imageUrl,getMessageContext:()=>Ee(r)??void 0,verifyData:c=>!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height});await zo({updateState:t,min:e,max:n,imageDimensions:u,host:r,imageData:s,forcedFinalImageSize:i})}async function zo({updateState:t,min:e,max:n,imageDimensions:r,host:s,imageData:i,forcedFinalImageSize:o}){const l=s.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const a=Vs({min:e,max:n,box:o??r});l.style.width=Q(Math.floor(a.width)),l.style.height=Q(Math.floor(a.height));const u=qs({min:e,max:n,box:a});a.height<u.height?t({shouldVerticallyCenter:!0}):t({shouldVerticallyCenter:!1}),s.style.width=Q(u.width),s.style.height=Q(u.height);const c=Ws({min:e,max:n,box:o??r});if(c>3?await Ue({message:{type:X.SendScalingMethod,data:"pixelated"},imageUrl:i.imageUrl,getMessageContext:()=>Ee(s)??void 0}):await Ue({message:{type:X.SendScalingMethod,data:"default"},imageUrl:i.imageUrl,getMessageContext:()=>Ee(s)??void 0}),i.imageType===Xt.Html){const h=o?{width:o.width/r.width,height:o.height/r.height}:{width:1,height:1},d={width:c*h.width,height:c*h.height};await Ue({message:{type:X.SendScale,data:d},imageUrl:i.imageUrl,getMessageContext:()=>Ee(s)??void 0})}}var Yr=Object.freeze,Bo=Object.defineProperty,Jr=(t,e)=>Yr(Bo(t,"raw",{value:Yr(e||t.slice())})),Xr,Qr;function Io(t,e,n){const r=Math.random(),s=Y(Xr||(Xr=Jr([`
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
    `])),t.imageType,n??"",In.FromChild,In.FromChild,X.Ready,X.SendScale,X.SendScalingMethod,X.SendSize,X.ForceSize),i=Y(Qr||(Qr=Jr([`
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
    `])),t.imageType.toLowerCase(),r,e??"",s);return ys(wt(i)).replace(String(r),`
${t.templateString}
`)}const Ko={imageData:Os(),shouldVerticallyCenter:!1,settled:!1},Zr=Y`
    <div class="click-cover"></div>
`,ct=Ds()({tagName:"vir-resizable-image",stateInit:Ko,hostClasses:{verticallyCenter:({state:t})=>t.shouldVerticallyCenter},events:{settled:zn(),errored:zn()},styles:({hostClassSelectors:t})=>lt`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
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
            z-index: 100;
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

        .loading-wrapper {
            position: absolute;
            z-index: 200;
            background-color: inherit;
            transition: 500ms;
            opacity: 1;
            pointer-events: none;
        }

        .hide-loading-wrapper {
            opacity: 0;
        }

        iframe {
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }
    `,renderCallback:({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i})=>{function o(f){n({settled:f}),s(new i.settled(f))}n({imageData:{createPromise:async()=>{o(!1),n({shouldVerticallyCenter:!1});try{return Wr(e.imageUrl,!!e.blockAutoPlay)}catch{await ln(1e3);try{return Wr(e.imageUrl,!!e.blockAutoPlay)}catch(y){throw s(new i.errored(Wt(y))),y}}},trigger:{...bs(e,f=>f!=="extraHtml")}}});const l=e.min&&e.max?qs({box:e.min,max:e.max}):e.min,a=e.max,u=e.forcedOriginalImageSize?Vs({min:l,max:a,box:e.forcedOriginalImageSize}):void 0,c=Bn(t.imageData,"",f=>(e.forcedOriginalImageSize,Y`
                    <iframe
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${Io(f,e.extraHtml,e.htmlSizeQuerySelector)}
                        ${go(async()=>{try{await jo({updateState:n,min:l,max:a,host:r,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:u}),o(!0)}catch(y){console.error(y)}})}
                    ></iframe>
                    <slot name="loaded"></slot>
                `),f=>(s(new i.errored(Wt(f))),Y`
                    <div class="error-wrapper">
                        <slot name="error">${cn(f)}</slot>
                    </div>
                `)),h=Bn(t.imageData,Zr,f=>[Xt.Html,Xt.Video].includes(f.imageType)?"":Zr,()=>""),d=t.imageData instanceof Error?lt`
                      max-width: 100%;
                      max-height: 100%;
                  `:u?lt`
                      width: ${u.width}px;
                      height: ${u.height}px;
                  `:"";return Y`
            <div
                class=${To({"loading-wrapper":!0,"hide-loading-wrapper":t.settled})}
            >
                <slot name="loading">Loading...</slot>
            </div>
            <div class="frame-constraint" style=${d}>${c}</div>
            ${h}
        `}}),R=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,j=Object.keys,L=Array.isArray;function F(t,e){return typeof e!="object"||j(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||R.Promise||(R.Promise=Promise);const bt=Object.getPrototypeOf,Lo={}.hasOwnProperty;function J(t,e){return Lo.call(t,e)}function Je(t,e){typeof e=="function"&&(e=e(bt(t))),(typeof Reflect>"u"?j:Reflect.ownKeys)(e).forEach(n=>{ae(t,n,e[n])})}const Ys=Object.defineProperty;function ae(t,e,n,r){Ys(t,e,F(n&&J(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function He(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ae(t.prototype,"constructor",t),{extend:Je.bind(null,t.prototype)}}}}const Uo=Object.getOwnPropertyDescriptor;function pr(t,e){let n;return Uo(t,e)||(n=bt(t))&&pr(n,e)}const Ho=[].slice;function Qt(t,e,n){return Ho.call(t,e,n)}function Js(t,e){return e(t)}function rt(t){if(!t)throw new Error("Assertion Failed")}function Xs(t){R.setImmediate?setImmediate(t):setTimeout(t,0)}function Qs(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function le(t,e){if(J(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=le(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var l=t[e.substr(0,o)];return l===void 0?void 0:le(l,e.substr(o+1))}}function Z(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){rt(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Z(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),l=e.substr(i+1);if(l==="")n===void 0?L(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var a=t[o];a&&J(t,o)||(a=t[o]={}),Z(a,l,n)}}else n===void 0?L(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function Zs(t){var e={};for(var n in t)J(t,n)&&(e[n]=t[n]);return e}const Fo=[].concat;function ei(t){return Fo.apply([],t)}const ti="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ei([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>R[t]),qo=ti.map(t=>R[t]);Qs(ti,t=>[t,!0]);let de=null;function At(t){de=typeof WeakMap<"u"&&new WeakMap;const e=Kn(t);return de=null,e}function Kn(t){if(!t||typeof t!="object")return t;let e=de&&de.get(t);if(e)return e;if(L(t)){e=[],de&&de.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Kn(t[n]))}else if(qo.indexOf(t.constructor)>=0)e=t;else{const i=bt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),de&&de.set(t,e),t)J(t,s)&&(e[s]=Kn(t[s]))}return e}const{toString:Vo}={};function Ln(t){return Vo.call(t).slice(8,-1)}const Un=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Wo=typeof Un=="symbol"?function(t){var e;return t!=null&&(e=t[Un])&&e.apply(t)}:function(){return null},Ie={};function ie(t){var e,n,r,s;if(arguments.length===1){if(L(t))return t.slice();if(this===Ie&&typeof t=="string")return[t];if(s=Wo(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const gr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var ne=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ni(t,e){ne=t,ri=e}var ri=()=>!0;const Go=!new Error("").stack;function Re(){if(Go)try{throw Re.arguments,new Error}catch(t){return t}return new Error}function Hn(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(ri).map(r=>`
`+r).join("")):""}var si=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],yr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(si),Yo={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Fe(t,e){this._e=Re(),this.name=t,this.message=e}function ii(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Zt(t,e,n,r){this._e=Re(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=ii(t,e)}function ut(t,e){this._e=Re(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=ii(t,e)}He(Fe).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Hn(this._e,2))}},toString:function(){return this.name+": "+this.message}}),He(Zt).from(Fe),He(ut).from(Fe);var vr=yr.reduce((t,e)=>(t[e]=e+"Error",t),{});const Jo=Fe;var C=yr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Re(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Yo[e]||n,this.inner=null)}return He(r).from(Jo),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var es=si.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Kt=yr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function _t(t){return t}function Xo(t,e){return t==null||t===_t?e:function(n){return e(t(n))}}function Te(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Qo(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Te(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Te(s,this.onerror):s),i!==void 0?i:n}}function Zo(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Te(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Te(r,this.onerror):r)}}function ea(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);F(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Te(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Te(i,this.onerror):i),r===void 0?o===void 0?void 0:o:F(r,o)}}function ta(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function wr(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Kt.ModifyError=Zt,Kt.DexieError=Fe,Kt.BulkError=ut;var xt={};const[Fn,en,qn]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,bt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,bt(e),t]})(),oi=en&&en.then,Lt=Fn&&Fn.constructor,br=!!qn;var Vn=!1,na=qn?()=>{qn.then(Ot)}:R.setImmediate?setImmediate.bind(null,Ot):R.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Ot(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Ot,0)},ht=function(t,e){st.push([t,e]),tn&&(na(),tn=!1)},Wn=!0,tn=!0,Ae=[],Ut=[],Gn=null,Yn=_t,qe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ns,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{ns(t[0],t[1])}catch{}})}},A=qe,st=[],Ce=0,Ht=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(ne&&(this._stackHolder=Re(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==xt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Xn(this,this._value))}this._state=null,this._value=null,++e.ref,li(this,t)}const Jn={get:function(){var t=A,e=nn;function n(r,s){var i=!t.global&&(t!==A||e!==nn);const o=i&&!ue();var l=new S((a,u)=>{_r(this,new ai(rn(r,t,i,o),rn(s,t,i,o),a,u,t))});return ne&&hi(l,this),l}return n.prototype=xt,n},set:function(t){ae(this,"then",t&&t.prototype===xt?Jn:{get:function(){return t},set:Jn.set})}};function ai(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function li(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Ct();n&&typeof n.then=="function"?li(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,ci(t)),r&&kt()}},Xn.bind(null,t))}catch(n){Xn(t,n)}}function Xn(t,e){if(Ut.push(e),t._state===null){var n=t._lib&&Ct();e=Yn(e),t._state=!1,t._value=e,ne&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=pr(e,"stack");e._promise=t,ae(e,"stack",{get:()=>Vn?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ae.some(s=>s._value===r._value)||Ae.push(r)}(t),ci(t),n&&kt()}}function ci(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)_r(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ce===0&&(++Ce,ht(()=>{--Ce==0&&xr()},[]))}function _r(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ce,ht(ra,[n,t,e])}else t._listeners.push(e)}function ra(t,e,n){try{Gn=e;var r,s=e._value;e._state?r=t(s):(Ut.length&&(Ut=[]),r=t(s),Ut.indexOf(s)===-1&&function(i){for(var o=Ae.length;o;)if(Ae[--o]._value===i._value)return void Ae.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Gn=null,--Ce==0&&xr(),--n.psd.ref||n.psd.finalize()}}function ui(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=Hn(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return ne&&((r=Hn(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&ui(t._prev,e,n)),e}function hi(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Ot(){Ct()&&kt()}function Ct(){var t=Wn;return Wn=!1,tn=!1,t}function kt(){var t,e,n;do for(;st.length>0;)for(t=st,st=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(st.length>0);Wn=!0,tn=!0}function xr(){var t=Ae;Ae=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Ht.slice(0),n=e.length;n;)e[--n]()}function Rt(t){return new S(xt,!1,t)}function N(t,e){var n=A;return function(){var r=Ct(),s=A;try{return ge(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{ge(s,!1),r&&kt()}}}Je(S.prototype,{then:Jn,_then:function(t,e){_r(this,new ai(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Rt(r)):this.then(null,r=>r&&r.name===e?n(r):Rt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Rt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Vn=!0;var t=ui(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Vn=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ae(S.prototype,Symbol.toStringTag,"Dexie.Promise"),qe.env=di(),Je(S,{all:function(){var t=ie.apply(null,arguments).map(Nt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(xt,!0,t);return hi(e,Gn),e},reject:Rt,race:function(){var t=ie.apply(null,arguments).map(Nt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>nn},newPSD:pe,usePSD:Qe,scheduler:{get:()=>ht,set:t=>{ht=t}},rejectionMapper:{get:()=>Yn,set:t=>{Yn=t}},follow:(t,e)=>new S((n,r)=>pe((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Te(function(){(function(l){function a(){l(),Ht.splice(Ht.indexOf(a),1)}Ht.push(a),++Ce,ht(()=>{--Ce==0&&xr()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Lt&&(Lt.allSettled&&ae(S,"allSettled",function(){const t=ie.apply(null,arguments).map(Nt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Lt.any&&typeof AggregateError<"u"&&ae(S,"any",function(){const t=ie.apply(null,arguments).map(Nt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(l=>e(l),l=>{s[o]=l,--r||n(new AggregateError(s))}))})}));const K={awaits:0,echoes:0,id:0};var sa=0,Ft=[],En=0,nn=0,ia=0;function pe(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++ia;var o=qe.env;i.env=br?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:ts(o.nthen,i),gthen:ts(o.gthen,i)}:{},e&&F(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var l=Qe(i,t,n,r);return i.ref===0&&i.finalize(),l}function Xe(){return K.id||(K.id=++sa),++K.awaits,K.echoes+=100,K.id}function ue(){return!!K.awaits&&(--K.awaits==0&&(K.id=0),K.echoes=100*K.awaits,!0)}function Nt(t){return K.echoes&&t&&t.constructor===Lt?(Xe(),t.then(e=>(ue(),e),e=>(ue(),z(e)))):t}function oa(t){++nn,K.echoes&&--K.echoes!=0||(K.echoes=K.id=0),Ft.push(A),ge(t,!0)}function aa(){var t=Ft[Ft.length-1];Ft.pop(),ge(t,!1)}function ge(t,e){var n=A;if((e?!K.echoes||En++&&t===A:!En||--En&&t===A)||fi(e?oa.bind(null,t):aa),t!==A&&(A=t,n===qe&&(qe.env=di()),br)){var r=qe.env.Promise,s=t.env;en.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(R,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function di(){var t=R.Promise;return br?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(R,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:en.then,gthen:t.prototype.then}:{}}function Qe(t,e,n,r,s){var i=A;try{return ge(t,!0),e(n,r,s)}finally{ge(i,!1)}}function fi(t){oi.call(Fn,t)}function rn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&Xe(),ge(e,!0);try{return t.apply(this,arguments)}finally{ge(s,!1),r&&fi(ue)}}}function ts(t,e){return function(n,r){return t.call(this,rn(n,e),rn(r,e))}}(""+oi).indexOf("[native code]")===-1&&(Xe=ue=T);function ns(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(R.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),F(r,s)):R.CustomEvent&&F(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&R.dispatchEvent&&(dispatchEvent(r),!R.PromiseRejectionEvent&&R.onunhandledrejection))try{R.onunhandledrejection(r)}catch{}ne&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var z=S.reject;function Qn(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===vr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Qn(t,e,n,r))):z(i)}return s._promise(e,(i,o)=>pe(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return z(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return z(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>Qn(t,e,n,r))}const $e=String.fromCharCode(65535),re="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",dt=[],mn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),la=mn,ca=mn,mi=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Oe(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const pi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Dt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=At(e))[t],e)}class ua{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(a,u,c){if(!c.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(c.idbtrans,c)}const l=Ct();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):pe(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Qn(this.db,e,[this.name],o)}finally{l&&kt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(L(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=j(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)&&u.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==$e)return this.where(r.name).equals(r.keyPath.map(u=>e[u]));!r&&ne&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(u,c){try{return i.cmp(u,c)===0}catch{return!1}}const[l,a]=n.reduce(([u,c],h)=>{const d=s[h],f=e[h];return[u||d,u||!d?Oe(c,d&&d.multi?y=>{const m=le(y,h);return L(m)&&m.some(v=>o(f,v))}:y=>o(f,le(y,h))):c]},[null,null]);return l?this.where(l.name).equals(e[l.keyPath]).filter(a):r?this.filter(a):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,L(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(J(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){F(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Dt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||L(e))return this.where(":id").equals(e).modify(n);{const r=le(e,this.schema.primKey.keyPath);if(r===void 0)return z(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?j(n).forEach(s=>{Z(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Dt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:pi})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=a&&l?e.map(Dt(a)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:y})=>{if(h===0)return i?d:f;throw new ut(`${this.name}.bulkAdd(): ${h} of ${u} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=a&&l?e.map(Dt(a)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:y})=>{if(h===0)return i?d:f;throw new ut(`${this.name}.bulkPut(): ${h} of ${u} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new ut(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function ft(t){var e={},n=function(l,a){if(a){for(var u=arguments.length,c=new Array(u-1);--u;)c[u-1]=arguments[u];return e[l].subscribe.apply(null,c),t}if(typeof l=="string")return e[l]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(l,a,u){if(typeof l=="object")return o(l);a||(a=ta),u||(u=T);var c={subscribers:[],fire:u,subscribe:function(h){c.subscribers.indexOf(h)===-1&&(c.subscribers.push(h),c.fire=a(c.fire,h))},unsubscribe:function(h){c.subscribers=c.subscribers.filter(function(d){return d!==h}),c.fire=c.subscribers.reduce(a,u)}};return e[l]=n[l]=c,c}function o(l){j(l).forEach(function(a){var u=l[a];if(L(u))i(a,l[a][0],l[a][1]);else{if(u!=="asap")throw new C.InvalidArgument("Invalid event config");var c=i(a,_t,function(){for(var h=arguments.length,d=new Array(h);h--;)d[h]=arguments[h];c.subscribers.forEach(function(f){Xs(function(){f.apply(null,d)})})})}})}}function tt(t,e){return He(e).from({prototype:t}),e}function Me(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function $n(t,e){t.filter=Oe(t.filter,e)}function An(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Oe(r(),e()):e,t.justLimit=n&&!r}function qt(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function rs(t,e,n){const r=qt(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Mt(t,e,n,r){const s=t.replayFilter?Oe(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(l,a,u)=>{if(!s||s(a,u,d=>a.stop(d),d=>a.fail(d))){var c=a.primaryKey,h=""+c;h==="[object ArrayBuffer]"&&(h=""+new Uint8Array(c)),J(i,h)||(i[h]=!0,e(l,a,u))}};return Promise.all([t.or._iterate(o,n),ss(rs(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return ss(rs(t,r,n),Oe(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function ss(t,e,n,r){var s=N(r?(i,o,l)=>n(r(i),o,l):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,l=>o=l,l=>{i.stop(l),o=T},l=>{i.fail(l),o=T})||s(i.value,i,l=>o=l),o()})})}function H(t,e){try{const n=is(t),r=is(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let u=0;u<a;++u)if(s[u]!==i[u])return s[u]<i[u]?-1:1;return o===l?0:o<l?-1:1}(os(t),os(e));case"Array":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let u=0;u<a;++u){const c=H(s[u],i[u]);if(c!==0)return c}return o===l?0:o<l?-1:1}(t,e)}}catch{}return NaN}function is(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=Ln(t);return n==="ArrayBuffer"?"binary":n}function os(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class ha{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,z.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,z.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Oe(n.algorithm,e)}_iterate(e,n){return Mt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&F(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Mt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(Me(r,!0))return s.count({trans:n,query:{index:qt(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Mt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[s]}var l=this._ctx.dir==="next"?1:-1;function a(u,c){var h=o(u,i),d=o(c,i);return h<d?-l:h>d?l:0}return this.toArray(function(u){return u.sort(a)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&Me(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=qt(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Mt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,Me(n)?An(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):An(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),An(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return $n(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return $n(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Oe(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&Me(n,!0)&&n.limit>0)return this._read(s=>{var i=qt(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return $n(this._ctx,function(s){var i=s.primaryKey.toString(),o=J(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=j(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var g=i[p],b=e[g];le(m,g)!==b&&(Z(m,g,b),v=!0)}return v}}const l=n.table.core,{outbound:a,extractKey:u}=l.schema.primaryKey,c=this.db._options.modifyChunkSize||200,h=[];let d=0;const f=[],y=(m,v)=>{const{failures:p,numFailures:g}=v;d+=m-g;for(let b of j(p))h.push(p[b])};return this.clone().primaryKeys().then(m=>{const v=p=>{const g=Math.min(c,m.length-p);return l.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(b=>{const $=[],x=[],w=a?[]:null,_=[];for(let E=0;E<g;++E){const O=b[E],D={value:At(O),primKey:m[p+E]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(m[p+E]):a||H(u(O),u(D.value))===0?(x.push(D.value),a&&w.push(m[p+E])):(_.push(m[p+E]),$.push(D.value)))}const k=Me(n)&&n.limit===1/0&&(typeof e!="function"||e===Cn)&&{index:n.index,range:n.range};return Promise.resolve($.length>0&&l.mutate({trans:r,type:"add",values:$}).then(E=>{for(let O in E.failures)_.splice(parseInt(O),1);y($.length,E)})).then(()=>(x.length>0||k&&typeof e=="object")&&l.mutate({trans:r,type:"put",keys:w,values:x,criteria:k,changeSpec:typeof e!="function"&&e}).then(E=>y(x.length,E))).then(()=>(_.length>0||k&&e===Cn)&&l.mutate({trans:r,type:"delete",keys:_,criteria:k}).then(E=>y(_.length,E))).then(()=>m.length>p+g&&v(p+c))})};return v(0).then(()=>{if(h.length>0)throw new Zt("Error modifying one or more objects",h,d,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return Me(e)&&(e.isPrimKey&&!ca||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:l,lastResult:a,results:u,numFailures:c})=>{if(c)throw new Zt("Could not delete some values",Object.keys(l).map(h=>l[h]),o-c);return o-c}))}):this.modify(Cn)}}const Cn=(t,e)=>e.value=null;function da(t,e){return t<e?-1:t===e?0:1}function fa(t,e){return t>e?-1:t===e?0:1}function W(t,e,n){var r=t instanceof yi?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function je(t){return new t.Collection(t,()=>gi("")).limit(0)}function ma(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),l=-1,a=0;a<o;++a){var u=e[a];if(u!==r[a])return s(t[a],n[a])<0?t.substr(0,a)+n[a]+n.substr(a+1):s(t[a],r[a])<0?t.substr(0,a)+r[a]+n.substr(a+1):l>=0?t.substr(0,l)+e[l]+n.substr(l+1):null;s(t[a],u)<0&&(l=a)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):l<0?null:t.substr(0,l)+r[l]+n.substr(l+1)}function jt(t,e,n,r){var s,i,o,l,a,u,c,h=n.length;if(!n.every(m=>typeof m=="string"))return W(t,"String expected.");function d(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?da:fa;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});l=v.map(function(p){return p.upper}),a=v.map(function(p){return p.lower}),u=m,c=m==="next"?"":r}d("next");var f=new t.Collection(t,()=>he(l[0],a[h-1]+r));f._ondirectionchange=function(m){d(m)};var y=0;return f._addAlgorithm(function(m,v,p){var g=m.key;if(typeof g!="string")return!1;var b=i(g);if(e(b,a,y))return!0;for(var $=null,x=y;x<h;++x){var w=ma(g,b,l[x],a[x],o,u);w===null&&$===null?y=x+1:($===null||o($,w)>0)&&($=w)}return v($!==null?function(){m.continue($+c)}:p),!1}),f}function he(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function gi(t){return{type:1,lower:t,upper:t}}class yi{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?je(this):new this.Collection(this,()=>he(e,n,!r,!s))}catch{return W(this,re)}}equals(e){return e==null?W(this,re):new this.Collection(this,()=>gi(e))}above(e){return e==null?W(this,re):new this.Collection(this,()=>he(e,void 0,!0))}aboveOrEqual(e){return e==null?W(this,re):new this.Collection(this,()=>he(e,void 0,!1))}below(e){return e==null?W(this,re):new this.Collection(this,()=>he(void 0,e,!1,!0))}belowOrEqual(e){return e==null?W(this,re):new this.Collection(this,()=>he(void 0,e))}startsWith(e){return typeof e!="string"?W(this,"String expected."):this.between(e,e+$e,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):jt(this,(n,r)=>n.indexOf(r[0])===0,[e],$e)}equalsIgnoreCase(e){return jt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ie.apply(Ie,arguments);return e.length===0?je(this):jt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ie.apply(Ie,arguments);return e.length===0?je(this):jt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,$e)}anyOf(){const e=ie.apply(Ie,arguments);let n=this._cmp;try{e.sort(n)}catch{return W(this,re)}if(e.length===0)return je(this);const r=new this.Collection(this,()=>he(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,l)=>{const a=i.key;for(;n(a,e[s])>0;)if(++s,s===e.length)return o(l),!1;return n(a,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ie.apply(Ie,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return W(this,re)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,l=this._max;if(e.length===0)return je(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return W(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const a=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,h=s;function d(g,b){return h(g[0],b[0])}try{c=e.reduce(function(g,b){let $=0,x=g.length;for(;$<x;++$){const w=g[$];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=l(w[1],b[1]);break}}return $===x&&g.push(b),g},[]),c.sort(d)}catch{return W(this,re)}let f=0;const y=u?g=>s(g,c[f][1])>0:g=>s(g,c[f][1])>=0,m=a?g=>i(g,c[f][0])>0:g=>i(g,c[f][0])>=0;let v=y;const p=new this.Collection(this,()=>he(c[0][0],c[c.length-1][1],!a,!u));return p._ondirectionchange=g=>{g==="next"?(v=y,h=s):(v=m,h=i),c.sort(d)},p._addAlgorithm((g,b,$)=>{for(var x=g.key;v(x);)if(++f,f===c.length)return b($),!1;return!!function(w){return!y(w)&&!m(w)}(x)||(this._cmp(x,c[f][1])===0||this._cmp(x,c[f][0])===0||b(()=>{h===s?g.continue(c[f][0]):g.continue(c[f][1])}),!1)}),p}startsWithAnyOf(){const e=ie.apply(Ie,arguments);return e.every(n=>typeof n=="string")?e.length===0?je(this):this.inAnyRange(e.map(n=>[n,n+$e])):W(this,"startsWithAnyOf() only works with strings")}}function ee(t){return N(function(e){return St(e),t(e.target.error),!1})}function St(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const ye=ft(null,"storagemutated");class pa{_lock(){return rt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(rt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{Qe(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(rt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return rt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{St(s),this._reject(e.error)}),e.onabort=N(s=>{St(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&ye.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return z(new C.ReadOnly("Transaction is readonly"));if(!this.active)return z(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return pe(()=>{var i=new S((o,l)=>{this._lock();const a=n(o,l,this);a&&a.then&&a.then(o,l)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var l=n(i,o,this);l&&l.then&&l.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,l)=>{r.then(a=>n._waitingQueue.push(N(o.bind(null,a))),a=>n._waitingQueue.push(N(l.bind(null,a)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(J(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Zn(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+vi(e)}}function vi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function wi(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:Qs(n,r=>[r.name,r])}}let Et=t=>{try{return t.only([[]]),Et=()=>[[]],[[]]}catch{return Et=()=>$e,$e}};function er(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>le(n,e)}(t):e=>le(e,t)}function as(t){return[].slice.call(t)}let ga=0;function mt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function ya(t,e,n){function r(a){if(a.type===3)return null;if(a.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:h,upperOpen:d}=a;return u===void 0?c===void 0?null:e.upperBound(c,!!d):c===void 0?e.lowerBound(u,!!h):e.bound(u,c,!!h,!!d)}const{schema:s,hasGetAll:i}=function(a,u){const c=as(a.objectStoreNames);return{schema:{name:a.name,tables:c.map(h=>u.objectStore(h)).map(h=>{const{keyPath:d,autoIncrement:f}=h,y=L(d),m=d==null,v={},p={name:h.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:d,autoIncrement:f,unique:!0,extractKey:er(d)},indexes:as(h.indexNames).map(g=>h.index(g)).map(g=>{const{name:b,unique:$,multiEntry:x,keyPath:w}=g,_={name:b,compound:L(w),keyPath:w,unique:$,multiEntry:x,extractKey:er(w)};return v[mt(w)]=_,_}),getIndexByKeyPath:g=>v[mt(g)]};return v[":id"]=p.primaryKey,d!=null&&(v[mt(d)]=p.primaryKey),p})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(a=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:h,type:d,keys:f,values:y,range:m}){return new Promise((v,p)=>{v=N(v);const g=h.objectStore(c),b=g.keyPath==null,$=d==="put"||d==="add";if(!$&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:x}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],k=[];let E=0;const O=U=>{++E,St(U)};if(d==="deleteRange"){if(m.type===4)return v({numFailures:E,failures:k,results:[],lastResult:void 0});m.type===3?_.push(w=g.clear()):_.push(w=g.delete(r(m)))}else{const[U,I]=$?b?[y,f]:[y,null]:[f,null];if($)for(let M=0;M<x;++M)_.push(w=I&&I[M]!==void 0?g[d](U[M],I[M]):g[d](U[M])),w.onerror=O;else for(let M=0;M<x;++M)_.push(w=g[d](U[M])),w.onerror=O}const D=U=>{const I=U.target.result;_.forEach((M,Ne)=>M.error!=null&&(k[Ne]=M.error)),v({numFailures:E,failures:k,results:d==="delete"?f:_.map(M=>M.result),lastResult:I})};w.onerror=U=>{O(U),D(U)},w.onsuccess=D})},getMany:({trans:h,keys:d})=>new Promise((f,y)=>{f=N(f);const m=h.objectStore(c),v=d.length,p=new Array(v);let g,b=0,$=0;const x=_=>{const k=_.target;p[k._pos]=k.result,++$===b&&f(p)},w=ee(y);for(let _=0;_<v;++_)d[_]!=null&&(g=m.get(d[_]),g._pos=_,g.onsuccess=x,g.onerror=w,++b);b===0&&f(p)}),get:({trans:h,key:d})=>new Promise((f,y)=>{f=N(f);const m=h.objectStore(c).get(d);m.onsuccess=v=>f(v.target.result),m.onerror=ee(y)}),query:function(h){return d=>new Promise((f,y)=>{f=N(f);const{trans:m,values:v,limit:p,query:g}=d,b=p===1/0?void 0:p,{index:$,range:x}=g,w=m.objectStore(c),_=$.isPrimaryKey?w:w.index($.name),k=r(x);if(p===0)return f({result:[]});if(h){const E=v?_.getAll(k,b):_.getAllKeys(k,b);E.onsuccess=O=>f({result:O.target.result}),E.onerror=ee(y)}else{let E=0;const O=v||!("openKeyCursor"in _)?_.openCursor(k):_.openKeyCursor(k),D=[];O.onsuccess=U=>{const I=O.result;return I?(D.push(v?I.value:I.primaryKey),++E===p?f({result:D}):void I.continue()):f({result:D})},O.onerror=ee(y)}})}(i),openCursor:function({trans:h,values:d,query:f,reverse:y,unique:m}){return new Promise((v,p)=>{v=N(v);const{index:g,range:b}=f,$=h.objectStore(c),x=g.isPrimaryKey?$:$.index(g.name),w=y?m?"prevunique":"prev":m?"nextunique":"next",_=d||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=ee(p),_.onsuccess=N(k=>{const E=_.result;if(!E)return void v(null);E.___id=++ga,E.done=!1;const O=E.continue.bind(E);let D=E.continuePrimaryKey;D&&(D=D.bind(E));const U=E.advance.bind(E),I=()=>{throw new Error("Cursor not stopped")};E.trans=h,E.stop=E.continue=E.continuePrimaryKey=E.advance=()=>{throw new Error("Cursor not started")},E.fail=N(p),E.next=function(){let M=1;return this.start(()=>M--?this.continue():this.stop()).then(()=>this)},E.start=M=>{const Ne=new Promise((q,ve)=>{q=N(q),_.onerror=ee(ve),E.fail=ve,E.stop=Ze=>{E.stop=E.continue=E.continuePrimaryKey=E.advance=I,q(Ze)}}),De=()=>{if(_.result)try{M()}catch(q){E.fail(q)}else E.done=!0,E.start=()=>{throw new Error("Cursor behind last entry")},E.stop()};return _.onsuccess=N(q=>{_.onsuccess=De,De()}),E.continue=O,E.continuePrimaryKey=D,E.advance=U,De(),Ne},v(E)},p)})},count({query:h,trans:d}){const{index:f,range:y}=h;return new Promise((m,v)=>{const p=d.objectStore(c),g=f.isPrimaryKey?p:p.index(f.name),b=r(y),$=b?g.count(b):g.count();$.onsuccess=N(x=>m(x.target.result)),$.onerror=ee(v)})}}}(a)),l={};return o.forEach(a=>l[a.name]=a),{stack:"dbcore",transaction:t.transaction.bind(t),table(a){if(!l[a])throw new Error(`Table '${a}' not found`);return l[a]},MIN_KEY:-1/0,MAX_KEY:Et(e),schema:s}}function tr({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:l},a){return{dbcore:function(c,h){return h.reduce((d,{create:f})=>({...d,...f(d)}),c)}(ya(i,o,a),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function sn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const l=pr(o,s);(!l||"value"in l&&l.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ae(o,s,{get(){return this.table(s)},set(a){Ys(this,s,{value:a,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function nr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function va(t,e){return t._cfg.version-e._cfg.version}function wa(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),l=A.transless||A;pe(()=>{A.trans=i,A.transless=l,e===0?(j(s).forEach(a=>{kn(n,a,s[a].primKey,s[a].indexes)}),tr(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:a},u,c,h){const d=[],f=a._versions;let y=a._dbSchema=sr(a,a.idbdb,h),m=!1;function v(){return d.length?S.resolve(d.shift()(c.idbtrans)).then(v):S.resolve()}return f.filter(p=>p._cfg.version>=u).forEach(p=>{d.push(()=>{const g=y,b=p._cfg.dbschema;ir(a,g,h),ir(a,b,h),y=a._dbSchema=b;const $=bi(g,b);$.add.forEach(w=>{kn(h,w[0],w[1].primKey,w[1].indexes)}),$.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=h.objectStore(w.name);w.add.forEach(k=>rr(_,k)),w.change.forEach(k=>{_.deleteIndex(k.name),rr(_,k)}),w.del.forEach(k=>_.deleteIndex(k))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>u){tr(a,h),c._memoizedTables={},m=!0;let w=Zs(b);$.del.forEach(O=>{w[O]=g[O]}),nr(a,[a.Transaction.prototype]),sn(a,[a.Transaction.prototype],j(w),w),c.schema=w;const _=gr(x);let k;_&&Xe();const E=S.follow(()=>{if(k=x(c),k&&_){var O=ue.bind(null,null);k.then(O,O)}});return k&&typeof k.then=="function"?S.resolve(k):E.then(()=>k)}}),d.push(g=>{(!m||!la)&&function(b,$){[].slice.call($.db.objectStoreNames).forEach(x=>b[x]==null&&$.db.deleteObjectStore(x))}(p._cfg.dbschema,g),nr(a,[a.Transaction.prototype]),sn(a,[a.Transaction.prototype],a._storeNames,a._dbSchema),c.schema=a._dbSchema})}),v().then(()=>{var p,g;g=h,j(p=y).forEach(b=>{g.db.objectStoreNames.contains(b)||kn(g,b,p[b].primKey,p[b].indexes)})})}(t,e,i,n).catch(o)})}function bi(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!mn)o.recreate=!0,n.change.push(o);else{const l=s.idxByName,a=i.idxByName;let u;for(u in l)a[u]||o.del.push(u);for(u in a){const c=l[u],h=a[u];c?c.src!==h.src&&o.change.push(h):o.add.push(h)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function kn(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>rr(s,i)),s}function rr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function sr(t,e,n){const r={};return Qt(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const l=Zn(vi(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),a=[];for(let c=0;c<i.indexNames.length;++c){const h=i.index(i.indexNames[c]);o=h.keyPath;var u=Zn(h.name,o,!!h.unique,!!h.multiEntry,!1,o&&typeof o!="string",!1);a.push(u)}r[s]=wi(s,l,a)}),r}function ir({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let l=0;l<o.indexNames.length;++l){const a=o.indexNames[l],u=o.index(a).keyPath,c=typeof u=="string"?u:"["+Qt(u).join("+")+"]";if(e[i]){const h=e[i].idxByName[c];h&&(h.name=a,delete e[i].idxByName[c],e[i].idxByName[a]=h)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&R.WorkerGlobalScope&&R instanceof R.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class ba{_parseStoresSpec(e,n){j(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,l)=>{const a=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(a)?a.match(/^\[(.*)\]$/)[1].split("+"):a;return Zn(a,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),L(u),l===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=wi(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?F(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{F(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,nr(n,[n._allTables,n,n.Transaction.prototype]),sn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],j(i),i),n._storeNames=j(i),this}upgrade(e){return this._cfg.contentUpgrade=wr(this._cfg.contentUpgrade||T,e),this}}function Sr(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new ke("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function Er(t){return t&&typeof t.databases=="function"}function or(t){return pe(function(){return A.letThrough=!0,t()})}function _a(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function xa(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?z(e.dbOpenError):t);ne&&(e.openCanceller._stackHolder=Re()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,l=!1;return S.race([r,(typeof navigator>"u"?S.resolve():_a()).then(()=>new S((a,u)=>{if(s(),!n)throw new C.MissingAPI;const c=t.name,h=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!h)throw new C.MissingAPI;h.onerror=ee(u),h.onblocked=N(t._fireOnBlocked),h.onupgradeneeded=N(d=>{if(o=h.transaction,e.autoSchema&&!t._options.allowEmptyDB){h.onerror=St,o.abort(),h.result.close();const y=n.deleteDatabase(c);y.onsuccess=y.onerror=N(()=>{u(new C.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=ee(u);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;l=f<1,t._novip.idbdb=h.result,wa(t,f/10,o,u)}},u),h.onsuccess=N(()=>{o=null;const d=t._novip.idbdb=h.result,f=Qt(d.objectStoreNames);if(f.length>0)try{const m=d.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},p,g){v.verno=p.version/10;const b=v._dbSchema=sr(0,p,g);v._storeNames=Qt(p.objectStoreNames,0),sn(v,[v._allTables],j(b),b)}(t,d,m):(ir(t,t._dbSchema,m),function(v,p){const g=bi(sr(0,v.idbdb,p),v._dbSchema);return!(g.add.length||g.change.some(b=>b.add.length||b.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),tr(t,m)}catch{}var y;dt.push(t),d.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),d.onclose=N(m=>{t.on("close").fire(m)}),l&&function({indexedDB:m,IDBKeyRange:v},p){!Er(m)&&p!=="__dbnames"&&Sr(m,v).put({name:p}).catch(T)}(t._deps,c),a()},u)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(or(()=>t.on.ready.fire(t.vip))).then(function a(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.reduce(wr,T);return e.onReadyBeingFired=[],S.resolve(or(()=>u(t.vip))).then(a)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(a=>{e.dbOpenError=a;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),z(a)}).finally(()=>{e.openComplete=!0,i()})}function ar(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var l=i(o),a=l.value;return l.done?a:a&&typeof a.then=="function"?a.then(n,r):L(a)?Promise.all(a).then(n,r):n(a)}}return s(e)()}function Sa(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=ei(s);return[t,i,n]}function _i(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),l={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(h){return h.name===vr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>_i(t,e,n,null,s))):z(h)}const a=gr(s);let u;a&&Xe();const c=S.follow(()=>{if(u=s.call(o,o),u)if(a){var h=ue.bind(null,null);u.then(h,h)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=ar(u))},l);return(u&&typeof u.then=="function"?S.resolve(u).then(h=>o.active?h:z(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(h=>(r&&o._resolve(),o._completion.then(()=>h))).catch(h=>(o._reject(h),z(h)))})}function zt(t,e,n){const r=L(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Ea={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(c,h,d){const f=mt(c),y=s[f]=s[f]||[],m=c==null?0:typeof c=="string"?1:c.length,v=h>0,p={...d,isVirtual:v,keyTail:h,keyLength:m,extractKey:er(c),unique:!v&&d.unique};return y.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?c[0]:c.slice(0,m-1),h+1,d),y.sort((g,b)=>g.keyTail-b.keyTail),p}const l=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[l];for(const c of r.indexes)o(c.keyPath,0,c);function a(c){const h=c.query.index;return h.isVirtual?{...c,query:{index:h,range:(d=c.query.range,f=h.keyTail,{type:d.type===1?2:d.type,lower:zt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:zt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var d,f}return{...n,schema:{...r,primaryKey:l,indexes:i,getIndexByKeyPath:function(c){const h=s[mt(c)];return h&&h[0]}},count:c=>n.count(a(c)),query:c=>n.query(a(c)),openCursor(c){const{keyTail:h,isVirtual:d,keyLength:f}=c.query.index;return d?n.openCursor(a(c)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(zt(p,c.reverse?t.MAX_KEY:t.MIN_KEY,h)):c.unique?m.continue(m.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,h)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(zt(p,t.MAX_KEY,h),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(c)}}}}}};function $r(t,e,n,r){return n=n||{},r=r||"",j(t).forEach(s=>{if(J(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const l=Ln(i);l!==Ln(o)?n[r+s]=e[s]:l==="Object"?$r(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),j(e).forEach(s=>{J(t,s)||(n[r+s]=e[s])}),n}const $a={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:l,creating:a,updating:u}=o.table(e).hook;switch(i.type){case"add":if(a.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"put":if(a.fire===T&&u.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"delete":if(l.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"deleteRange":if(l.fire===T)break;return o._promise("readwrite",()=>function(d){return h(d.trans,d.range,1e4)}(i),!0)}return n.mutate(i);function c(d){const f=A.trans,y=d.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,d);if(!y)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:y}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,d,y).then(m=>{const v=y.map((p,g)=>{const b=m[g],$={onerror:null,onsuccess:null};if(d.type==="delete")l.fire.call($,p,b,f);else if(d.type==="add"||b===void 0){const x=a.fire.call($,p,d.values[g],f);p==null&&x!=null&&(p=x,d.keys[g]=p,r.outbound||Z(d.values[g],r.keyPath,p))}else{const x=$r(b,d.values[g]),w=u.fire.call($,x,p,b,f);if(w){const _=d.values[g];Object.keys(w).forEach(k=>{J(_,k)?_[k]=w[k]:Z(_,k,w[k])})}}return $});return n.mutate(d).then(({failures:p,results:g,numFailures:b,lastResult:$})=>{for(let x=0;x<y.length;++x){const w=g?g[x]:y[x],_=v[x];w==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(d.type==="put"&&m[x]?d.values[x]:w)}return{failures:p,results:g,numFailures:b,lastResult:$}}).catch(p=>(v.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function h(d,f,y){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>c({type:"delete",keys:m,trans:d}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:h(d,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function xi(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)H(e.keys[s],t[i])===0&&(r.push(n?At(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Aa={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=xi(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?At(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Ar(t){return!("from"in t)}const se=function(t,e){if(!this){const n=new se;return t&&"d"in t&&F(n,t),n}F(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function $t(t,e,n){const r=H(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Ar(t))return F(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(H(n,t.from)<0)return s?$t(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},ls(t);if(H(e,t.to)>0)return i?$t(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},ls(t);H(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),H(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&on(t,s),i&&o&&on(t,i)}function on(t,e){Ar(e)||function n(r,{from:s,to:i,l:o,r:l}){$t(r,s,i),o&&n(r,o),l&&n(r,l)}(t,e)}function Ca(t,e){const n=lr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=lr(t);let o=i.next(s.from),l=o.value;for(;!r.done&&!o.done;){if(H(l.from,s.to)<=0&&H(l.to,s.from)>=0)return!0;H(s.from,l.from)<0?s=(r=n.next(l.from)).value:l=(o=i.next(s.from)).value}return!1}function lr(t){let e=Ar(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&H(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||H(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function ls(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},l=t[s];t.from=l.from,t.to=l.to,t[s]=l[s],o[s]=l[i],t[i]=o,o.d=cs(o)}t.d=cs(t)}function cs({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}Je(se.prototype,{add(t){return on(this,t),this},addKey(t){return $t(this,t,t),this},addKeys(t){return t.forEach(e=>$t(this,e,e)),this},[Un](){return lr(this)}});const ka={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new se(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:l,outbound:a}=o,u={...s,mutate:d=>{const f=d.trans,y=f.mutatedParts||(f.mutatedParts={}),m=w=>{const _=`idb://${e}/${r}/${w}`;return y[_]||(y[_]=new se)},v=m(""),p=m(":dels"),{type:g}=d;let[b,$]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const x=d.trans._cache;return s.mutate(d).then(w=>{if(L(b)){g!=="delete"&&(b=w.results),v.addKeys(b);const _=xi(b,x);_||g==="add"||p.addKeys(b),(_||$)&&function(k,E,O,D){function U(I){const M=k(I.name||"");function Ne(q){return q!=null?I.extractKey(q):null}const De=q=>I.multiEntry&&L(q)?q.forEach(ve=>M.addKey(ve)):M.addKey(q);(O||D).forEach((q,ve)=>{const Ze=O&&Ne(O[ve]),gn=D&&Ne(D[ve]);H(Ze,gn)!==0&&(Ze!=null&&De(Ze),gn!=null&&De(gn))})}E.indexes.forEach(U)}(m,i,_,$)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return w})}},c=({query:{index:d,range:f}})=>{var y,m;return[d,new se((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},h={get:d=>[o,new se(d.key)],getMany:d=>[o,new se().addKeys(d.keys)],count:c,query:c,openCursor:c};return j(h).forEach(d=>{u[d]=function(f){const{subscr:y}=A;if(y){const m=$=>{const x=`idb://${e}/${r}/${$}`;return y[x]||(y[x]=new se)},v=m(""),p=m(":dels"),[g,b]=h[d](f);if(m(g.name||"").add(b),!g.isPrimaryKey){if(d!=="count"){const $=d==="query"&&a&&f.values&&s.query({...f,values:!1});return s[d].apply(this,arguments).then(x=>{if(d==="query"){if(a&&f.values)return $.then(({result:_})=>(v.addKeys(_),x));const w=f.values?x.result.map(l):x.result;f.values?v.addKeys(w):p.addKeys(w)}else if(d==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const k=w.primaryKey;return p.addKey(k),k}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return x})}p.add(n)}}return s[d].apply(this,arguments)}}),u}}}};class ke{constructor(e,n){this._middlewares={},this.verno=0;const r=ke.dependencies;this._options=n={addons:ke.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(l=>{i.dbReadyResolve=l}),i.openCanceller=new S((l,a)=>{i.cancelOpen=a}),this._state=i,this.name=e,this.on=ft(this,"populate","blocked","versionchange","close",{ready:[wr,T]}),this.on.ready.subscribe=Js(this.on.ready.subscribe,l=>(a,u)=>{ke.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||S.resolve().then(a),u&&l(a);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(a),u&&l(a);else{l(a);const h=this;u||l(function d(){h.on.ready.unsubscribe(a),h.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,tt(ha.prototype,function(l,a){this.db=o;let u=pi,c=null;if(a)try{u=a()}catch(y){c=y}const h=l._ctx,d=h.table,f=d.hook.reading.fire;this._ctx={table:d,index:h.index,isPrimKey:!h.index||d.schema.primKey.keyPath&&h.index===d.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:h.or,valueMapper:f!==_t?f:null}})),this.Table=function(l){return tt(ua.prototype,function(a,u,c){this.db=l,this._tx=c,this.name=a,this.schema=u,this.hook=l._allTables[a]?l._allTables[a].hook:ft(null,{creating:[Qo,T],reading:[Xo,_t],updating:[ea,T],deleting:[Zo,T]})})}(this),this.Transaction=function(l){return tt(pa.prototype,function(a,u,c,h,d){this.db=l,this.mode=a,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=h,this.idbtrans=null,this.on=ft(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),z(f)})})}(this),this.Version=function(l){return tt(ba.prototype,function(a){this.db=l,this._cfg={version:a,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(l){return tt(yi.prototype,function(a,u,c){this.db=l,this._ctx={table:a,index:u===":id"?null:u,or:c};const h=l._deps.indexedDB;if(!h)throw new C.MissingAPI;this._cmp=this._ascending=h.cmp.bind(h),this._descending=(d,f)=>h.cmp(f,d),this._max=(d,f)=>h.cmp(d,f)>0?d:f,this._min=(d,f)=>h.cmp(d,f)<0?d:f,this._IDBKeyRange=l._deps.IDBKeyRange})}(this),this.on("versionchange",l=>{l.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",l=>{!l.newVersion||l.newVersion<l.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${l.oldVersion/10}`)}),this._maxKey=Et(n.IDBKeyRange),this._createTransaction=(l,a,u,c)=>new this.Transaction(l,a,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=l=>{this.on("blocked").fire(l),dt.filter(a=>a.name===this.name&&a!==this&&!a._state.vcFired).map(a=>a.on("versionchange").fire(l))},this.use(Ea),this.use($a),this.use(ka),this.use(Aa),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(l=>l(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(va),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,l)=>o.level-l.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return xa(this)}_close(){const e=this._state,n=dt.indexOf(this);if(n>=0&&dt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:l,IDBKeyRange:a},u){!Er(l)&&u!=="__dbnames"&&Sr(l,a).delete(u).catch(T)})(this._deps,this.name),r()}),o.onerror=ee(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return j(this._allTables).map(e=>this._allTables[e])}transaction(){const e=Sa.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,l;e=e.replace("!","").replace("?","");try{if(l=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&l.forEach(u=>{if(s&&s.storeNames.indexOf(u)===-1){if(!i)throw new C.SubTransaction("Table "+u+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(u){return s?s._promise(null,(c,h)=>{h(u)}):z(u)}const a=_i.bind(null,this,o,l,s,r);return s?s._promise(o,a,"lock"):A.trans?Qe(A.transless,()=>this._whenReady(a)):this._whenReady(a)}table(e){if(!J(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Pa=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Ta{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Pa](){return this}}function Si(t,e){return j(e).forEach(n=>{on(t[n]||(t[n]=new se),e[n])}),t}function Oa(t){return new Ta(e=>{const n=gr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,ye.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let l=!1,a=!1;function u(){return j(i).some(d=>s[d]&&Ca(s[d],i[d]))}const c=d=>{Si(s,d),u()&&h()},h=()=>{if(l||r)return;s={};const d={},f=function(y){n&&Xe();const m=()=>pe(t,{subscr:y,trans:null}),v=A.trans?Qe(A.transless,m):m();return n&&v.then(ue,ue),v}(d);a||(ye("storagemutated",c),a=!0),l=!0,Promise.resolve(f).then(y=>{l=!1,r||(u()?h():(s={},i=d,e.next&&e.next(y)))},y=>{l=!1,e.error&&e.error(y),o.unsubscribe()})};return h(),o})}let cr;try{cr={indexedDB:R.indexedDB||R.mozIndexedDB||R.webkitIndexedDB||R.msIndexedDB,IDBKeyRange:R.IDBKeyRange||R.webkitIDBKeyRange}}catch{cr={indexedDB:null,IDBKeyRange:null}}const be=ke;function Vt(t){let e=oe;try{oe=!0,ye.storagemutated.fire(t)}finally{oe=e}}Je(be,{...Kt,delete:t=>new be(t,{addons:[]}).delete(),exists:t=>new be(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return Er(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):Sr(e,n).toCollection().primaryKeys()}(be.dependencies).then(t)}catch{return z(new C.MissingAPI)}},defineClass:()=>function(t){F(this,t)},ignoreTransaction:t=>A.trans?Qe(A.transless,t):t(),vip:or,async:function(t){return function(){try{var e=ar(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return z(n)}}},spawn:function(t,e,n){try{var r=ar(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return z(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?be.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>ne,set:t=>{ni(t,t==="dexie"?()=>!0:mi)}},derive:He,extend:F,props:Je,override:Js,Events:ft,on:ye,liveQuery:Oa,extendObservabilitySet:Si,getByKeyPath:le,setByKeyPath:Z,delByKeyPath:function(t,e){typeof e=="string"?Z(t,e,void 0):"length"in e&&[].map.call(e,function(n){Z(t,n,void 0)})},shallowClone:Zs,deepClone:At,getObjectDiff:$r,cmp:H,asap:Xs,minKey:-(1/0),addons:[],connections:dt,errnames:vr,dependencies:cr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),be.maxKey=Et(be.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ye("storagemutated",t=>{if(!oe){let e;mn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),oe=!0,dispatchEvent(e),oe=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{oe||Vt(t)}));let oe=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),ye("storagemutated",e=>{oe||t.postMessage(e)}),t.onmessage=e=>{e.data&&Vt(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){ye("storagemutated",e=>{try{oe||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Vt(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Vt(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof Fe||t instanceof TypeError||t instanceof SyntaxError||!t.name||!es[t.name])return t;var n=new es[t.name](e||t.message,t);return"stack"in t&&ae(n,"stack",{get:function(){return this.inner.stack}}),n},ni(ne,mi);class Pt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class us extends Pt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const pn="locationchange";let hs=!1;const Ra=window.history.pushState;function ds(...t){const e=Ra.apply(window.history,t);return window.dispatchEvent(new Event(pn)),e}const Na=window.history.replaceState;function fs(...t){const e=Na.apply(window.history,t);return window.dispatchEvent(new Event(pn)),e}function Da(){if(!hs){if(window.history.pushState===ds)throw new us("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===fs)throw new us("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");hs=!0,window.history.pushState=ds,window.history.replaceState=fs,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(pn))})}}function Ma(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function ja(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function za(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?Ma(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Ba extends Pt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Ei(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const ms=6;function ps(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>ms)throw new Ba(`Route sanitization depth has exceed the max of ${ms} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Ei(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Pn extends Pt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Ia(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Pn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Pn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Pn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Ka(t,e,n,r=!1){const s=$i(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function $i(t,e,n=""){var r;if(!n&&e!=null)throw new Pt("Route base regexp was defined but routeBase string was not provided.");const s=La(e)?`/${n}`:"",i=t.search?ja(t.search).toString():"",o=i?`?${i}`:"",l=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",a=t.hash?`${l}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${a}`}function La(t){return!!(t&&window.location.pathname.match(t))}function Ua(t={}){var e;Ia(t),Da();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const l={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(o,l=!1,a=!1)=>{const u=i.getCurrentRawRoutes(),c={...u,...o},h=i.sanitizeFullRoute(c);if(!(!a&&Ei(u,h)))return Ka(h,r,n,l)},createRoutesUrl:o=>$i(o,r,n),getCurrentRawRoutes:()=>za(r),addRouteListener:(o,l)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Pt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(l),s||(window.addEventListener(pn,()=>ps(i)),s=!0),o&&ps(i,l),l},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Ai=Ua({routeBase:"resizable-image-element"}),Ha=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Fa="resizable-image-element-storage";class qa extends ke{constructor(){super(Fa),this.version(1).stores({storedUrls:"&index"})}}const Tn=new qa,gs={async set(t){const e=an(t).map((n,r)=>({index:r,url:n}));await Tn.storedUrls.clear(),await Tn.storedUrls.bulkPut(e)},async get(){const e=(await Tn.storedUrls.toArray()).map(r=>r.url),n=an(e);return Va(n.length?n:Ha)}};function Va(t){var e,n;try{const r=an(((n=(e=Ai.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function an(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(Ni)}const{defineElement:Wa,defineElementNoInputs:Ga}=yo(),Bt=Wa()({tagName:"vir-url-input",events:{urlsChange:zn()},styles:lt`
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
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),Y`
            <textarea
                ${at("input",l=>{const u=l.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(u))})}
                ${at("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),nt={max:{width:300,height:600},min:{width:300,height:150}};Ga({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Os(gs.get()),constraints:void 0,router:Ai,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>lt`
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||nt.min.width,height:Number(o==null?void 0:o.minH)||nt.min.height},max:{width:Number(o==null?void 0:o.maxW)||nt.max.width,height:Number(o==null?void 0:o.maxH)||nt.max.height}}})}const n=t.constraints??nt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,l,a){e({constraints:{...n,[l]:{...n[l],[a]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!ws(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:ln(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(l){console.warn(l)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),Y`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Bt}
                ${fr(Bt,{urls:r})}
                ${at(Bt.events.urlsChange,o=>{const l=o.detail;gs.set(l),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Bt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${at("input",o=>{const l=o.currentTarget;e({showConstraints:!!l.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const l=["height","width"].map(a=>{const u=[On(o),On(a)].join(" "),c=n[o][a];return Y`
                            <label>
                                ${u}
                                <br />
                                ${Q(c)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${c}
                                    ${at("input",h=>{i(h.currentTarget,o,a)})}
                                />
                            </label>
                        `});return Y`
                        <div class="constraint-controls">${l}</div>
                    `})}
            </p>
            <div class="images-container">${Ya(n,t.imageUrls)}</div>
        `}});function Ya(t,e){return Bn(e,"Loading...",n=>an(n).map(r=>{const s=`
                height: ${Q(t.max.height)};
                max-height: ${Q(t.max.height)};
                width: ${Q(t.max.width)};
                max-width: ${Q(t.max.width)}`,i=`height: ${Q(t.min.height)}; width: ${Q(t.min.width)}`;return Y`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${ct}
                            ${fr(ct,{imageUrl:r,max:t.max,min:t.min})}
                        ></${ct}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
