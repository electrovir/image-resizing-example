(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const na=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"],fs=new RegExp(na.join("|"),"g");function ra(t,e){return t.filter((n,r)=>!e.includes(r))}function ia(t){return t.reduce((n,r)=>n.concat(r),[])}function sa(t){return t.map(e=>e.trim()).filter(e=>e!=="")}function oa(t,e){return t.includes(e)}function aa(t,e){return t.map(e)}async function la(t,e){await Br(t,e)}async function Br(t,e){return await t.reduce(async(r,i,s,o)=>{const a=await r,l=await e(i,s,o);return a.push(l),a},Promise.resolve([]))}async function ca(t,e,n){const r=n!=null&&n.blocking?await Br(t,e):await Promise.all(t.map(e));return t.filter((i,s)=>!!r[s])}function Fr(t){const e=new Set(Array.from(t.toLowerCase()));return Array.from(e).join("")}function ua(t,e){return new RegExp(t.source,Fr([t.flags,e].join("")))}function Hr(t,e){return t.match(e)??[]}function da(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}function ms(t){return t.replace(fs,"")}const ha=ms;function ps(t){return t.replace(/,/g,"")}function Pn(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function fa(t,e,n){const r=bs({searchIn:t,searchFor:e,caseSensitive:n,includeLength:!0}),i=ws(e,n);return t.split(i).reduce((a,l,u)=>{const c=r[u],d=a.concat(l);if(c){const h=t.slice(c.index,c.index+c.length);return d.concat(h)}else return d},[])}const ma={capitalizeFirstLetter:!1};function rt(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function pa(t,e){return e.capitalizeFirstLetter?rt(t):t}function gs(t,e=ma){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return pa(r,e)}function yi(t){return t!==t.toUpperCase()}function ys(t){return t.split("").reduce((n,r,i,s)=>{const o=i>0?s[i-1]:"",a=i<s.length-1?s[i+1]:"",l=yi(o)||yi(a);return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function ga(t,e,n,r=n.length){const i=t.substring(0,e),s=t.substring(e+r);return`${i}${n}${s}`}function vs(t){return t.replace(/[\^$\\.*+?()[\]{}|]/g,"\\$&")}function ws(t,e){const n=`g${!e&&typeof t=="string"?"i":""}`;return t instanceof RegExp?new RegExp(t.source,Fr(`${t.flags}${n}`)):new RegExp(vs(t),n)}function bs({searchIn:t,searchFor:e,caseSensitive:n,includeLength:r}){const i=ws(e,n),s=[],o=[];return t.replace(i,(...a)=>{const l=a[a.length-2];if(typeof l!="number")throw new Error(`Match index "${l}" is not a number. Searching for "${e}" in "${t}".`);const u=a[0];if(typeof u!="string")throw new Error(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:l,length:u.length}),s.push(l);const c=a[0];if(typeof c!="string")throw new Error(`Original match when searching for "${e}" in "${t}" at index ${l} is not a string.`);return c}),r?o:s}function it(t,e){return t.split(e)}const _s=String(NaN);function Kr(t){if(typeof t=="string"&&isNaN(Number(t)))return _s;const e=String(t),[n,r]=e.split("."),i=r?`.${r}`:"";return`${Hr(n.split("").reverse().join(""),/.{1,3}/g).reverse().map(a=>a.split("").reverse().join("")).join(",")}${i}`}function Ur({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}function Ss(t){return typeof t=="number"?t:Number(typeof t=="string"?ps(t):t)}function xs(t){return String(t).includes("e")}function Es({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}const qr=["january","february","march","april","may","june","july","august","september","october","november","december"],$s=qr.map(t=>t.slice(0,3));class mn extends Error{constructor(){super(...arguments),this.name="InvalidDateError"}}function ya(t,e=""){const[n,r,i=""]=t.split("/");if(!n||!r)throw new Error(`Unable to extract month or day from "${t}"`);const s=i.length<4?`${e}${i.padStart(2,"0")}`:i;return Wr(`${s.padStart(4,"0")}-${n.padStart(2,"0")}-${r.padStart(2,"0")}`)}function As(t,e=!1){const[n,r,i]=t.replace(",","").split(" ");if(!n||!r||!i)throw new mn(`Invalid ${As.name} input: ${t}`);const s=qr.indexOf(n.toLowerCase()),o=$s.indexOf(n.toLowerCase());let a=s===-1?o:s;if(a===-1)if(e)a=new Date().getUTCMonth();else throw new mn(`Month name ${n} was not found.`);return Wr(`${i.padStart(4,"0")}-${String(a+1).padStart(2,"0")}-${r.padStart(2,"0")}`)}function Wr(t){const e=new Date(t+"T00:00:00.000Z");if(isNaN(Number(e)))throw new mn(`Invalid utc date formed from input "${t}"`);return e}const vi={days:{getKey:"getUTCDate",setKey:"setUTCDate"},months:{getKey:"getUTCMonth",setKey:"setUTCMonth"},years:{getKey:"getUTCFullYear",setKey:"setUTCFullYear"}};function va(t,e){t instanceof Date||(t=new Date(t));let n=new Date(t);return Y(e).forEach(r=>{const i=e[r];if(!i)return;const{getKey:s,setKey:o}=Rs(vi,r)?vi[r]:{getKey:`getUTC${rt(r)}`,setKey:`setUTC${rt(r)}`},a=n[s]();n[o](a+i)}),n}function wa(){return typeof window<"u"}function ba(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(n=>Ce(n).trim()).join(`
`))}function _a(t){return t?t.map(Ce).filter(ut).join(`
`):""}function Ce(t){return t?t instanceof Error?t.message:String(t):""}function _e(t){return t instanceof Error?t:new Error(Ce(t))}function Sa(t){let e;try{const n=t();return Gr(n)?new Promise(async r=>{try{const i=await n;return r(i)}catch(i){e=_e(i)}return r(e)}):n}catch(n){e=_e(n)}return e}function ut(t){return!!t}const xa=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Se(t,e){return t?xa.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Cs(t,e){return t&&e.every(n=>Se(t,n))}function Ea(t,e){return Se(e,t)}function Y(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ps(t){return Y(t).map(e=>t[e])}function rr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function $a(t){return Object.fromEntries(t)}function pn(t){return!!t&&typeof t=="object"}function Vr(t,e){try{if(t===e)return!0;if(pn(t)&&pn(e)){const n=rr(t),r=rr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${Ce(n)}`),n}}function Aa(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function Ca(t,e,n=!1,r=!1){try{return zt(t,e,n),!0}catch(i){return r&&console.error(i),!1}}function zt(t,e,n=!1,r={}){const i=Y(t),s=new Set(Y(e));if(!n){const o=i.filter(a=>!s.has(a));if(o.length)throw new Error(`Test object has extra keys: ${o.join(", ")}`)}s.forEach(o=>{if(!Se(t,o))throw new Error(`test object does not have key "${String(o)}" from expected shape.`);function a(c){throw new Error(`test object value at key "${String(o)}" did not match expected shape: ${c}`)}const l=t[o],u=e[o];r[o]||Ts(l,u,a,n,r[o]??{})})}function Ts(t,e,n,r,i){var a;const s=typeof t,o=typeof e;s!==o&&n(`type "${s}" did not match expected type "${o}"`);try{Se(e,"constructor")&&(!Se(t,"constructor")||t.constructor!==e.constructor)&&n(`constructor "${(a=t==null?void 0:t.constructor)==null?void 0:a.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof n)throw l}Array.isArray(e)?(Array.isArray(t)||n("expected an array"),t.forEach((l,u)=>{if(e.map(d=>{try{Ts(l,d,n,r,i);return}catch(h){return new Error(`entry at index "${u}" did not match expected shape: ${Ce(h)}`)}}).filter(ut).length===e.length)throw new Error(`entry at index "${u}" did not match any of the possible types from "${e.join(", ")}"`)})):pn(e)&&zt(t,e,r,i)}function Tn(t){return Array.isArray(t)?"array":typeof t}function Le(t,e){return Tn(t)===e}function ks(t,e,n){if(!Le(t,e))throw new TypeError(`'${n}' is of type '${Tn(t)}' but type '${e}' was expected.`)}function ir({jsonString:t,errorHandler:e,shapeMatcher:n}){try{const r=JSON.parse(t);return n!=null&&(Le(n,"object")?zt(r,n):ks(r,Tn(n),"parsedJson")),r}catch(r){if(e)return e(r);throw r}}function Os(t){return Y(t).filter(e=>isNaN(Number(e)))}function Jr(t){return Os(t).map(n=>t[n])}function Ms(t,e){return Jr(e).includes(t)}function Pa(t,e,n=!1){return n?t.reduce((r,i)=>{const s=Jr(e).find(o=>String(o).toUpperCase()===String(i).toUpperCase());return s?r.concat(s):r},[]):t.filter(r=>Ms(r,e))}function It(t,e){return Y(t).filter(r=>{const i=t[r];return e(r,i,t)}).reduce((r,i)=>(r[i]=t[i],r),{})}function Ds(t,e){return It(t,n=>!e.includes(n))}function Ta(t,e){return It(t,n=>e.includes(n))}function Rs(t,e){return e in t}function ka(t){return JSON.parse(JSON.stringify(t))}function Oa(t){function e(n){return Y(t).reduce((i,s)=>{const o=n(s,t[s],t);return{...i,[s]:o}},{})}return e}function oe(t,e){let n=!1;const r=Y(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Y(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function js(t,e){const n=e[0];if(!Se(t,n))return;const r=t[n];return e.length>1?js(r,e.slice(1)):r}function Lt(t){const e=ae();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}async function Ma(t,e){return Lt(t).then(()=>e)}function Gr(t){return!!(Se(t,"then")&&typeof t.then=="function")}class Ns extends Error{constructor(e,n=`Promised timed out after ${e} ms.`){super(n),this.durationMs=e,this.message=n,this.name="PromiseTimeoutError"}}function zs(t,e){return new Promise(async(n,r)=>{const i=t===1/0?void 0:setTimeout(()=>{r(new Ns(t))},t);try{const s=await e;n(s)}catch(s){r(s)}finally{clearTimeout(i)}})}function ae(){let t,e,n=!1;const r=new Promise((i,s)=>{t=o=>(n=!0,i(o)),e=o=>{n=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ae.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}async function Da({conditionCallback:t,timeoutMs:e=1e4,intervalMs:n=100,timeoutMessage:r=""}){let i=!1,s;async function o(){try{i=!!await t()}catch(l){i=!1,s=l}}const a=Date.now();for(await o();!i;){if(await Lt(n),Date.now()-a>=e){const l=r?`${r}: `:"";throw new Error(`${l}Timeout of "${e}" exceeded waiting for condition to be true${Ce(s)}`)}await o()}}const Ln="://";function Ra(...t){const e=t.join("/"),[n,r=""]=e.includes(Ln)?e.split(Ln):["",e];let i=!1,s=!1;const o=r.replace(/\/{2,}/g,"/").split("/").map(a=>a.includes("?")||i?(i=!0,a):encodeURIComponent(a)).reduce((a,l,u,c)=>{if(s)return a;const d=c[u+1];let h=l;const m=!l.includes("?")&&(d==null?void 0:d.startsWith("?"));if(d!=null&&d.startsWith("?")||m){s=!0;let v=!1;const p=c.slice(m?u+2:u+1).reduce((y,f)=>(f.includes("#")&&(v=!0),v?y.concat(f):[y,f].join("&")),"");h=[l,d,p].join("")}return a.concat(h)},[]);return[n,n?Ln:"",o.join("/")].join("")}const ja=/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/;function Na(t){return!!t.match(ja)}const za=["k","M","B","T","P","E","Z","Y"];function Yr({beforeDot:t,afterDot:e="",maxLength:n}){if(e.length){const r=n-t.length-1;if(r>0){const i=e.slice(0,r);return Number(i)?[t,i].join("."):t}}return t}function Ia(t,e,n){const[r,i]=it(t,"."),s=Kr(r),o=Hr(s,/,/g).length,a=e[o-1],[l,u]=it(s,","),c=[u,i].join("");return l.length+1>n?["0.",l[0],e[o]].join(""):[Yr({beforeDot:l,afterDot:c,maxLength:n-1}),a].join("")}const wi=3;function La({input:t,maxLength:e}){const n=String(t),[r,i]=it(n,"e"),s=i.replace(/^[\-\+]/,""),o=i[0],a=["e",o,s].join(""),[l,u]=it(r,"."),c=s.length+wi;return c===e?[l,a].join(""):c>e?o==="-"?"0":String(1/0):[Yr({afterDot:u,beforeDot:l,maxLength:e-s.length+wi}),a].join("")}function Ba(t,e){const[n,r]=it(Kr(t),".");if(n.length<=e)return Yr({beforeDot:n,afterDot:r,maxLength:e})}function Fa(t,{customSuffixes:e=za,maxLength:n=6}={}){const r=Ss(t);if(isNaN(r)||r===1/0)return String(r);if(xs(r))return La({input:r,maxLength:n});const i=String(r),s=Ba(i,n);return s??Ia(i,e,n)}function Ha(t,e){return t.length>=e}function Ka(t){return t}function Ua(t){return t}function qa(){return t=>t}function Wa(t){return t}const Va=Object.freeze(Object.defineProperty({__proto__:null,InvalidDateError:mn,NaNString:_s,PromiseTimeoutError:Ns,addCommasToNumber:Kr,addRegExpFlags:ua,ansiRegex:fs,areJsonEqual:Vr,assertMatchesObjectShape:zt,assertRuntimeTypeOf:ks,awaitedBlockingMap:Br,awaitedFilter:ca,awaitedForEach:la,calculateRelativeDate:va,camelCaseToKebabCase:ys,capitalizeFirstLetter:rt,clamp:Ur,collapseWhiteSpace:Pn,combineErrorMessages:_a,combineErrors:ba,convertIntoNumber:Ss,copyThroughJson:Aa,createDateFromNamedCommaFormat:As,createDateFromSlashFormat:ya,createDateFromUtcIsoFormat:Wr,createDeferredPromiseWrapper:ae,deDupeRegExFlags:Fr,doesRequireScientificNotation:xs,englishFullMonthNames:qr,englishShortMonthNames:$s,ensureError:_e,ensureMinAndMax:Es,ensureType:Wa,escapeStringForRegExp:vs,executeAndReturnError:Sa,extractErrorMessage:Ce,filterObject:It,filterOutIndexes:ra,filterToEnumValues:Pa,flatten2dArray:ia,getAllIndexesOf:bs,getEntriesSortedByKey:rr,getEnumTypedKeys:Os,getEnumTypedValues:Jr,getObjectTypedKeys:Y,getObjectTypedValues:Ps,getRuntimeTypeOf:Tn,getValueFromNestedKeys:js,hasKey:Rs,isBrowser:wa,isEnumValue:Ms,isKeyof:Ea,isLengthAtLeast:Ha,isObject:pn,isPromiseLike:Gr,isRuntimeTypeOf:Le,isTruthy:ut,isUuid:Na,joinUrlParts:Ra,joinWithFinalConjunction:da,jsonify:ka,kebabCaseToCamelCase:gs,makeReadonly:Ua,makeWritable:Ka,mapObjectValues:oe,mapObjectValuesSync:Oa,matchesObjectShape:Ca,omitObjectKeys:Ds,parseJson:ir,pickObjectKeys:Ta,removeAnsiEscapeCodes:ms,removeColor:ha,removeCommasFromNumberString:ps,replaceStringAtIndex:ga,safeMatch:Hr,splitIncludeSplit:fa,trimArrayStrings:sa,truncateNumber:Fa,typedArrayIncludes:oa,typedHasProperties:Cs,typedHasProperty:Se,typedMap:aa,typedObjectFromEntries:$a,typedSplit:it,wait:Lt,waitForCondition:Da,waitValue:Ma,wrapNarrowTypeWithTypeCheck:qa,wrapPromiseInTimeout:zs},Symbol.toStringTag,{value:"Module"})),Qr=globalThis.crypto;function Is({min:t,max:e}){const{min:n,max:r}=Es({min:Math.floor(t),max:Math.floor(e)}),i=r-n+1,s=Math.ceil(Math.log2(i)/8),o=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do Qr.getRandomValues(a),l=a.reduce((u,c,d)=>u+c*256**d,0);while(l>=o);return n+l%i}function Ja(t=50){return Is({min:0,max:99})<Ur({value:Math.floor(t),min:0,max:100})}function Ga(){return Qr.randomUUID()}function Ls(t=16){const e=Math.ceil(t/2),n=new Uint8Array(e);return Qr.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,t)}function Ya(t){return t.map(e=>({value:e,sort:Ls()})).sort((e,n)=>e.sort.localeCompare(n.sort)).map(({value:e})=>e)}async function Qa(t){const e=ae(),n=new Image;return n.onload=()=>{e.resolve(n)},n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,e.promise}function te(t){return String(t).endsWith("px")?String(t):`${t}px`}function Xa(t){return Number(t.replace(/px$/,""))}function wt(t){const e=t.query.split(" ").filter(ut);if(!t.query)return t.element instanceof Element?t.element:t.element.host;if(e.length>1)return sr({...t,queries:e});if("shadowRoot"in t.element&&t.element.shadowRoot)return wt({...t,element:t.element.shadowRoot});const n=Array.from(t.element.children).filter(r=>!!r.shadowRoot).map(r=>r.shadowRoot);if(t.all){const r=Array.from(t.element.querySelectorAll(t.query)),i=n.map(s=>wt({...t,all:!0,element:s})).flat();return[...r,...i]}else{const r=t.element.querySelector(t.query);if(r)return r;for(let i=0;i<n.length;i++){const s=n[i],o=wt({...t,element:s});if(o)return o}return}}function sr(t){const e=t.queries[0];if(!e)throw new Error(`Somehow the first query was empty in '[${t.queries.join(",")}]' for query '${t.query}'`);const n=wt({...t,query:e});return t.queries.length<=1?n:Le(n,"array")?n.map(r=>sr({...t,element:r,queries:t.queries.slice(1)})).flat().filter(ut):n?sr({...t,element:n,queries:t.queries.slice(1)}):void 0}function Za(t){const e=It(t,(s,o)=>o!=null),n=oe(e,(s,o)=>String(o)),i=new URLSearchParams(Object.entries(n)).toString();return i?`?${i}`:""}function el(t,e){const n=Le(t,"string")?new URL(t):t,r=Array.from(n.searchParams.entries()),i=Object.fromEntries(r);return e&&zt(i,e),i}async function tl(t){const e=ae(),n=document.createElement("video");return n.addEventListener("loadeddata",()=>{e.resolve(n)}),n.onerror=()=>{e.reject(new Error(`Failed to load '${t}'`))},n.src=t,n.load(),e.promise}const nl=Object.freeze(Object.defineProperty({__proto__:null,addPx:te,createUuid:Ga,loadImage:Qa,loadVideo:tl,objectToSearchParamsString:Za,queryThroughShadow:wt,randomBoolean:Ja,randomInteger:Is,randomString:Ls,removePx:Xa,searchParamStringToObject:el,shuffleArray:Ya},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xr=t=>(...e)=>({_$litDirective$:t,values:e});let kn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bn;const gn=window,st=gn.trustedTypes,bi=st?st.createPolicy("lit-html",{createHTML:t=>t}):void 0,or="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,Fs="?"+be,rl=`<${Fs}>`,ot=document,Tt=()=>ot.createComment(""),kt=t=>t===null||typeof t!="object"&&typeof t!="function",Hs=Array.isArray,il=t=>Hs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Fn=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_i=/-->/g,Si=/>/g,Te=RegExp(`>|${Fn}(?:([^\\s"'>=/]+)(${Fn}*=${Fn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xi=/'/g,Ei=/"/g,Ks=/^(?:script|style|textarea|title)$/i,sl=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),ol=sl(1),ge=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),$i=new WeakMap,Ze=ot.createTreeWalker(ot,129,null,!1),al=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=mt;for(let l=0;l<n;l++){const u=t[l];let c,d,h=-1,m=0;for(;m<u.length&&(o.lastIndex=m,d=o.exec(u),d!==null);)m=o.lastIndex,o===mt?d[1]==="!--"?o=_i:d[1]!==void 0?o=Si:d[2]!==void 0?(Ks.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=Te):d[3]!==void 0&&(o=Te):o===Te?d[0]===">"?(o=i??mt,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Te:d[3]==='"'?Ei:xi):o===Ei||o===xi?o=Te:o===_i||o===Si?o=mt:(o=Te,i=void 0);const v=o===Te&&t[l+1].startsWith("/>")?" ":"";s+=o===mt?u+rl:h>=0?(r.push(c),u.slice(0,h)+or+u.slice(h)+be+v):u+be+(h===-2?(r.push(void 0),l):v)}const a=s+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[bi!==void 0?bi.createHTML(a):a,r]};let ar=class Us{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[u,c]=al(e,n);if(this.el=Us.createElement(u,r),Ze.currentNode=this.el.content,n===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=Ze.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith(or)||h.startsWith(be)){const m=c[o++];if(d.push(h),m!==void 0){const v=i.getAttribute(m.toLowerCase()+or).split(be),p=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:p[2],strings:v,ctor:p[1]==="."?cl:p[1]==="?"?dl:p[1]==="@"?hl:On})}else l.push({type:6,index:s})}for(const h of d)i.removeAttribute(h)}if(Ks.test(i.tagName)){const d=i.textContent.split(be),h=d.length-1;if(h>0){i.textContent=st?st.emptyScript:"";for(let m=0;m<h;m++)i.append(d[m],Tt()),Ze.nextNode(),l.push({type:2,index:++s});i.append(d[h],Tt())}}}else if(i.nodeType===8)if(i.data===Fs)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(be,d+1))!==-1;)l.push({type:7,index:s}),d+=be.length-1}s++}}static createElement(e,n){const r=ot.createElement("template");return r.innerHTML=e,r}};function at(t,e,n=t,r){var i,s,o,a;if(e===ge)return e;let l=r!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[r]:n._$Cl;const u=kt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==u&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),u===void 0?l=void 0:(l=new u(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=at(t,l._$AS(t,e.values),l,r)),e}let ll=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:i}=this._$AD,s=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:ot).importNode(r,!0);Ze.currentNode=s;let o=Ze.nextNode(),a=0,l=0,u=i[0];for(;u!==void 0;){if(a===u.index){let c;u.type===2?c=new Zr(o,o.nextSibling,this,e):u.type===1?c=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(c=new fl(o,this,e)),this.u.push(c),u=i[++l]}a!==(u==null?void 0:u.index)&&(o=Ze.nextNode(),a++)}return s}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Zr=class qs{constructor(e,n,r,i){var s;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cm=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=at(this,e,n),kt(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==ge&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):il(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==z&&kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ot.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ar.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new ll(s,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=$i.get(e.strings);return n===void 0&&$i.set(e.strings,n=new ar(e)),n}k(e){Hs(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new qs(this.S(Tt()),this.S(Tt()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},On=class{constructor(e,n,r,i,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=at(this,e,n,0),o=!kt(e)||e!==this._$AH&&e!==ge,o&&(this._$AH=e);else{const a=e;let l,u;for(e=s[0],l=0;l<s.length-1;l++)u=at(this,a[r+l],n,l),u===ge&&(u=this._$AH[l]),o||(o=!kt(u)||u!==this._$AH[l]),u===z?e=z:e!==z&&(e+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!i&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},cl=class extends On{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}};const ul=st?st.emptyScript:"";let dl=class extends On{constructor(){super(...arguments),this.type=4}j(e){e&&e!==z?this.element.setAttribute(this.name,ul):this.element.removeAttribute(this.name)}},hl=class extends On{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){var r;if((e=(r=at(this,e,n,0))!==null&&r!==void 0?r:z)===ge)return;const i=this._$AH,s=e===z&&i!==z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==z&&(i===z||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},fl=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){at(this,e)}};const Ai=gn.litHtmlPolyfillSupport;Ai==null||Ai(ar,Zr),((Bn=gn.litHtmlVersions)!==null&&Bn!==void 0?Bn:gn.litHtmlVersions=[]).push("2.7.0");const ml=(t,e,n)=>{var r,i;const s=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=s._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new Zr(e.insertBefore(Tt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lr=class extends kn{constructor(e){if(super(e),this.it=z,e.type!==Bs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===z||e==null)return this._t=void 0,this.it=e;if(e===ge)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};lr.directiveName="unsafeHTML",lr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ci=class extends lr{};Ci.directiveName="unsafeSVG",Ci.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pl(t,e,n){return t?e():n==null?void 0:n()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sn=window,ei=sn.ShadowRoot&&(sn.ShadyCSS===void 0||sn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ti=Symbol(),Pi=new WeakMap;let Ws=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ti)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ei&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Pi.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Pi.set(n,e))}return e}toString(){return this.cssText}};const se=t=>new Ws(typeof t=="string"?t:t+"",void 0,ti),Vs=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Ws(n,t,ti)},gl=(t,e)=>{ei?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),i=sn.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)})},Ti=ei?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return se(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hn;const yn=window,ki=yn.trustedTypes,yl=ki?ki.emptyScript:"",Oi=yn.reactiveElementPolyfillSupport,cr={toAttribute(t,e){switch(e){case Boolean:t=t?yl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Js=(t,e)=>e!==t&&(e==e||t==t),Kn={attribute:!0,type:String,converter:cr,reflect:!1,hasChanged:Js};let Je=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const i=this._$Ep(r,n);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,n=Kn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(i){const s=this[e];this[n]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Kn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of r)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Ti(i))}else e!==void 0&&n.push(Ti(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gl(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Kn){var i;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:cr).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:cr;this._$El=s,this[s]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Js)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Je.finalized=!0,Je.elementProperties=new Map,Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Oi==null||Oi({ReactiveElement:Je}),((Hn=yn.reactiveElementVersions)!==null&&Hn!==void 0?Hn:yn.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Un,qn;let bt=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ml(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ge}};bt.finalized=!0,bt._$litElement$=!0,(Un=globalThis.litElementHydrateSupport)===null||Un===void 0||Un.call(globalThis,{LitElement:bt});const Mi=globalThis.litElementPolyfillSupport;Mi==null||Mi({LitElement:bt});((qn=globalThis.litElementVersions)!==null&&qn!==void 0?qn:globalThis.litElementVersions=[]).push("3.3.0");var vl=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};function wl(){return t=>{}}let vn=class extends bt{};vn=vl([wl()],vn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bl=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Gs(t){return(e,n)=>n!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(t,e,n):bl(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn;((Wn=window.HTMLSlotElement)===null||Wn===void 0?void 0:Wn.prototype.assignedElements)!=null;const ur=Symbol("this-is-an-element-vir-declarative-element"),ni=Symbol("key for ignoring inputs not having been set yet"),_l={[ni]:!0};function Ys(t,e){Y(e).forEach(n=>{Gs()(t,n),"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),Qs(t)}function Qs(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function Xs(t,e){return dr(t,e),t.element}function dr(t,e){if(t.type!==Bs.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function ri(t,e){return e?Di(t,e):Di(void 0,t)}const Di=Xr(class extends kn{constructor(t){super(t),this.element=Xs(t,"assign")}render(t,e){return Sl(t,this.element,e),ge}});function Sl(t,e,n){Ys(e,n)}function Zs(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof vn?!0:Zs(n)}var k=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},X=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(t,n):i?i.value=n:e.set(t,n),n},ie,Oe,Me,De,Qe,Ge,G,_t,hr,fr;const eo=Symbol("element-vir-async-state-marker");function xl(t){if(!t)return{};const e=It(t,(r,i)=>i instanceof to);return oe(e,(r,i)=>new El(i.initialValue))}const Vt=Symbol("not set");class El{constructor(e){ie.add(this),Oe.set(this,Vt),Me.set(this,void 0),De.set(this,void 0),Qe.set(this,[]),Ge.set(this,void 0),G.set(this,ae()),this.asyncMarkerSymbol=eo,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(k(this,Oe,"f")===Vt||!Vr(e.trigger,k(this,Oe,"f"))){X(this,Oe,e.trigger,"f");const n=e.createPromise();k(this,ie,"m",hr).call(this,n)}}else"newPromise"in e?(k(this,Oe,"f"),k(this,ie,"m",hr).call(this,e.newPromise),k(this,ie,"m",_t).call(this)):"resolvedValue"in e?k(this,ie,"m",fr).call(this,e.resolvedValue):e.forceUpdate&&(X(this,Oe,Vt,"f"),X(this,Me,void 0,"f"),k(this,G,"f").isSettled()||k(this,G,"f").reject("Canceled by force update"),X(this,G,ae(),"f"),k(this,ie,"m",_t).call(this))}getValue(){return k(this,G,"f").isSettled()?k(this,De,"f")?k(this,De,"f"):k(this,Me,"f"):k(this,G,"f").promise}addSettleListener(e){k(this,Qe,"f").push(e)}removeSettleListener(e){X(this,Qe,k(this,Qe,"f").filter(n=>n!==e),"f")}}Oe=new WeakMap,Me=new WeakMap,De=new WeakMap,Qe=new WeakMap,Ge=new WeakMap,G=new WeakMap,ie=new WeakSet,_t=function(){k(this,Qe,"f").forEach(e=>{e()})},hr=function(e){e!==k(this,Ge,"f")&&(X(this,Me,void 0,"f"),X(this,De,void 0,"f"),X(this,Ge,e,"f"),k(this,G,"f").isSettled()&&X(this,G,ae(),"f"),e.then(n=>{k(this,Ge,"f")===e&&k(this,ie,"m",fr).call(this,n)}).catch(n=>{k(this,Ge,"f")===e&&(X(this,De,_e(n),"f"),k(this,G,"f").promise.catch(()=>{}),k(this,G,"f").reject(n),k(this,ie,"m",_t).call(this))}))},fr=function(e){e!==k(this,Me,"f")&&(X(this,De,void 0,"f"),X(this,Me,e,"f"),k(this,G,"f").isSettled()&&X(this,G,ae(),"f"),k(this,G,"f").resolve(e),k(this,ie,"m",_t).call(this))};class to{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=eo}}function no(t){return new to(t)}function ro(t,e){return`${t}-${ys(e)}`}function $l(t,e){return e?oe(e,n=>se(`--${ro(t,String(n))}`)):{}}function Al(t,e){return t?oe(t,(n,r)=>{const i=e[n];return se(`var(${i}, ${r})`)}):{}}class Cl extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function io(){return t=>{var e;return e=class extends Cl{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function on(){return io()}function Pl(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=io()(n);return e[n]=r,e},{}):{}}function Ri(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function ji(t,e){const n=t;function r(s,o){e&&Ri(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(s,o,a)=>{e&&Ri(o,t,t.tagName),s[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,o){if(o in s)return{get value(){return r(s,o)},configurable:!0,enumerable:!0}},has:(s,o)=>Reflect.has(s,o)})}function Tl(t,e){return e?oe(e,n=>ro(t,String(n))):{}}function kl({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:oe(t,(r,i)=>se(`:host(.${i})`)),hostClassNames:oe(t,(r,i)=>se(i)),cssVarNames:e,cssVarValues:n}}function Ol({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:i}){e&&Y(e).forEach(s=>{const o=e[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?t.classList.add(a):t.classList.remove(a))})}function Ml(t,e){function n(i){Y(i).forEach(s=>{const o=i[s],a=t.asyncStateHandlerMap[s];a?a.setValue(o):t.instanceState[s]=o})}return{dispatch:i=>t.dispatchEvent(i),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var Dl=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function ii(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const n=Pl(t.events),r=Tl(t.tagName,t.hostClasses),i=$l(t.tagName,t.cssVars),s=Al(t.cssVars,i),o={..._l,...t.options},a=typeof t.styles=="function"?t.styles(kl({hostClassNames:r,cssVarNames:i,cssVarValues:s})):t.styles||Vs``,l=t.renderCallback,u=(e=class extends vn{createRenderParams(){return Ml(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Qs(this)}render(){try{Zs(this)&&!this.haveInputsBeenSet&&!o[ni]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${ri.name}" directive on it. If no inputs are intended, use "${ii.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c));const d=l(c);return Ol({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:c.state,inputs:c.inputs}),d}catch(c){const d=_e(c);throw d.message=`Failed to render '${t.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();t.initCallback(c)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();t.cleanupCallback(c)}this.initCalled=!1}assignInputs(c){Ys(this,c)}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=xl(t.stateInit),this.instanceInputs=ji(this,!1),this.instanceState=ji(this,!0);const c=t.stateInit||{};Y(c).forEach(d=>{Gs()(this,d);const h=this.asyncStateHandlerMap[d];h?(this.instanceState[d]=h.getValue(),h.addSettleListener(()=>{this[d]=h.getValue()})):this.instanceState[d]=c[d]}),this.definition=u}},Dl(e,"anonymousClass"),e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=i,e.stateInit=t.stateInit,e.cssVarValues=i,e);return Object.defineProperties(u,{[ur]:{value:!0,writable:!1},name:{value:gs(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof u,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,u),u}function so(){return t=>ii({...t,options:{[ni]:!1},...t.options})}function St(t,e){return Rl(t,e)}const Rl=Xr(class extends kn{constructor(t){super(t),this.element=Xs(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ge}}),Ni="onDomCreated",zi=Xr(class extends kn{constructor(t){super(t),dr(t,Ni)}update(t,[e]){dr(t,Ni);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function mr(t,e,n,r){return t instanceof Error?r?r(t):Ce(t):Gr(t)?e:n?n(t):t}function Ii(t,e,n){return pl(t,()=>e,()=>n)}function jl(t){const{assertInputs:e,transformInputs:n}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(r=>r)};return{defineElement:()=>r=>(e(r),so()(n(r))),defineElementNoInputs:r=>(e(r),ii(n(r)))}}function Nl(t,e){return t.filter((n,r)=>!e.includes(r))}function oo(t){return t.filter(e=>Cs(e,["tagName",ur])&&!!e.tagName&&!!e[ur])}const ao=new WeakMap;function zl(t,e){var i;const n=oo(e);return(i=lo(ao,[t,...n]).value)==null?void 0:i.template}function Il(t,e,n){const r=oo(e);return uo(ao,[t,...r],n)}function lo(t,e,n=0){const{currentTemplateAndNested:r,reason:i}=co(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?lo(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function co(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=t.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function uo(t,e,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=co(t,e,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||t.set(s,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),uo(l,e,n,r+1)}function ho(t,e,n){return{name:t,check:e,transform:n}}const Ll=new WeakMap;function fo(t,e,n){const r=zl(t,e),i=r??n();if(!r){const o=Il(t,e,i);if(o.result)Ll.set(t,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const s=Nl(e,i.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function mo(t,e,n,r){const i=[],s=[],o=[];return t.forEach((l,u)=>{var y;const c=i.length-1,d=i[c],h=u-1,m=e[h];let v;r&&r(l),typeof d=="string"&&(v=(y=n.find(f=>f.check(d,l,m)))==null?void 0:y.transform,v&&(i[c]=d+v(m)+l,o.push(h))),v||i.push(l);const p=t.raw[u];v?s[c]=s[c]+v(m)+p:s.push(p)}),{templateStrings:Object.assign([],i,{raw:s}),valueIndexDeletions:o}}function po(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const Bl=[ho("tag name css selector interpolation",(t,e,n)=>po(n),t=>t.tagName)];function Fl(t,e){return mo(t,e,Bl)}function Xe(t,...e){const n=fo(t,e,()=>Fl(t,e));return Vs(n.strings,...n.values)}const Hl=[ho("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),i=po(n);if(r&&!i)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&i},t=>t.tagName)];function Kl(t){}function Ul(t){return mo(t.strings,t.values,Hl,Kl)}function B(t,...e){const n=ol(t,...e),r=fo(t,e,()=>Ul(n));return{...n,strings:r.strings,values:r.values}}function ql(t,e){return t<e}function Wl(t,e){return t>e}const Li={width:250,height:250};function Vl({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Wl:ql)(e.width/e.height,t.width/t.height)?"width":"height"}function Vn({box:t,constraint:e,constraintType:n}){const r=Vl({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function go({box:t,ratio:e}){return oe(t,(n,r)=>r*e)}function pr({box:t,min:e,max:n}){return oe(t,(r,i)=>Ur({value:i,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function yo({min:t,max:e,box:n}){const r=vo({min:t,max:e,box:n}),i=go({box:n,ratio:r});return{height:Math.floor(i.height||(t==null?void 0:t.height)||Li.height),width:Math.floor(i.width||(t==null?void 0:t.width)||Li.width)}}function vo({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?Vn({box:n,constraint:t,constraintType:"min"}):1,i=e?Vn({box:n,constraint:e,constraintType:"max"}):1,s=r>1?r:i<1?i:1,o=go({ratio:s,box:n});return(t?Vn({box:o,constraint:t,constraintType:"min"}):1)>1?r:s}function Re(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],s=(e??[""]).map((o,a)=>{const l=Jl(o,r[a]);return`${o}${l}`});return Pn(s.join(""))}function Jl(t,e){return e._$litType$!=null||e._$litDirective$!=null?Re(e):Array.isArray(e)?e.map(r=>Re(r)).join(""):t.endsWith("=")?`"${e}"`:e}function Gl(t){const e=Yl(t);return Le(e,"object")||Le(e,"array")}function Yl(t){const e=ir({jsonString:t,errorHandler:()=>{}});if(e)return e;const n=Ql(t);return ir({jsonString:n,errorHandler:()=>{}})}function Ql(t){return Pn(t).replace(/,\s*([}\]])/,"$1")}var T=(t=>(t.Html="html",t.Text="text",t.Json="json",t.Svg="svg",t.Image="image",t.Video="video",t.Audio="audio",t.Pdf="pdf",t))(T||{});const Xl=["text","json"];function Bi(t){return Xl.includes(t)}async function Zl(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":Gl(e)?"json":t.includes("json")||t.includes("yaml")||t.includes("yml")||t.includes("pgp-signature")||t.includes("text")||t.includes("txt")?"text":t.includes("audio")?"audio":t.includes("pdf")?"pdf":"image"}function ec({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Re(B`
            <img src=${n} />
        `):t==="video"?Re(B`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} />
            </video>
        `):t==="text"||t==="json"?Re(B`
                <div class="text-wrapper">
                    <p class="text">
                        ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                    </p>
                </div>
            `):t==="audio"?Re(B`
                <audio controls src=${n}></audio>
            `):e}function tc(t,e){if(e==="json")try{return JSON.stringify(JSON.parse(t),null,4)}catch{}else if(e==="html")return t.replaceAll(/console\.\w+/g,"doNothing");return t}async function Fi({imageUrl:t,blockAutoPlay:e,textTransformer:n=r=>r}){var u;const r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch '${t}'`);const i=((u=r==null?void 0:r.headers.get("Content-Type"))==null?void 0:u.toLowerCase())??"",s=await(r==null?void 0:r.text())??"",o=r?await Zl(i,s):"image",a=n(tc(s??"",o));return{templateString:ec({imageText:a,imageType:o,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:o}}var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wo(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var lt={},Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.IframeDisconnectedError=void 0;class nc extends Error{constructor(){super("Iframe is no longer attached to the DOM."),this.name="IframeDisconnectedError"}}Bt.IframeDisconnectedError=nc;var Mn={},xe={};Object.defineProperty(xe,"__esModule",{value:!0});xe.isDebugMode=xe.setDebugMode=void 0;let bo=!1;function rc(t){bo=t}xe.setDebugMode=rc;function ic(){return bo}xe.isDebugMode=ic;var Ft={},Ht={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.AnyOrigin=t.MessageDirectionEnum=void 0,function(e){e.FromParent="from-parent",e.FromChild="from-child"}(t.MessageDirectionEnum||(t.MessageDirectionEnum={})),t.AnyOrigin=Symbol("any-origin")})(Ht);Object.defineProperty(Ft,"__esModule",{value:!0});Ft.assertAllowedOrigin=void 0;const sc=Ht;function oc(t,e){if(t===sc.AnyOrigin)return;if(!t.filter(r=>e.origin===r).length)throw new Error(`Received message from invalid origin: ${e.origin}. Expected '[${t.join(", ")}]'`)}Ft.assertAllowedOrigin=oc;var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0});Dn.dangerDisableSecurityWarningsSymbol=void 0;Dn.dangerDisableSecurityWarningsSymbol=Symbol("dangerDisableSecurityWarningsSymbol");var Rn={};const ac=wo(nl),lc=wo(Va);Object.defineProperty(Rn,"__esModule",{value:!0});Rn.sendPingPongMessageToChild=void 0;const cc=ac,Hi=lc,Ki=xe,uc=Bt,dc=Ft,Jn=Ht;function hc(t,e,n){return n.type===t&&n.direction===e}function fc(t){return t<2?10:t<5?100:t<10?1e3:5e3}async function mc({message:t,verifyChildData:e,iframeElement:n},r,i){if(!n)throw new Error("No iframe element was provided.");let s=0,o=!1,a,l,u,c=!1;const d={...t,direction:Jn.MessageDirectionEnum.FromParent,messageId:(0,cc.randomString)(32)},h=t.type,m=r===Jn.AnyOrigin?["*"]:r;function v(y){try{(0,dc.assertAllowedOrigin)(r,y);const f=y.data;if(f.type==="error")throw new Error(`Child threw an error: ${f.data}`);if((0,Ki.isDebugMode)()&&console.info("Received message from child",f.messageId,f),f&&c&&hc(h,Jn.MessageDirectionEnum.FromChild,f)&&f.messageId===d.messageId){let g=!1;try{g=e?e(f.data):!0}catch{}if(!g)return;o=!0,l=y,a=f}}catch(f){u=(0,Hi.ensureError)(f)}}globalThis.addEventListener("message",v);const p=Date.now();for(;!o&&Date.now()-p<i&&!u;){if(!n.isConnected)throw new uc.IframeDisconnectedError;const y=n.contentWindow;y&&((0,Ki.isDebugMode)()&&(c?console.info("Re-sending message to child",d.messageId):console.info("Sending message to child",d.messageId,d)),c=!0,m.forEach(f=>{try{y.postMessage(d,{targetOrigin:f})}catch{}})),await(0,Hi.wait)(fc(s)),s++}if(globalThis.removeEventListener("message",v),u)throw u;if(!o)throw new Error(`Failed to receive response from the iframe for message '${t.type}' after '${Math.ceil(i/1e3)}' seconds).`);if(!l)throw new Error("Never got message event from child but received a valid response");return{data:a==null?void 0:a.data,event:l}}Rn.sendPingPongMessageToChild=mc;Object.defineProperty(Mn,"__esModule",{value:!0});Mn.createIframeMessenger=void 0;const Ui=xe,pc=Ft,gc=Dn,qe=Ht,yc=Rn;function _o({allowedOrigins:t,timeoutMs:e=1e4,...n}){if(t!==qe.AnyOrigin&&t.includes("*")&&(t=qe.AnyOrigin),t===qe.AnyOrigin&&!n[gc.dangerDisableSecurityWarningsSymbol]&&console.warn("Creating iframe messenger with any origin allowed ('*'). This is insecure, please provide an actual list of allowed origins."),t!==qe.AnyOrigin&&!t.length)throw new Error(`No allowed origins were provide to ${_o.name}. At least one must be provided.`);const r=t===qe.AnyOrigin?["*"]:t;return{async sendMessageToChild(i){if(i.message.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await(0,yc.sendPingPongMessageToChild)(i,t,i.timeoutMs||e)},listenForParentMessages(i){globalThis.addEventListener("message",async s=>{(0,pc.assertAllowedOrigin)(t,s);const o=s.data;(0,Ui.isDebugMode)()&&console.info("Received message from parent",o.messageId,o);const a=await i({...o,originalEvent:s}),l={type:o.type,direction:qe.MessageDirectionEnum.FromChild,data:a,messageId:o.messageId};(0,Ui.isDebugMode)()&&console.info("Sending message to parent",l.messageId,l),r.forEach(u=>{try{globalThis.parent.postMessage(l,{targetOrigin:u})}catch{}})})}}}Mn.createIframeMessenger=_o;var So={};Object.defineProperty(So,"__esModule",{value:!0});var jn={};Object.defineProperty(jn,"__esModule",{value:!0});jn.setInterlockingIframeMessengerDebugMode=void 0;const vc=xe;function wc(t){(0,vc.setDebugMode)(t)}jn.setInterlockingIframeMessengerDebugMode=wc;(function(t){var e=Jt&&Jt.__createBinding||(Object.create?function(r,i,s,o){o===void 0&&(o=s);var a=Object.getOwnPropertyDescriptor(i,s);(!a||("get"in a?!i.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return i[s]}}),Object.defineProperty(r,o,a)}:function(r,i,s,o){o===void 0&&(o=s),r[o]=i[s]}),n=Jt&&Jt.__exportStar||function(r,i){for(var s in r)s!=="default"&&!Object.prototype.hasOwnProperty.call(i,s)&&e(i,r,s)};Object.defineProperty(t,"__esModule",{value:!0}),n(Bt,t),n(Mn,t),n(So,t),n(Ht,t),n(jn,t)})(lt);var ee=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(ee||{}),H=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t.SizeDetermined="size-determined",t))(H||{});const de=lt.createIframeMessenger({allowedOrigins:[window.location.origin]});async function bc(t,e){const n=ae();t.onload=()=>{n.resolve()};try{await de.sendMessageToChild({message:{type:H.Ready},iframeElement:t,timeoutMs:e})}catch{await n.promise,await de.sendMessageToChild({message:{type:H.Ready},iframeElement:t,timeoutMs:e})}}async function _c({min:t,max:e,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,forcedOriginalImageSize:o,timeoutMs:a}){var u;await bc(r,a),s&&await de.sendMessageToChild({message:{type:H.ForceSize,data:s},iframeElement:r,timeoutMs:a});const l=o??(await de.sendMessageToChild({message:{type:H.SendSize},iframeElement:r,timeoutMs:a,verifyChildData(c){return!isNaN(c.width)&&!isNaN(c.height)&&!!c.width&&!!c.height}})).data;return await xo({min:t,max:e,imageDimensions:l,host:n,iframeElement:r,imageData:i,forcedFinalImageSize:s,sendSizeMessage:!0,timeoutMs:a}),((u=r.contentWindow)==null?void 0:u.document.documentElement.outerHTML)??""}async function xo({min:t,max:e,imageDimensions:n,host:r,iframeElement:i,imageData:s,forcedFinalImageSize:o,sendSizeMessage:a,timeoutMs:l}){const u=r.shadowRoot.querySelector(".frame-constraint");if(!(u instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const c={min:t,max:e,box:o??n},d=Bi(s.imageType)?pr(c):yo(c);u.style.width=te(Math.floor(d.width)),u.style.height=te(Math.floor(d.height));const h=pr({min:t,max:e,box:d});d.height<h.height?r.classList.add(ee.VerticallyCenter):r.classList.remove(ee.VerticallyCenter),r.style.width=te(h.width),r.style.height=te(h.height);const m=vo({min:t,max:e,box:o??n});if(a){if(m>3?await de.sendMessageToChild({message:{type:H.SendScalingMethod,data:"pixelated"},iframeElement:i,timeoutMs:l}):await de.sendMessageToChild({message:{type:H.SendScalingMethod,data:"default"},iframeElement:i,timeoutMs:l}),await de.sendMessageToChild({message:{type:H.SizeDetermined,data:d},iframeElement:i,timeoutMs:l}),s.imageType===T.Html){const v=o?{width:o.width/n.width,height:o.height/n.height}:{width:1,height:1},p={width:m*v.width,height:m*v.height};await de.sendMessageToChild({message:{type:H.SendScale,data:p},iframeElement:i,timeoutMs:l})}else if(Bi(s.imageType)){const v=o??n;if(v.height<d.height){const p=d.width/v.width,y=d.height/v.height,f=Math.min(p,y);await de.sendMessageToChild({message:{type:H.SendScale,data:{height:f,width:f}},iframeElement:i,timeoutMs:l})}}}}const Gt={x:16,y:8};var qi=Object.freeze,Sc=Object.defineProperty,Wi=(t,e)=>qi(Sc(t,"raw",{value:qi(e||t.slice())})),Vi,Ji;function xc(t,e,n){const r=Math.random(),i=B(Vi||(Vi=Wi([`
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
    `])),t.imageType,n??"",T.Svg,T.Html,T.Image,T.Video,T.Text,T.Json,T.Audio,lt.MessageDirectionEnum.FromChild,lt.MessageDirectionEnum.FromChild,H.Ready,H.SendScale,H.SendScalingMethod,H.SendSize,H.ForceSize,H.SizeDetermined,T.Json,T.Text,Gt.y,T.Audio),s=B(Ji||(Ji=Wi([`
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
    `])),t.imageType,T.Image,T.Svg,T.Video,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,T.Text,T.Json,Gt.y,Gt.x,T.Text,T.Json,Gt.y,r,e??"",i);return Pn(Re(s)).replace(String(r),`
${t.templateString}
`)}const Ec=1e4,$c={textTransformer:"textTransformer",extraHtml:"extraHtml"},Ac=Ps($c),Cc={imageData:no(),error:void 0},xt=so()({tagName:"vir-resizable-image",stateInit:Cc,events:{settled:on(),imageDataCalculated:on(),errored:on()},styles:Xe`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${se(ee.VerticallyCenter)}) {
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

        :host(.${se(ee.HideLoading)}) .loading-wrapper,
        :host(.${se(ee.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${se(ee.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${se(ee.HideLoading)}) iframe {
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
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[Gn];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:i,events:s}){const o=e.timeoutMs??Ec,a=t.imageData instanceof Error?t.imageData:t.error;n({imageData:{createPromise:async()=>{r.classList.remove(ee.HideLoading),i(new s.settled(!1)),r.classList.remove(ee.VerticallyCenter);const y={imageUrl:e.imageUrl,blockAutoPlay:!!e.blockAutoPlay,textTransformer:e.textTransformer};let f;try{f=await zs(o,Fi(y))}catch{await Lt(1e3);try{f=await Fi(y)}catch(w){throw w}}if(f)return f;throw new Error("no image data result")},trigger:{...Ds(e,Ac)}}});const l=e.min&&e.max?pr({box:e.min,max:e.max}):e.min,u=e.max,c=e.forcedOriginalImageSize?yo({min:l,max:u,box:e.forcedOriginalImageSize}):void 0,d=mr(t.imageData,"",y=>(i(new s.imageDataCalculated(y)),y.imageType===T.Pdf?B`
                        <iframe
                            src=${y.imageUrl}
                            ${zi(async f=>{try{await xo({forcedFinalImageSize:e.forcedFinalImageSize,host:r,iframeElement:f,imageData:y,imageDimensions:u??{width:500,height:500},max:u,min:l,sendSizeMessage:!1,timeoutMs:o}),r[Gn]="",i(new s.settled(!0)),r.classList.add(ee.HideLoading)}catch(g){const w=_e(g);if(w instanceof lt.IframeDisconnectedError)return;console.error(w),n({error:w}),i(new s.errored(w))}})}
                        ></iframe>
                    `:B`
                        <iframe
                            loading=${e.eagerLoading?"eager":"lazy"}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${xc(y,e.extraHtml,e.htmlSizeQuerySelector)}
                            ${zi(async f=>{try{const g=await _c({min:l,max:u,host:r,iframeElement:f,imageData:y,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:c,timeoutMs:o});r[Gn]=g,i(new s.settled(!0)),r.classList.add(ee.HideLoading)}catch(g){const w=_e(g);if(w instanceof lt.IframeDisconnectedError)return;console.error(w),n({error:w}),i(new s.errored(w))}})}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `),y=>{n({error:y}),i(new s.errored(_e(y)))}),h=mr(t.imageData,Gi,y=>!e.blockInteraction&&[T.Html,T.Video,T.Audio,T.Pdf].includes(y.imageType)?"":Gi,()=>""),m=a?Xe`
                  max-width: 100%;
                  max-height: 100%;
              `:c?Xe`
                  width: ${c.width}px;
                  height: ${c.height}px;
              `:"",v=Xe`
            width: ${(l==null?void 0:l.width)??250}px;
            height: ${(l==null?void 0:l.height)??250}px;
        `,p=B`
            <div class="frame-constraint" style=${m}>${d}</div>
        `;return B`
            ${Ii(!a,B`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${v}>
                ${Ii(!!a,B`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${a==null?void 0:a.message}</slot>
                        </div>
                    `,p)}
            </div>
            ${h}
        `}}),Gi=B`
    <div class="click-cover"></div>
`,Gn="latest-frame-srcdoc",D=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,I=Object.keys,U=Array.isArray;function V(t,e){return typeof e!="object"||I(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||D.Promise||(D.Promise=Promise);const Ot=Object.getPrototypeOf,Pc={}.hasOwnProperty;function Z(t,e){return Pc.call(t,e)}function ct(t,e){typeof e=="function"&&(e=e(Ot(t))),(typeof Reflect>"u"?I:Reflect.ownKeys)(e).forEach(n=>{me(t,n,e[n])})}const Eo=Object.defineProperty;function me(t,e,n,r){Eo(t,e,V(n&&Z(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function et(t){return{from:function(e){return t.prototype=Object.create(e.prototype),me(t.prototype,"constructor",t),{extend:ct.bind(null,t.prototype)}}}}const Tc=Object.getOwnPropertyDescriptor;function si(t,e){let n;return Tc(t,e)||(n=Ot(t))&&si(n,e)}const kc=[].slice;function wn(t,e,n){return kc.call(t,e,n)}function $o(t,e){return e(t)}function yt(t){if(!t)throw new Error("Assertion Failed")}function Ao(t){D.setImmediate?setImmediate(t):setTimeout(t,0)}function Co(t,e){return t.reduce((n,r,i)=>{var s=e(r,i);return s&&(n[s[0]]=s[1]),n},{})}function pe(t,e){if(Z(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,i=e.length;r<i;++r){var s=pe(t,e[r]);n.push(s)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:pe(a,e.substr(o+1))}}function ne(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){yt(typeof n!="string"&&"length"in n);for(var r=0,i=e.length;r<i;++r)ne(t,e[r],n[r])}else{var s=e.indexOf(".");if(s!==-1){var o=e.substr(0,s),a=e.substr(s+1);if(a==="")n===void 0?U(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&Z(t,o)||(l=t[o]={}),ne(l,a,n)}}else n===void 0?U(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function Po(t){var e={};for(var n in t)Z(t,n)&&(e[n]=t[n]);return e}const Oc=[].concat;function To(t){return Oc.apply([],t)}const ko="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(To([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>D[t]),Mc=ko.map(t=>D[t]);Co(ko,t=>[t,!0]);let we=null;function Kt(t){we=typeof WeakMap<"u"&&new WeakMap;const e=gr(t);return we=null,e}function gr(t){if(!t||typeof t!="object")return t;let e=we&&we.get(t);if(e)return e;if(U(t)){e=[],we&&we.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(gr(t[n]))}else if(Mc.indexOf(t.constructor)>=0)e=t;else{const s=Ot(t);for(var i in e=s===Object.prototype?{}:Object.create(s),we&&we.set(t,e),t)Z(t,i)&&(e[i]=gr(t[i]))}return e}const{toString:Dc}={};function yr(t){return Dc.call(t).slice(8,-1)}const vr=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Rc=typeof vr=="symbol"?function(t){var e;return t!=null&&(e=t[vr])&&e.apply(t)}:function(){return null},Ye={};function he(t){var e,n,r,i;if(arguments.length===1){if(U(t))return t.slice();if(this===Ye&&typeof t=="string")return[t];if(i=Rc(t)){for(n=[];!(r=i.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const oi=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var le=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Oo(t,e){le=t,Mo=e}var Mo=()=>!0;const jc=!new Error("").stack;function He(){if(jc)try{throw He.arguments,new Error}catch(t){return t}return new Error}function wr(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(Mo).map(r=>`
`+r).join("")):""}var Do=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ai=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Do),Nc={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function tt(t,e){this._e=He(),this.name=t,this.message=e}function Ro(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,i)=>i.indexOf(n)===r).join(`
`)}function bn(t,e,n,r){this._e=He(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=Ro(t,e)}function Et(t,e){this._e=He(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=Ro(t,e)}et(tt).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+wr(this._e,2))}},toString:function(){return this.name+": "+this.message}}),et(bn).from(tt),et(Et).from(tt);var li=ai.reduce((t,e)=>(t[e]=e+"Error",t),{});const zc=tt;var C=ai.reduce((t,e)=>{var n=e+"Error";function r(i,s){this._e=He(),this.name=n,i?typeof i=="string"?(this.message=`${i}${s?`
 `+s:""}`,this.inner=s||null):typeof i=="object"&&(this.message=`${i.name} ${i.message}`,this.inner=i):(this.message=Nc[e]||n,this.inner=null)}return et(r).from(zc),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var Yi=Do.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),an=ai.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function O(){}function Mt(t){return t}function Ic(t,e){return t==null||t===Mt?e:function(n){return e(t(n))}}function Be(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function Lc(t,e){return t===O?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var s=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Be(r,this.onsuccess):r),i&&(this.onerror=this.onerror?Be(i,this.onerror):i),s!==void 0?s:n}}function Bc(t,e){return t===O?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Be(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Be(r,this.onerror):r)}}function Fc(t,e){return t===O?e:function(n){var r=t.apply(this,arguments);V(n,r);var i=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?Be(i,this.onsuccess):i),s&&(this.onerror=this.onerror?Be(s,this.onerror):s),r===void 0?o===void 0?void 0:o:V(r,o)}}function Hc(t,e){return t===O?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function ci(t,e){return t===O?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,i=arguments.length,s=new Array(i);i--;)s[i]=arguments[i];return n.then(function(){return e.apply(r,s)})}return e.apply(this,arguments)}}an.ModifyError=bn,an.DexieError=tt,an.BulkError=Et;var Dt={};const[br,_n,_r]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,Ot(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,Ot(e),t]})(),jo=_n&&_n.then,ln=br&&br.constructor,ui=!!_r;var Sr=!1,Kc=_r?()=>{_r.then(Yt)}:D.setImmediate?setImmediate.bind(null,Yt):D.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Yt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Yt,0)},$t=function(t,e){vt.push([t,e]),Sn&&(Kc(),Sn=!1)},xr=!0,Sn=!0,Ne=[],cn=[],Er=null,$r=Mt,nt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Xi,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Xi(t[0],t[1])}catch{}})}},A=nt,vt=[],ze=0,un=[];function x(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=O,this._lib=!1;var e=this._PSD=A;if(le&&(this._stackHolder=He(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Dt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Cr(this,this._value))}this._state=null,this._value=null,++e.ref,zo(this,t)}const Ar={get:function(){var t=A,e=xn;function n(r,i){var s=!t.global&&(t!==A||e!==xn);const o=s&&!ye();var a=new x((l,u)=>{di(this,new No(En(r,t,s,o),En(i,t,s,o),l,u,t))});return le&&Bo(a,this),a}return n.prototype=Dt,n},set:function(t){me(this,"then",t&&t.prototype===Dt?Ar:{get:function(){return t},set:Ar.set})}};function No(t,e,n,r,i){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=i}function zo(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Ut();n&&typeof n.then=="function"?zo(t,(i,s)=>{n instanceof x?n._then(i,s):n.then(i,s)}):(t._state=!0,t._value=n,Io(t)),r&&qt()}},Cr.bind(null,t))}catch(n){Cr(t,n)}}function Cr(t,e){if(cn.push(e),t._state===null){var n=t._lib&&Ut();e=$r(e),t._state=!1,t._value=e,le&&e!==null&&typeof e=="object"&&!e._promise&&function(r,i,s){try{r.apply(null,s)}catch(o){i&&i(o)}}(()=>{var r=si(e,"stack");e._promise=t,me(e,"stack",{get:()=>Sr?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ne.some(i=>i._value===r._value)||Ne.push(r)}(t),Io(t),n&&qt()}}function Io(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)di(t,e[n]);var i=t._PSD;--i.ref||i.finalize(),ze===0&&(++ze,$t(()=>{--ze==0&&hi()},[]))}function di(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++ze,$t(Uc,[n,t,e])}else t._listeners.push(e)}function Uc(t,e,n){try{Er=e;var r,i=e._value;e._state?r=t(i):(cn.length&&(cn=[]),r=t(i),cn.indexOf(i)===-1&&function(s){for(var o=Ne.length;o;)if(Ne[--o]._value===s._value)return void Ne.splice(o,1)}(e)),n.resolve(r)}catch(s){n.reject(s)}finally{Er=null,--ze==0&&hi(),--n.psd.ref||n.psd.finalize()}}function Lo(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var i,s,o=t._value;o!=null?(i=o.name||"Error",s=o.message||o,r=wr(o,0)):(i=o,s=""),e.push(i+(s?": "+s:"")+r)}return le&&((r=wr(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&Lo(t._prev,e,n)),e}function Bo(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Yt(){Ut()&&qt()}function Ut(){var t=xr;return xr=!1,Sn=!1,t}function qt(){var t,e,n;do for(;vt.length>0;)for(t=vt,vt=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(vt.length>0);xr=!0,Sn=!0}function hi(){var t=Ne;Ne=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=un.slice(0),n=e.length;n;)e[--n]()}function Qt(t){return new x(Dt,!1,t)}function R(t,e){var n=A;return function(){var r=Ut(),i=A;try{return $e(n,!0),t.apply(this,arguments)}catch(s){e&&e(s)}finally{$e(i,!1),r&&qt()}}}ct(x.prototype,{then:Ar,_then:function(t,e){di(this,new No(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Qt(r)):this.then(null,r=>r&&r.name===e?n(r):Qt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Qt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Sr=!0;var t=Lo(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Sr=!1}}},timeout:function(t,e){return t<1/0?new x((n,r)=>{var i=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,i))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&me(x.prototype,Symbol.toStringTag,"Dexie.Promise"),nt.env=Fo(),ct(x,{all:function(){var t=he.apply(null,arguments).map(Xt);return new x(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((i,s)=>x.resolve(i).then(o=>{t[s]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof x)return t;if(t&&typeof t.then=="function")return new x((n,r)=>{t.then(n,r)});var e=new x(Dt,!0,t);return Bo(e,Er),e},reject:Qt,race:function(){var t=he.apply(null,arguments).map(Xt);return new x((e,n)=>{t.map(r=>x.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>xn},newPSD:Ee,usePSD:ht,scheduler:{get:()=>$t,set:t=>{$t=t}},rejectionMapper:{get:()=>$r,set:t=>{$r=t}},follow:(t,e)=>new x((n,r)=>Ee((i,s)=>{var o=A;o.unhandleds=[],o.onunhandled=s,o.finalize=Be(function(){(function(a){function l(){a(),un.splice(un.indexOf(l),1)}un.push(l),++ze,$t(()=>{--ze==0&&hi()},[])})(()=>{this.unhandleds.length===0?i():s(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),ln&&(ln.allSettled&&me(x,"allSettled",function(){const t=he.apply(null,arguments).map(Xt);return new x(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((i,s)=>x.resolve(i).then(o=>r[s]={status:"fulfilled",value:o},o=>r[s]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),ln.any&&typeof AggregateError<"u"&&me(x,"any",function(){const t=he.apply(null,arguments).map(Xt);return new x((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const i=new Array(r);t.forEach((s,o)=>x.resolve(s).then(a=>e(a),a=>{i[o]=a,--r||n(new AggregateError(i))}))})}));const K={awaits:0,echoes:0,id:0};var qc=0,dn=[],Yn=0,xn=0,Wc=0;function Ee(t,e,n,r){var i=A,s=Object.create(i);s.parent=i,s.ref=0,s.global=!1,s.id=++Wc;var o=nt.env;s.env=ui?{Promise:x,PromiseProp:{value:x,configurable:!0,writable:!0},all:x.all,race:x.race,allSettled:x.allSettled,any:x.any,resolve:x.resolve,reject:x.reject,nthen:Qi(o.nthen,s),gthen:Qi(o.gthen,s)}:{},e&&V(s,e),++i.ref,s.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=ht(s,t,n,r);return s.ref===0&&s.finalize(),a}function dt(){return K.id||(K.id=++qc),++K.awaits,K.echoes+=100,K.id}function ye(){return!!K.awaits&&(--K.awaits==0&&(K.id=0),K.echoes=100*K.awaits,!0)}function Xt(t){return K.echoes&&t&&t.constructor===ln?(dt(),t.then(e=>(ye(),e),e=>(ye(),L(e)))):t}function Vc(t){++xn,K.echoes&&--K.echoes!=0||(K.echoes=K.id=0),dn.push(A),$e(t,!0)}function Jc(){var t=dn[dn.length-1];dn.pop(),$e(t,!1)}function $e(t,e){var n=A;if((e?!K.echoes||Yn++&&t===A:!Yn||--Yn&&t===A)||Ho(e?Vc.bind(null,t):Jc),t!==A&&(A=t,n===nt&&(nt.env=Fo()),ui)){var r=nt.env.Promise,i=t.env;_n.then=i.nthen,r.prototype.then=i.gthen,(n.global||t.global)&&(Object.defineProperty(D,"Promise",i.PromiseProp),r.all=i.all,r.race=i.race,r.resolve=i.resolve,r.reject=i.reject,i.allSettled&&(r.allSettled=i.allSettled),i.any&&(r.any=i.any))}}function Fo(){var t=D.Promise;return ui?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(D,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:_n.then,gthen:t.prototype.then}:{}}function ht(t,e,n,r,i){var s=A;try{return $e(t,!0),e(n,r,i)}finally{$e(s,!1)}}function Ho(t){jo.call(br,t)}function En(t,e,n,r){return typeof t!="function"?t:function(){var i=A;n&&dt(),$e(e,!0);try{return t.apply(this,arguments)}finally{$e(i,!1),r&&Ho(ye)}}}function Qi(t,e){return function(n,r){return t.call(this,En(n,e),En(r,e))}}(""+jo).indexOf("[native code]")===-1&&(dt=ye=O);function Xi(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,i={promise:e,reason:t};if(D.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),V(r,i)):D.CustomEvent&&V(r=new CustomEvent("unhandledrejection",{detail:i}),i),r&&D.dispatchEvent&&(dispatchEvent(r),!D.PromiseRejectionEvent&&D.onunhandledrejection))try{D.onunhandledrejection(r)}catch{}le&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var L=x.reject;function Pr(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var i=t._createTransaction(e,n,t._dbSchema);try{i.create(),t._state.PR1398_maxLoop=3}catch(s){return s.name===li.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Pr(t,e,n,r))):L(s)}return i._promise(e,(s,o)=>Ee(()=>(A.trans=i,r(s,o,i)))).then(s=>i._completion.then(()=>s))}if(t._state.openComplete)return L(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return L(new C.DatabaseClosed);t.open().catch(O)}return t._state.dbReadyPromise.then(()=>Pr(t,e,n,r))}const je=String.fromCharCode(65535),ce="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",At=[],Nn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),Gc=Nn,Yc=Nn,Ko=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Fe(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const Uo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Zt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Kt(e))[t],e)}class Qc{_trans(e,n,r){const i=this._tx||A.trans,s=this.name;function o(l,u,c){if(!c.schema[s])throw new C.NotFound("Table "+s+" not part of transaction");return n(c.idbtrans,c)}const a=Ut();try{return i&&i.db===this.db?i===A.trans?i._promise(e,o,r):Ee(()=>i._promise(e,o,r),{trans:i,transless:A.transless||A}):Pr(this.db,e,[this.name],o)}finally{a&&qt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(i=>this.hook.reading.fire(i))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(U(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=I(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)&&u.keyPath.every(c=>n.indexOf(c)>=0))[0];if(r&&this.db._maxKey!==je)return this.where(r.name).equals(r.keyPath.map(u=>e[u]));!r&&le&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:i}=this.schema,s=this.db._deps.indexedDB;function o(u,c){try{return s.cmp(u,c)===0}catch{return!1}}const[a,l]=n.reduce(([u,c],d)=>{const h=i[d],m=e[d];return[u||h,u||!h?Fe(c,h&&h.multi?v=>{const p=pe(v,d);return U(p)&&p.some(y=>o(m,y))}:v=>o(m,pe(v,d))):c]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,U(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const i=Object.create(e.prototype);for(var s in r)if(Z(r,s))try{i[s]=r[s]}catch{}return i};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){V(this,e)})}add(e,n){const{auto:r,keyPath:i}=this.schema.primKey;let s=e;return i&&r&&(s=Zt(i)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[s]})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{ne(e,i,o)}catch{}return o})}update(e,n){if(typeof e!="object"||U(e))return this.where(":id").equals(e).modify(n);{const r=pe(e,this.schema.primKey.keyPath);if(r===void 0)return L(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?I(n).forEach(i=>{ne(e,i,n[i])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:i}=this.schema.primKey;let s=e;return i&&r&&(s=Zt(i)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[s],keys:n!=null?[n]:null})).then(o=>o.numFailures?x.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{ne(e,i,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?x.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:Uo})).then(e=>e.numFailures?x.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(i=>this.hook.reading.fire(i))))}bulkAdd(e,n,r){const i=Array.isArray(n)?n:void 0,s=(r=r||(i?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&i)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&a?e.map(Zt(l)):e;return this.core.mutate({trans:o,type:"add",keys:i,values:c,wantResults:s}).then(({numFailures:d,results:h,lastResult:m,failures:v})=>{if(d===0)return s?h:m;throw new Et(`${this.name}.bulkAdd(): ${d} of ${u} operations failed`,v)})})}bulkPut(e,n,r){const i=Array.isArray(n)?n:void 0,s=(r=r||(i?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&i)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&a?e.map(Zt(l)):e;return this.core.mutate({trans:o,type:"put",keys:i,values:c,wantResults:s}).then(({numFailures:d,results:h,lastResult:m,failures:v})=>{if(d===0)return s?h:m;throw new Et(`${this.name}.bulkPut(): ${d} of ${u} operations failed`,v)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:i,failures:s})=>{if(r===0)return i;throw new Et(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,s)})}}function Ct(t){var e={},n=function(a,l){if(l){for(var u=arguments.length,c=new Array(u-1);--u;)c[u-1]=arguments[u];return e[a].subscribe.apply(null,c),t}if(typeof a=="string")return e[a]};n.addEventType=s;for(var r=1,i=arguments.length;r<i;++r)s(arguments[r]);return n;function s(a,l,u){if(typeof a=="object")return o(a);l||(l=Hc),u||(u=O);var c={subscribers:[],fire:u,subscribe:function(d){c.subscribers.indexOf(d)===-1&&(c.subscribers.push(d),c.fire=l(c.fire,d))},unsubscribe:function(d){c.subscribers=c.subscribers.filter(function(h){return h!==d}),c.fire=c.subscribers.reduce(l,u)}};return e[a]=n[a]=c,c}function o(a){I(a).forEach(function(l){var u=a[l];if(U(u))s(l,a[l][0],a[l][1]);else{if(u!=="asap")throw new C.InvalidArgument("Invalid event config");var c=s(l,Mt,function(){for(var d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];c.subscribers.forEach(function(m){Ao(function(){m.apply(null,h)})})})}})}}function pt(t,e){return et(e).from({prototype:t}),e}function We(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function Qn(t,e){t.filter=Fe(t.filter,e)}function Xn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Fe(r(),e()):e,t.justLimit=n&&!r}function hn(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Zi(t,e,n){const r=hn(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function en(t,e,n,r){const i=t.replayFilter?Fe(t.filter,t.replayFilter()):t.filter;if(t.or){const s={},o=(a,l,u)=>{if(!i||i(l,u,h=>l.stop(h),h=>l.fail(h))){var c=l.primaryKey,d=""+c;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(c)),Z(s,d)||(s[d]=!0,e(a,l,u))}};return Promise.all([t.or._iterate(o,n),es(Zi(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return es(Zi(t,r,n),Fe(t.algorithm,i),e,!t.keysOnly&&t.valueMapper)}function es(t,e,n,r){var i=R(r?(s,o,a)=>n(r(s),o,a):n);return t.then(s=>{if(s)return s.start(()=>{var o=()=>s.continue();e&&!e(s,a=>o=a,a=>{s.stop(a),o=O},a=>{s.fail(a),o=O})||i(s.value,s,a=>o=a),o()})})}function W(t,e){try{const n=ts(t),r=ts(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(i,s){const o=i.length,a=s.length,l=o<a?o:a;for(let u=0;u<l;++u)if(i[u]!==s[u])return i[u]<s[u]?-1:1;return o===a?0:o<a?-1:1}(ns(t),ns(e));case"Array":return function(i,s){const o=i.length,a=s.length,l=o<a?o:a;for(let u=0;u<l;++u){const c=W(i[u],s[u]);if(c!==0)return c}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function ts(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=yr(t);return n==="ArrayBuffer"?"binary":n}function ns(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class Xc{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,L.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,L.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Fe(n.algorithm,e)}_iterate(e,n){return en(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&V(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>en(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,i=r.table.core;if(We(r,!0))return i.count({trans:n,query:{index:hn(r,i.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var s=0;return en(r,()=>(++s,!1),n,i).then(()=>s)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),i=r[0],s=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[i]}var a=this._ctx.dir==="next"?1:-1;function l(u,c){var d=o(u,s),h=o(c,s);return d<h?-a:d>h?a:0}return this.toArray(function(u){return u.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&We(r,!0)&&r.limit>0){const{valueMapper:i}=r,s=hn(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:s,range:r.range}}).then(({result:o})=>i?o.map(i):o)}{const i=[];return en(r,s=>i.push(s),n,r.table.core).then(()=>i)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,We(n)?Xn(n,()=>{var r=e;return(i,s)=>r===0||(r===1?(--r,!1):(s(()=>{i.advance(r),r=0}),!1))}):Xn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Xn(this._ctx,()=>{var n=e;return function(r,i,s){return--n<=0&&i(s),n>=0}},!0),this}until(e,n){return Qn(this._ctx,function(r,i,s){return!e(r.value)||(i(s),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return Qn(this._ctx,function(i){return e(i.value)}),n=this._ctx,r=e,n.isMatch=Fe(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){e(i.key,i)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,i){e(i.primaryKey,i)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,s){r.push(s.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&We(n,!0)&&n.limit>0)return this._read(i=>{var s=hn(n,n.table.core.schema);return n.table.core.query({trans:i,values:!1,limit:n.limit,query:{index:s,range:n.range}})}).then(({result:i})=>i).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(i,s){r.push(s.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return Qn(this._ctx,function(i){var s=i.primaryKey.toString(),o=Z(r,s);return r[s]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var i;if(typeof e=="function")i=e;else{var s=I(e),o=s.length;i=function(p){for(var y=!1,f=0;f<o;++f){var g=s[f],w=e[g];pe(p,g)!==w&&(ne(p,g,w),y=!0)}return y}}const a=n.table.core,{outbound:l,extractKey:u}=a.schema.primaryKey,c=this.db._options.modifyChunkSize||200,d=[];let h=0;const m=[],v=(p,y)=>{const{failures:f,numFailures:g}=y;h+=p-g;for(let w of I(f))d.push(f[w])};return this.clone().primaryKeys().then(p=>{const y=f=>{const g=Math.min(c,p.length-f);return a.getMany({trans:r,keys:p.slice(f,f+g),cache:"immutable"}).then(w=>{const $=[],S=[],b=l?[]:null,_=[];for(let E=0;E<g;++E){const M=w[E],j={value:Kt(M),primKey:p[f+E]};i.call(j,j.value,j)!==!1&&(j.value==null?_.push(p[f+E]):l||W(u(M),u(j.value))===0?(S.push(j.value),l&&b.push(p[f+E])):(_.push(p[f+E]),$.push(j.value)))}const P=We(n)&&n.limit===1/0&&(typeof e!="function"||e===Zn)&&{index:n.index,range:n.range};return Promise.resolve($.length>0&&a.mutate({trans:r,type:"add",values:$}).then(E=>{for(let M in E.failures)_.splice(parseInt(M),1);v($.length,E)})).then(()=>(S.length>0||P&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:b,values:S,criteria:P,changeSpec:typeof e!="function"&&e}).then(E=>v(S.length,E))).then(()=>(_.length>0||P&&e===Zn)&&a.mutate({trans:r,type:"delete",keys:_,criteria:P}).then(E=>v(_.length,E))).then(()=>p.length>f+g&&y(f+c))})};return y(0).then(()=>{if(d.length>0)throw new bn("Error modifying one or more objects",d,h,m);return p.length})})})}delete(){var e=this._ctx,n=e.range;return We(e)&&(e.isPrimKey&&!Yc||n.type===3)?this._write(r=>{const{primaryKey:i}=e.table.core.schema,s=n;return e.table.core.count({trans:r,query:{index:i,range:s}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:s}).then(({failures:a,lastResult:l,results:u,numFailures:c})=>{if(c)throw new bn("Could not delete some values",Object.keys(a).map(d=>a[d]),o-c);return o-c}))}):this.modify(Zn)}}const Zn=(t,e)=>e.value=null;function Zc(t,e){return t<e?-1:t===e?0:1}function eu(t,e){return t>e?-1:t===e?0:1}function Q(t,e,n){var r=t instanceof Wo?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Ve(t){return new t.Collection(t,()=>qo("")).limit(0)}function tu(t,e,n,r,i,s){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var u=e[l];if(u!==r[l])return i(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):i(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;i(t[l],u)<0&&(a=l)}return o<r.length&&s==="next"?t+n.substr(t.length):o<t.length&&s==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function tn(t,e,n,r){var i,s,o,a,l,u,c,d=n.length;if(!n.every(p=>typeof p=="string"))return Q(t,"String expected.");function h(p){i=function(f){return f==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(p),s=function(f){return f==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(p),o=p==="next"?Zc:eu;var y=n.map(function(f){return{lower:s(f),upper:i(f)}}).sort(function(f,g){return o(f.lower,g.lower)});a=y.map(function(f){return f.upper}),l=y.map(function(f){return f.lower}),u=p,c=p==="next"?"":r}h("next");var m=new t.Collection(t,()=>ve(a[0],l[d-1]+r));m._ondirectionchange=function(p){h(p)};var v=0;return m._addAlgorithm(function(p,y,f){var g=p.key;if(typeof g!="string")return!1;var w=s(g);if(e(w,l,v))return!0;for(var $=null,S=v;S<d;++S){var b=tu(g,w,a[S],l[S],o,u);b===null&&$===null?v=S+1:($===null||o($,b)>0)&&($=b)}return y($!==null?function(){p.continue($+c)}:f),!1}),m}function ve(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function qo(t){return{type:1,lower:t,upper:t}}class Wo{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,i){r=r!==!1,i=i===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||i)&&(!r||!i)?Ve(this):new this.Collection(this,()=>ve(e,n,!r,!i))}catch{return Q(this,ce)}}equals(e){return e==null?Q(this,ce):new this.Collection(this,()=>qo(e))}above(e){return e==null?Q(this,ce):new this.Collection(this,()=>ve(e,void 0,!0))}aboveOrEqual(e){return e==null?Q(this,ce):new this.Collection(this,()=>ve(e,void 0,!1))}below(e){return e==null?Q(this,ce):new this.Collection(this,()=>ve(void 0,e,!1,!0))}belowOrEqual(e){return e==null?Q(this,ce):new this.Collection(this,()=>ve(void 0,e))}startsWith(e){return typeof e!="string"?Q(this,"String expected."):this.between(e,e+je,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):tn(this,(n,r)=>n.indexOf(r[0])===0,[e],je)}equalsIgnoreCase(e){return tn(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=he.apply(Ye,arguments);return e.length===0?Ve(this):tn(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=he.apply(Ye,arguments);return e.length===0?Ve(this):tn(this,(n,r)=>r.some(i=>n.indexOf(i)===0),e,je)}anyOf(){const e=he.apply(Ye,arguments);let n=this._cmp;try{e.sort(n)}catch{return Q(this,ce)}if(e.length===0)return Ve(this);const r=new this.Collection(this,()=>ve(e[0],e[e.length-1]));r._ondirectionchange=s=>{n=s==="next"?this._ascending:this._descending,e.sort(n)};let i=0;return r._addAlgorithm((s,o,a)=>{const l=s.key;for(;n(l,e[i])>0;)if(++i,i===e.length)return o(a),!1;return n(l,e[i])===0||(o(()=>{s.continue(e[i])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=he.apply(Ye,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Q(this,ce)}const n=e.reduce((r,i)=>r?r.concat([[r[r.length-1][1],i]]):[[-(1/0),i]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,i=this._ascending,s=this._descending,o=this._min,a=this._max;if(e.length===0)return Ve(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&i(g[0],g[1])<=0))return Q(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,d=i;function h(g,w){return d(g[0],w[0])}try{c=e.reduce(function(g,w){let $=0,S=g.length;for(;$<S;++$){const b=g[$];if(r(w[0],b[1])<0&&r(w[1],b[0])>0){b[0]=o(b[0],w[0]),b[1]=a(b[1],w[1]);break}}return $===S&&g.push(w),g},[]),c.sort(h)}catch{return Q(this,ce)}let m=0;const v=u?g=>i(g,c[m][1])>0:g=>i(g,c[m][1])>=0,p=l?g=>s(g,c[m][0])>0:g=>s(g,c[m][0])>=0;let y=v;const f=new this.Collection(this,()=>ve(c[0][0],c[c.length-1][1],!l,!u));return f._ondirectionchange=g=>{g==="next"?(y=v,d=i):(y=p,d=s),c.sort(h)},f._addAlgorithm((g,w,$)=>{for(var S=g.key;y(S);)if(++m,m===c.length)return w($),!1;return!!function(b){return!v(b)&&!p(b)}(S)||(this._cmp(S,c[m][1])===0||this._cmp(S,c[m][0])===0||w(()=>{d===i?g.continue(c[m][0]):g.continue(c[m][1])}),!1)}),f}startsWithAnyOf(){const e=he.apply(Ye,arguments);return e.every(n=>typeof n=="string")?e.length===0?Ve(this):this.inAnyRange(e.map(n=>[n,n+je])):Q(this,"startsWithAnyOf() only works with strings")}}function re(t){return R(function(e){return Rt(e),t(e.target.error),!1})}function Rt(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const Ae=Ct(null,"storagemutated");class nu{_lock(){return yt(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(yt(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{ht(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(yt(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return yt(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=R(i=>{Rt(i),this._reject(e.error)}),e.onabort=R(i=>{Rt(i),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(i)}),e.oncomplete=R(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&Ae.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return L(new C.ReadOnly("Transaction is readonly"));if(!this.active)return L(new C.TransactionInactive);if(this._locked())return new x((s,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(s,o)},A])});if(r)return Ee(()=>{var s=new x((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return s.finally(()=>this._unlock()),s._lib=!0,s});var i=new x((s,o)=>{var a=n(s,o,this);a&&a.then&&a.then(s,o)});return i._lib=!0,i}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=x.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var i=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(i.get(-1/0).onsuccess=o)})()}var s=n._waitingFor;return new x((o,a)=>{r.then(l=>n._waitingQueue.push(R(o.bind(null,l))),l=>n._waitingQueue.push(R(a.bind(null,l)))).finally(()=>{n._waitingFor===s&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Z(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const i=new this.db.Table(e,r,this);return i.core=this.db.core.table(e),n[e]=i,i}}function Tr(t,e,n,r,i,s,o){return{name:t,keyPath:e,unique:n,multi:r,auto:i,compound:s,src:(n&&!o?"&":"")+(r?"*":"")+(i?"++":"")+Vo(e)}}function Vo(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Jo(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:Co(n,r=>[r.name,r])}}let jt=t=>{try{return t.only([[]]),jt=()=>[[]],[[]]}catch{return jt=()=>je,je}};function kr(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>pe(n,e)}(t):e=>pe(e,t)}function rs(t){return[].slice.call(t)}let ru=0;function Pt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function iu(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:d,upperOpen:h}=l;return u===void 0?c===void 0?null:e.upperBound(c,!!h):c===void 0?e.lowerBound(u,!!d):e.bound(u,c,!!d,!!h)}const{schema:i,hasGetAll:s}=function(l,u){const c=rs(l.objectStoreNames);return{schema:{name:l.name,tables:c.map(d=>u.objectStore(d)).map(d=>{const{keyPath:h,autoIncrement:m}=d,v=U(h),p=h==null,y={},f={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:p,compound:v,keyPath:h,autoIncrement:m,unique:!0,extractKey:kr(h)},indexes:rs(d.indexNames).map(g=>d.index(g)).map(g=>{const{name:w,unique:$,multiEntry:S,keyPath:b}=g,_={name:w,compound:U(b),keyPath:b,unique:$,multiEntry:S,extractKey:kr(b)};return y[Pt(b)]=_,_}),getIndexByKeyPath:g=>y[Pt(g)]};return y[":id"]=f.primaryKey,h!=null&&(y[Pt(h)]=f.primaryKey),f})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=i.tables.map(l=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:d,type:h,keys:m,values:v,range:p}){return new Promise((y,f)=>{y=R(y);const g=d.objectStore(c),w=g.keyPath==null,$=h==="put"||h==="add";if(!$&&h!=="delete"&&h!=="deleteRange")throw new Error("Invalid operation type: "+h);const{length:S}=m||v||{length:1};if(m&&v&&m.length!==v.length)throw new Error("Given keys array must have same length as given values array.");if(S===0)return y({numFailures:0,failures:{},results:[],lastResult:void 0});let b;const _=[],P=[];let E=0;const M=q=>{++E,Rt(q)};if(h==="deleteRange"){if(p.type===4)return y({numFailures:E,failures:P,results:[],lastResult:void 0});p.type===3?_.push(b=g.clear()):_.push(b=g.delete(r(p)))}else{const[q,F]=$?w?[v,m]:[v,null]:[m,null];if($)for(let N=0;N<S;++N)_.push(b=F&&F[N]!==void 0?g[h](q[N],F[N]):g[h](q[N])),b.onerror=M;else for(let N=0;N<S;++N)_.push(b=g[h](q[N])),b.onerror=M}const j=q=>{const F=q.target.result;_.forEach((N,Ke)=>N.error!=null&&(P[Ke]=N.error)),y({numFailures:E,failures:P,results:h==="delete"?m:_.map(N=>N.result),lastResult:F})};b.onerror=q=>{M(q),j(q)},b.onsuccess=j})},getMany:({trans:d,keys:h})=>new Promise((m,v)=>{m=R(m);const p=d.objectStore(c),y=h.length,f=new Array(y);let g,w=0,$=0;const S=_=>{const P=_.target;f[P._pos]=P.result,++$===w&&m(f)},b=re(v);for(let _=0;_<y;++_)h[_]!=null&&(g=p.get(h[_]),g._pos=_,g.onsuccess=S,g.onerror=b,++w);w===0&&m(f)}),get:({trans:d,key:h})=>new Promise((m,v)=>{m=R(m);const p=d.objectStore(c).get(h);p.onsuccess=y=>m(y.target.result),p.onerror=re(v)}),query:function(d){return h=>new Promise((m,v)=>{m=R(m);const{trans:p,values:y,limit:f,query:g}=h,w=f===1/0?void 0:f,{index:$,range:S}=g,b=p.objectStore(c),_=$.isPrimaryKey?b:b.index($.name),P=r(S);if(f===0)return m({result:[]});if(d){const E=y?_.getAll(P,w):_.getAllKeys(P,w);E.onsuccess=M=>m({result:M.target.result}),E.onerror=re(v)}else{let E=0;const M=y||!("openKeyCursor"in _)?_.openCursor(P):_.openKeyCursor(P),j=[];M.onsuccess=q=>{const F=M.result;return F?(j.push(y?F.value:F.primaryKey),++E===f?m({result:j}):void F.continue()):m({result:j})},M.onerror=re(v)}})}(s),openCursor:function({trans:d,values:h,query:m,reverse:v,unique:p}){return new Promise((y,f)=>{y=R(y);const{index:g,range:w}=m,$=d.objectStore(c),S=g.isPrimaryKey?$:$.index(g.name),b=v?p?"prevunique":"prev":p?"nextunique":"next",_=h||!("openKeyCursor"in S)?S.openCursor(r(w),b):S.openKeyCursor(r(w),b);_.onerror=re(f),_.onsuccess=R(P=>{const E=_.result;if(!E)return void y(null);E.___id=++ru,E.done=!1;const M=E.continue.bind(E);let j=E.continuePrimaryKey;j&&(j=j.bind(E));const q=E.advance.bind(E),F=()=>{throw new Error("Cursor not stopped")};E.trans=d,E.stop=E.continue=E.continuePrimaryKey=E.advance=()=>{throw new Error("Cursor not started")},E.fail=R(f),E.next=function(){let N=1;return this.start(()=>N--?this.continue():this.stop()).then(()=>this)},E.start=N=>{const Ke=new Promise((J,Pe)=>{J=R(J),_.onerror=re(Pe),E.fail=Pe,E.stop=ft=>{E.stop=E.continue=E.continuePrimaryKey=E.advance=F,J(ft)}}),Ue=()=>{if(_.result)try{N()}catch(J){E.fail(J)}else E.done=!0,E.start=()=>{throw new Error("Cursor behind last entry")},E.stop()};return _.onsuccess=R(J=>{_.onsuccess=Ue,Ue()}),E.continue=M,E.continuePrimaryKey=j,E.advance=q,Ue(),Ke},y(E)},f)})},count({query:d,trans:h}){const{index:m,range:v}=d;return new Promise((p,y)=>{const f=h.objectStore(c),g=m.isPrimaryKey?f:f.index(m.name),w=r(v),$=w?g.count(w):g.count();$.onsuccess=R(S=>p(S.target.result)),$.onerror=re(y)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:jt(e),schema:i}}function Or({_novip:t},e){const n=e.db,r=function(i,s,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(c,d){return d.reduce((h,{create:m})=>({...h,...m(h)}),c)}(iu(s,o,l),i.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(i=>{const s=i.name;t.core.schema.tables.some(o=>o.name===s)&&(i.core=t.core.table(s),t[s]instanceof t.Table&&(t[s].core=i.core))})}function $n({_novip:t},e,n,r){n.forEach(i=>{const s=r[i];e.forEach(o=>{const a=si(o,i);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?me(o,i,{get(){return this.table(i)},set(l){Eo(this,i,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[i]=new t.Table(i,s))})})}function Mr({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function su(t,e){return t._cfg.version-e._cfg.version}function ou(t,e,n,r){const i=t._dbSchema,s=t._createTransaction("readwrite",t._storeNames,i);s.create(n),s._completion.catch(r);const o=s._reject.bind(s),a=A.transless||A;Ee(()=>{A.trans=s,A.transless=a,e===0?(I(i).forEach(l=>{er(n,l,i[l].primKey,i[l].indexes)}),Or(t,n),x.follow(()=>t.on.populate.fire(s)).catch(o)):function({_novip:l},u,c,d){const h=[],m=l._versions;let v=l._dbSchema=Rr(l,l.idbdb,d),p=!1;function y(){return h.length?x.resolve(h.shift()(c.idbtrans)).then(y):x.resolve()}return m.filter(f=>f._cfg.version>=u).forEach(f=>{h.push(()=>{const g=v,w=f._cfg.dbschema;jr(l,g,d),jr(l,w,d),v=l._dbSchema=w;const $=Go(g,w);$.add.forEach(b=>{er(d,b[0],b[1].primKey,b[1].indexes)}),$.change.forEach(b=>{if(b.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=d.objectStore(b.name);b.add.forEach(P=>Dr(_,P)),b.change.forEach(P=>{_.deleteIndex(P.name),Dr(_,P)}),b.del.forEach(P=>_.deleteIndex(P))}});const S=f._cfg.contentUpgrade;if(S&&f._cfg.version>u){Or(l,d),c._memoizedTables={},p=!0;let b=Po(w);$.del.forEach(M=>{b[M]=g[M]}),Mr(l,[l.Transaction.prototype]),$n(l,[l.Transaction.prototype],I(b),b),c.schema=b;const _=oi(S);let P;_&&dt();const E=x.follow(()=>{if(P=S(c),P&&_){var M=ye.bind(null,null);P.then(M,M)}});return P&&typeof P.then=="function"?x.resolve(P):E.then(()=>P)}}),h.push(g=>{(!p||!Gc)&&function(w,$){[].slice.call($.db.objectStoreNames).forEach(S=>w[S]==null&&$.db.deleteObjectStore(S))}(f._cfg.dbschema,g),Mr(l,[l.Transaction.prototype]),$n(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),c.schema=l._dbSchema})}),y().then(()=>{var f,g;g=d,I(f=v).forEach(w=>{g.db.objectStoreNames.contains(w)||er(g,w,f[w].primKey,f[w].indexes)})})}(t,e,s,n).catch(o)})}function Go(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const i=t[r],s=e[r];if(i){const o={name:r,def:s,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(s.primKey.keyPath||"")||i.primKey.auto!==s.primKey.auto&&!Nn)o.recreate=!0,n.change.push(o);else{const a=i.idxByName,l=s.idxByName;let u;for(u in a)l[u]||o.del.push(u);for(u in l){const c=a[u],d=l[u];c?c.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,s])}return n}function er(t,e,n,r){const i=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(s=>Dr(i,s)),i}function Dr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function Rr(t,e,n){const r={};return wn(e.objectStoreNames,0).forEach(i=>{const s=n.objectStore(i);let o=s.keyPath;const a=Tr(Vo(o),o||"",!1,!1,!!s.autoIncrement,o&&typeof o!="string",!0),l=[];for(let c=0;c<s.indexNames.length;++c){const d=s.index(s.indexNames[c]);o=d.keyPath;var u=Tr(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(u)}r[i]=Jo(i,a,l)}),r}function jr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let i=0;i<r.length;++i){const s=r[i],o=n.objectStore(s);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],u=o.index(l).keyPath,c=typeof u=="string"?u:"["+wn(u).join("+")+"]";if(e[s]){const d=e[s].idxByName[c];d&&(d.name=l,delete e[s].idxByName[c],e[s].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&D.WorkerGlobalScope&&D instanceof D.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class au{_parseStoresSpec(e,n){I(e).forEach(r=>{if(e[r]!==null){var i=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Tr(l,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),U(u),a===0)}),s=i.shift();if(s.multi)throw new C.Schema("Primary key cannot be multi-valued");i.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Jo(r,s,i)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?V(this._cfg.storesSource,e):e;const r=n._versions,i={};let s={};return r.forEach(o=>{V(i,o._cfg.storesSource),s=o._cfg.dbschema={},o._parseStoresSpec(i,s)}),n._dbSchema=s,Mr(n,[n._allTables,n,n.Transaction.prototype]),$n(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],I(s),s),n._storeNames=I(s),this}upgrade(e){return this._cfg.contentUpgrade=ci(this._cfg.contentUpgrade||O,e),this}}function fi(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Ie("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function mi(t){return t&&typeof t.databases=="function"}function Nr(t){return Ee(function(){return A.letThrough=!0,t()})}function lu(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function cu(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?L(e.dbOpenError):t);le&&(e.openCanceller._stackHolder=He()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function i(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let s=e.dbReadyResolve,o=null,a=!1;return x.race([r,(typeof navigator>"u"?x.resolve():lu()).then(()=>new x((l,u)=>{if(i(),!n)throw new C.MissingAPI;const c=t.name,d=e.autoSchema?n.open(c):n.open(c,Math.round(10*t.verno));if(!d)throw new C.MissingAPI;d.onerror=re(u),d.onblocked=R(t._fireOnBlocked),d.onupgradeneeded=R(h=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){d.onerror=Rt,o.abort(),d.result.close();const v=n.deleteDatabase(c);v.onsuccess=v.onerror=R(()=>{u(new C.NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=re(u);var m=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;a=m<1,t._novip.idbdb=d.result,ou(t,m/10,o,u)}},u),d.onsuccess=R(()=>{o=null;const h=t._novip.idbdb=d.result,m=wn(h.objectStoreNames);if(m.length>0)try{const p=h.transaction((v=m).length===1?v[0]:v,"readonly");e.autoSchema?function({_novip:y},f,g){y.verno=f.version/10;const w=y._dbSchema=Rr(0,f,g);y._storeNames=wn(f.objectStoreNames,0),$n(y,[y._allTables],I(w),w)}(t,h,p):(jr(t,t._dbSchema,p),function(y,f){const g=Go(Rr(0,y.idbdb,f),y._dbSchema);return!(g.add.length||g.change.some(w=>w.add.length||w.change.length))}(t,p)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Or(t,p)}catch{}var v;At.push(t),h.onversionchange=R(p=>{e.vcFired=!0,t.on("versionchange").fire(p)}),h.onclose=R(p=>{t.on("close").fire(p)}),a&&function({indexedDB:p,IDBKeyRange:y},f){!mi(p)&&f!=="__dbnames"&&fi(p,y).put({name:f}).catch(O)}(t._deps,c),l()},u)}))]).then(()=>(i(),e.onReadyBeingFired=[],x.resolve(Nr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.reduce(ci,O);return e.onReadyBeingFired=[],x.resolve(Nr(()=>u(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),L(l)}).finally(()=>{e.openComplete=!0,s()})}function zr(t){var e=s=>t.next(s),n=i(e),r=i(s=>t.throw(s));function i(s){return o=>{var a=s(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):U(l)?Promise.all(l).then(n,r):n(l)}}return i(e)()}function uu(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var i=new Array(r-1);--r;)i[r-1]=arguments[r];n=i.pop();var s=To(i);return[t,s,n]}function Yo(t,e,n,r,i){return x.resolve().then(()=>{const s=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:s};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===li.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Yo(t,e,n,null,i))):L(d)}const l=oi(i);let u;l&&dt();const c=x.follow(()=>{if(u=i.call(o,o),u)if(l){var d=ye.bind(null,null);u.then(d,d)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=zr(u))},a);return(u&&typeof u.then=="function"?x.resolve(u).then(d=>o.active?d:L(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),L(d)))})}function nn(t,e,n){const r=U(t)?t.slice():[t];for(let i=0;i<n;++i)r.push(e);return r}const du={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,i={},s=[];function o(c,d,h){const m=Pt(c),v=i[m]=i[m]||[],p=c==null?0:typeof c=="string"?1:c.length,y=d>0,f={...h,isVirtual:y,keyTail:d,keyLength:p,extractKey:kr(c),unique:!y&&h.unique};return v.push(f),f.isPrimaryKey||s.push(f),p>1&&o(p===2?c[0]:c.slice(0,p-1),d+1,h),v.sort((g,w)=>g.keyTail-w.keyTail),f}const a=o(r.primaryKey.keyPath,0,r.primaryKey);i[":id"]=[a];for(const c of r.indexes)o(c.keyPath,0,c);function l(c){const d=c.query.index;return d.isVirtual?{...c,query:{index:d,range:(h=c.query.range,m=d.keyTail,{type:h.type===1?2:h.type,lower:nn(h.lower,h.lowerOpen?t.MAX_KEY:t.MIN_KEY,m),lowerOpen:!0,upper:nn(h.upper,h.upperOpen?t.MIN_KEY:t.MAX_KEY,m),upperOpen:!0})}}:c;var h,m}return{...n,schema:{...r,primaryKey:a,indexes:s,getIndexByKeyPath:function(c){const d=i[Pt(c)];return d&&d[0]}},count:c=>n.count(l(c)),query:c=>n.query(l(c)),openCursor(c){const{keyTail:d,isVirtual:h,keyLength:m}=c.query.index;return h?n.openCursor(l(c)).then(v=>v&&function(p){return Object.create(p,{continue:{value:function(f){f!=null?p.continue(nn(f,c.reverse?t.MAX_KEY:t.MIN_KEY,d)):c.unique?p.continue(p.key.slice(0,m).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,d)):p.continue()}},continuePrimaryKey:{value(f,g){p.continuePrimaryKey(nn(f,t.MAX_KEY,d),g)}},primaryKey:{get:()=>p.primaryKey},key:{get(){const f=p.key;return m===1?f[0]:f.slice(0,m)}},value:{get:()=>p.value}})}(v)):n.openCursor(c)}}}}}};function pi(t,e,n,r){return n=n||{},r=r||"",I(t).forEach(i=>{if(Z(e,i)){var s=t[i],o=e[i];if(typeof s=="object"&&typeof o=="object"&&s&&o){const a=yr(s);a!==yr(o)?n[r+i]=e[i]:a==="Object"?pi(s,o,n,r+i+"."):s!==o&&(n[r+i]=e[i])}else s!==o&&(n[r+i]=e[i])}else n[r+i]=void 0}),I(e).forEach(i=>{Z(t,i)||(n[r+i]=e[i])}),n}const hu={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(s){const o=A.trans,{deleting:a,creating:l,updating:u}=o.table(e).hook;switch(s.type){case"add":if(l.fire===O)break;return o._promise("readwrite",()=>c(s),!0);case"put":if(l.fire===O&&u.fire===O)break;return o._promise("readwrite",()=>c(s),!0);case"delete":if(a.fire===O)break;return o._promise("readwrite",()=>c(s),!0);case"deleteRange":if(a.fire===O)break;return o._promise("readwrite",()=>function(h){return d(h.trans,h.range,1e4)}(s),!0)}return n.mutate(s);function c(h){const m=A.trans,v=h.keys||function(p,y){return y.type==="delete"?y.keys:y.keys||y.values.map(p.extractKey)}(r,h);if(!v)throw new Error("Keys missing");return(h=h.type==="add"||h.type==="put"?{...h,keys:v}:{...h}).type!=="delete"&&(h.values=[...h.values]),h.keys&&(h.keys=[...h.keys]),function(p,y,f){return y.type==="add"?Promise.resolve([]):p.getMany({trans:y.trans,keys:f,cache:"immutable"})}(n,h,v).then(p=>{const y=v.map((f,g)=>{const w=p[g],$={onerror:null,onsuccess:null};if(h.type==="delete")a.fire.call($,f,w,m);else if(h.type==="add"||w===void 0){const S=l.fire.call($,f,h.values[g],m);f==null&&S!=null&&(f=S,h.keys[g]=f,r.outbound||ne(h.values[g],r.keyPath,f))}else{const S=pi(w,h.values[g]),b=u.fire.call($,S,f,w,m);if(b){const _=h.values[g];Object.keys(b).forEach(P=>{Z(_,P)?_[P]=b[P]:ne(_,P,b[P])})}}return $});return n.mutate(h).then(({failures:f,results:g,numFailures:w,lastResult:$})=>{for(let S=0;S<v.length;++S){const b=g?g[S]:v[S],_=y[S];b==null?_.onerror&&_.onerror(f[S]):_.onsuccess&&_.onsuccess(h.type==="put"&&p[S]?h.values[S]:b)}return{failures:f,results:g,numFailures:w,lastResult:$}}).catch(f=>(y.forEach(g=>g.onerror&&g.onerror(f)),Promise.reject(f)))})}function d(h,m,v){return n.query({trans:h,values:!1,query:{index:r,range:m},limit:v}).then(({result:p})=>c({type:"delete",keys:p,trans:h}).then(y=>y.numFailures>0?Promise.reject(y.failures[0]):p.length<v?{failures:[],numFailures:0,lastResult:void 0}:d(h,{...m,lower:p[p.length-1],lowerOpen:!0},v)))}}}}})};function Qo(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let i=0,s=0;i<e.keys.length&&s<t.length;++i)W(e.keys[i],t[s])===0&&(r.push(n?Kt(e.values[i]):e.values[i]),++s);return r.length===t.length?r:null}catch{return null}}const fu={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const i=Qo(r.keys,r.trans._cache,r.cache==="clone");return i?x.resolve(i):n.getMany(r).then(s=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Kt(s):s},s))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function gi(t){return!("from"in t)}const ue=function(t,e){if(!this){const n=new ue;return t&&"d"in t&&V(n,t),n}V(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Nt(t,e,n){const r=W(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(gi(t))return V(t,{from:e,to:n,d:1});const i=t.l,s=t.r;if(W(n,t.from)<0)return i?Nt(i,e,n):t.l={from:e,to:n,d:1,l:null,r:null},is(t);if(W(e,t.to)>0)return s?Nt(s,e,n):t.r={from:e,to:n,d:1,l:null,r:null},is(t);W(e,t.from)<0&&(t.from=e,t.l=null,t.d=s?s.d+1:1),W(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;i&&!t.l&&An(t,i),s&&o&&An(t,s)}function An(t,e){gi(e)||function n(r,{from:i,to:s,l:o,r:a}){Nt(r,i,s),o&&n(r,o),a&&n(r,a)}(t,e)}function mu(t,e){const n=Ir(e);let r=n.next();if(r.done)return!1;let i=r.value;const s=Ir(t);let o=s.next(i.from),a=o.value;for(;!r.done&&!o.done;){if(W(a.from,i.to)<=0&&W(a.to,i.from)>=0)return!0;W(i.from,a.from)<0?i=(r=n.next(a.from)).value:a=(o=s.next(i.from)).value}return!1}function Ir(t){let e=gi(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&W(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||W(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function is(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),i=r>1?"r":r<-1?"l":"";if(i){const s=i==="r"?"l":"r",o={...t},a=t[i];t.from=a.from,t.to=a.to,t[i]=a[i],o[i]=a[s],t[s]=o,o.d=ss(o)}t.d=ss(t)}function ss({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}ct(ue.prototype,{add(t){return An(this,t),this},addKey(t){return Nt(this,t,t),this},addKeys(t){return t.forEach(e=>Nt(this,e,e)),this},[vr](){return Ir(this)}});const pu={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new ue(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const i=t.table(r),{schema:s}=i,{primaryKey:o}=s,{extractKey:a,outbound:l}=o,u={...i,mutate:h=>{const m=h.trans,v=m.mutatedParts||(m.mutatedParts={}),p=b=>{const _=`idb://${e}/${r}/${b}`;return v[_]||(v[_]=new ue)},y=p(""),f=p(":dels"),{type:g}=h;let[w,$]=h.type==="deleteRange"?[h.range]:h.type==="delete"?[h.keys]:h.values.length<50?[[],h.values]:[];const S=h.trans._cache;return i.mutate(h).then(b=>{if(U(w)){g!=="delete"&&(w=b.results),y.addKeys(w);const _=Qo(w,S);_||g==="add"||f.addKeys(w),(_||$)&&function(P,E,M,j){function q(F){const N=P(F.name||"");function Ke(J){return J!=null?F.extractKey(J):null}const Ue=J=>F.multiEntry&&U(J)?J.forEach(Pe=>N.addKey(Pe)):N.addKey(J);(M||j).forEach((J,Pe)=>{const ft=M&&Ke(M[Pe]),In=j&&Ke(j[Pe]);W(ft,In)!==0&&(ft!=null&&Ue(ft),In!=null&&Ue(In))})}E.indexes.forEach(q)}(p,s,_,$)}else if(w){const _={from:w.lower,to:w.upper};f.add(_),y.add(_)}else y.add(n),f.add(n),s.indexes.forEach(_=>p(_.name).add(n));return b})}},c=({query:{index:h,range:m}})=>{var v,p;return[h,new ue((v=m.lower)!==null&&v!==void 0?v:t.MIN_KEY,(p=m.upper)!==null&&p!==void 0?p:t.MAX_KEY)]},d={get:h=>[o,new ue(h.key)],getMany:h=>[o,new ue().addKeys(h.keys)],count:c,query:c,openCursor:c};return I(d).forEach(h=>{u[h]=function(m){const{subscr:v}=A;if(v){const p=$=>{const S=`idb://${e}/${r}/${$}`;return v[S]||(v[S]=new ue)},y=p(""),f=p(":dels"),[g,w]=d[h](m);if(p(g.name||"").add(w),!g.isPrimaryKey){if(h!=="count"){const $=h==="query"&&l&&m.values&&i.query({...m,values:!1});return i[h].apply(this,arguments).then(S=>{if(h==="query"){if(l&&m.values)return $.then(({result:_})=>(y.addKeys(_),S));const b=m.values?S.result.map(a):S.result;m.values?y.addKeys(b):f.addKeys(b)}else if(h==="openCursor"){const b=S,_=m.values;return b&&Object.create(b,{key:{get:()=>(f.addKey(b.primaryKey),b.key)},primaryKey:{get(){const P=b.primaryKey;return f.addKey(P),P}},value:{get:()=>(_&&y.addKey(b.primaryKey),b.value)}})}return S})}f.add(n)}}return i[h].apply(this,arguments)}}),u}}}};class Ie{constructor(e,n){this._middlewares={},this.verno=0;const r=Ie.dependencies;this._options=n={addons:Ie.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:i}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const s={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:O,dbReadyPromise:null,cancelOpen:O,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;s.dbReadyPromise=new x(a=>{s.dbReadyResolve=a}),s.openCanceller=new x((a,l)=>{s.cancelOpen=l}),this._state=s,this.name=e,this.on=Ct(this,"populate","blocked","versionchange","close",{ready:[ci,O]}),this.on.ready.subscribe=$o(this.on.ready.subscribe,a=>(l,u)=>{Ie.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||x.resolve().then(l),u&&a(l);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(l),u&&a(l);else{a(l);const d=this;u||a(function h(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(h)})}})}),this.Collection=(o=this,pt(Xc.prototype,function(a,l){this.db=o;let u=Uo,c=null;if(l)try{u=l()}catch(v){c=v}const d=a._ctx,h=d.table,m=h.hook.reading.fire;this._ctx={table:h,index:d.index,isPrimKey:!d.index||h.schema.primKey.keyPath&&d.index===h.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:d.or,valueMapper:m!==Mt?m:null}})),this.Table=function(a){return pt(Qc.prototype,function(l,u,c){this.db=a,this._tx=c,this.name=l,this.schema=u,this.hook=a._allTables[l]?a._allTables[l].hook:Ct(null,{creating:[Lc,O],reading:[Ic,Mt],updating:[Fc,O],deleting:[Bc,O]})})}(this),this.Transaction=function(a){return pt(nu.prototype,function(l,u,c,d,h){this.db=a,this.mode=l,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=Ct(this,"complete","error","abort"),this.parent=h||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new x((m,v)=>{this._resolve=m,this._reject=v}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},m=>{var v=this.active;return this.active=!1,this.on.error.fire(m),this.parent?this.parent._reject(m):v&&this.idbtrans&&this.idbtrans.abort(),L(m)})})}(this),this.Version=function(a){return pt(au.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return pt(Wo.prototype,function(l,u,c){this.db=a,this._ctx={table:l,index:u===":id"?null:u,or:c};const d=a._deps.indexedDB;if(!d)throw new C.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(h,m)=>d.cmp(m,h),this._max=(h,m)=>d.cmp(h,m)>0?h:m,this._min=(h,m)=>d.cmp(h,m)<0?h:m,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=jt(n.IDBKeyRange),this._createTransaction=(a,l,u,c)=>new this.Transaction(a,l,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=a=>{this.on("blocked").fire(a),At.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(du),this.use(hu),this.use(pu),this.use(fu),this.vip=Object.create(this,{_vip:{value:!0}}),i.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(i=>i._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(su),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new x((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(O)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:i}){i&&this.unuse({stack:e,name:i});const s=this._middlewares[e]||(this._middlewares[e]=[]);return s.push({stack:e,create:n,level:r??10,name:i}),s.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(i=>r?i.create!==r:!!n&&i.name!==n)),this}open(){return cu(this)}_close(){const e=this._state,n=At.indexOf(this);if(n>=0&&At.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new x(r=>{e.dbReadyResolve=r}),e.openCanceller=new x((r,i)=>{e.cancelOpen=i})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new x((r,i)=>{const s=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=R(()=>{(function({indexedDB:a,IDBKeyRange:l},u){!mi(a)&&u!=="__dbnames"&&fi(a,l).delete(u).catch(O)})(this._deps,this.name),r()}),o.onerror=re(i),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(s):s()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return I(this._allTables).map(e=>this._allTables[e])}transaction(){const e=uu.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let i=A.trans;i&&i.db===this&&e.indexOf("!")===-1||(i=null);const s=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(i){if(i.mode==="readonly"&&o==="readwrite"){if(!s)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i=null}i&&a.forEach(u=>{if(i&&i.storeNames.indexOf(u)===-1){if(!s)throw new C.SubTransaction("Table "+u+" not included in parent transaction.");i=null}}),s&&i&&!i.active&&(i=null)}}catch(u){return i?i._promise(null,(c,d)=>{d(u)}):L(u)}const l=Yo.bind(null,this,o,a,i,r);return i?i._promise(o,l,"lock"):A.trans?ht(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!Z(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const gu=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class yu{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[gu](){return this}}function Xo(t,e){return I(e).forEach(n=>{An(t[n]||(t[n]=new ue),e[n])}),t}function vu(t){return new yu(e=>{const n=oi(t);let r=!1,i={},s={};const o={get closed(){return r},unsubscribe:()=>{r=!0,Ae.storagemutated.unsubscribe(c)}};e.start&&e.start(o);let a=!1,l=!1;function u(){return I(s).some(h=>i[h]&&mu(i[h],s[h]))}const c=h=>{Xo(i,h),u()&&d()},d=()=>{if(a||r)return;i={};const h={},m=function(v){n&&dt();const p=()=>Ee(t,{subscr:v,trans:null}),y=A.trans?ht(A.transless,p):p();return n&&y.then(ye,ye),y}(h);l||(Ae("storagemutated",c),l=!0),a=!0,Promise.resolve(m).then(v=>{a=!1,r||(u()?d():(i={},s=h,e.next&&e.next(v)))},v=>{a=!1,e.error&&e.error(v),o.unsubscribe()})};return d(),o})}let Lr;try{Lr={indexedDB:D.indexedDB||D.mozIndexedDB||D.webkitIndexedDB||D.msIndexedDB,IDBKeyRange:D.IDBKeyRange||D.webkitIDBKeyRange}}catch{Lr={indexedDB:null,IDBKeyRange:null}}const ke=Ie;function fn(t){let e=fe;try{fe=!0,Ae.storagemutated.fire(t)}finally{fe=e}}ct(ke,{...an,delete:t=>new ke(t,{addons:[]}).delete(),exists:t=>new ke(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return mi(e)?Promise.resolve(e.databases()).then(r=>r.map(i=>i.name).filter(i=>i!=="__dbnames")):fi(e,n).toCollection().primaryKeys()}(ke.dependencies).then(t)}catch{return L(new C.MissingAPI)}},defineClass:()=>function(t){V(this,t)},ignoreTransaction:t=>A.trans?ht(A.transless,t):t(),vip:Nr,async:function(t){return function(){try{var e=zr(t.apply(this,arguments));return e&&typeof e.then=="function"?e:x.resolve(e)}catch(n){return L(n)}}},spawn:function(t,e,n){try{var r=zr(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:x.resolve(r)}catch(i){return L(i)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=x.resolve(typeof t=="function"?ke.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:x,debug:{get:()=>le,set:t=>{Oo(t,t==="dexie"?()=>!0:Ko)}},derive:et,extend:V,props:ct,override:$o,Events:Ct,on:Ae,liveQuery:vu,extendObservabilitySet:Xo,getByKeyPath:pe,setByKeyPath:ne,delByKeyPath:function(t,e){typeof e=="string"?ne(t,e,void 0):"length"in e&&[].map.call(e,function(n){ne(t,n,void 0)})},shallowClone:Po,deepClone:Kt,getObjectDiff:pi,cmp:W,asap:Ao,minKey:-(1/0),addons:[],connections:At,errnames:li,dependencies:Lr,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),ke.maxKey=jt(ke.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ae("storagemutated",t=>{if(!fe){let e;Nn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),fe=!0,dispatchEvent(e),fe=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{fe||fn(t)}));let fe=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),Ae("storagemutated",e=>{fe||t.postMessage(e)}),t.onmessage=e=>{e.data&&fn(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){Ae("storagemutated",e=>{try{fe||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&fn(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&fn(e.changedParts)})}x.rejectionMapper=function(t,e){if(!t||t instanceof tt||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Yi[t.name])return t;var n=new Yi[t.name](e||t.message,t);return"stack"in t&&me(n,"stack",{get:function(){return this.inner.stack}}),n},Oo(le,Ko);class Wt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class os extends Wt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const zn="locationchange";let as=!1;const wu=window.history.pushState;function ls(...t){const e=wu.apply(window.history,t);return window.dispatchEvent(new Event(zn)),e}const bu=window.history.replaceState;function cs(...t){const e=bu.apply(window.history,t);return window.dispatchEvent(new Event(zn)),e}function _u(){if(!as){if(window.history.pushState===ls)throw new os("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===cs)throw new os("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");as=!0,window.history.pushState=ls,window.history.replaceState=cs,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(zn))})}}function Su(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function xu(t){const e=Object.entries(t).reduce((n,r)=>{const i=`${r[0]}=${r[1]}`;return`${n}&${i}`},"");return new URLSearchParams(e)}function Eu(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),i=window.location.search?Su(new URLSearchParams(window.location.search)):void 0,s=window.location.hash||void 0;return{paths:n,search:i,hash:s}}class $u extends Wt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Zo(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const us=6;function ds(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>us)throw new $u(`Route sanitization depth has exceed the max of ${us} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Zo(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(i=>{i(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class tr extends Wt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Au(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new tr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new tr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new tr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Cu(t,e,n,r=!1){const i=ea(t,e,n);r?window.history.replaceState(void 0,"",i):window.history.pushState(void 0,"",i)}function ea(t,e,n=""){var r;if(!n&&e!=null)throw new Wt("Route base regexp was defined but routeBase string was not provided.");const i=Pu(e)?`/${n}`:"",s=t.search?xu(t.search).toString():"",o=s?`?${s}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${i}/${t.paths.join("/")}${o}${l}`}function Pu(t){return!!(t&&window.location.pathname.match(t))}function Tu(t={}){var e;Au(t),_u();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let i=!1;const s={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const u=s.getCurrentRawRoutes(),c={...u,...o},d=s.sanitizeFullRoute(c);if(!(!l&&Zo(u,d)))return Cu(d,r,n,a)},createRoutesUrl:o=>ea(o,r,n),getCurrentRawRoutes:()=>Eu(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&s.listeners.size>=t.maxListenerCount)throw new Wt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return s.listeners.add(a),i||(window.addEventListener(zn,()=>ds(s)),i=!0),o&&ds(s,a),a},hasRouteListener:o=>s.listeners.has(o),removeRouteListener:o=>s.listeners.delete(o),sanitizationDepth:0};return s}const ta=Tu({routeBase:"resizable-image-element"}),ku=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],Ou="resizable-image-element-storage";class Mu extends Ie{constructor(){super(Ou),this.version(1).stores({storedUrls:"&index"})}}const nr=new Mu,hs={async set(t){const e=Cn(t).map((n,r)=>({index:r,url:n}));await nr.storedUrls.clear(),await nr.storedUrls.bulkPut(e)},async get(){const e=(await nr.storedUrls.toArray()).map(r=>r.url),n=Cn(e);return Du(n.length?n:ku)}};function Du(t){var e,n;try{const r=Cn(((n=(e=ta.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function Cn(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(ut)}const{defineElement:Ru,defineElementNoInputs:ju}=jl(),rn=Ru()({tagName:"vir-url-input",events:{urlsChange:on()},styles:Xe`
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
`;return i&&(i==null?void 0:i.value)!==s&&(i.value=s),B`
            <textarea
                ${St("input",a=>{const u=a.currentTarget.value.split(`
`).map(c=>c.trim().replace(/,+$/,""));e(new n.urlsChange(u))})}
                ${St("blur",()=>{i&&(i.value=o)})}
                .value=${i&&i.matches(":focus")?s:o}
            ></textarea>
        `}}),gt={max:{width:300,height:600},min:{width:300,height:150}};ju({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:no(hs.get()),constraints:void 0,router:ta,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>Xe`
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
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||gt.min.width,height:Number(o==null?void 0:o.minH)||gt.min.height},max:{width:Number(o==null?void 0:o.maxW)||gt.max.width,height:Number(o==null?void 0:o.maxH)||gt.max.height}}})}const n=t.constraints??gt,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function i(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function s(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!Vr(i(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:Lt(1e3).then(()=>{const o=i();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:i()}}),B`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${rn}
                ${ri(rn,{urls:r})}
                ${St(rn.events.urlsChange,o=>{const a=o.detail;hs.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${rn}>
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
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const u=[rt(o),rt(l)].join(" "),c=n[o][l];return B`
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
                                    ${St("input",d=>{s(d.currentTarget,o,l)})}
                                />
                            </label>
                        `});return B`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${Nu(n,t.imageUrls)}</div>
        `}});function Nu(t,e){return mr(e,"Loading...",n=>Cn(n).map(r=>{const i=`
                height: ${te(t.max.height)};
                max-height: ${te(t.max.height)};
                width: ${te(t.max.width)};
                max-width: ${te(t.max.width)}`,s=`height: ${te(t.min.height)}; width: ${te(t.min.width)}`;return B`
                <div class="constraint-wrapper max" style=${i}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${xt}
                            ${ri(xt,{imageUrl:r,max:t.max,min:t.min})}
                        ></${xt}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${s}></div>
                    </div>
                </div>
            `}))}
