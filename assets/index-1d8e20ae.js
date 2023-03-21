(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ro=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],si=new RegExp(Ro.join("|"),"g");function zo(t,e){return t.filter((n,r)=>!e.includes(r))}function Lo(t){return t.reduce((n,r)=>n.concat(r),[])}function Bo(t){return t.map(e=>e.trim()).filter(e=>e!=="")}function Ko(t,e){return t.includes(e)}function Io(t,e){return t.map(e)}async function Ho(t,e){await jr(t,e)}async function jr(t,e){return await t.reduce(async(r,s,i,o)=>{const a=await r,l=await e(s,i,o);return a.push(l),a},Promise.resolve([]))}async function Fo(t,e,n){const r=n!=null&&n.blocking?await jr(t,e):await Promise.all(t.map(e));return t.filter((s,i)=>!!r[i])}function Mr(t){const e=new Set(Array.from(t.toLowerCase()));return Array.from(e).join("")}function Uo(t,e){return new RegExp(t.source,Mr([t.flags,e].join("")))}function Dr(t,e){return t.match(e)??[]}function qo(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}function ii(t){return t.replace(si,"")}const Wo=ii;function oi(t){return t.replace(/,/g,"")}function Sn(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Vo(t,e,n){const r=ci({searchIn:t,searchFor:e,caseSensitive:n,includeLength:!0}),s=li(e,n);return t.split(s).reduce((a,l,u)=>{const c=r[u],d=a.concat(l);if(c){const h=t.slice(c.index,c.index+c.length);return d.concat(h)}else return d},[])}const Jo={capitalizeFirstLetter:!1};function Ze(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Go(t,e){return e.capitalizeFirstLetter?Ze(t):t}function Yo(t,e=Jo){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Go(r,e)}function cs(t){return t!==t.toUpperCase()}function Qo(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=cs(o)||cs(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Xo(t,e,n,r=n.length){const s=t.substring(0,e),i=t.substring(e+r);return`${s}${n}${i}`}function ai(t){return t.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function li(t,e){const n=`g${!e&&typeof t=="string"?"i":""}`;return t instanceof RegExp?new RegExp(t.source,Mr(`${t.flags}${n}`)):new RegExp(ai(t),n)}function ci({searchIn:t,searchFor:e,caseSensitive:n,includeLength:r}){const s=li(e,n),i=[],o=[];return t.replace(s,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new Error(`Match index "${l}" is not a number. Searching for "${e}" in "${t}".`);const u=a[0];if(typeof u!="string")throw new Error(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:l,length:u.length}),i.push(l);const c=a[0];if(typeof c!="string")throw new Error(`Original match when searching for "${e}" in "${t}" at index ${l} is not a string.`);return c}),r?o:i}function et(t,e){return t.split(e)}const ui=String(NaN);function Rr(t){if(typeof t=="string"&&isNaN(Number(t)))return ui;const e=String(t),[n,r]=e.split("."),s=r?`.${r}`:"";return`${Dr(n.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${s}`}function di({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}function hi(t){return typeof t=="number"?t:Number(typeof t=="string"?oi(t):t)}function fi(t){return String(t).includes("e")}function Zo({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}const zr=["january","february","march","april","may","june","july","august","september","october","november","december"],mi=zr.map(t=>t.slice(0,3));class cn extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function ea(t,e=""){const[n,r,s=""]=t.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${t}"`);const i=s.length<4?`${e}${s.padStart(2,"0")}`:s;return Lr(`${i.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function pi(t,e=!1){const[n,r,s]=t.replace(",","").split(" ");if(!n||!r||!s)throw new cn(`Invalid ${pi.name} input: ${t}`);const i=zr.indexOf(n.toLowerCase()),o=mi.indexOf(n.toLowerCase());let a=i===-1?o:i;if(a===-1)if(e)a=new Date().getUTCMonth();else throw new cn(`Month name ${n} was not found.`);return Lr(`${s.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function Lr(t){const e=new Date(t+"T00:00:00.000Z");if(isNaN(Number(e)))throw new cn(`Invalid utc date formed from input "${t}"`);return e}const us={days:{getKey:"getUTCDate",setKey:"setUTCDate"},months:{getKey:"getUTCMonth",setKey:"setUTCMonth"},years:{getKey:"getUTCFullYear",setKey:"setUTCFullYear"}};function ta(t,e){t instanceof Date||(t=new Date(t));let n=new Date(t);return ie(e).forEach(r=>{const s=e[r];if(!s)return;const{getKey:i,setKey:o}=_i(us,r)?us[r]:{getKey:`getUTC${Ze(r)}`,setKey:`setUTC${Ze(r)}`},a=n[i]();n[o](a+s)}),n}function na(){return typeof window<"u"}function ra(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(n=>Se(n).trim()).join(`
`))}function sa(t){return t?t.map(Se).filter($n).join(`
`):""}function Se(t){return t?t instanceof Error?t.message:String(t):""}function St(t){return t instanceof Error?t:new Error(Se(t))}function ia(t){let e;try{const n=t();return Si(n)?new Promise(async r=>{try{const s=await n;return r(s)}catch(s){e=St(s)}return r(e)}):n}catch(n){e=St(n)}return e}function $n(t){return!!t}const oa=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ve(t,e){return t?oa.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function aa(t,e){return t&&e.every(n=>ve(t,n))}function la(t,e){return ve(e,t)}function ie(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ca(t){return ie(t).map(e=>t[e])}function Zn(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function ua(t){return Object.fromEntries(t)}function un(t){return!!t&&typeof t=="object"}function gi(t,e){try{if(t===e)return!0;if(un(t)&&un(e)){const n=Zn(t),r=Zn(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Se(n)}`),n}}function da(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function ha(t,e,n=!1,r=!1){try{return En(t,e,n),!0}catch(s){return r&&console.error(s),!1}}function En(t,e,n=!1,r={}){const s=ie(t),i=new Set(ie(e));if(!n){const o=s.filter(a=>!i.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!ve(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(c){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${c}`)}const l=t[o],u=e[o];r[o]||yi(l,u,a,n,r[o]??{})})}function yi(t,e,n,r,s){var a;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{ve(e,"constructor")&&(!ve(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,u)=>{if(e.map(d=>{try{yi(l,d,n,r,s);return}catch(h){return new Error(`entry at index "${u}" did not match expected shape: ${Se(h)}`)}}).filter($n).length===e.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${e.join(", ")}"`)})):un(e)&&En(t,e,r,s)}function An(t){return Array.isArray(t)?"array":typeof t}function $t(t,e){return An(t)===e}function vi(t,e,n){if(!$t(t,e))throw new TypeError(`'${n}' is of type '${An(t)}' but type '${e}' was expected.`)}function er({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&($t(n,"object")?En(r,n):vi(r,An(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function wi(t){return ie(t).filter(e=>isNaN(Number(e)))}function Br(t){return wi(t).map(n=>t[n])}function bi(t,e){return Br(e).includes(t)}function fa(t,e,n=!1){return n?t.reduce((r,s)=>{const i=Br(e).find(o=>String(o).toUpperCase()===String(s).toUpperCase());return i?r.concat(i):r},[]):t.filter(r=>bi(r,e))}function Cn(t,e){return ie(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function ma(t,e){return Cn(t,n=>!e.includes(n))}function pa(t,e){return Cn(t,n=>e.includes(n))}function _i(t,e){return e in t}function ga(t){return JSON.parse(JSON.stringify(t))}function ya(t){function e(n){return ie(t).reduce((s,i)=>{const o=n(i,t[i],t);return{...s,[i]:o}},{})}return e}function Kr(t,e){let n=!1;const r=ie(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(ie(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function xi(t,e){const n=e[0];if(!ve(t,n))return;const r=t[n];return e.length>1?xi(r,e.slice(1)):r}function Dt(t){const e=Pn();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}async function va(t,e){return Dt(t).then(()=>e)}function Si(t){return!!(ve(t,"then")&&typeof t.then=="function")}class $i extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function wa(t,e){return new Promise(async(n,r)=>{const s=t===1/0?void 0:setTimeout(()=>{r(new $i(t))},t);try{const i=await e;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function Pn(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Pn.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}async function ba({conditionCallback:t,timeoutMs:e=1e4,intervalMs:n=100,timeoutMessage:r=""}){let s=!1,i;async function o(){try{s=!!await t()}catch(l){s=!1,i=l}}const a=Date.now();for(await o();!s;){if(await Dt(n),Date.now()-a>=e){const l=r?`${r}: `:"";throw new Error(`${l}Timeout of "${e}" exceeded waiting for condition to be true${Se(i)}`)}await o()}}const Rn="://";function _a(...t){const e=t.join("/"),[n,r=""]=e.includes(Rn)?e.split(Rn):["",e];let s=!1,i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").map(a=>a.includes("?")||s?(s=!0,a):encodeURIComponent(a)).reduce((a,l,u,c)=>{if(i)return a;const d=c[u+1];let h=l;const f=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||f){i=!0;let y=!1;const m=c.slice(f?u+2:u+1).reduce((v,p)=>(p.includes("#")&&(y=!0),y?v.concat(p):[v,p].join("&")),"");h=[l,d,m].join("")}return a.concat(h)},[]);return[n,n?Rn:"",o.join("/")].join("")}const xa=/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/;function Sa(t){return!!t.match(xa)}const $a=["k","M","B","T","P","E","Z","Y"];function Ir({beforeDot:t,afterDot:e="",maxLength:n}){if(e.length){const r=n-t.length-1;if(r>0){const s=e.slice(0,r);return Number(s)?[t,s].join("."):t}}return t}function Ea(t,e,n){const[r,s]=et(t,"."),i=Rr(r),o=Dr(i,/,/g).length,a=e[o-1],[l,u]=et(i,","),c=[u,s].join("");return l.length+1>n?["0.",l[0],e[o]].join(""):[Ir({beforeDot:l,afterDot:c,maxLength:n-1}),a].join("")}const ds=3;function Aa({input:t,maxLength:e}){const n=String(t),[r,s]=et(n,"e"),i=s.replace(/^[\-\+]/,""),o=s[0],a=["e",o,i].join(""),[l,u]=et(r,"."),c=i.length+ds;return c===e?[l,a].join(""):c>e?o==="-"?"0":String(1/0):[Ir({afterDot:u,beforeDot:l,maxLength:e-i.length+ds}),a].join("")}function Ca(t,e){const[n,r]=et(Rr(t),".");if(n.length<=e)return Ir({beforeDot:n,afterDot:r,maxLength:e})}function Pa(t,{customSuffixes:e=$a,maxLength:n=6}={}){const r=hi(t);if(isNaN(r)||r===1/0)return String(r);if(fi(r))return Aa({input:r,maxLength:n});const s=String(r),i=Ca(s,n);return i??Ea(s,e,n)}function ka(t,e){return t.length>=e}function Ta(t){return t}function Oa(t){return t}function Na(){return t=>t}function ja(t){return t}const Ma=Object.freeze(Object.defineProperty({__proto__:null,InvalidDateError:cn,NaNString:ui,PromiseTimeoutError:$i,addCommasToNumber:Rr,addRegExpFlags:Uo,ansiRegex:si,areJsonEqual:gi,assertMatchesObjectShape:En,assertRuntimeTypeOf:vi,awaitedBlockingMap:jr,awaitedFilter:Fo,awaitedForEach:Ho,calculateRelativeDate:ta,camelCaseToKebabCase:Qo,capitalizeFirstLetter:Ze,clamp:di,collapseWhiteSpace:Sn,combineErrorMessages:sa,combineErrors:ra,convertIntoNumber:hi,copyThroughJson:da,createDateFromNamedCommaFormat:pi,createDateFromSlashFormat:ea,createDateFromUtcIsoFormat:Lr,createDeferredPromiseWrapper:Pn,deDupeRegExFlags:Mr,doesRequireScientificNotation:fi,englishFullMonthNames:zr,englishShortMonthNames:mi,ensureError:St,ensureMinAndMax:Zo,ensureType:ja,escapeStringForRegExp:ai,executeAndReturnError:ia,extractErrorMessage:Se,filterObject:Cn,filterOutIndexes:zo,filterToEnumValues:fa,flatten2dArray:Lo,getAllIndexesOf:ci,getEntriesSortedByKey:Zn,getEnumTypedKeys:wi,getEnumTypedValues:Br,getObjectTypedKeys:ie,getObjectTypedValues:ca,getRuntimeTypeOf:An,getValueFromNestedKeys:xi,hasKey:_i,isBrowser:na,isEnumValue:bi,isKeyof:la,isLengthAtLeast:ka,isObject:un,isPromiseLike:Si,isRuntimeTypeOf:$t,isTruthy:$n,isUuid:Sa,joinUrlParts:_a,joinWithFinalConjunction:qo,jsonify:ga,kebabCaseToCamelCase:Yo,makeReadonly:Oa,makeWritable:Ta,mapObjectValues:Kr,mapObjectValuesSync:ya,matchesObjectShape:ha,omitObjectKeys:ma,parseJson:er,pickObjectKeys:pa,removeAnsiEscapeCodes:ii,removeColor:Wo,removeCommasFromNumberString:oi,replaceStringAtIndex:Xo,safeMatch:Dr,splitIncludeSplit:Vo,trimArrayStrings:Bo,truncateNumber:Pa,typedArrayIncludes:Ko,typedHasProperties:aa,typedHasProperty:ve,typedMap:Io,typedObjectFromEntries:ua,typedSplit:et,wait:Dt,waitForCondition:ba,waitValue:va,wrapNarrowTypeWithTypeCheck:Na,wrapPromiseInTimeout:wa},Symbol.toStringTag,{value:"Module"}));function ee(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=window,Hr=Zt.ShadowRoot&&(Zt.ShadyCSS===void 0||Zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fr=Symbol(),hs=new WeakMap;let Ei=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Fr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Hr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=hs.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&hs.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new Ei(typeof t=="string"?t:t+"",void 0,Fr),Ai=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Ei(n,t,Fr)},Da=(t,e)=>{Hr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=Zt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},fs=Hr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zn;const dn=window,ms=dn.trustedTypes,Ra=ms?ms.emptyScript:"",ps=dn.reactiveElementPolyfillSupport,tr={toAttribute(t,e){switch(e){case Boolean:t=t?Ra:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ci=(t,e)=>e!==t&&(e==e||t==t),Ln={attribute:!0,type:String,converter:tr,reflect:!1,hasChanged:Ci};let Ue=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=Ln){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ln}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(fs(s))}else e!==void 0&&n.push(fs(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Da(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Ln){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:tr).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:tr;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ci)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ue.finalized=!0,Ue.elementProperties=new Map,Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},ps==null||ps({ReactiveElement:Ue}),((zn=dn.reactiveElementVersions)!==null&&zn!==void 0?zn:dn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bn;const hn=window,tt=hn.trustedTypes,gs=tt?tt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ye=`lit$${(Math.random()+"").slice(9)}$`,Pi="?"+ye,za=`<${Pi}>`,nt=document,Et=(t="")=>nt.createComment(t),At=t=>t===null||typeof t!="object"&&typeof t!="function",ki=Array.isArray,La=t=>ki(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ys=/-->/g,vs=/>/g,Ee=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ws=/'/g,bs=/"/g,Ti=/^(?:script|style|textarea|title)$/i,Ba=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Ka=Ba(1),we=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),_s=new WeakMap,Ge=nt.createTreeWalker(nt,129,null,!1),Ia=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=ct;for(let l=0;l<n;l++){const u=t[l];let c,d,h=-1,f=0;for(;f<u.length&&(o.lastIndex=f,d=o.exec(u),d!==null);)f=o.lastIndex,o===ct?d[1]==="!--"?o=ys:d[1]!==void 0?o=vs:d[2]!==void 0?(Ti.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Ee):d[3]!==void 0&&(o=Ee):o===Ee?d[0]===">"?(o=s??ct,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Ee:d[3]==='"'?bs:ws):o===bs||o===ws?o=Ee:o===ys||o===vs?o=ct:(o=Ee,s=void 0);const y=o===Ee&&t[l+1].startsWith("/>")?" ":"";i+=o===ct?u+za:h>=0?(r.push(c),u.slice(0,h)+"$lit$"+u.slice(h)+ye+y):u+ye+(h===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[gs!==void 0?gs.createHTML(a):a,r]};let nr=class Oi{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[u,c]=Ia(e,n);if(this.el=Oi.createElement(u,r),Ge.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=Ge.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(ye)){const f=c[o++];if(d.push(h),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(ye),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?Fa:m[1]==="?"?qa:m[1]==="@"?Wa:kn})}else l.push({type:6,index:i})}for(const h of d)s.removeAttribute(h)}if(Ti.test(s.tagName)){const d=s.textContent.split(ye),h=d.length-1;if(h>0){s.textContent=tt?tt.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],Et()),Ge.nextNode(),l.push({type:2,index:++i});s.append(d[h],Et())}}}else if(s.nodeType===8)if(s.data===Pi)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(ye,d+1))!==-1;)l.push({type:7,index:i}),d+=ye.length-1}i++}}static createElement(e,n){const r=nt.createElement("template");return r.innerHTML=e,r}};function rt(t,e,n=t,r){var s,i,o,a;if(e===we)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const u=At(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),u===void 0?l=void 0:(l=new u(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=rt(t,l._$AS(t,e.values),l,r)),e}let Ha=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:nt).importNode(r,!0);Ge.currentNode=i;let o=Ge.nextNode(),a=0,l=0,u=s[0];for(;u!==void 0;){if(a===u.index){let c;u.type===2?c=new Ur(o,o.nextSibling,this,e):u.type===1?c=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(c=new Va(o,this,e)),this.u.push(c),u=s[++l]}a!==(u==null?void 0:u.index)&&(o=Ge.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Ur=class Ni{constructor(e,n,r,s){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=rt(this,e,n),At(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==we&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):La(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&At(this._$AH)?this._$AA.nextSibling.data=e:this.T(nt.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=nr.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new Ha(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=_s.get(e.strings);return n===void 0&&_s.set(e.strings,n=new nr(e)),n}k(e){ki(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Ni(this.O(Et()),this.O(Et()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},kn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=rt(this,e,n,0),o=!At(e)||e!==this._$AH&&e!==we,o&&(this._$AH=e);else{const a=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=rt(this,a[r+l],n,l),u===we&&(u=this._$AH[l]),o||(o=!At(u)||u!==this._$AH[l]),u===B?e=B:e!==B&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fa=class extends kn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Ua=tt?tt.emptyScript:"";let qa=class extends kn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Ua):this.element.removeAttribute(this.name)}},Wa=class extends kn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=rt(this,e,n,0))!==null&&r!==void 0?r:B)===we)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Va=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){rt(this,e)}};const xs=hn.litHtmlPolyfillSupport;xs==null||xs(nr,Ur),((Bn=hn.litHtmlVersions)!==null&&Bn!==void 0?Bn:hn.litHtmlVersions=[]).push("2.6.1");const Ja=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new Ur(e.insertBefore(Et(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kn,In;let mt=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ja(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return we}};mt.finalized=!0,mt._$litElement$=!0,(Kn=globalThis.litElementHydrateSupport)===null||Kn===void 0||Kn.call(globalThis,{LitElement:mt});const Ss=globalThis.litElementPolyfillSupport;Ss==null||Ss({LitElement:mt});((In=globalThis.litElementVersions)!==null&&In!==void 0?In:globalThis.litElementVersions=[]).push("3.2.2");var Ga=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function Ya(){return t=>{}}let Ct=class extends mt{};Ct=Ga([Ya()],Ct);const Qa={capitalizeFirstLetter:!1};function Xa(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Za(t,e){return e.capitalizeFirstLetter?Xa(t):t}function el(t,e=Qa){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return Za(r,e)}function $s(t){return t!==t.toUpperCase()}function tl(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=$s(o)||$s(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const nl=["january","february","march","april","may","june","july","august","september","october","november","december"];nl.map(t=>t.slice(0,3));function qr(t){return t?t instanceof Error?t.message:String(t):""}function rl(t){return t instanceof Error?t:new Error(qr(t))}const sl=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ji(t,e){return t?sl.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function il(t,e){return t&&e.every(n=>ji(t,n))}function Re(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Es(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function As(t){return!!t&&typeof t=="object"}function ol(t,e){try{if(t===e)return!0;if(As(t)&&As(e)){const n=Es(t),r=Es(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${qr(n)}`),n}}function al(t,e){return Re(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function st(t,e){let n=!1;const r=Re(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Re(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function ll(t){return!!(ji(t,"then")&&typeof t.then=="function")}function Pt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Pt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cl=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Cs(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):cl(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hn;((Hn=window.HTMLSlotElement)===null||Hn===void 0?void 0:Hn.prototype.assignedElements)!=null;const rr=Symbol("this-is-an-element-vir-declarative-element"),Wr=Symbol("key for ignoring inputs not having been set yet"),ul={[Wr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vr=t=>(...e)=>({_$litDirective$:t,values:e});let Jr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function hl(t,e){return Mi(t,e,Ct)}function Mi(t,e,n){sr(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function sr(t,e){if(t.type!==dl.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function Gr(t,e){return fl(t,e)}const fl=Vr(class extends Jr{constructor(t){super(t),this.element=hl(t,"assign")}render(t,e){return ml(t,this.element,e),we}});function ml(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Di(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof Ct?!0:Di(n)}var T=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Q=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},re,Pe,ke,Te,Ve,qe,G,pt,ir,or;const Ri=Symbol("element-vir-async-state-marker");function pl(t){if(!t)return{};const e=al(t,(r,s)=>s instanceof zi);return st(e,(r,s)=>new gl(s.initialValue))}const Ht=Symbol("not set");class gl{constructor(e){re.add(this),Pe.set(this,Ht),ke.set(this,void 0),Te.set(this,void 0),Ve.set(this,[]),qe.set(this,void 0),G.set(this,Pt()),this.asyncMarkerSymbol=Ri,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(T(this,Pe,"f")===Ht||!ol(e.trigger,T(this,Pe,"f"))){Q(this,Pe,e.trigger,"f");const n=e.createPromise();T(this,re,"m",ir).call(this,n)}}else"newPromise"in e?(T(this,Pe,"f"),T(this,re,"m",ir).call(this,e.newPromise),T(this,re,"m",pt).call(this)):"resolvedValue"in e?T(this,re,"m",or).call(this,e.resolvedValue):e.forceUpdate&&(Q(this,Pe,Ht,"f"),Q(this,ke,void 0,"f"),T(this,G,"f").isSettled()||T(this,G,"f").reject("Canceled by force update"),Q(this,G,Pt(),"f"),T(this,re,"m",pt).call(this))}getValue(){return T(this,G,"f").isSettled()?T(this,Te,"f")?T(this,Te,"f"):T(this,ke,"f"):T(this,G,"f").promise}addSettleListener(e){T(this,Ve,"f").push(e)}removeSettleListener(e){Q(this,Ve,T(this,Ve,"f").filter(n=>n!==e),"f")}}Pe=new WeakMap,ke=new WeakMap,Te=new WeakMap,Ve=new WeakMap,qe=new WeakMap,G=new WeakMap,re=new WeakSet,pt=function(){T(this,Ve,"f").forEach(e=>{e()})},ir=function(e){e!==T(this,qe,"f")&&(Q(this,ke,void 0,"f"),Q(this,Te,void 0,"f"),Q(this,qe,e,"f"),T(this,G,"f").isSettled()&&Q(this,G,Pt(),"f"),e.then(n=>{T(this,qe,"f")===e&&T(this,re,"m",or).call(this,n)}).catch(n=>{T(this,qe,"f")===e&&(Q(this,Te,rl(n),"f"),T(this,G,"f").promise.catch(()=>{}),T(this,G,"f").reject(n),T(this,re,"m",pt).call(this))}))},or=function(e){e!==T(this,ke,"f")&&(Q(this,Te,void 0,"f"),Q(this,ke,e,"f"),T(this,G,"f").isSettled()&&Q(this,G,Pt(),"f"),T(this,G,"f").resolve(e),T(this,re,"m",pt).call(this))};class zi{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=Ri}}function Li(t){return new zi(t)}function Bi(t,e){return`${t}-${tl(e)}`}function yl(t,e){return e?st(e,n=>se(`--${Bi(t,String(n))}`)):{}}function vl(t,e){return t?st(t,(n,r)=>{const s=e[n];return se(`var(${s}, ${r})`)}):{}}class wl extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ki(){return t=>{var e;return e=class extends wl{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function en(){return Ki()}function bl(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ki()(n);return e[n]=r,e},{}):{}}function Ps(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function ks(t,e){const n=t;function r(i,o){e&&Ps(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Ps(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function _l(t,e){return e?st(e,n=>Bi(t,String(n))):{}}function xl({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:st(t,(r,s)=>se(`:host(.${s})`)),hostClassNames:st(t,(r,s)=>se(s)),cssVarNames:e,cssVarValues:n}}function Sl({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Re(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function $l(t,e){function n(s){Re(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function Yr(t){var e;const n=bl(t.events),r=_l(t.tagName,t.hostClasses),s=yl(t.tagName,t.cssVars),i=vl(t.cssVars,s),o={...ul,...t.options},a=typeof t.styles=="function"?t.styles(xl({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Ai``,l=t.renderCallback,u=(e=class extends Ct{createRenderParams(){return $l(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Di(this)&&!this.haveInputsBeenSet&&!o[Wr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${Gr.name}" directive on it. If no inputs are intended, use "${Yr.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const d=t.renderCallback(c);return Sl({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),d}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Re(c).forEach(d=>{Cs()(this,d),this.instanceInputs[d]=c[d]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=pl(t.stateInit),this.instanceInputs=ks(this,!1),this.instanceState=ks(this,!0);const c=t.stateInit||{};Re(c).forEach(d=>{Cs()(this,d);const h=this.asyncStateHandlerMap[d];h?(this.instanceState[d]=h.getValue(),h.addSettleListener(()=>{this[d]=h.getValue()})):this.instanceState[d]=c[d]}),this.definition=u}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(u,{[rr]:{value:!0,writable:!1},name:{value:el(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof u,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,u),u}function Ii(){return t=>Yr({...t,options:{[Wr]:!1},...t.options})}function gt(t,e){return El(t,e)}const El=Vr(class extends Jr{constructor(t){super(t),this.element=Mi(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),we}}),Ts="onDomCreated",Os=Vr(class extends Jr{constructor(t){super(t),sr(t,Ts)}update(t,[e]){sr(t,Ts);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function ar(t,e,n,r){return t instanceof Error?r?r(t):qr(t):ll(t)?e:n?n(t):t}function Al(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Ii()(s(i))),defineElementNoInputs:i=>(r(i),Yr(s(i)))}}function Cl(t,e){return t.filter((n,r)=>!e.includes(r))}function Hi(t){return t.filter(e=>il(e,["tagName",rr])&&!!e.tagName&&!!e[rr])}const Fi=new WeakMap;function Pl(t,e){var n;const r=Hi(e);return(n=Ui(Fi,[t,...r]).value)===null||n===void 0?void 0:n.template}function kl(t,e,n){const r=Hi(e);return Wi(Fi,[t,...r],n)}function Ui(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=qi(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Ui(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function qi(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Wi(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=qi(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const u=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=u),Wi(u,e,n,r+1)}function Vi(t,e,n){return{name:t,check:e,transform:n}}const Tl=new WeakMap;function Ji(t,e,n){const r=Pl(t,e),s=r??n();if(!r){const o=kl(t,e,s);if(o.result)Tl.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Cl(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function Gi(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,u)=>{var c;const d=s.length-1,h=s[d],f=u-1,y=e[f];let m;r&&r(l),typeof h=="string"&&(m=(c=n.find(p=>p.check(h,l,y)))===null||c===void 0?void 0:c.transform,m&&(s[d]=h+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[u];m?i[d]=i[d]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Yi(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Ol=[Vi("tag name css selector interpolation",(t,e,n)=>Yi(n),t=>t.tagName)];function Nl(t,e){return Gi(t,e,Ol)}function Je(t,...e){const n=Ji(t,e,()=>Nl(t,e));return Ai(n.strings,...n.values)}const jl=[Vi("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Yi(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function Ml(t){}function Dl(t){return Gi(t.strings,t.values,jl,Ml)}function F(t,...e){const n=Ka(t,...e),r=Ji(t,e,()=>Dl(n));return{...n,strings:r.strings,values:r.values}}function Rl(t,e){return t<e}function zl(t,e){return t>e}const Ns={width:250,height:250};function Ll({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?zl:Rl)(e.width/e.height,t.width/t.height)?"width":"height"}function Fn({box:t,constraint:e,constraintType:n}){const r=Ll({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Qi({box:t,ratio:e}){return Kr(t,(n,r)=>r*e)}function lr({box:t,min:e,max:n}){return Kr(t,(r,s)=>di({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Xi({min:t,max:e,box:n}){const r=Zi({min:t,max:e,box:n}),s=Qi({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||Ns.height),width:Math.floor(s.width||(t==null?void 0:t.width)||Ns.width)}}function Zi({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Fn({box:n,constraint:t,constraintType:"min"}):1,s=e?Fn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Qi({ratio:i,box:n});return(t?Fn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function Oe(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=Bl(o,r[a]);return`${o}${l}`});return Sn(i.join(""))}function Bl(t,e){return e._$litType$!=null||e._$litDirective$!=null?Oe(e):Array.isArray(e)?e.map(r=>Oe(r)).join(""):t.endsWith("=")?`"${e}"`:e}function Kl(t){const e=Il(t);return $t(e,"object")||$t(e,"array")}function Il(t){const e=er({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=Hl(t);return er({jsonString:n,errorHandler:()=>{}})}function Hl(t){return Sn(t).replace(/,\s*([}\]])/,"$1")}var k=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(k||{});const Fl=["text","json"];function js(t){return Fl.includes(t)}async function Ul(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":Kl(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function ql({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Oe(F`
            <img src=${n} />
        `):t==="video"?Oe(F`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Oe(F`
                <div class="text-wrapper">
                    <p class="text">
                        ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):t==="audio"?Oe(F`
                <audio controls src=${n}></audio>
            `):e}function Wl(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}return t}async function Ms(t,e){var l;let n;try{n=await fetch(t)}catch{}const r=((l=n==null?void 0:n.headers.get("Content-Type"))==null?void 0:l.toLowerCase())??"",s=await(n==null?void 0:n.text())??"",i=n?await Ul(r,s):"image",o=Wl(s??"",i);return{templateString:ql({imageText:o,imageType:i,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:i}}var Ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vl(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var fn={},Tn={},Rt={},zt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnyOrigin=t.MessageDirectionEnum=void 0,function(e){e.FromParent="from-parent",e.FromChild="from-child"}(t.MessageDirectionEnum||(t.MessageDirectionEnum={})),t.AnyOrigin=Symbol("any-origin")})(zt);Object.defineProperty(Rt,"__esModule",{value:!0});Rt.assertAllowedOrigin=void 0;const Jl=zt;function Gl(t,e){if(t===Jl.AnyOrigin)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}`)}Rt.assertAllowedOrigin=Gl;var On={};Object.defineProperty(On,"__esModule",{value:!0});On.dangerDisableSecurityWarningsSymbol=void 0;On.dangerDisableSecurityWarningsSymbol=Symbol("dangerDisableSecurityWarningsSymbol");var Nn={};const Yl=Vl(Ma);Object.defineProperty(Nn,"__esModule",{value:!0});Nn.sendPingPongMessage=void 0;const Ds=Yl,Ql=Rt,Un=zt;function Xl(t,e,n){return n.type===t&&n.direction===e}function Zl(t){return Math.min(Math.floor(Math.pow(t,3)),5e3)}async function ec({message:t,verifyChildData:e,iframeElement:n},r,s){if(!n)throw new Error("No iframe element was provided.");let i=0,o=!1,a,l,u,c=!1;const d={...t,direction:Un.MessageDirectionEnum.FromParent},h=t.type;function f(p){try{(0,Ql.assertAllowedOrigin)(r,p);const g=p.data;if(g.direction!==Un.MessageDirectionEnum.FromChild)return;if(g.type==="error")throw new Error(`Child threw an error: ${g.data}`);if(g&&c&&Xl(h,Un.MessageDirectionEnum.FromChild,g)){let w=!1;try{w=e?e(g.data):!0}catch{}if(!w)return;o=!0,l=p,a=g}}catch(g){u=(0,Ds.ensureError)(g)}}let y;const m=Date.now();for(;!o&&i<s&&!u;){const p=n.contentWindow;p&&(y==null||y.removeEventListener("message",f),p.addEventListener("message",f),p!==y&&(y=p),c=!0,p.postMessage(d)),await(0,Ds.wait)(Zl(i)),i++}const v=Date.now()-m;if(y==null||y.removeEventListener("message",f),u)throw u;if(!o)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${s}' tries ('${Math.floor(v/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but ");return{data:a==null?void 0:a.data,event:l}}Nn.sendPingPongMessage=ec;Object.defineProperty(Tn,"__esModule",{value:!0});Tn.createIframeMessenger=void 0;const tc=Rt,nc=On,Ae=zt,rc=Nn;function eo({allowedOrigins:t,maxAttemptCount:e=10,...n}){if(t!==Ae.AnyOrigin&&t.includes("*")&&(t=Ae.AnyOrigin),t===Ae.AnyOrigin&&!n[nc.dangerDisableSecurityWarningsSymbol]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==Ae.AnyOrigin&&!t.length)throw new Error(`No allowed origins were provide to ${eo.name}. At least one must be provided.`);return{async sendMessageToChild(r){if(r.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await(0,rc.sendPingPongMessage)(r,t,r.maxAttemptCount||e)},listenForParentMessages(r){globalThis.addEventListener("message",async s=>{(0,tc.assertAllowedOrigin)(t,s);const i=s.data;if(i.direction!==Ae.MessageDirectionEnum.FromParent)return;const o=await r({...i,originalEvent:s}),a={type:i.type,direction:Ae.MessageDirectionEnum.FromChild,data:o};t===Ae.AnyOrigin?globalThis.postMessage(a):t.forEach(l=>{globalThis.postMessage(a,{targetOrigin:l})})})}}}Tn.createIframeMessenger=eo;var to={};Object.defineProperty(to,"__esModule",{value:!0});(function(t){var e=Ft&&Ft.__createBinding||(Object.create?function(r,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,o,a)}:function(r,s,i,o){o===void 0&&(o=i),r[o]=s[i]}),n=Ft&&Ft.__exportStar||function(r,s){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&e(s,r,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(Tn,t),n(to,t),n(zt,t)})(fn);var I=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(I||{});const ce=fn.createIframeMessenger({allowedOrigins:[window.location.origin]});var Z=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Z||{});async function sc(t){const e=Pn();t.onload=()=>{e.resolve()};try{await ce.sendMessageToChild({message:{type:I.Ready},iframeElement:t})}catch{await e.promise,await ce.sendMessageToChild({message:{type:I.Ready},iframeElement:t})}}async function ic({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){var l;await sc(r),i&&await ce.sendMessageToChild({message:{type:I.ForceSize,data:i},iframeElement:r});const a=o??(await ce.sendMessageToChild({message:{type:I.SendSize},iframeElement:r,verifyChildData(u){return!isNaN(u.width)&&!isNaN(u.height)&&!!u.width&&!!u.height}})).data;return await no({min:t,max:e,imageDimensions:a,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0}),((l=r.contentWindow)==null?void 0:l.document.documentElement.outerHTML)??""}async function no({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:a}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const u={min:t,max:e,box:o??n},c=js(i.imageType)?lr(u):Xi(u);l.style.width=ee(Math.floor(c.width)),l.style.height=ee(Math.floor(c.height));const d=lr({min:t,max:e,box:c});c.height<d.height?r.classList.add(Z.VerticallyCenter):r.classList.remove(Z.VerticallyCenter),r.style.width=ee(d.width),r.style.height=ee(d.height);const h=Zi({min:t,max:e,box:o??n});if(a){if(h>3?await ce.sendMessageToChild({message:{type:I.SendScalingMethod,data:"pixelated"},iframeElement:s}):await ce.sendMessageToChild({message:{type:I.SendScalingMethod,data:"default"},iframeElement:s}),await ce.sendMessageToChild({message:{type:I.SizeDetermined,data:c},iframeElement:s}),i.imageType===k.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},y={width:h*f.width,height:h*f.height};await ce.sendMessageToChild({message:{type:I.SendScale,data:y},iframeElement:s})}else if(js(i.imageType)){const f=o??n;if(f.height<c.height){const y=c.width/f.width,m=c.height/f.height,v=Math.min(y,m);await ce.sendMessageToChild({message:{type:I.SendScale,data:{height:v,width:v}},iframeElement:s})}}}}const Ut={x:16,y:8};var Rs=Object.freeze,oc=Object.defineProperty,zs=(t,e)=>Rs(oc(t,"raw",{value:Rs(e||t.slice())})),Ls,Bs;function ac(t,e,n){const r=Math.random(),s=F(Ls||(Ls=zs([`
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
    `])),t.imageType,n??"",k.Svg,k.Html,k.Image,k.Video,k.Text,k.Json,k.Audio,fn.MessageDirectionEnum.FromChild,fn.MessageDirectionEnum.FromChild,I.Ready,I.SendScale,I.SendScalingMethod,I.SendSize,I.ForceSize,I.SizeDetermined,k.Json,k.Text,Ut.y,k.Audio),i=F(Bs||(Bs=zs([`
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
    `])),t.imageType,k.Image,k.Svg,k.Video,k.Text,k.Json,k.Text,k.Json,k.Text,k.Json,k.Text,k.Json,Ut.y,Ut.x,k.Text,k.Json,Ut.y,r,e??"",s);return Sn(Oe(i)).replace(String(r),`
${t.templateString}
`)}const lc={imageData:Li()},Ks=F`
    <div class="click-cover"></div>
`,qn="latest-frame-srcdoc",yt=Ii()({tagName:"vir-resizable-image",stateInit:lc,events:{settled:en(),imageDataCalculated:en(),errored:en()},styles:Je`
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[qn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(Z.HideLoading),s(new i.settled(!1)),r.classList.remove(Z.VerticallyCenter);try{return Ms(e.imageUrl,!!e.blockAutoPlay)}catch{await Dt(1e3);try{return Ms(e.imageUrl,!!e.blockAutoPlay)}catch(y){throw s(new i.errored(St(y))),y}}},trigger:{...Cn(e,f=>f!=="extraHtml")}}});const o=e.min&&e.max?lr({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?Xi({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,u=ar(t.imageData,"",f=>(s(new i.imageDataCalculated(f)),f.imageType===k.Pdf?F`
                        <iframe
                            src=${f.imageUrl}
                            ${Os(async y=>{try{await no({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:y,imageData:f,imageDimensions:a??{width:500,height:500},max:a,min:o,sendSizeMessage:!1}),r[qn]="",s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                    `:F`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${ac(f,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${Os(async y=>{try{const m=await ic({min:o,max:a,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});r[qn]=m,s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),f=>(s(new i.errored(St(f))),F`
                    <div class="error-wrapper">
                        <slot name="error">${Se(f)}</slot>
                    </div>
                `)),c=ar(t.imageData,Ks,f=>!e.blockInteraction&&[k.Html,k.Video,k.Audio,k.Pdf].includes(f.imageType)?"":Ks,()=>""),d=t.imageData instanceof Error?Je`
                      max-width: 100%;
                      max-height: 100%;
                  `:l?Je`
                      width: ${l.width}px;
                      height: ${l.height}px;
                  `:"",h=Je`
            width: ${(o==null?void 0:o.width)??250}px;
            height: ${(o==null?void 0:o.height)??250}px;
        `;return F`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="min-size" style=${h}>
                <div class="frame-constraint" style=${d}>${u}</div>
            </div>
            ${c}
        `}}),j=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,z=Object.keys,U=Array.isArray;function V(t,e){return typeof e!="object"||z(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||j.Promise||(j.Promise=Promise);const kt=Object.getPrototypeOf,cc={}.hasOwnProperty;function X(t,e){return cc.call(t,e)}function it(t,e){typeof e=="function"&&(e=e(kt(t))),(typeof Reflect>"u"?z:Reflect.ownKeys)(e).forEach(n=>{he(t,n,e[n])})}const ro=Object.defineProperty;function he(t,e,n,r){ro(t,e,V(n&&X(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ye(t){return{from:function(e){return t.prototype=Object.create(e.prototype),he(t.prototype,"constructor",t),{extend:it.bind(null,t.prototype)}}}}const uc=Object.getOwnPropertyDescriptor;function Qr(t,e){let n;return uc(t,e)||(n=kt(t))&&Qr(n,e)}const dc=[].slice;function mn(t,e,n){return dc.call(t,e,n)}function so(t,e){return e(t)}function ht(t){if(!t)throw new Error("Assertion Failed")}function io(t){j.setImmediate?setImmediate(t):setTimeout(t,0)}function oo(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function fe(t,e){if(X(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=fe(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:fe(a,e.substr(o+1))}}function te(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){ht(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)te(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?U(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&X(t,o)||(l=t[o]={}),te(l,a,n)}}else n===void 0?U(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ao(t){var e={};for(var n in t)X(t,n)&&(e[n]=t[n]);return e}const hc=[].concat;function lo(t){return hc.apply([],t)}const co="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(lo([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>j[t]),fc=co.map(t=>j[t]);oo(co,t=>[t,!0]);let ge=null;function Lt(t){ge=typeof WeakMap<"u"&&new WeakMap;const e=cr(t);return ge=null,e}function cr(t){if(!t||typeof t!="object")return t;let e=ge&&ge.get(t);if(e)return e;if(U(t)){e=[],ge&&ge.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(cr(t[n]))}else if(fc.indexOf(t.constructor)>=0)e=t;else{const i=kt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),ge&&ge.set(t,e),t)X(t,s)&&(e[s]=cr(t[s]))}return e}const{toString:mc}={};function ur(t){return mc.call(t).slice(8,-1)}const dr=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pc=typeof dr=="symbol"?function(t){var e;return t!=null&&(e=t[dr])&&e.apply(t)}:function(){return null},We={};function ue(t){var e,n,r,s;if(arguments.length===1){if(U(t))return t.slice();if(this===We&&typeof t=="string")return[t];if(s=pc(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const Xr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function uo(t,e){oe=t,ho=e}var ho=()=>!0;const gc=!new Error("").stack;function Be(){if(gc)try{throw Be.arguments,new Error}catch(t){return t}return new Error}function hr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(ho).map(r=>`
`+r).join("")):""}var fo=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Zr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(fo),yc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Qe(t,e){this._e=Be(),this.name=t,this.message=e}function mo(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function pn(t,e,n,r){this._e=Be(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=mo(t,e)}function vt(t,e){this._e=Be(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=mo(t,e)}Ye(Qe).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+hr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ye(pn).from(Qe),Ye(vt).from(Qe);var es=Zr.reduce((t,e)=>(t[e]=e+"Error",t),{});const vc=Qe;var C=Zr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Be(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=yc[e]||n,this.inner=null)}return Ye(r).from(vc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Is=fo.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),tn=Zr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function O(){}function Tt(t){return t}function wc(t,e){return t==null||t===Tt?e:function(n){return e(t(n))}}function ze(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function bc(t,e){return t===O?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?ze(r,this.onsuccess):r),s&&(this.onerror=this.onerror?ze(s,this.onerror):s),i!==void 0?i:n}}function _c(t,e){return t===O?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?ze(n,this.onsuccess):n),r&&(this.onerror=this.onerror?ze(r,this.onerror):r)}}function xc(t,e){return t===O?e:function(n){var r=t.apply(this,arguments);V(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?ze(s,this.onsuccess):s),i&&(this.onerror=this.onerror?ze(i,this.onerror):i),r===void 0?o===void 0?void 0:o:V(r,o)}}function Sc(t,e){return t===O?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ts(t,e){return t===O?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}tn.ModifyError=pn,tn.DexieError=Qe,tn.BulkError=vt;var Ot={};const[fr,gn,mr]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,kt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,kt(e),t]})(),po=gn&&gn.then,nn=fr&&fr.constructor,ns=!!mr;var pr=!1,$c=mr?()=>{mr.then(qt)}:j.setImmediate?setImmediate.bind(null,qt):j.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{qt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(qt,0)},wt=function(t,e){ft.push([t,e]),yn&&($c(),yn=!1)},gr=!0,yn=!0,je=[],rn=[],yr=null,vr=Tt,Xe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Fs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Fs(t[0],t[1])}catch{}})}},A=Xe,ft=[],Me=0,sn=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=O,this._lib=!1;var e=this._PSD=A;if(oe&&(this._stackHolder=Be(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Ot)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&br(this,this._value))}this._state=null,this._value=null,++e.ref,yo(this,t)}const wr={get:function(){var t=A,e=vn;function n(r,s){var i=!t.global&&(t!==A||e!==vn);const o=i&&!me();var a=new S((l,u)=>{rs(this,new go(wn(r,t,i,o),wn(s,t,i,o),l,u,t))});return oe&&bo(a,this),a}return n.prototype=Ot,n},set:function(t){he(this,"then",t&&t.prototype===Ot?wr:{get:function(){return t},set:wr.set})}};function go(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function yo(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Bt();n&&typeof n.then=="function"?yo(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,vo(t)),r&&Kt()}},br.bind(null,t))}catch(n){br(t,n)}}function br(t,e){if(rn.push(e),t._state===null){var n=t._lib&&Bt();e=vr(e),t._state=!1,t._value=e,oe&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=Qr(e,"stack");e._promise=t,he(e,"stack",{get:()=>pr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){je.some(s=>s._value===r._value)||je.push(r)}(t),vo(t),n&&Kt()}}function vo(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)rs(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Me===0&&(++Me,wt(()=>{--Me==0&&ss()},[]))}function rs(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Me,wt(Ec,[n,t,e])}else t._listeners.push(e)}function Ec(t,e,n){try{yr=e;var r,s=e._value;e._state?r=t(s):(rn.length&&(rn=[]),r=t(s),rn.indexOf(s)===-1&&function(i){for(var o=je.length;o;)if(je[--o]._value===i._value)return void je.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{yr=null,--Me==0&&ss(),--n.psd.ref||n.psd.finalize()}}function wo(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=hr(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return oe&&((r=hr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&wo(t._prev,e,n)),e}function bo(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function qt(){Bt()&&Kt()}function Bt(){var t=gr;return gr=!1,yn=!1,t}function Kt(){var t,e,n;do for(;ft.length>0;)for(t=ft,ft=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(ft.length>0);gr=!0,yn=!0}function ss(){var t=je;je=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=sn.slice(0),n=e.length;n;)e[--n]()}function Wt(t){return new S(Ot,!1,t)}function M(t,e){var n=A;return function(){var r=Bt(),s=A;try{return _e(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{_e(s,!1),r&&Kt()}}}it(S.prototype,{then:wr,_then:function(t,e){rs(this,new go(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Wt(r)):this.then(null,r=>r&&r.name===e?n(r):Wt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Wt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{pr=!0;var t=wo(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{pr=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&he(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Xe.env=_o(),it(S,{all:function(){var t=ue.apply(null,arguments).map(Vt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(Ot,!0,t);return bo(e,yr),e},reject:Wt,race:function(){var t=ue.apply(null,arguments).map(Vt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>vn},newPSD:be,usePSD:at,scheduler:{get:()=>wt,set:t=>{wt=t}},rejectionMapper:{get:()=>vr,set:t=>{vr=t}},follow:(t,e)=>new S((n,r)=>be((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=ze(function(){(function(a){function l(){a(),sn.splice(sn.indexOf(l),1)}sn.push(l),++Me,wt(()=>{--Me==0&&ss()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),nn&&(nn.allSettled&&he(S,"allSettled",function(){const t=ue.apply(null,arguments).map(Vt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),nn.any&&typeof AggregateError<"u"&&he(S,"any",function(){const t=ue.apply(null,arguments).map(Vt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const H={awaits:0,echoes:0,id:0};var Ac=0,on=[],Wn=0,vn=0,Cc=0;function be(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++Cc;var o=Xe.env;i.env=ns?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:Hs(o.nthen,i),gthen:Hs(o.gthen,i)}:{},e&&V(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=at(i,t,n,r);return i.ref===0&&i.finalize(),a}function ot(){return H.id||(H.id=++Ac),++H.awaits,H.echoes+=100,H.id}function me(){return!!H.awaits&&(--H.awaits==0&&(H.id=0),H.echoes=100*H.awaits,!0)}function Vt(t){return H.echoes&&t&&t.constructor===nn?(ot(),t.then(e=>(me(),e),e=>(me(),L(e)))):t}function Pc(t){++vn,H.echoes&&--H.echoes!=0||(H.echoes=H.id=0),on.push(A),_e(t,!0)}function kc(){var t=on[on.length-1];on.pop(),_e(t,!1)}function _e(t,e){var n=A;if((e?!H.echoes||Wn++&&t===A:!Wn||--Wn&&t===A)||xo(e?Pc.bind(null,t):kc),t!==A&&(A=t,n===Xe&&(Xe.env=_o()),ns)){var r=Xe.env.Promise,s=t.env;gn.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(j,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function _o(){var t=j.Promise;return ns?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(j,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:gn.then,gthen:t.prototype.then}:{}}function at(t,e,n,r,s){var i=A;try{return _e(t,!0),e(n,r,s)}finally{_e(i,!1)}}function xo(t){po.call(fr,t)}function wn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&ot(),_e(e,!0);try{return t.apply(this,arguments)}finally{_e(s,!1),r&&xo(me)}}}function Hs(t,e){return function(n,r){return t.call(this,wn(n,e),wn(r,e))}}(""+po).indexOf("[native code]")===-1&&(ot=me=O);function Fs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(j.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),V(r,s)):j.CustomEvent&&V(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&j.dispatchEvent&&(dispatchEvent(r),!j.PromiseRejectionEvent&&j.onunhandledrejection))try{j.onunhandledrejection(r)}catch{}oe&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var L=S.reject;function _r(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===es.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>_r(t,e,n,r))):L(i)}return s._promise(e,(i,o)=>be(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return L(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return L(new C.DatabaseClosed);t.open().catch(O)}return t._state.dbReadyPromise.then(()=>_r(t,e,n,r))}const Ne=String.fromCharCode(65535),ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",bt=[],jn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),Tc=jn,Oc=jn,So=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Le(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const $o={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Jt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Lt(e))[t],e)}class Nc{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,u,c){if(!c.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(c.idbtrans,c)}const a=Bt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):be(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):_r(this.db,e,[this.name],o)}finally{a&&Kt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(U(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=z(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)&&u.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==Ne)return this.where(r.name).equals(r.keyPath.map(u=>e[u]));!r&&oe&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(u,c){try{return i.cmp(u,c)===0}catch{return!1}}const[a,l]=n.reduce(([u,c],d)=>{const h=s[d],f=e[d];return[u||h,u||!h?Le(c,h&&h.multi?y=>{const m=fe(y,d);return U(m)&&m.some(v=>o(f,v))}:y=>o(f,fe(y,d))):c]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,U(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(X(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){V(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Jt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||U(e))return this.where(":id").equals(e).modify(n);{const r=fe(e,this.schema.primKey.keyPath);if(r===void 0)return L(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?z(n).forEach(s=>{te(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Jt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:$o})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&a?e.map(Jt(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new vt(`${this.name}.bulkAdd(): ${d} of ${u} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&a?e.map(Jt(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new vt(`${this.name}.bulkPut(): ${d} of ${u} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new vt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function _t(t){var e={},n=function(a,l){if(l){for(var u=arguments.length,c=new Array(u-1);--u;)c[u-1]=arguments[u];return e[a].subscribe.apply(null,c),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,u){if(typeof a=="object")return o(a);l||(l=Sc),u||(u=O);var c={subscribers:[],fire:u,subscribe:function(d){c.subscribers.indexOf(d)===-1&&(c.subscribers.push(d),c.fire=l(c.fire,d))},unsubscribe:function(d){c.subscribers=c.subscribers.filter(function(h){return h!==d}),c.fire=c.subscribers.reduce(l,u)}};return e[a]=n[a]=c,c}function o(a){z(a).forEach(function(l){var u=a[l];if(U(u))i(l,a[l][0],a[l][1]);else{if(u!=="asap")throw new C.InvalidArgument("Invalid event config");var c=i(l,Tt,function(){for(var d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];c.subscribers.forEach(function(f){io(function(){f.apply(null,h)})})})}})}}function ut(t,e){return Ye(e).from({prototype:t}),e}function He(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Vn(t,e){t.filter=Le(t.filter,e)}function Jn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Le(r(),e()):e,t.justLimit=n&&!r}function an(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Us(t,e,n){const r=an(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Gt(t,e,n,r){const s=t.replayFilter?Le(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,u)=>{if(!s||s(l,u,h=>l.stop(h),h=>l.fail(h))){var c=l.primaryKey,d=""+c;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(c)),X(i,d)||(i[d]=!0,e(a,l,u))}};return Promise.all([t.or._iterate(o,n),qs(Us(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return qs(Us(t,r,n),Le(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function qs(t,e,n,r){var s=M(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=O},a=>{i.fail(a),o=O})||s(i.value,i,a=>o=a),o()})})}function W(t,e){try{const n=Ws(t),r=Ws(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let u=0;u<l;++u)if(s[u]!==i[u])return s[u]<i[u]?-1:1;return o===a?0:o<a?-1:1}(Vs(t),Vs(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let u=0;u<l;++u){const c=W(s[u],i[u]);if(c!==0)return c}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function Ws(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=ur(t);return n==="ArrayBuffer"?"binary":n}function Vs(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class jc{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,L.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,L.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Le(n.algorithm,e)}_iterate(e,n){return Gt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&V(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Gt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(He(r,!0))return s.count({trans:n,query:{index:an(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return Gt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[s]}var a=this._ctx.dir==="next"?1:-1;function l(u,c){var d=o(u,i),h=o(c,i);return d<h?-a:d>h?a:0}return this.toArray(function(u){return u.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&He(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=an(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Gt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,He(n)?Jn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Jn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Jn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Vn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Vn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Le(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&He(n,!0)&&n.limit>0)return this._read(s=>{var i=an(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Vn(this._ctx,function(s){var i=s.primaryKey.toString(),o=X(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=z(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var g=i[p],w=e[g];fe(m,g)!==w&&(te(m,g,w),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:u}=a.schema.primaryKey,c=this.db._options.modifyChunkSize||200,d=[];let h=0;const f=[],y=(m,v)=>{const{failures:p,numFailures:g}=v;h+=m-g;for(let w of z(p))d.push(p[w])};return this.clone().primaryKeys().then(m=>{const v=p=>{const g=Math.min(c,m.length-p);return a.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(w=>{const E=[],x=[],b=l?[]:null,_=[];for(let $=0;$<g;++$){const N=w[$],D={value:Lt(N),primKey:m[p+$]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(m[p+$]):l||W(u(N),u(D.value))===0?(x.push(D.value),l&&b.push(m[p+$])):(_.push(m[p+$]),E.push(D.value)))}const P=He(n)&&n.limit===1/0&&(typeof e!="function"||e===Gn)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let N in $.failures)_.splice(parseInt(N),1);y(E.length,$)})).then(()=>(x.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:b,values:x,criteria:P,changeSpec:typeof e!="function"&&e}).then($=>y(x.length,$))).then(()=>(_.length>0||P&&e===Gn)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then($=>y(_.length,$))).then(()=>m.length>p+g&&v(p+c))})};return v(0).then(()=>{if(d.length>0)throw new pn("Error modifying one or more objects",d,h,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return He(e)&&(e.isPrimKey&&!Oc||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:u,numFailures:c})=>{if(c)throw new pn("Could not delete some values",Object.keys(a).map(d=>a[d]),o-c);return o-c}))}):this.modify(Gn)}}const Gn=(t,e)=>e.value=null;function Mc(t,e){return t<e?-1:t===e?0:1}function Dc(t,e){return t>e?-1:t===e?0:1}function Y(t,e,n){var r=t instanceof Ao?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Fe(t){return new t.Collection(t,()=>Eo("")).limit(0)}function Rc(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var u=e[l];if(u!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],u)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function Yt(t,e,n,r){var s,i,o,a,l,u,c,d=n.length;if(!n.every(m=>typeof m=="string"))return Y(t,"String expected.");function h(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?Mc:Dc;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});a=v.map(function(p){return p.upper}),l=v.map(function(p){return p.lower}),u=m,c=m==="next"?"":r}h("next");var f=new t.Collection(t,()=>pe(a[0],l[d-1]+r));f._ondirectionchange=function(m){h(m)};var y=0;return f._addAlgorithm(function(m,v,p){var g=m.key;if(typeof g!="string")return!1;var w=i(g);if(e(w,l,y))return!0;for(var E=null,x=y;x<d;++x){var b=Rc(g,w,a[x],l[x],o,u);b===null&&E===null?y=x+1:(E===null||o(E,b)>0)&&(E=b)}return v(E!==null?function(){m.continue(E+c)}:p),!1}),f}function pe(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function Eo(t){return{type:1,lower:t,upper:t}}class Ao{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?Fe(this):new this.Collection(this,()=>pe(e,n,!r,!s))}catch{return Y(this,ae)}}equals(e){return e==null?Y(this,ae):new this.Collection(this,()=>Eo(e))}above(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(e,void 0,!0))}aboveOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(e,void 0,!1))}below(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(void 0,e,!1,!0))}belowOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(void 0,e))}startsWith(e){return typeof e!="string"?Y(this,"String expected."):this.between(e,e+Ne,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Yt(this,(n,r)=>n.indexOf(r[0])===0,[e],Ne)}equalsIgnoreCase(e){return Yt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ue.apply(We,arguments);return e.length===0?Fe(this):Yt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ue.apply(We,arguments);return e.length===0?Fe(this):Yt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Ne)}anyOf(){const e=ue.apply(We,arguments);let n=this._cmp;try{e.sort(n)}catch{return Y(this,ae)}if(e.length===0)return Fe(this);const r=new this.Collection(this,()=>pe(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ue.apply(We,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Y(this,ae)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return Fe(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return Y(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,d=s;function h(g,w){return d(g[0],w[0])}try{c=e.reduce(function(g,w){let E=0,x=g.length;for(;E<x;++E){const b=g[E];if(r(w[0],b[1])<0&&r(w[1],b[0])>0){b[0]=o(b[0],w[0]),b[1]=a(b[1],w[1]);break}}return E===x&&g.push(w),g},[]),c.sort(h)}catch{return Y(this,ae)}let f=0;const y=u?g=>s(g,c[f][1])>0:g=>s(g,c[f][1])>=0,m=l?g=>i(g,c[f][0])>0:g=>i(g,c[f][0])>=0;let v=y;const p=new this.Collection(this,()=>pe(c[0][0],c[c.length-1][1],!l,!u));return p._ondirectionchange=g=>{g==="next"?(v=y,d=s):(v=m,d=i),c.sort(h)},p._addAlgorithm((g,w,E)=>{for(var x=g.key;v(x);)if(++f,f===c.length)return w(E),!1;return!!function(b){return!y(b)&&!m(b)}(x)||(this._cmp(x,c[f][1])===0||this._cmp(x,c[f][0])===0||w(()=>{d===s?g.continue(c[f][0]):g.continue(c[f][1])}),!1)}),p}startsWithAnyOf(){const e=ue.apply(We,arguments);return e.every(n=>typeof n=="string")?e.length===0?Fe(this):this.inAnyRange(e.map(n=>[n,n+Ne])):Y(this,"startsWithAnyOf() only works with strings")}}function ne(t){return M(function(e){return Nt(e),t(e.target.error),!1})}function Nt(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const xe=_t(null,"storagemutated");class zc{_lock(){return ht(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(ht(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{at(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(ht(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return ht(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=M(s=>{Nt(s),this._reject(e.error)}),e.onabort=M(s=>{Nt(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=M(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&xe.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return L(new C.ReadOnly("Transaction is readonly"));if(!this.active)return L(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return be(()=>{var i=new S((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,a)=>{r.then(l=>n._waitingQueue.push(M(o.bind(null,l))),l=>n._waitingQueue.push(M(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(X(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function xr(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Co(e)}}function Co(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Po(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:oo(n,r=>[r.name,r])}}let jt=t=>{try{return t.only([[]]),jt=()=>[[]],[[]]}catch{return jt=()=>Ne,Ne}};function Sr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>fe(n,e)}(t):e=>fe(e,t)}function Js(t){return[].slice.call(t)}let Lc=0;function xt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function Bc(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:d,upperOpen:h}=l;return u===void 0?c===void 0?null:e.upperBound(c,!!h):c===void 0?e.lowerBound(u,!!d):e.bound(u,c,!!d,!!h)}const{schema:s,hasGetAll:i}=function(l,u){const c=Js(l.objectStoreNames);return{schema:{name:l.name,tables:c.map(d=>u.objectStore(d)).map(d=>{const{keyPath:h,autoIncrement:f}=d,y=U(h),m=h==null,v={},p={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:h,autoIncrement:f,unique:!0,extractKey:Sr(h)},indexes:Js(d.indexNames).map(g=>d.index(g)).map(g=>{const{name:w,unique:E,multiEntry:x,keyPath:b}=g,_={name:w,compound:U(b),keyPath:b,unique:E,multiEntry:x,extractKey:Sr(b)};return v[xt(b)]=_,_}),getIndexByKeyPath:g=>v[xt(g)]};return v[":id"]=p.primaryKey,h!=null&&(v[xt(h)]=p.primaryKey),p})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:d,type:h,keys:f,values:y,range:m}){return new Promise((v,p)=>{v=M(v);const g=d.objectStore(c),w=g.keyPath==null,E=h==="put"||h==="add";if(!E&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:x}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let b;const _=[],P=[];let $=0;const N=q=>{++$,Nt(q)};if(h==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:P,results:[],lastResult:void 0});m.type===3?_.push(b=g.clear()):_.push(b=g.delete(r(m)))}else{const[q,K]=E?w?[y,f]:[y,null]:[f,null];if(E)for(let R=0;R<x;++R)_.push(b=K&&K[R]!==void 0?g[h](q[R],K[R]):g[h](q[R])),b.onerror=N;else for(let R=0;R<x;++R)_.push(b=g[h](q[R])),b.onerror=N}const D=q=>{const K=q.target.result;_.forEach((R,Ke)=>R.error!=null&&(P[Ke]=R.error)),v({numFailures:$,failures:P,results:h==="delete"?f:_.map(R=>R.result),lastResult:K})};b.onerror=q=>{N(q),D(q)},b.onsuccess=D})},getMany:({trans:d,keys:h})=>new Promise((f,y)=>{f=M(f);const m=d.objectStore(c),v=h.length,p=new Array(v);let g,w=0,E=0;const x=_=>{const P=_.target;p[P._pos]=P.result,++E===w&&f(p)},b=ne(y);for(let _=0;_<v;++_)h[_]!=null&&(g=m.get(h[_]),g._pos=_,g.onsuccess=x,g.onerror=b,++w);w===0&&f(p)}),get:({trans:d,key:h})=>new Promise((f,y)=>{f=M(f);const m=d.objectStore(c).get(h);m.onsuccess=v=>f(v.target.result),m.onerror=ne(y)}),query:function(d){return h=>new Promise((f,y)=>{f=M(f);const{trans:m,values:v,limit:p,query:g}=h,w=p===1/0?void 0:p,{index:E,range:x}=g,b=m.objectStore(c),_=E.isPrimaryKey?b:b.index(E.name),P=r(x);if(p===0)return f({result:[]});if(d){const $=v?_.getAll(P,w):_.getAllKeys(P,w);$.onsuccess=N=>f({result:N.target.result}),$.onerror=ne(y)}else{let $=0;const N=v||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),D=[];N.onsuccess=q=>{const K=N.result;return K?(D.push(v?K.value:K.primaryKey),++$===p?f({result:D}):void K.continue()):f({result:D})},N.onerror=ne(y)}})}(i),openCursor:function({trans:d,values:h,query:f,reverse:y,unique:m}){return new Promise((v,p)=>{v=M(v);const{index:g,range:w}=f,E=d.objectStore(c),x=g.isPrimaryKey?E:E.index(g.name),b=y?m?"prevunique":"prev":m?"nextunique":"next",_=h||!("openKeyCursor"in x)?x.openCursor(r(w),b):x.openKeyCursor(r(w),b);_.onerror=ne(p),_.onsuccess=M(P=>{const $=_.result;if(!$)return void v(null);$.___id=++Lc,$.done=!1;const N=$.continue.bind($);let D=$.continuePrimaryKey;D&&(D=D.bind($));const q=$.advance.bind($),K=()=>{throw new Error("Cursor not stopped")};$.trans=d,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=M(p),$.next=function(){let R=1;return this.start(()=>R--?this.continue():this.stop()).then(()=>this)},$.start=R=>{const Ke=new Promise((J,$e)=>{J=M(J),_.onerror=ne($e),$.fail=$e,$.stop=lt=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=K,J(lt)}}),Ie=()=>{if(_.result)try{R()}catch(J){$.fail(J)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=M(J=>{_.onsuccess=Ie,Ie()}),$.continue=N,$.continuePrimaryKey=D,$.advance=q,Ie(),Ke},v($)},p)})},count({query:d,trans:h}){const{index:f,range:y}=d;return new Promise((m,v)=>{const p=h.objectStore(c),g=f.isPrimaryKey?p:p.index(f.name),w=r(y),E=w?g.count(w):g.count();E.onsuccess=M(x=>m(x.target.result)),E.onerror=ne(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:jt(e),schema:s}}function $r({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(c,d){return d.reduce((h,{create:f})=>({...h,...f(h)}),c)}(Bc(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function bn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=Qr(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?he(o,s,{get(){return this.table(s)},set(l){ro(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function Er({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function Kc(t,e){return t._cfg.version-e._cfg.version}function Ic(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;be(()=>{A.trans=i,A.transless=a,e===0?(z(s).forEach(l=>{Yn(n,l,s[l].primKey,s[l].indexes)}),$r(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},u,c,d){const h=[],f=l._versions;let y=l._dbSchema=Cr(l,l.idbdb,d),m=!1;function v(){return h.length?S.resolve(h.shift()(c.idbtrans)).then(v):S.resolve()}return f.filter(p=>p._cfg.version>=u).forEach(p=>{h.push(()=>{const g=y,w=p._cfg.dbschema;Pr(l,g,d),Pr(l,w,d),y=l._dbSchema=w;const E=ko(g,w);E.add.forEach(b=>{Yn(d,b[0],b[1].primKey,b[1].indexes)}),E.change.forEach(b=>{if(b.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=d.objectStore(b.name);b.add.forEach(P=>Ar(_,P)),b.change.forEach(P=>{_.deleteIndex(P.name),Ar(_,P)}),b.del.forEach(P=>_.deleteIndex(P))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>u){$r(l,d),c._memoizedTables={},m=!0;let b=ao(w);E.del.forEach(N=>{b[N]=g[N]}),Er(l,[l.Transaction.prototype]),bn(l,[l.Transaction.prototype],z(b),b),c.schema=b;const _=Xr(x);let P;_&&ot();const $=S.follow(()=>{if(P=x(c),P&&_){var N=me.bind(null,null);P.then(N,N)}});return P&&typeof P.then=="function"?S.resolve(P):$.then(()=>P)}}),h.push(g=>{(!m||!Tc)&&function(w,E){[].slice.call(E.db.objectStoreNames).forEach(x=>w[x]==null&&E.db.deleteObjectStore(x))}(p._cfg.dbschema,g),Er(l,[l.Transaction.prototype]),bn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),c.schema=l._dbSchema})}),v().then(()=>{var p,g;g=d,z(p=y).forEach(w=>{g.db.objectStoreNames.contains(w)||Yn(g,w,p[w].primKey,p[w].indexes)})})}(t,e,i,n).catch(o)})}function ko(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!jn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let u;for(u in a)l[u]||o.del.push(u);for(u in l){const c=a[u],d=l[u];c?c.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function Yn(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>Ar(s,i)),s}function Ar(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Cr(t,e,n){const r={};return mn(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=xr(Co(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let c=0;c<i.indexNames.length;++c){const d=i.index(i.indexNames[c]);o=d.keyPath;var u=xr(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(u)}r[s]=Po(s,a,l)}),r}function Pr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],u=o.index(l).keyPath,c=typeof u=="string"?u:"["+mn(u).join("+")+"]";if(e[i]){const d=e[i].idxByName[c];d&&(d.name=l,delete e[i].idxByName[c],e[i].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&j.WorkerGlobalScope&&j instanceof j.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class Hc{_parseStoresSpec(e,n){z(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return xr(l,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),U(u),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Po(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?V(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{V(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,Er(n,[n._allTables,n,n.Transaction.prototype]),bn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],z(i),i),n._storeNames=z(i),this}upgrade(e){return this._cfg.contentUpgrade=ts(this._cfg.contentUpgrade||O,e),this}}function is(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new De("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function os(t){return t&&typeof t.databases=="function"}function kr(t){return be(function(){return A.letThrough=!0,t()})}function Fc(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function Uc(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?L(e.dbOpenError):t);oe&&(e.openCanceller._stackHolder=Be()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return S.race([r,(typeof navigator>"u"?S.resolve():Fc()).then(()=>new S((l,u)=>{if(s(),!n)throw new C.MissingAPI;const c=t.name,d=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!d)throw new C.MissingAPI;d.onerror=ne(u),d.onblocked=M(t._fireOnBlocked),d.onupgradeneeded=M(h=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){d.onerror=Nt,o.abort(),d.result.close();const y=n.deleteDatabase(c);y.onsuccess=y.onerror=M(()=>{u(new C.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=ne(u);var f=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=f<1,t._novip.idbdb=d.result,Ic(t,f/10,o,u)}},u),d.onsuccess=M(()=>{o=null;const h=t._novip.idbdb=d.result,f=mn(h.objectStoreNames);if(f.length>0)try{const m=h.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},p,g){v.verno=p.version/10;const w=v._dbSchema=Cr(0,p,g);v._storeNames=mn(p.objectStoreNames,0),bn(v,[v._allTables],z(w),w)}(t,h,m):(Pr(t,t._dbSchema,m),function(v,p){const g=ko(Cr(0,v.idbdb,p),v._dbSchema);return!(g.add.length||g.change.some(w=>w.add.length||w.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),$r(t,m)}catch{}var y;bt.push(t),h.onversionchange=M(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),h.onclose=M(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},p){!os(m)&&p!=="__dbnames"&&is(m,v).put({name:p}).catch(O)}(t._deps,c),l()},u)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(kr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.reduce(ts,O);return e.onReadyBeingFired=[],S.resolve(kr(()=>u(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),L(l)}).finally(()=>{e.openComplete=!0,i()})}function Tr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):U(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function qc(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=lo(s);return[t,i,n]}function To(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===es.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>To(t,e,n,null,s))):L(d)}const l=Xr(s);let u;l&&ot();const c=S.follow(()=>{if(u=s.call(o,o),u)if(l){var d=me.bind(null,null);u.then(d,d)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=Tr(u))},a);return(u&&typeof u.then=="function"?S.resolve(u).then(d=>o.active?d:L(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),L(d)))})}function Qt(t,e,n){const r=U(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Wc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(c,d,h){const f=xt(c),y=s[f]=s[f]||[],m=c==null?0:typeof c=="string"?1:c.length,v=d>0,p={...h,isVirtual:v,keyTail:d,keyLength:m,extractKey:Sr(c),unique:!v&&h.unique};return y.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?c[0]:c.slice(0,m-1),d+1,h),y.sort((g,w)=>g.keyTail-w.keyTail),p}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const c of r.indexes)o(c.keyPath,0,c);function l(c){const d=c.query.index;return d.isVirtual?{...c,query:{index:d,range:(h=c.query.range,f=d.keyTail,{type:h.type===1?2:h.type,lower:Qt(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Qt(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var h,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(c){const d=s[xt(c)];return d&&d[0]}},count:c=>n.count(l(c)),query:c=>n.query(l(c)),openCursor(c){const{keyTail:d,isVirtual:h,keyLength:f}=c.query.index;return h?n.openCursor(l(c)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(Qt(p,c.reverse?t.MAX_KEY:t.MIN_KEY,d)):c.unique?m.continue(m.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,d)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(Qt(p,t.MAX_KEY,d),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(c)}}}}}};function as(t,e,n,r){return n=n||{},r=r||"",z(t).forEach(s=>{if(X(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=ur(i);a!==ur(o)?n[r+s]=e[s]:a==="Object"?as(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),z(e).forEach(s=>{X(t,s)||(n[r+s]=e[s])}),n}const Vc={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:u}=o.table(e).hook;switch(i.type){case"add":if(l.fire===O)break;return o._promise("readwrite",()=>c(i),!0);case"put":if(l.fire===O&&u.fire===O)break;return o._promise("readwrite",()=>c(i),!0);case"delete":if(a.fire===O)break;return o._promise("readwrite",()=>c(i),!0);case"deleteRange":if(a.fire===O)break;return o._promise("readwrite",()=>function(h){return d(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function c(h){const f=A.trans,y=h.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,h);if(!y)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:y}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,h,y).then(m=>{const v=y.map((p,g)=>{const w=m[g],E={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call(E,p,w,f);else if(h.type==="add"||w===void 0){const x=l.fire.call(E,p,h.values[g],f);p==null&&x!=null&&(p=x,h.keys[g]=p,r.outbound||te(h.values[g],r.keyPath,p))}else{const x=as(w,h.values[g]),b=u.fire.call(E,x,p,w,f);if(b){const _=h.values[g];Object.keys(b).forEach(P=>{X(_,P)?_[P]=b[P]:te(_,P,b[P])})}}return E});return n.mutate(h).then(({failures:p,results:g,numFailures:w,lastResult:E})=>{for(let x=0;x<y.length;++x){const b=g?g[x]:y[x],_=v[x];b==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(h.type==="put"&&m[x]?h.values[x]:b)}return{failures:p,results:g,numFailures:w,lastResult:E}}).catch(p=>(v.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function d(h,f,y){return n.query({trans:h,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>c({type:"delete",keys:m,trans:h}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:d(h,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function Oo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)W(e.keys[s],t[i])===0&&(r.push(n?Lt(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Jc={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Oo(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Lt(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function ls(t){return!("from"in t)}const le=function(t,e){if(!this){const n=new le;return t&&"d"in t&&V(n,t),n}V(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Mt(t,e,n){const r=W(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(ls(t))return V(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(W(n,t.from)<0)return s?Mt(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Gs(t);if(W(e,t.to)>0)return i?Mt(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Gs(t);W(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),W(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&_n(t,s),i&&o&&_n(t,i)}function _n(t,e){ls(e)||function n(r,{from:s,to:i,l:o,r:a}){Mt(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function Gc(t,e){const n=Or(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=Or(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(W(a.from,s.to)<=0&&W(a.to,s.from)>=0)return!0;W(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function Or(t){let e=ls(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&W(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||W(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Gs(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=Ys(o)}t.d=Ys(t)}function Ys({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}it(le.prototype,{add(t){return _n(this,t),this},addKey(t){return Mt(this,t,t),this},addKeys(t){return t.forEach(e=>Mt(this,e,e)),this},[dr](){return Or(this)}});const Yc={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new le(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,u={...s,mutate:h=>{const f=h.trans,y=f.mutatedParts||(f.mutatedParts={}),m=b=>{const _=`idb://${e}/${r}/${b}`;return y[_]||(y[_]=new le)},v=m(""),p=m(":dels"),{type:g}=h;let[w,E]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const x=h.trans._cache;return s.mutate(h).then(b=>{if(U(w)){g!=="delete"&&(w=b.results),v.addKeys(w);const _=Oo(w,x);_||g==="add"||p.addKeys(w),(_||E)&&function(P,$,N,D){function q(K){const R=P(K.name||"");function Ke(J){return J!=null?K.extractKey(J):null}const Ie=J=>K.multiEntry&&U(J)?J.forEach($e=>R.addKey($e)):R.addKey(J);(N||D).forEach((J,$e)=>{const lt=N&&Ke(N[$e]),Dn=D&&Ke(D[$e]);W(lt,Dn)!==0&&(lt!=null&&Ie(lt),Dn!=null&&Ie(Dn))})}$.indexes.forEach(q)}(m,i,_,E)}else if(w){const _={from:w.lower,to:w.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return b})}},c=({query:{index:h,range:f}})=>{var y,m;return[h,new le((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},d={get:h=>[o,new le(h.key)],getMany:h=>[o,new le().addKeys(h.keys)],count:c,query:c,openCursor:c};return z(d).forEach(h=>{u[h]=function(f){const{subscr:y}=A;if(y){const m=E=>{const x=`idb://${e}/${r}/${E}`;return y[x]||(y[x]=new le)},v=m(""),p=m(":dels"),[g,w]=d[h](f);if(m(g.name||"").add(w),!g.isPrimaryKey){if(h!=="count"){const E=h==="query"&&l&&f.values&&s.query({...f,values:!1});return s[h].apply(this,arguments).then(x=>{if(h==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),x));const b=f.values?x.result.map(a):x.result;f.values?v.addKeys(b):p.addKeys(b)}else if(h==="openCursor"){const b=x,_=f.values;return b&&Object.create(b,{key:{get:()=>(p.addKey(b.primaryKey),b.key)},primaryKey:{get(){const P=b.primaryKey;return p.addKey(P),P}},value:{get:()=>(_&&v.addKey(b.primaryKey),b.value)}})}return x})}p.add(n)}}return s[h].apply(this,arguments)}}),u}}}};class De{constructor(e,n){this._middlewares={},this.verno=0;const r=De.dependencies;this._options=n={addons:De.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:O,dbReadyPromise:null,cancelOpen:O,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(a=>{i.dbReadyResolve=a}),i.openCanceller=new S((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=_t(this,"populate","blocked","versionchange","close",{ready:[ts,O]}),this.on.ready.subscribe=so(this.on.ready.subscribe,a=>(l,u)=>{De.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||S.resolve().then(l),u&&a(l);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(l),u&&a(l);else{a(l);const d=this;u||a(function h(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,ut(jc.prototype,function(a,l){this.db=o;let u=$o,c=null;if(l)try{u=l()}catch(y){c=y}const d=a._ctx,h=d.table,f=h.hook.reading.fire;this._ctx={table:h,index:d.index,isPrimKey:!d.index||h.schema.primKey.keyPath&&d.index===h.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:d.or,valueMapper:f!==Tt?f:null}})),this.Table=function(a){return ut(Nc.prototype,function(l,u,c){this.db=a,this._tx=c,this.name=l,this.schema=u,this.hook=a._allTables[l]?a._allTables[l].hook:_t(null,{creating:[bc,O],reading:[wc,Tt],updating:[xc,O],deleting:[_c,O]})})}(this),this.Transaction=function(a){return ut(zc.prototype,function(l,u,c,d,h){this.db=a,this.mode=l,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=_t(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),L(f)})})}(this),this.Version=function(a){return ut(Hc.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return ut(Ao.prototype,function(l,u,c){this.db=a,this._ctx={table:l,index:u===":id"?null:u,or:c};const d=a._deps.indexedDB;if(!d)throw new C.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(h,f)=>d.cmp(f,h),this._max=(h,f)=>d.cmp(h,f)>0?h:f,this._min=(h,f)=>d.cmp(h,f)<0?h:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=jt(n.IDBKeyRange),this._createTransaction=(a,l,u,c)=>new this.Transaction(a,l,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=a=>{this.on("blocked").fire(a),bt.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(Wc),this.use(Vc),this.use(Yc),this.use(Jc),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(Kc),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(O)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return Uc(this)}_close(){const e=this._state,n=bt.indexOf(this);if(n>=0&&bt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=M(()=>{(function({indexedDB:a,IDBKeyRange:l},u){!os(a)&&u!=="__dbnames"&&is(a,l).delete(u).catch(O)})(this._deps,this.name),r()}),o.onerror=ne(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return z(this._allTables).map(e=>this._allTables[e])}transaction(){const e=qc.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(u=>{if(s&&s.storeNames.indexOf(u)===-1){if(!i)throw new C.SubTransaction("Table "+u+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(u){return s?s._promise(null,(c,d)=>{d(u)}):L(u)}const l=To.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?at(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!X(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Qc=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Xc{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Qc](){return this}}function No(t,e){return z(e).forEach(n=>{_n(t[n]||(t[n]=new le),e[n])}),t}function Zc(t){return new Xc(e=>{const n=Xr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,xe.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let a=!1,l=!1;function u(){return z(i).some(h=>s[h]&&Gc(s[h],i[h]))}const c=h=>{No(s,h),u()&&d()},d=()=>{if(a||r)return;s={};const h={},f=function(y){n&&ot();const m=()=>be(t,{subscr:y,trans:null}),v=A.trans?at(A.transless,m):m();return n&&v.then(me,me),v}(h);l||(xe("storagemutated",c),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(u()?d():(s={},i=h,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return d(),o})}let Nr;try{Nr={indexedDB:j.indexedDB||j.mozIndexedDB||j.webkitIndexedDB||j.msIndexedDB,IDBKeyRange:j.IDBKeyRange||j.webkitIDBKeyRange}}catch{Nr={indexedDB:null,IDBKeyRange:null}}const Ce=De;function ln(t){let e=de;try{de=!0,xe.storagemutated.fire(t)}finally{de=e}}it(Ce,{...tn,delete:t=>new Ce(t,{addons:[]}).delete(),exists:t=>new Ce(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return os(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):is(e,n).toCollection().primaryKeys()}(Ce.dependencies).then(t)}catch{return L(new C.MissingAPI)}},defineClass:()=>function(t){V(this,t)},ignoreTransaction:t=>A.trans?at(A.transless,t):t(),vip:kr,async:function(t){return function(){try{var e=Tr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return L(n)}}},spawn:function(t,e,n){try{var r=Tr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return L(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?Ce.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>oe,set:t=>{uo(t,t==="dexie"?()=>!0:So)}},derive:Ye,extend:V,props:it,override:so,Events:_t,on:xe,liveQuery:Zc,extendObservabilitySet:No,getByKeyPath:fe,setByKeyPath:te,delByKeyPath:function(t,e){typeof e=="string"?te(t,e,void 0):"length"in e&&[].map.call(e,function(n){te(t,n,void 0)})},shallowClone:ao,deepClone:Lt,getObjectDiff:as,cmp:W,asap:io,minKey:-(1/0),addons:[],connections:bt,errnames:es,dependencies:Nr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Ce.maxKey=jt(Ce.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(xe("storagemutated",t=>{if(!de){let e;jn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),de=!0,dispatchEvent(e),de=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{de||ln(t)}));let de=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),xe("storagemutated",e=>{de||t.postMessage(e)}),t.onmessage=e=>{e.data&&ln(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){xe("storagemutated",e=>{try{de||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&ln(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&ln(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof Qe||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Is[t.name])return t;var n=new Is[t.name](e||t.message,t);return"stack"in t&&he(n,"stack",{get:function(){return this.inner.stack}}),n},uo(oe,So);class It extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class Qs extends It{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Mn="locationchange";let Xs=!1;const eu=window.history.pushState;function Zs(...t){const e=eu.apply(window.history,t);return window.dispatchEvent(new Event(Mn)),e}const tu=window.history.replaceState;function ei(...t){const e=tu.apply(window.history,t);return window.dispatchEvent(new Event(Mn)),e}function nu(){if(!Xs){if(window.history.pushState===Zs)throw new Qs("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===ei)throw new Qs("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");Xs=!0,window.history.pushState=Zs,window.history.replaceState=ei,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Mn))})}}function ru(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function su(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function iu(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?ru(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class ou extends It{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function jo(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const ti=6;function ni(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>ti)throw new ou(`Route sanitization depth has exceed the max of ${ti} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(jo(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Qn extends It{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function au(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Qn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Qn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Qn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function lu(t,e,n,r=!1){const s=Mo(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Mo(t,e,n=""){var r;if(!n&&e!=null)throw new It("Route base regexp was defined but routeBase string was not provided.");const s=cu(e)?`/${n}`:"",i=t.search?su(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function cu(t){return!!(t&&window.location.pathname.match(t))}function uu(t={}){var e;au(t),nu();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const u=i.getCurrentRawRoutes(),c={...u,...o},d=i.sanitizeFullRoute(c);if(!(!l&&jo(u,d)))return lu(d,r,n,a)},createRoutesUrl:o=>Mo(o,r,n),getCurrentRawRoutes:()=>iu(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new It(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(Mn,()=>ni(i)),s=!0),o&&ni(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Do=uu({routeBase:"resizable-image-element"}),du=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],hu="resizable-image-element-storage";class fu extends De{constructor(){super(hu),this.version(1).stores({storedUrls:"&index"})}}const Xn=new fu,ri={async set(t){const e=xn(t).map((n,r)=>({index:r,url:n}));await Xn.storedUrls.clear(),await Xn.storedUrls.bulkPut(e)},async get(){const e=(await Xn.storedUrls.toArray()).map(r=>r.url),n=xn(e);return mu(n.length?n:du)}};function mu(t){var e,n;try{const r=xn(((n=(e=Do.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function xn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter($n)}const{defineElement:pu,defineElementNoInputs:gu}=Al(),Xt=pu()({tagName:"vir-url-input",events:{urlsChange:en()},styles:Je`
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
                ${gt("input",a=>{const u=a.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(u))})}
                ${gt("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),dt={max:{width:300,height:600},min:{width:300,height:150}};gu({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Li(ri.get()),constraints:void 0,router:Do,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Je`
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||dt.min.width,height:Number(o==null?void 0:o.minH)||dt.min.height},max:{width:Number(o==null?void 0:o.maxW)||dt.max.width,height:Number(o==null?void 0:o.maxH)||dt.max.height}}})}const n=t.constraints??dt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!gi(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Dt(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),F`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Xt}
                ${Gr(Xt,{urls:r})}
                ${gt(Xt.events.urlsChange,o=>{const a=o.detail;ri.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Xt}>
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
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const u=[Ze(o),Ze(l)].join(" "),c=n[o][l];return F`
                            <label>
                                ${u}
                                <br />
                                ${ee(c)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${c}
                                    ${gt("input",d=>{i(d.currentTarget,o,l)})}
                                />
                            </label>
                        `});return F`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${yu(n,t.imageUrls)}</div>
        `}});function yu(t,e){return ar(e,"Loading...",n=>xn(n).map(r=>{const s=`
                height: ${ee(t.max.height)};
                max-height: ${ee(t.max.height)};
                width: ${ee(t.max.width)};
                max-width: ${ee(t.max.width)}`,i=`height: ${ee(t.min.height)}; width: ${ee(t.min.width)}`;return F`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${yt}
                            ${Gr(yt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${yt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
