(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function vs(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ci={capitalizeFirstLetter:!1};function Tn(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function ki(t,e){return e.capitalizeFirstLetter?Tn(t):t}function Pi(t,e=Ci){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return ki(r,e)}function kr(t){return t!==t.toUpperCase()}function Ti(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=kr(o)||kr(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Oi({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const Ri=["january","february","march","april","may","june","july","august","september","october","november","december"];Ri.map(t=>t.slice(0,3));function cn(t){return t?t instanceof Error?t.message:String(t):""}function Gt(t){return t instanceof Error?t:new Error(cn(t))}function Ni(t){return!!t}const Di=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ws(t,e){return t?Di.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Mi(t,e){return t&&e.every(n=>ws(t,n))}function Te(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Pr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Tr(t){return!!t&&typeof t=="object"}function bs(t,e){try{if(t===e)return!0;if(Tr(t)&&Tr(e)){const n=Pr(t),r=Pr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${cn(n)}`),n}}function _s(t,e){return Te(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function pe(t,e){let n=!1;const r=Te(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Te(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function un(t){const e=Oe();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ji(t){return!!(ws(t,"then")&&typeof t.then=="function")}function Oe(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Oe.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function Q(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=window,cr=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ur=Symbol(),Or=new WeakMap;let xs=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ur)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(cr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Or.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Or.set(n,e))}return e}toString(){return this.cssText}};const Re=t=>new xs(typeof t=="string"?t:t+"",void 0,ur),Ss=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new xs(n,t,ur)},zi=(t,e)=>{cr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=It.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},Rr=cr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Re(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn;const Yt=window,Nr=Yt.trustedTypes,Bi=Nr?Nr.emptyScript:"",Dr=Yt.reactiveElementPolyfillSupport,On={toAttribute(t,e){switch(e){case Boolean:t=t?Bi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},$s=(t,e)=>e!==t&&(e==e||t==t),yn={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:$s};let Ie=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=yn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||yn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(Rr(s))}else e!==void 0&&n.push(Rr(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return zi(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=yn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:On).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:On;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||$s)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ie.finalized=!0,Ie.elementProperties=new Map,Ie.elementStyles=[],Ie.shadowRootOptions={mode:"open"},Dr==null||Dr({ReactiveElement:Ie}),((gn=Yt.reactiveElementVersions)!==null&&gn!==void 0?gn:Yt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn;const Jt=window,Ye=Jt.trustedTypes,Mr=Ye?Ye.createPolicy("lit-html",{createHTML:t=>t}):void 0,de=`lit$${(Math.random()+"").slice(9)}$`,Es="?"+de,Ki=`<${Es}>`,Je=document,yt=(t="")=>Je.createComment(t),vt=t=>t===null||typeof t!="object"&&typeof t!="function",As=Array.isArray,Ii=t=>As(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jr=/-->/g,zr=/>/g,_e=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Br=/'/g,Kr=/"/g,Cs=/^(?:script|style|textarea|title)$/i,Li=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Hi=Li(1),ge=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Ir=new WeakMap,Fe=Je.createTreeWalker(Je,129,null,!1),Ui=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=nt;for(let l=0;l<n;l++){const h=t[l];let d,u,c=-1,f=0;for(;f<h.length&&(o.lastIndex=f,u=o.exec(h),u!==null);)f=o.lastIndex,o===nt?u[1]==="!--"?o=jr:u[1]!==void 0?o=zr:u[2]!==void 0?(Cs.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=_e):u[3]!==void 0&&(o=_e):o===_e?u[0]===">"?(o=s??nt,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?_e:u[3]==='"'?Kr:Br):o===Kr||o===Br?o=_e:o===jr||o===zr?o=nt:(o=_e,s=void 0);const y=o===_e&&t[l+1].startsWith("/>")?" ":"";i+=o===nt?h+Ki:c>=0?(r.push(d),h.slice(0,c)+"$lit$"+h.slice(c)+de+y):h+de+(c===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Mr!==void 0?Mr.createHTML(a):a,r]};let Xt=class{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Ui(e,n);if(this.el=Xt.createElement(h,r),Fe.currentNode=this.el.content,n===2){const u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(s=Fe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(de)){const f=d[o++];if(u.push(c),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(de),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?qi:m[1]==="?"?Wi:m[1]==="@"?Gi:dn})}else l.push({type:6,index:i})}for(const c of u)s.removeAttribute(c)}if(Cs.test(s.tagName)){const u=s.textContent.split(de),c=u.length-1;if(c>0){s.textContent=Ye?Ye.emptyScript:"";for(let f=0;f<c;f++)s.append(u[f],yt()),Fe.nextNode(),l.push({type:2,index:++i});s.append(u[c],yt())}}}else if(s.nodeType===8)if(s.data===Es)l.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(de,u+1))!==-1;)l.push({type:7,index:i}),u+=de.length-1}i++}}static createElement(e,n){const r=Je.createElement("template");return r.innerHTML=e,r}};function Xe(t,e,n=t,r){var s,i,o,a;if(e===ge)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const h=vt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),h===void 0?l=void 0:(l=new h(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=Xe(t,l._$AS(t,e.values),l,r)),e}let Fi=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Je).importNode(r,!0);Fe.currentNode=i;let o=Fe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new hn(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Yi(o,this,e)),this.u.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Fe.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},hn=class{constructor(e,n,r,s){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Xe(this,e,n),vt(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==ge&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ii(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Je.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Xt.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new Fi(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=Ir.get(e.strings);return n===void 0&&Ir.set(e.strings,n=new Xt(e)),n}k(e){As(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new hn(this.O(yt()),this.O(yt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},dn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Xe(this,e,n,0),o=!vt(e)||e!==this._$AH&&e!==ge,o&&(this._$AH=e);else{const a=e;let l,h;for(e=i[0],l=0;l<i.length-1;l++)h=Xe(this,a[r+l],n,l),h===ge&&(h=this._$AH[l]),o||(o=!vt(h)||h!==this._$AH[l]),h===B?e=B:e!==B&&(e+=(h??"")+i[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},qi=class extends dn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Vi=Ye?Ye.emptyScript:"";let Wi=class extends dn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Vi):this.element.removeAttribute(this.name)}},Gi=class extends dn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=Xe(this,e,n,0))!==null&&r!==void 0?r:B)===ge)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Yi=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}};const Lr=Jt.litHtmlPolyfillSupport;Lr==null||Lr(Xt,hn),((vn=Jt.litHtmlVersions)!==null&&vn!==void 0?vn:Jt.litHtmlVersions=[]).push("2.6.1");const Ji=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new hn(e.insertBefore(yt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wn,bn;let at=class extends Ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ji(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ge}};at.finalized=!0,at._$litElement$=!0,(wn=globalThis.litElementHydrateSupport)===null||wn===void 0||wn.call(globalThis,{LitElement:at});const Hr=globalThis.litElementPolyfillSupport;Hr==null||Hr({LitElement:at});((bn=globalThis.litElementVersions)!==null&&bn!==void 0?bn:globalThis.litElementVersions=[]).push("3.2.2");var Xi=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function Qi(){return t=>{}}let wt=class extends at{};wt=Xi([Qi()],wt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Ur(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):Zi(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _n;((_n=window.HTMLSlotElement)===null||_n===void 0?void 0:_n.prototype.assignedElements)!=null;const Rn=Symbol("this-is-an-element-vir-declarative-element"),hr=Symbol("key for ignoring inputs not having been set yet"),eo={[hr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dr=t=>(...e)=>({_$litDirective$:t,values:e});let fr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function no(t,e){return ks(t,e,wt)}function ks(t,e,n){Nn(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function Nn(t,e){if(t.type!==to.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function mr(t,e){return ro(t,e)}const ro=dr(class extends fr{constructor(t){super(t),this.element=no(t,"assign")}render(t,e){return so(t,this.element,e),ge}});function so(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Ps(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof wt?!0:Ps(n)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},G=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},te,Se,$e,Ee,Ue,Le,V,lt,Dn,Mn;function io(t){if(!t)return{};const e=_s(t,(r,s)=>s instanceof Ts);return pe(e,(r,s)=>new oo(s.initialValue))}const Ot=Symbol("not set");class oo{constructor(e){te.add(this),Se.set(this,Ot),$e.set(this,void 0),Ee.set(this,void 0),Ue.set(this,[]),Le.set(this,void 0),V.set(this,Oe()),e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(P(this,Se,"f")===Ot||!bs(e.trigger,P(this,Se,"f"))){G(this,Se,e.trigger,"f");const n=e.createPromise();P(this,te,"m",Dn).call(this,n)}}else"newPromise"in e?(P(this,Se,"f"),P(this,te,"m",Dn).call(this,e.newPromise),P(this,te,"m",lt).call(this)):"resolvedValue"in e?P(this,te,"m",Mn).call(this,e.resolvedValue):e.forceUpdate&&(G(this,Se,Ot,"f"),G(this,$e,void 0,"f"),P(this,V,"f").isSettled()||P(this,V,"f").reject("Canceled by force update"),G(this,V,Oe(),"f"),P(this,te,"m",lt).call(this))}getValue(){return P(this,V,"f").isSettled()?P(this,Ee,"f")?P(this,Ee,"f"):P(this,$e,"f"):P(this,V,"f").promise}addSettleListener(e){P(this,Ue,"f").push(e)}removeSettleListener(e){G(this,Ue,P(this,Ue,"f").filter(n=>n!==e),"f")}}Se=new WeakMap,$e=new WeakMap,Ee=new WeakMap,Ue=new WeakMap,Le=new WeakMap,V=new WeakMap,te=new WeakSet,lt=function(){P(this,Ue,"f").forEach(e=>{e()})},Dn=function(e){e!==P(this,Le,"f")&&(G(this,$e,void 0,"f"),G(this,Ee,void 0,"f"),G(this,Le,e,"f"),P(this,V,"f").isSettled()&&G(this,V,Oe(),"f"),e.then(n=>{P(this,Le,"f")===e&&P(this,te,"m",Mn).call(this,n)}).catch(n=>{P(this,Le,"f")===e&&(G(this,Ee,Gt(n),"f"),P(this,V,"f").promise.catch(()=>{}),P(this,V,"f").reject(n),P(this,te,"m",lt).call(this))}))},Mn=function(e){e!==P(this,$e,"f")&&(G(this,Ee,void 0,"f"),G(this,$e,e,"f"),P(this,V,"f").isSettled()&&G(this,V,Oe(),"f"),P(this,V,"f").resolve(e),P(this,te,"m",lt).call(this))};class Ts{constructor(e){this.initialValue=e}}function Os(t){return new Ts(t)}function Rs(t,e){return`${t}-${Ti(e)}`}function ao(t,e){return e?pe(e,n=>Re(`--${Rs(t,String(n))}`)):{}}function lo(t,e){return t?pe(t,(n,r)=>{const s=e[n];return Re(`var(${s}, ${r})`)}):{}}class co extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ns(){return t=>{var e;return e=class extends co{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function jn(){return Ns()}function uo(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ns()(n);return e[n]=r,e},{}):{}}function Fr(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function qr(t,e){const n=t;function r(i,o){e&&Fr(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Fr(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function ho(t,e){return e?pe(e,n=>Rs(t,String(n))):{}}function fo({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:pe(t,(r,s)=>Re(`:host(.${s})`)),hostClassNames:pe(t,(r,s)=>Re(s)),cssVarNames:e,cssVarValues:n}}function mo({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Te(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function po(t,e){function n(s){Te(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function pr(t){var e;const n=uo(t.events),r=ho(t.tagName,t.hostClasses),s=ao(t.tagName,t.cssVars),i=lo(t.cssVars,s),o={...eo,...t.options},a=typeof t.styles=="function"?t.styles(fo({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Ss``,l=t.renderCallback,h=(e=class extends wt{createRenderParams(){return po(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Ps(this)&&!this.haveInputsBeenSet&&!o[hr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${mr.name}" directive on it. If no inputs are intended, use "${pr.name}" to define ${t.tagName}.`);const d=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(d));const u=t.renderCallback(d);return mo({host:d.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:d.state,inputs:d.inputs}),u}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const d=this.createRenderParams();t.cleanupCallback(d)}this.initCalled=!1}assignInputs(d){Te(d).forEach(u=>{Ur()(this,u),this.instanceInputs[u]=d[u]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=io(t.stateInit),this.instanceInputs=qr(this,!1),this.instanceState=qr(this,!0);const d=t.stateInit||{};Te(d).forEach(u=>{Ur()(this,u);const c=this.asyncStateHandlerMap[u];c?(this.instanceState[u]=c.getValue(),c.addSettleListener(()=>{this[u]=c.getValue()})):this.instanceState[u]=d[u]}),this.definition=h}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(h,{[Rn]:{value:!0,writable:!1},name:{value:Pi(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof h,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,h),h}function Ds(){return t=>pr({...t,options:{[hr]:!1},...t.options})}function ct(t,e){return go(t,e)}const go=dr(class extends fr{constructor(t){super(t),this.element=ks(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ge}}),Vr="onDomCreated",yo=dr(class extends fr{constructor(t){super(t),Nn(t,Vr)}update(t,[e]){Nn(t,Vr);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function zn(t,e,n,r){return t instanceof Error?r?r(t):cn(t):ji(t)?e:n?n(t):t}function vo(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Ds()(s(i))),defineElementNoInputs:i=>(r(i),pr(s(i)))}}function wo(t,e){return t.filter((n,r)=>!e.includes(r))}function Ms(t){return t.filter(e=>Mi(e,["tagName",Rn])&&!!e.tagName&&!!e[Rn])}const js=new WeakMap;function bo(t,e){var n;const r=Ms(e);return(n=zs(js,[t,...r]).value)===null||n===void 0?void 0:n.template}function _o(t,e,n){const r=Ms(e);return Ks(js,[t,...r],n)}function zs(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Bs(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?zs(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Bs(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Ks(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=Bs(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const h=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=h),Ks(h,e,n,r+1)}function Is(t,e,n){return{name:t,check:e,transform:n}}const xo=new WeakMap;function Ls(t,e,n){const r=bo(t,e),s=r??n();if(!r){const o=_o(t,e,s);if(o.result)xo.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=wo(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function Hs(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,h)=>{var d;const u=s.length-1,c=s[u],f=h-1,y=e[f];let m;r&&r(l),typeof c=="string"&&(m=(d=n.find(p=>p.check(c,l,y)))===null||d===void 0?void 0:d.transform,m&&(s[u]=c+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[h];m?i[u]=i[u]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Us(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const So=[Is("tag name css selector interpolation",(t,e,n)=>Us(n),t=>t.tagName)];function $o(t,e){return Hs(t,e,So)}function ut(t,...e){const n=Ls(t,e,()=>$o(t,e));return Ss(n.strings,...n.values)}const Eo=[Is("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Us(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function Ao(t){}function Co(t){return Hs(t.strings,t.values,Eo,Ao)}function Y(t,...e){const n=Hi(t,...e),r=Ls(t,e,()=>Co(n));return{...n,strings:r.strings,values:r.values}}function ko(t,e){return t<e}function Po(t,e){return t>e}function To({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Po:ko)(e.width/e.height,t.width/t.height)?"width":"height"}function xn({box:t,constraint:e,constraintType:n}){const r=To({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Fs({box:t,ratio:e}){return pe(t,(n,r)=>r*e)}function qs({box:t,min:e,max:n}){return pe(t,(r,s)=>Oi({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Vs({min:t,max:e,box:n}){const r=Ws({min:t,max:e,box:n}),s=Fs({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||250),width:Math.floor(s.width||(t==null?void 0:t.width)||250)}}function Ws({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?xn({box:n,constraint:t,constraintType:"min"}):1,s=e?xn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Fs({ratio:i,box:n});return(t?xn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}const Wr=10;function Gs(t){return Math.min(Math.max(Math.floor(Math.pow(t+1,3)*Wr),Wr),5e3)}function bt(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=Oo(o,r[a]);return`${o}${l}`});return vs(i.join(""))}function Oo(t,e){return e._$litType$!=null||e._$litDirective$!=null?bt(e):Array.isArray(e)?e.map(r=>bt(r)).join(""):t.endsWith("=")?`"${e}"`:e}var Qt=(t=>(t.Html="html",t.Svg="svg",t.Image="image",t.Video="video",t))(Qt||{});async function Ro(t,e){const n=t.headers.get("Content-Type")??"";return n.includes("video")?"video":n.includes("svg")||e.includes("<svg")?"svg":n.includes("html")||e.includes("<html")?"html":"image"}function No({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?bt(Y`
            <img src=${n} />
        `):t==="video"?bt(Y`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} type="video/mp4" />
            </video>
        `):e}async function Gr(t,e){let n;try{n=await fetch(t)}catch{}const r=await(n==null?void 0:n.text())??"",s=n?await Ro(n,r):"image";return{templateString:No({imageText:r,imageType:s,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:s}}var X=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t))(X||{}),Bn=(t=>(t.FromParent="from-parent",t.FromChild="from-child",t))(Bn||{});const Do=35;function Mo(t,e,n){return n.type===t&&n.direction===e}async function qe({getMessageContext:t,message:e,verifyData:n,imageUrl:r}){let s=0,i=!1,o,a,l=!1;const h={...e,direction:"from-parent"},d=e.type;function u(m){try{const v=m.data;if(v.direction!=="from-child")return;if(v&&l&&Mo(d,"from-child",v)){let p=!1;try{p=n?n(v.data):!0}catch{}if(!p)return;i=!0,o=v}}catch(v){a=Gt(v)}}let c=t();c==null||c.addEventListener("message",u);const f=Date.now();for(;!i&&s<Do&&!a;){await un(Gs(s));const m=t();m&&(c==null||c.removeEventListener("message",u),m.addEventListener("message",u),m!==c&&(c=m),l=!0,m.postMessage(h)),s++}const y=Date.now()-f;if(a)throw console.error({listenerError:a,imageUrl:r,messageToSend:e}),a;if(!i)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.floor(y/1e3)}' seconds for '${r}'`);return o==null?void 0:o.data}var fe=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(fe||{});function me(t){return t.contentWindow}const Yr=1e4;async function jo({updateState:t,min:e,max:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,forcedOriginalImageSize:a}){const l=Date.now(),h=Oe();s.onload=()=>{console.log("loaded!"),h.resolve()};let d=0,u=0;for(;!me(s)&&u<=Yr;)await un(Gs(d)),u=Date.now()-l,d++;u>Yr&&await h.promise,await qe({message:{type:X.Ready},imageUrl:i.imageUrl,getMessageContext:()=>me(s)??void 0}),o&&await qe({message:{type:X.ForceSize,data:o},imageUrl:i.imageUrl,getMessageContext:()=>me(s)??void 0});const c=a??await qe({message:{type:X.SendSize},imageUrl:i.imageUrl,getMessageContext:()=>me(s)??void 0,verifyData:f=>!isNaN(f.width)&&!isNaN(f.height)&&!!f.width&&!!f.height});return await zo({updateState:t,min:e,max:n,imageDimensions:c,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o}),me(s).document.documentElement.outerHTML}async function zo({updateState:t,min:e,max:n,imageDimensions:r,host:s,iframeElement:i,imageData:o,forcedFinalImageSize:a}){const l=s.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const h=Vs({min:e,max:n,box:a??r});l.style.width=Q(Math.floor(h.width)),l.style.height=Q(Math.floor(h.height));const d=qs({min:e,max:n,box:h});h.height<d.height?s.classList.add(fe.VerticallyCenter):s.classList.remove(fe.VerticallyCenter),s.style.width=Q(d.width),s.style.height=Q(d.height);const u=Ws({min:e,max:n,box:a??r});if(u>3?await qe({message:{type:X.SendScalingMethod,data:"pixelated"},imageUrl:o.imageUrl,getMessageContext:()=>me(i)??void 0}):await qe({message:{type:X.SendScalingMethod,data:"default"},imageUrl:o.imageUrl,getMessageContext:()=>me(i)??void 0}),o.imageType===Qt.Html){const c=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},f={width:u*c.width,height:u*c.height};await qe({message:{type:X.SendScale,data:f},imageUrl:o.imageUrl,getMessageContext:()=>me(i)??void 0})}}var Jr=Object.freeze,Bo=Object.defineProperty,Xr=(t,e)=>Jr(Bo(t,"raw",{value:Jr(e||t.slice())})),Qr,Zr;function Ko(t,e,n){const r=Math.random(),s=Y(Qr||(Qr=Xr([`
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
    `])),t.imageType,n??"",Bn.FromChild,Bn.FromChild,X.Ready,X.SendScale,X.SendScalingMethod,X.SendSize,X.ForceSize),i=Y(Zr||(Zr=Xr([`
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
    `])),t.imageType.toLowerCase(),r,e??"",s);return vs(bt(i)).replace(String(r),`
${t.templateString}
`)}const Io={imageData:Os(),frameFullHtml:void 0},es=Y`
    <div class="click-cover"></div>
`,ht=Ds()({tagName:"vir-resizable-image",stateInit:Io,events:{settled:jn(),errored:jn()},styles:({hostClassSelectors:t})=>ut`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${Re(fe.VerticallyCenter)}) {
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
            opacity: 1;
            pointer-events: none;
        }

        :host(.${Re(fe.HideLoading)}) .loading-wrapper {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: 500ms;
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
    `,renderCallback:({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i})=>{n({imageData:{createPromise:async()=>{r.classList.remove(fe.HideLoading),s(new i.settled(!1)),r.classList.remove(fe.VerticallyCenter);try{return Gr(e.imageUrl,!!e.blockAutoPlay)}catch{await un(1e3);try{return Gr(e.imageUrl,!!e.blockAutoPlay)}catch(f){throw s(new i.errored(Gt(f))),f}}},trigger:{..._s(e,c=>c!=="extraHtml")}}});const o=e.min&&e.max?qs({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?Vs({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,h=zn(t.imageData,"",c=>{var y;const f=((y=t.frameFullHtml)==null?void 0:y.imageUrl)===c.imageUrl?t.frameFullHtml.html:void 0;return Y`
                    <iframe
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${f||Ko(c,e.extraHtml,e.htmlSizeQuerySelector)}
                        ${yo(async m=>{try{const v=await jo({updateState:n,min:o,max:a,host:r,iframeElement:m,imageData:c,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});s(new i.settled(!0)),r.classList.add(fe.HideLoading),n({frameFullHtml:{imageUrl:c.imageUrl,html:v}})}catch(v){console.error(v)}})}
                    ></iframe>
                    <slot name="loaded"></slot>
                `},c=>(s(new i.errored(Gt(c))),Y`
                    <div class="error-wrapper">
                        <slot name="error">${cn(c)}</slot>
                    </div>
                `)),d=zn(t.imageData,es,c=>[Qt.Html,Qt.Video].includes(c.imageType)?"":es,()=>""),u=t.imageData instanceof Error?ut`
                      max-width: 100%;
                      max-height: 100%;
                  `:l?ut`
                      width: ${l.width}px;
                      height: ${l.height}px;
                  `:"";return Y`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="frame-constraint" style=${u}>${h}</div>
            ${d}
        `}}),R=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,j=Object.keys,L=Array.isArray;function F(t,e){return typeof e!="object"||j(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||R.Promise||(R.Promise=Promise);const _t=Object.getPrototypeOf,Lo={}.hasOwnProperty;function J(t,e){return Lo.call(t,e)}function Qe(t,e){typeof e=="function"&&(e=e(_t(t))),(typeof Reflect>"u"?j:Reflect.ownKeys)(e).forEach(n=>{ae(t,n,e[n])})}const Ys=Object.defineProperty;function ae(t,e,n,r){Ys(t,e,F(n&&J(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ve(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ae(t.prototype,"constructor",t),{extend:Qe.bind(null,t.prototype)}}}}const Ho=Object.getOwnPropertyDescriptor;function gr(t,e){let n;return Ho(t,e)||(n=_t(t))&&gr(n,e)}const Uo=[].slice;function Zt(t,e,n){return Uo.call(t,e,n)}function Js(t,e){return e(t)}function it(t){if(!t)throw new Error("Assertion Failed")}function Xs(t){R.setImmediate?setImmediate(t):setTimeout(t,0)}function Qs(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function le(t,e){if(J(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=le(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:le(a,e.substr(o+1))}}function Z(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){it(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Z(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?L(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&J(t,o)||(l=t[o]={}),Z(l,a,n)}}else n===void 0?L(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function Zs(t){var e={};for(var n in t)J(t,n)&&(e[n]=t[n]);return e}const Fo=[].concat;function ei(t){return Fo.apply([],t)}const ti="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ei([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>R[t]),qo=ti.map(t=>R[t]);Qs(ti,t=>[t,!0]);let he=null;function Ct(t){he=typeof WeakMap<"u"&&new WeakMap;const e=Kn(t);return he=null,e}function Kn(t){if(!t||typeof t!="object")return t;let e=he&&he.get(t);if(e)return e;if(L(t)){e=[],he&&he.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Kn(t[n]))}else if(qo.indexOf(t.constructor)>=0)e=t;else{const i=_t(t);for(var s in e=i===Object.prototype?{}:Object.create(i),he&&he.set(t,e),t)J(t,s)&&(e[s]=Kn(t[s]))}return e}const{toString:Vo}={};function In(t){return Vo.call(t).slice(8,-1)}const Ln=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Wo=typeof Ln=="symbol"?function(t){var e;return t!=null&&(e=t[Ln])&&e.apply(t)}:function(){return null},He={};function ie(t){var e,n,r,s;if(arguments.length===1){if(L(t))return t.slice();if(this===He&&typeof t=="string")return[t];if(s=Wo(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const yr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var ne=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ni(t,e){ne=t,ri=e}var ri=()=>!0;const Go=!new Error("").stack;function Me(){if(Go)try{throw Me.arguments,new Error}catch(t){return t}return new Error}function Hn(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(ri).map(r=>`
`+r).join("")):""}var si=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],vr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(si),Yo={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function We(t,e){this._e=Me(),this.name=t,this.message=e}function ii(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function en(t,e,n,r){this._e=Me(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=ii(t,e)}function dt(t,e){this._e=Me(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=ii(t,e)}Ve(We).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Hn(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ve(en).from(We),Ve(dt).from(We);var wr=vr.reduce((t,e)=>(t[e]=e+"Error",t),{});const Jo=We;var C=vr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Me(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Yo[e]||n,this.inner=null)}return Ve(r).from(Jo),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var ts=si.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Lt=vr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function xt(t){return t}function Xo(t,e){return t==null||t===xt?e:function(n){return e(t(n))}}function Ne(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Qo(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Ne(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Ne(s,this.onerror):s),i!==void 0?i:n}}function Zo(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Ne(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Ne(r,this.onerror):r)}}function ea(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);F(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Ne(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Ne(i,this.onerror):i),r===void 0?o===void 0?void 0:o:F(r,o)}}function ta(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function br(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Lt.ModifyError=en,Lt.DexieError=We,Lt.BulkError=dt;var St={};const[Un,tn,Fn]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,_t(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,_t(e),t]})(),oi=tn&&tn.then,Ht=Un&&Un.constructor,_r=!!Fn;var qn=!1,na=Fn?()=>{Fn.then(Rt)}:R.setImmediate?setImmediate.bind(null,Rt):R.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Rt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Rt,0)},ft=function(t,e){ot.push([t,e]),nn&&(na(),nn=!1)},Vn=!0,nn=!0,Ce=[],Ut=[],Wn=null,Gn=xt,Ge={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:rs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{rs(t[0],t[1])}catch{}})}},A=Ge,ot=[],ke=0,Ft=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(ne&&(this._stackHolder=Me(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==St)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Jn(this,this._value))}this._state=null,this._value=null,++e.ref,li(this,t)}const Yn={get:function(){var t=A,e=rn;function n(r,s){var i=!t.global&&(t!==A||e!==rn);const o=i&&!ce();var a=new S((l,h)=>{xr(this,new ai(sn(r,t,i,o),sn(s,t,i,o),l,h,t))});return ne&&hi(a,this),a}return n.prototype=St,n},set:function(t){ae(this,"then",t&&t.prototype===St?Yn:{get:function(){return t},set:Yn.set})}};function ai(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function li(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&kt();n&&typeof n.then=="function"?li(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,ci(t)),r&&Pt()}},Jn.bind(null,t))}catch(n){Jn(t,n)}}function Jn(t,e){if(Ut.push(e),t._state===null){var n=t._lib&&kt();e=Gn(e),t._state=!1,t._value=e,ne&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=gr(e,"stack");e._promise=t,ae(e,"stack",{get:()=>qn?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ce.some(s=>s._value===r._value)||Ce.push(r)}(t),ci(t),n&&Pt()}}function ci(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)xr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),ke===0&&(++ke,ft(()=>{--ke==0&&Sr()},[]))}function xr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++ke,ft(ra,[n,t,e])}else t._listeners.push(e)}function ra(t,e,n){try{Wn=e;var r,s=e._value;e._state?r=t(s):(Ut.length&&(Ut=[]),r=t(s),Ut.indexOf(s)===-1&&function(i){for(var o=Ce.length;o;)if(Ce[--o]._value===i._value)return void Ce.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Wn=null,--ke==0&&Sr(),--n.psd.ref||n.psd.finalize()}}function ui(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=Hn(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return ne&&((r=Hn(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&ui(t._prev,e,n)),e}function hi(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Rt(){kt()&&Pt()}function kt(){var t=Vn;return Vn=!1,nn=!1,t}function Pt(){var t,e,n;do for(;ot.length>0;)for(t=ot,ot=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(ot.length>0);Vn=!0,nn=!0}function Sr(){var t=Ce;Ce=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Ft.slice(0),n=e.length;n;)e[--n]()}function Nt(t){return new S(St,!1,t)}function N(t,e){var n=A;return function(){var r=kt(),s=A;try{return ve(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{ve(s,!1),r&&Pt()}}}Qe(S.prototype,{then:Yn,_then:function(t,e){xr(this,new ai(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Nt(r)):this.then(null,r=>r&&r.name===e?n(r):Nt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Nt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{qn=!0;var t=ui(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{qn=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ae(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Ge.env=di(),Qe(S,{all:function(){var t=ie.apply(null,arguments).map(Dt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(St,!0,t);return hi(e,Wn),e},reject:Nt,race:function(){var t=ie.apply(null,arguments).map(Dt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>rn},newPSD:ye,usePSD:et,scheduler:{get:()=>ft,set:t=>{ft=t}},rejectionMapper:{get:()=>Gn,set:t=>{Gn=t}},follow:(t,e)=>new S((n,r)=>ye((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Ne(function(){(function(a){function l(){a(),Ft.splice(Ft.indexOf(l),1)}Ft.push(l),++ke,ft(()=>{--ke==0&&Sr()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Ht&&(Ht.allSettled&&ae(S,"allSettled",function(){const t=ie.apply(null,arguments).map(Dt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Ht.any&&typeof AggregateError<"u"&&ae(S,"any",function(){const t=ie.apply(null,arguments).map(Dt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const I={awaits:0,echoes:0,id:0};var sa=0,qt=[],Sn=0,rn=0,ia=0;function ye(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++ia;var o=Ge.env;i.env=_r?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:ns(o.nthen,i),gthen:ns(o.gthen,i)}:{},e&&F(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=et(i,t,n,r);return i.ref===0&&i.finalize(),a}function Ze(){return I.id||(I.id=++sa),++I.awaits,I.echoes+=100,I.id}function ce(){return!!I.awaits&&(--I.awaits==0&&(I.id=0),I.echoes=100*I.awaits,!0)}function Dt(t){return I.echoes&&t&&t.constructor===Ht?(Ze(),t.then(e=>(ce(),e),e=>(ce(),z(e)))):t}function oa(t){++rn,I.echoes&&--I.echoes!=0||(I.echoes=I.id=0),qt.push(A),ve(t,!0)}function aa(){var t=qt[qt.length-1];qt.pop(),ve(t,!1)}function ve(t,e){var n=A;if((e?!I.echoes||Sn++&&t===A:!Sn||--Sn&&t===A)||fi(e?oa.bind(null,t):aa),t!==A&&(A=t,n===Ge&&(Ge.env=di()),_r)){var r=Ge.env.Promise,s=t.env;tn.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(R,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function di(){var t=R.Promise;return _r?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(R,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:tn.then,gthen:t.prototype.then}:{}}function et(t,e,n,r,s){var i=A;try{return ve(t,!0),e(n,r,s)}finally{ve(i,!1)}}function fi(t){oi.call(Un,t)}function sn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&Ze(),ve(e,!0);try{return t.apply(this,arguments)}finally{ve(s,!1),r&&fi(ce)}}}function ns(t,e){return function(n,r){return t.call(this,sn(n,e),sn(r,e))}}(""+oi).indexOf("[native code]")===-1&&(Ze=ce=T);function rs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(R.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),F(r,s)):R.CustomEvent&&F(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&R.dispatchEvent&&(dispatchEvent(r),!R.PromiseRejectionEvent&&R.onunhandledrejection))try{R.onunhandledrejection(r)}catch{}ne&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var z=S.reject;function Xn(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===wr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Xn(t,e,n,r))):z(i)}return s._promise(e,(i,o)=>ye(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return z(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return z(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>Xn(t,e,n,r))}const Ae=String.fromCharCode(65535),re="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",mt=[],fn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),la=fn,ca=fn,mi=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function De(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const pi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Mt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Ct(e))[t],e)}class ua{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,h,d){if(!d.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(d.idbtrans,d)}const a=kt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):ye(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Xn(this.db,e,[this.name],o)}finally{a&&Pt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(L(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=j(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(h=>h.compound&&n.every(d=>h.keyPath.indexOf(d)>=0)&&h.keyPath.every(d=>n.indexOf(d)>=0))[0];if(r&&this.db._maxKey!==Ae)return this.where(r.name).equals(r.keyPath.map(h=>e[h]));!r&&ne&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(h,d){try{return i.cmp(h,d)===0}catch{return!1}}const[a,l]=n.reduce(([h,d],u)=>{const c=s[u],f=e[u];return[h||c,h||!c?De(d,c&&c.multi?y=>{const m=le(y,u);return L(m)&&m.some(v=>o(f,v))}:y=>o(f,le(y,u))):d]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,L(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(J(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){F(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Mt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||L(e))return this.where(":id").equals(e).modify(n);{const r=le(e,this.schema.primKey.keyPath);if(r===void 0)return z(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?j(n).forEach(s=>{Z(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Mt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:pi})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const h=e.length;let d=l&&a?e.map(Mt(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:d,wantResults:i}).then(({numFailures:u,results:c,lastResult:f,failures:y})=>{if(u===0)return i?c:f;throw new dt(`${this.name}.bulkAdd(): ${u} of ${h} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const h=e.length;let d=l&&a?e.map(Mt(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:d,wantResults:i}).then(({numFailures:u,results:c,lastResult:f,failures:y})=>{if(u===0)return i?c:f;throw new dt(`${this.name}.bulkPut(): ${u} of ${h} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new dt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function pt(t){var e={},n=function(a,l){if(l){for(var h=arguments.length,d=new Array(h-1);--h;)d[h-1]=arguments[h];return e[a].subscribe.apply(null,d),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,h){if(typeof a=="object")return o(a);l||(l=ta),h||(h=T);var d={subscribers:[],fire:h,subscribe:function(u){d.subscribers.indexOf(u)===-1&&(d.subscribers.push(u),d.fire=l(d.fire,u))},unsubscribe:function(u){d.subscribers=d.subscribers.filter(function(c){return c!==u}),d.fire=d.subscribers.reduce(l,h)}};return e[a]=n[a]=d,d}function o(a){j(a).forEach(function(l){var h=a[l];if(L(h))i(l,a[l][0],a[l][1]);else{if(h!=="asap")throw new C.InvalidArgument("Invalid event config");var d=i(l,xt,function(){for(var u=arguments.length,c=new Array(u);u--;)c[u]=arguments[u];d.subscribers.forEach(function(f){Xs(function(){f.apply(null,c)})})})}})}}function rt(t,e){return Ve(e).from({prototype:t}),e}function Be(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function $n(t,e){t.filter=De(t.filter,e)}function En(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>De(r(),e()):e,t.justLimit=n&&!r}function Vt(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function ss(t,e,n){const r=Vt(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function jt(t,e,n,r){const s=t.replayFilter?De(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,h)=>{if(!s||s(l,h,c=>l.stop(c),c=>l.fail(c))){var d=l.primaryKey,u=""+d;u==="[object ArrayBuffer]"&&(u=""+new Uint8Array(d)),J(i,u)||(i[u]=!0,e(a,l,h))}};return Promise.all([t.or._iterate(o,n),is(ss(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return is(ss(t,r,n),De(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function is(t,e,n,r){var s=N(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=T},a=>{i.fail(a),o=T})||s(i.value,i,a=>o=a),o()})})}function U(t,e){try{const n=os(t),r=os(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let h=0;h<l;++h)if(s[h]!==i[h])return s[h]<i[h]?-1:1;return o===a?0:o<a?-1:1}(as(t),as(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let h=0;h<l;++h){const d=U(s[h],i[h]);if(d!==0)return d}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function os(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=In(t);return n==="ArrayBuffer"?"binary":n}function as(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class ha{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,z.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,z.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=De(n.algorithm,e)}_iterate(e,n){return jt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&F(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>jt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(Be(r,!0))return s.count({trans:n,query:{index:Vt(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return jt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(h,d){return d?o(h[r[d]],d-1):h[s]}var a=this._ctx.dir==="next"?1:-1;function l(h,d){var u=o(h,i),c=o(d,i);return u<c?-a:u>c?a:0}return this.toArray(function(h){return h.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&Be(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=Vt(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return jt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,Be(n)?En(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):En(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),En(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return $n(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return $n(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=De(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&Be(n,!0)&&n.limit>0)return this._read(s=>{var i=Vt(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return $n(this._ctx,function(s){var i=s.primaryKey.toString(),o=J(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=j(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var g=i[p],b=e[g];le(m,g)!==b&&(Z(m,g,b),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:h}=a.schema.primaryKey,d=this.db._options.modifyChunkSize||200,u=[];let c=0;const f=[],y=(m,v)=>{const{failures:p,numFailures:g}=v;c+=m-g;for(let b of j(p))u.push(p[b])};return this.clone().primaryKeys().then(m=>{const v=p=>{const g=Math.min(d,m.length-p);return a.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(b=>{const E=[],x=[],w=l?[]:null,_=[];for(let $=0;$<g;++$){const O=b[$],D={value:Ct(O),primKey:m[p+$]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(m[p+$]):l||U(h(O),h(D.value))===0?(x.push(D.value),l&&w.push(m[p+$])):(_.push(m[p+$]),E.push(D.value)))}const k=Be(n)&&n.limit===1/0&&(typeof e!="function"||e===An)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let O in $.failures)_.splice(parseInt(O),1);y(E.length,$)})).then(()=>(x.length>0||k&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:w,values:x,criteria:k,changeSpec:typeof e!="function"&&e}).then($=>y(x.length,$))).then(()=>(_.length>0||k&&e===An)&&a.mutate({trans:r,type:"delete",keys:_,criteria:k}).then($=>y(_.length,$))).then(()=>m.length>p+g&&v(p+d))})};return v(0).then(()=>{if(u.length>0)throw new en("Error modifying one or more objects",u,c,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return Be(e)&&(e.isPrimKey&&!ca||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:h,numFailures:d})=>{if(d)throw new en("Could not delete some values",Object.keys(a).map(u=>a[u]),o-d);return o-d}))}):this.modify(An)}}const An=(t,e)=>e.value=null;function da(t,e){return t<e?-1:t===e?0:1}function fa(t,e){return t>e?-1:t===e?0:1}function W(t,e,n){var r=t instanceof yi?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Ke(t){return new t.Collection(t,()=>gi("")).limit(0)}function ma(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var h=e[l];if(h!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],h)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function zt(t,e,n,r){var s,i,o,a,l,h,d,u=n.length;if(!n.every(m=>typeof m=="string"))return W(t,"String expected.");function c(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?da:fa;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});a=v.map(function(p){return p.upper}),l=v.map(function(p){return p.lower}),h=m,d=m==="next"?"":r}c("next");var f=new t.Collection(t,()=>ue(a[0],l[u-1]+r));f._ondirectionchange=function(m){c(m)};var y=0;return f._addAlgorithm(function(m,v,p){var g=m.key;if(typeof g!="string")return!1;var b=i(g);if(e(b,l,y))return!0;for(var E=null,x=y;x<u;++x){var w=ma(g,b,a[x],l[x],o,h);w===null&&E===null?y=x+1:(E===null||o(E,w)>0)&&(E=w)}return v(E!==null?function(){m.continue(E+d)}:p),!1}),f}function ue(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function gi(t){return{type:1,lower:t,upper:t}}class yi{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?Ke(this):new this.Collection(this,()=>ue(e,n,!r,!s))}catch{return W(this,re)}}equals(e){return e==null?W(this,re):new this.Collection(this,()=>gi(e))}above(e){return e==null?W(this,re):new this.Collection(this,()=>ue(e,void 0,!0))}aboveOrEqual(e){return e==null?W(this,re):new this.Collection(this,()=>ue(e,void 0,!1))}below(e){return e==null?W(this,re):new this.Collection(this,()=>ue(void 0,e,!1,!0))}belowOrEqual(e){return e==null?W(this,re):new this.Collection(this,()=>ue(void 0,e))}startsWith(e){return typeof e!="string"?W(this,"String expected."):this.between(e,e+Ae,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):zt(this,(n,r)=>n.indexOf(r[0])===0,[e],Ae)}equalsIgnoreCase(e){return zt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ie.apply(He,arguments);return e.length===0?Ke(this):zt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ie.apply(He,arguments);return e.length===0?Ke(this):zt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Ae)}anyOf(){const e=ie.apply(He,arguments);let n=this._cmp;try{e.sort(n)}catch{return W(this,re)}if(e.length===0)return Ke(this);const r=new this.Collection(this,()=>ue(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ie.apply(He,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return W(this,re)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return Ke(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return W(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,h=n&&n.includeUppers===!0;let d,u=s;function c(g,b){return u(g[0],b[0])}try{d=e.reduce(function(g,b){let E=0,x=g.length;for(;E<x;++E){const w=g[E];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=a(w[1],b[1]);break}}return E===x&&g.push(b),g},[]),d.sort(c)}catch{return W(this,re)}let f=0;const y=h?g=>s(g,d[f][1])>0:g=>s(g,d[f][1])>=0,m=l?g=>i(g,d[f][0])>0:g=>i(g,d[f][0])>=0;let v=y;const p=new this.Collection(this,()=>ue(d[0][0],d[d.length-1][1],!l,!h));return p._ondirectionchange=g=>{g==="next"?(v=y,u=s):(v=m,u=i),d.sort(c)},p._addAlgorithm((g,b,E)=>{for(var x=g.key;v(x);)if(++f,f===d.length)return b(E),!1;return!!function(w){return!y(w)&&!m(w)}(x)||(this._cmp(x,d[f][1])===0||this._cmp(x,d[f][0])===0||b(()=>{u===s?g.continue(d[f][0]):g.continue(d[f][1])}),!1)}),p}startsWithAnyOf(){const e=ie.apply(He,arguments);return e.every(n=>typeof n=="string")?e.length===0?Ke(this):this.inAnyRange(e.map(n=>[n,n+Ae])):W(this,"startsWithAnyOf() only works with strings")}}function ee(t){return N(function(e){return $t(e),t(e.target.error),!1})}function $t(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const we=pt(null,"storagemutated");class pa{_lock(){return it(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(it(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{et(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(it(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return it(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{$t(s),this._reject(e.error)}),e.onabort=N(s=>{$t(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&we.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return z(new C.ReadOnly("Transaction is readonly"));if(!this.active)return z(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return ye(()=>{var i=new S((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,a)=>{r.then(l=>n._waitingQueue.push(N(o.bind(null,l))),l=>n._waitingQueue.push(N(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(J(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Qn(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+vi(e)}}function vi(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function wi(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:Qs(n,r=>[r.name,r])}}let Et=t=>{try{return t.only([[]]),Et=()=>[[]],[[]]}catch{return Et=()=>Ae,Ae}};function Zn(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>le(n,e)}(t):e=>le(e,t)}function ls(t){return[].slice.call(t)}let ga=0;function gt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function ya(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:h,upper:d,lowerOpen:u,upperOpen:c}=l;return h===void 0?d===void 0?null:e.upperBound(d,!!c):d===void 0?e.lowerBound(h,!!u):e.bound(h,d,!!u,!!c)}const{schema:s,hasGetAll:i}=function(l,h){const d=ls(l.objectStoreNames);return{schema:{name:l.name,tables:d.map(u=>h.objectStore(u)).map(u=>{const{keyPath:c,autoIncrement:f}=u,y=L(c),m=c==null,v={},p={name:u.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:c,autoIncrement:f,unique:!0,extractKey:Zn(c)},indexes:ls(u.indexNames).map(g=>u.index(g)).map(g=>{const{name:b,unique:E,multiEntry:x,keyPath:w}=g,_={name:b,compound:L(w),keyPath:w,unique:E,multiEntry:x,extractKey:Zn(w)};return v[gt(w)]=_,_}),getIndexByKeyPath:g=>v[gt(g)]};return v[":id"]=p.primaryKey,c!=null&&(v[gt(c)]=p.primaryKey),p})},hasGetAll:d.length>0&&"getAll"in h.objectStore(d[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(h){const d=h.name;return{name:d,schema:h,mutate:function({trans:u,type:c,keys:f,values:y,range:m}){return new Promise((v,p)=>{v=N(v);const g=u.objectStore(d),b=g.keyPath==null,E=c==="put"||c==="add";if(!E&&c!=="delete"&&c!=="deleteRange")throw new Error("Invalid operation type: "+c);const{length:x}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],k=[];let $=0;const O=H=>{++$,$t(H)};if(c==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:k,results:[],lastResult:void 0});m.type===3?_.push(w=g.clear()):_.push(w=g.delete(r(m)))}else{const[H,K]=E?b?[y,f]:[y,null]:[f,null];if(E)for(let M=0;M<x;++M)_.push(w=K&&K[M]!==void 0?g[c](H[M],K[M]):g[c](H[M])),w.onerror=O;else for(let M=0;M<x;++M)_.push(w=g[c](H[M])),w.onerror=O}const D=H=>{const K=H.target.result;_.forEach((M,je)=>M.error!=null&&(k[je]=M.error)),v({numFailures:$,failures:k,results:c==="delete"?f:_.map(M=>M.result),lastResult:K})};w.onerror=H=>{O(H),D(H)},w.onsuccess=D})},getMany:({trans:u,keys:c})=>new Promise((f,y)=>{f=N(f);const m=u.objectStore(d),v=c.length,p=new Array(v);let g,b=0,E=0;const x=_=>{const k=_.target;p[k._pos]=k.result,++E===b&&f(p)},w=ee(y);for(let _=0;_<v;++_)c[_]!=null&&(g=m.get(c[_]),g._pos=_,g.onsuccess=x,g.onerror=w,++b);b===0&&f(p)}),get:({trans:u,key:c})=>new Promise((f,y)=>{f=N(f);const m=u.objectStore(d).get(c);m.onsuccess=v=>f(v.target.result),m.onerror=ee(y)}),query:function(u){return c=>new Promise((f,y)=>{f=N(f);const{trans:m,values:v,limit:p,query:g}=c,b=p===1/0?void 0:p,{index:E,range:x}=g,w=m.objectStore(d),_=E.isPrimaryKey?w:w.index(E.name),k=r(x);if(p===0)return f({result:[]});if(u){const $=v?_.getAll(k,b):_.getAllKeys(k,b);$.onsuccess=O=>f({result:O.target.result}),$.onerror=ee(y)}else{let $=0;const O=v||!("openKeyCursor"in _)?_.openCursor(k):_.openKeyCursor(k),D=[];O.onsuccess=H=>{const K=O.result;return K?(D.push(v?K.value:K.primaryKey),++$===p?f({result:D}):void K.continue()):f({result:D})},O.onerror=ee(y)}})}(i),openCursor:function({trans:u,values:c,query:f,reverse:y,unique:m}){return new Promise((v,p)=>{v=N(v);const{index:g,range:b}=f,E=u.objectStore(d),x=g.isPrimaryKey?E:E.index(g.name),w=y?m?"prevunique":"prev":m?"nextunique":"next",_=c||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=ee(p),_.onsuccess=N(k=>{const $=_.result;if(!$)return void v(null);$.___id=++ga,$.done=!1;const O=$.continue.bind($);let D=$.continuePrimaryKey;D&&(D=D.bind($));const H=$.advance.bind($),K=()=>{throw new Error("Cursor not stopped")};$.trans=u,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=N(p),$.next=function(){let M=1;return this.start(()=>M--?this.continue():this.stop()).then(()=>this)},$.start=M=>{const je=new Promise((q,be)=>{q=N(q),_.onerror=ee(be),$.fail=be,$.stop=tt=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=K,q(tt)}}),ze=()=>{if(_.result)try{M()}catch(q){$.fail(q)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=N(q=>{_.onsuccess=ze,ze()}),$.continue=O,$.continuePrimaryKey=D,$.advance=H,ze(),je},v($)},p)})},count({query:u,trans:c}){const{index:f,range:y}=u;return new Promise((m,v)=>{const p=c.objectStore(d),g=f.isPrimaryKey?p:p.index(f.name),b=r(y),E=b?g.count(b):g.count();E.onsuccess=N(x=>m(x.target.result)),E.onerror=ee(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:Et(e),schema:s}}function er({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(d,u){return u.reduce((c,{create:f})=>({...c,...f(c)}),d)}(ya(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function on({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=gr(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ae(o,s,{get(){return this.table(s)},set(l){Ys(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function tr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function va(t,e){return t._cfg.version-e._cfg.version}function wa(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;ye(()=>{A.trans=i,A.transless=a,e===0?(j(s).forEach(l=>{Cn(n,l,s[l].primKey,s[l].indexes)}),er(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},h,d,u){const c=[],f=l._versions;let y=l._dbSchema=rr(l,l.idbdb,u),m=!1;function v(){return c.length?S.resolve(c.shift()(d.idbtrans)).then(v):S.resolve()}return f.filter(p=>p._cfg.version>=h).forEach(p=>{c.push(()=>{const g=y,b=p._cfg.dbschema;sr(l,g,u),sr(l,b,u),y=l._dbSchema=b;const E=bi(g,b);E.add.forEach(w=>{Cn(u,w[0],w[1].primKey,w[1].indexes)}),E.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=u.objectStore(w.name);w.add.forEach(k=>nr(_,k)),w.change.forEach(k=>{_.deleteIndex(k.name),nr(_,k)}),w.del.forEach(k=>_.deleteIndex(k))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>h){er(l,u),d._memoizedTables={},m=!0;let w=Zs(b);E.del.forEach(O=>{w[O]=g[O]}),tr(l,[l.Transaction.prototype]),on(l,[l.Transaction.prototype],j(w),w),d.schema=w;const _=yr(x);let k;_&&Ze();const $=S.follow(()=>{if(k=x(d),k&&_){var O=ce.bind(null,null);k.then(O,O)}});return k&&typeof k.then=="function"?S.resolve(k):$.then(()=>k)}}),c.push(g=>{(!m||!la)&&function(b,E){[].slice.call(E.db.objectStoreNames).forEach(x=>b[x]==null&&E.db.deleteObjectStore(x))}(p._cfg.dbschema,g),tr(l,[l.Transaction.prototype]),on(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),d.schema=l._dbSchema})}),v().then(()=>{var p,g;g=u,j(p=y).forEach(b=>{g.db.objectStoreNames.contains(b)||Cn(g,b,p[b].primKey,p[b].indexes)})})}(t,e,i,n).catch(o)})}function bi(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!fn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let h;for(h in a)l[h]||o.del.push(h);for(h in l){const d=a[h],u=l[h];d?d.src!==u.src&&o.change.push(u):o.add.push(u)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function Cn(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>nr(s,i)),s}function nr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function rr(t,e,n){const r={};return Zt(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Qn(vi(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let d=0;d<i.indexNames.length;++d){const u=i.index(i.indexNames[d]);o=u.keyPath;var h=Qn(u.name,o,!!u.unique,!!u.multiEntry,!1,o&&typeof o!="string",!1);l.push(h)}r[s]=wi(s,a,l)}),r}function sr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],h=o.index(l).keyPath,d=typeof h=="string"?h:"["+Zt(h).join("+")+"]";if(e[i]){const u=e[i].idxByName[d];u&&(u.name=l,delete e[i].idxByName[d],e[i].idxByName[l]=u)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&R.WorkerGlobalScope&&R instanceof R.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class ba{_parseStoresSpec(e,n){j(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Qn(l,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),L(h),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=wi(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?F(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{F(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,tr(n,[n._allTables,n,n.Transaction.prototype]),on(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],j(i),i),n._storeNames=j(i),this}upgrade(e){return this._cfg.contentUpgrade=br(this._cfg.contentUpgrade||T,e),this}}function $r(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Pe("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function Er(t){return t&&typeof t.databases=="function"}function ir(t){return ye(function(){return A.letThrough=!0,t()})}function _a(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function xa(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?z(e.dbOpenError):t);ne&&(e.openCanceller._stackHolder=Me()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return S.race([r,(typeof navigator>"u"?S.resolve():_a()).then(()=>new S((l,h)=>{if(s(),!n)throw new C.MissingAPI;const d=t.name,u=e.autoSchema?n.open(d):n.open(d,Math.round(10*t.verno));if(!u)throw new C.MissingAPI;u.onerror=ee(h),u.onblocked=N(t._fireOnBlocked),u.onupgradeneeded=N(c=>{if(o=u.transaction,e.autoSchema&&!t._options.allowEmptyDB){u.onerror=$t,o.abort(),u.result.close();const y=n.deleteDatabase(d);y.onsuccess=y.onerror=N(()=>{h(new C.NoSuchDatabase(`Database ${d} doesnt exist`))})}else{o.onerror=ee(h);var f=c.oldVersion>Math.pow(2,62)?0:c.oldVersion;a=f<1,t._novip.idbdb=u.result,wa(t,f/10,o,h)}},h),u.onsuccess=N(()=>{o=null;const c=t._novip.idbdb=u.result,f=Zt(c.objectStoreNames);if(f.length>0)try{const m=c.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},p,g){v.verno=p.version/10;const b=v._dbSchema=rr(0,p,g);v._storeNames=Zt(p.objectStoreNames,0),on(v,[v._allTables],j(b),b)}(t,c,m):(sr(t,t._dbSchema,m),function(v,p){const g=bi(rr(0,v.idbdb,p),v._dbSchema);return!(g.add.length||g.change.some(b=>b.add.length||b.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),er(t,m)}catch{}var y;mt.push(t),c.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),c.onclose=N(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},p){!Er(m)&&p!=="__dbnames"&&$r(m,v).put({name:p}).catch(T)}(t._deps,d),l()},h)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(ir(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let h=e.onReadyBeingFired.reduce(br,T);return e.onReadyBeingFired=[],S.resolve(ir(()=>h(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),z(l)}).finally(()=>{e.openComplete=!0,i()})}function or(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):L(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function Sa(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=ei(s);return[t,i,n]}function _i(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(u){return u.name===wr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>_i(t,e,n,null,s))):z(u)}const l=yr(s);let h;l&&Ze();const d=S.follow(()=>{if(h=s.call(o,o),h)if(l){var u=ce.bind(null,null);h.then(u,u)}else typeof h.next=="function"&&typeof h.throw=="function"&&(h=or(h))},a);return(h&&typeof h.then=="function"?S.resolve(h).then(u=>o.active?u:z(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):d.then(()=>h)).then(u=>(r&&o._resolve(),o._completion.then(()=>u))).catch(u=>(o._reject(u),z(u)))})}function Bt(t,e,n){const r=L(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const $a={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(d,u,c){const f=gt(d),y=s[f]=s[f]||[],m=d==null?0:typeof d=="string"?1:d.length,v=u>0,p={...c,isVirtual:v,keyTail:u,keyLength:m,extractKey:Zn(d),unique:!v&&c.unique};return y.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?d[0]:d.slice(0,m-1),u+1,c),y.sort((g,b)=>g.keyTail-b.keyTail),p}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const d of r.indexes)o(d.keyPath,0,d);function l(d){const u=d.query.index;return u.isVirtual?{...d,query:{index:u,range:(c=d.query.range,f=u.keyTail,{type:c.type===1?2:c.type,lower:Bt(c.lower,c.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Bt(c.upper,c.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:d;var c,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(d){const u=s[gt(d)];return u&&u[0]}},count:d=>n.count(l(d)),query:d=>n.query(l(d)),openCursor(d){const{keyTail:u,isVirtual:c,keyLength:f}=d.query.index;return c?n.openCursor(l(d)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(Bt(p,d.reverse?t.MAX_KEY:t.MIN_KEY,u)):d.unique?m.continue(m.key.slice(0,f).concat(d.reverse?t.MIN_KEY:t.MAX_KEY,u)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(Bt(p,t.MAX_KEY,u),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(d)}}}}}};function Ar(t,e,n,r){return n=n||{},r=r||"",j(t).forEach(s=>{if(J(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=In(i);a!==In(o)?n[r+s]=e[s]:a==="Object"?Ar(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),j(e).forEach(s=>{J(t,s)||(n[r+s]=e[s])}),n}const Ea={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:h}=o.table(e).hook;switch(i.type){case"add":if(l.fire===T)break;return o._promise("readwrite",()=>d(i),!0);case"put":if(l.fire===T&&h.fire===T)break;return o._promise("readwrite",()=>d(i),!0);case"delete":if(a.fire===T)break;return o._promise("readwrite",()=>d(i),!0);case"deleteRange":if(a.fire===T)break;return o._promise("readwrite",()=>function(c){return u(c.trans,c.range,1e4)}(i),!0)}return n.mutate(i);function d(c){const f=A.trans,y=c.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,c);if(!y)throw new Error("Keys missing");return(c=c.type==="add"||c.type==="put"?{...c,keys:y}:{...c}).type!=="delete"&&(c.values=[...c.values]),c.keys&&(c.keys=[...c.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,c,y).then(m=>{const v=y.map((p,g)=>{const b=m[g],E={onerror:null,onsuccess:null};if(c.type==="delete")a.fire.call(E,p,b,f);else if(c.type==="add"||b===void 0){const x=l.fire.call(E,p,c.values[g],f);p==null&&x!=null&&(p=x,c.keys[g]=p,r.outbound||Z(c.values[g],r.keyPath,p))}else{const x=Ar(b,c.values[g]),w=h.fire.call(E,x,p,b,f);if(w){const _=c.values[g];Object.keys(w).forEach(k=>{J(_,k)?_[k]=w[k]:Z(_,k,w[k])})}}return E});return n.mutate(c).then(({failures:p,results:g,numFailures:b,lastResult:E})=>{for(let x=0;x<y.length;++x){const w=g?g[x]:y[x],_=v[x];w==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(c.type==="put"&&m[x]?c.values[x]:w)}return{failures:p,results:g,numFailures:b,lastResult:E}}).catch(p=>(v.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function u(c,f,y){return n.query({trans:c,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>d({type:"delete",keys:m,trans:c}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:u(c,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function xi(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)U(e.keys[s],t[i])===0&&(r.push(n?Ct(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Aa={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=xi(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Ct(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Cr(t){return!("from"in t)}const se=function(t,e){if(!this){const n=new se;return t&&"d"in t&&F(n,t),n}F(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function At(t,e,n){const r=U(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Cr(t))return F(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(U(n,t.from)<0)return s?At(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},cs(t);if(U(e,t.to)>0)return i?At(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},cs(t);U(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),U(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&an(t,s),i&&o&&an(t,i)}function an(t,e){Cr(e)||function n(r,{from:s,to:i,l:o,r:a}){At(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function Ca(t,e){const n=ar(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=ar(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(U(a.from,s.to)<=0&&U(a.to,s.from)>=0)return!0;U(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function ar(t){let e=Cr(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&U(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||U(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function cs(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=us(o)}t.d=us(t)}function us({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}Qe(se.prototype,{add(t){return an(this,t),this},addKey(t){return At(this,t,t),this},addKeys(t){return t.forEach(e=>At(this,e,e)),this},[Ln](){return ar(this)}});const ka={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new se(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,h={...s,mutate:c=>{const f=c.trans,y=f.mutatedParts||(f.mutatedParts={}),m=w=>{const _=`idb://${e}/${r}/${w}`;return y[_]||(y[_]=new se)},v=m(""),p=m(":dels"),{type:g}=c;let[b,E]=c.type==="deleteRange"?[c.range]:c.type==="delete"?[c.keys]:c.values.length<50?[[],c.values]:[];const x=c.trans._cache;return s.mutate(c).then(w=>{if(L(b)){g!=="delete"&&(b=w.results),v.addKeys(b);const _=xi(b,x);_||g==="add"||p.addKeys(b),(_||E)&&function(k,$,O,D){function H(K){const M=k(K.name||"");function je(q){return q!=null?K.extractKey(q):null}const ze=q=>K.multiEntry&&L(q)?q.forEach(be=>M.addKey(be)):M.addKey(q);(O||D).forEach((q,be)=>{const tt=O&&je(O[be]),pn=D&&je(D[be]);U(tt,pn)!==0&&(tt!=null&&ze(tt),pn!=null&&ze(pn))})}$.indexes.forEach(H)}(m,i,_,E)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return w})}},d=({query:{index:c,range:f}})=>{var y,m;return[c,new se((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},u={get:c=>[o,new se(c.key)],getMany:c=>[o,new se().addKeys(c.keys)],count:d,query:d,openCursor:d};return j(u).forEach(c=>{h[c]=function(f){const{subscr:y}=A;if(y){const m=E=>{const x=`idb://${e}/${r}/${E}`;return y[x]||(y[x]=new se)},v=m(""),p=m(":dels"),[g,b]=u[c](f);if(m(g.name||"").add(b),!g.isPrimaryKey){if(c!=="count"){const E=c==="query"&&l&&f.values&&s.query({...f,values:!1});return s[c].apply(this,arguments).then(x=>{if(c==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),x));const w=f.values?x.result.map(a):x.result;f.values?v.addKeys(w):p.addKeys(w)}else if(c==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const k=w.primaryKey;return p.addKey(k),k}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return x})}p.add(n)}}return s[c].apply(this,arguments)}}),h}}}};class Pe{constructor(e,n){this._middlewares={},this.verno=0;const r=Pe.dependencies;this._options=n={addons:Pe.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(a=>{i.dbReadyResolve=a}),i.openCanceller=new S((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=pt(this,"populate","blocked","versionchange","close",{ready:[br,T]}),this.on.ready.subscribe=Js(this.on.ready.subscribe,a=>(l,h)=>{Pe.vip(()=>{const d=this._state;if(d.openComplete)d.dbOpenError||S.resolve().then(l),h&&a(l);else if(d.onReadyBeingFired)d.onReadyBeingFired.push(l),h&&a(l);else{a(l);const u=this;h||a(function c(){u.on.ready.unsubscribe(l),u.on.ready.unsubscribe(c)})}})}),this.Collection=(o=this,rt(ha.prototype,function(a,l){this.db=o;let h=pi,d=null;if(l)try{h=l()}catch(y){d=y}const u=a._ctx,c=u.table,f=c.hook.reading.fire;this._ctx={table:c,index:u.index,isPrimKey:!u.index||c.schema.primKey.keyPath&&u.index===c.schema.primKey.name,range:h,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:d,or:u.or,valueMapper:f!==xt?f:null}})),this.Table=function(a){return rt(ua.prototype,function(l,h,d){this.db=a,this._tx=d,this.name=l,this.schema=h,this.hook=a._allTables[l]?a._allTables[l].hook:pt(null,{creating:[Qo,T],reading:[Xo,xt],updating:[ea,T],deleting:[Zo,T]})})}(this),this.Transaction=function(a){return rt(pa.prototype,function(l,h,d,u,c){this.db=a,this.mode=l,this.storeNames=h,this.schema=d,this.chromeTransactionDurability=u,this.idbtrans=null,this.on=pt(this,"complete","error","abort"),this.parent=c||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),z(f)})})}(this),this.Version=function(a){return rt(ba.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return rt(yi.prototype,function(l,h,d){this.db=a,this._ctx={table:l,index:h===":id"?null:h,or:d};const u=a._deps.indexedDB;if(!u)throw new C.MissingAPI;this._cmp=this._ascending=u.cmp.bind(u),this._descending=(c,f)=>u.cmp(f,c),this._max=(c,f)=>u.cmp(c,f)>0?c:f,this._min=(c,f)=>u.cmp(c,f)<0?c:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=Et(n.IDBKeyRange),this._createTransaction=(a,l,h,d)=>new this.Transaction(a,l,h,this._options.chromeTransactionDurability,d),this._fireOnBlocked=a=>{this.on("blocked").fire(a),mt.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use($a),this.use(Ea),this.use(ka),this.use(Aa),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(va),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return xa(this)}_close(){const e=this._state,n=mt.indexOf(this);if(n>=0&&mt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:a,IDBKeyRange:l},h){!Er(a)&&h!=="__dbnames"&&$r(a,l).delete(h).catch(T)})(this._deps,this.name),r()}),o.onerror=ee(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return j(this._allTables).map(e=>this._allTables[e])}transaction(){const e=Sa.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(h=>{var d=h instanceof this.Table?h.name:h;if(typeof d!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return d}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(h=>{if(s&&s.storeNames.indexOf(h)===-1){if(!i)throw new C.SubTransaction("Table "+h+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(h){return s?s._promise(null,(d,u)=>{u(h)}):z(h)}const l=_i.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?et(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!J(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Pa=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Ta{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Pa](){return this}}function Si(t,e){return j(e).forEach(n=>{an(t[n]||(t[n]=new se),e[n])}),t}function Oa(t){return new Ta(e=>{const n=yr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,we.storagemutated.unsubscribe(d)}};e.start&&e.start(o);let a=!1,l=!1;function h(){return j(i).some(c=>s[c]&&Ca(s[c],i[c]))}const d=c=>{Si(s,c),h()&&u()},u=()=>{if(a||r)return;s={};const c={},f=function(y){n&&Ze();const m=()=>ye(t,{subscr:y,trans:null}),v=A.trans?et(A.transless,m):m();return n&&v.then(ce,ce),v}(c);l||(we("storagemutated",d),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(h()?u():(s={},i=c,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return u(),o})}let lr;try{lr={indexedDB:R.indexedDB||R.mozIndexedDB||R.webkitIndexedDB||R.msIndexedDB,IDBKeyRange:R.IDBKeyRange||R.webkitIDBKeyRange}}catch{lr={indexedDB:null,IDBKeyRange:null}}const xe=Pe;function Wt(t){let e=oe;try{oe=!0,we.storagemutated.fire(t)}finally{oe=e}}Qe(xe,{...Lt,delete:t=>new xe(t,{addons:[]}).delete(),exists:t=>new xe(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return Er(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):$r(e,n).toCollection().primaryKeys()}(xe.dependencies).then(t)}catch{return z(new C.MissingAPI)}},defineClass:()=>function(t){F(this,t)},ignoreTransaction:t=>A.trans?et(A.transless,t):t(),vip:ir,async:function(t){return function(){try{var e=or(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return z(n)}}},spawn:function(t,e,n){try{var r=or(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return z(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?xe.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>ne,set:t=>{ni(t,t==="dexie"?()=>!0:mi)}},derive:Ve,extend:F,props:Qe,override:Js,Events:pt,on:we,liveQuery:Oa,extendObservabilitySet:Si,getByKeyPath:le,setByKeyPath:Z,delByKeyPath:function(t,e){typeof e=="string"?Z(t,e,void 0):"length"in e&&[].map.call(e,function(n){Z(t,n,void 0)})},shallowClone:Zs,deepClone:Ct,getObjectDiff:Ar,cmp:U,asap:Xs,minKey:-(1/0),addons:[],connections:mt,errnames:wr,dependencies:lr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),xe.maxKey=Et(xe.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(we("storagemutated",t=>{if(!oe){let e;fn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),oe=!0,dispatchEvent(e),oe=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{oe||Wt(t)}));let oe=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),we("storagemutated",e=>{oe||t.postMessage(e)}),t.onmessage=e=>{e.data&&Wt(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){we("storagemutated",e=>{try{oe||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Wt(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Wt(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof We||t instanceof TypeError||t instanceof SyntaxError||!t.name||!ts[t.name])return t;var n=new ts[t.name](e||t.message,t);return"stack"in t&&ae(n,"stack",{get:function(){return this.inner.stack}}),n},ni(ne,mi);class Tt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class hs extends Tt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const mn="locationchange";let ds=!1;const Ra=window.history.pushState;function fs(...t){const e=Ra.apply(window.history,t);return window.dispatchEvent(new Event(mn)),e}const Na=window.history.replaceState;function ms(...t){const e=Na.apply(window.history,t);return window.dispatchEvent(new Event(mn)),e}function Da(){if(!ds){if(window.history.pushState===fs)throw new hs("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===ms)throw new hs("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");ds=!0,window.history.pushState=fs,window.history.replaceState=ms,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(mn))})}}function Ma(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function ja(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function za(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?Ma(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Ba extends Tt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function $i(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const ps=6;function gs(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>ps)throw new Ba(`Route sanitization depth has exceed the max of ${ps} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if($i(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class kn extends Tt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Ka(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new kn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new kn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new kn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Ia(t,e,n,r=!1){const s=Ei(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Ei(t,e,n=""){var r;if(!n&&e!=null)throw new Tt("Route base regexp was defined but routeBase string was not provided.");const s=La(e)?`/${n}`:"",i=t.search?ja(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function La(t){return!!(t&&window.location.pathname.match(t))}function Ha(t={}){var e;Ka(t),Da();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const h=i.getCurrentRawRoutes(),d={...h,...o},u=i.sanitizeFullRoute(d);if(!(!l&&$i(h,u)))return Ia(u,r,n,a)},createRoutesUrl:o=>Ei(o,r,n),getCurrentRawRoutes:()=>za(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Tt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(mn,()=>gs(i)),s=!0),o&&gs(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Ai=Ha({routeBase:"resizable-image-element"}),Ua=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Fa="resizable-image-element-storage";class qa extends Pe{constructor(){super(Fa),this.version(1).stores({storedUrls:"&index"})}}const Pn=new qa,ys={async set(t){const e=ln(t).map((n,r)=>({index:r,url:n}));await Pn.storedUrls.clear(),await Pn.storedUrls.bulkPut(e)},async get(){const e=(await Pn.storedUrls.toArray()).map(r=>r.url),n=ln(e);return Va(n.length?n:Ua)}};function Va(t){var e,n;try{const r=ln(((n=(e=Ai.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function ln(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(Ni)}const{defineElement:Wa,defineElementNoInputs:Ga}=vo(),Kt=Wa()({tagName:"vir-url-input",events:{urlsChange:jn()},styles:ut`
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
                ${ct("input",a=>{const h=a.currentTarget.value.split(`
`).map(d=>d.trim().replace(/,+$/,""));e(new n.urlsChange(h))})}
                ${ct("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),st={max:{width:300,height:600},min:{width:300,height:150}};Ga({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Os(ys.get()),constraints:void 0,router:Ai,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>ut`
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

        ${t.showConstraints} ${ht} {
            border-color: blue;
        }

        ${ht} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||st.min.width,height:Number(o==null?void 0:o.minH)||st.min.height},max:{width:Number(o==null?void 0:o.maxW)||st.max.width,height:Number(o==null?void 0:o.maxH)||st.max.height}}})}const n=t.constraints??st,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!bs(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:un(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),Y`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Kt}
                ${mr(Kt,{urls:r})}
                ${ct(Kt.events.urlsChange,o=>{const a=o.detail;ys.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Kt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${ct("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const h=[Tn(o),Tn(l)].join(" "),d=n[o][l];return Y`
                            <label>
                                ${h}
                                <br />
                                ${Q(d)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${d}
                                    ${ct("input",u=>{i(u.currentTarget,o,l)})}
                                />
                            </label>
                        `});return Y`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${Ya(n,t.imageUrls)}</div>
        `}});function Ya(t,e){return zn(e,"Loading...",n=>ln(n).map(r=>{const s=`
                height: ${Q(t.max.height)};
                max-height: ${Q(t.max.height)};
                width: ${Q(t.max.width)};
                max-width: ${Q(t.max.width)}`,i=`height: ${Q(t.min.height)}; width: ${Q(t.min.width)}`;return Y`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${ht}
                            ${mr(ht,{imageUrl:r,max:t.max,min:t.min})}
                        ></${ht}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
