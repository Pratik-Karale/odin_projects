`
<tr data-book="">
    <td class="book-name">boboi</td>
    <td><button class="delete-btn">Delete</button></td>
</tr>
`

const books=[]


function Book(name){
    this.name=name
    this.read=false
    this.addBookElem=()=>{
        this.bookElem=new DOMParser().parseFromString(`
        <table>
        <tr data-book="${this.name}">
            <td class="book-name">${this.name}</td>
            <td><button class="delete-btn">Delete</button></td>
            <td><button class="read-btn">not read</button></td>
        </tr></table>
        `,"text/html").activeElement.querySelector("[data-book]")
        document.querySelector("tbody").appendChild(this.bookElem)
    }
    this.addBookElem()
    
    this.bookElem.querySelector(".read-btn").onclick=()=>{
        console.log(this.read)
        this.read=!this.read
        console.log(this.read)
        this.bookElem.querySelector("button.read-btn").innerText=this.read?"read":"not read"
        console.log(12321)
    }
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

