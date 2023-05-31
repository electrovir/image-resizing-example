(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dr(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Wo={capitalizeFirstLetter:!1};function Kn(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Vo(t,e){return e.capitalizeFirstLetter?Kn(t):t}function qo(t,e=Wo){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Vo(r,e)}function ui(t){return t!==t.toUpperCase()}function Yo(t){return t.split("").reduce((n,r,i,s)=>{const o=i>0?s[i-1]:"",a=i<s.length-1?s[i+1]:"",l=ui(o)||ui(a);return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Jo({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const Go=["january","february","march","april","may","june","july","august","september","october","november","december"];Go.map(t=>t.slice(0,3));function zr(t){return t?t instanceof Error?t.message:String(t):""}function Xe(t){return t instanceof Error?t:new Error(zr(t))}function as(t){return!!t}function Un(t){return!!t&&typeof t=="object"}const hi="Failed to compare objects using JSON.stringify";function di(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Or(t,e){try{return t===e?!0:Un(t)&&Un(e)?di(Object.keys(t).sort(),Object.keys(e).sort())?Object.keys(t).every(r=>Or(t[r],e[r])):!1:di(t,e)}catch(n){const r=Xe(n);throw r.message.startsWith(hi)||(r.message=`${hi}: ${r.message}`),r}}const Xo=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Se(t,e){return t?Xo.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Qo(t,e){return t&&e.every(n=>Se(t,n))}function re(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Zo(t){return re(t).map(e=>t[e])}function ls(t,e,n=!1,r={}){const i=re(t),s=new Set(re(e));if(!n){const o=i.filter(a=>!s.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}s.forEach(o=>{if(!Se(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(c){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${c}`)}const l=t[o],u=e[o];r[o]||cs(l,u,a,n,r[o]??{})})}function cs(t,e,n,r,i){var a;const s=typeof t,o=typeof e;s!==o&&n(`type "${s}" did not match expected type "${o}"`);try{Se(e,"constructor")&&(!Se(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,u)=>{if(e.map(h=>{try{cs(l,h,n,r,i);return}catch(d){return new Error(`entry at index "${u}" did not match expected shape: ${zr(d)}`)}}).filter(as).length===e.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${e.join(", ")}"`)})):Un(e)&&ls(t,e,r,i)}function Ir(t){return Array.isArray(t)?"array":typeof t}function sn(t,e){return Ir(t)===e}function ea(t,e,n){if(!sn(t,e))throw new TypeError(`'${n}' is of type '${Ir(t)}' but type '${e}' was expected.`)}function fi({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(sn(n,"object")?ls(r,n):ea(r,Ir(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function ta(t,e){return re(t).filter(r=>{const i=t[r];return e(r,i,t)}).reduce((r,i)=>(r[i]=t[i],r),{})}function na(t,e){return ta(t,n=>!e.includes(n))}function Le(t,e){let n=!1;const r=re(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(re(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function Wn(t){const e=nt();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ra(t){return!!(Se(t,"then")&&typeof t.then=="function")}class ia extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function sa(t,e){return new Promise(async(n,r)=>{const i=t===1/0?void 0:setTimeout(()=>{r(new ia(t))},t);try{const s=await e;n(s)}catch(s){r(s)}finally{clearTimeout(i)}})}function nt(){let t,e,n=!1;const r=new Promise((i,s)=>{t=o=>(n=!0,i(o)),e=o=>{n=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${nt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function oa(t,e){try{return aa(t,e),!0}catch{return!1}}function aa(t,e,n){if(t.length<e)throw new Error(n?`'${n}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}const la=globalThis.crypto;function ca(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return la.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function te(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lr=t=>(...e)=>({_$litDirective$:t,values:e});let bn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var En;const on=window,rt=on.trustedTypes,mi=rt?rt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Vn="$lit$",we=`lit$${(Math.random()+"").slice(9)}$`,hs="?"+we,ua=`<${hs}>`,Be=document,Et=()=>Be.createComment(""),$t=t=>t===null||typeof t!="object"&&typeof t!="function",ds=Array.isArray,ha=t=>ds(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",$n=`[ 	
\f\r]`,ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gi=/-->/g,pi=/>/g,Pe=RegExp(`>|${$n}(?:([^\\s"'>=/]+)(${$n}*=${$n}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yi=/'/g,vi=/"/g,fs=/^(?:script|style|textarea|title)$/i,da=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),fa=da(1),me=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),bi=new WeakMap,ke=Be.createTreeWalker(Be,129,null,!1),ma=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=ut;for(let l=0;l<n;l++){const u=t[l];let c,h,d=-1,f=0;for(;f<u.length&&(o.lastIndex=f,h=o.exec(u),h!==null);)f=o.lastIndex,o===ut?h[1]==="!--"?o=gi:h[1]!==void 0?o=pi:h[2]!==void 0?(fs.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=Pe):h[3]!==void 0&&(o=Pe):o===Pe?h[0]===">"?(o=i??ut,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?Pe:h[3]==='"'?vi:yi):o===vi||o===yi?o=Pe:o===gi||o===pi?o=ut:(o=Pe,i=void 0);const m=o===Pe&&t[l+1].startsWith("/>")?" ":"";s+=o===ut?u+ua:d>=0?(r.push(c),u.slice(0,d)+Vn+u.slice(d)+we+m):u+we+(d===-2?(r.push(void 0),l):m)}const a=s+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[mi!==void 0?mi.createHTML(a):a,r]};let qn=class ms{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[u,c]=ma(e,n);if(this.el=ms.createElement(u,r),ke.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=ke.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith(Vn)||d.startsWith(we)){const f=c[o++];if(h.push(d),f!==void 0){const m=i.getAttribute(f.toLowerCase()+Vn).split(we),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?pa:g[1]==="?"?va:g[1]==="@"?ba:wn})}else l.push({type:6,index:s})}for(const d of h)i.removeAttribute(d)}if(fs.test(i.tagName)){const h=i.textContent.split(we),d=h.length-1;if(d>0){i.textContent=rt?rt.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],Et()),ke.nextNode(),l.push({type:2,index:++s});i.append(h[d],Et())}}}else if(i.nodeType===8)if(i.data===hs)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(we,h+1))!==-1;)l.push({type:7,index:s}),h+=we.length-1}s++}}static createElement(e,n){const r=Be.createElement("template");return r.innerHTML=e,r}};function it(t,e,n=t,r){var i,s,o,a;if(e===me)return e;let l=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const u=$t(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=it(t,l._$AS(t,e.values),l,r)),e}let ga=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Be).importNode(r,!0);ke.currentNode=s;let o=ke.nextNode(),a=0,l=0,u=i[0];for(;u!==void 0;){if(a===u.index){let c;u.type===2?c=new Br(o,o.nextSibling,this,e):u.type===1?c=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(c=new wa(o,this,e)),this._$AV.push(c),u=i[++l]}a!==(u==null?void 0:u.index)&&(o=ke.nextNode(),a++)}return ke.currentNode=Be,s}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Br=class gs{constructor(e,n,r,i){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=it(this,e,n),$t(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==me&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ha(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==B&&$t(this._$AH)?this._$AA.nextSibling.data=e:this.$(Be.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=qn.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.v(r);else{const o=new ga(s,this),a=o.u(this.options);o.v(r),this.$(a),this._$AH=o}}_$AC(e){let n=bi.get(e.strings);return n===void 0&&bi.set(e.strings,n=new qn(e)),n}T(e){ds(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new gs(this.k(Et()),this.k(Et()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},wn=class{constructor(e,n,r,i,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=it(this,e,n,0),o=!$t(e)||e!==this._$AH&&e!==me,o&&(this._$AH=e);else{const a=e;let l,u;for(e=s[0],l=0;l<s.length-1;l++)u=it(this,a[r+l],n,l),u===me&&(u=this._$AH[l]),o||(o=!$t(u)||u!==this._$AH[l]),u===B?e=B:e!==B&&(e+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pa=class extends wn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const ya=rt?rt.emptyScript:"";let va=class extends wn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,ya):this.element.removeAttribute(this.name)}},ba=class extends wn{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=it(this,e,n,0))!==null&&r!==void 0?r:B)===me)return;const i=this._$AH,s=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},wa=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){it(this,e)}};const wi=on.litHtmlPolyfillSupport;wi==null||wi(qn,Br),((En=on.litHtmlVersions)!==null&&En!==void 0?En:on.litHtmlVersions=[]).push("2.7.4");const _a=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Br(e.insertBefore(Et(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yn=class extends bn{constructor(e){if(super(e),this.et=B,e.type!==us.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===B||e==null)return this.ft=void 0,this.et=e;if(e===me)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Yn.directiveName="unsafeHTML",Yn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _i=class extends Yn{};_i.directiveName="unsafeSVG",_i.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sa(t,e,n){return t?e():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=window,Mr=Yt.ShadowRoot&&(Yt.ShadyCSS===void 0||Yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jr=Symbol(),Si=new WeakMap;let ps=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==jr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Mr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Si.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Si.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new ps(typeof t=="string"?t:t+"",void 0,jr),ys=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ps(n,t,jr)},xa=(t,e)=>{Mr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=Yt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},xi=Mr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var An;const an=window,Ei=an.trustedTypes,Ea=Ei?Ei.emptyScript:"",$i=an.reactiveElementPolyfillSupport,Jn={toAttribute(t,e){switch(e){case Boolean:t=t?Ea:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},vs=(t,e)=>e!==t&&(e==e||t==t),Tn={attribute:!0,type:String,converter:Jn,reflect:!1,hasChanged:vs};let qe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Tn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Tn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(xi(i))}else e!==void 0&&n.push(xi(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xa(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Tn){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Jn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Jn;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||vs)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};qe.finalized=!0,qe.elementProperties=new Map,qe.elementStyles=[],qe.shadowRootOptions={mode:"open"},$i==null||$i({ReactiveElement:qe}),((An=an.reactiveElementVersions)!==null&&An!==void 0?An:an.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pn,Cn;let pt=class extends qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_a(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return me}};pt.finalized=!0,pt._$litElement$=!0,(Pn=globalThis.litElementHydrateSupport)===null||Pn===void 0||Pn.call(globalThis,{LitElement:pt});const Ai=globalThis.litElementPolyfillSupport;Ai==null||Ai({LitElement:pt});((Cn=globalThis.litElementVersions)!==null&&Cn!==void 0?Cn:globalThis.litElementVersions=[]).push("3.3.2");var $a=globalThis&&globalThis.__esDecorate||function(t,e,n,r,i,s){function o(p){if(p!==void 0&&typeof p!="function")throw new TypeError("Function expected");return p}for(var a=r.kind,l=a==="getter"?"get":a==="setter"?"set":"value",u=!e&&t?r.static?t:t.prototype:null,c=e||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),h,d=!1,f=n.length-1;f>=0;f--){var m={};for(var g in r)m[g]=g==="access"?{}:r[g];for(var g in r.access)m.access[g]=r.access[g];m.addInitializer=function(p){if(d)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(p||null))};var v=(0,n[f])(a==="accessor"?{get:c.get,set:c.set}:c[l],m);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(h=o(v.get))&&(c.get=h),(h=o(v.set))&&(c.set=h),(h=o(v.init))&&i.push(h)}else(h=o(v))&&(a==="field"?i.push(h):c[l]=h)}u&&Object.defineProperty(u,r.name,c),d=!0},Aa=globalThis&&globalThis.__runInitializers||function(t,e,n){for(var r=arguments.length>2,i=0;i<e.length;i++)n=r?e[i].call(t,n):e[i].call(t);return r?n:void 0},Ta=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Pa(){function t(e,n){return e}return t}let bs=(()=>{let t=[Pa()],e,n=[],r;return r=class extends pt{},Ta(r,"DeclarativeElement"),$a(null,e={value:r},t,{kind:"class",name:r.name},null,n),r=e.value,Aa(r,n),r})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ca=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function ws(t){return(e,n)=>n!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(t,e,n):Ca(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rn;((Rn=window.HTMLSlotElement)===null||Rn===void 0?void 0:Rn.prototype.assignedElements)!=null;const Gn=Symbol("this-is-an-element-vir-declarative-element"),Fr=Symbol("key for ignoring inputs not having been set yet"),Ra={[Fr]:!0,allowPolymorphicState:!1};function _s(t,e){const n=t.instanceState;re(e).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[r]=e[r]:t[r]=e[r]}),"instanceInputs"in t&&re(t.instanceInputs).forEach(r=>{r in e||(t.instanceInputs[r]=void 0)}),Ss(t)}function Ss(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function xs(t,e){return Xn(t,e),t.element}function Xn(t,e){if(t.type!==us.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function Hr(t,e){return e?Ti(t,e):Ti(void 0,t)}const Ti=Lr(class extends bn{constructor(t){super(t),this.element=xs(t,"assign")}render(t,e){return ka(t,this.element,e),me}});function ka(t,e,n){_s(e,n)}function Es(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof bs?!0:Es(n)}function $s(t,e){return`${t}-${Yo(e)}`}function Na(t,e){return e?Le(e,n=>se(`--${$s(t,String(n))}`)):{}}function Da(t,e){return t?Le(t,(n,r)=>{const i=e[n];return se(`var(${i}, ${r})`)}):{}}class za extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function As(){return t=>{var e;return e=class extends za{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function Jt(){return As()}function Oa(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=As()(n);return e[n]=r,e},{}):{}}const Qn="_is_element_vir_observable_property_handler_instance",Zn="_is_element_vir_observable_property_handler_creator";function Ia(t){return Se(t,Zn)&&t[Zn]===!0}function La(t){return Se(t,Qn)&&t[Qn]===!0}function Ba(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Pi(t,e){const n=t;function r(o){e?Ba(o,t,t.tagName):ws()(t,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set:(o,a,l)=>{r(a);const u=t.observablePropertyHandlerMap[a];function c(h){o[a]=h,n[a]=h}return Ia(l)&&(l=l.init()),La(l)?(u&&l!==u?(l.addMultipleListeners(u.getAllListeners()),u.removeAllListeners()):l.addListener(!0,h=>{c(h)}),t.observablePropertyHandlerMap[a]=l):u?u.setValue(l):c(l),!0},ownKeys:o=>Reflect.ownKeys(o),getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has:(o,a)=>Reflect.has(o,a)})}function Ma(t,e){return e?Le(e,n=>$s(t,String(n))):{}}function ja({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:Le(t,(r,i)=>se(`:host(.${i})`)),hostClassNames:Le(t,(r,i)=>se(i)),cssVarNames:e,cssVarValues:n}}function Fa({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:i}){e&&re(e).forEach(s=>{const o=e[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?t.classList.add(a):t.classList.remove(a))})}function Ha(t,e){function n(i){re(i).forEach(s=>{const o=i[s];t.instanceState[s]=o})}return{dispatch:i=>t.dispatchEvent(i),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Ka=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Kr(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const n=Oa(t.events),r=Ma(t.tagName,t.hostClasses),i=Na(t.tagName,t.cssVars),s=Da(t.cssVars,i),o={...Ra,...t.options},a=typeof t.styles=="function"?t.styles(ja({hostClassNames:r,cssVarNames:i,cssVarValues:s})):t.styles||ys``,l=t.renderCallback,u=(e=class extends bs{createRenderParams(){return Ha(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Ss(this)}render(){try{Es(this)&&!this.haveInputsBeenSet&&!o[Fr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${Hr.name}" directive on it. If no inputs are intended, use "${Kr.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const h=l(c);return Fa({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},h}catch(c){const h=Xe(c);throw h.message=`Failed to render '${t.tagName}': ${h.message}`,h}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){_s(this,c)}constructor(){var h;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Pi(this,!1),this.instanceState=Pi(this,!((h=t.options)!=null&&h.allowPolymorphicState));const c=t.stateInit||{};re(c).forEach(d=>{ws()(this,d),this.instanceState[d]=c[d]}),this.definition=u}},Ka(e,"anonymousClass"),e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=i,e.stateInit=t.stateInit,e.cssVarValues=i,e);return Object.defineProperties(u,{[Gn]:{value:!0,writable:!1},name:{value:qo(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof u,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,u),u}function Ts(){return t=>Kr({...t,options:{[Fr]:!1,...t.options}})}function yt(t,e){return Ua(t,e)}const Ua=Lr(class extends bn{constructor(t){super(t),this.element=xs(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),me}}),Ci="onDomCreated",Ri=Lr(class extends bn{constructor(t){super(t),Xn(t,Ci)}update(t,[e]){Xn(t,Ci);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function er(t,e,n,r){return t instanceof Error?r?r(t):zr(t):ra(t)?e:n?n(t):t}function ki(t,e,n){return Sa(t,()=>e,()=>n)}var Ps;const G=Symbol("not set");class Wa{constructor(e){this.lastTrigger=G,this.resolutionValue=G,this.rejectionError=G,this.listeners=new Set,this.waitingForValuePromise=nt(),this[Ps]=!0,this.resetValue(e)}resetValue(e){this.resetWaitingForValuePromise(),e!==G&&(e instanceof Promise?this.setValue({newPromise:e}):this.setValue({resolvedValue:e}))}fireListeners(){const e=this.getValue();this.listeners.forEach(n=>{n(e)})}setPromise(e){e!==this.lastSetPromise&&(this.resolutionValue=G,this.rejectionError=G,this.lastSetPromise=e,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),e.then(n=>{this.lastSetPromise===e&&this.resolveValue(n)}).catch(n=>{this.lastSetPromise===e&&(this.rejectionError=Xe(n),this.waitingForValuePromise.promise.catch(()=>{}),this.waitingForValuePromise.reject(n),this.fireListeners())}))}resolveValue(e){e!==this.resolutionValue&&(this.rejectionError=G,this.resolutionValue=e,this.waitingForValuePromise.isSettled()&&this.resetWaitingForValuePromise(),this.waitingForValuePromise.resolve(e),this.fireListeners())}resetWaitingForValuePromise(){this.waitingForValuePromise=nt()}setValue(e){if("createPromise"in e){if(this.lastTrigger===G||!Or(e.trigger,this.lastTrigger)){this.lastTrigger=e.trigger;const n=e.createPromise();this.setPromise(n),this.fireListeners()}}else"newPromise"in e?(this.lastTrigger,this.setPromise(e.newPromise),this.fireListeners()):"resolvedValue"in e?this.resolveValue(e.resolvedValue):"forceUpdate"in e?(this.lastTrigger=G,this.resolutionValue=G,this.waitingForValuePromise.isSettled()||this.waitingForValuePromise.reject("Canceled by force update"),this.resetWaitingForValuePromise(),this.fireListeners()):this.resetValue(e)}getValue(){if(this.waitingForValuePromise.isSettled()){if(this.rejectionError!==G)return this.rejectionError;if(this.resolutionValue===G)throw new Error("Promise says it has settled but resolution value was not set!");return this.resolutionValue}else return this.waitingForValuePromise.promise}addListener(e,n){this.listeners.add(n),e&&n(this.getValue())}addMultipleListeners(e){e.forEach(n=>this.listeners.add(n))}getAllListeners(){return this.listeners}removeListener(e){return this.listeners.has(e)?(this.listeners.delete(e),!0):!1}removeAllListeners(){const e=this.listeners.size;return this.listeners.clear(),e}}Ps=Qn;function Cs(...t){const e=oa(t,1)?t[0]:G;return{[Zn]:!0,init(){return new Wa(e)}}}function Va(t){const{assertInputs:e,transformInputs:n}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(r=>r)};return{defineElement:()=>r=>(e(r),Ts()(n(r))),defineElementNoInputs:r=>(e(r),Kr(n(r)))}}function qa(t,e){return t.filter((n,r)=>!e.includes(r))}function Rs(t){return t.filter(e=>Qo(e,["tagName",Gn])&&!!e.tagName&&!!e[Gn])}const ks=new WeakMap;function Ya(t,e){var i;const n=Rs(e);return(i=Ns(ks,[t,...n]).value)==null?void 0:i.template}function Ja(t,e,n){const r=Rs(e);return zs(ks,[t,...r],n)}function Ns(t,e,n=0){const{currentTemplateAndNested:r,reason:i}=Ds(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Ns(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Ds(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=t.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function zs(t,e,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Ds(t,e,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||t.set(s,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),zs(l,e,n,r+1)}function Os(t,e,n){return{name:t,check:e,transform:n}}const Ga=new WeakMap;function Is(t,e,n){const r=Ya(t,e),i=r??n();if(!r){const o=Ja(t,e,i);if(o.result)Ga.set(t,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=qa(e,i.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function Ls(t,e,n,r){const i=[],s=[],o=[];return t.forEach((l,u)=>{var v;const c=i.length-1,h=i[c],d=u-1,f=e[d];let m;r&&r(l),typeof h=="string"&&(m=(v=n.find(p=>p.check(h,l,f)))==null?void 0:v.transform,m&&(i[c]=h+m(f)+l,o.push(d))),m||i.push(l);const g=t.raw[u];m?s[c]=s[c]+m(f)+g:s.push(g)}),{templateStrings:Object.assign([],i,{raw:s}),valueIndexDeletions:o}}function Bs(t){return Se(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Xa=[Os("tag name css selector interpolation",(t,e,n)=>Bs(n),t=>t.tagName)];function Qa(t,e){return Ls(t,e,Xa)}function Ge(t,...e){const n=Is(t,e,()=>Qa(t,e));return ys(n.strings,...n.values)}const Za=[Os("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),i=Bs(n);if(r&&!i)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&i},t=>t.tagName)];function el(t){}function tl(t){return Ls(t.strings,t.values,Za,el)}function F(t,...e){const n=fa(t,...e),r=Is(t,e,()=>tl(n));return{...n,strings:r.strings,values:r.values}}function nl(t,e){return t<e}function rl(t,e){return t>e}const Ni={width:250,height:250};function il({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?rl:nl)(e.width/e.height,t.width/t.height)?"width":"height"}function kn({box:t,constraint:e,constraintType:n}){const r=il({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Ms({box:t,ratio:e}){return Le(t,(n,r)=>r*e)}function tr({box:t,min:e,max:n}){return Le(t,(r,i)=>Jo({value:i,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function js({min:t,max:e,box:n}){const r=Fs({min:t,max:e,box:n}),i=Ms({box:n,ratio:r});return{height:Math.floor(i.height||(t==null?void 0:t.height)||Ni.height),width:Math.floor(i.width||(t==null?void 0:t.width)||Ni.width)}}function Fs({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?kn({box:n,constraint:t,constraintType:"min"}):1,i=e?kn({box:n,constraint:e,constraintType:"max"}):1,s=r>1?r:i<1?i:1,o=Ms({ratio:s,box:n});return(t?kn({box:o,constraint:t,constraintType:"min"}):1)>1?r:s}function Ne(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],s=(e??[""]).map((o,a)=>{const l=sl(o,r[a]);return`${o}${l}`});return Dr(s.join(""))}function sl(t,e){return e._$litType$!=null||e._$litDirective$!=null?Ne(e):Array.isArray(e)?e.map(r=>Ne(r)).join(""):t.endsWith("=")?`"${e}"`:e}function ol(t){const e=al(t);return sn(e,"object")||sn(e,"array")}function al(t){const e=fi({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=ll(t);return fi({jsonString:n,errorHandler:()=>{}})}function ll(t){return Dr(t).replace(/,\s*([}\]])/,"$1")}const Ur="vir-resizable-image";function cl(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var st=cl();function ul(){try{if(!st||!st.open)return!1;var t=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),e=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!t||e)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Wr(t,e){t=t||[],e=e||{};try{return new Blob(t,e)}catch(s){if(s.name!=="TypeError")throw s;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<t.length;i+=1)r.append(t[i]);return r.getBlob(e.type)}}typeof Promise>"u"&&require("lie/polyfill");const T=Promise;function k(t,e){e&&t.then(function(n){e(null,n)},function(n){e(n)})}function Ye(t,e,n){typeof e=="function"&&t.then(e),typeof n=="function"&&t.catch(n)}function pe(t){return typeof t!="string"&&(console.warn(`${t} used as a key, but it is not a string.`),t=String(t)),t}function Vr(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const nr="local-forage-detect-blob-support";let Bt;const ee={},hl=Object.prototype.toString,Dt="readonly",_n="readwrite";function dl(t){for(var e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n),i=0;i<e;i++)r[i]=t.charCodeAt(i);return n}function fl(t){return new T(function(e){var n=t.transaction(nr,_n),r=Wr([""]);n.objectStore(nr).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),e(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),s=navigator.userAgent.match(/Edge\//);e(s||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function ml(t){return typeof Bt=="boolean"?T.resolve(Bt):fl(t).then(function(e){return Bt=e,Bt})}function ln(t){var e=ee[t.name],n={};n.promise=new T(function(r,i){n.resolve=r,n.reject=i}),e.deferredOperations.push(n),e.dbReady?e.dbReady=e.dbReady.then(function(){return n.promise}):e.dbReady=n.promise}function rr(t){var e=ee[t.name],n=e.deferredOperations.pop();if(n)return n.resolve(),n.promise}function ir(t,e){var n=ee[t.name],r=n.deferredOperations.pop();if(r)return r.reject(e),r.promise}function Hs(t,e){return new T(function(n,r){if(ee[t.name]=ee[t.name]||Vs(),t.db)if(e)ln(t),t.db.close();else return n(t.db);var i=[t.name];e&&i.push(t.version);var s=st.open.apply(st,i);e&&(s.onupgradeneeded=function(o){var a=s.result;try{a.createObjectStore(t.storeName),o.oldVersion<=1&&a.createObjectStore(nr)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+t.name+'" has been upgraded from version '+o.oldVersion+" to version "+o.newVersion+', but the storage "'+t.storeName+'" already exists.');else throw l}}),s.onerror=function(o){o.preventDefault(),r(s.error)},s.onsuccess=function(){var o=s.result;o.onversionchange=function(a){a.target.close()},n(o),rr(t)}})}function qr(t){return Hs(t,!1)}function Yr(t){return Hs(t,!0)}function Ks(t,e){if(!t.db)return!0;var n=!t.db.objectStoreNames.contains(t.storeName),r=t.version<t.db.version,i=t.version>t.db.version;if(r&&(t.version!==e&&console.warn('The database "'+t.name+`" can't be downgraded from version `+t.db.version+" to version "+t.version+"."),t.version=t.db.version),i||n){if(n){var s=t.db.version+1;s>t.version&&(t.version=s)}return!0}return!1}function gl(t){return new T(function(e,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var s=btoa(i.target.result||"");e({__local_forage_encoded_blob:!0,data:s,type:t.type})},r.readAsBinaryString(t)})}function Us(t){var e=dl(atob(t.data));return Wr([e],{type:t.type})}function Ws(t){return t&&t.__local_forage_encoded_blob}function pl(t){var e=this,n=e._initReady().then(function(){var r=ee[e._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return Ye(n,t,t),n}function yl(t){ln(t);for(var e=ee[t.name],n=e.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return t.db=null,qr(t).then(i=>(t.db=i,Ks(t)?Yr(t):i)).then(i=>{t.db=e.db=i;for(var s=0;s<n.length;s++)n[s]._dbInfo.db=i}).catch(i=>{throw ir(t,i),i})}function ye(t,e,n,r){r===void 0&&(r=1);try{var i=t.db.transaction(t.storeName,e);n(null,i)}catch(s){if(r>0&&(!t.db||s.name==="InvalidStateError"||s.name==="NotFoundError"))return T.resolve().then(()=>{if(!t.db||s.name==="NotFoundError"&&!t.db.objectStoreNames.contains(t.storeName)&&t.version<=t.db.version)return t.db&&(t.version=t.db.version+1),Yr(t)}).then(()=>yl(t).then(function(){ye(t,e,n,r-1)})).catch(n);n(s)}}function Vs(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function vl(t){var e=this,n={db:null};if(t)for(var r in t)n[r]=t[r];var i=ee[n.name];i||(i=Vs(),ee[n.name]=i),i.forages.push(e),e._initReady||(e._initReady=e.ready,e.ready=pl);var s=[];function o(){return T.resolve()}for(var a=0;a<i.forages.length;a++){var l=i.forages[a];l!==e&&s.push(l._initReady().catch(o))}var u=i.forages.slice(0);return T.all(s).then(function(){return n.db=i.db,qr(n)}).then(function(c){return n.db=c,Ks(n,e._defaultConfig.version)?Yr(n):c}).then(function(c){n.db=i.db=c,e._dbInfo=n;for(var h=0;h<u.length;h++){var d=u[h];d!==e&&(d._dbInfo.db=n.db,d._dbInfo.version=n.version)}})}function bl(t,e){var n=this;t=pe(t);var r=new T(function(i,s){n.ready().then(function(){ye(n._dbInfo,Dt,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),u=l.get(t);u.onsuccess=function(){var c=u.result;c===void 0&&(c=null),Ws(c)&&(c=Us(c)),i(c)},u.onerror=function(){s(u.error)}}catch(c){s(c)}})}).catch(s)});return k(r,e),r}function wl(t,e){var n=this,r=new T(function(i,s){n.ready().then(function(){ye(n._dbInfo,Dt,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),u=l.openCursor(),c=1;u.onsuccess=function(){var h=u.result;if(h){var d=h.value;Ws(d)&&(d=Us(d));var f=t(d,h.key,c++);f!==void 0?i(f):h.continue()}else i()},u.onerror=function(){s(u.error)}}catch(h){s(h)}})}).catch(s)});return k(r,e),r}function _l(t,e,n){var r=this;t=pe(t);var i=new T(function(s,o){var a;r.ready().then(function(){return a=r._dbInfo,hl.call(e)==="[object Blob]"?ml(a.db).then(function(l){return l?e:gl(e)}):e}).then(function(l){ye(r._dbInfo,_n,function(u,c){if(u)return o(u);try{var h=c.objectStore(r._dbInfo.storeName);l===null&&(l=void 0);var d=h.put(l,t);c.oncomplete=function(){l===void 0&&(l=null),s(l)},c.onabort=c.onerror=function(){var f=d.error?d.error:d.transaction.error;o(f)}}catch(f){o(f)}})}).catch(o)});return k(i,n),i}function Sl(t,e){var n=this;t=pe(t);var r=new T(function(i,s){n.ready().then(function(){ye(n._dbInfo,_n,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),u=l.delete(t);a.oncomplete=function(){i()},a.onerror=function(){s(u.error)},a.onabort=function(){var c=u.error?u.error:u.transaction.error;s(c)}}catch(c){s(c)}})}).catch(s)});return k(r,e),r}function xl(t){var e=this,n=new T(function(r,i){e.ready().then(function(){ye(e._dbInfo,_n,function(s,o){if(s)return i(s);try{var a=o.objectStore(e._dbInfo.storeName),l=a.clear();o.oncomplete=function(){r()},o.onabort=o.onerror=function(){var u=l.error?l.error:l.transaction.error;i(u)}}catch(u){i(u)}})}).catch(i)});return k(n,t),n}function El(t){var e=this,n=new T(function(r,i){e.ready().then(function(){ye(e._dbInfo,Dt,function(s,o){if(s)return i(s);try{var a=o.objectStore(e._dbInfo.storeName),l=a.count();l.onsuccess=function(){r(l.result)},l.onerror=function(){i(l.error)}}catch(u){i(u)}})}).catch(i)});return k(n,t),n}function $l(t,e){var n=this,r=new T(function(i,s){if(t<0){i(null);return}n.ready().then(function(){ye(n._dbInfo,Dt,function(o,a){if(o)return s(o);try{var l=a.objectStore(n._dbInfo.storeName),u=!1,c=l.openKeyCursor();c.onsuccess=function(){var h=c.result;if(!h){i(null);return}t===0||u?i(h.key):(u=!0,h.advance(t))},c.onerror=function(){s(c.error)}}catch(h){s(h)}})}).catch(s)});return k(r,e),r}function Al(t){var e=this,n=new T(function(r,i){e.ready().then(function(){ye(e._dbInfo,Dt,function(s,o){if(s)return i(s);try{var a=o.objectStore(e._dbInfo.storeName),l=a.openKeyCursor(),u=[];l.onsuccess=function(){var c=l.result;if(!c){r(u);return}u.push(c.key),c.continue()},l.onerror=function(){i(l.error)}}catch(c){i(c)}})}).catch(i)});return k(n,t),n}function Tl(t,e){e=Vr.apply(this,arguments);var n=this.config();t=typeof t!="function"&&t||{},t.name||(t.name=t.name||n.name,t.storeName=t.storeName||n.storeName);var r=this,i;if(!t.name)i=T.reject("Invalid arguments");else{const o=t.name===n.name&&r._dbInfo.db?T.resolve(r._dbInfo.db):qr(t).then(a=>{const l=ee[t.name],u=l.forages;l.db=a;for(var c=0;c<u.length;c++)u[c]._dbInfo.db=a;return a});t.storeName?i=o.then(a=>{if(!a.objectStoreNames.contains(t.storeName))return;const l=a.version+1;ln(t);const u=ee[t.name],c=u.forages;a.close();for(let d=0;d<c.length;d++){const f=c[d];f._dbInfo.db=null,f._dbInfo.version=l}return new T((d,f)=>{const m=st.open(t.name,l);m.onerror=g=>{m.result.close(),f(g)},m.onupgradeneeded=()=>{var g=m.result;g.deleteObjectStore(t.storeName)},m.onsuccess=()=>{const g=m.result;g.close(),d(g)}}).then(d=>{u.db=d;for(let f=0;f<c.length;f++){const m=c[f];m._dbInfo.db=d,rr(m._dbInfo)}}).catch(d=>{throw(ir(t,d)||T.resolve()).catch(()=>{}),d})}):i=o.then(a=>{ln(t);const l=ee[t.name],u=l.forages;a.close();for(var c=0;c<u.length;c++){const d=u[c];d._dbInfo.db=null}return new T((d,f)=>{var m=st.deleteDatabase(t.name);m.onerror=()=>{const g=m.result;g&&g.close(),f(m.error)},m.onblocked=()=>{console.warn('dropInstance blocked for database "'+t.name+'" until all open connections are closed')},m.onsuccess=()=>{const g=m.result;g&&g.close(),d(g)}}).then(d=>{l.db=d;for(var f=0;f<u.length;f++){const m=u[f];rr(m._dbInfo)}}).catch(d=>{throw(ir(t,d)||T.resolve()).catch(()=>{}),d})})}return k(i,e),i}var Pl={_driver:"asyncStorage",_initStorage:vl,_support:ul(),iterate:wl,getItem:bl,setItem:_l,removeItem:Sl,clear:xl,length:El,key:$l,keys:Al,dropInstance:Tl};function Cl(){return typeof openDatabase=="function"}var _e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Rl="~~local_forage_type~",Di=/^~~local_forage_type~([^~]+)~/,cn="__lfsc__:",sr=cn.length,Jr="arbf",or="blob",qs="si08",Ys="ui08",Js="uic8",Gs="si16",Xs="si32",Qs="ur16",Zs="ui32",eo="fl32",to="fl64",zi=sr+Jr.length,Oi=Object.prototype.toString;function no(t){var e=t.length*.75,n=t.length,r,i=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);var u=new ArrayBuffer(e),c=new Uint8Array(u);for(r=0;r<n;r+=4)s=_e.indexOf(t[r]),o=_e.indexOf(t[r+1]),a=_e.indexOf(t[r+2]),l=_e.indexOf(t[r+3]),c[i++]=s<<2|o>>4,c[i++]=(o&15)<<4|a>>2,c[i++]=(a&3)<<6|l&63;return u}function ar(t){var e=new Uint8Array(t),n="",r;for(r=0;r<e.length;r+=3)n+=_e[e[r]>>2],n+=_e[(e[r]&3)<<4|e[r+1]>>4],n+=_e[(e[r+1]&15)<<2|e[r+2]>>6],n+=_e[e[r+2]&63];return e.length%3===2?n=n.substring(0,n.length-1)+"=":e.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function kl(t,e){var n="";if(t&&(n=Oi.call(t)),t&&(n==="[object ArrayBuffer]"||t.buffer&&Oi.call(t.buffer)==="[object ArrayBuffer]")){var r,i=cn;t instanceof ArrayBuffer?(r=t,i+=Jr):(r=t.buffer,n==="[object Int8Array]"?i+=qs:n==="[object Uint8Array]"?i+=Ys:n==="[object Uint8ClampedArray]"?i+=Js:n==="[object Int16Array]"?i+=Gs:n==="[object Uint16Array]"?i+=Qs:n==="[object Int32Array]"?i+=Xs:n==="[object Uint32Array]"?i+=Zs:n==="[object Float32Array]"?i+=eo:n==="[object Float64Array]"?i+=to:e(new Error("Failed to get type for BinaryArray"))),e(i+ar(r))}else if(n==="[object Blob]"){var s=new FileReader;s.onload=function(){var o=Rl+t.type+"~"+ar(this.result);e(cn+or+o)},s.readAsArrayBuffer(t)}else try{e(JSON.stringify(t))}catch(o){console.error("Couldn't convert value into a JSON string: ",t),e(null,o)}}function Nl(t){if(t.substring(0,sr)!==cn)return JSON.parse(t);var e=t.substring(zi),n=t.substring(sr,zi),r;if(n===or&&Di.test(e)){var i=e.match(Di);r=i[1],e=e.substring(i[0].length)}var s=no(e);switch(n){case Jr:return s;case or:return Wr([s],{type:r});case qs:return new Int8Array(s);case Ys:return new Uint8Array(s);case Js:return new Uint8ClampedArray(s);case Gs:return new Int16Array(s);case Qs:return new Uint16Array(s);case Xs:return new Int32Array(s);case Zs:return new Uint32Array(s);case eo:return new Float32Array(s);case to:return new Float64Array(s);default:throw new Error("Unkown type: "+n)}}var Gr={serialize:kl,deserialize:Nl,stringToBuffer:no,bufferToString:ar};function ro(t,e,n,r){t.executeSql(`CREATE TABLE IF NOT EXISTS ${e.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function Dl(t){var e=this,n={db:null};if(t)for(var r in t)n[r]=typeof t[r]!="string"?t[r].toString():t[r];var i=new T(function(s,o){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(a){return o(a)}n.db.transaction(function(a){ro(a,n,function(){e._dbInfo=n,s()},function(l,u){o(u)})},o)});return n.serializer=Gr,i}function Ae(t,e,n,r,i,s){t.executeSql(n,r,i,function(o,a){a.code===a.SYNTAX_ERR?o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[e.storeName],function(l,u){u.rows.length?s(l,a):ro(l,e,function(){l.executeSql(n,r,i,s)},s)},s):s(o,a)},s)}function zl(t,e){var n=this;t=pe(t);var r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[t],function(l,u){var c=u.rows.length?u.rows.item(0).value:null;c&&(c=o.serializer.deserialize(c)),i(c)},function(l,u){s(u)})})}).catch(s)});return k(r,e),r}function Ol(t,e){var n=this,r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`SELECT * FROM ${o.storeName}`,[],function(l,u){for(var c=u.rows,h=c.length,d=0;d<h;d++){var f=c.item(d),m=f.value;if(m&&(m=o.serializer.deserialize(m)),m=t(m,f.key,d+1),m!==void 0){i(m);return}}i()},function(l,u){s(u)})})}).catch(s)});return k(r,e),r}function io(t,e,n,r){var i=this;t=pe(t);var s=new T(function(o,a){i.ready().then(function(){e===void 0&&(e=null);var l=e,u=i._dbInfo;u.serializer.serialize(e,function(c,h){h?a(h):u.db.transaction(function(d){Ae(d,u,`INSERT OR REPLACE INTO ${u.storeName} (key, value) VALUES (?, ?)`,[t,c],function(){o(l)},function(f,m){a(m)})},function(d){if(d.code===d.QUOTA_ERR){if(r>0){o(io.apply(i,[t,l,n,r-1]));return}a(d)}})})}).catch(a)});return k(s,n),s}function Il(t,e,n){return io.apply(this,[t,e,n,1])}function Ll(t,e){var n=this;t=pe(t);var r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[t],function(){i()},function(l,u){s(u)})})}).catch(s)});return k(r,e),r}function Bl(t){var e=this,n=new T(function(r,i){e.ready().then(function(){var s=e._dbInfo;s.db.transaction(function(o){Ae(o,s,`DELETE FROM ${s.storeName}`,[],function(){r()},function(a,l){i(l)})})}).catch(i)});return k(n,t),n}function Ml(t){var e=this,n=new T(function(r,i){e.ready().then(function(){var s=e._dbInfo;s.db.transaction(function(o){Ae(o,s,`SELECT COUNT(key) as c FROM ${s.storeName}`,[],function(a,l){var u=l.rows.item(0).c;r(u)},function(a,l){i(l)})})}).catch(i)});return k(n,t),n}function jl(t,e){var n=this,r=new T(function(i,s){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(a){Ae(a,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[t+1],function(l,u){var c=u.rows.length?u.rows.item(0).key:null;i(c)},function(l,u){s(u)})})}).catch(s)});return k(r,e),r}function Fl(t){var e=this,n=new T(function(r,i){e.ready().then(function(){var s=e._dbInfo;s.db.transaction(function(o){Ae(o,s,`SELECT key FROM ${s.storeName}`,[],function(a,l){for(var u=[],c=0;c<l.rows.length;c++)u.push(l.rows.item(c).key);r(u)},function(a,l){i(l)})})}).catch(i)});return k(n,t),n}function Hl(t){return new T(function(e,n){t.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,s){for(var o=[],a=0;a<s.rows.length;a++)o.push(s.rows.item(a).name);e({db:t,storeNames:o})},function(i,s){n(s)})},function(r){n(r)})})}function Kl(t,e){e=Vr.apply(this,arguments);var n=this.config();t=typeof t!="function"&&t||{},t.name||(t.name=t.name||n.name,t.storeName=t.storeName||n.storeName);var r=this,i;return t.name?i=new T(function(s){var o;t.name===n.name?o=r._dbInfo.db:o=openDatabase(t.name,"","",0),t.storeName?s({db:o,storeNames:[t.storeName]}):s(Hl(o))}).then(function(s){return new T(function(o,a){s.db.transaction(function(l){function u(f){return new T(function(m,g){l.executeSql(`DROP TABLE IF EXISTS ${f}`,[],function(){m()},function(v,p){g(p)})})}for(var c=[],h=0,d=s.storeNames.length;h<d;h++)c.push(u(s.storeNames[h]));T.all(c).then(function(){o()}).catch(function(f){a(f)})},function(l){a(l)})})}):i=T.reject("Invalid arguments"),k(i,e),i}var Ul={_driver:"webSQLStorage",_initStorage:Dl,_support:Cl(),iterate:Ol,getItem:zl,setItem:Il,removeItem:Ll,clear:Bl,length:Ml,key:jl,keys:Fl,dropInstance:Kl};function Wl(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function so(t,e){var n=t.name+"/";return t.storeName!==e.storeName&&(n+=t.storeName+"/"),n}function Vl(){var t="_localforage_support_test";try{return localStorage.setItem(t,!0),localStorage.removeItem(t),!1}catch{return!0}}function ql(){return!Vl()||localStorage.length>0}function Yl(t){var e=this,n={};if(t)for(var r in t)n[r]=t[r];return n.keyPrefix=so(t,e._defaultConfig),ql()?(e._dbInfo=n,n.serializer=Gr,T.resolve()):T.reject()}function Jl(t){var e=this,n=e.ready().then(function(){for(var r=e._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var s=localStorage.key(i);s.indexOf(r)===0&&localStorage.removeItem(s)}});return k(n,t),n}function Gl(t,e){var n=this;t=pe(t);var r=n.ready().then(function(){var i=n._dbInfo,s=localStorage.getItem(i.keyPrefix+t);return s&&(s=i.serializer.deserialize(s)),s});return k(r,e),r}function Xl(t,e){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,s=i.keyPrefix,o=s.length,a=localStorage.length,l=1,u=0;u<a;u++){var c=localStorage.key(u);if(c.indexOf(s)===0){var h=localStorage.getItem(c);if(h&&(h=i.serializer.deserialize(h)),h=t(h,c.substring(o),l++),h!==void 0)return h}}});return k(r,e),r}function Ql(t,e){var n=this,r=n.ready().then(function(){var i=n._dbInfo,s;try{s=localStorage.key(t)}catch{s=null}return s&&(s=s.substring(i.keyPrefix.length)),s});return k(r,e),r}function Zl(t){var e=this,n=e.ready().then(function(){for(var r=e._dbInfo,i=localStorage.length,s=[],o=0;o<i;o++){var a=localStorage.key(o);a.indexOf(r.keyPrefix)===0&&s.push(a.substring(r.keyPrefix.length))}return s});return k(n,t),n}function ec(t){var e=this,n=e.keys().then(function(r){return r.length});return k(n,t),n}function tc(t,e){var n=this;t=pe(t);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+t)});return k(r,e),r}function nc(t,e,n){var r=this;t=pe(t);var i=r.ready().then(function(){e===void 0&&(e=null);var s=e;return new T(function(o,a){var l=r._dbInfo;l.serializer.serialize(e,function(u,c){if(c)a(c);else try{localStorage.setItem(l.keyPrefix+t,u),o(s)}catch(h){(h.name==="QuotaExceededError"||h.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a(h),a(h)}})})});return k(i,n),i}function rc(t,e){if(e=Vr.apply(this,arguments),t=typeof t!="function"&&t||{},!t.name){var n=this.config();t.name=t.name||n.name,t.storeName=t.storeName||n.storeName}var r=this,i;return t.name?i=new T(function(s){t.storeName?s(so(t,r._defaultConfig)):s(`${t.name}/`)}).then(function(s){for(var o=localStorage.length-1;o>=0;o--){var a=localStorage.key(o);a.indexOf(s)===0&&localStorage.removeItem(a)}}):i=T.reject("Invalid arguments"),k(i,e),i}var ic={_driver:"localStorageWrapper",_initStorage:Yl,_support:Wl(),iterate:Xl,getItem:Gl,setItem:nc,removeItem:tc,clear:Jl,length:ec,key:Ql,keys:Zl,dropInstance:rc};const sc=(t,e)=>t===e||typeof t=="number"&&typeof e=="number"&&isNaN(t)&&isNaN(e),oc=(t,e)=>{const n=t.length;let r=0;for(;r<n;){if(sc(t[r],e))return!0;r++}return!1},oo=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"},ht={},Ii={},Qe={INDEXEDDB:Pl,WEBSQL:Ul,LOCALSTORAGE:ic},ac=[Qe.INDEXEDDB._driver,Qe.WEBSQL._driver,Qe.LOCALSTORAGE._driver],Gt=["dropInstance"],Nn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Gt),lc={description:"",driver:ac.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function cc(t,e){t[e]=function(){const n=arguments;return t.ready().then(function(){return t[e].apply(t,n)})}}function Dn(){for(let t=1;t<arguments.length;t++){const e=arguments[t];if(e)for(let n in e)e.hasOwnProperty(n)&&(oo(e[n])?arguments[0][n]=e[n].slice():arguments[0][n]=e[n])}return arguments[0]}class Xr{constructor(e){for(let n in Qe)if(Qe.hasOwnProperty(n)){const r=Qe[n],i=r._driver;this[n]=i,ht[i]||this.defineDriver(r)}this._defaultConfig=Dn({},lc),this._config=Dn({},this._defaultConfig,e),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(e){if(typeof e=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in e){if(n==="storeName"&&(e[n]=e[n].replace(/\W/g,"_")),n==="version"&&typeof e[n]!="number")return new Error("Database version must be a number.");this._config[n]=e[n]}return"driver"in e&&e.driver?this.setDriver(this._config.driver):!0}else return typeof e=="string"?this._config[e]:this._config}defineDriver(e,n,r){const i=new T(function(s,o){try{const a=e._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver){o(l);return}const u=Nn.concat("_initStorage");for(let d=0,f=u.length;d<f;d++){const m=u[d];if((!oc(Gt,m)||e[m])&&typeof e[m]!="function"){o(l);return}}(function(){const d=function(f){return function(){const m=new Error(`Method ${f} is not implemented by the current driver`),g=T.reject(m);return k(g,arguments[arguments.length-1]),g}};for(let f=0,m=Gt.length;f<m;f++){const g=Gt[f];e[g]||(e[g]=d(g))}})();const h=function(d){ht[a]&&console.info(`Redefining LocalForage driver: ${a}`),ht[a]=e,Ii[a]=d,s()};"_support"in e?e._support&&typeof e._support=="function"?e._support().then(h,o):h(!!e._support):h(!0)}catch(a){o(a)}});return Ye(i,n,r),i}driver(){return this._driver||null}getDriver(e,n,r){const i=ht[e]?T.resolve(ht[e]):T.reject(new Error("Driver not found."));return Ye(i,n,r),i}getSerializer(e){const n=T.resolve(Gr);return Ye(n,e),n}ready(e){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return Ye(r,e,e),r}setDriver(e,n,r){const i=this;oo(e)||(e=[e]);const s=this._getSupportedDrivers(e);function o(){i._config.driver=i.driver()}function a(c){return i._extend(c),o(),i._ready=i._initStorage(i._config),i._ready}function l(c){return function(){let h=0;function d(){for(;h<c.length;){let m=c[h];return h++,i._dbInfo=null,i._ready=null,i.getDriver(m).then(a).catch(d)}o();const f=new Error("No available storage method found.");return i._driverSet=T.reject(f),i._driverSet}return d()}}const u=this._driverSet!==null?this._driverSet.catch(()=>T.resolve()):T.resolve();return this._driverSet=u.then(()=>{const c=s[0];return i._dbInfo=null,i._ready=null,i.getDriver(c).then(h=>{i._driver=h._driver,o(),i._wrapLibraryMethodsWithReady(),i._initDriver=l(s)})}).catch(()=>{o();const c=new Error("No available storage method found.");return i._driverSet=T.reject(c),i._driverSet}),Ye(this._driverSet,n,r),this._driverSet}supports(e){return!!Ii[e]}_extend(e){Dn(this,e)}_getSupportedDrivers(e){const n=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];this.supports(s)&&n.push(s)}return n}_wrapLibraryMethodsWithReady(){for(let e=0,n=Nn.length;e<n;e++)cc(this,Nn[e])}createInstance(e){return new Xr(e)}}const uc=new Xr,hc=uc;async function ao(){return await caches.open(Ur)}async function dc(t){return await(await ao()).match(t)}const Li=hc.createInstance({name:Ur});async function fc(t,e){await(await ao()).put(t,e)}const zn=new Map;async function mc(t,e){var r;if(!zn.has(t)){const i=nt();zn.set(t,i.promise);try{const s=new Request(t),o=e?await dc(s):void 0,a=o??await fetch(s),l=e?await Li.getItem(t)??void 0:void 0,u=l??{contentType:((r=a.headers.get("Content-Type"))==null?void 0:r.toLowerCase())||"",ok:a.ok,text:await a.clone().text()??""};if(!l&&e)try{Li.setItem(t,u)}catch{}const c={blobUrl:URL.createObjectURL(await a.clone().blob()),...u};if(!o&&e)try{fc(s,a)}catch{}i.resolve(c)}catch(s){throw i.reject(s),s}}const n=await zn.get(t);if(!n)throw new Error("Stored a cached response but couldn't find it afterwards.");return n}var R=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(R||{});const gc=["text","json"];function Bi(t){return gc.includes(t)}async function pc(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":ol(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function yc({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Ne(F`
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
            `):e}function vc(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}else if(e==="html")return t.replaceAll(/console\.\w+/g,"doNothing");return t}async function Mi({imageUrl:t,blockAutoPlay:e,textTransformer:n=i=>i,allowPersistentCache:r}){const i=await mc(t,r);if(!i.ok)throw new Error(`Failed to load '${t}'`);const s=await pc(i.contentType,i.text),o=n(vc(i.text,s));return{templateString:yc({imageText:o,imageType:s,imageUrl:i.blobUrl,blockAutoPlay:e}),imageUrl:i.blobUrl,imageType:s}}class lr extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}let bc=!1;function wc(){return bc}var Me;(function(t){t.FromParent="from-parent",t.FromChild="from-child"})(Me||(Me={}));const Re=Symbol("any-origin");function lo(t,e){try{return _c(t,e),!0}catch{return!1}}function _c(t,e){if(t===Re)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}const Sc=Symbol("dangerDisableSecurityWarningsSymbol"),xc=["january","february","march","april","may","june","july","august","september","october","november","december"];xc.map(t=>t.slice(0,3));function Ec(t){return t?t instanceof Error?t.message:String(t):""}function $c(t){return t instanceof Error?t:new Error(Ec(t))}function Ac(t){const e=co();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function co(){let t,e,n=!1;const r=new Promise((i,s)=>{t=o=>(n=!0,i(o)),e=o=>{n=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${co.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function Tc(t,e,n){return n.type===t&&n.direction===e}function Pc(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function Cc({message:t,verifyChildData:e,iframeElement:n},r,i,s){if(!n)throw new Error("No iframe element was provided.");let o=0,a=!1,l,u,c,h=!1;const d={...t,direction:Me.FromParent,messageId:ca(32)},f=t.type,m=r===Re?["*"]:r;function g(p){try{if(!lo(r,p))return;const y=p.data;if(y.type==="error")throw new Error(`Child threw an error: ${y.data}`);if(wc(),y&&h&&Tc(f,Me.FromChild,y)&&y.messageId===d.messageId){let b=!1;try{b=e?e(y.data):!0}catch{}if(!b)return;a=!0,u=p,l=y}}catch(y){c=$c(y)}}globalThis.addEventListener("message",g);const v=Date.now();for(;!a&&Date.now()-v<i&&!c;){if(!n.isConnected)throw new lr;const p=n.contentWindow;p&&(h=!0,m.forEach(y=>{try{p.postMessage(d,{targetOrigin:y})}catch{}})),await Ac(s||Pc(o)),o++}if(globalThis.removeEventListener("message",g),c)throw c;if(!a)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${Math.ceil(i/1e3)}' seconds).`);if(!u)throw new Error("Never got message event from child but received a valid response");return{data:l==null?void 0:l.data,event:u}}function uo({allowedOrigins:t,timeoutMs:e=1e4,...n}){if(t!==Re&&t.includes("*")&&(t=Re),t===Re&&!n[Sc]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==Re&&!t.length)throw new Error(`No allowed origins were provide to ${uo.name}. At least one must be provided.`);const r=t===Re?["*"]:t;return{async sendMessageToChild(i){if(i.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await Cc(i,t,i.timeoutMs||e,i.intervalMs)},listenForParentMessages(i){globalThis.addEventListener("message",async s=>{if(!lo(t,s))return;const o=s.data,a=await i({...o,originalEvent:s}),l={type:o.type,direction:Me.FromChild,data:a,messageId:o.messageId};r.forEach(u=>{try{globalThis.parent.postMessage(l,{targetOrigin:u})}catch{}})})}}}var Z=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Z||{}),K=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(K||{});const ce=uo({allowedOrigins:[window.location.origin]});async function Rc(t,e){const n=nt();t.onload=()=>{n.resolve()};try{await ce.sendMessageToChild({message:{type:K.Ready},iframeElement:t,timeoutMs:e})}catch{await n.promise,await ce.sendMessageToChild({message:{type:K.Ready},iframeElement:t,timeoutMs:e})}}async function kc({min:t,max:e,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,forcedOriginalImageSize:o,timeoutMs:a}){var u;await Rc(r,a),s&&await ce.sendMessageToChild({message:{type:K.ForceSize,data:s},iframeElement:r,timeoutMs:a});const l=o??(await ce.sendMessageToChild({message:{type:K.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await ho({min:t,max:e,imageDimensions:l,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,sendSizeMessage:!0,timeoutMs:a}),((u=r.contentWindow)==null?void 0:u.document.documentElement.outerHTML)??""}async function ho({min:t,max:e,imageDimensions:n,host:r,iframeElement:i,imageData:s,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:l}){const u=r.shadowRoot.querySelector(".frame-constraint");if(!(u instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c={min:t,max:e,box:o??n},h=Bi(s.imageType)?tr(c):js(c);u.style.width=te(Math.floor(h.width)),u.style.height=te(Math.floor(h.height));const d=tr({min:t,max:e,box:h});h.height<d.height?r.classList.add(Z.VerticallyCenter):r.classList.remove(Z.VerticallyCenter),r.style.width=te(d.width),r.style.height=te(d.height);const f=Fs({min:t,max:e,box:o??n});if(a){if(f>3?await ce.sendMessageToChild({message:{type:K.SendScalingMethod,data:"pixelated"},iframeElement:i,timeoutMs:l}):await ce.sendMessageToChild({message:{type:K.SendScalingMethod,data:"default"},iframeElement:i,timeoutMs:l}),await ce.sendMessageToChild({message:{type:K.SizeDetermined,data:h},iframeElement:i,timeoutMs:l}),s.imageType===R.Html){const m=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},g={width:f*m.width,height:f*m.height};await ce.sendMessageToChild({message:{type:K.SendScale,data:g},iframeElement:i,timeoutMs:l})}else if(Bi(s.imageType)){const m=o??n;if(m.height<h.height){const g=h.width/m.width,v=h.height/m.height,p=Math.min(g,v);await ce.sendMessageToChild({message:{type:K.SendScale,data:{height:p,width:p}},iframeElement:i,timeoutMs:l})}}}}const Mt={x:16,y:8};var ji=Object.freeze,Nc=Object.defineProperty,Fi=(t,e)=>ji(Nc(t,"raw",{value:ji(e||t.slice())})),Hi,Ki;function Dc(t,e,n){const r=Math.random(),i=F(Hi||(Hi=Fi([`
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
    `])),t.imageType,n??"",R.Svg,R.Html,R.Image,R.Video,R.Text,R.Json,R.Audio,Me.FromChild,Me.FromChild,K.Ready,K.SendScale,K.SendScalingMethod,K.SendSize,K.ForceSize,K.SizeDetermined,R.Json,R.Text,Mt.y,R.Audio),s=F(Ki||(Ki=Fi([`
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
    `])),t.imageType,R.Image,R.Svg,R.Video,R.Text,R.Json,R.Text,R.Json,R.Text,R.Json,R.Text,R.Json,Mt.y,Mt.x,R.Text,R.Json,Mt.y,r,e??"",i);return Dr(Ne(s)).replace(String(r),`
${t.templateString}
`)}const zc=1e4,Oc={textTransformer:"textTransformer",extraHtml:"extraHtml"},Ic=Zo(Oc),Lc={imageData:Cs(),error:void 0},vt=Ts()({tagName:Ur,stateInit:Lc,events:{settled:Jt(),imageDataCalculated:Jt(),errored:Jt()},styles:Ge`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${se(Z.VerticallyCenter)}) {
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

        :host(.${se(Z.HideLoading)}) .loading-wrapper,
        :host(.${se(Z.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${se(Z.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${se(Z.HideLoading)}) iframe {
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[On];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:i,events:s}){const o=e.timeoutMs??zc,a=t.imageData instanceof Error?t.imageData:t.error;n({imageData:{createPromise:async()=>{if(t.error&&n({error:void 0}),r.classList.remove(Z.HideLoading),i(new s.settled(!1)),r.classList.remove(Z.VerticallyCenter),!e.imageUrl)return new Promise(async(y,b)=>{await Wn(o),b(new Error("An imageUrl was never provided to vir-resizable-image."))});const v={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer,allowPersistentCache:!e.blockPersistentCache};let p;try{p=await sa(o,Mi(v))}catch{await Wn(1e3);try{p=await Mi(v)}catch(b){throw b}}if(p)return p;throw new Error("no image data result")},trigger:{...na(e,Ic)}}});const l=e.min&&e.max?tr({box:e.min,max:e.max}):e.min,u=e.max,c=e.forcedOriginalImageSize?js({min:l,max:u,box:e.forcedOriginalImageSize}):void 0,h=er(t.imageData,"",v=>(i(new s.imageDataCalculated(v)),v.imageType===R.Pdf?F`
                        <iframe
                            src=${v.imageUrl}
                            ${Ri(async p=>{try{await ho({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:p,imageData:v,imageDimensions:u??{width:500,height:500},max:u,min:l,sendSizeMessage:!1,timeoutMs:o}),r[On]="",i(new s.settled(!0)),r.classList.add(Z.HideLoading)}catch(y){const b=Xe(y);if(b instanceof lr)return;console.error(b),n({error:b}),i(new s.errored(b))}})}
                        ></iframe>
                    `:F`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${Dc(v,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${Ri(async p=>{try{const y=await kc({min:l,max:u,host:r,iframeElement:p,imageData:v,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:o});r[On]=y,i(new s.settled(!0)),r.classList.add(Z.HideLoading)}catch(y){const b=Xe(y);if(b instanceof lr)return;console.error(b),n({error:b}),i(new s.errored(b))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),v=>{n({error:v}),i(new s.errored(Xe(v)))}),d=er(t.imageData,Ui,v=>!e.blockInteraction&&[R.Html,R.Video,R.Audio,R.Pdf].includes(v.imageType)?"":Ui,()=>""),f=a?Ge`
                  max-width: 100%;
                  max-height: 100%;
              `:c?Ge`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",m=Ge`
            width: ${(l==null?void 0:l.width)??250}px;
            height: ${(l==null?void 0:l.height)??250}px;
        `,g=F`
            <div class="frame-constraint" style=${f}>${h}</div>
        `;return F`
            ${ki(!a,F`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${m}>
                ${ki(!!a,F`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${a==null?void 0:a.message}</slot>
                        </div>
                    `,g)}
            </div>
            ${d}
        `}}),Ui=F`
    <div class="click-cover"></div>
`,On="latest-frame-srcdoc",z=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,M=Object.keys,W=Array.isArray;function Y(t,e){return typeof e!="object"||M(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||z.Promise||(z.Promise=Promise);const At=Object.getPrototypeOf,Bc={}.hasOwnProperty;function Q(t,e){return Bc.call(t,e)}function ot(t,e){typeof e=="function"&&(e=e(At(t))),(typeof Reflect>"u"?M:Reflect.ownKeys)(e).forEach(n=>{de(t,n,e[n])})}const fo=Object.defineProperty;function de(t,e,n,r){fo(t,e,Y(n&&Q(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ze(t){return{from:function(e){return t.prototype=Object.create(e.prototype),de(t.prototype,"constructor",t),{extend:ot.bind(null,t.prototype)}}}}const Mc=Object.getOwnPropertyDescriptor;function Qr(t,e){let n;return Mc(t,e)||(n=At(t))&&Qr(n,e)}const jc=[].slice;function un(t,e,n){return jc.call(t,e,n)}function mo(t,e){return e(t)}function mt(t){if(!t)throw new Error("Assertion Failed")}function go(t){z.setImmediate?setImmediate(t):setTimeout(t,0)}function po(t,e){return t.reduce((n,r,i)=>{var s=e(r,i);return s&&(n[s[0]]=s[1]),n},{})}function fe(t,e){if(Q(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,i=e.length;r<i;++r){var s=fe(t,e[r]);n.push(s)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:fe(a,e.substr(o+1))}}function ne(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){mt(typeof n!="string"&&"length"in n);for(var r=0,i=e.length;r<i;++r)ne(t,e[r],n[r])}else{var s=e.indexOf(".");if(s!==-1){var o=e.substr(0,s),a=e.substr(s+1);if(a==="")n===void 0?W(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&Q(t,o)||(l=t[o]={}),ne(l,a,n)}}else n===void 0?W(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function yo(t){var e={};for(var n in t)Q(t,n)&&(e[n]=t[n]);return e}const Fc=[].concat;function vo(t){return Fc.apply([],t)}const bo="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(vo([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>z[t]),Hc=bo.map(t=>z[t]);po(bo,t=>[t,!0]);let be=null;function zt(t){be=typeof WeakMap<"u"&&new WeakMap;const e=cr(t);return be=null,e}function cr(t){if(!t||typeof t!="object")return t;let e=be&&be.get(t);if(e)return e;if(W(t)){e=[],be&&be.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(cr(t[n]))}else if(Hc.indexOf(t.constructor)>=0)e=t;else{const s=At(t);for(var i in e=s===Object.prototype?{}:Object.create(s),be&&be.set(t,e),t)Q(t,i)&&(e[i]=cr(t[i]))}return e}const{toString:Kc}={};function ur(t){return Kc.call(t).slice(8,-1)}const hr=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Uc=typeof hr=="symbol"?function(t){var e;return t!=null&&(e=t[hr])&&e.apply(t)}:function(){return null},Je={};function ue(t){var e,n,r,i;if(arguments.length===1){if(W(t))return t.slice();if(this===Je&&typeof t=="string")return[t];if(i=Uc(t)){for(n=[];!(r=i.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const Zr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function wo(t,e){oe=t,_o=e}var _o=()=>!0;const Wc=!new Error("").stack;function He(){if(Wc)try{throw He.arguments,new Error}catch(t){return t}return new Error}function dr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(_o).map(r=>`
`+r).join("")):""}var So=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ei=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(So),Vc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function et(t,e){this._e=He(),this.name=t,this.message=e}function xo(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,i)=>i.indexOf(n)===r).join(`
`)}function hn(t,e,n,r){this._e=He(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=xo(t,e)}function bt(t,e){this._e=He(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=xo(t,e)}Ze(et).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+dr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ze(hn).from(et),Ze(bt).from(et);var ti=ei.reduce((t,e)=>(t[e]=e+"Error",t),{});const qc=et;var P=ei.reduce((t,e)=>{var n=e+"Error";function r(i,s){this._e=He(),this.name=n,i?typeof i=="string"?(this.message=`${i}${s?`
 `+s:""}`,this.inner=s||null):typeof i=="object"&&(this.message=`${i.name} ${i.message}`,this.inner=i):(this.message=Vc[e]||n,this.inner=null)}return Ze(r).from(qc),t[e]=r,t},{});P.Syntax=SyntaxError,P.Type=TypeError,P.Range=RangeError;var Wi=So.reduce((t,e)=>(t[e+"Error"]=P[e],t),{}),Xt=ei.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=P[e]),t),{});function N(){}function Tt(t){return t}function Yc(t,e){return t==null||t===Tt?e:function(n){return e(t(n))}}function je(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Jc(t,e){return t===N?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var s=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?je(r,this.onsuccess):r),i&&(this.onerror=this.onerror?je(i,this.onerror):i),s!==void 0?s:n}}function Gc(t,e){return t===N?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?je(n,this.onsuccess):n),r&&(this.onerror=this.onerror?je(r,this.onerror):r)}}function Xc(t,e){return t===N?e:function(n){var r=t.apply(this,arguments);Y(n,r);var i=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?je(i,this.onsuccess):i),s&&(this.onerror=this.onerror?je(s,this.onerror):s),r===void 0?o===void 0?void 0:o:Y(r,o)}}function Qc(t,e){return t===N?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ni(t,e){return t===N?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,i=arguments.length,s=new Array(i);i--;)s[i]=arguments[i];return n.then(function(){return e.apply(r,s)})}return e.apply(this,arguments)}}Xt.ModifyError=hn,Xt.DexieError=et,Xt.BulkError=bt;var Pt={};const[fr,dn,mr]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,At(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,At(e),t]})(),Eo=dn&&dn.then,Qt=fr&&fr.constructor,ri=!!mr;var gr=!1,Zc=mr?()=>{mr.then(jt)}:z.setImmediate?setImmediate.bind(null,jt):z.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{jt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(jt,0)},wt=function(t,e){gt.push([t,e]),fn&&(Zc(),fn=!1)},pr=!0,fn=!0,ze=[],Zt=[],yr=null,vr=Tt,tt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:qi,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{qi(t[0],t[1])}catch{}})}},A=tt,gt=[],Oe=0,en=[];function x(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=N,this._lib=!1;var e=this._PSD=A;if(oe&&(this._stackHolder=He(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Pt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&wr(this,this._value))}this._state=null,this._value=null,++e.ref,Ao(this,t)}const br={get:function(){var t=A,e=mn;function n(r,i){var s=!t.global&&(t!==A||e!==mn);const o=s&&!ge();var a=new x((l,u)=>{ii(this,new $o(gn(r,t,s,o),gn(i,t,s,o),l,u,t))});return oe&&Co(a,this),a}return n.prototype=Pt,n},set:function(t){de(this,"then",t&&t.prototype===Pt?br:{get:function(){return t},set:br.set})}};function $o(t,e,n,r,i){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=i}function Ao(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Ot();n&&typeof n.then=="function"?Ao(t,(i,s)=>{n instanceof x?n._then(i,s):n.then(i,s)}):(t._state=!0,t._value=n,To(t)),r&&It()}},wr.bind(null,t))}catch(n){wr(t,n)}}function wr(t,e){if(Zt.push(e),t._state===null){var n=t._lib&&Ot();e=vr(e),t._state=!1,t._value=e,oe&&e!==null&&typeof e=="object"&&!e._promise&&function(r,i,s){try{r.apply(null,s)}catch(o){i&&i(o)}}(()=>{var r=Qr(e,"stack");e._promise=t,de(e,"stack",{get:()=>gr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){ze.some(i=>i._value===r._value)||ze.push(r)}(t),To(t),n&&It()}}function To(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)ii(t,e[n]);var i=t._PSD;--i.ref||i.finalize(),Oe===0&&(++Oe,wt(()=>{--Oe==0&&si()},[]))}function ii(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Oe,wt(eu,[n,t,e])}else t._listeners.push(e)}function eu(t,e,n){try{yr=e;var r,i=e._value;e._state?r=t(i):(Zt.length&&(Zt=[]),r=t(i),Zt.indexOf(i)===-1&&function(s){for(var o=ze.length;o;)if(ze[--o]._value===s._value)return void ze.splice(o,1)}(e)),n.resolve(r)}catch(s){n.reject(s)}finally{yr=null,--Oe==0&&si(),--n.psd.ref||n.psd.finalize()}}function Po(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var i,s,o=t._value;o!=null?(i=o.name||"Error",s=o.message||o,r=dr(o,0)):(i=o,s=""),e.push(i+(s?": "+s:"")+r)}return oe&&((r=dr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&Po(t._prev,e,n)),e}function Co(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function jt(){Ot()&&It()}function Ot(){var t=pr;return pr=!1,fn=!1,t}function It(){var t,e,n;do for(;gt.length>0;)for(t=gt,gt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(gt.length>0);pr=!0,fn=!0}function si(){var t=ze;ze=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=en.slice(0),n=e.length;n;)e[--n]()}function Ft(t){return new x(Pt,!1,t)}function O(t,e){var n=A;return function(){var r=Ot(),i=A;try{return Ee(n,!0),t.apply(this,arguments)}catch(s){e&&e(s)}finally{Ee(i,!1),r&&It()}}}ot(x.prototype,{then:br,_then:function(t,e){ii(this,new $o(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Ft(r)):this.then(null,r=>r&&r.name===e?n(r):Ft(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Ft(e)))},stack:{get:function(){if(this._stack)return this._stack;try{gr=!0;var t=Po(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{gr=!1}}},timeout:function(t,e){return t<1/0?new x((n,r)=>{var i=setTimeout(()=>r(new P.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&de(x.prototype,Symbol.toStringTag,"Dexie.Promise"),tt.env=Ro(),ot(x,{all:function(){var t=ue.apply(null,arguments).map(Ht);return new x(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((i,s)=>x.resolve(i).then(o=>{t[s]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof x)return t;if(t&&typeof t.then=="function")return new x((n,r)=>{t.then(n,r)});var e=new x(Pt,!0,t);return Co(e,yr),e},reject:Ft,race:function(){var t=ue.apply(null,arguments).map(Ht);return new x((e,n)=>{t.map(r=>x.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>mn},newPSD:xe,usePSD:lt,scheduler:{get:()=>wt,set:t=>{wt=t}},rejectionMapper:{get:()=>vr,set:t=>{vr=t}},follow:(t,e)=>new x((n,r)=>xe((i,s)=>{var o=A;o.unhandleds=[],o.onunhandled=s,o.finalize=je(function(){(function(a){function l(){a(),en.splice(en.indexOf(l),1)}en.push(l),++Oe,wt(()=>{--Oe==0&&si()},[])})(()=>{this.unhandleds.length===0?i():s(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Qt&&(Qt.allSettled&&de(x,"allSettled",function(){const t=ue.apply(null,arguments).map(Ht);return new x(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((i,s)=>x.resolve(i).then(o=>r[s]={status:"fulfilled",value:o},o=>r[s]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Qt.any&&typeof AggregateError<"u"&&de(x,"any",function(){const t=ue.apply(null,arguments).map(Ht);return new x((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const i=new Array(r);t.forEach((s,o)=>x.resolve(s).then(a=>e(a),a=>{i[o]=a,--r||n(new AggregateError(i))}))})}));const U={awaits:0,echoes:0,id:0};var tu=0,tn=[],In=0,mn=0,nu=0;function xe(t,e,n,r){var i=A,s=Object.create(i);s.parent=i,s.ref=0,s.global=!1,s.id=++nu;var o=tt.env;s.env=ri?{Promise:x,PromiseProp:{value:x,configurable:!0,writable:!0},all:x.all,race:x.race,allSettled:x.allSettled,any:x.any,resolve:x.resolve,reject:x.reject,nthen:Vi(o.nthen,s),gthen:Vi(o.gthen,s)}:{},e&&Y(s,e),++i.ref,s.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=lt(s,t,n,r);return s.ref===0&&s.finalize(),a}function at(){return U.id||(U.id=++tu),++U.awaits,U.echoes+=100,U.id}function ge(){return!!U.awaits&&(--U.awaits==0&&(U.id=0),U.echoes=100*U.awaits,!0)}function Ht(t){return U.echoes&&t&&t.constructor===Qt?(at(),t.then(e=>(ge(),e),e=>(ge(),j(e)))):t}function ru(t){++mn,U.echoes&&--U.echoes!=0||(U.echoes=U.id=0),tn.push(A),Ee(t,!0)}function iu(){var t=tn[tn.length-1];tn.pop(),Ee(t,!1)}function Ee(t,e){var n=A;if((e?!U.echoes||In++&&t===A:!In||--In&&t===A)||ko(e?ru.bind(null,t):iu),t!==A&&(A=t,n===tt&&(tt.env=Ro()),ri)){var r=tt.env.Promise,i=t.env;dn.then=i.nthen,r.prototype.then=i.gthen,(n.global||t.global)&&(Object.defineProperty(z,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject,i.allSettled&&(r.allSettled=i.allSettled),i.any&&(r.any=i.any))}}function Ro(){var t=z.Promise;return ri?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(z,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:dn.then,gthen:t.prototype.then}:{}}function lt(t,e,n,r,i){var s=A;try{return Ee(t,!0),e(n,r,i)}finally{Ee(s,!1)}}function ko(t){Eo.call(fr,t)}function gn(t,e,n,r){return typeof t!="function"?t:function(){var i=A;n&&at(),Ee(e,!0);try{return t.apply(this,arguments)}finally{Ee(i,!1),r&&ko(ge)}}}function Vi(t,e){return function(n,r){return t.call(this,gn(n,e),gn(r,e))}}(""+Eo).indexOf("[native code]")===-1&&(at=ge=N);function qi(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,i={promise:e,reason:t};if(z.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),Y(r,i)):z.CustomEvent&&Y(r=new CustomEvent("unhandledrejection",{detail:i}),i),r&&z.dispatchEvent&&(dispatchEvent(r),!z.PromiseRejectionEvent&&z.onunhandledrejection))try{z.onunhandledrejection(r)}catch{}oe&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var j=x.reject;function _r(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var i=t._createTransaction(e,n,t._dbSchema);try{i.create(),t._state.PR1398_maxLoop=3}catch(s){return s.name===ti.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>_r(t,e,n,r))):j(s)}return i._promise(e,(s,o)=>xe(()=>(A.trans=i,r(s,o,i)))).then(s=>i._completion.then(()=>s))}if(t._state.openComplete)return j(new P.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return j(new P.DatabaseClosed);t.open().catch(N)}return t._state.dbReadyPromise.then(()=>_r(t,e,n,r))}const De=String.fromCharCode(65535),ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",_t=[],Sn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),su=Sn,ou=Sn,No=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Fe(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Do={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Kt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=zt(e))[t],e)}class au{_trans(e,n,r){const i=this._tx||A.trans,s=this.name;function o(l,u,c){if(!c.schema[s])throw new P.NotFound("Table "+s+" not part of transaction");return n(c.idbtrans,c)}const a=Ot();try{return i&&i.db===this.db?i===A.trans?i._promise(e,o,r):xe(()=>i._promise(e,o,r),{trans:i,transless:A.transless||A}):_r(this.db,e,[this.name],o)}finally{a&&It()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(i=>this.hook.reading.fire(i))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(W(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=M(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)&&u.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==De)return this.where(r.name).equals(r.keyPath.map(u=>e[u]));!r&&oe&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:i}=this.schema,s=this.db._deps.indexedDB;function o(u,c){try{return s.cmp(u,c)===0}catch{return!1}}const[a,l]=n.reduce(([u,c],h)=>{const d=i[h],f=e[h];return[u||d,u||!d?Fe(c,d&&d.multi?m=>{const g=fe(m,h);return W(g)&&g.some(v=>o(f,v))}:m=>o(f,fe(m,h))):c]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,W(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const i=Object.create(e.prototype);for(var s in r)if(Q(r,s))try{i[s]=r[s]}catch{}return i};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){Y(this,e)})}add(e,n){const{auto:r,keyPath:i}=this.schema.primKey;let s=e;return i&&r&&(s=Kt(i)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[s]})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{ne(e,i,o)}catch{}return o})}update(e,n){if(typeof e!="object"||W(e))return this.where(":id").equals(e).modify(n);{const r=fe(e,this.schema.primKey.keyPath);if(r===void 0)return j(new P.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?M(n).forEach(i=>{ne(e,i,n[i])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:i}=this.schema.primKey;let s=e;return i&&r&&(s=Kt(i)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[s],keys:n!=null?[n]:null})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{ne(e,i,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?x.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Do})).then(e=>e.numFailures?x.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(i=>this.hook.reading.fire(i))))}bulkAdd(e,n,r){const i=Array.isArray(n)?n:void 0,s=(r=r||(i?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&i)throw new P.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new P.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&a?e.map(Kt(l)):e;return this.core.mutate({trans:o,type:"add",keys:i,values:c,wantResults:s}).then(({numFailures:h,results:d,lastResult:f,failures:m})=>{if(h===0)return s?d:f;throw new bt(`${this.name}.bulkAdd(): ${h} of ${u} operations failed`,m)})})}bulkPut(e,n,r){const i=Array.isArray(n)?n:void 0,s=(r=r||(i?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&i)throw new P.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new P.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&a?e.map(Kt(l)):e;return this.core.mutate({trans:o,type:"put",keys:i,values:c,wantResults:s}).then(({numFailures:h,results:d,lastResult:f,failures:m})=>{if(h===0)return s?d:f;throw new bt(`${this.name}.bulkPut(): ${h} of ${u} operations failed`,m)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:i,failures:s})=>{if(r===0)return i;throw new bt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,s)})}}function St(t){var e={},n=function(a,l){if(l){for(var u=arguments.length,c=new Array(u-1);--u;)c[u-1]=arguments[u];return e[a].subscribe.apply(null,c),t}if(typeof a=="string")return e[a]};n.addEventType=s;for(var r=1,i=arguments.length;r<i;++r)s(arguments[r]);return n;function s(a,l,u){if(typeof a=="object")return o(a);l||(l=Qc),u||(u=N);var c={subscribers:[],fire:u,subscribe:function(h){c.subscribers.indexOf(h)===-1&&(c.subscribers.push(h),c.fire=l(c.fire,h))},unsubscribe:function(h){c.subscribers=c.subscribers.filter(function(d){return d!==h}),c.fire=c.subscribers.reduce(l,u)}};return e[a]=n[a]=c,c}function o(a){M(a).forEach(function(l){var u=a[l];if(W(u))s(l,a[l][0],a[l][1]);else{if(u!=="asap")throw new P.InvalidArgument("Invalid event config");var c=s(l,Tt,function(){for(var h=arguments.length,d=new Array(h);h--;)d[h]=arguments[h];c.subscribers.forEach(function(f){go(function(){f.apply(null,d)})})})}})}}function dt(t,e){return Ze(e).from({prototype:t}),e}function We(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Ln(t,e){t.filter=Fe(t.filter,e)}function Bn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Fe(r(),e()):e,t.justLimit=n&&!r}function nn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new P.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Yi(t,e,n){const r=nn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Ut(t,e,n,r){const i=t.replayFilter?Fe(t.filter,t.replayFilter()):t.filter;if(t.or){const s={},o=(a,l,u)=>{if(!i||i(l,u,d=>l.stop(d),d=>l.fail(d))){var c=l.primaryKey,h=""+c;h==="[object ArrayBuffer]"&&(h=""+new Uint8Array(c)),Q(s,h)||(s[h]=!0,e(a,l,u))}};return Promise.all([t.or._iterate(o,n),Ji(Yi(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Ji(Yi(t,r,n),Fe(t.algorithm,i),e,!t.keysOnly&&t.valueMapper)}function Ji(t,e,n,r){var i=O(r?(s,o,a)=>n(r(s),o,a):n);return t.then(s=>{if(s)return s.start(()=>{var o=()=>s.continue();e&&!e(s,a=>o=a,a=>{s.stop(a),o=N},a=>{s.fail(a),o=N})||i(s.value,s,a=>o=a),o()})})}function q(t,e){try{const n=Gi(t),r=Gi(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(i,s){const o=i.length,a=s.length,l=o<a?o:a;for(let u=0;u<l;++u)if(i[u]!==s[u])return i[u]<s[u]?-1:1;return o===a?0:o<a?-1:1}(Xi(t),Xi(e));case"Array":return function(i,s){const o=i.length,a=s.length,l=o<a?o:a;for(let u=0;u<l;++u){const c=q(i[u],s[u]);if(c!==0)return c}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function Gi(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=ur(t);return n==="ArrayBuffer"?"binary":n}function Xi(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class lu{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,j.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,j.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Fe(n.algorithm,e)}_iterate(e,n){return Ut(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&Y(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Ut(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,i=r.table.core;if(We(r,!0))return i.count({trans:n,query:{index:nn(r,i.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var s=0;return Ut(r,()=>(++s,!1),n,i).then(()=>s)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),i=r[0],s=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[i]}var a=this._ctx.dir==="next"?1:-1;function l(u,c){var h=o(u,s),d=o(c,s);return h<d?-a:h>d?a:0}return this.toArray(function(u){return u.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&We(r,!0)&&r.limit>0){const{valueMapper:i}=r,s=nn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:s,range:r.range}}).then(({result:o})=>i?o.map(i):o)}{const i=[];return Ut(r,s=>i.push(s),n,r.table.core).then(()=>i)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,We(n)?Bn(n,()=>{var r=e;return(i,s)=>r===0||(r===1?(--r,!1):(s(()=>{i.advance(r),r=0}),!1))}):Bn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Bn(this._ctx,()=>{var n=e;return function(r,i,s){return--n<=0&&i(s),n>=0}},!0),this}until(e,n){return Ln(this._ctx,function(r,i,s){return!e(r.value)||(i(s),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Ln(this._ctx,function(i){return e(i.value)}),n=this._ctx,r=e,n.isMatch=Fe(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){e(i.key,i)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){e(i.primaryKey,i)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,s){r.push(s.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&We(n,!0)&&n.limit>0)return this._read(i=>{var s=nn(n,n.table.core.schema);return n.table.core.query({trans:i,values:!1,limit:n.limit,query:{index:s,range:n.range}})}).then(({result:i})=>i).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,s){r.push(s.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Ln(this._ctx,function(i){var s=i.primaryKey.toString(),o=Q(r,s);return r[s]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var i;if(typeof e=="function")i=e;else{var s=M(e),o=s.length;i=function(g){for(var v=!1,p=0;p<o;++p){var y=s[p],b=e[y];fe(g,y)!==b&&(ne(g,y,b),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:u}=a.schema.primaryKey,c=this.db._options.modifyChunkSize||200,h=[];let d=0;const f=[],m=(g,v)=>{const{failures:p,numFailures:y}=v;d+=g-y;for(let b of M(p))h.push(p[b])};return this.clone().primaryKeys().then(g=>{const v=p=>{const y=Math.min(c,g.length-p);return a.getMany({trans:r,keys:g.slice(p,p+y),cache:"immutable"}).then(b=>{const $=[],S=[],w=l?[]:null,_=[];for(let E=0;E<y;++E){const D=b[E],I={value:zt(D),primKey:g[p+E]};i.call(I,I.value,I)!==!1&&(I.value==null?_.push(g[p+E]):l||q(u(D),u(I.value))===0?(S.push(I.value),l&&w.push(g[p+E])):(_.push(g[p+E]),$.push(I.value)))}const C=We(n)&&n.limit===1/0&&(typeof e!="function"||e===Mn)&&{index:n.index,range:n.range};return Promise.resolve($.length>0&&a.mutate({trans:r,type:"add",values:$}).then(E=>{for(let D in E.failures)_.splice(parseInt(D),1);m($.length,E)})).then(()=>(S.length>0||C&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:w,values:S,criteria:C,changeSpec:typeof e!="function"&&e}).then(E=>m(S.length,E))).then(()=>(_.length>0||C&&e===Mn)&&a.mutate({trans:r,type:"delete",keys:_,criteria:C}).then(E=>m(_.length,E))).then(()=>g.length>p+y&&v(p+c))})};return v(0).then(()=>{if(h.length>0)throw new hn("Error modifying one or more objects",h,d,f);return g.length})})})}delete(){var e=this._ctx,n=e.range;return We(e)&&(e.isPrimKey&&!ou||n.type===3)?this._write(r=>{const{primaryKey:i}=e.table.core.schema,s=n;return e.table.core.count({trans:r,query:{index:i,range:s}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:s}).then(({failures:a,lastResult:l,results:u,numFailures:c})=>{if(c)throw new hn("Could not delete some values",Object.keys(a).map(h=>a[h]),o-c);return o-c}))}):this.modify(Mn)}}const Mn=(t,e)=>e.value=null;function cu(t,e){return t<e?-1:t===e?0:1}function uu(t,e){return t>e?-1:t===e?0:1}function X(t,e,n){var r=t instanceof Oo?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Ve(t){return new t.Collection(t,()=>zo("")).limit(0)}function hu(t,e,n,r,i,s){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var u=e[l];if(u!==r[l])return i(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):i(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;i(t[l],u)<0&&(a=l)}return o<r.length&&s==="next"?t+n.substr(t.length):o<t.length&&s==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function Wt(t,e,n,r){var i,s,o,a,l,u,c,h=n.length;if(!n.every(g=>typeof g=="string"))return X(t,"String expected.");function d(g){i=function(p){return p==="next"?y=>y.toUpperCase():y=>y.toLowerCase()}(g),s=function(p){return p==="next"?y=>y.toLowerCase():y=>y.toUpperCase()}(g),o=g==="next"?cu:uu;var v=n.map(function(p){return{lower:s(p),upper:i(p)}}).sort(function(p,y){return o(p.lower,y.lower)});a=v.map(function(p){return p.upper}),l=v.map(function(p){return p.lower}),u=g,c=g==="next"?"":r}d("next");var f=new t.Collection(t,()=>ve(a[0],l[h-1]+r));f._ondirectionchange=function(g){d(g)};var m=0;return f._addAlgorithm(function(g,v,p){var y=g.key;if(typeof y!="string")return!1;var b=s(y);if(e(b,l,m))return!0;for(var $=null,S=m;S<h;++S){var w=hu(y,b,a[S],l[S],o,u);w===null&&$===null?m=S+1:($===null||o($,w)>0)&&($=w)}return v($!==null?function(){g.continue($+c)}:p),!1}),f}function ve(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function zo(t){return{type:1,lower:t,upper:t}}class Oo{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,i){r=r!==!1,i=i===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||i)&&(!r||!i)?Ve(this):new this.Collection(this,()=>ve(e,n,!r,!i))}catch{return X(this,ae)}}equals(e){return e==null?X(this,ae):new this.Collection(this,()=>zo(e))}above(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(e,void 0,!0))}aboveOrEqual(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(e,void 0,!1))}below(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(void 0,e,!1,!0))}belowOrEqual(e){return e==null?X(this,ae):new this.Collection(this,()=>ve(void 0,e))}startsWith(e){return typeof e!="string"?X(this,"String expected."):this.between(e,e+De,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Wt(this,(n,r)=>n.indexOf(r[0])===0,[e],De)}equalsIgnoreCase(e){return Wt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ue.apply(Je,arguments);return e.length===0?Ve(this):Wt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ue.apply(Je,arguments);return e.length===0?Ve(this):Wt(this,(n,r)=>r.some(i=>n.indexOf(i)===0),e,De)}anyOf(){const e=ue.apply(Je,arguments);let n=this._cmp;try{e.sort(n)}catch{return X(this,ae)}if(e.length===0)return Ve(this);const r=new this.Collection(this,()=>ve(e[0],e[e.length-1]));r._ondirectionchange=s=>{n=s==="next"?this._ascending:this._descending,e.sort(n)};let i=0;return r._addAlgorithm((s,o,a)=>{const l=s.key;for(;n(l,e[i])>0;)if(++i,i===e.length)return o(a),!1;return n(l,e[i])===0||(o(()=>{s.continue(e[i])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ue.apply(Je,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return X(this,ae)}const n=e.reduce((r,i)=>r?r.concat([[r[r.length-1][1],i]]):[[-(1/0),i]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,i=this._ascending,s=this._descending,o=this._min,a=this._max;if(e.length===0)return Ve(this);if(!e.every(y=>y[0]!==void 0&&y[1]!==void 0&&i(y[0],y[1])<=0))return X(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",P.InvalidArgument);const l=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,h=i;function d(y,b){return h(y[0],b[0])}try{c=e.reduce(function(y,b){let $=0,S=y.length;for(;$<S;++$){const w=y[$];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=a(w[1],b[1]);break}}return $===S&&y.push(b),y},[]),c.sort(d)}catch{return X(this,ae)}let f=0;const m=u?y=>i(y,c[f][1])>0:y=>i(y,c[f][1])>=0,g=l?y=>s(y,c[f][0])>0:y=>s(y,c[f][0])>=0;let v=m;const p=new this.Collection(this,()=>ve(c[0][0],c[c.length-1][1],!l,!u));return p._ondirectionchange=y=>{y==="next"?(v=m,h=i):(v=g,h=s),c.sort(d)},p._addAlgorithm((y,b,$)=>{for(var S=y.key;v(S);)if(++f,f===c.length)return b($),!1;return!!function(w){return!m(w)&&!g(w)}(S)||(this._cmp(S,c[f][1])===0||this._cmp(S,c[f][0])===0||b(()=>{h===i?y.continue(c[f][0]):y.continue(c[f][1])}),!1)}),p}startsWithAnyOf(){const e=ue.apply(Je,arguments);return e.every(n=>typeof n=="string")?e.length===0?Ve(this):this.inAnyRange(e.map(n=>[n,n+De])):X(this,"startsWithAnyOf() only works with strings")}}function ie(t){return O(function(e){return Ct(e),t(e.target.error),!1})}function Ct(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const $e=St(null,"storagemutated");class du{_lock(){return mt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(mt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{lt(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(mt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new P.DatabaseClosed(r);case"MissingAPIError":throw new P.MissingAPI(r.message,r);default:throw new P.OpenFailed(r)}if(!this.active)throw new P.TransactionInactive;return mt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=O(i=>{Ct(i),this._reject(e.error)}),e.onabort=O(i=>{Ct(i),this.active&&this._reject(new P.Abort(e.error)),this.active=!1,this.on("abort").fire(i)}),e.oncomplete=O(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&$e.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return j(new P.ReadOnly("Transaction is readonly"));if(!this.active)return j(new P.TransactionInactive);if(this._locked())return new x((s,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(s,o)},A])});if(r)return xe(()=>{var s=new x((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return s.finally(()=>this._unlock()),s._lib=!0,s});var i=new x((s,o)=>{var a=n(s,o,this);a&&a.then&&a.then(s,o)});return i._lib=!0,i}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=x.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var i=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(i.get(-1/0).onsuccess=o)})()}var s=n._waitingFor;return new x((o,a)=>{r.then(l=>n._waitingQueue.push(O(o.bind(null,l))),l=>n._waitingQueue.push(O(a.bind(null,l)))).finally(()=>{n._waitingFor===s&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new P.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Q(n,e))return n[e];const r=this.schema[e];if(!r)throw new P.NotFound("Table "+e+" not part of transaction");const i=new this.db.Table(e,r,this);return i.core=this.db.core.table(e),n[e]=i,i}}function Sr(t,e,n,r,i,s,o){return{name:t,keyPath:e,unique:n,multi:r,auto:i,compound:s,src:(n&&!o?"&":"")+(r?"*":"")+(i?"++":"")+Io(e)}}function Io(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Lo(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:po(n,r=>[r.name,r])}}let Rt=t=>{try{return t.only([[]]),Rt=()=>[[]],[[]]}catch{return Rt=()=>De,De}};function xr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>fe(n,e)}(t):e=>fe(e,t)}function Qi(t){return[].slice.call(t)}let fu=0;function xt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function mu(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:h,upperOpen:d}=l;return u===void 0?c===void 0?null:e.upperBound(c,!!d):c===void 0?e.lowerBound(u,!!h):e.bound(u,c,!!h,!!d)}const{schema:i,hasGetAll:s}=function(l,u){const c=Qi(l.objectStoreNames);return{schema:{name:l.name,tables:c.map(h=>u.objectStore(h)).map(h=>{const{keyPath:d,autoIncrement:f}=h,m=W(d),g=d==null,v={},p={name:h.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:g,compound:m,keyPath:d,autoIncrement:f,unique:!0,extractKey:xr(d)},indexes:Qi(h.indexNames).map(y=>h.index(y)).map(y=>{const{name:b,unique:$,multiEntry:S,keyPath:w}=y,_={name:b,compound:W(w),keyPath:w,unique:$,multiEntry:S,extractKey:xr(w)};return v[xt(w)]=_,_}),getIndexByKeyPath:y=>v[xt(y)]};return v[":id"]=p.primaryKey,d!=null&&(v[xt(d)]=p.primaryKey),p})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=i.tables.map(l=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:h,type:d,keys:f,values:m,range:g}){return new Promise((v,p)=>{v=O(v);const y=h.objectStore(c),b=y.keyPath==null,$=d==="put"||d==="add";if(!$&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:S}=f||m||{length:1};if(f&&m&&f.length!==m.length)throw new Error("Given keys array must have same length as given values array.");if(S===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],C=[];let E=0;const D=V=>{++E,Ct(V)};if(d==="deleteRange"){if(g.type===4)return v({numFailures:E,failures:C,results:[],lastResult:void 0});g.type===3?_.push(w=y.clear()):_.push(w=y.delete(r(g)))}else{const[V,H]=$?b?[m,f]:[m,null]:[f,null];if($)for(let L=0;L<S;++L)_.push(w=H&&H[L]!==void 0?y[d](V[L],H[L]):y[d](V[L])),w.onerror=D;else for(let L=0;L<S;++L)_.push(w=y[d](V[L])),w.onerror=D}const I=V=>{const H=V.target.result;_.forEach((L,Ke)=>L.error!=null&&(C[Ke]=L.error)),v({numFailures:E,failures:C,results:d==="delete"?f:_.map(L=>L.result),lastResult:H})};w.onerror=V=>{D(V),I(V)},w.onsuccess=I})},getMany:({trans:h,keys:d})=>new Promise((f,m)=>{f=O(f);const g=h.objectStore(c),v=d.length,p=new Array(v);let y,b=0,$=0;const S=_=>{const C=_.target;p[C._pos]=C.result,++$===b&&f(p)},w=ie(m);for(let _=0;_<v;++_)d[_]!=null&&(y=g.get(d[_]),y._pos=_,y.onsuccess=S,y.onerror=w,++b);b===0&&f(p)}),get:({trans:h,key:d})=>new Promise((f,m)=>{f=O(f);const g=h.objectStore(c).get(d);g.onsuccess=v=>f(v.target.result),g.onerror=ie(m)}),query:function(h){return d=>new Promise((f,m)=>{f=O(f);const{trans:g,values:v,limit:p,query:y}=d,b=p===1/0?void 0:p,{index:$,range:S}=y,w=g.objectStore(c),_=$.isPrimaryKey?w:w.index($.name),C=r(S);if(p===0)return f({result:[]});if(h){const E=v?_.getAll(C,b):_.getAllKeys(C,b);E.onsuccess=D=>f({result:D.target.result}),E.onerror=ie(m)}else{let E=0;const D=v||!("openKeyCursor"in _)?_.openCursor(C):_.openKeyCursor(C),I=[];D.onsuccess=V=>{const H=D.result;return H?(I.push(v?H.value:H.primaryKey),++E===p?f({result:I}):void H.continue()):f({result:I})},D.onerror=ie(m)}})}(s),openCursor:function({trans:h,values:d,query:f,reverse:m,unique:g}){return new Promise((v,p)=>{v=O(v);const{index:y,range:b}=f,$=h.objectStore(c),S=y.isPrimaryKey?$:$.index(y.name),w=m?g?"prevunique":"prev":g?"nextunique":"next",_=d||!("openKeyCursor"in S)?S.openCursor(r(b),w):S.openKeyCursor(r(b),w);_.onerror=ie(p),_.onsuccess=O(C=>{const E=_.result;if(!E)return void v(null);E.___id=++fu,E.done=!1;const D=E.continue.bind(E);let I=E.continuePrimaryKey;I&&(I=I.bind(E));const V=E.advance.bind(E),H=()=>{throw new Error("Cursor not stopped")};E.trans=h,E.stop=E.continue=E.continuePrimaryKey=E.advance=()=>{throw new Error("Cursor not started")},E.fail=O(p),E.next=function(){let L=1;return this.start(()=>L--?this.continue():this.stop()).then(()=>this)},E.start=L=>{const Ke=new Promise((J,Te)=>{J=O(J),_.onerror=ie(Te),E.fail=Te,E.stop=ct=>{E.stop=E.continue=E.continuePrimaryKey=E.advance=H,J(ct)}}),Ue=()=>{if(_.result)try{L()}catch(J){E.fail(J)}else E.done=!0,E.start=()=>{throw new Error("Cursor behind last entry")},E.stop()};return _.onsuccess=O(J=>{_.onsuccess=Ue,Ue()}),E.continue=D,E.continuePrimaryKey=I,E.advance=V,Ue(),Ke},v(E)},p)})},count({query:h,trans:d}){const{index:f,range:m}=h;return new Promise((g,v)=>{const p=d.objectStore(c),y=f.isPrimaryKey?p:p.index(f.name),b=r(m),$=b?y.count(b):y.count();$.onsuccess=O(S=>g(S.target.result)),$.onerror=ie(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:Rt(e),schema:i}}function Er({_novip:t},e){const n=e.db,r=function(i,s,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(c,h){return h.reduce((d,{create:f})=>({...d,...f(d)}),c)}(mu(s,o,l),i.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(i=>{const s=i.name;t.core.schema.tables.some(o=>o.name===s)&&(i.core=t.core.table(s),t[s]instanceof t.Table&&(t[s].core=i.core))})}function pn({_novip:t},e,n,r){n.forEach(i=>{const s=r[i];e.forEach(o=>{const a=Qr(o,i);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?de(o,i,{get(){return this.table(i)},set(l){fo(this,i,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[i]=new t.Table(i,s))})})}function $r({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function gu(t,e){return t._cfg.version-e._cfg.version}function pu(t,e,n,r){const i=t._dbSchema,s=t._createTransaction("readwrite",t._storeNames,i);s.create(n),s._completion.catch(r);const o=s._reject.bind(s),a=A.transless||A;xe(()=>{A.trans=s,A.transless=a,e===0?(M(i).forEach(l=>{jn(n,l,i[l].primKey,i[l].indexes)}),Er(t,n),x.follow(()=>t.on.populate.fire(s)).catch(o)):function({_novip:l},u,c,h){const d=[],f=l._versions;let m=l._dbSchema=Tr(l,l.idbdb,h),g=!1;function v(){return d.length?x.resolve(d.shift()(c.idbtrans)).then(v):x.resolve()}return f.filter(p=>p._cfg.version>=u).forEach(p=>{d.push(()=>{const y=m,b=p._cfg.dbschema;Pr(l,y,h),Pr(l,b,h),m=l._dbSchema=b;const $=Bo(y,b);$.add.forEach(w=>{jn(h,w[0],w[1].primKey,w[1].indexes)}),$.change.forEach(w=>{if(w.recreate)throw new P.Upgrade("Not yet support for changing primary key");{const _=h.objectStore(w.name);w.add.forEach(C=>Ar(_,C)),w.change.forEach(C=>{_.deleteIndex(C.name),Ar(_,C)}),w.del.forEach(C=>_.deleteIndex(C))}});const S=p._cfg.contentUpgrade;if(S&&p._cfg.version>u){Er(l,h),c._memoizedTables={},g=!0;let w=yo(b);$.del.forEach(D=>{w[D]=y[D]}),$r(l,[l.Transaction.prototype]),pn(l,[l.Transaction.prototype],M(w),w),c.schema=w;const _=Zr(S);let C;_&&at();const E=x.follow(()=>{if(C=S(c),C&&_){var D=ge.bind(null,null);C.then(D,D)}});return C&&typeof C.then=="function"?x.resolve(C):E.then(()=>C)}}),d.push(y=>{(!g||!su)&&function(b,$){[].slice.call($.db.objectStoreNames).forEach(S=>b[S]==null&&$.db.deleteObjectStore(S))}(p._cfg.dbschema,y),$r(l,[l.Transaction.prototype]),pn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),c.schema=l._dbSchema})}),v().then(()=>{var p,y;y=h,M(p=m).forEach(b=>{y.db.objectStoreNames.contains(b)||jn(y,b,p[b].primKey,p[b].indexes)})})}(t,e,s,n).catch(o)})}function Bo(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const i=t[r],s=e[r];if(i){const o={name:r,def:s,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(s.primKey.keyPath||"")||i.primKey.auto!==s.primKey.auto&&!Sn)o.recreate=!0,n.change.push(o);else{const a=i.idxByName,l=s.idxByName;let u;for(u in a)l[u]||o.del.push(u);for(u in l){const c=a[u],h=l[u];c?c.src!==h.src&&o.change.push(h):o.add.push(h)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,s])}return n}function jn(t,e,n,r){const i=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(s=>Ar(i,s)),i}function Ar(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Tr(t,e,n){const r={};return un(e.objectStoreNames,0).forEach(i=>{const s=n.objectStore(i);let o=s.keyPath;const a=Sr(Io(o),o||"",!1,!1,!!s.autoIncrement,o&&typeof o!="string",!0),l=[];for(let c=0;c<s.indexNames.length;++c){const h=s.index(s.indexNames[c]);o=h.keyPath;var u=Sr(h.name,o,!!h.unique,!!h.multiEntry,!1,o&&typeof o!="string",!1);l.push(u)}r[i]=Lo(i,a,l)}),r}function Pr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let i=0;i<r.length;++i){const s=r[i],o=n.objectStore(s);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],u=o.index(l).keyPath,c=typeof u=="string"?u:"["+un(u).join("+")+"]";if(e[s]){const h=e[s].idxByName[c];h&&(h.name=l,delete e[s].idxByName[c],e[s].idxByName[l]=h)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&z.WorkerGlobalScope&&z instanceof z.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class yu{_parseStoresSpec(e,n){M(e).forEach(r=>{if(e[r]!==null){var i=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Sr(l,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),W(u),a===0)}),s=i.shift();if(s.multi)throw new P.Schema("Primary key cannot be multi-valued");i.forEach(o=>{if(o.auto)throw new P.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new P.Schema("Index must have a name and cannot be an empty string")}),n[r]=Lo(r,s,i)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?Y(this._cfg.storesSource,e):e;const r=n._versions,i={};let s={};return r.forEach(o=>{Y(i,o._cfg.storesSource),s=o._cfg.dbschema={},o._parseStoresSpec(i,s)}),n._dbSchema=s,$r(n,[n._allTables,n,n.Transaction.prototype]),pn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],M(s),s),n._storeNames=M(s),this}upgrade(e){return this._cfg.contentUpgrade=ni(this._cfg.contentUpgrade||N,e),this}}function oi(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Ie("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function ai(t){return t&&typeof t.databases=="function"}function Cr(t){return xe(function(){return A.letThrough=!0,t()})}function vu(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function bu(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?j(e.dbOpenError):t);oe&&(e.openCanceller._stackHolder=He()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function i(){if(e.openCanceller!==r)throw new P.DatabaseClosed("db.open() was cancelled")}let s=e.dbReadyResolve,o=null,a=!1;return x.race([r,(typeof navigator>"u"?x.resolve():vu()).then(()=>new x((l,u)=>{if(i(),!n)throw new P.MissingAPI;const c=t.name,h=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!h)throw new P.MissingAPI;h.onerror=ie(u),h.onblocked=O(t._fireOnBlocked),h.onupgradeneeded=O(d=>{if(o=h.transaction,e.autoSchema&&!t._options.allowEmptyDB){h.onerror=Ct,o.abort(),h.result.close();const m=n.deleteDatabase(c);m.onsuccess=m.onerror=O(()=>{u(new P.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=ie(u);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;a=f<1,t._novip.idbdb=h.result,pu(t,f/10,o,u)}},u),h.onsuccess=O(()=>{o=null;const d=t._novip.idbdb=h.result,f=un(d.objectStoreNames);if(f.length>0)try{const g=d.transaction((m=f).length===1?m[0]:m,"readonly");e.autoSchema?function({_novip:v},p,y){v.verno=p.version/10;const b=v._dbSchema=Tr(0,p,y);v._storeNames=un(p.objectStoreNames,0),pn(v,[v._allTables],M(b),b)}(t,d,g):(Pr(t,t._dbSchema,g),function(v,p){const y=Bo(Tr(0,v.idbdb,p),v._dbSchema);return!(y.add.length||y.change.some(b=>b.add.length||b.change.length))}(t,g)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Er(t,g)}catch{}var m;_t.push(t),d.onversionchange=O(g=>{e.vcFired=!0,t.on("versionchange").fire(g)}),d.onclose=O(g=>{t.on("close").fire(g)}),a&&function({indexedDB:g,IDBKeyRange:v},p){!ai(g)&&p!=="__dbnames"&&oi(g,v).put({name:p}).catch(N)}(t._deps,c),l()},u)}))]).then(()=>(i(),e.onReadyBeingFired=[],x.resolve(Cr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.reduce(ni,N);return e.onReadyBeingFired=[],x.resolve(Cr(()=>u(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),j(l)}).finally(()=>{e.openComplete=!0,s()})}function Rr(t){var e=s=>t.next(s),n=i(e),r=i(s=>t.throw(s));function i(s){return o=>{var a=s(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):W(l)?Promise.all(l).then(n,r):n(l)}}return i(e)()}function wu(t,e,n){var r=arguments.length;if(r<2)throw new P.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];n=i.pop();var s=vo(i);return[t,s,n]}function Mo(t,e,n,r,i){return x.resolve().then(()=>{const s=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:s};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(h){return h.name===ti.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Mo(t,e,n,null,i))):j(h)}const l=Zr(i);let u;l&&at();const c=x.follow(()=>{if(u=i.call(o,o),u)if(l){var h=ge.bind(null,null);u.then(h,h)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=Rr(u))},a);return(u&&typeof u.then=="function"?x.resolve(u).then(h=>o.active?h:j(new P.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(h=>(r&&o._resolve(),o._completion.then(()=>h))).catch(h=>(o._reject(h),j(h)))})}function Vt(t,e,n){const r=W(t)?t.slice():[t];for(let i=0;i<n;++i)r.push(e);return r}const _u={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,i={},s=[];function o(c,h,d){const f=xt(c),m=i[f]=i[f]||[],g=c==null?0:typeof c=="string"?1:c.length,v=h>0,p={...d,isVirtual:v,keyTail:h,keyLength:g,extractKey:xr(c),unique:!v&&d.unique};return m.push(p),p.isPrimaryKey||s.push(p),g>1&&o(g===2?c[0]:c.slice(0,g-1),h+1,d),m.sort((y,b)=>y.keyTail-b.keyTail),p}const a=o(r.primaryKey.keyPath,0,r.primaryKey);i[":id"]=[a];for(const c of r.indexes)o(c.keyPath,0,c);function l(c){const h=c.query.index;return h.isVirtual?{...c,query:{index:h,range:(d=c.query.range,f=h.keyTail,{type:d.type===1?2:d.type,lower:Vt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Vt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var d,f}return{...n,schema:{...r,primaryKey:a,indexes:s,getIndexByKeyPath:function(c){const h=i[xt(c)];return h&&h[0]}},count:c=>n.count(l(c)),query:c=>n.query(l(c)),openCursor(c){const{keyTail:h,isVirtual:d,keyLength:f}=c.query.index;return d?n.openCursor(l(c)).then(m=>m&&function(g){return Object.create(g,{continue:{value:function(p){p!=null?g.continue(Vt(p,c.reverse?t.MAX_KEY:t.MIN_KEY,h)):c.unique?g.continue(g.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,h)):g.continue()}},continuePrimaryKey:{value(p,y){g.continuePrimaryKey(Vt(p,t.MAX_KEY,h),y)}},primaryKey:{get:()=>g.primaryKey},key:{get(){const p=g.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>g.value}})}(m)):n.openCursor(c)}}}}}};function li(t,e,n,r){return n=n||{},r=r||"",M(t).forEach(i=>{if(Q(e,i)){var s=t[i],o=e[i];if(typeof s=="object"&&typeof o=="object"&&s&&o){const a=ur(s);a!==ur(o)?n[r+i]=e[i]:a==="Object"?li(s,o,n,r+i+"."):s!==o&&(n[r+i]=e[i])}else s!==o&&(n[r+i]=e[i])}else n[r+i]=void 0}),M(e).forEach(i=>{Q(t,i)||(n[r+i]=e[i])}),n}const Su={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(s){const o=A.trans,{deleting:a,creating:l,updating:u}=o.table(e).hook;switch(s.type){case"add":if(l.fire===N)break;return o._promise("readwrite",()=>c(s),!0);case"put":if(l.fire===N&&u.fire===N)break;return o._promise("readwrite",()=>c(s),!0);case"delete":if(a.fire===N)break;return o._promise("readwrite",()=>c(s),!0);case"deleteRange":if(a.fire===N)break;return o._promise("readwrite",()=>function(d){return h(d.trans,d.range,1e4)}(s),!0)}return n.mutate(s);function c(d){const f=A.trans,m=d.keys||function(g,v){return v.type==="delete"?v.keys:v.keys||v.values.map(g.extractKey)}(r,d);if(!m)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:m}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(g,v,p){return v.type==="add"?Promise.resolve([]):g.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,d,m).then(g=>{const v=m.map((p,y)=>{const b=g[y],$={onerror:null,onsuccess:null};if(d.type==="delete")a.fire.call($,p,b,f);else if(d.type==="add"||b===void 0){const S=l.fire.call($,p,d.values[y],f);p==null&&S!=null&&(p=S,d.keys[y]=p,r.outbound||ne(d.values[y],r.keyPath,p))}else{const S=li(b,d.values[y]),w=u.fire.call($,S,p,b,f);if(w){const _=d.values[y];Object.keys(w).forEach(C=>{Q(_,C)?_[C]=w[C]:ne(_,C,w[C])})}}return $});return n.mutate(d).then(({failures:p,results:y,numFailures:b,lastResult:$})=>{for(let S=0;S<m.length;++S){const w=y?y[S]:m[S],_=v[S];w==null?_.onerror&&_.onerror(p[S]):_.onsuccess&&_.onsuccess(d.type==="put"&&g[S]?d.values[S]:w)}return{failures:p,results:y,numFailures:b,lastResult:$}}).catch(p=>(v.forEach(y=>y.onerror&&y.onerror(p)),Promise.reject(p)))})}function h(d,f,m){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:m}).then(({result:g})=>c({type:"delete",keys:g,trans:d}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):g.length<m?{failures:[],numFailures:0,lastResult:void 0}:h(d,{...f,lower:g[g.length-1],lowerOpen:!0},m)))}}}}})};function jo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let i=0,s=0;i<e.keys.length&&s<t.length;++i)q(e.keys[i],t[s])===0&&(r.push(n?zt(e.values[i]):e.values[i]),++s);return r.length===t.length?r:null}catch{return null}}const xu={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const i=jo(r.keys,r.trans._cache,r.cache==="clone");return i?x.resolve(i):n.getMany(r).then(s=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?zt(s):s},s))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function ci(t){return!("from"in t)}const le=function(t,e){if(!this){const n=new le;return t&&"d"in t&&Y(n,t),n}Y(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function kt(t,e,n){const r=q(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(ci(t))return Y(t,{from:e,to:n,d:1});const i=t.l,s=t.r;if(q(n,t.from)<0)return i?kt(i,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Zi(t);if(q(e,t.to)>0)return s?kt(s,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Zi(t);q(e,t.from)<0&&(t.from=e,t.l=null,t.d=s?s.d+1:1),q(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;i&&!t.l&&yn(t,i),s&&o&&yn(t,s)}function yn(t,e){ci(e)||function n(r,{from:i,to:s,l:o,r:a}){kt(r,i,s),o&&n(r,o),a&&n(r,a)}(t,e)}function Eu(t,e){const n=kr(e);let r=n.next();if(r.done)return!1;let i=r.value;const s=kr(t);let o=s.next(i.from),a=o.value;for(;!r.done&&!o.done;){if(q(a.from,i.to)<=0&&q(a.to,i.from)>=0)return!0;q(i.from,a.from)<0?i=(r=n.next(a.from)).value:a=(o=s.next(i.from)).value}return!1}function kr(t){let e=ci(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&q(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||q(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Zi(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),i=r>1?"r":r<-1?"l":"";if(i){const s=i==="r"?"l":"r",o={...t},a=t[i];t.from=a.from,t.to=a.to,t[i]=a[i],o[i]=a[s],t[s]=o,o.d=es(o)}t.d=es(t)}function es({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}ot(le.prototype,{add(t){return yn(this,t),this},addKey(t){return kt(this,t,t),this},addKeys(t){return t.forEach(e=>kt(this,e,e)),this},[hr](){return kr(this)}});const $u={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new le(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const i=t.table(r),{schema:s}=i,{primaryKey:o}=s,{extractKey:a,outbound:l}=o,u={...i,mutate:d=>{const f=d.trans,m=f.mutatedParts||(f.mutatedParts={}),g=w=>{const _=`idb://${e}/${r}/${w}`;return m[_]||(m[_]=new le)},v=g(""),p=g(":dels"),{type:y}=d;let[b,$]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const S=d.trans._cache;return i.mutate(d).then(w=>{if(W(b)){y!=="delete"&&(b=w.results),v.addKeys(b);const _=jo(b,S);_||y==="add"||p.addKeys(b),(_||$)&&function(C,E,D,I){function V(H){const L=C(H.name||"");function Ke(J){return J!=null?H.extractKey(J):null}const Ue=J=>H.multiEntry&&W(J)?J.forEach(Te=>L.addKey(Te)):L.addKey(J);(D||I).forEach((J,Te)=>{const ct=D&&Ke(D[Te]),xn=I&&Ke(I[Te]);q(ct,xn)!==0&&(ct!=null&&Ue(ct),xn!=null&&Ue(xn))})}E.indexes.forEach(V)}(g,s,_,$)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),s.indexes.forEach(_=>g(_.name).add(n));return w})}},c=({query:{index:d,range:f}})=>{var m,g;return[d,new le((m=f.lower)!==null&&m!==void 0?m:t.MIN_KEY,(g=f.upper)!==null&&g!==void 0?g:t.MAX_KEY)]},h={get:d=>[o,new le(d.key)],getMany:d=>[o,new le().addKeys(d.keys)],count:c,query:c,openCursor:c};return M(h).forEach(d=>{u[d]=function(f){const{subscr:m}=A;if(m){const g=$=>{const S=`idb://${e}/${r}/${$}`;return m[S]||(m[S]=new le)},v=g(""),p=g(":dels"),[y,b]=h[d](f);if(g(y.name||"").add(b),!y.isPrimaryKey){if(d!=="count"){const $=d==="query"&&l&&f.values&&i.query({...f,values:!1});return i[d].apply(this,arguments).then(S=>{if(d==="query"){if(l&&f.values)return $.then(({result:_})=>(v.addKeys(_),S));const w=f.values?S.result.map(a):S.result;f.values?v.addKeys(w):p.addKeys(w)}else if(d==="openCursor"){const w=S,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const C=w.primaryKey;return p.addKey(C),C}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return S})}p.add(n)}}return i[d].apply(this,arguments)}}),u}}}};class Ie{constructor(e,n){this._middlewares={},this.verno=0;const r=Ie.dependencies;this._options=n={addons:Ie.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:i}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const s={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:N,dbReadyPromise:null,cancelOpen:N,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;s.dbReadyPromise=new x(a=>{s.dbReadyResolve=a}),s.openCanceller=new x((a,l)=>{s.cancelOpen=l}),this._state=s,this.name=e,this.on=St(this,"populate","blocked","versionchange","close",{ready:[ni,N]}),this.on.ready.subscribe=mo(this.on.ready.subscribe,a=>(l,u)=>{Ie.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||x.resolve().then(l),u&&a(l);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(l),u&&a(l);else{a(l);const h=this;u||a(function d(){h.on.ready.unsubscribe(l),h.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,dt(lu.prototype,function(a,l){this.db=o;let u=Do,c=null;if(l)try{u=l()}catch(m){c=m}const h=a._ctx,d=h.table,f=d.hook.reading.fire;this._ctx={table:d,index:h.index,isPrimKey:!h.index||d.schema.primKey.keyPath&&h.index===d.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:h.or,valueMapper:f!==Tt?f:null}})),this.Table=function(a){return dt(au.prototype,function(l,u,c){this.db=a,this._tx=c,this.name=l,this.schema=u,this.hook=a._allTables[l]?a._allTables[l].hook:St(null,{creating:[Jc,N],reading:[Yc,Tt],updating:[Xc,N],deleting:[Gc,N]})})}(this),this.Transaction=function(a){return dt(du.prototype,function(l,u,c,h,d){this.db=a,this.mode=l,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=h,this.idbtrans=null,this.on=St(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new x((f,m)=>{this._resolve=f,this._reject=m}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var m=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):m&&this.idbtrans&&this.idbtrans.abort(),j(f)})})}(this),this.Version=function(a){return dt(yu.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return dt(Oo.prototype,function(l,u,c){this.db=a,this._ctx={table:l,index:u===":id"?null:u,or:c};const h=a._deps.indexedDB;if(!h)throw new P.MissingAPI;this._cmp=this._ascending=h.cmp.bind(h),this._descending=(d,f)=>h.cmp(f,d),this._max=(d,f)=>h.cmp(d,f)>0?d:f,this._min=(d,f)=>h.cmp(d,f)<0?d:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=Rt(n.IDBKeyRange),this._createTransaction=(a,l,u,c)=>new this.Transaction(a,l,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=a=>{this.on("blocked").fire(a),_t.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(_u),this.use(Su),this.use($u),this.use(xu),this.vip=Object.create(this,{_vip:{value:!0}}),i.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new P.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new P.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(i=>i._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(gu),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new x((n,r)=>{if(this._state.openComplete)return r(new P.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new P.DatabaseClosed);this.open().catch(N)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:i}){i&&this.unuse({stack:e,name:i});const s=this._middlewares[e]||(this._middlewares[e]=[]);return s.push({stack:e,create:n,level:r??10,name:i}),s.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(i=>r?i.create!==r:!!n&&i.name!==n)),this}open(){return bu(this)}_close(){const e=this._state,n=_t.indexOf(this);if(n>=0&&_t.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new x(r=>{e.dbReadyResolve=r}),e.openCanceller=new x((r,i)=>{e.cancelOpen=i})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new P.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new x((r,i)=>{const s=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=O(()=>{(function({indexedDB:a,IDBKeyRange:l},u){!ai(a)&&u!=="__dbnames"&&oi(a,l).delete(u).catch(N)})(this._deps,this.name),r()}),o.onerror=ie(i),o.onblocked=this._fireOnBlocked};if(e)throw new P.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(s):s()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return M(this._allTables).map(e=>this._allTables[e])}transaction(){const e=wu.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let i=A.trans;i&&i.db===this&&e.indexOf("!")===-1||(i=null);const s=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new P.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(i){if(i.mode==="readonly"&&o==="readwrite"){if(!s)throw new P.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i=null}i&&a.forEach(u=>{if(i&&i.storeNames.indexOf(u)===-1){if(!s)throw new P.SubTransaction("Table "+u+" not included in parent transaction.");i=null}}),s&&i&&!i.active&&(i=null)}}catch(u){return i?i._promise(null,(c,h)=>{h(u)}):j(u)}const l=Mo.bind(null,this,o,a,i,r);return i?i._promise(o,l,"lock"):A.trans?lt(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!Q(this._allTables,e))throw new P.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Au=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Tu{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Au](){return this}}function Fo(t,e){return M(e).forEach(n=>{yn(t[n]||(t[n]=new le),e[n])}),t}function Pu(t){return new Tu(e=>{const n=Zr(t);let r=!1,i={},s={};const o={get closed(){return r},unsubscribe:()=>{r=!0,$e.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let a=!1,l=!1;function u(){return M(s).some(d=>i[d]&&Eu(i[d],s[d]))}const c=d=>{Fo(i,d),u()&&h()},h=()=>{if(a||r)return;i={};const d={},f=function(m){n&&at();const g=()=>xe(t,{subscr:m,trans:null}),v=A.trans?lt(A.transless,g):g();return n&&v.then(ge,ge),v}(d);l||($e("storagemutated",c),l=!0),a=!0,Promise.resolve(f).then(m=>{a=!1,r||(u()?h():(i={},s=d,e.next&&e.next(m)))},m=>{a=!1,e.error&&e.error(m),o.unsubscribe()})};return h(),o})}let Nr;try{Nr={indexedDB:z.indexedDB||z.mozIndexedDB||z.webkitIndexedDB||z.msIndexedDB,IDBKeyRange:z.IDBKeyRange||z.webkitIDBKeyRange}}catch{Nr={indexedDB:null,IDBKeyRange:null}}const Ce=Ie;function rn(t){let e=he;try{he=!0,$e.storagemutated.fire(t)}finally{he=e}}ot(Ce,{...Xt,delete:t=>new Ce(t,{addons:[]}).delete(),exists:t=>new Ce(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return ai(e)?Promise.resolve(e.databases()).then(r=>r.map(i=>i.name).filter(i=>i!=="__dbnames")):oi(e,n).toCollection().primaryKeys()}(Ce.dependencies).then(t)}catch{return j(new P.MissingAPI)}},defineClass:()=>function(t){Y(this,t)},ignoreTransaction:t=>A.trans?lt(A.transless,t):t(),vip:Cr,async:function(t){return function(){try{var e=Rr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:x.resolve(e)}catch(n){return j(n)}}},spawn:function(t,e,n){try{var r=Rr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:x.resolve(r)}catch(i){return j(i)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=x.resolve(typeof t=="function"?Ce.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:x,debug:{get:()=>oe,set:t=>{wo(t,t==="dexie"?()=>!0:No)}},derive:Ze,extend:Y,props:ot,override:mo,Events:St,on:$e,liveQuery:Pu,extendObservabilitySet:Fo,getByKeyPath:fe,setByKeyPath:ne,delByKeyPath:function(t,e){typeof e=="string"?ne(t,e,void 0):"length"in e&&[].map.call(e,function(n){ne(t,n,void 0)})},shallowClone:yo,deepClone:zt,getObjectDiff:li,cmp:q,asap:go,minKey:-(1/0),addons:[],connections:_t,errnames:ti,dependencies:Nr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Ce.maxKey=Rt(Ce.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&($e("storagemutated",t=>{if(!he){let e;Sn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),he=!0,dispatchEvent(e),he=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{he||rn(t)}));let he=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),$e("storagemutated",e=>{he||t.postMessage(e)}),t.onmessage=e=>{e.data&&rn(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){$e("storagemutated",e=>{try{he||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&rn(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&rn(e.changedParts)})}x.rejectionMapper=function(t,e){if(!t||t instanceof et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Wi[t.name])return t;var n=new Wi[t.name](e||t.message,t);return"stack"in t&&de(n,"stack",{get:function(){return this.inner.stack}}),n},wo(oe,No);class Lt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class ts extends Lt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Nt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Cu=globalThis.history.pushState;function ns(...t){const e=Cu.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Nt)),e}const Ru=globalThis.history.replaceState;function rs(...t){const e=Ru.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Nt)),e}function ku(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ns)throw new ts("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===rs)throw new ts("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ns,globalThis.history.replaceState=rs,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Nt))})}}function Nu(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Du(t){const e=Object.entries(t).reduce((n,r)=>{const i=`${r[0]}=${r[1]}`;return`${n}&${i}`},"");return new URLSearchParams(e)}function zu(t){const n=(t?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(o=>!!o),i=globalThis.location.search?Nu(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:i,hash:s}}class Ou extends Lt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Ho(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const is=6;function ss(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>is)throw new Ou(`Route sanitization depth has exceed the max of ${is} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Ho(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(i=>{i(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Fn extends Lt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Iu(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Fn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Fn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Fn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Lu(t,e,n,r=!1){const i=Ko(t,e,n);r?globalThis.history.replaceState(void 0,"",i):globalThis.history.pushState(void 0,"",i)}function Ko(t,e,n=""){var l;if(!n&&e!=null)throw new Lt("Route base regexp was defined but routeBase string was not provided.");const r=Bu(e)?`/${n}`:"",i=t.search?Du(t.search).toString():"",s=i?`?${i}`:"",o=(l=t.hash)!=null&&l.startsWith("#")?"":"#",a=t.hash?`${o}${t.hash}`:"";return`${r}/${t.paths.join("/")}${s}${a}`}function Bu(t){return!!(t&&globalThis.location.pathname.match(t))}function Mu(t={}){var o;Iu(t),ku();const e=(o=t.routeBase)==null?void 0:o.replace(/\/+$/,""),n=e?new RegExp(`^\\/${t.routeBase}`):void 0;let r=!1;const i=()=>ss(s),s={listeners:new Set,initParams:t,sanitizeFullRoute:a=>{const l={hash:void 0,search:void 0,...a};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(a,l=!1,u=!1)=>{const c=s.getCurrentRawRoutes(),h={...c,...a},d=s.sanitizeFullRoute(h);if(!(!u&&Ho(c,d)))return Lu(d,n,e,l)},createRoutesUrl:a=>Ko(a,n,e),getCurrentRawRoutes:()=>zu(n),removeAllRouteListeners(){s.listeners.forEach(a=>s.removeRouteListener(a))},addRouteListener:(a,l)=>{if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new Lt(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return s.listeners.add(l),r||(globalThis.addEventListener(Nt,i),r=!0),a&&ss(s,l),l},hasRouteListener:a=>s.listeners.has(a),removeRouteListener:a=>{const l=s.listeners.delete(a);return s.listeners.size||(globalThis.removeEventListener(Nt,i),r=!1),l},sanitizationDepth:0};return s}const Uo=Mu({routeBase:"resizable-image-element"}),ju=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Fu="resizable-image-element-storage";class Hu extends Ie{constructor(){super(Fu),this.version(1).stores({storedUrls:"&index"})}}const Hn=new Hu,os={async set(t){const e=vn(t).map((n,r)=>({index:r,url:n}));await Hn.storedUrls.clear(),await Hn.storedUrls.bulkPut(e)},async get(){const e=(await Hn.storedUrls.toArray()).map(r=>r.url),n=vn(e);return Ku(n.length?n:ju)}};function Ku(t){var e,n;try{const r=vn(((n=(e=Uo.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function vn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(as)}const{defineElement:Uu,defineElementNoInputs:Wu}=Va(),qt=Uu()({tagName:"vir-url-input",events:{urlsChange:Jt()},styles:Ge`
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
                ${yt("input",a=>{const u=a.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(u))})}
                ${yt("blur",()=>{i&&(i.value=o)})}
                .value=${i&&i.matches(":focus")?s:o}
            ></textarea>
        `}}),ft={max:{width:300,height:600},min:{width:300,height:150}};Wu({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Cs(os.get()),constraints:void 0,router:Uo,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Ge`
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

        ${t.showConstraints} ${vt} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||ft.min.width,height:Number(o==null?void 0:o.minH)||ft.min.height},max:{width:Number(o==null?void 0:o.maxW)||ft.max.width,height:Number(o==null?void 0:o.maxH)||ft.max.height}}})}const n=t.constraints??ft,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function i(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function s(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!Or(i(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Wn(1e3).then(()=>{const o=i();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:i()}}),F`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${qt}
                ${Hr(qt,{urls:r})}
                ${yt(qt.events.urlsChange,o=>{const a=o.detail;os.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${qt}>
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
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const u=[Kn(o),Kn(l)].join(" "),c=n[o][l];return F`
                            <label>
                                ${u}
                                <br />
                                ${te(c)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${c}
                                    ${yt("input",h=>{s(h.currentTarget,o,l)})}
                                />
                            </label>
                        `});return F`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${Vu(n,t.imageUrls)}</div>
        `}});function Vu(t,e){return er(e,"Loading...",n=>vn(n).map(r=>{const i=`
                height: ${te(t.max.height)};
                max-height: ${te(t.max.height)};
                width: ${te(t.max.width)};
                max-width: ${te(t.max.width)}`,s=`height: ${te(t.min.height)}; width: ${te(t.min.width)}`;return F`
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
