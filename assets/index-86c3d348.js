(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Jo=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],hi=new RegExp(Jo.join("|"),"g");function Go(t,e){return t.filter((n,r)=>!e.includes(r))}function Yo(t){return t.reduce((n,r)=>n.concat(r),[])}function Qo(t){return t.map(e=>e.trim()).filter(e=>e!=="")}function Xo(t,e){return t.includes(e)}function Zo(t,e){return t.map(e)}async function ea(t,e){await Lr(t,e)}async function Lr(t,e){return await t.reduce(async(r,s,i,o)=>{const a=await r,l=await e(s,i,o);return a.push(l),a},Promise.resolve([]))}async function ta(t,e,n){const r=n!=null&&n.blocking?await Lr(t,e):await Promise.all(t.map(e));return t.filter((s,i)=>!!r[i])}function Ir(t){const e=new Set(Array.from(t.toLowerCase()));return Array.from(e).join("")}function na(t,e){return new RegExp(t.source,Ir([t.flags,e].join("")))}function Br(t,e){return t.match(e)??[]}function ra(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}function fi(t){return t.replace(hi,"")}const sa=fi;function mi(t){return t.replace(/,/g,"")}function kn(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function ia(t,e,n){const r=yi({searchIn:t,searchFor:e,caseSensitive:n,includeLength:!0}),s=gi(e,n);return t.split(s).reduce((a,l,c)=>{const u=r[c],d=a.concat(l);if(u){const h=t.slice(u.index,u.index+u.length);return d.concat(h)}else return d},[])}const oa={capitalizeFirstLetter:!1};function tt(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function aa(t,e){return e.capitalizeFirstLetter?tt(t):t}function la(t,e=oa){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return aa(r,e)}function ps(t){return t!==t.toUpperCase()}function ca(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=ps(o)||ps(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function ua(t,e,n,r=n.length){const s=t.substring(0,e),i=t.substring(e+r);return`${s}${n}${i}`}function pi(t){return t.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function gi(t,e){const n=`g${!e&&typeof t=="string"?"i":""}`;return t instanceof RegExp?new RegExp(t.source,Ir(`${t.flags}${n}`)):new RegExp(pi(t),n)}function yi({searchIn:t,searchFor:e,caseSensitive:n,includeLength:r}){const s=gi(e,n),i=[],o=[];return t.replace(s,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new Error(`Match index "${l}" is not a number. Searching for "${e}" in "${t}".`);const c=a[0];if(typeof c!="string")throw new Error(`regExpMatch should've been a string but was ${typeof c}!`);o.push({index:l,length:c.length}),i.push(l);const u=a[0];if(typeof u!="string")throw new Error(`Original match when searching for "${e}" in "${t}" at index ${l} is not a string.`);return u}),r?o:i}function nt(t,e){return t.split(e)}const vi=String(NaN);function Kr(t){if(typeof t=="string"&&isNaN(Number(t)))return vi;const e=String(t),[n,r]=e.split("."),s=r?`.${r}`:"";return`${Br(n.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${s}`}function Hr({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}function wi(t){return typeof t=="number"?t:Number(typeof t=="string"?mi(t):t)}function bi(t){return String(t).includes("e")}function _i({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}const Fr=["january","february","march","april","may","june","july","august","september","october","november","december"],Si=Fr.map(t=>t.slice(0,3));class pn extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function da(t,e=""){const[n,r,s=""]=t.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${t}"`);const i=s.length<4?`${e}${s.padStart(2,"0")}`:s;return Ur(`${i.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function xi(t,e=!1){const[n,r,s]=t.replace(",","").split(" ");if(!n||!r||!s)throw new pn(`Invalid ${xi.name} input: ${t}`);const i=Fr.indexOf(n.toLowerCase()),o=Si.indexOf(n.toLowerCase());let a=i===-1?o:i;if(a===-1)if(e)a=new Date().getUTCMonth();else throw new pn(`Month name ${n} was not found.`);return Ur(`${s.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function Ur(t){const e=new Date(t+"T00:00:00.000Z");if(isNaN(Number(e)))throw new pn(`Invalid utc date formed from input "${t}"`);return e}const gs={days:{getKey:"getUTCDate",setKey:"setUTCDate"},months:{getKey:"getUTCMonth",setKey:"setUTCMonth"},years:{getKey:"getUTCFullYear",setKey:"setUTCFullYear"}};function ha(t,e){t instanceof Date||(t=new Date(t));let n=new Date(t);return ie(e).forEach(r=>{const s=e[r];if(!s)return;const{getKey:i,setKey:o}=ki(gs,r)?gs[r]:{getKey:`getUTC${tt(r)}`,setKey:`setUTC${tt(r)}`},a=n[i]();n[o](a+s)}),n}function fa(){return typeof window<"u"}function ma(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(n=>$e(n).trim()).join(`
`))}function pa(t){return t?t.map($e).filter(lt).join(`
`):""}function $e(t){return t?t instanceof Error?t.message:String(t):""}function Pt(t){return t instanceof Error?t:new Error($e(t))}function ga(t){let e;try{const n=t();return Oi(n)?new Promise(async r=>{try{const s=await n;return r(s)}catch(s){e=Pt(s)}return r(e)}):n}catch(n){e=Pt(n)}return e}function lt(t){return!!t}const ya=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ve(t,e){return t?ya.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function va(t,e){return t&&e.every(n=>ve(t,n))}function wa(t,e){return ve(e,t)}function ie(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ba(t){return ie(t).map(e=>t[e])}function rr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function _a(t){return Object.fromEntries(t)}function gn(t){return!!t&&typeof t=="object"}function $i(t,e){try{if(t===e)return!0;if(gn(t)&&gn(e)){const n=rr(t),r=rr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${$e(n)}`),n}}function Sa(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function xa(t,e,n=!1,r=!1){try{return It(t,e,n),!0}catch(s){return r&&console.error(s),!1}}function It(t,e,n=!1,r={}){const s=ie(t),i=new Set(ie(e));if(!n){const o=s.filter(a=>!i.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!ve(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${u}`)}const l=t[o],c=e[o];r[o]||Ei(l,c,a,n,r[o]??{})})}function Ei(t,e,n,r,s){var a;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{ve(e,"constructor")&&(!ve(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,c)=>{if(e.map(d=>{try{Ei(l,d,n,r,s);return}catch(h){return new Error(`entry at index "${c}" did not match expected shape: ${$e(h)}`)}}).filter(lt).length===e.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${e.join(", ")}"`)})):gn(e)&&It(t,e,r,s)}function Tn(t){return Array.isArray(t)?"array":typeof t}function De(t,e){return Tn(t)===e}function Ai(t,e,n){if(!De(t,e))throw new TypeError(`'${n}' is of type '${Tn(t)}' but type '${e}' was expected.`)}function sr({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(De(n,"object")?It(r,n):Ai(r,Tn(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function Ci(t){return ie(t).filter(e=>isNaN(Number(e)))}function qr(t){return Ci(t).map(n=>t[n])}function Pi(t,e){return qr(e).includes(t)}function $a(t,e,n=!1){return n?t.reduce((r,s)=>{const i=qr(e).find(o=>String(o).toUpperCase()===String(s).toUpperCase());return i?r.concat(i):r},[]):t.filter(r=>Pi(r,e))}function Bt(t,e){return ie(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Ea(t,e){return Bt(t,n=>!e.includes(n))}function Aa(t,e){return Bt(t,n=>e.includes(n))}function ki(t,e){return e in t}function Ca(t){return JSON.parse(JSON.stringify(t))}function Pa(t){function e(n){return ie(t).reduce((s,i)=>{const o=n(i,t[i],t);return{...s,[i]:o}},{})}return e}function On(t,e){let n=!1;const r=ie(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(ie(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function Ti(t,e){const n=e[0];if(!ve(t,n))return;const r=t[n];return e.length>1?Ti(r,e.slice(1)):r}function Kt(t){const e=ct();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}async function ka(t,e){return Kt(t).then(()=>e)}function Oi(t){return!!(ve(t,"then")&&typeof t.then=="function")}class Mi extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function Ta(t,e){return new Promise(async(n,r)=>{const s=t===1/0?void 0:setTimeout(()=>{r(new Mi(t))},t);try{const i=await e;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function ct(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ct.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}async function Oa({conditionCallback:t,timeoutMs:e=1e4,intervalMs:n=100,timeoutMessage:r=""}){let s=!1,i;async function o(){try{s=!!await t()}catch(l){s=!1,i=l}}const a=Date.now();for(await o();!s;){if(await Kt(n),Date.now()-a>=e){const l=r?`${r}: `:"";throw new Error(`${l}Timeout of "${e}" exceeded waiting for condition to be true${$e(i)}`)}await o()}}const Bn="://";function Ma(...t){const e=t.join("/"),[n,r=""]=e.includes(Bn)?e.split(Bn):["",e];let s=!1,i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").map(a=>a.includes("?")||s?(s=!0,a):encodeURIComponent(a)).reduce((a,l,c,u)=>{if(i)return a;const d=u[c+1];let h=l;const f=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||f){i=!0;let y=!1;const m=u.slice(f?c+2:c+1).reduce((v,g)=>(g.includes("#")&&(y=!0),y?v.concat(g):[v,g].join("&")),"");h=[l,d,m].join("")}return a.concat(h)},[]);return[n,n?Bn:"",o.join("/")].join("")}const ja=/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/;function Na(t){return!!t.match(ja)}const Ra=["k","M","B","T","P","E","Z","Y"];function Wr({beforeDot:t,afterDot:e="",maxLength:n}){if(e.length){const r=n-t.length-1;if(r>0){const s=e.slice(0,r);return Number(s)?[t,s].join("."):t}}return t}function Da(t,e,n){const[r,s]=nt(t,"."),i=Kr(r),o=Br(i,/,/g).length,a=e[o-1],[l,c]=nt(i,","),u=[c,s].join("");return l.length+1>n?["0.",l[0],e[o]].join(""):[Wr({beforeDot:l,afterDot:u,maxLength:n-1}),a].join("")}const ys=3;function za({input:t,maxLength:e}){const n=String(t),[r,s]=nt(n,"e"),i=s.replace(/^[\-\+]/,""),o=s[0],a=["e",o,i].join(""),[l,c]=nt(r,"."),u=i.length+ys;return u===e?[l,a].join(""):u>e?o==="-"?"0":String(1/0):[Wr({afterDot:c,beforeDot:l,maxLength:e-i.length+ys}),a].join("")}function La(t,e){const[n,r]=nt(Kr(t),".");if(n.length<=e)return Wr({beforeDot:n,afterDot:r,maxLength:e})}function Ia(t,{customSuffixes:e=Ra,maxLength:n=6}={}){const r=wi(t);if(isNaN(r)||r===1/0)return String(r);if(bi(r))return za({input:r,maxLength:n});const s=String(r),i=La(s,n);return i??Da(s,e,n)}function Ba(t,e){return t.length>=e}function Ka(t){return t}function Ha(t){return t}function Fa(){return t=>t}function Ua(t){return t}const qa=Object.freeze(Object.defineProperty({__proto__:null,InvalidDateError:pn,NaNString:vi,PromiseTimeoutError:Mi,addCommasToNumber:Kr,addRegExpFlags:na,ansiRegex:hi,areJsonEqual:$i,assertMatchesObjectShape:It,assertRuntimeTypeOf:Ai,awaitedBlockingMap:Lr,awaitedFilter:ta,awaitedForEach:ea,calculateRelativeDate:ha,camelCaseToKebabCase:ca,capitalizeFirstLetter:tt,clamp:Hr,collapseWhiteSpace:kn,combineErrorMessages:pa,combineErrors:ma,convertIntoNumber:wi,copyThroughJson:Sa,createDateFromNamedCommaFormat:xi,createDateFromSlashFormat:da,createDateFromUtcIsoFormat:Ur,createDeferredPromiseWrapper:ct,deDupeRegExFlags:Ir,doesRequireScientificNotation:bi,englishFullMonthNames:Fr,englishShortMonthNames:Si,ensureError:Pt,ensureMinAndMax:_i,ensureType:Ua,escapeStringForRegExp:pi,executeAndReturnError:ga,extractErrorMessage:$e,filterObject:Bt,filterOutIndexes:Go,filterToEnumValues:$a,flatten2dArray:Yo,getAllIndexesOf:yi,getEntriesSortedByKey:rr,getEnumTypedKeys:Ci,getEnumTypedValues:qr,getObjectTypedKeys:ie,getObjectTypedValues:ba,getRuntimeTypeOf:Tn,getValueFromNestedKeys:Ti,hasKey:ki,isBrowser:fa,isEnumValue:Pi,isKeyof:wa,isLengthAtLeast:Ba,isObject:gn,isPromiseLike:Oi,isRuntimeTypeOf:De,isTruthy:lt,isUuid:Na,joinUrlParts:Ma,joinWithFinalConjunction:ra,jsonify:Ca,kebabCaseToCamelCase:la,makeReadonly:Ha,makeWritable:Ka,mapObjectValues:On,mapObjectValuesSync:Pa,matchesObjectShape:xa,omitObjectKeys:Ea,parseJson:sr,pickObjectKeys:Aa,removeAnsiEscapeCodes:fi,removeColor:sa,removeCommasFromNumberString:mi,replaceStringAtIndex:ua,safeMatch:Br,splitIncludeSplit:ia,trimArrayStrings:Qo,truncateNumber:Ia,typedArrayIncludes:Xo,typedHasProperties:va,typedHasProperty:ve,typedMap:Zo,typedObjectFromEntries:_a,typedSplit:nt,wait:Kt,waitForCondition:Oa,waitValue:ka,wrapNarrowTypeWithTypeCheck:Fa,wrapPromiseInTimeout:Ta},Symbol.toStringTag,{value:"Module"})),Vr=globalThis.crypto;function ji({min:t,max:e}){const{min:n,max:r}=_i({min:Math.floor(t),max:Math.floor(e)}),s=r-n+1,i=Math.ceil(Math.log2(s)/8),o=Math.floor(256**i/s)*s,a=new Uint8Array(i);let l;do Vr.getRandomValues(a),l=a.reduce((c,u,d)=>c+u*256**d,0);while(l>=o);return n+l%s}function Wa(t=50){return ji({min:0,max:99})<Hr({value:Math.floor(t),min:0,max:100})}function Va(){return Vr.randomUUID()}function Ni(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return Vr.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function Ja(t){return t.map(e=>({value:e,sort:Ni()})).sort((e,n)=>e.sort.localeCompare(n.sort)).map(({value:e})=>e)}async function Ga(t){const e=ct(),n=new Image;return n.onload=()=>{e.resolve(n)},n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,e.promise}function ee(t){return String(t).endsWith("px")?String(t):`${t}px`}function Ya(t){return Number(t.replace(/px$/,""))}function vt(t){const e=t.query.split(" ").filter(lt);if(!t.query)return t.element instanceof Element?t.element:t.element.host;if(e.length>1)return ir({...t,queries:e});if("shadowRoot"in t.element&&t.element.shadowRoot)return vt({...t,element:t.element.shadowRoot});const n=Array.from(t.element.children).filter(r=>!!r.shadowRoot).map(r=>r.shadowRoot);if(t.all){const r=Array.from(t.element.querySelectorAll(t.query)),s=n.map(i=>vt({...t,all:!0,element:i})).flat();return[...r,...s]}else{const r=t.element.querySelector(t.query);if(r)return r;for(let s=0;s<n.length;s++){const i=n[s],o=vt({...t,element:i});if(o)return o}return}}function ir(t){const e=t.queries[0];if(!e)throw new Error(`Somehow the first query was empty in '[${t.queries.join(",")}]' for query '${t.query}'`);const n=vt({...t,query:e});return t.queries.length<=1?n:De(n,"array")?n.map(r=>ir({...t,element:r,queries:t.queries.slice(1)})).flat().filter(lt):n?ir({...t,element:n,queries:t.queries.slice(1)}):void 0}function Qa(t){const e=Bt(t,(i,o)=>o!=null),n=On(e,(i,o)=>String(o)),s=new URLSearchParams(Object.entries(n)).toString();return s?`?${s}`:""}function Xa(t,e){const n=De(t,"string")?new URL(t):t,r=Array.from(n.searchParams.entries()),s=Object.fromEntries(r);return e&&It(s,e),s}async function Za(t){const e=ct(),n=document.createElement("video");return n.addEventListener("loadeddata",()=>{e.resolve(n)}),n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,n.load(),e.promise}const el=Object.freeze(Object.defineProperty({__proto__:null,addPx:ee,createUuid:Va,loadImage:Ga,loadVideo:Za,objectToSearchParamsString:Qa,queryThroughShadow:vt,randomBoolean:Wa,randomInteger:ji,randomString:Ni,removePx:Ya,searchParamStringToObject:Xa,shuffleArray:Ja},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on=window,Jr=on.ShadowRoot&&(on.ShadyCSS===void 0||on.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gr=Symbol(),vs=new WeakMap;let Ri=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Gr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Jr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=vs.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&vs.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new Ri(typeof t=="string"?t:t+"",void 0,Gr),Di=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Ri(n,t,Gr)},tl=(t,e)=>{Jr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=on.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},ws=Jr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kn;const yn=window,bs=yn.trustedTypes,nl=bs?bs.emptyScript:"",_s=yn.reactiveElementPolyfillSupport,or={toAttribute(t,e){switch(e){case Boolean:t=t?nl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},zi=(t,e)=>e!==t&&(e==e||t==t),Hn={attribute:!0,type:String,converter:or,reflect:!1,hasChanged:zi};let We=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=Hn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Hn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(ws(s))}else e!==void 0&&n.push(ws(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return tl(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Hn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:or).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:or;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||zi)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};We.finalized=!0,We.elementProperties=new Map,We.elementStyles=[],We.shadowRootOptions={mode:"open"},_s==null||_s({ReactiveElement:We}),((Kn=yn.reactiveElementVersions)!==null&&Kn!==void 0?Kn:yn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fn;const vn=window,rt=vn.trustedTypes,Ss=rt?rt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ye=`lit$${(Math.random()+"").slice(9)}$`,Li="?"+ye,rl=`<${Li}>`,st=document,kt=(t="")=>st.createComment(t),Tt=t=>t===null||typeof t!="object"&&typeof t!="function",Ii=Array.isArray,sl=t=>Ii(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xs=/-->/g,$s=/>/g,Ae=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Es=/'/g,As=/"/g,Bi=/^(?:script|style|textarea|title)$/i,il=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),ol=il(1),we=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Cs=new WeakMap,Qe=st.createTreeWalker(st,129,null,!1),al=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=ft;for(let l=0;l<n;l++){const c=t[l];let u,d,h=-1,f=0;for(;f<c.length&&(o.lastIndex=f,d=o.exec(c),d!==null);)f=o.lastIndex,o===ft?d[1]==="!--"?o=xs:d[1]!==void 0?o=$s:d[2]!==void 0?(Bi.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Ae):d[3]!==void 0&&(o=Ae):o===Ae?d[0]===">"?(o=s??ft,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?Ae:d[3]==='"'?As:Es):o===As||o===Es?o=Ae:o===xs||o===$s?o=ft:(o=Ae,s=void 0);const y=o===Ae&&t[l+1].startsWith("/>")?" ":"";i+=o===ft?c+rl:h>=0?(r.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+ye+y):c+ye+(h===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ss!==void 0?Ss.createHTML(a):a,r]};let ar=class Ki{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[c,u]=al(e,n);if(this.el=Ki.createElement(c,r),Qe.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=Qe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(ye)){const f=u[o++];if(d.push(h),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(ye),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?cl:m[1]==="?"?dl:m[1]==="@"?hl:Mn})}else l.push({type:6,index:i})}for(const h of d)s.removeAttribute(h)}if(Bi.test(s.tagName)){const d=s.textContent.split(ye),h=d.length-1;if(h>0){s.textContent=rt?rt.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],kt()),Qe.nextNode(),l.push({type:2,index:++i});s.append(d[h],kt())}}}else if(s.nodeType===8)if(s.data===Li)l.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(ye,d+1))!==-1;)l.push({type:7,index:i}),d+=ye.length-1}i++}}static createElement(e,n){const r=st.createElement("template");return r.innerHTML=e,r}};function it(t,e,n=t,r){var s,i,o,a;if(e===we)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const c=Tt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=it(t,l._$AS(t,e.values),l,r)),e}let ll=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:st).importNode(r,!0);Qe.currentNode=i;let o=Qe.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Yr(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new fl(o,this,e)),this.u.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=Qe.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Yr=class Hi{constructor(e,n,r,s){var i;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=it(this,e,n),Tt(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==we&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):sl(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==I&&Tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(st.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ar.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new ll(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=Cs.get(e.strings);return n===void 0&&Cs.set(e.strings,n=new ar(e)),n}k(e){Ii(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Hi(this.O(kt()),this.O(kt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},Mn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=it(this,e,n,0),o=!Tt(e)||e!==this._$AH&&e!==we,o&&(this._$AH=e);else{const a=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=it(this,a[r+l],n,l),c===we&&(c=this._$AH[l]),o||(o=!Tt(c)||c!==this._$AH[l]),c===I?e=I:e!==I&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},cl=class extends Mn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}};const ul=rt?rt.emptyScript:"";let dl=class extends Mn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==I?this.element.setAttribute(this.name,ul):this.element.removeAttribute(this.name)}},hl=class extends Mn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=it(this,e,n,0))!==null&&r!==void 0?r:I)===we)return;const s=this._$AH,i=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==I&&(s===I||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},fl=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){it(this,e)}};const Ps=vn.litHtmlPolyfillSupport;Ps==null||Ps(ar,Yr),((Fn=vn.litHtmlVersions)!==null&&Fn!==void 0?Fn:vn.litHtmlVersions=[]).push("2.6.1");const ml=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new Yr(e.insertBefore(kt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Un,qn;let wt=class extends We{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ml(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return we}};wt.finalized=!0,wt._$litElement$=!0,(Un=globalThis.litElementHydrateSupport)===null||Un===void 0||Un.call(globalThis,{LitElement:wt});const ks=globalThis.litElementPolyfillSupport;ks==null||ks({LitElement:wt});((qn=globalThis.litElementVersions)!==null&&qn!==void 0?qn:globalThis.litElementVersions=[]).push("3.2.2");var pl=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function gl(){return t=>{}}let Ot=class extends wt{};Ot=pl([gl()],Ot);const yl={capitalizeFirstLetter:!1};function vl(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function wl(t,e){return e.capitalizeFirstLetter?vl(t):t}function bl(t,e=yl){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return wl(r,e)}function Ts(t){return t!==t.toUpperCase()}function _l(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=Ts(o)||Ts(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const Sl=["january","february","march","april","may","june","july","august","september","october","november","december"];Sl.map(t=>t.slice(0,3));function Qr(t){return t?t instanceof Error?t.message:String(t):""}function xl(t){return t instanceof Error?t:new Error(Qr(t))}const $l=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Fi(t,e){return t?$l.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function El(t,e){return t&&e.every(n=>Fi(t,n))}function ze(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Os(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Ms(t){return!!t&&typeof t=="object"}function Al(t,e){try{if(t===e)return!0;if(Ms(t)&&Ms(e)){const n=Os(t),r=Os(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Qr(n)}`),n}}function Cl(t,e){return ze(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function ot(t,e){let n=!1;const r=ze(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(ze(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function Pl(t){return!!(Fi(t,"then")&&typeof t.then=="function")}function Mt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Mt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function js(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):kl(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn;((Wn=window.HTMLSlotElement)===null||Wn===void 0?void 0:Wn.prototype.assignedElements)!=null;const lr=Symbol("this-is-an-element-vir-declarative-element"),Xr=Symbol("key for ignoring inputs not having been set yet"),Tl={[Xr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ol={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zr=t=>(...e)=>({_$litDirective$:t,values:e});let es=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function Ml(t,e){return Ui(t,e,Ot)}function Ui(t,e,n){cr(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function cr(t,e){if(t.type!==Ol.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function ts(t,e){return jl(t,e)}const jl=Zr(class extends es{constructor(t){super(t),this.element=Ml(t,"assign")}render(t,e){return Nl(t,this.element,e),we}});function Nl(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function qi(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof Ot?!0:qi(n)}var T=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Q=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},re,Pe,ke,Te,Ge,Ve,G,bt,ur,dr;const Wi=Symbol("element-vir-async-state-marker");function Rl(t){if(!t)return{};const e=Cl(t,(r,s)=>s instanceof Vi);return ot(e,(r,s)=>new Dl(s.initialValue))}const Jt=Symbol("not set");class Dl{constructor(e){re.add(this),Pe.set(this,Jt),ke.set(this,void 0),Te.set(this,void 0),Ge.set(this,[]),Ve.set(this,void 0),G.set(this,Mt()),this.asyncMarkerSymbol=Wi,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(T(this,Pe,"f")===Jt||!Al(e.trigger,T(this,Pe,"f"))){Q(this,Pe,e.trigger,"f");const n=e.createPromise();T(this,re,"m",ur).call(this,n)}}else"newPromise"in e?(T(this,Pe,"f"),T(this,re,"m",ur).call(this,e.newPromise),T(this,re,"m",bt).call(this)):"resolvedValue"in e?T(this,re,"m",dr).call(this,e.resolvedValue):e.forceUpdate&&(Q(this,Pe,Jt,"f"),Q(this,ke,void 0,"f"),T(this,G,"f").isSettled()||T(this,G,"f").reject("Canceled by force update"),Q(this,G,Mt(),"f"),T(this,re,"m",bt).call(this))}getValue(){return T(this,G,"f").isSettled()?T(this,Te,"f")?T(this,Te,"f"):T(this,ke,"f"):T(this,G,"f").promise}addSettleListener(e){T(this,Ge,"f").push(e)}removeSettleListener(e){Q(this,Ge,T(this,Ge,"f").filter(n=>n!==e),"f")}}Pe=new WeakMap,ke=new WeakMap,Te=new WeakMap,Ge=new WeakMap,Ve=new WeakMap,G=new WeakMap,re=new WeakSet,bt=function(){T(this,Ge,"f").forEach(e=>{e()})},ur=function(e){e!==T(this,Ve,"f")&&(Q(this,ke,void 0,"f"),Q(this,Te,void 0,"f"),Q(this,Ve,e,"f"),T(this,G,"f").isSettled()&&Q(this,G,Mt(),"f"),e.then(n=>{T(this,Ve,"f")===e&&T(this,re,"m",dr).call(this,n)}).catch(n=>{T(this,Ve,"f")===e&&(Q(this,Te,xl(n),"f"),T(this,G,"f").promise.catch(()=>{}),T(this,G,"f").reject(n),T(this,re,"m",bt).call(this))}))},dr=function(e){e!==T(this,ke,"f")&&(Q(this,Te,void 0,"f"),Q(this,ke,e,"f"),T(this,G,"f").isSettled()&&Q(this,G,Mt(),"f"),T(this,G,"f").resolve(e),T(this,re,"m",bt).call(this))};class Vi{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=Wi}}function Ji(t){return new Vi(t)}function Gi(t,e){return`${t}-${_l(e)}`}function zl(t,e){return e?ot(e,n=>se(`--${Gi(t,String(n))}`)):{}}function Ll(t,e){return t?ot(t,(n,r)=>{const s=e[n];return se(`var(${s}, ${r})`)}):{}}class Il extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Yi(){return t=>{var e;return e=class extends Il{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function an(){return Yi()}function Bl(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Yi()(n);return e[n]=r,e},{}):{}}function Ns(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Rs(t,e){const n=t;function r(i,o){e&&Ns(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Ns(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Kl(t,e){return e?ot(e,n=>Gi(t,String(n))):{}}function Hl({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:ot(t,(r,s)=>se(`:host(.${s})`)),hostClassNames:ot(t,(r,s)=>se(s)),cssVarNames:e,cssVarValues:n}}function Fl({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&ze(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function Ul(t,e){function n(s){ze(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function ns(t){var e;const n=Bl(t.events),r=Kl(t.tagName,t.hostClasses),s=zl(t.tagName,t.cssVars),i=Ll(t.cssVars,s),o={...Tl,...t.options},a=typeof t.styles=="function"?t.styles(Hl({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Di``,l=t.renderCallback,c=(e=class extends Ot{createRenderParams(){return Ul(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){qi(this)&&!this.haveInputsBeenSet&&!o[Xr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${ts.name}" directive on it. If no inputs are intended, use "${ns.name}" to define ${t.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(u));const d=t.renderCallback(u);return Fl({host:u.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:u.state,inputs:u.inputs}),d}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const u=this.createRenderParams();t.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const u=this.createRenderParams();t.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){ze(u).forEach(d=>{js()(this,d),this.instanceInputs[d]=u[d]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=Rl(t.stateInit),this.instanceInputs=Rs(this,!1),this.instanceState=Rs(this,!0);const u=t.stateInit||{};ze(u).forEach(d=>{js()(this,d);const h=this.asyncStateHandlerMap[d];h?(this.instanceState[d]=h.getValue(),h.addSettleListener(()=>{this[d]=h.getValue()})):this.instanceState[d]=u[d]}),this.definition=c}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(c,{[lr]:{value:!0,writable:!1},name:{value:bl(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,c),c}function Qi(){return t=>ns({...t,options:{[Xr]:!1},...t.options})}function _t(t,e){return ql(t,e)}const ql=Zr(class extends es{constructor(t){super(t),this.element=Ui(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),we}}),Ds="onDomCreated",zs=Zr(class extends es{constructor(t){super(t),cr(t,Ds)}update(t,[e]){cr(t,Ds);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function hr(t,e,n,r){return t instanceof Error?r?r(t):Qr(t):Pl(t)?e:n?n(t):t}function Wl(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Qi()(s(i))),defineElementNoInputs:i=>(r(i),ns(s(i)))}}function Vl(t,e){return t.filter((n,r)=>!e.includes(r))}function Xi(t){return t.filter(e=>El(e,["tagName",lr])&&!!e.tagName&&!!e[lr])}const Zi=new WeakMap;function Jl(t,e){var n;const r=Xi(e);return(n=eo(Zi,[t,...r]).value)===null||n===void 0?void 0:n.template}function Gl(t,e,n){const r=Xi(e);return no(Zi,[t,...r],n)}function eo(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=to(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?eo(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function to(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function no(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=to(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const c=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=c),no(c,e,n,r+1)}function ro(t,e,n){return{name:t,check:e,transform:n}}const Yl=new WeakMap;function so(t,e,n){const r=Jl(t,e),s=r??n();if(!r){const o=Gl(t,e,s);if(o.result)Yl.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Vl(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function io(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,c)=>{var u;const d=s.length-1,h=s[d],f=c-1,y=e[f];let m;r&&r(l),typeof h=="string"&&(m=(u=n.find(g=>g.check(h,l,y)))===null||u===void 0?void 0:u.transform,m&&(s[d]=h+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[c];m?i[d]=i[d]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function oo(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Ql=[ro("tag name css selector interpolation",(t,e,n)=>oo(n),t=>t.tagName)];function Xl(t,e){return io(t,e,Ql)}function Ye(t,...e){const n=so(t,e,()=>Xl(t,e));return Di(n.strings,...n.values)}const Zl=[ro("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=oo(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function ec(t){}function tc(t){return io(t.strings,t.values,Zl,ec)}function F(t,...e){const n=ol(t,...e),r=so(t,e,()=>tc(n));return{...n,strings:r.strings,values:r.values}}function nc(t,e){return t<e}function rc(t,e){return t>e}const Ls={width:250,height:250};function sc({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?rc:nc)(e.width/e.height,t.width/t.height)?"width":"height"}function Vn({box:t,constraint:e,constraintType:n}){const r=sc({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function ao({box:t,ratio:e}){return On(t,(n,r)=>r*e)}function fr({box:t,min:e,max:n}){return On(t,(r,s)=>Hr({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function lo({min:t,max:e,box:n}){const r=co({min:t,max:e,box:n}),s=ao({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||Ls.height),width:Math.floor(s.width||(t==null?void 0:t.width)||Ls.width)}}function co({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Vn({box:n,constraint:t,constraintType:"min"}):1,s=e?Vn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=ao({ratio:i,box:n});return(t?Vn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function Oe(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=ic(o,r[a]);return`${o}${l}`});return kn(i.join(""))}function ic(t,e){return e._$litType$!=null||e._$litDirective$!=null?Oe(e):Array.isArray(e)?e.map(r=>Oe(r)).join(""):t.endsWith("=")?`"${e}"`:e}function oc(t){const e=ac(t);return De(e,"object")||De(e,"array")}function ac(t){const e=sr({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=lc(t);return sr({jsonString:n,errorHandler:()=>{}})}function lc(t){return kn(t).replace(/,\s*([}\]])/,"$1")}var k=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(k||{});const cc=["text","json"];function Is(t){return cc.includes(t)}async function uc(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":oc(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function dc({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Oe(F`
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
            `):e}function hc(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}return t}async function Bs({imageUrl:t,blockAutoPlay:e,textTransformer:n=r=>r}){var c;let r;try{r=await fetch(t)}catch{}const s=((c=r==null?void 0:r.headers.get("Content-Type"))==null?void 0:c.toLowerCase())??"",i=await(r==null?void 0:r.text())??"",o=r?await uc(s,i):"image",a=n(hc(i??"",o));return console.log({imageText:a,rawText:i}),{templateString:dc({imageText:a,imageType:o,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:o}}var Z=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Z||{}),Gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uo(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var wn={},jn={},be={};Object.defineProperty(be,"__esModule",{value:!0});be.isDebugMode=be.setDebugMode=void 0;let ho=!1;function fc(t){ho=t}be.setDebugMode=fc;function mc(){return ho}be.isDebugMode=mc;var Ht={},Ft={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnyOrigin=t.MessageDirectionEnum=void 0,function(e){e.FromParent="from-parent",e.FromChild="from-child"}(t.MessageDirectionEnum||(t.MessageDirectionEnum={})),t.AnyOrigin=Symbol("any-origin")})(Ft);Object.defineProperty(Ht,"__esModule",{value:!0});Ht.assertAllowedOrigin=void 0;const pc=Ft;function gc(t,e){if(t===pc.AnyOrigin)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}Ht.assertAllowedOrigin=gc;var Nn={};Object.defineProperty(Nn,"__esModule",{value:!0});Nn.dangerDisableSecurityWarningsSymbol=void 0;Nn.dangerDisableSecurityWarningsSymbol=Symbol("dangerDisableSecurityWarningsSymbol");var Rn={};const yc=uo(el),vc=uo(qa);Object.defineProperty(Rn,"__esModule",{value:!0});Rn.sendPingPongMessageToChild=void 0;const wc=yc,Ks=vc,Hs=be,bc=Ht,Jn=Ft;function _c(t,e,n){return n.type===t&&n.direction===e}function Sc(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function xc({message:t,verifyChildData:e,iframeElement:n},r,s){if(!n)throw new Error("No iframe element was provided.");let i=0,o=!1,a,l,c,u=!1;const d={...t,direction:Jn.MessageDirectionEnum.FromParent,messageId:(0,wc.randomString)(32)},h=t.type,f=r===Jn.AnyOrigin?["*"]:r;function y(g){try{(0,bc.assertAllowedOrigin)(r,g);const p=g.data;if(p.type==="error")throw new Error(`Child threw an error: ${p.data}`);if((0,Hs.isDebugMode)()&&console.info("Received message from child",p.messageId,p),p&&u&&_c(h,Jn.MessageDirectionEnum.FromChild,p)&&p.messageId===d.messageId){let w=!1;try{w=e?e(p.data):!0}catch{}if(!w)return;o=!0,l=g,a=p}}catch(p){c=(0,Ks.ensureError)(p)}}globalThis.addEventListener("message",y);const m=Date.now();for(;!o&&i<s&&!c;){const g=n.contentWindow;g&&((0,Hs.isDebugMode)()&&(u?console.info("Re-sending message to child",d.messageId):console.info("Sending message to child",d.messageId,d)),u=!0,f.forEach(p=>{try{g.postMessage(d,{targetOrigin:p})}catch{}})),await(0,Ks.wait)(Sc(i)),i++}const v=Date.now()-m;if(globalThis.removeEventListener("message",y),c)throw c;if(!o)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${s}' tries ('${Math.floor(v/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but received a valid response");return{data:a==null?void 0:a.data,event:l}}Rn.sendPingPongMessageToChild=xc;Object.defineProperty(jn,"__esModule",{value:!0});jn.createIframeMessenger=void 0;const Fs=be,$c=Ht,Ec=Nn,Fe=Ft,Ac=Rn;function fo({allowedOrigins:t,maxAttemptCount:e=10,...n}){if(t!==Fe.AnyOrigin&&t.includes("*")&&(t=Fe.AnyOrigin),t===Fe.AnyOrigin&&!n[Ec.dangerDisableSecurityWarningsSymbol]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==Fe.AnyOrigin&&!t.length)throw new Error(`No allowed origins were provide to ${fo.name}. At least one must be provided.`);const r=t===Fe.AnyOrigin?["*"]:t;return{async sendMessageToChild(s){if(s.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await(0,Ac.sendPingPongMessageToChild)(s,t,s.maxAttemptCount||e)},listenForParentMessages(s){globalThis.addEventListener("message",async i=>{(0,$c.assertAllowedOrigin)(t,i);const o=i.data;(0,Fs.isDebugMode)()&&console.info("Received message from parent",o.messageId,o);const a=await s({...o,originalEvent:i}),l={type:o.type,direction:Fe.MessageDirectionEnum.FromChild,data:a,messageId:o.messageId};(0,Fs.isDebugMode)()&&console.info("Sending message to parent",l.messageId,l),r.forEach(c=>{try{globalThis.parent.postMessage(l,{targetOrigin:c})}catch{}})})}}}jn.createIframeMessenger=fo;var mo={};Object.defineProperty(mo,"__esModule",{value:!0});var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0});Dn.setInterlockingIframeMessengerDebugMode=void 0;const Cc=be;function Pc(t){(0,Cc.setDebugMode)(t)}Dn.setInterlockingIframeMessengerDebugMode=Pc;(function(t){var e=Gt&&Gt.__createBinding||(Object.create?function(r,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,o,a)}:function(r,s,i,o){o===void 0&&(o=i),r[o]=s[i]}),n=Gt&&Gt.__exportStar||function(r,s){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&e(s,r,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(jn,t),n(mo,t),n(Ft,t),n(Dn,t)})(wn);var K=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(K||{});const ce=wn.createIframeMessenger({allowedOrigins:[window.location.origin]});async function kc(t){const e=ct();t.onload=()=>{e.resolve()};try{await ce.sendMessageToChild({message:{type:K.Ready},iframeElement:t})}catch{await e.promise,await ce.sendMessageToChild({message:{type:K.Ready},iframeElement:t})}}async function Tc({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o}){var l;await kc(r),i&&await ce.sendMessageToChild({message:{type:K.ForceSize,data:i},iframeElement:r});const a=o??(await ce.sendMessageToChild({message:{type:K.SendSize},iframeElement:r,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await po({min:t,max:e,imageDimensions:a,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0}),((l=r.contentWindow)==null?void 0:l.document.documentElement.outerHTML)??""}async function po({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:a}){const l=r.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c={min:t,max:e,box:o??n},u=Is(i.imageType)?fr(c):lo(c);l.style.width=ee(Math.floor(u.width)),l.style.height=ee(Math.floor(u.height));const d=fr({min:t,max:e,box:u});u.height<d.height?r.classList.add(Z.VerticallyCenter):r.classList.remove(Z.VerticallyCenter),r.style.width=ee(d.width),r.style.height=ee(d.height);const h=co({min:t,max:e,box:o??n});if(a){if(h>3?await ce.sendMessageToChild({message:{type:K.SendScalingMethod,data:"pixelated"},iframeElement:s}):await ce.sendMessageToChild({message:{type:K.SendScalingMethod,data:"default"},iframeElement:s}),await ce.sendMessageToChild({message:{type:K.SizeDetermined,data:u},iframeElement:s}),i.imageType===k.Html){const f=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},y={width:h*f.width,height:h*f.height};await ce.sendMessageToChild({message:{type:K.SendScale,data:y},iframeElement:s})}else if(Is(i.imageType)){const f=o??n;if(f.height<u.height){const y=u.width/f.width,m=u.height/f.height,v=Math.min(y,m);await ce.sendMessageToChild({message:{type:K.SendScale,data:{height:v,width:v}},iframeElement:s})}}}}const Yt={x:16,y:8};var Us=Object.freeze,Oc=Object.defineProperty,qs=(t,e)=>Us(Oc(t,"raw",{value:Us(e||t.slice())})),Ws,Vs;function Mc(t,e,n){const r=Math.random(),s=F(Ws||(Ws=qs([`
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
    `])),t.imageType,n??"",k.Svg,k.Html,k.Image,k.Video,k.Text,k.Json,k.Audio,wn.MessageDirectionEnum.FromChild,wn.MessageDirectionEnum.FromChild,K.Ready,K.SendScale,K.SendScalingMethod,K.SendSize,K.ForceSize,K.SizeDetermined,k.Json,k.Text,Yt.y,k.Audio),i=F(Vs||(Vs=qs([`
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
    `])),t.imageType,k.Image,k.Svg,k.Video,k.Text,k.Json,k.Text,k.Json,k.Text,k.Json,k.Text,k.Json,Yt.y,Yt.x,k.Text,k.Json,Yt.y,r,e??"",s);return kn(Oe(i)).replace(String(r),`
${t.templateString}
`)}const jc={imageData:Ji()},Js=F`
    <div class="click-cover"></div>
`,Nc={textTransformer:"textTransformer",extraHtml:"extraHtml"},Gn="latest-frame-srcdoc",St=Qi()({tagName:"vir-resizable-image",stateInit:jc,events:{settled:an(),imageDataCalculated:an(),errored:an()},styles:Ye`
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[Gn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(Z.HideLoading),s(new i.settled(!1)),r.classList.remove(Z.VerticallyCenter);const f={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer};try{return Bs(f)}catch{await Kt(1e3);try{return Bs(f)}catch(m){throw s(new i.errored(Pt(m))),m}}},trigger:{...Bt(e,f=>!(f in Nc))}}});const o=e.min&&e.max?fr({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?lo({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,c=hr(t.imageData,"",f=>(s(new i.imageDataCalculated(f)),f.imageType===k.Pdf?F`
                        <iframe
                            src=${f.imageUrl}
                            ${zs(async y=>{try{await po({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:y,imageData:f,imageDimensions:a??{width:500,height:500},max:a,min:o,sendSizeMessage:!1}),r[Gn]="",s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                    `:F`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${Mc(f,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${zs(async y=>{try{const m=await Tc({min:o,max:a,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});r[Gn]=m,s(new i.settled(!0)),r.classList.add(Z.HideLoading)}catch(m){console.error(m)}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),f=>(s(new i.errored(Pt(f))),F`
                    <div class="error-wrapper">
                        <slot name="error">${$e(f)}</slot>
                    </div>
                `)),u=hr(t.imageData,Js,f=>!e.blockInteraction&&[k.Html,k.Video,k.Audio,k.Pdf].includes(f.imageType)?"":Js,()=>""),d=t.imageData instanceof Error?Ye`
                      max-width: 100%;
                      max-height: 100%;
                  `:l?Ye`
                      width: ${l.width}px;
                      height: ${l.height}px;
                  `:"",h=Ye`
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
        `}}),j=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,z=Object.keys,U=Array.isArray;function V(t,e){return typeof e!="object"||z(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||j.Promise||(j.Promise=Promise);const jt=Object.getPrototypeOf,Rc={}.hasOwnProperty;function X(t,e){return Rc.call(t,e)}function at(t,e){typeof e=="function"&&(e=e(jt(t))),(typeof Reflect>"u"?z:Reflect.ownKeys)(e).forEach(n=>{he(t,n,e[n])})}const go=Object.defineProperty;function he(t,e,n,r){go(t,e,V(n&&X(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Xe(t){return{from:function(e){return t.prototype=Object.create(e.prototype),he(t.prototype,"constructor",t),{extend:at.bind(null,t.prototype)}}}}const Dc=Object.getOwnPropertyDescriptor;function rs(t,e){let n;return Dc(t,e)||(n=jt(t))&&rs(n,e)}const zc=[].slice;function bn(t,e,n){return zc.call(t,e,n)}function yo(t,e){return e(t)}function gt(t){if(!t)throw new Error("Assertion Failed")}function vo(t){j.setImmediate?setImmediate(t):setTimeout(t,0)}function wo(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function fe(t,e){if(X(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=fe(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:fe(a,e.substr(o+1))}}function te(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){gt(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)te(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?U(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&X(t,o)||(l=t[o]={}),te(l,a,n)}}else n===void 0?U(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function bo(t){var e={};for(var n in t)X(t,n)&&(e[n]=t[n]);return e}const Lc=[].concat;function _o(t){return Lc.apply([],t)}const So="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(_o([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>j[t]),Ic=So.map(t=>j[t]);wo(So,t=>[t,!0]);let ge=null;function Ut(t){ge=typeof WeakMap<"u"&&new WeakMap;const e=mr(t);return ge=null,e}function mr(t){if(!t||typeof t!="object")return t;let e=ge&&ge.get(t);if(e)return e;if(U(t)){e=[],ge&&ge.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(mr(t[n]))}else if(Ic.indexOf(t.constructor)>=0)e=t;else{const i=jt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),ge&&ge.set(t,e),t)X(t,s)&&(e[s]=mr(t[s]))}return e}const{toString:Bc}={};function pr(t){return Bc.call(t).slice(8,-1)}const gr=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Kc=typeof gr=="symbol"?function(t){var e;return t!=null&&(e=t[gr])&&e.apply(t)}:function(){return null},Je={};function ue(t){var e,n,r,s;if(arguments.length===1){if(U(t))return t.slice();if(this===Je&&typeof t=="string")return[t];if(s=Kc(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const ss=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function xo(t,e){oe=t,$o=e}var $o=()=>!0;const Hc=!new Error("").stack;function Be(){if(Hc)try{throw Be.arguments,new Error}catch(t){return t}return new Error}function yr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter($o).map(r=>`
`+r).join("")):""}var Eo=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],is=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Eo),Fc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ze(t,e){this._e=Be(),this.name=t,this.message=e}function Ao(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function _n(t,e,n,r){this._e=Be(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=Ao(t,e)}function xt(t,e){this._e=Be(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=Ao(t,e)}Xe(Ze).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+yr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Xe(_n).from(Ze),Xe(xt).from(Ze);var os=is.reduce((t,e)=>(t[e]=e+"Error",t),{});const Uc=Ze;var C=is.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Be(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=Fc[e]||n,this.inner=null)}return Xe(r).from(Uc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Gs=Eo.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),ln=is.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function O(){}function Nt(t){return t}function qc(t,e){return t==null||t===Nt?e:function(n){return e(t(n))}}function Le(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Wc(t,e){return t===O?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Le(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Le(s,this.onerror):s),i!==void 0?i:n}}function Vc(t,e){return t===O?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Le(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Le(r,this.onerror):r)}}function Jc(t,e){return t===O?e:function(n){var r=t.apply(this,arguments);V(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Le(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Le(i,this.onerror):i),r===void 0?o===void 0?void 0:o:V(r,o)}}function Gc(t,e){return t===O?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function as(t,e){return t===O?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}ln.ModifyError=_n,ln.DexieError=Ze,ln.BulkError=xt;var Rt={};const[vr,Sn,wr]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,jt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,jt(e),t]})(),Co=Sn&&Sn.then,cn=vr&&vr.constructor,ls=!!wr;var br=!1,Yc=wr?()=>{wr.then(Qt)}:j.setImmediate?setImmediate.bind(null,Qt):j.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Qt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Qt,0)},$t=function(t,e){yt.push([t,e]),xn&&(Yc(),xn=!1)},_r=!0,xn=!0,je=[],un=[],Sr=null,xr=Nt,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Qs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Qs(t[0],t[1])}catch{}})}},A=et,yt=[],Ne=0,dn=[];function x(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=O,this._lib=!1;var e=this._PSD=A;if(oe&&(this._stackHolder=Be(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Rt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Er(this,this._value))}this._state=null,this._value=null,++e.ref,ko(this,t)}const $r={get:function(){var t=A,e=$n;function n(r,s){var i=!t.global&&(t!==A||e!==$n);const o=i&&!me();var a=new x((l,c)=>{cs(this,new Po(En(r,t,i,o),En(s,t,i,o),l,c,t))});return oe&&Mo(a,this),a}return n.prototype=Rt,n},set:function(t){he(this,"then",t&&t.prototype===Rt?$r:{get:function(){return t},set:$r.set})}};function Po(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function ko(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&qt();n&&typeof n.then=="function"?ko(t,(s,i)=>{n instanceof x?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,To(t)),r&&Wt()}},Er.bind(null,t))}catch(n){Er(t,n)}}function Er(t,e){if(un.push(e),t._state===null){var n=t._lib&&qt();e=xr(e),t._state=!1,t._value=e,oe&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=rs(e,"stack");e._promise=t,he(e,"stack",{get:()=>br?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){je.some(s=>s._value===r._value)||je.push(r)}(t),To(t),n&&Wt()}}function To(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)cs(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Ne===0&&(++Ne,$t(()=>{--Ne==0&&us()},[]))}function cs(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Ne,$t(Qc,[n,t,e])}else t._listeners.push(e)}function Qc(t,e,n){try{Sr=e;var r,s=e._value;e._state?r=t(s):(un.length&&(un=[]),r=t(s),un.indexOf(s)===-1&&function(i){for(var o=je.length;o;)if(je[--o]._value===i._value)return void je.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Sr=null,--Ne==0&&us(),--n.psd.ref||n.psd.finalize()}}function Oo(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=yr(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return oe&&((r=yr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&Oo(t._prev,e,n)),e}function Mo(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Qt(){qt()&&Wt()}function qt(){var t=_r;return _r=!1,xn=!1,t}function Wt(){var t,e,n;do for(;yt.length>0;)for(t=yt,yt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(yt.length>0);_r=!0,xn=!0}function us(){var t=je;je=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=dn.slice(0),n=e.length;n;)e[--n]()}function Xt(t){return new x(Rt,!1,t)}function N(t,e){var n=A;return function(){var r=qt(),s=A;try{return Se(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{Se(s,!1),r&&Wt()}}}at(x.prototype,{then:$r,_then:function(t,e){cs(this,new Po(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Xt(r)):this.then(null,r=>r&&r.name===e?n(r):Xt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Xt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{br=!0;var t=Oo(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{br=!1}}},timeout:function(t,e){return t<1/0?new x((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&he(x.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=jo(),at(x,{all:function(){var t=ue.apply(null,arguments).map(Zt);return new x(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>x.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof x)return t;if(t&&typeof t.then=="function")return new x((n,r)=>{t.then(n,r)});var e=new x(Rt,!0,t);return Mo(e,Sr),e},reject:Xt,race:function(){var t=ue.apply(null,arguments).map(Zt);return new x((e,n)=>{t.map(r=>x.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>$n},newPSD:_e,usePSD:dt,scheduler:{get:()=>$t,set:t=>{$t=t}},rejectionMapper:{get:()=>xr,set:t=>{xr=t}},follow:(t,e)=>new x((n,r)=>_e((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Le(function(){(function(a){function l(){a(),dn.splice(dn.indexOf(l),1)}dn.push(l),++Ne,$t(()=>{--Ne==0&&us()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),cn&&(cn.allSettled&&he(x,"allSettled",function(){const t=ue.apply(null,arguments).map(Zt);return new x(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>x.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),cn.any&&typeof AggregateError<"u"&&he(x,"any",function(){const t=ue.apply(null,arguments).map(Zt);return new x((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>x.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const H={awaits:0,echoes:0,id:0};var Xc=0,hn=[],Yn=0,$n=0,Zc=0;function _e(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++Zc;var o=et.env;i.env=ls?{Promise:x,PromiseProp:{value:x,configurable:!0,writable:!0},all:x.all,race:x.race,allSettled:x.allSettled,any:x.any,resolve:x.resolve,reject:x.reject,nthen:Ys(o.nthen,i),gthen:Ys(o.gthen,i)}:{},e&&V(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=dt(i,t,n,r);return i.ref===0&&i.finalize(),a}function ut(){return H.id||(H.id=++Xc),++H.awaits,H.echoes+=100,H.id}function me(){return!!H.awaits&&(--H.awaits==0&&(H.id=0),H.echoes=100*H.awaits,!0)}function Zt(t){return H.echoes&&t&&t.constructor===cn?(ut(),t.then(e=>(me(),e),e=>(me(),L(e)))):t}function eu(t){++$n,H.echoes&&--H.echoes!=0||(H.echoes=H.id=0),hn.push(A),Se(t,!0)}function tu(){var t=hn[hn.length-1];hn.pop(),Se(t,!1)}function Se(t,e){var n=A;if((e?!H.echoes||Yn++&&t===A:!Yn||--Yn&&t===A)||No(e?eu.bind(null,t):tu),t!==A&&(A=t,n===et&&(et.env=jo()),ls)){var r=et.env.Promise,s=t.env;Sn.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(j,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function jo(){var t=j.Promise;return ls?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(j,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:Sn.then,gthen:t.prototype.then}:{}}function dt(t,e,n,r,s){var i=A;try{return Se(t,!0),e(n,r,s)}finally{Se(i,!1)}}function No(t){Co.call(vr,t)}function En(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&ut(),Se(e,!0);try{return t.apply(this,arguments)}finally{Se(s,!1),r&&No(me)}}}function Ys(t,e){return function(n,r){return t.call(this,En(n,e),En(r,e))}}(""+Co).indexOf("[native code]")===-1&&(ut=me=O);function Qs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(j.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),V(r,s)):j.CustomEvent&&V(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&j.dispatchEvent&&(dispatchEvent(r),!j.PromiseRejectionEvent&&j.onunhandledrejection))try{j.onunhandledrejection(r)}catch{}oe&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var L=x.reject;function Ar(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===os.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Ar(t,e,n,r))):L(i)}return s._promise(e,(i,o)=>_e(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return L(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return L(new C.DatabaseClosed);t.open().catch(O)}return t._state.dbReadyPromise.then(()=>Ar(t,e,n,r))}const Me=String.fromCharCode(65535),ae="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Et=[],zn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),nu=zn,ru=zn,Ro=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Ie(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Do={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function en(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Ut(e))[t],e)}class su{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,c,u){if(!u.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(u.idbtrans,u)}const a=qt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):_e(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Ar(this.db,e,[this.name],o)}finally{a&&Wt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(U(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=z(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(c=>c.compound&&n.every(u=>c.keyPath.indexOf(u)>=0)&&c.keyPath.every(u=>n.indexOf(u)>=0))[0];if(r&&this.db._maxKey!==Me)return this.where(r.name).equals(r.keyPath.map(c=>e[c]));!r&&oe&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(c,u){try{return i.cmp(c,u)===0}catch{return!1}}const[a,l]=n.reduce(([c,u],d)=>{const h=s[d],f=e[d];return[c||h,c||!h?Ie(u,h&&h.multi?y=>{const m=fe(y,d);return U(m)&&m.some(v=>o(f,v))}:y=>o(f,fe(y,d))):u]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,U(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(X(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){V(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=en(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||U(e))return this.where(":id").equals(e).modify(n);{const r=fe(e,this.schema.primKey.keyPath);if(r===void 0)return L(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?z(n).forEach(s=>{te(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=en(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{te(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?x.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Do})).then(e=>e.numFailures?x.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(en(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new xt(`${this.name}.bulkAdd(): ${d} of ${c} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const c=e.length;let u=l&&a?e.map(en(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:u,wantResults:i}).then(({numFailures:d,results:h,lastResult:f,failures:y})=>{if(d===0)return i?h:f;throw new xt(`${this.name}.bulkPut(): ${d} of ${c} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new xt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function At(t){var e={},n=function(a,l){if(l){for(var c=arguments.length,u=new Array(c-1);--c;)u[c-1]=arguments[c];return e[a].subscribe.apply(null,u),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,c){if(typeof a=="object")return o(a);l||(l=Gc),c||(c=O);var u={subscribers:[],fire:c,subscribe:function(d){u.subscribers.indexOf(d)===-1&&(u.subscribers.push(d),u.fire=l(u.fire,d))},unsubscribe:function(d){u.subscribers=u.subscribers.filter(function(h){return h!==d}),u.fire=u.subscribers.reduce(l,c)}};return e[a]=n[a]=u,u}function o(a){z(a).forEach(function(l){var c=a[l];if(U(c))i(l,a[l][0],a[l][1]);else{if(c!=="asap")throw new C.InvalidArgument("Invalid event config");var u=i(l,Nt,function(){for(var d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];u.subscribers.forEach(function(f){vo(function(){f.apply(null,h)})})})}})}}function mt(t,e){return Xe(e).from({prototype:t}),e}function Ue(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Qn(t,e){t.filter=Ie(t.filter,e)}function Xn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Ie(r(),e()):e,t.justLimit=n&&!r}function fn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Xs(t,e,n){const r=fn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function tn(t,e,n,r){const s=t.replayFilter?Ie(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,c)=>{if(!s||s(l,c,h=>l.stop(h),h=>l.fail(h))){var u=l.primaryKey,d=""+u;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(u)),X(i,d)||(i[d]=!0,e(a,l,c))}};return Promise.all([t.or._iterate(o,n),Zs(Xs(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Zs(Xs(t,r,n),Ie(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Zs(t,e,n,r){var s=N(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=O},a=>{i.fail(a),o=O})||s(i.value,i,a=>o=a),o()})})}function W(t,e){try{const n=ei(t),r=ei(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c)if(s[c]!==i[c])return s[c]<i[c]?-1:1;return o===a?0:o<a?-1:1}(ti(t),ti(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let c=0;c<l;++c){const u=W(s[c],i[c]);if(u!==0)return u}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function ei(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=pr(t);return n==="ArrayBuffer"?"binary":n}function ti(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class iu{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,L.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,L.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Ie(n.algorithm,e)}_iterate(e,n){return tn(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&V(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>tn(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(Ue(r,!0))return s.count({trans:n,query:{index:fn(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return tn(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(c,u){return u?o(c[r[u]],u-1):c[s]}var a=this._ctx.dir==="next"?1:-1;function l(c,u){var d=o(c,i),h=o(u,i);return d<h?-a:d>h?a:0}return this.toArray(function(c){return c.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&Ue(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=fn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return tn(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,Ue(n)?Xn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Xn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Xn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Qn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Qn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Ie(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&Ue(n,!0)&&n.limit>0)return this._read(s=>{var i=fn(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Qn(this._ctx,function(s){var i=s.primaryKey.toString(),o=X(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=z(e),o=i.length;s=function(m){for(var v=!1,g=0;g<o;++g){var p=i[g],w=e[p];fe(m,p)!==w&&(te(m,p,w),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:c}=a.schema.primaryKey,u=this.db._options.modifyChunkSize||200,d=[];let h=0;const f=[],y=(m,v)=>{const{failures:g,numFailures:p}=v;h+=m-p;for(let w of z(g))d.push(g[w])};return this.clone().primaryKeys().then(m=>{const v=g=>{const p=Math.min(u,m.length-g);return a.getMany({trans:r,keys:m.slice(g,g+p),cache:"immutable"}).then(w=>{const E=[],S=[],b=l?[]:null,_=[];for(let $=0;$<p;++$){const M=w[$],R={value:Ut(M),primKey:m[g+$]};s.call(R,R.value,R)!==!1&&(R.value==null?_.push(m[g+$]):l||W(c(M),c(R.value))===0?(S.push(R.value),l&&b.push(m[g+$])):(_.push(m[g+$]),E.push(R.value)))}const P=Ue(n)&&n.limit===1/0&&(typeof e!="function"||e===Zn)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let M in $.failures)_.splice(parseInt(M),1);y(E.length,$)})).then(()=>(S.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:b,values:S,criteria:P,changeSpec:typeof e!="function"&&e}).then($=>y(S.length,$))).then(()=>(_.length>0||P&&e===Zn)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then($=>y(_.length,$))).then(()=>m.length>g+p&&v(g+u))})};return v(0).then(()=>{if(d.length>0)throw new _n("Error modifying one or more objects",d,h,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return Ue(e)&&(e.isPrimKey&&!ru||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:c,numFailures:u})=>{if(u)throw new _n("Could not delete some values",Object.keys(a).map(d=>a[d]),o-u);return o-u}))}):this.modify(Zn)}}const Zn=(t,e)=>e.value=null;function ou(t,e){return t<e?-1:t===e?0:1}function au(t,e){return t>e?-1:t===e?0:1}function Y(t,e,n){var r=t instanceof Lo?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function qe(t){return new t.Collection(t,()=>zo("")).limit(0)}function lu(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var c=e[l];if(c!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],c)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function nn(t,e,n,r){var s,i,o,a,l,c,u,d=n.length;if(!n.every(m=>typeof m=="string"))return Y(t,"String expected.");function h(m){s=function(g){return g==="next"?p=>p.toUpperCase():p=>p.toLowerCase()}(m),i=function(g){return g==="next"?p=>p.toLowerCase():p=>p.toUpperCase()}(m),o=m==="next"?ou:au;var v=n.map(function(g){return{lower:i(g),upper:s(g)}}).sort(function(g,p){return o(g.lower,p.lower)});a=v.map(function(g){return g.upper}),l=v.map(function(g){return g.lower}),c=m,u=m==="next"?"":r}h("next");var f=new t.Collection(t,()=>pe(a[0],l[d-1]+r));f._ondirectionchange=function(m){h(m)};var y=0;return f._addAlgorithm(function(m,v,g){var p=m.key;if(typeof p!="string")return!1;var w=i(p);if(e(w,l,y))return!0;for(var E=null,S=y;S<d;++S){var b=lu(p,w,a[S],l[S],o,c);b===null&&E===null?y=S+1:(E===null||o(E,b)>0)&&(E=b)}return v(E!==null?function(){m.continue(E+u)}:g),!1}),f}function pe(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function zo(t){return{type:1,lower:t,upper:t}}class Lo{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?qe(this):new this.Collection(this,()=>pe(e,n,!r,!s))}catch{return Y(this,ae)}}equals(e){return e==null?Y(this,ae):new this.Collection(this,()=>zo(e))}above(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(e,void 0,!0))}aboveOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(e,void 0,!1))}below(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(void 0,e,!1,!0))}belowOrEqual(e){return e==null?Y(this,ae):new this.Collection(this,()=>pe(void 0,e))}startsWith(e){return typeof e!="string"?Y(this,"String expected."):this.between(e,e+Me,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):nn(this,(n,r)=>n.indexOf(r[0])===0,[e],Me)}equalsIgnoreCase(e){return nn(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ue.apply(Je,arguments);return e.length===0?qe(this):nn(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ue.apply(Je,arguments);return e.length===0?qe(this):nn(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Me)}anyOf(){const e=ue.apply(Je,arguments);let n=this._cmp;try{e.sort(n)}catch{return Y(this,ae)}if(e.length===0)return qe(this);const r=new this.Collection(this,()=>pe(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ue.apply(Je,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Y(this,ae)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return qe(this);if(!e.every(p=>p[0]!==void 0&&p[1]!==void 0&&s(p[0],p[1])<=0))return Y(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,c=n&&n.includeUppers===!0;let u,d=s;function h(p,w){return d(p[0],w[0])}try{u=e.reduce(function(p,w){let E=0,S=p.length;for(;E<S;++E){const b=p[E];if(r(w[0],b[1])<0&&r(w[1],b[0])>0){b[0]=o(b[0],w[0]),b[1]=a(b[1],w[1]);break}}return E===S&&p.push(w),p},[]),u.sort(h)}catch{return Y(this,ae)}let f=0;const y=c?p=>s(p,u[f][1])>0:p=>s(p,u[f][1])>=0,m=l?p=>i(p,u[f][0])>0:p=>i(p,u[f][0])>=0;let v=y;const g=new this.Collection(this,()=>pe(u[0][0],u[u.length-1][1],!l,!c));return g._ondirectionchange=p=>{p==="next"?(v=y,d=s):(v=m,d=i),u.sort(h)},g._addAlgorithm((p,w,E)=>{for(var S=p.key;v(S);)if(++f,f===u.length)return w(E),!1;return!!function(b){return!y(b)&&!m(b)}(S)||(this._cmp(S,u[f][1])===0||this._cmp(S,u[f][0])===0||w(()=>{d===s?p.continue(u[f][0]):p.continue(u[f][1])}),!1)}),g}startsWithAnyOf(){const e=ue.apply(Je,arguments);return e.every(n=>typeof n=="string")?e.length===0?qe(this):this.inAnyRange(e.map(n=>[n,n+Me])):Y(this,"startsWithAnyOf() only works with strings")}}function ne(t){return N(function(e){return Dt(e),t(e.target.error),!1})}function Dt(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const xe=At(null,"storagemutated");class cu{_lock(){return gt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(gt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{dt(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(gt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return gt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{Dt(s),this._reject(e.error)}),e.onabort=N(s=>{Dt(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&xe.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return L(new C.ReadOnly("Transaction is readonly"));if(!this.active)return L(new C.TransactionInactive);if(this._locked())return new x((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return _e(()=>{var i=new x((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new x((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=x.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new x((o,a)=>{r.then(l=>n._waitingQueue.push(N(o.bind(null,l))),l=>n._waitingQueue.push(N(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(X(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Cr(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+Io(e)}}function Io(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Bo(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:wo(n,r=>[r.name,r])}}let zt=t=>{try{return t.only([[]]),zt=()=>[[]],[[]]}catch{return zt=()=>Me,Me}};function Pr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>fe(n,e)}(t):e=>fe(e,t)}function ni(t){return[].slice.call(t)}let uu=0;function Ct(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function du(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:c,upper:u,lowerOpen:d,upperOpen:h}=l;return c===void 0?u===void 0?null:e.upperBound(u,!!h):u===void 0?e.lowerBound(c,!!d):e.bound(c,u,!!d,!!h)}const{schema:s,hasGetAll:i}=function(l,c){const u=ni(l.objectStoreNames);return{schema:{name:l.name,tables:u.map(d=>c.objectStore(d)).map(d=>{const{keyPath:h,autoIncrement:f}=d,y=U(h),m=h==null,v={},g={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:h,autoIncrement:f,unique:!0,extractKey:Pr(h)},indexes:ni(d.indexNames).map(p=>d.index(p)).map(p=>{const{name:w,unique:E,multiEntry:S,keyPath:b}=p,_={name:w,compound:U(b),keyPath:b,unique:E,multiEntry:S,extractKey:Pr(b)};return v[Ct(b)]=_,_}),getIndexByKeyPath:p=>v[Ct(p)]};return v[":id"]=g.primaryKey,h!=null&&(v[Ct(h)]=g.primaryKey),g})},hasGetAll:u.length>0&&"getAll"in c.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(c){const u=c.name;return{name:u,schema:c,mutate:function({trans:d,type:h,keys:f,values:y,range:m}){return new Promise((v,g)=>{v=N(v);const p=d.objectStore(u),w=p.keyPath==null,E=h==="put"||h==="add";if(!E&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:S}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(S===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let b;const _=[],P=[];let $=0;const M=q=>{++$,Dt(q)};if(h==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:P,results:[],lastResult:void 0});m.type===3?_.push(b=p.clear()):_.push(b=p.delete(r(m)))}else{const[q,B]=E?w?[y,f]:[y,null]:[f,null];if(E)for(let D=0;D<S;++D)_.push(b=B&&B[D]!==void 0?p[h](q[D],B[D]):p[h](q[D])),b.onerror=M;else for(let D=0;D<S;++D)_.push(b=p[h](q[D])),b.onerror=M}const R=q=>{const B=q.target.result;_.forEach((D,Ke)=>D.error!=null&&(P[Ke]=D.error)),v({numFailures:$,failures:P,results:h==="delete"?f:_.map(D=>D.result),lastResult:B})};b.onerror=q=>{M(q),R(q)},b.onsuccess=R})},getMany:({trans:d,keys:h})=>new Promise((f,y)=>{f=N(f);const m=d.objectStore(u),v=h.length,g=new Array(v);let p,w=0,E=0;const S=_=>{const P=_.target;g[P._pos]=P.result,++E===w&&f(g)},b=ne(y);for(let _=0;_<v;++_)h[_]!=null&&(p=m.get(h[_]),p._pos=_,p.onsuccess=S,p.onerror=b,++w);w===0&&f(g)}),get:({trans:d,key:h})=>new Promise((f,y)=>{f=N(f);const m=d.objectStore(u).get(h);m.onsuccess=v=>f(v.target.result),m.onerror=ne(y)}),query:function(d){return h=>new Promise((f,y)=>{f=N(f);const{trans:m,values:v,limit:g,query:p}=h,w=g===1/0?void 0:g,{index:E,range:S}=p,b=m.objectStore(u),_=E.isPrimaryKey?b:b.index(E.name),P=r(S);if(g===0)return f({result:[]});if(d){const $=v?_.getAll(P,w):_.getAllKeys(P,w);$.onsuccess=M=>f({result:M.target.result}),$.onerror=ne(y)}else{let $=0;const M=v||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),R=[];M.onsuccess=q=>{const B=M.result;return B?(R.push(v?B.value:B.primaryKey),++$===g?f({result:R}):void B.continue()):f({result:R})},M.onerror=ne(y)}})}(i),openCursor:function({trans:d,values:h,query:f,reverse:y,unique:m}){return new Promise((v,g)=>{v=N(v);const{index:p,range:w}=f,E=d.objectStore(u),S=p.isPrimaryKey?E:E.index(p.name),b=y?m?"prevunique":"prev":m?"nextunique":"next",_=h||!("openKeyCursor"in S)?S.openCursor(r(w),b):S.openKeyCursor(r(w),b);_.onerror=ne(g),_.onsuccess=N(P=>{const $=_.result;if(!$)return void v(null);$.___id=++uu,$.done=!1;const M=$.continue.bind($);let R=$.continuePrimaryKey;R&&(R=R.bind($));const q=$.advance.bind($),B=()=>{throw new Error("Cursor not stopped")};$.trans=d,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=N(g),$.next=function(){let D=1;return this.start(()=>D--?this.continue():this.stop()).then(()=>this)},$.start=D=>{const Ke=new Promise((J,Ee)=>{J=N(J),_.onerror=ne(Ee),$.fail=Ee,$.stop=ht=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=B,J(ht)}}),He=()=>{if(_.result)try{D()}catch(J){$.fail(J)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=N(J=>{_.onsuccess=He,He()}),$.continue=M,$.continuePrimaryKey=R,$.advance=q,He(),Ke},v($)},g)})},count({query:d,trans:h}){const{index:f,range:y}=d;return new Promise((m,v)=>{const g=h.objectStore(u),p=f.isPrimaryKey?g:g.index(f.name),w=r(y),E=w?p.count(w):p.count();E.onsuccess=N(S=>m(S.target.result)),E.onerror=ne(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:zt(e),schema:s}}function kr({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(u,d){return d.reduce((h,{create:f})=>({...h,...f(h)}),u)}(du(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function An({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=rs(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?he(o,s,{get(){return this.table(s)},set(l){go(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function Tr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function hu(t,e){return t._cfg.version-e._cfg.version}function fu(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;_e(()=>{A.trans=i,A.transless=a,e===0?(z(s).forEach(l=>{er(n,l,s[l].primKey,s[l].indexes)}),kr(t,n),x.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},c,u,d){const h=[],f=l._versions;let y=l._dbSchema=Mr(l,l.idbdb,d),m=!1;function v(){return h.length?x.resolve(h.shift()(u.idbtrans)).then(v):x.resolve()}return f.filter(g=>g._cfg.version>=c).forEach(g=>{h.push(()=>{const p=y,w=g._cfg.dbschema;jr(l,p,d),jr(l,w,d),y=l._dbSchema=w;const E=Ko(p,w);E.add.forEach(b=>{er(d,b[0],b[1].primKey,b[1].indexes)}),E.change.forEach(b=>{if(b.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=d.objectStore(b.name);b.add.forEach(P=>Or(_,P)),b.change.forEach(P=>{_.deleteIndex(P.name),Or(_,P)}),b.del.forEach(P=>_.deleteIndex(P))}});const S=g._cfg.contentUpgrade;if(S&&g._cfg.version>c){kr(l,d),u._memoizedTables={},m=!0;let b=bo(w);E.del.forEach(M=>{b[M]=p[M]}),Tr(l,[l.Transaction.prototype]),An(l,[l.Transaction.prototype],z(b),b),u.schema=b;const _=ss(S);let P;_&&ut();const $=x.follow(()=>{if(P=S(u),P&&_){var M=me.bind(null,null);P.then(M,M)}});return P&&typeof P.then=="function"?x.resolve(P):$.then(()=>P)}}),h.push(p=>{(!m||!nu)&&function(w,E){[].slice.call(E.db.objectStoreNames).forEach(S=>w[S]==null&&E.db.deleteObjectStore(S))}(g._cfg.dbschema,p),Tr(l,[l.Transaction.prototype]),An(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),u.schema=l._dbSchema})}),v().then(()=>{var g,p;p=d,z(g=y).forEach(w=>{p.db.objectStoreNames.contains(w)||er(p,w,g[w].primKey,g[w].indexes)})})}(t,e,i,n).catch(o)})}function Ko(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!zn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let c;for(c in a)l[c]||o.del.push(c);for(c in l){const u=a[c],d=l[c];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function er(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>Or(s,i)),s}function Or(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Mr(t,e,n){const r={};return bn(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Cr(Io(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let u=0;u<i.indexNames.length;++u){const d=i.index(i.indexNames[u]);o=d.keyPath;var c=Cr(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(c)}r[s]=Bo(s,a,l)}),r}function jr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],c=o.index(l).keyPath,u=typeof c=="string"?c:"["+bn(c).join("+")+"]";if(e[i]){const d=e[i].idxByName[u];d&&(d.name=l,delete e[i].idxByName[u],e[i].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&j.WorkerGlobalScope&&j instanceof j.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class mu{_parseStoresSpec(e,n){z(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),c=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Cr(l,c||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),U(c),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Bo(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?V(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{V(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,Tr(n,[n._allTables,n,n.Transaction.prototype]),An(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],z(i),i),n._storeNames=z(i),this}upgrade(e){return this._cfg.contentUpgrade=as(this._cfg.contentUpgrade||O,e),this}}function ds(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Re("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function hs(t){return t&&typeof t.databases=="function"}function Nr(t){return _e(function(){return A.letThrough=!0,t()})}function pu(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function gu(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?L(e.dbOpenError):t);oe&&(e.openCanceller._stackHolder=Be()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return x.race([r,(typeof navigator>"u"?x.resolve():pu()).then(()=>new x((l,c)=>{if(s(),!n)throw new C.MissingAPI;const u=t.name,d=e.autoSchema?n.open(u):n.open(u,Math.round(10*t.verno));if(!d)throw new C.MissingAPI;d.onerror=ne(c),d.onblocked=N(t._fireOnBlocked),d.onupgradeneeded=N(h=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){d.onerror=Dt,o.abort(),d.result.close();const y=n.deleteDatabase(u);y.onsuccess=y.onerror=N(()=>{c(new C.NoSuchDatabase(`Database ${u} doesnt exist`))})}else{o.onerror=ne(c);var f=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=f<1,t._novip.idbdb=d.result,fu(t,f/10,o,c)}},c),d.onsuccess=N(()=>{o=null;const h=t._novip.idbdb=d.result,f=bn(h.objectStoreNames);if(f.length>0)try{const m=h.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},g,p){v.verno=g.version/10;const w=v._dbSchema=Mr(0,g,p);v._storeNames=bn(g.objectStoreNames,0),An(v,[v._allTables],z(w),w)}(t,h,m):(jr(t,t._dbSchema,m),function(v,g){const p=Ko(Mr(0,v.idbdb,g),v._dbSchema);return!(p.add.length||p.change.some(w=>w.add.length||w.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),kr(t,m)}catch{}var y;Et.push(t),h.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),h.onclose=N(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},g){!hs(m)&&g!=="__dbnames"&&ds(m,v).put({name:g}).catch(O)}(t._deps,u),l()},c)}))]).then(()=>(s(),e.onReadyBeingFired=[],x.resolve(Nr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(as,O);return e.onReadyBeingFired=[],x.resolve(Nr(()=>c(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),L(l)}).finally(()=>{e.openComplete=!0,i()})}function Rr(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):U(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function yu(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=_o(s);return[t,i,n]}function Ho(t,e,n,r,s){return x.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===os.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Ho(t,e,n,null,s))):L(d)}const l=ss(s);let c;l&&ut();const u=x.follow(()=>{if(c=s.call(o,o),c)if(l){var d=me.bind(null,null);c.then(d,d)}else typeof c.next=="function"&&typeof c.throw=="function"&&(c=Rr(c))},a);return(c&&typeof c.then=="function"?x.resolve(c).then(d=>o.active?d:L(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):u.then(()=>c)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),L(d)))})}function rn(t,e,n){const r=U(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const vu={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(u,d,h){const f=Ct(u),y=s[f]=s[f]||[],m=u==null?0:typeof u=="string"?1:u.length,v=d>0,g={...h,isVirtual:v,keyTail:d,keyLength:m,extractKey:Pr(u),unique:!v&&h.unique};return y.push(g),g.isPrimaryKey||i.push(g),m>1&&o(m===2?u[0]:u.slice(0,m-1),d+1,h),y.sort((p,w)=>p.keyTail-w.keyTail),g}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const u of r.indexes)o(u.keyPath,0,u);function l(u){const d=u.query.index;return d.isVirtual?{...u,query:{index:d,range:(h=u.query.range,f=d.keyTail,{type:h.type===1?2:h.type,lower:rn(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:rn(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:u;var h,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(u){const d=s[Ct(u)];return d&&d[0]}},count:u=>n.count(l(u)),query:u=>n.query(l(u)),openCursor(u){const{keyTail:d,isVirtual:h,keyLength:f}=u.query.index;return h?n.openCursor(l(u)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(g){g!=null?m.continue(rn(g,u.reverse?t.MAX_KEY:t.MIN_KEY,d)):u.unique?m.continue(m.key.slice(0,f).concat(u.reverse?t.MIN_KEY:t.MAX_KEY,d)):m.continue()}},continuePrimaryKey:{value(g,p){m.continuePrimaryKey(rn(g,t.MAX_KEY,d),p)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const g=m.key;return f===1?g[0]:g.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(u)}}}}}};function fs(t,e,n,r){return n=n||{},r=r||"",z(t).forEach(s=>{if(X(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=pr(i);a!==pr(o)?n[r+s]=e[s]:a==="Object"?fs(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),z(e).forEach(s=>{X(t,s)||(n[r+s]=e[s])}),n}const wu={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:c}=o.table(e).hook;switch(i.type){case"add":if(l.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"put":if(l.fire===O&&c.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"delete":if(a.fire===O)break;return o._promise("readwrite",()=>u(i),!0);case"deleteRange":if(a.fire===O)break;return o._promise("readwrite",()=>function(h){return d(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function u(h){const f=A.trans,y=h.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,h);if(!y)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:y}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(m,v,g){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:g,cache:"immutable"})}(n,h,y).then(m=>{const v=y.map((g,p)=>{const w=m[p],E={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call(E,g,w,f);else if(h.type==="add"||w===void 0){const S=l.fire.call(E,g,h.values[p],f);g==null&&S!=null&&(g=S,h.keys[p]=g,r.outbound||te(h.values[p],r.keyPath,g))}else{const S=fs(w,h.values[p]),b=c.fire.call(E,S,g,w,f);if(b){const _=h.values[p];Object.keys(b).forEach(P=>{X(_,P)?_[P]=b[P]:te(_,P,b[P])})}}return E});return n.mutate(h).then(({failures:g,results:p,numFailures:w,lastResult:E})=>{for(let S=0;S<y.length;++S){const b=p?p[S]:y[S],_=v[S];b==null?_.onerror&&_.onerror(g[S]):_.onsuccess&&_.onsuccess(h.type==="put"&&m[S]?h.values[S]:b)}return{failures:g,results:p,numFailures:w,lastResult:E}}).catch(g=>(v.forEach(p=>p.onerror&&p.onerror(g)),Promise.reject(g)))})}function d(h,f,y){return n.query({trans:h,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>u({type:"delete",keys:m,trans:h}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:d(h,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function Fo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)W(e.keys[s],t[i])===0&&(r.push(n?Ut(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const bu={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Fo(r.keys,r.trans._cache,r.cache==="clone");return s?x.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Ut(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function ms(t){return!("from"in t)}const le=function(t,e){if(!this){const n=new le;return t&&"d"in t&&V(n,t),n}V(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Lt(t,e,n){const r=W(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(ms(t))return V(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(W(n,t.from)<0)return s?Lt(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},ri(t);if(W(e,t.to)>0)return i?Lt(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},ri(t);W(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),W(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&Cn(t,s),i&&o&&Cn(t,i)}function Cn(t,e){ms(e)||function n(r,{from:s,to:i,l:o,r:a}){Lt(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function _u(t,e){const n=Dr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=Dr(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(W(a.from,s.to)<=0&&W(a.to,s.from)>=0)return!0;W(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function Dr(t){let e=ms(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&W(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||W(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function ri(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=si(o)}t.d=si(t)}function si({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}at(le.prototype,{add(t){return Cn(this,t),this},addKey(t){return Lt(this,t,t),this},addKeys(t){return t.forEach(e=>Lt(this,e,e)),this},[gr](){return Dr(this)}});const Su={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new le(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,c={...s,mutate:h=>{const f=h.trans,y=f.mutatedParts||(f.mutatedParts={}),m=b=>{const _=`idb://${e}/${r}/${b}`;return y[_]||(y[_]=new le)},v=m(""),g=m(":dels"),{type:p}=h;let[w,E]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const S=h.trans._cache;return s.mutate(h).then(b=>{if(U(w)){p!=="delete"&&(w=b.results),v.addKeys(w);const _=Fo(w,S);_||p==="add"||g.addKeys(w),(_||E)&&function(P,$,M,R){function q(B){const D=P(B.name||"");function Ke(J){return J!=null?B.extractKey(J):null}const He=J=>B.multiEntry&&U(J)?J.forEach(Ee=>D.addKey(Ee)):D.addKey(J);(M||R).forEach((J,Ee)=>{const ht=M&&Ke(M[Ee]),In=R&&Ke(R[Ee]);W(ht,In)!==0&&(ht!=null&&He(ht),In!=null&&He(In))})}$.indexes.forEach(q)}(m,i,_,E)}else if(w){const _={from:w.lower,to:w.upper};g.add(_),v.add(_)}else v.add(n),g.add(n),i.indexes.forEach(_=>m(_.name).add(n));return b})}},u=({query:{index:h,range:f}})=>{var y,m;return[h,new le((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},d={get:h=>[o,new le(h.key)],getMany:h=>[o,new le().addKeys(h.keys)],count:u,query:u,openCursor:u};return z(d).forEach(h=>{c[h]=function(f){const{subscr:y}=A;if(y){const m=E=>{const S=`idb://${e}/${r}/${E}`;return y[S]||(y[S]=new le)},v=m(""),g=m(":dels"),[p,w]=d[h](f);if(m(p.name||"").add(w),!p.isPrimaryKey){if(h!=="count"){const E=h==="query"&&l&&f.values&&s.query({...f,values:!1});return s[h].apply(this,arguments).then(S=>{if(h==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),S));const b=f.values?S.result.map(a):S.result;f.values?v.addKeys(b):g.addKeys(b)}else if(h==="openCursor"){const b=S,_=f.values;return b&&Object.create(b,{key:{get:()=>(g.addKey(b.primaryKey),b.key)},primaryKey:{get(){const P=b.primaryKey;return g.addKey(P),P}},value:{get:()=>(_&&v.addKey(b.primaryKey),b.value)}})}return S})}g.add(n)}}return s[h].apply(this,arguments)}}),c}}}};class Re{constructor(e,n){this._middlewares={},this.verno=0;const r=Re.dependencies;this._options=n={addons:Re.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:O,dbReadyPromise:null,cancelOpen:O,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new x(a=>{i.dbReadyResolve=a}),i.openCanceller=new x((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=At(this,"populate","blocked","versionchange","close",{ready:[as,O]}),this.on.ready.subscribe=yo(this.on.ready.subscribe,a=>(l,c)=>{Re.vip(()=>{const u=this._state;if(u.openComplete)u.dbOpenError||x.resolve().then(l),c&&a(l);else if(u.onReadyBeingFired)u.onReadyBeingFired.push(l),c&&a(l);else{a(l);const d=this;c||a(function h(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,mt(iu.prototype,function(a,l){this.db=o;let c=Do,u=null;if(l)try{c=l()}catch(y){u=y}const d=a._ctx,h=d.table,f=h.hook.reading.fire;this._ctx={table:h,index:d.index,isPrimKey:!d.index||h.schema.primKey.keyPath&&d.index===h.schema.primKey.name,range:c,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:u,or:d.or,valueMapper:f!==Nt?f:null}})),this.Table=function(a){return mt(su.prototype,function(l,c,u){this.db=a,this._tx=u,this.name=l,this.schema=c,this.hook=a._allTables[l]?a._allTables[l].hook:At(null,{creating:[Wc,O],reading:[qc,Nt],updating:[Jc,O],deleting:[Vc,O]})})}(this),this.Transaction=function(a){return mt(cu.prototype,function(l,c,u,d,h){this.db=a,this.mode=l,this.storeNames=c,this.schema=u,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=At(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new x((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),L(f)})})}(this),this.Version=function(a){return mt(mu.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return mt(Lo.prototype,function(l,c,u){this.db=a,this._ctx={table:l,index:c===":id"?null:c,or:u};const d=a._deps.indexedDB;if(!d)throw new C.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(h,f)=>d.cmp(f,h),this._max=(h,f)=>d.cmp(h,f)>0?h:f,this._min=(h,f)=>d.cmp(h,f)<0?h:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=zt(n.IDBKeyRange),this._createTransaction=(a,l,c,u)=>new this.Transaction(a,l,c,this._options.chromeTransactionDurability,u),this._fireOnBlocked=a=>{this.on("blocked").fire(a),Et.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(vu),this.use(wu),this.use(Su),this.use(bu),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(hu),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new x((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(O)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return gu(this)}_close(){const e=this._state,n=Et.indexOf(this);if(n>=0&&Et.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new x(r=>{e.dbReadyResolve=r}),e.openCanceller=new x((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new x((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:a,IDBKeyRange:l},c){!hs(a)&&c!=="__dbnames"&&ds(a,l).delete(c).catch(O)})(this._deps,this.name),r()}),o.onerror=ne(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return z(this._allTables).map(e=>this._allTables[e])}transaction(){const e=yu.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(c=>{var u=c instanceof this.Table?c.name:c;if(typeof u!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return u}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(c=>{if(s&&s.storeNames.indexOf(c)===-1){if(!i)throw new C.SubTransaction("Table "+c+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(c){return s?s._promise(null,(u,d)=>{d(c)}):L(c)}const l=Ho.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?dt(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!X(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const xu=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class $u{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[xu](){return this}}function Uo(t,e){return z(e).forEach(n=>{Cn(t[n]||(t[n]=new le),e[n])}),t}function Eu(t){return new $u(e=>{const n=ss(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,xe.storagemutated.unsubscribe(u)}};e.start&&e.start(o);let a=!1,l=!1;function c(){return z(i).some(h=>s[h]&&_u(s[h],i[h]))}const u=h=>{Uo(s,h),c()&&d()},d=()=>{if(a||r)return;s={};const h={},f=function(y){n&&ut();const m=()=>_e(t,{subscr:y,trans:null}),v=A.trans?dt(A.transless,m):m();return n&&v.then(me,me),v}(h);l||(xe("storagemutated",u),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(c()?d():(s={},i=h,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return d(),o})}let zr;try{zr={indexedDB:j.indexedDB||j.mozIndexedDB||j.webkitIndexedDB||j.msIndexedDB,IDBKeyRange:j.IDBKeyRange||j.webkitIDBKeyRange}}catch{zr={indexedDB:null,IDBKeyRange:null}}const Ce=Re;function mn(t){let e=de;try{de=!0,xe.storagemutated.fire(t)}finally{de=e}}at(Ce,{...ln,delete:t=>new Ce(t,{addons:[]}).delete(),exists:t=>new Ce(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return hs(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):ds(e,n).toCollection().primaryKeys()}(Ce.dependencies).then(t)}catch{return L(new C.MissingAPI)}},defineClass:()=>function(t){V(this,t)},ignoreTransaction:t=>A.trans?dt(A.transless,t):t(),vip:Nr,async:function(t){return function(){try{var e=Rr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:x.resolve(e)}catch(n){return L(n)}}},spawn:function(t,e,n){try{var r=Rr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:x.resolve(r)}catch(s){return L(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=x.resolve(typeof t=="function"?Ce.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:x,debug:{get:()=>oe,set:t=>{xo(t,t==="dexie"?()=>!0:Ro)}},derive:Xe,extend:V,props:at,override:yo,Events:At,on:xe,liveQuery:Eu,extendObservabilitySet:Uo,getByKeyPath:fe,setByKeyPath:te,delByKeyPath:function(t,e){typeof e=="string"?te(t,e,void 0):"length"in e&&[].map.call(e,function(n){te(t,n,void 0)})},shallowClone:bo,deepClone:Ut,getObjectDiff:fs,cmp:W,asap:vo,minKey:-(1/0),addons:[],connections:Et,errnames:os,dependencies:zr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Ce.maxKey=zt(Ce.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(xe("storagemutated",t=>{if(!de){let e;zn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),de=!0,dispatchEvent(e),de=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{de||mn(t)}));let de=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),xe("storagemutated",e=>{de||t.postMessage(e)}),t.onmessage=e=>{e.data&&mn(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){xe("storagemutated",e=>{try{de||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&mn(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&mn(e.changedParts)})}x.rejectionMapper=function(t,e){if(!t||t instanceof Ze||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Gs[t.name])return t;var n=new Gs[t.name](e||t.message,t);return"stack"in t&&he(n,"stack",{get:function(){return this.inner.stack}}),n},xo(oe,Ro);class Vt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class ii extends Vt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Ln="locationchange";let oi=!1;const Au=window.history.pushState;function ai(...t){const e=Au.apply(window.history,t);return window.dispatchEvent(new Event(Ln)),e}const Cu=window.history.replaceState;function li(...t){const e=Cu.apply(window.history,t);return window.dispatchEvent(new Event(Ln)),e}function Pu(){if(!oi){if(window.history.pushState===ai)throw new ii("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===li)throw new ii("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");oi=!0,window.history.pushState=ai,window.history.replaceState=li,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Ln))})}}function ku(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Tu(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Ou(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?ku(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Mu extends Vt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function qo(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const ci=6;function ui(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>ci)throw new Mu(`Route sanitization depth has exceed the max of ${ci} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(qo(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class tr extends Vt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function ju(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new tr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new tr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new tr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Nu(t,e,n,r=!1){const s=Wo(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Wo(t,e,n=""){var r;if(!n&&e!=null)throw new Vt("Route base regexp was defined but routeBase string was not provided.");const s=Ru(e)?`/${n}`:"",i=t.search?Tu(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function Ru(t){return!!(t&&window.location.pathname.match(t))}function Du(t={}){var e;ju(t),Pu();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const c=i.getCurrentRawRoutes(),u={...c,...o},d=i.sanitizeFullRoute(u);if(!(!l&&qo(c,d)))return Nu(d,r,n,a)},createRoutesUrl:o=>Wo(o,r,n),getCurrentRawRoutes:()=>Ou(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Vt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(Ln,()=>ui(i)),s=!0),o&&ui(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Vo=Du({routeBase:"resizable-image-element"}),zu=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Lu="resizable-image-element-storage";class Iu extends Re{constructor(){super(Lu),this.version(1).stores({storedUrls:"&index"})}}const nr=new Iu,di={async set(t){const e=Pn(t).map((n,r)=>({index:r,url:n}));await nr.storedUrls.clear(),await nr.storedUrls.bulkPut(e)},async get(){const e=(await nr.storedUrls.toArray()).map(r=>r.url),n=Pn(e);return Bu(n.length?n:zu)}};function Bu(t){var e,n;try{const r=Pn(((n=(e=Vo.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function Pn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(lt)}const{defineElement:Ku,defineElementNoInputs:Hu}=Wl(),sn=Ku()({tagName:"vir-url-input",events:{urlsChange:an()},styles:Ye`
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
                ${_t("input",a=>{const c=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));e(new n.urlsChange(c))})}
                ${_t("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),pt={max:{width:300,height:600},min:{width:300,height:150}};Hu({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Ji(di.get()),constraints:void 0,router:Vo,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Ye`
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

        ${t.showConstraints} ${St} {
            border-color: blue;
        }

        ${St} {
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||pt.min.width,height:Number(o==null?void 0:o.minH)||pt.min.height},max:{width:Number(o==null?void 0:o.maxW)||pt.max.width,height:Number(o==null?void 0:o.maxH)||pt.max.height}}})}const n=t.constraints??pt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!$i(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Kt(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),F`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${sn}
                ${ts(sn,{urls:r})}
                ${_t(sn.events.urlsChange,o=>{const a=o.detail;di.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${sn}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${_t("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const c=[tt(o),tt(l)].join(" "),u=n[o][l];return F`
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
                                    ${_t("input",d=>{i(d.currentTarget,o,l)})}
                                />
                            </label>
                        `});return F`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${Fu(n,t.imageUrls)}</div>
        `}});function Fu(t,e){return hr(e,"Loading...",n=>Pn(n).map(r=>{const s=`
                height: ${ee(t.max.height)};
                max-height: ${ee(t.max.height)};
                width: ${ee(t.max.width)};
                max-width: ${ee(t.max.width)}`,i=`height: ${ee(t.min.height)}; width: ${ee(t.min.width)}`;return F`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${St}
                            ${ts(St,{imageUrl:r,max:t.max,min:t.min})}
                        ></${St}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}
