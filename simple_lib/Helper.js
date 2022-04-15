class Helper {
    static makeElement(str) {
        if(str.trim().startsWith("<tr")){
            const tempDiv = document.createElement("table")
            tempDiv.innerHTML = str
            console.log(tempDiv)
            return tempDiv.querySelector("*:first-child")
        }
        /** Returns the element node by parsing the html string. Only one Element can be parsed. **/
        const tempDiv = document.createElement("div")
        tempDiv.innerHTML = str
        console.log(tempDiv)
        return tempDiv.querySelector("*:first-child")
    }
}