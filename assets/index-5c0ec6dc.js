(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Go=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],fi=new RegExp(Go.join("|"),"g");function Yo(t,e){return t.filter((n,r)=>!e.includes(r))}function Qo(t){return t.reduce((n,r)=>n.concat(r),[])}function Xo(t){return t.map(e=>e.trim()).filter(e=>e!=="")}function Zo(t,e){return t.includes(e)}function ea(t,e){return t.map(e)}async function ta(t,e){await Ir(t,e)}async function Ir(t,e){return await t.reduce(async(r,s,i,o)=>{const a=await r,l=await e(s,i,o);return a.push(l),a},Promise.resolve([]))}async function na(t,e,n){const r=n!=null&&n.blocking?await Ir(t,e):await Promise.all(t.map(e));return t.filter((s,i)=>!!r[i])}function Br(t){const e=new Set(Array.from(t.toLowerCase()));return Array.from(e).join("")}function ra(t,e){return new RegExp(t.source,Br([t.flags,e].join("")))}function Fr(t,e){return t.match(e)??[]}function sa(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}function mi(t){return t.replace(fi,"")}const ia=mi;function pi(t){return t.replace(/,/g,"")}function kn(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function oa(t,e,n){const r=vi({searchIn:t,searchFor:e,caseSensitive:n,includeLength:!0}),s=yi(e,n);return t.split(s).reduce((a,l,c)=>{const u=r[c],d=a.concat(l);if(u){const h=t.slice(u.index,u.index+u.length);return d.concat(h)}else return d},[])}const aa={capitalizeFirstLetter:!1};function nt(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function la(t,e){return e.capitalizeFirstLetter?nt(t):t}function ca(t,e=aa){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return la(r,e)}function gs(t){return t!==t.toUpperCase()}function ua(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=gs(o)||gs(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function da(t,e,n,r=n.length){const s=t.substring(0,e),i=t.substring(e+r);return`${s}${n}${i}`}function gi(t){return t.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function yi(t,e){const n=`g${!e&&typeof t=="string"?"i":""}`;return t instanceof RegExp?new RegExp(t.source,Br(`${t.flags}${n}`)):new RegExp(gi(t),n)}function vi({searchIn:t,searchFor:e,caseSensitive:n,includeLength:r}){const s=yi(e,n),i=[],o=[];return t.replace(s,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new Error(`Match index "${l}" is not a number. Searching for "${e}" in "${t}".`);const c=a[0];if(typeof c!="string")throw new Error(`regExpMatch should've been a string but was ${typeof c}!`);o.push({index:l,length:c.length}),i.push(l);const u=a[0];if(typeof u!="string")throw new Error(`Original match when searching for "${e}" in "${t}" at index ${l} is not a string.`);return u}),r?o:i}function rt(t,e){return t.split(e)}const wi=String(NaN);function Hr(t){if(typeof t=="string"&&isNaN(Number(t)))return wi;const e=String(t),[n,r]=e.split("."),s=r?`.${r}`:"";return`${Fr(n.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${s}`}function Kr({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}function bi(t){return typeof t=="number"?t:Number(typeof t=="string"?pi(t):t)}function _i(t){return String(t).includes("e")}function Si({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}const Ur=["january","february","march","april","may","june","july","august","september","october","november","december"],xi=Ur.map(t=>t.slice(0,3));class gn extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function ha(t,e=""){const[n,r,s=""]=t.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${t}"`);const i=s.length<4?`${e}${s.padStart(2,"0")}`:s;return qr(`${i.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function $i(t,e=!1){const[n,r,s]=t.replace(",","").split(" ");if(!n||!r||!s)throw new gn(`Invalid ${$i.name} input: ${t}`);const i=Ur.indexOf(n.toLowerCase()),o=xi.indexOf(n.toLowerCase());let a=i===-1?o:i;if(a===-1)if(e)a=new Date().getUTCMonth();else throw new gn(`Month name ${n} was not found.`);return qr(`${s.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function qr(t){const e=new Date(t+"T00:00:00.000Z");if(isNaN(Number(e)))throw new gn(`Invalid utc date formed from input "${t}"`);return e}const ys={days:{getKey:"getUTCDate",setKey:"setUTCDate"},months:{getKey:"getUTCMonth",setKey:"setUTCMonth"},years:{getKey:"getUTCFullYear",setKey:"setUTCFullYear"}};function fa(t,e){t instanceof Date||(t=new Date(t));let n=new Date(t);return ie(e).forEach(r=>{const s=e[r];if(!s)return;const{getKey:i,setKey:o}=ki(ys,r)?ys[r]:{getKey:`getUTC${nt(r)}`,setKey:`setUTC${nt(r)}`},a=n[i]();n[o](a+s)}),n}function ma(){return typeof window<"u"}function pa(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(n=>Ee(n).trim()).join(`
`))}function ga(t){return t?t.map(Ee).filter(ct).join(`
`):""}function Ee(t){return t?t instanceof Error?t.message:String(t):""}function Tt(t){return t instanceof Error?t:new Error(Ee(t))}function ya(t){let e;try{const n=t();return Mi(n)?new Promise(async r=>{try{const s=await n;return r(s)}catch(s){e=Tt(s)}return r(e)}):n}catch(n){e=Tt(n)}return e}function ct(t){return!!t}const va=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function we(t,e){return t?va.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function wa(t,e){return t&&e.every(n=>we(t,n))}function ba(t,e){return we(e,t)}function ie(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function _a(t){return ie(t).map(e=>t[e])}function sr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Sa(t){return Object.fromEntries(t)}function yn(t){return!!t&&typeof t=="object"}function Ei(t,e){try{if(t===e)return!0;if(yn(t)&&yn(e)){const n=sr(t),r=sr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Ee(n)}`),n}}function xa(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function $a(t,e,n=!1,r=!1){try{return Bt(t,e,n),!0}catch(s){return r&&console.error(s),!1}}function Bt(t,e,n=!1,r={}){const s=ie(t),i=new Set(ie(e));if(!n){const o=s.filter(a=>!i.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!we(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const l=t[o],c=e[o];r[o]||Ai(l,c,a,n,r[o]??{})})}function Ai(t,e,n,r,s){var a;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{we(e,"constructor")&&(!we(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,c)=>{if(e.map(d=>{try{Ai(l,d,n,r,s);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${Ee(h)}`)}}).filter(ct).length===e.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${e.join(", ")}"`)})):yn(e)&&Bt(t,e,r,s)}function On(t){return Array.isArray(t)?"array":typeof t}function De(t,e){return On(t)===e}function Ci(t,e,n){if(!De(t,e))throw new TypeError(`'${n}' is of type '${On(t)}' but type '${e}' was expected.`)}function ir({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(De(n,"object")?Bt(r,n):Ci(r,On(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function Pi(t){return ie(t).filter(e=>isNaN(Number(e)))}function Wr(t){return Pi(t).map(n=>t[n])}function Ti(t,e){return Wr(e).includes(t)}function Ea(t,e,n=!1){return n?t.reduce((r,s)=>{const i=Wr(e).find(o=>String(o).toUpperCase()===String(s).toUpperCase());return i?r.concat(i):r},[]):t.filter(r=>Ti(r,e))}function Ft(t,e){return ie(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Aa(t,e){return Ft(t,n=>!e.includes(n))}function Ca(t,e){return Ft(t,n=>e.includes(n))}function ki(t,e){return e in t}function Pa(t){return JSON.parse(JSON.stringify(t))}function Ta(t){function e(n){return ie(t).reduce((s,i)=>{const o=n(i,t[i],t);return{...s,[i]:o}},{})}return e}function Mn(t,e){let n=!1;const r=ie(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(ie(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function Oi(t,e){const n=e[0];if(!we(t,n))return;const r=t[n];return e.length>1?Oi(r,e.slice(1)):r}function Ht(t){const e=ut();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}async function ka(t,e){return Ht(t).then(()=>e)}function Mi(t){return!!(we(t,"then")&&typeof t.then=="function")}class ji extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function Oa(t,e){return new Promise(async(n,r)=>{const s=t===1/0?void 0:setTimeout(()=>{r(new ji(t))},t);try{const i=await e;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function ut(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ut.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}async function Ma({conditionCallback:t,timeoutMs:e=1e4,intervalMs:n=100,timeoutMessage:r=""}){let s=!1,i;async function o(){try{s=!!await t()}catch(l){s=!1,i=l}}const a=Date.now();for(await o();!s;){if(await Ht(n),Date.now()-a>=e){const l=r?`${r}: `:"";throw new Error(`${l}Timeout of "${e}" exceeded waiting for condition to be true${Ee(i)}`)}await o()}}const Fn="://";function ja(...t){const e=t.join("/"),[n,r=""]=e.includes(Fn)?e.split(Fn):["",e];let s=!1,i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").map(a=>a.includes("?")||s?(s=!0,a):encodeURIComponent(a)).reduce((a,l,c,u)=>{if(i)return a;const d=u[c+1];let h=l;const f=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||f){i=!0;let y=!1;const m=u.slice(f?c+2:c+1).reduce((v,g)=>(g.includes("#")&&(y=!0),y?v.concat(g):[v,g].join("&")),"");h=[l,d,m].join("")}return a.concat(h)},[]);return[n,n?Fn:"",o.join("/")].join("")}const Na=/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/;function Ra(t){return!!t.match(Na)}const za=["k","M","B","T","P","E","Z","Y"];function Vr({beforeDot:t,afterDot:e="",maxLength:n}){if(e.length){const r=n-t.length-1;if(r>0){const s=e.slice(0,r);return Number(s)?[t,s].join("."):t}}return t}function Da(t,e,n){const[r,s]=rt(t,"."),i=Hr(r),o=Fr(i,/,/g).length,a=e[o-1],[l,c]=rt(i,","),u=[c,s].join("");return l.length+1>n?["0.",l[0],e[o]].join(""):[Vr({beforeDot:l,afterDot:u,maxLength:n-1}),a].join("")}const vs=3;function La({input:t,maxLength:e}){const n=String(t),[r,s]=rt(n,"e"),i=s.replace(/^[\-\+]/,""),o=s[0],a=["e",o,i].join(""),[l,c]=rt(r,"."),u=i.length+vs;return u===e?[l,a].join(""):u>e?o==="-"?"0":String(1/0):[Vr({afterDot:c,beforeDot:l,maxLength:e-i.length+vs}),a].join("")}function Ia(t,e){const[n,r]=rt(Hr(t),".");if(n.length<=e)return Vr({beforeDot:n,afterDot:r,maxLength:e})}function Ba(t,{customSuffixes:e=za,maxLength:n=6}={}){const r=bi(t);if(isNaN(r)||r===1/0)return String(r);if(_i(r))return La({input:r,maxLength:n});const s=String(r),i=Ia(s,n);return i??Da(s,e,n)}function Fa(t,e){return t.length>=e}function Ha(t){return t}function Ka(t){return t}function Ua(){return t=>t}function qa(t){return t}const Wa=Object.freeze(Object.defineProperty({__proto__:null,InvalidDateError:gn,NaNString:wi,PromiseTimeoutError:ji,addCommasToNumber:Hr,addRegExpFlags:ra,ansiRegex:fi,areJsonEqual:Ei,assertMatchesObjectShape:Bt,assertRuntimeTypeOf:Ci,awaitedBlockingMap:Ir,awaitedFilter:na,awaitedForEach:ta,calculateRelativeDate:fa,camelCaseToKebabCase:ua,capitalizeFirstLetter:nt,clamp:Kr,collapseWhiteSpace:kn,combineErrorMessages:ga,combineErrors:pa,convertIntoNumber:bi,copyThroughJson:xa,createDateFromNamedCommaFormat:$i,createDateFromSlashFormat:ha,createDateFromUtcIsoFormat:qr,createDeferredPromiseWrapper:ut,deDupeRegExFlags:Br,doesRequireScientificNotation:_i,englishFullMonthNames:Ur,englishShortMonthNames:xi,ensureError:Tt,ensureMinAndMax:Si,ensureType:qa,escapeStringForRegExp:gi,executeAndReturnError:ya,extractErrorMessage:Ee,filterObject:Ft,filterOutIndexes:Yo,filterToEnumValues:Ea,flatten2dArray:Qo,getAllIndexesOf:vi,getEntriesSortedByKey:sr,getEnumTypedKeys:Pi,getEnumTypedValues:Wr,getObjectTypedKeys:ie,getObjectTypedValues:_a,getRuntimeTypeOf:On,getValueFromNestedKeys:Oi,hasKey:ki,isBrowser:ma,isEnumValue:Ti,isKeyof:ba,isLengthAtLeast:Fa,isObject:yn,isPromiseLike:Mi,isRuntimeTypeOf:De,isTruthy:ct,isUuid:Ra,joinUrlParts:ja,joinWithFinalConjunction:sa,jsonify:Pa,kebabCaseToCamelCase:ca,makeReadonly:Ka,makeWritable:Ha,mapObjectValues:Mn,mapObjectValuesSync:Ta,matchesObjectShape:$a,omitObjectKeys:Aa,parseJson:ir,pickObjectKeys:Ca,removeAnsiEscapeCodes:mi,removeColor:ia,removeCommasFromNumberString:pi,replaceStringAtIndex:da,safeMatch:Fr,splitIncludeSplit:oa,trimArrayStrings:Xo,truncateNumber:Ba,typedArrayIncludes:Zo,typedHasProperties:wa,typedHasProperty:we,typedMap:ea,typedObjectFromEntries:Sa,typedSplit:rt,wait:Ht,waitForCondition:Ma,waitValue:ka,wrapNarrowTypeWithTypeCheck:Ua,wrapPromiseInTimeout:Oa},Symbol.toStringTag,{value:"Module"})),Jr=globalThis.crypto;function Ni({min:t,max:e}){const{min:n,max:r}=Si({min:Math.floor(t),max:Math.floor(e)}),s=r-n+1,i=Math.ceil(Math.log2(s)/8),o=Math.floor(256**i/s)*s,a=new Uint8Array(i);let l;do Jr.getRandomValues(a),l=a.reduce((c,u,d)=>c+u*256**d,0);while(l>=o);return n+l%s}function Va(t=50){return Ni({min:0,max:99})<Kr({value:Math.floor(t),min:0,max:100})}function Ja(){return Jr.randomUUID()}function Ri(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return Jr.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function Ga(t){return t.map(e=>({value:e,sort:Ri()})).sort((e,n)=>e.sort.localeCompare(n.sort)).map(({value:e})=>e)}async function Ya(t){const e=ut(),n=new Image;return n.onload=()=>{e.resolve(n)},n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,e.promise}function ee(t){return String(t).endsWith("px")?String(t):`${t}px`}function Qa(t){return Number(t.replace(/px$/,""))}function wt(t){const e=t.query.split(" ").filter(ct);if(!t.query)return t.element instanceof Element?t.element:t.element.host;if(e.length>1)return or({...t,queries:e});if("shadowRoot"in t.element&&t.element.shadowRoot)return wt({...t,element:t.element.shadowRoot});const n=Array.from(t.element.children).filter(r=>!!r.shadowRoot).map(r=>r.shadowRoot);if(t.all){const r=Array.from(t.element.querySelectorAll(t.query)),s=n.map(i=>wt({...t,all:!0,element:i})).flat();return[...r,...s]}else{const r=t.element.querySelector(t.query);if(r)return r;for(let s=0;s<n.length;s++){const i=n[s],o=wt({...t,element:i});if(o)return o}return}}function or(t){const e=t.queries[0];if(!e)throw new Error(`Somehow the first query was empty in '[${t.queries.join(",")}]' for query '${t.query}'`);const n=wt({...t,query:e});return t.queries.length<=1?n:De(n,"array")?n.map(r=>or({...t,element:r,queries:t.queries.slice(1)})).flat().filter(ct):n?or({...t,element:n,queries:t.queries.slice(1)}):void 0}function Xa(t){const e=Ft(t,(i,o)=>o!=null),n=Mn(e,(i,o)=>String(o)),s=new URLSearchParams(Object.entries(n)).toString();return s?`?${s}`:""}function Za(t,e){const n=De(t,"string")?new URL(t):t,r=Array.from(n.searchParams.entries()),s=Object.fromEntries(r);return e&&Bt(s,e),s}async function el(t){const e=ut(),n=document.createElement("video");return n.addEventListener("loadeddata",()=>{e.resolve(n)}),n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,n.load(),e.promise}const tl=Object.freeze(Object.defineProperty({__proto__:null,addPx:ee,createUuid:Ja,loadImage:Ya,loadVideo:el,objectToSearchParamsString:Xa,queryThroughShadow:wt,randomBoolean:Va,randomInteger:Ni,randomString:Ri,removePx:Qa,searchParamStringToObject:Za,shuffleArray:Ga},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=window,Gr=an.ShadowRoot&&(an.ShadyCSS===void 0||an.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yr=Symbol(),ws=new WeakMap;let zi=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Yr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Gr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=ws.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ws.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new zi(typeof t=="string"?t:t+"",void 0,Yr),Di=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new zi(n,t,Yr)},nl=(t,e)=>{Gr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=an.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},bs=Gr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hn;const vn=window,_s=vn.trustedTypes,rl=_s?_s.emptyScript:"",Ss=vn.reactiveElementPolyfillSupport,ar={toAttribute(t,e){switch(e){case Boolean:t=t?rl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Li=(t,e)=>e!==t&&(e==e||t==t),Kn={attribute:!0,type:String,converter:ar,reflect:!1,hasChanged:Li};let Ve=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=Kn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Kn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(bs(s))}else e!==void 0&&n.push(bs(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return nl(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Kn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:ar).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:ar;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Li)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ve.finalized=!0,Ve.elementProperties=new Map,Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},Ss==null||Ss({ReactiveElement:Ve}),((Hn=vn.reactiveElementVersions)!==null&&Hn!==void 0?Hn:vn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Un;const wn=window,st=wn.trustedTypes,xs=st?st.createPolicy("lit-html",{createHTML:t=>t}):void 0,ve=`lit$${(Math.random()+"").slice(9)}$`,Ii="?"+ve,sl=`<${Ii}>`,it=document,kt=(t="")=>it.createComment(t),Ot=t=>t===null||typeof t!="object"&&typeof t!="function",Bi=Array.isArray,il=t=>Bi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$s=/-->/g,Es=/>/g,Ce=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),As=/'/g,Cs=/"/g,Fi=/^(?:script|style|textarea|title)$/i,ol=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),al=ol(1),be=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Ps=new WeakMap,Xe=it.createTreeWalker(it,129,null,!1),ll=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=mt;for(let l=0;l<n;l++){const c=t[l];let u,d,h=-1,f=0;for(;f<c.length&&(o.lastIndex=f,d=o.exec(c),d!==null);)f=o.lastIndex,o===mt?d[1]==="!--"?o=$s:d[1]!==void 0?o=Es:d[2]!==void 0?(Fi.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Ce):d[3]!==void 0&&(o=Ce):o===Ce?d[0]===">"?(o=s??mt,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?Ce:d[3]==='"'?Cs:As):o===Cs||o===As?o=Ce:o===$s||o===Es?o=mt:(o=Ce,s=void 0);const y=o===Ce&&t[l+1].startsWith("/>")?" ":"";i+=o===mt?c+sl:h>=0?(r.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+ve+y):c+ve+(h===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xs!==void 0?xs.createHTML(a):a,r]};let lr=class Hi{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[c,u]=ll(e,n);if(this.el=Hi.createElement(c,r),Xe.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=Xe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(ve)){const f=u[o++];if(d.push(h),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(ve),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?ul:m[1]==="?"?hl:m[1]==="@"?fl:jn})}else l.push({type:6,index:i})}for(const h of d)s.removeAttribute(h)}if(Fi.test(s.tagName)){const d=s.textContent.split(ve),h=d.length-1;if(h>0){s.textContent=st?st.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],kt()),Xe.nextNode(),l.push({type:2,index:++i});s.append(d[h],kt())}}}else if(s.nodeType===8)if(s.data===Ii)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(ve,d+1))!==-1;)l.push({type:7,index:i}),d+=ve.length-1}i++}}static createElement(e,n){const r=it.createElement("template");return r.innerHTML=e,r}};function ot(t,e,n=t,r){var s,i,o,a;if(e===be)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const c=Ot(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=ot(t,l._$AS(t,e.values),l,r)),e}let cl=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:it).importNode(r,!0);Xe.currentNode=i;let o=Xe.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Qr(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new ml(o,this,e)),this.u.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Xe.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Qr=class Ki{constructor(e,n,r,s){var i;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ot(this,e,n),Ot(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==be&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):il(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==I&&Ot(this._$AH)?this._$AA.nextSibling.data=e:this.T(it.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=lr.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new cl(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=Ps.get(e.strings);return n===void 0&&Ps.set(e.strings,n=new lr(e)),n}k(e){Bi(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Ki(this.O(kt()),this.O(kt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},jn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=ot(this,e,n,0),o=!Ot(e)||e!==this._$AH&&e!==be,o&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=ot(this,a[r+l],n,l),c===be&&(c=this._$AH[l]),o||(o=!Ot(c)||c!==this._$AH[l]),c===I?e=I:e!==I&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ul=class extends jn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}};const dl=st?st.emptyScript:"";let hl=class extends jn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==I?this.element.setAttribute(this.name,dl):this.element.removeAttribute(this.name)}},fl=class extends jn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=ot(this,e,n,0))!==null&&r!==void 0?r:I)===be)return;const s=this._$AH,i=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==I&&(s===I||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},ml=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ot(this,e)}};const Ts=wn.litHtmlPolyfillSupport;Ts==null||Ts(lr,Qr),((Un=wn.litHtmlVersions)!==null&&Un!==void 0?Un:wn.litHtmlVersions=[]).push("2.6.1");const pl=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new Qr(e.insertBefore(kt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qn,Wn;let bt=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pl(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return be}};bt.finalized=!0,bt._$litElement$=!0,(qn=globalThis.litElementHydrateSupport)===null||qn===void 0||qn.call(globalThis,{LitElement:bt});const ks=globalThis.litElementPolyfillSupport;ks==null||ks({LitElement:bt});((Wn=globalThis.litElementVersions)!==null&&Wn!==void 0?Wn:globalThis.litElementVersions=[]).push("3.2.2");var gl=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function yl(){return t=>{}}let Mt=class extends bt{};Mt=gl([yl()],Mt);const vl={capitalizeFirstLetter:!1};function wl(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function bl(t,e){return e.capitalizeFirstLetter?wl(t):t}function _l(t,e=vl){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return bl(r,e)}function Os(t){return t!==t.toUpperCase()}function Sl(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=Os(o)||Os(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const xl=["january","february","march","april","may","june","july","august","september","october","november","december"];xl.map(t=>t.slice(0,3));function Xr(t){return t?t instanceof Error?t.message:String(t):""}function $l(t){return t instanceof Error?t:new Error(Xr(t))}const El=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ui(t,e){return t?El.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Al(t,e){return t&&e.every(n=>Ui(t,n))}function Le(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ms(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function js(t){return!!t&&typeof t=="object"}function Cl(t,e){try{if(t===e)return!0;if(js(t)&&js(e)){const n=Ms(t),r=Ms(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Xr(n)}`),n}}function Pl(t,e){return Le(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function at(t,e){let n=!1;const r=Le(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Le(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function Tl(t){return!!(Ui(t,"then")&&typeof t.then=="function")}function jt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${jt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Ns(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):kl(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vn;((Vn=window.HTMLSlotElement)===null||Vn===void 0?void 0:Vn.prototype.assignedElements)!=null;const cr=Symbol("this-is-an-element-vir-declarative-element"),Zr=Symbol("key for ignoring inputs not having been set yet"),Ol={[Zr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ml={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},es=t=>(...e)=>({_$litDirective$:t,values:e});let ts=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function jl(t,e){return qi(t,e,Mt)}function qi(t,e,n){ur(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function ur(t,e){if(t.type!==Ml.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function ns(t,e){return Nl(t,e)}const Nl=es(class extends ts{constructor(t){super(t),this.element=jl(t,"assign")}render(t,e){return Rl(t,this.element,e),be}});function Rl(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Wi(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof Mt?!0:Wi(n)}var k=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Q=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},re,Te,ke,Oe,Ye,Je,G,_t,dr,hr;const Vi=Symbol("element-vir-async-state-marker");function zl(t){if(!t)return{};const e=Pl(t,(r,s)=>s instanceof Ji);return at(e,(r,s)=>new Dl(s.initialValue))}const Gt=Symbol("not set");class Dl{constructor(e){re.add(this),Te.set(this,Gt),ke.set(this,void 0),Oe.set(this,void 0),Ye.set(this,[]),Je.set(this,void 0),G.set(this,jt()),this.asyncMarkerSymbol=Vi,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(k(this,Te,"f")===Gt||!Cl(e.trigger,k(this,Te,"f"))){Q(this,Te,e.trigger,"f");const n=e.createPromise();k(this,re,"m",dr).call(this,n)}}else"newPromise"in e?(k(this,Te,"f"),k(this,re,"m",dr).call(this,e.newPromise),k(this,re,"m",_t).call(this)):"resolvedValue"in e?k(this,re,"m",hr).call(this,e.resolvedValue):e.forceUpdate&&(Q(this,Te,Gt,"f"),Q(this,ke,void 0,"f"),k(this,G,"f").isSettled()||k(this,G,"f").reject("Canceled by force update"),Q(this,G,jt(),"f"),k(this,re,"m",_t).call(this))}getValue(){return k(this,G,"f").isSettled()?k(this,Oe,"f")?k(this,Oe,"f"):k(this,ke,"f"):k(this,G,"f").promise}addSettleListener(e){k(this,Ye,"f").push(e)}removeSettleListener(e){Q(this,Ye,k(this,Ye,"f").filter(n=>n!==e),"f")}}Te=new WeakMap,ke=new WeakMap,Oe=new WeakMap,Ye=new WeakMap,Je=new WeakMap,G=new WeakMap,re=new WeakSet,_t=function(){k(this,Ye,"f").forEach(e=>{e()})},dr=function(e){e!==k(this,Je,"f")&&(Q(this,ke,void 0,"f"),Q(this,Oe,void 0,"f"),Q(this,Je,e,"f"),k(this,G,"f").isSettled()&&Q(this,G,jt(),"f"),e.then(n=>{k(this,Je,"f")===e&&k(this,re,"m",hr).call(this,n)}).catch(n=>{k(this,Je,"f")===e&&(Q(this,Oe,$l(n),"f"),k(this,G,"f").promise.catch(()=>{}),k(this,G,"f").reject(n),k(this,re,"m",_t).call(this))}))},hr=function(e){e!==k(this,ke,"f")&&(Q(this,Oe,void 0,"f"),Q(this,ke,e,"f"),k(this,G,"f").isSettled()&&Q(this,G,jt(),"f"),k(this,G,"f").resolve(e),k(this,re,"m",_t).call(this))};class Ji{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=Vi}}function Gi(t){return new Ji(t)}function Yi(t,e){return`${t}-${Sl(e)}`}function Ll(t,e){return e?at(e,n=>se(`--${Yi(t,String(n))}`)):{}}function Il(t,e){return t?at(t,(n,r)=>{const s=e[n];return se(`var(${s}, ${r})`)}):{}}class Bl extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Qi(){return t=>{var e;return e=class extends Bl{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function ln(){return Qi()}function Fl(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Qi()(n);return e[n]=r,e},{}):{}}function Rs(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function zs(t,e){const n=t;function r(i,o){e&&Rs(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Rs(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Hl(t,e){return e?at(e,n=>Yi(t,String(n))):{}}function Kl({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:at(t,(r,s)=>se(`:host(.${s})`)),hostClassNames:at(t,(r,s)=>se(s)),cssVarNames:e,cssVarValues:n}}function Ul({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Le(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function ql(t,e){function n(s){Le(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function rs(t){var e;const n=Fl(t.events),r=Hl(t.tagName,t.hostClasses),s=Ll(t.tagName,t.cssVars),i=Il(t.cssVars,s),o={...Ol,...t.options},a=typeof t.styles=="function"?t.styles(Kl({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Di``,l=t.renderCallback,c=(e=class extends Mt{createRenderParams(){return ql(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Wi(this)&&!this.haveInputsBeenSet&&!o[Zr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${ns.name}" directive on it. If no inputs are intended, use "${rs.name}" to define ${t.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(u));const d=t.renderCallback(u);return Ul({host:u.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:u.state,inputs:u.inputs}),d}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const u=this.createRenderParams();t.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const u=this.createRenderParams();t.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){Le(u).forEach(d=>{Ns()(this,d),this.instanceInputs[d]=u[d]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=zl(t.stateInit),this.instanceInputs=zs(this,!1),this.instanceState=zs(this,!0);const u=t.stateInit||{};Le(u).forEach(d=>{Ns()(this,d);const h=this.asyncStateHandlerMap[d];h?(this.instanceState[d]=h.getValue(),h.addSettleListener(()=>{this[d]=h.getValue()})):this.instanceState[d]=u[d]}),this.definition=c}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(c,{[cr]:{value:!0,writable:!1},name:{value:_l(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,c),c}function Xi(){return t=>rs({...t,options:{[Zr]:!1},...t.options})}function St(t,e){return Wl(t,e)}const Wl=es(class extends ts{constructor(t){super(t),this.element=qi(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),be}}),Ds="onDomCreated",Ls=es(class extends ts{constructor(t){super(t),ur(t,Ds)}update(t,[e]){ur(t,Ds);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function fr(t,e,n,r){return t instanceof Error?r?r(t):Xr(t):Tl(t)?e:n?n(t):t}function Vl(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Xi()(s(i))),defineElementNoInputs:i=>(r(i),rs(s(i)))}}function Jl(t,e){return t.filter((n,r)=>!e.includes(r))}function Zi(t){return t.filter(e=>Al(e,["tagName",cr])&&!!e.tagName&&!!e[cr])}const eo=new WeakMap;function Gl(t,e){var n;const r=Zi(e);return(n=to(eo,[t,...r]).value)===null||n===void 0?void 0:n.template}function Yl(t,e,n){const r=Zi(e);return ro(eo,[t,...r],n)}function to(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=no(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?to(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function no(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function ro(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=no(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const c=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=c),ro(c,e,n,r+1)}function so(t,e,n){return{name:t,check:e,transform:n}}const Ql=new WeakMap;function io(t,e,n){const r=Gl(t,e),s=r??n();if(!r){const o=Yl(t,e,s);if(o.result)Ql.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Jl(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function oo(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,c)=>{var u;const d=s.length-1,h=s[d],f=c-1,y=e[f];let m;r&&r(l),typeof h=="string"&&(m=(u=n.find(g=>g.check(h,l,y)))===null||u===void 0?void 0:u.transform,m&&(s[d]=h+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[c];m?i[d]=i[d]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function ao(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Xl=[so("tag name css selector interpolation",(t,e,n)=>ao(n),t=>t.tagName)];function Zl(t,e){return oo(t,e,Xl)}function Qe(t,...e){const n=io(t,e,()=>Zl(t,e));return Di(n.strings,...n.values)}const ec=[so("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=ao(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function tc(t){}function nc(t){return oo(t.strings,t.values,ec,tc)}function K(t,...e){const n=al(t,...e),r=io(t,e,()=>nc(n));return{...n,strings:r.strings,values:r.values}}function rc(t,e){return t<e}function sc(t,e){return t>e}const Is={width:250,height:250};function ic({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?sc:rc)(e.width/e.height,t.width/t.height)?"width":"height"}function Jn({box:t,constraint:e,constraintType:n}){const r=ic({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function lo({box:t,ratio:e}){return Mn(t,(n,r)=>r*e)}function mr({box:t,min:e,max:n}){return Mn(t,(r,s)=>Kr({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function co({min:t,max:e,box:n}){const r=uo({min:t,max:e,box:n}),s=lo({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||Is.height),width:Math.floor(s.width||(t==null?void 0:t.width)||Is.width)}}function uo({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Jn({box:n,constraint:t,constraintType:"min"}):1,s=e?Jn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=lo({ratio:i,box:n});return(t?Jn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function Me(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=oc(o,r[a]);return`${o}${l}`});return kn(i.join(""))}function oc(t,e){return e._$litType$!=null||e._$litDirective$!=null?Me(e):Array.isArray(e)?e.map(r=>Me(r)).join(""):t.endsWith("=")?`"${e}"`:e}function ac(t){const e=lc(t);return De(e,"object")||De(e,"array")}function lc(t){const e=ir({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=cc(t);return ir({jsonString:n,errorHandler:()=>{}})}function cc(t){return kn(t).replace(/,\s*([}\]])/,"$1")}var T=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(T||{});const uc=["text","json"];function Bs(t){return uc.includes(t)}async function dc(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":ac(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function hc({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Me(K`
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
            `):e}function fc(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}else if(e==="html")return t.replaceAll(/console\.[^\(]+\(/g,"doNothing(");return t}async function Fs({imageUrl:t,blockAutoPlay:e,textTransformer:n=r=>r}){var c;let r;try{r=await fetch(t)}catch{}const s=((c=r==null?void 0:r.headers.get("Content-Type"))==null?void 0:c.toLowerCase())??"",i=await(r==null?void 0:r.text())??"",o=r?await dc(s,i):"image",a=n(fc(i??"",o));return{templateString:hc({imageText:a,imageType:o,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:o}}var Z=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Z||{}),Yt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ho(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var bn={},Nn={},_e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.isDebugMode=_e.setDebugMode=void 0;let fo=!1;function mc(t){fo=t}_e.setDebugMode=mc;function pc(){return fo}_e.isDebugMode=pc;var Kt={},Ut={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnyOrigin=t.MessageDirectionEnum=void 0,function(e){e.FromParent="from-parent",e.FromChild="from-child"}(t.MessageDirectionEnum||(t.MessageDirectionEnum={})),t.AnyOrigin=Symbol("any-origin")})(Ut);Object.defineProperty(Kt,"__esModule",{value:!0});Kt.assertAllowedOrigin=void 0;const gc=Ut;function yc(t,e){if(t===gc.AnyOrigin)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}Kt.assertAllowedOrigin=yc;var Rn={};Object.defineProperty(Rn,"__esModule",{value:!0});Rn.dangerDisableSecurityWarningsSymbol=void 0;Rn.dangerDisableSecurityWarningsSymbol=Symbol("dangerDisableSecurityWarningsSymbol");var zn={};const vc=ho(tl),wc=ho(Wa);Object.defineProperty(zn,"__esModule",{value:!0});zn.sendPingPongMessageToChild=void 0;const bc=vc,Hs=wc,Ks=_e,_c=Kt,Gn=Ut;function Sc(t,e,n){return n.type===t&&n.direction===e}function xc(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function $c({message:t,verifyChildData:e,iframeElement:n},r,s){if(!n)throw new Error("No iframe element was provided.");let i=0,o=!1,a,l,c,u=!1;const d={...t,direction:Gn.MessageDirectionEnum.FromParent,messageId:(0,bc.randomString)(32)},h=t.type,f=r===Gn.AnyOrigin?["*"]:r;function y(g){try{(0,_c.assertAllowedOrigin)(r,g);const p=g.data;if(p.type==="error")throw new Error(`Child threw an error: ${p.data}`);if((0,Ks.isDebugMode)()&&console.info("Received message from child",p.messageId,p),p&&u&&Sc(h,Gn.MessageDirectionEnum.FromChild,p)&&p.messageId===d.messageId){let w=!1;try{w=e?e(p.data):!0}catch{}if(!w)return;o=!0,l=g,a=p}}catch(p){c=(0,Hs.ensureError)(p)}}globalThis.addEventListener("message",y);const m=Date.now();for(;!o&&i<s&&!c;){const g=n.contentWindow;g&&((0,Ks.isDebugMode)()&&(u?console.info("Re-sending message to child",d.messageId):console.info("Sending message to child",d.messageId,d)),u=!0,f.forEach(p=>{try{g.postMessage(d,{targetOrigin:p})}catch{}})),await(0,Hs.wait)(xc(i)),i++}const v=Date.now()-m;if(globalThis.removeEventListener("message",y),c)throw c;if(!o)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${s}' tries ('${Math.floor(v/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but received a valid response");return{data:a==null?void 0:a.data,event:l}}zn.sendPingPongMessageToChild=$c;Object.defineProperty(Nn,"__esModule",{value:!0});Nn.createIframeMessenger=void 0;const Us=_e,Ec=Kt,Ac=Rn,Ue=Ut,Cc=zn;function mo({allowedOrigins:t,maxAttemptCount:e=10,...n}){if(t!==Ue.AnyOrigin&&t.includes("*")&&(t=Ue.AnyOrigin),t===Ue.AnyOrigin&&!n[Ac.dangerDisableSecurityWarningsSymbol]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==Ue.AnyOrigin&&!t.length)throw new Error(`No allowed origins were provide to ${mo.name}. At least one must be provided.`);const r=t===Ue.AnyOrigin?["*"]:t;return{async sendMessageToChild(s){if(s.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await(0,Cc.sendPingPongMessageToChild)(s,t,s.maxAttemptCount||e)},listenForParentMessages(s){globalThis.addEventListener("message",async i=>{(0,Ec.assertAllowedOrigin)(t,i);const o=i.data;(0,Us.isDebugMode)()&&console.info("Received message from parent",o.messageId,o);const a=await s({...o,originalEvent:i}),l={type:o.type,direction:Ue.MessageDirectionEnum.FromChild,data:a,messageId:o.messageId};(0,Us.isDebugMode)()&&console.info("Sending message to parent",l.messageId,l),r.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}Nn.createIframeMessenger=mo;var po={};Object.defineProperty(po,"__esModule",{value:!0});var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0});Dn.setInterlockingIframeMessengerDebugMode=void 0;const Pc=_e;function Tc(t){(0,Pc.setDebugMode)(t)}Dn.setInterlockingIframeMessengerDebugMode=Tc;(function(t){var e=Yt&&Yt.__createBinding||(Object.create?function(r,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,o,a)}:function(r,s,i,o){o===void 0&&(o=i),r[o]=s[i]}),n=Yt&&Yt.__exportStar||function(r,s){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&e(s,r,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(Nn,t),n(po,t),n(Ut,t),n(Dn,t)})(bn);var F=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(F||{});const ce=bn.createIframeMessenger({allowedOrigins:[window.location.origin]}),ue=15;async function kc(t){const e=ut();t.onload=()=>{e.resolve()};try{await ce.sendMessageToChild({message:{type:F.Ready},iframeElement:t,maxAttemptCount:ue})}catch{await e.promise,await ce.sendMessageToChild({message:{type:F.Ready},iframeElement:t,maxAttemptCount:ue})}}async function Oc({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){var l;await kc(r),i&&await ce.sendMessageToChild({message:{type:F.ForceSize,data:i},iframeElement:r,maxAttemptCount:ue});const a=o??(await ce.sendMessageToChild({message:{type:F.SendSize},iframeElement:r,maxAttemptCount:ue,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await go({min:t,max:e,imageDimensions:a,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0}),((l=r.contentWindow)==null?void 0:l.document.documentElement.outerHTML)??""}async function go({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:a}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c={min:t,max:e,box:o??n},u=Bs(i.imageType)?mr(c):co(c);l.style.width=ee(Math.floor(u.width)),l.style.height=ee(Math.floor(u.height));const d=mr({min:t,max:e,box:u});u.height<d.height?r.classList.add(Z.VerticallyCenter):r.classList.remove(Z.VerticallyCenter),r.style.width=ee(d.width),r.style.height=ee(d.height);const h=uo({min:t,max:e,box:o??n});if(a){if(h>3?await ce.sendMessageToChild({message:{type:F.SendScalingMethod,data:"pixelated"},iframeElement:s,maxAttemptCount:ue}):await ce.sendMessageToChild({message:{type:F.SendScalingMethod,data:"default"},iframeElement:s,maxAttemptCount:ue}),await ce.sendMessageToChild({message:{type:F.SizeDetermined,data:u},iframeElement:s,maxAttemptCount:ue}),i.imageType===T.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},y={width:h*f.width,height:h*f.height};await ce.sendMessageToChild({message:{type:F.SendScale,data:y},iframeElement:s,maxAttemptCount:ue})}else if(Bs(i.imageType)){const f=o??n;if(f.height<u.height){const y=u.width/f.width,m=u.height/f.height,v=Math.min(y,m);await ce.sendMessageToChild({message:{type:F.SendScale,data:{height:v,width:v}},iframeElement:s,maxAttemptCount:ue})}}}}const Qt={x:16,y:8};var qs=Object.freeze,Mc=Object.defineProperty,Ws=(t,e)=>qs(Mc(t,"raw",{value:qs(e||t.slice())})),Vs,Js;function jc(t,e,n){const r=Math.random(),s=K(Vs||(Vs=Ws([`
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
    `])),t.imageType,n??"",T.Svg,T.Html,T.Image,T.Video,T.Text,T.Json,T.Audio,bn.MessageDirectionEnum.FromChild,bn.MessageDirectionEnum.FromChild,F.Ready,F.SendScale,F.SendScalingMethod,F.SendSize,F.ForceSize,F.SizeDetermined,T.Json,T.Text,Qt.y,T.Audio),i=K(Js||(Js=Ws([`
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
    `])),t.imageType,T.Image,T.Svg,T.Video,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,Qt.y,Qt.x,T.Text,T.Json,Qt.y,r,e??"",s);return kn(Me(i)).replace(String(r),`
${t.templateString}
`)}const Nc={imageData:Gi()},Gs=K`
    <div class="click-cover"></div>
`,Rc={textTransformer:"textTransformer",extraHtml:"extraHtml"},Yn="latest-frame-srcdoc",xt=Xi()({tagName:"vir-resizable-image",stateInit:Nc,events:{settled:ln(),imageDataCalculated:ln(),errored:ln()},styles:Qe`
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[Yn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(Z.HideLoading),s(new i.settled(!1)),r.classList.remove(Z.VerticallyCenter);const f={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer};try{return Fs(f)}catch{await Ht(1e3);try{return Fs(f)}catch(m){throw s(new i.errored(Tt(m))),m}}},trigger:{...Ft(e,f=>!(f in Rc))}}});const o=e.min&&e.max?mr({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?co({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,c=fr(t.imageData,"",f=>(s(new i.imageDataCalculated(f)),f.imageType===T.Pdf?K`
                        <iframe
                            src=${f.imageUrl}
                            ${Ls(async y=>{try{await go({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:y,imageData:f,imageDimensions:a??{width:500,height:500},max:a,min:o,sendSizeMessage:!1}),r[Yn]="",s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                    `:K`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${jc(f,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${Ls(async y=>{try{const m=await Oc({min:o,max:a,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});r[Yn]=m,s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),f=>(s(new i.errored(Tt(f))),K`
                    <div class="error-wrapper">
                        <slot name="error">${Ee(f)}</slot>
                    </div>
                `)),u=fr(t.imageData,Gs,f=>!e.blockInteraction&&[T.Html,T.Video,T.Audio,T.Pdf].includes(f.imageType)?"":Gs,()=>""),d=t.imageData instanceof Error?Qe`
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
        `}}),j=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,D=Object.keys,U=Array.isArray;function V(t,e){return typeof e!="object"||D(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||j.Promise||(j.Promise=Promise);const Nt=Object.getPrototypeOf,zc={}.hasOwnProperty;function X(t,e){return zc.call(t,e)}function lt(t,e){typeof e=="function"&&(e=e(Nt(t))),(typeof Reflect>"u"?D:Reflect.ownKeys)(e).forEach(n=>{fe(t,n,e[n])})}const yo=Object.defineProperty;function fe(t,e,n,r){yo(t,e,V(n&&X(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ze(t){return{from:function(e){return t.prototype=Object.create(e.prototype),fe(t.prototype,"constructor",t),{extend:lt.bind(null,t.prototype)}}}}const Dc=Object.getOwnPropertyDescriptor;function ss(t,e){let n;return Dc(t,e)||(n=Nt(t))&&ss(n,e)}const Lc=[].slice;function _n(t,e,n){return Lc.call(t,e,n)}function vo(t,e){return e(t)}function yt(t){if(!t)throw new Error("Assertion Failed")}function wo(t){j.setImmediate?setImmediate(t):setTimeout(t,0)}function bo(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function me(t,e){if(X(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=me(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:me(a,e.substr(o+1))}}function te(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){yt(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)te(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?U(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&X(t,o)||(l=t[o]={}),te(l,a,n)}}else n===void 0?U(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function _o(t){var e={};for(var n in t)X(t,n)&&(e[n]=t[n]);return e}const Ic=[].concat;function So(t){return Ic.apply([],t)}const xo="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(So([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>j[t]),Bc=xo.map(t=>j[t]);bo(xo,t=>[t,!0]);let ye=null;function qt(t){ye=typeof WeakMap<"u"&&new WeakMap;const e=pr(t);return ye=null,e}function pr(t){if(!t||typeof t!="object")return t;let e=ye&&ye.get(t);if(e)return e;if(U(t)){e=[],ye&&ye.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(pr(t[n]))}else if(Bc.indexOf(t.constructor)>=0)e=t;else{const i=Nt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),ye&&ye.set(t,e),t)X(t,s)&&(e[s]=pr(t[s]))}return e}const{toString:Fc}={};function gr(t){return Fc.call(t).slice(8,-1)}const yr=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Hc=typeof yr=="symbol"?function(t){var e;return t!=null&&(e=t[yr])&&e.apply(t)}:function(){return null},Ge={};function de(t){var e,n,r,s;if(arguments.length===1){if(U(t))return t.slice();if(this===Ge&&typeof t=="string")return[t];if(s=Hc(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const is=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function $o(t,e){oe=t,Eo=e}var Eo=()=>!0;const Kc=!new Error("").stack;function Fe(){if(Kc)try{throw Fe.arguments,new Error}catch(t){return t}return new Error}function vr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(Eo).map(r=>`
`+r).join("")):""}var Ao=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],os=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ao),Uc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function et(t,e){this._e=Fe(),this.name=t,this.message=e}function Co(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Sn(t,e,n,r){this._e=Fe(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=Co(t,e)}function $t(t,e){this._e=Fe(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=Co(t,e)}Ze(et).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+vr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ze(Sn).from(et),Ze($t).from(et);var as=os.reduce((t,e)=>(t[e]=e+"Error",t),{});const qc=et;var C=os.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Fe(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Uc[e]||n,this.inner=null)}return Ze(r).from(qc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Ys=Ao.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),cn=os.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function O(){}function Rt(t){return t}function Wc(t,e){return t==null||t===Rt?e:function(n){return e(t(n))}}function Ie(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Vc(t,e){return t===O?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Ie(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Ie(s,this.onerror):s),i!==void 0?i:n}}function Jc(t,e){return t===O?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Ie(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Ie(r,this.onerror):r)}}function Gc(t,e){return t===O?e:function(n){var r=t.apply(this,arguments);V(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Ie(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Ie(i,this.onerror):i),r===void 0?o===void 0?void 0:o:V(r,o)}}function Yc(t,e){return t===O?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ls(t,e){return t===O?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}cn.ModifyError=Sn,cn.DexieError=et,cn.BulkError=$t;var zt={};const[wr,xn,br]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,Nt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,Nt(e),t]})(),Po=xn&&xn.then,un=wr&&wr.constructor,cs=!!br;var _r=!1,Qc=br?()=>{br.then(Xt)}:j.setImmediate?setImmediate.bind(null,Xt):j.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Xt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Xt,0)},Et=function(t,e){vt.push([t,e]),$n&&(Qc(),$n=!1)},Sr=!0,$n=!0,Ne=[],dn=[],xr=null,$r=Rt,tt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Xs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Xs(t[0],t[1])}catch{}})}},A=tt,vt=[],Re=0,hn=[];function x(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=O,this._lib=!1;var e=this._PSD=A;if(oe&&(this._stackHolder=Fe(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==zt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Ar(this,this._value))}this._state=null,this._value=null,++e.ref,ko(this,t)}const Er={get:function(){var t=A,e=En;function n(r,s){var i=!t.global&&(t!==A||e!==En);const o=i&&!pe();var a=new x((l,c)=>{us(this,new To(An(r,t,i,o),An(s,t,i,o),l,c,t))});return oe&&jo(a,this),a}return n.prototype=zt,n},set:function(t){fe(this,"then",t&&t.prototype===zt?Er:{get:function(){return t},set:Er.set})}};function To(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function ko(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Wt();n&&typeof n.then=="function"?ko(t,(s,i)=>{n instanceof x?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,Oo(t)),r&&Vt()}},Ar.bind(null,t))}catch(n){Ar(t,n)}}function Ar(t,e){if(dn.push(e),t._state===null){var n=t._lib&&Wt();e=$r(e),t._state=!1,t._value=e,oe&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=ss(e,"stack");e._promise=t,fe(e,"stack",{get:()=>_r?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ne.some(s=>s._value===r._value)||Ne.push(r)}(t),Oo(t),n&&Vt()}}function Oo(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)us(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Re===0&&(++Re,Et(()=>{--Re==0&&ds()},[]))}function us(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Re,Et(Xc,[n,t,e])}else t._listeners.push(e)}function Xc(t,e,n){try{xr=e;var r,s=e._value;e._state?r=t(s):(dn.length&&(dn=[]),r=t(s),dn.indexOf(s)===-1&&function(i){for(var o=Ne.length;o;)if(Ne[--o]._value===i._value)return void Ne.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{xr=null,--Re==0&&ds(),--n.psd.ref||n.psd.finalize()}}function Mo(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=vr(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return oe&&((r=vr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&Mo(t._prev,e,n)),e}function jo(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Xt(){Wt()&&Vt()}function Wt(){var t=Sr;return Sr=!1,$n=!1,t}function Vt(){var t,e,n;do for(;vt.length>0;)for(t=vt,vt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(vt.length>0);Sr=!0,$n=!0}function ds(){var t=Ne;Ne=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=hn.slice(0),n=e.length;n;)e[--n]()}function Zt(t){return new x(zt,!1,t)}function N(t,e){var n=A;return function(){var r=Wt(),s=A;try{return xe(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{xe(s,!1),r&&Vt()}}}lt(x.prototype,{then:Er,_then:function(t,e){us(this,new To(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Zt(r)):this.then(null,r=>r&&r.name===e?n(r):Zt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Zt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{_r=!0;var t=Mo(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{_r=!1}}},timeout:function(t,e){return t<1/0?new x((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&fe(x.prototype,Symbol.toStringTag,"Dexie.Promise"),tt.env=No(),lt(x,{all:function(){var t=de.apply(null,arguments).map(en);return new x(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>x.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof x)return t;if(t&&typeof t.then=="function")return new x((n,r)=>{t.then(n,r)});var e=new x(zt,!0,t);return jo(e,xr),e},reject:Zt,race:function(){var t=de.apply(null,arguments).map(en);return new x((e,n)=>{t.map(r=>x.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>En},newPSD:Se,usePSD:ht,scheduler:{get:()=>Et,set:t=>{Et=t}},rejectionMapper:{get:()=>$r,set:t=>{$r=t}},follow:(t,e)=>new x((n,r)=>Se((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Ie(function(){(function(a){function l(){a(),hn.splice(hn.indexOf(l),1)}hn.push(l),++Re,Et(()=>{--Re==0&&ds()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),un&&(un.allSettled&&fe(x,"allSettled",function(){const t=de.apply(null,arguments).map(en);return new x(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>x.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),un.any&&typeof AggregateError<"u"&&fe(x,"any",function(){const t=de.apply(null,arguments).map(en);return new x((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>x.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const H={awaits:0,echoes:0,id:0};var Zc=0,fn=[],Qn=0,En=0,eu=0;function Se(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++eu;var o=tt.env;i.env=cs?{Promise:x,PromiseProp:{value:x,configurable:!0,writable:!0},all:x.all,race:x.race,allSettled:x.allSettled,any:x.any,resolve:x.resolve,reject:x.reject,nthen:Qs(o.nthen,i),gthen:Qs(o.gthen,i)}:{},e&&V(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=ht(i,t,n,r);return i.ref===0&&i.finalize(),a}function dt(){return H.id||(H.id=++Zc),++H.awaits,H.echoes+=100,H.id}function pe(){return!!H.awaits&&(--H.awaits==0&&(H.id=0),H.echoes=100*H.awaits,!0)}function en(t){return H.echoes&&t&&t.constructor===un?(dt(),t.then(e=>(pe(),e),e=>(pe(),L(e)))):t}function tu(t){++En,H.echoes&&--H.echoes!=0||(H.echoes=H.id=0),fn.push(A),xe(t,!0)}function nu(){var t=fn[fn.length-1];fn.pop(),xe(t,!1)}function xe(t,e){var n=A;if((e?!H.echoes||Qn++&&t===A:!Qn||--Qn&&t===A)||Ro(e?tu.bind(null,t):nu),t!==A&&(A=t,n===tt&&(tt.env=No()),cs)){var r=tt.env.Promise,s=t.env;xn.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(j,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function No(){var t=j.Promise;return cs?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(j,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:xn.then,gthen:t.prototype.then}:{}}function ht(t,e,n,r,s){var i=A;try{return xe(t,!0),e(n,r,s)}finally{xe(i,!1)}}function Ro(t){Po.call(wr,t)}function An(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&dt(),xe(e,!0);try{return t.apply(this,arguments)}finally{xe(s,!1),r&&Ro(pe)}}}function Qs(t,e){return function(n,r){return t.call(this,An(n,e),An(r,e))}}(""+Po).indexOf("[native code]")===-1&&(dt=pe=O);function Xs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(j.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),V(r,s)):j.CustomEvent&&V(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&j.dispatchEvent&&(dispatchEvent(r),!j.PromiseRejectionEvent&&j.onunhandledrejection))try{j.onunhandledrejection(r)}catch{}oe&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var L=x.reject;function Cr(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===as.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Cr(t,e,n,r))):L(i)}return s._promise(e,(i,o)=>Se(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return L(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return L(new C.DatabaseClosed);t.open().catch(O)}return t._state.dbReadyPromise.then(()=>Cr(t,e,n,r))}const je=String.fromCharCode(65535),ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",At=[],Ln=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),ru=Ln,su=Ln,zo=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Be(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Do={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function tn(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=qt(e))[t],e)}class iu{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,c,u){if(!u.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(u.idbtrans,u)}const a=Wt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):Se(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Cr(this.db,e,[this.name],o)}finally{a&&Vt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(U(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=D(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(c=>c.compound&&n.every(u=>c.keyPath.indexOf(u)>=0)&&c.keyPath.every(u=>n.indexOf(u)>=0))[0];if(r&&this.db._maxKey!==je)return this.where(r.name).equals(r.keyPath.map(c=>e[c]));!r&&oe&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(c,u){try{return i.cmp(c,u)===0}catch{return!1}}const[a,l]=n.reduce(([c,u],d)=>{const h=s[d],f=e[d];return[c||h,c||!h?Be(u,h&&h.multi?y=>{const m=me(y,d);return U(m)&&m.some(v=>o(f,v))}:y=>o(f,me(y,d))):u]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,U(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(X(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){V(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=tn(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||U(e))return this.where(":id").equals(e).modify(n);{const r=me(e,this.schema.primKey.keyPath);if(r===void 0)return L(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?D(n).forEach(s=>{te(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=tn(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?x.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Do})).then(e=>e.numFailures?x.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(tn(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new $t(`${this.name}.bulkAdd(): ${d} of ${c} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(tn(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new $t(`${this.name}.bulkPut(): ${d} of ${c} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new $t(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function Ct(t){var e={},n=function(a,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return e[a].subscribe.apply(null,u),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,c){if(typeof a=="object")return o(a);l||(l=Yc),c||(c=O);var u={subscribers:[],fire:c,subscribe:function(d){u.subscribers.indexOf(d)===-1&&(u.subscribers.push(d),u.fire=l(u.fire,d))},unsubscribe:function(d){u.subscribers=u.subscribers.filter(function(h){return h!==d}),u.fire=u.subscribers.reduce(l,c)}};return e[a]=n[a]=u,u}function o(a){D(a).forEach(function(l){var c=a[l];if(U(c))i(l,a[l][0],a[l][1]);else{if(c!=="asap")throw new C.InvalidArgument("Invalid event config");var u=i(l,Rt,function(){for(var d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];u.subscribers.forEach(function(f){wo(function(){f.apply(null,h)})})})}})}}function pt(t,e){return Ze(e).from({prototype:t}),e}function qe(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Xn(t,e){t.filter=Be(t.filter,e)}function Zn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Be(r(),e()):e,t.justLimit=n&&!r}function mn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Zs(t,e,n){const r=mn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function nn(t,e,n,r){const s=t.replayFilter?Be(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,c)=>{if(!s||s(l,c,h=>l.stop(h),h=>l.fail(h))){var u=l.primaryKey,d=""+u;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(u)),X(i,d)||(i[d]=!0,e(a,l,c))}};return Promise.all([t.or._iterate(o,n),ei(Zs(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return ei(Zs(t,r,n),Be(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function ei(t,e,n,r){var s=N(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=O},a=>{i.fail(a),o=O})||s(i.value,i,a=>o=a),o()})})}function W(t,e){try{const n=ti(t),r=ti(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c)if(s[c]!==i[c])return s[c]<i[c]?-1:1;return o===a?0:o<a?-1:1}(ni(t),ni(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c){const u=W(s[c],i[c]);if(u!==0)return u}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function ti(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=gr(t);return n==="ArrayBuffer"?"binary":n}function ni(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class ou{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,L.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,L.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Be(n.algorithm,e)}_iterate(e,n){return nn(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&V(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>nn(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(qe(r,!0))return s.count({trans:n,query:{index:mn(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return nn(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(c,u){return u?o(c[r[u]],u-1):c[s]}var a=this._ctx.dir==="next"?1:-1;function l(c,u){var d=o(c,i),h=o(u,i);return d<h?-a:d>h?a:0}return this.toArray(function(c){return c.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&qe(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=mn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return nn(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,qe(n)?Zn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Zn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Zn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Xn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Xn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Be(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&qe(n,!0)&&n.limit>0)return this._read(s=>{var i=mn(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Xn(this._ctx,function(s){var i=s.primaryKey.toString(),o=X(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=D(e),o=i.length;s=function(m){for(var v=!1,g=0;g<o;++g){var p=i[g],w=e[p];me(m,p)!==w&&(te(m,p,w),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:c}=a.schema.primaryKey,u=this.db._options.modifyChunkSize||200,d=[];let h=0;const f=[],y=(m,v)=>{const{failures:g,numFailures:p}=v;h+=m-p;for(let w of D(g))d.push(g[w])};return this.clone().primaryKeys().then(m=>{const v=g=>{const p=Math.min(u,m.length-g);return a.getMany({trans:r,keys:m.slice(g,g+p),cache:"immutable"}).then(w=>{const E=[],S=[],b=l?[]:null,_=[];for(let $=0;$<p;++$){const M=w[$],R={value:qt(M),primKey:m[g+$]};s.call(R,R.value,R)!==!1&&(R.value==null?_.push(m[g+$]):l||W(c(M),c(R.value))===0?(S.push(R.value),l&&b.push(m[g+$])):(_.push(m[g+$]),E.push(R.value)))}const P=qe(n)&&n.limit===1/0&&(typeof e!="function"||e===er)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let M in $.failures)_.splice(parseInt(M),1);y(E.length,$)})).then(()=>(S.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:b,values:S,criteria:P,changeSpec:typeof e!="function"&&e}).then($=>y(S.length,$))).then(()=>(_.length>0||P&&e===er)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then($=>y(_.length,$))).then(()=>m.length>g+p&&v(g+u))})};return v(0).then(()=>{if(d.length>0)throw new Sn("Error modifying one or more objects",d,h,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return qe(e)&&(e.isPrimKey&&!su||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:c,numFailures:u})=>{if(u)throw new Sn("Could not delete some values",Object.keys(a).map(d=>a[d]),o-u);return o-u}))}):this.modify(er)}}const er=(t,e)=>e.value=null;function au(t,e){return t<e?-1:t===e?0:1}function lu(t,e){return t>e?-1:t===e?0:1}function Y(t,e,n){var r=t instanceof Io?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function We(t){return new t.Collection(t,()=>Lo("")).limit(0)}function cu(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var c=e[l];if(c!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],c)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function rn(t,e,n,r){var s,i,o,a,l,c,u,d=n.length;if(!n.every(m=>typeof m=="string"))return Y(t,"String expected.");function h(m){s=function(g){return g==="next"?p=>p.toUpperCase():p=>p.toLowerCase()}(m),i=function(g){return g==="next"?p=>p.toLowerCase():p=>p.toUpperCase()}(m),o=m==="next"?au:lu;var v=n.map(function(g){return{lower:i(g),upper:s(g)}}).sort(function(g,p){return o(g.lower,p.lower)});a=v.map(function(g){return g.upper}),l=v.map(function(g){return g.lower}),c=m,u=m==="next"?"":r}h("next");var f=new t.Collection(t,()=>ge(a[0],l[d-1]+r));f._ondirectionchange=function(m){h(m)};var y=0;return f._addAlgorithm(function(m,v,g){var p=m.key;if(typeof p!="string")return!1;var w=i(p);if(e(w,l,y))return!0;for(var E=null,S=y;S<d;++S){var b=cu(p,w,a[S],l[S],o,c);b===null&&E===null?y=S+1:(E===null||o(E,b)>0)&&(E=b)}return v(E!==null?function(){m.continue(E+u)}:g),!1}),f}function ge(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function Lo(t){return{type:1,lower:t,upper:t}}class Io{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?We(this):new this.Collection(this,()=>ge(e,n,!r,!s))}catch{return Y(this,ae)}}equals(e){return e==null?Y(this,ae):new this.Collection(this,()=>Lo(e))}above(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(e,void 0,!0))}aboveOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(e,void 0,!1))}below(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(void 0,e,!1,!0))}belowOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>ge(void 0,e))}startsWith(e){return typeof e!="string"?Y(this,"String expected."):this.between(e,e+je,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):rn(this,(n,r)=>n.indexOf(r[0])===0,[e],je)}equalsIgnoreCase(e){return rn(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=de.apply(Ge,arguments);return e.length===0?We(this):rn(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=de.apply(Ge,arguments);return e.length===0?We(this):rn(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,je)}anyOf(){const e=de.apply(Ge,arguments);let n=this._cmp;try{e.sort(n)}catch{return Y(this,ae)}if(e.length===0)return We(this);const r=new this.Collection(this,()=>ge(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=de.apply(Ge,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Y(this,ae)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return We(this);if(!e.every(p=>p[0]!==void 0&&p[1]!==void 0&&s(p[0],p[1])<=0))return Y(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,c=n&&n.includeUppers===!0;let u,d=s;function h(p,w){return d(p[0],w[0])}try{u=e.reduce(function(p,w){let E=0,S=p.length;for(;E<S;++E){const b=p[E];if(r(w[0],b[1])<0&&r(w[1],b[0])>0){b[0]=o(b[0],w[0]),b[1]=a(b[1],w[1]);break}}return E===S&&p.push(w),p},[]),u.sort(h)}catch{return Y(this,ae)}let f=0;const y=c?p=>s(p,u[f][1])>0:p=>s(p,u[f][1])>=0,m=l?p=>i(p,u[f][0])>0:p=>i(p,u[f][0])>=0;let v=y;const g=new this.Collection(this,()=>ge(u[0][0],u[u.length-1][1],!l,!c));return g._ondirectionchange=p=>{p==="next"?(v=y,d=s):(v=m,d=i),u.sort(h)},g._addAlgorithm((p,w,E)=>{for(var S=p.key;v(S);)if(++f,f===u.length)return w(E),!1;return!!function(b){return!y(b)&&!m(b)}(S)||(this._cmp(S,u[f][1])===0||this._cmp(S,u[f][0])===0||w(()=>{d===s?p.continue(u[f][0]):p.continue(u[f][1])}),!1)}),g}startsWithAnyOf(){const e=de.apply(Ge,arguments);return e.every(n=>typeof n=="string")?e.length===0?We(this):this.inAnyRange(e.map(n=>[n,n+je])):Y(this,"startsWithAnyOf() only works with strings")}}function ne(t){return N(function(e){return Dt(e),t(e.target.error),!1})}function Dt(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const $e=Ct(null,"storagemutated");class uu{_lock(){return yt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(yt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{ht(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(yt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return yt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{Dt(s),this._reject(e.error)}),e.onabort=N(s=>{Dt(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&$e.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return L(new C.ReadOnly("Transaction is readonly"));if(!this.active)return L(new C.TransactionInactive);if(this._locked())return new x((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return Se(()=>{var i=new x((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new x((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=x.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new x((o,a)=>{r.then(l=>n._waitingQueue.push(N(o.bind(null,l))),l=>n._waitingQueue.push(N(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(X(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Pr(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Bo(e)}}function Bo(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Fo(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:bo(n,r=>[r.name,r])}}let Lt=t=>{try{return t.only([[]]),Lt=()=>[[]],[[]]}catch{return Lt=()=>je,je}};function Tr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>me(n,e)}(t):e=>me(e,t)}function ri(t){return[].slice.call(t)}let du=0;function Pt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function hu(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:c,upper:u,lowerOpen:d,upperOpen:h}=l;return c===void 0?u===void 0?null:e.upperBound(u,!!h):u===void 0?e.lowerBound(c,!!d):e.bound(c,u,!!d,!!h)}const{schema:s,hasGetAll:i}=function(l,c){const u=ri(l.objectStoreNames);return{schema:{name:l.name,tables:u.map(d=>c.objectStore(d)).map(d=>{const{keyPath:h,autoIncrement:f}=d,y=U(h),m=h==null,v={},g={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:h,autoIncrement:f,unique:!0,extractKey:Tr(h)},indexes:ri(d.indexNames).map(p=>d.index(p)).map(p=>{const{name:w,unique:E,multiEntry:S,keyPath:b}=p,_={name:w,compound:U(b),keyPath:b,unique:E,multiEntry:S,extractKey:Tr(b)};return v[Pt(b)]=_,_}),getIndexByKeyPath:p=>v[Pt(p)]};return v[":id"]=g.primaryKey,h!=null&&(v[Pt(h)]=g.primaryKey),g})},hasGetAll:u.length>0&&"getAll"in c.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(c){const u=c.name;return{name:u,schema:c,mutate:function({trans:d,type:h,keys:f,values:y,range:m}){return new Promise((v,g)=>{v=N(v);const p=d.objectStore(u),w=p.keyPath==null,E=h==="put"||h==="add";if(!E&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:S}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(S===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let b;const _=[],P=[];let $=0;const M=q=>{++$,Dt(q)};if(h==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:P,results:[],lastResult:void 0});m.type===3?_.push(b=p.clear()):_.push(b=p.delete(r(m)))}else{const[q,B]=E?w?[y,f]:[y,null]:[f,null];if(E)for(let z=0;z<S;++z)_.push(b=B&&B[z]!==void 0?p[h](q[z],B[z]):p[h](q[z])),b.onerror=M;else for(let z=0;z<S;++z)_.push(b=p[h](q[z])),b.onerror=M}const R=q=>{const B=q.target.result;_.forEach((z,He)=>z.error!=null&&(P[He]=z.error)),v({numFailures:$,failures:P,results:h==="delete"?f:_.map(z=>z.result),lastResult:B})};b.onerror=q=>{M(q),R(q)},b.onsuccess=R})},getMany:({trans:d,keys:h})=>new Promise((f,y)=>{f=N(f);const m=d.objectStore(u),v=h.length,g=new Array(v);let p,w=0,E=0;const S=_=>{const P=_.target;g[P._pos]=P.result,++E===w&&f(g)},b=ne(y);for(let _=0;_<v;++_)h[_]!=null&&(p=m.get(h[_]),p._pos=_,p.onsuccess=S,p.onerror=b,++w);w===0&&f(g)}),get:({trans:d,key:h})=>new Promise((f,y)=>{f=N(f);const m=d.objectStore(u).get(h);m.onsuccess=v=>f(v.target.result),m.onerror=ne(y)}),query:function(d){return h=>new Promise((f,y)=>{f=N(f);const{trans:m,values:v,limit:g,query:p}=h,w=g===1/0?void 0:g,{index:E,range:S}=p,b=m.objectStore(u),_=E.isPrimaryKey?b:b.index(E.name),P=r(S);if(g===0)return f({result:[]});if(d){const $=v?_.getAll(P,w):_.getAllKeys(P,w);$.onsuccess=M=>f({result:M.target.result}),$.onerror=ne(y)}else{let $=0;const M=v||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),R=[];M.onsuccess=q=>{const B=M.result;return B?(R.push(v?B.value:B.primaryKey),++$===g?f({result:R}):void B.continue()):f({result:R})},M.onerror=ne(y)}})}(i),openCursor:function({trans:d,values:h,query:f,reverse:y,unique:m}){return new Promise((v,g)=>{v=N(v);const{index:p,range:w}=f,E=d.objectStore(u),S=p.isPrimaryKey?E:E.index(p.name),b=y?m?"prevunique":"prev":m?"nextunique":"next",_=h||!("openKeyCursor"in S)?S.openCursor(r(w),b):S.openKeyCursor(r(w),b);_.onerror=ne(g),_.onsuccess=N(P=>{const $=_.result;if(!$)return void v(null);$.___id=++du,$.done=!1;const M=$.continue.bind($);let R=$.continuePrimaryKey;R&&(R=R.bind($));const q=$.advance.bind($),B=()=>{throw new Error("Cursor not stopped")};$.trans=d,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=N(g),$.next=function(){let z=1;return this.start(()=>z--?this.continue():this.stop()).then(()=>this)},$.start=z=>{const He=new Promise((J,Ae)=>{J=N(J),_.onerror=ne(Ae),$.fail=Ae,$.stop=ft=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=B,J(ft)}}),Ke=()=>{if(_.result)try{z()}catch(J){$.fail(J)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=N(J=>{_.onsuccess=Ke,Ke()}),$.continue=M,$.continuePrimaryKey=R,$.advance=q,Ke(),He},v($)},g)})},count({query:d,trans:h}){const{index:f,range:y}=d;return new Promise((m,v)=>{const g=h.objectStore(u),p=f.isPrimaryKey?g:g.index(f.name),w=r(y),E=w?p.count(w):p.count();E.onsuccess=N(S=>m(S.target.result)),E.onerror=ne(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:Lt(e),schema:s}}function kr({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(u,d){return d.reduce((h,{create:f})=>({...h,...f(h)}),u)}(hu(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function Cn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=ss(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?fe(o,s,{get(){return this.table(s)},set(l){yo(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function Or({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function fu(t,e){return t._cfg.version-e._cfg.version}function mu(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;Se(()=>{A.trans=i,A.transless=a,e===0?(D(s).forEach(l=>{tr(n,l,s[l].primKey,s[l].indexes)}),kr(t,n),x.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},c,u,d){const h=[],f=l._versions;let y=l._dbSchema=jr(l,l.idbdb,d),m=!1;function v(){return h.length?x.resolve(h.shift()(u.idbtrans)).then(v):x.resolve()}return f.filter(g=>g._cfg.version>=c).forEach(g=>{h.push(()=>{const p=y,w=g._cfg.dbschema;Nr(l,p,d),Nr(l,w,d),y=l._dbSchema=w;const E=Ho(p,w);E.add.forEach(b=>{tr(d,b[0],b[1].primKey,b[1].indexes)}),E.change.forEach(b=>{if(b.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=d.objectStore(b.name);b.add.forEach(P=>Mr(_,P)),b.change.forEach(P=>{_.deleteIndex(P.name),Mr(_,P)}),b.del.forEach(P=>_.deleteIndex(P))}});const S=g._cfg.contentUpgrade;if(S&&g._cfg.version>c){kr(l,d),u._memoizedTables={},m=!0;let b=_o(w);E.del.forEach(M=>{b[M]=p[M]}),Or(l,[l.Transaction.prototype]),Cn(l,[l.Transaction.prototype],D(b),b),u.schema=b;const _=is(S);let P;_&&dt();const $=x.follow(()=>{if(P=S(u),P&&_){var M=pe.bind(null,null);P.then(M,M)}});return P&&typeof P.then=="function"?x.resolve(P):$.then(()=>P)}}),h.push(p=>{(!m||!ru)&&function(w,E){[].slice.call(E.db.objectStoreNames).forEach(S=>w[S]==null&&E.db.deleteObjectStore(S))}(g._cfg.dbschema,p),Or(l,[l.Transaction.prototype]),Cn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),u.schema=l._dbSchema})}),v().then(()=>{var g,p;p=d,D(g=y).forEach(w=>{p.db.objectStoreNames.contains(w)||tr(p,w,g[w].primKey,g[w].indexes)})})}(t,e,i,n).catch(o)})}function Ho(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!Ln)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let c;for(c in a)l[c]||o.del.push(c);for(c in l){const u=a[c],d=l[c];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function tr(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>Mr(s,i)),s}function Mr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function jr(t,e,n){const r={};return _n(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Pr(Bo(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let u=0;u<i.indexNames.length;++u){const d=i.index(i.indexNames[u]);o=d.keyPath;var c=Pr(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(c)}r[s]=Fo(s,a,l)}),r}function Nr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+_n(c).join("+")+"]";if(e[i]){const d=e[i].idxByName[u];d&&(d.name=l,delete e[i].idxByName[u],e[i].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&j.WorkerGlobalScope&&j instanceof j.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class pu{_parseStoresSpec(e,n){D(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),c=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Pr(l,c||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),U(c),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Fo(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?V(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{V(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,Or(n,[n._allTables,n,n.Transaction.prototype]),Cn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],D(i),i),n._storeNames=D(i),this}upgrade(e){return this._cfg.contentUpgrade=ls(this._cfg.contentUpgrade||O,e),this}}function hs(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new ze("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function fs(t){return t&&typeof t.databases=="function"}function Rr(t){return Se(function(){return A.letThrough=!0,t()})}function gu(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function yu(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?L(e.dbOpenError):t);oe&&(e.openCanceller._stackHolder=Fe()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return x.race([r,(typeof navigator>"u"?x.resolve():gu()).then(()=>new x((l,c)=>{if(s(),!n)throw new C.MissingAPI;const u=t.name,d=e.autoSchema?n.open(u):n.open(u,Math.round(10*t.verno));if(!d)throw new C.MissingAPI;d.onerror=ne(c),d.onblocked=N(t._fireOnBlocked),d.onupgradeneeded=N(h=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){d.onerror=Dt,o.abort(),d.result.close();const y=n.deleteDatabase(u);y.onsuccess=y.onerror=N(()=>{c(new C.NoSuchDatabase(`Database ${u} doesnt exist`))})}else{o.onerror=ne(c);var f=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=f<1,t._novip.idbdb=d.result,mu(t,f/10,o,c)}},c),d.onsuccess=N(()=>{o=null;const h=t._novip.idbdb=d.result,f=_n(h.objectStoreNames);if(f.length>0)try{const m=h.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},g,p){v.verno=g.version/10;const w=v._dbSchema=jr(0,g,p);v._storeNames=_n(g.objectStoreNames,0),Cn(v,[v._allTables],D(w),w)}(t,h,m):(Nr(t,t._dbSchema,m),function(v,g){const p=Ho(jr(0,v.idbdb,g),v._dbSchema);return!(p.add.length||p.change.some(w=>w.add.length||w.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),kr(t,m)}catch{}var y;At.push(t),h.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),h.onclose=N(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},g){!fs(m)&&g!=="__dbnames"&&hs(m,v).put({name:g}).catch(O)}(t._deps,u),l()},c)}))]).then(()=>(s(),e.onReadyBeingFired=[],x.resolve(Rr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(ls,O);return e.onReadyBeingFired=[],x.resolve(Rr(()=>c(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),L(l)}).finally(()=>{e.openComplete=!0,i()})}function zr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):U(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function vu(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=So(s);return[t,i,n]}function Ko(t,e,n,r,s){return x.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===as.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Ko(t,e,n,null,s))):L(d)}const l=is(s);let c;l&&dt();const u=x.follow(()=>{if(c=s.call(o,o),c)if(l){var d=pe.bind(null,null);c.then(d,d)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=zr(c))},a);return(c&&typeof c.then=="function"?x.resolve(c).then(d=>o.active?d:L(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):u.then(()=>c)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),L(d)))})}function sn(t,e,n){const r=U(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const wu={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(u,d,h){const f=Pt(u),y=s[f]=s[f]||[],m=u==null?0:typeof u=="string"?1:u.length,v=d>0,g={...h,isVirtual:v,keyTail:d,keyLength:m,extractKey:Tr(u),unique:!v&&h.unique};return y.push(g),g.isPrimaryKey||i.push(g),m>1&&o(m===2?u[0]:u.slice(0,m-1),d+1,h),y.sort((p,w)=>p.keyTail-w.keyTail),g}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const u of r.indexes)o(u.keyPath,0,u);function l(u){const d=u.query.index;return d.isVirtual?{...u,query:{index:d,range:(h=u.query.range,f=d.keyTail,{type:h.type===1?2:h.type,lower:sn(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:sn(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:u;var h,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(u){const d=s[Pt(u)];return d&&d[0]}},count:u=>n.count(l(u)),query:u=>n.query(l(u)),openCursor(u){const{keyTail:d,isVirtual:h,keyLength:f}=u.query.index;return h?n.openCursor(l(u)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(g){g!=null?m.continue(sn(g,u.reverse?t.MAX_KEY:t.MIN_KEY,d)):u.unique?m.continue(m.key.slice(0,f).concat(u.reverse?t.MIN_KEY:t.MAX_KEY,d)):m.continue()}},continuePrimaryKey:{value(g,p){m.continuePrimaryKey(sn(g,t.MAX_KEY,d),p)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const g=m.key;return f===1?g[0]:g.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(u)}}}}}};function ms(t,e,n,r){return n=n||{},r=r||"",D(t).forEach(s=>{if(X(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=gr(i);a!==gr(o)?n[r+s]=e[s]:a==="Object"?ms(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),D(e).forEach(s=>{X(t,s)||(n[r+s]=e[s])}),n}const bu={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:c}=o.table(e).hook;switch(i.type){case"add":if(l.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"put":if(l.fire===O&&c.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"delete":if(a.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"deleteRange":if(a.fire===O)break;return o._promise("readwrite",()=>function(h){return d(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function u(h){const f=A.trans,y=h.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,h);if(!y)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:y}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(m,v,g){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:g,cache:"immutable"})}(n,h,y).then(m=>{const v=y.map((g,p)=>{const w=m[p],E={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call(E,g,w,f);else if(h.type==="add"||w===void 0){const S=l.fire.call(E,g,h.values[p],f);g==null&&S!=null&&(g=S,h.keys[p]=g,r.outbound||te(h.values[p],r.keyPath,g))}else{const S=ms(w,h.values[p]),b=c.fire.call(E,S,g,w,f);if(b){const _=h.values[p];Object.keys(b).forEach(P=>{X(_,P)?_[P]=b[P]:te(_,P,b[P])})}}return E});return n.mutate(h).then(({failures:g,results:p,numFailures:w,lastResult:E})=>{for(let S=0;S<y.length;++S){const b=p?p[S]:y[S],_=v[S];b==null?_.onerror&&_.onerror(g[S]):_.onsuccess&&_.onsuccess(h.type==="put"&&m[S]?h.values[S]:b)}return{failures:g,results:p,numFailures:w,lastResult:E}}).catch(g=>(v.forEach(p=>p.onerror&&p.onerror(g)),Promise.reject(g)))})}function d(h,f,y){return n.query({trans:h,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>u({type:"delete",keys:m,trans:h}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:d(h,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function Uo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)W(e.keys[s],t[i])===0&&(r.push(n?qt(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const _u={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Uo(r.keys,r.trans._cache,r.cache==="clone");return s?x.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?qt(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function ps(t){return!("from"in t)}const le=function(t,e){if(!this){const n=new le;return t&&"d"in t&&V(n,t),n}V(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function It(t,e,n){const r=W(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(ps(t))return V(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(W(n,t.from)<0)return s?It(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},si(t);if(W(e,t.to)>0)return i?It(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},si(t);W(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),W(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&Pn(t,s),i&&o&&Pn(t,i)}function Pn(t,e){ps(e)||function n(r,{from:s,to:i,l:o,r:a}){It(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function Su(t,e){const n=Dr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=Dr(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(W(a.from,s.to)<=0&&W(a.to,s.from)>=0)return!0;W(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function Dr(t){let e=ps(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&W(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||W(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function si(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=ii(o)}t.d=ii(t)}function ii({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}lt(le.prototype,{add(t){return Pn(this,t),this},addKey(t){return It(this,t,t),this},addKeys(t){return t.forEach(e=>It(this,e,e)),this},[yr](){return Dr(this)}});const xu={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new le(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,c={...s,mutate:h=>{const f=h.trans,y=f.mutatedParts||(f.mutatedParts={}),m=b=>{const _=`idb://${e}/${r}/${b}`;return y[_]||(y[_]=new le)},v=m(""),g=m(":dels"),{type:p}=h;let[w,E]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const S=h.trans._cache;return s.mutate(h).then(b=>{if(U(w)){p!=="delete"&&(w=b.results),v.addKeys(w);const _=Uo(w,S);_||p==="add"||g.addKeys(w),(_||E)&&function(P,$,M,R){function q(B){const z=P(B.name||"");function He(J){return J!=null?B.extractKey(J):null}const Ke=J=>B.multiEntry&&U(J)?J.forEach(Ae=>z.addKey(Ae)):z.addKey(J);(M||R).forEach((J,Ae)=>{const ft=M&&He(M[Ae]),Bn=R&&He(R[Ae]);W(ft,Bn)!==0&&(ft!=null&&Ke(ft),Bn!=null&&Ke(Bn))})}$.indexes.forEach(q)}(m,i,_,E)}else if(w){const _={from:w.lower,to:w.upper};g.add(_),v.add(_)}else v.add(n),g.add(n),i.indexes.forEach(_=>m(_.name).add(n));return b})}},u=({query:{index:h,range:f}})=>{var y,m;return[h,new le((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},d={get:h=>[o,new le(h.key)],getMany:h=>[o,new le().addKeys(h.keys)],count:u,query:u,openCursor:u};return D(d).forEach(h=>{c[h]=function(f){const{subscr:y}=A;if(y){const m=E=>{const S=`idb://${e}/${r}/${E}`;return y[S]||(y[S]=new le)},v=m(""),g=m(":dels"),[p,w]=d[h](f);if(m(p.name||"").add(w),!p.isPrimaryKey){if(h!=="count"){const E=h==="query"&&l&&f.values&&s.query({...f,values:!1});return s[h].apply(this,arguments).then(S=>{if(h==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),S));const b=f.values?S.result.map(a):S.result;f.values?v.addKeys(b):g.addKeys(b)}else if(h==="openCursor"){const b=S,_=f.values;return b&&Object.create(b,{key:{get:()=>(g.addKey(b.primaryKey),b.key)},primaryKey:{get(){const P=b.primaryKey;return g.addKey(P),P}},value:{get:()=>(_&&v.addKey(b.primaryKey),b.value)}})}return S})}g.add(n)}}return s[h].apply(this,arguments)}}),c}}}};class ze{constructor(e,n){this._middlewares={},this.verno=0;const r=ze.dependencies;this._options=n={addons:ze.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:O,dbReadyPromise:null,cancelOpen:O,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new x(a=>{i.dbReadyResolve=a}),i.openCanceller=new x((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=Ct(this,"populate","blocked","versionchange","close",{ready:[ls,O]}),this.on.ready.subscribe=vo(this.on.ready.subscribe,a=>(l,c)=>{ze.vip(()=>{const u=this._state;if(u.openComplete)u.dbOpenError||x.resolve().then(l),c&&a(l);else if(u.onReadyBeingFired)u.onReadyBeingFired.push(l),c&&a(l);else{a(l);const d=this;c||a(function h(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,pt(ou.prototype,function(a,l){this.db=o;let c=Do,u=null;if(l)try{c=l()}catch(y){u=y}const d=a._ctx,h=d.table,f=h.hook.reading.fire;this._ctx={table:h,index:d.index,isPrimKey:!d.index||h.schema.primKey.keyPath&&d.index===h.schema.primKey.name,range:c,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:u,or:d.or,valueMapper:f!==Rt?f:null}})),this.Table=function(a){return pt(iu.prototype,function(l,c,u){this.db=a,this._tx=u,this.name=l,this.schema=c,this.hook=a._allTables[l]?a._allTables[l].hook:Ct(null,{creating:[Vc,O],reading:[Wc,Rt],updating:[Gc,O],deleting:[Jc,O]})})}(this),this.Transaction=function(a){return pt(uu.prototype,function(l,c,u,d,h){this.db=a,this.mode=l,this.storeNames=c,this.schema=u,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=Ct(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new x((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),L(f)})})}(this),this.Version=function(a){return pt(pu.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return pt(Io.prototype,function(l,c,u){this.db=a,this._ctx={table:l,index:c===":id"?null:c,or:u};const d=a._deps.indexedDB;if(!d)throw new C.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(h,f)=>d.cmp(f,h),this._max=(h,f)=>d.cmp(h,f)>0?h:f,this._min=(h,f)=>d.cmp(h,f)<0?h:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=Lt(n.IDBKeyRange),this._createTransaction=(a,l,c,u)=>new this.Transaction(a,l,c,this._options.chromeTransactionDurability,u),this._fireOnBlocked=a=>{this.on("blocked").fire(a),At.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(wu),this.use(bu),this.use(xu),this.use(_u),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(fu),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new x((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(O)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return yu(this)}_close(){const e=this._state,n=At.indexOf(this);if(n>=0&&At.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new x(r=>{e.dbReadyResolve=r}),e.openCanceller=new x((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new x((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:a,IDBKeyRange:l},c){!fs(a)&&c!=="__dbnames"&&hs(a,l).delete(c).catch(O)})(this._deps,this.name),r()}),o.onerror=ne(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return D(this._allTables).map(e=>this._allTables[e])}transaction(){const e=vu.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(c=>{var u=c instanceof this.Table?c.name:c;if(typeof u!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return u}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(c=>{if(s&&s.storeNames.indexOf(c)===-1){if(!i)throw new C.SubTransaction("Table "+c+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(c){return s?s._promise(null,(u,d)=>{d(c)}):L(c)}const l=Ko.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?ht(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!X(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const $u=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Eu{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[$u](){return this}}function qo(t,e){return D(e).forEach(n=>{Pn(t[n]||(t[n]=new le),e[n])}),t}function Au(t){return new Eu(e=>{const n=is(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,$e.storagemutated.unsubscribe(u)}};e.start&&e.start(o);let a=!1,l=!1;function c(){return D(i).some(h=>s[h]&&Su(s[h],i[h]))}const u=h=>{qo(s,h),c()&&d()},d=()=>{if(a||r)return;s={};const h={},f=function(y){n&&dt();const m=()=>Se(t,{subscr:y,trans:null}),v=A.trans?ht(A.transless,m):m();return n&&v.then(pe,pe),v}(h);l||($e("storagemutated",u),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(c()?d():(s={},i=h,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return d(),o})}let Lr;try{Lr={indexedDB:j.indexedDB||j.mozIndexedDB||j.webkitIndexedDB||j.msIndexedDB,IDBKeyRange:j.IDBKeyRange||j.webkitIDBKeyRange}}catch{Lr={indexedDB:null,IDBKeyRange:null}}const Pe=ze;function pn(t){let e=he;try{he=!0,$e.storagemutated.fire(t)}finally{he=e}}lt(Pe,{...cn,delete:t=>new Pe(t,{addons:[]}).delete(),exists:t=>new Pe(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return fs(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):hs(e,n).toCollection().primaryKeys()}(Pe.dependencies).then(t)}catch{return L(new C.MissingAPI)}},defineClass:()=>function(t){V(this,t)},ignoreTransaction:t=>A.trans?ht(A.transless,t):t(),vip:Rr,async:function(t){return function(){try{var e=zr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:x.resolve(e)}catch(n){return L(n)}}},spawn:function(t,e,n){try{var r=zr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:x.resolve(r)}catch(s){return L(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=x.resolve(typeof t=="function"?Pe.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:x,debug:{get:()=>oe,set:t=>{$o(t,t==="dexie"?()=>!0:zo)}},derive:Ze,extend:V,props:lt,override:vo,Events:Ct,on:$e,liveQuery:Au,extendObservabilitySet:qo,getByKeyPath:me,setByKeyPath:te,delByKeyPath:function(t,e){typeof e=="string"?te(t,e,void 0):"length"in e&&[].map.call(e,function(n){te(t,n,void 0)})},shallowClone:_o,deepClone:qt,getObjectDiff:ms,cmp:W,asap:wo,minKey:-(1/0),addons:[],connections:At,errnames:as,dependencies:Lr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Pe.maxKey=Lt(Pe.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&($e("storagemutated",t=>{if(!he){let e;Ln?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),he=!0,dispatchEvent(e),he=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{he||pn(t)}));let he=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),$e("storagemutated",e=>{he||t.postMessage(e)}),t.onmessage=e=>{e.data&&pn(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){$e("storagemutated",e=>{try{he||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&pn(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&pn(e.changedParts)})}x.rejectionMapper=function(t,e){if(!t||t instanceof et||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Ys[t.name])return t;var n=new Ys[t.name](e||t.message,t);return"stack"in t&&fe(n,"stack",{get:function(){return this.inner.stack}}),n},$o(oe,zo);class Jt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class oi extends Jt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const In="locationchange";let ai=!1;const Cu=window.history.pushState;function li(...t){const e=Cu.apply(window.history,t);return window.dispatchEvent(new Event(In)),e}const Pu=window.history.replaceState;function ci(...t){const e=Pu.apply(window.history,t);return window.dispatchEvent(new Event(In)),e}function Tu(){if(!ai){if(window.history.pushState===li)throw new oi("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===ci)throw new oi("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");ai=!0,window.history.pushState=li,window.history.replaceState=ci,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(In))})}}function ku(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Ou(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Mu(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?ku(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class ju extends Jt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Wo(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const ui=6;function di(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>ui)throw new ju(`Route sanitization depth has exceed the max of ${ui} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Wo(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class nr extends Jt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Nu(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new nr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new nr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new nr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Ru(t,e,n,r=!1){const s=Vo(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Vo(t,e,n=""){var r;if(!n&&e!=null)throw new Jt("Route base regexp was defined but routeBase string was not provided.");const s=zu(e)?`/${n}`:"",i=t.search?Ou(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function zu(t){return!!(t&&window.location.pathname.match(t))}function Du(t={}){var e;Nu(t),Tu();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const c=i.getCurrentRawRoutes(),u={...c,...o},d=i.sanitizeFullRoute(u);if(!(!l&&Wo(c,d)))return Ru(d,r,n,a)},createRoutesUrl:o=>Vo(o,r,n),getCurrentRawRoutes:()=>Mu(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Jt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(In,()=>di(i)),s=!0),o&&di(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Jo=Du({routeBase:"resizable-image-element"}),Lu=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Iu="resizable-image-element-storage";class Bu extends ze{constructor(){super(Iu),this.version(1).stores({storedUrls:"&index"})}}const rr=new Bu,hi={async set(t){const e=Tn(t).map((n,r)=>({index:r,url:n}));await rr.storedUrls.clear(),await rr.storedUrls.bulkPut(e)},async get(){const e=(await rr.storedUrls.toArray()).map(r=>r.url),n=Tn(e);return Fu(n.length?n:Lu)}};function Fu(t){var e,n;try{const r=Tn(((n=(e=Jo.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function Tn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(ct)}const{defineElement:Hu,defineElementNoInputs:Ku}=Vl(),on=Hu()({tagName:"vir-url-input",events:{urlsChange:ln()},styles:Qe`
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
                ${St("input",a=>{const c=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));e(new n.urlsChange(c))})}
                ${St("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),gt={max:{width:300,height:600},min:{width:300,height:150}};Ku({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Gi(hi.get()),constraints:void 0,router:Jo,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Qe`
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

        ${t.showConstraints} ${xt} {
            border-color: blue;
        }

        ${xt} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||gt.min.width,height:Number(o==null?void 0:o.minH)||gt.min.height},max:{width:Number(o==null?void 0:o.maxW)||gt.max.width,height:Number(o==null?void 0:o.maxH)||gt.max.height}}})}const n=t.constraints??gt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!Ei(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Ht(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),K`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${on}
                ${ns(on,{urls:r})}
                ${St(on.events.urlsChange,o=>{const a=o.detail;hi.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${on}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${St("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
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
                                    ${St("input",d=>{i(d.currentTarget,o,l)})}
                                />
                            </label>
                        `});return K`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${Uu(n,t.imageUrls)}</div>
        `}});function Uu(t,e){return fr(e,"Loading...",n=>Tn(n).map(r=>{const s=`
                height: ${ee(t.max.height)};
                max-height: ${ee(t.max.height)};
                width: ${ee(t.max.width)};
                max-width: ${ee(t.max.width)}`,i=`height: ${ee(t.min.height)}; width: ${ee(t.min.width)}`;return K`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${xt}
                            ${ns(xt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${xt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
