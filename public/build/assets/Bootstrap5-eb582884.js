var V=(o,a)=>()=>(a||o((a={exports:{}}).exports,a),a.exports);var x=V((y,m)=>{(function(o,a){typeof y=="object"&&typeof m<"u"?m.exports=a():typeof define=="function"&&define.amd?define(a):(o=typeof globalThis<"u"?globalThis:o||self,o.FormValidation=o.FormValidation||{},o.FormValidation.plugins=o.FormValidation.plugins||{},o.FormValidation.plugins.Bootstrap5=a())})(globalThis,function(){function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var r=0;r<n.length;r++){var l=n[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function g(t,n,r){return n&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&d(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},c(t)}function d(t,n){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,e){return l.__proto__=e,l},d(t,n)}function E(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function h(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(t)}function O(t){var n=E();return function(){var l=c(t),e;if(n){var i=c(this).constructor;e=Reflect.construct(l,arguments,i)}else e=l.apply(this,arguments);return _(this,e)}}function k(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&(t=c(t),t!==null););return t}function p(){return typeof Reflect<"u"&&Reflect.get?p=Reflect.get.bind():p=function(n,r,l){var e=k(n,r);if(e){var i=Object.getOwnPropertyDescriptor(e,r);return i.get?i.get.call(arguments.length<3?n:l):i.value}},p.apply(this,arguments)}var s=FormValidation.utils.classSet,f=FormValidation.utils.hasClass,w=FormValidation.plugins.Framework,P=function(t){b(r,t);var n=O(r);function r(l){var e;return o(this,r),e=n.call(this,Object.assign({},{eleInvalidClass:"is-invalid",eleValidClass:"is-valid",formClass:"fv-plugins-bootstrap5",rowInvalidClass:"fv-plugins-bootstrap5-row-invalid",rowPattern:/^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,rowSelector:".row",rowValidClass:"fv-plugins-bootstrap5-row-valid"},l)),e.eleValidatedHandler=e.handleElementValidated.bind(h(e)),e}return g(r,[{key:"install",value:function(){p(c(r.prototype),"install",this).call(this),this.core.on("core.element.validated",this.eleValidatedHandler)}},{key:"uninstall",value:function(){p(c(r.prototype),"install",this).call(this),this.core.off("core.element.validated",this.eleValidatedHandler)}},{key:"handleElementValidated",value:function(e){var i=e.element.getAttribute("type");if((i==="checkbox"||i==="radio")&&e.elements.length>1&&f(e.element,"form-check-input")){var u=e.element.parentElement;f(u,"form-check")&&f(u,"form-check-inline")&&s(u,{"is-invalid":!e.valid,"is-valid":e.valid})}}},{key:"onIconPlaced",value:function(e){s(e.element,{"fv-plugins-icon-input":!0});var i=e.element.parentElement;f(i,"input-group")&&(i.parentElement.insertBefore(e.iconElement,i.nextSibling),e.element.nextElementSibling&&f(e.element.nextElementSibling,"input-group-text")&&s(e.iconElement,{"fv-plugins-icon-input-group":!0}));var u=e.element.getAttribute("type");if(u==="checkbox"||u==="radio"){var v=i.parentElement;f(i,"form-check")?(s(e.iconElement,{"fv-plugins-icon-check":!0}),i.parentElement.insertBefore(e.iconElement,i.nextSibling)):f(i.parentElement,"form-check")&&(s(e.iconElement,{"fv-plugins-icon-check":!0}),v.parentElement.insertBefore(e.iconElement,v.nextSibling))}}},{key:"onMessagePlaced",value:function(e){e.messageElement.classList.add("invalid-feedback");var i=e.element.parentElement;if(f(i,"input-group")){i.appendChild(e.messageElement),s(i,{"has-validation":!0});return}var u=e.element.getAttribute("type");(u==="checkbox"||u==="radio")&&f(e.element,"form-check-input")&&f(i,"form-check")&&!f(i,"form-check-inline")&&e.elements[e.elements.length-1].parentElement.appendChild(e.messageElement)}}]),r}(w);return P})});export default x();
