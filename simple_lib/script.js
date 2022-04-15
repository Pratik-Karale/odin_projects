`
<tr data-book="">
<td class="book-name">boboi</td>
<td><button class="delete-btn">Delete</button></td>
</tr>
`

// const books = []
class Book {
    addBtnEvtListeners() {
        this.readToggleBtn.addEventListener("click", () => {
            this.read = !this.read
            this.readToggleBtn.innerText = this.read ? "read" : "not read"
        })
        this.deleteBtn.addEventListener("click", () => {
            this.elem.remove()
            this.isDeleted = true
            this.lib.update()
        }, { once: true })
    }
    constructor(name, read,lib) {
        this.name = name
        this.read = read
        this.isDeleted = false
        this.elem = Helper.makeElement(`
        <tr data-book="${name}">
            <td class="book-name">${name}</td>
            <td><button class="delete-btn">Delete</button></td>
            <td><button class="read-btn">${this.read ? 'read' : 'not read'}</button></td>
        </tr>`)
        console.log(this.elem)
        this.readToggleBtn = this.elem.querySelector(".read-btn")
        this.deleteBtn = this.elem.querySelector(".delete-btn")
        this.addBtnEvtListeners()
        this.lib=lib
    }
}

class Library {
    addAddBtnEvent(){
        this.table.querySelector(".add-btn").addEventListener("click",()=>{
            const popup=Helper.makeElement(`
            <div id="add-book-popup">
            <h2>Add A Book</h2>
            <form>
            <div>
            <label for="mail">Book Name: </label>
            <input type="text" id="book-name-input" name="bookName" minlength="1"></div>
            <div>
            <input type="radio" name="read-status" id="read-status-input">
            <label for="read-statues-input">Read</label>
            </div>
            <button type="button" class="popup-add-btn">Add book</button>
          </form>
          </div>`)
          const popupBtn=popup.querySelector(".popup-add-btn")
          const bookNameInput=popup.querySelector("#book-name-input")
          const readStatusInput=popup.querySelector("#read-status-input")
        //   popup.querySelector("form").
            popupBtn.addEventListener("click",()=>{
                if(bookNameInput.value==""){
                    bookNameInput.setCustomValidity("oi oi thats definetly not a book name")
                    bookNameInput.reportValidity()
                    return
                }
                const bookName=bookNameInput.value
                const bookRead=readStatusInput.value=="on"
                const book = new Book(bookName, bookRead,this)
                this.books.push(book)
                document.querySelector("tbody").appendChild(book.elem)
            })
            document.body.appendChild(popup)
        })}   
    constructor() {
        this.books = []
        this.table = Helper.makeElement(`
        <table>
        <caption>My Library</caption>
        <thead>
            <tr>
                <th>
                    <th>Name</th>
                    <th><button class="add-btn">Add A Book</button></th>
                </th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
        `)
        
        this.addAddBtnEvent()

        document.body.appendChild(this.table)
    }

    update(){
        this.books.filter((book) => !book.isDeleted)
    }

}


// function book(name,read) {
//     this.name = name
//     this.read = read
// }




// document.getElementById("add-btn").addEventListener("click", addBook)


// function addReadButton(bookElem) {
//     bookElem.querySelector(".read-btn").onclick = () => {
//         this.read = !this.read
//         this.bookElem.querySelector("button.read-btn").innerText = this.read ? "read" : "not read"
//     }
// }
// function addDeleteButton(bookElem) {
//     bookElem.querySelector(".delete-btn").onclick = () => {
//         bookElem.remove()
//         const bookObj=books.forEach( (elem,index) => {
//             (elem.name == bookElem.getAttribute("data-book"))?books.splice(index,1):null
//         })
//     }
// }
const myLib = new Library()

