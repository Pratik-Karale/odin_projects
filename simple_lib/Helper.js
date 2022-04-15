class Helper {
    static makeElement(str) {
        /** Returns the element node by parsing the html string. Only one Element can be parsed. **/
        document.querySelector
        const tempDiv = document.createElement("div")
        tempDiv.innerHTML = str
        return tempDiv.querySelector("*:first-child")
    }
}