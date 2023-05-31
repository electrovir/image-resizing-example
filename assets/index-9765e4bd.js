(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zr(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Wo={capitalizeFirstLetter:!1};function Vn(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Vo(t,e){return e.capitalizeFirstLetter?Vn(t):t}function qo(t,e=Wo){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Vo(r,e)}function hi(t){return t!==t.toUpperCase()}function Yo(t){return t.split("").reduce((n,r,i,s)=>{const o=i>0?s[i-1]:"",a=i<s.length-1?s[i+1]:"",l=hi(o)||hi(a);return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Jo({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const Go=["january","february","march","april","may","june","july","august","september","october","november","december"];Go.map(t=>t.slice(0,3));function Or(t){return t?t instanceof Error?t.message:String(t):""}function ze(t){return t instanceof Error?t:new Error(Or(t))}function cs(t){return!!t}function an(t){return!!t&&typeof t=="object"}const di="Failed to compare objects using JSON.stringify";function fi(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Ir(t,e){try{return t===e?!0:an(t)&&an(e)?fi(Object.keys(t).sort(),Object.keys(e).sort())?Object.keys(t).every(r=>Ir(t[r],e[r])):!1:fi(t,e)}catch(n){const r=ze(n);throw r.message.startsWith(di)||(r.message=`${di}: ${r.message}`),r}}const Xo=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Se(t,e){return t?Xo.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Qo(t,e){return t&&e.every(n=>Se(t,n))}function ie(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Zo(t){return ie(t).map(e=>t[e])}function us(t,e,n=!1,r={}){const i=ie(t),s=new Set(ie(e));if(!n){const o=i.filter(a=>!s.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}s.forEach(o=>{if(!Se(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const l=t[o],c=e[o];r[o]||hs(l,c,a,n,r[o]??{})})}function hs(t,e,n,r,i){var a;const s=typeof t,o=typeof e;s!==o&&n(`type "${s}" did not match expected type "${o}"`);try{Se(e,"constructor")&&(!Se(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,c)=>{if(e.map(h=>{try{hs(l,h,n,r,i);return}catch(d){return new Error(`entry at index "${c}" did not match expected shape: ${Or(d)}`)}}).filter(cs).length===e.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${e.join(", ")}"`)})):an(e)&&us(t,e,r,i)}function Lr(t){return Array.isArray(t)?"array":typeof t}function Et(t,e){return Lr(t)===e}function ea(t,e,n){if(!Et(t,e))throw new TypeError(`'${n}' is of type '${Lr(t)}' but type '${e}' was expected.`)}function mi({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(Et(n,"object")?us(r,n):ea(r,Lr(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function ta(t,e){return ie(t).filter(r=>{const i=t[r];return e(r,i,t)}).reduce((r,i)=>(r[i]=t[i],r),{})}function na(t,e){return ta(t,n=>!e.includes(n))}function zt(t,e){let n=!1;const r=ie(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(ie(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function ln(t){const e=tt();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ra(t){return!!(Se(t,"then")&&typeof t.then=="function")}class ia extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function sa(t,e){return new Promise(async(n,r)=>{const i=t===1/0?void 0:setTimeout(()=>{r(new ia(t))},t);try{const s=await e;n(s)}catch(s){r(s)}finally{clearTimeout(i)}})}function tt(){let t,e,n=!1;const r=new Promise((i,s)=>{t=o=>(n=!0,i(o)),e=o=>{n=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${tt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function oa(t,e){try{return aa(t,e),!0}catch{return!1}}function aa(t,e,n){if(t.length<e)throw new Error(n?`'${n}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}const la=globalThis.crypto;function ca(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return la.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function ne(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Br=t=>(...e)=>({_$litDirective$:t,values:e});let Sn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tn;const cn=window,nt=cn.trustedTypes,pi=nt?nt.createPolicy("lit-html",{createHTML:t=>t}):void 0,qn="$lit$",we=`lit$${(Math.random()+"").slice(9)}$`,fs="?"+we,ua=`<${fs}>`,Be=document,$t=()=>Be.createComment(""),At=t=>t===null||typeof t!="object"&&typeof t!="function",ms=Array.isArray,ha=t=>ms(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Cn=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gi=/-->/g,yi=/>/g,Ce=RegExp(`>|${Cn}(?:([^\\s"'>=/]+)(${Cn}*=${Cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vi=/'/g,bi=/"/g,ps=/^(?:script|style|textarea|title)$/i,da=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),fa=da(1),me=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),wi=new WeakMap,ke=Be.createTreeWalker(Be,129,null,!1),ma=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=ct;for(let l=0;l<n;l++){const c=t[l];let u,h,d=-1,f=0;for(;f<c.length&&(o.lastIndex=f,h=o.exec(c),h!==null);)f=o.lastIndex,o===ct?h[1]==="!--"?o=gi:h[1]!==void 0?o=yi:h[2]!==void 0?(ps.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=Ce):h[3]!==void 0&&(o=Ce):o===Ce?h[0]===">"?(o=i??ct,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?Ce:h[3]==='"'?bi:vi):o===bi||o===vi?o=Ce:o===gi||o===yi?o=ct:(o=Ce,i=void 0);const m=o===Ce&&t[l+1].startsWith("/>")?" ":"";s+=o===ct?c+ua:d>=0?(r.push(u),c.slice(0,d)+qn+c.slice(d)+we+m):c+we+(d===-2?(r.push(void 0),l):m)}const a=s+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[pi!==void 0?pi.createHTML(a):a,r]};let Yn=class gs{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[c,u]=ma(e,n);if(this.el=gs.createElement(c,r),ke.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=ke.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith(qn)||d.startsWith(we)){const f=u[o++];if(h.push(d),f!==void 0){const m=i.getAttribute(f.toLowerCase()+qn).split(we),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:p[2],strings:m,ctor:p[1]==="."?ga:p[1]==="?"?va:p[1]==="@"?ba:xn})}else l.push({type:6,index:s})}for(const d of h)i.removeAttribute(d)}if(ps.test(i.tagName)){const h=i.textContent.split(we),d=h.length-1;if(d>0){i.textContent=nt?nt.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],$t()),ke.nextNode(),l.push({type:2,index:++s});i.append(h[d],$t())}}}else if(i.nodeType===8)if(i.data===fs)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(we,h+1))!==-1;)l.push({type:7,index:s}),h+=we.length-1}s++}}static createElement(e,n){const r=Be.createElement("template");return r.innerHTML=e,r}};function rt(t,e,n=t,r){var i,s,o,a;if(e===me)return e;let l=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const c=At(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=rt(t,l._$AS(t,e.values),l,r)),e}let pa=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Be).importNode(r,!0);ke.currentNode=s;let o=ke.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Mr(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new wa(o,this,e)),this._$AV.push(u),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=ke.nextNode(),a++)}return ke.currentNode=Be,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Mr=class ys{constructor(e,n,r,i){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=rt(this,e,n),At(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==me&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ha(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==B&&At(this._$AH)?this._$AA.nextSibling.data=e:this.$(Be.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Yn.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new pa(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=wi.get(e.strings);return n===void 0&&wi.set(e.strings,n=new Yn(e)),n}T(e){ms(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new ys(this.k($t()),this.k($t()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},xn=class{constructor(e,n,r,i,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=rt(this,e,n,0),o=!At(e)||e!==this._$AH&&e!==me,o&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=rt(this,a[r+l],n,l),c===me&&(c=this._$AH[l]),o||(o=!At(c)||c!==this._$AH[l]),c===B?e=B:e!==B&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ga=class extends xn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const ya=nt?nt.emptyScript:"";let va=class extends xn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,ya):this.element.removeAttribute(this.name)}},ba=class extends xn{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=rt(this,e,n,0))!==null&&r!==void 0?r:B)===me)return;const i=this._$AH,s=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},wa=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){rt(this,e)}};const _i=cn.litHtmlPolyfillSupport;_i==null||_i(Yn,Mr),((Tn=cn.litHtmlVersions)!==null&&Tn!==void 0?Tn:cn.litHtmlVersions=[]).push("2.7.4");const _a=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Mr(e.insertBefore($t(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jn=class extends Sn{constructor(e){if(super(e),this.et=B,e.type!==ds.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===B||e==null)return this.ft=void 0,this.et=e;if(e===me)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Jn.directiveName="unsafeHTML",Jn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Si=class extends Jn{};Si.directiveName="unsafeSVG",Si.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sa(t,e,n){return t?e():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=window,jr=Gt.ShadowRoot&&(Gt.ShadyCSS===void 0||Gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fr=Symbol(),xi=new WeakMap;let vs=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Fr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(jr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=xi.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&xi.set(n,e))}return e}toString(){return this.cssText}};const ee=t=>new vs(typeof t=="string"?t:t+"",void 0,Fr),pt=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new vs(n,t,Fr)},xa=(t,e)=>{jr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Gt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},Ei=jr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return ee(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pn;const un=window,$i=un.trustedTypes,Ea=$i?$i.emptyScript:"",Ai=un.reactiveElementPolyfillSupport,Gn={toAttribute(t,e){switch(e){case Boolean:t=t?Ea:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},bs=(t,e)=>e!==t&&(e==e||t==t),Rn={attribute:!0,type:String,converter:Gn,reflect:!1,hasChanged:bs};let qe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Rn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Rn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Ei(i))}else e!==void 0&&n.push(Ei(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xa(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Rn){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Gn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Gn;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||bs)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};qe.finalized=!0,qe.elementProperties=new Map,qe.elementStyles=[],qe.shadowRootOptions={mode:"open"},Ai==null||Ai({ReactiveElement:qe}),((Pn=un.reactiveElementVersions)!==null&&Pn!==void 0?Pn:un.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kn,Nn;let gt=class extends qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_a(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return me}};gt.finalized=!0,gt._$litElement$=!0,(kn=globalThis.litElementHydrateSupport)===null||kn===void 0||kn.call(globalThis,{LitElement:gt});const Ti=globalThis.litElementPolyfillSupport;Ti==null||Ti({LitElement:gt});((Nn=globalThis.litElementVersions)!==null&&Nn!==void 0?Nn:globalThis.litElementVersions=[]).push("3.3.2");var $a=globalThis&&globalThis.__esDecorate||function(t,e,n,r,i,s){function o(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var a=r.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!e&&t?r.static?t:t.prototype:null,u=e||(c?Object.getOwnPropertyDescriptor(c,r.name):{}),h,d=!1,f=n.length-1;f>=0;f--){var m={};for(var p in r)m[p]=p==="access"?{}:r[p];for(var p in r.access)m.access[p]=r.access[p];m.addInitializer=function(g){if(d)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(g||null))};var v=(0,n[f])(a==="accessor"?{get:u.get,set:u.set}:u[l],m);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(h=o(v.get))&&(u.get=h),(h=o(v.set))&&(u.set=h),(h=o(v.init))&&i.push(h)}else(h=o(v))&&(a==="field"?i.push(h):u[l]=h)}c&&Object.defineProperty(c,r.name,u),d=!0},Aa=globalThis&&globalThis.__runInitializers||function(t,e,n){for(var r=arguments.length>2,i=0;i<e.length;i++)n=r?e[i].call(t,n):e[i].call(t);return r?n:void 0},Ta=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Ca(){function t(e,n){return e}return t}let ws=(()=>{let t=[Ca()],e,n=[],r;return r=class extends gt{},Ta(r,"DeclarativeElement"),$a(null,e={value:r},t,{kind:"class",name:r.name},null,n),r=e.value,Aa(r,n),r})();function _s(t){if(an(t))return zt(t,(n,r)=>{if(!Et(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Yo(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?ee(n):n.startsWith("-")?pt`-${ee(n)}`:pt`--${ee(n)}`;return{name:o,value:pt`var(${o}, ${ee(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${_s.name}' function.`)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pa=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Ss(t){return(e,n)=>n!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(t,e,n):Pa(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dn;((Dn=window.HTMLSlotElement)===null||Dn===void 0?void 0:Dn.prototype.assignedElements)!=null;const Xn=Symbol("this-is-an-element-vir-declarative-element"),Kr=Symbol("key for ignoring inputs not having been set yet"),Ra={[Kr]:!0,allowPolymorphicState:!1};function xs(t,e){const n=t.instanceState;ie(e).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[r]=e[r]:t[r]=e[r]}),"instanceInputs"in t&&ie(t.instanceInputs).forEach(r=>{r in e||(t.instanceInputs[r]=void 0)}),Es(t)}function Es(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function $s(t,e){return Qn(t,e),t.element}function Qn(t,e){if(t.type!==ds.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function Hr(t,e){return e?Ci(t,e):Ci(void 0,t)}const Ci=Br(class extends Sn{constructor(t){super(t),this.element=$s(t,"assign")}render(t,e){return ka(t,this.element,e),me}});function ka(t,e,n){xs(e,n)}function As(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof ws?!0:As(n)}function Pi(t,e){const n=[t,"-"].join("");Object.keys(e).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${t}': CSS property names must begin with the element's tag name.`)})}class Na extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ts(){return t=>{var e;return e=class extends Na{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function Xt(){return Ts()}function Da(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ts()(n);return e[n]=r,e},{}):{}}const Zn="_is_element_vir_observable_property_handler_instance",er="_is_element_vir_observable_property_handler_creator";function za(t){return Se(t,er)&&t[er]===!0}function Oa(t){return Se(t,Zn)&&t[Zn]===!0}function Ia(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Ri(t,e){const n=t;function r(o){e?Ia(o,t,t.tagName):Ss()(t,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set:(o,a,l)=>{r(a);const c=t.observablePropertyHandlerMap[a];function u(h){o[a]=h,n[a]=h}return za(l)&&(l=l.init()),Oa(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,h=>{u(h)}),t.observablePropertyHandlerMap[a]=l):c?c.setValue(l):u(l),!0},ownKeys:o=>Reflect.ownKeys(o),getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has:(o,a)=>Reflect.has(o,a)})}function La(t){return t?zt(t,e=>e):{}}function Ba({hostClassNames:t,cssVars:e}){return{hostClasses:zt(t,(n,r)=>({name:ee(r),selector:ee(`:host(.${r})`)})),cssVars:e}}function Ma({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:i}){e&&ie(e).forEach(s=>{const o=e[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?t.classList.add(a):t.classList.remove(a))})}function ja(t,e){function n(i){ie(i).forEach(s=>{const o=i[s];t.instanceState[s]=o})}return{dispatch:i=>t.dispatchEvent(i),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Fa=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Ur(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const n={...Ra,...t.options},r=Da(t.events),i=La(t.hostClasses);t.hostClasses&&Pi(t.tagName,t.hostClasses),t.cssVars&&Pi(t.tagName,t.cssVars);const s=t.cssVars?_s(t.cssVars):{},o=typeof t.styles=="function"?t.styles(Ba({hostClassNames:i,cssVars:s})):t.styles||pt``,a=t.renderCallback,l=(e=class extends ws{createRenderParams(){return ja(this,r)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Es(this)}render(){try{As(this)&&!this.haveInputsBeenSet&&!n[Kr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${Hr.name}" directive on it. If no inputs are intended, use "${Ur.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const u=a(c);return Ma({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},u}catch(c){const u=ze(c);throw u.message=`Failed to render '${t.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){xs(this,c)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Ri(this,!1),this.instanceState=Ri(this,!((u=t.options)!=null&&u.allowPolymorphicState));const c=t.stateInitStatic||{};ie(c).forEach(h=>{Ss()(this,h),this.instanceState[h]=c[h]}),this.definition=l}},Fa(e,"anonymousClass"),e.tagName=t.tagName,e.styles=o,e.isStrictInstance=()=>!1,e.events=r,e.renderCallback=a,e.hostClasses=i,e.cssVars=s,e.stateInitStatic=t.stateInitStatic,e);return Object.defineProperties(l,{[Xn]:{value:!0,writable:!1},name:{value:qo(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,l),l}function Cs(){return t=>Ur({...t,options:{[Kr]:!1,...t.options}})}var Ps;const G=Symbol("not set");class Ka{constructor(e){this.lastTrigger=G,this.resolutionValue=G,this.rejectionError=G,this.listeners=new Set,this.waitingForValuePromise=tt(),this[Ps]=!0,this.resetValue(e)}resetValue(e){this.resetWaitingForValuePromise(),e!==G&&(e instanceof Promise?this.setValue({newPromise:e}):this.setValue({resolvedValue:e}))}fireListeners(){const e=this.getValue();this.listeners.forEach(n=>{n(e)})}setPromise(e){e!==this.lastSetPromise&&(this.resolutionValue=G,this.rejectionError=G,this.lastSetPromise=e,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),e.then(n=>{this.lastSetPromise===e&&this.resolveValue(n)}).catch(n=>{this.lastSetPromise===e&&(this.rejectionError=ze(n),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(n),this.fireListeners())}))}resolveValue(e){e!==this.resolutionValue&&(this.rejectionError=G,this.resolutionValue=e,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(e),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=tt()}setValue(e){if("createPromise"in e){if(this.lastTrigger===G||!Ir(e.trigger,this.lastTrigger)){this.lastTrigger=e.trigger;const n=e.createPromise();this.setPromise(n),this.fireListeners()}}else"newPromise"in e?(this.lastTrigger,this.setPromise(e.newPromise),this.fireListeners()):"resolvedValue"in e?this.resolveValue(e.resolvedValue):"forceUpdate"in e?(this.lastTrigger=G,this.resolutionValue=G,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners()):this.resetValue(e)}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==G)return this.rejectionError;if(this.resolutionValue===G)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(e,n){this.listeners.add(n),e&&n(this.getValue())}addMultipleListeners(e){e.forEach(n=>this.listeners.add(n))}getAllListeners(){return this.listeners}removeListener(e){return this.listeners.has(e)?(this.listeners.delete(e),!0):!1}removeAllListeners(){const e=this.listeners.size;return this.listeners.clear(),e}}Ps=Zn;function Rs(...t){const e=oa(t,1)?t[0]:G;return{[er]:!0,init(){return new Ka(e)}}}function yt(t,e){return Ha(t,e)}const Ha=Br(class extends Sn{constructor(t){super(t),this.element=$s(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),me}}),ki="onDomCreated",Ni=Br(class extends Sn{constructor(t){super(t),Qn(t,ki)}update(t,[e]){Qn(t,ki);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function tr(t,e,n,r){return t instanceof Error?r?r(t):Or(t):ra(t)?e:n?n(t):t}function Di(t,e,n){return Sa(t,()=>e,()=>n)}function Ua(t){const{assertInputs:e,transformInputs:n}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(r=>r)};return{defineElement:()=>r=>(e(r),Cs()(n(r))),defineElementNoInputs:r=>(e(r),Ur(n(r)))}}function Wa(t,e){return t.filter((n,r)=>!e.includes(r))}function ks(t){return t.filter(e=>Qo(e,["tagName",Xn])&&!!e.tagName&&!!e[Xn])}const Ns=new WeakMap;function Va(t,e){var i;const n=ks(e);return(i=Ds(Ns,[t,...n]).value)==null?void 0:i.template}function qa(t,e,n){const r=ks(e);return Os(Ns,[t,...r],n)}function Ds(t,e,n=0){const{currentTemplateAndNested:r,reason:i}=zs(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Ds(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function zs(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=t.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Os(t,e,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=zs(t,e,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||t.set(s,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),Os(l,e,n,r+1)}function Is(t,e,n){return{name:t,check:e,transform:n}}const Ya=new WeakMap;function Ls(t,e,n){const r=Va(t,e),i=r??n();if(!r){const o=qa(t,e,i);if(o.result)Ya.set(t,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=Wa(e,i.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Bs(t,e,n,r){const i=[],s=[],o=[];return t.forEach((l,c)=>{var v;const u=i.length-1,h=i[u],d=c-1,f=e[d];let m;r&&r(l),typeof h=="string"&&(m=(v=n.find(g=>g.check(h,l,f)))==null?void 0:v.transform,m&&(i[u]=h+m(f)+l,o.push(d))),m||i.push(l);const p=t.raw[c];m?s[u]=s[u]+m(f)+p:s.push(p)}),{templateStrings:Object.assign([],i,{raw:s}),valueIndexDeletions:o}}function Ms(t){return Se(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Ja=[Is("tag name css selector interpolation",(t,e,n)=>Ms(n),t=>t.tagName)];function Ga(t,e){return Bs(t,e,Ja)}function Ge(t,...e){const n=Ls(t,e,()=>Ga(t,e));return pt(n.strings,...n.values)}const Xa=[Is("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),i=Ms(n);if(r&&!i)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&i},t=>t.tagName)];function Qa(t){}function Za(t){return Bs(t.strings,t.values,Xa,Qa)}function F(t,...e){const n=fa(t,...e),r=Ls(t,e,()=>Za(n));return{...n,strings:r.strings,values:r.values}}function el(t,e){return t<e}function tl(t,e){return t>e}const zi={width:250,height:250};function nl({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?tl:el)(e.width/e.height,t.width/t.height)?"width":"height"}function zn({box:t,constraint:e,constraintType:n}){const r=nl({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function js({box:t,ratio:e}){return zt(t,(n,r)=>r*e)}function nr({box:t,min:e,max:n}){return zt(t,(r,i)=>Jo({value:i,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Fs({min:t,max:e,box:n}){const r=Ks({min:t,max:e,box:n}),i=js({box:n,ratio:r});return{height:Math.floor(i.height||(t==null?void 0:t.height)||zi.height),width:Math.floor(i.width||(t==null?void 0:t.width)||zi.width)}}function Ks({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?zn({box:n,constraint:t,constraintType:"min"}):1,i=e?zn({box:n,constraint:e,constraintType:"max"}):1,s=r>1?r:i<1?i:1,o=js({ratio:s,box:n});return(t?zn({box:o,constraint:t,constraintType:"min"}):1)>1?r:s}function Ne(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],s=(e??[""]).map((o,a)=>{const l=rl(o,r[a]);return`${o}${l}`});return zr(s.join(""))}function rl(t,e){return e._$litType$!=null||e._$litDirective$!=null?Ne(e):Array.isArray(e)?e.map(r=>Ne(r)).join(""):t.endsWith("=")?`"${e}"`:e}function il(t){const e=sl(t);return Et(e,"object")||Et(e,"array")}function sl(t){const e=mi({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=ol(t);return mi({jsonString:n,errorHandler:()=>{}})}function ol(t){return zr(t).replace(/,\s*([}\]])/,"$1")}const Wr="vir-resizable-image";function al(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var it=al();function ll(){try{if(!it||!it.open)return!1;var t=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),e=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!t||e)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Vr(t,e){t=t||[],e=e||{};try{return new Blob(t,e)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<t.length;i+=1)r.append(t[i]);return r.getBlob(e.type)}}typeof Promise>"u"&&require("lie/polyfill");const T=Promise;function k(t,e){e&&t.then(function(n){e(null,n)},function(n){e(n)})}function Ye(t,e,n){typeof e=="function"&&t.then(e),typeof n=="function"&&t.catch(n)}function ge(t){return typeof t!="string"&&(console.warn(`${t} used as a key, but it is not a string.`),t=String(t)),t}function qr(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const rr="local-forage-detect-blob-support";let jt;const te={},cl=Object.prototype.toString,Ot="readonly",En="readwrite";function ul(t){for(var e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n),i=0;i<e;i++)r[i]=t.charCodeAt(i);return n}function hl(t){return new T(function(e){var n=t.transaction(rr,En),r=Vr([""]);n.objectStore(rr).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),e(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);e(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function dl(t){return typeof jt=="boolean"?T.resolve(jt):hl(t).then(function(e){return jt=e,jt})}function hn(t){var e=te[t.name],n={};n.promise=new T(function(r,i){n.resolve=r,n.reject=i}),e.deferredOperations.push(n),e.dbReady?e.dbReady=e.dbReady.then(function(){return n.promise}):e.dbReady=n.promise}function ir(t){var e=te[t.name],n=e.deferredOperations.pop();if(n)return n.resolve(),n.promise}function sr(t,e){var n=te[t.name],r=n.deferredOperations.pop();if(r)return r.reject(e),r.promise}function Hs(t,e){return new T(function(n,r){if(te[t.name]=te[t.name]||qs(),t.db)if(e)hn(t),t.db.close();else return n(t.db);var i=[t.name];e&&i.push(t.version);var s=it.open.apply(it,i);e&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(t.storeName),o.oldVersion<=1&&a.createObjectStore(rr)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+t.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+t.storeName+'" already exists.');else throw l}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),ir(t)}})}function Yr(t){return Hs(t,!1)}function Jr(t){return Hs(t,!0)}function Us(t,e){if(!t.db)return!0;var n=!t.db.objectStoreNames.contains(t.storeName),r=t.version<t.db.version,i=t.version>t.db.version;if(r&&(t.version!==e&&console.warn('The database "'+t.name+`" can't be downgraded from version `+t.db.version+" to version "+t.version+"."),t.version=t.db.version),i||n){if(n){var s=t.db.version+1;s>t.version&&(t.version=s)}return!0}return!1}function fl(t){return new T(function(e,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");e({__local_forage_encoded_blob:!0,data:s,type:t.type})},r.readAsBinaryString(t)})}function Ws(t){var e=ul(atob(t.data));return Vr([e],{type:t.type})}function Vs(t){return t&&t.__local_forage_encoded_blob}function ml(t){var e=this,n=e._initReady().then(function(){var r=te[e._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return Ye(n,t,t),n}function pl(t){hn(t);for(var e=te[t.name],n=e.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return t.db=null,Yr(t).then(i=>(t.db=i,Us(t)?Jr(t):i)).then(i=>{t.db=e.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw sr(t,i),i})}function ye(t,e,n,r){r===void 0&&(r=1);try{var i=t.db.transaction(t.storeName,e);n(null,i)}catch(s){if(r>0&&(!t.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return T.resolve().then(()=>{if(!t.db||s.name==="NotFoundError"&&!t.db.objectStoreNames.contains(t.storeName)&&t.version<=t.db.version)return t.db&&(t.version=t.db.version+1),Jr(t)}).then(()=>pl(t).then(function(){ye(t,e,n,r-1)})).catch(n);n(s)}}function qs(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function gl(t){var e=this,n={db:null};if(t)for(var r in t)n[r]=t[r];var i=te[n.name];i||(i=qs(),te[n.name]=i),i.forages.push(e),e._initReady||(e._initReady=e.ready,e.ready=ml);var s=[];function o(){return T.resolve()}for(var a=0;a<i.forages.length;a++){var l=i.forages[a];l!==e&&s.push(l._initReady().catch(o))}var c=i.forages.slice(0);return T.all(s).then(function(){return n.db=i.db,Yr(n)}).then(function(u){return n.db=u,Us(n,e._defaultConfig.version)?Jr(n):u}).then(function(u){n.db=i.db=u,e._dbInfo=n;for(var h=0;h<c.length;h++){var d=c[h];d!==e&&(d._dbInfo.db=n.db,d._dbInfo.version=n.version)}})}function yl(t,e){var n=this;t=ge(t);var r=new T(function(i,s){n.ready().then(function(){ye(n._dbInfo,Ot,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.get(t);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),Vs(u)&&(u=Ws(u)),i(u)},c.onerror=function(){s(c.error)}}catch(u){s(u)}})}).catch(s)});return k(r,e),r}function vl(t,e){var n=this,r=new T(function(i,s){n.ready().then(function(){ye(n._dbInfo,Ot,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var h=c.result;if(h){var d=h.value;Vs(d)&&(d=Ws(d));var f=t(d,h.key,u++);f!==void 0?i(f):h.continue()}else i()},c.onerror=function(){s(c.error)}}catch(h){s(h)}})}).catch(s)});return k(r,e),r}function bl(t,e,n){var r=this;t=ge(t);var i=new T(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,cl.call(e)==="[object Blob]"?dl(a.db).then(function(l){return l?e:fl(e)}):e}).then(function(l){ye(r._dbInfo,En,function(c,u){if(c)return o(c);try{var h=u.objectStore(r._dbInfo.storeName);l===null&&(l=void 0);var d=h.put(l,t);u.oncomplete=function(){l===void 0&&(l=null),s(l)},u.onabort=u.onerror=function(){var f=d.error?d.error:d.transaction.error;o(f)}}catch(f){o(f)}})}).catch(o)});return k(i,n),i}function wl(t,e){var n=this;t=ge(t);var r=new T(function(i,s){n.ready().then(function(){ye(n._dbInfo,En,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=l.delete(t);a.oncomplete=function(){i()},a.onerror=function(){s(c.error)},a.onabort=function(){var u=c.error?c.error:c.transaction.error;s(u)}}catch(u){s(u)}})}).catch(s)});return k(r,e),r}function _l(t){var e=this,n=new T(function(r,i){e.ready().then(function(){ye(e._dbInfo,En,function(s,o){if(s)return i(s);try{var a=o.objectStore(e._dbInfo.storeName),l=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var c=l.error?l.error:l.transaction.error;i(c)}}catch(c){i(c)}})}).catch(i)});return k(n,t),n}function Sl(t){var e=this,n=new T(function(r,i){e.ready().then(function(){ye(e._dbInfo,Ot,function(s,o){if(s)return i(s);try{var a=o.objectStore(e._dbInfo.storeName),l=a.count();l.onsuccess=function(){r(l.result)},l.onerror=function(){i(l.error)}}catch(c){i(c)}})}).catch(i)});return k(n,t),n}function xl(t,e){var n=this,r=new T(function(i,s){if(t<0){i(null);return}n.ready().then(function(){ye(n._dbInfo,Ot,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var h=u.result;if(!h){i(null);return}t===0||c?i(h.key):(c=!0,h.advance(t))},u.onerror=function(){s(u.error)}}catch(h){s(h)}})}).catch(s)});return k(r,e),r}function El(t){var e=this,n=new T(function(r,i){e.ready().then(function(){ye(e._dbInfo,Ot,function(s,o){if(s)return i(s);try{var a=o.objectStore(e._dbInfo.storeName),l=a.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){r(c);return}c.push(u.key),u.continue()},l.onerror=function(){i(l.error)}}catch(u){i(u)}})}).catch(i)});return k(n,t),n}function $l(t,e){e=qr.apply(this,arguments);var n=this.config();t=typeof t!="function"&&t||{},t.name||(t.name=t.name||n.name,t.storeName=t.storeName||n.storeName);var r=this,i;if(!t.name)i=T.reject("Invalid arguments");else{const o=t.name===n.name&&r._dbInfo.db?T.resolve(r._dbInfo.db):Yr(t).then(a=>{const l=te[t.name],c=l.forages;l.db=a;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=a;return a});t.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(t.storeName))return;const l=a.version+1;hn(t);const c=te[t.name],u=c.forages;a.close();for(let d=0;d<u.length;d++){const f=u[d];f._dbInfo.db=null,f._dbInfo.version=l}return new T((d,f)=>{const m=it.open(t.name,l);m.onerror=p=>{m.result.close(),f(p)},m.onupgradeneeded=()=>{var p=m.result;p.deleteObjectStore(t.storeName)},m.onsuccess=()=>{const p=m.result;p.close(),d(p)}}).then(d=>{c.db=d;for(let f=0;f<u.length;f++){const m=u[f];m._dbInfo.db=d,ir(m._dbInfo)}}).catch(d=>{throw(sr(t,d)||T.resolve()).catch(()=>{}),d})}):i=o.then(a=>{hn(t);const l=te[t.name],c=l.forages;a.close();for(var u=0;u<c.length;u++){const d=c[u];d._dbInfo.db=null}return new T((d,f)=>{var m=it.deleteDatabase(t.name);m.onerror=()=>{const p=m.result;p&&p.close(),f(m.error)},m.onblocked=()=>{console.warn('dropInstance blocked for database "'+t.name+'" until all open connections are closed')},m.onsuccess=()=>{const p=m.result;p&&p.close(),d(p)}}).then(d=>{l.db=d;for(var f=0;f<c.length;f++){const m=c[f];ir(m._dbInfo)}}).catch(d=>{throw(sr(t,d)||T.resolve()).catch(()=>{}),d})})}return k(i,e),i}var Al={_driver:"asyncStorage",_initStorage:gl,_support:ll(),iterate:vl,getItem:yl,setItem:bl,removeItem:wl,clear:_l,length:Sl,key:xl,keys:El,dropInstance:$l};function Tl(){return typeof openDatabase=="function"}var _e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Cl="~~local_forage_type~",Oi=/^~~local_forage_type~([^~]+)~/,dn="__lfsc__:",or=dn.length,Gr="arbf",ar="blob",Ys="si08",Js="ui08",Gs="uic8",Xs="si16",Qs="si32",Zs="ur16",eo="ui32",to="fl32",no="fl64",Ii=or+Gr.length,Li=Object.prototype.toString;function ro(t){var e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);var c=new ArrayBuffer(e),u=new Uint8Array(c);for(r=0;r<n;r+=4)s=_e.indexOf(t[r]),o=_e.indexOf(t[r+1]),a=_e.indexOf(t[r+2]),l=_e.indexOf(t[r+3]),u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c}function lr(t){var e=new Uint8Array(t),n="",r;for(r=0;r<e.length;r+=3)n+=_e[e[r]>>2],n+=_e[(e[r]&3)<<4|e[r+1]>>4],n+=_e[(e[r+1]&15)<<2|e[r+2]>>6],n+=_e[e[r+2]&63];return e.length%3===2?n=n.substring(0,n.length-1)+"=":e.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function Pl(t,e){var n="";if(t&&(n=Li.call(t)),t&&(n==="[object ArrayBuffer]"||t.buffer&&Li.call(t.buffer)==="[object ArrayBuffer]")){var r,i=dn;t instanceof ArrayBuffer?(r=t,i+=Gr):(r=t.buffer,n==="[object Int8Array]"?i+=Ys:n==="[object Uint8Array]"?i+=Js:n==="[object Uint8ClampedArray]"?i+=Gs:n==="[object Int16Array]"?i+=Xs:n==="[object Uint16Array]"?i+=Zs:n==="[object Int32Array]"?i+=Qs:n==="[object Uint32Array]"?i+=eo:n==="[object Float32Array]"?i+=to:n==="[object Float64Array]"?i+=no:e(new Error("Failed to get type for BinaryArray"))),e(i+lr(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=Cl+t.type+"~"+lr(this.result);e(dn+ar+o)},s.readAsArrayBuffer(t)}else try{e(JSON.stringify(t))}catch(o){console.error("Couldn't convert value into a JSON string: ",t),e(null,o)}}function Rl(t){if(t.substring(0,or)!==dn)return JSON.parse(t);var e=t.substring(Ii),n=t.substring(or,Ii),r;if(n===ar&&Oi.test(e)){var i=e.match(Oi);r=i[1],e=e.substring(i[0].length)}var s=ro(e);switch(n){case Gr:return s;case ar:return Vr([s],{type:r});case Ys:return new Int8Array(s);case Js:return new Uint8Array(s);case Gs:return new Uint8ClampedArray(s);case Xs:return new Int16Array(s);case Zs:return new Uint16Array(s);case Qs:return new Int32Array(s);case eo:return new Uint32Array(s);case to:return new Float32Array(s);case no:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var Xr={serialize:Pl,deserialize:Rl,stringToBuffer:ro,bufferToString:lr};function io(t,e,n,r){t.executeSql(`CREATE TABLE IF NOT EXISTS ${e.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function kl(t){var e=this,n={db:null};if(t)for(var r in t)n[r]=typeof t[r]!="string"?t[r].toString():t[r];var i=new T(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){io(a,n,function(){e._dbInfo=n,s()},function(l,c){o(c)})},o)});return n.serializer=Xr,i}function Ae(t,e,n,r,i,s){t.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[e.storeName],function(l,c){c.rows.length?s(l,a):io(l,e,function(){l.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function Nl(t,e){var n=this;t=ge(t);var r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[t],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=o.serializer.deserialize(u)),i(u)},function(l,c){s(c)})})}).catch(s)});return k(r,e),r}function Dl(t,e){var n=this,r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`SELECT * FROM ${o.storeName}`,[],function(l,c){for(var u=c.rows,h=u.length,d=0;d<h;d++){var f=u.item(d),m=f.value;if(m&&(m=o.serializer.deserialize(m)),m=t(m,f.key,d+1),m!==void 0){i(m);return}}i()},function(l,c){s(c)})})}).catch(s)});return k(r,e),r}function so(t,e,n,r){var i=this;t=ge(t);var s=new T(function(o,a){i.ready().then(function(){e===void 0&&(e=null);var l=e,c=i._dbInfo;c.serializer.serialize(e,function(u,h){h?a(h):c.db.transaction(function(d){Ae(d,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[t,u],function(){o(l)},function(f,m){a(m)})},function(d){if(d.code===d.QUOTA_ERR){if(r>0){o(so.apply(i,[t,l,n,r-1]));return}a(d)}})})}).catch(a)});return k(s,n),s}function zl(t,e,n){return so.apply(this,[t,e,n,1])}function Ol(t,e){var n=this;t=ge(t);var r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[t],function(){i()},function(l,c){s(c)})})}).catch(s)});return k(r,e),r}function Il(t){var e=this,n=new T(function(r,i){e.ready().then(function(){var s=e._dbInfo;s.db.transaction(function(o){Ae(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,l){i(l)})})}).catch(i)});return k(n,t),n}function Ll(t){var e=this,n=new T(function(r,i){e.ready().then(function(){var s=e._dbInfo;s.db.transaction(function(o){Ae(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,l){var c=l.rows.item(0).c;r(c)},function(a,l){i(l)})})}).catch(i)});return k(n,t),n}function Bl(t,e){var n=this,r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[t+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;i(u)},function(l,c){s(c)})})}).catch(s)});return k(r,e),r}function Ml(t){var e=this,n=new T(function(r,i){e.ready().then(function(){var s=e._dbInfo;s.db.transaction(function(o){Ae(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);r(c)},function(a,l){i(l)})})}).catch(i)});return k(n,t),n}function jl(t){return new T(function(e,n){t.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);e({db:t,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function Fl(t,e){e=qr.apply(this,arguments);var n=this.config();t=typeof t!="function"&&t||{},t.name||(t.name=t.name||n.name,t.storeName=t.storeName||n.storeName);var r=this,i;return t.name?i=new T(function(s){var o;t.name===n.name?o=r._dbInfo.db:o=openDatabase(t.name,"","",0),t.storeName?s({db:o,storeNames:[t.storeName]}):s(jl(o))}).then(function(s){return new T(function(o,a){s.db.transaction(function(l){function c(f){return new T(function(m,p){l.executeSql(`DROP TABLE IF EXISTS ${f}`,[],function(){m()},function(v,g){p(g)})})}for(var u=[],h=0,d=s.storeNames.length;h<d;h++)u.push(c(s.storeNames[h]));T.all(u).then(function(){o()}).catch(function(f){a(f)})},function(l){a(l)})})}):i=T.reject("Invalid arguments"),k(i,e),i}var Kl={_driver:"webSQLStorage",_initStorage:kl,_support:Tl(),iterate:Dl,getItem:Nl,setItem:zl,removeItem:Ol,clear:Il,length:Ll,key:Bl,keys:Ml,dropInstance:Fl};function Hl(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function oo(t,e){var n=t.name+"/";return t.storeName!==e.storeName&&(n+=t.storeName+"/"),n}function Ul(){var t="_localforage_support_test";try{return localStorage.setItem(t,!0),localStorage.removeItem(t),!1}catch{return!0}}function Wl(){return!Ul()||localStorage.length>0}function Vl(t){var e=this,n={};if(t)for(var r in t)n[r]=t[r];return n.keyPrefix=oo(t,e._defaultConfig),Wl()?(e._dbInfo=n,n.serializer=Xr,T.resolve()):T.reject()}function ql(t){var e=this,n=e.ready().then(function(){for(var r=e._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return k(n,t),n}function Yl(t,e){var n=this;t=ge(t);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+t);return s&&(s=i.serializer.deserialize(s)),s});return k(r,e),r}function Jl(t,e){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,l=1,c=0;c<a;c++){var u=localStorage.key(c);if(u.indexOf(s)===0){var h=localStorage.getItem(u);if(h&&(h=i.serializer.deserialize(h)),h=t(h,u.substring(o),l++),h!==void 0)return h}}});return k(r,e),r}function Gl(t,e){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(t)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return k(r,e),r}function Xl(t){var e=this,n=e.ready().then(function(){for(var r=e._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return k(n,t),n}function Ql(t){var e=this,n=e.keys().then(function(r){return r.length});return k(n,t),n}function Zl(t,e){var n=this;t=ge(t);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+t)});return k(r,e),r}function ec(t,e,n){var r=this;t=ge(t);var i=r.ready().then(function(){e===void 0&&(e=null);var s=e;return new T(function(o,a){var l=r._dbInfo;l.serializer.serialize(e,function(c,u){if(u)a(u);else try{localStorage.setItem(l.keyPrefix+t,c),o(s)}catch(h){(h.name==="QuotaExceededError"||h.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(h),a(h)}})})});return k(i,n),i}function tc(t,e){if(e=qr.apply(this,arguments),t=typeof t!="function"&&t||{},!t.name){var n=this.config();t.name=t.name||n.name,t.storeName=t.storeName||n.storeName}var r=this,i;return t.name?i=new T(function(s){t.storeName?s(oo(t,r._defaultConfig)):s(`${t.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=T.reject("Invalid arguments"),k(i,e),i}var nc={_driver:"localStorageWrapper",_initStorage:Vl,_support:Hl(),iterate:Jl,getItem:Yl,setItem:ec,removeItem:Zl,clear:ql,length:Ql,key:Gl,keys:Xl,dropInstance:tc};const rc=(t,e)=>t===e||typeof t=="number"&&typeof e=="number"&&isNaN(t)&&isNaN(e),ic=(t,e)=>{const n=t.length;let r=0;for(;r<n;){if(rc(t[r],e))return!0;r++}return!1},ao=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"},ut={},Bi={},Xe={INDEXEDDB:Al,WEBSQL:Kl,LOCALSTORAGE:nc},sc=[Xe.INDEXEDDB._driver,Xe.WEBSQL._driver,Xe.LOCALSTORAGE._driver],Qt=["dropInstance"],On=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Qt),oc={description:"",driver:sc.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ac(t,e){t[e]=function(){const n=arguments;return t.ready().then(function(){return t[e].apply(t,n)})}}function In(){for(let t=1;t<arguments.length;t++){const e=arguments[t];if(e)for(let n in e)e.hasOwnProperty(n)&&(ao(e[n])?arguments[0][n]=e[n].slice():arguments[0][n]=e[n])}return arguments[0]}class Qr{constructor(e){for(let n in Xe)if(Xe.hasOwnProperty(n)){const r=Xe[n],i=r._driver;this[n]=i,ut[i]||this.defineDriver(r)}this._defaultConfig=In({},oc),this._config=In({},this._defaultConfig,e),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(e){if(typeof e=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in e){if(n==="storeName"&&(e[n]=e[n].replace(/\W/g,"_")),n==="version"&&typeof e[n]!="number")return new Error("Database version must be a number.");this._config[n]=e[n]}return"driver"in e&&e.driver?this.setDriver(this._config.driver):!0}else return typeof e=="string"?this._config[e]:this._config}defineDriver(e,n,r){const i=new T(function(s,o){try{const a=e._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver){o(l);return}const c=On.concat("_initStorage");for(let d=0,f=c.length;d<f;d++){const m=c[d];if((!ic(Qt,m)||e[m])&&typeof e[m]!="function"){o(l);return}}(function(){const d=function(f){return function(){const m=new Error(`Method ${f} is not implemented by the current driver`),p=T.reject(m);return k(p,arguments[arguments.length-1]),p}};for(let f=0,m=Qt.length;f<m;f++){const p=Qt[f];e[p]||(e[p]=d(p))}})();const h=function(d){ut[a]&&console.info(`Redefining LocalForage driver: ${a}`),ut[a]=e,Bi[a]=d,s()};"_support"in e?e._support&&typeof e._support=="function"?e._support().then(h,o):h(!!e._support):h(!0)}catch(a){o(a)}});return Ye(i,n,r),i}driver(){return this._driver||null}getDriver(e,n,r){const i=ut[e]?T.resolve(ut[e]):T.reject(new Error("Driver not found."));return Ye(i,n,r),i}getSerializer(e){const n=T.resolve(Xr);return Ye(n,e),n}ready(e){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return Ye(r,e,e),r}setDriver(e,n,r){const i=this;ao(e)||(e=[e]);const s=this._getSupportedDrivers(e);function o(){i._config.driver=i.driver()}function a(u){return i._extend(u),o(),i._ready=i._initStorage(i._config),i._ready}function l(u){return function(){let h=0;function d(){for(;h<u.length;){let m=u[h];return h++,i._dbInfo=null,i._ready=null,i.getDriver(m).then(a).catch(d)}o();const f=new Error("No available storage method found.");return i._driverSet=T.reject(f),i._driverSet}return d()}}const c=this._driverSet!==null?this._driverSet.catch(()=>T.resolve()):T.resolve();return this._driverSet=c.then(()=>{const u=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(u).then(h=>{i._driver=h._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=l(s)})}).catch(()=>{o();const u=new Error("No available storage method found.");return i._driverSet=T.reject(u),i._driverSet}),Ye(this._driverSet,n,r),this._driverSet}supports(e){return!!Bi[e]}_extend(e){In(this,e)}_getSupportedDrivers(e){const n=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let e=0,n=On.length;e<n;e++)ac(this,On[e])}createInstance(e){return new Qr(e)}}const lc=new Qr,cc=lc;async function lo(){return await caches.open(Wr)}async function uc(t){return await(await lo()).match(t)}const Mi=cc.createInstance({name:Wr});async function hc(t,e){await(await lo()).put(t,e)}const Ln=new Map;async function dc(t,e){var r;if(!Ln.has(t)){const i=tt();Ln.set(t,i.promise);try{const s=new Request(t),o=e?await uc(s):void 0,a=o??await fetch(s),l=e?await Mi.getItem(t)??void 0:void 0,c=l??{contentType:((r=a.headers.get("Content-Type"))==null?void 0:r.toLowerCase())||"",ok:a.ok,text:await a.clone().text()??""};if(!l&&e)try{Mi.setItem(t,c)}catch{}const u={blobUrl:URL.createObjectURL(await a.clone().blob()),...c};if(!o&&e)try{hc(s,a)}catch{}i.resolve(u)}catch(s){throw i.reject(s),s}}const n=await Ln.get(t);if(!n)throw new Error("Stored a cached response but couldn't find it afterwards.");return n}var R=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(R||{});const fc=["text","json"];function ji(t){return fc.includes(t)}async function mc(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":il(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function pc({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Ne(F`
            <img src=${n} />
        `):t==="video"?Ne(F`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Ne(F`
                <div class="text-wrapper">
                    <p class="text">
                        ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):t==="audio"?Ne(F`
                <audio controls src=${n}></audio>
            `):e}function gc(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}else if(e==="html")return t.replaceAll(/console\.\w+/g,"doNothing");return t}async function Fi({imageUrl:t,blockAutoPlay:e,textTransformer:n=i=>i,allowPersistentCache:r}){const i=await dc(t,r);if(!i.ok)throw new Error(`Failed to load '${t}'`);const s=await mc(i.contentType,i.text),o=n(gc(i.text,s));return{templateString:pc({imageText:o,imageType:s,imageUrl:i.blobUrl,blockAutoPlay:e}),imageUrl:i.blobUrl,imageType:s}}class cr extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let yc=!1;function vc(){return yc}var Me;(function(t){t.FromParent="from-parent",t.FromChild="from-child"})(Me||(Me={}));const Re=Symbol("any-origin");function co(t,e){try{return bc(t,e),!0}catch{return!1}}function bc(t,e){if(t===Re)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}const wc=Symbol("dangerDisableSecurityWarningsSymbol");function _c(t,e,n){return n.type===t&&n.direction===e}function Sc(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function xc({message:t,verifyChildData:e,iframeElement:n},r,i,s){if(!n)throw new Error("No iframe element was provided.");let o=0,a=!1,l,c,u,h=!1;const d={...t,direction:Me.FromParent,messageId:ca(32)},f=t.type,m=r===Re?["*"]:r;function p(g){try{if(!co(r,g))return;const y=g.data;if(y.type==="error")throw new Error(`Child threw an error: ${y.data}`);if(vc(),y&&h&&_c(f,Me.FromChild,y)&&y.messageId===d.messageId){let b=!1;try{b=e?e(y.data):!0}catch{}if(!b)return;a=!0,c=g,l=y}}catch(y){u=ze(y)}}globalThis.addEventListener("message",p);const v=Date.now();for(;!a&&Date.now()-v<i&&!u;){if(!n.isConnected)throw new cr;const g=n.contentWindow;g&&(h=!0,m.forEach(y=>{try{g.postMessage(d,{targetOrigin:y})}catch{}})),await ln(s||Sc(o)),o++}if(globalThis.removeEventListener("message",p),u)throw u;if(!a)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${Math.ceil(i/1e3)}' seconds).`);if(!c)throw new Error("Never got message event from child but received a valid response");return{data:l==null?void 0:l.data,event:c}}function uo({allowedOrigins:t,timeoutMs:e=1e4,...n}){if(t!==Re&&t.includes("*")&&(t=Re),t===Re&&!n[wc]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==Re&&!t.length)throw new Error(`No allowed origins were provide to ${uo.name}. At least one must be provided.`);const r=t===Re?["*"]:t;return{async sendMessageToChild(i){if(i.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await xc(i,t,i.timeoutMs||e,i.intervalMs)},listenForParentMessages(i){globalThis.addEventListener("message",async s=>{if(!co(t,s))return;const o=s.data,a=await i({...o,originalEvent:s}),l={type:o.type,direction:Me.FromChild,data:a,messageId:o.messageId};r.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}var Z=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Z||{}),H=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(H||{});const ce=uo({allowedOrigins:[window.location.origin]});async function Ec(t,e){const n=tt();t.onload=()=>{n.resolve()};try{await ce.sendMessageToChild({message:{type:H.Ready},iframeElement:t,timeoutMs:e})}catch{await n.promise,await ce.sendMessageToChild({message:{type:H.Ready},iframeElement:t,timeoutMs:e})}}async function $c({min:t,max:e,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,forcedOriginalImageSize:o,timeoutMs:a}){var c;await Ec(r,a),s&&await ce.sendMessageToChild({message:{type:H.ForceSize,data:s},iframeElement:r,timeoutMs:a});const l=o??(await ce.sendMessageToChild({message:{type:H.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(u){return!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height}})).data;return await ho({min:t,max:e,imageDimensions:l,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,sendSizeMessage:!0,timeoutMs:a}),((c=r.contentWindow)==null?void 0:c.document.documentElement.outerHTML)??""}async function ho({min:t,max:e,imageDimensions:n,host:r,iframeElement:i,imageData:s,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:l}){const c=r.shadowRoot.querySelector(".frame-constraint");if(!(c instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:t,max:e,box:o??n},h=ji(s.imageType)?nr(u):Fs(u);c.style.width=ne(Math.floor(h.width)),c.style.height=ne(Math.floor(h.height));const d=nr({min:t,max:e,box:h});h.height<d.height?r.classList.add(Z.VerticallyCenter):r.classList.remove(Z.VerticallyCenter),r.style.width=ne(d.width),r.style.height=ne(d.height);const f=Ks({min:t,max:e,box:o??n});if(a){if(f>3?await ce.sendMessageToChild({message:{type:H.SendScalingMethod,data:"pixelated"},iframeElement:i,timeoutMs:l}):await ce.sendMessageToChild({message:{type:H.SendScalingMethod,data:"default"},iframeElement:i,timeoutMs:l}),await ce.sendMessageToChild({message:{type:H.SizeDetermined,data:h},iframeElement:i,timeoutMs:l}),s.imageType===R.Html){const m=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},p={width:f*m.width,height:f*m.height};await ce.sendMessageToChild({message:{type:H.SendScale,data:p},iframeElement:i,timeoutMs:l})}else if(ji(s.imageType)){const m=o??n;if(m.height<h.height){const p=h.width/m.width,v=h.height/m.height,g=Math.min(p,v);await ce.sendMessageToChild({message:{type:H.SendScale,data:{height:g,width:g}},iframeElement:i,timeoutMs:l})}}}}const Ft={x:16,y:8};var Ki=Object.freeze,Ac=Object.defineProperty,Hi=(t,e)=>Ki(Ac(t,"raw",{value:Ki(e||t.slice())})),Ui,Wi;function Tc(t,e,n){const r=Math.random(),i=F(Ui||(Ui=Hi([`
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
    `])),t.imageType,n??"",R.Svg,R.Html,R.Image,R.Video,R.Text,R.Json,R.Audio,Me.FromChild,Me.FromChild,H.Ready,H.SendScale,H.SendScalingMethod,H.SendSize,H.ForceSize,H.SizeDetermined,R.Json,R.Text,Ft.y,R.Audio),s=F(Wi||(Wi=Hi([`
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
    `])),t.imageType,R.Image,R.Svg,R.Video,R.Text,R.Json,R.Text,R.Json,R.Text,R.Json,R.Text,R.Json,Ft.y,Ft.x,R.Text,R.Json,Ft.y,r,e??"",i);return zr(Ne(s)).replace(String(r),`
${t.templateString}
`)}const Cc=1e4,Pc={textTransformer:"textTransformer",extraHtml:"extraHtml"},Rc=Zo(Pc),kc={imageData:Rs(),error:void 0},vt=Cs()({tagName:Wr,stateInitStatic:kc,events:{settled:Xt(),imageDataCalculated:Xt(),errored:Xt()},styles:Ge`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${ee(Z.VerticallyCenter)}) {
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

        :host(.${ee(Z.HideLoading)}) .loading-wrapper,
        :host(.${ee(Z.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${ee(Z.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${ee(Z.HideLoading)}) iframe {
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[Bn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:i,events:s}){const o=e.timeoutMs??Cc,a=t.imageData instanceof Error?t.imageData:t.error;n({imageData:{createPromise:async()=>{if(t.error&&n({error:void 0}),r.classList.remove(Z.HideLoading),i(new s.settled(!1)),r.classList.remove(Z.VerticallyCenter),!e.imageUrl)return new Promise(async(y,b)=>{await ln(o),b(new Error("An imageUrl was never provided to vir-resizable-image."))});const v={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer,allowPersistentCache:!e.blockPersistentCache};let g;try{g=await sa(o,Fi(v))}catch{await ln(1e3);try{g=await Fi(v)}catch(b){throw b}}if(g)return g;throw new Error("no image data result")},trigger:{...na(e,Rc)}}});const l=e.min&&e.max?nr({box:e.min,max:e.max}):e.min,c=e.max,u=e.forcedOriginalImageSize?Fs({min:l,max:c,box:e.forcedOriginalImageSize}):void 0,h=tr(t.imageData,"",v=>(i(new s.imageDataCalculated(v)),v.imageType===R.Pdf?F`
                        <iframe
                            src=${v.imageUrl}
                            ${Ni(async g=>{try{await ho({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:g,imageData:v,imageDimensions:c??{width:500,height:500},max:c,min:l,sendSizeMessage:!1,timeoutMs:o}),r[Bn]="",i(new s.settled(!0)),r.classList.add(Z.HideLoading)}catch(y){const b=ze(y);if(b instanceof cr)return;console.error(b),n({error:b}),i(new s.errored(b))}})}
                        ></iframe>
                    `:F`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${Tc(v,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${Ni(async g=>{try{const y=await $c({min:l,max:c,host:r,iframeElement:g,imageData:v,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:u,timeoutMs:o});r[Bn]=y,i(new s.settled(!0)),r.classList.add(Z.HideLoading)}catch(y){const b=ze(y);if(b instanceof cr)return;console.error(b),n({error:b}),i(new s.errored(b))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),v=>{n({error:v}),i(new s.errored(ze(v)))}),d=tr(t.imageData,Vi,v=>!e.blockInteraction&&[R.Html,R.Video,R.Audio,R.Pdf].includes(v.imageType)?"":Vi,()=>""),f=a?Ge`
                  max-width: 100%;
                  max-height: 100%;
              `:u?Ge`
                  width: ${u.width}px;
                  height: ${u.height}px;
              `:"",m=Ge`
            width: ${(l==null?void 0:l.width)??250}px;
            height: ${(l==null?void 0:l.height)??250}px;
        `,p=F`
            <div class="frame-constraint" style=${f}>${h}</div>
        `;return F`
            ${Di(!a,F`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${m}>
                ${Di(!!a,F`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${a==null?void 0:a.message}</slot>
                        </div>
                    `,p)}
            </div>
            ${d}
        `}}),Vi=F`
    <div class="click-cover"></div>
`,Bn="latest-frame-srcdoc",z=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,M=Object.keys,W=Array.isArray;function Y(t,e){return typeof e!="object"||M(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||z.Promise||(z.Promise=Promise);const Tt=Object.getPrototypeOf,Nc={}.hasOwnProperty;function Q(t,e){return Nc.call(t,e)}function st(t,e){typeof e=="function"&&(e=e(Tt(t))),(typeof Reflect>"u"?M:Reflect.ownKeys)(e).forEach(n=>{de(t,n,e[n])})}const fo=Object.defineProperty;function de(t,e,n,r){fo(t,e,Y(n&&Q(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Qe(t){return{from:function(e){return t.prototype=Object.create(e.prototype),de(t.prototype,"constructor",t),{extend:st.bind(null,t.prototype)}}}}const Dc=Object.getOwnPropertyDescriptor;function Zr(t,e){let n;return Dc(t,e)||(n=Tt(t))&&Zr(n,e)}const zc=[].slice;function fn(t,e,n){return zc.call(t,e,n)}function mo(t,e){return e(t)}function ft(t){if(!t)throw new Error("Assertion Failed")}function po(t){z.setImmediate?setImmediate(t):setTimeout(t,0)}function go(t,e){return t.reduce((n,r,i)=>{var s=e(r,i);return s&&(n[s[0]]=s[1]),n},{})}function fe(t,e){if(Q(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,i=e.length;r<i;++r){var s=fe(t,e[r]);n.push(s)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:fe(a,e.substr(o+1))}}function re(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){ft(typeof n!="string"&&"length"in n);for(var r=0,i=e.length;r<i;++r)re(t,e[r],n[r])}else{var s=e.indexOf(".");if(s!==-1){var o=e.substr(0,s),a=e.substr(s+1);if(a==="")n===void 0?W(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&Q(t,o)||(l=t[o]={}),re(l,a,n)}}else n===void 0?W(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function yo(t){var e={};for(var n in t)Q(t,n)&&(e[n]=t[n]);return e}const Oc=[].concat;function vo(t){return Oc.apply([],t)}const bo="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(vo([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>z[t]),Ic=bo.map(t=>z[t]);go(bo,t=>[t,!0]);let be=null;function It(t){be=typeof WeakMap<"u"&&new WeakMap;const e=ur(t);return be=null,e}function ur(t){if(!t||typeof t!="object")return t;let e=be&&be.get(t);if(e)return e;if(W(t)){e=[],be&&be.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(ur(t[n]))}else if(Ic.indexOf(t.constructor)>=0)e=t;else{const s=Tt(t);for(var i in e=s===Object.prototype?{}:Object.create(s),be&&be.set(t,e),t)Q(t,i)&&(e[i]=ur(t[i]))}return e}const{toString:Lc}={};function hr(t){return Lc.call(t).slice(8,-1)}const dr=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Bc=typeof dr=="symbol"?function(t){var e;return t!=null&&(e=t[dr])&&e.apply(t)}:function(){return null},Je={};function ue(t){var e,n,r,i;if(arguments.length===1){if(W(t))return t.slice();if(this===Je&&typeof t=="string")return[t];if(i=Bc(t)){for(n=[];!(r=i.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const ei=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function wo(t,e){oe=t,_o=e}var _o=()=>!0;const Mc=!new Error("").stack;function Ke(){if(Mc)try{throw Ke.arguments,new Error}catch(t){return t}return new Error}function fr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(_o).map(r=>`
`+r).join("")):""}var So=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ti=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(So),jc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ze(t,e){this._e=Ke(),this.name=t,this.message=e}function xo(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,i)=>i.indexOf(n)===r).join(`
`)}function mn(t,e,n,r){this._e=Ke(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=xo(t,e)}function bt(t,e){this._e=Ke(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=xo(t,e)}Qe(Ze).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+fr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Qe(mn).from(Ze),Qe(bt).from(Ze);var ni=ti.reduce((t,e)=>(t[e]=e+"Error",t),{});const Fc=Ze;var C=ti.reduce((t,e)=>{var n=e+"Error";function r(i,s){this._e=Ke(),this.name=n,i?typeof i=="string"?(this.message=`${i}${s?`
 `+s:""}`,this.inner=s||null):typeof i=="object"&&(this.message=`${i.name} ${i.message}`,this.inner=i):(this.message=jc[e]||n,this.inner=null)}return Qe(r).from(Fc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var qi=So.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Zt=ti.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function N(){}function Ct(t){return t}function Kc(t,e){return t==null||t===Ct?e:function(n){return e(t(n))}}function je(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Hc(t,e){return t===N?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var s=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?je(r,this.onsuccess):r),i&&(this.onerror=this.onerror?je(i,this.onerror):i),s!==void 0?s:n}}function Uc(t,e){return t===N?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?je(n,this.onsuccess):n),r&&(this.onerror=this.onerror?je(r,this.onerror):r)}}function Wc(t,e){return t===N?e:function(n){var r=t.apply(this,arguments);Y(n,r);var i=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?je(i,this.onsuccess):i),s&&(this.onerror=this.onerror?je(s,this.onerror):s),r===void 0?o===void 0?void 0:o:Y(r,o)}}function Vc(t,e){return t===N?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ri(t,e){return t===N?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,i=arguments.length,s=new Array(i);i--;)s[i]=arguments[i];return n.then(function(){return e.apply(r,s)})}return e.apply(this,arguments)}}Zt.ModifyError=mn,Zt.DexieError=Ze,Zt.BulkError=bt;var Pt={};const[mr,pn,pr]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,Tt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,Tt(e),t]})(),Eo=pn&&pn.then,en=mr&&mr.constructor,ii=!!pr;var gr=!1,qc=pr?()=>{pr.then(Kt)}:z.setImmediate?setImmediate.bind(null,Kt):z.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Kt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Kt,0)},wt=function(t,e){mt.push([t,e]),gn&&(qc(),gn=!1)},yr=!0,gn=!0,Oe=[],tn=[],vr=null,br=Ct,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ji,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Ji(t[0],t[1])}catch{}})}},A=et,mt=[],Ie=0,nn=[];function x(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=N,this._lib=!1;var e=this._PSD=A;if(oe&&(this._stackHolder=Ke(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Pt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&_r(this,this._value))}this._state=null,this._value=null,++e.ref,Ao(this,t)}const wr={get:function(){var t=A,e=yn;function n(r,i){var s=!t.global&&(t!==A||e!==yn);const o=s&&!pe();var a=new x((l,c)=>{si(this,new $o(vn(r,t,s,o),vn(i,t,s,o),l,c,t))});return oe&&Po(a,this),a}return n.prototype=Pt,n},set:function(t){de(this,"then",t&&t.prototype===Pt?wr:{get:function(){return t},set:wr.set})}};function $o(t,e,n,r,i){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=i}function Ao(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Lt();n&&typeof n.then=="function"?Ao(t,(i,s)=>{n instanceof x?n._then(i,s):n.then(i,s)}):(t._state=!0,t._value=n,To(t)),r&&Bt()}},_r.bind(null,t))}catch(n){_r(t,n)}}function _r(t,e){if(tn.push(e),t._state===null){var n=t._lib&&Lt();e=br(e),t._state=!1,t._value=e,oe&&e!==null&&typeof e=="object"&&!e._promise&&function(r,i,s){try{r.apply(null,s)}catch(o){i&&i(o)}}(()=>{var r=Zr(e,"stack");e._promise=t,de(e,"stack",{get:()=>gr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Oe.some(i=>i._value===r._value)||Oe.push(r)}(t),To(t),n&&Bt()}}function To(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)si(t,e[n]);var i=t._PSD;--i.ref||i.finalize(),Ie===0&&(++Ie,wt(()=>{--Ie==0&&oi()},[]))}function si(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ie,wt(Yc,[n,t,e])}else t._listeners.push(e)}function Yc(t,e,n){try{vr=e;var r,i=e._value;e._state?r=t(i):(tn.length&&(tn=[]),r=t(i),tn.indexOf(i)===-1&&function(s){for(var o=Oe.length;o;)if(Oe[--o]._value===s._value)return void Oe.splice(o,1)}(e)),n.resolve(r)}catch(s){n.reject(s)}finally{vr=null,--Ie==0&&oi(),--n.psd.ref||n.psd.finalize()}}function Co(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var i,s,o=t._value;o!=null?(i=o.name||"Error",s=o.message||o,r=fr(o,0)):(i=o,s=""),e.push(i+(s?": "+s:"")+r)}return oe&&((r=fr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&Co(t._prev,e,n)),e}function Po(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Kt(){Lt()&&Bt()}function Lt(){var t=yr;return yr=!1,gn=!1,t}function Bt(){var t,e,n;do for(;mt.length>0;)for(t=mt,mt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(mt.length>0);yr=!0,gn=!0}function oi(){var t=Oe;Oe=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=nn.slice(0),n=e.length;n;)e[--n]()}function Ht(t){return new x(Pt,!1,t)}function O(t,e){var n=A;return function(){var r=Lt(),i=A;try{return Ee(n,!0),t.apply(this,arguments)}catch(s){e&&e(s)}finally{Ee(i,!1),r&&Bt()}}}st(x.prototype,{then:wr,_then:function(t,e){si(this,new $o(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Ht(r)):this.then(null,r=>r&&r.name===e?n(r):Ht(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Ht(e)))},stack:{get:function(){if(this._stack)return this._stack;try{gr=!0;var t=Co(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{gr=!1}}},timeout:function(t,e){return t<1/0?new x((n,r)=>{var i=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&de(x.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=Ro(),st(x,{all:function(){var t=ue.apply(null,arguments).map(Ut);return new x(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((i,s)=>x.resolve(i).then(o=>{t[s]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof x)return t;if(t&&typeof t.then=="function")return new x((n,r)=>{t.then(n,r)});var e=new x(Pt,!0,t);return Po(e,vr),e},reject:Ht,race:function(){var t=ue.apply(null,arguments).map(Ut);return new x((e,n)=>{t.map(r=>x.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>yn},newPSD:xe,usePSD:at,scheduler:{get:()=>wt,set:t=>{wt=t}},rejectionMapper:{get:()=>br,set:t=>{br=t}},follow:(t,e)=>new x((n,r)=>xe((i,s)=>{var o=A;o.unhandleds=[],o.onunhandled=s,o.finalize=je(function(){(function(a){function l(){a(),nn.splice(nn.indexOf(l),1)}nn.push(l),++Ie,wt(()=>{--Ie==0&&oi()},[])})(()=>{this.unhandleds.length===0?i():s(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),en&&(en.allSettled&&de(x,"allSettled",function(){const t=ue.apply(null,arguments).map(Ut);return new x(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((i,s)=>x.resolve(i).then(o=>r[s]={status:"fulfilled",value:o},o=>r[s]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),en.any&&typeof AggregateError<"u"&&de(x,"any",function(){const t=ue.apply(null,arguments).map(Ut);return new x((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const i=new Array(r);t.forEach((s,o)=>x.resolve(s).then(a=>e(a),a=>{i[o]=a,--r||n(new AggregateError(i))}))})}));const U={awaits:0,echoes:0,id:0};var Jc=0,rn=[],Mn=0,yn=0,Gc=0;function xe(t,e,n,r){var i=A,s=Object.create(i);s.parent=i,s.ref=0,s.global=!1,s.id=++Gc;var o=et.env;s.env=ii?{Promise:x,PromiseProp:{value:x,configurable:!0,writable:!0},all:x.all,race:x.race,allSettled:x.allSettled,any:x.any,resolve:x.resolve,reject:x.reject,nthen:Yi(o.nthen,s),gthen:Yi(o.gthen,s)}:{},e&&Y(s,e),++i.ref,s.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=at(s,t,n,r);return s.ref===0&&s.finalize(),a}function ot(){return U.id||(U.id=++Jc),++U.awaits,U.echoes+=100,U.id}function pe(){return!!U.awaits&&(--U.awaits==0&&(U.id=0),U.echoes=100*U.awaits,!0)}function Ut(t){return U.echoes&&t&&t.constructor===en?(ot(),t.then(e=>(pe(),e),e=>(pe(),j(e)))):t}function Xc(t){++yn,U.echoes&&--U.echoes!=0||(U.echoes=U.id=0),rn.push(A),Ee(t,!0)}function Qc(){var t=rn[rn.length-1];rn.pop(),Ee(t,!1)}function Ee(t,e){var n=A;if((e?!U.echoes||Mn++&&t===A:!Mn||--Mn&&t===A)||ko(e?Xc.bind(null,t):Qc),t!==A&&(A=t,n===et&&(et.env=Ro()),ii)){var r=et.env.Promise,i=t.env;pn.then=i.nthen,r.prototype.then=i.gthen,(n.global||t.global)&&(Object.defineProperty(z,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject,i.allSettled&&(r.allSettled=i.allSettled),i.any&&(r.any=i.any))}}function Ro(){var t=z.Promise;return ii?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(z,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:pn.then,gthen:t.prototype.then}:{}}function at(t,e,n,r,i){var s=A;try{return Ee(t,!0),e(n,r,i)}finally{Ee(s,!1)}}function ko(t){Eo.call(mr,t)}function vn(t,e,n,r){return typeof t!="function"?t:function(){var i=A;n&&ot(),Ee(e,!0);try{return t.apply(this,arguments)}finally{Ee(i,!1),r&&ko(pe)}}}function Yi(t,e){return function(n,r){return t.call(this,vn(n,e),vn(r,e))}}(""+Eo).indexOf("[native code]")===-1&&(ot=pe=N);function Ji(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,i={promise:e,reason:t};if(z.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),Y(r,i)):z.CustomEvent&&Y(r=new CustomEvent("unhandledrejection",{detail:i}),i),r&&z.dispatchEvent&&(dispatchEvent(r),!z.PromiseRejectionEvent&&z.onunhandledrejection))try{z.onunhandledrejection(r)}catch{}oe&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var j=x.reject;function Sr(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var i=t._createTransaction(e,n,t._dbSchema);try{i.create(),t._state.PR1398_maxLoop=3}catch(s){return s.name===ni.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Sr(t,e,n,r))):j(s)}return i._promise(e,(s,o)=>xe(()=>(A.trans=i,r(s,o,i)))).then(s=>i._completion.then(()=>s))}if(t._state.openComplete)return j(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return j(new C.DatabaseClosed);t.open().catch(N)}return t._state.dbReadyPromise.then(()=>Sr(t,e,n,r))}const De=String.fromCharCode(65535),ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",_t=[],$n=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),Zc=$n,eu=$n,No=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Fe(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Do={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Wt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=It(e))[t],e)}class tu{_trans(e,n,r){const i=this._tx||A.trans,s=this.name;function o(l,c,u){if(!u.schema[s])throw new C.NotFound("Table "+s+" not part of transaction");return n(u.idbtrans,u)}const a=Lt();try{return i&&i.db===this.db?i===A.trans?i._promise(e,o,r):xe(()=>i._promise(e,o,r),{trans:i,transless:A.transless||A}):Sr(this.db,e,[this.name],o)}finally{a&&Bt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(i=>this.hook.reading.fire(i))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(W(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=M(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(c=>c.compound&&n.every(u=>c.keyPath.indexOf(u)>=0)&&c.keyPath.every(u=>n.indexOf(u)>=0))[0];if(r&&this.db._maxKey!==De)return this.where(r.name).equals(r.keyPath.map(c=>e[c]));!r&&oe&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:i}=this.schema,s=this.db._deps.indexedDB;function o(c,u){try{return s.cmp(c,u)===0}catch{return!1}}const[a,l]=n.reduce(([c,u],h)=>{const d=i[h],f=e[h];return[c||d,c||!d?Fe(u,d&&d.multi?m=>{const p=fe(m,h);return W(p)&&p.some(v=>o(f,v))}:m=>o(f,fe(m,h))):u]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,W(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const i=Object.create(e.prototype);for(var s in r)if(Q(r,s))try{i[s]=r[s]}catch{}return i};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){Y(this,e)})}add(e,n){const{auto:r,keyPath:i}=this.schema.primKey;let s=e;return i&&r&&(s=Wt(i)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[s]})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{re(e,i,o)}catch{}return o})}update(e,n){if(typeof e!="object"||W(e))return this.where(":id").equals(e).modify(n);{const r=fe(e,this.schema.primKey.keyPath);if(r===void 0)return j(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?M(n).forEach(i=>{re(e,i,n[i])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:i}=this.schema.primKey;let s=e;return i&&r&&(s=Wt(i)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[s],keys:n!=null?[n]:null})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{re(e,i,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?x.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Do})).then(e=>e.numFailures?x.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(i=>this.hook.reading.fire(i))))}bulkAdd(e,n,r){const i=Array.isArray(n)?n:void 0,s=(r=r||(i?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&i)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(Wt(l)):e;return this.core.mutate({trans:o,type:"add",keys:i,values:u,wantResults:s}).then(({numFailures:h,results:d,lastResult:f,failures:m})=>{if(h===0)return s?d:f;throw new bt(`${this.name}.bulkAdd(): ${h} of ${c} operations failed`,m)})})}bulkPut(e,n,r){const i=Array.isArray(n)?n:void 0,s=(r=r||(i?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&i)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(Wt(l)):e;return this.core.mutate({trans:o,type:"put",keys:i,values:u,wantResults:s}).then(({numFailures:h,results:d,lastResult:f,failures:m})=>{if(h===0)return s?d:f;throw new bt(`${this.name}.bulkPut(): ${h} of ${c} operations failed`,m)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:i,failures:s})=>{if(r===0)return i;throw new bt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,s)})}}function St(t){var e={},n=function(a,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return e[a].subscribe.apply(null,u),t}if(typeof a=="string")return e[a]};n.addEventType=s;for(var r=1,i=arguments.length;r<i;++r)s(arguments[r]);return n;function s(a,l,c){if(typeof a=="object")return o(a);l||(l=Vc),c||(c=N);var u={subscribers:[],fire:c,subscribe:function(h){u.subscribers.indexOf(h)===-1&&(u.subscribers.push(h),u.fire=l(u.fire,h))},unsubscribe:function(h){u.subscribers=u.subscribers.filter(function(d){return d!==h}),u.fire=u.subscribers.reduce(l,c)}};return e[a]=n[a]=u,u}function o(a){M(a).forEach(function(l){var c=a[l];if(W(c))s(l,a[l][0],a[l][1]);else{if(c!=="asap")throw new C.InvalidArgument("Invalid event config");var u=s(l,Ct,function(){for(var h=arguments.length,d=new Array(h);h--;)d[h]=arguments[h];u.subscribers.forEach(function(f){po(function(){f.apply(null,d)})})})}})}}function ht(t,e){return Qe(e).from({prototype:t}),e}function We(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function jn(t,e){t.filter=Fe(t.filter,e)}function Fn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Fe(r(),e()):e,t.justLimit=n&&!r}function sn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Gi(t,e,n){const r=sn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Vt(t,e,n,r){const i=t.replayFilter?Fe(t.filter,t.replayFilter()):t.filter;if(t.or){const s={},o=(a,l,c)=>{if(!i||i(l,c,d=>l.stop(d),d=>l.fail(d))){var u=l.primaryKey,h=""+u;h==="[object ArrayBuffer]"&&(h=""+new Uint8Array(u)),Q(s,h)||(s[h]=!0,e(a,l,c))}};return Promise.all([t.or._iterate(o,n),Xi(Gi(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Xi(Gi(t,r,n),Fe(t.algorithm,i),e,!t.keysOnly&&t.valueMapper)}function Xi(t,e,n,r){var i=O(r?(s,o,a)=>n(r(s),o,a):n);return t.then(s=>{if(s)return s.start(()=>{var o=()=>s.continue();e&&!e(s,a=>o=a,a=>{s.stop(a),o=N},a=>{s.fail(a),o=N})||i(s.value,s,a=>o=a),o()})})}function q(t,e){try{const n=Qi(t),r=Qi(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(i,s){const o=i.length,a=s.length,l=o<a?o:a;for(let c=0;c<l;++c)if(i[c]!==s[c])return i[c]<s[c]?-1:1;return o===a?0:o<a?-1:1}(Zi(t),Zi(e));case"Array":return function(i,s){const o=i.length,a=s.length,l=o<a?o:a;for(let c=0;c<l;++c){const u=q(i[c],s[c]);if(u!==0)return u}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function Qi(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=hr(t);return n==="ArrayBuffer"?"binary":n}function Zi(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class nu{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,j.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,j.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Fe(n.algorithm,e)}_iterate(e,n){return Vt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&Y(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Vt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,i=r.table.core;if(We(r,!0))return i.count({trans:n,query:{index:sn(r,i.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var s=0;return Vt(r,()=>(++s,!1),n,i).then(()=>s)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),i=r[0],s=r.length-1;function o(c,u){return u?o(c[r[u]],u-1):c[i]}var a=this._ctx.dir==="next"?1:-1;function l(c,u){var h=o(c,s),d=o(u,s);return h<d?-a:h>d?a:0}return this.toArray(function(c){return c.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&We(r,!0)&&r.limit>0){const{valueMapper:i}=r,s=sn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:s,range:r.range}}).then(({result:o})=>i?o.map(i):o)}{const i=[];return Vt(r,s=>i.push(s),n,r.table.core).then(()=>i)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,We(n)?Fn(n,()=>{var r=e;return(i,s)=>r===0||(r===1?(--r,!1):(s(()=>{i.advance(r),r=0}),!1))}):Fn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Fn(this._ctx,()=>{var n=e;return function(r,i,s){return--n<=0&&i(s),n>=0}},!0),this}until(e,n){return jn(this._ctx,function(r,i,s){return!e(r.value)||(i(s),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return jn(this._ctx,function(i){return e(i.value)}),n=this._ctx,r=e,n.isMatch=Fe(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){e(i.key,i)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){e(i.primaryKey,i)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,s){r.push(s.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&We(n,!0)&&n.limit>0)return this._read(i=>{var s=sn(n,n.table.core.schema);return n.table.core.query({trans:i,values:!1,limit:n.limit,query:{index:s,range:n.range}})}).then(({result:i})=>i).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,s){r.push(s.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return jn(this._ctx,function(i){var s=i.primaryKey.toString(),o=Q(r,s);return r[s]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var i;if(typeof e=="function")i=e;else{var s=M(e),o=s.length;i=function(p){for(var v=!1,g=0;g<o;++g){var y=s[g],b=e[y];fe(p,y)!==b&&(re(p,y,b),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:c}=a.schema.primaryKey,u=this.db._options.modifyChunkSize||200,h=[];let d=0;const f=[],m=(p,v)=>{const{failures:g,numFailures:y}=v;d+=p-y;for(let b of M(g))h.push(g[b])};return this.clone().primaryKeys().then(p=>{const v=g=>{const y=Math.min(u,p.length-g);return a.getMany({trans:r,keys:p.slice(g,g+y),cache:"immutable"}).then(b=>{const $=[],S=[],w=l?[]:null,_=[];for(let E=0;E<y;++E){const D=b[E],I={value:It(D),primKey:p[g+E]};i.call(I,I.value,I)!==!1&&(I.value==null?_.push(p[g+E]):l||q(c(D),c(I.value))===0?(S.push(I.value),l&&w.push(p[g+E])):(_.push(p[g+E]),$.push(I.value)))}const P=We(n)&&n.limit===1/0&&(typeof e!="function"||e===Kn)&&{index:n.index,range:n.range};return Promise.resolve($.length>0&&a.mutate({trans:r,type:"add",values:$}).then(E=>{for(let D in E.failures)_.splice(parseInt(D),1);m($.length,E)})).then(()=>(S.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:w,values:S,criteria:P,changeSpec:typeof e!="function"&&e}).then(E=>m(S.length,E))).then(()=>(_.length>0||P&&e===Kn)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then(E=>m(_.length,E))).then(()=>p.length>g+y&&v(g+u))})};return v(0).then(()=>{if(h.length>0)throw new mn("Error modifying one or more objects",h,d,f);return p.length})})})}delete(){var e=this._ctx,n=e.range;return We(e)&&(e.isPrimKey&&!eu||n.type===3)?this._write(r=>{const{primaryKey:i}=e.table.core.schema,s=n;return e.table.core.count({trans:r,query:{index:i,range:s}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:s}).then(({failures:a,lastResult:l,results:c,numFailures:u})=>{if(u)throw new mn("Could not delete some values",Object.keys(a).map(h=>a[h]),o-u);return o-u}))}):this.modify(Kn)}}const Kn=(t,e)=>e.value=null;function ru(t,e){return t<e?-1:t===e?0:1}function iu(t,e){return t>e?-1:t===e?0:1}function X(t,e,n){var r=t instanceof Oo?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Ve(t){return new t.Collection(t,()=>zo("")).limit(0)}function su(t,e,n,r,i,s){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var c=e[l];if(c!==r[l])return i(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):i(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;i(t[l],c)<0&&(a=l)}return o<r.length&&s==="next"?t+n.substr(t.length):o<t.length&&s==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function qt(t,e,n,r){var i,s,o,a,l,c,u,h=n.length;if(!n.every(p=>typeof p=="string"))return X(t,"String expected.");function d(p){i=function(g){return g==="next"?y=>y.toUpperCase():y=>y.toLowerCase()}(p),s=function(g){return g==="next"?y=>y.toLowerCase():y=>y.toUpperCase()}(p),o=p==="next"?ru:iu;var v=n.map(function(g){return{lower:s(g),upper:i(g)}}).sort(function(g,y){return o(g.lower,y.lower)});a=v.map(function(g){return g.upper}),l=v.map(function(g){return g.lower}),c=p,u=p==="next"?"":r}d("next");var f=new t.Collection(t,()=>ve(a[0],l[h-1]+r));f._ondirectionchange=function(p){d(p)};var m=0;return f._addAlgorithm(function(p,v,g){var y=p.key;if(typeof y!="string")return!1;var b=s(y);if(e(b,l,m))return!0;for(var $=null,S=m;S<h;++S){var w=su(y,b,a[S],l[S],o,c);w===null&&$===null?m=S+1:($===null||o($,w)>0)&&($=w)}return v($!==null?function(){p.continue($+u)}:g),!1}),f}function ve(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function zo(t){return{type:1,lower:t,upper:t}}class Oo{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,i){r=r!==!1,i=i===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||i)&&(!r||!i)?Ve(this):new this.Collection(this,()=>ve(e,n,!r,!i))}catch{return X(this,ae)}}equals(e){return e==null?X(this,ae):new this.Collection(this,()=>zo(e))}above(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(e,void 0,!0))}aboveOrEqual(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(e,void 0,!1))}below(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(void 0,e,!1,!0))}belowOrEqual(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(void 0,e))}startsWith(e){return typeof e!="string"?X(this,"String expected."):this.between(e,e+De,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):qt(this,(n,r)=>n.indexOf(r[0])===0,[e],De)}equalsIgnoreCase(e){return qt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ue.apply(Je,arguments);return e.length===0?Ve(this):qt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ue.apply(Je,arguments);return e.length===0?Ve(this):qt(this,(n,r)=>r.some(i=>n.indexOf(i)===0),e,De)}anyOf(){const e=ue.apply(Je,arguments);let n=this._cmp;try{e.sort(n)}catch{return X(this,ae)}if(e.length===0)return Ve(this);const r=new this.Collection(this,()=>ve(e[0],e[e.length-1]));r._ondirectionchange=s=>{n=s==="next"?this._ascending:this._descending,e.sort(n)};let i=0;return r._addAlgorithm((s,o,a)=>{const l=s.key;for(;n(l,e[i])>0;)if(++i,i===e.length)return o(a),!1;return n(l,e[i])===0||(o(()=>{s.continue(e[i])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ue.apply(Je,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return X(this,ae)}const n=e.reduce((r,i)=>r?r.concat([[r[r.length-1][1],i]]):[[-(1/0),i]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,i=this._ascending,s=this._descending,o=this._min,a=this._max;if(e.length===0)return Ve(this);if(!e.every(y=>y[0]!==void 0&&y[1]!==void 0&&i(y[0],y[1])<=0))return X(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,c=n&&n.includeUppers===!0;let u,h=i;function d(y,b){return h(y[0],b[0])}try{u=e.reduce(function(y,b){let $=0,S=y.length;for(;$<S;++$){const w=y[$];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=a(w[1],b[1]);break}}return $===S&&y.push(b),y},[]),u.sort(d)}catch{return X(this,ae)}let f=0;const m=c?y=>i(y,u[f][1])>0:y=>i(y,u[f][1])>=0,p=l?y=>s(y,u[f][0])>0:y=>s(y,u[f][0])>=0;let v=m;const g=new this.Collection(this,()=>ve(u[0][0],u[u.length-1][1],!l,!c));return g._ondirectionchange=y=>{y==="next"?(v=m,h=i):(v=p,h=s),u.sort(d)},g._addAlgorithm((y,b,$)=>{for(var S=y.key;v(S);)if(++f,f===u.length)return b($),!1;return!!function(w){return!m(w)&&!p(w)}(S)||(this._cmp(S,u[f][1])===0||this._cmp(S,u[f][0])===0||b(()=>{h===i?y.continue(u[f][0]):y.continue(u[f][1])}),!1)}),g}startsWithAnyOf(){const e=ue.apply(Je,arguments);return e.every(n=>typeof n=="string")?e.length===0?Ve(this):this.inAnyRange(e.map(n=>[n,n+De])):X(this,"startsWithAnyOf() only works with strings")}}function se(t){return O(function(e){return Rt(e),t(e.target.error),!1})}function Rt(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const $e=St(null,"storagemutated");class ou{_lock(){return ft(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(ft(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{at(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(ft(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return ft(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=O(i=>{Rt(i),this._reject(e.error)}),e.onabort=O(i=>{Rt(i),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(i)}),e.oncomplete=O(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&$e.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return j(new C.ReadOnly("Transaction is readonly"));if(!this.active)return j(new C.TransactionInactive);if(this._locked())return new x((s,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(s,o)},A])});if(r)return xe(()=>{var s=new x((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return s.finally(()=>this._unlock()),s._lib=!0,s});var i=new x((s,o)=>{var a=n(s,o,this);a&&a.then&&a.then(s,o)});return i._lib=!0,i}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=x.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var i=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(i.get(-1/0).onsuccess=o)})()}var s=n._waitingFor;return new x((o,a)=>{r.then(l=>n._waitingQueue.push(O(o.bind(null,l))),l=>n._waitingQueue.push(O(a.bind(null,l)))).finally(()=>{n._waitingFor===s&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Q(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const i=new this.db.Table(e,r,this);return i.core=this.db.core.table(e),n[e]=i,i}}function xr(t,e,n,r,i,s,o){return{name:t,keyPath:e,unique:n,multi:r,auto:i,compound:s,src:(n&&!o?"&":"")+(r?"*":"")+(i?"++":"")+Io(e)}}function Io(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Lo(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:go(n,r=>[r.name,r])}}let kt=t=>{try{return t.only([[]]),kt=()=>[[]],[[]]}catch{return kt=()=>De,De}};function Er(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>fe(n,e)}(t):e=>fe(e,t)}function es(t){return[].slice.call(t)}let au=0;function xt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function lu(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:c,upper:u,lowerOpen:h,upperOpen:d}=l;return c===void 0?u===void 0?null:e.upperBound(u,!!d):u===void 0?e.lowerBound(c,!!h):e.bound(c,u,!!h,!!d)}const{schema:i,hasGetAll:s}=function(l,c){const u=es(l.objectStoreNames);return{schema:{name:l.name,tables:u.map(h=>c.objectStore(h)).map(h=>{const{keyPath:d,autoIncrement:f}=h,m=W(d),p=d==null,v={},g={name:h.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:p,compound:m,keyPath:d,autoIncrement:f,unique:!0,extractKey:Er(d)},indexes:es(h.indexNames).map(y=>h.index(y)).map(y=>{const{name:b,unique:$,multiEntry:S,keyPath:w}=y,_={name:b,compound:W(w),keyPath:w,unique:$,multiEntry:S,extractKey:Er(w)};return v[xt(w)]=_,_}),getIndexByKeyPath:y=>v[xt(y)]};return v[":id"]=g.primaryKey,d!=null&&(v[xt(d)]=g.primaryKey),g})},hasGetAll:u.length>0&&"getAll"in c.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=i.tables.map(l=>function(c){const u=c.name;return{name:u,schema:c,mutate:function({trans:h,type:d,keys:f,values:m,range:p}){return new Promise((v,g)=>{v=O(v);const y=h.objectStore(u),b=y.keyPath==null,$=d==="put"||d==="add";if(!$&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:S}=f||m||{length:1};if(f&&m&&f.length!==m.length)throw new Error("Given keys array must have same length as given values array.");if(S===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],P=[];let E=0;const D=V=>{++E,Rt(V)};if(d==="deleteRange"){if(p.type===4)return v({numFailures:E,failures:P,results:[],lastResult:void 0});p.type===3?_.push(w=y.clear()):_.push(w=y.delete(r(p)))}else{const[V,K]=$?b?[m,f]:[m,null]:[f,null];if($)for(let L=0;L<S;++L)_.push(w=K&&K[L]!==void 0?y[d](V[L],K[L]):y[d](V[L])),w.onerror=D;else for(let L=0;L<S;++L)_.push(w=y[d](V[L])),w.onerror=D}const I=V=>{const K=V.target.result;_.forEach((L,He)=>L.error!=null&&(P[He]=L.error)),v({numFailures:E,failures:P,results:d==="delete"?f:_.map(L=>L.result),lastResult:K})};w.onerror=V=>{D(V),I(V)},w.onsuccess=I})},getMany:({trans:h,keys:d})=>new Promise((f,m)=>{f=O(f);const p=h.objectStore(u),v=d.length,g=new Array(v);let y,b=0,$=0;const S=_=>{const P=_.target;g[P._pos]=P.result,++$===b&&f(g)},w=se(m);for(let _=0;_<v;++_)d[_]!=null&&(y=p.get(d[_]),y._pos=_,y.onsuccess=S,y.onerror=w,++b);b===0&&f(g)}),get:({trans:h,key:d})=>new Promise((f,m)=>{f=O(f);const p=h.objectStore(u).get(d);p.onsuccess=v=>f(v.target.result),p.onerror=se(m)}),query:function(h){return d=>new Promise((f,m)=>{f=O(f);const{trans:p,values:v,limit:g,query:y}=d,b=g===1/0?void 0:g,{index:$,range:S}=y,w=p.objectStore(u),_=$.isPrimaryKey?w:w.index($.name),P=r(S);if(g===0)return f({result:[]});if(h){const E=v?_.getAll(P,b):_.getAllKeys(P,b);E.onsuccess=D=>f({result:D.target.result}),E.onerror=se(m)}else{let E=0;const D=v||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),I=[];D.onsuccess=V=>{const K=D.result;return K?(I.push(v?K.value:K.primaryKey),++E===g?f({result:I}):void K.continue()):f({result:I})},D.onerror=se(m)}})}(s),openCursor:function({trans:h,values:d,query:f,reverse:m,unique:p}){return new Promise((v,g)=>{v=O(v);const{index:y,range:b}=f,$=h.objectStore(u),S=y.isPrimaryKey?$:$.index(y.name),w=m?p?"prevunique":"prev":p?"nextunique":"next",_=d||!("openKeyCursor"in S)?S.openCursor(r(b),w):S.openKeyCursor(r(b),w);_.onerror=se(g),_.onsuccess=O(P=>{const E=_.result;if(!E)return void v(null);E.___id=++au,E.done=!1;const D=E.continue.bind(E);let I=E.continuePrimaryKey;I&&(I=I.bind(E));const V=E.advance.bind(E),K=()=>{throw new Error("Cursor not stopped")};E.trans=h,E.stop=E.continue=E.continuePrimaryKey=E.advance=()=>{throw new Error("Cursor not started")},E.fail=O(g),E.next=function(){let L=1;return this.start(()=>L--?this.continue():this.stop()).then(()=>this)},E.start=L=>{const He=new Promise((J,Te)=>{J=O(J),_.onerror=se(Te),E.fail=Te,E.stop=lt=>{E.stop=E.continue=E.continuePrimaryKey=E.advance=K,J(lt)}}),Ue=()=>{if(_.result)try{L()}catch(J){E.fail(J)}else E.done=!0,E.start=()=>{throw new Error("Cursor behind last entry")},E.stop()};return _.onsuccess=O(J=>{_.onsuccess=Ue,Ue()}),E.continue=D,E.continuePrimaryKey=I,E.advance=V,Ue(),He},v(E)},g)})},count({query:h,trans:d}){const{index:f,range:m}=h;return new Promise((p,v)=>{const g=d.objectStore(u),y=f.isPrimaryKey?g:g.index(f.name),b=r(m),$=b?y.count(b):y.count();$.onsuccess=O(S=>p(S.target.result)),$.onerror=se(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:kt(e),schema:i}}function $r({_novip:t},e){const n=e.db,r=function(i,s,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(u,h){return h.reduce((d,{create:f})=>({...d,...f(d)}),u)}(lu(s,o,l),i.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(i=>{const s=i.name;t.core.schema.tables.some(o=>o.name===s)&&(i.core=t.core.table(s),t[s]instanceof t.Table&&(t[s].core=i.core))})}function bn({_novip:t},e,n,r){n.forEach(i=>{const s=r[i];e.forEach(o=>{const a=Zr(o,i);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?de(o,i,{get(){return this.table(i)},set(l){fo(this,i,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[i]=new t.Table(i,s))})})}function Ar({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function cu(t,e){return t._cfg.version-e._cfg.version}function uu(t,e,n,r){const i=t._dbSchema,s=t._createTransaction("readwrite",t._storeNames,i);s.create(n),s._completion.catch(r);const o=s._reject.bind(s),a=A.transless||A;xe(()=>{A.trans=s,A.transless=a,e===0?(M(i).forEach(l=>{Hn(n,l,i[l].primKey,i[l].indexes)}),$r(t,n),x.follow(()=>t.on.populate.fire(s)).catch(o)):function({_novip:l},c,u,h){const d=[],f=l._versions;let m=l._dbSchema=Cr(l,l.idbdb,h),p=!1;function v(){return d.length?x.resolve(d.shift()(u.idbtrans)).then(v):x.resolve()}return f.filter(g=>g._cfg.version>=c).forEach(g=>{d.push(()=>{const y=m,b=g._cfg.dbschema;Pr(l,y,h),Pr(l,b,h),m=l._dbSchema=b;const $=Bo(y,b);$.add.forEach(w=>{Hn(h,w[0],w[1].primKey,w[1].indexes)}),$.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=h.objectStore(w.name);w.add.forEach(P=>Tr(_,P)),w.change.forEach(P=>{_.deleteIndex(P.name),Tr(_,P)}),w.del.forEach(P=>_.deleteIndex(P))}});const S=g._cfg.contentUpgrade;if(S&&g._cfg.version>c){$r(l,h),u._memoizedTables={},p=!0;let w=yo(b);$.del.forEach(D=>{w[D]=y[D]}),Ar(l,[l.Transaction.prototype]),bn(l,[l.Transaction.prototype],M(w),w),u.schema=w;const _=ei(S);let P;_&&ot();const E=x.follow(()=>{if(P=S(u),P&&_){var D=pe.bind(null,null);P.then(D,D)}});return P&&typeof P.then=="function"?x.resolve(P):E.then(()=>P)}}),d.push(y=>{(!p||!Zc)&&function(b,$){[].slice.call($.db.objectStoreNames).forEach(S=>b[S]==null&&$.db.deleteObjectStore(S))}(g._cfg.dbschema,y),Ar(l,[l.Transaction.prototype]),bn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),u.schema=l._dbSchema})}),v().then(()=>{var g,y;y=h,M(g=m).forEach(b=>{y.db.objectStoreNames.contains(b)||Hn(y,b,g[b].primKey,g[b].indexes)})})}(t,e,s,n).catch(o)})}function Bo(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const i=t[r],s=e[r];if(i){const o={name:r,def:s,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(s.primKey.keyPath||"")||i.primKey.auto!==s.primKey.auto&&!$n)o.recreate=!0,n.change.push(o);else{const a=i.idxByName,l=s.idxByName;let c;for(c in a)l[c]||o.del.push(c);for(c in l){const u=a[c],h=l[c];u?u.src!==h.src&&o.change.push(h):o.add.push(h)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,s])}return n}function Hn(t,e,n,r){const i=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(s=>Tr(i,s)),i}function Tr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Cr(t,e,n){const r={};return fn(e.objectStoreNames,0).forEach(i=>{const s=n.objectStore(i);let o=s.keyPath;const a=xr(Io(o),o||"",!1,!1,!!s.autoIncrement,o&&typeof o!="string",!0),l=[];for(let u=0;u<s.indexNames.length;++u){const h=s.index(s.indexNames[u]);o=h.keyPath;var c=xr(h.name,o,!!h.unique,!!h.multiEntry,!1,o&&typeof o!="string",!1);l.push(c)}r[i]=Lo(i,a,l)}),r}function Pr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let i=0;i<r.length;++i){const s=r[i],o=n.objectStore(s);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+fn(c).join("+")+"]";if(e[s]){const h=e[s].idxByName[u];h&&(h.name=l,delete e[s].idxByName[u],e[s].idxByName[l]=h)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&z.WorkerGlobalScope&&z instanceof z.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class hu{_parseStoresSpec(e,n){M(e).forEach(r=>{if(e[r]!==null){var i=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),c=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return xr(l,c||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),W(c),a===0)}),s=i.shift();if(s.multi)throw new C.Schema("Primary key cannot be multi-valued");i.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Lo(r,s,i)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?Y(this._cfg.storesSource,e):e;const r=n._versions,i={};let s={};return r.forEach(o=>{Y(i,o._cfg.storesSource),s=o._cfg.dbschema={},o._parseStoresSpec(i,s)}),n._dbSchema=s,Ar(n,[n._allTables,n,n.Transaction.prototype]),bn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],M(s),s),n._storeNames=M(s),this}upgrade(e){return this._cfg.contentUpgrade=ri(this._cfg.contentUpgrade||N,e),this}}function ai(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Le("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function li(t){return t&&typeof t.databases=="function"}function Rr(t){return xe(function(){return A.letThrough=!0,t()})}function du(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function fu(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?j(e.dbOpenError):t);oe&&(e.openCanceller._stackHolder=Ke()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function i(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let s=e.dbReadyResolve,o=null,a=!1;return x.race([r,(typeof navigator>"u"?x.resolve():du()).then(()=>new x((l,c)=>{if(i(),!n)throw new C.MissingAPI;const u=t.name,h=e.autoSchema?n.open(u):n.open(u,Math.round(10*t.verno));if(!h)throw new C.MissingAPI;h.onerror=se(c),h.onblocked=O(t._fireOnBlocked),h.onupgradeneeded=O(d=>{if(o=h.transaction,e.autoSchema&&!t._options.allowEmptyDB){h.onerror=Rt,o.abort(),h.result.close();const m=n.deleteDatabase(u);m.onsuccess=m.onerror=O(()=>{c(new C.NoSuchDatabase(`Database ${u} doesnt exist`))})}else{o.onerror=se(c);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;a=f<1,t._novip.idbdb=h.result,uu(t,f/10,o,c)}},c),h.onsuccess=O(()=>{o=null;const d=t._novip.idbdb=h.result,f=fn(d.objectStoreNames);if(f.length>0)try{const p=d.transaction((m=f).length===1?m[0]:m,"readonly");e.autoSchema?function({_novip:v},g,y){v.verno=g.version/10;const b=v._dbSchema=Cr(0,g,y);v._storeNames=fn(g.objectStoreNames,0),bn(v,[v._allTables],M(b),b)}(t,d,p):(Pr(t,t._dbSchema,p),function(v,g){const y=Bo(Cr(0,v.idbdb,g),v._dbSchema);return!(y.add.length||y.change.some(b=>b.add.length||b.change.length))}(t,p)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),$r(t,p)}catch{}var m;_t.push(t),d.onversionchange=O(p=>{e.vcFired=!0,t.on("versionchange").fire(p)}),d.onclose=O(p=>{t.on("close").fire(p)}),a&&function({indexedDB:p,IDBKeyRange:v},g){!li(p)&&g!=="__dbnames"&&ai(p,v).put({name:g}).catch(N)}(t._deps,u),l()},c)}))]).then(()=>(i(),e.onReadyBeingFired=[],x.resolve(Rr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(ri,N);return e.onReadyBeingFired=[],x.resolve(Rr(()=>c(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),j(l)}).finally(()=>{e.openComplete=!0,s()})}function kr(t){var e=s=>t.next(s),n=i(e),r=i(s=>t.throw(s));function i(s){return o=>{var a=s(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):W(l)?Promise.all(l).then(n,r):n(l)}}return i(e)()}function mu(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];n=i.pop();var s=vo(i);return[t,s,n]}function Mo(t,e,n,r,i){return x.resolve().then(()=>{const s=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:s};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(h){return h.name===ni.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Mo(t,e,n,null,i))):j(h)}const l=ei(i);let c;l&&ot();const u=x.follow(()=>{if(c=i.call(o,o),c)if(l){var h=pe.bind(null,null);c.then(h,h)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=kr(c))},a);return(c&&typeof c.then=="function"?x.resolve(c).then(h=>o.active?h:j(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):u.then(()=>c)).then(h=>(r&&o._resolve(),o._completion.then(()=>h))).catch(h=>(o._reject(h),j(h)))})}function Yt(t,e,n){const r=W(t)?t.slice():[t];for(let i=0;i<n;++i)r.push(e);return r}const pu={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,i={},s=[];function o(u,h,d){const f=xt(u),m=i[f]=i[f]||[],p=u==null?0:typeof u=="string"?1:u.length,v=h>0,g={...d,isVirtual:v,keyTail:h,keyLength:p,extractKey:Er(u),unique:!v&&d.unique};return m.push(g),g.isPrimaryKey||s.push(g),p>1&&o(p===2?u[0]:u.slice(0,p-1),h+1,d),m.sort((y,b)=>y.keyTail-b.keyTail),g}const a=o(r.primaryKey.keyPath,0,r.primaryKey);i[":id"]=[a];for(const u of r.indexes)o(u.keyPath,0,u);function l(u){const h=u.query.index;return h.isVirtual?{...u,query:{index:h,range:(d=u.query.range,f=h.keyTail,{type:d.type===1?2:d.type,lower:Yt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Yt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:u;var d,f}return{...n,schema:{...r,primaryKey:a,indexes:s,getIndexByKeyPath:function(u){const h=i[xt(u)];return h&&h[0]}},count:u=>n.count(l(u)),query:u=>n.query(l(u)),openCursor(u){const{keyTail:h,isVirtual:d,keyLength:f}=u.query.index;return d?n.openCursor(l(u)).then(m=>m&&function(p){return Object.create(p,{continue:{value:function(g){g!=null?p.continue(Yt(g,u.reverse?t.MAX_KEY:t.MIN_KEY,h)):u.unique?p.continue(p.key.slice(0,f).concat(u.reverse?t.MIN_KEY:t.MAX_KEY,h)):p.continue()}},continuePrimaryKey:{value(g,y){p.continuePrimaryKey(Yt(g,t.MAX_KEY,h),y)}},primaryKey:{get:()=>p.primaryKey},key:{get(){const g=p.key;return f===1?g[0]:g.slice(0,f)}},value:{get:()=>p.value}})}(m)):n.openCursor(u)}}}}}};function ci(t,e,n,r){return n=n||{},r=r||"",M(t).forEach(i=>{if(Q(e,i)){var s=t[i],o=e[i];if(typeof s=="object"&&typeof o=="object"&&s&&o){const a=hr(s);a!==hr(o)?n[r+i]=e[i]:a==="Object"?ci(s,o,n,r+i+"."):s!==o&&(n[r+i]=e[i])}else s!==o&&(n[r+i]=e[i])}else n[r+i]=void 0}),M(e).forEach(i=>{Q(t,i)||(n[r+i]=e[i])}),n}const gu={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(s){const o=A.trans,{deleting:a,creating:l,updating:c}=o.table(e).hook;switch(s.type){case"add":if(l.fire===N)break;return o._promise("readwrite",()=>u(s),!0);case"put":if(l.fire===N&&c.fire===N)break;return o._promise("readwrite",()=>u(s),!0);case"delete":if(a.fire===N)break;return o._promise("readwrite",()=>u(s),!0);case"deleteRange":if(a.fire===N)break;return o._promise("readwrite",()=>function(d){return h(d.trans,d.range,1e4)}(s),!0)}return n.mutate(s);function u(d){const f=A.trans,m=d.keys||function(p,v){return v.type==="delete"?v.keys:v.keys||v.values.map(p.extractKey)}(r,d);if(!m)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:m}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(p,v,g){return v.type==="add"?Promise.resolve([]):p.getMany({trans:v.trans,keys:g,cache:"immutable"})}(n,d,m).then(p=>{const v=m.map((g,y)=>{const b=p[y],$={onerror:null,onsuccess:null};if(d.type==="delete")a.fire.call($,g,b,f);else if(d.type==="add"||b===void 0){const S=l.fire.call($,g,d.values[y],f);g==null&&S!=null&&(g=S,d.keys[y]=g,r.outbound||re(d.values[y],r.keyPath,g))}else{const S=ci(b,d.values[y]),w=c.fire.call($,S,g,b,f);if(w){const _=d.values[y];Object.keys(w).forEach(P=>{Q(_,P)?_[P]=w[P]:re(_,P,w[P])})}}return $});return n.mutate(d).then(({failures:g,results:y,numFailures:b,lastResult:$})=>{for(let S=0;S<m.length;++S){const w=y?y[S]:m[S],_=v[S];w==null?_.onerror&&_.onerror(g[S]):_.onsuccess&&_.onsuccess(d.type==="put"&&p[S]?d.values[S]:w)}return{failures:g,results:y,numFailures:b,lastResult:$}}).catch(g=>(v.forEach(y=>y.onerror&&y.onerror(g)),Promise.reject(g)))})}function h(d,f,m){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:m}).then(({result:p})=>u({type:"delete",keys:p,trans:d}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):p.length<m?{failures:[],numFailures:0,lastResult:void 0}:h(d,{...f,lower:p[p.length-1],lowerOpen:!0},m)))}}}}})};function jo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let i=0,s=0;i<e.keys.length&&s<t.length;++i)q(e.keys[i],t[s])===0&&(r.push(n?It(e.values[i]):e.values[i]),++s);return r.length===t.length?r:null}catch{return null}}const yu={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const i=jo(r.keys,r.trans._cache,r.cache==="clone");return i?x.resolve(i):n.getMany(r).then(s=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?It(s):s},s))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function ui(t){return!("from"in t)}const le=function(t,e){if(!this){const n=new le;return t&&"d"in t&&Y(n,t),n}Y(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Nt(t,e,n){const r=q(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(ui(t))return Y(t,{from:e,to:n,d:1});const i=t.l,s=t.r;if(q(n,t.from)<0)return i?Nt(i,e,n):t.l={from:e,to:n,d:1,l:null,r:null},ts(t);if(q(e,t.to)>0)return s?Nt(s,e,n):t.r={from:e,to:n,d:1,l:null,r:null},ts(t);q(e,t.from)<0&&(t.from=e,t.l=null,t.d=s?s.d+1:1),q(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;i&&!t.l&&wn(t,i),s&&o&&wn(t,s)}function wn(t,e){ui(e)||function n(r,{from:i,to:s,l:o,r:a}){Nt(r,i,s),o&&n(r,o),a&&n(r,a)}(t,e)}function vu(t,e){const n=Nr(e);let r=n.next();if(r.done)return!1;let i=r.value;const s=Nr(t);let o=s.next(i.from),a=o.value;for(;!r.done&&!o.done;){if(q(a.from,i.to)<=0&&q(a.to,i.from)>=0)return!0;q(i.from,a.from)<0?i=(r=n.next(a.from)).value:a=(o=s.next(i.from)).value}return!1}function Nr(t){let e=ui(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&q(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||q(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function ts(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),i=r>1?"r":r<-1?"l":"";if(i){const s=i==="r"?"l":"r",o={...t},a=t[i];t.from=a.from,t.to=a.to,t[i]=a[i],o[i]=a[s],t[s]=o,o.d=ns(o)}t.d=ns(t)}function ns({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}st(le.prototype,{add(t){return wn(this,t),this},addKey(t){return Nt(this,t,t),this},addKeys(t){return t.forEach(e=>Nt(this,e,e)),this},[dr](){return Nr(this)}});const bu={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new le(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const i=t.table(r),{schema:s}=i,{primaryKey:o}=s,{extractKey:a,outbound:l}=o,c={...i,mutate:d=>{const f=d.trans,m=f.mutatedParts||(f.mutatedParts={}),p=w=>{const _=`idb://${e}/${r}/${w}`;return m[_]||(m[_]=new le)},v=p(""),g=p(":dels"),{type:y}=d;let[b,$]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const S=d.trans._cache;return i.mutate(d).then(w=>{if(W(b)){y!=="delete"&&(b=w.results),v.addKeys(b);const _=jo(b,S);_||y==="add"||g.addKeys(b),(_||$)&&function(P,E,D,I){function V(K){const L=P(K.name||"");function He(J){return J!=null?K.extractKey(J):null}const Ue=J=>K.multiEntry&&W(J)?J.forEach(Te=>L.addKey(Te)):L.addKey(J);(D||I).forEach((J,Te)=>{const lt=D&&He(D[Te]),An=I&&He(I[Te]);q(lt,An)!==0&&(lt!=null&&Ue(lt),An!=null&&Ue(An))})}E.indexes.forEach(V)}(p,s,_,$)}else if(b){const _={from:b.lower,to:b.upper};g.add(_),v.add(_)}else v.add(n),g.add(n),s.indexes.forEach(_=>p(_.name).add(n));return w})}},u=({query:{index:d,range:f}})=>{var m,p;return[d,new le((m=f.lower)!==null&&m!==void 0?m:t.MIN_KEY,(p=f.upper)!==null&&p!==void 0?p:t.MAX_KEY)]},h={get:d=>[o,new le(d.key)],getMany:d=>[o,new le().addKeys(d.keys)],count:u,query:u,openCursor:u};return M(h).forEach(d=>{c[d]=function(f){const{subscr:m}=A;if(m){const p=$=>{const S=`idb://${e}/${r}/${$}`;return m[S]||(m[S]=new le)},v=p(""),g=p(":dels"),[y,b]=h[d](f);if(p(y.name||"").add(b),!y.isPrimaryKey){if(d!=="count"){const $=d==="query"&&l&&f.values&&i.query({...f,values:!1});return i[d].apply(this,arguments).then(S=>{if(d==="query"){if(l&&f.values)return $.then(({result:_})=>(v.addKeys(_),S));const w=f.values?S.result.map(a):S.result;f.values?v.addKeys(w):g.addKeys(w)}else if(d==="openCursor"){const w=S,_=f.values;return w&&Object.create(w,{key:{get:()=>(g.addKey(w.primaryKey),w.key)},primaryKey:{get(){const P=w.primaryKey;return g.addKey(P),P}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return S})}g.add(n)}}return i[d].apply(this,arguments)}}),c}}}};class Le{constructor(e,n){this._middlewares={},this.verno=0;const r=Le.dependencies;this._options=n={addons:Le.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:i}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const s={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:N,dbReadyPromise:null,cancelOpen:N,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;s.dbReadyPromise=new x(a=>{s.dbReadyResolve=a}),s.openCanceller=new x((a,l)=>{s.cancelOpen=l}),this._state=s,this.name=e,this.on=St(this,"populate","blocked","versionchange","close",{ready:[ri,N]}),this.on.ready.subscribe=mo(this.on.ready.subscribe,a=>(l,c)=>{Le.vip(()=>{const u=this._state;if(u.openComplete)u.dbOpenError||x.resolve().then(l),c&&a(l);else if(u.onReadyBeingFired)u.onReadyBeingFired.push(l),c&&a(l);else{a(l);const h=this;c||a(function d(){h.on.ready.unsubscribe(l),h.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,ht(nu.prototype,function(a,l){this.db=o;let c=Do,u=null;if(l)try{c=l()}catch(m){u=m}const h=a._ctx,d=h.table,f=d.hook.reading.fire;this._ctx={table:d,index:h.index,isPrimKey:!h.index||d.schema.primKey.keyPath&&h.index===d.schema.primKey.name,range:c,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:u,or:h.or,valueMapper:f!==Ct?f:null}})),this.Table=function(a){return ht(tu.prototype,function(l,c,u){this.db=a,this._tx=u,this.name=l,this.schema=c,this.hook=a._allTables[l]?a._allTables[l].hook:St(null,{creating:[Hc,N],reading:[Kc,Ct],updating:[Wc,N],deleting:[Uc,N]})})}(this),this.Transaction=function(a){return ht(ou.prototype,function(l,c,u,h,d){this.db=a,this.mode=l,this.storeNames=c,this.schema=u,this.chromeTransactionDurability=h,this.idbtrans=null,this.on=St(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new x((f,m)=>{this._resolve=f,this._reject=m}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var m=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):m&&this.idbtrans&&this.idbtrans.abort(),j(f)})})}(this),this.Version=function(a){return ht(hu.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return ht(Oo.prototype,function(l,c,u){this.db=a,this._ctx={table:l,index:c===":id"?null:c,or:u};const h=a._deps.indexedDB;if(!h)throw new C.MissingAPI;this._cmp=this._ascending=h.cmp.bind(h),this._descending=(d,f)=>h.cmp(f,d),this._max=(d,f)=>h.cmp(d,f)>0?d:f,this._min=(d,f)=>h.cmp(d,f)<0?d:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=kt(n.IDBKeyRange),this._createTransaction=(a,l,c,u)=>new this.Transaction(a,l,c,this._options.chromeTransactionDurability,u),this._fireOnBlocked=a=>{this.on("blocked").fire(a),_t.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(pu),this.use(gu),this.use(bu),this.use(yu),this.vip=Object.create(this,{_vip:{value:!0}}),i.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(i=>i._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(cu),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new x((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(N)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:i}){i&&this.unuse({stack:e,name:i});const s=this._middlewares[e]||(this._middlewares[e]=[]);return s.push({stack:e,create:n,level:r??10,name:i}),s.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(i=>r?i.create!==r:!!n&&i.name!==n)),this}open(){return fu(this)}_close(){const e=this._state,n=_t.indexOf(this);if(n>=0&&_t.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new x(r=>{e.dbReadyResolve=r}),e.openCanceller=new x((r,i)=>{e.cancelOpen=i})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new x((r,i)=>{const s=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=O(()=>{(function({indexedDB:a,IDBKeyRange:l},c){!li(a)&&c!=="__dbnames"&&ai(a,l).delete(c).catch(N)})(this._deps,this.name),r()}),o.onerror=se(i),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(s):s()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return M(this._allTables).map(e=>this._allTables[e])}transaction(){const e=mu.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let i=A.trans;i&&i.db===this&&e.indexOf("!")===-1||(i=null);const s=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(c=>{var u=c instanceof this.Table?c.name:c;if(typeof u!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return u}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(i){if(i.mode==="readonly"&&o==="readwrite"){if(!s)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i=null}i&&a.forEach(c=>{if(i&&i.storeNames.indexOf(c)===-1){if(!s)throw new C.SubTransaction("Table "+c+" not included in parent transaction.");i=null}}),s&&i&&!i.active&&(i=null)}}catch(c){return i?i._promise(null,(u,h)=>{h(c)}):j(c)}const l=Mo.bind(null,this,o,a,i,r);return i?i._promise(o,l,"lock"):A.trans?at(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!Q(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const wu=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class _u{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[wu](){return this}}function Fo(t,e){return M(e).forEach(n=>{wn(t[n]||(t[n]=new le),e[n])}),t}function Su(t){return new _u(e=>{const n=ei(t);let r=!1,i={},s={};const o={get closed(){return r},unsubscribe:()=>{r=!0,$e.storagemutated.unsubscribe(u)}};e.start&&e.start(o);let a=!1,l=!1;function c(){return M(s).some(d=>i[d]&&vu(i[d],s[d]))}const u=d=>{Fo(i,d),c()&&h()},h=()=>{if(a||r)return;i={};const d={},f=function(m){n&&ot();const p=()=>xe(t,{subscr:m,trans:null}),v=A.trans?at(A.transless,p):p();return n&&v.then(pe,pe),v}(d);l||($e("storagemutated",u),l=!0),a=!0,Promise.resolve(f).then(m=>{a=!1,r||(c()?h():(i={},s=d,e.next&&e.next(m)))},m=>{a=!1,e.error&&e.error(m),o.unsubscribe()})};return h(),o})}let Dr;try{Dr={indexedDB:z.indexedDB||z.mozIndexedDB||z.webkitIndexedDB||z.msIndexedDB,IDBKeyRange:z.IDBKeyRange||z.webkitIDBKeyRange}}catch{Dr={indexedDB:null,IDBKeyRange:null}}const Pe=Le;function on(t){let e=he;try{he=!0,$e.storagemutated.fire(t)}finally{he=e}}st(Pe,{...Zt,delete:t=>new Pe(t,{addons:[]}).delete(),exists:t=>new Pe(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return li(e)?Promise.resolve(e.databases()).then(r=>r.map(i=>i.name).filter(i=>i!=="__dbnames")):ai(e,n).toCollection().primaryKeys()}(Pe.dependencies).then(t)}catch{return j(new C.MissingAPI)}},defineClass:()=>function(t){Y(this,t)},ignoreTransaction:t=>A.trans?at(A.transless,t):t(),vip:Rr,async:function(t){return function(){try{var e=kr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:x.resolve(e)}catch(n){return j(n)}}},spawn:function(t,e,n){try{var r=kr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:x.resolve(r)}catch(i){return j(i)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=x.resolve(typeof t=="function"?Pe.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:x,debug:{get:()=>oe,set:t=>{wo(t,t==="dexie"?()=>!0:No)}},derive:Qe,extend:Y,props:st,override:mo,Events:St,on:$e,liveQuery:Su,extendObservabilitySet:Fo,getByKeyPath:fe,setByKeyPath:re,delByKeyPath:function(t,e){typeof e=="string"?re(t,e,void 0):"length"in e&&[].map.call(e,function(n){re(t,n,void 0)})},shallowClone:yo,deepClone:It,getObjectDiff:ci,cmp:q,asap:po,minKey:-(1/0),addons:[],connections:_t,errnames:ni,dependencies:Dr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Pe.maxKey=kt(Pe.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&($e("storagemutated",t=>{if(!he){let e;$n?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),he=!0,dispatchEvent(e),he=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{he||on(t)}));let he=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),$e("storagemutated",e=>{he||t.postMessage(e)}),t.onmessage=e=>{e.data&&on(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){$e("storagemutated",e=>{try{he||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&on(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&on(e.changedParts)})}x.rejectionMapper=function(t,e){if(!t||t instanceof Ze||t instanceof TypeError||t instanceof SyntaxError||!t.name||!qi[t.name])return t;var n=new qi[t.name](e||t.message,t);return"stack"in t&&de(n,"stack",{get:function(){return this.inner.stack}}),n},wo(oe,No);class Mt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class rs extends Mt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Dt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const xu=globalThis.history.pushState;function is(...t){const e=xu.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Dt)),e}const Eu=globalThis.history.replaceState;function ss(...t){const e=Eu.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Dt)),e}function $u(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===is)throw new rs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===ss)throw new rs("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=is,globalThis.history.replaceState=ss,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Dt))})}}function Au(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Tu(t){const e=Object.entries(t).reduce((n,r)=>{const i=`${r[0]}=${r[1]}`;return`${n}&${i}`},"");return new URLSearchParams(e)}function Cu(t){const n=(t?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(o=>!!o),i=globalThis.location.search?Au(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:i,hash:s}}class Pu extends Mt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Ko(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const os=6;function as(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>os)throw new Pu(`Route sanitization depth has exceed the max of ${os} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Ko(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(i=>{i(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Un extends Mt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Ru(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Un(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Un(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Un(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function ku(t,e,n,r=!1){const i=Ho(t,e,n);r?globalThis.history.replaceState(void 0,"",i):globalThis.history.pushState(void 0,"",i)}function Ho(t,e,n=""){var l;if(!n&&e!=null)throw new Mt("Route base regexp was defined but routeBase string was not provided.");const r=Nu(e)?`/${n}`:"",i=t.search?Tu(t.search).toString():"",s=i?`?${i}`:"",o=(l=t.hash)!=null&&l.startsWith("#")?"":"#",a=t.hash?`${o}${t.hash}`:"";return`${r}/${t.paths.join("/")}${s}${a}`}function Nu(t){return!!(t&&globalThis.location.pathname.match(t))}function Du(t={}){var o;Ru(t),$u();const e=(o=t.routeBase)==null?void 0:o.replace(/\/+$/,""),n=e?new RegExp(`^\\/${t.routeBase}`):void 0;let r=!1;const i=()=>as(s),s={listeners:new Set,initParams:t,sanitizeFullRoute:a=>{const l={hash:void 0,search:void 0,...a};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(a,l=!1,c=!1)=>{const u=s.getCurrentRawRoutes(),h={...u,...a},d=s.sanitizeFullRoute(h);if(!(!c&&Ko(u,d)))return ku(d,n,e,l)},createRoutesUrl:a=>Ho(a,n,e),getCurrentRawRoutes:()=>Cu(n),removeAllRouteListeners(){s.listeners.forEach(a=>s.removeRouteListener(a))},addRouteListener:(a,l)=>{if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new Mt(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return s.listeners.add(l),r||(globalThis.addEventListener(Dt,i),r=!0),a&&as(s,l),l},hasRouteListener:a=>s.listeners.has(a),removeRouteListener:a=>{const l=s.listeners.delete(a);return s.listeners.size||(globalThis.removeEventListener(Dt,i),r=!1),l},sanitizationDepth:0};return s}const Uo=Du({routeBase:"resizable-image-element"}),zu=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Ou="resizable-image-element-storage";class Iu extends Le{constructor(){super(Ou),this.version(1).stores({storedUrls:"&index"})}}const Wn=new Iu,ls={async set(t){const e=_n(t).map((n,r)=>({index:r,url:n}));await Wn.storedUrls.clear(),await Wn.storedUrls.bulkPut(e)},async get(){const e=(await Wn.storedUrls.toArray()).map(r=>r.url),n=_n(e);return Lu(n.length?n:zu)}};function Lu(t){var e,n;try{const r=_n(((n=(e=Uo.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function _n(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(cs)}const{defineElement:Bu,defineElementNoInputs:Mu}=Ua(),Jt=Bu()({tagName:"vir-url-input",events:{urlsChange:Xt()},styles:Ge`
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
    `,renderCallback:({inputs:t,dispatch:e,events:n,host:r})=>{const i=r.shadowRoot.querySelector("textarea"),s=t.urls.join(`
`),o=s+`
`;return i&&(i==null?void 0:i.value)!==s&&(i.value=s),F`
            <textarea
                ${yt("input",a=>{const c=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));e(new n.urlsChange(c))})}
                ${yt("blur",()=>{i&&(i.value=o)})}
                .value=${i&&i.matches(":focus")?s:o}
            ></textarea>
        `}}),dt={max:{width:300,height:600},min:{width:300,height:150}};Mu({tagName:"vir-example-app",stateInitStatic:{showConstraints:!0,imageUrls:Rs(ls.get()),constraints:void 0,router:Uo,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{"vir-example-app-show-constraints":({state:t})=>t.showConstraints},styles:({hostClasses:t})=>Ge`
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

        ${t["vir-example-app-show-constraints"].selector} .constraint-wrapper.max {
            border-color: red;
        }

        ${t["vir-example-app-show-constraints"].selector} .constraint-wrapper.min {
            border-color: lime;
        }

        ${t["vir-example-app-show-constraints"].selector} ${vt} {
            border-color: blue;
        }

        ${vt} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||dt.min.width,height:Number(o==null?void 0:o.minH)||dt.min.height},max:{width:Number(o==null?void 0:o.maxW)||dt.max.width,height:Number(o==null?void 0:o.maxH)||dt.max.height}}})}const n=t.constraints??dt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function i(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function s(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!Ir(i(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:ln(1e3).then(()=>{const o=i();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:i()}}),F`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Jt}
                ${Hr(Jt,{urls:r})}
                ${yt(Jt.events.urlsChange,o=>{const a=o.detail;ls.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Jt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${yt("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const c=[Vn(o),Vn(l)].join(" "),u=n[o][l];return F`
                            <label>
                                ${c}
                                <br />
                                ${ne(u)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${u}
                                    ${yt("input",h=>{s(h.currentTarget,o,l)})}
                                />
                            </label>
                        `});return F`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${ju(n,t.imageUrls)}</div>
        `}});function ju(t,e){return tr(e,"Loading...",n=>_n(n).map(r=>{const i=`
                height: ${ne(t.max.height)};
                max-height: ${ne(t.max.height)};
                width: ${ne(t.max.width)};
                max-width: ${ne(t.max.width)}`,s=`height: ${ne(t.min.height)}; width: ${ne(t.min.width)}`;return F`
                <div class="constraint-wrapper max" style=${i}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${vt}
                            ${Hr(vt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${vt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${s}></div>
                    </div>
                </div>
            `}))}
