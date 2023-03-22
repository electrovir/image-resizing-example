(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Yo=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],mi=new RegExp(Yo.join("|"),"g");function Qo(t,e){return t.filter((n,r)=>!e.includes(r))}function Xo(t){return t.reduce((n,r)=>n.concat(r),[])}function Zo(t){return t.map(e=>e.trim()).filter(e=>e!=="")}function ea(t,e){return t.includes(e)}function ta(t,e){return t.map(e)}async function na(t,e){await Br(t,e)}async function Br(t,e){return await t.reduce(async(r,s,i,o)=>{const a=await r,l=await e(s,i,o);return a.push(l),a},Promise.resolve([]))}async function ra(t,e,n){const r=n!=null&&n.blocking?await Br(t,e):await Promise.all(t.map(e));return t.filter((s,i)=>!!r[i])}function Fr(t){const e=new Set(Array.from(t.toLowerCase()));return Array.from(e).join("")}function sa(t,e){return new RegExp(t.source,Fr([t.flags,e].join("")))}function Hr(t,e){return t.match(e)??[]}function ia(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}function pi(t){return t.replace(mi,"")}const oa=pi;function gi(t){return t.replace(/,/g,"")}function On(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function aa(t,e,n){const r=wi({searchIn:t,searchFor:e,caseSensitive:n,includeLength:!0}),s=vi(e,n);return t.split(s).reduce((a,l,c)=>{const u=r[c],d=a.concat(l);if(u){const h=t.slice(u.index,u.index+u.length);return d.concat(h)}else return d},[])}const la={capitalizeFirstLetter:!1};function nt(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function ca(t,e){return e.capitalizeFirstLetter?nt(t):t}function ua(t,e=la){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return ca(r,e)}function ys(t){return t!==t.toUpperCase()}function da(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=ys(o)||ys(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function ha(t,e,n,r=n.length){const s=t.substring(0,e),i=t.substring(e+r);return`${s}${n}${i}`}function yi(t){return t.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function vi(t,e){const n=`g${!e&&typeof t=="string"?"i":""}`;return t instanceof RegExp?new RegExp(t.source,Fr(`${t.flags}${n}`)):new RegExp(yi(t),n)}function wi({searchIn:t,searchFor:e,caseSensitive:n,includeLength:r}){const s=vi(e,n),i=[],o=[];return t.replace(s,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new Error(`Match index "${l}" is not a number. Searching for "${e}" in "${t}".`);const c=a[0];if(typeof c!="string")throw new Error(`regExpMatch should've been a string but was ${typeof c}!`);o.push({index:l,length:c.length}),i.push(l);const u=a[0];if(typeof u!="string")throw new Error(`Original match when searching for "${e}" in "${t}" at index ${l} is not a string.`);return u}),r?o:i}function rt(t,e){return t.split(e)}const bi=String(NaN);function Kr(t){if(typeof t=="string"&&isNaN(Number(t)))return bi;const e=String(t),[n,r]=e.split("."),s=r?`.${r}`:"";return`${Hr(n.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${s}`}function Ur({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}function _i(t){return typeof t=="number"?t:Number(typeof t=="string"?gi(t):t)}function Si(t){return String(t).includes("e")}function xi({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}const qr=["january","february","march","april","may","june","july","august","september","october","november","december"],Ei=qr.map(t=>t.slice(0,3));class vn extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function fa(t,e=""){const[n,r,s=""]=t.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${t}"`);const i=s.length<4?`${e}${s.padStart(2,"0")}`:s;return Wr(`${i.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function $i(t,e=!1){const[n,r,s]=t.replace(",","").split(" ");if(!n||!r||!s)throw new vn(`Invalid ${$i.name} input: ${t}`);const i=qr.indexOf(n.toLowerCase()),o=Ei.indexOf(n.toLowerCase());let a=i===-1?o:i;if(a===-1)if(e)a=new Date().getUTCMonth();else throw new vn(`Month name ${n} was not found.`);return Wr(`${s.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function Wr(t){const e=new Date(t+"T00:00:00.000Z");if(isNaN(Number(e)))throw new vn(`Invalid utc date formed from input "${t}"`);return e}const vs={days:{getKey:"getUTCDate",setKey:"setUTCDate"},months:{getKey:"getUTCMonth",setKey:"setUTCMonth"},years:{getKey:"getUTCFullYear",setKey:"setUTCFullYear"}};function ma(t,e){t instanceof Date||(t=new Date(t));let n=new Date(t);return ie(e).forEach(r=>{const s=e[r];if(!s)return;const{getKey:i,setKey:o}=Oi(vs,r)?vs[r]:{getKey:`getUTC${nt(r)}`,setKey:`setUTC${nt(r)}`},a=n[i]();n[o](a+s)}),n}function pa(){return typeof window<"u"}function ga(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(n=>$e(n).trim()).join(`
`))}function ya(t){return t?t.map($e).filter(ut).join(`
`):""}function $e(t){return t?t instanceof Error?t.message:String(t):""}function kt(t){return t instanceof Error?t:new Error($e(t))}function va(t){let e;try{const n=t();return ji(n)?new Promise(async r=>{try{const s=await n;return r(s)}catch(s){e=kt(s)}return r(e)}):n}catch(n){e=kt(n)}return e}function ut(t){return!!t}const wa=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function we(t,e){return t?wa.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function ba(t,e){return t&&e.every(n=>we(t,n))}function _a(t,e){return we(e,t)}function ie(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Sa(t){return ie(t).map(e=>t[e])}function ir(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function xa(t){return Object.fromEntries(t)}function wn(t){return!!t&&typeof t=="object"}function Ai(t,e){try{if(t===e)return!0;if(wn(t)&&wn(e)){const n=ir(t),r=ir(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${$e(n)}`),n}}function Ea(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function $a(t,e,n=!1,r=!1){try{return Ft(t,e,n),!0}catch(s){return r&&console.error(s),!1}}function Ft(t,e,n=!1,r={}){const s=ie(t),i=new Set(ie(e));if(!n){const o=s.filter(a=>!i.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!we(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const l=t[o],c=e[o];r[o]||Ci(l,c,a,n,r[o]??{})})}function Ci(t,e,n,r,s){var a;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{we(e,"constructor")&&(!we(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,c)=>{if(e.map(d=>{try{Ci(l,d,n,r,s);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${$e(h)}`)}}).filter(ut).length===e.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${e.join(", ")}"`)})):wn(e)&&Ft(t,e,r,s)}function Mn(t){return Array.isArray(t)?"array":typeof t}function ze(t,e){return Mn(t)===e}function Pi(t,e,n){if(!ze(t,e))throw new TypeError(`'${n}' is of type '${Mn(t)}' but type '${e}' was expected.`)}function or({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(ze(n,"object")?Ft(r,n):Pi(r,Mn(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function Ti(t){return ie(t).filter(e=>isNaN(Number(e)))}function Vr(t){return Ti(t).map(n=>t[n])}function ki(t,e){return Vr(e).includes(t)}function Aa(t,e,n=!1){return n?t.reduce((r,s)=>{const i=Vr(e).find(o=>String(o).toUpperCase()===String(s).toUpperCase());return i?r.concat(i):r},[]):t.filter(r=>ki(r,e))}function Ht(t,e){return ie(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Ca(t,e){return Ht(t,n=>!e.includes(n))}function Pa(t,e){return Ht(t,n=>e.includes(n))}function Oi(t,e){return e in t}function Ta(t){return JSON.parse(JSON.stringify(t))}function ka(t){function e(n){return ie(t).reduce((s,i)=>{const o=n(i,t[i],t);return{...s,[i]:o}},{})}return e}function jn(t,e){let n=!1;const r=ie(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(ie(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function Mi(t,e){const n=e[0];if(!we(t,n))return;const r=t[n];return e.length>1?Mi(r,e.slice(1)):r}function Kt(t){const e=dt();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}async function Oa(t,e){return Kt(t).then(()=>e)}function ji(t){return!!(we(t,"then")&&typeof t.then=="function")}class Di extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function Ma(t,e){return new Promise(async(n,r)=>{const s=t===1/0?void 0:setTimeout(()=>{r(new Di(t))},t);try{const i=await e;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function dt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${dt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}async function ja({conditionCallback:t,timeoutMs:e=1e4,intervalMs:n=100,timeoutMessage:r=""}){let s=!1,i;async function o(){try{s=!!await t()}catch(l){s=!1,i=l}}const a=Date.now();for(await o();!s;){if(await Kt(n),Date.now()-a>=e){const l=r?`${r}: `:"";throw new Error(`${l}Timeout of "${e}" exceeded waiting for condition to be true${$e(i)}`)}await o()}}const Hn="://";function Da(...t){const e=t.join("/"),[n,r=""]=e.includes(Hn)?e.split(Hn):["",e];let s=!1,i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").map(a=>a.includes("?")||s?(s=!0,a):encodeURIComponent(a)).reduce((a,l,c,u)=>{if(i)return a;const d=u[c+1];let h=l;const f=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||f){i=!0;let y=!1;const m=u.slice(f?c+2:c+1).reduce((v,g)=>(g.includes("#")&&(y=!0),y?v.concat(g):[v,g].join("&")),"");h=[l,d,m].join("")}return a.concat(h)},[]);return[n,n?Hn:"",o.join("/")].join("")}const Na=/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/;function Ra(t){return!!t.match(Na)}const za=["k","M","B","T","P","E","Z","Y"];function Jr({beforeDot:t,afterDot:e="",maxLength:n}){if(e.length){const r=n-t.length-1;if(r>0){const s=e.slice(0,r);return Number(s)?[t,s].join("."):t}}return t}function La(t,e,n){const[r,s]=rt(t,"."),i=Kr(r),o=Hr(i,/,/g).length,a=e[o-1],[l,c]=rt(i,","),u=[c,s].join("");return l.length+1>n?["0.",l[0],e[o]].join(""):[Jr({beforeDot:l,afterDot:u,maxLength:n-1}),a].join("")}const ws=3;function Ia({input:t,maxLength:e}){const n=String(t),[r,s]=rt(n,"e"),i=s.replace(/^[\-\+]/,""),o=s[0],a=["e",o,i].join(""),[l,c]=rt(r,"."),u=i.length+ws;return u===e?[l,a].join(""):u>e?o==="-"?"0":String(1/0):[Jr({afterDot:c,beforeDot:l,maxLength:e-i.length+ws}),a].join("")}function Ba(t,e){const[n,r]=rt(Kr(t),".");if(n.length<=e)return Jr({beforeDot:n,afterDot:r,maxLength:e})}function Fa(t,{customSuffixes:e=za,maxLength:n=6}={}){const r=_i(t);if(isNaN(r)||r===1/0)return String(r);if(Si(r))return Ia({input:r,maxLength:n});const s=String(r),i=Ba(s,n);return i??La(s,e,n)}function Ha(t,e){return t.length>=e}function Ka(t){return t}function Ua(t){return t}function qa(){return t=>t}function Wa(t){return t}const Va=Object.freeze(Object.defineProperty({__proto__:null,InvalidDateError:vn,NaNString:bi,PromiseTimeoutError:Di,addCommasToNumber:Kr,addRegExpFlags:sa,ansiRegex:mi,areJsonEqual:Ai,assertMatchesObjectShape:Ft,assertRuntimeTypeOf:Pi,awaitedBlockingMap:Br,awaitedFilter:ra,awaitedForEach:na,calculateRelativeDate:ma,camelCaseToKebabCase:da,capitalizeFirstLetter:nt,clamp:Ur,collapseWhiteSpace:On,combineErrorMessages:ya,combineErrors:ga,convertIntoNumber:_i,copyThroughJson:Ea,createDateFromNamedCommaFormat:$i,createDateFromSlashFormat:fa,createDateFromUtcIsoFormat:Wr,createDeferredPromiseWrapper:dt,deDupeRegExFlags:Fr,doesRequireScientificNotation:Si,englishFullMonthNames:qr,englishShortMonthNames:Ei,ensureError:kt,ensureMinAndMax:xi,ensureType:Wa,escapeStringForRegExp:yi,executeAndReturnError:va,extractErrorMessage:$e,filterObject:Ht,filterOutIndexes:Qo,filterToEnumValues:Aa,flatten2dArray:Xo,getAllIndexesOf:wi,getEntriesSortedByKey:ir,getEnumTypedKeys:Ti,getEnumTypedValues:Vr,getObjectTypedKeys:ie,getObjectTypedValues:Sa,getRuntimeTypeOf:Mn,getValueFromNestedKeys:Mi,hasKey:Oi,isBrowser:pa,isEnumValue:ki,isKeyof:_a,isLengthAtLeast:Ha,isObject:wn,isPromiseLike:ji,isRuntimeTypeOf:ze,isTruthy:ut,isUuid:Ra,joinUrlParts:Da,joinWithFinalConjunction:ia,jsonify:Ta,kebabCaseToCamelCase:ua,makeReadonly:Ua,makeWritable:Ka,mapObjectValues:jn,mapObjectValuesSync:ka,matchesObjectShape:$a,omitObjectKeys:Ca,parseJson:or,pickObjectKeys:Pa,removeAnsiEscapeCodes:pi,removeColor:oa,removeCommasFromNumberString:gi,replaceStringAtIndex:ha,safeMatch:Hr,splitIncludeSplit:aa,trimArrayStrings:Zo,truncateNumber:Fa,typedArrayIncludes:ea,typedHasProperties:ba,typedHasProperty:we,typedMap:ta,typedObjectFromEntries:xa,typedSplit:rt,wait:Kt,waitForCondition:ja,waitValue:Oa,wrapNarrowTypeWithTypeCheck:qa,wrapPromiseInTimeout:Ma},Symbol.toStringTag,{value:"Module"})),Gr=globalThis.crypto;function Ni({min:t,max:e}){const{min:n,max:r}=xi({min:Math.floor(t),max:Math.floor(e)}),s=r-n+1,i=Math.ceil(Math.log2(s)/8),o=Math.floor(256**i/s)*s,a=new Uint8Array(i);let l;do Gr.getRandomValues(a),l=a.reduce((c,u,d)=>c+u*256**d,0);while(l>=o);return n+l%s}function Ja(t=50){return Ni({min:0,max:99})<Ur({value:Math.floor(t),min:0,max:100})}function Ga(){return Gr.randomUUID()}function Ri(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return Gr.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function Ya(t){return t.map(e=>({value:e,sort:Ri()})).sort((e,n)=>e.sort.localeCompare(n.sort)).map(({value:e})=>e)}async function Qa(t){const e=dt(),n=new Image;return n.onload=()=>{e.resolve(n)},n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,e.promise}function ee(t){return String(t).endsWith("px")?String(t):`${t}px`}function Xa(t){return Number(t.replace(/px$/,""))}function bt(t){const e=t.query.split(" ").filter(ut);if(!t.query)return t.element instanceof Element?t.element:t.element.host;if(e.length>1)return ar({...t,queries:e});if("shadowRoot"in t.element&&t.element.shadowRoot)return bt({...t,element:t.element.shadowRoot});const n=Array.from(t.element.children).filter(r=>!!r.shadowRoot).map(r=>r.shadowRoot);if(t.all){const r=Array.from(t.element.querySelectorAll(t.query)),s=n.map(i=>bt({...t,all:!0,element:i})).flat();return[...r,...s]}else{const r=t.element.querySelector(t.query);if(r)return r;for(let s=0;s<n.length;s++){const i=n[s],o=bt({...t,element:i});if(o)return o}return}}function ar(t){const e=t.queries[0];if(!e)throw new Error(`Somehow the first query was empty in '[${t.queries.join(",")}]' for query '${t.query}'`);const n=bt({...t,query:e});return t.queries.length<=1?n:ze(n,"array")?n.map(r=>ar({...t,element:r,queries:t.queries.slice(1)})).flat().filter(ut):n?ar({...t,element:n,queries:t.queries.slice(1)}):void 0}function Za(t){const e=Ht(t,(i,o)=>o!=null),n=jn(e,(i,o)=>String(o)),s=new URLSearchParams(Object.entries(n)).toString();return s?`?${s}`:""}function el(t,e){const n=ze(t,"string")?new URL(t):t,r=Array.from(n.searchParams.entries()),s=Object.fromEntries(r);return e&&Ft(s,e),s}async function tl(t){const e=dt(),n=document.createElement("video");return n.addEventListener("loadeddata",()=>{e.resolve(n)}),n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,n.load(),e.promise}const nl=Object.freeze(Object.defineProperty({__proto__:null,addPx:ee,createUuid:Ga,loadImage:Qa,loadVideo:tl,objectToSearchParamsString:Za,queryThroughShadow:bt,randomBoolean:Ja,randomInteger:Ni,randomString:Ri,removePx:Xa,searchParamStringToObject:el,shuffleArray:Ya},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn=window,Yr=cn.ShadowRoot&&(cn.ShadyCSS===void 0||cn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qr=Symbol(),bs=new WeakMap;let zi=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Yr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=bs.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&bs.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new zi(typeof t=="string"?t:t+"",void 0,Qr),Li=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new zi(n,t,Qr)},rl=(t,e)=>{Yr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=cn.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},_s=Yr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kn;const bn=window,Ss=bn.trustedTypes,sl=Ss?Ss.emptyScript:"",xs=bn.reactiveElementPolyfillSupport,lr={toAttribute(t,e){switch(e){case Boolean:t=t?sl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ii=(t,e)=>e!==t&&(e==e||t==t),Un={attribute:!0,type:String,converter:lr,reflect:!1,hasChanged:Ii};let Ve=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=Un){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Un}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(_s(s))}else e!==void 0&&n.push(_s(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return rl(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Un){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:lr).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:lr;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ii)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ve.finalized=!0,Ve.elementProperties=new Map,Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},xs==null||xs({ReactiveElement:Ve}),((Kn=bn.reactiveElementVersions)!==null&&Kn!==void 0?Kn:bn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qn;const _n=window,st=_n.trustedTypes,Es=st?st.createPolicy("lit-html",{createHTML:t=>t}):void 0,ve=`lit$${(Math.random()+"").slice(9)}$`,Bi="?"+ve,il=`<${Bi}>`,it=document,Ot=(t="")=>it.createComment(t),Mt=t=>t===null||typeof t!="object"&&typeof t!="function",Fi=Array.isArray,ol=t=>Fi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$s=/-->/g,As=/>/g,Ce=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cs=/'/g,Ps=/"/g,Hi=/^(?:script|style|textarea|title)$/i,al=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),ll=al(1),be=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Ts=new WeakMap,Xe=it.createTreeWalker(it,129,null,!1),cl=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=pt;for(let l=0;l<n;l++){const c=t[l];let u,d,h=-1,f=0;for(;f<c.length&&(o.lastIndex=f,d=o.exec(c),d!==null);)f=o.lastIndex,o===pt?d[1]==="!--"?o=$s:d[1]!==void 0?o=As:d[2]!==void 0?(Hi.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Ce):d[3]!==void 0&&(o=Ce):o===Ce?d[0]===">"?(o=s??pt,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?Ce:d[3]==='"'?Ps:Cs):o===Ps||o===Cs?o=Ce:o===$s||o===As?o=pt:(o=Ce,s=void 0);const y=o===Ce&&t[l+1].startsWith("/>")?" ":"";i+=o===pt?c+il:h>=0?(r.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+ve+y):c+ve+(h===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Es!==void 0?Es.createHTML(a):a,r]};let cr=class Ki{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[c,u]=cl(e,n);if(this.el=Ki.createElement(c,r),Xe.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=Xe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(ve)){const f=u[o++];if(d.push(h),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(ve),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?dl:m[1]==="?"?fl:m[1]==="@"?ml:Dn})}else l.push({type:6,index:i})}for(const h of d)s.removeAttribute(h)}if(Hi.test(s.tagName)){const d=s.textContent.split(ve),h=d.length-1;if(h>0){s.textContent=st?st.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],Ot()),Xe.nextNode(),l.push({type:2,index:++i});s.append(d[h],Ot())}}}else if(s.nodeType===8)if(s.data===Bi)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(ve,d+1))!==-1;)l.push({type:7,index:i}),d+=ve.length-1}i++}}static createElement(e,n){const r=it.createElement("template");return r.innerHTML=e,r}};function ot(t,e,n=t,r){var s,i,o,a;if(e===be)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const c=Mt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=ot(t,l._$AS(t,e.values),l,r)),e}let ul=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:it).importNode(r,!0);Xe.currentNode=i;let o=Xe.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Xr(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new pl(o,this,e)),this.u.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Xe.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Xr=class Ui{constructor(e,n,r,s){var i;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ot(this,e,n),Mt(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==be&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ol(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==I&&Mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(it.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=cr.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new ul(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=Ts.get(e.strings);return n===void 0&&Ts.set(e.strings,n=new cr(e)),n}k(e){Fi(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Ui(this.O(Ot()),this.O(Ot()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},Dn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=ot(this,e,n,0),o=!Mt(e)||e!==this._$AH&&e!==be,o&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=ot(this,a[r+l],n,l),c===be&&(c=this._$AH[l]),o||(o=!Mt(c)||c!==this._$AH[l]),c===I?e=I:e!==I&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},dl=class extends Dn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}};const hl=st?st.emptyScript:"";let fl=class extends Dn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==I?this.element.setAttribute(this.name,hl):this.element.removeAttribute(this.name)}},ml=class extends Dn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=ot(this,e,n,0))!==null&&r!==void 0?r:I)===be)return;const s=this._$AH,i=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==I&&(s===I||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},pl=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ot(this,e)}};const ks=_n.litHtmlPolyfillSupport;ks==null||ks(cr,Xr),((qn=_n.litHtmlVersions)!==null&&qn!==void 0?qn:_n.litHtmlVersions=[]).push("2.6.1");const gl=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new Xr(e.insertBefore(Ot(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn,Vn;let _t=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gl(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return be}};_t.finalized=!0,_t._$litElement$=!0,(Wn=globalThis.litElementHydrateSupport)===null||Wn===void 0||Wn.call(globalThis,{LitElement:_t});const Os=globalThis.litElementPolyfillSupport;Os==null||Os({LitElement:_t});((Vn=globalThis.litElementVersions)!==null&&Vn!==void 0?Vn:globalThis.litElementVersions=[]).push("3.2.2");var yl=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function vl(){return t=>{}}let jt=class extends _t{};jt=yl([vl()],jt);const wl={capitalizeFirstLetter:!1};function bl(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function _l(t,e){return e.capitalizeFirstLetter?bl(t):t}function Sl(t,e=wl){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return _l(r,e)}function Ms(t){return t!==t.toUpperCase()}function xl(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=Ms(o)||Ms(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const El=["january","february","march","april","may","june","july","august","september","october","november","december"];El.map(t=>t.slice(0,3));function Zr(t){return t?t instanceof Error?t.message:String(t):""}function $l(t){return t instanceof Error?t:new Error(Zr(t))}const Al=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function qi(t,e){return t?Al.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Cl(t,e){return t&&e.every(n=>qi(t,n))}function Le(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function js(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Ds(t){return!!t&&typeof t=="object"}function Pl(t,e){try{if(t===e)return!0;if(Ds(t)&&Ds(e)){const n=js(t),r=js(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Zr(n)}`),n}}function Tl(t,e){return Le(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function at(t,e){let n=!1;const r=Le(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Le(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function kl(t){return!!(qi(t,"then")&&typeof t.then=="function")}function Dt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Dt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ol=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Ns(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):Ol(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jn;((Jn=window.HTMLSlotElement)===null||Jn===void 0?void 0:Jn.prototype.assignedElements)!=null;const ur=Symbol("this-is-an-element-vir-declarative-element"),es=Symbol("key for ignoring inputs not having been set yet"),Ml={[es]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ts=t=>(...e)=>({_$litDirective$:t,values:e});let ns=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function Dl(t,e){return Wi(t,e,jt)}function Wi(t,e,n){dr(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function dr(t,e){if(t.type!==jl.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function rs(t,e){return Nl(t,e)}const Nl=ts(class extends ns{constructor(t){super(t),this.element=Dl(t,"assign")}render(t,e){return Rl(t,this.element,e),be}});function Rl(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Vi(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof jt?!0:Vi(n)}var k=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Q=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},re,Te,ke,Oe,Ye,Je,G,St,hr,fr;const Ji=Symbol("element-vir-async-state-marker");function zl(t){if(!t)return{};const e=Tl(t,(r,s)=>s instanceof Gi);return at(e,(r,s)=>new Ll(s.initialValue))}const Qt=Symbol("not set");class Ll{constructor(e){re.add(this),Te.set(this,Qt),ke.set(this,void 0),Oe.set(this,void 0),Ye.set(this,[]),Je.set(this,void 0),G.set(this,Dt()),this.asyncMarkerSymbol=Ji,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(k(this,Te,"f")===Qt||!Pl(e.trigger,k(this,Te,"f"))){Q(this,Te,e.trigger,"f");const n=e.createPromise();k(this,re,"m",hr).call(this,n)}}else"newPromise"in e?(k(this,Te,"f"),k(this,re,"m",hr).call(this,e.newPromise),k(this,re,"m",St).call(this)):"resolvedValue"in e?k(this,re,"m",fr).call(this,e.resolvedValue):e.forceUpdate&&(Q(this,Te,Qt,"f"),Q(this,ke,void 0,"f"),k(this,G,"f").isSettled()||k(this,G,"f").reject("Canceled by force update"),Q(this,G,Dt(),"f"),k(this,re,"m",St).call(this))}getValue(){return k(this,G,"f").isSettled()?k(this,Oe,"f")?k(this,Oe,"f"):k(this,ke,"f"):k(this,G,"f").promise}addSettleListener(e){k(this,Ye,"f").push(e)}removeSettleListener(e){Q(this,Ye,k(this,Ye,"f").filter(n=>n!==e),"f")}}Te=new WeakMap,ke=new WeakMap,Oe=new WeakMap,Ye=new WeakMap,Je=new WeakMap,G=new WeakMap,re=new WeakSet,St=function(){k(this,Ye,"f").forEach(e=>{e()})},hr=function(e){e!==k(this,Je,"f")&&(Q(this,ke,void 0,"f"),Q(this,Oe,void 0,"f"),Q(this,Je,e,"f"),k(this,G,"f").isSettled()&&Q(this,G,Dt(),"f"),e.then(n=>{k(this,Je,"f")===e&&k(this,re,"m",fr).call(this,n)}).catch(n=>{k(this,Je,"f")===e&&(Q(this,Oe,$l(n),"f"),k(this,G,"f").promise.catch(()=>{}),k(this,G,"f").reject(n),k(this,re,"m",St).call(this))}))},fr=function(e){e!==k(this,ke,"f")&&(Q(this,Oe,void 0,"f"),Q(this,ke,e,"f"),k(this,G,"f").isSettled()&&Q(this,G,Dt(),"f"),k(this,G,"f").resolve(e),k(this,re,"m",St).call(this))};class Gi{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=Ji}}function Yi(t){return new Gi(t)}function Qi(t,e){return`${t}-${xl(e)}`}function Il(t,e){return e?at(e,n=>se(`--${Qi(t,String(n))}`)):{}}function Bl(t,e){return t?at(t,(n,r)=>{const s=e[n];return se(`var(${s}, ${r})`)}):{}}class Fl extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Xi(){return t=>{var e;return e=class extends Fl{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function un(){return Xi()}function Hl(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Xi()(n);return e[n]=r,e},{}):{}}function Rs(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function zs(t,e){const n=t;function r(i,o){e&&Rs(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Rs(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Kl(t,e){return e?at(e,n=>Qi(t,String(n))):{}}function Ul({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:at(t,(r,s)=>se(`:host(.${s})`)),hostClassNames:at(t,(r,s)=>se(s)),cssVarNames:e,cssVarValues:n}}function ql({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Le(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function Wl(t,e){function n(s){Le(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function ss(t){var e;const n=Hl(t.events),r=Kl(t.tagName,t.hostClasses),s=Il(t.tagName,t.cssVars),i=Bl(t.cssVars,s),o={...Ml,...t.options},a=typeof t.styles=="function"?t.styles(Ul({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Li``,l=t.renderCallback,c=(e=class extends jt{createRenderParams(){return Wl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Vi(this)&&!this.haveInputsBeenSet&&!o[es]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${rs.name}" directive on it. If no inputs are intended, use "${ss.name}" to define ${t.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(u));const d=t.renderCallback(u);return ql({host:u.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:u.state,inputs:u.inputs}),d}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const u=this.createRenderParams();t.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const u=this.createRenderParams();t.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){Le(u).forEach(d=>{Ns()(this,d),this.instanceInputs[d]=u[d]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=zl(t.stateInit),this.instanceInputs=zs(this,!1),this.instanceState=zs(this,!0);const u=t.stateInit||{};Le(u).forEach(d=>{Ns()(this,d);const h=this.asyncStateHandlerMap[d];h?(this.instanceState[d]=h.getValue(),h.addSettleListener(()=>{this[d]=h.getValue()})):this.instanceState[d]=u[d]}),this.definition=c}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(c,{[ur]:{value:!0,writable:!1},name:{value:Sl(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,c),c}function Zi(){return t=>ss({...t,options:{[es]:!1},...t.options})}function xt(t,e){return Vl(t,e)}const Vl=ts(class extends ns{constructor(t){super(t),this.element=Wi(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),be}}),Ls="onDomCreated",Is=ts(class extends ns{constructor(t){super(t),dr(t,Ls)}update(t,[e]){dr(t,Ls);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function mr(t,e,n,r){return t instanceof Error?r?r(t):Zr(t):kl(t)?e:n?n(t):t}function Jl(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Zi()(s(i))),defineElementNoInputs:i=>(r(i),ss(s(i)))}}function Gl(t,e){return t.filter((n,r)=>!e.includes(r))}function eo(t){return t.filter(e=>Cl(e,["tagName",ur])&&!!e.tagName&&!!e[ur])}const to=new WeakMap;function Yl(t,e){var n;const r=eo(e);return(n=no(to,[t,...r]).value)===null||n===void 0?void 0:n.template}function Ql(t,e,n){const r=eo(e);return so(to,[t,...r],n)}function no(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=ro(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?no(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function ro(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function so(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=ro(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const c=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=c),so(c,e,n,r+1)}function io(t,e,n){return{name:t,check:e,transform:n}}const Xl=new WeakMap;function oo(t,e,n){const r=Yl(t,e),s=r??n();if(!r){const o=Ql(t,e,s);if(o.result)Xl.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Gl(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function ao(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,c)=>{var u;const d=s.length-1,h=s[d],f=c-1,y=e[f];let m;r&&r(l),typeof h=="string"&&(m=(u=n.find(g=>g.check(h,l,y)))===null||u===void 0?void 0:u.transform,m&&(s[d]=h+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[c];m?i[d]=i[d]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function lo(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Zl=[io("tag name css selector interpolation",(t,e,n)=>lo(n),t=>t.tagName)];function ec(t,e){return ao(t,e,Zl)}function Qe(t,...e){const n=oo(t,e,()=>ec(t,e));return Li(n.strings,...n.values)}const tc=[io("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=lo(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function nc(t){}function rc(t){return ao(t.strings,t.values,tc,nc)}function K(t,...e){const n=ll(t,...e),r=oo(t,e,()=>rc(n));return{...n,strings:r.strings,values:r.values}}function sc(t,e){return t<e}function ic(t,e){return t>e}const Bs={width:250,height:250};function oc({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?ic:sc)(e.width/e.height,t.width/t.height)?"width":"height"}function Gn({box:t,constraint:e,constraintType:n}){const r=oc({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function co({box:t,ratio:e}){return jn(t,(n,r)=>r*e)}function pr({box:t,min:e,max:n}){return jn(t,(r,s)=>Ur({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function uo({min:t,max:e,box:n}){const r=ho({min:t,max:e,box:n}),s=co({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||Bs.height),width:Math.floor(s.width||(t==null?void 0:t.width)||Bs.width)}}function ho({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Gn({box:n,constraint:t,constraintType:"min"}):1,s=e?Gn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=co({ratio:i,box:n});return(t?Gn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function Me(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=ac(o,r[a]);return`${o}${l}`});return On(i.join(""))}function ac(t,e){return e._$litType$!=null||e._$litDirective$!=null?Me(e):Array.isArray(e)?e.map(r=>Me(r)).join(""):t.endsWith("=")?`"${e}"`:e}function lc(t){const e=cc(t);return ze(e,"object")||ze(e,"array")}function cc(t){const e=or({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=uc(t);return or({jsonString:n,errorHandler:()=>{}})}function uc(t){return On(t).replace(/,\s*([}\]])/,"$1")}var T=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(T||{});const dc=["text","json"];function Fs(t){return dc.includes(t)}async function hc(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":lc(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function fc({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Me(K`
            <img src=${n} />
        `):t==="video"?Me(K`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Me(K`
                <div class="text-wrapper">
                    <p class="text">
                        ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):t==="audio"?Me(K`
                <audio controls src=${n}></audio>
            `):e}function mc(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}else if(e==="html")return t.replaceAll(/console\.[^\(]+\(/g,"doNothing(");return t}async function Hs({imageUrl:t,blockAutoPlay:e,textTransformer:n=r=>r}){var c;let r;try{r=await fetch(t)}catch{}const s=((c=r==null?void 0:r.headers.get("Content-Type"))==null?void 0:c.toLowerCase())??"",i=await(r==null?void 0:r.text())??"",o=r?await hc(s,i):"image",a=n(mc(i??"",o));return{templateString:fc({imageText:a,imageType:o,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:o}}var Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fo(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var lt={},Ut={};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.IframeDisconnectedError=void 0;class pc extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}Ut.IframeDisconnectedError=pc;var Nn={},_e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.isDebugMode=_e.setDebugMode=void 0;let mo=!1;function gc(t){mo=t}_e.setDebugMode=gc;function yc(){return mo}_e.isDebugMode=yc;var qt={},Wt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnyOrigin=t.MessageDirectionEnum=void 0,function(e){e.FromParent="from-parent",e.FromChild="from-child"}(t.MessageDirectionEnum||(t.MessageDirectionEnum={})),t.AnyOrigin=Symbol("any-origin")})(Wt);Object.defineProperty(qt,"__esModule",{value:!0});qt.assertAllowedOrigin=void 0;const vc=Wt;function wc(t,e){if(t===vc.AnyOrigin)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}qt.assertAllowedOrigin=wc;var Rn={};Object.defineProperty(Rn,"__esModule",{value:!0});Rn.dangerDisableSecurityWarningsSymbol=void 0;Rn.dangerDisableSecurityWarningsSymbol=Symbol("dangerDisableSecurityWarningsSymbol");var zn={};const bc=fo(nl),_c=fo(Va);Object.defineProperty(zn,"__esModule",{value:!0});zn.sendPingPongMessageToChild=void 0;const Sc=bc,Ks=_c,Us=_e,xc=Ut,Ec=qt,Yn=Wt;function $c(t,e,n){return n.type===t&&n.direction===e}function Ac(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function Cc({message:t,verifyChildData:e,iframeElement:n},r,s){if(!n)throw new Error("No iframe element was provided.");let i=0,o=!1,a,l,c,u=!1;const d={...t,direction:Yn.MessageDirectionEnum.FromParent,messageId:(0,Sc.randomString)(32)},h=t.type,f=r===Yn.AnyOrigin?["*"]:r;function y(g){try{(0,Ec.assertAllowedOrigin)(r,g);const p=g.data;if(p.type==="error")throw new Error(`Child threw an error: ${p.data}`);if((0,Us.isDebugMode)()&&console.info("Received message from child",p.messageId,p),p&&u&&$c(h,Yn.MessageDirectionEnum.FromChild,p)&&p.messageId===d.messageId){let w=!1;try{w=e?e(p.data):!0}catch{}if(!w)return;o=!0,l=g,a=p}}catch(p){c=(0,Ks.ensureError)(p)}}globalThis.addEventListener("message",y);const m=Date.now();for(;!o&&i<s&&!c;){if(!n.isConnected)throw new xc.IframeDisconnectedError;const g=n.contentWindow;g&&((0,Us.isDebugMode)()&&(u?console.info("Re-sending message to child",d.messageId):console.info("Sending message to child",d.messageId,d)),u=!0,f.forEach(p=>{try{g.postMessage(d,{targetOrigin:p})}catch{}})),await(0,Ks.wait)(Ac(i)),i++}const v=Date.now()-m;if(globalThis.removeEventListener("message",y),c)throw c;if(!o)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${s}' tries ('${Math.floor(v/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but received a valid response");return{data:a==null?void 0:a.data,event:l}}zn.sendPingPongMessageToChild=Cc;Object.defineProperty(Nn,"__esModule",{value:!0});Nn.createIframeMessenger=void 0;const qs=_e,Pc=qt,Tc=Rn,Ue=Wt,kc=zn;function po({allowedOrigins:t,maxAttemptCount:e=10,...n}){if(t!==Ue.AnyOrigin&&t.includes("*")&&(t=Ue.AnyOrigin),t===Ue.AnyOrigin&&!n[Tc.dangerDisableSecurityWarningsSymbol]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==Ue.AnyOrigin&&!t.length)throw new Error(`No allowed origins were provide to ${po.name}. At least one must be provided.`);const r=t===Ue.AnyOrigin?["*"]:t;return{async sendMessageToChild(s){if(s.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await(0,kc.sendPingPongMessageToChild)(s,t,s.maxAttemptCount||e)},listenForParentMessages(s){globalThis.addEventListener("message",async i=>{(0,Pc.assertAllowedOrigin)(t,i);const o=i.data;(0,qs.isDebugMode)()&&console.info("Received message from parent",o.messageId,o);const a=await s({...o,originalEvent:i}),l={type:o.type,direction:Ue.MessageDirectionEnum.FromChild,data:a,messageId:o.messageId};(0,qs.isDebugMode)()&&console.info("Sending message to parent",l.messageId,l),r.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}Nn.createIframeMessenger=po;var go={};Object.defineProperty(go,"__esModule",{value:!0});var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.setInterlockingIframeMessengerDebugMode=void 0;const Oc=_e;function Mc(t){(0,Oc.setDebugMode)(t)}Ln.setInterlockingIframeMessengerDebugMode=Mc;(function(t){var e=Xt&&Xt.__createBinding||(Object.create?function(r,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,o,a)}:function(r,s,i,o){o===void 0&&(o=i),r[o]=s[i]}),n=Xt&&Xt.__exportStar||function(r,s){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&e(s,r,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(Ut,t),n(Nn,t),n(go,t),n(Wt,t),n(Ln,t)})(lt);var Z=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Z||{}),F=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(F||{});const ce=lt.createIframeMessenger({allowedOrigins:[window.location.origin]}),ue=15;async function jc(t){const e=dt();t.onload=()=>{e.resolve()};try{await ce.sendMessageToChild({message:{type:F.Ready},iframeElement:t,maxAttemptCount:ue})}catch{await e.promise,await ce.sendMessageToChild({message:{type:F.Ready},iframeElement:t,maxAttemptCount:ue})}}async function Dc({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){var l;await jc(r),i&&await ce.sendMessageToChild({message:{type:F.ForceSize,data:i},iframeElement:r,maxAttemptCount:ue});const a=o??(await ce.sendMessageToChild({message:{type:F.SendSize},iframeElement:r,maxAttemptCount:ue,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await yo({min:t,max:e,imageDimensions:a,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0}),((l=r.contentWindow)==null?void 0:l.document.documentElement.outerHTML)??""}async function yo({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:a}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c={min:t,max:e,box:o??n},u=Fs(i.imageType)?pr(c):uo(c);l.style.width=ee(Math.floor(u.width)),l.style.height=ee(Math.floor(u.height));const d=pr({min:t,max:e,box:u});u.height<d.height?r.classList.add(Z.VerticallyCenter):r.classList.remove(Z.VerticallyCenter),r.style.width=ee(d.width),r.style.height=ee(d.height);const h=ho({min:t,max:e,box:o??n});if(a){if(h>3?await ce.sendMessageToChild({message:{type:F.SendScalingMethod,data:"pixelated"},iframeElement:s,maxAttemptCount:ue}):await ce.sendMessageToChild({message:{type:F.SendScalingMethod,data:"default"},iframeElement:s,maxAttemptCount:ue}),await ce.sendMessageToChild({message:{type:F.SizeDetermined,data:u},iframeElement:s,maxAttemptCount:ue}),i.imageType===T.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},y={width:h*f.width,height:h*f.height};await ce.sendMessageToChild({message:{type:F.SendScale,data:y},iframeElement:s,maxAttemptCount:ue})}else if(Fs(i.imageType)){const f=o??n;if(f.height<u.height){const y=u.width/f.width,m=u.height/f.height,v=Math.min(y,m);await ce.sendMessageToChild({message:{type:F.SendScale,data:{height:v,width:v}},iframeElement:s,maxAttemptCount:ue})}}}}const Zt={x:16,y:8};var Ws=Object.freeze,Nc=Object.defineProperty,Vs=(t,e)=>Ws(Nc(t,"raw",{value:Ws(e||t.slice())})),Js,Gs;function Rc(t,e,n){const r=Math.random(),s=K(Js||(Js=Vs([`
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
    `])),t.imageType,n??"",T.Svg,T.Html,T.Image,T.Video,T.Text,T.Json,T.Audio,lt.MessageDirectionEnum.FromChild,lt.MessageDirectionEnum.FromChild,F.Ready,F.SendScale,F.SendScalingMethod,F.SendSize,F.ForceSize,F.SizeDetermined,T.Json,T.Text,Zt.y,T.Audio),i=K(Gs||(Gs=Vs([`
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
    `])),t.imageType,T.Image,T.Svg,T.Video,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,Zt.y,Zt.x,T.Text,T.Json,Zt.y,r,e??"",s);return On(Me(i)).replace(String(r),`
${t.templateString}
`)}const zc={imageData:Yi()},Ys=K`
    <div class="click-cover"></div>
`,Lc={textTransformer:"textTransformer",extraHtml:"extraHtml"},Qn="latest-frame-srcdoc",Et=Zi()({tagName:"vir-resizable-image",stateInit:zc,events:{settled:un(),imageDataCalculated:un(),errored:un()},styles:Qe`
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[Qn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(Z.HideLoading),s(new i.settled(!1)),r.classList.remove(Z.VerticallyCenter);const f={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer};try{return Hs(f)}catch{await Kt(1e3);try{return Hs(f)}catch(m){throw s(new i.errored(kt(m))),m}}},trigger:{...Ht(e,f=>!(f in Lc))}}});const o=e.min&&e.max?pr({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?uo({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,c=mr(t.imageData,"",f=>(s(new i.imageDataCalculated(f)),f.imageType===T.Pdf?K`
                        <iframe
                            src=${f.imageUrl}
                            ${Is(async y=>{try{await yo({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:y,imageData:f,imageDimensions:a??{width:500,height:500},max:a,min:o,sendSizeMessage:!1}),r[Qn]="",s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){if(m instanceof lt.IframeDisconnectedError)return;console.error(m)}})}
                        ></iframe>
                    `:K`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${Rc(f,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${Is(async y=>{try{const m=await Dc({min:o,max:a,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});r[Qn]=m,s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){if(m instanceof lt.IframeDisconnectedError)return;console.error(m)}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),f=>(s(new i.errored(kt(f))),K`
                    <div class="error-wrapper">
                        <slot name="error">${$e(f)}</slot>
                    </div>
                `)),u=mr(t.imageData,Ys,f=>!e.blockInteraction&&[T.Html,T.Video,T.Audio,T.Pdf].includes(f.imageType)?"":Ys,()=>""),d=t.imageData instanceof Error?Qe`
                      max-width: 100%;
                      max-height: 100%;
                  `:l?Qe`
                      width: ${l.width}px;
                      height: ${l.height}px;
                  `:"",h=Qe`
            width: ${(o==null?void 0:o.width)??250}px;
            height: ${(o==null?void 0:o.height)??250}px;
        `;return K`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="min-size" style=${h}>
                <div class="frame-constraint" style=${d}>${c}</div>
            </div>
            ${u}
        `}}),j=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,z=Object.keys,U=Array.isArray;function V(t,e){return typeof e!="object"||z(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||j.Promise||(j.Promise=Promise);const Nt=Object.getPrototypeOf,Ic={}.hasOwnProperty;function X(t,e){return Ic.call(t,e)}function ct(t,e){typeof e=="function"&&(e=e(Nt(t))),(typeof Reflect>"u"?z:Reflect.ownKeys)(e).forEach(n=>{fe(t,n,e[n])})}const vo=Object.defineProperty;function fe(t,e,n,r){vo(t,e,V(n&&X(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ze(t){return{from:function(e){return t.prototype=Object.create(e.prototype),fe(t.prototype,"constructor",t),{extend:ct.bind(null,t.prototype)}}}}const Bc=Object.getOwnPropertyDescriptor;function is(t,e){let n;return Bc(t,e)||(n=Nt(t))&&is(n,e)}const Fc=[].slice;function Sn(t,e,n){return Fc.call(t,e,n)}function wo(t,e){return e(t)}function vt(t){if(!t)throw new Error("Assertion Failed")}function bo(t){j.setImmediate?setImmediate(t):setTimeout(t,0)}function _o(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function me(t,e){if(X(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=me(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:me(a,e.substr(o+1))}}function te(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){vt(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)te(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?U(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&X(t,o)||(l=t[o]={}),te(l,a,n)}}else n===void 0?U(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function So(t){var e={};for(var n in t)X(t,n)&&(e[n]=t[n]);return e}const Hc=[].concat;function xo(t){return Hc.apply([],t)}const Eo="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(xo([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>j[t]),Kc=Eo.map(t=>j[t]);_o(Eo,t=>[t,!0]);let ye=null;function Vt(t){ye=typeof WeakMap<"u"&&new WeakMap;const e=gr(t);return ye=null,e}function gr(t){if(!t||typeof t!="object")return t;let e=ye&&ye.get(t);if(e)return e;if(U(t)){e=[],ye&&ye.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(gr(t[n]))}else if(Kc.indexOf(t.constructor)>=0)e=t;else{const i=Nt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),ye&&ye.set(t,e),t)X(t,s)&&(e[s]=gr(t[s]))}return e}const{toString:Uc}={};function yr(t){return Uc.call(t).slice(8,-1)}const vr=typeof Symbol<"u"?Symbol.iterator:"@@iterator",qc=typeof vr=="symbol"?function(t){var e;return t!=null&&(e=t[vr])&&e.apply(t)}:function(){return null},Ge={};function de(t){var e,n,r,s;if(arguments.length===1){if(U(t))return t.slice();if(this===Ge&&typeof t=="string")return[t];if(s=qc(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const os=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function $o(t,e){oe=t,Ao=e}var Ao=()=>!0;const Wc=!new Error("").stack;function Fe(){if(Wc)try{throw Fe.arguments,new Error}catch(t){return t}return new Error}function wr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(Ao).map(r=>`
`+r).join("")):""}var Co=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],as=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Co),Vc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function et(t,e){this._e=Fe(),this.name=t,this.message=e}function Po(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function xn(t,e,n,r){this._e=Fe(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=Po(t,e)}function $t(t,e){this._e=Fe(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=Po(t,e)}Ze(et).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+wr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ze(xn).from(et),Ze($t).from(et);var ls=as.reduce((t,e)=>(t[e]=e+"Error",t),{});const Jc=et;var C=as.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Fe(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Vc[e]||n,this.inner=null)}return Ze(r).from(Jc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Qs=Co.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),dn=as.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function O(){}function Rt(t){return t}function Gc(t,e){return t==null||t===Rt?e:function(n){return e(t(n))}}function Ie(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Yc(t,e){return t===O?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Ie(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Ie(s,this.onerror):s),i!==void 0?i:n}}function Qc(t,e){return t===O?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Ie(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Ie(r,this.onerror):r)}}function Xc(t,e){return t===O?e:function(n){var r=t.apply(this,arguments);V(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Ie(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Ie(i,this.onerror):i),r===void 0?o===void 0?void 0:o:V(r,o)}}function Zc(t,e){return t===O?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function cs(t,e){return t===O?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}dn.ModifyError=xn,dn.DexieError=et,dn.BulkError=$t;var zt={};const[br,En,_r]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,Nt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,Nt(e),t]})(),To=En&&En.then,hn=br&&br.constructor,us=!!_r;var Sr=!1,eu=_r?()=>{_r.then(en)}:j.setImmediate?setImmediate.bind(null,en):j.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{en(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(en,0)},At=function(t,e){wt.push([t,e]),$n&&(eu(),$n=!1)},xr=!0,$n=!0,De=[],fn=[],Er=null,$r=Rt,tt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Zs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Zs(t[0],t[1])}catch{}})}},A=tt,wt=[],Ne=0,mn=[];function x(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=O,this._lib=!1;var e=this._PSD=A;if(oe&&(this._stackHolder=Fe(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==zt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Cr(this,this._value))}this._state=null,this._value=null,++e.ref,Oo(this,t)}const Ar={get:function(){var t=A,e=An;function n(r,s){var i=!t.global&&(t!==A||e!==An);const o=i&&!pe();var a=new x((l,c)=>{ds(this,new ko(Cn(r,t,i,o),Cn(s,t,i,o),l,c,t))});return oe&&Do(a,this),a}return n.prototype=zt,n},set:function(t){fe(this,"then",t&&t.prototype===zt?Ar:{get:function(){return t},set:Ar.set})}};function ko(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function Oo(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Jt();n&&typeof n.then=="function"?Oo(t,(s,i)=>{n instanceof x?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,Mo(t)),r&&Gt()}},Cr.bind(null,t))}catch(n){Cr(t,n)}}function Cr(t,e){if(fn.push(e),t._state===null){var n=t._lib&&Jt();e=$r(e),t._state=!1,t._value=e,oe&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=is(e,"stack");e._promise=t,fe(e,"stack",{get:()=>Sr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){De.some(s=>s._value===r._value)||De.push(r)}(t),Mo(t),n&&Gt()}}function Mo(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)ds(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ne===0&&(++Ne,At(()=>{--Ne==0&&hs()},[]))}function ds(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ne,At(tu,[n,t,e])}else t._listeners.push(e)}function tu(t,e,n){try{Er=e;var r,s=e._value;e._state?r=t(s):(fn.length&&(fn=[]),r=t(s),fn.indexOf(s)===-1&&function(i){for(var o=De.length;o;)if(De[--o]._value===i._value)return void De.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Er=null,--Ne==0&&hs(),--n.psd.ref||n.psd.finalize()}}function jo(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=wr(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return oe&&((r=wr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&jo(t._prev,e,n)),e}function Do(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function en(){Jt()&&Gt()}function Jt(){var t=xr;return xr=!1,$n=!1,t}function Gt(){var t,e,n;do for(;wt.length>0;)for(t=wt,wt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(wt.length>0);xr=!0,$n=!0}function hs(){var t=De;De=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=mn.slice(0),n=e.length;n;)e[--n]()}function tn(t){return new x(zt,!1,t)}function D(t,e){var n=A;return function(){var r=Jt(),s=A;try{return xe(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{xe(s,!1),r&&Gt()}}}ct(x.prototype,{then:Ar,_then:function(t,e){ds(this,new ko(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):tn(r)):this.then(null,r=>r&&r.name===e?n(r):tn(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),tn(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Sr=!0;var t=jo(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Sr=!1}}},timeout:function(t,e){return t<1/0?new x((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&fe(x.prototype,Symbol.toStringTag,"Dexie.Promise"),tt.env=No(),ct(x,{all:function(){var t=de.apply(null,arguments).map(nn);return new x(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>x.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof x)return t;if(t&&typeof t.then=="function")return new x((n,r)=>{t.then(n,r)});var e=new x(zt,!0,t);return Do(e,Er),e},reject:tn,race:function(){var t=de.apply(null,arguments).map(nn);return new x((e,n)=>{t.map(r=>x.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>An},newPSD:Se,usePSD:ft,scheduler:{get:()=>At,set:t=>{At=t}},rejectionMapper:{get:()=>$r,set:t=>{$r=t}},follow:(t,e)=>new x((n,r)=>Se((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Ie(function(){(function(a){function l(){a(),mn.splice(mn.indexOf(l),1)}mn.push(l),++Ne,At(()=>{--Ne==0&&hs()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),hn&&(hn.allSettled&&fe(x,"allSettled",function(){const t=de.apply(null,arguments).map(nn);return new x(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>x.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),hn.any&&typeof AggregateError<"u"&&fe(x,"any",function(){const t=de.apply(null,arguments).map(nn);return new x((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>x.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const H={awaits:0,echoes:0,id:0};var nu=0,pn=[],Xn=0,An=0,ru=0;function Se(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++ru;var o=tt.env;i.env=us?{Promise:x,PromiseProp:{value:x,configurable:!0,writable:!0},all:x.all,race:x.race,allSettled:x.allSettled,any:x.any,resolve:x.resolve,reject:x.reject,nthen:Xs(o.nthen,i),gthen:Xs(o.gthen,i)}:{},e&&V(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=ft(i,t,n,r);return i.ref===0&&i.finalize(),a}function ht(){return H.id||(H.id=++nu),++H.awaits,H.echoes+=100,H.id}function pe(){return!!H.awaits&&(--H.awaits==0&&(H.id=0),H.echoes=100*H.awaits,!0)}function nn(t){return H.echoes&&t&&t.constructor===hn?(ht(),t.then(e=>(pe(),e),e=>(pe(),L(e)))):t}function su(t){++An,H.echoes&&--H.echoes!=0||(H.echoes=H.id=0),pn.push(A),xe(t,!0)}function iu(){var t=pn[pn.length-1];pn.pop(),xe(t,!1)}function xe(t,e){var n=A;if((e?!H.echoes||Xn++&&t===A:!Xn||--Xn&&t===A)||Ro(e?su.bind(null,t):iu),t!==A&&(A=t,n===tt&&(tt.env=No()),us)){var r=tt.env.Promise,s=t.env;En.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(j,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function No(){var t=j.Promise;return us?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(j,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:En.then,gthen:t.prototype.then}:{}}function ft(t,e,n,r,s){var i=A;try{return xe(t,!0),e(n,r,s)}finally{xe(i,!1)}}function Ro(t){To.call(br,t)}function Cn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&ht(),xe(e,!0);try{return t.apply(this,arguments)}finally{xe(s,!1),r&&Ro(pe)}}}function Xs(t,e){return function(n,r){return t.call(this,Cn(n,e),Cn(r,e))}}(""+To).indexOf("[native code]")===-1&&(ht=pe=O);function Zs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(j.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),V(r,s)):j.CustomEvent&&V(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&j.dispatchEvent&&(dispatchEvent(r),!j.PromiseRejectionEvent&&j.onunhandledrejection))try{j.onunhandledrejection(r)}catch{}oe&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var L=x.reject;function Pr(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===ls.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Pr(t,e,n,r))):L(i)}return s._promise(e,(i,o)=>Se(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return L(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return L(new C.DatabaseClosed);t.open().catch(O)}return t._state.dbReadyPromise.then(()=>Pr(t,e,n,r))}const je=String.fromCharCode(65535),ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ct=[],In=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),ou=In,au=In,zo=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Be(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Lo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function rn(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Vt(e))[t],e)}class lu{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,c,u){if(!u.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(u.idbtrans,u)}const a=Jt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):Se(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Pr(this.db,e,[this.name],o)}finally{a&&Gt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(U(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=z(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(c=>c.compound&&n.every(u=>c.keyPath.indexOf(u)>=0)&&c.keyPath.every(u=>n.indexOf(u)>=0))[0];if(r&&this.db._maxKey!==je)return this.where(r.name).equals(r.keyPath.map(c=>e[c]));!r&&oe&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(c,u){try{return i.cmp(c,u)===0}catch{return!1}}const[a,l]=n.reduce(([c,u],d)=>{const h=s[d],f=e[d];return[c||h,c||!h?Be(u,h&&h.multi?y=>{const m=me(y,d);return U(m)&&m.some(v=>o(f,v))}:y=>o(f,me(y,d))):u]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,U(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(X(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){V(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=rn(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||U(e))return this.where(":id").equals(e).modify(n);{const r=me(e,this.schema.primKey.keyPath);if(r===void 0)return L(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?z(n).forEach(s=>{te(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=rn(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?x.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Lo})).then(e=>e.numFailures?x.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(rn(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new $t(`${this.name}.bulkAdd(): ${d} of ${c} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(rn(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new $t(`${this.name}.bulkPut(): ${d} of ${c} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new $t(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function Pt(t){var e={},n=function(a,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return e[a].subscribe.apply(null,u),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,c){if(typeof a=="object")return o(a);l||(l=Zc),c||(c=O);var u={subscribers:[],fire:c,subscribe:function(d){u.subscribers.indexOf(d)===-1&&(u.subscribers.push(d),u.fire=l(u.fire,d))},unsubscribe:function(d){u.subscribers=u.subscribers.filter(function(h){return h!==d}),u.fire=u.subscribers.reduce(l,c)}};return e[a]=n[a]=u,u}function o(a){z(a).forEach(function(l){var c=a[l];if(U(c))i(l,a[l][0],a[l][1]);else{if(c!=="asap")throw new C.InvalidArgument("Invalid event config");var u=i(l,Rt,function(){for(var d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];u.subscribers.forEach(function(f){bo(function(){f.apply(null,h)})})})}})}}function gt(t,e){return Ze(e).from({prototype:t}),e}function qe(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Zn(t,e){t.filter=Be(t.filter,e)}function er(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Be(r(),e()):e,t.justLimit=n&&!r}function gn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function ei(t,e,n){const r=gn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function sn(t,e,n,r){const s=t.replayFilter?Be(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,c)=>{if(!s||s(l,c,h=>l.stop(h),h=>l.fail(h))){var u=l.primaryKey,d=""+u;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(u)),X(i,d)||(i[d]=!0,e(a,l,c))}};return Promise.all([t.or._iterate(o,n),ti(ei(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return ti(ei(t,r,n),Be(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function ti(t,e,n,r){var s=D(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=O},a=>{i.fail(a),o=O})||s(i.value,i,a=>o=a),o()})})}function W(t,e){try{const n=ni(t),r=ni(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c)if(s[c]!==i[c])return s[c]<i[c]?-1:1;return o===a?0:o<a?-1:1}(ri(t),ri(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c){const u=W(s[c],i[c]);if(u!==0)return u}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function ni(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=yr(t);return n==="ArrayBuffer"?"binary":n}function ri(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class cu{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,L.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,L.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Be(n.algorithm,e)}_iterate(e,n){return sn(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&V(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>sn(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(qe(r,!0))return s.count({trans:n,query:{index:gn(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return sn(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(c,u){return u?o(c[r[u]],u-1):c[s]}var a=this._ctx.dir==="next"?1:-1;function l(c,u){var d=o(c,i),h=o(u,i);return d<h?-a:d>h?a:0}return this.toArray(function(c){return c.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&qe(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=gn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return sn(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,qe(n)?er(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):er(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),er(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Zn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Zn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Be(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&qe(n,!0)&&n.limit>0)return this._read(s=>{var i=gn(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Zn(this._ctx,function(s){var i=s.primaryKey.toString(),o=X(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=z(e),o=i.length;s=function(m){for(var v=!1,g=0;g<o;++g){var p=i[g],w=e[p];me(m,p)!==w&&(te(m,p,w),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:c}=a.schema.primaryKey,u=this.db._options.modifyChunkSize||200,d=[];let h=0;const f=[],y=(m,v)=>{const{failures:g,numFailures:p}=v;h+=m-p;for(let w of z(g))d.push(g[w])};return this.clone().primaryKeys().then(m=>{const v=g=>{const p=Math.min(u,m.length-g);return a.getMany({trans:r,keys:m.slice(g,g+p),cache:"immutable"}).then(w=>{const $=[],S=[],b=l?[]:null,_=[];for(let E=0;E<p;++E){const M=w[E],N={value:Vt(M),primKey:m[g+E]};s.call(N,N.value,N)!==!1&&(N.value==null?_.push(m[g+E]):l||W(c(M),c(N.value))===0?(S.push(N.value),l&&b.push(m[g+E])):(_.push(m[g+E]),$.push(N.value)))}const P=qe(n)&&n.limit===1/0&&(typeof e!="function"||e===tr)&&{index:n.index,range:n.range};return Promise.resolve($.length>0&&a.mutate({trans:r,type:"add",values:$}).then(E=>{for(let M in E.failures)_.splice(parseInt(M),1);y($.length,E)})).then(()=>(S.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:b,values:S,criteria:P,changeSpec:typeof e!="function"&&e}).then(E=>y(S.length,E))).then(()=>(_.length>0||P&&e===tr)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then(E=>y(_.length,E))).then(()=>m.length>g+p&&v(g+u))})};return v(0).then(()=>{if(d.length>0)throw new xn("Error modifying one or more objects",d,h,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return qe(e)&&(e.isPrimKey&&!au||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:c,numFailures:u})=>{if(u)throw new xn("Could not delete some values",Object.keys(a).map(d=>a[d]),o-u);return o-u}))}):this.modify(tr)}}const tr=(t,e)=>e.value=null;function uu(t,e){return t<e?-1:t===e?0:1}function du(t,e){return t>e?-1:t===e?0:1}function Y(t,e,n){var r=t instanceof Bo?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function We(t){return new t.Collection(t,()=>Io("")).limit(0)}function hu(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var c=e[l];if(c!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],c)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function on(t,e,n,r){var s,i,o,a,l,c,u,d=n.length;if(!n.every(m=>typeof m=="string"))return Y(t,"String expected.");function h(m){s=function(g){return g==="next"?p=>p.toUpperCase():p=>p.toLowerCase()}(m),i=function(g){return g==="next"?p=>p.toLowerCase():p=>p.toUpperCase()}(m),o=m==="next"?uu:du;var v=n.map(function(g){return{lower:i(g),upper:s(g)}}).sort(function(g,p){return o(g.lower,p.lower)});a=v.map(function(g){return g.upper}),l=v.map(function(g){return g.lower}),c=m,u=m==="next"?"":r}h("next");var f=new t.Collection(t,()=>ge(a[0],l[d-1]+r));f._ondirectionchange=function(m){h(m)};var y=0;return f._addAlgorithm(function(m,v,g){var p=m.key;if(typeof p!="string")return!1;var w=i(p);if(e(w,l,y))return!0;for(var $=null,S=y;S<d;++S){var b=hu(p,w,a[S],l[S],o,c);b===null&&$===null?y=S+1:($===null||o($,b)>0)&&($=b)}return v($!==null?function(){m.continue($+u)}:g),!1}),f}function ge(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function Io(t){return{type:1,lower:t,upper:t}}class Bo{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?We(this):new this.Collection(this,()=>ge(e,n,!r,!s))}catch{return Y(this,ae)}}equals(e){return e==null?Y(this,ae):new this.Collection(this,()=>Io(e))}above(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(e,void 0,!0))}aboveOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(e,void 0,!1))}below(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(void 0,e,!1,!0))}belowOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(void 0,e))}startsWith(e){return typeof e!="string"?Y(this,"String expected."):this.between(e,e+je,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):on(this,(n,r)=>n.indexOf(r[0])===0,[e],je)}equalsIgnoreCase(e){return on(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=de.apply(Ge,arguments);return e.length===0?We(this):on(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=de.apply(Ge,arguments);return e.length===0?We(this):on(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,je)}anyOf(){const e=de.apply(Ge,arguments);let n=this._cmp;try{e.sort(n)}catch{return Y(this,ae)}if(e.length===0)return We(this);const r=new this.Collection(this,()=>ge(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=de.apply(Ge,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Y(this,ae)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return We(this);if(!e.every(p=>p[0]!==void 0&&p[1]!==void 0&&s(p[0],p[1])<=0))return Y(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,c=n&&n.includeUppers===!0;let u,d=s;function h(p,w){return d(p[0],w[0])}try{u=e.reduce(function(p,w){let $=0,S=p.length;for(;$<S;++$){const b=p[$];if(r(w[0],b[1])<0&&r(w[1],b[0])>0){b[0]=o(b[0],w[0]),b[1]=a(b[1],w[1]);break}}return $===S&&p.push(w),p},[]),u.sort(h)}catch{return Y(this,ae)}let f=0;const y=c?p=>s(p,u[f][1])>0:p=>s(p,u[f][1])>=0,m=l?p=>i(p,u[f][0])>0:p=>i(p,u[f][0])>=0;let v=y;const g=new this.Collection(this,()=>ge(u[0][0],u[u.length-1][1],!l,!c));return g._ondirectionchange=p=>{p==="next"?(v=y,d=s):(v=m,d=i),u.sort(h)},g._addAlgorithm((p,w,$)=>{for(var S=p.key;v(S);)if(++f,f===u.length)return w($),!1;return!!function(b){return!y(b)&&!m(b)}(S)||(this._cmp(S,u[f][1])===0||this._cmp(S,u[f][0])===0||w(()=>{d===s?p.continue(u[f][0]):p.continue(u[f][1])}),!1)}),g}startsWithAnyOf(){const e=de.apply(Ge,arguments);return e.every(n=>typeof n=="string")?e.length===0?We(this):this.inAnyRange(e.map(n=>[n,n+je])):Y(this,"startsWithAnyOf() only works with strings")}}function ne(t){return D(function(e){return Lt(e),t(e.target.error),!1})}function Lt(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const Ee=Pt(null,"storagemutated");class fu{_lock(){return vt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(vt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{ft(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(vt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return vt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=D(s=>{Lt(s),this._reject(e.error)}),e.onabort=D(s=>{Lt(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=D(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&Ee.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return L(new C.ReadOnly("Transaction is readonly"));if(!this.active)return L(new C.TransactionInactive);if(this._locked())return new x((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return Se(()=>{var i=new x((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new x((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=x.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new x((o,a)=>{r.then(l=>n._waitingQueue.push(D(o.bind(null,l))),l=>n._waitingQueue.push(D(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(X(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Tr(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Fo(e)}}function Fo(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Ho(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:_o(n,r=>[r.name,r])}}let It=t=>{try{return t.only([[]]),It=()=>[[]],[[]]}catch{return It=()=>je,je}};function kr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>me(n,e)}(t):e=>me(e,t)}function si(t){return[].slice.call(t)}let mu=0;function Tt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function pu(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:c,upper:u,lowerOpen:d,upperOpen:h}=l;return c===void 0?u===void 0?null:e.upperBound(u,!!h):u===void 0?e.lowerBound(c,!!d):e.bound(c,u,!!d,!!h)}const{schema:s,hasGetAll:i}=function(l,c){const u=si(l.objectStoreNames);return{schema:{name:l.name,tables:u.map(d=>c.objectStore(d)).map(d=>{const{keyPath:h,autoIncrement:f}=d,y=U(h),m=h==null,v={},g={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:h,autoIncrement:f,unique:!0,extractKey:kr(h)},indexes:si(d.indexNames).map(p=>d.index(p)).map(p=>{const{name:w,unique:$,multiEntry:S,keyPath:b}=p,_={name:w,compound:U(b),keyPath:b,unique:$,multiEntry:S,extractKey:kr(b)};return v[Tt(b)]=_,_}),getIndexByKeyPath:p=>v[Tt(p)]};return v[":id"]=g.primaryKey,h!=null&&(v[Tt(h)]=g.primaryKey),g})},hasGetAll:u.length>0&&"getAll"in c.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(c){const u=c.name;return{name:u,schema:c,mutate:function({trans:d,type:h,keys:f,values:y,range:m}){return new Promise((v,g)=>{v=D(v);const p=d.objectStore(u),w=p.keyPath==null,$=h==="put"||h==="add";if(!$&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:S}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(S===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let b;const _=[],P=[];let E=0;const M=q=>{++E,Lt(q)};if(h==="deleteRange"){if(m.type===4)return v({numFailures:E,failures:P,results:[],lastResult:void 0});m.type===3?_.push(b=p.clear()):_.push(b=p.delete(r(m)))}else{const[q,B]=$?w?[y,f]:[y,null]:[f,null];if($)for(let R=0;R<S;++R)_.push(b=B&&B[R]!==void 0?p[h](q[R],B[R]):p[h](q[R])),b.onerror=M;else for(let R=0;R<S;++R)_.push(b=p[h](q[R])),b.onerror=M}const N=q=>{const B=q.target.result;_.forEach((R,He)=>R.error!=null&&(P[He]=R.error)),v({numFailures:E,failures:P,results:h==="delete"?f:_.map(R=>R.result),lastResult:B})};b.onerror=q=>{M(q),N(q)},b.onsuccess=N})},getMany:({trans:d,keys:h})=>new Promise((f,y)=>{f=D(f);const m=d.objectStore(u),v=h.length,g=new Array(v);let p,w=0,$=0;const S=_=>{const P=_.target;g[P._pos]=P.result,++$===w&&f(g)},b=ne(y);for(let _=0;_<v;++_)h[_]!=null&&(p=m.get(h[_]),p._pos=_,p.onsuccess=S,p.onerror=b,++w);w===0&&f(g)}),get:({trans:d,key:h})=>new Promise((f,y)=>{f=D(f);const m=d.objectStore(u).get(h);m.onsuccess=v=>f(v.target.result),m.onerror=ne(y)}),query:function(d){return h=>new Promise((f,y)=>{f=D(f);const{trans:m,values:v,limit:g,query:p}=h,w=g===1/0?void 0:g,{index:$,range:S}=p,b=m.objectStore(u),_=$.isPrimaryKey?b:b.index($.name),P=r(S);if(g===0)return f({result:[]});if(d){const E=v?_.getAll(P,w):_.getAllKeys(P,w);E.onsuccess=M=>f({result:M.target.result}),E.onerror=ne(y)}else{let E=0;const M=v||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),N=[];M.onsuccess=q=>{const B=M.result;return B?(N.push(v?B.value:B.primaryKey),++E===g?f({result:N}):void B.continue()):f({result:N})},M.onerror=ne(y)}})}(i),openCursor:function({trans:d,values:h,query:f,reverse:y,unique:m}){return new Promise((v,g)=>{v=D(v);const{index:p,range:w}=f,$=d.objectStore(u),S=p.isPrimaryKey?$:$.index(p.name),b=y?m?"prevunique":"prev":m?"nextunique":"next",_=h||!("openKeyCursor"in S)?S.openCursor(r(w),b):S.openKeyCursor(r(w),b);_.onerror=ne(g),_.onsuccess=D(P=>{const E=_.result;if(!E)return void v(null);E.___id=++mu,E.done=!1;const M=E.continue.bind(E);let N=E.continuePrimaryKey;N&&(N=N.bind(E));const q=E.advance.bind(E),B=()=>{throw new Error("Cursor not stopped")};E.trans=d,E.stop=E.continue=E.continuePrimaryKey=E.advance=()=>{throw new Error("Cursor not started")},E.fail=D(g),E.next=function(){let R=1;return this.start(()=>R--?this.continue():this.stop()).then(()=>this)},E.start=R=>{const He=new Promise((J,Ae)=>{J=D(J),_.onerror=ne(Ae),E.fail=Ae,E.stop=mt=>{E.stop=E.continue=E.continuePrimaryKey=E.advance=B,J(mt)}}),Ke=()=>{if(_.result)try{R()}catch(J){E.fail(J)}else E.done=!0,E.start=()=>{throw new Error("Cursor behind last entry")},E.stop()};return _.onsuccess=D(J=>{_.onsuccess=Ke,Ke()}),E.continue=M,E.continuePrimaryKey=N,E.advance=q,Ke(),He},v(E)},g)})},count({query:d,trans:h}){const{index:f,range:y}=d;return new Promise((m,v)=>{const g=h.objectStore(u),p=f.isPrimaryKey?g:g.index(f.name),w=r(y),$=w?p.count(w):p.count();$.onsuccess=D(S=>m(S.target.result)),$.onerror=ne(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:It(e),schema:s}}function Or({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(u,d){return d.reduce((h,{create:f})=>({...h,...f(h)}),u)}(pu(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function Pn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=is(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?fe(o,s,{get(){return this.table(s)},set(l){vo(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function Mr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function gu(t,e){return t._cfg.version-e._cfg.version}function yu(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;Se(()=>{A.trans=i,A.transless=a,e===0?(z(s).forEach(l=>{nr(n,l,s[l].primKey,s[l].indexes)}),Or(t,n),x.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},c,u,d){const h=[],f=l._versions;let y=l._dbSchema=Dr(l,l.idbdb,d),m=!1;function v(){return h.length?x.resolve(h.shift()(u.idbtrans)).then(v):x.resolve()}return f.filter(g=>g._cfg.version>=c).forEach(g=>{h.push(()=>{const p=y,w=g._cfg.dbschema;Nr(l,p,d),Nr(l,w,d),y=l._dbSchema=w;const $=Ko(p,w);$.add.forEach(b=>{nr(d,b[0],b[1].primKey,b[1].indexes)}),$.change.forEach(b=>{if(b.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=d.objectStore(b.name);b.add.forEach(P=>jr(_,P)),b.change.forEach(P=>{_.deleteIndex(P.name),jr(_,P)}),b.del.forEach(P=>_.deleteIndex(P))}});const S=g._cfg.contentUpgrade;if(S&&g._cfg.version>c){Or(l,d),u._memoizedTables={},m=!0;let b=So(w);$.del.forEach(M=>{b[M]=p[M]}),Mr(l,[l.Transaction.prototype]),Pn(l,[l.Transaction.prototype],z(b),b),u.schema=b;const _=os(S);let P;_&&ht();const E=x.follow(()=>{if(P=S(u),P&&_){var M=pe.bind(null,null);P.then(M,M)}});return P&&typeof P.then=="function"?x.resolve(P):E.then(()=>P)}}),h.push(p=>{(!m||!ou)&&function(w,$){[].slice.call($.db.objectStoreNames).forEach(S=>w[S]==null&&$.db.deleteObjectStore(S))}(g._cfg.dbschema,p),Mr(l,[l.Transaction.prototype]),Pn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),u.schema=l._dbSchema})}),v().then(()=>{var g,p;p=d,z(g=y).forEach(w=>{p.db.objectStoreNames.contains(w)||nr(p,w,g[w].primKey,g[w].indexes)})})}(t,e,i,n).catch(o)})}function Ko(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!In)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let c;for(c in a)l[c]||o.del.push(c);for(c in l){const u=a[c],d=l[c];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function nr(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>jr(s,i)),s}function jr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Dr(t,e,n){const r={};return Sn(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Tr(Fo(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let u=0;u<i.indexNames.length;++u){const d=i.index(i.indexNames[u]);o=d.keyPath;var c=Tr(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(c)}r[s]=Ho(s,a,l)}),r}function Nr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+Sn(c).join("+")+"]";if(e[i]){const d=e[i].idxByName[u];d&&(d.name=l,delete e[i].idxByName[u],e[i].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&j.WorkerGlobalScope&&j instanceof j.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class vu{_parseStoresSpec(e,n){z(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),c=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Tr(l,c||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),U(c),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Ho(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?V(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{V(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,Mr(n,[n._allTables,n,n.Transaction.prototype]),Pn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],z(i),i),n._storeNames=z(i),this}upgrade(e){return this._cfg.contentUpgrade=cs(this._cfg.contentUpgrade||O,e),this}}function fs(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Re("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function ms(t){return t&&typeof t.databases=="function"}function Rr(t){return Se(function(){return A.letThrough=!0,t()})}function wu(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function bu(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?L(e.dbOpenError):t);oe&&(e.openCanceller._stackHolder=Fe()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return x.race([r,(typeof navigator>"u"?x.resolve():wu()).then(()=>new x((l,c)=>{if(s(),!n)throw new C.MissingAPI;const u=t.name,d=e.autoSchema?n.open(u):n.open(u,Math.round(10*t.verno));if(!d)throw new C.MissingAPI;d.onerror=ne(c),d.onblocked=D(t._fireOnBlocked),d.onupgradeneeded=D(h=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){d.onerror=Lt,o.abort(),d.result.close();const y=n.deleteDatabase(u);y.onsuccess=y.onerror=D(()=>{c(new C.NoSuchDatabase(`Database ${u} doesnt exist`))})}else{o.onerror=ne(c);var f=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=f<1,t._novip.idbdb=d.result,yu(t,f/10,o,c)}},c),d.onsuccess=D(()=>{o=null;const h=t._novip.idbdb=d.result,f=Sn(h.objectStoreNames);if(f.length>0)try{const m=h.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},g,p){v.verno=g.version/10;const w=v._dbSchema=Dr(0,g,p);v._storeNames=Sn(g.objectStoreNames,0),Pn(v,[v._allTables],z(w),w)}(t,h,m):(Nr(t,t._dbSchema,m),function(v,g){const p=Ko(Dr(0,v.idbdb,g),v._dbSchema);return!(p.add.length||p.change.some(w=>w.add.length||w.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Or(t,m)}catch{}var y;Ct.push(t),h.onversionchange=D(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),h.onclose=D(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},g){!ms(m)&&g!=="__dbnames"&&fs(m,v).put({name:g}).catch(O)}(t._deps,u),l()},c)}))]).then(()=>(s(),e.onReadyBeingFired=[],x.resolve(Rr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(cs,O);return e.onReadyBeingFired=[],x.resolve(Rr(()=>c(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),L(l)}).finally(()=>{e.openComplete=!0,i()})}function zr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):U(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function _u(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=xo(s);return[t,i,n]}function Uo(t,e,n,r,s){return x.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===ls.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Uo(t,e,n,null,s))):L(d)}const l=os(s);let c;l&&ht();const u=x.follow(()=>{if(c=s.call(o,o),c)if(l){var d=pe.bind(null,null);c.then(d,d)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=zr(c))},a);return(c&&typeof c.then=="function"?x.resolve(c).then(d=>o.active?d:L(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):u.then(()=>c)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),L(d)))})}function an(t,e,n){const r=U(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Su={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(u,d,h){const f=Tt(u),y=s[f]=s[f]||[],m=u==null?0:typeof u=="string"?1:u.length,v=d>0,g={...h,isVirtual:v,keyTail:d,keyLength:m,extractKey:kr(u),unique:!v&&h.unique};return y.push(g),g.isPrimaryKey||i.push(g),m>1&&o(m===2?u[0]:u.slice(0,m-1),d+1,h),y.sort((p,w)=>p.keyTail-w.keyTail),g}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const u of r.indexes)o(u.keyPath,0,u);function l(u){const d=u.query.index;return d.isVirtual?{...u,query:{index:d,range:(h=u.query.range,f=d.keyTail,{type:h.type===1?2:h.type,lower:an(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:an(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:u;var h,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(u){const d=s[Tt(u)];return d&&d[0]}},count:u=>n.count(l(u)),query:u=>n.query(l(u)),openCursor(u){const{keyTail:d,isVirtual:h,keyLength:f}=u.query.index;return h?n.openCursor(l(u)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(g){g!=null?m.continue(an(g,u.reverse?t.MAX_KEY:t.MIN_KEY,d)):u.unique?m.continue(m.key.slice(0,f).concat(u.reverse?t.MIN_KEY:t.MAX_KEY,d)):m.continue()}},continuePrimaryKey:{value(g,p){m.continuePrimaryKey(an(g,t.MAX_KEY,d),p)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const g=m.key;return f===1?g[0]:g.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(u)}}}}}};function ps(t,e,n,r){return n=n||{},r=r||"",z(t).forEach(s=>{if(X(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=yr(i);a!==yr(o)?n[r+s]=e[s]:a==="Object"?ps(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),z(e).forEach(s=>{X(t,s)||(n[r+s]=e[s])}),n}const xu={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:c}=o.table(e).hook;switch(i.type){case"add":if(l.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"put":if(l.fire===O&&c.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"delete":if(a.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"deleteRange":if(a.fire===O)break;return o._promise("readwrite",()=>function(h){return d(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function u(h){const f=A.trans,y=h.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,h);if(!y)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:y}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(m,v,g){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:g,cache:"immutable"})}(n,h,y).then(m=>{const v=y.map((g,p)=>{const w=m[p],$={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call($,g,w,f);else if(h.type==="add"||w===void 0){const S=l.fire.call($,g,h.values[p],f);g==null&&S!=null&&(g=S,h.keys[p]=g,r.outbound||te(h.values[p],r.keyPath,g))}else{const S=ps(w,h.values[p]),b=c.fire.call($,S,g,w,f);if(b){const _=h.values[p];Object.keys(b).forEach(P=>{X(_,P)?_[P]=b[P]:te(_,P,b[P])})}}return $});return n.mutate(h).then(({failures:g,results:p,numFailures:w,lastResult:$})=>{for(let S=0;S<y.length;++S){const b=p?p[S]:y[S],_=v[S];b==null?_.onerror&&_.onerror(g[S]):_.onsuccess&&_.onsuccess(h.type==="put"&&m[S]?h.values[S]:b)}return{failures:g,results:p,numFailures:w,lastResult:$}}).catch(g=>(v.forEach(p=>p.onerror&&p.onerror(g)),Promise.reject(g)))})}function d(h,f,y){return n.query({trans:h,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>u({type:"delete",keys:m,trans:h}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:d(h,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function qo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)W(e.keys[s],t[i])===0&&(r.push(n?Vt(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const Eu={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=qo(r.keys,r.trans._cache,r.cache==="clone");return s?x.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Vt(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function gs(t){return!("from"in t)}const le=function(t,e){if(!this){const n=new le;return t&&"d"in t&&V(n,t),n}V(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Bt(t,e,n){const r=W(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(gs(t))return V(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(W(n,t.from)<0)return s?Bt(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},ii(t);if(W(e,t.to)>0)return i?Bt(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},ii(t);W(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),W(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&Tn(t,s),i&&o&&Tn(t,i)}function Tn(t,e){gs(e)||function n(r,{from:s,to:i,l:o,r:a}){Bt(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function $u(t,e){const n=Lr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=Lr(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(W(a.from,s.to)<=0&&W(a.to,s.from)>=0)return!0;W(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function Lr(t){let e=gs(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&W(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||W(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function ii(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=oi(o)}t.d=oi(t)}function oi({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}ct(le.prototype,{add(t){return Tn(this,t),this},addKey(t){return Bt(this,t,t),this},addKeys(t){return t.forEach(e=>Bt(this,e,e)),this},[vr](){return Lr(this)}});const Au={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new le(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,c={...s,mutate:h=>{const f=h.trans,y=f.mutatedParts||(f.mutatedParts={}),m=b=>{const _=`idb://${e}/${r}/${b}`;return y[_]||(y[_]=new le)},v=m(""),g=m(":dels"),{type:p}=h;let[w,$]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const S=h.trans._cache;return s.mutate(h).then(b=>{if(U(w)){p!=="delete"&&(w=b.results),v.addKeys(w);const _=qo(w,S);_||p==="add"||g.addKeys(w),(_||$)&&function(P,E,M,N){function q(B){const R=P(B.name||"");function He(J){return J!=null?B.extractKey(J):null}const Ke=J=>B.multiEntry&&U(J)?J.forEach(Ae=>R.addKey(Ae)):R.addKey(J);(M||N).forEach((J,Ae)=>{const mt=M&&He(M[Ae]),Fn=N&&He(N[Ae]);W(mt,Fn)!==0&&(mt!=null&&Ke(mt),Fn!=null&&Ke(Fn))})}E.indexes.forEach(q)}(m,i,_,$)}else if(w){const _={from:w.lower,to:w.upper};g.add(_),v.add(_)}else v.add(n),g.add(n),i.indexes.forEach(_=>m(_.name).add(n));return b})}},u=({query:{index:h,range:f}})=>{var y,m;return[h,new le((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},d={get:h=>[o,new le(h.key)],getMany:h=>[o,new le().addKeys(h.keys)],count:u,query:u,openCursor:u};return z(d).forEach(h=>{c[h]=function(f){const{subscr:y}=A;if(y){const m=$=>{const S=`idb://${e}/${r}/${$}`;return y[S]||(y[S]=new le)},v=m(""),g=m(":dels"),[p,w]=d[h](f);if(m(p.name||"").add(w),!p.isPrimaryKey){if(h!=="count"){const $=h==="query"&&l&&f.values&&s.query({...f,values:!1});return s[h].apply(this,arguments).then(S=>{if(h==="query"){if(l&&f.values)return $.then(({result:_})=>(v.addKeys(_),S));const b=f.values?S.result.map(a):S.result;f.values?v.addKeys(b):g.addKeys(b)}else if(h==="openCursor"){const b=S,_=f.values;return b&&Object.create(b,{key:{get:()=>(g.addKey(b.primaryKey),b.key)},primaryKey:{get(){const P=b.primaryKey;return g.addKey(P),P}},value:{get:()=>(_&&v.addKey(b.primaryKey),b.value)}})}return S})}g.add(n)}}return s[h].apply(this,arguments)}}),c}}}};class Re{constructor(e,n){this._middlewares={},this.verno=0;const r=Re.dependencies;this._options=n={addons:Re.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:O,dbReadyPromise:null,cancelOpen:O,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new x(a=>{i.dbReadyResolve=a}),i.openCanceller=new x((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=Pt(this,"populate","blocked","versionchange","close",{ready:[cs,O]}),this.on.ready.subscribe=wo(this.on.ready.subscribe,a=>(l,c)=>{Re.vip(()=>{const u=this._state;if(u.openComplete)u.dbOpenError||x.resolve().then(l),c&&a(l);else if(u.onReadyBeingFired)u.onReadyBeingFired.push(l),c&&a(l);else{a(l);const d=this;c||a(function h(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,gt(cu.prototype,function(a,l){this.db=o;let c=Lo,u=null;if(l)try{c=l()}catch(y){u=y}const d=a._ctx,h=d.table,f=h.hook.reading.fire;this._ctx={table:h,index:d.index,isPrimKey:!d.index||h.schema.primKey.keyPath&&d.index===h.schema.primKey.name,range:c,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:u,or:d.or,valueMapper:f!==Rt?f:null}})),this.Table=function(a){return gt(lu.prototype,function(l,c,u){this.db=a,this._tx=u,this.name=l,this.schema=c,this.hook=a._allTables[l]?a._allTables[l].hook:Pt(null,{creating:[Yc,O],reading:[Gc,Rt],updating:[Xc,O],deleting:[Qc,O]})})}(this),this.Transaction=function(a){return gt(fu.prototype,function(l,c,u,d,h){this.db=a,this.mode=l,this.storeNames=c,this.schema=u,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=Pt(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new x((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),L(f)})})}(this),this.Version=function(a){return gt(vu.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return gt(Bo.prototype,function(l,c,u){this.db=a,this._ctx={table:l,index:c===":id"?null:c,or:u};const d=a._deps.indexedDB;if(!d)throw new C.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(h,f)=>d.cmp(f,h),this._max=(h,f)=>d.cmp(h,f)>0?h:f,this._min=(h,f)=>d.cmp(h,f)<0?h:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=It(n.IDBKeyRange),this._createTransaction=(a,l,c,u)=>new this.Transaction(a,l,c,this._options.chromeTransactionDurability,u),this._fireOnBlocked=a=>{this.on("blocked").fire(a),Ct.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(Su),this.use(xu),this.use(Au),this.use(Eu),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(gu),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new x((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(O)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return bu(this)}_close(){const e=this._state,n=Ct.indexOf(this);if(n>=0&&Ct.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new x(r=>{e.dbReadyResolve=r}),e.openCanceller=new x((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new x((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=D(()=>{(function({indexedDB:a,IDBKeyRange:l},c){!ms(a)&&c!=="__dbnames"&&fs(a,l).delete(c).catch(O)})(this._deps,this.name),r()}),o.onerror=ne(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return z(this._allTables).map(e=>this._allTables[e])}transaction(){const e=_u.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(c=>{var u=c instanceof this.Table?c.name:c;if(typeof u!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return u}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(c=>{if(s&&s.storeNames.indexOf(c)===-1){if(!i)throw new C.SubTransaction("Table "+c+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(c){return s?s._promise(null,(u,d)=>{d(c)}):L(c)}const l=Uo.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?ft(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!X(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Cu=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Pu{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Cu](){return this}}function Wo(t,e){return z(e).forEach(n=>{Tn(t[n]||(t[n]=new le),e[n])}),t}function Tu(t){return new Pu(e=>{const n=os(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,Ee.storagemutated.unsubscribe(u)}};e.start&&e.start(o);let a=!1,l=!1;function c(){return z(i).some(h=>s[h]&&$u(s[h],i[h]))}const u=h=>{Wo(s,h),c()&&d()},d=()=>{if(a||r)return;s={};const h={},f=function(y){n&&ht();const m=()=>Se(t,{subscr:y,trans:null}),v=A.trans?ft(A.transless,m):m();return n&&v.then(pe,pe),v}(h);l||(Ee("storagemutated",u),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(c()?d():(s={},i=h,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return d(),o})}let Ir;try{Ir={indexedDB:j.indexedDB||j.mozIndexedDB||j.webkitIndexedDB||j.msIndexedDB,IDBKeyRange:j.IDBKeyRange||j.webkitIDBKeyRange}}catch{Ir={indexedDB:null,IDBKeyRange:null}}const Pe=Re;function yn(t){let e=he;try{he=!0,Ee.storagemutated.fire(t)}finally{he=e}}ct(Pe,{...dn,delete:t=>new Pe(t,{addons:[]}).delete(),exists:t=>new Pe(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return ms(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):fs(e,n).toCollection().primaryKeys()}(Pe.dependencies).then(t)}catch{return L(new C.MissingAPI)}},defineClass:()=>function(t){V(this,t)},ignoreTransaction:t=>A.trans?ft(A.transless,t):t(),vip:Rr,async:function(t){return function(){try{var e=zr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:x.resolve(e)}catch(n){return L(n)}}},spawn:function(t,e,n){try{var r=zr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:x.resolve(r)}catch(s){return L(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=x.resolve(typeof t=="function"?Pe.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:x,debug:{get:()=>oe,set:t=>{$o(t,t==="dexie"?()=>!0:zo)}},derive:Ze,extend:V,props:ct,override:wo,Events:Pt,on:Ee,liveQuery:Tu,extendObservabilitySet:Wo,getByKeyPath:me,setByKeyPath:te,delByKeyPath:function(t,e){typeof e=="string"?te(t,e,void 0):"length"in e&&[].map.call(e,function(n){te(t,n,void 0)})},shallowClone:So,deepClone:Vt,getObjectDiff:ps,cmp:W,asap:bo,minKey:-(1/0),addons:[],connections:Ct,errnames:ls,dependencies:Ir,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Pe.maxKey=It(Pe.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ee("storagemutated",t=>{if(!he){let e;In?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),he=!0,dispatchEvent(e),he=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{he||yn(t)}));let he=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),Ee("storagemutated",e=>{he||t.postMessage(e)}),t.onmessage=e=>{e.data&&yn(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){Ee("storagemutated",e=>{try{he||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&yn(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&yn(e.changedParts)})}x.rejectionMapper=function(t,e){if(!t||t instanceof et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Qs[t.name])return t;var n=new Qs[t.name](e||t.message,t);return"stack"in t&&fe(n,"stack",{get:function(){return this.inner.stack}}),n},$o(oe,zo);class Yt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class ai extends Yt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Bn="locationchange";let li=!1;const ku=window.history.pushState;function ci(...t){const e=ku.apply(window.history,t);return window.dispatchEvent(new Event(Bn)),e}const Ou=window.history.replaceState;function ui(...t){const e=Ou.apply(window.history,t);return window.dispatchEvent(new Event(Bn)),e}function Mu(){if(!li){if(window.history.pushState===ci)throw new ai("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===ui)throw new ai("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");li=!0,window.history.pushState=ci,window.history.replaceState=ui,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Bn))})}}function ju(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Du(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Nu(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?ju(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Ru extends Yt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Vo(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const di=6;function hi(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>di)throw new Ru(`Route sanitization depth has exceed the max of ${di} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Vo(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class rr extends Yt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function zu(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new rr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new rr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new rr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Lu(t,e,n,r=!1){const s=Jo(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Jo(t,e,n=""){var r;if(!n&&e!=null)throw new Yt("Route base regexp was defined but routeBase string was not provided.");const s=Iu(e)?`/${n}`:"",i=t.search?Du(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function Iu(t){return!!(t&&window.location.pathname.match(t))}function Bu(t={}){var e;zu(t),Mu();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const c=i.getCurrentRawRoutes(),u={...c,...o},d=i.sanitizeFullRoute(u);if(!(!l&&Vo(c,d)))return Lu(d,r,n,a)},createRoutesUrl:o=>Jo(o,r,n),getCurrentRawRoutes:()=>Nu(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Yt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(Bn,()=>hi(i)),s=!0),o&&hi(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Go=Bu({routeBase:"resizable-image-element"}),Fu=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Hu="resizable-image-element-storage";class Ku extends Re{constructor(){super(Hu),this.version(1).stores({storedUrls:"&index"})}}const sr=new Ku,fi={async set(t){const e=kn(t).map((n,r)=>({index:r,url:n}));await sr.storedUrls.clear(),await sr.storedUrls.bulkPut(e)},async get(){const e=(await sr.storedUrls.toArray()).map(r=>r.url),n=kn(e);return Uu(n.length?n:Fu)}};function Uu(t){var e,n;try{const r=kn(((n=(e=Go.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function kn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(ut)}const{defineElement:qu,defineElementNoInputs:Wu}=Jl(),ln=qu()({tagName:"vir-url-input",events:{urlsChange:un()},styles:Qe`
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
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),K`
            <textarea
                ${xt("input",a=>{const c=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));e(new n.urlsChange(c))})}
                ${xt("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),yt={max:{width:300,height:600},min:{width:300,height:150}};Wu({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Yi(fi.get()),constraints:void 0,router:Go,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Qe`
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

        ${t.showConstraints} ${Et} {
            border-color: blue;
        }

        ${Et} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||yt.min.width,height:Number(o==null?void 0:o.minH)||yt.min.height},max:{width:Number(o==null?void 0:o.maxW)||yt.max.width,height:Number(o==null?void 0:o.maxH)||yt.max.height}}})}const n=t.constraints??yt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!Ai(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Kt(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),K`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${ln}
                ${rs(ln,{urls:r})}
                ${xt(ln.events.urlsChange,o=>{const a=o.detail;fi.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${ln}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${xt("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const c=[nt(o),nt(l)].join(" "),u=n[o][l];return K`
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
                                    ${xt("input",d=>{i(d.currentTarget,o,l)})}
                                />
                            </label>
                        `});return K`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${Vu(n,t.imageUrls)}</div>
        `}});function Vu(t,e){return mr(e,"Loading...",n=>kn(n).map(r=>{const s=`
                height: ${ee(t.max.height)};
                max-height: ${ee(t.max.height)};
                width: ${ee(t.max.width)};
                max-width: ${ee(t.max.width)}`,i=`height: ${ee(t.min.height)}; width: ${ee(t.min.width)}`;return K`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${Et}
                            ${rs(Et,{imageUrl:r,max:t.max,min:t.min})}
                        ></${Et}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
