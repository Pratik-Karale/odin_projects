import yumImg from "./yum-yums.gif"
import coffeeImg from "./coffee.jpeg"

const tabHtml={
    home:`<h1>Busybee Cafe</h1>
        <h3>Cafe for those agile achievers!</h3>
        <img src="${coffeeImg}" alt="">
        <p>This cafe will serve ya YoUR HIGH quality coffee within 5 mins of order!</p>
        <img src="${yumImg}" alt="">`,
    contact:`<h1>contact us</h1>
            <ul>
                <li><a href="email">email</a></li>
                <li><a href="call">call</a></li>
            </ul>`,
    menu:`
    <ul>
        <li>coffee</li>
        <li>latte</li>
        <li>cappuccino</li>
    </ul>`
}

function loadContent(tabName){
    let contentDiv=document.createElement("div")
    contentDiv.id="content"
    console.log(yumImg)
    contentDiv.innerHTML=`
    <header>
        <nav>
            <ul>
                <li><button data-tab-name="home" class="tabBtn">Home</li>
                <li><button data-tab-name="contact" class="tabBtn">Contact</li>
                <li><button data-tab-name="menu" class="tabBtn">Menu</li>
            </ul>
        </nav>
    </header>
    <main>
        ${tabHtml.home}        
    </main>`
    document.body.innerHTML=""
    document.body.appendChild(contentDiv)
}


function changeTab(tabName){
    document.querySelector("main").innerHTML=tabHtml[tabName]
}

export {changeTab,loadContent}