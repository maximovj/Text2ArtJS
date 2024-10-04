function ps(_,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const $ in n)if($!=="default"&&!($ in _)){const r=Object.getOwnPropertyDescriptor(n,$);r&&Object.defineProperty(_,$,r.get?r:{enumerable:!0,get:()=>n[$]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const $ of document.querySelectorAll('link[rel="modulepreload"]'))n($);new MutationObserver($=>{for(const r of $)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t($){const r={};return $.integrity&&(r.integrity=$.integrity),$.referrerPolicy&&(r.referrerPolicy=$.referrerPolicy),$.crossOrigin==="use-credentials"?r.credentials="include":$.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n($){if($.ep)return;$.ep=!0;const r=t($);fetch($.href,r)}})();function Vi(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var Yi={exports:{}},U$={},zi={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn=Symbol.for("react.element"),ms=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),vs=Symbol.for("react.profiler"),Cs=Symbol.for("react.provider"),Ss=Symbol.for("react.context"),ys=Symbol.for("react.forward_ref"),Ns=Symbol.for("react.suspense"),xs=Symbol.for("react.memo"),Ps=Symbol.for("react.lazy"),go=Symbol.iterator;function Os(_){return _===null||typeof _!="object"?null:(_=go&&_[go]||_["@@iterator"],typeof _=="function"?_:null)}var Ki={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xi=Object.assign,bi={};function kt(_,e,t){this.props=_,this.context=e,this.refs=bi,this.updater=t||Ki}kt.prototype.isReactComponent={};kt.prototype.setState=function(_,e){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,e,"setState")};kt.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function Qi(){}Qi.prototype=kt.prototype;function Cl(_,e,t){this.props=_,this.context=e,this.refs=bi,this.updater=t||Ki}var Sl=Cl.prototype=new Qi;Sl.constructor=Cl;Xi(Sl,kt.prototype);Sl.isPureReactComponent=!0;var vo=Array.isArray,Ji=Object.prototype.hasOwnProperty,yl={current:null},Zi={key:!0,ref:!0,__self:!0,__source:!0};function qi(_,e,t){var n,$={},r=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(r=""+e.key),e)Ji.call(e,n)&&!Zi.hasOwnProperty(n)&&($[n]=e[n]);var o=arguments.length-2;if(o===1)$.children=t;else if(1<o){for(var i=Array(o),a=0;a<o;a++)i[a]=arguments[a+2];$.children=i}if(_&&_.defaultProps)for(n in o=_.defaultProps,o)$[n]===void 0&&($[n]=o[n]);return{$$typeof:Nn,type:_,key:r,ref:l,props:$,_owner:yl.current}}function ws(_,e){return{$$typeof:Nn,type:_.type,key:e,ref:_.ref,props:_.props,_owner:_._owner}}function Nl(_){return typeof _=="object"&&_!==null&&_.$$typeof===Nn}function Ms(_){var e={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(t){return e[t]})}var Co=/\/+/g;function $r(_,e){return typeof _=="object"&&_!==null&&_.key!=null?Ms(""+_.key):e.toString(36)}function _$(_,e,t,n,$){var r=typeof _;(r==="undefined"||r==="boolean")&&(_=null);var l=!1;if(_===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(_.$$typeof){case Nn:case ms:l=!0}}if(l)return l=_,$=$(l),_=n===""?"."+$r(l,0):n,vo($)?(t="",_!=null&&(t=_.replace(Co,"$&/")+"/"),_$($,e,t,"",function(a){return a})):$!=null&&(Nl($)&&($=ws($,t+(!$.key||l&&l.key===$.key?"":(""+$.key).replace(Co,"$&/")+"/")+_)),e.push($)),1;if(l=0,n=n===""?".":n+":",vo(_))for(var o=0;o<_.length;o++){r=_[o];var i=n+$r(r,o);l+=_$(r,e,t,i,$)}else if(i=Os(_),typeof i=="function")for(_=i.call(_),o=0;!(r=_.next()).done;)r=r.value,i=n+$r(r,o++),l+=_$(r,e,t,i,$);else if(r==="object")throw e=String(_),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Wn(_,e,t){if(_==null)return _;var n=[],$=0;return _$(_,n,"","",function(r){return e.call(t,r,$++)}),n}function Hs(_){if(_._status===-1){var e=_._result;e=e(),e.then(function(t){(_._status===0||_._status===-1)&&(_._status=1,_._result=t)},function(t){(_._status===0||_._status===-1)&&(_._status=2,_._result=t)}),_._status===-1&&(_._status=0,_._result=e)}if(_._status===1)return _._result.default;throw _._result}var N_={current:null},e$={transition:null},ks={ReactCurrentDispatcher:N_,ReactCurrentBatchConfig:e$,ReactCurrentOwner:yl};function _a(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Wn,forEach:function(_,e,t){Wn(_,function(){e.apply(this,arguments)},t)},count:function(_){var e=0;return Wn(_,function(){e++}),e},toArray:function(_){return Wn(_,function(e){return e})||[]},only:function(_){if(!Nl(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};B.Component=kt;B.Fragment=Rs;B.Profiler=vs;B.PureComponent=Cl;B.StrictMode=gs;B.Suspense=Ns;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ks;B.act=_a;B.cloneElement=function(_,e,t){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var n=Xi({},_.props),$=_.key,r=_.ref,l=_._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,l=yl.current),e.key!==void 0&&($=""+e.key),_.type&&_.type.defaultProps)var o=_.type.defaultProps;for(i in e)Ji.call(e,i)&&!Zi.hasOwnProperty(i)&&(n[i]=e[i]===void 0&&o!==void 0?o[i]:e[i])}var i=arguments.length-2;if(i===1)n.children=t;else if(1<i){o=Array(i);for(var a=0;a<i;a++)o[a]=arguments[a+2];n.children=o}return{$$typeof:Nn,type:_.type,key:$,ref:r,props:n,_owner:l}};B.createContext=function(_){return _={$$typeof:Ss,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:Cs,_context:_},_.Consumer=_};B.createElement=qi;B.createFactory=function(_){var e=qi.bind(null,_);return e.type=_,e};B.createRef=function(){return{current:null}};B.forwardRef=function(_){return{$$typeof:ys,render:_}};B.isValidElement=Nl;B.lazy=function(_){return{$$typeof:Ps,_payload:{_status:-1,_result:_},_init:Hs}};B.memo=function(_,e){return{$$typeof:xs,type:_,compare:e===void 0?null:e}};B.startTransition=function(_){var e=e$.transition;e$.transition={};try{_()}finally{e$.transition=e}};B.unstable_act=_a;B.useCallback=function(_,e){return N_.current.useCallback(_,e)};B.useContext=function(_){return N_.current.useContext(_)};B.useDebugValue=function(){};B.useDeferredValue=function(_){return N_.current.useDeferredValue(_)};B.useEffect=function(_,e){return N_.current.useEffect(_,e)};B.useId=function(){return N_.current.useId()};B.useImperativeHandle=function(_,e,t){return N_.current.useImperativeHandle(_,e,t)};B.useInsertionEffect=function(_,e){return N_.current.useInsertionEffect(_,e)};B.useLayoutEffect=function(_,e){return N_.current.useLayoutEffect(_,e)};B.useMemo=function(_,e){return N_.current.useMemo(_,e)};B.useReducer=function(_,e,t){return N_.current.useReducer(_,e,t)};B.useRef=function(_){return N_.current.useRef(_)};B.useState=function(_){return N_.current.useState(_)};B.useSyncExternalStore=function(_,e,t){return N_.current.useSyncExternalStore(_,e,t)};B.useTransition=function(){return N_.current.useTransition()};B.version="18.3.1";zi.exports=B;var P=zi.exports;const Ws=Vi(P),Us=ps({__proto__:null,default:Ws},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ds=P,Fs=Symbol.for("react.element"),Gs=Symbol.for("react.fragment"),js=Object.prototype.hasOwnProperty,Bs=Ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vs={key:!0,ref:!0,__self:!0,__source:!0};function ea(_,e,t){var n,$={},r=null,l=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)js.call(e,n)&&!Vs.hasOwnProperty(n)&&($[n]=e[n]);if(_&&_.defaultProps)for(n in e=_.defaultProps,e)$[n]===void 0&&($[n]=e[n]);return{$$typeof:Fs,type:_,key:r,ref:l,props:$,_owner:Bs.current}}U$.Fragment=Gs;U$.jsx=ea;U$.jsxs=ea;Yi.exports=U$;var v=Yi.exports,ta={exports:{}},G_={},na={exports:{}},$a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(_){function e(W,G){var j=W.length;W.push(G);_:for(;0<j;){var t_=j-1>>>1,V=W[t_];if(0<$(V,G))W[t_]=G,W[j]=V,j=t_;else break _}}function t(W){return W.length===0?null:W[0]}function n(W){if(W.length===0)return null;var G=W[0],j=W.pop();if(j!==G){W[0]=j;_:for(var t_=0,V=W.length,A=V>>>1;t_<A;){var h=2*(t_+1)-1,s=W[h],E=h+1,m=W[E];if(0>$(s,j))E<V&&0>$(m,s)?(W[t_]=m,W[E]=j,t_=E):(W[t_]=s,W[h]=j,t_=h);else if(E<V&&0>$(m,j))W[t_]=m,W[E]=j,t_=E;else break _}}return G}function $(W,G){var j=W.sortIndex-G.sortIndex;return j!==0?j:W.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;_.unstable_now=function(){return r.now()}}else{var l=Date,o=l.now();_.unstable_now=function(){return l.now()-o}}var i=[],a=[],L=1,T=null,f=3,R=!1,I=!1,g=!1,S=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(W){for(var G=t(a);G!==null;){if(G.callback===null)n(a);else if(G.startTime<=W)n(a),G.sortIndex=G.expirationTime,e(i,G);else break;G=t(a)}}function p(W){if(g=!1,d(W),!I)if(t(i)!==null)I=!0,Ft(y);else{var G=t(a);G!==null&&Gt(p,G.startTime-W)}}function y(W,G){I=!1,g&&(g=!1,c(H),H=-1),R=!0;var j=f;try{for(d(G),T=t(i);T!==null&&(!(T.expirationTime>G)||W&&!C_());){var t_=T.callback;if(typeof t_=="function"){T.callback=null,f=T.priorityLevel;var V=t_(T.expirationTime<=G);G=_.unstable_now(),typeof V=="function"?T.callback=V:T===t(i)&&n(i),d(G)}else n(i);T=t(i)}if(T!==null)var A=!0;else{var h=t(a);h!==null&&Gt(p,h.startTime-G),A=!1}return A}finally{T=null,f=j,R=!1}}var M=!1,w=null,H=-1,Y=5,F=-1;function C_(){return!(_.unstable_now()-F<Y)}function b_(){if(w!==null){var W=_.unstable_now();F=W;var G=!0;try{G=w(!0,W)}finally{G?Q_():(M=!1,w=null)}}else M=!1}var Q_;if(typeof u=="function")Q_=function(){u(b_)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,pe=he.port2;he.port1.onmessage=b_,Q_=function(){pe.postMessage(null)}}else Q_=function(){S(b_,0)};function Ft(W){w=W,M||(M=!0,Q_())}function Gt(W,G){H=S(function(){W(_.unstable_now())},G)}_.unstable_IdlePriority=5,_.unstable_ImmediatePriority=1,_.unstable_LowPriority=4,_.unstable_NormalPriority=3,_.unstable_Profiling=null,_.unstable_UserBlockingPriority=2,_.unstable_cancelCallback=function(W){W.callback=null},_.unstable_continueExecution=function(){I||R||(I=!0,Ft(y))},_.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<W?Math.floor(1e3/W):5},_.unstable_getCurrentPriorityLevel=function(){return f},_.unstable_getFirstCallbackNode=function(){return t(i)},_.unstable_next=function(W){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var j=f;f=G;try{return W()}finally{f=j}},_.unstable_pauseExecution=function(){},_.unstable_requestPaint=function(){},_.unstable_runWithPriority=function(W,G){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=f;f=W;try{return G()}finally{f=j}},_.unstable_scheduleCallback=function(W,G,j){var t_=_.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?t_+j:t_):j=t_,W){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=j+V,W={id:L++,callback:G,priorityLevel:W,startTime:j,expirationTime:V,sortIndex:-1},j>t_?(W.sortIndex=j,e(a,W),t(i)===null&&W===t(a)&&(g?(c(H),H=-1):g=!0,Gt(p,j-t_))):(W.sortIndex=V,e(i,W),I||R||(I=!0,Ft(y))),W},_.unstable_shouldYield=C_,_.unstable_wrapCallback=function(W){var G=f;return function(){var j=f;f=G;try{return W.apply(this,arguments)}finally{f=j}}}})($a);na.exports=$a;var Ys=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=P,F_=Ys;function N(_){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+_,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+_+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ra=new Set,un={};function rt(_,e){Nt(_,e),Nt(_+"Capture",e)}function Nt(_,e){for(un[_]=e,_=0;_<e.length;_++)ra.add(e[_])}var de=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pr=Object.prototype.hasOwnProperty,Ks=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,So={},yo={};function Xs(_){return Pr.call(yo,_)?!0:Pr.call(So,_)?!1:Ks.test(_)?yo[_]=!0:(So[_]=!0,!1)}function bs(_,e,t,n){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(_=_.toLowerCase().slice(0,5),_!=="data-"&&_!=="aria-");default:return!1}}function Qs(_,e,t,n){if(e===null||typeof e>"u"||bs(_,e,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function x_(_,e,t,n,$,r,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=$,this.mustUseProperty=t,this.propertyName=_,this.type=e,this.sanitizeURL=r,this.removeEmptyString=l}var p_={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(_){p_[_]=new x_(_,0,!1,_,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(_){var e=_[0];p_[e]=new x_(e,1,!1,_[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(_){p_[_]=new x_(_,2,!1,_.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(_){p_[_]=new x_(_,2,!1,_,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(_){p_[_]=new x_(_,3,!1,_.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(_){p_[_]=new x_(_,3,!0,_,null,!1,!1)});["capture","download"].forEach(function(_){p_[_]=new x_(_,4,!1,_,null,!1,!1)});["cols","rows","size","span"].forEach(function(_){p_[_]=new x_(_,6,!1,_,null,!1,!1)});["rowSpan","start"].forEach(function(_){p_[_]=new x_(_,5,!1,_.toLowerCase(),null,!1,!1)});var xl=/[\-:]([a-z])/g;function Pl(_){return _[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(_){var e=_.replace(xl,Pl);p_[e]=new x_(e,1,!1,_,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(_){var e=_.replace(xl,Pl);p_[e]=new x_(e,1,!1,_,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(_){var e=_.replace(xl,Pl);p_[e]=new x_(e,1,!1,_,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(_){p_[_]=new x_(_,1,!1,_.toLowerCase(),null,!1,!1)});p_.xlinkHref=new x_("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(_){p_[_]=new x_(_,1,!1,_.toLowerCase(),null,!0,!0)});function Ol(_,e,t,n){var $=p_.hasOwnProperty(e)?p_[e]:null;($!==null?$.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qs(e,t,$,n)&&(t=null),n||$===null?Xs(e)&&(t===null?_.removeAttribute(e):_.setAttribute(e,""+t)):$.mustUseProperty?_[$.propertyName]=t===null?$.type===3?!1:"":t:(e=$.attributeName,n=$.attributeNamespace,t===null?_.removeAttribute(e):($=$.type,t=$===3||$===4&&t===!0?"":""+t,n?_.setAttributeNS(n,e,t):_.setAttribute(e,t))))}var Ae=zs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Un=Symbol.for("react.element"),st=Symbol.for("react.portal"),ct=Symbol.for("react.fragment"),wl=Symbol.for("react.strict_mode"),Or=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),oa=Symbol.for("react.context"),Ml=Symbol.for("react.forward_ref"),wr=Symbol.for("react.suspense"),Mr=Symbol.for("react.suspense_list"),Hl=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),ia=Symbol.for("react.offscreen"),No=Symbol.iterator;function jt(_){return _===null||typeof _!="object"?null:(_=No&&_[No]||_["@@iterator"],typeof _=="function"?_:null)}var l_=Object.assign,rr;function Qt(_){if(rr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);rr=e&&e[1]||""}return`
`+rr+_}var lr=!1;function or(_,e){if(!_||lr)return"";lr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(a){var n=a}Reflect.construct(_,[],e)}else{try{e.call()}catch(a){n=a}_.call(e.prototype)}else{try{throw Error()}catch(a){n=a}_()}}catch(a){if(a&&n&&typeof a.stack=="string"){for(var $=a.stack.split(`
`),r=n.stack.split(`
`),l=$.length-1,o=r.length-1;1<=l&&0<=o&&$[l]!==r[o];)o--;for(;1<=l&&0<=o;l--,o--)if($[l]!==r[o]){if(l!==1||o!==1)do if(l--,o--,0>o||$[l]!==r[o]){var i=`
`+$[l].replace(" at new "," at ");return _.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",_.displayName)),i}while(1<=l&&0<=o);break}}}finally{lr=!1,Error.prepareStackTrace=t}return(_=_?_.displayName||_.name:"")?Qt(_):""}function Js(_){switch(_.tag){case 5:return Qt(_.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 2:case 15:return _=or(_.type,!1),_;case 11:return _=or(_.type.render,!1),_;case 1:return _=or(_.type,!0),_;default:return""}}function Hr(_){if(_==null)return null;if(typeof _=="function")return _.displayName||_.name||null;if(typeof _=="string")return _;switch(_){case ct:return"Fragment";case st:return"Portal";case Or:return"Profiler";case wl:return"StrictMode";case wr:return"Suspense";case Mr:return"SuspenseList"}if(typeof _=="object")switch(_.$$typeof){case oa:return(_.displayName||"Context")+".Consumer";case la:return(_._context.displayName||"Context")+".Provider";case Ml:var e=_.render;return _=_.displayName,_||(_=e.displayName||e.name||"",_=_!==""?"ForwardRef("+_+")":"ForwardRef"),_;case Hl:return e=_.displayName||null,e!==null?e:Hr(_.type)||"Memo";case Re:e=_._payload,_=_._init;try{return Hr(_(e))}catch{}}return null}function Zs(_){var e=_.type;switch(_.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return _=e.render,_=_.displayName||_.name||"",e.displayName||(_!==""?"ForwardRef("+_+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hr(e);case 8:return e===wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function De(_){switch(typeof _){case"boolean":case"number":case"string":case"undefined":return _;case"object":return _;default:return""}}function aa(_){var e=_.type;return(_=_.nodeName)&&_.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qs(_){var e=aa(_)?"checked":"value",t=Object.getOwnPropertyDescriptor(_.constructor.prototype,e),n=""+_[e];if(!_.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var $=t.get,r=t.set;return Object.defineProperty(_,e,{configurable:!0,get:function(){return $.call(this)},set:function(l){n=""+l,r.call(this,l)}}),Object.defineProperty(_,e,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){_._valueTracker=null,delete _[e]}}}}function Dn(_){_._valueTracker||(_._valueTracker=qs(_))}function ua(_){if(!_)return!1;var e=_._valueTracker;if(!e)return!0;var t=e.getValue(),n="";return _&&(n=aa(_)?_.checked?"true":"false":_.value),_=n,_!==t?(e.setValue(_),!0):!1}function c$(_){if(_=_||(typeof document<"u"?document:void 0),typeof _>"u")return null;try{return _.activeElement||_.body}catch{return _.body}}function kr(_,e){var t=e.checked;return l_({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??_._wrapperState.initialChecked})}function xo(_,e){var t=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;t=De(e.value!=null?e.value:t),_._wrapperState={initialChecked:n,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sa(_,e){e=e.checked,e!=null&&Ol(_,"checked",e,!1)}function Wr(_,e){sa(_,e);var t=De(e.value),n=e.type;if(t!=null)n==="number"?(t===0&&_.value===""||_.value!=t)&&(_.value=""+t):_.value!==""+t&&(_.value=""+t);else if(n==="submit"||n==="reset"){_.removeAttribute("value");return}e.hasOwnProperty("value")?Ur(_,e.type,t):e.hasOwnProperty("defaultValue")&&Ur(_,e.type,De(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(_.defaultChecked=!!e.defaultChecked)}function Po(_,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+_._wrapperState.initialValue,t||e===_.value||(_.value=e),_.defaultValue=e}t=_.name,t!==""&&(_.name=""),_.defaultChecked=!!_._wrapperState.initialChecked,t!==""&&(_.name=t)}function Ur(_,e,t){(e!=="number"||c$(_.ownerDocument)!==_)&&(t==null?_.defaultValue=""+_._wrapperState.initialValue:_.defaultValue!==""+t&&(_.defaultValue=""+t))}var Jt=Array.isArray;function Rt(_,e,t,n){if(_=_.options,e){e={};for(var $=0;$<t.length;$++)e["$"+t[$]]=!0;for(t=0;t<_.length;t++)$=e.hasOwnProperty("$"+_[t].value),_[t].selected!==$&&(_[t].selected=$),$&&n&&(_[t].defaultSelected=!0)}else{for(t=""+De(t),e=null,$=0;$<_.length;$++){if(_[$].value===t){_[$].selected=!0,n&&(_[$].defaultSelected=!0);return}e!==null||_[$].disabled||(e=_[$])}e!==null&&(e.selected=!0)}}function Dr(_,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return l_({},e,{value:void 0,defaultValue:void 0,children:""+_._wrapperState.initialValue})}function Oo(_,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(N(92));if(Jt(t)){if(1<t.length)throw Error(N(93));t=t[0]}e=t}e==null&&(e=""),t=e}_._wrapperState={initialValue:De(t)}}function ca(_,e){var t=De(e.value),n=De(e.defaultValue);t!=null&&(t=""+t,t!==_.value&&(_.value=t),e.defaultValue==null&&_.defaultValue!==t&&(_.defaultValue=t)),n!=null&&(_.defaultValue=""+n)}function wo(_){var e=_.textContent;e===_._wrapperState.initialValue&&e!==""&&e!==null&&(_.value=e)}function fa(_){switch(_){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fr(_,e){return _==null||_==="http://www.w3.org/1999/xhtml"?fa(e):_==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":_}var Fn,Ta=function(_){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,n,$){MSApp.execUnsafeLocalFunction(function(){return _(e,t,n,$)})}:_}(function(_,e){if(_.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in _)_.innerHTML=e;else{for(Fn=Fn||document.createElement("div"),Fn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fn.firstChild;_.firstChild;)_.removeChild(_.firstChild);for(;e.firstChild;)_.appendChild(e.firstChild)}});function sn(_,e){if(e){var t=_.firstChild;if(t&&t===_.lastChild&&t.nodeType===3){t.nodeValue=e;return}}_.textContent=e}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_c=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(_){_c.forEach(function(e){e=e+_.charAt(0).toUpperCase()+_.substring(1),_n[e]=_n[_]})});function da(_,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||_n.hasOwnProperty(_)&&_n[_]?(""+e).trim():e+"px"}function La(_,e){_=_.style;for(var t in e)if(e.hasOwnProperty(t)){var n=t.indexOf("--")===0,$=da(t,e[t],n);t==="float"&&(t="cssFloat"),n?_.setProperty(t,$):_[t]=$}}var ec=l_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gr(_,e){if(e){if(ec[_]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,_));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function jr(_,e){if(_.indexOf("-")===-1)return typeof e.is=="string";switch(_){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Br=null;function kl(_){return _=_.target||_.srcElement||window,_.correspondingUseElement&&(_=_.correspondingUseElement),_.nodeType===3?_.parentNode:_}var Vr=null,gt=null,vt=null;function Mo(_){if(_=On(_)){if(typeof Vr!="function")throw Error(N(280));var e=_.stateNode;e&&(e=B$(e),Vr(_.stateNode,_.type,e))}}function Ea(_){gt?vt?vt.push(_):vt=[_]:gt=_}function Ia(){if(gt){var _=gt,e=vt;if(vt=gt=null,Mo(_),e)for(_=0;_<e.length;_++)Mo(e[_])}}function Aa(_,e){return _(e)}function ha(){}var ir=!1;function pa(_,e,t){if(ir)return _(e,t);ir=!0;try{return Aa(_,e,t)}finally{ir=!1,(gt!==null||vt!==null)&&(ha(),Ia())}}function cn(_,e){var t=_.stateNode;if(t===null)return null;var n=B$(t);if(n===null)return null;t=n[e];_:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(_=_.type,n=!(_==="button"||_==="input"||_==="select"||_==="textarea")),_=!n;break _;default:_=!1}if(_)return null;if(t&&typeof t!="function")throw Error(N(231,e,typeof t));return t}var Yr=!1;if(de)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{Yr=!1}function tc(_,e,t,n,$,r,l,o,i){var a=Array.prototype.slice.call(arguments,3);try{e.apply(t,a)}catch(L){this.onError(L)}}var en=!1,f$=null,T$=!1,zr=null,nc={onError:function(_){en=!0,f$=_}};function $c(_,e,t,n,$,r,l,o,i){en=!1,f$=null,tc.apply(nc,arguments)}function rc(_,e,t,n,$,r,l,o,i){if($c.apply(this,arguments),en){if(en){var a=f$;en=!1,f$=null}else throw Error(N(198));T$||(T$=!0,zr=a)}}function lt(_){var e=_,t=_;if(_.alternate)for(;e.return;)e=e.return;else{_=e;do e=_,e.flags&4098&&(t=e.return),_=e.return;while(_)}return e.tag===3?t:null}function ma(_){if(_.tag===13){var e=_.memoizedState;if(e===null&&(_=_.alternate,_!==null&&(e=_.memoizedState)),e!==null)return e.dehydrated}return null}function Ho(_){if(lt(_)!==_)throw Error(N(188))}function lc(_){var e=_.alternate;if(!e){if(e=lt(_),e===null)throw Error(N(188));return e!==_?null:_}for(var t=_,n=e;;){var $=t.return;if($===null)break;var r=$.alternate;if(r===null){if(n=$.return,n!==null){t=n;continue}break}if($.child===r.child){for(r=$.child;r;){if(r===t)return Ho($),_;if(r===n)return Ho($),e;r=r.sibling}throw Error(N(188))}if(t.return!==n.return)t=$,n=r;else{for(var l=!1,o=$.child;o;){if(o===t){l=!0,t=$,n=r;break}if(o===n){l=!0,n=$,t=r;break}o=o.sibling}if(!l){for(o=r.child;o;){if(o===t){l=!0,t=r,n=$;break}if(o===n){l=!0,n=r,t=$;break}o=o.sibling}if(!l)throw Error(N(189))}}if(t.alternate!==n)throw Error(N(190))}if(t.tag!==3)throw Error(N(188));return t.stateNode.current===t?_:e}function Ra(_){return _=lc(_),_!==null?ga(_):null}function ga(_){if(_.tag===5||_.tag===6)return _;for(_=_.child;_!==null;){var e=ga(_);if(e!==null)return e;_=_.sibling}return null}var va=F_.unstable_scheduleCallback,ko=F_.unstable_cancelCallback,oc=F_.unstable_shouldYield,ic=F_.unstable_requestPaint,u_=F_.unstable_now,ac=F_.unstable_getCurrentPriorityLevel,Wl=F_.unstable_ImmediatePriority,Ca=F_.unstable_UserBlockingPriority,d$=F_.unstable_NormalPriority,uc=F_.unstable_LowPriority,Sa=F_.unstable_IdlePriority,D$=null,oe=null;function sc(_){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(D$,_,void 0,(_.current.flags&128)===128)}catch{}}var ee=Math.clz32?Math.clz32:Tc,cc=Math.log,fc=Math.LN2;function Tc(_){return _>>>=0,_===0?32:31-(cc(_)/fc|0)|0}var Gn=64,jn=4194304;function Zt(_){switch(_&-_){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return _&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return _&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return _}}function L$(_,e){var t=_.pendingLanes;if(t===0)return 0;var n=0,$=_.suspendedLanes,r=_.pingedLanes,l=t&268435455;if(l!==0){var o=l&~$;o!==0?n=Zt(o):(r&=l,r!==0&&(n=Zt(r)))}else l=t&~$,l!==0?n=Zt(l):r!==0&&(n=Zt(r));if(n===0)return 0;if(e!==0&&e!==n&&!(e&$)&&($=n&-n,r=e&-e,$>=r||$===16&&(r&4194240)!==0))return e;if(n&4&&(n|=t&16),e=_.entangledLanes,e!==0)for(_=_.entanglements,e&=n;0<e;)t=31-ee(e),$=1<<t,n|=_[t],e&=~$;return n}function dc(_,e){switch(_){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lc(_,e){for(var t=_.suspendedLanes,n=_.pingedLanes,$=_.expirationTimes,r=_.pendingLanes;0<r;){var l=31-ee(r),o=1<<l,i=$[l];i===-1?(!(o&t)||o&n)&&($[l]=dc(o,e)):i<=e&&(_.expiredLanes|=o),r&=~o}}function Kr(_){return _=_.pendingLanes&-1073741825,_!==0?_:_&1073741824?1073741824:0}function ya(){var _=Gn;return Gn<<=1,!(Gn&4194240)&&(Gn=64),_}function ar(_){for(var e=[],t=0;31>t;t++)e.push(_);return e}function xn(_,e,t){_.pendingLanes|=e,e!==536870912&&(_.suspendedLanes=0,_.pingedLanes=0),_=_.eventTimes,e=31-ee(e),_[e]=t}function Ec(_,e){var t=_.pendingLanes&~e;_.pendingLanes=e,_.suspendedLanes=0,_.pingedLanes=0,_.expiredLanes&=e,_.mutableReadLanes&=e,_.entangledLanes&=e,e=_.entanglements;var n=_.eventTimes;for(_=_.expirationTimes;0<t;){var $=31-ee(t),r=1<<$;e[$]=0,n[$]=-1,_[$]=-1,t&=~r}}function Ul(_,e){var t=_.entangledLanes|=e;for(_=_.entanglements;t;){var n=31-ee(t),$=1<<n;$&e|_[n]&e&&(_[n]|=e),t&=~$}}var K=0;function Na(_){return _&=-_,1<_?4<_?_&268435455?16:536870912:4:1}var xa,Dl,Pa,Oa,wa,Xr=!1,Bn=[],xe=null,Pe=null,Oe=null,fn=new Map,Tn=new Map,ve=[],Ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wo(_,e){switch(_){case"focusin":case"focusout":xe=null;break;case"dragenter":case"dragleave":Pe=null;break;case"mouseover":case"mouseout":Oe=null;break;case"pointerover":case"pointerout":fn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(e.pointerId)}}function Vt(_,e,t,n,$,r){return _===null||_.nativeEvent!==r?(_={blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:r,targetContainers:[$]},e!==null&&(e=On(e),e!==null&&Dl(e)),_):(_.eventSystemFlags|=n,e=_.targetContainers,$!==null&&e.indexOf($)===-1&&e.push($),_)}function Ac(_,e,t,n,$){switch(e){case"focusin":return xe=Vt(xe,_,e,t,n,$),!0;case"dragenter":return Pe=Vt(Pe,_,e,t,n,$),!0;case"mouseover":return Oe=Vt(Oe,_,e,t,n,$),!0;case"pointerover":var r=$.pointerId;return fn.set(r,Vt(fn.get(r)||null,_,e,t,n,$)),!0;case"gotpointercapture":return r=$.pointerId,Tn.set(r,Vt(Tn.get(r)||null,_,e,t,n,$)),!0}return!1}function Ma(_){var e=Xe(_.target);if(e!==null){var t=lt(e);if(t!==null){if(e=t.tag,e===13){if(e=ma(t),e!==null){_.blockedOn=e,wa(_.priority,function(){Pa(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){_.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}_.blockedOn=null}function t$(_){if(_.blockedOn!==null)return!1;for(var e=_.targetContainers;0<e.length;){var t=br(_.domEventName,_.eventSystemFlags,e[0],_.nativeEvent);if(t===null){t=_.nativeEvent;var n=new t.constructor(t.type,t);Br=n,t.target.dispatchEvent(n),Br=null}else return e=On(t),e!==null&&Dl(e),_.blockedOn=t,!1;e.shift()}return!0}function Uo(_,e,t){t$(_)&&t.delete(e)}function hc(){Xr=!1,xe!==null&&t$(xe)&&(xe=null),Pe!==null&&t$(Pe)&&(Pe=null),Oe!==null&&t$(Oe)&&(Oe=null),fn.forEach(Uo),Tn.forEach(Uo)}function Yt(_,e){_.blockedOn===e&&(_.blockedOn=null,Xr||(Xr=!0,F_.unstable_scheduleCallback(F_.unstable_NormalPriority,hc)))}function dn(_){function e($){return Yt($,_)}if(0<Bn.length){Yt(Bn[0],_);for(var t=1;t<Bn.length;t++){var n=Bn[t];n.blockedOn===_&&(n.blockedOn=null)}}for(xe!==null&&Yt(xe,_),Pe!==null&&Yt(Pe,_),Oe!==null&&Yt(Oe,_),fn.forEach(e),Tn.forEach(e),t=0;t<ve.length;t++)n=ve[t],n.blockedOn===_&&(n.blockedOn=null);for(;0<ve.length&&(t=ve[0],t.blockedOn===null);)Ma(t),t.blockedOn===null&&ve.shift()}var Ct=Ae.ReactCurrentBatchConfig,E$=!0;function pc(_,e,t,n){var $=K,r=Ct.transition;Ct.transition=null;try{K=1,Fl(_,e,t,n)}finally{K=$,Ct.transition=r}}function mc(_,e,t,n){var $=K,r=Ct.transition;Ct.transition=null;try{K=4,Fl(_,e,t,n)}finally{K=$,Ct.transition=r}}function Fl(_,e,t,n){if(E$){var $=br(_,e,t,n);if($===null)Ar(_,e,n,I$,t),Wo(_,n);else if(Ac($,_,e,t,n))n.stopPropagation();else if(Wo(_,n),e&4&&-1<Ic.indexOf(_)){for(;$!==null;){var r=On($);if(r!==null&&xa(r),r=br(_,e,t,n),r===null&&Ar(_,e,n,I$,t),r===$)break;$=r}$!==null&&n.stopPropagation()}else Ar(_,e,n,null,t)}}var I$=null;function br(_,e,t,n){if(I$=null,_=kl(n),_=Xe(_),_!==null)if(e=lt(_),e===null)_=null;else if(t=e.tag,t===13){if(_=ma(e),_!==null)return _;_=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;_=null}else e!==_&&(_=null);return I$=_,null}function Ha(_){switch(_){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ac()){case Wl:return 1;case Ca:return 4;case d$:case uc:return 16;case Sa:return 536870912;default:return 16}default:return 16}}var Se=null,Gl=null,n$=null;function ka(){if(n$)return n$;var _,e=Gl,t=e.length,n,$="value"in Se?Se.value:Se.textContent,r=$.length;for(_=0;_<t&&e[_]===$[_];_++);var l=t-_;for(n=1;n<=l&&e[t-n]===$[r-n];n++);return n$=$.slice(_,1<n?1-n:void 0)}function $$(_){var e=_.keyCode;return"charCode"in _?(_=_.charCode,_===0&&e===13&&(_=13)):_=e,_===10&&(_=13),32<=_||_===13?_:0}function Vn(){return!0}function Do(){return!1}function j_(_){function e(t,n,$,r,l){this._reactName=t,this._targetInst=$,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var o in _)_.hasOwnProperty(o)&&(t=_[o],this[o]=t?t(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Vn:Do,this.isPropagationStopped=Do,this}return l_(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),e}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(_){return _.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=j_(Wt),Pn=l_({},Wt,{view:0,detail:0}),Rc=j_(Pn),ur,sr,zt,F$=l_({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(_){return _.relatedTarget===void 0?_.fromElement===_.srcElement?_.toElement:_.fromElement:_.relatedTarget},movementX:function(_){return"movementX"in _?_.movementX:(_!==zt&&(zt&&_.type==="mousemove"?(ur=_.screenX-zt.screenX,sr=_.screenY-zt.screenY):sr=ur=0,zt=_),ur)},movementY:function(_){return"movementY"in _?_.movementY:sr}}),Fo=j_(F$),gc=l_({},F$,{dataTransfer:0}),vc=j_(gc),Cc=l_({},Pn,{relatedTarget:0}),cr=j_(Cc),Sc=l_({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),yc=j_(Sc),Nc=l_({},Wt,{clipboardData:function(_){return"clipboardData"in _?_.clipboardData:window.clipboardData}}),xc=j_(Nc),Pc=l_({},Wt,{data:0}),Go=j_(Pc),Oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hc(_){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(_):(_=Mc[_])?!!e[_]:!1}function Bl(){return Hc}var kc=l_({},Pn,{key:function(_){if(_.key){var e=Oc[_.key]||_.key;if(e!=="Unidentified")return e}return _.type==="keypress"?(_=$$(_),_===13?"Enter":String.fromCharCode(_)):_.type==="keydown"||_.type==="keyup"?wc[_.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(_){return _.type==="keypress"?$$(_):0},keyCode:function(_){return _.type==="keydown"||_.type==="keyup"?_.keyCode:0},which:function(_){return _.type==="keypress"?$$(_):_.type==="keydown"||_.type==="keyup"?_.keyCode:0}}),Wc=j_(kc),Uc=l_({},F$,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jo=j_(Uc),Dc=l_({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),Fc=j_(Dc),Gc=l_({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),jc=j_(Gc),Bc=l_({},F$,{deltaX:function(_){return"deltaX"in _?_.deltaX:"wheelDeltaX"in _?-_.wheelDeltaX:0},deltaY:function(_){return"deltaY"in _?_.deltaY:"wheelDeltaY"in _?-_.wheelDeltaY:"wheelDelta"in _?-_.wheelDelta:0},deltaZ:0,deltaMode:0}),Vc=j_(Bc),Yc=[9,13,27,32],Vl=de&&"CompositionEvent"in window,tn=null;de&&"documentMode"in document&&(tn=document.documentMode);var zc=de&&"TextEvent"in window&&!tn,Wa=de&&(!Vl||tn&&8<tn&&11>=tn),Bo=" ",Vo=!1;function Ua(_,e){switch(_){case"keyup":return Yc.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Da(_){return _=_.detail,typeof _=="object"&&"data"in _?_.data:null}var ft=!1;function Kc(_,e){switch(_){case"compositionend":return Da(e);case"keypress":return e.which!==32?null:(Vo=!0,Bo);case"textInput":return _=e.data,_===Bo&&Vo?null:_;default:return null}}function Xc(_,e){if(ft)return _==="compositionend"||!Vl&&Ua(_,e)?(_=ka(),n$=Gl=Se=null,ft=!1,_):null;switch(_){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wa&&e.locale!=="ko"?null:e.data;default:return null}}var bc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yo(_){var e=_&&_.nodeName&&_.nodeName.toLowerCase();return e==="input"?!!bc[_.type]:e==="textarea"}function Fa(_,e,t,n){Ea(n),e=A$(e,"onChange"),0<e.length&&(t=new jl("onChange","change",null,t,n),_.push({event:t,listeners:e}))}var nn=null,Ln=null;function Qc(_){Ja(_,0)}function G$(_){var e=Lt(_);if(ua(e))return _}function Jc(_,e){if(_==="change")return e}var Ga=!1;if(de){var fr;if(de){var Tr="oninput"in document;if(!Tr){var zo=document.createElement("div");zo.setAttribute("oninput","return;"),Tr=typeof zo.oninput=="function"}fr=Tr}else fr=!1;Ga=fr&&(!document.documentMode||9<document.documentMode)}function Ko(){nn&&(nn.detachEvent("onpropertychange",ja),Ln=nn=null)}function ja(_){if(_.propertyName==="value"&&G$(Ln)){var e=[];Fa(e,Ln,_,kl(_)),pa(Qc,e)}}function Zc(_,e,t){_==="focusin"?(Ko(),nn=e,Ln=t,nn.attachEvent("onpropertychange",ja)):_==="focusout"&&Ko()}function qc(_){if(_==="selectionchange"||_==="keyup"||_==="keydown")return G$(Ln)}function _f(_,e){if(_==="click")return G$(e)}function ef(_,e){if(_==="input"||_==="change")return G$(e)}function tf(_,e){return _===e&&(_!==0||1/_===1/e)||_!==_&&e!==e}var ne=typeof Object.is=="function"?Object.is:tf;function En(_,e){if(ne(_,e))return!0;if(typeof _!="object"||_===null||typeof e!="object"||e===null)return!1;var t=Object.keys(_),n=Object.keys(e);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var $=t[n];if(!Pr.call(e,$)||!ne(_[$],e[$]))return!1}return!0}function Xo(_){for(;_&&_.firstChild;)_=_.firstChild;return _}function bo(_,e){var t=Xo(_);_=0;for(var n;t;){if(t.nodeType===3){if(n=_+t.textContent.length,_<=e&&n>=e)return{node:t,offset:e-_};_=n}_:{for(;t;){if(t.nextSibling){t=t.nextSibling;break _}t=t.parentNode}t=void 0}t=Xo(t)}}function Ba(_,e){return _&&e?_===e?!0:_&&_.nodeType===3?!1:e&&e.nodeType===3?Ba(_,e.parentNode):"contains"in _?_.contains(e):_.compareDocumentPosition?!!(_.compareDocumentPosition(e)&16):!1:!1}function Va(){for(var _=window,e=c$();e instanceof _.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)_=e.contentWindow;else break;e=c$(_.document)}return e}function Yl(_){var e=_&&_.nodeName&&_.nodeName.toLowerCase();return e&&(e==="input"&&(_.type==="text"||_.type==="search"||_.type==="tel"||_.type==="url"||_.type==="password")||e==="textarea"||_.contentEditable==="true")}function nf(_){var e=Va(),t=_.focusedElem,n=_.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ba(t.ownerDocument.documentElement,t)){if(n!==null&&Yl(t)){if(e=n.start,_=n.end,_===void 0&&(_=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(_,t.value.length);else if(_=(e=t.ownerDocument||document)&&e.defaultView||window,_.getSelection){_=_.getSelection();var $=t.textContent.length,r=Math.min(n.start,$);n=n.end===void 0?r:Math.min(n.end,$),!_.extend&&r>n&&($=n,n=r,r=$),$=bo(t,r);var l=bo(t,n);$&&l&&(_.rangeCount!==1||_.anchorNode!==$.node||_.anchorOffset!==$.offset||_.focusNode!==l.node||_.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart($.node,$.offset),_.removeAllRanges(),r>n?(_.addRange(e),_.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),_.addRange(e)))}}for(e=[],_=t;_=_.parentNode;)_.nodeType===1&&e.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)_=e[t],_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}var $f=de&&"documentMode"in document&&11>=document.documentMode,Tt=null,Qr=null,$n=null,Jr=!1;function Qo(_,e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Jr||Tt==null||Tt!==c$(n)||(n=Tt,"selectionStart"in n&&Yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),$n&&En($n,n)||($n=n,n=A$(Qr,"onSelect"),0<n.length&&(e=new jl("onSelect","select",null,e,t),_.push({event:e,listeners:n}),e.target=Tt)))}function Yn(_,e){var t={};return t[_.toLowerCase()]=e.toLowerCase(),t["Webkit"+_]="webkit"+e,t["Moz"+_]="moz"+e,t}var dt={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionend:Yn("Transition","TransitionEnd")},dr={},Ya={};de&&(Ya=document.createElement("div").style,"AnimationEvent"in window||(delete dt.animationend.animation,delete dt.animationiteration.animation,delete dt.animationstart.animation),"TransitionEvent"in window||delete dt.transitionend.transition);function j$(_){if(dr[_])return dr[_];if(!dt[_])return _;var e=dt[_],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ya)return dr[_]=e[t];return _}var za=j$("animationend"),Ka=j$("animationiteration"),Xa=j$("animationstart"),ba=j$("transitionend"),Qa=new Map,Jo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ge(_,e){Qa.set(_,e),rt(e,[_])}for(var Lr=0;Lr<Jo.length;Lr++){var Er=Jo[Lr],rf=Er.toLowerCase(),lf=Er[0].toUpperCase()+Er.slice(1);Ge(rf,"on"+lf)}Ge(za,"onAnimationEnd");Ge(Ka,"onAnimationIteration");Ge(Xa,"onAnimationStart");Ge("dblclick","onDoubleClick");Ge("focusin","onFocus");Ge("focusout","onBlur");Ge(ba,"onTransitionEnd");Nt("onMouseEnter",["mouseout","mouseover"]);Nt("onMouseLeave",["mouseout","mouseover"]);Nt("onPointerEnter",["pointerout","pointerover"]);Nt("onPointerLeave",["pointerout","pointerover"]);rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));function Zo(_,e,t){var n=_.type||"unknown-event";_.currentTarget=t,rc(n,e,void 0,_),_.currentTarget=null}function Ja(_,e){e=(e&4)!==0;for(var t=0;t<_.length;t++){var n=_[t],$=n.event;n=n.listeners;_:{var r=void 0;if(e)for(var l=n.length-1;0<=l;l--){var o=n[l],i=o.instance,a=o.currentTarget;if(o=o.listener,i!==r&&$.isPropagationStopped())break _;Zo($,o,a),r=i}else for(l=0;l<n.length;l++){if(o=n[l],i=o.instance,a=o.currentTarget,o=o.listener,i!==r&&$.isPropagationStopped())break _;Zo($,o,a),r=i}}}if(T$)throw _=zr,T$=!1,zr=null,_}function __(_,e){var t=e[tl];t===void 0&&(t=e[tl]=new Set);var n=_+"__bubble";t.has(n)||(Za(e,_,2,!1),t.add(n))}function Ir(_,e,t){var n=0;e&&(n|=4),Za(t,_,n,e)}var zn="_reactListening"+Math.random().toString(36).slice(2);function In(_){if(!_[zn]){_[zn]=!0,ra.forEach(function(t){t!=="selectionchange"&&(of.has(t)||Ir(t,!1,_),Ir(t,!0,_))});var e=_.nodeType===9?_:_.ownerDocument;e===null||e[zn]||(e[zn]=!0,Ir("selectionchange",!1,e))}}function Za(_,e,t,n){switch(Ha(e)){case 1:var $=pc;break;case 4:$=mc;break;default:$=Fl}t=$.bind(null,e,t,_),$=void 0,!Yr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||($=!0),n?$!==void 0?_.addEventListener(e,t,{capture:!0,passive:$}):_.addEventListener(e,t,!0):$!==void 0?_.addEventListener(e,t,{passive:$}):_.addEventListener(e,t,!1)}function Ar(_,e,t,n,$){var r=n;if(!(e&1)&&!(e&2)&&n!==null)_:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===$||o.nodeType===8&&o.parentNode===$)break;if(l===4)for(l=n.return;l!==null;){var i=l.tag;if((i===3||i===4)&&(i=l.stateNode.containerInfo,i===$||i.nodeType===8&&i.parentNode===$))return;l=l.return}for(;o!==null;){if(l=Xe(o),l===null)return;if(i=l.tag,i===5||i===6){n=r=l;continue _}o=o.parentNode}}n=n.return}pa(function(){var a=r,L=kl(t),T=[];_:{var f=Qa.get(_);if(f!==void 0){var R=jl,I=_;switch(_){case"keypress":if($$(t)===0)break _;case"keydown":case"keyup":R=Wc;break;case"focusin":I="focus",R=cr;break;case"focusout":I="blur",R=cr;break;case"beforeblur":case"afterblur":R=cr;break;case"click":if(t.button===2)break _;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=vc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Fc;break;case za:case Ka:case Xa:R=yc;break;case ba:R=jc;break;case"scroll":R=Rc;break;case"wheel":R=Vc;break;case"copy":case"cut":case"paste":R=xc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=jo}var g=(e&4)!==0,S=!g&&_==="scroll",c=g?f!==null?f+"Capture":null:f;g=[];for(var u=a,d;u!==null;){d=u;var p=d.stateNode;if(d.tag===5&&p!==null&&(d=p,c!==null&&(p=cn(u,c),p!=null&&g.push(An(u,p,d)))),S)break;u=u.return}0<g.length&&(f=new R(f,I,null,t,L),T.push({event:f,listeners:g}))}}if(!(e&7)){_:{if(f=_==="mouseover"||_==="pointerover",R=_==="mouseout"||_==="pointerout",f&&t!==Br&&(I=t.relatedTarget||t.fromElement)&&(Xe(I)||I[Le]))break _;if((R||f)&&(f=L.window===L?L:(f=L.ownerDocument)?f.defaultView||f.parentWindow:window,R?(I=t.relatedTarget||t.toElement,R=a,I=I?Xe(I):null,I!==null&&(S=lt(I),I!==S||I.tag!==5&&I.tag!==6)&&(I=null)):(R=null,I=a),R!==I)){if(g=Fo,p="onMouseLeave",c="onMouseEnter",u="mouse",(_==="pointerout"||_==="pointerover")&&(g=jo,p="onPointerLeave",c="onPointerEnter",u="pointer"),S=R==null?f:Lt(R),d=I==null?f:Lt(I),f=new g(p,u+"leave",R,t,L),f.target=S,f.relatedTarget=d,p=null,Xe(L)===a&&(g=new g(c,u+"enter",I,t,L),g.target=d,g.relatedTarget=S,p=g),S=p,R&&I)e:{for(g=R,c=I,u=0,d=g;d;d=at(d))u++;for(d=0,p=c;p;p=at(p))d++;for(;0<u-d;)g=at(g),u--;for(;0<d-u;)c=at(c),d--;for(;u--;){if(g===c||c!==null&&g===c.alternate)break e;g=at(g),c=at(c)}g=null}else g=null;R!==null&&qo(T,f,R,g,!1),I!==null&&S!==null&&qo(T,S,I,g,!0)}}_:{if(f=a?Lt(a):window,R=f.nodeName&&f.nodeName.toLowerCase(),R==="select"||R==="input"&&f.type==="file")var y=Jc;else if(Yo(f))if(Ga)y=ef;else{y=qc;var M=Zc}else(R=f.nodeName)&&R.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(y=_f);if(y&&(y=y(_,a))){Fa(T,y,t,L);break _}M&&M(_,f,a),_==="focusout"&&(M=f._wrapperState)&&M.controlled&&f.type==="number"&&Ur(f,"number",f.value)}switch(M=a?Lt(a):window,_){case"focusin":(Yo(M)||M.contentEditable==="true")&&(Tt=M,Qr=a,$n=null);break;case"focusout":$n=Qr=Tt=null;break;case"mousedown":Jr=!0;break;case"contextmenu":case"mouseup":case"dragend":Jr=!1,Qo(T,t,L);break;case"selectionchange":if($f)break;case"keydown":case"keyup":Qo(T,t,L)}var w;if(Vl)_:{switch(_){case"compositionstart":var H="onCompositionStart";break _;case"compositionend":H="onCompositionEnd";break _;case"compositionupdate":H="onCompositionUpdate";break _}H=void 0}else ft?Ua(_,t)&&(H="onCompositionEnd"):_==="keydown"&&t.keyCode===229&&(H="onCompositionStart");H&&(Wa&&t.locale!=="ko"&&(ft||H!=="onCompositionStart"?H==="onCompositionEnd"&&ft&&(w=ka()):(Se=L,Gl="value"in Se?Se.value:Se.textContent,ft=!0)),M=A$(a,H),0<M.length&&(H=new Go(H,_,null,t,L),T.push({event:H,listeners:M}),w?H.data=w:(w=Da(t),w!==null&&(H.data=w)))),(w=zc?Kc(_,t):Xc(_,t))&&(a=A$(a,"onBeforeInput"),0<a.length&&(L=new Go("onBeforeInput","beforeinput",null,t,L),T.push({event:L,listeners:a}),L.data=w))}Ja(T,e)})}function An(_,e,t){return{instance:_,listener:e,currentTarget:t}}function A$(_,e){for(var t=e+"Capture",n=[];_!==null;){var $=_,r=$.stateNode;$.tag===5&&r!==null&&($=r,r=cn(_,t),r!=null&&n.unshift(An(_,r,$)),r=cn(_,e),r!=null&&n.push(An(_,r,$))),_=_.return}return n}function at(_){if(_===null)return null;do _=_.return;while(_&&_.tag!==5);return _||null}function qo(_,e,t,n,$){for(var r=e._reactName,l=[];t!==null&&t!==n;){var o=t,i=o.alternate,a=o.stateNode;if(i!==null&&i===n)break;o.tag===5&&a!==null&&(o=a,$?(i=cn(t,r),i!=null&&l.unshift(An(t,i,o))):$||(i=cn(t,r),i!=null&&l.push(An(t,i,o)))),t=t.return}l.length!==0&&_.push({event:e,listeners:l})}var af=/\r\n?/g,uf=/\u0000|\uFFFD/g;function _i(_){return(typeof _=="string"?_:""+_).replace(af,`
`).replace(uf,"")}function Kn(_,e,t){if(e=_i(e),_i(_)!==e&&t)throw Error(N(425))}function h$(){}var Zr=null,qr=null;function _l(_,e){return _==="textarea"||_==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,sf=typeof clearTimeout=="function"?clearTimeout:void 0,ei=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof ei<"u"?function(_){return ei.resolve(null).then(_).catch(ff)}:el;function ff(_){setTimeout(function(){throw _})}function hr(_,e){var t=e,n=0;do{var $=t.nextSibling;if(_.removeChild(t),$&&$.nodeType===8)if(t=$.data,t==="/$"){if(n===0){_.removeChild($),dn(e);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=$}while(t);dn(e)}function we(_){for(;_!=null;_=_.nextSibling){var e=_.nodeType;if(e===1||e===3)break;if(e===8){if(e=_.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return _}function ti(_){_=_.previousSibling;for(var e=0;_;){if(_.nodeType===8){var t=_.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return _;e--}else t==="/$"&&e++}_=_.previousSibling}return null}var Ut=Math.random().toString(36).slice(2),le="__reactFiber$"+Ut,hn="__reactProps$"+Ut,Le="__reactContainer$"+Ut,tl="__reactEvents$"+Ut,Tf="__reactListeners$"+Ut,df="__reactHandles$"+Ut;function Xe(_){var e=_[le];if(e)return e;for(var t=_.parentNode;t;){if(e=t[Le]||t[le]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(_=ti(_);_!==null;){if(t=_[le])return t;_=ti(_)}return e}_=t,t=_.parentNode}return null}function On(_){return _=_[le]||_[Le],!_||_.tag!==5&&_.tag!==6&&_.tag!==13&&_.tag!==3?null:_}function Lt(_){if(_.tag===5||_.tag===6)return _.stateNode;throw Error(N(33))}function B$(_){return _[hn]||null}var nl=[],Et=-1;function je(_){return{current:_}}function e_(_){0>Et||(_.current=nl[Et],nl[Et]=null,Et--)}function J(_,e){Et++,nl[Et]=_.current,_.current=e}var Fe={},v_=je(Fe),w_=je(!1),_t=Fe;function xt(_,e){var t=_.type.contextTypes;if(!t)return Fe;var n=_.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var $={},r;for(r in t)$[r]=e[r];return n&&(_=_.stateNode,_.__reactInternalMemoizedUnmaskedChildContext=e,_.__reactInternalMemoizedMaskedChildContext=$),$}function M_(_){return _=_.childContextTypes,_!=null}function p$(){e_(w_),e_(v_)}function ni(_,e,t){if(v_.current!==Fe)throw Error(N(168));J(v_,e),J(w_,t)}function qa(_,e,t){var n=_.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var $ in n)if(!($ in e))throw Error(N(108,Zs(_)||"Unknown",$));return l_({},t,n)}function m$(_){return _=(_=_.stateNode)&&_.__reactInternalMemoizedMergedChildContext||Fe,_t=v_.current,J(v_,_),J(w_,w_.current),!0}function $i(_,e,t){var n=_.stateNode;if(!n)throw Error(N(169));t?(_=qa(_,e,_t),n.__reactInternalMemoizedMergedChildContext=_,e_(w_),e_(v_),J(v_,_)):e_(w_),J(w_,t)}var ue=null,V$=!1,pr=!1;function _u(_){ue===null?ue=[_]:ue.push(_)}function Lf(_){V$=!0,_u(_)}function Be(){if(!pr&&ue!==null){pr=!0;var _=0,e=K;try{var t=ue;for(K=1;_<t.length;_++){var n=t[_];do n=n(!0);while(n!==null)}ue=null,V$=!1}catch($){throw ue!==null&&(ue=ue.slice(_+1)),va(Wl,Be),$}finally{K=e,pr=!1}}return null}var It=[],At=0,R$=null,g$=0,B_=[],V_=0,et=null,se=1,ce="";function Ye(_,e){It[At++]=g$,It[At++]=R$,R$=_,g$=e}function eu(_,e,t){B_[V_++]=se,B_[V_++]=ce,B_[V_++]=et,et=_;var n=se;_=ce;var $=32-ee(n)-1;n&=~(1<<$),t+=1;var r=32-ee(e)+$;if(30<r){var l=$-$%5;r=(n&(1<<l)-1).toString(32),n>>=l,$-=l,se=1<<32-ee(e)+$|t<<$|n,ce=r+_}else se=1<<r|t<<$|n,ce=_}function zl(_){_.return!==null&&(Ye(_,1),eu(_,1,0))}function Kl(_){for(;_===R$;)R$=It[--At],It[At]=null,g$=It[--At],It[At]=null;for(;_===et;)et=B_[--V_],B_[V_]=null,ce=B_[--V_],B_[V_]=null,se=B_[--V_],B_[V_]=null}var D_=null,U_=null,n_=!1,_e=null;function tu(_,e){var t=Y_(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=_,e=_.deletions,e===null?(_.deletions=[t],_.flags|=16):e.push(t)}function ri(_,e){switch(_.tag){case 5:var t=_.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(_.stateNode=e,D_=_,U_=we(e.firstChild),!0):!1;case 6:return e=_.pendingProps===""||e.nodeType!==3?null:e,e!==null?(_.stateNode=e,D_=_,U_=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=et!==null?{id:se,overflow:ce}:null,_.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Y_(18,null,null,0),t.stateNode=e,t.return=_,_.child=t,D_=_,U_=null,!0):!1;default:return!1}}function $l(_){return(_.mode&1)!==0&&(_.flags&128)===0}function rl(_){if(n_){var e=U_;if(e){var t=e;if(!ri(_,e)){if($l(_))throw Error(N(418));e=we(t.nextSibling);var n=D_;e&&ri(_,e)?tu(n,t):(_.flags=_.flags&-4097|2,n_=!1,D_=_)}}else{if($l(_))throw Error(N(418));_.flags=_.flags&-4097|2,n_=!1,D_=_}}}function li(_){for(_=_.return;_!==null&&_.tag!==5&&_.tag!==3&&_.tag!==13;)_=_.return;D_=_}function Xn(_){if(_!==D_)return!1;if(!n_)return li(_),n_=!0,!1;var e;if((e=_.tag!==3)&&!(e=_.tag!==5)&&(e=_.type,e=e!=="head"&&e!=="body"&&!_l(_.type,_.memoizedProps)),e&&(e=U_)){if($l(_))throw nu(),Error(N(418));for(;e;)tu(_,e),e=we(e.nextSibling)}if(li(_),_.tag===13){if(_=_.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(N(317));_:{for(_=_.nextSibling,e=0;_;){if(_.nodeType===8){var t=_.data;if(t==="/$"){if(e===0){U_=we(_.nextSibling);break _}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}_=_.nextSibling}U_=null}}else U_=D_?we(_.stateNode.nextSibling):null;return!0}function nu(){for(var _=U_;_;)_=we(_.nextSibling)}function Pt(){U_=D_=null,n_=!1}function Xl(_){_e===null?_e=[_]:_e.push(_)}var Ef=Ae.ReactCurrentBatchConfig;function Kt(_,e,t){if(_=t.ref,_!==null&&typeof _!="function"&&typeof _!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(N(309));var n=t.stateNode}if(!n)throw Error(N(147,_));var $=n,r=""+_;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(l){var o=$.refs;l===null?delete o[r]:o[r]=l},e._stringRef=r,e)}if(typeof _!="string")throw Error(N(284));if(!t._owner)throw Error(N(290,_))}return _}function bn(_,e){throw _=Object.prototype.toString.call(e),Error(N(31,_==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":_))}function oi(_){var e=_._init;return e(_._payload)}function $u(_){function e(c,u){if(_){var d=c.deletions;d===null?(c.deletions=[u],c.flags|=16):d.push(u)}}function t(c,u){if(!_)return null;for(;u!==null;)e(c,u),u=u.sibling;return null}function n(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function $(c,u){return c=We(c,u),c.index=0,c.sibling=null,c}function r(c,u,d){return c.index=d,_?(d=c.alternate,d!==null?(d=d.index,d<u?(c.flags|=2,u):d):(c.flags|=2,u)):(c.flags|=1048576,u)}function l(c){return _&&c.alternate===null&&(c.flags|=2),c}function o(c,u,d,p){return u===null||u.tag!==6?(u=yr(d,c.mode,p),u.return=c,u):(u=$(u,d),u.return=c,u)}function i(c,u,d,p){var y=d.type;return y===ct?L(c,u,d.props.children,p,d.key):u!==null&&(u.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Re&&oi(y)===u.type)?(p=$(u,d.props),p.ref=Kt(c,u,d),p.return=c,p):(p=s$(d.type,d.key,d.props,null,c.mode,p),p.ref=Kt(c,u,d),p.return=c,p)}function a(c,u,d,p){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Nr(d,c.mode,p),u.return=c,u):(u=$(u,d.children||[]),u.return=c,u)}function L(c,u,d,p,y){return u===null||u.tag!==7?(u=Ze(d,c.mode,p,y),u.return=c,u):(u=$(u,d),u.return=c,u)}function T(c,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=yr(""+u,c.mode,d),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Un:return d=s$(u.type,u.key,u.props,null,c.mode,d),d.ref=Kt(c,null,u),d.return=c,d;case st:return u=Nr(u,c.mode,d),u.return=c,u;case Re:var p=u._init;return T(c,p(u._payload),d)}if(Jt(u)||jt(u))return u=Ze(u,c.mode,d,null),u.return=c,u;bn(c,u)}return null}function f(c,u,d,p){var y=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return y!==null?null:o(c,u,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Un:return d.key===y?i(c,u,d,p):null;case st:return d.key===y?a(c,u,d,p):null;case Re:return y=d._init,f(c,u,y(d._payload),p)}if(Jt(d)||jt(d))return y!==null?null:L(c,u,d,p,null);bn(c,d)}return null}function R(c,u,d,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return c=c.get(d)||null,o(u,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Un:return c=c.get(p.key===null?d:p.key)||null,i(u,c,p,y);case st:return c=c.get(p.key===null?d:p.key)||null,a(u,c,p,y);case Re:var M=p._init;return R(c,u,d,M(p._payload),y)}if(Jt(p)||jt(p))return c=c.get(d)||null,L(u,c,p,y,null);bn(u,p)}return null}function I(c,u,d,p){for(var y=null,M=null,w=u,H=u=0,Y=null;w!==null&&H<d.length;H++){w.index>H?(Y=w,w=null):Y=w.sibling;var F=f(c,w,d[H],p);if(F===null){w===null&&(w=Y);break}_&&w&&F.alternate===null&&e(c,w),u=r(F,u,H),M===null?y=F:M.sibling=F,M=F,w=Y}if(H===d.length)return t(c,w),n_&&Ye(c,H),y;if(w===null){for(;H<d.length;H++)w=T(c,d[H],p),w!==null&&(u=r(w,u,H),M===null?y=w:M.sibling=w,M=w);return n_&&Ye(c,H),y}for(w=n(c,w);H<d.length;H++)Y=R(w,c,H,d[H],p),Y!==null&&(_&&Y.alternate!==null&&w.delete(Y.key===null?H:Y.key),u=r(Y,u,H),M===null?y=Y:M.sibling=Y,M=Y);return _&&w.forEach(function(C_){return e(c,C_)}),n_&&Ye(c,H),y}function g(c,u,d,p){var y=jt(d);if(typeof y!="function")throw Error(N(150));if(d=y.call(d),d==null)throw Error(N(151));for(var M=y=null,w=u,H=u=0,Y=null,F=d.next();w!==null&&!F.done;H++,F=d.next()){w.index>H?(Y=w,w=null):Y=w.sibling;var C_=f(c,w,F.value,p);if(C_===null){w===null&&(w=Y);break}_&&w&&C_.alternate===null&&e(c,w),u=r(C_,u,H),M===null?y=C_:M.sibling=C_,M=C_,w=Y}if(F.done)return t(c,w),n_&&Ye(c,H),y;if(w===null){for(;!F.done;H++,F=d.next())F=T(c,F.value,p),F!==null&&(u=r(F,u,H),M===null?y=F:M.sibling=F,M=F);return n_&&Ye(c,H),y}for(w=n(c,w);!F.done;H++,F=d.next())F=R(w,c,H,F.value,p),F!==null&&(_&&F.alternate!==null&&w.delete(F.key===null?H:F.key),u=r(F,u,H),M===null?y=F:M.sibling=F,M=F);return _&&w.forEach(function(b_){return e(c,b_)}),n_&&Ye(c,H),y}function S(c,u,d,p){if(typeof d=="object"&&d!==null&&d.type===ct&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Un:_:{for(var y=d.key,M=u;M!==null;){if(M.key===y){if(y=d.type,y===ct){if(M.tag===7){t(c,M.sibling),u=$(M,d.props.children),u.return=c,c=u;break _}}else if(M.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===Re&&oi(y)===M.type){t(c,M.sibling),u=$(M,d.props),u.ref=Kt(c,M,d),u.return=c,c=u;break _}t(c,M);break}else e(c,M);M=M.sibling}d.type===ct?(u=Ze(d.props.children,c.mode,p,d.key),u.return=c,c=u):(p=s$(d.type,d.key,d.props,null,c.mode,p),p.ref=Kt(c,u,d),p.return=c,c=p)}return l(c);case st:_:{for(M=d.key;u!==null;){if(u.key===M)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){t(c,u.sibling),u=$(u,d.children||[]),u.return=c,c=u;break _}else{t(c,u);break}else e(c,u);u=u.sibling}u=Nr(d,c.mode,p),u.return=c,c=u}return l(c);case Re:return M=d._init,S(c,u,M(d._payload),p)}if(Jt(d))return I(c,u,d,p);if(jt(d))return g(c,u,d,p);bn(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(t(c,u.sibling),u=$(u,d),u.return=c,c=u):(t(c,u),u=yr(d,c.mode,p),u.return=c,c=u),l(c)):t(c,u)}return S}var Ot=$u(!0),ru=$u(!1),v$=je(null),C$=null,ht=null,bl=null;function Ql(){bl=ht=C$=null}function Jl(_){var e=v$.current;e_(v$),_._currentValue=e}function ll(_,e,t){for(;_!==null;){var n=_.alternate;if((_.childLanes&e)!==e?(_.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),_===t)break;_=_.return}}function St(_,e){C$=_,bl=ht=null,_=_.dependencies,_!==null&&_.firstContext!==null&&(_.lanes&e&&(O_=!0),_.firstContext=null)}function K_(_){var e=_._currentValue;if(bl!==_)if(_={context:_,memoizedValue:e,next:null},ht===null){if(C$===null)throw Error(N(308));ht=_,C$.dependencies={lanes:0,firstContext:_}}else ht=ht.next=_;return e}var be=null;function Zl(_){be===null?be=[_]:be.push(_)}function lu(_,e,t,n){var $=e.interleaved;return $===null?(t.next=t,Zl(e)):(t.next=$.next,$.next=t),e.interleaved=t,Ee(_,n)}function Ee(_,e){_.lanes|=e;var t=_.alternate;for(t!==null&&(t.lanes|=e),t=_,_=_.return;_!==null;)_.childLanes|=e,t=_.alternate,t!==null&&(t.childLanes|=e),t=_,_=_.return;return t.tag===3?t.stateNode:null}var ge=!1;function ql(_){_.updateQueue={baseState:_.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(_,e){_=_.updateQueue,e.updateQueue===_&&(e.updateQueue={baseState:_.baseState,firstBaseUpdate:_.firstBaseUpdate,lastBaseUpdate:_.lastBaseUpdate,shared:_.shared,effects:_.effects})}function fe(_,e){return{eventTime:_,lane:e,tag:0,payload:null,callback:null,next:null}}function Me(_,e,t){var n=_.updateQueue;if(n===null)return null;if(n=n.shared,z&2){var $=n.pending;return $===null?e.next=e:(e.next=$.next,$.next=e),n.pending=e,Ee(_,t)}return $=n.interleaved,$===null?(e.next=e,Zl(n)):(e.next=$.next,$.next=e),n.interleaved=e,Ee(_,t)}function r$(_,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var n=e.lanes;n&=_.pendingLanes,t|=n,e.lanes=t,Ul(_,t)}}function ii(_,e){var t=_.updateQueue,n=_.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var $=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?$=r=l:r=r.next=l,t=t.next}while(t!==null);r===null?$=r=e:r=r.next=e}else $=r=e;t={baseState:n.baseState,firstBaseUpdate:$,lastBaseUpdate:r,shared:n.shared,effects:n.effects},_.updateQueue=t;return}_=t.lastBaseUpdate,_===null?t.firstBaseUpdate=e:_.next=e,t.lastBaseUpdate=e}function S$(_,e,t,n){var $=_.updateQueue;ge=!1;var r=$.firstBaseUpdate,l=$.lastBaseUpdate,o=$.shared.pending;if(o!==null){$.shared.pending=null;var i=o,a=i.next;i.next=null,l===null?r=a:l.next=a,l=i;var L=_.alternate;L!==null&&(L=L.updateQueue,o=L.lastBaseUpdate,o!==l&&(o===null?L.firstBaseUpdate=a:o.next=a,L.lastBaseUpdate=i))}if(r!==null){var T=$.baseState;l=0,L=a=i=null,o=r;do{var f=o.lane,R=o.eventTime;if((n&f)===f){L!==null&&(L=L.next={eventTime:R,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});_:{var I=_,g=o;switch(f=e,R=t,g.tag){case 1:if(I=g.payload,typeof I=="function"){T=I.call(R,T,f);break _}T=I;break _;case 3:I.flags=I.flags&-65537|128;case 0:if(I=g.payload,f=typeof I=="function"?I.call(R,T,f):I,f==null)break _;T=l_({},T,f);break _;case 2:ge=!0}}o.callback!==null&&o.lane!==0&&(_.flags|=64,f=$.effects,f===null?$.effects=[o]:f.push(o))}else R={eventTime:R,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},L===null?(a=L=R,i=T):L=L.next=R,l|=f;if(o=o.next,o===null){if(o=$.shared.pending,o===null)break;f=o,o=f.next,f.next=null,$.lastBaseUpdate=f,$.shared.pending=null}}while(!0);if(L===null&&(i=T),$.baseState=i,$.firstBaseUpdate=a,$.lastBaseUpdate=L,e=$.shared.interleaved,e!==null){$=e;do l|=$.lane,$=$.next;while($!==e)}else r===null&&($.shared.lanes=0);nt|=l,_.lanes=l,_.memoizedState=T}}function ai(_,e,t){if(_=e.effects,e.effects=null,_!==null)for(e=0;e<_.length;e++){var n=_[e],$=n.callback;if($!==null){if(n.callback=null,n=t,typeof $!="function")throw Error(N(191,$));$.call(n)}}}var wn={},ie=je(wn),pn=je(wn),mn=je(wn);function Qe(_){if(_===wn)throw Error(N(174));return _}function _o(_,e){switch(J(mn,e),J(pn,_),J(ie,wn),_=e.nodeType,_){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fr(null,"");break;default:_=_===8?e.parentNode:e,e=_.namespaceURI||null,_=_.tagName,e=Fr(e,_)}e_(ie),J(ie,e)}function wt(){e_(ie),e_(pn),e_(mn)}function iu(_){Qe(mn.current);var e=Qe(ie.current),t=Fr(e,_.type);e!==t&&(J(pn,_),J(ie,t))}function eo(_){pn.current===_&&(e_(ie),e_(pn))}var $_=je(0);function y$(_){for(var e=_;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===_)break;for(;e.sibling===null;){if(e.return===null||e.return===_)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mr=[];function to(){for(var _=0;_<mr.length;_++)mr[_]._workInProgressVersionPrimary=null;mr.length=0}var l$=Ae.ReactCurrentDispatcher,Rr=Ae.ReactCurrentBatchConfig,tt=0,r_=null,f_=null,d_=null,N$=!1,rn=!1,Rn=0,If=0;function m_(){throw Error(N(321))}function no(_,e){if(e===null)return!1;for(var t=0;t<e.length&&t<_.length;t++)if(!ne(_[t],e[t]))return!1;return!0}function $o(_,e,t,n,$,r){if(tt=r,r_=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,l$.current=_===null||_.memoizedState===null?mf:Rf,_=t(n,$),rn){r=0;do{if(rn=!1,Rn=0,25<=r)throw Error(N(301));r+=1,d_=f_=null,e.updateQueue=null,l$.current=gf,_=t(n,$)}while(rn)}if(l$.current=x$,e=f_!==null&&f_.next!==null,tt=0,d_=f_=r_=null,N$=!1,e)throw Error(N(300));return _}function ro(){var _=Rn!==0;return Rn=0,_}function re(){var _={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return d_===null?r_.memoizedState=d_=_:d_=d_.next=_,d_}function X_(){if(f_===null){var _=r_.alternate;_=_!==null?_.memoizedState:null}else _=f_.next;var e=d_===null?r_.memoizedState:d_.next;if(e!==null)d_=e,f_=_;else{if(_===null)throw Error(N(310));f_=_,_={memoizedState:f_.memoizedState,baseState:f_.baseState,baseQueue:f_.baseQueue,queue:f_.queue,next:null},d_===null?r_.memoizedState=d_=_:d_=d_.next=_}return d_}function gn(_,e){return typeof e=="function"?e(_):e}function gr(_){var e=X_(),t=e.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=_;var n=f_,$=n.baseQueue,r=t.pending;if(r!==null){if($!==null){var l=$.next;$.next=r.next,r.next=l}n.baseQueue=$=r,t.pending=null}if($!==null){r=$.next,n=n.baseState;var o=l=null,i=null,a=r;do{var L=a.lane;if((tt&L)===L)i!==null&&(i=i.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),n=a.hasEagerState?a.eagerState:_(n,a.action);else{var T={lane:L,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};i===null?(o=i=T,l=n):i=i.next=T,r_.lanes|=L,nt|=L}a=a.next}while(a!==null&&a!==r);i===null?l=n:i.next=o,ne(n,e.memoizedState)||(O_=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=i,t.lastRenderedState=n}if(_=t.interleaved,_!==null){$=_;do r=$.lane,r_.lanes|=r,nt|=r,$=$.next;while($!==_)}else $===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function vr(_){var e=X_(),t=e.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=_;var n=t.dispatch,$=t.pending,r=e.memoizedState;if($!==null){t.pending=null;var l=$=$.next;do r=_(r,l.action),l=l.next;while(l!==$);ne(r,e.memoizedState)||(O_=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,n]}function au(){}function uu(_,e){var t=r_,n=X_(),$=e(),r=!ne(n.memoizedState,$);if(r&&(n.memoizedState=$,O_=!0),n=n.queue,lo(fu.bind(null,t,n,_),[_]),n.getSnapshot!==e||r||d_!==null&&d_.memoizedState.tag&1){if(t.flags|=2048,vn(9,cu.bind(null,t,n,$,e),void 0,null),L_===null)throw Error(N(349));tt&30||su(t,e,$)}return $}function su(_,e,t){_.flags|=16384,_={getSnapshot:e,value:t},e=r_.updateQueue,e===null?(e={lastEffect:null,stores:null},r_.updateQueue=e,e.stores=[_]):(t=e.stores,t===null?e.stores=[_]:t.push(_))}function cu(_,e,t,n){e.value=t,e.getSnapshot=n,Tu(e)&&du(_)}function fu(_,e,t){return t(function(){Tu(e)&&du(_)})}function Tu(_){var e=_.getSnapshot;_=_.value;try{var t=e();return!ne(_,t)}catch{return!0}}function du(_){var e=Ee(_,1);e!==null&&te(e,_,1,-1)}function ui(_){var e=re();return typeof _=="function"&&(_=_()),e.memoizedState=e.baseState=_,_={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:_},e.queue=_,_=_.dispatch=pf.bind(null,r_,_),[e.memoizedState,_]}function vn(_,e,t,n){return _={tag:_,create:e,destroy:t,deps:n,next:null},e=r_.updateQueue,e===null?(e={lastEffect:null,stores:null},r_.updateQueue=e,e.lastEffect=_.next=_):(t=e.lastEffect,t===null?e.lastEffect=_.next=_:(n=t.next,t.next=_,_.next=n,e.lastEffect=_)),_}function Lu(){return X_().memoizedState}function o$(_,e,t,n){var $=re();r_.flags|=_,$.memoizedState=vn(1|e,t,void 0,n===void 0?null:n)}function Y$(_,e,t,n){var $=X_();n=n===void 0?null:n;var r=void 0;if(f_!==null){var l=f_.memoizedState;if(r=l.destroy,n!==null&&no(n,l.deps)){$.memoizedState=vn(e,t,r,n);return}}r_.flags|=_,$.memoizedState=vn(1|e,t,r,n)}function si(_,e){return o$(8390656,8,_,e)}function lo(_,e){return Y$(2048,8,_,e)}function Eu(_,e){return Y$(4,2,_,e)}function Iu(_,e){return Y$(4,4,_,e)}function Au(_,e){if(typeof e=="function")return _=_(),e(_),function(){e(null)};if(e!=null)return _=_(),e.current=_,function(){e.current=null}}function hu(_,e,t){return t=t!=null?t.concat([_]):null,Y$(4,4,Au.bind(null,e,_),t)}function oo(){}function pu(_,e){var t=X_();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&no(e,n[1])?n[0]:(t.memoizedState=[_,e],_)}function mu(_,e){var t=X_();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&no(e,n[1])?n[0]:(_=_(),t.memoizedState=[_,e],_)}function Ru(_,e,t){return tt&21?(ne(t,e)||(t=ya(),r_.lanes|=t,nt|=t,_.baseState=!0),e):(_.baseState&&(_.baseState=!1,O_=!0),_.memoizedState=t)}function Af(_,e){var t=K;K=t!==0&&4>t?t:4,_(!0);var n=Rr.transition;Rr.transition={};try{_(!1),e()}finally{K=t,Rr.transition=n}}function gu(){return X_().memoizedState}function hf(_,e,t){var n=ke(_);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},vu(_))Cu(e,t);else if(t=lu(_,e,t,n),t!==null){var $=y_();te(t,_,n,$),Su(t,e,n)}}function pf(_,e,t){var n=ke(_),$={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(vu(_))Cu(e,$);else{var r=_.alternate;if(_.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var l=e.lastRenderedState,o=r(l,t);if($.hasEagerState=!0,$.eagerState=o,ne(o,l)){var i=e.interleaved;i===null?($.next=$,Zl(e)):($.next=i.next,i.next=$),e.interleaved=$;return}}catch{}finally{}t=lu(_,e,$,n),t!==null&&($=y_(),te(t,_,n,$),Su(t,e,n))}}function vu(_){var e=_.alternate;return _===r_||e!==null&&e===r_}function Cu(_,e){rn=N$=!0;var t=_.pending;t===null?e.next=e:(e.next=t.next,t.next=e),_.pending=e}function Su(_,e,t){if(t&4194240){var n=e.lanes;n&=_.pendingLanes,t|=n,e.lanes=t,Ul(_,t)}}var x$={readContext:K_,useCallback:m_,useContext:m_,useEffect:m_,useImperativeHandle:m_,useInsertionEffect:m_,useLayoutEffect:m_,useMemo:m_,useReducer:m_,useRef:m_,useState:m_,useDebugValue:m_,useDeferredValue:m_,useTransition:m_,useMutableSource:m_,useSyncExternalStore:m_,useId:m_,unstable_isNewReconciler:!1},mf={readContext:K_,useCallback:function(_,e){return re().memoizedState=[_,e===void 0?null:e],_},useContext:K_,useEffect:si,useImperativeHandle:function(_,e,t){return t=t!=null?t.concat([_]):null,o$(4194308,4,Au.bind(null,e,_),t)},useLayoutEffect:function(_,e){return o$(4194308,4,_,e)},useInsertionEffect:function(_,e){return o$(4,2,_,e)},useMemo:function(_,e){var t=re();return e=e===void 0?null:e,_=_(),t.memoizedState=[_,e],_},useReducer:function(_,e,t){var n=re();return e=t!==void 0?t(e):e,n.memoizedState=n.baseState=e,_={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_,lastRenderedState:e},n.queue=_,_=_.dispatch=hf.bind(null,r_,_),[n.memoizedState,_]},useRef:function(_){var e=re();return _={current:_},e.memoizedState=_},useState:ui,useDebugValue:oo,useDeferredValue:function(_){return re().memoizedState=_},useTransition:function(){var _=ui(!1),e=_[0];return _=Af.bind(null,_[1]),re().memoizedState=_,[e,_]},useMutableSource:function(){},useSyncExternalStore:function(_,e,t){var n=r_,$=re();if(n_){if(t===void 0)throw Error(N(407));t=t()}else{if(t=e(),L_===null)throw Error(N(349));tt&30||su(n,e,t)}$.memoizedState=t;var r={value:t,getSnapshot:e};return $.queue=r,si(fu.bind(null,n,r,_),[_]),n.flags|=2048,vn(9,cu.bind(null,n,r,t,e),void 0,null),t},useId:function(){var _=re(),e=L_.identifierPrefix;if(n_){var t=ce,n=se;t=(n&~(1<<32-ee(n)-1)).toString(32)+t,e=":"+e+"R"+t,t=Rn++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=If++,e=":"+e+"r"+t.toString(32)+":";return _.memoizedState=e},unstable_isNewReconciler:!1},Rf={readContext:K_,useCallback:pu,useContext:K_,useEffect:lo,useImperativeHandle:hu,useInsertionEffect:Eu,useLayoutEffect:Iu,useMemo:mu,useReducer:gr,useRef:Lu,useState:function(){return gr(gn)},useDebugValue:oo,useDeferredValue:function(_){var e=X_();return Ru(e,f_.memoizedState,_)},useTransition:function(){var _=gr(gn)[0],e=X_().memoizedState;return[_,e]},useMutableSource:au,useSyncExternalStore:uu,useId:gu,unstable_isNewReconciler:!1},gf={readContext:K_,useCallback:pu,useContext:K_,useEffect:lo,useImperativeHandle:hu,useInsertionEffect:Eu,useLayoutEffect:Iu,useMemo:mu,useReducer:vr,useRef:Lu,useState:function(){return vr(gn)},useDebugValue:oo,useDeferredValue:function(_){var e=X_();return f_===null?e.memoizedState=_:Ru(e,f_.memoizedState,_)},useTransition:function(){var _=vr(gn)[0],e=X_().memoizedState;return[_,e]},useMutableSource:au,useSyncExternalStore:uu,useId:gu,unstable_isNewReconciler:!1};function Z_(_,e){if(_&&_.defaultProps){e=l_({},e),_=_.defaultProps;for(var t in _)e[t]===void 0&&(e[t]=_[t]);return e}return e}function ol(_,e,t,n){e=_.memoizedState,t=t(n,e),t=t==null?e:l_({},e,t),_.memoizedState=t,_.lanes===0&&(_.updateQueue.baseState=t)}var z$={isMounted:function(_){return(_=_._reactInternals)?lt(_)===_:!1},enqueueSetState:function(_,e,t){_=_._reactInternals;var n=y_(),$=ke(_),r=fe(n,$);r.payload=e,t!=null&&(r.callback=t),e=Me(_,r,$),e!==null&&(te(e,_,$,n),r$(e,_,$))},enqueueReplaceState:function(_,e,t){_=_._reactInternals;var n=y_(),$=ke(_),r=fe(n,$);r.tag=1,r.payload=e,t!=null&&(r.callback=t),e=Me(_,r,$),e!==null&&(te(e,_,$,n),r$(e,_,$))},enqueueForceUpdate:function(_,e){_=_._reactInternals;var t=y_(),n=ke(_),$=fe(t,n);$.tag=2,e!=null&&($.callback=e),e=Me(_,$,n),e!==null&&(te(e,_,n,t),r$(e,_,n))}};function ci(_,e,t,n,$,r,l){return _=_.stateNode,typeof _.shouldComponentUpdate=="function"?_.shouldComponentUpdate(n,r,l):e.prototype&&e.prototype.isPureReactComponent?!En(t,n)||!En($,r):!0}function yu(_,e,t){var n=!1,$=Fe,r=e.contextType;return typeof r=="object"&&r!==null?r=K_(r):($=M_(e)?_t:v_.current,n=e.contextTypes,r=(n=n!=null)?xt(_,$):Fe),e=new e(t,r),_.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=z$,_.stateNode=e,e._reactInternals=_,n&&(_=_.stateNode,_.__reactInternalMemoizedUnmaskedChildContext=$,_.__reactInternalMemoizedMaskedChildContext=r),e}function fi(_,e,t,n){_=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,n),e.state!==_&&z$.enqueueReplaceState(e,e.state,null)}function il(_,e,t,n){var $=_.stateNode;$.props=t,$.state=_.memoizedState,$.refs={},ql(_);var r=e.contextType;typeof r=="object"&&r!==null?$.context=K_(r):(r=M_(e)?_t:v_.current,$.context=xt(_,r)),$.state=_.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(ol(_,e,r,t),$.state=_.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof $.getSnapshotBeforeUpdate=="function"||typeof $.UNSAFE_componentWillMount!="function"&&typeof $.componentWillMount!="function"||(e=$.state,typeof $.componentWillMount=="function"&&$.componentWillMount(),typeof $.UNSAFE_componentWillMount=="function"&&$.UNSAFE_componentWillMount(),e!==$.state&&z$.enqueueReplaceState($,$.state,null),S$(_,t,$,n),$.state=_.memoizedState),typeof $.componentDidMount=="function"&&(_.flags|=4194308)}function Mt(_,e){try{var t="",n=e;do t+=Js(n),n=n.return;while(n);var $=t}catch(r){$=`
Error generating stack: `+r.message+`
`+r.stack}return{value:_,source:e,stack:$,digest:null}}function Cr(_,e,t){return{value:_,source:null,stack:t??null,digest:e??null}}function al(_,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function Nu(_,e,t){t=fe(-1,t),t.tag=3,t.payload={element:null};var n=e.value;return t.callback=function(){O$||(O$=!0,Al=n),al(_,e)},t}function xu(_,e,t){t=fe(-1,t),t.tag=3;var n=_.type.getDerivedStateFromError;if(typeof n=="function"){var $=e.value;t.payload=function(){return n($)},t.callback=function(){al(_,e)}}var r=_.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){al(_,e),typeof n!="function"&&(He===null?He=new Set([this]):He.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),t}function Ti(_,e,t){var n=_.pingCache;if(n===null){n=_.pingCache=new vf;var $=new Set;n.set(e,$)}else $=n.get(e),$===void 0&&($=new Set,n.set(e,$));$.has(t)||($.add(t),_=Df.bind(null,_,e,t),e.then(_,_))}function di(_){do{var e;if((e=_.tag===13)&&(e=_.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return _;_=_.return}while(_!==null);return null}function Li(_,e,t,n,$){return _.mode&1?(_.flags|=65536,_.lanes=$,_):(_===e?_.flags|=65536:(_.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=fe(-1,1),e.tag=2,Me(t,e,1))),t.lanes|=1),_)}var Cf=Ae.ReactCurrentOwner,O_=!1;function S_(_,e,t,n){e.child=_===null?ru(e,null,t,n):Ot(e,_.child,t,n)}function Ei(_,e,t,n,$){t=t.render;var r=e.ref;return St(e,$),n=$o(_,e,t,n,r,$),t=ro(),_!==null&&!O_?(e.updateQueue=_.updateQueue,e.flags&=-2053,_.lanes&=~$,Ie(_,e,$)):(n_&&t&&zl(e),e.flags|=1,S_(_,e,n,$),e.child)}function Ii(_,e,t,n,$){if(_===null){var r=t.type;return typeof r=="function"&&!Lo(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=r,Pu(_,e,r,n,$)):(_=s$(t.type,null,n,e,e.mode,$),_.ref=e.ref,_.return=e,e.child=_)}if(r=_.child,!(_.lanes&$)){var l=r.memoizedProps;if(t=t.compare,t=t!==null?t:En,t(l,n)&&_.ref===e.ref)return Ie(_,e,$)}return e.flags|=1,_=We(r,n),_.ref=e.ref,_.return=e,e.child=_}function Pu(_,e,t,n,$){if(_!==null){var r=_.memoizedProps;if(En(r,n)&&_.ref===e.ref)if(O_=!1,e.pendingProps=n=r,(_.lanes&$)!==0)_.flags&131072&&(O_=!0);else return e.lanes=_.lanes,Ie(_,e,$)}return ul(_,e,t,n,$)}function Ou(_,e,t){var n=e.pendingProps,$=n.children,r=_!==null?_.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(mt,W_),W_|=t;else{if(!(t&1073741824))return _=r!==null?r.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:_,cachePool:null,transitions:null},e.updateQueue=null,J(mt,W_),W_|=_,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:t,J(mt,W_),W_|=n}else r!==null?(n=r.baseLanes|t,e.memoizedState=null):n=t,J(mt,W_),W_|=n;return S_(_,e,$,t),e.child}function wu(_,e){var t=e.ref;(_===null&&t!==null||_!==null&&_.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ul(_,e,t,n,$){var r=M_(t)?_t:v_.current;return r=xt(e,r),St(e,$),t=$o(_,e,t,n,r,$),n=ro(),_!==null&&!O_?(e.updateQueue=_.updateQueue,e.flags&=-2053,_.lanes&=~$,Ie(_,e,$)):(n_&&n&&zl(e),e.flags|=1,S_(_,e,t,$),e.child)}function Ai(_,e,t,n,$){if(M_(t)){var r=!0;m$(e)}else r=!1;if(St(e,$),e.stateNode===null)i$(_,e),yu(e,t,n),il(e,t,n,$),n=!0;else if(_===null){var l=e.stateNode,o=e.memoizedProps;l.props=o;var i=l.context,a=t.contextType;typeof a=="object"&&a!==null?a=K_(a):(a=M_(t)?_t:v_.current,a=xt(e,a));var L=t.getDerivedStateFromProps,T=typeof L=="function"||typeof l.getSnapshotBeforeUpdate=="function";T||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||i!==a)&&fi(e,l,n,a),ge=!1;var f=e.memoizedState;l.state=f,S$(e,n,l,$),i=e.memoizedState,o!==n||f!==i||w_.current||ge?(typeof L=="function"&&(ol(e,t,L,n),i=e.memoizedState),(o=ge||ci(e,t,o,n,f,i,a))?(T||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=i),l.props=n,l.state=i,l.context=a,n=o):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,ou(_,e),o=e.memoizedProps,a=e.type===e.elementType?o:Z_(e.type,o),l.props=a,T=e.pendingProps,f=l.context,i=t.contextType,typeof i=="object"&&i!==null?i=K_(i):(i=M_(t)?_t:v_.current,i=xt(e,i));var R=t.getDerivedStateFromProps;(L=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==T||f!==i)&&fi(e,l,n,i),ge=!1,f=e.memoizedState,l.state=f,S$(e,n,l,$);var I=e.memoizedState;o!==T||f!==I||w_.current||ge?(typeof R=="function"&&(ol(e,t,R,n),I=e.memoizedState),(a=ge||ci(e,t,a,n,f,I,i)||!1)?(L||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,I,i),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,I,i)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===_.memoizedProps&&f===_.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===_.memoizedProps&&f===_.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=I),l.props=n,l.state=I,l.context=i,n=a):(typeof l.componentDidUpdate!="function"||o===_.memoizedProps&&f===_.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===_.memoizedProps&&f===_.memoizedState||(e.flags|=1024),n=!1)}return sl(_,e,t,n,r,$)}function sl(_,e,t,n,$,r){wu(_,e);var l=(e.flags&128)!==0;if(!n&&!l)return $&&$i(e,t,!1),Ie(_,e,r);n=e.stateNode,Cf.current=e;var o=l&&typeof t.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,_!==null&&l?(e.child=Ot(e,_.child,null,r),e.child=Ot(e,null,o,r)):S_(_,e,o,r),e.memoizedState=n.state,$&&$i(e,t,!0),e.child}function Mu(_){var e=_.stateNode;e.pendingContext?ni(_,e.pendingContext,e.pendingContext!==e.context):e.context&&ni(_,e.context,!1),_o(_,e.containerInfo)}function hi(_,e,t,n,$){return Pt(),Xl($),e.flags|=256,S_(_,e,t,n),e.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function fl(_){return{baseLanes:_,cachePool:null,transitions:null}}function Hu(_,e,t){var n=e.pendingProps,$=$_.current,r=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=_!==null&&_.memoizedState===null?!1:($&2)!==0),o?(r=!0,e.flags&=-129):(_===null||_.memoizedState!==null)&&($|=1),J($_,$&1),_===null)return rl(e),_=e.memoizedState,_!==null&&(_=_.dehydrated,_!==null)?(e.mode&1?_.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,_=n.fallback,r?(n=e.mode,r=e.child,l={mode:"hidden",children:l},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=b$(l,n,0,null),_=Ze(_,n,t,null),r.return=e,_.return=e,r.sibling=_,e.child=r,e.child.memoizedState=fl(t),e.memoizedState=cl,_):io(e,l));if($=_.memoizedState,$!==null&&(o=$.dehydrated,o!==null))return Sf(_,e,l,n,o,$,t);if(r){r=n.fallback,l=e.mode,$=_.child,o=$.sibling;var i={mode:"hidden",children:n.children};return!(l&1)&&e.child!==$?(n=e.child,n.childLanes=0,n.pendingProps=i,e.deletions=null):(n=We($,i),n.subtreeFlags=$.subtreeFlags&14680064),o!==null?r=We(o,r):(r=Ze(r,l,t,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,n=r,r=e.child,l=_.child.memoizedState,l=l===null?fl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=_.childLanes&~t,e.memoizedState=cl,n}return r=_.child,_=r.sibling,n=We(r,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=t),n.return=e,n.sibling=null,_!==null&&(t=e.deletions,t===null?(e.deletions=[_],e.flags|=16):t.push(_)),e.child=n,e.memoizedState=null,n}function io(_,e){return e=b$({mode:"visible",children:e},_.mode,0,null),e.return=_,_.child=e}function Qn(_,e,t,n){return n!==null&&Xl(n),Ot(e,_.child,null,t),_=io(e,e.pendingProps.children),_.flags|=2,e.memoizedState=null,_}function Sf(_,e,t,n,$,r,l){if(t)return e.flags&256?(e.flags&=-257,n=Cr(Error(N(422))),Qn(_,e,l,n)):e.memoizedState!==null?(e.child=_.child,e.flags|=128,null):(r=n.fallback,$=e.mode,n=b$({mode:"visible",children:n.children},$,0,null),r=Ze(r,$,l,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,e.mode&1&&Ot(e,_.child,null,l),e.child.memoizedState=fl(l),e.memoizedState=cl,r);if(!(e.mode&1))return Qn(_,e,l,null);if($.data==="$!"){if(n=$.nextSibling&&$.nextSibling.dataset,n)var o=n.dgst;return n=o,r=Error(N(419)),n=Cr(r,n,void 0),Qn(_,e,l,n)}if(o=(l&_.childLanes)!==0,O_||o){if(n=L_,n!==null){switch(l&-l){case 4:$=2;break;case 16:$=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:$=32;break;case 536870912:$=268435456;break;default:$=0}$=$&(n.suspendedLanes|l)?0:$,$!==0&&$!==r.retryLane&&(r.retryLane=$,Ee(_,$),te(n,_,$,-1))}return To(),n=Cr(Error(N(421))),Qn(_,e,l,n)}return $.data==="$?"?(e.flags|=128,e.child=_.child,e=Ff.bind(null,_),$._reactRetry=e,null):(_=r.treeContext,U_=we($.nextSibling),D_=e,n_=!0,_e=null,_!==null&&(B_[V_++]=se,B_[V_++]=ce,B_[V_++]=et,se=_.id,ce=_.overflow,et=e),e=io(e,n.children),e.flags|=4096,e)}function pi(_,e,t){_.lanes|=e;var n=_.alternate;n!==null&&(n.lanes|=e),ll(_.return,e,t)}function Sr(_,e,t,n,$){var r=_.memoizedState;r===null?_.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:$}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=t,r.tailMode=$)}function ku(_,e,t){var n=e.pendingProps,$=n.revealOrder,r=n.tail;if(S_(_,e,n.children,t),n=$_.current,n&2)n=n&1|2,e.flags|=128;else{if(_!==null&&_.flags&128)_:for(_=e.child;_!==null;){if(_.tag===13)_.memoizedState!==null&&pi(_,t,e);else if(_.tag===19)pi(_,t,e);else if(_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break _;for(;_.sibling===null;){if(_.return===null||_.return===e)break _;_=_.return}_.sibling.return=_.return,_=_.sibling}n&=1}if(J($_,n),!(e.mode&1))e.memoizedState=null;else switch($){case"forwards":for(t=e.child,$=null;t!==null;)_=t.alternate,_!==null&&y$(_)===null&&($=t),t=t.sibling;t=$,t===null?($=e.child,e.child=null):($=t.sibling,t.sibling=null),Sr(e,!1,$,t,r);break;case"backwards":for(t=null,$=e.child,e.child=null;$!==null;){if(_=$.alternate,_!==null&&y$(_)===null){e.child=$;break}_=$.sibling,$.sibling=t,t=$,$=_}Sr(e,!0,t,null,r);break;case"together":Sr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function i$(_,e){!(e.mode&1)&&_!==null&&(_.alternate=null,e.alternate=null,e.flags|=2)}function Ie(_,e,t){if(_!==null&&(e.dependencies=_.dependencies),nt|=e.lanes,!(t&e.childLanes))return null;if(_!==null&&e.child!==_.child)throw Error(N(153));if(e.child!==null){for(_=e.child,t=We(_,_.pendingProps),e.child=t,t.return=e;_.sibling!==null;)_=_.sibling,t=t.sibling=We(_,_.pendingProps),t.return=e;t.sibling=null}return e.child}function yf(_,e,t){switch(e.tag){case 3:Mu(e),Pt();break;case 5:iu(e);break;case 1:M_(e.type)&&m$(e);break;case 4:_o(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,$=e.memoizedProps.value;J(v$,n._currentValue),n._currentValue=$;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(J($_,$_.current&1),e.flags|=128,null):t&e.child.childLanes?Hu(_,e,t):(J($_,$_.current&1),_=Ie(_,e,t),_!==null?_.sibling:null);J($_,$_.current&1);break;case 19:if(n=(t&e.childLanes)!==0,_.flags&128){if(n)return ku(_,e,t);e.flags|=128}if($=e.memoizedState,$!==null&&($.rendering=null,$.tail=null,$.lastEffect=null),J($_,$_.current),n)break;return null;case 22:case 23:return e.lanes=0,Ou(_,e,t)}return Ie(_,e,t)}var Wu,Tl,Uu,Du;Wu=function(_,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)_.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Tl=function(){};Uu=function(_,e,t,n){var $=_.memoizedProps;if($!==n){_=e.stateNode,Qe(ie.current);var r=null;switch(t){case"input":$=kr(_,$),n=kr(_,n),r=[];break;case"select":$=l_({},$,{value:void 0}),n=l_({},n,{value:void 0}),r=[];break;case"textarea":$=Dr(_,$),n=Dr(_,n),r=[];break;default:typeof $.onClick!="function"&&typeof n.onClick=="function"&&(_.onclick=h$)}Gr(t,n);var l;t=null;for(a in $)if(!n.hasOwnProperty(a)&&$.hasOwnProperty(a)&&$[a]!=null)if(a==="style"){var o=$[a];for(l in o)o.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(un.hasOwnProperty(a)?r||(r=[]):(r=r||[]).push(a,null));for(a in n){var i=n[a];if(o=$!=null?$[a]:void 0,n.hasOwnProperty(a)&&i!==o&&(i!=null||o!=null))if(a==="style")if(o){for(l in o)!o.hasOwnProperty(l)||i&&i.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in i)i.hasOwnProperty(l)&&o[l]!==i[l]&&(t||(t={}),t[l]=i[l])}else t||(r||(r=[]),r.push(a,t)),t=i;else a==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(r=r||[]).push(a,i)):a==="children"?typeof i!="string"&&typeof i!="number"||(r=r||[]).push(a,""+i):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(un.hasOwnProperty(a)?(i!=null&&a==="onScroll"&&__("scroll",_),r||o===i||(r=[])):(r=r||[]).push(a,i))}t&&(r=r||[]).push("style",t);var a=r;(e.updateQueue=a)&&(e.flags|=4)}};Du=function(_,e,t,n){t!==n&&(e.flags|=4)};function Xt(_,e){if(!n_)switch(_.tailMode){case"hidden":e=_.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?_.tail=null:t.sibling=null;break;case"collapsed":t=_.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e||_.tail===null?_.tail=null:_.tail.sibling=null:n.sibling=null}}function R_(_){var e=_.alternate!==null&&_.alternate.child===_.child,t=0,n=0;if(e)for(var $=_.child;$!==null;)t|=$.lanes|$.childLanes,n|=$.subtreeFlags&14680064,n|=$.flags&14680064,$.return=_,$=$.sibling;else for($=_.child;$!==null;)t|=$.lanes|$.childLanes,n|=$.subtreeFlags,n|=$.flags,$.return=_,$=$.sibling;return _.subtreeFlags|=n,_.childLanes=t,e}function Nf(_,e,t){var n=e.pendingProps;switch(Kl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return R_(e),null;case 1:return M_(e.type)&&p$(),R_(e),null;case 3:return n=e.stateNode,wt(),e_(w_),e_(v_),to(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(_===null||_.child===null)&&(Xn(e)?e.flags|=4:_===null||_.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_e!==null&&(ml(_e),_e=null))),Tl(_,e),R_(e),null;case 5:eo(e);var $=Qe(mn.current);if(t=e.type,_!==null&&e.stateNode!=null)Uu(_,e,t,n,$),_.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(N(166));return R_(e),null}if(_=Qe(ie.current),Xn(e)){n=e.stateNode,t=e.type;var r=e.memoizedProps;switch(n[le]=e,n[hn]=r,_=(e.mode&1)!==0,t){case"dialog":__("cancel",n),__("close",n);break;case"iframe":case"object":case"embed":__("load",n);break;case"video":case"audio":for($=0;$<qt.length;$++)__(qt[$],n);break;case"source":__("error",n);break;case"img":case"image":case"link":__("error",n),__("load",n);break;case"details":__("toggle",n);break;case"input":xo(n,r),__("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},__("invalid",n);break;case"textarea":Oo(n,r),__("invalid",n)}Gr(t,r),$=null;for(var l in r)if(r.hasOwnProperty(l)){var o=r[l];l==="children"?typeof o=="string"?n.textContent!==o&&(r.suppressHydrationWarning!==!0&&Kn(n.textContent,o,_),$=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&Kn(n.textContent,o,_),$=["children",""+o]):un.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&__("scroll",n)}switch(t){case"input":Dn(n),Po(n,r,!0);break;case"textarea":Dn(n),wo(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=h$)}n=$,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=$.nodeType===9?$:$.ownerDocument,_==="http://www.w3.org/1999/xhtml"&&(_=fa(t)),_==="http://www.w3.org/1999/xhtml"?t==="script"?(_=l.createElement("div"),_.innerHTML="<script><\/script>",_=_.removeChild(_.firstChild)):typeof n.is=="string"?_=l.createElement(t,{is:n.is}):(_=l.createElement(t),t==="select"&&(l=_,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):_=l.createElementNS(_,t),_[le]=e,_[hn]=n,Wu(_,e,!1,!1),e.stateNode=_;_:{switch(l=jr(t,n),t){case"dialog":__("cancel",_),__("close",_),$=n;break;case"iframe":case"object":case"embed":__("load",_),$=n;break;case"video":case"audio":for($=0;$<qt.length;$++)__(qt[$],_);$=n;break;case"source":__("error",_),$=n;break;case"img":case"image":case"link":__("error",_),__("load",_),$=n;break;case"details":__("toggle",_),$=n;break;case"input":xo(_,n),$=kr(_,n),__("invalid",_);break;case"option":$=n;break;case"select":_._wrapperState={wasMultiple:!!n.multiple},$=l_({},n,{value:void 0}),__("invalid",_);break;case"textarea":Oo(_,n),$=Dr(_,n),__("invalid",_);break;default:$=n}Gr(t,$),o=$;for(r in o)if(o.hasOwnProperty(r)){var i=o[r];r==="style"?La(_,i):r==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&Ta(_,i)):r==="children"?typeof i=="string"?(t!=="textarea"||i!=="")&&sn(_,i):typeof i=="number"&&sn(_,""+i):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(un.hasOwnProperty(r)?i!=null&&r==="onScroll"&&__("scroll",_):i!=null&&Ol(_,r,i,l))}switch(t){case"input":Dn(_),Po(_,n,!1);break;case"textarea":Dn(_),wo(_);break;case"option":n.value!=null&&_.setAttribute("value",""+De(n.value));break;case"select":_.multiple=!!n.multiple,r=n.value,r!=null?Rt(_,!!n.multiple,r,!1):n.defaultValue!=null&&Rt(_,!!n.multiple,n.defaultValue,!0);break;default:typeof $.onClick=="function"&&(_.onclick=h$)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break _;case"img":n=!0;break _;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return R_(e),null;case 6:if(_&&e.stateNode!=null)Du(_,e,_.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(N(166));if(t=Qe(mn.current),Qe(ie.current),Xn(e)){if(n=e.stateNode,t=e.memoizedProps,n[le]=e,(r=n.nodeValue!==t)&&(_=D_,_!==null))switch(_.tag){case 3:Kn(n.nodeValue,t,(_.mode&1)!==0);break;case 5:_.memoizedProps.suppressHydrationWarning!==!0&&Kn(n.nodeValue,t,(_.mode&1)!==0)}r&&(e.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[le]=e,e.stateNode=n}return R_(e),null;case 13:if(e_($_),n=e.memoizedState,_===null||_.memoizedState!==null&&_.memoizedState.dehydrated!==null){if(n_&&U_!==null&&e.mode&1&&!(e.flags&128))nu(),Pt(),e.flags|=98560,r=!1;else if(r=Xn(e),n!==null&&n.dehydrated!==null){if(_===null){if(!r)throw Error(N(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(N(317));r[le]=e}else Pt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;R_(e),r=!1}else _e!==null&&(ml(_e),_e=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(n=n!==null,n!==(_!==null&&_.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(_===null||$_.current&1?T_===0&&(T_=3):To())),e.updateQueue!==null&&(e.flags|=4),R_(e),null);case 4:return wt(),Tl(_,e),_===null&&In(e.stateNode.containerInfo),R_(e),null;case 10:return Jl(e.type._context),R_(e),null;case 17:return M_(e.type)&&p$(),R_(e),null;case 19:if(e_($_),r=e.memoizedState,r===null)return R_(e),null;if(n=(e.flags&128)!==0,l=r.rendering,l===null)if(n)Xt(r,!1);else{if(T_!==0||_!==null&&_.flags&128)for(_=e.child;_!==null;){if(l=y$(_),l!==null){for(e.flags|=128,Xt(r,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=t,t=e.child;t!==null;)r=t,_=n,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=_,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,_=l.dependencies,r.dependencies=_===null?null:{lanes:_.lanes,firstContext:_.firstContext}),t=t.sibling;return J($_,$_.current&1|2),e.child}_=_.sibling}r.tail!==null&&u_()>Ht&&(e.flags|=128,n=!0,Xt(r,!1),e.lanes=4194304)}else{if(!n)if(_=y$(l),_!==null){if(e.flags|=128,n=!0,t=_.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Xt(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!n_)return R_(e),null}else 2*u_()-r.renderingStartTime>Ht&&t!==1073741824&&(e.flags|=128,n=!0,Xt(r,!1),e.lanes=4194304);r.isBackwards?(l.sibling=e.child,e.child=l):(t=r.last,t!==null?t.sibling=l:e.child=l,r.last=l)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=u_(),e.sibling=null,t=$_.current,J($_,n?t&1|2:t&1),e):(R_(e),null);case 22:case 23:return fo(),n=e.memoizedState!==null,_!==null&&_.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?W_&1073741824&&(R_(e),e.subtreeFlags&6&&(e.flags|=8192)):R_(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function xf(_,e){switch(Kl(e),e.tag){case 1:return M_(e.type)&&p$(),_=e.flags,_&65536?(e.flags=_&-65537|128,e):null;case 3:return wt(),e_(w_),e_(v_),to(),_=e.flags,_&65536&&!(_&128)?(e.flags=_&-65537|128,e):null;case 5:return eo(e),null;case 13:if(e_($_),_=e.memoizedState,_!==null&&_.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Pt()}return _=e.flags,_&65536?(e.flags=_&-65537|128,e):null;case 19:return e_($_),null;case 4:return wt(),null;case 10:return Jl(e.type._context),null;case 22:case 23:return fo(),null;case 24:return null;default:return null}}var Jn=!1,g_=!1,Pf=typeof WeakSet=="function"?WeakSet:Set,U=null;function pt(_,e){var t=_.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){o_(_,e,n)}else t.current=null}function dl(_,e,t){try{t()}catch(n){o_(_,e,n)}}var mi=!1;function Of(_,e){if(Zr=E$,_=Va(),Yl(_)){if("selectionStart"in _)var t={start:_.selectionStart,end:_.selectionEnd};else _:{t=(t=_.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var $=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break _}var l=0,o=-1,i=-1,a=0,L=0,T=_,f=null;e:for(;;){for(var R;T!==t||$!==0&&T.nodeType!==3||(o=l+$),T!==r||n!==0&&T.nodeType!==3||(i=l+n),T.nodeType===3&&(l+=T.nodeValue.length),(R=T.firstChild)!==null;)f=T,T=R;for(;;){if(T===_)break e;if(f===t&&++a===$&&(o=l),f===r&&++L===n&&(i=l),(R=T.nextSibling)!==null)break;T=f,f=T.parentNode}T=R}t=o===-1||i===-1?null:{start:o,end:i}}else t=null}t=t||{start:0,end:0}}else t=null;for(qr={focusedElem:_,selectionRange:t},E$=!1,U=e;U!==null;)if(e=U,_=e.child,(e.subtreeFlags&1028)!==0&&_!==null)_.return=e,U=_;else for(;U!==null;){e=U;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var g=I.memoizedProps,S=I.memoizedState,c=e.stateNode,u=c.getSnapshotBeforeUpdate(e.elementType===e.type?g:Z_(e.type,g),S);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(p){o_(e,e.return,p)}if(_=e.sibling,_!==null){_.return=e.return,U=_;break}U=e.return}return I=mi,mi=!1,I}function ln(_,e,t){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var $=n=n.next;do{if(($.tag&_)===_){var r=$.destroy;$.destroy=void 0,r!==void 0&&dl(e,t,r)}$=$.next}while($!==n)}}function K$(_,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&_)===_){var n=t.create;t.destroy=n()}t=t.next}while(t!==e)}}function Ll(_){var e=_.ref;if(e!==null){var t=_.stateNode;switch(_.tag){case 5:_=t;break;default:_=t}typeof e=="function"?e(_):e.current=_}}function Fu(_){var e=_.alternate;e!==null&&(_.alternate=null,Fu(e)),_.child=null,_.deletions=null,_.sibling=null,_.tag===5&&(e=_.stateNode,e!==null&&(delete e[le],delete e[hn],delete e[tl],delete e[Tf],delete e[df])),_.stateNode=null,_.return=null,_.dependencies=null,_.memoizedProps=null,_.memoizedState=null,_.pendingProps=null,_.stateNode=null,_.updateQueue=null}function Gu(_){return _.tag===5||_.tag===3||_.tag===4}function Ri(_){_:for(;;){for(;_.sibling===null;){if(_.return===null||Gu(_.return))return null;_=_.return}for(_.sibling.return=_.return,_=_.sibling;_.tag!==5&&_.tag!==6&&_.tag!==18;){if(_.flags&2||_.child===null||_.tag===4)continue _;_.child.return=_,_=_.child}if(!(_.flags&2))return _.stateNode}}function El(_,e,t){var n=_.tag;if(n===5||n===6)_=_.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(_,e):t.insertBefore(_,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(_,t)):(e=t,e.appendChild(_)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=h$));else if(n!==4&&(_=_.child,_!==null))for(El(_,e,t),_=_.sibling;_!==null;)El(_,e,t),_=_.sibling}function Il(_,e,t){var n=_.tag;if(n===5||n===6)_=_.stateNode,e?t.insertBefore(_,e):t.appendChild(_);else if(n!==4&&(_=_.child,_!==null))for(Il(_,e,t),_=_.sibling;_!==null;)Il(_,e,t),_=_.sibling}var I_=null,q_=!1;function me(_,e,t){for(t=t.child;t!==null;)ju(_,e,t),t=t.sibling}function ju(_,e,t){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(D$,t)}catch{}switch(t.tag){case 5:g_||pt(t,e);case 6:var n=I_,$=q_;I_=null,me(_,e,t),I_=n,q_=$,I_!==null&&(q_?(_=I_,t=t.stateNode,_.nodeType===8?_.parentNode.removeChild(t):_.removeChild(t)):I_.removeChild(t.stateNode));break;case 18:I_!==null&&(q_?(_=I_,t=t.stateNode,_.nodeType===8?hr(_.parentNode,t):_.nodeType===1&&hr(_,t),dn(_)):hr(I_,t.stateNode));break;case 4:n=I_,$=q_,I_=t.stateNode.containerInfo,q_=!0,me(_,e,t),I_=n,q_=$;break;case 0:case 11:case 14:case 15:if(!g_&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){$=n=n.next;do{var r=$,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&dl(t,e,l),$=$.next}while($!==n)}me(_,e,t);break;case 1:if(!g_&&(pt(t,e),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(o){o_(t,e,o)}me(_,e,t);break;case 21:me(_,e,t);break;case 22:t.mode&1?(g_=(n=g_)||t.memoizedState!==null,me(_,e,t),g_=n):me(_,e,t);break;default:me(_,e,t)}}function gi(_){var e=_.updateQueue;if(e!==null){_.updateQueue=null;var t=_.stateNode;t===null&&(t=_.stateNode=new Pf),e.forEach(function(n){var $=Gf.bind(null,_,n);t.has(n)||(t.add(n),n.then($,$))})}}function J_(_,e){var t=e.deletions;if(t!==null)for(var n=0;n<t.length;n++){var $=t[n];try{var r=_,l=e,o=l;_:for(;o!==null;){switch(o.tag){case 5:I_=o.stateNode,q_=!1;break _;case 3:I_=o.stateNode.containerInfo,q_=!0;break _;case 4:I_=o.stateNode.containerInfo,q_=!0;break _}o=o.return}if(I_===null)throw Error(N(160));ju(r,l,$),I_=null,q_=!1;var i=$.alternate;i!==null&&(i.return=null),$.return=null}catch(a){o_($,e,a)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bu(e,_),e=e.sibling}function Bu(_,e){var t=_.alternate,n=_.flags;switch(_.tag){case 0:case 11:case 14:case 15:if(J_(e,_),$e(_),n&4){try{ln(3,_,_.return),K$(3,_)}catch(g){o_(_,_.return,g)}try{ln(5,_,_.return)}catch(g){o_(_,_.return,g)}}break;case 1:J_(e,_),$e(_),n&512&&t!==null&&pt(t,t.return);break;case 5:if(J_(e,_),$e(_),n&512&&t!==null&&pt(t,t.return),_.flags&32){var $=_.stateNode;try{sn($,"")}catch(g){o_(_,_.return,g)}}if(n&4&&($=_.stateNode,$!=null)){var r=_.memoizedProps,l=t!==null?t.memoizedProps:r,o=_.type,i=_.updateQueue;if(_.updateQueue=null,i!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&sa($,r),jr(o,l);var a=jr(o,r);for(l=0;l<i.length;l+=2){var L=i[l],T=i[l+1];L==="style"?La($,T):L==="dangerouslySetInnerHTML"?Ta($,T):L==="children"?sn($,T):Ol($,L,T,a)}switch(o){case"input":Wr($,r);break;case"textarea":ca($,r);break;case"select":var f=$._wrapperState.wasMultiple;$._wrapperState.wasMultiple=!!r.multiple;var R=r.value;R!=null?Rt($,!!r.multiple,R,!1):f!==!!r.multiple&&(r.defaultValue!=null?Rt($,!!r.multiple,r.defaultValue,!0):Rt($,!!r.multiple,r.multiple?[]:"",!1))}$[hn]=r}catch(g){o_(_,_.return,g)}}break;case 6:if(J_(e,_),$e(_),n&4){if(_.stateNode===null)throw Error(N(162));$=_.stateNode,r=_.memoizedProps;try{$.nodeValue=r}catch(g){o_(_,_.return,g)}}break;case 3:if(J_(e,_),$e(_),n&4&&t!==null&&t.memoizedState.isDehydrated)try{dn(e.containerInfo)}catch(g){o_(_,_.return,g)}break;case 4:J_(e,_),$e(_);break;case 13:J_(e,_),$e(_),$=_.child,$.flags&8192&&(r=$.memoizedState!==null,$.stateNode.isHidden=r,!r||$.alternate!==null&&$.alternate.memoizedState!==null||(so=u_())),n&4&&gi(_);break;case 22:if(L=t!==null&&t.memoizedState!==null,_.mode&1?(g_=(a=g_)||L,J_(e,_),g_=a):J_(e,_),$e(_),n&8192){if(a=_.memoizedState!==null,(_.stateNode.isHidden=a)&&!L&&_.mode&1)for(U=_,L=_.child;L!==null;){for(T=U=L;U!==null;){switch(f=U,R=f.child,f.tag){case 0:case 11:case 14:case 15:ln(4,f,f.return);break;case 1:pt(f,f.return);var I=f.stateNode;if(typeof I.componentWillUnmount=="function"){n=f,t=f.return;try{e=n,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(g){o_(n,t,g)}}break;case 5:pt(f,f.return);break;case 22:if(f.memoizedState!==null){Ci(T);continue}}R!==null?(R.return=f,U=R):Ci(T)}L=L.sibling}_:for(L=null,T=_;;){if(T.tag===5){if(L===null){L=T;try{$=T.stateNode,a?(r=$.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=T.stateNode,i=T.memoizedProps.style,l=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=da("display",l))}catch(g){o_(_,_.return,g)}}}else if(T.tag===6){if(L===null)try{T.stateNode.nodeValue=a?"":T.memoizedProps}catch(g){o_(_,_.return,g)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===_)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===_)break _;for(;T.sibling===null;){if(T.return===null||T.return===_)break _;L===T&&(L=null),T=T.return}L===T&&(L=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:J_(e,_),$e(_),n&4&&gi(_);break;case 21:break;default:J_(e,_),$e(_)}}function $e(_){var e=_.flags;if(e&2){try{_:{for(var t=_.return;t!==null;){if(Gu(t)){var n=t;break _}t=t.return}throw Error(N(160))}switch(n.tag){case 5:var $=n.stateNode;n.flags&32&&(sn($,""),n.flags&=-33);var r=Ri(_);Il(_,r,$);break;case 3:case 4:var l=n.stateNode.containerInfo,o=Ri(_);El(_,o,l);break;default:throw Error(N(161))}}catch(i){o_(_,_.return,i)}_.flags&=-3}e&4096&&(_.flags&=-4097)}function wf(_,e,t){U=_,Vu(_)}function Vu(_,e,t){for(var n=(_.mode&1)!==0;U!==null;){var $=U,r=$.child;if($.tag===22&&n){var l=$.memoizedState!==null||Jn;if(!l){var o=$.alternate,i=o!==null&&o.memoizedState!==null||g_;o=Jn;var a=g_;if(Jn=l,(g_=i)&&!a)for(U=$;U!==null;)l=U,i=l.child,l.tag===22&&l.memoizedState!==null?Si($):i!==null?(i.return=l,U=i):Si($);for(;r!==null;)U=r,Vu(r),r=r.sibling;U=$,Jn=o,g_=a}vi(_)}else $.subtreeFlags&8772&&r!==null?(r.return=$,U=r):vi(_)}}function vi(_){for(;U!==null;){var e=U;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:g_||K$(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!g_)if(t===null)n.componentDidMount();else{var $=e.elementType===e.type?t.memoizedProps:Z_(e.type,t.memoizedProps);n.componentDidUpdate($,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&ai(e,r,n);break;case 3:var l=e.updateQueue;if(l!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ai(e,l,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var i=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&t.focus();break;case"img":i.src&&(t.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var a=e.alternate;if(a!==null){var L=a.memoizedState;if(L!==null){var T=L.dehydrated;T!==null&&dn(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}g_||e.flags&512&&Ll(e)}catch(f){o_(e,e.return,f)}}if(e===_){U=null;break}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}}function Ci(_){for(;U!==null;){var e=U;if(e===_){U=null;break}var t=e.sibling;if(t!==null){t.return=e.return,U=t;break}U=e.return}}function Si(_){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{K$(4,e)}catch(i){o_(e,t,i)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var $=e.return;try{n.componentDidMount()}catch(i){o_(e,$,i)}}var r=e.return;try{Ll(e)}catch(i){o_(e,r,i)}break;case 5:var l=e.return;try{Ll(e)}catch(i){o_(e,l,i)}}}catch(i){o_(e,e.return,i)}if(e===_){U=null;break}var o=e.sibling;if(o!==null){o.return=e.return,U=o;break}U=e.return}}var Mf=Math.ceil,P$=Ae.ReactCurrentDispatcher,ao=Ae.ReactCurrentOwner,z_=Ae.ReactCurrentBatchConfig,z=0,L_=null,s_=null,h_=0,W_=0,mt=je(0),T_=0,Cn=null,nt=0,X$=0,uo=0,on=null,P_=null,so=0,Ht=1/0,ae=null,O$=!1,Al=null,He=null,Zn=!1,ye=null,w$=0,an=0,hl=null,a$=-1,u$=0;function y_(){return z&6?u_():a$!==-1?a$:a$=u_()}function ke(_){return _.mode&1?z&2&&h_!==0?h_&-h_:Ef.transition!==null?(u$===0&&(u$=ya()),u$):(_=K,_!==0||(_=window.event,_=_===void 0?16:Ha(_.type)),_):1}function te(_,e,t,n){if(50<an)throw an=0,hl=null,Error(N(185));xn(_,t,n),(!(z&2)||_!==L_)&&(_===L_&&(!(z&2)&&(X$|=t),T_===4&&Ce(_,h_)),H_(_,n),t===1&&z===0&&!(e.mode&1)&&(Ht=u_()+500,V$&&Be()))}function H_(_,e){var t=_.callbackNode;Lc(_,e);var n=L$(_,_===L_?h_:0);if(n===0)t!==null&&ko(t),_.callbackNode=null,_.callbackPriority=0;else if(e=n&-n,_.callbackPriority!==e){if(t!=null&&ko(t),e===1)_.tag===0?Lf(yi.bind(null,_)):_u(yi.bind(null,_)),cf(function(){!(z&6)&&Be()}),t=null;else{switch(Na(n)){case 1:t=Wl;break;case 4:t=Ca;break;case 16:t=d$;break;case 536870912:t=Sa;break;default:t=d$}t=Zu(t,Yu.bind(null,_))}_.callbackPriority=e,_.callbackNode=t}}function Yu(_,e){if(a$=-1,u$=0,z&6)throw Error(N(327));var t=_.callbackNode;if(yt()&&_.callbackNode!==t)return null;var n=L$(_,_===L_?h_:0);if(n===0)return null;if(n&30||n&_.expiredLanes||e)e=M$(_,n);else{e=n;var $=z;z|=2;var r=Ku();(L_!==_||h_!==e)&&(ae=null,Ht=u_()+500,Je(_,e));do try{Wf();break}catch(o){zu(_,o)}while(!0);Ql(),P$.current=r,z=$,s_!==null?e=0:(L_=null,h_=0,e=T_)}if(e!==0){if(e===2&&($=Kr(_),$!==0&&(n=$,e=pl(_,$))),e===1)throw t=Cn,Je(_,0),Ce(_,n),H_(_,u_()),t;if(e===6)Ce(_,n);else{if($=_.current.alternate,!(n&30)&&!Hf($)&&(e=M$(_,n),e===2&&(r=Kr(_),r!==0&&(n=r,e=pl(_,r))),e===1))throw t=Cn,Je(_,0),Ce(_,n),H_(_,u_()),t;switch(_.finishedWork=$,_.finishedLanes=n,e){case 0:case 1:throw Error(N(345));case 2:ze(_,P_,ae);break;case 3:if(Ce(_,n),(n&130023424)===n&&(e=so+500-u_(),10<e)){if(L$(_,0)!==0)break;if($=_.suspendedLanes,($&n)!==n){y_(),_.pingedLanes|=_.suspendedLanes&$;break}_.timeoutHandle=el(ze.bind(null,_,P_,ae),e);break}ze(_,P_,ae);break;case 4:if(Ce(_,n),(n&4194240)===n)break;for(e=_.eventTimes,$=-1;0<n;){var l=31-ee(n);r=1<<l,l=e[l],l>$&&($=l),n&=~r}if(n=$,n=u_()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Mf(n/1960))-n,10<n){_.timeoutHandle=el(ze.bind(null,_,P_,ae),n);break}ze(_,P_,ae);break;case 5:ze(_,P_,ae);break;default:throw Error(N(329))}}}return H_(_,u_()),_.callbackNode===t?Yu.bind(null,_):null}function pl(_,e){var t=on;return _.current.memoizedState.isDehydrated&&(Je(_,e).flags|=256),_=M$(_,e),_!==2&&(e=P_,P_=t,e!==null&&ml(e)),_}function ml(_){P_===null?P_=_:P_.push.apply(P_,_)}function Hf(_){for(var e=_;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var $=t[n],r=$.getSnapshot;$=$.value;try{if(!ne(r(),$))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===_)break;for(;e.sibling===null;){if(e.return===null||e.return===_)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ce(_,e){for(e&=~uo,e&=~X$,_.suspendedLanes|=e,_.pingedLanes&=~e,_=_.expirationTimes;0<e;){var t=31-ee(e),n=1<<t;_[t]=-1,e&=~n}}function yi(_){if(z&6)throw Error(N(327));yt();var e=L$(_,0);if(!(e&1))return H_(_,u_()),null;var t=M$(_,e);if(_.tag!==0&&t===2){var n=Kr(_);n!==0&&(e=n,t=pl(_,n))}if(t===1)throw t=Cn,Je(_,0),Ce(_,e),H_(_,u_()),t;if(t===6)throw Error(N(345));return _.finishedWork=_.current.alternate,_.finishedLanes=e,ze(_,P_,ae),H_(_,u_()),null}function co(_,e){var t=z;z|=1;try{return _(e)}finally{z=t,z===0&&(Ht=u_()+500,V$&&Be())}}function $t(_){ye!==null&&ye.tag===0&&!(z&6)&&yt();var e=z;z|=1;var t=z_.transition,n=K;try{if(z_.transition=null,K=1,_)return _()}finally{K=n,z_.transition=t,z=e,!(z&6)&&Be()}}function fo(){W_=mt.current,e_(mt)}function Je(_,e){_.finishedWork=null,_.finishedLanes=0;var t=_.timeoutHandle;if(t!==-1&&(_.timeoutHandle=-1,sf(t)),s_!==null)for(t=s_.return;t!==null;){var n=t;switch(Kl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&p$();break;case 3:wt(),e_(w_),e_(v_),to();break;case 5:eo(n);break;case 4:wt();break;case 13:e_($_);break;case 19:e_($_);break;case 10:Jl(n.type._context);break;case 22:case 23:fo()}t=t.return}if(L_=_,s_=_=We(_.current,null),h_=W_=e,T_=0,Cn=null,uo=X$=nt=0,P_=on=null,be!==null){for(e=0;e<be.length;e++)if(t=be[e],n=t.interleaved,n!==null){t.interleaved=null;var $=n.next,r=t.pending;if(r!==null){var l=r.next;r.next=$,n.next=l}t.pending=n}be=null}return _}function zu(_,e){do{var t=s_;try{if(Ql(),l$.current=x$,N$){for(var n=r_.memoizedState;n!==null;){var $=n.queue;$!==null&&($.pending=null),n=n.next}N$=!1}if(tt=0,d_=f_=r_=null,rn=!1,Rn=0,ao.current=null,t===null||t.return===null){T_=1,Cn=e,s_=null;break}_:{var r=_,l=t.return,o=t,i=e;if(e=h_,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var a=i,L=o,T=L.tag;if(!(L.mode&1)&&(T===0||T===11||T===15)){var f=L.alternate;f?(L.updateQueue=f.updateQueue,L.memoizedState=f.memoizedState,L.lanes=f.lanes):(L.updateQueue=null,L.memoizedState=null)}var R=di(l);if(R!==null){R.flags&=-257,Li(R,l,o,r,e),R.mode&1&&Ti(r,a,e),e=R,i=a;var I=e.updateQueue;if(I===null){var g=new Set;g.add(i),e.updateQueue=g}else I.add(i);break _}else{if(!(e&1)){Ti(r,a,e),To();break _}i=Error(N(426))}}else if(n_&&o.mode&1){var S=di(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Li(S,l,o,r,e),Xl(Mt(i,o));break _}}r=i=Mt(i,o),T_!==4&&(T_=2),on===null?on=[r]:on.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var c=Nu(r,i,e);ii(r,c);break _;case 1:o=i;var u=r.type,d=r.stateNode;if(!(r.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(He===null||!He.has(d)))){r.flags|=65536,e&=-e,r.lanes|=e;var p=xu(r,o,e);ii(r,p);break _}}r=r.return}while(r!==null)}bu(t)}catch(y){e=y,s_===t&&t!==null&&(s_=t=t.return);continue}break}while(!0)}function Ku(){var _=P$.current;return P$.current=x$,_===null?x$:_}function To(){(T_===0||T_===3||T_===2)&&(T_=4),L_===null||!(nt&268435455)&&!(X$&268435455)||Ce(L_,h_)}function M$(_,e){var t=z;z|=2;var n=Ku();(L_!==_||h_!==e)&&(ae=null,Je(_,e));do try{kf();break}catch($){zu(_,$)}while(!0);if(Ql(),z=t,P$.current=n,s_!==null)throw Error(N(261));return L_=null,h_=0,T_}function kf(){for(;s_!==null;)Xu(s_)}function Wf(){for(;s_!==null&&!oc();)Xu(s_)}function Xu(_){var e=Ju(_.alternate,_,W_);_.memoizedProps=_.pendingProps,e===null?bu(_):s_=e,ao.current=null}function bu(_){var e=_;do{var t=e.alternate;if(_=e.return,e.flags&32768){if(t=xf(t,e),t!==null){t.flags&=32767,s_=t;return}if(_!==null)_.flags|=32768,_.subtreeFlags=0,_.deletions=null;else{T_=6,s_=null;return}}else if(t=Nf(t,e,W_),t!==null){s_=t;return}if(e=e.sibling,e!==null){s_=e;return}s_=e=_}while(e!==null);T_===0&&(T_=5)}function ze(_,e,t){var n=K,$=z_.transition;try{z_.transition=null,K=1,Uf(_,e,t,n)}finally{z_.transition=$,K=n}return null}function Uf(_,e,t,n){do yt();while(ye!==null);if(z&6)throw Error(N(327));t=_.finishedWork;var $=_.finishedLanes;if(t===null)return null;if(_.finishedWork=null,_.finishedLanes=0,t===_.current)throw Error(N(177));_.callbackNode=null,_.callbackPriority=0;var r=t.lanes|t.childLanes;if(Ec(_,r),_===L_&&(s_=L_=null,h_=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Zn||(Zn=!0,Zu(d$,function(){return yt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=z_.transition,z_.transition=null;var l=K;K=1;var o=z;z|=4,ao.current=null,Of(_,t),Bu(t,_),nf(qr),E$=!!Zr,qr=Zr=null,_.current=t,wf(t),ic(),z=o,K=l,z_.transition=r}else _.current=t;if(Zn&&(Zn=!1,ye=_,w$=$),r=_.pendingLanes,r===0&&(He=null),sc(t.stateNode),H_(_,u_()),e!==null)for(n=_.onRecoverableError,t=0;t<e.length;t++)$=e[t],n($.value,{componentStack:$.stack,digest:$.digest});if(O$)throw O$=!1,_=Al,Al=null,_;return w$&1&&_.tag!==0&&yt(),r=_.pendingLanes,r&1?_===hl?an++:(an=0,hl=_):an=0,Be(),null}function yt(){if(ye!==null){var _=Na(w$),e=z_.transition,t=K;try{if(z_.transition=null,K=16>_?16:_,ye===null)var n=!1;else{if(_=ye,ye=null,w$=0,z&6)throw Error(N(331));var $=z;for(z|=4,U=_.current;U!==null;){var r=U,l=r.child;if(U.flags&16){var o=r.deletions;if(o!==null){for(var i=0;i<o.length;i++){var a=o[i];for(U=a;U!==null;){var L=U;switch(L.tag){case 0:case 11:case 15:ln(8,L,r)}var T=L.child;if(T!==null)T.return=L,U=T;else for(;U!==null;){L=U;var f=L.sibling,R=L.return;if(Fu(L),L===a){U=null;break}if(f!==null){f.return=R,U=f;break}U=R}}}var I=r.alternate;if(I!==null){var g=I.child;if(g!==null){I.child=null;do{var S=g.sibling;g.sibling=null,g=S}while(g!==null)}}U=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,U=l;else _:for(;U!==null;){if(r=U,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ln(9,r,r.return)}var c=r.sibling;if(c!==null){c.return=r.return,U=c;break _}U=r.return}}var u=_.current;for(U=u;U!==null;){l=U;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,U=d;else _:for(l=u;U!==null;){if(o=U,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:K$(9,o)}}catch(y){o_(o,o.return,y)}if(o===l){U=null;break _}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break _}U=o.return}}if(z=$,Be(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(D$,_)}catch{}n=!0}return n}finally{K=t,z_.transition=e}}return!1}function Ni(_,e,t){e=Mt(t,e),e=Nu(_,e,1),_=Me(_,e,1),e=y_(),_!==null&&(xn(_,1,e),H_(_,e))}function o_(_,e,t){if(_.tag===3)Ni(_,_,t);else for(;e!==null;){if(e.tag===3){Ni(e,_,t);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(He===null||!He.has(n))){_=Mt(t,_),_=xu(e,_,1),e=Me(e,_,1),_=y_(),e!==null&&(xn(e,1,_),H_(e,_));break}}e=e.return}}function Df(_,e,t){var n=_.pingCache;n!==null&&n.delete(e),e=y_(),_.pingedLanes|=_.suspendedLanes&t,L_===_&&(h_&t)===t&&(T_===4||T_===3&&(h_&130023424)===h_&&500>u_()-so?Je(_,0):uo|=t),H_(_,e)}function Qu(_,e){e===0&&(_.mode&1?(e=jn,jn<<=1,!(jn&130023424)&&(jn=4194304)):e=1);var t=y_();_=Ee(_,e),_!==null&&(xn(_,e,t),H_(_,t))}function Ff(_){var e=_.memoizedState,t=0;e!==null&&(t=e.retryLane),Qu(_,t)}function Gf(_,e){var t=0;switch(_.tag){case 13:var n=_.stateNode,$=_.memoizedState;$!==null&&(t=$.retryLane);break;case 19:n=_.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(e),Qu(_,t)}var Ju;Ju=function(_,e,t){if(_!==null)if(_.memoizedProps!==e.pendingProps||w_.current)O_=!0;else{if(!(_.lanes&t)&&!(e.flags&128))return O_=!1,yf(_,e,t);O_=!!(_.flags&131072)}else O_=!1,n_&&e.flags&1048576&&eu(e,g$,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;i$(_,e),_=e.pendingProps;var $=xt(e,v_.current);St(e,t),$=$o(null,e,n,_,$,t);var r=ro();return e.flags|=1,typeof $=="object"&&$!==null&&typeof $.render=="function"&&$.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,M_(n)?(r=!0,m$(e)):r=!1,e.memoizedState=$.state!==null&&$.state!==void 0?$.state:null,ql(e),$.updater=z$,e.stateNode=$,$._reactInternals=e,il(e,n,_,t),e=sl(null,e,n,!0,r,t)):(e.tag=0,n_&&r&&zl(e),S_(null,e,$,t),e=e.child),e;case 16:n=e.elementType;_:{switch(i$(_,e),_=e.pendingProps,$=n._init,n=$(n._payload),e.type=n,$=e.tag=Bf(n),_=Z_(n,_),$){case 0:e=ul(null,e,n,_,t);break _;case 1:e=Ai(null,e,n,_,t);break _;case 11:e=Ei(null,e,n,_,t);break _;case 14:e=Ii(null,e,n,Z_(n.type,_),t);break _}throw Error(N(306,n,""))}return e;case 0:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:Z_(n,$),ul(_,e,n,$,t);case 1:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:Z_(n,$),Ai(_,e,n,$,t);case 3:_:{if(Mu(e),_===null)throw Error(N(387));n=e.pendingProps,r=e.memoizedState,$=r.element,ou(_,e),S$(e,n,null,t);var l=e.memoizedState;if(n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){$=Mt(Error(N(423)),e),e=hi(_,e,n,t,$);break _}else if(n!==$){$=Mt(Error(N(424)),e),e=hi(_,e,n,t,$);break _}else for(U_=we(e.stateNode.containerInfo.firstChild),D_=e,n_=!0,_e=null,t=ru(e,null,n,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Pt(),n===$){e=Ie(_,e,t);break _}S_(_,e,n,t)}e=e.child}return e;case 5:return iu(e),_===null&&rl(e),n=e.type,$=e.pendingProps,r=_!==null?_.memoizedProps:null,l=$.children,_l(n,$)?l=null:r!==null&&_l(n,r)&&(e.flags|=32),wu(_,e),S_(_,e,l,t),e.child;case 6:return _===null&&rl(e),null;case 13:return Hu(_,e,t);case 4:return _o(e,e.stateNode.containerInfo),n=e.pendingProps,_===null?e.child=Ot(e,null,n,t):S_(_,e,n,t),e.child;case 11:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:Z_(n,$),Ei(_,e,n,$,t);case 7:return S_(_,e,e.pendingProps,t),e.child;case 8:return S_(_,e,e.pendingProps.children,t),e.child;case 12:return S_(_,e,e.pendingProps.children,t),e.child;case 10:_:{if(n=e.type._context,$=e.pendingProps,r=e.memoizedProps,l=$.value,J(v$,n._currentValue),n._currentValue=l,r!==null)if(ne(r.value,l)){if(r.children===$.children&&!w_.current){e=Ie(_,e,t);break _}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){l=r.child;for(var i=o.firstContext;i!==null;){if(i.context===n){if(r.tag===1){i=fe(-1,t&-t),i.tag=2;var a=r.updateQueue;if(a!==null){a=a.shared;var L=a.pending;L===null?i.next=i:(i.next=L.next,L.next=i),a.pending=i}}r.lanes|=t,i=r.alternate,i!==null&&(i.lanes|=t),ll(r.return,t,e),o.lanes|=t;break}i=i.next}}else if(r.tag===10)l=r.type===e.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(N(341));l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),ll(l,t,e),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===e){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}S_(_,e,$.children,t),e=e.child}return e;case 9:return $=e.type,n=e.pendingProps.children,St(e,t),$=K_($),n=n($),e.flags|=1,S_(_,e,n,t),e.child;case 14:return n=e.type,$=Z_(n,e.pendingProps),$=Z_(n.type,$),Ii(_,e,n,$,t);case 15:return Pu(_,e,e.type,e.pendingProps,t);case 17:return n=e.type,$=e.pendingProps,$=e.elementType===n?$:Z_(n,$),i$(_,e),e.tag=1,M_(n)?(_=!0,m$(e)):_=!1,St(e,t),yu(e,n,$),il(e,n,$,t),sl(null,e,n,!0,_,t);case 19:return ku(_,e,t);case 22:return Ou(_,e,t)}throw Error(N(156,e.tag))};function Zu(_,e){return va(_,e)}function jf(_,e,t,n){this.tag=_,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Y_(_,e,t,n){return new jf(_,e,t,n)}function Lo(_){return _=_.prototype,!(!_||!_.isReactComponent)}function Bf(_){if(typeof _=="function")return Lo(_)?1:0;if(_!=null){if(_=_.$$typeof,_===Ml)return 11;if(_===Hl)return 14}return 2}function We(_,e){var t=_.alternate;return t===null?(t=Y_(_.tag,e,_.key,_.mode),t.elementType=_.elementType,t.type=_.type,t.stateNode=_.stateNode,t.alternate=_,_.alternate=t):(t.pendingProps=e,t.type=_.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=_.flags&14680064,t.childLanes=_.childLanes,t.lanes=_.lanes,t.child=_.child,t.memoizedProps=_.memoizedProps,t.memoizedState=_.memoizedState,t.updateQueue=_.updateQueue,e=_.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=_.sibling,t.index=_.index,t.ref=_.ref,t}function s$(_,e,t,n,$,r){var l=2;if(n=_,typeof _=="function")Lo(_)&&(l=1);else if(typeof _=="string")l=5;else _:switch(_){case ct:return Ze(t.children,$,r,e);case wl:l=8,$|=8;break;case Or:return _=Y_(12,t,e,$|2),_.elementType=Or,_.lanes=r,_;case wr:return _=Y_(13,t,e,$),_.elementType=wr,_.lanes=r,_;case Mr:return _=Y_(19,t,e,$),_.elementType=Mr,_.lanes=r,_;case ia:return b$(t,$,r,e);default:if(typeof _=="object"&&_!==null)switch(_.$$typeof){case la:l=10;break _;case oa:l=9;break _;case Ml:l=11;break _;case Hl:l=14;break _;case Re:l=16,n=null;break _}throw Error(N(130,_==null?_:typeof _,""))}return e=Y_(l,t,e,$),e.elementType=_,e.type=n,e.lanes=r,e}function Ze(_,e,t,n){return _=Y_(7,_,n,e),_.lanes=t,_}function b$(_,e,t,n){return _=Y_(22,_,n,e),_.elementType=ia,_.lanes=t,_.stateNode={isHidden:!1},_}function yr(_,e,t){return _=Y_(6,_,null,e),_.lanes=t,_}function Nr(_,e,t){return e=Y_(4,_.children!==null?_.children:[],_.key,e),e.lanes=t,e.stateNode={containerInfo:_.containerInfo,pendingChildren:null,implementation:_.implementation},e}function Vf(_,e,t,n,$){this.tag=e,this.containerInfo=_,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ar(0),this.expirationTimes=ar(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ar(0),this.identifierPrefix=n,this.onRecoverableError=$,this.mutableSourceEagerHydrationData=null}function Eo(_,e,t,n,$,r,l,o,i){return _=new Vf(_,e,t,o,i),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Y_(3,null,null,e),_.current=r,r.stateNode=_,r.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(r),_}function Yf(_,e,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:st,key:n==null?null:""+n,children:_,containerInfo:e,implementation:t}}function qu(_){if(!_)return Fe;_=_._reactInternals;_:{if(lt(_)!==_||_.tag!==1)throw Error(N(170));var e=_;do{switch(e.tag){case 3:e=e.stateNode.context;break _;case 1:if(M_(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break _}}e=e.return}while(e!==null);throw Error(N(171))}if(_.tag===1){var t=_.type;if(M_(t))return qa(_,t,e)}return e}function _s(_,e,t,n,$,r,l,o,i){return _=Eo(t,n,!0,_,$,r,l,o,i),_.context=qu(null),t=_.current,n=y_(),$=ke(t),r=fe(n,$),r.callback=e??null,Me(t,r,$),_.current.lanes=$,xn(_,$,n),H_(_,n),_}function Q$(_,e,t,n){var $=e.current,r=y_(),l=ke($);return t=qu(t),e.context===null?e.context=t:e.pendingContext=t,e=fe(r,l),e.payload={element:_},n=n===void 0?null:n,n!==null&&(e.callback=n),_=Me($,e,l),_!==null&&(te(_,$,l,r),r$(_,$,l)),l}function H$(_){if(_=_.current,!_.child)return null;switch(_.child.tag){case 5:return _.child.stateNode;default:return _.child.stateNode}}function xi(_,e){if(_=_.memoizedState,_!==null&&_.dehydrated!==null){var t=_.retryLane;_.retryLane=t!==0&&t<e?t:e}}function Io(_,e){xi(_,e),(_=_.alternate)&&xi(_,e)}function zf(){return null}var es=typeof reportError=="function"?reportError:function(_){console.error(_)};function Ao(_){this._internalRoot=_}J$.prototype.render=Ao.prototype.render=function(_){var e=this._internalRoot;if(e===null)throw Error(N(409));Q$(_,e,null,null)};J$.prototype.unmount=Ao.prototype.unmount=function(){var _=this._internalRoot;if(_!==null){this._internalRoot=null;var e=_.containerInfo;$t(function(){Q$(null,_,null,null)}),e[Le]=null}};function J$(_){this._internalRoot=_}J$.prototype.unstable_scheduleHydration=function(_){if(_){var e=Oa();_={blockedOn:null,target:_,priority:e};for(var t=0;t<ve.length&&e!==0&&e<ve[t].priority;t++);ve.splice(t,0,_),t===0&&Ma(_)}};function ho(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)}function Z$(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11&&(_.nodeType!==8||_.nodeValue!==" react-mount-point-unstable "))}function Pi(){}function Kf(_,e,t,n,$){if($){if(typeof n=="function"){var r=n;n=function(){var a=H$(l);r.call(a)}}var l=_s(e,n,_,0,null,!1,!1,"",Pi);return _._reactRootContainer=l,_[Le]=l.current,In(_.nodeType===8?_.parentNode:_),$t(),l}for(;$=_.lastChild;)_.removeChild($);if(typeof n=="function"){var o=n;n=function(){var a=H$(i);o.call(a)}}var i=Eo(_,0,!1,null,null,!1,!1,"",Pi);return _._reactRootContainer=i,_[Le]=i.current,In(_.nodeType===8?_.parentNode:_),$t(function(){Q$(e,i,t,n)}),i}function q$(_,e,t,n,$){var r=t._reactRootContainer;if(r){var l=r;if(typeof $=="function"){var o=$;$=function(){var i=H$(l);o.call(i)}}Q$(e,l,_,$)}else l=Kf(t,e,_,$,n);return H$(l)}xa=function(_){switch(_.tag){case 3:var e=_.stateNode;if(e.current.memoizedState.isDehydrated){var t=Zt(e.pendingLanes);t!==0&&(Ul(e,t|1),H_(e,u_()),!(z&6)&&(Ht=u_()+500,Be()))}break;case 13:$t(function(){var n=Ee(_,1);if(n!==null){var $=y_();te(n,_,1,$)}}),Io(_,1)}};Dl=function(_){if(_.tag===13){var e=Ee(_,134217728);if(e!==null){var t=y_();te(e,_,134217728,t)}Io(_,134217728)}};Pa=function(_){if(_.tag===13){var e=ke(_),t=Ee(_,e);if(t!==null){var n=y_();te(t,_,e,n)}Io(_,e)}};Oa=function(){return K};wa=function(_,e){var t=K;try{return K=_,e()}finally{K=t}};Vr=function(_,e,t){switch(e){case"input":if(Wr(_,t),e=t.name,t.type==="radio"&&e!=null){for(t=_;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var n=t[e];if(n!==_&&n.form===_.form){var $=B$(n);if(!$)throw Error(N(90));ua(n),Wr(n,$)}}}break;case"textarea":ca(_,t);break;case"select":e=t.value,e!=null&&Rt(_,!!t.multiple,e,!1)}};Aa=co;ha=$t;var Xf={usingClientEntryPoint:!1,Events:[On,Lt,B$,Ea,Ia,co]},bt={findFiberByHostInstance:Xe,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bf={bundleType:bt.bundleType,version:bt.version,rendererPackageName:bt.rendererPackageName,rendererConfig:bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(_){return _=Ra(_),_===null?null:_.stateNode},findFiberByHostInstance:bt.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qn.isDisabled&&qn.supportsFiber)try{D$=qn.inject(bf),oe=qn}catch{}}G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xf;G_.createPortal=function(_,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ho(e))throw Error(N(200));return Yf(_,e,null,t)};G_.createRoot=function(_,e){if(!ho(_))throw Error(N(299));var t=!1,n="",$=es;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&($=e.onRecoverableError)),e=Eo(_,1,!1,null,null,t,!1,n,$),_[Le]=e.current,In(_.nodeType===8?_.parentNode:_),new Ao(e)};G_.findDOMNode=function(_){if(_==null)return null;if(_.nodeType===1)return _;var e=_._reactInternals;if(e===void 0)throw typeof _.render=="function"?Error(N(188)):(_=Object.keys(_).join(","),Error(N(268,_)));return _=Ra(e),_=_===null?null:_.stateNode,_};G_.flushSync=function(_){return $t(_)};G_.hydrate=function(_,e,t){if(!Z$(e))throw Error(N(200));return q$(null,_,e,!0,t)};G_.hydrateRoot=function(_,e,t){if(!ho(_))throw Error(N(405));var n=t!=null&&t.hydratedSources||null,$=!1,r="",l=es;if(t!=null&&(t.unstable_strictMode===!0&&($=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),e=_s(e,null,_,1,t??null,$,!1,r,l),_[Le]=e.current,In(_),n)for(_=0;_<n.length;_++)t=n[_],$=t._getVersion,$=$(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,$]:e.mutableSourceEagerHydrationData.push(t,$);return new J$(e)};G_.render=function(_,e,t){if(!Z$(e))throw Error(N(200));return q$(null,_,e,!1,t)};G_.unmountComponentAtNode=function(_){if(!Z$(_))throw Error(N(40));return _._reactRootContainer?($t(function(){q$(null,null,_,!1,function(){_._reactRootContainer=null,_[Le]=null})}),!0):!1};G_.unstable_batchedUpdates=co;G_.unstable_renderSubtreeIntoContainer=function(_,e,t,n){if(!Z$(t))throw Error(N(200));if(_==null||_._reactInternals===void 0)throw Error(N(38));return q$(_,e,t,!1,n)};G_.version="18.3.1-next-f1338f8080-20240426";function ts(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ts)}catch(_){console.error(_)}}ts(),ta.exports=G_;var Qf=ta.exports,ns,Oi=Qf;ns=Oi.createRoot,Oi.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sn(){return Sn=Object.assign?Object.assign.bind():function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(_[n]=t[n])}return _},Sn.apply(this,arguments)}var Ne;(function(_){_.Pop="POP",_.Push="PUSH",_.Replace="REPLACE"})(Ne||(Ne={}));const wi="popstate";function Jf(_){_===void 0&&(_={});function e(n,$){let{pathname:r,search:l,hash:o}=n.location;return Rl("",{pathname:r,search:l,hash:o},$.state&&$.state.usr||null,$.state&&$.state.key||"default")}function t(n,$){return typeof $=="string"?$:k$($)}return qf(e,t,null,_)}function c_(_,e){if(_===!1||_===null||typeof _>"u")throw new Error(e)}function $s(_,e){if(!_){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zf(){return Math.random().toString(36).substr(2,8)}function Mi(_,e){return{usr:_.state,key:_.key,idx:e}}function Rl(_,e,t,n){return t===void 0&&(t=null),Sn({pathname:typeof _=="string"?_:_.pathname,search:"",hash:""},typeof e=="string"?Dt(e):e,{state:t,key:e&&e.key||n||Zf()})}function k$(_){let{pathname:e="/",search:t="",hash:n=""}=_;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Dt(_){let e={};if(_){let t=_.indexOf("#");t>=0&&(e.hash=_.substr(t),_=_.substr(0,t));let n=_.indexOf("?");n>=0&&(e.search=_.substr(n),_=_.substr(0,n)),_&&(e.pathname=_)}return e}function qf(_,e,t,n){n===void 0&&(n={});let{window:$=document.defaultView,v5Compat:r=!1}=n,l=$.history,o=Ne.Pop,i=null,a=L();a==null&&(a=0,l.replaceState(Sn({},l.state,{idx:a}),""));function L(){return(l.state||{idx:null}).idx}function T(){o=Ne.Pop;let S=L(),c=S==null?null:S-a;a=S,i&&i({action:o,location:g.location,delta:c})}function f(S,c){o=Ne.Push;let u=Rl(g.location,S,c);a=L()+1;let d=Mi(u,a),p=g.createHref(u);try{l.pushState(d,"",p)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;$.location.assign(p)}r&&i&&i({action:o,location:g.location,delta:1})}function R(S,c){o=Ne.Replace;let u=Rl(g.location,S,c);a=L();let d=Mi(u,a),p=g.createHref(u);l.replaceState(d,"",p),r&&i&&i({action:o,location:g.location,delta:0})}function I(S){let c=$.location.origin!=="null"?$.location.origin:$.location.href,u=typeof S=="string"?S:k$(S);return u=u.replace(/ $/,"%20"),c_(c,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,c)}let g={get action(){return o},get location(){return _($,l)},listen(S){if(i)throw new Error("A history only accepts one active listener");return $.addEventListener(wi,T),i=S,()=>{$.removeEventListener(wi,T),i=null}},createHref(S){return e($,S)},createURL:I,encodeLocation(S){let c=I(S);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:f,replace:R,go(S){return l.go(S)}};return g}var Hi;(function(_){_.data="data",_.deferred="deferred",_.redirect="redirect",_.error="error"})(Hi||(Hi={}));function _T(_,e,t){return t===void 0&&(t="/"),eT(_,e,t,!1)}function eT(_,e,t,n){let $=typeof e=="string"?Dt(e):e,r=po($.pathname||"/",t);if(r==null)return null;let l=rs(_);tT(l);let o=null;for(let i=0;o==null&&i<l.length;++i){let a=fT(r);o=sT(l[i],a,n)}return o}function rs(_,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let $=(r,l,o)=>{let i={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:l,route:r};i.relativePath.startsWith("/")&&(c_(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(n.length));let a=Ue([n,i.relativePath]),L=t.concat(i);r.children&&r.children.length>0&&(c_(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),rs(r.children,e,L,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:aT(a,r.index),routesMeta:L})};return _.forEach((r,l)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))$(r,l);else for(let i of ls(r.path))$(r,l,i)}),e}function ls(_){let e=_.split("/");if(e.length===0)return[];let[t,...n]=e,$=t.endsWith("?"),r=t.replace(/\?$/,"");if(n.length===0)return $?[r,""]:[r];let l=ls(n.join("/")),o=[];return o.push(...l.map(i=>i===""?r:[r,i].join("/"))),$&&o.push(...l),o.map(i=>_.startsWith("/")&&i===""?"/":i)}function tT(_){_.sort((e,t)=>e.score!==t.score?t.score-e.score:uT(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const nT=/^:[\w-]+$/,$T=3,rT=2,lT=1,oT=10,iT=-2,ki=_=>_==="*";function aT(_,e){let t=_.split("/"),n=t.length;return t.some(ki)&&(n+=iT),e&&(n+=rT),t.filter($=>!ki($)).reduce(($,r)=>$+(nT.test(r)?$T:r===""?lT:oT),n)}function uT(_,e){return _.length===e.length&&_.slice(0,-1).every((n,$)=>n===e[$])?_[_.length-1]-e[e.length-1]:0}function sT(_,e,t){let{routesMeta:n}=_,$={},r="/",l=[];for(let o=0;o<n.length;++o){let i=n[o],a=o===n.length-1,L=r==="/"?e:e.slice(r.length)||"/",T=Wi({path:i.relativePath,caseSensitive:i.caseSensitive,end:a},L),f=i.route;if(!T&&a&&t&&!n[n.length-1].route.index&&(T=Wi({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},L)),!T)return null;Object.assign($,T.params),l.push({params:$,pathname:Ue([r,T.pathname]),pathnameBase:ET(Ue([r,T.pathnameBase])),route:f}),T.pathnameBase!=="/"&&(r=Ue([r,T.pathnameBase]))}return l}function Wi(_,e){typeof _=="string"&&(_={path:_,caseSensitive:!1,end:!0});let[t,n]=cT(_.path,_.caseSensitive,_.end),$=e.match(t);if(!$)return null;let r=$[0],l=r.replace(/(.)\/+$/,"$1"),o=$.slice(1);return{params:n.reduce((a,L,T)=>{let{paramName:f,isOptional:R}=L;if(f==="*"){let g=o[T]||"";l=r.slice(0,r.length-g.length).replace(/(.)\/+$/,"$1")}const I=o[T];return R&&!I?a[f]=void 0:a[f]=(I||"").replace(/%2F/g,"/"),a},{}),pathname:r,pathnameBase:l,pattern:_}}function cT(_,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),$s(_==="*"||!_.endsWith("*")||_.endsWith("/*"),'Route path "'+_+'" will be treated as if it were '+('"'+_.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+_.replace(/\*$/,"/*")+'".'));let n=[],$="^"+_.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,i)=>(n.push({paramName:o,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return _.endsWith("*")?(n.push({paramName:"*"}),$+=_==="*"||_==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?$+="\\/*$":_!==""&&_!=="/"&&($+="(?:(?=\\/|$))"),[new RegExp($,e?void 0:"i"),n]}function fT(_){try{return _.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $s(!1,'The URL path "'+_+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),_}}function po(_,e){if(e==="/")return _;if(!_.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=_.charAt(t);return n&&n!=="/"?null:_.slice(t)||"/"}function TT(_,e){e===void 0&&(e="/");let{pathname:t,search:n="",hash:$=""}=typeof _=="string"?Dt(_):_;return{pathname:t?t.startsWith("/")?t:dT(t,e):e,search:IT(n),hash:AT($)}}function dT(_,e){let t=e.replace(/\/+$/,"").split("/");return _.split("/").forEach($=>{$===".."?t.length>1&&t.pop():$!=="."&&t.push($)}),t.length>1?t.join("/"):"/"}function xr(_,e,t,n){return"Cannot include a '"+_+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LT(_){return _.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function os(_,e){let t=LT(_);return e?t.map((n,$)=>$===t.length-1?n.pathname:n.pathnameBase):t.map(n=>n.pathnameBase)}function is(_,e,t,n){n===void 0&&(n=!1);let $;typeof _=="string"?$=Dt(_):($=Sn({},_),c_(!$.pathname||!$.pathname.includes("?"),xr("?","pathname","search",$)),c_(!$.pathname||!$.pathname.includes("#"),xr("#","pathname","hash",$)),c_(!$.search||!$.search.includes("#"),xr("#","search","hash",$)));let r=_===""||$.pathname==="",l=r?"/":$.pathname,o;if(l==null)o=t;else{let T=e.length-1;if(!n&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),T-=1;$.pathname=f.join("/")}o=T>=0?e[T]:"/"}let i=TT($,o),a=l&&l!=="/"&&l.endsWith("/"),L=(r||l===".")&&t.endsWith("/");return!i.pathname.endsWith("/")&&(a||L)&&(i.pathname+="/"),i}const Ue=_=>_.join("/").replace(/\/\/+/g,"/"),ET=_=>_.replace(/\/+$/,"").replace(/^\/*/,"/"),IT=_=>!_||_==="?"?"":_.startsWith("?")?_:"?"+_,AT=_=>!_||_==="#"?"":_.startsWith("#")?_:"#"+_;function hT(_){return _!=null&&typeof _.status=="number"&&typeof _.statusText=="string"&&typeof _.internal=="boolean"&&"data"in _}const as=["post","put","patch","delete"];new Set(as);const pT=["get",...as];new Set(pT);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yn(){return yn=Object.assign?Object.assign.bind():function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(_[n]=t[n])}return _},yn.apply(this,arguments)}const mo=P.createContext(null),mT=P.createContext(null),ot=P.createContext(null),_r=P.createContext(null),Ve=P.createContext({outlet:null,matches:[],isDataRoute:!1}),us=P.createContext(null);function RT(_,e){let{relative:t}=e===void 0?{}:e;Mn()||c_(!1);let{basename:n,navigator:$}=P.useContext(ot),{hash:r,pathname:l,search:o}=cs(_,{relative:t}),i=l;return n!=="/"&&(i=l==="/"?n:Ue([n,l])),$.createHref({pathname:i,search:o,hash:r})}function Mn(){return P.useContext(_r)!=null}function Hn(){return Mn()||c_(!1),P.useContext(_r).location}function ss(_){P.useContext(ot).static||P.useLayoutEffect(_)}function gT(){let{isDataRoute:_}=P.useContext(Ve);return _?DT():vT()}function vT(){Mn()||c_(!1);let _=P.useContext(mo),{basename:e,future:t,navigator:n}=P.useContext(ot),{matches:$}=P.useContext(Ve),{pathname:r}=Hn(),l=JSON.stringify(os($,t.v7_relativeSplatPath)),o=P.useRef(!1);return ss(()=>{o.current=!0}),P.useCallback(function(a,L){if(L===void 0&&(L={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let T=is(a,JSON.parse(l),r,L.relative==="path");_==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Ue([e,T.pathname])),(L.replace?n.replace:n.push)(T,L.state,L)},[e,n,l,r,_])}const CT=P.createContext(null);function ST(_){let e=P.useContext(Ve).outlet;return e&&P.createElement(CT.Provider,{value:_},e)}function cs(_,e){let{relative:t}=e===void 0?{}:e,{future:n}=P.useContext(ot),{matches:$}=P.useContext(Ve),{pathname:r}=Hn(),l=JSON.stringify(os($,n.v7_relativeSplatPath));return P.useMemo(()=>is(_,JSON.parse(l),r,t==="path"),[_,l,r,t])}function yT(_,e){return NT(_,e)}function NT(_,e,t,n){Mn()||c_(!1);let{navigator:$}=P.useContext(ot),{matches:r}=P.useContext(Ve),l=r[r.length-1],o=l?l.params:{};l&&l.pathname;let i=l?l.pathnameBase:"/";l&&l.route;let a=Hn(),L;if(e){var T;let S=typeof e=="string"?Dt(e):e;i==="/"||(T=S.pathname)!=null&&T.startsWith(i)||c_(!1),L=S}else L=a;let f=L.pathname||"/",R=f;if(i!=="/"){let S=i.replace(/^\//,"").split("/");R="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let I=_T(_,{pathname:R}),g=MT(I&&I.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Ue([i,$.encodeLocation?$.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?i:Ue([i,$.encodeLocation?$.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),r,t,n);return e&&g?P.createElement(_r.Provider,{value:{location:yn({pathname:"/",search:"",hash:"",state:null,key:"default"},L),navigationType:Ne.Pop}},g):g}function xT(){let _=UT(),e=hT(_)?_.status+" "+_.statusText:_ instanceof Error?_.message:JSON.stringify(_),t=_ instanceof Error?_.stack:null,$={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),t?P.createElement("pre",{style:$},t):null,null)}const PT=P.createElement(xT,null);class OT extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?P.createElement(Ve.Provider,{value:this.props.routeContext},P.createElement(us.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wT(_){let{routeContext:e,match:t,children:n}=_,$=P.useContext(mo);return $&&$.static&&$.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&($.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(Ve.Provider,{value:e},n)}function MT(_,e,t,n){var $;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),_==null){var r;if(!t)return null;if(t.errors)_=t.matches;else if((r=n)!=null&&r.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)_=t.matches;else return null}let l=_,o=($=t)==null?void 0:$.errors;if(o!=null){let L=l.findIndex(T=>T.route.id&&(o==null?void 0:o[T.route.id])!==void 0);L>=0||c_(!1),l=l.slice(0,Math.min(l.length,L+1))}let i=!1,a=-1;if(t&&n&&n.v7_partialHydration)for(let L=0;L<l.length;L++){let T=l[L];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(a=L),T.route.id){let{loaderData:f,errors:R}=t,I=T.route.loader&&f[T.route.id]===void 0&&(!R||R[T.route.id]===void 0);if(T.route.lazy||I){i=!0,a>=0?l=l.slice(0,a+1):l=[l[0]];break}}}return l.reduceRight((L,T,f)=>{let R,I=!1,g=null,S=null;t&&(R=o&&T.route.id?o[T.route.id]:void 0,g=T.route.errorElement||PT,i&&(a<0&&f===0?(I=!0,S=null):a===f&&(I=!0,S=T.route.hydrateFallbackElement||null)));let c=e.concat(l.slice(0,f+1)),u=()=>{let d;return R?d=g:I?d=S:T.route.Component?d=P.createElement(T.route.Component,null):T.route.element?d=T.route.element:d=L,P.createElement(wT,{match:T,routeContext:{outlet:L,matches:c,isDataRoute:t!=null},children:d})};return t&&(T.route.ErrorBoundary||T.route.errorElement||f===0)?P.createElement(OT,{location:t.location,revalidation:t.revalidation,component:g,error:R,children:u(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):u()},null)}var fs=function(_){return _.UseBlocker="useBlocker",_.UseRevalidator="useRevalidator",_.UseNavigateStable="useNavigate",_}(fs||{}),W$=function(_){return _.UseBlocker="useBlocker",_.UseLoaderData="useLoaderData",_.UseActionData="useActionData",_.UseRouteError="useRouteError",_.UseNavigation="useNavigation",_.UseRouteLoaderData="useRouteLoaderData",_.UseMatches="useMatches",_.UseRevalidator="useRevalidator",_.UseNavigateStable="useNavigate",_.UseRouteId="useRouteId",_}(W$||{});function HT(_){let e=P.useContext(mo);return e||c_(!1),e}function kT(_){let e=P.useContext(mT);return e||c_(!1),e}function WT(_){let e=P.useContext(Ve);return e||c_(!1),e}function Ts(_){let e=WT(),t=e.matches[e.matches.length-1];return t.route.id||c_(!1),t.route.id}function UT(){var _;let e=P.useContext(us),t=kT(W$.UseRouteError),n=Ts(W$.UseRouteError);return e!==void 0?e:(_=t.errors)==null?void 0:_[n]}function DT(){let{router:_}=HT(fs.UseNavigateStable),e=Ts(W$.UseNavigateStable),t=P.useRef(!1);return ss(()=>{t.current=!0}),P.useCallback(function($,r){r===void 0&&(r={}),t.current&&(typeof $=="number"?_.navigate($):_.navigate($,yn({fromRouteId:e},r)))},[_,e])}function FT(_){return ST(_.context)}function Ke(_){c_(!1)}function GT(_){let{basename:e="/",children:t=null,location:n,navigationType:$=Ne.Pop,navigator:r,static:l=!1,future:o}=_;Mn()&&c_(!1);let i=e.replace(/^\/*/,"/"),a=P.useMemo(()=>({basename:i,navigator:r,static:l,future:yn({v7_relativeSplatPath:!1},o)}),[i,o,r,l]);typeof n=="string"&&(n=Dt(n));let{pathname:L="/",search:T="",hash:f="",state:R=null,key:I="default"}=n,g=P.useMemo(()=>{let S=po(L,i);return S==null?null:{location:{pathname:S,search:T,hash:f,state:R,key:I},navigationType:$}},[i,L,T,f,R,I,$]);return g==null?null:P.createElement(ot.Provider,{value:a},P.createElement(_r.Provider,{children:t,value:g}))}function jT(_){let{children:e,location:t}=_;return yT(gl(e),t)}new Promise(()=>{});function gl(_,e){e===void 0&&(e=[]);let t=[];return P.Children.forEach(_,(n,$)=>{if(!P.isValidElement(n))return;let r=[...e,$];if(n.type===P.Fragment){t.push.apply(t,gl(n.props.children,r));return}n.type!==Ke&&c_(!1),!n.props.index||!n.props.children||c_(!1);let l={id:n.props.id||r.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=gl(n.props.children,r)),t.push(l)}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(_){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(_[n]=t[n])}return _},vl.apply(this,arguments)}function BT(_,e){if(_==null)return{};var t={},n=Object.keys(_),$,r;for(r=0;r<n.length;r++)$=n[r],!(e.indexOf($)>=0)&&(t[$]=_[$]);return t}function VT(_){return!!(_.metaKey||_.altKey||_.ctrlKey||_.shiftKey)}function YT(_,e){return _.button===0&&(!e||e==="_self")&&!VT(_)}const zT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],KT="6";try{window.__reactRouterVersion=KT}catch{}const XT="startTransition",Ui=Us[XT];function bT(_){let{basename:e,children:t,future:n,window:$}=_,r=P.useRef();r.current==null&&(r.current=Jf({window:$,v5Compat:!0}));let l=r.current,[o,i]=P.useState({action:l.action,location:l.location}),{v7_startTransition:a}=n||{},L=P.useCallback(T=>{a&&Ui?Ui(()=>i(T)):i(T)},[i,a]);return P.useLayoutEffect(()=>l.listen(L),[l,L]),P.createElement(GT,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:l,future:n})}const QT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=P.forwardRef(function(e,t){let{onClick:n,relative:$,reloadDocument:r,replace:l,state:o,target:i,to:a,preventScrollReset:L,unstable_viewTransition:T}=e,f=BT(e,zT),{basename:R}=P.useContext(ot),I,g=!1;if(typeof a=="string"&&JT.test(a)&&(I=a,QT))try{let d=new URL(window.location.href),p=a.startsWith("//")?new URL(d.protocol+a):new URL(a),y=po(p.pathname,R);p.origin===d.origin&&y!=null?a=y+p.search+p.hash:g=!0}catch{}let S=RT(a,{relative:$}),c=ZT(a,{replace:l,state:o,target:i,preventScrollReset:L,relative:$,unstable_viewTransition:T});function u(d){n&&n(d),d.defaultPrevented||c(d)}return P.createElement("a",vl({},f,{href:I||S,onClick:g||r?n:u,ref:t,target:i}))});var Di;(function(_){_.UseScrollRestoration="useScrollRestoration",_.UseSubmit="useSubmit",_.UseSubmitFetcher="useSubmitFetcher",_.UseFetcher="useFetcher",_.useViewTransitionState="useViewTransitionState"})(Di||(Di={}));var Fi;(function(_){_.UseFetcher="useFetcher",_.UseFetchers="useFetchers",_.UseScrollRestoration="useScrollRestoration"})(Fi||(Fi={}));function ZT(_,e){let{target:t,replace:n,state:$,preventScrollReset:r,relative:l,unstable_viewTransition:o}=e===void 0?{}:e,i=gT(),a=Hn(),L=cs(_,{relative:l});return P.useCallback(T=>{if(YT(T,t)){T.preventDefault();let f=n!==void 0?n:k$(a)===k$(L);i(_,{replace:f,state:$,preventScrollReset:r,relative:l,unstable_viewTransition:o})}},[a,i,L,n,$,t,_,r,l,o])}const qT="/Text2ArtJS/",A_={BaseName:qT,Root:"/",FromText:"/from-text",FromImage:"/from-image",FromGIF:"/from-gif",Error404:"*"},_d=()=>v.jsxs("div",{children:[v.jsx("h1",{children:"Error404"}),v.jsx("h4",{children:"Página no encontrada"}),v.jsx(ut,{to:A_.Root,children:"Volver"})]});var ds={exports:{}};(function(_){const e=(()=>{const l={},o={font:"Standard",fontPath:"./fonts"};function i(A,h){let s={},E,m,C,k,O=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(E=h!==null?h:A,m=0,C=O.length;m<C;)k=O[m],E>=k[0]?(E=E-k[0],s[k[1]]=typeof s[k[1]]>"u"?k[2]:s[k[1]]):k[1]!=="vLayout"&&k[1]!=="hLayout"&&(s[k[1]]=!1),m++;return typeof s.hLayout>"u"?A===0?s.hLayout=1:A===-1?s.hLayout=0:s.hRule1||s.hRule2||s.hRule3||s.hRule4||s.hRule5||s.hRule6?s.hLayout=3:s.hLayout=2:s.hLayout===2&&(s.hRule1||s.hRule2||s.hRule3||s.hRule4||s.hRule5||s.hRule6)&&(s.hLayout=3),typeof s.vLayout>"u"?s.vRule1||s.vRule2||s.vRule3||s.vRule4||s.vRule5?s.vLayout=3:s.vLayout=0:s.vLayout===2&&(s.vRule1||s.vRule2||s.vRule3||s.vRule4||s.vRule5)&&(s.vLayout=3),s}function a(A,h,s){return A===h&&A!==s?A:!1}function L(A,h){let s="|/\\[]{}()<>";if(A==="_"){if(s.indexOf(h)!==-1)return h}else if(h==="_"&&s.indexOf(A)!==-1)return A;return!1}function T(A,h){let s="| /\\ [] {} () <>",E=s.indexOf(A),m=s.indexOf(h);if(E!==-1&&m!==-1&&E!==m&&Math.abs(E-m)!==1){const C=Math.max(E,m),k=C+1;return s.substring(C,k)}return!1}function f(A,h){let s="[] {} ()",E=s.indexOf(A),m=s.indexOf(h);return E!==-1&&m!==-1&&Math.abs(E-m)<=1?"|":!1}function R(A,h){let s="/\\ \\/ ><",E={0:"|",3:"Y",6:"X"},m=s.indexOf(A),C=s.indexOf(h);return m!==-1&&C!==-1&&C-m===1?E[m]:!1}function I(A,h,s){return A===s&&h===s?s:!1}function g(A,h){return A===h?A:!1}function S(A,h){let s="|/\\[]{}()<>";if(A==="_"){if(s.indexOf(h)!==-1)return h}else if(h==="_"&&s.indexOf(A)!==-1)return A;return!1}function c(A,h){let s="| /\\ [] {} () <>",E=s.indexOf(A),m=s.indexOf(h);if(E!==-1&&m!==-1&&E!==m&&Math.abs(E-m)!==1){const C=Math.max(E,m),k=C+1;return s.substring(C,k)}return!1}function u(A,h){return A==="-"&&h==="_"||A==="_"&&h==="-"?"=":!1}function d(A,h){return A==="|"&&h==="|"?"|":!1}function p(A,h,s){return h===" "||h===""||h===s&&A!==" "?A:h}function y(A,h,s){if(s.fittingRules.vLayout===0)return"invalid";let E,m=Math.min(A.length,h.length),C,k,O=!1,x;if(m===0)return"invalid";for(E=0;E<m;E++)if(C=A.substring(E,E+1),k=h.substring(E,E+1),C!==" "&&k!==" "){if(s.fittingRules.vLayout===1)return"invalid";if(s.fittingRules.vLayout===2)return"end";if(d(C,k)){O=O||!1;continue}if(x=!1,x=s.fittingRules.vRule1?g(C,k):x,x=!x&&s.fittingRules.vRule2?S(C,k):x,x=!x&&s.fittingRules.vRule3?c(C,k):x,x=!x&&s.fittingRules.vRule4?u(C,k):x,O=!0,!x)return"invalid"}return O?"end":"valid"}function M(A,h,s){let E=A.length,m=A.length;h.length;let C,k,O,x=1,D,Z,b;for(;x<=E;){for(C=A.slice(Math.max(0,m-x),m),k=h.slice(0,Math.min(E,x)),O=k.length,b="",D=0;D<O;D++)if(Z=y(C[D],k[D],s),Z==="end")b=Z;else if(Z==="invalid"){b=Z;break}else b===""&&(b="valid");if(b==="invalid"){x--;break}if(b==="end")break;b==="valid"&&x++}return Math.min(E,x)}function w(A,h,s){let E,m=Math.min(A.length,h.length),C,k,O="",x;for(E=0;E<m;E++)C=A.substring(E,E+1),k=h.substring(E,E+1),C!==" "&&k!==" "?s.fittingRules.vLayout===1||s.fittingRules.vLayout===2?O+=p(C,k):(x=!1,x=s.fittingRules.vRule5?d(C,k):x,x=!x&&s.fittingRules.vRule1?g(C,k):x,x=!x&&s.fittingRules.vRule2?S(C,k):x,x=!x&&s.fittingRules.vRule3?c(C,k):x,x=!x&&s.fittingRules.vRule4?u(C,k):x,O+=x):O+=p(C,k);return O}function H(A,h,s,E){let m=A.length,C=h.length,k=A.slice(0,Math.max(0,m-s)),O=A.slice(Math.max(0,m-s),m),x=h.slice(0,Math.min(s,C)),D,Z,b,X=[],Q,k_=[];for(Z=O.length,D=0;D<Z;D++)D>=C?b=O[D]:b=w(O[D],x[D],E),X.push(b);return Q=h.slice(Math.min(s,C),C),k_.concat(k,X,Q)}function Y(A,h){let s,E=A.length,m="";for(s=0;s<h;s++)m+=" ";for(s=0;s<E;s++)A[s]+=m}function F(A,h,s){let E=A[0].length,m=h[0].length,C;return E>m?Y(h,E-m):m>E&&Y(A,m-E),C=M(A,h,s),H(A,h,C,s)}function C_(A,h,s){if(s.fittingRules.hLayout===0)return 0;let E,m=A.length,C=h.length,k=m,O=1,x=!1,D=!1,Z,b,X,Q;if(m===0)return 0;_:for(;O<=k;){const k_=m-O;for(Z=A.substring(k_,k_+O),b=h.substring(0,Math.min(O,C)),E=0;E<Math.min(O,C);E++)if(X=Z.substring(E,E+1),Q=b.substring(E,E+1),X!==" "&&Q!==" "){if(s.fittingRules.hLayout===1){O=O-1;break _}else if(s.fittingRules.hLayout===2){(X===s.hardBlank||Q===s.hardBlank)&&(O=O-1);break _}else if(x=!0,D=!1,D=s.fittingRules.hRule1?a(X,Q,s.hardBlank):D,D=!D&&s.fittingRules.hRule2?L(X,Q,s.hardBlank):D,D=!D&&s.fittingRules.hRule3?T(X,Q,s.hardBlank):D,D=!D&&s.fittingRules.hRule4?f(X,Q,s.hardBlank):D,D=!D&&s.fittingRules.hRule5?R(X,Q,s.hardBlank):D,D=!D&&s.fittingRules.hRule6?I(X,Q,s.hardBlank):D,!D){O=O-1;break _}}if(x)break;O++}return Math.min(k,O)}function b_(A,h,s,E){let m,C,k=[],O,x,D,Z,b,X,Q,k_;for(m=0;m<E.height;m++){Q=A[m],k_=h[m],b=Q.length,X=k_.length,O=b-s,x=Q.substr(0,Math.max(0,O)),D="";const Ro=Math.max(0,b-s);var it=Q.substring(Ro,Ro+s),kn=k_.substring(0,Math.min(s,X));for(C=0;C<s;C++){var i_=C<b?it.substring(C,C+1):" ",E_=C<X?kn.substring(C,C+1):" ";if(i_!==" "&&E_!==" ")if(E.fittingRules.hLayout===1)D+=p(i_,E_,E.hardBlank);else if(E.fittingRules.hLayout===2)D+=p(i_,E_,E.hardBlank);else{var q="";q=!q&&E.fittingRules.hRule1?a(i_,E_,E.hardBlank):q,q=!q&&E.fittingRules.hRule2?L(i_,E_,E.hardBlank):q,q=!q&&E.fittingRules.hRule3?T(i_,E_,E.hardBlank):q,q=!q&&E.fittingRules.hRule4?f(i_,E_,E.hardBlank):q,q=!q&&E.fittingRules.hRule5?R(i_,E_,E.hardBlank):q,q=!q&&E.fittingRules.hRule6?I(i_,E_,E.hardBlank):q,q=q||p(i_,E_,E.hardBlank),D+=q}else D+=p(i_,E_,E.hardBlank)}s>=X?Z="":Z=k_.substring(s,s+Math.max(0,X-s)),k[m]=x+D+Z}return k}function Q_(A){let h=[],s;for(s=0;s<A;s++)h[s]="";return h}const he=function(A){return Math.max.apply(Math,A.map(function(h,s){return h.length}))};function pe(A,h,s){return A.reduce(function(E,m){return b_(E,m.fig,m.overlap,s)},Q_(h))}function Ft(A,h,s){const E={};for(let m=A.length;--m;){let C=pe(A.slice(0,m),h,s);if(he(C)<=s.width){E.outputFigText=C,m<A.length?E.chars=A.slice(m):E.chars=[];break}}return E}function Gt(A,h,s){let E,m,C=0,k,O,x,D=s.height,Z=[],b,X,Q=[],k_,it,kn,i_,E_;for(O=Q_(D),s.width>0&&s.whitespaceBreak&&(X={chars:[],overlap:C}),s.printDirection===1&&(A=A.split("").reverse().join("")),x=A.length,E=0;E<x;E++)if(k_=A.substring(E,E+1),it=k_.match(/\s/),m=h[k_.charCodeAt(0)],i_=null,m){if(s.fittingRules.hLayout!==0){for(C=1e4,k=0;k<s.height;k++)C=Math.min(C,C_(O[k],m[k],s));C=C===1e4?0:C}if(s.width>0&&(s.whitespaceBreak?(kn=pe(X.chars.concat([{fig:m,overlap:C}]),D,s),i_=pe(Q.concat([{fig:kn,overlap:X.overlap}]),D,s),b=he(i_)):(i_=b_(O,m,C,s),b=he(i_)),b>=s.width&&E>0&&(s.whitespaceBreak?(O=pe(Q.slice(0,-1),D,s),Q.length>1&&(Z.push(O),O=Q_(D)),Q=[]):(Z.push(O),O=Q_(D)))),s.width>0&&s.whitespaceBreak&&((!it||E===x-1)&&X.chars.push({fig:m,overlap:C}),it||E===x-1)){for(E_=null;i_=pe(X.chars,D,s),b=he(i_),b>=s.width;)E_=Ft(X.chars,D,s),X={chars:E_.chars},Z.push(E_.outputFigText);b>0&&(E_?Q.push({fig:i_,overlap:1}):Q.push({fig:i_,overlap:X.overlap})),it&&(Q.push({fig:m,overlap:C}),O=Q_(D)),E===x-1&&(O=pe(Q,D,s)),X={chars:[],overlap:C};continue}O=b_(O,m,C,s)}return he(O)>0&&Z.push(O),s.showHardBlanks!==!0&&Z.forEach(function(q){for(x=q.length,k=0;k<x;k++)q[k]=q[k].replace(new RegExp("\\"+s.hardBlank,"g")," ")}),Z}const W=function(A,h){let s=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],E={},m;if(A==="default")for(m=0;m<s.length;m++)E[s[m]]=h.fittingRules[s[m]];else if(A==="full")E={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(A==="fitted")E={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(A==="controlled smushing")E={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(A==="universal smushing")E={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return E},G=function(A,h){let s=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],E={},m;if(A==="default")for(m=0;m<s.length;m++)E[s[m]]=h.fittingRules[s[m]];else if(A==="full")E={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(A==="fitted")E={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(A==="controlled smushing")E={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(A==="universal smushing")E={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return E},j=function(A,h,s){s=s.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let E=s.split(`
`),m=[],C,k,O;for(k=E.length,C=0;C<k;C++)m=m.concat(Gt(E[C],l[A],h));for(k=m.length,O=m[0],C=1;C<k;C++)O=F(O,m[C],h);return O?O.join(`
`):""};function t_(A,h){let s=JSON.parse(JSON.stringify(A)),E,m;if(typeof h.horizontalLayout<"u"){E=W(h.horizontalLayout,A);for(m in E)E.hasOwnProperty(m)&&(s.fittingRules[m]=E[m])}if(typeof h.verticalLayout<"u"){E=G(h.verticalLayout,A);for(m in E)E.hasOwnProperty(m)&&(s.fittingRules[m]=E[m])}return s.printDirection=typeof h.printDirection<"u"?h.printDirection:A.printDirection,s.showHardBlanks=h.showHardBlanks||!1,s.width=h.width||-1,s.whitespaceBreak=h.whitespaceBreak||!1,s}const V=function(A,h,s){return V.text(A,h,s)};return V.text=async function(A,h,s){let E="";return A=A+"",typeof arguments[1]=="function"&&(s=h,h={},h.font=o.font),typeof h=="string"?(E=h,h={}):(h=h||{},E=h.font||o.font),await new Promise((m,C)=>{V.loadFont(E,function(k,O){if(k){C(k),s&&s(k);return}const x=j(E,t_(O,h),A);m(x),s&&s(null,x)})})},V.textSync=function(A,h){let s="";A=A+"",typeof h=="string"?(s=h,h={}):(h=h||{},s=h.font||o.font);var E=t_(V.loadFontSync(s),h);return j(s,E,A)},V.metadata=function(A,h){A=A+"",V.loadFont(A,function(s,E){if(s){h(s);return}h(null,E,l[A].comment)})},V.defaults=function(A){if(typeof A=="object"&&A!==null)for(var h in A)A.hasOwnProperty(h)&&(o[h]=A[h]);return JSON.parse(JSON.stringify(o))},V.parseFont=function(A,h){h=h.replace(/\r\n/g,`
`).replace(/\r/g,`
`),l[A]={};var s=h.split(`
`),E=s.splice(0,1)[0].split(" "),m=l[A],C={};if(C.hardBlank=E[0].substr(5,1),C.height=parseInt(E[1],10),C.baseline=parseInt(E[2],10),C.maxLength=parseInt(E[3],10),C.oldLayout=parseInt(E[4],10),C.numCommentLines=parseInt(E[5],10),C.printDirection=E.length>=6?parseInt(E[6],10):0,C.fullLayout=E.length>=7?parseInt(E[7],10):null,C.codeTagCount=E.length>=8?parseInt(E[8],10):null,C.fittingRules=i(C.oldLayout,C.fullLayout),m.options=C,C.hardBlank.length!==1||isNaN(C.height)||isNaN(C.baseline)||isNaN(C.maxLength)||isNaN(C.oldLayout)||isNaN(C.numCommentLines))throw new Error("FIGlet header contains invalid values.");let k=[],O;for(O=32;O<=126;O++)k.push(O);if(k=k.concat(196,214,220,228,246,252,223),s.length<C.numCommentLines+C.height*k.length)throw new Error("FIGlet file is missing data.");let x,D,Z=!1;for(m.comment=s.splice(0,C.numCommentLines).join(`
`),m.numChars=0;s.length>0&&m.numChars<k.length;){for(x=k[m.numChars],m[x]=s.splice(0,C.height),O=0;O<C.height;O++)typeof m[x][O]>"u"?m[x][O]="":(D=new RegExp("\\"+m[x][O].substr(m[x][O].length-1,1)+"+$"),m[x][O]=m[x][O].replace(D,""));m.numChars++}for(;s.length>0;){if(x=s.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(x))x=parseInt(x,16);else if(/^0[0-7]+$/.test(x))x=parseInt(x,8);else if(/^[0-9]+$/.test(x))x=parseInt(x,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(x))x=parseInt(x,16);else{if(x==="")break;console.log("Invalid data:"+x),Z=!0;break}for(m[x]=s.splice(0,C.height),O=0;O<C.height;O++)typeof m[x][O]>"u"?m[x][O]="":(D=new RegExp("\\"+m[x][O].substr(m[x][O].length-1,1)+"+$"),m[x][O]=m[x][O].replace(D,""));m.numChars++}if(Z===!0)throw new Error("Error parsing data.");return C},V.loadFont=function(A,h){if(l[A]){h(null,l[A].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(o.fontPath+"/"+A+".flf").then(function(s){if(s.ok)return s.text();throw console.log("Unexpected response",s),new Error("Network response was not ok.")}).then(function(s){h(null,V.parseFont(A,s))}).catch(h)},V.loadFontSync=function(A){if(l[A])return l[A].options;throw new Error("synchronous font loading is not implemented for the browser")},V.preloadFonts=function(A,h){let s=[];A.reduce(function(E,m){return E.then(function(){return fetch(o.fontPath+"/"+m+".flf").then(C=>C.text()).then(function(C){s.push(C)})})},Promise.resolve()).then(function(E){for(var m in A)A.hasOwnProperty(m)&&V.parseFont(A[m],s[m]);h&&h()})},V.figFonts=l,V})();_.exports=e})(ds);var ed=ds.exports;const Gi=Vi(ed),td=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,nd=`flf2a$ 9 8 15 0 20 0 16255 0
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
 \`-----'  ##`,$d=`flf2a$ 10 10 27 63 7 0 191 0
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
@@`,rd=`flf2a$ 6 5 10 16 16
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
`,ld=`flf2a$ 8 6 59 15 10 0 24463
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
`,od=`flf2a$ 4 4 99 0 20
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
`,id=`flf2a 6 6 10 63 14 0 8127 0
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
`,ad=`flf2a$ 8 6 14 15 16
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
`,ud=`flf2a$ 9 8 13 16 16
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
`,sd=`flf2a$ 4 4 8 0 14 0 8256
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
`,cd=`flf2a$ 6 5 32 15 10
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
        @@`,fd=`flf2a$ 8 7 16 0 24 0 64 0
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
 ##`,Td=`flf2a$ 7 7 11 -1 16 0 0 0
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

`,dd=`flf2a$ 6 5 20 15 13
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
`,Ld=`flf2a$ 6 5 15 1 1
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
`,Ed=`flf2a$ 6 5 16 15 10 0 18319
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
`,Id=`flf2a$ 7 7 15 0 19 0 24447 0
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
        ##`,Ad=`flf2a$ 6 5 17 -1 16

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
`,hd=`flf2a$ 6 6 12 63 13 0 24511 0
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
`,pd=`flf2a$ 8 7 15 0 12 0 16255 0
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
 ##`,md=`flf2a$ 7 7 18 0 11 0 24447 0
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
 ##`,Rd=`flf2a$ 10 5 10 0 3 0


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
@@`,gd=`flf2a$ 9 9 15 0 11 0 16448 0
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
 ##`,vd=`flf2a$ 6 5 15 -1 23
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
`,Cd=`flf2a$ 8 7 18 4 25
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
`,Sd=`flf2a$ 8 4 14 0 25 0 16256
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
`,yd=`flf2a 3 2 6 1 11 0 16513
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
`,Nd=`flf2a$ 7 5 12 0 7
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
`,xd=`flf2a$ 7 6 13 -1 16 0 7999 0
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
 ##`,Pd=`flf2a$ 4 4 7 -1 32 0 0 0
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
 ##`,Od=`flf2a$ 6 6 30 0 22
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
`,wd=`flf2a$ 9 8 14 -1 16
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
`,Md=`flf2a$ 9 7 13 15 30
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

`,Hd=`flf2a$ 10 7 23 0 7
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
`,kd=`flf2a$ 6 4 20 0 2
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
`,Wd=`flf2a$ 4 3 10 0 3
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
`,Ud=`flf2a$ 6 5 76 15 14 1 16271
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
`,Dd=`flf2a$ 8 7 19 -1 20

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
`,Fd=`flf2a$ 10 10 12 -1 9

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
`,Gd=`flf2a$ 7 6 100 15 31 1
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
`,jd=`flf2a$ 9 7 20 1 13
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
`,Bd=`flf2a$ 9 8 18 0 24 0 64 0
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
 ##`,Vd=`flf2a$ 6 5 20 15 18 1
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
`,Yd=`flf2a$ 9 6 15 1 4
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
`,zd=`flf2a$ 12 10 20 -1 14
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
`,Kd=`flf2a$ 8 6 14 1 3
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
`,Xd=`flf2a$ 5 5 12 0 11 0 0 0
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
`,bd=`flf2a$ 7 6 20 15 2
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
`,Qd=`flf2a$ 4 4 20 1 2
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
`,Jd=`flf2a$ 5 4 16 0 14 0 4992
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
`,Zd=`flf2a$ 6 5 16 15 16
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
`,qd=`flf2a$ 4 4 10 63 13 0 24511 0
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

`,_L=`flf2a$ 7 6 20 15 3
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
`,eL=`flf2a$ 4 3 10 0 6 
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








`,tL=()=>{const _=[{name:"Standard",module:td},{name:"Ghost",module:nd},{name:"3D-ASCII",module:$d},{name:"Avatar",module:rd},{name:"Big",module:ld},{name:"Bulbhead",module:od},{name:"Cards",module:id},{name:"Doom",module:ad},{name:"Epic",module:ud},{name:"Graceful",module:sd},{name:"Graffiti",module:cd},{name:"Merlin1",module:fd},{name:"Modular",module:Td},{name:"Ogre",module:dd},{name:"Rectangles",module:Ld},{name:"Slant",module:Ed},{name:"Soft",module:Id},{name:"Sub_Zero",module:Ad},{name:"Train",module:hd},{name:"Twisted",module:pd},{name:"Varsity",module:md},{name:"Bloody",module:Rd},{name:"Bear",module:gd},{name:"Bell",module:vd},{name:"Crawford",module:Cd},{name:"Cricket",module:Sd},{name:"Digital",module:yd},{name:"Fuzzy",module:Nd},{name:"Ghoulish",module:xd},{name:"Glenyn",module:Pd},{name:"Goofy",module:Od},{name:"Gothic",module:wd},{name:"Greek",module:Md},{name:"Hollywood",module:Hd},{name:"Invita",module:kd},{name:"Italic",module:Wd},{name:"Ivrit",module:Ud},{name:"Jacky",module:Dd},{name:"Jazmine",module:Fd},{name:"Jerusalem",module:Gd},{name:"Keyboard",module:jd},{name:"Merlin2",module:Bd},{name:"Mirror",module:Vd},{name:"Pawp",module:Yd},{name:"Poison",module:zd},{name:"Puffy",module:Kd},{name:"Puzzle",module:Xd},{name:"Rounded",module:bd},{name:"Serifcap",module:Qd},{name:"Shadow",module:Jd},{name:"Speed",module:Zd},{name:"Stforek",module:qd},{name:"Stop",module:_L},{name:"Wavy",module:eL}],e=()=>{_.forEach(async t=>{try{Gi.parseFont(t.name,t.module)}catch(n){console.error(`Error cargando la fuente ${t.name}:`,n)}})};return P.useEffect(()=>{e()},[]),{fonts:_,figlet:Gi}},nL=()=>{const[_,e]=P.useState(""),[t,n]=P.useState("Hola mundo"),[$,r]=P.useState("Standard"),{fonts:l,figlet:o}=tL(),i=(f,R)=>{o.text(f.trim(),{font:R,horizontalLayout:"controlled smushing",verticalLayout:"controlled smushing",width:t.length*120,whitespaceBreak:!0},function(I,g){e(g)})},a=f=>{if(f.preventDefault(),!t.trim()){alert("El texto es obligatorio.");return}i(t.trim(),$.trim())},L=()=>{e(""),n(""),i("",$.trim()),alert("Arte limpiado.")},T=f=>{f.key==="Enter"&&(f.preventDefault(),i(t,$.trim()))};return P.useEffect(()=>{i(t,$)},[$]),v.jsxs("div",{className:"flex flex-col gap-10 md:items-center",children:[v.jsx("div",{className:"border-2 rounded-md p-4 bg-white shadow-sm lg:w-min",children:v.jsxs("div",{className:"flex flex-col justify-between gap-8 md:flex-row",children:[v.jsxs("form",{onSubmit:a,children:[v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{htmlFor:"text",className:"block  font-bold text-lg my-2",children:"Texto a Arte ASCII"}),v.jsx("textarea",{type:"text",required:!0,id:"text",name:"text",value:t,onChange:f=>n(f.target.value),onKeyDown:T,placeholder:"Ingrese un texto...",className:"block text-black px-2 py-2 border-2 rounded-md w-full h-[120px] resize-none md:w-[400px]"}),v.jsx("small",{className:" block",children:"Ingrese un texto para convertirlo a Art ASCII"}),v.jsx("small",{className:" block",children:"Presione Enter como atajo de teclado."})]}),v.jsx("div",{className:"mt-6",children:v.jsxs("div",{className:"flex justify-between",children:[v.jsx("button",{className:"bg-slate-800 py-2 px-4 rounded-md text-white",children:"Generar"}),v.jsx("button",{type:"button",onClick:L,className:"bg-slate-800 py-2 px-4 rounded-md text-white",children:"Limpiar"})]})})]}),v.jsxs("div",{className:"mb-4",children:[v.jsxs("label",{htmlFor:"font",className:"block  font-bold text-lg my-2",children:[l.length," Fuente (",$,")"]}),v.jsx("select",{name:"font",id:"font",value:$,onChange:f=>{r(f.target.value)},size:l.length,className:"block w-full h-[100px] px-2 py-2 border-2 rounded-md lg:h-[220px] lg:md:w-[220px]",children:l.map(f=>v.jsx("option",{value:f.name,children:f.name},f.name))}),v.jsx("small",{className:" block",children:"Seleccione un tipo de fuente para el Arte ASCII."})]})]})}),v.jsx("div",{className:"mb-8 w-full ",children:v.jsx("pre",{className:"bg-gray-100 border overflow-auto rounded-md p-4 text-center h-[340px]",children:_||"Ingrese un texto..."})})]})},$L=()=>{const _=Hn(),e=t=>_.pathname===t?"after:w-full":"";return v.jsx("nav",{children:v.jsxs("div",{className:"flex flex-col gap-x-4 items-center bg-slate-800 text-white sm:p-0 sm:rounded-lg sm:flex-row",children:[v.jsx(ut,{to:A_.Root,className:"rounded-l-lg py-4 px-4 sm:bg-gradient-to-b sm:from-red-500 sm:to-red-400",children:v.jsx("h3",{className:"text-3xl",children:"Text2ArtJS"})}),v.jsx("div",{className:"text-center",children:v.jsxs("ul",{className:`flex flex-row items-center gap-x-1 transition-all duration-500 sm:flex-row sm:p-0
                    max-h-full max-w-[300px] overflow-x-auto whitespace-nowrap opacity-100
                    sm:max-w-full
                    `,children:[v.jsx(ut,{to:A_.Root,className:`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${e(A_.Root)}`,children:v.jsx("i",{children:"Inicio"})}),v.jsx(ut,{to:A_.FromText,className:`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${e(A_.FromText)}`,children:v.jsx("i",{children:"Desde Texto"})}),v.jsx(ut,{to:A_.FromImage,className:`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${e(A_.FromImage)}`,children:v.jsx("i",{children:"Desde Imagen"})}),v.jsx(ut,{to:A_.FromGIF,className:`py-4 px-2 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 ${e(A_.FromGIF)}`,children:v.jsx("i",{children:"Desde GIF"})})]})})]})})},rL=()=>v.jsxs("div",{className:"flex flex-col min-h-screen",children:[v.jsx("header",{className:"container mx-auto mb-8 sm:mt-1 sm:mb-8",children:v.jsx($L,{})}),v.jsx("main",{className:"flex-grow lg:m-8",children:v.jsx(FT,{})}),v.jsx("footer",{children:v.jsx("p",{className:"text-center py-4 bg-slate-800 text-white",children:"Created by: Víctor J."})})]}),ji=["@","#","S","%","?","*","+",";",":",",","."],lL=()=>{const[_,e]=P.useState(""),[t,n]=P.useState(!1),$=P.useRef(null);return{asciiArt:_,loading:t,handleImageUpload:o=>{n(!0);const i=new Image;i.crossOrigin="Anonymous",i.src=o,i.onload=()=>{const a=$.current;if(!a)return;const L=a.getContext("2d");if(!L)return;const T=640,f=i.width>T?T:i.width,R=i.height/i.width*f;a.width=f,a.height=R,L.drawImage(i,0,0,f,R);try{const g=L.getImageData(0,0,f,R).data;let S="";for(let c=0;c<g.length;c+=4){const u=g[c],d=g[c+1],p=g[c+2],y=(u+d+p)/3,M=Math.floor(y/255*(ji.length-1));S+=ji[M],(c/4+1)%f===0&&(S+=`
`)}e(S),n(!1)}catch(I){console.error("Error al obtener la imagen:",I)}finally{n(!1)}},i.onerror=()=>{console.error("Error al cargar la imagen."),n(!1)}},Canvas:()=>v.jsx("canvas",{ref:$,style:{display:"none"}})}},oL=()=>{const[_,e]=P.useState(1),[t,n]=P.useState(1),[$,r]=P.useState(null),[l,o]=P.useState(""),{asciiArt:i,loading:a,handleImageUpload:L,Canvas:T}=lL(),f=I=>{const g=I.target.files[0];if(g){const S=URL.createObjectURL(g);e(1),n(1),r(S),L(S)}},R=()=>{l&&(e(1),n(1),r(l),L(l))};return v.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[v.jsx("h1",{className:"text-3xl font-bold text-center mb-6",children:"Convert Image to ASCII Art"}),v.jsxs("div",{className:"flex flex-col bg-white p-6 mb-4",children:[v.jsxs("div",{className:"flex gap-x-8 mb-1",children:[v.jsx("div",{className:"bg-white w-full ",children:$?v.jsx("div",{className:"my-4",children:v.jsx("img",{src:$,alt:"Preview",className:"max-w-full h-auto rounded-md lg:w-full lg:h-[200px]"})}):v.jsx("div",{className:"my-4",children:v.jsx("div",{className:"max-w-full h-[120px] rounded-md bg-slate-200 border-2 sm:h-[200px] lg:w-full"})})}),v.jsxs("div",{className:"bg-white w-full ",children:[v.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Ajustes de Tamaño"}),v.jsxs("div",{className:"mb-4",children:[v.jsxs("label",{className:"block",children:["Anchura: ",_]}),v.jsx("input",{type:"range",min:.1,step:.1,max:5,value:_,onChange:I=>e(I.target.value),className:"w-full"})]}),v.jsxs("div",{children:[v.jsxs("label",{className:"block",children:["Altura: ",t]}),v.jsx("input",{type:"range",min:.1,step:.1,max:5,value:t,onChange:I=>n(I.target.value),className:"w-full"})]}),v.jsx("small",{className:"block mt-4 text-[12px] text-neutral-400",children:"El tamaño generador a Arte ASCII es proporcional al tamaño de la imagen original"})]})]}),v.jsx("input",{type:"file",accept:"image/*",onChange:f,className:"mb-2 w-full text-center border border-gray-300 rounded-md p-2"}),v.jsx("input",{type:"text",value:l,onChange:I=>o(I.target.value),placeholder:"Ingresa una URL de imagen",className:"mb-2 w-full text-center border border-gray-300 rounded-md p-2"}),v.jsx("button",{onClick:R,className:"bg-slate-800 hover:bg-slate-700 text-white rounded-md py-2 px-4 transition duration-200 w-full",children:"Convertir desde URL"})]}),v.jsx(T,{}),v.jsx("div",{className:"bg-gray-100 border overflow-auto rounded-md p-4 h-[560px]",children:v.jsx("div",{style:{fontFamily:"monospace",fontSize:`${_}px`,lineHeight:`${t}px`},children:a?v.jsx("p",{className:"text-center text-lg",children:"Cargando..."}):v.jsx("pre",{className:"whitespace-pre-wrap text-black",children:i||v.jsx("small",{className:"text-gray-600 text-center text-lg",children:"Sube una imagen o ingresa una URL..."})})})}),i&&v.jsx("div",{className:"text-center mt-4",children:v.jsx("button",{onClick:()=>{const I=new Blob([i],{type:"text/plain"}),g=URL.createObjectURL(I),S=document.createElement("a");S.href=g,S.download="ascii-art.txt",S.click(),URL.revokeObjectURL(g)},className:"bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-200",children:"Descargar ASCII Art"})})]})};var qe={},Ls={},Te={};Object.defineProperty(Te,"__esModule",{value:!0});Te.loop=Te.conditional=Te.parse=void 0;var iL=function _(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},$=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;if(Array.isArray(t))t.forEach(function(l){return _(e,l,n,$)});else if(typeof t=="function")t(e,n,$,_);else{var r=Object.keys(t)[0];Array.isArray(t[r])?($[r]={},_(e,t[r],n,$[r])):$[r]=t[r](e,n,$,_)}return n};Te.parse=iL;var aL=function(e,t){return function(n,$,r,l){t(n,$,r)&&l(n,e,$,r)}};Te.conditional=aL;var uL=function(e,t){return function(n,$,r,l){for(var o=[],i=n.pos;t(n,$,r);){var a={};if(l(n,e,$,a),n.pos===i)break;i=n.pos,o.push(a)}return o}};Te.loop=uL;var a_={};Object.defineProperty(a_,"__esModule",{value:!0});a_.readBits=a_.readArray=a_.readUnsigned=a_.readString=a_.peekBytes=a_.readBytes=a_.peekByte=a_.readByte=a_.buildStream=void 0;var sL=function(e){return{data:e,pos:0}};a_.buildStream=sL;var Es=function(){return function(e){return e.data[e.pos++]}};a_.readByte=Es;var cL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(t){return t.data[t.pos+e]}};a_.peekByte=cL;var er=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};a_.readBytes=er;var fL=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}};a_.peekBytes=fL;var TL=function(e){return function(t){return Array.from(er(e)(t)).map(function(n){return String.fromCharCode(n)}).join("")}};a_.readString=TL;var dL=function(e){return function(t){var n=er(2)(t);return e?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};a_.readUnsigned=dL;var LL=function(e,t){return function(n,$,r){for(var l=typeof t=="function"?t(n,$,r):t,o=er(e),i=new Array(l),a=0;a<l;a++)i[a]=o(n);return i}};a_.readArray=LL;var EL=function(e,t,n){for(var $=0,r=0;r<n;r++)$+=e[t+r]&&Math.pow(2,n-r-1);return $},IL=function(e){return function(t){for(var n=Es()(t),$=new Array(8),r=0;r<8;r++)$[7-r]=!!(n&1<<r);return Object.keys(e).reduce(function(l,o){var i=e[o];return i.length?l[o]=EL($,i.index,i.length):l[o]=$[i.index],l},{})}};a_.readBits=IL;(function(_){Object.defineProperty(_,"__esModule",{value:!0}),_.default=void 0;var e=Te,t=a_,n={blocks:function(f){for(var R=0,I=[],g=f.data.length,S=0,c=(0,t.readByte)()(f);c!==R&&c;c=(0,t.readByte)()(f)){if(f.pos+c>=g){var u=g-f.pos;I.push((0,t.readBytes)(u)(f)),S+=u;break}I.push((0,t.readBytes)(c)(f)),S+=c}for(var d=new Uint8Array(S),p=0,y=0;y<I.length;y++)d.set(I[y],p),p+=I[y].length;return d}},$=(0,e.conditional)({gce:[{codes:(0,t.readBytes)(2)},{byteSize:(0,t.readByte)()},{extras:(0,t.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,t.readUnsigned)(!0)},{transparentColorIndex:(0,t.readByte)()},{terminator:(0,t.readByte)()}]},function(T){var f=(0,t.peekBytes)(2)(T);return f[0]===33&&f[1]===249}),r=(0,e.conditional)({image:[{code:(0,t.readByte)()},{descriptor:[{left:(0,t.readUnsigned)(!0)},{top:(0,t.readUnsigned)(!0)},{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{lct:(0,t.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,t.readArray)(3,function(T,f,R){return Math.pow(2,R.descriptor.lct.size+1)})},function(T,f,R){return R.descriptor.lct.exists}),{data:[{minCodeSize:(0,t.readByte)()},n]}]},function(T){return(0,t.peekByte)()(T)===44}),l=(0,e.conditional)({text:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{preData:function(f,R,I){return(0,t.readBytes)(I.text.blockSize)(f)}},n]},function(T){var f=(0,t.peekBytes)(2)(T);return f[0]===33&&f[1]===1}),o=(0,e.conditional)({application:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{id:function(f,R,I){return(0,t.readString)(I.blockSize)(f)}},n]},function(T){var f=(0,t.peekBytes)(2)(T);return f[0]===33&&f[1]===255}),i=(0,e.conditional)({comment:[{codes:(0,t.readBytes)(2)},n]},function(T){var f=(0,t.peekBytes)(2)(T);return f[0]===33&&f[1]===254}),a=[{header:[{signature:(0,t.readString)(3)},{version:(0,t.readString)(3)}]},{lsd:[{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{gct:(0,t.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,t.readByte)()},{pixelAspectRatio:(0,t.readByte)()}]},(0,e.conditional)({gct:(0,t.readArray)(3,function(T,f){return Math.pow(2,f.lsd.gct.size+1)})},function(T,f){return f.lsd.gct.exists}),{frames:(0,e.loop)([$,o,i,r,l],function(T){var f=(0,t.peekByte)()(T);return f===33||f===44})}],L=a;_.default=L})(Ls);var tr={};Object.defineProperty(tr,"__esModule",{value:!0});tr.deinterlace=void 0;var AL=function(e,t){for(var n=new Array(e.length),$=e.length/t,r=function(f,R){var I=e.slice(R*t,(R+1)*t);n.splice.apply(n,[f*t,t].concat(I))},l=[0,4,2,1],o=[8,8,4,2],i=0,a=0;a<4;a++)for(var L=l[a];L<$;L+=o[a])r(L,i),i++;return n};tr.deinterlace=AL;var nr={};Object.defineProperty(nr,"__esModule",{value:!0});nr.lzw=void 0;var hL=function(e,t,n){var $=4096,r=-1,l=n,o,i,a,L,T,f,R,M,I,g,y,S,w,H,F,Y,c=new Array(n),u=new Array($),d=new Array($),p=new Array($+1);for(S=e,i=1<<S,T=i+1,o=i+2,R=r,L=S+1,a=(1<<L)-1,I=0;I<i;I++)u[I]=0,d[I]=I;var y,M,w,H,Y,F;for(y=M=w=H=Y=F=0,g=0;g<l;){if(H===0){if(M<L){y+=t[F]<<M,M+=8,F++;continue}if(I=y&a,y>>=L,M-=L,I>o||I==T)break;if(I==i){L=S+1,a=(1<<L)-1,o=i+2,R=r;continue}if(R==r){p[H++]=d[I],R=I,w=I;continue}for(f=I,I==o&&(p[H++]=w,I=R);I>i;)p[H++]=d[I],I=u[I];w=d[I]&255,p[H++]=w,o<$&&(u[o]=R,d[o]=w,o++,!(o&a)&&o<$&&(L++,a+=o)),R=f}H--,c[Y++]=p[H],g++}for(g=Y;g<l;g++)c[g]=0;return c};nr.lzw=hL;Object.defineProperty(qe,"__esModule",{value:!0});var Is=qe.decompressFrames=qe.decompressFrame=As=qe.parseGIF=void 0,pL=CL(Ls),mL=Te,RL=a_,gL=tr,vL=nr;function CL(_){return _&&_.__esModule?_:{default:_}}var SL=function(e){var t=new Uint8Array(e);return(0,mL.parse)((0,RL.buildStream)(t),pL.default)},As=qe.parseGIF=SL,yL=function(e){for(var t=e.pixels.length,n=new Uint8ClampedArray(t*4),$=0;$<t;$++){var r=$*4,l=e.pixels[$],o=e.colorTable[l]||[0,0,0];n[r]=o[0],n[r+1]=o[1],n[r+2]=o[2],n[r+3]=l!==e.transparentIndex?255:0}return n},hs=function(e,t,n){if(!e.image){console.warn("gif frame does not have associated image.");return}var $=e.image,r=$.descriptor.width*$.descriptor.height,l=(0,vL.lzw)($.data.minCodeSize,$.data.blocks,r);$.descriptor.lct.interlaced&&(l=(0,gL.deinterlace)(l,$.descriptor.width));var o={pixels:l,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return $.descriptor.lct&&$.descriptor.lct.exists?o.colorTable=$.lct:o.colorTable=t,e.gce&&(o.delay=(e.gce.delay||10)*10,o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),n&&(o.patch=yL(o)),o};qe.decompressFrame=hs;var NL=function(e,t){return e.frames.filter(function(n){return n.image}).map(function(n){return hs(n,e.gct,t)})};Is=qe.decompressFrames=NL;const Bi="@%#*+=-:. ",xL=()=>{const[_,e]=P.useState(null),[t,n]=P.useState(1),[$,r]=P.useState(1),[l,o]=P.useState(""),[i,a]=P.useState([]),[L,T]=P.useState(null),f=P.useRef(null),R=(S,c,u)=>{const{data:d}=S;let p="";for(let y=0;y<u;y+=4){for(let M=0;M<c;M+=2){const w=(y*c+M)*4,H=d[w],Y=d[w+1],F=d[w+2],C_=(H+Y+F)/3,b_=Bi[Math.floor(C_/255*(Bi.length-1))];p+=b_}p+=`
`}return p},I=async()=>{!L&&!l&&alert("Sube una imagen o ingresa una URL...");try{let S;if(L){const c=new FileReader;c.onload=async u=>{S=u.target.result,g(S)},c.readAsArrayBuffer(L)}else l&&(S=await(await fetch(l)).arrayBuffer(),g(S))}catch(S){console.error("Error extracting frames: ",S)}},g=S=>{const c=As(S),d=Is(c,!0).map(p=>{if(p.width<=0||p.height<=0)return console.warn("Frame has invalid dimensions:",p),null;const y=f.current,M=y.getContext("2d"),{width:w,height:H}=p.dims;console.log(`${w} X ${H}`),y.width=w,y.height=H;const Y=new ImageData(new Uint8ClampedArray(p.patch),w,H);return M.putImageData(Y,0,0),R(M.getImageData(0,0,w,H),w,H)}).filter(Boolean);a(d)};return v.jsxs("div",{className:"max-w-2xl mx-auto p-4",children:[v.jsx("h1",{className:"text-3xl font-bold text-center mb-6",children:"Extractor de Frames de GIF a ASCII"}),v.jsxs("div",{className:"flex flex-col bg-white p-6 mb-4",children:[v.jsxs("div",{className:"flex gap-x-8 mb-1",children:[v.jsxs("div",{className:"bg-white w-full ",children:[v.jsxs("h2",{className:"text-xl font-semibold mb-4",children:["Frames (",i.length,")"]}),_?v.jsx("div",{className:"my-4",children:v.jsx("img",{src:_,alt:"Preview",className:"max-w-full h-auto rounded-md lg:w-full lg:h-[200px]"})}):v.jsx("div",{className:"my-4",children:v.jsx("div",{className:"max-w-full h-[120px] rounded-md bg-slate-200 border-2 sm:h-[200px] lg:w-full"})})]}),v.jsxs("div",{className:"bg-white w-full ",children:[v.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Ajustes de Tamaño"}),v.jsxs("div",{className:"mb-4",children:[v.jsxs("label",{className:"block",children:["Anchura: ",t]}),v.jsx("input",{type:"range",min:.1,step:.1,max:5,value:t,onChange:S=>n(S.target.value),className:"w-full"})]}),v.jsxs("div",{children:[v.jsxs("label",{className:"block",children:["Altura: ",$]}),v.jsx("input",{type:"range",min:.1,step:.1,max:5,value:$,onChange:S=>r(S.target.value),className:"w-full"})]}),v.jsx("small",{className:"block mt-4 text-[12px] text-neutral-400",children:"El tamaño generador a Arte ASCII es proporcional al tamaño de la imagen original"})]})]}),v.jsx("input",{type:"file",accept:"image/gif",onChange:S=>{const c=S.target.files[0];if(c){const u=URL.createObjectURL(c);n(1),r(1),e(u),T(S.target.files[0]),o("")}},className:"mb-4 p-2 border border-gray-300 rounded"}),v.jsx("input",{type:"text",value:l,onChange:S=>{o(S.target.value),T(null)},placeholder:"Introduce la URL del GIF",className:"mb-4 p-2 border border-gray-300 rounded"}),v.jsx("button",{onClick:I,className:"bg-slate-800 hover:bg-slate-700 mb-4 px-4 py-2 text-white rounded",children:"Extraer frames"})]}),v.jsx("canvas",{ref:f,className:"hidden"}),v.jsx("div",{className:"grid grid-cols-1 gap-4",children:i.map((S,c)=>v.jsx("div",{style:{fontFamily:"monospace",fontSize:`${t}px`,lineHeight:`${$}px`},children:v.jsx("pre",{className:"whitespace-pre p-2 bg-gray-100 border rounded overflow-auto",children:S})},c))})]})},PL=()=>v.jsx(bT,{basename:A_.BaseName,children:v.jsx(jT,{children:v.jsxs(Ke,{path:A_.Root,element:v.jsx(rL,{}),children:[v.jsx(Ke,{path:A_.Root,element:v.jsx("h1",{children:"Página de root"})}),v.jsx(Ke,{path:A_.FromText,element:v.jsx(nL,{})}),v.jsx(Ke,{path:A_.FromImage,element:v.jsx(oL,{})}),v.jsx(Ke,{path:A_.FromGIF,element:v.jsx(xL,{})}),v.jsx(Ke,{path:A_.Error404,element:v.jsx(_d,{})})]})})}),OL=()=>v.jsx(PL,{});ns(document.getElementById("root")).render(v.jsx(P.StrictMode,{children:v.jsx(OL,{})}));
