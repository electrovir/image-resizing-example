(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function As(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function zr(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Hi({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const Ui=["january","february","march","april","may","june","july","august","september","october","november","december"];Ui.map(t=>t.slice(0,3));function cn(t){return t?t instanceof Error?t.message:String(t):""}function Tn(t){return t instanceof Error?t:new Error(cn(t))}function Cs(t){return!!t}const Fi=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function On(t,e){return t?Fi.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function vt(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function jr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Rn(t){return!!t&&typeof t=="object"}function qi(t,e){try{if(t===e)return!0;if(Rn(t)&&Rn(e)){const n=jr(t),r=jr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${cn(n)}`),n}}function ks(t,e,n=!1,r={}){const s=vt(t),i=new Set(vt(e));if(!n){const o=s.filter(l=>!i.has(l));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!On(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function l(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const a=t[o],c=e[o];r[o]||Ps(a,c,l,n,r[o]??{})})}function Ps(t,e,n,r,s){var l;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{On(e,"constructor")&&(!On(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(l=t==null?void 0:t.constructor)==null?void 0:l.name}" did not match expected constructor "${e.constructor}"`)}catch(a){if(a instanceof n)throw a}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((a,c)=>{if(e.map(h=>{try{Ps(a,h,n,r,s);return}catch(d){return new Error(`entry at index "${c}" did not match expected shape: ${cn(d)}`)}}).filter(Cs).length===e.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${e.join(", ")}"`)})):Rn(e)&&ks(t,e,r,s)}function hr(t){return Array.isArray(t)?"array":typeof t}function Ts(t,e){return hr(t)===e}function Wi(t,e,n){if(!Ts(t,e))throw new TypeError(`'${n}' is of type '${hr(t)}' but type '${e}' was expected.`)}function Vi({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(Ts(n,"object")?ks(r,n):Wi(r,hr(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function Ji(t,e){return vt(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Os(t,e){let n=!1;const r=vt(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(vt(r).map(async o=>{const l=await r[o];r[o]=l})),s(r)}catch(o){i(o)}}):r}function un(t){const e=dr();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function dr(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${dr.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function ee(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=window,fr=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mr=Symbol(),Dr=new WeakMap;let Rs=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(fr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Dr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Dr.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new Rs(typeof t=="string"?t:t+"",void 0,mr),Ns=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Rs(n,t,mr)},Gi=(t,e)=>{fr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=Ht.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},Mr=fr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pn;const Xt=window,Br=Xt.trustedTypes,Yi=Br?Br.emptyScript:"",Lr=Xt.reactiveElementPolyfillSupport,Nn={toAttribute(t,e){switch(e){case Boolean:t=t?Yi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},zs=(t,e)=>e!==t&&(e==e||t==t),gn={attribute:!0,type:String,converter:Nn,reflect:!1,hasChanged:zs};let Ke=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=gn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(Mr(s))}else e!==void 0&&n.push(Mr(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Gi(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=gn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Nn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Nn;this._$El=i,this[i]=l.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||zs)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ke.finalized=!0,Ke.elementProperties=new Map,Ke.elementStyles=[],Ke.shadowRootOptions={mode:"open"},Lr==null||Lr({ReactiveElement:Ke}),((pn=Xt.reactiveElementVersions)!==null&&pn!==void 0?pn:Xt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn;const Qt=window,Ye=Qt.trustedTypes,Kr=Ye?Ye.createPolicy("lit-html",{createHTML:t=>t}):void 0,pe=`lit$${(Math.random()+"").slice(9)}$`,js="?"+pe,Xi=`<${js}>`,Xe=document,wt=(t="")=>Xe.createComment(t),bt=t=>t===null||typeof t!="object"&&typeof t!="function",Ds=Array.isArray,Qi=t=>Ds(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ir=/-->/g,Hr=/>/g,xe=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ur=/'/g,Fr=/"/g,Ms=/^(?:script|style|textarea|title)$/i,Zi=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),eo=Zi(1),ye=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),qr=new WeakMap,qe=Xe.createTreeWalker(Xe,129,null,!1),to=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=st;for(let a=0;a<n;a++){const c=t[a];let u,h,d=-1,f=0;for(;f<c.length&&(o.lastIndex=f,h=o.exec(c),h!==null);)f=o.lastIndex,o===st?h[1]==="!--"?o=Ir:h[1]!==void 0?o=Hr:h[2]!==void 0?(Ms.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=xe):h[3]!==void 0&&(o=xe):o===xe?h[0]===">"?(o=s??st,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?xe:h[3]==='"'?Fr:Ur):o===Fr||o===Ur?o=xe:o===Ir||o===Hr?o=st:(o=xe,s=void 0);const y=o===xe&&t[a+1].startsWith("/>")?" ":"";i+=o===st?c+Xi:d>=0?(r.push(u),c.slice(0,d)+"$lit$"+c.slice(d)+pe+y):c+pe+(d===-2?(r.push(void 0),a):y)}const l=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Kr!==void 0?Kr.createHTML(l):l,r]};let zn=class Bs{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const l=e.length-1,a=this.parts,[c,u]=to(e,n);if(this.el=Bs.createElement(c,r),qe.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=qe.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(pe)){const f=u[o++];if(h.push(d),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(pe),m=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?ro:m[1]==="?"?io:m[1]==="@"?oo:hn})}else a.push({type:6,index:i})}for(const d of h)s.removeAttribute(d)}if(Ms.test(s.tagName)){const h=s.textContent.split(pe),d=h.length-1;if(d>0){s.textContent=Ye?Ye.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],wt()),qe.nextNode(),a.push({type:2,index:++i});s.append(h[d],wt())}}}else if(s.nodeType===8)if(s.data===js)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(pe,h+1))!==-1;)a.push({type:7,index:i}),h+=pe.length-1}i++}}static createElement(e,n){const r=Xe.createElement("template");return r.innerHTML=e,r}};function Qe(t,e,n=t,r){var s,i,o,l;if(e===ye)return e;let a=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const c=bt(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,n,r)),r!==void 0?((o=(l=n)._$Co)!==null&&o!==void 0?o:l._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=Qe(t,a._$AS(t,e.values),a,r)),e}let no=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Xe).importNode(r,!0);qe.currentNode=i;let o=qe.nextNode(),l=0,a=0,c=s[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new pr(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new ao(o,this,e)),this.u.push(u),c=s[++a]}l!==(c==null?void 0:c.index)&&(o=qe.nextNode(),l++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},pr=class Ls{constructor(e,n,r,s){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Qe(this,e,n),bt(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==ye&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qi(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==L&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=zn.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new no(i,this),l=o.v(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let n=qr.get(e.strings);return n===void 0&&qr.set(e.strings,n=new zn(e)),n}k(e){Ds(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Ls(this.O(wt()),this.O(wt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},hn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Qe(this,e,n,0),o=!bt(e)||e!==this._$AH&&e!==ye,o&&(this._$AH=e);else{const l=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=Qe(this,l[r+a],n,a),c===ye&&(c=this._$AH[a]),o||(o=!bt(c)||c!==this._$AH[a]),c===L?e=L:e!==L&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}o&&!s&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ro=class extends hn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}};const so=Ye?Ye.emptyScript:"";let io=class extends hn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,so):this.element.removeAttribute(this.name)}},oo=class extends hn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=Qe(this,e,n,0))!==null&&r!==void 0?r:L)===ye)return;const s=this._$AH,i=e===L&&s!==L||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==L&&(s===L||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ao=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}};const Wr=Qt.litHtmlPolyfillSupport;Wr==null||Wr(zn,pr),((yn=Qt.litHtmlVersions)!==null&&yn!==void 0?yn:Qt.litHtmlVersions=[]).push("2.6.1");const lo=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const l=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new pr(e.insertBefore(wt(),l),l,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn,wn;let ct=class extends Ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=lo(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ye}};ct.finalized=!0,ct._$litElement$=!0,(vn=globalThis.litElementHydrateSupport)===null||vn===void 0||vn.call(globalThis,{LitElement:ct});const Vr=globalThis.litElementPolyfillSupport;Vr==null||Vr({LitElement:ct});((wn=globalThis.litElementVersions)!==null&&wn!==void 0?wn:globalThis.litElementVersions=[]).push("3.2.2");var co=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function uo(){return t=>{}}let _t=class extends ct{};_t=co([uo()],_t);const ho={capitalizeFirstLetter:!1};function fo(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function mo(t,e){return e.capitalizeFirstLetter?fo(t):t}function po(t,e=ho){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return mo(r,e)}function Jr(t){return t!==t.toUpperCase()}function go(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",l=s<i.length-1?i[s+1]:"",a=Jr(o)||Jr(l);return r===r.toLowerCase()||s===0||!a?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const yo=["january","february","march","april","may","june","july","august","september","october","november","december"];yo.map(t=>t.slice(0,3));function gr(t){return t?t instanceof Error?t.message:String(t):""}function vo(t){return t instanceof Error?t:new Error(gr(t))}const wo=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ks(t,e){return t?wo.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function bo(t,e){return t&&e.every(n=>Ks(t,n))}function Re(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Gr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Yr(t){return!!t&&typeof t=="object"}function _o(t,e){try{if(t===e)return!0;if(Yr(t)&&Yr(e)){const n=Gr(t),r=Gr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${gr(n)}`),n}}function xo(t,e){return Re(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Ze(t,e){let n=!1;const r=Re(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Re(r).map(async o=>{const l=await r[o];r[o]=l})),s(r)}catch(o){i(o)}}):r}function So(t){return!!(Ks(t,"then")&&typeof t.then=="function")}function xt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${xt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Xr(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):$o(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bn;((bn=window.HTMLSlotElement)===null||bn===void 0?void 0:bn.prototype.assignedElements)!=null;const jn=Symbol("this-is-an-element-vir-declarative-element"),yr=Symbol("key for ignoring inputs not having been set yet"),Eo={[yr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vr=t=>(...e)=>({_$litDirective$:t,values:e});let wr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function Co(t,e){return Is(t,e,_t)}function Is(t,e,n){Dn(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function Dn(t,e){if(t.type!==Ao.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function br(t,e){return ko(t,e)}const ko=vr(class extends wr{constructor(t){super(t),this.element=Co(t,"assign")}render(t,e){return Po(t,this.element,e),ye}});function Po(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Hs(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof _t?!0:Hs(n)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Y=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},re,$e,Ee,Ae,Ue,Ie,J,ut,Mn,Bn;const Us=Symbol("element-vir-async-state-marker");function To(t){if(!t)return{};const e=xo(t,(r,s)=>s instanceof Fs);return Ze(e,(r,s)=>new Oo(s.initialValue))}const Nt=Symbol("not set");class Oo{constructor(e){re.add(this),$e.set(this,Nt),Ee.set(this,void 0),Ae.set(this,void 0),Ue.set(this,[]),Ie.set(this,void 0),J.set(this,xt()),this.asyncMarkerSymbol=Us,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(P(this,$e,"f")===Nt||!_o(e.trigger,P(this,$e,"f"))){Y(this,$e,e.trigger,"f");const n=e.createPromise();P(this,re,"m",Mn).call(this,n)}}else"newPromise"in e?(P(this,$e,"f"),P(this,re,"m",Mn).call(this,e.newPromise),P(this,re,"m",ut).call(this)):"resolvedValue"in e?P(this,re,"m",Bn).call(this,e.resolvedValue):e.forceUpdate&&(Y(this,$e,Nt,"f"),Y(this,Ee,void 0,"f"),P(this,J,"f").isSettled()||P(this,J,"f").reject("Canceled by force update"),Y(this,J,xt(),"f"),P(this,re,"m",ut).call(this))}getValue(){return P(this,J,"f").isSettled()?P(this,Ae,"f")?P(this,Ae,"f"):P(this,Ee,"f"):P(this,J,"f").promise}addSettleListener(e){P(this,Ue,"f").push(e)}removeSettleListener(e){Y(this,Ue,P(this,Ue,"f").filter(n=>n!==e),"f")}}$e=new WeakMap,Ee=new WeakMap,Ae=new WeakMap,Ue=new WeakMap,Ie=new WeakMap,J=new WeakMap,re=new WeakSet,ut=function(){P(this,Ue,"f").forEach(e=>{e()})},Mn=function(e){e!==P(this,Ie,"f")&&(Y(this,Ee,void 0,"f"),Y(this,Ae,void 0,"f"),Y(this,Ie,e,"f"),P(this,J,"f").isSettled()&&Y(this,J,xt(),"f"),e.then(n=>{P(this,Ie,"f")===e&&P(this,re,"m",Bn).call(this,n)}).catch(n=>{P(this,Ie,"f")===e&&(Y(this,Ae,vo(n),"f"),P(this,J,"f").promise.catch(()=>{}),P(this,J,"f").reject(n),P(this,re,"m",ut).call(this))}))},Bn=function(e){e!==P(this,Ee,"f")&&(Y(this,Ae,void 0,"f"),Y(this,Ee,e,"f"),P(this,J,"f").isSettled()&&Y(this,J,xt(),"f"),P(this,J,"f").resolve(e),P(this,re,"m",ut).call(this))};class Fs{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=Us}}function qs(t){return new Fs(t)}function Ws(t,e){return`${t}-${go(e)}`}function Ro(t,e){return e?Ze(e,n=>se(`--${Ws(t,String(n))}`)):{}}function No(t,e){return t?Ze(t,(n,r)=>{const s=e[n];return se(`var(${s}, ${r})`)}):{}}class zo extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Vs(){return t=>{var e;return e=class extends zo{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function Ut(){return Vs()}function jo(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Vs()(n);return e[n]=r,e},{}):{}}function Qr(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Zr(t,e){const n=t;function r(i,o){e&&Qr(o,t,t.tagName);const l=t.asyncStateHandlerMap[o];return l?l.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,l)=>{e&&Qr(o,t,t.tagName),i[o]=void 0;const a=t.asyncStateHandlerMap[o];return a?a.setValue(l):n[o]=l,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Do(t,e){return e?Ze(e,n=>Ws(t,String(n))):{}}function Mo({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:Ze(t,(r,s)=>se(`:host(.${s})`)),hostClassNames:Ze(t,(r,s)=>se(s)),cssVarNames:e,cssVarValues:n}}function Bo({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Re(e).forEach(i=>{const o=e[i],l=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(l):t.classList.remove(l))})}function Lo(t,e){function n(s){Re(s).forEach(i=>{const o=s[i],l=t.asyncStateHandlerMap[i];l?l.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function _r(t){var e;const n=jo(t.events),r=Do(t.tagName,t.hostClasses),s=Ro(t.tagName,t.cssVars),i=No(t.cssVars,s),o={...Eo,...t.options},l=typeof t.styles=="function"?t.styles(Mo({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Ns``,a=t.renderCallback,c=(e=class extends _t{createRenderParams(){return Lo(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Hs(this)&&!this.haveInputsBeenSet&&!o[yr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${br.name}" directive on it. If no inputs are intended, use "${_r.name}" to define ${t.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(u));const h=t.renderCallback(u);return Bo({host:u.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:u.state,inputs:u.inputs}),h}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const u=this.createRenderParams();t.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const u=this.createRenderParams();t.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){Re(u).forEach(h=>{Xr()(this,h),this.instanceInputs[h]=u[h]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=To(t.stateInit),this.instanceInputs=Zr(this,!1),this.instanceState=Zr(this,!0);const u=t.stateInit||{};Re(u).forEach(h=>{Xr()(this,h);const d=this.asyncStateHandlerMap[h];d?(this.instanceState[h]=d.getValue(),d.addSettleListener(()=>{this[h]=d.getValue()})):this.instanceState[h]=u[h]}),this.definition=c}},e.tagName=t.tagName,e.styles=l,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=a,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(c,{[jn]:{value:!0,writable:!1},name:{value:po(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,c),c}function Js(){return t=>_r({...t,options:{[yr]:!1},...t.options})}function ht(t,e){return Ko(t,e)}const Ko=vr(class extends wr{constructor(t){super(t),this.element=Is(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ye}}),es="onDomCreated",ts=vr(class extends wr{constructor(t){super(t),Dn(t,es)}update(t,[e]){Dn(t,es);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function Ln(t,e,n,r){return t instanceof Error?r?r(t):gr(t):So(t)?e:n?n(t):t}function Io(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Js()(s(i))),defineElementNoInputs:i=>(r(i),_r(s(i)))}}function Ho(t,e){return t.filter((n,r)=>!e.includes(r))}function Gs(t){return t.filter(e=>bo(e,["tagName",jn])&&!!e.tagName&&!!e[jn])}const Ys=new WeakMap;function Uo(t,e){var n;const r=Gs(e);return(n=Xs(Ys,[t,...r]).value)===null||n===void 0?void 0:n.template}function Fo(t,e,n){const r=Gs(e);return Zs(Ys,[t,...r],n)}function Xs(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Qs(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Xs(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Qs(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Zs(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:l}=Qs(t,e,r);if(!o)return{result:!1,reason:l};const a=i??{nested:void 0,template:void 0};if(i||t.set(o,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const c=(s=a.nested)!==null&&s!==void 0?s:new WeakMap;return a.nested||(a.nested=c),Zs(c,e,n,r+1)}function ei(t,e,n){return{name:t,check:e,transform:n}}const qo=new WeakMap;function ti(t,e,n){const r=Uo(t,e),s=r??n();if(!r){const o=Fo(t,e,s);if(o.result)qo.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Ho(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function ni(t,e,n,r){const s=[],i=[],o=[];return t.forEach((a,c)=>{var u;const h=s.length-1,d=s[h],f=c-1,y=e[f];let m;r&&r(a),typeof d=="string"&&(m=(u=n.find(p=>p.check(d,a,y)))===null||u===void 0?void 0:u.transform,m&&(s[h]=d+m(y)+a,o.push(f))),m||s.push(a);const v=t.raw[c];m?i[h]=i[h]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function ri(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Wo=[ei("tag name css selector interpolation",(t,e,n)=>ri(n),t=>t.tagName)];function Vo(t,e){return ni(t,e,Wo)}function Fe(t,...e){const n=ti(t,e,()=>Vo(t,e));return Ns(n.strings,...n.values)}const Jo=[ei("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=ri(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function Go(t){}function Yo(t){return ni(t.strings,t.values,Jo,Go)}function H(t,...e){const n=eo(t,...e),r=ti(t,e,()=>Yo(n));return{...n,strings:r.strings,values:r.values}}function Xo(t,e){return t<e}function Qo(t,e){return t>e}function Zo({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Qo:Xo)(e.width/e.height,t.width/t.height)?"width":"height"}function _n({box:t,constraint:e,constraintType:n}){const r=Zo({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function si({box:t,ratio:e}){return Os(t,(n,r)=>r*e)}function ii({box:t,min:e,max:n}){return Os(t,(r,s)=>Hi({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function oi({min:t,max:e,box:n}){const r=ai({min:t,max:e,box:n}),s=si({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||250),width:Math.floor(s.width||(t==null?void 0:t.width)||250)}}function ai({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?_n({box:n,constraint:t,constraintType:"min"}):1,s=e?_n({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=si({ratio:i,box:n});return(t?_n({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function li(t){return Math.min(Math.floor(Math.pow(t,3)),5e3)}var Z=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t))(Z||{}),Kn=(t=>(t.FromParent="from-parent",t.FromChild="from-child",t))(Kn||{});const ea=35;function ta(t,e,n){return n.type===t&&n.direction===e}async function We({getMessageContext:t,message:e,verifyData:n,imageUrl:r}){let s=0,i=!1,o,l,a=!1;const c={...e,direction:"from-parent"},u=e.type;function h(m){try{const v=m.data;if(v.direction!=="from-child")return;if(v&&a&&ta(u,"from-child",v)){let p=!1;try{p=n?n(v.data):!0}catch{}if(!p)return;i=!0,o=v}}catch(v){l=Tn(v)}}let d=t();d==null||d.addEventListener("message",h);const f=Date.now();for(;!i&&s<ea&&!l;){await un(li(s));const m=t();m&&(d==null||d.removeEventListener("message",h),m.addEventListener("message",h),m!==d&&(d=m),a=!0,m.postMessage(c)),s++}const y=Date.now()-f;if(l)throw console.error({listenerError:l,imageUrl:r,messageToSend:e}),l;if(!i)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.floor(y/1e3)}' seconds for '${r}'`);return o==null?void 0:o.data}var Q=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Q||{});function Ce(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,l)=>{const a=na(o,r[l]);return`${o}${a}`});return As(i.join(""))}function na(t,e){return e._$litType$!=null||e._$litDirective$!=null?Ce(e):Array.isArray(e)?e.map(r=>Ce(r)).join(""):t.endsWith("=")?`"${e}"`:e}var D=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(D||{});async function ra(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":ia(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function sa({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Ce(H`
            <img src=${n} />
        `):t==="video"?Ce(H`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Ce(H`
                <p class="text-wrapper">
                    ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                </p>
            `):t==="audio"?Ce(H`
                <audio controls src=${n}></audio>
            `):e}function ia(t){return!!Vi({jsonString:t,errorHandler:()=>{}})}function oa(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}return t}async function ns(t,e){var a;let n;try{n=await fetch(t)}catch{}const r=((a=n==null?void 0:n.headers.get("Content-Type"))==null?void 0:a.toLowerCase())??"",s=await(n==null?void 0:n.text())??"",i=n?await ra(r,s):"image",o=oa(s??"",i);return{templateString:sa({imageText:o,imageType:i,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:i}}function ge(t){return t.contentWindow}const rs=1e4;async function aa({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){var d;const l=Date.now(),a=dr();r.onload=()=>{a.resolve()};let c=0,u=0;for(;!ge(r)&&u<=rs;)await un(li(c)),u=Date.now()-l,c++;u>rs&&await a.promise,await We({message:{type:Z.Ready},imageUrl:s.imageUrl,getMessageContext:()=>ge(r)??void 0}),i&&await We({message:{type:Z.ForceSize,data:i},imageUrl:s.imageUrl,getMessageContext:()=>ge(r)??void 0});const h=o??await We({message:{type:Z.SendSize},imageUrl:s.imageUrl,getMessageContext:()=>ge(r)??void 0,verifyData:f=>!isNaN(f.width)&&!isNaN(f.height)&&!!f.width&&!!f.height});return await ci({min:t,max:e,imageDimensions:h,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0}),((d=ge(r))==null?void 0:d.document.documentElement.outerHTML)??""}async function ci({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:l}){const a=r.shadowRoot.querySelector(".frame-constraint");if(!(a instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c=oi({min:t,max:e,box:o??n});a.style.width=ee(Math.floor(c.width)),a.style.height=ee(Math.floor(c.height));const u=ii({min:t,max:e,box:c});c.height<u.height?r.classList.add(Q.VerticallyCenter):r.classList.remove(Q.VerticallyCenter),r.style.width=ee(u.width),r.style.height=ee(u.height);const h=ai({min:t,max:e,box:o??n});if(l&&(h>3?await We({message:{type:Z.SendScalingMethod,data:"pixelated"},imageUrl:i.imageUrl,getMessageContext:()=>ge(s)??void 0}):await We({message:{type:Z.SendScalingMethod,data:"default"},imageUrl:i.imageUrl,getMessageContext:()=>ge(s)??void 0}),i.imageType===D.Html)){const d=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},f={width:h*d.width,height:h*d.height};await We({message:{type:Z.SendScale,data:f},imageUrl:i.imageUrl,getMessageContext:()=>ge(s)??void 0})}}var ss=Object.freeze,la=Object.defineProperty,is=(t,e)=>ss(la(t,"raw",{value:ss(e||t.slice())})),os,as;function ca(t,e,n){const r=Math.random(),s=H(os||(os=is([`
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
    `])),t.imageType,n??"",D.Svg,D.Html,D.Image,D.Video,D.Text,D.Json,D.Audio,Kn.FromChild,Kn.FromChild,Z.Ready,Z.SendScale,Z.SendScalingMethod,Z.SendSize,Z.ForceSize,D.Audio),i=H(as||(as=is([`
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
    `])),t.imageType,D.Image,D.Svg,D.Video,D.Text,D.Json,r,e??"",s);return As(Ce(i)).replace(String(r),`
${t.templateString}
`)}const ua={imageData:qs()},ls=H`
    <div class="click-cover"></div>
`,xn="latest-frame-srcdoc",dt=Js()({tagName:"vir-resizable-image",stateInit:ua,events:{settled:Ut(),imageDataCalculated:Ut(),errored:Ut()},styles:Fe`
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
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${se(Q.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[xn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(Q.HideLoading),s(new i.settled(!1)),r.classList.remove(Q.VerticallyCenter);try{return ns(e.imageUrl,!!e.blockAutoPlay)}catch{await un(1e3);try{return ns(e.imageUrl,!!e.blockAutoPlay)}catch(y){throw s(new i.errored(Tn(y))),y}}},trigger:{...Ji(e,f=>f!=="extraHtml")}}});const o=e.min&&e.max?ii({box:e.min,max:e.max}):e.min,l=e.max,a=e.forcedOriginalImageSize?oi({min:o,max:l,box:e.forcedOriginalImageSize}):void 0,c=Ln(t.imageData,"",f=>(s(new i.imageDataCalculated(f)),f.imageType===D.Pdf?H`
                        <iframe
                            src=${f.imageUrl}
                            ${ts(async y=>{try{await ci({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:y,imageData:f,imageDimensions:l??{width:500,height:500},max:l,min:o,sendSizeMessage:!1}),r[xn]="",s(new i.settled(!0)),r.classList.add(Q.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                    `:H`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${ca(f,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${ts(async y=>{try{const m=await aa({min:o,max:l,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:a});r[xn]=m,s(new i.settled(!0)),r.classList.add(Q.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),f=>(s(new i.errored(Tn(f))),H`
                    <div class="error-wrapper">
                        <slot name="error">${cn(f)}</slot>
                    </div>
                `)),u=Ln(t.imageData,ls,f=>!e.blockInteraction&&[D.Html,D.Video,D.Audio,D.Pdf].includes(f.imageType)?"":ls,()=>""),h=t.imageData instanceof Error?Fe`
                      max-width: 100%;
                      max-height: 100%;
                  `:a?Fe`
                      width: ${a.width}px;
                      height: ${a.height}px;
                  `:"",d=Fe`
            width: ${(o==null?void 0:o.width)??250}px;
            height: ${(o==null?void 0:o.height)??250}px;
        `;return H`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="min-size" style=${d}>
                <div class="frame-constraint" style=${h}>${c}</div>
            </div>
            ${u}
        `}}),R=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,M=Object.keys,U=Array.isArray;function W(t,e){return typeof e!="object"||M(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||R.Promise||(R.Promise=Promise);const St=Object.getPrototypeOf,ha={}.hasOwnProperty;function X(t,e){return ha.call(t,e)}function et(t,e){typeof e=="function"&&(e=e(St(t))),(typeof Reflect>"u"?M:Reflect.ownKeys)(e).forEach(n=>{ue(t,n,e[n])})}const ui=Object.defineProperty;function ue(t,e,n,r){ui(t,e,W(n&&X(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ve(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ue(t.prototype,"constructor",t),{extend:et.bind(null,t.prototype)}}}}const da=Object.getOwnPropertyDescriptor;function xr(t,e){let n;return da(t,e)||(n=St(t))&&xr(n,e)}const fa=[].slice;function Zt(t,e,n){return fa.call(t,e,n)}function hi(t,e){return e(t)}function at(t){if(!t)throw new Error("Assertion Failed")}function di(t){R.setImmediate?setImmediate(t):setTimeout(t,0)}function fi(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function he(t,e){if(X(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=he(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var l=t[e.substr(0,o)];return l===void 0?void 0:he(l,e.substr(o+1))}}function te(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){at(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)te(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),l=e.substr(i+1);if(l==="")n===void 0?U(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var a=t[o];a&&X(t,o)||(a=t[o]={}),te(a,l,n)}}else n===void 0?U(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function mi(t){var e={};for(var n in t)X(t,n)&&(e[n]=t[n]);return e}const ma=[].concat;function pi(t){return ma.apply([],t)}const gi="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pi([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>R[t]),pa=gi.map(t=>R[t]);fi(gi,t=>[t,!0]);let me=null;function Pt(t){me=typeof WeakMap<"u"&&new WeakMap;const e=In(t);return me=null,e}function In(t){if(!t||typeof t!="object")return t;let e=me&&me.get(t);if(e)return e;if(U(t)){e=[],me&&me.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(In(t[n]))}else if(pa.indexOf(t.constructor)>=0)e=t;else{const i=St(t);for(var s in e=i===Object.prototype?{}:Object.create(i),me&&me.set(t,e),t)X(t,s)&&(e[s]=In(t[s]))}return e}const{toString:ga}={};function Hn(t){return ga.call(t).slice(8,-1)}const Un=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ya=typeof Un=="symbol"?function(t){var e;return t!=null&&(e=t[Un])&&e.apply(t)}:function(){return null},He={};function le(t){var e,n,r,s;if(arguments.length===1){if(U(t))return t.slice();if(this===He&&typeof t=="string")return[t];if(s=ya(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const Sr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var ie=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function yi(t,e){ie=t,vi=e}var vi=()=>!0;const va=!new Error("").stack;function je(){if(va)try{throw je.arguments,new Error}catch(t){return t}return new Error}function Fn(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(vi).map(r=>`
`+r).join("")):""}var wi=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],$r=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(wi),wa={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Je(t,e){this._e=je(),this.name=t,this.message=e}function bi(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function en(t,e,n,r){this._e=je(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=bi(t,e)}function ft(t,e){this._e=je(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=bi(t,e)}Ve(Je).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Fn(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ve(en).from(Je),Ve(ft).from(Je);var Er=$r.reduce((t,e)=>(t[e]=e+"Error",t),{});const ba=Je;var C=$r.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=je(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=wa[e]||n,this.inner=null)}return Ve(r).from(ba),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var cs=wi.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Ft=$r.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function $t(t){return t}function _a(t,e){return t==null||t===$t?e:function(n){return e(t(n))}}function Ne(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function xa(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Ne(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Ne(s,this.onerror):s),i!==void 0?i:n}}function Sa(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Ne(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Ne(r,this.onerror):r)}}function $a(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);W(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Ne(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Ne(i,this.onerror):i),r===void 0?o===void 0?void 0:o:W(r,o)}}function Ea(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Ar(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Ft.ModifyError=en,Ft.DexieError=Je,Ft.BulkError=ft;var Et={};const[qn,tn,Wn]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,St(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,St(e),t]})(),_i=tn&&tn.then,qt=qn&&qn.constructor,Cr=!!Wn;var Vn=!1,Aa=Wn?()=>{Wn.then(zt)}:R.setImmediate?setImmediate.bind(null,zt):R.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{zt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(zt,0)},mt=function(t,e){lt.push([t,e]),nn&&(Aa(),nn=!1)},Jn=!0,nn=!0,Pe=[],Wt=[],Gn=null,Yn=$t,Ge={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:hs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{hs(t[0],t[1])}catch{}})}},A=Ge,lt=[],Te=0,Vt=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(ie&&(this._stackHolder=je(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Et)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Qn(this,this._value))}this._state=null,this._value=null,++e.ref,Si(this,t)}const Xn={get:function(){var t=A,e=rn;function n(r,s){var i=!t.global&&(t!==A||e!==rn);const o=i&&!de();var l=new S((a,c)=>{kr(this,new xi(sn(r,t,i,o),sn(s,t,i,o),a,c,t))});return ie&&Ai(l,this),l}return n.prototype=Et,n},set:function(t){ue(this,"then",t&&t.prototype===Et?Xn:{get:function(){return t},set:Xn.set})}};function xi(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function Si(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Tt();n&&typeof n.then=="function"?Si(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,$i(t)),r&&Ot()}},Qn.bind(null,t))}catch(n){Qn(t,n)}}function Qn(t,e){if(Wt.push(e),t._state===null){var n=t._lib&&Tt();e=Yn(e),t._state=!1,t._value=e,ie&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=xr(e,"stack");e._promise=t,ue(e,"stack",{get:()=>Vn?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Pe.some(s=>s._value===r._value)||Pe.push(r)}(t),$i(t),n&&Ot()}}function $i(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)kr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Te===0&&(++Te,mt(()=>{--Te==0&&Pr()},[]))}function kr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Te,mt(Ca,[n,t,e])}else t._listeners.push(e)}function Ca(t,e,n){try{Gn=e;var r,s=e._value;e._state?r=t(s):(Wt.length&&(Wt=[]),r=t(s),Wt.indexOf(s)===-1&&function(i){for(var o=Pe.length;o;)if(Pe[--o]._value===i._value)return void Pe.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Gn=null,--Te==0&&Pr(),--n.psd.ref||n.psd.finalize()}}function Ei(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=Fn(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return ie&&((r=Fn(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&Ei(t._prev,e,n)),e}function Ai(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function zt(){Tt()&&Ot()}function Tt(){var t=Jn;return Jn=!1,nn=!1,t}function Ot(){var t,e,n;do for(;lt.length>0;)for(t=lt,lt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(lt.length>0);Jn=!0,nn=!0}function Pr(){var t=Pe;Pe=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Vt.slice(0),n=e.length;n;)e[--n]()}function jt(t){return new S(Et,!1,t)}function N(t,e){var n=A;return function(){var r=Tt(),s=A;try{return we(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{we(s,!1),r&&Ot()}}}et(S.prototype,{then:Xn,_then:function(t,e){kr(this,new xi(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):jt(r)):this.then(null,r=>r&&r.name===e?n(r):jt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),jt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Vn=!0;var t=Ei(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Vn=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ue(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Ge.env=Ci(),et(S,{all:function(){var t=le.apply(null,arguments).map(Dt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(Et,!0,t);return Ai(e,Gn),e},reject:jt,race:function(){var t=le.apply(null,arguments).map(Dt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>rn},newPSD:ve,usePSD:nt,scheduler:{get:()=>mt,set:t=>{mt=t}},rejectionMapper:{get:()=>Yn,set:t=>{Yn=t}},follow:(t,e)=>new S((n,r)=>ve((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Ne(function(){(function(l){function a(){l(),Vt.splice(Vt.indexOf(a),1)}Vt.push(a),++Te,mt(()=>{--Te==0&&Pr()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),qt&&(qt.allSettled&&ue(S,"allSettled",function(){const t=le.apply(null,arguments).map(Dt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),qt.any&&typeof AggregateError<"u"&&ue(S,"any",function(){const t=le.apply(null,arguments).map(Dt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(l=>e(l),l=>{s[o]=l,--r||n(new AggregateError(s))}))})}));const I={awaits:0,echoes:0,id:0};var ka=0,Jt=[],Sn=0,rn=0,Pa=0;function ve(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++Pa;var o=Ge.env;i.env=Cr?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:us(o.nthen,i),gthen:us(o.gthen,i)}:{},e&&W(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var l=nt(i,t,n,r);return i.ref===0&&i.finalize(),l}function tt(){return I.id||(I.id=++ka),++I.awaits,I.echoes+=100,I.id}function de(){return!!I.awaits&&(--I.awaits==0&&(I.id=0),I.echoes=100*I.awaits,!0)}function Dt(t){return I.echoes&&t&&t.constructor===qt?(tt(),t.then(e=>(de(),e),e=>(de(),B(e)))):t}function Ta(t){++rn,I.echoes&&--I.echoes!=0||(I.echoes=I.id=0),Jt.push(A),we(t,!0)}function Oa(){var t=Jt[Jt.length-1];Jt.pop(),we(t,!1)}function we(t,e){var n=A;if((e?!I.echoes||Sn++&&t===A:!Sn||--Sn&&t===A)||ki(e?Ta.bind(null,t):Oa),t!==A&&(A=t,n===Ge&&(Ge.env=Ci()),Cr)){var r=Ge.env.Promise,s=t.env;tn.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(R,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function Ci(){var t=R.Promise;return Cr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(R,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:tn.then,gthen:t.prototype.then}:{}}function nt(t,e,n,r,s){var i=A;try{return we(t,!0),e(n,r,s)}finally{we(i,!1)}}function ki(t){_i.call(qn,t)}function sn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&tt(),we(e,!0);try{return t.apply(this,arguments)}finally{we(s,!1),r&&ki(de)}}}function us(t,e){return function(n,r){return t.call(this,sn(n,e),sn(r,e))}}(""+_i).indexOf("[native code]")===-1&&(tt=de=T);function hs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(R.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),W(r,s)):R.CustomEvent&&W(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&R.dispatchEvent&&(dispatchEvent(r),!R.PromiseRejectionEvent&&R.onunhandledrejection))try{R.onunhandledrejection(r)}catch{}ie&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var B=S.reject;function Zn(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===Er.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Zn(t,e,n,r))):B(i)}return s._promise(e,(i,o)=>ve(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return B(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return B(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>Zn(t,e,n,r))}const ke=String.fromCharCode(65535),oe="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",pt=[],dn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),Ra=dn,Na=dn,Pi=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function ze(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Ti={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Mt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Pt(e))[t],e)}class za{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(a,c,u){if(!u.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(u.idbtrans,u)}const l=Tt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):ve(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Zn(this.db,e,[this.name],o)}finally{l&&Ot()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(U(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=M(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(c=>c.compound&&n.every(u=>c.keyPath.indexOf(u)>=0)&&c.keyPath.every(u=>n.indexOf(u)>=0))[0];if(r&&this.db._maxKey!==ke)return this.where(r.name).equals(r.keyPath.map(c=>e[c]));!r&&ie&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(c,u){try{return i.cmp(c,u)===0}catch{return!1}}const[l,a]=n.reduce(([c,u],h)=>{const d=s[h],f=e[h];return[c||d,c||!d?ze(u,d&&d.multi?y=>{const m=he(y,h);return U(m)&&m.some(v=>o(f,v))}:y=>o(f,he(y,h))):u]},[null,null]);return l?this.where(l.name).equals(e[l.keyPath]).filter(a):r?this.filter(a):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,U(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(X(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){W(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Mt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||U(e))return this.where(":id").equals(e).modify(n);{const r=he(e,this.schema.primKey.keyPath);if(r===void 0)return B(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?M(n).forEach(s=>{te(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Mt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Ti})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=a&&l?e.map(Mt(a)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:u,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:y})=>{if(h===0)return i?d:f;throw new ft(`${this.name}.bulkAdd(): ${h} of ${c} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:l,keyPath:a}=this.schema.primKey;if(a&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=a&&l?e.map(Mt(a)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:u,wantResults:i}).then(({numFailures:h,results:d,lastResult:f,failures:y})=>{if(h===0)return i?d:f;throw new ft(`${this.name}.bulkPut(): ${h} of ${c} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new ft(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function gt(t){var e={},n=function(l,a){if(a){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return e[l].subscribe.apply(null,u),t}if(typeof l=="string")return e[l]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(l,a,c){if(typeof l=="object")return o(l);a||(a=Ea),c||(c=T);var u={subscribers:[],fire:c,subscribe:function(h){u.subscribers.indexOf(h)===-1&&(u.subscribers.push(h),u.fire=a(u.fire,h))},unsubscribe:function(h){u.subscribers=u.subscribers.filter(function(d){return d!==h}),u.fire=u.subscribers.reduce(a,c)}};return e[l]=n[l]=u,u}function o(l){M(l).forEach(function(a){var c=l[a];if(U(c))i(a,l[a][0],l[a][1]);else{if(c!=="asap")throw new C.InvalidArgument("Invalid event config");var u=i(a,$t,function(){for(var h=arguments.length,d=new Array(h);h--;)d[h]=arguments[h];u.subscribers.forEach(function(f){di(function(){f.apply(null,d)})})})}})}}function it(t,e){return Ve(e).from({prototype:t}),e}function Be(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function $n(t,e){t.filter=ze(t.filter,e)}function En(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>ze(r(),e()):e,t.justLimit=n&&!r}function Gt(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function ds(t,e,n){const r=Gt(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Bt(t,e,n,r){const s=t.replayFilter?ze(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(l,a,c)=>{if(!s||s(a,c,d=>a.stop(d),d=>a.fail(d))){var u=a.primaryKey,h=""+u;h==="[object ArrayBuffer]"&&(h=""+new Uint8Array(u)),X(i,h)||(i[h]=!0,e(l,a,c))}};return Promise.all([t.or._iterate(o,n),fs(ds(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return fs(ds(t,r,n),ze(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function fs(t,e,n,r){var s=N(r?(i,o,l)=>n(r(i),o,l):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,l=>o=l,l=>{i.stop(l),o=T},l=>{i.fail(l),o=T})||s(i.value,i,l=>o=l),o()})})}function q(t,e){try{const n=ms(t),r=ms(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let c=0;c<a;++c)if(s[c]!==i[c])return s[c]<i[c]?-1:1;return o===l?0:o<l?-1:1}(ps(t),ps(e));case"Array":return function(s,i){const o=s.length,l=i.length,a=o<l?o:l;for(let c=0;c<a;++c){const u=q(s[c],i[c]);if(u!==0)return u}return o===l?0:o<l?-1:1}(t,e)}}catch{}return NaN}function ms(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=Hn(t);return n==="ArrayBuffer"?"binary":n}function ps(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class ja{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,B.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,B.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=ze(n.algorithm,e)}_iterate(e,n){return Bt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&W(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Bt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(Be(r,!0))return s.count({trans:n,query:{index:Gt(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Bt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(c,u){return u?o(c[r[u]],u-1):c[s]}var l=this._ctx.dir==="next"?1:-1;function a(c,u){var h=o(c,i),d=o(u,i);return h<d?-l:h>d?l:0}return this.toArray(function(c){return c.sort(a)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&Be(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=Gt(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Bt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,Be(n)?En(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):En(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),En(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return $n(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return $n(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=ze(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&Be(n,!0)&&n.limit>0)return this._read(s=>{var i=Gt(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return $n(this._ctx,function(s){var i=s.primaryKey.toString(),o=X(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=M(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var g=i[p],b=e[g];he(m,g)!==b&&(te(m,g,b),v=!0)}return v}}const l=n.table.core,{outbound:a,extractKey:c}=l.schema.primaryKey,u=this.db._options.modifyChunkSize||200,h=[];let d=0;const f=[],y=(m,v)=>{const{failures:p,numFailures:g}=v;d+=m-g;for(let b of M(p))h.push(p[b])};return this.clone().primaryKeys().then(m=>{const v=p=>{const g=Math.min(u,m.length-p);return l.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(b=>{const E=[],x=[],w=a?[]:null,_=[];for(let $=0;$<g;++$){const O=b[$],z={value:Pt(O),primKey:m[p+$]};s.call(z,z.value,z)!==!1&&(z.value==null?_.push(m[p+$]):a||q(c(O),c(z.value))===0?(x.push(z.value),a&&w.push(m[p+$])):(_.push(m[p+$]),E.push(z.value)))}const k=Be(n)&&n.limit===1/0&&(typeof e!="function"||e===An)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&l.mutate({trans:r,type:"add",values:E}).then($=>{for(let O in $.failures)_.splice(parseInt(O),1);y(E.length,$)})).then(()=>(x.length>0||k&&typeof e=="object")&&l.mutate({trans:r,type:"put",keys:w,values:x,criteria:k,changeSpec:typeof e!="function"&&e}).then($=>y(x.length,$))).then(()=>(_.length>0||k&&e===An)&&l.mutate({trans:r,type:"delete",keys:_,criteria:k}).then($=>y(_.length,$))).then(()=>m.length>p+g&&v(p+u))})};return v(0).then(()=>{if(h.length>0)throw new en("Error modifying one or more objects",h,d,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return Be(e)&&(e.isPrimKey&&!Na||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:l,lastResult:a,results:c,numFailures:u})=>{if(u)throw new en("Could not delete some values",Object.keys(l).map(h=>l[h]),o-u);return o-u}))}):this.modify(An)}}const An=(t,e)=>e.value=null;function Da(t,e){return t<e?-1:t===e?0:1}function Ma(t,e){return t>e?-1:t===e?0:1}function G(t,e,n){var r=t instanceof Ri?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Le(t){return new t.Collection(t,()=>Oi("")).limit(0)}function Ba(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),l=-1,a=0;a<o;++a){var c=e[a];if(c!==r[a])return s(t[a],n[a])<0?t.substr(0,a)+n[a]+n.substr(a+1):s(t[a],r[a])<0?t.substr(0,a)+r[a]+n.substr(a+1):l>=0?t.substr(0,l)+e[l]+n.substr(l+1):null;s(t[a],c)<0&&(l=a)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):l<0?null:t.substr(0,l)+r[l]+n.substr(l+1)}function Lt(t,e,n,r){var s,i,o,l,a,c,u,h=n.length;if(!n.every(m=>typeof m=="string"))return G(t,"String expected.");function d(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?Da:Ma;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});l=v.map(function(p){return p.upper}),a=v.map(function(p){return p.lower}),c=m,u=m==="next"?"":r}d("next");var f=new t.Collection(t,()=>fe(l[0],a[h-1]+r));f._ondirectionchange=function(m){d(m)};var y=0;return f._addAlgorithm(function(m,v,p){var g=m.key;if(typeof g!="string")return!1;var b=i(g);if(e(b,a,y))return!0;for(var E=null,x=y;x<h;++x){var w=Ba(g,b,l[x],a[x],o,c);w===null&&E===null?y=x+1:(E===null||o(E,w)>0)&&(E=w)}return v(E!==null?function(){m.continue(E+u)}:p),!1}),f}function fe(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function Oi(t){return{type:1,lower:t,upper:t}}class Ri{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?Le(this):new this.Collection(this,()=>fe(e,n,!r,!s))}catch{return G(this,oe)}}equals(e){return e==null?G(this,oe):new this.Collection(this,()=>Oi(e))}above(e){return e==null?G(this,oe):new this.Collection(this,()=>fe(e,void 0,!0))}aboveOrEqual(e){return e==null?G(this,oe):new this.Collection(this,()=>fe(e,void 0,!1))}below(e){return e==null?G(this,oe):new this.Collection(this,()=>fe(void 0,e,!1,!0))}belowOrEqual(e){return e==null?G(this,oe):new this.Collection(this,()=>fe(void 0,e))}startsWith(e){return typeof e!="string"?G(this,"String expected."):this.between(e,e+ke,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Lt(this,(n,r)=>n.indexOf(r[0])===0,[e],ke)}equalsIgnoreCase(e){return Lt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=le.apply(He,arguments);return e.length===0?Le(this):Lt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=le.apply(He,arguments);return e.length===0?Le(this):Lt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,ke)}anyOf(){const e=le.apply(He,arguments);let n=this._cmp;try{e.sort(n)}catch{return G(this,oe)}if(e.length===0)return Le(this);const r=new this.Collection(this,()=>fe(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,l)=>{const a=i.key;for(;n(a,e[s])>0;)if(++s,s===e.length)return o(l),!1;return n(a,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=le.apply(He,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return G(this,oe)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,l=this._max;if(e.length===0)return Le(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return G(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const a=!n||n.includeLowers!==!1,c=n&&n.includeUppers===!0;let u,h=s;function d(g,b){return h(g[0],b[0])}try{u=e.reduce(function(g,b){let E=0,x=g.length;for(;E<x;++E){const w=g[E];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=l(w[1],b[1]);break}}return E===x&&g.push(b),g},[]),u.sort(d)}catch{return G(this,oe)}let f=0;const y=c?g=>s(g,u[f][1])>0:g=>s(g,u[f][1])>=0,m=a?g=>i(g,u[f][0])>0:g=>i(g,u[f][0])>=0;let v=y;const p=new this.Collection(this,()=>fe(u[0][0],u[u.length-1][1],!a,!c));return p._ondirectionchange=g=>{g==="next"?(v=y,h=s):(v=m,h=i),u.sort(d)},p._addAlgorithm((g,b,E)=>{for(var x=g.key;v(x);)if(++f,f===u.length)return b(E),!1;return!!function(w){return!y(w)&&!m(w)}(x)||(this._cmp(x,u[f][1])===0||this._cmp(x,u[f][0])===0||b(()=>{h===s?g.continue(u[f][0]):g.continue(u[f][1])}),!1)}),p}startsWithAnyOf(){const e=le.apply(He,arguments);return e.every(n=>typeof n=="string")?e.length===0?Le(this):this.inAnyRange(e.map(n=>[n,n+ke])):G(this,"startsWithAnyOf() only works with strings")}}function ne(t){return N(function(e){return At(e),t(e.target.error),!1})}function At(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const be=gt(null,"storagemutated");class La{_lock(){return at(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(at(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{nt(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(at(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return at(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{At(s),this._reject(e.error)}),e.onabort=N(s=>{At(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&be.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return B(new C.ReadOnly("Transaction is readonly"));if(!this.active)return B(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return ve(()=>{var i=new S((o,l)=>{this._lock();const a=n(o,l,this);a&&a.then&&a.then(o,l)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var l=n(i,o,this);l&&l.then&&l.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,l)=>{r.then(a=>n._waitingQueue.push(N(o.bind(null,a))),a=>n._waitingQueue.push(N(l.bind(null,a)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(X(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function er(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Ni(e)}}function Ni(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function zi(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:fi(n,r=>[r.name,r])}}let Ct=t=>{try{return t.only([[]]),Ct=()=>[[]],[[]]}catch{return Ct=()=>ke,ke}};function tr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>he(n,e)}(t):e=>he(e,t)}function gs(t){return[].slice.call(t)}let Ka=0;function yt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function Ia(t,e,n){function r(a){if(a.type===3)return null;if(a.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:c,upper:u,lowerOpen:h,upperOpen:d}=a;return c===void 0?u===void 0?null:e.upperBound(u,!!d):u===void 0?e.lowerBound(c,!!h):e.bound(c,u,!!h,!!d)}const{schema:s,hasGetAll:i}=function(a,c){const u=gs(a.objectStoreNames);return{schema:{name:a.name,tables:u.map(h=>c.objectStore(h)).map(h=>{const{keyPath:d,autoIncrement:f}=h,y=U(d),m=d==null,v={},p={name:h.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:d,autoIncrement:f,unique:!0,extractKey:tr(d)},indexes:gs(h.indexNames).map(g=>h.index(g)).map(g=>{const{name:b,unique:E,multiEntry:x,keyPath:w}=g,_={name:b,compound:U(w),keyPath:w,unique:E,multiEntry:x,extractKey:tr(w)};return v[yt(w)]=_,_}),getIndexByKeyPath:g=>v[yt(g)]};return v[":id"]=p.primaryKey,d!=null&&(v[yt(d)]=p.primaryKey),p})},hasGetAll:u.length>0&&"getAll"in c.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(a=>function(c){const u=c.name;return{name:u,schema:c,mutate:function({trans:h,type:d,keys:f,values:y,range:m}){return new Promise((v,p)=>{v=N(v);const g=h.objectStore(u),b=g.keyPath==null,E=d==="put"||d==="add";if(!E&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:x}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],k=[];let $=0;const O=F=>{++$,At(F)};if(d==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:k,results:[],lastResult:void 0});m.type===3?_.push(w=g.clear()):_.push(w=g.delete(r(m)))}else{const[F,K]=E?b?[y,f]:[y,null]:[f,null];if(E)for(let j=0;j<x;++j)_.push(w=K&&K[j]!==void 0?g[d](F[j],K[j]):g[d](F[j])),w.onerror=O;else for(let j=0;j<x;++j)_.push(w=g[d](F[j])),w.onerror=O}const z=F=>{const K=F.target.result;_.forEach((j,De)=>j.error!=null&&(k[De]=j.error)),v({numFailures:$,failures:k,results:d==="delete"?f:_.map(j=>j.result),lastResult:K})};w.onerror=F=>{O(F),z(F)},w.onsuccess=z})},getMany:({trans:h,keys:d})=>new Promise((f,y)=>{f=N(f);const m=h.objectStore(u),v=d.length,p=new Array(v);let g,b=0,E=0;const x=_=>{const k=_.target;p[k._pos]=k.result,++E===b&&f(p)},w=ne(y);for(let _=0;_<v;++_)d[_]!=null&&(g=m.get(d[_]),g._pos=_,g.onsuccess=x,g.onerror=w,++b);b===0&&f(p)}),get:({trans:h,key:d})=>new Promise((f,y)=>{f=N(f);const m=h.objectStore(u).get(d);m.onsuccess=v=>f(v.target.result),m.onerror=ne(y)}),query:function(h){return d=>new Promise((f,y)=>{f=N(f);const{trans:m,values:v,limit:p,query:g}=d,b=p===1/0?void 0:p,{index:E,range:x}=g,w=m.objectStore(u),_=E.isPrimaryKey?w:w.index(E.name),k=r(x);if(p===0)return f({result:[]});if(h){const $=v?_.getAll(k,b):_.getAllKeys(k,b);$.onsuccess=O=>f({result:O.target.result}),$.onerror=ne(y)}else{let $=0;const O=v||!("openKeyCursor"in _)?_.openCursor(k):_.openKeyCursor(k),z=[];O.onsuccess=F=>{const K=O.result;return K?(z.push(v?K.value:K.primaryKey),++$===p?f({result:z}):void K.continue()):f({result:z})},O.onerror=ne(y)}})}(i),openCursor:function({trans:h,values:d,query:f,reverse:y,unique:m}){return new Promise((v,p)=>{v=N(v);const{index:g,range:b}=f,E=h.objectStore(u),x=g.isPrimaryKey?E:E.index(g.name),w=y?m?"prevunique":"prev":m?"nextunique":"next",_=d||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=ne(p),_.onsuccess=N(k=>{const $=_.result;if(!$)return void v(null);$.___id=++Ka,$.done=!1;const O=$.continue.bind($);let z=$.continuePrimaryKey;z&&(z=z.bind($));const F=$.advance.bind($),K=()=>{throw new Error("Cursor not stopped")};$.trans=h,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=N(p),$.next=function(){let j=1;return this.start(()=>j--?this.continue():this.stop()).then(()=>this)},$.start=j=>{const De=new Promise((V,_e)=>{V=N(V),_.onerror=ne(_e),$.fail=_e,$.stop=rt=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=K,V(rt)}}),Me=()=>{if(_.result)try{j()}catch(V){$.fail(V)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=N(V=>{_.onsuccess=Me,Me()}),$.continue=O,$.continuePrimaryKey=z,$.advance=F,Me(),De},v($)},p)})},count({query:h,trans:d}){const{index:f,range:y}=h;return new Promise((m,v)=>{const p=d.objectStore(u),g=f.isPrimaryKey?p:p.index(f.name),b=r(y),E=b?g.count(b):g.count();E.onsuccess=N(x=>m(x.target.result)),E.onerror=ne(v)})}}}(a)),l={};return o.forEach(a=>l[a.name]=a),{stack:"dbcore",transaction:t.transaction.bind(t),table(a){if(!l[a])throw new Error(`Table '${a}' not found`);return l[a]},MIN_KEY:-1/0,MAX_KEY:Ct(e),schema:s}}function nr({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:l},a){return{dbcore:function(u,h){return h.reduce((d,{create:f})=>({...d,...f(d)}),u)}(Ia(i,o,a),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function on({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const l=xr(o,s);(!l||"value"in l&&l.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ue(o,s,{get(){return this.table(s)},set(a){ui(this,s,{value:a,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function rr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function Ha(t,e){return t._cfg.version-e._cfg.version}function Ua(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),l=A.transless||A;ve(()=>{A.trans=i,A.transless=l,e===0?(M(s).forEach(a=>{Cn(n,a,s[a].primKey,s[a].indexes)}),nr(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:a},c,u,h){const d=[],f=a._versions;let y=a._dbSchema=ir(a,a.idbdb,h),m=!1;function v(){return d.length?S.resolve(d.shift()(u.idbtrans)).then(v):S.resolve()}return f.filter(p=>p._cfg.version>=c).forEach(p=>{d.push(()=>{const g=y,b=p._cfg.dbschema;or(a,g,h),or(a,b,h),y=a._dbSchema=b;const E=ji(g,b);E.add.forEach(w=>{Cn(h,w[0],w[1].primKey,w[1].indexes)}),E.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=h.objectStore(w.name);w.add.forEach(k=>sr(_,k)),w.change.forEach(k=>{_.deleteIndex(k.name),sr(_,k)}),w.del.forEach(k=>_.deleteIndex(k))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>c){nr(a,h),u._memoizedTables={},m=!0;let w=mi(b);E.del.forEach(O=>{w[O]=g[O]}),rr(a,[a.Transaction.prototype]),on(a,[a.Transaction.prototype],M(w),w),u.schema=w;const _=Sr(x);let k;_&&tt();const $=S.follow(()=>{if(k=x(u),k&&_){var O=de.bind(null,null);k.then(O,O)}});return k&&typeof k.then=="function"?S.resolve(k):$.then(()=>k)}}),d.push(g=>{(!m||!Ra)&&function(b,E){[].slice.call(E.db.objectStoreNames).forEach(x=>b[x]==null&&E.db.deleteObjectStore(x))}(p._cfg.dbschema,g),rr(a,[a.Transaction.prototype]),on(a,[a.Transaction.prototype],a._storeNames,a._dbSchema),u.schema=a._dbSchema})}),v().then(()=>{var p,g;g=h,M(p=y).forEach(b=>{g.db.objectStoreNames.contains(b)||Cn(g,b,p[b].primKey,p[b].indexes)})})}(t,e,i,n).catch(o)})}function ji(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!dn)o.recreate=!0,n.change.push(o);else{const l=s.idxByName,a=i.idxByName;let c;for(c in l)a[c]||o.del.push(c);for(c in a){const u=l[c],h=a[c];u?u.src!==h.src&&o.change.push(h):o.add.push(h)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function Cn(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>sr(s,i)),s}function sr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function ir(t,e,n){const r={};return Zt(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const l=er(Ni(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),a=[];for(let u=0;u<i.indexNames.length;++u){const h=i.index(i.indexNames[u]);o=h.keyPath;var c=er(h.name,o,!!h.unique,!!h.multiEntry,!1,o&&typeof o!="string",!1);a.push(c)}r[s]=zi(s,l,a)}),r}function or({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let l=0;l<o.indexNames.length;++l){const a=o.indexNames[l],c=o.index(a).keyPath,u=typeof c=="string"?c:"["+Zt(c).join("+")+"]";if(e[i]){const h=e[i].idxByName[u];h&&(h.name=a,delete e[i].idxByName[u],e[i].idxByName[a]=h)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&R.WorkerGlobalScope&&R instanceof R.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class Fa{_parseStoresSpec(e,n){M(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,l)=>{const a=(o=o.trim()).replace(/([&*]|\+\+)/g,""),c=/^\[/.test(a)?a.match(/^\[(.*)\]$/)[1].split("+"):a;return er(a,c||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),U(c),l===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=zi(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?W(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{W(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,rr(n,[n._allTables,n,n.Transaction.prototype]),on(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],M(i),i),n._storeNames=M(i),this}upgrade(e){return this._cfg.contentUpgrade=Ar(this._cfg.contentUpgrade||T,e),this}}function Tr(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Oe("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function Or(t){return t&&typeof t.databases=="function"}function ar(t){return ve(function(){return A.letThrough=!0,t()})}function qa(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function Wa(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?B(e.dbOpenError):t);ie&&(e.openCanceller._stackHolder=je()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,l=!1;return S.race([r,(typeof navigator>"u"?S.resolve():qa()).then(()=>new S((a,c)=>{if(s(),!n)throw new C.MissingAPI;const u=t.name,h=e.autoSchema?n.open(u):n.open(u,Math.round(10*t.verno));if(!h)throw new C.MissingAPI;h.onerror=ne(c),h.onblocked=N(t._fireOnBlocked),h.onupgradeneeded=N(d=>{if(o=h.transaction,e.autoSchema&&!t._options.allowEmptyDB){h.onerror=At,o.abort(),h.result.close();const y=n.deleteDatabase(u);y.onsuccess=y.onerror=N(()=>{c(new C.NoSuchDatabase(`Database ${u} doesnt exist`))})}else{o.onerror=ne(c);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;l=f<1,t._novip.idbdb=h.result,Ua(t,f/10,o,c)}},c),h.onsuccess=N(()=>{o=null;const d=t._novip.idbdb=h.result,f=Zt(d.objectStoreNames);if(f.length>0)try{const m=d.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},p,g){v.verno=p.version/10;const b=v._dbSchema=ir(0,p,g);v._storeNames=Zt(p.objectStoreNames,0),on(v,[v._allTables],M(b),b)}(t,d,m):(or(t,t._dbSchema,m),function(v,p){const g=ji(ir(0,v.idbdb,p),v._dbSchema);return!(g.add.length||g.change.some(b=>b.add.length||b.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),nr(t,m)}catch{}var y;pt.push(t),d.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),d.onclose=N(m=>{t.on("close").fire(m)}),l&&function({indexedDB:m,IDBKeyRange:v},p){!Or(m)&&p!=="__dbnames"&&Tr(m,v).put({name:p}).catch(T)}(t._deps,u),a()},c)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(ar(()=>t.on.ready.fire(t.vip))).then(function a(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(Ar,T);return e.onReadyBeingFired=[],S.resolve(ar(()=>c(t.vip))).then(a)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(a=>{e.dbOpenError=a;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),B(a)}).finally(()=>{e.openComplete=!0,i()})}function lr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var l=i(o),a=l.value;return l.done?a:a&&typeof a.then=="function"?a.then(n,r):U(a)?Promise.all(a).then(n,r):n(a)}}return s(e)()}function Va(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=pi(s);return[t,i,n]}function Di(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),l={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(h){return h.name===Er.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Di(t,e,n,null,s))):B(h)}const a=Sr(s);let c;a&&tt();const u=S.follow(()=>{if(c=s.call(o,o),c)if(a){var h=de.bind(null,null);c.then(h,h)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=lr(c))},l);return(c&&typeof c.then=="function"?S.resolve(c).then(h=>o.active?h:B(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):u.then(()=>c)).then(h=>(r&&o._resolve(),o._completion.then(()=>h))).catch(h=>(o._reject(h),B(h)))})}function Kt(t,e,n){const r=U(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Ja={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(u,h,d){const f=yt(u),y=s[f]=s[f]||[],m=u==null?0:typeof u=="string"?1:u.length,v=h>0,p={...d,isVirtual:v,keyTail:h,keyLength:m,extractKey:tr(u),unique:!v&&d.unique};return y.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?u[0]:u.slice(0,m-1),h+1,d),y.sort((g,b)=>g.keyTail-b.keyTail),p}const l=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[l];for(const u of r.indexes)o(u.keyPath,0,u);function a(u){const h=u.query.index;return h.isVirtual?{...u,query:{index:h,range:(d=u.query.range,f=h.keyTail,{type:d.type===1?2:d.type,lower:Kt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Kt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:u;var d,f}return{...n,schema:{...r,primaryKey:l,indexes:i,getIndexByKeyPath:function(u){const h=s[yt(u)];return h&&h[0]}},count:u=>n.count(a(u)),query:u=>n.query(a(u)),openCursor(u){const{keyTail:h,isVirtual:d,keyLength:f}=u.query.index;return d?n.openCursor(a(u)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(Kt(p,u.reverse?t.MAX_KEY:t.MIN_KEY,h)):u.unique?m.continue(m.key.slice(0,f).concat(u.reverse?t.MIN_KEY:t.MAX_KEY,h)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(Kt(p,t.MAX_KEY,h),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(u)}}}}}};function Rr(t,e,n,r){return n=n||{},r=r||"",M(t).forEach(s=>{if(X(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const l=Hn(i);l!==Hn(o)?n[r+s]=e[s]:l==="Object"?Rr(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),M(e).forEach(s=>{X(t,s)||(n[r+s]=e[s])}),n}const Ga={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:l,creating:a,updating:c}=o.table(e).hook;switch(i.type){case"add":if(a.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"put":if(a.fire===T&&c.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"delete":if(l.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"deleteRange":if(l.fire===T)break;return o._promise("readwrite",()=>function(d){return h(d.trans,d.range,1e4)}(i),!0)}return n.mutate(i);function u(d){const f=A.trans,y=d.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,d);if(!y)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:y}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,d,y).then(m=>{const v=y.map((p,g)=>{const b=m[g],E={onerror:null,onsuccess:null};if(d.type==="delete")l.fire.call(E,p,b,f);else if(d.type==="add"||b===void 0){const x=a.fire.call(E,p,d.values[g],f);p==null&&x!=null&&(p=x,d.keys[g]=p,r.outbound||te(d.values[g],r.keyPath,p))}else{const x=Rr(b,d.values[g]),w=c.fire.call(E,x,p,b,f);if(w){const _=d.values[g];Object.keys(w).forEach(k=>{X(_,k)?_[k]=w[k]:te(_,k,w[k])})}}return E});return n.mutate(d).then(({failures:p,results:g,numFailures:b,lastResult:E})=>{for(let x=0;x<y.length;++x){const w=g?g[x]:y[x],_=v[x];w==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(d.type==="put"&&m[x]?d.values[x]:w)}return{failures:p,results:g,numFailures:b,lastResult:E}}).catch(p=>(v.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function h(d,f,y){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>u({type:"delete",keys:m,trans:d}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:h(d,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function Mi(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)q(e.keys[s],t[i])===0&&(r.push(n?Pt(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Ya={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Mi(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Pt(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Nr(t){return!("from"in t)}const ae=function(t,e){if(!this){const n=new ae;return t&&"d"in t&&W(n,t),n}W(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function kt(t,e,n){const r=q(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Nr(t))return W(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(q(n,t.from)<0)return s?kt(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},ys(t);if(q(e,t.to)>0)return i?kt(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},ys(t);q(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),q(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&an(t,s),i&&o&&an(t,i)}function an(t,e){Nr(e)||function n(r,{from:s,to:i,l:o,r:l}){kt(r,s,i),o&&n(r,o),l&&n(r,l)}(t,e)}function Xa(t,e){const n=cr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=cr(t);let o=i.next(s.from),l=o.value;for(;!r.done&&!o.done;){if(q(l.from,s.to)<=0&&q(l.to,s.from)>=0)return!0;q(s.from,l.from)<0?s=(r=n.next(l.from)).value:l=(o=i.next(s.from)).value}return!1}function cr(t){let e=Nr(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&q(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||q(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function ys(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},l=t[s];t.from=l.from,t.to=l.to,t[s]=l[s],o[s]=l[i],t[i]=o,o.d=vs(o)}t.d=vs(t)}function vs({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}et(ae.prototype,{add(t){return an(this,t),this},addKey(t){return kt(this,t,t),this},addKeys(t){return t.forEach(e=>kt(this,e,e)),this},[Un](){return cr(this)}});const Qa={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new ae(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:l,outbound:a}=o,c={...s,mutate:d=>{const f=d.trans,y=f.mutatedParts||(f.mutatedParts={}),m=w=>{const _=`idb://${e}/${r}/${w}`;return y[_]||(y[_]=new ae)},v=m(""),p=m(":dels"),{type:g}=d;let[b,E]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const x=d.trans._cache;return s.mutate(d).then(w=>{if(U(b)){g!=="delete"&&(b=w.results),v.addKeys(b);const _=Mi(b,x);_||g==="add"||p.addKeys(b),(_||E)&&function(k,$,O,z){function F(K){const j=k(K.name||"");function De(V){return V!=null?K.extractKey(V):null}const Me=V=>K.multiEntry&&U(V)?V.forEach(_e=>j.addKey(_e)):j.addKey(V);(O||z).forEach((V,_e)=>{const rt=O&&De(O[_e]),mn=z&&De(z[_e]);q(rt,mn)!==0&&(rt!=null&&Me(rt),mn!=null&&Me(mn))})}$.indexes.forEach(F)}(m,i,_,E)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return w})}},u=({query:{index:d,range:f}})=>{var y,m;return[d,new ae((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},h={get:d=>[o,new ae(d.key)],getMany:d=>[o,new ae().addKeys(d.keys)],count:u,query:u,openCursor:u};return M(h).forEach(d=>{c[d]=function(f){const{subscr:y}=A;if(y){const m=E=>{const x=`idb://${e}/${r}/${E}`;return y[x]||(y[x]=new ae)},v=m(""),p=m(":dels"),[g,b]=h[d](f);if(m(g.name||"").add(b),!g.isPrimaryKey){if(d!=="count"){const E=d==="query"&&a&&f.values&&s.query({...f,values:!1});return s[d].apply(this,arguments).then(x=>{if(d==="query"){if(a&&f.values)return E.then(({result:_})=>(v.addKeys(_),x));const w=f.values?x.result.map(l):x.result;f.values?v.addKeys(w):p.addKeys(w)}else if(d==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const k=w.primaryKey;return p.addKey(k),k}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return x})}p.add(n)}}return s[d].apply(this,arguments)}}),c}}}};class Oe{constructor(e,n){this._middlewares={},this.verno=0;const r=Oe.dependencies;this._options=n={addons:Oe.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(l=>{i.dbReadyResolve=l}),i.openCanceller=new S((l,a)=>{i.cancelOpen=a}),this._state=i,this.name=e,this.on=gt(this,"populate","blocked","versionchange","close",{ready:[Ar,T]}),this.on.ready.subscribe=hi(this.on.ready.subscribe,l=>(a,c)=>{Oe.vip(()=>{const u=this._state;if(u.openComplete)u.dbOpenError||S.resolve().then(a),c&&l(a);else if(u.onReadyBeingFired)u.onReadyBeingFired.push(a),c&&l(a);else{l(a);const h=this;c||l(function d(){h.on.ready.unsubscribe(a),h.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,it(ja.prototype,function(l,a){this.db=o;let c=Ti,u=null;if(a)try{c=a()}catch(y){u=y}const h=l._ctx,d=h.table,f=d.hook.reading.fire;this._ctx={table:d,index:h.index,isPrimKey:!h.index||d.schema.primKey.keyPath&&h.index===d.schema.primKey.name,range:c,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:u,or:h.or,valueMapper:f!==$t?f:null}})),this.Table=function(l){return it(za.prototype,function(a,c,u){this.db=l,this._tx=u,this.name=a,this.schema=c,this.hook=l._allTables[a]?l._allTables[a].hook:gt(null,{creating:[xa,T],reading:[_a,$t],updating:[$a,T],deleting:[Sa,T]})})}(this),this.Transaction=function(l){return it(La.prototype,function(a,c,u,h,d){this.db=l,this.mode=a,this.storeNames=c,this.schema=u,this.chromeTransactionDurability=h,this.idbtrans=null,this.on=gt(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),B(f)})})}(this),this.Version=function(l){return it(Fa.prototype,function(a){this.db=l,this._cfg={version:a,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(l){return it(Ri.prototype,function(a,c,u){this.db=l,this._ctx={table:a,index:c===":id"?null:c,or:u};const h=l._deps.indexedDB;if(!h)throw new C.MissingAPI;this._cmp=this._ascending=h.cmp.bind(h),this._descending=(d,f)=>h.cmp(f,d),this._max=(d,f)=>h.cmp(d,f)>0?d:f,this._min=(d,f)=>h.cmp(d,f)<0?d:f,this._IDBKeyRange=l._deps.IDBKeyRange})}(this),this.on("versionchange",l=>{l.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",l=>{!l.newVersion||l.newVersion<l.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${l.oldVersion/10}`)}),this._maxKey=Ct(n.IDBKeyRange),this._createTransaction=(l,a,c,u)=>new this.Transaction(l,a,c,this._options.chromeTransactionDurability,u),this._fireOnBlocked=l=>{this.on("blocked").fire(l),pt.filter(a=>a.name===this.name&&a!==this&&!a._state.vcFired).map(a=>a.on("versionchange").fire(l))},this.use(Ja),this.use(Ga),this.use(Qa),this.use(Ya),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(l=>l(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(Ha),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,l)=>o.level-l.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return Wa(this)}_close(){const e=this._state,n=pt.indexOf(this);if(n>=0&&pt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:l,IDBKeyRange:a},c){!Or(l)&&c!=="__dbnames"&&Tr(l,a).delete(c).catch(T)})(this._deps,this.name),r()}),o.onerror=ne(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return M(this._allTables).map(e=>this._allTables[e])}transaction(){const e=Va.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,l;e=e.replace("!","").replace("?","");try{if(l=n.map(c=>{var u=c instanceof this.Table?c.name:c;if(typeof u!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return u}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&l.forEach(c=>{if(s&&s.storeNames.indexOf(c)===-1){if(!i)throw new C.SubTransaction("Table "+c+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(c){return s?s._promise(null,(u,h)=>{h(c)}):B(c)}const a=Di.bind(null,this,o,l,s,r);return s?s._promise(o,a,"lock"):A.trans?nt(A.transless,()=>this._whenReady(a)):this._whenReady(a)}table(e){if(!X(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Za=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class el{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Za](){return this}}function Bi(t,e){return M(e).forEach(n=>{an(t[n]||(t[n]=new ae),e[n])}),t}function tl(t){return new el(e=>{const n=Sr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,be.storagemutated.unsubscribe(u)}};e.start&&e.start(o);let l=!1,a=!1;function c(){return M(i).some(d=>s[d]&&Xa(s[d],i[d]))}const u=d=>{Bi(s,d),c()&&h()},h=()=>{if(l||r)return;s={};const d={},f=function(y){n&&tt();const m=()=>ve(t,{subscr:y,trans:null}),v=A.trans?nt(A.transless,m):m();return n&&v.then(de,de),v}(d);a||(be("storagemutated",u),a=!0),l=!0,Promise.resolve(f).then(y=>{l=!1,r||(c()?h():(s={},i=d,e.next&&e.next(y)))},y=>{l=!1,e.error&&e.error(y),o.unsubscribe()})};return h(),o})}let ur;try{ur={indexedDB:R.indexedDB||R.mozIndexedDB||R.webkitIndexedDB||R.msIndexedDB,IDBKeyRange:R.IDBKeyRange||R.webkitIDBKeyRange}}catch{ur={indexedDB:null,IDBKeyRange:null}}const Se=Oe;function Yt(t){let e=ce;try{ce=!0,be.storagemutated.fire(t)}finally{ce=e}}et(Se,{...Ft,delete:t=>new Se(t,{addons:[]}).delete(),exists:t=>new Se(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return Or(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):Tr(e,n).toCollection().primaryKeys()}(Se.dependencies).then(t)}catch{return B(new C.MissingAPI)}},defineClass:()=>function(t){W(this,t)},ignoreTransaction:t=>A.trans?nt(A.transless,t):t(),vip:ar,async:function(t){return function(){try{var e=lr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return B(n)}}},spawn:function(t,e,n){try{var r=lr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return B(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?Se.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>ie,set:t=>{yi(t,t==="dexie"?()=>!0:Pi)}},derive:Ve,extend:W,props:et,override:hi,Events:gt,on:be,liveQuery:tl,extendObservabilitySet:Bi,getByKeyPath:he,setByKeyPath:te,delByKeyPath:function(t,e){typeof e=="string"?te(t,e,void 0):"length"in e&&[].map.call(e,function(n){te(t,n,void 0)})},shallowClone:mi,deepClone:Pt,getObjectDiff:Rr,cmp:q,asap:di,minKey:-(1/0),addons:[],connections:pt,errnames:Er,dependencies:ur,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Se.maxKey=Ct(Se.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(be("storagemutated",t=>{if(!ce){let e;dn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),ce=!0,dispatchEvent(e),ce=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{ce||Yt(t)}));let ce=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),be("storagemutated",e=>{ce||t.postMessage(e)}),t.onmessage=e=>{e.data&&Yt(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){be("storagemutated",e=>{try{ce||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Yt(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Yt(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof Je||t instanceof TypeError||t instanceof SyntaxError||!t.name||!cs[t.name])return t;var n=new cs[t.name](e||t.message,t);return"stack"in t&&ue(n,"stack",{get:function(){return this.inner.stack}}),n},yi(ie,Pi);class Rt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class ws extends Rt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const fn="locationchange";let bs=!1;const nl=window.history.pushState;function _s(...t){const e=nl.apply(window.history,t);return window.dispatchEvent(new Event(fn)),e}const rl=window.history.replaceState;function xs(...t){const e=rl.apply(window.history,t);return window.dispatchEvent(new Event(fn)),e}function sl(){if(!bs){if(window.history.pushState===_s)throw new ws("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===xs)throw new ws("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");bs=!0,window.history.pushState=_s,window.history.replaceState=xs,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(fn))})}}function il(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function ol(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function al(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?il(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class ll extends Rt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Li(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const Ss=6;function $s(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>Ss)throw new ll(`Route sanitization depth has exceed the max of ${Ss} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Li(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class kn extends Rt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function cl(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new kn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new kn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new kn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function ul(t,e,n,r=!1){const s=Ki(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Ki(t,e,n=""){var r;if(!n&&e!=null)throw new Rt("Route base regexp was defined but routeBase string was not provided.");const s=hl(e)?`/${n}`:"",i=t.search?ol(t.search).toString():"",o=i?`?${i}`:"",l=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",a=t.hash?`${l}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${a}`}function hl(t){return!!(t&&window.location.pathname.match(t))}function dl(t={}){var e;cl(t),sl();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const l={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(o,l=!1,a=!1)=>{const c=i.getCurrentRawRoutes(),u={...c,...o},h=i.sanitizeFullRoute(u);if(!(!a&&Li(c,h)))return ul(h,r,n,l)},createRoutesUrl:o=>Ki(o,r,n),getCurrentRawRoutes:()=>al(r),addRouteListener:(o,l)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Rt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(l),s||(window.addEventListener(fn,()=>$s(i)),s=!0),o&&$s(i,l),l},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Ii=dl({routeBase:"resizable-image-element"}),fl=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],ml="resizable-image-element-storage";class pl extends Oe{constructor(){super(ml),this.version(1).stores({storedUrls:"&index"})}}const Pn=new pl,Es={async set(t){const e=ln(t).map((n,r)=>({index:r,url:n}));await Pn.storedUrls.clear(),await Pn.storedUrls.bulkPut(e)},async get(){const e=(await Pn.storedUrls.toArray()).map(r=>r.url),n=ln(e);return gl(n.length?n:fl)}};function gl(t){var e,n;try{const r=ln(((n=(e=Ii.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function ln(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(Cs)}const{defineElement:yl,defineElementNoInputs:vl}=Io(),It=yl()({tagName:"vir-url-input",events:{urlsChange:Ut()},styles:Fe`
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
                ${ht("input",l=>{const c=l.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));e(new n.urlsChange(c))})}
                ${ht("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),ot={max:{width:300,height:600},min:{width:300,height:150}};vl({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:qs(Es.get()),constraints:void 0,router:Ii,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Fe`
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||ot.min.width,height:Number(o==null?void 0:o.minH)||ot.min.height},max:{width:Number(o==null?void 0:o.maxW)||ot.max.width,height:Number(o==null?void 0:o.maxH)||ot.max.height}}})}const n=t.constraints??ot,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,l,a){e({constraints:{...n,[l]:{...n[l],[a]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!qi(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:un(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(l){console.warn(l)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),H`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${It}
                ${br(It,{urls:r})}
                ${ht(It.events.urlsChange,o=>{const l=o.detail;Es.set(l),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${It}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${ht("input",o=>{const l=o.currentTarget;e({showConstraints:!!l.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const l=["height","width"].map(a=>{const c=[zr(o),zr(a)].join(" "),u=n[o][a];return H`
                            <label>
                                ${c}
                                <br />
                                ${ee(u)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${u}
                                    ${ht("input",h=>{i(h.currentTarget,o,a)})}
                                />
                            </label>
                        `});return H`
                        <div class="constraint-controls">${l}</div>
                    `})}
            </p>
            <div class="images-container">${wl(n,t.imageUrls)}</div>
        `}});function wl(t,e){return Ln(e,"Loading...",n=>ln(n).map(r=>{const s=`
                height: ${ee(t.max.height)};
                max-height: ${ee(t.max.height)};
                width: ${ee(t.max.width)};
                max-width: ${ee(t.max.width)}`,i=`height: ${ee(t.min.height)}; width: ${ee(t.min.width)}`;return H`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${dt}
                            ${br(dt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${dt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
