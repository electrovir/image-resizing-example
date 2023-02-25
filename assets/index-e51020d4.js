(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function us(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const vi={capitalizeFirstLetter:!1};function kn(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function wi(t,e){return e.capitalizeFirstLetter?kn(t):t}function bi(t,e=vi){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return wi(r,e)}function xr(t){return t!==t.toUpperCase()}function _i(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",l=s<i.length-1?i[s+1]:"",a=xr(o)||xr(l);return r===r.toLowerCase()||s===0||!a?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function xi({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const Si=["january","february","march","april","may","june","july","august","september","october","november","december"];Si.map(t=>t.slice(0,3));function $i(t){return!!t}const Ei=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function hs(t,e){return t?Ei.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Ai(t,e){return t&&e.every(n=>hs(t,n))}function Vt(t){const e=Fe();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function Ci(t){return!!(hs(t,"then")&&typeof t.then=="function")}function Fe(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Fe.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function on(t){return t?t instanceof Error?t.message:String(t):""}function ki(t){return t instanceof Error?t:new Error(on(t))}function ke(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Sr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function $r(t){return!!t&&typeof t=="object"}function ds(t,e){try{if(t===e)return!0;if($r(t)&&$r(e)){const n=Sr(t),r=Sr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${on(n)}`),n}}function fs(t,e){return ke(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function me(t,e){let n=!1;const r=ke(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(ke(r).map(async o=>{const l=await r[o];r[o]=l})),s(r)}catch(o){i(o)}}):r}function X(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=window,ir=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,or=Symbol(),Er=new WeakMap;let ms=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==or)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ir&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Er.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Er.set(n,e))}return e}toString(){return this.cssText}};const ft=t=>new ms(typeof t=="string"?t:t+"",void 0,or),ps=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new ms(n,t,or)},Pi=(t,e)=>{ir?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=Mt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},Ar=ir?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return ft(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const qt=window,Cr=qt.trustedTypes,Ti=Cr?Cr.emptyScript:"",kr=qt.reactiveElementPolyfillSupport,Pn={toAttribute(t,e){switch(e){case Boolean:t=t?Ti:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ys=(t,e)=>e!==t&&(e==e||t==t),pn={attribute:!0,type:String,converter:Pn,reflect:!1,hasChanged:ys};let ze=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=pn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(Ar(s))}else e!==void 0&&n.push(Ar(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Pi(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=pn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Pn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Pn;this._$El=i,this[i]=l.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||ys)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ze.finalized=!0,ze.elementProperties=new Map,ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},kr==null||kr({ReactiveElement:ze}),((mn=qt.reactiveElementVersions)!==null&&mn!==void 0?mn:qt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn;const Wt=window,Ve=Wt.trustedTypes,Pr=Ve?Ve.createPolicy("lit-html",{createHTML:t=>t}):void 0,fe=`lit$${(Math.random()+"").slice(9)}$`,gs="?"+fe,Oi=`<${gs}>`,qe=document,mt=(t="")=>qe.createComment(t),pt=t=>t===null||typeof t!="object"&&typeof t!="function",vs=Array.isArray,Ni=t=>vs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tr=/-->/g,Or=/>/g,we=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nr=/'/g,Rr=/"/g,ws=/^(?:script|style|textarea|title)$/i,Ri=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Di=Ri(1),ce=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Dr=new WeakMap,Ie=qe.createTreeWalker(qe,129,null,!1),ji=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=Xe;for(let a=0;a<n;a++){const u=t[a];let c,h,d=-1,f=0;for(;f<u.length&&(o.lastIndex=f,h=o.exec(u),h!==null);)f=o.lastIndex,o===Xe?h[1]==="!--"?o=Tr:h[1]!==void 0?o=Or:h[2]!==void 0?(ws.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=we):h[3]!==void 0&&(o=we):o===we?h[0]===">"?(o=s??Xe,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?we:h[3]==='"'?Rr:Nr):o===Rr||o===Nr?o=we:o===Tr||o===Or?o=Xe:(o=we,s=void 0);const g=o===we&&t[a+1].startsWith("/>")?" ":"";i+=o===Xe?u+Oi:d>=0?(r.push(c),u.slice(0,d)+"$lit$"+u.slice(d)+fe+g):u+fe+(d===-2?(r.push(void 0),a):g)}const l=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Pr!==void 0?Pr.createHTML(l):l,r]};let Gt=class{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const l=e.length-1,a=this.parts,[u,c]=ji(e,n);if(this.el=Gt.createElement(u,r),Ie.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=Ie.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(fe)){const f=c[o++];if(h.push(d),f!==void 0){const g=s.getAttribute(f.toLowerCase()+"$lit$").split(fe),m=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:m[2],strings:g,ctor:m[1]==="."?Mi:m[1]==="?"?Ki:m[1]==="@"?Ii:ln})}else a.push({type:6,index:i})}for(const d of h)s.removeAttribute(d)}if(ws.test(s.tagName)){const h=s.textContent.split(fe),d=h.length-1;if(d>0){s.textContent=Ve?Ve.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],mt()),Ie.nextNode(),a.push({type:2,index:++i});s.append(h[d],mt())}}}else if(s.nodeType===8)if(s.data===gs)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(fe,h+1))!==-1;)a.push({type:7,index:i}),h+=fe.length-1}i++}}static createElement(e,n){const r=qe.createElement("template");return r.innerHTML=e,r}};function We(t,e,n=t,r){var s,i,o,l;if(e===ce)return e;let a=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const u=pt(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),u===void 0?a=void 0:(a=new u(t),a._$AT(t,n,r)),r!==void 0?((o=(l=n)._$Co)!==null&&o!==void 0?o:l._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=We(t,a._$AS(t,e.values),a,r)),e}let zi=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:qe).importNode(r,!0);Ie.currentNode=i;let o=Ie.nextNode(),l=0,a=0,u=s[0];for(;u!==void 0;){if(l===u.index){let c;u.type===2?c=new an(o,o.nextSibling,this,e):u.type===1?c=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(c=new Li(o,this,e)),this.u.push(c),u=s[++a]}l!==(u==null?void 0:u.index)&&(o=Ie.nextNode(),l++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},an=class{constructor(e,n,r,s){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=We(this,e,n),pt(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==ce&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ni(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&pt(this._$AH)?this._$AA.nextSibling.data=e:this.T(qe.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Gt.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new zi(i,this),l=o.v(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let n=Dr.get(e.strings);return n===void 0&&Dr.set(e.strings,n=new Gt(e)),n}k(e){vs(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new an(this.O(mt()),this.O(mt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},ln=class{constructor(e,n,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=We(this,e,n,0),o=!pt(e)||e!==this._$AH&&e!==ce,o&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=We(this,l[r+a],n,a),u===ce&&(u=this._$AH[a]),o||(o=!pt(u)||u!==this._$AH[a]),u===B?e=B:e!==B&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Mi=class extends ln{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Bi=Ve?Ve.emptyScript:"";let Ki=class extends ln{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Bi):this.element.removeAttribute(this.name)}},Ii=class extends ln{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=We(this,e,n,0))!==null&&r!==void 0?r:B)===ce)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Li=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}};const jr=Wt.litHtmlPolyfillSupport;jr==null||jr(Gt,an),((yn=Wt.litHtmlVersions)!==null&&yn!==void 0?yn:Wt.litHtmlVersions=[]).push("2.6.1");const Hi=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const l=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new an(e.insertBefore(mt(),l),l,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn,vn;let rt=class extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hi(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ce}};rt.finalized=!0,rt._$litElement$=!0,(gn=globalThis.litElementHydrateSupport)===null||gn===void 0||gn.call(globalThis,{LitElement:rt});const zr=globalThis.litElementPolyfillSupport;zr==null||zr({LitElement:rt});((vn=globalThis.litElementVersions)!==null&&vn!==void 0?vn:globalThis.litElementVersions=[]).push("3.2.2");var Ui=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function Fi(){return t=>{}}let yt=class extends rt{};yt=Ui([Fi()],yt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Mr(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):Vi(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wn;((wn=window.HTMLSlotElement)===null||wn===void 0?void 0:wn.prototype.assignedElements)!=null;const Tn=Symbol("this-is-an-element-vir-declarative-element"),ar=Symbol("key for ignoring inputs not having been set yet"),qi={[ar]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cn=t=>(...e)=>({_$litDirective$:t,values:e});let un=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function Wi(t,e){return _s(t,e,yt)}function _s(t,e,n){On(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function On(t,e){if(t.type!==bs.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function lr(t,e){return Gi(t,e)}const Gi=cn(class extends un{constructor(t){super(t),this.element=Wi(t,"assign")}render(t,e){return Ji(t,this.element,e),ce}});function Ji(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function xs(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof yt?!0:xs(n)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},J=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},te,_e,xe,Se,Ke,Me,q,st,Nn,Rn;function Yi(t){if(!t)return{};const e=fs(t,(r,s)=>s instanceof Ss);return me(e,(r,s)=>new Qi(s.initialValue))}const kt=Symbol("not set");class Qi{constructor(e){te.add(this),_e.set(this,kt),xe.set(this,void 0),Se.set(this,void 0),Ke.set(this,[]),Me.set(this,void 0),q.set(this,Fe()),e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(P(this,_e,"f")===kt||!ds(e.trigger,P(this,_e,"f"))){J(this,_e,e.trigger,"f");const n=e.createPromise();P(this,te,"m",Nn).call(this,n)}}else"newPromise"in e?(P(this,_e,"f"),P(this,te,"m",Nn).call(this,e.newPromise),P(this,te,"m",st).call(this)):"resolvedValue"in e?P(this,te,"m",Rn).call(this,e.resolvedValue):e.forceUpdate&&(J(this,_e,kt,"f"),J(this,xe,void 0,"f"),P(this,q,"f").isSettled()||P(this,q,"f").reject("Canceled by force update"),J(this,q,Fe(),"f"),P(this,te,"m",st).call(this))}getValue(){return P(this,q,"f").isSettled()?P(this,Se,"f")?P(this,Se,"f"):P(this,xe,"f"):P(this,q,"f").promise}addSettleListener(e){P(this,Ke,"f").push(e)}removeSettleListener(e){J(this,Ke,P(this,Ke,"f").filter(n=>n!==e),"f")}}_e=new WeakMap,xe=new WeakMap,Se=new WeakMap,Ke=new WeakMap,Me=new WeakMap,q=new WeakMap,te=new WeakSet,st=function(){P(this,Ke,"f").forEach(e=>{e()})},Nn=function(e){e!==P(this,Me,"f")&&(J(this,xe,void 0,"f"),J(this,Se,void 0,"f"),J(this,Me,e,"f"),P(this,q,"f").isSettled()&&J(this,q,Fe(),"f"),e.then(n=>{P(this,Me,"f")===e&&P(this,te,"m",Rn).call(this,n)}).catch(n=>{P(this,Me,"f")===e&&(J(this,Se,ki(n),"f"),P(this,q,"f").promise.catch(()=>{}),P(this,q,"f").reject(n),P(this,te,"m",st).call(this))}))},Rn=function(e){e!==P(this,xe,"f")&&(J(this,Se,void 0,"f"),J(this,xe,e,"f"),P(this,q,"f").isSettled()&&J(this,q,Fe(),"f"),P(this,q,"f").resolve(e),P(this,te,"m",st).call(this))};class Ss{constructor(e){this.initialValue=e}}function $s(t){return new Ss(t)}function Es(t,e){return`${t}-${_i(e)}`}function Xi(t,e){return e?me(e,n=>ft(`--${Es(t,String(n))}`)):{}}function Zi(t,e){return t?me(t,(n,r)=>{const s=e[n];return ft(`var(${s}, ${r})`)}):{}}class eo extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function As(){return t=>{var e;return e=class extends eo{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function to(){return As()}function no(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=As()(n);return e[n]=r,e},{}):{}}function Br(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Kr(t,e){const n=t;function r(i,o){e&&Br(o,t,t.tagName);const l=t.asyncStateHandlerMap[o];return l?l.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,l)=>{e&&Br(o,t,t.tagName),i[o]=void 0;const a=t.asyncStateHandlerMap[o];return a?a.setValue(l):n[o]=l,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function ro(t,e){return e?me(e,n=>Es(t,String(n))):{}}function so({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:me(t,(r,s)=>ft(`:host(.${s})`)),hostClassNames:me(t,(r,s)=>ft(s)),cssVarNames:e,cssVarValues:n}}function io({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&ke(e).forEach(i=>{const o=e[i],l=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(l):t.classList.remove(l))})}function oo(t,e){function n(s){ke(s).forEach(i=>{const o=s[i],l=t.asyncStateHandlerMap[i];l?l.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function cr(t){var e;const n=no(t.events),r=ro(t.tagName,t.hostClasses),s=Xi(t.tagName,t.cssVars),i=Zi(t.cssVars,s),o={...qi,...t.options},l=typeof t.styles=="function"?t.styles(so({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||ps``,a=t.renderCallback,u=(e=class extends yt{createRenderParams(){return oo(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){xs(this)&&!this.haveInputsBeenSet&&!o[ar]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${lr.name}" directive on it. If no inputs are intended, use "${cr.name}" to define ${t.tagName}.`);const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const h=t.renderCallback(c);return io({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),h}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){ke(c).forEach(h=>{Mr()(this,h),this.instanceInputs[h]=c[h]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=Yi(t.stateInit),this.instanceInputs=Kr(this,!1),this.instanceState=Kr(this,!0);const c=t.stateInit||{};ke(c).forEach(h=>{Mr()(this,h);const d=this.asyncStateHandlerMap[h];d?(this.instanceState[h]=d.getValue(),d.addSettleListener(()=>{this[h]=d.getValue()})):this.instanceState[h]=c[h]}),this.definition=u}},e.tagName=t.tagName,e.styles=l,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=a,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(u,{[Tn]:{value:!0,writable:!1},name:{value:bi(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof u,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,u),u}function Cs(){return t=>cr({...t,options:{[ar]:!1},...t.options})}function it(t,e){return ao(t,e)}const ao=cn(class extends un{constructor(t){super(t),this.element=_s(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ce}}),Ir="onDomCreated",lo=cn(class extends un{constructor(t){super(t),On(t,Ir)}update(t,[e]){On(t,Ir);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function Dn(t,e,n,r){return t instanceof Error?r?r(t):on(t):Ci(t)?e:n?n(t):t}function co(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Cs()(s(i))),defineElementNoInputs:i=>(r(i),cr(s(i)))}}function uo(t,e){return t.filter((n,r)=>!e.includes(r))}function ks(t){return t.filter(e=>Ai(e,["tagName",Tn])&&!!e.tagName&&!!e[Tn])}const Ps=new WeakMap;function ho(t,e){var n;const r=ks(e);return(n=Ts(Ps,[t,...r]).value)===null||n===void 0?void 0:n.template}function fo(t,e,n){const r=ks(e);return Ns(Ps,[t,...r],n)}function Ts(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Os(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Ts(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Os(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Ns(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:l}=Os(t,e,r);if(!o)return{result:!1,reason:l};const a=i??{nested:void 0,template:void 0};if(i||t.set(o,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=(s=a.nested)!==null&&s!==void 0?s:new WeakMap;return a.nested||(a.nested=u),Ns(u,e,n,r+1)}function Rs(t,e,n){return{name:t,check:e,transform:n}}const mo=new WeakMap;function Ds(t,e,n){const r=ho(t,e),s=r??n();if(!r){const o=fo(t,e,s);if(o.result)mo.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=uo(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function js(t,e,n,r){const s=[],i=[],o=[];return t.forEach((a,u)=>{var c;const h=s.length-1,d=s[h],f=u-1,g=e[f];let m;r&&r(a),typeof d=="string"&&(m=(c=n.find(p=>p.check(d,a,g)))===null||c===void 0?void 0:c.transform,m&&(s[h]=d+m(g)+a,o.push(f))),m||s.push(a);const v=t.raw[u];m?i[h]=i[h]+m(g)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function zs(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const po=[Rs("tag name css selector interpolation",(t,e,n)=>zs(n),t=>t.tagName)];function yo(t,e){return js(t,e,po)}function ot(t,...e){const n=Ds(t,e,()=>yo(t,e));return ps(n.strings,...n.values)}const go=[Rs("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=zs(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function vo(t){}function wo(t){return js(t.strings,t.values,go,vo)}function W(t,...e){const n=Di(t,...e),r=Ds(t,e,()=>wo(n));return{...n,strings:r.strings,values:r.values}}function bo(t,e){return t<e}function _o(t,e){return t>e}function xo({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?_o:bo)(e.width/e.height,t.width/t.height)?"width":"height"}function bn({box:t,constraint:e,constraintType:n}){const r=xo({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Ms({box:t,ratio:e}){return me(t,(n,r)=>r*e)}function Bs({box:t,min:e,max:n}){return me(t,(r,s)=>xi({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function So({min:t,max:e,box:n}){const r=Ks({min:t,max:e,box:n}),s=Ms({box:n,ratio:r});return{height:s.height||(t==null?void 0:t.height)||250,width:s.width||(t==null?void 0:t.width)||250}}function Ks({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?bn({box:n,constraint:t,constraintType:"min"}):1,s=e?bn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Ms({ratio:i,box:n});return(t?bn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=cn(class extends un{constructor(t){var e;if(super(t),t.type!==bs.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,r;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((n=this.st)===null||n===void 0)&&n.has(i))&&this.nt.add(i);return this.render(e)}const s=t.element.classList;this.nt.forEach(i=>{i in e||(s.remove(i),this.nt.delete(i))});for(const i in e){const o=!!e[i];o===this.nt.has(i)||!((r=this.st)===null||r===void 0)&&r.has(i)||(o?(s.add(i),this.nt.add(i)):(s.remove(i),this.nt.delete(i)))}return ce}});function gt(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,l)=>{const a=Eo(o,r[l]);return`${o}${a}`});return us(i.join(""))}function Eo(t,e){return e._$litType$!=null||e._$litDirective$!=null?gt(e):Array.isArray(e)?e.map(r=>gt(r)).join(""):t.endsWith("=")?`"${e}"`:e}var Jt=(t=>(t.Html="html",t.Svg="svg",t.Image="image",t.Video="video",t))(Jt||{});async function Ao(t,e){const n=t.headers.get("Content-Type")??"";return n.includes("video")?"video":n.includes("svg")||e.includes("<svg")?"svg":n.includes("html")||e.includes("<html")?"html":"image"}function Co({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?gt(W`
            <img src=${n} />
        `):t==="video"?gt(W`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} type="video/mp4" />
            </video>
        `):e}async function Lr(t,e){let n;try{n=await fetch(t)}catch{}const r=await(n==null?void 0:n.text())??"",s=n?await Ao(n,r):"image";return{templateString:Co({imageText:r,imageType:s,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:s}}const Y={readyPing:"ready-ping",readyPong:"ready-pong",detectedSize:"detected-size",setScale:"set-scale",setScalingMethod:"set-scaling-method"};async function ko(t){t.iframe.onload=async()=>{let e=!1;const n=Date.now();for(;!t.iframe.contentWindow;)if(await Vt(100),Date.now()-n>3e4)throw new Error("Took over 10 seconds for the vir-resizable-image iframe's content window to appear.");const r=t.iframe.contentWindow;for(r.addEventListener("message",s=>{if(!(s.data.type===Y.readyPing||s.data.type===Y.setScalingMethod)){if(s.data.type===Y.readyPong){e=!0;return}else if(s.data.type===Y.detectedSize){const i=JSON.parse(s.data.data),o=Number(i.width),l=Number(i.height);if(!isNaN(o)&&!isNaN(l)){const a={width:o,height:l};Po({updateState:t.updateState,min:t.min,max:t.max,iframeWindow:r,imageDimensions:a,host:t.host,imageData:t.imageData})}else console.warn(`Got bad data from vir-resizable-image image iframe: ${JSON.stringify(i)}`)}}});!e;)r.postMessage({type:Y.readyPing}),await Vt(100)}}function Po({updateState:t,min:e,max:n,iframeWindow:r,imageDimensions:s,host:i,imageData:o}){const l=i.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const a=So({min:e,max:n,box:s});l.style.width=X(Math.floor(a.width)),l.style.height=X(Math.floor(a.height));const u=Bs({min:e,max:n,box:a});a.height<u.height?t({shouldVerticallyCenter:!0}):t({shouldVerticallyCenter:!1}),i.style.width=X(u.width),i.style.height=X(u.height);const c=Ks({min:e,max:n,box:s});c>3?r.postMessage({type:Y.setScalingMethod,data:"crisp"}):r.postMessage({type:Y.setScalingMethod,data:"default"}),o.imageType===Jt.Html&&r.postMessage({type:Y.setScale,data:c}),t({settled:!0})}var Hr=Object.freeze,To=Object.defineProperty,Ur=(t,e)=>Hr(To(t,"raw",{value:Hr(e||t.slice())})),Fr,Vr;function Oo(t,e,n){const r=Math.random(),s=W(Fr||(Fr=Ur([`
        <script>
            const imageType = '`,`';

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

                if (element instanceof HTMLImageElement) {
                    size = {
                        width: element.naturalWidth,
                        height: element.naturalHeight,
                    };
                } else {
                    const rawWidth = window.getComputedStyle(element).width;
                    const rawHeight = window.getComputedStyle(element).height;
                    const width = Number(rawWidth.replace(/px$/, ''));
                    const height = Number(rawHeight.replace(/px$/, ''));

                    if (width && height) {
                        size = {height, width};
                    }
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
                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = extractSvgSize(svgElement);

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

            function postSize() {
                const size = sizeGrabbers[imageType]();

                if (!size.width || !size.height) {
                    throw new Error('invalid size ' + JSON.stringify(size));
                }

                readyPromise.then(() => {
                    globalThis.postMessage({
                        type: '`,`',
                        data: JSON.stringify(size),
                    });
                });
            }

            let retryCount = 0;
            const maxRetryCount = 100;

            function repeatedlyPostSize() {
                try {
                    postSize();
                } catch (error) {
                    retryCount++;
                    if (retryCount > maxRetryCount) {
                        throw new Error(
                            "Tried to get the '`,"' size for '",`' over '" +
                                maxRetryCount +
                                "' times and failed.",
                        );
                    }
                    setTimeout(() => {
                        repeatedlyPostSize();
                    }, Math.min(retryCount * 50, 1000));
                }
            }

            repeatedlyPostSize();
        <\/script>
    `],[`
        <script>
            const imageType = '`,`';

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

                if (element instanceof HTMLImageElement) {
                    size = {
                        width: element.naturalWidth,
                        height: element.naturalHeight,
                    };
                } else {
                    const rawWidth = window.getComputedStyle(element).width;
                    const rawHeight = window.getComputedStyle(element).height;
                    const width = Number(rawWidth.replace(/px$/, ''));
                    const height = Number(rawHeight.replace(/px$/, ''));

                    if (width && height) {
                        size = {height, width};
                    }
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
                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = extractSvgSize(svgElement);

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

            function postSize() {
                const size = sizeGrabbers[imageType]();

                if (!size.width || !size.height) {
                    throw new Error('invalid size ' + JSON.stringify(size));
                }

                readyPromise.then(() => {
                    globalThis.postMessage({
                        type: '`,`',
                        data: JSON.stringify(size),
                    });
                });
            }

            let retryCount = 0;
            const maxRetryCount = 100;

            function repeatedlyPostSize() {
                try {
                    postSize();
                } catch (error) {
                    retryCount++;
                    if (retryCount > maxRetryCount) {
                        throw new Error(
                            "Tried to get the '`,"' size for '",`' over '" +
                                maxRetryCount +
                                "' times and failed.",
                        );
                    }
                    setTimeout(() => {
                        repeatedlyPostSize();
                    }, Math.min(retryCount * 50, 1000));
                }
            }

            repeatedlyPostSize();
        <\/script>
    `])),t.imageType,n??"",Y.detectedSize,t.imageType,t.imageUrl),i=W(Vr||(Vr=Ur([`
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

                    .crisp {
                        image-rendering: crisp-edges;
                    }
                </style>
                <script>
                    let resolve;
                    const readyPromise = new Promise((innerResolve) => {
                        resolve = innerResolve;
                    });
                    globalThis.addEventListener('message', (messageEvent) => {
                        if (messageEvent.data.type === '`,`') {
                            resolve();
                            globalThis.postMessage({type: '`,`'});
                        } else if (messageEvent.data.type === '`,`') {
                            document
                                .querySelector('body')
                                .style.setProperty(
                                    'transform',
                                    'scale(' + messageEvent.data.data + ')',
                                );
                        } else if (messageEvent.data.type === '`,`') {
                            if (messageEvent.data.data === 'crisp') {
                                document.body.classList.add('crisp');
                            } else {
                                document.body.classList.remove('crisp');
                            }
                        }
                    });

                    function muteEverything() {
                        const videoElements = Array.from(
                            document?.body?.querySelectorAll('video') ?? [],
                        );
                        const audioElements = Array.from(
                            document?.body?.querySelectorAll('audio') ?? [],
                        );
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
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),t.imageType.toLowerCase(),Y.readyPing,Y.readyPong,Y.setScale,Y.setScalingMethod,r,s,e??"");return us(gt(i)).replace(String(r),`
${t.templateString}
`)}const No={imageData:$s(),shouldVerticallyCenter:!1,shouldUseCrispScaling:!1,settled:!1},qr=W`
    <div class="click-cover"></div>
`,at=Cs()({tagName:"vir-resizable-image",stateInit:No,hostClasses:{verticallyCenter:({state:t})=>t.shouldVerticallyCenter},styles:({hostClassSelectors:t})=>ot`
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
    `,renderCallback:({state:t,inputs:e,updateState:n,host:r})=>{n({imageData:{createPromise:async()=>(n({settled:!1,shouldVerticallyCenter:!1}),Lr(e.imageUrl,!!e.blockAutoPlay).catch(async()=>(await Vt(1e3),Lr(e.imageUrl,!!e.blockAutoPlay)))),trigger:{...fs(e,c=>c!=="extraHTML")}}});const s=e.min&&e.max?Bs({box:e.min,max:e.max}):e.min,i=e.max,o=s?ot`
                  min-width: ${s.width}px;
                  min-height: ${s.height}px;
              `:"",l=Dn(t.imageData,W`
                <div class="loading-wrapper" style=${o}>
                    <slot name="loading">Loading...</slot>
                </div>
            `,c=>W`
                    <iframe
                        class=${$o({"crisp-scaling":t.shouldUseCrispScaling})}
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${Oo(c,e.extraHTML,e.htmlSizeQuerySelector)}
                        ${lo(async h=>{ko({iframe:h,updateState:n,min:s,max:i,host:r,imageData:c})})}
                    ></iframe>
                    <slot name="loaded"></slot>
                `,c=>W`
                    <div class="error-wrapper">
                        <slot name="error">${on(c)}</slot>
                    </div>
                `),a=Dn(t.imageData,qr,c=>[Jt.Html,Jt.Video].includes(c.imageType)?"":qr,()=>""),u=t.imageData instanceof Error?ot`
                      max-width: 100%;
                      max-height: 100%;
                  `:"";return W`
            <div class="frame-constraint" style=${u}>${l}</div>
            ${a}
        `}}),N=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,z=Object.keys,L=Array.isArray;function F(t,e){return typeof e!="object"||z(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||N.Promise||(N.Promise=Promise);const vt=Object.getPrototypeOf,Ro={}.hasOwnProperty;function Q(t,e){return Ro.call(t,e)}function Ge(t,e){typeof e=="function"&&(e=e(vt(t))),(typeof Reflect>"u"?z:Reflect.ownKeys)(e).forEach(n=>{ae(t,n,e[n])})}const Is=Object.defineProperty;function ae(t,e,n,r){Is(t,e,F(n&&Q(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Le(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ae(t.prototype,"constructor",t),{extend:Ge.bind(null,t.prototype)}}}}const Do=Object.getOwnPropertyDescriptor;function ur(t,e){let n;return Do(t,e)||(n=vt(t))&&ur(n,e)}const jo=[].slice;function Yt(t,e,n){return jo.call(t,e,n)}function Ls(t,e){return e(t)}function tt(t){if(!t)throw new Error("Assertion Failed")}function Hs(t){N.setImmediate?setImmediate(t):setTimeout(t,0)}function Us(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function le(t,e){if(Q(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=le(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var l=t[e.substr(0,o)];return l===void 0?void 0:le(l,e.substr(o+1))}}function Z(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){tt(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Z(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),l=e.substr(i+1);if(l==="")n===void 0?L(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var a=t[o];a&&Q(t,o)||(a=t[o]={}),Z(a,l,n)}}else n===void 0?L(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function Fs(t){var e={};for(var n in t)Q(t,n)&&(e[n]=t[n]);return e}const zo=[].concat;function Vs(t){return zo.apply([],t)}const qs="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Vs([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>N[t]),Mo=qs.map(t=>N[t]);Us(qs,t=>[t,!0]);let de=null;function $t(t){de=typeof WeakMap<"u"&&new WeakMap;const e=jn(t);return de=null,e}function jn(t){if(!t||typeof t!="object")return t;let e=de&&de.get(t);if(e)return e;if(L(t)){e=[],de&&de.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(jn(t[n]))}else if(Mo.indexOf(t.constructor)>=0)e=t;else{const i=vt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),de&&de.set(t,e),t)Q(t,s)&&(e[s]=jn(t[s]))}return e}const{toString:Bo}={};function zn(t){return Bo.call(t).slice(8,-1)}const Mn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Ko=typeof Mn=="symbol"?function(t){var e;return t!=null&&(e=t[Mn])&&e.apply(t)}:function(){return null},Be={};function ie(t){var e,n,r,s;if(arguments.length===1){if(L(t))return t.slice();if(this===Be&&typeof t=="string")return[t];if(s=Ko(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const hr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var ne=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ws(t,e){ne=t,Gs=e}var Gs=()=>!0;const Io=!new Error("").stack;function Oe(){if(Io)try{throw Oe.arguments,new Error}catch(t){return t}return new Error}function Bn(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(Gs).map(r=>`
`+r).join("")):""}var Js=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],dr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Js),Lo={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(t,e){this._e=Oe(),this.name=t,this.message=e}function Ys(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Qt(t,e,n,r){this._e=Oe(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=Ys(t,e)}function lt(t,e){this._e=Oe(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=Ys(t,e)}Le(He).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Bn(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Le(Qt).from(He),Le(lt).from(He);var fr=dr.reduce((t,e)=>(t[e]=e+"Error",t),{});const Ho=He;var C=dr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Oe(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Lo[e]||n,this.inner=null)}return Le(r).from(Ho),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Wr=Js.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Bt=dr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function wt(t){return t}function Uo(t,e){return t==null||t===wt?e:function(n){return e(t(n))}}function Pe(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Fo(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Pe(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Pe(s,this.onerror):s),i!==void 0?i:n}}function Vo(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Pe(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Pe(r,this.onerror):r)}}function qo(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);F(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Pe(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Pe(i,this.onerror):i),r===void 0?o===void 0?void 0:o:F(r,o)}}function Wo(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function mr(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Bt.ModifyError=Qt,Bt.DexieError=He,Bt.BulkError=lt;var bt={};const[Kn,Xt,In]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,vt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,vt(e),t]})(),Qs=Xt&&Xt.then,Kt=Kn&&Kn.constructor,pr=!!In;var Ln=!1,Go=In?()=>{In.then(Pt)}:N.setImmediate?setImmediate.bind(null,Pt):N.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Pt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Pt,0)},ct=function(t,e){nt.push([t,e]),Zt&&(Go(),Zt=!1)},Hn=!0,Zt=!0,Ee=[],It=[],Un=null,Fn=wt,Ue={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Jr,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Jr(t[0],t[1])}catch{}})}},A=Ue,nt=[],Ae=0,Lt=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(ne&&(this._stackHolder=Oe(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==bt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&qn(this,this._value))}this._state=null,this._value=null,++e.ref,Zs(this,t)}const Vn={get:function(){var t=A,e=en;function n(r,s){var i=!t.global&&(t!==A||e!==en);const o=i&&!ue();var l=new S((a,u)=>{yr(this,new Xs(tn(r,t,i,o),tn(s,t,i,o),a,u,t))});return ne&&ni(l,this),l}return n.prototype=bt,n},set:function(t){ae(this,"then",t&&t.prototype===bt?Vn:{get:function(){return t},set:Vn.set})}};function Xs(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function Zs(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Et();n&&typeof n.then=="function"?Zs(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,ei(t)),r&&At()}},qn.bind(null,t))}catch(n){qn(t,n)}}function qn(t,e){if(It.push(e),t._state===null){var n=t._lib&&Et();e=Fn(e),t._state=!1,t._value=e,ne&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=ur(e,"stack");e._promise=t,ae(e,"stack",{get:()=>Ln?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ee.some(s=>s._value===r._value)||Ee.push(r)}(t),ei(t),n&&At()}}function ei(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)yr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ae===0&&(++Ae,ct(()=>{--Ae==0&&gr()},[]))}function yr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ae,ct(Jo,[n,t,e])}else t._listeners.push(e)}function Jo(t,e,n){try{Un=e;var r,s=e._value;e._state?r=t(s):(It.length&&(It=[]),r=t(s),It.indexOf(s)===-1&&function(i){for(var o=Ee.length;o;)if(Ee[--o]._value===i._value)return void Ee.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Un=null,--Ae==0&&gr(),--n.psd.ref||n.psd.finalize()}}function ti(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=Bn(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return ne&&((r=Bn(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&ti(t._prev,e,n)),e}function ni(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Pt(){Et()&&At()}function Et(){var t=Hn;return Hn=!1,Zt=!1,t}function At(){var t,e,n;do for(;nt.length>0;)for(t=nt,nt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(nt.length>0);Hn=!0,Zt=!0}function gr(){var t=Ee;Ee=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Lt.slice(0),n=e.length;n;)e[--n]()}function Tt(t){return new S(bt,!1,t)}function R(t,e){var n=A;return function(){var r=Et(),s=A;try{return ye(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{ye(s,!1),r&&At()}}}Ge(S.prototype,{then:Vn,_then:function(t,e){yr(this,new Xs(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Tt(r)):this.then(null,r=>r&&r.name===e?n(r):Tt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Tt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Ln=!0;var t=ti(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Ln=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ae(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Ue.env=ri(),Ge(S,{all:function(){var t=ie.apply(null,arguments).map(Ot);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(bt,!0,t);return ni(e,Un),e},reject:Tt,race:function(){var t=ie.apply(null,arguments).map(Ot);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>en},newPSD:pe,usePSD:Ye,scheduler:{get:()=>ct,set:t=>{ct=t}},rejectionMapper:{get:()=>Fn,set:t=>{Fn=t}},follow:(t,e)=>new S((n,r)=>pe((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Pe(function(){(function(l){function a(){l(),Lt.splice(Lt.indexOf(a),1)}Lt.push(a),++Ae,ct(()=>{--Ae==0&&gr()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Kt&&(Kt.allSettled&&ae(S,"allSettled",function(){const t=ie.apply(null,arguments).map(Ot);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Kt.any&&typeof AggregateError<"u"&&ae(S,"any",function(){const t=ie.apply(null,arguments).map(Ot);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(l=>e(l),l=>{s[o]=l,--r||n(new AggregateError(s))}))})}));const I={awaits:0,echoes:0,id:0};var Yo=0,Ht=[],_n=0,en=0,Qo=0;function pe(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++Qo;var o=Ue.env;i.env=pr?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:Gr(o.nthen,i),gthen:Gr(o.gthen,i)}:{},e&&F(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var l=Ye(i,t,n,r);return i.ref===0&&i.finalize(),l}function Je(){return I.id||(I.id=++Yo),++I.awaits,I.echoes+=100,I.id}function ue(){return!!I.awaits&&(--I.awaits==0&&(I.id=0),I.echoes=100*I.awaits,!0)}function Ot(t){return I.echoes&&t&&t.constructor===Kt?(Je(),t.then(e=>(ue(),e),e=>(ue(),M(e)))):t}function Xo(t){++en,I.echoes&&--I.echoes!=0||(I.echoes=I.id=0),Ht.push(A),ye(t,!0)}function Zo(){var t=Ht[Ht.length-1];Ht.pop(),ye(t,!1)}function ye(t,e){var n=A;if((e?!I.echoes||_n++&&t===A:!_n||--_n&&t===A)||si(e?Xo.bind(null,t):Zo),t!==A&&(A=t,n===Ue&&(Ue.env=ri()),pr)){var r=Ue.env.Promise,s=t.env;Xt.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(N,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function ri(){var t=N.Promise;return pr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(N,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:Xt.then,gthen:t.prototype.then}:{}}function Ye(t,e,n,r,s){var i=A;try{return ye(t,!0),e(n,r,s)}finally{ye(i,!1)}}function si(t){Qs.call(Kn,t)}function tn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&Je(),ye(e,!0);try{return t.apply(this,arguments)}finally{ye(s,!1),r&&si(ue)}}}function Gr(t,e){return function(n,r){return t.call(this,tn(n,e),tn(r,e))}}(""+Qs).indexOf("[native code]")===-1&&(Je=ue=T);function Jr(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(N.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),F(r,s)):N.CustomEvent&&F(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&N.dispatchEvent&&(dispatchEvent(r),!N.PromiseRejectionEvent&&N.onunhandledrejection))try{N.onunhandledrejection(r)}catch{}ne&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var M=S.reject;function Wn(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===fr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Wn(t,e,n,r))):M(i)}return s._promise(e,(i,o)=>pe(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return M(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return M(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>Wn(t,e,n,r))}const $e=String.fromCharCode(65535),re="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ut=[],hn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),ea=hn,ta=hn,ii=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Te(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const oi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Nt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=$t(e))[t],e)}class na{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(a,u,c){if(!c.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(c.idbtrans,c)}const l=Et();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):pe(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Wn(this.db,e,[this.name],o)}finally{l&&At()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(L(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=z(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)&&u.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==$e)return this.where(r.name).equals(r.keyPath.map(u=>e[u]));!r&&ne&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(u,c){try{return i.cmp(u,c)===0}catch{return!1}}const[l,a]=n.reduce(([u,c],h)=>{const d=s[h],f=e[h];return[u||d,u||!d?Te(c,d&&d.multi?g=>{const m=le(g,h);return L(m)&&m.some(v=>o(f,v))}:g=>o(f,le(g,h))):c]},[null,null]);return l?this.where(l.name).equals(e[l.keyPath]).filter(a):r?this.filter(a):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,L(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(Q(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){F(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Nt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||L(e))return this.where(":id").equals(e).modify(n);{const r=le(e,this.schema.primKey.keyPath);if(r===void 0)return M(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?z(n).forEach(s=>{Z(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Nt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:oi})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=a&&l?e.map(Nt(a)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:g})=>{if(h===0)return i?d:f;throw new lt(`${this.name}.bulkAdd(): ${h} of ${u} operations failed`,g)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=a&&l?e.map(Nt(a)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:g})=>{if(h===0)return i?d:f;throw new lt(`${this.name}.bulkPut(): ${h} of ${u} operations failed`,g)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new lt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function ht(t){var e={},n=function(l,a){if(a){for(var u=arguments.length,c=new Array(u-1);--u;)c[u-1]=arguments[u];return e[l].subscribe.apply(null,c),t}if(typeof l=="string")return e[l]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(l,a,u){if(typeof l=="object")return o(l);a||(a=Wo),u||(u=T);var c={subscribers:[],fire:u,subscribe:function(h){c.subscribers.indexOf(h)===-1&&(c.subscribers.push(h),c.fire=a(c.fire,h))},unsubscribe:function(h){c.subscribers=c.subscribers.filter(function(d){return d!==h}),c.fire=c.subscribers.reduce(a,u)}};return e[l]=n[l]=c,c}function o(l){z(l).forEach(function(a){var u=l[a];if(L(u))i(a,l[a][0],l[a][1]);else{if(u!=="asap")throw new C.InvalidArgument("Invalid event config");var c=i(a,wt,function(){for(var h=arguments.length,d=new Array(h);h--;)d[h]=arguments[h];c.subscribers.forEach(function(f){Hs(function(){f.apply(null,d)})})})}})}}function Ze(t,e){return Le(e).from({prototype:t}),e}function De(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function xn(t,e){t.filter=Te(t.filter,e)}function Sn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Te(r(),e()):e,t.justLimit=n&&!r}function Ut(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Yr(t,e,n){const r=Ut(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Rt(t,e,n,r){const s=t.replayFilter?Te(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(l,a,u)=>{if(!s||s(a,u,d=>a.stop(d),d=>a.fail(d))){var c=a.primaryKey,h=""+c;h==="[object ArrayBuffer]"&&(h=""+new Uint8Array(c)),Q(i,h)||(i[h]=!0,e(l,a,u))}};return Promise.all([t.or._iterate(o,n),Qr(Yr(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Qr(Yr(t,r,n),Te(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Qr(t,e,n,r){var s=R(r?(i,o,l)=>n(r(i),o,l):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,l=>o=l,l=>{i.stop(l),o=T},l=>{i.fail(l),o=T})||s(i.value,i,l=>o=l),o()})})}function U(t,e){try{const n=Xr(t),r=Xr(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let u=0;u<a;++u)if(s[u]!==i[u])return s[u]<i[u]?-1:1;return o===l?0:o<l?-1:1}(Zr(t),Zr(e));case"Array":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let u=0;u<a;++u){const c=U(s[u],i[u]);if(c!==0)return c}return o===l?0:o<l?-1:1}(t,e)}}catch{}return NaN}function Xr(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=zn(t);return n==="ArrayBuffer"?"binary":n}function Zr(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class ra{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,M.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,M.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Te(n.algorithm,e)}_iterate(e,n){return Rt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&F(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Rt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(De(r,!0))return s.count({trans:n,query:{index:Ut(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Rt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[s]}var l=this._ctx.dir==="next"?1:-1;function a(u,c){var h=o(u,i),d=o(c,i);return h<d?-l:h>d?l:0}return this.toArray(function(u){return u.sort(a)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&De(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=Ut(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Rt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,De(n)?Sn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Sn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Sn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return xn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return xn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Te(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&De(n,!0)&&n.limit>0)return this._read(s=>{var i=Ut(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return xn(this._ctx,function(s){var i=s.primaryKey.toString(),o=Q(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=z(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var y=i[p],b=e[y];le(m,y)!==b&&(Z(m,y,b),v=!0)}return v}}const l=n.table.core,{outbound:a,extractKey:u}=l.schema.primaryKey,c=this.db._options.modifyChunkSize||200,h=[];let d=0;const f=[],g=(m,v)=>{const{failures:p,numFailures:y}=v;d+=m-y;for(let b of z(p))h.push(p[b])};return this.clone().primaryKeys().then(m=>{const v=p=>{const y=Math.min(c,m.length-p);return l.getMany({trans:r,keys:m.slice(p,p+y),cache:"immutable"}).then(b=>{const E=[],x=[],w=a?[]:null,_=[];for(let $=0;$<y;++$){const O=b[$],D={value:$t(O),primKey:m[p+$]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(m[p+$]):a||U(u(O),u(D.value))===0?(x.push(D.value),a&&w.push(m[p+$])):(_.push(m[p+$]),E.push(D.value)))}const k=De(n)&&n.limit===1/0&&(typeof e!="function"||e===$n)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&l.mutate({trans:r,type:"add",values:E}).then($=>{for(let O in $.failures)_.splice(parseInt(O),1);g(E.length,$)})).then(()=>(x.length>0||k&&typeof e=="object")&&l.mutate({trans:r,type:"put",keys:w,values:x,criteria:k,changeSpec:typeof e!="function"&&e}).then($=>g(x.length,$))).then(()=>(_.length>0||k&&e===$n)&&l.mutate({trans:r,type:"delete",keys:_,criteria:k}).then($=>g(_.length,$))).then(()=>m.length>p+y&&v(p+c))})};return v(0).then(()=>{if(h.length>0)throw new Qt("Error modifying one or more objects",h,d,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return De(e)&&(e.isPrimKey&&!ta||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:l,lastResult:a,results:u,numFailures:c})=>{if(c)throw new Qt("Could not delete some values",Object.keys(l).map(h=>l[h]),o-c);return o-c}))}):this.modify($n)}}const $n=(t,e)=>e.value=null;function sa(t,e){return t<e?-1:t===e?0:1}function ia(t,e){return t>e?-1:t===e?0:1}function G(t,e,n){var r=t instanceof li?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function je(t){return new t.Collection(t,()=>ai("")).limit(0)}function oa(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),l=-1,a=0;a<o;++a){var u=e[a];if(u!==r[a])return s(t[a],n[a])<0?t.substr(0,a)+n[a]+n.substr(a+1):s(t[a],r[a])<0?t.substr(0,a)+r[a]+n.substr(a+1):l>=0?t.substr(0,l)+e[l]+n.substr(l+1):null;s(t[a],u)<0&&(l=a)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):l<0?null:t.substr(0,l)+r[l]+n.substr(l+1)}function Dt(t,e,n,r){var s,i,o,l,a,u,c,h=n.length;if(!n.every(m=>typeof m=="string"))return G(t,"String expected.");function d(m){s=function(p){return p==="next"?y=>y.toUpperCase():y=>y.toLowerCase()}(m),i=function(p){return p==="next"?y=>y.toLowerCase():y=>y.toUpperCase()}(m),o=m==="next"?sa:ia;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,y){return o(p.lower,y.lower)});l=v.map(function(p){return p.upper}),a=v.map(function(p){return p.lower}),u=m,c=m==="next"?"":r}d("next");var f=new t.Collection(t,()=>he(l[0],a[h-1]+r));f._ondirectionchange=function(m){d(m)};var g=0;return f._addAlgorithm(function(m,v,p){var y=m.key;if(typeof y!="string")return!1;var b=i(y);if(e(b,a,g))return!0;for(var E=null,x=g;x<h;++x){var w=oa(y,b,l[x],a[x],o,u);w===null&&E===null?g=x+1:(E===null||o(E,w)>0)&&(E=w)}return v(E!==null?function(){m.continue(E+c)}:p),!1}),f}function he(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function ai(t){return{type:1,lower:t,upper:t}}class li{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?je(this):new this.Collection(this,()=>he(e,n,!r,!s))}catch{return G(this,re)}}equals(e){return e==null?G(this,re):new this.Collection(this,()=>ai(e))}above(e){return e==null?G(this,re):new this.Collection(this,()=>he(e,void 0,!0))}aboveOrEqual(e){return e==null?G(this,re):new this.Collection(this,()=>he(e,void 0,!1))}below(e){return e==null?G(this,re):new this.Collection(this,()=>he(void 0,e,!1,!0))}belowOrEqual(e){return e==null?G(this,re):new this.Collection(this,()=>he(void 0,e))}startsWith(e){return typeof e!="string"?G(this,"String expected."):this.between(e,e+$e,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Dt(this,(n,r)=>n.indexOf(r[0])===0,[e],$e)}equalsIgnoreCase(e){return Dt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ie.apply(Be,arguments);return e.length===0?je(this):Dt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ie.apply(Be,arguments);return e.length===0?je(this):Dt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,$e)}anyOf(){const e=ie.apply(Be,arguments);let n=this._cmp;try{e.sort(n)}catch{return G(this,re)}if(e.length===0)return je(this);const r=new this.Collection(this,()=>he(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,l)=>{const a=i.key;for(;n(a,e[s])>0;)if(++s,s===e.length)return o(l),!1;return n(a,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ie.apply(Be,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return G(this,re)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,l=this._max;if(e.length===0)return je(this);if(!e.every(y=>y[0]!==void 0&&y[1]!==void 0&&s(y[0],y[1])<=0))return G(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const a=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,h=s;function d(y,b){return h(y[0],b[0])}try{c=e.reduce(function(y,b){let E=0,x=y.length;for(;E<x;++E){const w=y[E];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=l(w[1],b[1]);break}}return E===x&&y.push(b),y},[]),c.sort(d)}catch{return G(this,re)}let f=0;const g=u?y=>s(y,c[f][1])>0:y=>s(y,c[f][1])>=0,m=a?y=>i(y,c[f][0])>0:y=>i(y,c[f][0])>=0;let v=g;const p=new this.Collection(this,()=>he(c[0][0],c[c.length-1][1],!a,!u));return p._ondirectionchange=y=>{y==="next"?(v=g,h=s):(v=m,h=i),c.sort(d)},p._addAlgorithm((y,b,E)=>{for(var x=y.key;v(x);)if(++f,f===c.length)return b(E),!1;return!!function(w){return!g(w)&&!m(w)}(x)||(this._cmp(x,c[f][1])===0||this._cmp(x,c[f][0])===0||b(()=>{h===s?y.continue(c[f][0]):y.continue(c[f][1])}),!1)}),p}startsWithAnyOf(){const e=ie.apply(Be,arguments);return e.every(n=>typeof n=="string")?e.length===0?je(this):this.inAnyRange(e.map(n=>[n,n+$e])):G(this,"startsWithAnyOf() only works with strings")}}function ee(t){return R(function(e){return _t(e),t(e.target.error),!1})}function _t(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const ge=ht(null,"storagemutated");class aa{_lock(){return tt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(tt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{Ye(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(tt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return tt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=R(s=>{_t(s),this._reject(e.error)}),e.onabort=R(s=>{_t(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=R(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&ge.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return M(new C.ReadOnly("Transaction is readonly"));if(!this.active)return M(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return pe(()=>{var i=new S((o,l)=>{this._lock();const a=n(o,l,this);a&&a.then&&a.then(o,l)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var l=n(i,o,this);l&&l.then&&l.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,l)=>{r.then(a=>n._waitingQueue.push(R(o.bind(null,a))),a=>n._waitingQueue.push(R(l.bind(null,a)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Q(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Gn(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+ci(e)}}function ci(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function ui(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:Us(n,r=>[r.name,r])}}let xt=t=>{try{return t.only([[]]),xt=()=>[[]],[[]]}catch{return xt=()=>$e,$e}};function Jn(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>le(n,e)}(t):e=>le(e,t)}function es(t){return[].slice.call(t)}let la=0;function dt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function ca(t,e,n){function r(a){if(a.type===3)return null;if(a.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:h,upperOpen:d}=a;return u===void 0?c===void 0?null:e.upperBound(c,!!d):c===void 0?e.lowerBound(u,!!h):e.bound(u,c,!!h,!!d)}const{schema:s,hasGetAll:i}=function(a,u){const c=es(a.objectStoreNames);return{schema:{name:a.name,tables:c.map(h=>u.objectStore(h)).map(h=>{const{keyPath:d,autoIncrement:f}=h,g=L(d),m=d==null,v={},p={name:h.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:g,keyPath:d,autoIncrement:f,unique:!0,extractKey:Jn(d)},indexes:es(h.indexNames).map(y=>h.index(y)).map(y=>{const{name:b,unique:E,multiEntry:x,keyPath:w}=y,_={name:b,compound:L(w),keyPath:w,unique:E,multiEntry:x,extractKey:Jn(w)};return v[dt(w)]=_,_}),getIndexByKeyPath:y=>v[dt(y)]};return v[":id"]=p.primaryKey,d!=null&&(v[dt(d)]=p.primaryKey),p})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(a=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:h,type:d,keys:f,values:g,range:m}){return new Promise((v,p)=>{v=R(v);const y=h.objectStore(c),b=y.keyPath==null,E=d==="put"||d==="add";if(!E&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:x}=f||g||{length:1};if(f&&g&&f.length!==g.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],k=[];let $=0;const O=H=>{++$,_t(H)};if(d==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:k,results:[],lastResult:void 0});m.type===3?_.push(w=y.clear()):_.push(w=y.delete(r(m)))}else{const[H,K]=E?b?[g,f]:[g,null]:[f,null];if(E)for(let j=0;j<x;++j)_.push(w=K&&K[j]!==void 0?y[d](H[j],K[j]):y[d](H[j])),w.onerror=O;else for(let j=0;j<x;++j)_.push(w=y[d](H[j])),w.onerror=O}const D=H=>{const K=H.target.result;_.forEach((j,Ne)=>j.error!=null&&(k[Ne]=j.error)),v({numFailures:$,failures:k,results:d==="delete"?f:_.map(j=>j.result),lastResult:K})};w.onerror=H=>{O(H),D(H)},w.onsuccess=D})},getMany:({trans:h,keys:d})=>new Promise((f,g)=>{f=R(f);const m=h.objectStore(c),v=d.length,p=new Array(v);let y,b=0,E=0;const x=_=>{const k=_.target;p[k._pos]=k.result,++E===b&&f(p)},w=ee(g);for(let _=0;_<v;++_)d[_]!=null&&(y=m.get(d[_]),y._pos=_,y.onsuccess=x,y.onerror=w,++b);b===0&&f(p)}),get:({trans:h,key:d})=>new Promise((f,g)=>{f=R(f);const m=h.objectStore(c).get(d);m.onsuccess=v=>f(v.target.result),m.onerror=ee(g)}),query:function(h){return d=>new Promise((f,g)=>{f=R(f);const{trans:m,values:v,limit:p,query:y}=d,b=p===1/0?void 0:p,{index:E,range:x}=y,w=m.objectStore(c),_=E.isPrimaryKey?w:w.index(E.name),k=r(x);if(p===0)return f({result:[]});if(h){const $=v?_.getAll(k,b):_.getAllKeys(k,b);$.onsuccess=O=>f({result:O.target.result}),$.onerror=ee(g)}else{let $=0;const O=v||!("openKeyCursor"in _)?_.openCursor(k):_.openKeyCursor(k),D=[];O.onsuccess=H=>{const K=O.result;return K?(D.push(v?K.value:K.primaryKey),++$===p?f({result:D}):void K.continue()):f({result:D})},O.onerror=ee(g)}})}(i),openCursor:function({trans:h,values:d,query:f,reverse:g,unique:m}){return new Promise((v,p)=>{v=R(v);const{index:y,range:b}=f,E=h.objectStore(c),x=y.isPrimaryKey?E:E.index(y.name),w=g?m?"prevunique":"prev":m?"nextunique":"next",_=d||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=ee(p),_.onsuccess=R(k=>{const $=_.result;if(!$)return void v(null);$.___id=++la,$.done=!1;const O=$.continue.bind($);let D=$.continuePrimaryKey;D&&(D=D.bind($));const H=$.advance.bind($),K=()=>{throw new Error("Cursor not stopped")};$.trans=h,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=R(p),$.next=function(){let j=1;return this.start(()=>j--?this.continue():this.stop()).then(()=>this)},$.start=j=>{const Ne=new Promise((V,ve)=>{V=R(V),_.onerror=ee(ve),$.fail=ve,$.stop=Qe=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=K,V(Qe)}}),Re=()=>{if(_.result)try{j()}catch(V){$.fail(V)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=R(V=>{_.onsuccess=Re,Re()}),$.continue=O,$.continuePrimaryKey=D,$.advance=H,Re(),Ne},v($)},p)})},count({query:h,trans:d}){const{index:f,range:g}=h;return new Promise((m,v)=>{const p=d.objectStore(c),y=f.isPrimaryKey?p:p.index(f.name),b=r(g),E=b?y.count(b):y.count();E.onsuccess=R(x=>m(x.target.result)),E.onerror=ee(v)})}}}(a)),l={};return o.forEach(a=>l[a.name]=a),{stack:"dbcore",transaction:t.transaction.bind(t),table(a){if(!l[a])throw new Error(`Table '${a}' not found`);return l[a]},MIN_KEY:-1/0,MAX_KEY:xt(e),schema:s}}function Yn({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:l},a){return{dbcore:function(c,h){return h.reduce((d,{create:f})=>({...d,...f(d)}),c)}(ca(i,o,a),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function nn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const l=ur(o,s);(!l||"value"in l&&l.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ae(o,s,{get(){return this.table(s)},set(a){Is(this,s,{value:a,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function Qn({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function ua(t,e){return t._cfg.version-e._cfg.version}function ha(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),l=A.transless||A;pe(()=>{A.trans=i,A.transless=l,e===0?(z(s).forEach(a=>{En(n,a,s[a].primKey,s[a].indexes)}),Yn(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:a},u,c,h){const d=[],f=a._versions;let g=a._dbSchema=Zn(a,a.idbdb,h),m=!1;function v(){return d.length?S.resolve(d.shift()(c.idbtrans)).then(v):S.resolve()}return f.filter(p=>p._cfg.version>=u).forEach(p=>{d.push(()=>{const y=g,b=p._cfg.dbschema;er(a,y,h),er(a,b,h),g=a._dbSchema=b;const E=hi(y,b);E.add.forEach(w=>{En(h,w[0],w[1].primKey,w[1].indexes)}),E.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=h.objectStore(w.name);w.add.forEach(k=>Xn(_,k)),w.change.forEach(k=>{_.deleteIndex(k.name),Xn(_,k)}),w.del.forEach(k=>_.deleteIndex(k))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>u){Yn(a,h),c._memoizedTables={},m=!0;let w=Fs(b);E.del.forEach(O=>{w[O]=y[O]}),Qn(a,[a.Transaction.prototype]),nn(a,[a.Transaction.prototype],z(w),w),c.schema=w;const _=hr(x);let k;_&&Je();const $=S.follow(()=>{if(k=x(c),k&&_){var O=ue.bind(null,null);k.then(O,O)}});return k&&typeof k.then=="function"?S.resolve(k):$.then(()=>k)}}),d.push(y=>{(!m||!ea)&&function(b,E){[].slice.call(E.db.objectStoreNames).forEach(x=>b[x]==null&&E.db.deleteObjectStore(x))}(p._cfg.dbschema,y),Qn(a,[a.Transaction.prototype]),nn(a,[a.Transaction.prototype],a._storeNames,a._dbSchema),c.schema=a._dbSchema})}),v().then(()=>{var p,y;y=h,z(p=g).forEach(b=>{y.db.objectStoreNames.contains(b)||En(y,b,p[b].primKey,p[b].indexes)})})}(t,e,i,n).catch(o)})}function hi(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!hn)o.recreate=!0,n.change.push(o);else{const l=s.idxByName,a=i.idxByName;let u;for(u in l)a[u]||o.del.push(u);for(u in a){const c=l[u],h=a[u];c?c.src!==h.src&&o.change.push(h):o.add.push(h)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function En(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>Xn(s,i)),s}function Xn(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Zn(t,e,n){const r={};return Yt(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const l=Gn(ci(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),a=[];for(let c=0;c<i.indexNames.length;++c){const h=i.index(i.indexNames[c]);o=h.keyPath;var u=Gn(h.name,o,!!h.unique,!!h.multiEntry,!1,o&&typeof o!="string",!1);a.push(u)}r[s]=ui(s,l,a)}),r}function er({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let l=0;l<o.indexNames.length;++l){const a=o.indexNames[l],u=o.index(a).keyPath,c=typeof u=="string"?u:"["+Yt(u).join("+")+"]";if(e[i]){const h=e[i].idxByName[c];h&&(h.name=a,delete e[i].idxByName[c],e[i].idxByName[a]=h)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&N.WorkerGlobalScope&&N instanceof N.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class da{_parseStoresSpec(e,n){z(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,l)=>{const a=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(a)?a.match(/^\[(.*)\]$/)[1].split("+"):a;return Gn(a,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),L(u),l===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=ui(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?F(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{F(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,Qn(n,[n._allTables,n,n.Transaction.prototype]),nn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],z(i),i),n._storeNames=z(i),this}upgrade(e){return this._cfg.contentUpgrade=mr(this._cfg.contentUpgrade||T,e),this}}function vr(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Ce("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function wr(t){return t&&typeof t.databases=="function"}function tr(t){return pe(function(){return A.letThrough=!0,t()})}function fa(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function ma(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?M(e.dbOpenError):t);ne&&(e.openCanceller._stackHolder=Oe()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,l=!1;return S.race([r,(typeof navigator>"u"?S.resolve():fa()).then(()=>new S((a,u)=>{if(s(),!n)throw new C.MissingAPI;const c=t.name,h=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!h)throw new C.MissingAPI;h.onerror=ee(u),h.onblocked=R(t._fireOnBlocked),h.onupgradeneeded=R(d=>{if(o=h.transaction,e.autoSchema&&!t._options.allowEmptyDB){h.onerror=_t,o.abort(),h.result.close();const g=n.deleteDatabase(c);g.onsuccess=g.onerror=R(()=>{u(new C.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=ee(u);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;l=f<1,t._novip.idbdb=h.result,ha(t,f/10,o,u)}},u),h.onsuccess=R(()=>{o=null;const d=t._novip.idbdb=h.result,f=Yt(d.objectStoreNames);if(f.length>0)try{const m=d.transaction((g=f).length===1?g[0]:g,"readonly");e.autoSchema?function({_novip:v},p,y){v.verno=p.version/10;const b=v._dbSchema=Zn(0,p,y);v._storeNames=Yt(p.objectStoreNames,0),nn(v,[v._allTables],z(b),b)}(t,d,m):(er(t,t._dbSchema,m),function(v,p){const y=hi(Zn(0,v.idbdb,p),v._dbSchema);return!(y.add.length||y.change.some(b=>b.add.length||b.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Yn(t,m)}catch{}var g;ut.push(t),d.onversionchange=R(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),d.onclose=R(m=>{t.on("close").fire(m)}),l&&function({indexedDB:m,IDBKeyRange:v},p){!wr(m)&&p!=="__dbnames"&&vr(m,v).put({name:p}).catch(T)}(t._deps,c),a()},u)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(tr(()=>t.on.ready.fire(t.vip))).then(function a(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.reduce(mr,T);return e.onReadyBeingFired=[],S.resolve(tr(()=>u(t.vip))).then(a)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(a=>{e.dbOpenError=a;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),M(a)}).finally(()=>{e.openComplete=!0,i()})}function nr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var l=i(o),a=l.value;return l.done?a:a&&typeof a.then=="function"?a.then(n,r):L(a)?Promise.all(a).then(n,r):n(a)}}return s(e)()}function pa(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=Vs(s);return[t,i,n]}function di(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),l={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(h){return h.name===fr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>di(t,e,n,null,s))):M(h)}const a=hr(s);let u;a&&Je();const c=S.follow(()=>{if(u=s.call(o,o),u)if(a){var h=ue.bind(null,null);u.then(h,h)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=nr(u))},l);return(u&&typeof u.then=="function"?S.resolve(u).then(h=>o.active?h:M(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(h=>(r&&o._resolve(),o._completion.then(()=>h))).catch(h=>(o._reject(h),M(h)))})}function jt(t,e,n){const r=L(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const ya={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(c,h,d){const f=dt(c),g=s[f]=s[f]||[],m=c==null?0:typeof c=="string"?1:c.length,v=h>0,p={...d,isVirtual:v,keyTail:h,keyLength:m,extractKey:Jn(c),unique:!v&&d.unique};return g.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?c[0]:c.slice(0,m-1),h+1,d),g.sort((y,b)=>y.keyTail-b.keyTail),p}const l=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[l];for(const c of r.indexes)o(c.keyPath,0,c);function a(c){const h=c.query.index;return h.isVirtual?{...c,query:{index:h,range:(d=c.query.range,f=h.keyTail,{type:d.type===1?2:d.type,lower:jt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:jt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var d,f}return{...n,schema:{...r,primaryKey:l,indexes:i,getIndexByKeyPath:function(c){const h=s[dt(c)];return h&&h[0]}},count:c=>n.count(a(c)),query:c=>n.query(a(c)),openCursor(c){const{keyTail:h,isVirtual:d,keyLength:f}=c.query.index;return d?n.openCursor(a(c)).then(g=>g&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(jt(p,c.reverse?t.MAX_KEY:t.MIN_KEY,h)):c.unique?m.continue(m.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,h)):m.continue()}},continuePrimaryKey:{value(p,y){m.continuePrimaryKey(jt(p,t.MAX_KEY,h),y)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(g)):n.openCursor(c)}}}}}};function br(t,e,n,r){return n=n||{},r=r||"",z(t).forEach(s=>{if(Q(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const l=zn(i);l!==zn(o)?n[r+s]=e[s]:l==="Object"?br(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),z(e).forEach(s=>{Q(t,s)||(n[r+s]=e[s])}),n}const ga={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:l,creating:a,updating:u}=o.table(e).hook;switch(i.type){case"add":if(a.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"put":if(a.fire===T&&u.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"delete":if(l.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"deleteRange":if(l.fire===T)break;return o._promise("readwrite",()=>function(d){return h(d.trans,d.range,1e4)}(i),!0)}return n.mutate(i);function c(d){const f=A.trans,g=d.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,d);if(!g)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:g}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,d,g).then(m=>{const v=g.map((p,y)=>{const b=m[y],E={onerror:null,onsuccess:null};if(d.type==="delete")l.fire.call(E,p,b,f);else if(d.type==="add"||b===void 0){const x=a.fire.call(E,p,d.values[y],f);p==null&&x!=null&&(p=x,d.keys[y]=p,r.outbound||Z(d.values[y],r.keyPath,p))}else{const x=br(b,d.values[y]),w=u.fire.call(E,x,p,b,f);if(w){const _=d.values[y];Object.keys(w).forEach(k=>{Q(_,k)?_[k]=w[k]:Z(_,k,w[k])})}}return E});return n.mutate(d).then(({failures:p,results:y,numFailures:b,lastResult:E})=>{for(let x=0;x<g.length;++x){const w=y?y[x]:g[x],_=v[x];w==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(d.type==="put"&&m[x]?d.values[x]:w)}return{failures:p,results:y,numFailures:b,lastResult:E}}).catch(p=>(v.forEach(y=>y.onerror&&y.onerror(p)),Promise.reject(p)))})}function h(d,f,g){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:g}).then(({result:m})=>c({type:"delete",keys:m,trans:d}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<g?{failures:[],numFailures:0,lastResult:void 0}:h(d,{...f,lower:m[m.length-1],lowerOpen:!0},g)))}}}}})};function fi(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)U(e.keys[s],t[i])===0&&(r.push(n?$t(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const va={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=fi(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?$t(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function _r(t){return!("from"in t)}const se=function(t,e){if(!this){const n=new se;return t&&"d"in t&&F(n,t),n}F(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function St(t,e,n){const r=U(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(_r(t))return F(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(U(n,t.from)<0)return s?St(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},ts(t);if(U(e,t.to)>0)return i?St(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},ts(t);U(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),U(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&rn(t,s),i&&o&&rn(t,i)}function rn(t,e){_r(e)||function n(r,{from:s,to:i,l:o,r:l}){St(r,s,i),o&&n(r,o),l&&n(r,l)}(t,e)}function wa(t,e){const n=rr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=rr(t);let o=i.next(s.from),l=o.value;for(;!r.done&&!o.done;){if(U(l.from,s.to)<=0&&U(l.to,s.from)>=0)return!0;U(s.from,l.from)<0?s=(r=n.next(l.from)).value:l=(o=i.next(s.from)).value}return!1}function rr(t){let e=_r(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&U(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||U(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function ts(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},l=t[s];t.from=l.from,t.to=l.to,t[s]=l[s],o[s]=l[i],t[i]=o,o.d=ns(o)}t.d=ns(t)}function ns({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}Ge(se.prototype,{add(t){return rn(this,t),this},addKey(t){return St(this,t,t),this},addKeys(t){return t.forEach(e=>St(this,e,e)),this},[Mn](){return rr(this)}});const ba={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new se(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:l,outbound:a}=o,u={...s,mutate:d=>{const f=d.trans,g=f.mutatedParts||(f.mutatedParts={}),m=w=>{const _=`idb://${e}/${r}/${w}`;return g[_]||(g[_]=new se)},v=m(""),p=m(":dels"),{type:y}=d;let[b,E]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const x=d.trans._cache;return s.mutate(d).then(w=>{if(L(b)){y!=="delete"&&(b=w.results),v.addKeys(b);const _=fi(b,x);_||y==="add"||p.addKeys(b),(_||E)&&function(k,$,O,D){function H(K){const j=k(K.name||"");function Ne(V){return V!=null?K.extractKey(V):null}const Re=V=>K.multiEntry&&L(V)?V.forEach(ve=>j.addKey(ve)):j.addKey(V);(O||D).forEach((V,ve)=>{const Qe=O&&Ne(O[ve]),fn=D&&Ne(D[ve]);U(Qe,fn)!==0&&(Qe!=null&&Re(Qe),fn!=null&&Re(fn))})}$.indexes.forEach(H)}(m,i,_,E)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return w})}},c=({query:{index:d,range:f}})=>{var g,m;return[d,new se((g=f.lower)!==null&&g!==void 0?g:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},h={get:d=>[o,new se(d.key)],getMany:d=>[o,new se().addKeys(d.keys)],count:c,query:c,openCursor:c};return z(h).forEach(d=>{u[d]=function(f){const{subscr:g}=A;if(g){const m=E=>{const x=`idb://${e}/${r}/${E}`;return g[x]||(g[x]=new se)},v=m(""),p=m(":dels"),[y,b]=h[d](f);if(m(y.name||"").add(b),!y.isPrimaryKey){if(d!=="count"){const E=d==="query"&&a&&f.values&&s.query({...f,values:!1});return s[d].apply(this,arguments).then(x=>{if(d==="query"){if(a&&f.values)return E.then(({result:_})=>(v.addKeys(_),x));const w=f.values?x.result.map(l):x.result;f.values?v.addKeys(w):p.addKeys(w)}else if(d==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const k=w.primaryKey;return p.addKey(k),k}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return x})}p.add(n)}}return s[d].apply(this,arguments)}}),u}}}};class Ce{constructor(e,n){this._middlewares={},this.verno=0;const r=Ce.dependencies;this._options=n={addons:Ce.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(l=>{i.dbReadyResolve=l}),i.openCanceller=new S((l,a)=>{i.cancelOpen=a}),this._state=i,this.name=e,this.on=ht(this,"populate","blocked","versionchange","close",{ready:[mr,T]}),this.on.ready.subscribe=Ls(this.on.ready.subscribe,l=>(a,u)=>{Ce.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||S.resolve().then(a),u&&l(a);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(a),u&&l(a);else{l(a);const h=this;u||l(function d(){h.on.ready.unsubscribe(a),h.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,Ze(ra.prototype,function(l,a){this.db=o;let u=oi,c=null;if(a)try{u=a()}catch(g){c=g}const h=l._ctx,d=h.table,f=d.hook.reading.fire;this._ctx={table:d,index:h.index,isPrimKey:!h.index||d.schema.primKey.keyPath&&h.index===d.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:h.or,valueMapper:f!==wt?f:null}})),this.Table=function(l){return Ze(na.prototype,function(a,u,c){this.db=l,this._tx=c,this.name=a,this.schema=u,this.hook=l._allTables[a]?l._allTables[a].hook:ht(null,{creating:[Fo,T],reading:[Uo,wt],updating:[qo,T],deleting:[Vo,T]})})}(this),this.Transaction=function(l){return Ze(aa.prototype,function(a,u,c,h,d){this.db=l,this.mode=a,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=h,this.idbtrans=null,this.on=ht(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,g)=>{this._resolve=f,this._reject=g}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var g=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):g&&this.idbtrans&&this.idbtrans.abort(),M(f)})})}(this),this.Version=function(l){return Ze(da.prototype,function(a){this.db=l,this._cfg={version:a,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(l){return Ze(li.prototype,function(a,u,c){this.db=l,this._ctx={table:a,index:u===":id"?null:u,or:c};const h=l._deps.indexedDB;if(!h)throw new C.MissingAPI;this._cmp=this._ascending=h.cmp.bind(h),this._descending=(d,f)=>h.cmp(f,d),this._max=(d,f)=>h.cmp(d,f)>0?d:f,this._min=(d,f)=>h.cmp(d,f)<0?d:f,this._IDBKeyRange=l._deps.IDBKeyRange})}(this),this.on("versionchange",l=>{l.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",l=>{!l.newVersion||l.newVersion<l.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${l.oldVersion/10}`)}),this._maxKey=xt(n.IDBKeyRange),this._createTransaction=(l,a,u,c)=>new this.Transaction(l,a,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=l=>{this.on("blocked").fire(l),ut.filter(a=>a.name===this.name&&a!==this&&!a._state.vcFired).map(a=>a.on("versionchange").fire(l))},this.use(ya),this.use(ga),this.use(ba),this.use(va),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(l=>l(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(ua),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,l)=>o.level-l.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return ma(this)}_close(){const e=this._state,n=ut.indexOf(this);if(n>=0&&ut.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=R(()=>{(function({indexedDB:l,IDBKeyRange:a},u){!wr(l)&&u!=="__dbnames"&&vr(l,a).delete(u).catch(T)})(this._deps,this.name),r()}),o.onerror=ee(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return z(this._allTables).map(e=>this._allTables[e])}transaction(){const e=pa.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,l;e=e.replace("!","").replace("?","");try{if(l=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&l.forEach(u=>{if(s&&s.storeNames.indexOf(u)===-1){if(!i)throw new C.SubTransaction("Table "+u+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(u){return s?s._promise(null,(c,h)=>{h(u)}):M(u)}const a=di.bind(null,this,o,l,s,r);return s?s._promise(o,a,"lock"):A.trans?Ye(A.transless,()=>this._whenReady(a)):this._whenReady(a)}table(e){if(!Q(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const _a=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class xa{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[_a](){return this}}function mi(t,e){return z(e).forEach(n=>{rn(t[n]||(t[n]=new se),e[n])}),t}function Sa(t){return new xa(e=>{const n=hr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,ge.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let l=!1,a=!1;function u(){return z(i).some(d=>s[d]&&wa(s[d],i[d]))}const c=d=>{mi(s,d),u()&&h()},h=()=>{if(l||r)return;s={};const d={},f=function(g){n&&Je();const m=()=>pe(t,{subscr:g,trans:null}),v=A.trans?Ye(A.transless,m):m();return n&&v.then(ue,ue),v}(d);a||(ge("storagemutated",c),a=!0),l=!0,Promise.resolve(f).then(g=>{l=!1,r||(u()?h():(s={},i=d,e.next&&e.next(g)))},g=>{l=!1,e.error&&e.error(g),o.unsubscribe()})};return h(),o})}let sr;try{sr={indexedDB:N.indexedDB||N.mozIndexedDB||N.webkitIndexedDB||N.msIndexedDB,IDBKeyRange:N.IDBKeyRange||N.webkitIDBKeyRange}}catch{sr={indexedDB:null,IDBKeyRange:null}}const be=Ce;function Ft(t){let e=oe;try{oe=!0,ge.storagemutated.fire(t)}finally{oe=e}}Ge(be,{...Bt,delete:t=>new be(t,{addons:[]}).delete(),exists:t=>new be(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return wr(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):vr(e,n).toCollection().primaryKeys()}(be.dependencies).then(t)}catch{return M(new C.MissingAPI)}},defineClass:()=>function(t){F(this,t)},ignoreTransaction:t=>A.trans?Ye(A.transless,t):t(),vip:tr,async:function(t){return function(){try{var e=nr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return M(n)}}},spawn:function(t,e,n){try{var r=nr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return M(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?be.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>ne,set:t=>{Ws(t,t==="dexie"?()=>!0:ii)}},derive:Le,extend:F,props:Ge,override:Ls,Events:ht,on:ge,liveQuery:Sa,extendObservabilitySet:mi,getByKeyPath:le,setByKeyPath:Z,delByKeyPath:function(t,e){typeof e=="string"?Z(t,e,void 0):"length"in e&&[].map.call(e,function(n){Z(t,n,void 0)})},shallowClone:Fs,deepClone:$t,getObjectDiff:br,cmp:U,asap:Hs,minKey:-(1/0),addons:[],connections:ut,errnames:fr,dependencies:sr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),be.maxKey=xt(be.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ge("storagemutated",t=>{if(!oe){let e;hn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),oe=!0,dispatchEvent(e),oe=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{oe||Ft(t)}));let oe=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),ge("storagemutated",e=>{oe||t.postMessage(e)}),t.onmessage=e=>{e.data&&Ft(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){ge("storagemutated",e=>{try{oe||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Ft(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Ft(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof He||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Wr[t.name])return t;var n=new Wr[t.name](e||t.message,t);return"stack"in t&&ae(n,"stack",{get:function(){return this.inner.stack}}),n},Ws(ne,ii);class Ct extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class rs extends Ct{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const dn="locationchange";let ss=!1;const $a=window.history.pushState;function is(...t){const e=$a.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}const Ea=window.history.replaceState;function os(...t){const e=Ea.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}function Aa(){if(!ss){if(window.history.pushState===is)throw new rs("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===os)throw new rs("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");ss=!0,window.history.pushState=is,window.history.replaceState=os,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(dn))})}}function Ca(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function ka(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Pa(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?Ca(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Ta extends Ct{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function pi(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const as=6;function ls(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>as)throw new Ta(`Route sanitization depth has exceed the max of ${as} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(pi(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class An extends Ct{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Oa(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new An(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new An(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new An(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Na(t,e,n,r=!1){const s=yi(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function yi(t,e,n=""){var r;if(!n&&e!=null)throw new Ct("Route base regexp was defined but routeBase string was not provided.");const s=Ra(e)?`/${n}`:"",i=t.search?ka(t.search).toString():"",o=i?`?${i}`:"",l=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",a=t.hash?`${l}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${a}`}function Ra(t){return!!(t&&window.location.pathname.match(t))}function Da(t={}){var e;Oa(t),Aa();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const l={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(o,l=!1,a=!1)=>{const u=i.getCurrentRawRoutes(),c={...u,...o},h=i.sanitizeFullRoute(c);if(!(!a&&pi(u,h)))return Na(h,r,n,l)},createRoutesUrl:o=>yi(o,r,n),getCurrentRawRoutes:()=>Pa(r),addRouteListener:(o,l)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Ct(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(l),s||(window.addEventListener(dn,()=>ls(i)),s=!0),o&&ls(i,l),l},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const gi=Da({routeBase:"resizable-image-element"}),ja=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],za="resizable-image-element-storage";class Ma extends Ce{constructor(){super(za),this.version(1).stores({storedUrls:"&index"})}}const Cn=new Ma,cs={async set(t){const e=sn(t).map((n,r)=>({index:r,url:n}));await Cn.storedUrls.clear(),await Cn.storedUrls.bulkPut(e)},async get(){const e=(await Cn.storedUrls.toArray()).map(r=>r.url),n=sn(e);return Ba(n.length?n:ja)}};function Ba(t){var e,n;try{const r=sn(((n=(e=gi.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function sn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter($i)}const{defineElement:Ka,defineElementNoInputs:Ia}=co(),zt=Ka()({tagName:"vir-url-input",events:{urlsChange:to()},styles:ot`
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
                ${it("input",l=>{const u=l.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(u))})}
                ${it("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),et={max:{width:300,height:600},min:{width:300,height:150}};Ia({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:$s(cs.get()),constraints:void 0,router:gi,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>ot`
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

        ${t.showConstraints} ${at} {
            border-color: blue;
        }

        ${at} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||et.min.width,height:Number(o==null?void 0:o.minH)||et.min.height},max:{width:Number(o==null?void 0:o.maxW)||et.max.width,height:Number(o==null?void 0:o.maxH)||et.max.height}}})}const n=t.constraints??et,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,l,a){e({constraints:{...n,[l]:{...n[l],[a]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!ds(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Vt(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(l){console.warn(l)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),W`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${zt}
                ${lr(zt,{urls:r})}
                ${it(zt.events.urlsChange,o=>{const l=o.detail;cs.set(l),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${zt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${it("input",o=>{const l=o.currentTarget;e({showConstraints:!!l.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const l=["height","width"].map(a=>{const u=[kn(o),kn(a)].join(" "),c=n[o][a];return W`
                            <label>
                                ${u}
                                <br />
                                ${X(c)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${c}
                                    ${it("input",h=>{i(h.currentTarget,o,a)})}
                                />
                            </label>
                        `});return W`
                        <div class="constraint-controls">${l}</div>
                    `})}
            </p>
            <div class="images-container">${La(n,t.imageUrls)}</div>
        `}});function La(t,e){return Dn(e,"Loading...",n=>sn(n).map(r=>{const s=`
                height: ${X(t.max.height)};
                max-height: ${X(t.max.height)};
                width: ${X(t.max.width)};
                max-width: ${X(t.max.width)}`,i=`height: ${X(t.min.height)}; width: ${X(t.min.width)}`;return W`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${at}
                            ${lr(at,{imageUrl:r,max:t.max,min:t.min})}
                        ></${at}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
