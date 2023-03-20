(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const jo=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],Zs=new RegExp(jo.join("|"),"g");function Do(t,e){return t.filter((n,r)=>!e.includes(r))}function Mo(t){return t.reduce((n,r)=>n.concat(r),[])}function Ro(t){return t.map(e=>e.trim()).filter(e=>e!=="")}function zo(t,e){return t.includes(e)}function Bo(t,e){return t.map(e)}async function Lo(t,e){await Cr(t,e)}async function Cr(t,e){return await t.reduce(async(r,s,i,o)=>{const a=await r,l=await e(s,i,o);return a.push(l),a},Promise.resolve([]))}async function Ko(t,e,n){const r=n!=null&&n.blocking?await Cr(t,e):await Promise.all(t.map(e));return t.filter((s,i)=>!!r[i])}function Pr(t){const e=new Set(Array.from(t.toLowerCase()));return Array.from(e).join("")}function Io(t,e){return new RegExp(t.source,Pr([t.flags,e].join("")))}function kr(t,e){return t.match(e)??[]}function Fo(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}function ei(t){return t.replace(Zs,"")}const Ho=ei;function ti(t){return t.replace(/,/g,"")}function Tr(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Uo(t,e,n){const r=si({searchIn:t,searchFor:e,caseSensitive:n,includeLength:!0}),s=ri(e,n);return t.split(s).reduce((a,l,c)=>{const u=r[c],d=a.concat(l);if(u){const h=t.slice(u.index,u.index+u.length);return d.concat(h)}else return d},[])}const qo={capitalizeFirstLetter:!1};function Ze(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Wo(t,e){return e.capitalizeFirstLetter?Ze(t):t}function Vo(t,e=qo){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Wo(r,e)}function os(t){return t!==t.toUpperCase()}function Jo(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=os(o)||os(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Go(t,e,n,r=n.length){const s=t.substring(0,e),i=t.substring(e+r);return`${s}${n}${i}`}function ni(t){return t.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function ri(t,e){const n=`g${!e&&typeof t=="string"?"i":""}`;return t instanceof RegExp?new RegExp(t.source,Pr(`${t.flags}${n}`)):new RegExp(ni(t),n)}function si({searchIn:t,searchFor:e,caseSensitive:n,includeLength:r}){const s=ri(e,n),i=[],o=[];return t.replace(s,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new Error(`Match index "${l}" is not a number. Searching for "${e}" in "${t}".`);const c=a[0];if(typeof c!="string")throw new Error(`regExpMatch should've been a string but was ${typeof c}!`);o.push({index:l,length:c.length}),i.push(l);const u=a[0];if(typeof u!="string")throw new Error(`Original match when searching for "${e}" in "${t}" at index ${l} is not a string.`);return u}),r?o:i}function et(t,e){return t.split(e)}const ii=String(NaN);function Or(t){if(typeof t=="string"&&isNaN(Number(t)))return ii;const e=String(t),[n,r]=e.split("."),s=r?`.${r}`:"";return`${kr(n.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${s}`}function oi({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}function ai(t){return typeof t=="number"?t:Number(typeof t=="string"?ti(t):t)}function li(t){return String(t).includes("e")}function Yo({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}const Nr=["january","february","march","april","may","june","july","august","september","october","november","december"],ci=Nr.map(t=>t.slice(0,3));class an extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function Qo(t,e=""){const[n,r,s=""]=t.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${t}"`);const i=s.length<4?`${e}${s.padStart(2,"0")}`:s;return jr(`${i.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function ui(t,e=!1){const[n,r,s]=t.replace(",","").split(" ");if(!n||!r||!s)throw new an(`Invalid ${ui.name} input: ${t}`);const i=Nr.indexOf(n.toLowerCase()),o=ci.indexOf(n.toLowerCase());let a=i===-1?o:i;if(a===-1)if(e)a=new Date().getUTCMonth();else throw new an(`Month name ${n} was not found.`);return jr(`${s.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function jr(t){const e=new Date(t+"T00:00:00.000Z");if(isNaN(Number(e)))throw new an(`Invalid utc date formed from input "${t}"`);return e}const as={days:{getKey:"getUTCDate",setKey:"setUTCDate"},months:{getKey:"getUTCMonth",setKey:"setUTCMonth"},years:{getKey:"getUTCFullYear",setKey:"setUTCFullYear"}};function Xo(t,e){t instanceof Date||(t=new Date(t));let n=new Date(t);return ie(e).forEach(r=>{const s=e[r];if(!s)return;const{getKey:i,setKey:o}=yi(as,r)?as[r]:{getKey:`getUTC${Ze(r)}`,setKey:`setUTC${Ze(r)}`},a=n[i]();n[o](a+s)}),n}function Zo(){return typeof window<"u"}function ea(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(n=>Se(n).trim()).join(`
`))}function ta(t){return t?t.map(Se).filter(_n).join(`
`):""}function Se(t){return t?t instanceof Error?t.message:String(t):""}function xt(t){return t instanceof Error?t:new Error(Se(t))}function na(t){let e;try{const n=t();return wi(n)?new Promise(async r=>{try{const s=await n;return r(s)}catch(s){e=xt(s)}return r(e)}):n}catch(n){e=xt(n)}return e}function _n(t){return!!t}const ra=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ye(t,e){return t?ra.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function sa(t,e){return t&&e.every(n=>ye(t,n))}function ia(t,e){return ye(e,t)}function ie(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function oa(t){return ie(t).map(e=>t[e])}function Gn(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function aa(t){return Object.fromEntries(t)}function ln(t){return!!t&&typeof t=="object"}function di(t,e){try{if(t===e)return!0;if(ln(t)&&ln(e)){const n=Gn(t),r=Gn(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Se(n)}`),n}}function la(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function ca(t,e,n=!1,r=!1){try{return Sn(t,e,n),!0}catch(s){return r&&console.error(s),!1}}function Sn(t,e,n=!1,r={}){const s=ie(t),i=new Set(ie(e));if(!n){const o=s.filter(a=>!i.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!ye(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const l=t[o],c=e[o];r[o]||hi(l,c,a,n,r[o]??{})})}function hi(t,e,n,r,s){var a;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{ye(e,"constructor")&&(!ye(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,c)=>{if(e.map(d=>{try{hi(l,d,n,r,s);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${Se(h)}`)}}).filter(_n).length===e.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${e.join(", ")}"`)})):ln(e)&&Sn(t,e,r,s)}function xn(t){return Array.isArray(t)?"array":typeof t}function Dr(t,e){return xn(t)===e}function fi(t,e,n){if(!Dr(t,e))throw new TypeError(`'${n}' is of type '${xn(t)}' but type '${e}' was expected.`)}function mi({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(Dr(n,"object")?Sn(r,n):fi(r,xn(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function pi(t){return ie(t).filter(e=>isNaN(Number(e)))}function Mr(t){return pi(t).map(n=>t[n])}function gi(t,e){return Mr(e).includes(t)}function ua(t,e,n=!1){return n?t.reduce((r,s)=>{const i=Mr(e).find(o=>String(o).toUpperCase()===String(s).toUpperCase());return i?r.concat(i):r},[]):t.filter(r=>gi(r,e))}function $n(t,e){return ie(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function da(t,e){return $n(t,n=>!e.includes(n))}function ha(t,e){return $n(t,n=>e.includes(n))}function yi(t,e){return e in t}function fa(t){return JSON.parse(JSON.stringify(t))}function ma(t){function e(n){return ie(t).reduce((s,i)=>{const o=n(i,t[i],t);return{...s,[i]:o}},{})}return e}function Rr(t,e){let n=!1;const r=ie(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(ie(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function vi(t,e){const n=e[0];if(!ye(t,n))return;const r=t[n];return e.length>1?vi(r,e.slice(1)):r}function Dt(t){const e=zr();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}async function pa(t,e){return Dt(t).then(()=>e)}function wi(t){return!!(ye(t,"then")&&typeof t.then=="function")}class bi extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function ga(t,e){return new Promise(async(n,r)=>{const s=t===1/0?void 0:setTimeout(()=>{r(new bi(t))},t);try{const i=await e;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function zr(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${zr.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}async function ya({conditionCallback:t,timeoutMs:e=1e4,intervalMs:n=100,timeoutMessage:r=""}){let s=!1,i;async function o(){try{s=!!await t()}catch(l){s=!1,i=l}}const a=Date.now();for(await o();!s;){if(await Dt(n),Date.now()-a>=e){const l=r?`${r}: `:"";throw new Error(`${l}Timeout of "${e}" exceeded waiting for condition to be true${Se(i)}`)}await o()}}const Nn="://";function va(...t){const e=t.join("/"),[n,r=""]=e.includes(Nn)?e.split(Nn):["",e];let s=!1,i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").map(a=>a.includes("?")||s?(s=!0,a):encodeURIComponent(a)).reduce((a,l,c,u)=>{if(i)return a;const d=u[c+1];let h=l;const f=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||f){i=!0;let y=!1;const m=u.slice(f?c+2:c+1).reduce((v,p)=>(p.includes("#")&&(y=!0),y?v.concat(p):[v,p].join("&")),"");h=[l,d,m].join("")}return a.concat(h)},[]);return[n,n?Nn:"",o.join("/")].join("")}const wa=/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/;function ba(t){return!!t.match(wa)}const _a=["k","M","B","T","P","E","Z","Y"];function Br({beforeDot:t,afterDot:e="",maxLength:n}){if(e.length){const r=n-t.length-1;if(r>0){const s=e.slice(0,r);return Number(s)?[t,s].join("."):t}}return t}function Sa(t,e,n){const[r,s]=et(t,"."),i=Or(r),o=kr(i,/,/g).length,a=e[o-1],[l,c]=et(i,","),u=[c,s].join("");return l.length+1>n?["0.",l[0],e[o]].join(""):[Br({beforeDot:l,afterDot:u,maxLength:n-1}),a].join("")}const ls=3;function xa({input:t,maxLength:e}){const n=String(t),[r,s]=et(n,"e"),i=s.replace(/^[\-\+]/,""),o=s[0],a=["e",o,i].join(""),[l,c]=et(r,"."),u=i.length+ls;return u===e?[l,a].join(""):u>e?o==="-"?"0":String(1/0):[Br({afterDot:c,beforeDot:l,maxLength:e-i.length+ls}),a].join("")}function $a(t,e){const[n,r]=et(Or(t),".");if(n.length<=e)return Br({beforeDot:n,afterDot:r,maxLength:e})}function Ea(t,{customSuffixes:e=_a,maxLength:n=6}={}){const r=ai(t);if(isNaN(r)||r===1/0)return String(r);if(li(r))return xa({input:r,maxLength:n});const s=String(r),i=$a(s,n);return i??Sa(s,e,n)}function Aa(t,e){return t.length>=e}function Ca(t){return t}function Pa(t){return t}function ka(){return t=>t}function Ta(t){return t}const Oa=Object.freeze(Object.defineProperty({__proto__:null,InvalidDateError:an,NaNString:ii,PromiseTimeoutError:bi,addCommasToNumber:Or,addRegExpFlags:Io,ansiRegex:Zs,areJsonEqual:di,assertMatchesObjectShape:Sn,assertRuntimeTypeOf:fi,awaitedBlockingMap:Cr,awaitedFilter:Ko,awaitedForEach:Lo,calculateRelativeDate:Xo,camelCaseToKebabCase:Jo,capitalizeFirstLetter:Ze,clamp:oi,collapseWhiteSpace:Tr,combineErrorMessages:ta,combineErrors:ea,convertIntoNumber:ai,copyThroughJson:la,createDateFromNamedCommaFormat:ui,createDateFromSlashFormat:Qo,createDateFromUtcIsoFormat:jr,createDeferredPromiseWrapper:zr,deDupeRegExFlags:Pr,doesRequireScientificNotation:li,englishFullMonthNames:Nr,englishShortMonthNames:ci,ensureError:xt,ensureMinAndMax:Yo,ensureType:Ta,escapeStringForRegExp:ni,executeAndReturnError:na,extractErrorMessage:Se,filterObject:$n,filterOutIndexes:Do,filterToEnumValues:ua,flatten2dArray:Mo,getAllIndexesOf:si,getEntriesSortedByKey:Gn,getEnumTypedKeys:pi,getEnumTypedValues:Mr,getObjectTypedKeys:ie,getObjectTypedValues:oa,getRuntimeTypeOf:xn,getValueFromNestedKeys:vi,hasKey:yi,isBrowser:Zo,isEnumValue:gi,isKeyof:ia,isLengthAtLeast:Aa,isObject:ln,isPromiseLike:wi,isRuntimeTypeOf:Dr,isTruthy:_n,isUuid:ba,joinUrlParts:va,joinWithFinalConjunction:Fo,jsonify:fa,kebabCaseToCamelCase:Vo,makeReadonly:Pa,makeWritable:Ca,mapObjectValues:Rr,mapObjectValuesSync:ma,matchesObjectShape:ca,omitObjectKeys:da,parseJson:mi,pickObjectKeys:ha,removeAnsiEscapeCodes:ei,removeColor:Ho,removeCommasFromNumberString:ti,replaceStringAtIndex:Go,safeMatch:kr,splitIncludeSplit:Uo,trimArrayStrings:Ro,truncateNumber:Ea,typedArrayIncludes:zo,typedHasProperties:sa,typedHasProperty:ye,typedMap:Bo,typedObjectFromEntries:aa,typedSplit:et,wait:Dt,waitForCondition:ya,waitValue:pa,wrapNarrowTypeWithTypeCheck:ka,wrapPromiseInTimeout:ga},Symbol.toStringTag,{value:"Module"}));function ee(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=window,Lr=Qt.ShadowRoot&&(Qt.ShadyCSS===void 0||Qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kr=Symbol(),cs=new WeakMap;let _i=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Kr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Lr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=cs.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&cs.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new _i(typeof t=="string"?t:t+"",void 0,Kr),Si=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new _i(n,t,Kr)},Na=(t,e)=>{Lr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=Qt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},us=Lr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jn;const cn=window,ds=cn.trustedTypes,ja=ds?ds.emptyScript:"",hs=cn.reactiveElementPolyfillSupport,Yn={toAttribute(t,e){switch(e){case Boolean:t=t?ja:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},xi=(t,e)=>e!==t&&(e==e||t==t),Dn={attribute:!0,type:String,converter:Yn,reflect:!1,hasChanged:xi};let He=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=Dn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(us(s))}else e!==void 0&&n.push(us(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Na(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Dn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Yn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Yn;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||xi)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};He.finalized=!0,He.elementProperties=new Map,He.elementStyles=[],He.shadowRootOptions={mode:"open"},hs==null||hs({ReactiveElement:He}),((jn=cn.reactiveElementVersions)!==null&&jn!==void 0?jn:cn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mn;const un=window,tt=un.trustedTypes,fs=tt?tt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ge=`lit$${(Math.random()+"").slice(9)}$`,$i="?"+ge,Da=`<${$i}>`,nt=document,$t=(t="")=>nt.createComment(t),Et=t=>t===null||typeof t!="object"&&typeof t!="function",Ei=Array.isArray,Ma=t=>Ei(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ms=/-->/g,ps=/>/g,$e=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gs=/'/g,ys=/"/g,Ai=/^(?:script|style|textarea|title)$/i,Ra=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),za=Ra(1),ve=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),vs=new WeakMap,Je=nt.createTreeWalker(nt,129,null,!1),Ba=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=ct;for(let l=0;l<n;l++){const c=t[l];let u,d,h=-1,f=0;for(;f<c.length&&(o.lastIndex=f,d=o.exec(c),d!==null);)f=o.lastIndex,o===ct?d[1]==="!--"?o=ms:d[1]!==void 0?o=ps:d[2]!==void 0?(Ai.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=$e):d[3]!==void 0&&(o=$e):o===$e?d[0]===">"?(o=s??ct,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?$e:d[3]==='"'?ys:gs):o===ys||o===gs?o=$e:o===ms||o===ps?o=ct:(o=$e,s=void 0);const y=o===$e&&t[l+1].startsWith("/>")?" ":"";i+=o===ct?c+Da:h>=0?(r.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+ge+y):c+ge+(h===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[fs!==void 0?fs.createHTML(a):a,r]};let Qn=class Ci{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[c,u]=Ba(e,n);if(this.el=Ci.createElement(c,r),Je.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=Je.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(ge)){const f=u[o++];if(d.push(h),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(ge),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?Ka:m[1]==="?"?Fa:m[1]==="@"?Ha:En})}else l.push({type:6,index:i})}for(const h of d)s.removeAttribute(h)}if(Ai.test(s.tagName)){const d=s.textContent.split(ge),h=d.length-1;if(h>0){s.textContent=tt?tt.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],$t()),Je.nextNode(),l.push({type:2,index:++i});s.append(d[h],$t())}}}else if(s.nodeType===8)if(s.data===$i)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(ge,d+1))!==-1;)l.push({type:7,index:i}),d+=ge.length-1}i++}}static createElement(e,n){const r=nt.createElement("template");return r.innerHTML=e,r}};function rt(t,e,n=t,r){var s,i,o,a;if(e===ve)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const c=Et(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=rt(t,l._$AS(t,e.values),l,r)),e}let La=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:nt).importNode(r,!0);Je.currentNode=i;let o=Je.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Ir(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new Ua(o,this,e)),this.u.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Je.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Ir=class Pi{constructor(e,n,r,s){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=rt(this,e,n),Et(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==ve&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ma(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==L&&Et(this._$AH)?this._$AA.nextSibling.data=e:this.T(nt.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Qn.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new La(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=vs.get(e.strings);return n===void 0&&vs.set(e.strings,n=new Qn(e)),n}k(e){Ei(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Pi(this.O($t()),this.O($t()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},En=class{constructor(e,n,r,s,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=rt(this,e,n,0),o=!Et(e)||e!==this._$AH&&e!==ve,o&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=rt(this,a[r+l],n,l),c===ve&&(c=this._$AH[l]),o||(o=!Et(c)||c!==this._$AH[l]),c===L?e=L:e!==L&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ka=class extends En{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}};const Ia=tt?tt.emptyScript:"";let Fa=class extends En{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,Ia):this.element.removeAttribute(this.name)}},Ha=class extends En{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=rt(this,e,n,0))!==null&&r!==void 0?r:L)===ve)return;const s=this._$AH,i=e===L&&s!==L||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==L&&(s===L||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ua=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){rt(this,e)}};const ws=un.litHtmlPolyfillSupport;ws==null||ws(Qn,Ir),((Mn=un.litHtmlVersions)!==null&&Mn!==void 0?Mn:un.litHtmlVersions=[]).push("2.6.1");const qa=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new Ir(e.insertBefore($t(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rn,zn;let mt=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qa(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ve}};mt.finalized=!0,mt._$litElement$=!0,(Rn=globalThis.litElementHydrateSupport)===null||Rn===void 0||Rn.call(globalThis,{LitElement:mt});const bs=globalThis.litElementPolyfillSupport;bs==null||bs({LitElement:mt});((zn=globalThis.litElementVersions)!==null&&zn!==void 0?zn:globalThis.litElementVersions=[]).push("3.2.2");var Wa=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function Va(){return t=>{}}let At=class extends mt{};At=Wa([Va()],At);const Ja={capitalizeFirstLetter:!1};function Ga(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Ya(t,e){return e.capitalizeFirstLetter?Ga(t):t}function Qa(t,e=Ja){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Ya(r,e)}function _s(t){return t!==t.toUpperCase()}function Xa(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=_s(o)||_s(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const Za=["january","february","march","april","may","june","july","august","september","october","november","december"];Za.map(t=>t.slice(0,3));function Fr(t){return t?t instanceof Error?t.message:String(t):""}function el(t){return t instanceof Error?t:new Error(Fr(t))}const tl=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ki(t,e){return t?tl.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function nl(t,e){return t&&e.every(n=>ki(t,n))}function Me(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ss(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function xs(t){return!!t&&typeof t=="object"}function rl(t,e){try{if(t===e)return!0;if(xs(t)&&xs(e)){const n=Ss(t),r=Ss(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Fr(n)}`),n}}function sl(t,e){return Me(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function st(t,e){let n=!1;const r=Me(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Me(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function il(t){return!!(ki(t,"then")&&typeof t.then=="function")}function Ct(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ct.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ol=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function $s(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):ol(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bn;((Bn=window.HTMLSlotElement)===null||Bn===void 0?void 0:Bn.prototype.assignedElements)!=null;const Xn=Symbol("this-is-an-element-vir-declarative-element"),Hr=Symbol("key for ignoring inputs not having been set yet"),al={[Hr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ll={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ur=t=>(...e)=>({_$litDirective$:t,values:e});let qr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function cl(t,e){return Ti(t,e,At)}function Ti(t,e,n){Zn(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function Zn(t,e){if(t.type!==ll.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function Wr(t,e){return ul(t,e)}const ul=Ur(class extends qr{constructor(t){super(t),this.element=cl(t,"assign")}render(t,e){return dl(t,this.element,e),ve}});function dl(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Oi(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof At?!0:Oi(n)}var k=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Y=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},re,Ce,Pe,ke,We,Ue,J,pt,er,tr;const Ni=Symbol("element-vir-async-state-marker");function hl(t){if(!t)return{};const e=sl(t,(r,s)=>s instanceof ji);return st(e,(r,s)=>new fl(s.initialValue))}const It=Symbol("not set");class fl{constructor(e){re.add(this),Ce.set(this,It),Pe.set(this,void 0),ke.set(this,void 0),We.set(this,[]),Ue.set(this,void 0),J.set(this,Ct()),this.asyncMarkerSymbol=Ni,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(k(this,Ce,"f")===It||!rl(e.trigger,k(this,Ce,"f"))){Y(this,Ce,e.trigger,"f");const n=e.createPromise();k(this,re,"m",er).call(this,n)}}else"newPromise"in e?(k(this,Ce,"f"),k(this,re,"m",er).call(this,e.newPromise),k(this,re,"m",pt).call(this)):"resolvedValue"in e?k(this,re,"m",tr).call(this,e.resolvedValue):e.forceUpdate&&(Y(this,Ce,It,"f"),Y(this,Pe,void 0,"f"),k(this,J,"f").isSettled()||k(this,J,"f").reject("Canceled by force update"),Y(this,J,Ct(),"f"),k(this,re,"m",pt).call(this))}getValue(){return k(this,J,"f").isSettled()?k(this,ke,"f")?k(this,ke,"f"):k(this,Pe,"f"):k(this,J,"f").promise}addSettleListener(e){k(this,We,"f").push(e)}removeSettleListener(e){Y(this,We,k(this,We,"f").filter(n=>n!==e),"f")}}Ce=new WeakMap,Pe=new WeakMap,ke=new WeakMap,We=new WeakMap,Ue=new WeakMap,J=new WeakMap,re=new WeakSet,pt=function(){k(this,We,"f").forEach(e=>{e()})},er=function(e){e!==k(this,Ue,"f")&&(Y(this,Pe,void 0,"f"),Y(this,ke,void 0,"f"),Y(this,Ue,e,"f"),k(this,J,"f").isSettled()&&Y(this,J,Ct(),"f"),e.then(n=>{k(this,Ue,"f")===e&&k(this,re,"m",tr).call(this,n)}).catch(n=>{k(this,Ue,"f")===e&&(Y(this,ke,el(n),"f"),k(this,J,"f").promise.catch(()=>{}),k(this,J,"f").reject(n),k(this,re,"m",pt).call(this))}))},tr=function(e){e!==k(this,Pe,"f")&&(Y(this,ke,void 0,"f"),Y(this,Pe,e,"f"),k(this,J,"f").isSettled()&&Y(this,J,Ct(),"f"),k(this,J,"f").resolve(e),k(this,re,"m",pt).call(this))};class ji{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=Ni}}function Di(t){return new ji(t)}function Mi(t,e){return`${t}-${Xa(e)}`}function ml(t,e){return e?st(e,n=>se(`--${Mi(t,String(n))}`)):{}}function pl(t,e){return t?st(t,(n,r)=>{const s=e[n];return se(`var(${s}, ${r})`)}):{}}class gl extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ri(){return t=>{var e;return e=class extends gl{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function Xt(){return Ri()}function yl(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ri()(n);return e[n]=r,e},{}):{}}function Es(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function As(t,e){const n=t;function r(i,o){e&&Es(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Es(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function vl(t,e){return e?st(e,n=>Mi(t,String(n))):{}}function wl({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:st(t,(r,s)=>se(`:host(.${s})`)),hostClassNames:st(t,(r,s)=>se(s)),cssVarNames:e,cssVarValues:n}}function bl({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Me(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function _l(t,e){function n(s){Me(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function Vr(t){var e;const n=yl(t.events),r=vl(t.tagName,t.hostClasses),s=ml(t.tagName,t.cssVars),i=pl(t.cssVars,s),o={...al,...t.options},a=typeof t.styles=="function"?t.styles(wl({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Si``,l=t.renderCallback,c=(e=class extends At{createRenderParams(){return _l(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Oi(this)&&!this.haveInputsBeenSet&&!o[Hr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${Wr.name}" directive on it. If no inputs are intended, use "${Vr.name}" to define ${t.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(u));const d=t.renderCallback(u);return bl({host:u.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:u.state,inputs:u.inputs}),d}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const u=this.createRenderParams();t.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const u=this.createRenderParams();t.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){Me(u).forEach(d=>{$s()(this,d),this.instanceInputs[d]=u[d]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=hl(t.stateInit),this.instanceInputs=As(this,!1),this.instanceState=As(this,!0);const u=t.stateInit||{};Me(u).forEach(d=>{$s()(this,d);const h=this.asyncStateHandlerMap[d];h?(this.instanceState[d]=h.getValue(),h.addSettleListener(()=>{this[d]=h.getValue()})):this.instanceState[d]=u[d]}),this.definition=c}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(c,{[Xn]:{value:!0,writable:!1},name:{value:Qa(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,c),c}function zi(){return t=>Vr({...t,options:{[Hr]:!1},...t.options})}function gt(t,e){return Sl(t,e)}const Sl=Ur(class extends qr{constructor(t){super(t),this.element=Ti(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ve}}),Cs="onDomCreated",Ps=Ur(class extends qr{constructor(t){super(t),Zn(t,Cs)}update(t,[e]){Zn(t,Cs);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function nr(t,e,n,r){return t instanceof Error?r?r(t):Fr(t):il(t)?e:n?n(t):t}function xl(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),zi()(s(i))),defineElementNoInputs:i=>(r(i),Vr(s(i)))}}function $l(t,e){return t.filter((n,r)=>!e.includes(r))}function Bi(t){return t.filter(e=>nl(e,["tagName",Xn])&&!!e.tagName&&!!e[Xn])}const Li=new WeakMap;function El(t,e){var n;const r=Bi(e);return(n=Ki(Li,[t,...r]).value)===null||n===void 0?void 0:n.template}function Al(t,e,n){const r=Bi(e);return Fi(Li,[t,...r],n)}function Ki(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Ii(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Ki(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Ii(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Fi(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=Ii(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const c=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=c),Fi(c,e,n,r+1)}function Hi(t,e,n){return{name:t,check:e,transform:n}}const Cl=new WeakMap;function Ui(t,e,n){const r=El(t,e),s=r??n();if(!r){const o=Al(t,e,s);if(o.result)Cl.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=$l(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function qi(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,c)=>{var u;const d=s.length-1,h=s[d],f=c-1,y=e[f];let m;r&&r(l),typeof h=="string"&&(m=(u=n.find(p=>p.check(h,l,y)))===null||u===void 0?void 0:u.transform,m&&(s[d]=h+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[c];m?i[d]=i[d]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Wi(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Pl=[Hi("tag name css selector interpolation",(t,e,n)=>Wi(n),t=>t.tagName)];function kl(t,e){return qi(t,e,Pl)}function Ve(t,...e){const n=Ui(t,e,()=>kl(t,e));return Si(n.strings,...n.values)}const Tl=[Hi("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Wi(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function Ol(t){}function Nl(t){return qi(t.strings,t.values,Tl,Ol)}function F(t,...e){const n=za(t,...e),r=Ui(t,e,()=>Nl(n));return{...n,strings:r.strings,values:r.values}}function jl(t,e){return t<e}function Dl(t,e){return t>e}function Ml({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Dl:jl)(e.width/e.height,t.width/t.height)?"width":"height"}function Ln({box:t,constraint:e,constraintType:n}){const r=Ml({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Vi({box:t,ratio:e}){return Rr(t,(n,r)=>r*e)}function Ji({box:t,min:e,max:n}){return Rr(t,(r,s)=>oi({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Gi({min:t,max:e,box:n}){const r=Yi({min:t,max:e,box:n}),s=Vi({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||250),width:Math.floor(s.width||(t==null?void 0:t.width)||250)}}function Yi({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Ln({box:n,constraint:t,constraintType:"min"}):1,s=e?Ln({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Vi({ratio:i,box:n});return(t?Ln({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function Te(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=Rl(o,r[a]);return`${o}${l}`});return Tr(i.join(""))}function Rl(t,e){return e._$litType$!=null||e._$litDirective$!=null?Te(e):Array.isArray(e)?e.map(r=>Te(r)).join(""):t.endsWith("=")?`"${e}"`:e}var R=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(R||{});async function zl(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":Ll(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function Bl({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Te(F`
            <img src=${n} />
        `):t==="video"?Te(F`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Te(F`
                <p class="text-wrapper">
                    ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                </p>
            `):t==="audio"?Te(F`
                <audio controls src=${n}></audio>
            `):e}function Ll(t){return!!mi({jsonString:t,errorHandler:()=>{}})}function Kl(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}return t}async function ks(t,e){var l;let n;try{n=await fetch(t)}catch{}const r=((l=n==null?void 0:n.headers.get("Content-Type"))==null?void 0:l.toLowerCase())??"",s=await(n==null?void 0:n.text())??"",i=n?await zl(r,s):"image",o=Kl(s??"",i);return{templateString:Bl({imageText:o,imageType:i,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:i}}var Ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Il(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var dn={},An={},Mt={},Rt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnyOrigin=t.MessageDirectionEnum=void 0,function(e){e.FromParent="from-parent",e.FromChild="from-child"}(t.MessageDirectionEnum||(t.MessageDirectionEnum={})),t.AnyOrigin=Symbol("any-origin")})(Rt);Object.defineProperty(Mt,"__esModule",{value:!0});Mt.assertAllowedOrigin=void 0;const Fl=Rt;function Hl(t,e){if(t===Fl.AnyOrigin)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}`)}Mt.assertAllowedOrigin=Hl;var Cn={};Object.defineProperty(Cn,"__esModule",{value:!0});Cn.dangerDisableSecurityWarningsSymbol=void 0;Cn.dangerDisableSecurityWarningsSymbol=Symbol("dangerDisableSecurityWarningsSymbol");var Pn={};const Ul=Il(Oa);Object.defineProperty(Pn,"__esModule",{value:!0});Pn.sendPingPongMessage=void 0;const Ts=Ul,ql=Mt,Kn=Rt;function Wl(t,e,n){return n.type===t&&n.direction===e}function Vl(t){return Math.min(Math.floor(Math.pow(t,3)),5e3)}async function Jl({message:t,verifyChildData:e,iframeElement:n},r,s){if(!n)throw new Error("No iframe element was provided.");let i=0,o=!1,a,l,c,u=!1;const d={...t,direction:Kn.MessageDirectionEnum.FromParent},h=t.type;function f(p){try{(0,ql.assertAllowedOrigin)(r,p);const g=p.data;if(g.direction!==Kn.MessageDirectionEnum.FromChild)return;if(g.type==="error")throw new Error(`Child threw an error: ${g.data}`);if(g&&u&&Wl(h,Kn.MessageDirectionEnum.FromChild,g)){let w=!1;try{w=e?e(g.data):!0}catch{}if(!w)return;o=!0,l=p,a=g}}catch(g){c=(0,Ts.ensureError)(g)}}let y;const m=Date.now();for(;!o&&i<s&&!c;){const p=n.contentWindow;p&&(y==null||y.removeEventListener("message",f),p.addEventListener("message",f),p!==y&&(y=p),u=!0,p.postMessage(d)),await(0,Ts.wait)(Vl(i)),i++}const v=Date.now()-m;if(y==null||y.removeEventListener("message",f),c)throw c;if(!o)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${s}' tries ('${Math.floor(v/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but ");return{data:a==null?void 0:a.data,event:l}}Pn.sendPingPongMessage=Jl;Object.defineProperty(An,"__esModule",{value:!0});An.createIframeMessenger=void 0;const Gl=Mt,Yl=Cn,Ee=Rt,Ql=Pn;function Qi({allowedOrigins:t,maxAttemptCount:e=10,...n}){if(t!==Ee.AnyOrigin&&t.includes("*")&&(t=Ee.AnyOrigin),t===Ee.AnyOrigin&&!n[Yl.dangerDisableSecurityWarningsSymbol]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==Ee.AnyOrigin&&!t.length)throw new Error(`No allowed origins were provide to ${Qi.name}. At least one must be provided.`);return{async sendMessageToChild(r){if(r.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await(0,Ql.sendPingPongMessage)(r,t,r.maxAttemptCount||e)},listenForParentMessages(r){globalThis.addEventListener("message",async s=>{(0,Gl.assertAllowedOrigin)(t,s);const i=s.data;if(i.direction!==Ee.MessageDirectionEnum.FromParent)return;const o=await r({...i,originalEvent:s}),a={type:i.type,direction:Ee.MessageDirectionEnum.FromChild,data:o};t===Ee.AnyOrigin?globalThis.postMessage(a):t.forEach(l=>{globalThis.postMessage(a,{targetOrigin:l})})})}}}An.createIframeMessenger=Qi;var Xi={};Object.defineProperty(Xi,"__esModule",{value:!0});(function(t){var e=Ft&&Ft.__createBinding||(Object.create?function(r,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,o,a)}:function(r,s,i,o){o===void 0&&(o=i),r[o]=s[i]}),n=Ft&&Ft.__exportStar||function(r,s){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&e(s,r,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(An,t),n(Xi,t),n(Rt,t)})(dn);var Z=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t))(Z||{});const Ge=dn.createIframeMessenger({allowedOrigins:[window.location.origin]});var X=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(X||{});function Xl(t){return t.contentWindow}async function Zl({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){var l;await Ge.sendMessageToChild({message:{type:Z.Ready},iframeElement:r}),i&&await Ge.sendMessageToChild({message:{type:Z.ForceSize,data:i},iframeElement:r});const a=o??(await Ge.sendMessageToChild({message:{type:Z.SendSize},iframeElement:r,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await Zi({min:t,max:e,imageDimensions:a,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0}),((l=Xl(r))==null?void 0:l.document.documentElement.outerHTML)??""}async function Zi({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:a}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c=Gi({min:t,max:e,box:o??n});l.style.width=ee(Math.floor(c.width)),l.style.height=ee(Math.floor(c.height));const u=Ji({min:t,max:e,box:c});c.height<u.height?r.classList.add(X.VerticallyCenter):r.classList.remove(X.VerticallyCenter),r.style.width=ee(u.width),r.style.height=ee(u.height);const d=Yi({min:t,max:e,box:o??n});if(a&&(d>3?await Ge.sendMessageToChild({message:{type:Z.SendScalingMethod,data:"pixelated"},iframeElement:s}):await Ge.sendMessageToChild({message:{type:Z.SendScalingMethod,data:"default"},iframeElement:s}),i.imageType===R.Html)){const h=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},f={width:d*h.width,height:d*h.height};await Ge.sendMessageToChild({message:{type:Z.SendScale,data:f},iframeElement:s})}}var Os=Object.freeze,ec=Object.defineProperty,Ns=(t,e)=>Os(ec(t,"raw",{value:Os(e||t.slice())})),js,Ds;function tc(t,e,n){const r=Math.random(),s=F(js||(js=Ns([`
        <script>
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(
                    /s*(?:[\\d\\.]+)\\s+(?:[\\d\\.]+)\\s+((?:[\\d\\.]+))\\s+((?:[\\d\\.]+))\\s*/,
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
                const viewBoxDimensions = viewBox?.match(
                    /s*(?:[\\\\d\\\\.]+)\\\\s+(?:[\\\\d\\\\.]+)\\\\s+((?:[\\\\d\\\\.]+))\\\\s+((?:[\\\\d\\\\.]+))\\\\s*/,
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
    `])),t.imageType,n??"",R.Svg,R.Html,R.Image,R.Video,R.Text,R.Json,R.Audio,dn.MessageDirectionEnum.FromChild,dn.MessageDirectionEnum.FromChild,Z.Ready,Z.SendScale,Z.SendScalingMethod,Z.SendSize,Z.ForceSize,R.Audio),i=F(Ds||(Ds=Ns([`
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
    `])),t.imageType,R.Image,R.Svg,R.Video,R.Text,R.Json,r,e??"",s);return Tr(Te(i)).replace(String(r),`
${t.templateString}
`)}const nc={imageData:Di()},Ms=F`
    <div class="click-cover"></div>
`,In="latest-frame-srcdoc",yt=zi()({tagName:"vir-resizable-image",stateInit:nc,events:{settled:Xt(),imageDataCalculated:Xt(),errored:Xt()},styles:Ve`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${se(X.VerticallyCenter)}) {
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

        :host(.${se(X.HideLoading)}) .loading-wrapper,
        :host(.${se(X.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${se(X.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${se(X.HideLoading)}) iframe {
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[In];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(X.HideLoading),s(new i.settled(!1)),r.classList.remove(X.VerticallyCenter);try{return ks(e.imageUrl,!!e.blockAutoPlay)}catch{await Dt(1e3);try{return ks(e.imageUrl,!!e.blockAutoPlay)}catch(y){throw s(new i.errored(xt(y))),y}}},trigger:{...$n(e,f=>f!=="extraHtml")}}});const o=e.min&&e.max?Ji({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?Gi({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,c=nr(t.imageData,"",f=>(s(new i.imageDataCalculated(f)),f.imageType===R.Pdf?F`
                        <iframe
                            src=${f.imageUrl}
                            ${Ps(async y=>{try{await Zi({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:y,imageData:f,imageDimensions:a??{width:500,height:500},max:a,min:o,sendSizeMessage:!1}),r[In]="",s(new i.settled(!0)),r.classList.add(X.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                    `:F`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${tc(f,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${Ps(async y=>{try{const m=await Zl({min:o,max:a,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});r[In]=m,s(new i.settled(!0)),r.classList.add(X.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),f=>(s(new i.errored(xt(f))),F`
                    <div class="error-wrapper">
                        <slot name="error">${Se(f)}</slot>
                    </div>
                `)),u=nr(t.imageData,Ms,f=>!e.blockInteraction&&[R.Html,R.Video,R.Audio,R.Pdf].includes(f.imageType)?"":Ms,()=>""),d=t.imageData instanceof Error?Ve`
                      max-width: 100%;
                      max-height: 100%;
                  `:l?Ve`
                      width: ${l.width}px;
                      height: ${l.height}px;
                  `:"",h=Ve`
            width: ${(o==null?void 0:o.width)??250}px;
            height: ${(o==null?void 0:o.height)??250}px;
        `;return F`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="min-size" style=${h}>
                <div class="frame-constraint" style=${d}>${c}</div>
            </div>
            ${u}
        `}}),N=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,z=Object.keys,H=Array.isArray;function W(t,e){return typeof e!="object"||z(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||N.Promise||(N.Promise=Promise);const Pt=Object.getPrototypeOf,rc={}.hasOwnProperty;function Q(t,e){return rc.call(t,e)}function it(t,e){typeof e=="function"&&(e=e(Pt(t))),(typeof Reflect>"u"?z:Reflect.ownKeys)(e).forEach(n=>{de(t,n,e[n])})}const eo=Object.defineProperty;function de(t,e,n,r){eo(t,e,W(n&&Q(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ye(t){return{from:function(e){return t.prototype=Object.create(e.prototype),de(t.prototype,"constructor",t),{extend:it.bind(null,t.prototype)}}}}const sc=Object.getOwnPropertyDescriptor;function Jr(t,e){let n;return sc(t,e)||(n=Pt(t))&&Jr(n,e)}const ic=[].slice;function hn(t,e,n){return ic.call(t,e,n)}function to(t,e){return e(t)}function ht(t){if(!t)throw new Error("Assertion Failed")}function no(t){N.setImmediate?setImmediate(t):setTimeout(t,0)}function ro(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function he(t,e){if(Q(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=he(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:he(a,e.substr(o+1))}}function te(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){ht(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)te(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?H(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&Q(t,o)||(l=t[o]={}),te(l,a,n)}}else n===void 0?H(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function so(t){var e={};for(var n in t)Q(t,n)&&(e[n]=t[n]);return e}const oc=[].concat;function io(t){return oc.apply([],t)}const oo="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(io([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>N[t]),ac=oo.map(t=>N[t]);ro(oo,t=>[t,!0]);let pe=null;function zt(t){pe=typeof WeakMap<"u"&&new WeakMap;const e=rr(t);return pe=null,e}function rr(t){if(!t||typeof t!="object")return t;let e=pe&&pe.get(t);if(e)return e;if(H(t)){e=[],pe&&pe.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(rr(t[n]))}else if(ac.indexOf(t.constructor)>=0)e=t;else{const i=Pt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),pe&&pe.set(t,e),t)Q(t,s)&&(e[s]=rr(t[s]))}return e}const{toString:lc}={};function sr(t){return lc.call(t).slice(8,-1)}const ir=typeof Symbol<"u"?Symbol.iterator:"@@iterator",cc=typeof ir=="symbol"?function(t){var e;return t!=null&&(e=t[ir])&&e.apply(t)}:function(){return null},qe={};function ce(t){var e,n,r,s;if(arguments.length===1){if(H(t))return t.slice();if(this===qe&&typeof t=="string")return[t];if(s=cc(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const Gr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ao(t,e){oe=t,lo=e}var lo=()=>!0;const uc=!new Error("").stack;function Be(){if(uc)try{throw Be.arguments,new Error}catch(t){return t}return new Error}function or(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(lo).map(r=>`
`+r).join("")):""}var co=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Yr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(co),dc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Qe(t,e){this._e=Be(),this.name=t,this.message=e}function uo(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function fn(t,e,n,r){this._e=Be(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=uo(t,e)}function vt(t,e){this._e=Be(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=uo(t,e)}Ye(Qe).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+or(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ye(fn).from(Qe),Ye(vt).from(Qe);var Qr=Yr.reduce((t,e)=>(t[e]=e+"Error",t),{});const hc=Qe;var C=Yr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Be(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=dc[e]||n,this.inner=null)}return Ye(r).from(hc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Rs=co.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Zt=Yr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function kt(t){return t}function fc(t,e){return t==null||t===kt?e:function(n){return e(t(n))}}function Re(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function mc(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Re(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Re(s,this.onerror):s),i!==void 0?i:n}}function pc(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Re(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Re(r,this.onerror):r)}}function gc(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);W(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Re(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Re(i,this.onerror):i),r===void 0?o===void 0?void 0:o:W(r,o)}}function yc(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Xr(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Zt.ModifyError=fn,Zt.DexieError=Qe,Zt.BulkError=vt;var Tt={};const[ar,mn,lr]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,Pt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,Pt(e),t]})(),ho=mn&&mn.then,en=ar&&ar.constructor,Zr=!!lr;var cr=!1,vc=lr?()=>{lr.then(Ht)}:N.setImmediate?setImmediate.bind(null,Ht):N.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Ht(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Ht,0)},wt=function(t,e){ft.push([t,e]),pn&&(vc(),pn=!1)},ur=!0,pn=!0,Ne=[],tn=[],dr=null,hr=kt,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Bs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Bs(t[0],t[1])}catch{}})}},A=Xe,ft=[],je=0,nn=[];function x(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(oe&&(this._stackHolder=Be(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Tt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&mr(this,this._value))}this._state=null,this._value=null,++e.ref,mo(this,t)}const fr={get:function(){var t=A,e=gn;function n(r,s){var i=!t.global&&(t!==A||e!==gn);const o=i&&!fe();var a=new x((l,c)=>{es(this,new fo(yn(r,t,i,o),yn(s,t,i,o),l,c,t))});return oe&&yo(a,this),a}return n.prototype=Tt,n},set:function(t){de(this,"then",t&&t.prototype===Tt?fr:{get:function(){return t},set:fr.set})}};function fo(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function mo(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Bt();n&&typeof n.then=="function"?mo(t,(s,i)=>{n instanceof x?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,po(t)),r&&Lt()}},mr.bind(null,t))}catch(n){mr(t,n)}}function mr(t,e){if(tn.push(e),t._state===null){var n=t._lib&&Bt();e=hr(e),t._state=!1,t._value=e,oe&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=Jr(e,"stack");e._promise=t,de(e,"stack",{get:()=>cr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ne.some(s=>s._value===r._value)||Ne.push(r)}(t),po(t),n&&Lt()}}function po(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)es(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),je===0&&(++je,wt(()=>{--je==0&&ts()},[]))}function es(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++je,wt(wc,[n,t,e])}else t._listeners.push(e)}function wc(t,e,n){try{dr=e;var r,s=e._value;e._state?r=t(s):(tn.length&&(tn=[]),r=t(s),tn.indexOf(s)===-1&&function(i){for(var o=Ne.length;o;)if(Ne[--o]._value===i._value)return void Ne.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{dr=null,--je==0&&ts(),--n.psd.ref||n.psd.finalize()}}function go(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=or(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return oe&&((r=or(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&go(t._prev,e,n)),e}function yo(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Ht(){Bt()&&Lt()}function Bt(){var t=ur;return ur=!1,pn=!1,t}function Lt(){var t,e,n;do for(;ft.length>0;)for(t=ft,ft=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(ft.length>0);ur=!0,pn=!0}function ts(){var t=Ne;Ne=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=nn.slice(0),n=e.length;n;)e[--n]()}function Ut(t){return new x(Tt,!1,t)}function j(t,e){var n=A;return function(){var r=Bt(),s=A;try{return be(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{be(s,!1),r&&Lt()}}}it(x.prototype,{then:fr,_then:function(t,e){es(this,new fo(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Ut(r)):this.then(null,r=>r&&r.name===e?n(r):Ut(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Ut(e)))},stack:{get:function(){if(this._stack)return this._stack;try{cr=!0;var t=go(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{cr=!1}}},timeout:function(t,e){return t<1/0?new x((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&de(x.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=vo(),it(x,{all:function(){var t=ce.apply(null,arguments).map(qt);return new x(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>x.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof x)return t;if(t&&typeof t.then=="function")return new x((n,r)=>{t.then(n,r)});var e=new x(Tt,!0,t);return yo(e,dr),e},reject:Ut,race:function(){var t=ce.apply(null,arguments).map(qt);return new x((e,n)=>{t.map(r=>x.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>gn},newPSD:we,usePSD:at,scheduler:{get:()=>wt,set:t=>{wt=t}},rejectionMapper:{get:()=>hr,set:t=>{hr=t}},follow:(t,e)=>new x((n,r)=>we((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Re(function(){(function(a){function l(){a(),nn.splice(nn.indexOf(l),1)}nn.push(l),++je,wt(()=>{--je==0&&ts()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),en&&(en.allSettled&&de(x,"allSettled",function(){const t=ce.apply(null,arguments).map(qt);return new x(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>x.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),en.any&&typeof AggregateError<"u"&&de(x,"any",function(){const t=ce.apply(null,arguments).map(qt);return new x((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>x.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const I={awaits:0,echoes:0,id:0};var bc=0,rn=[],Fn=0,gn=0,_c=0;function we(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++_c;var o=Xe.env;i.env=Zr?{Promise:x,PromiseProp:{value:x,configurable:!0,writable:!0},all:x.all,race:x.race,allSettled:x.allSettled,any:x.any,resolve:x.resolve,reject:x.reject,nthen:zs(o.nthen,i),gthen:zs(o.gthen,i)}:{},e&&W(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=at(i,t,n,r);return i.ref===0&&i.finalize(),a}function ot(){return I.id||(I.id=++bc),++I.awaits,I.echoes+=100,I.id}function fe(){return!!I.awaits&&(--I.awaits==0&&(I.id=0),I.echoes=100*I.awaits,!0)}function qt(t){return I.echoes&&t&&t.constructor===en?(ot(),t.then(e=>(fe(),e),e=>(fe(),B(e)))):t}function Sc(t){++gn,I.echoes&&--I.echoes!=0||(I.echoes=I.id=0),rn.push(A),be(t,!0)}function xc(){var t=rn[rn.length-1];rn.pop(),be(t,!1)}function be(t,e){var n=A;if((e?!I.echoes||Fn++&&t===A:!Fn||--Fn&&t===A)||wo(e?Sc.bind(null,t):xc),t!==A&&(A=t,n===Xe&&(Xe.env=vo()),Zr)){var r=Xe.env.Promise,s=t.env;mn.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(N,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function vo(){var t=N.Promise;return Zr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(N,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:mn.then,gthen:t.prototype.then}:{}}function at(t,e,n,r,s){var i=A;try{return be(t,!0),e(n,r,s)}finally{be(i,!1)}}function wo(t){ho.call(ar,t)}function yn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&ot(),be(e,!0);try{return t.apply(this,arguments)}finally{be(s,!1),r&&wo(fe)}}}function zs(t,e){return function(n,r){return t.call(this,yn(n,e),yn(r,e))}}(""+ho).indexOf("[native code]")===-1&&(ot=fe=T);function Bs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(N.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),W(r,s)):N.CustomEvent&&W(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&N.dispatchEvent&&(dispatchEvent(r),!N.PromiseRejectionEvent&&N.onunhandledrejection))try{N.onunhandledrejection(r)}catch{}oe&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var B=x.reject;function pr(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===Qr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>pr(t,e,n,r))):B(i)}return s._promise(e,(i,o)=>we(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return B(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return B(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>pr(t,e,n,r))}const Oe=String.fromCharCode(65535),ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",bt=[],kn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),$c=kn,Ec=kn,bo=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function ze(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const _o={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Wt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=zt(e))[t],e)}class Ac{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,c,u){if(!u.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(u.idbtrans,u)}const a=Bt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):we(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):pr(this.db,e,[this.name],o)}finally{a&&Lt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(H(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=z(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(c=>c.compound&&n.every(u=>c.keyPath.indexOf(u)>=0)&&c.keyPath.every(u=>n.indexOf(u)>=0))[0];if(r&&this.db._maxKey!==Oe)return this.where(r.name).equals(r.keyPath.map(c=>e[c]));!r&&oe&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(c,u){try{return i.cmp(c,u)===0}catch{return!1}}const[a,l]=n.reduce(([c,u],d)=>{const h=s[d],f=e[d];return[c||h,c||!h?ze(u,h&&h.multi?y=>{const m=he(y,d);return H(m)&&m.some(v=>o(f,v))}:y=>o(f,he(y,d))):u]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,H(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(Q(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){W(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Wt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||H(e))return this.where(":id").equals(e).modify(n);{const r=he(e,this.schema.primKey.keyPath);if(r===void 0)return B(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?z(n).forEach(s=>{te(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Wt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?x.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:_o})).then(e=>e.numFailures?x.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(Wt(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new vt(`${this.name}.bulkAdd(): ${d} of ${c} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(Wt(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new vt(`${this.name}.bulkPut(): ${d} of ${c} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new vt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function _t(t){var e={},n=function(a,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return e[a].subscribe.apply(null,u),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,c){if(typeof a=="object")return o(a);l||(l=yc),c||(c=T);var u={subscribers:[],fire:c,subscribe:function(d){u.subscribers.indexOf(d)===-1&&(u.subscribers.push(d),u.fire=l(u.fire,d))},unsubscribe:function(d){u.subscribers=u.subscribers.filter(function(h){return h!==d}),u.fire=u.subscribers.reduce(l,c)}};return e[a]=n[a]=u,u}function o(a){z(a).forEach(function(l){var c=a[l];if(H(c))i(l,a[l][0],a[l][1]);else{if(c!=="asap")throw new C.InvalidArgument("Invalid event config");var u=i(l,kt,function(){for(var d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];u.subscribers.forEach(function(f){no(function(){f.apply(null,h)})})})}})}}function ut(t,e){return Ye(e).from({prototype:t}),e}function Ie(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Hn(t,e){t.filter=ze(t.filter,e)}function Un(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>ze(r(),e()):e,t.justLimit=n&&!r}function sn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Ls(t,e,n){const r=sn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Vt(t,e,n,r){const s=t.replayFilter?ze(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,c)=>{if(!s||s(l,c,h=>l.stop(h),h=>l.fail(h))){var u=l.primaryKey,d=""+u;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(u)),Q(i,d)||(i[d]=!0,e(a,l,c))}};return Promise.all([t.or._iterate(o,n),Ks(Ls(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Ks(Ls(t,r,n),ze(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Ks(t,e,n,r){var s=j(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=T},a=>{i.fail(a),o=T})||s(i.value,i,a=>o=a),o()})})}function q(t,e){try{const n=Is(t),r=Is(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c)if(s[c]!==i[c])return s[c]<i[c]?-1:1;return o===a?0:o<a?-1:1}(Fs(t),Fs(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c){const u=q(s[c],i[c]);if(u!==0)return u}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function Is(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=sr(t);return n==="ArrayBuffer"?"binary":n}function Fs(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class Cc{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,B.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,B.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=ze(n.algorithm,e)}_iterate(e,n){return Vt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&W(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Vt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(Ie(r,!0))return s.count({trans:n,query:{index:sn(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Vt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(c,u){return u?o(c[r[u]],u-1):c[s]}var a=this._ctx.dir==="next"?1:-1;function l(c,u){var d=o(c,i),h=o(u,i);return d<h?-a:d>h?a:0}return this.toArray(function(c){return c.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&Ie(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=sn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Vt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,Ie(n)?Un(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Un(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Un(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Hn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Hn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=ze(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&Ie(n,!0)&&n.limit>0)return this._read(s=>{var i=sn(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Hn(this._ctx,function(s){var i=s.primaryKey.toString(),o=Q(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=z(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var g=i[p],w=e[g];he(m,g)!==w&&(te(m,g,w),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:c}=a.schema.primaryKey,u=this.db._options.modifyChunkSize||200,d=[];let h=0;const f=[],y=(m,v)=>{const{failures:p,numFailures:g}=v;h+=m-g;for(let w of z(p))d.push(p[w])};return this.clone().primaryKeys().then(m=>{const v=p=>{const g=Math.min(u,m.length-p);return a.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(w=>{const E=[],S=[],b=l?[]:null,_=[];for(let $=0;$<g;++$){const O=w[$],D={value:zt(O),primKey:m[p+$]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(m[p+$]):l||q(c(O),c(D.value))===0?(S.push(D.value),l&&b.push(m[p+$])):(_.push(m[p+$]),E.push(D.value)))}const P=Ie(n)&&n.limit===1/0&&(typeof e!="function"||e===qn)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let O in $.failures)_.splice(parseInt(O),1);y(E.length,$)})).then(()=>(S.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:b,values:S,criteria:P,changeSpec:typeof e!="function"&&e}).then($=>y(S.length,$))).then(()=>(_.length>0||P&&e===qn)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then($=>y(_.length,$))).then(()=>m.length>p+g&&v(p+u))})};return v(0).then(()=>{if(d.length>0)throw new fn("Error modifying one or more objects",d,h,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return Ie(e)&&(e.isPrimKey&&!Ec||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:c,numFailures:u})=>{if(u)throw new fn("Could not delete some values",Object.keys(a).map(d=>a[d]),o-u);return o-u}))}):this.modify(qn)}}const qn=(t,e)=>e.value=null;function Pc(t,e){return t<e?-1:t===e?0:1}function kc(t,e){return t>e?-1:t===e?0:1}function G(t,e,n){var r=t instanceof xo?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Fe(t){return new t.Collection(t,()=>So("")).limit(0)}function Tc(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var c=e[l];if(c!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],c)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function Jt(t,e,n,r){var s,i,o,a,l,c,u,d=n.length;if(!n.every(m=>typeof m=="string"))return G(t,"String expected.");function h(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?Pc:kc;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});a=v.map(function(p){return p.upper}),l=v.map(function(p){return p.lower}),c=m,u=m==="next"?"":r}h("next");var f=new t.Collection(t,()=>me(a[0],l[d-1]+r));f._ondirectionchange=function(m){h(m)};var y=0;return f._addAlgorithm(function(m,v,p){var g=m.key;if(typeof g!="string")return!1;var w=i(g);if(e(w,l,y))return!0;for(var E=null,S=y;S<d;++S){var b=Tc(g,w,a[S],l[S],o,c);b===null&&E===null?y=S+1:(E===null||o(E,b)>0)&&(E=b)}return v(E!==null?function(){m.continue(E+u)}:p),!1}),f}function me(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function So(t){return{type:1,lower:t,upper:t}}class xo{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?Fe(this):new this.Collection(this,()=>me(e,n,!r,!s))}catch{return G(this,ae)}}equals(e){return e==null?G(this,ae):new this.Collection(this,()=>So(e))}above(e){return e==null?G(this,ae):new this.Collection(this,()=>me(e,void 0,!0))}aboveOrEqual(e){return e==null?G(this,ae):new this.Collection(this,()=>me(e,void 0,!1))}below(e){return e==null?G(this,ae):new this.Collection(this,()=>me(void 0,e,!1,!0))}belowOrEqual(e){return e==null?G(this,ae):new this.Collection(this,()=>me(void 0,e))}startsWith(e){return typeof e!="string"?G(this,"String expected."):this.between(e,e+Oe,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Jt(this,(n,r)=>n.indexOf(r[0])===0,[e],Oe)}equalsIgnoreCase(e){return Jt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ce.apply(qe,arguments);return e.length===0?Fe(this):Jt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ce.apply(qe,arguments);return e.length===0?Fe(this):Jt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Oe)}anyOf(){const e=ce.apply(qe,arguments);let n=this._cmp;try{e.sort(n)}catch{return G(this,ae)}if(e.length===0)return Fe(this);const r=new this.Collection(this,()=>me(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ce.apply(qe,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return G(this,ae)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return Fe(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return G(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,c=n&&n.includeUppers===!0;let u,d=s;function h(g,w){return d(g[0],w[0])}try{u=e.reduce(function(g,w){let E=0,S=g.length;for(;E<S;++E){const b=g[E];if(r(w[0],b[1])<0&&r(w[1],b[0])>0){b[0]=o(b[0],w[0]),b[1]=a(b[1],w[1]);break}}return E===S&&g.push(w),g},[]),u.sort(h)}catch{return G(this,ae)}let f=0;const y=c?g=>s(g,u[f][1])>0:g=>s(g,u[f][1])>=0,m=l?g=>i(g,u[f][0])>0:g=>i(g,u[f][0])>=0;let v=y;const p=new this.Collection(this,()=>me(u[0][0],u[u.length-1][1],!l,!c));return p._ondirectionchange=g=>{g==="next"?(v=y,d=s):(v=m,d=i),u.sort(h)},p._addAlgorithm((g,w,E)=>{for(var S=g.key;v(S);)if(++f,f===u.length)return w(E),!1;return!!function(b){return!y(b)&&!m(b)}(S)||(this._cmp(S,u[f][1])===0||this._cmp(S,u[f][0])===0||w(()=>{d===s?g.continue(u[f][0]):g.continue(u[f][1])}),!1)}),p}startsWithAnyOf(){const e=ce.apply(qe,arguments);return e.every(n=>typeof n=="string")?e.length===0?Fe(this):this.inAnyRange(e.map(n=>[n,n+Oe])):G(this,"startsWithAnyOf() only works with strings")}}function ne(t){return j(function(e){return Ot(e),t(e.target.error),!1})}function Ot(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const _e=_t(null,"storagemutated");class Oc{_lock(){return ht(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(ht(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{at(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(ht(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return ht(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=j(s=>{Ot(s),this._reject(e.error)}),e.onabort=j(s=>{Ot(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=j(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&_e.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return B(new C.ReadOnly("Transaction is readonly"));if(!this.active)return B(new C.TransactionInactive);if(this._locked())return new x((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return we(()=>{var i=new x((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new x((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=x.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new x((o,a)=>{r.then(l=>n._waitingQueue.push(j(o.bind(null,l))),l=>n._waitingQueue.push(j(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Q(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function gr(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+$o(e)}}function $o(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Eo(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:ro(n,r=>[r.name,r])}}let Nt=t=>{try{return t.only([[]]),Nt=()=>[[]],[[]]}catch{return Nt=()=>Oe,Oe}};function yr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>he(n,e)}(t):e=>he(e,t)}function Hs(t){return[].slice.call(t)}let Nc=0;function St(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function jc(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:c,upper:u,lowerOpen:d,upperOpen:h}=l;return c===void 0?u===void 0?null:e.upperBound(u,!!h):u===void 0?e.lowerBound(c,!!d):e.bound(c,u,!!d,!!h)}const{schema:s,hasGetAll:i}=function(l,c){const u=Hs(l.objectStoreNames);return{schema:{name:l.name,tables:u.map(d=>c.objectStore(d)).map(d=>{const{keyPath:h,autoIncrement:f}=d,y=H(h),m=h==null,v={},p={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:h,autoIncrement:f,unique:!0,extractKey:yr(h)},indexes:Hs(d.indexNames).map(g=>d.index(g)).map(g=>{const{name:w,unique:E,multiEntry:S,keyPath:b}=g,_={name:w,compound:H(b),keyPath:b,unique:E,multiEntry:S,extractKey:yr(b)};return v[St(b)]=_,_}),getIndexByKeyPath:g=>v[St(g)]};return v[":id"]=p.primaryKey,h!=null&&(v[St(h)]=p.primaryKey),p})},hasGetAll:u.length>0&&"getAll"in c.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(c){const u=c.name;return{name:u,schema:c,mutate:function({trans:d,type:h,keys:f,values:y,range:m}){return new Promise((v,p)=>{v=j(v);const g=d.objectStore(u),w=g.keyPath==null,E=h==="put"||h==="add";if(!E&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:S}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(S===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let b;const _=[],P=[];let $=0;const O=U=>{++$,Ot(U)};if(h==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:P,results:[],lastResult:void 0});m.type===3?_.push(b=g.clear()):_.push(b=g.delete(r(m)))}else{const[U,K]=E?w?[y,f]:[y,null]:[f,null];if(E)for(let M=0;M<S;++M)_.push(b=K&&K[M]!==void 0?g[h](U[M],K[M]):g[h](U[M])),b.onerror=O;else for(let M=0;M<S;++M)_.push(b=g[h](U[M])),b.onerror=O}const D=U=>{const K=U.target.result;_.forEach((M,Le)=>M.error!=null&&(P[Le]=M.error)),v({numFailures:$,failures:P,results:h==="delete"?f:_.map(M=>M.result),lastResult:K})};b.onerror=U=>{O(U),D(U)},b.onsuccess=D})},getMany:({trans:d,keys:h})=>new Promise((f,y)=>{f=j(f);const m=d.objectStore(u),v=h.length,p=new Array(v);let g,w=0,E=0;const S=_=>{const P=_.target;p[P._pos]=P.result,++E===w&&f(p)},b=ne(y);for(let _=0;_<v;++_)h[_]!=null&&(g=m.get(h[_]),g._pos=_,g.onsuccess=S,g.onerror=b,++w);w===0&&f(p)}),get:({trans:d,key:h})=>new Promise((f,y)=>{f=j(f);const m=d.objectStore(u).get(h);m.onsuccess=v=>f(v.target.result),m.onerror=ne(y)}),query:function(d){return h=>new Promise((f,y)=>{f=j(f);const{trans:m,values:v,limit:p,query:g}=h,w=p===1/0?void 0:p,{index:E,range:S}=g,b=m.objectStore(u),_=E.isPrimaryKey?b:b.index(E.name),P=r(S);if(p===0)return f({result:[]});if(d){const $=v?_.getAll(P,w):_.getAllKeys(P,w);$.onsuccess=O=>f({result:O.target.result}),$.onerror=ne(y)}else{let $=0;const O=v||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),D=[];O.onsuccess=U=>{const K=O.result;return K?(D.push(v?K.value:K.primaryKey),++$===p?f({result:D}):void K.continue()):f({result:D})},O.onerror=ne(y)}})}(i),openCursor:function({trans:d,values:h,query:f,reverse:y,unique:m}){return new Promise((v,p)=>{v=j(v);const{index:g,range:w}=f,E=d.objectStore(u),S=g.isPrimaryKey?E:E.index(g.name),b=y?m?"prevunique":"prev":m?"nextunique":"next",_=h||!("openKeyCursor"in S)?S.openCursor(r(w),b):S.openKeyCursor(r(w),b);_.onerror=ne(p),_.onsuccess=j(P=>{const $=_.result;if(!$)return void v(null);$.___id=++Nc,$.done=!1;const O=$.continue.bind($);let D=$.continuePrimaryKey;D&&(D=D.bind($));const U=$.advance.bind($),K=()=>{throw new Error("Cursor not stopped")};$.trans=d,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=j(p),$.next=function(){let M=1;return this.start(()=>M--?this.continue():this.stop()).then(()=>this)},$.start=M=>{const Le=new Promise((V,xe)=>{V=j(V),_.onerror=ne(xe),$.fail=xe,$.stop=lt=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=K,V(lt)}}),Ke=()=>{if(_.result)try{M()}catch(V){$.fail(V)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=j(V=>{_.onsuccess=Ke,Ke()}),$.continue=O,$.continuePrimaryKey=D,$.advance=U,Ke(),Le},v($)},p)})},count({query:d,trans:h}){const{index:f,range:y}=d;return new Promise((m,v)=>{const p=h.objectStore(u),g=f.isPrimaryKey?p:p.index(f.name),w=r(y),E=w?g.count(w):g.count();E.onsuccess=j(S=>m(S.target.result)),E.onerror=ne(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:Nt(e),schema:s}}function vr({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(u,d){return d.reduce((h,{create:f})=>({...h,...f(h)}),u)}(jc(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function vn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=Jr(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?de(o,s,{get(){return this.table(s)},set(l){eo(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function wr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function Dc(t,e){return t._cfg.version-e._cfg.version}function Mc(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;we(()=>{A.trans=i,A.transless=a,e===0?(z(s).forEach(l=>{Wn(n,l,s[l].primKey,s[l].indexes)}),vr(t,n),x.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},c,u,d){const h=[],f=l._versions;let y=l._dbSchema=_r(l,l.idbdb,d),m=!1;function v(){return h.length?x.resolve(h.shift()(u.idbtrans)).then(v):x.resolve()}return f.filter(p=>p._cfg.version>=c).forEach(p=>{h.push(()=>{const g=y,w=p._cfg.dbschema;Sr(l,g,d),Sr(l,w,d),y=l._dbSchema=w;const E=Ao(g,w);E.add.forEach(b=>{Wn(d,b[0],b[1].primKey,b[1].indexes)}),E.change.forEach(b=>{if(b.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=d.objectStore(b.name);b.add.forEach(P=>br(_,P)),b.change.forEach(P=>{_.deleteIndex(P.name),br(_,P)}),b.del.forEach(P=>_.deleteIndex(P))}});const S=p._cfg.contentUpgrade;if(S&&p._cfg.version>c){vr(l,d),u._memoizedTables={},m=!0;let b=so(w);E.del.forEach(O=>{b[O]=g[O]}),wr(l,[l.Transaction.prototype]),vn(l,[l.Transaction.prototype],z(b),b),u.schema=b;const _=Gr(S);let P;_&&ot();const $=x.follow(()=>{if(P=S(u),P&&_){var O=fe.bind(null,null);P.then(O,O)}});return P&&typeof P.then=="function"?x.resolve(P):$.then(()=>P)}}),h.push(g=>{(!m||!$c)&&function(w,E){[].slice.call(E.db.objectStoreNames).forEach(S=>w[S]==null&&E.db.deleteObjectStore(S))}(p._cfg.dbschema,g),wr(l,[l.Transaction.prototype]),vn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),u.schema=l._dbSchema})}),v().then(()=>{var p,g;g=d,z(p=y).forEach(w=>{g.db.objectStoreNames.contains(w)||Wn(g,w,p[w].primKey,p[w].indexes)})})}(t,e,i,n).catch(o)})}function Ao(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!kn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let c;for(c in a)l[c]||o.del.push(c);for(c in l){const u=a[c],d=l[c];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function Wn(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>br(s,i)),s}function br(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function _r(t,e,n){const r={};return hn(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=gr($o(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let u=0;u<i.indexNames.length;++u){const d=i.index(i.indexNames[u]);o=d.keyPath;var c=gr(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(c)}r[s]=Eo(s,a,l)}),r}function Sr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+hn(c).join("+")+"]";if(e[i]){const d=e[i].idxByName[u];d&&(d.name=l,delete e[i].idxByName[u],e[i].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&N.WorkerGlobalScope&&N instanceof N.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class Rc{_parseStoresSpec(e,n){z(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),c=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return gr(l,c||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),H(c),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Eo(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?W(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{W(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,wr(n,[n._allTables,n,n.Transaction.prototype]),vn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],z(i),i),n._storeNames=z(i),this}upgrade(e){return this._cfg.contentUpgrade=Xr(this._cfg.contentUpgrade||T,e),this}}function ns(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new De("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function rs(t){return t&&typeof t.databases=="function"}function xr(t){return we(function(){return A.letThrough=!0,t()})}function zc(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function Bc(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?B(e.dbOpenError):t);oe&&(e.openCanceller._stackHolder=Be()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return x.race([r,(typeof navigator>"u"?x.resolve():zc()).then(()=>new x((l,c)=>{if(s(),!n)throw new C.MissingAPI;const u=t.name,d=e.autoSchema?n.open(u):n.open(u,Math.round(10*t.verno));if(!d)throw new C.MissingAPI;d.onerror=ne(c),d.onblocked=j(t._fireOnBlocked),d.onupgradeneeded=j(h=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){d.onerror=Ot,o.abort(),d.result.close();const y=n.deleteDatabase(u);y.onsuccess=y.onerror=j(()=>{c(new C.NoSuchDatabase(`Database ${u} doesnt exist`))})}else{o.onerror=ne(c);var f=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=f<1,t._novip.idbdb=d.result,Mc(t,f/10,o,c)}},c),d.onsuccess=j(()=>{o=null;const h=t._novip.idbdb=d.result,f=hn(h.objectStoreNames);if(f.length>0)try{const m=h.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},p,g){v.verno=p.version/10;const w=v._dbSchema=_r(0,p,g);v._storeNames=hn(p.objectStoreNames,0),vn(v,[v._allTables],z(w),w)}(t,h,m):(Sr(t,t._dbSchema,m),function(v,p){const g=Ao(_r(0,v.idbdb,p),v._dbSchema);return!(g.add.length||g.change.some(w=>w.add.length||w.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),vr(t,m)}catch{}var y;bt.push(t),h.onversionchange=j(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),h.onclose=j(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},p){!rs(m)&&p!=="__dbnames"&&ns(m,v).put({name:p}).catch(T)}(t._deps,u),l()},c)}))]).then(()=>(s(),e.onReadyBeingFired=[],x.resolve(xr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(Xr,T);return e.onReadyBeingFired=[],x.resolve(xr(()=>c(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),B(l)}).finally(()=>{e.openComplete=!0,i()})}function $r(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):H(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function Lc(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=io(s);return[t,i,n]}function Co(t,e,n,r,s){return x.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===Qr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Co(t,e,n,null,s))):B(d)}const l=Gr(s);let c;l&&ot();const u=x.follow(()=>{if(c=s.call(o,o),c)if(l){var d=fe.bind(null,null);c.then(d,d)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=$r(c))},a);return(c&&typeof c.then=="function"?x.resolve(c).then(d=>o.active?d:B(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):u.then(()=>c)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),B(d)))})}function Gt(t,e,n){const r=H(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Kc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(u,d,h){const f=St(u),y=s[f]=s[f]||[],m=u==null?0:typeof u=="string"?1:u.length,v=d>0,p={...h,isVirtual:v,keyTail:d,keyLength:m,extractKey:yr(u),unique:!v&&h.unique};return y.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?u[0]:u.slice(0,m-1),d+1,h),y.sort((g,w)=>g.keyTail-w.keyTail),p}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const u of r.indexes)o(u.keyPath,0,u);function l(u){const d=u.query.index;return d.isVirtual?{...u,query:{index:d,range:(h=u.query.range,f=d.keyTail,{type:h.type===1?2:h.type,lower:Gt(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Gt(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:u;var h,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(u){const d=s[St(u)];return d&&d[0]}},count:u=>n.count(l(u)),query:u=>n.query(l(u)),openCursor(u){const{keyTail:d,isVirtual:h,keyLength:f}=u.query.index;return h?n.openCursor(l(u)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(Gt(p,u.reverse?t.MAX_KEY:t.MIN_KEY,d)):u.unique?m.continue(m.key.slice(0,f).concat(u.reverse?t.MIN_KEY:t.MAX_KEY,d)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(Gt(p,t.MAX_KEY,d),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(u)}}}}}};function ss(t,e,n,r){return n=n||{},r=r||"",z(t).forEach(s=>{if(Q(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=sr(i);a!==sr(o)?n[r+s]=e[s]:a==="Object"?ss(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),z(e).forEach(s=>{Q(t,s)||(n[r+s]=e[s])}),n}const Ic={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:c}=o.table(e).hook;switch(i.type){case"add":if(l.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"put":if(l.fire===T&&c.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"delete":if(a.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"deleteRange":if(a.fire===T)break;return o._promise("readwrite",()=>function(h){return d(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function u(h){const f=A.trans,y=h.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,h);if(!y)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:y}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,h,y).then(m=>{const v=y.map((p,g)=>{const w=m[g],E={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call(E,p,w,f);else if(h.type==="add"||w===void 0){const S=l.fire.call(E,p,h.values[g],f);p==null&&S!=null&&(p=S,h.keys[g]=p,r.outbound||te(h.values[g],r.keyPath,p))}else{const S=ss(w,h.values[g]),b=c.fire.call(E,S,p,w,f);if(b){const _=h.values[g];Object.keys(b).forEach(P=>{Q(_,P)?_[P]=b[P]:te(_,P,b[P])})}}return E});return n.mutate(h).then(({failures:p,results:g,numFailures:w,lastResult:E})=>{for(let S=0;S<y.length;++S){const b=g?g[S]:y[S],_=v[S];b==null?_.onerror&&_.onerror(p[S]):_.onsuccess&&_.onsuccess(h.type==="put"&&m[S]?h.values[S]:b)}return{failures:p,results:g,numFailures:w,lastResult:E}}).catch(p=>(v.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function d(h,f,y){return n.query({trans:h,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>u({type:"delete",keys:m,trans:h}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:d(h,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function Po(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)q(e.keys[s],t[i])===0&&(r.push(n?zt(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Fc={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Po(r.keys,r.trans._cache,r.cache==="clone");return s?x.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?zt(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function is(t){return!("from"in t)}const le=function(t,e){if(!this){const n=new le;return t&&"d"in t&&W(n,t),n}W(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function jt(t,e,n){const r=q(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(is(t))return W(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(q(n,t.from)<0)return s?jt(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Us(t);if(q(e,t.to)>0)return i?jt(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Us(t);q(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),q(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&wn(t,s),i&&o&&wn(t,i)}function wn(t,e){is(e)||function n(r,{from:s,to:i,l:o,r:a}){jt(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function Hc(t,e){const n=Er(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=Er(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(q(a.from,s.to)<=0&&q(a.to,s.from)>=0)return!0;q(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function Er(t){let e=is(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&q(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||q(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Us(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=qs(o)}t.d=qs(t)}function qs({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}it(le.prototype,{add(t){return wn(this,t),this},addKey(t){return jt(this,t,t),this},addKeys(t){return t.forEach(e=>jt(this,e,e)),this},[ir](){return Er(this)}});const Uc={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new le(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,c={...s,mutate:h=>{const f=h.trans,y=f.mutatedParts||(f.mutatedParts={}),m=b=>{const _=`idb://${e}/${r}/${b}`;return y[_]||(y[_]=new le)},v=m(""),p=m(":dels"),{type:g}=h;let[w,E]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const S=h.trans._cache;return s.mutate(h).then(b=>{if(H(w)){g!=="delete"&&(w=b.results),v.addKeys(w);const _=Po(w,S);_||g==="add"||p.addKeys(w),(_||E)&&function(P,$,O,D){function U(K){const M=P(K.name||"");function Le(V){return V!=null?K.extractKey(V):null}const Ke=V=>K.multiEntry&&H(V)?V.forEach(xe=>M.addKey(xe)):M.addKey(V);(O||D).forEach((V,xe)=>{const lt=O&&Le(O[xe]),On=D&&Le(D[xe]);q(lt,On)!==0&&(lt!=null&&Ke(lt),On!=null&&Ke(On))})}$.indexes.forEach(U)}(m,i,_,E)}else if(w){const _={from:w.lower,to:w.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return b})}},u=({query:{index:h,range:f}})=>{var y,m;return[h,new le((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},d={get:h=>[o,new le(h.key)],getMany:h=>[o,new le().addKeys(h.keys)],count:u,query:u,openCursor:u};return z(d).forEach(h=>{c[h]=function(f){const{subscr:y}=A;if(y){const m=E=>{const S=`idb://${e}/${r}/${E}`;return y[S]||(y[S]=new le)},v=m(""),p=m(":dels"),[g,w]=d[h](f);if(m(g.name||"").add(w),!g.isPrimaryKey){if(h!=="count"){const E=h==="query"&&l&&f.values&&s.query({...f,values:!1});return s[h].apply(this,arguments).then(S=>{if(h==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),S));const b=f.values?S.result.map(a):S.result;f.values?v.addKeys(b):p.addKeys(b)}else if(h==="openCursor"){const b=S,_=f.values;return b&&Object.create(b,{key:{get:()=>(p.addKey(b.primaryKey),b.key)},primaryKey:{get(){const P=b.primaryKey;return p.addKey(P),P}},value:{get:()=>(_&&v.addKey(b.primaryKey),b.value)}})}return S})}p.add(n)}}return s[h].apply(this,arguments)}}),c}}}};class De{constructor(e,n){this._middlewares={},this.verno=0;const r=De.dependencies;this._options=n={addons:De.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new x(a=>{i.dbReadyResolve=a}),i.openCanceller=new x((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=_t(this,"populate","blocked","versionchange","close",{ready:[Xr,T]}),this.on.ready.subscribe=to(this.on.ready.subscribe,a=>(l,c)=>{De.vip(()=>{const u=this._state;if(u.openComplete)u.dbOpenError||x.resolve().then(l),c&&a(l);else if(u.onReadyBeingFired)u.onReadyBeingFired.push(l),c&&a(l);else{a(l);const d=this;c||a(function h(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,ut(Cc.prototype,function(a,l){this.db=o;let c=_o,u=null;if(l)try{c=l()}catch(y){u=y}const d=a._ctx,h=d.table,f=h.hook.reading.fire;this._ctx={table:h,index:d.index,isPrimKey:!d.index||h.schema.primKey.keyPath&&d.index===h.schema.primKey.name,range:c,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:u,or:d.or,valueMapper:f!==kt?f:null}})),this.Table=function(a){return ut(Ac.prototype,function(l,c,u){this.db=a,this._tx=u,this.name=l,this.schema=c,this.hook=a._allTables[l]?a._allTables[l].hook:_t(null,{creating:[mc,T],reading:[fc,kt],updating:[gc,T],deleting:[pc,T]})})}(this),this.Transaction=function(a){return ut(Oc.prototype,function(l,c,u,d,h){this.db=a,this.mode=l,this.storeNames=c,this.schema=u,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=_t(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new x((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),B(f)})})}(this),this.Version=function(a){return ut(Rc.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return ut(xo.prototype,function(l,c,u){this.db=a,this._ctx={table:l,index:c===":id"?null:c,or:u};const d=a._deps.indexedDB;if(!d)throw new C.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(h,f)=>d.cmp(f,h),this._max=(h,f)=>d.cmp(h,f)>0?h:f,this._min=(h,f)=>d.cmp(h,f)<0?h:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=Nt(n.IDBKeyRange),this._createTransaction=(a,l,c,u)=>new this.Transaction(a,l,c,this._options.chromeTransactionDurability,u),this._fireOnBlocked=a=>{this.on("blocked").fire(a),bt.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(Kc),this.use(Ic),this.use(Uc),this.use(Fc),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(Dc),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new x((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return Bc(this)}_close(){const e=this._state,n=bt.indexOf(this);if(n>=0&&bt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new x(r=>{e.dbReadyResolve=r}),e.openCanceller=new x((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new x((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=j(()=>{(function({indexedDB:a,IDBKeyRange:l},c){!rs(a)&&c!=="__dbnames"&&ns(a,l).delete(c).catch(T)})(this._deps,this.name),r()}),o.onerror=ne(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return z(this._allTables).map(e=>this._allTables[e])}transaction(){const e=Lc.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(c=>{var u=c instanceof this.Table?c.name:c;if(typeof u!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return u}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(c=>{if(s&&s.storeNames.indexOf(c)===-1){if(!i)throw new C.SubTransaction("Table "+c+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(c){return s?s._promise(null,(u,d)=>{d(c)}):B(c)}const l=Co.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?at(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!Q(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const qc=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Wc{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[qc](){return this}}function ko(t,e){return z(e).forEach(n=>{wn(t[n]||(t[n]=new le),e[n])}),t}function Vc(t){return new Wc(e=>{const n=Gr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,_e.storagemutated.unsubscribe(u)}};e.start&&e.start(o);let a=!1,l=!1;function c(){return z(i).some(h=>s[h]&&Hc(s[h],i[h]))}const u=h=>{ko(s,h),c()&&d()},d=()=>{if(a||r)return;s={};const h={},f=function(y){n&&ot();const m=()=>we(t,{subscr:y,trans:null}),v=A.trans?at(A.transless,m):m();return n&&v.then(fe,fe),v}(h);l||(_e("storagemutated",u),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(c()?d():(s={},i=h,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return d(),o})}let Ar;try{Ar={indexedDB:N.indexedDB||N.mozIndexedDB||N.webkitIndexedDB||N.msIndexedDB,IDBKeyRange:N.IDBKeyRange||N.webkitIDBKeyRange}}catch{Ar={indexedDB:null,IDBKeyRange:null}}const Ae=De;function on(t){let e=ue;try{ue=!0,_e.storagemutated.fire(t)}finally{ue=e}}it(Ae,{...Zt,delete:t=>new Ae(t,{addons:[]}).delete(),exists:t=>new Ae(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return rs(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):ns(e,n).toCollection().primaryKeys()}(Ae.dependencies).then(t)}catch{return B(new C.MissingAPI)}},defineClass:()=>function(t){W(this,t)},ignoreTransaction:t=>A.trans?at(A.transless,t):t(),vip:xr,async:function(t){return function(){try{var e=$r(t.apply(this,arguments));return e&&typeof e.then=="function"?e:x.resolve(e)}catch(n){return B(n)}}},spawn:function(t,e,n){try{var r=$r(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:x.resolve(r)}catch(s){return B(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=x.resolve(typeof t=="function"?Ae.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:x,debug:{get:()=>oe,set:t=>{ao(t,t==="dexie"?()=>!0:bo)}},derive:Ye,extend:W,props:it,override:to,Events:_t,on:_e,liveQuery:Vc,extendObservabilitySet:ko,getByKeyPath:he,setByKeyPath:te,delByKeyPath:function(t,e){typeof e=="string"?te(t,e,void 0):"length"in e&&[].map.call(e,function(n){te(t,n,void 0)})},shallowClone:so,deepClone:zt,getObjectDiff:ss,cmp:q,asap:no,minKey:-(1/0),addons:[],connections:bt,errnames:Qr,dependencies:Ar,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Ae.maxKey=Nt(Ae.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(_e("storagemutated",t=>{if(!ue){let e;kn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),ue=!0,dispatchEvent(e),ue=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{ue||on(t)}));let ue=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),_e("storagemutated",e=>{ue||t.postMessage(e)}),t.onmessage=e=>{e.data&&on(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){_e("storagemutated",e=>{try{ue||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&on(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&on(e.changedParts)})}x.rejectionMapper=function(t,e){if(!t||t instanceof Qe||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Rs[t.name])return t;var n=new Rs[t.name](e||t.message,t);return"stack"in t&&de(n,"stack",{get:function(){return this.inner.stack}}),n},ao(oe,bo);class Kt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class Ws extends Kt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Tn="locationchange";let Vs=!1;const Jc=window.history.pushState;function Js(...t){const e=Jc.apply(window.history,t);return window.dispatchEvent(new Event(Tn)),e}const Gc=window.history.replaceState;function Gs(...t){const e=Gc.apply(window.history,t);return window.dispatchEvent(new Event(Tn)),e}function Yc(){if(!Vs){if(window.history.pushState===Js)throw new Ws("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===Gs)throw new Ws("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");Vs=!0,window.history.pushState=Js,window.history.replaceState=Gs,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Tn))})}}function Qc(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Xc(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Zc(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?Qc(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class eu extends Kt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function To(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const Ys=6;function Qs(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>Ys)throw new eu(`Route sanitization depth has exceed the max of ${Ys} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(To(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Vn extends Kt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function tu(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Vn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Vn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Vn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function nu(t,e,n,r=!1){const s=Oo(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Oo(t,e,n=""){var r;if(!n&&e!=null)throw new Kt("Route base regexp was defined but routeBase string was not provided.");const s=ru(e)?`/${n}`:"",i=t.search?Xc(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function ru(t){return!!(t&&window.location.pathname.match(t))}function su(t={}){var e;tu(t),Yc();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const c=i.getCurrentRawRoutes(),u={...c,...o},d=i.sanitizeFullRoute(u);if(!(!l&&To(c,d)))return nu(d,r,n,a)},createRoutesUrl:o=>Oo(o,r,n),getCurrentRawRoutes:()=>Zc(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Kt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(Tn,()=>Qs(i)),s=!0),o&&Qs(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const No=su({routeBase:"resizable-image-element"}),iu=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],ou="resizable-image-element-storage";class au extends De{constructor(){super(ou),this.version(1).stores({storedUrls:"&index"})}}const Jn=new au,Xs={async set(t){const e=bn(t).map((n,r)=>({index:r,url:n}));await Jn.storedUrls.clear(),await Jn.storedUrls.bulkPut(e)},async get(){const e=(await Jn.storedUrls.toArray()).map(r=>r.url),n=bn(e);return lu(n.length?n:iu)}};function lu(t){var e,n;try{const r=bn(((n=(e=No.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function bn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(_n)}const{defineElement:cu,defineElementNoInputs:uu}=xl(),Yt=cu()({tagName:"vir-url-input",events:{urlsChange:Xt()},styles:Ve`
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
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),F`
            <textarea
                ${gt("input",a=>{const c=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));e(new n.urlsChange(c))})}
                ${gt("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),dt={max:{width:300,height:600},min:{width:300,height:150}};uu({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Di(Xs.get()),constraints:void 0,router:No,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Ve`
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

        ${t.showConstraints} ${yt} {
            border-color: blue;
        }

        ${yt} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||dt.min.width,height:Number(o==null?void 0:o.minH)||dt.min.height},max:{width:Number(o==null?void 0:o.maxW)||dt.max.width,height:Number(o==null?void 0:o.maxH)||dt.max.height}}})}const n=t.constraints??dt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!di(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Dt(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),F`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Yt}
                ${Wr(Yt,{urls:r})}
                ${gt(Yt.events.urlsChange,o=>{const a=o.detail;Xs.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Yt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${gt("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const c=[Ze(o),Ze(l)].join(" "),u=n[o][l];return F`
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
                                    ${gt("input",d=>{i(d.currentTarget,o,l)})}
                                />
                            </label>
                        `});return F`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${du(n,t.imageUrls)}</div>
        `}});function du(t,e){return nr(e,"Loading...",n=>bn(n).map(r=>{const s=`
                height: ${ee(t.max.height)};
                max-height: ${ee(t.max.height)};
                width: ${ee(t.max.width)};
                max-width: ${ee(t.max.width)}`,i=`height: ${ee(t.min.height)}; width: ${ee(t.min.width)}`;return F`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${yt}
                            ${Wr(yt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${yt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
