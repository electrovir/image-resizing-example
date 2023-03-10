(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Es(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Or(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Di({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const ji=["january","february","march","april","may","june","july","august","september","october","november","december"];ji.map(t=>t.slice(0,3));function cr(t){return t?t instanceof Error?t.message:String(t):""}function Pn(t){return t instanceof Error?t:new Error(cr(t))}function Mi(t){return!!t}function Tn(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Rr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Nr(t){return!!t&&typeof t=="object"}function Bi(t,e){try{if(t===e)return!0;if(Nr(t)&&Nr(e)){const n=Rr(t),r=Rr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${cr(n)}`),n}}function Ki(t,e){return Tn(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function As(t,e){let n=!1;const r=Tn(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Tn(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function ln(t){const e=ur();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ur(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ur.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function ee(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=window,hr=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dr=Symbol(),zr=new WeakMap;let Cs=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==dr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(hr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=zr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&zr.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new Cs(typeof t=="string"?t:t+"",void 0,dr),ks=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Cs(n,t,dr)},Li=(t,e)=>{hr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=It.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},Dr=hr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const Jt=window,jr=Jt.trustedTypes,Ii=jr?jr.emptyScript:"",Mr=Jt.reactiveElementPolyfillSupport,On={toAttribute(t,e){switch(e){case Boolean:t=t?Ii:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ps=(t,e)=>e!==t&&(e==e||t==t),pn={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:Ps};let Le=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=pn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(Dr(s))}else e!==void 0&&n.push(Dr(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Li(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=pn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:On).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:On;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ps)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Le.finalized=!0,Le.elementProperties=new Map,Le.elementStyles=[],Le.shadowRootOptions={mode:"open"},Mr==null||Mr({ReactiveElement:Le}),((mn=Jt.reactiveElementVersions)!==null&&mn!==void 0?mn:Jt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn;const Yt=window,Ye=Yt.trustedTypes,Br=Ye?Ye.createPolicy("lit-html",{createHTML:t=>t}):void 0,pe=`lit$${(Math.random()+"").slice(9)}$`,Ts="?"+pe,Hi=`<${Ts}>`,Xe=document,vt=(t="")=>Xe.createComment(t),wt=t=>t===null||typeof t!="object"&&typeof t!="function",Os=Array.isArray,Ui=t=>Os(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kr=/-->/g,Lr=/>/g,xe=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ir=/'/g,Hr=/"/g,Rs=/^(?:script|style|textarea|title)$/i,Fi=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),qi=Fi(1),ye=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Ur=new WeakMap,qe=Xe.createTreeWalker(Xe,129,null,!1),Vi=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=st;for(let l=0;l<n;l++){const d=t[l];let c,u,h=-1,f=0;for(;f<d.length&&(o.lastIndex=f,u=o.exec(d),u!==null);)f=o.lastIndex,o===st?u[1]==="!--"?o=Kr:u[1]!==void 0?o=Lr:u[2]!==void 0?(Rs.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=xe):u[3]!==void 0&&(o=xe):o===xe?u[0]===">"?(o=s??st,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?xe:u[3]==='"'?Hr:Ir):o===Hr||o===Ir?o=xe:o===Kr||o===Lr?o=st:(o=xe,s=void 0);const y=o===xe&&t[l+1].startsWith("/>")?" ":"";i+=o===st?d+Hi:h>=0?(r.push(c),d.slice(0,h)+"$lit$"+d.slice(h)+pe+y):d+pe+(h===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Br!==void 0?Br.createHTML(a):a,r]};let Xt=class{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[d,c]=Vi(e,n);if(this.el=Xt.createElement(d,r),qe.currentNode=this.el.content,n===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(s=qe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(pe)){const f=c[o++];if(u.push(h),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(pe),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?Gi:m[1]==="?"?Yi:m[1]==="@"?Xi:un})}else l.push({type:6,index:i})}for(const h of u)s.removeAttribute(h)}if(Rs.test(s.tagName)){const u=s.textContent.split(pe),h=u.length-1;if(h>0){s.textContent=Ye?Ye.emptyScript:"";for(let f=0;f<h;f++)s.append(u[f],vt()),qe.nextNode(),l.push({type:2,index:++i});s.append(u[h],vt())}}}else if(s.nodeType===8)if(s.data===Ts)l.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(pe,u+1))!==-1;)l.push({type:7,index:i}),u+=pe.length-1}i++}}static createElement(e,n){const r=Xe.createElement("template");return r.innerHTML=e,r}};function Qe(t,e,n=t,r){var s,i,o,a;if(e===ye)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const d=wt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),d===void 0?l=void 0:(l=new d(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=Qe(t,l._$AS(t,e.values),l,r)),e}let Wi=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Xe).importNode(r,!0);qe.currentNode=i;let o=qe.nextNode(),a=0,l=0,d=s[0];for(;d!==void 0;){if(a===d.index){let c;d.type===2?c=new cn(o,o.nextSibling,this,e):d.type===1?c=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(c=new Qi(o,this,e)),this.u.push(c),d=s[++l]}a!==(d==null?void 0:d.index)&&(o=qe.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},cn=class{constructor(e,n,r,s){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Qe(this,e,n),wt(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==ye&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ui(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Xt.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new Wi(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=Ur.get(e.strings);return n===void 0&&Ur.set(e.strings,n=new Xt(e)),n}k(e){Os(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new cn(this.O(vt()),this.O(vt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},un=class{constructor(e,n,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Qe(this,e,n,0),o=!wt(e)||e!==this._$AH&&e!==ye,o&&(this._$AH=e);else{const a=e;let l,d;for(e=i[0],l=0;l<i.length-1;l++)d=Qe(this,a[r+l],n,l),d===ye&&(d=this._$AH[l]),o||(o=!wt(d)||d!==this._$AH[l]),d===B?e=B:e!==B&&(e+=(d??"")+i[l+1]),this._$AH[l]=d}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Gi=class extends un{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Ji=Ye?Ye.emptyScript:"";let Yi=class extends un{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Ji):this.element.removeAttribute(this.name)}},Xi=class extends un{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=Qe(this,e,n,0))!==null&&r!==void 0?r:B)===ye)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Qi=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}};const Fr=Yt.litHtmlPolyfillSupport;Fr==null||Fr(Xt,cn),((gn=Yt.litHtmlVersions)!==null&&gn!==void 0?gn:Yt.litHtmlVersions=[]).push("2.6.1");const Zi=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new cn(e.insertBefore(vt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn,vn;let ct=class extends Le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zi(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ye}};ct.finalized=!0,ct._$litElement$=!0,(yn=globalThis.litElementHydrateSupport)===null||yn===void 0||yn.call(globalThis,{LitElement:ct});const qr=globalThis.litElementPolyfillSupport;qr==null||qr({LitElement:ct});((vn=globalThis.litElementVersions)!==null&&vn!==void 0?vn:globalThis.litElementVersions=[]).push("3.2.2");var eo=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function to(){return t=>{}}let bt=class extends ct{};bt=eo([to()],bt);const no={capitalizeFirstLetter:!1};function ro(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function so(t,e){return e.capitalizeFirstLetter?ro(t):t}function io(t,e=no){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return so(r,e)}function Vr(t){return t!==t.toUpperCase()}function oo(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=Vr(o)||Vr(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const ao=["january","february","march","april","may","june","july","august","september","october","november","december"];ao.map(t=>t.slice(0,3));function fr(t){return t?t instanceof Error?t.message:String(t):""}function lo(t){return t instanceof Error?t:new Error(fr(t))}const co=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ns(t,e){return t?co.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function uo(t,e){return t&&e.every(n=>Ns(t,n))}function Re(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Wr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Gr(t){return!!t&&typeof t=="object"}function ho(t,e){try{if(t===e)return!0;if(Gr(t)&&Gr(e)){const n=Wr(t),r=Wr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${fr(n)}`),n}}function fo(t,e){return Re(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Ze(t,e){let n=!1;const r=Re(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Re(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function mo(t){return!!(Ns(t,"then")&&typeof t.then=="function")}function _t(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${_t.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Jr(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):po(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wn;((wn=window.HTMLSlotElement)===null||wn===void 0?void 0:wn.prototype.assignedElements)!=null;const Rn=Symbol("this-is-an-element-vir-declarative-element"),mr=Symbol("key for ignoring inputs not having been set yet"),go={[mr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pr=t=>(...e)=>({_$litDirective$:t,values:e});let gr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function vo(t,e){return zs(t,e,bt)}function zs(t,e,n){Nn(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function Nn(t,e){if(t.type!==yo.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function yr(t,e){return wo(t,e)}const wo=pr(class extends gr{constructor(t){super(t),this.element=vo(t,"assign")}render(t,e){return bo(t,this.element,e),ye}});function bo(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Ds(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof bt?!0:Ds(n)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Y=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},re,$e,Ee,Ae,Ue,Ie,W,ut,zn,Dn;const js=Symbol("element-vir-async-state-marker");function _o(t){if(!t)return{};const e=fo(t,(r,s)=>s instanceof Ms);return Ze(e,(r,s)=>new xo(s.initialValue))}const Rt=Symbol("not set");class xo{constructor(e){re.add(this),$e.set(this,Rt),Ee.set(this,void 0),Ae.set(this,void 0),Ue.set(this,[]),Ie.set(this,void 0),W.set(this,_t()),this.asyncMarkerSymbol=js,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(P(this,$e,"f")===Rt||!ho(e.trigger,P(this,$e,"f"))){Y(this,$e,e.trigger,"f");const n=e.createPromise();P(this,re,"m",zn).call(this,n)}}else"newPromise"in e?(P(this,$e,"f"),P(this,re,"m",zn).call(this,e.newPromise),P(this,re,"m",ut).call(this)):"resolvedValue"in e?P(this,re,"m",Dn).call(this,e.resolvedValue):e.forceUpdate&&(Y(this,$e,Rt,"f"),Y(this,Ee,void 0,"f"),P(this,W,"f").isSettled()||P(this,W,"f").reject("Canceled by force update"),Y(this,W,_t(),"f"),P(this,re,"m",ut).call(this))}getValue(){return P(this,W,"f").isSettled()?P(this,Ae,"f")?P(this,Ae,"f"):P(this,Ee,"f"):P(this,W,"f").promise}addSettleListener(e){P(this,Ue,"f").push(e)}removeSettleListener(e){Y(this,Ue,P(this,Ue,"f").filter(n=>n!==e),"f")}}$e=new WeakMap,Ee=new WeakMap,Ae=new WeakMap,Ue=new WeakMap,Ie=new WeakMap,W=new WeakMap,re=new WeakSet,ut=function(){P(this,Ue,"f").forEach(e=>{e()})},zn=function(e){e!==P(this,Ie,"f")&&(Y(this,Ee,void 0,"f"),Y(this,Ae,void 0,"f"),Y(this,Ie,e,"f"),P(this,W,"f").isSettled()&&Y(this,W,_t(),"f"),e.then(n=>{P(this,Ie,"f")===e&&P(this,re,"m",Dn).call(this,n)}).catch(n=>{P(this,Ie,"f")===e&&(Y(this,Ae,lo(n),"f"),P(this,W,"f").promise.catch(()=>{}),P(this,W,"f").reject(n),P(this,re,"m",ut).call(this))}))},Dn=function(e){e!==P(this,Ee,"f")&&(Y(this,Ae,void 0,"f"),Y(this,Ee,e,"f"),P(this,W,"f").isSettled()&&Y(this,W,_t(),"f"),P(this,W,"f").resolve(e),P(this,re,"m",ut).call(this))};class Ms{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=js}}function Bs(t){return new Ms(t)}function Ks(t,e){return`${t}-${oo(e)}`}function So(t,e){return e?Ze(e,n=>se(`--${Ks(t,String(n))}`)):{}}function $o(t,e){return t?Ze(t,(n,r)=>{const s=e[n];return se(`var(${s}, ${r})`)}):{}}class Eo extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ls(){return t=>{var e;return e=class extends Eo{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function jn(){return Ls()}function Ao(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ls()(n);return e[n]=r,e},{}):{}}function Yr(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Xr(t,e){const n=t;function r(i,o){e&&Yr(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Yr(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Co(t,e){return e?Ze(e,n=>Ks(t,String(n))):{}}function ko({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:Ze(t,(r,s)=>se(`:host(.${s})`)),hostClassNames:Ze(t,(r,s)=>se(s)),cssVarNames:e,cssVarValues:n}}function Po({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Re(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function To(t,e){function n(s){Re(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function vr(t){var e;const n=Ao(t.events),r=Co(t.tagName,t.hostClasses),s=So(t.tagName,t.cssVars),i=$o(t.cssVars,s),o={...go,...t.options},a=typeof t.styles=="function"?t.styles(ko({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||ks``,l=t.renderCallback,d=(e=class extends bt{createRenderParams(){return To(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Ds(this)&&!this.haveInputsBeenSet&&!o[mr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${yr.name}" directive on it. If no inputs are intended, use "${vr.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const u=t.renderCallback(c);return Po({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),u}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Re(c).forEach(u=>{Jr()(this,u),this.instanceInputs[u]=c[u]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=_o(t.stateInit),this.instanceInputs=Xr(this,!1),this.instanceState=Xr(this,!0);const c=t.stateInit||{};Re(c).forEach(u=>{Jr()(this,u);const h=this.asyncStateHandlerMap[u];h?(this.instanceState[u]=h.getValue(),h.addSettleListener(()=>{this[u]=h.getValue()})):this.instanceState[u]=c[u]}),this.definition=d}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(d,{[Rn]:{value:!0,writable:!1},name:{value:io(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof d,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,d),d}function Is(){return t=>vr({...t,options:{[mr]:!1},...t.options})}function ht(t,e){return Oo(t,e)}const Oo=pr(class extends gr{constructor(t){super(t),this.element=zs(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ye}}),Qr="onDomCreated",Zr=pr(class extends gr{constructor(t){super(t),Nn(t,Qr)}update(t,[e]){Nn(t,Qr);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function Mn(t,e,n,r){return t instanceof Error?r?r(t):fr(t):mo(t)?e:n?n(t):t}function Ro(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Is()(s(i))),defineElementNoInputs:i=>(r(i),vr(s(i)))}}function No(t,e){return t.filter((n,r)=>!e.includes(r))}function Hs(t){return t.filter(e=>uo(e,["tagName",Rn])&&!!e.tagName&&!!e[Rn])}const Us=new WeakMap;function zo(t,e){var n;const r=Hs(e);return(n=Fs(Us,[t,...r]).value)===null||n===void 0?void 0:n.template}function Do(t,e,n){const r=Hs(e);return Vs(Us,[t,...r],n)}function Fs(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=qs(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Fs(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function qs(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Vs(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=qs(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const d=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=d),Vs(d,e,n,r+1)}function Ws(t,e,n){return{name:t,check:e,transform:n}}const jo=new WeakMap;function Gs(t,e,n){const r=zo(t,e),s=r??n();if(!r){const o=Do(t,e,s);if(o.result)jo.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=No(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function Js(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,d)=>{var c;const u=s.length-1,h=s[u],f=d-1,y=e[f];let m;r&&r(l),typeof h=="string"&&(m=(c=n.find(p=>p.check(h,l,y)))===null||c===void 0?void 0:c.transform,m&&(s[u]=h+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[d];m?i[u]=i[u]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Ys(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Mo=[Ws("tag name css selector interpolation",(t,e,n)=>Ys(n),t=>t.tagName)];function Bo(t,e){return Js(t,e,Mo)}function Fe(t,...e){const n=Gs(t,e,()=>Bo(t,e));return ks(n.strings,...n.values)}const Ko=[Ws("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Ys(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function Lo(t){}function Io(t){return Js(t.strings,t.values,Ko,Lo)}function I(t,...e){const n=qi(t,...e),r=Gs(t,e,()=>Io(n));return{...n,strings:r.strings,values:r.values}}function Ho(t,e){return t<e}function Uo(t,e){return t>e}function Fo({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Uo:Ho)(e.width/e.height,t.width/t.height)?"width":"height"}function bn({box:t,constraint:e,constraintType:n}){const r=Fo({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Xs({box:t,ratio:e}){return As(t,(n,r)=>r*e)}function Qs({box:t,min:e,max:n}){return As(t,(r,s)=>Di({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Zs({min:t,max:e,box:n}){const r=ei({min:t,max:e,box:n}),s=Xs({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||250),width:Math.floor(s.width||(t==null?void 0:t.width)||250)}}function ei({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?bn({box:n,constraint:t,constraintType:"min"}):1,s=e?bn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Xs({ratio:i,box:n});return(t?bn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}const es=10;function ti(t){return Math.min(Math.max(Math.floor(Math.pow(t+1,3)*es),es),5e3)}function Ce(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=qo(o,r[a]);return`${o}${l}`});return Es(i.join(""))}function qo(t,e){return e._$litType$!=null||e._$litDirective$!=null?Ce(e):Array.isArray(e)?e.map(r=>Ce(r)).join(""):t.endsWith("=")?`"${e}"`:e}var G=(t=>(t.Html="html",t.Text="text",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(G||{});async function Vo(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function Wo({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Ce(I`
            <img src=${n} />
        `):t==="video"?Ce(I`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"?Ce(I`
                <p class="text-wrapper">
                    ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                </p>
            `):t==="audio"?Ce(I`
                <audio controls src=${n}></audio>
            `):e}function Go(t,e){if(e.includes("json"))try{return JSON.stringify(JSON.parse(t),null,4)}catch{}return t}async function ts(t,e){var a;let n;try{n=await fetch(t)}catch{}const r=((a=n==null?void 0:n.headers.get("Content-Type"))==null?void 0:a.toLowerCase())??"",s=Go(await(n==null?void 0:n.text())??"",r),i=n?await Vo(r,s):"image";return{templateString:Wo({imageText:s,imageType:i,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:i}}var Z=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t))(Z||{}),Bn=(t=>(t.FromParent="from-parent",t.FromChild="from-child",t))(Bn||{});const Jo=35;function Yo(t,e,n){return n.type===t&&n.direction===e}async function Ve({getMessageContext:t,message:e,verifyData:n,imageUrl:r}){let s=0,i=!1,o,a,l=!1;const d={...e,direction:"from-parent"},c=e.type;function u(m){try{const v=m.data;if(v.direction!=="from-child")return;if(v&&l&&Yo(c,"from-child",v)){let p=!1;try{p=n?n(v.data):!0}catch{}if(!p)return;i=!0,o=v}}catch(v){a=Pn(v)}}let h=t();h==null||h.addEventListener("message",u);const f=Date.now();for(;!i&&s<Jo&&!a;){await ln(ti(s));const m=t();m&&(h==null||h.removeEventListener("message",u),m.addEventListener("message",u),m!==h&&(h=m),l=!0,m.postMessage(d)),s++}const y=Date.now()-f;if(a)throw console.error({listenerError:a,imageUrl:r,messageToSend:e}),a;if(!i)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.floor(y/1e3)}' seconds for '${r}'`);return o==null?void 0:o.data}var Q=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Q||{});function ge(t){return t.contentWindow}const ns=1e4;async function Xo({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){var h;const a=Date.now(),l=ur();r.onload=()=>{l.resolve()};let d=0,c=0;for(;!ge(r)&&c<=ns;)await ln(ti(d)),c=Date.now()-a,d++;c>ns&&await l.promise,await Ve({message:{type:Z.Ready},imageUrl:s.imageUrl,getMessageContext:()=>ge(r)??void 0}),i&&await Ve({message:{type:Z.ForceSize,data:i},imageUrl:s.imageUrl,getMessageContext:()=>ge(r)??void 0});const u=o??await Ve({message:{type:Z.SendSize},imageUrl:s.imageUrl,getMessageContext:()=>ge(r)??void 0,verifyData:f=>!isNaN(f.width)&&!isNaN(f.height)&&!!f.width&&!!f.height});return await ni({min:t,max:e,imageDimensions:u,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0}),((h=ge(r))==null?void 0:h.document.documentElement.outerHTML)??""}async function ni({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:a}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const d=Zs({min:t,max:e,box:o??n});l.style.width=ee(Math.floor(d.width)),l.style.height=ee(Math.floor(d.height));const c=Qs({min:t,max:e,box:d});d.height<c.height?r.classList.add(Q.VerticallyCenter):r.classList.remove(Q.VerticallyCenter),r.style.width=ee(c.width),r.style.height=ee(c.height);const u=ei({min:t,max:e,box:o??n});if(a&&(u>3?await Ve({message:{type:Z.SendScalingMethod,data:"pixelated"},imageUrl:i.imageUrl,getMessageContext:()=>ge(s)??void 0}):await Ve({message:{type:Z.SendScalingMethod,data:"default"},imageUrl:i.imageUrl,getMessageContext:()=>ge(s)??void 0}),i.imageType===G.Html)){const h=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},f={width:u*h.width,height:u*h.height};await Ve({message:{type:Z.SendScale,data:f},imageUrl:i.imageUrl,getMessageContext:()=>ge(s)??void 0})}}var rs=Object.freeze,Qo=Object.defineProperty,ss=(t,e)=>rs(Qo(t,"raw",{value:rs(e||t.slice())})),is,os;function Zo(t,e,n){const r=Math.random(),s=I(is||(is=ss([`
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
                `,`: getAudioSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

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
                `,`: getAudioSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

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
    `])),t.imageType,n??"",G.Svg,G.Html,G.Image,G.Video,G.Text,G.Audio,Bn.FromChild,Bn.FromChild,Z.Ready,Z.SendScale,Z.SendScalingMethod,Z.SendSize,Z.ForceSize,G.Audio),i=I(os||(os=ss([`
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

                    .spacer {
                        padding: 0 8px;
                    }

                    .pixelated {
                        image-rendering: pixelated;
                    }

                    html.image-type-text body {
                        max-width: 100%;
                    }

                    .text-wrapper {
                        font-family: sans-serif;
                        word-break: break-all;
                        padding: 16px;
                        max-width: 100%;
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
    `])),t.imageType.toLowerCase(),r,e??"",s);return Es(Ce(i)).replace(String(r),`
${t.templateString}
`)}const ea={imageData:Bs()},as=I`
    <div class="click-cover"></div>
`,_n="latest-frame-srcdoc",dt=Is()({tagName:"vir-resizable-image",stateInit:ea,events:{settled:jn(),errored:jn()},styles:Fe`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${se(Q.VerticallyCenter)}) {
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

        :host(.${se(Q.HideLoading)}) .loading-wrapper,
        :host(.${se(Q.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: 500ms;
        }

        :host(.${se(Q.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
        }

        :host(.${se(Q.HideLoading)}) iframe {
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[_n];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(Q.HideLoading),s(new i.settled(!1)),r.classList.remove(Q.VerticallyCenter);try{return ts(e.imageUrl,!!e.blockAutoPlay)}catch{await ln(1e3);try{return ts(e.imageUrl,!!e.blockAutoPlay)}catch(y){throw s(new i.errored(Pn(y))),y}}},trigger:{...Ki(e,f=>f!=="extraHtml")}}});const o=e.min&&e.max?Qs({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?Zs({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,d=Mn(t.imageData,"",f=>f.imageType===G.Pdf?I`
                        <iframe
                            src=${f.imageUrl}
                            ${Zr(async y=>{try{await ni({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:y,imageData:f,imageDimensions:a??{width:500,height:500},max:a,min:o,sendSizeMessage:!1}),r[_n]="",s(new i.settled(!0)),r.classList.add(Q.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                    `:I`
                        <iframe
                            loading="lazy"
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${Zo(f,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${Zr(async y=>{try{const m=await Xo({min:o,max:a,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});r[_n]=m,s(new i.settled(!0)),r.classList.add(Q.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `,f=>(s(new i.errored(Pn(f))),I`
                    <div class="error-wrapper">
                        <slot name="error">${cr(f)}</slot>
                    </div>
                `)),c=Mn(t.imageData,as,f=>[G.Html,G.Video,G.Audio,G.Pdf].includes(f.imageType)?"":as,()=>""),u=t.imageData instanceof Error?Fe`
                      max-width: 100%;
                      max-height: 100%;
                  `:l?Fe`
                      width: ${l.width}px;
                      height: ${l.height}px;
                  `:"",h=Fe`
            width: ${(o==null?void 0:o.width)??250}px;
            height: ${(o==null?void 0:o.height)??250}px;
        `;return I`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="min-size" style=${h}>
                <div class="frame-constraint" style=${u}>${d}</div>
            </div>
            ${c}
        `}}),R=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,j=Object.keys,H=Array.isArray;function q(t,e){return typeof e!="object"||j(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||R.Promise||(R.Promise=Promise);const xt=Object.getPrototypeOf,ta={}.hasOwnProperty;function X(t,e){return ta.call(t,e)}function et(t,e){typeof e=="function"&&(e=e(xt(t))),(typeof Reflect>"u"?j:Reflect.ownKeys)(e).forEach(n=>{ue(t,n,e[n])})}const ri=Object.defineProperty;function ue(t,e,n,r){ri(t,e,q(n&&X(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function We(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ue(t.prototype,"constructor",t),{extend:et.bind(null,t.prototype)}}}}const na=Object.getOwnPropertyDescriptor;function wr(t,e){let n;return na(t,e)||(n=xt(t))&&wr(n,e)}const ra=[].slice;function Qt(t,e,n){return ra.call(t,e,n)}function si(t,e){return e(t)}function at(t){if(!t)throw new Error("Assertion Failed")}function ii(t){R.setImmediate?setImmediate(t):setTimeout(t,0)}function oi(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function he(t,e){if(X(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=he(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:he(a,e.substr(o+1))}}function te(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){at(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)te(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?H(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&X(t,o)||(l=t[o]={}),te(l,a,n)}}else n===void 0?H(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ai(t){var e={};for(var n in t)X(t,n)&&(e[n]=t[n]);return e}const sa=[].concat;function li(t){return sa.apply([],t)}const ci="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(li([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>R[t]),ia=ci.map(t=>R[t]);oi(ci,t=>[t,!0]);let me=null;function kt(t){me=typeof WeakMap<"u"&&new WeakMap;const e=Kn(t);return me=null,e}function Kn(t){if(!t||typeof t!="object")return t;let e=me&&me.get(t);if(e)return e;if(H(t)){e=[],me&&me.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Kn(t[n]))}else if(ia.indexOf(t.constructor)>=0)e=t;else{const i=xt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),me&&me.set(t,e),t)X(t,s)&&(e[s]=Kn(t[s]))}return e}const{toString:oa}={};function Ln(t){return oa.call(t).slice(8,-1)}const In=typeof Symbol<"u"?Symbol.iterator:"@@iterator",aa=typeof In=="symbol"?function(t){var e;return t!=null&&(e=t[In])&&e.apply(t)}:function(){return null},He={};function le(t){var e,n,r,s;if(arguments.length===1){if(H(t))return t.slice();if(this===He&&typeof t=="string")return[t];if(s=aa(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const br=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var ie=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ui(t,e){ie=t,hi=e}var hi=()=>!0;const la=!new Error("").stack;function De(){if(la)try{throw De.arguments,new Error}catch(t){return t}return new Error}function Hn(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(hi).map(r=>`
`+r).join("")):""}var di=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],_r=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(di),ca={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ge(t,e){this._e=De(),this.name=t,this.message=e}function fi(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Zt(t,e,n,r){this._e=De(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=fi(t,e)}function ft(t,e){this._e=De(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=fi(t,e)}We(Ge).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Hn(this._e,2))}},toString:function(){return this.name+": "+this.message}}),We(Zt).from(Ge),We(ft).from(Ge);var xr=_r.reduce((t,e)=>(t[e]=e+"Error",t),{});const ua=Ge;var C=_r.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=De(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=ca[e]||n,this.inner=null)}return We(r).from(ua),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var ls=di.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Ht=_r.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function St(t){return t}function ha(t,e){return t==null||t===St?e:function(n){return e(t(n))}}function Ne(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function da(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Ne(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Ne(s,this.onerror):s),i!==void 0?i:n}}function fa(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Ne(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Ne(r,this.onerror):r)}}function ma(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);q(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Ne(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Ne(i,this.onerror):i),r===void 0?o===void 0?void 0:o:q(r,o)}}function pa(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Sr(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Ht.ModifyError=Zt,Ht.DexieError=Ge,Ht.BulkError=ft;var $t={};const[Un,en,Fn]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,xt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,xt(e),t]})(),mi=en&&en.then,Ut=Un&&Un.constructor,$r=!!Fn;var qn=!1,ga=Fn?()=>{Fn.then(Nt)}:R.setImmediate?setImmediate.bind(null,Nt):R.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Nt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Nt,0)},mt=function(t,e){lt.push([t,e]),tn&&(ga(),tn=!1)},Vn=!0,tn=!0,Pe=[],Ft=[],Wn=null,Gn=St,Je={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:us,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{us(t[0],t[1])}catch{}})}},A=Je,lt=[],Te=0,qt=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(ie&&(this._stackHolder=De(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==$t)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Yn(this,this._value))}this._state=null,this._value=null,++e.ref,gi(this,t)}const Jn={get:function(){var t=A,e=nn;function n(r,s){var i=!t.global&&(t!==A||e!==nn);const o=i&&!de();var a=new S((l,d)=>{Er(this,new pi(rn(r,t,i,o),rn(s,t,i,o),l,d,t))});return ie&&wi(a,this),a}return n.prototype=$t,n},set:function(t){ue(this,"then",t&&t.prototype===$t?Jn:{get:function(){return t},set:Jn.set})}};function pi(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function gi(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Pt();n&&typeof n.then=="function"?gi(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,yi(t)),r&&Tt()}},Yn.bind(null,t))}catch(n){Yn(t,n)}}function Yn(t,e){if(Ft.push(e),t._state===null){var n=t._lib&&Pt();e=Gn(e),t._state=!1,t._value=e,ie&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=wr(e,"stack");e._promise=t,ue(e,"stack",{get:()=>qn?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Pe.some(s=>s._value===r._value)||Pe.push(r)}(t),yi(t),n&&Tt()}}function yi(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)Er(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Te===0&&(++Te,mt(()=>{--Te==0&&Ar()},[]))}function Er(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Te,mt(ya,[n,t,e])}else t._listeners.push(e)}function ya(t,e,n){try{Wn=e;var r,s=e._value;e._state?r=t(s):(Ft.length&&(Ft=[]),r=t(s),Ft.indexOf(s)===-1&&function(i){for(var o=Pe.length;o;)if(Pe[--o]._value===i._value)return void Pe.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Wn=null,--Te==0&&Ar(),--n.psd.ref||n.psd.finalize()}}function vi(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=Hn(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return ie&&((r=Hn(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&vi(t._prev,e,n)),e}function wi(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Nt(){Pt()&&Tt()}function Pt(){var t=Vn;return Vn=!1,tn=!1,t}function Tt(){var t,e,n;do for(;lt.length>0;)for(t=lt,lt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(lt.length>0);Vn=!0,tn=!0}function Ar(){var t=Pe;Pe=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=qt.slice(0),n=e.length;n;)e[--n]()}function zt(t){return new S($t,!1,t)}function N(t,e){var n=A;return function(){var r=Pt(),s=A;try{return we(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{we(s,!1),r&&Tt()}}}et(S.prototype,{then:Jn,_then:function(t,e){Er(this,new pi(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):zt(r)):this.then(null,r=>r&&r.name===e?n(r):zt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),zt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{qn=!0;var t=vi(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{qn=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ue(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Je.env=bi(),et(S,{all:function(){var t=le.apply(null,arguments).map(Dt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S($t,!0,t);return wi(e,Wn),e},reject:zt,race:function(){var t=le.apply(null,arguments).map(Dt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>nn},newPSD:ve,usePSD:nt,scheduler:{get:()=>mt,set:t=>{mt=t}},rejectionMapper:{get:()=>Gn,set:t=>{Gn=t}},follow:(t,e)=>new S((n,r)=>ve((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Ne(function(){(function(a){function l(){a(),qt.splice(qt.indexOf(l),1)}qt.push(l),++Te,mt(()=>{--Te==0&&Ar()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Ut&&(Ut.allSettled&&ue(S,"allSettled",function(){const t=le.apply(null,arguments).map(Dt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Ut.any&&typeof AggregateError<"u"&&ue(S,"any",function(){const t=le.apply(null,arguments).map(Dt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const L={awaits:0,echoes:0,id:0};var va=0,Vt=[],xn=0,nn=0,wa=0;function ve(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++wa;var o=Je.env;i.env=$r?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:cs(o.nthen,i),gthen:cs(o.gthen,i)}:{},e&&q(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=nt(i,t,n,r);return i.ref===0&&i.finalize(),a}function tt(){return L.id||(L.id=++va),++L.awaits,L.echoes+=100,L.id}function de(){return!!L.awaits&&(--L.awaits==0&&(L.id=0),L.echoes=100*L.awaits,!0)}function Dt(t){return L.echoes&&t&&t.constructor===Ut?(tt(),t.then(e=>(de(),e),e=>(de(),M(e)))):t}function ba(t){++nn,L.echoes&&--L.echoes!=0||(L.echoes=L.id=0),Vt.push(A),we(t,!0)}function _a(){var t=Vt[Vt.length-1];Vt.pop(),we(t,!1)}function we(t,e){var n=A;if((e?!L.echoes||xn++&&t===A:!xn||--xn&&t===A)||_i(e?ba.bind(null,t):_a),t!==A&&(A=t,n===Je&&(Je.env=bi()),$r)){var r=Je.env.Promise,s=t.env;en.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(R,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function bi(){var t=R.Promise;return $r?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(R,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:en.then,gthen:t.prototype.then}:{}}function nt(t,e,n,r,s){var i=A;try{return we(t,!0),e(n,r,s)}finally{we(i,!1)}}function _i(t){mi.call(Un,t)}function rn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&tt(),we(e,!0);try{return t.apply(this,arguments)}finally{we(s,!1),r&&_i(de)}}}function cs(t,e){return function(n,r){return t.call(this,rn(n,e),rn(r,e))}}(""+mi).indexOf("[native code]")===-1&&(tt=de=T);function us(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(R.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),q(r,s)):R.CustomEvent&&q(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&R.dispatchEvent&&(dispatchEvent(r),!R.PromiseRejectionEvent&&R.onunhandledrejection))try{R.onunhandledrejection(r)}catch{}ie&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var M=S.reject;function Xn(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===xr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Xn(t,e,n,r))):M(i)}return s._promise(e,(i,o)=>ve(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return M(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return M(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>Xn(t,e,n,r))}const ke=String.fromCharCode(65535),oe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",pt=[],hn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),xa=hn,Sa=hn,xi=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function ze(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Si={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function jt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=kt(e))[t],e)}class $a{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,d,c){if(!c.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(c.idbtrans,c)}const a=Pt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):ve(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Xn(this.db,e,[this.name],o)}finally{a&&Tt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(H(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=j(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(d=>d.compound&&n.every(c=>d.keyPath.indexOf(c)>=0)&&d.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==ke)return this.where(r.name).equals(r.keyPath.map(d=>e[d]));!r&&ie&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(d,c){try{return i.cmp(d,c)===0}catch{return!1}}const[a,l]=n.reduce(([d,c],u)=>{const h=s[u],f=e[u];return[d||h,d||!h?ze(c,h&&h.multi?y=>{const m=he(y,u);return H(m)&&m.some(v=>o(f,v))}:y=>o(f,he(y,u))):c]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,H(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(X(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){q(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=jt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||H(e))return this.where(":id").equals(e).modify(n);{const r=he(e,this.schema.primKey.keyPath);if(r===void 0)return M(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?j(n).forEach(s=>{te(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=jt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Si})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const d=e.length;let c=l&&a?e.map(jt(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:i}).then(({numFailures:u,results:h,lastResult:f,failures:y})=>{if(u===0)return i?h:f;throw new ft(`${this.name}.bulkAdd(): ${u} of ${d} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const d=e.length;let c=l&&a?e.map(jt(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:i}).then(({numFailures:u,results:h,lastResult:f,failures:y})=>{if(u===0)return i?h:f;throw new ft(`${this.name}.bulkPut(): ${u} of ${d} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new ft(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function gt(t){var e={},n=function(a,l){if(l){for(var d=arguments.length,c=new Array(d-1);--d;)c[d-1]=arguments[d];return e[a].subscribe.apply(null,c),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,d){if(typeof a=="object")return o(a);l||(l=pa),d||(d=T);var c={subscribers:[],fire:d,subscribe:function(u){c.subscribers.indexOf(u)===-1&&(c.subscribers.push(u),c.fire=l(c.fire,u))},unsubscribe:function(u){c.subscribers=c.subscribers.filter(function(h){return h!==u}),c.fire=c.subscribers.reduce(l,d)}};return e[a]=n[a]=c,c}function o(a){j(a).forEach(function(l){var d=a[l];if(H(d))i(l,a[l][0],a[l][1]);else{if(d!=="asap")throw new C.InvalidArgument("Invalid event config");var c=i(l,St,function(){for(var u=arguments.length,h=new Array(u);u--;)h[u]=arguments[u];c.subscribers.forEach(function(f){ii(function(){f.apply(null,h)})})})}})}}function it(t,e){return We(e).from({prototype:t}),e}function Be(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Sn(t,e){t.filter=ze(t.filter,e)}function $n(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>ze(r(),e()):e,t.justLimit=n&&!r}function Wt(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function hs(t,e,n){const r=Wt(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Mt(t,e,n,r){const s=t.replayFilter?ze(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,d)=>{if(!s||s(l,d,h=>l.stop(h),h=>l.fail(h))){var c=l.primaryKey,u=""+c;u==="[object ArrayBuffer]"&&(u=""+new Uint8Array(c)),X(i,u)||(i[u]=!0,e(a,l,d))}};return Promise.all([t.or._iterate(o,n),ds(hs(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return ds(hs(t,r,n),ze(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function ds(t,e,n,r){var s=N(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=T},a=>{i.fail(a),o=T})||s(i.value,i,a=>o=a),o()})})}function F(t,e){try{const n=fs(t),r=fs(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let d=0;d<l;++d)if(s[d]!==i[d])return s[d]<i[d]?-1:1;return o===a?0:o<a?-1:1}(ms(t),ms(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let d=0;d<l;++d){const c=F(s[d],i[d]);if(c!==0)return c}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function fs(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=Ln(t);return n==="ArrayBuffer"?"binary":n}function ms(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class Ea{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,M.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,M.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=ze(n.algorithm,e)}_iterate(e,n){return Mt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&q(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Mt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(Be(r,!0))return s.count({trans:n,query:{index:Wt(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Mt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(d,c){return c?o(d[r[c]],c-1):d[s]}var a=this._ctx.dir==="next"?1:-1;function l(d,c){var u=o(d,i),h=o(c,i);return u<h?-a:u>h?a:0}return this.toArray(function(d){return d.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&Be(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=Wt(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Mt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,Be(n)?$n(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):$n(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),$n(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Sn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Sn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=ze(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&Be(n,!0)&&n.limit>0)return this._read(s=>{var i=Wt(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Sn(this._ctx,function(s){var i=s.primaryKey.toString(),o=X(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=j(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var g=i[p],b=e[g];he(m,g)!==b&&(te(m,g,b),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:d}=a.schema.primaryKey,c=this.db._options.modifyChunkSize||200,u=[];let h=0;const f=[],y=(m,v)=>{const{failures:p,numFailures:g}=v;h+=m-g;for(let b of j(p))u.push(p[b])};return this.clone().primaryKeys().then(m=>{const v=p=>{const g=Math.min(c,m.length-p);return a.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(b=>{const E=[],x=[],w=l?[]:null,_=[];for(let $=0;$<g;++$){const O=b[$],z={value:kt(O),primKey:m[p+$]};s.call(z,z.value,z)!==!1&&(z.value==null?_.push(m[p+$]):l||F(d(O),d(z.value))===0?(x.push(z.value),l&&w.push(m[p+$])):(_.push(m[p+$]),E.push(z.value)))}const k=Be(n)&&n.limit===1/0&&(typeof e!="function"||e===En)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let O in $.failures)_.splice(parseInt(O),1);y(E.length,$)})).then(()=>(x.length>0||k&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:w,values:x,criteria:k,changeSpec:typeof e!="function"&&e}).then($=>y(x.length,$))).then(()=>(_.length>0||k&&e===En)&&a.mutate({trans:r,type:"delete",keys:_,criteria:k}).then($=>y(_.length,$))).then(()=>m.length>p+g&&v(p+c))})};return v(0).then(()=>{if(u.length>0)throw new Zt("Error modifying one or more objects",u,h,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return Be(e)&&(e.isPrimKey&&!Sa||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:d,numFailures:c})=>{if(c)throw new Zt("Could not delete some values",Object.keys(a).map(u=>a[u]),o-c);return o-c}))}):this.modify(En)}}const En=(t,e)=>e.value=null;function Aa(t,e){return t<e?-1:t===e?0:1}function Ca(t,e){return t>e?-1:t===e?0:1}function J(t,e,n){var r=t instanceof Ei?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Ke(t){return new t.Collection(t,()=>$i("")).limit(0)}function ka(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var d=e[l];if(d!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],d)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function Bt(t,e,n,r){var s,i,o,a,l,d,c,u=n.length;if(!n.every(m=>typeof m=="string"))return J(t,"String expected.");function h(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?Aa:Ca;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});a=v.map(function(p){return p.upper}),l=v.map(function(p){return p.lower}),d=m,c=m==="next"?"":r}h("next");var f=new t.Collection(t,()=>fe(a[0],l[u-1]+r));f._ondirectionchange=function(m){h(m)};var y=0;return f._addAlgorithm(function(m,v,p){var g=m.key;if(typeof g!="string")return!1;var b=i(g);if(e(b,l,y))return!0;for(var E=null,x=y;x<u;++x){var w=ka(g,b,a[x],l[x],o,d);w===null&&E===null?y=x+1:(E===null||o(E,w)>0)&&(E=w)}return v(E!==null?function(){m.continue(E+c)}:p),!1}),f}function fe(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function $i(t){return{type:1,lower:t,upper:t}}class Ei{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?Ke(this):new this.Collection(this,()=>fe(e,n,!r,!s))}catch{return J(this,oe)}}equals(e){return e==null?J(this,oe):new this.Collection(this,()=>$i(e))}above(e){return e==null?J(this,oe):new this.Collection(this,()=>fe(e,void 0,!0))}aboveOrEqual(e){return e==null?J(this,oe):new this.Collection(this,()=>fe(e,void 0,!1))}below(e){return e==null?J(this,oe):new this.Collection(this,()=>fe(void 0,e,!1,!0))}belowOrEqual(e){return e==null?J(this,oe):new this.Collection(this,()=>fe(void 0,e))}startsWith(e){return typeof e!="string"?J(this,"String expected."):this.between(e,e+ke,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Bt(this,(n,r)=>n.indexOf(r[0])===0,[e],ke)}equalsIgnoreCase(e){return Bt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=le.apply(He,arguments);return e.length===0?Ke(this):Bt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=le.apply(He,arguments);return e.length===0?Ke(this):Bt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,ke)}anyOf(){const e=le.apply(He,arguments);let n=this._cmp;try{e.sort(n)}catch{return J(this,oe)}if(e.length===0)return Ke(this);const r=new this.Collection(this,()=>fe(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=le.apply(He,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return J(this,oe)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return Ke(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return J(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,d=n&&n.includeUppers===!0;let c,u=s;function h(g,b){return u(g[0],b[0])}try{c=e.reduce(function(g,b){let E=0,x=g.length;for(;E<x;++E){const w=g[E];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=a(w[1],b[1]);break}}return E===x&&g.push(b),g},[]),c.sort(h)}catch{return J(this,oe)}let f=0;const y=d?g=>s(g,c[f][1])>0:g=>s(g,c[f][1])>=0,m=l?g=>i(g,c[f][0])>0:g=>i(g,c[f][0])>=0;let v=y;const p=new this.Collection(this,()=>fe(c[0][0],c[c.length-1][1],!l,!d));return p._ondirectionchange=g=>{g==="next"?(v=y,u=s):(v=m,u=i),c.sort(h)},p._addAlgorithm((g,b,E)=>{for(var x=g.key;v(x);)if(++f,f===c.length)return b(E),!1;return!!function(w){return!y(w)&&!m(w)}(x)||(this._cmp(x,c[f][1])===0||this._cmp(x,c[f][0])===0||b(()=>{u===s?g.continue(c[f][0]):g.continue(c[f][1])}),!1)}),p}startsWithAnyOf(){const e=le.apply(He,arguments);return e.every(n=>typeof n=="string")?e.length===0?Ke(this):this.inAnyRange(e.map(n=>[n,n+ke])):J(this,"startsWithAnyOf() only works with strings")}}function ne(t){return N(function(e){return Et(e),t(e.target.error),!1})}function Et(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const be=gt(null,"storagemutated");class Pa{_lock(){return at(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(at(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{nt(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(at(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return at(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{Et(s),this._reject(e.error)}),e.onabort=N(s=>{Et(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&be.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return M(new C.ReadOnly("Transaction is readonly"));if(!this.active)return M(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return ve(()=>{var i=new S((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,a)=>{r.then(l=>n._waitingQueue.push(N(o.bind(null,l))),l=>n._waitingQueue.push(N(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(X(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Qn(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Ai(e)}}function Ai(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Ci(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:oi(n,r=>[r.name,r])}}let At=t=>{try{return t.only([[]]),At=()=>[[]],[[]]}catch{return At=()=>ke,ke}};function Zn(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>he(n,e)}(t):e=>he(e,t)}function ps(t){return[].slice.call(t)}let Ta=0;function yt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function Oa(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:d,upper:c,lowerOpen:u,upperOpen:h}=l;return d===void 0?c===void 0?null:e.upperBound(c,!!h):c===void 0?e.lowerBound(d,!!u):e.bound(d,c,!!u,!!h)}const{schema:s,hasGetAll:i}=function(l,d){const c=ps(l.objectStoreNames);return{schema:{name:l.name,tables:c.map(u=>d.objectStore(u)).map(u=>{const{keyPath:h,autoIncrement:f}=u,y=H(h),m=h==null,v={},p={name:u.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:h,autoIncrement:f,unique:!0,extractKey:Zn(h)},indexes:ps(u.indexNames).map(g=>u.index(g)).map(g=>{const{name:b,unique:E,multiEntry:x,keyPath:w}=g,_={name:b,compound:H(w),keyPath:w,unique:E,multiEntry:x,extractKey:Zn(w)};return v[yt(w)]=_,_}),getIndexByKeyPath:g=>v[yt(g)]};return v[":id"]=p.primaryKey,h!=null&&(v[yt(h)]=p.primaryKey),p})},hasGetAll:c.length>0&&"getAll"in d.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(d){const c=d.name;return{name:c,schema:d,mutate:function({trans:u,type:h,keys:f,values:y,range:m}){return new Promise((v,p)=>{v=N(v);const g=u.objectStore(c),b=g.keyPath==null,E=h==="put"||h==="add";if(!E&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:x}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],k=[];let $=0;const O=U=>{++$,Et(U)};if(h==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:k,results:[],lastResult:void 0});m.type===3?_.push(w=g.clear()):_.push(w=g.delete(r(m)))}else{const[U,K]=E?b?[y,f]:[y,null]:[f,null];if(E)for(let D=0;D<x;++D)_.push(w=K&&K[D]!==void 0?g[h](U[D],K[D]):g[h](U[D])),w.onerror=O;else for(let D=0;D<x;++D)_.push(w=g[h](U[D])),w.onerror=O}const z=U=>{const K=U.target.result;_.forEach((D,je)=>D.error!=null&&(k[je]=D.error)),v({numFailures:$,failures:k,results:h==="delete"?f:_.map(D=>D.result),lastResult:K})};w.onerror=U=>{O(U),z(U)},w.onsuccess=z})},getMany:({trans:u,keys:h})=>new Promise((f,y)=>{f=N(f);const m=u.objectStore(c),v=h.length,p=new Array(v);let g,b=0,E=0;const x=_=>{const k=_.target;p[k._pos]=k.result,++E===b&&f(p)},w=ne(y);for(let _=0;_<v;++_)h[_]!=null&&(g=m.get(h[_]),g._pos=_,g.onsuccess=x,g.onerror=w,++b);b===0&&f(p)}),get:({trans:u,key:h})=>new Promise((f,y)=>{f=N(f);const m=u.objectStore(c).get(h);m.onsuccess=v=>f(v.target.result),m.onerror=ne(y)}),query:function(u){return h=>new Promise((f,y)=>{f=N(f);const{trans:m,values:v,limit:p,query:g}=h,b=p===1/0?void 0:p,{index:E,range:x}=g,w=m.objectStore(c),_=E.isPrimaryKey?w:w.index(E.name),k=r(x);if(p===0)return f({result:[]});if(u){const $=v?_.getAll(k,b):_.getAllKeys(k,b);$.onsuccess=O=>f({result:O.target.result}),$.onerror=ne(y)}else{let $=0;const O=v||!("openKeyCursor"in _)?_.openCursor(k):_.openKeyCursor(k),z=[];O.onsuccess=U=>{const K=O.result;return K?(z.push(v?K.value:K.primaryKey),++$===p?f({result:z}):void K.continue()):f({result:z})},O.onerror=ne(y)}})}(i),openCursor:function({trans:u,values:h,query:f,reverse:y,unique:m}){return new Promise((v,p)=>{v=N(v);const{index:g,range:b}=f,E=u.objectStore(c),x=g.isPrimaryKey?E:E.index(g.name),w=y?m?"prevunique":"prev":m?"nextunique":"next",_=h||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=ne(p),_.onsuccess=N(k=>{const $=_.result;if(!$)return void v(null);$.___id=++Ta,$.done=!1;const O=$.continue.bind($);let z=$.continuePrimaryKey;z&&(z=z.bind($));const U=$.advance.bind($),K=()=>{throw new Error("Cursor not stopped")};$.trans=u,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=N(p),$.next=function(){let D=1;return this.start(()=>D--?this.continue():this.stop()).then(()=>this)},$.start=D=>{const je=new Promise((V,_e)=>{V=N(V),_.onerror=ne(_e),$.fail=_e,$.stop=rt=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=K,V(rt)}}),Me=()=>{if(_.result)try{D()}catch(V){$.fail(V)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=N(V=>{_.onsuccess=Me,Me()}),$.continue=O,$.continuePrimaryKey=z,$.advance=U,Me(),je},v($)},p)})},count({query:u,trans:h}){const{index:f,range:y}=u;return new Promise((m,v)=>{const p=h.objectStore(c),g=f.isPrimaryKey?p:p.index(f.name),b=r(y),E=b?g.count(b):g.count();E.onsuccess=N(x=>m(x.target.result)),E.onerror=ne(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:At(e),schema:s}}function er({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(c,u){return u.reduce((h,{create:f})=>({...h,...f(h)}),c)}(Oa(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function sn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=wr(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ue(o,s,{get(){return this.table(s)},set(l){ri(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function tr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function Ra(t,e){return t._cfg.version-e._cfg.version}function Na(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;ve(()=>{A.trans=i,A.transless=a,e===0?(j(s).forEach(l=>{An(n,l,s[l].primKey,s[l].indexes)}),er(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},d,c,u){const h=[],f=l._versions;let y=l._dbSchema=rr(l,l.idbdb,u),m=!1;function v(){return h.length?S.resolve(h.shift()(c.idbtrans)).then(v):S.resolve()}return f.filter(p=>p._cfg.version>=d).forEach(p=>{h.push(()=>{const g=y,b=p._cfg.dbschema;sr(l,g,u),sr(l,b,u),y=l._dbSchema=b;const E=ki(g,b);E.add.forEach(w=>{An(u,w[0],w[1].primKey,w[1].indexes)}),E.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=u.objectStore(w.name);w.add.forEach(k=>nr(_,k)),w.change.forEach(k=>{_.deleteIndex(k.name),nr(_,k)}),w.del.forEach(k=>_.deleteIndex(k))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>d){er(l,u),c._memoizedTables={},m=!0;let w=ai(b);E.del.forEach(O=>{w[O]=g[O]}),tr(l,[l.Transaction.prototype]),sn(l,[l.Transaction.prototype],j(w),w),c.schema=w;const _=br(x);let k;_&&tt();const $=S.follow(()=>{if(k=x(c),k&&_){var O=de.bind(null,null);k.then(O,O)}});return k&&typeof k.then=="function"?S.resolve(k):$.then(()=>k)}}),h.push(g=>{(!m||!xa)&&function(b,E){[].slice.call(E.db.objectStoreNames).forEach(x=>b[x]==null&&E.db.deleteObjectStore(x))}(p._cfg.dbschema,g),tr(l,[l.Transaction.prototype]),sn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),c.schema=l._dbSchema})}),v().then(()=>{var p,g;g=u,j(p=y).forEach(b=>{g.db.objectStoreNames.contains(b)||An(g,b,p[b].primKey,p[b].indexes)})})}(t,e,i,n).catch(o)})}function ki(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!hn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let d;for(d in a)l[d]||o.del.push(d);for(d in l){const c=a[d],u=l[d];c?c.src!==u.src&&o.change.push(u):o.add.push(u)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function An(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>nr(s,i)),s}function nr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function rr(t,e,n){const r={};return Qt(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Qn(Ai(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let c=0;c<i.indexNames.length;++c){const u=i.index(i.indexNames[c]);o=u.keyPath;var d=Qn(u.name,o,!!u.unique,!!u.multiEntry,!1,o&&typeof o!="string",!1);l.push(d)}r[s]=Ci(s,a,l)}),r}function sr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],d=o.index(l).keyPath,c=typeof d=="string"?d:"["+Qt(d).join("+")+"]";if(e[i]){const u=e[i].idxByName[c];u&&(u.name=l,delete e[i].idxByName[c],e[i].idxByName[l]=u)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&R.WorkerGlobalScope&&R instanceof R.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class za{_parseStoresSpec(e,n){j(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Qn(l,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),H(d),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Ci(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?q(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{q(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,tr(n,[n._allTables,n,n.Transaction.prototype]),sn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],j(i),i),n._storeNames=j(i),this}upgrade(e){return this._cfg.contentUpgrade=Sr(this._cfg.contentUpgrade||T,e),this}}function Cr(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Oe("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function kr(t){return t&&typeof t.databases=="function"}function ir(t){return ve(function(){return A.letThrough=!0,t()})}function Da(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function ja(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?M(e.dbOpenError):t);ie&&(e.openCanceller._stackHolder=De()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return S.race([r,(typeof navigator>"u"?S.resolve():Da()).then(()=>new S((l,d)=>{if(s(),!n)throw new C.MissingAPI;const c=t.name,u=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!u)throw new C.MissingAPI;u.onerror=ne(d),u.onblocked=N(t._fireOnBlocked),u.onupgradeneeded=N(h=>{if(o=u.transaction,e.autoSchema&&!t._options.allowEmptyDB){u.onerror=Et,o.abort(),u.result.close();const y=n.deleteDatabase(c);y.onsuccess=y.onerror=N(()=>{d(new C.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=ne(d);var f=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=f<1,t._novip.idbdb=u.result,Na(t,f/10,o,d)}},d),u.onsuccess=N(()=>{o=null;const h=t._novip.idbdb=u.result,f=Qt(h.objectStoreNames);if(f.length>0)try{const m=h.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},p,g){v.verno=p.version/10;const b=v._dbSchema=rr(0,p,g);v._storeNames=Qt(p.objectStoreNames,0),sn(v,[v._allTables],j(b),b)}(t,h,m):(sr(t,t._dbSchema,m),function(v,p){const g=ki(rr(0,v.idbdb,p),v._dbSchema);return!(g.add.length||g.change.some(b=>b.add.length||b.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),er(t,m)}catch{}var y;pt.push(t),h.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),h.onclose=N(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},p){!kr(m)&&p!=="__dbnames"&&Cr(m,v).put({name:p}).catch(T)}(t._deps,c),l()},d)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(ir(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let d=e.onReadyBeingFired.reduce(Sr,T);return e.onReadyBeingFired=[],S.resolve(ir(()=>d(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),M(l)}).finally(()=>{e.openComplete=!0,i()})}function or(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):H(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function Ma(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=li(s);return[t,i,n]}function Pi(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(u){return u.name===xr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Pi(t,e,n,null,s))):M(u)}const l=br(s);let d;l&&tt();const c=S.follow(()=>{if(d=s.call(o,o),d)if(l){var u=de.bind(null,null);d.then(u,u)}else typeof d.next=="function"&&typeof d.throw=="function"&&(d=or(d))},a);return(d&&typeof d.then=="function"?S.resolve(d).then(u=>o.active?u:M(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>d)).then(u=>(r&&o._resolve(),o._completion.then(()=>u))).catch(u=>(o._reject(u),M(u)))})}function Kt(t,e,n){const r=H(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Ba={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(c,u,h){const f=yt(c),y=s[f]=s[f]||[],m=c==null?0:typeof c=="string"?1:c.length,v=u>0,p={...h,isVirtual:v,keyTail:u,keyLength:m,extractKey:Zn(c),unique:!v&&h.unique};return y.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?c[0]:c.slice(0,m-1),u+1,h),y.sort((g,b)=>g.keyTail-b.keyTail),p}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const c of r.indexes)o(c.keyPath,0,c);function l(c){const u=c.query.index;return u.isVirtual?{...c,query:{index:u,range:(h=c.query.range,f=u.keyTail,{type:h.type===1?2:h.type,lower:Kt(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Kt(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var h,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(c){const u=s[yt(c)];return u&&u[0]}},count:c=>n.count(l(c)),query:c=>n.query(l(c)),openCursor(c){const{keyTail:u,isVirtual:h,keyLength:f}=c.query.index;return h?n.openCursor(l(c)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(Kt(p,c.reverse?t.MAX_KEY:t.MIN_KEY,u)):c.unique?m.continue(m.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,u)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(Kt(p,t.MAX_KEY,u),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(c)}}}}}};function Pr(t,e,n,r){return n=n||{},r=r||"",j(t).forEach(s=>{if(X(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=Ln(i);a!==Ln(o)?n[r+s]=e[s]:a==="Object"?Pr(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),j(e).forEach(s=>{X(t,s)||(n[r+s]=e[s])}),n}const Ka={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:d}=o.table(e).hook;switch(i.type){case"add":if(l.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"put":if(l.fire===T&&d.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"delete":if(a.fire===T)break;return o._promise("readwrite",()=>c(i),!0);case"deleteRange":if(a.fire===T)break;return o._promise("readwrite",()=>function(h){return u(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function c(h){const f=A.trans,y=h.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,h);if(!y)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:y}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,h,y).then(m=>{const v=y.map((p,g)=>{const b=m[g],E={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call(E,p,b,f);else if(h.type==="add"||b===void 0){const x=l.fire.call(E,p,h.values[g],f);p==null&&x!=null&&(p=x,h.keys[g]=p,r.outbound||te(h.values[g],r.keyPath,p))}else{const x=Pr(b,h.values[g]),w=d.fire.call(E,x,p,b,f);if(w){const _=h.values[g];Object.keys(w).forEach(k=>{X(_,k)?_[k]=w[k]:te(_,k,w[k])})}}return E});return n.mutate(h).then(({failures:p,results:g,numFailures:b,lastResult:E})=>{for(let x=0;x<y.length;++x){const w=g?g[x]:y[x],_=v[x];w==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(h.type==="put"&&m[x]?h.values[x]:w)}return{failures:p,results:g,numFailures:b,lastResult:E}}).catch(p=>(v.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function u(h,f,y){return n.query({trans:h,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>c({type:"delete",keys:m,trans:h}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:u(h,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function Ti(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)F(e.keys[s],t[i])===0&&(r.push(n?kt(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const La={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Ti(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?kt(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Tr(t){return!("from"in t)}const ae=function(t,e){if(!this){const n=new ae;return t&&"d"in t&&q(n,t),n}q(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Ct(t,e,n){const r=F(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Tr(t))return q(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(F(n,t.from)<0)return s?Ct(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},gs(t);if(F(e,t.to)>0)return i?Ct(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},gs(t);F(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),F(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&on(t,s),i&&o&&on(t,i)}function on(t,e){Tr(e)||function n(r,{from:s,to:i,l:o,r:a}){Ct(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function Ia(t,e){const n=ar(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=ar(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(F(a.from,s.to)<=0&&F(a.to,s.from)>=0)return!0;F(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function ar(t){let e=Tr(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&F(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||F(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function gs(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=ys(o)}t.d=ys(t)}function ys({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}et(ae.prototype,{add(t){return on(this,t),this},addKey(t){return Ct(this,t,t),this},addKeys(t){return t.forEach(e=>Ct(this,e,e)),this},[In](){return ar(this)}});const Ha={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new ae(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,d={...s,mutate:h=>{const f=h.trans,y=f.mutatedParts||(f.mutatedParts={}),m=w=>{const _=`idb://${e}/${r}/${w}`;return y[_]||(y[_]=new ae)},v=m(""),p=m(":dels"),{type:g}=h;let[b,E]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const x=h.trans._cache;return s.mutate(h).then(w=>{if(H(b)){g!=="delete"&&(b=w.results),v.addKeys(b);const _=Ti(b,x);_||g==="add"||p.addKeys(b),(_||E)&&function(k,$,O,z){function U(K){const D=k(K.name||"");function je(V){return V!=null?K.extractKey(V):null}const Me=V=>K.multiEntry&&H(V)?V.forEach(_e=>D.addKey(_e)):D.addKey(V);(O||z).forEach((V,_e)=>{const rt=O&&je(O[_e]),fn=z&&je(z[_e]);F(rt,fn)!==0&&(rt!=null&&Me(rt),fn!=null&&Me(fn))})}$.indexes.forEach(U)}(m,i,_,E)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return w})}},c=({query:{index:h,range:f}})=>{var y,m;return[h,new ae((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},u={get:h=>[o,new ae(h.key)],getMany:h=>[o,new ae().addKeys(h.keys)],count:c,query:c,openCursor:c};return j(u).forEach(h=>{d[h]=function(f){const{subscr:y}=A;if(y){const m=E=>{const x=`idb://${e}/${r}/${E}`;return y[x]||(y[x]=new ae)},v=m(""),p=m(":dels"),[g,b]=u[h](f);if(m(g.name||"").add(b),!g.isPrimaryKey){if(h!=="count"){const E=h==="query"&&l&&f.values&&s.query({...f,values:!1});return s[h].apply(this,arguments).then(x=>{if(h==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),x));const w=f.values?x.result.map(a):x.result;f.values?v.addKeys(w):p.addKeys(w)}else if(h==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const k=w.primaryKey;return p.addKey(k),k}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return x})}p.add(n)}}return s[h].apply(this,arguments)}}),d}}}};class Oe{constructor(e,n){this._middlewares={},this.verno=0;const r=Oe.dependencies;this._options=n={addons:Oe.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(a=>{i.dbReadyResolve=a}),i.openCanceller=new S((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=gt(this,"populate","blocked","versionchange","close",{ready:[Sr,T]}),this.on.ready.subscribe=si(this.on.ready.subscribe,a=>(l,d)=>{Oe.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||S.resolve().then(l),d&&a(l);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(l),d&&a(l);else{a(l);const u=this;d||a(function h(){u.on.ready.unsubscribe(l),u.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,it(Ea.prototype,function(a,l){this.db=o;let d=Si,c=null;if(l)try{d=l()}catch(y){c=y}const u=a._ctx,h=u.table,f=h.hook.reading.fire;this._ctx={table:h,index:u.index,isPrimKey:!u.index||h.schema.primKey.keyPath&&u.index===h.schema.primKey.name,range:d,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:u.or,valueMapper:f!==St?f:null}})),this.Table=function(a){return it($a.prototype,function(l,d,c){this.db=a,this._tx=c,this.name=l,this.schema=d,this.hook=a._allTables[l]?a._allTables[l].hook:gt(null,{creating:[da,T],reading:[ha,St],updating:[ma,T],deleting:[fa,T]})})}(this),this.Transaction=function(a){return it(Pa.prototype,function(l,d,c,u,h){this.db=a,this.mode=l,this.storeNames=d,this.schema=c,this.chromeTransactionDurability=u,this.idbtrans=null,this.on=gt(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),M(f)})})}(this),this.Version=function(a){return it(za.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return it(Ei.prototype,function(l,d,c){this.db=a,this._ctx={table:l,index:d===":id"?null:d,or:c};const u=a._deps.indexedDB;if(!u)throw new C.MissingAPI;this._cmp=this._ascending=u.cmp.bind(u),this._descending=(h,f)=>u.cmp(f,h),this._max=(h,f)=>u.cmp(h,f)>0?h:f,this._min=(h,f)=>u.cmp(h,f)<0?h:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=At(n.IDBKeyRange),this._createTransaction=(a,l,d,c)=>new this.Transaction(a,l,d,this._options.chromeTransactionDurability,c),this._fireOnBlocked=a=>{this.on("blocked").fire(a),pt.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(Ba),this.use(Ka),this.use(Ha),this.use(La),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(Ra),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return ja(this)}_close(){const e=this._state,n=pt.indexOf(this);if(n>=0&&pt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:a,IDBKeyRange:l},d){!kr(a)&&d!=="__dbnames"&&Cr(a,l).delete(d).catch(T)})(this._deps,this.name),r()}),o.onerror=ne(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return j(this._allTables).map(e=>this._allTables[e])}transaction(){const e=Ma.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(d=>{var c=d instanceof this.Table?d.name:d;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(d=>{if(s&&s.storeNames.indexOf(d)===-1){if(!i)throw new C.SubTransaction("Table "+d+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(d){return s?s._promise(null,(c,u)=>{u(d)}):M(d)}const l=Pi.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?nt(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!X(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Ua=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Fa{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Ua](){return this}}function Oi(t,e){return j(e).forEach(n=>{on(t[n]||(t[n]=new ae),e[n])}),t}function qa(t){return new Fa(e=>{const n=br(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,be.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let a=!1,l=!1;function d(){return j(i).some(h=>s[h]&&Ia(s[h],i[h]))}const c=h=>{Oi(s,h),d()&&u()},u=()=>{if(a||r)return;s={};const h={},f=function(y){n&&tt();const m=()=>ve(t,{subscr:y,trans:null}),v=A.trans?nt(A.transless,m):m();return n&&v.then(de,de),v}(h);l||(be("storagemutated",c),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(d()?u():(s={},i=h,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return u(),o})}let lr;try{lr={indexedDB:R.indexedDB||R.mozIndexedDB||R.webkitIndexedDB||R.msIndexedDB,IDBKeyRange:R.IDBKeyRange||R.webkitIDBKeyRange}}catch{lr={indexedDB:null,IDBKeyRange:null}}const Se=Oe;function Gt(t){let e=ce;try{ce=!0,be.storagemutated.fire(t)}finally{ce=e}}et(Se,{...Ht,delete:t=>new Se(t,{addons:[]}).delete(),exists:t=>new Se(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return kr(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):Cr(e,n).toCollection().primaryKeys()}(Se.dependencies).then(t)}catch{return M(new C.MissingAPI)}},defineClass:()=>function(t){q(this,t)},ignoreTransaction:t=>A.trans?nt(A.transless,t):t(),vip:ir,async:function(t){return function(){try{var e=or(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return M(n)}}},spawn:function(t,e,n){try{var r=or(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return M(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?Se.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>ie,set:t=>{ui(t,t==="dexie"?()=>!0:xi)}},derive:We,extend:q,props:et,override:si,Events:gt,on:be,liveQuery:qa,extendObservabilitySet:Oi,getByKeyPath:he,setByKeyPath:te,delByKeyPath:function(t,e){typeof e=="string"?te(t,e,void 0):"length"in e&&[].map.call(e,function(n){te(t,n,void 0)})},shallowClone:ai,deepClone:kt,getObjectDiff:Pr,cmp:F,asap:ii,minKey:-(1/0),addons:[],connections:pt,errnames:xr,dependencies:lr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Se.maxKey=At(Se.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(be("storagemutated",t=>{if(!ce){let e;hn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),ce=!0,dispatchEvent(e),ce=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{ce||Gt(t)}));let ce=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),be("storagemutated",e=>{ce||t.postMessage(e)}),t.onmessage=e=>{e.data&&Gt(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){be("storagemutated",e=>{try{ce||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Gt(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Gt(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof Ge||t instanceof TypeError||t instanceof SyntaxError||!t.name||!ls[t.name])return t;var n=new ls[t.name](e||t.message,t);return"stack"in t&&ue(n,"stack",{get:function(){return this.inner.stack}}),n},ui(ie,xi);class Ot extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class vs extends Ot{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const dn="locationchange";let ws=!1;const Va=window.history.pushState;function bs(...t){const e=Va.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}const Wa=window.history.replaceState;function _s(...t){const e=Wa.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}function Ga(){if(!ws){if(window.history.pushState===bs)throw new vs("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===_s)throw new vs("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");ws=!0,window.history.pushState=bs,window.history.replaceState=_s,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(dn))})}}function Ja(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Ya(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Xa(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?Ja(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Qa extends Ot{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Ri(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const xs=6;function Ss(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>xs)throw new Qa(`Route sanitization depth has exceed the max of ${xs} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Ri(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Cn extends Ot{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Za(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Cn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Cn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Cn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function el(t,e,n,r=!1){const s=Ni(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Ni(t,e,n=""){var r;if(!n&&e!=null)throw new Ot("Route base regexp was defined but routeBase string was not provided.");const s=tl(e)?`/${n}`:"",i=t.search?Ya(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function tl(t){return!!(t&&window.location.pathname.match(t))}function nl(t={}){var e;Za(t),Ga();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const d=i.getCurrentRawRoutes(),c={...d,...o},u=i.sanitizeFullRoute(c);if(!(!l&&Ri(d,u)))return el(u,r,n,a)},createRoutesUrl:o=>Ni(o,r,n),getCurrentRawRoutes:()=>Xa(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Ot(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(dn,()=>Ss(i)),s=!0),o&&Ss(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const zi=nl({routeBase:"resizable-image-element"}),rl=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],sl="resizable-image-element-storage";class il extends Oe{constructor(){super(sl),this.version(1).stores({storedUrls:"&index"})}}const kn=new il,$s={async set(t){const e=an(t).map((n,r)=>({index:r,url:n}));await kn.storedUrls.clear(),await kn.storedUrls.bulkPut(e)},async get(){const e=(await kn.storedUrls.toArray()).map(r=>r.url),n=an(e);return ol(n.length?n:rl)}};function ol(t){var e,n;try{const r=an(((n=(e=zi.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function an(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(Mi)}const{defineElement:al,defineElementNoInputs:ll}=Ro(),Lt=al()({tagName:"vir-url-input",events:{urlsChange:jn()},styles:Fe`
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
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),I`
            <textarea
                ${ht("input",a=>{const d=a.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(d))})}
                ${ht("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),ot={max:{width:300,height:600},min:{width:300,height:150}};ll({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Bs($s.get()),constraints:void 0,router:zi,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Fe`
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

        ${t.showConstraints} ${dt} {
            border-color: blue;
        }

        ${dt} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||ot.min.width,height:Number(o==null?void 0:o.minH)||ot.min.height},max:{width:Number(o==null?void 0:o.maxW)||ot.max.width,height:Number(o==null?void 0:o.maxH)||ot.max.height}}})}const n=t.constraints??ot,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!Bi(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:ln(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),I`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Lt}
                ${yr(Lt,{urls:r})}
                ${ht(Lt.events.urlsChange,o=>{const a=o.detail;$s.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Lt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${ht("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const d=[Or(o),Or(l)].join(" "),c=n[o][l];return I`
                            <label>
                                ${d}
                                <br />
                                ${ee(c)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${c}
                                    ${ht("input",u=>{i(u.currentTarget,o,l)})}
                                />
                            </label>
                        `});return I`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${cl(n,t.imageUrls)}</div>
        `}});function cl(t,e){return Mn(e,"Loading...",n=>an(n).map(r=>{const s=`
                height: ${ee(t.max.height)};
                max-height: ${ee(t.max.height)};
                width: ${ee(t.max.width)};
                max-width: ${ee(t.max.width)}`,i=`height: ${ee(t.min.height)}; width: ${ee(t.min.width)}`;return I`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${dt}
                            ${yr(dt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${dt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
