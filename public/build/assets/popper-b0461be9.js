import{g as qe,c as Fe}from"./_commonjsHelpers-de833af9.js";var Wt={exports:{}};(function(ye,be){(function(P,L){L(be)})(Fe,function(P){function L(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function J(e){return e instanceof L(e).Element||e instanceof Element}function S(e){return e instanceof L(e).HTMLElement||e instanceof HTMLElement}function bt(e){return typeof ShadowRoot<"u"&&(e instanceof L(e).ShadowRoot||e instanceof ShadowRoot)}var K=Math.max,ct=Math.min,$=Math.round;function xt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Vt(){return!/^((?!chrome|android).)*safari/i.test(xt())}function Z(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),s=1,o=1;t&&S(e)&&(s=e.offsetWidth>0&&$(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&$(r.height)/e.offsetHeight||1);var f=(J(e)?L(e):window).visualViewport,i=!Vt()&&n,a=(r.left+(i&&f?f.offsetLeft:0))/s,u=(r.top+(i&&f?f.offsetTop:0))/o,p=r.width/s,c=r.height/o;return{width:p,height:c,top:u,right:a+p,bottom:u+c,left:a,x:a,y:u}}function wt(e){var t=L(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function F(e){return e?(e.nodeName||"").toLowerCase():null}function X(e){return((J(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ot(e){return Z(X(e)).left+wt(e).scrollLeft}function N(e){return L(e).getComputedStyle(e)}function jt(e){var t=N(e),n=t.overflow,r=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function xe(e,t,n){n===void 0&&(n=!1);var r,s,o=S(t),f=S(t)&&function(c){var y=c.getBoundingClientRect(),d=$(y.width)/c.offsetWidth||1,v=$(y.height)/c.offsetHeight||1;return d!==1||v!==1}(t),i=X(t),a=Z(e,f,n),u={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(o||!o&&!n)&&((F(t)!=="body"||jt(i))&&(u=(r=t)!==L(r)&&S(r)?{scrollLeft:(s=r).scrollLeft,scrollTop:s.scrollTop}:wt(r)),S(t)?((p=Z(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=Ot(i))),{x:a.left+u.scrollLeft-p.x,y:a.top+u.scrollTop-p.y,width:a.width,height:a.height}}function Et(e){var t=Z(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function pt(e){return F(e)==="html"?e:e.assignedSlot||e.parentNode||(bt(e)?e.host:null)||X(e)}function Ct(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:S(e)&&jt(e)?e:Ct(pt(e))}function rt(e,t){var n;t===void 0&&(t=[]);var r=Ct(e),s=r===((n=e.ownerDocument)==null?void 0:n.body),o=L(r),f=s?[o].concat(o.visualViewport||[],jt(r)?r:[]):r,i=t.concat(f);return s?i:i.concat(rt(pt(f)))}function we(e){return["table","td","th"].indexOf(F(e))>=0}function qt(e){return S(e)&&N(e).position!=="fixed"?e.offsetParent:null}function ot(e){for(var t=L(e),n=qt(e);n&&we(n)&&N(n).position==="static";)n=qt(n);return n&&(F(n)==="html"||F(n)==="body"&&N(n).position==="static")?t:n||function(r){var s=/firefox/i.test(xt());if(/Trident/i.test(xt())&&S(r)&&N(r).position==="fixed")return null;var o=pt(r);for(bt(o)&&(o=o.host);S(o)&&["html","body"].indexOf(F(o))<0;){var f=N(o);if(f.transform!=="none"||f.perspective!=="none"||f.contain==="paint"||["transform","perspective"].indexOf(f.willChange)!==-1||s&&f.willChange==="filter"||s&&f.filter&&f.filter!=="none")return o;o=o.parentNode}return null}(e)||t}var R="top",B="bottom",T="right",H="left",Dt="auto",it=[R,B,T,H],I="start",at="end",Ft="viewport",st="popper",Ut=it.reduce(function(e,t){return e.concat([t+"-"+I,t+"-"+at])},[]),zt=[].concat(it,[Dt]).reduce(function(e,t){return e.concat([t,t+"-"+I,t+"-"+at])},[]),Oe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function je(e){var t=new Map,n=new Set,r=[];function s(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach(function(f){if(!n.has(f)){var i=t.get(f);i&&s(i)}}),r.push(o)}return e.forEach(function(o){t.set(o.name,o)}),e.forEach(function(o){n.has(o.name)||s(o)}),r}function Nt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&bt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function At(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Gt(e,t,n){return t===Ft?At(function(r,s){var o=L(r),f=X(r),i=o.visualViewport,a=f.clientWidth,u=f.clientHeight,p=0,c=0;if(i){a=i.width,u=i.height;var y=Vt();(y||!y&&s==="fixed")&&(p=i.offsetLeft,c=i.offsetTop)}return{width:a,height:u,x:p+Ot(r),y:c}}(e,n)):J(t)?function(r,s){var o=Z(r,!1,s==="fixed");return o.top=o.top+r.clientTop,o.left=o.left+r.clientLeft,o.bottom=o.top+r.clientHeight,o.right=o.left+r.clientWidth,o.width=r.clientWidth,o.height=r.clientHeight,o.x=o.left,o.y=o.top,o}(t,n):At(function(r){var s,o=X(r),f=wt(r),i=(s=r.ownerDocument)==null?void 0:s.body,a=K(o.scrollWidth,o.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),u=K(o.scrollHeight,o.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),p=-f.scrollLeft+Ot(r),c=-f.scrollTop;return N(i||o).direction==="rtl"&&(p+=K(o.clientWidth,i?i.clientWidth:0)-a),{width:a,height:u,x:p,y:c}}(X(e)))}function Ee(e,t,n,r){var s=t==="clippingParents"?function(a){var u=rt(pt(a)),p=["absolute","fixed"].indexOf(N(a).position)>=0&&S(a)?ot(a):a;return J(p)?u.filter(function(c){return J(c)&&Nt(c,p)&&F(c)!=="body"}):[]}(e):[].concat(t),o=[].concat(s,[n]),f=o[0],i=o.reduce(function(a,u){var p=Gt(e,u,r);return a.top=K(p.top,a.top),a.right=ct(p.right,a.right),a.bottom=ct(p.bottom,a.bottom),a.left=K(p.left,a.left),a},Gt(e,f,r));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function U(e){return e.split("-")[0]}function tt(e){return e.split("-")[1]}function Mt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Xt(e){var t,n=e.reference,r=e.element,s=e.placement,o=s?U(s):null,f=s?tt(s):null,i=n.x+n.width/2-r.width/2,a=n.y+n.height/2-r.height/2;switch(o){case R:t={x:i,y:n.y-r.height};break;case B:t={x:i,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:a};break;case H:t={x:n.x-r.width,y:a};break;default:t={x:n.x,y:n.y}}var u=o?Mt(o):null;if(u!=null){var p=u==="y"?"height":"width";switch(f){case I:t[u]=t[u]-(n[p]/2-r[p]/2);break;case at:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}function Yt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Jt(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}function et(e,t){t===void 0&&(t={});var n=t,r=n.placement,s=r===void 0?e.placement:r,o=n.strategy,f=o===void 0?e.strategy:o,i=n.boundary,a=i===void 0?"clippingParents":i,u=n.rootBoundary,p=u===void 0?Ft:u,c=n.elementContext,y=c===void 0?st:c,d=n.altBoundary,v=d!==void 0&&d,g=n.padding,m=g===void 0?0:g,D=Yt(typeof m!="number"?m:Jt(m,it)),E=y===st?"reference":st,b=e.rects.popper,x=e.elements[v?E:y],l=Ee(J(x)?x:x.contextElement||X(e.elements.popper),a,p,f),h=Z(e.elements.reference),w=Xt({reference:h,element:b,strategy:"absolute",placement:s}),j=At(Object.assign({},b,w)),O=y===st?j:h,A={top:l.top-O.top+D.top,bottom:O.bottom-l.bottom+D.bottom,left:l.left-O.left+D.left,right:O.right-l.right+D.right},k=e.modifiersData.offset;if(y===st&&k){var W=k[s];Object.keys(A).forEach(function(V){var G=[T,B].indexOf(V)>=0?1:-1,z=[R,B].indexOf(V)>=0?"y":"x";A[V]+=W[z]*G})}return A}var Kt={placement:"bottom",modifiers:[],strategy:"absolute"};function Qt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Pt(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,s=t.defaultOptions,o=s===void 0?Kt:s;return function(f,i,a){a===void 0&&(a=o);var u,p,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Kt,o),modifiersData:{},elements:{reference:f,popper:i},attributes:{},styles:{}},y=[],d=!1,v={state:c,setOptions:function(m){var D=typeof m=="function"?m(c.options):m;g(),c.options=Object.assign({},o,c.options,D),c.scrollParents={reference:J(f)?rt(f):f.contextElement?rt(f.contextElement):[],popper:rt(i)};var E,b,x=function(l){var h=je(l);return Oe.reduce(function(w,j){return w.concat(h.filter(function(O){return O.phase===j}))},[])}((E=[].concat(r,c.options.modifiers),b=E.reduce(function(l,h){var w=l[h.name];return l[h.name]=w?Object.assign({},w,h,{options:Object.assign({},w.options,h.options),data:Object.assign({},w.data,h.data)}):h,l},{}),Object.keys(b).map(function(l){return b[l]})));return c.orderedModifiers=x.filter(function(l){return l.enabled}),c.orderedModifiers.forEach(function(l){var h=l.name,w=l.options,j=w===void 0?{}:w,O=l.effect;if(typeof O=="function"){var A=O({state:c,name:h,instance:v,options:j}),k=function(){};y.push(A||k)}}),v.update()},forceUpdate:function(){if(!d){var m=c.elements,D=m.reference,E=m.popper;if(Qt(D,E)){c.rects={reference:xe(D,ot(E),c.options.strategy==="fixed"),popper:Et(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(O){return c.modifiersData[O.name]=Object.assign({},O.data)});for(var b=0;b<c.orderedModifiers.length;b++)if(c.reset!==!0){var x=c.orderedModifiers[b],l=x.fn,h=x.options,w=h===void 0?{}:h,j=x.name;typeof l=="function"&&(c=l({state:c,options:w,name:j,instance:v})||c)}else c.reset=!1,b=-1}}},update:(u=function(){return new Promise(function(m){v.forceUpdate(),m(c)})},function(){return p||(p=new Promise(function(m){Promise.resolve().then(function(){p=void 0,m(u())})})),p}),destroy:function(){g(),d=!0}};if(!Qt(f,i))return v;function g(){y.forEach(function(m){return m()}),y=[]}return v.setOptions(a).then(function(m){!d&&a.onFirstUpdate&&a.onFirstUpdate(m)}),v}}var ut={passive:!0},Lt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,s=r.scroll,o=s===void 0||s,f=r.resize,i=f===void 0||f,a=L(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(p){p.addEventListener("scroll",n.update,ut)}),i&&a.addEventListener("resize",n.update,ut),function(){o&&u.forEach(function(p){p.removeEventListener("scroll",n.update,ut)}),i&&a.removeEventListener("resize",n.update,ut)}},data:{}},kt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Xt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},De={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _t(e){var t,n=e.popper,r=e.popperRect,s=e.placement,o=e.variation,f=e.offsets,i=e.position,a=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,c=e.isFixed,y=f.x,d=y===void 0?0:y,v=f.y,g=v===void 0?0:v,m=typeof p=="function"?p({x:d,y:g}):{x:d,y:g};d=m.x,g=m.y;var D=f.hasOwnProperty("x"),E=f.hasOwnProperty("y"),b=H,x=R,l=window;if(u){var h=ot(n),w="clientHeight",j="clientWidth";h===L(n)&&N(h=X(n)).position!=="static"&&i==="absolute"&&(w="scrollHeight",j="scrollWidth"),h=h,(s===R||(s===H||s===T)&&o===at)&&(x=B,g-=(c&&h===l&&l.visualViewport?l.visualViewport.height:h[w])-r.height,g*=a?1:-1),(s===H||(s===R||s===B)&&o===at)&&(b=T,d-=(c&&h===l&&l.visualViewport?l.visualViewport.width:h[j])-r.width,d*=a?1:-1)}var O,A=Object.assign({position:i},u&&De),k=p===!0?function(W,V){var G=W.x,z=W.y,M=V.devicePixelRatio||1;return{x:$(G*M)/M||0,y:$(z*M)/M||0}}({x:d,y:g},L(n)):{x:d,y:g};return d=k.x,g=k.y,a?Object.assign({},A,((O={})[x]=E?"0":"",O[b]=D?"0":"",O.transform=(l.devicePixelRatio||1)<=1?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",O)):Object.assign({},A,((t={})[x]=E?g+"px":"",t[b]=D?d+"px":"",t.transform="",t))}var Rt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,s=r===void 0||r,o=n.adaptive,f=o===void 0||o,i=n.roundOffsets,a=i===void 0||i,u={placement:U(t.placement),variation:tt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,_t(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,_t(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Ht={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},s=t.attributes[n]||{},o=t.elements[n];S(o)&&F(o)&&(Object.assign(o.style,r),Object.keys(s).forEach(function(f){var i=s[f];i===!1?o.removeAttribute(f):o.setAttribute(f,i===!0?"":i)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var s=t.elements[r],o=t.attributes[r]||{},f=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]).reduce(function(i,a){return i[a]="",i},{});S(s)&&F(s)&&(Object.assign(s.style,f),Object.keys(o).forEach(function(i){s.removeAttribute(i)}))})}},requires:["computeStyles"]},$t={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,s=n.offset,o=s===void 0?[0,0]:s,f=zt.reduce(function(p,c){return p[c]=function(y,d,v){var g=U(y),m=[H,R].indexOf(g)>=0?-1:1,D=typeof v=="function"?v(Object.assign({},d,{placement:y})):v,E=D[0],b=D[1];return E=E||0,b=(b||0)*m,[H,T].indexOf(g)>=0?{x:b,y:E}:{x:E,y:b}}(c,t.rects,o),p},{}),i=f[t.placement],a=i.x,u=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=f}},Ae={left:"right",right:"left",bottom:"top",top:"bottom"};function lt(e){return e.replace(/left|right|bottom|top/g,function(t){return Ae[t]})}var Me={start:"end",end:"start"};function Zt(e){return e.replace(/start|end/g,function(t){return Me[t]})}function Pe(e,t){t===void 0&&(t={});var n=t,r=n.placement,s=n.boundary,o=n.rootBoundary,f=n.padding,i=n.flipVariations,a=n.allowedAutoPlacements,u=a===void 0?zt:a,p=tt(r),c=p?i?Ut:Ut.filter(function(v){return tt(v)===p}):it,y=c.filter(function(v){return u.indexOf(v)>=0});y.length===0&&(y=c);var d=y.reduce(function(v,g){return v[g]=et(e,{placement:g,boundary:s,rootBoundary:o,padding:f})[U(g)],v},{});return Object.keys(d).sort(function(v,g){return d[v]-d[g]})}var It={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var s=n.mainAxis,o=s===void 0||s,f=n.altAxis,i=f===void 0||f,a=n.fallbackPlacements,u=n.padding,p=n.boundary,c=n.rootBoundary,y=n.altBoundary,d=n.flipVariations,v=d===void 0||d,g=n.allowedAutoPlacements,m=t.options.placement,D=U(m),E=a||(D===m||!v?[lt(m)]:function(C){if(U(C)===Dt)return[];var q=lt(C);return[Zt(C),q,Zt(q)]}(m)),b=[m].concat(E).reduce(function(C,q){return C.concat(U(q)===Dt?Pe(t,{placement:q,boundary:p,rootBoundary:c,padding:u,flipVariations:v,allowedAutoPlacements:g}):q)},[]),x=t.rects.reference,l=t.rects.popper,h=new Map,w=!0,j=b[0],O=0;O<b.length;O++){var A=b[O],k=U(A),W=tt(A)===I,V=[R,B].indexOf(k)>=0,G=V?"width":"height",z=et(t,{placement:A,boundary:p,rootBoundary:c,altBoundary:y,padding:u}),M=V?W?T:H:W?B:R;x[G]>l[G]&&(M=lt(M));var Y=lt(M),Q=[];if(o&&Q.push(z[k]<=0),i&&Q.push(z[M]<=0,z[Y]<=0),Q.every(function(C){return C})){j=A,w=!1;break}h.set(A,Q)}if(w)for(var dt=function(C){var q=b.find(function(mt){var ht=h.get(mt);if(ht)return ht.slice(0,C).every(function(vt){return vt})});if(q)return j=q,"break"},nt=v?3:1;nt>0&&dt(nt)!=="break";nt--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ft(e,t,n){return K(e,ct(t,n))}var te={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,s=n.mainAxis,o=s===void 0||s,f=n.altAxis,i=f!==void 0&&f,a=n.boundary,u=n.rootBoundary,p=n.altBoundary,c=n.padding,y=n.tether,d=y===void 0||y,v=n.tetherOffset,g=v===void 0?0:v,m=et(t,{boundary:a,rootBoundary:u,padding:c,altBoundary:p}),D=U(t.placement),E=tt(t.placement),b=!E,x=Mt(D),l=x==="x"?"y":"x",h=t.modifiersData.popperOffsets,w=t.rects.reference,j=t.rects.popper,O=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,A=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(h){if(o){var V,G=x==="y"?R:H,z=x==="y"?B:T,M=x==="y"?"height":"width",Y=h[x],Q=Y+m[G],dt=Y-m[z],nt=d?-j[M]/2:0,C=E===I?w[M]:j[M],q=E===I?-j[M]:-w[M],mt=t.elements.arrow,ht=d&&mt?Et(mt):{width:0,height:0},vt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ae=vt[G],se=vt[z],gt=ft(0,w[M],ht[M]),Re=b?w[M]/2-nt-gt-ae-A.mainAxis:C-gt-ae-A.mainAxis,He=b?-w[M]/2+nt+gt+se+A.mainAxis:q+gt+se+A.mainAxis,St=t.elements.arrow&&ot(t.elements.arrow),Se=St?x==="y"?St.clientTop||0:St.clientLeft||0:0,fe=(V=k==null?void 0:k[x])!=null?V:0,Be=Y+He-fe,ce=ft(d?ct(Q,Y+Re-fe-Se):Q,Y,d?K(dt,Be):dt);h[x]=ce,W[x]=ce-Y}if(i){var pe,Te=x==="x"?R:H,We=x==="x"?B:T,_=h[l],yt=l==="y"?"height":"width",ue=_+m[Te],le=_-m[We],Bt=[R,H].indexOf(D)!==-1,de=(pe=k==null?void 0:k[l])!=null?pe:0,me=Bt?ue:_-w[yt]-j[yt]-de+A.altAxis,he=Bt?_+w[yt]+j[yt]-de-A.altAxis:le,ve=d&&Bt?function(Ve,Ce,Tt){var ge=ft(Ve,Ce,Tt);return ge>Tt?Tt:ge}(me,_,he):ft(d?me:ue,_,d?he:le);h[l]=ve,W[l]=ve-_}t.modifiersData[r]=W}},requiresIfExists:["offset"]},ee={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,s=e.options,o=n.elements.arrow,f=n.modifiersData.popperOffsets,i=U(n.placement),a=Mt(i),u=[H,T].indexOf(i)>=0?"height":"width";if(o&&f){var p=function(j,O){return Yt(typeof(j=typeof j=="function"?j(Object.assign({},O.rects,{placement:O.placement})):j)!="number"?j:Jt(j,it))}(s.padding,n),c=Et(o),y=a==="y"?R:H,d=a==="y"?B:T,v=n.rects.reference[u]+n.rects.reference[a]-f[a]-n.rects.popper[u],g=f[a]-n.rects.reference[a],m=ot(o),D=m?a==="y"?m.clientHeight||0:m.clientWidth||0:0,E=v/2-g/2,b=p[y],x=D-c[u]-p[d],l=D/2-c[u]/2+E,h=ft(b,l,x),w=a;n.modifiersData[r]=((t={})[w]=h,t.centerOffset=h-l,t)}},effect:function(e){var t=e.state,n=e.options.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r!="string"||(r=t.elements.popper.querySelector(r)))&&Nt(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function re(e){return[R,T,B,H].some(function(t){return e[t]>=0})}var oe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,s=t.rects.popper,o=t.modifiersData.preventOverflow,f=et(t,{elementContext:"reference"}),i=et(t,{altBoundary:!0}),a=ne(f,r),u=ne(i,s,o),p=re(a),c=re(u);t.modifiersData[n]={referenceClippingOffsets:a,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":c})}},Le=Pt({defaultModifiers:[Lt,kt,Rt,Ht]}),ie=[Lt,kt,Rt,Ht,$t,It,te,ee,oe],ke=Pt({defaultModifiers:ie});P.applyStyles=Ht,P.arrow=ee,P.computeStyles=Rt,P.createPopper=ke,P.createPopperLite=Le,P.defaultModifiers=ie,P.detectOverflow=et,P.eventListeners=Lt,P.flip=It,P.hide=oe,P.offset=$t,P.popperGenerator=Pt,P.popperOffsets=kt,P.preventOverflow=te,Object.defineProperty(P,"__esModule",{value:!0})})})(Wt,Wt.exports);var Ue=Wt.exports;const ze=qe(Ue);try{window.Popper=ze}catch{}
