const mylibrary = []

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id
    
}

let testBook1 = new Book("My year of rest and relaxation", "Ottessa Moshfegh", 304, true, crypto.randomUUID());
let testBook2 = new Book("All the lovers in the night", "Mieko Kawakami", 224, true, crypto.randomUUID())
let testBook3 = new Book("The order of time", "Carlo Rovelli", 256, false, crypto.randomUUID())

mylibrary.push(testBook1)
mylibrary.push(testBook2)
mylibrary.push(testBook3)

/* Display books */
const bookscontainer = document.getElementById('books-container')
function displayBooks() {
    mylibrary.forEach(book => {
        const bookCard = document.createElement('div')
        const titleHeading = document.createElement('h1')
        titleHeading.textContent = book.title
        titleHeading.style = "text-align: center;"
        const authorHeading = document.createElement('h2')
        authorHeading.style = "text-align: center;"
        authorHeading.textContent = book.author
        const pagesHeading = document.createElement('h3')
        pagesHeading.textContent = "Pages: " + book.pages
        const readHeading = document.createElement('h3')
        readHeading.textContent = "Read: " + book.read
        bookCard.className = 'book'
    
        bookCard.append(titleHeading, authorHeading, pagesHeading, readHeading)
    
        bookscontainer.append(bookCard)
    })
}

function clearDisplay() {
    bookscontainer.innerHTML= ""
}

/* Add Book to Library*/
function addBooktoLibrary(title, author, pages, read) {

    let book = new Book(title, author, pages, read, crypto.randomUUID())
    mylibrary.push(book)
    console.log(mylibrary);
}

const addbookbutton = document.getElementById('add-book-button')
const addbookdialog = document.getElementById('add-book-dialog')
const bookform = document.getElementById('book-form')

/* modal functions */
addbookbutton.addEventListener('click', ()=> {
    addbookdialog.showModal();
})

function clearForm() {
    const title = document.getElementById('title')
    const author = document.getElementById('author')
    const pages = document.getElementById('pages')
    const read = document.getElementById('read')

    title.value = ""
    author.value = ""
    pages.value = ""
    read.checked = false
}
bookform.addEventListener('submit', (e)=> {
    e.preventDefault()
    const formData = new FormData(bookform)

    const title = formData.get('title')
    const author = formData.get('author')
    const pages = formData.get('pages')
    let read = formData.get('read')

    if (read == 'on') {
        read = true
    } 
    else {
        read = false
    }

    addBooktoLibrary(title, author, pages, read)
    clearDisplay()
    displayBooks()
    clearForm()
    
    addbookdialog.close()

    

})

const exitdialog = document.getElementById('exit-dialog')

exitdialog.addEventListener('click', ()=> {
    addbookdialog.close()
})



console.log(mylibrary)


displayBooks()
