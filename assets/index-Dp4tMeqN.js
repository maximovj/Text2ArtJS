function is(_,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const $ in n)if($!=="default"&&!($ in _)){const r=Object.getOwnPropertyDescriptor(n,$);r&&Object.defineProperty(_,$,r.get?r:{enumerable:!0,get:()=>n[$]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const $ of document.querySelectorAll('link[rel="modulepreload"]'))n($);new MutationObserver($=>{for(const r of $)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t($){const r={};return $.integrity&&(r.integrity=$.integrity),$.referrerPolicy&&(r.referrerPolicy=$.referrerPolicy),$.crossOrigin==="use-credentials"?r.credentials="include":$.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n($){if($.ep)return;$.ep=!0;const r=t($);fetch($.href,r)}})();function ki(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var Wi={exports:{}},H$={},Ui={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cn=Symbol.for("react.element"),as=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),cs=Symbol.for("react.profiler"),Ts=Symbol.for("react.provider"),fs=Symbol.for("react.context"),ds=Symbol.for("react.forward_ref"),Ls=Symbol.for("react.suspense"),Es=Symbol.for("react.memo"),Is=Symbol.for("react.lazy"),Io=Symbol.iterator;function As(_){return _===null||typeof _!="object"?null:(_=Io&&_[Io]||_["@@iterator"],typeof _=="function"?_:null)}var Di={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fi=Object.assign,Gi={};function Ot(_,e,t){this.props=_,this.context=e,this.refs=Gi,this.updater=t||Di}Ot.prototype.isReactComponent={};Ot.prototype.setState=function(_,e){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,e,"setState")};Ot.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function ji(){}ji.prototype=Ot.prototype;function hl(_,e,t){this.props=_,this.context=e,this.refs=Gi,this.updater=t||Di}var pl=hl.prototype=new ji;pl.constructor=hl;Fi(pl,Ot.prototype);pl.isPureReactComponent=!0;var Ao=Array.isArray,Vi=Object.prototype.hasOwnProperty,ml={current:null},Bi={key:!0,ref:!0,__self:!0,__source:!0};function Yi(_,e,t){var n,$={},r=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(r=""+e.key),e)Vi.call(e,n)&&!Bi.hasOwnProperty(n)&&($[n]=e[n]);var o=arguments.length-2;if(o===1)$.children=t;else if(1<o){for(var i=Array(o),a=0;a<o;a++)i[a]=arguments[a+2];$.children=i}if(_&&_.defaultProps)for(n in o=_.defaultProps,o)$[n]===void 0&&($[n]=o[n]);return{$$typeof:Cn,type:_,key:r,ref:l,props:$,_owner:ml.current}}function hs(_,e){return{$$typeof:Cn,type:_.type,key:e,ref:_.ref,props:_.props,_owner:_._owner}}function Rl(_){return typeof _=="object"&&_!==null&&_.$$typeof===Cn}function ps(_){var e={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(t){return e[t]})}var ho=/\/+/g;function Z$(_,e){return typeof _=="object"&&_!==null&&_.key!=null?ps(""+_.key):e.toString(36)}function bn(_,e,t,n,$){var r=typeof _;(r==="undefined"||r==="boolean")&&(_=null);var l=!1;if(_===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(_.$$typeof){case Cn:case as:l=!0}}if(l)return l=_,$=$(l),_=n===""?"."+Z$(l,0):n,Ao($)?(t="",_!=null&&(t=_.replace(ho,"$&/")+"/"),bn($,e,t,"",function(a){return a})):$!=null&&(Rl($)&&($=hs($,t+(!$.key||l&&l.key===$.key?"":(""+$.key).replace(ho,"$&/")+"/")+_)),e.push($)),1;if(l=0,n=n===""?".":n+":",Ao(_))for(var o=0;o<_.length;o++){r=_[o];var i=n+Z$(r,o);l+=bn(r,e,t,i,$)}else if(i=As(_),typeof i=="function")for(_=i.call(_),o=0;!(r=_.next()).done;)r=r.value,i=n+Z$(r,o++),l+=bn(r,e,t,i,$);else if(r==="object")throw e=String(_),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Mn(_,e,t){if(_==null)return _;var n=[],$=0;return bn(_,n,"","",function(r){return e.call(t,r,$++)}),n}function ms(_){if(_._status===-1){var e=_._result;e=e(),e.then(function(t){(_._status===0||_._status===-1)&&(_._status=1,_._result=t)},function(t){(_._status===0||_._status===-1)&&(_._status=2,_._result=t)}),_._status===-1&&(_._status=0,_._result=e)}if(_._status===1)return _._result.default;throw _._result}var S_={current:null},Zn={transition:null},Rs={ReactCurrentDispatcher:S_,ReactCurrentBatchConfig:Zn,ReactCurrentOwner:ml};function zi(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Mn,forEach:function(_,e,t){Mn(_,function(){e.apply(this,arguments)},t)},count:function(_){var e=0;return Mn(_,function(){e++}),e},toArray:function(_){return Mn(_,function(e){return e})||[]},only:function(_){if(!Rl(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};V.Component=Ot;V.Fragment=us;V.Profiler=cs;V.PureComponent=hl;V.StrictMode=ss;V.Suspense=Ls;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rs;V.act=zi;V.cloneElement=function(_,e,t){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var n=Fi({},_.props),$=_.key,r=_.ref,l=_._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,l=ml.current),e.key!==void 0&&($=""+e.key),_.type&&_.type.defaultProps)var o=_.type.defaultProps;for(i in e)Vi.call(e,i)&&!Bi.hasOwnProperty(i)&&(n[i]=e[i]===void 0&&o!==void 0?o[i]:e[i])}var i=arguments.length-2;if(i===1)n.children=t;else if(1<i){o=Array(i);for(var a=0;a<i;a++)o[a]=arguments[a+2];n.children=o}return{$$typeof:Cn,type:_.type,key:$,ref:r,props:n,_owner:l}};V.createContext=function(_){return _={$$typeof:fs,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:Ts,_context:_},_.Consumer=_};V.createElement=Yi;V.createFactory=function(_){var e=Yi.bind(null,_);return e.type=_,e};V.createRef=function(){return{current:null}};V.forwardRef=function(_){return{$$typeof:ds,render:_}};V.isValidElement=Rl;V.lazy=function(_){return{$$typeof:Is,_payload:{_status:-1,_result:_},_init:ms}};V.memo=function(_,e){return{$$typeof:Es,type:_,compare:e===void 0?null:e}};V.startTransition=function(_){var e=Zn.transition;Zn.transition={};try{_()}finally{Zn.transition=e}};V.unstable_act=zi;V.useCallback=function(_,e){return S_.current.useCallback(_,e)};V.useContext=function(_){return S_.current.useContext(_)};V.useDebugValue=function(){};V.useDeferredValue=function(_){return S_.current.useDeferredValue(_)};V.useEffect=function(_,e){return S_.current.useEffect(_,e)};V.useId=function(){return S_.current.useId()};V.useImperativeHandle=function(_,e,t){return S_.current.useImperativeHandle(_,e,t)};V.useInsertionEffect=function(_,e){return S_.current.useInsertionEffect(_,e)};V.useLayoutEffect=function(_,e){return S_.current.useLayoutEffect(_,e)};V.useMemo=function(_,e){return S_.current.useMemo(_,e)};V.useReducer=function(_,e,t){return S_.current.useReducer(_,e,t)};V.useRef=function(_){return S_.current.useRef(_)};V.useState=function(_){return S_.current.useState(_)};V.useSyncExternalStore=function(_,e,t){return S_.current.useSyncExternalStore(_,e,t)};V.useTransition=function(){return S_.current.useTransition()};V.version="18.3.1";Ui.exports=V;var x=Ui.exports;const gs=ki(x),vs=is({__proto__:null,default:gs},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=x,Ss=Symbol.for("react.element"),Ns=Symbol.for("react.fragment"),ys=Object.prototype.hasOwnProperty,xs=Cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ps={key:!0,ref:!0,__self:!0,__source:!0};function Ki(_,e,t){var n,$={},r=null,l=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)ys.call(e,n)&&!Ps.hasOwnProperty(n)&&($[n]=e[n]);if(_&&_.defaultProps)for(n in e=_.defaultProps,e)$[n]===void 0&&($[n]=e[n]);return{$$typeof:Ss,type:_,key:r,ref:l,props:$,_owner:xs.current}}H$.Fragment=Ns;H$.jsx=Ki;H$.jsxs=Ki;Wi.exports=H$;var N=Wi.exports,Xi={exports:{}},G_={},Qi={exports:{}},Ji={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(_){function e(M,F){var G=M.length;M.push(F);_:for(;0<G;){var t_=G-1>>>1,B=M[t_];if(0<$(B,F))M[t_]=F,M[G]=B,G=t_;else break _}}function t(M){return M.length===0?null:M[0]}function n(M){if(M.length===0)return null;var F=M[0],G=M.pop();if(G!==F){M[0]=G;_:for(var t_=0,B=M.length,I=B>>>1;t_<I;){var A=2*(t_+1)-1,u=M[A],E=A+1,h=M[E];if(0>$(u,G))E<B&&0>$(h,u)?(M[t_]=h,M[E]=G,t_=E):(M[t_]=u,M[A]=G,t_=A);else if(E<B&&0>$(h,G))M[t_]=h,M[E]=G,t_=E;else break _}}return F}function $(M,F){var G=M.sortIndex-F.sortIndex;return G!==0?G:M.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;_.unstable_now=function(){return r.now()}}else{var l=Date,o=l.now();_.unstable_now=function(){return l.now()-o}}var i=[],a=[],L=1,f=null,d=3,g=!1,v=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(M){for(var F=t(a);F!==null;){if(F.callback===null)n(a);else if(F.startTime<=M)n(a),F.sortIndex=F.expirationTime,e(i,F);else break;F=t(a)}}function p(M){if(R=!1,T(M),!v)if(t(i)!==null)v=!0,kt(O);else{var F=t(a);F!==null&&Wt(p,F.startTime-M)}}function O(M,F){v=!1,R&&(R=!1,c(U),U=-1),g=!0;var G=d;try{for(T(F),f=t(i);f!==null&&(!(f.expirationTime>F)||M&&!g_());){var t_=f.callback;if(typeof t_=="function"){f.callback=null,d=f.priorityLevel;var B=t_(f.expirationTime<=F);F=_.unstable_now(),typeof B=="function"?f.callback=B:f===t(i)&&n(i),T(F)}else n(i);f=t(i)}if(f!==null)var I=!0;else{var A=t(a);A!==null&&Wt(p,A.startTime-F),I=!1}return I}finally{f=null,d=G,g=!1}}var k=!1,W=null,U=-1,Q=5,j=-1;function g_(){return!(_.unstable_now()-j<Q)}function Q_(){if(W!==null){var M=_.unstable_now();j=M;var F=!0;try{F=W(!0,M)}finally{F?H_():(k=!1,W=null)}}else k=!1}var H_;if(typeof s=="function")H_=function(){s(Q_)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Ae=Ie.port2;Ie.port1.onmessage=Q_,H_=function(){Ae.postMessage(null)}}else H_=function(){P(Q_,0)};function kt(M){W=M,k||(k=!0,H_())}function Wt(M,F){U=P(function(){M(_.unstable_now())},F)}_.unstable_IdlePriority=5,_.unstable_ImmediatePriority=1,_.unstable_LowPriority=4,_.unstable_NormalPriority=3,_.unstable_Profiling=null,_.unstable_UserBlockingPriority=2,_.unstable_cancelCallback=function(M){M.callback=null},_.unstable_continueExecution=function(){v||g||(v=!0,kt(O))},_.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<M?Math.floor(1e3/M):5},_.unstable_getCurrentPriorityLevel=function(){return d},_.unstable_getFirstCallbackNode=function(){return t(i)},_.unstable_next=function(M){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var G=d;d=F;try{return M()}finally{d=G}},_.unstable_pauseExecution=function(){},_.unstable_requestPaint=function(){},_.unstable_runWithPriority=function(M,F){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var G=d;d=M;try{return F()}finally{d=G}},_.unstable_scheduleCallback=function(M,F,G){var t_=_.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?t_+G:t_):G=t_,M){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=G+B,M={id:L++,callback:F,priorityLevel:M,startTime:G,expirationTime:B,sortIndex:-1},G>t_?(M.sortIndex=G,e(a,M),t(i)===null&&M===t(a)&&(R?(c(U),U=-1):R=!0,Wt(p,G-t_))):(M.sortIndex=B,e(i,M),v||g||(v=!0,kt(O))),M},_.unstable_shouldYield=g_,_.unstable_wrapCallback=function(M){var F=d;return function(){var G=d;d=F;try{return M.apply(this,arguments)}finally{d=G}}}})(Ji);Qi.exports=Ji;var Os=Qi.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=x,F_=Os;function C(_){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+_,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+_+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bi=new Set,ln={};function et(_,e){vt(_,e),vt(_+"Capture",e)}function vt(_,e){for(ln[_]=e,_=0;_<e.length;_++)bi.add(e[_])}var Te=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vr=Object.prototype.hasOwnProperty,Ms=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,po={},mo={};function Hs(_){return vr.call(mo,_)?!0:vr.call(po,_)?!1:Ms.test(_)?mo[_]=!0:(po[_]=!0,!1)}function ks(_,e,t,n){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(_=_.toLowerCase().slice(0,5),_!=="data-"&&_!=="aria-");default:return!1}}function Ws(_,e,t,n){if(e===null||typeof e>"u"||ks(_,e,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function N_(_,e,t,n,$,r,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=$,this.mustUseProperty=t,this.propertyName=_,this.type=e,this.sanitizeURL=r,this.removeEmptyString=l}var A_={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(_){A_[_]=new N_(_,0,!1,_,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(_){var e=_[0];A_[e]=new N_(e,1,!1,_[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(_){A_[_]=new N_(_,2,!1,_.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(_){A_[_]=new N_(_,2,!1,_,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(_){A_[_]=new N_(_,3,!1,_.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(_){A_[_]=new N_(_,3,!0,_,null,!1,!1)});["capture","download"].forEach(function(_){A_[_]=new N_(_,4,!1,_,null,!1,!1)});["cols","rows","size","span"].forEach(function(_){A_[_]=new N_(_,6,!1,_,null,!1,!1)});["rowSpan","start"].forEach(function(_){A_[_]=new N_(_,5,!1,_.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function vl(_){return _[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(_){var e=_.replace(gl,vl);A_[e]=new N_(e,1,!1,_,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(_){var e=_.replace(gl,vl);A_[e]=new N_(e,1,!1,_,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(_){var e=_.replace(gl,vl);A_[e]=new N_(e,1,!1,_,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(_){A_[_]=new N_(_,1,!1,_.toLowerCase(),null,!1,!1)});A_.xlinkHref=new N_("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(_){A_[_]=new N_(_,1,!1,_.toLowerCase(),null,!0,!0)});function Cl(_,e,t,n){var $=A_.hasOwnProperty(e)?A_[e]:null;($!==null?$.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ws(e,t,$,n)&&(t=null),n||$===null?Hs(e)&&(t===null?_.removeAttribute(e):_.setAttribute(e,""+t)):$.mustUseProperty?_[$.propertyName]=t===null?$.type===3?!1:"":t:(e=$.attributeName,n=$.attributeNamespace,t===null?_.removeAttribute(e):($=$.type,t=$===3||$===4&&t===!0?"":""+t,n?_.setAttributeNS(n,e,t):_.setAttribute(e,t))))}var Ee=ws.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hn=Symbol.for("react.element"),ot=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),Sl=Symbol.for("react.strict_mode"),Cr=Symbol.for("react.profiler"),Zi=Symbol.for("react.provider"),qi=Symbol.for("react.context"),Nl=Symbol.for("react.forward_ref"),Sr=Symbol.for("react.suspense"),Nr=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),_a=Symbol.for("react.offscreen"),Ro=Symbol.iterator;function Ut(_){return _===null||typeof _!="object"?null:(_=Ro&&_[Ro]||_["@@iterator"],typeof _=="function"?_:null)}var l_=Object.assign,q$;function zt(_){if(q$===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);q$=e&&e[1]||""}return`
`+q$+_}var _r=!1;function er(_,e){if(!_||_r)return"";_r=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(a){var n=a}Reflect.construct(_,[],e)}else{try{e.call()}catch(a){n=a}_.call(e.prototype)}else{try{throw Error()}catch(a){n=a}_()}}catch(a){if(a&&n&&typeof a.stack=="string"){for(var $=a.stack.split(`
`),r=n.stack.split(`
`),l=$.length-1,o=r.length-1;1<=l&&0<=o&&$[l]!==r[o];)o--;for(;1<=l&&0<=o;l--,o--)if($[l]!==r[o]){if(l!==1||o!==1)do if(l--,o--,0>o||$[l]!==r[o]){var i=`
`+$[l].replace(" at new "," at ");return _.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",_.displayName)),i}while(1<=l&&0<=o);break}}}finally{_r=!1,Error.prepareStackTrace=t}return(_=_?_.displayName||_.name:"")?zt(_):""}function Us(_){switch(_.tag){case 5:return zt(_.type);case 16:return zt("Lazy");case 13:return zt("Suspense");case 19:return zt("SuspenseList");case 0:case 2:case 15:return _=er(_.type,!1),_;case 11:return _=er(_.type.render,!1),_;case 1:return _=er(_.type,!0),_;default:return""}}function yr(_){if(_==null)return null;if(typeof _=="function")return _.displayName||_.name||null;if(typeof _=="string")return _;switch(_){case it:return"Fragment";case ot:return"Portal";case Cr:return"Profiler";case Sl:return"StrictMode";case Sr:return"Suspense";case Nr:return"SuspenseList"}if(typeof _=="object")switch(_.$$typeof){case qi:return(_.displayName||"Context")+".Consumer";case Zi:return(_._context.displayName||"Context")+".Provider";case Nl:var e=_.render;return _=_.displayName,_||(_=e.displayName||e.name||"",_=_!==""?"ForwardRef("+_+")":"ForwardRef"),_;case yl:return e=_.displayName||null,e!==null?e:yr(_.type)||"Memo";case pe:e=_._payload,_=_._init;try{return yr(_(e))}catch{}}return null}function Ds(_){var e=_.type;switch(_.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return _=e.render,_=_.displayName||_.name||"",e.displayName||(_!==""?"ForwardRef("+_+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yr(e);case 8:return e===Sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function We(_){switch(typeof _){case"boolean":case"number":case"string":case"undefined":return _;case"object":return _;default:return""}}function ea(_){var e=_.type;return(_=_.nodeName)&&_.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fs(_){var e=ea(_)?"checked":"value",t=Object.getOwnPropertyDescriptor(_.constructor.prototype,e),n=""+_[e];if(!_.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var $=t.get,r=t.set;return Object.defineProperty(_,e,{configurable:!0,get:function(){return $.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(_,e,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){_._valueTracker=null,delete _[e]}}}}function kn(_){_._valueTracker||(_._valueTracker=Fs(_))}function ta(_){if(!_)return!1;var e=_._valueTracker;if(!e)return!0;var t=e.getValue(),n="";return _&&(n=ea(_)?_.checked?"true":"false":_.value),_=n,_!==t?(e.setValue(_),!0):!1}function a$(_){if(_=_||(typeof document<"u"?document:void 0),typeof _>"u")return null;try{return _.activeElement||_.body}catch{return _.body}}function xr(_,e){var t=e.checked;return l_({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??_._wrapperState.initialChecked})}function go(_,e){var t=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;t=We(e.value!=null?e.value:t),_._wrapperState={initialChecked:n,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function na(_,e){e=e.checked,e!=null&&Cl(_,"checked",e,!1)}function Pr(_,e){na(_,e);var t=We(e.value),n=e.type;if(t!=null)n==="number"?(t===0&&_.value===""||_.value!=t)&&(_.value=""+t):_.value!==""+t&&(_.value=""+t);else if(n==="submit"||n==="reset"){_.removeAttribute("value");return}e.hasOwnProperty("value")?Or(_,e.type,t):e.hasOwnProperty("defaultValue")&&Or(_,e.type,We(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(_.defaultChecked=!!e.defaultChecked)}function vo(_,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+_._wrapperState.initialValue,t||e===_.value||(_.value=e),_.defaultValue=e}t=_.name,t!==""&&(_.name=""),_.defaultChecked=!!_._wrapperState.initialChecked,t!==""&&(_.name=t)}function Or(_,e,t){(e!=="number"||a$(_.ownerDocument)!==_)&&(t==null?_.defaultValue=""+_._wrapperState.initialValue:_.defaultValue!==""+t&&(_.defaultValue=""+t))}var Kt=Array.isArray;function At(_,e,t,n){if(_=_.options,e){e={};for(var $=0;$<t.length;$++)e["$"+t[$]]=!0;for(t=0;t<_.length;t++)$=e.hasOwnProperty("$"+_[t].value),_[t].selected!==$&&(_[t].selected=$),$&&n&&(_[t].defaultSelected=!0)}else{for(t=""+We(t),e=null,$=0;$<_.length;$++){if(_[$].value===t){_[$].selected=!0,n&&(_[$].defaultSelected=!0);return}e!==null||_[$].disabled||(e=_[$])}e!==null&&(e.selected=!0)}}function wr(_,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return l_({},e,{value:void 0,defaultValue:void 0,children:""+_._wrapperState.initialValue})}function Co(_,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(C(92));if(Kt(t)){if(1<t.length)throw Error(C(93));t=t[0]}e=t}e==null&&(e=""),t=e}_._wrapperState={initialValue:We(t)}}function $a(_,e){var t=We(e.value),n=We(e.defaultValue);t!=null&&(t=""+t,t!==_.value&&(_.value=t),e.defaultValue==null&&_.defaultValue!==t&&(_.defaultValue=t)),n!=null&&(_.defaultValue=""+n)}function So(_){var e=_.textContent;e===_._wrapperState.initialValue&&e!==""&&e!==null&&(_.value=e)}function ra(_){switch(_){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mr(_,e){return _==null||_==="http://www.w3.org/1999/xhtml"?ra(e):_==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":_}var Wn,la=function(_){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,n,$){MSApp.execUnsafeLocalFunction(function(){return _(e,t,n,$)})}:_}(function(_,e){if(_.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in _)_.innerHTML=e;else{for(Wn=Wn||document.createElement("div"),Wn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wn.firstChild;_.firstChild;)_.removeChild(_.firstChild);for(;e.firstChild;)_.appendChild(e.firstChild)}});function on(_,e){if(e){var t=_.firstChild;if(t&&t===_.lastChild&&t.nodeType===3){t.nodeValue=e;return}}_.textContent=e}var bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gs=["Webkit","ms","Moz","O"];Object.keys(bt).forEach(function(_){Gs.forEach(function(e){e=e+_.charAt(0).toUpperCase()+_.substring(1),bt[e]=bt[_]})});function oa(_,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||bt.hasOwnProperty(_)&&bt[_]?(""+e).trim():e+"px"}function ia(_,e){_=_.style;for(var t in e)if(e.hasOwnProperty(t)){var n=t.indexOf("--")===0,$=oa(t,e[t],n);t==="float"&&(t="cssFloat"),n?_.setProperty(t,$):_[t]=$}}var js=l_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hr(_,e){if(e){if(js[_]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,_));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function kr(_,e){if(_.indexOf("-")===-1)return typeof e.is=="string";switch(_){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wr=null;function xl(_){return _=_.target||_.srcElement||window,_.correspondingUseElement&&(_=_.correspondingUseElement),_.nodeType===3?_.parentNode:_}var Ur=null,ht=null,pt=null;function No(_){if(_=yn(_)){if(typeof Ur!="function")throw Error(C(280));var e=_.stateNode;e&&(e=F$(e),Ur(_.stateNode,_.type,e))}}function aa(_){ht?pt?pt.push(_):pt=[_]:ht=_}function ua(){if(ht){var _=ht,e=pt;if(pt=ht=null,No(_),e)for(_=0;_<e.length;_++)No(e[_])}}function sa(_,e){return _(e)}function ca(){}var tr=!1;function Ta(_,e,t){if(tr)return _(e,t);tr=!0;try{return sa(_,e,t)}finally{tr=!1,(ht!==null||pt!==null)&&(ca(),ua())}}function an(_,e){var t=_.stateNode;if(t===null)return null;var n=F$(t);if(n===null)return null;t=n[e];_:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(_=_.type,n=!(_==="button"||_==="input"||_==="select"||_==="textarea")),_=!n;break _;default:_=!1}if(_)return null;if(t&&typeof t!="function")throw Error(C(231,e,typeof t));return t}var Dr=!1;if(Te)try{var Dt={};Object.defineProperty(Dt,"passive",{get:function(){Dr=!0}}),window.addEventListener("test",Dt,Dt),window.removeEventListener("test",Dt,Dt)}catch{Dr=!1}function Vs(_,e,t,n,$,r,l,o,i){var a=Array.prototype.slice.call(arguments,3);try{e.apply(t,a)}catch(L){this.onError(L)}}var Zt=!1,u$=null,s$=!1,Fr=null,Bs={onError:function(_){Zt=!0,u$=_}};function Ys(_,e,t,n,$,r,l,o,i){Zt=!1,u$=null,Vs.apply(Bs,arguments)}function zs(_,e,t,n,$,r,l,o,i){if(Ys.apply(this,arguments),Zt){if(Zt){var a=u$;Zt=!1,u$=null}else throw Error(C(198));s$||(s$=!0,Fr=a)}}function tt(_){var e=_,t=_;if(_.alternate)for(;e.return;)e=e.return;else{_=e;do e=_,e.flags&4098&&(t=e.return),_=e.return;while(_)}return e.tag===3?t:null}function fa(_){if(_.tag===13){var e=_.memoizedState;if(e===null&&(_=_.alternate,_!==null&&(e=_.memoizedState)),e!==null)return e.dehydrated}return null}function yo(_){if(tt(_)!==_)throw Error(C(188))}function Ks(_){var e=_.alternate;if(!e){if(e=tt(_),e===null)throw Error(C(188));return e!==_?null:_}for(var t=_,n=e;;){var $=t.return;if($===null)break;var r=$.alternate;if(r===null){if(n=$.return,n!==null){t=n;continue}break}if($.child===r.child){for(r=$.child;r;){if(r===t)return yo($),_;if(r===n)return yo($),e;r=r.sibling}throw Error(C(188))}if(t.return!==n.return)t=$,n=r;else{for(var l=!1,o=$.child;o;){if(o===t){l=!0,t=$,n=r;break}if(o===n){l=!0,n=$,t=r;break}o=o.sibling}if(!l){for(o=r.child;o;){if(o===t){l=!0,t=r,n=$;break}if(o===n){l=!0,n=r,t=$;break}o=o.sibling}if(!l)throw Error(C(189))}}if(t.alternate!==n)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?_:e}function da(_){return _=Ks(_),_!==null?La(_):null}function La(_){if(_.tag===5||_.tag===6)return _;for(_=_.child;_!==null;){var e=La(_);if(e!==null)return e;_=_.sibling}return null}var Ea=F_.unstable_scheduleCallback,xo=F_.unstable_cancelCallback,Xs=F_.unstable_shouldYield,Qs=F_.unstable_requestPaint,a_=F_.unstable_now,Js=F_.unstable_getCurrentPriorityLevel,Pl=F_.unstable_ImmediatePriority,Ia=F_.unstable_UserBlockingPriority,c$=F_.unstable_NormalPriority,bs=F_.unstable_LowPriority,Aa=F_.unstable_IdlePriority,k$=null,le=null;function Zs(_){if(le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(k$,_,void 0,(_.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:ec,qs=Math.log,_c=Math.LN2;function ec(_){return _>>>=0,_===0?32:31-(qs(_)/_c|0)|0}var Un=64,Dn=4194304;function Xt(_){switch(_&-_){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return _&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return _&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return _}}function T$(_,e){var t=_.pendingLanes;if(t===0)return 0;var n=0,$=_.suspendedLanes,r=_.pingedLanes,l=t&268435455;if(l!==0){var o=l&~$;o!==0?n=Xt(o):(r&=l,r!==0&&(n=Xt(r)))}else l=t&~$,l!==0?n=Xt(l):r!==0&&(n=Xt(r));if(n===0)return 0;if(e!==0&&e!==n&&!(e&$)&&($=n&-n,r=e&-e,$>=r||$===16&&(r&4194240)!==0))return e;if(n&4&&(n|=t&16),e=_.entangledLanes,e!==0)for(_=_.entanglements,e&=n;0<e;)t=31-_e(e),$=1<<t,n|=_[t],e&=~$;return n}function tc(_,e){switch(_){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nc(_,e){for(var t=_.suspendedLanes,n=_.pingedLanes,$=_.expirationTimes,r=_.pendingLanes;0<r;){var l=31-_e(r),o=1<<l,i=$[l];i===-1?(!(o&t)||o&n)&&($[l]=tc(o,e)):i<=e&&(_.expiredLanes|=o),r&=~o}}function Gr(_){return _=_.pendingLanes&-1073741825,_!==0?_:_&1073741824?1073741824:0}function ha(){var _=Un;return Un<<=1,!(Un&4194240)&&(Un=64),_}function nr(_){for(var e=[],t=0;31>t;t++)e.push(_);return e}function Sn(_,e,t){_.pendingLanes|=e,e!==536870912&&(_.suspendedLanes=0,_.pingedLanes=0),_=_.eventTimes,e=31-_e(e),_[e]=t}function $c(_,e){var t=_.pendingLanes&~e;_.pendingLanes=e,_.suspendedLanes=0,_.pingedLanes=0,_.expiredLanes&=e,_.mutableReadLanes&=e,_.entangledLanes&=e,e=_.entanglements;var n=_.eventTimes;for(_=_.expirationTimes;0<t;){var $=31-_e(t),r=1<<$;e[$]=0,n[$]=-1,_[$]=-1,t&=~r}}function Ol(_,e){var t=_.entangledLanes|=e;for(_=_.entanglements;t;){var n=31-_e(t),$=1<<n;$&e|_[n]&e&&(_[n]|=e),t&=~$}}var z=0;function pa(_){return _&=-_,1<_?4<_?_&268435455?16:536870912:4:1}var ma,wl,Ra,ga,va,jr=!1,Fn=[],Ne=null,ye=null,xe=null,un=new Map,sn=new Map,Re=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Po(_,e){switch(_){case"focusin":case"focusout":Ne=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":un.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sn.delete(e.pointerId)}}function Ft(_,e,t,n,$,r){return _===null||_.nativeEvent!==r?(_={blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:r,targetContainers:[$]},e!==null&&(e=yn(e),e!==null&&wl(e)),_):(_.eventSystemFlags|=n,e=_.targetContainers,$!==null&&e.indexOf($)===-1&&e.push($),_)}function lc(_,e,t,n,$){switch(e){case"focusin":return Ne=Ft(Ne,_,e,t,n,$),!0;case"dragenter":return ye=Ft(ye,_,e,t,n,$),!0;case"mouseover":return xe=Ft(xe,_,e,t,n,$),!0;case"pointerover":var r=$.pointerId;return un.set(r,Ft(un.get(r)||null,_,e,t,n,$)),!0;case"gotpointercapture":return r=$.pointerId,sn.set(r,Ft(sn.get(r)||null,_,e,t,n,$)),!0}return!1}function Ca(_){var e=Ye(_.target);if(e!==null){var t=tt(e);if(t!==null){if(e=t.tag,e===13){if(e=fa(t),e!==null){_.blockedOn=e,va(_.priority,function(){Ra(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){_.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}_.blockedOn=null}function qn(_){if(_.blockedOn!==null)return!1;for(var e=_.targetContainers;0<e.length;){var t=Vr(_.domEventName,_.eventSystemFlags,e[0],_.nativeEvent);if(t===null){t=_.nativeEvent;var n=new t.constructor(t.type,t);Wr=n,t.target.dispatchEvent(n),Wr=null}else return e=yn(t),e!==null&&wl(e),_.blockedOn=t,!1;e.shift()}return!0}function Oo(_,e,t){qn(_)&&t.delete(e)}function oc(){jr=!1,Ne!==null&&qn(Ne)&&(Ne=null),ye!==null&&qn(ye)&&(ye=null),xe!==null&&qn(xe)&&(xe=null),un.forEach(Oo),sn.forEach(Oo)}function Gt(_,e){_.blockedOn===e&&(_.blockedOn=null,jr||(jr=!0,F_.unstable_scheduleCallback(F_.unstable_NormalPriority,oc)))}function cn(_){function e($){return Gt($,_)}if(0<Fn.length){Gt(Fn[0],_);for(var t=1;t<Fn.length;t++){var n=Fn[t];n.blockedOn===_&&(n.blockedOn=null)}}for(Ne!==null&&Gt(Ne,_),ye!==null&&Gt(ye,_),xe!==null&&Gt(xe,_),un.forEach(e),sn.forEach(e),t=0;t<Re.length;t++)n=Re[t],n.blockedOn===_&&(n.blockedOn=null);for(;0<Re.length&&(t=Re[0],t.blockedOn===null);)Ca(t),t.blockedOn===null&&Re.shift()}var mt=Ee.ReactCurrentBatchConfig,f$=!0;function ic(_,e,t,n){var $=z,r=mt.transition;mt.transition=null;try{z=1,Ml(_,e,t,n)}finally{z=$,mt.transition=r}}function ac(_,e,t,n){var $=z,r=mt.transition;mt.transition=null;try{z=4,Ml(_,e,t,n)}finally{z=$,mt.transition=r}}function Ml(_,e,t,n){if(f$){var $=Vr(_,e,t,n);if($===null)Tr(_,e,n,d$,t),Po(_,n);else if(lc($,_,e,t,n))n.stopPropagation();else if(Po(_,n),e&4&&-1<rc.indexOf(_)){for(;$!==null;){var r=yn($);if(r!==null&&ma(r),r=Vr(_,e,t,n),r===null&&Tr(_,e,n,d$,t),r===$)break;$=r}$!==null&&n.stopPropagation()}else Tr(_,e,n,null,t)}}var d$=null;function Vr(_,e,t,n){if(d$=null,_=xl(n),_=Ye(_),_!==null)if(e=tt(_),e===null)_=null;else if(t=e.tag,t===13){if(_=fa(e),_!==null)return _;_=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;_=null}else e!==_&&(_=null);return d$=_,null}function Sa(_){switch(_){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Js()){case Pl:return 1;case Ia:return 4;case c$:case bs:return 16;case Aa:return 536870912;default:return 16}default:return 16}}var ve=null,Hl=null,_$=null;function Na(){if(_$)return _$;var _,e=Hl,t=e.length,n,$="value"in ve?ve.value:ve.textContent,r=$.length;for(_=0;_<t&&e[_]===$[_];_++);var l=t-_;for(n=1;n<=l&&e[t-n]===$[r-n];n++);return _$=$.slice(_,1<n?1-n:void 0)}function e$(_){var e=_.keyCode;return"charCode"in _?(_=_.charCode,_===0&&e===13&&(_=13)):_=e,_===10&&(_=13),32<=_||_===13?_:0}function Gn(){return!0}function wo(){return!1}function j_(_){function e(t,n,$,r,l){this._reactName=t,this._targetInst=$,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var o in _)_.hasOwnProperty(o)&&(t=_[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Gn:wo,this.isPropagationStopped=wo,this}return l_(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gn)},persist:function(){},isPersistent:Gn}),e}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(_){return _.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=j_(wt),Nn=l_({},wt,{view:0,detail:0}),uc=j_(Nn),$r,rr,jt,W$=l_({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(_){return _.relatedTarget===void 0?_.fromElement===_.srcElement?_.toElement:_.fromElement:_.relatedTarget},movementX:function(_){return"movementX"in _?_.movementX:(_!==jt&&(jt&&_.type==="mousemove"?($r=_.screenX-jt.screenX,rr=_.screenY-jt.screenY):rr=$r=0,jt=_),$r)},movementY:function(_){return"movementY"in _?_.movementY:rr}}),Mo=j_(W$),sc=l_({},W$,{dataTransfer:0}),cc=j_(sc),Tc=l_({},Nn,{relatedTarget:0}),lr=j_(Tc),fc=l_({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=j_(fc),Lc=l_({},wt,{clipboardData:function(_){return"clipboardData"in _?_.clipboardData:window.clipboardData}}),Ec=j_(Lc),Ic=l_({},wt,{data:0}),Ho=j_(Ic),Ac={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mc(_){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(_):(_=pc[_])?!!e[_]:!1}function Wl(){return mc}var Rc=l_({},Nn,{key:function(_){if(_.key){var e=Ac[_.key]||_.key;if(e!=="Unidentified")return e}return _.type==="keypress"?(_=e$(_),_===13?"Enter":String.fromCharCode(_)):_.type==="keydown"||_.type==="keyup"?hc[_.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(_){return _.type==="keypress"?e$(_):0},keyCode:function(_){return _.type==="keydown"||_.type==="keyup"?_.keyCode:0},which:function(_){return _.type==="keypress"?e$(_):_.type==="keydown"||_.type==="keyup"?_.keyCode:0}}),gc=j_(Rc),vc=l_({},W$,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ko=j_(vc),Cc=l_({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),Sc=j_(Cc),Nc=l_({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),yc=j_(Nc),xc=l_({},W$,{deltaX:function(_){return"deltaX"in _?_.deltaX:"wheelDeltaX"in _?-_.wheelDeltaX:0},deltaY:function(_){return"deltaY"in _?_.deltaY:"wheelDeltaY"in _?-_.wheelDeltaY:"wheelDelta"in _?-_.wheelDelta:0},deltaZ:0,deltaMode:0}),Pc=j_(xc),Oc=[9,13,27,32],Ul=Te&&"CompositionEvent"in window,qt=null;Te&&"documentMode"in document&&(qt=document.documentMode);var wc=Te&&"TextEvent"in window&&!qt,ya=Te&&(!Ul||qt&&8<qt&&11>=qt),Wo=" ",Uo=!1;function xa(_,e){switch(_){case"keyup":return Oc.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pa(_){return _=_.detail,typeof _=="object"&&"data"in _?_.data:null}var at=!1;function Mc(_,e){switch(_){case"compositionend":return Pa(e);case"keypress":return e.which!==32?null:(Uo=!0,Wo);case"textInput":return _=e.data,_===Wo&&Uo?null:_;default:return null}}function Hc(_,e){if(at)return _==="compositionend"||!Ul&&xa(_,e)?(_=Na(),_$=Hl=ve=null,at=!1,_):null;switch(_){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ya&&e.locale!=="ko"?null:e.data;default:return null}}var kc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Do(_){var e=_&&_.nodeName&&_.nodeName.toLowerCase();return e==="input"?!!kc[_.type]:e==="textarea"}function Oa(_,e,t,n){aa(n),e=L$(e,"onChange"),0<e.length&&(t=new kl("onChange","change",null,t,n),_.push({event:t,listeners:e}))}var _n=null,Tn=null;function Wc(_){Va(_,0)}function U$(_){var e=ct(_);if(ta(e))return _}function Uc(_,e){if(_==="change")return e}var wa=!1;if(Te){var or;if(Te){var ir="oninput"in document;if(!ir){var Fo=document.createElement("div");Fo.setAttribute("oninput","return;"),ir=typeof Fo.oninput=="function"}or=ir}else or=!1;wa=or&&(!document.documentMode||9<document.documentMode)}function Go(){_n&&(_n.detachEvent("onpropertychange",Ma),Tn=_n=null)}function Ma(_){if(_.propertyName==="value"&&U$(Tn)){var e=[];Oa(e,Tn,_,xl(_)),Ta(Wc,e)}}function Dc(_,e,t){_==="focusin"?(Go(),_n=e,Tn=t,_n.attachEvent("onpropertychange",Ma)):_==="focusout"&&Go()}function Fc(_){if(_==="selectionchange"||_==="keyup"||_==="keydown")return U$(Tn)}function Gc(_,e){if(_==="click")return U$(e)}function jc(_,e){if(_==="input"||_==="change")return U$(e)}function Vc(_,e){return _===e&&(_!==0||1/_===1/e)||_!==_&&e!==e}var te=typeof Object.is=="function"?Object.is:Vc;function fn(_,e){if(te(_,e))return!0;if(typeof _!="object"||_===null||typeof e!="object"||e===null)return!1;var t=Object.keys(_),n=Object.keys(e);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var $=t[n];if(!vr.call(e,$)||!te(_[$],e[$]))return!1}return!0}function jo(_){for(;_&&_.firstChild;)_=_.firstChild;return _}function Vo(_,e){var t=jo(_);_=0;for(var n;t;){if(t.nodeType===3){if(n=_+t.textContent.length,_<=e&&n>=e)return{node:t,offset:e-_};_=n}_:{for(;t;){if(t.nextSibling){t=t.nextSibling;break _}t=t.parentNode}t=void 0}t=jo(t)}}function Ha(_,e){return _&&e?_===e?!0:_&&_.nodeType===3?!1:e&&e.nodeType===3?Ha(_,e.parentNode):"contains"in _?_.contains(e):_.compareDocumentPosition?!!(_.compareDocumentPosition(e)&16):!1:!1}function ka(){for(var _=window,e=a$();e instanceof _.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)_=e.contentWindow;else break;e=a$(_.document)}return e}function Dl(_){var e=_&&_.nodeName&&_.nodeName.toLowerCase();return e&&(e==="input"&&(_.type==="text"||_.type==="search"||_.type==="tel"||_.type==="url"||_.type==="password")||e==="textarea"||_.contentEditable==="true")}function Bc(_){var e=ka(),t=_.focusedElem,n=_.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ha(t.ownerDocument.documentElement,t)){if(n!==null&&Dl(t)){if(e=n.start,_=n.end,_===void 0&&(_=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(_,t.value.length);else if(_=(e=t.ownerDocument||document)&&e.defaultView||window,_.getSelection){_=_.getSelection();var $=t.textContent.length,r=Math.min(n.start,$);n=n.end===void 0?r:Math.min(n.end,$),!_.extend&&r>n&&($=n,n=r,r=$),$=Vo(t,r);var l=Vo(t,n);$&&l&&(_.rangeCount!==1||_.anchorNode!==$.node||_.anchorOffset!==$.offset||_.focusNode!==l.node||_.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart($.node,$.offset),_.removeAllRanges(),r>n?(_.addRange(e),_.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),_.addRange(e)))}}for(e=[],_=t;_=_.parentNode;)_.nodeType===1&&e.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)_=e[t],_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}var Yc=Te&&"documentMode"in document&&11>=document.documentMode,ut=null,Br=null,en=null,Yr=!1;function Bo(_,e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yr||ut==null||ut!==a$(n)||(n=ut,"selectionStart"in n&&Dl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),en&&fn(en,n)||(en=n,n=L$(Br,"onSelect"),0<n.length&&(e=new kl("onSelect","select",null,e,t),_.push({event:e,listeners:n}),e.target=ut)))}function jn(_,e){var t={};return t[_.toLowerCase()]=e.toLowerCase(),t["Webkit"+_]="webkit"+e,t["Moz"+_]="moz"+e,t}var st={animationend:jn("Animation","AnimationEnd"),animationiteration:jn("Animation","AnimationIteration"),animationstart:jn("Animation","AnimationStart"),transitionend:jn("Transition","TransitionEnd")},ar={},Wa={};Te&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete st.animationend.animation,delete st.animationiteration.animation,delete st.animationstart.animation),"TransitionEvent"in window||delete st.transitionend.transition);function D$(_){if(ar[_])return ar[_];if(!st[_])return _;var e=st[_],t;for(t in e)if(e.hasOwnProperty(t)&&t in Wa)return ar[_]=e[t];return _}var Ua=D$("animationend"),Da=D$("animationiteration"),Fa=D$("animationstart"),Ga=D$("transitionend"),ja=new Map,Yo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function De(_,e){ja.set(_,e),et(e,[_])}for(var ur=0;ur<Yo.length;ur++){var sr=Yo[ur],zc=sr.toLowerCase(),Kc=sr[0].toUpperCase()+sr.slice(1);De(zc,"on"+Kc)}De(Ua,"onAnimationEnd");De(Da,"onAnimationIteration");De(Fa,"onAnimationStart");De("dblclick","onDoubleClick");De("focusin","onFocus");De("focusout","onBlur");De(Ga,"onTransitionEnd");vt("onMouseEnter",["mouseout","mouseover"]);vt("onMouseLeave",["mouseout","mouseover"]);vt("onPointerEnter",["pointerout","pointerover"]);vt("onPointerLeave",["pointerout","pointerover"]);et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));et("onBeforeInput",["compositionend","keypress","textInput","paste"]);et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qt));function zo(_,e,t){var n=_.type||"unknown-event";_.currentTarget=t,zs(n,e,void 0,_),_.currentTarget=null}function Va(_,e){e=(e&4)!==0;for(var t=0;t<_.length;t++){var n=_[t],$=n.event;n=n.listeners;_:{var r=void 0;if(e)for(var l=n.length-1;0<=l;l--){var o=n[l],i=o.instance,a=o.currentTarget;if(o=o.listener,i!==r&&$.isPropagationStopped())break _;zo($,o,a),r=i}else for(l=0;l<n.length;l++){if(o=n[l],i=o.instance,a=o.currentTarget,o=o.listener,i!==r&&$.isPropagationStopped())break _;zo($,o,a),r=i}}}if(s$)throw _=Fr,s$=!1,Fr=null,_}function __(_,e){var t=e[Jr];t===void 0&&(t=e[Jr]=new Set);var n=_+"__bubble";t.has(n)||(Ba(e,_,2,!1),t.add(n))}function cr(_,e,t){var n=0;e&&(n|=4),Ba(t,_,n,e)}var Vn="_reactListening"+Math.random().toString(36).slice(2);function dn(_){if(!_[Vn]){_[Vn]=!0,bi.forEach(function(t){t!=="selectionchange"&&(Xc.has(t)||cr(t,!1,_),cr(t,!0,_))});var e=_.nodeType===9?_:_.ownerDocument;e===null||e[Vn]||(e[Vn]=!0,cr("selectionchange",!1,e))}}function Ba(_,e,t,n){switch(Sa(e)){case 1:var $=ic;break;case 4:$=ac;break;default:$=Ml}t=$.bind(null,e,t,_),$=void 0,!Dr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||($=!0),n?$!==void 0?_.addEventListener(e,t,{capture:!0,passive:$}):_.addEventListener(e,t,!0):$!==void 0?_.addEventListener(e,t,{passive:$}):_.addEventListener(e,t,!1)}function Tr(_,e,t,n,$){var r=n;if(!(e&1)&&!(e&2)&&n!==null)_:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===$||o.nodeType===8&&o.parentNode===$)break;if(l===4)for(l=n.return;l!==null;){var i=l.tag;if((i===3||i===4)&&(i=l.stateNode.containerInfo,i===$||i.nodeType===8&&i.parentNode===$))return;l=l.return}for(;o!==null;){if(l=Ye(o),l===null)return;if(i=l.tag,i===5||i===6){n=r=l;continue _}o=o.parentNode}}n=n.return}Ta(function(){var a=r,L=xl(t),f=[];_:{var d=ja.get(_);if(d!==void 0){var g=kl,v=_;switch(_){case"keypress":if(e$(t)===0)break _;case"keydown":case"keyup":g=gc;break;case"focusin":v="focus",g=lr;break;case"focusout":v="blur",g=lr;break;case"beforeblur":case"afterblur":g=lr;break;case"click":if(t.button===2)break _;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Sc;break;case Ua:case Da:case Fa:g=dc;break;case Ga:g=yc;break;case"scroll":g=uc;break;case"wheel":g=Pc;break;case"copy":case"cut":case"paste":g=Ec;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ko}var R=(e&4)!==0,P=!R&&_==="scroll",c=R?d!==null?d+"Capture":null:d;R=[];for(var s=a,T;s!==null;){T=s;var p=T.stateNode;if(T.tag===5&&p!==null&&(T=p,c!==null&&(p=an(s,c),p!=null&&R.push(Ln(s,p,T)))),P)break;s=s.return}0<R.length&&(d=new g(d,v,null,t,L),f.push({event:d,listeners:R}))}}if(!(e&7)){_:{if(d=_==="mouseover"||_==="pointerover",g=_==="mouseout"||_==="pointerout",d&&t!==Wr&&(v=t.relatedTarget||t.fromElement)&&(Ye(v)||v[fe]))break _;if((g||d)&&(d=L.window===L?L:(d=L.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=t.relatedTarget||t.toElement,g=a,v=v?Ye(v):null,v!==null&&(P=tt(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=a),g!==v)){if(R=Mo,p="onMouseLeave",c="onMouseEnter",s="mouse",(_==="pointerout"||_==="pointerover")&&(R=ko,p="onPointerLeave",c="onPointerEnter",s="pointer"),P=g==null?d:ct(g),T=v==null?d:ct(v),d=new R(p,s+"leave",g,t,L),d.target=P,d.relatedTarget=T,p=null,Ye(L)===a&&(R=new R(c,s+"enter",v,t,L),R.target=T,R.relatedTarget=P,p=R),P=p,g&&v)e:{for(R=g,c=v,s=0,T=R;T;T=rt(T))s++;for(T=0,p=c;p;p=rt(p))T++;for(;0<s-T;)R=rt(R),s--;for(;0<T-s;)c=rt(c),T--;for(;s--;){if(R===c||c!==null&&R===c.alternate)break e;R=rt(R),c=rt(c)}R=null}else R=null;g!==null&&Ko(f,d,g,R,!1),v!==null&&P!==null&&Ko(f,P,v,R,!0)}}_:{if(d=a?ct(a):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var O=Uc;else if(Do(d))if(wa)O=jc;else{O=Fc;var k=Dc}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=Gc);if(O&&(O=O(_,a))){Oa(f,O,t,L);break _}k&&k(_,d,a),_==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Or(d,"number",d.value)}switch(k=a?ct(a):window,_){case"focusin":(Do(k)||k.contentEditable==="true")&&(ut=k,Br=a,en=null);break;case"focusout":en=Br=ut=null;break;case"mousedown":Yr=!0;break;case"contextmenu":case"mouseup":case"dragend":Yr=!1,Bo(f,t,L);break;case"selectionchange":if(Yc)break;case"keydown":case"keyup":Bo(f,t,L)}var W;if(Ul)_:{switch(_){case"compositionstart":var U="onCompositionStart";break _;case"compositionend":U="onCompositionEnd";break _;case"compositionupdate":U="onCompositionUpdate";break _}U=void 0}else at?xa(_,t)&&(U="onCompositionEnd"):_==="keydown"&&t.keyCode===229&&(U="onCompositionStart");U&&(ya&&t.locale!=="ko"&&(at||U!=="onCompositionStart"?U==="onCompositionEnd"&&at&&(W=Na()):(ve=L,Hl="value"in ve?ve.value:ve.textContent,at=!0)),k=L$(a,U),0<k.length&&(U=new Ho(U,_,null,t,L),f.push({event:U,listeners:k}),W?U.data=W:(W=Pa(t),W!==null&&(U.data=W)))),(W=wc?Mc(_,t):Hc(_,t))&&(a=L$(a,"onBeforeInput"),0<a.length&&(L=new Ho("onBeforeInput","beforeinput",null,t,L),f.push({event:L,listeners:a}),L.data=W))}Va(f,e)})}function Ln(_,e,t){return{instance:_,listener:e,currentTarget:t}}function L$(_,e){for(var t=e+"Capture",n=[];_!==null;){var $=_,r=$.stateNode;$.tag===5&&r!==null&&($=r,r=an(_,t),r!=null&&n.unshift(Ln(_,r,$)),r=an(_,e),r!=null&&n.push(Ln(_,r,$))),_=_.return}return n}function rt(_){if(_===null)return null;do _=_.return;while(_&&_.tag!==5);return _||null}function Ko(_,e,t,n,$){for(var r=e._reactName,l=[];t!==null&&t!==n;){var o=t,i=o.alternate,a=o.stateNode;if(i!==null&&i===n)break;o.tag===5&&a!==null&&(o=a,$?(i=an(t,r),i!=null&&l.unshift(Ln(t,i,o))):$||(i=an(t,r),i!=null&&l.push(Ln(t,i,o)))),t=t.return}l.length!==0&&_.push({event:e,listeners:l})}var Qc=/\r\n?/g,Jc=/\u0000|\uFFFD/g;function Xo(_){return(typeof _=="string"?_:""+_).replace(Qc,`
`).replace(Jc,"")}function Bn(_,e,t){if(e=Xo(e),Xo(_)!==e&&t)throw Error(C(425))}function E$(){}var zr=null,Kr=null;function Xr(_,e){return _==="textarea"||_==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qr=typeof setTimeout=="function"?setTimeout:void 0,bc=typeof clearTimeout=="function"?clearTimeout:void 0,Qo=typeof Promise=="function"?Promise:void 0,Zc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qo<"u"?function(_){return Qo.resolve(null).then(_).catch(qc)}:Qr;function qc(_){setTimeout(function(){throw _})}function fr(_,e){var t=e,n=0;do{var $=t.nextSibling;if(_.removeChild(t),$&&$.nodeType===8)if(t=$.data,t==="/$"){if(n===0){_.removeChild($),cn(e);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=$}while(t);cn(e)}function Pe(_){for(;_!=null;_=_.nextSibling){var e=_.nodeType;if(e===1||e===3)break;if(e===8){if(e=_.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return _}function Jo(_){_=_.previousSibling;for(var e=0;_;){if(_.nodeType===8){var t=_.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return _;e--}else t==="/$"&&e++}_=_.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),re="__reactFiber$"+Mt,En="__reactProps$"+Mt,fe="__reactContainer$"+Mt,Jr="__reactEvents$"+Mt,_T="__reactListeners$"+Mt,eT="__reactHandles$"+Mt;function Ye(_){var e=_[re];if(e)return e;for(var t=_.parentNode;t;){if(e=t[fe]||t[re]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(_=Jo(_);_!==null;){if(t=_[re])return t;_=Jo(_)}return e}_=t,t=_.parentNode}return null}function yn(_){return _=_[re]||_[fe],!_||_.tag!==5&&_.tag!==6&&_.tag!==13&&_.tag!==3?null:_}function ct(_){if(_.tag===5||_.tag===6)return _.stateNode;throw Error(C(33))}function F$(_){return _[En]||null}var br=[],Tt=-1;function Fe(_){return{current:_}}function e_(_){0>Tt||(_.current=br[Tt],br[Tt]=null,Tt--)}function b(_,e){Tt++,br[Tt]=_.current,_.current=e}var Ue={},R_=Fe(Ue),O_=Fe(!1),Je=Ue;function Ct(_,e){var t=_.type.contextTypes;if(!t)return Ue;var n=_.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var $={},r;for(r in t)$[r]=e[r];return n&&(_=_.stateNode,_.__reactInternalMemoizedUnmaskedChildContext=e,_.__reactInternalMemoizedMaskedChildContext=$),$}function w_(_){return _=_.childContextTypes,_!=null}function I$(){e_(O_),e_(R_)}function bo(_,e,t){if(R_.current!==Ue)throw Error(C(168));b(R_,e),b(O_,t)}function Ya(_,e,t){var n=_.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var $ in n)if(!($ in e))throw Error(C(108,Ds(_)||"Unknown",$));return l_({},t,n)}function A$(_){return _=(_=_.stateNode)&&_.__reactInternalMemoizedMergedChildContext||Ue,Je=R_.current,b(R_,_),b(O_,O_.current),!0}function Zo(_,e,t){var n=_.stateNode;if(!n)throw Error(C(169));t?(_=Ya(_,e,Je),n.__reactInternalMemoizedMergedChildContext=_,e_(O_),e_(R_),b(R_,_)):e_(O_),b(O_,t)}var ae=null,G$=!1,dr=!1;function za(_){ae===null?ae=[_]:ae.push(_)}function tT(_){G$=!0,za(_)}function Ge(){if(!dr&&ae!==null){dr=!0;var _=0,e=z;try{var t=ae;for(z=1;_<t.length;_++){var n=t[_];do n=n(!0);while(n!==null)}ae=null,G$=!1}catch($){throw ae!==null&&(ae=ae.slice(_+1)),Ea(Pl,Ge),$}finally{z=e,dr=!1}}return null}var ft=[],dt=0,h$=null,p$=0,V_=[],B_=0,be=null,ue=1,se="";function Ve(_,e){ft[dt++]=p$,ft[dt++]=h$,h$=_,p$=e}function Ka(_,e,t){V_[B_++]=ue,V_[B_++]=se,V_[B_++]=be,be=_;var n=ue;_=se;var $=32-_e(n)-1;n&=~(1<<$),t+=1;var r=32-_e(e)+$;if(30<r){var l=$-$%5;r=(n&(1<<l)-1).toString(32),n>>=l,$-=l,ue=1<<32-_e(e)+$|t<<$|n,se=r+_}else ue=1<<r|t<<$|n,se=_}function Fl(_){_.return!==null&&(Ve(_,1),Ka(_,1,0))}function Gl(_){for(;_===h$;)h$=ft[--dt],ft[dt]=null,p$=ft[--dt],ft[dt]=null;for(;_===be;)be=V_[--B_],V_[B_]=null,se=V_[--B_],V_[B_]=null,ue=V_[--B_],V_[B_]=null}var D_=null,U_=null,n_=!1,q_=null;function Xa(_,e){var t=Y_(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=_,e=_.deletions,e===null?(_.deletions=[t],_.flags|=16):e.push(t)}function qo(_,e){switch(_.tag){case 5:var t=_.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(_.stateNode=e,D_=_,U_=Pe(e.firstChild),!0):!1;case 6:return e=_.pendingProps===""||e.nodeType!==3?null:e,e!==null?(_.stateNode=e,D_=_,U_=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=be!==null?{id:ue,overflow:se}:null,_.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Y_(18,null,null,0),t.stateNode=e,t.return=_,_.child=t,D_=_,U_=null,!0):!1;default:return!1}}function Zr(_){return(_.mode&1)!==0&&(_.flags&128)===0}function qr(_){if(n_){var e=U_;if(e){var t=e;if(!qo(_,e)){if(Zr(_))throw Error(C(418));e=Pe(t.nextSibling);var n=D_;e&&qo(_,e)?Xa(n,t):(_.flags=_.flags&-4097|2,n_=!1,D_=_)}}else{if(Zr(_))throw Error(C(418));_.flags=_.flags&-4097|2,n_=!1,D_=_}}}function _i(_){for(_=_.return;_!==null&&_.tag!==5&&_.tag!==3&&_.tag!==13;)_=_.return;D_=_}function Yn(_){if(_!==D_)return!1;if(!n_)return _i(_),n_=!0,!1;var e;if((e=_.tag!==3)&&!(e=_.tag!==5)&&(e=_.type,e=e!=="head"&&e!=="body"&&!Xr(_.type,_.memoizedProps)),e&&(e=U_)){if(Zr(_))throw Qa(),Error(C(418));for(;e;)Xa(_,e),e=Pe(e.nextSibling)}if(_i(_),_.tag===13){if(_=_.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(C(317));_:{for(_=_.nextSibling,e=0;_;){if(_.nodeType===8){var t=_.data;if(t==="/$"){if(e===0){U_=Pe(_.nextSibling);break _}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}_=_.nextSibling}U_=null}}else U_=D_?Pe(_.stateNode.nextSibling):null;return!0}function Qa(){for(var _=U_;_;)_=Pe(_.nextSibling)}function St(){U_=D_=null,n_=!1}function jl(_){q_===null?q_=[_]:q_.push(_)}var nT=Ee.ReactCurrentBatchConfig;function Vt(_,e,t){if(_=t.ref,_!==null&&typeof _!="function"&&typeof _!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var n=t.stateNode}if(!n)throw Error(C(147,_));var $=n,r=""+_;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(l){var o=$.refs;l===null?delete o[r]:o[r]=l},e._stringRef=r,e)}if(typeof _!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,_))}return _}function zn(_,e){throw _=Object.prototype.toString.call(e),Error(C(31,_==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":_))}function ei(_){var e=_._init;return e(_._payload)}function Ja(_){function e(c,s){if(_){var T=c.deletions;T===null?(c.deletions=[s],c.flags|=16):T.push(s)}}function t(c,s){if(!_)return null;for(;s!==null;)e(c,s),s=s.sibling;return null}function n(c,s){for(c=new Map;s!==null;)s.key!==null?c.set(s.key,s):c.set(s.index,s),s=s.sibling;return c}function $(c,s){return c=He(c,s),c.index=0,c.sibling=null,c}function r(c,s,T){return c.index=T,_?(T=c.alternate,T!==null?(T=T.index,T<s?(c.flags|=2,s):T):(c.flags|=2,s)):(c.flags|=1048576,s)}function l(c){return _&&c.alternate===null&&(c.flags|=2),c}function o(c,s,T,p){return s===null||s.tag!==6?(s=mr(T,c.mode,p),s.return=c,s):(s=$(s,T),s.return=c,s)}function i(c,s,T,p){var O=T.type;return O===it?L(c,s,T.props.children,p,T.key):s!==null&&(s.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===pe&&ei(O)===s.type)?(p=$(s,T.props),p.ref=Vt(c,s,T),p.return=c,p):(p=i$(T.type,T.key,T.props,null,c.mode,p),p.ref=Vt(c,s,T),p.return=c,p)}function a(c,s,T,p){return s===null||s.tag!==4||s.stateNode.containerInfo!==T.containerInfo||s.stateNode.implementation!==T.implementation?(s=Rr(T,c.mode,p),s.return=c,s):(s=$(s,T.children||[]),s.return=c,s)}function L(c,s,T,p,O){return s===null||s.tag!==7?(s=Qe(T,c.mode,p,O),s.return=c,s):(s=$(s,T),s.return=c,s)}function f(c,s,T){if(typeof s=="string"&&s!==""||typeof s=="number")return s=mr(""+s,c.mode,T),s.return=c,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Hn:return T=i$(s.type,s.key,s.props,null,c.mode,T),T.ref=Vt(c,null,s),T.return=c,T;case ot:return s=Rr(s,c.mode,T),s.return=c,s;case pe:var p=s._init;return f(c,p(s._payload),T)}if(Kt(s)||Ut(s))return s=Qe(s,c.mode,T,null),s.return=c,s;zn(c,s)}return null}function d(c,s,T,p){var O=s!==null?s.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return O!==null?null:o(c,s,""+T,p);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Hn:return T.key===O?i(c,s,T,p):null;case ot:return T.key===O?a(c,s,T,p):null;case pe:return O=T._init,d(c,s,O(T._payload),p)}if(Kt(T)||Ut(T))return O!==null?null:L(c,s,T,p,null);zn(c,T)}return null}function g(c,s,T,p,O){if(typeof p=="string"&&p!==""||typeof p=="number")return c=c.get(T)||null,o(s,c,""+p,O);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hn:return c=c.get(p.key===null?T:p.key)||null,i(s,c,p,O);case ot:return c=c.get(p.key===null?T:p.key)||null,a(s,c,p,O);case pe:var k=p._init;return g(c,s,T,k(p._payload),O)}if(Kt(p)||Ut(p))return c=c.get(T)||null,L(s,c,p,O,null);zn(s,p)}return null}function v(c,s,T,p){for(var O=null,k=null,W=s,U=s=0,Q=null;W!==null&&U<T.length;U++){W.index>U?(Q=W,W=null):Q=W.sibling;var j=d(c,W,T[U],p);if(j===null){W===null&&(W=Q);break}_&&W&&j.alternate===null&&e(c,W),s=r(j,s,U),k===null?O=j:k.sibling=j,k=j,W=Q}if(U===T.length)return t(c,W),n_&&Ve(c,U),O;if(W===null){for(;U<T.length;U++)W=f(c,T[U],p),W!==null&&(s=r(W,s,U),k===null?O=W:k.sibling=W,k=W);return n_&&Ve(c,U),O}for(W=n(c,W);U<T.length;U++)Q=g(W,c,U,T[U],p),Q!==null&&(_&&Q.alternate!==null&&W.delete(Q.key===null?U:Q.key),s=r(Q,s,U),k===null?O=Q:k.sibling=Q,k=Q);return _&&W.forEach(function(g_){return e(c,g_)}),n_&&Ve(c,U),O}function R(c,s,T,p){var O=Ut(T);if(typeof O!="function")throw Error(C(150));if(T=O.call(T),T==null)throw Error(C(151));for(var k=O=null,W=s,U=s=0,Q=null,j=T.next();W!==null&&!j.done;U++,j=T.next()){W.index>U?(Q=W,W=null):Q=W.sibling;var g_=d(c,W,j.value,p);if(g_===null){W===null&&(W=Q);break}_&&W&&g_.alternate===null&&e(c,W),s=r(g_,s,U),k===null?O=g_:k.sibling=g_,k=g_,W=Q}if(j.done)return t(c,W),n_&&Ve(c,U),O;if(W===null){for(;!j.done;U++,j=T.next())j=f(c,j.value,p),j!==null&&(s=r(j,s,U),k===null?O=j:k.sibling=j,k=j);return n_&&Ve(c,U),O}for(W=n(c,W);!j.done;U++,j=T.next())j=g(W,c,U,j.value,p),j!==null&&(_&&j.alternate!==null&&W.delete(j.key===null?U:j.key),s=r(j,s,U),k===null?O=j:k.sibling=j,k=j);return _&&W.forEach(function(Q_){return e(c,Q_)}),n_&&Ve(c,U),O}function P(c,s,T,p){if(typeof T=="object"&&T!==null&&T.type===it&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Hn:_:{for(var O=T.key,k=s;k!==null;){if(k.key===O){if(O=T.type,O===it){if(k.tag===7){t(c,k.sibling),s=$(k,T.props.children),s.return=c,c=s;break _}}else if(k.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===pe&&ei(O)===k.type){t(c,k.sibling),s=$(k,T.props),s.ref=Vt(c,k,T),s.return=c,c=s;break _}t(c,k);break}else e(c,k);k=k.sibling}T.type===it?(s=Qe(T.props.children,c.mode,p,T.key),s.return=c,c=s):(p=i$(T.type,T.key,T.props,null,c.mode,p),p.ref=Vt(c,s,T),p.return=c,c=p)}return l(c);case ot:_:{for(k=T.key;s!==null;){if(s.key===k)if(s.tag===4&&s.stateNode.containerInfo===T.containerInfo&&s.stateNode.implementation===T.implementation){t(c,s.sibling),s=$(s,T.children||[]),s.return=c,c=s;break _}else{t(c,s);break}else e(c,s);s=s.sibling}s=Rr(T,c.mode,p),s.return=c,c=s}return l(c);case pe:return k=T._init,P(c,s,k(T._payload),p)}if(Kt(T))return v(c,s,T,p);if(Ut(T))return R(c,s,T,p);zn(c,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,s!==null&&s.tag===6?(t(c,s.sibling),s=$(s,T),s.return=c,c=s):(t(c,s),s=mr(T,c.mode,p),s.return=c,c=s),l(c)):t(c,s)}return P}var Nt=Ja(!0),ba=Ja(!1),m$=Fe(null),R$=null,Lt=null,Vl=null;function Bl(){Vl=Lt=R$=null}function Yl(_){var e=m$.current;e_(m$),_._currentValue=e}function _l(_,e,t){for(;_!==null;){var n=_.alternate;if((_.childLanes&e)!==e?(_.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),_===t)break;_=_.return}}function Rt(_,e){R$=_,Vl=Lt=null,_=_.dependencies,_!==null&&_.firstContext!==null&&(_.lanes&e&&(P_=!0),_.firstContext=null)}function K_(_){var e=_._currentValue;if(Vl!==_)if(_={context:_,memoizedValue:e,next:null},Lt===null){if(R$===null)throw Error(C(308));Lt=_,R$.dependencies={lanes:0,firstContext:_}}else Lt=Lt.next=_;return e}var ze=null;function zl(_){ze===null?ze=[_]:ze.push(_)}function Za(_,e,t,n){var $=e.interleaved;return $===null?(t.next=t,zl(e)):(t.next=$.next,$.next=t),e.interleaved=t,de(_,n)}function de(_,e){_.lanes|=e;var t=_.alternate;for(t!==null&&(t.lanes|=e),t=_,_=_.return;_!==null;)_.childLanes|=e,t=_.alternate,t!==null&&(t.childLanes|=e),t=_,_=_.return;return t.tag===3?t.stateNode:null}var me=!1;function Kl(_){_.updateQueue={baseState:_.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qa(_,e){_=_.updateQueue,e.updateQueue===_&&(e.updateQueue={baseState:_.baseState,firstBaseUpdate:_.firstBaseUpdate,lastBaseUpdate:_.lastBaseUpdate,shared:_.shared,effects:_.effects})}function ce(_,e){return{eventTime:_,lane:e,tag:0,payload:null,callback:null,next:null}}function Oe(_,e,t){var n=_.updateQueue;if(n===null)return null;if(n=n.shared,Y&2){var $=n.pending;return $===null?e.next=e:(e.next=$.next,$.next=e),n.pending=e,de(_,t)}return $=n.interleaved,$===null?(e.next=e,zl(n)):(e.next=$.next,$.next=e),n.interleaved=e,de(_,t)}function t$(_,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var n=e.lanes;n&=_.pendingLanes,t|=n,e.lanes=t,Ol(_,t)}}function ti(_,e){var t=_.updateQueue,n=_.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var $=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?$=r=l:r=r.next=l,t=t.next}while(t!==null);r===null?$=r=e:r=r.next=e}else $=r=e;t={baseState:n.baseState,firstBaseUpdate:$,lastBaseUpdate:r,shared:n.shared,effects:n.effects},_.updateQueue=t;return}_=t.lastBaseUpdate,_===null?t.firstBaseUpdate=e:_.next=e,t.lastBaseUpdate=e}function g$(_,e,t,n){var $=_.updateQueue;me=!1;var r=$.firstBaseUpdate,l=$.lastBaseUpdate,o=$.shared.pending;if(o!==null){$.shared.pending=null;var i=o,a=i.next;i.next=null,l===null?r=a:l.next=a,l=i;var L=_.alternate;L!==null&&(L=L.updateQueue,o=L.lastBaseUpdate,o!==l&&(o===null?L.firstBaseUpdate=a:o.next=a,L.lastBaseUpdate=i))}if(r!==null){var f=$.baseState;l=0,L=a=i=null,o=r;do{var d=o.lane,g=o.eventTime;if((n&d)===d){L!==null&&(L=L.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});_:{var v=_,R=o;switch(d=e,g=t,R.tag){case 1:if(v=R.payload,typeof v=="function"){f=v.call(g,f,d);break _}f=v;break _;case 3:v.flags=v.flags&-65537|128;case 0:if(v=R.payload,d=typeof v=="function"?v.call(g,f,d):v,d==null)break _;f=l_({},f,d);break _;case 2:me=!0}}o.callback!==null&&o.lane!==0&&(_.flags|=64,d=$.effects,d===null?$.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},L===null?(a=L=g,i=f):L=L.next=g,l|=d;if(o=o.next,o===null){if(o=$.shared.pending,o===null)break;d=o,o=d.next,d.next=null,$.lastBaseUpdate=d,$.shared.pending=null}}while(!0);if(L===null&&(i=f),$.baseState=i,$.firstBaseUpdate=a,$.lastBaseUpdate=L,e=$.shared.interleaved,e!==null){$=e;do l|=$.lane,$=$.next;while($!==e)}else r===null&&($.shared.lanes=0);qe|=l,_.lanes=l,_.memoizedState=f}}function ni(_,e,t){if(_=e.effects,e.effects=null,_!==null)for(e=0;e<_.length;e++){var n=_[e],$=n.callback;if($!==null){if(n.callback=null,n=t,typeof $!="function")throw Error(C(191,$));$.call(n)}}}var xn={},oe=Fe(xn),In=Fe(xn),An=Fe(xn);function Ke(_){if(_===xn)throw Error(C(174));return _}function Xl(_,e){switch(b(An,e),b(In,_),b(oe,xn),_=e.nodeType,_){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mr(null,"");break;default:_=_===8?e.parentNode:e,e=_.namespaceURI||null,_=_.tagName,e=Mr(e,_)}e_(oe),b(oe,e)}function yt(){e_(oe),e_(In),e_(An)}function _u(_){Ke(An.current);var e=Ke(oe.current),t=Mr(e,_.type);e!==t&&(b(In,_),b(oe,t))}function Ql(_){In.current===_&&(e_(oe),e_(In))}var $_=Fe(0);function v$(_){for(var e=_;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===_)break;for(;e.sibling===null;){if(e.return===null||e.return===_)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lr=[];function Jl(){for(var _=0;_<Lr.length;_++)Lr[_]._workInProgressVersionPrimary=null;Lr.length=0}var n$=Ee.ReactCurrentDispatcher,Er=Ee.ReactCurrentBatchConfig,Ze=0,r_=null,c_=null,f_=null,C$=!1,tn=!1,hn=0,$T=0;function h_(){throw Error(C(321))}function bl(_,e){if(e===null)return!1;for(var t=0;t<e.length&&t<_.length;t++)if(!te(_[t],e[t]))return!1;return!0}function Zl(_,e,t,n,$,r){if(Ze=r,r_=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,n$.current=_===null||_.memoizedState===null?iT:aT,_=t(n,$),tn){r=0;do{if(tn=!1,hn=0,25<=r)throw Error(C(301));r+=1,f_=c_=null,e.updateQueue=null,n$.current=uT,_=t(n,$)}while(tn)}if(n$.current=S$,e=c_!==null&&c_.next!==null,Ze=0,f_=c_=r_=null,C$=!1,e)throw Error(C(300));return _}function ql(){var _=hn!==0;return hn=0,_}function $e(){var _={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return f_===null?r_.memoizedState=f_=_:f_=f_.next=_,f_}function X_(){if(c_===null){var _=r_.alternate;_=_!==null?_.memoizedState:null}else _=c_.next;var e=f_===null?r_.memoizedState:f_.next;if(e!==null)f_=e,c_=_;else{if(_===null)throw Error(C(310));c_=_,_={memoizedState:c_.memoizedState,baseState:c_.baseState,baseQueue:c_.baseQueue,queue:c_.queue,next:null},f_===null?r_.memoizedState=f_=_:f_=f_.next=_}return f_}function pn(_,e){return typeof e=="function"?e(_):e}function Ir(_){var e=X_(),t=e.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=_;var n=c_,$=n.baseQueue,r=t.pending;if(r!==null){if($!==null){var l=$.next;$.next=r.next,r.next=l}n.baseQueue=$=r,t.pending=null}if($!==null){r=$.next,n=n.baseState;var o=l=null,i=null,a=r;do{var L=a.lane;if((Ze&L)===L)i!==null&&(i=i.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),n=a.hasEagerState?a.eagerState:_(n,a.action);else{var f={lane:L,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};i===null?(o=i=f,l=n):i=i.next=f,r_.lanes|=L,qe|=L}a=a.next}while(a!==null&&a!==r);i===null?l=n:i.next=o,te(n,e.memoizedState)||(P_=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=i,t.lastRenderedState=n}if(_=t.interleaved,_!==null){$=_;do r=$.lane,r_.lanes|=r,qe|=r,$=$.next;while($!==_)}else $===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ar(_){var e=X_(),t=e.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=_;var n=t.dispatch,$=t.pending,r=e.memoizedState;if($!==null){t.pending=null;var l=$=$.next;do r=_(r,l.action),l=l.next;while(l!==$);te(r,e.memoizedState)||(P_=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,n]}function eu(){}function tu(_,e){var t=r_,n=X_(),$=e(),r=!te(n.memoizedState,$);if(r&&(n.memoizedState=$,P_=!0),n=n.queue,_o(ru.bind(null,t,n,_),[_]),n.getSnapshot!==e||r||f_!==null&&f_.memoizedState.tag&1){if(t.flags|=2048,mn(9,$u.bind(null,t,n,$,e),void 0,null),d_===null)throw Error(C(349));Ze&30||nu(t,e,$)}return $}function nu(_,e,t){_.flags|=16384,_={getSnapshot:e,value:t},e=r_.updateQueue,e===null?(e={lastEffect:null,stores:null},r_.updateQueue=e,e.stores=[_]):(t=e.stores,t===null?e.stores=[_]:t.push(_))}function $u(_,e,t,n){e.value=t,e.getSnapshot=n,lu(e)&&ou(_)}function ru(_,e,t){return t(function(){lu(e)&&ou(_)})}function lu(_){var e=_.getSnapshot;_=_.value;try{var t=e();return!te(_,t)}catch{return!0}}function ou(_){var e=de(_,1);e!==null&&ee(e,_,1,-1)}function $i(_){var e=$e();return typeof _=="function"&&(_=_()),e.memoizedState=e.baseState=_,_={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:_},e.queue=_,_=_.dispatch=oT.bind(null,r_,_),[e.memoizedState,_]}function mn(_,e,t,n){return _={tag:_,create:e,destroy:t,deps:n,next:null},e=r_.updateQueue,e===null?(e={lastEffect:null,stores:null},r_.updateQueue=e,e.lastEffect=_.next=_):(t=e.lastEffect,t===null?e.lastEffect=_.next=_:(n=t.next,t.next=_,_.next=n,e.lastEffect=_)),_}function iu(){return X_().memoizedState}function $$(_,e,t,n){var $=$e();r_.flags|=_,$.memoizedState=mn(1|e,t,void 0,n===void 0?null:n)}function j$(_,e,t,n){var $=X_();n=n===void 0?null:n;var r=void 0;if(c_!==null){var l=c_.memoizedState;if(r=l.destroy,n!==null&&bl(n,l.deps)){$.memoizedState=mn(e,t,r,n);return}}r_.flags|=_,$.memoizedState=mn(1|e,t,r,n)}function ri(_,e){return $$(8390656,8,_,e)}function _o(_,e){return j$(2048,8,_,e)}function au(_,e){return j$(4,2,_,e)}function uu(_,e){return j$(4,4,_,e)}function su(_,e){if(typeof e=="function")return _=_(),e(_),function(){e(null)};if(e!=null)return _=_(),e.current=_,function(){e.current=null}}function cu(_,e,t){return t=t!=null?t.concat([_]):null,j$(4,4,su.bind(null,e,_),t)}function eo(){}function Tu(_,e){var t=X_();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&bl(e,n[1])?n[0]:(t.memoizedState=[_,e],_)}function fu(_,e){var t=X_();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&bl(e,n[1])?n[0]:(_=_(),t.memoizedState=[_,e],_)}function du(_,e,t){return Ze&21?(te(t,e)||(t=ha(),r_.lanes|=t,qe|=t,_.baseState=!0),e):(_.baseState&&(_.baseState=!1,P_=!0),_.memoizedState=t)}function rT(_,e){var t=z;z=t!==0&&4>t?t:4,_(!0);var n=Er.transition;Er.transition={};try{_(!1),e()}finally{z=t,Er.transition=n}}function Lu(){return X_().memoizedState}function lT(_,e,t){var n=Me(_);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},Eu(_))Iu(e,t);else if(t=Za(_,e,t,n),t!==null){var $=C_();ee(t,_,n,$),Au(t,e,n)}}function oT(_,e,t){var n=Me(_),$={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(Eu(_))Iu(e,$);else{var r=_.alternate;if(_.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var l=e.lastRenderedState,o=r(l,t);if($.hasEagerState=!0,$.eagerState=o,te(o,l)){var i=e.interleaved;i===null?($.next=$,zl(e)):($.next=i.next,i.next=$),e.interleaved=$;return}}catch{}finally{}t=Za(_,e,$,n),t!==null&&($=C_(),ee(t,_,n,$),Au(t,e,n))}}function Eu(_){var e=_.alternate;return _===r_||e!==null&&e===r_}function Iu(_,e){tn=C$=!0;var t=_.pending;t===null?e.next=e:(e.next=t.next,t.next=e),_.pending=e}function Au(_,e,t){if(t&4194240){var n=e.lanes;n&=_.pendingLanes,t|=n,e.lanes=t,Ol(_,t)}}var S$={readContext:K_,useCallback:h_,useContext:h_,useEffect:h_,useImperativeHandle:h_,useInsertionEffect:h_,useLayoutEffect:h_,useMemo:h_,useReducer:h_,useRef:h_,useState:h_,useDebugValue:h_,useDeferredValue:h_,useTransition:h_,useMutableSource:h_,useSyncExternalStore:h_,useId:h_,unstable_isNewReconciler:!1},iT={readContext:K_,useCallback:function(_,e){return $e().memoizedState=[_,e===void 0?null:e],_},useContext:K_,useEffect:ri,useImperativeHandle:function(_,e,t){return t=t!=null?t.concat([_]):null,$$(4194308,4,su.bind(null,e,_),t)},useLayoutEffect:function(_,e){return $$(4194308,4,_,e)},useInsertionEffect:function(_,e){return $$(4,2,_,e)},useMemo:function(_,e){var t=$e();return e=e===void 0?null:e,_=_(),t.memoizedState=[_,e],_},useReducer:function(_,e,t){var n=$e();return e=t!==void 0?t(e):e,n.memoizedState=n.baseState=e,_={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_,lastRenderedState:e},n.queue=_,_=_.dispatch=lT.bind(null,r_,_),[n.memoizedState,_]},useRef:function(_){var e=$e();return _={current:_},e.memoizedState=_},useState:$i,useDebugValue:eo,useDeferredValue:function(_){return $e().memoizedState=_},useTransition:function(){var _=$i(!1),e=_[0];return _=rT.bind(null,_[1]),$e().memoizedState=_,[e,_]},useMutableSource:function(){},useSyncExternalStore:function(_,e,t){var n=r_,$=$e();if(n_){if(t===void 0)throw Error(C(407));t=t()}else{if(t=e(),d_===null)throw Error(C(349));Ze&30||nu(n,e,t)}$.memoizedState=t;var r={value:t,getSnapshot:e};return $.queue=r,ri(ru.bind(null,n,r,_),[_]),n.flags|=2048,mn(9,$u.bind(null,n,r,t,e),void 0,null),t},useId:function(){var _=$e(),e=d_.identifierPrefix;if(n_){var t=se,n=ue;t=(n&~(1<<32-_e(n)-1)).toString(32)+t,e=":"+e+"R"+t,t=hn++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=$T++,e=":"+e+"r"+t.toString(32)+":";return _.memoizedState=e},unstable_isNewReconciler:!1},aT={readContext:K_,useCallback:Tu,useContext:K_,useEffect:_o,useImperativeHandle:cu,useInsertionEffect:au,useLayoutEffect:uu,useMemo:fu,useReducer:Ir,useRef:iu,useState:function(){return Ir(pn)},useDebugValue:eo,useDeferredValue:function(_){var e=X_();return du(e,c_.memoizedState,_)},useTransition:function(){var _=Ir(pn)[0],e=X_().memoizedState;return[_,e]},useMutableSource:eu,useSyncExternalStore:tu,useId:Lu,unstable_isNewReconciler:!1},uT={readContext:K_,useCallback:Tu,useContext:K_,useEffect:_o,useImperativeHandle:cu,useInsertionEffect:au,useLayoutEffect:uu,useMemo:fu,useReducer:Ar,useRef:iu,useState:function(){return Ar(pn)},useDebugValue:eo,useDeferredValue:function(_){var e=X_();return c_===null?e.memoizedState=_:du(e,c_.memoizedState,_)},useTransition:function(){var _=Ar(pn)[0],e=X_().memoizedState;return[_,e]},useMutableSource:eu,useSyncExternalStore:tu,useId:Lu,unstable_isNewReconciler:!1};function b_(_,e){if(_&&_.defaultProps){e=l_({},e),_=_.defaultProps;for(var t in _)e[t]===void 0&&(e[t]=_[t]);return e}return e}function el(_,e,t,n){e=_.memoizedState,t=t(n,e),t=t==null?e:l_({},e,t),_.memoizedState=t,_.lanes===0&&(_.updateQueue.baseState=t)}var V$={isMounted:function(_){return(_=_._reactInternals)?tt(_)===_:!1},enqueueSetState:function(_,e,t){_=_._reactInternals;var n=C_(),$=Me(_),r=ce(n,$);r.payload=e,t!=null&&(r.callback=t),e=Oe(_,r,$),e!==null&&(ee(e,_,$,n),t$(e,_,$))},enqueueReplaceState:function(_,e,t){_=_._reactInternals;var n=C_(),$=Me(_),r=ce(n,$);r.tag=1,r.payload=e,t!=null&&(r.callback=t),e=Oe(_,r,$),e!==null&&(ee(e,_,$,n),t$(e,_,$))},enqueueForceUpdate:function(_,e){_=_._reactInternals;var t=C_(),n=Me(_),$=ce(t,n);$.tag=2,e!=null&&($.callback=e),e=Oe(_,$,n),e!==null&&(ee(e,_,n,t),t$(e,_,n))}};function li(_,e,t,n,$,r,l){return _=_.stateNode,typeof _.shouldComponentUpdate=="function"?_.shouldComponentUpdate(n,r,l):e.prototype&&e.prototype.isPureReactComponent?!fn(t,n)||!fn($,r):!0}function hu(_,e,t){var n=!1,$=Ue,r=e.contextType;return typeof r=="object"&&r!==null?r=K_(r):($=w_(e)?Je:R_.current,n=e.contextTypes,r=(n=n!=null)?Ct(_,$):Ue),e=new e(t,r),_.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=V$,_.stateNode=e,e._reactInternals=_,n&&(_=_.stateNode,_.__reactInternalMemoizedUnmaskedChildContext=$,_.__reactInternalMemoizedMaskedChildContext=r),e}function oi(_,e,t,n){_=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,n),e.state!==_&&V$.enqueueReplaceState(e,e.state,null)}function tl(_,e,t,n){var $=_.stateNode;$.props=t,$.state=_.memoizedState,$.refs={},Kl(_);var r=e.contextType;typeof r=="object"&&r!==null?$.context=K_(r):(r=w_(e)?Je:R_.current,$.context=Ct(_,r)),$.state=_.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(el(_,e,r,t),$.state=_.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof $.getSnapshotBeforeUpdate=="function"||typeof $.UNSAFE_componentWillMount!="function"&&typeof $.componentWillMount!="function"||(e=$.state,typeof $.componentWillMount=="function"&&$.componentWillMount(),typeof $.UNSAFE_componentWillMount=="function"&&$.UNSAFE_componentWillMount(),e!==$.state&&V$.enqueueReplaceState($,$.state,null),g$(_,t,$,n),$.state=_.memoizedState),typeof $.componentDidMount=="function"&&(_.flags|=4194308)}function xt(_,e){try{var t="",n=e;do t+=Us(n),n=n.return;while(n);var $=t}catch(r){$=`
Error generating stack: `+r.message+`
`+r.stack}return{value:_,source:e,stack:$,digest:null}}function hr(_,e,t){return{value:_,source:null,stack:t??null,digest:e??null}}function nl(_,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var sT=typeof WeakMap=="function"?WeakMap:Map;function pu(_,e,t){t=ce(-1,t),t.tag=3,t.payload={element:null};var n=e.value;return t.callback=function(){y$||(y$=!0,Tl=n),nl(_,e)},t}function mu(_,e,t){t=ce(-1,t),t.tag=3;var n=_.type.getDerivedStateFromError;if(typeof n=="function"){var $=e.value;t.payload=function(){return n($)},t.callback=function(){nl(_,e)}}var r=_.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){nl(_,e),typeof n!="function"&&(we===null?we=new Set([this]):we.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),t}function ii(_,e,t){var n=_.pingCache;if(n===null){n=_.pingCache=new sT;var $=new Set;n.set(e,$)}else $=n.get(e),$===void 0&&($=new Set,n.set(e,$));$.has(t)||($.add(t),_=vT.bind(null,_,e,t),e.then(_,_))}function ai(_){do{var e;if((e=_.tag===13)&&(e=_.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return _;_=_.return}while(_!==null);return null}function ui(_,e,t,n,$){return _.mode&1?(_.flags|=65536,_.lanes=$,_):(_===e?_.flags|=65536:(_.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ce(-1,1),e.tag=2,Oe(t,e,1))),t.lanes|=1),_)}var cT=Ee.ReactCurrentOwner,P_=!1;function v_(_,e,t,n){e.child=_===null?ba(e,null,t,n):Nt(e,_.child,t,n)}function si(_,e,t,n,$){t=t.render;var r=e.ref;return Rt(e,$),n=Zl(_,e,t,n,r,$),t=ql(),_!==null&&!P_?(e.updateQueue=_.updateQueue,e.flags&=-2053,_.lanes&=~$,Le(_,e,$)):(n_&&t&&Fl(e),e.flags|=1,v_(_,e,n,$),e.child)}function ci(_,e,t,n,$){if(_===null){var r=t.type;return typeof r=="function"&&!ao(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=r,Ru(_,e,r,n,$)):(_=i$(t.type,null,n,e,e.mode,$),_.ref=e.ref,_.return=e,e.child=_)}if(r=_.child,!(_.lanes&$)){var l=r.memoizedProps;if(t=t.compare,t=t!==null?t:fn,t(l,n)&&_.ref===e.ref)return Le(_,e,$)}return e.flags|=1,_=He(r,n),_.ref=e.ref,_.return=e,e.child=_}function Ru(_,e,t,n,$){if(_!==null){var r=_.memoizedProps;if(fn(r,n)&&_.ref===e.ref)if(P_=!1,e.pendingProps=n=r,(_.lanes&$)!==0)_.flags&131072&&(P_=!0);else return e.lanes=_.lanes,Le(_,e,$)}return $l(_,e,t,n,$)}function gu(_,e,t){var n=e.pendingProps,$=n.children,r=_!==null?_.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(It,W_),W_|=t;else{if(!(t&1073741824))return _=r!==null?r.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:_,cachePool:null,transitions:null},e.updateQueue=null,b(It,W_),W_|=_,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:t,b(It,W_),W_|=n}else r!==null?(n=r.baseLanes|t,e.memoizedState=null):n=t,b(It,W_),W_|=n;return v_(_,e,$,t),e.child}function vu(_,e){var t=e.ref;(_===null&&t!==null||_!==null&&_.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function $l(_,e,t,n,$){var r=w_(t)?Je:R_.current;return r=Ct(e,r),Rt(e,$),t=Zl(_,e,t,n,r,$),n=ql(),_!==null&&!P_?(e.updateQueue=_.updateQueue,e.flags&=-2053,_.lanes&=~$,Le(_,e,$)):(n_&&n&&Fl(e),e.flags|=1,v_(_,e,t,$),e.child)}function Ti(_,e,t,n,$){if(w_(t)){var r=!0;A$(e)}else r=!1;if(Rt(e,$),e.stateNode===null)r$(_,e),hu(e,t,n),tl(e,t,n,$),n=!0;else if(_===null){var l=e.stateNode,o=e.memoizedProps;l.props=o;var i=l.context,a=t.contextType;typeof a=="object"&&a!==null?a=K_(a):(a=w_(t)?Je:R_.current,a=Ct(e,a));var L=t.getDerivedStateFromProps,f=typeof L=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||i!==a)&&oi(e,l,n,a),me=!1;var d=e.memoizedState;l.state=d,g$(e,n,l,$),i=e.memoizedState,o!==n||d!==i||O_.current||me?(typeof L=="function"&&(el(e,t,L,n),i=e.memoizedState),(o=me||li(e,t,o,n,d,i,a))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=i),l.props=n,l.state=i,l.context=a,n=o):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,qa(_,e),o=e.memoizedProps,a=e.type===e.elementType?o:b_(e.type,o),l.props=a,f=e.pendingProps,d=l.context,i=t.contextType,typeof i=="object"&&i!==null?i=K_(i):(i=w_(t)?Je:R_.current,i=Ct(e,i));var g=t.getDerivedStateFromProps;(L=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==f||d!==i)&&oi(e,l,n,i),me=!1,d=e.memoizedState,l.state=d,g$(e,n,l,$);var v=e.memoizedState;o!==f||d!==v||O_.current||me?(typeof g=="function"&&(el(e,t,g,n),v=e.memoizedState),(a=me||li(e,t,a,n,d,v,i)||!1)?(L||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,v,i),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,v,i)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===_.memoizedProps&&d===_.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===_.memoizedProps&&d===_.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=v),l.props=n,l.state=v,l.context=i,n=a):(typeof l.componentDidUpdate!="function"||o===_.memoizedProps&&d===_.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===_.memoizedProps&&d===_.memoizedState||(e.flags|=1024),n=!1)}return rl(_,e,t,n,r,$)}function rl(_,e,t,n,$,r){vu(_,e);var l=(e.flags&128)!==0;if(!n&&!l)return $&&Zo(e,t,!1),Le(_,e,r);n=e.stateNode,cT.current=e;var o=l&&typeof t.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,_!==null&&l?(e.child=Nt(e,_.child,null,r),e.child=Nt(e,null,o,r)):v_(_,e,o,r),e.memoizedState=n.state,$&&Zo(e,t,!0),e.child}function Cu(_){var e=_.stateNode;e.pendingContext?bo(_,e.pendingContext,e.pendingContext!==e.context):e.context&&bo(_,e.context,!1),Xl(_,e.containerInfo)}function fi(_,e,t,n,$){return St(),jl($),e.flags|=256,v_(_,e,t,n),e.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function ol(_){return{baseLanes:_,cachePool:null,transitions:null}}function Su(_,e,t){var n=e.pendingProps,$=$_.current,r=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=_!==null&&_.memoizedState===null?!1:($&2)!==0),o?(r=!0,e.flags&=-129):(_===null||_.memoizedState!==null)&&($|=1),b($_,$&1),_===null)return qr(e),_=e.memoizedState,_!==null&&(_=_.dehydrated,_!==null)?(e.mode&1?_.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,_=n.fallback,r?(n=e.mode,r=e.child,l={mode:"hidden",children:l},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=z$(l,n,0,null),_=Qe(_,n,t,null),r.return=e,_.return=e,r.sibling=_,e.child=r,e.child.memoizedState=ol(t),e.memoizedState=ll,_):to(e,l));if($=_.memoizedState,$!==null&&(o=$.dehydrated,o!==null))return TT(_,e,l,n,o,$,t);if(r){r=n.fallback,l=e.mode,$=_.child,o=$.sibling;var i={mode:"hidden",children:n.children};return!(l&1)&&e.child!==$?(n=e.child,n.childLanes=0,n.pendingProps=i,e.deletions=null):(n=He($,i),n.subtreeFlags=$.subtreeFlags&14680064),o!==null?r=He(o,r):(r=Qe(r,l,t,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,n=r,r=e.child,l=_.child.memoizedState,l=l===null?ol(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=_.childLanes&~t,e.memoizedState=ll,n}return r=_.child,_=r.sibling,n=He(r,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=t),n.return=e,n.sibling=null,_!==null&&(t=e.deletions,t===null?(e.deletions=[_],e.flags|=16):t.push(_)),e.child=n,e.memoizedState=null,n}function to(_,e){return e=z$({mode:"visible",children:e},_.mode,0,null),e.return=_,_.child=e}function Kn(_,e,t,n){return n!==null&&jl(n),Nt(e,_.child,null,t),_=to(e,e.pendingProps.children),_.flags|=2,e.memoizedState=null,_}function TT(_,e,t,n,$,r,l){if(t)return e.flags&256?(e.flags&=-257,n=hr(Error(C(422))),Kn(_,e,l,n)):e.memoizedState!==null?(e.child=_.child,e.flags|=128,null):(r=n.fallback,$=e.mode,n=z$({mode:"visible",children:n.children},$,0,null),r=Qe(r,$,l,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,e.mode&1&&Nt(e,_.child,null,l),e.child.memoizedState=ol(l),e.memoizedState=ll,r);if(!(e.mode&1))return Kn(_,e,l,null);if($.data==="$!"){if(n=$.nextSibling&&$.nextSibling.dataset,n)var o=n.dgst;return n=o,r=Error(C(419)),n=hr(r,n,void 0),Kn(_,e,l,n)}if(o=(l&_.childLanes)!==0,P_||o){if(n=d_,n!==null){switch(l&-l){case 4:$=2;break;case 16:$=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:$=32;break;case 536870912:$=268435456;break;default:$=0}$=$&(n.suspendedLanes|l)?0:$,$!==0&&$!==r.retryLane&&(r.retryLane=$,de(_,$),ee(n,_,$,-1))}return io(),n=hr(Error(C(421))),Kn(_,e,l,n)}return $.data==="$?"?(e.flags|=128,e.child=_.child,e=CT.bind(null,_),$._reactRetry=e,null):(_=r.treeContext,U_=Pe($.nextSibling),D_=e,n_=!0,q_=null,_!==null&&(V_[B_++]=ue,V_[B_++]=se,V_[B_++]=be,ue=_.id,se=_.overflow,be=e),e=to(e,n.children),e.flags|=4096,e)}function di(_,e,t){_.lanes|=e;var n=_.alternate;n!==null&&(n.lanes|=e),_l(_.return,e,t)}function pr(_,e,t,n,$){var r=_.memoizedState;r===null?_.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:$}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=t,r.tailMode=$)}function Nu(_,e,t){var n=e.pendingProps,$=n.revealOrder,r=n.tail;if(v_(_,e,n.children,t),n=$_.current,n&2)n=n&1|2,e.flags|=128;else{if(_!==null&&_.flags&128)_:for(_=e.child;_!==null;){if(_.tag===13)_.memoizedState!==null&&di(_,t,e);else if(_.tag===19)di(_,t,e);else if(_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break _;for(;_.sibling===null;){if(_.return===null||_.return===e)break _;_=_.return}_.sibling.return=_.return,_=_.sibling}n&=1}if(b($_,n),!(e.mode&1))e.memoizedState=null;else switch($){case"forwards":for(t=e.child,$=null;t!==null;)_=t.alternate,_!==null&&v$(_)===null&&($=t),t=t.sibling;t=$,t===null?($=e.child,e.child=null):($=t.sibling,t.sibling=null),pr(e,!1,$,t,r);break;case"backwards":for(t=null,$=e.child,e.child=null;$!==null;){if(_=$.alternate,_!==null&&v$(_)===null){e.child=$;break}_=$.sibling,$.sibling=t,t=$,$=_}pr(e,!0,t,null,r);break;case"together":pr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function r$(_,e){!(e.mode&1)&&_!==null&&(_.alternate=null,e.alternate=null,e.flags|=2)}function Le(_,e,t){if(_!==null&&(e.dependencies=_.dependencies),qe|=e.lanes,!(t&e.childLanes))return null;if(_!==null&&e.child!==_.child)throw Error(C(153));if(e.child!==null){for(_=e.child,t=He(_,_.pendingProps),e.child=t,t.return=e;_.sibling!==null;)_=_.sibling,t=t.sibling=He(_,_.pendingProps),t.return=e;t.sibling=null}return e.child}function fT(_,e,t){switch(e.tag){case 3:Cu(e),St();break;case 5:_u(e);break;case 1:w_(e.type)&&A$(e);break;case 4:Xl(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,$=e.memoizedProps.value;b(m$,n._currentValue),n._currentValue=$;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(b($_,$_.current&1),e.flags|=128,null):t&e.child.childLanes?Su(_,e,t):(b($_,$_.current&1),_=Le(_,e,t),_!==null?_.sibling:null);b($_,$_.current&1);break;case 19:if(n=(t&e.childLanes)!==0,_.flags&128){if(n)return Nu(_,e,t);e.flags|=128}if($=e.memoizedState,$!==null&&($.rendering=null,$.tail=null,$.lastEffect=null),b($_,$_.current),n)break;return null;case 22:case 23:return e.lanes=0,gu(_,e,t)}return Le(_,e,t)}var yu,il,xu,Pu;yu=function(_,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)_.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};il=function(){};xu=function(_,e,t,n){var $=_.memoizedProps;if($!==n){_=e.stateNode,Ke(oe.current);var r=null;switch(t){case"input":$=xr(_,$),n=xr(_,n),r=[];break;case"select":$=l_({},$,{value:void 0}),n=l_({},n,{value:void 0}),r=[];break;case"textarea":$=wr(_,$),n=wr(_,n),r=[];break;default:typeof $.onClick!="function"&&typeof n.onClick=="function"&&(_.onclick=E$)}Hr(t,n);var l;t=null;for(a in $)if(!n.hasOwnProperty(a)&&$.hasOwnProperty(a)&&$[a]!=null)if(a==="style"){var o=$[a];for(l in o)o.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ln.hasOwnProperty(a)?r||(r=[]):(r=r||[]).push(a,null));for(a in n){var i=n[a];if(o=$!=null?$[a]:void 0,n.hasOwnProperty(a)&&i!==o&&(i!=null||o!=null))if(a==="style")if(o){for(l in o)!o.hasOwnProperty(l)||i&&i.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in i)i.hasOwnProperty(l)&&o[l]!==i[l]&&(t||(t={}),t[l]=i[l])}else t||(r||(r=[]),r.push(a,t)),t=i;else a==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(r=r||[]).push(a,i)):a==="children"?typeof i!="string"&&typeof i!="number"||(r=r||[]).push(a,""+i):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(ln.hasOwnProperty(a)?(i!=null&&a==="onScroll"&&__("scroll",_),r||o===i||(r=[])):(r=r||[]).push(a,i))}t&&(r=r||[]).push("style",t);var a=r;(e.updateQueue=a)&&(e.flags|=4)}};Pu=function(_,e,t,n){t!==n&&(e.flags|=4)};function Bt(_,e){if(!n_)switch(_.tailMode){case"hidden":e=_.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?_.tail=null:t.sibling=null;break;case"collapsed":t=_.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e||_.tail===null?_.tail=null:_.tail.sibling=null:n.sibling=null}}function p_(_){var e=_.alternate!==null&&_.alternate.child===_.child,t=0,n=0;if(e)for(var $=_.child;$!==null;)t|=$.lanes|$.childLanes,n|=$.subtreeFlags&14680064,n|=$.flags&14680064,$.return=_,$=$.sibling;else for($=_.child;$!==null;)t|=$.lanes|$.childLanes,n|=$.subtreeFlags,n|=$.flags,$.return=_,$=$.sibling;return _.subtreeFlags|=n,_.childLanes=t,e}function dT(_,e,t){var n=e.pendingProps;switch(Gl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return p_(e),null;case 1:return w_(e.type)&&I$(),p_(e),null;case 3:return n=e.stateNode,yt(),e_(O_),e_(R_),Jl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(_===null||_.child===null)&&(Yn(e)?e.flags|=4:_===null||_.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,q_!==null&&(Ll(q_),q_=null))),il(_,e),p_(e),null;case 5:Ql(e);var $=Ke(An.current);if(t=e.type,_!==null&&e.stateNode!=null)xu(_,e,t,n,$),_.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(C(166));return p_(e),null}if(_=Ke(oe.current),Yn(e)){n=e.stateNode,t=e.type;var r=e.memoizedProps;switch(n[re]=e,n[En]=r,_=(e.mode&1)!==0,t){case"dialog":__("cancel",n),__("close",n);break;case"iframe":case"object":case"embed":__("load",n);break;case"video":case"audio":for($=0;$<Qt.length;$++)__(Qt[$],n);break;case"source":__("error",n);break;case"img":case"image":case"link":__("error",n),__("load",n);break;case"details":__("toggle",n);break;case"input":go(n,r),__("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},__("invalid",n);break;case"textarea":Co(n,r),__("invalid",n)}Hr(t,r),$=null;for(var l in r)if(r.hasOwnProperty(l)){var o=r[l];l==="children"?typeof o=="string"?n.textContent!==o&&(r.suppressHydrationWarning!==!0&&Bn(n.textContent,o,_),$=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&Bn(n.textContent,o,_),$=["children",""+o]):ln.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&__("scroll",n)}switch(t){case"input":kn(n),vo(n,r,!0);break;case"textarea":kn(n),So(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=E$)}n=$,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=$.nodeType===9?$:$.ownerDocument,_==="http://www.w3.org/1999/xhtml"&&(_=ra(t)),_==="http://www.w3.org/1999/xhtml"?t==="script"?(_=l.createElement("div"),_.innerHTML="<script><\/script>",_=_.removeChild(_.firstChild)):typeof n.is=="string"?_=l.createElement(t,{is:n.is}):(_=l.createElement(t),t==="select"&&(l=_,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):_=l.createElementNS(_,t),_[re]=e,_[En]=n,yu(_,e,!1,!1),e.stateNode=_;_:{switch(l=kr(t,n),t){case"dialog":__("cancel",_),__("close",_),$=n;break;case"iframe":case"object":case"embed":__("load",_),$=n;break;case"video":case"audio":for($=0;$<Qt.length;$++)__(Qt[$],_);$=n;break;case"source":__("error",_),$=n;break;case"img":case"image":case"link":__("error",_),__("load",_),$=n;break;case"details":__("toggle",_),$=n;break;case"input":go(_,n),$=xr(_,n),__("invalid",_);break;case"option":$=n;break;case"select":_._wrapperState={wasMultiple:!!n.multiple},$=l_({},n,{value:void 0}),__("invalid",_);break;case"textarea":Co(_,n),$=wr(_,n),__("invalid",_);break;default:$=n}Hr(t,$),o=$;for(r in o)if(o.hasOwnProperty(r)){var i=o[r];r==="style"?ia(_,i):r==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&la(_,i)):r==="children"?typeof i=="string"?(t!=="textarea"||i!=="")&&on(_,i):typeof i=="number"&&on(_,""+i):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ln.hasOwnProperty(r)?i!=null&&r==="onScroll"&&__("scroll",_):i!=null&&Cl(_,r,i,l))}switch(t){case"input":kn(_),vo(_,n,!1);break;case"textarea":kn(_),So(_);break;case"option":n.value!=null&&_.setAttribute("value",""+We(n.value));break;case"select":_.multiple=!!n.multiple,r=n.value,r!=null?At(_,!!n.multiple,r,!1):n.defaultValue!=null&&At(_,!!n.multiple,n.defaultValue,!0);break;default:typeof $.onClick=="function"&&(_.onclick=E$)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break _;case"img":n=!0;break _;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return p_(e),null;case 6:if(_&&e.stateNode!=null)Pu(_,e,_.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(C(166));if(t=Ke(An.current),Ke(oe.current),Yn(e)){if(n=e.stateNode,t=e.memoizedProps,n[re]=e,(r=n.nodeValue!==t)&&(_=D_,_!==null))switch(_.tag){case 3:Bn(n.nodeValue,t,(_.mode&1)!==0);break;case 5:_.memoizedProps.suppressHydrationWarning!==!0&&Bn(n.nodeValue,t,(_.mode&1)!==0)}r&&(e.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[re]=e,e.stateNode=n}return p_(e),null;case 13:if(e_($_),n=e.memoizedState,_===null||_.memoizedState!==null&&_.memoizedState.dehydrated!==null){if(n_&&U_!==null&&e.mode&1&&!(e.flags&128))Qa(),St(),e.flags|=98560,r=!1;else if(r=Yn(e),n!==null&&n.dehydrated!==null){if(_===null){if(!r)throw Error(C(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(C(317));r[re]=e}else St(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;p_(e),r=!1}else q_!==null&&(Ll(q_),q_=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(n=n!==null,n!==(_!==null&&_.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(_===null||$_.current&1?T_===0&&(T_=3):io())),e.updateQueue!==null&&(e.flags|=4),p_(e),null);case 4:return yt(),il(_,e),_===null&&dn(e.stateNode.containerInfo),p_(e),null;case 10:return Yl(e.type._context),p_(e),null;case 17:return w_(e.type)&&I$(),p_(e),null;case 19:if(e_($_),r=e.memoizedState,r===null)return p_(e),null;if(n=(e.flags&128)!==0,l=r.rendering,l===null)if(n)Bt(r,!1);else{if(T_!==0||_!==null&&_.flags&128)for(_=e.child;_!==null;){if(l=v$(_),l!==null){for(e.flags|=128,Bt(r,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=t,t=e.child;t!==null;)r=t,_=n,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=_,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,_=l.dependencies,r.dependencies=_===null?null:{lanes:_.lanes,firstContext:_.firstContext}),t=t.sibling;return b($_,$_.current&1|2),e.child}_=_.sibling}r.tail!==null&&a_()>Pt&&(e.flags|=128,n=!0,Bt(r,!1),e.lanes=4194304)}else{if(!n)if(_=v$(l),_!==null){if(e.flags|=128,n=!0,t=_.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Bt(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!n_)return p_(e),null}else 2*a_()-r.renderingStartTime>Pt&&t!==1073741824&&(e.flags|=128,n=!0,Bt(r,!1),e.lanes=4194304);r.isBackwards?(l.sibling=e.child,e.child=l):(t=r.last,t!==null?t.sibling=l:e.child=l,r.last=l)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=a_(),e.sibling=null,t=$_.current,b($_,n?t&1|2:t&1),e):(p_(e),null);case 22:case 23:return oo(),n=e.memoizedState!==null,_!==null&&_.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?W_&1073741824&&(p_(e),e.subtreeFlags&6&&(e.flags|=8192)):p_(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function LT(_,e){switch(Gl(e),e.tag){case 1:return w_(e.type)&&I$(),_=e.flags,_&65536?(e.flags=_&-65537|128,e):null;case 3:return yt(),e_(O_),e_(R_),Jl(),_=e.flags,_&65536&&!(_&128)?(e.flags=_&-65537|128,e):null;case 5:return Ql(e),null;case 13:if(e_($_),_=e.memoizedState,_!==null&&_.dehydrated!==null){if(e.alternate===null)throw Error(C(340));St()}return _=e.flags,_&65536?(e.flags=_&-65537|128,e):null;case 19:return e_($_),null;case 4:return yt(),null;case 10:return Yl(e.type._context),null;case 22:case 23:return oo(),null;case 24:return null;default:return null}}var Xn=!1,m_=!1,ET=typeof WeakSet=="function"?WeakSet:Set,H=null;function Et(_,e){var t=_.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){o_(_,e,n)}else t.current=null}function al(_,e,t){try{t()}catch(n){o_(_,e,n)}}var Li=!1;function IT(_,e){if(zr=f$,_=ka(),Dl(_)){if("selectionStart"in _)var t={start:_.selectionStart,end:_.selectionEnd};else _:{t=(t=_.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var $=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break _}var l=0,o=-1,i=-1,a=0,L=0,f=_,d=null;e:for(;;){for(var g;f!==t||$!==0&&f.nodeType!==3||(o=l+$),f!==r||n!==0&&f.nodeType!==3||(i=l+n),f.nodeType===3&&(l+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===_)break e;if(d===t&&++a===$&&(o=l),d===r&&++L===n&&(i=l),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}t=o===-1||i===-1?null:{start:o,end:i}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kr={focusedElem:_,selectionRange:t},f$=!1,H=e;H!==null;)if(e=H,_=e.child,(e.subtreeFlags&1028)!==0&&_!==null)_.return=e,H=_;else for(;H!==null;){e=H;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var R=v.memoizedProps,P=v.memoizedState,c=e.stateNode,s=c.getSnapshotBeforeUpdate(e.elementType===e.type?R:b_(e.type,R),P);c.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(p){o_(e,e.return,p)}if(_=e.sibling,_!==null){_.return=e.return,H=_;break}H=e.return}return v=Li,Li=!1,v}function nn(_,e,t){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var $=n=n.next;do{if(($.tag&_)===_){var r=$.destroy;$.destroy=void 0,r!==void 0&&al(e,t,r)}$=$.next}while($!==n)}}function B$(_,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&_)===_){var n=t.create;t.destroy=n()}t=t.next}while(t!==e)}}function ul(_){var e=_.ref;if(e!==null){var t=_.stateNode;switch(_.tag){case 5:_=t;break;default:_=t}typeof e=="function"?e(_):e.current=_}}function Ou(_){var e=_.alternate;e!==null&&(_.alternate=null,Ou(e)),_.child=null,_.deletions=null,_.sibling=null,_.tag===5&&(e=_.stateNode,e!==null&&(delete e[re],delete e[En],delete e[Jr],delete e[_T],delete e[eT])),_.stateNode=null,_.return=null,_.dependencies=null,_.memoizedProps=null,_.memoizedState=null,_.pendingProps=null,_.stateNode=null,_.updateQueue=null}function wu(_){return _.tag===5||_.tag===3||_.tag===4}function Ei(_){_:for(;;){for(;_.sibling===null;){if(_.return===null||wu(_.return))return null;_=_.return}for(_.sibling.return=_.return,_=_.sibling;_.tag!==5&&_.tag!==6&&_.tag!==18;){if(_.flags&2||_.child===null||_.tag===4)continue _;_.child.return=_,_=_.child}if(!(_.flags&2))return _.stateNode}}function sl(_,e,t){var n=_.tag;if(n===5||n===6)_=_.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(_,e):t.insertBefore(_,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(_,t)):(e=t,e.appendChild(_)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=E$));else if(n!==4&&(_=_.child,_!==null))for(sl(_,e,t),_=_.sibling;_!==null;)sl(_,e,t),_=_.sibling}function cl(_,e,t){var n=_.tag;if(n===5||n===6)_=_.stateNode,e?t.insertBefore(_,e):t.appendChild(_);else if(n!==4&&(_=_.child,_!==null))for(cl(_,e,t),_=_.sibling;_!==null;)cl(_,e,t),_=_.sibling}var E_=null,Z_=!1;function he(_,e,t){for(t=t.child;t!==null;)Mu(_,e,t),t=t.sibling}function Mu(_,e,t){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(k$,t)}catch{}switch(t.tag){case 5:m_||Et(t,e);case 6:var n=E_,$=Z_;E_=null,he(_,e,t),E_=n,Z_=$,E_!==null&&(Z_?(_=E_,t=t.stateNode,_.nodeType===8?_.parentNode.removeChild(t):_.removeChild(t)):E_.removeChild(t.stateNode));break;case 18:E_!==null&&(Z_?(_=E_,t=t.stateNode,_.nodeType===8?fr(_.parentNode,t):_.nodeType===1&&fr(_,t),cn(_)):fr(E_,t.stateNode));break;case 4:n=E_,$=Z_,E_=t.stateNode.containerInfo,Z_=!0,he(_,e,t),E_=n,Z_=$;break;case 0:case 11:case 14:case 15:if(!m_&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){$=n=n.next;do{var r=$,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&al(t,e,l),$=$.next}while($!==n)}he(_,e,t);break;case 1:if(!m_&&(Et(t,e),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(o){o_(t,e,o)}he(_,e,t);break;case 21:he(_,e,t);break;case 22:t.mode&1?(m_=(n=m_)||t.memoizedState!==null,he(_,e,t),m_=n):he(_,e,t);break;default:he(_,e,t)}}function Ii(_){var e=_.updateQueue;if(e!==null){_.updateQueue=null;var t=_.stateNode;t===null&&(t=_.stateNode=new ET),e.forEach(function(n){var $=ST.bind(null,_,n);t.has(n)||(t.add(n),n.then($,$))})}}function J_(_,e){var t=e.deletions;if(t!==null)for(var n=0;n<t.length;n++){var $=t[n];try{var r=_,l=e,o=l;_:for(;o!==null;){switch(o.tag){case 5:E_=o.stateNode,Z_=!1;break _;case 3:E_=o.stateNode.containerInfo,Z_=!0;break _;case 4:E_=o.stateNode.containerInfo,Z_=!0;break _}o=o.return}if(E_===null)throw Error(C(160));Mu(r,l,$),E_=null,Z_=!1;var i=$.alternate;i!==null&&(i.return=null),$.return=null}catch(a){o_($,e,a)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hu(e,_),e=e.sibling}function Hu(_,e){var t=_.alternate,n=_.flags;switch(_.tag){case 0:case 11:case 14:case 15:if(J_(e,_),ne(_),n&4){try{nn(3,_,_.return),B$(3,_)}catch(R){o_(_,_.return,R)}try{nn(5,_,_.return)}catch(R){o_(_,_.return,R)}}break;case 1:J_(e,_),ne(_),n&512&&t!==null&&Et(t,t.return);break;case 5:if(J_(e,_),ne(_),n&512&&t!==null&&Et(t,t.return),_.flags&32){var $=_.stateNode;try{on($,"")}catch(R){o_(_,_.return,R)}}if(n&4&&($=_.stateNode,$!=null)){var r=_.memoizedProps,l=t!==null?t.memoizedProps:r,o=_.type,i=_.updateQueue;if(_.updateQueue=null,i!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&na($,r),kr(o,l);var a=kr(o,r);for(l=0;l<i.length;l+=2){var L=i[l],f=i[l+1];L==="style"?ia($,f):L==="dangerouslySetInnerHTML"?la($,f):L==="children"?on($,f):Cl($,L,f,a)}switch(o){case"input":Pr($,r);break;case"textarea":$a($,r);break;case"select":var d=$._wrapperState.wasMultiple;$._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?At($,!!r.multiple,g,!1):d!==!!r.multiple&&(r.defaultValue!=null?At($,!!r.multiple,r.defaultValue,!0):At($,!!r.multiple,r.multiple?[]:"",!1))}$[En]=r}catch(R){o_(_,_.return,R)}}break;case 6:if(J_(e,_),ne(_),n&4){if(_.stateNode===null)throw Error(C(162));$=_.stateNode,r=_.memoizedProps;try{$.nodeValue=r}catch(R){o_(_,_.return,R)}}break;case 3:if(J_(e,_),ne(_),n&4&&t!==null&&t.memoizedState.isDehydrated)try{cn(e.containerInfo)}catch(R){o_(_,_.return,R)}break;case 4:J_(e,_),ne(_);break;case 13:J_(e,_),ne(_),$=_.child,$.flags&8192&&(r=$.memoizedState!==null,$.stateNode.isHidden=r,!r||$.alternate!==null&&$.alternate.memoizedState!==null||(ro=a_())),n&4&&Ii(_);break;case 22:if(L=t!==null&&t.memoizedState!==null,_.mode&1?(m_=(a=m_)||L,J_(e,_),m_=a):J_(e,_),ne(_),n&8192){if(a=_.memoizedState!==null,(_.stateNode.isHidden=a)&&!L&&_.mode&1)for(H=_,L=_.child;L!==null;){for(f=H=L;H!==null;){switch(d=H,g=d.child,d.tag){case 0:case 11:case 14:case 15:nn(4,d,d.return);break;case 1:Et(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){n=d,t=d.return;try{e=n,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(R){o_(n,t,R)}}break;case 5:Et(d,d.return);break;case 22:if(d.memoizedState!==null){hi(f);continue}}g!==null?(g.return=d,H=g):hi(f)}L=L.sibling}_:for(L=null,f=_;;){if(f.tag===5){if(L===null){L=f;try{$=f.stateNode,a?(r=$.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=f.stateNode,i=f.memoizedProps.style,l=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=oa("display",l))}catch(R){o_(_,_.return,R)}}}else if(f.tag===6){if(L===null)try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(R){o_(_,_.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===_)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===_)break _;for(;f.sibling===null;){if(f.return===null||f.return===_)break _;L===f&&(L=null),f=f.return}L===f&&(L=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:J_(e,_),ne(_),n&4&&Ii(_);break;case 21:break;default:J_(e,_),ne(_)}}function ne(_){var e=_.flags;if(e&2){try{_:{for(var t=_.return;t!==null;){if(wu(t)){var n=t;break _}t=t.return}throw Error(C(160))}switch(n.tag){case 5:var $=n.stateNode;n.flags&32&&(on($,""),n.flags&=-33);var r=Ei(_);cl(_,r,$);break;case 3:case 4:var l=n.stateNode.containerInfo,o=Ei(_);sl(_,o,l);break;default:throw Error(C(161))}}catch(i){o_(_,_.return,i)}_.flags&=-3}e&4096&&(_.flags&=-4097)}function AT(_,e,t){H=_,ku(_)}function ku(_,e,t){for(var n=(_.mode&1)!==0;H!==null;){var $=H,r=$.child;if($.tag===22&&n){var l=$.memoizedState!==null||Xn;if(!l){var o=$.alternate,i=o!==null&&o.memoizedState!==null||m_;o=Xn;var a=m_;if(Xn=l,(m_=i)&&!a)for(H=$;H!==null;)l=H,i=l.child,l.tag===22&&l.memoizedState!==null?pi($):i!==null?(i.return=l,H=i):pi($);for(;r!==null;)H=r,ku(r),r=r.sibling;H=$,Xn=o,m_=a}Ai(_)}else $.subtreeFlags&8772&&r!==null?(r.return=$,H=r):Ai(_)}}function Ai(_){for(;H!==null;){var e=H;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:m_||B$(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!m_)if(t===null)n.componentDidMount();else{var $=e.elementType===e.type?t.memoizedProps:b_(e.type,t.memoizedProps);n.componentDidUpdate($,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&ni(e,r,n);break;case 3:var l=e.updateQueue;if(l!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ni(e,l,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var i=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&t.focus();break;case"img":i.src&&(t.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var a=e.alternate;if(a!==null){var L=a.memoizedState;if(L!==null){var f=L.dehydrated;f!==null&&cn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}m_||e.flags&512&&ul(e)}catch(d){o_(e,e.return,d)}}if(e===_){H=null;break}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}}function hi(_){for(;H!==null;){var e=H;if(e===_){H=null;break}var t=e.sibling;if(t!==null){t.return=e.return,H=t;break}H=e.return}}function pi(_){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{B$(4,e)}catch(i){o_(e,t,i)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var $=e.return;try{n.componentDidMount()}catch(i){o_(e,$,i)}}var r=e.return;try{ul(e)}catch(i){o_(e,r,i)}break;case 5:var l=e.return;try{ul(e)}catch(i){o_(e,l,i)}}}catch(i){o_(e,e.return,i)}if(e===_){H=null;break}var o=e.sibling;if(o!==null){o.return=e.return,H=o;break}H=e.return}}var hT=Math.ceil,N$=Ee.ReactCurrentDispatcher,no=Ee.ReactCurrentOwner,z_=Ee.ReactCurrentBatchConfig,Y=0,d_=null,u_=null,I_=0,W_=0,It=Fe(0),T_=0,Rn=null,qe=0,Y$=0,$o=0,$n=null,x_=null,ro=0,Pt=1/0,ie=null,y$=!1,Tl=null,we=null,Qn=!1,Ce=null,x$=0,rn=0,fl=null,l$=-1,o$=0;function C_(){return Y&6?a_():l$!==-1?l$:l$=a_()}function Me(_){return _.mode&1?Y&2&&I_!==0?I_&-I_:nT.transition!==null?(o$===0&&(o$=ha()),o$):(_=z,_!==0||(_=window.event,_=_===void 0?16:Sa(_.type)),_):1}function ee(_,e,t,n){if(50<rn)throw rn=0,fl=null,Error(C(185));Sn(_,t,n),(!(Y&2)||_!==d_)&&(_===d_&&(!(Y&2)&&(Y$|=t),T_===4&&ge(_,I_)),M_(_,n),t===1&&Y===0&&!(e.mode&1)&&(Pt=a_()+500,G$&&Ge()))}function M_(_,e){var t=_.callbackNode;nc(_,e);var n=T$(_,_===d_?I_:0);if(n===0)t!==null&&xo(t),_.callbackNode=null,_.callbackPriority=0;else if(e=n&-n,_.callbackPriority!==e){if(t!=null&&xo(t),e===1)_.tag===0?tT(mi.bind(null,_)):za(mi.bind(null,_)),Zc(function(){!(Y&6)&&Ge()}),t=null;else{switch(pa(n)){case 1:t=Pl;break;case 4:t=Ia;break;case 16:t=c$;break;case 536870912:t=Aa;break;default:t=c$}t=Bu(t,Wu.bind(null,_))}_.callbackPriority=e,_.callbackNode=t}}function Wu(_,e){if(l$=-1,o$=0,Y&6)throw Error(C(327));var t=_.callbackNode;if(gt()&&_.callbackNode!==t)return null;var n=T$(_,_===d_?I_:0);if(n===0)return null;if(n&30||n&_.expiredLanes||e)e=P$(_,n);else{e=n;var $=Y;Y|=2;var r=Du();(d_!==_||I_!==e)&&(ie=null,Pt=a_()+500,Xe(_,e));do try{RT();break}catch(o){Uu(_,o)}while(!0);Bl(),N$.current=r,Y=$,u_!==null?e=0:(d_=null,I_=0,e=T_)}if(e!==0){if(e===2&&($=Gr(_),$!==0&&(n=$,e=dl(_,$))),e===1)throw t=Rn,Xe(_,0),ge(_,n),M_(_,a_()),t;if(e===6)ge(_,n);else{if($=_.current.alternate,!(n&30)&&!pT($)&&(e=P$(_,n),e===2&&(r=Gr(_),r!==0&&(n=r,e=dl(_,r))),e===1))throw t=Rn,Xe(_,0),ge(_,n),M_(_,a_()),t;switch(_.finishedWork=$,_.finishedLanes=n,e){case 0:case 1:throw Error(C(345));case 2:Be(_,x_,ie);break;case 3:if(ge(_,n),(n&130023424)===n&&(e=ro+500-a_(),10<e)){if(T$(_,0)!==0)break;if($=_.suspendedLanes,($&n)!==n){C_(),_.pingedLanes|=_.suspendedLanes&$;break}_.timeoutHandle=Qr(Be.bind(null,_,x_,ie),e);break}Be(_,x_,ie);break;case 4:if(ge(_,n),(n&4194240)===n)break;for(e=_.eventTimes,$=-1;0<n;){var l=31-_e(n);r=1<<l,l=e[l],l>$&&($=l),n&=~r}if(n=$,n=a_()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*hT(n/1960))-n,10<n){_.timeoutHandle=Qr(Be.bind(null,_,x_,ie),n);break}Be(_,x_,ie);break;case 5:Be(_,x_,ie);break;default:throw Error(C(329))}}}return M_(_,a_()),_.callbackNode===t?Wu.bind(null,_):null}function dl(_,e){var t=$n;return _.current.memoizedState.isDehydrated&&(Xe(_,e).flags|=256),_=P$(_,e),_!==2&&(e=x_,x_=t,e!==null&&Ll(e)),_}function Ll(_){x_===null?x_=_:x_.push.apply(x_,_)}function pT(_){for(var e=_;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var $=t[n],r=$.getSnapshot;$=$.value;try{if(!te(r(),$))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===_)break;for(;e.sibling===null;){if(e.return===null||e.return===_)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ge(_,e){for(e&=~$o,e&=~Y$,_.suspendedLanes|=e,_.pingedLanes&=~e,_=_.expirationTimes;0<e;){var t=31-_e(e),n=1<<t;_[t]=-1,e&=~n}}function mi(_){if(Y&6)throw Error(C(327));gt();var e=T$(_,0);if(!(e&1))return M_(_,a_()),null;var t=P$(_,e);if(_.tag!==0&&t===2){var n=Gr(_);n!==0&&(e=n,t=dl(_,n))}if(t===1)throw t=Rn,Xe(_,0),ge(_,e),M_(_,a_()),t;if(t===6)throw Error(C(345));return _.finishedWork=_.current.alternate,_.finishedLanes=e,Be(_,x_,ie),M_(_,a_()),null}function lo(_,e){var t=Y;Y|=1;try{return _(e)}finally{Y=t,Y===0&&(Pt=a_()+500,G$&&Ge())}}function _t(_){Ce!==null&&Ce.tag===0&&!(Y&6)&&gt();var e=Y;Y|=1;var t=z_.transition,n=z;try{if(z_.transition=null,z=1,_)return _()}finally{z=n,z_.transition=t,Y=e,!(Y&6)&&Ge()}}function oo(){W_=It.current,e_(It)}function Xe(_,e){_.finishedWork=null,_.finishedLanes=0;var t=_.timeoutHandle;if(t!==-1&&(_.timeoutHandle=-1,bc(t)),u_!==null)for(t=u_.return;t!==null;){var n=t;switch(Gl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&I$();break;case 3:yt(),e_(O_),e_(R_),Jl();break;case 5:Ql(n);break;case 4:yt();break;case 13:e_($_);break;case 19:e_($_);break;case 10:Yl(n.type._context);break;case 22:case 23:oo()}t=t.return}if(d_=_,u_=_=He(_.current,null),I_=W_=e,T_=0,Rn=null,$o=Y$=qe=0,x_=$n=null,ze!==null){for(e=0;e<ze.length;e++)if(t=ze[e],n=t.interleaved,n!==null){t.interleaved=null;var $=n.next,r=t.pending;if(r!==null){var l=r.next;r.next=$,n.next=l}t.pending=n}ze=null}return _}function Uu(_,e){do{var t=u_;try{if(Bl(),n$.current=S$,C$){for(var n=r_.memoizedState;n!==null;){var $=n.queue;$!==null&&($.pending=null),n=n.next}C$=!1}if(Ze=0,f_=c_=r_=null,tn=!1,hn=0,no.current=null,t===null||t.return===null){T_=1,Rn=e,u_=null;break}_:{var r=_,l=t.return,o=t,i=e;if(e=I_,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var a=i,L=o,f=L.tag;if(!(L.mode&1)&&(f===0||f===11||f===15)){var d=L.alternate;d?(L.updateQueue=d.updateQueue,L.memoizedState=d.memoizedState,L.lanes=d.lanes):(L.updateQueue=null,L.memoizedState=null)}var g=ai(l);if(g!==null){g.flags&=-257,ui(g,l,o,r,e),g.mode&1&&ii(r,a,e),e=g,i=a;var v=e.updateQueue;if(v===null){var R=new Set;R.add(i),e.updateQueue=R}else v.add(i);break _}else{if(!(e&1)){ii(r,a,e),io();break _}i=Error(C(426))}}else if(n_&&o.mode&1){var P=ai(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ui(P,l,o,r,e),jl(xt(i,o));break _}}r=i=xt(i,o),T_!==4&&(T_=2),$n===null?$n=[r]:$n.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var c=pu(r,i,e);ti(r,c);break _;case 1:o=i;var s=r.type,T=r.stateNode;if(!(r.flags&128)&&(typeof s.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(we===null||!we.has(T)))){r.flags|=65536,e&=-e,r.lanes|=e;var p=mu(r,o,e);ti(r,p);break _}}r=r.return}while(r!==null)}Gu(t)}catch(O){e=O,u_===t&&t!==null&&(u_=t=t.return);continue}break}while(!0)}function Du(){var _=N$.current;return N$.current=S$,_===null?S$:_}function io(){(T_===0||T_===3||T_===2)&&(T_=4),d_===null||!(qe&268435455)&&!(Y$&268435455)||ge(d_,I_)}function P$(_,e){var t=Y;Y|=2;var n=Du();(d_!==_||I_!==e)&&(ie=null,Xe(_,e));do try{mT();break}catch($){Uu(_,$)}while(!0);if(Bl(),Y=t,N$.current=n,u_!==null)throw Error(C(261));return d_=null,I_=0,T_}function mT(){for(;u_!==null;)Fu(u_)}function RT(){for(;u_!==null&&!Xs();)Fu(u_)}function Fu(_){var e=Vu(_.alternate,_,W_);_.memoizedProps=_.pendingProps,e===null?Gu(_):u_=e,no.current=null}function Gu(_){var e=_;do{var t=e.alternate;if(_=e.return,e.flags&32768){if(t=LT(t,e),t!==null){t.flags&=32767,u_=t;return}if(_!==null)_.flags|=32768,_.subtreeFlags=0,_.deletions=null;else{T_=6,u_=null;return}}else if(t=dT(t,e,W_),t!==null){u_=t;return}if(e=e.sibling,e!==null){u_=e;return}u_=e=_}while(e!==null);T_===0&&(T_=5)}function Be(_,e,t){var n=z,$=z_.transition;try{z_.transition=null,z=1,gT(_,e,t,n)}finally{z_.transition=$,z=n}return null}function gT(_,e,t,n){do gt();while(Ce!==null);if(Y&6)throw Error(C(327));t=_.finishedWork;var $=_.finishedLanes;if(t===null)return null;if(_.finishedWork=null,_.finishedLanes=0,t===_.current)throw Error(C(177));_.callbackNode=null,_.callbackPriority=0;var r=t.lanes|t.childLanes;if($c(_,r),_===d_&&(u_=d_=null,I_=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Qn||(Qn=!0,Bu(c$,function(){return gt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=z_.transition,z_.transition=null;var l=z;z=1;var o=Y;Y|=4,no.current=null,IT(_,t),Hu(t,_),Bc(Kr),f$=!!zr,Kr=zr=null,_.current=t,AT(t),Qs(),Y=o,z=l,z_.transition=r}else _.current=t;if(Qn&&(Qn=!1,Ce=_,x$=$),r=_.pendingLanes,r===0&&(we=null),Zs(t.stateNode),M_(_,a_()),e!==null)for(n=_.onRecoverableError,t=0;t<e.length;t++)$=e[t],n($.value,{componentStack:$.stack,digest:$.digest});if(y$)throw y$=!1,_=Tl,Tl=null,_;return x$&1&&_.tag!==0&&gt(),r=_.pendingLanes,r&1?_===fl?rn++:(rn=0,fl=_):rn=0,Ge(),null}function gt(){if(Ce!==null){var _=pa(x$),e=z_.transition,t=z;try{if(z_.transition=null,z=16>_?16:_,Ce===null)var n=!1;else{if(_=Ce,Ce=null,x$=0,Y&6)throw Error(C(331));var $=Y;for(Y|=4,H=_.current;H!==null;){var r=H,l=r.child;if(H.flags&16){var o=r.deletions;if(o!==null){for(var i=0;i<o.length;i++){var a=o[i];for(H=a;H!==null;){var L=H;switch(L.tag){case 0:case 11:case 15:nn(8,L,r)}var f=L.child;if(f!==null)f.return=L,H=f;else for(;H!==null;){L=H;var d=L.sibling,g=L.return;if(Ou(L),L===a){H=null;break}if(d!==null){d.return=g,H=d;break}H=g}}}var v=r.alternate;if(v!==null){var R=v.child;if(R!==null){v.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}H=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,H=l;else _:for(;H!==null;){if(r=H,r.flags&2048)switch(r.tag){case 0:case 11:case 15:nn(9,r,r.return)}var c=r.sibling;if(c!==null){c.return=r.return,H=c;break _}H=r.return}}var s=_.current;for(H=s;H!==null;){l=H;var T=l.child;if(l.subtreeFlags&2064&&T!==null)T.return=l,H=T;else _:for(l=s;H!==null;){if(o=H,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:B$(9,o)}}catch(O){o_(o,o.return,O)}if(o===l){H=null;break _}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break _}H=o.return}}if(Y=$,Ge(),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(k$,_)}catch{}n=!0}return n}finally{z=t,z_.transition=e}}return!1}function Ri(_,e,t){e=xt(t,e),e=pu(_,e,1),_=Oe(_,e,1),e=C_(),_!==null&&(Sn(_,1,e),M_(_,e))}function o_(_,e,t){if(_.tag===3)Ri(_,_,t);else for(;e!==null;){if(e.tag===3){Ri(e,_,t);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(we===null||!we.has(n))){_=xt(t,_),_=mu(e,_,1),e=Oe(e,_,1),_=C_(),e!==null&&(Sn(e,1,_),M_(e,_));break}}e=e.return}}function vT(_,e,t){var n=_.pingCache;n!==null&&n.delete(e),e=C_(),_.pingedLanes|=_.suspendedLanes&t,d_===_&&(I_&t)===t&&(T_===4||T_===3&&(I_&130023424)===I_&&500>a_()-ro?Xe(_,0):$o|=t),M_(_,e)}function ju(_,e){e===0&&(_.mode&1?(e=Dn,Dn<<=1,!(Dn&130023424)&&(Dn=4194304)):e=1);var t=C_();_=de(_,e),_!==null&&(Sn(_,e,t),M_(_,t))}function CT(_){var e=_.memoizedState,t=0;e!==null&&(t=e.retryLane),ju(_,t)}function ST(_,e){var t=0;switch(_.tag){case 13:var n=_.stateNode,$=_.memoizedState;$!==null&&(t=$.retryLane);break;case 19:n=_.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(e),ju(_,t)}var Vu;Vu=function(_,e,t){if(_!==null)if(_.memoizedProps!==e.pendingProps||O_.current)P_=!0;else{if(!(_.lanes&t)&&!(e.flags&128))return P_=!1,fT(_,e,t);P_=!!(_.flags&131072)}else P_=!1,n_&&e.flags&1048576&&Ka(e,p$,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;r$(_,e),_=e.pendingProps;var $=Ct(e,R_.current);Rt(e,t),$=Zl(null,e,n,_,$,t);var r=ql();return e.flags|=1,typeof $=="object"&&$!==null&&typeof $.render=="function"&&$.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,w_(n)?(r=!0,A$(e)):r=!1,e.memoizedState=$.state!==null&&$.state!==void 0?$.state:null,Kl(e),$.updater=V$,e.stateNode=$,$._reactInternals=e,tl(e,n,_,t),e=rl(null,e,n,!0,r,t)):(e.tag=0,n_&&r&&Fl(e),v_(null,e,$,t),e=e.child),e;case 16:n=e.elementType;_:{switch(r$(_,e),_=e.pendingProps,$=n._init,n=$(n._payload),e.type=n,$=e.tag=yT(n),_=b_(n,_),$){case 0:e=$l(null,e,n,_,t);break _;case 1:e=Ti(null,e,n,_,t);break _;case 11:e=si(null,e,n,_,t);break _;case 14:e=ci(null,e,n,b_(n.type,_),t);break _}throw Error(C(306,n,""))}return e;case 0:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:b_(n,$),$l(_,e,n,$,t);case 1:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:b_(n,$),Ti(_,e,n,$,t);case 3:_:{if(Cu(e),_===null)throw Error(C(387));n=e.pendingProps,r=e.memoizedState,$=r.element,qa(_,e),g$(e,n,null,t);var l=e.memoizedState;if(n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){$=xt(Error(C(423)),e),e=fi(_,e,n,t,$);break _}else if(n!==$){$=xt(Error(C(424)),e),e=fi(_,e,n,t,$);break _}else for(U_=Pe(e.stateNode.containerInfo.firstChild),D_=e,n_=!0,q_=null,t=ba(e,null,n,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),n===$){e=Le(_,e,t);break _}v_(_,e,n,t)}e=e.child}return e;case 5:return _u(e),_===null&&qr(e),n=e.type,$=e.pendingProps,r=_!==null?_.memoizedProps:null,l=$.children,Xr(n,$)?l=null:r!==null&&Xr(n,r)&&(e.flags|=32),vu(_,e),v_(_,e,l,t),e.child;case 6:return _===null&&qr(e),null;case 13:return Su(_,e,t);case 4:return Xl(e,e.stateNode.containerInfo),n=e.pendingProps,_===null?e.child=Nt(e,null,n,t):v_(_,e,n,t),e.child;case 11:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:b_(n,$),si(_,e,n,$,t);case 7:return v_(_,e,e.pendingProps,t),e.child;case 8:return v_(_,e,e.pendingProps.children,t),e.child;case 12:return v_(_,e,e.pendingProps.children,t),e.child;case 10:_:{if(n=e.type._context,$=e.pendingProps,r=e.memoizedProps,l=$.value,b(m$,n._currentValue),n._currentValue=l,r!==null)if(te(r.value,l)){if(r.children===$.children&&!O_.current){e=Le(_,e,t);break _}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){l=r.child;for(var i=o.firstContext;i!==null;){if(i.context===n){if(r.tag===1){i=ce(-1,t&-t),i.tag=2;var a=r.updateQueue;if(a!==null){a=a.shared;var L=a.pending;L===null?i.next=i:(i.next=L.next,L.next=i),a.pending=i}}r.lanes|=t,i=r.alternate,i!==null&&(i.lanes|=t),_l(r.return,t,e),o.lanes|=t;break}i=i.next}}else if(r.tag===10)l=r.type===e.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(C(341));l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),_l(l,t,e),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===e){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}v_(_,e,$.children,t),e=e.child}return e;case 9:return $=e.type,n=e.pendingProps.children,Rt(e,t),$=K_($),n=n($),e.flags|=1,v_(_,e,n,t),e.child;case 14:return n=e.type,$=b_(n,e.pendingProps),$=b_(n.type,$),ci(_,e,n,$,t);case 15:return Ru(_,e,e.type,e.pendingProps,t);case 17:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:b_(n,$),r$(_,e),e.tag=1,w_(n)?(_=!0,A$(e)):_=!1,Rt(e,t),hu(e,n,$),tl(e,n,$,t),rl(null,e,n,!0,_,t);case 19:return Nu(_,e,t);case 22:return gu(_,e,t)}throw Error(C(156,e.tag))};function Bu(_,e){return Ea(_,e)}function NT(_,e,t,n){this.tag=_,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Y_(_,e,t,n){return new NT(_,e,t,n)}function ao(_){return _=_.prototype,!(!_||!_.isReactComponent)}function yT(_){if(typeof _=="function")return ao(_)?1:0;if(_!=null){if(_=_.$$typeof,_===Nl)return 11;if(_===yl)return 14}return 2}function He(_,e){var t=_.alternate;return t===null?(t=Y_(_.tag,e,_.key,_.mode),t.elementType=_.elementType,t.type=_.type,t.stateNode=_.stateNode,t.alternate=_,_.alternate=t):(t.pendingProps=e,t.type=_.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=_.flags&14680064,t.childLanes=_.childLanes,t.lanes=_.lanes,t.child=_.child,t.memoizedProps=_.memoizedProps,t.memoizedState=_.memoizedState,t.updateQueue=_.updateQueue,e=_.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=_.sibling,t.index=_.index,t.ref=_.ref,t}function i$(_,e,t,n,$,r){var l=2;if(n=_,typeof _=="function")ao(_)&&(l=1);else if(typeof _=="string")l=5;else _:switch(_){case it:return Qe(t.children,$,r,e);case Sl:l=8,$|=8;break;case Cr:return _=Y_(12,t,e,$|2),_.elementType=Cr,_.lanes=r,_;case Sr:return _=Y_(13,t,e,$),_.elementType=Sr,_.lanes=r,_;case Nr:return _=Y_(19,t,e,$),_.elementType=Nr,_.lanes=r,_;case _a:return z$(t,$,r,e);default:if(typeof _=="object"&&_!==null)switch(_.$$typeof){case Zi:l=10;break _;case qi:l=9;break _;case Nl:l=11;break _;case yl:l=14;break _;case pe:l=16,n=null;break _}throw Error(C(130,_==null?_:typeof _,""))}return e=Y_(l,t,e,$),e.elementType=_,e.type=n,e.lanes=r,e}function Qe(_,e,t,n){return _=Y_(7,_,n,e),_.lanes=t,_}function z$(_,e,t,n){return _=Y_(22,_,n,e),_.elementType=_a,_.lanes=t,_.stateNode={isHidden:!1},_}function mr(_,e,t){return _=Y_(6,_,null,e),_.lanes=t,_}function Rr(_,e,t){return e=Y_(4,_.children!==null?_.children:[],_.key,e),e.lanes=t,e.stateNode={containerInfo:_.containerInfo,pendingChildren:null,implementation:_.implementation},e}function xT(_,e,t,n,$){this.tag=e,this.containerInfo=_,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nr(0),this.expirationTimes=nr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.identifierPrefix=n,this.onRecoverableError=$,this.mutableSourceEagerHydrationData=null}function uo(_,e,t,n,$,r,l,o,i){return _=new xT(_,e,t,o,i),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Y_(3,null,null,e),_.current=r,r.stateNode=_,r.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(r),_}function PT(_,e,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:n==null?null:""+n,children:_,containerInfo:e,implementation:t}}function Yu(_){if(!_)return Ue;_=_._reactInternals;_:{if(tt(_)!==_||_.tag!==1)throw Error(C(170));var e=_;do{switch(e.tag){case 3:e=e.stateNode.context;break _;case 1:if(w_(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break _}}e=e.return}while(e!==null);throw Error(C(171))}if(_.tag===1){var t=_.type;if(w_(t))return Ya(_,t,e)}return e}function zu(_,e,t,n,$,r,l,o,i){return _=uo(t,n,!0,_,$,r,l,o,i),_.context=Yu(null),t=_.current,n=C_(),$=Me(t),r=ce(n,$),r.callback=e??null,Oe(t,r,$),_.current.lanes=$,Sn(_,$,n),M_(_,n),_}function K$(_,e,t,n){var $=e.current,r=C_(),l=Me($);return t=Yu(t),e.context===null?e.context=t:e.pendingContext=t,e=ce(r,l),e.payload={element:_},n=n===void 0?null:n,n!==null&&(e.callback=n),_=Oe($,e,l),_!==null&&(ee(_,$,l,r),t$(_,$,l)),l}function O$(_){if(_=_.current,!_.child)return null;switch(_.child.tag){case 5:return _.child.stateNode;default:return _.child.stateNode}}function gi(_,e){if(_=_.memoizedState,_!==null&&_.dehydrated!==null){var t=_.retryLane;_.retryLane=t!==0&&t<e?t:e}}function so(_,e){gi(_,e),(_=_.alternate)&&gi(_,e)}function OT(){return null}var Ku=typeof reportError=="function"?reportError:function(_){console.error(_)};function co(_){this._internalRoot=_}X$.prototype.render=co.prototype.render=function(_){var e=this._internalRoot;if(e===null)throw Error(C(409));K$(_,e,null,null)};X$.prototype.unmount=co.prototype.unmount=function(){var _=this._internalRoot;if(_!==null){this._internalRoot=null;var e=_.containerInfo;_t(function(){K$(null,_,null,null)}),e[fe]=null}};function X$(_){this._internalRoot=_}X$.prototype.unstable_scheduleHydration=function(_){if(_){var e=ga();_={blockedOn:null,target:_,priority:e};for(var t=0;t<Re.length&&e!==0&&e<Re[t].priority;t++);Re.splice(t,0,_),t===0&&Ca(_)}};function To(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)}function Q$(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11&&(_.nodeType!==8||_.nodeValue!==" react-mount-point-unstable "))}function vi(){}function wT(_,e,t,n,$){if($){if(typeof n=="function"){var r=n;n=function(){var a=O$(l);r.call(a)}}var l=zu(e,n,_,0,null,!1,!1,"",vi);return _._reactRootContainer=l,_[fe]=l.current,dn(_.nodeType===8?_.parentNode:_),_t(),l}for(;$=_.lastChild;)_.removeChild($);if(typeof n=="function"){var o=n;n=function(){var a=O$(i);o.call(a)}}var i=uo(_,0,!1,null,null,!1,!1,"",vi);return _._reactRootContainer=i,_[fe]=i.current,dn(_.nodeType===8?_.parentNode:_),_t(function(){K$(e,i,t,n)}),i}function J$(_,e,t,n,$){var r=t._reactRootContainer;if(r){var l=r;if(typeof $=="function"){var o=$;$=function(){var i=O$(l);o.call(i)}}K$(e,l,_,$)}else l=wT(t,e,_,$,n);return O$(l)}ma=function(_){switch(_.tag){case 3:var e=_.stateNode;if(e.current.memoizedState.isDehydrated){var t=Xt(e.pendingLanes);t!==0&&(Ol(e,t|1),M_(e,a_()),!(Y&6)&&(Pt=a_()+500,Ge()))}break;case 13:_t(function(){var n=de(_,1);if(n!==null){var $=C_();ee(n,_,1,$)}}),so(_,1)}};wl=function(_){if(_.tag===13){var e=de(_,134217728);if(e!==null){var t=C_();ee(e,_,134217728,t)}so(_,134217728)}};Ra=function(_){if(_.tag===13){var e=Me(_),t=de(_,e);if(t!==null){var n=C_();ee(t,_,e,n)}so(_,e)}};ga=function(){return z};va=function(_,e){var t=z;try{return z=_,e()}finally{z=t}};Ur=function(_,e,t){switch(e){case"input":if(Pr(_,t),e=t.name,t.type==="radio"&&e!=null){for(t=_;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var n=t[e];if(n!==_&&n.form===_.form){var $=F$(n);if(!$)throw Error(C(90));ta(n),Pr(n,$)}}}break;case"textarea":$a(_,t);break;case"select":e=t.value,e!=null&&At(_,!!t.multiple,e,!1)}};sa=lo;ca=_t;var MT={usingClientEntryPoint:!1,Events:[yn,ct,F$,aa,ua,lo]},Yt={findFiberByHostInstance:Ye,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HT={bundleType:Yt.bundleType,version:Yt.version,rendererPackageName:Yt.rendererPackageName,rendererConfig:Yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(_){return _=da(_),_===null?null:_.stateNode},findFiberByHostInstance:Yt.findFiberByHostInstance||OT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jn.isDisabled&&Jn.supportsFiber)try{k$=Jn.inject(HT),le=Jn}catch{}}G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MT;G_.createPortal=function(_,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(e))throw Error(C(200));return PT(_,e,null,t)};G_.createRoot=function(_,e){if(!To(_))throw Error(C(299));var t=!1,n="",$=Ku;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&($=e.onRecoverableError)),e=uo(_,1,!1,null,null,t,!1,n,$),_[fe]=e.current,dn(_.nodeType===8?_.parentNode:_),new co(e)};G_.findDOMNode=function(_){if(_==null)return null;if(_.nodeType===1)return _;var e=_._reactInternals;if(e===void 0)throw typeof _.render=="function"?Error(C(188)):(_=Object.keys(_).join(","),Error(C(268,_)));return _=da(e),_=_===null?null:_.stateNode,_};G_.flushSync=function(_){return _t(_)};G_.hydrate=function(_,e,t){if(!Q$(e))throw Error(C(200));return J$(null,_,e,!0,t)};G_.hydrateRoot=function(_,e,t){if(!To(_))throw Error(C(405));var n=t!=null&&t.hydratedSources||null,$=!1,r="",l=Ku;if(t!=null&&(t.unstable_strictMode===!0&&($=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),e=zu(e,null,_,1,t??null,$,!1,r,l),_[fe]=e.current,dn(_),n)for(_=0;_<n.length;_++)t=n[_],$=t._getVersion,$=$(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,$]:e.mutableSourceEagerHydrationData.push(t,$);return new X$(e)};G_.render=function(_,e,t){if(!Q$(e))throw Error(C(200));return J$(null,_,e,!1,t)};G_.unmountComponentAtNode=function(_){if(!Q$(_))throw Error(C(40));return _._reactRootContainer?(_t(function(){J$(null,null,_,!1,function(){_._reactRootContainer=null,_[fe]=null})}),!0):!1};G_.unstable_batchedUpdates=lo;G_.unstable_renderSubtreeIntoContainer=function(_,e,t,n){if(!Q$(t))throw Error(C(200));if(_==null||_._reactInternals===void 0)throw Error(C(38));return J$(_,e,t,!1,n)};G_.version="18.3.1-next-f1338f8080-20240426";function Xu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xu)}catch(_){console.error(_)}}Xu(),Xi.exports=G_;var kT=Xi.exports,Qu,Ci=kT;Qu=Ci.createRoot,Ci.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(_[n]=t[n])}return _},gn.apply(this,arguments)}var Se;(function(_){_.Pop="POP",_.Push="PUSH",_.Replace="REPLACE"})(Se||(Se={}));const Si="popstate";function WT(_){_===void 0&&(_={});function e(n,$){let{pathname:r,search:l,hash:o}=n.location;return El("",{pathname:r,search:l,hash:o},$.state&&$.state.usr||null,$.state&&$.state.key||"default")}function t(n,$){return typeof $=="string"?$:w$($)}return DT(e,t,null,_)}function s_(_,e){if(_===!1||_===null||typeof _>"u")throw new Error(e)}function Ju(_,e){if(!_){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UT(){return Math.random().toString(36).substr(2,8)}function Ni(_,e){return{usr:_.state,key:_.key,idx:e}}function El(_,e,t,n){return t===void 0&&(t=null),gn({pathname:typeof _=="string"?_:_.pathname,search:"",hash:""},typeof e=="string"?Ht(e):e,{state:t,key:e&&e.key||n||UT()})}function w$(_){let{pathname:e="/",search:t="",hash:n=""}=_;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ht(_){let e={};if(_){let t=_.indexOf("#");t>=0&&(e.hash=_.substr(t),_=_.substr(0,t));let n=_.indexOf("?");n>=0&&(e.search=_.substr(n),_=_.substr(0,n)),_&&(e.pathname=_)}return e}function DT(_,e,t,n){n===void 0&&(n={});let{window:$=document.defaultView,v5Compat:r=!1}=n,l=$.history,o=Se.Pop,i=null,a=L();a==null&&(a=0,l.replaceState(gn({},l.state,{idx:a}),""));function L(){return(l.state||{idx:null}).idx}function f(){o=Se.Pop;let P=L(),c=P==null?null:P-a;a=P,i&&i({action:o,location:R.location,delta:c})}function d(P,c){o=Se.Push;let s=El(R.location,P,c);a=L()+1;let T=Ni(s,a),p=R.createHref(s);try{l.pushState(T,"",p)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;$.location.assign(p)}r&&i&&i({action:o,location:R.location,delta:1})}function g(P,c){o=Se.Replace;let s=El(R.location,P,c);a=L();let T=Ni(s,a),p=R.createHref(s);l.replaceState(T,"",p),r&&i&&i({action:o,location:R.location,delta:0})}function v(P){let c=$.location.origin!=="null"?$.location.origin:$.location.href,s=typeof P=="string"?P:w$(P);return s=s.replace(/ $/,"%20"),s_(c,"No window.location.(origin|href) available to create URL for href: "+s),new URL(s,c)}let R={get action(){return o},get location(){return _($,l)},listen(P){if(i)throw new Error("A history only accepts one active listener");return $.addEventListener(Si,f),i=P,()=>{$.removeEventListener(Si,f),i=null}},createHref(P){return e($,P)},createURL:v,encodeLocation(P){let c=v(P);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:d,replace:g,go(P){return l.go(P)}};return R}var yi;(function(_){_.data="data",_.deferred="deferred",_.redirect="redirect",_.error="error"})(yi||(yi={}));function FT(_,e,t){return t===void 0&&(t="/"),GT(_,e,t,!1)}function GT(_,e,t,n){let $=typeof e=="string"?Ht(e):e,r=fo($.pathname||"/",t);if(r==null)return null;let l=bu(_);jT(l);let o=null;for(let i=0;o==null&&i<l.length;++i){let a=qT(r);o=bT(l[i],a,n)}return o}function bu(_,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let $=(r,l,o)=>{let i={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:l,route:r};i.relativePath.startsWith("/")&&(s_(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(n.length));let a=ke([n,i.relativePath]),L=t.concat(i);r.children&&r.children.length>0&&(s_(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),bu(r.children,e,L,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:QT(a,r.index),routesMeta:L})};return _.forEach((r,l)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))$(r,l);else for(let i of Zu(r.path))$(r,l,i)}),e}function Zu(_){let e=_.split("/");if(e.length===0)return[];let[t,...n]=e,$=t.endsWith("?"),r=t.replace(/\?$/,"");if(n.length===0)return $?[r,""]:[r];let l=Zu(n.join("/")),o=[];return o.push(...l.map(i=>i===""?r:[r,i].join("/"))),$&&o.push(...l),o.map(i=>_.startsWith("/")&&i===""?"/":i)}function jT(_){_.sort((e,t)=>e.score!==t.score?t.score-e.score:JT(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const VT=/^:[\w-]+$/,BT=3,YT=2,zT=1,KT=10,XT=-2,xi=_=>_==="*";function QT(_,e){let t=_.split("/"),n=t.length;return t.some(xi)&&(n+=XT),e&&(n+=YT),t.filter($=>!xi($)).reduce(($,r)=>$+(VT.test(r)?BT:r===""?zT:KT),n)}function JT(_,e){return _.length===e.length&&_.slice(0,-1).every((n,$)=>n===e[$])?_[_.length-1]-e[e.length-1]:0}function bT(_,e,t){let{routesMeta:n}=_,$={},r="/",l=[];for(let o=0;o<n.length;++o){let i=n[o],a=o===n.length-1,L=r==="/"?e:e.slice(r.length)||"/",f=Pi({path:i.relativePath,caseSensitive:i.caseSensitive,end:a},L),d=i.route;if(!f&&a&&t&&!n[n.length-1].route.index&&(f=Pi({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},L)),!f)return null;Object.assign($,f.params),l.push({params:$,pathname:ke([r,f.pathname]),pathnameBase:nf(ke([r,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(r=ke([r,f.pathnameBase]))}return l}function Pi(_,e){typeof _=="string"&&(_={path:_,caseSensitive:!1,end:!0});let[t,n]=ZT(_.path,_.caseSensitive,_.end),$=e.match(t);if(!$)return null;let r=$[0],l=r.replace(/(.)\/+$/,"$1"),o=$.slice(1);return{params:n.reduce((a,L,f)=>{let{paramName:d,isOptional:g}=L;if(d==="*"){let R=o[f]||"";l=r.slice(0,r.length-R.length).replace(/(.)\/+$/,"$1")}const v=o[f];return g&&!v?a[d]=void 0:a[d]=(v||"").replace(/%2F/g,"/"),a},{}),pathname:r,pathnameBase:l,pattern:_}}function ZT(_,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ju(_==="*"||!_.endsWith("*")||_.endsWith("/*"),'Route path "'+_+'" will be treated as if it were '+('"'+_.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+_.replace(/\*$/,"/*")+'".'));let n=[],$="^"+_.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,i)=>(n.push({paramName:o,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return _.endsWith("*")?(n.push({paramName:"*"}),$+=_==="*"||_==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?$+="\\/*$":_!==""&&_!=="/"&&($+="(?:(?=\\/|$))"),[new RegExp($,e?void 0:"i"),n]}function qT(_){try{return _.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ju(!1,'The URL path "'+_+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),_}}function fo(_,e){if(e==="/")return _;if(!_.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=_.charAt(t);return n&&n!=="/"?null:_.slice(t)||"/"}function _f(_,e){e===void 0&&(e="/");let{pathname:t,search:n="",hash:$=""}=typeof _=="string"?Ht(_):_;return{pathname:t?t.startsWith("/")?t:ef(t,e):e,search:$f(n),hash:rf($)}}function ef(_,e){let t=e.replace(/\/+$/,"").split("/");return _.split("/").forEach($=>{$===".."?t.length>1&&t.pop():$!=="."&&t.push($)}),t.length>1?t.join("/"):"/"}function gr(_,e,t,n){return"Cannot include a '"+_+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tf(_){return _.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function qu(_,e){let t=tf(_);return e?t.map((n,$)=>$===t.length-1?n.pathname:n.pathnameBase):t.map(n=>n.pathnameBase)}function _s(_,e,t,n){n===void 0&&(n=!1);let $;typeof _=="string"?$=Ht(_):($=gn({},_),s_(!$.pathname||!$.pathname.includes("?"),gr("?","pathname","search",$)),s_(!$.pathname||!$.pathname.includes("#"),gr("#","pathname","hash",$)),s_(!$.search||!$.search.includes("#"),gr("#","search","hash",$)));let r=_===""||$.pathname==="",l=r?"/":$.pathname,o;if(l==null)o=t;else{let f=e.length-1;if(!n&&l.startsWith("..")){let d=l.split("/");for(;d[0]==="..";)d.shift(),f-=1;$.pathname=d.join("/")}o=f>=0?e[f]:"/"}let i=_f($,o),a=l&&l!=="/"&&l.endsWith("/"),L=(r||l===".")&&t.endsWith("/");return!i.pathname.endsWith("/")&&(a||L)&&(i.pathname+="/"),i}const ke=_=>_.join("/").replace(/\/\/+/g,"/"),nf=_=>_.replace(/\/+$/,"").replace(/^\/*/,"/"),$f=_=>!_||_==="?"?"":_.startsWith("?")?_:"?"+_,rf=_=>!_||_==="#"?"":_.startsWith("#")?_:"#"+_;function lf(_){return _!=null&&typeof _.status=="number"&&typeof _.statusText=="string"&&typeof _.internal=="boolean"&&"data"in _}const es=["post","put","patch","delete"];new Set(es);const of=["get",...es];new Set(of);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vn(){return vn=Object.assign?Object.assign.bind():function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(_[n]=t[n])}return _},vn.apply(this,arguments)}const Lo=x.createContext(null),af=x.createContext(null),nt=x.createContext(null),b$=x.createContext(null),je=x.createContext({outlet:null,matches:[],isDataRoute:!1}),ts=x.createContext(null);function uf(_,e){let{relative:t}=e===void 0?{}:e;Pn()||s_(!1);let{basename:n,navigator:$}=x.useContext(nt),{hash:r,pathname:l,search:o}=$s(_,{relative:t}),i=l;return n!=="/"&&(i=l==="/"?n:ke([n,l])),$.createHref({pathname:i,search:o,hash:r})}function Pn(){return x.useContext(b$)!=null}function On(){return Pn()||s_(!1),x.useContext(b$).location}function ns(_){x.useContext(nt).static||x.useLayoutEffect(_)}function sf(){let{isDataRoute:_}=x.useContext(je);return _?Cf():cf()}function cf(){Pn()||s_(!1);let _=x.useContext(Lo),{basename:e,future:t,navigator:n}=x.useContext(nt),{matches:$}=x.useContext(je),{pathname:r}=On(),l=JSON.stringify(qu($,t.v7_relativeSplatPath)),o=x.useRef(!1);return ns(()=>{o.current=!0}),x.useCallback(function(a,L){if(L===void 0&&(L={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let f=_s(a,JSON.parse(l),r,L.relative==="path");_==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ke([e,f.pathname])),(L.replace?n.replace:n.push)(f,L.state,L)},[e,n,l,r,_])}const Tf=x.createContext(null);function ff(_){let e=x.useContext(je).outlet;return e&&x.createElement(Tf.Provider,{value:_},e)}function $s(_,e){let{relative:t}=e===void 0?{}:e,{future:n}=x.useContext(nt),{matches:$}=x.useContext(je),{pathname:r}=On(),l=JSON.stringify(qu($,n.v7_relativeSplatPath));return x.useMemo(()=>_s(_,JSON.parse(l),r,t==="path"),[_,l,r,t])}function df(_,e){return Lf(_,e)}function Lf(_,e,t,n){Pn()||s_(!1);let{navigator:$}=x.useContext(nt),{matches:r}=x.useContext(je),l=r[r.length-1],o=l?l.params:{};l&&l.pathname;let i=l?l.pathnameBase:"/";l&&l.route;let a=On(),L;if(e){var f;let P=typeof e=="string"?Ht(e):e;i==="/"||(f=P.pathname)!=null&&f.startsWith(i)||s_(!1),L=P}else L=a;let d=L.pathname||"/",g=d;if(i!=="/"){let P=i.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=FT(_,{pathname:g}),R=pf(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},o,P.params),pathname:ke([i,$.encodeLocation?$.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?i:ke([i,$.encodeLocation?$.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),r,t,n);return e&&R?x.createElement(b$.Provider,{value:{location:vn({pathname:"/",search:"",hash:"",state:null,key:"default"},L),navigationType:Se.Pop}},R):R}function Ef(){let _=vf(),e=lf(_)?_.status+" "+_.statusText:_ instanceof Error?_.message:JSON.stringify(_),t=_ instanceof Error?_.stack:null,$={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),t?x.createElement("pre",{style:$},t):null,null)}const If=x.createElement(Ef,null);class Af extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?x.createElement(je.Provider,{value:this.props.routeContext},x.createElement(ts.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hf(_){let{routeContext:e,match:t,children:n}=_,$=x.useContext(Lo);return $&&$.static&&$.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&($.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(je.Provider,{value:e},n)}function pf(_,e,t,n){var $;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),_==null){var r;if(!t)return null;if(t.errors)_=t.matches;else if((r=n)!=null&&r.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)_=t.matches;else return null}let l=_,o=($=t)==null?void 0:$.errors;if(o!=null){let L=l.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);L>=0||s_(!1),l=l.slice(0,Math.min(l.length,L+1))}let i=!1,a=-1;if(t&&n&&n.v7_partialHydration)for(let L=0;L<l.length;L++){let f=l[L];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(a=L),f.route.id){let{loaderData:d,errors:g}=t,v=f.route.loader&&d[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){i=!0,a>=0?l=l.slice(0,a+1):l=[l[0]];break}}}return l.reduceRight((L,f,d)=>{let g,v=!1,R=null,P=null;t&&(g=o&&f.route.id?o[f.route.id]:void 0,R=f.route.errorElement||If,i&&(a<0&&d===0?(v=!0,P=null):a===d&&(v=!0,P=f.route.hydrateFallbackElement||null)));let c=e.concat(l.slice(0,d+1)),s=()=>{let T;return g?T=R:v?T=P:f.route.Component?T=x.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=L,x.createElement(hf,{match:f,routeContext:{outlet:L,matches:c,isDataRoute:t!=null},children:T})};return t&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?x.createElement(Af,{location:t.location,revalidation:t.revalidation,component:R,error:g,children:s(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):s()},null)}var rs=function(_){return _.UseBlocker="useBlocker",_.UseRevalidator="useRevalidator",_.UseNavigateStable="useNavigate",_}(rs||{}),M$=function(_){return _.UseBlocker="useBlocker",_.UseLoaderData="useLoaderData",_.UseActionData="useActionData",_.UseRouteError="useRouteError",_.UseNavigation="useNavigation",_.UseRouteLoaderData="useRouteLoaderData",_.UseMatches="useMatches",_.UseRevalidator="useRevalidator",_.UseNavigateStable="useNavigate",_.UseRouteId="useRouteId",_}(M$||{});function mf(_){let e=x.useContext(Lo);return e||s_(!1),e}function Rf(_){let e=x.useContext(af);return e||s_(!1),e}function gf(_){let e=x.useContext(je);return e||s_(!1),e}function ls(_){let e=gf(),t=e.matches[e.matches.length-1];return t.route.id||s_(!1),t.route.id}function vf(){var _;let e=x.useContext(ts),t=Rf(M$.UseRouteError),n=ls(M$.UseRouteError);return e!==void 0?e:(_=t.errors)==null?void 0:_[n]}function Cf(){let{router:_}=mf(rs.UseNavigateStable),e=ls(M$.UseNavigateStable),t=x.useRef(!1);return ns(()=>{t.current=!0}),x.useCallback(function($,r){r===void 0&&(r={}),t.current&&(typeof $=="number"?_.navigate($):_.navigate($,vn({fromRouteId:e},r)))},[_,e])}function Sf(_){return ff(_.context)}function lt(_){s_(!1)}function Nf(_){let{basename:e="/",children:t=null,location:n,navigationType:$=Se.Pop,navigator:r,static:l=!1,future:o}=_;Pn()&&s_(!1);let i=e.replace(/^\/*/,"/"),a=x.useMemo(()=>({basename:i,navigator:r,static:l,future:vn({v7_relativeSplatPath:!1},o)}),[i,o,r,l]);typeof n=="string"&&(n=Ht(n));let{pathname:L="/",search:f="",hash:d="",state:g=null,key:v="default"}=n,R=x.useMemo(()=>{let P=fo(L,i);return P==null?null:{location:{pathname:P,search:f,hash:d,state:g,key:v},navigationType:$}},[i,L,f,d,g,v,$]);return R==null?null:x.createElement(nt.Provider,{value:a},x.createElement(b$.Provider,{children:t,value:R}))}function yf(_){let{children:e,location:t}=_;return df(Il(e),t)}new Promise(()=>{});function Il(_,e){e===void 0&&(e=[]);let t=[];return x.Children.forEach(_,(n,$)=>{if(!x.isValidElement(n))return;let r=[...e,$];if(n.type===x.Fragment){t.push.apply(t,Il(n.props.children,r));return}n.type!==lt&&s_(!1),!n.props.index||!n.props.children||s_(!1);let l={id:n.props.id||r.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Il(n.props.children,r)),t.push(l)}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(_[n]=t[n])}return _},Al.apply(this,arguments)}function xf(_,e){if(_==null)return{};var t={},n=Object.keys(_),$,r;for(r=0;r<n.length;r++)$=n[r],!(e.indexOf($)>=0)&&(t[$]=_[$]);return t}function Pf(_){return!!(_.metaKey||_.altKey||_.ctrlKey||_.shiftKey)}function Of(_,e){return _.button===0&&(!e||e==="_self")&&!Pf(_)}const wf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Mf="6";try{window.__reactRouterVersion=Mf}catch{}const Hf="startTransition",Oi=vs[Hf];function kf(_){let{basename:e,children:t,future:n,window:$}=_,r=x.useRef();r.current==null&&(r.current=WT({window:$,v5Compat:!0}));let l=r.current,[o,i]=x.useState({action:l.action,location:l.location}),{v7_startTransition:a}=n||{},L=x.useCallback(f=>{a&&Oi?Oi(()=>i(f)):i(f)},[i,a]);return x.useLayoutEffect(()=>l.listen(L),[l,L]),x.createElement(Nf,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:l,future:n})}const Wf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jt=x.forwardRef(function(e,t){let{onClick:n,relative:$,reloadDocument:r,replace:l,state:o,target:i,to:a,preventScrollReset:L,unstable_viewTransition:f}=e,d=xf(e,wf),{basename:g}=x.useContext(nt),v,R=!1;if(typeof a=="string"&&Uf.test(a)&&(v=a,Wf))try{let T=new URL(window.location.href),p=a.startsWith("//")?new URL(T.protocol+a):new URL(a),O=fo(p.pathname,g);p.origin===T.origin&&O!=null?a=O+p.search+p.hash:R=!0}catch{}let P=uf(a,{relative:$}),c=Df(a,{replace:l,state:o,target:i,preventScrollReset:L,relative:$,unstable_viewTransition:f});function s(T){n&&n(T),T.defaultPrevented||c(T)}return x.createElement("a",Al({},d,{href:v||P,onClick:R||r?n:s,ref:t,target:i}))});var wi;(function(_){_.UseScrollRestoration="useScrollRestoration",_.UseSubmit="useSubmit",_.UseSubmitFetcher="useSubmitFetcher",_.UseFetcher="useFetcher",_.useViewTransitionState="useViewTransitionState"})(wi||(wi={}));var Mi;(function(_){_.UseFetcher="useFetcher",_.UseFetchers="useFetchers",_.UseScrollRestoration="useScrollRestoration"})(Mi||(Mi={}));function Df(_,e){let{target:t,replace:n,state:$,preventScrollReset:r,relative:l,unstable_viewTransition:o}=e===void 0?{}:e,i=sf(),a=On(),L=$s(_,{relative:l});return x.useCallback(f=>{if(Of(f,t)){f.preventDefault();let d=n!==void 0?n:w$(a)===w$(L);i(_,{replace:d,state:$,preventScrollReset:r,relative:l,unstable_viewTransition:o})}},[a,i,L,n,$,t,_,r,l,o])}const Ff="/Text2ArtJS/",y_={BaseName:Ff,Root:"/",FromText:"/from-text",FromImage:"/from-image",Error404:"*"},Gf=()=>N.jsxs("div",{children:[N.jsx("h1",{children:"Error404"}),N.jsx("h4",{children:"Página no encontrada"}),N.jsx(Jt,{to:y_.Root,children:"Volver"})]});var os={exports:{}};(function(_){const e=(()=>{const l={},o={font:"Standard",fontPath:"./fonts"};function i(I,A){let u={},E,h,m,w,y=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(E=A!==null?A:I,h=0,m=y.length;h<m;)w=y[h],E>=w[0]?(E=E-w[0],u[w[1]]=typeof u[w[1]]>"u"?w[2]:u[w[1]]):w[1]!=="vLayout"&&w[1]!=="hLayout"&&(u[w[1]]=!1),h++;return typeof u.hLayout>"u"?I===0?u.hLayout=1:I===-1?u.hLayout=0:u.hRule1||u.hRule2||u.hRule3||u.hRule4||u.hRule5||u.hRule6?u.hLayout=3:u.hLayout=2:u.hLayout===2&&(u.hRule1||u.hRule2||u.hRule3||u.hRule4||u.hRule5||u.hRule6)&&(u.hLayout=3),typeof u.vLayout>"u"?u.vRule1||u.vRule2||u.vRule3||u.vRule4||u.vRule5?u.vLayout=3:u.vLayout=0:u.vLayout===2&&(u.vRule1||u.vRule2||u.vRule3||u.vRule4||u.vRule5)&&(u.vLayout=3),u}function a(I,A,u){return I===A&&I!==u?I:!1}function L(I,A){let u="|/\\[]{}()<>";if(I==="_"){if(u.indexOf(A)!==-1)return A}else if(A==="_"&&u.indexOf(I)!==-1)return I;return!1}function f(I,A){let u="| /\\ [] {} () <>",E=u.indexOf(I),h=u.indexOf(A);if(E!==-1&&h!==-1&&E!==h&&Math.abs(E-h)!==1){const m=Math.max(E,h),w=m+1;return u.substring(m,w)}return!1}function d(I,A){let u="[] {} ()",E=u.indexOf(I),h=u.indexOf(A);return E!==-1&&h!==-1&&Math.abs(E-h)<=1?"|":!1}function g(I,A){let u="/\\ \\/ ><",E={0:"|",3:"Y",6:"X"},h=u.indexOf(I),m=u.indexOf(A);return h!==-1&&m!==-1&&m-h===1?E[h]:!1}function v(I,A,u){return I===u&&A===u?u:!1}function R(I,A){return I===A?I:!1}function P(I,A){let u="|/\\[]{}()<>";if(I==="_"){if(u.indexOf(A)!==-1)return A}else if(A==="_"&&u.indexOf(I)!==-1)return I;return!1}function c(I,A){let u="| /\\ [] {} () <>",E=u.indexOf(I),h=u.indexOf(A);if(E!==-1&&h!==-1&&E!==h&&Math.abs(E-h)!==1){const m=Math.max(E,h),w=m+1;return u.substring(m,w)}return!1}function s(I,A){return I==="-"&&A==="_"||I==="_"&&A==="-"?"=":!1}function T(I,A){return I==="|"&&A==="|"?"|":!1}function p(I,A,u){return A===" "||A===""||A===u&&I!==" "?I:A}function O(I,A,u){if(u.fittingRules.vLayout===0)return"invalid";let E,h=Math.min(I.length,A.length),m,w,y=!1,S;if(h===0)return"invalid";for(E=0;E<h;E++)if(m=I.substring(E,E+1),w=A.substring(E,E+1),m!==" "&&w!==" "){if(u.fittingRules.vLayout===1)return"invalid";if(u.fittingRules.vLayout===2)return"end";if(T(m,w)){y=y||!1;continue}if(S=!1,S=u.fittingRules.vRule1?R(m,w):S,S=!S&&u.fittingRules.vRule2?P(m,w):S,S=!S&&u.fittingRules.vRule3?c(m,w):S,S=!S&&u.fittingRules.vRule4?s(m,w):S,y=!0,!S)return"invalid"}return y?"end":"valid"}function k(I,A,u){let E=I.length,h=I.length;A.length;let m,w,y,S=1,D,Z,X;for(;S<=E;){for(m=I.slice(Math.max(0,h-S),h),w=A.slice(0,Math.min(E,S)),y=w.length,X="",D=0;D<y;D++)if(Z=O(m[D],w[D],u),Z==="end")X=Z;else if(Z==="invalid"){X=Z;break}else X===""&&(X="valid");if(X==="invalid"){S--;break}if(X==="end")break;X==="valid"&&S++}return Math.min(E,S)}function W(I,A,u){let E,h=Math.min(I.length,A.length),m,w,y="",S;for(E=0;E<h;E++)m=I.substring(E,E+1),w=A.substring(E,E+1),m!==" "&&w!==" "?u.fittingRules.vLayout===1||u.fittingRules.vLayout===2?y+=p(m,w):(S=!1,S=u.fittingRules.vRule5?T(m,w):S,S=!S&&u.fittingRules.vRule1?R(m,w):S,S=!S&&u.fittingRules.vRule2?P(m,w):S,S=!S&&u.fittingRules.vRule3?c(m,w):S,S=!S&&u.fittingRules.vRule4?s(m,w):S,y+=S):y+=p(m,w);return y}function U(I,A,u,E){let h=I.length,m=A.length,w=I.slice(0,Math.max(0,h-u)),y=I.slice(Math.max(0,h-u),h),S=A.slice(0,Math.min(u,m)),D,Z,X,K=[],J,k_=[];for(Z=y.length,D=0;D<Z;D++)D>=m?X=y[D]:X=W(y[D],S[D],E),K.push(X);return J=A.slice(Math.min(u,m),m),k_.concat(w,K,J)}function Q(I,A){let u,E=I.length,h="";for(u=0;u<A;u++)h+=" ";for(u=0;u<E;u++)I[u]+=h}function j(I,A,u){let E=I[0].length,h=A[0].length,m;return E>h?Q(A,E-h):h>E&&Q(I,h-E),m=k(I,A,u),U(I,A,m,u)}function g_(I,A,u){if(u.fittingRules.hLayout===0)return 0;let E,h=I.length,m=A.length,w=h,y=1,S=!1,D=!1,Z,X,K,J;if(h===0)return 0;_:for(;y<=w;){const k_=h-y;for(Z=I.substring(k_,k_+y),X=A.substring(0,Math.min(y,m)),E=0;E<Math.min(y,m);E++)if(K=Z.substring(E,E+1),J=X.substring(E,E+1),K!==" "&&J!==" "){if(u.fittingRules.hLayout===1){y=y-1;break _}else if(u.fittingRules.hLayout===2){(K===u.hardBlank||J===u.hardBlank)&&(y=y-1);break _}else if(S=!0,D=!1,D=u.fittingRules.hRule1?a(K,J,u.hardBlank):D,D=!D&&u.fittingRules.hRule2?L(K,J,u.hardBlank):D,D=!D&&u.fittingRules.hRule3?f(K,J,u.hardBlank):D,D=!D&&u.fittingRules.hRule4?d(K,J,u.hardBlank):D,D=!D&&u.fittingRules.hRule5?g(K,J,u.hardBlank):D,D=!D&&u.fittingRules.hRule6?v(K,J,u.hardBlank):D,!D){y=y-1;break _}}if(S)break;y++}return Math.min(w,y)}function Q_(I,A,u,E){let h,m,w=[],y,S,D,Z,X,K,J,k_;for(h=0;h<E.height;h++){J=I[h],k_=A[h],X=J.length,K=k_.length,y=X-u,S=J.substr(0,Math.max(0,y)),D="";const Eo=Math.max(0,X-u);var $t=J.substring(Eo,Eo+u),wn=k_.substring(0,Math.min(u,K));for(m=0;m<u;m++){var i_=m<X?$t.substring(m,m+1):" ",L_=m<K?wn.substring(m,m+1):" ";if(i_!==" "&&L_!==" ")if(E.fittingRules.hLayout===1)D+=p(i_,L_,E.hardBlank);else if(E.fittingRules.hLayout===2)D+=p(i_,L_,E.hardBlank);else{var q="";q=!q&&E.fittingRules.hRule1?a(i_,L_,E.hardBlank):q,q=!q&&E.fittingRules.hRule2?L(i_,L_,E.hardBlank):q,q=!q&&E.fittingRules.hRule3?f(i_,L_,E.hardBlank):q,q=!q&&E.fittingRules.hRule4?d(i_,L_,E.hardBlank):q,q=!q&&E.fittingRules.hRule5?g(i_,L_,E.hardBlank):q,q=!q&&E.fittingRules.hRule6?v(i_,L_,E.hardBlank):q,q=q||p(i_,L_,E.hardBlank),D+=q}else D+=p(i_,L_,E.hardBlank)}u>=K?Z="":Z=k_.substring(u,u+Math.max(0,K-u)),w[h]=S+D+Z}return w}function H_(I){let A=[],u;for(u=0;u<I;u++)A[u]="";return A}const Ie=function(I){return Math.max.apply(Math,I.map(function(A,u){return A.length}))};function Ae(I,A,u){return I.reduce(function(E,h){return Q_(E,h.fig,h.overlap,u)},H_(A))}function kt(I,A,u){const E={};for(let h=I.length;--h;){let m=Ae(I.slice(0,h),A,u);if(Ie(m)<=u.width){E.outputFigText=m,h<I.length?E.chars=I.slice(h):E.chars=[];break}}return E}function Wt(I,A,u){let E,h,m=0,w,y,S,D=u.height,Z=[],X,K,J=[],k_,$t,wn,i_,L_;for(y=H_(D),u.width>0&&u.whitespaceBreak&&(K={chars:[],overlap:m}),u.printDirection===1&&(I=I.split("").reverse().join("")),S=I.length,E=0;E<S;E++)if(k_=I.substring(E,E+1),$t=k_.match(/\s/),h=A[k_.charCodeAt(0)],i_=null,h){if(u.fittingRules.hLayout!==0){for(m=1e4,w=0;w<u.height;w++)m=Math.min(m,g_(y[w],h[w],u));m=m===1e4?0:m}if(u.width>0&&(u.whitespaceBreak?(wn=Ae(K.chars.concat([{fig:h,overlap:m}]),D,u),i_=Ae(J.concat([{fig:wn,overlap:K.overlap}]),D,u),X=Ie(i_)):(i_=Q_(y,h,m,u),X=Ie(i_)),X>=u.width&&E>0&&(u.whitespaceBreak?(y=Ae(J.slice(0,-1),D,u),J.length>1&&(Z.push(y),y=H_(D)),J=[]):(Z.push(y),y=H_(D)))),u.width>0&&u.whitespaceBreak&&((!$t||E===S-1)&&K.chars.push({fig:h,overlap:m}),$t||E===S-1)){for(L_=null;i_=Ae(K.chars,D,u),X=Ie(i_),X>=u.width;)L_=kt(K.chars,D,u),K={chars:L_.chars},Z.push(L_.outputFigText);X>0&&(L_?J.push({fig:i_,overlap:1}):J.push({fig:i_,overlap:K.overlap})),$t&&(J.push({fig:h,overlap:m}),y=H_(D)),E===S-1&&(y=Ae(J,D,u)),K={chars:[],overlap:m};continue}y=Q_(y,h,m,u)}return Ie(y)>0&&Z.push(y),u.showHardBlanks!==!0&&Z.forEach(function(q){for(S=q.length,w=0;w<S;w++)q[w]=q[w].replace(new RegExp("\\"+u.hardBlank,"g")," ")}),Z}const M=function(I,A){let u=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],E={},h;if(I==="default")for(h=0;h<u.length;h++)E[u[h]]=A.fittingRules[u[h]];else if(I==="full")E={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(I==="fitted")E={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(I==="controlled smushing")E={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(I==="universal smushing")E={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return E},F=function(I,A){let u=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],E={},h;if(I==="default")for(h=0;h<u.length;h++)E[u[h]]=A.fittingRules[u[h]];else if(I==="full")E={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(I==="fitted")E={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(I==="controlled smushing")E={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(I==="universal smushing")E={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return E},G=function(I,A,u){u=u.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let E=u.split(`
`),h=[],m,w,y;for(w=E.length,m=0;m<w;m++)h=h.concat(Wt(E[m],l[I],A));for(w=h.length,y=h[0],m=1;m<w;m++)y=j(y,h[m],A);return y?y.join(`
`):""};function t_(I,A){let u=JSON.parse(JSON.stringify(I)),E,h;if(typeof A.horizontalLayout<"u"){E=M(A.horizontalLayout,I);for(h in E)E.hasOwnProperty(h)&&(u.fittingRules[h]=E[h])}if(typeof A.verticalLayout<"u"){E=F(A.verticalLayout,I);for(h in E)E.hasOwnProperty(h)&&(u.fittingRules[h]=E[h])}return u.printDirection=typeof A.printDirection<"u"?A.printDirection:I.printDirection,u.showHardBlanks=A.showHardBlanks||!1,u.width=A.width||-1,u.whitespaceBreak=A.whitespaceBreak||!1,u}const B=function(I,A,u){return B.text(I,A,u)};return B.text=async function(I,A,u){let E="";return I=I+"",typeof arguments[1]=="function"&&(u=A,A={},A.font=o.font),typeof A=="string"?(E=A,A={}):(A=A||{},E=A.font||o.font),await new Promise((h,m)=>{B.loadFont(E,function(w,y){if(w){m(w),u&&u(w);return}const S=G(E,t_(y,A),I);h(S),u&&u(null,S)})})},B.textSync=function(I,A){let u="";I=I+"",typeof A=="string"?(u=A,A={}):(A=A||{},u=A.font||o.font);var E=t_(B.loadFontSync(u),A);return G(u,E,I)},B.metadata=function(I,A){I=I+"",B.loadFont(I,function(u,E){if(u){A(u);return}A(null,E,l[I].comment)})},B.defaults=function(I){if(typeof I=="object"&&I!==null)for(var A in I)I.hasOwnProperty(A)&&(o[A]=I[A]);return JSON.parse(JSON.stringify(o))},B.parseFont=function(I,A){A=A.replace(/\r\n/g,`
`).replace(/\r/g,`
`),l[I]={};var u=A.split(`
`),E=u.splice(0,1)[0].split(" "),h=l[I],m={};if(m.hardBlank=E[0].substr(5,1),m.height=parseInt(E[1],10),m.baseline=parseInt(E[2],10),m.maxLength=parseInt(E[3],10),m.oldLayout=parseInt(E[4],10),m.numCommentLines=parseInt(E[5],10),m.printDirection=E.length>=6?parseInt(E[6],10):0,m.fullLayout=E.length>=7?parseInt(E[7],10):null,m.codeTagCount=E.length>=8?parseInt(E[8],10):null,m.fittingRules=i(m.oldLayout,m.fullLayout),h.options=m,m.hardBlank.length!==1||isNaN(m.height)||isNaN(m.baseline)||isNaN(m.maxLength)||isNaN(m.oldLayout)||isNaN(m.numCommentLines))throw new Error("FIGlet header contains invalid values.");let w=[],y;for(y=32;y<=126;y++)w.push(y);if(w=w.concat(196,214,220,228,246,252,223),u.length<m.numCommentLines+m.height*w.length)throw new Error("FIGlet file is missing data.");let S,D,Z=!1;for(h.comment=u.splice(0,m.numCommentLines).join(`
`),h.numChars=0;u.length>0&&h.numChars<w.length;){for(S=w[h.numChars],h[S]=u.splice(0,m.height),y=0;y<m.height;y++)typeof h[S][y]>"u"?h[S][y]="":(D=new RegExp("\\"+h[S][y].substr(h[S][y].length-1,1)+"+$"),h[S][y]=h[S][y].replace(D,""));h.numChars++}for(;u.length>0;){if(S=u.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(S))S=parseInt(S,16);else if(/^0[0-7]+$/.test(S))S=parseInt(S,8);else if(/^[0-9]+$/.test(S))S=parseInt(S,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(S))S=parseInt(S,16);else{if(S==="")break;console.log("Invalid data:"+S),Z=!0;break}for(h[S]=u.splice(0,m.height),y=0;y<m.height;y++)typeof h[S][y]>"u"?h[S][y]="":(D=new RegExp("\\"+h[S][y].substr(h[S][y].length-1,1)+"+$"),h[S][y]=h[S][y].replace(D,""));h.numChars++}if(Z===!0)throw new Error("Error parsing data.");return m},B.loadFont=function(I,A){if(l[I]){A(null,l[I].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(o.fontPath+"/"+I+".flf").then(function(u){if(u.ok)return u.text();throw console.log("Unexpected response",u),new Error("Network response was not ok.")}).then(function(u){A(null,B.parseFont(I,u))}).catch(A)},B.loadFontSync=function(I){if(l[I])return l[I].options;throw new Error("synchronous font loading is not implemented for the browser")},B.preloadFonts=function(I,A){let u=[];I.reduce(function(E,h){return E.then(function(){return fetch(o.fontPath+"/"+h+".flf").then(m=>m.text()).then(function(m){u.push(m)})})},Promise.resolve()).then(function(E){for(var h in I)I.hasOwnProperty(h)&&B.parseFont(I[h],u[h]);A&&A()})},B.figFonts=l,B})();_.exports=e})(os);var jf=os.exports;const Hi=ki(jf),Vf=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,Bf=`flf2a$ 9 8 15 0 20 0 16255 0
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
 \`-----'  ##`,Yf=`flf2a$ 10 10 27 63 7 0 191 0
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
@@`,zf=`flf2a$ 6 5 10 16 16
Avatar by Claude Martins 02/95

Figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
6    - height of a character
5    - height of a character, not including descenders
10    - max line length (excluding comment lines) + a fudge factor
16   - default smushmode for this font
16   - number of comment lines

$$@
$$@
$$@
$$@
$$@
$$@@
 _ @
/ \\@
| |@
\\_/@
(_)@
   @@
_  _@
\\||/@
    @
    @
    @
    @@
       @
_/|_|\\_@
\\  _  /@
/  _  \\@
 \\| |/ @
       @@
 /| @
/ _\\@
\\ \\ @
_\\ \\@
\\  /@
 |/ @@
_    @
\\|/\\ @
 / / @
/ /_ @
\\/ \\|@
     @@
 _   @
/.\\  @
\\ _\\_@
/|/ /@
\\__/\\@
     @@
 _@
|/@
  @
  @
  @
  @@
 ___@
/ _/@
|/  @
|\\_ @
\\__\\@
    @@
___ @
\\_ \\@
  \\|@
 _/|@
/__/@
    @@
      @
_/||\\_@
\\    /@
/    \\@
 \\||/ @
      @@
   _   @
 _| |_ @
|_   _|@
  |_|  @
       @
       @@
  @
  @
  @
  @
 _@
|/@@
      @
      @
_____ @
\\____\\@
      @
      @@
  @
  @
  @
__@
\\/@
  @@
    @
  /\\@
 / /@
/ / @
\\/  @
    @@
 ____ @
/  _ \\@
| / \\|@
| \\_/|@
\\____/@
      @@
 _ @
/ \\@
| |@
| |@
\\_/@
   @@
 ____ @
/_   \\@
 /   /@
/   /_@
\\____/@
      @@
_____ @
\\__  \\@
  /  |@
 _\\  |@
/____/@
      @@
    _ @
/\\ / |@
\\_\\| |@
   | |@
   \\_|@
      @@
 ____ @
/ ___\\@
|    \\@
\\___ |@
\\____/@
      @@
    _ @
 __/ \\@
/__  |@
|\\/  |@
\\____/@
      @@
 ____ @
/ _  \\@
\\/ | |@
   | |@
   \\_/@
      @@
 ____ @
/ ___\\@
\\ \\ //@
/ /_\\\\@
\\____/@
      @@
 ____ @
/__  \\@
|\\/  |@
\\__  |@
   \\_/@
      @@
  @
__@
\\/@
__@
\\/@
  @@
  @
  @
__@
\\/@
 _@
|/@@
  ___@
 / _/@
/ /  @
\\ \\_ @
 \\__\\@
     @@
      @
_____ @
\\____\\@
_____ @
\\____\\@
      @@
___  @
\\_ \\ @
  \\ \\@
 _/ /@
/__/ @
     @@
 ____ @
/ _  \\@
\\/ \\ |@
   / /@
   \\/ @
   \\/ @@
 ____ @
/  __\\@
| /_//@
| \\\\/_@
\\____/@
      @@
 ____ @
/  _ \\@
| / \\|@
| |-||@
\\_/ \\|@
      @@
 ____ @
/  __\\@
| | //@
| |_\\\\@
\\____/@
      @@
 ____ @
/   _\\@
|  /  @
|  \\__@
\\____/@
      @@
 ____ @
/  _ \\@
| | \\|@
| |_/|@
\\____/@
      @@
 _____@
/  __/@
|  \\  @
|  /_ @
\\____\\@
      @@
 _____@
/    /@
|  __\\@
| |   @
\\_/   @
      @@
 _____@
/  __/@
| |  _@
| |_//@
\\____\\@
      @@
 _    @
/ \\ /|@
| |_||@
| | ||@
\\_/ \\|@
      @@
 _ @
/ \\@
| |@
| |@
\\_/@
   @@
    _ @
   / |@
   | |@
/\\_| |@
\\____/@
      @@
 _  __@
/ |/ /@
|   / @
|   \\ @
\\_|\\_\\@
      @@
 _    @
/ \\   @
| |   @
| |_/\\@
\\____/@
      @@
 _     @
/ \\__/|@
| |\\/||@
| |  ||@
\\_/  \\|@
       @@
 _     @
/ \\  /|@
| |\\ ||@
| | \\||@
\\_/  \\|@
       @@
 ____ @
/  _ \\@
| / \\|@
| \\_/|@
\\____/@
      @@
 ____ @
/  __\\@
|  \\/|@
|  __/@
\\_/   @
      @@
 ____ @
/  _ \\@
| / \\|@
| \\_\\|@
\\____\\@
      @@
 ____ @
/  __\\@
|  \\/|@
|    /@
\\_/\\_\\@
      @@
 ____ @
/ ___\\@
|    \\@
\\___ |@
\\____/@
      @@
 _____ @
/__ __\\@
  / \\  @
  | |  @
  \\_/  @
       @@
 _    @
/ \\ /\\@
| | ||@
| \\_/|@
\\____/@
      @@
 _    @
/ \\ |\\@
| | //@
| \\// @
\\__/  @
      @@
 _     @
/ \\  /|@
| |  ||@
| |/\\||@
\\_/  \\|@
       @@
___  _@
\\  \\//@
 \\  / @
 /  \\ @
/__/\\\\@
      @@
___  _@
\\  \\//@
 \\  / @
 / /  @
/_/   @
      @@
 ____ @
/_   \\@
 /   /@
/   /_@
\\____/@
      @@
 ___@
/ _/@
||  @
||_ @
\\__\\@
    @@
    @
/\\  @
\\ \\ @
 \\ \\@
  \\/@
    @@
___ @
\\_ \\@
  ||@
 _||@
/__/@
    @@
/\\@
$$@
$$@
$$@
$$@
$$@@
      @
      @
      @
      @
_____ @
\\____\\@@
_ @
\\|@
  @
  @
  @
  @@
 ____ @
/  _ \\@
| / \\|@
| |-||@
\\_/ \\|@
      @@
 ____ @
/  _ \\@
| | //@
| |_\\\\@
\\____/@
      @@
 ____ @
/   _\\@
|  /  @
|  \\_ @
\\____/@
      @@
 ____ @
/  _ \\@
| | \\|@
| |_/|@
\\____/@
      @@
 _____@
/  __/@
|  \\  @
|  /_ @
\\____\\@
      @@
 _____@
/    /@
|  __\\@
| |   @
\\_/   @
      @@
 _____@
/  __/@
| |  _@
| |_//@
\\____\\@
      @@
 _    @
/ \\ /|@
| |_||@
| | ||@
\\_/ \\|@
      @@
 _ @
/ \\@
| |@
| |@
\\_/@
   @@
    _ @
   / |@
   | |@
/\\_| |@
\\____/@
      @@
 _  __@
/ |/ /@
|   / @
|   \\ @
\\_|\\_\\@
      @@
 _    @
/ \\   @
| |   @
| |_/\\@
\\____/@
      @@
 _     @
/ \\__/|@
| |\\/||@
| |  ||@
\\_/  \\|@
       @@
 _     @
/ \\  /|@
| |\\ ||@
| | \\||@
\\_/  \\|@
       @@
 ____ @
/  _ \\@
| / \\|@
| \\_/|@
\\____/@
      @@
 ____ @
/  __\\@
|  \\/|@
|  __/@
\\_/   @
      @@
 ____ @
/  _ \\@
| / \\|@
| \\_\\|@
\\____\\@
      @@
 ____ @
/  __\\@
|  \\/|@
|    /@
\\_/\\_\\@
      @@
 ____ @
/ ___\\@
|    \\@
\\___ |@
\\____/@
      @@
 _____ @
/__ __\\@
  / \\  @
  | |  @
  \\_/  @
       @@
 _    @
/ \\ /\\@
| | ||@
| \\_/|@
\\____/@
      @@
 _    @
/ \\ |\\@
| | //@
| \\// @
\\__/  @
      @@
 _     @
/ \\  /|@
| |  ||@
| |/\\||@
\\_/  \\|@
       @@
___  _@
\\  \\//@
 \\  / @
 /  \\ @
/__/\\\\@
      @@
___  _@
\\  \\//@
 \\  / @
 / /  @
/_/   @
      @@
 ____ @
/_   \\@
 /   /@
/   /_@
\\____/@
      @@
____@
\\ _/@
//  @
\\\\_ @
/__\\@
    @@
 _ @
| |@
\\_/@
 _ @
/ \\@
|_|@@
____@
\\_ /@
  \\\\@
 _//@
/__\\@
    @@
/\\//@
$\\/$@
    @
    @
    @
    @@
 \\/\\/ @
/  _ \\@
| / \\|@
| |-||@
\\_/ \\|@
      @@
 \\/\\/ @
/  _ \\@
| / \\|@
| \\_/|@
\\____/@
      @@
 \\/\\/ @
/ \\ /\\@
| | ||@
| \\_/|@
\\____/@
      @@
 \\/\\/ @
/  _ \\@
| / \\|@
| |-||@
\\_/ \\|@
      @@
 \\/\\/ @
/  _ \\@
| / \\|@
| \\_/|@
\\____/@
      @@
 \\/\\/ @
/ \\ /\\@
| | ||@
| \\_/|@
\\____/@
      @@
 ____ @
/  _ \\@
| | //@
| |_\\\\@
\\_/\\_/@
      @@
`,Kf=`flf2a$ 8 6 59 15 10 0 24463
Big by Glenn Chappell 4/93 -- based on Standard
Includes ISO Latin-1
Greek characters by Bruce Jakeway <pbjakeway@neumann.uwaterloo.ca>
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 | |@
 |_|@
 (_)@
    @
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
   $  @
      @
      @@
    _  _   @
  _| || |_ @
 |_  __  _|@
  _| || |_ @
 |_  __  _|@
   |_||_|  @
           @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @
      @
      @@
  _   __@
 (_) / /@
    / / @
   / /  @
  / / _ @
 /_/ (_)@
        @
        @@
         @
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
  $ @
    @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
 | | @
  \\_\\@
     @@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
  | |@
 /_/ @
     @@
     _    @
  /\\| |/\\ @
  \\ \` ' / @
 |_     _|@
  / , . \\ @
  \\/|_|\\/ @
          @
          @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
    $   @
        @
        @@
    @
    @
    @
    @
  _ @
 ( )@
 |/ @
    @@
         @
         @
  ______ @
 |______|@
     $   @
     $   @
         @
         @@
    @
    @
    @
    @
  _ @
 (_)@
    @
    @@
      __@
     / /@
    / / @
   / /  @
  / /   @
 /_/    @
        @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  __ @
 /_ |@
  | |@
  | |@
  | |@
  |_|@
     @
     @@
  ___  @
 |__ \\ @
   $) |@
   / / @
  / /_ @
 |____|@
       @
       @@
  ____  @
 |___ \\ @
   __) |@
  |__ < @
  ___) |@
 |____/ @
        @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    | |  @
    |_|  @
         @
         @@
  _____ @
 | ____|@
 | |__  @
 |___ \\ @
  ___) |@
 |____/ @
        @
        @@
    __  @
   / /  @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  ______ @
 |____  |@
    $/ / @
    / /  @
   / /   @
  /_/    @
         @
         @@
   ___  @
  / _ \\ @
 | (_) |@
  > _ < @
 | (_) |@
  \\___/ @
        @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    / / @
   /_/  @
        @
        @@
    @
  _ @
 (_)@
  $ @
  _ @
 (_)@
    @
    @@
    @
  _ @
 (_)@
  $ @
  _ @
 ( )@
 |/ @
    @@
    __@
   / /@
  / / @
 < <  @
  \\ \\ @
   \\_\\@
      @
      @@
         @
  ______ @
 |______|@
  ______ @
 |______|@
         @
         @
         @@
 __   @
 \\ \\  @
  \\ \\ @
   > >@
  / / @
 /_/  @
      @
      @@
  ___  @
 |__ \\ @
    ) |@
   / / @
  |_|  @
  (_)  @
       @
       @@
          @
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @
          @@
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / ____ \\ @
 /_/    \\_\\@
           @
           @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 | |_) |@
 |____/ @
        @
        @@
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
         @
         @@
  _____  @
 |  __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
 |_____/ @
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |____ @
 |______|@
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |     @
 |_|     @
         @
         @@
   _____ @
  / ____|@
 | |  __ @
 | | |_ |@
 | |__| |@
  \\_____|@
         @
         @@
  _    _ @
 | |  | |@
 | |__| |@
 |  __  |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _____ @
 |_   _|@
   | |  @
   | |  @
  _| |_ @
 |_____|@
        @
        @@
       _ @
      | |@
      | |@
  _   | |@
 | |__| |@
  \\____/ @
         @
         @@
  _  __@
 | |/ /@
 | ' / @
 |  <  @
 | . \\ @
 |_|\\_\\@
       @
       @@
  _      @
 | |     @
 | |     @
 | |     @
 | |____ @
 |______|@
         @
         @@
  __  __ @
 |  \\/  |@
 | \\  / |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | . \` |@
 | |\\  |@
 |_| \\_|@
        @
        @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 | |     @
 |_|     @
         @
         @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\___\\_\\@
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  _  / @
 | | \\ \\ @
 |_|  \\_\\@
         @
         @@
   _____ @
  / ____|@
 | (___  @
  \\___ \\ @
  ____) |@
 |_____/ @
         @
         @@
  _______ @
 |__   __|@
    | |   @
    | |   @
    | |   @
    |_|   @
          @
          @@
  _    _ @
 | |  | |@
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
 __      __@
 \\ \\    / /@
  \\ \\  / / @
   \\ \\/ /  @
    \\  /   @
     \\/    @
           @
           @@
 __          __@
 \\ \\        / /@
  \\ \\  /\\  / / @
   \\ \\/  \\/ /  @
    \\  /\\  /   @
     \\/  \\/    @
               @
               @@
 __   __@
 \\ \\ / /@
  \\ V / @
   > <  @
  / . \\ @
 /_/ \\_\\@
        @
        @@
 __     __@
 \\ \\   / /@
  \\ \\_/ / @
   \\   /  @
    | |   @
    |_|   @
          @
          @@
  ______@
 |___  /@
   $/ / @
   / /  @
  / /__ @
 /_____|@
        @
        @@
  ___ @
 |  _|@
 | |  @
 | |  @
 | |  @
 | |_ @
 |___|@
      @@
 __     @
 \\ \\    @
  \\ \\   @
   \\ \\  @
    \\ \\ @
     \\_\\@
        @
        @@
  ___ @
 |_  |@
   | |@
   | |@
   | |@
  _| |@
 |___|@
      @@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
   $ @
     @
     @@
         @
         @
         @
         @
         @
     $   @
  ______ @
 |______|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
  $ @
    @
    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @
        @@
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @
       @@
      _ @
     | |@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
       @
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 | |  @
 |_|  @
      @
      @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
   __/ |@
  |___/ @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
  _ @
 (_)@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
    _ @
   (_)@
    _ @
   | |@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | |   @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@
    @
    @@
            @
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @
            @@
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
        @
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
        @
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     | |@
     |_|@@
       @
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @
       @@
      @
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @
      @@
  _   @
 | |  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @
      @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
        @
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @
        @@
           @
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @
           @@
       @
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @
       @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
      @
      @
  ____@
 |_  /@
  / / @
 /___|@
      @
      @@
    __@
   / /@
  | | @
 / /  @
 \\ \\  @
  | | @
   \\_\\@
      @@
  _ @
 | |@
 | |@
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   \\ \\@
   / /@
  | | @
 /_/  @
      @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
   $  @
      @
      @@
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
160  NO-BREAK SPACE
 $@
 $@
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
 | |@
 |_|@
    @
    @@
162  CENT SIGN
       @
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @
       @@
163  POUND SIGN
     ___   @
    / ,_\\  @
  _| |_    @
 |__ __|   @
   | |____ @
  (_,_____|@
           @
           @@
164  CURRENCY SIGN
        @
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @
        @@
165  YEN SIGN
  __   __ @
  \\ \\ / / @
  _\\ V /_ @
 |___ ___|@
 |___ ___|@
    |_|   @
          @
          @@
166  BROKEN BAR
  _ @
 | |@
 | |@
 |_|@
  _ @
 | |@
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @
       @
       @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
  $   $ @
        @
        @@
169  COPYRIGHT SIGN
    ________   @
   /  ____  \\  @
  /  / ___|  \\ @
 |  | |       |@
 |  | |___    |@
  \\  \\____|  / @
   \\________/  @
               @@
170  FEMININE ORDINAL INDICATOR
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
 |_____|@
    $   @
        @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
    ____@
   / / /@
  / / / @
 < < <  @
  \\ \\ \\ @
   \\_\\_\\@
        @
        @@
172  NOT SIGN
         @
         @
  ______ @
 |____  |@
      |_|@
     $   @
         @
         @@
173  SOFT HYPHEN
        @
        @
  _____ @
 |_____|@
    $   @
    $   @
        @
        @@
174  REGISTERED SIGN
    ________   @
   /  ____  \\  @
  /  |  _ \\  \\ @
 |   | |_) |  |@
 |   |  _ <   |@
  \\  |_| \\_\\ / @
   \\________/  @
               @@
175  MACRON
  ______ @
 |______|@
     $   @
     $   @
     $   @
     $   @
         @
         @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
    $  @
       @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
   |_|  @
  _____ @
 |_____|@
        @
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
   $  @
      @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
   $  @
      @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
  $ @
    @
    @@
181  MICRO SIGN
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
182  PILCROW SIGN
   ______ @
  /      |@
 | (| || |@
  \\__ || |@
    | || |@
    |_||_|@
          @
          @@
183  MIDDLE DOT
    @
    @
  _ @
 (_)@
  $ @
  $ @
    @
    @@
184  CEDILLA
    @
    @
    @
    @
    @
  _ @
 )_)@
    @@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
  $ @
    @
    @@
186  MASCULINE ORDINAL INDICATOR
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
 |_____|@
    $   @
        @
        @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____   @
 \\ \\ \\  @
  \\ \\ \\ @
   > > >@
  / / / @
 /_/_/  @
        @
        @@
188  VULGAR FRACTION ONE QUARTER
  _   __   @
 / | / /   @
 | |/ / _  @
 |_/ / | | @
  / /|_  _|@
 /_/   |_| @
           @
           @@
189  VULGAR FRACTION ONE HALF
  _   __  @
 / | / /  @
 | |/ /__ @
 |_/ /_  )@
  / / / / @
 /_/ /___|@
          @
          @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __   @
 |__ / / /   @
  |_ \\/ / _  @
 |___/ / | | @
    / /|_  _|@
   /_/   |_| @
             @
             @@
191  INVERTED QUESTION MARK
    _  @
   (_) @
   | | @
  / /  @
 | (__ @
  \\___|@
       @
       @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __    @
    \\_\\   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __   @
    /_/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
    //\\   @
   |/_\\|  @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
195  LATIN CAPITAL LETTER A WITH TILDE
    /\\/|  @
   |/\\/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
     _    @
    (o)   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
198  LATIN CAPITAL LETTER AE
      _______ @
     /   ____|@
    /   |__   @
   / /|  __|  @
  / ___ |____ @
 /_/  |______|@
              @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
    )_)  @
         @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
   | |  @
  |___| @
        @
        @@
208  LATIN CAPITAL LETTER ETH
    _____  @
   |  __ \\ @
  _| |_ | |@
 |__ __|| |@
   | |__| |@
   |_____/ @
           @
           @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/| @
  |/\\/_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @
        @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
   $ @
     @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / __// @
 | | // |@
 | |//| |@
 | //_| |@
  //___/ @
         @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @
        @@
222  LATIN CAPITAL LETTER THORN
  _      @
 | |___  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 |_|     @
         @
         @@
223  LATIN SMALL LETTER SHARP S
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
230  LATIN SMALL LETTER AE
           @
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @
       @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/ \\|@
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 |  __/ @
  \\___| @
        @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/ \\|@
   _  @
  | | @
  | | @
  |_| @
      @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_) (_)@
    _   @
   | |  @
   | |  @
   |_|  @
        @
        @@
240  LATIN SMALL LETTER ETH
  /\\/\\  @
  >  <  @
  \\/\\ \\ @
  / _\` |@
 | (_) |@
  \\___/ @
        @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
247  DIVISION SIGN
     _    @
    (_)   @
  _______ @
 |_______|@
     _    @
    (_)   @
          @
          @@
248  LATIN SMALL LETTER O WITH STROKE
         @
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
   \\_\\  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
0x02BC  MODIFIER LETTER APOSTROPHE
   @
   @
 ))@
   @
   @
   @
   @
   @@
0x02BD  MODIFIER LETTER REVERSED COMMA
   @
   @
 ((@
   @
   @
   @
   @
   @@
0x037A  GREEK YPOGEGRAMMENI
   @
   @
   @
   @
   @
   @
   @
 ||@@
0x0387  GREEK ANO TELEIA
    @
  $ @
  _ @
 (_)@
    @
  $ @
    @
    @@
0x0391  GREEK CAPITAL LETTER ALPHA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0392  GREEK CAPITAL LETTER BETA
  ____  @
 |  _ \\ @
 | |_) )@
 |  _ ( @
 | |_) )@
 |____/ @
        @
        @@
0x0393  GREEK CAPITAL LETTER GAMMA
  _____ @
 |  ___)@
 | |$   @
 | |$   @
 | |    @
 |_|    @
        @
        @@
0x0394  GREEK CAPITAL LETTER DELTA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /__\\ \\ @
 /________\\@
           @
           @@
0x0395  GREEK CAPITAL LETTER EPSILON
  _____ @
 |  ___)@
 | |_   @
 |  _)  @
 | |___ @
 |_____)@
        @
        @@
0x0396  GREEK CAPITAL LETTER ZETA
  ______@
 (___  /@
    / / @
   / /  @
  / /__ @
 /_____)@
        @
        @@
0x0397  GREEK CAPITAL LETTER ETA
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0398  GREEK CAPITAL LETTER THETA
   ____  @
  / __ \\ @
 | |__| |@
 |  __  |@
 | |__| |@
  \\____/ @
         @
         @@
0x0399  GREEK CAPITAL LETTER IOTA
  ___ @
 (   )@
  | | @
  | | @
  | | @
 (___)@
      @
      @@
0x039A  GREEK CAPITAL LETTER KAPPA
  _   __@
 | | / /@
 | |/ / @
 |   <  @
 | |\\ \\ @
 |_| \\_\\@
        @
        @@
0x039B  GREEK CAPITAL LETTER LAMDA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /  \\ \\ @
 /_/    \\_\\@
           @
           @@
0x039C  GREEK CAPITAL LETTER MU
  __   __ @
 |  \\ /  |@
 |   v   |@
 | |\\_/| |@
 | |   | |@
 |_|   |_|@
          @
          @@
0x039D  GREEK CAPITAL LETTER NU
  _   _ @
 | \\ | |@
 |  \\| |@
 |     |@
 | |\\  |@
 |_| \\_|@
        @
        @@
0x039E  GREEK CAPITAL LETTER XI
  _____ @
 (_____)@
   ___  @
  (___) @
  _____ @
 (_____)@
        @
        @@
0x039F  GREEK CAPITAL LETTER OMICRON
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03A0  GREEK CAPITAL LETTER PI
  _______ @
 (   _   )@
  | | | | @
  | | | | @
  | | | | @
  |_| |_| @
          @
          @@
0x03A1  GREEK CAPITAL LETTER RHO
  ____  @
 |  _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @
        @
        @@
0x03A3  GREEK CAPITAL LETTER SIGMA
 ______ @
 \\  ___)@
  \\ \\   @
   > >  @
  / /__ @
 /_____)@
        @
        @@
0x03A4  GREEK CAPITAL LETTER TAU
  _____ @
 (_   _)@
   | |  @
   | |  @
   | |  @
   |_|  @
        @
        @@
0x03A5  GREEK CAPITAL LETTER UPSILON
  __   __ @
 (_ \\ / _)@
   \\ v /  @
    | |   @
    | |   @
    |_|   @
          @
          @@
0x03A6  GREEK CAPITAL LETTER PHI
     _    @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    |_|   @
          @
          @@
0x03A7  GREEK CAPITAL LETTER CHI
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03A8  GREEK CAPITAL LETTER PSI
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @
          @
          @@
0x03A9  GREEK CAPITAL LETTER OMEGA
    ____   @
   / __ \\  @
  | |  | | @
  | |  | | @
  _\\ \\/ /_ @
 (___||___)@
           @
           @@
0x03B1  GREEK SMALL LETTER ALPHA
         @
         @
   __  __@
  /  \\/ /@
 ( ()  < @
  \\__/\\_\\@
         @
         @@
0x03B2  GREEK SMALL LETTER BETA
   ___  @
  / _ \\ @
 | |_) )@
 |  _ < @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03B3  GREEK SMALL LETTER GAMMA
        @
        @
  _   _ @
 ( \\ / )@
  \\ v / @
   | |  @
   | |  @
   |_|  @@
0x03B4  GREEK SMALL LETTER DELTA
    __  @
   / _) @
   \\ \\  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03B5  GREEK SMALL LETTER EPSILON
      @
      @
  ___ @
 / __)@
 > _) @
 \\___)@
      @
      @@
0x03B6  GREEK SMALL LETTER ZETA
 _____  @
 \\__  ) @
   / /  @
  / /   @
 | |__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03B7  GREEK SMALL LETTER ETA
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
     |_|@@
0x03B8  GREEK SMALL LETTER THETA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | |_| |@
  \\___/ @
        @
        @@
0x03B9  GREEK SMALL LETTER IOTA
     @
     @
  _  @
 | | @
 | | @
  \\_)@
     @
     @@
0x03BA  GREEK SMALL LETTER KAPPA
       @
       @
  _  __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
0x03BB  GREEK SMALL LETTER LAMDA
 __     @
 \\ \\    @
  \\ \\   @
   > \\  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03BC  GREEK SMALL LETTER MU
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
0x03BD  GREEK SMALL LETTER NU
       @
       @
  _  __@
 | |/ /@
 | / / @
 |__/  @
       @
       @@
0x03BE  GREEK SMALL LETTER XI
 \\=\\__  @
  > __) @
 ( (_   @
  > _)  @
 ( (__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03BF  GREEK SMALL LETTER OMICRON
        @
        @
   ___  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03C0  GREEK SMALL LETTER PI
         @
         @
  ______ @
 (  __  )@
  | || | @
  |_||_| @
         @
         @@
0x03C1  GREEK SMALL LETTER RHO
        @
        @
   ___  @
  / _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03C2  GREEK SMALL LETTER FINAL SIGMA
        @
        @
   ____ @
  / ___)@
 ( (__  @
  \\__ \\ @
    _) )@
   (__/ @@
0x03C3  GREEK SMALL LETTER SIGMA
        @
        @
   ____ @
  /  ._)@
 ( () ) @
  \\__/  @
        @
        @@
0x03C4  GREEK SMALL LETTER TAU
      @
      @
  ___ @
 (   )@
  | | @
   \\_)@
      @
      @@
0x03C5  GREEK SMALL LETTER UPSILON
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03C6  GREEK SMALL LETTER PHI
     _    @
    | |   @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C7  GREEK SMALL LETTER CHI
        @
        @
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@@
0x03C8  GREEK SMALL LETTER PSI
          @
          @
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C9  GREEK SMALL LETTER OMEGA
            @
            @
   __   __  @
  / / _ \\ \\ @
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
0x03D1  GREEK THETA SYMBOL
     ___    @
    / _ \\   @
   ( (_| |_ @
  _ \\ _   _)@
 | |___| |  @
  \\_____/   @
            @
            @@
0x03D5  GREEK PHI SYMBOL
          @
          @
  _   __  @
 | | /  \\ @
 | || || )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03D6  GREEK PI SYMBOL
            @
            @
  _________ @
 (  _____  )@
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
-0x0005  
alpha = a, beta = b, gamma = g, delta = d, epsilon = e   @
zeta = z, eta = h, theta = q, iota = i, lamda = l, mu = m@
nu = n, xi = x, omicron = o, pi = p, rho = r, sigma = s  @
phi = f, chi = c, psi = y, omega = w, final sigma = V    @
     pi symbol = v, theta symbol = J, phi symbol = j     @
     middle dot = :, ypogegrammeni = _                   @
     rough breathing = (, smooth breathing = )           @
     acute accent = ', grave accent = \`, dialytika = ^   @@
`,Xf=`flf2a$ 4 4 99 0 20
Bulbhead by Jef Poskanzer, 23jun94
Figlet release 2.0 -- August 5, 1993
 ____  __  __  __    ____  _   _  ____    __    ____
(  _ \\(  )(  )(  )  (  _ \\( )_( )( ___)  /__\\  (  _ \\
 ) _ < )(__)(  )(__  ) _ < ) _ (  )___) /(__)\\  )(_) )
(____/(______)(____)(____/(_) (_)(____)(__)(__)(____/

Update February 12, 2002 by Markus Gebhard markus@jave.de
  Added german umlauts

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
4    - height of a character
4    - height of a character, not including descenders
99   - max line length (excluding comment lines) + a fudge factor
0    - default smushmode for this font (like "-m 0" on command line)
13   - number of comment lines

$$@
$$@
$$@
$$@@
/\\@
)(@
\\/@
()@@
||@
  @
  @
  @@
 | | @
-|-|-@
-|-|-@
 | | @@
 _|_ @
/ |_)@
\\_| \\@
(_|_/@@
 _  _  @
(_)/ ) @
  / /_ @
 (_/(_)@@
  _  @
 ( ) @
 /_\\/@
(__/\\@@
/@
 @
 @
 @@
  _ @
 / )@
( ( @
 \\_)@@
 _  @
( \\ @
 ) )@
(_/ @@
   @
\\|/@
/|\\@
   @@
   _   @
 _| |_ @
(_   _)@
  |_|  @@
  @
  @
()@
/ @@
     @
 ___ @
(___)@
     @@
  @
  @
  @
()@@
   _ @
  / )@
 / / @
(_/  @@
  ___  @
 / _ \\ @
( (_) )@
 \\___/ @@
  __ @
 /  )@
  )( @
 (__)@@
 ___  @
(__ \\ @
 / _/ @
(____)@@
 ___ @
(__ )@
 (_ \\@
(___/@@
  __  @
 /. | @
(_  _)@
  (_) @@
 ___ @
| __)@
|__ \\@
(___/@@
  _  @
 / ) @
/ _ \\@
\\___/@@
 ___ @
(__ )@
 / / @
(_/  @@
 ___ @
( _ )@
/ _ \\@
\\___/@@
 ___ @
/ _ \\@
\\_  /@
 (_/ @@
  @
()@
  @
()@@
()@
  @
()@
/ @@
  __@
 / /@
< < @
 \\_\\@@
 ___ @
(___)@
 ___ @
(___)@@
__  @
\\ \\ @
 > >@
/_/ @@
 ___ @
(__ )@
 (_/ @
 (_) @@
  __ @
 /  \\@
| ()/@
 \\__ @@
   __   @
  /__\\  @
 /(__)\\ @
(__)(__)@@
 ____ @
(  _ \\@
 ) _ <@
(____/@@
  ___ @
 / __)@
( (__ @
 \\___)@@
 ____  @
(  _ \\ @
 )(_) )@
(____/ @@
 ____ @
( ___)@
 )__) @
(____)@@
 ____ @
( ___)@
 )__) @
(__)  @@
  ___ @
 / __)@
( (_-.@
 \\___/@@
 _   _ @
( )_( )@
 ) _ ( @
(_) (_)@@
 ____ @
(_  _)@
 _)(_ @
(____)@@
  ____ @
 (_  _)@
.-_)(  @
\\____) @@
 _  _ @
( )/ )@
 )  ( @
(_)\\_)@@
 __   @
(  )  @
 )(__ @
(____)@@
 __  __ @
(  \\/  )@
 )    ( @
(_/\\/\\_)@@
 _  _ @
( \\( )@
 )  ( @
(_)\\_)@@
 _____ @
(  _  )@
 )(_)( @
(_____)@@
 ____ @
(  _ \\@
 )___/@
(__)  @@
 _____ @
(  _  )@
 )(_)( @
(___/\\\\@@
 ____ @
(  _ \\@
 )   /@
(_)\\_)@@
 ___ @
/ __)@
\\__ \\@
(___/@@
 ____ @
(_  _)@
  )(  @
 (__) @@
 __  __ @
(  )(  )@
 )(__)( @
(______)@@
 _  _ @
( \\/ )@
 \\  / @
  \\/  @@
 _    _ @
( \\/\\/ )@
 )    ( @
(__/\\__)@@
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
 _  _ @
( \\/ )@
 \\  / @
 (__) @@
 ____ @
(_   )@
 / /_ @
(____)@@
 __@
|  @
|  @
|__@@
 _   @
( \\  @
 \\ \\ @
  \\_)@@
__ @
  |@
  |@
__|@@
 / \\ @
(_^_)@
     @
     @@
     @
     @
 ___ @
(___)@@
\\@
 @
 @
 @@
   __   @
  /__\\  @
 /(__)\\ @
(__)(__)@@
 ____ @
(  _ \\@
 ) _ <@
(____/@@
  ___ @
 / __)@
( (__ @
 \\___)@@
 ____  @
(  _ \\ @
 )(_) )@
(____/ @@
 ____ @
( ___)@
 )__) @
(____)@@
 ____ @
( ___)@
 )__) @
(__)  @@
  ___ @
 / __)@
( (_-.@
 \\___/@@
 _   _ @
( )_( )@
 ) _ ( @
(_) (_)@@
 ____ @
(_  _)@
 _)(_ @
(____)@@
  ____ @
 (_  _)@
.-_)(  @
\\____) @@
 _  _ @
( )/ )@
 )  ( @
(_)\\_)@@
 __   @
(  )  @
 )(__ @
(____)@@
 __  __ @
(  \\/  )@
 )    ( @
(_/\\/\\_)@@
 _  _ @
( \\( )@
 )  ( @
(_)\\_)@@
 _____ @
(  _  )@
 )(_)( @
(_____)@@
 ____ @
(  _ \\@
 )___/@
(__)  @@
 _____ @
(  _  )@
 )(_)( @
(___/\\\\@@
 ____ @
(  _ \\@
 )   /@
(_)\\_)@@
 ___ @
/ __)@
\\__ \\@
(___/@@
 ____ @
(_  _)@
  )(  @
 (__) @@
 __  __ @
(  )(  )@
 )(__)( @
(______)@@
 _  _ @
( \\/ )@
 \\  / @
  \\/  @@
 _    _ @
( \\/\\/ )@
 )    ( @
(__/\\__)@@
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
 _  _ @
( \\/ )@
 \\  / @
 (__) @@
 ____ @
(_   )@
 / /_ @
(____)@@
 ,-@
_| @
 | @
 \`-@@
/\\@
||@
||@
\\/@@
-. @
 |_@
 | @
-' @@
   @
/\\/@
   @
   @@
 (_)(_) @
  /__\\  @
 /(__)\\ @
(__)(__)@@
(_)_(_)@
(  _  )@
 )(_)( @
(_____)@@
 (_)(_) @
(  )(  )@
 )(__)( @
(______)@@
 (_)(_) @
  /__\\  @
 /(__)\\ @
(__)(__)@@
(_)_(_)@
(  _  )@
 )(_)( @
(_____)@@
 (_)(_) @
(  )(  )@
 )(__)( @
(______)@@
 ___ @
/ _ )@
| _ \\@
| __/@@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@@
`,Qf=`flf2a 6 6 10 63 14 0 8127 0
Author : myflix
Date   : 2003/11/11 20:05:19
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Font Edited: Aug. 5, 2007 by PAT or JK
Update: Changed hardblank character and added "<" and ">" cards
        
 .-.    
((5))   
 '-.-.  
  ((1)) 
   '-'  
.------.
|!.--. |
| (\\/) |
| :\\/: |
| '--'!|
\`------'
.------.
|".--. |
| :(): |
| ()() |
| '--'"|
\`------'
.------.
|#.--. |
| :/\\: |
| :\\/: |
| '--'#|
\`------'
.------.
|$.--. |
| :/\\: |
| (__) |
| '--'$|
\`------'
.------.
|%.--. |
| (\\/) |
| :\\/: |
| '--'%|
\`------'
.------.
|&.--. |
| :(): |
| ()() |
| '--'&|
\`------'
.------.
|'.--. |
| :/\\: |
| :\\/: |
| '--''|
\`------'
.------.
|(.--. |
| :/\\: |
| (__) |
| '--'(|
\`------'
.------.
|).--. |
| (\\/) |
| :\\/: |
| '--')|
\`------'
.------.
|*.--. |
| :(): |
| ()() |
| '--'*|
\`------'
.------.
|+.--. |
| :/\\: |
| :\\/: |
| '--'+|
\`------'
.------.
|,.--. |
| :/\\: |
| (__) |
| '--',|
\`------'
.------.
|-.--. |
| (\\/) |
| :\\/: |
| '--'-|
\`------'
.------.
|..--. |
| :(): |
| ()() |
| '--'.|
\`------'
/
 
 
 
 
 
.------.
|0.--. |
| :/\\: |
| :\\/: |
| '--'0|
\`------'
.------.
|1.--. |
| :/\\: |
| (__) |
| '--'1|
\`------'
.------.
|2.--. |
| (\\/) |
| :\\/: |
| '--'2|
\`------'
.------.
|3.--. |
| :(): |
| ()() |
| '--'3|
\`------'
.------.
|4.--. |
| :/\\: |
| :\\/: |
| '--'4|
\`------'
.------.
|5.--. |
| :/\\: |
| (__) |
| '--'5|
\`------'
.------.
|6.--. |
| (\\/) |
| :\\/: |
| '--'6|
\`------'
.------.
|7.--. |
| :(): |
| ()() |
| '--'7|
\`------'
.------.
|8.--. |
| :/\\: |
| :\\/: |
| '--'8|
\`------'
.------.
|9.--. |
| :/\\: |
| (__) |
| '--'9|
\`------'
.------.
|:.--. |
| :/\\: |
| :\\/: |
| '--':|
\`------'
.------.
|;.--. |
| :/\\: |
| (__) |
| '--';|
\`------'
.------.
|<.--. |
| (\\/) |
| :\\/: |
| '--'<|
\`------'
.------.
|=.--. |
| (\\/) |
| :\\/: |
| '--'=|
\`------'
.------.
|>.--. |
| (\\/) |
| :\\/: |
| '--'>|
\`------'
.------.
|?.--. |
| :(): |
| ()() |
| '--'?|
\`------'
.------.
|@.--. |
| :/\\: |
| :\\/: |
| '--'@|
\`------'
.------.
|A.--. |
| (\\/) |
| :\\/: |
| '--'A|
\`------'
.------.
|B.--. |
| :(): |
| ()() |
| '--'B|
\`------'
.------.
|C.--. |
| :/\\: |
| :\\/: |
| '--'C|
\`------'
.------.
|D.--. |
| :/\\: |
| (__) |
| '--'D|
\`------'
.------.
|E.--. |
| (\\/) |
| :\\/: |
| '--'E|
\`------'
.------.
|F.--. |
| :(): |
| ()() |
| '--'F|
\`------'
.------.
|G.--. |
| :/\\: |
| :\\/: |
| '--'G|
\`------'
.------.
|H.--. |
| :/\\: |
| (__) |
| '--'H|
\`------'
.------.
|I.--. |
| (\\/) |
| :\\/: |
| '--'I|
\`------'
.------.
|J.--. |
| :(): |
| ()() |
| '--'J|
\`------'
.------.
|K.--. |
| :/\\: |
| :\\/: |
| '--'K|
\`------'
.------.
|L.--. |
| :/\\: |
| (__) |
| '--'L|
\`------'
.------.
|M.--. |
| (\\/) |
| :\\/: |
| '--'M|
\`------'
.------.
|N.--. |
| :(): |
| ()() |
| '--'N|
\`------'
.------.
|O.--. |
| :/\\: |
| :\\/: |
| '--'O|
\`------'
.------.
|P.--. |
| :/\\: |
| (__) |
| '--'P|
\`------'
.------.
|Q.--. |
| (\\/) |
| :\\/: |
| '--'Q|
\`------'
.------.
|R.--. |
| :(): |
| ()() |
| '--'R|
\`------'
.------.
|S.--. |
| :/\\: |
| :\\/: |
| '--'S|
\`------'
.------.
|T.--. |
| :/\\: |
| (__) |
| '--'T|
\`------'
.------.
|U.--. |
| (\\/) |
| :\\/: |
| '--'U|
\`------'
.------.
|V.--. |
| :(): |
| ()() |
| '--'V|
\`------'
.------.
|W.--. |
| :/\\: |
| :\\/: |
| '--'W|
\`------'
.------.
|X.--. |
| :/\\: |
| (__) |
| '--'X|
\`------'
.------.
|Y.--. |
| (\\/) |
| :\\/: |
| '--'Y|
\`------'
.------.
|Z.--. |
| :(): |
| ()() |
| '--'Z|
\`------'
.------.
|[.--. |
| :/\\: |
| (__) |
| '--'[|
\`------'
\\
 
 
 
 
 
.------.
|].--. |
| (\\/) |
| :\\/: |
| '--']|
\`------'
.------.
|^.--. |
| :(): |
| ()() |
| '--'^|
\`------'
.------.
|_.--. |
| :/\\: |
| :\\/: |
| '--'_|
\`------'
.------.
|\`.--. |
| :/\\: |
| (__) |
| '--'\`|
\`------'
.------.
|A.--. |
| (\\/) |
| :\\/: |
| '--'A|
\`------'
.------.
|B.--. |
| :(): |
| ()() |
| '--'B|
\`------'
.------.
|C.--. |
| :/\\: |
| :\\/: |
| '--'C|
\`------'
.------.
|D.--. |
| :/\\: |
| (__) |
| '--'D|
\`------'
.------.
|E.--. |
| (\\/) |
| :\\/: |
| '--'E|
\`------'
.------.
|F.--. |
| :(): |
| ()() |
| '--'F|
\`------'
.------.
|G.--. |
| :/\\: |
| :\\/: |
| '--'G|
\`------'
.------.
|H.--. |
| :/\\: |
| (__) |
| '--'H|
\`------'
.------.
|I.--. |
| (\\/) |
| :\\/: |
| '--'I|
\`------'
.------.
|J.--. |
| :(): |
| ()() |
| '--'J|
\`------'
.------.
|K.--. |
| :/\\: |
| :\\/: |
| '--'K|
\`------'
.------.
|L.--. |
| :/\\: |
| (__) |
| '--'L|
\`------'
.------.
|M.--. |
| (\\/) |
| :\\/: |
| '--'M|
\`------'
.------.
|N.--. |
| :(): |
| ()() |
| '--'N|
\`------'
.------.
|O.--. |
| :/\\: |
| :\\/: |
| '--'O|
\`------'
.------.
|P.--. |
| :/\\: |
| (__) |
| '--'P|
\`------'
.------.
|Q.--. |
| (\\/) |
| :\\/: |
| '--'Q|
\`------'
.------.
|R.--. |
| :(): |
| ()() |
| '--'R|
\`------'
.------.
|S.--. |
| :/\\: |
| :\\/: |
| '--'S|
\`------'
.------.
|T.--. |
| :/\\: |
| (__) |
| '--'T|
\`------'
.------.
|U.--. |
| (\\/) |
| :\\/: |
| '--'U|
\`------'
.------.
|V.--. |
| :(): |
| ()() |
| '--'V|
\`------'
.------.
|W.--. |
| :/\\: |
| :\\/: |
| '--'W|
\`------'
.------.
|X.--. |
| :/\\: |
| (__) |
| '--'X|
\`------'
.------.
|Y.--. |
| (\\/) |
| :\\/: |
| '--'Y|
\`------'
.------.
|Z.--. |
| :(): |
| ()() |
| '--'Z|
\`------'
.------.
|{.--. |
| (\\/) |
| :\\/: |
| '--'{|
\`------'
|
 
 
 
 
 
.------.
|}.--. |
| :(): |
| ()() |
| '--'}|
\`------'
.------.
|~.--. |
| :/\\: |
| :\\/: |
| '--'~|
\`------'
.------.
|A.--. |
| (\\/) |
| :\\/: |
| '--'A|
\`------'
.------.
|O.--. |
| :/\\: |
| :\\/: |
| '--'O|
\`------'
.------.
|U.--. |
| (\\/) |
| :\\/: |
| '--'U|
\`------'
.------.
|A.--. |
| (\\/) |
| :\\/: |
| '--'A|
\`------'
.------.
|O.--. |
| :/\\: |
| :\\/: |
| '--'O|
\`------'
.------.
|U.--. |
| (\\/) |
| :\\/: |
| '--'U|
\`------'
        
 .-.    
((5))   
 '-.-.  
  ((1)) 
   '-'  
`,Jf=`flf2a$ 8 6 14 15 16
DOOM by Frans P. de Vries <fpv@xymph.iaf.nl>  18 Jun 1996
based on Big by Glenn Chappell 4/93 -- based on Standard
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
8    - height of a character
6    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

$@
$@
$@
$@
$@
$@
$@
$@@
 _ @
| |@
| |@
| |@
|_|@
(_)@
   @
   @@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @
     @@
   _  _   @
 _| || |_ @
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_|  @
          @
          @@
  _  @
 | | @
/ __)@
\\__ \\@
(   /@
 |_| @
     @
     @@
 _   __@
(_) / /@
   / / @
  / /  @
 / / _ @
/_/ (_)@
       @
       @@
        @
  ___   @
 ( _ )  @
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
        @
        @@
 _ @
( )@
|/ @
 $ @
 $ @
 $ @
   @
   @@
  __@
 / /@
| | @
| | @
| | @
| | @
 \\_\\@
    @@
__  @
\\ \\ @
 | |@
 | |@
 | |@
 | |@
/_/ @
    @@
    _    @
 /\\| |/\\ @
 \\ \` ' / @
|_     _|@
 / , . \\ @
 \\/|_|\\/ @
         @
         @@
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
   $   @
       @
       @@
   @
   @
   @
   @
 _ @
( )@
|/ @
   @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @
        @@
   @
   @
   @
   @
 _ @
(_)@
   @
   @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @
       @
       @@
 _____ @
|  _  |@
| |/' |@
|  /| |@
\\ |_/ /@
 \\___/ @
       @
       @@
 __  @
/  | @
\`| | @
 | | @
_| |_@
\\___/@
     @
     @@
 _____ @
/ __  \\@
\`' / /'@
  / /  @
./ /___@
\\_____/@
       @
       @@
 _____ @
|____ |@
    / /@
  $ \\ \\@
.___/ /@
\\____/ @
       @
       @@
   ___ @
  /   |@
 / /| |@
/ /_| |@
\\___  |@
    |_/@
       @
       @@
 _____ @
|  ___|@
|___ \\ @
    \\ \\@
/\\__/ /@
\\____/ @
       @
       @@
  ____ @
 / ___|@
/ /___ @
| ___ \\@
| \\_/ |@
\\_____/@
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /   @
\\_/    @
       @
       @@
 _____ @
|  _  |@
 \\ V / @
 / _ \\ @
| |_| |@
\\_____/@
       @
       @@
 _____ @
|  _  |@
| |_| |@
\\____ |@
.___/ /@
\\____/ @
       @
       @@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @
   @@
   __@
  / /@
 / / @
< <  @
 \\ \\ @
  \\_\\@
     @
     @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @
        @@
__   @
\\ \\  @
 \\ \\ @
  > >@
 / / @
/_/  @
     @
     @@
 ___  @
|__ \\ @
   ) |@
  / / @
 |_|  @
 (_)  @
      @
      @@
         @
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
  ___  @
 / _ \\ @
/ /_\\ \\@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
______ @
| ___ \\@
| |_/ /@
| ___ \\@
| |_/ /@
\\____/ @
       @
       @@
 _____ @
/  __ \\@
| /  \\/@
| |    @
| \\__/\\@
 \\____/@
       @
       @@
______ @
|  _  \\@
| | | |@
| | | |@
| |/ / @
|___/  @
       @
       @@
 _____ @
|  ___|@
| |__  @
|  __| @
| |___ @
\\____/ @
       @
       @@
______ @
|  ___|@
| |_   @
|  _|  @
| |    @
\\_|    @
       @
       @@
 _____ @
|  __ \\@
| |  \\/@
| | __ @
| |_\\ \\@
 \\____/@
       @
       @@
 _   _ @
| | | |@
| |_| |@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
 _| |_ @
 \\___/ @
       @
       @@
   ___ @
  |_  |@
  $ | |@
    | |@
/\\__/ /@
\\____/ @
       @
       @@
 _   __@
| | / /@
| |/ / @
|    \\ @
| |\\  \\@
\\_| \\_/@
       @
       @@
 _     @
| | $  @
| | $  @
| |    @
| |____@
\\_____/@
       @
       @@
___  ___@
|  \\/  |@
| .  . |@
| |\\/| |@
| |  | |@
\\_|  |_/@
        @
        @@
 _   _ @
| \\ | |@
|  \\| |@
| . \` |@
| |\\  |@
\\_| \\_/@
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
______ @
| ___ \\@
| |_/ /@
|  __/ @
| |    @
\\_|    @
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\/' /@
 \\_/\\_\\@
       @
       @@
______ @
| ___ \\@
| |_/ /@
|    / @
| |\\ \\ @
\\_| \\_|@
       @
       @@
 _____ @
/  ___|@
\\ \`--. @
 \`--. \\@
/\\__/ /@
\\____/ @
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
  | |  @
  \\_/  @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _    _ @
| |  | |@
| |  | |@
| |/\\| |@
\\  /\\  /@
 \\/  \\/ @
        @
        @@
__   __@
\\ \\ / /@
 \\ V / @
 /   \\ @
/ /^\\ \\@
\\/   \\/@
       @
       @@
__   __@
\\ \\ / /@
 \\ V / @
  \\ /  @
  | |  @
  \\_/  @
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /___@
\\_____/@
       @
       @@
 ___ @
|  _|@
| |  @
| |  @
| |  @
| |_ @
|___|@
     @@
__     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @
       @@
 ___ @
|_  |@
  | |@
  | |@
  | |@
 _| |@
|___|@
     @@
 /\\ @
|/\\|@
  $ @
  $ @
  $ @
  $ @
    @
    @@
        @
        @
        @
        @
        @
    $   @
 ______ @
|______|@@
 _ @
( )@
 \\|@
 $ @
 $ @
 $ @
   @
   @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _     @
| |    @
| |__  @
| '_ \\ @
| |_) |@
|_.__/ @
       @
       @@
      @
      @
  ___ @
 / __|@
| (__ @
 \\___|@
      @
      @@
     _ @
    | |@
  __| |@
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
      @
      @
  ___ @
 / _ \\@
|  __/@
 \\___|@
      @
      @@
  __ @
 / _|@
| |_ @
|  _|@
| |  @
|_|  @
     @
     @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
  __/ |@
 |___/ @@
 _     @
| |    @
| |__  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
 _ @
(_)@
 _ @
| |@
| |@
|_|@
   @
   @@
   _ @
  (_)@
   _ @
  | |@
  | |@
  | |@
 _/ |@
|__/ @@
 _    @
| |   @
| | __@
| |/ /@
|   < @
|_|\\_\\@
      @
      @@
 _ @
| |@
| |@
| |@
| |@
|_|@
   @
   @@
           @
           @
 _ __ ___  @
| '_ \` _ \\ @
| | | | | |@
|_| |_| |_|@
           @
           @@
       @
       @
 _ __  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
       @
       @
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
       @
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
| |    @
|_|    @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
    | |@
    |_|@@
      @
      @
 _ __ @
| '__|@
| |   @
|_|   @
      @
      @@
     @
     @
 ___ @
/ __|@
\\__ \\@
|___/@
     @
     @@
 _   @
| |  @
| |_ @
| __|@
| |_ @
 \\__|@
     @
     @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
       @
       @
__   __@
\\ \\ / /@
 \\ V / @
  \\_/  @
       @
       @@
          @
          @
__      __@
\\ \\ /\\ / /@
 \\ V  V / @
  \\_/\\_/  @
          @
          @@
      @
      @
__  __@
\\ \\/ /@
 >  < @
/_/\\_\\@
      @
      @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__, |@
  __/ |@
 |___/ @@
     @
     @
 ____@
|_  /@
 / / @
/___|@
     @
     @@
   __@
  / /@
 | | @
/ /  @
\\ \\  @
 | | @
  \\_\\@
     @@
 _ @
| |@
| |@
| |@
| |@
| |@
| |@
|_|@@
__   @
\\ \\  @
 | | @
  \\ \\@
  / /@
 | | @
/_/  @
     @@
 /\\/|@
|/\\/ @
  $  @
  $  @
  $  @
  $  @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
/ /_\\ \\@
|  _  |@
\\_| |_/@
       @
       @@
 _   _ @
(_)_(_)@
|  _  |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
\\_|    @
       @@
`,bf=`flf2a$ 9 8 13 16 16
Epic by Claude Martins 12/94

Figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
9    - height of a character
8    - height of a character, not including descenders
13   - max line length (excluding comment lines) + a fudge factor
16   - default smushmode for this font
16   - number of comment lines

$$@
$$@
$$@
$$@
$$@
$$@
$$@
$$@
$$@@
 _ @
( )@
| |@
| |@
| |@
(_)@
 _ @
(_)@
   @@
 _  _ @
( )( )@
 \\||/ @
      @
      @
      @
      @
      @
      @@
   _   _   @
  ( ) ( )  @
 _| |_| |_ @
(_   _   _)@
 _| (_) |_ @
(_   _   _)@
  | | | |  @
  (_) (_)  @
           @@
    _    @
 __|_|___@
(  _____/@
| (|_|__ @
(_____  )@
/\\_|_|) |@
\\_______)@
   |_|   @
         @@
       @
     /\\@
()  / /@
   / / @
  / /  @
 / /   @
/ /  ()@
\\/     @
       @@
   __   @
  /__\\  @
 ( \\/ ) @
  \\  /  @
  /  \\/\\@
 / /\\  /@
(  \\/  \\@
 \\___/\\/@
        @@
 _ @
( )@
|/ @
   @
   @
   @
   @
   @
   @@
   _ @
  / )@
 / / @
( (  @
| |  @
( (  @
 \\ \\ @
  \\_)@
     @@
 _   @
( \\  @
 \\ \\ @
  ) )@
  | |@
  ) )@
 / / @
(_/  @
     @@
          @
 /\\    /\\ @
 \\ \\  / / @
 _) () (_ @
(_      _)@
  ) () (  @
 / /  \\ \\ @
 \\/    \\/ @
          @@
    _    @
   ( )   @
   | |   @
 __| |__ @
(__   __)@
   | |   @
   | |   @
   (_)   @
         @@
   @
   @
   @
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
       @
 _____ @
(_____)@
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
 _ @
(_)@
   @@
       @
     /\\@
    / /@
   / / @
  / /  @
 / /   @
/ /    @
\\/     @
       @@
 _______ @
(  __   )@
| (  )  |@
| | /   |@
| (/ /) |@
|   / | |@
|  (__) |@
(_______)@
         @@
  __   @
 /  \\  @
 \\/) ) @
   | | @
   | | @
   | | @
 __) (_@
 \\____/@
       @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
  _/   / @
 /   _/  @
(   (__/\\@
\\_______/@
         @@
 ______  @
/ ___  \\ @
\\/   \\  \\@
   ___) /@
  (___ ( @
      ) \\@
/\\___/  /@
\\______/ @
         @@
    ___   @
   /   )  @
  / /) |  @
 / (_) (_ @
(____   _)@
     ) (  @
     | |  @
     (_)  @
          @@
 _______ @
(  ____ \\@
| (    \\/@
| (____  @
(_____ \\ @
      ) )@
/\\____) )@
\\______/ @
         @@
  ______ @
 / ____ \\@
( (    \\/@
| (____  @
|  ___ \\ @
| (   ) )@
( (___) )@
 \\_____/ @
         @@
 ______  @
/ ___  \\ @
\\/   )  )@
    /  / @
   /  /  @
  /  /   @
 /  /    @
 \\_/     @
         @@
  _____  @
 / ___ \\ @
( (___) )@
 \\     / @
 / ___ \\ @
( (   ) )@
( (___) )@
 \\_____/ @
         @@
  _____  @
 / ___ \\ @
( (   ) )@
( (___) |@
 \\____  |@
      ) |@
/\\____) )@
\\______/ @
         @@
   @
   @
 _ @
(_)@
   @
 _ @
(_)@
   @
   @@
   @
   @
   @
 _ @
(_)@
   @
 _ @
( )@
|/ @@
    _ @
   / )@
  / / @
 / /  @
( (   @
 \\ \\  @
  \\ \\ @
   \\_)@
      @@
     @
     @
 ___ @
(___)@
 ___ @
(___)@
     @
     @
     @@
 _    @
( \\   @
 \\ \\  @
  \\ \\ @
   ) )@
  / / @
 / /  @
(_/   @
      @@
  _____  @
 / ___ \\ @
( (   ) )@
 \\/  / / @
    ( (  @
    | |  @
    (_)  @
     _   @
    (_)  @@
   _____   @
  / ___ \\  @
 / / _ \\ \\ @
( ( / \\ ) )@
| |(()// / @
( ( \\___/  @
 \\ \\____/\\ @
  \\______/ @
           @@
 _______ @
(  ___  )@
| (   ) |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
 ______  @
(  ___ \\ @
| (   ) )@
| (__/ / @
|  __ (  @
| (  \\ \\ @
| )___) )@
|/ \\___/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 ______  @
(  __  \\ @
| (  \\  )@
| |   ) |@
| |   | |@
| |   ) |@
| (__/  )@
(______/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| (____/\\@
(_______/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| )      @
|/       @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| | ____ @
| | \\_  )@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
___) (___@
\\_______/@
         @@
_________@
\\__    _/@
   )  (  @
   |  |  @
   |  |  @
   |  |  @
|\\_)  )  @
(____/   @
         @@
 _       @
| \\    /\\@
|  \\  / /@
|  (_/ / @
|   _ (  @
|  ( \\ \\ @
|  /  \\ \\@
|_/    \\/@
         @@
 _       @
( \\      @
| (      @
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 _______ @
(       )@
| () () |@
| || || |@
| |(_)| |@
| |   | |@
| )   ( |@
|/     \\|@
         @@
 _       @
( (    /|@
|  \\  ( |@
|   \\ | |@
| (\\ \\) |@
| | \\   |@
| )  \\  |@
|/    )_)@
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|  _____)@
| (      @
| )      @
|/       @
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| | /\\| |@
| (_\\ \\ |@
(____\\/_)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|     __)@
| (\\ (   @
| ) \\ \\__@
|/   \\__/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (_____ @
(_____  )@
      ) |@
/\\____) |@
\\_______)@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
   | |   @
   )_(   @
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
( (   ) )@
 \\ \\_/ / @
  \\   /  @
   \\_/   @
         @@
         @
|\\     /|@
| )   ( |@
| | _ | |@
| |( )| |@
| || || |@
| () () |@
(_______)@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  ) _ (  @
 / ( ) \\ @
( /   \\ )@
|/     \\|@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  \\   /  @
   ) (   @
   | |   @
   \\_/   @
         @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
   /   / @
  /   /  @
 /   (_/\\@
(_______/@
         @@
 ____ @
(  __)@
| (   @
| |   @
| |   @
| |   @
| (__ @
(____)@
      @@
       @
/\\     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\ \\@
     \\/@
       @@
 ____ @
(__  )@
   ) |@
   | |@
   | |@
   | |@
 __) |@
(____)@
      @@
 /\\ @
(/\\)@
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
 _____ @
(_____)@@
 _ @
( )@
 \\|@
   @
   @
   @
   @
   @
   @@
 _______ @
(  ___  )@
| (   ) |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
 ______  @
(  ___ \\ @
| (   ) )@
| (__/ / @
|  __ (  @
| (  \\ \\ @
| )___) )@
|/ \\___/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 ______  @
(  __  \\ @
| (  \\  )@
| |   ) |@
| |   | |@
| |   ) |@
| (__/  )@
(______/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| (____/\\@
(_______/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| )      @
|/       @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| | ____ @
| | \\_  )@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
___) (___@
\\_______/@
         @@
_________@
\\__    _/@
   )  (  @
   |  |  @
   |  |  @
   |  |  @
|\\_)  )  @
(____/   @
         @@
 _       @
| \\    /\\@
|  \\  / /@
|  (_/ / @
|   _ (  @
|  ( \\ \\ @
|  /  \\ \\@
|_/    \\/@
         @@
 _       @
( \\      @
| (      @
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 _______ @
(       )@
| () () |@
| || || |@
| |(_)| |@
| |   | |@
| )   ( |@
|/     \\|@
         @@
 _       @
( (    /|@
|  \\  ( |@
|   \\ | |@
| (\\ \\) |@
| | \\   |@
| )  \\  |@
|/    )_)@
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|  _____)@
| (      @
| )      @
|/       @
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| | /\\| |@
| (_\\ \\ |@
(____\\/_)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|     __)@
| (\\ (   @
| ) \\ \\__@
|/   \\__/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (_____ @
(_____  )@
      ) |@
/\\____) |@
\\_______)@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
   | |   @
   )_(   @
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
( (   ) )@
 \\ \\_/ / @
  \\   /  @
   \\_/   @
         @@
         @
|\\     /|@
| )   ( |@
| | _ | |@
| |( )| |@
| || || |@
| () () |@
(_______)@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  ) _ (  @
 / ( ) \\ @
( /   \\ )@
|/     \\|@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  \\   /  @
   ) (   @
   | |   @
   \\_/   @
         @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
   /   / @
  /   /  @
 /   (_/\\@
(_______/@
         @@
  __ @
 ( _)@
 )(  @
/ |  @
\\ |  @
 )(_ @
 (__)@
     @
     @@
 _ @
( )@
| |@
(_)@
 _ @
( )@
| |@
(_)@
   @@
 __  @
(_ ) @
  )( @
  | \\@
  | /@
 _)( @
(__) @
     @
     @@
  _    @
 /_\\_/)@
(/ \\_/ @
       @
       @
       @
       @
       @
       @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (___) |@
|  ___  |@
| )   ( |@
|/     \\|@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
         @
|\\     /|@
| )   ( |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (___) |@
|  ___  |@
| )   ( |@
|/     \\|@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
         @
|\\     /|@
| )   ( |@
| |   | |@
| (___) |@
(_______)@
         @@
 ______  @
(  ___ \\ @
| (___) )@
|  ___ / @
| (___)\\ @
| |\\___/ @
| )      @
|/       @
         @@
`,Zf=`flf2a$ 4 4 8 0 14 0 8256
Graceful-6x4 by Mikhael Goikhman, http://migo.n3.net/, 20/Jan/2002.

Why did I make this font? Most of the figlet fonts are ugly for my taste.
Chars ".", "'" or "|" are not as graceful as "(", ")", "/", "\\" and "_".
Also most of the fonts unlike this one are either small or good, not both.
And finally, I wanted to have a strictly sized font, this one is 6x4.
I intended to create this elegant figlet font in 1996, but only in
January 2002 actually had the time to bring it to the working state. :)
Cyrillic letters are supported, maybe somewhen I will add hebrew latters.
To get a monospaced font 6x4, use "figlet -f graceful -m -1". Enjoy!

Permission is hereby given to modify this font, as long as the
modifier's name is added to this comment.

$$    @
$$    @
$$    @
$$    @@
  _   @
 / \\  @
 \\_/  @
 (_)  @@
  _ _ @
 (/(/ @
      @
      @@
 _  _ @
/ )( \\@
)    (@
\\_)(_/@@
 ____ @
/ (__)@
\\__  \\@
(__)_/@@
 _ _  @
(// ) @
 / /_ @
(_/(/ @@
  ___ @
 ( _ \\@
/ _  /@
\\__\\_)@@
   _  @
  (/  @
      @
      @@
   _  @
  / ) @
 ( (  @
  \\_) @@
  _   @
 ( \\  @
  ) ) @
 (_/  @@
      @
(\\/\\/)@
 )  ( @
(/\\/\\)@@
  _   @
 ( )  @
(_ _) @
 (_)  @@
      @
  _   @
 ( )  @
 (/   @@
      @
 ___  @
(___) @
      @@
      @
      @
  _   @
 (_)  @@
   _  @
  / ) @
 / /  @
(_/   @@
  __  @
 /  \\ @
(  0 )@
 \\__/ @@
  __  @
 /  \\ @
(_/ / @
 (__) @@
 ____ @
(___ \\@
 / __/@
(____)@@
 ____ @
( __ \\@
 (__ (@
(____/@@
  ___ @
 / _ \\@
(__  (@
  (__/@@
  ___ @
 / __)@
(___ \\@
(____/@@
  ___ @
 / __)@
(  _ \\@
 \\___/@@
 ____ @
(__  )@
  / / @
 (_/  @@
 ____ @
/ _  \\@
) _  (@
\\____/@@
 ___  @
/ _ \\ @
\\__  )@
(___/ @@
  _   @
 (_)  @
  _   @
 (_)  @@
  _   @
 (_)  @
 ( )  @
 (/   @@
   __ @
  / / @
 ( (  @
  \\_\\ @@
 ___  @
(___) @
 ___  @
(___) @@
 __   @
 \\ \\  @
  ) ) @
 /_/  @@
 ___  @
(__ \\ @
 (__/ @
 (_)  @@
  ___ @
 /   \\@
( (__/@
 \\___)@@
  __  @
 / _\\ @
/    \\@
\\_/\\_/@@
 ____ @
(  _ \\@
 ) _ (@
(____/@@
  ___ @
 / __)@
( (__ @
 \\___)@@
 ____ @
(    \\@
 ) D (@
(____/@@
 ____ @
(  __)@
 ) _) @
(____)@@
 ____ @
(  __)@
 ) _) @
(__)  @@
  ___ @
 / __)@
( (_ \\@
 \\___/@@
 _  _ @
/ )( \\@
) __ (@
\\_)(_/@@
  __  @
 (  ) @
  )(  @
 (__) @@
   __ @
 _(  )@
/ \\) \\@
\\____/@@
 __ _ @
(  / )@
 )  ( @
(__\\_)@@
 __   @
(  )  @
/ (_/\\@
\\____/@@
 _  _ @
( \\/ )@
/ \\/ \\@
\\_)(_/@@
 __ _ @
(  ( \\@
/    /@
\\_)__)@@
  __  @
 /  \\ @
(  O )@
 \\__/ @@
 ____ @
(  _ \\@
 ) __/@
(__)  @@
  __  @
 /  \\ @
(  O )@
 \\__\\)@@
 ____ @
(  _ \\@
 )   /@
(__\\_)@@
 ____ @
/ ___)@
\\___ \\@
(____/@@
 ____ @
(_  _)@
  )(  @
 (__) @@
 _  _ @
/ )( \\@
) \\/ (@
\\____/@@
 _  _ @
/ )( \\@
\\ \\/ /@
 \\__/ @@
 _  _ @
/ )( \\@
\\ /\\ /@
(_/\\_)@@
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
 _  _ @
( \\/ )@
 )  / @
(__/  @@
 ____ @
(__  )@
 / _/ @
(____)@@
 ___  @
/  _) @
) (_  @
\\___) @@
 _    @
( \\   @
 \\ \\  @
  \\_) @@
  ___ @
 (_  \\@
  _) (@
 (___/@@
  __  @
 /  \\ @
(_/\\_)@
      @@
      @
      @
 ____ @
(____)@@
  _   @
  \\)  @
      @
      @@
  __  @
 / _\\ @
/    \\@
\\_/\\_/@@
 ____ @
(  _ \\@
 ) _ (@
(____/@@
  ___ @
 / __)@
( (__ @
 \\___)@@
 ____ @
(    \\@
 ) D (@
(____/@@
 ____ @
(  __)@
 ) _) @
(____)@@
 ____ @
(  __)@
 ) _) @
(__)  @@
  ___ @
 / __)@
( (_ \\@
 \\___/@@
 _  _ @
/ )( \\@
) __ (@
\\_)(_/@@
  __  @
 (  ) @
  )(  @
 (__) @@
   __ @
 _(  )@
/ \\) \\@
\\____/@@
 __ _ @
(  / )@
 )  ( @
(__\\_)@@
 __   @
(  )  @
/ (_/\\@
\\____/@@
 _  _ @
( \\/ )@
/ \\/ \\@
\\_)(_/@@
 __ _ @
(  ( \\@
/    /@
\\_)__)@@
  __  @
 /  \\ @
(  O )@
 \\__/ @@
 ____ @
(  _ \\@
 ) __/@
(__)  @@
  __  @
 /  \\ @
(  O )@
 \\__\\)@@
 ____ @
(  _ \\@
 )   /@
(__\\_)@@
 ____ @
/ ___)@
\\___ \\@
(____/@@
 ____ @
(_  _)@
  )(  @
 (__) @@
 _  _ @
/ )( \\@
) \\/ (@
\\____/@@
 _  _ @
/ )( \\@
\\ \\/ /@
 \\__/ @@
 _  _ @
/ )( \\@
\\ /\\ /@
(_/\\_)@@
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
 _  _ @
( \\/ )@
 )  / @
(__/  @@
 ____ @
(__  )@
 / _/ @
(____)@@
  ___ @
 (  _)@
(_ (_ @
 (___)@@
  _   @
 ( \\  @
 / /  @
 \\_)  @@
 ___  @
(_  ) @
 _) _)@
(___) @@
 __   @
(_ \\_ @
  \\__)@
      @@
$     @
$     @
$     @
$     @@
$     @
$     @
$     @
$     @@
$     @
$     @
$     @
$     @@
$     @
$     @
$     @
$     @@
$     @
$     @
$     @
$     @@
$     @
$     @
$     @
$     @@
$     @
$     @
$     @
$     @@
0x0401  CYRILLIC CAPITAL LETTER IO
 _--_ @
(  __)@
 ) _) @
(____)@@
0x0410  CYRILLIC CAPITAL LETTER A
  __  @
 / _\\ @
/    \\@
\\_/\\_/@@
0x0411  CYRILLIC CAPITAL LETTER BE
 ____ @
(  __)@
 ) _ \\@
(____/@@
0x0412  CYRILLIC CAPITAL LETTER VE
 ____ @
(  _ \\@
 ) _ (@
(____/@@
0x0413  CYRILLIC CAPITAL LETTER GHE
 ____ @
/  __)@
) (   @
\\_/   @@
0x0414  CYRILLIC CAPITAL LETTER DE
 ____ @
/ __ \\@
\\_  _/@
(_)(_)@@
0x0415  CYRILLIC CAPITAL LETTER IE
 ____ @
(  __)@
 ) _) @
(____)@@
0x0416  CYRILLIC CAPITAL LETTER ZHE
  _ _ @
/( ( \\@
)    (@
\\_)_)/@@
0x0417  CYRILLIC CAPITAL LETTER ZE
 ____ @
( __ \\@
 (__ (@
(____/@@
0x0418  CYRILLIC CAPITAL LETTER I
 _ __ @
/ )  )@
\\    \\@
(__(_/@@
0x0419  CYRILLIC CAPITAL LETTER SHORT I
 _ u_ @
/ )  )@
\\    \\@
(__(_/@@
0x041A  CYRILLIC CAPITAL LETTER KA
 __ _ @
(  / )@
 )  ( @
(__\\_)@@
0x041B  CYRILLIC CAPITAL LETTER EL
  __  @
 /  \\ @
/ /\\ \\@
\\_)(_/@@
0x041C  CYRILLIC CAPITAL LETTER EM
 _  _ @
( \\/ )@
/ \\/ \\@
\\_)(_/@@
0x041D  CYRILLIC CAPITAL LETTER EN
 _  _ @
/ )( \\@
) __ (@
\\_)(_/@@
0x041E  CYRILLIC CAPITAL LETTER O
  __  @
 /  \\ @
(  O )@
 \\__/ @@
0x041F  CYRILLIC CAPITAL LETTER PE
 ____ @
/    \\@
) /\\ (@
\\_)(_/@@
0x0420  CYRILLIC CAPITAL LETTER ER
 ____ @
(  _ \\@
 ) __/@
(__)  @@
0x0421  CYRILLIC CAPITAL LETTER ES
  ___ @
 / __)@
( (__ @
 \\___)@@
0x0422  CYRILLIC CAPITAL LETTER TE
 ____ @
(_  _)@
  )(  @
 (__) @@
0x0423  CYRILLIC CAPITAL LETTER U
 _  _ @
( \\/ )@
 )  / @
(__/  @@
0x0424  CYRILLIC CAPITAL LETTER EF
 ____ @
/ __ \\@
\\_  _/@
 (__) @@
0x0425  CYRILLIC CAPITAL LETTER HA
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
0x0426  CYRILLIC CAPITAL LETTER TSE
 _  _ @
/ \\( \\@
) (/ (@
\\___\\/@@
0x0427  CYRILLIC CAPITAL LETTER CHE
 __ _ @
/ (/ \\@
\\__  (@
  (__/@@
0x0428  CYRILLIC CAPITAL LETTER SHA
 _ _  @
( ) ))@
/( ( \\@
\\____/@@
0x0429  CYRILLIC CAPITAL LETTER SHCHA
 _ _  @
( ) ))@
/( ( \\@
\\___\\/@@
0x042A  CYRILLIC CAPITAL LETTER HARD SIGN
 __   @
(_ )_ @
 / _ \\@
 \\___/@@
0x042B  CYRILLIC CAPITAL LETTER YERU
 _  _ @
( )( )@
/ _ \\\\@
\\___//@@
0x042C  CYRILLIC CAPITAL LETTER SOFT SIGN
 __   @
(  )_ @
 ) _ \\@
(____/@@
0x042D  CYRILLIC CAPITAL LETTER E
 ___  @
(__ \\ @
 (_  )@
(___/ @@
0x042E  CYRILLIC CAPITAL LETTER YU
 _ __ @
/ /  \\@
)   O(@
\\_\\__/@@
0x042F  CYRILLIC CAPITAL LETTER YA
 ____ @
/ _  )@
\\    \\@
(_/__/@@
0x0430  CYRILLIC SMALL LETTER A
  __  @
 / _\\ @
/    \\@
\\_/\\_/@@
0x0431  CYRILLIC SMALL LETTER BE
 ____ @
(  __)@
 ) _ \\@
(____/@@
0x0432  CYRILLIC SMALL LETTER VE
 ____ @
(  _ \\@
 ) _ (@
(____/@@
0x0433  CYRILLIC SMALL LETTER GHE
 ____ @
/  __)@
) (   @
\\_/   @@
0x0434  CYRILLIC SMALL LETTER DE
 ____ @
/ __ \\@
\\_  _/@
(_)(_)@@
0x0435  CYRILLIC SMALL LETTER IE
 ____ @
(  __)@
 ) _) @
(____)@@
0x0436  CYRILLIC SMALL LETTER ZHE
  _ _ @
/( ( \\@
)    (@
\\_)_)/@@
0x0437  CYRILLIC SMALL LETTER ZE
 ____ @
( __ \\@
 (__ (@
(____/@@
0x0438  CYRILLIC SMALL LETTER I
 _ __ @
/ )  )@
\\    \\@
(__(_/@@
0x0439  CYRILLIC SMALL LETTER SHORT I
 _ u_ @
/ )  )@
\\    \\@
(__(_/@@
0x043A  CYRILLIC SMALL LETTER KA
 __ _ @
(  / )@
 )  ( @
(__\\_)@@
0x043B  CYRILLIC SMALL LETTER EL
  __  @
 /  \\ @
/ /\\ \\@
\\_)(_/@@
0x043C  CYRILLIC SMALL LETTER EM
 _  _ @
( \\/ )@
/ \\/ \\@
\\_)(_/@@
0x043D  CYRILLIC SMALL LETTER EN
 _  _ @
/ )( \\@
) __ (@
\\_)(_/@@
0x043E  CYRILLIC SMALL LETTER O
  __  @
 /  \\ @
(  O )@
 \\__/ @@
0x043F  CYRILLIC SMALL LETTER PE
 ____ @
/    \\@
) /\\ (@
\\_)(_/@@
0x0440  CYRILLIC SMALL LETTER ER
 ____ @
(  _ \\@
 ) __/@
(__)  @@
0x0441  CYRILLIC SMALL LETTER ES
  ___ @
 / __)@
( (__ @
 \\___)@@
0x0442  CYRILLIC SMALL LETTER TE
 ____ @
(_  _)@
  )(  @
 (__) @@
0x0443  CYRILLIC SMALL LETTER U
 _  _ @
( \\/ )@
 )  / @
(__/  @@
0x0444  CYRILLIC SMALL LETTER EF
 ____ @
/ __ \\@
\\_  _/@
 (__) @@
0x0445  CYRILLIC SMALL LETTER HA
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
0x0446  CYRILLIC SMALL LETTER TSE
 _  _ @
/ \\( \\@
) (/ (@
\\___\\/@@
0x0447  CYRILLIC SMALL LETTER CHE
 __ _ @
/ (/ \\@
\\__  (@
  (__/@@
0x0448  CYRILLIC SMALL LETTER SHA
 _ _  @
( ) ))@
/( ( \\@
\\____/@@
0x0449  CYRILLIC SMALL LETTER SHCHA
 _ _  @
( ) ))@
/( ( \\@
\\___\\/@@
0x044A  CYRILLIC SMALL LETTER HARD SIGN
 __   @
(_ )_ @
 / _ \\@
 \\___/@@
0x044B  CYRILLIC SMALL LETTER YERU
 _  _ @
( )( )@
/ _ \\\\@
\\___//@@
0x044C  CYRILLIC SMALL LETTER SOFT SIGN
 __   @
(  )_ @
 ) _ \\@
(____/@@
0x044D  CYRILLIC SMALL LETTER E
 ___  @
(__ \\ @
 (_  )@
(___/ @@
0x044E  CYRILLIC SMALL LETTER YU
 _ __ @
/ /  \\@
)   O(@
\\_\\__/@@
0x044F  CYRILLIC SMALL LETTER YA
 ____ @
/ _  )@
\\    \\@
(_/__/@@
0x0451  CYRILLIC SMALL LETTER IO
 _--_ @
(  __)@
 ) _) @
(____)@@
`,qf=`flf2a$ 6 5 32 15 10
Font name is graffiti.flf
This figlet font designed by Leigh Purdie (purdie@zeus.usq.edu.au)
'fig-fonted' by Leigh Purdie and Tim Maggio (tim@claremont.com)
Date: 5 Mar 1994

---

Font modified May 20, 2012 by patorjk 
- Changed the hardblanks around certain punctuation characters (., and -) to improve smushing.
- Added the 0xCA0 character
$@
$@
$@
$@
$@
$@@
._.@
| |@
| |@
 \\|@
 __@
 \\/@@
/\\/\\@
)/)/@
    @
    @
    @
    @@
   _  _   @
__| || |__@
\\   __   /@
 |  ||  | @
/_  ~~  _\\@
  |_||_|  @@
  ____/\\__@
 /   / /_/@
 \\__/ / \\ @
 / / /   \\@
/_/ /__  /@
  \\/   \\/ @@
 _   /\\ @
/ \\ / / @
\\_// /_ @
  / // \\@
 / / \\_/@
 \\/     @@
  ____   @
 /  _ \\  @
 >  _ </\\@
/  <_\\ \\/@
\\_____\\ \\@
       \\/@@
/\\@
)/@
  @
  @
  @
  @@
$   ___$@
$  /  /$@
$ /  / $@
$(  (  $@
$ \\  \\ $@
$  \\__\\$@@
$___   $@
$\\  \\  $@
$ \\  \\ $@
$  )  )$@
$ /  / $@
$/__/  $@@
$         $@
$ /\\|\\/\\  $@
$_)    (__$@
$\\_     _/$@
$  )    \\ $@
$  \\/\\|\\/ $@@
$          $@
$   .__    $@
$ __|  |___$@
$/__    __/$@
$   |__|   $@
$          $@@
    @
    @
    @
    @
$/\\$@
$)/$@@
         @
         @
$ ______$@
$/_____/$@
$       $@
         @@
    @
    @
    @
    @
$/\\$@
$\\/$@@
$    /\\$@
$   / /$@
$  / / $@
$ / /  $@
$/ /   $@
$\\/    $@@
_______   @
\\   _  \\  @
/  /_\\  \\ @
\\  \\_/   \\@
 \\_____  /@
       \\/ @@
 ____ @
/_   |@
 |   |@
 |   |@
 |___|@
      @@
________  @
\\_____  \\ @
 /  ____/ @
/       \\ @
\\_______ \\@
        \\/@@
________  @
\\_____  \\ @
  _(__  < @
 /       \\@
/______  /@
       \\/ @@
   _____  @
  /  |  | @
 /   |  |_@
/    ^   /@
\\____   | @
     |__| @@
 .________@
 |   ____/@
 |____  \\ @
 /       \\@
/______  /@
       \\/ @@
  ________@
 /  _____/@
/   __  \\ @
\\  |__\\  \\@
 \\_____  /@
       \\/ @@
_________ @
\\______  \\@
    /    /@
   /    / @
  /____/  @
          @@
  ______  @
 /  __  \\ @
 >      < @
/   --   \\@
\\______  /@
       \\/ @@
 ________ @
/   __   \\@
\\____    /@
   /    / @
  /____/  @
          @@
$  $@
$/\\$@
$\\/$@
$/\\$@
$\\/$@
$  $@@
$  $@
$/\\$@
$\\/$@
$/\\$@
$)/$@
$  $@@
$  __$@
$ / /$@
$/ / $@
$\\ \\ $@
$ \\_\\$@
$    $@@
$       $@
$ ______$@
$/_____/$@
$/_____/$@
$       $@
$       $@@
$__  $@
$\\ \\ $@
$ \\ \\$@
$ / /$@
$/_/ $@
$    $@@
_________ @
\\_____   \\@
   /   __/@
  |   |   @
  |___|   @
  <___>   @@
   _____  @
  / ___ \\ @
 / / ._\\ \\@
<  \\_____/@
 \\_____\\  @
          @@
   _____   @
  /  _  \\  @
 /  /_\\  \\ @
/    |    \\@
\\____|__  /@
        \\/ @@
__________ @
\\______   \\@
 |    |  _/@
 |    |   \\@
 |______  /@
        \\/ @@
_________  @
\\_   ___ \\ @
/    \\  \\/ @
\\     \\____@
 \\______  /@
        \\/ @@
________   @
\\______ \\  @
 |    |  \\ @
 |    \`   \\@
/_______  /@
        \\/ @@
___________@
\\_   _____/@
 |    __)_ @
 |        \\@
/_______  /@
        \\/ @@
___________@
\\_   _____/@
 |    __)  @
 |     \\   @
 \\___  /   @
     \\/    @@
  ________ @
 /  _____/ @
/   \\  ___ @
\\    \\_\\  \\@
 \\______  /@
        \\/ @@
  ___ ___  @
 /   |   \\ @
/    ~    \\@
\\    Y    /@
 \\___|_  / @
       \\/  @@
.___ @
|   |@
|   |@
|   |@
|___|@
     @@
     ____.@
    |    |@
    |    |@
/\\__|    |@
\\________|@
          @@
 ____  __.@
|    |/ _|@
|      <  @
|    |  \\ @
|____|__ \\@
        \\/@@
.____     @
|    |    @
|    |    @
|    |___ @
|_______ \\@
        \\/@@
   _____   @
  /     \\  @
 /  \\ /  \\ @
/    Y    \\@
\\____|__  /@
        \\/ @@
 _______   @
 \\      \\  @
 /   |   \\ @
/    |    \\@
\\____|__  /@
        \\/ @@
________   @
\\_____  \\  @
 /   |   \\ @
/    |    \\@
\\_______  /@
        \\/ @@
__________ @
\\______   \\@
 |     ___/@
 |    |    @
 |____|    @
           @@
________   @
\\_____  \\  @
 /  / \\  \\ @
/   \\_/.  \\@
\\_____\\ \\_/@
       \\__>@@
__________ @
\\______   \\@
 |       _/@
 |    |   \\@
 |____|_  /@
        \\/ @@
  _________@
 /   _____/@
 \\_____  \\ @
 /        \\@
/_______  /@
        \\/ @@
___________@
\\__    ___/@
  |    |   @
  |    |   @
  |____|   @
           @@
 ____ ___ @
|    |   \\@
|    |   /@
|    |  / @
|______/  @
          @@
____   ____@
\\   \\ /   /@
 \\   Y   / @
  \\     /  @
   \\___/   @
           @@
 __      __ @
/  \\    /  \\@
\\   \\/\\/   /@
 \\        / @
  \\__/\\  /  @
       \\/   @@
____  ___@
\\   \\/  /@
 \\     / @
 /     \\ @
/___/\\  \\@
      \\_/@@
_____.___.@
\\__  |   |@
 /   |   |@
 \\____   |@
 / ______|@
 \\/       @@
__________@
\\____    /@
  /     / @
 /     /_ @
/_______ \\@
        \\/@@
$.____ $@
$|   _|$@
$|  |  $@
$|  |  $@
$|  |_ $@
$|____|$@@
/\\    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\ \\@
    \\/@@
$ ____.$@
$|_   |$@
$  |  |$@
$  |  |$@
$ _|  |$@
$|____|$@@
$ /\\ $@
$/  \\$@
$\\/\\/$@
$    $@
$    $@
$    $@@
       @
       @
       @
       @
 ______@
/_____/@@
/\\@
\\(@
  @
  @
  @
  @@
        @
_____   @
\\__  \\  @
 / __ \\_@
(____  /@
     \\/ @@
___.    @
\\_ |__  @
 | __ \\ @
 | \\_\\ \\@
 |___  /@
     \\/ @@
        @
  ____  @
_/ ___\\ @
\\  \\___ @
 \\___  >@
     \\/ @@
    .___@
  __| _/@
 / __ | @
/ /_/ | @
\\____ | @
     \\/ @@
        @
  ____  @
_/ __ \\ @
\\  ___/ @
 \\___  >@
     \\/ @@
  _____ @
_/ ____\\@
\\   __\\ @
 |  |   @
 |__|   @
        @@
         @
   ____  @
  / ___\\ @
 / /_/  >@
 \\___  / @
/_____/  @@
.__     @
|  |__  @
|  |  \\ @
|   Y  \\@
|___|  /@
     \\/ @@
.__ @
|__|@
|  |@
|  |@
|__|@
    @@
     __ @
    |__|@
    |  |@
    |  |@
/\\__|  |@
\\______|@@
 __    @
|  | __@
|  |/ /@
|    < @
|__|_ \\@
     \\/@@
.__   @
|  |  @
|  |  @
|  |__@
|____/@
      @@
         @
  _____  @
 /     \\ @
|  Y Y  \\@
|__|_|  /@
      \\/ @@
        @
  ____  @
 /    \\ @
|   |  \\@
|___|  /@
     \\/ @@
        @
  ____  @
 /  _ \\ @
(  <_> )@
 \\____/ @
        @@
        @
______  @
\\____ \\ @
|  |_> >@
|   __/ @
|__|    @@
        @
  ______@
 / ____/@
< <_|  |@
 \\__   |@
    |__|@@
        @
_______ @
\\_  __ \\@
 |  | \\/@
 |__|   @
        @@
        @
  ______@
 /  ___/@
 \\___ \\ @
/____  >@
     \\/ @@
  __   @
_/  |_ @
\\   __\\@
 |  |  @
 |__|  @
       @@
       @
 __ __ @
|  |  \\@
|  |  /@
|____/ @
       @@
       @
___  __@
\\  \\/ /@
 \\   / @
  \\_/  @
       @@
         @
__  _  __@
\\ \\/ \\/ /@
 \\     / @
  \\/\\_/  @
         @@
        @
___  ___@
\\  \\/  /@
 >    < @
/__/\\_ \\@
      \\/@@
        @
 ___.__.@
<   |  |@
 \\___  |@
 / ____|@
 \\/     @@
        @
________@
\\___   /@
 /    / @
/_____ \\@
      \\/@@
$ ___$@
$/ / $@
$\\ \\ $@
$< < $@
$/ / $@
$\\_\\_$@@
$._.$@
$| |$@
$|_|$@
$|-|$@
$| |$@
$|_|$@@
$___ $@
$ \\ \\$@
$ / /$@
$ > >$@
$ \\ \\$@
$_/_/$@@
$ ___    $@
$/ _ \\_/\\$@
$\\/ \\___/$@
$        $@
$        $@
$        $@@
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
@@
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
@@
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
@@
@
@
@
@
@
@@
0xCA0  KANNADA LETTER TTHA
  _____)@
 /_____/@
 /    \\ @
(  ()  )@
$\\____/$@
        @@`,_d=`flf2a$ 8 7 16 0 24 0 64 0
Author : LG Beard
Date   : 2005/5/7 18:52:57
Version: 1.0
---------------------------------------------------------------
  ___      ___   _______   _______   ___      __   _____  ___
 ("  \\    /"  | /"      | /"      \\ |"  |    |" \\ (\\"   \\|"  \\
  \\   \\  //   |(: ______)|:        |||  |    ||  ||.\\\\   \\    |
  /\\\\  \\/.    | \\/      ||_____/   )|:  |    |:  ||: \\.   \\\\  |
 |: \\.        | // _____) //      /  \\  |___ |.  ||.  \\    \\. |
 |.  \\    /:  |(:       ||:  __   \\ ( \\_|:  \\|   ||    \\    \\ |
 |___|\\__/|___| \\_______)|__|  \\___) \\_______)\\___)\\___|\\____\\)

Font built from a sig dated 17 Feb 1995
---------------------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
$  $#
$  $#
$  $#
$  $#
$  $#
$  $#
$  $#
$  $##
    ___  #
   |"  | #
   ||  | #
   |:  | #
  _|  /  #
 / |_/ ) #
(_____/  #
         ##
  ____ _____  #
 ))_ ")))_ ") #
(____((____(  #
              #
              #
              #
              #
              ##
##
 #
 #
 #
 #
 #
 #
 ##
$#
 #
 #
 #
 #
 #
 #
 ##
  ____  ___   #
 ))_ ")/"  |  #
(____(/  //   #
     /'  /    #
    //  /____ #
   /  //))_ ")#
  |___/(____( #
              ##
&#
 #
 #
 #
 #
 #
 #
 ##
  ____  #
 ))_ ") #
(____(  #
        #
        #
        #
        #
        ##
    ____  #
   /   ") #
  /. __/  #
 // /     #
(: (___   #
 \\     )  #
  \\"__/   #
          ##
  ____    #
 (  " \\   #
  \\__. \\  #
     ) :) #
  __/ //  #
 /"   /   #
(____/    #
          ##
*#
 #
 #
 #
 #
 #
 #
 ##
  _______  #
 ))_    ") #
(_______(  #
 ________  #
 ))_    ") #
(_______(  #
           #
           ##
         #
         #
         #
         #
  _____  #
 //   ") #
(_____/  #
         ##
-#
 #
 #
 #
 #
 #
 #
 ##
         #
         #
         #
         #
  _____  #
 ))_  ") #
(_____(  #
         ##
      ___  #
     /"  | #
    /  //  #
   /'  /   #
  //  /    #
 /  //     #
|___/      #
           ##
    ______    #
   /    " \\   #
  // ____  \\  #
 /  /    ) :) #
(: (____/ //  #
 \\        /   #
  \\"_____/    #
              ##
   ____    #
  /  " \\   #
 /__|| |   #
    |: |   #
   _\\  |   #
  /" \\_|\\  #
 (_______) #
           ##
  _______    #
 /"     "\\   #
(__/\\    :)  #
    / ___/   #
   // \\___   #
  (:  /  "\\  #
   \\_______) #
             ##
  _______  #
 /" __   ) #
(__/ _) ./ #
    /  //  #
 __ \\_ \\\\  #
(: \\__) :\\ #
 \\_______) #
           ##
 ___  ___    #
(: "||_  |   #
|  (__) :|   #
 \\____  ||   #
     _\\ '|   #
    /" \\_|\\  #
   (_______) #
             ##
   ________  #
  /"      ") #
 (:   //\\_/  #
  \\___ \\     #
  __ | \\\\    #
 /" \\/  :)   #
(_______/    #
             ##
    ___     #
   /. ")    #
  /:  /     #
 //  /___   #
(   / _  \\  #
|:   /_) :) #
 \\_______/  #
            ##
 _________  #
("       "\\ #
 \\___/   :/ #
    /   //  #
  __\\  ./   #
 (:  \\_/ \\  #
  \\_______) #
            ##
  _______   #
 /"  _  \\\\  #
|:  _ /  :| #
 \\___/___/  #
 //  /_ \\\\  #
|:  /_   :| #
 \\_______/  #
            ##
  _______    #
 /" _   "\\   #
(: (_/  :|   #
 \\____/ |)   #
    _\\  '|   #
   /" \\__|\\  #
  (________) #
             ##
  ____  #
 ))_ ") #
(____(  #
 _____  #
 ))_ ") #
(____(  #
        #
        ##
   ____  #
  ))_ ") #
 (____(  #
  ____   #
 //  ")  #
(____/   #
         #
         ##
            #
   _______  #
 _/"     ") #
//   /___/  #
\\\\   \\   \\  #
  \\_______) #
            #
            ##
=#
 #
 #
 #
 #
 #
 #
 ##
            #
 _______    #
("     "\\_  #
 \\___\\   \\\\ #
 /   /   // #
(_______/   #
            #
            ##
 ________   #
("      "\\  #
 \\___/   :) #
   /  ___/  #
  //  \\     #
 ('___/     #
  (___)     #
            ##
@#
 #
 #
 #
 #
 #
 #
 ##
      __      #
     /""\\     #
    /    \\    #
   /' /\\  \\   #
  //  __'  \\  #
 /   /  \\\\  \\ #
(___/    \\___)#
              ##
 _______   #
|   _  "\\  #
(. |_)  :) #
|:     \\/  #
(|  _  \\\\  #
|: |_)  :) #
(_______/  #
           ##
  ______   #
 /" _  "\\  #
(: ( \\___) #
 \\/ \\      #
 //  \\ _   #
(:   _) \\  #
 \\_______) #
           ##
 ________   #
|"      "\\  #
(.  ___  :) #
|: \\   ) || #
(| (___\\ || #
|:       :) #
(________/  #
            ##
  _______  #
 /"     "| #
(: ______) #
 \\/    |   #
 // ___)_  #
(:      "| #
 \\_______) #
           ##
  _______  #
 /"     "| #
(: ______) #
 \\/    |   #
 // ___)   #
(:  (      #
 \\__/      #
           ##
  _______   #
 /" _   "|  #
(: ( \\___)  #
 \\/ \\       #
 //  \\ ___  #
(:   _(  _| #
 \\_______)  #
            ##
  __    __   #
 /" |  | "\\  #
(:  (__)  :) #
 \\/      \\/  #
 //  __  \\\\  #
(:  (  )  :) #
 \\__|  |__/  #
             ##
  __     #
 |" \\    #
 ||  |   #
 |:  |   #
 |.  |   #
 /\\  |\\  #
(__\\_|_) #
         ##
      ___  #
     |"  | #
     ||  | #
     |:  | #
  ___|  /  #
 /  :|_/ ) #
(_______/  #
           ##
 __   ___  #
|/"| /  ") #
(: |/   /  #
|    __/   #
(// _  \\   #
|: | \\  \\  #
(__|  \\__) #
           ##
 ___       #
|"  |      #
||  |      #
|:  |      #
 \\  |___   #
( \\_|:  \\  #
 \\_______) #
           ##
 ___      ___ #
|"  \\    /"  |#
 \\   \\  //   |#
 /\\\\  \\/.    |#
|: \\.        |#
|.  \\    /:  |#
|___|\\__/|___|#
              ##
 _____  ___   #
(\\"   \\|"  \\  #
|.\\\\   \\    | #
|: \\.   \\\\  | #
|.  \\    \\. | #
|    \\    \\ | #
 \\___|\\____\\) #
              ##
    ______    #
   /    " \\   #
  // ____  \\  #
 /  /    ) :) #
(: (____/ //  #
 \\        /   #
  \\"_____/    #
              ##
   _______   #
  |   __ "\\  #
  (. |__) :) #
  |:  ____/  #
  (|  /      #
 /|__/ \\     #
(_______)    #
             ##
    ______    #
   /    " \\   #
  // ____  \\  #
 /  /    )  ) #
(: (____/ //  #
 \\         \\  #
  \\"____/\\__\\ #
              ##
  _______   #
 /"      \\  #
|:        | #
|_____/   ) #
 //      /  #
|:  __   \\  #
|__|  \\___) #
            ##
  ________  #
 /"       ) #
(:   \\___/  #
 \\___  \\    #
  __/  \\\\   #
 /" \\   :)  #
(_______/   #
            ##
 ___________  #
("     _   ") #
 )__/  \\\\__/  #
    \\\\_ /     #
    |.  |     #
    \\:  |     #
     \\__|     #
              ##
 ____  ____  #
("  _||_ " | #
|   (  ) : | #
(:  |  | . ) #
 \\\\ \\__/ //  #
 /\\\\ __ //\\  #
(__________) #
             ##
 ___      ___ #
|"  \\    /"  |#
 \\   \\  //  / #
  \\\\  \\/. ./  #
   \\.    //   #
    \\\\   /    #
     \\__/     #
              ##
 __   __  ___ #
|"  |/  \\|  "|#
|'  /    \\:  |#
|: /'        |#
 \\//  /\\'    |#
 /   /  \\\\   |#
|___/    \\___|#
              ##
 ___  ___  #
|"  \\/"  | #
 \\   \\  /  #
  \\\\  \\/   #
  /\\.  \\   #
 /  \\   \\  #
|___/\\___| #
           ##
 ___  ___  #
|"  \\/"  | #
 \\   \\  /  #
  \\\\  \\/   #
  /   /    #
 /   /     #
|___/      #
           ##
 ________   #
("      "\\  #
 \\___/   :) #
   /  ___/  #
  //  \\__   #
 (:   / "\\  #
  \\_______) #
            ##
  ________  #
 /"      ") #
(:   \\___/  #
//   /      #
\\\\   \\___   #
(:   /  "\\  #
 \\________) #
            ##
 ___       #
|  "\\      #
 \\\\  \\     #
  \\  '\\    #
   \\  \\\\   #
    \\\\  \\  #
     \\___| #
           ##
 ________   #
("      "\\  #
 \\___/   :) #
     \\   \\\\ #
  ___/   // #
 /"  \\   :) #
(________/  #
            ##
   __    #
  /""\\   #
 //   \\  #
/'_/\\_\\\\ #
         #
         #
         #
         ##
_#
 #
 #
 #
 #
 #
 #
 ##
 _____   #
("   \\\\  #
 \\_____) #
         #
         #
         #
         #
         ##
      __      #
     /""\\     #
    /    \\    #
   /' /\\  \\   #
  //  __'  \\  #
 /   /  \\\\  \\ #
(___/    \\___)#
              ##
 _______   #
|   _  "\\  #
(. |_)  :) #
|:     \\/  #
(|  _  \\\\  #
|: |_)  :) #
(_______/  #
           ##
  ______   #
 /" _  "\\  #
(: ( \\___) #
 \\/ \\      #
 //  \\ _   #
(:   _) \\  #
 \\_______) #
           ##
 ________   #
|"      "\\  #
(.  ___  :) #
|: \\   ) || #
(| (___\\ || #
|:       :) #
(________/  #
            ##
  _______  #
 /"     "| #
(: ______) #
 \\/    |   #
 // ___)_  #
(:      "| #
 \\_______) #
           ##
  _______  #
 /"     "| #
(: ______) #
 \\/    |   #
 // ___)   #
(:  (      #
 \\__/      #
           ##
  _______   #
 /" _   "|  #
(: ( \\___)  #
 \\/ \\       #
 //  \\ ___  #
(:   _(  _| #
 \\_______)  #
            ##
  __    __   #
 /" |  | "\\  #
(:  (__)  :) #
 \\/      \\/  #
 //  __  \\\\  #
(:  (  )  :) #
 \\__|  |__/  #
             ##
  __     #
 |" \\    #
 ||  |   #
 |:  |   #
 |.  |   #
 /\\  |\\  #
(__\\_|_) #
         ##
      ___  #
     |"  | #
     ||  | #
     |:  | #
  ___|  /  #
 /  :|_/ ) #
(_______/  #
           ##
 __   ___  #
|/"| /  ") #
(: |/   /  #
|    __/   #
(// _  \\   #
|: | \\  \\  #
(__|  \\__) #
           ##
 ___       #
|"  |      #
||  |      #
|:  |      #
 \\  |___   #
( \\_|:  \\  #
 \\_______) #
           ##
 ___      ___ #
|"  \\    /"  |#
 \\   \\  //   |#
 /\\\\  \\/.    |#
|: \\.        |#
|.  \\    /:  |#
|___|\\__/|___|#
              ##
 _____  ___   #
(\\"   \\|"  \\  #
|.\\\\   \\    | #
|: \\.   \\\\  | #
|.  \\    \\. | #
|    \\    \\ | #
 \\___|\\____\\) #
              ##
    ______    #
   /    " \\   #
  // ____  \\  #
 /  /    ) :) #
(: (____/ //  #
 \\        /   #
  \\"_____/    #
              ##
   _______   #
  |   __ "\\  #
  (. |__) :) #
  |:  ____/  #
  (|  /      #
 /|__/ \\     #
(_______)    #
             ##
    ______    #
   /    " \\   #
  // ____  \\  #
 /  /    )  ) #
(: (____/ //  #
 \\         \\  #
  \\"____/\\__\\ #
              ##
  _______   #
 /"      \\  #
|:        | #
|_____/   ) #
 //      /  #
|:  __   \\  #
|__|  \\___) #
            ##
  ________  #
 /"       ) #
(:   \\___/  #
 \\___  \\    #
  __/  \\\\   #
 /" \\   :)  #
(_______/   #
            ##
 ___________  #
("     _   ") #
 )__/  \\\\__/  #
    \\\\_ /     #
    |.  |     #
    \\:  |     #
     \\__|     #
              ##
 ____  ____  #
("  _||_ " | #
|   (  ) : | #
(:  |  | . ) #
 \\\\ \\__/ //  #
 /\\\\ __ //\\  #
(__________) #
             ##
 ___      ___ #
|"  \\    /"  |#
 \\   \\  //  / #
  \\\\  \\/. ./  #
   \\.    //   #
    \\\\   /    #
     \\__/     #
              ##
 __   __  ___ #
|"  |/  \\|  "|#
|'  /    \\:  |#
|: /'        |#
 \\//  /\\'    |#
 /   /  \\\\   |#
|___/    \\___|#
              ##
 ___  ___  #
|"  \\/"  | #
 \\   \\  /  #
  \\\\  \\/   #
  /\\.  \\   #
 /  \\   \\  #
|___/\\___| #
           ##
 ___  ___  #
|"  \\/"  | #
 \\   \\  /  #
  \\\\  \\/   #
  /   /    #
 /   /     #
|___/      #
           ##
 ________   #
("      "\\  #
 \\___/   :) #
   /  ___/  #
  //  \\__   #
 (:   / "\\  #
  \\_______) #
            ##
  ________  #
 /"      ") #
(:   \\___/  #
 \\\\  /      #
 //  \\___   #
(:   /  "\\  #
 \\________) #
            ##
 __   #
|" \\  #
||  | #
|:  | #
|.  | #
|   | #
\\___) #
      ##
 ________   #
("      "\\  #
 \\___/   :) #
     \\  //  #
  ___/  \\\\  #
 /"  \\   :) #
(________/  #
            ##
~#
 #
 #
 #
 #
 #
 #
 ##
      __      #
     /""\\     #
    /    \\    #
   /' /\\  \\   #
  //  __'  \\  #
 /   /  \\\\  \\ #
(___/    \\___)#
              ##
    ______    #
   /    " \\   #
  // ____  \\  #
 /  /    ) :) #
(: (____/ //  #
 \\        /   #
  \\"_____/    #
              ##
 ____  ____  #
("  _||_ " | #
|   (  ) : | #
(:  |  | . ) #
 \\\\ \\__/ //  #
 /\\\\ __ //\\  #
(__________) #
             ##
      __      #
     /""\\     #
    /    \\    #
   /' /\\  \\   #
  //  __'  \\  #
 /   /  \\\\  \\ #
(___/    \\___)#
              ##
    ______    #
   /    " \\   #
  // ____  \\  #
 /  /    ) :) #
(: (____/ //  #
 \\        /   #
  \\"_____/    #
              ##
 ____  ____  #
("  _||_ " | #
|   (  ) : | #
(:  |  | . ) #
 \\\\ \\__/ //  #
 /\\\\ __ //\\  #
(__________) #
             ##
�#
 #
 #
 #
 #
 #
 #
 ##`,ed=`flf2a$ 7 7 11 -1 16 0 0 0
Author :myflix 
Date   : 2006/4/6 7:38:43
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified May 26, 2012 by patorjk
Made modifications to the "JK" characters.
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
 __  #
|  | #
|  | #
|  | #
|__| #
 __  #
|__| ##
 _  _  #
| || | #
|_||_| #
       #
       #
       #
       ##
##
 #
 #
 #
 #
 #
 ##
$#
 #
 #
 #
 #
 #
 ##
%#
 #
 #
 #
 #
 #
 ##
&#
 #
 #
 #
 #
 #
 ##
 __  #
|  | #
|__| #
     #
     #
     #
     ##
  ____  #
 |    | #
|    _| #
|   |   #
|   |   #
|   |_  #
 |____| ##
 ____   #
|    |  #
|_    | #
  |   | #
  |   | #
 _|   | #
|____|  ##
*#
 #
 #
 #
 #
 #
 ##
   _    #
 _| |_  #
|_   _| #
  |_|   #
        #
        #
        ##
      #
      #
      #
      #
 ___  #
|_  | #
  |_| ##
       #
       #
 ____  #
|____| #
       #
       #
       ##
      #
      #
      #
      #
 ___  #
|   | #
|___| ##
/#
 #
 #
 #
 #
 #
 ##
 _______ #
|  _    |#
| | |   |#
| | |   |#
| |_|   |#
|       |#
|_______|##
 ____  #
|    | #
 |   | #
 |   | #
 |   | #
 |   | #
 |___| ##
 _______ #
|       |#
|____   |#
 ____|  |#
| ______|#
| |_____ #
|_______|##
 _______ #
|       |#
|___    |#
 ___|   |#
|___    |#
 ___|   |#
|_______|##
 _   ___ #
| | |   |#
| |_|   |#
|       |#
|___    |#
    |   |#
    |___|##
 _______ #
|       |#
|   ____|#
|  |____ #
|_____  |#
 _____| |#
|_______|##
 ___     #
|   |    #
|   |___ #
|    _  |#
|   | | |#
|   |_| |#
|_______|##
 _______ #
|       |#
|___    |#
    |   |#
    |   |#
    |   |#
    |___|##
  _____  #
 |  _  | #
 | |_| | #
|   _   |#
|  | |  |#
|  |_|  |#
|_______|##
 _______ #
|  _    |#
| | |   |#
| |_|   |#
|___    |#
    |   |#
    |___|##
 ___  #
|   | #
|___| #
 ___  #
|   | #
|___| #
      ##
 ___  #
|   | #
|___| #
 ___  #
|_  | #
  |_| #
      ##
<#
 #
 #
 #
 #
 #
 ##
 ____  #
|____| #
 ____  #
|____| #
       #
       #
       ##
>#
 #
 #
 #
 #
 #
 ##
 ______  #
|      | #
|___   | #
  __|  | #
 |_____| #
   __    #
  |__|   ##
@#
 #
 #
 #
 #
 #
 ##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|  _    |#
| |_|   |#
|       |#
|  _   | #
| |_|   |#
|_______|##
 _______ #
|       |#
|       |#
|       |#
|      _|#
|     |_ #
|_______|##
 ______  #
|      | #
|  _    |#
| | |   |#
| |_|   |#
|       |#
|______| ##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |___ #
|_______|##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|    ___|#
|   | __ #
|   ||  |#
|   |_| |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 ___  #
|   | #
|   | #
|   | #
|   | #
|   | #
|___| ##
     ___ #
    |   |#
    |   |#
    |   |#
 ___|   |#
|       |#
|_______|##
 ___   _ #
|   | | |#
|   |_| |#
|      _|#
|     |_ #
|    _  |#
|___| |_|##
 ___     #
|   |    #
|   |    #
|   |    #
|   |___ #
|       |#
|_______|##
 __   __ #
|  |_|  |#
|       |#
|       |#
|       |#
| ||_|| |#
|_|   |_|##
 __    _ #
|  |  | |#
|   |_| |#
|       |#
|  _    |#
| | |   |#
|_|  |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 _______ #
|       |#
|    _  |#
|   |_| |#
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|      | #
|____||_|##
 ______   #
|    _ |  #
|   | ||  #
|   |_||_ #
|    __  |#
|   |  | |#
|___|  |_|##
 _______ #
|       |#
|  _____|#
| |_____ #
|_____  |#
 _____| |#
|_______|##
 _______ #
|       |#
|_     _|#
  |   |  #
  |   |  #
  |   |  #
  |___|  ##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
 |     | #
  |___|  ##
 _     _ #
| | _ | |#
| || || |#
|       |#
|       |#
|   _   |#
|__| |__|##
 __   __ #
|  |_|  |#
|       |#
|       |#
 |     | #
|   _   |#
|__| |__|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|_     _|#
  |   |  #
  |___|  ##
 _______ #
|       |#
|____   |#
 ____|  |#
| ______|#
| |_____ #
|_______|##
 _____  #
|     | #
|    _| #
|   |   #
|   |   #
|   |_  #
|_____| ##
\\#
 #
 #
 #
 #
 #
 ##
 _____  #
|     | #
|_    | #
  |   | #
  |   | #
 _|   | #
|_____| ##
  ___   #
 |   |  #
|  _  | #
|_| |_| #
        #
        #
        ##
        #
        #
        #
        #
        #
 _____  #
|_____| ##
 ___   #
|   |  #
|_   | #
  |__| #
       #
       #
       ##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|  _    |#
| |_|   |#
|       |#
|  _   | #
| |_|   |#
|_______|##
 _______ #
|       |#
|       |#
|       |#
|      _|#
|     |_ #
|_______|##
 ______  #
|      | #
|  _    |#
| | |   |#
| |_|   |#
|       |#
|______| ##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |___ #
|_______|##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|    ___|#
|   | __ #
|   ||  |#
|   |_| |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 ___  #
|   | #
|   | #
|   | #
|   | #
|   | #
|___| ##
     ___ #
    |   |#
    |   |#
    |   |#
 ___|   |#
|       |#
|_______|##
 ___   _ #
|   | | |#
|   |_| |#
|      _|#
|     |_ #
|    _  |#
|___| |_|##
 ___     #
|   |    #
|   |    #
|   |    #
|   |___ #
|       |#
|_______|##
 __   __ #
|  |_|  |#
|       |#
|       |#
|       |#
| ||_|| |#
|_|   |_|##
 __    _ #
|  |  | |#
|   |_| |#
|       |#
|  _    |#
| | |   |#
|_|  |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 _______ #
|       |#
|    _  |#
|   |_| |#
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|      | #
|____||_|##
 ______   #
|    _ |  #
|   | ||  #
|   |_||_ #
|    __  |#
|   |  | |#
|___|  |_|##
 _______ #
|       |#
|  _____|#
| |_____ #
|_____  |#
 _____| |#
|_______|##
 _______ #
|       |#
|_     _|#
  |   |  #
  |   |  #
  |   |  #
  |___|  ##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
 |     | #
  |___|  ##
 _     _ #
| | _ | |#
| || || |#
|       |#
|       |#
|   _   |#
|__| |__|##
 __   __ #
|  |_|  |#
|       |#
|       |#
 |     | #
|   _   |#
|__| |__|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|_     _|#
  |   |  #
  |___|  ##
 _______ #
|       |#
|____   |#
 ____|  |#
| ______|#
| |_____ #
|_______|##
{#
 #
 #
 #
 #
 #
 ##
|#
 #
 #
 #
 #
 #
 ##
}#
 #
 #
 #
 #
 #
 ##
~#
 #
 #
 #
 #
 #
 ##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
�#
 #
 #
 #
 #
 #
 ##

`,td=`flf2a$ 6 5 20 15 13
Standard by Glenn Chappell & Ian Chai 3/93 -- based on .sig of Frank Sheeran
Figlet release 2.0 -- August 5, 1993

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
6    - height of a character
5    - height of a character, not including descenders
20   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font (like "-m 15" on command line)
13   - number of comment lines

$@
$@
$@
$@
$@
$@@
   _ @
  / \\@
 /  /@
/\\_/ @
\\/   @
     @@
 _ _ @
( | )@
 V V @
     @
     @
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
   @
   @
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
       @
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
       @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
 ___ @
/ _ \\@
\\// /@
  \\/ @
  () @
     @@
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @@
   _   @
  /_\\  @
 //_\\\\ @
/  _  \\@
\\_/ \\_/@
       @@
   ___ @
  / __\\@
 /__\\//@
/ \\/  \\@
\\_____/@
       @@
   ___ @
  / __\\@
 / /   @
/ /___ @
\\____/ @
       @@
    ___ @
   /   \\@
  / /\\ /@
 / /_// @
/___,'  @
        @@
   __ @
  /__\\@
 /_\\  @
//__  @
\\__/  @
      @@
   ___ @
  / __\\@
 / _\\  @
/ /    @
\\/     @
       @@
   ___ @
  / _ \\@
 / /_\\/@
/ /_\\\\ @
\\____/ @
       @@
        @
  /\\  /\\@
 / /_/ /@
/ __  / @
\\/ /_/  @
        @@
  _____ @
  \\_   \\@
   / /\\/@
/\\/ /_  @
\\____/  @
        @@
   __  @
   \\ \\ @
    \\ \\@
 /\\_/ /@
 \\___/ @
       @@
       @
  /\\ /\\@
 / //_/@
/ __ \\ @
\\/  \\/ @
       @@
   __  @
  / /  @
 / /   @
/ /___ @
\\____/ @
       @@
        @
  /\\/\\  @
 /    \\ @
/ /\\/\\ \\@
\\/    \\/@
        @@
     __ @
  /\\ \\ \\@
 /  \\/ /@
/ /\\  / @
\\_\\ \\/  @
        @@
   ___ @
  /___\\@
 //  //@
/ \\_// @
\\___/  @
       @@
   ___ @
  / _ \\@
 / /_)/@
/ ___/ @
\\/     @
       @@
   ____ @
  /___ \\@
 //  / /@
/ \\_/ / @
\\___,_\\ @
        @@
   __  @
  /__\\ @
 / \\// @
/ _  \\ @
\\/ \\_/ @
       @@
 __    @
/ _\\   @
\\ \\    @
_\\ \\   @
\\__/   @
       @@
 _____ @
/__   \\@
  / /\\/@
 / /   @
 \\/    @
       @@
       @
 /\\ /\\ @
/ / \\ \\@
\\ \\_/ /@
 \\___/ @
       @@
         @
 /\\   /\\ @
 \\ \\ / / @
  \\ V /  @
   \\_/   @
         @@
 __    __ @
/ / /\\ \\ \\@
\\ \\/  \\/ /@
 \\  /\\  / @
  \\/  \\/  @
          @@
__  __@
\\ \\/ /@
 \\  / @
 /  \\ @
/_/\\_\\@
      @@
     @
/\\_/\\@
\\_ _/@
 / \\ @
 \\_/ @
     @@
 _____@
/ _  /@
\\// / @
 / //\\@
/____/@
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
    @
 /\\ @
|/\\|@
    @
    @
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
   @
   @
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
     @
 /\\/|@
|/\\/ @
     @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
|  _  |@
|_| |_|@
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
 ____ @
| __ \\@
| |/ /@
| |\\ \\@
|_||_/@
      @@
`,nd=`flf2a$ 6 5 15 1 1
rectangles.flf by David Villegas <mnementh@netcom.com> 12/94
$$@
$$@
$$@
$$@
$$@
$$@@
 __ @
|  |@
|  |@
|__|@
|__|@
    @@
 _ _ @
| | |@
|_|_|@
 $$$ @
 $$$ @
 $$$ @@
   _ _   @
 _| | |_ @
|_     _|@
|_     _|@
  |_|_|  @
         @@
   _   @
 _| |_ @
|   __|@
|__   |@
|_   _|@
  |_|  @@
       @
 __ __ @
|__|  |@
|   __|@
|__|__|@
       @@
   _   @
 _| |_ @
|   __|@
|   __|@
|_   _|@
  |_|  @@
 _ @
| |@
|_|@
 $ @
 $ @
 $ @@
   _ @
 _|_|@
| |  @
| |  @
|_|_ @
  |_|@@
 _   @
|_|_ @
  | |@
  | |@
 _|_|@
|_|  @@
       @
 _____ @
| | | |@
|-   -|@
|_|_|_|@
       @@
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
       @@
 $ @
 $ @
 $ @
 _ @
| |@
|_|@@
 $$$ @
 $$$ @
 ___ @
|___|@
 $$$ @
 $$$ @@
 $ @
 $ @
 $ @
 _ @
|_|@
 $ @@
     @
   _ @
  / |@
 / / @
|_/  @
     @@
     @
 ___ @
|   |@
| | |@
|___|@
     @@
       @
 ___   @
|_  |  @
 _| |_ @
|_____|@
       @@
     @
 ___ @
|_  |@
|  _|@
|___|@
     @@
     @
 ___ @
|_  |@
|_  |@
|___|@
     @@
     @
 ___ @
| | |@
|_  |@
  |_|@
     @@
     @
 ___ @
|  _|@
|_  |@
|___|@
     @@
     @
 ___ @
|  _|@
| . |@
|___|@
     @@
     @
 ___ @
|_  |@
  | |@
  |_|@
     @@
     @
 ___ @
| . |@
| . |@
|___|@
     @@
     @
 ___ @
| . |@
|_  |@
|___|@
     @@
   @
 _ @
|_|@
 _ @
|_|@
   @@
   @
 _ @
|_|@
 _ @
| |@
|_|@@
   __@
  / /@
 / / @
< <  @
 \\ \\ @
  \\_\\@@
 $$$$$ @
 $$$$$ @
 _____ @
|_____|@
|_____|@
 $$$$$ @@
__   @
\\ \\  @
 \\ \\ @
  > >@
 / / @
/_/  @@
 _____ @
|___  |@
  |  _|@
  |_|  @
  |_|  @
       @@
       @
 _____ @
|  __ |@
| |___|@
|_____|@
       @@
       @
 _____ @
|  _  |@
|     |@
|__|__|@
       @@
       @
 _____ @
| __  |@
| __ -|@
|_____|@
       @@
       @
 _____ @
|     |@
|   --|@
|_____|@
       @@
       @
 ____  @
|    \\ @
|  |  |@
|____/ @
       @@
       @
 _____ @
|   __|@
|   __|@
|_____|@
       @@
       @
 _____ @
|   __|@
|   __|@
|__|   @
       @@
       @
 _____ @
|   __|@
|  |  |@
|_____|@
       @@
       @
 _____ @
|  |  |@
|     |@
|__|__|@
       @@
       @
 _____ @
|     |@
|-   -|@
|_____|@
       @@
       @
    __ @
 __|  |@
|  |  |@
|_____|@
       @@
       @
 _____ @
|  |  |@
|    -|@
|__|__|@
       @@
       @
 __    @
|  |   @
|  |__ @
|_____|@
       @@
       @
 _____ @
|     |@
| | | |@
|_|_|_|@
       @@
       @
 _____ @
|   | |@
| | | |@
|_|___|@
       @@
       @
 _____ @
|     |@
|  |  |@
|_____|@
       @@
       @
 _____ @
|  _  |@
|   __|@
|__|   @
       @@
       @
 _____ @
|     |@
|  |  |@
|__  _|@
   |__|@@
       @
 _____ @
| __  |@
|    -|@
|__|__|@
       @@
       @
 _____ @
|   __|@
|__   |@
|_____|@
       @@
       @
 _____ @
|_   _|@
  | |  @
  |_|  @
       @@
       @
 _____ @
|  |  |@
|  |  |@
|_____|@
       @@
       @
 _____ @
|  |  |@
|  |  |@
 \\___/ @
       @@
       @
 _ _ _ @
| | | |@
| | | |@
|_____|@
       @@
       @
 __ __ @
|  |  |@
|-   -|@
|__|__|@
       @@
       @
 __ __ @
|  |  |@
|_   _|@
  |_|  @
       @@
       @
 _____ @
|__   |@
|   __|@
|_____|@
       @@
 ___ @
|  _|@
| |  @
| |  @
| |_ @
|___|@@
     @
 _   @
| \\  @
 \\ \\ @
  \\_|@
     @@
 ___ @
|_  |@
  | |@
  | |@
 _| |@
|___|@@
 _____ @
|  _  |@
|_| |_|@
 $$$$$ @
 $$$$$ @
 $$$$$ @@
 $$$$$ @
 $$$$$ @
 $$$$$ @
 $$$$$ @
 _____ @
|_____|@@
 ___ @
|_  |@
  |_|@
 $$$ @
 $$$ @
 $$$ @@
     @
     @
 ___ @
| .'|@
|__,|@
     @@
     @
 _   @
| |_ @
| . |@
|___|@
     @@
     @
     @
 ___ @
|  _|@
|___|@
     @@
     @
   _ @
 _| |@
| . |@
|___|@
     @@
     @
     @
 ___ @
| -_|@
|___|@
     @@
     @
 ___ @
|  _|@
|  _|@
|_|  @
     @@
     @
     @
 ___ @
| . |@
|_  |@
|___|@@
     @
 _   @
| |_ @
|   |@
|_|_|@
     @@
   @
 _ @
|_|@
| |@
|_|@
   @@
     @
   _ @
  |_|@
  | |@
 _| |@
|___|@@
     @
 _   @
| |_ @
| '_|@
|_,_|@
     @@
   @
 _ @
| |@
| |@
|_|@
   @@
       @
       @
 _____ @
|     |@
|_|_|_|@
       @@
     @
     @
 ___ @
|   |@
|_|_|@
     @@
     @
     @
 ___ @
| . |@
|___|@
     @@
     @
     @
 ___ @
| . |@
|  _|@
|_|  @@
     @
     @
 ___ @
| . |@
|_  |@
  |_|@@
     @
     @
 ___ @
|  _|@
|_|  @
     @@
     @
     @
 ___ @
|_ -|@
|___|@
     @@
     @
 _   @
| |_ @
|  _|@
|_|  @
     @@
     @
     @
 _ _ @
| | |@
|___|@
     @@
     @
     @
 _ _ @
| | |@
 \\_/ @
     @@
       @
       @
 _ _ _ @
| | | |@
|_____|@
       @@
     @
     @
 _ _ @
|_'_|@
|_,_|@
     @@
     @
     @
 _ _ @
| | |@
|_  |@
|___|@@
     @
     @
 ___ @
|- _|@
|___|@
     @@
   ___ @
  |  _|@
 _| |  @
|_  |  @
  | |_ @
  |___|@@
 _ @
| |@
| |@
| |@
| |@
|_|@@
 ___   @
|_  |  @
  | |_ @
  |  _|@
 _| |  @
|___|  @@
 _____ @
|   | |@
|_|___|@
 $$$$$ @
 $$$$$ @
 $$$$$ @@
 __ __ @
|__|__|@
|  _  |@
|     |@
|__|__|@
       @@
 __ __ @
|__|__|@
|     |@
|  |  |@
|_____|@
       @@
 __ __ @
|__|__|@
|  |  |@
|  |  |@
|_____|@
       @@
 _ _ @
|_|_|@
 ___ @
| .'|@
|__,|@
     @@
 _ _ @
|_|_|@
 ___ @
| . |@
|___|@
     @@
 _ _ @
|_|_|@
 _ _ @
| | |@
|___|@
     @@
       @
 _____ @
| __  |@
| __ -|@
|  ___|@
|_|    @@
`,$d=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
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
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`,rd=`flf2a$ 7 7 15 0 19 0 24447 0
Author : myflix
Date   : 2004/6/9 7:40:40
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
- Added the 0xCA0 character.
$  $#
$  $#
$  $#
$  $#
$  $#
$  $#
$  $##
,---. #
|   | #
|  .' #
|  |  #
\`--'  #
.--.  #
'--'  ##
          #
,--. ,--. #
|  | |  | #
\`-'  \`-'  #
          #
          #
          ##
  ,--. ,--.  #
,-|  |-|  |-.#
'-|  |-|  |-'#
,-|  |-|  |-.#
'-|  |-|  |-'#
  \`--' \`--'  #
             ##
   ,--.   #
 ,-|  |-. #
|  |  |-' #
 '-|  |\`\\ #
.--|  | / #
\`--|  |'  #
   \`--'   ##
      ,--. #
 .-. /  /  #
 '-'/  /   #
   /  /    #
  /  /.-.  #
 /  / '-'  #
\`--'       ##
           #
 ,---.     #
|  o ,-.   #
.'     /_  #
|  o  .__) #
 \`---'     #
           ##
     #
,--. #
|  | #
\`-'  #
     #
     #
     ##
      #
  ,-. #
 / .' #
|  |  #
|  |  #
 \\ '. #
  \`-' ##
       #
 ,-.   #
 '. \\  #
  |  | #
  |  | #
 .' /  #
 \`-'   ##
    ,--.     #
 .-,|  |,-.  #
 _\\ '  ' /_  #
(__      __) #
  / .  . \\   #
 \`-'|  |\`-'  #
    \`--'     ##
    ,--.     #
    |  |     #
,---|  |---. #
'---|  |---' #
    |  |     #
    \`--'     #
             ##
     #
     #
     #
     #
,--. #
'-,/ #
     ##
        #
        #
,-----. #
'-----' #
        #
        #
        ##
     #
     #
     #
     #
.--. #
'--' #
     ##
      ,--. #
     /  /  #
    /  /   #
   /  /    #
  /  /     #
 /  /      #
\`--'       ##
         #
  ,--.   #
 /    \\  #
|  ()  | #
 \\    /  #
  \`--'   #
         ##
      #
 ,--. #
/   | #
\`|  | #
 |  | #
 \`--' #
      ##
        #
 ,---.  #
'.-.  \\ #
 .-' .' #
/   '-. #
'-----' #
        ##
        #
,----.  #
'.-.  | #
  .' <  #
/'-'  | #
\`----'  #
        ##
        #
  ,---. #
 /    | #
/  '  | #
'--|  | #
   \`--' #
        ##
        #
,-----. #
|  .--' #
'--. \`\\ #
.--'  / #
\`----'  #
        ##
        #
  ,--.  #
 /  .'  #
|  .-.  #
\\   o | #
 \`---'  #
        ##
        #
,-----. #
'--,  / #
 .'  /  #
/   /   #
\`--'    #
        ##
        #
 ,---.  #
|  o  | #
.'   '. #
|  o  | #
 \`---'  #
        ##
        #
 ,---.  #
| o   \\ #
\`..'  | #
 .'  /  #
 \`--'   #
        ##
     #
     #
.--. #
'--' #
.--. #
'--' #
     ##
     #
     #
.--. #
'--' #
.--. #
'-,/ #
     ##
      #
  ,-. #
 /  / #
/  /  #
\\  \\  #
 \\  \\ #
  \`-' ##
      #
      #
,---. #
'---' #
,---. #
'---' #
      ##
       #
 ,-.   #
 \\  \\  #
  \\  \\ #
  /  / #
 /  /  #
 \`-'   ##
 ,------.  #
'  .--.  ' #
'--' _|  | #
 .--' __'  #
 \`---'     #
 .---.     #
 '---'     ##
         #
 ,----.  #
'   ,  | #
|  |   / #
'  '--'| #
 \`----'  #
         ##
          #
  ,---.   #
 /  O  \\  #
|  .-.  | #
|  | |  | #
\`--' \`--' #
          ##
          #
,-----.   #
|  |) /_  #
|  .-.  \\ #
|  '--' / #
\`------'  #
          ##
         #
 ,-----. #
'  .--./ #
|  |     #
'  '--'\\ #
 \`-----' #
         ##
           #
,------.   #
|  .-.  \\  #
|  |  \\  : #
|  '--'  / #
\`-------'  #
           ##
         #
,------. #
|  .---' #
|  \`--,  #
|  \`---. #
\`------' #
         ##
         #
,------. #
|  .---' #
|  \`--,  #
|  |\`    #
\`--'     #
         ##
           #
 ,----.    #
'  .-./    #
|  | .---. #
'  '--'  | #
 \`------'  #
           ##
           #
,--.  ,--. #
|  '--'  | #
|  .--.  | #
|  |  |  | #
\`--'  \`--' #
           ##
     #
,--. #
|  | #
|  | #
|  | #
\`--' #
     ##
          #
     ,--. #
     |  | #
,--. |  | #
|  '-'  / #
 \`-----'  #
          ##
          #
,--. ,--. #
|  .'   / #
|  .   '  #
|  |\\   \\ #
\`--' '--' #
          ##
        #
,--.    #
|  |    #
|  |    #
|  '--. #
\`-----' #
        ##
            #
,--.   ,--. #
|   \`.'   | #
|  |'.'|  | #
|  |   |  | #
\`--'   \`--' #
            ##
           #
,--.  ,--. #
|  ,'.|  | #
|  |' '  | #
|  | \`   | #
\`--'  \`--' #
           ##
          #
 ,-----.  #
'  .-.  ' #
|  | |  | #
'  '-'  ' #
 \`-----'  #
          ##
          #
,------.  #
|  .--. ' #
|  '--' | #
|  | --'  #
\`--'      #
          ##
            #
 ,-----.    #
'  .-.  '   #
|  | |  |   #
'  '-'  '-. #
 \`-----'--' #
            ##
          #
,------.  #
|  .--. ' #
|  '--'.' #
|  |\\  \\  #
\`--' '--' #
          ##
         #
 ,---.   #
'   .-'  #
\`.  \`-.  #
.-'    | #
\`-----'  #
         ##
           #
,--------. #
'--.  .--' #
   |  |    #
   |  |    #
   \`--'    #
           ##
          #
,--. ,--. #
|  | |  | #
|  | |  | #
'  '-'  ' #
 \`-----'  #
          ##
            #
,--.   ,--. #
 \\  \`.'  /  #
  \\     /   #
   \\   /    #
    \`-'     #
            ##
            #
,--.   ,--. #
|  |   |  | #
|  |.'.|  | #
|   ,'.   | #
'--'   '--' #
            ##
            #
,--.   ,--. #
 \\  \`.'  /  #
  .'    \\   #
 /  .'.  \\  #
'--'   '--' #
            ##
            #
,--.   ,--. #
 \\  \`.'  /  #
  '.    /   #
    |  |    #
    \`--'    #
            ##
          #
,-------. #
\`--.   /  #
  /   /   #
 /   \`--. #
\`-------' #
          ##
       #
,----. #
|  .-' #
|  |   #
|  |   #
|  '-. #
\`----' ##
,--.       #
 \\  \\      #
  \\  \\     #
   \\  \\    #
    \\  \\   #
     \\  \\  #
      \`--' ##
       #
,----. #
\`-.  | #
  |  | #
  |  | #
.-'  | #
\`----' ##
          #
  ,---.   #
 /  \\  \\  #
\`--' \`--' #
          #
          #
          ##
       #
       #
       #
       #
,----. #
'----' #
       ##
       #
,--.   #
'.  \\  #
  \`--' #
       #
       #
       ##
         #
         #
 ,--,--. #
' ,-.  | #
\\ '-'  | #
 \`--\`--' #
         ##
        #
,--.    #
|  |-.  #
| .-. ' #
| \`-' | #
 \`---'  #
        ##
       #
       #
 ,---. #
| .--' #
\\ \`--. #
 \`---' #
       ##
        #
   ,--. #
 ,-|  | #
' .-. | #
\\ \`-' | #
 \`---'  #
        ##
        #
        #
 ,---.  #
| .-. : #
\\   --. #
 \`----' #
        ##
       #
 ,---. #
/  .-' #
|  \`-, #
|  .-' #
\`--'   #
       ##
        #
        #
 ,---.  #
| .-. | #
' '-' ' #
.\`-  /  #
\`---'   ##
          #
,--.      #
|  ,---.  #
|  .-.  | #
|  | |  | #
\`--' \`--' #
          ##
     #
,--. #
\`--' #
,--. #
|  | #
\`--' #
     ##
       #
  ,--. #
  \`--' #
  ,--. #
  |  | #
.-'  / #
'---'  ##
         #
,--.     #
|  |,-.  #
|     /  #
|  \\  \\  #
\`--'\`--' #
         ##
     #
,--. #
|  | #
|  | #
|  | #
\`--' #
     ##
           #
           #
,--,--,--. #
|        | #
|  |  |  | #
\`--\`--\`--' #
           ##
         #
         #
,--,--,  #
|      \\ #
|  ||  | #
\`--''--' #
         ##
        #
        #
 ,---.  #
| .-. | #
' '-' ' #
 \`---'  #
        ##
        #
        #
 ,---.  #
| .-. | #
| '-' ' #
|  |-'  #
\`--'    ##
        #
        #
 ,---.  #
| .-. | #
' '-' | #
 \`-|  | #
   \`--' ##
        #
        #
,--.--. #
|  .--' #
|  |    #
\`--'    #
        ##
        #
        #
 ,---.  #
(  .-'  #
.-'  \`) #
\`----'  #
        ##
         #
  ,--.   #
,-'  '-. #
'-.  .-' #
  |  |   #
  \`--'   #
         ##
         #
         #
,--.,--. #
|  ||  | #
'  ''  ' #
 \`----'  #
         ##
           #
           #
,--.  ,--. #
 \\  \`'  /  #
  \\    /   #
   \`--'    #
           ##
            #
            #
,--.   ,--. #
|  |.'.|  | #
|   .'.   | #
'--'   '--' #
            ##
           #
           #
,--.  ,--. #
 \\  \`'  /  #
 /  /.  \\  #
'--'  '--' #
           ##
          #
          #
,--. ,--. #
 \\  '  /  #
  \\   '   #
.-'  /    #
\`---'     ##
        #
        #
,-----. #
\`-.  /  #
 /  \`-. #
\`-----' #
        ##
        #
   ,--. #
  |  .' #
.'  /   #
'.  \\   #
  |  '. #
   \`--' ##
,--. #
|  | #
|  | #
|  | #
|  | #
|  | #
\`--' ##
        #
,--.    #
'.  |   #
  \\  \`. #
  /  .' #
.'  |   #
'--'    ##
           #
      .--, #
  .--'  /  #
 /  ---\`   #
\`--'       #
           #
           ##
          #
  ,---.   #
 /  O  \\  #
|  .-.  | #
|  | |  | #
\`--' \`--' #
          ##
          #
 ,-----.  #
'  .-.  ' #
|  | |  | #
'  '-'  ' #
 \`-----'  #
          ##
          #
,--. ,--. #
|  | |  | #
|  | |  | #
'  '-'  ' #
 \`-----'  #
          ##
         #
         #
 ,--,--. #
' ,-.  | #
\\ '-'  | #
 \`--\`--' #
         ##
        #
        #
 ,---.  #
| .-. | #
' '-' ' #
 \`---'  #
        ##
         #
         #
,--.,--. #
|  ||  | #
'  ''  ' #
 \`----'  #
         ##
�#
 #
 #
 #
 #
 #
 ##
0xCA0  KANNADA LETTER TTHA
  _____)#
 |____/ #
 ,---.  #
' .-. ' #
' '-' ' #
 \`---'  #
        ##`,ld=`flf2a$ 6 5 17 -1 16

                  "Sub-Zero" font by Sub-Zero
                 ==============================


-> Conversion to FigLet font by MEPH. (Part of ASCII Editor Service Pack I)
   (http://studenten.freepage.de/meph/ascii/ascii/editor/_index.htm)
-> Defined: ASCII code alphabet
-> Uppercase characters only.

ScarecrowsASCIIArtArchive1.0.txt
From: "Sub-Zero" <bodom@papaya.ucs.indiana.edu>
"Here's a font I've been working on lately.  Can someone make the V, Q, and X
look better?  Also, the B, P, and R could use an improvement too.
Oh, here it is."

$$$@
$$$@
$$$@
$$$@
$$$@
$$$@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
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
@@
 ______    @
/\\  __ \\   @
\\ \\  __ \\  @
 \\ \\_\\ \\_\\ @
  \\/_/\\/_/ @
           @@
 ______    @
/\\  == \\   @
\\ \\  __<   @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 ______    @
/\\  ___\\   @
\\ \\ \\____  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 _____    @
/\\  __-.  @
\\ \\ \\/\\ \\ @
 \\ \\____- @
  \\/____/ @
          @@
 ______    @
/\\  ___\\   @
\\ \\  __\\   @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 ______  @
/\\  ___\\ @
\\ \\  __\\ @
 \\ \\_\\   @
  \\/_/   @
         @@
 ______    @
/\\  ___\\   @
\\ \\ \\__ \\  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 __  __    @
/\\ \\_\\ \\   @
\\ \\  __ \\  @
 \\ \\_\\ \\_\\ @
  \\/_/\\/_/ @
           @@
 __    @
/\\ \\   @
\\ \\ \\  @
 \\ \\_\\ @
  \\/_/ @
       @@
   __    @
  /\\ \\   @
 _\\_\\ \\  @
/\\_____\\ @
\\/_____/ @
         @@
 __  __    @
/\\ \\/ /    @
\\ \\  _"-.  @
 \\ \\_\\ \\_\\ @
  \\/_/\\/_/ @
           @@
 __        @
/\\ \\       @
\\ \\ \\____  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 __    __    @
/\\ "-./  \\   @
\\ \\ \\-./\\ \\  @
 \\ \\_\\ \\ \\_\\ @
  \\/_/  \\/_/ @
             @@
 __   __    @
/\\ "-.\\ \\   @
\\ \\ \\-.  \\  @
 \\ \\_\\\\"\\_\\ @
  \\/_/ \\/_/ @
            @@
 ______    @
/\\  __ \\   @
\\ \\ \\/\\ \\  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 ______  @
/\\  == \\ @
\\ \\  _-/ @
 \\ \\_\\   @
  \\/_/   @
         @@
 ______    @
/\\  __ \\   @
\\ \\ \\/\\_\\  @
 \\ \\___\\_\\ @
  \\/___/_/ @
           @@
 ______    @
/\\  == \\   @
\\ \\  __<   @
 \\ \\_\\ \\_\\ @
  \\/_/ /_/ @
           @@
 ______    @
/\\  ___\\   @
\\ \\___  \\  @
 \\/\\_____\\ @
  \\/_____/ @
           @@
 ______  @
/\\__  _\\ @
\\/_/\\ \\/ @
   \\ \\_\\ @
    \\/_/ @
         @@
 __  __    @
/\\ \\/\\ \\   @
\\ \\ \\_\\ \\  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 __   __  @
/\\ \\ / /  @
\\ \\ \\'/   @
 \\ \\__|   @
  \\/_/    @
          @@
 __     __    @
/\\ \\  _ \\ \\   @
\\ \\ \\/ ".\\ \\  @
 \\ \\__/".~\\_\\ @
  \\/_/   \\/_/ @
              @@
 __  __    @
/\\_\\_\\_\\   @
\\/_/\\_\\/_  @
  /\\_\\/\\_\\ @
  \\/_/\\/_/ @
           @@
 __  __    @
/\\ \\_\\ \\   @
\\ \\____ \\  @
 \\/\\_____\\ @
  \\/_____/ @
           @@
 ______    @
/\\___  \\   @
\\/_/  /__  @
  /\\_____\\ @
  \\/_____/ @
           @@
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
@@
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
@@
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
@@
 ______    @
/\\  __ \\   @
\\ \\  __ \\  @
 \\ \\_\\ \\_\\ @
  \\/_/\\/_/ @
           @@
 ______    @
/\\  == \\   @
\\ \\  __<   @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 ______    @
/\\  ___\\   @
\\ \\ \\____  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 _____    @
/\\  __-.  @
\\ \\ \\/\\ \\ @
 \\ \\____- @
  \\/____/ @
          @@
 ______    @
/\\  ___\\   @
\\ \\  __\\   @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 ______  @
/\\  ___\\ @
\\ \\  __\\ @
 \\ \\_\\   @
  \\/_/   @
         @@
 ______    @
/\\  ___\\   @
\\ \\ \\__ \\  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 __  __    @
/\\ \\_\\ \\   @
\\ \\  __ \\  @
 \\ \\_\\ \\_\\ @
  \\/_/\\/_/ @
           @@
 __    @
/\\ \\   @
\\ \\ \\  @
 \\ \\_\\ @
  \\/_/ @
       @@
   __    @
  /\\ \\   @
 _\\_\\ \\  @
/\\_____\\ @
\\/_____/ @
         @@
 __  __    @
/\\ \\/ /    @
\\ \\  _"-.  @
 \\ \\_\\ \\_\\ @
  \\/_/\\/_/ @
           @@
 __        @
/\\ \\       @
\\ \\ \\____  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 __    __    @
/\\ "-./  \\   @
\\ \\ \\-./\\ \\  @
 \\ \\_\\ \\ \\_\\ @
  \\/_/  \\/_/ @
             @@
 __   __    @
/\\ "-.\\ \\   @
\\ \\ \\-.  \\  @
 \\ \\_\\\\"\\_\\ @
  \\/_/ \\/_/ @
            @@
 ______    @
/\\  __ \\   @
\\ \\ \\/\\ \\  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 ______  @
/\\  == \\ @
\\ \\  _-/ @
 \\ \\_\\   @
  \\/_/   @
         @@
 ______    @
/\\  __ \\   @
\\ \\ \\/\\_\\  @
 \\ \\___\\_\\ @
  \\/___/_/ @
           @@
 ______    @
/\\  == \\   @
\\ \\  __<   @
 \\ \\_\\ \\_\\ @
  \\/_/ /_/ @
           @@
 ______    @
/\\  ___\\   @
\\ \\___  \\  @
 \\/\\_____\\ @
  \\/_____/ @
           @@
 ______  @
/\\__  _\\ @
\\/_/\\ \\/ @
   \\ \\_\\ @
    \\/_/ @
         @@
 __  __    @
/\\ \\/\\ \\   @
\\ \\ \\_\\ \\  @
 \\ \\_____\\ @
  \\/_____/ @
           @@
 __   __  @
/\\ \\ / /  @
\\ \\ \\'/   @
 \\ \\__|   @
  \\/_/    @
          @@
 __     __    @
/\\ \\  _ \\ \\   @
\\ \\ \\/ ".\\ \\  @
 \\ \\__/".~\\_\\ @
  \\/_/   \\/_/ @
              @@
 __  __    @
/\\_\\_\\_\\   @
\\/_/\\_\\/_  @
  /\\_\\/\\_\\ @
  \\/_/\\/_/ @
           @@
 __  __    @
/\\ \\_\\ \\   @
\\ \\____ \\  @
 \\/\\_____\\ @
  \\/_____/ @
           @@
 ______    @
/\\___  \\   @
\\/_/  /__  @
  /\\_____\\ @
  \\/_____/ @
           @@
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
@@
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
@@
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
@@
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
@@
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
@@
@
@
@
@
@
@@
`,od=`flf2a$ 6 6 12 63 13 0 24511 0
Author :myflix
Date   : 2003/11/6 19:07:12
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Changed 2012-05-21: Update to "!" character by patorjk
          #
    o O O #
   o      #
  TS__[O] #
 {======| #
./o--000' ##
    _    #
   | |   #
   |_|   #
  _(_)_  #
_| """ | #
"\`-0-0-' ##
   _ _   #
  ( | )  #
   V V   #
  _____  #
_|     | #
"\`-0-0-' ##
 _| | |_  #
|_  .  _| #
|_     _| #
  |_|_|   #
_|"""""|  #
"\`-0-0-'  ##
   ||_   #
  (_-<   #
  / _/   #
  _||__  #
_|"""""| #
"\`-0-0-' ##
  _  __  #
 (_)/ /  #
   / /_  #
  /_/(_) #
_|"""""| #
"\`-0-0-' ##
  _      #
/ _|___  #
> _|_ _| #
\\_____|  #
_|"""""| #
"\`-0-0-' ##
   (")   #
    \\|   #
         #
  _____  #
_|     | #
"\`-0-0-' ##
   / /   #
  | |    #
  | |    #
  _\\_\\_  #
_|"""""| #
"\`-0-0-' ##
  \\"\\    #
   | |   #
   | |   #
  /_/__  #
_|"""""| #
"\`-0-0-' ##
  _/\\_   #
  >  <   #
   \\/    #
  _____  #
_|     | #
"\`-0-0-' ##
  _|"|_  #
 |_   _| #
   |_|   #
  _____  #
_|     | #
"\`-0-0-' ##
         #
    _    #
   ( )   #
  _|/__  #
_|"""""| #
"\`-0-0-' ##
         #
   ___   #
  |___|  #
  _____  #
_|     | #
"\`-0-0-' ##
         #
         #
    _    #
  _(_)_  #
_|"""""| #
"\`-0-0-' ##
      __ #
     /"/ #
    / /  #
  _/_/_  #
_|"""""| #
"\`-0-0-' ##
    __   #
   /  \\  #
  | () | #
  _\\__/  #
_|"""""| #
"\`-0-0-' ##
    _    #
   / |   #
   | |   #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  |_  )  #
   / /   #
  /___|  #
_|"""""| #
"\`-0-0-' ##
   ____  #
  |__ /  #
   |_ \\  #
  |___/  #
_|"""""| #
"\`-0-0-' ##
  _ _    #
 | | |   #
 |_  _|  #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  | __|  #
  |__ \\  #
  |___/  #
_|"""""| #
"\`-0-0-' ##
    __   #
   / /   #
  / _ \\  #
  \\___/  #
_|"""""| #
"\`-0-0-' ##
   ____  #
  |__  | #
    / /  #
  _/_/_  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  ( _ )  #
  / _ \\  #
  \\___/  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  / _ \\  #
  \\_, /  #
  _/_/_  #
_|"""""| #
"\`-0-0-' ##
    _    #
   (_)   #
    _    #
  _(_)_  #
_|"""""| #
"\`-0-0-' ##
   (_)   #
    _    #
   ( )   #
  _|/__  #
_|"""""| #
"\`-0-0-' ##
    __   #
   / /   #
  < <    #
  _\\_\\_  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  |___|  #
  |___|  #
  _____  #
_|     | #
"\`-0-0-' ##
   __    #
   \\ \\   #
    > >  #
  _/_/_  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  |__ \\  #
    /_/  #
  _(_)_  #
_|"""""| #
"\`-0-0-' ##
 / __ \\  #
/ / _\` | #
\\ \\__,_| #
 \\____/  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  /   \\  #
  | - |  #
  |_|_|  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  | _ )  #
  | _ \\  #
  |___/  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  / __|  #
 | (__   #
  \\___|  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  |   \\  #
  | |) | #
  |___/  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  | __|  #
  | _|   #
  |___|  #
_|"""""| #
"\`-0-0-' ##
    ___  #
   | __| #
   | _|  #
  _|_|_  #
_| """ | #
"\`-0-0-' ##
   ___   #
  / __|  #
 | (_ |  #
  \\___|  #
_|"""""| #
"\`-0-0-' ##
  _  _   #
 | || |  #
 | __ |  #
 |_||_|  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  |_ _|  #
   | |   #
  |___|  #
_|"""""| #
"\`-0-0-' ##
      _  #
   _ | | #
  | || | #
  _\\__/  #
_|"""""| #
"\`-0-0-' ##
  _  __  #
 | |/ /  #
 | ' <   #
 |_|\\_\\  #
_|"""""| #
"\`-0-0-' ##
   _     #
  | |    #
  | |__  #
  |____| #
_|"""""| #
"\`-0-0-' ##
 __  __  #
|  \\/  | #
| |\\/| | #
|_|__|_| #
_|"""""| #
"\`-0-0-' ##
  _  _   #
 | \\| |  #
 | .\` |  #
 |_|\\_|  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  / _ \\  #
 | (_) | #
  \\___/  #
_|"""""| #
"\`-0-0-' ##
    ___  #
   | _ \\ #
   |  _/ #
  _|_|_  #
_| """ | #
"\`-0-0-' ##
  ___    #
 / _ \\   #
| (_) |  #
 \\__\\_\\  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  | _ \\  #
  |   /  #
  |_|_\\  #
_|"""""| #
"\`-0-0-' ##
   ___   #
  / __|  #
  \\__ \\  #
  |___/  #
_|"""""| #
"\`-0-0-' ##
  _____  #
 |_   _| #
   | |   #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
  _   _  #
 | | | | #
 | |_| | #
  \\___/  #
_|"""""| #
"\`-0-0-' ##
 __   __ #
 \\ \\ / / #
  \\ V /  #
  _\\_/_  #
_| """"| #
"\`-0-0-' ##
__      __#
\\ \\    / /#
 \\ \\/\\/ / #
  \\_/\\_/  #
_|"""""|  #
"\`-0-0-'  ##
 __  __  #
 \\ \\/ /  #
  >  <   #
 /_/\\_\\  #
_|"""""| #
"\`-0-0-' ##
 __   __ #
 \\ \\ / / #
  \\ V /  #
  _|_|_  #
_| """ | #
"\`-0-0-' ##
   ____  #
  |_  /  #
   / /   #
  /___|  #
_|"""""| #
"\`-0-0-' ##
  |""|   #
  | |    #
  | |    #
  |__|_  #
_|"""""| #
"\`-0-0-' ##
 __      #
 \\ \\     #
  \\ \\    #
  _\\_\\_  #
_|"""""| #
"\`-0-0-' ##
  |""|   #
   | |   #
   | |   #
  |__|_  #
_|"""""| #
"\`-0-0-' ##
   /\\    #
  |/\\|   #
         #
  _____  #
_|     | #
"\`-0-0-' ##
         #
         #
   ___   #
  |___|  #
_|"""""| #
"\`-0-0-' ##
  (")    #
   \\|    #
         #
  _____  #
_|     | #
"\`-0-0-' ##
         #
  __ _   #
 / _\` |  #
 \\__,_|  #
_|"""""| #
"\`-0-0-' ##
  _      #
 | |__   #
 | '_ \\  #
 |_.__/  #
_|"""""| #
"\`-0-0-' ##
         #
   __    #
  / _|   #
  \\__|_  #
_|"""""| #
"\`-0-0-' ##
     _   #
  __| |  #
 / _\` |  #
 \\__,_|  #
_|"""""| #
"\`-0-0-' ##
         #
   ___   #
  / -_)  #
  \\___|  #
_|"""""| #
"\`-0-0-' ##
     __  #
    / _| #
   |  _| #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
   __ _  #
  / _\` | #
  \\__, | #
  |___/  #
_|"""""| #
"\`-0-0-' ##
  _      #
 | |_    #
 | ' \\   #
 |_||_|  #
_|"""""| #
"\`-0-0-' ##
    _    #
   (_)   #
   | |   #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
    (_)  #
    | |  #
   _/ |  #
  |__/_  #
_|"""""| #
"\`-0-0-' ##
   _     #
  | |__  #
  | / /  #
  |_\\_\\  #
_|"""""| #
"\`-0-0-' ##
    _    #
   | |   #
   | |   #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
         #
  _ __   #
 | '  \\  #
 |_|_|_| #
_|"""""| #
"\`-0-0-' ##
         #
  _ _    #
 | ' \\   #
 |_||_|  #
_|"""""| #
"\`-0-0-' ##
         #
   ___   #
  / _ \\  #
  \\___/  #
_|"""""| #
"\`-0-0-' ##
   _ __  #
  | '_ \\ #
  | .__/ #
  |_|__  #
_|"""""| #
"\`-0-0-' ##
  __ _   #
 / _\` |  #
 \\__, |  #
  __|_|  #
_|"""""| #
"\`-0-0-' ##
         #
    _ _  #
   | '_| #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
         #
   ___   #
  (_-<   #
  /__/_  #
_|"""""| #
"\`-0-0-' ##
   _     #
  | |_   #
  |  _|  #
  _\\__|  #
_|"""""| #
"\`-0-0-' ##
         #
  _  _   #
 | +| |  #
  \\_,_|  #
_|"""""| #
"\`-0-0-' ##
         #
  __ __  #
  \\ V /  #
  _\\_/_  #
_|"""""| #
"\`-0-0-' ##
          #
 __ __ __ #
 \\ V  V / #
  \\_/\\_/  #
_|"""""|  #
"\`-0-0-'  ##
         #
  __ __  #
  \\ \\ /  #
  /_\\_\\  #
_|"""""| #
"\`-0-0-' ##
   _  _  #
  | || | #
   \\_, | #
  _|__/  #
_| """"| #
"\`-0-0-' ##
         #
    ___  #
   |_ /  #
  _/__|  #
_|"""""| #
"\`-0-0-' ##
   /"/   #
 _| |    #
  | |    #
  _\\_\\_  #
_|"""""| #
"\`-0-0-' ##
   |"|   #
   | |   #
   | |   #
  _|_|_  #
_|"""""| #
"\`-0-0-' ##
  \\"\\    #
   | |_  #
   | |   #
  /_/__  #
_|"""""| #
"\`-0-0-' ##
   /\\/|  #
  |/\\/   #
         #
  _____  #
_|     | #
"\`-0-0-' ##
       #
       #
       #
       #
       #
   _ _ ##
�#
 #
 #
 #
 #
 ##
�#
 #
 #
 #
 #
 ##
�#
 #
 #
 #
 #
 ##
�#
 #
 #
 #
 #
 ##
�#
 #
 #
 #
 #
 ##
�#
 #
 #
 #
 #
 ##
`,id=`flf2a$ 8 7 15 0 12 0 16255 0
Author : LG Beard
Date   : 2004/6/26 13:47:42
Version: 1.0
Title  : twisted
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
  _    #
 /_/\\  #
 ) ) ) #
/_/ /  #
\\_\\_\\  #
 /_/\\  #
 )_)/  #
       ##
"#
 #
 #
 #
 #
 #
 #
 ##
##
 #
 #
 #
 #
 #
 #
 ##
$#
 #
 #
 #
 #
 #
 #
 ##
%#
 #
 #
 #
 #
 #
 #
 ##
&#
 #
 #
 #
 #
 #
 #
 ##
 _   #
/_/\\ #
\\_\\/ #
     #
     #
     #
     #
     ##
  __   #
 /\\_\\  #
( ( (  #
 \\ \\_\\ #
 / / / #
( (_(  #
 \\/_/  #
       ##
  __   #
 /_/\\  #
 ) ) ) #
/_/ /  #
\\ \\ \\  #
 )_) ) #
 \\_\\/  #
       ##
*#
 #
 #
 #
 #
 #
 #
 ##
+#
 #
 #
 #
 #
 #
 #
 ##
     #
     #
     #
     #
 _   #
/_/\\ #
)_)/ #
     ##
-#
 #
 #
 #
 #
 #
 #
 ##
     #
     #
     #
     #
 _   #
/_/\\ #
\\_\\/ #
     ##
   __   #
  /_/\\  #
  ) ) ) #
 /_/ /  #
 ) ) )  #
/ / /   #
\\/_/    #
        ##
   _____    #
  / ___ \\   #
 / /\\_/\\ \\  #
/ /_/ (_\\ \\ #
\\ \\ )_/ / / #
 \\ \\/_\\/ /  #
  \\ ____/   #
            ##
 _ __     #
/_ \\ \\    #
  ) ) )   #
 / / /    #
 \\ \\ \\_   #
  ) )__/\\ #
  \\/___\\/ #
          ##
  _ __     #
 /_ \\ \\    #
(/_) ) )   #
  / / /    #
  \\ \\ \\_   #
   ) )__/\\ #
   \\/___\\/ #
           ##
  _____    #
 /\\__  /\\  #
(_( _)( (  #
    __ \\ \\ #
 __ _  / / #
( (__)( (  #
 \\/____\\/  #
           ##
   ____    #
  /\\__/\\   #
 / /_ \\ \\  #
/ /(_)/ /  #
\\/___ \\ \\  #
     )_) ) #
     \\_\\/  #
           ##
 __ ____   #
/ /  __/\\  #
) ) ( _\\/  #
\\_\\____ (  #
   __\\ \\ \\ #
 /\\__/ / / #
 \\/____\\/  #
           ##
     _    #
    /_/\\  #
    )_) ) #
 _ _// /  #
/\\(_)\\ \\  #
\\ \\__/ /  #
 \\/__\\/   #
          ##
 ___ __   #
/___ \\ \\  #
    ) ) ) #
   / / /  #
   \\ \\ \\  #
    ) ) ) #
    \\/_/  #
          ##
  ____    #
 /\\___/\\  #
/ / _ \\ \\ #
\\ \\( )/ / #
/ /(_)\\ \\ #
\\ \\___/ / #
 \\/___\\/  #
          ##
  _____    #
 /\\___/\\   #
/ / _ \\ \\  #
\\ \\( )/ /  #
 \\/_/ \\ \\  #
     )_) ) #
     \\_\\/  #
           ##
 _   #
/_/\\ #
\\_\\/ #
     #
 _   #
/_/\\ #
\\_\\/ #
     ##
 _   #
/_/\\ #
\\_\\/ #
     #
 _   #
/_/\\ #
)_)/ #
     ##
  __  #
 /\\_\\ #
/ / / #
\\ \\_\\ #
 \\/_/ #
      #
      #
      ##
=#
 #
 #
 #
 #
 #
 #
 ##
 __   #
/_/\\  #
\\ \\ \\ #
/_/ / #
\\_\\/  #
      #
      #
      ##
 _ ___    #
/_/  _/\\  #
)_) ) ) ) #
\\_\\/_/ /  #
   \\_\\_\\  #
    /_/\\  #
    \\_\\/  #
          ##
@#
 #
 #
 #
 #
 #
 #
 ##
   _____    #
  /\\___/\\   #
 / / _ \\ \\  #
 \\ \\(_)/ /  #
 / / _ \\ \\  #
( (_( )_) ) #
 \\/_/ \\_\\/  #
            ##
   _____   #
 /\\  __/\\  #
 ) )(_ ) ) #
/ / __/ /  #
\\ \\  _\\ \\  #
 ) )(__) ) #
 \\/____\\/  #
           ##
  _____  #
 /\\ __/\\ #
 ) )__\\/ #
/ / /    #
\\ \\ \\_   #
 ) )__/\\ #
 \\/___\\/ #
         ##
  _____    #
 /\\ __/\\   #
 ) )  \\ \\  #
/ / /\\ \\ \\ #
\\ \\ \\/ / / #
 ) )__/ /  #
 \\/___\\/   #
           ##
   _____  #
 /\\_____\\ #
( (_____/ #
 \\ \\__\\   #
 / /__/_  #
( (_____\\ #
 \\/_____/ #
          ##
   _____  #
 /\\_____\\ #
( (  ___/ #
 \\ \\ \\_   #
 / / /_\\  #
/ /____/  #
\\/_/      #
          ##
  ______    #
 /_/\\___\\   #
 ) ) ___/   #
/_/ /  ___  #
\\ \\ \\_/\\__\\ #
 )_)  \\/ _/ #
 \\_\\____/   #
            ##
  __   __   #
 /\\_\\ /_/\\  #
( ( (_) ) ) #
 \\ \\___/ /  #
 / / _ \\ \\  #
( (_( )_) ) #
 \\/_/ \\_\\/  #
            ##
  __   #
 /\\_\\  #
 \\/_/  #
  /\\_\\ #
 / / / #
( (_(  #
 \\/_/  #
       ##
     __   #
    /_/\\  #
    ) ) ) #
 _ /_/ /  #
/_/\\ \\ \\  #
)_) ) ) ) #
\\_\\___\\/  #
          ##
  __  __   #
 /\\_\\\\  /\\ #
( ( (/ / / #
 \\ \\_ / /  #
 / /  \\ \\  #
( (_(\\ \\ \\ #
 \\/_//__\\/ #
           ##
  __      #
 /\\_\\     #
( ( (     #
 \\ \\_\\    #
 / / /__  #
( (_____( #
 \\/_____/ #
          ##
  __    __   #
 /_/\\  /\\_\\  #
 ) ) \\/ ( (  #
/_/ \\  / \\_\\ #
\\ \\ \\\\// / / #
 )_) )( (_(  #
 \\_\\/  \\/_/  #
             ##
  __   __   #
 /_/\\ /\\_\\  #
 ) ) \\ ( (  #
/_/   \\ \\_\\ #
\\ \\ \\   / / #
 )_) \\ (_(  #
 \\_\\/ \\/_/  #
            ##
   _____    #
  ) ___ (   #
 / /\\_/\\ \\  #
/ /_/ (_\\ \\ #
\\ \\ )_/ / / #
 \\ \\/_\\/ /  #
  )_____(   #
            ##
  __ __    #
 /_/\\__/\\  #
 ) ) ) ) ) #
/_/ /_/ /  #
\\ \\ \\_\\/   #
 )_) )     #
 \\_\\/      #
           ##
   _____     #
  / ___ (    #
 / /\\_/\\ \\   #
/ /_/ (_\\ \\  #
\\ \\ )_/ / (  #
 \\ \\/_\\/ \\_\\ #
  \\_____\\/_/ #
             ##
  __ __    #
 /_/\\__/\\  #
 ) ) ) ) ) #
/_/ /_/_/  #
\\ \\ \\ \\ \\  #
 )_) ) \\ \\ #
 \\_\\/ \\_\\/ #
           ##
 ______  #
/ ____/\\ #
) ) __\\/ #
 \\ \\ \\   #
 _\\ \\ \\  #
)____) ) #
\\____\\/  #
         ##
  _______   #
/\\_______)\\ #
\\(___  __\\/ #
  / / /     #
 ( ( (      #
  \\ \\ \\     #
  /_/_/     #
            ##
  __    __   #
 /\\_\\  /_/\\  #
( ( (  ) ) ) #
 \\ \\ \\/ / /  #
  \\ \\  / /   #
  ( (__) )   #
   \\/__\\/    #
             ##
  _     _   #
 /_/\\ /\\_\\  #
 ) ) ) ( (  #
/_/ / \\ \\_\\ #
\\ \\ \\_/ / / #
 \\ \\   / /  #
  \\_\\_/_/   #
            ##
  _      _   #
 /_/\\  /\\_\\  #
 ) ) )( ( (  #
/_/ //\\\\ \\_\\ #
\\ \\ /  \\ / / #
 )_) /\\ (_(  #
 \\_\\/  \\/_/  #
             ##
  __  __   #
/\\  /\\  /\\ #
\\ \\ \\/ / / #
 \\ \\  / /  #
 / /  \\ \\  #
/ / /\\ \\ \\ #
\\/__\\/__\\/ #
           ##
  __  __   #
/\\  /\\  /\\ #
\\ \\ \\/ / / #
 \\ \\__/ /  #
  \\__/ /   #
  / / /    #
  \\/_/     #
           ##
 _____     #
/\\____\\    #
\\/_ ( (    #
   \\ \\_\\   #
   / / /__ #
  ( (____( #
   \\/____/ #
           ##
   __   #
  /\\_\\  #
 / ( (  #
/   \\_\\ #
\\   / / #
 \\ (_(  #
  \\/_/  #
        ##
  __    #
 /\\_\\   #
( ( (   #
 \\ \\_\\  #
 ( ( (  #
  \\ \\ \\ #
   \\_\\/ #
        ##
  __    #
 /_/\\   #
 ) ) \\  #
/_/   \\ #
\\ \\   / #
 )_) /  #
 \\_\\/   #
        ##
  _ __   #
 /_ \\ \\  #
(/ \\_)_) #
         #
         #
         #
         #
         ##
_#
 #
 #
 #
 #
 #
 #
 ##
 _   #
/_/\\ #
)_)/ #
     #
     #
     #
     #
     ##
   _____    #
  /\\___/\\   #
 / / _ \\ \\  #
 \\ \\(_)/ /  #
 / / _ \\ \\  #
( (_( )_) ) #
 \\/_/ \\_\\/  #
            ##
   _____   #
 /\\  __/\\  #
 ) )(_ ) ) #
/ / __/ /  #
\\ \\  _\\ \\  #
 ) )(__) ) #
 \\/____\\/  #
           ##
  _____  #
 /\\ __/\\ #
 ) )__\\/ #
/ / /    #
\\ \\ \\_   #
 ) )__/\\ #
 \\/___\\/ #
         ##
  _____    #
 /\\ __/\\   #
 ) )  \\ \\  #
/ / /\\ \\ \\ #
\\ \\ \\/ / / #
 ) )__/ /  #
 \\/___\\/   #
           ##
   _____  #
 /\\_____\\ #
( (_____/ #
 \\ \\__\\   #
 / /__/_  #
( (_____\\ #
 \\/_____/ #
          ##
   _____  #
 /\\_____\\ #
( (  ___/ #
 \\ \\ \\_   #
 / / /_\\  #
/ /____/  #
\\/_/      #
          ##
  ______    #
 /_/\\___\\   #
 ) ) ___/   #
/_/ /  ___  #
\\ \\ \\_/\\__\\ #
 )_)  \\/ _/ #
 \\_\\____/   #
            ##
  __   __   #
 /\\_\\ /_/\\  #
( ( (_) ) ) #
 \\ \\___/ /  #
 / / _ \\ \\  #
( (_( )_) ) #
 \\/_/ \\_\\/  #
            ##
  __   #
 /\\_\\  #
 \\/_/  #
  /\\_\\ #
 / / / #
( (_(  #
 \\/_/  #
       ##
     __   #
    /_/\\  #
    ) ) ) #
 _ /_/ /  #
/_/\\ \\ \\  #
)_) ) ) ) #
\\_\\___\\/  #
          ##
  __  __   #
 /\\_\\\\  /\\ #
( ( (/ / / #
 \\ \\_ / /  #
 / /  \\ \\  #
( (_(\\ \\ \\ #
 \\/_//__\\/ #
           ##
  __      #
 /\\_\\     #
( ( (     #
 \\ \\_\\    #
 / / /__  #
( (_____( #
 \\/_____/ #
          ##
  __    __   #
 /_/\\  /\\_\\  #
 ) ) \\/ ( (  #
/_/ \\  / \\_\\ #
\\ \\ \\\\// / / #
 )_) )( (_(  #
 \\_\\/  \\/_/  #
             ##
  __   __   #
 /_/\\ /\\_\\  #
 ) ) \\ ( (  #
/_/   \\ \\_\\ #
\\ \\ \\   / / #
 )_) \\ (_(  #
 \\_\\/ \\/_/  #
            ##
   _____    #
  ) ___ (   #
 / /\\_/\\ \\  #
/ /_/ (_\\ \\ #
\\ \\ )_/ / / #
 \\ \\/_\\/ /  #
  )_____(   #
            ##
  __ __    #
 /_/\\__/\\  #
 ) ) ) ) ) #
/_/ /_/ /  #
\\ \\ \\_\\/   #
 )_) )     #
 \\_\\/      #
           ##
   _____     #
  / ___ (    #
 / /\\_/\\ \\   #
/ /_/ (_\\ \\  #
\\ \\ )_/ / (  #
 \\ \\/_\\/ \\_\\ #
  \\_____\\/_/ #
             ##
  __ __    #
 /_/\\__/\\  #
 ) ) ) ) ) #
/_/ /_/_/  #
\\ \\ \\ \\ \\  #
 )_) ) \\ \\ #
 \\_\\/ \\_\\/ #
           ##
 ______  #
/ ____/\\ #
) ) __\\/ #
 \\ \\ \\   #
 _\\ \\ \\  #
)____) ) #
\\____\\/  #
         ##
  _______   #
/\\_______)\\ #
\\(___  __\\/ #
  / / /     #
 ( ( (      #
  \\ \\ \\     #
  /_/_/     #
            ##
  __    __   #
 /\\_\\  /_/\\  #
( ( (  ) ) ) #
 \\ \\ \\/ / /  #
  \\ \\  / /   #
  ( (__) )   #
   \\/__\\/    #
             ##
  _     _   #
 /_/\\ /\\_\\  #
 ) ) ) ( (  #
/_/ / \\ \\_\\ #
\\ \\ \\_/ / / #
 \\ \\   / /  #
  \\_\\_/_/   #
            ##
  _      _   #
 /_/\\  /\\_\\  #
 ) ) )( ( (  #
/_/ //\\\\ \\_\\ #
\\ \\ /  \\ / / #
 )_) /\\ (_(  #
 \\_\\/  \\/_/  #
             ##
  __  __   #
/\\  /\\  /\\ #
\\ \\ \\/ / / #
 \\ \\  / /  #
 / /  \\ \\  #
/ / /\\ \\ \\ #
\\/__\\/__\\/ #
           ##
  __  __   #
/\\  /\\  /\\ #
\\ \\ \\/ / / #
 \\ \\__/ /  #
  \\__/ /   #
  / / /    #
  \\/_/     #
           ##
 _____     #
/\\____\\    #
\\/_ ( (    #
   \\ \\_\\   #
   / / /__ #
  ( (____( #
   \\/____/ #
           ##
  __   #
 /\\_\\  #
( ( (  #
 \\ \\_\\ #
 / / / #
( (_(  #
 \\/_/  #
       ##
|#
 #
 #
 #
 #
 #
 #
 ##
  __   #
 /_/\\  #
 ) ) ) #
/_/ /  #
\\ \\ \\  #
 )_) ) #
 \\_\\/  #
       ##
~#
 #
 #
 #
 #
 #
 #
 ##
   _____    #
  /\\___/\\   #
 / / _ \\ \\  #
 \\ \\(_)/ /  #
 / / _ \\ \\  #
( (_( )_) ) #
 \\/_/ \\_\\/  #
            ##
   _____    #
  ) ___ (   #
 / /\\_/\\ \\  #
/ /_/ (_\\ \\ #
\\ \\ )_/ / / #
 \\ \\/_\\/ /  #
  )_____(   #
            ##
  __    __   #
 /\\_\\  /_/\\  #
( ( (  ) ) ) #
 \\ \\ \\/ / /  #
  \\ \\  / /   #
  ( (__) )   #
   \\/__\\/    #
             ##
   _____    #
  /\\___/\\   #
 / / _ \\ \\  #
 \\ \\(_)/ /  #
 / / _ \\ \\  #
( (_( )_) ) #
 \\/_/ \\_\\/  #
            ##
   _____    #
  ) ___ (   #
 / /\\_/\\ \\  #
/ /_/ (_\\ \\ #
\\ \\ )_/ / / #
 \\ \\/_\\/ /  #
  )_____(   #
            ##
  __    __   #
 /\\_\\  /_/\\  #
( ( (  ) ) ) #
 \\ \\ \\/ / /  #
  \\ \\  / /   #
  ( (__) )   #
   \\/__\\/    #
             ##
�#
 #
 #
 #
 #
 #
 #
 ##`,ad=`flf2a$ 7 7 18 0 11 0 24447 0
Author : myflix
Date   : 2004/6/29 12:12:55
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
 _  #
| | #
| | #
| | #
|_| #
(_) #
    ##
 _  _  #
| || | #
\\_|\\_| #
       #
       #
       #
       ##
           #
   _  _    #
 _| || |_  #
|_| || |_| #
|_| || |_| #
  |_||_|   #
           ##
     _      #
 .--| |--.  #
| (_| |_\\_| #
'_._| |_'.  #
| \\_| |_) | #
 '--|_|--'  #
            ##
     __  #
 _  / /  #
(_)/ /   #
  / / _  #
 / / (_) #
/_/      #
         ##
   ___       #
 .' _ '.     #
 | (_) '___  #
 .\`___'/ _/  #
| (___)  \\_  #
\`._____.\\__| #
             ##
 _  #
| | #
\\_| #
    #
    #
    #
    ##
  __  #
.' _| #
| |   #
| |   #
| |_  #
\`.__| #
      ##
 __   #
|_ \`. #
  | | #
  | | #
 _| | #
|__,' #
      ##
    _     #
 .-| |-.  #
 \\     /  #
|_     _| #
 /     \\  #
 '-|_|-'  #
          ##
          #
   .-.    #
 __| |__  #
|__   __| #
   | |    #
   '-'    #
          ##
    #
    #
    #
    #
 _  #
)_/ #
    ##
         #
         #
 ______  #
|______| #
         #
         #
         ##
    #
    #
    #
    #
 _  #
(_) #
    ##
     __ #
    / / #
   / /  #
  / /   #
 / /    #
/_/     #
        ##
   ____    #
 .'    '.  #
|  .--.  | #
| |    | | #
|  \`--'  | #
 '.____.'  #
           ##
  __    #
 /  |   #
 \`| |   #
  | |   #
 _| |_  #
|_____| #
        ##
  _____   #
 / ___ \`. #
|_/___) | #
 .'____.' #
/ /_____  #
|_______| #
          ##
  ______   #
 / ____ \`. #
 \`'  __) | #
 _  |__ '. #
| \\____) | #
 \\______.' #
           ##
 _    _    #
| |  | |   #
| |__| |_  #
|____   _| #
    _| |_  #
   |_____| #
           ##
 _______   #
|  _____|  #
| |____    #
'_.____''. #
| \\____) | #
 \\______.' #
           ##
  ______   #
.' ____ \\  #
| |____\\_| #
| '____\`'. #
| (____) | #
'.______.' #
           ##
 _______  #
|  ___  | #
|_/  / /  #
    / /   #
   / /    #
  /_/     #
          ##
   ____    #
 .' __ '.  #
 | (__) |  #
 .\`____'.  #
| (____) | #
\`.______.' #
           ##
  ______   #
.' ____ '. #
| (____) | #
'_.____. | #
| \\____| | #
 \\______,' #
           ##
    #
 _  #
(_) #
 _  #
(_) #
    #
    ##
    #
 _  #
(_) #
 _  #
| ) #
)/  #
    ##
   _  #
  / / #
 / /  #
< <   #
 \\ \\  #
  \\_\\ #
      ##
         #
 ______  #
|______| #
 ______  #
|______| #
         #
         ##
  _    #
 \\ \\   #
  \\ \\  #
   > > #
  / /  #
 /_/   #
       ##
  _____   #
 / ___ \`. #
|_/___) | #
  /  __.' #
  |_|     #
  (_)     #
          ##
   ____   #
 .' __ \\  #
/ .'  \\ | #
| | (_/ | #
\\ \`.__.'\\ #
 \`.___ .' #
          ##
      _       #
     / \\      #
    / _ \\     #
   / ___ \\    #
 _/ /   \\ \\_  #
|____| |____| #
              ##
 ______    #
|_   _ \\   #
  | |_) |  #
  |  __'.  #
 _| |__) | #
|_______/  #
           ##
   ______  #
 .' ___  | #
/ .'   \\_| #
| |        #
\\ \`.___.'\\ #
 \`.____ .' #
           ##
 ______    #
|_   _ \`.  #
  | | \`. \\ #
  | |  | | #
 _| |_.' / #
|______.'  #
           ##
 ________  #
|_   __  | #
  | |_ \\_| #
  |  _| _  #
 _| |__/ | #
|________| #
           ##
 ________  #
|_   __  | #
  | |_ \\_| #
  |  _|    #
 _| |_     #
|_____|    #
           ##
   ______   #
 .' ___  |  #
/ .'   \\_|  #
| |   ____  #
\\ \`.___]  | #
 \`._____.'  #
            ##
 ____  ____  #
|_   ||   _| #
  | |__| |   #
  |  __  |   #
 _| |  | |_  #
|____||____| #
             ##
 _____  #
|_   _| #
  | |   #
  | |   #
 _| |_  #
|_____| #
        ##
    _____  #
   |_   _| #
     | |   #
 _   | |   #
| |__' |   #
\`.____.'   #
           ##
 ___  ____   #
|_  ||_  _|  #
  | |_/ /    #
  |  __'.    #
 _| |  \\ \\_  #
|____||____| #
             ##
  _____     #
 |_   _|    #
   | |      #
   | |   _  #
  _| |__/ | #
 |________| #
            ##
 ____    ____  #
|_   \\  /   _| #
  |   \\/   |   #
  | |\\  /| |   #
 _| |_\\/_| |_  #
|_____||_____| #
               ##
 ____  _____  #
|_   \\|_   _| #
  |   \\ | |   #
  | |\\ \\| |   #
 _| |_\\   |_  #
|_____|\\____| #
              ##
   ___    #
 .'   \`.  #
/  .-.  \\ #
| |   | | #
\\  \`-'  / #
 \`.___.'  #
          ##
 _______   #
|_   __ \\  #
  | |__) | #
  |  ___/  #
 _| |_     #
|_____|    #
           ##
   ___      #
 .'   \`.    #
/  .-.  \\   #
| |   | |   #
\\  \`-'  \\_  #
 \`.___.\\__| #
            ##
 _______     #
|_   __ \\    #
  | |__) |   #
  |  __ /    #
 _| |  \\ \\_  #
|____| |___| #
             ##
  ______   #
.' ____ \\  #
| (___ \\_| #
 _.____\`.  #
| \\____) | #
 \\______.' #
           ##
 _________  #
|  _   _  | #
|_/ | | \\_| #
    | |     #
   _| |_    #
  |_____|   #
            ##
 _____  _____  #
|_   _||_   _| #
  | |    | |   #
  | '    ' |   #
   \\ \\__/ /    #
    \`.__.'     #
               ##
 ____   ____  #
|_  _| |_  _| #
  \\ \\   / /   #
   \\ \\ / /    #
    \\ ' /     #
     \\_/      #
              ##
 ____      ____ #
|_  _|    |_  _|#
  \\ \\  /\\  / /  #
   \\ \\/  \\/ /   #
    \\  /\\  /    #
     \\/  \\/     #
                ##
 ____  ____  #
|_  _||_  _| #
  \\ \\  / /   #
   > \`' <    #
 _/ /'\`\\ \\_  #
|____||____| #
             ##
 ____  ____  #
|_  _||_  _| #
  \\ \\  / /   #
   \\ \\/ /    #
   _|  |_    #
  |______|   #
             ##
 ________  #
|  __   _| #
|_/  / /   #
   .'.' _  #
 _/ /__/ | #
|________| #
           ##
 ___  #
|  _| #
| |   #
| |   #
| |_  #
|___| #
      ##
__      #
\\ \\     #
 \\ \\    #
  \\ \\   #
   \\ \\  #
    \\_\\ #
        ##
 ___  #
|_  | #
  | | #
  | | #
 _| | #
|___| #
      ##
  ___   #
 / _ \\  #
|_/ \\_| #
        #
        #
        #
        ##
          #
          #
          #
          #
 _______  #
|_______| #
          ##
 __  #
|  | #
 \\_| #
     #
     #
     #
     ##
        #
        #
 ,--.   #
\`'_\\ :  #
// | |, #
\\'-;__/ #
        ##
 __        #
[  |       #
 | |.--.   #
 | '/'\`\\ \\ #
 |  \\__/ | #
[__;.__.'  #
           ##
        #
        #
 .---.  #
/ /'\`\\] #
| \\__.  #
'.___.' #
        ##
       __  #
      |  ] #
  .--.| |  #
/ /'\`\\' |  #
| \\__/  |  #
 '.__.;__] #
           ##
        #
        #
 .---.  #
/ /__\\\\ #
| \\__., #
 '.__.' #
        ##
    ___  #
  .' ..] #
 _| |_   #
'-| |-'  #
  | |    #
 [___]   #
         ##
         #
         #
  .--./) #
 / /'\`\\; #
 \\ \\._// #
 .',__\`  #
( ( __)) ##
 __       #
[  |      #
 | |--.   #
 | .-. |  #
 | | | |  #
[___]|__] #
          ##
  _   #
 (_)  #
 __   #
[  |  #
 | |  #
[___] #
      ##
     _  #
    (_) #
    __  #
   [  | #
 _  | | #
[ \\_| | #
 \\____/ ##
 __       #
[  |  _   #
 | | / ]  #
 | '' <   #
 | |\`\\ \\  #
[__|  \\_] #
          ##
 __   #
[  |  #
 | |  #
 | |  #
 | |  #
[___] #
      ##
              #
              #
 _ .--..--.   #
[ \`.-. .-. |  #
 | | | | | |  #
[___||__||__] #
              ##
          #
          #
 _ .--.   #
[ \`.-. |  #
 | | | |  #
[___||__] #
          ##
         #
         #
  .--.   #
/ .'\`\\ \\ #
| \\__. | #
 '.__.'  #
         ##
          #
          #
 _ .--.   #
[ '/'\`\\ \\ #
 | \\__/ | #
 | ;.__/  #
[__|      ##
          #
          #
  .--. _  #
/ /'\`\\' ] #
| \\__/ |  #
 \\__.; |  #
     |__] ##
         #
         #
 _ .--.  #
[ \`/'\`\\] #
 | |     #
[___]    #
         ##
        #
        #
 .--.   #
( (\`\\]  #
 \`'.'.  #
[\\__) ) #
        ##
  _    #
 / |_  #
\`| |-' #
 | |   #
 | |,  #
 \\__/  #
       ##
          #
          #
 __   _   #
[  | | |  #
 | \\_/ |, #
 '.__.'_/ #
          ##
         #
         #
 _   __  #
[ \\ [  ] #
 \\ \\/ /  #
  \\__/   #
         ##
             #
             #
 _   _   __  #
[ \\ [ \\ [  ] #
 \\ \\/\\ \\/ /  #
  \\__/\\__/   #
             ##
         #
         #
 _   __  #
[ \\ [  ] #
 > '  <  #
[__]\`\\_] #
         ##
          #
          #
  _   __  #
 [ \\ [  ] #
  \\ '/ /  #
[\\_:  /   #
 \\__.'    ##
        #
        #
 ____   #
[_   ]  #
 .' /_  #
[_____] #
        ##
   __  #
 .' _/ #
 | |   #
< <    #
 | |_  #
 \`.__\\ #
       ##
 _  #
| | #
| | #
| | #
| | #
|_| #
    ##
 __    #
\\_ \`.  #
  | |  #
   > > #
 _| |  #
/__.'  #
       ##
 ___.-. #
|  ___| #
'-'     #
        #
        #
        #
        ##
      _       #
     / \\      #
    / _ \\     #
   / ___ \\    #
 _/ /   \\ \\_  #
|____| |____| #
              ##
   ___    #
 .'   \`.  #
/  .-.  \\ #
| |   | | #
\\  \`-'  / #
 \`.___.'  #
          ##
 _____  _____  #
|_   _||_   _| #
  | |    | |   #
  | '    ' |   #
   \\ \\__/ /    #
    \`.__.'     #
               ##
        #
        #
 ,--.   #
\`'_\\ :  #
// | |, #
\\'-;__/ #
        ##
         #
         #
  .--.   #
/ .'\`\\ \\ #
| \\__. | #
 '.__.'  #
         ##
          #
          #
 __   _   #
[  | | |  #
 | \\_/ |, #
 '.__.'_/ #
          ##
�#
 #
 #
 #
 #
 #
 ##`,ud=`flf2a$ 10 5 10 0 3 0


Figlet conversion by patorjk, April 17, 2008
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
$▐██▌$@
$▐██▌$@
$▐██▌$@
$▓██▒$@
$▒▄▄ $@
$░▀▀▒$@
$░  ░$@
$   ░$@
$░   $@
$    $@@
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
$   $@
$   $@
$   $@
$   $@
$██▓$@
$▒▓▒$@
$░▒ $@
$░  $@
$ ░ $@
$ ░ $@@
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
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
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
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
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
@@`,sd=`flf2a$ 9 9 15 0 11 0 16448 0
Author : myflix
Date   : 2007/6/1 16:06:57
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
!#
 #
 #
 #
 #
 #
 #
 #
 ##
"#
 #
 #
 #
 #
 #
 #
 #
 ##
##
 #
 #
 #
 #
 #
 #
 #
 ##
$#
 #
 #
 #
 #
 #
 #
 #
 ##
%#
 #
 #
 #
 #
 #
 #
 #
 ##
&#
 #
 #
 #
 #
 #
 #
 #
 ##
'#
 #
 #
 #
 #
 #
 #
 #
 ##
(#
 #
 #
 #
 #
 #
 #
 #
 ##
)#
 #
 #
 #
 #
 #
 #
 #
 ##
*#
 #
 #
 #
 #
 #
 #
 #
 ##
+#
 #
 #
 #
 #
 #
 #
 #
 ##
,#
 #
 #
 #
 #
 #
 #
 #
 ##
-#
 #
 #
 #
 #
 #
 #
 #
 ##
.#
 #
 #
 #
 #
 #
 #
 #
 ##
/#
 #
 #
 #
 #
 #
 #
 #
 ##
0#
 #
 #
 #
 #
 #
 #
 #
 ##
1#
 #
 #
 #
 #
 #
 #
 #
 ##
2#
 #
 #
 #
 #
 #
 #
 #
 ##
3#
 #
 #
 #
 #
 #
 #
 #
 ##
4#
 #
 #
 #
 #
 #
 #
 #
 ##
5#
 #
 #
 #
 #
 #
 #
 #
 ##
6#
 #
 #
 #
 #
 #
 #
 #
 ##
7#
 #
 #
 #
 #
 #
 #
 #
 ##
8#
 #
 #
 #
 #
 #
 #
 #
 ##
9#
 #
 #
 #
 #
 #
 #
 #
 ##
:#
 #
 #
 #
 #
 #
 #
 #
 ##
;#
 #
 #
 #
 #
 #
 #
 #
 ##
<#
 #
 #
 #
 #
 #
 #
 #
 ##
=#
 #
 #
 #
 #
 #
 #
 #
 ##
> >#
 #
 #
 #
 #
 #
 #
 #
 ##
?#
 #
 #
 #
 #
 #
 #
 #
 ##
@#
 #
 #
 #
 #
 #
 #
 #
 ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || A ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || B ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || C ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || D ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || E ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || F ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || G ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || H ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || I ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || J ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || K ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || L ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || M ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || N ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || O ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || P ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || Q ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || R ||   #
 _.' \`-' '._ #
(.-./\`-\`\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || S ||   #
 _.' \`-' '._ #
(.-./\`-\`\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || T ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || U ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || V ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || W ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || X ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || Y ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || Z ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
[#
 #
 #
 #
 #
 #
 #
 #
 ##
\\#
 #
 #
 #
 #
 #
 #
 #
 ##
]#
 #
 #
 #
 #
 #
 #
 #
 ##
^#
 #
 #
 #
 #
 #
 #
 #
 ##
_#
 #
 #
 #
 #
 #
 #
 #
 ##
\`#
 #
 #
 #
 #
 #
 #
 #
 ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || A ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || B ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || C ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || D ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || E ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || F ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || G ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || H ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || I ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || J ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || K ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || L ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || M ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || N ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || O ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || P ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || Q ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || R ||   #
 _.' \`-' '._ #
(.-./\`-\`\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || S ||   #
 _.' \`-' '._ #
(.-./\`-\`\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || T ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || U ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || V ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || W ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || X ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || Y ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || Z ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
{#
 #
 #
 #
 #
 #
 #
 #
 ##
|#
 #
 #
 #
 #
 #
 #
 #
 ##
}#
 #
 #
 #
 #
 #
 #
 #
 ##
~#
 #
 #
 #
 #
 #
 #
 #
 ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || A ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || O ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || U ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || A ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || O ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
   _     _   #
  (c).-.(c)  #
   / ._. \\   #
 __\\( Y )/__ #
(_.-/'-'\\-._)#
   || U ||   #
 _.' \`-' '._ #
(.-./\`-'\\.-.)#
 \`-'     \`-' ##
�#
 #
 #
 #
 #
 #
 #
 #
 ##`,cd=`flf2a$ 6 5 15 -1 23
bell.flf
Lower case letters, punctuation, and miscellaneous changes by Kent Nassen, 
                                                      kentn@cyberspace.org
                                                     Last change: 10/11/94
Upper case letters originally by Joshua Bell:

Newsgroups: alt.ascii-art
From: jsbell@acs.ucalgary.ca (Joshua Bell)
Subject: Yet Another Non-Figlet Font
Message-ID: <Mar13.073432.23373@acs.ucalgary.ca>
Date: Sun, 13 Mar 1994 07:34:32 GMT
Organization: The University of Calgary
Lines: 30
Status: RO

I've had this kicking around for a while. If anyone wants to add
in other characters and Figlet-ize it, go right ahead.

Joshua
--
|        "Has it been a bad year, or what?"    - Meriadoc Brandybuck,        |
|           upon returning to the Shire after the War of the Ring.           |
| jsbell@acs.ucalgary.ca  Academic Computing Services, University of Calgary |
$   $@
$   $@
$   $@
$   $@
$   $@
$   $@@
$/@
$|@
$|@
$|@
$\`@
$'@@
$,,@
$//@
$ $@
$ $@
$ $@
$ $@@
$  .  . $@
$ -|--|--@
$  |  | $@
$--|--|-$@
$  '  ' $@
$       $@@
@
@
@
@
@
@@
$ _   ,$@
$/ \\ / $@
$\\_// _$@
$  / / \\@
$ /  \\_/@
$'     $@@
@
@
@
@
@
@@
 ,@
 /@
 $@
 $@
 $@
 $@@
$ ,@
$/ @
$| @
$| @
$. @
$ \`@@
$. @
$ \\@
$ |@
$ |@
$ ,@
$' @@
$   .  @
$\`. | /@
$  \\-' @
$ ,|\\  @
$/ | \\ @
$     $@@
$  ,  $@
$  |  $@
$.----'@
$  |  $@
$  \`  $@
$     $@@
$$@
$$@
$$@
$$@
$,@
$/@@
$    $@
$    $@
$.---'@
$    $@
$    $@
$    $@@
$$@
$$@
$$@
$$@
$/@
$$@@
$   $@
$   /@
$  /$@
$ ,'$@
$,  $@
$   $@@
$  ___/@
$.'  /\\@
$|  / |@
$|,'  |@
$/\`---'@
$     $@@
$ .$@
$/|$@
$ |$@
$ |$@
$_|_@
$  $@@
$ ___$@
$/   \\@
$  _-'@
$ /   @
$/___,@
$     @@
$ ___$@
$/   \\@
$  _-'@
$   \\ @
$\\___)@
$     @@
$     $@
$|   |$@
$\`.__|$@
$    |$@
$    |$@
$     $@@
$ ____@
$|    @
$\`---.@
$    |@
$\\__.'@
$    $@@
$  __$@
$.'   @
$|---.@
$|   |@
$\`._.'@
$    $@@
$ ___$@
$'   \\@
$  __/@
$   /\`@
$  / $@
$    $@@
$ ___ @
$/   \\@
$>---<@
$'   \`@
$\`---'@
$    $@@
$ ___ @
$/   \\@
$\`---|@
$    |@
$\`---'@
$    $@@
$$@
$$@
$/@
$$@
$/@
$$@@
$$@
$$@
$/@
$$@
$,@
$/@@
@
@
@
@
@
@@
$      $@
$      $@
$,-----'@
$      $@
$,-----'@
$      $@@
@
@
@
@
@
@@
$ __ $@
$/  \`.@
$\`   '@
$   /$@
$  , $@
$  ' $@@
  _____ @
 / __. \\@
| /  | |@
| \\__| |@
|    \`-'@
 \`----- @@
     .   @
    /|   @
   /  \\  @
  /---'\\ @
,'      \\@
         @@
$____ $@
$/   \\ @
$|,_-< @
$|    \`@
$\`----'@
$     $@@
$  ___ @
$.'   \\@
$|     @
$|     @
$ \`.__,@
$      @@
$.___ $@
$/   \` @
$|    |@
$|    |@
$/---/ @
$     $@@
$.____$@
$/    $@
$|__. $@
$|    $@
$/----/@
$      @@
$.____@
$/    @
$|__. @
$|    @
$/    @
$     @@
$  ___ $@
$.'   \\$@
$|     $@
$|    _$@
$ \`.___|@
$       @@
$__  __@
$|   | @
$|___| @
$|   | @
$/   / @
$     $@@
$_@
$|@
$|@
$|@
$/@
$$@@
$ _______@
$'   /   @
$    |   @
$    |   @
$ \`--/   @
$       $@@
$.    @
$/   /@
$|_-' @
$|  \\ @
$/   \\@
$     @@
$.    @
$/    @
$|    @
$|    @
$/---/@
$     @@
$__   __@
$|    | @
$|\\  /| @
$| \\/ | @
$/    / @
$       @@
$__    _@
$|\\   | @
$| \\  | @
$|  \\ | @
$|   \\| @
$       @@
$  ___  @
$.'   \`.@
$|     |@
$|     |@
$ \`.__.'@
$       @@
$.___ @
$/   \\@
$|,_-'@
$|    @
$/    @
$     @@
$  ___   @
$.'   \`. @
$|     | @
$|  ,_ | @
$ \`._.\`-.@
$        @@
$.___ @
$/   \\@
$|__-'@
$|  \\ @
$/   \\@
$     @@
$  _____@
$ (     @
$  \`--. @
$     | @
$\\___.' @
$       @@
$ _______@
$'   /   @
$    |   @
$    |   @
$    /   @
$        @@
$.     .@
$/     /@
$|     |@
$|     |@
$ \`._.' @
$       @@
$__    __@
$|     | @
$ \\    / @
$  \\  /  @
$   \\/   @
$        @@
$.       __@
$/       | @
$|       | @
$|  /\\   / @
$|,'  \\,'  @
$          @@
$_     _@
$\`.   / @
$  \\,'  @
$ ,'\\   @
$/   \\  @
$       @@
$_      _@
$ \`.   / @
$   \`./  @
$   ,'   @
$_-'     @
$        @@
$ _______ @
$'      / @
$   .--'  @
$  /      @
$,'______/@
$         @@
$__@
$| @
$| @
$| @
$| @
$--@@
$    @
$\\   @
$ \\  @
$ \`. @
$  \`.@
$    @@
$__@
$ |@
$ |@
$ |@
$ |@
$--@@
@
@
@
@
@
@@
$      $@
$      $@
$      $@
$      $@
$______,@
$'     $@@
$,@
$\\@
$$@
$$@
$$@
$$@@
$     $@
$  ___$@
$ /   \`@
$|    |@
$\`.__/|@
$     $@@
$_    $@
$\\ ___ @
$|/   \\@
$|    \`@
$\`___,'@
$     $@@
$     $@
$  ___ @
$.'   \`@
$|     @
$ \`._.'@
$     $@@
$     _@
$  ___/@
$ /   |@
$,'   |@
$\`___,'@
$     \`@@
$     $@
$  ___$@
$.'   \`@
$|----'@
$\`.___,@
$     $@@
$,__$@
$/  \`@
$|__$@
$|  $@
$|  $@
$/  $@@
$      @
$  ___.@
$.'   \`@
$|    |@
$ \`---|@
$ \\___/@@
$_    $@
$/     @
$|,---.@
$|'   \`@
$/    |@
$     $@@
$ @
$\`@
$|@
$|@
$/@
$$@@
$     $@
$    .$@
$    \\$@
$    |$@
$/\`  |$@
$\\___/\`@@
$\\   $@
$|   ,@
$|  / @
$|-<  @
$/  \\_@
$    $@@
$ .  @
$ |  @
$ |  @
$ |  @
$/\\__@
$    @@
$        $@
$, _ , _ $@
$|' \`|' \`.@
$|   |   |@
$/   '   /@
$        $@@
$     $@
$, __ $@
$|'  \`.@
$|    |@
$/    |@
$     $@@
$     $@
$  __. @
$.'   \\@
$|    |@
$ \`._.'@
$     $@@
$     $@
$\\,___,@
$|    \\@
$|    |@
$|\`---'@
$\\    $@@
$      $@
$  ___.$@
$.'   \`$@
$|    |$@
$ \`---|.@
$     |/@@
$    $@
$.___$@
$/   \\@
$|   '@
$/   $@
$    $@@
$     $@
$  ____@
$ (    @
$ \`--.$@
$\\___.'@
$     $@@
$ .  $@
$_/_  @
$ |   @
$ |   @
$ \\__/@
$    $@@
$    $@
$,   .@
$|   |@
$|   |@
$\`._/|@
$    $@@
$     $@
$_   __@
$|   / @
$\`  / $@
$ \\/  $@
$     $@@
$       @
$,  _  /@
$|  |  |@
$\`  ^  '@
$ \\/ \\/$@
$      $@@
$    $@
$_  .-@
$ \\,'$@
$ /\\ $@
$/  \\$@
$    $@@
$      $@
$,    .$@
$|    \`$@
$|    |$@
$ \`---|.@
$ \\___/$@@
$    $@
$____$@
$   /$@
$ ,/ $@
$/__.'@
$\`   $@@
$ _@
$/ @
_| @
$| @
$\\_@
$ $@@
$.@
$|@
$|@
$|@
$|@
$\`@@
_ $@
 \\$@
 |_@
 |$@
_/$@
$ $@@
 @
 @
 @
 @
 @
~@@
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
@@
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
@@
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
@@
@
@
@
@
@
@@
`,Td=`flf2a$ 8 7 18 4 25
crawford.flf (FIGlet font)


Figlet conversion by Kent Nassen, knassen@umich.edu, 1/2/95

From: s1171180@giaeb.cc.monash.edu.au (Rowan Crawford)
Newsgroups: alt.ascii-art
Subject: Font - Style No 2....
Date: 14 Jan 1994 14:37:30 GMT
Organization: Monash University
Lines: 41
Message-ID: <2h6ana$db6@harbinger.cc.monash.edu.au>
NNTP-Posting-Host: giaeb.cc.monash.edu.au
X-Newsreader: NN version 6.5.0 #4 (NOV)
Status: RO

Had some spare time today, so I have done another font. Different
form to the last one though:

[...]
And there you are. "S" looks slightly odd and so does "J", but
otherwise fairly neat I guess.

Row.

$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
 __ @
|  T@
|  |@
|__j@
 __ @
|  T@
l__j@
    @@
$__  __ @
T  |T  |@
l_ |l_ |@
$ \\l  \\l@
$       @
$       @
$       @
$       @@
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
@@
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
@@
 __ @
T  |@
l_ |@
  \\l@
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
@@
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
@@
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
 __ @
T  |@
l_ |@
  \\l@@
       @
       @
 _____ @
|     |@
l_____j@
       @
       @
       @@
    @
    @
    @
    @
 __ @
|  T@
l__j@
    @@
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
@@
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
@@
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
@@
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
@@
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
@@
@
@
@
@
@
@
@
@@
    @
 __ @
|  T@
l__j@
 __ @
|  T@
l__j@
    @@
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
@@
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
@@
 _____ @
/     T@
|  Y  |@
l__|  |@
   l__j@
    __ @
   l__j@
       @@
  ____ @
 /    \\@
Y   _ j@
|  T  |@
|  \\__|@
|     |@
 \\__,_j@
       @@
  ____ @
 /    T@
Y  o  |@
|     |@
|  _  |@
|  |  |@
l__j__j@
       @@
 ____  @
|    \\ @
|  o  )@
|     T@
|  O  |@
|     |@
l_____j@
       @@
    __ @
   /  ]@
  /  / @
 /  /  @
/   \\_ @
\\     |@
 \\____j@
       @@
 ___   @
|   \\  @
|    \\ @
|  D  Y@
|     |@
|     |@
l_____j@
       @@
   ___ @
  /  _]@
 /  [_ @
Y    _]@
|   [_ @
|     T@
l_____j@
       @@
 _____ @
|     |@
|   __j@
|  l_  @
|   _] @
|  T   @
l__j   @
       @@
  ____ @
 /    T@
Y   __j@
|  T  |@
|  l_ |@
|     |@
l___,_j@
       @@
 __ __ @
|  T  T@
|  l  |@
|  _  |@
|  |  |@
|  |  |@
l__j__j@
       @@
 ____ @
l    j@
 |  T @
 |  | @
 |  | @
 j  l @
|____j@
      @@
  ____ @
 |    |@
 l__  |@
 __j  |@
/  |  |@
\\  \`  |@
 \\____j@
       @@
 __  _ @
|  l/ ]@
|  ' / @
|    \\ @
|     Y@
|  .  |@
l__j\\_j@
       @@
 _     @
| T    @
| |    @
| l___ @
|     T@
|     |@
l_____j@
       @@
 ___ ___ @
|   T   T@
| _   _ |@
|  \\_/  |@
|   |   |@
|   |   |@
l___j___j@
         @@
 ____  @
|    \\ @
|  _  Y@
|  |  |@
|  |  |@
|  |  |@
l__j__j@
       @@
  ___  @
 /   \\ @
Y     Y@
|  O  |@
|     |@
l     !@
 \\___/ @
       @@
 ____  @
|    \\ @
|  o  )@
|   _/ @
|  |   @
|  |   @
l__j   @
       @@
  ___  @
 /   \\ @
Y     Y@
|  Q  |@
|     |@
l     |@
 \\__,_j@
       @@
 ____  @
|    \\ @
|  D  )@
|    / @
|    \\ @
|  .  Y@
l__j\\_j@
       @@
  _____@
 / ___/@
(   \\_ @
 \\__  T@
 /  \\ |@
 \\    |@
  \\___j@
       @@
 ______ @
|      T@
|      |@
l_j  l_j@
  |  |  @
  |  |  @
  l__j  @
        @@
 __ __ @
|  T  T@
|  |  |@
|  |  |@
|  :  |@
l     |@
 \\__,_j@
       @@
 __ __ @
|  T  |@
|  |  |@
|  |  |@
l  :  !@
 \\   / @
  \\_/  @
       @@
 __    __ @
|  T__T  T@
|  |  |  |@
|  |  |  |@
l  \`  '  !@
 \\      / @
  \\_/\\_/  @
          @@
 __ __ @
|  T  T@
|  |  |@
l_   _j@
|     |@
|  |  |@
|__j__|@
       @@
 __ __ @
|  T  T@
|  |  |@
|  ~  |@
l___, |@
|     !@
l____/ @
       @@
 _____ @
|     T@
l__/  |@
|   __j@
|  /  |@
|     |@
l_____j@
       @@
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
@@
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
@@
@
@
@
@
@
@
@
@@
 __ @
|  T@
| _j@
|/  @
    @
    @
    @
    @@
  ____ @
 /    T@
Y  o  |@
|     |@
|  _  |@
|  |  |@
l__j__j@
       @@
 ____  @
|    \\ @
|  o  )@
|     T@
|  O  |@
|     |@
l_____j@
       @@
    __ @
   /  ]@
  /  / @
 /  /  @
/   \\_ @
\\     |@
 \\____j@
       @@
 ___   @
|   \\  @
|    \\ @
|  D  Y@
|     |@
|     |@
l_____j@
       @@
   ___ @
  /  _]@
 /  [_ @
Y    _]@
|   [_ @
|     T@
l_____j@
       @@
 _____ @
|     |@
|   __j@
|  l_  @
|   _] @
|  T   @
l__j   @
       @@
  ____ @
 /    T@
Y   __j@
|  T  |@
|  l_ |@
|     |@
l___,_j@
       @@
 __ __ @
|  T  T@
|  l  |@
|  _  |@
|  |  |@
|  |  |@
l__j__j@
       @@
 ____ @
l    j@
 |  T @
 |  | @
 |  | @
 j  l @
|____j@
      @@
  ____ @
 |    |@
 l__  |@
 __j  |@
/  |  |@
\\  \`  |@
 \\____j@
       @@
 __  _ @
|  l/ ]@
|  ' / @
|    \\ @
|     Y@
|  .  |@
l__j\\_j@
       @@
 _     @
| T    @
| |    @
| l___ @
|     T@
|     |@
l_____j@
       @@
 ___ ___ @
|   T   T@
| _   _ |@
|  \\_/  |@
|   |   |@
|   |   |@
l___j___j@
         @@
 ____  @
|    \\ @
|  _  Y@
|  |  |@
|  |  |@
|  |  |@
l__j__j@
       @@
  ___  @
 /   \\ @
Y     Y@
|  O  |@
|     |@
l     !@
 \\___/ @
       @@
 ____  @
|    \\ @
|  o  )@
|   _/ @
|  |   @
|  |   @
l__j   @
       @@
  ___  @
 /   \\ @
Y     Y@
|  Q  |@
|     |@
l     |@
 \\__,_j@
       @@
 ____  @
|    \\ @
|  D  )@
|    / @
|    \\ @
|  .  Y@
l__j\\_j@
       @@
  _____@
 / ___/@
(   \\_ @
 \\__  T@
 /  \\ |@
 \\    |@
  \\___j@
       @@
 ______ @
|      T@
|      |@
l_j  l_j@
  |  |  @
  |  |  @
  l__j  @
        @@
 __ __ @
|  T  T@
|  |  |@
|  |  |@
|  :  |@
l     |@
 \\__,_j@
       @@
 __ __ @
|  T  |@
|  |  |@
|  |  |@
l  :  !@
 \\   / @
  \\_/  @
       @@
 __    __ @
|  T__T  T@
|  |  |  |@
|  |  |  |@
l  \`  '  !@
 \\      / @
  \\_/\\_/  @
          @@
 __ __ @
|  T  T@
|  |  |@
l_   _j@
|     |@
|  |  |@
|__j__|@
       @@
 __ __ @
|  T  T@
|  |  |@
|  ~  |@
l___, |@
|     !@
l____/ @
       @@
 _____ @
|     T@
l__/  |@
|   __j@
|  /  |@
|     |@
l_____j@
       @@
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
@@
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
@@
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
@@
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
@@
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
@@
@
@
@
@
@
@
@
@@
`,fd=`flf2a$ 8 4 14 0 25 0 16256
Cricket by Leslie Bates        Jan. 1, 1996
cricket9@aros.net       http://www.aros.net/~cricket9
I wish to thank Wade Fincher for the SIG that was used as a base for Cricket as
well as Chris Gill who designed the Square font, some of which was used in 
Cricket. And finally I wish to thank Paul Burton, who if it was not for his 
desire to create FIGWin, I may never have had the motivation to create a 
FIGfont.
 FIGWin is the Windows clone of FIGlet with a full featured FIGfont editor!
 Forget about doing the math to figure out the smushmode number.  Just check a
 few boxes for each smushing rule.  Forget about endmarks -- let the computer
 figure out how tall and how wide your font is.  Just draw FIGfonts with the
 mouse and wipe the smudgemarks off your screen from all that counting!

 FIGWin is full of features, but it's designed for use by a complete idiot.  If
 you qualify, visit the FIGWin website.  Screen shots are shown, and of course
 you can download it.  (FREE!)

                      http://home.earthlink.net/~solution

 Also see the FIGlet website:  http://st-www.cs.uiuc.edu/users/chai/figlet.html

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@@
  __ @
 |  |@
 |__|@
 |__|@
     @
     @
     @
     @@
  ____ @
 | |  |@
  |_|_|@
       @
       @
       @
       @
       @@
    _____   @
  _|  |  |_ @
 |_       _|@
 |_       _|@
   |__|__|  @
            @
            @
            @@
  __,-,__ @
 |  ' '__|@
 |__     |@
 |_______|@
    |_|   @
          @
          @
          @@
  __ ___ @
 |__|   |@
 |    __|@
 |___|__|@
         @
         @
         @
         @@
  __,-,__ @
 |  ' '__|@
 |     __|@
 |_______|@
    |_|   @
          @
          @
          @@
  __ @
 |  |@
  |_|@
     @
     @
     @
     @
     @@
   ___ @
 ,'  _|@
 |  |  @
 |  |_ @
 \`.___|@
       @
       @
       @@
  ___  @
 |_  \`.@
   |  |@
  _|  |@
 |___,'@
       @
       @
       @@
  __ _ __ @
 |  | |  |@
  >     < @
 |__|_|__|@
          @
          @
          @
          @@
    __   @
  _|  |_ @
 |_    _|@
   |__|  @
         @
         @
         @
         @@
     @
     @
  __ @
 |  |@
  |_|@
     @
     @
     @@
         @
  ______ @
 |______|@
         @
         @
         @
         @
         @@
     @
     @
  __ @
 |__|@
     @
     @
     @
     @@
     ___@
    /  /@
  ,' ,' @
 /__/   @
        @
        @
        @
        @@
  _______ @
 |   _   |@
 |.  |   |@
 |.  |   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  _____ @
 | _   |@
 |.|   |@
 \`-|.  |@
   |:  |@
   |::.|@
   \`---'@
        @@
  _______ @
 |       |@
 |___|   |@
  /  ___/ @
 |:  1  \\ @
 |::.. . |@
 \`-------'@
          @@
  _______ @
 |   _   |@
 |___|   |@
  _(__   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  ___ ___ @
 |   Y   |@
 |   |   |@
 |____   |@
     |:  |@
     |::.|@
     \`---'@
          @@
  _______ @
 |   _   |@
 |   1___|@
 |____   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  _______ @
 |   _   |@
 |   1___|@
 |.     \\ @
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  _______ @
 |   _   |@
 |___|   |@
    /   / @
   |   |  @
   |   |  @
   \`---'  @
          @@
  _______ @
 |   _   |@
 |.  |   |@
 |.  _   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  _______ @
 |   _   |@
 |   |   |@
  \\___   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  __ @
 |__|@
  __ @
 |__|@
     @
     @
     @
     @@
  __ @
 |__|@
  __ @
 |  |@
  |_|@
     @
     @
     @@
    __ @
  ,' _|@
 /  /  @
 \\  \\_ @
  \`.__|@
       @
       @
       @@
         @
  ______ @
 |______|@
 |______|@
         @
         @
         @
         @@
  __   @
 |_ \`. @
   \\  \\@
  _/  /@
 |__,' @
       @
       @
       @@
  _____ @
 |__   |@
 ',  ,- @
  |--|  @
  '--   @
        @
        @
        @@
  _________ @
 |   ___   |@
 |  |  _   |@
 |  |______|@
 |_________|@
            @
            @
            @@
  _______ @
 |   _   |@
 |.  1   |@
 |.  _   |@
 |:  |   |@
 |::.|:. |@
 \`--- ---'@
          @@
  _______  @
 |   _   \\ @
 |.  1   / @
 |.  _   \\ @
 |:  1    \\@
 |::.. .  /@
 \`-------' @
           @@
  _______ @
 |   _   |@
 |.  1___|@
 |.  |___ @
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  ______   @
 |   _  \\  @
 |.  |   \\ @
 |.  |    \\@
 |:  1    /@
 |::.. . / @
 \`------'  @
           @@
  _______ @
 |   _   |@
 |.  1___|@
 |.  __)_ @
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  _______ @
 |   _   |@
 |.  1___|@
 |.  __)  @
 |:  |    @
 |::.|    @
 \`---'    @
          @@
  _______ @
 |   _   |@
 |.  |___|@
 |.  |   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  ___ ___ @
 |   Y   |@
 |.  1   |@
 |.  _   |@
 |:  |   |@
 |::.|:. |@
 \`--- ---'@
          @@
  ___ @
 |   |@
 |.  |@
 |.  |@
 |:  |@
 |::.|@
 \`---'@
      @@
  _______ @
 |   _   |@
 |___|   |@
 |.  |   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  ___ ___  @
 |   Y   ) @
 |.  1  /  @
 |.  _  \\  @
 |:  |   \\ @
 |::.| .  )@
 \`--- ---' @
           @@
  ___     @
 |   |    @
 |.  |    @
 |.  |___ @
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  ___ ___ @
 |   Y   |@
 |.      |@
 |. \\_/  |@
 |:  |   |@
 |::.|:. |@
 \`--- ---'@
          @@
  ______  @
 |   _  \\ @
 |.  |   |@
 |.  |   |@
 |:  |   |@
 |::.|   |@
 \`--- ---'@
          @@
  _______ @
 |   _   |@
 |.  |   |@
 |.  |   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  _______ @
 |   _   |@
 |.  1   |@
 |.  ____|@
 |:  |    @
 |::.|    @
 \`---'    @
          @@
  _______ @
 |   _   |@
 |.  |   |@
 |.  |   |@
 |:  1   |@
 |::..   |@
 \`----|:.|@
      \`--'@@
  _______ @
 |   _   \\@
 |.  l   /@
 |.  _   1@
 |:  |   |@
 |::.|:. |@
 \`--- ---'@
          @@
  _______ @
 |   _   |@
 |   1___|@
 |____   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  _______ @
 |       |@
 |.|   | |@
 \`-|.  |-'@
   |:  |  @
   |::.|  @
   \`---'  @
          @@
  ___ ___ @
 |   Y   |@
 |.  |   |@
 |.  |   |@
 |:  1   |@
 |::.. . |@
 \`-------'@
          @@
  ___ ___ @
 |   Y   |@
 |.  |   |@
 |.  |   |@
 |:  1   |@
  \\:.. ./ @
   \`---'  @
          @@
  ___ ___ @
 |   Y   |@
 |.  |   |@
 |. / \\  |@
 |:      |@
 |::.|:. |@
 \`--- ---'@
          @@
   ___ ___  @
  (   Y   ) @
   \\  1  /  @
   /  _  \\  @
  /:  |   \\ @
 (::. |:.  )@
  \`--- ---' @
            @@
  ___ ___ @
 |   Y   |@
 |   1   |@
  \\_   _/ @
   |:  |  @
   |::.|  @
   \`---'  @
          @@
  _______ @
 |   _   |@
 |___|   |@
  /  ___/ @
 |:  1  \\ @
 |::.. . |@
 \`-------'@
          @@
  ____ @
 |   _|@
 |  |  @
 |  |_ @
 |____|@
       @
       @
       @@
 ___    @
 \\  \\   @
  \`. \`. @
    \\__\\@
        @
        @
        @
        @@
  ____ @
 |_   |@
   |  |@
  _|  |@
 |____|@
       @
       @
       @@
  ____ @
 |    |@
 |_/\\_|@
       @
       @
       @
       @
       @@
         @
         @
         @
  ______ @
 |______|@
         @
         @
         @@
  __ @
 |  |@
 |_| @
     @
     @
     @
     @
     @@
        @
 .---.-.@
 |  _  |@
 |___._|@
        @
        @
        @
        @@
  __    @
 |  |--.@
 |  _  |@
 |_____|@
        @
        @
        @
        @@
       @
 .----.@
 |  __|@
 |____|@
       @
       @
       @
       @@
     __ @
 .--|  |@
 |  _  |@
 |_____|@
        @
        @
        @
        @@
        @
 .-----.@
 |  -__|@
 |_____|@
        @
        @
        @
        @@
   ___ @
 .'  _|@
 |   _|@
 |__|  @
       @
       @
       @
       @@
        @
 .-----.@
 |  _  |@
 |___  |@
 |_____|@
        @
        @
        @@
  __    @
 |  |--.@
 |     |@
 |__|__|@
        @
        @
        @
        @@
  __ @
 |__|@
 |  |@
 |__|@
     @
     @
     @
     @@
   __ @
  |__|@
  |  |@
  |  |@
 |___|@
      @
      @
      @@
  __    @
 |  |--.@
 |    < @
 |__|__|@
        @
        @
        @
        @@
  __ @
 |  |@
 |  |@
 |__|@
     @
     @
     @
     @@
           @
 .--------.@
 |        |@
 |__|__|__|@
           @
           @
           @
           @@
        @
 .-----.@
 |     |@
 |__|__|@
        @
        @
        @
        @@
        @
 .-----.@
 |  _  |@
 |_____|@
        @
        @
        @
        @@
        @
 .-----.@
 |  _  |@
 |   __|@
 |__|   @
        @
        @
        @@
        @
 .-----.@
 |  _  |@
 |__   |@
    |__|@
        @
        @
        @@
       @
 .----.@
 |   _|@
 |__|  @
       @
       @
       @
       @@
        @
 .-----.@
 |__ --|@
 |_____|@
        @
        @
        @
        @@
  __   @
 |  |_ @
 |   _|@
 |____|@
       @
       @
       @
       @@
        @
 .--.--.@
 |  |  |@
 |_____|@
        @
        @
        @
        @@
        @
 .--.--.@
 |  |  |@
  \\___/ @
        @
        @
        @
        @@
           @
 .--.--.--.@
 |  |  |  |@
 |________|@
           @
           @
           @
           @@
        @
 .--.--.@
 |_   _|@
 |__.__|@
        @
        @
        @
        @@
        @
 .--.--.@
 |  |  |@
 |___  |@
 |_____|@
        @
        @
        @@
        @
 .-----.@
 |-- __|@
 |_____|@
        @
        @
        @
        @@
   ___ @
  |  _|@
 /  /  @
 \\  \\_ @
  |___|@
       @
       @
       @@
  __ @
 |  |@
 |  |@
 |  |@
 |__|@
     @
     @
     @@
  ___  @
 |_  | @
   \\  \\@
  _/  /@
 |___| @
       @
       @
       @@
   ___ @
  | ' |@
 |_,_| @
       @
       @
       @
       @
       @@
 .--.--.@
 |-----|@
 |  -  |@
 |__|__|@
        @
        @
        @
        @@
 .--.--.@
 |-----|@
 |  _  |@
 |_____|@
        @
        @
        @
        @@
 .--.--.@
 |--|--|@
 |  |  |@
 |_____|@
        @
        @
        @
        @@
 .--.--.@
 |---.-|@
 |  _  |@
 |___._|@
        @
        @
        @
        @@
 .--.--.@
 |-----|@
 |  _  |@
 |_____|@
        @
        @
        @
        @@
 .--.--.@
 |--|--|@
 |  |  |@
 |_____|@
        @
        @
        @
        @@
  _______ @
 |    __ \\@
 |    __ <@
 |  |____/@
 |__|     @
          @
          @
          @@
`,dd=`flf2a 3 2 6 1 11 0 16513
Digital by Glenn Chappell 1/94 -- based on Bubble
Includes characters 128-255
Enhanced for Latin-2,3,4 by John Cowan <cowan@ccil.org>
Latin character sets supported only if your screen font does
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 @
 @
 @@
 +-+@
 |!|@
 +-+@@
 +-+@
 |"|@
 +-+@@
 +-+@
 |#|@
 +-+@@
 +-+@
 |$|@
 +-+@@
 +-+@
 |%|@
 +-+@@
 +-+@
 |&|@
 +-+@@
 +-+@
 |'|@
 +-+@@
 +-+@
 |(|@
 +-+@@
 +-+@
 |)|@
 +-+@@
 +-+@
 |*|@
 +-+@@
 +-+@
 |+|@
 +-+@@
 +-+@
 |,|@
 +-+@@
 +-+@
 |-|@
 +-+@@
 +-+@
 |.|@
 +-+@@
 +-+@
 |/|@
 +-+@@
 +-+@
 |0|@
 +-+@@
 +-+@
 |1|@
 +-+@@
 +-+@
 |2|@
 +-+@@
 +-+@
 |3|@
 +-+@@
 +-+@
 |4|@
 +-+@@
 +-+@
 |5|@
 +-+@@
 +-+@
 |6|@
 +-+@@
 +-+@
 |7|@
 +-+@@
 +-+@
 |8|@
 +-+@@
 +-+@
 |9|@
 +-+@@
 +-+@
 |:|@
 +-+@@
 +-+@
 |;|@
 +-+@@
 +-+@
 |<|@
 +-+@@
 +-+@
 |=|@
 +-+@@
 +-+@
 |>|@
 +-+@@
 +-+@
 |?|@
 +-+@@
 +-+@
 |@|@
 +-+@@
 +-+@
 |A|@
 +-+@@
 +-+@
 |B|@
 +-+@@
 +-+@
 |C|@
 +-+@@
 +-+@
 |D|@
 +-+@@
 +-+@
 |E|@
 +-+@@
 +-+@
 |F|@
 +-+@@
 +-+@
 |G|@
 +-+@@
 +-+@
 |H|@
 +-+@@
 +-+@
 |I|@
 +-+@@
 +-+@
 |J|@
 +-+@@
 +-+@
 |K|@
 +-+@@
 +-+@
 |L|@
 +-+@@
 +-+@
 |M|@
 +-+@@
 +-+@
 |N|@
 +-+@@
 +-+@
 |O|@
 +-+@@
 +-+@
 |P|@
 +-+@@
 +-+@
 |Q|@
 +-+@@
 +-+@
 |R|@
 +-+@@
 +-+@
 |S|@
 +-+@@
 +-+@
 |T|@
 +-+@@
 +-+@
 |U|@
 +-+@@
 +-+@
 |V|@
 +-+@@
 +-+@
 |W|@
 +-+@@
 +-+@
 |X|@
 +-+@@
 +-+@
 |Y|@
 +-+@@
 +-+@
 |Z|@
 +-+@@
 +-+@
 |[|@
 +-+@@
 +-+@
 |\\|@
 +-+@@
 +-+@
 |]|@
 +-+@@
 +-+@
 |^|@
 +-+@@
 +-+@
 |_|@
 +-+@@
 +-+@
 |\`|@
 +-+@@
 +-+@
 |a|@
 +-+@@
 +-+@
 |b|@
 +-+@@
 +-+@
 |c|@
 +-+@@
 +-+@
 |d|@
 +-+@@
 +-+@
 |e|@
 +-+@@
 +-+@
 |f|@
 +-+@@
 +-+@
 |g|@
 +-+@@
 +-+@
 |h|@
 +-+@@
 +-+@
 |i|@
 +-+@@
 +-+@
 |j|@
 +-+@@
 +-+@
 |k|@
 +-+@@
 +-+@
 |l|@
 +-+@@
 +-+@
 |m|@
 +-+@@
 +-+@
 |n|@
 +-+@@
 +-+@
 |o|@
 +-+@@
 +-+@
 |p|@
 +-+@@
 +-+@
 |q|@
 +-+@@
 +-+@
 |r|@
 +-+@@
 +-+@
 |s|@
 +-+@@
 +-+@
 |t|@
 +-+@@
 +-+@
 |u|@
 +-+@@
 +-+@
 |v|@
 +-+@@
 +-+@
 |w|@
 +-+@@
 +-+@
 |x|@
 +-+@@
 +-+@
 |y|@
 +-+@@
 +-+@
 |z|@
 +-+@@
 +-+@
 |{|@
 +-+@@
 +-+@
 |||@
 +-+@@
 +-+@
 |}|@
 +-+@@
 +-+@
 |~|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
 +-+@
 |�|@
 +-+@@
128
 +-+@
 |�|@
 +-+@@
129
 +-+@
 |�|@
 +-+@@
130
 +-+@
 |�|@
 +-+@@
131
 +-+@
 |�|@
 +-+@@
132
 +-+@
 |�|@
 +-+@@
133
 +-+@
 |�|@
 +-+@@
134
 +-+@
 |�|@
 +-+@@
135
 +-+@
 |�|@
 +-+@@
136
 +-+@
 |�|@
 +-+@@
137
 +-+@
 |�|@
 +-+@@
138
 +-+@
 |�|@
 +-+@@
139
 +-+@
 |�|@
 +-+@@
140
 +-+@
 |�|@
 +-+@@
141
 +-+@
 |�|@
 +-+@@
142
 +-+@
 |�|@
 +-+@@
143
 +-+@
 |�|@
 +-+@@
144
 +-+@
 |�|@
 +-+@@
145
 +-+@
 |�|@
 +-+@@
146
 +-+@
 |�|@
 +-+@@
147
 +-+@
 |�|@
 +-+@@
148
 +-+@
 |�|@
 +-+@@
149
 +-+@
 |�|@
 +-+@@
150
 +-+@
 |�|@
 +-+@@
151
 +-+@
 |�|@
 +-+@@
152
 +-+@
 |�|@
 +-+@@
153
 +-+@
 |�|@
 +-+@@
154
 +-+@
 |�|@
 +-+@@
155
 +-+@
 |�|@
 +-+@@
156
 +-+@
 |�|@
 +-+@@
157
 +-+@
 |�|@
 +-+@@
158
 +-+@
 |�|@
 +-+@@
159
 +-+@
 |�|@
 +-+@@
160  NO-BREAK SPACE
 +-+@
 |�|@
 +-+@@
161  INVERTED EXCLAMATION MARK
 +-+@
 |�|@
 +-+@@
162  CENT SIGN
 +-+@
 |�|@
 +-+@@
163  POUND SIGN
 +-+@
 |�|@
 +-+@@
164  CURRENCY SIGN
 +-+@
 |�|@
 +-+@@
165  YEN SIGN
 +-+@
 |�|@
 +-+@@
166  BROKEN BAR
 +-+@
 |�|@
 +-+@@
167  SECTION SIGN
 +-+@
 |�|@
 +-+@@
168  DIAERESIS
 +-+@
 |�|@
 +-+@@
169  COPYRIGHT SIGN
 +-+@
 |�|@
 +-+@@
170  FEMININE ORDINAL INDICATOR
 +-+@
 |�|@
 +-+@@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
 +-+@
 |�|@
 +-+@@
172  NOT SIGN
 +-+@
 |�|@
 +-+@@
173  SOFT HYPHEN
 +-+@
 |�|@
 +-+@@
174  REGISTERED SIGN
 +-+@
 |�|@
 +-+@@
175  MACRON
 +-+@
 |�|@
 +-+@@
176  DEGREE SIGN
 +-+@
 |�|@
 +-+@@
177  PLUS-MINUS SIGN
 +-+@
 |�|@
 +-+@@
178  SUPERSCRIPT TWO
 +-+@
 |�|@
 +-+@@
179  SUPERSCRIPT THREE
 +-+@
 |�|@
 +-+@@
180  ACUTE ACCENT
 +-+@
 |�|@
 +-+@@
181  MICRO SIGN
 +-+@
 |�|@
 +-+@@
182  PILCROW SIGN
 +-+@
 |�|@
 +-+@@
183  MIDDLE DOT
 +-+@
 |�|@
 +-+@@
184  CEDILLA
 +-+@
 |�|@
 +-+@@
185  SUPERSCRIPT ONE
 +-+@
 |�|@
 +-+@@
186  MASCULINE ORDINAL INDICATOR
 +-+@
 |�|@
 +-+@@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 +-+@
 |�|@
 +-+@@
188  VULGAR FRACTION ONE QUARTER
 +-+@
 |�|@
 +-+@@
189  VULGAR FRACTION ONE HALF
 +-+@
 |�|@
 +-+@@
190  VULGAR FRACTION THREE QUARTERS
 +-+@
 |�|@
 +-+@@
191  INVERTED QUESTION MARK
 +-+@
 |�|@
 +-+@@
192  LATIN CAPITAL LETTER A WITH GRAVE
 +-+@
 |�|@
 +-+@@
193  LATIN CAPITAL LETTER A WITH ACUTE
 +-+@
 |�|@
 +-+@@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
195  LATIN CAPITAL LETTER A WITH TILDE
 +-+@
 |�|@
 +-+@@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
198  LATIN CAPITAL LETTER AE
 +-+@
 |�|@
 +-+@@
199  LATIN CAPITAL LETTER C WITH CEDILLA
 +-+@
 |�|@
 +-+@@
200  LATIN CAPITAL LETTER E WITH GRAVE
 +-+@
 |�|@
 +-+@@
201  LATIN CAPITAL LETTER E WITH ACUTE
 +-+@
 |�|@
 +-+@@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
204  LATIN CAPITAL LETTER I WITH GRAVE
 +-+@
 |�|@
 +-+@@
205  LATIN CAPITAL LETTER I WITH ACUTE
 +-+@
 |�|@
 +-+@@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
208  LATIN CAPITAL LETTER ETH
 +-+@
 |�|@
 +-+@@
209  LATIN CAPITAL LETTER N WITH TILDE
 +-+@
 |�|@
 +-+@@
210  LATIN CAPITAL LETTER O WITH GRAVE
 +-+@
 |�|@
 +-+@@
211  LATIN CAPITAL LETTER O WITH ACUTE
 +-+@
 |�|@
 +-+@@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
213  LATIN CAPITAL LETTER O WITH TILDE
 +-+@
 |�|@
 +-+@@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
215  MULTIPLICATION SIGN
 +-+@
 |�|@
 +-+@@
216  LATIN CAPITAL LETTER O WITH STROKE
 +-+@
 |�|@
 +-+@@
217  LATIN CAPITAL LETTER U WITH GRAVE
 +-+@
 |�|@
 +-+@@
218  LATIN CAPITAL LETTER U WITH ACUTE
 +-+@
 |�|@
 +-+@@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
221  LATIN CAPITAL LETTER Y WITH ACUTE
 +-+@
 |�|@
 +-+@@
222  LATIN CAPITAL LETTER THORN
 +-+@
 |�|@
 +-+@@
223  LATIN SMALL LETTER SHARP S
 +-+@
 |�|@
 +-+@@
224  LATIN SMALL LETTER A WITH GRAVE
 +-+@
 |�|@
 +-+@@
225  LATIN SMALL LETTER A WITH ACUTE
 +-+@
 |�|@
 +-+@@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
227  LATIN SMALL LETTER A WITH TILDE
 +-+@
 |�|@
 +-+@@
228  LATIN SMALL LETTER A WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
229  LATIN SMALL LETTER A WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
230  LATIN SMALL LETTER AE
 +-+@
 |�|@
 +-+@@
231  LATIN SMALL LETTER C WITH CEDILLA
 +-+@
 |�|@
 +-+@@
232  LATIN SMALL LETTER E WITH GRAVE
 +-+@
 |�|@
 +-+@@
233  LATIN SMALL LETTER E WITH ACUTE
 +-+@
 |�|@
 +-+@@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
235  LATIN SMALL LETTER E WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
236  LATIN SMALL LETTER I WITH GRAVE
 +-+@
 |�|@
 +-+@@
237  LATIN SMALL LETTER I WITH ACUTE
 +-+@
 |�|@
 +-+@@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
239  LATIN SMALL LETTER I WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
240  LATIN SMALL LETTER ETH
 +-+@
 |�|@
 +-+@@
241  LATIN SMALL LETTER N WITH TILDE
 +-+@
 |�|@
 +-+@@
242  LATIN SMALL LETTER O WITH GRAVE
 +-+@
 |�|@
 +-+@@
243  LATIN SMALL LETTER O WITH ACUTE
 +-+@
 |�|@
 +-+@@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
245  LATIN SMALL LETTER O WITH TILDE
 +-+@
 |�|@
 +-+@@
246  LATIN SMALL LETTER O WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
247  DIVISION SIGN
 +-+@
 |�|@
 +-+@@
248  LATIN SMALL LETTER O WITH STROKE
 +-+@
 |�|@
 +-+@@
249  LATIN SMALL LETTER U WITH GRAVE
 +-+@
 |�|@
 +-+@@
250  LATIN SMALL LETTER U WITH ACUTE
 +-+@
 |�|@
 +-+@@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
252  LATIN SMALL LETTER U WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
253  LATIN SMALL LETTER Y WITH ACUTE
 +-+@
 |�|@
 +-+@@
254  LATIN SMALL LETTER THORN
 +-+@
 |�|@
 +-+@@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 +-+@
 |�|@
 +-+@@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0101  LATIN SMALL LETTER A WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
 +-+@
 |�|@
 +-+@@
0x0103  LATIN SMALL LETTER A WITH BREVE
 +-+@
 |�|@
 +-+@@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0107  LATIN SMALL LETTER C WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x010C  LATIN CAPITAL LETTER C WITH CARON
 +-+@
 |�|@
 +-+@@
0x010D  LATIN SMALL LETTER C WITH CARON
 +-+@
 |�|@
 +-+@@
0x010E  LATIN CAPITAL LETTER D WITH CARON
 +-+@
 |�|@
 +-+@@
0x010F  LATIN SMALL LETTER D WITH CARON
 +-+@
 |�|@
 +-+@@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0111  LATIN SMALL LETTER D WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0113  LATIN SMALL LETTER E WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
 +-+@
 |�|@
 +-+@@
0x011B  LATIN SMALL LETTER E WITH CARON
 +-+@
 |�|@
 +-+@@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
 +-+@
 |�|@
 +-+@@
0x011F  LATIN SMALL LETTER G WITH BREVE
 +-+@
 |�|@
 +-+@@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0127  LATIN SMALL LETTER H WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
 +-+@
 |�|@
 +-+@@
0x0129  LATIN SMALL LETTER I WITH TILDE
 +-+@
 |�|@
 +-+@@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 +-+@
 |�|@
 +-+@@
0x012B  LATIN SMALL LETTER I WITH MACRON
 +-+@
 |�|@
 +-+@@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x0131  LATIN SMALL LETTER DOTLESS I
 +-+@
 |�|@
 +-+@@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0138  LATIN SMALL LETTER KRA
 +-+@
 |�|@
 +-+@@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x013A  LATIN SMALL LETTER L WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
 +-+@
 |�|@
 +-+@@
0x013E  LATIN SMALL LETTER L WITH CARON
 +-+@
 |�|@
 +-+@@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0142  LATIN SMALL LETTER L WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0144  LATIN SMALL LETTER N WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0147  LATIN CAPITAL LETTER N WITH CARON
 +-+@
 |�|@
 +-+@@
0x0148  LATIN SMALL LETTER N WITH CARON
 +-+@
 |�|@
 +-+@@
0x014A  LATIN CAPITAL LETTER ENG
 +-+@
 |�|@
 +-+@@
0x014B  LATIN SMALL LETTER ENG
 +-+@
 |�|@
 +-+@@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
 +-+@
 |�|@
 +-+@@
0x014D  LATIN SMALL LETTER O WITH MACRON
 +-+@
 |�|@
 +-+@@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0155  LATIN SMALL LETTER R WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0158  LATIN CAPITAL LETTER R WITH CARON
 +-+@
 |�|@
 +-+@@
0x0159  LATIN SMALL LETTER R WITH CARON
 +-+@
 |�|@
 +-+@@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x015B  LATIN SMALL LETTER S WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
 +-+@
 |�|@
 +-+@@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
 +-+@
 |�|@
 +-+@@
0x0161  LATIN SMALL LETTER S WITH CARON
 +-+@
 |�|@
 +-+@@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
 +-+@
 |�|@
 +-+@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
 +-+@
 |�|@
 +-+@@
0x0165  LATIN SMALL LETTER T WITH CARON
 +-+@
 |�|@
 +-+@@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0167  LATIN SMALL LETTER T WITH STROKE
 +-+@
 |�|@
 +-+@@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
 +-+@
 |�|@
 +-+@@
0x0169  LATIN SMALL LETTER U WITH TILDE
 +-+@
 |�|@
 +-+@@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
 +-+@
 |�|@
 +-+@@
0x016B  LATIN SMALL LETTER U WITH MACRON
 +-+@
 |�|@
 +-+@@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
 +-+@
 |�|@
 +-+@@
0x016D  LATIN SMALL LETTER U WITH BREVE
 +-+@
 |�|@
 +-+@@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
 +-+@
 |�|@
 +-+@@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
 +-+@
 |�|@
 +-+@@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
 +-+@
 |�|@
 +-+@@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
 +-+@
 |�|@
 +-+@@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
 +-+@
 |�|@
 +-+@@
0x017E  LATIN SMALL LETTER Z WITH CARON
 +-+@
 |�|@
 +-+@@
0x02C7  CARON
 +-+@
 |�|@
 +-+@@
0x02D8  BREVE
 +-+@
 |�|@
 +-+@@
0x02D9  DOT ABOVE
 +-+@
 |�|@
 +-+@@
0x02DB  OGONEK
 +-+@
 |�|@
 +-+@@
0x02DD  DOUBLE ACUTE ACCENT
 +-+@
 |�|@
 +-+@@
`,Ld=`flf2a$ 7 5 12 0 7
fuzzy.flf by Juan Car (jc@juguete.quim.ucm.es)
version 1.0 -- 2/Feb/94

Uses spanish character set with -D option:
                                                     _         _
[ = a'   \\ = e'    ] = i'    { = o'    | = u'    } = n     ~ = N

$$@
$$@
$$@
$$@
$$@
$$@
$$@@
.-.@
: :@
: :@
:_;@
:_;@
   @
   @@
.-.-.@
: : :@
\`-'-'@
 $ $ @
 $ $ @
 $ $ @
 $ $ @@
   _  _   @
 _: :: :_ @
:_  ..  _:@
:_      _:@
  :_;:_;  @
          @
          @@
 ,::. @
: ::-'@
\`.::. @
 _:: :@
\`.::,'@
  ::  @
      @@
,-. .-.@
\`-'.'.'@
  .'.' @
 .'.'_ @
:_: :_;@
       @
       @@
 .--.  @
: .; ; @
 ;  '_ @
: :;\` ;@
\`.__._;@
       @
       @@
 .-.@
.'.'@
\`-' @
 $$ @
 $$ @
 $$ @
 $$ @@
  ,-.@
.' ,'@
: :  @
\` \`. @
 \`._;@
     @
     @@
.-.  @
\`. \`.@
  : :@
 ,' '@
:_,' @
     @
     @@
       @
 _.-._ @
: \` ' :@
,'   '.@
\`-:_:-'@
       @
       @@
       @
   _   @
 _: :_ @
:_   _:@
  :_:  @
       @
       @@
 $ @
 $ @
 $ @
 _ @
: ;@
;' @
   @@
       @
       @
 _____ @
:_____:@
       @
       @
       @@
 $ @
 $ @
 $ @
 _ @
:_;@
   @
   @@
    .-.@
   .'.'@
  .'.' @
 .'.'  @
:_:    @
       @
       @@
 .--. @
: ,. :@
: :: :@
: :; :@
\`.__.'@
      @
      @@
  ,-.@
.'  :@
 \`: :@
  : :@
  :_;@
     @
     @@
.---. @
\`--. :@
  ,','@
.'.'_ @
:____;@
      @
      @@
.----.@
\`--  ;@
 .' ' @
 _\`,\`.@
\`.__.'@
      @
      @@
  .-. @
 .'.' @
.'.'_ @
:_ \` :@
  :_:$@
      @
      @@
.----.@
: .--'@
\`. \`. @
.-\`, :@
\`.__.'@
      @
      @@
  .-. @
 .'.' @
.' '. @
: .; :@
\`.__.'@
      @
      @@
.----.@
\`--  ;@
 ,',' @
 : :  @
 :_:  @
      @
      @@
 .--. @
: .; :@
\`.  .'@
: .; :@
\`.__.'@
      @
      @@
 .--. @
: .; :@
\`._, :@
   : :@
   :_:@
      @
      @@
   @
 _ @
:_:@
 _ @
:_;@
   @
   @@
   @
 _ @
:_:@
 _ @
: ;@
;' @
   @@
     @
   -.@
$,','@
\`.\`. @
$ :_;@
     @
     @@
       @
       @
,-----.@
:-----:@
\`-----'@
       @
       @@
     @
.-   @
\`.\`.$@
 ,','@
:_, $@
     @
     @@
 .--. @
:_,. :@
  ,','@
 :_;  @
 :_;  @
      @
      @@
 .-----. @
: ,.--, :@
: : .; ,'@
: :.__,_;@
\`.______;@
         @
         @@
 .--. @
: .; :@
:    :@
: :: :@
:_;:_;@
      @
      @@
.---. @
: .; :@
:   .'@
: .; :@
:___.'@
      @
      @@
 .--. @
: .--'@
: :   @
: :__ @
\`.__.'@
      @
      @@
.---. @
: .  :@
: :: :@
: :; :@
:___.'@
      @
      @@
 .--. @
: .--'@
: \`;  @
: :__ @
\`.__.'@
      @
      @@
.---. @
: .--'@
: \`;  @
: :   @
:_;   @
      @
      @@
 .--. @
: .--'@
: : _ @
: :; :@
\`.__.'@
      @
      @@
.-..-.@
: :; :@
:    :@
: :: :@
:_;:_;@
      @
      @@
.-.@
: :@
: :@
: :@
:_;@
   @
   @@
   .-.@
   : :@
 _ : :@
: :; :@
\`.__.'@
      @
      @@
.-..-.@
: :' ;@
:   ' @
: :.\`.@
:_;:_;@
      @
      @@
.-.   @
: :   @
: :   @
: :__ @
:___.'@
      @
      @@
.-..-.@
: \`' :@
: .. :@
: :; :@
:_;:_;@
      @
      @@
.-..-.@
: \`: :@
: .\` :@
: :. :@
:_;:_;@
      @
      @@
 .--. @
: ,. :@
: :: :@
: :; :@
\`.__.'@
      @
      @@
.---. @
: .; :@
:  _.'@
: :   @
:_;   @
      @
      @@
 .--. @
: ,. :@
: :: :@
: :;_:@
\`._:_;@
      @
      @@
.---. @
: .; :@
:   .'@
: :.\`.@
:_;:_;@
      @
      @@
 .--. @
: .--'@
\`. \`. @
 _\`, :@
\`.__.'@
      @
      @@
.-----.@
\`-. .-'@
  : :  @
  : :  @
  :_;  @
       @
       @@
.-..-.@
: :: :@
: :: :@
: :; :@
\`.__.'@
      @
      @@
.-..-.@
: :: :@
: :: :@
: \`' ;@
 \`.,' @
      @
      @@
.-.   .-.@
: :.-.: :@
: :: :: :@
: \`' \`' ;@
 \`.,\`.,' @
         @
         @@
.-..-.@
: \`' :@
 \`  ' @
.'  \`.@
:_;:_;@
      @
      @@
.-..-.@
: :: :@
\`.  .'@
 .' ; @
:_,'  @
      @
      @@
.----.@
\`--. :@
  ,','@
.'.'_ @
:____;@
      @
      @@
.----.@
: .--'@
: :   @
: :__ @
:____:@
      @
      @@
.-.   @
\` \`   @
 \` \`  @
  \` \` @
   \`_;@
      @
      @@
.----.@
\`--. :@
   : :@
 __: :@
:____:@
      @
      @@
  --  @
.'  \`.@
\`-'\`-'@
 $  $ @
 $  $ @
 $  $ @
 $  $ @@
 $   $ @
 $   $ @
 $   $ @
 $   $ @
 _____ @
:_____:@
       @@
.-  @
\` \`.@
 \`-'@
 $$ @
 $$ @
 $$ @
 $$ @@
       @
       @
 .--.  @
' .; ; @
\`.__,_;@
       @
       @@
.-.   @
: :   @
: \`-. @
' .; :@
\`.__.'@
      @
      @@
      @
      @
 .--. @
'  ..'@
\`.__.'@
      @
      @@
   .-.@
   : :@
 .-' :@
' .; :@
\`.__.'@
      @
      @@
      @
      @
 .--. @
' '_.'@
\`.__.'@
      @
      @@
 .--.@
: .-'@
: \`; @
: :  @
:_;  @
     @
     @@
      @
      @
 .--. @
' .; :@
\`._. ;@
 .-. :@
 \`._.'@@
.-.   @
: :   @
: \`-. @
: .. :@
:_;:_;@
      @
      @@
 _ @
:_;@
.-.@
: :@
:_;@
   @
   @@
   _ @
  :_;@
  .-.@
  : :@
  : :@
.-. :@
\`._.'@@
.-.   @
: :.-.@
: \`'.'@
: . \`.@
:_;:_;@
      @
      @@
.-.  @
: :  @
: :  @
: :_ @
\`.__;@
     @
     @@
         @
         @
,-.,-.,-.@
: ,. ,. :@
:_;:_;:_;@
         @
         @@
      @
      @
,-.,-.@
: ,. :@
:_;:_;@
      @
      @@
      @
      @
 .--. @
' .; :@
\`.__.'@
      @
      @@
      @
      @
.---. @
: .; \`@
: ._.'@
: :   @
:_;   @@
      @
      @
 .---.@
' .; :@
\`._. ;@
   : :@
   :_:@@
     @
     @
.--. @
: ..'@
:_;  @
     @
     @@
      @
      @
 .--. @
\`._-.'@
\`.__.'@
      @
      @@
 .-. @
.' \`.@
\`. .'@
 : : @
 :_; @
     @
     @@
      @
      @
.-..-.@
: :; :@
\`.__.'@
      @
      @@
      @
      @
.-..-.@
: \`; :@
\`.__.'@
      @
      @@
         @
         @
.-..-..-.@
: \`; \`; :@
\`.__.__.'@
         @
         @@
      @
      @
.-.,-.@
\`.  .'@
:_,._;@
      @
      @@
      @
      @
.-..-.@
: :; :@
\`._. ;@
 .-. :@
 \`._.'@@
      @
      @
.---. @
\`-'_.'@
\`.___;@
      @
      @@
  .--.@
$: ,-'@
.' :  @
$; :_ @
 \`.__;@
      @
      @@
.-.@
: :@
: :@
: :@
:_;@
   @
   @@
.--.  @
\`-. :$@
  : \`.@
 _; :$@
:__.' @
      @
      @@
 .-.,-.@
.',  .'@
\`-'\`-' @
 $   $ @
 $   $ @
 $   $ @
 $   $ @@
   .-. @
   ;,' @
 .--.  @
' .; ; @
\`.__,_;@
       @
       @@
   .-.@
   ;,'@
 .--. @
' '_.'@
\`.__.'@
      @
      @@
 .-.@
 ;,'@
.-. @
: : @
:_; @
    @
    @@
   .-.@
   ;,'@
 .--. @
' .; :@
\`.__.'@
      @
      @@
   .-.@
   ;,'@
.-..-.@
: :; :@
\`.__.'@
      @
      @@
 ____ @
:____:@
,-.,-.@
: ,. :@
:_;:_;@
      @
      @@
.----.@
;----:@
: .\` :@
: :. :@
:_;:_;@
      @
      @@
`,Ed=`flf2a$ 7 6 13 -1 16 0 7999 0
Author : LG Beard
Date   : 2004/10/1 15:09:40
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

--- 

Font modified June 17, 2007 by patorjk 
This was to widen the space character and for spacing in characters like "&"
$   $#
$   $#
$   $#
$   $#
$   $#
$   $#
$   $##
.\`(   #
\\_ )  #
  )\\  #
  \\(  #
   _  #
  \`.( #
      ##
 _  _  #
).').' #
       #
       #
       #
       #
       ##
##
#
#
#
#
#
##
 )\\.-.    #
(  ,_.'   #
 \`-.\`-.   #
 .'/_\\ \\  #
 '.__,  ) #
      \\(  #
          ##
%#
 #
 #
 #
 #
 #
 ##
&#
 #
 #
 #
 #
 #
 ##
'#
 #
 #
 #
 #
 #
 ##
  )'. #
 (  / #
 ) /  #
(oO)  #
 ) \\  #
 (  \\ #
  ).' ##
.\`(   #
\\  )  #
 \\ (  #
 (Oo) #
 / (  #
/  )  #
\`.(   ##
*#
 #
 #
 #
 #
 #
 ##
   )\`.   #
  (  /   #
.-    -. #
'-    -' #
  /  )   #
  '.(    #
         ##
     #
     #
     #
 _)/ #
/  ) #
'.(  #
     ##
           #
 /(        #
 ) \\/(.-,, #
(      _  )#
 \`._.-' \\( #
           #
           ##
     #
     #
     #
 ,_  #
(  \\ #
 ).' #
     ##
  )\\  #
  \\ ) #
  //  #
 ((   #
 //   #
/(    #
)/    ##
  ,,-,,   #
 /,--, \\  #
/ \\  (  \\ #
\\  )  \\ / #
 \\ \`--\`(  #
  \`\`-\`)/  #
          ##
 .'(    #
/_  )   #
 ) (    #
 \\  )   #
 _) \\_  #
)__,__/ #
        ##
.\`\`\`./(  #
)_,-,  ) #
 .-'.-'  #
( (.-.,  #
/      ) #
)/\`._.'  #
         ##
 .---./(  #
(_.-,   ) #
  ,-\`  /  #
 _'-, (   #
 )\`-'  )  #
 \`._..(   #
          ##
  .'\`(  #
 //\`. ) #
//__/(  #
\`--,  ) #
    ) \\ #
     )/ #
        ##
  )\\.--. #
 (   ._. #
  \`-.\`.  #
,_   \\ \\ #
) '.,/ / #
'._,_.'  #
         ##
 )\`.     #
(  ( _   #
 ) \`' \`. #
(  .-. ( #
 \`. -  / #
   \\,-'  #
         ##
.\`\`\`./(  #
)_,-,  ) #
    / (  #
   _) /  #
  /  /   #
  './    #
         ##
   ,-,-.  #
 ,' _   ) #
(  '-' (  #
 )  _   ) #
(  '-' /  #
 )/._.'   #
          ##
 .-'\\    #
/  _ \`,  #
) \`-\`  ) #
\`._., (  #
    \`  ) #
     \\(  #
         ##
.'(  #
\\_ ) #
     #
 _   #
/  ) #
'.(  #
     ##
   _  #
  ).' #
      #
 _)/  #
/  )  #
'.(   #
      ##
     #
     #
/(_  #
) _( #
\\(   #
     #
     ##
 ,,-.      #
(    \`-._  #
 \`._.-._.' #
     .-,,  #
 _.-'    ) #
\`._.-._.'  #
           ##
     #
     #
 _)\\ #
)_ ( #
  )/ #
     #
     ##
 .\`\`\`./(  #
(  ,-,  ) #
 \`-\` / /  #
     )/   #
    _     #
   ).'    #
          ##
@#
 #
 #
 #
 #
 #
 ##
   /\`-.   #
 ,' _  \\  #
(  '-' (  #
 )   _  ) #
(  ,' ) \\ #
 )/    )/ #
          ##
   /(,-.  #
 ,' _   ) #
(  '-' (  #
 )  _   ) #
(  '-' /  #
 )/._.'   #
          ##
   )\\.-.  #
 ,' ,-,_) #
(  .   _  #
 ) '..' ) #
(  ,   (  #
 )/'._.'  #
          ##
   )\\.-.  #
 ,'     ) #
(  .-, (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
 )\\.---.  #
(   ,-._( #
 \\  '-,   #
  ) ,-\`   #
 (  \`\`-.  #
  )..-.(  #
          ##
)\`-.--. #
) ,-._( #
\\ \`-._  #
 ) ,_(  #
(  \\    #
 ).'    #
        ##
   )\\.-.   #
 ,' ,-,_)  #
(  .   __  #
 ) '._\\ _) #
(  ,   (   #
 )/'._.'   #
           ##
     .'(  #
 ,') \\  ) #
(  '-' (  #
 ) .-.  ) #
(  ,  ) \\ #
 )/    )/ #
          ##
.'(  #
\\  ) #
) (  #
\\  ) #
 ) \\ #
  )/ #
     ##
  .-,.-.,-.#
  ).-, ,-.(#
      ))   #
 .-._((    #
(      )   #
 '._.\\(    #
           ##
    .'(  #
 ,')\\  ) #
(  '/ /  #
 )   (   #
(  .\\ \\  #
 )/  )/  #
         ##
 .')      #
( /       #
 ))       #
 )'._.-.  #
(       ) #
 )/,__.'  #
          ##
 )\\   )\\  #
(  ',/ /  #
 )    (   #
(  \\(\\ \\  #
 \`.) /  ) #
     '.(  #
          ##
 )\\  )\\  #
(  \\, /  #
 ) \\ (   #
( ( \\ \\  #
 \`.)/  ) #
    '.(  #
         ##
   .-./(  #
 ,'     ) #
(  .-, (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
   /\`-.  #
 ,' _  \\ #
(  '-' ( #
 ) ,._.' #
(  '     #
 )/      #
         ##
  ,.-.    #
 /    \`,  #
 ) ,-.  ) #
( /_.\` (  #
 )   ,  ) #
 '._. \\(  #
          ##
   /\`-.  #
 ,' _  \\ #
(  '-' ( #
 ) ,_ .' #
(  ' ) \\ #
 )/   )/ #
         ##
  )\\.--.  #
 (   ._.' #
  \`-.\`.   #
 ,_ (  \\  #
(  '.)  ) #
 '._,_.'  #
          ##
.-,.-.,-. #
) ,, ,. ( #
\\( |(  )/ #
   ) \\    #
   \\ (    #
    )/    #
          ##
     .-.  #
 ,'  /  ) #
(  ) | (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
     .-.  #
 ,'  /  ) #
(  ) | (  #
 ) './ /  #
(  ,  (   #
 )/..'    #
          ##
     .'(  #
 ,') \\  ) #
(  /(/ /  #
 )    (   #
(  .'\\ \\  #
 )/   )/  #
          ##
     .'(  #
 ,') \\  ) #
(  '/  /  #
 )     )  #
(  .'\\ \\  #
 )/   )/  #
          ##
)\\    /( #
\\ (_.' / #
 )  _.'  #
 / /     #
(  \\     #
 ).'     #
         ##
.\`\`\`./(    #
)_,-,  )   #
    / / _  #
   / \`-\` ) #
  (     (  #
   ).',,'  #
           ##
  )'. #
 ( _/ #
 /(   #
<  >  #
 \\(_  #
 (  \\ #
  ).' ##
 /(   #
( /   #
 \\\\   #
  ))  #
  \\\\  #
   )\\ #
   \\( ##
.'(   #
\\_ )  #
  )\\  #
 <  > #
 _)/  #
/  )  #
'.(   ##
  )\\   #
 /_ \\  #
/ )\\ \\ #
\\(  )/ #
       #
       #
       ##
           #
        )\\ #
 ,,-.)\\/ ( #
(  _      )#
 )/ \`-._.' #
           #
           ##
\`#
 #
 #
 #
 #
 #
 ##
   /\`-.   #
 ,' _  \\  #
(  '-' (  #
 )   _  ) #
(  ,' ) \\ #
 )/    )/ #
          ##
   /(,-.  #
 ,' _   ) #
(  '-' (  #
 )  _   ) #
(  '-' /  #
 )/._.'   #
          ##
   )\\.-.  #
 ,' ,-,_) #
(  .   _  #
 ) '..' ) #
(  ,   (  #
 )/'._.'  #
          ##
   )\\.-.  #
 ,'     ) #
(  .-, (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
 )\\.---.  #
(   ,-._( #
 \\  '-,   #
  ) ,-\`   #
 (  \`\`-.  #
  )..-.(  #
          ##
)\`-.--. #
) ,-._( #
\\ \`-._  #
 ) ,_(  #
(  \\    #
 ).'    #
        ##
   )\\.-.   #
 ,' ,-,_)  #
(  .   __  #
 ) '._\\ _) #
(  ,   (   #
 )/'._.'   #
           ##
     .'(  #
 ,') \\  ) #
(  '-' (  #
 ) .-.  ) #
(  ,  ) \\ #
 )/    )/ #
          ##
.'(  #
\\  ) #
) (  #
\\  ) #
 ) \\ #
  )/ #
     ##
  .-,.-.,-.#
  ).-, ,-.(#
      ))   #
 .-._((    #
(      )   #
 '._.\\(    #
           ##
    .'(  #
 ,')\\  ) #
(  '/ /  #
 )   (   #
(  .\\ \\  #
 )/  )/  #
         ##
 .')      #
( /       #
 ))       #
 )'._.-.  #
(       ) #
 )/,__.'  #
          ##
 )\\   )\\  #
(  ',/ /  #
 )    (   #
(  \\(\\ \\  #
 \`.) /  ) #
     '.(  #
          ##
 )\\  )\\  #
(  \\, /  #
 ) \\ (   #
( ( \\ \\  #
 \`.)/  ) #
    '.(  #
         ##
   .-./(  #
 ,'     ) #
(  .-, (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
   /\`-.  #
 ,' _  \\ #
(  '-' ( #
 ) ,._.' #
(  '     #
 )/      #
         ##
  ,.-.    #
 /    \`,  #
 ) ,-.  ) #
( /_.\` (  #
 )   ,  ) #
 '._. \\(  #
          ##
   /\`-.  #
 ,' _  \\ #
(  '-' ( #
 ) ,_ .' #
(  ' ) \\ #
 )/   )/ #
         ##
  )\\.--.  #
 (   ._.' #
  \`-.\`.   #
 ,_ (  \\  #
(  '.)  ) #
 '._,_.'  #
          ##
.-,.-.,-. #
) ,, ,. ( #
\\( |(  )/ #
   ) \\    #
   \\ (    #
    )/    #
          ##
     .-.  #
 ,'  /  ) #
(  ) | (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
     .-.  #
 ,'  /  ) #
(  ) | (  #
 ) './ /  #
(  ,  (   #
 )/..'    #
          ##
     .'(  #
 ,') \\  ) #
(  /(/ /  #
 )    (   #
(  .'\\ \\  #
 )/   )/  #
          ##
     .'(  #
 ,') \\  ) #
(  '/  /  #
 )     )  #
(  .'\\ \\  #
 )/   )/  #
          ##
)\\    /( #
\\ (_.' / #
 )  _.'  #
 / /     #
(  \\     #
 ).'     #
         ##
.\`\`\`./(    #
)_,-,  )   #
    / / _  #
   / \`-\` ) #
  (     (  #
   ).',,'  #
           ##
  )\\ #
 ( / #
 /(  #
<  > #
 \\(  #
 ( \\ #
  )/ ##
|#
 #
 #
 #
 #
 #
 ##
/(   #
\\ )  #
 )\\  #
<  > #
 )/  #
/ )  #
\\(   ##
~#
 #
 #
 #
 #
 #
 ##
   /\`-.   #
 ,' _  \\  #
(  '-' (  #
 )   _  ) #
(  ,' ) \\ #
 )/    )/ #
          ##
   .-./(  #
 ,'     ) #
(  .-, (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
     .-.  #
 ,'  /  ) #
(  ) | (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
   /\`-.   #
 ,' _  \\  #
(  '-' (  #
 )   _  ) #
(  ,' ) \\ #
 )/    )/ #
          ##
   .-./(  #
 ,'     ) #
(  .-, (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
     .-.  #
 ,'  /  ) #
(  ) | (  #
 ) '._\\ ) #
(  ,   (  #
 )/ ._.'  #
          ##
�#
 #
 #
 #
 #
 #
 ##`,Id=`flf2a$ 4 4 7 -1 32 0 0 0
Author : Lukasz Tyrala (lt.)
Date   : 2004/4/12 12:28:23
Version: 1.2 (full)
URL    : http://home.autocom.pl/bjt/lt
e-mail : luty@autocom.pl
--------------------------------------------
  ..xx..      (C) COPYRIGHTS MMIV by
.xXXXXXXx                Lukasz Tyrala (lt.)
 /  xXXXXx    
 .\`  xDXXx     Permission is hereby given to
C      Xx       modify this font, as long as
 \\     x       the modifier's name is placed
  \`---/|                  on a comment line.
lt. |  |      For comercial use of this font
               please contact with me (lt.).
--------------------------------------------

   This font has been created using JavE's
       FIGlet font export assistant.

---- Have a look at: http://www.jave.de ----

Visit polish a-a usenet at------------------
-----------------------news:pl.rec.ascii-art








$ #
$ #
$ #
$ ##
___  #
|  \\ #
|___\\#
|__/ ##
_ _  #
\\|\\| #
     #
     ##
_||| #
|_'_]#
|_'_]#
 ||| ##
 ||  #
,||= #
'||=,#
=||' ##
__   #
\\ \\[\\#
 \\ \\ #
|]\\/ ##
___  #
| .\\ #
/ .(/#
\\__/\\##
  _  #
  |/ #
     #
     ##
 ___ #
 | / #
 |/  #
 |\\  ##
 __  #
 \\ | #
  \\| #
  /| ##
     #
 \\||/#
|_  ]#
 /||\\##
 __  #
_| | #
|_ _]#
 |_| ##
     #
     #
 ,-. #
 '-/ ##
     #
 ___ #
|___\\#
     ##
     #
     #
 ,-. #
 '-' ##
   __#
  / /#
 / / #
/_/  ##
____ #
|   |#
| \\ |#
|___|##
   __#
  / |#
 /_ |#
   \\|##
____ #
|   \\#
'-'_/#
|___]##
____ #
|__ \\#
 _[ |#
|___/##
  _  #
 / / #
/_  ]#
  |/ ##
____ #
| __|#
_\\_ \\#
|___/##
____ #
| __\\#
|  .\\#
|___/##
____ #
|__ |#
  / /#
 /_/ ##
____ #
| . /#
 >.< #
|___/##
____ #
| . \\#
|__ |#
 \\__/##
 __  #
 |_] #
 ,-. #
 '-' ##
 __  #
 |_] #
 ,-. #
 '-/ ##
 __  #
/ /  #
\\ \\  #
 \\_\\ ##
 ___ #
|___]#
|__/ #
     ##
  __ #
  \\ \\#
  / /#
 /_/ ##
____ #
|   \\#
|/\\_/#
  |] ##
  _  #
,'_\`.#
;(_\\/#
\`._, ##
___  #
|  \\ #
| . \\#
|/\\_/##
___  #
| .\\ #
| .<_#
|___/##
____ #
| __\\#
| \\__#
|___/##
___  #
|  \\ #
| . \\#
|___/##
____ #
| __\\#
|  ]_#
|___/##
____ #
|  _\\#
| _\\ #
|/   ##
____ #
|  _\\#
| [ \\#
|___/##
_  _ #
||_|\\#
| _ |#
|/ |/##
____ #
|___\\#
| /  #
|/   ##
____ #
|_  \\#
,_/ /#
\\__/ ##
__ _ #
| V \\#
|  <_#
|/\\_/##
__   #
| |  #
| |__#
|___/##
_    #
|\\/\\ #
|   \\#
|/v\\/##
__   #
| \\|\\#
|  \\|#
|/\\_/##
____ #
|   |#
| . |#
|___/##
____ #
| . \\#
| __/#
|/   ##
____ #
|   |#
| . |#
|___\\##
____ #
| . \\#
|  <_#
|/\\_/##
___  #
| _\\ #
[__ \\#
|___/##
____ #
|_ _\\#
  || #
  |/ ##
_    #
|| \\ #
||_|\\#
|___/##
_  _ #
|| |\\#
||/ /#
|__/ ##
_  _ #
||| \\#
||\\ /#
|/\\/ ##
_  _ #
|\\/_\\#
_><__#
|/\\_/##
_    #
||_/\\#
| __/#
|/   ##
___  #
|_ \\ #
| __]#
|___/##
___  #
| _] #
||_  #
|__] ##
__   #
\\ \\  #
 \\ \\ #
  \\_\\##
___  #
|_ | #
 _|| #
|__| ##
     #
 /\\  #
//\\\\ #
     ##
     #
     #
____ #
|___]##
  _  #
  \\| #
     #
     ##
___  #
|  \\ #
| . \\#
|/\\_/##
___  #
| .\\ #
| .<_#
|___/##
____ #
| __\\#
| \\__#
|___/##
___  #
|  \\ #
| . \\#
|___/##
____ #
| __\\#
|  ]_#
|___/##
____ #
|  _\\#
| _\\ #
|/   ##
____ #
|  _\\#
| [ \\#
|___/##
_  _ #
||_|\\#
| _ |#
|/ |/##
____ #
|___\\#
| /  #
|/   ##
____ #
|_  \\#
,_/ /#
\\__/ ##
__ _ #
| V \\#
|  <_#
|/\\_/##
__   #
| |  #
| |__#
|___/##
_    #
|\\/\\ #
|   \\#
|/v\\/##
__   #
| \\|\\#
|  \\|#
|/\\_/##
____ #
|   |#
| . |#
|___/##
____ #
| . \\#
| __/#
|/   ##
____ #
|   |#
| . |#
|___\\##
____ #
| . \\#
|  <_#
|/\\_/##
___  #
| _\\ #
[__ \\#
|___/##
____ #
|_ _\\#
  || #
  |/ ##
_    #
|| \\ #
||_|\\#
|___/##
_  _ #
|| |\\#
||/ /#
|__/ ##
_  _ #
||| \\#
||\\ /#
|/\\/ ##
_  _ #
|\\/_\\#
_><__#
|/\\_/##
_    #
||_/\\#
| __/#
|/   ##
___  #
|_ \\ #
| __]#
|___/##
{#
 #
 #
 ##
 __  #
 | | #
 | | #
 |_| ##
}#
 #
 #
 ##
     #
_,-.,#
|,-.'#
     ##
___  #
|  \\ #
| . \\#
|/\\_/##
____ #
|   |#
| . |#
|___/##
_    #
|| \\ #
||_|\\#
|___/##
___  #
|  \\ #
| . \\#
|/\\_/##
____ #
|   |#
| . |#
|___/##
_    #
|| \\ #
||_|\\#
|___/##
�#
 #
 #
 ##`,Ad=`flf2a$ 6 6 30 0 22
Explanation of first line:                            *** GoofY 0.1 ***
flf2a - necessary stuff to identify the kind of file
$     - the "hardblank" -- prints as a blank, but can't be smushed
6     - height of a character
6     - height of a character, not including descenders
30    - max line length (excluding comment lines) + a fudge factor
0     - put characters together, no smushing or whatever, please!
22    - number of comment lines (starting with the 'Explanation' line)

Written by Steven <GoofY> de Brouwer (Goofsel@dds.nl)
Based on the stupid reaction from people to watch the 'foreground-objects' 
first (it's a kind of goofy, isn't it? :) 
This font is NOT designed to be used for clear, long text!
Therefore lower-case is equal to UPPER-case!
   ____       _____     _____     ___        ___   __   _____ 
  /    )  ____)    )   (     )   (   \\    ___) (  (  )  )    )
 (    /  /  __    /   (_\\   /     \\   |  (__    \\  \\/  /    / 
  )  (  (  (  \\  (       ) ( _     )  |   __)    \\    /    (  
 /    \\  \\__)  )  \\     /   \\ )   /   |  (        )  /      ) 
(______)      (____)   (_____)   (___/    \\______/  (______/  

*** Use the % for a double-o (oo), and the {} as begin- and end-markers! ***
___@
$$$@
$$$@
$$$@
$$$@
___@@
_$$$$__@
($$$$)$@
$\\$$/$$@
$$\\/$$$@
$$__$$$@
_($$)__@@
_$$$_$$$__@
($$$)$$$)$@
$)_/$)_/$$@
$$$$$$$$$$@
$$$$$$$$$$@
__________@@
__$$$_$$$___@
$_)$(_)$(_$$@
(_$$$_$$$_)$@
$_)$(_)$(_$$@
(_$$$_$$$_)$@
__)$(_)$(___@@
_$$$$$$$__@
$)$$_$$_)$@
($$(_||$$$@
$\\$$_$$\\$$@
$_||_)$$)$@
($$$$$$(__@@
__$$$$$_____$$$$$___@
$$)$$$($$$$$)$$$($$$@
$/$$$(_\\$$$/$$$$$\\$$@
($$$$$$$)$($_$$$$$)$@
$\\$$$$$/$$$\\$)$$$/$$@
__)$$$(_____)$$$(___@@
__$$$$_____@
$($()$)$$$$@
$$>$$<$$_$$@
$/$/\\$\\/$)$@
($(__)$$<$$@
_\\$$$$<>$)_@@
_$$$__@
($$$)$@
$)_/$$@
$$$$$$@
$$$$$$@
______@@
___$$$_@
$$/$$/$@
$/$$/$$@
($$($$$@
$\\$$\\$$@
__\\$$\\_@@
$$$____@
\\$$\\$$$@
$\\$$\\$$@
$$)$$)$@
$/$$/$$@
/$$/___@@
___________@
$$$_$$_$$$$@
$_($\\/$)_$$@
(__$$$$__)$@
$$(_/\\_)$$$@
___________@@
________@
$$$_$$$$@
$_($)_$$@
(__$__)$@
$$(_)$$$@
________@@
_____@
$$$$$@
$$$$$@
$__$$@
($$)$@
($/__@@
______@
$$$$$$@
$___$$@
(___)$@
$$$$$$@
______@@
_____@
$$$$$@
$$$$$@
$$$$$@
$__$$@
($$)_@@
____$$$$_@
$$$$)$$/$@
$$$/$$/$$@
$$/$$/$$$@
$/$$/$$$$@
/$$(_____@@
__$$$___@
$/$$$\\$$@
|$$$$$|$@
|$$$$$|$@
|$$$$$|$@
_\\$$$/__@@
_$$$$$___@
/_$$$|$$$@
$$|$$|$$$@
$$|$$|$$$@
$_|$$|_$$@
($$$$$$)_@@
__$$$$____@
$/$_$$\\$$$@
(_/$)$$)$$@
$$$/$$/$$$@
$$/$$/__$$@
_($$$$$$)_@@
_$$$$___@
(__$$\\$$@
$__)$$|$@
(__$$$|$@
$__)$$|$@
($$$$/__@@
___$$$$___@
$$/$$$|$$$@
$/$$$$|_$$@
(__$$$$_)$@
$$_|$$|_$$@
_($$$$$$)_@@
$$$$$$$__@
|$$____)$@
|$|___$$$@
|___$$\\$$@
$___)$$)$@
($$$$$/__@@
__$$$$___@
$/$$__)$$@
|$$(__$$$@
|$$$$$\\$$@
|$$$$$$)$@
_\\$$$$/__@@
$$$$$$$__@
(___$$$)$@
$$$/$$/$$@
$$/$$/$$$@
$/$$/$$$$@
($$/_____@@
__$$$___@
$/$$$\\$$@
($$$$$)$@
$>$$$<$$@
($$$$$)$@
_\\$$$/__@@
__$$$$___@
$/$$$$\\$$@
($$$$$$|$@
$\\__$$$|$@
$$__)$$|$@
_($$$$/__@@
____@
$_$$@
(_)$@
$_$$@
(_)$@
____@@
____@
$_$$@
(_)$@
$_$$@
($)$@
|/__@@
___$$$_@
$$/$$/$@
$/$$/$$@
<$$<$$$@
$\\$$\\$$@
__\\$$\\_@@
______@
$___$$@
(___)$@
$___$$@
(___)$@
______@@
$$$____@
\\$$\\$$$@
$\\$$\\$$@
$$>$$>$@
$/$$/$$@
/$$/___@@
_$$$__@
(_$$)$@
$/$/$$@
(_($$$@
$_$$$$@
($)___@@
__$$$$$$$___@
$/$$___$$\\$$@
|$$/$/\\)$$)$@
|$|$(____/$$@
|$$\\______$$@
_\\$$$$$$$$)_@@
____$$_____@
$$$/$$\\$$$$@
$$/$$$$\\$$$@
$/$$()$$\\$$@
|$$$__$$$|$@
|$$(__)$$|_@@
$$$$$$___@
\\$$$$$\\$$@
$|$$$$$)$@
$|$$$$<$$@
$|$$$$$)$@
/$$$$$/__@@
__$$$$__@
$/$$__)$@
|$$/$$$$@
|$|$$$$$@
|$$\\__$$@
_\\$$$$)_@@
$$$$$___@
|$$$$\\$$@
|$$$$$|$@
|$$$$$|$@
|$$$$$|$@
|$$$$/__@@
$$$$$$$$__@
\\$$$$___)$@
$|$$(__$$$@
$|$$$__)$$@
$|$$(___$$@
/$$$$$$$)_@@
$$$$$$$$__@
\\$$$$___)$@
$|$$(__$$$@
$|$$$__)$$@
$|$$($$$$$@
/$$$$\\____@@
__$$$$$$$___@
$$)$$____)$$@
$/$$/$$__$$$@
($$($$($$\\$$@
$\\$$\\__)$$)$@
__)$$$$$$(__@@
$$$$___$$$$_@
\\$$|$$$|$$/$@
$|$$\\_/$$|$$@
$|$$$_$$$|$$@
$|$$/$\\$$|$$@
/$$|___|$$\\_@@
_$$$$$$__@
(_$$$$_)$@
$$|$$|$$$@
$$|$$|$$$@
$_|$$|_$$@
($$$$$$)_@@
___$$$$$_@
$$(_$$$|$@
$$$$|$$|$@
$_$$|$$|$@
($|_|$$|$@
_\\$$$$/__@@
$$$$$_$$$$_@
\\$$$|$)$$/$@
$|$$|/$$/$$@
$|$$$$$($$$@
$|$$|\\$$\\$$@
/$$$|_)$$\\_@@
$$$$$____@
\\$$$|$$$$@
$|$$|$$$$@
$|$$|$$$$@
$|$$|__$$@
/$$$$$$)_@@
$$$$$$$$$$_@
|$$$$$$$$|$@
|$$|\\/|$$|$@
|$$|$$|$$|$@
|$$|$$|$$|$@
|$$|__|$$|_@@
$$$$$___$$$$_@
|$$$$\\$$|$$|$@
|$$|\\$\\$|$$|$@
|$$|$\\$\\|$$|$@
|$$|$$\\$$$$|$@
|$$|___\\$$$|_@@
__$$$$$___@
$$)$$$($$$@
$/$$$$$\\$$@
($$$$$$$)$@
$\\$$$$$/$$@
__)$$$(___@@
$$$$$___@
|$$$$\\$$@
|$$$$$)$@
|$$__/$$@
|$|$$$$$@
|$|_____@@
__$$$$$_@
$/$$$$|$@
($$$$$|$@
$\\__$$|$@
$$$$|$|$@
____|$|_@@
$$$$$___@
|$$$$\\$$@
|$$$$$)$@
|$$$$/$$@
|$|\\$\\$$@
|$|_\\$\\_@@
_$$$$$$$__@
$)$$____)$@
($$(___$$$@
$\\___$$\\$$@
$____)$$)$@
($$$$$$(__@@
_$$$$$$$$__@
(__$$$$__)$@
$$$|$$|$$$$@
$$$|$$|$$$$@
$$$|$$|$$$$@
___|$$|____@@
$$$$___$$$$_@
|$$|$$$|$$|$@
|$$|$$$|$$|$@
|$$|$$$|$$|$@
|$$$\\_/$$$|$@
_\\$$$$$$$/__@@
$$$$__$$$$_@
|$$|$$|$$|$@
|$$|$$|$$|$@
|$$|$$|$$|$@
$\\$$\\/$$/$$@
__\\$$$$/___@@
$$$$____$$$$_@
|$$|$$$$|$$|$@
|$$|$$$$|$$|$@
|$$|$$$$|$$|$@
$\\$$\\/\\/$$/$$@
__\\$$$$$$/___@@
$$$____$$$_@
\\$$\\$$/$$/$@
$\\$$\\/$$/$$@
$$>$$$$<$$$@
$/$$/\\$$\\$$@
/$$/__\\$$\\_@@
_$$$__$$$__@
($$($$)$$)$@
$\\$$\\/$$/$$@
$$\\$$$$/$$$@
$$$)$$/$$$$@
__/$$(_____@@
_$$$$$$__@
(___$$$)$@
$$$/$$/$$@
$$/$$/$$$@
$/$$/__$$@
($$$$$$)_@@
$$$$$$$_@
|$$$__|$@
|$$|$$$$@
|$$|$$$$@
|$$|__$$@
|$$$$$|_@@
$$$$_____@
\\$$($$$$$@
$\\$$\\$$$$@
$$\\$$\\$$$@
$$$\\$$\\$$@
____)$$\\_@@
$$$$$$$_@
|__$$$|$@
$$$|$$|$@
$$$|$$|$@
$__|$$|$@
|$$$$$|_@@
__$$$$___@
$/$/\\$\\$$@
(_/$$\\_)$@
$$$$$$$$$@
$$$$$$$$$@
_________@@
______@
$$$$$$@
$$$$$$@
$$$$$$@
____$$@
)$$$)_@@
_$$$__@
($$$)$@
$\\_($$@
$$$$$$@
$$$$$$@
______@@
____$$_____@
$$$/$$\\$$$$@
$$/$$$$\\$$$@
$/$$()$$\\$$@
|$$$__$$$|$@
|$$(__)$$|_@@
$$$$$$___@
\\$$$$$\\$$@
$|$$$$$)$@
$|$$$$<$$@
$|$$$$$)$@
/$$$$$/__@@
__$$$$__@
$/$$__)$@
|$$/$$$$@
|$|$$$$$@
|$$\\__$$@
_\\$$$$)_@@
$$$$$___@
|$$$$\\$$@
|$$$$$|$@
|$$$$$|$@
|$$$$$|$@
|$$$$/__@@
$$$$$$$$__@
\\$$$$___)$@
$|$$(__$$$@
$|$$$__)$$@
$|$$(___$$@
/$$$$$$$)_@@
$$$$$$$$__@
\\$$$$___)$@
$|$$(__$$$@
$|$$$__)$$@
$|$$($$$$$@
/$$$$\\____@@
__$$$$$$$___@
$$)$$____)$$@
$/$$/$$__$$$@
($$($$($$\\$$@
$\\$$\\__)$$)$@
__)$$$$$$(__@@
$$$$___$$$$_@
\\$$|$$$|$$/$@
$|$$\\_/$$|$$@
$|$$$_$$$|$$@
$|$$/$\\$$|$$@
/$$|___|$$\\_@@
_$$$$$$__@
(_$$$$_)$@
$$|$$|$$$@
$$|$$|$$$@
$_|$$|_$$@
($$$$$$)_@@
___$$$$$_@
$$(_$$$|$@
$$$$|$$|$@
$_$$|$$|$@
($|_|$$|$@
_\\$$$$/__@@
$$$$$_$$$$_@
\\$$$|$)$$/$@
$|$$|/$$/$$@
$|$$$$$($$$@
$|$$|\\$$\\$$@
/$$$|_)$$\\_@@
$$$$$____@
\\$$$|$$$$@
$|$$|$$$$@
$|$$|$$$$@
$|$$|__$$@
/$$$$$$)_@@
$$$$$$$$$$_@
|$$$$$$$$|$@
|$$|\\/|$$|$@
|$$|$$|$$|$@
|$$|$$|$$|$@
|$$|__|$$|_@@
$$$$$___$$$$_@
|$$$$\\$$|$$|$@
|$$|\\$\\$|$$|$@
|$$|$\\$\\|$$|$@
|$$|$$\\$$$$|$@
|$$|___\\$$$|_@@
__$$$$$___@
$$)$$$($$$@
$/$$$$$\\$$@
($$$$$$$)$@
$\\$$$$$/$$@
__)$$$(___@@
$$$$$___@
|$$$$\\$$@
|$$$$$)$@
|$$__/$$@
|$|$$$$$@
|$|_____@@
__$$$$$_@
$/$$$$|$@
($$$$$|$@
$\\__$$|$@
$$$$|$|$@
____|$|_@@
$$$$$___@
|$$$$\\$$@
|$$$$$)$@
|$$$$/$$@
|$|\\$\\$$@
|$|_\\$\\_@@
_$$$$$$$__@
$)$$____)$@
($$(___$$$@
$\\___$$\\$$@
$____)$$)$@
($$$$$$(__@@
_$$$$$$$$__@
(__$$$$__)$@
$$$|$$|$$$$@
$$$|$$|$$$$@
$$$|$$|$$$$@
___|$$|____@@
$$$$___$$$$_@
|$$|$$$|$$|$@
|$$|$$$|$$|$@
|$$|$$$|$$|$@
|$$$\\_/$$$|$@
_\\$$$$$$$/__@@
$$$$__$$$$_@
|$$|$$|$$|$@
|$$|$$|$$|$@
|$$|$$|$$|$@
$\\$$\\/$$/$$@
__\\$$$$/___@@
$$$$____$$$$_@
|$$|$$$$|$$|$@
|$$|$$$$|$$|$@
|$$|$$$$|$$|$@
$\\$$\\/\\/$$/$$@
__\\$$$$$$/___@@
$$$____$$$_@
\\$$\\$$/$$/$@
$\\$$\\/$$/$$@
$$>$$$$<$$$@
$/$$/\\$$\\$$@
/$$/__\\$$\\_@@
_$$$__$$$__@
($$($$)$$)$@
$\\$$\\/$$/$$@
$$\\$$$$/$$$@
$$$)$$/$$$$@
__/$$(_____@@
_$$$$$$__@
(___$$$)$@
$$$/$$/$$@
$$/$$/$$$@
$/$$/__$$@
($$$$$$)_@@
$$$__@
$$/$$@
$($$$@
$$)$$@
$/$$$@
(____@@
$$$_@
|$|$@
|$|$@
|$|$@
|$|$@
|$|_@@
___$@
$$$)@
$$/$@
$($$@
$$)$@
_/$$@@
__$$__$$_@
$/$$\\/$/$@
(_/\\__/$$@
$$$$$$$$$@
$$$$$$$$$@
_________@@
_$___$__@
(_)$(_)$@
$$___$$$@
$/$$$\\$$@
|$$_$$|$@
|$(_)$|_@@
_$___$__@
(_)$(_)$@
$$___$$$@
$/$$$\\$$@
($$$$$)$@
_\\$$$/__@@
_$___$__@
(_)$(_)$@
$_$$$_$$@
|$|$|$|$@
|$|_|$|$@
_\\$$$/__@@
_$___$__@
(_)$(_)$@
$$___$$$@
$/$$$\\$$@
|$$_$$|$@
|$(_)$|_@@
_$___$__@
(_)$(_)$@
$$___$$$@
$/$$$\\$$@
($$$$$)$@
_\\$$$/__@@
_$___$__@
(_)$(_)$@
$_$$$_$$@
|$|$|$|$@
|$|_|$|$@
_\\$$$/__@@
__$$$$$___@
$/$$__$\\$$@
|$$/$_)$)$@
|$|$(_$($$@
|$|$__)$)$@
|$|($$$/__@@
`,hd=`flf2a$ 9 8 14 -1 16
Gothic.flf - Taken from a banner program called "gothic" by Howard Chu
Figletization suggested bu Bob Bright (bright@cc.umanitoba.ca)
Figletized by Wendell Hicken 11/19/93 (whicken@parasoft.com)
Version 1.1 - updated on 11/23/93
Version 1.11 - updated on 11/28/93 by Brian Tao (taob@io.org)
             - adjusted baseline and fixed some spacing problems
Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
9    - height of a character
8    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
-1   - default smushmode for this font (like "-m 15" on command line)
16   - number of comment lines

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
/\\ @
\\/ @
}{ @
\\/ @
   @
<> @
   @
   @@
<> <> @
 )  ) @
      @
      @
      @
      @
      @
      @
      @@
  <> <>   @
  }{ }{   @
<>++=++<> @
  }{ }{   @
<>++=++<> @
  }{ }{   @
  <> <>   @
          @
          @@
 _++_, @
||||   @
||--.  @
 ~|||| @
  |||| @
,-__-  @
  ||   @
       @
       @@
      @
    , @
<>  / @
   /  @
  /   @
 /    @
/  <> @
\`     @
      @@
      @
 /\\   @
 \\/   @
 /\\ , @
/'\\\\, @
|  \\\\ @
\\\\-/\\ @
      @
      @@
<>@
 )@
  @
  @
  @
  @
  @
  @
  @@
 / @
// @
|| @
|| @
|| @
\\\\ @
 \\ @
   @
   @@
\\  @
\\\\ @
|| @
|| @
|| @
// @
/  @
   @
   @@
        @
 <> <>  @
  \\ /   @
<>-*-<> @
  / \\   @
 <> <>  @
        @
        @
        @@
       @
       @
  <>   @
  }{   @
<>--<> @
  }{   @
  <>   @
       @
       @@
   @
   @
   @
   @
   @
   @
<> @
 ) @
   @@
      @
      @
      @
      @
<>-<> @
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
<> @
   @
   @@
      @
    / @
   /  @
  //  @
  /   @
 //   @
 /    @
/     @
      @@
      @
 /\\\\  @
|| || @
|| || @
|| || @
|| || @
 \\\\/  @
      @
      @@
     @
 /|  @
/||  @
 ||  @
 ||  @
 ||  @
,/-' @
     @
     @@
     @
 /\\  @
(  ) @
  // @
 //  @
/(   @
{___ @
     @
     @@
____ @
\` // @
 //  @
 \\\\  @
  )) @
 //  @
/'   @
     @
     @@
  ,  @
 /|  @
/ |  @
__|_ @
---- @
  |  @
 ,_, @
     @
     @@
____  @
||  \` @
||_   @
|/ \\  @
   )) @
  //  @
 /'   @
      @
      @@
      @
  ,/  @
 //   @
((_-  @
|| )) @
(( || @
 \\//  @
      @
      @@
____  @
\`  || @
   /, @
  //  @
 ((   @
 ||   @
 |'   @
      @
      @@
      @
 /\\\\  @
|| || @
 \\ /  @
 /\\\\  @
// \\\\ @
|| || @
 \\\\/  @
      @@
      @
 /\\\\  @
|| || @
|| || @
 \\/|| @
   || @
 \\_/  @
      @
      @@
   @
   @
   @
<> @
   @
   @
<> @
   @
   @@
   @
   @
   @
<> @
   @
   @
<> @
 ) @
   @@
      @
    / @
   /  @
 //   @
<<    @
 \\\\   @
   \\  @
    \\ @
      @@
      @
      @
      @
<>-<> @
      @
<>-<> @
      @
      @
      @@
      @
\\     @
 \\    @
  \\\\  @
   >> @
  //  @
 /    @
/     @
      @@
 -_  @
/ \\\\ @
\` || @
  |, @
 ((  @
     @
 <>  @
     @
     @@
      @
 /\\\\  @
|| || @
||/|| @
||\\|  @
||    @
 \\\\_, @
      @
      @@
  ___    @
 -   -_, @
(  ~/||  @
(  / ||  @
 \\/==||  @
 /_ _||  @
(  - \\\\, @
         @
         @@
          @
_-_ _,,   @
   -/  )  @
  ~||_<   @
   || \\\\  @
   ,/--|| @
  _--_-'  @
 (        @
          @@
         @
  ,- _~. @
 (' /|   @
((  ||   @
((  ||   @
 ( / |   @
  -____- @
         @
         @@
          @
-_____    @
  ' | -,  @
 /| |  |\` @
 || |==|| @
~|| |  |, @
 ~-____,  @
(         @
          @@
         @
  ,- _~, @
 (' /| / @
((  ||/= @
((  ||   @
 ( / |   @
  -____- @
         @
         @@
    _ ,@
  ,- - @
 _||_  @
' ||   @
  ||   @
  |,   @
_-/    @
       @
       @@
    __ ,  @
  ,-| ~   @
 ('||/__, @
(( |||  | @
(( |||==| @
 ( / |  , @
  -____/  @
          @
          @@
          @
_-_-      @
  /,      @
  || __   @
 ~||-  -  @
  ||===|| @
 ( \\_, |  @
       \`  @
          @@
     @
_-_, @
  // @
  || @
 ~|| @
  || @
_-_, @
     @
     @@
       @
 _-_,, @
(  //  @
  _||  @
  _||  @
   ||  @
-__-,  @
       @
       @@
          @
_-_-,     @
  // ,    @
  ||/\\\\   @
 ~|| <    @
  ||/\\\\   @
 _-__,\\\\, @
          @
          @@
        @
_-_-    @
 /,     @
 ||     @
~||     @
 ||     @
(  -__, @
        @
        @@
           @
  /\\\\,/\\\\, @
 /| || ||  @
 || || ||  @
 ||=|= ||  @
~|| || ||  @
 |, \\\\,\\\\, @
_-         @
           @@
    __   @
   /  -, @
  ||   ) @
 ~||---) @
 ~||---, @
 ~||  /  @
  |, /   @
-_-  --~ @
         @@
    __     @
  ,-||-,   @
 ('|||  )  @
(( |||--)) @
(( |||--)) @
 ( / |  )  @
  -____-   @
           @
           @@
         @
-__ /\\\\  @
  ||  \\\\ @
 /||__|| @
 \\||__|| @
  ||  |, @
_-||-_/  @
  ||     @
         @@
    __     @
  ,-||-,   @
 ('|||  )  @
(( |||--)) @
(( |||--)) @
 ( / |  )  @
  -____-\\\\ @
           @
           @@
         @
-__ /\\   @
  || \\,  @
 /|| /   @
 \\||/-   @
  ||  \\  @
_---_-|, @
         @
         @@
        @
  -_-/  @
 (_ /   @
(_ --_  @
  --_ ) @
 _/  )) @
(_-_-   @
        @
        @@
 ___        @
-   ---___- @
   (' ||    @
  ((  ||    @
 ((   ||    @
  (( //     @
    -____-  @
            @
            @@
 _ _    _ , @
- - /  - -  @
  ('||  ||  @
 (( ||--||  @
 (( ||--||  @
 (( /   ||  @
   -___-\\\\, @
            @
            @@
 _      @
- - _-  @
  )-  ) @
  )___) @
 ~)___) @
  )  )  @
 /-_/   @
        @
        @@
 _        @
- - /, /, @
  )/ )/ ) @
  )__)__) @
 ~)__)__) @
  )  )  ) @
 /-_/-_/  @
          @
          @@
 _        @
- -    /\` @
  \\\\  /   @
   \\\\/    @
  ==/\\==  @
   / \\\\   @
\\\\/   \\\\, @
          @
          @@
         @
-_   _   @
  |,- \`  @
 ~||__)) @
 ~||__)) @
  |_ _,  @
 -' -    @
( _-_    @
         @@
      @
_-___ @
    / @
   /  @
 =/=  @
 /    @
/-__- @
      @
      @@
  __ @
||   @
||   @
||   @
||   @
||   @
||   @
||__ @
     @@
      @
\\     @
 \\    @
 \\\\   @
  \\   @
  \\\\  @
   \\  @
    \\ @
      @@
__   @
  || @
  || @
  || @
  || @
  || @
  || @
__|| @
     @@
  x   @
 / \\  @
/   \\ @
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
_____ @
      @@
   @
<> @
(  @
   @
   @
   @
   @
   @
   @@
      @
      @
  _   @
 < \\, @
 /-|| @
(( || @
 \\/\\\\ @
      @
      @@
      @
,,    @
||    @
||/|, @
|| || @
|| |' @
\\\\/   @
      @
      @@
     @
     @
     @
 _-_ @
||   @
||   @
\\\\,/ @
     @
     @@
      @
 |\\   @
  \\\\  @
 / \\\\ @
|| || @
|| || @
 \\\\/  @
      @
      @@
      @
      @
      @
 _-_  @
|| \\\\ @
||/   @
\\\\,/  @
      @
      @@
     @
  /\\ @
 ||  @
=||= @
 ||  @
 ||  @
 \\\\, @
     @
     @@
      @
      @
  _   @
 / \\\\ @
|| || @
|| || @
\\\\_-| @
 /  \\ @
'----\`@@
      @
,,    @
||    @
||/\\\\ @
|| || @
|| || @
\\\\ |/ @
  _/  @
      @@
   @
   @
 ' @
\\\\ @
|| @
|| @
\\\\ @
   @
   @@
   @
   @
 ' @
\\\\ @
|| @
|| @
|| @
|; @
/  @@
     @
,,   @
||   @
||/\\ @
||_< @
|| | @
\\\\,\\ @
     @
     @@
   @
,, @
|| @
|| @
|| @
|| @
\\\\ @
   @
   @@
         @
         @
         @
\\\\/\\\\/\\\\ @
|| || || @
|| || || @
\\\\ \\\\ \\\\ @
         @
         @@
      @
      @
      @
\\\\/\\\\ @
|| || @
|| || @
\\\\ \\\\ @
      @
      @@
      @
      @
      @
 /'\\\\ @
|| || @
|| || @
\\\\,/  @
      @
      @@
      @
      @
      @
-_-_  @
|| \\\\ @
|| || @
||-'  @
|/    @
'     @@
      @
      @
      @
 /'\\\\ @
|| || @
|| || @
\\\\,|| @
   || @
   '\` @@
      @
      @
      @
,._-_ @
 ||   @
 ||   @
 \\\\,  @
      @
      @@
      @
      @
      @
 _-_, @
||_.  @
 ~ || @
,-_-  @
      @
      @@
     @
  ,  @
 ||  @
=||= @
 ||  @
 ||  @
 \\\\, @
     @
     @@
      @
      @
      @
\\\\ \\\\ @
|| || @
|| || @
\\\\/\\\\ @
      @
      @@
     @
     @
;    @
\\\\/\\ @
|| | @
|| | @
\\\\/  @
     @
     @@
       @
       @
;      @
\\\\/\\/\\ @
|| | | @
|| | | @
\\\\/\\\\/ @
       @
       @@
      @
      @
,     @
\\\\ /\` @
 \\\\   @
 /\\\\  @
/  \\; @
      @
      @@
       @
       @
       @
'\\\\/\\\\ @
 || ;' @
 ||/   @
 |/    @
(      @
 -_-   @@
    @
    @
    @
/\\\\ @
 /  @
/\\\\ @
 || @
 /  @
(,  @@
   _ @
  (  @
  )  @
  )  @
-{   @
  )  @
  )  @
  (_ @
     @@
   @
|| @
|| @
|| @
|| @
|| @
|| @
|| @
   @@
_    @
 )   @
 (   @
 (   @
  }- @
 (   @
 (   @
_)   @
     @@
 _    @
/ \\_/ @
      @
      @
      @
      @
      @
      @
      @@
  ___    @
 -   -_, @
(  ~/||  @
(  / ||  @
 \\/==||  @
 /_ _||  @
(  - \\\\, @
         @
         @@
    __     @
  ,-||-,   @
 ('|||  )  @
(( |||--)) @
(( |||--)) @
 ( / |  )  @
  -____-   @
           @
           @@
 _ _    _ , @
- - /  - -  @
  ('||  ||  @
 (( ||--||  @
 (( ||--||  @
 (( /   ||  @
   -___-\\\\, @
            @
            @@
      @
 \` \`  @
  _   @
 < \\, @
 /-|| @
(( || @
 \\/\\\\ @
      @
      @@
      @
 \` \`  @
      @
 /'\\\\ @
|| || @
|| || @
\\\\,/  @
      @
      @@
      @
 \` \`  @
      @
\\\\ \\\\ @
|| || @
|| || @
\\\\/\\\\ @
      @
      @@
          @
_-_ _,,   @
   -/  )  @
  ~||_<   @
   || \\\\  @
   ,/--|| @
  _--_-'  @
 ( ||     @
   ||     @@
`,pd=`flf2a$ 9 7 13 15 30
NTGreek by Bruce Jakeway--based on Standard by Glenn Chappell & Ian Chai
Questions and comments regarding ntgreek.flf to pbjakeway@neumann.uwaterloo.ca
For figlet release 2.0
Date:  1994 Apr 2

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
9    - height of a character
7    - height of a character, not including descenders
13   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font (like "-m 15" on command line)
30   - number of comment lines

Greek keyboard maps:

All keys map to those in standard except:

alpha   = A,a   lambda  = L,l   phi            = F,f   rough breathing  = (
beta    = B,b   mu      = M,m   chi            = C,c   smooth breathing = )
gamma   = G,g   nu      = N,n   psi            = Y,y   acute accent     = '
delta   = D,d   xi      = X,x   omega          = w,w   grave accent     = \`
epsilon = E,e   omicron = O,o   script theta   = J     diaresis         = ^
zeta    = Z,z   pi      = P,p   script phi     = j
eta     = H,h   rho     = R,r   final sigma    = V
theta   = Q,q   sigma   = S,s   omega bar      = v
iota    = I,i   tau     = T,t   raised period  = :
kappa   = K,k   upsilon = U,u   iota subscript = _

$@
$@
$@
$@
$@
$@
$@
$@
$@@
   @
 _ @
| |@
| |@
|_|@
 _ @
(_)@
   @
   @@
      @
 _  _ @
( )( )@
 V  V @
      @
      @
   $  @
      @
      @@
           @
   _   _   @
 _| |_| |_ @
(_   _   _)@
 _| |_| |_ @
(_   _   _)@
  |_| |_|  @
           @
           @@
    _    @
  _| |_  @
 /    _) @
( (| |_  @
 \\_    \\ @
  _| |) )@
 (_   _/ @
   |_|   @
         @@
       @
 _   __@
(_) / /@
   / / @
  / /  @
 / / _ @
/_/ (_)@
       @
       @@
        @
  ___   @
 /   \\  @
 \\ O /  @
 / _ \\/\\@
( (_>  <@
 \\___/\\/@
        @
        @@
   @
   @
 //@
// @
   @
   @
   @
   @
   @@
  @
  @
  @
((@
  @
  @
  @
  @
  @@
  @
  @
  @
))@
  @
  @
  @
  @
  @@
      @
      @
__/\\__@
\\    /@
/_  _\\@
  \\/  @
      @
      @
      @@
       @
       @
   _   @
 _| |_ @
(_   _)@
  |_|  @
       @
       @
       @@
   @
   @
 $ @
   @
   @
 _ @
( )@
|/ @
   @@
       @
       @
       @
 _____ @
(_____)@
       @
   $   @
       @
       @@
   @
   @
 $ @
   @
   @
 _ @
(_)@
   @
   @@
       @
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @
       @
       @@
       @
  ___  @
 / _ \\ @
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
   @
 _ @
/ |@
- |@
| |@
| |@
|_|@
   @
   @@
       @
 ____  @
(___ \\ @
  __) )@
 / __/ @
| |___ @
|_____)@
       @
       @@
       @
 _____ @
(__  / @
  / /  @
 (__ \\ @
 ___) )@
(____/ @
       @
       @@
        @
    _   @
  /  |  @
 / o |_ @
/__   _)@
   | |  @
   |_|  @
        @
        @@
       @
 ____  @
|  __) @
| |__  @
|___ \\ @
 ___) )@
(____/ @
       @
       @@
       @
   __  @
  / /  @
 / /_  @
| '_ \\ @
| (_) )@
 \\___/ @
       @
       @@
       @
 _____ @
(___  )@
  _/ / @
 (  _) @
 / /   @
/_/    @
       @
       @@
       @
  ___  @
 /   \\ @
 \\ O / @
 / _ \\ @
( (_) )@
 \\___/ @
       @
       @@
       @
  ___  @
 / _ \\ @
( (_) |@
 \\__, |@
   / / @
  /_/  @
       @
       @@
   @
   @
 $ @
 _ @
(_)@
   @
 $ @
   @
   @@
   @
   @
   @
 _ @
(_)@
 _ @
( )@
|/ @
   @@
     @
   __@
  / /@
 / / @
< <  @
 \\ \\ @
  \\_\\@
     @
     @@
       @
       @
 _____ @
(_____)@
 _____ @
(_____)@
       @
       @
       @@
     @
__   @
\\ \\  @
 \\ \\ @
  > >@
 / / @
/_/  @
     @
     @@
     @
 ___ @
(__ \\@
  / /@
 |_| @
  _  @
 (_) @
     @
     @@
          @
   _____  @
  / ___ \\ @
 / /   | |@
( ( () | |@
 \\ \\____/_@
  \\______/@
          @
          @@
       @
  ___  @
 / _ \\ @
| |_| |@
|  _  |@
| | | |@
|_| |_|@
       @
       @@
       @
 ____  @
|  _ \\ @
| |_) )@
|  _ ( @
| |_) )@
|____/ @
       @
       @@
       @
__   __@
\\ \\ / /@
 \\ v / @
  > <  @
 / ^ \\ @
/_/ \\_\\@
       @
       @@
          @
          @
    /\\    @
   /  \\   @
  / /\\ \\  @
 / /__\\ \\ @
/________\\@
          @
          @@
       @
 _____ @
|  ___)@
| |_   @
|  _)  @
| |___ @
|_____)@
       @
       @@
         @
    _    @
  _| |_  @
 /     \\ @
( (| |) )@
 \\_   _/ @
   |_|   @
         @
         @@
       @
 _____ @
|  ___)@
| |$   @
| |$   @
| |    @
|_|    @
       @
       @@
       @
 _   _ @
| | | |@
| |_| |@
|  _  |@
| | | |@
|_| |_|@
       @
       @@
     @
 ___ @
(   )@
 | | @
 | | @
 | | @
(___)@
     @
     @@
           @
    ___    @
   / _ \\   @
  ( (_| |_ @
 _ \\ _   _)@
| |___| |  @
 \\_____/   @
           @
           @@
       @
 _   __@
| | / /@
| |/ / @
|   <  @
| |\\ \\ @
|_| \\_\\@
       @
       @@
          @
          @
    /\\    @
   /  \\   @
  / /\\ \\  @
 / /  \\ \\ @
/_/    \\_\\@
          @
          @@
         @
 __   __ @
|  \\ /  |@
|   v   |@
| |\\_/| |@
| |   | |@
|_|   |_|@
         @
         @@
       @
 _   _ @
| \\ | |@
|  \\| |@
|     |@
| |\\  |@
|_| \\_|@
       @
       @@
       @
  ___  @
 / _ \\ @
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
         @
 _______ @
(   _   )@
 | | | | @
 | | | | @
 | | | | @
 |_| |_| @
         @
         @@
        @
  ____  @
 / __ \\ @
| |__| |@
|  __  |@
| |__| |@
 \\____/ @
        @
        @@
       @
 ____  @
|  _ \\ @
| |_) )@
|  __/ @
| |    @
|_|    @
       @
       @@
       @
______ @
\\  ___)@
 \\ \\   @
  > >  @
 / /__ @
/_____)@
       @
       @@
       @
 _____ @
(_   _)@
  | |  @
  | |  @
  | |  @
  |_|  @
       @
       @@
         @
 __   __ @
(_ \\ / _)@
  \\ v /  @
   | |   @
   | |   @
   |_|   @
         @
         @@
       @
       @
       @
  ____ @
 / ___)@
( (__  @
 \\__ \\ @
   _) )@
  (__/ @@
          @
   ____   @
  / __ \\  @
 | |  | | @
 | |  | | @
 _\\ \\/ /_ @
(___||___)@
          @
          @@
       @
 _____ @
(_____)@
  ___  @
 (___) @
 _____ @
(_____)@
       @
       @@
         @
 _  _  _ @
| || || |@
| \\| |/ |@
 \\_   _/ @
   | |   @
   |_|   @
         @
         @@
       @
 ______@
(___  /@
   / / @
  / /  @
 / /__ @
/_____)@
       @
       @@
 ___ @
|  _)@
| |  @
| |  @
| |  @
| |  @
| |_ @
|___)@
     @@
       @
__     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @
       @@
 ___ @
(_  |@
  | |@
  | |@
  | |@
  | |@
 _| |@
(___|@
     @@
       @
 _   _ @
(_) (_)@
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
||@@
   @
   @
\\\\ @
 \\\\@
   @
   @
   @
   @
   @@
        @
        @
        @
  __  __@
 /  \\/ /@
( ()  < @
 \\__/\\_\\@
        @
        @@
       @
  ___  @
 / _ \\ @
| |_) )@
|  _ < @
| |_) )@
|  __/ @
| |    @
|_|    @@
       @
       @
       @
__   __@
\\ \\ / /@
 \\ v / @
  > <  @
 / ^ \\ @
/_/ \\_\\@@
       @
   __  @
  / _) @
  \\ \\  @
 / _ \\ @
( (_) )@
 \\___/ @
       @
       @@
     @
     @
     @
 ___ @
/ __)@
> _) @
\\___)@
     @
     @@
         @
    _    @
   | |   @
  _| |_  @
 /     \\ @
( (| |) )@
 \\_   _/ @
   | |   @
   |_|   @@
       @
       @
       @
 _   _ @
( \\ / )@
 \\ v / @
  | |  @
  | |  @
  |_|  @@
       @
       @
       @
 _ __  @
| '_ \\ @
| | | |@
|_| | |@
    | |@
    |_|@@
    @
    @
    @
 _  @
| | @
| | @
 \\_)@
    @
    @@
         @
         @
         @
 _   __  @
| | /  \\ @
| || || )@
 \\_   _/ @
   | |   @
   |_|   @@
      @
      @
      @
 _  __@
| |/ /@
|   < @
|_|\\_\\@
      @
      @@
       @
__     @
\\ \\    @
 \\ \\   @
  > \\  @
 / ^ \\ @
/_/ \\_\\@
       @
       @@
       @
       @
       @
 _   _ @
| | | |@
| |_| |@
| ._,_|@
| |    @
|_|    @@
      @
      @
      @
 _  __@
| |/ /@
| / / @
|__/  @
      @
      @@
       @
       @
       @
  ___  @
 / _ \\ @
( (_) )@
 \\___/ @
       @
       @@
        @
        @
        @
 ______ @
(  __  )@
 | || | @
 |_||_| @
        @
        @@
       @
  ___  @
 / _ \\ @
| |_| |@
|  _  |@
| |_| |@
 \\___/ @
       @
       @@
       @
       @
       @
  ___  @
 / _ \\ @
| |_) )@
|  __/ @
| |    @
|_|    @@
       @
       @
       @
  ____ @
 /  ._)@
( () ) @
 \\__/  @
       @
       @@
     @
     @
     @
 ___ @
(   )@
 | | @
  \\_)@
     @
     @@
       @
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\___/ @
       @
       @@
           @
           @
           @
 _________ @
(  _____  )@
| |_/ \\_| |@
 \\___^___/ @
           @
           @@
           @
           @
           @
  __   __  @
 / / _ \\ \\ @
| |_/ \\_| |@
 \\___^___/ @
           @
           @@
__     @
\\ \\__  @
 > __) @
( (_   @
 > _)  @
( (__  @
 \\__ \\ @
    ) )@
   (_/ @@
         @
         @
         @
 _  _  _ @
| || || |@
| \\| |/ |@
 \\_   _/ @
   | |   @
   |_|   @@
       @
_____  @
\\__  ) @
  / /  @
 / /   @
| |__  @
 \\__ \\ @
    ) )@
   (_/ @@
   __@
  / /@
 | | @
 | | @
< <  @
 | | @
 | | @
  \\_\\@
     @@
 _ @
| |@
| |@
| |@
| |@
| |@
| |@
|_|@
   @@
__   @
\\ \\  @
 | | @
 | | @
  > >@
 | | @
 | | @
/_/  @
     @@
     @
 /\\/|@
|/\\/ @
     @
     @
     @
     @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
| |_| |@
|  _  |@
| | | |@
|_| |_|@
       @
       @@
 _   _ @
(_)_(_)@
 / _ \\ @
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
       @
       @
 _   _ @
(_)_(_)@
 / _\` |@
( (_| |@
 \\__,_|@
       @
       @@
       @
       @
 _   _ @
(_)_(_)@
 / _ \\ @
( (_) )@
 \\___/ @
       @
       @@
       @
       @
 _   _ @
(_) (_)@
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
       @
  ___  @
 / _ \\ @
| | ) )@
| |< < @
| | ) )@
| ||_/ @
|_|    @
       @@

`,md=`flf2a$ 10 7 23 0 7
hollywood.flf by Juan Car (jc@juguete.quim.ucm.es)
version 1.0 -- 5/Mar/94

Uses spanish character set with -D option:
                                                     _         _
[ = a'   \\ = e'    ] = i'    { = o'    | = u'    } = n     ~ = N

            $@
            $@
          $ $@
        $ $  @
      $ $    @
    $ $      @
  $ $        @
$ $          @
$            @
$            @@
           $$@
         $ /'@
       $ /' $@
     $ /' $  @
   $ /' $    @
 $ /' $      @
$O  $        @
$ $          @
$            @
             @@
   $   $@
 $/'  /'@
$'   ' $@
$    $  @
$  $    @
$$      @
$       @
$       @
$       @
$       @@
            $   $@
         $      $@
       $ /'    /'@
     $-/'----/'-$@
   $ /'    /' $  @
 $-/'----/'-$    @
$/'    /' $      @
$       $        @
$     $          @
$   $            @@
           $_   /@
         $/' \`/'$@
       $/'  /'_)$@
     $ (__/_  $  @
   $    /'  )    @
 $    /'  /'$    @
$(__/__,/'$      @
$ /'    $        @
$     $          @
$   $            @@
        $@
      $ $@
    $   $@
  $ O  /'@
$    /' $@
$  /'   $@
$/'  O$  @
$   $    @
$ $      @
$        @@
          $ $@
        $   $@
      $  .-~)@
    $   ;_.~$@
  $__--~|   $@
$,~     |__ $@
$\`.__--~\`.$  @
$       $    @
$     $      @
$   $        @@
  $$@
$ /'@
$' $@
$$  @
$   @
$   @
$   @
$   @
$   @
$   @@
           $_$@
         $/' \`@
       $/'   $@
     $/'   $  @
   $/'   $    @
 $/'   $      @
$(_, $        @
$  $          @
$$            @
$             @@
           $_$@
         $ ' )@
       $   /'$@
     $   /'$  @
   $   /'$    @
 $   /'$      @
$(,/'$        @
$  $          @
$$            @
$             @@
        $@
      $ $@
    $   ,@
  $\\   /_@
$___\\/_~_@
$_-/'\\  $@
$/'   \\$ @
$    $   @
$  $     @
$$       @@
        $@
      $ $@
    $   $@
  $    /'@
$___ /___@
$  /'   $@
$/'   $  @
$   $    @
$ $      @
$        @@
   $@
   $@
   $@
   $@
   $@
  $$@
$ /$@
$'$ @
$   @
$   @@
       $@
      $$@
    $  $@
  $    $@
$_______@
$      $@
$    $  @
$  $    @
$$      @
$       @@
 $@
 $@
 $@
 $@
 $@
 $@
$O@
$$@
$ @
$ @@
            $@
          $/'@
        $/' $@
      $/' $  @
    $/' $    @
  $/' $      @
$/' $        @
$ $          @
$            @
$            @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $/'      /'@
   $/'      /' $@
 $/'      /' $  @
$(_____,/' $    @
$        $      @
$      $        @
$    $          @@
          $_$@
      $_--~/'@
     $~  /' $@
   $   /' $  @
 $   /' $    @
$  /' $      @
$/' $        @
$ $          @
$            @
$            @@
        $_  $@
     $_-~ \`\\$@
    $(      )@
  $      _/~$@
$     _/~   $@
$  _/~     $ @
$/~____,/$   @
$      $     @
$    $       @
$  $         @@
           $_  $@
         $/' \`\\$@
       $      _)@
     $  .__--~ $@
   $       ;  $ @
 $        /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
      $   _$@
   $  _--~/'@
 $_--~  /' $@
$-~____/__$ @
$    /' $   @
$  /' $     @
$/' $       @
$ $         @
$           @
$           @@
           $_  $@
         $/' \`\\$@
       $/'     \`@
     $ (____   $@
   $        )$  @
 $        /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $/_____   $@
   $/'      )$  @
 $/'      /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
         $_______@
       $ (     _/@
     $      _/~ $@
   $    \\_/~  $  @
 $    _/~\\  $    @
$  _/~    $      @
$/~     $        @
$     $          @
$   $            @
$ $              @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $_(_____,/$@
   $/'     ) $  @
 $/'      /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
     $_  $@
   $/' \`\\$@
 $/'     )@
$(_____ /$@
$     /'$ @
$   /'$   @
$ /'$     @
$ $       @
$         @
$         @@
     $@
     $@
     $@
     $@
    $O@
  $  $@
$O $  @
$$    @
$     @
$     @@
     $@
     $@
     $@
     $@
    $O@
  $  $@
$ / $ @
$'$   @
$     @
$     @@
      $@
      $@
     $$@
   $_/'@
 $/~  $@
$\`\\  $ @
$  \\$  @
$ $    @
$      @
$      @@
         $@
        $$@
      $  $@
    $    $@
  $-------@
$_______ $@
$      $  @
$    $    @
$  $      @
$$        @@
      $@
      $@
     $$@
   $\\ $@
   $ \\$@
  $ _/'@
$,/~  $@
$   $  @
$ $    @
$      @@
     $ _  $@
   $_-~ \`\\$@
  $(      )@
  $    _,/'@
  $  /'   $@
  $/'   $  @
$O    $    @
$   $      @
$ $        @
$          @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $/' _    /'@
   $/' /' ) /' $@
 $/'  \`--\`-' $  @
$(_____,   $    @
$        $      @
$      $        @
$    $          @@
              ,@
            /'/@
          /' / @
       ,/'  /  @
      /\`--,/   @
    /'    /    @
(,/'     (_,   @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /' (___,/'@
      /'     )    @
    /'      /'    @
(,/' (___,/'      @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'   ._)@
     /'        @
   /'          @
 /'            @
(_____,/'      @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /'      /'@
      /'      /'  @
    /'      /'    @
(,/' (___,/'      @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'   ._)@
      (___     @
   _-~    \`    @
 /'            @
(_____,        @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'   ._)@
       ,/'        @
      /\`---,      @
    /'            @
(,/'              @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'     )@
     /'        @
   /'   _      @
 /'    ' )     @
(_____,/'      @
               @
               @
               @@
           _       @
          ' )     )@
          /'    /' @
       ,/'    /'   @
      /\`---,/'     @
    /'    /'       @
(,/'     (_,       @
                   @
                   @
                   @@
           _  _ @
          ' /' \`@
          /'    @
        /'      @
      /'        @
    /'          @
(,/(_,          @
                @
                @
                @@
           _______ @
          (,     /'@
               /'  @
             /'    @
   _       /'      @
 /' \`    /'        @
(_____,/'          @
                   @
                   @
                   @@
           _      @
          ' )   _/@
          /' _/~  @
        /'_/~     @
      /\\/~        @
    /'  \\         @
(,/'     \\_,      @
                  @
                  @
                  @@
              _ @
            /~_)@
        ~-/'-~  @
        /'      @
      /'        @
 /~\\,'   _      @
(,/'\`\\____)     @
                @
                @
                @@
           _        @
          ' )     _)@
          //  _/~/' @
        /'/_/~ /'   @
      /' /~  /'     @
    /'     /'       @
(,/'      (_,       @
                    @
                    @
                    @@
           _      @
          ' )    )@
          //   /' @
        /'/  /'   @
      /' / /'     @
    /'  //'       @
(,/'    (_,       @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'     )@
     /'      /'@
   /'      /'  @
 /'      /'    @
(_____,/'      @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /' (___,/'@
      /'          @
    /'            @
(,/'              @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'     )@
     /'      /'@
   /'   _  /'  @
 /'    ' )'    @
(_____,/(_,    @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /' (___,/'@
      /'   ;      @
    /'    /'      @
(,/'     (_,      @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'   ._)@
      (____    @
           )   @
         /'    @
(_____,/'      @
               @
               @
               @@
      __        @
     (  ~-_ /'  @
          /\`-__)@
        /'      @
      /'        @
    /'          @
(,/(_,          @
                @
                @
                @@
        _         @
       ' )       )@
       /'      /' @
     /'      /'   @
   /'      /'     @
 /'      /'       @
(_____,/'         @
                  @
                  @
                  @@
    _         @
   ' )       )@
    /      _/ @
   /    _/~   @
  /  _/~      @
 /_/~         @
/~            @
              @
              @
              @@
    _                @
   ' )       )      )@
    /      _/      / @
   /    _/~/    _/~  @
  /  _/~  /  _/~     @
 /_/~    /_/~        @
/~      /~           @
                     @
                     @
                     @@
       _         @
      ' |       )@
        |    _/~ @
         |_/~    @
       _/|       @
    _/~   |      @
(,/~      (_,    @
                 @
                 @
                 @@
    _        @
   ' \\      )@
      \\   /' @
       \\/'   @
      /'     @
    /'       @
(,/(_,       @
             @
             @
             @@
        _____ @
       (,    )@
          _/~ @
       _/~    @
    _/~       @
 _/~  _       @
(______)      @
              @
              @
              @@
            $_____@
          $/'    $@
        $/'    $  @
      $/'    $    @
    $/'    $      @
  $/'    $        @
$/_____$          @
$    $            @
$  $              @
$$                @@
   $@
$| $@
$| $@
$ |$@
$ |$@
$  |@
$  |@
$  $@
$$  @
$   @@
           $______$@
         $       /'@
       $       /' $@
     $       /' $  @
   $       /' $    @
 $       /' $      @
$______/' $        @
$       $          @
$     $            @
$   $              @@
     $_/|$@
  $_/~  |$@
$/~      |@
$        $@
$      $  @
$    $    @
$  $      @
$$        @
$         @
$         @@
      $@
      $@
      $@
      $@
    $ $@
  $   $@
$     $@
-------@
$     $@
$   $  @@
|$@
$|@
$\`@
$$@
$ @
$ @
$ @
$ @
$ @
$ @@
          @
          @
          @
     ____ @
   /'    )@
 /'    /' @
(___,/(__ @
          @
          @
          @@
           @
         /'@
       /'  @
     /'__  @
   /'    ) @
 /'    /'  @
(___,/(__  @
           @
           @
           @@
            @
            @
            @
     ____   @
   /'    )--@
 /'         @
(___,/      @
            @
            @
            @@
                 @
               /'@
             /'  @
     _____,/'    @
   /'    /'      @
 /'    /'        @
(___,/(__        @
                 @
                 @
                 @@
          @
          @
          @
     ____ @
   /'    )@
 /(___,/' @
(________ @
          @
          @
          @@
                 @
                 @
              /')@
            /' /'@
         -/'--'  @
        /'       @
      /(_____    @
    /'           @
  /'             @
/'               @@
                @
                @
                @
           ____ @
         /'    )@
       /'    /' @
      (___,/(__ @
         /'     @
 /     /'       @
(___,/'         @@
            @
          /'@
        /'  @
      /'__  @
    /'    ) @
  /'    /'  @
/'    /(__  @
            @
            @
            @@
      @
      @
      @
     O@
   /' @
 /'   @
(__   @
      @
      @
      @@
               @
               @
               @
              O@
            /' @
          /'   @
        /(__   @
      /'       @
    /'         @
(,/'           @@
                @
          /'  _/@
        /' _/~  @
     ,/'_/~     @
    /\\/~        @
  /'  \\         @
/'     \\        @
                @
                @
                @@
           @
         /'@
       /'  @
     /'    @
   /'      @
 /'        @
(__        @
           @
           @
           @@
                 @
                 @
                 @
     ,__________ @
    /'    )     )@
  /'    /'    /' @
/'    /'    /(__ @
                 @
                 @
                 @@
           @
           @
           @
     ,____ @
    /'    )@
  /'    /' @
/'    /(__ @
           @
           @
           @@
            @
            @
            @
     ____   @
   /'    )--@
 /'    /'   @
(___,/'     @
            @
            @
            @@
                   @
                   @
                   @
            ____   @
          /'    )--@
        /'    /'   @
      /(___,/'     @
    /'             @
  /'               @
/'                 @@
           @
           @
           @
      ____ @
    /'    )@
  /'    /' @
 (___,/(__ @
    /'     @
 -/'-      @
/'         @@
             @
             @
             @
      ____   @
    )'    )--@
  /'         @
/'           @
             @
             @
             @@
            @
            @
            @
     ____   @
   /'    )--@
  '---,     @
(___,/      @
            @
            @
            @@
           @
         /'@
     --/'--@
     /'    @
   /'      @
 /'        @
(__        @
           @
           @
           @@
          @
          @
          @
          @
   /'    /@
 /'    /' @
(___,/(__ @
          @
          @
          @@
        @
        @
        @
 .     ,@
 |    / @
 |  /'  @
_|/(__  @
        @
        @
        @@
            @
            @
            @
 .   . ,   ,@
 |   |/   / @
 |  /|  /'  @
_|/' |/(__  @
            @
            @
            @@
        @
        @
        @
  .    ,@
   \\  / @
    \\'  @
__/' \\_ @
        @
        @
        @@
                @
                @
                @
                @
         /'    /@
       /'    /' @
      (___,/(__ @
         /'     @
 /     /'       @
(___,/'         @@
         @
         @
         @
    ____ @
   '  _/'@
   _/'   @
_/'__,   @
         @
         @
         @@
        $   _$@
      $   /' \`@
    $.__/'   $@
    $|     $  @
   $/'   $    @
 $/'   $      @
$(_, $        @
$  $          @
$$            @
$             @@
            $/@
          $/'$@
        $/' $ @
      $/' $   @
    $/' $     @
  $/' $       @
$/' $         @
$ $           @
$             @
$             @@
           $_$@
         $ ' )@
       $   /'$@
     $    |$  @
   $   ,--\`$  @
 $   /'  $    @
$(,/'  $      @
$    $        @
$  $          @
$$            @@
  $_   $@
$/' |__)@
$      $@
$    $  @
$  $    @
$$      @
$       @
$       @
$       @
$       @@
           @
           @
         /'@
     ____  @
   /'    ) @
 /'    /'  @
(___,/(__  @
$          @
$          @
$          @@
           @
           @
         /'@
     ____  @
   /'    ) @
 /(___,/'  @
(________  @
$          @
$          @
$          @@
         @
         @
       /'@
     ,   @
   /'    @
 /'      @
(__      @
$        @
$        @
$        @@
            @
            @
         /' @
     ____   @
   /'    )--@
 /'    /'   @
(___,/'     @
$           @
$           @
$           @@
           @
           @
         /'@
           @
   /'    / @
 /'    /'  @
(___,/(__  @
$          @
$          @
$          @@
            @
            @
      ,--__,@
     ,____  @
    /'    ) @
  /'    /'  @
/'    /(__  @
$           @
$           @
$           @@
           _-~~--'@
          ' )    )@
          //   /' @
        /'/  /'   @
      /' / /'     @
    /'  //'       @
(,/'    (_,       @
$                 @
$                 @
$                 @@
`,Rd=`flf2a$ 6 4 20 0 2
invita.flf 06/94 pk6811s@acad.drake.edu
alas, the computer has better handwriting than I do 
      @
    $$@
   $$ @
  $$  @
 $$   @
$$    @@
    /$$@
  $/$  @
  /    @
$o$    @
       @
       @@
   @
//$@
   @
$  @
   @
   @@
        @
 -/--/-$@
-/--/-$ @
        @
        @
        @@
    __/_  @
   ( /  )$@
    \\  $  @
(__/_)$   @
  /       @
          @@
       @
  ()/$$@
   /   @
 $/()$ @
       @
       @@
  __ $@
 (  )$@
 ,\\ $ @
(__\\_ @
    ($@
      @@
    @
 / $@
    @
$   @
    @
    @@
    $ .-$@
   $ / $ @
  $ / $  @
 $ / $   @
$ (__ $  @
         @@
    $-.  $@
    $ / $ @
   $ / $  @
  $ / $   @
$_./ $    @
          @@
      @
      @
$_\\/_$@
$ /\\ $@
      @
      @@
     @
 $   @
$_|_$@
$ | $@
     @
     @@
   $@
   $@
   $@
$  $@
$/  @
    @@
      @
   $ $@
  __ $@
 $  $ @
$  $  @
      @@
   $@
    @
    @
$o $@
    @
    @@
    $@
 $ /$@
  /  @
$/ $ @
$    @
     @@
    __ $@
  /   )$@
 /   / $@
(__ / $ @
        @
        @@
    _ $@
  / / $@
   /  $@
  /  $ @
 /     @
       @@
   _  $@
  '  )$@
 ,--' $@
/___ $ @
      $@
       @@
   _  $@
  '  )$@
   -( $@
(__ )$ @
       @
       @@
 _    $@
 /   /$@
/___/_$@
   /  $@
  /    @
       @@
   ___$@
  /   $@
 /__  $@
____)$ @
       @
       @@
   $__$@
  /   $@
 /__  $@
(__ )$ @
       @
       @@
 ___  $@
/   / $@
   /  $@
  /  $ @
 /     @
       @@
  ___ $@
 (   )$@
 .--' $@
(___)$ @
       @
       @@
   __ $@
 /   )$@
(__,/ $@
   / $ @
  /    @
       @@
    @
   $@
$'$ @
$'$ @
    @
    @@
     @
     @
 $o$ @
$  $ @
$/$  @
     @@
     @
  /$$@
$<$$$@
  \\$$@
     @
     @@
   $@
$__$@
$__$@
   $@
    @
    @@
     @
 \\   @
 $>$$@
 /   @
     @
     @@
  ___ $@
(    )$@
   / $ @
  o $  @
       @
       @@
   _  $@
 /   )$@
/  () $@
\\____/$@
       @
       @@
   _____ $ @
  (, /  |$ @
    /---|$ @
 ) /    |_ @
(_/        @
           @@
   ______ $ @
  (, /    )$@
    /---( $ @
 ) / ____)  @
(_/ (       @
            @@
 )   ___ $ @
(__/_____)$@
  /      $ @
 /         @
(______)$  @
           @@
   ______ $ @
  (, /    )$@
    /    /  @
  _/___ /_  @
(_/___ /    @
            @@
     _____)$@
   /      $ @
   )__  $   @
 /          @
(_____)$    @
            @@
   ________)$@
  (, /    $  @
    /___,$   @
 ) /   $     @
(_/          @
             @@
     _____)$@
   /      $ @
  /   ___ $ @
 /     / )$ @
(____ /  $  @
            @@
   ____  ___)$@
  (, /   / $  @
    /---/$    @
 ) /   (__    @
(_/           @
              @@
     _____$@
    (, / $ @
      /$   @
  ___/__   @
(__ / $    @
           @@
      _____$@
     (, / $ @
       /$   @
   ___/__   @
 /   / $    @
(__ / $     @@
   __   __)$@
  (, ) / $  @
    /( $    @
 ) /  \\_    @
(_/         @
            @@
     _ $  @
$___/__)$ @
(, /  $   @
  /  $    @
 (_____$  @
        ) @@
   __     __)$@
  (, /|  /|$  @
    / | / |$  @
 ) /  |/  |_  @
(_/   '    $  @
              @@
   __     __)$@
  (, /|  / $  @
    / | / $   @
 ) /  |/ $    @
(_/   ' $     @
              @@
     ___ $@
   /(,  )$@
  /    /$ @
 /    /$  @
(___ /$   @
          @@
    _____ $ @
   (, /   )$@
    _/__ /$ @
    /    $  @
 ) /    $   @
(_/         @@
    ____ $ @
   (,    )$@
        /$ @
  ____ /$  @
(____ (    @
       )   @@
   _____ $ @
  (, /   )$@
    /__ /$ @
 ) /   \\_  @
(_/        @
           @@
      __ $@
  (__/  )$@
    /$    @
 ) /$     @
(_/$      @
          @@
    ______)$@
   (, / $   @
     / $    @
$ ) / $     @
$(_/ $      @
            @@
 __     __)$@
(, /   / $  @
  /   /$    @
 /   /$     @
(___(_      @
            @@
 __    __)$@
(, )  / $  @
   | /$    @
   |/$     @
   |$      @
           @@
 __       __)$@
(, )  |  / $  @
   | /| /$    @
   |/ |/$     @
   /  |$      @
              @@
 __   __)$ @
(,  |/ $   @
    | $    @
 ) /|_     @
(_/  $     @
           @@
  __     __)$@
 (, )   / $  @
   /   /$    @
  (___/_     @
 )   / $     @
(__ / $      @@
   ___$  @
  (,   )$@
      /$ @
    _/_  @
 )   /   @
(__ /    @@
    $ _ $@
   $ / $ @
  $ / $  @
 $ / $   @
$ /_ $   @
         @@
$    @
$\\ $ @
  \\  @
 $ \\$@
    $@
     @@
    $ _  $@
    $ / $ @
   $ / $  @
  $ / $   @
$ _/ $    @
          @@
   _  @
 $/ \\$@
      @
 $   $@
      @
      @@
 @
 @
 @
 @
_@
 @@
       @
$$$\\$$$@
       @
 $   $ @
       @
       @@
    @
    @
 _$ @
(_(_@
    @
    @@
     @
  /)$@
 (/_ @
/_)$ @
     @
     @@
   @
   @
 _$@
(__@
   @
   @@
      @
   /)$@
 _(/$ @
(_(_  @
      @
      @@
    @
    @
 $_$@
_(/_@
    @
    @@
       @
    /)$@
   //$ @
  /(_  @
 /)    @
(/     @@
      @
      @
   _ $@
  (_/_@
 .-/  @
(_/   @@
    @
 /)$@
(/ $@
/ )_@
    @
    @@
    @
  ,$@
  $ @
_(_ @
    @
    @@
       @
    $,$@
     $ @
   $/_ @
 .-/   @
(_/    @@
    @
 /)$@
(/_$@
/(__@
    @
    @@
     @
  /)$@
 //$ @
(/_  @
     @
     @@
     @
     @
___$ @
// (_@
     @
     @@
    @
    @
__$ @
/ (_@
    @
    @@
    @
    @
 ___@
(_) @
    @
    @@
        @
        @
    __ $@
    /_)_@
 .-/    @
(_/     @@
    @
    @
 _ $@
(_/_@
 /( @
(_) @@
    @
    @
 __$@
/ (_@
    @
    @@
    @
    @
$_ $@
/_)_@
    @
    @@
    @
    @
_/_ @
(__ @
    @
    @@
    @
    @
   $@
(_(_@
    @
    @@
    @
    @
_ _ @
(/__@
    @
    @@
     @
     @
_   _@
(_(/$@
     @
     @@
     @
     @
__/$$@
$/(__@
/    @
     @@
      @
      @
  $  $@
  (_/_@
 .-/  @
(_/   @@
      @
      @
   _ $@
  '_)_@
 .-/  @
(_/   @@
    $ .-$@
   $ / $ @
 $ -  $  @
 $ / $   @
$ (__ $  @
         @@
  $   $@
  $ | $@
  $ | $@
  $ | $@
       @
       @@
    $-.  $@
    $ / $ @
   $  - $ @
  $ / $   @
$_./ $    @
          @@
  _   _$@
$' \`-'  @
        @
$     $ @
        @
        @@
   ___'_'$ @
  (, /  |$ @
    /---|$ @
 ) /    |_ @
(_/        @
           @@
     '__'$@
   /(,  )$@
  /    /$ @
 /    /$  @
(___ /$   @
          @@
 __ '  '__)$@
(, /   / $  @
  /   /$    @
 /   /$     @
(___(_      @
            @@
    @
 . .@
 _  @
(_(_@
    @
    @@
    @
 . .@
 ___@
(_) @
    @
    @@
    @
 . .@
   $@
(_(_@
    @
    @@
   ______ $ @
  (, //   )$@
    //--( $ @
 ) //____)  @
(_//        @
            @@
`,gd=`flf2a$ 4 3 10 0 3
italic.flf		Version 2
by:  Bas Meijer   meijer@info.win.tue.nl   bas@damek.kth.se
fixed by: Ryan Youck  youck@cs.uregina.ca
$@
$@
$@
 @@
  @
| @
. @
  @@
// @
$$ @
   @
   @@
      @
_|_|_ @
-|-|- @
      @@
 ||_ @
(||$ @
_||) @
 ||  @@
   @
0/ @
/0 @
   @@
    @
()/ @
(X  @
    @@
/ @
$ @
$ @
  @@
$/ @
($ @
$\\ @
   @@
\\$ @
$) @
/$ @
   @@
$  $@
$\\/$@
$/\\$@
$  $@@
$   $@
$_|_$@
$ | $@
$   $@@
 $@
$$@
,$@
 $@@
$  $@
$__$@
$  $@
$  $@@
  $@
$ $@
. $@
  $@@
   @
$/ @
/$ @
   @@
  __  @
 /  ) @
(__/  @
      @@
   @
-/ @
/  @
   @@
 _  @
 _) @
/__ @
    @@
 _  @
 _) @
__) @
    @@
    @
(_/ @
 /  @
    @@
 __ @
/_  @
__) @
    @@
  __ @
 /_  @
(__) @
     @@
___ @
 _/ @
/   @
    @@
  _  @
 (_) @
(__) @
     @@
 __  @
(__) @
__/  @
     @@
  @
. @
. @
  @@
  @
. @
, @
  @@
$ $@
$/$@
$\\$@
$ $@@
$  $@
$__$@
$--$@
$  $@@
$ $@
$\\$@
$/$@
$ $@@
$ _ @
$  )@
$ . @
$   @@
 @
 @
 @
 @@
  _  @
 /_| @
(  | @
     @@
  __  @
 / _) @
/(_)  @
      @@
  _  @
 / ) @
(__  @
     @@
  __  @
 /  ) @
/(_/  @
      @@
 ___ @
(_   @
/__  @
     @@
 ___ @
(_ $ @
/$   @
     @@
  __  @
 / _  @
(__)  @
      @@
      @
 )__/ @
/  /  @
      @@
   @
 / @
(  @
   @@
     @
   / @
(_/  @
     @@
      @
 /__/ @
/  )  @
      @@
    @
 /  @
(__ @
    @@
      @
 /|/| @
/   | @
      @@
      @
 /| ) @
/ |/  @
      @@
  __  @
 /  ) @
(__/  @
      @@
  __  @
 /__) @
/  $  @
      @@
  __  @
 /  ) @
(__\\  @
      @@
  __  @
 /__) @
/ ($  @
      @@
  __ @
 (   @
__)  @
     @@
____ @
 / $ @
(    @
     @@
      @
 /  / @
(__/  @
      @@
     @
(  / @
|_/  @
     @@
      @
(   / @
|/|/  @
      @@
     @
 \\_) @
( \\  @
     @@
     @
(__/ @
 /$  @
     @@
 __ @
 _/ @
/__ @
    @@
 _ @
|$ @
|_ @
   @@
   @
\\  @
 \\ @
   @@
_  @
$| @
_| @
   @@
   @
/\\ @
$$ @
   @@
   @
   @
__ @
   @@
\\ @
$ @
$ @
  @@
   @
 _ @
(/ @
   @@
   @
 / @
() @
   @@
   @
 _ @
($ @
   @@
    @
 _/ @
(/  @
    @@
   @
 _$@
(- @
   @@
 _ @
(_ @
/$ @
   @@
    @
  _ @
 (/ @
_/  @@
   @
 / @
/) @
   @@
   @
 ' @
/  @
   @@
     @
   ' @
  /  @
_/   @@
   @
 / @
/( @
   @@
   @
 / @
(  @
   @@
    @
 _  @
//) @
    @@
   @
   @
/) @
   @@
   @
   @
() @
   @@
    @
    @
 /) @
/   @@
   @
 _ @
(/ @
/  @@
   @
 _ @
/$ @
   @@
    @
 $_ @
_)$ @
    @@
   @
_/ @
/  @
   @@
   @
 $ @
(/ @
   @@
   @
$$ @
\\/ @
   @@
    @
 $$ @
((/ @
    @@
   @
$$ @
)( @
   @@
   @
 $ @
(/ @
/  @@
   @
_  @
/_ @
   @@
( @
< @
( @
  @@
| @
| @
| @
  @@
) @
> @
) @
  @@
    @
/\\/ @
    @
    @@
 o_o @
 /_| @
(  | @
     @@
 o__o @
 /  ) @
(__/  @
      @@
  o  o@
 /  / @
(__/  @
      @@
   @
-_-@
(/ @
   @@
   @
-- @
() @
   @@
   @
- -@
(/ @
   @@
   __  @
  / _) @
 /(_)  @
/      @@
`,vd=`flf2a$ 6 5 76 15 14 1 16271
Ivrit (Hebrew) Unicode font assembled by John Cowan <cowan@ccil.org>
Latin chars from  Standard by G. Chappell & Ian Chai
Hebrew chars from Jerusalem by Gedaliah Friedenberg <gfrieden@nyx.cs.du.edu>
        Use "ilhebrew.flc" for Hebrew keyboard mapping
        Use "ushebrew.flc" for U.S.-style keyboard mapping ("febrew" script)
        Use "8859-8.flc" for ISO 8859-8 text
        Or use UTF-8
WARNING! FIGfonts aren't bidirectional; this is strictly right-to-left 
        (by default) even for the Latin characters.
figlet release 2.2 -- November 1996

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
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
173  SOFT HYPHEN
        @
        @
  _____ @
 |_____|@
    $   @
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
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
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x05D0  HEBREW LETTER ALEF
 __   __@
 \\ \\ / /@
 |  V / @
 | |\\ \\ @
 |_| \\_\\@
        @@
0x05D1  HEBREW LETTER BET
   ______  @
  |____  | @
       | | @
  _____| |_@
 /________/@
           @@
0x05D2  HEBREW LETTER GIMEL
    ____  @
   |__  | @
      | | @
  ____| | @
 /____/\\_\\@
          @@
0x05D3  HEBREW LETTER DALET
  _______ @
 |____   |@
      | | @
      | | @
      |_| @
          @@
0x05D4  HEBREW LETTER HE
  _______ @
 |_____  |@
   _   | |@
  | |  | |@
  |_|  |_|@
          @@
0x05D5  HEBREW LETTER VAV
  ___ @
 |_  |@
   | |@
   | |@
   |_|@
      @@
0x05D6  HEBREW LETTER ZAYIN
 ________ @
 \\__   __\\@
    | |   @
    | |   @
    |_|   @
          @@
0x05D7  HEBREW LETTER HET
  _______ @
 |.  __  |@
  | |  | |@
  | |  | |@
  |_|  |_|@
          @@
0x05D8  HEBREW LETTER TET
  __   ___ @
 |. | /_  |@
  | |   | |@
  | |___| |@
  |_______|@
           @@
0x05D9  HEBREW LETTER YOD
  ___ @
 |_  |@
   |_|@
    $ @
    $ @
      @@
0x05DA  HEBREW LETTER FINAL KAF
  _______ @
 |____  .|@
      | | @
      | | @
      | | @
      |_| @@
0x05DB  HEBREW LETTER KAF
  _____  @
 |____ \\ @
      | |@
  ____| |@
 |_____/ @
         @@
0x05DC  HEBREW LETTER LAMED
 |=|____ @
 |____  |@
     / / @
    / /  @
   /_/   @
         @@
0x05DD  HEBREW LETTER FINAL MEM
  ________ @
 |.  ___  |@
  | |   | |@
  | |___| |@
  |_______|@
           @@
0x05DE  HEBREW LETTER MEM
  _______ @
 |.  __  |@
  | |  | |@
  | | _| |@
  |_||___|@
          @@
0x05DF  HEBREW LETTER FINAL NUN
  ___ @
 |_  |@
   | |@
   | |@
   | |@
   |_|@@
0x05E0  HEBREW LETTER NUN
   ___ @
  |_  |@
    | |@
  __| |@
 |____|@
       @@
0x05E1  HEBREW LETTER SAMEKH
  _______ @
 |.  __  |@
  | |  | |@
  | |__/ |@
  |_____/ @
          @@
0x05E2  HEBREW LETTER AYIN
  __   _ @
  \\ \\ | |@
   \\ \\| |@
  __\\ \` |@
 |______|@
         @@
0x05E3  HEBREW LETTER FINAL PE
  ______ @
 |  __  |@
 | |_ | |@
 |___|| |@
      | |@
      |_|@@
0x05E4  HEBREW LETTER PE
  _______ @
 |  ___  |@
  \\_\\  | |@
  _____| |@
 |_______|@
          @@
0x05E5  HEBREW LETTER FINAL TSADI
  __   _ @
 |. | | |@
  | | // @
  | |//  @
  | |    @
  |_|    @@
0x05E6  HEBREW LETTER TSADI
   __   __.@
   \\ \\ / / @
    \\ V /  @
  ___\\  \\  @
 |______|  @
           @@
0x05E7  HEBREW LETTER QOF
  ______ @
 |____  |@
   _  | |@
  | | |_|@
  | |    @
  |_|    @@
0x05E8  HEBREW LETTER RESH
  ______ @
 |____  |@
      | |@
      | |@
      |_|@
         @@
0x05E9  HEBREW LETTER SHIN
  _   _   _ @
 | | | | | |@
 | | | | | |@
 | |/ /_/ / @
 |_______/  @
            @@
0x05EA  HEBREW LETTER TAV
    ______ @
   |  __  |@
   | |  | |@
  _| |  | |@
 |___|  |_|@
           @@
0x2721  STAR OF DAVID
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
-0x0002  
aleph = t, bet/vet = c, gimel = d, dalet = s, he = v, vav = u, zayin = z  @
het = j, tet = y, yod = h, kaf/chaf = f, final kaf = l, lamed = k, mem = n@
final mem = o, nun = b, final nun = i, samekh = x, ayin = g, pe/fe = p,   @
final pe = ;, tsadi = m, final tsadi = ., qof = e, resh = r, shin/sin = a @
tav = , comma = ', period = /, semicolon = \`, slash = q, apostrophe = w   @
Star of David = *                                                         @@
-0x0003  
aleph = a, bet/vet = b, gimel = g, dalet = d, he = h, vav = v, zayin = z  @
het = c, tet = t, yod = y, kaf/chaf = k, final kaf = f, lamed = l, mem = m@
final mem = o, nun = n, final nun = i, samekh = e, ayin = _, pe/fe = p,   @
final pe = u, tsadi = j, final tsadi = w, qof = q, resh = r, shin/sin = s @
tav = x                                                                   @
Star of David = *                                                         @@
`,Cd=`flf2a$ 8 7 19 -1 20

                    Jacky font by Meph.'99
                    ======================

-> Defined: ASCII code 32-126
-> Uppercase characters only.

               O=============================================O
  ,,,,,,,,     I  __  __   ___   ___   _  _           _,,,_  I
.,,,  __  \\_   I |M \\/ M| |E__| |P_ \\ | || | ASCII   / o o \\ I
(    ( o)   \\_ I | |\\/| | | _|  |  _/ | HH | & more  >  P  < I
\`\\           o)I |_|  |_| |E__| |_P   |_||_| ~~~~~~  \\_\\_/_/ I
  \\     \\____/ I                                             I
   \\   ____/   I  ASCII-, ANSI-, HTML-art, programs, ...     I
    )  )       O=============================================O
\\__/    \\  Index page:
     \\\\_ ) http://studenten.freepage.de/meph/ascii/ascii.htm
\\___ __ /  English "fast-link" page:
  _//  \\\\_ http://studenten.freepage.de/meph/ascii/eng/eng.htm

  $@
  $@
  $@
  $@
  $@
  $@
  $@
  $@@
_______ @
\\     / @
 \\   /  @
  ) (   @
  \\_/   @
   _    @
  (_)   @
        @@
 _  _  @
(( ((  @
 )) )) @
       @
       @
       @
       @
       @@
   _   _    @
 _| |_| |_  @
(_   _   _) @
  | | | |   @
 _| |_| |_  @
(_   _   _) @
  |_| |_|   @
            @@
     _      @
   _| |____ @
  / | |___/ @
 (_(| |___  @
 ___| |_) ) @
/___| |__/  @
    |_|     @
            @@
 __   _  @
(__) / ) @
    / /  @
   / /   @
  / /    @
 / / __  @
(_/ (__) @
         @@
  ___      @
 / _ \\     @
( (_) )    @
 \\/  /     @
 / _/\\     @
( (_)_\\__  @
 \\_______) @
      \\_\\  @@
 __  @
(  ) @
 \\/  @
     @
     @
     @
     @
     @@
   ___ @
  / _( @
 / /   @
( (    @
( (    @
 \\ \\__ @
  \\__( @
       @@
___    @
)_ \\   @
  \\ \\  @
   ) ) @
   ) ) @
__/ /  @
)__/   @
       @@
       @
(\\/\\/) @
<(())> @
(/\\/\\) @
       @
       @
       @
       @@
     _      @
    | |     @
 ___| |___  @
(___   ___) @
    | |     @
    |_|     @
            @
            @@
     @
     @
     @
     @
     @
 __  @
(  ) @
/_/  @@
           @
           @
 ________  @
(________) @
           @
           @
           @
           @@
     @
     @
     @
     @
     @
 __  @
(__) @
     @@
      _  @
     / ) @
    / /  @
   / /   @
  / /    @
 / /     @
(_/      @
         @@
  ____   @
 / __ \\  @
( (  ) ) @
( (  ) ) @
( (  ) ) @
( (__) ) @
 \\____/  @
         @@
   ____ @
  /   / @
 / /) ) @
/_/( (  @
    ) ) @
   ( (  @
   /__\\ @
        @@
   ______   @
  (____  \\  @
       ) /  @
  __  / /   @
 /  \\/ / __ @
( () \\__/ / @
 \\__\\____(  @
            @@
_____   @
)__  \\  @
 __) /  @
(__ (   @
   \\ \\  @
___/  ) @
)____/  @
        @@
  _   _     @
 / / / \\    @
( (__) (___ @
 \\___   __( @
     ) (    @
     ) (    @
    /___\\   @
            @@
 ______  @
|  ___(  @
| |__    @
|___ \\   @
    \\ \\  @
_____) ) @
)_____/  @
         @@
   ______ @
  / ____( @
 / /      @
( (_____  @
(   ___ \\ @
 \\ (___) )@
  \\_____/ @
          @@
_________ @
)____   / @
  ___) /  @
  )__ (   @
     ) )  @
    ( (   @
    /__\\  @
          @@
  _____   @
 /  _  \\  @
(  (_)  ) @
 \\  _  /  @
 / / \\ \\  @
( (___) ) @
 \\_____/  @
          @@
  _____    @
 / __  \\   @
( (__)  \\  @
 \\_____  ) @
       ) ) @
  ____/ /  @
 )_____/   @
           @@
     @
 __  @
(__) @
     @
     @
 __  @
(__) @
     @@
     @
 __  @
(__) @
     @
     @
 __  @
 ) ) @
/_/  @@
   _  @
  / ) @
 / /  @
/ /   @
\\ \\   @
 \\ \\  @
  \\_) @
      @@
          @
 _______  @
(_______) @
 _______  @
(_______) @
          @
          @
          @@
 _    @
( \\   @
 \\ \\  @
  \\ \\ @
  / / @
 / /  @
(_/   @
      @@
 ______   @
(_____ \\  @
   ___) ) @
  (  __/  @
   )_)    @
   __     @
  (__)    @
          @@
  _______    @
 //    _\\\\   @
//  ___)|\\\\  @
(  / _  | )) @
\\\\( (_) |//  @
 \\\\\\___/\\/   @
  \\____      @
             @@
   ____    @
  (    )   @
  / /\\ \\   @
 ( (__) )  @
  )    (   @
 /  /\\  \\  @
/__(  )__\\ @
           @@
 ______   @
(_   _ \\  @
  ) (_) ) @
  \\   _/  @
  /  _ \\  @
 _) (_) ) @
(______/  @
          @@
   ____  @
  / ___) @
 / /     @
( (      @
( (      @
 \\ \\___  @
  \\____) @
         @@
 ______    @
(_  __ \\   @
  ) ) \\ \\  @
 ( (   ) ) @
  ) )  ) ) @
 / /__/ /  @
(______/   @
           @@
  _____  @
 / ___/  @
( (__    @
 ) __)   @
( (      @
 \\ \\___  @
  \\____\\ @
         @@
 _________  @
(_   _____) @
  ) (___    @
 (   ___)   @
  ) (       @
 (   )      @
  \\_/       @
            @@
    _____   @
   / ___ \\  @
  / /   \\_) @
 ( (  ____  @
 ( ( (__  ) @
  \\ \\__/ /  @
   \\____/   @
            @@
 __    __  @
(  \\  /  ) @
 \\ (__) /  @
  ) __ (   @
 ( (  ) )  @
  ) )( (   @
 /_/  \\_\\  @
           @@
  _____  @
 (_   _) @
   | |   @
   | |   @
   | |   @
  _| |__ @
 /_____( @
         @@
  ________  @
 (___  ___) @
     ) )    @
    ( (     @
 __  ) )    @
( (_/ /     @
 \\___/      @
            @@
  __   ___  @
 () ) / __) @
 ( (_/ /    @
 ()   (     @
 () /\\ \\    @
 ( (  \\ \\   @
 ()_)  \\_\\  @
            @@
 _____      @
(_   _)     @
  | |       @
  | |       @
  | |   __  @
__| |___) ) @
\\________/  @
            @@
   __    __    @
   \\ \\  / /    @
   () \\/ ()    @
   / _  _ \\    @
  / / \\/ \\ \\   @
 /_/      \\_\\  @
(/          \\) @
               @@
    __      _  @
   /  \\    / ) @
  / /\\ \\  / /  @
  ) ) ) ) ) )  @
 ( ( ( ( ( (   @
 / /  \\ \\/ /   @
(_/    \\__/    @
               @@
   ____    @
  / __ \\   @
 / /  \\ \\  @
( ()  () ) @
( ()  () ) @
 \\ \\__/ /  @
  \\____/   @
           @@
 _____   @
(  __ \\  @
 ) )_) ) @
(  ___/  @
 ) )     @
( (      @
/__\\     @
         @@
   ____     @
  / __ \\    @
 / /  \\ \\   @
( (    ) )  @
( (  /\\) )  @
 \\ \\_\\ \\/   @
  \\___\\ \\_  @
       \\__) @@
 ______    @
(   __ \\   @
 ) (__) )  @
(    __/   @
 ) \\ \\  _  @
( ( \\ \\_)) @
 )_) \\__/  @
           @@
  _____  @
 / ____\\ @
( (___   @
 \\___ \\  @
     ) ) @
 ___/ /  @
/____/   @
         @@
 ________  @
(___  ___) @
    ) )    @
   ( (     @
    ) )    @
   ( (     @
   /__\\    @
           @@
 __    __  @
 ) )  ( (  @
( (    ) ) @
 ) )  ( (  @
( (    ) ) @
 ) \\__/ (  @
 \\______/  @
           @@
 __    __  @
 ) )  ( (  @
( (    ) ) @
 \\ \\  / /  @
  \\ \\/ /   @
   \\  /    @
    \\/     @
           @@
 ___       ___  @
(  (       )  ) @
 \\  \\  _  /  /  @
  \\  \\/ \\/  /   @
   )   _   (    @
   \\  ( )  /    @
    \\_/ \\_/     @
                @@
 __     __  @
(_ \\   / _) @
  \\ \\_/ /   @
   \\   /    @
   / _ \\    @
 _/ / \\ \\_  @
(__/   \\__) @
            @@
__      __ @
) \\    / ( @
 \\ \\  / /  @
  \\ \\/ /   @
   \\  /    @
    )(     @
   /__\\    @
           @@
  ______   @
 (____  )  @
     / /   @
 ___/ /_   @
/__  ___)  @
  / /____  @
 (_______) @
           @@
 _______ @
(  ____( @
( (      @
( (      @
( (      @
( (____  @
(______( @
         @@
 _       @
( \\      @
 \\ \\     @
  \\ \\    @
   \\ \\   @
    \\ \\  @
     \\_) @
         @@
_______  @
)____  ) @
     ) ) @
     ) ) @
     ) ) @
_____) ) @
)______) @
         @@
       @
  /\\   @
 /  \\  @
/_/\\_\\ @
       @
       @
       @
       @@
              @
              @
              @
              @
              @
 ___________  @
|___________| @
              @@
_   @
\\\\  @
 \\) @
    @
    @
    @
    @
    @@
   ____    @
  (    )   @
  / /\\ \\   @
 ( (__) )  @
  )    (   @
 /  /\\  \\  @
/__(  )__\\ @
           @@
 ______   @
(_   _ \\  @
  ) (_) ) @
  \\   _/  @
  /  _ \\  @
 _) (_) ) @
(______/  @
          @@
   ____  @
  / ___) @
 / /     @
( (      @
( (      @
 \\ \\___  @
  \\____) @
         @@
 ______    @
(_  __ \\   @
  ) ) \\ \\  @
 ( (   ) ) @
  ) )  ) ) @
 / /__/ /  @
(______/   @
           @@
  _____  @
 / ___/  @
( (__    @
 ) __)   @
( (      @
 \\ \\___  @
  \\____\\ @
         @@
 _________  @
(_   _____) @
  ) (___    @
 (   ___)   @
  ) (       @
 (   )      @
  \\_/       @
            @@
    _____   @
   / ___ \\  @
  / /   \\_) @
 ( (  ____  @
 ( ( (__  ) @
  \\ \\__/ /  @
   \\____/   @
            @@
 __    __  @
(  \\  /  ) @
 \\ (__) /  @
  ) __ (   @
 ( (  ) )  @
  ) )( (   @
 /_/  \\_\\  @
           @@
  _____  @
 (_   _) @
   | |   @
   | |   @
   | |   @
  _| |__ @
 /_____( @
         @@
  ________  @
 (___  ___) @
     ) )    @
    ( (     @
 __  ) )    @
( (_/ /     @
 \\___/      @
            @@
  __   ___  @
 () ) / __) @
 ( (_/ /    @
 ()   (     @
 () /\\ \\    @
 ( (  \\ \\   @
 ()_)  \\_\\  @
            @@
 _____      @
(_   _)     @
  | |       @
  | |       @
  | |   __  @
__| |___) ) @
\\________/  @
            @@
   __    __    @
   \\ \\  / /    @
   () \\/ ()    @
   / _  _ \\    @
  / / \\/ \\ \\   @
 /_/      \\_\\  @
(/          \\) @
               @@
    __      _  @
   /  \\    / ) @
  / /\\ \\  / /  @
  ) ) ) ) ) )  @
 ( ( ( ( ( (   @
 / /  \\ \\/ /   @
(_/    \\__/    @
               @@
   ____    @
  / __ \\   @
 / /  \\ \\  @
( ()  () ) @
( ()  () ) @
 \\ \\__/ /  @
  \\____/   @
           @@
 _____   @
(  __ \\  @
 ) )_) ) @
(  ___/  @
 ) )     @
( (      @
/__\\     @
         @@
   ____     @
  / __ \\    @
 / /  \\ \\   @
( (    ) )  @
( (  /\\) )  @
 \\ \\_\\ \\/   @
  \\___\\ \\_  @
       \\__) @@
 ______    @
(   __ \\   @
 ) (__) )  @
(    __/   @
 ) \\ \\  _  @
( ( \\ \\_)) @
 )_) \\__/  @
           @@
  _____  @
 / ____\\ @
( (___   @
 \\___ \\  @
     ) ) @
 ___/ /  @
/____/   @
         @@
 ________  @
(___  ___) @
    ) )    @
   ( (     @
    ) )    @
   ( (     @
   /__\\    @
           @@
 __    __  @
 ) )  ( (  @
( (    ) ) @
 ) )  ( (  @
( (    ) ) @
 ) \\__/ (  @
 \\______/  @
           @@
 __    __  @
 ) )  ( (  @
( (    ) ) @
 \\ \\  / /  @
  \\ \\/ /   @
   \\  /    @
    \\/     @
           @@
 ___       ___  @
(  (       )  ) @
 \\  \\  _  /  /  @
  \\  \\/ \\/  /   @
   )   _   (    @
   \\  ( )  /    @
    \\_/ \\_/     @
                @@
 __     __  @
(_ \\   / _) @
  \\ \\_/ /   @
   \\   /    @
   / _ \\    @
 _/ / \\ \\_  @
(__/   \\__) @
            @@
__      __ @
) \\    / ( @
 \\ \\  / /  @
  \\ \\/ /   @
   \\  /    @
    )(     @
   /__\\    @
           @@
  ______   @
 (____  )  @
     / /   @
 ___/ /_   @
/__  ___)  @
  / /____  @
 (_______) @
           @@
  _____ @
 / ___( @
 ) )    @
/ /     @
\\ \\     @
 ) )___ @
(_____( @
        @@
 _  @
( ) @
( ) @
( ) @
( ) @
( ) @
(_) @
    @@
______   @
)____ \\  @
    ( (  @
     \\ \\ @
     / / @
____( (  @
)______) @
         @@
           @
  ___   _  @
 / _ \\_/ ) @
(_/ \\___/  @
           @
           @
           @
           @@
  O __ O   @
   /  \\    @
  / /\\ \\   @
 ( (__) )  @
  )    (   @
 /  /\\  \\  @
/__(  )__\\ @
           @@
 O ____ O  @
  / __ \\   @
 / /  \\ \\  @
( ()  () ) @
( ()  () ) @
 \\ \\__/ /  @
  \\____/   @
           @@
 O      O  @
 __    __  @
( (    ) ) @
 ) )  ( (  @
( (    ) ) @
 ) \\__/ (  @
 \\______/  @
           @@
  O __ O   @
   /  \\    @
  / /\\ \\   @
 ( (__) )  @
  )    (   @
 /  /\\  \\  @
/__(  )__\\ @
           @@
 O ____ O  @
  / __ \\   @
 / /  \\ \\  @
( ()  () ) @
( ()  () ) @
 \\ \\__/ /  @
  \\____/   @
           @@
 O      O  @
 __    __  @
( (    ) ) @
 ) )  ( (  @
( (    ) ) @
 ) \\__/ (  @
 \\______/  @
           @@
  _____   @
 / ___ \\  @
( (   ) ) @
 ) ) / /  @
( (  \\ \\  @
 ) ) /__) @
( (       @
 )_)      @@
167 Meph.
       _  _     @
 /\\/\\ |_ |_)|_| @
/    \\|_ |  | |.@
-==============-@
   (\\o---o/)    @
    \\  J  /     @
   _/\\_-_/\\_    @
                @@
178 :-)
    ______     @
   / ____ \\    @
  / /    \\ \\   @
 / / O  O \\ \\  @
( (   ()   ) ) @
 \\ \\ \\__/ / /  @
  \\ \\____/ /   @
   \\______/    @@
179 :-(
    ______     @
   / ____ \\    @
  / /    \\ \\   @
 / / O  O \\ \\  @
( (   ()   ) ) @
 \\ \\  __  / /  @
  \\ \\/__\\/ /   @
   \\______/    @@

180 BTS
  BTS     1999 @
       /\\      @
  ____/__\\____ @
  \\__/    \\__/ @
    /\\____/\\   @
   / __/\\__ \\  @
  /_/      \\_\\ @
               @@
`,Sd=`flf2a$ 10 10 12 -1 9

				  jazmine.flf

	      well, the  original requester might not have liked
	      the sig i diddled for her, but i decided to make a
			 font out of it. so there. :)

			       vampyr@acs.bu.edu

  @
  @
  @
  @
  @
  @
  @
::@
::@
::@@
   @
88 @
88 @
88 @
88 @
\`' @
88 @
...@
:::@
:::@@
    @
8 8 @
' ' @
    @
    @
    @
    @
::::@
::::@
::::@@
       @
       @
       @
.8..8. @
\`8\`'8' @
.8..8. @
\`8\`'8' @
:..:..:@
:::::::@
:::::::@@
      @
      @
  8   @
.8P8. @
\`Y8   @
  8Y. @
\`Yoo' @
:.8 .:@
::...:@
::::::@@
       @
db  .o @
88 .o' @
  .o'  @
 .o'   @
.o' oo @
o'  88 @
..::...@
:::::::@
:::::::@@
       @
       @
  8    @
.oPo.  @
Yo..   @
8o  .  @
\`Y8P'  @
:.8 .::@
::..:::@
:::::::@@
   @
 8 @
 ' @
   @
   @
   @
   @
:::@
:::@
:::@@
  .o @
 d'  @
8'   @
8    @
8    @
8.   @
 Y.  @
:.\`o @
:::..@
:::::@@
o.   @
 \`b  @
  \`8 @
   8 @
   8 @
  .8 @
 .P  @
o'.::@
..:::@
:::::@@
      @
      @
  8   @
o.8.o @
\`Y8P' @
.P8Y. @
" 8 " @
.:...:@
::::::@
::::::@@
      @
      @
  8   @
  8   @
oo8oo @
  8   @
  8   @
::..::@
::::::@
::::::@@
   @
   @
   @
   @
   @
   @
88 @
\`P @
:.:@
:::@@
      @
      @
      @
      @
ooooo @
      @
      @
::::::@
::::::@
::::::@@
   @
   @
   @
   @
   @
   @
88 @
..:@
:::@
:::@@
       @
    .o @
   .o' @
  .o'  @
 .o'   @
.o'    @
o'     @
..:::::@
:::::::@
:::::::@@
       @
.oPYo. @
8  .o8 @
8 .P'8 @
8.d' 8 @
8o'  8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
   @
.o @
 8 @
 8 @
 8 @
 8 @
 8 @
:..@
:::@
:::@@
       @
.oPYo. @
    \`8 @
   oP' @
.oP'   @
8'     @
8ooooo @
.......@
:::::::@
:::::::@@
       @
.oPYo. @
    \`8 @
  .oP' @
   \`b. @
    :8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
   .8  @
  d'8  @
 d' 8  @
Pooooo @
    8  @
    8  @
::::..:@
:::::::@
:::::::@@
       @
oooooo @
8      @
8pPYo. @
    \`8 @
    .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
.pPYo. @
8      @
8oPYo. @
8'  \`8 @
8.  .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
oooooo @
   .o' @
  .o'  @
 .o'   @
.o'    @
o'     @
..:::::@
:::::::@
:::::::@@
       @
 .PY.  @
 8  8  @
.oPYo. @
8'  \`8 @
8.  .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
.oPYo. @
8'  \`8 @
8.  .8 @
\`YooP8 @
    .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
   @
   @
   @
88 @
   @
   @
88 @
..:@
:::@
:::@@
   @
   @
   @
88 @
   @
   @
88 @
\`P @
:.:@
:::@@
      @
  .o' @
 .o'  @
.o'   @
\`b.   @
 \`b.  @
  \`b. @
:::...@
::::::@
::::::@@
      @
      @
      @
ooooo @
      @
ooooo @
      @
::::::@
::::::@
::::::@@
      @
\`o.   @
 \`o.  @
  \`o. @
  .P' @
 .P'  @
.P'   @
..::::@
::::::@
::::::@@
       @
.oPYo. @
\`\`  \`8 @
   .oP @
  dP   @
       @
  88   @
::...::@
:::::::@
:::::::@@
       @
  dYo. @
.P' .8 @
8 dP'8 @
8 8ooP @
8   .. @
\`YooP' @
:.....:@
:::::::@
:::::::@@
         @
     .oo @
    .P 8 @
   .P  8 @
  oPooo8 @
 .P    8 @
.P     8 @
..:::::..@
:::::::::@
:::::::::@@
        @
 .oPYo. @
 8   \`8 @
o8YooP' @
 8   \`b @
 8    8 @
 8oooP' @
:......:@
::::::::@
::::::::@@
       @
.oPYo. @
8    8 @
8      @
8      @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
ooo.   @
8  \`8. @
8   \`8 @
8    8 @
8   .P @
8ooo'  @
.....::@
:::::::@
:::::::@@
       @
.oPYo. @
8.     @
\`boo   @
.P     @
8      @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
 ooooo @
 8     @
o8oo   @
 8     @
 8     @
 8     @
:..::::@
:::::::@
:::::::@@
       @
.oPYo. @
8    8 @
8      @
8   oo @
8    8 @
\`YooP8 @
:....8 @
:::::8 @
:::::..@@
        @
 o    o @
 8    8 @
o8oooo8 @
 8    8 @
 8    8 @
 8    8 @
:..:::..@
::::::::@
::::::::@@
  @
o @
8 @
8 @
8 @
8 @
8 @
..@
::@
::@@
    @
  o @
  8 @
  8 @
  8 @
  8 @
oP' @
...:@
::::@
::::@@
       @
 o   o @
 8  .P @
o8ob'  @
 8  \`b @
 8   8 @
 8   8 @
:..::..@
:::::::@
:::::::@@
      @
o     @
8     @
8     @
8     @
8     @
8oooo @
......@
::::::@
::::::@@
        @
o     o @
8b   d8 @
8\`b d'8 @
8 \`o' 8 @
8     8 @
8     8 @
..::::..@
::::::::@
::::::::@@
       @
o    o @
8b   8 @
8\`b  8 @
8 \`b 8 @
8  \`b8 @
8   \`8 @
..:::..@
:::::::@
:::::::@@
       @
.oPYo. @
8    8 @
8    8 @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
        @
 .oPYo. @
 8    8 @
o8YooP' @
 8      @
 8      @
 8      @
:..:::::@
::::::::@
::::::::@@
        @
.oPYo.  @
8    8  @
8    8  @
8  d.8  @
8  \`b8. @
\`YooP'P @
:....:.:@
::::::::@
::::::::@@
        @
 .oPYo. @
 8   \`8 @
o8YooP' @
 8   \`b @
 8    8 @
 8    8 @
:..:::..@
::::::::@
::::::::@@
       @
.oPYo. @
8      @
\`Yooo. @
    \`8 @
     8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
      @
ooooo @
  8   @
  8   @
  8   @
  8   @
  8   @
::..::@
::::::@
::::::@@
       @
o    o @
8    8 @
8    8 @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
        @
o     o @
8     8 @
8     8 @
\`b   d' @
 \`b d'  @
  \`8'   @
:::..:::@
::::::::@
::::::::@@
         @
o      o @
8      8 @
8      8 @
8  db  8 @
\`b.PY.d' @
 \`8  8'  @
::..:..::@
:::::::::@
:::::::::@@
         @
 o    o  @
 \`b  d'  @
  \`bd'   @
  .PY.   @
 .P  Y.  @
.P    Y. @
..::::..:@
:::::::::@
:::::::::@@
      @
o   o @
\`b d' @
 \`b'  @
  8   @
  8   @
  8   @
::..::@
::::::@
::::::@@
       @
oooooo @
    d' @
   d'  @
  d'   @
 d'    @
dooooo @
.......@
:::::::@
:::::::@@
oooo @
8    @
8    @
8    @
8    @
8    @
8    @
8ooo @
.....@
:::::@@
        @
o.      @
\`o.     @
 \`o.    @
  \`o.   @
   \`o.  @
    \`o. @
:::::..:@
::::::::@
::::::::@@
oooo @
   8 @
   8 @
   8 @
   8 @
   8 @
   8 @
ooo8 @
.....@
:::::@@
  .o.   @
 .d'b.  @
.d' \`b. @
        @
        @
        @
        @
::::::::@
::::::::@
::::::::@@
     @
     @
     @
     @
     @
     @
     @
oooo @
.....@
:::::@@
   @
8. @
\`b @
   @
   @
   @
   @
:::@
:::@
:::@@
       @
       @
       @
.oPYo. @
.oooo8 @
8    8 @
\`YooP8 @
:.....:@
:::::::@
:::::::@@
       @
8      @
8      @
8oPYo. @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
.oPYo. @
8    ' @
8    . @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
     8 @
     8 @
.oPYo8 @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
.oPYo. @
8oooo8 @
8.     @
\`Yooo' @
:.....:@
:::::::@
:::::::@@
     @
 d'b @
 8   @
o8P  @
 8   @
 8   @
 8   @
:..::@
:::::@
:::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
\`YooP8 @
:....8 @
::ooP'.@
::...::@@
       @
8      @
8      @
8oPYo. @
8    8 @
8    8 @
8    8 @
..:::..@
:::::::@
:::::::@@
   @
 o @
   @
o8 @
 8 @
 8 @
 8 @
:..@
:::@
:::@@
   @
 o @
   @
o8 @
 8 @
 8 @
 8 @
:8 @
oP @
..:@@
       @
8      @
8      @
8  .o  @
8oP'   @
8 \`b.  @
8  \`o. @
..::...@
:::::::@
:::::::@@
  @
8 @
8 @
8 @
8 @
8 @
8 @
..@
::@
::@@
        @
        @
        @
ooYoYo. @
8' 8  8 @
8  8  8 @
8  8  8 @
..:..:..@
::::::::@
::::::::@@
      @
      @
      @
odYo. @
8' \`8 @
8   8 @
8   8 @
..::..@
::::::@
::::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
8YooP' @
8 ....:@
8 :::::@
..:::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
\`YooP8 @
:....8 @
:::::8 @
:::::..@@
      @
      @
      @
oPYo. @
8  \`' @
8     @
8     @
..::::@
::::::@
::::::@@
       @
       @
       @
.oPYo. @
Yb..   @
  'Yb. @
\`YooP' @
:.....:@
:::::::@
:::::::@@
     @
  o  @
  8  @
 o8P @
  8  @
  8  @
  8  @
::..:@
:::::@
:::::@@
       @
       @
       @
o    o @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
o    o @
Y.  .P @
\`b..d' @
 \`YP'  @
::...::@
:::::::@
:::::::@@
          @
          @
          @
o   o   o @
Y. .P. .P @
\`b.d'b.d' @
 \`Y' \`Y'  @
::..::..::@
::::::::::@
::::::::::@@
       @
       @
       @
\`o  o' @
 \`bd'  @
 d'\`b  @
o'  \`o @
..:::..@
:::::::@
:::::::@@
       @
       @
       @
o    o @
8    8 @
8    8 @
\`YooP8 @
:....8 @
::ooP'.@
::...::@@
       @
       @
       @
.oooo. @
  .dP  @
 oP'   @
\`Yooo' @
:.....:@
:::::::@
:::::::@@
.oP' @
8    @
8.   @
\`bo  @
.P   @
8    @
8    @
\`Yo. @
:....@
:::::@@
8 @
8 @
8 @
  @
8 @
8 @
8 @
..@
::@
::@@
\`Yo. @
   8 @
  .8 @
 od' @
  Y. @
   8 @
   8 @
.oP' @
....:@
:::::@@
        @
.P\`b.P' @
        @
        @
        @
        @
        @
::::::::@
::::::::@
::::::::@@
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
`,Nd=`flf2a$ 7 6 100 15 31 1
Jerusalem by Gedaliah Friedenberg - based on Standard by G. Chappell & Ian Chai
Questions and comments regarding jerusalem.flf to gfrieden@nyx.cs.du.edu
Modified for figlet 2.1 by Glenn Chappell 16 Dec 1993
Date: 13 Feb 1994

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
7    - height of a character
6    - height of a character, not including descenders
100  -  max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
31   - number of comment lines
1    - print right-to-left (figlet 2.1 or later only)

Hebrew keyboard maps:

All capital letters print the english character for that key.  All numbers 
and symbols are the same in in Hebrew/English except for those shown here.
The * symbol prints as a Jewish star (Star of David).
While in figlet, type ~ on a line by itself to see this list:

aleph   = t | zayin    = z | lamed   = k | ayin    = g | shin/sin  = a
bet/vet = c | chet     = j | mem     = n | pey/fey = p | taf/saf   = ,
gimmel  = d | tet      = y | final " = o | final " = ; | ,(comma)  = '
daled   = s | yud      = h | nun     = b | tzaadi  = m | .(period) = /
hay     = v | kaf/chaf = f | final " = i | final " = . | ;         = \`
vav     = u | final "  = l | samekh  = x | kuf     = e | /         = q
The asterisk (*) is a Star of David      | resh    = r | '(apost.) = w

$@
$@
$@
$@
$@
$@
$@@
   @
 _ @
| |@
| |@
|_|@
(_)@
   @@
     @
 _ _ @
( | )@
 V V @
  $  @
  $  @
     @@
          @
   _  _   @
 _| || |_ @
|_  ..  _|@
|_      _|@
  |_||_|  @
          @@
     @
  _  @
 | | @
/ __)@
\\__ \\@
(   /@
 |_| @@
      @
 _  __@
(_)/ /@
  / / @
 / /_ @
/_/(_)@
      @@
        @
  ___   @
 ( _ )  @
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
        @@
   @
   @
   @
   @
 _ @
( )@
|/ @@
    @
  __@
 / /@
| | @
| | @
| | @
 \\_\\@@
    @
__  @
\\ \\ @
 | |@
 | |@
 | |@
/_/ @@
      @
      @
__/\\__@
\\    /@
/_  _\\@
  \\/  @
      @@
       @
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
       @@
          @
   ______ @
  |  __  |@
  | |  | |@
 _| |  | |@
|___|  |_|@
          @@
       @
       @
       @
 _____ @
|_____|@
   $   @
       @@
        @
 __   _ @
|. | | |@
 | | // @
 | |//  @
 | |    @
 |_|    @@
   @
   @
   @
   @
 _ @
(_)@
   @@
       @
  ___  @
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
   @
 _ @
/ |@
| |@
| |@
|_|@
   @@
       @
 ____  @
|___ \\ @
  __) |@
 / __/ @
|_____|@
       @@
       @
 _____ @
|___ / @
  |_ \\ @
 ___) |@
|____/ @
       @@
        @
 _  _   @
| || |  @
| || |_ @
|__   _|@
   |_|  @
        @@
       @
 ____  @
| ___| @
|___ \\ @
 ___) |@
|____/ @
       @@
       @
  __   @
 / /_  @
| '_ \\ @
| (_) |@
 \\___/ @
       @@
       @
 _____ @
|___  |@
   / / @
  / /  @
 /_/   @
       @@
       @
  ___  @
 ( _ ) @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
       @
  ___  @
 / _ \\ @
| (_) |@
 \\__, |@
   /_/ @
       @@
   @
   @
 _ @
(_)@
 _ @
(_)@
   @@
        @
 ______ @
|  __  |@
| |_ | |@
|___|| |@
     | |@
     |_|@@
    @
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
       @
 _____ @
|_____|@
|_____|@
   $   @
       @@
    @
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
     @
 ___ @
|__ \\@
  / /@
 |_| @
 (_) @
     @@
         @
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @@
         @
    _    @
   / \\   @
  / _ \\  @
 / ___ \\ @
/_/   \\_\\@
         @@
       @
 ____  @
| __ ) @
|  _ \\ @
| |_) |@
|____/ @
       @@
       @
  ____ @
 / ___|@
| |    @
| |___ @
 \\____|@
       @@
       @
 ____  @
|  _ \\ @
| | | |@
| |_| |@
|____/ @
       @@
       @
 _____ @
| ____|@
|  _|  @
| |___ @
|_____|@
       @@
       @
 _____ @
|  ___|@
| |_   @
|  _|  @
|_|    @
       @@
       @
  ____ @
 / ___|@
| |  _ @
| |_| |@
 \\____|@
       @@
       @
 _   _ @
| | | |@
| |_| |@
|  _  |@
|_| |_|@
       @@
     @
 ___ @
|_ _|@
 | | @
 | | @
|___|@
     @@
       @
     _ @
    | |@
 _  | |@
| |_| |@
 \\___/ @
       @@
      @
 _  __@
| |/ /@
| ' / @
| . \\ @
|_|\\_\\@
      @@
       @
 _     @
| |    @
| |    @
| |___ @
|_____|@
       @@
        @
 __  __ @
|  \\/  |@
| |\\/| |@
| |  | |@
|_|  |_|@
        @@
       @
 _   _ @
| \\ | |@
|  \\| |@
| |\\  |@
|_| \\_|@
       @@
       @
  ___  @
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
       @
 ____  @
|  _ \\ @
| |_) |@
|  __/ @
|_|    @
       @@
       @
  ___  @
 / _ \\ @
| | | |@
| |_| |@
 \\__\\_\\@
       @@
       @
 ____  @
|  _ \\ @
| |_) |@
|  _ < @
|_| \\_\\@
       @@
       @
 ____  @
/ ___| @
\\___ \\ @
 ___) |@
|____/ @
       @@
       @
 _____ @
|_   _|@
  | |  @
  | |  @
  |_|  @
       @@
       @
 _   _ @
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @@
         @
__     __@
\\ \\   / /@
 \\ \\ / / @
  \\ V /  @
   \\_/   @
         @@
            @
__        __@
\\ \\      / /@
 \\ \\ /\\ / / @
  \\ V  V /  @
   \\_/\\_/   @
            @@
      @
__  __@
\\ \\/ /@
 \\  / @
 /  \\ @
/_/\\_\\@
      @@
       @
__   __@
\\ \\ / /@
 \\ V / @
  | |  @
  |_|  @
       @@
      @
 _____@
|__  /@
  / / @
 / /_ @
/____|@
      @@
    @
 __ @
| _|@
| | @
| | @
| | @
|__|@@
      @
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
    @
 __ @
|_ |@
 | |@
 | |@
 | |@
|__|@@
    @
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
       @
 _____ @
|_____|@@
   @
   @
 _ @
(_)@
 _ @
( )@
|/ @@
           @
 _   _   _ @
| | | | | |@
| | | | | |@
| |/ /_/ / @
|_______/  @
           @@
      @
  ___ @
 |_  |@
   | |@
 __| |@
|____|@
      @@
          @
  ______  @
 |____  | @
      | | @
 _____| |_@
/________/@
          @@
         @
   ____  @
  |__  | @
     | | @
 ____| | @
/____/\\_\\@
         @@
        @
 ______ @
|____  |@
  _  | |@
 | | |_|@
 | |    @
 |_|    @@
        @
 _____  @
|____ \\ @
     | |@
 ____| |@
|_____/ @
        @@
        @
 __   _ @
 \\ \\ | |@
  \\ \\| |@
 __\\ \` |@
|______|@
        @@
     @
 ___ @
|_  |@
  |_|@
   $ @
   $ @
     @@
     @
 ___ @
|_  |@
  | |@
  | |@
  | |@
  |_|@@
         @
 _______ @
|.  __  |@
 | |  | |@
 | |  | |@
 |_|  |_|@
         @@
 _      @
| |____ @
|____  |@
    / / @
   / /  @
  /_/   @
        @@
         @
 _______ @
|____  .|@
     | | @
     | | @
     | | @
     |_| @@
          @
  __   __.@
  \\ \\ / / @
   \\ V /  @
 ___\\  \\  @
|______|  @
          @@
         @
 _______ @
|.  __  |@
 | |  | |@
 | | _| |@
 |_||___|@
         @@
          @
 ________ @
|.  ___  |@
 | |   | |@
 | |___| |@
 |_______|@
          @@
         @
 _______ @
|  ___  |@
 \\_\\  | |@
 _____| |@
|_______|@
         @@
      @
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
        @
 ______ @
|____  |@
     | |@
     | |@
     |_|@
        @@
         @
 _______ @
|____   |@
     | | @
     | | @
     |_| @
         @@
       @
__   __@
\\ \\ / /@
|  V / @
| |\\ \\ @
|_| \\_\\@
       @@
     @
 ___ @
|_  |@
  | |@
  | |@
  |_|@
     @@
         @
 _______ @
|_____  |@
  _   | |@
 | |  | |@
 |_|  |_|@
         @@
   @
 _ @
( )@
|/ @
 $ @
 $ @
   @@
         @
 _______ @
|.  __  |@
 | |  | |@
 | |__/ |@
 |_____/ @
         @@
          @
 __   ___ @
|. | /_  |@
 | |   | |@
 | |___| |@
 |_______|@
          @@
         @
________ @
\\__   __\\@
   | |   @
   | |   @
   |_|   @
         @@
     @
   __@
  / /@
 | | @
< <  @
 | | @
  \\_\\@@
   @
 _ @
| |@
| |@
| |@
| |@
|_|@@
     @
__   @
\\ \\  @
 | | @
  > >@
 | | @
/_/  @@
aleph   = t | zayin    = z | lamed   = k | ayin    = g | shin/sin  = a@
bet/vet = c | chet     = j | mem     = n | pey/fey = p | taf/saf   = ,@
gimmel  = d | tet      = y | final " = o | final " = ; | ,(comma)  = '@
daled   = s | yud      = h | nun     = b | tzaadi  = m | .(period) = /@
hay     = v | kaf/chaf = f | final " = i | final " = . | ;         = \`@
vav     = u | final "  = l | samekh  = x | kuf     = e | /         = q@
The asterisk (*) is a Star of David      | resh    = r | '(apost.) = w@@
       @
 _   _ @
(_)_(_)@
  /_\\  @
 / _ \\ @
/_/ \\_\\@
       @@
       @
 _   _ @
(_)_(_)@
 / _ \\ @
| |_| |@
 \\___/ @
       @@
       @
 _   _ @
(_) (_)@
| | | |@
| |_| |@
 \\___/ @
       @@
       @
 _   _ @
(_)_(_)@
 / _\` |@
| (_| |@
 \\__,_|@
       @@
       @
 _   _ @
(_)_(_)@
 / _ \\ @
| (_) |@
 \\___/ @
       @@
       @
 _   _ @
(_) (_)@
| | | |@
| |_| |@
 \\__,_|@
       @@
      @
  ___ @
 / _ \\@
| |/ /@
| |\\ \\@
| ||_/@
|_|   @@
`,yd=`flf2a$ 9 7 20 1 13
keyboard.flf composed by Vinney Thai <ssfiit@eris.cc.umb.edu>
date: Nov 21, 1994

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
9    - height of a character
7    - height of a character, not including descenders
20   - max line length (excluding comment lines) + a fudge factor
1    - default smushmode for this font (like "-m 0" on command line)
14   - number of comment lines

$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |!  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |"  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |#  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |$  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |%  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |&  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |'  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |(  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |)  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |*  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |+  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |,  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |-  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |.  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |/  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |0  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |1  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |2  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |3  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |4  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |5  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |6  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |7  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |8  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |9  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |:  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |;  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |<  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |=  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |>  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |?  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |@  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |A  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |B  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |C  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |D  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |E  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |F  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |G  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |H  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |I  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |J  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |K  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |L  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |M  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |N  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |O  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |P  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |Q  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |R  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |S  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |T  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |U  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |V  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |W  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |X  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |Y  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |Z  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |[  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |\\  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |]  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |^  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |_  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |\`  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |a  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |b  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |c  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |d  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |e  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |f  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |g  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |h  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |i  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |j  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |k  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |l  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |m  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |n  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |o  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |p  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |q  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |r  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |s  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |t  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |u  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |v  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |w  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |x  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |y  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |z  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |{  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| ||  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |}  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |~  | |@
| +---+ |@
|/_____\\|@
         @@
         @
 _______ @
|\\     /|@
| +---+ |@
| |   | |@
| |ESC| |@
| +---+ |@
|/_____\\|@
         @@
           @
 _________ @
|\\       /|@
| +-----+ |@
| |     | |@
| |ALT  | |@
| +-----+ |@
|/_______\\|@
           @@
             @
 ___________ @
|\\         /|@
| +-------+ |@
| |       | |@
| |CTRL   | |@
| +-------+ |@
|/_________\\|@
             @@
              @
 ____________ @
|\\          /|@
| +--------+ |@
| |        | |@
| |SHIFT   | |@
| +--------+ |@
|/__________\\|@
              @@
              @
 ____________ @
|\\          /|@
| +--------+ |@
| |        | |@
| |ENTER   | |@
| +--------+ |@
|/__________\\|@
              @@
            @
 __________ @
|\\        /|@
| +------+ |@
| |      | |@
| |GOLD  | |@
| +------+ |@
|/________\\|@
            @@
             @
 ___________ @
|\\         /|@
| +-------+ |@
| |       | |@
| |TAB    | |@
| +-------+ |@
|/_________\\|@
             @@
`,xd=`flf2a$ 9 8 18 0 24 0 64 0
Author : LG Beard
Date   : 2005/5/8 6:45:39
Version: 1.0
-------------------------------------------------
   _               _        _         _          _       _          ~  ~
=_/\\\\___ _____==__/\\\\___==_/\\\\___===_/\\\\_======_/\\\\_===_/\\\\___========~ ~====
(_      v    ))(_  ____))(_   _  ))(_  _))    (____)) (_      ))  ___~____
 /  :   <\\   \\\\ /  ._))   /  |))//  /  \\\\      /  \\\\   /  :   \\\\ ((______))_
/:. |   //   ///:. |____ /:.  ~ \\\\ /:.  \\\\__  /:.  \\\\ /:. |   //  \\:.    /__)
\\___|  //\\  // \\  _____))\\___|  // \\__  ____))\\__  // \\___|  //    \\_  _/
=====\\//==\\//===\\//===========\\//=====\\//========\\//=======\\//=======~~======
      ~    ~     ~             ~       ~          ~         ~
Font Built from a sig dated 17 Feb 1995
-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
$  $#
$  $#
$  $#
$  $#
$  $#
$  $#
$  $#
$  $#
$  $##
   _    #
 _/\\\\_  #
(_  _)) #
 /  \\\\  #
/ \\ :\\\\ #
\\__/\\// #
   \\//  #
        #
        ##
"#
 #
 #
 #
 #
 #
 #
 #
 ##
##
 #
 #
 #
 #
 #
 #
 #
 ##
   _     #
  /\\\\_   #
 /  _ \\\\ #
 \\:.\\\\// #
/\\\\  \\\\  #
\\_  _//  #
  \\//    #
         #
         ##
%#
 #
 #
 #
 #
 #
 #
 #
 ##
&#
 #
 #
 #
 #
 #
 #
 #
 ##
 ____   #
(:. _)) #
  \\//   #
        #
        #
        #
        #
        #
        ##
  _     #
 //\\__  #
//   _\\ #
\\\\:\`\\   #
//:./_  #
\\\\  __/ #
 \\\\/    #
        #
        ##
    _   #
 __/\\\\  #
/_   \\\\ #
  /':// #
 _\\.:\\\\ #
\\__  // #
   \\//  #
        #
        ##
*#
 #
 #
 #
 #
 #
 #
 #
 ##
+#
 #
 #
 #
 #
 #
 #
 #
 ##
       #
       #
       #
       #
  ___  #
((:. ) #
  \\\\/  #
       #
       ##
-#
 #
 #
 #
 #
 #
 #
 #
 ##
        #
        #
        #
        #
   _    #
 _/\\\\_  #
(:.__)) #
        #
        ##
      _  #
     //\\ #
    // / #
   // /  #
 _//./   #
((_ _)   #
  \\\\/    #
         #
         ##
    _      #
 __/\\\\__   #
(_    __)) #
 /  _  \\\\  #
/:.(_)) \\\\ #
\\  _____// #
 \\//       #
           #
           ##
   _    #
 _/\\\\_  #
(____)) #
 /  \\\\  #
/:.  \\\\ #
\\__  // #
   \\//  #
        #
        ##
     _      #
  __//\\     #
 //    \\    #
 \\\\_/  /    #
   /.:/_/\\\\ #
   \\  ___// #
    \\//     #
            #
            ##
    _   #
 __/\\\\  #
/    \\\\ #
\\_/':// #
/ \\.:\\\\ #
\\__  // #
   \\//  #
        #
        ##
   _     #
  /\\\\ _  #
 / ///\\\\ #
 \\ \\/ // #
 _\\:.//  #
(_   _)  #
  \\//    #
         #
         ##
   _      #
  /\\\\__   #
 /   _ \\\\ #
 \\':\\\\\\// #
/ \\  \\\\   #
\\__  //   #
   \\//    #
          #
          ##
   _     #
 _/\\\\_   #
(____))  #
 /  \\_   #
/:. / \\\\ #
\\  ___// #
 \\//     #
         #
         ##
     _   #
 ___/\\\\  #
/     \\\\ #
\\_/ .:// #
  \\  //  #
 (_  _)) #
   \\//   #
         #
         ##
  _     #
 /\\\\__  #
/:.  \\\\ #
\\  \\_// #
/_\\  \\\\ #
\\__.:// #
   \\//  #
        #
        ##
     _   #
 ___/\\\\  #
/     \\\\ #
\\__/ :// #
  \\  //  #
 (_  _)) #
   \\//   #
         #
         ##
 ____   #
(:. _)) #
  \\//   #
        #
   _    #
 _/\\\\_  #
(:.__)) #
        #
        ##
 ____   #
(:. _)) #
  \\//   #
        #
  ___   #
((:. )  #
  \\\\/   #
        #
        ##
        #
  _     #
 //\\__  #
//.  _\\ #
\\\\: __/ #
 \\\\/    #
        #
        #
        ##
=#
 #
 #
 #
 #
 #
 #
 #
 ##
        #
    _   #
 __/\\\\  #
/_  :\\\\ #
\\__ '// #
   \\//  #
        #
        #
        ##
     _   #
 ___/\\\\  #
/     \\\\ #
\\_/\\.:// #
  _/ //  #
 (_  _)) #
   \\//   #
         #
         ##
@#
 #
 #
 #
 #
 #
 #
 #
 ##
    _     #
 __/\\\\__  #
(_  ____) #
 /  _ \\\\  #
/:./_\\ \\\\ #
\\  _   // #
 \\// \\//  #
          #
          ##
    _       #
 __/\\\\___   #
(_     __)) #
 / ._))//   #
/: ._))\\\\   #
\\  ____//   #
 \\//        #
            #
            ##
    _      #
 __/\\\\___  #
(_  ____)) #
 /  ||     #
/:. ||___  #
\\  _____)) #
 \\//       #
           #
           ##
    _      #
 __/\\\\___  #
(_  ____)) #
 /   _ \\\\  #
/:. |_\\ \\\\ #
\\  _____// #
 \\//       #
           #
           ##
    _      #
 __/\\\\___  #
(_  ____)) #
 /  ._))   #
/:. ||___  #
\\  _____)) #
 \\//       #
           #
           ##
    _      #
 __/\\\\___  #
(_  ____)) #
 / ||__    #
/:. ._))   #
\\  _))     #
 \\//       #
           #
           ##
    _     #
 __/\\\\__  #
(_  ___)) #
 / || _   #
/:. \\/ \\\\ #
\\  ____// #
 \\//      #
          #
          ##
   _        #
 _/\\\\___    #
(_ __ __))  #
 /  |_| \\\\  #
/:.  _   \\\\ #
\\___| |  // #
       \\//  #
            #
            ##
   _    #
 _/\\\\_  #
(____)) #
 /  \\\\  #
/:.  \\\\ #
\\__  // #
   \\//  #
        #
        ##
    _     #
 __/\\\\__  #
(_    _)) #
  \\  \\\\   #
/\\/ .:\\\\  #
\\__  _//  #
   \\//    #
          #
          ##
           #
 _/\\\\___   #
(_    __)) #
 /  : \\\\   #
/:. | //   #
\\___| \\\\   #
     \\//   #
           #
           ##
   _        #
 _/\\\\_      #
(_  _))     #
 /  \\\\      #
/:.  \\\\__   #
\\__  ____)) #
   \\//      #
            #
            ##
   _            #
 _/\\\\___ _____  #
(_      v    )) #
 /  :   <\\   \\\\ #
/:. |   //   // #
\\___|  //\\  //  #
     \\//  \\//   #
                #
                ##
   _       #
 _/\\\\___   #
(_      )) #
 /  :   \\\\ #
/:. |   // #
\\___|  //  #
     \\//   #
           #
           ##
    _      #
 __/\\\\___  #
(_     _)) #
 /  _  \\\\  #
/:.(_)) \\\\ #
\\  _____// #
 \\//       #
           #
           ##
    _       #
  _/\\\\___   #
 (_   _ _)) #
  /  |))\\\\  #
 /:. ___//  #
 \\_ \\\\      #
   \\//      #
            #
            ##
    _        #
 __/\\\\___    #
(_     __))  #
 /  _  \\\\    #
/:.(_)) \\\\_  #
\\  _______// #
 \\//         #
             #
             ##
   _       #
 _/\\\\___   #
(_   _  )) #
 /  |))//  #
/:.    \\\\  #
\\___|  //  #
     \\//   #
           #
           ##
    _     #
   /\\\\__  #
  /    \\\\ #
 _\\  \\_// #
// \\:.\\   #
\\\\__  /   #
   \\\\/    #
          #
          ##
    _     #
 __/\\\\__  #
(__  __)) #
  /  \\\\   #
 /:.  \\\\  #
 \\__  //  #
    \\//   #
          #
          ##
      _    #
 ___ /\\\\   #
/  //\\ \\\\  #
\\:.\\\\_\\ \\\\ #
 \\  :.  // #
(_   ___)) #
  \\//      #
           #
           ##
    _   #
 _ /\\\\  #
/ \\\\ \\\\ #
\\:'/ // #
 \\  //  #
(_  _)) #
  \\//   #
        #
        ##
      _    _    #
 ___ /\\\\  /\\\\   #
/   |  \\\\/  \\\\  #
\\:' |   \\\\   \\\\ #
 \\  :   </   // #
(_   ___^____)) #
  \\//           #
                #
                ##
    _  _    #
  _/\\\\/\\\\_  #
 (_  / __)) #
   \\/ \\\\    #
 __/./.\\\\_  #
(_  _)  _)) #
  \\// \\//   #
            #
            ##
       _  #
  _   /\\\\ #
 /\\\\ / // #
 \\ \\/ //  #
 _\\:.//   #
(_  _))   #
  \\//     #
          #
          ##
    _     #
 __//\\    #
//    \\   #
\\\\_/  /_  #
  /.:/ \\\\ #
  \\  __// #
   \\//    #
          #
          ##
  _     #
 //\\__  #
//   _\\ #
||:\`|   #
||:.|_  #
\\\\  __/ #
 \\\\/    #
        #
        ##
 _       #
/\\\\      #
\\ \\\\     #
 \\ \\\\    #
  \\:\\\\_  #
  (_ _)) #
    \\//  #
         #
         ##
    _   #
 __/\\\\  #
/_   \\\\ #
  |':|| #
 _|.:|| #
\\__  // #
   \\//  #
        #
        ##
^#
 #
 #
 #
 #
 #
 #
 #
 ##
_#
 #
 #
 #
 #
 #
 #
 #
 ##
  ___  #
((:. ) #
  \\\\/  #
       #
       #
       #
       #
       #
       ##
    _     #
 __/\\\\__  #
(_  ____) #
 /  _ \\\\  #
/:./_\\ \\\\ #
\\  _   // #
 \\// \\//  #
          #
          ##
    _       #
 __/\\\\___   #
(_     __)) #
 / ._))//   #
/: ._))\\\\   #
\\  ____//   #
 \\//        #
            #
            ##
    _      #
 __/\\\\___  #
(_  ____)) #
 /  ||     #
/:. ||___  #
\\  _____)) #
 \\//       #
           #
           ##
    _      #
 __/\\\\___  #
(_  ____)) #
 /   _ \\\\  #
/:. |_\\ \\\\ #
\\  _____// #
 \\//       #
           #
           ##
    _      #
 __/\\\\___  #
(_  ____)) #
 /  ._))   #
/:. ||___  #
\\  _____)) #
 \\//       #
           #
           ##
    _      #
 __/\\\\___  #
(_  ____)) #
 / ||__    #
/:. ._))   #
\\  _))     #
 \\//       #
           #
           ##
    _     #
 __/\\\\__  #
(_  ___)) #
 / || _   #
/:. \\/ \\\\ #
\\  ____// #
 \\//      #
          #
          ##
   _        #
 _/\\\\___    #
(_ __ __))  #
 /  |_| \\\\  #
/:.  _   \\\\ #
\\___| |  // #
       \\//  #
            #
            ##
   _    #
 _/\\\\_  #
(____)) #
 /  \\\\  #
/:.  \\\\ #
\\__  // #
   \\//  #
        #
        ##
    _     #
 __/\\\\__  #
(_    _)) #
  \\  \\\\   #
/\\/ .:\\\\  #
\\__  _//  #
   \\//    #
          #
          ##
           #
 _/\\\\___   #
(_    __)) #
 /  : \\\\   #
/:. | //   #
\\___| \\\\   #
     \\//   #
           #
           ##
   _        #
 _/\\\\_      #
(_  _))     #
 /  \\\\      #
/:.  \\\\__   #
\\__  ____)) #
   \\//      #
            #
            ##
   _            #
 _/\\\\___ _____  #
(_      v    )) #
 /  :   <\\   \\\\ #
/:. |   //   // #
\\___|  //\\  //  #
     \\//  \\//   #
                #
                ##
   _       #
 _/\\\\___   #
(_      )) #
 /  :   \\\\ #
/:. |   // #
\\___|  //  #
     \\//   #
           #
           ##
    _      #
 __/\\\\___  #
(_     _)) #
 /  _  \\\\  #
/:.(_)) \\\\ #
\\  _____// #
 \\//       #
           #
           ##
    _       #
  _/\\\\___   #
 (_   _ _)) #
  /  |))\\\\  #
 /:. ___//  #
 \\_ \\\\      #
   \\//      #
            #
            ##
    _        #
 __/\\\\___    #
(_     __))  #
 /  _  \\\\    #
/:.(_)) \\\\_  #
\\  _______// #
 \\//         #
             #
             ##
   _       #
 _/\\\\___   #
(_   _  )) #
 /  |))//  #
/:.    \\\\  #
\\___|  //  #
     \\//   #
           #
           ##
    _     #
   /\\\\__  #
  /    \\\\ #
 _\\  \\_// #
// \\:.\\   #
\\\\__  /   #
   \\\\/    #
          #
          ##
    _     #
 __/\\\\__  #
(__  __)) #
  /  \\\\   #
 /:.  \\\\  #
 \\__  //  #
    \\//   #
          #
          ##
      _    #
 ___ /\\\\   #
/  //\\ \\\\  #
\\:.\\\\_\\ \\\\ #
 \\  :.  // #
(_   ___)) #
  \\//      #
           #
           ##
    _   #
 _ /\\\\  #
/ \\\\ \\\\ #
\\:'/ // #
 \\  //  #
(_  _)) #
  \\//   #
        #
        ##
      _    _    #
 ___ /\\\\  /\\\\   #
/   |  \\\\/  \\\\  #
\\:' |   \\\\   \\\\ #
 \\  :   </   // #
(_   ___^____)) #
  \\//           #
                #
                ##
    _  _    #
  _/\\\\/\\\\_  #
 (_  / __)) #
   \\/ \\\\    #
 __/./.\\\\_  #
(_  _)  _)) #
  \\// \\//   #
            #
            ##
       _  #
  _   /\\\\ #
 /\\\\ / // #
 \\ \\/ //  #
 _\\:.//   #
(_  _))   #
  \\//     #
          #
          ##
    _     #
 __//\\    #
//    \\   #
\\\\_/  /_  #
  /.:/ \\\\ #
  \\  __// #
   \\//    #
          #
          ##
  _     #
 //\\__  #
//   _\\ #
\\\\:\`\\   #
//:./_  #
\\\\  __/ #
 \\\\/    #
        #
        ##
   _    #
 _/\\\\_  #
(_  _)) #
  / \\\\  #
 /:. \\\\ #
 \\  _// #
  \\//   #
        #
        ##
    _   #
 __/\\\\  #
/_   \\\\ #
  /':// #
 _\\.:\\\\ #
\\__  // #
   \\//  #
        #
        ##
~#
 #
 #
 #
 #
 #
 #
 #
 ##
    _     #
 __/\\\\__  #
(_  ____) #
 /  _ \\\\  #
/:./_\\ \\\\ #
\\  _   // #
 \\// \\//  #
          #
          ##
    _      #
 __/\\\\___  #
(_     _)) #
 /  _  \\\\  #
/:.(_)) \\\\ #
\\  _____// #
 \\//       #
           #
           ##
      _    #
 ___ /\\\\   #
/  //\\ \\\\  #
\\:.\\\\_\\ \\\\ #
 \\  :.  // #
(_   ___)) #
  \\//      #
           #
           ##
    _     #
 __/\\\\__  #
(_  ____) #
 /  _ \\\\  #
/:./_\\ \\\\ #
\\  _   // #
 \\// \\//  #
          #
          ##
    _      #
 __/\\\\___  #
(_     _)) #
 /  _  \\\\  #
/:.(_)) \\\\ #
\\  _____// #
 \\//       #
           #
           ##
      _    #
 ___ /\\\\   #
/  //\\ \\\\  #
\\:.\\\\_\\ \\\\ #
 \\  :.  // #
(_   ___)) #
  \\//      #
           #
           ##
�#
 #
 #
 #
 #
 #
 #
 #
 ##`,Pd=`flf2a$ 6 5 20 15 18 1
Mirror by David Walton <walton@cs.ucdavis.edu>  24 Aug 1994
This is a mirror image version of...
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
6    - height of a character
5    - height of a character, not including descenders
20   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
18   - number of comment lines

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
(__ \\@
/ __/@
\\   )@
 |_| @@
__  _ @
\\ \\(_)@
 \\ \\  @
 _\\ \\ @
(_)\\_\\@
      @@
   ___  @
  ( _ ) @
/\\/ _ \\ @
>  <_) |@
\\/\\___/ @
        @@
 _ @
( )@
 \\|@
 $ @
 $ @
   @@
__  @
\\ \\ @
 | |@
 | |@
 | |@
/_/ @@
  __@
 / /@
| | @
| | @
| | @
 \\_\\@@
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
 \\|@@
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
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
  ___  @
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
 _ @
| \\@
| |@
| |@
|_|@
   @@
  ____ @
 / ___|@
| (__  @
 \\__ \\ @
|_____|@
       @@
 _____ @
 \\ ___|@
 / _|  @
| (___ @
 \\____|@
       @@
   _  _ @
  | || |@
 _| || |@
|_   __|@
  |_|   @
        @@
  ____ @
 |___ |@
 / ___|@
| (___ @
 \\____|@
       @@
   __  @
  _\\ \\ @
 / _\` |@
| (_) |@
 \\___/ @
       @@
 _____ @
|  ___|@
 \\ \\   @
  \\ \\  @
   \\_\\ @
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
| .__/ @
 \\_\\   @
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
 \\|@@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
       @
 _____ @
|_____|@
|_____|@
   $   @
       @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
 ___ @
/ __|@
\\ \\  @
 |_| @
 (_) @
     @@
  ____   @
 / __ \\  @
| '_ \\ \\ @
| |_) | |@
|_.__/ / @
 \\____/  @@
    _    @
   / \\   @
  / _ \\  @
 / ___ \\ @
/_/   \\_\\@
         @@
  ____ @
 ( __ |@
 / _  |@
| (_| |@
 \\____|@
       @@
 ____  @
|___ \\ @
    | |@
 ___| |@
|____/ @
       @@
  ____ @
 / _  |@
| | | |@
| |_| |@
 \\____|@
       @@
 _____ @
|____ |@
  |_  |@
 ___| |@
|_____|@
       @@
 _____ @
|___  |@
   _| |@
  |_  |@
    |_|@
       @@
 ____  @
|___ \\ @
 _  | |@
| |_| |@
|____/ @
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
 _     @
| |    @
| |  _ @
| |_| |@
 \\___/ @
       @@
__  _ @
\\ \\| |@
 \\ \` |@
 / . |@
/_/|_|@
      @@
     _ @
    | |@
    | |@
 ___| |@
|_____|@
       @@
 __  __ @
|  \\/  |@
| |\\/| |@
| |  | |@
|_|  |_|@
        @@
 _   _ @
| | / |@
| |/  |@
|  /| |@
|_/ |_|@
       @@
  ___  @
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
  ____ @
 / _  |@
| (_| |@
 \\__  |@
    |_|@
       @@
  ___  @
 / _ \\ @
| | | |@
| |_| |@
/_/__/ @
       @@
  ____ @
 / _  |@
| (_| |@
 > _  |@
/_/ |_|@
       @@
  ____ @
 |___ \\@
 / ___/@
| (___ @
 \\____|@
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
_____ @
\\  __|@
 \\ \\  @
 _\\ \\ @
|____\\@
      @@
 __ @
|_ |@
 | |@
 | |@
 | |@
|__|@@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
 __ @
| _|@
| | @
| | @
| | @
|__|@@
 /\\ @
|/\\|@
 $  @
 $  @
 $  @
    @@
       @
       @
       @
       @
 _____ @
|_____|@@
 _ @
( )@
|/ @
 $ @
 $ @
   @@
       @
 _ __  @
| '_ \\ @
| |_) |@
|_.__/ @
       @@
     _ @
  __| |@
 / _\` |@
| (_| |@
 \\__,_|@
       @@
      @
 ___  @
|__ \\ @
 __) |@
|___/ @
      @@
 _     @
| |__  @
| '_ \\ @
| |_) |@
|_.__/ @
       @@
      @
 ___  @
/ _ \\ @
\\__  |@
|___/ @
      @@
 __  @
|_ \\ @
 _| |@
|_  |@
  |_|@
     @@
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
 \\___| @@
     _ @
  __| |@
 / _\` |@
| | | |@
|_| |_|@
       @@
 _ @
(_)@
| |@
| |@
|_|@
   @@
 _   @
(_)  @
| |  @
| |  @
| \\_ @
 \\__|@@
    _ @
__ | |@
\\ \\| |@
 >   |@
/_/|_|@
      @@
 _ @
| |@
| |@
| |@
|_|@
   @@
           @
  ___ __ _ @
 / _ ' _\` |@
| | | | | |@
|_| |_| |_|@
           @@
       @
  __ _ @
 / _\` |@
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
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
    |_|@@
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
|_|    @@
      @
 __ _ @
|__\` |@
   | |@
   |_|@
      @@
     @
 ___ @
|__ \\@
/ __/@
\\___|@
     @@
   _ @
 _| |@
|__ |@
 _| |@
|__/ @
     @@
       @
 _   _ @
| | | |@
| |_| |@
|_.__/ @
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
| .__/ @
 \\___| @@
     @
____ @
\\  _|@
 \\ \\ @
|___\\@
     @@
__   @
\\ \\  @
 | | @
  > >@
 | | @
/_/  @@
 _ @
| |@
| |@
| |@
| |@
|_|@@
   __@
  / /@
 | | @
< <  @
 | | @
  \\_\\@@
|\\/\\ @
 \\/\\|@
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
| '_ \\ @
| |_) |@
|_.__/ @
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
|_.__/ @
       @@
 ___  @
/ _ \\ @
\\ \\| |@
/ /| |@
\\_|| |@
   |_|@@
160
$@
$@
$@
$@
$@
$@@
161
 _ @
(_)@
| |@
| |@
|_|@
   @@
162
  _   @
 | |  @
(__ \\ @
 __) |@
(   / @
 |_|  @@
163
  ___   @
 /_. \\  @
   _| |_@
 ___| | @
|____._)@
        @@
164
/\\___/\\@
\\  _  /@
| (_) |@
/ ___ \\@
\\/   \\/@
       @@
165
 __ __ @
 \\ V / @
|__ __|@
|__ __|@
  |_|  @
       @@
166
 _ @
| |@
|_|@
 _ @
| |@
|_|@@
167
 __   @
(_ \\_ @
 / / \\@
/ // /@
\\_/ / @
  \\__)@@
168
 _   _ @
(_) (_)@
 $   $ @
 $   $ @
 $   $ @
       @@
169
   _____   @
  / ___ \\  @
 / |__ \\ \\ @
|   __) | |@
 \\ |___/ / @
  \\_____/  @@
170
 _ __ @
| '_ \\@
|_.__/@
|____|@
  $   @
      @@
171
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
172
       @
 _____ @
|  ___|@
|_|    @
   $   @
       @@
173
      @
      @
 ____ @
|____|@
  $   @
      @@
174
   _____   @
  / ___ \\  @
 / / _ | \\ @
|  \\   |  |@
 \\ /_|_| / @
  \\_____/  @@
175
 _____ @
|_____|@
   $   @
   $   @
   $   @
       @@
176
  __  @
 /  \\ @
| () |@
 \\__/ @
  $   @
      @@
177
   _   @
 _| |_ @
|_   _|@
 _|_|_ @
|_____|@
       @@
178
 ___ @
(  _|@
 \\ \\ @
|___\\@
  $  @
     @@
179
____ @
\\ __|@
/ _| @
\\___|@
  $  @
     @@
180
__ @
\\_\\@
 $ @
 $ @
 $ @
   @@
181
       @
 _   _ @
| | | |@
| |_| |@
|_._, |@
    |_|@@
182
 _____  @
|     \\ @
| | |) |@
| | __/ @
|_|_|   @
        @@
183
   @
 _ @
(_)@
 $ @
 $ @
   @@
184
   @
   @
   @
   @
 _ @
(_(@@
185
 _ @
| \\@
| |@
|_|@
 $ @
   @@
186
 ___ @
/ _ \\@
\\___/@
|___|@
  $  @
     @@
187
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
188
    __   _ @
  _ \\ \\ | \\@
 | | \\ \\| |@
|_  _|\\ \\_|@
 |_|   \\_\\ @
           @@
189
   __   _ @
 __\\ \\ | \\@
(  _\\ \\| |@
 \\ \\ \\ \\_|@
|___\\ \\_\\ @
          @@
190
    __  ____ @
  _ \\ \\ \\ __|@
 | | \\ \\/ _| @
|_  _|\\ \\___|@
 |_|   \\_\\   @
             @@
191
  _  @
 (_) @
 | | @
 _\\ \\@
|___/@
     @@
192
   __  @
  /_/  @
  /_\\  @
 / _ \\ @
/_/ \\_\\@
       @@
193
  __   @
  \\_\\  @
  /_\\  @
 / _ \\ @
/_/ \\_\\@
       @@
194
  /\\\\  @
 |/_\\| @
  /_\\  @
 / _ \\ @
/_/ \\_\\@
       @@
195
 |\\/\\  @
  \\/\\| @
  /_\\  @
 / _ \\ @
/_/ \\_\\@
       @@
196
 _   _ @
(_)_(_)@
  /_\\  @
 / _ \\ @
/_/ \\_\\@
       @@
197
   _   @
  (o)  @
  /_\\  @
 / _ \\ @
/_/ \\_\\@
       @@
198
 ______    @
|____  \\   @
  |_  _ \\  @
 ___| __ \\ @
|_____| \\_\\@
           @@
199
 ____  @
|___ \\ @
    | |@
 ___| |@
|____/ @
 (_(   @@
200
   __  @
 _/_/_ @
|____ |@
 _|_  |@
|_____|@
       @@
201
  __   @
 _\\_\\_ @
|____ |@
 _|_  |@
|_____|@
       @@
202
  /\\\\  @
 |/_\\| @
|____ |@
 _|_  |@
|_____|@
       @@
203
 _   _ @
(_)_(_)@
|____ |@
 _|_  |@
|_____|@
       @@
204
  __ @
 /_/ @
|_ _|@
 | | @
|___|@
     @@
205
 __  @
 \\_\\ @
|_ _|@
 | | @
|___|@
     @@
206
 /\\\\ @
|/_\\|@
|_ _|@
 | | @
|___|@
     @@
207
 _   _ @
(_)_(_)@
 |_ _| @
  | |  @
 |___| @
       @@
208
  ____   @
 / _  |  @
| |_| |_ @
| |__ __|@
 \\____|  @
         @@
209
|\\/\\  @
 \\/\\| @
| |/ |@
| ', |@
|_/|_|@
      @@
210
   __  @
  /_/  @
 / _ \\ @
| |_| |@
 \\___/ @
       @@
211
  __   @
  \\_\\  @
 / _ \\ @
| |_| |@
 \\___/ @
       @@
212
  /\\\\  @
 |/_\\| @
 / _ \\ @
| |_| |@
 \\___/ @
       @@
213
 |\\/\\  @
  \\/\\| @
 / _ \\ @
| |_| |@
 \\___/ @
       @@
214
 _   _ @
(_)_(_)@
 / _ \\ @
| |_| |@
 \\___/ @
       @@
215
    @
    @
/\\/\\@
>  <@
\\/\\/@
    @@
216
 ____  @
 \\\\_ \\ @
| \\\\| |@
| |\\\\ |@
 \\__\\\\ @
       @@
217
   __  @
 _/_/_ @
| | | |@
| |_| |@
 \\___/ @
       @@
218
  __   @
 _\\_\\_ @
| | | |@
| |_| |@
 \\___/ @
       @@
219
  /\\\\  @
 |/ \\| @
| | | |@
| |_| |@
 \\___/ @
       @@
220
 _   _ @
(_) (_)@
| | | |@
| |_| |@
 \\___/ @
       @@
221
  __   @
__\\_\\__@
\\ \\ / /@
 \\ V / @
  |_|  @
       @@
222
     _ @
 ___| |@
/ __  |@
\\___  |@
    |_|@
       @@
223
 ___  @
/ _ \\ @
\\ \\| |@
/ /| |@
\\_|| |@
   |_|@@
224
   __  @
 _/_/  @
| '_ \\ @
| |_) |@
|_.__/ @
       @@
225
  __   @
 _\\_\\  @
| '_ \\ @
| |_) |@
|_.__/ @
       @@
226
  /\\\\  @
 |/_\\| @
| '_ \\ @
| |_) |@
|_.__/ @
       @@
227
 |\\/\\  @
 _\\/\\| @
| '_ \\ @
| |_) |@
|_.__/ @
       @@
228
 _   _ @
(_)_(_)@
| '_ \\ @
| |_) |@
|_.__/ @
       @@
229
  __   @
 (())  @
|\` _ \\ @
| |_) |@
|_.__/ @
       @@
230
          @
 ____ __  @
/ _  '_ \\ @
\\__  |_) |@
|____,__/ @
          @@
231
      @
 ___  @
|__ \\ @
 __) |@
|___/ @
 (_(  @@
232
  __  @
 /_/  @
/ _ \\ @
\\__  |@
|___/ @
      @@
233
 __   @
 \\_\\  @
/ _ \\ @
\\__  |@
|___/ @
      @@
234
 /\\\\  @
|/_\\| @
/ _ \\ @
\\__  |@
|___/ @
      @@
235
 _   _ @
(_)_(_)@
 / _ \\ @
 \\__  |@
 |___/ @
       @@
236
 __@
/_/@
| |@
| |@
|_|@
   @@
237
__ @
\\_\\@
| |@
| |@
|_|@
   @@
238
 /\\\\ @
|/_\\|@
 | | @
 | | @
 |_| @
     @@
239
 _   _ @
(_)_(_)@
  | |  @
  | |  @
  |_|  @
       @@
240
 /\\/\\  @
 >  <  @
| /\\/_ @
| '__ \\@
 \\____/@
       @@
241
 |\\/\\  @
  \\/\\| @
 / _\` |@
| | | |@
|_| |_|@
       @@
242
   __  @
  /_/  @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
243
  __   @
  \\_\\  @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
244
  /\\\\  @
 |/_\\| @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
245
 |\\/\\  @
  \\/\\| @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
246
 _   _ @
(_)_(_)@
 / _ \\ @
| (_) |@
 \\___/ @
       @@
247
       @
   _   @
 _(_)_ @
|_____|@
  (_)  @
       @@
248
        @
  ____  @
 /\\\\_ \\ @
| (\\\\) |@
 \\__\\\\/ @
        @@
249
   __  @
 _/_/_ @
| | | |@
| |_| |@
|_.__/ @
       @@
250
  __   @
 _\\_\\_ @
| | | |@
| |_| |@
|_.__/ @
       @@
251
  /\\\\  @
 |/ \\| @
| | | |@
| |_| |@
|_.__/ @
       @@
252
 _   _ @
(_) (_)@
| | | |@
| |_| |@
|_.__/ @
       @@
253
  __   @
 _\\_\\_ @
| | | |@
| |_| |@
| .__/ @
 \\___| @@
254
     _ @
  __| |@
 / _\` |@
| (_| |@
 \\__, |@
    |_|@@
255
 _   _ @
(_) (_)@
| | | |@
| |_| |@
| .__/ @
 \\___| @@
`,Od=`flf2a$ 9 6 15 1 4
pawp.flf by Curtis Wanner (cwanner@acs.bu.edu)
(my first figlet font.  It is based on puffy.flf by Juan Car)
lastest revision - sometime in 1994

$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@@
 _ @
(_)@
(_)@
(_)@
(_)@
 _ @
(_)@
   @
   @@
$       $@
$ _   _ $@
$(_) (_)$@
$(_) (_)$@
$       $@
$       $@
$       $@
$       $@
$       $@@
             @
    _   _    @
 __(_)_(_)__ @
(___________)@
 __(_)_(_)__ @
(___________)@
   (_) (_)   @
             @
             @@
    _   @
  _( )  @
 (_)(_) @
(_)_ (_)@
 _(_) _ @
( )  ( )@
 (_)(_) @
   (_)  @
        @@
           @
 _       _ @
(_)    _(_)@
     _(_)  @
   _(_)    @
 _(_)    _ @
(_)     (_)@
           @
           @@
          @
 _____    @
(_____)   @
(_)_(_) _ @
 (____)(_)@
( _)__(_) @
 (____)(_)@
          @
          @@
$ $@
$_$@
( )@
()$@
$ $@
$ $@
$ $@
$ $@
$ $@@
     @
  __ @
 (__)@
(__) @
(_)  @
(__) @
 (__)@
     @
     @@
     @
 __  @
(__) @
 (__)@
  (_)@
 (__)@
(__) @
     @
     @@
             @
  _       _  @
 (_)_   _(_) @
 __(_)_(_)__ @
(___________)@
  _(_) (_)_  @
 (_)     (_) @
             @
             @@
         @
         @
    _    @
 __(_)__ @
(_______)@
   (_)   @
         @
         @
         @@
$ $@
$ $@
$ $@
$ $@
$ $@
$_$@
( )@
()$@
$ $@@
        @
        @
        @
 ______ @
(______)@
        @
        @
        @
        @@
$ $@
$ $@
$ $@
$ $@
$ $@
$_$@
(_)@
$ $@
$ $@@
           @
         _ @
       _(_)@
     _(_)  @
   _(_)    @
 _(_)      @
(_)        @
           @
           @@
        @
  ____  @
 (____) @
(_)  (_)@
(_)  (_)@
(_)__(_)@
 (____) @
        @
        @@
      @
  ___ @
 (___)@
(_)(_)@
   (_)@
   (_)@
   (_)@
      @
      @@
         @
   ____  @
 _(____) @
(_) _(_) @
  _(_)   @
 (_)___  @
(______) @
         @
         @@
        @
  ____  @
 (____) @
(_) _(_)@
 _ (__) @
(_)__(_)@
 (____) @
        @
        @@
          @
 _    _   @
(_)  (_)  @
(_)__(_)_ @
(________)@
     (_)  @
     (_)  @
          @
          @@
        @
 _____  @
(_____) @
(_)___  @
(_____) @
 ____(_)@
(_____) @
        @
        @@
         @
  _____  @
 (_____) @
(_)___   @
(_____)_ @
(_)___(_)@
 (_____) @
         @
         @@
         @
 _______ @
(_______)@
    _(_) @
  _(_)   @
 (_)     @
(_)      @
         @
         @@
         @
  _____  @
 (_____) @
(_)___(_)@
 (_____) @
(_)___(_)@
 (_____) @
         @
         @@
         @
  _____  @
 (_____) @
(_)___(_)@
 (_____) @
    (_)  @
   (_)   @
         @
         @@
$ $@
$ $@
$ $@
$_$@
(_)@
$_$@
(_)@
$ $@
$ $@@
$ $@
$ $@
$ $@
$_$@
(_)@
$_$@
( )@
()$@
$ $@@
       @
     _ @
   _(_)@
 _(_)  @
(_)_   @
  (_)_ @
    (_)@
       @
       @@
         @
         @
 _______ @
(_______)@
 _______ @
(_______)@
         @
         @
         @@
       @
 _     @
(_)_   @
  (_)_ @
   _(_)@
 _(_)  @
(_)    @
       @
       @@
   __   @
 _(__)_ @
(_)  (_)@
    (_) @
   (_)  @
    _   @
   (_)  @
        @
        @@
          @
    __    @
  _(__)_  @
 (_) _(_) @
(_) (___) @
 (_)____  @
   (____) @
          @
          @@
         @
  _____  @
 (_____) @
(_)___(_)@
(_______)@
(_)   (_)@
(_)   (_)@
         @
         @@
        @
 _____  @
(_____) @
(_)__(_)@
(_____) @
(_)__(_)@
(_____) @
        @
        @@
         @
   ___   @
 _(___)_ @
(_)   (_)@
(_)    _ @
(_)___(_)@
  (___)  @
         @
         @@
        @
 _____  @
(_____) @
(_)  (_)@
(_)  (_)@
(_)__(_)@
(_____) @
        @
        @@
        @
 ______ @
(______)@
(_)__   @
(____)  @
(_)____ @
(______)@
        @
        @@
        @
 ______ @
(______)@
(_)__   @
(____)  @
(_)     @
(_)     @
        @
        @@
         @
  _____  @
 (_____) @
(_)  ___ @
(_) (___)@
(_)___(_)@
 (_____) @
         @
         @@
         @
 _     _ @
(_)   (_)@
(_)___(_)@
(_______)@
(_)   (_)@
(_)   (_)@
         @
         @@
         @
 _______ @
(_______)@
   (_)   @
   (_)   @
 __(_)__ @
(_______)@
         @
         @@
         @
 ______  @
(______) @
     (_) @
 _   (_) @
( )__(_) @
 (____)  @
         @
         @@
         @
 _    _  @
(_)  (_) @
(_)_(_)  @
(____)   @
(_) (_)  @
(_)  (_) @
         @
         @@
         @
 _       @
(_)      @
(_)      @
(_)      @
(_)____  @
(______) @
         @
         @@
           @
  __   __  @
 (__)_(__) @
(_) (_) (_)@
(_) (_) (_)@
(_)     (_)@
(_)     (_)@
           @
           @@
         @
 _     _ @
(_)   (_)@
(__)_ (_)@
(_)(_)(_)@
(_)  (__)@
(_)   (_)@
         @
         @@
          @
  _____   @
 (_____)  @
(_)   (_) @
(_)   (_) @
(_)___(_) @
 (_____)  @
          @
          @@
         @
 _____   @
(_____)  @
(_)__(_) @
(_____)  @
(_)      @
(_)      @
         @
         @@
          @
  _____   @
 (_____)  @
(_)   (_) @
(_)   (_) @
(_)___(_) @
 (___(__) @
       (_)@
          @@
        @
 _____  @
(_____) @
(_)__(_)@
(_____) @
( ) ( ) @
(_)  (_)@
        @
        @@
         @
  _____  @
 (_____) @
(_)___   @
  (___)_ @
  ____(_)@
 (_____) @
         @
         @@
         @
 _______ @
(__ _ __)@
   (_)   @
   (_)   @
   (_)   @
   (_)   @
         @
         @@
         @
 _     _ @
(_)   (_)@
(_)   (_)@
(_)   (_)@
(_)___(_)@
 (_____) @
         @
         @@
         @
 _     _ @
(_)   (_)@
(_)   (_)@
(_)   (_)@
 (_)_(_) @
  (___)  @
         @
         @@
           @
 _       _ @
(_)  _  (_)@
(_) (_) (_)@
(_) (_) (_)@
(_)_(_)_(_)@
 (__) (__) @
           @
           @@
         @
 _     _ @
( )   ( )@
 (_)_(_) @
  (___)  @
 (_) (_) @
(_)   (_)@
         @
         @@
         @
 _     _ @
(_)   (_)@
 (_)_(_) @
   (_)   @
   (_)   @
   (_)   @
         @
         @@
         @
 _______ @
(_______)@
    _(_) @
  _(_)   @
 (_)____ @
(_______)@
         @
         @@
     @
 ___ @
(___)@
(_)  @
(_)  @
(_)_ @
(___)@
     @
     @@
            @
 _          @
(_)_        @
  (_)_      @
    (_)_    @
      (_)_  @
        (_) @
            @
            @@
     @
 ___ @
(___)@
  (_)@
  (_)@
 _(_)@
(___)@
     @
     @@
$  _  $@
$ (_) $@
$(___)$@
(_) (_)@
$     $@
$     $@
$     $@
$     $@
$     $@@
 $     $ @
 $     $ @
 $     $ @
 $     $ @
 $     $ @
 $     $ @
 $     $ @
 _______ @
(_______)@@
$ $@
$_$@
( )@
$()@
$ $@
$ $@
$ $@
$ $@
$ $@@
       @
       @
       @
  ____ @
 (____)@
( )_( )@
 (__)_)@
       @
       @@
       @
 _     @
(_)    @
(_)_   @
(___)_ @
(_)_(_)@
(____) @
       @
       @@
       @
       @
       @
   ___ @
 _(___)@
(_)___ @
 (____)@
       @
       @@
       @
     _ @
    (_)@
  __(_)@
 (____)@
(_)_(_)@
 (____)@
       @
       @@
       @
       @
  ____ @
 (____)@
(_)_(_)@
(__)__ @
 (____)@
       @
       @@
       @
  ____ @
 (____)@
(_)__  @
(____) @
(_)    @
(_)    @
       @
       @@
       @
       @
       @
  ____ @
 (____)@
( )_(_)@
 (____)@
(_)_(_)@
 (___) @@
       @
 _     @
(_)    @
(_)__  @
(____) @
(_) (_)@
(_) (_)@
       @
       @@
   @
 _ @
(_)@
 _ @
(_)@
(_)@
(_)@
   @
   @@
       @
       @
     _ @
    (_)@
     _ @
    (_)@
 _  (_)@
( )_(_)@
 (___) @@
       @
 _     @
(_) _  @
(_)(_) @
(___)  @
(_)(_) @
(_) (_)@
       @
       @@
     @
 __  @
(__) @
 (_) @
 (_) @
 (_) @
(___)@
     @
     @@
           @
           @
           @
  __   __  @
 (__)_(__) @
(_) (_) (_)@
(_) (_) (_)@
           @
           @@
       @
       @
 _     @
(_)__  @
(____) @
(_) (_)@
(_) (_)@
       @
       @@
       @
       @
       @
  ___  @
 (___) @
(_)_(_)@
 (___) @
       @
       @@
       @
       @
       @
 ____  @
(____) @
(_)_(_)@
(____) @
(_)    @
(_)    @@
       @
       @
       @
  ____ @
 (____)@
( )_(_)@
 (____)@
    (_)@
    (_)@@
      @
      @
 _    @
(_)__ @
(____)@
(_)   @
(_)   @
      @
      @@
      @
      @
 ____ @
(____)@
(_)__ @
 _(__)@
(____)@
      @
      @@
     @
 _   @
(_)_ @
(___)@
(_)  @
(_)_ @
 (__)@
     @
     @@
       @
       @
       @
 _   _ @
(_) (_)@
(_)_(_)@
 (___) @
       @
       @@
       @
       @
       @
 _   _ @
(_) (_)@
(_)_(_)@
  (_)  @
       @
       @@
           @
           @
           @
 _   _   _ @
(_) ( ) (_)@
(_)_(_)_(_)@
 (__) (__) @
           @
           @@
        @
        @
        @
 _   _  @
(_)_(_) @
  (_)   @
(_) (_) @
        @
        @@
       @
       @
       @
 _   _ @
(_) (_)@
(_)_(_)@
 (____)@
  __(_)@
 (___) @@
       @
       @
 _____ @
(_____)@
  _(_) @
 (_)__ @
(_____)@
       @
       @@
       @
    __ @
   (__)@
 _(_)  @
(__)   @
  (_)  @
   (__)@
       @
       @@
 _ @
(_)@
(_)@
(_)@
 _ @
(_)@
(_)@
(_)@
   @@
       @
 __    @
(__)   @
  (_)_ @
   (__)@
 _(_)  @
(__)   @
       @
       @@
         @
  __   _ @
 ( _)_(_)@
(_) (__) @
         @
         @
         @
         @
         @@
 _   _ @
(_)_(_)@
(_____)@
(_)_(_)@
(_____)@
(_) (_)@
(_) (_)@
       @
       @@
 _   _ @
(_)_(_)@
(_____)@
(_) (_)@
(_) (_)@
(_)_(_)@
(_____)@
       @
       @@
 _   _ @
(_) (_)@
 _   _ @
(_) (_)@
(_) (_)@
(_)_(_)@
(_____)@
       @
       @@
       @
 _   _ @
(_) (_)@
  ____ @
 (____)@
(_)_(_)@
 (__(_)@
       @
       @@
       @
 _   _ @
(_) (_)@
  ___  @
 (___) @
(_)_(_)@
 (___) @
       @
       @@
       @
 _   _ @
(_) (_)@
 _   _ @
(_) (_)@
(_)_(_)@
 (___) @
       @
       @@
       @
       @
       @
 _____ @
(_____)@
(_)(_) @
(_)(__)@
(_)(_) @
(_)    @@
`,wd=`flf2a$ 12 10 20 -1 14
poison.flf composed into figlet by Vinney Thai <ssfiit@eris.cc.umb.edu>
poison font (numbers & puntuation marks) composed by Vinney Thai
poison font (uppercase characters) composed David Issel <dissel@nunic.nu.edu>
date: Oct 23, 1994
Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
12   - height of a character
10   - height of a character, not including descenders
20   - max line length (excluding comment lines) + a fudge factor
-1   - default smushmode for this font (like "-m 0" on command line)
15   - number of comment lines

$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
     @
@@@ $@
@@@ $@
@@! $@
!@  $@
@!@ $@
!!! $@
     @
:!: $@
 :: $@
::: $@
     @@
         @
@@@ @@@ $@
@@@ @@@ $@
@@! @@! $@
 @!  @! $@
  $   $  @
  $   $  @
  $   $  @
  $   $  @
  $   $  @
  $   $  @
         @@
              @
  @@@  @@@ $  @
  @@@  @@@ $  @
@!@@!@!@@@@! $@
!@!@!!@@!@!@ $@
  @!@  !@! $  @
  !!!  !!! $  @
!:!!:!:!!!!: $@
:!:!::!!:!:! $@
  ::   ::: $  @
   :   : : $  @
              @@
            @
    @@ $    @
 @@@@@@@@@ $@
!@@!@@!@@! $@
!@! !@ $    @
!!!@@!!!! $ @
 !!!@@@!!! $@
    !: !:! $@
!:!!:!: :! $@
: :::: :: $ @
    :: $    @
            @@
              @
@@@@     @@@ $@
@@@@    @@@ $ @
@@!@   @@! $  @
      !@! $   @
     @!! $    @
    !!! $     @
   !!: $      @
  ::!   ::!: $@
  ::    :::  $@
: :     : :: $@
              @@
             @
  @@@@@ $    @
 @@@@@@@ $   @
@@!   @@@ $  @
 !@  @!@ $   @
  @!@!@ $    @
  !!!@  !!! $@
 !!:!!:!!: $ @
:!:  !:!: $  @
::: :::::: $ @
 ::: :: ::: $@
             @@
     @
@@@ $@
 @@ $@
@! $ @
 $   @
 $   @
 $   @
 $   @
 $   @
 $   @
 $   @
     @@
        @
   @@@ $@
  @@@ $ @
 @@! $  @
!@! $   @
!!@ $   @
!!! $   @
!!: $   @
 :!: $  @
   :: $ @
     : $@
        @@
        @
@@@ $   @
 @@@ $  @
  @@! $ @
   !@! $@
   !!@ $@
   !!! $@
   !!: $@
  :!: $ @
 :: $   @
: $     @
        @@
            @
            @
@@!    !@@ $@
 !@!  @!! $ @
  !@@!@! $  @
@!@!@!!@!! $@
  !: :!! $  @
 :!:  !:! $ @
:::    ::: $@
            @
            @
            @@
           @
           @
           @
   @@! $   @
   !@! $   @
@!@!@!@!@ $@
!!!@!@!!! $@
   !!: $   @
   :!: $   @
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
:!: $@
 :: $@
:: $ @
     @@
           @
           @
           @
           @
           @
@!@!@!@!@ $@
!!!@!@!!! $@
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
:!: $@
::: $@
::: $@
     @@
              @
         @@@ $@
        @@@ $ @
       @@! $  @
      !@! $   @
     @!! $    @
    !!! $     @
   !!: $      @
  ::! $       @
  :: $        @
: : $         @
              @@
            @
 @@@@@@@@ $ @
@@@@@@@@@@ $@
@@!   @@@@ $@
!@!  @!@!@ $@
@!@ @! !@! $@
!@!!!  !!! $@
!!:!   !!! $@
:!:    !:! $@
::::::: :: $@
 : : :  : $ @
            @@
       @
  @@@ $@
 @@@@ $@
@@@!! $@
  !@! $@
  @!@ $@
  !@! $@
  !!: $@
  :!: $@
  ::: $@
   :: $@
       @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
     @@@ $@
    @!@ $ @
   !!@ $  @
  !!: $   @
 !:! $    @
:!: $     @
:: ::::: $@
:: : ::: $@
          @@
         @
@@@@@@ $ @
@@@@@@@ $@
    @@@ $@
    @!@ $@
@!@!!@ $ @
!!@!@! $ @
    !!: $@
    :!: $@
:: :::: $@
 : : : $ @
         @@
           @
     @@@ $ @
    @@@@ $ @
   @@!@! $ @
  !@!!@! $ @
 @!! @!! $ @
!!!  !@! $ @
:!!:!:!!: $@
!:::!!::: $@
     ::: $ @
     ::: $ @
           @@
         @
@@@@@@@ $@
@@@@@@@ $@
!@@ $    @
!@! $    @
!!@@!! $ @
@!!@!!! $@
    !:! $@
    !:! $@
:::: :: $@
:: : : $ @
         @@
          @
  @@@@@@ $@
 @@@@@@@ $@
!@@ $     @
!@! $     @
!!@@!@! $ @
@!!@!!!! $@
!:!  !:! $@
:!:  !:! $@
:::: ::: $@
 :: : : $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
     @@! $@
    !@! $ @
   @!! $  @
  !!! $   @
 !!: $    @
:!: $     @
 :: $     @
: : $     @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
 !@!!@! $ @
 !!@!!! $ @
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
!!@!!@!! $@
  !!@!!! $@
     !!! $@
     !:! $@
::::: :: $@
 : :  : $ @
          @@
     @
     @
     @
     @
@!@ $@
!@! $@
!:! $@
 $$  @
:!: $@
::: $@
::: $@
     @@
     @
     @
     @
     @
@!@  @
!@! $@
:!: $@
 $$  @
:!: $@
 :: $@
:: $ @
     @@
             @
        @@@ $@
      @@@ $  @
    @@! $    @
  !@! $      @
!!@ $        @
!!! $        @
  !!: $      @
    :!: $    @
      :: $   @
        : $  @
             @@
           @
           @
           @
           @
!@!!@!!@! $@
@!@!@!@!@ $@
 $      $  @
!!:!!::!! $@
::!:!:!!: $@
           @
           @
           @@
             @
@@@ $        @
  @@@ $      @
    @@! $    @
      !@! $  @
        !!@ $@
        !!! $@
      !!: $  @
    :!: $    @
  :: $       @
: $          @
             @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
    @!@ $ @
   !!@ $  @
  !!@ $   @
          @
  !:! $   @
   :: $   @
  ::: $   @
          @@
            @
 @@@@@@@@ $ @
@@@@@@@@@@ $@
@@!    @@@ $@
!@! @!@!!@ $@
@!@ !@@!@! $@
!@! @@!@!! $@
!!:  !:!! $ @
:!: $       @
:::::::::: $@
 : : :: : $ @
            @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@   @!@ $@
@!@!@!@ $ @
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
 :: :::: $@
:: : :: $ @
          @@
          @
 @@@@@@@ $@
@@@@@@@@ $@
!@@ $     @
!@! $     @
!@! $     @
!!! $     @
:!! $     @
:!: $     @
 ::: ::: $@
 :: :: : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 :::: :: $@
:: :  : $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: :::: $@
: :: :: $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@@@ $@
@@@@@@@@@ $@
!@@ $      @
!@! $      @
!@! @!@!@ $@
!!! !!@!! $@
:!!   !!: $@
:!:   !:: $@
 ::: :::: $@
 :: :: : $ @
           @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
     @
@@@ $@
@@@ $@
@@! $@
!@! $@
!!@ $@
!!! $@
!!: $@
:!: $@
 :: $@
: $  @
     @@
          @
     @@@ $@
     @@@ $@
     @@! $@
     !@! $@
     !!@ $@
     !!! $@
     !!: $@
!!:  :!: $@
::: : :: $@
 : ::: $  @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
@!@@!@! $ @
!!@!!! $  @
!!: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   ::: $@
          @@
          @
@@@      $@
@@@      $@
@@!      $@
!@!      $@
@!!      $@
!!!      $@
!!:      $@
 :!:     $@
 :: :::: $@
: :: : : $@
          @@
             @
@@@@@@@@@@ $ @
@@@@@@@@@@@ $@
@@! @@! @@! $@
!@! !@! !@! $@
@!! !!@ @!@ $@
!@!   ! !@! $@
!!:     !!: $@
:!:     :!: $@
:::     :: $ @
 :      : $  @
             @@
          @
@@@  @@@ $@
@@@@ @@@ $@
@@!@!@@@ $@
!@!!@!@! $@
@!@ !!@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 ::   :: $@
::    : $ @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@@!@! $ @
!!@!!! $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@ $  @
@@@@@@@@ $ @
@@!  @@@ $ @
!@!  @!@ $ @
@!@  !@! $ @
!@!  !!! $ @
!!:!!:!: $ @
:!: :!:  $ @
::::: :! $ @
 : :  ::: $@
           @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!!@! $ @
!!@!@! $  @
!!: :!! $ @
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
 @@@@@@ $ @
@@@@@@@ $ @
!@@ $     @
!@! $     @
!!@@!! $  @
 !!@!!! $ @
     !:! $@
    !:! $ @
:::: :: $ @
:: : : $  @
          @@
         @
@@@@@@@ $@
@@@@@@@ $@
  @@! $  @
  !@! $  @
  @!! $  @
  !!! $  @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
:!:  !!: $@
 ::!!:! $ @
  :::: $  @
   : $    @
          @@
               @
@@@  @@@  @@@ $@
@@@  @@@  @@@ $@
@@!  @@!  @@! $@
!@!  !@!  !@! $@
@!!  !!@  @!@ $@
!@!  !!!  !@! $@
!!:  !!:  !!: $@
:!:  :!:  :!: $@
 :::: :: ::: $ @
  :: :  : : $  @
               @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
 !@@!@! $ @
  @!!! $  @
 !: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   :: $ @
          @@
         @
@@@ @@@ $@
@@@ @@@ $@
@@! !@@ $@
!@! @!! $@
 !@!@! $ @
  @!!! $ @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
     @@! $@
    !@! $ @
   @!! $  @
  !!! $   @
 !!: $    @
:!: $     @
 :: :::: $@
: :: : : $@
          @@
       @
@@@@@ $@
@@@@@ $@
@@! $  @
!@! $  @
@!@ $  @
!!! $  @
!!: $  @
:!: $  @
::::: $@
 : : $ @
       @@
               @
 @@@ $         @
  @@@ $        @
   @@! $       @
    !@! $      @
     @!! $     @
      !!! $    @
       !!: $   @
        ::! $  @
         :: $  @
          : : $@
               @@
       @
@@@@@ $@
@@@@@ $@
  @@! $@
  !@! $@
  @!@ $@
  !!! $@
  !!: $@
  :!: $@
::::: $@
 : : $ @
       @@
                @
     @@@@@ $    @
   @@@@ @@@@ $  @
 @!@!     @!@! $@
   $        $   @
   $        $   @
   $        $   @
   $        $   @
   $        $   @
   $        $   @
   $        $   @
                @@
               @
              $@
              $@
              $@
              $@
              $@
              $@
              $@
              $@
::::::::::::: $@
::::::::::::: $@
               @@
     @
@@@ $@
@@ $ @
 @! $@
  $  @
  $  @
  $  @
  $  @
  $  @
  $  @
  $  @
     @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@   @!@ $@
@!@!@!@ $ @
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
 :: :::: $@
:: : :: $ @
          @@
          @
 @@@@@@@ $@
@@@@@@@@ $@
!@@ $     @
!@! $     @
!@! $     @
!!! $     @
:!! $     @
:!: $     @
 ::: ::: $@
 :: :: : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 :::: :: $@
:: :  : $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: :::: $@
: :: :: $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@@@ $@
@@@@@@@@@ $@
!@@ $      @
!@! $      @
!@! @!@!@ $@
!!! !!@!! $@
:!!   !!: $@
:!:   !:: $@
 ::: :::: $@
 :: :: : $ @
           @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
     @
@@@ $@
@@@ $@
@@! $@
!@! $@
!!@ $@
!!! $@
!!: $@
:!: $@
 :: $@
: $  @
     @@
          @
     @@@ $@
     @@@ $@
     @@! $@
     !@! $@
     !!@ $@
     !!! $@
     !!: $@
!!:  :!: $@
::: : :: $@
 : ::: $  @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
@!@@!@! $ @
!!@!!! $  @
!!: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   ::: $@
          @@
          @
@@@      $@
@@@      $@
@@!      $@
!@!      $@
@!!      $@
!!!      $@
!!:      $@
 :!:     $@
 :: :::: $@
: :: : : $@
          @@
             @
@@@@@@@@@@ $ @
@@@@@@@@@@@ $@
@@! @@! @@! $@
!@! !@! !@! $@
@!! !!@ @!@ $@
!@!   ! !@! $@
!!:     !!: $@
:!:     :!: $@
:::     :: $ @
 :      : $  @
             @@
          @
@@@  @@@ $@
@@@@ @@@ $@
@@!@!@@@ $@
!@!!@!@! $@
@!@ !!@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 ::   :: $@
::    : $ @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@@!@! $ @
!!@!!! $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@ $  @
@@@@@@@@ $ @
@@!  @@@ $ @
!@!  @!@ $ @
@!@  !@! $ @
!@!  !!! $ @
!!:!!:!: $ @
:!: :!:  $ @
::::: :! $ @
 : :  ::: $@
           @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!!@! $ @
!!@!@! $  @
!!: :!! $ @
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
 @@@@@@ $ @
@@@@@@@ $ @
!@@ $     @
!@! $     @
!!@@!! $  @
 !!@!!! $ @
     !:! $@
    !:! $ @
:::: :: $ @
:: : : $  @
          @@
         @
@@@@@@@ $@
@@@@@@@ $@
  @@! $  @
  !@! $  @
  @!! $  @
  !!! $  @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
:!:  !!: $@
 ::!!:! $ @
  :::: $  @
   : $    @
          @@
               @
@@@  @@@  @@@ $@
@@@  @@@  @@@ $@
@@!  @@!  @@! $@
!@!  !@!  !@! $@
@!!  !!@  @!@ $@
!@!  !!!  !@! $@
!!:  !!:  !!: $@
:!:  :!:  :!: $@
 :::: :: ::: $ @
  :: :  : : $  @
               @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
 !@@!@! $ @
  @!!! $  @
 !: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   :: $ @
          @@
         @
@@@ @@@ $@
@@@ @@@ $@
@@! !@@ $@
!@! @!! $@
 !@!@! $ @
  @!!! $ @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
     @@! $@
    !@! $ @
   @!! $  @
  !!! $   @
 !!: $    @
:!: $     @
 :: :::: $@
: :: : : $@
          @@
          @
   @@@@@ $@
   @@@@@ $@
  @@! $   @
  !@! $   @
@!@ $     @
!!! $     @
  !!: $   @
  :!: $   @
   ::::: $@
    : : $ @
          @@
     @
@@@ $@
@@@ $@
@@! $@
!@! $@
 $$  @
!!! $@
!!: $@
:!: $@
:: $ @
 : $ @
     @@
          @
@@@@@ $   @
@@@@@ $   @
   @@! $  @
   !@! $  @
     @!@ $@
     !!! $@
   !!: $  @
   :!: $  @
::::: $   @
 : : $    @
          @@
               @
               @
   !@!    @!@ $@
 @!@!@!@!@!@ $ @
!!!    !@! $   @
  $      $     @
  $      $     @
  $      $     @
  $      $     @
  $      $     @
  $      $     @
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
  @
  @
  @@
`,Md=`flf2a$ 8 6 14 1 3
puffy.flf by Juan Car (jc@juguete.quim.ucm.es)
Version 1.1 5/Mar/1994

$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@
$$$@@
 _ @
( )@
| |@
| |@
| |@
(_)@
(_)@
   @@
$ _  _ $@
$( )( )$@
$(_)(_)$@
$      $@
$      $@
$      $@
$      $@
$      $@@
          @
   _  _   @
 _( )( )_ @
(_  ..  _)@
(_      _)@
  (_)(_)  @
          @
          @@
  ( )  @
 /'_ \\ @
( (_(_)@
 \\__ \\ @
( )_) )@
\`\\_ _/'@
  (_)  @
       @@
 _       _ @
(_)    /' )@
     /' /' @
   /' /'   @
 /' /'   _ @
(_/'    (_)@
           @
           @@
 _____   @
(  _  )  @
\`\\  ,/'  @
 /'_\`\\/\\ @
| (_> ,<\`@
\`\\___/\\/'@
         @
         @@
$_$@
( )@
|/$@
$ $@
$ $@
$ $@
$ $@
$ $@@
   _ @
 /' )@
| ,/'@
| |  @
| \`\\ @
\`\\__)@
     @
     @@
 _   @
( \`\\ @
\`\\  |@
  | |@
 /' |@
(__/'@
     @
     @@
   _   @
 _( )_ @
( \` ' )@
 >   < @
(_, ,_)@
  (_)  @
       @
       @@
    _    @
   ( )   @
 __| |__ @
(__   __)@
   | |   @
   (_)   @
         @
         @@
$ $@
$ $@
$ $@
$ $@
$_$@
( )@
|/$@
$ $@@
        @
        @
 ______ @
(______)@
        @
        @
        @
        @@
$ $@
$ $@
$ $@
$ $@
$_$@
(_)@
$ $@
$ $@@
        __ @
       /  )@
     /' /' @
   /' /'   @
 /' /'     @
(_/'       @
           @
           @@
  __   @
/' _\`\\ @
| ( ) |@
| | | |@
| (_) |@
\`\\___/'@
       @
       @@
   _ @
 /' )@
(_, |@
  | |@
  | |@
  (_)@
     @
     @@
   __   @
 /'__\`\\ @
(_)  ) )@
   /' / @
 /' /( )@
(_____/'@
        @
        @@
   ___ @
 /'_  )@
(_)_) |@
 _(_ < @
( )_) |@
\`\\____)@
       @
       @@
 _  _   @
( )( )  @
| || |  @
| || |_ @
(__ ,__)@
   (_)  @
        @
        @@
 _____ @
(  ___)@
| (__  @
|___ \`\\@
( )_) |@
\`\\___/'@
       @
       @@
 _____ @
(  ___)@
| (__  @
|  _ \`\\@
| (_) |@
\`\\___/'@
       @
       @@
 _______ @
(_____  )@
     /'/'@
   /'/'  @
 /'/'    @
(_/      @
         @
         @@
   _   @
 /'_\`\\ @
( (_) )@
 > _ <'@
( (_) )@
\`\\___/'@
       @
       @@
   __  @
 /'_ \`\\@
( (_) |@
 \\__, |@
    | |@
    (_)@
       @
       @@
$ $@
$ $@
$_$@
(_)@
$_$@
(_)@
$ $@
$ $@@
$ $@
$ $@
$_$@
(_)@
$_$@
( )@
|/$@
$ $@@
     _ @
   /' )@
 /' /' @
<  <   @
 \\  \`\\ @
  \`\\__)@
       @
       @@
        @
        @
 ______ @
(______)@
(______)@
        @
        @
        @@
 _     @
( \`\\   @
 \`\\ \`\\ @
   >  >@
 /' /' @
(_/'   @
       @
       @@
   _   @
 /'_\`\\ @
(_) ) |@
   /'/'@
  |_|  @
  (_)  @
       @
       @@
          @
     _    @
   /'_\`\\  @
 /'/'_\` ) @
( ( (_| | @
 \\ \`\\__,_)@
  \`\\_____)@
          @@
 _____ @
(  _  )@
| (_) |@
|  _  |@
| | | |@
(_) (_)@
       @
       @@
 ___   @
(  _\`\\ @
| (_) )@
|  _ <'@
| (_) )@
(____/'@
       @
       @@
 ___   @
(  _\`\\ @
| ( (_)@
| |  _ @
| (_( )@
(____/'@
       @
       @@
 ___   @
(  _\`\\ @
| | ) |@
| | | )@
| |_) |@
(____/'@
       @
       @@
 ___   @
(  _\`\\ @
| (_(_)@
|  _)_ @
| (_( )@
(____/'@
       @
       @@
 ___   @
(  _\`\\ @
| (_(_)@
|  _)  @
| |    @
(_)    @
       @
       @@
 ___   @
(  _\`\\ @
| ( (_)@
| |___ @
| (_, )@
(____/'@
       @
       @@
 _   _ @
( ) ( )@
| |_| |@
|  _  |@
| | | |@
(_) (_)@
       @
       @@
 _ @
(_)@
| |@
| |@
| |@
(_)@
   @
   @@
 _____ @
(___  )@
    | |@
 _  | |@
( )_| |@
\`\\___/'@
       @
       @@
 _   _ @
( ) ( )@
| |/'/'@
| , <  @
| |\\\`\\ @
(_) (_)@
       @
       @@
 _     @
( )    @
| |    @
| |  _ @
| |_( )@
(____/'@
       @
       @@
       @
/'\\_/\`\\@
|     |@
| (_) |@
| | | |@
(_) (_)@
       @
       @@
 _   _ @
( ) ( )@
| \`\\| |@
| , \` |@
| |\`\\ |@
(_) (_)@
       @
       @@
 _____ @
(  _  )@
| ( ) |@
| | | |@
| (_) |@
(_____)@
       @
       @@
 ___   @
(  _\`\\ @
| |_) )@
| ,__/'@
| |    @
(_)    @
       @
       @@
 _____ @
(  _  )@
| ( ) |@
| | | |@
| (('\\|@
(___\\_)@
       @
       @@
 ___   @
|  _\`\\ @
| (_) )@
| ,  / @
| |\\ \\ @
(_) (_)@
       @
       @@
 ___   @
(  _\`\\ @
| (_(_)@
\`\\__ \\ @
( )_) |@
\`\\____)@
       @
       @@
 _____ @
(_   _)@
  | |  @
  | |  @
  | |  @
  (_)  @
       @
       @@
 _   _ @
( ) ( )@
| | | |@
| | | |@
| (_) |@
(_____)@
       @
       @@
 _   _ @
( ) ( )@
| | | |@
| | | |@
| \\_/ |@
\`\\___/'@
       @
       @@
 _       _ @
( )  _  ( )@
| | ( ) | |@
| | | | | |@
| (_/ \\_) |@
\`\\___x___/'@
           @
           @@
 _    _ @
( )  ( )@
\`\\\`\\/'/'@
  >  <  @
 /'/\\\`\\ @
(_)  (_)@
        @
        @@
 _     _ @
( )   ( )@
\`\\\`\\_/'/'@
  \`\\ /'  @
   | |   @
   (_)   @
         @
         @@
 _______ @
(_____  )@
     /'/'@
   /'/'  @
 /'/'___ @
(_______)@
         @
         @@
 ___ @
(  _)@
| |  @
| |  @
| |_ @
(___)@
     @
     @@
 _         @
( \`\\       @
 \`\\ \`\\     @
   \`\\ \`\\   @
     \`\\ \`\\ @
       \`\\_)@
           @
           @@
 ___ @
(_  )@
  | |@
  | |@
 _| |@
(___)@
     @
     @@
$ __ $@
$/  \\$@
(_/\\_)@
$    $@
$    $@
$    $@
$    $@
$    $@@
 $    $ @
 $    $ @
 $    $ @
 $    $ @
 $    $ @
 $    $ @
 ______ @
(______)@@
$_$@
( )@
$\\|@
$ $@
$ $@
$ $@
$ $@
$ $@@
       @
       @
   _ _ @
 /'_\` )@
( (_| |@
\`\\__,_)@
       @
       @@
 _     @
( )    @
| |_   @
| '_\`\\ @
| |_) )@
(_,__/'@
       @
       @@
       @
       @
   ___ @
 /'___)@
( (___ @
\`\\____)@
       @
       @@
     _ @
    ( )@
   _| |@
 /'_\` |@
( (_| |@
\`\\__,_)@
       @
       @@
       @
       @
   __  @
 /'__\`\\@
(  ___/@
\`\\____)@
       @
       @@
   ___ @
 /'___)@
| (__  @
| ,__) @
| |    @
(_)    @
       @
       @@
       @
       @
   __  @
 /'_ \`\\@
( (_) |@
\`\\__  |@
( )_) |@
 \\___/'@@
 _     @
( )    @
| |__  @
|  _ \`\\@
| | | |@
(_) (_)@
       @
       @@
   @
 _ @
(_)@
| |@
| |@
(_)@
   @
   @@
       @
     _ @
    (_)@
    | |@
    | |@
 _  | |@
( )_| |@
\`\\___/'@@
 _     @
( )    @
| |/') @
| , <  @
| |\\\`\\ @
(_) (_)@
       @
       @@
 _   @
(_ ) @
 | | @
 | | @
 | | @
(___)@
     @
     @@
           @
           @
  ___ ___  @
/' _ \` _ \`\\@
| ( ) ( ) |@
(_) (_) (_)@
           @
           @@
       @
       @
  ___  @
/' _ \`\\@
| ( ) |@
(_) (_)@
       @
       @@
       @
       @
   _   @
 /'_\`\\ @
( (_) )@
\`\\___/'@
       @
       @@
       @
       @
 _ _   @
( '_\`\\ @
| (_) )@
| ,__/'@
| |    @
(_)    @@
       @
       @
   _ _ @
 /'_\` )@
( (_) |@
\`\\__, |@
    | |@
    (_)@@
      @
      @
 _ __ @
( '__)@
| |   @
(_)   @
      @
      @@
      @
      @
  ___ @
/',__)@
\\__, \\@
(____/@
      @
      @@
 _   @
( )_ @
| ,_)@
| |  @
| |_ @
\`\\__)@
     @
     @@
       @
       @
 _   _ @
( ) ( )@
| (_) |@
\`\\___/'@
       @
       @@
       @
       @
 _   _ @
( ) ( )@
| \\_/ |@
\`\\___/'@
       @
       @@
           @
           @
 _   _   _ @
( ) ( ) ( )@
| \\_/ \\_/ |@
\`\\___x___/'@
           @
           @@
      @
      @
      @
(\`\\/')@
 >  < @
(_/\\_)@
      @
      @@
       @
       @
 _   _ @
( ) ( )@
| (_) |@
\`\\__, |@
( )_| |@
\`\\___/'@@
      @
      @
 ____ @
(_  ,)@
 /'/_ @
(____)@
      @
      @@
    _ @
  /' )@
 | ,/'@
<' |  @
 | \`\\ @
 \`\\__)@
      @
      @@
   @
 _ @
( )@
| |@
| |@
| |@
(_)@
   @@
 _    @
( \`\\  @
\`\\  | @
  | \`>@
 /' | @
(__/' @
      @
      @@
   _   _ @
 /' \\/' )@
(_/\\__/' @
         @
         @
         @
         @
         @@
(_)_(_)@
(  _  )@
| (_) |@
|  _  |@
| | | |@
(_) (_)@
       @
       @@
(_)_(_)@
(  _  )@
| ( ) |@
| | | |@
| (_) |@
(_____)@
       @
       @@
(_) (_)@
( ) ( )@
| | | |@
| | | |@
| (_) |@
(_____)@
       @
       @@
 _   _ @
(_) (_)@
   _ _ @
 /'_\` )@
( (_| |@
\`\\__,_)@
       @
       @@
 _   _ @
(_) (_)@
   _   @
 /'_\`\\ @
( (_) )@
\`\\___/'@
       @
       @@
 _   _ @
(_) (_)@
 _   _ @
( ) ( )@
| (_) |@
\`\\___/'@
       @
       @@
       @
       @
 _____ @
(  _  )@
| |/ /'@
| |\\\`\\ @
| ||_/'@
(_)    @@
`,Hd=`flf2a$ 5 5 12 0 11 0 0 0
Author : myflix and Mikechat
Date   : 2006/4/9 14:37:04
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
     _    #
   _( )__ #
 _|     _|#
(_   _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ ! _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ " _ (_ #
  |_( )__|##
##
 #
 #
 #
 ##
$#
 #
 #
 #
 ##
%#
 #
 #
 #
 ##
&#
 #
 #
 #
 ##
'#
 #
 #
 #
 ##
(#
 #
 #
 #
 ##
)#
 #
 #
 #
 ##
*#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ + _ (_ #
  |_( )__|##
,#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ - _ (_ #
  |_( )__|##
.#
 #
 #
 #
 ##
/#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ 0 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 1 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 2 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 3 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 4 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 5 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 6 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 7 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 8 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ 9 _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ : _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ ; _ (_ #
  |_( )__|##
<#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ = _ (_ #
  |_( )__|##
>#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ ? _ (_ #
  |_( )__|##
@#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ A _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ B _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ C _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ D _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ E _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ F _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ G _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ H _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ I _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ J _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ K _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ L _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ M _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ N _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ O _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ P _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ Q _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ R _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ S _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ T _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ U _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ V _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ W _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ X _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ Y _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ Z _ (_ #
  |_( )__|##
[#
 #
 #
 #
 ##
\\#
 #
 #
 #
 ##
]#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ ^ _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ _ _ (_ #
  |_( )__|##
\`#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ A _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ B _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ C _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ D _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ E _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ F _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ G _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ H _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ I _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ J _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ K _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ L _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ M _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ N _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ O _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ P _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ Q _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ R _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ S _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ T _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ U _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ V _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ W _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ X _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ Y _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ Z _ (_ #
  |_( )__|##
{#
 #
 #
 #
 ##
|#
 #
 #
 #
 ##
}#
 #
 #
 #
 ##
~#
 #
 #
 #
 ##
     _    #
   _( )__ #
 _|     _|#
(_ A _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ O _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ U _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ A _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ O _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_ U _ (_ #
  |_( )__|##
     _    #
   _( )__ #
 _|     _|#
(_   _ (_ #
  |_( )__|##
`,kd=`flf2a$ 7 6 20 15 2
Rounded by Nick Miners N.M.Miners@durham.ac.uk
May 1994
$$#
$$#
$$#
$$#
$$#
$$#
$$##
 _ #
| |#
| |#
|_|#
 _ #
|_|#
   ##
 _  _ #
( )( )#
|/  \\|#
      #
      #
      #
      ##
   _ _   #
 _| U |_ #
(_     _)#
 _| O |_ #
(_     _)#
  |_n_|  #
         ##
   _   #
 _| |_ #
|  ___)#
|___  |#
(_   _|#
  |_|  #
       ##
 _   _ #
(_) | |#
   / / #
  / /  #
 / / _ #
|_| (_)#
       ##
  ___   #
 / _ \\  #
( (_) ) #
 ) _ (  #
( (/  \\ #
 \\__/\\_)#
        ##
 _ #
( )#
|/ #
   #
   #
   #
   ##
  _ #
 / )#
| | #
| | #
| | #
 \\_)#
    ##
 _  #
( \\ #
 | |#
 | |#
 | |#
(_/ #
    ##
    _    #
 _ | | _ #
( \\| |/ )#
 )     ( #
(_/| |\\_)#
   |_|   #
         ##
       #
   _   #
 _| |_ #
(_   _)#
  |_|  #
       #
       ##
   #
   #
   #
   #
 _ #
( )#
|/ ##
       #
       #
 _____ #
(_____)#
       #
       #
       ##
   #
   #
   #
   #
 _ #
(_)#
   ##
     _ #
    | |#
   / / #
  / /  #
 / /   #
|_|    #
       ##
  _____  #
 (_____) #
 _  __ _ #
| |/ /| |#
|   /_| |#
 \\_____/ #
         ##
  ___   #
 (___)  #
    _   #
   | |  #
  _| |_ #
 (_____)#
        ##
 ______  #
(_____ \\ #
  ____) )#
 / ____/ #
| (_____ #
|_______)#
         ##
 ______  #
(_____ \\ #
 _____) )#
(_____ ( #
 _____) )#
(______/ #
         ##
 _     _ #
| |   (_)#
| |_____ #
|_____  |#
      | |#
      |_|#
         ##
 _______ #
(_______)#
 ______  #
(_____ \\ #
 _____) )#
(______/ #
         ##
 _______ #
(_______)#
 ______  #
|  ___ \\ #
| |___) )#
|______/ #
         ##
 _______ #
(_______)#
      _  #
     / ) #
    / /  #
   (_/   #
         ##
  _____  #
 (_____) #
  _____  #
 / ___ \\ #
( (___) )#
 \\_____/ #
         ##
 _______ #
(_______)#
 _______ #
(_____  |#
      | |#
      |_|#
         ##
   #
   #
 _ #
(_)#
 _ #
(_)#
   ##
   #
   #
 _ #
(_)#
 _ #
( )#
|/ ##
    #
  _ #
 / )#
( ( #
 \\_)#
    #
    ##
       #
 _____ #
(_____)#
 _____ #
(_____)#
       #
       ##
    #
 _  #
( \\ #
 ) )#
(_/ #
    #
    ##
  ___  #
 / _ \\ #
(_( ) )#
   (_/ #
   _   #
  (_)  #
       ##
  _____  #
 / __  \\ #
| | /   )#
| | \\__/ #
| |____  #
 \\_____) #
         ##
 _______ #
(_______)#
 _______ #
|  ___  |#
| |   | |#
|_|   |_|#
         ##
 ______  #
(____  \\ #
 ____)  )#
|  __  ( #
| |__)  )#
|______/ #
         ##
 _______ #
(_______)#
 _       #
| |      #
| |_____ #
 \\______)#
         ##
 ______  #
(______) #
 _     _ #
| |   | |#
| |__/ / #
|_____/  #
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |_____ #
|_______)#
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |      #
|_|      #
         ##
 _______ #
(_______)#
 _   ___ #
| | (_  |#
| |___) |#
 \\_____/ #
         ##
 _     _ #
(_)   (_)#
 _______ #
|  ___  |#
| |   | |#
|_|   |_|#
         ##
 _ #
| |#
| |#
| |#
| |#
|_|#
   ##
 _______ #
(_______)#
     _   #
 _  | |  #
| |_| |  #
 \\___/   #
         ##
 _     _ #
(_)   | |#
 _____| |#
|  _   _)#
| |  \\ \\ #
|_|   \\_)#
         ##
 _       #
(_)      #
 _       #
| |      #
| |_____ #
|_______)#
         ##
 _______ #
(_______)#
 _  _  _ #
| ||_|| |#
| |   | |#
|_|   |_|#
         ##
 _______ #
(_______)#
 _     _ #
| |   | |#
| |   | |#
|_|   |_|#
         ##
 _______ #
(_______)#
 _     _ #
| |   | |#
| |___| |#
 \\_____/ #
         ##
 ______  #
(_____ \\ #
 _____) )#
|  ____/ #
| |      #
|_|      #
         ##
 _______ #
(_______)#
 _    _  #
| |  | | #
| |__| | #
 \\______)#
         ##
 ______  #
(_____ \\ #
 _____) )#
|  __  / #
| |  \\ \\ #
|_|   |_|#
         ##
  ______ #
 / _____)#
( (____  #
 \\____ \\ #
 _____) )#
(______/ #
         ##
 _______ #
(_______)#
    _    #
   | |   #
   | |   #
   |_|   #
         ##
 _     _ #
(_)   (_)#
 _     _ #
| |   | |#
| |___| |#
 \\_____/ #
         ##
 _     _ #
(_)   (_)#
 _     _ #
| |   | |#
 \\ \\ / / #
  \\___/  #
         ##
 _  _  _ #
(_)(_)(_)#
 _  _  _ #
| || || |#
| || || |#
 \\_____/ #
         ##
 _     _ #
(_)   (_)#
   ___   #
  |   |  #
 / / \\ \\ #
|_|   |_|#
         ##
 _     _ #
| |   | |#
| |___| |#
|_____  |#
 _____| |#
(_______|#
         ##
 _______ #
(_______)#
   __    #
  / /    #
 / /____ #
(_______)#
         ##
 ___ #
|  _)#
| |  #
| |  #
| |_ #
|___)#
     ##
 _     #
| |    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
    |_|#
       ##
 ___ #
(_  |#
  | |#
  | |#
 _| |#
(___|#
     ##
   __  #
  /  \\ #
 (_/\\_)#
       #
       #
       #
       ##
         #
         #
         #
         #
 _______ #
(_______)#
         ##
 _ #
( )#
 \\|#
   #
   #
   #
   ##
       #
       #
 _____ #
(____ |#
/ ___ |#
\\_____|#
       ##
 _     #
| |    #
| |__  #
|  _ \\ #
| |_) )#
|____/ #
       ##
       #
       #
  ____ #
 / ___)#
( (___ #
 \\____)#
       ##
     _ #
    | |#
  __| |#
 / _  |#
( (_| |#
 \\____|#
       ##
       #
       #
 _____ #
| ___ |#
| ____|#
|_____)#
       ##
    ___ #
   / __)#
 _| |__ #
(_   __)#
  | |   #
  |_|   #
        ##
       #
       #
  ____ #
 / _  |#
( (_| |#
 \\___ |#
(_____|##
 _     #
| |    #
| |__  #
|  _ \\ #
| | | |#
|_| |_|#
       ##
 _ #
(_)#
 _ #
| |#
| |#
|_|#
   ##
   _ #
  (_)#
   _ #
  | |#
  | |#
 _| |#
(__/ ##
 _     #
| |    #
| |  _ #
| |_/ )#
|  _ ( #
|_| \\_)#
       ##
 _  #
| | #
| | #
| | #
| | #
 \\_)#
    ##
       #
       #
 ____  #
|    \\ #
| | | |#
|_|_|_|#
       ##
       #
       #
 ____  #
|  _ \\ #
| | | |#
|_| |_|#
       ##
       #
       #
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
       #
       #
 ____  #
|  _ \\ #
| |_| |#
|  __/ #
|_|    ##
       #
       #
  ____ #
 / _  |#
| |_| |#
 \\__  |#
    |_|##
       #
       #
  ____ #
 / ___)#
| |    #
|_|    #
       ##
      #
      #
  ___ #
 /___)#
|___ |#
(___/ #
      ##
       #
   _   #
 _| |_ #
(_   _)#
  | |_ #
   \\__)#
       ##
       #
       #
 _   _ #
| | | |#
| |_| |#
|____/ #
       ##
       #
       #
 _   _ #
| | | |#
 \\ V / #
  \\_/  #
       ##
       #
       #
 _ _ _ #
| | | |#
| | | |#
 \\___/ #
       ##
       #
       #
 _   _ #
( \\ / )#
 ) X ( #
(_/ \\_)#
       ##
       #
       #
 _   _ #
| | | |#
| |_| |#
 \\__  |#
(____/ ##
       #
       #
 _____ #
(___  )#
 / __/ #
(_____)#
       ##
   __ #
  / _)#
 | |  #
( (   #
 | |_ #
  \\__)#
      ##
 _ #
| |#
|_|#
 _ #
| |#
|_|#
   ##
 __   #
(_ \\  #
  | | #
   ) )#
 _| | #
(__/  #
      ##
  __  _ #
 /  \\/ )#
(_/\\__/ #
        #
        #
        #
        ##
 _______ #
(_)___(_)#
 _______ #
|  ___  |#
| |   | |#
|_|   |_|#
         ##
 _______ #
(_)___(_)#
 _     _ #
| |   | |#
| |___| |#
 \\_____/ #
         ##
 _     _ #
(_)   (_)#
 _     _ #
| |   | |#
| |___| |#
 \\_____/ #
         ##
 _   _ #
(_) (_)#
 _____ #
(____ |#
/ ___ |#
\\_____|#
       ##
 _   _ #
(_) (_)#
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
 _   _ #
(_) (_)#
 _   _ #
| | | |#
| |_| |#
|____/ #
       ##
  ___  #
 / _ \\ #
| ( ) )#
| |( ( #
| | ) )#
|_|(_/ #
       ##
`,Wd=`flf2a$ 4 4 20 1 2
serifcap by Bruce M. Binder

$$@
$$@
$$@
$$@@
 _ @
/ \\@
\\_/@
(_)@@
 _ _ @
(_(_)@
     @
     @@
@
@
@
@@
@
@
@
@@
 _  _  @
(_)/ ) @
  / /_ @
 (_/(_)@@
 ___  @
( __) @
/ _) )@
\\___/ @@
 _ @
/_)@
   @
   @@
  _ @
 / )@
( ( @
 \\_)@@
 _  @
( \\ @
 ) )@
(_/ @@
@
@
@
@@
   _   @
 _( )_ @
(_   _)@
  (_)  @@
   @
   @
 _ @
/_)@@
     @
 ___ @
(___)@
     @@
   @
   @
 _ @
(_)@@
   _ @
  / )@
 / / @
(_/  @@
  __  @
 /  \\ @
( () )@
 \\__/ @@
 __ @
(  )@
 )( @
(__)@@
 ___ @
(__ \\@
/ __/@
\\___)@@
 ___ @
(__ )@
 (_ \\@
(___/@@
  __  @
 / ,) @
(_  _)@
  (_) @@
 ___ @
/ __)@
\\__ \\@
(___/@@
  _  @
 / ) @
/ , \\@
\\___/@@
 ___ @
(__ )@
 / / @
(_/  @@
 ___ @
( , )@
/ , \\@
\\___/@@
 ___ @
/ , \\@
\\   /@
 (_/ @@
 _ @
(_)@
 _ @
(_)@@
 _ @
(_)@
 _ @
/_)@@
  _ @
 / )@
( ( @
 \\_)@@
 ___ @
(___)@
 ___ @
(___)@@
 _  @
( \\ @
 ) )@
(_/ @@
 ___ @
(__ )@
 (_/ @
 (_) @@
@
@
@
@@
  __  @
 (  ) @
 /__\\ @
(_)(_)@@
 ___ @
(  ,)@
 ) ,\\@
(___/@@
  __ @
 / _)@
( (_ @
 \\__)@@
 ___  @
(   \\ @
 ) ) )@
(___/ @@
 ___ @
(  _)@
 ) _)@
(___)@@
 ___ @
(  _)@
 ) _)@
(_)  @@
  __ @
 / _)@
( (/\\@
 \\__/@@
 _  _ @
( )( )@
 )__( @
(_)(_)@@
 __ @
(  )@
 )( @
(__)@@
   __ @
  (  )@
 __)( @
(___/ @@
 _ _  @
( ) ) @
 )  \\ @
(_)\\_)@@
 __   @
(  )  @
 )(__ @
(____)@@
 __  __ @
(  \\/  )@
 )    ( @
(_/\\/\\_)@@
 _  _ @
( \\( )@
 )  ( @
(_)\\_)@@
  __  @
 /  \\ @
( () )@
 \\__/ @@
 ___ @
(  ,\\@
 ) _/@
(_)  @@
  __  @
 /  \\ @
( () )@
 \\___\\@@
 ___  @
(  ,) @
 )  \\ @
(_)\\_)@@
 ___ @
/ __)@
\\__ \\@
(___/@@
 ____ @
(_  _)@
  )(  @
 (__) @@
 _  _ @
( )( )@
 )()( @
 \\__/ @@
 _  _ @
( )( )@
 \\\\// @
 (__) @@
 _    _ @
( \\/\\/ )@
 \\    / @
  \\/\\/  @@
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
 _  _ @
( \\/ )@
 \\  / @
(__/  @@
 ___ @
(_  )@
 / / @
(___)@@
@
@
@
@@
 _   @
( \\  @
 \\ \\ @
  \\_)@@
@
@
@
@@
  __  @
 /  \\ @
(_/\\_)@
      @@
     @
     @
 ___ @
(___)@@
 _ @
(_\\@
   @
   @@
  __  @
 (  ) @
 /__\\ @
(_)(_)@@
 ___ @
(  ,)@
 ) ,\\@
(___/@@
  __ @
 / _)@
( (_ @
 \\__)@@
 ___  @
(   \\ @
 ) ) )@
(___/ @@
 ___ @
(  _)@
 ) _)@
(___)@@
 ___ @
(  _)@
 ) _)@
(_)  @@
  __ @
 / _)@
( (/\\@
 \\__/@@
 _  _ @
( )( )@
 )__( @
(_)(_)@@
 __ @
(  )@
 )( @
(__)@@
   __ @
  (  )@
 __)( @
(___/ @@
 _ _  @
( ) ) @
 )  \\ @
(_)\\_)@@
 __   @
(  )  @
 )(__ @
(____)@@
 __  __ @
(  \\/  )@
 )    ( @
(_/\\/\\_)@@
 _  _ @
( \\( )@
 )  ( @
(_)\\_)@@
  __  @
 /  \\ @
( () )@
 \\__/ @@
 ___ @
(  ,\\@
 ) _/@
(_)  @@
  __  @
 /  \\ @
( () )@
 \\___\\@@
 ___  @
(  ,) @
 )  \\ @
(_)\\_)@@
 ___ @
/ __)@
\\__ \\@
(___/@@
 ____ @
(_  _)@
  )(  @
 (__) @@
 _  _ @
( )( )@
 )()( @
 \\__/ @@
 _  _ @
( )( )@
 \\\\// @
 (__) @@
 _    _ @
( \\/\\/ )@
 \\    / @
  \\/\\/  @@
 _  _ @
( \\/ )@
 )  ( @
(_/\\_)@@
 _  _ @
( \\/ )@
 \\  / @
(__/  @@
 ___ @
(_  )@
 / / @
(___)@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
`,Ud=`flf2a$ 5 4 16 0 14 0 4992
Shadow by Glenn Chappell 6/93 -- based on Standard & SmShadow
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
$ $$@
$ $$@
$ $$@
$ $$@
$ $$@@
 $|$@
 $|$@
 _|$@
 _)$@
    @@
 $| )$@
 V V$ @
  $$  @
  $$  @
      @@
   $|  |$  @
 _  |_ |_|$@
 _  |_ |_|$@
   _| _|$  @
           @@
   $|$ @
 $ __)$@
 \\__ \\$@
 (   /$@
   _|$ @@
 _)  /$@
   $/$ @
  $/$  @
 _/ _)$@
       @@
 $ _ )$  @
  $_ \\ \\$@
 $( \`  <$@
 \\___/\\/$@
         @@
 $)$@
 /$ @
 $$ @
 $$ @
    @@
  $/$@
 $|$ @
 $|$ @
 $|$ @
 \\_\\$@@
 \\ \\$ @
   $|$@
   $|$@
   $|$@
  _/$ @@
   $\\$  @
 \\    /$@
 $_  _\\$@
   \\/$  @
        @@
        @
   $|$  @
 _   _|$@
   _|$  @
        @@
    @
    @
    @
 $)$@
 /$ @@
        @
        @
 _____|$@
   $$   @
        @@
    @
    @
    @
 _)$@
    @@
    $/$@
   $/$ @
  $/$  @
 _/$   @
       @@
  $_ \\$ @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 _ |$@
  $|$@
  $|$@
  _|$@
     @@
 ___ \\$ @
    ) |$@
  $__/$ @
 _____|$@
        @@
 ___ /$ @
   _ \\$ @
    ) |$@
 ____/$ @
        @@
 $|  |$  @
 $|  |$  @
 ___ __|$@
    _|$  @
         @@
 $___|$ @
 $__ \\$ @
    ) |$@
 ____/$ @
        @@
  $/$   @
 $ _ \\$ @
 $(   |$@
 \\___/$ @
        @@
 ___  |$@
    $/$ @
   $/$  @
  _/$   @
        @@
 $ _ )$ @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
  $_ \\$ @
 $(   |$@
 \\__  |$@
   __/$ @
        @@
    @
 _)$@
 $$ @
 _)$@
    @@
    @
 _)$@
 $$ @
 $)$@
 /$ @@
   $/$@
  $/$ @
 \\ \\$ @
  \\_\\$@
      @@
        @
 _____|$@
 _____|$@
        @
        @@
 \\ \\$ @
  \\ \\$@
   $/$@
  _/$ @
      @@
 __ \\$@
   $/$@
  _|$ @
  _)$ @
      @@
   $__ \\$ @
  $/ _\` |$@
 $| (   |$@
 \\ \\__,_|$@
  \\____/$ @@
    $\\$   @
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
 $__ )$ @
 $__ \\$ @
 $|   |$@
 ____/$ @
        @@
  $___|$@
 $|$    @
 $|$    @
 \\____|$@
        @@
 $__ \\$ @
 $|   |$@
 $|   |$@
 ____/$ @
        @@
 $____|$@
 $__|$  @
 $|$    @
 _____|$@
        @@
 $____|$@
 $|$    @
 $__|$  @
 _|$    @
        @@
  $___|$@
 $|$    @
 $|   |$@
 \\____|$@
        @@
 $|   |$@
 $|   |$@
 $___ |$@
 _|  _|$@
        @@
 _ _|$@
  $|$ @
  $|$ @
 ___|$@
      @@
     $|$@
     $|$@
 $\\   |$@
 \\___/$ @
        @@
 $|  /$@
 $' /$ @
 $. \\$ @
 _|\\_\\$@
       @@
 $|$    @
 $|$    @
 $|$    @
 _____|$@
        @@
 $ \\  |$@
 $|\\/ |$@
 $|   |$@
 _|  _|$@
        @@
 $ \\  |$@
 $  \\ |$@
 $|\\  |$@
 _| \\_|$@
        @@
  $_ \\$ @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 $ _ \\$ @
 $|   |$@
 $___/$ @
 _|$    @
        @@
  $_ \\$ @
 $|   |$@
 $|   |$@
 \\__\\_\\$@
        @@
 $ _ \\$ @
 $|   |$@
 $__ <$ @
 _| \\_\\$@
        @@
  $___|$ @
 \\___ \\$ @
      $|$@
 _____/$ @
         @@
 __ __|$@
   $|$  @
   $|$  @
   _|$  @
        @@
 $|   |$@
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 \\ \\     /$@
  \\ \\   /$ @
   \\ \\ /$  @
    \\_/$   @
           @@
 \\ \\        /$@
  \\ \\  \\   /$ @
   \\ \\  \\ /$  @
    \\_/\\_/$   @
              @@
 \\ \\  /$@
  \\  /$ @
   $ \\$ @
  _/\\_\\$@
        @@
 \\ \\   /$@
  \\   /$ @
    $|$  @
    _|$  @
         @@
 __  /$@
   $/$ @
  $/$  @
 ____|$@
       @@
 $_|$@
 $|$ @
 $|$ @
 $|$ @
 __|$@@
 \\ \\$   @
  \\ \\$  @
   \\ \\$ @
    \\_\\$@
        @@
 _ |$@
  $|$@
  $|$@
  $|$@
 __|$@@
 /\\\\$@
  $$ @
  $$ @
  $$ @
     @@
        @
        @
        @
   $$   @
 _____|$@@
 $)$@
 \\|$@
 $$ @
 $$ @
    @@
        @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
 $|$    @
 $__ \\$ @
 $|   |$@
 _.__/$ @
        @@
       @
  $__|$@
 $($   @
 \\___|$@
       @@
     $|$@
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
       @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
  $_|$@
 $|$  @
 $__|$@
 _|$  @
      @@
        @
  $_\` |$@
 $(   |$@
 \\__, |$@
 |___/$ @@
 $|$    @
 $__ \\$ @
 $| | |$@
 _| |_|$@
        @@
 _)$@
 $|$@
 $|$@
 _|$@
    @@
    _)$@
    $|$@
    $|$@
    $|$@
 ___/$ @@
 $|$   @
 $|  /$@
 $  <$ @
 _|\\_\\$@
       @@
 $|$@
 $|$@
 $|$@
 _|$@
    @@
            @
 $__ \`__ \\$ @
 $|   |   |$@
 _|  _|  _|$@
            @@
        @
 $__ \\$ @
 $|   |$@
 _|  _|$@
        @@
        @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
        @
 $__ \\$ @
 $|   |$@
 $.__/$ @
 _|$    @@
        @
  $_\` |$@
 $(   |$@
 \\__, |$@
     _|$@@
       @
 $ __|$@
 $|$   @
 _|$   @
       @@
       @
  $__|$@
 \\__ \\$@
 ____/$@
       @@
 $|$  @
 $__|$@
 $|$  @
 \\__|$@
      @@
        @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
         @
 \\ \\   /$@
  \\ \\ /$ @
   \\_/$  @
         @@
            @
 \\ \\  \\   /$@
  \\ \\  \\ /$ @
   \\_/\\_/$  @
            @@
        @
 \\ \\  /$@
  \`  <$ @
  _/\\_\\$@
        @@
        @
 $|   |$@
 $|   |$@
 \\__, |$@
 ____/$ @@
      @
 _  /$@
  $/$ @
 ___|$@
      @@
    $/$@
   $|$ @
 < <$  @
   $|$ @
   \\_\\$@@
 $|$@
 $|$@
 $|$@
 $|$@
 _|$@@
 \\ \\$  @
   $|$ @
   \` >$@
   $|$ @
  _/$  @@
 / _/$@
  $$  @
  $$  @
  $$  @
      @@
  _) \\ _)$@
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
 _)  _)$@
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
 _)  _)$@
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
 _)  _)$@
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
 _)  _)$@
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
 _)  _)$@
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
  $_ \\$@
 $|  /$@
 $|\\ \\$@
 $|__/$@
 _|$   @@
160  NO-BREAK SPACE
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@@
161  INVERTED EXCLAMATION MARK
 _)$@
 $|$@
 $|$@
 _|$@
    @@
162  CENT SIGN
   $|$ @
  $__)$@
 $($   @
 \\   )$@
   _|$ @@
163  POUND SIGN
    $,_\\$ @
 _  |_$   @
   $|$    @
  _,____|$@
          @@
164  CURRENCY SIGN
 \\  _  /$@
  $(   |$@
  $___ \\$@
 \\/    /$@
         @@
165  YEN SIGN
 \\ \\ /$ @
 __ __|$@
 __ __|$@
   _|$  @
        @@
166  BROKEN BAR
 $|$@
 _|$@
    @
 $|$@
 _|$@@
167  SECTION SIGN
    $_)$@
  $\\ \\$ @
 \\ \\\\ \\$@
  \\ \\_/$@
 (__/$  @@
168  DIAERESIS
 _)  _)$@
 $    $ @
 $    $ @
 $    $ @
        @@
169  COPYRIGHT SIGN
   $    \\$  @
  $  __| \\$ @
 $  (     |$@
 \\ \\___| /$ @
  \\_____/$  @@
170  FEMININE ORDINAL INDICATOR
  $_\` |$@
 \\__,_|$@
 _____|$@
   $$   @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   $/ /$@
  $/ /$ @
 \\ \\ \\$ @
  \\_\\_\\$@
        @@
172  NOT SIGN
         @
 _____ |$@
      _|$@
    $$   @
         @@
173  SOFT HYPHEN
        @
        @
 _____|$@
   $$   @
        @@
174  REGISTERED SIGN
   $    \\$  @
  $  _ \\ \\$ @
 $     /  |$@
 \\  _|_\\ /$ @
  \\_____/$  @@
175  MACRON
 _____|$@
   $$   @
   $$   @
   $$   @
        @@
176  DEGREE SIGN
  $ \\$ @
 $(  |$@
 \\__/$ @
   $$  @
       @@
177  PLUS-MINUS SIGN
   $|$  @
 _   _|$@
   _|$  @
 _____|$@
        @@
178  SUPERSCRIPT TWO
 _  )$@
  $/$ @
 ___|$@
  $$  @
      @@
179  SUPERSCRIPT THREE
 __ /$@
  _ \\$@
 ___/$@
  $$  @
      @@
180  ACUTE ACCENT
 _/$@
 $$ @
 $$ @
 $$ @
    @@
181  MICRO SIGN
        @
 $|   |$@
 $|   |$@
 $._,_|$@
 _|$    @@
182  PILCROW SIGN
  $    |$@
 $(  | |$@
 \\__ | |$@
    _|_|$@
         @@
183  MIDDLE DOT
    @
 _)$@
 $$ @
 $$ @
    @@
184  CEDILLA
    @
    @
    @
 $$ @
 _)$@@
185  SUPERSCRIPT ONE
 _ |$@
  $|$@
  _|$@
  $$ @
     @@
186  MASCULINE ORDINAL INDICATOR
  $_ \\$@
 \\___/$@
 ____|$@
   $$  @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 \\ \\ \\$ @
  \\ \\ \\$@
   $/ /$@
  _/_/$ @
        @@
188  VULGAR FRACTION ONE QUARTER
 _ |   /$    @
  $|  / | |$ @
  _| / __ _|$@
   _/    _|$ @
             @@
189  VULGAR FRACTION ONE HALF
 _ |   /$   @
  $|  /_  )$@
  _| /   /$ @
   _/  ___|$@
            @@
190  VULGAR FRACTION THREE QUARTERS
 __ /   /$    @
  _ \\  / | |$ @
 ___/ / __ _|$@
    _/    _|$ @
              @@
191  INVERTED QUESTION MARK
   _)$ @
   $|$ @
  $/$  @
 \\___|$@
       @@
192  LATIN CAPITAL LETTER A WITH GRAVE
  \\_\\$  @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
   _/$  @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   /\\\\$ @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
  / _/$ @
   $\\$  @
  $_ \\$ @
 _/  _\\$@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _) \\ _)$@
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    ( )$  @
   $_ \\$  @
  $___ \\$ @
 _/    _\\$@
          @@
198  LATIN CAPITAL LETTER AE
    $ ____|$@
   $/ __|$  @
  $__ |$    @
 _/  _____|$@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
  $___|$@
 $|$    @
 $|$    @
 \\____|$@
    _)$ @@
200  LATIN CAPITAL LETTER E WITH GRAVE
  \\_\\$  @
 $____|$@
 $ _|$  @
 _____|$@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
   _/$  @
 $____|$@
 $ _|$  @
 _____|$@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   /\\\\$ @
 $____|$@
 $ _|_$ @
 _____|$@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 _)  _)$@
 $____|$@
 $ _|$  @
 _____|$@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
 \\_\\$ @
 _ _|$@
 | |$ @
 ___|$@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
  _/$ @
 _ _|$@
  $|$ @
 ___|$@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
 /\\\\$ @
 _ _|$@
  $|$ @
 ___|$@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 _)  _)$@
  _ _|$ @
   $|$  @
  ___|$ @
        @@
208  LATIN CAPITAL LETTER ETH
    __ \\$ @
    |   |$@
 __ __| |$@
   ____/$ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
  / _/$@
 $ \\ |$@
 $.  |$@
 _|\\_|$@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
  \\_\\$  @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
   _/$  @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   /\\\\$ @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
  / _/$ @
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 _)  _)$@
  $_ \\$ @
 $|   |$@
 \\___/$ @
        @@
215  MULTIPLICATION SIGN
      @
  \\ \\$@
 ,  '$@
 \\/\\/$@
      @@
216  LATIN CAPITAL LETTER O WITH STROKE
  $_ /$ @
 $| / |$@
 $ /  |$@
 _/__/$ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
  \\_\\$  @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
   _/$  @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   /\\\\$ @
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 _)  _)$@
 $|   |$@
 $|   |$@
 \\___/$ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    _/$ @
 \\ \\  /$@
  \\  /$ @
   _|$  @
        @@
222  LATIN CAPITAL LETTER THORN
 $|$    @
 $ __ \\$@
 $ ___/$@
 _|$    @
        @@
223  LATIN SMALL LETTER SHARP S
  $_ \\$@
 $|  /$@
 $|\\ \\$@
 $|__/$@
 _|$   @@
224  LATIN SMALL LETTER A WITH GRAVE
  \\_\\$  @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
   _/_$ @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   /\\\\$ @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
227  LATIN SMALL LETTER A WITH TILDE
  / _/$ @
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
 _)  _)$@
  $_\` |$@
 $(   |$@
 \\__,_|$@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
   ( )$ @
  $_ '|$@
 $(   |$@
 \\__,_|$@
        @@
230  LATIN SMALL LETTER AE
           @
  $_\`  _ \\$@
 $(    __/$@
 \\__,____|$@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  $__|$@
 $($   @
 \\___|$@
   _)$ @@
232  LATIN SMALL LETTER E WITH GRAVE
  \\_\\$ @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
   _/$ @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
  /\\\\$ @
  $_ \\$@
 $ __/$@
 \\___|$@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
 _)  _)$@
  $_ \\$ @
 $ __/$ @
 \\___|$ @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 \\_\\$@
  $|$@
  $|$@
  _|$@
     @@
237  LATIN SMALL LETTER I WITH ACUTE
 _/$@
 $|$@
 $|$@
 _|$@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
 /\\\\$@
 $|$ @
 $|$ @
 _|$ @
     @@
239  LATIN SMALL LETTER I WITH DIAERESIS
 _)  _)$@
   $|$  @
   $|$  @
   _|$  @
        @@
240  LATIN SMALL LETTER ETH
   \`  <$ @
   \\/\\ |$@
  $__\` |$@
 \\____/$ @
         @@
241  LATIN SMALL LETTER N WITH TILDE
  / _/$ @
 $'_ \\$ @
 $|   |$@
 _|  _|$@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
  \\_\\$  @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
   _/$  @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   /\\\\$ @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
  / _/$ @
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
 _)  _)$@
  $_ \\$ @
 $(   |$@
 \\___/$ @
        @@
247  DIVISION SIGN
        @
   _)$  @
 _____|$@
   _)$  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
  $_ /\\$ @
 $( /  |$@
 \\_/__/$ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
  \\_\\$  @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
   _/$  @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   /\\\\$ @
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
 _)  _)$@
 $|   |$@
 $|   |$@
 \\__,_|$@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
   _/$  @
 $|   |$@
 $|   |$@
 \\__, |$@
 ____/$ @@
254  LATIN SMALL LETTER THORN
 $|$    @
 $__ \\$ @
 $|   |$@
 $.__/$ @
 _|$    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 _)  _)$@
 $|   |$@
 $|   |$@
 \\__, |$@
 ____/$ @@
`,Dd=`flf2a$ 6 5 16 15 16
Speed by Claude Martins 2/95 -- based on Slant
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
6    - height of a character
5    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
______@
___  /@
__  / @
 /_/  @
(_)   @
      @@
___ _ @
_( | )@
_|/|/ @
  $   @
 $    @
      @@
_______ __ @
____/ // /_@
_ _  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
_______@
____/ /@
__  __/@
_(_  ) @
/  _/  @
/_/    @@
____   __@
__(_)_/_/@
____/_/  @
__/_/_   @
/_/ (_)  @
         @@
______   @
__( _ )  @
_  __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
___ @
_( )@
_|/ @
 $  @
$   @
    @@
_______@
____/_/@
__  /  @
_  /   @
/ /    @
|_|    @@
______ @
____| |@
____  /@
___  / @
__/_/  @
/_/    @@
_____  @
____/|_@
_|    /@
/_ __| @
 |/    @
       @@
       @
______ @
___/ /_@
/_  __/@
 /_/   @
       @@
    @
    @
    @
___ @
_( )@
_|/ @@
        @
        @
________@
_/_____/@
   $    @
        @@
    @
    @
    @
___ @
_(_)@
    @@
_________@
______/_/@
____/_/  @
__/_/    @
/_/      @
         @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\____/  @
        @@
______@
__<  /@
__  / @
_  /  @
/_/   @
      @@
______ @
__|__ \\@
____/ /@
_  __/ @
/____/ @
       @@
________@
__|__  /@
___/_ < @
____/ / @
/____/  @
        @@
_____ __@
__  // /@
_  // /_@
/__  __/@
  /_/   @
        @@
__________@
___  ____/@
______ \\  @
 ____/ /  @
/_____/   @
          @@
________@
__  ___/@
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
______@
/__  /@
__  / @
_  /  @
/_/   @
      @@
_______ @
__( __ )@
_  __  |@
/ /_/ / @
\\____/  @
        @@
_______ @
__  __ \\@
_  /_/ /@
_\\__, / @
/____/  @
        @@
      @
_____ @
___(_)@
___   @
_(_)  @
      @@
      @
_____ @
___(_)@
___   @
_( )  @
_|/   @@
____@
_  /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
_______@
_ ____/@
/____/ @
  $    @
       @@
___  @
__ \\ @
___ \\@
__  /@
_/_/ @
     @@
_____ @
_ __ \\@
__/ _/@
_/_/  @
(_)   @
      @@
_________ @
__  ____ \\@
_  / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
_______ @
___    |@
__  /| |@
_  ___ |@
/_/  |_|@
        @@
________ @
___  __ )@
__  __  |@
_  /_/ / @
/_____/  @
         @@
_________@
__  ____/@
_  /     @
/ /___   @
\\____/   @
         @@
________ @
___  __ \\@
__  / / /@
_  /_/ / @
/_____/  @
         @@
__________@
___  ____/@
__  __/   @
_  /___   @
/_____/   @
          @@
__________@
___  ____/@
__  /_    @
_  __/    @
/_/       @
          @@
_________@
__  ____/@
_  / __  @
/ /_/ /  @
\\____/   @
         @@
______  __@
___  / / /@
__  /_/ / @
_  __  /  @
/_/ /_/   @
          @@
________@
____  _/@
 __  /  @
__/ /   @
/___/   @
        @@
_________@
______  /@
___ _  / @
/ /_/ /  @
\\____/   @
         @@
______ __@
___  //_/@
__  ,<   @
_  /| |  @
/_/ |_|  @
         @@
______ @
___  / @
__  /  @
_  /___@
/_____/@
       @@
______  ___@
___   |/  /@
__  /|_/ / @
_  /  / /  @
/_/  /_/   @
           @@
_____   __@
___  | / /@
__   |/ / @
_  /|  /  @
/_/ |_/   @
          @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\____/  @
        @@
________ @
___  __ \\@
__  /_/ /@
_  ____/ @
/_/      @
         @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\___\\_\\ @
        @@
________ @
___  __ \\@
__  /_/ /@
_  _, _/ @
/_/ |_|  @
         @@
________@
__  ___/@
_____ \\ @
____/ / @
/____/  @
        @@
________@
___  __/@
__  /   @
_  /    @
/_/     @
        @@
_____  __@
__  / / /@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
___    __@
__ |  / /@
__ | / / @
__ |/ /  @
_____/   @
         @@
___       __@
__ |     / /@
__ | /| / / @
__ |/ |/ /  @
____/|__/   @
            @@
____  __@
__  |/ /@
__    / @
_    |  @
/_/|_|  @
        @@
__  __@
_ \\/ /@
__  / @
_  /  @
/_/   @
      @@
______@
___  /@
__  / @
_  /__@
/____/@
      @@
________@
____  _/@
___  /  @
__  /   @
_  /    @
/__/    @@
___    @
__ \\   @
___ \\  @
____ \\ @
______\\@
       @@
________@
____/  /@
____  / @
___  /  @
__/ /   @
/__/    @@
_ //|@
_|/||@
  $  @
 $   @
$    @
     @@
        @
        @
        @
        @
________@
_/_____/@@
___ @
_( )@
__V @
 $  @
$   @
    @@
        @
______ _@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
______  @
___  /_ @
__  __ \\@
_  /_/ /@
/_.___/ @
        @@
       @
_______@
_  ___/@
/ /__  @
\\___/  @
       @@
_________@
______  /@
_  __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
_____ @
_  _ \\@
/  __/@
\\___/ @
      @@
________@
___  __/@
__  /_  @
_  __/  @
/_/     @
        @@
         @
_______ _@
__  __ \`/@
_  /_/ / @
_\\__, /  @
/____/   @@
______  @
___  /_ @
__  __ \\@
_  / / /@
/_/ /_/ @
        @@
_____ @
___(_)@
__  / @
_  /  @
/_/   @
      @@
________ @
______(_)@
_____  / @
____  /  @
___  /   @
/___/    @@
______  @
___  /__@
__  //_/@
_  ,<   @
/_/|_|  @
        @@
______@
___  /@
__  / @
_  /  @
/_/   @
      @@
            @
_______ ___ @
__  __ \`__ \\@
_  / / / / /@
/_/ /_/ /_/ @
            @@
        @
_______ @
__  __ \\@
_  / / /@
/_/ /_/ @
        @@
       @
______ @
_  __ \\@
/ /_/ /@
\\____/ @
       @@
         @
________ @
___  __ \\@
__  /_/ /@
_  .___/ @
/_/      @@
        @
______ _@
_  __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
________@
__  ___/@
_  /    @
/_/     @
        @@
        @
________@
__  ___/@
_(__  ) @
/____/  @
        @@
_____ @
__  /_@
_  __/@
/ /_  @
\\__/  @
      @@
        @
____  __@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
        @
___   __@
__ | / /@
__ |/ / @
_____/  @
        @@
           @
___      __@
__ | /| / /@
__ |/ |/ / @
____/|__/  @
           @@
        @
____  __@
__  |/_/@
__>  <  @
/_/|_|  @
        @@
         @
_____  __@
__  / / /@
_  /_/ / @
_\\__, /  @
/____/   @@
      @
______@
___  /@
__  /_@
_____/@
      @@
_______@
____/_/@
__/_/  @
< <    @
/ /    @
\\_\\    @@
_______@
____  /@
___  / @
__  /  @
_  /   @
/_/    @@
____ _ @
____| |@
____/ /@
____>_>@
__/_/  @
/_/    @@
__/\\//@
_//\\/ @
  $   @
 $    @
$     @
      @@
_____  _ @
___(_)(_)@
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_)_(_)@
_  __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\__,_/   @
         @@
_________ @
____  __ \\@
___  / / /@
__  /_| | @
_  //__/  @
/_/       @@
160
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161
_____ @
___(_)@
__  / @
_  /  @
/_/   @
      @@
162
_______@
____/ /@
_  ___/@
/ /__  @
\\  _/  @
/_/    @@
163
_________ @
____  ,__\\@
___/ /_   @
__/ /___  @
(_,____/  @
          @@
164
___ /|___/|@
___| __  / @
__  /_/ /  @
_ ___  |   @
|/   |/    @
           @@
165
___ ____@
___| / /@
_ _  __/@
/_  __/ @
 /_/    @
        @@
166
_______@
____  /@
_____/ @
____   @
_  /   @
/_/    @@
167
_______ @
____/ _)@
__  | | @
_| || | @
_| |_/  @
(__/    @@
168
___   _ @
_(_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169
__________  @
___  _____\\ @
__  / ___/ |@
_  / /__  / @
|  \\___/ /  @
 \\______/   @@
170
______ _@
__  _ \`/@
__\\_,_/ @
/____/  @
 $      @
        @@
171
______@
_  / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172
        @
________@
_/___  /@
    /_/ @
  $     @
        @@
173
       @
       @
_______@
_/____/@
   $   @
       @@
174
__________  @
___  ___  \\ @
__  / _ \\  |@
_  / , _/ / @
| /_/|_| /  @
 \\______/   @@
175
________@
_/_____/@
   $    @
  $     @
 $      @
        @@
176
_____ @
_  _ \\@
/ // /@
\\___/ @
 $    @
      @@
177
________ @
_____/ /_@
____  __/@
___/_/_  @
/_____/  @
         @@
178
__ ___ @
__|_  |@
_  __/ @
/____/ @
 $     @
       @@
179
__ ____@
__|_  /@
__/_ < @
/____/ @
 $     @
       @@
180
____@
_/_/@
  $ @
 $  @
$   @
    @@
181
          @
______  __@
___  / / /@
__  /_/ / @
_  ._,_/  @
/_/       @@
182
_________@
_  _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183
    @
___ @
_(_)@
  $ @
 $  @
    @@
184 
    @
    @
    @
    @
___ @
_/_)@@
185
_____@
_<  /@
_  / @
/_/  @
$    @
     @@
186
______ @
__  _ \\@
__\\___/@
/____/ @
 $     @
       @@
187
_____  @
__ \\ \\ @
___ \\ \\@
__  / /@
___/_/ @
       @@
188
_____   __ @
_<  / _/_/ @
_/ /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189
_____   __   @
_<  / _/_/__ @
_/ /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190
__ ____    __ @
__|_  /  _/_/ @
__/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191
___ _ @
___(_)@
__  / @
/ _/_ @
\\___/ @
      @@
192
______ @
____\\_\\@
__  _ |@
_  __ |@
/_/ |_|@
       @@
193
_______@
____/_/@
__  _ |@
_  __ |@
/_/ |_|@
       @@
194
____ //|@
____|/||@
__  _ | @
_  __ | @
/_/ |_| @
        @@
195
_____/\\//@
____//\\/ @
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
196
_____  _ @
___(_)(_)@
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
197
____(())@
___    |@
__  /| |@
_  ___ |@
/_/  |_|@
        @@
198
______________@
___      ____/@
__  /|  __/   @
_  __  /___   @
/_/ /_____/   @
              @@
199
_________@
__  ____/@
_  /     @
/ /___   @
\\____/   @
 /_)     @@
200
______ @
____\\_\\@
__  __/@
_  _/  @
/___/  @
       @@
201
_______@
____/_/@
__  __/@
_  _/  @
/___/  @
       @@
202
____ //|@
____|/||@
__  __/ @
_  _/   @
/___/   @
        @@
203
_____  _ @
___(_)(_)@
__  __/  @
_  _/    @
/___/    @
         @@
204
______ @
____\\_\\@
__   _/@
__/ /  @
/___/  @
       @@
205
_______@
____/_/@
__   _/@
__/ /  @
/___/  @
       @@
206
____ //|@
____|/||@
__   _/ @
__/ /   @
/___/   @
        @@
207
_____  _ @
___(_)(_)@
__   _/  @
__/ /    @
/___/    @
         @@
208
_________ @
____  __ \\@
___  /_/ /@
/_  __/ / @
 /_____/  @
          @@
209
_____/\\//@
____//\\/ @
__  |/ / @
_     /  @
/_/|_/   @
         @@
210
______ @
____\\_\\@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
211
_______@
____/_/@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
212
___ //|@
___|/||@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
213
____/\\//@
___//\\/ @
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
214
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
215
     @
__   @
_/|/|@
 > < @
|/|/ @
     @@
216
________ @
__  _// \\@
_  //// /@
/ //// / @
\\_//__/  @
         @@
217
______  @
____\\_\\_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
218
_______ @
____/_/_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
219
___ //| @
___|/||_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
220
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
221
______ @
___/_/_@
__ \\/ /@
___  / @
__/_/  @
       @@
222
______  @
___  /_ @
__  __ \\@
_  ____/@
/_/     @
        @@
223
_________ @
____  __ \\@
___  / / /@
__  /_| | @
_  //__/  @
/_/       @@
224
______  @
____\\_\\_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225
_______ @
____/_/_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226
___ //| @
___|/||_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227
____/\\//@
___//\\/_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228
____   _ @
__(_)_(_)@
_  __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229
_______ @
____(())@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230
           @
______ ___ @
_  __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231
       @
_______@
_  ___/@
/ /__  @
\\___/  @
/_)    @@
232
_____ @
___\\_\\@
_  _ \\@
/  __/@
\\___/ @
      @@
233
______@
___/_/@
_  _ \\@
/  __/@
\\___/ @
      @@
234
___ //|@
___|/||@
_  _ \\ @
/  __/ @
\\___/  @
       @@
235
____  _ @
__(_)(_)@
_  _ \\  @
/  __/  @
\\___/   @
        @@
236
_____ @
___\\_\\@
__  / @
_  /  @
/_/   @
      @@
237
______@
___/_/@
__  / @
_  /  @
/_/   @
      @@
238
___ //|@
___|/||@
__  /  @
_  /   @
/_/    @
       @@
239
_ _   _ @
_(_)_(_)@
__/ /   @
_  /    @
/_/     @
        @@
240
____ || @
____=||=@
____ || @
/ __\` | @
\\____/  @
        @@
241
_____/\\//@
____//\\/ @
__  __ \\ @
_  / / / @
/_/ /_/  @
         @@
242
______ @
____\\_\\@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
243
_______@
____/_/@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
244
___ //|@
___|/||@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
245
____/\\//@
___//\\/ @
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
246
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
247
       @
_____  @
___(_)_@
/_____/@
 (_)   @
       @@
248
        @
_______ @
_  _// \\@
/ //// /@
\\_//__/ @
        @@
249
______  @
____\\_\\_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
250
_______ @
____/_/_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
251
___ //| @
___|/||_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
252
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\__,_/   @
         @@
253
________ @
_____/_/_@
__  / / /@
_  /_/ / @
_\\__, /  @
/____/   @@
254
_______  @
____  /_ @
___  __ \\@
__  /_/ /@
_  .___/ @
/_/      @@
255
_____   _ @
___(_) (_)@
__  / / / @
_  /_/ /  @
_\\__, /   @
/____/    @@
`,Fd=`flf2a$ 4 4 10 63 13 0 24511 0
Author: Marcin \`stforek\` Glinski
Date: 2003/6/15 20:02:23
Version: 1.0
-------------------------------------------------

* 2003-06-15	Changed: CDPQRSY6%@
		  Added: $/=\\|_{}
* 2003-06-09	  Added: A-Z 0-9 !@%^&*()-+[]()\`'":;~?<>


---------------------------------------------------
This font has been created using JavE's FIGlet font
export assistant.              [http://www.jave.de]
$ #
$ #
$ #
$ ##
  _  #
 / \\ #
 \\_/ #
 (_) ##
___ #
|// #
    #
    ##
##
 #
 #
 ##
   ||_ #
 /'__/ #
 \`._\`. #
 \\_||/ ##
 _ _  #
[// | #
 / /  #
|_//] ##
  __,   #
 (_ /_  #
 /\`X\\/ |#
\`\\_/\\| |##
 _  #
\`.\\ #
    #
    ##
  _  #
 / | #
( (  #
 \\_| ##
 _   #
| \\  #
 ) ) #
|_/  ##
      #
 //\\  #
\`\\//' #
      ##
   _    #
 _| |_  #
|_   _| #
  |_|   ##
    #
    #
 _, #
[_/ ##
     #
 __  #
|__| #
     ##
   #
   #
__ #
\\/ ##
   _  #
  / | #
 / /  #
|_/   ##
  __   #
 /  \\  #
| // | #
 \\__/  ##
 __  #
/  | #
\`7 | #
 |_| ##
 ___  #
(_  | #
 / /  #
|___| ##
 __   #
|__\`. #
 |_ | #
|__.' ##
 _  _   #
| || |  #
\`._  _| #
   |_|  ##
 ___  #
| __| #
\`._\`. #
!__.' ##
  ___  #
 / __| #
| ,_ \\ #
 \\___/ ##
 ___  #
|_  | #
 / /  #
|_/   ##
 ___  #
/ _ \\ #
) _ ( #
\\___/ ##
 ___  #
/ _ \\ #
\\__ / #
 /_/  ##
 _  #
 \\| #
 \\| #
    ##
 _  #
 \\| #
 _] #
    ##
  __ #
 / / #
< <  #
\`\\_\\ ##
  ____ #
 )___/ #
 /___( #
       ##
__   #
\\ \\  #
 > > #
/_/  ##
 ____  #
 \\_  | #
  /_(  #
  (_)  ##
   _    #
 /.-.\\  #
( \\_(l_,#
 \`---'\` ##
  __   #
 /  \\  #
| /\\ | #
|_||_| ##
 __  #
|  \\ #
| -< #
|__/ ##
  ___ #
 / _/ #
| \\__ #
 \\__/ ##
 __   #
| _\\  #
| v | #
|__/  ##
 ___  #
| __| #
| _|  #
|___| ##
 ___  #
| __| #
| _|  #
|_|   ##
  __  #
 / _] #
| [/\\ #
 \\__/ ##
 _  _  #
| || | #
| >< | #
|_||_| ##
 _  #
| | #
| | #
|_| ##
 __   #
|_ \\  #
 _\\ | #
/___| ##
 _  __ #
| |/ / #
|   <  #
|_|\\_\\ ##
 _    #
| |   #
| |_  #
|___| ##
 __ __  #
|  V  | #
| \\_/ | #
|_| |_| ##
 __  _  #
|  \\| | #
| | ' | #
|_|\\__| ##
  __   #
 /__\\  #
| \\/ | #
 \\__/  ##
 ___  #
| _,\\ #
| v_/ #
|_|   ##
  __   #
 /__\\  #
| \\/ | #
 \\_V_\\ ##
 ___  #
| _ \\ #
| v / #
|_|_\\ ##
  __  #
/' _/ #
\`._\`. #
|___/ ##
 _____  #
|_   _| #
  | |   #
  |_|   ##
 _  _  #
| || | #
| \\/ | #
 \\__/  ##
 _   _  #
| \\ / | #
\`\\ V /' #
  \\_/   ##
 _   _  #
| | | | #
| 'V' | #
!_/ \\_! ##
__   __ #
\\ \\_/ / #
 > , <  #
/_/ \\_\\ ##
 __   __#
 \\ \`v' /#
  \`. .' #
   !_!  ##
  ___  #
 |_  | #
  / /  #
 |___| ##
 ___  #
| __| #
| |_  #
|___| ##
 _    #
| \\   #
 \\ \\  #
  \\_| ##
 ___  #
|_  | #
 _| | #
|___| ##
  /\\  #
 |/\\| #
      #
      ##
       #
       #
 ____  #
|____| ##
\`#
 #
 #
 ##
  __   #
 /  \\  #
| /\\ | #
|_||_| ##
 __  #
|  \\ #
| -< #
|__/ ##
  ___ #
 / _/ #
| \\__ #
 \\__/ ##
 __   #
| _\\  #
| v | #
|__/  ##
 ___  #
| __| #
| _|  #
|___| ##
 ___  #
| __| #
| _|  #
|_|   ##
  __  #
 / _] #
| [/\\ #
 \\__/ ##
 _  _  #
| || | #
| >< | #
|_||_| ##
 _  #
| | #
| | #
|_| ##
 __   #
|_ \\  #
 _\\ | #
/___| ##
 _  __ #
| |/ / #
|   <  #
|_|\\_\\ ##
 _    #
| |   #
| |_  #
|___| ##
 __ __  #
|  V  | #
| \\_/ | #
|_| |_| ##
 __  _  #
|  \\| | #
| | ' | #
|_|\\__| ##
  __   #
 /__\\  #
| \\/ | #
 \\__/  ##
 ___  #
| _,\\ #
| v_/ #
|_|   ##
  __   #
 /__\\  #
| \\/ | #
 \\_V_\\ ##
 ___  #
| _ \\ #
| v / #
|_|_\\ ##
  __  #
/' _/ #
\`._\`. #
|___/ ##
 _____  #
|_   _| #
  | |   #
  |_|   ##
 _  _  #
| || | #
| \\/ | #
 \\__/  ##
 _   _  #
| \\ / | #
\`\\ V /' #
  \\_/   ##
 _   _  #
| | | | #
| 'V' | #
!_/ \\_! ##
__   __ #
\\ \\_/ / #
 > , <  #
/_/ \\_\\ ##
 __   __#
 \\ \`v' /#
  \`. .' #
   !_!  ##
  ___  #
 |_  | #
  / /  #
 |___| ##
  _  #
 / | #
{ {  #
 \\_| ##
 _  #
| | #
| | #
|_| ##
 _   #
| \\  #
 } } #
|_/  ##
  _     #
./ \\_/| #
|/\`\\_/  #
        ##
  __   #
 /  \\  #
| /\\ | #
|_||_| ##
  __   #
 /__\\  #
| \\/ | #
 \\__/  ##
 _  _  #
| || | #
| \\/ | #
 \\__/  ##
  __   #
 /  \\  #
| /\\ | #
|_||_| ##
  __   #
 /__\\  #
| \\/ | #
 \\__/  ##
 _  _  #
| || | #
| \\/ | #
 \\__/  ##
ß#
 #
 #
 ##

`,Gd=`flf2a$ 7 6 20 15 3
Stop by David Walton <walton@cs.ucdavis.edu>
Derived from Rounded by Nick Miners N.M.Miners@durham.ac.uk
21 August 1994
$$#
$$#
$$#
$$#
$$#
$$#
$$##
 _ #
| |#
| |#
|_|#
 _ #
|_|#
   ##
 _  _ #
( )( )#
|/ |/ #
      #
      #
      #
      ##
   __  _   #
 _|  || |_ #
(_   ||  _)#
 _|  || |_ #
(_   ||  _)#
  |__||_|  #
           ##
   _   #
 _| |_ #
|  ___)#
|___  |#
(_   _|#
  |_|  #
       ##
 _   _ #
(_) | |#
   / / #
  / /  #
 / / _ #
|_| (_)#
       ##
  ___   #
 / _ \\  #
( (_) ) #
 ) _ (  #
( (/  \\ #
 \\__/\\_)#
        ##
 _ #
( )#
|/ #
   #
   #
   #
   ##
   __ #
  / _)#
 / /  #
( (   #
 \\ \\_ #
  \\__)#
      ##
 __   #
(_ \\  #
  \\ \\ #
   ) )#
 _/ / #
(__/  #
      ##
 _  _  _ #
( \\| |/ )#
 \\  _  / #
(_ (_) _)#
 /     \\ #
(_/|_|\\_)#
         ##
       #
   _   #
 _| |_ #
(_   _)#
  |_|  #
       #
       ##
   #
   #
   #
   #
 _ #
( )#
|/ ##
     #
     #
 ___ #
(___)#
     #
     #
     ##
   #
   #
   #
   #
 _ #
(_)#
   ##
     _ #
    | |#
   / / #
  / /  #
 / /   #
|_|    #
       ##
  ______ #
 / __   |#
| | //| |#
| |// | |#
|  /__| |#
 \\_____/ #
         ##
  __ #
 /  |#
/_/ |#
  | |#
  | |#
  |_|#
     ##
 ______  #
(_____ \\ #
  ____) )#
 /_____/ #
 _______ #
(_______)#
         ##
 ________#
(_______/#
   ____  #
  (___ \\ #
 _____) )#
(______/ #
         ##
   __    #
  / /    #
 / /____ #
|___   _)#
    | |  #
    |_|  #
         ##
 _______ #
(_______)#
 ______  #
(_____ \\ #
 _____) )#
(______/ #
         ##
    __  #
   / /  #
  / /_  #
 / __ \\ #
( (__) )#
 \\____/ #
        ##
 _______ #
(_______)#
      _  #
     / ) #
    / /  #
   (_/   #
         ##
  _____  #
 / ___ \\ #
( (   ) )#
 > > < < #
( (___) )#
 \\_____/ #
         ##
  ____  #
 / __ \\ #
( (__) )#
 \\__  / #
   / /  #
  /_/   #
        ##
   #
   #
 _ #
(_)#
 _ #
(_)#
   ##
   #
   #
 _ #
(_)#
 _ #
( )#
|/ ##
       #
  _  _ #
 / )/ )#
( (( ( #
 \\_)\\_)#
       #
       ##
     #
 ___ #
(___)#
 ___ #
(___)#
     #
     ##
       #
 _  _  #
( \\( \\ #
 ) )) )#
(_/(_/ #
       #
       ##
 ____  #
(___ \\ #
    ) )#
   /_/ #
   _   #
  (_)  #
       ##
 $       $ #
 $       $ #
 $       $ #
 $    _|_$ #
 $__   | $ #
$(_/|_/|_/$#
 $       $ ##
        #
   /\\   #
  /  \\  #
 / /\\ \\ #
| |__| |#
|______|#
        ##
 ______  #
(____  \\ #
 ____)  )#
|  __  ( #
| |__)  )#
|______/ #
         ##
  ______ #
 / _____)#
| /      #
| |      #
| \\_____ #
 \\______)#
         ##
 _____   #
(____ \\  #
 _   \\ \\ #
| |   | |#
| |__/ / #
|_____/  #
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |_____ #
|_______)#
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |      #
|_|      #
         ##
  ______ #
 / _____)#
| /  ___ #
| | (___)#
| \\____/|#
 \\_____/ #
         ##
 _     _ #
| |   | |#
| |__ | |#
|  __)| |#
| |   | |#
|_|   |_|#
         ##
 _____ #
(_____)#
   _   #
  | |  #
 _| |_ #
(_____)#
       ##
   _____ #
  (_____)#
     _   #
    | |  #
 ___| |  #
(____/   #
         ##
 _    _ #
| |  / )#
| | / / #
| |< <  #
| | \\ \\ #
|_|  \\_)#
        ##
 _       #
| |      #
| |      #
| |      #
| |_____ #
|_______)#
         ##
 ______  #
|  ___ \\ #
| | _ | |#
| || || |#
| || || |#
|_||_||_|#
         ##
 ______  #
|  ___ \\ #
| |   | |#
| |   | |#
| |   | |#
|_|   |_|#
         ##
  _____  #
 / ___ \\ #
| |   | |#
| |   | |#
| |___| |#
 \\_____/ #
         ##
 ______  #
(_____ \\ #
 _____) )#
|  ____/ #
| |      #
|_|      #
         ##
  _____  #
 / ___ \\ #
| |   | |#
| |   |_|#
 \\ \\____ #
  \\_____)#
         ##
 ______  #
(_____ \\ #
 _____) )#
(_____ ( #
      | |#
      |_|#
         ##
    _    #
   | |   #
    \\ \\  #
     \\ \\ #
 _____) )#
(______/ #
         ##
 _______ #
(_______)#
 _       #
| |      #
| |_____ #
 \\______)#
         ##
 _     _ #
| |   | |#
| |   | |#
| |   | |#
| |___| |#
 \\______|#
         ##
 _    _ #
| |  | |#
| |  | |#
 \\ \\/ / #
  \\  /  #
   \\/   #
        ##
 _  _  _ #
| || || |#
| || || |#
| ||_|| |#
| |___| |#
 \\______|#
         ##
 _    _ #
\\ \\  / /#
 \\ \\/ / #
  )  (  #
 / /\\ \\ #
/_/  \\_\\#
        ##
 _     _ #
| |   | |#
| |___| |#
 \\_____/ #
   ___   #
  (___)  #
         ##
 _______ #
(_______)#
   __    #
  / /    #
 / /____ #
(_______)#
         ##
 ___ #
|  _)#
| |  #
| |  #
| |_ #
|___)#
     ##
 _     #
| |    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
    |_|#
       ##
 ___ #
(_  |#
  | |#
  | |#
 _| |#
(___|#
     ##
   /\\  #
  //\\\\ #
 (____)#
       #
       #
       #
       ##
         #
         #
         #
         #
 _______ #
(_______)#
         ##
 _ #
( )#
 \\|#
   #
   #
   #
   ##
       #
       #
  ____ #
 / _  |#
( ( | |#
 \\_||_|#
       ##
 _     #
| |    #
| | _  #
| || \\ #
| |_) )#
|____/ #
       ##
       #
       #
  ____ #
 / ___)#
( (___ #
 \\____)#
       ##
     _ #
    | |#
  _ | |#
 / || |#
( (_| |#
 \\____|#
       ##
       #
       #
  ____ #
 / _  )#
( (/ / #
 \\____)#
       ##
  ___ #
 / __)#
| |__ #
|  __)#
| |   #
|_|   #
      ##
       #
       #
  ____ #
 / _  |#
( ( | |#
 \\_|| |#
(_____|##
 _     #
| |    #
| | _  #
| || \\ #
| | | |#
|_| |_|#
       ##
 _ #
(_)#
 _ #
| |#
| |#
|_|#
   ##
   _ #
  (_)#
   _ #
  | |#
  | |#
 _| |#
(__/ ##
 _     #
| |    #
| |  _ #
| | / )#
| |< ( #
|_| \\_)#
       ##
 _ #
| |#
| |#
| |#
| |#
|_|#
   ##
       #
       #
 ____  #
|    \\ #
| | | |#
|_|_|_|#
       ##
       #
       #
 ____  #
|  _ \\ #
| | | |#
|_| |_|#
       ##
       #
       #
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
       #
       #
 ____  #
|  _ \\ #
| | | |#
| ||_/ #
|_|    ##
       #
       #
  ____ #
 / _  |#
| | | |#
 \\_|| |#
    |_|##
       #
       #
  ____ #
 / ___)#
| |    #
|_|    #
       ##
      #
      #
  ___ #
 /___)#
|___ |#
(___/ #
      ##
      #
 _    #
| |_  #
|  _) #
| |__ #
 \\___)#
      ##
       #
       #
 _   _ #
| | | |#
| |_| |#
 \\____|#
       ##
       #
       #
 _   _ #
| | | |#
 \\ V / #
  \\_/  #
       ##
       #
       #
 _ _ _ #
| | | |#
| | | |#
 \\____|#
       ##
       #
       #
 _   _ #
( \\ / )#
 ) X ( #
(_/ \\_)#
       ##
       #
       #
 _   _ #
| | | |#
| |_| |#
 \\__  |#
(____/ ##
       #
       #
 _____ #
(___  )#
 / __/ #
(_____)#
       ##
   __ #
  / _)#
 | |  #
( (   #
 | |_ #
  \\__)#
      ##
 _ #
| |#
|_|#
 _ #
| |#
|_|#
   ##
 __   #
(_ \\  #
  | | #
   ) )#
 _| | #
(__/  #
      ##
  __  _ #
 /  \\/ )#
(_/\\__/ #
        #
        #
        #
        ##
 _     _ #
(_) _ (_)#
   / \\   #
  / _ \\  #
 / /_\\ \\ #
|_______|#
         ##
 _     _ #
(_)___(_)#
 / ___ \\ #
| |   | |#
| |___| |#
 \\_____/ #
         ##
 _     _ #
(_)   (_)#
 _     _ #
| |   | |#
| |___| |#
 \\______|#
         ##
 _   _ #
(_) (_)#
  ____ #
 / _  |#
( ( | |#
 \\_||_|#
       ##
 _   _ #
(_) (_)#
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
 _   _ #
(_) (_)#
 _   _ #
| | | |#
| |_| |#
 \\____|#
       ##
  ___  #
 / _ \\ #
| | ) )#
| |< ( #
| | ) )#
|_|(_/ #
       ##
`,jd=`flf2a$ 4 3 10 0 6 
Wavy by Brian Krog 10/05
Includes ISO Latin-1
figlet release 2.2.2 -- 05 Jul 2005
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

$$@
$$@
$$@
$$@@
$ @
|$@
o$@
$ @@
 $ @
||$@
 $ @
 $ @@
     $ @
 _/_/_$@
-/-/-$ @
    $  @@
  $ @
(I\`$@
.I)$@
  $ @@
  $@
o/$@
/o$@
 $ @@
_$ @
\\)$@
(X$@
  $@@
$ @
|$@
$ @
$ @@
 /$@
($ @
 \\$@
  $@@
\\$ @
 )$@
/$ @
$  @@
   $ @
_\\/_$@
 /\\$ @
  $  @@
   $ @
$_|_$@
 $|$ @
  $  @@
$ @
$ @
o$@
/$@@
  $ @
$__$@
  $ @
  $ @@
$ @
$ @
o$@
$ @@
  $@
 /$@
/$ @
$  @@
 _$  @
(.\\$ @
 \\_)$@
   $ @@
  $  @
/($  @
 _)_$@
    $@@
_$ @
 )$@
/_$@
  $@@
_$ @
_)$@
_)$@
 $ @@
   $ @
/_(_$@
   )$@
   $ @@
__$ @
)_$ @
 _)$@
  $ @@
 _$  @
(__$ @
 \\_)$@
   $ @@
__$ @
  )$@
 ($ @
  $ @@
 _$ @
(_)$@
(_)$@
  $ @@
 _$  @
(_\\$ @
  _)$@
   $ @@
$ @
o$@
o$@
$ @@
$ @
o$@
o$@
/$@@
$ @
/$@
\\$@
$ @@
 $ @
__$@
--$@
 $ @@
$ @
\\$@
/$@
$ @@
_$ @
 )$@
o$ @
 $ @@
  ___$ @
 / _ )$@
( (_($ @
 \\___/$@@
  _$ @
 /_)$@
/ /$ @
  $  @@
 __$ @
 )_)$@
/__)$@
   $ @@
  _$ @
 / \`$@
(_.$ @
   $ @@
 __$ @
 ) )$@
/_/$ @
  $  @@
 ___$@
 )_$ @
(__$ @
   $ @@
 ___$@
 )_$ @
($   @
 $   @@
  _$ @
 / _$@
(__/$@
   $ @@
   $ @
 )_)$@
( ($ @
   $ @@
 ___$@
  )$ @
_(_$ @
   $ @@
___$ @
  ($ @
\\__)$@
   $ @@
    $@
 )_/$@
/  )$@
   $ @@
  $ @
 )$ @
(__$@
  $ @@
    $ @
 )\\/)$@
(  ($ @
    $ @@
    $ @
 )\\ )$@
(  ($ @
    $ @@
  _$ @
 / )$@
(_/$ @
  $  @@
 __$ @
 )_)$@
/$   @
$    @@
  _$ @
 / )$@
(_X$ @
     @@
 __$ @
 )_)$@
/ \\$ @
  $  @@
  __$ @
 (_ \`$@
.__)$ @
   $  @@
___$@
 )$ @
($  @
 $  @@
     @
 / /$@
(_/$ @
  $  @@
    $@
\\  /$@
 \\/$ @
  $  @@
       $@
\\  X  /$@
 \\/ \\/$ @
    $   @@
 $ @
(/$@
/)$@
 $ @@
    @
\\_)$@
 /$ @
 $  @@
__$@
 /$@
/_$@
 $ @@
 _$@
|$ @
|_$@
 $ @@
$  @
\\$ @
 \\$@
  $@@
_$ @
 |$@
_|$@
 $ @@
 $ @
/\\$@
 $ @
 $ @@
 $ @
 $ @
 $ @
__$@@
$ @
\\$@
$ @
$ @@
  $ @
 _$ @
(_($@
  $ @@
  $  @
( _$ @
 )_)$@
   $ @@
 $ @
 _$@
(_$@
 $ @@
   $ @
 _ )$@
(_($ @
  $  @@
   $ @
  _$ @
 )_)$@
(_$  @@
  $ @
_(_$@
  )$@
  $ @@
  $  @
 _$  @
(_($ @
  _)$@@
  $  @
( _$ @
 ) )$@
   $ @@
$ @
o$@
($@
$ @@
$  @
o$ @
($ @
_)$@@
  $ @
( _$@
 )\\$@
  $ @@
 $ @
 )$@
($ @
 $ @@
    $ @
 _ _$ @
) ) )$@
    $ @@
  $ @
 _$ @
) )$@
  $ @@
  $ @
 _$ @
(_)$@
  $ @@
   $ @
  _$ @
 )_)$@
(  $ @@
  $  @
 _$  @
(_($ @
   )$@@
 $ @
 _$@
)$ @
$  @@
 $ @
 _$@
($ @
_)$@@
  $ @
_)_$@
(_$ @
 $  @@
  $ @
  $ @
(_($@
  $ @@
 $ @
 $ @
\\)$@
 $ @@
    $ @
    $ @
)_)_)$@
    $ @@
 $ @
 $ @
\\)$@
(\\$@@
  $  @
  $  @
(_($ @
  _)$@@
  $  @
__$  @
  )$ @
 (__$@@
  _$@
_|$ @
 |_$@
  $ @@
$ @
|$@
|$@
|$@@
_$  @
 |_$@
_|$ @
 $  @@
  $ @
/\\/$@
  $ @
  $ @@
 o_o$@
 /_)$@
/ /$ @
  $  @@
 o_o$@
 / )$@
(_/$ @
  $  @@
  o o$@
 / /$ @
(_/$  @
  $   @@
o o$@
 _ $@
(_($@
   $@@
o o$@
 _$ @
(_)$@
  $ @@
o o$@
   $@
(_($@
   $@@
 __$ @
 ) )$@
/  )$@
   $ @@
160  NO-BREAK SPACE
$$@
$$@
$$@
$$@@
161  INVERTED EXCLAMATION MARK
$ @
o$@
|$@
$ @@
162  CENT SIGN
  $ @
 |$ @
(_\`$@
 |$ @@
163  POUND SIGN
  _$ @
_(_\`$@
 o)_$@
   $ @@
164  CURRENCY SIGN
  $ @
\`o'$@
' \`$@
  $ @@
165  YEN SIGN
   $  @
_\\_)_$@
--/--$@
    $ @@
166  BROKEN BAR
$ @
|$@
'$@
|$@@
167  SECTION SIGN
 _$@
($ @
()$@
_)$@@
168  DIAERESIS
o o$@
  $ @
  $ @
  $ @@
169  COPYRIGHT SIGN
 _$ @
(C)$@
  $ @
  $ @@
170  FEMININE ORDINAL INDICATOR
 _ $@
(_($@
---$@
  $ @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  $@
//$@
\\\\$@
  $@@
172  NOT SIGN
  $ @
__$ @
  |$@
  $ @@
173  SOFT HYPHEN
$ @
_$@
$ @
$ @@
174  REGISTERED SIGN
 _$ @
(R)$@
  $ @
  $ @@
175  MACRON
__$@
 $ @
 $ @
 $ @@
176  DEGREE SIGN
O$@
$ @
$ @
$ @@
177  PLUS-MINUS SIGN
  $ @
_|_$@
_|_$@
  $ @@
178  SUPERSCRIPT TWO
2$@
  @
  @
  @@
179  SUPERSCRIPT THREE
3$@
$ @
$ @
$ @@
180  ACUTE ACCENT
/$@
$ @
$ @
$ @@
181  MICRO SIGN
   $ @
   $ @
 )_)$@
/$   @@
182  PILCROW SIGN
 __$@
(||$@
 ||$@
  $ @@
183  MIDDLE DOT
$ @
o$@
$ @
$ @@
184  CEDILLA
$ @
$ @
$ @
S$@@
185  SUPERSCRIPT ONE
1$@
$ @
$ @
$ @@
186  MASCULINE ORDINAL INDICATOR
 _$ @
(_)$@
---$@
  $ @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 $ @
\\\\$@
//$@
 $ @@
188  VULGAR FRACTION ONE QUARTER
  $@
1/$@
/4$@
 $ @@
189  VULGAR FRACTION ONE HALF
  $@
1/$@
/2$@
 $ @@
190  VULGAR FRACTION THREE QUARTERS
  $@
3/$@
/4$@
 $ @@
191  INVERTED QUESTION MARK
 $ @
 o$@
(_$@
 $ @@
192  LATIN CAPITAL LETTER A WITH GRAVE
  \\$ @
 /_)$@
/ /$ @
  $  @@
193  LATIN CAPITAL LETTER A WITH ACUTE
  _/$@
 /_)$@
/ /$ @
  $  @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
  /\\$@
 /_)$@
/ /$ @
  $  @@
195  LATIN CAPITAL LETTER A WITH TILDE
 /\\/$@
 /_)$@
/ /$ @
  $  @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 o_o$@
 /_)$@
/ /$ @
  $  @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
  O$ @
 /_)$@
/ /$ @
  $  @@
198  LATIN CAPITAL LETTER AE
  ____$@
 /_)_$ @
/ /__$ @
     $ @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
  _$ @
 / \`$@
(_.$ @
 S$  @@
200  LATIN CAPITAL LETTER E WITH GRAVE
 _\\_$@
 )_$ @
(__$ @
   $ @@
201  LATIN CAPITAL LETTER E WITH ACUTE
 _/_$@
 )_$ @
(__$ @
   $ @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
 _/\\$@
 )_$ @
(__$ @
   $ @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 o_o$@
 )_$ @
(__$ @
   $ @@
204  LATIN CAPITAL LETTER I WITH GRAVE
 _\\_$@
  )$ @
_(_$ @
   $ @@
205  LATIN CAPITAL LETTER I WITH ACUTE
 _/_$@
  )$ @
_(_$ @
   $ @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
 _/\\$@
  )$ @
_(_$ @
   $ @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 o_o$@
  )$ @
_(_$ @
     @@
208  LATIN CAPITAL LETTER ETH
 __$ @
_)_)$@
/_/$ @
  $  @@
209  LATIN CAPITAL LETTER N WITH TILDE
  /\\/$@
 )\\ )$@
(  ($ @
    $ @@
210  LATIN CAPITAL LETTER O WITH GRAVE
  \\$ @
 / )$@
(_/$ @
  $  @@
211  LATIN CAPITAL LETTER O WITH ACUTE
  _/$@
 / )$@
(_/$ @
  $  @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
  /\\$@
 / )$@
(_/$ @
  $  @@
213  LATIN CAPITAL LETTER O WITH TILDE
 /\\/$@
 / )$@
(_/$ @
  $  @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 o_o$@
 / )$@
(_/$ @
  $  @@
215  MULTIPLICATION SIGN
$ @
X$@
$ @
$ @@
216  LATIN CAPITAL LETTER O WITH STROKE
  _$ @
 //)$@
(//$ @
  $  @@
217  LATIN CAPITAL LETTER U WITH GRAVE
  \\$ @
 / /$@
(_/$ @
  $  @@
218  LATIN CAPITAL LETTER U WITH ACUTE
   /$@
 / /$@
(_/$ @
  $  @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
  /\\$@
 / /$@
(_/$ @
  $  @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  o o$@
 / /$ @
(_/$  @
  $   @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
 /$ @
\\_)$@
 /$ @
 $  @@
222  LATIN CAPITAL LETTER THORN
( _$ @
 )_)$@
($   @
 $   @@
223  LATIN SMALL LETTER SHARP S
  __$ @
  ) )$@
 /  )$@
    $ @@
224  LATIN SMALL LETTER A WITH GRAVE
 \\$ @
 _ $@
(_($@
   $@@
225  LATIN SMALL LETTER A WITH ACUTE
 /$ @
 _ $@
(_($@
   $@@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
 /\\$@
 _ $@
(_($@
   $@@
227  LATIN SMALL LETTER A WITH TILDE
/\\/$@
 _ $@
(_($@
   $@@
228  LATIN SMALL LETTER A WITH DIAERESIS
o o$@
 _ $@
(_($@
   $@@
229  LATIN SMALL LETTER A WITH RING ABOVE
 O$ @
 _ $@
(_($@
   $@@
230  LATIN SMALL LETTER AE
     $ @
  _ _$ @
 _ )_)$@
(_(_$  @@
231  LATIN SMALL LETTER C WITH CEDILLA
 $ @
 _$@
(_$@
 S$@@
232  LATIN SMALL LETTER E WITH GRAVE
 \\$  @
  _$ @
 )_)$@
(_$  @@
233  LATIN SMALL LETTER E WITH ACUTE
  /$ @
  _$ @
 )_)$@
(_$  @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
 /\\$ @
  _ $@
 )_)$@
(_$  @@
235  LATIN SMALL LETTER E WITH DIAERESIS
 o o$@
  _ $@
 )_)$@
(_$  @@
236  LATIN SMALL LETTER I WITH GRAVE
$ @
\\$@
($@
 $@@
237  LATIN SMALL LETTER I WITH ACUTE
$ @
/$@
($@
 $@@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
 $ @
/\\$@
($ @
 $ @@
239  LATIN SMALL LETTER I WITH DIAERESIS
 $ @
oo$@
($ @
 $ @@
240  LATIN SMALL LETTER ETH
  X$ @
 _ )$@
(_($ @
   $ @@
241  LATIN SMALL LETTER N WITH TILDE
/\\/$@
 _$ @
) )$@
  $ @@
242  LATIN SMALL LETTER O WITH GRAVE
 \\$ @
 _$ @
(_)$@
  $ @@
243  LATIN SMALL LETTER O WITH ACUTE
 /$ @
 _$ @
(_)$@
  $ @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
 /\\$@
 _$ @
(_)$@
    @@
245  LATIN SMALL LETTER O WITH TILDE
/\\/$@
 _$ @
(_)$@
  $ @@
246  LATIN SMALL LETTER O WITH DIAERESIS
o o$@
 _$ @
(_)$@
  $ @@
247  DIVISION SIGN
 o$ @
---$@
 o$ @
  $ @@
248  LATIN SMALL LETTER O WITH STROKE
  $ @
 _$ @
(/)$@
  $ @@
249  LATIN SMALL LETTER U WITH GRAVE
 \\$ @
   $@
(_($@
   $@@
250  LATIN SMALL LETTER U WITH ACUTE
  /$@
   $@
(_($@
   $@@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
 /\\$@
   $@
(_($@
   $@@
252  LATIN SMALL LETTER U WITH DIAERESIS
o o$@
   $@
(_($@
   $@@
253  LATIN SMALL LETTER Y WITH ACUTE
  /$ @
   $ @
(_($ @
  _)$@@
254  LATIN SMALL LETTER THORN
  $  @
(_$  @
 )_)$@
($   @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
o o$ @
   $ @
(_($ @
  _)$@@








`,Vd=()=>{const _=[{name:"Standard",module:Vf},{name:"Ghost",module:Bf},{name:"3D-ASCII",module:Yf},{name:"Avatar",module:zf},{name:"Big",module:Kf},{name:"Bulbhead",module:Xf},{name:"Cards",module:Qf},{name:"Doom",module:Jf},{name:"Epic",module:bf},{name:"Graceful",module:Zf},{name:"Graffiti",module:qf},{name:"Merlin1",module:_d},{name:"Modular",module:ed},{name:"Ogre",module:td},{name:"Rectangles",module:nd},{name:"Slant",module:$d},{name:"Soft",module:rd},{name:"Sub_Zero",module:ld},{name:"Train",module:od},{name:"Twisted",module:id},{name:"Varsity",module:ad},{name:"Bloody",module:ud},{name:"Bear",module:sd},{name:"Bell",module:cd},{name:"Crawford",module:Td},{name:"Cricket",module:fd},{name:"Digital",module:dd},{name:"Fuzzy",module:Ld},{name:"Ghoulish",module:Ed},{name:"Glenyn",module:Id},{name:"Goofy",module:Ad},{name:"Gothic",module:hd},{name:"Greek",module:pd},{name:"Hollywood",module:md},{name:"Invita",module:Rd},{name:"Italic",module:gd},{name:"Ivrit",module:vd},{name:"Jacky",module:Cd},{name:"Jazmine",module:Sd},{name:"Jerusalem",module:Nd},{name:"Keyboard",module:yd},{name:"Merlin2",module:xd},{name:"Mirror",module:Pd},{name:"Pawp",module:Od},{name:"Poison",module:wd},{name:"Puffy",module:Md},{name:"Puzzle",module:Hd},{name:"Rounded",module:kd},{name:"Serifcap",module:Wd},{name:"Shadow",module:Ud},{name:"Speed",module:Dd},{name:"Stforek",module:Fd},{name:"Stop",module:Gd},{name:"Wavy",module:jd}],e=()=>{_.forEach(async t=>{try{Hi.parseFont(t.name,t.module)}catch(n){console.error(`Error cargando la fuente ${t.name}:`,n)}})};return x.useEffect(()=>{e()},[]),{fonts:_,figlet:Hi}},Bd=()=>{const[_,e]=x.useState(""),[t,n]=x.useState("Hola mundo"),[$,r]=x.useState("Standard"),{fonts:l,figlet:o}=Vd(),i=(d,g)=>{o.text(d.trim(),{font:g,horizontalLayout:"controlled smushing",verticalLayout:"controlled smushing",width:t.length*120,whitespaceBreak:!0},function(v,R){e(R)})},a=d=>{if(d.preventDefault(),!t.trim()){alert("El texto es obligatorio.");return}i(t.trim(),$.trim())},L=()=>{e(""),n(""),i("",$.trim()),alert("Arte limpiado.")},f=d=>{d.key==="Enter"&&(d.preventDefault(),i(t,$.trim()))};return x.useEffect(()=>{i(t,$)},[$]),N.jsxs("div",{className:"flex flex-col gap-10 md:items-center",children:[N.jsx("div",{className:"border-2 rounded-md p-4 bg-white shadow-sm lg:w-min",children:N.jsxs("div",{className:"flex flex-col justify-between gap-8 md:flex-row",children:[N.jsxs("form",{onSubmit:a,children:[N.jsxs("div",{className:"mb-4",children:[N.jsx("label",{htmlFor:"text",className:"block  font-bold text-lg my-2",children:"Texto a Arte ASCII"}),N.jsx("textarea",{type:"text",required:!0,id:"text",name:"text",value:t,onChange:d=>n(d.target.value),onKeyDown:f,placeholder:"Ingrese un texto...",className:"block text-black px-2 py-2 border-2 rounded-md w-full h-[120px] resize-none md:w-[400px]"}),N.jsx("small",{className:" block",children:"Ingrese un texto para convertirlo a Art ASCII"}),N.jsx("small",{className:" block",children:"Presione Enter como atajo de teclado."})]}),N.jsx("div",{className:"mt-6",children:N.jsxs("div",{className:"flex justify-between",children:[N.jsx("button",{className:"bg-slate-800 py-2 px-4 rounded-md text-white",children:"Generar"}),N.jsx("button",{type:"button",onClick:L,className:"bg-slate-800 py-2 px-4 rounded-md text-white",children:"Limpiar"})]})})]}),N.jsxs("div",{className:"mb-4",children:[N.jsxs("label",{htmlFor:"font",className:"block  font-bold text-lg my-2",children:[l.length," Fuente (",$,")"]}),N.jsx("select",{name:"font",id:"font",value:$,onChange:d=>{r(d.target.value)},size:l.length,className:"block w-full h-[100px] px-2 py-2 border-2 rounded-md lg:h-[220px] lg:md:w-[220px]",children:l.map(d=>N.jsx("option",{value:d.name,children:d.name},d.name))}),N.jsx("small",{className:" block",children:"Seleccione un tipo de fuente para el Arte ASCII."})]})]})}),N.jsx("div",{className:"mb-8 w-full ",children:N.jsx("pre",{className:"bg-gray-100 border overflow-auto rounded-md p-4 text-center h-[340px]",children:_||"Ingrese un texto..."})})]})},Yd=()=>{const _=On(),e=t=>_.pathname===t?"after:w-full":"";return N.jsx("nav",{children:N.jsxs("div",{className:"flex flex-col gap-x-4 items-center bg-slate-800 text-white sm:p-0 sm:rounded-lg sm:flex-row",children:[N.jsx(Jt,{to:y_.Root,className:"rounded-l-lg py-4 px-4 sm:bg-gradient-to-b sm:from-red-500 sm:to-red-400",children:N.jsx("h3",{className:"text-3xl",children:"Text2ArtJS"})}),N.jsx("div",{className:"text-center",children:N.jsxs("ul",{className:`flex flex-row items-center gap-x-1 transition-all duration-500 sm:flex-row sm:p-0
                    max-h-full max-w-[300px] overflow-x-auto whitespace-nowrap opacity-100
                    sm:max-w-full
                    `,children:[N.jsx(Jt,{to:y_.Root,className:`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${e(y_.Root)}`,children:N.jsx("i",{children:"Inicio"})}),N.jsx(Jt,{to:y_.FromText,className:`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${e(y_.FromText)}`,children:N.jsx("i",{children:"Desde Texto"})}),N.jsx(Jt,{to:y_.FromImage,className:`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${e(y_.FromImage)}`,children:N.jsx("i",{children:"Desde Imagen"})})]})})]})})},zd=()=>N.jsxs("div",{className:"flex flex-col min-h-screen",children:[N.jsx("header",{className:"container mx-auto mb-8 sm:mt-1 sm:mb-8",children:N.jsx(Yd,{})}),N.jsx("main",{className:"flex-grow lg:m-8",children:N.jsx(Sf,{})}),N.jsx("footer",{children:N.jsx("p",{className:"text-center py-4 bg-slate-800 text-white",children:"Created by: Víctor J."})})]}),Kd=()=>{const[_,e]=x.useState(""),[t,n]=x.useState(!1),[$,r]=x.useState(1),[l,o]=x.useState(1),[i,a]=x.useState(null),L=x.useRef(null),f="@#%8&WMZ?+~:,. ",d=g=>{const v=g.target.files[0];if(v){a(URL.createObjectURL(v)),n(!0);const R=new Image;R.src=URL.createObjectURL(v),R.onload=()=>{const P=L.current,c=P.getContext("2d"),s=640,T=R.width>s?s:R.width,p=R.height/R.width*T;P.width=T,P.height=p,c.drawImage(R,0,0,T,p);const k=c.getImageData(0,0,T,p).data;let W="";for(let U=0;U<k.length;U+=4){const Q=k[U],j=k[U+1],g_=k[U+2],Q_=(Q+j+g_)/3,H_=Math.floor(Q_/255*(f.length-1));W+=f[H_],(U/4+1)%T===0&&(W+=`
`)}e(W),n(!1)}}};return N.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[N.jsx("h1",{className:"text-3xl font-bold text-center mb-6",children:"Convert Image to ASCII Art"}),N.jsxs("div",{className:"flex justify-between mb-4",children:[N.jsxs("div",{className:"bg-white p-6 w-full ",children:[i?N.jsx("div",{className:"my-4",children:N.jsx("img",{src:i,alt:"Preview",className:"max-w-full h-auto rounded-md lg:w-full lg:h-[200px]"})}):N.jsx("div",{className:"my-4",children:N.jsx("div",{className:"max-w-full h-[120px] rounded-md bg-slate-200 border-2 sm:h-[200px] lg:w-full"})}),N.jsx("input",{type:"file",accept:"image/*",onChange:d,className:"my-4 w-full text-center border border-gray-300 rounded-md p-2"})]}),N.jsxs("div",{className:"bg-white p-6 w-full ",children:[N.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Ajustes de Tamaño"}),N.jsxs("div",{className:"mb-4",children:[N.jsxs("label",{className:"block",children:["Anchura: ",$]}),N.jsx("input",{type:"range",min:.1,step:.1,max:5,value:$,onChange:g=>r(g.target.value),className:"w-full"})]}),N.jsxs("div",{children:[N.jsxs("label",{className:"block",children:["Altura: ",l]}),N.jsx("input",{type:"range",min:.1,step:.1,max:5,value:l,onChange:g=>o(g.target.value),className:"w-full"})]}),N.jsx("small",{className:"block mt-4 text-[12px] text-neutral-400",children:"El tamaño generador a Arte ASCII es proporcional al tamaño de la imagen original"})]})]}),N.jsx("canvas",{ref:L,className:"hidden"}),N.jsx("div",{className:"bg-gray-100 border overflow-auto rounded-md p-4 h-[560px]",children:N.jsx("div",{style:{fontFamily:"monospace",fontSize:`${$}px`,lineHeight:`${l}px`},children:t?N.jsx("p",{className:"text-center text-lg",children:"Cargando..."}):N.jsx("pre",{className:"whitespace-pre-wrap text-black",children:_||N.jsx("small",{className:"text-gray-600 text-center text-lg",children:"Sube una imagen ..."})})})}),_&&N.jsx("div",{className:"text-center mt-4",children:N.jsx("button",{onClick:()=>{const g=new Blob([_],{type:"text/plain"}),v=URL.createObjectURL(g),R=document.createElement("a");R.href=v,R.download="ascii-art.txt",R.click(),URL.revokeObjectURL(v)},className:"bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200",children:"Descargar ASCII Art"})})]})},Xd=()=>N.jsx(kf,{basename:y_.BaseName,children:N.jsx(yf,{children:N.jsxs(lt,{path:y_.Root,element:N.jsx(zd,{}),children:[N.jsx(lt,{path:y_.Root,element:N.jsx("h1",{children:"Página de root"})}),N.jsx(lt,{path:y_.FromText,element:N.jsx(Bd,{})}),N.jsx(lt,{path:y_.FromImage,element:N.jsx(Kd,{})}),N.jsx(lt,{path:y_.Error404,element:N.jsx(Gf,{})})]})})}),Qd=()=>N.jsx(Xd,{});Qu(document.getElementById("root")).render(N.jsx(x.StrictMode,{children:N.jsx(Qd,{})}));
