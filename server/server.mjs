import{getCurrentInstance as br,toRef as wr,isRef as Te,defineComponent as ue,computed as R,ref as D,h as q,resolveComponent as Ta,effectScope as kr,markRaw as xr,hasInjectionContext as Oa,inject as _r,watch as ut,reactive as Ze,isReactive as Sr,toRaw as Ia,getCurrentScope as Ra,onScopeDispose as La,nextTick as dt,toRefs as Na,version as Qt,unref as Ar,watchEffect as Ma,shallowRef as yn,openBlock as Ha,createBlock as ja,withKeys as za,createVNode as _e,mergeProps as Da,toHandlers as Fa,Suspense as $a,Transition as Ua,provide as Ba}from"vue";import{useRuntimeConfig as Wa}from"#internal/nitro";import{createMemoryHistory as Ya,createRouter as qa,RouterView as Ka}from"vue-router";const Va=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Ga=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Xa=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Ja(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Qa(e);return}return t}function Qa(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Za(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Xa.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Va.test(e)||Ga.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Ja)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const ei=/#/g,ti=/&/g,ni=/\//g,ri=/=/g,Zt=/\+/g,ai=/%5e/gi,ii=/%60/gi,oi=/%7c/gi,si=/%20/gi;function li(e){return encodeURI(""+e).replace(oi,"|")}function Ct(e){return li(typeof e=="string"?e:JSON.stringify(e)).replace(Zt,"%2B").replace(si,"+").replace(ei,"%23").replace(ti,"%26").replace(ii,"`").replace(ai,"^").replace(ni,"%2F")}function yt(e){return Ct(e).replace(ri,"%3D")}function et(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function ci(e){return et(e.replace(Zt," "))}function fi(e){return et(e.replace(Zt," "))}function ui(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const a=ci(r[1]);if(a==="__proto__"||a==="constructor")continue;const i=fi(r[2]||"");t[a]===void 0?t[a]=i:Array.isArray(t[a])?t[a].push(i):t[a]=[t[a],i]}return t}function di(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${yt(e)}=${Ct(n)}`).join("&"):`${yt(e)}=${Ct(t)}`:yt(e)}function mi(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>di(t,e[t])).filter(Boolean).join("&")}const pi=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,hi=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,vi=/^([/\\]\s*){2,}[^/\\]/,gi=/\/$|\/\?|\/#/,yi=/^\.?\//;function mt(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?pi.test(e):hi.test(e)||(t.acceptRelative?vi.test(e):!1)}function Pt(e="",t){return t?gi.test(e):e.endsWith("/")}function bi(e="",t){if(!t)return(Pt(e)?e.slice(0,-1):e)||"/";if(!Pt(e,!0))return e||"/";let n=e,r="";const a=e.indexOf("#");a>=0&&(n=e.slice(0,a),r=e.slice(a));const[i,...o]=n.split("?");return(i.slice(0,-1)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Tt(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(Pt(e,!0))return e||"/";let n=e,r="";const a=e.indexOf("#");if(a>=0&&(n=e.slice(0,a),r=e.slice(a),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function wi(e=""){return e.startsWith("/")}function bn(e=""){return wi(e)?e:"/"+e}function ki(e,t){if(_i(t)||mt(e))return e;const n=bi(t);return e.startsWith(n)?e:Er(n,e)}function xi(e,t){const n=en(e),r={...ui(n.search),...t};return n.search=mi(r),Ei(n)}function _i(e){return!e||e==="/"}function Si(e){return e&&e!=="/"}function Er(e,...t){let n=e||"";for(const r of t.filter(a=>Si(a)))if(n){const a=r.replace(yi,"");n=Tt(n)+a}else n=r;return n}function Ai(e,t,n={}){return n.trailingSlash||(e=Tt(e),t=Tt(t)),n.leadingSlash||(e=bn(e),t=bn(t)),n.encoding||(e=et(e),t=et(t)),e===t}const Cr=Symbol.for("ufo:protocolRelative");function en(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,u,d=""]=n;return{protocol:u.toLowerCase(),pathname:d,href:u+d,auth:"",host:"",search:"",hash:""}}if(!mt(e,{acceptRelative:!0}))return t?en(t+e):wn(e);const[,r="",a,i=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",s=""]=i.match(/([^#/?]*)(.*)?/)||[],{pathname:c,search:f,hash:l}=wn(s.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r.toLowerCase(),auth:a?a.slice(0,Math.max(0,a.length-1)):"",host:o,pathname:c,search:f,hash:l,[Cr]:!r}}function wn(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function Ei(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",r=e.hash||"",a=e.auth?e.auth+"@":"",i=e.host||"";return(e.protocol||e[Cr]?(e.protocol||"")+"//":"")+a+i+t+n+r}class Ci extends Error{constructor(t,n){super(t,n),this.name="FetchError",(n==null?void 0:n.cause)&&!this.cause&&(this.cause=n.cause)}}function Pi(e){var c,f,l,u,d;const t=((c=e.error)==null?void 0:c.message)||((f=e.error)==null?void 0:f.toString())||"",n=((l=e.request)==null?void 0:l.method)||((u=e.options)==null?void 0:u.method)||"GET",r=((d=e.request)==null?void 0:d.url)||String(e.request)||"/",a=`[${n}] ${JSON.stringify(r)}`,i=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${a}: ${i}${t?` ${t}`:""}`,s=new Ci(o,e.error?{cause:e.error}:void 0);for(const h of["request","options","response"])Object.defineProperty(s,h,{get(){return e[h]}});for(const[h,b]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(s,h,{get(){return e.response&&e.response[b]}});return s}const Ti=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function kn(e="GET"){return Ti.has(e.toUpperCase())}function Oi(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Ii=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Ri=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Li(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return Ri.test(t)?"json":Ii.has(t)||t.startsWith("text/")?"text":"blob"}function Ni(e,t,n=globalThis.Headers){const r={...t,...e};if((t==null?void 0:t.params)&&(e==null?void 0:e.params)&&(r.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),(t==null?void 0:t.query)&&(e==null?void 0:e.query)&&(r.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),(t==null?void 0:t.headers)&&(e==null?void 0:e.headers)){r.headers=new n((t==null?void 0:t.headers)||{});for(const[a,i]of new n((e==null?void 0:e.headers)||{}))r.headers.set(a,i)}return r}const Mi=new Set([408,409,425,429,500,502,503,504]),Hi=new Set([101,204,205,304]);function Pr(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=e;async function a(s){const c=s.error&&s.error.name==="AbortError"&&!s.options.timeout||!1;if(s.options.retry!==!1&&!c){let l;typeof s.options.retry=="number"?l=s.options.retry:l=kn(s.options.method)?0:1;const u=s.response&&s.response.status||500;if(l>0&&(Array.isArray(s.options.retryStatusCodes)?s.options.retryStatusCodes.includes(u):Mi.has(u))){const d=s.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),i(s.request,{...s.options,retry:l-1,timeout:s.options.timeout})}}const f=Pi(s);throw Error.captureStackTrace&&Error.captureStackTrace(f,i),f}const i=async function(c,f={}){var d;const l={request:c,options:Ni(f,e.defaults,n),response:void 0,error:void 0};if(l.options.method=(d=l.options.method)==null?void 0:d.toUpperCase(),l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=ki(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=xi(l.request,{...l.options.params,...l.options.query}))),l.options.body&&kn(l.options.method)&&(Oi(l.options.body)?(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")):("pipeTo"in l.options.body&&typeof l.options.body.pipeTo=="function"||typeof l.options.body.pipe=="function")&&("duplex"in l.options||(l.options.duplex="half"))),!l.options.signal&&l.options.timeout){const h=new r;setTimeout(()=>h.abort(),l.options.timeout),l.options.signal=h.signal}try{l.response=await t(l.request,l.options)}catch(h){return l.error=h,l.options.onRequestError&&await l.options.onRequestError(l),await a(l)}if(l.response.body&&!Hi.has(l.response.status)&&l.options.method!=="HEAD"){const h=(l.options.parseResponse?"json":l.options.responseType)||Li(l.response.headers.get("content-type")||"");switch(h){case"json":{const b=await l.response.text(),w=l.options.parseResponse||Za;l.response._data=w(b);break}case"stream":{l.response._data=l.response.body;break}default:l.response._data=await l.response[h]()}}return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await a(l)):l.response},o=async function(c,f){return(await i(c,f))._data};return o.raw=i,o.native=(...s)=>t(...s),o.create=(s={})=>Pr({...e,defaults:{...e.defaults,...s}}),o}const tn=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),ji=tn.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),zi=tn.Headers,Di=tn.AbortController,Fi=Pr({fetch:ji,Headers:zi,AbortController:Di}),$i=Fi,Ui=Wa().app,Bi=()=>Ui.baseURL;function Ot(e,t={},n){for(const r in e){const a=e[r],i=n?`${n}:${r}`:r;typeof a=="object"&&a!==null?Ot(a,t,i):typeof a=="function"&&(t[i]=a)}return t}const Wi={run:e=>e()},Yi=()=>Wi,Tr=typeof console.createTask<"u"?console.createTask:Yi;function qi(e,t){const n=t.shift(),r=Tr(n);return e.reduce((a,i)=>a.then(()=>r.run(()=>i(...t))),Promise.resolve())}function Ki(e,t){const n=t.shift(),r=Tr(n);return Promise.all(e.map(a=>r.run(()=>a(...t))))}function bt(e,t){for(const n of[...e])n(t)}class Vi{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const a=t;let i;for(;this._deprecatedHooks[t];)i=this._deprecatedHooks[t],t=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${a} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,a=(...i)=>(typeof r=="function"&&r(),r=void 0,a=void 0,n(...i));return r=this.hook(t,a),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const a of r)this.hook(t,a)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Ot(t),r=Object.keys(n).map(a=>this.hook(a,n[a]));return()=>{for(const a of r.splice(0,r.length))a()}}removeHooks(t){const n=Ot(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(qi,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Ki,t,...n)}callHookWith(t,n,...r){const a=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&bt(this._before,a);const i=t(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&a&&bt(this._after,a)}):(this._after&&a&&bt(this._after,a),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Gi(){return new Vi}function Xi(e={}){let t,n=!1;const r=o=>{if(t&&t!==o)throw new Error("Context conflict")};let a;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?a=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(a&&t===void 0){const o=a.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,s)=>{s||r(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,s)=>{r(o),t=o;try{return a?a.run(o,s):s()}finally{n||(t=void 0)}},async callAsync(o,s){t=o;const c=()=>{t=o},f=()=>t===o?c:void 0;It.add(f);try{const l=a?a.run(o,s):s();return n||(t=void 0),await l}finally{It.delete(f)}}}}function Ji(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=Xi({...e,...r})),t[n],t[n]}}}const tt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:{},xn="__unctx__",Qi=tt[xn]||(tt[xn]=Ji()),Zi=(e,t={})=>Qi.get(e,t),_n="__unctx_async_handlers__",It=tt[_n]||(tt[_n]=new Set);function Rt(e){const t=[];for(const a of It){const i=a();i&&t.push(i)}const n=()=>{for(const a of t)a()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(a=>{throw n(),a})),[r,n]}const Or=Zi("nuxt-app"),eo="__nuxt_plugin";function to(e){return e.map(n=>typeof n!="function"?null:n.length>1?r=>n(r,r.provide):n).filter(Boolean)}function de(e){return e[eo]=!0,e}function me(e,t,n){const r=()=>n?t(...n):t();return Or.callAsync(e,r)}function ae(){const e=Or.tryUse();if(!e){const t=br();if(!t)throw new Error("nuxt instance unavailable");return t.appContext.app.$nuxt}return e}function Ir(){return ae().$config}function wt(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function Lt(e,t,n=".",r){if(!wt(t))return Lt(e,{},n,r);const a=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(r&&r(a,i,o,n)||(Array.isArray(o)&&Array.isArray(a[i])?a[i]=[...o,...a[i]]:wt(o)&&wt(a[i])?a[i]=Lt(o,a[i],(n?`${n}.`:"")+i.toString(),r):a[i]=o))}return a}function Rr(e){return(...t)=>t.reduce((n,r)=>Lt(n,r,"",e),{})}const no=Rr(),ro=Rr((e,t,n)=>{if(e[t]!==void 0&&typeof n=="function")return e[t]=n(e[t]),!0});function ao(e,t){try{return t in e}catch{return!1}}var io=Object.defineProperty,oo=(e,t,n)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oe=(e,t,n)=>(oo(e,typeof t!="symbol"?t+"":t,n),n);class Nt extends Error{constructor(t,n={}){super(t,n),oe(this,"statusCode",500),oe(this,"fatal",!1),oe(this,"unhandled",!1),oe(this,"statusMessage"),oe(this,"data"),oe(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const t={message:this.message,statusCode:nt(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Lr(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}oe(Nt,"__h3_error__",!0);function Mt(e){var n,r;if(typeof e=="string")return new Nt(e);if(so(e))return e;const t=new Nt((r=(n=e.message)!=null?n:e.statusMessage)!=null?r:"",{cause:e.cause||e});if(ao(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=nt(e.statusCode,t.statusCode):e.status&&(t.statusCode=nt(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const a=t.statusMessage;Lr(t.statusMessage)!==a&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function so(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const lo={html:"text/html",json:"application/json"},co=/[^\u0009\u0020-\u007E]/g;function Lr(e=""){return e.replace(co,"")}function nt(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const fo=typeof setImmediate>"u"?e=>e():setImmediate;function uo(e,t,n){return n&&mo(e,n),new Promise(r=>{fo(()=>{e.handled||e.node.res.end(t),r()})})}function mo(e,t){t&&e.node.res.statusCode!==304&&!e.node.res.getHeader("content-type")&&e.node.res.setHeader("content-type",t)}function po(e,t,n=302){e.node.res.statusCode=nt(n,e.node.res.statusCode),e.node.res.setHeader("location",t);const a=`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t.replace(/"/g,"%22")}"></head></html>`;return uo(e,a,lo.html)}const Nr=()=>wr(ae().payload,"error"),De=e=>{const t=Mr(e);try{ae().callHook("app:error",t);const r=Nr();r.value=r.value||t}catch{throw t}return t},Mr=e=>{const t=Mt(e);return t.__nuxt_error=!0,t};function ho(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const a="$s"+n,i=ae(),o=wr(i.payload.state,a);if(o.value===void 0&&r){const s=r();if(Te(s))return i.payload.state[a]=s,s;o.value=s}return o}const Hr=()=>{var e;return(e=ae())==null?void 0:e.$router},vo=e=>e,jr=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:e.path||"/",r=mt(n,!0);if(r&&!(t!=null&&t.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(r&&en(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const a=Hr();{const i=ae();if(i.ssrContext&&i.ssrContext.event){const o=r?n:Er(Ir().app.baseURL,a.resolve(e).fullPath||"/");return i.callHook("app:redirected").then(()=>po(i.ssrContext.event,o,(t==null?void 0:t.redirectCode)||302))}}return r?(t!=null&&t.replace?location.replace(n):location.href=n,Promise.resolve()):t!=null&&t.replace?a.replace(e):a.push(e)},go="modulepreload",yo=function(e,t){return e.startsWith(".")?new URL(e,t).href:e},Sn={},he=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=yo(i,r),i in Sn)return;Sn[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let l=a.length-1;l>=0;l--){const u=a[l];if(u.href===i&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":go,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((l,u)=>{f.addEventListener("load",l),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},bo=(...e)=>e.find(t=>t!==void 0),wo="noopener noreferrer";function ko(e){const t=e.componentName||"NuxtLink";return ue({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:r}){const a=Hr(),i=R(()=>n.to||n.href||""),o=R(()=>n.external||n.target&&n.target!=="_self"?!0:typeof i.value=="object"?!1:i.value===""||mt(i.value,!0)),s=D(!1),c=void 0;return()=>{var h,b,w;if(!o.value)return q(Ta("RouterLink"),{ref:void 0,to:i.value,...s.value&&!n.custom?{class:n.prefetchedClass||e.prefetchedClass}:{},activeClass:n.activeClass||e.activeClass,exactActiveClass:n.exactActiveClass||e.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},r.default);const f=typeof i.value=="object"?(b=(h=a.resolve(i.value))==null?void 0:h.href)!=null?b:null:i.value||null,l=n.target||null,u=n.noRel?null:bo(n.rel,e.externalRelAttribute,f?wo:"")||null,d=()=>jr(f,{replace:n.replace});return n.custom?r.default?r.default({href:f,navigate:d,route:a.resolve(f),rel:u,target:l,isExternal:o.value,isActive:!1,isExactActive:!1}):null:q("a",{ref:c,href:f,rel:u,target:l},(w=r.default)==null?void 0:w.call(r))}}})}const Qc=ko({componentName:"NuxtLink"}),xo={};ro(xo);const _o=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let zr;const Me=e=>zr=e,Dr=Symbol();function Ht(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ae;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ae||(Ae={}));function So(){const e=kr(!0),t=e.run(()=>D({}));let n=[],r=[];const a=xr({install(i){Me(a),a._a=i,i.provide(Dr,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_o?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Fr=()=>{};function An(e,t,n,r=Fr){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Ra()&&La(a),a}function pe(e,...t){e.slice().forEach(n=>{n(...t)})}const Ao=e=>e();function jt(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Ht(a)&&Ht(r)&&e.hasOwnProperty(n)&&!Te(r)&&!Sr(r)?e[n]=jt(a,r):e[n]=r}return e}const Eo=Symbol();function Co(e){return!Ht(e)||!e.hasOwnProperty(Eo)}const{assign:ee}=Object;function Po(e){return!!(Te(e)&&e.effect)}function To(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let c;function f(){s||(n.state.value[e]=a?a():{});const l=Na(n.state.value[e]);return ee(l,i,Object.keys(o||{}).reduce((u,d)=>(u[d]=xr(R(()=>{Me(n);const h=n._s.get(e);return o[d].call(h,h)})),u),{}))}return c=$r(e,f,t,n,r,!0),c}function $r(e,t,n={},r,a,i){let o;const s=ee({actions:{}},n),c={deep:!0};let f,l,u=[],d=[],h;const b=r.state.value[e];!i&&!b&&(r.state.value[e]={}),D({});let w;function E(_){let x;f=l=!1,typeof _=="function"?(_(r.state.value[e]),x={type:Ae.patchFunction,storeId:e,events:h}):(jt(r.state.value[e],_),x={type:Ae.patchObject,payload:_,storeId:e,events:h});const $=w=Symbol();dt().then(()=>{w===$&&(f=!0)}),l=!0,pe(u,x,r.state.value[e])}const m=i?function(){const{state:x}=n,$=x?x():{};this.$patch(ie=>{ee(ie,$)})}:Fr;function p(){o.stop(),u=[],d=[],r._s.delete(e)}function y(_,x){return function(){Me(r);const $=Array.from(arguments),ie=[],ke=[];function Ca(U){ie.push(U)}function Pa(U){ke.push(U)}pe(d,{args:$,name:_,store:k,after:Ca,onError:Pa});let xe;try{xe=x.apply(this&&this.$id===e?this:k,$)}catch(U){throw pe(ke,U),U}return xe instanceof Promise?xe.then(U=>(pe(ie,U),U)).catch(U=>(pe(ke,U),Promise.reject(U))):(pe(ie,xe),xe)}}const S={_p:r,$id:e,$onAction:An.bind(null,d),$patch:E,$reset:m,$subscribe(_,x={}){const $=An(u,_,x.detached,()=>ie()),ie=o.run(()=>ut(()=>r.state.value[e],ke=>{(x.flush==="sync"?l:f)&&_({storeId:e,type:Ae.direct,events:h},ke)},ee({},c,x)));return $},$dispose:p},k=Ze(S);r._s.set(e,k);const A=(r._a&&r._a.runWithContext||Ao)(()=>r._e.run(()=>(o=kr()).run(t)));for(const _ in A){const x=A[_];if(Te(x)&&!Po(x)||Sr(x))i||(b&&Co(x)&&(Te(x)?x.value=b[_]:jt(x,b[_])),r.state.value[e][_]=x);else if(typeof x=="function"){const $=y(_,x);A[_]=$,s.actions[_]=x}}return ee(k,A),ee(Ia(k),A),Object.defineProperty(k,"$state",{get:()=>r.state.value[e],set:_=>{E(x=>{ee(x,_)})}}),r._p.forEach(_=>{ee(k,o.run(()=>_({store:k,app:r._a,pinia:r,options:s})))}),b&&i&&n.hydrate&&n.hydrate(k.$state,b),f=!0,l=!0,k}function Oo(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,c){const f=Oa();return s=s||(f?_r(Dr,null):null),s&&Me(s),s=zr,s._s.has(r)||(i?$r(r,t,a,s):To(r,a,s)),s._s.get(r)}return o.$id=r,o}const Io=de(e=>{const t=So();return e.vueApp.use(t),Me(t),e.payload.pinia=t.state.value,{provide:{pinia:t}}}),kt={},Ro=de(e=>{for(const t in kt)e.vueApp.component(t,kt[t]),e.vueApp.component("Lazy"+t,kt[t])});function Lo(e){return Array.isArray(e)?e:[e]}const Zc=["meta","link","base"],No=["title","titleTemplate","script","style","noscript"],Ge=["base","meta","link","style","script","noscript"],Mo=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Ho=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Ur=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],jo=["getActiveHead","useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe"];function nn(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function En(e){return e._h||nn(e._d?e._d:`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Br(e,t){const{props:n,tag:r}=e;if(Ho.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const a=["id"];r==="meta"&&a.push("name","property","http-equiv");for(const i of a)if(typeof n[i]<"u"){const o=String(n[i]);return t&&!t(o)?!1:`${r}:${i}:${o}`}return!1}function Cn(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function zo(e,t,n){const r={tag:e,props:await Wr(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[["script","noscript","style"].includes(e)?"innerHTML":"textContent"]:t},["templateParams","titleTemplate"].includes(e))};return Ur.forEach(a=>{const i=typeof r.props[a]<"u"?r.props[a]:n[a];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(a)||No.includes(r.tag))&&(r[a==="children"?"innerHTML":a]=i),delete r.props[a])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(a=>({...r,props:{...r.props,content:a}})):r}function Do(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Wr(e,t){for(const n of Object.keys(e)){if(n==="class"){e[n]=Do(e[n]);continue}if(e[n]instanceof Promise&&(e[n]=await e[n]),!t&&!Ur.includes(n)){const r=String(e[n]),a=n.startsWith("data-");r==="true"||r===""?e[n]=a?"true":!0:e[n]||(a&&r==="false"?e[n]="false":delete e[n])}}return e}const Fo=10;async function $o(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r<"u"&&Mo.includes(n)).forEach(([n,r])=>{const a=Lo(r);t.push(...a.map(i=>zo(n,i,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e=e._i,e.mode&&(n._m=e.mode),n._p=(e._i<<Fo)+r,n))}const Pn={base:-10,title:10},Tn={critical:-80,high:-10,low:20};function rt(e){let t=100;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props["http-equiv"]==="content-security-policy"&&(t=-30),e.props.charset&&(t=-20),e.props.name==="viewport"&&(t=-15)):e.tag==="link"&&e.props.rel==="preconnect"?t=20:e.tag in Pn&&(t=Pn[e.tag]),typeof n=="string"&&n in Tn?t+Tn[n]:t)}const Uo=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Yr=["onload","onerror","onabort","onprogress","onloadstart"],J="%separator";function Xe(e,t,n){if(typeof e!="string"||!e.includes("%"))return e;function r(o){let s;return["s","pageTitle"].includes(o)?s=t.pageTitle:o.includes(".")?s=o.split(".").reduce((c,f)=>c&&c[f]||void 0,t):s=t[o],typeof s<"u"?(s||"").replace(/"/g,'\\"'):!1}let a=e;try{a=decodeURI(e)}catch{}return(a.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const s=r(o.slice(1));typeof s=="string"&&(e=e.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(c,f)=>`${s}${f}`).trim())}),e.includes(J)&&(e.endsWith(J)&&(e=e.slice(0,-J.length).trim()),e.startsWith(J)&&(e=e.slice(J.length).trim()),e=e.replace(new RegExp(`\\${J}\\s*\\${J}`,"g"),J),e=Xe(e,{separator:n},n)),e}async function Bo(e){const t={tag:e.tagName.toLowerCase(),props:await Wr(e.getAttributeNames().reduce((n,r)=>({...n,[r]:e.getAttribute(r)}),{})),innerHTML:e.innerHTML};return t._d=Br(t),t}async function qr(e,t={}){var l;const n=t.document||e.resolvedOptions.document;if(!n)return;const r={shouldRender:e.dirty,tags:[]};if(await e.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const a=(await e.resolveTags()).map(u=>({tag:u,id:Ge.includes(u.tag)?En(u):u.tag,shouldRender:!0}));let i=e._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const u of["body","head"]){const d=(l=n==null?void 0:n[u])==null?void 0:l.children;for(const h of[...d].filter(b=>Ge.includes(b.tagName.toLowerCase())))i.elMap[h.getAttribute("data-hid")||En(await Bo(h))]=h}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(u,d,h){const b=`${u}:${d}`;i.sideEffects[b]=h,delete i.pendingSideEffects[b]}function s({id:u,$el:d,tag:h}){const b=h.tag.endsWith("Attrs");i.elMap[u]=d,b||(["textContent","innerHTML"].forEach(w=>{h[w]&&h[w]!==d[w]&&(d[w]=h[w])}),o(u,"el",()=>{i.elMap[u].remove(),delete i.elMap[u]})),Object.entries(h.props).forEach(([w,E])=>{const m=`attr:${w}`;if(w==="class")for(const p of(E||"").split(" ").filter(Boolean))b&&o(u,`${m}:${p}`,()=>d.classList.remove(p)),!d.classList.contains(p)&&d.classList.add(p);else d.getAttribute(w)!==E&&d.setAttribute(w,E===!0?"":String(E)),b&&o(u,m,()=>d.removeAttribute(w))})}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const u of a){const{tag:d,shouldRender:h,id:b}=u;if(!!h){if(d.tag==="title"){n.title=d.textContent;continue}u.$el=u.$el||i.elMap[b],u.$el?s(u):Ge.includes(d.tag)&&c.push(u)}}for(const u of c){const d=u.tag.tagPosition||"head";u.$el=n.createElement(u.tag.tag),s(u),f[d]=f[d]||n.createDocumentFragment(),f[d].appendChild(u.$el)}for(const u of a)await e.hooks.callHook("dom:renderTag",u,n,o);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose),Object.values(i.pendingSideEffects).forEach(u=>u()),e._dom=i,e.dirty=!1,await e.hooks.callHook("dom:rendered",{renders:a})}async function Kr(e,t={}){const n=t.delayFn||(r=>setTimeout(r,10));return e._domUpdatePromise=e._domUpdatePromise||new Promise(r=>n(async()=>{await qr(e,t),delete e._domUpdatePromise,r()}))}function Wo(e){return t=>{var r,a;const n=((a=(r=t.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:a.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){Kr(i,e)}}}}}const Yo=["templateParams","htmlAttrs","bodyAttrs"],qo={hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const n=Br(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(r=>{const a=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=t[a];if(i){let s=r==null?void 0:r.tagDuplicateStrategy;if(!s&&Yo.includes(r.tag)&&(s="merge"),s==="merge"){const c=i.props;["class","style"].forEach(f=>{c[f]&&(r.props[f]?(f==="style"&&!c[f].endsWith(";")&&(c[f]+=";"),r.props[f]=`${c[f]} ${r.props[f]}`):r.props[f]=c[f])}),t[a].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(rt(r)>rt(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Ge.includes(r.tag)&&o===0){delete t[a];return}t[a]=r});const n=[];Object.values(t).forEach(r=>{const a=r._duped;delete r._duped,n.push(r),a&&n.push(...a)}),e.tags=n,e.tags=e.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Ko={mode:"server",hooks:{"tags:resolve":function(e){const t={};e.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{t[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(t).length&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Vo=["script","link","bodyAttrs"];function Go(e){const t={},n={};return Object.entries(e.props).forEach(([r,a])=>{r.startsWith("on")&&typeof a=="function"?(Yr.includes(r)&&(t[r]=`this.dataset.${r} = true`),n[r]=a):t[r]=a}),{props:t,eventHandlers:n}}const Xo=e=>({hooks:{"tags:resolve":function(t){for(const n of t.tags)if(Vo.includes(n.tag)){const{props:r,eventHandlers:a}=Go(n);n.props=r,Object.keys(a).length&&((n.props.src||n.props.href)&&(n.key=n.key||nn(n.props.src||n.props.href)),n._eventHandlers=a)}},"dom:renderTag":function(t,n,r){if(!t.tag._eventHandlers)return;const a=t.tag.tag==="bodyAttrs"?n.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([i,o])=>{const s=`${t.tag._d||t.tag._p}:${i}`,c=i.slice(2).toLowerCase(),f=`data-h-${c}`;if(r(t.id,s,()=>{}),t.$el.hasAttribute(f))return;t.$el.setAttribute(f,"");let l;const u=d=>{o(d),l==null||l.disconnect()};i in t.$el.dataset?u(new Event(i.replace("on",""))):Yr.includes(i)&&typeof MutationObserver<"u"?(l=new MutationObserver(d=>{d.some(b=>b.attributeName===`data-${i}`)&&(u(new Event(i.replace("on",""))),l==null||l.disconnect())}),l.observe(t.$el,{attributes:!0})):a.addEventListener(c,u),r(t.id,s,()=>{l==null||l.disconnect(),a.removeEventListener(c,u),t.$el.removeAttribute(f)})})}}}),Jo=["link","style","script","noscript"],Qo={hooks:{"tag:normalise":({tag:e})=>{e.key&&Jo.includes(e.tag)&&(e.props["data-hid"]=e._h=nn(e.key))}}},Zo={hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(a=>a._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of Uo)for(const a of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=t(a.tagPriority.replace(n,""));typeof i<"u"&&(a._p=i+r)}e.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>rt(n)-rt(r))}}},es={meta:"content",link:"href",htmlAttrs:"lang"},ts=e=>({hooks:{"tags:resolve":t=>{var s;const{tags:n}=t,r=(s=n.find(c=>c.tag==="title"))==null?void 0:s.textContent,a=n.findIndex(c=>c.tag==="templateParams"),i=a!==-1?n[a].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=Xe(i.pageTitle||r||"",i,o);for(const c of n.filter(f=>f.processTemplateParams!==!1)){const f=es[c.tag];f&&typeof c.props[f]=="string"?c.props[f]=Xe(c.props[f],i,o):(c.processTemplateParams===!0||["titleTemplate","title"].includes(c.tag))&&["innerHTML","textContent"].forEach(l=>{typeof c[l]=="string"&&(c[l]=Xe(c[l],i,o))})}e._templateParams=i,e._separator=o,t.tags=n.filter(c=>c.tag!=="templateParams")}}}),ns={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(a=>a.tag==="titleTemplate");const r=t.findIndex(a=>a.tag==="title");if(r!==-1&&n!==-1){const a=Cn(t[n].textContent,t[r].textContent);a!==null?t[r].textContent=a||t[r].textContent:delete t[r]}else if(n!==-1){const a=Cn(t[n].textContent);a!==null&&(t[n].textContent=a,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}},rs={hooks:{"tags:afterResolve":function(e){for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&["application/ld+json","application/json"].includes(t.props.type)?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let Vr;function as(e={}){const t=is(e);return t.use(Wo()),Vr=t}function On(e,t){return!e||e==="server"&&t||e==="client"&&!t}function is(e={}){const t=Gi();t.addHooks(e.hooks||{}),e.document=e.document||void 0;const n=!e.document,r=()=>{s.dirty=!0,t.callHook("entries:updated",s)};let a=0,i=[];const o=[],s={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return i},use(c){const f=typeof c=="function"?c(s):c;(!f.key||!o.some(l=>l.key===f.key))&&(o.push(f),On(f.mode,n)&&t.addHooks(f.hooks||{}))},push(c,f){f==null||delete f.head;const l={_i:a++,input:c,...f};return On(l.mode,n)&&(i.push(l),r()),{dispose(){i=i.filter(u=>u._i!==l._i),t.callHook("entries:updated",s),r()},patch(u){i=i.map(d=>(d._i===l._i&&(d.input=l.input=u),d)),r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await t.callHook("entries:resolve",c);for(const f of c.entries){const l=f.resolvedInput||f.input;if(f.resolvedInput=await(f.transform?f.transform(l):l),f.resolvedInput)for(const u of await $o(f)){const d={tag:u,entry:f,resolvedOptions:s.resolvedOptions};await t.callHook("tag:normalise",d),c.tags.push(d.tag)}}return await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c),c.tags},ssr:n};return[qo,Ko,Xo,Qo,Zo,ts,ns,rs,...(e==null?void 0:e.plugins)||[]].forEach(c=>s.use(c)),s.hooks.callHook("init",s),s}function os(){return Vr}const ss=Qt.startsWith("3");function ls(e){return typeof e=="function"?e():Ar(e)}function at(e,t=""){if(e instanceof Promise)return e;const n=ls(e);return!e||!n?n:Array.isArray(n)?n.map(r=>at(r,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,a])=>r==="titleTemplate"||r.startsWith("on")?[r,Ar(a)]:[r,at(a,r)])):n}const cs={hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=at(t.input)}}},Gr="usehead";function fs(e){return{install(n){ss&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Gr,e))}}.install}function us(e={}){e.domDelayFn=e.domDelayFn||(n=>dt(()=>setTimeout(()=>n(),0)));const t=as(e);return t.use(cs),t.install=fs(t),t}const In=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{},Rn="__unhead_injection_handler__";function ds(){if(Rn in In)return In[Rn]();const e=_r(Gr);return e||os()}function Xr(e,t={}){const n=t.head||ds();if(n)return n.ssr?n.push(e,t):ms(n,e,t)}function ms(e,t,n={}){const r=D(!1),a=D({});Ma(()=>{a.value=r.value?{}:at(t)});const i=e.push(a.value,n);return ut(a,o=>{i.patch(o)}),br(),i}const ps=["injectHead"];[...ps,...jo];function hs(e,t){const n=us(t||{}),r={unhead:n,install(a){Qt.startsWith("3")&&(a.config.globalProperties.$head=n,a.provide("usehead",n))},use(a){n.use(a)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(a,i){return n.push(a,i)},addEntry(a,i){return n.push(a,i)},addHeadObjs(a,i){return n.push(a,i)},addReactiveEntry(a,i){const o=Xr(a,i);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(a,i){i?qr(n,{document:a}):Kr(n,{delayFn:o=>setTimeout(()=>o(),50),document:a})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=r.addHeadObjs,n.updateDOM=r.updateDOM,n.hooks.hook("dom:beforeRender",a=>{for(const i of r.hooks["before:dom"])i()===!1&&(a.shouldRender=!1)}),e&&r.addHeadObjs(e),r}Qt.startsWith("2.");const vs={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[{children:"Javascript is required"}]},zt=!1,gs=!1,ys=de(e=>{const t=hs();t.push(vs),e.vueApp.use(t),e._useHead=Xr,e.ssrContext.renderMeta=async()=>{const{renderSSRHead:n}=await he(()=>import("./_nuxt/index.8304acc9.js"),[],import.meta.url),r=await n(t.unhead);return{...r,bodyScriptsPrepend:r.bodyTagsOpen,bodyScripts:r.bodyTags}}}),N={},M={},H={},j={},z={};var cr,fr,ur,dr,mr,pr,hr,vr,gr,yr;const Ln=[{name:(cr=N==null?void 0:N.name)!=null?cr:"index",path:(fr=N==null?void 0:N.path)!=null?fr:"/",file:"/Users/valerameskov/Desktop/GITHUB/portfolio/pages/index.vue",children:[],meta:N,alias:(N==null?void 0:N.alias)||[],redirect:(N==null?void 0:N.redirect)||void 0,component:()=>he(()=>import("./_nuxt/index.cf6341ad.js"),[globalThis.__buildAssetsURL("index.cf6341ad.js"),globalThis.__buildAssetsURL("Hero.e67b5d0d.js"),globalThis.__buildAssetsURL("ButtonText.d3ce849b.js"),globalThis.__buildAssetsURL("ButtonText.f9ae2cbc.css"),globalThis.__buildAssetsURL("Hero.45d1fd57.css"),globalThis.__buildAssetsURL("About.04c4c328.js"),globalThis.__buildAssetsURL("TextBorder.d8c61406.js"),globalThis.__buildAssetsURL("About.4200e330.css"),globalThis.__buildAssetsURL("Experience.8a7e0a5a.js"),globalThis.__buildAssetsURL("constants.3b767a24.js"),globalThis.__buildAssetsURL("Experience.3bf2e4de.css"),globalThis.__buildAssetsURL("Projects.c4f3c310.js"),globalThis.__buildAssetsURL("Projects.90320096.css")],import.meta.url).then(e=>e.default||e)},{name:(ur=M==null?void 0:M.name)!=null?ur:"main-About",path:(dr=M==null?void 0:M.path)!=null?dr:"/main/About",file:"/Users/valerameskov/Desktop/GITHUB/portfolio/pages/main/About.vue",children:[],meta:M,alias:(M==null?void 0:M.alias)||[],redirect:(M==null?void 0:M.redirect)||void 0,component:()=>he(()=>import("./_nuxt/About.04c4c328.js"),[globalThis.__buildAssetsURL("About.04c4c328.js"),globalThis.__buildAssetsURL("TextBorder.d8c61406.js"),globalThis.__buildAssetsURL("ButtonText.d3ce849b.js"),globalThis.__buildAssetsURL("ButtonText.f9ae2cbc.css"),globalThis.__buildAssetsURL("About.4200e330.css")],import.meta.url).then(e=>e.default||e)},{name:(mr=H==null?void 0:H.name)!=null?mr:"main-Experience",path:(pr=H==null?void 0:H.path)!=null?pr:"/main/Experience",file:"/Users/valerameskov/Desktop/GITHUB/portfolio/pages/main/Experience.vue",children:[],meta:H,alias:(H==null?void 0:H.alias)||[],redirect:(H==null?void 0:H.redirect)||void 0,component:()=>he(()=>import("./_nuxt/Experience.8a7e0a5a.js"),[globalThis.__buildAssetsURL("Experience.8a7e0a5a.js"),globalThis.__buildAssetsURL("TextBorder.d8c61406.js"),globalThis.__buildAssetsURL("ButtonText.d3ce849b.js"),globalThis.__buildAssetsURL("ButtonText.f9ae2cbc.css"),globalThis.__buildAssetsURL("constants.3b767a24.js"),globalThis.__buildAssetsURL("Experience.3bf2e4de.css")],import.meta.url).then(e=>e.default||e)},{name:(hr=j==null?void 0:j.name)!=null?hr:"main-Hero",path:(vr=j==null?void 0:j.path)!=null?vr:"/main/Hero",file:"/Users/valerameskov/Desktop/GITHUB/portfolio/pages/main/Hero.vue",children:[],meta:j,alias:(j==null?void 0:j.alias)||[],redirect:(j==null?void 0:j.redirect)||void 0,component:()=>he(()=>import("./_nuxt/Hero.e67b5d0d.js"),[globalThis.__buildAssetsURL("Hero.e67b5d0d.js"),globalThis.__buildAssetsURL("ButtonText.d3ce849b.js"),globalThis.__buildAssetsURL("ButtonText.f9ae2cbc.css"),globalThis.__buildAssetsURL("Hero.45d1fd57.css")],import.meta.url).then(e=>e.default||e)},{name:(gr=z==null?void 0:z.name)!=null?gr:"main-Projects",path:(yr=z==null?void 0:z.path)!=null?yr:"/main/Projects",file:"/Users/valerameskov/Desktop/GITHUB/portfolio/pages/main/Projects.vue",children:[],meta:z,alias:(z==null?void 0:z.alias)||[],redirect:(z==null?void 0:z.redirect)||void 0,component:()=>he(()=>import("./_nuxt/Projects.c4f3c310.js"),[globalThis.__buildAssetsURL("Projects.c4f3c310.js"),globalThis.__buildAssetsURL("TextBorder.d8c61406.js"),globalThis.__buildAssetsURL("ButtonText.d3ce849b.js"),globalThis.__buildAssetsURL("ButtonText.f9ae2cbc.css"),globalThis.__buildAssetsURL("constants.3b767a24.js"),globalThis.__buildAssetsURL("Projects.90320096.css")],import.meta.url).then(e=>e.default||e)}],bs={scrollBehavior(e,t,n){const r=ae();let a=n||void 0;if(!a&&t&&e&&e.meta.scrollToTop!==!1&&ws(t,e)&&(a={left:0,top:0}),e.path===t.path){if(t.hash&&!e.hash)return{left:0,top:0};if(e.hash)return{el:e.hash,top:Nn(e.hash)}}const i=s=>{var c;return!!((c=s.meta.pageTransition)!=null?c:zt)},o=i(t)&&i(e)?"page:transition:finish":"page:finish";return new Promise(s=>{r.hooks.hookOnce(o,async()=>{await dt(),e.hash&&(a={el:e.hash,top:Nn(e.hash)}),s(a)})})}};function Nn(e){try{const t=document.querySelector(e);if(t)return parseFloat(getComputedStyle(t).scrollMarginTop)}catch{}return 0}function ws(e,t){const n=e.matched[0]===t.matched[0];return!!(!n||n&&JSON.stringify(e.params)!==JSON.stringify(t.params))}const ks={},Q={...ks,...bs},xs=vo(async e=>{var a;let t,n;if(!((a=e.meta)!=null&&a.validate))return;const r=([t,n]=Rt(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t);return typeof r=="boolean"?r:Mr(r)}),_s=[xs],xt={},Ss=de(async e=>{var h,b,w,E;let t,n,r=Ir().app.baseURL;Q.hashMode&&!r.includes("#")&&(r+="#");const a=(b=(h=Q.history)==null?void 0:h.call(Q,r))!=null?b:Ya(r),i=(E=(w=Q.routes)==null?void 0:w.call(Q,Ln))!=null?E:Ln,o=e.ssrContext.url,s=qa({...Q,history:a,routes:i});e.vueApp.use(s);const c=yn(s.currentRoute.value);s.afterEach((m,p)=>{c.value=p}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const f=yn(s.resolve(o)),l=()=>{f.value=s.currentRoute.value};e.hook("page:finish",l),s.afterEach((m,p)=>{var y,S,k,C;((S=(y=m.matched[0])==null?void 0:y.components)==null?void 0:S.default)===((C=(k=p.matched[0])==null?void 0:k.components)==null?void 0:C.default)&&l()});const u={};for(const m in f.value)u[m]=R(()=>f.value[m]);e._route=Ze(u),e._middleware=e._middleware||{global:[],named:{}},Nr();try{[t,n]=Rt(()=>s.push(o)),await t,n(),[t,n]=Rt(()=>s.isReady()),await t,n()}catch(m){me(e,De,[m])}const d=ho("_layout");return s.beforeEach(async(m,p)=>{var S,k;m.meta=Ze(m.meta),e.isHydrating&&(m.meta.layout=(S=d.value)!=null?S:m.meta.layout),e._processingMiddleware=!0;const y=new Set([..._s,...e._middleware.global]);for(const C of m.matched){const A=C.meta.middleware;if(!!A)if(Array.isArray(A))for(const _ of A)y.add(_);else y.add(A)}for(const C of y){const A=typeof C=="string"?e._middleware.named[C]||await((k=xt[C])==null?void 0:k.call(xt).then(x=>x.default||x)):C;if(!A)throw new Error(`Unknown route middleware: '${C}'.`);const _=await me(e,A,[m,p]);if(_===!1||_ instanceof Error){const x=_||Mt({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await me(e,De,[x]),!1}if(_||_===!1)return _}}),s.afterEach(async m=>{if(delete e._processingMiddleware,m.matched.length===0)me(e,De,[Mt({statusCode:404,fatal:!1,statusMessage:`Page not found: ${m.fullPath}`})]);else{const p=m.fullPath||"/";Ai(p,o)||await me(e,jr,[p])}}),e.hooks.hookOnce("app:created",async()=>{try{await s.replace({...s.resolve(o),name:void 0,force:!0})}catch(m){me(e,De,[m])}}),{provide:{router:s}}});function Mn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mn(Object(n),!0).forEach(function(r){I(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function it(e){return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(e)}function As(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Es(e,t,n){return t&&Hn(e.prototype,t),n&&Hn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rn(e,t){return Ps(e)||Os(e,t)||Jr(e,t)||Rs()}function He(e){return Cs(e)||Ts(e)||Jr(e)||Is()}function Cs(e){if(Array.isArray(e))return Dt(e)}function Ps(e){if(Array.isArray(e))return e}function Ts(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Os(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Jr(e,t){if(!!e){if(typeof e=="string")return Dt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dt(e,t)}}function Dt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Is(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var jn=function(){},Qr={},Ls={},Zr=null,ea={mark:jn,measure:jn};try{typeof MutationObserver<"u"&&(Zr=MutationObserver),typeof performance<"u"&&(ea=performance)}catch{}var Ns=Qr.navigator||{},zn=Ns.userAgent,Dn=zn===void 0?"":zn,te=Qr,T=Ls,Fn=Zr,Fe=ea;te.document;var X=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",ta=~Dn.indexOf("MSIE")||~Dn.indexOf("Trident/"),$e,Ue,Be,We,Ye,K="___FONT_AWESOME___",Ft=16,na="fa",ra="svg-inline--fa",ce="data-fa-i2svg",$t="data-fa-pseudo-element",Ms="data-fa-pseudo-element-pending",an="data-prefix",on="data-icon",$n="fontawesome-i2svg",Hs="async",js=["HTML","HEAD","STYLE","SCRIPT"],aa=function(){try{return!0}catch{return!1}}(),P="classic",O="sharp",sn=[P,O];function je(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[P]}})}var Oe=je(($e={},I($e,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),I($e,O,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),$e)),Ie=je((Ue={},I(Ue,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I(Ue,O,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ue)),Re=je((Be={},I(Be,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I(Be,O,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Be)),zs=je((We={},I(We,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I(We,O,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),We)),Ds=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ia="fa-layers-text",Fs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$s=je((Ye={},I(Ye,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I(Ye,O,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ye)),oa=[1,2,3,4,5,6,7,8,9,10],Us=oa.concat([11,12,13,14,15,16,17,18,19,20]),Bs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],se={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Le=new Set;Object.keys(Ie[P]).map(Le.add.bind(Le));Object.keys(Ie[O]).map(Le.add.bind(Le));var Ws=[].concat(sn,He(Le),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",se.GROUP,se.SWAP_OPACITY,se.PRIMARY,se.SECONDARY]).concat(oa.map(function(e){return"".concat(e,"x")})).concat(Us.map(function(e){return"w-".concat(e)})),Ee=te.FontAwesomeConfig||{};function Ys(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qs(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Ks=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ks.forEach(function(e){var t=rn(e,2),n=t[0],r=t[1],a=qs(Ys(n));a!=null&&(Ee[r]=a)})}var sa={styleDefault:"solid",familyDefault:"classic",cssPrefix:na,replacementClass:ra,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ee.familyPrefix&&(Ee.cssPrefix=Ee.familyPrefix);var be=v(v({},sa),Ee);be.autoReplaceSvg||(be.observeMutations=!1);var g={};Object.keys(sa).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(n){be[e]=n,Ce.forEach(function(r){return r(g)})},get:function(){return be[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){be.cssPrefix=t,Ce.forEach(function(n){return n(g)})},get:function(){return be.cssPrefix}});te.FontAwesomeConfig=g;var Ce=[];function Vs(e){return Ce.push(e),function(){Ce.splice(Ce.indexOf(e),1)}}var Z=Ft,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gs(e){if(!(!e||!X)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(t,r),e}}var Xs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ne(){for(var e=12,t="";e-- >0;)t+=Xs[Math.random()*62|0];return t}function we(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ln(e){return e.classList?we(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function la(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Js(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(la(e[n]),'" ')},"").trim()}function pt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function cn(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function Qs(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:f}}function Zs(e){var t=e.transform,n=e.width,r=n===void 0?Ft:n,a=e.height,i=a===void 0?Ft:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&ta?c+="translate(".concat(t.x/Z-r/2,"em, ").concat(t.y/Z-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/Z,"em), calc(-50% + ").concat(t.y/Z,"em)) "):c+="translate(".concat(t.x/Z,"em, ").concat(t.y/Z,"em) "),c+="scale(".concat(t.size/Z*(t.flipX?-1:1),", ").concat(t.size/Z*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var el=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ca(){var e=na,t=ra,n=g.cssPrefix,r=g.replacementClass,a=el;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Un=!1;function _t(){g.autoAddCss&&!Un&&(Gs(ca()),Un=!0)}var tl={mixout:function(){return{dom:{css:ca,insertCss:_t}}},hooks:function(){return{beforeDOMElementCreation:function(){_t()},beforeI2svg:function(){_t()}}}},V=te||{};V[K]||(V[K]={});V[K].styles||(V[K].styles={});V[K].hooks||(V[K].hooks={});V[K].shims||(V[K].shims=[]);var W=V[K],fa=[],nl=function e(){T.removeEventListener("DOMContentLoaded",e),ot=1,fa.map(function(t){return t()})},ot=!1;X&&(ot=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),ot||T.addEventListener("DOMContentLoaded",nl));function rl(e){!X||(ot?setTimeout(e,0):fa.push(e))}function ze(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?la(e):"<".concat(t," ").concat(Js(r),">").concat(i.map(ze).join(""),"</").concat(t,">")}function Bn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var al=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},St=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?al(n,a):n,c,f,l;for(r===void 0?(c=1,l=t[i[0]]):(c=0,l=r);c<o;c++)f=i[c],l=s(l,t[f],f,t);return l};function il(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ut(e){var t=il(e);return t.length===1?t[0].toString(16):null}function ol(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Wn(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Bt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Wn(t);typeof W.hooks.addPack=="function"&&!a?W.hooks.addPack(e,Wn(t)):W.styles[e]=v(v({},W.styles[e]||{}),i),e==="fas"&&Bt("fa",t)}var qe,Ke,Ve,ve=W.styles,sl=W.shims,ll=(qe={},I(qe,P,Object.values(Re[P])),I(qe,O,Object.values(Re[O])),qe),fn=null,ua={},da={},ma={},pa={},ha={},cl=(Ke={},I(Ke,P,Object.keys(Oe[P])),I(Ke,O,Object.keys(Oe[O])),Ke);function fl(e){return~Ws.indexOf(e)}function ul(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!fl(a)?a:null}var va=function(){var t=function(i){return St(ve,function(o,s,c){return o[c]=St(s,i,{}),o},{})};ua=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),da=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),ha=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in ve||g.autoFetchSvg,r=St(sl,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});ma=r.names,pa=r.unicodes,fn=ht(g.styleDefault,{family:g.familyDefault})};Vs(function(e){fn=ht(e.styleDefault,{family:g.familyDefault})});va();function un(e,t){return(ua[e]||{})[t]}function dl(e,t){return(da[e]||{})[t]}function le(e,t){return(ha[e]||{})[t]}function ga(e){return ma[e]||{prefix:null,iconName:null}}function ml(e){var t=pa[e],n=un("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ne(){return fn}var dn=function(){return{prefix:null,iconName:null,rest:[]}};function ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?P:n,a=Oe[r][e],i=Ie[r][e]||Ie[r][a],o=e in W.styles?e:null;return i||o||null}var Yn=(Ve={},I(Ve,P,Object.keys(Re[P])),I(Ve,O,Object.keys(Re[O])),Ve);function vt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},I(t,P,"".concat(g.cssPrefix,"-").concat(P)),I(t,O,"".concat(g.cssPrefix,"-").concat(O)),t),o=null,s=P;(e.includes(i[P])||e.some(function(f){return Yn[P].includes(f)}))&&(s=P),(e.includes(i[O])||e.some(function(f){return Yn[O].includes(f)}))&&(s=O);var c=e.reduce(function(f,l){var u=ul(g.cssPrefix,l);if(ve[l]?(l=ll[s].includes(l)?zs[s][l]:l,o=l,f.prefix=l):cl[s].indexOf(l)>-1?(o=l,f.prefix=ht(l,{family:s})):u?f.iconName=u:l!==g.replacementClass&&l!==i[P]&&l!==i[O]&&f.rest.push(l),!a&&f.prefix&&f.iconName){var d=o==="fa"?ga(f.iconName):{},h=le(f.prefix,f.iconName);d.prefix&&(o=null),f.iconName=d.iconName||h||f.iconName,f.prefix=d.prefix||f.prefix,f.prefix==="far"&&!ve.far&&ve.fas&&!g.autoFetchSvg&&(f.prefix="fas")}return f},dn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===O&&(ve.fass||g.autoFetchSvg)&&(c.prefix="fass",c.iconName=le(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=ne()||"fas"),c}var pl=function(){function e(){As(this,e),this.definitions={}}return Es(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=v(v({},n.definitions[s]||{}),o[s]),Bt(s,o[s]);var c=Re[P][s];c&&Bt(c,o[s]),va()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,f=o.icon,l=f[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(n[s][u]=f)}),n[s][c]=f}),n}}]),e}(),qn=[],ge={},ye={},hl=Object.keys(ye);function vl(e,t){var n=t.mixoutsTo;return qn=e,ge={},Object.keys(ye).forEach(function(r){hl.indexOf(r)===-1&&delete ye[r]}),qn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),it(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ge[o]||(ge[o]=[]),ge[o].push(i[o])})}r.provides&&r.provides(ye)}),n}function Wt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ge[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ge[e]||[];a.forEach(function(i){i.apply(null,n)})}function G(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ye[e]?ye[e].apply(null,t):void 0}function Yt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ne();if(!!t)return t=le(n,t)||t,Bn(ya.definitions,n,t)||Bn(W.styles,n,t)}var ya=new pl,gl=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,fe("noAuto")},yl={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(fe("beforeI2svg",t),G("pseudoElements2svg",t),G("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,rl(function(){wl({autoReplaceSvgRoot:n}),fe("watch",t)})}},bl={icon:function(t){if(t===null)return null;if(it(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:le(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ht(t[0]);return{prefix:r,iconName:le(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(Ds))){var a=vt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ne(),iconName:le(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ne();return{prefix:i,iconName:le(i,t)||t}}}},F={noAuto:gl,config:g,dom:yl,parse:bl,library:ya,findIconDefinition:Yt,toHtml:ze},wl=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?T:n;(Object.keys(W.styles).length>0||g.autoFetchSvg)&&X&&g.autoReplaceSvg&&F.dom.i2svg({node:r})};function gt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ze(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!X){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function kl(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(cn(o)&&n.found&&!r.found){var s=n.width,c=n.height,f={x:s/c/2,y:.5};a.style=pt(v(v({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function xl(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},a),{},{id:o}),children:r}]}]}function mn(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,f=e.maskId,l=e.titleId,u=e.extra,d=e.watchable,h=d===void 0?!1:d,b=r.found?r:n,w=b.width,E=b.height,m=a==="fak",p=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(x){return u.classes.indexOf(x)===-1}).filter(function(x){return x!==""||!!x}).concat(u.classes).join(" "),y={children:[],attributes:v(v({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},S=m&&!~u.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};h&&(y.attributes[ce]=""),c&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(l||Ne())},children:[c]}),delete y.attributes.title);var k=v(v({},y),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:v(v({},S),u.styles)}),C=r.found&&n.found?G("generateAbstractMask",k)||{children:[],attributes:{}}:G("generateAbstractIcon",k)||{children:[],attributes:{}},A=C.children,_=C.attributes;return k.children=A,k.attributes=_,s?xl(k):kl(k)}function Kn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,f=v(v(v({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(f[ce]="");var l=v({},o.styles);cn(a)&&(l.transform=Zs({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var u=pt(l);u.length>0&&(f.style=u);var d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function _l(e){var t=e.content,n=e.title,r=e.extra,a=v(v(v({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=pt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var At=W.styles;function qt(e){var t=e[0],n=e[1],r=e.slice(4),a=rn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(se.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(se.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(se.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Sl={found:!1,width:512,height:512};function Al(e,t){!aa&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Kt(e,t){var n=t;return t==="fa"&&g.styleDefault!==null&&(t=ne()),new Promise(function(r,a){if(G("missingIconAbstract"),n==="fa"){var i=ga(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&At[t]&&At[t][e]){var o=At[t][e];return r(qt(o))}Al(e,t),r(v(v({},Sl),{},{icon:g.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}var Vn=function(){},Vt=g.measurePerformance&&Fe&&Fe.mark&&Fe.measure?Fe:{mark:Vn,measure:Vn},Se='FA "6.5.1"',El=function(t){return Vt.mark("".concat(Se," ").concat(t," begins")),function(){return ba(t)}},ba=function(t){Vt.mark("".concat(Se," ").concat(t," ends")),Vt.measure("".concat(Se," ").concat(t),"".concat(Se," ").concat(t," begins"),"".concat(Se," ").concat(t," ends"))},pn={begin:El,end:ba},Je=function(){};function Gn(e){var t=e.getAttribute?e.getAttribute(ce):null;return typeof t=="string"}function Cl(e){var t=e.getAttribute?e.getAttribute(an):null,n=e.getAttribute?e.getAttribute(on):null;return t&&n}function Pl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function Tl(){if(g.autoReplaceSvg===!0)return Qe.replace;var e=Qe[g.autoReplaceSvg];return e||Qe.replace}function Ol(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function Il(e){return T.createElement(e)}function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ol:Il:n;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(wa(o,{ceFn:r}))}),a}function Rl(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Qe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(wa(a),n)}),n.getAttribute(ce)===null&&g.keepOriginalSource){var r=T.createComment(Rl(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ln(n).indexOf(g.replacementClass))return Qe.replace(t);var a=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===g.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ze(s)}).join(`
`);n.setAttribute(ce,""),n.innerHTML=o}};function Xn(e){e()}function ka(e,t){var n=typeof t=="function"?t:Je;if(e.length===0)n();else{var r=Xn;g.mutateApproach===Hs&&(r=te.requestAnimationFrame||Xn),r(function(){var a=Tl(),i=pn.begin("mutate");e.map(a),i(),n()})}}var hn=!1;function xa(){hn=!0}function Gt(){hn=!1}var st=null;function Jn(e){if(!!Fn&&!!g.observeMutations){var t=e.treeCallback,n=t===void 0?Je:t,r=e.nodeCallback,a=r===void 0?Je:r,i=e.pseudoElementsCallback,o=i===void 0?Je:i,s=e.observeMutationsRoot,c=s===void 0?T:s;st=new Fn(function(f){if(!hn){var l=ne();we(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Gn(u.addedNodes[0])&&(g.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&g.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Gn(u.target)&&~Bs.indexOf(u.attributeName))if(u.attributeName==="class"&&Cl(u.target)){var d=vt(ln(u.target)),h=d.prefix,b=d.iconName;u.target.setAttribute(an,h||l),b&&u.target.setAttribute(on,b)}else Pl(u.target)&&a(u.target)})}}),X&&st.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ll(){!st||st.disconnect()}function Nl(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ml(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=vt(ln(e));return a.prefix||(a.prefix=ne()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=dl(a.prefix,e.innerText)||un(a.prefix,Ut(e.innerText))),!a.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Hl(e){var t=we(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(r||Ne()):(t["aria-hidden"]="true",t.focusable="false")),t}function jl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ml(e),r=n.iconName,a=n.prefix,i=n.rest,o=Hl(e),s=Wt("parseNodeAttributes",{},e),c=t.styleParser?Nl(e):[];return v({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var zl=W.styles;function _a(e){var t=g.autoReplaceSvg==="nest"?Qn(e,{styleParser:!1}):Qn(e);return~t.extra.classes.indexOf(ia)?G("generateLayersText",e,t):G("generateSvgReplacementMutation",e,t)}var re=new Set;sn.map(function(e){re.add("fa-".concat(e))});Object.keys(Oe[P]).map(re.add.bind(re));Object.keys(Oe[O]).map(re.add.bind(re));re=He(re);function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();var n=T.documentElement.classList,r=function(u){return n.add("".concat($n,"-").concat(u))},a=function(u){return n.remove("".concat($n,"-").concat(u))},i=g.autoFetchSvg?re:sn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(zl));i.includes("fa")||i.push("fa");var o=[".".concat(ia,":not([").concat(ce,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(ce,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=we(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=pn.begin("onTree"),f=s.reduce(function(l,u){try{var d=_a(u);d&&l.push(d)}catch(h){aa||h.name==="MissingIcon"&&console.error(h)}return l},[]);return new Promise(function(l,u){Promise.all(f).then(function(d){ka(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),l()})}).catch(function(d){c(),u(d)})})}function Dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_a(e).then(function(n){n&&ka([n],t)})}function Fl(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yt(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yt(a||{})),e(r,v(v({},n),{},{mask:a}))}}var $l=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Y:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,f=n.maskId,l=f===void 0?null:f,u=n.title,d=u===void 0?null:u,h=n.titleId,b=h===void 0?null:h,w=n.classes,E=w===void 0?[]:w,m=n.attributes,p=m===void 0?{}:m,y=n.styles,S=y===void 0?{}:y;if(!!t){var k=t.prefix,C=t.iconName,A=t.icon;return gt(v({type:"icon"},t),function(){return fe("beforeDOMElementCreation",{iconDefinition:t,params:n}),g.autoA11y&&(d?p["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(b||Ne()):(p["aria-hidden"]="true",p.focusable="false")),mn({icons:{main:qt(A),mask:c?qt(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:v(v({},Y),a),symbol:o,title:d,maskId:l,titleId:b,extra:{attributes:p,styles:S,classes:E}})})}},Ul={mixout:function(){return{icon:Fl($l)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zn,n.nodeCallback=Dl,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?T:r,i=n.callback,o=i===void 0?function(){}:i;return Zn(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,f=r.symbol,l=r.mask,u=r.maskId,d=r.extra;return new Promise(function(h,b){Promise.all([Kt(a,s),l.iconName?Kt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=rn(w,2),m=E[0],p=E[1];h([n,mn({icons:{main:m,mask:p},prefix:s,iconName:a,transform:c,symbol:f,maskId:u,title:i,titleId:o,extra:d,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=pt(s);c.length>0&&(a.style=c);var f;return cn(o)&&(f=G("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Bl={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return gt({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(He(i)).join(" ")},children:o}]})}}}},Wl={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,f=c===void 0?{}:c,l=r.styles,u=l===void 0?{}:l;return gt({type:"counter",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:r}),_l({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(He(s))}})})}}}},Yl={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Y:a,o=r.title,s=o===void 0?null:o,c=r.classes,f=c===void 0?[]:c,l=r.attributes,u=l===void 0?{}:l,d=r.styles,h=d===void 0?{}:d;return gt({type:"text",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:r}),Kn({content:n,transform:v(v({},Y),i),title:s,extra:{attributes:u,styles:h,classes:["".concat(g.cssPrefix,"-layers-text")].concat(He(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(ta){var f=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/f,c=l.height/f}return g.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Kn({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},ql=new RegExp('"',"ug"),er=[1105920,1112319];function Kl(e){var t=e.replace(ql,""),n=ol(t,0),r=n>=er[0]&&n<=er[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ut(a?t[0]:t),isSecondary:r||a}}function tr(e,t){var n="".concat(Ms).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=we(e.children),o=i.filter(function(A){return A.getAttribute($t)===t})[0],s=te.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(Fs),f=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?O:P,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ie[d][c[2].toLowerCase()]:$s[d][f],b=Kl(u),w=b.value,E=b.isSecondary,m=c[0].startsWith("FontAwesome"),p=un(h,w),y=p;if(m){var S=ml(w);S.iconName&&S.prefix&&(p=S.iconName,h=S.prefix)}if(p&&!E&&(!o||o.getAttribute(an)!==h||o.getAttribute(on)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var k=jl(),C=k.extra;C.attributes[$t]=t,Kt(p,h).then(function(A){var _=mn(v(v({},k),{},{icons:{main:A,mask:dn()},prefix:h,iconName:y,extra:C,watchable:!0})),x=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(x,e.firstChild):e.appendChild(x),x.outerHTML=_.map(function($){return ze($)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Vl(e){return Promise.all([tr(e,"::before"),tr(e,"::after")])}function Gl(e){return e.parentNode!==document.head&&!~js.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($t)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function nr(e){if(!!X)return new Promise(function(t,n){var r=we(e.querySelectorAll("*")).filter(Gl).map(Vl),a=pn.begin("searchPseudoElements");xa(),Promise.all(r).then(function(){a(),Gt(),t()}).catch(function(){a(),Gt(),n()})})}var Xl={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=nr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?T:r;g.searchPseudoElements&&nr(a)}}},rr=!1,Jl={mixout:function(){return{dom:{unwatch:function(){xa(),rr=!0}}}},hooks:function(){return{bootstrap:function(){Jn(Wt("mutationObserverCallbacks",{}))},noAuto:function(){Ll()},watch:function(n){var r=n.observeMutationsRoot;rr?Gt():Jn(Wt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ar=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ql={mixout:function(){return{parse:{transform:function(n){return ar(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ar(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(c," ").concat(f," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:u,path:d};return{tag:"g",attributes:v({},h.outer),children:[{tag:"g",attributes:v({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:v(v({},r.icon.attributes),h.path)}]}]}}}},Et={x:0,y:0,width:"100%",height:"100%"};function ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zl(e){return e.tag==="g"?e.children:[e]}var ec={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vt(a.split(" ").map(function(o){return o.trim()})):dn();return i.prefix||(i.prefix=ne()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,f=i.width,l=i.icon,u=o.width,d=o.icon,h=Qs({transform:c,containerWidth:u,iconWidth:f}),b={tag:"rect",attributes:v(v({},Et),{},{fill:"white"})},w=l.children?{children:l.children.map(ir)}:{},E={tag:"g",attributes:v({},h.inner),children:[ir(v({tag:l.tag,attributes:v(v({},l.attributes),h.path)},w))]},m={tag:"g",attributes:v({},h.outer),children:[E]},p="mask-".concat(s||Ne()),y="clip-".concat(s||Ne()),S={tag:"mask",attributes:v(v({},Et),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Zl(d)},S]};return r.push(k,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(p,")")},Et)}),{children:r,attributes:a}}}},tc={provides:function(t){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:v(v({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=v(v({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:v(v({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:v(v({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},nc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},rc=[tl,Ul,Bl,Wl,Yl,Xl,Jl,Ql,ec,tc,nc];vl(rc,{mixoutsTo:F});F.noAuto;var vn=F.config,ac=F.library;F.dom;var lt=F.parse;F.findIconDefinition;F.toHtml;var ic=F.icon;F.layer;var oc=F.text;F.counter;function or(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?or(Object(n),!0).forEach(function(r){L(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):or(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ct(e){return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(e)}function L(e,t,n){return t=pc(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function lc(e,t){if(e==null)return{};var n=sc(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Xt(e){return cc(e)||fc(e)||uc(e)||dc()}function cc(e){if(Array.isArray(e))return Jt(e)}function fc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uc(e,t){if(!!e){if(typeof e=="string")return Jt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(e,t)}}function Jt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mc(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pc(e){var t=mc(e,"string");return typeof t=="symbol"?t:String(t)}var hc=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{},Sa={exports:{}};(function(e){(function(t){var n=function(m,p,y){if(!f(p)||u(p)||d(p)||h(p)||c(p))return p;var S,k=0,C=0;if(l(p))for(S=[],C=p.length;k<C;k++)S.push(n(m,p[k],y));else{S={};for(var A in p)Object.prototype.hasOwnProperty.call(p,A)&&(S[m(A,y)]=n(m,p[A],y))}return S},r=function(m,p){p=p||{};var y=p.separator||"_",S=p.split||/(?=[A-Z])/;return m.split(S).join(y)},a=function(m){return b(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,y){return y?y.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var p=a(m);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(m,p){return r(m,p).toLowerCase()},s=Object.prototype.toString,c=function(m){return typeof m=="function"},f=function(m){return m===Object(m)},l=function(m){return s.call(m)=="[object Array]"},u=function(m){return s.call(m)=="[object Date]"},d=function(m){return s.call(m)=="[object RegExp]"},h=function(m){return s.call(m)=="[object Boolean]"},b=function(m){return m=m-0,m===m},w=function(m,p){var y=p&&"process"in p?p.process:p;return typeof y!="function"?m:function(S,k){return y(S,m,k)}},E={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(m,p){return n(w(a,p),m)},decamelizeKeys:function(m,p){return n(w(o,p),m,p)},pascalizeKeys:function(m,p){return n(w(i,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=E:t.humps=E})(hc)})(Sa);var vc=Sa.exports,gc=["class","style"];function yc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vc.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function bc(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return gn(c)}),a=Object.keys(e.attributes||{}).reduce(function(c,f){var l=e.attributes[f];switch(f){case"class":c.class=bc(l);break;case"style":c.style=yc(l);break;default:c.attrs[f]=l}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=lc(n,gc);return q(e.tag,B(B(B({},t),{},{class:a.class,style:B(B({},a.style),o)},a.attrs),s),r)}var Aa=!1;try{Aa=!0}catch{}function wc(){if(!Aa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Pe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?L({},e,t):{}}function kc(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},L(t,"fa-".concat(e.size),e.size!==null),L(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),L(t,"fa-pull-".concat(e.pull),e.pull!==null),L(t,"fa-swap-opacity",e.swapOpacity),L(t,"fa-bounce",e.bounce),L(t,"fa-shake",e.shake),L(t,"fa-beat",e.beat),L(t,"fa-fade",e.fade),L(t,"fa-beat-fade",e.beatFade),L(t,"fa-flash",e.flash),L(t,"fa-spin-pulse",e.spinPulse),L(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function sr(e){if(e&&ct(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(lt.icon)return lt.icon(e);if(e===null)return null;if(ct(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var xc=ue({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=R(function(){return sr(t.icon)}),i=R(function(){return Pe("classes",kc(t))}),o=R(function(){return Pe("transform",typeof t.transform=="string"?lt.transform(t.transform):t.transform)}),s=R(function(){return Pe("mask",sr(t.mask))}),c=R(function(){return ic(a.value,B(B(B(B({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});ut(c,function(l){if(!l)return wc("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=R(function(){return c.value?gn(c.value.abstract[0],{},r):null});return function(){return f.value}}});ue({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=vn.familyPrefix,i=R(function(){return["".concat(a,"-layers")].concat(Xt(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return q("div",{class:i.value},r.default?r.default():[])}}});ue({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=vn.familyPrefix,i=R(function(){return Pe("classes",[].concat(Xt(t.counter?["".concat(a,"-layers-counter")]:[]),Xt(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=R(function(){return Pe("transform",typeof t.transform=="string"?lt.transform(t.transform):t.transform)}),s=R(function(){var f=oc(t.value.toString(),B(B({},o.value),i.value)),l=f.abstract;return t.counter&&(l[0].attributes.class=l[0].attributes.class.replace("fa-layers-text","")),l[0]}),c=R(function(){return gn(s.value,{},r)});return function(){return c.value}}});var _c={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]},Sc={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Ac={prefix:"fab",iconName:"gripfire",icon:[384,512,[],"f3ac","M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"]},Ec={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Cc={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},Pc={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},Tc={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Oc={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Ic={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};vn.autoAddCss=!1;ac.add(Ec,Cc,Sc,Ic,Ac,Oc,Tc,Pc,_c);const Rc=de(e=>{e.vueApp.component("FontAwesomeIcon",xc)}),Lc=["red","yellow","green","cyan","blue","magenta","red"],lr={ArrowUp:(e,t)=>e+t,ArrowRight:(e,t)=>e+t,ArrowDown:(e,t)=>e-t,ArrowLeft:(e,t)=>e-t,PageUp:(e,t)=>e+t*10,PageDown:(e,t)=>e-t*10,Home:()=>0,End:()=>359},ft={name:"ColorPicker",emits:["select","input","change"],props:{hue:{default:0},saturation:{default:100},luminosity:{default:50},alpha:{default:1},step:{default:1},mouseScroll:{default:!1},variant:{default:"collapsible"},disabled:{default:!1},initiallyCollapsed:{default:!1},ariaLabel:{default:"color picker"},ariaRoledescription:{default:"radial slider"},ariaValuetext:{default:""},ariaLabelColorWell:{default:"color well"}},setup(e,{emit:t}){const n=D(null),r=D(null);let a=null;const i=e.hue+"deg",o=D(e.hue),s=D(!e.initiallyCollapsed),c=D(!e.initiallyCollapsed),f=D(!1),l=D(!1),u=D(!1),d=R(()=>`hsla(${o.value}, ${e.saturation}%, ${e.luminosity}%, ${e.alpha})`),h=R(()=>Lc[Math.round(o.value/60)]);return ut(()=>e.hue,y=>{o.value=y,a.angle=y}),{rcp:a,el:n,rotator:r,initialAngle:i,angle:o,isPaletteIn:s,isKnobIn:c,isDragging:u,isRippling:l,isPressed:f,color:d,valuetext:h,onKeyDown:y=>{e.disabled||f.value||!c.value||!(y.key in lr)||(y.preventDefault(),a.angle=lr[y.key](a.angle,e.step),o.value=a.angle,t("input",o.value),t("change",o.value))},onScroll:y=>{f.value||!c.value||(y.preventDefault(),y.deltaY>0?a.angle+=e.step:a.angle-=e.step,o.value=a.angle,t("input",o.value),t("change",o.value))},selectColor:()=>{f.value=!0,s.value&&c.value?(t("select",o.value),l.value=!0):s.value=!0},togglePicker:()=>{e.variant!=="persistent"&&(c.value?c.value=!1:(c.value=!0,s.value=!0)),l.value=!1,f.value=!1},hidePalette:()=>{c.value||(s.value=!1)}}}};function Nc(e,t,n,r,a,i){return Ha(),ja("div",{ref:"el",role:"slider","aria-roledescription":n.ariaRoledescription,"aria-label":n.ariaLabel,"aria-expanded":r.isPaletteIn,"aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":r.angle,"aria-valuetext":n.ariaValuetext||r.valuetext,"aria-disabled":n.disabled,class:["rcp",{dragging:r.isDragging,disabled:n.disabled}],tabindex:n.disabled?-1:0,style:{"--rcp-initial-angle":r.initialAngle},onKeyup:t[4]||(t[4]=za((...o)=>r.selectColor&&r.selectColor(...o),["enter"])),onKeydown:t[5]||(t[5]=(...o)=>r.onKeyDown&&r.onKeyDown(...o))},[_e("div",{class:["rcp__palette",r.isPaletteIn?"in":"out"]},null,2),_e("div",Da({class:"rcp__rotator",style:{"pointer-events":n.disabled||r.isPressed||!r.isKnobIn?"none":null}},Fa(n.mouseScroll?{wheel:r.onScroll}:{}),{ref:"rotator"}),[_e("div",{class:["rcp__knob",r.isKnobIn?"in":"out"],onTransitionend:t[1]||(t[1]=(...o)=>r.hidePalette&&r.hidePalette(...o))},null,34)],16),_e("div",{class:["rcp__ripple",{rippling:r.isRippling}],style:{borderColor:r.color}},null,6),_e("button",{type:"button",class:["rcp__well",{pressed:r.isPressed}],"aria-label":n.ariaLabelColorWell,disabled:n.disabled,tabindex:n.disabled?-1:0,style:{backgroundColor:r.color},onAnimationend:t[2]||(t[2]=(...o)=>r.togglePicker&&r.togglePicker(...o)),onClick:t[3]||(t[3]=(...o)=>r.selectColor&&r.selectColor(...o))},null,46,["aria-label","disabled","tabindex"])],46,["aria-roledescription","aria-label","aria-expanded","aria-valuenow","aria-valuetext","aria-disabled","tabindex"])}ft.render=Nc;ft.install=function(e){e.component("ColorPicker",ft)};const Mc={install:e=>{e.component("RadialColorPicker",ft)}};var Hc=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{},Ea={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Hc,function(){var n="__v-click-outside",r=!1,a=["click"],i=function(f){var l=f.event,u=f.handler;(0,f.middleware)(l)&&u(l)},o=function(f,l){var u=function(m){var p=typeof m=="function";if(!p&&typeof m!="object")throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:p?m:m.handler,middleware:m.middleware||function(y){return y},events:m.events||a,isActive:m.isActive!==!1,detectIframe:m.detectIframe!==!1,capture:Boolean(m.capture)}}(l.value),d=u.handler,h=u.middleware,b=u.detectIframe,w=u.capture;if(u.isActive){if(f[n]=u.events.map(function(m){return{event:m,srcTarget:document.documentElement,handler:function(p){return function(y){var S=y.el,k=y.event,C=y.handler,A=y.middleware,_=k.path||k.composedPath&&k.composedPath();(_?_.indexOf(S)<0:!S.contains(k.target))&&i({event:k,handler:C,middleware:A})}({el:f,event:p,handler:d,middleware:h})},capture:w}}),b){var E={event:"blur",srcTarget:window,handler:function(m){return function(p){var y=p.el,S=p.event,k=p.handler,C=p.middleware;setTimeout(function(){var A=document.activeElement;A&&A.tagName==="IFRAME"&&!y.contains(A)&&i({event:S,handler:k,middleware:C})},0)}({el:f,event:m,handler:d,middleware:h})},capture:w};f[n]=[].concat(f[n],[E])}f[n].forEach(function(m){var p=m.event,y=m.srcTarget,S=m.handler;return setTimeout(function(){f[n]&&y.addEventListener(p,S,w)},0)})}},s=function(f){(f[n]||[]).forEach(function(l){return l.srcTarget.removeEventListener(l.event,l.handler,l.capture)}),delete f[n]},c=r?{beforeMount:o,updated:function(f,l){var u=l.value,d=l.oldValue;JSON.stringify(u)!==JSON.stringify(d)&&(s(f),o(f,{value:u}))},unmounted:s}:{};return{install:function(f){f.directive("click-outside",c)},directive:c}})})(Ea);const jc=Ea.exports,zc=de(e=>{e.vueApp.use(jc)}),Dc=de(({$router:e})=>{e.options.scrollBehavior=t=>t.hash?{el:t.hash,behavior:"smooth"}:{top:0,behavior:"smooth"}}),Fc=[Io,Ro,ys,Ss,Rc,Mc,zc,Dc],ef=Oo({id:"app-store",state:()=>({mouseCoordinates:{x:0,y:0},settings:{activeColor:{hue:180,saturation:100,luminosity:50,alpha:1,auto:!0},trail:{cursor:"star",size:15}},trails:["circle","square","triangle","quadrilateral","star","bubble","lock"],skillsIcons:[{name:"vue",title:"Vue"},{name:"js",title:"JavaScript"},{name:"ts",title:"Typescript"},{name:"nuxt",title:"Nuxt"},{name:"sass",title:"Sass"},{name:"node",title:"Node"}]}),getters:{getActiveColor:e=>{const t=e.settings.activeColor.hue,n=e.settings.activeColor.saturation,r=e.settings.activeColor.luminosity;return`hsl(${t} ${n} ${r})`}},actions:{changeMouseCoordinates(e,t){this.mouseCoordinates={x:e,y:t}},changeActiveColor(e){this.settings.activeColor.hue=e,this.changeSettings(this.settings)},changeActiveColorAuto(e){this.settings.activeColor.auto=e,this.changeSettings(this.settings)},changeTrailCursor(e){this.settings.trail.cursor=e,this.changeSettings(this.settings)},changeTrailSize(e){this.settings.trail.size=e,this.changeSettings(this.settings)},loadSettings(e){this.settings={...e}},changeSettings(e){localStorage.setItem("settings",JSON.stringify(e))}}});const $c=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""}),Uc=(e,t)=>{var a;const n=t.route.matched.find(i=>{var o;return((o=i.components)==null?void 0:o.default)===t.Component.type}),r=(a=e!=null?e:n==null?void 0:n.meta.key)!=null?a:n&&$c(t.route,n);return typeof r=="function"?r(t.route):r},Bc=(e,t)=>({default:()=>t}),Wc=ue({setup(e,{slots:t}){return()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Yc=(e,t,n)=>({default:()=>t?q(e,t===!0?{}:t,n):q(Wc,{},n)});ue({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t}){const n=ae();return()=>q(Ka,{name:e.name,route:e.route,...t},{default:r=>{var c,f,l,u;if(!r.Component)return;const a=Uc(e.pageKey,r),i=n.deferHydration(),o=!!((f=(c=e.transition)!=null?c:r.route.meta.pageTransition)!=null?f:zt),s=o&&Kc([e.transition,r.route.meta.pageTransition,zt,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return Yc(Ua,o&&s,Bc((u=(l=e.keepalive)!=null?l:r.route.meta.keepalive)!=null?u:gs,q($a,{onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{dt(()=>n.callHook("page:finish",r.Component).finally(i))}},{default:()=>q(Vc,{key:a,routeProps:r,pageKey:a,hasTransition:o})}))).default()}})}});function qc(e){return Array.isArray(e)?e:e?[e]:[]}function Kc(e){const t=e.map(n=>({...n,onAfterLeave:qc(n.onAfterLeave)}));return no(...t)}const Vc=ue({props:["routeProps","pageKey","hasTransition"],setup(e){const t=e.pageKey,n=e.routeProps.route,r={};for(const a in e.routeProps.route)r[a]=R(()=>t===e.pageKey?e.routeProps.route[a]:n[a]);return Ba("_route",Ze(r)),()=>q(e.routeProps.Component)}});globalThis.$fetch||(globalThis.$fetch=$i.create({baseURL:Bi()}));to(Fc);export{Zc as S,No as T,Qc as _,ef as a,Oo as d,ae as u};
//# sourceMappingURL=server.mjs.map
