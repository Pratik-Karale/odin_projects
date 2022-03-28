import {changeTab,loadContent} from "./loadContent.js"
loadContent()

Array.from(document.querySelectorAll(".tabBtn")).forEach((tabBtn)=>{
    tabBtn.addEventListener("click",()=>{
        changeTab(tabBtn.getAttribute("data-tab-name"))
    })
})