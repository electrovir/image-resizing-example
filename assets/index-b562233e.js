(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Uo=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],si=new RegExp(Uo.join("|"),"g");function Wo(t,e){return t.filter((n,r)=>!e.includes(r))}function Vo(t){return t.reduce((n,r)=>n.concat(r),[])}function Jo(t){return t.map(e=>e.trim()).filter(e=>e!=="")}function Go(t,e){return t.includes(e)}function Yo(t,e){return t.map(e)}async function Qo(t,e){await Tr(t,e)}async function Tr(t,e){return await t.reduce(async(r,s,i,o)=>{const a=await r,l=await e(s,i,o);return a.push(l),a},Promise.resolve([]))}async function Xo(t,e,n){const r=n!=null&&n.blocking?await Tr(t,e):await Promise.all(t.map(e));return t.filter((s,i)=>!!r[i])}function kr(t){const e=new Set(Array.from(t.toLowerCase()));return Array.from(e).join("")}function Zo(t,e){return new RegExp(t.source,kr([t.flags,e].join("")))}function Or(t,e){return t.match(e)??[]}function ea(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}function ii(t){return t.replace(si,"")}const ta=ii;function oi(t){return t.replace(/,/g,"")}function wn(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function na(t,e,n){const r=di({searchIn:t,searchFor:e,caseSensitive:n,includeLength:!0}),s=ui(e,n);return t.split(s).reduce((a,l,d)=>{const c=r[d],u=a.concat(l);if(c){const h=t.slice(c.index,c.index+c.length);return u.concat(h)}else return u},[])}const ra={capitalizeFirstLetter:!1};function We(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function sa(t,e){return e.capitalizeFirstLetter?We(t):t}function ai(t,e=ra){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return sa(r,e)}function is(t){return t!==t.toUpperCase()}function li(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=is(o)||is(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function ia(t,e,n,r=n.length){const s=t.substring(0,e),i=t.substring(e+r);return`${s}${n}${i}`}function ci(t){return t.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function ui(t,e){const n=`g${!e&&typeof t=="string"?"i":""}`;return t instanceof RegExp?new RegExp(t.source,kr(`${t.flags}${n}`)):new RegExp(ci(t),n)}function di({searchIn:t,searchFor:e,caseSensitive:n,includeLength:r}){const s=ui(e,n),i=[],o=[];return t.replace(s,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new Error(`Match index "${l}" is not a number. Searching for "${e}" in "${t}".`);const d=a[0];if(typeof d!="string")throw new Error(`regExpMatch should've been a string but was ${typeof d}!`);o.push({index:l,length:d.length}),i.push(l);const c=a[0];if(typeof c!="string")throw new Error(`Original match when searching for "${e}" in "${t}" at index ${l} is not a string.`);return c}),r?o:i}function Ve(t,e){return t.split(e)}const hi=String(NaN);function Nr(t){if(typeof t=="string"&&isNaN(Number(t)))return hi;const e=String(t),[n,r]=e.split("."),s=r?`.${r}`:"";return`${Or(n.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${s}`}function Dr({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}function fi(t){return typeof t=="number"?t:Number(typeof t=="string"?oi(t):t)}function mi(t){return String(t).includes("e")}function pi({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}const Mr=["january","february","march","april","may","june","july","august","september","october","november","december"],gi=Mr.map(t=>t.slice(0,3));class rn extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function oa(t,e=""){const[n,r,s=""]=t.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${t}"`);const i=s.length<4?`${e}${s.padStart(2,"0")}`:s;return Rr(`${i.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function yi(t,e=!1){const[n,r,s]=t.replace(",","").split(" ");if(!n||!r||!s)throw new rn(`Invalid ${yi.name} input: ${t}`);const i=Mr.indexOf(n.toLowerCase()),o=gi.indexOf(n.toLowerCase());let a=i===-1?o:i;if(a===-1)if(e)a=new Date().getUTCMonth();else throw new rn(`Month name ${n} was not found.`);return Rr(`${s.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function Rr(t){const e=new Date(t+"T00:00:00.000Z");if(isNaN(Number(e)))throw new rn(`Invalid utc date formed from input "${t}"`);return e}const os={days:{getKey:"getUTCDate",setKey:"setUTCDate"},months:{getKey:"getUTCMonth",setKey:"setUTCMonth"},years:{getKey:"getUTCFullYear",setKey:"setUTCFullYear"}};function aa(t,e){t instanceof Date||(t=new Date(t));let n=new Date(t);return J(e).forEach(r=>{const s=e[r];if(!s)return;const{getKey:i,setKey:o}=Ei(os,r)?os[r]:{getKey:`getUTC${We(r)}`,setKey:`setUTC${We(r)}`},a=n[i]();n[o](a+s)}),n}function la(){return typeof window<"u"}function ca(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(n=>_e(n).trim()).join(`
`))}function ua(t){return t?t.map(_e).filter(et).join(`
`):""}function _e(t){return t?t instanceof Error?t.message:String(t):""}function Je(t){return t instanceof Error?t:new Error(_e(t))}function da(t){let e;try{const n=t();return Ci(n)?new Promise(async r=>{try{const s=await n;return r(s)}catch(s){e=Je(s)}return r(e)}):n}catch(n){e=Je(n)}return e}function et(t){return!!t}const ha=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ge(t,e){return t?ha.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function vi(t,e){return t&&e.every(n=>ge(t,n))}function fa(t,e){return ge(e,t)}function J(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function wi(t){return J(t).map(e=>t[e])}function Jn(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function ma(t){return Object.fromEntries(t)}function sn(t){return!!t&&typeof t=="object"}function jr(t,e){try{if(t===e)return!0;if(sn(t)&&sn(e)){const n=Jn(t),r=Jn(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${_e(n)}`),n}}function pa(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function ga(t,e,n=!1,r=!1){try{return Pt(t,e,n),!0}catch(s){return r&&console.error(s),!1}}function Pt(t,e,n=!1,r={}){const s=J(t),i=new Set(J(e));if(!n){const o=s.filter(a=>!i.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}i.forEach(o=>{if(!ge(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(c){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${c}`)}const l=t[o],d=e[o];r[o]||bi(l,d,a,n,r[o]??{})})}function bi(t,e,n,r,s){var a;const i=typeof t,o=typeof e;i!==o&&n(`type "${i}" did not match expected type "${o}"`);try{ge(e,"constructor")&&(!ge(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,d)=>{if(e.map(u=>{try{bi(l,u,n,r,s);return}catch(h){return new Error(`entry at index "${d}" did not match expected shape: ${_e(h)}`)}}).filter(et).length===e.length)throw new Error(`entry at index "${d}" did not match any of the possible types from "${e.join(", ")}"`)})):sn(e)&&Pt(t,e,r,s)}function bn(t){return Array.isArray(t)?"array":typeof t}function ke(t,e){return bn(t)===e}function _i(t,e,n){if(!ke(t,e))throw new TypeError(`'${n}' is of type '${bn(t)}' but type '${e}' was expected.`)}function Gn({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(ke(n,"object")?Pt(r,n):_i(r,bn(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function xi(t){return J(t).filter(e=>isNaN(Number(e)))}function zr(t){return xi(t).map(n=>t[n])}function Si(t,e){return zr(e).includes(t)}function ya(t,e,n=!1){return n?t.reduce((r,s)=>{const i=zr(e).find(o=>String(o).toUpperCase()===String(s).toUpperCase());return i?r.concat(i):r},[]):t.filter(r=>Si(r,e))}function _n(t,e){return J(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function $i(t,e){return _n(t,n=>!e.includes(n))}function va(t,e){return _n(t,n=>e.includes(n))}function Ei(t,e){return e in t}function wa(t){return JSON.parse(JSON.stringify(t))}function ba(t){function e(n){return J(t).reduce((s,i)=>{const o=n(i,t[i],t);return{...s,[i]:o}},{})}return e}function de(t,e){let n=!1;const r=J(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(J(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function Ai(t,e){const n=e[0];if(!ge(t,n))return;const r=t[n];return e.length>1?Ai(r,e.slice(1)):r}function Tt(t){const e=tt();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}async function _a(t,e){return Tt(t).then(()=>e)}function Ci(t){return!!(ge(t,"then")&&typeof t.then=="function")}class Pi extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function Yn(t,e){return new Promise(async(n,r)=>{const s=t===1/0?void 0:setTimeout(()=>{r(new Pi(t))},t);try{const i=await e;n(i)}catch(i){r(i)}finally{clearTimeout(s)}})}function tt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${tt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}async function xa({conditionCallback:t,timeoutMs:e=1e4,intervalMs:n=100,timeoutMessage:r=""}){let s=!1,i;async function o(){try{s=!!await t()}catch(l){s=!1,i=l}}const a=Date.now();for(await o();!s;){if(await Tt(n),Date.now()-a>=e){const l=r?`${r}: `:"";throw new Error(`${l}Timeout of "${e}" exceeded waiting for condition to be true${_e(i)}`)}await o()}}const On="://";function Sa(...t){const e=t.join("/"),[n,r=""]=e.includes(On)?e.split(On):["",e];let s=!1,i=!1;const o=r.replace(/\/{2,}/g,"/").split("/").map(a=>a.includes("?")||s?(s=!0,a):encodeURIComponent(a)).reduce((a,l,d,c)=>{if(i)return a;const u=c[d+1];let h=l;const f=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||f){i=!0;let y=!1;const p=c.slice(f?d+2:d+1).reduce((v,m)=>(m.includes("#")&&(y=!0),y?v.concat(m):[v,m].join("&")),"");h=[l,u,p].join("")}return a.concat(h)},[]);return[n,n?On:"",o.join("/")].join("")}const $a=/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/;function Ea(t){return!!t.match($a)}const Aa=["k","M","B","T","P","E","Z","Y"];function Ir({beforeDot:t,afterDot:e="",maxLength:n}){if(e.length){const r=n-t.length-1;if(r>0){const s=e.slice(0,r);return Number(s)?[t,s].join("."):t}}return t}function Ca(t,e,n){const[r,s]=Ve(t,"."),i=Nr(r),o=Or(i,/,/g).length,a=e[o-1],[l,d]=Ve(i,","),c=[d,s].join("");return l.length+1>n?["0.",l[0],e[o]].join(""):[Ir({beforeDot:l,afterDot:c,maxLength:n-1}),a].join("")}const as=3;function Pa({input:t,maxLength:e}){const n=String(t),[r,s]=Ve(n,"e"),i=s.replace(/^[\-\+]/,""),o=s[0],a=["e",o,i].join(""),[l,d]=Ve(r,"."),c=i.length+as;return c===e?[l,a].join(""):c>e?o==="-"?"0":String(1/0):[Ir({afterDot:d,beforeDot:l,maxLength:e-i.length+as}),a].join("")}function Ta(t,e){const[n,r]=Ve(Nr(t),".");if(n.length<=e)return Ir({beforeDot:n,afterDot:r,maxLength:e})}function ka(t,{customSuffixes:e=Aa,maxLength:n=6}={}){const r=fi(t);if(isNaN(r)||r===1/0)return String(r);if(mi(r))return Pa({input:r,maxLength:n});const s=String(r),i=Ta(s,n);return i??Ca(s,e,n)}function Oa(t,e){return t.length>=e}function Na(t){return t}function Da(t){return t}function Ma(){return t=>t}function Ra(t){return t}const ja=Object.freeze(Object.defineProperty({__proto__:null,InvalidDateError:rn,NaNString:hi,PromiseTimeoutError:Pi,addCommasToNumber:Nr,addRegExpFlags:Zo,ansiRegex:si,areJsonEqual:jr,assertMatchesObjectShape:Pt,assertRuntimeTypeOf:_i,awaitedBlockingMap:Tr,awaitedFilter:Xo,awaitedForEach:Qo,calculateRelativeDate:aa,camelCaseToKebabCase:li,capitalizeFirstLetter:We,clamp:Dr,collapseWhiteSpace:wn,combineErrorMessages:ua,combineErrors:ca,convertIntoNumber:fi,copyThroughJson:pa,createDateFromNamedCommaFormat:yi,createDateFromSlashFormat:oa,createDateFromUtcIsoFormat:Rr,createDeferredPromiseWrapper:tt,deDupeRegExFlags:kr,doesRequireScientificNotation:mi,englishFullMonthNames:Mr,englishShortMonthNames:gi,ensureError:Je,ensureMinAndMax:pi,ensureType:Ra,escapeStringForRegExp:ci,executeAndReturnError:da,extractErrorMessage:_e,filterObject:_n,filterOutIndexes:Wo,filterToEnumValues:ya,flatten2dArray:Vo,getAllIndexesOf:di,getEntriesSortedByKey:Jn,getEnumTypedKeys:xi,getEnumTypedValues:zr,getObjectTypedKeys:J,getObjectTypedValues:wi,getRuntimeTypeOf:bn,getValueFromNestedKeys:Ai,hasKey:Ei,isBrowser:la,isEnumValue:Si,isKeyof:fa,isLengthAtLeast:Oa,isObject:sn,isPromiseLike:Ci,isRuntimeTypeOf:ke,isTruthy:et,isUuid:Ea,joinUrlParts:Sa,joinWithFinalConjunction:ea,jsonify:wa,kebabCaseToCamelCase:ai,makeReadonly:Da,makeWritable:Na,mapObjectValues:de,mapObjectValuesSync:ba,matchesObjectShape:ga,omitObjectKeys:$i,parseJson:Gn,pickObjectKeys:va,removeAnsiEscapeCodes:ii,removeColor:ta,removeCommasFromNumberString:oi,replaceStringAtIndex:ia,safeMatch:Or,splitIncludeSplit:na,trimArrayStrings:Jo,truncateNumber:ka,typedArrayIncludes:Go,typedHasProperties:vi,typedHasProperty:ge,typedMap:Yo,typedObjectFromEntries:ma,typedSplit:Ve,wait:Tt,waitForCondition:xa,waitValue:_a,wrapNarrowTypeWithTypeCheck:Ma,wrapPromiseInTimeout:Yn},Symbol.toStringTag,{value:"Module"})),Br=globalThis.crypto;function Ti({min:t,max:e}){const{min:n,max:r}=pi({min:Math.floor(t),max:Math.floor(e)}),s=r-n+1,i=Math.ceil(Math.log2(s)/8),o=Math.floor(256**i/s)*s,a=new Uint8Array(i);let l;do Br.getRandomValues(a),l=a.reduce((d,c,u)=>d+c*256**u,0);while(l>=o);return n+l%s}function za(t=50){return Ti({min:0,max:99})<Dr({value:Math.floor(t),min:0,max:100})}function Ia(){return Br.randomUUID()}function ki(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return Br.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function Ba(t){return t.map(e=>({value:e,sort:ki()})).sort((e,n)=>e.sort.localeCompare(n.sort)).map(({value:e})=>e)}async function La(t){const e=tt(),n=new Image;return n.onload=()=>{e.resolve(n)},n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,e.promise}function X(t){return String(t).endsWith("px")?String(t):`${t}px`}function Ka(t){return Number(t.replace(/px$/,""))}function ut(t){const e=t.query.split(" ").filter(et);if(!t.query)return t.element instanceof Element?t.element:t.element.host;if(e.length>1)return Qn({...t,queries:e});if("shadowRoot"in t.element&&t.element.shadowRoot)return ut({...t,element:t.element.shadowRoot});const n=Array.from(t.element.children).filter(r=>!!r.shadowRoot).map(r=>r.shadowRoot);if(t.all){const r=Array.from(t.element.querySelectorAll(t.query)),s=n.map(i=>ut({...t,all:!0,element:i})).flat();return[...r,...s]}else{const r=t.element.querySelector(t.query);if(r)return r;for(let s=0;s<n.length;s++){const i=n[s],o=ut({...t,element:i});if(o)return o}return}}function Qn(t){const e=t.queries[0];if(!e)throw new Error(`Somehow the first query was empty in '[${t.queries.join(",")}]' for query '${t.query}'`);const n=ut({...t,query:e});return t.queries.length<=1?n:ke(n,"array")?n.map(r=>Qn({...t,element:r,queries:t.queries.slice(1)})).flat().filter(et):n?Qn({...t,element:n,queries:t.queries.slice(1)}):void 0}function Fa(t){const e=_n(t,(i,o)=>o!=null),n=de(e,(i,o)=>String(o)),s=new URLSearchParams(Object.entries(n)).toString();return s?`?${s}`:""}function Ha(t,e){const n=ke(t,"string")?new URL(t):t,r=Array.from(n.searchParams.entries()),s=Object.fromEntries(r);return e&&Pt(s,e),s}async function qa(t){const e=tt(),n=document.createElement("video");return n.addEventListener("loadeddata",()=>{e.resolve(n)}),n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,n.load(),e.promise}const Ua=Object.freeze(Object.defineProperty({__proto__:null,addPx:X,createUuid:Ia,loadImage:La,loadVideo:qa,objectToSearchParamsString:Fa,queryThroughShadow:ut,randomBoolean:za,randomInteger:Ti,randomString:ki,removePx:Ka,searchParamStringToObject:Ha,shuffleArray:Ba},Symbol.toStringTag,{value:"Module"}));function Wa(){let t=!1,e,n;function r(s){const i=!t||!jr(s.triggers,n);return n=s.triggers,i&&(e=s.createPromise()),t=!0,e}return{get:r}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xn=t=>(...e)=>({_$litDirective$:t,values:e});let kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nn;const on=window,Ge=on.trustedTypes,ls=Ge?Ge.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xn="$lit$",pe=`lit$${(Math.random()+"").slice(9)}$`,Oi="?"+pe,Va=`<${Oi}>`,Ye=document,bt=()=>Ye.createComment(""),_t=t=>t===null||typeof t!="object"&&typeof t!="function",Ni=Array.isArray,Ja=t=>Ni(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Dn=`[ 	
\f\r]`,it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cs=/-->/g,us=/>/g,Se=RegExp(`>|${Dn}(?:([^\\s"'>=/]+)(${Dn}*=${Dn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ds=/'/g,hs=/"/g,Di=/^(?:script|style|textarea|title)$/i,Ga=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Ya=Ga(1),ee=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),fs=new WeakMap,Fe=Ye.createTreeWalker(Ye,129,null,!1),Qa=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=it;for(let l=0;l<n;l++){const d=t[l];let c,u,h=-1,f=0;for(;f<d.length&&(o.lastIndex=f,u=o.exec(d),u!==null);)f=o.lastIndex,o===it?u[1]==="!--"?o=cs:u[1]!==void 0?o=us:u[2]!==void 0?(Di.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=Se):u[3]!==void 0&&(o=Se):o===Se?u[0]===">"?(o=s??it,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Se:u[3]==='"'?hs:ds):o===hs||o===ds?o=Se:o===cs||o===us?o=it:(o=Se,s=void 0);const y=o===Se&&t[l+1].startsWith("/>")?" ":"";i+=o===it?d+Va:h>=0?(r.push(c),d.slice(0,h)+Xn+d.slice(h)+pe+y):d+pe+(h===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ls!==void 0?ls.createHTML(a):a,r]};let Zn=class Mi{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[d,c]=Qa(e,n);if(this.el=Mi.createElement(d,r),Fe.currentNode=this.el.content,n===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(s=Fe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const h of s.getAttributeNames())if(h.endsWith(Xn)||h.startsWith(pe)){const f=c[o++];if(u.push(h),f!==void 0){const y=s.getAttribute(f.toLowerCase()+Xn).split(pe),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:p[2],strings:y,ctor:p[1]==="."?Za:p[1]==="?"?tl:p[1]==="@"?nl:Sn})}else l.push({type:6,index:i})}for(const h of u)s.removeAttribute(h)}if(Di.test(s.tagName)){const u=s.textContent.split(pe),h=u.length-1;if(h>0){s.textContent=Ge?Ge.emptyScript:"";for(let f=0;f<h;f++)s.append(u[f],bt()),Fe.nextNode(),l.push({type:2,index:++i});s.append(u[h],bt())}}}else if(s.nodeType===8)if(s.data===Oi)l.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(pe,u+1))!==-1;)l.push({type:7,index:i}),u+=pe.length-1}i++}}static createElement(e,n){const r=Ye.createElement("template");return r.innerHTML=e,r}};function Qe(t,e,n=t,r){var s,i,o,a;if(e===ee)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const d=_t(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),d===void 0?l=void 0:(l=new d(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=Qe(t,l._$AS(t,e.values),l,r)),e}let Xa=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Ye).importNode(r,!0);Fe.currentNode=i;let o=Fe.nextNode(),a=0,l=0,d=s[0];for(;d!==void 0;){if(a===d.index){let c;d.type===2?c=new Kr(o,o.nextSibling,this,e):d.type===1?c=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(c=new rl(o,this,e)),this.u.push(c),d=s[++l]}a!==(d==null?void 0:d.index)&&(o=Fe.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Kr=class Ri{constructor(e,n,r,s){var i;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Qe(this,e,n),_t(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==ee&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ja(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==j&&_t(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Zn.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new Xa(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=fs.get(e.strings);return n===void 0&&fs.set(e.strings,n=new Zn(e)),n}k(e){Ni(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new Ri(this.S(bt()),this.S(bt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},Sn=class{constructor(e,n,r,s,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Qe(this,e,n,0),o=!_t(e)||e!==this._$AH&&e!==ee,o&&(this._$AH=e);else{const a=e;let l,d;for(e=i[0],l=0;l<i.length-1;l++)d=Qe(this,a[r+l],n,l),d===ee&&(d=this._$AH[l]),o||(o=!_t(d)||d!==this._$AH[l]),d===j?e=j:e!==j&&(e+=(d??"")+i[l+1]),this._$AH[l]=d}o&&!s&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Za=class extends Sn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}};const el=Ge?Ge.emptyScript:"";let tl=class extends Sn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,el):this.element.removeAttribute(this.name)}},nl=class extends Sn{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=Qe(this,e,n,0))!==null&&r!==void 0?r:j)===ee)return;const s=this._$AH,i=e===j&&s!==j||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==j&&(s===j||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},rl=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}};const ms=on.litHtmlPolyfillSupport;ms==null||ms(Zn,Kr),((Nn=on.litHtmlVersions)!==null&&Nn!==void 0?Nn:on.litHtmlVersions=[]).push("2.7.0");const sl=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new Kr(e.insertBefore(bt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const il=t=>t===null||typeof t!="object"&&typeof t!="function",ol=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(t,e)=>{var n,r;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(r=(n=i)._$AO)===null||r===void 0||r.call(n,e,!1),dt(i,e);return!0},an=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},ji=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),cl(e)}};function al(t){this._$AN!==void 0?(an(this),this._$AM=t,ji(this)):this._$AM=t}function ll(t,e=!1,n=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)dt(r[i],!1),an(r[i]);else r!=null&&(dt(r,!1),an(r));else dt(this,t)}const cl=t=>{var e,n,r,s;t.type==Lr.CHILD&&((e=(r=t)._$AP)!==null&&e!==void 0||(r._$AP=ll),(n=(s=t)._$AQ)!==null&&n!==void 0||(s._$AQ=al))};let ul=class extends kt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),ji(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),n&&(dt(this,e),an(this))}setValue(e){if(ol(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dl=class{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}},hl=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var e;(e=this.Z)!==null&&e!==void 0||(this.Z=new Promise(n=>this.q=n))}resume(){var e;(e=this.q)===null||e===void 0||e.call(this),this.Z=this.q=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let er=class extends kt{constructor(e){if(super(e),this.it=j,e.type!==Lr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===ee)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};er.directiveName="unsafeHTML",er.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ps=class extends er{};ps.directiveName="unsafeSVG",ps.resultType=2;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=t=>!il(t)&&typeof t.then=="function",ys=1073741823;let fl=class extends ul{constructor(){super(...arguments),this._$Cwt=ys,this._$Cyt=[],this._$CK=new dl(this),this._$CX=new hl}render(...e){var n;return(n=e.find(r=>!gs(r)))!==null&&n!==void 0?n:ee}update(e,n){const r=this._$Cyt;let s=r.length;this._$Cyt=n;const i=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<n.length&&!(a>this._$Cwt);a++){const l=n[a];if(!gs(l))return this._$Cwt=a,l;a<s&&l===r[a]||(this._$Cwt=ys,s=0,Promise.resolve(l).then(async d=>{for(;o.get();)await o.get();const c=i.deref();if(c!==void 0){const u=c._$Cyt.indexOf(l);u>-1&&u<c._$Cwt&&(c._$Cwt=u,c.setValue(d))}}))}return ee}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ml=xn(fl);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pl(t,e,n){return t?e():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=window,Fr=Jt.ShadowRoot&&(Jt.ShadyCSS===void 0||Jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hr=Symbol(),vs=new WeakMap;let zi=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Hr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Fr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=vs.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&vs.set(n,e))}return e}toString(){return this.cssText}};const ne=t=>new zi(typeof t=="string"?t:t+"",void 0,Hr),Ii=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new zi(n,t,Hr)},gl=(t,e)=>{Fr?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=Jt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},ws=Fr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return ne(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mn;const ln=window,bs=ln.trustedTypes,yl=bs?bs.emptyScript:"",_s=ln.reactiveElementPolyfillSupport,tr={toAttribute(t,e){switch(e){case Boolean:t=t?yl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Bi=(t,e)=>e!==t&&(e==e||t==t),Rn={attribute:!0,type:String,converter:tr,reflect:!1,hasChanged:Bi};let Be=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=Rn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Rn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(ws(s))}else e!==void 0&&n.push(ws(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gl(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Rn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:tr).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:tr;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Bi)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Be.finalized=!0,Be.elementProperties=new Map,Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},_s==null||_s({ReactiveElement:Be}),((Mn=ln.reactiveElementVersions)!==null&&Mn!==void 0?Mn:ln.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jn,zn;let ht=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=sl(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ee}};ht.finalized=!0,ht._$litElement$=!0,(jn=globalThis.litElementHydrateSupport)===null||jn===void 0||jn.call(globalThis,{LitElement:ht});const xs=globalThis.litElementPolyfillSupport;xs==null||xs({LitElement:ht});((zn=globalThis.litElementVersions)!==null&&zn!==void 0?zn:globalThis.litElementVersions=[]).push("3.3.0");var vl=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function wl(){return t=>{}}let cn=class extends ht{};cn=vl([wl()],cn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bl=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Li(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):bl(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var In;((In=window.HTMLSlotElement)===null||In===void 0?void 0:In.prototype.assignedElements)!=null;const nr=Symbol("this-is-an-element-vir-declarative-element"),qr=Symbol("key for ignoring inputs not having been set yet"),_l={[qr]:!0};function Ki(t,e){J(e).forEach(n=>{Li()(t,n),"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),Fi(t)}function Fi(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function Hi(t,e){return rr(t,e),t.element}function rr(t,e){if(t.type!==Lr.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function Ur(t,e){return e?Ss(t,e):Ss(void 0,t)}const Ss=xn(class extends kt{constructor(t){super(t),this.element=Hi(t,"assign")}render(t,e){return xl(t,this.element,e),ee}});function xl(t,e,n){Ki(e,n)}function qi(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof cn?!0:qi(n)}function Ui(t,e){return`${t}-${li(e)}`}function Sl(t,e){return e?de(e,n=>ne(`--${Ui(t,String(n))}`)):{}}function $l(t,e){return t?de(t,(n,r)=>{const s=e[n];return ne(`var(${s}, ${r})`)}):{}}class El extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Wi(){return t=>{var e;return e=class extends El{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function Gt(){return Wi()}function Al(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Wi()(n);return e[n]=r,e},{}):{}}function $s(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Es(t,e){const n=t;function r(i,o){return e&&$s(o,t,t.tagName),n[o]}return new Proxy({},{get:r,set:(i,o,a)=>(e&&$s(o,t,t.tagName),i[o]=void 0,n[o]=a,!0),ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Cl(t,e){return e?de(e,n=>Ui(t,String(n))):{}}function Pl({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:de(t,(r,s)=>ne(`:host(.${s})`)),hostClassNames:de(t,(r,s)=>ne(s)),cssVarNames:e,cssVarValues:n}}function Tl({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&J(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function kl(t,e){function n(s){J(s).forEach(i=>{const o=s[i];t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Ol=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Wr(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const n=Al(t.events),r=Cl(t.tagName,t.hostClasses),s=Sl(t.tagName,t.cssVars),i=$l(t.cssVars,s),o={..._l,...t.options},a=typeof t.styles=="function"?t.styles(Pl({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Ii``,l=t.renderCallback,d=(e=class extends cn{createRenderParams(){return kl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Fi(this)}render(){try{qi(this)&&!this.haveInputsBeenSet&&!o[qr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${Ur.name}" directive on it. If no inputs are intended, use "${Wr.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const u=l(c);return Tl({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),u}catch(c){const u=Je(c);throw u.message=`Failed to render '${t.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Ki(this,c)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.instanceInputs=Es(this,!1),this.instanceState=Es(this,!0);const c=t.stateInit||{};J(c).forEach(u=>{Li()(this,u),this.instanceState[u]=c[u]}),this.definition=d}},Ol(e,"anonymousClass"),e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(d,{[nr]:{value:!0,writable:!1},name:{value:ai(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof d,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,d),d}function Vi(){return t=>Wr({...t,options:{[qr]:!1},...t.options})}function ft(t,e){return Nl(t,e)}const Nl=xn(class extends kt{constructor(t){super(t),this.element=Hi(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ee}}),As="onDomCreated",Cs=xn(class extends kt{constructor(t){super(t),rr(t,As)}update(t,[e]){rr(t,As);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function Ps(t,e,n){return pl(t,()=>e,()=>n)}function Ji(t,e){if(typeof e=="string")throw new Error("Cannot pass string renderer");return t instanceof Promise?ml(t.catch(n=>Je(n)).then(n=>n instanceof Error?e({error:n}):e({resolved:n})),e({promise:t})):e({resolved:t})}function Dl({cachedPromise:t,render:e,triggers:n,createPromise:r}){return Ji(t.get({createPromise:r,triggers:n}),e)}function Ml(t){const{assertInputs:e,transformInputs:n}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(r=>r)};return{defineElement:()=>r=>(e(r),Vi()(n(r))),defineElementNoInputs:r=>(e(r),Wr(n(r)))}}function Rl(t,e){return t.filter((n,r)=>!e.includes(r))}function Gi(t){return t.filter(e=>vi(e,["tagName",nr])&&!!e.tagName&&!!e[nr])}const Yi=new WeakMap;function jl(t,e){var s;const n=Gi(e);return(s=Qi(Yi,[t,...n]).value)==null?void 0:s.template}function zl(t,e,n){const r=Gi(e);return Zi(Yi,[t,...r],n)}function Qi(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Xi(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Qi(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Xi(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function Zi(t,e,n,r=0){const{currentTemplateAndNested:s,currentKey:i,reason:o}=Xi(t,e,r);if(!i)return{result:!1,reason:o};const a=s??{nested:void 0,template:void 0};if(s||t.set(i,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),Zi(l,e,n,r+1)}function eo(t,e,n){return{name:t,check:e,transform:n}}const Il=new WeakMap;function to(t,e,n){const r=jl(t,e),s=r??n();if(!r){const o=zl(t,e,s);if(o.result)Il.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Rl(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function no(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,d)=>{var v;const c=s.length-1,u=s[c],h=d-1,f=e[h];let y;r&&r(l),typeof u=="string"&&(y=(v=n.find(m=>m.check(u,l,f)))==null?void 0:v.transform,y&&(s[c]=u+y(f)+l,o.push(h))),y||s.push(l);const p=t.raw[d];y?i[c]=i[c]+y(f)+p:i.push(p)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function ro(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Bl=[eo("tag name css selector interpolation",(t,e,n)=>ro(n),t=>t.tagName)];function Ll(t,e){return no(t,e,Bl)}function Ke(t,...e){const n=to(t,e,()=>Ll(t,e));return Ii(n.strings,...n.values)}const Kl=[eo("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=ro(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function Fl(t){}function Hl(t){return no(t.strings,t.values,Kl,Fl)}function z(t,...e){const n=Ya(t,...e),r=to(t,e,()=>Hl(n));return{...n,strings:r.strings,values:r.values}}function ql(t,e){return t<e}function Ul(t,e){return t>e}const Ts={width:250,height:250};function Wl({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Ul:ql)(e.width/e.height,t.width/t.height)?"width":"height"}function Bn({box:t,constraint:e,constraintType:n}){const r=Wl({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function so({box:t,ratio:e}){return de(t,(n,r)=>r*e)}function sr({box:t,min:e,max:n}){return de(t,(r,s)=>Dr({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function io({min:t,max:e,box:n}){const r=oo({min:t,max:e,box:n}),s=so({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||Ts.height),width:Math.floor(s.width||(t==null?void 0:t.width)||Ts.width)}}function oo({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Bn({box:n,constraint:t,constraintType:"min"}):1,s=e?Bn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=so({ratio:i,box:n});return(t?Bn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}function Ee(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=Vl(o,r[a]);return`${o}${l}`});return wn(i.join(""))}function Vl(t,e){return e._$litType$!=null||e._$litDirective$!=null?Ee(e):Array.isArray(e)?e.map(r=>Ee(r)).join(""):t.endsWith("=")?`"${e}"`:e}function Jl(t){const e=Gl(t);return ke(e,"object")||ke(e,"array")}function Gl(t){const e=Gn({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=Yl(t);return Gn({jsonString:n,errorHandler:()=>{}})}function Yl(t){return wn(t).replace(/,\s*([}\]])/,"$1")}var T=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(T||{});const Ql=["text","json"];function ks(t){return Ql.includes(t)}async function Xl(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":Jl(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function Zl({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Ee(z`
            <img src=${n} />
        `):t==="video"?Ee(z`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Ee(z`
                <div class="text-wrapper">
                    <p class="text">
                        ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):t==="audio"?Ee(z`
                <audio controls src=${n}></audio>
            `):e}function ec(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}else if(e==="html")return t.replaceAll(/console\.\w+/g,"doNothing");return t}async function Os({imageUrl:t,blockAutoPlay:e,textTransformer:n=s=>s},r){var c;const s=await fetch(t,{signal:r});if(!s.ok)throw new Error(`vir-resizable-image failed to load image from '${t}'`);const i=((c=s==null?void 0:s.headers.get("Content-Type"))==null?void 0:c.toLowerCase())??"",o=await(s==null?void 0:s.text())??"",a=s?await Xl(i,o):"image",l=n(ec(o??"",a));return{templateString:Zl({imageText:l,imageType:a,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:a}}const Ns=z`
    <div class="click-cover"></div>
`;function tc({promise:t,resolved:e},n){return e?!n.blockInteraction&&[T.Html,T.Video,T.Audio,T.Pdf].includes(e.imageType)?"":Ns:t?Ns:""}var It=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ao(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Xe={},Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.IframeDisconnectedError=void 0;class nc extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}Ot.IframeDisconnectedError=nc;var $n={},ye={};Object.defineProperty(ye,"__esModule",{value:!0});ye.isDebugMode=ye.setDebugMode=void 0;let lo=!1;function rc(t){lo=t}ye.setDebugMode=rc;function sc(){return lo}ye.isDebugMode=sc;var Nt={},Dt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnyOrigin=t.MessageDirectionEnum=void 0,function(e){e.FromParent="from-parent",e.FromChild="from-child"}(t.MessageDirectionEnum||(t.MessageDirectionEnum={})),t.AnyOrigin=Symbol("any-origin")})(Dt);Object.defineProperty(Nt,"__esModule",{value:!0});Nt.assertAllowedOrigin=void 0;const ic=Dt;function oc(t,e){if(t===ic.AnyOrigin)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}Nt.assertAllowedOrigin=oc;var En={};Object.defineProperty(En,"__esModule",{value:!0});En.dangerDisableSecurityWarningsSymbol=void 0;En.dangerDisableSecurityWarningsSymbol=Symbol("dangerDisableSecurityWarningsSymbol");var An={};const ac=ao(Ua),lc=ao(ja);Object.defineProperty(An,"__esModule",{value:!0});An.sendPingPongMessageToChild=void 0;const cc=ac,Ds=lc,Ms=ye,uc=Ot,dc=Nt,Ln=Dt;function hc(t,e,n){return n.type===t&&n.direction===e}function fc(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function mc({message:t,verifyChildData:e,iframeElement:n},r,s){if(!n)throw new Error("No iframe element was provided.");let i=0,o=!1,a,l,d,c=!1;const u={...t,direction:Ln.MessageDirectionEnum.FromParent,messageId:(0,cc.randomString)(32)},h=t.type,f=r===Ln.AnyOrigin?["*"]:r;function y(v){try{(0,dc.assertAllowedOrigin)(r,v);const m=v.data;if(m.type==="error")throw new Error(`Child threw an error: ${m.data}`);if((0,Ms.isDebugMode)()&&console.info("Received message from child",m.messageId,m),m&&c&&hc(h,Ln.MessageDirectionEnum.FromChild,m)&&m.messageId===u.messageId){let g=!1;try{g=e?e(m.data):!0}catch{}if(!g)return;o=!0,l=v,a=m}}catch(m){d=(0,Ds.ensureError)(m)}}globalThis.addEventListener("message",y);const p=Date.now();for(;!o&&Date.now()-p<s&&!d;){if(!n.isConnected)throw new uc.IframeDisconnectedError;const v=n.contentWindow;v&&((0,Ms.isDebugMode)()&&(c?console.info("Re-sending message to child",u.messageId):console.info("Sending message to child",u.messageId,u)),c=!0,f.forEach(m=>{try{v.postMessage(u,{targetOrigin:m})}catch{}})),await(0,Ds.wait)(fc(i)),i++}if(globalThis.removeEventListener("message",y),d)throw d;if(!o)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${Math.ceil(s/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but received a valid response");return{data:a==null?void 0:a.data,event:l}}An.sendPingPongMessageToChild=mc;Object.defineProperty($n,"__esModule",{value:!0});$n.createIframeMessenger=void 0;const Rs=ye,pc=Nt,gc=En,je=Dt,yc=An;function co({allowedOrigins:t,timeoutMs:e=1e4,...n}){if(t!==je.AnyOrigin&&t.includes("*")&&(t=je.AnyOrigin),t===je.AnyOrigin&&!n[gc.dangerDisableSecurityWarningsSymbol]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==je.AnyOrigin&&!t.length)throw new Error(`No allowed origins were provide to ${co.name}. At least one must be provided.`);const r=t===je.AnyOrigin?["*"]:t;return{async sendMessageToChild(s){if(s.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await(0,yc.sendPingPongMessageToChild)(s,t,s.timeoutMs||e)},listenForParentMessages(s){globalThis.addEventListener("message",async i=>{(0,pc.assertAllowedOrigin)(t,i);const o=i.data;(0,Rs.isDebugMode)()&&console.info("Received message from parent",o.messageId,o);const a=await s({...o,originalEvent:i}),l={type:o.type,direction:je.MessageDirectionEnum.FromChild,data:a,messageId:o.messageId};(0,Rs.isDebugMode)()&&console.info("Sending message to parent",l.messageId,l),r.forEach(d=>{try{globalThis.parent.postMessage(l,{targetOrigin:d})}catch{}})})}}}$n.createIframeMessenger=co;var uo={};Object.defineProperty(uo,"__esModule",{value:!0});var Cn={};Object.defineProperty(Cn,"__esModule",{value:!0});Cn.setInterlockingIframeMessengerDebugMode=void 0;const vc=ye;function wc(t){(0,vc.setDebugMode)(t)}Cn.setInterlockingIframeMessengerDebugMode=wc;(function(t){var e=It&&It.__createBinding||(Object.create?function(r,s,i,o){o===void 0&&(o=i);var a=Object.getOwnPropertyDescriptor(s,i);(!a||("get"in a?!s.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(r,o,a)}:function(r,s,i,o){o===void 0&&(o=i),r[o]=s[i]}),n=It&&It.__exportStar||function(r,s){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&e(s,r,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(Ot,t),n($n,t),n(uo,t),n(Dt,t),n(Cn,t)})(Xe);var Q=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Q||{}),K=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(K||{});const oe=Xe.createIframeMessenger({allowedOrigins:[window.location.origin]});async function bc(t,e){const n=tt();t.onload=()=>{n.resolve()};try{await oe.sendMessageToChild({message:{type:K.Ready},iframeElement:t,timeoutMs:e})}catch{await n.promise,await oe.sendMessageToChild({message:{type:K.Ready},iframeElement:t,timeoutMs:e})}}async function _c({min:t,max:e,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,forcedOriginalImageSize:o,timeoutMs:a}){var d;await bc(r,a),i&&await oe.sendMessageToChild({message:{type:K.ForceSize,data:i},iframeElement:r,timeoutMs:a});const l=o??(await oe.sendMessageToChild({message:{type:K.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await ho({min:t,max:e,imageDimensions:l,host:n,iframeElement:r,imageData:s,forcedFinalImageSize:i,sendSizeMessage:!0,timeoutMs:a}),((d=r.contentWindow)==null?void 0:d.document.documentElement.outerHTML)??""}async function ho({min:t,max:e,imageDimensions:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:l}){const d=r.shadowRoot.querySelector(".frame-constraint");if(!(d instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c={min:t,max:e,box:o??n},u=ks(i.imageType)?sr(c):io(c);d.style.width=X(Math.floor(u.width)),d.style.height=X(Math.floor(u.height));const h=sr({min:t,max:e,box:u});u.height<h.height?r.classList.add(Q.VerticallyCenter):r.classList.remove(Q.VerticallyCenter),r.style.width=X(h.width),r.style.height=X(h.height);const f=oo({min:t,max:e,box:o??n});if(a){if(f>3?await oe.sendMessageToChild({message:{type:K.SendScalingMethod,data:"pixelated"},iframeElement:s,timeoutMs:l}):await oe.sendMessageToChild({message:{type:K.SendScalingMethod,data:"default"},iframeElement:s,timeoutMs:l}),await oe.sendMessageToChild({message:{type:K.SizeDetermined,data:u},iframeElement:s,timeoutMs:l}),i.imageType===T.Html){const y=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},p={width:f*y.width,height:f*y.height};await oe.sendMessageToChild({message:{type:K.SendScale,data:p},iframeElement:s,timeoutMs:l})}else if(ks(i.imageType)){const y=o??n;if(y.height<u.height){const p=u.width/y.width,v=u.height/y.height,m=Math.min(p,v);await oe.sendMessageToChild({message:{type:K.SendScale,data:{height:m,width:m}},iframeElement:s,timeoutMs:l})}}}}const Bt={x:16,y:8};var js=Object.freeze,xc=Object.defineProperty,zs=(t,e)=>js(xc(t,"raw",{value:js(e||t.slice())})),Is,Bs;function Sc(t,e,n){const r=Math.random(),s=z(Is||(Is=zs([`
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
    `])),t.imageType,n??"",T.Svg,T.Html,T.Image,T.Video,T.Text,T.Json,T.Audio,Xe.MessageDirectionEnum.FromChild,Xe.MessageDirectionEnum.FromChild,K.Ready,K.SendScale,K.SendScalingMethod,K.SendSize,K.ForceSize,K.SizeDetermined,T.Json,T.Text,Bt.y,T.Audio),i=z(Bs||(Bs=zs([`
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
    `])),t.imageType,T.Image,T.Svg,T.Video,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,Bt.y,Bt.x,T.Text,T.Json,Bt.y,r,e??"",s);return wn(Ee(i)).replace(String(r),`
${t.templateString}
`)}function $c({error:t,promise:e,resolved:n},{forcedFinalImageSize:r,eagerLoading:s,extraHtml:i,htmlSizeQuerySelector:o},{dispatch:a,events:l,maxConstraint:d,minConstraint:c,host:u,timeoutMs:h,sourceDocKey:f,clampedForcedOriginalImageSize:y,abortController:p}){if(t)return a(new l.errored(Je(t))),z`
            <div class="error-wrapper">
                <slot name="error">${_e(t)}</slot>
            </div>
        `;if(e)return"";{const v=n;return a(new l.imageDataCalculated(v)),v.imageType===T.Pdf?z`
                <iframe
                    src=${v.imageUrl}
                    ${Cs(async m=>{try{await ho({forcedFinalImageSize:r,host:u,iframeElement:m,imageData:v,imageDimensions:d??{width:500,height:500},max:d,min:c,sendSizeMessage:!1,timeoutMs:h}),u[f]="",a(new l.settled(!0)),u.classList.add(Q.HideLoading)}catch(g){if(g instanceof Xe.IframeDisconnectedError){p.abort();return}else console.error(g)}})}
                ></iframe>
            `:z`
                <iframe
                    loading=${s?"eager":"lazy"}
                    referrerpolicy="no-referrer"
                    scrolling="no"
                    srcdoc=${Sc(v,i,o)}
                    ${Cs(async m=>{try{const g=await _c({min:c,max:d,host:u,iframeElement:m,imageData:v,forcedFinalImageSize:r,forcedOriginalImageSize:y,timeoutMs:h});u[f]=g,a(new l.settled(!0)),u.classList.add(Q.HideLoading)}catch(g){if(g instanceof Xe.IframeDisconnectedError)return;console.error(g)}})}
                ></iframe>
                <slot name="loaded"></slot>
            `}}const Ls="latest-frame-srcdoc",Ec=1e4,Ac={textTransformer:"textTransformer",extraHtml:"extraHtml"},Cc=wi(Ac),mt=Vi()({tagName:"vir-resizable-image",stateInit:{imageDataPromise:Wa()},events:{settled:Gt(),imageDataCalculated:Gt(),errored:Gt()},styles:Ke`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${ne(Q.VerticallyCenter)}) {
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

        :host(.${ne(Q.HideLoading)}) .loading-wrapper,
        :host(.${ne(Q.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${ne(Q.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${ne(Q.HideLoading)}) iframe {
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[Ls];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,host:n,dispatch:r,events:s}){const i=e.timeoutMs??Ec,o=e.min&&e.max?sr({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?io({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,d=Ke`
            width: ${(o==null?void 0:o.width)??250}px;
            height: ${(o==null?void 0:o.height)??250}px;
        `,c=new AbortController;return Dl({cachedPromise:t.imageDataPromise,async createPromise(){n.classList.remove(Q.HideLoading),r(new s.settled(!1)),n.classList.remove(Q.VerticallyCenter);const u={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer};try{return await Yn(i,Os(u,c.signal))}catch{return await Tt(2e3),await Yn(i,Os(u,c.signal))}},triggers:{...$i(e,Cc)},render(u){var v;u.error&&console.error(u.error);const h=$c(u,e,{clampedForcedOriginalImageSize:l,dispatch:r,events:s,host:n,maxConstraint:a,minConstraint:o,sourceDocKey:Ls,timeoutMs:i,abortController:c}),f=tc(u,e),y=u.error?Ke`
                          max-width: 100%;
                          max-height: 100%;
                      `:l?Ke`
                          width: ${l.width}px;
                          height: ${l.height}px;
                      `:"",p=z`
                    <div class="frame-constraint" style=${y}>
                        ${h}
                    </div>
                `;return z`
                    ${Ps(!u.error,z`
                            <div class="loading-wrapper">
                                <slot name="loading">Loading...</slot>
                            </div>
                        `)}

                    <div class="min-size" style=${d}>
                        ${Ps(!u.error,p,z`
                                <div class="error-wrapper">
                                    <slot name="error">Error: ${(v=u.error)==null?void 0:v.message}</slot>
                                </div>
                            `)}
                    </div>
                    ${f}
                `}})}}),N=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,I=Object.keys,H=Array.isArray;function W(t,e){return typeof e!="object"||I(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||N.Promise||(N.Promise=Promise);const xt=Object.getPrototypeOf,Pc={}.hasOwnProperty;function Y(t,e){return Pc.call(t,e)}function Ze(t,e){typeof e=="function"&&(e=e(xt(t))),(typeof Reflect>"u"?I:Reflect.ownKeys)(e).forEach(n=>{ce(t,n,e[n])})}const fo=Object.defineProperty;function ce(t,e,n,r){fo(t,e,W(n&&Y(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function He(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ce(t.prototype,"constructor",t),{extend:Ze.bind(null,t.prototype)}}}}const Tc=Object.getOwnPropertyDescriptor;function Vr(t,e){let n;return Tc(t,e)||(n=xt(t))&&Vr(n,e)}const kc=[].slice;function un(t,e,n){return kc.call(t,e,n)}function mo(t,e){return e(t)}function lt(t){if(!t)throw new Error("Assertion Failed")}function po(t){N.setImmediate?setImmediate(t):setTimeout(t,0)}function go(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function ue(t,e){if(Y(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=ue(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:ue(a,e.substr(o+1))}}function Z(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){lt(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Z(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?H(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&Y(t,o)||(l=t[o]={}),Z(l,a,n)}}else n===void 0?H(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function yo(t){var e={};for(var n in t)Y(t,n)&&(e[n]=t[n]);return e}const Oc=[].concat;function vo(t){return Oc.apply([],t)}const wo="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(vo([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>N[t]),Nc=wo.map(t=>N[t]);go(wo,t=>[t,!0]);let me=null;function Mt(t){me=typeof WeakMap<"u"&&new WeakMap;const e=ir(t);return me=null,e}function ir(t){if(!t||typeof t!="object")return t;let e=me&&me.get(t);if(e)return e;if(H(t)){e=[],me&&me.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(ir(t[n]))}else if(Nc.indexOf(t.constructor)>=0)e=t;else{const i=xt(t);for(var s in e=i===Object.prototype?{}:Object.create(i),me&&me.set(t,e),t)Y(t,s)&&(e[s]=ir(t[s]))}return e}const{toString:Dc}={};function or(t){return Dc.call(t).slice(8,-1)}const ar=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Mc=typeof ar=="symbol"?function(t){var e;return t!=null&&(e=t[ar])&&e.apply(t)}:function(){return null},Le={};function ae(t){var e,n,r,s;if(arguments.length===1){if(H(t))return t.slice();if(this===Le&&typeof t=="string")return[t];if(s=Mc(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const Jr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var re=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function bo(t,e){re=t,_o=e}var _o=()=>!0;const Rc=!new Error("").stack;function De(){if(Rc)try{throw De.arguments,new Error}catch(t){return t}return new Error}function lr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(_o).map(r=>`
`+r).join("")):""}var xo=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Gr=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(xo),jc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function qe(t,e){this._e=De(),this.name=t,this.message=e}function So(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function dn(t,e,n,r){this._e=De(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=So(t,e)}function pt(t,e){this._e=De(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=So(t,e)}He(qe).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+lr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),He(dn).from(qe),He(pt).from(qe);var Yr=Gr.reduce((t,e)=>(t[e]=e+"Error",t),{});const zc=qe;var C=Gr.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=De(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=jc[e]||n,this.inner=null)}return He(r).from(zc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Ks=xo.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),Yt=Gr.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function k(){}function St(t){return t}function Ic(t,e){return t==null||t===St?e:function(n){return e(t(n))}}function Oe(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Bc(t,e){return t===k?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Oe(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Oe(s,this.onerror):s),i!==void 0?i:n}}function Lc(t,e){return t===k?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Oe(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Oe(r,this.onerror):r)}}function Kc(t,e){return t===k?e:function(n){var r=t.apply(this,arguments);W(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Oe(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Oe(i,this.onerror):i),r===void 0?o===void 0?void 0:o:W(r,o)}}function Fc(t,e){return t===k?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Qr(t,e){return t===k?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}Yt.ModifyError=dn,Yt.DexieError=qe,Yt.BulkError=pt;var $t={};const[cr,hn,ur]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,xt(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,xt(e),t]})(),$o=hn&&hn.then,Qt=cr&&cr.constructor,Xr=!!ur;var dr=!1,Hc=ur?()=>{ur.then(Lt)}:N.setImmediate?setImmediate.bind(null,Lt):N.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Lt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Lt,0)},gt=function(t,e){ct.push([t,e]),fn&&(Hc(),fn=!1)},hr=!0,fn=!0,Ce=[],Xt=[],fr=null,mr=St,Ue={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Hs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Hs(t[0],t[1])}catch{}})}},A=Ue,ct=[],Pe=0,Zt=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=k,this._lib=!1;var e=this._PSD=A;if(re&&(this._stackHolder=De(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==$t)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&gr(this,this._value))}this._state=null,this._value=null,++e.ref,Ao(this,t)}const pr={get:function(){var t=A,e=mn;function n(r,s){var i=!t.global&&(t!==A||e!==mn);const o=i&&!he();var a=new S((l,d)=>{Zr(this,new Eo(pn(r,t,i,o),pn(s,t,i,o),l,d,t))});return re&&To(a,this),a}return n.prototype=$t,n},set:function(t){ce(this,"then",t&&t.prototype===$t?pr:{get:function(){return t},set:pr.set})}};function Eo(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function Ao(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Rt();n&&typeof n.then=="function"?Ao(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,Co(t)),r&&jt()}},gr.bind(null,t))}catch(n){gr(t,n)}}function gr(t,e){if(Xt.push(e),t._state===null){var n=t._lib&&Rt();e=mr(e),t._state=!1,t._value=e,re&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=Vr(e,"stack");e._promise=t,ce(e,"stack",{get:()=>dr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ce.some(s=>s._value===r._value)||Ce.push(r)}(t),Co(t),n&&jt()}}function Co(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)Zr(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Pe===0&&(++Pe,gt(()=>{--Pe==0&&es()},[]))}function Zr(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Pe,gt(qc,[n,t,e])}else t._listeners.push(e)}function qc(t,e,n){try{fr=e;var r,s=e._value;e._state?r=t(s):(Xt.length&&(Xt=[]),r=t(s),Xt.indexOf(s)===-1&&function(i){for(var o=Ce.length;o;)if(Ce[--o]._value===i._value)return void Ce.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{fr=null,--Pe==0&&es(),--n.psd.ref||n.psd.finalize()}}function Po(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=lr(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return re&&((r=lr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&Po(t._prev,e,n)),e}function To(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Lt(){Rt()&&jt()}function Rt(){var t=hr;return hr=!1,fn=!1,t}function jt(){var t,e,n;do for(;ct.length>0;)for(t=ct,ct=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(ct.length>0);hr=!0,fn=!0}function es(){var t=Ce;Ce=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Zt.slice(0),n=e.length;n;)e[--n]()}function Kt(t){return new S($t,!1,t)}function D(t,e){var n=A;return function(){var r=Rt(),s=A;try{return we(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{we(s,!1),r&&jt()}}}Ze(S.prototype,{then:pr,_then:function(t,e){Zr(this,new Eo(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Kt(r)):this.then(null,r=>r&&r.name===e?n(r):Kt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Kt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{dr=!0;var t=Po(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{dr=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ce(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Ue.env=ko(),Ze(S,{all:function(){var t=ae.apply(null,arguments).map(Ft);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S($t,!0,t);return To(e,fr),e},reject:Kt,race:function(){var t=ae.apply(null,arguments).map(Ft);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>mn},newPSD:ve,usePSD:rt,scheduler:{get:()=>gt,set:t=>{gt=t}},rejectionMapper:{get:()=>mr,set:t=>{mr=t}},follow:(t,e)=>new S((n,r)=>ve((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Oe(function(){(function(a){function l(){a(),Zt.splice(Zt.indexOf(l),1)}Zt.push(l),++Pe,gt(()=>{--Pe==0&&es()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Qt&&(Qt.allSettled&&ce(S,"allSettled",function(){const t=ae.apply(null,arguments).map(Ft);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Qt.any&&typeof AggregateError<"u"&&ce(S,"any",function(){const t=ae.apply(null,arguments).map(Ft);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const F={awaits:0,echoes:0,id:0};var Uc=0,en=[],Kn=0,mn=0,Wc=0;function ve(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++Wc;var o=Ue.env;i.env=Xr?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:Fs(o.nthen,i),gthen:Fs(o.gthen,i)}:{},e&&W(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=rt(i,t,n,r);return i.ref===0&&i.finalize(),a}function nt(){return F.id||(F.id=++Uc),++F.awaits,F.echoes+=100,F.id}function he(){return!!F.awaits&&(--F.awaits==0&&(F.id=0),F.echoes=100*F.awaits,!0)}function Ft(t){return F.echoes&&t&&t.constructor===Qt?(nt(),t.then(e=>(he(),e),e=>(he(),B(e)))):t}function Vc(t){++mn,F.echoes&&--F.echoes!=0||(F.echoes=F.id=0),en.push(A),we(t,!0)}function Jc(){var t=en[en.length-1];en.pop(),we(t,!1)}function we(t,e){var n=A;if((e?!F.echoes||Kn++&&t===A:!Kn||--Kn&&t===A)||Oo(e?Vc.bind(null,t):Jc),t!==A&&(A=t,n===Ue&&(Ue.env=ko()),Xr)){var r=Ue.env.Promise,s=t.env;hn.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(N,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function ko(){var t=N.Promise;return Xr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(N,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:hn.then,gthen:t.prototype.then}:{}}function rt(t,e,n,r,s){var i=A;try{return we(t,!0),e(n,r,s)}finally{we(i,!1)}}function Oo(t){$o.call(cr,t)}function pn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&nt(),we(e,!0);try{return t.apply(this,arguments)}finally{we(s,!1),r&&Oo(he)}}}function Fs(t,e){return function(n,r){return t.call(this,pn(n,e),pn(r,e))}}(""+$o).indexOf("[native code]")===-1&&(nt=he=k);function Hs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(N.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),W(r,s)):N.CustomEvent&&W(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&N.dispatchEvent&&(dispatchEvent(r),!N.PromiseRejectionEvent&&N.onunhandledrejection))try{N.onunhandledrejection(r)}catch{}re&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var B=S.reject;function yr(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===Yr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>yr(t,e,n,r))):B(i)}return s._promise(e,(i,o)=>ve(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return B(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return B(new C.DatabaseClosed);t.open().catch(k)}return t._state.dbReadyPromise.then(()=>yr(t,e,n,r))}const Ae=String.fromCharCode(65535),se="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",yt=[],Pn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),Gc=Pn,Yc=Pn,No=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Ne(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Do={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ht(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Mt(e))[t],e)}class Qc{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,d,c){if(!c.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(c.idbtrans,c)}const a=Rt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):ve(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):yr(this.db,e,[this.name],o)}finally{a&&jt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(H(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=I(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(d=>d.compound&&n.every(c=>d.keyPath.indexOf(c)>=0)&&d.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==Ae)return this.where(r.name).equals(r.keyPath.map(d=>e[d]));!r&&re&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(d,c){try{return i.cmp(d,c)===0}catch{return!1}}const[a,l]=n.reduce(([d,c],u)=>{const h=s[u],f=e[u];return[d||h,d||!h?Ne(c,h&&h.multi?y=>{const p=ue(y,u);return H(p)&&p.some(v=>o(f,v))}:y=>o(f,ue(y,u))):c]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,H(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(Y(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){W(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Ht(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||H(e))return this.where(":id").equals(e).modify(n);{const r=ue(e,this.schema.primKey.keyPath);if(r===void 0)return B(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?I(n).forEach(s=>{Z(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=Ht(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Z(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Do})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const d=e.length;let c=l&&a?e.map(Ht(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:i}).then(({numFailures:u,results:h,lastResult:f,failures:y})=>{if(u===0)return i?h:f;throw new pt(`${this.name}.bulkAdd(): ${u} of ${d} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const d=e.length;let c=l&&a?e.map(Ht(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:i}).then(({numFailures:u,results:h,lastResult:f,failures:y})=>{if(u===0)return i?h:f;throw new pt(`${this.name}.bulkPut(): ${u} of ${d} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new pt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function vt(t){var e={},n=function(a,l){if(l){for(var d=arguments.length,c=new Array(d-1);--d;)c[d-1]=arguments[d];return e[a].subscribe.apply(null,c),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,d){if(typeof a=="object")return o(a);l||(l=Fc),d||(d=k);var c={subscribers:[],fire:d,subscribe:function(u){c.subscribers.indexOf(u)===-1&&(c.subscribers.push(u),c.fire=l(c.fire,u))},unsubscribe:function(u){c.subscribers=c.subscribers.filter(function(h){return h!==u}),c.fire=c.subscribers.reduce(l,d)}};return e[a]=n[a]=c,c}function o(a){I(a).forEach(function(l){var d=a[l];if(H(d))i(l,a[l][0],a[l][1]);else{if(d!=="asap")throw new C.InvalidArgument("Invalid event config");var c=i(l,St,function(){for(var u=arguments.length,h=new Array(u);u--;)h[u]=arguments[u];c.subscribers.forEach(function(f){po(function(){f.apply(null,h)})})})}})}}function ot(t,e){return He(e).from({prototype:t}),e}function ze(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Fn(t,e){t.filter=Ne(t.filter,e)}function Hn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Ne(r(),e()):e,t.justLimit=n&&!r}function tn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function qs(t,e,n){const r=tn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function qt(t,e,n,r){const s=t.replayFilter?Ne(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,d)=>{if(!s||s(l,d,h=>l.stop(h),h=>l.fail(h))){var c=l.primaryKey,u=""+c;u==="[object ArrayBuffer]"&&(u=""+new Uint8Array(c)),Y(i,u)||(i[u]=!0,e(a,l,d))}};return Promise.all([t.or._iterate(o,n),Us(qs(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Us(qs(t,r,n),Ne(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Us(t,e,n,r){var s=D(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=k},a=>{i.fail(a),o=k})||s(i.value,i,a=>o=a),o()})})}function U(t,e){try{const n=Ws(t),r=Ws(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let d=0;d<l;++d)if(s[d]!==i[d])return s[d]<i[d]?-1:1;return o===a?0:o<a?-1:1}(Vs(t),Vs(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let d=0;d<l;++d){const c=U(s[d],i[d]);if(c!==0)return c}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function Ws(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=or(t);return n==="ArrayBuffer"?"binary":n}function Vs(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class Xc{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,B.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,B.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Ne(n.algorithm,e)}_iterate(e,n){return qt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&W(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>qt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(ze(r,!0))return s.count({trans:n,query:{index:tn(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return qt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(d,c){return c?o(d[r[c]],c-1):d[s]}var a=this._ctx.dir==="next"?1:-1;function l(d,c){var u=o(d,i),h=o(c,i);return u<h?-a:u>h?a:0}return this.toArray(function(d){return d.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&ze(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=tn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return qt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,ze(n)?Hn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Hn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Hn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return Fn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Fn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Ne(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&ze(n,!0)&&n.limit>0)return this._read(s=>{var i=tn(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Fn(this._ctx,function(s){var i=s.primaryKey.toString(),o=Y(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=I(e),o=i.length;s=function(p){for(var v=!1,m=0;m<o;++m){var g=i[m],b=e[g];ue(p,g)!==b&&(Z(p,g,b),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:d}=a.schema.primaryKey,c=this.db._options.modifyChunkSize||200,u=[];let h=0;const f=[],y=(p,v)=>{const{failures:m,numFailures:g}=v;h+=p-g;for(let b of I(m))u.push(m[b])};return this.clone().primaryKeys().then(p=>{const v=m=>{const g=Math.min(c,p.length-m);return a.getMany({trans:r,keys:p.slice(m,m+g),cache:"immutable"}).then(b=>{const E=[],x=[],w=l?[]:null,_=[];for(let $=0;$<g;++$){const O=b[$],M={value:Mt(O),primKey:p[m+$]};s.call(M,M.value,M)!==!1&&(M.value==null?_.push(p[m+$]):l||U(d(O),d(M.value))===0?(x.push(M.value),l&&w.push(p[m+$])):(_.push(p[m+$]),E.push(M.value)))}const P=ze(n)&&n.limit===1/0&&(typeof e!="function"||e===qn)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let O in $.failures)_.splice(parseInt(O),1);y(E.length,$)})).then(()=>(x.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:w,values:x,criteria:P,changeSpec:typeof e!="function"&&e}).then($=>y(x.length,$))).then(()=>(_.length>0||P&&e===qn)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then($=>y(_.length,$))).then(()=>p.length>m+g&&v(m+c))})};return v(0).then(()=>{if(u.length>0)throw new dn("Error modifying one or more objects",u,h,f);return p.length})})})}delete(){var e=this._ctx,n=e.range;return ze(e)&&(e.isPrimKey&&!Yc||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:d,numFailures:c})=>{if(c)throw new dn("Could not delete some values",Object.keys(a).map(u=>a[u]),o-c);return o-c}))}):this.modify(qn)}}const qn=(t,e)=>e.value=null;function Zc(t,e){return t<e?-1:t===e?0:1}function eu(t,e){return t>e?-1:t===e?0:1}function G(t,e,n){var r=t instanceof Ro?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Ie(t){return new t.Collection(t,()=>Mo("")).limit(0)}function tu(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var d=e[l];if(d!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],d)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function Ut(t,e,n,r){var s,i,o,a,l,d,c,u=n.length;if(!n.every(p=>typeof p=="string"))return G(t,"String expected.");function h(p){s=function(m){return m==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(p),i=function(m){return m==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(p),o=p==="next"?Zc:eu;var v=n.map(function(m){return{lower:i(m),upper:s(m)}}).sort(function(m,g){return o(m.lower,g.lower)});a=v.map(function(m){return m.upper}),l=v.map(function(m){return m.lower}),d=p,c=p==="next"?"":r}h("next");var f=new t.Collection(t,()=>fe(a[0],l[u-1]+r));f._ondirectionchange=function(p){h(p)};var y=0;return f._addAlgorithm(function(p,v,m){var g=p.key;if(typeof g!="string")return!1;var b=i(g);if(e(b,l,y))return!0;for(var E=null,x=y;x<u;++x){var w=tu(g,b,a[x],l[x],o,d);w===null&&E===null?y=x+1:(E===null||o(E,w)>0)&&(E=w)}return v(E!==null?function(){p.continue(E+c)}:m),!1}),f}function fe(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function Mo(t){return{type:1,lower:t,upper:t}}class Ro{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?Ie(this):new this.Collection(this,()=>fe(e,n,!r,!s))}catch{return G(this,se)}}equals(e){return e==null?G(this,se):new this.Collection(this,()=>Mo(e))}above(e){return e==null?G(this,se):new this.Collection(this,()=>fe(e,void 0,!0))}aboveOrEqual(e){return e==null?G(this,se):new this.Collection(this,()=>fe(e,void 0,!1))}below(e){return e==null?G(this,se):new this.Collection(this,()=>fe(void 0,e,!1,!0))}belowOrEqual(e){return e==null?G(this,se):new this.Collection(this,()=>fe(void 0,e))}startsWith(e){return typeof e!="string"?G(this,"String expected."):this.between(e,e+Ae,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Ut(this,(n,r)=>n.indexOf(r[0])===0,[e],Ae)}equalsIgnoreCase(e){return Ut(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ae.apply(Le,arguments);return e.length===0?Ie(this):Ut(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ae.apply(Le,arguments);return e.length===0?Ie(this):Ut(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Ae)}anyOf(){const e=ae.apply(Le,arguments);let n=this._cmp;try{e.sort(n)}catch{return G(this,se)}if(e.length===0)return Ie(this);const r=new this.Collection(this,()=>fe(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ae.apply(Le,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return G(this,se)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return Ie(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return G(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,d=n&&n.includeUppers===!0;let c,u=s;function h(g,b){return u(g[0],b[0])}try{c=e.reduce(function(g,b){let E=0,x=g.length;for(;E<x;++E){const w=g[E];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=a(w[1],b[1]);break}}return E===x&&g.push(b),g},[]),c.sort(h)}catch{return G(this,se)}let f=0;const y=d?g=>s(g,c[f][1])>0:g=>s(g,c[f][1])>=0,p=l?g=>i(g,c[f][0])>0:g=>i(g,c[f][0])>=0;let v=y;const m=new this.Collection(this,()=>fe(c[0][0],c[c.length-1][1],!l,!d));return m._ondirectionchange=g=>{g==="next"?(v=y,u=s):(v=p,u=i),c.sort(h)},m._addAlgorithm((g,b,E)=>{for(var x=g.key;v(x);)if(++f,f===c.length)return b(E),!1;return!!function(w){return!y(w)&&!p(w)}(x)||(this._cmp(x,c[f][1])===0||this._cmp(x,c[f][0])===0||b(()=>{u===s?g.continue(c[f][0]):g.continue(c[f][1])}),!1)}),m}startsWithAnyOf(){const e=ae.apply(Le,arguments);return e.every(n=>typeof n=="string")?e.length===0?Ie(this):this.inAnyRange(e.map(n=>[n,n+Ae])):G(this,"startsWithAnyOf() only works with strings")}}function te(t){return D(function(e){return Et(e),t(e.target.error),!1})}function Et(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const be=vt(null,"storagemutated");class nu{_lock(){return lt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(lt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{rt(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(lt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return lt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=D(s=>{Et(s),this._reject(e.error)}),e.onabort=D(s=>{Et(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=D(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&be.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return B(new C.ReadOnly("Transaction is readonly"));if(!this.active)return B(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return ve(()=>{var i=new S((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,a)=>{r.then(l=>n._waitingQueue.push(D(o.bind(null,l))),l=>n._waitingQueue.push(D(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Y(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function vr(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+jo(e)}}function jo(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function zo(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:go(n,r=>[r.name,r])}}let At=t=>{try{return t.only([[]]),At=()=>[[]],[[]]}catch{return At=()=>Ae,Ae}};function wr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>ue(n,e)}(t):e=>ue(e,t)}function Js(t){return[].slice.call(t)}let ru=0;function wt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function su(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:d,upper:c,lowerOpen:u,upperOpen:h}=l;return d===void 0?c===void 0?null:e.upperBound(c,!!h):c===void 0?e.lowerBound(d,!!u):e.bound(d,c,!!u,!!h)}const{schema:s,hasGetAll:i}=function(l,d){const c=Js(l.objectStoreNames);return{schema:{name:l.name,tables:c.map(u=>d.objectStore(u)).map(u=>{const{keyPath:h,autoIncrement:f}=u,y=H(h),p=h==null,v={},m={name:u.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:p,compound:y,keyPath:h,autoIncrement:f,unique:!0,extractKey:wr(h)},indexes:Js(u.indexNames).map(g=>u.index(g)).map(g=>{const{name:b,unique:E,multiEntry:x,keyPath:w}=g,_={name:b,compound:H(w),keyPath:w,unique:E,multiEntry:x,extractKey:wr(w)};return v[wt(w)]=_,_}),getIndexByKeyPath:g=>v[wt(g)]};return v[":id"]=m.primaryKey,h!=null&&(v[wt(h)]=m.primaryKey),m})},hasGetAll:c.length>0&&"getAll"in d.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(d){const c=d.name;return{name:c,schema:d,mutate:function({trans:u,type:h,keys:f,values:y,range:p}){return new Promise((v,m)=>{v=D(v);const g=u.objectStore(c),b=g.keyPath==null,E=h==="put"||h==="add";if(!E&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:x}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],P=[];let $=0;const O=q=>{++$,Et(q)};if(h==="deleteRange"){if(p.type===4)return v({numFailures:$,failures:P,results:[],lastResult:void 0});p.type===3?_.push(w=g.clear()):_.push(w=g.delete(r(p)))}else{const[q,L]=E?b?[y,f]:[y,null]:[f,null];if(E)for(let R=0;R<x;++R)_.push(w=L&&L[R]!==void 0?g[h](q[R],L[R]):g[h](q[R])),w.onerror=O;else for(let R=0;R<x;++R)_.push(w=g[h](q[R])),w.onerror=O}const M=q=>{const L=q.target.result;_.forEach((R,Me)=>R.error!=null&&(P[Me]=R.error)),v({numFailures:$,failures:P,results:h==="delete"?f:_.map(R=>R.result),lastResult:L})};w.onerror=q=>{O(q),M(q)},w.onsuccess=M})},getMany:({trans:u,keys:h})=>new Promise((f,y)=>{f=D(f);const p=u.objectStore(c),v=h.length,m=new Array(v);let g,b=0,E=0;const x=_=>{const P=_.target;m[P._pos]=P.result,++E===b&&f(m)},w=te(y);for(let _=0;_<v;++_)h[_]!=null&&(g=p.get(h[_]),g._pos=_,g.onsuccess=x,g.onerror=w,++b);b===0&&f(m)}),get:({trans:u,key:h})=>new Promise((f,y)=>{f=D(f);const p=u.objectStore(c).get(h);p.onsuccess=v=>f(v.target.result),p.onerror=te(y)}),query:function(u){return h=>new Promise((f,y)=>{f=D(f);const{trans:p,values:v,limit:m,query:g}=h,b=m===1/0?void 0:m,{index:E,range:x}=g,w=p.objectStore(c),_=E.isPrimaryKey?w:w.index(E.name),P=r(x);if(m===0)return f({result:[]});if(u){const $=v?_.getAll(P,b):_.getAllKeys(P,b);$.onsuccess=O=>f({result:O.target.result}),$.onerror=te(y)}else{let $=0;const O=v||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),M=[];O.onsuccess=q=>{const L=O.result;return L?(M.push(v?L.value:L.primaryKey),++$===m?f({result:M}):void L.continue()):f({result:M})},O.onerror=te(y)}})}(i),openCursor:function({trans:u,values:h,query:f,reverse:y,unique:p}){return new Promise((v,m)=>{v=D(v);const{index:g,range:b}=f,E=u.objectStore(c),x=g.isPrimaryKey?E:E.index(g.name),w=y?p?"prevunique":"prev":p?"nextunique":"next",_=h||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=te(m),_.onsuccess=D(P=>{const $=_.result;if(!$)return void v(null);$.___id=++ru,$.done=!1;const O=$.continue.bind($);let M=$.continuePrimaryKey;M&&(M=M.bind($));const q=$.advance.bind($),L=()=>{throw new Error("Cursor not stopped")};$.trans=u,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=D(m),$.next=function(){let R=1;return this.start(()=>R--?this.continue():this.stop()).then(()=>this)},$.start=R=>{const Me=new Promise((V,xe)=>{V=D(V),_.onerror=te(xe),$.fail=xe,$.stop=st=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=L,V(st)}}),Re=()=>{if(_.result)try{R()}catch(V){$.fail(V)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=D(V=>{_.onsuccess=Re,Re()}),$.continue=O,$.continuePrimaryKey=M,$.advance=q,Re(),Me},v($)},m)})},count({query:u,trans:h}){const{index:f,range:y}=u;return new Promise((p,v)=>{const m=h.objectStore(c),g=f.isPrimaryKey?m:m.index(f.name),b=r(y),E=b?g.count(b):g.count();E.onsuccess=D(x=>p(x.target.result)),E.onerror=te(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:At(e),schema:s}}function br({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(c,u){return u.reduce((h,{create:f})=>({...h,...f(h)}),c)}(su(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function gn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=Vr(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ce(o,s,{get(){return this.table(s)},set(l){fo(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function _r({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function iu(t,e){return t._cfg.version-e._cfg.version}function ou(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;ve(()=>{A.trans=i,A.transless=a,e===0?(I(s).forEach(l=>{Un(n,l,s[l].primKey,s[l].indexes)}),br(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},d,c,u){const h=[],f=l._versions;let y=l._dbSchema=Sr(l,l.idbdb,u),p=!1;function v(){return h.length?S.resolve(h.shift()(c.idbtrans)).then(v):S.resolve()}return f.filter(m=>m._cfg.version>=d).forEach(m=>{h.push(()=>{const g=y,b=m._cfg.dbschema;$r(l,g,u),$r(l,b,u),y=l._dbSchema=b;const E=Io(g,b);E.add.forEach(w=>{Un(u,w[0],w[1].primKey,w[1].indexes)}),E.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=u.objectStore(w.name);w.add.forEach(P=>xr(_,P)),w.change.forEach(P=>{_.deleteIndex(P.name),xr(_,P)}),w.del.forEach(P=>_.deleteIndex(P))}});const x=m._cfg.contentUpgrade;if(x&&m._cfg.version>d){br(l,u),c._memoizedTables={},p=!0;let w=yo(b);E.del.forEach(O=>{w[O]=g[O]}),_r(l,[l.Transaction.prototype]),gn(l,[l.Transaction.prototype],I(w),w),c.schema=w;const _=Jr(x);let P;_&&nt();const $=S.follow(()=>{if(P=x(c),P&&_){var O=he.bind(null,null);P.then(O,O)}});return P&&typeof P.then=="function"?S.resolve(P):$.then(()=>P)}}),h.push(g=>{(!p||!Gc)&&function(b,E){[].slice.call(E.db.objectStoreNames).forEach(x=>b[x]==null&&E.db.deleteObjectStore(x))}(m._cfg.dbschema,g),_r(l,[l.Transaction.prototype]),gn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),c.schema=l._dbSchema})}),v().then(()=>{var m,g;g=u,I(m=y).forEach(b=>{g.db.objectStoreNames.contains(b)||Un(g,b,m[b].primKey,m[b].indexes)})})}(t,e,i,n).catch(o)})}function Io(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!Pn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let d;for(d in a)l[d]||o.del.push(d);for(d in l){const c=a[d],u=l[d];c?c.src!==u.src&&o.change.push(u):o.add.push(u)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function Un(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>xr(s,i)),s}function xr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Sr(t,e,n){const r={};return un(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=vr(jo(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let c=0;c<i.indexNames.length;++c){const u=i.index(i.indexNames[c]);o=u.keyPath;var d=vr(u.name,o,!!u.unique,!!u.multiEntry,!1,o&&typeof o!="string",!1);l.push(d)}r[s]=zo(s,a,l)}),r}function $r({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],d=o.index(l).keyPath,c=typeof d=="string"?d:"["+un(d).join("+")+"]";if(e[i]){const u=e[i].idxByName[c];u&&(u.name=l,delete e[i].idxByName[c],e[i].idxByName[l]=u)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&N.WorkerGlobalScope&&N instanceof N.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class au{_parseStoresSpec(e,n){I(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return vr(l,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),H(d),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=zo(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?W(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{W(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,_r(n,[n._allTables,n,n.Transaction.prototype]),gn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],I(i),i),n._storeNames=I(i),this}upgrade(e){return this._cfg.contentUpgrade=Qr(this._cfg.contentUpgrade||k,e),this}}function ts(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Te("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function ns(t){return t&&typeof t.databases=="function"}function Er(t){return ve(function(){return A.letThrough=!0,t()})}function lu(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function cu(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?B(e.dbOpenError):t);re&&(e.openCanceller._stackHolder=De()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return S.race([r,(typeof navigator>"u"?S.resolve():lu()).then(()=>new S((l,d)=>{if(s(),!n)throw new C.MissingAPI;const c=t.name,u=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!u)throw new C.MissingAPI;u.onerror=te(d),u.onblocked=D(t._fireOnBlocked),u.onupgradeneeded=D(h=>{if(o=u.transaction,e.autoSchema&&!t._options.allowEmptyDB){u.onerror=Et,o.abort(),u.result.close();const y=n.deleteDatabase(c);y.onsuccess=y.onerror=D(()=>{d(new C.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=te(d);var f=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=f<1,t._novip.idbdb=u.result,ou(t,f/10,o,d)}},d),u.onsuccess=D(()=>{o=null;const h=t._novip.idbdb=u.result,f=un(h.objectStoreNames);if(f.length>0)try{const p=h.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},m,g){v.verno=m.version/10;const b=v._dbSchema=Sr(0,m,g);v._storeNames=un(m.objectStoreNames,0),gn(v,[v._allTables],I(b),b)}(t,h,p):($r(t,t._dbSchema,p),function(v,m){const g=Io(Sr(0,v.idbdb,m),v._dbSchema);return!(g.add.length||g.change.some(b=>b.add.length||b.change.length))}(t,p)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),br(t,p)}catch{}var y;yt.push(t),h.onversionchange=D(p=>{e.vcFired=!0,t.on("versionchange").fire(p)}),h.onclose=D(p=>{t.on("close").fire(p)}),a&&function({indexedDB:p,IDBKeyRange:v},m){!ns(p)&&m!=="__dbnames"&&ts(p,v).put({name:m}).catch(k)}(t._deps,c),l()},d)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(Er(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let d=e.onReadyBeingFired.reduce(Qr,k);return e.onReadyBeingFired=[],S.resolve(Er(()=>d(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),B(l)}).finally(()=>{e.openComplete=!0,i()})}function Ar(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):H(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function uu(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=vo(s);return[t,i,n]}function Bo(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(u){return u.name===Yr.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Bo(t,e,n,null,s))):B(u)}const l=Jr(s);let d;l&&nt();const c=S.follow(()=>{if(d=s.call(o,o),d)if(l){var u=he.bind(null,null);d.then(u,u)}else typeof d.next=="function"&&typeof d.throw=="function"&&(d=Ar(d))},a);return(d&&typeof d.then=="function"?S.resolve(d).then(u=>o.active?u:B(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>d)).then(u=>(r&&o._resolve(),o._completion.then(()=>u))).catch(u=>(o._reject(u),B(u)))})}function Wt(t,e,n){const r=H(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const du={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(c,u,h){const f=wt(c),y=s[f]=s[f]||[],p=c==null?0:typeof c=="string"?1:c.length,v=u>0,m={...h,isVirtual:v,keyTail:u,keyLength:p,extractKey:wr(c),unique:!v&&h.unique};return y.push(m),m.isPrimaryKey||i.push(m),p>1&&o(p===2?c[0]:c.slice(0,p-1),u+1,h),y.sort((g,b)=>g.keyTail-b.keyTail),m}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const c of r.indexes)o(c.keyPath,0,c);function l(c){const u=c.query.index;return u.isVirtual?{...c,query:{index:u,range:(h=c.query.range,f=u.keyTail,{type:h.type===1?2:h.type,lower:Wt(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Wt(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var h,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(c){const u=s[wt(c)];return u&&u[0]}},count:c=>n.count(l(c)),query:c=>n.query(l(c)),openCursor(c){const{keyTail:u,isVirtual:h,keyLength:f}=c.query.index;return h?n.openCursor(l(c)).then(y=>y&&function(p){return Object.create(p,{continue:{value:function(m){m!=null?p.continue(Wt(m,c.reverse?t.MAX_KEY:t.MIN_KEY,u)):c.unique?p.continue(p.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,u)):p.continue()}},continuePrimaryKey:{value(m,g){p.continuePrimaryKey(Wt(m,t.MAX_KEY,u),g)}},primaryKey:{get:()=>p.primaryKey},key:{get(){const m=p.key;return f===1?m[0]:m.slice(0,f)}},value:{get:()=>p.value}})}(y)):n.openCursor(c)}}}}}};function rs(t,e,n,r){return n=n||{},r=r||"",I(t).forEach(s=>{if(Y(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=or(i);a!==or(o)?n[r+s]=e[s]:a==="Object"?rs(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),I(e).forEach(s=>{Y(t,s)||(n[r+s]=e[s])}),n}const hu={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:d}=o.table(e).hook;switch(i.type){case"add":if(l.fire===k)break;return o._promise("readwrite",()=>c(i),!0);case"put":if(l.fire===k&&d.fire===k)break;return o._promise("readwrite",()=>c(i),!0);case"delete":if(a.fire===k)break;return o._promise("readwrite",()=>c(i),!0);case"deleteRange":if(a.fire===k)break;return o._promise("readwrite",()=>function(h){return u(h.trans,h.range,1e4)}(i),!0)}return n.mutate(i);function c(h){const f=A.trans,y=h.keys||function(p,v){return v.type==="delete"?v.keys:v.keys||v.values.map(p.extractKey)}(r,h);if(!y)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:y}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(p,v,m){return v.type==="add"?Promise.resolve([]):p.getMany({trans:v.trans,keys:m,cache:"immutable"})}(n,h,y).then(p=>{const v=y.map((m,g)=>{const b=p[g],E={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call(E,m,b,f);else if(h.type==="add"||b===void 0){const x=l.fire.call(E,m,h.values[g],f);m==null&&x!=null&&(m=x,h.keys[g]=m,r.outbound||Z(h.values[g],r.keyPath,m))}else{const x=rs(b,h.values[g]),w=d.fire.call(E,x,m,b,f);if(w){const _=h.values[g];Object.keys(w).forEach(P=>{Y(_,P)?_[P]=w[P]:Z(_,P,w[P])})}}return E});return n.mutate(h).then(({failures:m,results:g,numFailures:b,lastResult:E})=>{for(let x=0;x<y.length;++x){const w=g?g[x]:y[x],_=v[x];w==null?_.onerror&&_.onerror(m[x]):_.onsuccess&&_.onsuccess(h.type==="put"&&p[x]?h.values[x]:w)}return{failures:m,results:g,numFailures:b,lastResult:E}}).catch(m=>(v.forEach(g=>g.onerror&&g.onerror(m)),Promise.reject(m)))})}function u(h,f,y){return n.query({trans:h,values:!1,query:{index:r,range:f},limit:y}).then(({result:p})=>c({type:"delete",keys:p,trans:h}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):p.length<y?{failures:[],numFailures:0,lastResult:void 0}:u(h,{...f,lower:p[p.length-1],lowerOpen:!0},y)))}}}}})};function Lo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)U(e.keys[s],t[i])===0&&(r.push(n?Mt(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const fu={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=Lo(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Mt(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function ss(t){return!("from"in t)}const ie=function(t,e){if(!this){const n=new ie;return t&&"d"in t&&W(n,t),n}W(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Ct(t,e,n){const r=U(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(ss(t))return W(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(U(n,t.from)<0)return s?Ct(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Gs(t);if(U(e,t.to)>0)return i?Ct(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Gs(t);U(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),U(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&yn(t,s),i&&o&&yn(t,i)}function yn(t,e){ss(e)||function n(r,{from:s,to:i,l:o,r:a}){Ct(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function mu(t,e){const n=Cr(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=Cr(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(U(a.from,s.to)<=0&&U(a.to,s.from)>=0)return!0;U(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function Cr(t){let e=ss(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&U(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||U(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Gs(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=Ys(o)}t.d=Ys(t)}function Ys({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}Ze(ie.prototype,{add(t){return yn(this,t),this},addKey(t){return Ct(this,t,t),this},addKeys(t){return t.forEach(e=>Ct(this,e,e)),this},[ar](){return Cr(this)}});const pu={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new ie(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,d={...s,mutate:h=>{const f=h.trans,y=f.mutatedParts||(f.mutatedParts={}),p=w=>{const _=`idb://${e}/${r}/${w}`;return y[_]||(y[_]=new ie)},v=p(""),m=p(":dels"),{type:g}=h;let[b,E]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const x=h.trans._cache;return s.mutate(h).then(w=>{if(H(b)){g!=="delete"&&(b=w.results),v.addKeys(b);const _=Lo(b,x);_||g==="add"||m.addKeys(b),(_||E)&&function(P,$,O,M){function q(L){const R=P(L.name||"");function Me(V){return V!=null?L.extractKey(V):null}const Re=V=>L.multiEntry&&H(V)?V.forEach(xe=>R.addKey(xe)):R.addKey(V);(O||M).forEach((V,xe)=>{const st=O&&Me(O[xe]),kn=M&&Me(M[xe]);U(st,kn)!==0&&(st!=null&&Re(st),kn!=null&&Re(kn))})}$.indexes.forEach(q)}(p,i,_,E)}else if(b){const _={from:b.lower,to:b.upper};m.add(_),v.add(_)}else v.add(n),m.add(n),i.indexes.forEach(_=>p(_.name).add(n));return w})}},c=({query:{index:h,range:f}})=>{var y,p;return[h,new ie((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(p=f.upper)!==null&&p!==void 0?p:t.MAX_KEY)]},u={get:h=>[o,new ie(h.key)],getMany:h=>[o,new ie().addKeys(h.keys)],count:c,query:c,openCursor:c};return I(u).forEach(h=>{d[h]=function(f){const{subscr:y}=A;if(y){const p=E=>{const x=`idb://${e}/${r}/${E}`;return y[x]||(y[x]=new ie)},v=p(""),m=p(":dels"),[g,b]=u[h](f);if(p(g.name||"").add(b),!g.isPrimaryKey){if(h!=="count"){const E=h==="query"&&l&&f.values&&s.query({...f,values:!1});return s[h].apply(this,arguments).then(x=>{if(h==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),x));const w=f.values?x.result.map(a):x.result;f.values?v.addKeys(w):m.addKeys(w)}else if(h==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(m.addKey(w.primaryKey),w.key)},primaryKey:{get(){const P=w.primaryKey;return m.addKey(P),P}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return x})}m.add(n)}}return s[h].apply(this,arguments)}}),d}}}};class Te{constructor(e,n){this._middlewares={},this.verno=0;const r=Te.dependencies;this._options=n={addons:Te.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:k,dbReadyPromise:null,cancelOpen:k,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(a=>{i.dbReadyResolve=a}),i.openCanceller=new S((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=vt(this,"populate","blocked","versionchange","close",{ready:[Qr,k]}),this.on.ready.subscribe=mo(this.on.ready.subscribe,a=>(l,d)=>{Te.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||S.resolve().then(l),d&&a(l);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(l),d&&a(l);else{a(l);const u=this;d||a(function h(){u.on.ready.unsubscribe(l),u.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,ot(Xc.prototype,function(a,l){this.db=o;let d=Do,c=null;if(l)try{d=l()}catch(y){c=y}const u=a._ctx,h=u.table,f=h.hook.reading.fire;this._ctx={table:h,index:u.index,isPrimKey:!u.index||h.schema.primKey.keyPath&&u.index===h.schema.primKey.name,range:d,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:u.or,valueMapper:f!==St?f:null}})),this.Table=function(a){return ot(Qc.prototype,function(l,d,c){this.db=a,this._tx=c,this.name=l,this.schema=d,this.hook=a._allTables[l]?a._allTables[l].hook:vt(null,{creating:[Bc,k],reading:[Ic,St],updating:[Kc,k],deleting:[Lc,k]})})}(this),this.Transaction=function(a){return ot(nu.prototype,function(l,d,c,u,h){this.db=a,this.mode=l,this.storeNames=d,this.schema=c,this.chromeTransactionDurability=u,this.idbtrans=null,this.on=vt(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),B(f)})})}(this),this.Version=function(a){return ot(au.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return ot(Ro.prototype,function(l,d,c){this.db=a,this._ctx={table:l,index:d===":id"?null:d,or:c};const u=a._deps.indexedDB;if(!u)throw new C.MissingAPI;this._cmp=this._ascending=u.cmp.bind(u),this._descending=(h,f)=>u.cmp(f,h),this._max=(h,f)=>u.cmp(h,f)>0?h:f,this._min=(h,f)=>u.cmp(h,f)<0?h:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=At(n.IDBKeyRange),this._createTransaction=(a,l,d,c)=>new this.Transaction(a,l,d,this._options.chromeTransactionDurability,c),this._fireOnBlocked=a=>{this.on("blocked").fire(a),yt.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(du),this.use(hu),this.use(pu),this.use(fu),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(iu),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(k)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return cu(this)}_close(){const e=this._state,n=yt.indexOf(this);if(n>=0&&yt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=D(()=>{(function({indexedDB:a,IDBKeyRange:l},d){!ns(a)&&d!=="__dbnames"&&ts(a,l).delete(d).catch(k)})(this._deps,this.name),r()}),o.onerror=te(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return I(this._allTables).map(e=>this._allTables[e])}transaction(){const e=uu.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(d=>{var c=d instanceof this.Table?d.name:d;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(d=>{if(s&&s.storeNames.indexOf(d)===-1){if(!i)throw new C.SubTransaction("Table "+d+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(d){return s?s._promise(null,(c,u)=>{u(d)}):B(d)}const l=Bo.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?rt(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!Y(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const gu=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class yu{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[gu](){return this}}function Ko(t,e){return I(e).forEach(n=>{yn(t[n]||(t[n]=new ie),e[n])}),t}function vu(t){return new yu(e=>{const n=Jr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,be.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let a=!1,l=!1;function d(){return I(i).some(h=>s[h]&&mu(s[h],i[h]))}const c=h=>{Ko(s,h),d()&&u()},u=()=>{if(a||r)return;s={};const h={},f=function(y){n&&nt();const p=()=>ve(t,{subscr:y,trans:null}),v=A.trans?rt(A.transless,p):p();return n&&v.then(he,he),v}(h);l||(be("storagemutated",c),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(d()?u():(s={},i=h,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return u(),o})}let Pr;try{Pr={indexedDB:N.indexedDB||N.mozIndexedDB||N.webkitIndexedDB||N.msIndexedDB,IDBKeyRange:N.IDBKeyRange||N.webkitIDBKeyRange}}catch{Pr={indexedDB:null,IDBKeyRange:null}}const $e=Te;function nn(t){let e=le;try{le=!0,be.storagemutated.fire(t)}finally{le=e}}Ze($e,{...Yt,delete:t=>new $e(t,{addons:[]}).delete(),exists:t=>new $e(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return ns(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):ts(e,n).toCollection().primaryKeys()}($e.dependencies).then(t)}catch{return B(new C.MissingAPI)}},defineClass:()=>function(t){W(this,t)},ignoreTransaction:t=>A.trans?rt(A.transless,t):t(),vip:Er,async:function(t){return function(){try{var e=Ar(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return B(n)}}},spawn:function(t,e,n){try{var r=Ar(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return B(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?$e.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>re,set:t=>{bo(t,t==="dexie"?()=>!0:No)}},derive:He,extend:W,props:Ze,override:mo,Events:vt,on:be,liveQuery:vu,extendObservabilitySet:Ko,getByKeyPath:ue,setByKeyPath:Z,delByKeyPath:function(t,e){typeof e=="string"?Z(t,e,void 0):"length"in e&&[].map.call(e,function(n){Z(t,n,void 0)})},shallowClone:yo,deepClone:Mt,getObjectDiff:rs,cmp:U,asap:po,minKey:-(1/0),addons:[],connections:yt,errnames:Yr,dependencies:Pr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),$e.maxKey=At($e.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(be("storagemutated",t=>{if(!le){let e;Pn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),le=!0,dispatchEvent(e),le=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{le||nn(t)}));let le=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),be("storagemutated",e=>{le||t.postMessage(e)}),t.onmessage=e=>{e.data&&nn(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){be("storagemutated",e=>{try{le||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&nn(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&nn(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof qe||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Ks[t.name])return t;var n=new Ks[t.name](e||t.message,t);return"stack"in t&&ce(n,"stack",{get:function(){return this.inner.stack}}),n},bo(re,No);class zt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class Qs extends zt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Tn="locationchange";let Xs=!1;const wu=window.history.pushState;function Zs(...t){const e=wu.apply(window.history,t);return window.dispatchEvent(new Event(Tn)),e}const bu=window.history.replaceState;function ei(...t){const e=bu.apply(window.history,t);return window.dispatchEvent(new Event(Tn)),e}function _u(){if(!Xs){if(window.history.pushState===Zs)throw new Qs("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===ei)throw new Qs("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");Xs=!0,window.history.pushState=Zs,window.history.replaceState=ei,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(Tn))})}}function xu(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Su(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function $u(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?xu(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Eu extends zt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Fo(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const ti=6;function ni(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>ti)throw new Eu(`Route sanitization depth has exceed the max of ${ti} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Fo(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class Wn extends zt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Au(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new Wn(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new Wn(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new Wn(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Cu(t,e,n,r=!1){const s=Ho(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Ho(t,e,n=""){var r;if(!n&&e!=null)throw new zt("Route base regexp was defined but routeBase string was not provided.");const s=Pu(e)?`/${n}`:"",i=t.search?Su(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function Pu(t){return!!(t&&window.location.pathname.match(t))}function Tu(t={}){var e;Au(t),_u();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const d=i.getCurrentRawRoutes(),c={...d,...o},u=i.sanitizeFullRoute(c);if(!(!l&&Fo(d,u)))return Cu(u,r,n,a)},createRoutesUrl:o=>Ho(o,r,n),getCurrentRawRoutes:()=>$u(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new zt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(Tn,()=>ni(i)),s=!0),o&&ni(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const qo=Tu({routeBase:"resizable-image-element"}),ku=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Ou="resizable-image-element-storage";class Nu extends Te{constructor(){super(Ou),this.version(1).stores({storedUrls:"&index"})}}const Vn=new Nu,ri={async set(t){const e=vn(t).map((n,r)=>({index:r,url:n}));await Vn.storedUrls.clear(),await Vn.storedUrls.bulkPut(e)},async get(){const e=(await Vn.storedUrls.toArray()).map(r=>r.url),n=vn(e);return Du(n.length?n:ku)}};function Du(t){var e,n;try{const r=vn(((n=(e=qo.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function vn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(et)}const{defineElement:Mu,defineElementNoInputs:Ru}=Ml(),Vt=Mu()({tagName:"vir-url-input",events:{urlsChange:Gt()},styles:Ke`
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
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),z`
            <textarea
                ${ft("input",a=>{const d=a.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(d))})}
                ${ft("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),at={max:{width:300,height:600},min:{width:300,height:150}};Ru({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:ri.get(),constraints:void 0,router:qo,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Ke`
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

        ${t.showConstraints} ${mt} {
            border-color: blue;
        }

        ${mt} {
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
    `,renderCallback({state:t,updateState:e}){if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||at.min.width,height:Number(o==null?void 0:o.minH)||at.min.height},max:{width:Number(o==null?void 0:o.maxW)||at.max.width,height:Number(o==null?void 0:o.maxH)||at.max.height}}})}const n=t.constraints??at,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!jr(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Tt(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),Ji(t.imageUrls,({resolved:o,error:a})=>{const l=z`
                <div class="images-container">
                    ${o?ju(n,o):a?`Error: ${a.message}`:"Loading..."}
                </div>
            `;return z`
                <a href="https://github.com/electrovir/resizable-image-element">
                    <h1>resizable-image-element</h1>
                </a>
                <p>Add more image URLs to the input below:</p>
                <${Vt}
                    ${Ur(Vt,{urls:r})}
                    ${ft(Vt.events.urlsChange,d=>{const c=d.detail;ri.set(c),e({imageUrls:d.detail})})}
                ></${Vt}>
                <p>
                    <label class="inline-label">
                        <input
                            type="checkbox"
                            ?checked=${t.showConstraints}
                            ${ft("input",d=>{const c=d.currentTarget;e({showConstraints:!!c.checked})})}
                        />
                        Outline constraint boxes
                    </label>
                </p>
                <p>
                    ${["min","max"].map(d=>{const c=["height","width"].map(u=>{const h=[We(d),We(u)].join(" "),f=n[d][u];return z`
                                <label>
                                    ${h}
                                    <br />
                                    ${X(f)}
                                    <br />
                                    <input
                                        type="range"
                                        max="1000"
                                        min="20"
                                        .value=${f}
                                        ${ft("input",y=>{i(y.currentTarget,d,u)})}
                                    />
                                </label>
                            `});return z`
                            <div class="constraint-controls">${c}</div>
                        `})}
                </p>

                ${l}
            `})}});function ju(t,e){return vn(e).map(n=>{const r=`
                height: ${X(t.max.height)};
                max-height: ${X(t.max.height)};
                width: ${X(t.max.width)};
                max-width: ${X(t.max.width)}`,s=`height: ${X(t.min.height)}; width: ${X(t.min.width)}`;return z`
            <div class="constraint-wrapper max" style=${r}>
                <a target="_blank" rel="noopener noreferrer" href=${n}>
                    <${mt}
                        ${Ur(mt,{imageUrl:n,max:t.max,min:t.min})}
                    ></${mt}>
                </a>
                <div class="min-wrapper">
                    <div class="constraint-wrapper min" style=${s}></div>
                </div>
            </div>
        `})}
