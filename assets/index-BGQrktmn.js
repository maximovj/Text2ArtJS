function uc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function H_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D_={exports:{}},Pl={},U_={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),_c=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),gu=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var W_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,z_={};function On(e,t,n){this.props=e,this.context=t,this.refs=z_,this.updater=n||W_}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $_(){}$_.prototype=On.prototype;function Lo(e,t,n){this.props=e,this.context=t,this.refs=z_,this.updater=n||W_}var Eo=Lo.prototype=new $_;Eo.constructor=Lo;F_(Eo,On.prototype);Eo.isPureReactComponent=!0;var Tu=Array.isArray,j_=Object.prototype.hasOwnProperty,Io={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function V_(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)j_.call(t,r)&&!B_.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var _=Array(u),s=0;s<u;s++)_[s]=arguments[s+2];l.children=_}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Sr,type:e,key:i,ref:o,props:l,_owner:Io.current}}function Tc(e,t){return{$$typeof:Sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function So(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yu=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function Xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Sr:case _c:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+ql(o,0):r,Tu(l)?(n="",e!=null&&(n=e.replace(yu,"$&/")+"/"),Xr(l,t,n,"",function(s){return s})):l!=null&&(So(l)&&(l=Tc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(yu,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Tu(e))for(var u=0;u<e.length;u++){i=e[u];var _=r+ql(i,u);o+=Xr(i,t,n,_,l)}else if(_=gc(e),typeof _=="function")for(e=_.call(e),u=0;!(i=e.next()).done;)i=i.value,_=r+ql(i,u++),o+=Xr(i,t,n,_,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function kr(e,t,n){if(e==null)return e;var r=[],l=0;return Xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Lc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Yr={transition:null},Ec={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Yr,ReactCurrentOwner:Io};function G_(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!So(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=On;B.Fragment=sc;B.Profiler=cc;B.PureComponent=Lo;B.StrictMode=ac;B.Suspense=hc;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;B.act=G_;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=F_({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Io.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(_ in t)j_.call(t,_)&&!B_.hasOwnProperty(_)&&(r[_]=t[_]===void 0&&u!==void 0?u[_]:t[_])}var _=arguments.length-2;if(_===1)r.children=n;else if(1<_){u=Array(_);for(var s=0;s<_;s++)u[s]=arguments[s+2];r.children=u}return{$$typeof:Sr,type:e.type,key:l,ref:i,props:r,_owner:o}};B.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};B.createElement=V_;B.createFactory=function(e){var t=V_.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:pc,render:e}};B.isValidElement=So;B.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:Lc}};B.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Yr.transition;Yr.transition={};try{e()}finally{Yr.transition=t}};B.unstable_act=G_;B.useCallback=function(e,t){return Re.current.useCallback(e,t)};B.useContext=function(e){return Re.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};B.useEffect=function(e,t){return Re.current.useEffect(e,t)};B.useId=function(){return Re.current.useId()};B.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Re.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};B.useRef=function(e){return Re.current.useRef(e)};B.useState=function(e){return Re.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Re.current.useTransition()};B.version="18.3.1";U_.exports=B;var O=U_.exports;const Ic=H_(O),Sc=uc({__proto__:null,default:Ic},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=O,Rc=Symbol.for("react.element"),wc=Symbol.for("react.fragment"),Cc=Object.prototype.hasOwnProperty,Nc=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xc={key:!0,ref:!0,__self:!0,__source:!0};function Q_(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Cc.call(t,r)&&!xc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Rc,type:e,key:i,ref:o,props:l,_owner:Nc.current}}Pl.Fragment=wc;Pl.jsx=Q_;Pl.jsxs=Q_;D_.exports=Pl;var $=D_.exports,K_={exports:{}},Fe={},X_={exports:{}},Y_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,F){var z=P.length;P.push(F);e:for(;0<z;){var ne=z-1>>>1,V=P[ne];if(0<l(V,F))P[ne]=F,P[z]=V,z=ne;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var F=P[0],z=P.pop();if(z!==F){P[0]=z;e:for(var ne=0,V=P.length,g=V>>>1;ne<g;){var T=2*(ne+1)-1,a=P[T],v=T+1,y=P[v];if(0>l(a,z))v<V&&0>l(y,a)?(P[ne]=y,P[v]=z,ne=v):(P[ne]=a,P[T]=z,ne=T);else if(v<V&&0>l(y,z))P[ne]=y,P[v]=z,ne=v;else break e}}return F}function l(P,F){var z=P.sortIndex-F.sortIndex;return z!==0?z:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var _=[],s=[],h=1,p=null,m=3,I=!1,S=!1,A=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(P){for(var F=n(s);F!==null;){if(F.callback===null)r(s);else if(F.startTime<=P)r(s),F.sortIndex=F.expirationTime,t(_,F);else break;F=n(s)}}function E(P){if(A=!1,d(P),!S)if(n(_)!==null)S=!0,Dn(N);else{var F=n(s);F!==null&&Un(E,F.startTime-P)}}function N(P,F){S=!1,A&&(A=!1,f(W),W=-1),I=!0;var z=m;try{for(d(F),p=n(_);p!==null&&(!(p.expirationTime>F)||P&&!Pe());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,m=p.priorityLevel;var V=ne(p.expirationTime<=F);F=e.unstable_now(),typeof V=="function"?p.callback=V:p===n(_)&&r(_),d(F)}else r(_);p=n(_)}if(p!==null)var g=!0;else{var T=n(s);T!==null&&Un(E,T.startTime-F),g=!1}return g}finally{p=null,m=z,I=!1}}var H=!1,D=null,W=-1,te=5,j=-1;function Pe(){return!(e.unstable_now()-j<te)}function ot(){if(D!==null){var P=e.unstable_now();j=P;var F=!0;try{F=D(!0,P)}finally{F?Ke():(H=!1,D=null)}}else H=!1}var Ke;if(typeof c=="function")Ke=function(){c(ot)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,gt=vt.port2;vt.port1.onmessage=ot,Ke=function(){gt.postMessage(null)}}else Ke=function(){k(ot,0)};function Dn(P){D=P,H||(H=!0,Ke())}function Un(P,F){W=k(function(){P(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){S||I||(S=!0,Dn(N))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(_)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var z=m;m=F;try{return P()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=m;m=P;try{return F()}finally{m=z}},e.unstable_scheduleCallback=function(P,F,z){var ne=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ne+z:ne):z=ne,P){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=z+V,P={id:h++,callback:F,priorityLevel:P,startTime:z,expirationTime:V,sortIndex:-1},z>ne?(P.sortIndex=z,t(s,P),n(_)===null&&P===n(s)&&(A?(f(W),W=-1):A=!0,Un(E,z-ne))):(P.sortIndex=V,t(_,P),S||I||(S=!0,Dn(N))),P},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(P){var F=m;return function(){var z=m;m=F;try{return P.apply(this,arguments)}finally{m=z}}}})(Y_);X_.exports=Y_;var kc=X_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=O,We=kc;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J_=new Set,ir={};function en(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(ir[e]=t,e=0;e<t.length;e++)J_.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lu={},Eu={};function Mc(e){return Ai.call(Eu,e)?!0:Ai.call(Lu,e)?!1:Pc.test(e)?Eu[e]=!0:(Lu[e]=!0,!1)}function Hc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,t,n,r){if(t===null||typeof t>"u"||Hc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ao=/[\-:]([a-z])/g;function Ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ao,Ro);Te[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ao,Ro);Te[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ao,Ro);Te[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function wo(e,t,n,r){var l=Te.hasOwnProperty(t)?Te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dc(t,n,l,r)&&(n=null),r||l===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),un=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Co=Symbol.for("react.strict_mode"),Ri=Symbol.for("react.profiler"),Z_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),No=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),Ci=Symbol.for("react.suspense_list"),xo=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),b_=Symbol.for("react.offscreen"),Iu=Symbol.iterator;function Wn(e){return e===null||typeof e!="object"?null:(e=Iu&&e[Iu]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,bl;function Qn(e){if(bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bl=t&&t[1]||""}return`
`+bl+e}var ei=!1;function ti(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var l=s.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var _=`
`+l[o].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=o&&0<=u);break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qn(e):""}function Uc(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function Ni(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case un:return"Portal";case Ri:return"Profiler";case Co:return"StrictMode";case wi:return"Suspense";case Ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q_:return(e.displayName||"Context")+".Consumer";case Z_:return(e._context.displayName||"Context")+".Provider";case No:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xo:return t=e.displayName||null,t!==null?t:Ni(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Ni(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ni(t);case 8:return t===Co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fc(e){var t=es(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=Fc(e))}function ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=es(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ns(e,t){t=t.checked,t!=null&&wo(e,"checked",t,!1)}function ki(e,t){ns(e,t);var n=Dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oi(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Au(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oi(e,t,n){(t!=="number"||ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kn=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ru(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Kn(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function rs(e,t){var n=Dt(t.value),r=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ls(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ls(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,is=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){zc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function os(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=os(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $c=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hi(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wi=null,yn=null,Ln=null;function Cu(e){if(e=wr(e)){if(typeof Wi!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Wl(t),Wi(e.stateNode,e.type,t))}}function _s(e){yn?Ln?Ln.push(e):Ln=[e]:yn=e}function ss(){if(yn){var e=yn,t=Ln;if(Ln=yn=null,Cu(e),t)for(e=0;e<t.length;e++)Cu(t[e])}}function as(e,t){return e(t)}function cs(){}var ni=!1;function fs(e,t,n){if(ni)return e(t,n);ni=!0;try{return as(e,t,n)}finally{ni=!1,(yn!==null||Ln!==null)&&(cs(),ss())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Fi=!1;if(ft)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Fi=!1}function jc(e,t,n,r,l,i,o,u,_){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(h){this.onError(h)}}var Zn=!1,_l=null,sl=!1,zi=null,Bc={onError:function(e){Zn=!0,_l=e}};function Vc(e,t,n,r,l,i,o,u,_){Zn=!1,_l=null,jc.apply(Bc,arguments)}function Gc(e,t,n,r,l,i,o,u,_){if(Vc.apply(this,arguments),Zn){if(Zn){var s=_l;Zn=!1,_l=null}else throw Error(R(198));sl||(sl=!0,zi=s)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ds(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(tn(e)!==e)throw Error(R(188))}function Qc(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Nu(l),e;if(i===r)return Nu(l),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function ps(e){return e=Qc(e),e!==null?hs(e):null}function hs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hs(e);if(t!==null)return t;e=e.sibling}return null}var ms=We.unstable_scheduleCallback,xu=We.unstable_cancelCallback,Kc=We.unstable_shouldYield,Xc=We.unstable_requestPaint,se=We.unstable_now,Yc=We.unstable_getCurrentPriorityLevel,Oo=We.unstable_ImmediatePriority,vs=We.unstable_UserBlockingPriority,al=We.unstable_NormalPriority,Jc=We.unstable_LowPriority,gs=We.unstable_IdlePriority,Ml=null,lt=null;function Zc(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:ef,qc=Math.log,bc=Math.LN2;function ef(e){return e>>>=0,e===0?32:31-(qc(e)/bc|0)|0}var Hr=64,Dr=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=Xn(u):(i&=o,i!==0&&(r=Xn(i)))}else o=n&~l,o!==0?r=Xn(o):i!==0&&(r=Xn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),l=1<<n,r|=e[n],t&=~l;return r}function tf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-qe(i),u=1<<o,_=l[o];_===-1?(!(u&n)||u&r)&&(l[o]=tf(u,t)):_<=t&&(e.expiredLanes|=u),i&=~u}}function $i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ts(){var e=Hr;return Hr<<=1,!(Hr&4194240)&&(Hr=64),e}function ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function rf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-qe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Q=0;function ys(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ls,Mo,Es,Is,Ss,ji=!1,Ur=[],wt=null,Ct=null,Nt=null,_r=new Map,sr=new Map,Et=[],lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function zn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=wr(t),t!==null&&Mo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function of(e,t,n,r,l){switch(t){case"focusin":return wt=zn(wt,e,t,n,r,l),!0;case"dragenter":return Ct=zn(Ct,e,t,n,r,l),!0;case"mouseover":return Nt=zn(Nt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return _r.set(i,zn(_r.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,sr.set(i,zn(sr.get(i)||null,e,t,n,r,l)),!0}return!1}function As(e){var t=Bt(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=ds(n),t!==null){e.blockedOn=t,Ss(e.priority,function(){Es(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ui=r,n.target.dispatchEvent(r),Ui=null}else return t=wr(n),t!==null&&Mo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ou(e,t,n){Jr(e)&&n.delete(t)}function uf(){ji=!1,wt!==null&&Jr(wt)&&(wt=null),Ct!==null&&Jr(Ct)&&(Ct=null),Nt!==null&&Jr(Nt)&&(Nt=null),_r.forEach(Ou),sr.forEach(Ou)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,ji||(ji=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,uf)))}function ar(e){function t(l){return $n(l,e)}if(0<Ur.length){$n(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&$n(wt,e),Ct!==null&&$n(Ct,e),Nt!==null&&$n(Nt,e),_r.forEach(t),sr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)As(n),n.blockedOn===null&&Et.shift()}var En=mt.ReactCurrentBatchConfig,fl=!0;function _f(e,t,n,r){var l=Q,i=En.transition;En.transition=null;try{Q=1,Ho(e,t,n,r)}finally{Q=l,En.transition=i}}function sf(e,t,n,r){var l=Q,i=En.transition;En.transition=null;try{Q=4,Ho(e,t,n,r)}finally{Q=l,En.transition=i}}function Ho(e,t,n,r){if(fl){var l=Bi(e,t,n,r);if(l===null)di(e,t,r,dl,n),ku(e,r);else if(of(l,e,t,n,r))r.stopPropagation();else if(ku(e,r),t&4&&-1<lf.indexOf(e)){for(;l!==null;){var i=wr(l);if(i!==null&&Ls(i),i=Bi(e,t,n,r),i===null&&di(e,t,r,dl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else di(e,t,r,null,n)}}var dl=null;function Bi(e,t,n,r){if(dl=null,e=ko(r),e=Bt(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ds(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function Rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Oo:return 1;case vs:return 4;case al:case Jc:return 16;case gs:return 536870912;default:return 16}default:return 16}}var St=null,Do=null,Zr=null;function ws(){if(Zr)return Zr;var e,t=Do,n=t.length,r,l="value"in St?St.value:St.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Zr=l.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function Pu(){return!1}function ze(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wr:Pu,this.isPropagationStopped=Pu,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=ze(Pn),Rr=oe({},Pn,{view:0,detail:0}),af=ze(Rr),li,ii,jn,Hl=oe({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(li=e.screenX-jn.screenX,ii=e.screenY-jn.screenY):ii=li=0,jn=e),li)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Mu=ze(Hl),cf=oe({},Hl,{dataTransfer:0}),ff=ze(cf),df=oe({},Rr,{relatedTarget:0}),oi=ze(df),pf=oe({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),hf=ze(pf),mf=oe({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vf=ze(mf),gf=oe({},Pn,{data:0}),Hu=ze(gf),Tf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lf[e])?!!t[e]:!1}function Wo(){return Ef}var If=oe({},Rr,{key:function(e){if(e.key){var t=Tf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wo,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sf=ze(If),Af=oe({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=ze(Af),Rf=oe({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wo}),wf=ze(Rf),Cf=oe({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=ze(Cf),xf=oe({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=ze(xf),Of=[9,13,27,32],Fo=ft&&"CompositionEvent"in window,qn=null;ft&&"documentMode"in document&&(qn=document.documentMode);var Pf=ft&&"TextEvent"in window&&!qn,Cs=ft&&(!Fo||qn&&8<qn&&11>=qn),Uu=" ",Wu=!1;function Ns(e,t){switch(e){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function Mf(e,t){switch(e){case"compositionend":return xs(t);case"keypress":return t.which!==32?null:(Wu=!0,Uu);case"textInput":return e=t.data,e===Uu&&Wu?null:e;default:return null}}function Hf(e,t){if(sn)return e==="compositionend"||!Fo&&Ns(e,t)?(e=ws(),Zr=Do=St=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cs&&t.locale!=="ko"?null:t.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Df[e.type]:t==="textarea"}function ks(e,t,n,r){_s(r),t=pl(t,"onChange"),0<t.length&&(n=new Uo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var bn=null,cr=null;function Uf(e){js(e,0)}function Dl(e){var t=fn(e);if(ts(t))return e}function Wf(e,t){if(e==="change")return t}var Os=!1;if(ft){var ui;if(ft){var _i="oninput"in document;if(!_i){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),_i=typeof zu.oninput=="function"}ui=_i}else ui=!1;Os=ui&&(!document.documentMode||9<document.documentMode)}function $u(){bn&&(bn.detachEvent("onpropertychange",Ps),cr=bn=null)}function Ps(e){if(e.propertyName==="value"&&Dl(cr)){var t=[];ks(t,cr,e,ko(e)),fs(Uf,t)}}function Ff(e,t,n){e==="focusin"?($u(),bn=t,cr=n,bn.attachEvent("onpropertychange",Ps)):e==="focusout"&&$u()}function zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(cr)}function $f(e,t){if(e==="click")return Dl(t)}function jf(e,t){if(e==="input"||e==="change")return Dl(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Bf;function fr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ai.call(t,l)||!et(e[l],t[l]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var n=ju(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ju(n)}}function Ms(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ms(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hs(){for(var e=window,t=ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ul(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vf(e){var t=Hs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ms(n.ownerDocument.documentElement,n)){if(r!==null&&zo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Bu(n,i);var o=Bu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gf=ft&&"documentMode"in document&&11>=document.documentMode,an=null,Vi=null,er=null,Gi=!1;function Vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gi||an==null||an!==ul(r)||(r=an,"selectionStart"in r&&zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&fr(er,r)||(er=r,r=pl(Vi,"onSelect"),0<r.length&&(t=new Uo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=an)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},si={},Ds={};ft&&(Ds=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function Ul(e){if(si[e])return si[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ds)return si[e]=t[n];return e}var Us=Ul("animationend"),Ws=Ul("animationiteration"),Fs=Ul("animationstart"),zs=Ul("transitionend"),$s=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){$s.set(e,t),en(t,[e])}for(var ai=0;ai<Gu.length;ai++){var ci=Gu[ai],Qf=ci.toLowerCase(),Kf=ci[0].toUpperCase()+ci.slice(1);Wt(Qf,"on"+Kf)}Wt(Us,"onAnimationEnd");Wt(Ws,"onAnimationIteration");Wt(Fs,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(zs,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gc(r,t,void 0,e),e.currentTarget=null}function js(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],_=u.instance,s=u.currentTarget;if(u=u.listener,_!==i&&l.isPropagationStopped())break e;Qu(l,u,s),i=_}else for(o=0;o<r.length;o++){if(u=r[o],_=u.instance,s=u.currentTarget,u=u.listener,_!==i&&l.isPropagationStopped())break e;Qu(l,u,s),i=_}}}if(sl)throw e=zi,sl=!1,zi=null,e}function b(e,t){var n=t[Ji];n===void 0&&(n=t[Ji]=new Set);var r=e+"__bubble";n.has(r)||(Bs(t,e,2,!1),n.add(r))}function fi(e,t,n){var r=0;t&&(r|=4),Bs(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[zr]){e[zr]=!0,J_.forEach(function(n){n!=="selectionchange"&&(Xf.has(n)||fi(n,!1,e),fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,fi("selectionchange",!1,t))}}function Bs(e,t,n,r){switch(Rs(t)){case 1:var l=_f;break;case 4:l=sf;break;default:l=Ho}n=l.bind(null,t,n,e),l=void 0,!Fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function di(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var _=o.tag;if((_===3||_===4)&&(_=o.stateNode.containerInfo,_===l||_.nodeType===8&&_.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Bt(u),o===null)return;if(_=o.tag,_===5||_===6){r=i=o;continue e}u=u.parentNode}}r=r.return}fs(function(){var s=i,h=ko(n),p=[];e:{var m=$s.get(e);if(m!==void 0){var I=Uo,S=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":I=Sf;break;case"focusin":S="focus",I=oi;break;case"focusout":S="blur",I=oi;break;case"beforeblur":case"afterblur":I=oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=wf;break;case Us:case Ws:case Fs:I=hf;break;case zs:I=Nf;break;case"scroll":I=af;break;case"wheel":I=kf;break;case"copy":case"cut":case"paste":I=vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Du}var A=(t&4)!==0,k=!A&&e==="scroll",f=A?m!==null?m+"Capture":null:m;A=[];for(var c=s,d;c!==null;){d=c;var E=d.stateNode;if(d.tag===5&&E!==null&&(d=E,f!==null&&(E=ur(c,f),E!=null&&A.push(pr(c,E,d)))),k)break;c=c.return}0<A.length&&(m=new I(m,S,null,n,h),p.push({event:m,listeners:A}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",m&&n!==Ui&&(S=n.relatedTarget||n.fromElement)&&(Bt(S)||S[dt]))break e;if((I||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,I?(S=n.relatedTarget||n.toElement,I=s,S=S?Bt(S):null,S!==null&&(k=tn(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(I=null,S=s),I!==S)){if(A=Mu,E="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(A=Du,E="onPointerLeave",f="onPointerEnter",c="pointer"),k=I==null?m:fn(I),d=S==null?m:fn(S),m=new A(E,c+"leave",I,n,h),m.target=k,m.relatedTarget=d,E=null,Bt(h)===s&&(A=new A(f,c+"enter",S,n,h),A.target=d,A.relatedTarget=k,E=A),k=E,I&&S)t:{for(A=I,f=S,c=0,d=A;d;d=on(d))c++;for(d=0,E=f;E;E=on(E))d++;for(;0<c-d;)A=on(A),c--;for(;0<d-c;)f=on(f),d--;for(;c--;){if(A===f||f!==null&&A===f.alternate)break t;A=on(A),f=on(f)}A=null}else A=null;I!==null&&Ku(p,m,I,A,!1),S!==null&&k!==null&&Ku(p,k,S,A,!0)}}e:{if(m=s?fn(s):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var N=Wf;else if(Fu(m))if(Os)N=jf;else{N=zf;var H=Ff}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=$f);if(N&&(N=N(e,s))){ks(p,N,n,h);break e}H&&H(e,m,s),e==="focusout"&&(H=m._wrapperState)&&H.controlled&&m.type==="number"&&Oi(m,"number",m.value)}switch(H=s?fn(s):window,e){case"focusin":(Fu(H)||H.contentEditable==="true")&&(an=H,Vi=s,er=null);break;case"focusout":er=Vi=an=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,Vu(p,n,h);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":Vu(p,n,h)}var D;if(Fo)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else sn?Ns(e,n)&&(W="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(Cs&&n.locale!=="ko"&&(sn||W!=="onCompositionStart"?W==="onCompositionEnd"&&sn&&(D=ws()):(St=h,Do="value"in St?St.value:St.textContent,sn=!0)),H=pl(s,W),0<H.length&&(W=new Hu(W,e,null,n,h),p.push({event:W,listeners:H}),D?W.data=D:(D=xs(n),D!==null&&(W.data=D)))),(D=Pf?Mf(e,n):Hf(e,n))&&(s=pl(s,"onBeforeInput"),0<s.length&&(h=new Hu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:s}),h.data=D))}js(p,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=ur(e,n),i!=null&&r.unshift(pr(e,i,l)),i=ur(e,t),i!=null&&r.push(pr(e,i,l))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,_=u.alternate,s=u.stateNode;if(_!==null&&_===r)break;u.tag===5&&s!==null&&(u=s,l?(_=ur(n,i),_!=null&&o.unshift(pr(n,_,u))):l||(_=ur(n,i),_!=null&&o.push(pr(n,_,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Yf=/\r\n?/g,Jf=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(Yf,`
`).replace(Jf,"")}function $r(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(R(425))}function hl(){}var Qi=null,Ki=null;function Xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yi=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(bf)}:Yi;function bf(e){setTimeout(function(){throw e})}function pi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ar(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),rt="__reactFiber$"+Mn,hr="__reactProps$"+Mn,dt="__reactContainer$"+Mn,Ji="__reactEvents$"+Mn,ed="__reactListeners$"+Mn,td="__reactHandles$"+Mn;function Bt(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[rt])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[rt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Wl(e){return e[hr]||null}var Zi=[],dn=-1;function Ft(e){return{current:e}}function ee(e){0>dn||(e.current=Zi[dn],Zi[dn]=null,dn--)}function J(e,t){dn++,Zi[dn]=e.current,e.current=t}var Ut={},Ie=Ft(Ut),xe=Ft(!1),Yt=Ut;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function ml(){ee(xe),ee(Ie)}function Zu(e,t,n){if(Ie.current!==Ut)throw Error(R(168));J(Ie,t),J(xe,n)}function Vs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(R(108,Wc(e)||"Unknown",l));return oe({},n,r)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,Yt=Ie.current,J(Ie,e),J(xe,xe.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Vs(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,ee(xe),ee(Ie),J(Ie,e)):ee(xe),J(xe,n)}var _t=null,Fl=!1,hi=!1;function Gs(e){_t===null?_t=[e]:_t.push(e)}function nd(e){Fl=!0,Gs(e)}function zt(){if(!hi&&_t!==null){hi=!0;var e=0,t=Q;try{var n=_t;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Fl=!1}catch(l){throw _t!==null&&(_t=_t.slice(e+1)),ms(Oo,zt),l}finally{Q=t,hi=!1}}return null}var pn=[],hn=0,gl=null,Tl=0,$e=[],je=0,Jt=null,st=1,at="";function $t(e,t){pn[hn++]=Tl,pn[hn++]=gl,gl=e,Tl=t}function Qs(e,t,n){$e[je++]=st,$e[je++]=at,$e[je++]=Jt,Jt=e;var r=st;e=at;var l=32-qe(r)-1;r&=~(1<<l),n+=1;var i=32-qe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,st=1<<32-qe(t)+l|n<<l|r,at=i+e}else st=1<<i|n<<l|r,at=e}function $o(e){e.return!==null&&($t(e,1),Qs(e,1,0))}function jo(e){for(;e===gl;)gl=pn[--hn],pn[hn]=null,Tl=pn[--hn],pn[hn]=null;for(;e===Jt;)Jt=$e[--je],$e[je]=null,at=$e[--je],$e[je]=null,st=$e[--je],$e[je]=null}var Ue=null,De=null,re=!1,Ze=null;function Ks(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,De=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,De=null,!0):!1;default:return!1}}function qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bi(e){if(re){var t=De;if(t){var n=t;if(!bu(e,t)){if(qi(e))throw Error(R(418));t=xt(n.nextSibling);var r=Ue;t&&bu(e,t)?Ks(r,n):(e.flags=e.flags&-4097|2,re=!1,Ue=e)}}else{if(qi(e))throw Error(R(418));e.flags=e.flags&-4097|2,re=!1,Ue=e}}}function e_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function jr(e){if(e!==Ue)return!1;if(!re)return e_(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xi(e.type,e.memoizedProps)),t&&(t=De)){if(qi(e))throw Xs(),Error(R(418));for(;t;)Ks(e,t),t=xt(t.nextSibling)}if(e_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Ue?xt(e.stateNode.nextSibling):null;return!0}function Xs(){for(var e=De;e;)e=xt(e.nextSibling)}function wn(){De=Ue=null,re=!1}function Bo(e){Ze===null?Ze=[e]:Ze.push(e)}var rd=mt.ReactCurrentBatchConfig;function Bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Br(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function t_(e){var t=e._init;return t(e._payload)}function Ys(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,d,E){return c===null||c.tag!==6?(c=Ei(d,f.mode,E),c.return=f,c):(c=l(c,d),c.return=f,c)}function _(f,c,d,E){var N=d.type;return N===_n?h(f,c,d.props.children,E,d.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yt&&t_(N)===c.type)?(E=l(c,d.props),E.ref=Bn(f,c,d),E.return=f,E):(E=il(d.type,d.key,d.props,null,f.mode,E),E.ref=Bn(f,c,d),E.return=f,E)}function s(f,c,d,E){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ii(d,f.mode,E),c.return=f,c):(c=l(c,d.children||[]),c.return=f,c)}function h(f,c,d,E,N){return c===null||c.tag!==7?(c=Xt(d,f.mode,E,N),c.return=f,c):(c=l(c,d),c.return=f,c)}function p(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ei(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Or:return d=il(c.type,c.key,c.props,null,f.mode,d),d.ref=Bn(f,null,c),d.return=f,d;case un:return c=Ii(c,f.mode,d),c.return=f,c;case yt:var E=c._init;return p(f,E(c._payload),d)}if(Kn(c)||Wn(c))return c=Xt(c,f.mode,d,null),c.return=f,c;Br(f,c)}return null}function m(f,c,d,E){var N=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return N!==null?null:u(f,c,""+d,E);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:return d.key===N?_(f,c,d,E):null;case un:return d.key===N?s(f,c,d,E):null;case yt:return N=d._init,m(f,c,N(d._payload),E)}if(Kn(d)||Wn(d))return N!==null?null:h(f,c,d,E,null);Br(f,d)}return null}function I(f,c,d,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(d)||null,u(c,f,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Or:return f=f.get(E.key===null?d:E.key)||null,_(c,f,E,N);case un:return f=f.get(E.key===null?d:E.key)||null,s(c,f,E,N);case yt:var H=E._init;return I(f,c,d,H(E._payload),N)}if(Kn(E)||Wn(E))return f=f.get(d)||null,h(c,f,E,N,null);Br(c,E)}return null}function S(f,c,d,E){for(var N=null,H=null,D=c,W=c=0,te=null;D!==null&&W<d.length;W++){D.index>W?(te=D,D=null):te=D.sibling;var j=m(f,D,d[W],E);if(j===null){D===null&&(D=te);break}e&&D&&j.alternate===null&&t(f,D),c=i(j,c,W),H===null?N=j:H.sibling=j,H=j,D=te}if(W===d.length)return n(f,D),re&&$t(f,W),N;if(D===null){for(;W<d.length;W++)D=p(f,d[W],E),D!==null&&(c=i(D,c,W),H===null?N=D:H.sibling=D,H=D);return re&&$t(f,W),N}for(D=r(f,D);W<d.length;W++)te=I(D,f,W,d[W],E),te!==null&&(e&&te.alternate!==null&&D.delete(te.key===null?W:te.key),c=i(te,c,W),H===null?N=te:H.sibling=te,H=te);return e&&D.forEach(function(Pe){return t(f,Pe)}),re&&$t(f,W),N}function A(f,c,d,E){var N=Wn(d);if(typeof N!="function")throw Error(R(150));if(d=N.call(d),d==null)throw Error(R(151));for(var H=N=null,D=c,W=c=0,te=null,j=d.next();D!==null&&!j.done;W++,j=d.next()){D.index>W?(te=D,D=null):te=D.sibling;var Pe=m(f,D,j.value,E);if(Pe===null){D===null&&(D=te);break}e&&D&&Pe.alternate===null&&t(f,D),c=i(Pe,c,W),H===null?N=Pe:H.sibling=Pe,H=Pe,D=te}if(j.done)return n(f,D),re&&$t(f,W),N;if(D===null){for(;!j.done;W++,j=d.next())j=p(f,j.value,E),j!==null&&(c=i(j,c,W),H===null?N=j:H.sibling=j,H=j);return re&&$t(f,W),N}for(D=r(f,D);!j.done;W++,j=d.next())j=I(D,f,W,j.value,E),j!==null&&(e&&j.alternate!==null&&D.delete(j.key===null?W:j.key),c=i(j,c,W),H===null?N=j:H.sibling=j,H=j);return e&&D.forEach(function(ot){return t(f,ot)}),re&&$t(f,W),N}function k(f,c,d,E){if(typeof d=="object"&&d!==null&&d.type===_n&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Or:e:{for(var N=d.key,H=c;H!==null;){if(H.key===N){if(N=d.type,N===_n){if(H.tag===7){n(f,H.sibling),c=l(H,d.props.children),c.return=f,f=c;break e}}else if(H.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yt&&t_(N)===H.type){n(f,H.sibling),c=l(H,d.props),c.ref=Bn(f,H,d),c.return=f,f=c;break e}n(f,H);break}else t(f,H);H=H.sibling}d.type===_n?(c=Xt(d.props.children,f.mode,E,d.key),c.return=f,f=c):(E=il(d.type,d.key,d.props,null,f.mode,E),E.ref=Bn(f,c,d),E.return=f,f=E)}return o(f);case un:e:{for(H=d.key;c!==null;){if(c.key===H)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=l(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ii(d,f.mode,E),c.return=f,f=c}return o(f);case yt:return H=d._init,k(f,c,H(d._payload),E)}if(Kn(d))return S(f,c,d,E);if(Wn(d))return A(f,c,d,E);Br(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,d),c.return=f,f=c):(n(f,c),c=Ei(d,f.mode,E),c.return=f,f=c),o(f)):n(f,c)}return k}var Cn=Ys(!0),Js=Ys(!1),yl=Ft(null),Ll=null,mn=null,Vo=null;function Go(){Vo=mn=Ll=null}function Qo(e){var t=yl.current;ee(yl),e._currentValue=t}function eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){Ll=e,Vo=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Vo!==e)if(e={context:e,memoizedValue:t,next:null},mn===null){if(Ll===null)throw Error(R(308));mn=e,Ll.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return t}var Vt=null;function Ko(e){Vt===null?Vt=[e]:Vt.push(e)}function Zs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ko(t)):(n.next=l.next,l.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function Xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,pt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ko(r)):(t.next=l.next,l.next=t),r.interleaved=t,pt(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}function n_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function El(e,t,n,r){var l=e.updateQueue;Lt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var _=u,s=_.next;_.next=null,o===null?i=s:o.next=s,o=_;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=s:u.next=s,h.lastBaseUpdate=_))}if(i!==null){var p=l.baseState;o=0,h=s=_=null,u=i;do{var m=u.lane,I=u.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:I,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,A=u;switch(m=t,I=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){p=S.call(I,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,m=typeof S=="function"?S.call(I,p,m):S,m==null)break e;p=oe({},p,m);break e;case 2:Lt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else I={eventTime:I,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(s=h=I,_=p):h=h.next=I,o|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(_=p),l.baseState=_,l.firstBaseUpdate=s,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);qt|=o,e.lanes=o,e.memoizedState=p}}function r_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(R(191,l));l.call(r)}}}var Cr={},it=Ft(Cr),mr=Ft(Cr),vr=Ft(Cr);function Gt(e){if(e===Cr)throw Error(R(174));return e}function Yo(e,t){switch(J(vr,t),J(mr,e),J(it,Cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mi(t,e)}ee(it),J(it,t)}function Nn(){ee(it),ee(mr),ee(vr)}function bs(e){Gt(vr.current);var t=Gt(it.current),n=Mi(t,e.type);t!==n&&(J(mr,e),J(it,n))}function Jo(e){mr.current===e&&(ee(it),ee(mr))}var le=Ft(0);function Il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mi=[];function Zo(){for(var e=0;e<mi.length;e++)mi[e]._workInProgressVersionPrimary=null;mi.length=0}var el=mt.ReactCurrentDispatcher,vi=mt.ReactCurrentBatchConfig,Zt=0,ie=null,fe=null,pe=null,Sl=!1,tr=!1,gr=0,ld=0;function ye(){throw Error(R(321))}function qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,l,i){if(Zt=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,el.current=e===null||e.memoizedState===null?_d:sd,e=n(r,l),tr){i=0;do{if(tr=!1,gr=0,25<=i)throw Error(R(301));i+=1,pe=fe=null,t.updateQueue=null,el.current=ad,e=n(r,l)}while(tr)}if(el.current=Al,t=fe!==null&&fe.next!==null,Zt=0,pe=fe=ie=null,Sl=!1,t)throw Error(R(300));return e}function eu(){var e=gr!==0;return gr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ie.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=pe===null?ie.memoizedState:pe.next;if(t!==null)pe=t,fe=e;else{if(e===null)throw Error(R(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},pe===null?ie.memoizedState=pe=e:pe=pe.next=e}return pe}function Tr(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=Qe(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=fe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,_=null,s=i;do{var h=s.lane;if((Zt&h)===h)_!==null&&(_=_.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var p={lane:h,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};_===null?(u=_=p,o=r):_=_.next=p,ie.lanes|=h,qt|=h}s=s.next}while(s!==null&&s!==i);_===null?o=r:_.next=u,et(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=_,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ie.lanes|=i,qt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ti(e){var t=Qe(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);et(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ea(){}function ta(e,t){var n=ie,r=Qe(),l=t(),i=!et(r.memoizedState,l);if(i&&(r.memoizedState=l,Ne=!0),r=r.queue,tu(la.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,yr(9,ra.bind(null,n,r,l,t),void 0,null),he===null)throw Error(R(349));Zt&30||na(n,t,l)}return l}function na(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ra(e,t,n,r){t.value=n,t.getSnapshot=r,ia(t)&&oa(e)}function la(e,t,n){return n(function(){ia(t)&&oa(e)})}function ia(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function oa(e){var t=pt(e,1);t!==null&&be(t,e,1,-1)}function l_(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=ud.bind(null,ie,e),[t.memoizedState,e]}function yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ua(){return Qe().memoizedState}function tl(e,t,n,r){var l=nt();ie.flags|=e,l.memoizedState=yr(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var l=Qe();r=r===void 0?null:r;var i=void 0;if(fe!==null){var o=fe.memoizedState;if(i=o.destroy,r!==null&&qo(r,o.deps)){l.memoizedState=yr(t,n,i,r);return}}ie.flags|=e,l.memoizedState=yr(1|t,n,i,r)}function i_(e,t){return tl(8390656,8,e,t)}function tu(e,t){return zl(2048,8,e,t)}function _a(e,t){return zl(4,2,e,t)}function sa(e,t){return zl(4,4,e,t)}function aa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ca(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,aa.bind(null,t,e),n)}function nu(){}function fa(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function da(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pa(e,t,n){return Zt&21?(et(n,t)||(n=Ts(),ie.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function id(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=vi.transition;vi.transition={};try{e(!1),t()}finally{Q=n,vi.transition=r}}function ha(){return Qe().memoizedState}function od(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ma(e))va(t,n);else if(n=Zs(e,t,n,r),n!==null){var l=Ae();be(n,e,r,l),ga(n,t,r)}}function ud(e,t,n){var r=Pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ma(e))va(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,et(u,o)){var _=t.interleaved;_===null?(l.next=l,Ko(t)):(l.next=_.next,_.next=l),t.interleaved=l;return}}catch{}finally{}n=Zs(e,t,l,r),n!==null&&(l=Ae(),be(n,e,r,l),ga(n,t,r))}}function ma(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function va(e,t){tr=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ga(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}var Al={readContext:Ge,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},_d={readContext:Ge,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:i_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,tl(4194308,4,aa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=od.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:l_,useDebugValue:nu,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=l_(!1),t=e[0];return e=id.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,l=nt();if(re){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),he===null)throw Error(R(349));Zt&30||na(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,i_(la.bind(null,r,i,e),[e]),r.flags|=2048,yr(9,ra.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=nt(),t=he.identifierPrefix;if(re){var n=at,r=st;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ld++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sd={readContext:Ge,useCallback:fa,useContext:Ge,useEffect:tu,useImperativeHandle:ca,useInsertionEffect:_a,useLayoutEffect:sa,useMemo:da,useReducer:gi,useRef:ua,useState:function(){return gi(Tr)},useDebugValue:nu,useDeferredValue:function(e){var t=Qe();return pa(t,fe.memoizedState,e)},useTransition:function(){var e=gi(Tr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:ea,useSyncExternalStore:ta,useId:ha,unstable_isNewReconciler:!1},ad={readContext:Ge,useCallback:fa,useContext:Ge,useEffect:tu,useImperativeHandle:ca,useInsertionEffect:_a,useLayoutEffect:sa,useMemo:da,useReducer:Ti,useRef:ua,useState:function(){return Ti(Tr)},useDebugValue:nu,useDeferredValue:function(e){var t=Qe();return fe===null?t.memoizedState=e:pa(t,fe.memoizedState,e)},useTransition:function(){var e=Ti(Tr)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:ea,useSyncExternalStore:ta,useId:ha,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function to(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),l=Pt(e),i=ct(r,l);i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,l),t!==null&&(be(t,e,l,r),br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),l=Pt(e),i=ct(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=kt(e,i,l),t!==null&&(be(t,e,l,r),br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Pt(e),l=ct(n,r);l.tag=2,t!=null&&(l.callback=t),t=kt(e,l,r),t!==null&&(be(t,e,r,n),br(t,e,r))}};function o_(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(l,i):!0}function Ta(e,t,n){var r=!1,l=Ut,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(l=ke(t)?Yt:Ie.current,r=t.contextTypes,i=(r=r!=null)?Rn(e,l):Ut),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function u_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function no(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Xo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ge(i):(i=ke(t)?Yt:Ie.current,l.context=Rn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(to(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&$l.enqueueReplaceState(l,l.state,null),El(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=Uc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cd=typeof WeakMap=="function"?WeakMap:Map;function ya(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wl||(wl=!0,po=r),ro(e,t)},n}function La(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ro(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ro(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function __(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ad.bind(null,e,t,n),t.then(e,e))}function s_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function a_(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,kt(n,t,1))),n.lanes|=1),e)}var fd=mt.ReactCurrentOwner,Ne=!1;function Se(e,t,n,r){t.child=e===null?Js(t,null,n,r):Cn(t,e.child,n,r)}function c_(e,t,n,r,l){n=n.render;var i=t.ref;return In(t,l),r=bo(e,t,n,r,i,l),n=eu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ht(e,t,l)):(re&&n&&$o(t),t.flags|=1,Se(e,t,r,l),t.child)}function f_(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!au(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ea(e,t,i,r,l)):(e=il(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(o,r)&&e.ref===t.ref)return ht(e,t,l)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ea(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(fr(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,ht(e,t,l)}return lo(e,t,n,r,l)}function Ia(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(gn,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(gn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(gn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(gn,He),He|=r;return Se(e,t,l,n),t.child}function Sa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lo(e,t,n,r,l){var i=ke(n)?Yt:Ie.current;return i=Rn(t,i),In(t,l),n=bo(e,t,n,r,i,l),r=eu(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ht(e,t,l)):(re&&r&&$o(t),t.flags|=1,Se(e,t,n,l),t.child)}function d_(e,t,n,r,l){if(ke(n)){var i=!0;vl(t)}else i=!1;if(In(t,l),t.stateNode===null)nl(e,t),Ta(t,n,r),no(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var _=o.context,s=n.contextType;typeof s=="object"&&s!==null?s=Ge(s):(s=ke(n)?Yt:Ie.current,s=Rn(t,s));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||_!==s)&&u_(t,o,r,s),Lt=!1;var m=t.memoizedState;o.state=m,El(t,r,o,l),_=t.memoizedState,u!==r||m!==_||xe.current||Lt?(typeof h=="function"&&(to(t,n,h,r),_=t.memoizedState),(u=Lt||o_(t,n,u,r,m,_,s))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=s,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,qs(e,t),u=t.memoizedProps,s=t.type===t.elementType?u:Ye(t.type,u),o.props=s,p=t.pendingProps,m=o.context,_=n.contextType,typeof _=="object"&&_!==null?_=Ge(_):(_=ke(n)?Yt:Ie.current,_=Rn(t,_));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||m!==_)&&u_(t,o,r,_),Lt=!1,m=t.memoizedState,o.state=m,El(t,r,o,l);var S=t.memoizedState;u!==p||m!==S||xe.current||Lt?(typeof I=="function"&&(to(t,n,I,r),S=t.memoizedState),(s=Lt||o_(t,n,s,r,m,S,_)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,_),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,_)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=_,r=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return io(e,t,n,r,i,l)}function io(e,t,n,r,l,i){Sa(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&qu(t,n,!1),ht(e,t,i);r=t.stateNode,fd.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,u,i)):Se(e,t,u,i),t.memoizedState=r.state,l&&qu(t,n,!0),t.child}function Aa(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),Yo(e,t.containerInfo)}function p_(e,t,n,r,l){return wn(),Bo(l),t.flags|=256,Se(e,t,n,r),t.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ra(e,t,n){var r=t.pendingProps,l=le.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(le,l&1),e===null)return bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Vl(o,r,0,null),e=Xt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=uo(n),t.memoizedState=oo,e):ru(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return dd(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var _={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=_,t.deletions=null):(r=Mt(l,_),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Mt(u,i):(i=Xt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?uo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=oo,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ru(e,t){return t=Vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vr(e,t,n,r){return r!==null&&Bo(r),Cn(t,e.child,null,n),e=ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=yi(Error(R(422))),Vr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Vl({mode:"visible",children:r.children},l,0,null),i=Xt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Cn(t,e.child,null,o),t.child.memoizedState=uo(o),t.memoizedState=oo,i);if(!(t.mode&1))return Vr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(R(419)),r=yi(i,r,void 0),Vr(e,t,o,r)}if(u=(o&e.childLanes)!==0,Ne||u){if(r=he,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,pt(e,l),be(r,e,l,-1))}return su(),r=yi(Error(R(421))),Vr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Rd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,De=xt(l.nextSibling),Ue=t,re=!0,Ze=null,e!==null&&($e[je++]=st,$e[je++]=at,$e[je++]=Jt,st=e.id,at=e.overflow,Jt=t),t=ru(t,r.children),t.flags|=4096,t)}function h_(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),eo(e.return,t,n)}function Li(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function wa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&h_(e,n,t);else if(e.tag===19)h_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(le,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Li(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Li(t,!0,n,null,i);break;case"together":Li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pd(e,t,n){switch(t.tag){case 3:Aa(t),wn();break;case 5:bs(t);break;case 1:ke(t.type)&&vl(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;J(yl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Ra(e,t,n):(J(le,le.current&1),e=ht(e,t,n),e!==null?e.sibling:null);J(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Ia(e,t,n)}return ht(e,t,n)}var Ca,_o,Na,xa;Ca=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_o=function(){};Na=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Gt(it.current);var i=null;switch(n){case"input":l=xi(e,l),r=xi(e,r),i=[];break;case"select":l=oe({},l,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":l=Pi(e,l),r=Pi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hl)}Hi(n,r);var o;n=null;for(s in l)if(!r.hasOwnProperty(s)&&l.hasOwnProperty(s)&&l[s]!=null)if(s==="style"){var u=l[s];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ir.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var _=r[s];if(u=l!=null?l[s]:void 0,r.hasOwnProperty(s)&&_!==u&&(_!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||_&&_.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in _)_.hasOwnProperty(o)&&u[o]!==_[o]&&(n||(n={}),n[o]=_[o])}else n||(i||(i=[]),i.push(s,n)),n=_;else s==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,u=u?u.__html:void 0,_!=null&&u!==_&&(i=i||[]).push(s,_)):s==="children"?typeof _!="string"&&typeof _!="number"||(i=i||[]).push(s,""+_):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(ir.hasOwnProperty(s)?(_!=null&&s==="onScroll"&&b("scroll",e),i||u===_||(i=[])):(i=i||[]).push(s,_))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};xa=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hd(e,t,n){var r=t.pendingProps;switch(jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return ke(t.type)&&ml(),Le(t),null;case 3:return r=t.stateNode,Nn(),ee(xe),ee(Ie),Zo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(vo(Ze),Ze=null))),_o(e,t),Le(t),null;case 5:Jo(t);var l=Gt(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Na(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Le(t),null}if(e=Gt(it.current),jr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[rt]=t,r[hr]=i,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(l=0;l<Yn.length;l++)b(Yn[l],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Su(r,i),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},b("invalid",r);break;case"textarea":Ru(r,i),b("invalid",r)}Hi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&$r(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&$r(r.textContent,u,e),l=["children",""+u]):ir.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":Pr(r),Au(r,i,!0);break;case"textarea":Pr(r),wu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ls(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[rt]=t,e[hr]=r,Ca(e,t,!1,!1),t.stateNode=e;e:{switch(o=Di(n,r),n){case"dialog":b("cancel",e),b("close",e),l=r;break;case"iframe":case"object":case"embed":b("load",e),l=r;break;case"video":case"audio":for(l=0;l<Yn.length;l++)b(Yn[l],e);l=r;break;case"source":b("error",e),l=r;break;case"img":case"image":case"link":b("error",e),b("load",e),l=r;break;case"details":b("toggle",e),l=r;break;case"input":Su(e,r),l=xi(e,r),b("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=oe({},r,{value:void 0}),b("invalid",e);break;case"textarea":Ru(e,r),l=Pi(e,r),b("invalid",e);break;default:l=r}Hi(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var _=u[i];i==="style"?us(e,_):i==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,_!=null&&is(e,_)):i==="children"?typeof _=="string"?(n!=="textarea"||_!=="")&&or(e,_):typeof _=="number"&&or(e,""+_):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ir.hasOwnProperty(i)?_!=null&&i==="onScroll"&&b("scroll",e):_!=null&&wo(e,i,_,o))}switch(n){case"input":Pr(e),Au(e,r,!1);break;case"textarea":Pr(e),wu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)xa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Gt(vr.current),Gt(it.current),jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(i=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:$r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$r(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return Le(t),null;case 13:if(ee(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&De!==null&&t.mode&1&&!(t.flags&128))Xs(),wn(),t.flags|=98560,i=!1;else if(i=jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[rt]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else Ze!==null&&(vo(Ze),Ze=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?de===0&&(de=3):su())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Nn(),_o(e,t),e===null&&dr(t.stateNode.containerInfo),Le(t),null;case 10:return Qo(t.type._context),Le(t),null;case 17:return ke(t.type)&&ml(),Le(t),null;case 19:if(ee(le),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Vn(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Il(e),o!==null){for(t.flags|=128,Vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>kn&&(t.flags|=128,r=!0,Vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Il(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!re)return Le(t),null}else 2*se()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=le.current,J(le,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return _u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function md(e,t){switch(jo(t),t.tag){case 1:return ke(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),ee(xe),ee(Ie),Zo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Jo(t),null;case 13:if(ee(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(le),null;case 4:return Nn(),null;case 10:return Qo(t.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var Gr=!1,Ee=!1,vd=typeof WeakSet=="function"?WeakSet:Set,M=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function so(e,t,n){try{n()}catch(r){ue(e,t,r)}}var m_=!1;function gd(e,t){if(Qi=fl,e=Hs(),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,_=-1,s=0,h=0,p=e,m=null;t:for(;;){for(var I;p!==n||l!==0&&p.nodeType!==3||(u=o+l),p!==i||r!==0&&p.nodeType!==3||(_=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===e)break t;if(m===n&&++s===l&&(u=o),m===i&&++h===r&&(_=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=u===-1||_===-1?null:{start:u,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ki={focusedElem:e,selectionRange:n},fl=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,k=S.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?A:Ye(t.type,A),k);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){ue(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return S=m_,m_=!1,S}function nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&so(t,n,i)}l=l.next}while(l!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ao(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ka(e){var t=e.alternate;t!==null&&(e.alternate=null,ka(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[hr],delete t[Ji],delete t[ed],delete t[td])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oa(e){return e.tag===5||e.tag===3||e.tag===4}function v_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oa(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hl));else if(r!==4&&(e=e.child,e!==null))for(co(e,t,n),e=e.sibling;e!==null;)co(e,t,n),e=e.sibling}function fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fo(e,t,n),e=e.sibling;e!==null;)fo(e,t,n),e=e.sibling}var ve=null,Je=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Pa(e,t,n),n=n.sibling}function Pa(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ee||vn(n,t);case 6:var r=ve,l=Je;ve=null,Tt(e,t,n),ve=r,Je=l,ve!==null&&(Je?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(Je?(e=ve,n=n.stateNode,e.nodeType===8?pi(e.parentNode,n):e.nodeType===1&&pi(e,n),ar(e)):pi(ve,n.stateNode));break;case 4:r=ve,l=Je,ve=n.stateNode.containerInfo,Je=!0,Tt(e,t,n),ve=r,Je=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&so(n,t,o),l=l.next}while(l!==r)}Tt(e,t,n);break;case 1:if(!Ee&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ue(n,t,u)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Tt(e,t,n),Ee=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function g_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vd),t.forEach(function(r){var l=wd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,Je=!1;break e;case 3:ve=u.stateNode.containerInfo,Je=!0;break e;case 4:ve=u.stateNode.containerInfo,Je=!0;break e}u=u.return}if(ve===null)throw Error(R(160));Pa(i,o,l),ve=null,Je=!1;var _=l.alternate;_!==null&&(_.return=null),l.return=null}catch(s){ue(l,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ma(t,e),t=t.sibling}function Ma(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),tt(e),r&4){try{nr(3,e,e.return),jl(3,e)}catch(A){ue(e,e.return,A)}try{nr(5,e,e.return)}catch(A){ue(e,e.return,A)}}break;case 1:Xe(t,e),tt(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(Xe(t,e),tt(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var l=e.stateNode;try{or(l,"")}catch(A){ue(e,e.return,A)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,_=e.updateQueue;if(e.updateQueue=null,_!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ns(l,i),Di(u,o);var s=Di(u,i);for(o=0;o<_.length;o+=2){var h=_[o],p=_[o+1];h==="style"?us(l,p):h==="dangerouslySetInnerHTML"?is(l,p):h==="children"?or(l,p):wo(l,h,p,s)}switch(u){case"input":ki(l,i);break;case"textarea":rs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Tn(l,!!i.multiple,I,!1):m!==!!i.multiple&&(i.defaultValue!=null?Tn(l,!!i.multiple,i.defaultValue,!0):Tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[hr]=i}catch(A){ue(e,e.return,A)}}break;case 6:if(Xe(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(R(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(A){ue(e,e.return,A)}}break;case 3:if(Xe(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(A){ue(e,e.return,A)}break;case 4:Xe(t,e),tt(e);break;case 13:Xe(t,e),tt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ou=se())),r&4&&g_(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(s=Ee)||h,Xe(t,e),Ee=s):Xe(t,e),tt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(p=M=h;M!==null;){switch(m=M,I=m.child,m.tag){case 0:case 11:case 14:case 15:nr(4,m,m.return);break;case 1:vn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(A){ue(r,n,A)}}break;case 5:vn(m,m.return);break;case 22:if(m.memoizedState!==null){y_(p);continue}}I!==null?(I.return=m,M=I):y_(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{l=p.stateNode,s?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=p.stateNode,_=p.memoizedProps.style,o=_!=null&&_.hasOwnProperty("display")?_.display:null,u.style.display=os("display",o))}catch(A){ue(e,e.return,A)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(A){ue(e,e.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xe(t,e),tt(e),r&4&&g_(e);break;case 21:break;default:Xe(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oa(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(or(l,""),r.flags&=-33);var i=v_(e);fo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=v_(e);co(e,u,o);break;default:throw Error(R(161))}}catch(_){ue(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Td(e,t,n){M=e,Ha(e)}function Ha(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var l=M,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Gr;if(!o){var u=l.alternate,_=u!==null&&u.memoizedState!==null||Ee;u=Gr;var s=Ee;if(Gr=o,(Ee=_)&&!s)for(M=l;M!==null;)o=M,_=o.child,o.tag===22&&o.memoizedState!==null?L_(l):_!==null?(_.return=o,M=_):L_(l);for(;i!==null;)M=i,Ha(i),i=i.sibling;M=l,Gr=u,Ee=s}T_(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,M=i):T_(e)}}function T_(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&r_(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}r_(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var _=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":_.autoFocus&&n.focus();break;case"img":_.src&&(n.src=_.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var h=s.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ar(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ee||t.flags&512&&ao(t)}catch(m){ue(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function y_(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function L_(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(_){ue(t,n,_)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(_){ue(t,l,_)}}var i=t.return;try{ao(t)}catch(_){ue(t,i,_)}break;case 5:var o=t.return;try{ao(t)}catch(_){ue(t,o,_)}}}catch(_){ue(t,t.return,_)}if(t===e){M=null;break}var u=t.sibling;if(u!==null){u.return=t.return,M=u;break}M=t.return}}var yd=Math.ceil,Rl=mt.ReactCurrentDispatcher,lu=mt.ReactCurrentOwner,Ve=mt.ReactCurrentBatchConfig,G=0,he=null,ae=null,ge=0,He=0,gn=Ft(0),de=0,Lr=null,qt=0,Bl=0,iu=0,rr=null,Ce=null,ou=0,kn=1/0,ut=null,wl=!1,po=null,Ot=null,Qr=!1,At=null,Cl=0,lr=0,ho=null,rl=-1,ll=0;function Ae(){return G&6?se():rl!==-1?rl:rl=se()}function Pt(e){return e.mode&1?G&2&&ge!==0?ge&-ge:rd.transition!==null?(ll===0&&(ll=Ts()),ll):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Rs(e.type)),e):1}function be(e,t,n,r){if(50<lr)throw lr=0,ho=null,Error(R(185));Ar(e,n,r),(!(G&2)||e!==he)&&(e===he&&(!(G&2)&&(Bl|=n),de===4&&It(e,ge)),Oe(e,r),n===1&&G===0&&!(t.mode&1)&&(kn=se()+500,Fl&&zt()))}function Oe(e,t){var n=e.callbackNode;nf(e,t);var r=cl(e,e===he?ge:0);if(r===0)n!==null&&xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xu(n),t===1)e.tag===0?nd(E_.bind(null,e)):Gs(E_.bind(null,e)),qf(function(){!(G&6)&&zt()}),n=null;else{switch(ys(r)){case 1:n=Oo;break;case 4:n=vs;break;case 16:n=al;break;case 536870912:n=gs;break;default:n=al}n=Ba(n,Da.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Da(e,t){if(rl=-1,ll=0,G&6)throw Error(R(327));var n=e.callbackNode;if(Sn()&&e.callbackNode!==n)return null;var r=cl(e,e===he?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var l=G;G|=2;var i=Wa();(he!==e||ge!==t)&&(ut=null,kn=se()+500,Kt(e,t));do try{Id();break}catch(u){Ua(e,u)}while(!0);Go(),Rl.current=i,G=l,ae!==null?t=0:(he=null,ge=0,t=de)}if(t!==0){if(t===2&&(l=$i(e),l!==0&&(r=l,t=mo(e,l))),t===1)throw n=Lr,Kt(e,0),It(e,r),Oe(e,se()),n;if(t===6)It(e,r);else{if(l=e.current.alternate,!(r&30)&&!Ld(l)&&(t=Nl(e,r),t===2&&(i=$i(e),i!==0&&(r=i,t=mo(e,i))),t===1))throw n=Lr,Kt(e,0),It(e,r),Oe(e,se()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:jt(e,Ce,ut);break;case 3:if(It(e,r),(r&130023424)===r&&(t=ou+500-se(),10<t)){if(cl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Yi(jt.bind(null,e,Ce,ut),t);break}jt(e,Ce,ut);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-qe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yd(r/1960))-r,10<r){e.timeoutHandle=Yi(jt.bind(null,e,Ce,ut),r);break}jt(e,Ce,ut);break;case 5:jt(e,Ce,ut);break;default:throw Error(R(329))}}}return Oe(e,se()),e.callbackNode===n?Da.bind(null,e):null}function mo(e,t){var n=rr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&vo(t)),e}function vo(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Ld(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!et(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~iu,t&=~Bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function E_(e){if(G&6)throw Error(R(327));Sn();var t=cl(e,0);if(!(t&1))return Oe(e,se()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=$i(e);r!==0&&(t=r,n=mo(e,r))}if(n===1)throw n=Lr,Kt(e,0),It(e,t),Oe(e,se()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,Ce,ut),Oe(e,se()),null}function uu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(kn=se()+500,Fl&&zt())}}function bt(e){At!==null&&At.tag===0&&!(G&6)&&Sn();var t=G;G|=1;var n=Ve.transition,r=Q;try{if(Ve.transition=null,Q=1,e)return e()}finally{Q=r,Ve.transition=n,G=t,!(G&6)&&zt()}}function _u(){He=gn.current,ee(gn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zf(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Nn(),ee(xe),ee(Ie),Zo();break;case 5:Jo(r);break;case 4:Nn();break;case 13:ee(le);break;case 19:ee(le);break;case 10:Qo(r.type._context);break;case 22:case 23:_u()}n=n.return}if(he=e,ae=e=Mt(e.current,null),ge=He=t,de=0,Lr=null,iu=Bl=qt=0,Ce=rr=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Vt=null}return e}function Ua(e,t){do{var n=ae;try{if(Go(),el.current=Al,Sl){for(var r=ie.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sl=!1}if(Zt=0,pe=fe=ie=null,tr=!1,gr=0,lu.current=null,n===null||n.return===null){de=1,Lr=t,ae=null;break}e:{var i=e,o=n.return,u=n,_=t;if(t=ge,u.flags|=32768,_!==null&&typeof _=="object"&&typeof _.then=="function"){var s=_,h=u,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=s_(o);if(I!==null){I.flags&=-257,a_(I,o,u,i,t),I.mode&1&&__(i,s,t),t=I,_=s;var S=t.updateQueue;if(S===null){var A=new Set;A.add(_),t.updateQueue=A}else S.add(_);break e}else{if(!(t&1)){__(i,s,t),su();break e}_=Error(R(426))}}else if(re&&u.mode&1){var k=s_(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),a_(k,o,u,i,t),Bo(xn(_,u));break e}}i=_=xn(_,u),de!==4&&(de=2),rr===null?rr=[i]:rr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=ya(i,_,t);n_(i,f);break e;case 1:u=_;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ot===null||!Ot.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=La(i,u,t);n_(i,E);break e}}i=i.return}while(i!==null)}za(n)}catch(N){t=N,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Wa(){var e=Rl.current;return Rl.current=Al,e===null?Al:e}function su(){(de===0||de===3||de===2)&&(de=4),he===null||!(qt&268435455)&&!(Bl&268435455)||It(he,ge)}function Nl(e,t){var n=G;G|=2;var r=Wa();(he!==e||ge!==t)&&(ut=null,Kt(e,t));do try{Ed();break}catch(l){Ua(e,l)}while(!0);if(Go(),G=n,Rl.current=r,ae!==null)throw Error(R(261));return he=null,ge=0,de}function Ed(){for(;ae!==null;)Fa(ae)}function Id(){for(;ae!==null&&!Kc();)Fa(ae)}function Fa(e){var t=ja(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?za(e):ae=t,lu.current=null}function za(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=md(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ae=null;return}}else if(n=hd(n,t,He),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);de===0&&(de=5)}function jt(e,t,n){var r=Q,l=Ve.transition;try{Ve.transition=null,Q=1,Sd(e,t,n,r)}finally{Ve.transition=l,Q=r}return null}function Sd(e,t,n,r){do Sn();while(At!==null);if(G&6)throw Error(R(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rf(e,i),e===he&&(ae=he=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qr||(Qr=!0,Ba(al,function(){return Sn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var o=Q;Q=1;var u=G;G|=4,lu.current=null,gd(e,n),Ma(n,e),Vf(Ki),fl=!!Qi,Ki=Qi=null,e.current=n,Td(n),Xc(),G=u,Q=o,Ve.transition=i}else e.current=n;if(Qr&&(Qr=!1,At=e,Cl=l),i=e.pendingLanes,i===0&&(Ot=null),Zc(n.stateNode),Oe(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(wl)throw wl=!1,e=po,po=null,e;return Cl&1&&e.tag!==0&&Sn(),i=e.pendingLanes,i&1?e===ho?lr++:(lr=0,ho=e):lr=0,zt(),null}function Sn(){if(At!==null){var e=ys(Cl),t=Ve.transition,n=Q;try{if(Ve.transition=null,Q=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,Cl=0,G&6)throw Error(R(331));var l=G;for(G|=4,M=e.current;M!==null;){var i=M,o=i.child;if(M.flags&16){var u=i.deletions;if(u!==null){for(var _=0;_<u.length;_++){var s=u[_];for(M=s;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:nr(8,h,i)}var p=h.child;if(p!==null)p.return=h,M=p;else for(;M!==null;){h=M;var m=h.sibling,I=h.return;if(ka(h),h===s){M=null;break}if(m!==null){m.return=I,M=m;break}M=I}}}var S=i.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var k=A.sibling;A.sibling=null,A=k}while(A!==null)}}M=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,M=o;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:nr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,M=f;break e}M=i.return}}var c=e.current;for(M=c;M!==null;){o=M;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,M=d;else e:for(o=c;M!==null;){if(u=M,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:jl(9,u)}}catch(N){ue(u,u.return,N)}if(u===o){M=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,M=E;break e}M=u.return}}if(G=l,zt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{Q=n,Ve.transition=t}}return!1}function I_(e,t,n){t=xn(n,t),t=ya(e,t,1),e=kt(e,t,1),t=Ae(),e!==null&&(Ar(e,1,t),Oe(e,t))}function ue(e,t,n){if(e.tag===3)I_(e,e,n);else for(;t!==null;){if(t.tag===3){I_(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=xn(n,e),e=La(t,e,1),t=kt(t,e,1),e=Ae(),t!==null&&(Ar(t,1,e),Oe(t,e));break}}t=t.return}}function Ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ge&n)===n&&(de===4||de===3&&(ge&130023424)===ge&&500>se()-ou?Kt(e,0):iu|=n),Oe(e,t)}function $a(e,t){t===0&&(e.mode&1?(t=Dr,Dr<<=1,!(Dr&130023424)&&(Dr=4194304)):t=1);var n=Ae();e=pt(e,t),e!==null&&(Ar(e,t,n),Oe(e,n))}function Rd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$a(e,n)}function wd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),$a(e,n)}var ja;ja=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,pd(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,re&&t.flags&1048576&&Qs(t,Tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nl(e,t),e=t.pendingProps;var l=Rn(t,Ie.current);In(t,n),l=bo(null,t,r,e,l,n);var i=eu();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,vl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Xo(t),l.updater=$l,t.stateNode=l,l._reactInternals=t,no(t,r,e,n),t=io(null,t,r,!0,i,n)):(t.tag=0,re&&i&&$o(t),Se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nd(r),e=Ye(r,e),l){case 0:t=lo(null,t,r,e,n);break e;case 1:t=d_(null,t,r,e,n);break e;case 11:t=c_(null,t,r,e,n);break e;case 14:t=f_(null,t,r,Ye(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ye(r,l),lo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ye(r,l),d_(e,t,r,l,n);case 3:e:{if(Aa(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,l=i.element,qs(e,t),El(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=xn(Error(R(423)),t),t=p_(e,t,r,n,l);break e}else if(r!==l){l=xn(Error(R(424)),t),t=p_(e,t,r,n,l);break e}else for(De=xt(t.stateNode.containerInfo.firstChild),Ue=t,re=!0,Ze=null,n=Js(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===l){t=ht(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return bs(t),e===null&&bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Xi(r,l)?o=null:i!==null&&Xi(r,i)&&(t.flags|=32),Sa(e,t),Se(e,t,o,n),t.child;case 6:return e===null&&bi(t),null;case 13:return Ra(e,t,n);case 4:return Yo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ye(r,l),c_(e,t,r,l,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,J(yl,r._currentValue),r._currentValue=o,i!==null)if(et(i.value,o)){if(i.children===l.children&&!xe.current){t=ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var _=u.firstContext;_!==null;){if(_.context===r){if(i.tag===1){_=ct(-1,n&-n),_.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var h=s.pending;h===null?_.next=_:(_.next=h.next,h.next=_),s.pending=_}}i.lanes|=n,_=i.alternate,_!==null&&(_.lanes|=n),eo(i.return,n,t),u.lanes|=n;break}_=_.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(R(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),eo(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,In(t,n),l=Ge(l),r=r(l),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,l=Ye(r,t.pendingProps),l=Ye(r.type,l),f_(e,t,r,l,n);case 15:return Ea(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ye(r,l),nl(e,t),t.tag=1,ke(r)?(e=!0,vl(t)):e=!1,In(t,n),Ta(t,r,l),no(t,r,l,n),io(null,t,r,!0,e,n);case 19:return wa(e,t,n);case 22:return Ia(e,t,n)}throw Error(R(156,t.tag))};function Ba(e,t){return ms(e,t)}function Cd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new Cd(e,t,n,r)}function au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nd(e){if(typeof e=="function")return au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===No)return 11;if(e===xo)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")au(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case _n:return Xt(n.children,l,i,t);case Co:o=8,l|=8;break;case Ri:return e=Be(12,n,t,l|2),e.elementType=Ri,e.lanes=i,e;case wi:return e=Be(13,n,t,l),e.elementType=wi,e.lanes=i,e;case Ci:return e=Be(19,n,t,l),e.elementType=Ci,e.lanes=i,e;case b_:return Vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z_:o=10;break e;case q_:o=9;break e;case No:o=11;break e;case xo:o=14;break e;case yt:o=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Be(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Xt(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Vl(e,t,n,r){return e=Be(22,e,r,t),e.elementType=b_,e.lanes=n,e.stateNode={isHidden:!1},e}function Ei(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function Ii(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function cu(e,t,n,r,l,i,o,u,_){return e=new xd(e,t,n,u,_),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xo(i),e}function kd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Va(e){if(!e)return Ut;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(ke(n))return Vs(e,n,t)}return t}function Ga(e,t,n,r,l,i,o,u,_){return e=cu(n,r,!0,e,l,i,o,u,_),e.context=Va(null),n=e.current,r=Ae(),l=Pt(n),i=ct(r,l),i.callback=t??null,kt(n,i,l),e.current.lanes=l,Ar(e,l,r),Oe(e,r),e}function Gl(e,t,n,r){var l=t.current,i=Ae(),o=Pt(l);return n=Va(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kt(l,t,o),e!==null&&(be(e,l,o,i),br(e,l,o)),o}function xl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function S_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fu(e,t){S_(e,t),(e=e.alternate)&&S_(e,t)}function Od(){return null}var Qa=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}Ql.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Gl(e,t,null,null)};Ql.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){Gl(null,e,null,null)}),t[dt]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Is();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&As(e)}};function pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function A_(){}function Pd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var s=xl(o);i.call(s)}}var o=Ga(t,r,e,0,null,!1,!1,"",A_);return e._reactRootContainer=o,e[dt]=o.current,dr(e.nodeType===8?e.parentNode:e),bt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var s=xl(_);u.call(s)}}var _=cu(e,0,!1,null,null,!1,!1,"",A_);return e._reactRootContainer=_,e[dt]=_.current,dr(e.nodeType===8?e.parentNode:e),bt(function(){Gl(t,_,n,r)}),_}function Xl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var _=xl(o);u.call(_)}}Gl(t,o,e,l)}else o=Pd(n,t,e,l,r);return xl(o)}Ls=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xn(t.pendingLanes);n!==0&&(Po(t,n|1),Oe(t,se()),!(G&6)&&(kn=se()+500,zt()))}break;case 13:bt(function(){var r=pt(e,1);if(r!==null){var l=Ae();be(r,e,1,l)}}),fu(e,1)}};Mo=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=Ae();be(t,e,134217728,n)}fu(e,134217728)}};Es=function(e){if(e.tag===13){var t=Pt(e),n=pt(e,t);if(n!==null){var r=Ae();be(n,e,t,r)}fu(e,t)}};Is=function(){return Q};Ss=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Wi=function(e,t,n){switch(t){case"input":if(ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Wl(r);if(!l)throw Error(R(90));ts(r),ki(r,l)}}}break;case"textarea":rs(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};as=uu;cs=bt;var Md={usingClientEntryPoint:!1,Events:[wr,fn,Wl,_s,ss,uu]},Gn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hd={bundleType:Gn.bundleType,version:Gn.version,rendererPackageName:Gn.rendererPackageName,rendererConfig:Gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ps(e),e===null?null:e.stateNode},findFiberByHostInstance:Gn.findFiberByHostInstance||Od,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{Ml=Kr.inject(Hd),lt=Kr}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(t))throw Error(R(200));return kd(e,t,null,n)};Fe.createRoot=function(e,t){if(!pu(e))throw Error(R(299));var n=!1,r="",l=Qa;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=cu(e,1,!1,null,null,n,!1,r,l),e[dt]=t.current,dr(e.nodeType===8?e.parentNode:e),new du(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=ps(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return bt(e)};Fe.hydrate=function(e,t,n){if(!Kl(t))throw Error(R(200));return Xl(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!pu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Qa;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ga(t,null,e,1,n??null,l,!1,i,o),e[dt]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ql(t)};Fe.render=function(e,t,n){if(!Kl(t))throw Error(R(200));return Xl(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(R(40));return e._reactRootContainer?(bt(function(){Xl(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Fe.unstable_batchedUpdates=uu;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Kl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Xl(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Ka(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ka)}catch(e){console.error(e)}}Ka(),K_.exports=Fe;var Dd=K_.exports,Xa,R_=Dd;Xa=R_.createRoot,R_.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Er(){return Er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Er.apply(this,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const w_="popstate";function Ud(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:u}=r.location;return go("",{pathname:i,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:kl(l)}return Fd(t,n,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ya(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wd(){return Math.random().toString(36).substr(2,8)}function C_(e,t){return{usr:e.state,key:e.key,idx:t}}function go(e,t,n,r){return n===void 0&&(n=null),Er({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hn(t):t,{state:n,key:t&&t.key||r||Wd()})}function kl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fd(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,u=Rt.Pop,_=null,s=h();s==null&&(s=0,o.replaceState(Er({},o.state,{idx:s}),""));function h(){return(o.state||{idx:null}).idx}function p(){u=Rt.Pop;let k=h(),f=k==null?null:k-s;s=k,_&&_({action:u,location:A.location,delta:f})}function m(k,f){u=Rt.Push;let c=go(A.location,k,f);s=h()+1;let d=C_(c,s),E=A.createHref(c);try{o.pushState(d,"",E)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(E)}i&&_&&_({action:u,location:A.location,delta:1})}function I(k,f){u=Rt.Replace;let c=go(A.location,k,f);s=h();let d=C_(c,s),E=A.createHref(c);o.replaceState(d,"",E),i&&_&&_({action:u,location:A.location,delta:0})}function S(k){let f=l.location.origin!=="null"?l.location.origin:l.location.href,c=typeof k=="string"?k:kl(k);return c=c.replace(/ $/,"%20"),ce(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let A={get action(){return u},get location(){return e(l,o)},listen(k){if(_)throw new Error("A history only accepts one active listener");return l.addEventListener(w_,p),_=k,()=>{l.removeEventListener(w_,p),_=null}},createHref(k){return t(l,k)},createURL:S,encodeLocation(k){let f=S(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:I,go(k){return o.go(k)}};return A}var N_;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(N_||(N_={}));function zd(e,t,n){return n===void 0&&(n="/"),$d(e,t,n,!1)}function $d(e,t,n,r){let l=typeof t=="string"?Hn(t):t,i=hu(l.pathname||"/",n);if(i==null)return null;let o=Ja(e);jd(o);let u=null;for(let _=0;u==null&&_<o.length;++_){let s=bd(i);u=Zd(o[_],s,r)}return u}function Ja(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,u)=>{let _={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};_.relativePath.startsWith("/")&&(ce(_.relativePath.startsWith(r),'Absolute route path "'+_.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),_.relativePath=_.relativePath.slice(r.length));let s=Ht([r,_.relativePath]),h=n.concat(_);i.children&&i.children.length>0&&(ce(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Ja(i.children,t,h,s)),!(i.path==null&&!i.index)&&t.push({path:s,score:Yd(s,i.index),routesMeta:h})};return e.forEach((i,o)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))l(i,o);else for(let _ of Za(i.path))l(i,o,_)}),t}function Za(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Za(r.join("/")),u=[];return u.push(...o.map(_=>_===""?i:[i,_].join("/"))),l&&u.push(...o),u.map(_=>e.startsWith("/")&&_===""?"/":_)}function jd(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jd(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bd=/^:[\w-]+$/,Vd=3,Gd=2,Qd=1,Kd=10,Xd=-2,x_=e=>e==="*";function Yd(e,t){let n=e.split("/"),r=n.length;return n.some(x_)&&(r+=Xd),t&&(r+=Gd),n.filter(l=>!x_(l)).reduce((l,i)=>l+(Bd.test(i)?Vd:i===""?Qd:Kd),r)}function Jd(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Zd(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let u=0;u<r.length;++u){let _=r[u],s=u===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",p=k_({path:_.relativePath,caseSensitive:_.caseSensitive,end:s},h),m=_.route;if(!p&&s&&n&&!r[r.length-1].route.index&&(p=k_({path:_.relativePath,caseSensitive:_.caseSensitive,end:!1},h)),!p)return null;Object.assign(l,p.params),o.push({params:l,pathname:Ht([i,p.pathname]),pathnameBase:rp(Ht([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Ht([i,p.pathnameBase]))}return o}function k_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=qd(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((s,h,p)=>{let{paramName:m,isOptional:I}=h;if(m==="*"){let A=u[p]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const S=u[p];return I&&!S?s[m]=void 0:s[m]=(S||"").replace(/%2F/g,"/"),s},{}),pathname:i,pathnameBase:o,pattern:e}}function qd(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ya(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,_)=>(r.push({paramName:u,isOptional:_!=null}),_?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function bd(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ya(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ep(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Hn(e):e;return{pathname:n?n.startsWith("/")?n:tp(n,t):t,search:lp(r),hash:ip(l)}}function tp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Si(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function np(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qa(e,t){let n=np(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ba(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Hn(e):(l=Er({},e),ce(!l.pathname||!l.pathname.includes("?"),Si("?","pathname","search",l)),ce(!l.pathname||!l.pathname.includes("#"),Si("#","pathname","hash",l)),ce(!l.search||!l.search.includes("#"),Si("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,u;if(o==null)u=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;l.pathname=m.join("/")}u=p>=0?t[p]:"/"}let _=ep(l,u),s=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!_.pathname.endsWith("/")&&(s||h)&&(_.pathname+="/"),_}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),rp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ip=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function op(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ec=["post","put","patch","delete"];new Set(ec);const up=["get",...ec];new Set(up);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ir.apply(this,arguments)}const mu=O.createContext(null),_p=O.createContext(null),nn=O.createContext(null),Yl=O.createContext(null),rn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),tc=O.createContext(null);function sp(e,t){let{relative:n}=t===void 0?{}:t;Nr()||ce(!1);let{basename:r,navigator:l}=O.useContext(nn),{hash:i,pathname:o,search:u}=rc(e,{relative:n}),_=o;return r!=="/"&&(_=o==="/"?r:Ht([r,o])),l.createHref({pathname:_,search:u,hash:i})}function Nr(){return O.useContext(Yl)!=null}function Jl(){return Nr()||ce(!1),O.useContext(Yl).location}function nc(e){O.useContext(nn).static||O.useLayoutEffect(e)}function ap(){let{isDataRoute:e}=O.useContext(rn);return e?Ip():cp()}function cp(){Nr()||ce(!1);let e=O.useContext(mu),{basename:t,future:n,navigator:r}=O.useContext(nn),{matches:l}=O.useContext(rn),{pathname:i}=Jl(),o=JSON.stringify(qa(l,n.v7_relativeSplatPath)),u=O.useRef(!1);return nc(()=>{u.current=!0}),O.useCallback(function(s,h){if(h===void 0&&(h={}),!u.current)return;if(typeof s=="number"){r.go(s);return}let p=ba(s,JSON.parse(o),i,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ht([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,o,i,e])}function rc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=O.useContext(nn),{matches:l}=O.useContext(rn),{pathname:i}=Jl(),o=JSON.stringify(qa(l,r.v7_relativeSplatPath));return O.useMemo(()=>ba(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function fp(e,t){return dp(e,t)}function dp(e,t,n,r){Nr()||ce(!1);let{navigator:l}=O.useContext(nn),{matches:i}=O.useContext(rn),o=i[i.length-1],u=o?o.params:{};o&&o.pathname;let _=o?o.pathnameBase:"/";o&&o.route;let s=Jl(),h;if(t){var p;let k=typeof t=="string"?Hn(t):t;_==="/"||(p=k.pathname)!=null&&p.startsWith(_)||ce(!1),h=k}else h=s;let m=h.pathname||"/",I=m;if(_!=="/"){let k=_.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=zd(e,{pathname:I}),A=gp(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},u,k.params),pathname:Ht([_,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?_:Ht([_,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&A?O.createElement(Yl.Provider,{value:{location:Ir({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Rt.Pop}},A):A}function pp(){let e=Ep(),t=op(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:l},n):null,null)}const hp=O.createElement(pp,null);class mp extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(rn.Provider,{value:this.props.routeContext},O.createElement(tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vp(e){let{routeContext:t,match:n,children:r}=e,l=O.useContext(mu);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(rn.Provider,{value:t},r)}function gp(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,u=(l=n)==null?void 0:l.errors;if(u!=null){let h=o.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);h>=0||ce(!1),o=o.slice(0,Math.min(o.length,h+1))}let _=!1,s=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(s=h),p.route.id){let{loaderData:m,errors:I}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||S){_=!0,s>=0?o=o.slice(0,s+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let I,S=!1,A=null,k=null;n&&(I=u&&p.route.id?u[p.route.id]:void 0,A=p.route.errorElement||hp,_&&(s<0&&m===0?(S=!0,k=null):s===m&&(S=!0,k=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,m+1)),c=()=>{let d;return I?d=A:S?d=k:p.route.Component?d=O.createElement(p.route.Component,null):p.route.element?d=p.route.element:d=h,O.createElement(vp,{match:p,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:d})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(mp,{location:n.location,revalidation:n.revalidation,component:A,error:I,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var lc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lc||{}),Ol=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ol||{});function Tp(e){let t=O.useContext(mu);return t||ce(!1),t}function yp(e){let t=O.useContext(_p);return t||ce(!1),t}function Lp(e){let t=O.useContext(rn);return t||ce(!1),t}function ic(e){let t=Lp(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function Ep(){var e;let t=O.useContext(tc),n=yp(Ol.UseRouteError),r=ic(Ol.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ip(){let{router:e}=Tp(lc.UseNavigateStable),t=ic(Ol.UseNavigateStable),n=O.useRef(!1);return nc(()=>{n.current=!0}),O.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Ir({fromRouteId:t},i)))},[e,t])}function ol(e){ce(!1)}function Sp(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Rt.Pop,navigator:i,static:o=!1,future:u}=e;Nr()&&ce(!1);let _=t.replace(/^\/*/,"/"),s=O.useMemo(()=>({basename:_,navigator:i,static:o,future:Ir({v7_relativeSplatPath:!1},u)}),[_,u,i,o]);typeof r=="string"&&(r=Hn(r));let{pathname:h="/",search:p="",hash:m="",state:I=null,key:S="default"}=r,A=O.useMemo(()=>{let k=hu(h,_);return k==null?null:{location:{pathname:k,search:p,hash:m,state:I,key:S},navigationType:l}},[_,h,p,m,I,S,l]);return A==null?null:O.createElement(nn.Provider,{value:s},O.createElement(Yl.Provider,{children:n,value:A}))}function Ap(e){let{children:t,location:n}=e;return fp(To(t),n)}new Promise(()=>{});function To(e,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(e,(r,l)=>{if(!O.isValidElement(r))return;let i=[...t,l];if(r.type===O.Fragment){n.push.apply(n,To(r.props.children,i));return}r.type!==ol&&ce(!1),!r.props.index||!r.props.children||ce(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=To(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}function Rp(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function wp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cp(e,t){return e.button===0&&(!t||t==="_self")&&!wp(e)}const Np=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xp="6";try{window.__reactRouterVersion=xp}catch{}const kp="startTransition",O_=Sc[kp];function Op(e){let{basename:t,children:n,future:r,window:l}=e,i=O.useRef();i.current==null&&(i.current=Ud({window:l,v5Compat:!0}));let o=i.current,[u,_]=O.useState({action:o.action,location:o.location}),{v7_startTransition:s}=r||{},h=O.useCallback(p=>{s&&O_?O_(()=>_(p)):_(p)},[_,s]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.createElement(Sp,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:o,future:r})}const Pp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hp=O.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:u,target:_,to:s,preventScrollReset:h,unstable_viewTransition:p}=t,m=Rp(t,Np),{basename:I}=O.useContext(nn),S,A=!1;if(typeof s=="string"&&Mp.test(s)&&(S=s,Pp))try{let d=new URL(window.location.href),E=s.startsWith("//")?new URL(d.protocol+s):new URL(s),N=hu(E.pathname,I);E.origin===d.origin&&N!=null?s=N+E.search+E.hash:A=!0}catch{}let k=sp(s,{relative:l}),f=Dp(s,{replace:o,state:u,target:_,preventScrollReset:h,relative:l,unstable_viewTransition:p});function c(d){r&&r(d),d.defaultPrevented||f(d)}return O.createElement("a",yo({},m,{href:S||k,onClick:A||i?r:c,ref:n,target:_}))});var P_;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(P_||(P_={}));var M_;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(M_||(M_={}));function Dp(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:u}=t===void 0?{}:t,_=ap(),s=Jl(),h=rc(e,{relative:o});return O.useCallback(p=>{if(Cp(p,n)){p.preventDefault();let m=r!==void 0?r:kl(s)===kl(h);_(e,{replace:m,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:u})}},[s,_,h,r,l,n,e,i,o,u])}const Up="/Text2ArtJS/",Qt={BaseName:Up,Root:"/",FromText:"/from-text",Error404:"*"},Wp=()=>$.jsxs("div",{children:[$.jsx("h1",{children:"Error404"}),$.jsx("h4",{children:"Página no encontrada"}),$.jsx(Hp,{to:Qt.Root,children:"Volver"})]});var oc={exports:{}};(function(e){const t=(()=>{const o={},u={font:"Standard",fontPath:"./fonts"};function _(g,T){let a={},v,y,L,x,C=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(v=T!==null?T:g,y=0,L=C.length;y<L;)x=C[y],v>=x[0]?(v=v-x[0],a[x[1]]=typeof a[x[1]]>"u"?x[2]:a[x[1]]):x[1]!=="vLayout"&&x[1]!=="hLayout"&&(a[x[1]]=!1),y++;return typeof a.hLayout>"u"?g===0?a.hLayout=1:g===-1?a.hLayout=0:a.hRule1||a.hRule2||a.hRule3||a.hRule4||a.hRule5||a.hRule6?a.hLayout=3:a.hLayout=2:a.hLayout===2&&(a.hRule1||a.hRule2||a.hRule3||a.hRule4||a.hRule5||a.hRule6)&&(a.hLayout=3),typeof a.vLayout>"u"?a.vRule1||a.vRule2||a.vRule3||a.vRule4||a.vRule5?a.vLayout=3:a.vLayout=0:a.vLayout===2&&(a.vRule1||a.vRule2||a.vRule3||a.vRule4||a.vRule5)&&(a.vLayout=3),a}function s(g,T,a){return g===T&&g!==a?g:!1}function h(g,T){let a="|/\\[]{}()<>";if(g==="_"){if(a.indexOf(T)!==-1)return T}else if(T==="_"&&a.indexOf(g)!==-1)return g;return!1}function p(g,T){let a="| /\\ [] {} () <>",v=a.indexOf(g),y=a.indexOf(T);if(v!==-1&&y!==-1&&v!==y&&Math.abs(v-y)!==1){const L=Math.max(v,y),x=L+1;return a.substring(L,x)}return!1}function m(g,T){let a="[] {} ()",v=a.indexOf(g),y=a.indexOf(T);return v!==-1&&y!==-1&&Math.abs(v-y)<=1?"|":!1}function I(g,T){let a="/\\ \\/ ><",v={0:"|",3:"Y",6:"X"},y=a.indexOf(g),L=a.indexOf(T);return y!==-1&&L!==-1&&L-y===1?v[y]:!1}function S(g,T,a){return g===a&&T===a?a:!1}function A(g,T){return g===T?g:!1}function k(g,T){let a="|/\\[]{}()<>";if(g==="_"){if(a.indexOf(T)!==-1)return T}else if(T==="_"&&a.indexOf(g)!==-1)return g;return!1}function f(g,T){let a="| /\\ [] {} () <>",v=a.indexOf(g),y=a.indexOf(T);if(v!==-1&&y!==-1&&v!==y&&Math.abs(v-y)!==1){const L=Math.max(v,y),x=L+1;return a.substring(L,x)}return!1}function c(g,T){return g==="-"&&T==="_"||g==="_"&&T==="-"?"=":!1}function d(g,T){return g==="|"&&T==="|"?"|":!1}function E(g,T,a){return T===" "||T===""||T===a&&g!==" "?g:T}function N(g,T,a){if(a.fittingRules.vLayout===0)return"invalid";let v,y=Math.min(g.length,T.length),L,x,C=!1,w;if(y===0)return"invalid";for(v=0;v<y;v++)if(L=g.substring(v,v+1),x=T.substring(v,v+1),L!==" "&&x!==" "){if(a.fittingRules.vLayout===1)return"invalid";if(a.fittingRules.vLayout===2)return"end";if(d(L,x)){C=C||!1;continue}if(w=!1,w=a.fittingRules.vRule1?A(L,x):w,w=!w&&a.fittingRules.vRule2?k(L,x):w,w=!w&&a.fittingRules.vRule3?f(L,x):w,w=!w&&a.fittingRules.vRule4?c(L,x):w,C=!0,!w)return"invalid"}return C?"end":"valid"}function H(g,T,a){let v=g.length,y=g.length;T.length;let L,x,C,w=1,U,Z,X;for(;w<=v;){for(L=g.slice(Math.max(0,y-w),y),x=T.slice(0,Math.min(v,w)),C=x.length,X="",U=0;U<C;U++)if(Z=N(L[U],x[U],a),Z==="end")X=Z;else if(Z==="invalid"){X=Z;break}else X===""&&(X="valid");if(X==="invalid"){w--;break}if(X==="end")break;X==="valid"&&w++}return Math.min(v,w)}function D(g,T,a){let v,y=Math.min(g.length,T.length),L,x,C="",w;for(v=0;v<y;v++)L=g.substring(v,v+1),x=T.substring(v,v+1),L!==" "&&x!==" "?a.fittingRules.vLayout===1||a.fittingRules.vLayout===2?C+=E(L,x):(w=!1,w=a.fittingRules.vRule5?d(L,x):w,w=!w&&a.fittingRules.vRule1?A(L,x):w,w=!w&&a.fittingRules.vRule2?k(L,x):w,w=!w&&a.fittingRules.vRule3?f(L,x):w,w=!w&&a.fittingRules.vRule4?c(L,x):w,C+=w):C+=E(L,x);return C}function W(g,T,a,v){let y=g.length,L=T.length,x=g.slice(0,Math.max(0,y-a)),C=g.slice(Math.max(0,y-a),y),w=T.slice(0,Math.min(a,L)),U,Z,X,K=[],Y,Me=[];for(Z=C.length,U=0;U<Z;U++)U>=L?X=C[U]:X=D(C[U],w[U],v),K.push(X);return Y=T.slice(Math.min(a,L),L),Me.concat(x,K,Y)}function te(g,T){let a,v=g.length,y="";for(a=0;a<T;a++)y+=" ";for(a=0;a<v;a++)g[a]+=y}function j(g,T,a){let v=g[0].length,y=T[0].length,L;return v>y?te(T,v-y):y>v&&te(g,y-v),L=H(g,T,a),W(g,T,L,a)}function Pe(g,T,a){if(a.fittingRules.hLayout===0)return 0;let v,y=g.length,L=T.length,x=y,C=1,w=!1,U=!1,Z,X,K,Y;if(y===0)return 0;e:for(;C<=x;){const Me=y-C;for(Z=g.substring(Me,Me+C),X=T.substring(0,Math.min(C,L)),v=0;v<Math.min(C,L);v++)if(K=Z.substring(v,v+1),Y=X.substring(v,v+1),K!==" "&&Y!==" "){if(a.fittingRules.hLayout===1){C=C-1;break e}else if(a.fittingRules.hLayout===2){(K===a.hardBlank||Y===a.hardBlank)&&(C=C-1);break e}else if(w=!0,U=!1,U=a.fittingRules.hRule1?s(K,Y,a.hardBlank):U,U=!U&&a.fittingRules.hRule2?h(K,Y,a.hardBlank):U,U=!U&&a.fittingRules.hRule3?p(K,Y,a.hardBlank):U,U=!U&&a.fittingRules.hRule4?m(K,Y,a.hardBlank):U,U=!U&&a.fittingRules.hRule5?I(K,Y,a.hardBlank):U,U=!U&&a.fittingRules.hRule6?S(K,Y,a.hardBlank):U,!U){C=C-1;break e}}if(w)break;C++}return Math.min(x,C)}function ot(g,T,a,v){let y,L,x=[],C,w,U,Z,X,K,Y,Me;for(y=0;y<v.height;y++){Y=g[y],Me=T[y],X=Y.length,K=Me.length,C=X-a,w=Y.substr(0,Math.max(0,C)),U="";const vu=Math.max(0,X-a);var ln=Y.substring(vu,vu+a),xr=Me.substring(0,Math.min(a,K));for(L=0;L<a;L++){var _e=L<X?ln.substring(L,L+1):" ",me=L<K?xr.substring(L,L+1):" ";if(_e!==" "&&me!==" ")if(v.fittingRules.hLayout===1)U+=E(_e,me,v.hardBlank);else if(v.fittingRules.hLayout===2)U+=E(_e,me,v.hardBlank);else{var q="";q=!q&&v.fittingRules.hRule1?s(_e,me,v.hardBlank):q,q=!q&&v.fittingRules.hRule2?h(_e,me,v.hardBlank):q,q=!q&&v.fittingRules.hRule3?p(_e,me,v.hardBlank):q,q=!q&&v.fittingRules.hRule4?m(_e,me,v.hardBlank):q,q=!q&&v.fittingRules.hRule5?I(_e,me,v.hardBlank):q,q=!q&&v.fittingRules.hRule6?S(_e,me,v.hardBlank):q,q=q||E(_e,me,v.hardBlank),U+=q}else U+=E(_e,me,v.hardBlank)}a>=K?Z="":Z=Me.substring(a,a+Math.max(0,K-a)),x[y]=w+U+Z}return x}function Ke(g){let T=[],a;for(a=0;a<g;a++)T[a]="";return T}const vt=function(g){return Math.max.apply(Math,g.map(function(T,a){return T.length}))};function gt(g,T,a){return g.reduce(function(v,y){return ot(v,y.fig,y.overlap,a)},Ke(T))}function Dn(g,T,a){const v={};for(let y=g.length;--y;){let L=gt(g.slice(0,y),T,a);if(vt(L)<=a.width){v.outputFigText=L,y<g.length?v.chars=g.slice(y):v.chars=[];break}}return v}function Un(g,T,a){let v,y,L=0,x,C,w,U=a.height,Z=[],X,K,Y=[],Me,ln,xr,_e,me;for(C=Ke(U),a.width>0&&a.whitespaceBreak&&(K={chars:[],overlap:L}),a.printDirection===1&&(g=g.split("").reverse().join("")),w=g.length,v=0;v<w;v++)if(Me=g.substring(v,v+1),ln=Me.match(/\s/),y=T[Me.charCodeAt(0)],_e=null,y){if(a.fittingRules.hLayout!==0){for(L=1e4,x=0;x<a.height;x++)L=Math.min(L,Pe(C[x],y[x],a));L=L===1e4?0:L}if(a.width>0&&(a.whitespaceBreak?(xr=gt(K.chars.concat([{fig:y,overlap:L}]),U,a),_e=gt(Y.concat([{fig:xr,overlap:K.overlap}]),U,a),X=vt(_e)):(_e=ot(C,y,L,a),X=vt(_e)),X>=a.width&&v>0&&(a.whitespaceBreak?(C=gt(Y.slice(0,-1),U,a),Y.length>1&&(Z.push(C),C=Ke(U)),Y=[]):(Z.push(C),C=Ke(U)))),a.width>0&&a.whitespaceBreak&&((!ln||v===w-1)&&K.chars.push({fig:y,overlap:L}),ln||v===w-1)){for(me=null;_e=gt(K.chars,U,a),X=vt(_e),X>=a.width;)me=Dn(K.chars,U,a),K={chars:me.chars},Z.push(me.outputFigText);X>0&&(me?Y.push({fig:_e,overlap:1}):Y.push({fig:_e,overlap:K.overlap})),ln&&(Y.push({fig:y,overlap:L}),C=Ke(U)),v===w-1&&(C=gt(Y,U,a)),K={chars:[],overlap:L};continue}C=ot(C,y,L,a)}return vt(C)>0&&Z.push(C),a.showHardBlanks!==!0&&Z.forEach(function(q){for(w=q.length,x=0;x<w;x++)q[x]=q[x].replace(new RegExp("\\"+a.hardBlank,"g")," ")}),Z}const P=function(g,T){let a=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],v={},y;if(g==="default")for(y=0;y<a.length;y++)v[a[y]]=T.fittingRules[a[y]];else if(g==="full")v={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(g==="fitted")v={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(g==="controlled smushing")v={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(g==="universal smushing")v={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return v},F=function(g,T){let a=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],v={},y;if(g==="default")for(y=0;y<a.length;y++)v[a[y]]=T.fittingRules[a[y]];else if(g==="full")v={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(g==="fitted")v={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(g==="controlled smushing")v={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(g==="universal smushing")v={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return v},z=function(g,T,a){a=a.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let v=a.split(`
`),y=[],L,x,C;for(x=v.length,L=0;L<x;L++)y=y.concat(Un(v[L],o[g],T));for(x=y.length,C=y[0],L=1;L<x;L++)C=j(C,y[L],T);return C?C.join(`
`):""};function ne(g,T){let a=JSON.parse(JSON.stringify(g)),v,y;if(typeof T.horizontalLayout<"u"){v=P(T.horizontalLayout,g);for(y in v)v.hasOwnProperty(y)&&(a.fittingRules[y]=v[y])}if(typeof T.verticalLayout<"u"){v=F(T.verticalLayout,g);for(y in v)v.hasOwnProperty(y)&&(a.fittingRules[y]=v[y])}return a.printDirection=typeof T.printDirection<"u"?T.printDirection:g.printDirection,a.showHardBlanks=T.showHardBlanks||!1,a.width=T.width||-1,a.whitespaceBreak=T.whitespaceBreak||!1,a}const V=function(g,T,a){return V.text(g,T,a)};return V.text=async function(g,T,a){let v="";return g=g+"",typeof arguments[1]=="function"&&(a=T,T={},T.font=u.font),typeof T=="string"?(v=T,T={}):(T=T||{},v=T.font||u.font),await new Promise((y,L)=>{V.loadFont(v,function(x,C){if(x){L(x),a&&a(x);return}const w=z(v,ne(C,T),g);y(w),a&&a(null,w)})})},V.textSync=function(g,T){let a="";g=g+"",typeof T=="string"?(a=T,T={}):(T=T||{},a=T.font||u.font);var v=ne(V.loadFontSync(a),T);return z(a,v,g)},V.metadata=function(g,T){g=g+"",V.loadFont(g,function(a,v){if(a){T(a);return}T(null,v,o[g].comment)})},V.defaults=function(g){if(typeof g=="object"&&g!==null)for(var T in g)g.hasOwnProperty(T)&&(u[T]=g[T]);return JSON.parse(JSON.stringify(u))},V.parseFont=function(g,T){T=T.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o[g]={};var a=T.split(`
`),v=a.splice(0,1)[0].split(" "),y=o[g],L={};if(L.hardBlank=v[0].substr(5,1),L.height=parseInt(v[1],10),L.baseline=parseInt(v[2],10),L.maxLength=parseInt(v[3],10),L.oldLayout=parseInt(v[4],10),L.numCommentLines=parseInt(v[5],10),L.printDirection=v.length>=6?parseInt(v[6],10):0,L.fullLayout=v.length>=7?parseInt(v[7],10):null,L.codeTagCount=v.length>=8?parseInt(v[8],10):null,L.fittingRules=_(L.oldLayout,L.fullLayout),y.options=L,L.hardBlank.length!==1||isNaN(L.height)||isNaN(L.baseline)||isNaN(L.maxLength)||isNaN(L.oldLayout)||isNaN(L.numCommentLines))throw new Error("FIGlet header contains invalid values.");let x=[],C;for(C=32;C<=126;C++)x.push(C);if(x=x.concat(196,214,220,228,246,252,223),a.length<L.numCommentLines+L.height*x.length)throw new Error("FIGlet file is missing data.");let w,U,Z=!1;for(y.comment=a.splice(0,L.numCommentLines).join(`
`),y.numChars=0;a.length>0&&y.numChars<x.length;){for(w=x[y.numChars],y[w]=a.splice(0,L.height),C=0;C<L.height;C++)typeof y[w][C]>"u"?y[w][C]="":(U=new RegExp("\\"+y[w][C].substr(y[w][C].length-1,1)+"+$"),y[w][C]=y[w][C].replace(U,""));y.numChars++}for(;a.length>0;){if(w=a.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(w))w=parseInt(w,16);else if(/^0[0-7]+$/.test(w))w=parseInt(w,8);else if(/^[0-9]+$/.test(w))w=parseInt(w,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(w))w=parseInt(w,16);else{if(w==="")break;console.log("Invalid data:"+w),Z=!0;break}for(y[w]=a.splice(0,L.height),C=0;C<L.height;C++)typeof y[w][C]>"u"?y[w][C]="":(U=new RegExp("\\"+y[w][C].substr(y[w][C].length-1,1)+"+$"),y[w][C]=y[w][C].replace(U,""));y.numChars++}if(Z===!0)throw new Error("Error parsing data.");return L},V.loadFont=function(g,T){if(o[g]){T(null,o[g].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(u.fontPath+"/"+g+".flf").then(function(a){if(a.ok)return a.text();throw console.log("Unexpected response",a),new Error("Network response was not ok.")}).then(function(a){T(null,V.parseFont(g,a))}).catch(T)},V.loadFontSync=function(g){if(o[g])return o[g].options;throw new Error("synchronous font loading is not implemented for the browser")},V.preloadFonts=function(g,T){let a=[];g.reduce(function(v,y){return v.then(function(){return fetch(u.fontPath+"/"+y+".flf").then(L=>L.text()).then(function(L){a.push(L)})})},Promise.resolve()).then(function(v){for(var y in g)g.hasOwnProperty(y)&&V.parseFont(g[y],a[y]);T&&T()})},V.figFonts=o,V})();e.exports=t})(oc);var Fp=oc.exports;const Zl=H_(Fp),zp=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `,$p=`flf2a$ 9 8 15 0 20 0 16255 0
Author : myflix
Date   : 2004/9/26 12:46:52
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified June 17, 2007 by patorjk 
- Widened the space character.

Font modified May 26, 2012 by patorjk
- Switched the _ and - character (which were swapped).
- Added the 0xCA0 character
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $##
,---. #
|   | #
|   | #
|   | #
|   | #
|  .' #
\`--'  #
.--.  #
'--'  ##
         #
,--.,--. #
\\  |\\  | #
 \`-' \`-' #
         #
         #
         #
         #
         ##
             #
   ,-. ,-.   #
   | | | |   #
,--| |-| |--.#
'--| |-| |--'#
'--| |-| |--'#
   | | | |   #
   \`-' \`-'   #
             ##
   ,-.    #
 .-| |-.  #
|  | |_/  #
\\  | |.   #
 '-| | '. #
.- | |  | #
| \`| |  / #
 \`-| |'\`  #
   \`-'    ##
      ,-. #
 ,--. / / #
 '--'/ /  #
    / /   #
   / /    #
  / /     #
 / / ,--. #
/ /  '--' #
\`-'       ##
             #
 .-----.     #
/  .-.  \\    #
|  \\_.' /    #
/  .-. ',-.  #
| |   | . /_ #
\\  '-'  _.__)#
 \`----''     #
             ##
     #
,--. #
\\  | #
 \`-' #
     #
     #
     #
     #
     ##
  ,-. #
 /  | #
'  .' #
|  |  #
|  |  #
|  |  #
'  '. #
 \\  | #
  \`-' ##
,-.   #
|  \\  #
'.  ' #
 |  | #
 |  | #
 |  | #
.'  ' #
|  /  #
\`-'   ##
            #
    .-.     #
 .-,| |,-.  #
 _\\ ' ' /_  #
(__     __) #
  / . . \\   #
 \`-'| |\`-'  #
    \`-'     #
            ##
            #
            #
    ,-.     #
    | |     #
,---| |---. #
'---| |---' #
    | |     #
    \`-'     #
            ##
    #
    #
    #
    #
    #
    #
    #
.-. #
',/ ##
          #
          #
          #
   .-')   #
 _(  OO)  #
(,------. #
 '------' #
          #
          ##
    #
    #
    #
    #
    #
    #
    #
.-. #
\`-' ##
      ,-. #
      / / #
     / /  #
    / /   #
   / /    #
  / /     #
 / /      #
/ /       #
\`-'       ##
           #
           #
  .----.   #
 /  ..  \\  #
.  /  \\  . #
|  |  '  | #
'  \\  /  ' #
 \\  \`'  /  #
  \`---''   ##
       #
       #
 .---. #
/_   | #
 |   | #
 |   | #
 |   | #
 |   | #
 \`---' ##
          #
          #
 .-----.  #
/ ,-.   \\ #
'-'  |  | #
   .'  /  #
 .'  /__  #
|       | #
\`-------' ##
          #
          #
 .-----.  #
/  -.   \\ #
'-' _'  | #
   |_  <  #
.-.  |  | #
\\ \`-'   / #
 \`----''  ##
            #
            #
    .---.   #
   / .  |   #
  / /|  |   #
 / / |  |_  #
/  '-'    | #
\`----|  |-' #
     \`--'   ##
          #
          #
.------.  #
|   ___|  #
|  '--.   #
\`---.  '. #
.-   |  | #
| \`-'   / #
 \`----''  ##
          #
          #
  ,--.    #
 /  .'    #
.  / -.   #
| .-.  '  #
' \\  |  | #
\\  \`'  /  #
 \`----'   ##
           #
           #
.--------. #
|   __   ' #
\`--' .  /  #
    /  /   #
   .  /    #
  /  /     #
 \`--'      ##
            #
            #
  .-----.   #
 /  .-.  \\  #
|   \\_.' /  #
 /  .-. '.  #
|  |   |  | #
 \\  '-'  /  #
  \`----''   ##
           #
           #
  .----.   #
 /  ,.  \\  #
|  |  \\  | #
 '  \`-'  ' #
  \`- /  '  #
   ,'  /   #
  \`---'    ##
    #
    #
.-. #
\`-' #
    #
.-. #
\`-' #
    #
    ##
    #
    #
.-. #
'-' #
    #
.-. #
',/ #
    #
    ##
       #
   ,-. #
  / /  #
 / /   #
/ /    #
\\ \\    #
 \\ \\   #
  \\ \\  #
   \`-' ##
        #
        #
,-----. #
'-----' #
        #
,-----. #
'-----' #
        #
        ##
       #
,-.    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
   / / #
  / /  #
 / /   #
\`-'    ##
 ,------.  #
'  .--.  ' #
|  |  |  | #
'--'  |  | #
    __.  | #
   |   .'  #
   |___|   #
   .---.   #
   '---'   ##
          #
          #
   ____   #
 .' __ \\  #
/ .'  \\ | #
| | (_/ | #
\\ \`.__.'\\ #
 \`.___ .' #
          ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
,----. #
|    | #
|  .-' #
|  |   #
|  |   #
|  |   #
|  '-. #
|    | #
\`----' ##
,-.       #
\\ \\       #
 \\ \\      #
  \\ \\     #
   \\ \\    #
    \\ \\   #
     \\ \\  #
      \\ \\ #
      \`-' ##
,----. #
|    | #
\`-.  | #
  |  | #
  |  | #
  |  | #
.-'  | #
|    | #
\`----' ##
          #
          #
  ,---.   #
 /  \\  \\  #
\`--' \`--' #
          #
          #
          #
          ##
          #
          #
          #
          #
          #
  (\`-.    #
 (OO  )_  #
,------.) #
\`------'  ##
       #
       #
,--.   #
'.  \\  #
  \`--' #
       #
       #
       #
       ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
   ,--. #
  |   | #
  |  .' #
 .'  /  #
<   <   #
 \`.  \\  #
  |  '. #
  |   | #
   \`--' ##
,-. #
| | #
| | #
| | #
| | #
| | #
| | #
| | #
\`-' ##
,--.    #
|   |   #
'.  |   #
  \\  \`  #
   >  > #
  /  .  #
.'  |   #
|   |   #
\`--'    ##
           #
      .--, #
  .--'  /  #
 /  ---\`   #
\`--'       #
           #
           #
           #
           ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
�#
 #
 #
 #
 #
 #
 #
 #
 ##
0xCA0  KANNADA LETTER TTHA
          #
          #
  _ _ _ _)#
 |______/ #
 ,-----.  #
'  .-.  ' #
|  | |  | #
'  '-'  ' #
 \`-----'  ##`,jp=`flf2a$ 10 10 27 63 7 0 191 0
Font Author: ?

More info on font here:

https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp

FIGFont created with: http://patorjk.com/figfont-editor
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
 ___       @
|\\  \\      @
\\ \\  \\     @
 \\ \\  \\    @
  \\ \\__\\   @
   \\|__|   @
       ___ @
      |\\__\\@
      \\|__|@
           @@
@
@
@
@
@
@
@
@
@
@@
    ___    ___           @
   |\\  \\  |\\  \\          @
 __\\_\\  \\_\\_\\  \\_____    @
|\\____    ___    ____\\   @
\\|___| \\  \\__|\\  \\___|   @
    __\\_\\  \\_\\_\\  \\_____ @
   |\\____    ____   ____\\@
   \\|___| \\  \\__|\\  \\___|@
         \\ \\__\\ \\ \\__\\   @
          \\|__|  \\|__|   @@
   ___         @
 _|\\  \\__      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\___    __\\@
   \\|___|\\__\\_|@
        \\|__|  @@
 ___   /\\    @
|\\__\\ / /\\   @
\\|__|/ / /   @
    / / /___ @
   / / /|\\__\\@
  |\\/ / \\|__|@
   \\|/       @
             @
             @
             @@
 ________        @
|\\   __  \\       @
\\ \\  \\|\\  \\  /\\  @
 \\ \\__     \\/  \\ @
  \\|_/  __     /|@
    /  /_|\\   / /@
   /_______   \\/ @
   |_______|\\__\\ @
           \\|__| @
                 @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
      @
      @
  ___ @
 |\\__\\@
 \\|__|@
      @
      @
      @
      @
      @@
@
@
@
@
@
@
@
@
@
@@
         @
         @
         @
   ___   @
  |\\  \\  @
  \\ \\  \\ @
  _\\/  /|@
 |\\___/ /@
 \\|___|/ @
         @@
               @
               @
 ____________  @
|\\____________\\@
\\|____________|@
               @
               @
               @
               @
               @@
     @
     @
     @
     @
 ___ @
|\\__\\@
\\|__|@
     @
     @
     @@
      ___ @
     /  /|@
    /  // @
   /  //  @
  /  //   @
 /_ //    @
|__|/     @
          @
          @
          @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
  _____     @
 / __  \\    @
|\\/_|\\  \\   @
\\|/ \\ \\  \\  @
     \\ \\  \\ @
      \\ \\__\\@
       \\|__|@
            @
            @
            @@
  _______     @
 /  ___  \\    @
/__/|_/  /|   @
|__|//  / /   @
    /  /_/__  @
   |\\________\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\_____  \\    @
\\|____|\\ /_   @
      \\|\\  \\  @
     __\\_\\  \\ @
    |\\_______\\@
    \\|_______|@
              @
              @
              @@
 ___   ___     @
|\\  \\ |\\  \\    @
\\ \\  \\\\_\\  \\   @
 \\ \\______  \\  @
  \\|_____|\\  \\ @
         \\ \\__\\@
          \\|__|@
               @
               @
               @@
 ________      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\_________\\@
   \\|_________|@
               @
               @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\____   @
  \\ \\  ___  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________  @
|\\_____  \\ @
 \\|___/  /|@
     /  / /@
    /  / / @
   /__/ /  @
   |__|/   @
           @
           @
           @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\  ___  \\    @
\\ \\____   \\   @
 \\|____|\\  \\  @
     __\\_\\  \\ @
    |\\_______\\@
    \\|_______|@
              @
              @
              @@
        @
 ___    @
|\\__\\   @
\\|__|   @
    ___ @
   |\\__\\@
   \\|__|@
        @
        @
        @@
           @
  ___      @
 |\\__\\     @
 \\|__|     @
     ___   @
    |\\  \\  @
    \\ \\  \\ @
    _\\/  /|@
   |\\___/ /@
   \\|___|/ @@
    ___ @
   /  /|@
  /  / /@
 /  / / @
|\\  \\/  @
\\ \\  \\  @
 \\ \\__\\ @
  \\|__| @
        @
        @@
@
@
@
@
@
@
@
@
@
@@
 ___    @
|\\  \\   @
\\ \\  \\  @
 \\ \\  \\ @
  \\/  /|@
  /  // @
 /_ //  @
|__|/   @
        @
        @@
 ________      @
|\\_____  \\     @
\\|____|\\  \\    @
      \\ \\__\\   @
       \\|__|   @
           ___ @
          |\\__\\@
          \\|__|@
               @
               @@
@
@
@
@
@
@
@
@
@
@@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\ /_   @
 \\ \\   __  \\  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ___ \\    @
\\ \\  \\_|\\ \\   @
 \\ \\  \\ \\\\ \\  @
  \\ \\  \\_\\\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _______      @
|\\  ___ \\     @
\\ \\   __/|    @
 \\ \\  \\_|/__  @
  \\ \\  \\_|\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________ @
|\\  _____\\@
\\ \\  \\__/ @
 \\ \\   __\\@
  \\ \\  \\_|@
   \\ \\__\\ @
    \\|__| @
          @
          @
          @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\  ___  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ___     @
|\\  \\    @
\\ \\  \\   @
 \\ \\  \\  @
  \\ \\  \\ @
   \\ \\__\\@
    \\|__|@
         @
         @
         @@
    ___     @
   |\\  \\    @
   \\ \\  \\   @
 __ \\ \\  \\  @
|\\  \\\\_\\  \\ @
\\ \\________\\@
 \\|________|@
            @
            @
            @@
 ___  __       @
|\\  \\|\\  \\     @
\\ \\  \\/  /|_   @
 \\ \\   ___  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ___          @
|\\  \\         @
\\ \\  \\        @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _____ ______      @
|\\   _ \\  _   \\    @
\\ \\  \\\\\\__\\ \\  \\   @
 \\ \\  \\\\|__| \\  \\  @
  \\ \\  \\    \\ \\  \\ @
   \\ \\__\\    \\ \\__\\@
    \\|__|     \\|__|@
                   @
                   @
                   @@
 ________      @
|\\   ___  \\    @
\\ \\  \\\\ \\  \\   @
 \\ \\  \\\\ \\  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________   @
|\\   __  \\  @
\\ \\  \\|\\  \\ @
 \\ \\   ____\\@
  \\ \\  \\___|@
   \\ \\__\\   @
    \\|__|   @
            @
            @
            @@
 ________      @
|\\   __  \\     @
\\ \\  \\|\\  \\    @
 \\ \\  \\\\\\  \\   @
  \\ \\  \\\\\\  \\  @
   \\ \\_____  \\ @
    \\|___| \\__\\@
          \\|__|@
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   _  _\\  @
  \\ \\  \\\\  \\| @
   \\ \\__\\\\ _\\ @
    \\|__|\\|__|@
              @
              @
              @@
 ________      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\_________\\@
   \\|_________|@
               @
               @@
 _________   @
|\\___   ___\\ @
\\|___ \\  \\_| @
     \\ \\  \\  @
      \\ \\  \\ @
       \\ \\__\\@
        \\|__|@
             @
             @
             @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___      ___ @
|\\  \\    /  /|@
\\ \\  \\  /  / /@
 \\ \\  \\/  / / @
  \\ \\    / /  @
   \\ \\__/ /   @
    \\|__|/    @
              @
              @
              @@
 ___       __      @
|\\  \\     |\\  \\    @
\\ \\  \\    \\ \\  \\   @
 \\ \\  \\  __\\ \\  \\  @
  \\ \\  \\|\\__\\_\\  \\ @
   \\ \\____________\\@
    \\|____________|@
                   @
                   @
                   @@
 ___    ___ @
|\\  \\  /  /|@
\\ \\  \\/  / /@
 \\ \\    / / @
  /     \\/  @
 /  /\\   \\  @
/__/ /\\ __\\ @
|__|/ \\|__| @
            @
            @@
  ___    ___ @
 |\\  \\  /  /|@
 \\ \\  \\/  / /@
  \\ \\    / / @
   \\/  /  /  @
 __/  / /    @
|\\___/ /     @
\\|___|/      @
             @
             @@
 ________     @
|\\_____  \\    @
 \\|___/  /|   @
     /  / /   @
    /  /_/__  @
   |\\________\\@
    \\|_______|@
              @
              @
              @@
 ______      @
|\\   ___\\    @
\\ \\  \\__|    @
 \\ \\  \\      @
  \\ \\  \\____ @
   \\ \\______\\@
    \\|______|@
             @
             @
             @@
@
@
@
@
@
@
@
@
@
@@
 ______      @
|\\___   \\    @
\\|___|\\  \\   @
     \\ \\  \\  @
     _\\_\\  \\ @
    |\\______\\@
    \\|______|@
             @
             @
             @@
     ____    @
    /    \\   @
   /  /\\  \\  @
  /  /| \\  \\ @
 /__// \\ \\__\\@
|__|/   \\|__|@
             @
             @
             @
             @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\ /_   @
 \\ \\   __  \\  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ___ \\    @
\\ \\  \\_|\\ \\   @
 \\ \\  \\ \\\\ \\  @
  \\ \\  \\_\\\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _______      @
|\\  ___ \\     @
\\ \\   __/|    @
 \\ \\  \\_|/__  @
  \\ \\  \\_|\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________ @
|\\  _____\\@
\\ \\  \\__/ @
 \\ \\   __\\@
  \\ \\  \\_|@
   \\ \\__\\ @
    \\|__| @
          @
          @
          @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\  ___  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ___     @
|\\  \\    @
\\ \\  \\   @
 \\ \\  \\  @
  \\ \\  \\ @
   \\ \\__\\@
    \\|__|@
         @
         @
         @@
    ___     @
   |\\  \\    @
   \\ \\  \\   @
 __ \\ \\  \\  @
|\\  \\\\_\\  \\ @
\\ \\________\\@
 \\|________|@
            @
            @
            @@
 ___  __       @
|\\  \\|\\  \\     @
\\ \\  \\/  /|_   @
 \\ \\   ___  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ___          @
|\\  \\         @
\\ \\  \\        @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _____ ______      @
|\\   _ \\  _   \\    @
\\ \\  \\\\\\__\\ \\  \\   @
 \\ \\  \\\\|__| \\  \\  @
  \\ \\  \\    \\ \\  \\ @
   \\ \\__\\    \\ \\__\\@
    \\|__|     \\|__|@
                   @
                   @
                   @@
 ________      @
|\\   ___  \\    @
\\ \\  \\\\ \\  \\   @
 \\ \\  \\\\ \\  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________   @
|\\   __  \\  @
\\ \\  \\|\\  \\ @
 \\ \\   ____\\@
  \\ \\  \\___|@
   \\ \\__\\   @
    \\|__|   @
            @
            @
            @@
 ________      @
|\\   __  \\     @
\\ \\  \\|\\  \\    @
 \\ \\  \\\\\\  \\   @
  \\ \\  \\\\\\  \\  @
   \\ \\_____  \\ @
    \\|___| \\__\\@
          \\|__|@
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   _  _\\  @
  \\ \\  \\\\  \\| @
   \\ \\__\\\\ _\\ @
    \\|__|\\|__|@
              @
              @
              @@
 ________      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\_________\\@
   \\|_________|@
               @
               @@
 _________   @
|\\___   ___\\ @
\\|___ \\  \\_| @
     \\ \\  \\  @
      \\ \\  \\ @
       \\ \\__\\@
        \\|__|@
             @
             @
             @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___      ___ @
|\\  \\    /  /|@
\\ \\  \\  /  / /@
 \\ \\  \\/  / / @
  \\ \\    / /  @
   \\ \\__/ /   @
    \\|__|/    @
              @
              @
              @@
 ___       __      @
|\\  \\     |\\  \\    @
\\ \\  \\    \\ \\  \\   @
 \\ \\  \\  __\\ \\  \\  @
  \\ \\  \\|\\__\\_\\  \\ @
   \\ \\____________\\@
    \\|____________|@
                   @
                   @
                   @@
 ___    ___ @
|\\  \\  /  /|@
\\ \\  \\/  / /@
 \\ \\    / / @
  /     \\/  @
 /  /\\   \\  @
/__/ /\\ __\\ @
|__|/ \\|__| @
            @
            @@
  ___    ___ @
 |\\  \\  /  /|@
 \\ \\  \\/  / /@
  \\ \\    / / @
   \\/  /  /  @
 __/  / /    @
|\\___/ /     @
\\|___|/      @
             @
             @@
 ________     @
|\\_____  \\    @
 \\|___/  /|   @
     /  / /   @
    /  /_/__  @
   |\\________\\@
    \\|_______|@
              @
              @
              @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@`;Zl.parseFont("Standard",zp);Zl.parseFont("Ghost",$p);Zl.parseFont("3D-ASCII",jp);const Bp=()=>{const[e,t]=O.useState(""),[n,r]=O.useState("Hola mundo"),l=u=>{Zl.text(u.trim(),{font:"3D-ASCII",horizontalLayout:"controlled smushing",verticalLayout:"controlled smushing",width:n.length*120,whitespaceBreak:!0},function(_,s){t(s)})},i=u=>{if(u.preventDefault(),!n.trim()){alert("El texto es obligatorio.");return}l(n.trim())},o=()=>{t(""),r(""),l(""),alert("Arte limpiado.")};return O.useEffect(()=>{l("Hola mundo")},[]),$.jsxs("div",{className:"h-screen flex flex-col gap-10 items-center",children:[$.jsx("div",{className:"border-2 rounded-md p-4 w-min bg-teal-600",children:$.jsxs("form",{onSubmit:i,children:[$.jsxs("div",{className:"mb-4",children:[$.jsx("label",{htmlFor:"text",className:"block text-white",children:"Texto"}),$.jsx("textarea",{type:"text",id:"text",name:"text",value:n,onChange:u=>r(u.target.value),className:"block text-black px-2 py-2 rounded-md w-[400px] lg:w-[700px]"}),$.jsx("small",{className:"text-white",children:"Ingrese un texto para convertirlo a Art ASCII"})]}),$.jsx("div",{className:"mb-4",children:$.jsxs("div",{className:"flex justify-between",children:[$.jsx("button",{className:"bg-slate-800 py-2 px-4 rounded-md text-white",children:"Generar"}),$.jsx("button",{type:"button",onClick:o,className:"bg-slate-800 py-2 px-4 rounded-md text-white",children:"Limpiar"})]})})]})}),$.jsx("div",{className:"mt-4 mb-4 w-full overflow-auto shadow-xl",children:$.jsx("div",{className:"p-4 bg-white border-slate-900 border-2 text-black rounded-lg",children:$.jsx("pre",{className:"whitespace-pre overflow-auto max-w-full h-[240px]",children:e})})})]})},Vp=()=>$.jsx(Op,{basename:Qt.BaseName,children:$.jsxs(Ap,{children:[$.jsx(ol,{path:Qt.Root,element:$.jsx("h1",{children:"Página de root"})}),$.jsx(ol,{path:Qt.FromText,element:$.jsx(Bp,{})}),$.jsx(ol,{path:Qt.Error404,element:$.jsx(Wp,{})})]})}),Gp=()=>$.jsxs("div",{className:"container lg:w-11/12 mx-auto",children:[$.jsx("header",{className:"py-2",children:$.jsx("nav",{className:"py-2",children:$.jsxs("ul",{children:[$.jsx("i",{children:$.jsx("a",{href:Qt.Root,children:"Home"})}),$.jsx("i",{children:$.jsx("a",{href:Qt.FromText,children:"Desde Texto"})})]})})}),$.jsx("main",{className:"h-screen",children:$.jsx(Vp,{})}),$.jsx("footer",{children:$.jsx("p",{className:"text-center py-4 bg-slate-800 text-white",children:"Created by: Víctor J."})})]}),Qp=()=>$.jsx(Gp,{});Xa(document.getElementById("root")).render($.jsx(O.StrictMode,{children:$.jsx(Qp,{})}));
