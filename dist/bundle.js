(()=>{"use strict";const e=document.querySelector("html"),t=document.querySelectorAll("[data-theme-toggle]"),o=document.querySelector(".sun"),n=document.querySelector(".moon"),a=Boolean(window.localStorage.getItem("themeSelection"));let l=!0;window.onload=()=>{document.body.style.transition="all 1s ease",document.querySelectorAll(".text").forEach((e=>{e.style.transition="all 1s ease"}))};let i;a&&(e.dataset.theme=window.localStorage.getItem("themeSelection"),"dark"===window.localStorage.getItem("themeSelection")?(o.classList.remove("hidden"),n.classList.add("hidden")):(o.classList.add("hidden"),n.classList.remove("hidden"),l=!1)),t.forEach((t=>{t.addEventListener("click",(()=>{l?(o.classList.add("hidden"),n.classList.remove("hidden"),e.dataset.theme="light",window.localStorage.setItem("themeSelection","light"),l=!1):(o.classList.remove("hidden"),n.classList.add("hidden"),e.dataset.theme="dark",window.localStorage.setItem("themeSelection","dark"),l=!0)}))})),function(){return e=this,t=void 0,n=function*(){console.log("It's working maybe!");const{Map:e}=yield google.maps.importLibrary("maps");i=new e(document.querySelector(".main-maps-container"),{center:{lat:-34.397,lng:150.644},zoom:8})},new((o=void 0)||(o=Promise))((function(a,l){function i(e){try{d(n.next(e))}catch(e){l(e)}}function c(e){try{d(n.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,c)}d((n=n.apply(e,t||[])).next())}));var e,t,o,n}()})();