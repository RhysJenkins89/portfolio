(()=>{"use strict";const e=document.querySelector("html"),t=document.querySelectorAll("[data-theme-toggle]"),o=document.querySelector(".sun"),d=document.querySelector(".moon"),l=Boolean(window.localStorage.getItem("themeSelection"));let a=!0;window.onload=()=>{document.body.style.transition="all 1s ease",document.querySelectorAll(".text").forEach((e=>{e.style.transition="all 1s ease"}))};const s=document.querySelector("[data-form-submit]");l&&(e.dataset.theme=window.localStorage.getItem("themeSelection"),"dark"===window.localStorage.getItem("themeSelection")?(o.classList.remove("hidden"),d.classList.add("hidden")):(o.classList.add("hidden"),d.classList.remove("hidden"),a=!1)),t.forEach((t=>{t.addEventListener("click",(()=>{a?(o.classList.add("hidden"),d.classList.remove("hidden"),e.dataset.theme="light",window.localStorage.setItem("themeSelection","light"),a=!1):(o.classList.remove("hidden"),d.classList.add("hidden"),e.dataset.theme="dark",window.localStorage.setItem("themeSelection","dark"),a=!0)}))})),s.addEventListener("submit",(e=>{e.preventDefault(),console.log("Submit event handler")}))})();