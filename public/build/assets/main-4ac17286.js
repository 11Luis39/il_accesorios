window.isRtl=window.Helpers.isRtl();window.isDarkStyle=window.Helpers.isDarkStyle();let g,y=!1;document.getElementById("layout-menu")&&(y=document.getElementById("layout-menu").classList.contains("menu-horizontal"));(function(){var b,L;setTimeout(function(){window.Helpers.initCustomOptionCheck()},1e3),typeof Waves<"u"&&(Waves.init(),Waves.attach(".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",["waves-light"]),Waves.attach("[class*='btn-outline-']"),Waves.attach("[class*='btn-label-']"),Waves.attach(".pagination .page-item .page-link")),document.querySelectorAll("#layout-menu").forEach(function(e){g=new Menu(e,{orientation:y?"horizontal":"vertical",closeChildren:!!y,showDropdownOnHover:localStorage.getItem("templateCustomizer-"+templateName+"--ShowDropdownOnHover")?localStorage.getItem("templateCustomizer-"+templateName+"--ShowDropdownOnHover")==="true":window.templateCustomizer!==void 0?window.templateCustomizer.settings.defaultShowDropdownOnHover:!0}),window.Helpers.scrollToActive(!1),window.Helpers.mainMenu=g}),document.querySelectorAll(".layout-menu-toggle").forEach(e=>{e.addEventListener("click",t=>{if(t.preventDefault(),window.Helpers.toggleCollapsed(),config.enableMenuLocalStorage&&!window.Helpers.isSmallScreen())try{localStorage.setItem("templateCustomizer-"+templateName+"--LayoutCollapsed",String(window.Helpers.isCollapsed()));let a=document.querySelector(".template-customizer-layouts-options");if(a){let i=window.Helpers.isCollapsed()?"collapsed":"expanded";a.querySelector(`input[value="${i}"]`).click()}}catch{}})}),window.Helpers.swipeIn(".drag-target",function(e){window.Helpers.setCollapsed(!1)}),window.Helpers.swipeOut("#layout-menu",function(e){window.Helpers.isSmallScreen()&&window.Helpers.setCollapsed(!0)});let n=document.getElementsByClassName("menu-inner"),d=document.getElementsByClassName("menu-inner-shadow")[0];n.length>0&&d&&n[0].addEventListener("ps-scroll-y",function(){this.querySelector(".ps__thumb-y").offsetTop?d.style.display="block":d.style.display="none"});function C(e){e==="system"&&(window.matchMedia("(prefers-color-scheme: dark)").matches?e="dark":e="light"),[].slice.call(document.querySelectorAll("[data-app-"+e+"-img]")).map(function(a){const i=a.getAttribute("data-app-"+e+"-img");a.src=assetsPath+"img/"+i})}let u=document.querySelector(".dropdown-style-switcher"),w=localStorage.getItem("templateCustomizer-"+templateName+"--Style")||(((L=(b=window.templateCustomizer)==null?void 0:b.settings)==null?void 0:L.defaultStyle)??"light");//!if there is no Customizer then use default style as light
if(window.templateCustomizer&&u){[].slice.call(u.children[1].querySelectorAll(".dropdown-item")).forEach(function(a){a.addEventListener("click",function(){let i=this.getAttribute("data-theme");i==="light"?window.templateCustomizer.setStyle("light"):i==="dark"&&window.templateCustomizer.setStyle("dark")})});const t=u.querySelector("i");w==="light"?(t.classList.add("ti-sun"),new bootstrap.Tooltip(t,{title:"Light Mode",fallbackPlacements:["bottom"]})):w==="dark"?(t.classList.add("ti-moon"),new bootstrap.Tooltip(t,{title:"Dark Mode",fallbackPlacements:["bottom"]})):(t.classList.add("ti-device-desktop"),new bootstrap.Tooltip(t,{title:"System Mode",fallbackPlacements:["bottom"]}))}C(w);let m=document.getElementsByClassName("dropdown-language");if(m.length){let a=function(i){i==="rtl"?localStorage.getItem("templateCustomizer-"+templateName+"--Rtl")!=="true"&&window.templateCustomizer&&window.templateCustomizer.setRtl(!0):localStorage.getItem("templateCustomizer-"+templateName+"--Rtl")==="true"&&window.templateCustomizer&&window.templateCustomizer.setRtl(!1)};var S=a;let e=m[0].querySelectorAll(".dropdown-item");const t=m[0].querySelector(".dropdown-item.active");a(t.dataset.textDirection);for(let i=0;i<e.length;i++)e[i].addEventListener("click",function(){let H=this.getAttribute("data-text-direction");window.templateCustomizer.setLang(this.getAttribute("data-language")),a(H)})}setTimeout(function(){let e=document.querySelector(".template-customizer-reset-btn");e&&(e.onclick=function(){window.location.href=baseUrl+"lang/en"})},1500);const o=document.querySelector(".dropdown-notifications-all"),r=document.querySelectorAll(".dropdown-notifications-read");o&&o.addEventListener("click",e=>{r.forEach(t=>{t.closest(".dropdown-notifications-item").classList.add("marked-as-read")})}),r&&r.forEach(e=>{e.addEventListener("click",t=>{e.closest(".dropdown-notifications-item").classList.toggle("marked-as-read")})}),document.querySelectorAll(".dropdown-notifications-archive").forEach(e=>{e.addEventListener("click",t=>{e.closest(".dropdown-notifications-item").remove()})}),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)});const c=function(e){e.type=="show.bs.collapse"||e.type=="show.bs.collapse"?e.target.closest(".accordion-item").classList.add("active"):e.target.closest(".accordion-item").classList.remove("active")};[].slice.call(document.querySelectorAll(".accordion")).map(function(e){e.addEventListener("show.bs.collapse",c),e.addEventListener("hide.bs.collapse",c)}),window.Helpers.setAutoUpdate(!0),window.Helpers.initPasswordToggle(),window.Helpers.initSpeechToText(),window.Helpers.initNavbarDropdownScrollbar();let h=document.querySelector("[data-template^='horizontal-menu']");if(h&&(window.innerWidth<window.Helpers.LAYOUT_BREAKPOINT?window.Helpers.setNavbarFixed("fixed"):window.Helpers.setNavbarFixed("")),window.addEventListener("resize",function(e){window.innerWidth>=window.Helpers.LAYOUT_BREAKPOINT&&document.querySelector(".search-input-wrapper")&&(document.querySelector(".search-input-wrapper").classList.add("d-none"),document.querySelector(".search-input").value=""),h&&(window.innerWidth<window.Helpers.LAYOUT_BREAKPOINT?window.Helpers.setNavbarFixed("fixed"):window.Helpers.setNavbarFixed(""),setTimeout(function(){window.innerWidth<window.Helpers.LAYOUT_BREAKPOINT?document.getElementById("layout-menu")&&document.getElementById("layout-menu").classList.contains("menu-horizontal")&&g.switchMenu("vertical"):document.getElementById("layout-menu")&&document.getElementById("layout-menu").classList.contains("menu-vertical")&&g.switchMenu("horizontal")},100))},!0),!(y||window.Helpers.isSmallScreen())&&(typeof TemplateCustomizer<"u"&&(window.templateCustomizer.settings.defaultMenuCollapsed?window.Helpers.setCollapsed(!0,!1):window.Helpers.setCollapsed(!1,!1)),typeof config<"u"&&config.enableMenuLocalStorage))try{localStorage.getItem("templateCustomizer-"+templateName+"--LayoutCollapsed")!==null&&window.Helpers.setCollapsed(localStorage.getItem("templateCustomizer-"+templateName+"--LayoutCollapsed")==="true",!1)}catch{}})();typeof $<"u"&&$(function(){window.Helpers.initSidebarToggle();var v=$(".search-toggler"),l=$(".search-input-wrapper"),n=$(".search-input"),d=$(".content-backdrop");if(v.length&&v.on("click",function(){l.length&&(l.toggleClass("d-none"),n.focus())}),$(document).on("keydown",function(o){let r=o.ctrlKey,s=o.which===191;r&&s&&l.length&&(l.toggleClass("d-none"),n.focus())}),setTimeout(function(){var o=$(".twitter-typeahead");n.on("focus",function(){l.hasClass("container-xxl")?(l.find(o).addClass("container-xxl"),o.removeClass("container-fluid")):l.hasClass("container-fluid")&&(l.find(o).addClass("container-fluid"),o.removeClass("container-xxl"))})},10),n.length){var C=function(o){return function(s,f){let c;c=[],o.filter(function(p){if(p.name.toLowerCase().startsWith(s.toLowerCase()))c.push(p);else if(!p.name.toLowerCase().startsWith(s.toLowerCase())&&p.name.toLowerCase().includes(s.toLowerCase()))c.push(p),c.sort(function(h,S){return S.name<h.name?1:-1});else return[]}),f(c)}},u="search-vertical.json";if($("#layout-menu").hasClass("menu-horizontal"))var u="search-horizontal.json";var w=$.ajax({url:assetsPath+"json/"+u,dataType:"json",async:!1}).responseJSON;n.each(function(){var o=$(this);n.typeahead({hint:!1,classNames:{menu:"tt-menu navbar-search-suggestion",cursor:"active",suggestion:"suggestion d-flex justify-content-between px-3 py-2 w-100"}},{name:"pages",display:"name",limit:5,source:C(w.pages),templates:{header:'<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Paginas</h6>',suggestion:function({url:r,icon:s,name:f}){return'<a href="'+baseUrl+r+'"><div><i class="ti '+s+' me-2"></i><span class="align-middle">'+f+"</span></div></a>"},notFound:'<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Pagina</h6><p class="py-2 mb-0"><i class="ti ti-alert-circle ti-xs me-2"></i> Ningun Resultado Encontrado</p></div>'}}).bind("typeahead:render",function(){d.addClass("show").removeClass("fade")}).bind("typeahead:select",function(r,s){s.url!=="javascript:;"&&(window.location=baseUrl+s.url)}).bind("typeahead:close",function(){n.val(""),o.typeahead("val",""),l.addClass("d-none"),d.addClass("fade").removeClass("show")}),n.on("keyup",function(){n.val()==""&&d.addClass("fade").removeClass("show")})});var m;$(".navbar-search-suggestion").each(function(){m=new PerfectScrollbar($(this)[0],{wheelPropagation:!1,suppressScrollX:!0})}),n.on("keyup",function(){m.update()})}});
