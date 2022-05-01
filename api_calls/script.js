const imgElem = document.querySelector("img")
const queryInput= document.getElementById("query-input")
const queryBtn= document.getElementById("query-btn")


async function getImgUrl(query) {
    const responseUrl = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s="+query)
    .then(resp => {
        return resp.json()
    }).then(json => {
        return json.data.images.original.url
    })
    return responseUrl
}
queryBtn.addEventListener("click",()=>{
    const query=queryInput.value
    if(query==""){
        return
    }
    getImgUrl(query)
        .then(url=>imgElem.src=url)
        .catch(()=>imgElem.src="https://media2.giphy.com/media/----------/giphy.gif")
})