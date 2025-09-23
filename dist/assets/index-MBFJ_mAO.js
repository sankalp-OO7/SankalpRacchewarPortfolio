const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Certificates-DobSw_C9.js","assets/calendar-DrxK5Yi2.js","assets/Experience-DvFMdqmy.js","assets/Experience-DvB2Xm2x.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function N_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bf={exports:{}},pa={},zf={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function PM(){if(c0)return _t;c0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,q,Oe){this.props=O,this.context=q,this.refs=E,this.updater=Oe||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(O,q,Oe){this.props=O,this.context=q,this.refs=E,this.updater=Oe||x}var P=D.prototype=new y;P.constructor=D,M(P,S.prototype),P.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function B(O,q,Oe){var Le,K={},pe=null,de=null;if(q!=null)for(Le in q.ref!==void 0&&(de=q.ref),q.key!==void 0&&(pe=""+q.key),q)N.call(q,Le)&&!F.hasOwnProperty(Le)&&(K[Le]=q[Le]);var Ce=arguments.length-2;if(Ce===1)K.children=Oe;else if(1<Ce){for(var Pe=Array(Ce),Ge=0;Ge<Ce;Ge++)Pe[Ge]=arguments[Ge+2];K.children=Pe}if(O&&O.defaultProps)for(Le in Ce=O.defaultProps,Ce)K[Le]===void 0&&(K[Le]=Ce[Le]);return{$$typeof:n,type:O,key:pe,ref:de,props:K,_owner:I.current}}function b(O,q){return{$$typeof:n,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function k(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Oe){return q[Oe]})}var re=/\/+/g;function te(O,q){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):q.toString(36)}function ne(O,q,Oe,Le,K){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var de=!1;if(O===null)de=!0;else switch(pe){case"string":case"number":de=!0;break;case"object":switch(O.$$typeof){case n:case e:de=!0}}if(de)return de=O,K=K(de),O=Le===""?"."+te(de,0):Le,A(K)?(Oe="",O!=null&&(Oe=O.replace(re,"$&/")+"/"),ne(K,q,Oe,"",function(Ge){return Ge})):K!=null&&(R(K)&&(K=b(K,Oe+(!K.key||de&&de.key===K.key?"":(""+K.key).replace(re,"$&/")+"/")+O)),q.push(K)),1;if(de=0,Le=Le===""?".":Le+":",A(O))for(var Ce=0;Ce<O.length;Ce++){pe=O[Ce];var Pe=Le+te(pe,Ce);de+=ne(pe,q,Oe,Pe,K)}else if(Pe=v(O),typeof Pe=="function")for(O=Pe.call(O),Ce=0;!(pe=O.next()).done;)pe=pe.value,Pe=Le+te(pe,Ce++),de+=ne(pe,q,Oe,Pe,K);else if(pe==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return de}function he(O,q,Oe){if(O==null)return O;var Le=[],K=0;return ne(O,Le,"","",function(pe){return q.call(Oe,pe,K++)}),Le}function le(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(Oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Oe)},function(Oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Oe)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var Y={current:null},V={transition:null},ce={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:V,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:he,forEach:function(O,q,Oe){he(O,function(){q.apply(this,arguments)},Oe)},count:function(O){var q=0;return he(O,function(){q++}),q},toArray:function(O){return he(O,function(q){return q})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=D,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,_t.act=se,_t.cloneElement=function(O,q,Oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Le=M({},O.props),K=O.key,pe=O.ref,de=O._owner;if(q!=null){if(q.ref!==void 0&&(pe=q.ref,de=I.current),q.key!==void 0&&(K=""+q.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(Pe in q)N.call(q,Pe)&&!F.hasOwnProperty(Pe)&&(Le[Pe]=q[Pe]===void 0&&Ce!==void 0?Ce[Pe]:q[Pe])}var Pe=arguments.length-2;if(Pe===1)Le.children=Oe;else if(1<Pe){Ce=Array(Pe);for(var Ge=0;Ge<Pe;Ge++)Ce[Ge]=arguments[Ge+2];Le.children=Ce}return{$$typeof:n,type:O.type,key:K,ref:pe,props:Le,_owner:de}},_t.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},_t.createElement=B,_t.createFactory=function(O){var q=B.bind(null,O);return q.type=O,q},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:u,render:O}},_t.isValidElement=R,_t.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:le}},_t.memo=function(O,q){return{$$typeof:d,type:O,compare:q===void 0?null:q}},_t.startTransition=function(O){var q=V.transition;V.transition={};try{O()}finally{V.transition=q}},_t.unstable_act=se,_t.useCallback=function(O,q){return Y.current.useCallback(O,q)},_t.useContext=function(O){return Y.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return Y.current.useDeferredValue(O)},_t.useEffect=function(O,q){return Y.current.useEffect(O,q)},_t.useId=function(){return Y.current.useId()},_t.useImperativeHandle=function(O,q,Oe){return Y.current.useImperativeHandle(O,q,Oe)},_t.useInsertionEffect=function(O,q){return Y.current.useInsertionEffect(O,q)},_t.useLayoutEffect=function(O,q){return Y.current.useLayoutEffect(O,q)},_t.useMemo=function(O,q){return Y.current.useMemo(O,q)},_t.useReducer=function(O,q,Oe){return Y.current.useReducer(O,q,Oe)},_t.useRef=function(O){return Y.current.useRef(O)},_t.useState=function(O){return Y.current.useState(O)},_t.useSyncExternalStore=function(O,q,Oe){return Y.current.useSyncExternalStore(O,q,Oe)},_t.useTransition=function(){return Y.current.useTransition()},_t.version="18.3.1",_t}var u0;function Yh(){return u0||(u0=1,zf.exports=PM()),zf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function DM(){if(f0)return pa;f0=1;var n=Yh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var p,g={},v=null,x=null;d!==void 0&&(v=""+d),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(x=h.ref);for(p in h)r.call(h,p)&&!l.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:v,ref:x,props:g,_owner:o.current}}return pa.Fragment=t,pa.jsx=c,pa.jsxs=c,pa}var d0;function LM(){return d0||(d0=1,Bf.exports=DM()),Bf.exports}var W=LM(),Ae=Yh();const IM=N_(Ae);var nc={},Vf={exports:{}},Vn={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function NM(){return h0||(h0=1,(function(n){function e(V,ce){var se=V.length;V.push(ce);e:for(;0<se;){var O=se-1>>>1,q=V[O];if(0<o(q,ce))V[O]=ce,V[se]=q,se=O;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ce=V[0],se=V.pop();if(se!==ce){V[0]=se;e:for(var O=0,q=V.length,Oe=q>>>1;O<Oe;){var Le=2*(O+1)-1,K=V[Le],pe=Le+1,de=V[pe];if(0>o(K,se))pe<q&&0>o(de,K)?(V[O]=de,V[pe]=se,O=pe):(V[O]=K,V[Le]=se,O=Le);else if(pe<q&&0>o(de,se))V[O]=de,V[pe]=se,O=pe;else break e}}return ce}function o(V,ce){var se=V.sortIndex-ce.sortIndex;return se!==0?se:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var h=[],d=[],p=1,g=null,v=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var ce=t(d);ce!==null;){if(ce.callback===null)r(d);else if(ce.startTime<=V)r(d),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(d)}}function A(V){if(E=!1,P(V),!M)if(t(h)!==null)M=!0,le(N);else{var ce=t(d);ce!==null&&Y(A,ce.startTime-V)}}function N(V,ce){M=!1,E&&(E=!1,y(B),B=-1),x=!0;var se=v;try{for(P(ce),g=t(h);g!==null&&(!(g.expirationTime>ce)||V&&!k());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var q=O(g.expirationTime<=ce);ce=n.unstable_now(),typeof q=="function"?g.callback=q:g===t(h)&&r(h),P(ce)}else r(h);g=t(h)}if(g!==null)var Oe=!0;else{var Le=t(d);Le!==null&&Y(A,Le.startTime-ce),Oe=!1}return Oe}finally{g=null,v=se,x=!1}}var I=!1,F=null,B=-1,b=5,R=-1;function k(){return!(n.unstable_now()-R<b)}function re(){if(F!==null){var V=n.unstable_now();R=V;var ce=!0;try{ce=F(!0,V)}finally{ce?te():(I=!1,F=null)}}else I=!1}var te;if(typeof D=="function")te=function(){D(re)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,he=ne.port2;ne.port1.onmessage=re,te=function(){he.postMessage(null)}}else te=function(){S(re,0)};function le(V){F=V,I||(I=!0,te())}function Y(V,ce){B=S(function(){V(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,le(N))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(V){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var se=v;v=ce;try{return V()}finally{v=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=v;v=V;try{return ce()}finally{v=se}},n.unstable_scheduleCallback=function(V,ce,se){var O=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,V){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=se+q,V={id:p++,callback:ce,priorityLevel:V,startTime:se,expirationTime:q,sortIndex:-1},se>O?(V.sortIndex=se,e(d,V),t(h)===null&&V===t(d)&&(E?(y(B),B=-1):E=!0,Y(A,se-O))):(V.sortIndex=q,e(h,V),M||x||(M=!0,le(N))),V},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(V){var ce=v;return function(){var se=v;v=ce;try{return V.apply(this,arguments)}finally{v=se}}}})(Gf)),Gf}var p0;function UM(){return p0||(p0=1,Hf.exports=NM()),Hf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function FM(){if(m0)return Vn;m0=1;var n=Yh(),e=UM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return h.call(g,i)?!0:h.call(p,i)?!1:d.test(i)?g[i]=!0:(p[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,a,f,m,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,a,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,m,f)&&(a=null),f||m===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):m.mustUseProperty?i[m.propertyName]=a===null?m.type===3?!1:"":a:(s=m.attributeName,f=m.attributeNamespace,a===null?i.removeAttribute(s):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,O;function q(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Oe=!1;function Le(i,s){if(!i||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ie){var f=ie}Reflect.construct(i,[],s)}else{try{s.call()}catch(ie){f=ie}i.call(s.prototype)}else{try{throw Error()}catch(ie){f=ie}i()}}catch(ie){if(ie&&f&&typeof ie.stack=="string"){for(var m=ie.stack.split(`
`),_=f.stack.split(`
`),T=m.length-1,U=_.length-1;1<=T&&0<=U&&m[T]!==_[U];)U--;for(;1<=T&&0<=U;T--,U--)if(m[T]!==_[U]){if(T!==1||U!==1)do if(T--,U--,0>U||m[T]!==_[U]){var H=`
`+m[T].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=T&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?q(i):""}function K(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Le(i.type,!1),i;case 11:return i=Le(i.type.render,!1),i;case 1:return i=Le(i.type,!0),i;default:return""}}function pe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case I:return"Portal";case b:return"Profiler";case B:return"StrictMode";case te:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case re:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case he:return s=i.displayName||null,s!==null?s:pe(i.type)||"Memo";case le:s=i._payload,i=i._init;try{return pe(i(s))}catch{}}return null}function de(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(s);case 8:return s===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Pe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ge(i){var s=Pe(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Et(i){i._valueTracker||(i._valueTracker=Ge(i))}function ht(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Pe(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function z(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function vt(i,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Je(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Ce(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function yt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function He(i,s){yt(i,s);var a=Ce(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Fe(i,s.type,a):s.hasOwnProperty("defaultValue")&&Fe(i,s.type,Ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Dt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Fe(i,s,a){(s!=="number"||z(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var at=Array.isArray;function It(i,s,a,f){if(i=i.options,s){s={};for(var m=0;m<a.length;m++)s["$"+a[m]]=!0;for(a=0;a<i.length;a++)m=s.hasOwnProperty("$"+i[a].value),i[a].selected!==m&&(i[a].selected=m),m&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Ce(a),s=null,m=0;m<i.length;m++){if(i[m].value===a){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function zt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Ce(a)}}function w(i,s){var a=Ce(s.value),f=Ce(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function J(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function fe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?fe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ue,je=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ue.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ee(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(i){Ye.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ve[s]=Ve[i]})});function xe(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ve.hasOwnProperty(i)&&Ve[i]?(""+s).trim():s+"px"}function Ie(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,m=xe(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,m):i[a]=m}}var tt=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function De(i,s){if(s){if(tt[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function be(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Se=null,Re=null,ke=null;function Me(i){if(i=Jo(i)){if(typeof Se!="function")throw Error(t(280));var s=i.stateNode;s&&(s=vl(s),Se(i.stateNode,i.type,s))}}function me(i){Re?ke?ke.push(i):ke=[i]:Re=i}function qe(){if(Re){var i=Re,s=ke;if(ke=Re=null,Me(i),s)for(i=0;i<s.length;i++)Me(s[i])}}function dt(i,s){return i(s)}function Nt(){}var Tt=!1;function ti(i,s,a){if(Tt)return i(s,a);Tt=!0;try{return dt(i,s,a)}finally{Tt=!1,(Re!==null||ke!==null)&&(Nt(),qe())}}function xn(i,s){var a=i.stateNode;if(a===null)return null;var f=vl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Cs=!1;if(u)try{var $n={};Object.defineProperty($n,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{Cs=!1}function Fo(i,s,a,f,m,_,T,U,H){var ie=Array.prototype.slice.call(arguments,3);try{s.apply(a,ie)}catch(_e){this.onError(_e)}}var lr=!1,Wr=null,Hi=!1,Rs=null,bs={onError:function(i){lr=!0,Wr=i}};function Ka(i,s,a,f,m,_,T,U,H){lr=!1,Wr=null,Fo.apply(bs,arguments)}function Za(i,s,a,f,m,_,T,U,H){if(Ka.apply(this,arguments),lr){if(lr){var ie=Wr;lr=!1,Wr=null}else throw Error(t(198));Hi||(Hi=!0,Rs=ie)}}function Gi(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Qa(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ja(i){if(Gi(i)!==i)throw Error(t(188))}function au(i){var s=i.alternate;if(!s){if(s=Gi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var m=a.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){a=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===a)return Ja(m),i;if(_===f)return Ja(m),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=m,f=_;else{for(var T=!1,U=m.child;U;){if(U===a){T=!0,a=m,f=_;break}if(U===f){T=!0,f=m,a=_;break}U=U.sibling}if(!T){for(U=_.child;U;){if(U===a){T=!0,a=_,f=m;break}if(U===f){T=!0,f=_,a=m;break}U=U.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function el(i){return i=au(i),i!==null?tl(i):null}function tl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=tl(i);if(s!==null)return s;i=i.sibling}return null}var C=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,oe=e.unstable_shouldYield,ae=e.unstable_requestPaint,j=e.unstable_now,Te=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,Xe=e.unstable_UserBlockingPriority,Be=e.unstable_NormalPriority,st=e.unstable_LowPriority,ot=e.unstable_IdlePriority,Qe=null,ut=null;function Lt(i){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Qe,i,void 0,(i.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:nt,Vt=Math.log,Ut=Math.LN2;function nt(i){return i>>>=0,i===0?32:31-(Vt(i)/Ut|0)|0}var Ft=64,xt=4194304;function an(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function mi(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,T=a&268435455;if(T!==0){var U=T&~m;U!==0?f=an(U):(_&=T,_!==0&&(f=an(_)))}else T=a&~m,T!==0?f=an(T):_!==0&&(f=an(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-wt(s),m=1<<a,f|=i[a],s&=~m;return f}function Pn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jr(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-wt(_),U=1<<T,H=m[T];H===-1?((U&a)===0||(U&f)!==0)&&(m[T]=Pn(U,s)):H<=s&&(i.expiredLanes|=U),_&=~U}}function Ht(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Dn(){var i=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),i}function Sn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function en(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-wt(s),i[s]=a}function Mn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var m=31-wt(a),_=1<<m;s[m]=0,f[m]=-1,i[m]=-1,a&=~_}}function Xr(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-wt(a),m=1<<f;m&s|i[f]&s&&(i[f]|=s),a&=~m}}var St=0;function Vp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Hp,lu,Gp,Wp,jp,cu=!1,nl=[],cr=null,ur=null,fr=null,ko=new Map,Oo=new Map,dr=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(i,s){switch(i){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ko.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(s.pointerId)}}function Bo(i,s,a,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=Jo(s),s!==null&&lu(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function Jx(i,s,a,f,m){switch(s){case"focusin":return cr=Bo(cr,i,s,a,f,m),!0;case"dragenter":return ur=Bo(ur,i,s,a,f,m),!0;case"mouseover":return fr=Bo(fr,i,s,a,f,m),!0;case"pointerover":var _=m.pointerId;return ko.set(_,Bo(ko.get(_)||null,i,s,a,f,m)),!0;case"gotpointercapture":return _=m.pointerId,Oo.set(_,Bo(Oo.get(_)||null,i,s,a,f,m)),!0}return!1}function $p(i){var s=$r(i.target);if(s!==null){var a=Gi(s);if(a!==null){if(s=a.tag,s===13){if(s=Qa(a),s!==null){i.blockedOn=s,jp(i.priority,function(){Gp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function il(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=fu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);lt=f,a.target.dispatchEvent(f),lt=null}else return s=Jo(a),s!==null&&lu(s),i.blockedOn=a,!1;s.shift()}return!0}function Yp(i,s,a){il(i)&&a.delete(s)}function eS(){cu=!1,cr!==null&&il(cr)&&(cr=null),ur!==null&&il(ur)&&(ur=null),fr!==null&&il(fr)&&(fr=null),ko.forEach(Yp),Oo.forEach(Yp)}function zo(i,s){i.blockedOn===s&&(i.blockedOn=null,cu||(cu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eS)))}function Vo(i){function s(m){return zo(m,i)}if(0<nl.length){zo(nl[0],i);for(var a=1;a<nl.length;a++){var f=nl[a];f.blockedOn===i&&(f.blockedOn=null)}}for(cr!==null&&zo(cr,i),ur!==null&&zo(ur,i),fr!==null&&zo(fr,i),ko.forEach(s),Oo.forEach(s),a=0;a<dr.length;a++)f=dr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)$p(a),a.blockedOn===null&&dr.shift()}var Ps=A.ReactCurrentBatchConfig,rl=!0;function tS(i,s,a,f){var m=St,_=Ps.transition;Ps.transition=null;try{St=1,uu(i,s,a,f)}finally{St=m,Ps.transition=_}}function nS(i,s,a,f){var m=St,_=Ps.transition;Ps.transition=null;try{St=4,uu(i,s,a,f)}finally{St=m,Ps.transition=_}}function uu(i,s,a,f){if(rl){var m=fu(i,s,a,f);if(m===null)Ru(i,s,f,sl,a),Xp(i,f);else if(Jx(m,i,s,a,f))f.stopPropagation();else if(Xp(i,f),s&4&&-1<Qx.indexOf(i)){for(;m!==null;){var _=Jo(m);if(_!==null&&Hp(_),_=fu(i,s,a,f),_===null&&Ru(i,s,f,sl,a),_===m)break;m=_}m!==null&&f.stopPropagation()}else Ru(i,s,f,null,a)}}var sl=null;function fu(i,s,a,f){if(sl=null,i=G(f),i=$r(i),i!==null)if(s=Gi(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Qa(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return sl=i,null}function qp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Te()){case Ne:return 1;case Xe:return 4;case Be:case st:return 16;case ot:return 536870912;default:return 16}default:return 16}}var hr=null,du=null,ol=null;function Kp(){if(ol)return ol;var i,s=du,a=s.length,f,m="value"in hr?hr.value:hr.textContent,_=m.length;for(i=0;i<a&&s[i]===m[i];i++);var T=a-i;for(f=1;f<=T&&s[a-f]===m[_-f];f++);return ol=m.slice(i,1<f?1-f:void 0)}function al(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ll(){return!0}function Zp(){return!1}function Yn(i){function s(a,f,m,_,T){this._reactName=a,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ll:Zp,this.isPropagationStopped=Zp,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),s}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Yn(Ds),Ho=se({},Ds,{view:0,detail:0}),iS=Yn(Ho),pu,mu,Go,cl=se({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Go&&(Go&&i.type==="mousemove"?(pu=i.screenX-Go.screenX,mu=i.screenY-Go.screenY):mu=pu=0,Go=i),pu)},movementY:function(i){return"movementY"in i?i.movementY:mu}}),Qp=Yn(cl),rS=se({},cl,{dataTransfer:0}),sS=Yn(rS),oS=se({},Ho,{relatedTarget:0}),gu=Yn(oS),aS=se({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=Yn(aS),cS=se({},Ds,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),uS=Yn(cS),fS=se({},Ds,{data:0}),Jp=Yn(fS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=pS[i])?!!s[i]:!1}function vu(){return mS}var gS=se({},Ho,{key:function(i){if(i.key){var s=dS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=al(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?hS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(i){return i.type==="keypress"?al(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?al(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),vS=Yn(gS),_S=se({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=Yn(_S),yS=se({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),xS=Yn(yS),SS=se({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=Yn(SS),ES=se({},cl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=Yn(ES),wS=[9,13,27,32],_u=u&&"CompositionEvent"in window,Wo=null;u&&"documentMode"in document&&(Wo=document.documentMode);var AS=u&&"TextEvent"in window&&!Wo,tm=u&&(!_u||Wo&&8<Wo&&11>=Wo),nm=" ",im=!1;function rm(i,s){switch(i){case"keyup":return wS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ls=!1;function CS(i,s){switch(i){case"compositionend":return sm(s);case"keypress":return s.which!==32?null:(im=!0,nm);case"textInput":return i=s.data,i===nm&&im?null:i;default:return null}}function RS(i,s){if(Ls)return i==="compositionend"||!_u&&rm(i,s)?(i=Kp(),ol=du=hr=null,Ls=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return tm&&s.locale!=="ko"?null:s.data;default:return null}}var bS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!bS[i.type]:s==="textarea"}function am(i,s,a,f){me(f),s=pl(s,"onChange"),0<s.length&&(a=new hu("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var jo=null,Xo=null;function PS(i){wm(i,0)}function ul(i){var s=ks(i);if(ht(s))return i}function DS(i,s){if(i==="change")return s}var lm=!1;if(u){var yu;if(u){var xu="oninput"in document;if(!xu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),xu=typeof cm.oninput=="function"}yu=xu}else yu=!1;lm=yu&&(!document.documentMode||9<document.documentMode)}function um(){jo&&(jo.detachEvent("onpropertychange",fm),Xo=jo=null)}function fm(i){if(i.propertyName==="value"&&ul(Xo)){var s=[];am(s,Xo,i,G(i)),ti(PS,s)}}function LS(i,s,a){i==="focusin"?(um(),jo=s,Xo=a,jo.attachEvent("onpropertychange",fm)):i==="focusout"&&um()}function IS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ul(Xo)}function NS(i,s){if(i==="click")return ul(s)}function US(i,s){if(i==="input"||i==="change")return ul(s)}function FS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var gi=typeof Object.is=="function"?Object.is:FS;function $o(i,s){if(gi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var m=a[f];if(!h.call(s,m)||!gi(i[m],s[m]))return!1}return!0}function dm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function hm(i,s){var a=dm(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dm(a)}}function pm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?pm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function mm(){for(var i=window,s=z();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=z(i.document)}return s}function Su(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function kS(i){var s=mm(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&pm(a.ownerDocument.documentElement,a)){if(f!==null&&Su(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=a.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=hm(a,_);var T=hm(a,f);m&&T&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var OS=u&&"documentMode"in document&&11>=document.documentMode,Is=null,Mu=null,Yo=null,Eu=!1;function gm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Is==null||Is!==z(f)||(f=Is,"selectionStart"in f&&Su(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Yo&&$o(Yo,f)||(Yo=f,f=pl(Mu,"onSelect"),0<f.length&&(s=new hu("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Is)))}function fl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Ns={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Tu={},vm={};u&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function dl(i){if(Tu[i])return Tu[i];if(!Ns[i])return i;var s=Ns[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in vm)return Tu[i]=s[a];return i}var _m=dl("animationend"),ym=dl("animationiteration"),xm=dl("animationstart"),Sm=dl("transitionend"),Mm=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(i,s){Mm.set(i,s),l(s,[i])}for(var wu=0;wu<Em.length;wu++){var Au=Em[wu],BS=Au.toLowerCase(),zS=Au[0].toUpperCase()+Au.slice(1);pr(BS,"on"+zS)}pr(_m,"onAnimationEnd"),pr(ym,"onAnimationIteration"),pr(xm,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Sm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Tm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Za(f,s,void 0,i),i.currentTarget=null}function wm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var U=f[T],H=U.instance,ie=U.currentTarget;if(U=U.listener,H!==_&&m.isPropagationStopped())break e;Tm(m,U,ie),_=H}else for(T=0;T<f.length;T++){if(U=f[T],H=U.instance,ie=U.currentTarget,U=U.listener,H!==_&&m.isPropagationStopped())break e;Tm(m,U,ie),_=H}}}if(Hi)throw i=Rs,Hi=!1,Rs=null,i}function Wt(i,s){var a=s[Nu];a===void 0&&(a=s[Nu]=new Set);var f=i+"__bubble";a.has(f)||(Am(s,i,2,!1),a.add(f))}function Cu(i,s,a){var f=0;s&&(f|=4),Am(a,i,f,s)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Ko(i){if(!i[hl]){i[hl]=!0,r.forEach(function(a){a!=="selectionchange"&&(VS.has(a)||Cu(a,!1,i),Cu(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[hl]||(s[hl]=!0,Cu("selectionchange",!1,s))}}function Am(i,s,a,f){switch(qp(s)){case 1:var m=tS;break;case 4:m=nS;break;default:m=uu}a=m.bind(null,s,a,i),m=void 0,!Cs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,a,{capture:!0,passive:m}):i.addEventListener(s,a,!0):m!==void 0?i.addEventListener(s,a,{passive:m}):i.addEventListener(s,a,!1)}function Ru(i,s,a,f,m){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===m||H.nodeType===8&&H.parentNode===m))return;T=T.return}for(;U!==null;){if(T=$r(U),T===null)return;if(H=T.tag,H===5||H===6){f=_=T;continue e}U=U.parentNode}}f=f.return}ti(function(){var ie=_,_e=G(a),ye=[];e:{var ge=Mm.get(i);if(ge!==void 0){var ze=hu,$e=i;switch(i){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":ze=vS;break;case"focusin":$e="focus",ze=gu;break;case"focusout":$e="blur",ze=gu;break;case"beforeblur":case"afterblur":ze=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=xS;break;case _m:case ym:case xm:ze=lS;break;case Sm:ze=MS;break;case"scroll":ze=iS;break;case"wheel":ze=TS;break;case"copy":case"cut":case"paste":ze=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=em}var Ke=(s&4)!==0,tn=!Ke&&i==="scroll",Z=Ke?ge!==null?ge+"Capture":null:ge;Ke=[];for(var X=ie,ee;X!==null;){ee=X;var we=ee.stateNode;if(ee.tag===5&&we!==null&&(ee=we,Z!==null&&(we=xn(X,Z),we!=null&&Ke.push(Zo(X,we,ee)))),tn)break;X=X.return}0<Ke.length&&(ge=new ze(ge,$e,null,a,_e),ye.push({event:ge,listeners:Ke}))}}if((s&7)===0){e:{if(ge=i==="mouseover"||i==="pointerover",ze=i==="mouseout"||i==="pointerout",ge&&a!==lt&&($e=a.relatedTarget||a.fromElement)&&($r($e)||$e[Wi]))break e;if((ze||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,ze?($e=a.relatedTarget||a.toElement,ze=ie,$e=$e?$r($e):null,$e!==null&&(tn=Gi($e),$e!==tn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(ze=null,$e=ie),ze!==$e)){if(Ke=Qp,we="onMouseLeave",Z="onMouseEnter",X="mouse",(i==="pointerout"||i==="pointerover")&&(Ke=em,we="onPointerLeave",Z="onPointerEnter",X="pointer"),tn=ze==null?ge:ks(ze),ee=$e==null?ge:ks($e),ge=new Ke(we,X+"leave",ze,a,_e),ge.target=tn,ge.relatedTarget=ee,we=null,$r(_e)===ie&&(Ke=new Ke(Z,X+"enter",$e,a,_e),Ke.target=ee,Ke.relatedTarget=tn,we=Ke),tn=we,ze&&$e)t:{for(Ke=ze,Z=$e,X=0,ee=Ke;ee;ee=Us(ee))X++;for(ee=0,we=Z;we;we=Us(we))ee++;for(;0<X-ee;)Ke=Us(Ke),X--;for(;0<ee-X;)Z=Us(Z),ee--;for(;X--;){if(Ke===Z||Z!==null&&Ke===Z.alternate)break t;Ke=Us(Ke),Z=Us(Z)}Ke=null}else Ke=null;ze!==null&&Cm(ye,ge,ze,Ke,!1),$e!==null&&tn!==null&&Cm(ye,tn,$e,Ke,!0)}}e:{if(ge=ie?ks(ie):window,ze=ge.nodeName&&ge.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ge.type==="file")var Ze=DS;else if(om(ge))if(lm)Ze=US;else{Ze=IS;var it=LS}else(ze=ge.nodeName)&&ze.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ze=NS);if(Ze&&(Ze=Ze(i,ie))){am(ye,Ze,a,_e);break e}it&&it(i,ge,ie),i==="focusout"&&(it=ge._wrapperState)&&it.controlled&&ge.type==="number"&&Fe(ge,"number",ge.value)}switch(it=ie?ks(ie):window,i){case"focusin":(om(it)||it.contentEditable==="true")&&(Is=it,Mu=ie,Yo=null);break;case"focusout":Yo=Mu=Is=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,gm(ye,a,_e);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":gm(ye,a,_e)}var rt;if(_u)e:{switch(i){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ls?rm(i,a)&&(ft="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(tm&&a.locale!=="ko"&&(Ls||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ls&&(rt=Kp()):(hr=_e,du="value"in hr?hr.value:hr.textContent,Ls=!0)),it=pl(ie,ft),0<it.length&&(ft=new Jp(ft,i,null,a,_e),ye.push({event:ft,listeners:it}),rt?ft.data=rt:(rt=sm(a),rt!==null&&(ft.data=rt)))),(rt=AS?CS(i,a):RS(i,a))&&(ie=pl(ie,"onBeforeInput"),0<ie.length&&(_e=new Jp("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:ie}),_e.data=rt))}wm(ye,s)})}function Zo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function pl(i,s){for(var a=s+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=xn(i,a),_!=null&&f.unshift(Zo(i,_,m)),_=xn(i,s),_!=null&&f.push(Zo(i,_,m))),i=i.return}return f}function Us(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Cm(i,s,a,f,m){for(var _=s._reactName,T=[];a!==null&&a!==f;){var U=a,H=U.alternate,ie=U.stateNode;if(H!==null&&H===f)break;U.tag===5&&ie!==null&&(U=ie,m?(H=xn(a,_),H!=null&&T.unshift(Zo(a,H,U))):m||(H=xn(a,_),H!=null&&T.push(Zo(a,H,U)))),a=a.return}T.length!==0&&i.push({event:s,listeners:T})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function Rm(i){return(typeof i=="string"?i:""+i).replace(HS,`
`).replace(GS,"")}function ml(i,s,a){if(s=Rm(s),Rm(i)!==s&&a)throw Error(t(425))}function gl(){}var bu=null,Pu=null;function Du(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,WS=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(i){return bm.resolve(null).then(i).catch(XS)}:Lu;function XS(i){setTimeout(function(){throw i})}function Iu(i,s){var a=s,f=0;do{var m=a.nextSibling;if(i.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(f===0){i.removeChild(m),Vo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=m}while(a);Vo(s)}function mr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Pm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),bi="__reactFiber$"+Fs,Qo="__reactProps$"+Fs,Wi="__reactContainer$"+Fs,Nu="__reactEvents$"+Fs,$S="__reactListeners$"+Fs,YS="__reactHandles$"+Fs;function $r(i){var s=i[bi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Wi]||a[bi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Pm(i);i!==null;){if(a=i[bi])return a;i=Pm(i)}return s}i=a,a=i.parentNode}return null}function Jo(i){return i=i[bi]||i[Wi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ks(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function vl(i){return i[Qo]||null}var Uu=[],Os=-1;function gr(i){return{current:i}}function jt(i){0>Os||(i.current=Uu[Os],Uu[Os]=null,Os--)}function Gt(i,s){Os++,Uu[Os]=i.current,i.current=s}var vr={},En=gr(vr),Fn=gr(!1),Yr=vr;function Bs(i,s){var a=i.type.contextTypes;if(!a)return vr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in a)m[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function kn(i){return i=i.childContextTypes,i!=null}function _l(){jt(Fn),jt(En)}function Dm(i,s,a){if(En.current!==vr)throw Error(t(168));Gt(En,s),Gt(Fn,a)}function Lm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,de(i)||"Unknown",m));return se({},a,f)}function yl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||vr,Yr=En.current,Gt(En,i),Gt(Fn,Fn.current),!0}function Im(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Lm(i,s,Yr),f.__reactInternalMemoizedMergedChildContext=i,jt(Fn),jt(En),Gt(En,i)):jt(Fn),Gt(Fn,a)}var ji=null,xl=!1,Fu=!1;function Nm(i){ji===null?ji=[i]:ji.push(i)}function qS(i){xl=!0,Nm(i)}function _r(){if(!Fu&&ji!==null){Fu=!0;var i=0,s=St;try{var a=ji;for(St=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}ji=null,xl=!1}catch(m){throw ji!==null&&(ji=ji.slice(i+1)),C(Ne,_r),m}finally{St=s,Fu=!1}}return null}var zs=[],Vs=0,Sl=null,Ml=0,ni=[],ii=0,qr=null,Xi=1,$i="";function Kr(i,s){zs[Vs++]=Ml,zs[Vs++]=Sl,Sl=i,Ml=s}function Um(i,s,a){ni[ii++]=Xi,ni[ii++]=$i,ni[ii++]=qr,qr=i;var f=Xi;i=$i;var m=32-wt(f)-1;f&=~(1<<m),a+=1;var _=32-wt(s)+m;if(30<_){var T=m-m%5;_=(f&(1<<T)-1).toString(32),f>>=T,m-=T,Xi=1<<32-wt(s)+m|a<<m|f,$i=_+i}else Xi=1<<_|a<<m|f,$i=i}function ku(i){i.return!==null&&(Kr(i,1),Um(i,1,0))}function Ou(i){for(;i===Sl;)Sl=zs[--Vs],zs[Vs]=null,Ml=zs[--Vs],zs[Vs]=null;for(;i===qr;)qr=ni[--ii],ni[ii]=null,$i=ni[--ii],ni[ii]=null,Xi=ni[--ii],ni[ii]=null}var qn=null,Kn=null,Xt=!1,vi=null;function Fm(i,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function km(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,qn=i,Kn=mr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,qn=i,Kn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=qr!==null?{id:Xi,overflow:$i}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,qn=i,Kn=null,!0):!1;default:return!1}}function Bu(i){return(i.mode&1)!==0&&(i.flags&128)===0}function zu(i){if(Xt){var s=Kn;if(s){var a=s;if(!km(i,s)){if(Bu(i))throw Error(t(418));s=mr(a.nextSibling);var f=qn;s&&km(i,s)?Fm(f,a):(i.flags=i.flags&-4097|2,Xt=!1,qn=i)}}else{if(Bu(i))throw Error(t(418));i.flags=i.flags&-4097|2,Xt=!1,qn=i}}}function Om(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;qn=i}function El(i){if(i!==qn)return!1;if(!Xt)return Om(i),Xt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Du(i.type,i.memoizedProps)),s&&(s=Kn)){if(Bu(i))throw Bm(),Error(t(418));for(;s;)Fm(i,s),s=mr(s.nextSibling)}if(Om(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Kn=mr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Kn=null}}else Kn=qn?mr(i.stateNode.nextSibling):null;return!0}function Bm(){for(var i=Kn;i;)i=mr(i.nextSibling)}function Hs(){Kn=qn=null,Xt=!1}function Vu(i){vi===null?vi=[i]:vi.push(i)}var KS=A.ReactCurrentBatchConfig;function ea(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var U=m.refs;T===null?delete U[_]:U[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Tl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function zm(i){var s=i._init;return s(i._payload)}function Vm(i){function s(Z,X){if(i){var ee=Z.deletions;ee===null?(Z.deletions=[X],Z.flags|=16):ee.push(X)}}function a(Z,X){if(!i)return null;for(;X!==null;)s(Z,X),X=X.sibling;return null}function f(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function m(Z,X){return Z=Ar(Z,X),Z.index=0,Z.sibling=null,Z}function _(Z,X,ee){return Z.index=ee,i?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<X?(Z.flags|=2,X):ee):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function T(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,X,ee,we){return X===null||X.tag!==6?(X=If(ee,Z.mode,we),X.return=Z,X):(X=m(X,ee),X.return=Z,X)}function H(Z,X,ee,we){var Ze=ee.type;return Ze===F?_e(Z,X,ee.props.children,we,ee.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===le&&zm(Ze)===X.type)?(we=m(X,ee.props),we.ref=ea(Z,X,ee),we.return=Z,we):(we=Yl(ee.type,ee.key,ee.props,null,Z.mode,we),we.ref=ea(Z,X,ee),we.return=Z,we)}function ie(Z,X,ee,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Nf(ee,Z.mode,we),X.return=Z,X):(X=m(X,ee.children||[]),X.return=Z,X)}function _e(Z,X,ee,we,Ze){return X===null||X.tag!==7?(X=rs(ee,Z.mode,we,Ze),X.return=Z,X):(X=m(X,ee),X.return=Z,X)}function ye(Z,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=If(""+X,Z.mode,ee),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return ee=Yl(X.type,X.key,X.props,null,Z.mode,ee),ee.ref=ea(Z,null,X),ee.return=Z,ee;case I:return X=Nf(X,Z.mode,ee),X.return=Z,X;case le:var we=X._init;return ye(Z,we(X._payload),ee)}if(at(X)||ce(X))return X=rs(X,Z.mode,ee,null),X.return=Z,X;Tl(Z,X)}return null}function ge(Z,X,ee,we){var Ze=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ze!==null?null:U(Z,X,""+ee,we);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case N:return ee.key===Ze?H(Z,X,ee,we):null;case I:return ee.key===Ze?ie(Z,X,ee,we):null;case le:return Ze=ee._init,ge(Z,X,Ze(ee._payload),we)}if(at(ee)||ce(ee))return Ze!==null?null:_e(Z,X,ee,we,null);Tl(Z,ee)}return null}function ze(Z,X,ee,we,Ze){if(typeof we=="string"&&we!==""||typeof we=="number")return Z=Z.get(ee)||null,U(X,Z,""+we,Ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return Z=Z.get(we.key===null?ee:we.key)||null,H(X,Z,we,Ze);case I:return Z=Z.get(we.key===null?ee:we.key)||null,ie(X,Z,we,Ze);case le:var it=we._init;return ze(Z,X,ee,it(we._payload),Ze)}if(at(we)||ce(we))return Z=Z.get(ee)||null,_e(X,Z,we,Ze,null);Tl(X,we)}return null}function $e(Z,X,ee,we){for(var Ze=null,it=null,rt=X,ft=X=0,mn=null;rt!==null&&ft<ee.length;ft++){rt.index>ft?(mn=rt,rt=null):mn=rt.sibling;var Rt=ge(Z,rt,ee[ft],we);if(Rt===null){rt===null&&(rt=mn);break}i&&rt&&Rt.alternate===null&&s(Z,rt),X=_(Rt,X,ft),it===null?Ze=Rt:it.sibling=Rt,it=Rt,rt=mn}if(ft===ee.length)return a(Z,rt),Xt&&Kr(Z,ft),Ze;if(rt===null){for(;ft<ee.length;ft++)rt=ye(Z,ee[ft],we),rt!==null&&(X=_(rt,X,ft),it===null?Ze=rt:it.sibling=rt,it=rt);return Xt&&Kr(Z,ft),Ze}for(rt=f(Z,rt);ft<ee.length;ft++)mn=ze(rt,Z,ft,ee[ft],we),mn!==null&&(i&&mn.alternate!==null&&rt.delete(mn.key===null?ft:mn.key),X=_(mn,X,ft),it===null?Ze=mn:it.sibling=mn,it=mn);return i&&rt.forEach(function(Cr){return s(Z,Cr)}),Xt&&Kr(Z,ft),Ze}function Ke(Z,X,ee,we){var Ze=ce(ee);if(typeof Ze!="function")throw Error(t(150));if(ee=Ze.call(ee),ee==null)throw Error(t(151));for(var it=Ze=null,rt=X,ft=X=0,mn=null,Rt=ee.next();rt!==null&&!Rt.done;ft++,Rt=ee.next()){rt.index>ft?(mn=rt,rt=null):mn=rt.sibling;var Cr=ge(Z,rt,Rt.value,we);if(Cr===null){rt===null&&(rt=mn);break}i&&rt&&Cr.alternate===null&&s(Z,rt),X=_(Cr,X,ft),it===null?Ze=Cr:it.sibling=Cr,it=Cr,rt=mn}if(Rt.done)return a(Z,rt),Xt&&Kr(Z,ft),Ze;if(rt===null){for(;!Rt.done;ft++,Rt=ee.next())Rt=ye(Z,Rt.value,we),Rt!==null&&(X=_(Rt,X,ft),it===null?Ze=Rt:it.sibling=Rt,it=Rt);return Xt&&Kr(Z,ft),Ze}for(rt=f(Z,rt);!Rt.done;ft++,Rt=ee.next())Rt=ze(rt,Z,ft,Rt.value,we),Rt!==null&&(i&&Rt.alternate!==null&&rt.delete(Rt.key===null?ft:Rt.key),X=_(Rt,X,ft),it===null?Ze=Rt:it.sibling=Rt,it=Rt);return i&&rt.forEach(function(bM){return s(Z,bM)}),Xt&&Kr(Z,ft),Ze}function tn(Z,X,ee,we){if(typeof ee=="object"&&ee!==null&&ee.type===F&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case N:e:{for(var Ze=ee.key,it=X;it!==null;){if(it.key===Ze){if(Ze=ee.type,Ze===F){if(it.tag===7){a(Z,it.sibling),X=m(it,ee.props.children),X.return=Z,Z=X;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===le&&zm(Ze)===it.type){a(Z,it.sibling),X=m(it,ee.props),X.ref=ea(Z,it,ee),X.return=Z,Z=X;break e}a(Z,it);break}else s(Z,it);it=it.sibling}ee.type===F?(X=rs(ee.props.children,Z.mode,we,ee.key),X.return=Z,Z=X):(we=Yl(ee.type,ee.key,ee.props,null,Z.mode,we),we.ref=ea(Z,X,ee),we.return=Z,Z=we)}return T(Z);case I:e:{for(it=ee.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(Z,X.sibling),X=m(X,ee.children||[]),X.return=Z,Z=X;break e}else{a(Z,X);break}else s(Z,X);X=X.sibling}X=Nf(ee,Z.mode,we),X.return=Z,Z=X}return T(Z);case le:return it=ee._init,tn(Z,X,it(ee._payload),we)}if(at(ee))return $e(Z,X,ee,we);if(ce(ee))return Ke(Z,X,ee,we);Tl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(a(Z,X.sibling),X=m(X,ee),X.return=Z,Z=X):(a(Z,X),X=If(ee,Z.mode,we),X.return=Z,Z=X),T(Z)):a(Z,X)}return tn}var Gs=Vm(!0),Hm=Vm(!1),wl=gr(null),Al=null,Ws=null,Hu=null;function Gu(){Hu=Ws=Al=null}function Wu(i){var s=wl.current;jt(wl),i._currentValue=s}function ju(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function js(i,s){Al=i,Hu=Ws=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(On=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(Hu!==i)if(i={context:i,memoizedValue:s,next:null},Ws===null){if(Al===null)throw Error(t(308));Ws=i,Al.dependencies={lanes:0,firstContext:i}}else Ws=Ws.next=i;return s}var Zr=null;function Xu(i){Zr===null?Zr=[i]:Zr.push(i)}function Gm(i,s,a,f){var m=s.interleaved;return m===null?(a.next=a,Xu(s)):(a.next=m.next,m.next=a),s.interleaved=a,Yi(i,f)}function Yi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var yr=!1;function $u(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function qi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function xr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Ct&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,Yi(i,a)}return m=f.interleaved,m===null?(s.next=s,Xu(f)):(s.next=m.next,m.next=s),f.interleaved=s,Yi(i,a)}function Cl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Xr(i,a)}}function jm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var m=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?m=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?m=_=s:_=_.next=s}else m=_=s;a={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Rl(i,s,a,f){var m=i.updateQueue;yr=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var H=U,ie=H.next;H.next=null,T===null?_=ie:T.next=ie,T=H;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==T&&(U===null?_e.firstBaseUpdate=ie:U.next=ie,_e.lastBaseUpdate=H))}if(_!==null){var ye=m.baseState;T=0,_e=ie=H=null,U=_;do{var ge=U.lane,ze=U.eventTime;if((f&ge)===ge){_e!==null&&(_e=_e.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=i,Ke=U;switch(ge=s,ze=a,Ke.tag){case 1:if($e=Ke.payload,typeof $e=="function"){ye=$e.call(ze,ye,ge);break e}ye=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ke.payload,ge=typeof $e=="function"?$e.call(ze,ye,ge):$e,ge==null)break e;ye=se({},ye,ge);break e;case 2:yr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,ge=m.effects,ge===null?m.effects=[U]:ge.push(U))}else ze={eventTime:ze,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ie=_e=ze,H=ye):_e=_e.next=ze,T|=ge;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(_e===null&&(H=ye),m.baseState=H,m.firstBaseUpdate=ie,m.lastBaseUpdate=_e,s=m.shared.interleaved,s!==null){m=s;do T|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);es|=T,i.lanes=T,i.memoizedState=ye}}function Xm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=a,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ta={},Pi=gr(ta),na=gr(ta),ia=gr(ta);function Qr(i){if(i===ta)throw Error(t(174));return i}function Yu(i,s){switch(Gt(ia,s),Gt(na,i),Gt(Pi,ta),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ve(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ve(s,i)}jt(Pi),Gt(Pi,s)}function Xs(){jt(Pi),jt(na),jt(ia)}function $m(i){Qr(ia.current);var s=Qr(Pi.current),a=ve(s,i.type);s!==a&&(Gt(na,i),Gt(Pi,a))}function qu(i){na.current===i&&(jt(Pi),jt(na))}var Yt=gr(0);function bl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ku=[];function Zu(){for(var i=0;i<Ku.length;i++)Ku[i]._workInProgressVersionPrimary=null;Ku.length=0}var Pl=A.ReactCurrentDispatcher,Qu=A.ReactCurrentBatchConfig,Jr=0,qt=null,ln=null,hn=null,Dl=!1,ra=!1,sa=0,ZS=0;function Tn(){throw Error(t(321))}function Ju(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!gi(i[a],s[a]))return!1;return!0}function ef(i,s,a,f,m,_){if(Jr=_,qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Pl.current=i===null||i.memoizedState===null?tM:nM,i=a(f,m),ra){_=0;do{if(ra=!1,sa=0,25<=_)throw Error(t(301));_+=1,hn=ln=null,s.updateQueue=null,Pl.current=iM,i=a(f,m)}while(ra)}if(Pl.current=Nl,s=ln!==null&&ln.next!==null,Jr=0,hn=ln=qt=null,Dl=!1,s)throw Error(t(300));return i}function tf(){var i=sa!==0;return sa=0,i}function Di(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?qt.memoizedState=hn=i:hn=hn.next=i,hn}function si(){if(ln===null){var i=qt.alternate;i=i!==null?i.memoizedState:null}else i=ln.next;var s=hn===null?qt.memoizedState:hn.next;if(s!==null)hn=s,ln=i;else{if(i===null)throw Error(t(310));ln=i,i={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},hn===null?qt.memoizedState=hn=i:hn=hn.next=i}return hn}function oa(i,s){return typeof s=="function"?s(i):s}function nf(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=ln,m=f.baseQueue,_=a.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}f.baseQueue=m=_,a.pending=null}if(m!==null){_=m.next,f=f.baseState;var U=T=null,H=null,ie=_;do{var _e=ie.lane;if((Jr&_e)===_e)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),f=ie.hasEagerState?ie.eagerState:i(f,ie.action);else{var ye={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(U=H=ye,T=f):H=H.next=ye,qt.lanes|=_e,es|=_e}ie=ie.next}while(ie!==null&&ie!==_);H===null?T=f:H.next=U,gi(f,s.memoizedState)||(On=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=H,a.lastRenderedState=f}if(i=a.interleaved,i!==null){m=i;do _=m.lane,qt.lanes|=_,es|=_,m=m.next;while(m!==i)}else m===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function rf(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,m=a.pending,_=s.memoizedState;if(m!==null){a.pending=null;var T=m=m.next;do _=i(_,T.action),T=T.next;while(T!==m);gi(_,s.memoizedState)||(On=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Ym(){}function qm(i,s){var a=qt,f=si(),m=s(),_=!gi(f.memoizedState,m);if(_&&(f.memoizedState=m,On=!0),f=f.queue,sf(Qm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,aa(9,Zm.bind(null,a,f,m,s),void 0,null),pn===null)throw Error(t(349));(Jr&30)!==0||Km(a,s,m)}return m}function Km(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Zm(i,s,a,f){s.value=a,s.getSnapshot=f,Jm(s)&&eg(i)}function Qm(i,s,a){return a(function(){Jm(s)&&eg(i)})}function Jm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!gi(i,a)}catch{return!0}}function eg(i){var s=Yi(i,1);s!==null&&Si(s,i,1,-1)}function tg(i){var s=Di();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:i},s.queue=i,i=i.dispatch=eM.bind(null,qt,i),[s.memoizedState,i]}function aa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=qt.updateQueue,s===null?(s={lastEffect:null,stores:null},qt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function ng(){return si().memoizedState}function Ll(i,s,a,f){var m=Di();qt.flags|=i,m.memoizedState=aa(1|s,a,void 0,f===void 0?null:f)}function Il(i,s,a,f){var m=si();f=f===void 0?null:f;var _=void 0;if(ln!==null){var T=ln.memoizedState;if(_=T.destroy,f!==null&&Ju(f,T.deps)){m.memoizedState=aa(s,a,_,f);return}}qt.flags|=i,m.memoizedState=aa(1|s,a,_,f)}function ig(i,s){return Ll(8390656,8,i,s)}function sf(i,s){return Il(2048,8,i,s)}function rg(i,s){return Il(4,2,i,s)}function sg(i,s){return Il(4,4,i,s)}function og(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function ag(i,s,a){return a=a!=null?a.concat([i]):null,Il(4,4,og.bind(null,s,i),a)}function of(){}function lg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Ju(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function cg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Ju(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function ug(i,s,a){return(Jr&21)===0?(i.baseState&&(i.baseState=!1,On=!0),i.memoizedState=a):(gi(a,s)||(a=Dn(),qt.lanes|=a,es|=a,i.baseState=!0),s)}function QS(i,s){var a=St;St=a!==0&&4>a?a:4,i(!0);var f=Qu.transition;Qu.transition={};try{i(!1),s()}finally{St=a,Qu.transition=f}}function fg(){return si().memoizedState}function JS(i,s,a){var f=Tr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},dg(i))hg(s,a);else if(a=Gm(i,s,a,f),a!==null){var m=In();Si(a,i,f,m),pg(a,s,f)}}function eM(i,s,a){var f=Tr(i),m={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(dg(i))hg(s,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,U=_(T,a);if(m.hasEagerState=!0,m.eagerState=U,gi(U,T)){var H=s.interleaved;H===null?(m.next=m,Xu(s)):(m.next=H.next,H.next=m),s.interleaved=m;return}}catch{}finally{}a=Gm(i,s,m,f),a!==null&&(m=In(),Si(a,i,f,m),pg(a,s,f))}}function dg(i){var s=i.alternate;return i===qt||s!==null&&s===qt}function hg(i,s){ra=Dl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function pg(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,Xr(i,a)}}var Nl={readContext:ri,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},tM={readContext:ri,useCallback:function(i,s){return Di().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:ig,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Ll(4194308,4,og.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Ll(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ll(4,2,i,s)},useMemo:function(i,s){var a=Di();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Di();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=JS.bind(null,qt,i),[f.memoizedState,i]},useRef:function(i){var s=Di();return i={current:i},s.memoizedState=i},useState:tg,useDebugValue:of,useDeferredValue:function(i){return Di().memoizedState=i},useTransition:function(){var i=tg(!1),s=i[0];return i=QS.bind(null,i[1]),Di().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=qt,m=Di();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),pn===null)throw Error(t(349));(Jr&30)!==0||Km(f,s,a)}m.memoizedState=a;var _={value:a,getSnapshot:s};return m.queue=_,ig(Qm.bind(null,f,_,i),[i]),f.flags|=2048,aa(9,Zm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Di(),s=pn.identifierPrefix;if(Xt){var a=$i,f=Xi;a=(f&~(1<<32-wt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=sa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=ZS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},nM={readContext:ri,useCallback:lg,useContext:ri,useEffect:sf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:cg,useReducer:nf,useRef:ng,useState:function(){return nf(oa)},useDebugValue:of,useDeferredValue:function(i){var s=si();return ug(s,ln.memoizedState,i)},useTransition:function(){var i=nf(oa)[0],s=si().memoizedState;return[i,s]},useMutableSource:Ym,useSyncExternalStore:qm,useId:fg,unstable_isNewReconciler:!1},iM={readContext:ri,useCallback:lg,useContext:ri,useEffect:sf,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:cg,useReducer:rf,useRef:ng,useState:function(){return rf(oa)},useDebugValue:of,useDeferredValue:function(i){var s=si();return ln===null?s.memoizedState=i:ug(s,ln.memoizedState,i)},useTransition:function(){var i=rf(oa)[0],s=si().memoizedState;return[i,s]},useMutableSource:Ym,useSyncExternalStore:qm,useId:fg,unstable_isNewReconciler:!1};function _i(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function af(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:se({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ul={isMounted:function(i){return(i=i._reactInternals)?Gi(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=In(),m=Tr(i),_=qi(f,m);_.payload=s,a!=null&&(_.callback=a),s=xr(i,_,m),s!==null&&(Si(s,i,m,f),Cl(s,i,m))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=In(),m=Tr(i),_=qi(f,m);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=xr(i,_,m),s!==null&&(Si(s,i,m,f),Cl(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=In(),f=Tr(i),m=qi(a,f);m.tag=2,s!=null&&(m.callback=s),s=xr(i,m,f),s!==null&&(Si(s,i,f,a),Cl(s,i,f))}};function mg(i,s,a,f,m,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!$o(a,f)||!$o(m,_):!0}function gg(i,s,a){var f=!1,m=vr,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(m=kn(s)?Yr:En.current,f=s.contextTypes,_=(f=f!=null)?Bs(i,m):vr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ul,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),s}function vg(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ul.enqueueReplaceState(s,s.state,null)}function lf(i,s,a,f){var m=i.stateNode;m.props=a,m.state=i.memoizedState,m.refs={},$u(i);var _=s.contextType;typeof _=="object"&&_!==null?m.context=ri(_):(_=kn(s)?Yr:En.current,m.context=Bs(i,_)),m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(af(i,s,_,a),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Ul.enqueueReplaceState(m,m.state,null),Rl(i,a,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function $s(i,s){try{var a="",f=s;do a+=K(f),f=f.return;while(f);var m=a}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:m,digest:null}}function cf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function uf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var rM=typeof WeakMap=="function"?WeakMap:Map;function _g(i,s,a){a=qi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Hl||(Hl=!0,wf=f),uf(i,s)},a}function yg(i,s,a){a=qi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;a.payload=function(){return f(m)},a.callback=function(){uf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){uf(i,s),typeof f!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function xg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new rM;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(a)||(m.add(a),i=_M.bind(null,i,s,a),s.then(i,i))}function Sg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Mg(i,s,a,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=qi(-1,1),s.tag=2,xr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var sM=A.ReactCurrentOwner,On=!1;function Ln(i,s,a,f){s.child=i===null?Hm(s,null,a,f):Gs(s,i.child,a,f)}function Eg(i,s,a,f,m){a=a.render;var _=s.ref;return js(s,m),f=ef(i,s,a,f,_,m),a=tf(),i!==null&&!On?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Ki(i,s,m)):(Xt&&a&&ku(s),s.flags|=1,Ln(i,s,f,m),s.child)}function Tg(i,s,a,f,m){if(i===null){var _=a.type;return typeof _=="function"&&!Lf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,wg(i,s,_,f,m)):(i=Yl(a.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&m)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(T,f)&&i.ref===s.ref)return Ki(i,s,m)}return s.flags|=1,i=Ar(_,f),i.ref=s.ref,i.return=s,s.child=i}function wg(i,s,a,f,m){if(i!==null){var _=i.memoizedProps;if($o(_,f)&&i.ref===s.ref)if(On=!1,s.pendingProps=f=_,(i.lanes&m)!==0)(i.flags&131072)!==0&&(On=!0);else return s.lanes=i.lanes,Ki(i,s,m)}return ff(i,s,a,f,m)}function Ag(i,s,a){var f=s.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(qs,Zn),Zn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(qs,Zn),Zn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Gt(qs,Zn),Zn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Gt(qs,Zn),Zn|=f;return Ln(i,s,m,a),s.child}function Cg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ff(i,s,a,f,m){var _=kn(a)?Yr:En.current;return _=Bs(s,_),js(s,m),a=ef(i,s,a,f,_,m),f=tf(),i!==null&&!On?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Ki(i,s,m)):(Xt&&f&&ku(s),s.flags|=1,Ln(i,s,a,m),s.child)}function Rg(i,s,a,f,m){if(kn(a)){var _=!0;yl(s)}else _=!1;if(js(s,m),s.stateNode===null)kl(i,s),gg(s,a,f),lf(s,a,f,m),f=!0;else if(i===null){var T=s.stateNode,U=s.memoizedProps;T.props=U;var H=T.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=ri(ie):(ie=kn(a)?Yr:En.current,ie=Bs(s,ie));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==f||H!==ie)&&vg(s,T,f,ie),yr=!1;var ge=s.memoizedState;T.state=ge,Rl(s,f,T,m),H=s.memoizedState,U!==f||ge!==H||Fn.current||yr?(typeof _e=="function"&&(af(s,a,_e,f),H=s.memoizedState),(U=yr||mg(s,a,U,f,ge,H,ie))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=H),T.props=f,T.state=H,T.context=ie,f=U):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Wm(i,s),U=s.memoizedProps,ie=s.type===s.elementType?U:_i(s.type,U),T.props=ie,ye=s.pendingProps,ge=T.context,H=a.contextType,typeof H=="object"&&H!==null?H=ri(H):(H=kn(a)?Yr:En.current,H=Bs(s,H));var ze=a.getDerivedStateFromProps;(_e=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==ye||ge!==H)&&vg(s,T,f,H),yr=!1,ge=s.memoizedState,T.state=ge,Rl(s,f,T,m);var $e=s.memoizedState;U!==ye||ge!==$e||Fn.current||yr?(typeof ze=="function"&&(af(s,a,ze,f),$e=s.memoizedState),(ie=yr||mg(s,a,ie,f,ge,$e,H)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,$e,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,$e,H)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=$e),T.props=f,T.state=$e,T.context=H,f=ie):(typeof T.componentDidUpdate!="function"||U===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),f=!1)}return df(i,s,a,f,_,m)}function df(i,s,a,f,m,_){Cg(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return m&&Im(s,a,!1),Ki(i,s,_);f=s.stateNode,sM.current=s;var U=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=Gs(s,i.child,null,_),s.child=Gs(s,null,U,_)):Ln(i,s,U,_),s.memoizedState=f.state,m&&Im(s,a,!0),s.child}function bg(i){var s=i.stateNode;s.pendingContext?Dm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Dm(i,s.context,!1),Yu(i,s.containerInfo)}function Pg(i,s,a,f,m){return Hs(),Vu(m),s.flags|=256,Ln(i,s,a,f),s.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function pf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Dg(i,s,a){var f=s.pendingProps,m=Yt.current,_=!1,T=(s.flags&128)!==0,U;if((U=T)||(U=i!==null&&i.memoizedState===null?!1:(m&2)!==0),U?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Gt(Yt,m&1),i===null)return zu(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=f.children,i=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=ql(T,f,0,null),i=rs(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=pf(a),s.memoizedState=hf,i):mf(s,T));if(m=i.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return oM(i,s,T,f,U,m,a);if(_){_=f.fallback,T=s.mode,m=i.child,U=m.sibling;var H={mode:"hidden",children:f.children};return(T&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=H,s.deletions=null):(f=Ar(m,H),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?_=Ar(U,_):(_=rs(_,T,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=i.child.memoizedState,T=T===null?pf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~a,s.memoizedState=hf,f}return _=i.child,i=_.sibling,f=Ar(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function mf(i,s){return s=ql({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Fl(i,s,a,f){return f!==null&&Vu(f),Gs(s,i.child,null,a),i=mf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function oM(i,s,a,f,m,_,T){if(a)return s.flags&256?(s.flags&=-257,f=cf(Error(t(422))),Fl(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=ql({mode:"visible",children:f.children},m,0,null),_=rs(_,m,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&Gs(s,i.child,null,T),s.child.memoizedState=pf(T),s.memoizedState=hf,_);if((s.mode&1)===0)return Fl(i,s,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=cf(_,f,void 0),Fl(i,s,T,f)}if(U=(T&i.childLanes)!==0,On||U){if(f=pn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|T))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Yi(i,m),Si(f,i,m,-1))}return Df(),f=cf(Error(t(421))),Fl(i,s,T,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=yM.bind(null,i),m._reactRetry=s,null):(i=_.treeContext,Kn=mr(m.nextSibling),qn=s,Xt=!0,vi=null,i!==null&&(ni[ii++]=Xi,ni[ii++]=$i,ni[ii++]=qr,Xi=i.id,$i=i.overflow,qr=s),s=mf(s,f.children),s.flags|=4096,s)}function Lg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),ju(i.return,s,a)}function gf(i,s,a,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=m)}function Ig(i,s,a){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if(Ln(i,s,f.children,a),f=Yt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Lg(i,a,s);else if(i.tag===19)Lg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Gt(Yt,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(a=s.child,m=null;a!==null;)i=a.alternate,i!==null&&bl(i)===null&&(m=a),a=a.sibling;a=m,a===null?(m=s.child,s.child=null):(m=a.sibling,a.sibling=null),gf(s,!1,m,a,_);break;case"backwards":for(a=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&bl(i)===null){s.child=m;break}i=m.sibling,m.sibling=a,a=m,m=i}gf(s,!0,a,null,_);break;case"together":gf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function kl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Ki(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),es|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Ar(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Ar(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function aM(i,s,a){switch(s.tag){case 3:bg(s),Hs();break;case 5:$m(s);break;case 1:kn(s.type)&&yl(s);break;case 4:Yu(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Gt(wl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Gt(Yt,Yt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Dg(i,s,a):(Gt(Yt,Yt.current&1),i=Ki(i,s,a),i!==null?i.sibling:null);Gt(Yt,Yt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return Ig(i,s,a);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Gt(Yt,Yt.current),f)break;return null;case 22:case 23:return s.lanes=0,Ag(i,s,a)}return Ki(i,s,a)}var Ng,vf,Ug,Fg;Ng=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vf=function(){},Ug=function(i,s,a,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,Qr(Pi.current);var _=null;switch(a){case"input":m=vt(i,m),f=vt(i,f),_=[];break;case"select":m=se({},m,{value:void 0}),f=se({},f,{value:void 0}),_=[];break;case"textarea":m=zt(i,m),f=zt(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=gl)}De(a,f);var T;a=null;for(ie in m)if(!f.hasOwnProperty(ie)&&m.hasOwnProperty(ie)&&m[ie]!=null)if(ie==="style"){var U=m[ie];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?_||(_=[]):(_=_||[]).push(ie,null));for(ie in f){var H=f[ie];if(U=m?.[ie],f.hasOwnProperty(ie)&&H!==U&&(H!=null||U!=null))if(ie==="style")if(U){for(T in U)!U.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in H)H.hasOwnProperty(T)&&U[T]!==H[T]&&(a||(a={}),a[T]=H[T])}else a||(_||(_=[]),_.push(ie,a)),a=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(_=_||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&Wt("scroll",i),_||U===H||(_=[])):(_=_||[]).push(ie,H))}a&&(_=_||[]).push("style",a);var ie=_;(s.updateQueue=ie)&&(s.flags|=4)}},Fg=function(i,s,a,f){a!==f&&(s.flags|=4)};function la(i,s){if(!Xt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function wn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function lM(i,s,a){var f=s.pendingProps;switch(Ou(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(s),null;case 1:return kn(s.type)&&_l(),wn(s),null;case 3:return f=s.stateNode,Xs(),jt(Fn),jt(En),Zu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(El(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,vi!==null&&(Rf(vi),vi=null))),vf(i,s),wn(s),null;case 5:qu(s);var m=Qr(ia.current);if(a=s.type,i!==null&&s.stateNode!=null)Ug(i,s,a,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return wn(s),null}if(i=Qr(Pi.current),El(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[bi]=s,f[Qo]=_,i=(s.mode&1)!==0,a){case"dialog":Wt("cancel",f),Wt("close",f);break;case"iframe":case"object":case"embed":Wt("load",f);break;case"video":case"audio":for(m=0;m<qo.length;m++)Wt(qo[m],f);break;case"source":Wt("error",f);break;case"img":case"image":case"link":Wt("error",f),Wt("load",f);break;case"details":Wt("toggle",f);break;case"input":Je(f,_),Wt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Wt("invalid",f);break;case"textarea":L(f,_),Wt("invalid",f)}De(a,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var U=_[T];T==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&ml(f.textContent,U,i),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&ml(f.textContent,U,i),m=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Wt("scroll",f)}switch(a){case"input":Et(f),Dt(f,_,!0);break;case"textarea":Et(f),J(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=gl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=fe(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(a,{is:f.is}):(i=T.createElement(a),a==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,a),i[bi]=s,i[Qo]=f,Ng(i,s,!1,!1),s.stateNode=i;e:{switch(T=be(a,f),a){case"dialog":Wt("cancel",i),Wt("close",i),m=f;break;case"iframe":case"object":case"embed":Wt("load",i),m=f;break;case"video":case"audio":for(m=0;m<qo.length;m++)Wt(qo[m],i);m=f;break;case"source":Wt("error",i),m=f;break;case"img":case"image":case"link":Wt("error",i),Wt("load",i),m=f;break;case"details":Wt("toggle",i),m=f;break;case"input":Je(i,f),m=vt(i,f),Wt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=se({},f,{value:void 0}),Wt("invalid",i);break;case"textarea":L(i,f),m=zt(i,f),Wt("invalid",i);break;default:m=f}De(a,m),U=m;for(_ in U)if(U.hasOwnProperty(_)){var H=U[_];_==="style"?Ie(i,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&je(i,H)):_==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Ee(i,H):typeof H=="number"&&Ee(i,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Wt("scroll",i):H!=null&&P(i,_,H,T))}switch(a){case"input":Et(i),Dt(i,f,!1);break;case"textarea":Et(i),J(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ce(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?It(i,!!f.multiple,_,!1):f.defaultValue!=null&&It(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=gl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return wn(s),null;case 6:if(i&&s.stateNode!=null)Fg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=Qr(ia.current),Qr(Pi.current),El(s)){if(f=s.stateNode,a=s.memoizedProps,f[bi]=s,(_=f.nodeValue!==a)&&(i=qn,i!==null))switch(i.tag){case 3:ml(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&ml(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[bi]=s,s.stateNode=f}return wn(s),null;case 13:if(jt(Yt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Xt&&Kn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Bm(),Hs(),s.flags|=98560,_=!1;else if(_=El(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[bi]=s}else Hs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wn(s),_=!1}else vi!==null&&(Rf(vi),vi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Yt.current&1)!==0?cn===0&&(cn=3):Df())),s.updateQueue!==null&&(s.flags|=4),wn(s),null);case 4:return Xs(),vf(i,s),i===null&&Ko(s.stateNode.containerInfo),wn(s),null;case 10:return Wu(s.type._context),wn(s),null;case 17:return kn(s.type)&&_l(),wn(s),null;case 19:if(jt(Yt),_=s.memoizedState,_===null)return wn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)la(_,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=bl(i),T!==null){for(s.flags|=128,la(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Gt(Yt,Yt.current&1|2),s.child}i=i.sibling}_.tail!==null&&j()>Ks&&(s.flags|=128,f=!0,la(_,!1),s.lanes=4194304)}else{if(!f)if(i=bl(T),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),la(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Xt)return wn(s),null}else 2*j()-_.renderingStartTime>Ks&&a!==1073741824&&(s.flags|=128,f=!0,la(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(a=_.last,a!==null?a.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=j(),s.sibling=null,a=Yt.current,Gt(Yt,f?a&1|2:a&1),s):(wn(s),null);case 22:case 23:return Pf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Zn&1073741824)!==0&&(wn(s),s.subtreeFlags&6&&(s.flags|=8192)):wn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function cM(i,s){switch(Ou(s),s.tag){case 1:return kn(s.type)&&_l(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Xs(),jt(Fn),jt(En),Zu(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return qu(s),null;case 13:if(jt(Yt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Hs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt(Yt),null;case 4:return Xs(),null;case 10:return Wu(s.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var Ol=!1,An=!1,uM=typeof WeakSet=="function"?WeakSet:Set,We=null;function Ys(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Qt(i,s,f)}else a.current=null}function _f(i,s,a){try{a()}catch(f){Qt(i,s,f)}}var kg=!1;function fM(i,s){if(bu=rl,i=mm(),Su(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,U=-1,H=-1,ie=0,_e=0,ye=i,ge=null;t:for(;;){for(var ze;ye!==a||m!==0&&ye.nodeType!==3||(U=T+m),ye!==_||f!==0&&ye.nodeType!==3||(H=T+f),ye.nodeType===3&&(T+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)ge=ye,ye=ze;for(;;){if(ye===i)break t;if(ge===a&&++ie===m&&(U=T),ge===_&&++_e===f&&(H=T),(ze=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=ze}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pu={focusedElem:i,selectionRange:a},rl=!1,We=s;We!==null;)if(s=We,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,We=i;else for(;We!==null;){s=We;try{var $e=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ke=$e.memoizedProps,tn=$e.memoizedState,Z=s.stateNode,X=Z.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:_i(s.type,Ke),tn);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Qt(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,We=i;break}We=s.return}return $e=kg,kg=!1,$e}function ca(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&_f(s,a,_)}m=m.next}while(m!==f)}}function Bl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function yf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Og(i){var s=i.alternate;s!==null&&(i.alternate=null,Og(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[bi],delete s[Qo],delete s[Nu],delete s[$S],delete s[YS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Bg(i){return i.tag===5||i.tag===3||i.tag===4}function zg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Bg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function xf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=gl));else if(f!==4&&(i=i.child,i!==null))for(xf(i,s,a),i=i.sibling;i!==null;)xf(i,s,a),i=i.sibling}function Sf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Sf(i,s,a),i=i.sibling;i!==null;)Sf(i,s,a),i=i.sibling}var vn=null,yi=!1;function Sr(i,s,a){for(a=a.child;a!==null;)Vg(i,s,a),a=a.sibling}function Vg(i,s,a){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 5:An||Ys(a,s);case 6:var f=vn,m=yi;vn=null,Sr(i,s,a),vn=f,yi=m,vn!==null&&(yi?(i=vn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(yi?(i=vn,a=a.stateNode,i.nodeType===8?Iu(i.parentNode,a):i.nodeType===1&&Iu(i,a),Vo(i)):Iu(vn,a.stateNode));break;case 4:f=vn,m=yi,vn=a.stateNode.containerInfo,yi=!0,Sr(i,s,a),vn=f,yi=m;break;case 0:case 11:case 14:case 15:if(!An&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&_f(a,s,T),m=m.next}while(m!==f)}Sr(i,s,a);break;case 1:if(!An&&(Ys(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Qt(a,s,U)}Sr(i,s,a);break;case 21:Sr(i,s,a);break;case 22:a.mode&1?(An=(f=An)||a.memoizedState!==null,Sr(i,s,a),An=f):Sr(i,s,a);break;default:Sr(i,s,a)}}function Hg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new uM),s.forEach(function(f){var m=xM.bind(null,i,f);a.has(f)||(a.add(f),f.then(m,m))})}}function xi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var m=a[f];try{var _=i,T=s,U=T;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,yi=!1;break e;case 3:vn=U.stateNode.containerInfo,yi=!0;break e;case 4:vn=U.stateNode.containerInfo,yi=!0;break e}U=U.return}if(vn===null)throw Error(t(160));Vg(_,T,m),vn=null,yi=!1;var H=m.alternate;H!==null&&(H.return=null),m.return=null}catch(ie){Qt(m,s,ie)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Gg(s,i),s=s.sibling}function Gg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(xi(s,i),Li(i),f&4){try{ca(3,i,i.return),Bl(3,i)}catch(Ke){Qt(i,i.return,Ke)}try{ca(5,i,i.return)}catch(Ke){Qt(i,i.return,Ke)}}break;case 1:xi(s,i),Li(i),f&512&&a!==null&&Ys(a,a.return);break;case 5:if(xi(s,i),Li(i),f&512&&a!==null&&Ys(a,a.return),i.flags&32){var m=i.stateNode;try{Ee(m,"")}catch(Ke){Qt(i,i.return,Ke)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,T=a!==null?a.memoizedProps:_,U=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&yt(m,_),be(U,T);var ie=be(U,_);for(T=0;T<H.length;T+=2){var _e=H[T],ye=H[T+1];_e==="style"?Ie(m,ye):_e==="dangerouslySetInnerHTML"?je(m,ye):_e==="children"?Ee(m,ye):P(m,_e,ye,ie)}switch(U){case"input":He(m,_);break;case"textarea":w(m,_);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var ze=_.value;ze!=null?It(m,!!_.multiple,ze,!1):ge!==!!_.multiple&&(_.defaultValue!=null?It(m,!!_.multiple,_.defaultValue,!0):It(m,!!_.multiple,_.multiple?[]:"",!1))}m[Qo]=_}catch(Ke){Qt(i,i.return,Ke)}}break;case 6:if(xi(s,i),Li(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(Ke){Qt(i,i.return,Ke)}}break;case 3:if(xi(s,i),Li(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Vo(s.containerInfo)}catch(Ke){Qt(i,i.return,Ke)}break;case 4:xi(s,i),Li(i);break;case 13:xi(s,i),Li(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Tf=j())),f&4&&Hg(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(An=(ie=An)||_e,xi(s,i),An=ie):xi(s,i),Li(i),f&8192){if(ie=i.memoizedState!==null,(i.stateNode.isHidden=ie)&&!_e&&(i.mode&1)!==0)for(We=i,_e=i.child;_e!==null;){for(ye=We=_e;We!==null;){switch(ge=We,ze=ge.child,ge.tag){case 0:case 11:case 14:case 15:ca(4,ge,ge.return);break;case 1:Ys(ge,ge.return);var $e=ge.stateNode;if(typeof $e.componentWillUnmount=="function"){f=ge,a=ge.return;try{s=f,$e.props=s.memoizedProps,$e.state=s.memoizedState,$e.componentWillUnmount()}catch(Ke){Qt(f,a,Ke)}}break;case 5:Ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Xg(ye);continue}}ze!==null?(ze.return=ge,We=ze):Xg(ye)}_e=_e.sibling}e:for(_e=null,ye=i;;){if(ye.tag===5){if(_e===null){_e=ye;try{m=ye.stateNode,ie?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=ye.stateNode,H=ye.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=xe("display",T))}catch(Ke){Qt(i,i.return,Ke)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ie?"":ye.memoizedProps}catch(Ke){Qt(i,i.return,Ke)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:xi(s,i),Li(i),f&4&&Hg(i);break;case 21:break;default:xi(s,i),Li(i)}}function Li(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Bg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Ee(m,""),f.flags&=-33);var _=zg(i);Sf(i,_,m);break;case 3:case 4:var T=f.stateNode.containerInfo,U=zg(i);xf(i,U,T);break;default:throw Error(t(161))}}catch(H){Qt(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function dM(i,s,a){We=i,Wg(i)}function Wg(i,s,a){for(var f=(i.mode&1)!==0;We!==null;){var m=We,_=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||Ol;if(!T){var U=m.alternate,H=U!==null&&U.memoizedState!==null||An;U=Ol;var ie=An;if(Ol=T,(An=H)&&!ie)for(We=m;We!==null;)T=We,H=T.child,T.tag===22&&T.memoizedState!==null?$g(m):H!==null?(H.return=T,We=H):$g(m);for(;_!==null;)We=_,Wg(_),_=_.sibling;We=m,Ol=U,An=ie}jg(i)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,We=_):jg(i)}}function jg(i){for(;We!==null;){var s=We;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||Bl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!An)if(a===null)f.componentDidMount();else{var m=s.elementType===s.type?a.memoizedProps:_i(s.type,a.memoizedProps);f.componentDidUpdate(m,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Xm(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Xm(s,T,a)}break;case 5:var U=s.stateNode;if(a===null&&s.flags&4){a=U;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ie=s.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Vo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&yf(s)}catch(ge){Qt(s,s.return,ge)}}if(s===i){We=null;break}if(a=s.sibling,a!==null){a.return=s.return,We=a;break}We=s.return}}function Xg(i){for(;We!==null;){var s=We;if(s===i){We=null;break}var a=s.sibling;if(a!==null){a.return=s.return,We=a;break}We=s.return}}function $g(i){for(;We!==null;){var s=We;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Bl(4,s)}catch(H){Qt(s,a,H)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(H){Qt(s,m,H)}}var _=s.return;try{yf(s)}catch(H){Qt(s,_,H)}break;case 5:var T=s.return;try{yf(s)}catch(H){Qt(s,T,H)}}}catch(H){Qt(s,s.return,H)}if(s===i){We=null;break}var U=s.sibling;if(U!==null){U.return=s.return,We=U;break}We=s.return}}var hM=Math.ceil,zl=A.ReactCurrentDispatcher,Mf=A.ReactCurrentOwner,oi=A.ReactCurrentBatchConfig,Ct=0,pn=null,rn=null,_n=0,Zn=0,qs=gr(0),cn=0,ua=null,es=0,Vl=0,Ef=0,fa=null,Bn=null,Tf=0,Ks=1/0,Zi=null,Hl=!1,wf=null,Mr=null,Gl=!1,Er=null,Wl=0,da=0,Af=null,jl=-1,Xl=0;function In(){return(Ct&6)!==0?j():jl!==-1?jl:jl=j()}function Tr(i){return(i.mode&1)===0?1:(Ct&2)!==0&&_n!==0?_n&-_n:KS.transition!==null?(Xl===0&&(Xl=Dn()),Xl):(i=St,i!==0||(i=window.event,i=i===void 0?16:qp(i.type)),i)}function Si(i,s,a,f){if(50<da)throw da=0,Af=null,Error(t(185));en(i,a,f),((Ct&2)===0||i!==pn)&&(i===pn&&((Ct&2)===0&&(Vl|=a),cn===4&&wr(i,_n)),zn(i,f),a===1&&Ct===0&&(s.mode&1)===0&&(Ks=j()+500,xl&&_r()))}function zn(i,s){var a=i.callbackNode;jr(i,s);var f=mi(i,i===pn?_n:0);if(f===0)a!==null&&$(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&$(a),s===1)i.tag===0?qS(qg.bind(null,i)):Nm(qg.bind(null,i)),jS(function(){(Ct&6)===0&&_r()}),a=null;else{switch(Vp(f)){case 1:a=Ne;break;case 4:a=Xe;break;case 16:a=Be;break;case 536870912:a=ot;break;default:a=Be}a=i0(a,Yg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Yg(i,s){if(jl=-1,Xl=0,(Ct&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Zs()&&i.callbackNode!==a)return null;var f=mi(i,i===pn?_n:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=$l(i,f);else{s=f;var m=Ct;Ct|=2;var _=Zg();(pn!==i||_n!==s)&&(Zi=null,Ks=j()+500,ns(i,s));do try{gM();break}catch(U){Kg(i,U)}while(!0);Gu(),zl.current=_,Ct=m,rn!==null?s=0:(pn=null,_n=0,s=cn)}if(s!==0){if(s===2&&(m=Ht(i),m!==0&&(f=m,s=Cf(i,m))),s===1)throw a=ua,ns(i,0),wr(i,f),zn(i,j()),a;if(s===6)wr(i,f);else{if(m=i.current.alternate,(f&30)===0&&!pM(m)&&(s=$l(i,f),s===2&&(_=Ht(i),_!==0&&(f=_,s=Cf(i,_))),s===1))throw a=ua,ns(i,0),wr(i,f),zn(i,j()),a;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:is(i,Bn,Zi);break;case 3:if(wr(i,f),(f&130023424)===f&&(s=Tf+500-j(),10<s)){if(mi(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){In(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Lu(is.bind(null,i,Bn,Zi),s);break}is(i,Bn,Zi);break;case 4:if(wr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var T=31-wt(f);_=1<<T,T=s[T],T>m&&(m=T),f&=~_}if(f=m,f=j()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*hM(f/1960))-f,10<f){i.timeoutHandle=Lu(is.bind(null,i,Bn,Zi),f);break}is(i,Bn,Zi);break;case 5:is(i,Bn,Zi);break;default:throw Error(t(329))}}}return zn(i,j()),i.callbackNode===a?Yg.bind(null,i):null}function Cf(i,s){var a=fa;return i.current.memoizedState.isDehydrated&&(ns(i,s).flags|=256),i=$l(i,s),i!==2&&(s=Bn,Bn=a,s!==null&&Rf(s)),i}function Rf(i){Bn===null?Bn=i:Bn.push.apply(Bn,i)}function pM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var m=a[f],_=m.getSnapshot;m=m.value;try{if(!gi(_(),m))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function wr(i,s){for(s&=~Ef,s&=~Vl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-wt(s),f=1<<a;i[a]=-1,s&=~f}}function qg(i){if((Ct&6)!==0)throw Error(t(327));Zs();var s=mi(i,0);if((s&1)===0)return zn(i,j()),null;var a=$l(i,s);if(i.tag!==0&&a===2){var f=Ht(i);f!==0&&(s=f,a=Cf(i,f))}if(a===1)throw a=ua,ns(i,0),wr(i,s),zn(i,j()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,is(i,Bn,Zi),zn(i,j()),null}function bf(i,s){var a=Ct;Ct|=1;try{return i(s)}finally{Ct=a,Ct===0&&(Ks=j()+500,xl&&_r())}}function ts(i){Er!==null&&Er.tag===0&&(Ct&6)===0&&Zs();var s=Ct;Ct|=1;var a=oi.transition,f=St;try{if(oi.transition=null,St=1,i)return i()}finally{St=f,oi.transition=a,Ct=s,(Ct&6)===0&&_r()}}function Pf(){Zn=qs.current,jt(qs)}function ns(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,WS(a)),rn!==null)for(a=rn.return;a!==null;){var f=a;switch(Ou(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&_l();break;case 3:Xs(),jt(Fn),jt(En),Zu();break;case 5:qu(f);break;case 4:Xs();break;case 13:jt(Yt);break;case 19:jt(Yt);break;case 10:Wu(f.type._context);break;case 22:case 23:Pf()}a=a.return}if(pn=i,rn=i=Ar(i.current,null),_n=Zn=s,cn=0,ua=null,Ef=Vl=es=0,Bn=fa=null,Zr!==null){for(s=0;s<Zr.length;s++)if(a=Zr[s],f=a.interleaved,f!==null){a.interleaved=null;var m=f.next,_=a.pending;if(_!==null){var T=_.next;_.next=m,f.next=T}a.pending=f}Zr=null}return i}function Kg(i,s){do{var a=rn;try{if(Gu(),Pl.current=Nl,Dl){for(var f=qt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Dl=!1}if(Jr=0,hn=ln=qt=null,ra=!1,sa=0,Mf.current=null,a===null||a.return===null){cn=1,ua=s,rn=null;break}e:{var _=i,T=a.return,U=a,H=s;if(s=_n,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,_e=U,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ze=Sg(T);if(ze!==null){ze.flags&=-257,Mg(ze,T,U,_,s),ze.mode&1&&xg(_,ie,s),s=ze,H=ie;var $e=s.updateQueue;if($e===null){var Ke=new Set;Ke.add(H),s.updateQueue=Ke}else $e.add(H);break e}else{if((s&1)===0){xg(_,ie,s),Df();break e}H=Error(t(426))}}else if(Xt&&U.mode&1){var tn=Sg(T);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),Mg(tn,T,U,_,s),Vu($s(H,U));break e}}_=H=$s(H,U),cn!==4&&(cn=2),fa===null?fa=[_]:fa.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Z=_g(_,H,s);jm(_,Z);break e;case 1:U=H;var X=_.type,ee=_.stateNode;if((_.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Mr===null||!Mr.has(ee)))){_.flags|=65536,s&=-s,_.lanes|=s;var we=yg(_,U,s);jm(_,we);break e}}_=_.return}while(_!==null)}Jg(a)}catch(Ze){s=Ze,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Zg(){var i=zl.current;return zl.current=Nl,i===null?Nl:i}function Df(){(cn===0||cn===3||cn===2)&&(cn=4),pn===null||(es&268435455)===0&&(Vl&268435455)===0||wr(pn,_n)}function $l(i,s){var a=Ct;Ct|=2;var f=Zg();(pn!==i||_n!==s)&&(Zi=null,ns(i,s));do try{mM();break}catch(m){Kg(i,m)}while(!0);if(Gu(),Ct=a,zl.current=f,rn!==null)throw Error(t(261));return pn=null,_n=0,cn}function mM(){for(;rn!==null;)Qg(rn)}function gM(){for(;rn!==null&&!oe();)Qg(rn)}function Qg(i){var s=n0(i.alternate,i,Zn);i.memoizedProps=i.pendingProps,s===null?Jg(i):rn=s,Mf.current=null}function Jg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=lM(a,s,Zn),a!==null){rn=a;return}}else{if(a=cM(a,s),a!==null){a.flags&=32767,rn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,rn=null;return}}if(s=s.sibling,s!==null){rn=s;return}rn=s=i}while(s!==null);cn===0&&(cn=5)}function is(i,s,a){var f=St,m=oi.transition;try{oi.transition=null,St=1,vM(i,s,a,f)}finally{oi.transition=m,St=f}return null}function vM(i,s,a,f){do Zs();while(Er!==null);if((Ct&6)!==0)throw Error(t(327));a=i.finishedWork;var m=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Mn(i,_),i===pn&&(rn=pn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Gl||(Gl=!0,i0(Be,function(){return Zs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var T=St;St=1;var U=Ct;Ct|=4,Mf.current=null,fM(i,a),Gg(a,i),kS(Pu),rl=!!bu,Pu=bu=null,i.current=a,dM(a),ae(),Ct=U,St=T,oi.transition=_}else i.current=a;if(Gl&&(Gl=!1,Er=i,Wl=m),_=i.pendingLanes,_===0&&(Mr=null),Lt(a.stateNode),zn(i,j()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)m=s[a],f(m.value,{componentStack:m.stack,digest:m.digest});if(Hl)throw Hl=!1,i=wf,wf=null,i;return(Wl&1)!==0&&i.tag!==0&&Zs(),_=i.pendingLanes,(_&1)!==0?i===Af?da++:(da=0,Af=i):da=0,_r(),null}function Zs(){if(Er!==null){var i=Vp(Wl),s=oi.transition,a=St;try{if(oi.transition=null,St=16>i?16:i,Er===null)var f=!1;else{if(i=Er,Er=null,Wl=0,(Ct&6)!==0)throw Error(t(331));var m=Ct;for(Ct|=4,We=i.current;We!==null;){var _=We,T=_.child;if((We.flags&16)!==0){var U=_.deletions;if(U!==null){for(var H=0;H<U.length;H++){var ie=U[H];for(We=ie;We!==null;){var _e=We;switch(_e.tag){case 0:case 11:case 15:ca(8,_e,_)}var ye=_e.child;if(ye!==null)ye.return=_e,We=ye;else for(;We!==null;){_e=We;var ge=_e.sibling,ze=_e.return;if(Og(_e),_e===ie){We=null;break}if(ge!==null){ge.return=ze,We=ge;break}We=ze}}}var $e=_.alternate;if($e!==null){var Ke=$e.child;if(Ke!==null){$e.child=null;do{var tn=Ke.sibling;Ke.sibling=null,Ke=tn}while(Ke!==null)}}We=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,We=T;else e:for(;We!==null;){if(_=We,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ca(9,_,_.return)}var Z=_.sibling;if(Z!==null){Z.return=_.return,We=Z;break e}We=_.return}}var X=i.current;for(We=X;We!==null;){T=We;var ee=T.child;if((T.subtreeFlags&2064)!==0&&ee!==null)ee.return=T,We=ee;else e:for(T=X;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Bl(9,U)}}catch(Ze){Qt(U,U.return,Ze)}if(U===T){We=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,We=we;break e}We=U.return}}if(Ct=m,_r(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Qe,i)}catch{}f=!0}return f}finally{St=a,oi.transition=s}}return!1}function e0(i,s,a){s=$s(a,s),s=_g(i,s,1),i=xr(i,s,1),s=In(),i!==null&&(en(i,1,s),zn(i,s))}function Qt(i,s,a){if(i.tag===3)e0(i,i,a);else for(;s!==null;){if(s.tag===3){e0(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Mr===null||!Mr.has(f))){i=$s(a,i),i=yg(s,i,1),s=xr(s,i,1),i=In(),s!==null&&(en(s,1,i),zn(s,i));break}}s=s.return}}function _M(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=In(),i.pingedLanes|=i.suspendedLanes&a,pn===i&&(_n&a)===a&&(cn===4||cn===3&&(_n&130023424)===_n&&500>j()-Tf?ns(i,0):Ef|=a),zn(i,s)}function t0(i,s){s===0&&((i.mode&1)===0?s=1:(s=xt,xt<<=1,(xt&130023424)===0&&(xt=4194304)));var a=In();i=Yi(i,s),i!==null&&(en(i,s,a),zn(i,a))}function yM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),t0(i,a)}function xM(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(a=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),t0(i,a)}var n0;n0=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Fn.current)On=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return On=!1,aM(i,s,a);On=(i.flags&131072)!==0}else On=!1,Xt&&(s.flags&1048576)!==0&&Um(s,Ml,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;kl(i,s),i=s.pendingProps;var m=Bs(s,En.current);js(s,a),m=ef(null,s,f,i,m,a);var _=tf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,kn(f)?(_=!0,yl(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,$u(s),m.updater=Ul,s.stateNode=m,m._reactInternals=s,lf(s,f,i,a),s=df(null,s,f,!0,_,a)):(s.tag=0,Xt&&_&&ku(s),Ln(null,s,m,a),s=s.child),s;case 16:f=s.elementType;e:{switch(kl(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=MM(f),i=_i(f,i),m){case 0:s=ff(null,s,f,i,a);break e;case 1:s=Rg(null,s,f,i,a);break e;case 11:s=Eg(null,s,f,i,a);break e;case 14:s=Tg(null,s,f,_i(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:_i(f,m),ff(i,s,f,m,a);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:_i(f,m),Rg(i,s,f,m,a);case 3:e:{if(bg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,Wm(i,s),Rl(s,f,null,a);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=$s(Error(t(423)),s),s=Pg(i,s,f,a,m);break e}else if(f!==m){m=$s(Error(t(424)),s),s=Pg(i,s,f,a,m);break e}else for(Kn=mr(s.stateNode.containerInfo.firstChild),qn=s,Xt=!0,vi=null,a=Hm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),f===m){s=Ki(i,s,a);break e}Ln(i,s,f,a)}s=s.child}return s;case 5:return $m(s),i===null&&zu(s),f=s.type,m=s.pendingProps,_=i!==null?i.memoizedProps:null,T=m.children,Du(f,m)?T=null:_!==null&&Du(f,_)&&(s.flags|=32),Cg(i,s),Ln(i,s,T,a),s.child;case 6:return i===null&&zu(s),null;case 13:return Dg(i,s,a);case 4:return Yu(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Gs(s,null,f,a):Ln(i,s,f,a),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:_i(f,m),Eg(i,s,f,m,a);case 7:return Ln(i,s,s.pendingProps,a),s.child;case 8:return Ln(i,s,s.pendingProps.children,a),s.child;case 12:return Ln(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,T=m.value,Gt(wl,f._currentValue),f._currentValue=T,_!==null)if(gi(_.value,T)){if(_.children===m.children&&!Fn.current){s=Ki(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var U=_.dependencies;if(U!==null){T=_.child;for(var H=U.firstContext;H!==null;){if(H.context===f){if(_.tag===1){H=qi(-1,a&-a),H.tag=2;var ie=_.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),ie.pending=H}}_.lanes|=a,H=_.alternate,H!==null&&(H.lanes|=a),ju(_.return,a,s),U.lanes|=a;break}H=H.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),ju(T,a,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Ln(i,s,m.children,a),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,js(s,a),m=ri(m),f=f(m),s.flags|=1,Ln(i,s,f,a),s.child;case 14:return f=s.type,m=_i(f,s.pendingProps),m=_i(f.type,m),Tg(i,s,f,m,a);case 15:return wg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:_i(f,m),kl(i,s),s.tag=1,kn(f)?(i=!0,yl(s)):i=!1,js(s,a),gg(s,f,m),lf(s,f,m,a),df(null,s,f,!0,i,a);case 19:return Ig(i,s,a);case 22:return Ag(i,s,a)}throw Error(t(156,s.tag))};function i0(i,s){return C(i,s)}function SM(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,a,f){return new SM(i,s,a,f)}function Lf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function MM(i){if(typeof i=="function")return Lf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===re)return 11;if(i===he)return 14}return 2}function Ar(i,s){var a=i.alternate;return a===null?(a=ai(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Yl(i,s,a,f,m,_){var T=2;if(f=i,typeof i=="function")Lf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case F:return rs(a.children,m,_,s);case B:T=8,m|=8;break;case b:return i=ai(12,a,s,m|2),i.elementType=b,i.lanes=_,i;case te:return i=ai(13,a,s,m),i.elementType=te,i.lanes=_,i;case ne:return i=ai(19,a,s,m),i.elementType=ne,i.lanes=_,i;case Y:return ql(a,m,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:T=10;break e;case k:T=9;break e;case re:T=11;break e;case he:T=14;break e;case le:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(T,a,s,m),s.elementType=i,s.type=f,s.lanes=_,s}function rs(i,s,a,f){return i=ai(7,i,f,s),i.lanes=a,i}function ql(i,s,a,f){return i=ai(22,i,f,s),i.elementType=Y,i.lanes=a,i.stateNode={isHidden:!1},i}function If(i,s,a){return i=ai(6,i,null,s),i.lanes=a,i}function Nf(i,s,a){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function EM(i,s,a,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Uf(i,s,a,f,m,_,T,U,H){return i=new EM(i,s,a,U,H),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(_),i}function TM(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function r0(i){if(!i)return vr;i=i._reactInternals;e:{if(Gi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(kn(a))return Lm(i,a,s)}return s}function s0(i,s,a,f,m,_,T,U,H){return i=Uf(a,f,!0,i,m,_,T,U,H),i.context=r0(null),a=i.current,f=In(),m=Tr(a),_=qi(f,m),_.callback=s??null,xr(a,_,m),i.current.lanes=m,en(i,m,f),zn(i,f),i}function Kl(i,s,a,f){var m=s.current,_=In(),T=Tr(m);return a=r0(a),s.context===null?s.context=a:s.pendingContext=a,s=qi(_,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=xr(m,s,T),i!==null&&(Si(i,m,T,_),Cl(i,m,T)),T}function Zl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function o0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Ff(i,s){o0(i,s),(i=i.alternate)&&o0(i,s)}function wM(){return null}var a0=typeof reportError=="function"?reportError:function(i){console.error(i)};function kf(i){this._internalRoot=i}Ql.prototype.render=kf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Kl(i,s,null,null)},Ql.prototype.unmount=kf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ts(function(){Kl(null,i,null,null)}),s[Wi]=null}};function Ql(i){this._internalRoot=i}Ql.prototype.unstable_scheduleHydration=function(i){if(i){var s=Wp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<dr.length&&s!==0&&s<dr[a].priority;a++);dr.splice(a,0,i),a===0&&$p(i)}};function Of(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Jl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function l0(){}function AM(i,s,a,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var ie=Zl(T);_.call(ie)}}var T=s0(s,f,i,0,null,!1,!1,"",l0);return i._reactRootContainer=T,i[Wi]=T.current,Ko(i.nodeType===8?i.parentNode:i),ts(),T}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var ie=Zl(H);U.call(ie)}}var H=Uf(i,0,!1,null,null,!1,!1,"",l0);return i._reactRootContainer=H,i[Wi]=H.current,Ko(i.nodeType===8?i.parentNode:i),ts(function(){Kl(s,H,a,f)}),H}function ec(i,s,a,f,m){var _=a._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var U=m;m=function(){var H=Zl(T);U.call(H)}}Kl(s,T,i,m)}else T=AM(a,s,i,m,f);return Zl(T)}Hp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=an(s.pendingLanes);a!==0&&(Xr(s,a|1),zn(s,j()),(Ct&6)===0&&(Ks=j()+500,_r()))}break;case 13:ts(function(){var f=Yi(i,1);if(f!==null){var m=In();Si(f,i,1,m)}}),Ff(i,1)}},lu=function(i){if(i.tag===13){var s=Yi(i,134217728);if(s!==null){var a=In();Si(s,i,134217728,a)}Ff(i,134217728)}},Gp=function(i){if(i.tag===13){var s=Tr(i),a=Yi(i,s);if(a!==null){var f=In();Si(a,i,s,f)}Ff(i,s)}},Wp=function(){return St},jp=function(i,s){var a=St;try{return St=i,s()}finally{St=a}},Se=function(i,s,a){switch(s){case"input":if(He(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var m=vl(f);if(!m)throw Error(t(90));ht(f),He(f,m)}}}break;case"textarea":w(i,a);break;case"select":s=a.value,s!=null&&It(i,!!a.multiple,s,!1)}},dt=bf,Nt=ts;var CM={usingClientEntryPoint:!1,Events:[Jo,ks,vl,me,qe,bf]},ha={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RM={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=el(i),i===null?null:i.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||wM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Qe=tc.inject(RM),ut=tc}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CM,Vn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(s))throw Error(t(200));return TM(i,s,null,a)},Vn.createRoot=function(i,s){if(!Of(i))throw Error(t(299));var a=!1,f="",m=a0;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Uf(i,1,!1,null,null,a,!1,f,m),i[Wi]=s.current,Ko(i.nodeType===8?i.parentNode:i),new kf(s)},Vn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=el(s),i=i===null?null:i.stateNode,i},Vn.flushSync=function(i){return ts(i)},Vn.hydrate=function(i,s,a){if(!Jl(s))throw Error(t(200));return ec(null,i,s,!0,a)},Vn.hydrateRoot=function(i,s,a){if(!Of(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,m=!1,_="",T=a0;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=s0(s,null,i,1,a??null,m,!1,_,T),i[Wi]=s.current,Ko(i),f)for(i=0;i<f.length;i++)a=f[i],m=a._getVersion,m=m(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,m]:s.mutableSourceEagerHydrationData.push(a,m);return new Ql(s)},Vn.render=function(i,s,a){if(!Jl(s))throw Error(t(200));return ec(null,i,s,!1,a)},Vn.unmountComponentAtNode=function(i){if(!Jl(i))throw Error(t(40));return i._reactRootContainer?(ts(function(){ec(null,null,i,!1,function(){i._reactRootContainer=null,i[Wi]=null})}),!0):!1},Vn.unstable_batchedUpdates=bf,Vn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!Jl(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ec(i,s,a,!1,f)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var g0;function kM(){if(g0)return Vf.exports;g0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Vf.exports=FM(),Vf.exports}var v0;function OM(){if(v0)return nc;v0=1;var n=kM();return nc.createRoot=n.createRoot,nc.hydrateRoot=n.hydrateRoot,nc}var BM=OM();const zM=N_(BM),VM="modulepreload",HM=function(n){return"/"+n},_0={},qh=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let h=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");o=h(t.map(d=>{if(d=HM(d),d in _0)return;_0[d]=!0;const p=d.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":VM,p||(v.as="script"),v.crossOrigin="",v.href=d,u&&v.setAttribute("nonce",u),document.head.appendChild(v),p)return new Promise((x,M)=>{v.addEventListener("load",x),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&l(u.reason);return e().catch(l)})},U_=Ae.createContext(void 0),F_=()=>{const n=Ae.useContext(U_);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},GM=({children:n})=>{const[e,t]=Ae.useState(()=>{if(typeof window<"u"){const o=localStorage.getItem("theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!1});Ae.useEffect(()=>{const o=window.document.documentElement;e?o.classList.add("dark"):o.classList.remove("dark"),localStorage.setItem("theme",e?"dark":"light")},[e]);const r=()=>{t(!e)};return W.jsx(U_.Provider,{value:{isDark:e,toggleTheme:r},children:n})},Kh=Ae.createContext({});function Kc(n){const e=Ae.useRef(null);return e.current===null&&(e.current=n()),e.current}const Zh=typeof window<"u",k_=Zh?Ae.useLayoutEffect:Ae.useEffect,Zc=Ae.createContext(null);function Qh(n,e){n.indexOf(e)===-1&&n.push(e)}function Jh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const or=(n,e,t)=>t>e?e:t<n?n:t;let ep=()=>{};const ar={},O_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function B_(n){return typeof n=="object"&&n!==null}const z_=n=>/^0[^.\s]+$/u.test(n);function tp(n){let e;return()=>(e===void 0&&(e=n()),e)}const di=n=>n,WM=(n,e)=>t=>e(n(t)),Va=(...n)=>n.reduce(WM),Da=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class np{constructor(){this.subscriptions=[]}add(e){return Qh(this.subscriptions,e),()=>Jh(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const c=this.subscriptions[l];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ki=n=>n*1e3,Oi=n=>n/1e3;function V_(n,e){return e?n*(1e3/e):0}const H_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,jM=1e-7,XM=12;function $M(n,e,t,r,o){let l,c,u=0;do c=e+(t-e)/2,l=H_(c,r,o)-n,l>0?t=c:e=c;while(Math.abs(l)>jM&&++u<XM);return c}function Ha(n,e,t,r){if(n===e&&t===r)return di;const o=l=>$M(l,0,1,n,t);return l=>l===0||l===1?l:H_(o(l),e,r)}const G_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,W_=n=>e=>1-n(1-e),j_=Ha(.33,1.53,.69,.99),ip=W_(j_),X_=G_(ip),$_=n=>(n*=2)<1?.5*ip(n):.5*(2-Math.pow(2,-10*(n-1))),rp=n=>1-Math.sin(Math.acos(n)),Y_=W_(rp),q_=G_(rp),YM=Ha(.42,0,1,1),qM=Ha(0,0,.58,1),K_=Ha(.42,0,.58,1),KM=n=>Array.isArray(n)&&typeof n[0]!="number",Z_=n=>Array.isArray(n)&&typeof n[0]=="number",ZM={linear:di,easeIn:YM,easeInOut:K_,easeOut:qM,circIn:rp,circInOut:q_,circOut:Y_,backIn:ip,backInOut:X_,backOut:j_,anticipate:$_},QM=n=>typeof n=="string",y0=n=>{if(Z_(n)){ep(n.length===4);const[e,t,r,o]=n;return Ha(e,t,r,o)}else if(QM(n))return ZM[n];return n},ic=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function JM(n,e){let t=new Set,r=new Set,o=!1,l=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function h(p){c.has(p)&&(d.schedule(p),n()),p(u)}const d={schedule:(p,g=!1,v=!1)=>{const M=v&&o?t:r;return g&&c.add(p),M.has(p)||M.add(p),p},cancel:p=>{r.delete(p),c.delete(p)},process:p=>{if(u=p,o){l=!0;return}o=!0,[t,r]=[r,t],t.forEach(h),t.clear(),o=!1,l&&(l=!1,d.process(p))}};return d}const eE=40;function Q_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,c=ic.reduce((P,A)=>(P[A]=JM(l),P),{}),{setup:u,read:h,resolveKeyframes:d,preUpdate:p,update:g,preRender:v,render:x,postRender:M}=c,E=()=>{const P=ar.useManualTiming?o.timestamp:performance.now();t=!1,ar.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(P-o.timestamp,eE),1)),o.timestamp=P,o.isProcessing=!0,u.process(o),h.process(o),d.process(o),p.process(o),g.process(o),v.process(o),x.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(E))},S=()=>{t=!0,r=!0,o.isProcessing||n(E)};return{schedule:ic.reduce((P,A)=>{const N=c[A];return P[A]=(I,F=!1,B=!1)=>(t||S(),N.schedule(I,F,B)),P},{}),cancel:P=>{for(let A=0;A<ic.length;A++)c[ic[A]].cancel(P)},state:o,steps:c}}const{schedule:$t,cancel:Br,state:yn,steps:Wf}=Q_(typeof requestAnimationFrame<"u"?requestAnimationFrame:di,!0);let Pc;function tE(){Pc=void 0}const Wn={now:()=>(Pc===void 0&&Wn.set(yn.isProcessing||ar.useManualTiming?yn.timestamp:performance.now()),Pc),set:n=>{Pc=n,queueMicrotask(tE)}},J_=n=>e=>typeof e=="string"&&e.startsWith(n),sp=J_("--"),nE=J_("var(--"),op=n=>nE(n)?iE.test(n.split("/*")[0].trim()):!1,iE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Po={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},La={...Po,transform:n=>or(0,1,n)},rc={...Po,default:1},wa=n=>Math.round(n*1e5)/1e5,ap=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rE(n){return n==null}const sE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,lp=(n,e)=>t=>!!(typeof t=="string"&&sE.test(t)&&t.startsWith(n)||e&&!rE(t)&&Object.prototype.hasOwnProperty.call(t,e)),ey=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,c,u]=r.match(ap);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},oE=n=>or(0,255,n),jf={...Po,transform:n=>Math.round(oE(n))},vs={test:lp("rgb","red"),parse:ey("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+jf.transform(n)+", "+jf.transform(e)+", "+jf.transform(t)+", "+wa(La.transform(r))+")"};function aE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Bd={test:lp("#"),parse:aE,transform:vs.transform},Ga=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Nr=Ga("deg"),Bi=Ga("%"),ct=Ga("px"),lE=Ga("vh"),cE=Ga("vw"),x0={...Bi,parse:n=>Bi.parse(n)/100,transform:n=>Bi.transform(n*100)},ho={test:lp("hsl","hue"),parse:ey("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Bi.transform(wa(e))+", "+Bi.transform(wa(t))+", "+wa(La.transform(r))+")"},on={test:n=>vs.test(n)||Bd.test(n)||ho.test(n),parse:n=>vs.test(n)?vs.parse(n):ho.test(n)?ho.parse(n):Bd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?vs.transform(n):ho.transform(n),getAnimatableNone:n=>{const e=on.parse(n);return e.alpha=0,on.transform(e)}},uE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function fE(n){return isNaN(n)&&typeof n=="string"&&(n.match(ap)?.length||0)+(n.match(uE)?.length||0)>0}const ty="number",ny="color",dE="var",hE="var(",S0="${}",pE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ia(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const u=e.replace(pE,h=>(on.test(h)?(r.color.push(l),o.push(ny),t.push(on.parse(h))):h.startsWith(hE)?(r.var.push(l),o.push(dE),t.push(h)):(r.number.push(l),o.push(ty),t.push(parseFloat(h))),++l,S0)).split(S0);return{values:t,split:u,indexes:r,types:o}}function iy(n){return Ia(n).values}function ry(n){const{split:e,types:t}=Ia(n),r=e.length;return o=>{let l="";for(let c=0;c<r;c++)if(l+=e[c],o[c]!==void 0){const u=t[c];u===ty?l+=wa(o[c]):u===ny?l+=on.transform(o[c]):l+=o[c]}return l}}const mE=n=>typeof n=="number"?0:on.test(n)?on.getAnimatableNone(n):n;function gE(n){const e=iy(n);return ry(n)(e.map(mE))}const zr={test:fE,parse:iy,createTransformer:ry,getAnimatableNone:gE};function Xf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function vE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,c=0;if(!e)o=l=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,h=2*t-u;o=Xf(h,u,n+1/3),l=Xf(h,u,n),c=Xf(h,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:r}}function zc(n,e){return t=>t>0?e:n}const Kt=(n,e,t)=>n+(e-n)*t,$f=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},_E=[Bd,vs,ho],yE=n=>_E.find(e=>e.test(n));function M0(n){const e=yE(n);if(!e)return!1;let t=e.parse(n);return e===ho&&(t=vE(t)),t}const E0=(n,e)=>{const t=M0(n),r=M0(e);if(!t||!r)return zc(n,e);const o={...t};return l=>(o.red=$f(t.red,r.red,l),o.green=$f(t.green,r.green,l),o.blue=$f(t.blue,r.blue,l),o.alpha=Kt(t.alpha,r.alpha,l),vs.transform(o))},zd=new Set(["none","hidden"]);function xE(n,e){return zd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function SE(n,e){return t=>Kt(n,e,t)}function cp(n){return typeof n=="number"?SE:typeof n=="string"?op(n)?zc:on.test(n)?E0:TE:Array.isArray(n)?sy:typeof n=="object"?on.test(n)?E0:ME:zc}function sy(n,e){const t=[...n],r=t.length,o=n.map((l,c)=>cp(l)(l,e[c]));return l=>{for(let c=0;c<r;c++)t[c]=o[c](l);return t}}function ME(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=cp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function EE(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],c=n.indexes[l][r[l]],u=n.values[c]??0;t[o]=u,r[l]++}return t}const TE=(n,e)=>{const t=zr.createTransformer(e),r=Ia(n),o=Ia(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?zd.has(n)&&!o.values.length||zd.has(e)&&!r.values.length?xE(n,e):Va(sy(EE(r,o),o.values),t):zc(n,e)};function oy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Kt(n,e,t):cp(n)(n,e)}const wE=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>$t.update(e,t),stop:()=>Br(e),now:()=>yn.isProcessing?yn.timestamp:Wn.now()}},ay=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Vc=2e4;function up(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Vc;)e+=t,r=n.next(e);return e>=Vc?1/0:e}function AE(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(up(r),Vc);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:Oi(o)}}const CE=5;function ly(n,e,t){const r=Math.max(e-CE,0);return V_(t-n(r),e-r)}const Jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Yf=.001;function RE({duration:n=Jt.duration,bounce:e=Jt.bounce,velocity:t=Jt.velocity,mass:r=Jt.mass}){let o,l,c=1-e;c=or(Jt.minDamping,Jt.maxDamping,c),n=or(Jt.minDuration,Jt.maxDuration,Oi(n)),c<1?(o=d=>{const p=d*c,g=p*n,v=p-t,x=Vd(d,c),M=Math.exp(-g);return Yf-v/x*M},l=d=>{const g=d*c*n,v=g*t+t,x=Math.pow(c,2)*Math.pow(d,2)*n,M=Math.exp(-g),E=Vd(Math.pow(d,2),c);return(-o(d)+Yf>0?-1:1)*((v-x)*M)/E}):(o=d=>{const p=Math.exp(-d*n),g=(d-t)*n+1;return-Yf+p*g},l=d=>{const p=Math.exp(-d*n),g=(t-d)*(n*n);return p*g});const u=5/n,h=PE(o,l,u);if(n=ki(n),isNaN(h))return{stiffness:Jt.stiffness,damping:Jt.damping,duration:n};{const d=Math.pow(h,2)*r;return{stiffness:d,damping:c*2*Math.sqrt(r*d),duration:n}}}const bE=12;function PE(n,e,t){let r=t;for(let o=1;o<bE;o++)r=r-n(r)/e(r);return r}function Vd(n,e){return n*Math.sqrt(1-e*e)}const DE=["duration","bounce"],LE=["stiffness","damping","mass"];function T0(n,e){return e.some(t=>n[t]!==void 0)}function IE(n){let e={velocity:Jt.velocity,stiffness:Jt.stiffness,damping:Jt.damping,mass:Jt.mass,isResolvedFromDuration:!1,...n};if(!T0(n,LE)&&T0(n,DE))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*or(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Jt.mass,stiffness:o,damping:l}}else{const t=RE(n);e={...e,...t,mass:Jt.mass},e.isResolvedFromDuration=!0}return e}function Hc(n=Jt.visualDuration,e=Jt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:l},{stiffness:h,damping:d,mass:p,duration:g,velocity:v,isResolvedFromDuration:x}=IE({...t,velocity:-Oi(t.velocity||0)}),M=v||0,E=d/(2*Math.sqrt(h*p)),S=c-l,y=Oi(Math.sqrt(h/p)),D=Math.abs(S)<5;r||(r=D?Jt.restSpeed.granular:Jt.restSpeed.default),o||(o=D?Jt.restDelta.granular:Jt.restDelta.default);let P;if(E<1){const N=Vd(y,E);P=I=>{const F=Math.exp(-E*y*I);return c-F*((M+E*y*S)/N*Math.sin(N*I)+S*Math.cos(N*I))}}else if(E===1)P=N=>c-Math.exp(-y*N)*(S+(M+y*S)*N);else{const N=y*Math.sqrt(E*E-1);P=I=>{const F=Math.exp(-E*y*I),B=Math.min(N*I,300);return c-F*((M+E*y*S)*Math.sinh(B)+N*S*Math.cosh(B))/N}}const A={calculatedDuration:x&&g||null,next:N=>{const I=P(N);if(x)u.done=N>=g;else{let F=N===0?M:0;E<1&&(F=N===0?ki(M):ly(P,N,I));const B=Math.abs(F)<=r,b=Math.abs(c-I)<=o;u.done=B&&b}return u.value=u.done?c:I,u},toString:()=>{const N=Math.min(up(A),Vc),I=ay(F=>A.next(N*F).value,N,30);return N+"ms "+I},toTransition:()=>{}};return A}Hc.applyToOptions=n=>{const e=AE(n,100,Hc);return n.ease=e.ease,n.duration=ki(e.duration),n.type="keyframes",n};function Hd({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:c,min:u,max:h,restDelta:d=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},x=B=>u!==void 0&&B<u||h!==void 0&&B>h,M=B=>u===void 0?h:h===void 0||Math.abs(u-B)<Math.abs(h-B)?u:h;let E=t*e;const S=g+E,y=c===void 0?S:c(S);y!==S&&(E=y-g);const D=B=>-E*Math.exp(-B/r),P=B=>y+D(B),A=B=>{const b=D(B),R=P(B);v.done=Math.abs(b)<=d,v.value=v.done?y:R};let N,I;const F=B=>{x(v.value)&&(N=B,I=Hc({keyframes:[v.value,M(v.value)],velocity:ly(P,B,v.value),damping:o,stiffness:l,restDelta:d,restSpeed:p}))};return F(0),{calculatedDuration:null,next:B=>{let b=!1;return!I&&N===void 0&&(b=!0,A(B),F(B)),N!==void 0&&B>=N?I.next(B-N):(!b&&A(B),v)}}}function NE(n,e,t){const r=[],o=t||ar.mix||oy,l=n.length-1;for(let c=0;c<l;c++){let u=o(n[c],n[c+1]);if(e){const h=Array.isArray(e)?e[c]||di:e;u=Va(h,u)}r.push(u)}return r}function UE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(ep(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=NE(e,r,o),h=u.length,d=p=>{if(c&&p<n[0])return e[0];let g=0;if(h>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const v=Da(n[g],n[g+1],p);return u[g](v)};return t?p=>d(or(n[0],n[l-1],p)):d}function FE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Da(0,e,r);n.push(Kt(t,1,o))}}function kE(n){const e=[0];return FE(e,n.length-1),e}function OE(n,e){return n.map(t=>t*e)}function BE(n,e){return n.map(()=>e||K_).splice(0,n.length-1)}function Aa({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=KM(r)?r.map(y0):y0(r),l={done:!1,value:e[0]},c=OE(t&&t.length===e.length?t:kE(e),n),u=UE(c,e,{ease:Array.isArray(o)?o:BE(e,o)});return{calculatedDuration:n,next:h=>(l.value=u(h),l.done=h>=n,l)}}const zE=n=>n!==null;function fp(n,{repeat:e,repeatType:t="loop"},r,o=1){const l=n.filter(zE),u=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!u||r===void 0?l[u]:r}const VE={decay:Hd,inertia:Hd,tween:Aa,keyframes:Aa,spring:Hc};function cy(n){typeof n.type=="string"&&(n.type=VE[n.type])}class dp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const HE=n=>n/100;class hp extends dp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==Wn.now()&&this.tick(Wn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;cy(e);const{type:t=Aa,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:c=0}=e;let{keyframes:u}=e;const h=t||Aa;h!==Aa&&typeof u[0]!="number"&&(this.mixKeyframes=Va(HE,oy(u[0],u[1])),u=[0,100]);const d=h({...e,keyframes:u});l==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...u].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=up(d));const{calculatedDuration:p}=d;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=d}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:d=0,keyframes:p,repeat:g,repeatType:v,repeatDelay:x,type:M,onUpdate:E,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-d*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let P=this.currentTime,A=r;if(g){const B=Math.min(this.currentTime,o)/u;let b=Math.floor(B),R=B%1;!R&&B>=1&&(R=1),R===1&&b--,b=Math.min(b,g+1),!!(b%2)&&(v==="reverse"?(R=1-R,x&&(R-=x/u)):v==="mirror"&&(A=c)),P=or(0,1,R)*u}const N=D?{done:!1,value:p[0]}:A.next(P);l&&(N.value=l(N.value));let{done:I}=N;!D&&h!==null&&(I=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return F&&M!==Hd&&(N.value=fp(p,this.options,S,this.speed)),E&&E(N.value),F&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return Oi(this.calculatedDuration)}get time(){return Oi(this.currentTime)}set time(e){e=ki(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Wn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Oi(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=wE,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Wn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function GE(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const _s=n=>n*180/Math.PI,Gd=n=>{const e=_s(Math.atan2(n[1],n[0]));return Wd(e)},WE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Gd,rotateZ:Gd,skewX:n=>_s(Math.atan(n[1])),skewY:n=>_s(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Wd=n=>(n=n%360,n<0&&(n+=360),n),w0=Gd,A0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),C0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),jE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:A0,scaleY:C0,scale:n=>(A0(n)+C0(n))/2,rotateX:n=>Wd(_s(Math.atan2(n[6],n[5]))),rotateY:n=>Wd(_s(Math.atan2(-n[2],n[0]))),rotateZ:w0,rotate:w0,skewX:n=>_s(Math.atan(n[4])),skewY:n=>_s(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function jd(n){return n.includes("scale")?1:0}function Xd(n,e){if(!n||n==="none")return jd(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=jE,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=WE,o=u}if(!o)return jd(e);const l=r[e],c=o[1].split(",").map($E);return typeof l=="function"?l(c):c[l]}const XE=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Xd(t,e)};function $E(n){return parseFloat(n.trim())}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Lo=new Set(Do),R0=n=>n===Po||n===ct,YE=new Set(["x","y","z"]),qE=Do.filter(n=>!YE.has(n));function KE(n){const e=[];return qE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Ms={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Xd(e,"x"),y:(n,{transform:e})=>Xd(e,"y")};Ms.translateX=Ms.x;Ms.translateY=Ms.y;const Es=new Set;let $d=!1,Yd=!1,qd=!1;function uy(){if(Yd){const n=Array.from(Es).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=KE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,c])=>{r.getValue(l)?.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Yd=!1,$d=!1,Es.forEach(n=>n.complete(qd)),Es.clear()}function fy(){Es.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Yd=!0)})}function ZE(){qd=!0,fy(),uy(),qd=!1}class pp{constructor(e,t,r,o,l,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Es.add(this),$d||($d=!0,$t.read(fy),$t.resolveKeyframes(uy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const l=o?.get(),c=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&l===void 0&&o.set(e[0])}GE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Es.delete(this)}cancel(){this.state==="scheduled"&&(Es.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const QE=n=>n.startsWith("--");function JE(n,e,t){QE(e)?n.style.setProperty(e,t):n.style[e]=t}const e1=tp(()=>window.ScrollTimeline!==void 0),t1={};function n1(n,e){const t=tp(n);return()=>t1[e]??t()}const dy=n1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ea=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,b0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ea([0,.65,.55,1]),circOut:Ea([.55,0,1,.45]),backIn:Ea([.31,.01,.66,-.59]),backOut:Ea([.33,1.53,.69,.99])};function hy(n,e){if(n)return typeof n=="function"?dy()?ay(n,e):"ease-out":Z_(n)?Ea(n):Array.isArray(n)?n.map(t=>hy(t,e)||b0.easeOut):b0[n]}function i1(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:c="loop",ease:u="easeOut",times:h}={},d=void 0){const p={[e]:t};h&&(p.offset=h);const g=hy(u,o);Array.isArray(g)&&(p.easing=g);const v={delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"};return d&&(v.pseudoElement=d),n.animate(p,v)}function py(n){return typeof n=="function"&&"applyToOptions"in n}function r1({type:n,...e}){return py(n)&&dy()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class s1 extends dp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:l,allowFlatten:c=!1,finalKeyframe:u,onComplete:h}=e;this.isPseudoElement=!!l,this.allowFlatten=c,this.options=e,ep(typeof e.type!="string");const d=r1(e);this.animation=i1(t,r,o,d,l),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const p=fp(o,this.options,u,this.speed);this.updateMotionValue?this.updateMotionValue(p):JE(t,r,p),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Oi(Number(e))}get time(){return Oi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=ki(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&e1()?(this.animation.timeline=e,di):t(this)}}const my={anticipate:$_,backInOut:X_,circInOut:q_};function o1(n){return n in my}function a1(n){typeof n.ease=="string"&&o1(n.ease)&&(n.ease=my[n.ease])}const P0=10;class l1 extends s1{constructor(e){a1(e),cy(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:l,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new hp({...c,autoplay:!1}),h=ki(this.finishedTime??this.time);t.setWithVelocity(u.sample(h-P0).value,u.sample(h).value,P0),u.stop()}}const D0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(zr.test(n)||n==="0")&&!n.startsWith("url("));function c1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function u1(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],c=D0(o,e),u=D0(l,e);return!c||!u?!1:c1(n)||(t==="spring"||py(t))&&r}function Kd(n){n.duration=0,n.type}const f1=new Set(["opacity","clipPath","filter","transform"]),d1=tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function h1(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:l,type:c}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:d}=e.owner.getProps();return d1()&&t&&f1.has(t)&&(t!=="transform"||!d)&&!h&&!r&&o!=="mirror"&&l!==0&&c!=="inertia"}const p1=40;class m1 extends dp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:c="loop",keyframes:u,name:h,motionValue:d,element:p,...g}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Wn.now();const v={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:c,name:h,motionValue:d,element:p,...g},x=p?.KeyframeResolver||pp;this.keyframeResolver=new x(u,(M,E,S)=>this.onKeyframesResolved(M,E,v,!S),h,d,p),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:l,type:c,velocity:u,delay:h,isHandoff:d,onUpdate:p}=r;this.resolvedAt=Wn.now(),u1(e,l,c,u)||((ar.instantAnimations||!h)&&p?.(fp(e,r,t)),e[0]=e[e.length-1],Kd(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>p1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},x=!d&&h1(v)?new l1({...v,element:v.motionValue.owner.current}):new hp(v);x.finished.then(()=>this.notifyFinished()).catch(di),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ZE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const g1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function v1(n){const e=g1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function gy(n,e,t=1){const[r,o]=v1(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const c=l.trim();return O_(c)?parseFloat(c):c}return op(o)?gy(o,e,t+1):o}function mp(n,e){return n?.[e]??n?.default??n}const vy=new Set(["width","height","top","left","right","bottom",...Do]),_1={test:n=>n==="auto",parse:n=>n},_y=n=>e=>e.test(n),yy=[Po,ct,Bi,Nr,cE,lE,_1],L0=n=>yy.find(_y(n));function y1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||z_(n):!0}const x1=new Set(["brightness","contrast","saturate","opacity"]);function S1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(ap)||[];if(!r)return n;const o=t.replace(r,"");let l=x1.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const M1=/\b([a-z-]*)\(.*?\)/gu,Zd={...zr,getAnimatableNone:n=>{const e=n.match(M1);return e?e.map(S1).join(" "):n}},I0={...Po,transform:Math.round},E1={rotate:Nr,rotateX:Nr,rotateY:Nr,rotateZ:Nr,scale:rc,scaleX:rc,scaleY:rc,scaleZ:rc,skew:Nr,skewX:Nr,skewY:Nr,distance:ct,translateX:ct,translateY:ct,translateZ:ct,x:ct,y:ct,z:ct,perspective:ct,transformPerspective:ct,opacity:La,originX:x0,originY:x0,originZ:ct},gp={borderWidth:ct,borderTopWidth:ct,borderRightWidth:ct,borderBottomWidth:ct,borderLeftWidth:ct,borderRadius:ct,radius:ct,borderTopLeftRadius:ct,borderTopRightRadius:ct,borderBottomRightRadius:ct,borderBottomLeftRadius:ct,width:ct,maxWidth:ct,height:ct,maxHeight:ct,top:ct,right:ct,bottom:ct,left:ct,padding:ct,paddingTop:ct,paddingRight:ct,paddingBottom:ct,paddingLeft:ct,margin:ct,marginTop:ct,marginRight:ct,marginBottom:ct,marginLeft:ct,backgroundPositionX:ct,backgroundPositionY:ct,...E1,zIndex:I0,fillOpacity:La,strokeOpacity:La,numOctaves:I0},T1={...gp,color:on,backgroundColor:on,outlineColor:on,fill:on,stroke:on,borderColor:on,borderTopColor:on,borderRightColor:on,borderBottomColor:on,borderLeftColor:on,filter:Zd,WebkitFilter:Zd},xy=n=>T1[n];function Sy(n,e){let t=xy(n);return t!==Zd&&(t=zr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const w1=new Set(["auto","none","0"]);function A1(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!w1.has(l)&&Ia(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Sy(t,o)}class C1 extends pp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let h=0;h<e.length;h++){let d=e[h];if(typeof d=="string"&&(d=d.trim(),op(d))){const p=gy(d,t.current);p!==void 0&&(e[h]=p),h===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!vy.has(r)||e.length!==2)return;const[o,l]=e,c=L0(o),u=L0(l);if(c!==u)if(R0(c)&&R0(u))for(let h=0;h<e.length;h++){const d=e[h];typeof d=="string"&&(e[h]=parseFloat(d))}else Ms[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||y1(e[o]))&&r.push(o);r.length&&A1(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ms[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,c=r[l];r[l]=Ms[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([u,h])=>{e.getValue(u).set(h)}),this.resolveNoneKeyframes()}}function R1(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=t?.[n]??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const My=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Ey(n){return B_(n)&&"offsetHeight"in n}const N0=30,b1=n=>!isNaN(parseFloat(n));class P1{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=Wn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Wn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=b1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new np);const r=this.events[e].add(t);return e==="change"?()=>{r(),$t.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Wn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>N0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,N0);return V_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ts(n,e){return new P1(n,e)}const{schedule:vp}=Q_(queueMicrotask,!1),wi={x:!1,y:!1};function Ty(){return wi.x||wi.y}function D1(n){return n==="x"||n==="y"?wi[n]?null:(wi[n]=!0,()=>{wi[n]=!1}):wi.x||wi.y?null:(wi.x=wi.y=!0,()=>{wi.x=wi.y=!1})}function wy(n,e){const t=R1(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function U0(n){return!(n.pointerType==="touch"||Ty())}function L1(n,e,t={}){const[r,o,l]=wy(n,t),c=u=>{if(!U0(u))return;const{target:h}=u,d=e(h,u);if(typeof d!="function"||!h)return;const p=g=>{U0(g)&&(d(g),h.removeEventListener("pointerleave",p))};h.addEventListener("pointerleave",p,o)};return r.forEach(u=>{u.addEventListener("pointerenter",c,o)}),l}const Ay=(n,e)=>e?n===e?!0:Ay(n,e.parentElement):!1,_p=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,I1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function N1(n){return I1.has(n.tagName)||n.tabIndex!==-1}const Dc=new WeakSet;function F0(n){return e=>{e.key==="Enter"&&n(e)}}function qf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const U1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=F0(()=>{if(Dc.has(t))return;qf(t,"down");const o=F0(()=>{qf(t,"up")}),l=()=>qf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function k0(n){return _p(n)&&!Ty()}function F1(n,e,t={}){const[r,o,l]=wy(n,t),c=u=>{const h=u.currentTarget;if(!k0(u))return;Dc.add(h);const d=e(h,u),p=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),Dc.has(h)&&Dc.delete(h),k0(x)&&typeof d=="function"&&d(x,{success:M})},g=x=>{p(x,h===window||h===document||t.useGlobalTarget||Ay(h,x.target))},v=x=>{p(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),Ey(u)&&(u.addEventListener("focus",d=>U1(d,o)),!N1(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),l}function Cy(n){return B_(n)&&"ownerSVGElement"in n}function k1(n){return Cy(n)&&n.tagName==="svg"}const bn=n=>!!(n&&n.getVelocity),O1=[...yy,on,zr],B1=n=>O1.find(_y(n)),Qc=Ae.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class z1 extends Ae.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=t.offsetParent,o=Ey(r)&&r.offsetWidth||0,l=this.props.sizeRef.current;l.height=t.offsetHeight||0,l.width=t.offsetWidth||0,l.top=t.offsetTop,l.left=t.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function V1({children:n,isPresent:e,anchorX:t,root:r}){const o=Ae.useId(),l=Ae.useRef(null),c=Ae.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=Ae.useContext(Qc);return Ae.useInsertionEffect(()=>{const{width:h,height:d,top:p,left:g,right:v}=c.current;if(e||!l.current||!h||!d)return;const x=t==="left"?`left: ${g}`:`right: ${v}`;l.current.dataset.motionPopId=o;const M=document.createElement("style");u&&(M.nonce=u);const E=r??document.head;return E.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${d}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{E.contains(M)&&E.removeChild(M)}},[e]),W.jsx(z1,{isPresent:e,childRef:l,sizeRef:c,children:Ae.cloneElement(n,{ref:l})})}const H1=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:c,anchorX:u,root:h})=>{const d=Kc(G1),p=Ae.useId();let g=!0,v=Ae.useMemo(()=>(g=!1,{id:p,initial:e,isPresent:t,custom:o,onExitComplete:x=>{d.set(x,!0);for(const M of d.values())if(!M)return;r&&r()},register:x=>(d.set(x,!1),()=>d.delete(x))}),[t,d,r]);return l&&g&&(v={...v}),Ae.useMemo(()=>{d.forEach((x,M)=>d.set(M,!1))},[t]),Ae.useEffect(()=>{!t&&!d.size&&r&&r()},[t]),c==="popLayout"&&(n=W.jsx(V1,{isPresent:t,anchorX:u,root:h,children:n})),W.jsx(Zc.Provider,{value:v,children:n})};function G1(){return new Map}function Ry(n=!0){const e=Ae.useContext(Zc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Ae.useId();Ae.useEffect(()=>{if(n)return o(l)},[n]);const c=Ae.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,c]:[!0]}const sc=n=>n.key||"";function O0(n){const e=[];return Ae.Children.forEach(n,t=>{Ae.isValidElement(t)&&e.push(t)}),e}const W1=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:c=!1,anchorX:u="left",root:h})=>{const[d,p]=Ry(c),g=Ae.useMemo(()=>O0(n),[n]),v=c&&!d?[]:g.map(sc),x=Ae.useRef(!0),M=Ae.useRef(g),E=Kc(()=>new Map),[S,y]=Ae.useState(g),[D,P]=Ae.useState(g);k_(()=>{x.current=!1,M.current=g;for(let I=0;I<D.length;I++){const F=sc(D[I]);v.includes(F)?E.delete(F):E.get(F)!==!0&&E.set(F,!1)}},[D,v.length,v.join("-")]);const A=[];if(g!==S){let I=[...g];for(let F=0;F<D.length;F++){const B=D[F],b=sc(B);v.includes(b)||(I.splice(F,0,B),A.push(B))}return l==="wait"&&A.length&&(I=A),P(O0(I)),y(g),null}const{forceRender:N}=Ae.useContext(Kh);return W.jsx(W.Fragment,{children:D.map(I=>{const F=sc(I),B=c&&!d?!1:g===D||v.includes(F),b=()=>{if(E.has(F))E.set(F,!0);else return;let R=!0;E.forEach(k=>{k||(R=!1)}),R&&(N?.(),P(M.current),c&&p?.(),r&&r())};return W.jsx(H1,{isPresent:B,initial:!x.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:h,onExitComplete:B?void 0:b,anchorX:u,children:I},F)})})},by=Ae.createContext({strict:!1}),B0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},To={};for(const n in B0)To[n]={isEnabled:e=>B0[n].some(t=>!!e[t])};function j1(n){for(const e in n)To[e]={...To[e],...n[e]}}const X1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||X1.has(n)}let Py=n=>!Gc(n);function $1(n){typeof n=="function"&&(Py=e=>e.startsWith("on")?!Gc(e):n(e))}try{$1(require("@emotion/is-prop-valid").default)}catch{}function Y1(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(Py(o)||t===!0&&Gc(o)||!e&&!Gc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Jc=Ae.createContext({});function eu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Na(n){return typeof n=="string"||Array.isArray(n)}const yp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xp=["initial",...yp];function tu(n){return eu(n.animate)||xp.some(e=>Na(n[e]))}function Dy(n){return!!(tu(n)||n.variants)}function q1(n,e){if(tu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Na(t)?t:void 0,animate:Na(r)?r:void 0}}return n.inherit!==!1?e:{}}function K1(n){const{initial:e,animate:t}=q1(n,Ae.useContext(Jc));return Ae.useMemo(()=>({initial:e,animate:t}),[z0(e),z0(t)])}function z0(n){return Array.isArray(n)?n.join(" "):n}const Ua={};function Z1(n){for(const e in n)Ua[e]=n[e],sp(e)&&(Ua[e].isCSSVariable=!0)}function Ly(n,{layout:e,layoutId:t}){return Lo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Ua[n]||n==="opacity")}const Q1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},J1=Do.length;function eT(n,e,t){let r="",o=!0;for(let l=0;l<J1;l++){const c=Do[l],u=n[c];if(u===void 0)continue;let h=!0;if(typeof u=="number"?h=u===(c.startsWith("scale")?1:0):h=parseFloat(u)===0,!h||t){const d=My(u,gp[c]);if(!h){o=!1;const p=Q1[c]||c;r+=`${p}(${d}) `}t&&(e[c]=d)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Sp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let c=!1,u=!1;for(const h in e){const d=e[h];if(Lo.has(h)){c=!0;continue}else if(sp(h)){o[h]=d;continue}else{const p=My(d,gp[h]);h.startsWith("origin")?(u=!0,l[h]=p):r[h]=p}}if(e.transform||(c||t?r.transform=eT(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:h="50%",originY:d="50%",originZ:p=0}=l;r.transformOrigin=`${h} ${d} ${p}`}}const Mp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Iy(n,e,t){for(const r in e)!bn(e[r])&&!Ly(r,t)&&(n[r]=e[r])}function tT({transformTemplate:n},e){return Ae.useMemo(()=>{const t=Mp();return Sp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function nT(n,e){const t=n.style||{},r={};return Iy(r,t,n),Object.assign(r,tT(n,e)),r}function iT(n,e){const t={},r=nT(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const rT={offset:"stroke-dashoffset",array:"stroke-dasharray"},sT={offset:"strokeDashoffset",array:"strokeDasharray"};function oT(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?rT:sT;n[l.offset]=ct.transform(-r);const c=ct.transform(e),u=ct.transform(t);n[l.array]=`${c} ${u}`}function Ny(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...u},h,d,p){if(Sp(n,u,d),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:v}=n;g.transform&&(v.transform=g.transform,delete g.transform),(v.transform||g.transformOrigin)&&(v.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),v.transform&&(v.transformBox=p?.transformBox??"fill-box",delete g.transformBox),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),r!==void 0&&(g.scale=r),o!==void 0&&oT(g,o,l,c,!1)}const Uy=()=>({...Mp(),attrs:{}}),Fy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function aT(n,e,t,r){const o=Ae.useMemo(()=>{const l=Uy();return Ny(l,e,Fy(r),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};Iy(l,n.style,n),o.style={...l,...o.style}}return o}const lT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ep(n){return typeof n!="string"||n.includes("-")?!1:!!(lT.indexOf(n)>-1||/[A-Z]/u.test(n))}function cT(n,e,t,{latestValues:r},o,l=!1){const u=(Ep(n)?aT:iT)(e,r,o,n),h=Y1(e,typeof n=="string",l),d=n!==Ae.Fragment?{...h,...u,ref:t}:{},{children:p}=e,g=Ae.useMemo(()=>bn(p)?p.get():p,[p]);return Ae.createElement(n,{...d,children:g})}function V0(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Tp(n,e,t,r){if(typeof e=="function"){const[o,l]=V0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=V0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function Lc(n){return bn(n)?n.get():n}function uT({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:fT(t,r,o,n),renderState:e()}}function fT(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Lc(l[v]);let{initial:c,animate:u}=n;const h=tu(n),d=Dy(n);e&&d&&!h&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const g=p?u:c;if(g&&typeof g!="boolean"&&!eu(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const M=Tp(n,v[x]);if(M){const{transitionEnd:E,transition:S,...y}=M;for(const D in y){let P=y[D];if(Array.isArray(P)){const A=p?P.length-1:0;P=P[A]}P!==null&&(o[D]=P)}for(const D in E)o[D]=E[D]}}}return o}const ky=n=>(e,t)=>{const r=Ae.useContext(Jc),o=Ae.useContext(Zc),l=()=>uT(n,e,r,o);return t?l():Kc(l)};function wp(n,e,t){const{style:r}=n,o={};for(const l in r)(bn(r[l])||e.style&&bn(e.style[l])||Ly(l,n)||t?.getValue(l)?.liveStyle!==void 0)&&(o[l]=r[l]);return o}const dT=ky({scrapeMotionValuesFromProps:wp,createRenderState:Mp});function Oy(n,e,t){const r=wp(n,e,t);for(const o in n)if(bn(n[o])||bn(e[o])){const l=Do.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}const hT=ky({scrapeMotionValuesFromProps:Oy,createRenderState:Uy}),pT=Symbol.for("motionComponentSymbol");function po(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function mT(n,e,t){return Ae.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):po(t)&&(t.current=r))},[e])}const Ap=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gT="framerAppearId",By="data-"+Ap(gT),zy=Ae.createContext({});function vT(n,e,t,r,o){const{visualElement:l}=Ae.useContext(Jc),c=Ae.useContext(by),u=Ae.useContext(Zc),h=Ae.useContext(Qc).reducedMotion,d=Ae.useRef(null);r=r||c.renderer,!d.current&&r&&(d.current=r(n,{visualState:e,parent:l,props:t,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:h}));const p=d.current,g=Ae.useContext(zy);p&&!p.projection&&o&&(p.type==="html"||p.type==="svg")&&_T(d.current,t,o,g);const v=Ae.useRef(!1);Ae.useInsertionEffect(()=>{p&&v.current&&p.update(t,u)});const x=t[By],M=Ae.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return k_(()=>{p&&(v.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),M.current&&p.animationState&&p.animationState.animateChanges())}),Ae.useEffect(()=>{p&&(!M.current&&p.animationState&&p.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),M.current=!1),p.enteringChildren=void 0)}),p}function _T(n,e,t,r){const{layoutId:o,layout:l,drag:c,dragConstraints:u,layoutScroll:h,layoutRoot:d,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Vy(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!c||u&&po(u),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:h,layoutRoot:d})}function Vy(n){if(n)return n.options.allowProjection!==!1?n.projection:Vy(n.parent)}function Kf(n,{forwardMotionProps:e=!1}={},t,r){t&&j1(t);const o=Ep(n)?hT:dT;function l(u,h){let d;const p={...Ae.useContext(Qc),...u,layoutId:yT(u)},{isStatic:g}=p,v=K1(u),x=o(u,g);if(!g&&Zh){xT();const M=ST(p);d=M.MeasureLayout,v.visualElement=vT(n,x,p,r,M.ProjectionNode)}return W.jsxs(Jc.Provider,{value:v,children:[d&&v.visualElement?W.jsx(d,{visualElement:v.visualElement,...p}):null,cT(n,u,mT(x,v.visualElement,h),x,g,e)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const c=Ae.forwardRef(l);return c[pT]=n,c}function yT({layoutId:n}){const e=Ae.useContext(Kh).id;return e&&n!==void 0?e+"-"+n:n}function xT(n,e){Ae.useContext(by).strict}function ST(n){const{drag:e,layout:t}=To;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function MT(n,e){if(typeof Proxy>"u")return Kf;const t=new Map,r=(l,c)=>Kf(l,c,n,e),o=(l,c)=>r(l,c);return new Proxy(o,{get:(l,c)=>c==="create"?r:(t.has(c)||t.set(c,Kf(c,void 0,n,e)),t.get(c))})}function Hy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function ET({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function TT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Zf(n){return n===void 0||n===1}function Qd({scale:n,scaleX:e,scaleY:t}){return!Zf(n)||!Zf(e)||!Zf(t)}function ds(n){return Qd(n)||Gy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Gy(n){return H0(n.x)||H0(n.y)}function H0(n){return n&&n!=="0%"}function Wc(n,e,t){const r=n-t,o=e*r;return t+o}function G0(n,e,t,r,o){return o!==void 0&&(n=Wc(n,o,r)),Wc(n,t,r)+e}function Jd(n,e=0,t=1,r,o){n.min=G0(n.min,e,t,r,o),n.max=G0(n.max,e,t,r,o)}function Wy(n,{x:e,y:t}){Jd(n.x,e.translate,e.scale,e.originPoint),Jd(n.y,t.translate,t.scale,t.originPoint)}const W0=.999999999999,j0=1.0000000000001;function wT(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,c;for(let u=0;u<o;u++){l=t[u],c=l.projectionDelta;const{visualElement:h}=l.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&go(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Wy(n,c)),r&&ds(l.latestValues)&&go(n,l.latestValues))}e.x<j0&&e.x>W0&&(e.x=1),e.y<j0&&e.y>W0&&(e.y=1)}function mo(n,e){n.min=n.min+e,n.max=n.max+e}function X0(n,e,t,r,o=.5){const l=Kt(n.min,n.max,o);Jd(n,e,t,l,r)}function go(n,e){X0(n.x,e.x,e.scaleX,e.scale,e.originX),X0(n.y,e.y,e.scaleY,e.scale,e.originY)}function jy(n,e){return Hy(TT(n.getBoundingClientRect(),e))}function AT(n,e,t){const r=jy(n,t),{scroll:o}=e;return o&&(mo(r.x,o.offset.x),mo(r.y,o.offset.y)),r}const $0=()=>({translate:0,scale:1,origin:0,originPoint:0}),vo=()=>({x:$0(),y:$0()}),Y0=()=>({min:0,max:0}),nn=()=>({x:Y0(),y:Y0()}),eh={current:null},Xy={current:!1};function CT(){if(Xy.current=!0,!!Zh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>eh.current=n.matches;n.addEventListener("change",e),e()}else eh.current=!1}const RT=new WeakMap;function bT(n,e,t){for(const r in e){const o=e[r],l=t[r];if(bn(o))n.addValue(r,o);else if(bn(l))n.addValue(r,Ts(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Ts(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const q0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class PT{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Wn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,$t.render(this.render,!1,!0))};const{latestValues:h,renderState:d}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=d,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!l,this.isControllingVariants=tu(t),this.isVariantNode=Dy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in g){const x=g[v];h[v]!==void 0&&bn(x)&&x.set(h[v])}}mount(e){this.current=e,RT.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Xy.current||CT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:eh.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Br(this.notifyUpdate),Br(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Lo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&$t.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in To){const t=To[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):nn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<q0.length;r++){const o=q0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,c=e[l];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=bT(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Ts(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(O_(r)||z_(r))?r=parseFloat(r):!B1(r)&&zr.test(t)&&(r=Sy(e,t)),this.setBaseTarget(e,bn(r)?r.get():r)),bn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const l=Tp(this.props,t,this.presenceContext?.custom);l&&(r=l[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!bn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new np),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){vp.render(this.render)}}class $y extends PT{constructor(){super(...arguments),this.KeyframeResolver=C1}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;bn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Yy(n,{style:e,vars:t},r,o){const l=n.style;let c;for(c in e)l[c]=e[c];o?.applyProjectionStyles(l,r);for(c in t)l.setProperty(c,t[c])}function DT(n){return window.getComputedStyle(n)}class LT extends $y{constructor(){super(...arguments),this.type="html",this.renderInstance=Yy}readValueFromInstance(e,t){if(Lo.has(t))return this.projection?.isProjecting?jd(t):XE(e,t);{const r=DT(e),o=(sp(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return jy(e,t)}build(e,t,r){Sp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return wp(e,t,r)}}const qy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function IT(n,e,t,r){Yy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(qy.has(o)?o:Ap(o),e.attrs[o])}class NT extends $y{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=nn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Lo.has(t)){const r=xy(t);return r&&r.default||0}return t=qy.has(t)?t:Ap(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Oy(e,t,r)}build(e,t,r){Ny(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){IT(e,t,r,o)}mount(e){this.isSVGTag=Fy(e.tagName),super.mount(e)}}const UT=(n,e)=>Ep(n)?new NT(e):new LT(e,{allowProjection:n!==Ae.Fragment});function xo(n,e,t){const r=n.getProps();return Tp(r,e,t!==void 0?t:r.custom,n)}const th=n=>Array.isArray(n);function FT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ts(t))}function kT(n){return th(n)?n[n.length-1]||0:n}function OT(n,e){const t=xo(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const c in l){const u=kT(l[c]);FT(n,c,u)}}function BT(n){return!!(bn(n)&&n.add)}function nh(n,e){const t=n.getValue("willChange");if(BT(t))return t.add(e);if(!t&&ar.WillChange){const r=new ar.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function Ky(n){return n.props[By]}const zT=n=>n!==null;function VT(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(zT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[l]}const HT={type:"spring",stiffness:500,damping:25,restSpeed:10},GT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),WT={type:"keyframes",duration:.8},jT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XT=(n,{keyframes:e})=>e.length>2?WT:Lo.has(n)?n.startsWith("scale")?GT(e[1]):HT:jT;function $T({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:c,repeatDelay:u,from:h,elapsed:d,...p}){return!!Object.keys(p).length}const Cp=(n,e,t,r={},o,l)=>c=>{const u=mp(r,n)||{},h=u.delay||r.delay||0;let{elapsed:d=0}=r;d=d-ki(h);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-d,onUpdate:v=>{e.set(v),u.onUpdate&&u.onUpdate(v)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:l?void 0:o};$T(u)||Object.assign(p,XT(n,p)),p.duration&&(p.duration=ki(p.duration)),p.repeatDelay&&(p.repeatDelay=ki(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Kd(p),p.delay===0&&(g=!0)),(ar.instantAnimations||ar.skipAnimations)&&(g=!0,Kd(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,g&&!l&&e.get()!==void 0){const v=VT(p.keyframes,u);if(v!==void 0){$t.update(()=>{p.onUpdate(v),p.onComplete()});return}}return u.isSync?new hp(p):new m1(p)};function YT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Zy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:c,...u}=e;r&&(l=r);const h=[],d=o&&n.animationState&&n.animationState.getState()[o];for(const p in u){const g=n.getValue(p,n.latestValues[p]??null),v=u[p];if(v===void 0||d&&YT(d,p))continue;const x={delay:t,...mp(l||{},p)},M=g.get();if(M!==void 0&&!g.isAnimating&&!Array.isArray(v)&&v===M&&!x.velocity)continue;let E=!1;if(window.MotionHandoffAnimation){const y=Ky(n);if(y){const D=window.MotionHandoffAnimation(y,p,$t);D!==null&&(x.startTime=D,E=!0)}}nh(n,p),g.start(Cp(p,g,v,n.shouldReduceMotion&&vy.has(p)?{type:!1}:x,n,E));const S=g.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{$t.update(()=>{c&&OT(n,c)})}),h}function Qy(n,e,t,r=0,o=1){const l=Array.from(n).sort((d,p)=>d.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(l,c):o===1?l*r:u-l*r}function ih(n,e,t={}){const r=xo(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const l=r?()=>Promise.all(Zy(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:g}=o;return qT(n,e,h,d,p,g,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,d]=u==="beforeChildren"?[l,c]:[c,l];return h().then(()=>d())}else return Promise.all([l(),c(t.delay)])}function qT(n,e,t=0,r=0,o=0,l=1,c){const u=[];for(const h of n.variantChildren)h.notify("AnimationStart",e),u.push(ih(h,e,{...c,delay:t+(typeof r=="function"?0:r)+Qy(n.variantChildren,h,r,o,l)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(u)}function KT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>ih(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=ih(n,e,t);else{const o=typeof e=="function"?xo(n,e,t.custom):e;r=Promise.all(Zy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}function Jy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const ZT=xp.length;function ex(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?ex(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<ZT;t++){const r=xp[t],o=n.props[r];(Na(o)||o===!1)&&(e[r]=o)}return e}const QT=[...yp].reverse(),JT=yp.length;function ew(n){return e=>Promise.all(e.map(({animation:t,options:r})=>KT(n,t,r)))}function tw(n){let e=ew(n),t=K0(),r=!0;const o=h=>(d,p)=>{const g=xo(n,p,h==="exit"?n.presenceContext?.custom:void 0);if(g){const{transition:v,transitionEnd:x,...M}=g;d={...d,...M,...x}}return d};function l(h){e=h(n)}function c(h){const{props:d}=n,p=ex(n.parent)||{},g=[],v=new Set;let x={},M=1/0;for(let S=0;S<JT;S++){const y=QT[S],D=t[y],P=d[y]!==void 0?d[y]:p[y],A=Na(P),N=y===h?D.isActive:null;N===!1&&(M=S);let I=P===p[y]&&P!==d[y]&&A;if(I&&r&&n.manuallyAnimateOnMount&&(I=!1),D.protectedKeys={...x},!D.isActive&&N===null||!P&&!D.prevProp||eu(P)||typeof P=="boolean")continue;const F=nw(D.prevProp,P);let B=F||y===h&&D.isActive&&!I&&A||S>M&&A,b=!1;const R=Array.isArray(P)?P:[P];let k=R.reduce(o(y),{});N===!1&&(k={});const{prevResolvedValues:re={}}=D,te={...re,...k},ne=Y=>{B=!0,v.has(Y)&&(b=!0,v.delete(Y)),D.needsAnimating[Y]=!0;const V=n.getValue(Y);V&&(V.liveStyle=!1)};for(const Y in te){const V=k[Y],ce=re[Y];if(x.hasOwnProperty(Y))continue;let se=!1;th(V)&&th(ce)?se=!Jy(V,ce):se=V!==ce,se?V!=null?ne(Y):v.add(Y):V!==void 0&&v.has(Y)?ne(Y):D.protectedKeys[Y]=!0}D.prevProp=P,D.prevResolvedValues=k,D.isActive&&(x={...x,...k}),r&&n.blockInitialAnimation&&(B=!1);const he=I&&F;B&&(!he||b)&&g.push(...R.map(Y=>{const V={type:y};if(typeof Y=="string"&&r&&!he&&n.manuallyAnimateOnMount&&n.parent){const{parent:ce}=n,se=xo(ce,Y);if(ce.enteringChildren&&se){const{delayChildren:O}=se.transition||{};V.delay=Qy(ce.enteringChildren,n,O)}}return{animation:Y,options:V}}))}if(v.size){const S={};if(typeof d.initial!="boolean"){const y=xo(n,Array.isArray(d.initial)?d.initial[0]:d.initial);y&&y.transition&&(S.transition=y.transition)}v.forEach(y=>{const D=n.getBaseTarget(y),P=n.getValue(y);P&&(P.liveStyle=!0),S[y]=D??null}),g.push({animation:S})}let E=!!g.length;return r&&(d.initial===!1||d.initial===d.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(g):Promise.resolve()}function u(h,d){if(t[h].isActive===d)return Promise.resolve();n.variantChildren?.forEach(g=>g.animationState?.setActive(h,d)),t[h].isActive=d;const p=c(h);for(const g in t)t[g].protectedKeys={};return p}return{animateChanges:c,setActive:u,setAnimateFunction:l,getState:()=>t,reset:()=>{t=K0(),r=!0}}}function nw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Jy(e,n):!1}function ss(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function K0(){return{animate:ss(!0),whileInView:ss(),whileHover:ss(),whileTap:ss(),whileDrag:ss(),whileFocus:ss(),exit:ss()}}class Gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class iw extends Gr{constructor(e){super(e),e.animationState||(e.animationState=tw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();eu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let rw=0;class sw extends Gr{constructor(){super(...arguments),this.id=rw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const ow={animation:{Feature:iw},exit:{Feature:sw}};function Fa(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Wa(n){return{point:{x:n.pageX,y:n.pageY}}}const aw=n=>e=>_p(e)&&n(e,Wa(e));function Ca(n,e,t,r){return Fa(n,e,aw(t),r)}const tx=1e-4,lw=1-tx,cw=1+tx,nx=.01,uw=0-nx,fw=0+nx;function Un(n){return n.max-n.min}function dw(n,e,t){return Math.abs(n-e)<=t}function Z0(n,e,t,r=.5){n.origin=r,n.originPoint=Kt(e.min,e.max,n.origin),n.scale=Un(t)/Un(e),n.translate=Kt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=lw&&n.scale<=cw||isNaN(n.scale))&&(n.scale=1),(n.translate>=uw&&n.translate<=fw||isNaN(n.translate))&&(n.translate=0)}function Ra(n,e,t,r){Z0(n.x,e.x,t.x,r?r.originX:void 0),Z0(n.y,e.y,t.y,r?r.originY:void 0)}function Q0(n,e,t){n.min=t.min+e.min,n.max=n.min+Un(e)}function hw(n,e,t){Q0(n.x,e.x,t.x),Q0(n.y,e.y,t.y)}function J0(n,e,t){n.min=e.min-t.min,n.max=n.min+Un(e)}function ba(n,e,t){J0(n.x,e.x,t.x),J0(n.y,e.y,t.y)}function ui(n){return[n("x"),n("y")]}const ix=({current:n})=>n?n.ownerDocument.defaultView:null,ev=(n,e)=>Math.abs(n-e);function pw(n,e){const t=ev(n.x,e.x),r=ev(n.y,e.y);return Math.sqrt(t**2+r**2)}class rx{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Jf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,M=pw(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!M)return;const{point:E}=v,{timestamp:S}=yn;this.history.push({...E,timestamp:S});const{onStart:y,onMove:D}=this.handlers;x||(y&&y(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Qf(x,this.transformPagePoint),$t.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:M,onSessionEnd:E,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Jf(v.type==="pointercancel"?this.lastMoveEventInfo:Qf(x,this.transformPagePoint),this.history);this.startEvent&&M&&M(v,y),E&&E(v,y)},!_p(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const u=Wa(e),h=Qf(u,this.transformPagePoint),{point:d}=h,{timestamp:p}=yn;this.history=[{...d,timestamp:p}];const{onSessionStart:g}=t;g&&g(e,Jf(h,this.history)),this.removeListeners=Va(Ca(this.contextWindow,"pointermove",this.handlePointerMove),Ca(this.contextWindow,"pointerup",this.handlePointerUp),Ca(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Br(this.updatePoint)}}function Qf(n,e){return e?{point:e(n.point)}:n}function tv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Jf({point:n},e){return{point:n,delta:tv(n,sx(e)),offset:tv(n,mw(e)),velocity:gw(e,.1)}}function mw(n){return n[0]}function sx(n){return n[n.length-1]}function gw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=sx(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ki(e)));)t--;if(!r)return{x:0,y:0};const l=Oi(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const c={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function vw(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Kt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Kt(t,n,r.max):Math.min(n,t)),n}function nv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function _w(n,{top:e,left:t,bottom:r,right:o}){return{x:nv(n.x,t,o),y:nv(n.y,e,r)}}function iv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function yw(n,e){return{x:iv(n.x,e.x),y:iv(n.y,e.y)}}function xw(n,e){let t=.5;const r=Un(n),o=Un(e);return o>r?t=Da(e.min,e.max-r,n.min):r>o&&(t=Da(n.min,n.max-o,e.min)),or(0,1,t)}function Sw(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const rh=.35;function Mw(n=rh){return n===!1?n=0:n===!0&&(n=rh),{x:rv(n,"left","right"),y:rv(n,"top","bottom")}}function rv(n,e,t){return{min:sv(n,e),max:sv(n,t)}}function sv(n,e){return typeof n=="number"?n:n[e]||0}const Ew=new WeakMap;class Tw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=nn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Wa(g).point)},c=(g,v)=>{const{drag:x,dragPropagation:M,onDragStart:E}=this.getProps();if(x&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=D1(x),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ui(y=>{let D=this.getAxisMotionValue(y).get()||0;if(Bi.test(D)){const{projection:P}=this.visualElement;if(P&&P.layout){const A=P.layout.layoutBox[y];A&&(D=Un(A)*(parseFloat(D)/100))}}this.originPoint[y]=D}),E&&$t.postRender(()=>E(g,v)),nh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},u=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:M,onDirectionLock:E,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(M&&this.currentDirection===null){this.currentDirection=ww(y),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&S(g,v)},h=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v,this.stop(g,v),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>ui(g=>this.getAnimationState(g)==="paused"&&this.getAxisMotionValue(g).animation?.play()),{dragSnapToOrigin:p}=this.getProps();this.panSession=new rx(e,{onSessionStart:l,onStart:c,onMove:u,onSessionEnd:h,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:ix(this.visualElement)})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&$t.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!oc(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=vw(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&po(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=_w(r.layoutBox,e):this.constraints=!1,this.elastic=Mw(t),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ui(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=Sw(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!po(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=AT(r,o.root,this.visualElement.getTransformPagePoint());let c=yw(o.layout.layoutBox,l);if(t){const u=t(ET(c));this.hasMutatedConstraints=!!u,u&&(c=Hy(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),h=this.constraints||{},d=ui(p=>{if(!oc(p,t,this.currentDirection))return;let g=h&&h[p]||{};c&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(p,M)});return Promise.all(d).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return nh(this.visualElement,e),r.start(Cp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ui(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ui(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ui(t=>{const{drag:r}=this.getProps();if(!oc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];l.set(e[t]-Kt(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!po(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ui(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const h=u.get();o[c]=xw({min:h,max:h},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ui(c=>{if(!oc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:h,max:d}=this.constraints[c];u.set(Kt(h,d,o[c]))})}addListeners(){if(!this.visualElement.current)return;Ew.set(this.visualElement,this);const e=this.visualElement.current,t=Ca(e,"pointerdown",h=>{const{drag:d,dragListener:p=!0}=this.getProps();d&&p&&this.start(h)}),r=()=>{const{dragConstraints:h}=this.getProps();po(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),$t.read(r);const c=Fa(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:d})=>{this.isDragging&&d&&(ui(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=h[p].translate,g.set(g.get()+h[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),l(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:c=rh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:c,dragMomentum:u}}}function oc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function ww(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Aw extends Gr{constructor(e){super(e),this.removeGroupControls=di,this.removeListeners=di,this.controls=new Tw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||di}unmount(){this.removeGroupControls(),this.removeListeners()}}const ov=n=>(e,t)=>{n&&$t.postRender(()=>n(e,t))};class Cw extends Gr{constructor(){super(...arguments),this.removePointerDownListener=di}onPointerDown(e){this.session=new rx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ix(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:ov(e),onStart:ov(t),onMove:r,onEnd:(l,c)=>{delete this.session,o&&$t.postRender(()=>o(l,c))}}}mount(){this.removePointerDownListener=Ca(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ic={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function av(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ma={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ct.test(n))n=parseFloat(n);else return n;const t=av(n,e.target.x),r=av(n,e.target.y);return`${t}% ${r}%`}},Rw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=zr.parse(n);if(o.length>5)return r;const l=zr.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,h=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=h;const d=Kt(u,h,.5);return typeof o[2+c]=="number"&&(o[2+c]/=d),typeof o[3+c]=="number"&&(o[3+c]/=d),l(o)}};let ed=!1;class bw extends Ae.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;Z1(Pw),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),ed&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Ic.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,{projection:c}=r;return c&&(c.isPresent=l,ed=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||$t.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),vp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;ed=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ox(n){const[e,t]=Ry(),r=Ae.useContext(Kh);return W.jsx(bw,{...n,layoutGroup:r,switchLayoutGroup:Ae.useContext(zy),isPresent:e,safeToRemove:t})}const Pw={borderRadius:{...ma,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ma,borderTopRightRadius:ma,borderBottomLeftRadius:ma,borderBottomRightRadius:ma,boxShadow:Rw};function Dw(n,e,t){const r=bn(n)?n:Ts(n);return r.start(Cp("",r,e,t)),r.animation}const Lw=(n,e)=>n.depth-e.depth;class Iw{constructor(){this.children=[],this.isDirty=!1}add(e){Qh(this.children,e),this.isDirty=!0}remove(e){Jh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Lw),this.isDirty=!1,this.children.forEach(e)}}function Nw(n,e){const t=Wn.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Br(r),n(l-e))};return $t.setup(r,!0),()=>Br(r)}const ax=["TopLeft","TopRight","BottomLeft","BottomRight"],Uw=ax.length,lv=n=>typeof n=="string"?parseFloat(n):n,cv=n=>typeof n=="number"||ct.test(n);function Fw(n,e,t,r,o,l){o?(n.opacity=Kt(0,t.opacity??1,kw(r)),n.opacityExit=Kt(e.opacity??1,0,Ow(r))):l&&(n.opacity=Kt(e.opacity??1,t.opacity??1,r));for(let c=0;c<Uw;c++){const u=`border${ax[c]}Radius`;let h=uv(e,u),d=uv(t,u);if(h===void 0&&d===void 0)continue;h||(h=0),d||(d=0),h===0||d===0||cv(h)===cv(d)?(n[u]=Math.max(Kt(lv(h),lv(d),r),0),(Bi.test(d)||Bi.test(h))&&(n[u]+="%")):n[u]=d}(e.rotate||t.rotate)&&(n.rotate=Kt(e.rotate||0,t.rotate||0,r))}function uv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const kw=lx(0,.5,Y_),Ow=lx(.5,.95,di);function lx(n,e,t){return r=>r<n?0:r>e?1:t(Da(n,e,r))}function fv(n,e){n.min=e.min,n.max=e.max}function li(n,e){fv(n.x,e.x),fv(n.y,e.y)}function dv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function hv(n,e,t,r,o){return n-=e,n=Wc(n,1/t,r),o!==void 0&&(n=Wc(n,1/o,r)),n}function Bw(n,e=0,t=1,r=.5,o,l=n,c=n){if(Bi.test(e)&&(e=parseFloat(e),e=Kt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Kt(l.min,l.max,r);n===l&&(u-=e),n.min=hv(n.min,e,t,u,o),n.max=hv(n.max,e,t,u,o)}function pv(n,e,[t,r,o],l,c){Bw(n,e[t],e[r],e[o],e.scale,l,c)}const zw=["x","scaleX","originX"],Vw=["y","scaleY","originY"];function mv(n,e,t,r){pv(n.x,e,zw,t?t.x:void 0,r?r.x:void 0),pv(n.y,e,Vw,t?t.y:void 0,r?r.y:void 0)}function gv(n){return n.translate===0&&n.scale===1}function cx(n){return gv(n.x)&&gv(n.y)}function vv(n,e){return n.min===e.min&&n.max===e.max}function Hw(n,e){return vv(n.x,e.x)&&vv(n.y,e.y)}function _v(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function ux(n,e){return _v(n.x,e.x)&&_v(n.y,e.y)}function yv(n){return Un(n.x)/Un(n.y)}function xv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class Gw{constructor(){this.members=[]}add(e){Qh(this.members,e),e.scheduleRender()}remove(e){if(Jh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ww(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,c=t?.z||0;if((o||l||c)&&(r=`translate3d(${o}px, ${l}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:d,rotate:p,rotateX:g,rotateY:v,skewX:x,skewY:M}=t;d&&(r=`perspective(${d}px) ${r}`),p&&(r+=`rotate(${p}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,h=n.y.scale*e.y;return(u!==1||h!==1)&&(r+=`scale(${u}, ${h})`),r||"none"}const td=["","X","Y","Z"],jw=1e3;let Xw=0;function nd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function fx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Ky(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",$t,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&fx(r)}function dx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e?.()){this.id=Xw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(qw),this.nodes.forEach(Jw),this.nodes.forEach(eA),this.nodes.forEach(Kw)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new Iw)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new np),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const h=this.eventHandlers.get(c);h&&h.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Cy(c)&&!k1(c),this.instance=c;const{layoutId:u,layout:h,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||u)&&(this.isLayoutDirty=!0),n){let p,g=0;const v=()=>this.root.updateBlockedByResize=!1;$t.read(()=>{g=window.innerWidth}),n(c,()=>{const x=window.innerWidth;x!==g&&(g=x,this.root.updateBlockedByResize=!0,p&&p(),p=Nw(v,250),Ic.hasAnimatedSinceResize&&(Ic.hasAnimatedSinceResize=!1,this.nodes.forEach(Ev)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||h)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||d.getDefaultTransition()||sA,{onLayoutAnimationStart:E,onLayoutAnimationComplete:S}=d.getProps(),y=!this.targetLayout||!ux(this.targetLayout,x),D=!g&&v;if(this.options.layoutRoot||this.resumeFrom||D||g&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const P={...mp(M,"layout"),onPlay:E,onComplete:S};(d.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P),this.setAnimationOrigin(p,D)}else g||Ev(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Br(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(tA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&fx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:u,layout:h}=this.options;if(u===void 0&&!h)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Sv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Qw),this.nodes.forEach($w),this.nodes.forEach(Yw)):this.nodes.forEach(Mv),this.clearAllSnapshots();const u=Wn.now();yn.delta=or(0,1e3/60,u-yn.timestamp),yn.timestamp=u,yn.isProcessing=!0,Wf.update.process(yn),Wf.preRender.process(yn),Wf.render.process(yn),yn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,vp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Zw),this.sharedNodes.forEach(nA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$t.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$t.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Un(this.snapshot.measuredBox.x)&&!Un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=nn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!cx(this.projectionDelta),h=this.getTransformTemplate(),d=h?h(this.latestValues,""):void 0,p=d!==this.prevTransformTemplateValue;c&&this.instance&&(u||ds(this.latestValues)||p)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let h=this.removeElementScroll(u);return c&&(h=this.removeTransform(h)),oA(h),{animationId:this.root.animationId,measuredBox:u,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return nn();const u=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(aA))){const{scroll:d}=this.root;d&&(mo(u.x,d.offset.x),mo(u.y,d.offset.y))}return u}removeElementScroll(c){const u=nn();if(li(u,c),this.scroll?.wasRoot)return u;for(let h=0;h<this.path.length;h++){const d=this.path[h],{scroll:p,options:g}=d;d!==this.root&&p&&g.layoutScroll&&(p.wasRoot&&li(u,c),mo(u.x,p.offset.x),mo(u.y,p.offset.y))}return u}applyTransform(c,u=!1){const h=nn();li(h,c);for(let d=0;d<this.path.length;d++){const p=this.path[d];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&go(h,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ds(p.latestValues)&&go(h,p.latestValues)}return ds(this.latestValues)&&go(h,this.latestValues),h}removeTransform(c){const u=nn();li(u,c);for(let h=0;h<this.path.length;h++){const d=this.path[h];if(!d.instance||!ds(d.latestValues))continue;Qd(d.latestValues)&&d.updateSnapshot();const p=nn(),g=d.measurePageBox();li(p,g),mv(u,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,p)}return ds(this.latestValues)&&mv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==yn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==u;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:g}=this.options;if(!(!this.layout||!(p||g))){if(this.resolvedRelativeTargetAt=yn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),ba(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=nn(),this.targetWithTransforms=nn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),hw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),Wy(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nn(),this.relativeTargetOrigin=nn(),ba(this.relativeTargetOrigin,this.target,v.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Qd(this.parent.latestValues)||Gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const c=this.getLead(),u=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===yn.timestamp&&(h=!1),h)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;li(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,v=this.treeScale.y;wT(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=nn());const{target:x}=c;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(dv(this.prevProjectionDelta.x,this.projectionDelta.x),dv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ra(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==v||!xv(this.projectionDelta.x,this.prevProjectionDelta.x)||!xv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vo(),this.projectionDelta=vo(),this.projectionDeltaWithTransform=vo()}setAnimationOrigin(c,u=!1){const h=this.snapshot,d=h?h.latestValues:{},p={...this.latestValues},g=vo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const v=nn(),x=h?h.source:void 0,M=this.layout?this.layout.source:void 0,E=x!==M,S=this.getStack(),y=!S||S.members.length<=1,D=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(rA));this.animationProgress=0;let P;this.mixTargetDelta=A=>{const N=A/1e3;Tv(g.x,c.x,N),Tv(g.y,c.y,N),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ba(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iA(this.relativeTarget,this.relativeTargetOrigin,v,N),P&&Hw(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=nn()),li(P,this.relativeTarget)),E&&(this.animationValues=p,Fw(p,d,this.latestValues,N,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Br(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$t.update(()=>{Ic.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ts(0)),this.currentAnimation=Dw(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:h,layout:d,latestValues:p}=c;if(!(!u||!h||!d)){if(this!==c&&this.layout&&d&&hx(this.options.animationType,this.layout.layoutBox,d.layoutBox)){h=this.target||nn();const g=Un(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+g;const v=Un(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+v}li(u,h),go(u,p),Ra(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new Gw),this.sharedNodes.get(c).add(u);const d=u.options.initialPromotionConfig;u.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:h}={}){const d=this.getStack();d&&d.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(u=!0),!u)return;const d={};h.z&&nd("z",c,d,this.animationValues);for(let p=0;p<td.length;p++)nd(`rotate${td[p]}`,c,d,this.animationValues),nd(`skew${td[p]}`,c,d,this.animationValues);c.render();for(const p in d)c.setStaticValue(p,d[p]),this.animationValues&&(this.animationValues[p]=d[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=Lc(u?.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=Lc(u?.pointerEvents)||""),this.hasProjected&&!ds(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=d.animationValues||d.latestValues;this.applyTransformsToTarget();let g=Ww(this.projectionDeltaWithTransform,this.treeScale,p);h&&(g=h(p,g)),c.transform=g;const{x:v,y:x}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,d.animationValues?c.opacity=d===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in Ua){if(p[M]===void 0)continue;const{correct:E,applyTo:S,isCSSVariable:y}=Ua[M],D=g==="none"?p[M]:E(p[M],d);if(S){const P=S.length;for(let A=0;A<P;A++)c[S[A]]=D}else y?this.options.visualElement.renderState.vars[M]=D:c[M]=D}this.options.layoutId&&(c.pointerEvents=d===this?Lc(u?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(Sv),this.root.sharedNodes.clear()}}}function $w(n){n.updateLayout()}function Yw(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:o}=n.options,l=e.source!==n.layout.source;o==="size"?ui(p=>{const g=l?e.measuredBox[p]:e.layoutBox[p],v=Un(g);g.min=t[p].min,g.max=g.min+v}):hx(o,e.layoutBox,t)&&ui(p=>{const g=l?e.measuredBox[p]:e.layoutBox[p],v=Un(t[p]);g.max=g.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[p].max=n.relativeTarget[p].min+v)});const c=vo();Ra(c,t,e.layoutBox);const u=vo();l?Ra(u,n.applyTransform(r,!0),e.measuredBox):Ra(u,t,e.layoutBox);const h=!cx(c);let d=!1;if(!n.resumeFrom){const p=n.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:g,layout:v}=p;if(g&&v){const x=nn();ba(x,e.layoutBox,g.layoutBox);const M=nn();ba(M,t,v.layoutBox),ux(x,M)||(d=!0),p.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=x,n.relativeParent=p)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:u,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:d})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function qw(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Kw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Zw(n){n.clearSnapshot()}function Sv(n){n.clearMeasurements()}function Mv(n){n.isLayoutDirty=!1}function Qw(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ev(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Jw(n){n.resolveTargetDelta()}function eA(n){n.calcProjection()}function tA(n){n.resetSkewAndRotation()}function nA(n){n.removeLeadSnapshot()}function Tv(n,e,t){n.translate=Kt(e.translate,0,t),n.scale=Kt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function wv(n,e,t,r){n.min=Kt(e.min,t.min,r),n.max=Kt(e.max,t.max,r)}function iA(n,e,t,r){wv(n.x,e.x,t.x,r),wv(n.y,e.y,t.y,r)}function rA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const sA={duration:.45,ease:[.4,0,.1,1]},Av=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Cv=Av("applewebkit/")&&!Av("chrome/")?Math.round:di;function Rv(n){n.min=Cv(n.min),n.max=Cv(n.max)}function oA(n){Rv(n.x),Rv(n.y)}function hx(n,e,t){return n==="position"||n==="preserve-aspect"&&!dw(yv(e),yv(t),.2)}function aA(n){return n!==n.root&&n.scroll?.wasRoot}const lA=dx({attachResizeListener:(n,e)=>Fa(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),id={current:void 0},px=dx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!id.current){const n=new lA({});n.mount(window),n.setOptions({layoutScroll:!0}),id.current=n}return id.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),cA={pan:{Feature:Cw},drag:{Feature:Aw,ProjectionNode:px,MeasureLayout:ox}};function bv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&$t.postRender(()=>l(e,Wa(e)))}class uA extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=L1(e,(t,r)=>(bv(this.node,r,"Start"),o=>bv(this.node,o,"End"))))}unmount(){}}class fA extends Gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Va(Fa(this.node.current,"focus",()=>this.onFocus()),Fa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Pv(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&$t.postRender(()=>l(e,Wa(e)))}class dA extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=F1(e,(t,r)=>(Pv(this.node,r,"Start"),(o,{success:l})=>Pv(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const sh=new WeakMap,rd=new WeakMap,hA=n=>{const e=sh.get(n.target);e&&e(n)},pA=n=>{n.forEach(hA)};function mA({root:n,...e}){const t=n||document;rd.has(t)||rd.set(t,{});const r=rd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(pA,{root:n,...e})),r[o]}function gA(n,e,t){const r=mA(e);return sh.set(n,t),r.observe(n),()=>{sh.delete(n),r.unobserve(n)}}const vA={some:0,all:1};class _A extends Gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:vA[o]},u=h=>{const{isIntersecting:d}=h;if(this.isInView===d||(this.isInView=d,l&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=d?p:g;v&&v(h)};return gA(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(yA(e,t))&&this.startObserver()}unmount(){}}function yA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const xA={inView:{Feature:_A},tap:{Feature:dA},focus:{Feature:fA},hover:{Feature:uA}},SA={layout:{ProjectionNode:px,MeasureLayout:ox}},MA={...ow,...xA,...cA,...SA},et=MT(MA,UT);function Dv(n){const e=Kc(()=>Ts(n)),{isStatic:t}=Ae.useContext(Qc);if(t){const[,r]=Ae.useState(n);Ae.useEffect(()=>e.on("change",r),[])}return e}/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),TA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Lv=n=>{const e=TA(n);return e.charAt(0).toUpperCase()+e.slice(1)},mx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),wA=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=Ae.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...u},h)=>Ae.createElement("svg",{ref:h,...AA,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:mx("lucide",o),...!l&&!wA(u)&&{"aria-hidden":"true"},...u},[...c.map(([d,p])=>Ae.createElement(d,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=(n,e)=>{const t=Ae.forwardRef(({className:r,...o},l)=>Ae.createElement(CA,{ref:l,iconNode:e,className:mx(`lucide-${EA(Lv(n))}`,`lucide-${n}`,r),...o}));return t.displayName=Lv(n),t};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],bA=Bt("arrow-up",RA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],DA=Bt("circle-alert",PA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],IA=Bt("circle-check-big",LA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],UA=Bt("cloud",NA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],kA=Bt("code-xml",FA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],BA=Bt("code",OA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],VA=Bt("credit-card",zA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],GA=Bt("database",HA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],jA=Bt("download",WA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],$A=Bt("git-branch",XA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Rp=Bt("github",YA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],KA=Bt("heart",qA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],bp=Bt("linkedin",ZA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],jc=Bt("mail",QA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],gx=Bt("map-pin",JA);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],tC=Bt("menu",eC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Iv=Bt("moon",nC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],rC=Bt("palette",iC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],oC=Bt("pen-tool",sC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],vx=Bt("phone",aC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],cC=Bt("rocket",lC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],fC=Bt("send",uC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],hC=Bt("shield-check",dC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],mC=Bt("smartphone",pC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vC=Bt("sparkles",gC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Nv=Bt("sun",_C);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xC=Bt("x",yC);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],MC=Bt("zap",SC),EC=()=>{const[n,e]=Ae.useState(!1),[t,r]=Ae.useState(!1),{isDark:o,toggleTheme:l}=F_();Ae.useEffect(()=>{const h=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const c=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Certificates",href:"#certificates"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],u=h=>{const d=document.querySelector(h);d&&d.scrollIntoView({behavior:"smooth"}),e(!1)};return W.jsx(et.header,{initial:{y:-100},animate:{y:0},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-lg":"bg-transparent"}`,children:W.jsxs("nav",{className:"container mx-auto px-6 py-4",children:[W.jsxs("div",{className:"flex items-center justify-between",children:[W.jsx(et.div,{onClick:()=>u("#home"),whileHover:{scale:1.05},className:"text-2xl font-bold gradient-text",children:"Sankalp Racchewar"}),W.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[c.map(h=>W.jsx(et.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>u(h.href),className:"text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium",children:h.name},h.name)),W.jsx(et.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:l,className:"p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors duration-300",children:o?W.jsx(Nv,{size:20}):W.jsx(Iv,{size:20})})]}),W.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[W.jsx(et.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:l,className:"p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300",children:o?W.jsx(Nv,{size:20}):W.jsx(Iv,{size:20})}),W.jsx(et.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>e(!n),className:"p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300",children:n?W.jsx(xC,{size:24}):W.jsx(tC,{size:24})})]})]}),W.jsx(et.div,{initial:{opacity:0,height:0},animate:{opacity:n?1:0,height:n?"auto":0},className:"md:hidden overflow-hidden",children:W.jsx("div",{className:"py-4 space-y-4",children:c.map(h=>W.jsx(et.button,{whileHover:{x:10},onClick:()=>u(h.href),className:"block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium",children:h.name},h.name))})})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="179",TC=0,Uv=1,wC=2,_x=1,AC=2,ir=3,Vr=0,jn=1,Ni=2,kr=0,So=1,oh=2,Fv=3,kv=4,CC=5,ms=100,RC=101,bC=102,PC=103,DC=104,LC=200,IC=201,NC=202,UC=203,ah=204,lh=205,FC=206,kC=207,OC=208,BC=209,zC=210,VC=211,HC=212,GC=213,WC=214,ch=0,uh=1,fh=2,wo=3,dh=4,hh=5,ph=6,mh=7,yx=0,jC=1,XC=2,Or=0,$C=1,YC=2,qC=3,xx=4,KC=5,ZC=6,QC=7,Sx=300,Ao=301,Co=302,gh=303,vh=304,nu=306,_h=1e3,ys=1001,yh=1002,Ri=1003,JC=1004,ac=1005,Ui=1006,sd=1007,xs=1008,zi=1009,Mx=1010,Ex=1011,ka=1012,Dp=1013,ws=1014,rr=1015,ja=1016,Lp=1017,Ip=1018,Oa=1020,Tx=35902,wx=1021,Ax=1022,Ci=1023,Ba=1026,za=1027,Cx=1028,Np=1029,Rx=1030,Up=1031,Fp=1033,Nc=33776,Uc=33777,Fc=33778,kc=33779,xh=35840,Sh=35841,Mh=35842,Eh=35843,Th=36196,wh=37492,Ah=37496,Ch=37808,Rh=37809,bh=37810,Ph=37811,Dh=37812,Lh=37813,Ih=37814,Nh=37815,Uh=37816,Fh=37817,kh=37818,Oh=37819,Bh=37820,zh=37821,Oc=36492,Vh=36494,Hh=36495,bx=36283,Gh=36284,Wh=36285,jh=36286,eR=3200,tR=3201,Px=0,nR=1,Ur="",fi="srgb",Ro="srgb-linear",Xc="linear",kt="srgb",Qs=7680,Ov=519,iR=512,rR=513,sR=514,Dx=515,oR=516,aR=517,lR=518,cR=519,Bv=35044,zv="300 es",Fi=2e3,$c=2001;class Io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Yc=180/Math.PI;function Xa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function uR(n,e){return(n%e+e)%e}function ad(n,e,t){return(1-t)*n+t*e}function ga(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $a{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,u){let h=r[o+0],d=r[o+1],p=r[o+2],g=r[o+3];const v=l[c+0],x=l[c+1],M=l[c+2],E=l[c+3];if(u===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||h!==v||d!==x||p!==M){let S=1-u;const y=h*v+d*x+p*M+g*E,D=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const N=Math.sqrt(P),I=Math.atan2(N,y*D);S=Math.sin(S*I)/N,u=Math.sin(u*I)/N}const A=u*D;if(h=h*S+v*A,d=d*S+x*A,p=p*S+M*A,g=g*S+E*A,S===1-u){const N=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=N,d*=N,p*=N,g*=N}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,c){const u=r[o],h=r[o+1],d=r[o+2],p=r[o+3],g=l[c],v=l[c+1],x=l[c+2],M=l[c+3];return e[t]=u*M+p*g+h*x-d*v,e[t+1]=h*M+p*v+d*g-u*x,e[t+2]=d*M+p*x+u*v-h*g,e[t+3]=p*M-u*g-h*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(r/2),p=u(o/2),g=u(l/2),v=h(r/2),x=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=v*p*g+d*x*M,this._y=d*x*g-v*p*M,this._z=d*p*M+v*x*g,this._w=d*p*g-v*x*M;break;case"YXZ":this._x=v*p*g+d*x*M,this._y=d*x*g-v*p*M,this._z=d*p*M-v*x*g,this._w=d*p*g+v*x*M;break;case"ZXY":this._x=v*p*g-d*x*M,this._y=d*x*g+v*p*M,this._z=d*p*M+v*x*g,this._w=d*p*g-v*x*M;break;case"ZYX":this._x=v*p*g-d*x*M,this._y=d*x*g+v*p*M,this._z=d*p*M-v*x*g,this._w=d*p*g+v*x*M;break;case"YZX":this._x=v*p*g+d*x*M,this._y=d*x*g+v*p*M,this._z=d*p*M-v*x*g,this._w=d*p*g-v*x*M;break;case"XZY":this._x=v*p*g-d*x*M,this._y=d*x*g-v*p*M,this._z=d*p*M+v*x*g,this._w=d*p*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10],v=r+u+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-h)*x,this._y=(l-d)*x,this._z=(c-o)*x}else if(r>u&&r>g){const x=2*Math.sqrt(1+r-u-g);this._w=(p-h)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(l+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-r-g);this._w=(l-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+g-r-u);this._w=(c-o)/x,this._x=(l+d)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,u=t._x,h=t._y,d=t._z,p=t._w;return this._x=r*p+c*u+o*d-l*h,this._y=o*p+c*h+l*u-r*d,this._z=l*p+c*d+r*h-o*u,this._w=c*p-r*u-o*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let u=c*e._w+r*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const h=1-u*u;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,u),g=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=c*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*o-u*r),p=2*(u*t-l*o),g=2*(l*r-c*t);return this.x=t+h*d+c*g-u*p,this.y=r+h*p+u*d-l*g,this.z=o+h*g+l*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,u=t.y,h=t.z;return this.x=o*h-l*u,this.y=l*c-r*h,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ld=new Q,Vv=new $a;class mt{constructor(e,t,r,o,l,c,u,h,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,h,d)}set(e,t,r,o,l,c,u,h,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=l,p[5]=h,p[6]=r,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[3],h=r[6],d=r[1],p=r[4],g=r[7],v=r[2],x=r[5],M=r[8],E=o[0],S=o[3],y=o[6],D=o[1],P=o[4],A=o[7],N=o[2],I=o[5],F=o[8];return l[0]=c*E+u*D+h*N,l[3]=c*S+u*P+h*I,l[6]=c*y+u*A+h*F,l[1]=d*E+p*D+g*N,l[4]=d*S+p*P+g*I,l[7]=d*y+p*A+g*F,l[2]=v*E+x*D+M*N,l[5]=v*S+x*P+M*I,l[8]=v*y+x*A+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-r*l*p+r*u*h+o*l*d-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=p*c-u*d,v=u*h-p*l,x=d*l-c*h,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*d-p*r)*E,e[2]=(u*r-o*c)*E,e[3]=v*E,e[4]=(p*t-o*h)*E,e[5]=(o*l-u*t)*E,e[6]=x*E,e[7]=(r*h-d*t)*E,e[8]=(c*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,u){const h=Math.cos(l),d=Math.sin(l);return this.set(r*h,r*d,-r*(h*c+d*u)+c+e,-o*d,o*h,-o*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(cd.makeScale(e,t)),this}rotate(e){return this.premultiply(cd.makeRotation(-e)),this}translate(e,t){return this.premultiply(cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new mt;function Lx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fR(){const n=qc("canvas");return n.style.display="block",n}const Hv={};function Mo(n){n in Hv||(Hv[n]=!0,console.warn(n))}function dR(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Gv=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wv=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hR(){const n={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===kt&&(o.r=sr(o.r),o.g=sr(o.g),o.b=sr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=Eo(o.r),o.g=Eo(o.g),o.b=Eo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?Xc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Mo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Mo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ro]:{primaries:e,whitePoint:r,transfer:Xc,toXYZ:Gv,fromXYZ:Wv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:Gv,fromXYZ:Wv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const bt=hR();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Js;class pR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Js===void 0&&(Js=qc("canvas")),Js.width=e.width,Js.height=e.height;const o=Js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=sr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(sr(t[r]/255)*255):t[r]=sr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mR=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?l.push(ud(o[c].image)):l.push(ud(o[c]))}else l=ud(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ud(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gR=0;const fd=new Q;class Xn extends Io{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=ys,o=ys,l=Ui,c=xs,u=Ci,h=zi,d=Xn.DEFAULT_ANISOTROPY,p=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gR++}),this.uuid=Xa(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Sx;Xn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,r=0,o=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,d=h[0],p=h[4],g=h[8],v=h[1],x=h[5],M=h[9],E=h[2],S=h[6],y=h[10];if(Math.abs(p-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,A=(x+1)/2,N=(y+1)/2,I=(p+v)/4,F=(g+E)/4,B=(M+S)/4;return P>A&&P>N?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=I/r,l=F/r):A>N?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=I/o,l=B/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=F/l,o=B/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-p)*(v-p));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-E)/D,this.z=(v-p)/D,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vR extends Io{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Xn(o);this.textures=[];const c=r.count;for(let u=0;u<c;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new kp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends vR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ix extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _R extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=l.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(l,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),cc.subVectors(this.max,va),eo.subVectors(e.a,va),to.subVectors(e.b,va),no.subVectors(e.c,va),Rr.subVectors(to,eo),br.subVectors(no,to),os.subVectors(eo,no);let t=[0,-Rr.z,Rr.y,0,-br.z,br.y,0,-os.z,os.y,Rr.z,0,-Rr.x,br.z,0,-br.x,os.z,0,-os.x,-Rr.y,Rr.x,0,-br.y,br.x,0,-os.y,os.x,0];return!dd(t,eo,to,no,cc)||(t=[1,0,0,0,1,0,0,0,1],!dd(t,eo,to,no,cc))?!1:(uc.crossVectors(Rr,br),t=[uc.x,uc.y,uc.z],dd(t,eo,to,no,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Mi=new Q,lc=new Ya,eo=new Q,to=new Q,no=new Q,Rr=new Q,br=new Q,os=new Q,va=new Q,cc=new Q,uc=new Q,as=new Q;function dd(n,e,t,r,o){for(let l=0,c=n.length-3;l<=c;l+=3){as.fromArray(n,l);const u=o.x*Math.abs(as.x)+o.y*Math.abs(as.y)+o.z*Math.abs(as.z),h=e.dot(as),d=t.dot(as),p=r.dot(as);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const yR=new Ya,_a=new Q,hd=new Q;class iu{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):yR.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(_a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(hd)),this.expandByPoint(_a.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new Q,pd=new Q,fc=new Q,Pr=new Q,md=new Q,dc=new Q,gd=new Q;class Nx{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){pd.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(pd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(fc),u=Pr.dot(this.direction),h=-Pr.dot(fc),d=Pr.lengthSq(),p=Math.abs(1-c*c);let g,v,x,M;if(p>0)if(g=c*h-u,v=c*u-h,M=l*p,g>=0)if(v>=-M)if(v<=M){const E=1/p;g*=E,v*=E,x=g*(g+c*v+2*u)+v*(c*g+v+2*h)+d}else v=l,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*h)+d;else v=-l,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*h)+d;else v<=-M?(g=Math.max(0,-(-c*l+u)),v=g>0?-l:Math.min(Math.max(-l,-h),l),x=-g*g+v*(v+2*h)+d):v<=M?(g=0,v=Math.min(Math.max(-l,-h),l),x=v*(v+2*h)+d):(g=Math.max(0,-(c*l+u)),v=g>0?l:Math.min(Math.max(-l,-h),l),x=-g*g+v*(v+2*h)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*h)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(pd).addScaledVector(fc,v),x}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),o=Ji.dot(Ji)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),u=r-c,h=r+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,u,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(r=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(r=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),p>=0?(l=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),r>h||u>o)||((u>r||r!==r)&&(r=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,r,o,l){md.subVectors(t,e),dc.subVectors(r,e),gd.crossVectors(md,dc);let c=this.direction.dot(gd),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Pr.subVectors(this.origin,e);const h=u*this.direction.dot(dc.crossVectors(Pr,dc));if(h<0)return null;const d=u*this.direction.dot(md.cross(Pr));if(d<0||h+d>c)return null;const p=-u*Pr.dot(gd);return p<0?null:this.at(p/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,r,o,l,c,u,h,d,p,g,v,x,M,E,S){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,u,h,d,p,g,v,x,M,E,S)}set(e,t,r,o,l,c,u,h,d,p,g,v,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=c,y[9]=u,y[13]=h,y[2]=d,y[6]=p,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/io.setFromMatrixColumn(e,0).length(),l=1/io.setFromMatrixColumn(e,1).length(),c=1/io.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),d=Math.sin(o),p=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*p,x=c*g,M=u*p,E=u*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=x+M*d,t[5]=v-E*d,t[9]=-u*h,t[2]=E-v*d,t[6]=M+x*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*p,x=h*g,M=d*p,E=d*g;t[0]=v+E*u,t[4]=M*u-x,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=x*u-M,t[6]=E+v*u,t[10]=c*h}else if(e.order==="ZXY"){const v=h*p,x=h*g,M=d*p,E=d*g;t[0]=v-E*u,t[4]=-c*g,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*p,t[9]=E-v*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const v=c*p,x=c*g,M=u*p,E=u*g;t[0]=h*p,t[4]=M*d-x,t[8]=v*d+E,t[1]=h*g,t[5]=E*d+v,t[9]=x*d-M,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,x=c*d,M=u*h,E=u*d;t[0]=h*p,t[4]=E-v*g,t[8]=M*g+x,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=x*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=c*h,x=c*d,M=u*h,E=u*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=v*g+E,t[5]=c*p,t[9]=x*g-M,t[2]=M*g-x,t[6]=u*p,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xR,e,SR)}lookAt(e,t,r){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Dr.crossVectors(r,Qn),Dr.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Dr.crossVectors(r,Qn)),Dr.normalize(),hc.crossVectors(Qn,Dr),o[0]=Dr.x,o[4]=hc.x,o[8]=Qn.x,o[1]=Dr.y,o[5]=hc.y,o[9]=Qn.y,o[2]=Dr.z,o[6]=hc.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],u=r[4],h=r[8],d=r[12],p=r[1],g=r[5],v=r[9],x=r[13],M=r[2],E=r[6],S=r[10],y=r[14],D=r[3],P=r[7],A=r[11],N=r[15],I=o[0],F=o[4],B=o[8],b=o[12],R=o[1],k=o[5],re=o[9],te=o[13],ne=o[2],he=o[6],le=o[10],Y=o[14],V=o[3],ce=o[7],se=o[11],O=o[15];return l[0]=c*I+u*R+h*ne+d*V,l[4]=c*F+u*k+h*he+d*ce,l[8]=c*B+u*re+h*le+d*se,l[12]=c*b+u*te+h*Y+d*O,l[1]=p*I+g*R+v*ne+x*V,l[5]=p*F+g*k+v*he+x*ce,l[9]=p*B+g*re+v*le+x*se,l[13]=p*b+g*te+v*Y+x*O,l[2]=M*I+E*R+S*ne+y*V,l[6]=M*F+E*k+S*he+y*ce,l[10]=M*B+E*re+S*le+y*se,l[14]=M*b+E*te+S*Y+y*O,l[3]=D*I+P*R+A*ne+N*V,l[7]=D*F+P*k+A*he+N*ce,l[11]=D*B+P*re+A*le+N*se,l[15]=D*b+P*te+A*Y+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],u=e[5],h=e[9],d=e[13],p=e[2],g=e[6],v=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+l*h*g-o*d*g-l*u*v+r*d*v+o*u*x-r*h*x)+E*(+t*h*x-t*d*v+l*c*v-o*c*x+o*d*p-l*h*p)+S*(+t*d*g-t*u*x-l*c*g+r*c*x+l*u*p-r*d*p)+y*(-o*u*p-t*h*g+t*u*v+o*c*g-r*c*v+r*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=e[9],v=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],D=g*S*d-E*v*d+E*h*x-u*S*x-g*h*y+u*v*y,P=M*v*d-p*S*d-M*h*x+c*S*x+p*h*y-c*v*y,A=p*E*d-M*g*d+M*u*x-c*E*x-p*u*y+c*g*y,N=M*g*h-p*E*h-M*u*v+c*E*v+p*u*S-c*g*S,I=t*D+r*P+o*A+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=D*F,e[1]=(E*v*l-g*S*l-E*o*x+r*S*x+g*o*y-r*v*y)*F,e[2]=(u*S*l-E*h*l+E*o*d-r*S*d-u*o*y+r*h*y)*F,e[3]=(g*h*l-u*v*l-g*o*d+r*v*d+u*o*x-r*h*x)*F,e[4]=P*F,e[5]=(p*S*l-M*v*l+M*o*x-t*S*x-p*o*y+t*v*y)*F,e[6]=(M*h*l-c*S*l-M*o*d+t*S*d+c*o*y-t*h*y)*F,e[7]=(c*v*l-p*h*l+p*o*d-t*v*d-c*o*x+t*h*x)*F,e[8]=A*F,e[9]=(M*g*l-p*E*l-M*r*x+t*E*x+p*r*y-t*g*y)*F,e[10]=(c*E*l-M*u*l+M*r*d-t*E*d-c*r*y+t*u*y)*F,e[11]=(p*u*l-c*g*l-p*r*d+t*g*d+c*r*x-t*u*x)*F,e[12]=N*F,e[13]=(p*E*o-M*g*o+M*r*v-t*E*v-p*r*S+t*g*S)*F,e[14]=(M*u*o-c*E*o-M*r*h+t*E*h+c*r*S-t*u*S)*F,e[15]=(c*g*o-p*u*o+p*r*h-t*g*h-c*r*v+t*u*v)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,u=e.y,h=e.z,d=l*c,p=l*u;return this.set(d*c+r,d*u-o*h,d*h+o*u,0,d*u+o*h,p*u+r,p*h-o*c,0,d*h-o*u,p*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,u=t._z,h=t._w,d=l+l,p=c+c,g=u+u,v=l*d,x=l*p,M=l*g,E=c*p,S=c*g,y=u*g,D=h*d,P=h*p,A=h*g,N=r.x,I=r.y,F=r.z;return o[0]=(1-(E+y))*N,o[1]=(x+A)*N,o[2]=(M-P)*N,o[3]=0,o[4]=(x-A)*I,o[5]=(1-(v+y))*I,o[6]=(S+D)*I,o[7]=0,o[8]=(M+P)*F,o[9]=(S-D)*F,o[10]=(1-(v+E))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=io.set(o[0],o[1],o[2]).length();const c=io.set(o[4],o[5],o[6]).length(),u=io.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Ei.copy(this);const d=1/l,p=1/c,g=1/u;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=p,Ei.elements[5]*=p,Ei.elements[6]*=p,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,t.setFromRotationMatrix(Ei),r.x=l,r.y=c,r.z=u,this}makePerspective(e,t,r,o,l,c,u=Fi,h=!1){const d=this.elements,p=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let M,E;if(h)M=l/(c-l),E=c*l/(c-l);else if(u===Fi)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(u===$c)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,c,u=Fi,h=!1){const d=this.elements,p=2/(t-e),g=2/(r-o),v=-(t+e)/(t-e),x=-(r+o)/(r-o);let M,E;if(h)M=1/(c-l),E=c/(c-l);else if(u===Fi)M=-2/(c-l),E=-(c+l)/(c-l);else if(u===$c)M=-1/(c-l),E=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const io=new Q,Ei=new Zt,xR=new Q(0,0,0),SR=new Q(1,1,1),Dr=new Q,hc=new Q,Qn=new Q,jv=new Zt,Xv=new $a;class Vi{constructor(e=0,t=0,r=0,o=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],u=o[8],h=o[1],d=o[5],p=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xv.setFromEuler(this),this.setFromQuaternion(Xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MR=0;const $v=new Q,ro=new $a,er=new Zt,pc=new Q,ya=new Q,ER=new Q,TR=new $a,Yv=new Q(1,0,0),qv=new Q(0,1,0),Kv=new Q(0,0,1),Zv={type:"added"},wR={type:"removed"},so={type:"childadded",child:null},vd={type:"childremoved",child:null};class un extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new Q,t=new Vi,r=new $a,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new mt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(Yv,e)}rotateY(e){return this.rotateOnAxis(qv,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,t){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yv,e)}translateY(e){return this.translateOnAxis(qv,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?pc.copy(e):pc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(ya,pc,this.up):er.lookAt(pc,ya,this.up),this.quaternion.setFromRotationMatrix(er),o&&(er.extractRotation(o.matrixWorld),ro.setFromRotationMatrix(er),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zv),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wR),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zv),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,ER),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,TR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(l(e.materials,this.material[h]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(l(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),v=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),d.length>0&&(r.textures=d),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}un.DEFAULT_UP=new Q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new Q,tr=new Q,_d=new Q,nr=new Q,oo=new Q,ao=new Q,Qv=new Q,yd=new Q,xd=new Q,Sd=new Q,Md=new Ot,Ed=new Ot,Td=new Ot;class Ai{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ti.subVectors(e,t),o.cross(Ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ti.subVectors(o,t),tr.subVectors(r,t),_d.subVectors(e,t);const c=Ti.dot(Ti),u=Ti.dot(tr),h=Ti.dot(_d),d=tr.dot(tr),p=tr.dot(_d),g=c*d-u*u;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(d*h-u*p)*v,M=(c*p-u*h)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,r,o,l,c,u,h){return this.getBarycoord(e,t,r,o,nr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,nr.x),h.addScaledVector(c,nr.y),h.addScaledVector(u,nr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return Md.setScalar(0),Ed.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,r),Td.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Md,l.x),c.addScaledVector(Ed,l.y),c.addScaledVector(Td,l.z),c}static isFrontFacing(e,t,r,o){return Ti.subVectors(r,t),tr.subVectors(e,t),Ti.cross(tr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Ti.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,u;oo.subVectors(o,r),ao.subVectors(l,r),yd.subVectors(e,r);const h=oo.dot(yd),d=ao.dot(yd);if(h<=0&&d<=0)return t.copy(r);xd.subVectors(e,o);const p=oo.dot(xd),g=ao.dot(xd);if(p>=0&&g<=p)return t.copy(o);const v=h*g-p*d;if(v<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(r).addScaledVector(oo,c);Sd.subVectors(e,l);const x=oo.dot(Sd),M=ao.dot(Sd);if(M>=0&&x<=M)return t.copy(l);const E=x*d-h*M;if(E<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(r).addScaledVector(ao,u);const S=p*M-x*g;if(S<=0&&g-p>=0&&x-M>=0)return Qv.subVectors(l,o),u=(g-p)/(g-p+(x-M)),t.copy(o).addScaledVector(Qv,u);const y=1/(S+E+v);return c=E*y,u=v*y,t.copy(r).addScaledVector(oo,c).addScaledVector(ao,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},mc={h:0,s:0,l:0};function wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=uR(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=wd(c,l,e+1/3),this.g=wd(c,l,e),this.b=wd(c,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=Fx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return bt.workingToColorSpace(Rn.copy(this),e),Math.round(Mt(Rn.r*255,0,255))*65536+Math.round(Mt(Rn.g*255,0,255))*256+Math.round(Mt(Rn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Rn.copy(this),t);const r=Rn.r,o=Rn.g,l=Rn.b,c=Math.max(r,o,l),u=Math.min(r,o,l);let h,d;const p=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=p<=.5?g/(c+u):g/(2-c-u),c){case r:h=(o-l)/g+(o<l?6:0);break;case o:h=(l-r)/g+2;break;case l:h=(r-o)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=fi){bt.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,o=Rn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(mc);const r=ad(Lr.h,mc.h,t),o=ad(Lr.s,mc.s,t),l=ad(Lr.l,mc.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new pt;pt.NAMES=Fx;let AR=0;class No extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=So,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=lh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(r.blending=this.blending),this.side!==Vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ah&&(r.blendSrc=this.blendSrc),this.blendDst!==lh&&(r.blendDst=this.blendDst),this.blendEquation!==ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ov&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kx extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new Q,gc=new At;let CR=0;class hi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Bv,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ga(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bv&&(e.usage=this.usage),e}}class Ox extends hi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Bx extends hi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ei extends hi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let RR=0;const ci=new Zt,Ad=new un,lo=new Q,Jn=new Ya,xa=new Ya,gn=new Q;class pi extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lx(e)?Bx:Ox)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ei(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const u=t[l];xa.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(Jn.min,xa.min),Jn.expandByPoint(gn),gn.addVectors(Jn.max,xa.max),Jn.expandByPoint(gn)):(Jn.expandByPoint(xa.min),Jn.expandByPoint(xa.max))}Jn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let l=0,c=t.length;l<c;l++){const u=t[l],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)gn.fromBufferAttribute(u,d),h&&(lo.fromBufferAttribute(e,d),gn.add(lo)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let B=0;B<r.count;B++)u[B]=new Q,h[B]=new Q;const d=new Q,p=new Q,g=new Q,v=new At,x=new At,M=new At,E=new Q,S=new Q;function y(B,b,R){d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,B),x.fromBufferAttribute(l,b),M.fromBufferAttribute(l,R),p.sub(d),g.sub(d),x.sub(v),M.sub(v);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(k),S.copy(g).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(k),u[B].add(E),u[b].add(E),u[R].add(E),h[B].add(S),h[b].add(S),h[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,b=D.length;B<b;++B){const R=D[B],k=R.start,re=R.count;for(let te=k,ne=k+re;te<ne;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const P=new Q,A=new Q,N=new Q,I=new Q;function F(B){N.fromBufferAttribute(o,B),I.copy(N);const b=u[B];P.copy(b),P.sub(N.multiplyScalar(N.dot(b))).normalize(),A.crossVectors(I,b);const k=A.dot(h[B])<0?-1:1;c.setXYZW(B,P.x,P.y,P.z,k)}for(let B=0,b=D.length;B<b;++B){const R=D[B],k=R.start,re=R.count;for(let te=k,ne=k+re;te<ne;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new Q,l=new Q,c=new Q,u=new Q,h=new Q,d=new Q,p=new Q,g=new Q;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,l),g.subVectors(o,l),p.cross(g),u.fromBufferAttribute(r,M),h.fromBufferAttribute(r,E),d.fromBufferAttribute(r,S),u.add(p),h.add(p),d.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,l),g.subVectors(o,l),p.cross(g),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(u,h){const d=u.array,p=u.itemSize,g=u.normalized,v=new d.constructor(h.length*p);let x=0,M=0;for(let E=0,S=h.length;E<S;E++){u.isInterleavedBufferAttribute?x=h[E]*u.data.stride+u.offset:x=h[E]*p;for(let y=0;y<p;y++)v[M++]=d[x++]}return new hi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,r=this.index.array,o=this.attributes;for(const u in o){const h=o[u],d=e(h,r);t.setAttribute(u,d)}const l=this.morphAttributes;for(const u in l){const h=[],d=l[u];for(let p=0,g=d.length;p<g;p++){const v=d[p],x=e(v,r);h.push(x)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const d=r[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];p.push(x.toJSON(e.data))}p.length>0&&(o[h]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const l=e.morphAttributes;for(const d in l){const p=[],g=l[d];for(let v=0,x=g.length;v<x;v++)p.push(g[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jv=new Zt,ls=new Nx,vc=new iu,e_=new Q,_c=new Q,yc=new Q,xc=new Q,Cd=new Q,Sc=new Q,t_=new Q,Mc=new Q;class Pt extends un{constructor(e=new pi,t=new kx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(l&&u){Sc.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const p=u[h],g=l[h];p!==0&&(Cd.fromBufferAttribute(g,e),c?Sc.addScaledVector(Cd,p):Sc.addScaledVector(Cd.sub(t),p))}t.add(Sc)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(l),ls.copy(e.ray).recast(e.near),!(vc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(vc,e_)===null||ls.origin.distanceToSquared(e_)>(e.far-e.near)**2))&&(Jv.copy(l).invert(),ls.copy(e.ray).applyMatrix4(Jv),!(r.boundingBox!==null&&ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,u=l.index,h=l.attributes.position,d=l.attributes.uv,p=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),P=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=P;A<N;A+=3){const I=u.getX(A),F=u.getX(A+1),B=u.getX(A+2);o=Ec(this,y,e,r,d,p,g,I,F,B),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=u.getX(S),P=u.getX(S+1),A=u.getX(S+2);o=Ec(this,c,e,r,d,p,g,D,P,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),P=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,N=P;A<N;A+=3){const I=A,F=A+1,B=A+2;o=Ec(this,y,e,r,d,p,g,I,F,B),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=S,P=S+1,A=S+2;o=Ec(this,c,e,r,d,p,g,D,P,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function bR(n,e,t,r,o,l,c,u){let h;if(e.side===jn?h=r.intersectTriangle(c,l,o,!0,u):h=r.intersectTriangle(o,l,c,e.side===Vr,u),h===null)return null;Mc.copy(u),Mc.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Mc);return d<t.near||d>t.far?null:{distance:d,point:Mc.clone(),object:n}}function Ec(n,e,t,r,o,l,c,u,h,d){n.getVertexPosition(u,_c),n.getVertexPosition(h,yc),n.getVertexPosition(d,xc);const p=bR(n,e,t,r,_c,yc,xc,t_);if(p){const g=new Q;Ai.getBarycoord(t_,_c,yc,xc,g),o&&(p.uv=Ai.getInterpolatedAttribute(o,u,h,d,g,new At)),l&&(p.uv1=Ai.getInterpolatedAttribute(l,u,h,d,g,new At)),c&&(p.normal=Ai.getInterpolatedAttribute(c,u,h,d,g,new Q),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:h,c:d,normal:new Q,materialIndex:0};Ai.getNormal(_c,yc,xc,v.normal),p.face=v,p.barycoord=g}return p}class qa extends pi{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const u=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],p=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new ei(d,3)),this.setAttribute("normal",new ei(p,3)),this.setAttribute("uv",new ei(g,2));function M(E,S,y,D,P,A,N,I,F,B,b){const R=A/F,k=N/B,re=A/2,te=N/2,ne=I/2,he=F+1,le=B+1;let Y=0,V=0;const ce=new Q;for(let se=0;se<le;se++){const O=se*k-te;for(let q=0;q<he;q++){const Oe=q*R-re;ce[E]=Oe*D,ce[S]=O*P,ce[y]=ne,d.push(ce.x,ce.y,ce.z),ce[E]=0,ce[S]=0,ce[y]=I>0?1:-1,p.push(ce.x,ce.y,ce.z),g.push(q/F),g.push(1-se/B),Y+=1}}for(let se=0;se<B;se++)for(let O=0;O<F;O++){const q=v+O+he*se,Oe=v+O+he*(se+1),Le=v+(O+1)+he*(se+1),K=v+(O+1)+he*se;h.push(q,Oe,K),h.push(Oe,Le,K),V+=6}u.addGroup(x,V,b),x+=V,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const r=bo(n[t]);for(const o in r)e[o]=r[o]}return e}function PR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const DR={clone:bo,merge:Nn};var LR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LR,this.fragmentShader=IR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=PR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Vx extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new Q,n_=new At,i_=new At;class Gn extends Vx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,n_,i_),t.subVectors(i_,n_)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(od*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/d,o*=c.width/h,r*=c.height/d}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const co=-90,uo=1;class NR extends un{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(co,uo,e,t);o.layers=this.layers,this.add(o);const l=new Gn(co,uo,e,t);l.layers=this.layers,this.add(l);const c=new Gn(co,uo,e,t);c.layers=this.layers,this.add(c);const u=new Gn(co,uo,e,t);u.layers=this.layers,this.add(u);const h=new Gn(co,uo,e,t);h.layers=this.layers,this.add(h);const d=new Gn(co,uo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,u,h]=t;for(const d of t)this.remove(d);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===$c)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,u,h,d,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,u),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,d),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Hx extends Xn{constructor(e=[],t=Ao,r,o,l,c,u,h,d,p){super(e,t,r,o,l,c,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UR extends As{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Hx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new qa(5,5,5),l=new Hr({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:kr});l.uniforms.tEquirect.value=t;const c=new Pt(o,l),u=t.minFilter;return t.minFilter===xs&&(t.minFilter=Ui),new NR(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Ss extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FR={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=p.position.distanceTo(g.position),x=.02,M=.005;d.inputState.pinching&&v>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(FR)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ss;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class kR extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bd=new Q,OR=new Q,BR=new mt;class hs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=bd.subVectors(r,t).cross(OR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(bd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||BR.getNormalMatrix(e),o=this.coplanarPoint(bd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new iu,zR=new At(.5,.5),Tc=new Q;class Op{constructor(e=new hs,t=new hs,r=new hs,o=new hs,l=new hs,c=new hs){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Fi,r=!1){const o=this.planes,l=e.elements,c=l[0],u=l[1],h=l[2],d=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],E=l[9],S=l[10],y=l[11],D=l[12],P=l[13],A=l[14],N=l[15];if(o[0].setComponents(d-c,x-p,y-M,N-D).normalize(),o[1].setComponents(d+c,x+p,y+M,N+D).normalize(),o[2].setComponents(d+u,x+g,y+E,N+P).normalize(),o[3].setComponents(d-u,x-g,y-E,N-P).normalize(),r)o[4].setComponents(h,v,S,A).normalize(),o[5].setComponents(d-h,x-v,y-S,N-A).normalize();else if(o[4].setComponents(d-h,x-v,y-S,N-A).normalize(),t===Fi)o[5].setComponents(d+h,x+v,y+S,N+A).normalize();else if(t===$c)o[5].setComponents(h,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=zR.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Tc.x=o.normal.x>0?e.max.x:e.min.x,Tc.y=o.normal.y>0?e.max.y:e.min.y,Tc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gx extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const r_=new Zt,Xh=new Nx,wc=new iu,Ac=new Q;class VR extends un{constructor(e=new pi,t=new Gx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(o),wc.radius+=l,e.ray.intersectsSphere(wc)===!1)return;r_.copy(o).invert(),Xh.copy(e.ray).applyMatrix4(r_);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=r.index,g=r.attributes.position;if(d!==null){const v=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let M=v,E=x;M<E;M++){const S=d.getX(M);Ac.fromBufferAttribute(g,S),s_(Ac,S,h,o,e,t,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let M=v,E=x;M<E;M++)Ac.fromBufferAttribute(g,M),s_(Ac,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function s_(n,e,t,r,o,l,c){const u=Xh.distanceSqToPoint(n);if(u<t){const h=new Q;Xh.closestPointToPoint(n,h),h.applyMatrix4(r);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Wx extends Xn{constructor(e,t,r=ws,o,l,c,u=Ri,h=Ri,d,p=Ba,g=1){if(p!==Ba&&p!==za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,l,c,u,h,p,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fr extends pi{constructor(e=1,t=1,r=1,o=32,l=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:u,thetaLength:h};const d=this;o=Math.floor(o),l=Math.floor(l);const p=[],g=[],v=[],x=[];let M=0;const E=[],S=r/2;let y=0;D(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new ei(g,3)),this.setAttribute("normal",new ei(v,3)),this.setAttribute("uv",new ei(x,2));function D(){const A=new Q,N=new Q;let I=0;const F=(t-e)/r;for(let B=0;B<=l;B++){const b=[],R=B/l,k=R*(t-e)+e;for(let re=0;re<=o;re++){const te=re/o,ne=te*h+u,he=Math.sin(ne),le=Math.cos(ne);N.x=k*he,N.y=-R*r+S,N.z=k*le,g.push(N.x,N.y,N.z),A.set(he,F,le).normalize(),v.push(A.x,A.y,A.z),x.push(te,1-R),b.push(M++)}E.push(b)}for(let B=0;B<o;B++)for(let b=0;b<l;b++){const R=E[b][B],k=E[b+1][B],re=E[b+1][B+1],te=E[b][B+1];(e>0||b!==0)&&(p.push(R,k,te),I+=3),(t>0||b!==l-1)&&(p.push(k,re,te),I+=3)}d.addGroup(y,I,0),y+=I}function P(A){const N=M,I=new At,F=new Q;let B=0;const b=A===!0?e:t,R=A===!0?1:-1;for(let re=1;re<=o;re++)g.push(0,S*R,0),v.push(0,R,0),x.push(.5,.5),M++;const k=M;for(let re=0;re<=o;re++){const ne=re/o*h+u,he=Math.cos(ne),le=Math.sin(ne);F.x=b*le,F.y=S*R,F.z=b*he,g.push(F.x,F.y,F.z),v.push(0,R,0),I.x=he*.5+.5,I.y=le*.5*R+.5,x.push(I.x,I.y),M++}for(let re=0;re<o;re++){const te=N+re,ne=k+re;A===!0?p.push(ne,ne+1,te):p.push(ne+1,ne,te),B+=3}d.addGroup(y,B,A===!0?1:2),y+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends Fr{constructor(e=1,t=1,r=32,o=1,l=!1,c=0,u=Math.PI*2){super(0,e,t,r,o,l,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:u}}static fromJSON(e){return new Pa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ru extends pi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,u=Math.floor(r),h=Math.floor(o),d=u+1,p=h+1,g=e/u,v=t/h,x=[],M=[],E=[],S=[];for(let y=0;y<p;y++){const D=y*v-c;for(let P=0;P<d;P++){const A=P*g-l;M.push(A,-D,0),E.push(0,0,1),S.push(P/u),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let D=0;D<u;D++){const P=D+d*y,A=D+d*(y+1),N=D+1+d*(y+1),I=D+1+d*y;x.push(P,A,I),x.push(A,N,I)}this.setIndex(x),this.setAttribute("position",new ei(M,3)),this.setAttribute("normal",new ei(E,3)),this.setAttribute("uv",new ei(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class _o extends pi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+u,Math.PI);let d=0;const p=[],g=new Q,v=new Q,x=[],M=[],E=[],S=[];for(let y=0;y<=r;y++){const D=[],P=y/r;let A=0;y===0&&c===0?A=.5/t:y===r&&h===Math.PI&&(A=-.5/t);for(let N=0;N<=t;N++){const I=N/t;g.x=-e*Math.cos(o+I*l)*Math.sin(c+P*u),g.y=e*Math.cos(c+P*u),g.z=e*Math.sin(o+I*l)*Math.sin(c+P*u),M.push(g.x,g.y,g.z),v.copy(g).normalize(),E.push(v.x,v.y,v.z),S.push(I+A,1-P),D.push(d++)}p.push(D)}for(let y=0;y<r;y++)for(let D=0;D<t;D++){const P=p[y][D+1],A=p[y][D],N=p[y+1][D],I=p[y+1][D+1];(y!==0||c>0)&&x.push(P,A,I),(y!==r-1||h<Math.PI)&&x.push(A,N,I)}this.setIndex(x),this.setAttribute("position",new ei(M,3)),this.setAttribute("normal",new ei(E,3)),this.setAttribute("uv",new ei(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class HR extends No{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Px,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sa extends HR{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class GR extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WR extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class su extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Pd=new Zt,o_=new Q,a_=new Q;class Bp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Op,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;o_.setFromMatrixPosition(e.matrixWorld),t.position.copy(o_),a_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(a_),t.updateMatrixWorld(),Pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jR extends Bp{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Yc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XR extends su{constructor(e,t,r=0,o=Math.PI/3,l=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.distance=r,this.angle=o,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new jR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const l_=new Zt,Ma=new Q,Dd=new Q;class $R extends Bp{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ma),Dd.copy(r.position),Dd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Dd),r.updateMatrixWorld(),o.makeTranslation(-Ma.x,-Ma.y,-Ma.z),l_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l_,r.coordinateSystem,r.reversedDepth)}}class Ld extends su{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new $R}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jx extends Vx{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,u=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(l,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class YR extends Bp{constructor(){super(new jx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qR extends su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new YR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class KR extends su{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZR extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class QR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function c_(n,e,t,r){const o=JR(r);switch(t){case wx:return n*e;case Cx:return n*e/o.components*o.byteLength;case Np:return n*e/o.components*o.byteLength;case Rx:return n*e*2/o.components*o.byteLength;case Up:return n*e*2/o.components*o.byteLength;case Ax:return n*e*3/o.components*o.byteLength;case Ci:return n*e*4/o.components*o.byteLength;case Fp:return n*e*4/o.components*o.byteLength;case Nc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Eh:return Math.max(n,16)*Math.max(e,8)/4;case xh:case Mh:return Math.max(n,8)*Math.max(e,8)/2;case Th:case wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Vh:case Hh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bx:case Gh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wh:case jh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JR(n){switch(n){case zi:case Mx:return{byteLength:1,components:1};case ka:case Ex:case ja:return{byteLength:2,components:1};case Lp:case Ip:return{byteLength:2,components:4};case ws:case Dp:case rr:return{byteLength:4,components:1};case Tx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xx(){let n=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function eb(n){const e=new WeakMap;function t(u,h){const d=u.array,p=u.usage,g=d.byteLength,v=n.createBuffer();n.bindBuffer(h,v),n.bufferData(h,d,p),u.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=n.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,h,d){const p=h.array,g=h.updateRanges;if(n.bindBuffer(d,u),g.length===0)n.bufferSubData(d,0,p);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];n.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(n.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,h),d.version=u.version}}return{get:o,remove:l,update:c}}var tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ab=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Db="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$b=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,P2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_P=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:tb,alphahash_pars_fragment:nb,alphamap_fragment:ib,alphamap_pars_fragment:rb,alphatest_fragment:sb,alphatest_pars_fragment:ob,aomap_fragment:ab,aomap_pars_fragment:lb,batching_pars_vertex:cb,batching_vertex:ub,begin_vertex:fb,beginnormal_vertex:db,bsdfs:hb,iridescence_fragment:pb,bumpmap_pars_fragment:mb,clipping_planes_fragment:gb,clipping_planes_pars_fragment:vb,clipping_planes_pars_vertex:_b,clipping_planes_vertex:yb,color_fragment:xb,color_pars_fragment:Sb,color_pars_vertex:Mb,color_vertex:Eb,common:Tb,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Cb,displacementmap_vertex:Rb,emissivemap_fragment:bb,emissivemap_pars_fragment:Pb,colorspace_fragment:Db,colorspace_pars_fragment:Lb,envmap_fragment:Ib,envmap_common_pars_fragment:Nb,envmap_pars_fragment:Ub,envmap_pars_vertex:Fb,envmap_physical_pars_fragment:$b,envmap_vertex:kb,fog_vertex:Ob,fog_pars_vertex:Bb,fog_fragment:zb,fog_pars_fragment:Vb,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Gb,lights_lambert_fragment:Wb,lights_lambert_pars_fragment:jb,lights_pars_begin:Xb,lights_toon_fragment:Yb,lights_toon_pars_fragment:qb,lights_phong_fragment:Kb,lights_phong_pars_fragment:Zb,lights_physical_fragment:Qb,lights_physical_pars_fragment:Jb,lights_fragment_begin:e2,lights_fragment_maps:t2,lights_fragment_end:n2,logdepthbuf_fragment:i2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:s2,logdepthbuf_vertex:o2,map_fragment:a2,map_pars_fragment:l2,map_particle_fragment:c2,map_particle_pars_fragment:u2,metalnessmap_fragment:f2,metalnessmap_pars_fragment:d2,morphinstance_vertex:h2,morphcolor_vertex:p2,morphnormal_vertex:m2,morphtarget_pars_vertex:g2,morphtarget_vertex:v2,normal_fragment_begin:_2,normal_fragment_maps:y2,normal_pars_fragment:x2,normal_pars_vertex:S2,normal_vertex:M2,normalmap_pars_fragment:E2,clearcoat_normal_fragment_begin:T2,clearcoat_normal_fragment_maps:w2,clearcoat_pars_fragment:A2,iridescence_pars_fragment:C2,opaque_fragment:R2,packing:b2,premultiplied_alpha_fragment:P2,project_vertex:D2,dithering_fragment:L2,dithering_pars_fragment:I2,roughnessmap_fragment:N2,roughnessmap_pars_fragment:U2,shadowmap_pars_fragment:F2,shadowmap_pars_vertex:k2,shadowmap_vertex:O2,shadowmask_pars_fragment:B2,skinbase_vertex:z2,skinning_pars_vertex:V2,skinning_vertex:H2,skinnormal_vertex:G2,specularmap_fragment:W2,specularmap_pars_fragment:j2,tonemapping_fragment:X2,tonemapping_pars_fragment:$2,transmission_fragment:Y2,transmission_pars_fragment:q2,uv_pars_fragment:K2,uv_pars_vertex:Z2,uv_vertex:Q2,worldpos_vertex:J2,background_vert:eP,background_frag:tP,backgroundCube_vert:nP,backgroundCube_frag:iP,cube_vert:rP,cube_frag:sP,depth_vert:oP,depth_frag:aP,distanceRGBA_vert:lP,distanceRGBA_frag:cP,equirect_vert:uP,equirect_frag:fP,linedashed_vert:dP,linedashed_frag:hP,meshbasic_vert:pP,meshbasic_frag:mP,meshlambert_vert:gP,meshlambert_frag:vP,meshmatcap_vert:_P,meshmatcap_frag:yP,meshnormal_vert:xP,meshnormal_frag:SP,meshphong_vert:MP,meshphong_frag:EP,meshphysical_vert:TP,meshphysical_frag:wP,meshtoon_vert:AP,meshtoon_frag:CP,points_vert:RP,points_frag:bP,shadow_vert:PP,shadow_frag:DP,sprite_vert:LP,sprite_frag:IP},Ue={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ii={basic:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Nn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Nn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Nn([Ue.points,Ue.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Nn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Nn([Ue.common,Ue.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Nn([Ue.sprite,Ue.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Nn([Ue.common,Ue.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Nn([Ue.lights,Ue.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ii.physical={uniforms:Nn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Cc={r:0,b:0,g:0},us=new Vi,NP=new Zt;function UP(n,e,t,r,o,l,c){const u=new pt(0);let h=l===!0?0:1,d,p,g=null,v=0,x=null;function M(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function E(P){let A=!1;const N=M(P);N===null?y(u,h):N&&N.isColor&&(y(N,1),A=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(n.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(P,A){const N=M(A);N&&(N.isCubeTexture||N.mapping===nu)?(p===void 0&&(p=new Pt(new qa(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:bo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),us.copy(A.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(NP.makeRotationFromEuler(us)),p.material.toneMapped=bt.getTransfer(N.colorSpace)!==kt,(g!==N||v!==N.version||x!==n.toneMapping)&&(p.material.needsUpdate=!0,g=N,v=N.version,x=n.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Pt(new ru(2,2),new Hr({name:"BackgroundMaterial",uniforms:bo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=bt.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||x!==n.toneMapping)&&(d.material.needsUpdate=!0,g=N,v=N.version,x=n.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function y(P,A){P.getRGB(Cc,zx(n)),r.buffers.color.setClear(Cc.r,Cc.g,Cc.b,A,c)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,A=1){u.set(P),h=A,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,y(u,h)},render:E,addToRenderList:S,dispose:D}}function FP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,c=!1;function u(R,k,re,te,ne){let he=!1;const le=g(te,re,k);l!==le&&(l=le,d(l.object)),he=x(R,te,re,ne),he&&M(R,te,re,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,A(R,k,re,te),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function h(){return n.createVertexArray()}function d(R){return n.bindVertexArray(R)}function p(R){return n.deleteVertexArray(R)}function g(R,k,re){const te=re.wireframe===!0;let ne=r[R.id];ne===void 0&&(ne={},r[R.id]=ne);let he=ne[k.id];he===void 0&&(he={},ne[k.id]=he);let le=he[te];return le===void 0&&(le=v(h()),he[te]=le),le}function v(R){const k=[],re=[],te=[];for(let ne=0;ne<t;ne++)k[ne]=0,re[ne]=0,te[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:re,attributeDivisors:te,object:R,attributes:{},index:null}}function x(R,k,re,te){const ne=l.attributes,he=k.attributes;let le=0;const Y=re.getAttributes();for(const V in Y)if(Y[V].location>=0){const se=ne[V];let O=he[V];if(O===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;le++}return l.attributesNum!==le||l.index!==te}function M(R,k,re,te){const ne={},he=k.attributes;let le=0;const Y=re.getAttributes();for(const V in Y)if(Y[V].location>=0){let se=he[V];se===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),ne[V]=O,le++}l.attributes=ne,l.attributesNum=le,l.index=te}function E(){const R=l.newAttributes;for(let k=0,re=R.length;k<re;k++)R[k]=0}function S(R){y(R,0)}function y(R,k){const re=l.newAttributes,te=l.enabledAttributes,ne=l.attributeDivisors;re[R]=1,te[R]===0&&(n.enableVertexAttribArray(R),te[R]=1),ne[R]!==k&&(n.vertexAttribDivisor(R,k),ne[R]=k)}function D(){const R=l.newAttributes,k=l.enabledAttributes;for(let re=0,te=k.length;re<te;re++)k[re]!==R[re]&&(n.disableVertexAttribArray(re),k[re]=0)}function P(R,k,re,te,ne,he,le){le===!0?n.vertexAttribIPointer(R,k,re,ne,he):n.vertexAttribPointer(R,k,re,te,ne,he)}function A(R,k,re,te){E();const ne=te.attributes,he=re.getAttributes(),le=k.defaultAttributeValues;for(const Y in he){const V=he[Y];if(V.location>=0){let ce=ne[Y];if(ce===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const se=ce.normalized,O=ce.itemSize,q=e.get(ce);if(q===void 0)continue;const Oe=q.buffer,Le=q.type,K=q.bytesPerElement,pe=Le===n.INT||Le===n.UNSIGNED_INT||ce.gpuType===Dp;if(ce.isInterleavedBufferAttribute){const de=ce.data,Ce=de.stride,Pe=ce.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<V.locationSize;Ge++)y(V.location+Ge,de.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<V.locationSize;Ge++)S(V.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Ge=0;Ge<V.locationSize;Ge++)P(V.location+Ge,O/V.locationSize,Le,se,Ce*K,(Pe+O/V.locationSize*Ge)*K,pe)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)y(V.location+de,ce.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<V.locationSize;de++)S(V.location+de);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let de=0;de<V.locationSize;de++)P(V.location+de,O/V.locationSize,Le,se,O*K,O/V.locationSize*de*K,pe)}}else if(le!==void 0){const se=le[Y];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(V.location,se);break;case 3:n.vertexAttrib3fv(V.location,se);break;case 4:n.vertexAttrib4fv(V.location,se);break;default:n.vertexAttrib1fv(V.location,se)}}}}D()}function N(){B();for(const R in r){const k=r[R];for(const re in k){const te=k[re];for(const ne in te)p(te[ne].object),delete te[ne];delete k[re]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const re in k){const te=k[re];for(const ne in te)p(te[ne].object),delete te[ne];delete k[re]}delete r[R.id]}function F(R){for(const k in r){const re=r[k];if(re[R.id]===void 0)continue;const te=re[R.id];for(const ne in te)p(te[ne].object),delete te[ne];delete re[R.id]}}function B(){b(),c=!0,l!==o&&(l=o,d(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:B,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:S,disableUnusedAttributes:D}}function kP(n,e,t){let r;function o(d){r=d}function l(d,p){n.drawArrays(r,d,p),t.update(p,r,1)}function c(d,p,g){g!==0&&(n.drawArraysInstanced(r,d,p,g),t.update(p,r,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,p,0,g);let x=0;for(let M=0;M<g;M++)x+=p[M];t.update(x,r,1)}function h(d,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)c(d[M],p[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*v[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function OP(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Ci&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const B=F===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==zi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==rr&&!B)}function h(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:N,maxSamples:I}}function BP(n){const e=this;let t=null,r=0,o=!1,l=!1;const c=new hs,u=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?p(null):d();else{const D=l?0:r,P=D*4;let A=y.clippingState||null;h.value=A,A=p(M,v,P,x);for(let N=0;N!==P;++N)A[N]=t[N];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,v,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const y=x+E*4,D=v.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,A=x;P!==E;++P,A+=4)c.copy(g[P]).applyMatrix4(D,u),c.normal.toArray(S,A),S[A+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function zP(n){let e=new WeakMap;function t(c,u){return u===gh?c.mapping=Ao:u===vh&&(c.mapping=Co),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===gh||u===vh)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new UR(h.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",o),t(d.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const yo=4,u_=[.125,.215,.35,.446,.526,.582],gs=20,Id=new jx,f_=new pt;let Nd=null,Ud=0,Fd=0,kd=!1;const ps=(1+Math.sqrt(5))/2,fo=1/ps,d_=[new Q(-ps,fo,0),new Q(ps,fo,0),new Q(-fo,0,ps),new Q(fo,0,ps),new Q(0,ps,-fo),new Q(0,ps,fo),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],VP=new Q;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:u=VP}=l;Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Ud,Fd),this._renderer.xr.enabled=kd,e.scissorTest=!1,Rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:ja,format:Ci,colorSpace:Ro,depthBuffer:!1},o=p_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HP(l)),this._blurMaterial=GP(l,e,t)}return o}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Id)}_sceneToCubeUV(e,t,r,o,l){const h=new Gn(90,1,t,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(f_),g.toneMapping=Or,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const E=new kx({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),S=new Pt(new qa,E);let y=!1;const D=e.background;D?D.isColor&&(E.color.copy(D),e.background=null,y=!0):(E.color.copy(f_),y=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(h.up.set(0,d[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+p[P],l.y,l.z)):A===1?(h.up.set(0,0,d[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+p[P],l.z)):(h.up.set(0,d[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+p[P]));const N=this._cubeSize;Rc(o,A*N,P>2?N:0,N,N),g.setRenderTarget(o),y&&g.render(S,h),g.render(e,h)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ao||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Pt(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const h=this._cubeSize;Rc(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Id)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=d_[(o-l-1)%d_.length];this._blur(e,l-1,l,c,u)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Pt(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*gs-1),E=l/M,S=isFinite(l)?1+Math.floor(p*E):gs;S>gs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const y=[];let D=0;for(let F=0;F<gs;++F){const B=F/E,b=Math.exp(-B*B/2);y.push(b),F===0?D+=b:F<S&&(D+=2*b)}for(let F=0;F<y.length;F++)y[F]=y[F]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const A=this._sizeLods[o],N=3*A*(o>P-yo?o-P+yo:0),I=4*(this._cubeSize-A);Rc(t,N,I,3*A,2*A),h.setRenderTarget(t),h.render(g,Id)}}function HP(n){const e=[],t=[],r=[];let o=n;const l=n-yo+1+u_.length;for(let c=0;c<l;c++){const u=Math.pow(2,o);t.push(u);let h=1/u;c>n-yo?h=u_[c-n+yo-1]:c===0&&(h=0),r.push(h);const d=1/(u-2),p=-d,g=1+d,v=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,M=6,E=3,S=2,y=1,D=new Float32Array(E*M*x),P=new Float32Array(S*M*x),A=new Float32Array(y*M*x);for(let I=0;I<x;I++){const F=I%3*2/3-1,B=I>2?0:-1,b=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];D.set(b,E*M*I),P.set(v,S*M*I);const R=[I,I,I,I,I,I];A.set(R,y*M*I)}const N=new pi;N.setAttribute("position",new hi(D,E)),N.setAttribute("uv",new hi(P,S)),N.setAttribute("faceIndex",new hi(A,y)),e.push(N),o>yo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function p_(n,e,t){const r=new As(n,e,t);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rc(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function GP(n,e,t){const r=new Float32Array(gs),o=new Q(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function m_(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function g_(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function zp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WP(n){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const h=u.mapping,d=h===gh||h===vh,p=h===Ao||h===Co;if(d||p){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new h_(n)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return d&&x&&x.height>0||p&&x&&o(x)?(t===null&&(t=new h_(n)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",l),g.texture):null}}}return u}function o(u){let h=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&h++;return h===d}function l(u){const h=u.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function jP(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Mo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function XP(n,e,t,r){const o={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const D=x.array;E=x.version;for(let P=0,A=D.length;P<A;P+=3){const N=D[P+0],I=D[P+1],F=D[P+2];v.push(N,I,I,F,F,N)}}else if(M!==void 0){const D=M.array;E=M.version;for(let P=0,A=D.length/3-1;P<A;P+=3){const N=P+0,I=P+1,F=P+2;v.push(N,I,I,F,F,N)}}else return;const S=new(Lx(v)?Bx:Ox)(v,1);S.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function p(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return l.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function $P(n,e,t){let r;function o(v){r=v}let l,c;function u(v){l=v.type,c=v.bytesPerElement}function h(v,x){n.drawElements(r,x,l,v*c),t.update(x,r,1)}function d(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*c,M),t.update(x,r,M))}function p(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)d(v[y]/c,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,E,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*E[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function YP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(l/3);break;case n.LINES:t.lines+=u*(l/2);break;case n.LINE_STRIP:t.lines+=u*(l-1);break;case n.LINE_LOOP:t.lines+=u*l;break;case n.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function qP(n,e,t){const r=new WeakMap,o=new Ot;function l(c,u,h){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let b=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",b)};v!==void 0&&v.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let P=0;x===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let A=u.attributes.position.count*P,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*N*4*g),F=new Ix(I,A,N,g);F.type=rr,F.needsUpdate=!0;const B=P*4;for(let R=0;R<g;R++){const k=S[R],re=y[R],te=D[R],ne=A*N*4*R;for(let he=0;he<k.count;he++){const le=he*B;x===!0&&(o.fromBufferAttribute(k,he),I[ne+le+0]=o.x,I[ne+le+1]=o.y,I[ne+le+2]=o.z,I[ne+le+3]=0),M===!0&&(o.fromBufferAttribute(re,he),I[ne+le+4]=o.x,I[ne+le+5]=o.y,I[ne+le+6]=o.z,I[ne+le+7]=0),E===!0&&(o.fromBufferAttribute(te,he),I[ne+le+8]=o.x,I[ne+le+9]=o.y,I[ne+le+10]=o.z,I[ne+le+11]=te.itemSize===4?o.w:1)}}v={count:g,texture:F,size:new At(A,N)},r.set(u,v),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let x=0;for(let E=0;E<d.length;E++)x+=d[E];const M=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function KP(n,e,t,r){let o=new WeakMap;function l(h){const d=r.render.frame,p=h.geometry,g=e.get(h,p);if(o.get(g)!==d&&(e.update(g),o.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),o.get(h)!==d&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function c(){o=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const $x=new Xn,v_=new Wx(1,1),Yx=new Ix,qx=new _R,Kx=new Hx,__=[],y_=[],x_=new Float32Array(16),S_=new Float32Array(9),M_=new Float32Array(4);function Uo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=__[o];if(l===void 0&&(l=new Float32Array(o),__[o]=l),e!==0){r.toArray(l,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(l,u)}return l}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ou(n,e){let t=y_[e];t===void 0&&(t=new Int32Array(e),y_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function ZP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function QP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function JP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function eD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function tD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;M_.set(r),n.uniformMatrix2fv(this.addr,!1,M_),dn(t,r)}}function nD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;S_.set(r),n.uniformMatrix3fv(this.addr,!1,S_),dn(t,r)}}function iD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;x_.set(r),n.uniformMatrix4fv(this.addr,!1,x_),dn(t,r)}}function rD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function oD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function aD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function lD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function uD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function fD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function dD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(v_.compareFunction=Dx,l=v_):l=$x,t.setTexture2D(e||l,o)}function hD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||qx,o)}function pD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Kx,o)}function mD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Yx,o)}function gD(n){switch(n){case 5126:return ZP;case 35664:return QP;case 35665:return JP;case 35666:return eD;case 35674:return tD;case 35675:return nD;case 35676:return iD;case 5124:case 35670:return rD;case 35667:case 35671:return sD;case 35668:case 35672:return oD;case 35669:case 35673:return aD;case 5125:return lD;case 36294:return cD;case 36295:return uD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return dD;case 35679:case 36299:case 36307:return hD;case 35680:case 36300:case 36308:case 36293:return pD;case 36289:case 36303:case 36311:case 36292:return mD}}function vD(n,e){n.uniform1fv(this.addr,e)}function _D(n,e){const t=Uo(e,this.size,2);n.uniform2fv(this.addr,t)}function yD(n,e){const t=Uo(e,this.size,3);n.uniform3fv(this.addr,t)}function xD(n,e){const t=Uo(e,this.size,4);n.uniform4fv(this.addr,t)}function SD(n,e){const t=Uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MD(n,e){const t=Uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ED(n,e){const t=Uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TD(n,e){n.uniform1iv(this.addr,e)}function wD(n,e){n.uniform2iv(this.addr,e)}function AD(n,e){n.uniform3iv(this.addr,e)}function CD(n,e){n.uniform4iv(this.addr,e)}function RD(n,e){n.uniform1uiv(this.addr,e)}function bD(n,e){n.uniform2uiv(this.addr,e)}function PD(n,e){n.uniform3uiv(this.addr,e)}function DD(n,e){n.uniform4uiv(this.addr,e)}function LD(n,e,t){const r=this.cache,o=e.length,l=ou(t,o);fn(r,l)||(n.uniform1iv(this.addr,l),dn(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||$x,l[c])}function ID(n,e,t){const r=this.cache,o=e.length,l=ou(t,o);fn(r,l)||(n.uniform1iv(this.addr,l),dn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||qx,l[c])}function ND(n,e,t){const r=this.cache,o=e.length,l=ou(t,o);fn(r,l)||(n.uniform1iv(this.addr,l),dn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Kx,l[c])}function UD(n,e,t){const r=this.cache,o=e.length,l=ou(t,o);fn(r,l)||(n.uniform1iv(this.addr,l),dn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Yx,l[c])}function FD(n){switch(n){case 5126:return vD;case 35664:return _D;case 35665:return yD;case 35666:return xD;case 35674:return SD;case 35675:return MD;case 35676:return ED;case 5124:case 35670:return TD;case 35667:case 35671:return wD;case 35668:case 35672:return AD;case 35669:case 35673:return CD;case 5125:return RD;case 36294:return bD;case 36295:return PD;case 36296:return DD;case 35678:case 36198:case 36298:case 36306:case 35682:return LD;case 35679:case 36299:case 36307:return ID;case 35680:case 36300:case 36308:case 36293:return ND;case 36289:case 36303:case 36311:case 36292:return UD}}class kD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gD(t.type)}}class OD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FD(t.type)}}class BD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const u=o[l];u.setValue(e,t[u.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function E_(n,e){n.seq.push(e),n.map[e.id]=e}function zD(n,e,t){const r=n.name,o=r.length;for(Od.lastIndex=0;;){const l=Od.exec(r),c=Od.lastIndex;let u=l[1];const h=l[2]==="]",d=l[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===o){E_(t,d===void 0?new kD(u,n,e):new OD(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new BD(u),E_(t,g)),t=g}}}class Bc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);zD(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const u=t[l],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function T_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const VD=37297;let HD=0;function GD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const w_=new mt;function WD(n){bt._getMatrix(w_,bt.workingColorSpace,n);const e=`mat3( ${w_.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case Xc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function A_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+GD(n.getShaderSource(e),u)}else return l}function jD(n,e){const t=WD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XD(n,e){let t;switch(e){case $C:t="Linear";break;case YC:t="Reinhard";break;case qC:t="Cineon";break;case xx:t="ACESFilmic";break;case ZC:t="AgX";break;case QC:t="Neutral";break;case KC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new Q;function $D(){bt.getLuminanceCoefficients(bc);const n=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function qD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function KD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),c=l.name;let u=1;l.type===n.FLOAT_MAT2&&(u=2),l.type===n.FLOAT_MAT3&&(u=3),l.type===n.FLOAT_MAT4&&(u=4),t[c]={type:l.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Ta(n){return n!==""}function C_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZD=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(n){return n.replace(ZD,JD)}const QD=new Map;function JD(n,e){let t=gt[e];if(t===void 0){const r=QD.get(e);if(r!==void 0)t=gt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $h(t)}const eL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b_(n){return n.replace(eL,tL)}function tL(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function P_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===AC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function iL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ao:case Co:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function sL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yx:e="ENVMAP_BLENDING_MULTIPLY";break;case jC:e="ENVMAP_BLENDING_MIX";break;case XC:e="ENVMAP_BLENDING_ADD";break}return e}function oL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function aL(n,e,t,r){const o=n.getContext(),l=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=nL(t),d=iL(t),p=rL(t),g=sL(t),v=oL(t),x=YD(t),M=qD(l),E=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ta).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ta).join(`
`),y.length>0&&(y+=`
`)):(S=[P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),y=[P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?gt.tonemapping_pars_fragment:"",t.toneMapping!==Or?XD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,jD("linearToOutputTexel",t.outputColorSpace),$D(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),c=$h(c),c=C_(c,t),c=R_(c,t),u=$h(u),u=C_(u,t),u=R_(u,t),c=b_(c),u=b_(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=D+S+c,A=D+y+u,N=T_(o,o.VERTEX_SHADER,P),I=T_(o,o.FRAGMENT_SHADER,A);o.attachShader(E,N),o.attachShader(E,I),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function F(k){if(n.debug.checkShaderErrors){const re=o.getProgramInfoLog(E)||"",te=o.getShaderInfoLog(N)||"",ne=o.getShaderInfoLog(I)||"",he=re.trim(),le=te.trim(),Y=ne.trim();let V=!0,ce=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,N,I);else{const se=A_(o,N,"vertex"),O=A_(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+he+`
`+se+`
`+O)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(le===""||Y==="")&&(ce=!1);ce&&(k.diagnostics={runnable:V,programLog:he,vertexShader:{log:le,prefix:S},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(N),o.deleteShader(I),B=new Bc(o,E),b=KD(o,E)}let B;this.getUniforms=function(){return B===void 0&&F(this),B};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,VD)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HD++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=I,this}let lL=0;class cL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new uL(e),t.set(e,r)),r}}class uL{constructor(e){this.id=lL++,this.code=e,this.usedTimes=0}}function fL(n,e,t,r,o,l,c){const u=new Ux,h=new cL,d=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return d.add(b),b===0?"uv":`uv${b}`}function S(b,R,k,re,te){const ne=re.fog,he=te.geometry,le=b.isMeshStandardMaterial?re.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||le),V=Y&&Y.mapping===nu?Y.image.height:null,ce=M[b.type];b.precision!==null&&(x=o.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=se!==void 0?se.length:0;let q=0;he.morphAttributes.position!==void 0&&(q=1),he.morphAttributes.normal!==void 0&&(q=2),he.morphAttributes.color!==void 0&&(q=3);let Oe,Le,K,pe;if(ce){const Tt=Ii[ce];Oe=Tt.vertexShader,Le=Tt.fragmentShader}else Oe=b.vertexShader,Le=b.fragmentShader,h.update(b),K=h.getVertexShaderID(b),pe=h.getFragmentShaderID(b);const de=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Pe=te.isInstancedMesh===!0,Ge=te.isBatchedMesh===!0,Et=!!b.map,ht=!!b.matcap,z=!!Y,vt=!!b.aoMap,Je=!!b.lightMap,yt=!!b.bumpMap,He=!!b.normalMap,Dt=!!b.displacementMap,Fe=!!b.emissiveMap,at=!!b.metalnessMap,It=!!b.roughnessMap,zt=b.anisotropy>0,L=b.clearcoat>0,w=b.dispersion>0,J=b.iridescence>0,fe=b.sheen>0,ve=b.transmission>0,ue=zt&&!!b.anisotropyMap,je=L&&!!b.clearcoatMap,Ee=L&&!!b.clearcoatNormalMap,Ve=L&&!!b.clearcoatRoughnessMap,Ye=J&&!!b.iridescenceMap,xe=J&&!!b.iridescenceThicknessMap,Ie=fe&&!!b.sheenColorMap,tt=fe&&!!b.sheenRoughnessMap,De=!!b.specularMap,be=!!b.specularColorMap,lt=!!b.specularIntensityMap,G=ve&&!!b.transmissionMap,Se=ve&&!!b.thicknessMap,Re=!!b.gradientMap,ke=!!b.alphaMap,Me=b.alphaTest>0,me=!!b.alphaHash,qe=!!b.extensions;let dt=Or;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(dt=n.toneMapping);const Nt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:Le,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Ge,batchingColor:Ge&&te._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&te.instanceColor!==null,instancingMorph:Pe&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ro,alphaToCoverage:!!b.alphaToCoverage,map:Et,matcap:ht,envMap:z,envMapMode:z&&Y.mapping,envMapCubeUVHeight:V,aoMap:vt,lightMap:Je,bumpMap:yt,normalMap:He,displacementMap:v&&Dt,emissiveMap:Fe,normalMapObjectSpace:He&&b.normalMapType===nR,normalMapTangentSpace:He&&b.normalMapType===Px,metalnessMap:at,roughnessMap:It,anisotropy:zt,anisotropyMap:ue,clearcoat:L,clearcoatMap:je,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ve,dispersion:w,iridescence:J,iridescenceMap:Ye,iridescenceThicknessMap:xe,sheen:fe,sheenColorMap:Ie,sheenRoughnessMap:tt,specularMap:De,specularColorMap:be,specularIntensityMap:lt,transmission:ve,transmissionMap:G,thicknessMap:Se,gradientMap:Re,opaque:b.transparent===!1&&b.blending===So&&b.alphaToCoverage===!1,alphaMap:ke,alphaTest:Me,alphaHash:me,combine:b.combine,mapUv:Et&&E(b.map.channel),aoMapUv:vt&&E(b.aoMap.channel),lightMapUv:Je&&E(b.lightMap.channel),bumpMapUv:yt&&E(b.bumpMap.channel),normalMapUv:He&&E(b.normalMap.channel),displacementMapUv:Dt&&E(b.displacementMap.channel),emissiveMapUv:Fe&&E(b.emissiveMap.channel),metalnessMapUv:at&&E(b.metalnessMap.channel),roughnessMapUv:It&&E(b.roughnessMap.channel),anisotropyMapUv:ue&&E(b.anisotropyMap.channel),clearcoatMapUv:je&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:tt&&E(b.sheenRoughnessMap.channel),specularMapUv:De&&E(b.specularMap.channel),specularColorMapUv:be&&E(b.specularColorMap.channel),specularIntensityMapUv:lt&&E(b.specularIntensityMap.channel),transmissionMapUv:G&&E(b.transmissionMap.channel),thicknessMapUv:Se&&E(b.thicknessMap.channel),alphaMapUv:ke&&E(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(He||zt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Et||ke),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:Et&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:Fe&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ni,flipSided:b.side===jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Nt.vertexUv1s=d.has(1),Nt.vertexUv2s=d.has(2),Nt.vertexUv3s=d.has(3),d.clear(),Nt}function y(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)R.push(k),R.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(D(R,b),P(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function D(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),R.gradientMap&&u.enable(22),b.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reversedDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),b.push(u.mask)}function A(b){const R=M[b.type];let k;if(R){const re=Ii[R];k=DR.clone(re.uniforms)}else k=b.uniforms;return k}function N(b,R){let k;for(let re=0,te=p.length;re<te;re++){const ne=p[re];if(ne.cacheKey===R){k=ne,++k.usedTimes;break}}return k===void 0&&(k=new aL(n,R,b,l),p.push(k)),k}function I(b){if(--b.usedTimes===0){const R=p.indexOf(b);p[R]=p[p.length-1],p.pop(),b.destroy()}}function F(b){h.remove(b)}function B(){h.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:N,releaseProgram:I,releaseShaderCache:F,programs:p,dispose:B}}function dL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,h){n.get(c)[u]=h}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function hL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function D_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function L_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g,v,x,M,E,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function u(g,v,x,M,E,S){const y=c(g,v,x,M,E,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function h(g,v,x,M,E,S){const y=c(g,v,x,M,E,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function d(g,v){t.length>1&&t.sort(g||hL),r.length>1&&r.sort(v||D_),o.length>1&&o.sort(v||D_)}function p(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:h,finish:p,sort:d}}function pL(){let n=new WeakMap;function e(r,o){const l=n.get(r);let c;return l===void 0?(c=new L_,n.set(r,[c])):o>=l.length?(c=new L_,l.push(c)):c=l[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function mL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new pt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function gL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vL=0;function _L(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yL(n){const e=new mL,t=gL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new Q);const o=new Q,l=new Zt,c=new Zt;function u(d){let p=0,g=0,v=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,D=0,P=0,A=0,N=0,I=0,F=0;d.sort(_L);for(let b=0,R=d.length;b<R;b++){const k=d[b],re=k.color,te=k.intensity,ne=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=re.r*te,g+=re.g*te,v+=re.b*te;else if(k.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(k.sh.coefficients[le],te);F++}else if(k.isDirectionalLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,V=t.get(k);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=k.shadow.matrix,D++}r.directional[x]=le,x++}else if(k.isSpotLight){const le=e.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(re).multiplyScalar(te),le.distance=ne,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,r.spot[E]=le;const Y=k.shadow;if(k.map&&(r.spotLightMap[N]=k.map,N++,Y.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[E]=Y.matrix,k.castShadow){const V=t.get(k);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,r.spotShadow[E]=V,r.spotShadowMap[E]=he,A++}E++}else if(k.isRectAreaLight){const le=e.get(k);le.color.copy(re).multiplyScalar(te),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=le,S++}else if(k.isPointLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const Y=k.shadow,V=t.get(k);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=k.shadow.matrix,P++}r.point[M]=le,M++}else if(k.isHemisphereLight){const le=e.get(k);le.skyColor.copy(k.color).multiplyScalar(te),le.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[y]=le,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==x||B.pointLength!==M||B.spotLength!==E||B.rectAreaLength!==S||B.hemiLength!==y||B.numDirectionalShadows!==D||B.numPointShadows!==P||B.numSpotShadows!==A||B.numSpotMaps!==N||B.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+N-I,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,B.directionalLength=x,B.pointLength=M,B.spotLength=E,B.rectAreaLength=S,B.hemiLength=y,B.numDirectionalShadows=D,B.numPointShadows=P,B.numSpotShadows=A,B.numSpotMaps=N,B.numLightProbes=F,r.version=vL++)}function h(d,p){let g=0,v=0,x=0,M=0,E=0;const S=p.matrixWorldInverse;for(let y=0,D=d.length;y<D;y++){const P=d[y];if(P.isDirectionalLight){const A=r.directional[g];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),g++}else if(P.isSpotLight){const A=r.spot[x];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(P.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:u,setupView:h,state:r}}function I_(n){const e=new yL(n),t=[],r=[];function o(p){d.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function c(p){r.push(p)}function u(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:u,setupLightsView:h,pushLight:l,pushShadow:c}}function xL(n){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let u;return c===void 0?(u=new I_(n),e.set(o,[u])):l>=c.length?(u=new I_(n),c.push(u)):u=c[l],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const SL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ML=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EL(n,e,t){let r=new Op;const o=new At,l=new At,c=new Ot,u=new GR({depthPacking:tR}),h=new WR,d={},p=t.maxTextureSize,g={[Vr]:jn,[jn]:Vr,[Ni]:Ni},v=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:SL,fragmentShader:ML}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new pi;M.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Pt(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_x;let y=this.type;this.render=function(I,F,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const b=n.getRenderTarget(),R=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),re=n.state;re.setBlending(kr),re.buffers.depth.getReversed()?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const te=y!==ir&&this.type===ir,ne=y===ir&&this.type!==ir;for(let he=0,le=I.length;he<le;he++){const Y=I[he],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ce=V.getFrameExtents();if(o.multiply(ce),l.copy(V.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/ce.x),o.x=l.x*ce.x,V.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/ce.y),o.y=l.y*ce.y,V.mapSize.y=l.y)),V.map===null||te===!0||ne===!0){const O=this.type!==ir?{minFilter:Ri,magFilter:Ri}:{};V.map!==null&&V.map.dispose(),V.map=new As(o.x,o.y,O),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const se=V.getViewportCount();for(let O=0;O<se;O++){const q=V.getViewport(O);c.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),re.viewport(c),V.updateMatrices(Y,O),r=V.getFrustum(),A(F,B,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===ir&&D(V,B),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(b,R,k)};function D(I,F){const B=e.update(E);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new As(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(F,null,B,v,E,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(F,null,B,x,E,null)}function P(I,F,B,b){let R=null;const k=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)R=k;else if(R=B.isPointLight===!0?h:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const re=R.uuid,te=F.uuid;let ne=d[re];ne===void 0&&(ne={},d[re]=ne);let he=ne[te];he===void 0&&(he=R.clone(),ne[te]=he,F.addEventListener("dispose",N)),R=he}if(R.visible=F.visible,R.wireframe=F.wireframe,b===ir?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=n.properties.get(R);re.light=B}return R}function A(I,F,B,b,R){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===ir)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const te=e.update(I),ne=I.material;if(Array.isArray(ne)){const he=te.groups;for(let le=0,Y=he.length;le<Y;le++){const V=he[le],ce=ne[V.materialIndex];if(ce&&ce.visible){const se=P(I,ce,b,R);I.onBeforeShadow(n,I,F,B,te,se,V),n.renderBufferDirect(B,null,te,se,I,V),I.onAfterShadow(n,I,F,B,te,se,V)}}}else if(ne.visible){const he=P(I,ne,b,R);I.onBeforeShadow(n,I,F,B,te,he,null),n.renderBufferDirect(B,null,te,he,I,null),I.onAfterShadow(n,I,F,B,te,he,null)}}const re=I.children;for(let te=0,ne=re.length;te<ne;te++)A(re[te],F,B,b,R)}function N(I){I.target.removeEventListener("dispose",N);for(const B in d){const b=d[B],R=I.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const TL={[ch]:uh,[fh]:ph,[dh]:mh,[wo]:hh,[uh]:ch,[ph]:fh,[mh]:dh,[hh]:wo};function wL(n,e){function t(){let G=!1;const Se=new Ot;let Re=null;const ke=new Ot(0,0,0,0);return{setMask:function(Me){Re!==Me&&!G&&(n.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){G=Me},setClear:function(Me,me,qe,dt,Nt){Nt===!0&&(Me*=dt,me*=dt,qe*=dt),Se.set(Me,me,qe,dt),ke.equals(Se)===!1&&(n.clearColor(Me,me,qe,dt),ke.copy(Se))},reset:function(){G=!1,Re=null,ke.set(-1,0,0,0)}}}function r(){let G=!1,Se=!1,Re=null,ke=null,Me=null;return{setReversed:function(me){if(Se!==me){const qe=e.get("EXT_clip_control");me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=me;const dt=Me;Me=null,this.setClear(dt)}},getReversed:function(){return Se},setTest:function(me){me?de(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(me){Re!==me&&!G&&(n.depthMask(me),Re=me)},setFunc:function(me){if(Se&&(me=TL[me]),ke!==me){switch(me){case ch:n.depthFunc(n.NEVER);break;case uh:n.depthFunc(n.ALWAYS);break;case fh:n.depthFunc(n.LESS);break;case wo:n.depthFunc(n.LEQUAL);break;case dh:n.depthFunc(n.EQUAL);break;case hh:n.depthFunc(n.GEQUAL);break;case ph:n.depthFunc(n.GREATER);break;case mh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ke=me}},setLocked:function(me){G=me},setClear:function(me){Me!==me&&(Se&&(me=1-me),n.clearDepth(me),Me=me)},reset:function(){G=!1,Re=null,ke=null,Me=null,Se=!1}}}function o(){let G=!1,Se=null,Re=null,ke=null,Me=null,me=null,qe=null,dt=null,Nt=null;return{setTest:function(Tt){G||(Tt?de(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Tt){Se!==Tt&&!G&&(n.stencilMask(Tt),Se=Tt)},setFunc:function(Tt,ti,xn){(Re!==Tt||ke!==ti||Me!==xn)&&(n.stencilFunc(Tt,ti,xn),Re=Tt,ke=ti,Me=xn)},setOp:function(Tt,ti,xn){(me!==Tt||qe!==ti||dt!==xn)&&(n.stencilOp(Tt,ti,xn),me=Tt,qe=ti,dt=xn)},setLocked:function(Tt){G=Tt},setClear:function(Tt){Nt!==Tt&&(n.clearStencil(Tt),Nt=Tt)},reset:function(){G=!1,Se=null,Re=null,ke=null,Me=null,me=null,qe=null,dt=null,Nt=null}}}const l=new t,c=new r,u=new o,h=new WeakMap,d=new WeakMap;let p={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,P=null,A=null,N=null,I=null,F=new pt(0,0,0),B=0,b=!1,R=null,k=null,re=null,te=null,ne=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Y=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),le=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),le=Y>=2);let ce=null,se={};const O=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),Oe=new Ot().fromArray(O),Le=new Ot().fromArray(q);function K(G,Se,Re,ke){const Me=new Uint8Array(4),me=n.createTexture();n.bindTexture(G,me),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<Re;qe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Se+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return me}const pe={};pe[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(n.DEPTH_TEST),c.setFunc(wo),yt(!1),He(Uv),de(n.CULL_FACE),vt(kr);function de(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function Ce(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function Pe(G,Se){return g[G]!==Se?(n.bindFramebuffer(G,Se),g[G]=Se,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Se),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ge(G,Se){let Re=x,ke=!1;if(G){Re=v.get(Se),Re===void 0&&(Re=[],v.set(Se,Re));const Me=G.textures;if(Re.length!==Me.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let me=0,qe=Me.length;me<qe;me++)Re[me]=n.COLOR_ATTACHMENT0+me;Re.length=Me.length,ke=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,ke=!0);ke&&n.drawBuffers(Re)}function Et(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const ht={[ms]:n.FUNC_ADD,[RC]:n.FUNC_SUBTRACT,[bC]:n.FUNC_REVERSE_SUBTRACT};ht[PC]=n.MIN,ht[DC]=n.MAX;const z={[LC]:n.ZERO,[IC]:n.ONE,[NC]:n.SRC_COLOR,[ah]:n.SRC_ALPHA,[zC]:n.SRC_ALPHA_SATURATE,[OC]:n.DST_COLOR,[FC]:n.DST_ALPHA,[UC]:n.ONE_MINUS_SRC_COLOR,[lh]:n.ONE_MINUS_SRC_ALPHA,[BC]:n.ONE_MINUS_DST_COLOR,[kC]:n.ONE_MINUS_DST_ALPHA,[VC]:n.CONSTANT_COLOR,[HC]:n.ONE_MINUS_CONSTANT_COLOR,[GC]:n.CONSTANT_ALPHA,[WC]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(G,Se,Re,ke,Me,me,qe,dt,Nt,Tt){if(G===kr){E===!0&&(Ce(n.BLEND),E=!1);return}if(E===!1&&(de(n.BLEND),E=!0),G!==CC){if(G!==S||Tt!==b){if((y!==ms||A!==ms)&&(n.blendEquation(n.FUNC_ADD),y=ms,A=ms),Tt)switch(G){case So:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.ONE,n.ONE);break;case Fv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case So:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,P=null,N=null,I=null,F.set(0,0,0),B=0,S=G,b=Tt}return}Me=Me||Se,me=me||Re,qe=qe||ke,(Se!==y||Me!==A)&&(n.blendEquationSeparate(ht[Se],ht[Me]),y=Se,A=Me),(Re!==D||ke!==P||me!==N||qe!==I)&&(n.blendFuncSeparate(z[Re],z[ke],z[me],z[qe]),D=Re,P=ke,N=me,I=qe),(dt.equals(F)===!1||Nt!==B)&&(n.blendColor(dt.r,dt.g,dt.b,Nt),F.copy(dt),B=Nt),S=G,b=!1}function Je(G,Se){G.side===Ni?Ce(n.CULL_FACE):de(n.CULL_FACE);let Re=G.side===jn;Se&&(Re=!Re),yt(Re),G.blending===So&&G.transparent===!1?vt(kr):vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const ke=G.stencilWrite;u.setTest(ke),ke&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Fe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function He(G){G!==TC?(de(n.CULL_FACE),G!==k&&(G===Uv?n.cullFace(n.BACK):G===wC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),k=G}function Dt(G){G!==re&&(le&&n.lineWidth(G),re=G)}function Fe(G,Se,Re){G?(de(n.POLYGON_OFFSET_FILL),(te!==Se||ne!==Re)&&(n.polygonOffset(Se,Re),te=Se,ne=Re)):Ce(n.POLYGON_OFFSET_FILL)}function at(G){G?de(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function It(G){G===void 0&&(G=n.TEXTURE0+he-1),ce!==G&&(n.activeTexture(G),ce=G)}function zt(G,Se,Re){Re===void 0&&(ce===null?Re=n.TEXTURE0+he-1:Re=ce);let ke=se[Re];ke===void 0&&(ke={type:void 0,texture:void 0},se[Re]=ke),(ke.type!==G||ke.texture!==Se)&&(ce!==Re&&(n.activeTexture(Re),ce=Re),n.bindTexture(G,Se||pe[G]),ke.type=G,ke.texture=Se)}function L(){const G=se[ce];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(G){Oe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Oe.copy(G))}function tt(G){Le.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Le.copy(G))}function De(G,Se){let Re=d.get(Se);Re===void 0&&(Re=new WeakMap,d.set(Se,Re));let ke=Re.get(G);ke===void 0&&(ke=n.getUniformBlockIndex(Se,G.name),Re.set(G,ke))}function be(G,Se){const ke=d.get(Se).get(G);h.get(Se)!==ke&&(n.uniformBlockBinding(Se,ke,G.__bindingPointIndex),h.set(Se,ke))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ce=null,se={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,P=null,A=null,N=null,I=null,F=new pt(0,0,0),B=0,b=!1,R=null,k=null,re=null,te=null,ne=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:de,disable:Ce,bindFramebuffer:Pe,drawBuffers:Ge,useProgram:Et,setBlending:vt,setMaterial:Je,setFlipSided:yt,setCullFace:He,setLineWidth:Dt,setPolygonOffset:Fe,setScissorTest:at,activeTexture:It,bindTexture:zt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:Ye,texImage3D:xe,updateUBOMapping:De,uniformBlockBinding:be,texStorage2D:Ee,texStorage3D:Ve,texSubImage2D:fe,texSubImage3D:ve,compressedTexSubImage2D:ue,compressedTexSubImage3D:je,scissor:Ie,viewport:tt,reset:lt}}function AL(n,e,t,r,o,l,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new At,p=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):qc("canvas")}function E(L,w,J){let fe=1;const ve=zt(L);if((ve.width>J||ve.height>J)&&(fe=J/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ue=Math.floor(fe*ve.width),je=Math.floor(fe*ve.height);g===void 0&&(g=M(ue,je));const Ee=w?M(ue,je):g;return Ee.width=ue,Ee.height=je,Ee.getContext("2d").drawImage(L,0,0,ue,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ue+"x"+je+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(L,w,J,fe,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=w;if(w===n.RED&&(J===n.FLOAT&&(ue=n.R32F),J===n.HALF_FLOAT&&(ue=n.R16F),J===n.UNSIGNED_BYTE&&(ue=n.R8)),w===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.R8UI),J===n.UNSIGNED_SHORT&&(ue=n.R16UI),J===n.UNSIGNED_INT&&(ue=n.R32UI),J===n.BYTE&&(ue=n.R8I),J===n.SHORT&&(ue=n.R16I),J===n.INT&&(ue=n.R32I)),w===n.RG&&(J===n.FLOAT&&(ue=n.RG32F),J===n.HALF_FLOAT&&(ue=n.RG16F),J===n.UNSIGNED_BYTE&&(ue=n.RG8)),w===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.RG8UI),J===n.UNSIGNED_SHORT&&(ue=n.RG16UI),J===n.UNSIGNED_INT&&(ue=n.RG32UI),J===n.BYTE&&(ue=n.RG8I),J===n.SHORT&&(ue=n.RG16I),J===n.INT&&(ue=n.RG32I)),w===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),J===n.UNSIGNED_INT&&(ue=n.RGB32UI),J===n.BYTE&&(ue=n.RGB8I),J===n.SHORT&&(ue=n.RGB16I),J===n.INT&&(ue=n.RGB32I)),w===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),J===n.UNSIGNED_INT&&(ue=n.RGBA32UI),J===n.BYTE&&(ue=n.RGBA8I),J===n.SHORT&&(ue=n.RGBA16I),J===n.INT&&(ue=n.RGBA32I)),w===n.RGB&&J===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),w===n.RGBA){const je=ve?Xc:bt.getTransfer(fe);J===n.FLOAT&&(ue=n.RGBA32F),J===n.HALF_FLOAT&&(ue=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ue=je===kt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function A(L,w){let J;return L?w===null||w===ws||w===Oa?J=n.DEPTH24_STENCIL8:w===rr?J=n.DEPTH32F_STENCIL8:w===ka&&(J=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ws||w===Oa?J=n.DEPTH_COMPONENT24:w===rr?J=n.DEPTH_COMPONENT32F:w===ka&&(J=n.DEPTH_COMPONENT16),J}function N(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ri&&L.minFilter!==Ui?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=L.target;w.removeEventListener("dispose",I),B(w),w.isVideoTexture&&p.delete(w)}function F(L){const w=L.target;w.removeEventListener("dispose",F),R(w)}function B(L){const w=r.get(L);if(w.__webglInit===void 0)return;const J=L.source,fe=v.get(J);if(fe){const ve=fe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(L),Object.keys(fe).length===0&&v.delete(J)}r.remove(L)}function b(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const J=L.source,fe=v.get(J);delete fe[w.__cacheKey],c.memory.textures--}function R(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(w.__webglFramebuffer[fe]))for(let ve=0;ve<w.__webglFramebuffer[fe].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[fe][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[fe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[fe])}else{if(Array.isArray(w.__webglFramebuffer))for(let fe=0;fe<w.__webglFramebuffer.length;fe++)n.deleteFramebuffer(w.__webglFramebuffer[fe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let fe=0;fe<w.__webglColorRenderbuffer.length;fe++)w.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[fe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=L.textures;for(let fe=0,ve=J.length;fe<ve;fe++){const ue=r.get(J[fe]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),c.memory.textures--),r.remove(J[fe])}r.remove(L)}let k=0;function re(){k=0}function te(){const L=k;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function ne(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function he(L,w){const J=r.get(L);if(L.isVideoTexture&&at(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(J,L,w);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+w)}function le(L,w){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){pe(J,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+w)}function Y(L,w){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){pe(J,L,w);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+w)}function V(L,w){const J=r.get(L);if(L.version>0&&J.__version!==L.version){de(J,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+w)}const ce={[_h]:n.REPEAT,[ys]:n.CLAMP_TO_EDGE,[yh]:n.MIRRORED_REPEAT},se={[Ri]:n.NEAREST,[JC]:n.NEAREST_MIPMAP_NEAREST,[ac]:n.NEAREST_MIPMAP_LINEAR,[Ui]:n.LINEAR,[sd]:n.LINEAR_MIPMAP_NEAREST,[xs]:n.LINEAR_MIPMAP_LINEAR},O={[iR]:n.NEVER,[cR]:n.ALWAYS,[rR]:n.LESS,[Dx]:n.LEQUAL,[sR]:n.EQUAL,[lR]:n.GEQUAL,[oR]:n.GREATER,[aR]:n.NOTEQUAL};function q(L,w){if(w.type===rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ui||w.magFilter===sd||w.magFilter===ac||w.magFilter===xs||w.minFilter===Ui||w.minFilter===sd||w.minFilter===ac||w.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ce[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ce[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ce[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,se[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ri||w.minFilter!==ac&&w.minFilter!==xs||w.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(L,w){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I));const fe=w.source;let ve=v.get(fe);ve===void 0&&(ve={},v.set(fe,ve));const ue=ne(w);if(ue!==L.__cacheKey){ve[ue]===void 0&&(ve[ue]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ve[ue].usedTimes++;const je=ve[L.__cacheKey];je!==void 0&&(ve[L.__cacheKey].usedTimes--,je.usedTimes===0&&b(w)),L.__cacheKey=ue,L.__webglTexture=ve[ue].texture}return J}function Le(L,w,J){return Math.floor(Math.floor(L/J)/w)}function K(L,w,J,fe){const ue=L.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,J,fe,w.data);else{ue.sort((xe,Ie)=>xe.start-Ie.start);let je=0;for(let xe=1;xe<ue.length;xe++){const Ie=ue[je],tt=ue[xe],De=Ie.start+Ie.count,be=Le(tt.start,w.width,4),lt=Le(Ie.start,w.width,4);tt.start<=De+1&&be===lt&&Le(tt.start+tt.count-1,w.width,4)===be?Ie.count=Math.max(Ie.count,tt.start+tt.count-Ie.start):(++je,ue[je]=tt)}ue.length=je+1;const Ee=n.getParameter(n.UNPACK_ROW_LENGTH),Ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let xe=0,Ie=ue.length;xe<Ie;xe++){const tt=ue[xe],De=Math.floor(tt.start/4),be=Math.ceil(tt.count/4),lt=De%w.width,G=Math.floor(De/w.width),Se=be,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,lt,G,Se,Re,J,fe,w.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ee),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ye)}}function pe(L,w,J){let fe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=n.TEXTURE_3D);const ve=Oe(L,w),ue=w.source;t.bindTexture(fe,L.__webglTexture,n.TEXTURE0+J);const je=r.get(ue);if(ue.version!==je.__version||ve===!0){t.activeTexture(n.TEXTURE0+J);const Ee=bt.getPrimaries(bt.workingColorSpace),Ve=w.colorSpace===Ur?null:bt.getPrimaries(w.colorSpace),Ye=w.colorSpace===Ur||Ee===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let xe=E(w.image,!1,o.maxTextureSize);xe=It(w,xe);const Ie=l.convert(w.format,w.colorSpace),tt=l.convert(w.type);let De=P(w.internalFormat,Ie,tt,w.colorSpace,w.isVideoTexture);q(fe,w);let be;const lt=w.mipmaps,G=w.isVideoTexture!==!0,Se=je.__version===void 0||ve===!0,Re=ue.dataReady,ke=N(w,xe);if(w.isDepthTexture)De=A(w.format===za,w.type),Se&&(G?t.texStorage2D(n.TEXTURE_2D,1,De,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,De,xe.width,xe.height,0,Ie,tt,null));else if(w.isDataTexture)if(lt.length>0){G&&Se&&t.texStorage2D(n.TEXTURE_2D,ke,De,lt[0].width,lt[0].height);for(let Me=0,me=lt.length;Me<me;Me++)be=lt[Me],G?Re&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,be.width,be.height,Ie,tt,be.data):t.texImage2D(n.TEXTURE_2D,Me,De,be.width,be.height,0,Ie,tt,be.data);w.generateMipmaps=!1}else G?(Se&&t.texStorage2D(n.TEXTURE_2D,ke,De,xe.width,xe.height),Re&&K(w,xe,Ie,tt)):t.texImage2D(n.TEXTURE_2D,0,De,xe.width,xe.height,0,Ie,tt,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,De,lt[0].width,lt[0].height,xe.depth);for(let Me=0,me=lt.length;Me<me;Me++)if(be=lt[Me],w.format!==Ci)if(Ie!==null)if(G){if(Re)if(w.layerUpdates.size>0){const qe=c_(be.width,be.height,w.format,w.type);for(const dt of w.layerUpdates){const Nt=be.data.subarray(dt*qe/be.data.BYTES_PER_ELEMENT,(dt+1)*qe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,dt,be.width,be.height,1,Ie,Nt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,be.width,be.height,xe.depth,Ie,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,De,be.width,be.height,xe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,be.width,be.height,xe.depth,Ie,tt,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,De,be.width,be.height,xe.depth,0,Ie,tt,be.data)}else{G&&Se&&t.texStorage2D(n.TEXTURE_2D,ke,De,lt[0].width,lt[0].height);for(let Me=0,me=lt.length;Me<me;Me++)be=lt[Me],w.format!==Ci?Ie!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,be.width,be.height,Ie,be.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,be.width,be.height,Ie,tt,be.data):t.texImage2D(n.TEXTURE_2D,Me,De,be.width,be.height,0,Ie,tt,be.data)}else if(w.isDataArrayTexture)if(G){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,De,xe.width,xe.height,xe.depth),Re)if(w.layerUpdates.size>0){const Me=c_(xe.width,xe.height,w.format,w.type);for(const me of w.layerUpdates){const qe=xe.data.subarray(me*Me/xe.data.BYTES_PER_ELEMENT,(me+1)*Me/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,xe.width,xe.height,1,Ie,tt,qe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,tt,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,xe.width,xe.height,xe.depth,0,Ie,tt,xe.data);else if(w.isData3DTexture)G?(Se&&t.texStorage3D(n.TEXTURE_3D,ke,De,xe.width,xe.height,xe.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,tt,xe.data)):t.texImage3D(n.TEXTURE_3D,0,De,xe.width,xe.height,xe.depth,0,Ie,tt,xe.data);else if(w.isFramebufferTexture){if(Se)if(G)t.texStorage2D(n.TEXTURE_2D,ke,De,xe.width,xe.height);else{let Me=xe.width,me=xe.height;for(let qe=0;qe<ke;qe++)t.texImage2D(n.TEXTURE_2D,qe,De,Me,me,0,Ie,tt,null),Me>>=1,me>>=1}}else if(lt.length>0){if(G&&Se){const Me=zt(lt[0]);t.texStorage2D(n.TEXTURE_2D,ke,De,Me.width,Me.height)}for(let Me=0,me=lt.length;Me<me;Me++)be=lt[Me],G?Re&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ie,tt,be):t.texImage2D(n.TEXTURE_2D,Me,De,Ie,tt,be);w.generateMipmaps=!1}else if(G){if(Se){const Me=zt(xe);t.texStorage2D(n.TEXTURE_2D,ke,De,Me.width,Me.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,tt,xe)}else t.texImage2D(n.TEXTURE_2D,0,De,Ie,tt,xe);S(w)&&y(fe),je.__version=ue.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,J){if(w.image.length!==6)return;const fe=Oe(L,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+J);const ue=r.get(ve);if(ve.version!==ue.__version||fe===!0){t.activeTexture(n.TEXTURE0+J);const je=bt.getPrimaries(bt.workingColorSpace),Ee=w.colorSpace===Ur?null:bt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Ur||je===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let me=0;me<6;me++)!Ye&&!xe?Ie[me]=E(w.image[me],!0,o.maxCubemapSize):Ie[me]=xe?w.image[me].image:w.image[me],Ie[me]=It(w,Ie[me]);const tt=Ie[0],De=l.convert(w.format,w.colorSpace),be=l.convert(w.type),lt=P(w.internalFormat,De,be,w.colorSpace),G=w.isVideoTexture!==!0,Se=ue.__version===void 0||fe===!0,Re=ve.dataReady;let ke=N(w,tt);q(n.TEXTURE_CUBE_MAP,w);let Me;if(Ye){G&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,lt,tt.width,tt.height);for(let me=0;me<6;me++){Me=Ie[me].mipmaps;for(let qe=0;qe<Me.length;qe++){const dt=Me[qe];w.format!==Ci?De!==null?G?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,0,0,dt.width,dt.height,De,dt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,lt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,0,0,dt.width,dt.height,De,be,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,lt,dt.width,dt.height,0,De,be,dt.data)}}}else{if(Me=w.mipmaps,G&&Se){Me.length>0&&ke++;const me=zt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,lt,me.width,me.height)}for(let me=0;me<6;me++)if(xe){G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ie[me].width,Ie[me].height,De,be,Ie[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,lt,Ie[me].width,Ie[me].height,0,De,be,Ie[me].data);for(let qe=0;qe<Me.length;qe++){const Nt=Me[qe].image[me].image;G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,0,0,Nt.width,Nt.height,De,be,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,lt,Nt.width,Nt.height,0,De,be,Nt.data)}}else{G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De,be,Ie[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,lt,De,be,Ie[me]);for(let qe=0;qe<Me.length;qe++){const dt=Me[qe];G?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,0,0,De,be,dt.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,lt,De,be,dt.image[me])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),ue.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ce(L,w,J,fe,ve,ue){const je=l.convert(J.format,J.colorSpace),Ee=l.convert(J.type),Ve=P(J.internalFormat,je,Ee,J.colorSpace),Ye=r.get(w),xe=r.get(J);if(xe.__renderTarget=w,!Ye.__hasExternalTextures){const Ie=Math.max(1,w.width>>ue),tt=Math.max(1,w.height>>ue);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,ue,Ve,Ie,tt,w.depth,0,je,Ee,null):t.texImage2D(ve,ue,Ve,Ie,tt,0,je,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Fe(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ve,xe.__webglTexture,0,Dt(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,ve,xe.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(L,w,J){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const fe=w.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,ue=A(w.stencilBuffer,ve),je=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=Dt(w);Fe(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ue,w.width,w.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ue,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,je,n.RENDERBUFFER,L)}else{const fe=w.textures;for(let ve=0;ve<fe.length;ve++){const ue=fe[ve],je=l.convert(ue.format,ue.colorSpace),Ee=l.convert(ue.type),Ve=P(ue.internalFormat,je,Ee,ue.colorSpace),Ye=Dt(w);J&&Fe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ve,w.width,w.height):Fe(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(w.depthTexture);fe.__renderTarget=w,(!fe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ve=fe.__webglTexture,ue=Dt(w);if(w.depthTexture.format===Ba)Fe(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(w.depthTexture.format===za)Fe(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Et(L){const w=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),fe){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,fe.removeEventListener("dispose",ve)};fe.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=fe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const fe=L.texture.mipmaps;fe&&fe.length>0?Ge(w.__webglFramebuffer[0],L):Ge(w.__webglFramebuffer,L)}else if(J){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]===void 0)w.__webglDepthbuffer[fe]=n.createRenderbuffer(),Pe(w.__webglDepthbuffer[fe],L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[fe];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,ue)}}else{const fe=L.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Pe(w.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(L,w,J){const fe=r.get(L);w!==void 0&&Ce(fe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&Et(L)}function z(L){const w=L.texture,J=r.get(L),fe=r.get(w);L.addEventListener("dispose",F);const ve=L.textures,ue=L.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=w.version,c.memory.textures++),ue){J.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Ee]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)J.__webglFramebuffer[Ee][Ve]=n.createFramebuffer()}else J.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)J.__webglFramebuffer[Ee]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(je)for(let Ee=0,Ve=ve.length;Ee<Ve;Ee++){const Ye=r.get(ve[Ee]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),c.memory.textures++)}if(L.samples>0&&Fe(L)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ve.length;Ee++){const Ve=ve[Ee];J.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Ee]);const Ye=l.convert(Ve.format,Ve.colorSpace),xe=l.convert(Ve.type),Ie=P(Ve.internalFormat,Ye,xe,Ve.colorSpace,L.isXRRenderTarget===!0),tt=Dt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,Ie,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,J.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),q(n.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Ce(J.__webglFramebuffer[Ee][Ve],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve);else Ce(J.__webglFramebuffer[Ee],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ee=0,Ve=ve.length;Ee<Ve;Ee++){const Ye=ve[Ee],xe=r.get(Ye);let Ie=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,xe.__webglTexture),q(Ie,Ye),Ce(J.__webglFramebuffer,L,Ye,n.COLOR_ATTACHMENT0+Ee,Ie,0),S(Ye)&&y(Ie)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,fe.__webglTexture),q(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)Ce(J.__webglFramebuffer[Ve],L,w,n.COLOR_ATTACHMENT0,Ee,Ve);else Ce(J.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Ee,0);S(w)&&y(Ee),t.unbindTexture()}L.depthBuffer&&Et(L)}function vt(L){const w=L.textures;for(let J=0,fe=w.length;J<fe;J++){const ve=w[J];if(S(ve)){const ue=D(L),je=r.get(ve).__webglTexture;t.bindTexture(ue,je),y(ue),t.unbindTexture()}}}const Je=[],yt=[];function He(L){if(L.samples>0){if(Fe(L)===!1){const w=L.textures,J=L.width,fe=L.height;let ve=n.COLOR_BUFFER_BIT;const ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,je=r.get(L),Ee=w.length>1;if(Ee)for(let Ye=0;Ye<w.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ye=0;Ye<w.length;Ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,je.__webglColorRenderbuffer[Ye]);const xe=r.get(w[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,J,fe,0,0,J,fe,ve,n.NEAREST),h===!0&&(Je.length=0,yt.length=0,Je.push(n.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Je.push(ue),yt.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Ye=0;Ye<w.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,je.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,je.__webglColorRenderbuffer[Ye]);const xe=r.get(w[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,je.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Dt(L){return Math.min(o.maxSamples,L.samples)}function Fe(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(L){const w=c.render.frame;p.get(L)!==w&&(p.set(L,w),L.update())}function It(L,w){const J=L.colorSpace,fe=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Ro&&J!==Ur&&(bt.getTransfer(J)===kt?(fe!==Ci||ve!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=re,this.setTexture2D=he,this.setTexture2DArray=le,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=ht,this.setupRenderTarget=z,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Fe}function CL(n,e){function t(r,o=Ur){let l;const c=bt.getTransfer(o);if(r===zi)return n.UNSIGNED_BYTE;if(r===Lp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ip)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Tx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Mx)return n.BYTE;if(r===Ex)return n.SHORT;if(r===ka)return n.UNSIGNED_SHORT;if(r===Dp)return n.INT;if(r===ws)return n.UNSIGNED_INT;if(r===rr)return n.FLOAT;if(r===ja)return n.HALF_FLOAT;if(r===wx)return n.ALPHA;if(r===Ax)return n.RGB;if(r===Ci)return n.RGBA;if(r===Ba)return n.DEPTH_COMPONENT;if(r===za)return n.DEPTH_STENCIL;if(r===Cx)return n.RED;if(r===Np)return n.RED_INTEGER;if(r===Rx)return n.RG;if(r===Up)return n.RG_INTEGER;if(r===Fp)return n.RGBA_INTEGER;if(r===Nc||r===Uc||r===Fc||r===kc)if(c===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Nc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Nc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Sh||r===Mh||r===Eh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===xh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===wh||r===Ah)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Th||r===wh)return c===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ah)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ch||r===Rh||r===bh||r===Ph||r===Dh||r===Lh||r===Ih||r===Nh||r===Uh||r===Fh||r===kh||r===Oh||r===Bh||r===zh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ch)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ph)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ih)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zh)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oc||r===Vh||r===Hh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Oc)return c===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bx||r===Gh||r===Wh||r===jh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Oc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Gh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oa?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class Zx extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const RL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Zx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Hr({vertexShader:RL,fragmentShader:bL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ru(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DL extends Io{constructor(e,t){super();const r=this;let o=null,l=1,c=null,u="local-floor",h=1,d=null,p=null,g=null,v=null,x=null,M=null;const E=new PL,S={},y=t.getContextAttributes();let D=null,P=null;const A=[],N=[],I=new At;let F=null;const B=new Gn;B.viewport=new Ot;const b=new Gn;b.viewport=new Ot;const R=[B,b],k=new ZR;let re=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let pe=A[K];return pe===void 0&&(pe=new Rd,A[K]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(K){let pe=A[K];return pe===void 0&&(pe=new Rd,A[K]=pe),pe.getGripSpace()},this.getHand=function(K){let pe=A[K];return pe===void 0&&(pe=new Rd,A[K]=pe),pe.getHandSpace()};function ne(K){const pe=N.indexOf(K.inputSource);if(pe===-1)return;const de=A[pe];de!==void 0&&(de.update(K.inputSource,K.frame,d||c),de.dispatchEvent({type:K.type,data:K.inputSource}))}function he(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",he),o.removeEventListener("inputsourceschange",le);for(let K=0;K<A.length;K++){const pe=N[K];pe!==null&&(N[K]=null,A[K].disconnect(pe))}re=null,te=null,E.reset();for(const K in S)delete S[K];e.setRenderTarget(D),x=null,v=null,g=null,o=null,P=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",he),o.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(o,t)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ce=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?za:Ba,Ce=y.stencil?Oa:ws);const Ge={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};v=g.createProjectionLayer(Ge),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new As(v.textureWidth,v.textureHeight,{format:Ci,type:zi,depthTexture:new Wx(v.textureWidth,v.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new As(x.framebufferWidth,x.framebufferHeight,{format:Ci,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await o.requestReferenceSpace(u),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function le(K){for(let pe=0;pe<K.removed.length;pe++){const de=K.removed[pe],Ce=N.indexOf(de);Ce>=0&&(N[Ce]=null,A[Ce].disconnect(de))}for(let pe=0;pe<K.added.length;pe++){const de=K.added[pe];let Ce=N.indexOf(de);if(Ce===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=N.length){N.push(de),Ce=Ge;break}else if(N[Ge]===null){N[Ge]=de,Ce=Ge;break}if(Ce===-1)break}const Pe=A[Ce];Pe&&Pe.connect(de)}}const Y=new Q,V=new Q;function ce(K,pe,de){Y.setFromMatrixPosition(pe.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const Ce=Y.distanceTo(V),Pe=pe.projectionMatrix.elements,Ge=de.projectionMatrix.elements,Et=Pe[14]/(Pe[10]-1),ht=Pe[14]/(Pe[10]+1),z=(Pe[9]+1)/Pe[5],vt=(Pe[9]-1)/Pe[5],Je=(Pe[8]-1)/Pe[0],yt=(Ge[8]+1)/Ge[0],He=Et*Je,Dt=Et*yt,Fe=Ce/(-Je+yt),at=Fe*-Je;if(pe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const It=Et+Fe,zt=ht+Fe,L=He-at,w=Dt+(Ce-at),J=z*ht/zt*It,fe=vt*ht/zt*It;K.projectionMatrix.makePerspective(L,w,J,fe,It,zt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,pe){pe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(pe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let pe=K.near,de=K.far;E.texture!==null&&(E.depthNear>0&&(pe=E.depthNear),E.depthFar>0&&(de=E.depthFar)),k.near=b.near=B.near=pe,k.far=b.far=B.far=de,(re!==k.near||te!==k.far)&&(o.updateRenderState({depthNear:k.near,depthFar:k.far}),re=k.near,te=k.far),k.layers.mask=K.layers.mask|6,B.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const Ce=K.parent,Pe=k.cameras;se(k,Ce);for(let Ge=0;Ge<Pe.length;Ge++)se(Pe[Ge],Ce);Pe.length===2?ce(k,B,b):k.projectionMatrix.copy(B.projectionMatrix),O(K,k,Ce)};function O(K,pe,de){de===null?K.matrix.copy(pe.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(pe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(K){h=K,v!==null&&(v.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(k)},this.getCameraTexture=function(K){return S[K]};let q=null;function Oe(K,pe){if(p=pe.getViewerPose(d||c),M=pe,p!==null){const de=p.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Ce=!1;de.length!==k.cameras.length&&(k.cameras.length=0,Ce=!0);for(let ht=0;ht<de.length;ht++){const z=de[ht];let vt=null;if(x!==null)vt=x.getViewport(z);else{const yt=g.getViewSubImage(v,z);vt=yt.viewport,ht===0&&(e.setRenderTargetTextures(P,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(P))}let Je=R[ht];Je===void 0&&(Je=new Gn,Je.layers.enable(ht),Je.viewport=new Ot,R[ht]=Je),Je.matrix.fromArray(z.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(z.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(vt.x,vt.y,vt.width,vt.height),ht===0&&(k.matrix.copy(Je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ce===!0&&k.cameras.push(Je)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const ht=g.getDepthInformation(de[0]);ht&&ht.isValid&&ht.texture&&E.init(ht,o.renderState)}if(Pe&&Pe.includes("camera-access")&&(e.state.unbindTexture(),g))for(let ht=0;ht<de.length;ht++){const z=de[ht].camera;if(z){let vt=S[z];vt||(vt=new Zx,S[z]=vt);const Je=g.getCameraImage(z);vt.sourceTexture=Je}}}for(let de=0;de<A.length;de++){const Ce=N[de],Pe=A[de];Ce!==null&&Pe!==void 0&&Pe.update(Ce,pe,d||c)}q&&q(K,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Le=new Xx;Le.setAnimationLoop(Oe),this.setAnimationLoop=function(K){q=K},this.dispose=function(){}}}const fs=new Vi,LL=new Zt;function IL(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,zx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,P,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),p(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?h(S,y,D,P):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),P=D.envMap,A=D.envMapRotation;P&&(S.envMap.value=P,fs.copy(A),fs.x*=-1,fs.y*=-1,fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),S.envMapRotation.value.setFromMatrix4(LL.makeRotationFromEuler(fs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,D,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function NL(n,e,t,r){let o={},l={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,P){const A=P.program;r.uniformBlockBinding(D,A)}function d(D,P){let A=o[D.id];A===void 0&&(M(D),A=p(D),o[D.id]=A,D.addEventListener("dispose",S));const N=P.program;r.updateUBOMapping(D,N);const I=e.render.frame;l[D.id]!==I&&(v(D),l[D.id]=I)}function p(D){const P=g();D.__bindingPointIndex=P;const A=n.createBuffer(),N=D.__size,I=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,A),A}function g(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const P=o[D.id],A=D.uniforms,N=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let I=0,F=A.length;I<F;I++){const B=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,R=B.length;b<R;b++){const k=B[b];if(x(k,I,b,N)===!0){const re=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let ne=0;for(let he=0;he<te.length;he++){const le=te[he],Y=E(le);typeof le=="number"||typeof le=="boolean"?(k.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,re+ne,k.__data)):le.isMatrix3?(k.__data[0]=le.elements[0],k.__data[1]=le.elements[1],k.__data[2]=le.elements[2],k.__data[3]=0,k.__data[4]=le.elements[3],k.__data[5]=le.elements[4],k.__data[6]=le.elements[5],k.__data[7]=0,k.__data[8]=le.elements[6],k.__data[9]=le.elements[7],k.__data[10]=le.elements[8],k.__data[11]=0):(le.toArray(k.__data,ne),ne+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,re,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,P,A,N){const I=D.value,F=P+"_"+A;if(N[F]===void 0)return typeof I=="number"||typeof I=="boolean"?N[F]=I:N[F]=I.clone(),!0;{const B=N[F];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return N[F]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function M(D){const P=D.uniforms;let A=0;const N=16;for(let F=0,B=P.length;F<B;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,k=b.length;R<k;R++){const re=b[R],te=Array.isArray(re.value)?re.value:[re.value];for(let ne=0,he=te.length;ne<he;ne++){const le=te[ne],Y=E(le),V=A%N,ce=V%Y.boundary,se=V+ce;A+=ce,se!==0&&N-se<Y.storage&&(A+=N-se),re.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=A,A+=Y.storage}}}const I=A%N;return I>0&&(A+=N-I),D.__size=A,D.__cache={},this}function E(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function S(D){const P=D.target;P.removeEventListener("dispose",S);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:h,update:d,dispose:y}}class UL{constructor(e={}){const{canvas:t=fR(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=fi;let I=0,F=0,B=null,b=-1,R=null;const k=new Ot,re=new Ot;let te=null;const ne=new pt(0);let he=0,le=t.width,Y=t.height,V=1,ce=null,se=null;const O=new Ot(0,0,le,Y),q=new Ot(0,0,le,Y);let Oe=!1;const Le=new Op;let K=!1,pe=!1;const de=new Zt,Ce=new Q,Pe=new Ot,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function ht(){return B===null?V:1}let z=r;function vt(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pp}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Me,!1),z===null){const $="webgl2";if(z=vt($,C),z===null)throw vt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Je,yt,He,Dt,Fe,at,It,zt,L,w,J,fe,ve,ue,je,Ee,Ve,Ye,xe,Ie,tt,De,be,lt;function G(){Je=new jP(z),Je.init(),De=new CL(z,Je),yt=new OP(z,Je,e,De),He=new wL(z,Je),yt.reversedDepthBuffer&&v&&He.buffers.depth.setReversed(!0),Dt=new YP(z),Fe=new dL,at=new AL(z,Je,He,Fe,yt,De,Dt),It=new zP(A),zt=new WP(A),L=new eb(z),be=new FP(z,L),w=new XP(z,L,Dt,be),J=new KP(z,w,L,Dt),xe=new qP(z,yt,at),Ee=new BP(Fe),fe=new fL(A,It,zt,Je,yt,be,Ee),ve=new IL(A,Fe),ue=new pL,je=new xL(Je),Ye=new UP(A,It,zt,He,J,x,h),Ve=new EL(A,J,yt),lt=new NL(z,Dt,yt,He),Ie=new kP(z,Je,Dt),tt=new $P(z,Je,Dt),Dt.programs=fe.programs,A.capabilities=yt,A.extensions=Je,A.properties=Fe,A.renderLists=ue,A.shadowMap=Ve,A.state=He,A.info=Dt}G();const Se=new DL(A,z);this.xr=Se,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(le,Y,!1))},this.getSize=function(C){return C.set(le,Y)},this.setSize=function(C,$,oe=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=C,Y=$,t.width=Math.floor(C*V),t.height=Math.floor($*V),oe===!0&&(t.style.width=C+"px",t.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(le*V,Y*V).floor()},this.setDrawingBufferSize=function(C,$,oe){le=C,Y=$,V=oe,t.width=Math.floor(C*oe),t.height=Math.floor($*oe),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,$,oe,ae){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,$,oe,ae),He.viewport(k.copy(O).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,$,oe,ae){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,$,oe,ae),He.scissor(re.copy(q).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(C){He.setScissorTest(Oe=C)},this.setOpaqueSort=function(C){ce=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,oe=!0){let ae=0;if(C){let j=!1;if(B!==null){const Te=B.texture.format;j=Te===Fp||Te===Up||Te===Np}if(j){const Te=B.texture.type,Ne=Te===zi||Te===ws||Te===ka||Te===Oa||Te===Lp||Te===Ip,Xe=Ye.getClearColor(),Be=Ye.getClearAlpha(),st=Xe.r,ot=Xe.g,Qe=Xe.b;Ne?(M[0]=st,M[1]=ot,M[2]=Qe,M[3]=Be,z.clearBufferuiv(z.COLOR,0,M)):(E[0]=st,E[1]=ot,E[2]=Qe,E[3]=Be,z.clearBufferiv(z.COLOR,0,E))}else ae|=z.COLOR_BUFFER_BIT}$&&(ae|=z.DEPTH_BUFFER_BIT),oe&&(ae|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ye.dispose(),ue.dispose(),je.dispose(),Fe.dispose(),It.dispose(),zt.dispose(),J.dispose(),be.dispose(),lt.dispose(),fe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",xn),Se.removeEventListener("sessionend",Cs),$n.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=Dt.autoReset,$=Ve.enabled,oe=Ve.autoUpdate,ae=Ve.needsUpdate,j=Ve.type;G(),Dt.autoReset=C,Ve.enabled=$,Ve.autoUpdate=oe,Ve.needsUpdate=ae,Ve.type=j}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function me(C){const $=C.target;$.removeEventListener("dispose",me),qe($)}function qe(C){dt(C),Fe.remove(C)}function dt(C){const $=Fe.get(C).programs;$!==void 0&&($.forEach(function(oe){fe.releaseProgram(oe)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,oe,ae,j,Te){$===null&&($=Ge);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Xe=Gi(C,$,oe,ae,j);He.setMaterial(ae,Ne);let Be=oe.index,st=1;if(ae.wireframe===!0){if(Be=w.getWireframeAttribute(oe),Be===void 0)return;st=2}const ot=oe.drawRange,Qe=oe.attributes.position;let ut=ot.start*st,Lt=(ot.start+ot.count)*st;Te!==null&&(ut=Math.max(ut,Te.start*st),Lt=Math.min(Lt,(Te.start+Te.count)*st)),Be!==null?(ut=Math.max(ut,0),Lt=Math.min(Lt,Be.count)):Qe!=null&&(ut=Math.max(ut,0),Lt=Math.min(Lt,Qe.count));const wt=Lt-ut;if(wt<0||wt===1/0)return;be.setup(j,ae,Xe,oe,Be);let Vt,Ut=Ie;if(Be!==null&&(Vt=L.get(Be),Ut=tt,Ut.setIndex(Vt)),j.isMesh)ae.wireframe===!0?(He.setLineWidth(ae.wireframeLinewidth*ht()),Ut.setMode(z.LINES)):Ut.setMode(z.TRIANGLES);else if(j.isLine){let nt=ae.linewidth;nt===void 0&&(nt=1),He.setLineWidth(nt*ht()),j.isLineSegments?Ut.setMode(z.LINES):j.isLineLoop?Ut.setMode(z.LINE_LOOP):Ut.setMode(z.LINE_STRIP)}else j.isPoints?Ut.setMode(z.POINTS):j.isSprite&&Ut.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,Ft=j._multiDrawCounts,xt=j._multiDrawCount,an=Be?L.get(Be).bytesPerElement:1,mi=Fe.get(ae).currentProgram.getUniforms();for(let Pn=0;Pn<xt;Pn++)mi.setValue(z,"_gl_DrawID",Pn),Ut.render(nt[Pn]/an,Ft[Pn])}else if(j.isInstancedMesh)Ut.renderInstances(ut,wt,j.count);else if(oe.isInstancedBufferGeometry){const nt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ft=Math.min(oe.instanceCount,nt);Ut.renderInstances(ut,wt,Ft)}else Ut.render(ut,wt)};function Nt(C,$,oe){C.transparent===!0&&C.side===Ni&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,bs(C,$,oe),C.side=Vr,C.needsUpdate=!0,bs(C,$,oe),C.side=Ni):bs(C,$,oe)}this.compile=function(C,$,oe=null){oe===null&&(oe=C),y=je.get(oe),y.init($),P.push(y),oe.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),C!==oe&&C.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const ae=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Xe=Te[Ne];Nt(Xe,oe,j),ae.add(Xe)}else Nt(Te,oe,j),ae.add(Te)}),y=P.pop(),ae},this.compileAsync=function(C,$,oe=null){const ae=this.compile(C,$,oe);return new Promise(j=>{function Te(){if(ae.forEach(function(Ne){Fe.get(Ne).currentProgram.isReady()&&ae.delete(Ne)}),ae.size===0){j(C);return}setTimeout(Te,10)}Je.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tt=null;function ti(C){Tt&&Tt(C)}function xn(){$n.stop()}function Cs(){$n.start()}const $n=new Xx;$n.setAnimationLoop(ti),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(C){Tt=C,Se.setAnimationLoop(C),C===null?$n.stop():$n.start()},Se.addEventListener("sessionstart",xn),Se.addEventListener("sessionend",Cs),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera($),$=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,$,B),y=je.get(C,P.length),y.init($),P.push(y),de.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Le.setFromProjectionMatrix(de,Fi,$.reversedDepth),pe=this.localClippingEnabled,K=Ee.init(this.clippingPlanes,pe),S=ue.get(C,D.length),S.init(),D.push(S),Se.enabled===!0&&Se.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&Fo(Te,$,-1/0,A.sortObjects)}Fo(C,$,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ce,se),Et=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Et&&Ye.addToRenderList(S,C),this.info.render.frame++,K===!0&&Ee.beginShadows();const oe=y.state.shadowsArray;Ve.render(oe,C,$),K===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,j=S.transmissive;if(y.setupLights(),$.isArrayCamera){const Te=$.cameras;if(j.length>0)for(let Ne=0,Xe=Te.length;Ne<Xe;Ne++){const Be=Te[Ne];Wr(ae,j,C,Be)}Et&&Ye.render(C);for(let Ne=0,Xe=Te.length;Ne<Xe;Ne++){const Be=Te[Ne];lr(S,C,Be,Be.viewport)}}else j.length>0&&Wr(ae,j,C,$),Et&&Ye.render(C),lr(S,C,$);B!==null&&F===0&&(at.updateMultisampleRenderTarget(B),at.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(A,C,$),be.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(y=P[P.length-1],K===!0&&Ee.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Fo(C,$,oe,ae){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){ae&&Pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const Ne=J.update(C),Xe=C.material;Xe.visible&&S.push(C,Ne,Xe,oe,Pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){const Ne=J.update(C),Xe=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Pe.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Pe.copy(Ne.boundingSphere.center)),Pe.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Xe)){const Be=Ne.groups;for(let st=0,ot=Be.length;st<ot;st++){const Qe=Be[st],ut=Xe[Qe.materialIndex];ut&&ut.visible&&S.push(C,Ne,ut,oe,Pe.z,Qe)}}else Xe.visible&&S.push(C,Ne,Xe,oe,Pe.z,null)}}const Te=C.children;for(let Ne=0,Xe=Te.length;Ne<Xe;Ne++)Fo(Te[Ne],$,oe,ae)}function lr(C,$,oe,ae){const j=C.opaque,Te=C.transmissive,Ne=C.transparent;y.setupLightsView(oe),K===!0&&Ee.setGlobalState(A.clippingPlanes,oe),ae&&He.viewport(k.copy(ae)),j.length>0&&Hi(j,$,oe),Te.length>0&&Hi(Te,$,oe),Ne.length>0&&Hi(Ne,$,oe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Wr(C,$,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new As(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?ja:zi,minFilter:xs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=y.state.transmissionRenderTarget[ae.id],Ne=ae.viewport||k;Te.setSize(Ne.z*A.transmissionResolutionScale,Ne.w*A.transmissionResolutionScale);const Xe=A.getRenderTarget(),Be=A.getActiveCubeFace(),st=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(ne),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),Et&&Ye.render(oe);const ot=A.toneMapping;A.toneMapping=Or;const Qe=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),K===!0&&Ee.setGlobalState(A.clippingPlanes,ae),Hi(C,oe,ae),at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Lt=0,wt=$.length;Lt<wt;Lt++){const Vt=$[Lt],Ut=Vt.object,nt=Vt.geometry,Ft=Vt.material,xt=Vt.group;if(Ft.side===Ni&&Ut.layers.test(ae.layers)){const an=Ft.side;Ft.side=jn,Ft.needsUpdate=!0,Rs(Ut,oe,ae,nt,Ft,xt),Ft.side=an,Ft.needsUpdate=!0,ut=!0}}ut===!0&&(at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te))}A.setRenderTarget(Xe,Be,st),A.setClearColor(ne,he),Qe!==void 0&&(ae.viewport=Qe),A.toneMapping=ot}function Hi(C,$,oe){const ae=$.isScene===!0?$.overrideMaterial:null;for(let j=0,Te=C.length;j<Te;j++){const Ne=C[j],Xe=Ne.object,Be=Ne.geometry,st=Ne.group;let ot=Ne.material;ot.allowOverride===!0&&ae!==null&&(ot=ae),Xe.layers.test(oe.layers)&&Rs(Xe,$,oe,Be,ot,st)}}function Rs(C,$,oe,ae,j,Te){C.onBeforeRender(A,$,oe,ae,j,Te),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(A,$,oe,ae,C,Te),j.transparent===!0&&j.side===Ni&&j.forceSinglePass===!1?(j.side=jn,j.needsUpdate=!0,A.renderBufferDirect(oe,$,ae,j,C,Te),j.side=Vr,j.needsUpdate=!0,A.renderBufferDirect(oe,$,ae,j,C,Te),j.side=Ni):A.renderBufferDirect(oe,$,ae,j,C,Te),C.onAfterRender(A,$,oe,ae,j,Te)}function bs(C,$,oe){$.isScene!==!0&&($=Ge);const ae=Fe.get(C),j=y.state.lights,Te=y.state.shadowsArray,Ne=j.state.version,Xe=fe.getParameters(C,j.state,Te,$,oe),Be=fe.getProgramCacheKey(Xe);let st=ae.programs;ae.environment=C.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(C.isMeshStandardMaterial?zt:It).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",me),st=new Map,ae.programs=st);let ot=st.get(Be);if(ot!==void 0){if(ae.currentProgram===ot&&ae.lightsStateVersion===Ne)return Za(C,Xe),ot}else Xe.uniforms=fe.getUniforms(C),C.onBeforeCompile(Xe,A),ot=fe.acquireProgram(Xe,Be),st.set(Be,ot),ae.uniforms=Xe.uniforms;const Qe=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ee.uniform),Za(C,Xe),ae.needsLights=Ja(C),ae.lightsStateVersion=Ne,ae.needsLights&&(Qe.ambientLightColor.value=j.state.ambient,Qe.lightProbe.value=j.state.probe,Qe.directionalLights.value=j.state.directional,Qe.directionalLightShadows.value=j.state.directionalShadow,Qe.spotLights.value=j.state.spot,Qe.spotLightShadows.value=j.state.spotShadow,Qe.rectAreaLights.value=j.state.rectArea,Qe.ltc_1.value=j.state.rectAreaLTC1,Qe.ltc_2.value=j.state.rectAreaLTC2,Qe.pointLights.value=j.state.point,Qe.pointLightShadows.value=j.state.pointShadow,Qe.hemisphereLights.value=j.state.hemi,Qe.directionalShadowMap.value=j.state.directionalShadowMap,Qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qe.spotShadowMap.value=j.state.spotShadowMap,Qe.spotLightMatrix.value=j.state.spotLightMatrix,Qe.spotLightMap.value=j.state.spotLightMap,Qe.pointShadowMap.value=j.state.pointShadowMap,Qe.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=ot,ae.uniformsList=null,ot}function Ka(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Bc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Za(C,$){const oe=Fe.get(C);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Gi(C,$,oe,ae,j){$.isScene!==!0&&($=Ge),at.resetTextureUnits();const Te=$.fog,Ne=ae.isMeshStandardMaterial?$.environment:null,Xe=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ro,Be=(ae.isMeshStandardMaterial?zt:It).get(ae.envMap||Ne),st=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!oe.morphAttributes.position,ut=!!oe.morphAttributes.normal,Lt=!!oe.morphAttributes.color;let wt=Or;ae.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(wt=A.toneMapping);const Vt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=Vt!==void 0?Vt.length:0,nt=Fe.get(ae),Ft=y.state.lights;if(K===!0&&(pe===!0||C!==R)){const en=C===R&&ae.id===b;Ee.setState(ae,C,en)}let xt=!1;ae.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ft.state.version||nt.outputColorSpace!==Xe||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==Be||ae.fog===!0&&nt.fog!==Te||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==ot||nt.morphTargets!==Qe||nt.morphNormals!==ut||nt.morphColors!==Lt||nt.toneMapping!==wt||nt.morphTargetsCount!==Ut)&&(xt=!0):(xt=!0,nt.__version=ae.version);let an=nt.currentProgram;xt===!0&&(an=bs(ae,$,j));let mi=!1,Pn=!1,jr=!1;const Ht=an.getUniforms(),Dn=nt.uniforms;if(He.useProgram(an.program)&&(mi=!0,Pn=!0,jr=!0),ae.id!==b&&(b=ae.id,Pn=!0),mi||R!==C){He.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(z,"projectionMatrix",C.projectionMatrix),Ht.setValue(z,"viewMatrix",C.matrixWorldInverse);const Mn=Ht.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,Ce.setFromMatrixPosition(C.matrixWorld)),yt.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Pn=!0,jr=!0)}if(j.isSkinnedMesh){Ht.setOptional(z,j,"bindMatrix"),Ht.setOptional(z,j,"bindMatrixInverse");const en=j.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ht.setValue(z,"boneTexture",en.boneTexture,at))}j.isBatchedMesh&&(Ht.setOptional(z,j,"batchingTexture"),Ht.setValue(z,"batchingTexture",j._matricesTexture,at),Ht.setOptional(z,j,"batchingIdTexture"),Ht.setValue(z,"batchingIdTexture",j._indirectTexture,at),Ht.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Ht.setValue(z,"batchingColorTexture",j._colorsTexture,at));const Sn=oe.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&xe.update(j,oe,an),(Pn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,Ht.setValue(z,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Dn.envMap.value=Be,Dn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(Dn.envMapIntensity.value=$.environmentIntensity),Pn&&(Ht.setValue(z,"toneMappingExposure",A.toneMappingExposure),nt.needsLights&&Qa(Dn,jr),Te&&ae.fog===!0&&ve.refreshFogUniforms(Dn,Te),ve.refreshMaterialUniforms(Dn,ae,V,Y,y.state.transmissionRenderTarget[C.id]),Bc.upload(z,Ka(nt),Dn,at)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bc.upload(z,Ka(nt),Dn,at),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(z,"center",j.center),Ht.setValue(z,"modelViewMatrix",j.modelViewMatrix),Ht.setValue(z,"normalMatrix",j.normalMatrix),Ht.setValue(z,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const en=ae.uniformsGroups;for(let Mn=0,Xr=en.length;Mn<Xr;Mn++){const St=en[Mn];lt.update(St,an),lt.bind(St,an)}}return an}function Qa(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Ja(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,$,oe){const ae=Fe.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Fe.get(C.texture).__webglTexture=$,Fe.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const oe=Fe.get(C);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0};const au=z.createFramebuffer();this.setRenderTarget=function(C,$=0,oe=0){B=C,I=$,F=oe;let ae=!0,j=null,Te=!1,Ne=!1;if(C){const Be=Fe.get(C);if(Be.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(z.FRAMEBUFFER,null),ae=!1;else if(Be.__webglFramebuffer===void 0)at.setupRenderTarget(C);else if(Be.__hasExternalTextures)at.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(Be.__boundDepthTexture!==Qe){if(Qe!==null&&Fe.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(C)}}const st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ne=!0);const ot=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[$])?j=ot[$][oe]:j=ot[$],Te=!0):C.samples>0&&at.useMultisampledRTT(C)===!1?j=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?j=ot[oe]:j=ot,k.copy(C.viewport),re.copy(C.scissor),te=C.scissorTest}else k.copy(O).multiplyScalar(V).floor(),re.copy(q).multiplyScalar(V).floor(),te=Oe;if(oe!==0&&(j=au),He.bindFramebuffer(z.FRAMEBUFFER,j)&&ae&&He.drawBuffers(C,j),He.viewport(k),He.scissor(re),He.setScissorTest(te),Te){const Be=Fe.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,oe)}else if(Ne){const Be=$;for(let st=0;st<C.textures.length;st++){const ot=Fe.get(C.textures[st]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+st,ot.__webglTexture,oe,Be)}}else if(C!==null&&oe!==0){const Be=Fe.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,oe)}b=-1},this.readRenderTargetPixels=function(C,$,oe,ae,j,Te,Ne,Xe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){He.bindFramebuffer(z.FRAMEBUFFER,Be);try{const st=C.textures[Xe],ot=st.format,Qe=st.type;if(!yt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ae&&oe>=0&&oe<=C.height-j&&(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Xe),z.readPixels($,oe,ae,j,De.convert(ot),De.convert(Qe),Te))}finally{const st=B!==null?Fe.get(B).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(C,$,oe,ae,j,Te,Ne,Xe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if($>=0&&$<=C.width-ae&&oe>=0&&oe<=C.height-j){He.bindFramebuffer(z.FRAMEBUFFER,Be);const st=C.textures[Xe],ot=st.format,Qe=st.type;if(!yt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.bufferData(z.PIXEL_PACK_BUFFER,Te.byteLength,z.STREAM_READ),C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Xe),z.readPixels($,oe,ae,j,De.convert(ot),De.convert(Qe),0);const Lt=B!==null?Fe.get(B).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,Lt);const wt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await dR(z,wt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Te),z.deleteBuffer(ut),z.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,oe=0){const ae=Math.pow(2,-oe),j=Math.floor(C.image.width*ae),Te=Math.floor(C.image.height*ae),Ne=$!==null?$.x:0,Xe=$!==null?$.y:0;at.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,oe,0,0,Ne,Xe,j,Te),He.unbindTexture()};const el=z.createFramebuffer(),tl=z.createFramebuffer();this.copyTextureToTexture=function(C,$,oe=null,ae=null,j=0,Te=null){Te===null&&(j!==0?(Mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=j,j=0):Te=0);let Ne,Xe,Be,st,ot,Qe,ut,Lt,wt;const Vt=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(oe!==null)Ne=oe.max.x-oe.min.x,Xe=oe.max.y-oe.min.y,Be=oe.isBox3?oe.max.z-oe.min.z:1,st=oe.min.x,ot=oe.min.y,Qe=oe.isBox3?oe.min.z:0;else{const Sn=Math.pow(2,-j);Ne=Math.floor(Vt.width*Sn),Xe=Math.floor(Vt.height*Sn),C.isDataArrayTexture?Be=Vt.depth:C.isData3DTexture?Be=Math.floor(Vt.depth*Sn):Be=1,st=0,ot=0,Qe=0}ae!==null?(ut=ae.x,Lt=ae.y,wt=ae.z):(ut=0,Lt=0,wt=0);const Ut=De.convert($.format),nt=De.convert($.type);let Ft;$.isData3DTexture?(at.setTexture3D($,0),Ft=z.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(at.setTexture2DArray($,0),Ft=z.TEXTURE_2D_ARRAY):(at.setTexture2D($,0),Ft=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const xt=z.getParameter(z.UNPACK_ROW_LENGTH),an=z.getParameter(z.UNPACK_IMAGE_HEIGHT),mi=z.getParameter(z.UNPACK_SKIP_PIXELS),Pn=z.getParameter(z.UNPACK_SKIP_ROWS),jr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Vt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Vt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,st),z.pixelStorei(z.UNPACK_SKIP_ROWS,ot),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe);const Ht=C.isDataArrayTexture||C.isData3DTexture,Dn=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Sn=Fe.get(C),en=Fe.get($),Mn=Fe.get(Sn.__renderTarget),Xr=Fe.get(en.__renderTarget);He.bindFramebuffer(z.READ_FRAMEBUFFER,Mn.__webglFramebuffer),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let St=0;St<Be;St++)Ht&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,j,Qe+St),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.get($).__webglTexture,Te,wt+St)),z.blitFramebuffer(st,ot,Ne,Xe,ut,Lt,Ne,Xe,z.DEPTH_BUFFER_BIT,z.NEAREST);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||Fe.has(C)){const Sn=Fe.get(C),en=Fe.get($);He.bindFramebuffer(z.READ_FRAMEBUFFER,el),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,tl);for(let Mn=0;Mn<Be;Mn++)Ht?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Sn.__webglTexture,j,Qe+Mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Sn.__webglTexture,j),Dn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,en.__webglTexture,Te,wt+Mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,en.__webglTexture,Te),j!==0?z.blitFramebuffer(st,ot,Ne,Xe,ut,Lt,Ne,Xe,z.COLOR_BUFFER_BIT,z.NEAREST):Dn?z.copyTexSubImage3D(Ft,Te,ut,Lt,wt+Mn,st,ot,Ne,Xe):z.copyTexSubImage2D(Ft,Te,ut,Lt,st,ot,Ne,Xe);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ft,Te,ut,Lt,wt,Ne,Xe,Be,Ut,nt,Vt.data):$.isCompressedArrayTexture?z.compressedTexSubImage3D(Ft,Te,ut,Lt,wt,Ne,Xe,Be,Ut,Vt.data):z.texSubImage3D(Ft,Te,ut,Lt,wt,Ne,Xe,Be,Ut,nt,Vt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Te,ut,Lt,Ne,Xe,Ut,nt,Vt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Te,ut,Lt,Vt.width,Vt.height,Ut,Vt.data):z.texSubImage2D(z.TEXTURE_2D,Te,ut,Lt,Ne,Xe,Ut,nt,Vt);z.pixelStorei(z.UNPACK_ROW_LENGTH,xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,an),z.pixelStorei(z.UNPACK_SKIP_PIXELS,mi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jr),Te===0&&$.generateMipmaps&&z.generateMipmap(Ft),He.unbindTexture()},this.copyTextureToTexture3D=function(C,$,oe=null,ae=null,j=0){return Mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,$,oe,ae,j)},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&at.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?at.setTextureCube(C,0):C.isData3DTexture?at.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?at.setTexture2DArray(C,0):at.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){I=0,F=0,B=null,He.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const FL=()=>{const{isDark:n}=F_(),e=Ae.useRef(null),t=Dv(0),r=Dv(0),[o,l]=Ae.useState(!1),c=Ae.useRef({x:0,y:0}),u=Ae.useRef({x:0,y:0});Ae.useEffect(()=>{const v=x=>{const M=x.clientX/window.innerWidth*2-1,E=x.clientY/window.innerHeight*2-1;t.set(M),r.set(E),c.current={x:E*Math.PI*.3,y:M*Math.PI*.3}};return window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)},[t,r]),Ae.useEffect(()=>{if(!e.current)return;const v=e.current,x=new kR,M=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3),E=new UL({canvas:v,alpha:!0,antialias:!0,powerPreference:"high-performance"});E.setSize(window.innerWidth,window.innerHeight),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.toneMapping=xx,E.toneMappingExposure=1.2;const S=new Sa({color:new pt(n?8952319:4474026),metalness:.9,roughness:.1,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.05,iridescence:.8,iridescenceIOR:2.5,iridescenceThicknessRange:[200,600],sheen:1,sheenRoughness:.2,sheenColor:new pt(n?65535:35071),transmission:.1,thickness:.5}),D=(()=>{const Y=new Ss,V=new _o(1.2,12,8);V.scale(2,.8,1);const ce=new Pt(V,S.clone());ce.name="body",Y.add(ce);const se=new Fr(.6,.8,2,8),O=new Pt(se,S.clone());O.position.set(1.5,.5,0),O.rotation.z=-.3,O.name="neck",Y.add(O);const q=new _o(.8,8,6);q.scale(1.3,1,1.2);const Oe=new Pt(q,S.clone());Oe.position.set(2.8,1.2,0),Oe.name="head",Y.add(Oe);const Le=new Pa(.3,.8,6),K=new Pt(Le,S.clone());K.position.set(3.5,1.2,0),K.rotation.z=Math.PI/2,K.name="snout",Y.add(K);const pe=new _o(.15,8,6),de=new Sa({color:n?16729156:11141120,emissive:n?2228224:1114112,metalness:.1,roughness:.2}),Ce=new Pt(pe,de);Ce.position.set(3.2,1.4,.3),Ce.name="leftEye",Y.add(Ce);const Pe=new Pt(pe,de);Pe.position.set(3.2,1.4,-.3),Pe.name="rightEye",Y.add(Pe);const Ge=new Pa(.1,.6,6),Et=S.clone();Et.color=new pt(n?16766720:12092939);const ht=new Pt(Ge,Et);ht.position.set(2.6,1.8,.2),ht.rotation.z=-.2,ht.name="leftHorn",Y.add(ht);const z=new Pt(Ge,Et);z.position.set(2.6,1.8,-.2),z.rotation.z=-.2,z.name="rightHorn",Y.add(z);const vt=S.clone();vt.transparent=!0,vt.opacity=.85,vt.color=new pt(n?6514417:5195493),vt.side=Ni;const yt=(()=>{const De=new pi,be=new Float32Array([0,0,0,-4.5,1.8,0,-2.2,-1.2,0,0,0,0,-3.8,2.8,0,-4.5,1.8,0,0,0,0,-1.8,-2.5,0,-2.2,-1.2,0,-3.8,2.8,0,-5.2,2.2,0,-4.5,1.8,0,-1.8,-2.5,0,-3,-3.2,0,-2.2,-1.2,0,0,0,0,-5,.5,0,-4.5,1.8,0,0,0,0,-4.2,-.8,0,-2.2,-1.2,0]);return De.setAttribute("position",new hi(be,3)),De.computeVertexNormals(),De})(),He=new Ss;He.name="leftWing";const Dt=new Fr(.06,.1,3.5,8),Fe=S.clone();Fe.color=new pt(n?16766720:12092939);const at=new Pt(Dt,Fe);at.position.set(-2.2,.4,0),at.rotation.z=-.3,He.add(at);const It=new Pt(new Fr(.04,.06,2.8,6),Fe);It.position.set(-1.5,-.8,0),It.rotation.z=.4,He.add(It);const zt=new Pt(yt,vt);He.add(zt),He.position.set(.5,.8,1.8),He.rotation.y=-.2,He.scale.set(1.2,1.2,1.2),Y.add(He);const L=new Ss;L.name="rightWing";const w=new Pt(Dt,Fe);w.position.set(-2.2,.4,0),w.rotation.z=-.3,L.add(w);const J=new Pt(new Fr(.04,.06,2.8,6),Fe);J.position.set(-1.5,-.8,0),J.rotation.z=.4,L.add(J);const fe=new Pt(yt,vt);fe.scale.z=-1,L.add(fe),L.position.set(.5,.8,-1.8),L.rotation.y=.2,L.scale.set(1.2,1.2,1.2),Y.add(L);const ve=8;for(let De=0;De<ve;De++){const be=.6-De*.05,lt=new _o(be,6,4);lt.scale(1.5,.6,.8);const G=new Pt(lt,S.clone()),Se=-2-De*.8,Re=-.3-De*.1,ke=Math.sin(De*.5)*.3;G.position.set(Se,Re,ke),G.rotation.y=De*.2,G.name=`tailSegment${De}`,Y.add(G)}const ue=new Fr(.2,.3,1.2,6),je=S.clone(),Ee=new Pt(ue,je);Ee.position.set(.8,-1,.8),Ee.name="frontLeftLeg",Y.add(Ee);const Ve=new Pt(ue,je);Ve.position.set(.8,-1,-.8),Ve.name="frontRightLeg",Y.add(Ve);const Ye=new Pt(ue,je);Ye.position.set(-.8,-1,.8),Ye.name="backLeftLeg",Y.add(Ye);const xe=new Pt(ue,je);xe.position.set(-.8,-1,-.8),xe.name="backRightLeg",Y.add(xe);const Ie=new Pa(.1,.4,4),tt=S.clone();tt.color=new pt(n?16739179:14427686);for(let De=0;De<6;De++){const be=new Pt(Ie,tt);be.position.set(-.5+De*.5,.8,0),be.rotation.z=Math.PI,be.name=`spike${De}`,Y.add(be)}return Y})();D.rotation.y=Math.PI,x.add(D);const P=new KR(n?2236996:16777215,n?.4:.6);x.add(P);const A=new qR(16777215,n?1.2:1.5);A.position.set(5,5,5),A.castShadow=!0,x.add(A);const N=new Ld(n?65535:3900150,3,20);N.position.set(-8,5,8),x.add(N);const I=new Ld(n?16711935:15485081,3,20);I.position.set(8,-5,8),x.add(I);const F=new Ld(16777215,2,15);F.position.set(0,0,-8),x.add(F);const B=new XR(16777215,2,30,Math.PI*.2,.5);B.position.set(0,10,5),B.target=D,x.add(B),M.position.z=8;const b=new pi,R=300,k=new Float32Array(R*3);for(let Y=0;Y<R*3;Y+=3)k[Y]=(Math.random()-.5)*25,k[Y+1]=(Math.random()-.5)*25,k[Y+2]=(Math.random()-.5)*25;b.setAttribute("position",new hi(k,3));const re=new Gx({color:new pt(n?8947967:3900150),size:.05,transparent:!0,opacity:.4,blending:oh}),te=new VR(b,re);x.add(te);const ne=new QR,he=()=>{requestAnimationFrame(he);const Y=ne.getElapsedTime();u.current.x+=(c.current.x-u.current.x)*.05,u.current.y+=(c.current.y-u.current.y)*.05;const V=.25,ce=.4,se=.3,O=.2;D.position.y=Math.sin(Y*V*.8)*ce,D.position.x=Math.cos(Y*V*.6)*se,D.position.z=Math.sin(Y*V*.4)*O,D.rotation.x=u.current.x+Math.sin(Y*V*.5)*.08,D.rotation.y=Math.PI+u.current.y+Y*.12,D.rotation.z=Math.sin(Y*V*.7)*.06,D.children.forEach((q,Oe)=>{if(q instanceof Pt){const Le=q.name,K=Oe*.8;if(Le==="head"&&(q.rotation.y=Math.sin(Y*.4+K)*.15,q.rotation.x=Math.cos(Y*.3+K)*.1,q.position.y=1.2+Math.sin(Y*.35)*.05),Le==="neck"&&(q.rotation.y=Math.sin(Y*.35+K)*.1,q.rotation.x=Math.cos(Y*.25+K)*.08),Le.includes("Wing")){const de=Y*.8,Ce=Le==="leftWing",Pe=Math.sin(de)*.3,Ge=Ce?.1:-.1;q.rotation.y=Ge+(Ce?Pe:-Pe),q.rotation.z=Math.cos(de*.8)*.15;const Et=.5;q.position.y=Et+Math.sin(de)*.1;const ht=-.2;q.position.x=ht-Math.cos(de)*.05,q.children.forEach((z,vt)=>{z instanceof Pt&&z.material&&vt===0&&(z.rotation.z=-.2+Math.sin(de)*.1,z.material instanceof Sa&&(z.material.emissiveIntensity=Math.abs(Math.sin(de))*.2))})}if(Le.includes("tailSegment")){const pe=parseInt(Le.replace("tailSegment","")),de=.3,Ce=pe*.15,Pe=1-pe*.1,Ge=Y-Ce;q.rotation.y=D.rotation.y*Pe*.3+Math.sin(Ge*de)*(.2-pe*.02);const Et=q.userData.originalY||q.position.y;q.position.y=Et+Math.sin(Ge*de*.8)*(.1-pe*.01);const ht=q.userData.originalZ||q.position.z;q.position.z=ht+Math.sin(Ge*de)*(.15-pe*.015),q.userData.originalY||(q.userData.originalY=q.position.y,q.userData.originalZ=q.position.z)}if(Le.includes("Eye")&&q.material instanceof Sa&&(q.material.emissiveIntensity=.5+Math.sin(Y*2+K)*.3),Le.includes("Horn")&&(q.rotation.z+=Math.sin(Y*.5+K)*.05),Le.includes("spike")){const pe=parseInt(Le.replace("spike",""));q.scale.y=1+Math.sin(Y*1.2+pe*.3)*.1}q.material instanceof Sa&&(q.material.iridescenceIOR=2.5+Math.sin(Y*.8+K)*.3,q.material.metalness=.9+Math.sin(Y*.4+K)*.05,q.material.clearcoatRoughness=.05+Math.sin(Y*.6+K)*.02)}}),te.rotation.y=Y*.02,te.rotation.x=Y*.015,N.intensity=3+Math.sin(Y*1.5)*.8,I.intensity=3+Math.cos(Y*1.3)*.8,N.position.x=Math.cos(Y*.3)*10,N.position.z=Math.sin(Y*.3)*10,I.position.x=Math.cos(Y*.25+Math.PI)*8,I.position.z=Math.sin(Y*.25+Math.PI)*8,E.render(x,M)};he();const le=()=>{M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",le),()=>{window.removeEventListener("resize",le),E.dispose(),S.dispose(),b.dispose(),re.dispose()}},[n]);const h={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},d={hidden:{y:60,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:[.6,-.05,.01,.99]}}},p={hidden:{opacity:0,y:50,rotateX:-90},visible:v=>({opacity:1,y:0,rotateX:0,transition:{duration:.8,delay:v*.05,ease:[.6,-.05,.01,.99]}})};return W.jsxs("section",{id:"home",className:`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${n?"bg-black":"bg-white"}`,children:[W.jsx("canvas",{ref:e,className:"absolute inset-0 z-0",style:{background:n?"radial-gradient(ellipse at center, #0a0a1f 0%, #000000 50%, #000000 100%)":"radial-gradient(ellipse at center, #f0f4ff 0%, #ffffff 50%, #e6edff 100%)",opacity:n?1:.85}}),W.jsx(et.div,{className:"absolute inset-0 z-5",animate:{background:n?["radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)","radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)","radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)"]:["radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)","radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)","radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)"]},transition:{duration:10,repeat:1/0,ease:"linear"}}),!n&&W.jsx("div",{className:"absolute inset-0 z-10 bg-white/10"}),W.jsx("div",{className:"container mx-auto px-6 py-6 z-20 relative mt-8",children:W.jsxs(et.div,{variants:h,initial:"hidden",animate:"visible",className:"text-center relative z-30",children:[W.jsxs(et.div,{variants:d,className:"flex justify-center gap-4 mb-8",children:[W.jsxs(et.div,{whileHover:{scale:1.1,rotate:5},className:`px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${n?"bg-white/5 border border-white/10 text-white/70":"bg-black/5 border border-black/10 text-black/70"}`,children:[W.jsx(kA,{size:14}),W.jsx("span",{className:"text-xs font-mono",children:"DEVELOPER"})]}),W.jsxs(et.div,{whileHover:{scale:1.1,rotate:-5},className:`px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${n?"bg-white/5 border border-white/10 text-white/70":"bg-black/5 border border-black/10 text-black/70"}`,children:[W.jsx(rC,{size:14}),W.jsx("span",{className:"text-xs font-mono",children:"DESIGNER"})]}),W.jsxs(et.div,{whileHover:{scale:1.1,rotate:5},className:`px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 ${n?"bg-white/5 border border-white/10 text-white/70":"bg-black/5 border border-black/10 text-black/70"}`,children:[W.jsx(vC,{size:14}),W.jsx("span",{className:"text-xs font-mono",children:"CREATOR"})]})]}),W.jsx(et.div,{variants:d,className:"mb-8 perspective-1000",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:W.jsx("div",{className:"flex flex-wrap justify-center items-center gap-1 md:gap-2 mb-2",children:"SANKALP R.".split("").map((v,x)=>W.jsx(et.span,{variants:p,custom:x,whileHover:{scale:1.2,rotateY:180,color:n?"#60a5fa":"#3b82f6"},className:`inline-block text-5xl md:text-7xl lg:text-8xl font-thin tracking-wider cursor-default select-none ${v===" "?"w-4 md:w-8":""}`,style:{color:n?"rgba(255, 255, 255, 0.9)":"rgba(0, 0, 0, 0.9)",textShadow:n?"0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)":"0 2px 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)",transform:o?`translateZ(${x*2}px)`:"translateZ(0)",transition:"all 0.3s ease",position:"relative",zIndex:50},children:v===" "?" ":v},x))})}),W.jsxs(et.div,{variants:d,className:`text-xl md:text-2xl ${n?"text-gray-300":"text-gray-700"} mb-12 font-light tracking-wide`,children:[W.jsx(et.span,{animate:{opacity:[1,.5,1],scale:[1,1.02,1]},transition:{duration:3,repeat:1/0},className:"inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent",children:"Full Stack Developer"}),W.jsx("span",{className:`mx-4 md:mx-6 ${n?"text-gray-600":"text-gray-400"}`,children:"@"}),W.jsx(et.span,{animate:{opacity:[.5,1,.5],scale:[1,1.02,1]},transition:{duration:3,repeat:1/0,delay:1.5},className:"inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",children:"Chainworks"})]}),W.jsxs(et.div,{variants:d,className:"flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16",children:[W.jsxs(et.button,{whileHover:{scale:1.05,boxShadow:`0 0 40px ${n?"rgba(59, 130, 246, 0.4)":"rgba(59, 130, 246, 0.3)"}`},whileTap:{scale:.95},onClick:()=>document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"}),className:`group px-8 py-4 relative overflow-hidden rounded-full transition-all duration-300 ${n?"bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 text-white hover:border-white/40":"bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-black/20 text-black hover:border-black/40"}`,children:[W.jsxs("span",{className:"relative z-10 flex items-center gap-2 text-sm tracking-wider font-light",children:["EXPLORE WORK",W.jsx(et.span,{animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},children:"→"})]}),W.jsx(et.div,{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"})]}),W.jsx(et.button,{whileHover:{scale:1.05,boxShadow:`0 0 40px ${n?"rgba(168, 85, 247, 0.4)":"rgba(168, 85, 247, 0.3)"}`},whileTap:{scale:.95},onClick:()=>{window.open("https://docs.google.com/document/d/e/2PACX-1vS_Yi7fnhhari1vyFacM0uxb7tMvoeB4h9A21owhgzmJd891Wxi1G27mxZz9t7nMzdMHeyf_tJMknn3/pub","_blank")},className:`group px-8 py-4 relative overflow-hidden rounded-full transition-all duration-300 ${n?"bg-white/10 border border-white/20 text-white hover:bg-white/20":"bg-black/10 border border-black/20 text-black hover:bg-black/20"}`,children:W.jsxs("span",{className:"relative z-10 flex items-center gap-2 text-sm tracking-wider font-light",children:[W.jsx(jA,{size:16,className:"group-hover:animate-bounce"}),"RESUME"]})})]}),W.jsx(et.div,{variants:d,className:"flex items-center justify-center gap-6 md:gap-8",children:[{icon:Rp,href:"https://github.com/sankalp-OO7",label:"GitHub",color:"#6e5494"},{icon:bp,href:"https://linkedin.com/in/sankalp-racchewar",label:"LinkedIn",color:"#0077b5"},{icon:jc,href:"mailto:racchewarsankalp@gmail.com",label:"Email",color:"#ea4335"}].map(({icon:v,href:x,label:M,color:E})=>W.jsxs(et.a,{whileHover:{scale:1.2,y:-5,rotate:360},whileTap:{scale:.9},href:x,target:"_blank",rel:"noopener noreferrer",className:`relative p-3 rounded-full ${n?"bg-white/5 text-gray-400 hover:text-white":"bg-black/5 text-gray-600 hover:text-black"} transition-all duration-300 group`,"aria-label":M,children:[W.jsx(v,{size:20}),W.jsx(et.div,{className:"absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300",style:{backgroundColor:E}})]},M))}),W.jsx(et.div,{variants:d,animate:{opacity:[.3,.6,.3]},transition:{duration:4,repeat:1/0},className:`absolute bottom-20 left-6 ${n?"text-gray-600":"text-gray-400"} text-xs font-mono tracking-wider transform -rotate-90 origin-left hidden lg:block`,children:"CRAFTING DIGITAL EXPERIENCES"}),W.jsx(et.div,{variants:d,animate:{opacity:[.3,.6,.3]},transition:{duration:4,repeat:1/0,delay:2},className:`absolute bottom-20 right-6 ${n?"text-gray-600":"text-gray-400"} text-xs font-mono tracking-wider transform rotate-90 origin-right hidden lg:block`,children:"AVAILABLE FOR COLLABORATION"})]})}),W.jsx(et.div,{animate:{y:[0,15,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20",children:W.jsxs("div",{className:`w-7 h-12 border-2 ${n?"border-white/30":"border-black/30"} rounded-full flex justify-center relative overflow-hidden group cursor-pointer`,onClick:()=>document.querySelector("#about")?.scrollIntoView({behavior:"smooth"}),children:[W.jsx(et.div,{animate:{y:[0,16,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:`w-1.5 h-4 ${n?"bg-gradient-to-b from-blue-400 to-purple-400":"bg-gradient-to-b from-blue-600 to-purple-600"} rounded-full mt-2`}),W.jsx("div",{className:`absolute inset-0 ${n?"bg-white/10":"bg-black/10"} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`})]})})]})},kL=()=>{const n=[{icon:BA,title:"React.js & TypeScript",description:"Building reusable, scalable, and pixel-perfect UI components with modern JavaScript and TypeScript."},{icon:cC,title:"Performance Optimization",description:"Improving rendering, reducing load times, and ensuring smooth cross-device performance."},{icon:mC,title:"Responsive & Mobile-First Design",description:"Creating accessible, cross-browser compatible, and mobile-friendly web apps."},{icon:GA,title:"Node.js & MongoDB",description:"Developing backend APIs with Node.js & Express.js and managing data with MongoDB."},{icon:oC,title:"UI/UX with Tailwind & MUI",description:"Translating Figma designs into clean, modern, and user-friendly interfaces."},{icon:hC,title:"Testing & Quality Assurance",description:"Ensuring reliable deployments with Jest, integration testing, and debugging best practices."},{icon:VA,title:"Payment Gateway Integration",description:"Implementing secure and seamless payment flows in production-grade applications."},{icon:UA,title:"Cloud & CI/CD",description:"Deploying apps with AWS and automating delivery pipelines with CI/CD for scalability."},{icon:$A,title:"Agile Collaboration",description:"Working in Agile/Scrum teams with Git to deliver features on time and at scale."},{icon:MC,title:"Problem Solving",description:"Passionate about writing clean code, debugging, and delivering impactful solutions."}],e={animate:{transition:{staggerChildren:.08}}};return W.jsx("section",{id:"about",className:"py-20 bg-gray-50 dark:bg-dark-800/50",children:W.jsxs("div",{className:"container mx-auto px-6",children:[W.jsxs(et.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},className:"text-center mb-16",children:[W.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 gradient-text",children:"About Me"}),W.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"})]}),W.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[W.jsxs(et.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-10%"},transition:{duration:.5,ease:"easeOut"},className:"space-y-6",children:[W.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-gray-900 dark:text-white",children:"MERN Stack Developer | Scalable & Impactful Solutions"}),W.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:"I am a results-driven MERN Stack Developer with 3.2+ years of experience in building responsive, high-performance, and production-ready applications. Skilled in React.js, Node.js, MongoDB, and modern UI frameworks, I specialize in creating reusable components, optimizing performance, and integrating APIs. With expertise in Jest testing, CI/CD pipelines, AWS deployment, and payment gateway integration, I deliver end-to-end solutions that are scalable and reliable."}),W.jsx("div",{className:"flex flex-wrap gap-3 pt-4",children:["React.js","TypeScript","JavaScript (ES6+)","Redux","Node.js","Express.js","MongoDB","REST APIs","GraphQL","Axios","Tailwind CSS","Material UI","HTML5","CSS3","Jest","Integration Testing","CI/CD","AWS","Payment Gateway","Git","Agile/Scrum"].map(t=>W.jsx("span",{className:"px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-primary-200 dark:hover:bg-primary-900/50 cursor-default",children:t},t))})]}),W.jsx(et.div,{variants:e,initial:"initial",whileInView:"animate",viewport:{once:!0,margin:"-10%"},className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:n.map(t=>W.jsxs(et.div,{variants:{initial:{opacity:0,y:15},animate:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}},className:"feature-card p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg group",children:[W.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 feature-icon",children:W.jsx(t.icon,{className:"text-white",size:24})}),W.jsx("h4",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:t.title}),W.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:t.description})]},t.title))})]})]})})},OL=()=>{const n=[{title:"Frontend Development",skills:[{name:"HTML5 / CSS3",level:95},{name:"JavaScript (ES6+)",level:90},{name:"TypeScript",level:85},{name:"React.js",level:92},{name:"Redux",level:88},{name:"Responsive Design",level:94},{name:"Tailwind CSS / MUI",level:90}]},{title:"Backend & Databases",skills:[{name:"Node.js & Express.js",level:58},{name:"MongoDB",level:45},{name:"REST APIs",level:90},{name:"GraphQL",level:50},{name:"SQL / MySQL",level:25}]},{title:"Testing & DevOps",skills:[{name:"Jest & Integration Testing",level:82},{name:"CI/CD Pipelines",level:40},{name:"AWS (EC2, S3, Lambda)",level:48},{name:"Git / GitHub",level:95},{name:"Agile / Scrum",level:88}]},{title:"Additional Expertise",skills:[{name:"Payment Gateway Integration",level:80},{name:"Performance Optimization",level:90},{name:"API Security & Auth",level:82},{name:"Figma to Code (UI/UX)",level:100},{name:"Debugging & Problem Solving",level:90}]}],e={animate:{transition:{staggerChildren:.1,delayChildren:.1}}};return W.jsx("section",{id:"skills",className:"py-20 bg-white dark:bg-dark-900",children:W.jsxs("div",{className:"container mx-auto px-6",children:[W.jsxs(et.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.4},className:"text-center mb-16",children:[W.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 gradient-text",children:"Skills & Expertise"}),W.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"}),W.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"A full-stack MERN developer skilled in frontend, backend, testing, DevOps, and cloud deployment — delivering scalable, reliable, and user-focused applications."})]}),W.jsx(et.div,{variants:e,initial:"initial",whileInView:"animate",viewport:{once:!0,margin:"-10%"},className:"grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center",children:n.map((t,r)=>W.jsxs(et.div,{variants:{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},className:"skill-card bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700 w-full max-w-xs",children:[W.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-8 text-center pb-4 border-b border-gray-200 dark:border-dark-600",children:t.title}),W.jsx("div",{className:"space-y-6",children:t.skills.map((o,l)=>W.jsxs("div",{className:"skill-item",children:[W.jsxs("div",{className:"flex justify-between items-center mb-2",children:[W.jsx("span",{className:"text-gray-700 dark:text-gray-300 font-medium text-sm",children:o.name}),W.jsxs("span",{className:"text-primary-600 dark:text-primary-400 font-bold text-xs bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full",children:[o.level,"%"]})]}),W.jsx("div",{className:"w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 overflow-hidden shadow-inner",children:W.jsx(et.div,{initial:{width:0},whileInView:{width:`${o.level}%`},viewport:{once:!0,margin:"-50px"},transition:{duration:1.2,delay:r*.08+l*.03,ease:[.25,.46,.45,.94]},className:"h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"})})]},o.name))})]},t.title))}),W.jsxs(et.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.3},className:"mt-16 text-center",children:[W.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-8",children:"Highlighted Expertise"}),W.jsx("div",{className:"flex flex-wrap justify-center gap-4 max-w-4xl mx-auto",children:["MERN Stack Applications","Performance Optimization","Payment Gateway Integration","CI/CD Automation","AWS Cloud Deployment","API Security & Auth","Agile/Scrum Practices","UI/UX to Production","Reusable Components"].map((t,r)=>W.jsx("span",{className:"px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700",style:{animationDelay:`${r*.05}s`},children:t},t))})]})]})})},BL=()=>{const[n,e]=Ae.useState({name:"",email:"",subject:"",message:""}),[t,r]=Ae.useState(!1),[o,l]=Ae.useState("idle"),c=d=>{e({...n,[d.target.name]:d.target.value})},u=async d=>{d.preventDefault(),r(!0),l("idle"),setTimeout(()=>{l("success"),e({name:"",email:"",subject:"",message:""}),r(!1)},1500)},h=[{icon:jc,title:"Email",value:"racchewarsankalp@gmail.com",href:"mailto:racchewarsankalp@gmail.com",isExternal:!1},{icon:vx,title:"Phone",value:"+91-8421822204",href:"tel:+918421822204",isExternal:!1},{icon:gx,title:"Location",value:"Pune, Maharashtra",href:null,isExternal:!1},{icon:Rp,title:"GitHub",value:"sankalp-OO7",href:"https://github.com/sankalp-OO7",isExternal:!0},{icon:bp,title:"LinkedIn",value:"sankalp-racchewar",href:"https://linkedin.com/in/sankalp-racchewar/",isExternal:!0}];return W.jsx("section",{id:"contact",className:"py-20 bg-gray-50 dark:bg-gray-900",children:W.jsxs("div",{className:"container mx-auto px-6",children:[W.jsxs(et.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.6,ease:"easeOut"},className:"text-center mb-16",children:[W.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Get In Touch"}),W.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"}),W.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Have a project in mind? Let's discuss how we can work together to bring your ideas to life."})]}),W.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto",children:[W.jsxs(et.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:.6,ease:"easeOut"},className:"space-y-8",children:[W.jsxs("div",{children:[W.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Let's Start a Conversation"}),W.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-8",children:"I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!"})]}),W.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:h.map((d,p)=>W.jsxs(et.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.4,delay:p*.05,ease:"easeOut"},whileHover:{y:-2},className:"flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200",children:[W.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0",children:W.jsx(d.icon,{className:"text-white",size:20})}),W.jsxs("div",{className:"min-w-0 flex-1",children:[W.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white text-sm mb-1",children:d.title}),d.href?W.jsx("a",{href:d.href,target:d.isExternal?"_blank":void 0,rel:d.isExternal?"noopener noreferrer":void 0,className:"text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm block truncate cursor-pointer underline-offset-2 hover:underline",children:d.value}):W.jsx("span",{className:"text-gray-600 dark:text-gray-400 text-sm block truncate",children:d.value})]})]},d.title))})]}),W.jsx(et.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:.6,ease:"easeOut"},className:"bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg",children:W.jsxs("form",{onSubmit:u,className:"space-y-6",children:[W.jsxs("div",{className:"grid sm:grid-cols-2 gap-6",children:[W.jsxs("div",{children:[W.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Name"}),W.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:c,required:!0,className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200",placeholder:"Your Name"})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Email"}),W.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:c,required:!0,className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200",placeholder:"your.email@example.com"})]})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Subject"}),W.jsx("input",{type:"text",id:"subject",name:"subject",value:n.subject,onChange:c,required:!0,className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200",placeholder:"What's this about?"})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Message"}),W.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:c,required:!0,rows:6,className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none",placeholder:"Tell me about your project..."})]}),W.jsx(et.button,{whileHover:{scale:1.02},whileTap:{scale:.98},type:"submit",disabled:t,className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:t?W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):W.jsxs(W.Fragment,{children:[W.jsx(fC,{size:20}),"Send Message"]})}),W.jsxs(W1,{children:[o==="success"&&W.jsxs(et.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},className:"flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[W.jsx(IA,{size:20}),W.jsx("span",{children:"Message sent successfully! I'll get back to you soon."})]}),o==="error"&&W.jsxs(et.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},className:"flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[W.jsx(DA,{size:20}),W.jsx("span",{children:"Something went wrong. Please try again or email me directly."})]})]})]})})]})]})})},zL=()=>{const n=()=>{window.scrollTo({top:0,behavior:"smooth"})},e=[{icon:Rp,href:"https://github.com/sankalp-OO7",label:"GitHub"},{icon:bp,href:"https://linkedin.com/in/sankalp-racchewar",label:"LinkedIn"},{icon:jc,href:"mailto:racchewarsankalp@gmail.com",label:"Email"}],t=[{icon:jc,text:"racchewarsankalp@gmail.com",href:"mailto:racchewarsankalp@gmail.com"},{icon:vx,text:"+91-8669140442",href:"tel:+918669140442"},{icon:gx,text:"Pune, Maharashtra",href:"#"}];return W.jsxs("footer",{className:"bg-gray-900 text-white py-12 relative overflow-hidden",children:[W.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"}),W.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[W.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-8",children:[W.jsxs(et.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"space-y-4",children:[W.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"Sankalp Racchewar"}),W.jsx("p",{className:"text-gray-400 leading-relaxed",children:"Full Stack & Android Developer with hands-on experience in building mobile and web applications using modern technologies. Passionate about creating scalable, user-friendly solutions."})]}),W.jsxs(et.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},className:"space-y-4",children:[W.jsx("h4",{className:"text-lg font-semibold text-white",children:"Quick Links"}),W.jsx("div",{className:"space-y-2",children:["About","Skills","Projects","Contact"].map(r=>W.jsx(et.button,{whileHover:{x:5},onClick:()=>document.querySelector(`#${r.toLowerCase()}`)?.scrollIntoView({behavior:"smooth"}),className:"block text-gray-400 hover:text-blue-400 transition-colors duration-300",children:r},r))})]}),W.jsxs(et.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"space-y-4",children:[W.jsx("h4",{className:"text-lg font-semibold text-white",children:"Get In Touch"}),W.jsxs("div",{className:"space-y-3",children:[W.jsx("p",{className:"text-gray-400 mb-4",children:"Ready to start your next project? Let's create something amazing together."}),W.jsx("div",{className:"space-y-2",children:t.map(({icon:r,text:o,href:l})=>W.jsxs(et.a,{href:l,whileHover:{x:5},className:"flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm",children:[W.jsx(r,{size:16}),W.jsx("span",{children:o})]},o))}),W.jsx("div",{className:"flex space-x-4 pt-4",children:e.map(({icon:r,href:o,label:l})=>W.jsx(et.a,{whileHover:{scale:1.2,y:-2},whileTap:{scale:.9},href:o,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300","aria-label":l,children:W.jsx(r,{size:20})},l))})]})]})]}),W.jsxs(et.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.3},className:"border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4",children:[W.jsxs("p",{className:"text-gray-400 text-sm flex items-center gap-1",children:["Made with ",W.jsx(KA,{className:"text-red-500",size:16})," by Sankalp Racchewar"]}),W.jsxs("div",{className:"flex items-center gap-4",children:[W.jsx("p",{className:"text-gray-400 text-sm",children:"© 2025 All rights reserved."}),W.jsx(et.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:n,className:"p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300","aria-label":"Scroll to top",children:W.jsx(bA,{size:16})})]})]})]})]})},VL=Ae.lazy(()=>qh(()=>import("./Projects-ES0RPlmT.js"),[])),HL=Ae.lazy(()=>qh(()=>import("./Certificates-DobSw_C9.js"),__vite__mapDeps([0,1]))),GL=Ae.lazy(()=>qh(()=>import("./Experience-DvFMdqmy.js"),__vite__mapDeps([2,1,3]))),WL=()=>W.jsx(GM,{children:W.jsxs("div",{className:"relative min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300",children:[W.jsx(EC,{}),W.jsxs("main",{className:"relative z-10",children:[W.jsx(FL,{}),W.jsx(kL,{}),W.jsx(OL,{}),W.jsxs(Ae.Suspense,{fallback:W.jsx("div",{children:"Loading..."}),children:[W.jsx(HL,{}),W.jsx(GL,{}),W.jsx(VL,{})]}),W.jsx(BL,{})]}),W.jsx(zL,{})]})});zM.createRoot(document.getElementById("root")).render(W.jsx(IM.StrictMode,{children:W.jsx(WL,{})}));export{W1 as A,kA as C,gx as M,MC as Z,Bt as c,N_ as g,W as j,et as m,Ae as r};
