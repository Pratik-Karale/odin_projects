`
<tr data-book="">
    <td class="book-name">boboi</td>
    <td><button class="delete-btn">Delete</button></td>
</tr>
`

const books=[]


function Book(name){
    this.name=name
    this.addBookElem=()=>{
        this.bookElem=new DOMParser().parseFromString(`
        <table>
        <tr data-book="${this.name}">
            <td class="book-name">${this.name}</td>
            <td><button class="delete-btn">Delete</button></td>
        </tr></table>
        `,"text/html").activeElement.querySelector("[data-book]")
        document.querySelector("tbody").appendChild(this.bookElem)
    }
    this.addBookElem()
    
    this.bookElem.querySelector(".delete-btn").onclick=()=>{
        this.bookElem.remove()
        books.splice(books.indexOf(this),1)
    }

}




document.getElementById("add-btn").addEventListener("click",addBook)


function addBook(){
    books.push(new Book(prompt("Whats the books name?")))
}

// function addBook(){

// }

