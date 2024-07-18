const myLibrary = [];

document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const library = document.querySelector("#library");
    const tableRow = document.createElement("tr");

    let book = new Book(title, author, pages, false);
    addBookToLibrary(book);
    tableRow.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.pages}</td>
    <button class="delete-button" style="background-color: red; color: white; border: none;">x</button>
    <button class="read-button" style="background-color: white; border: none; margin-left: 50px">✔</button>`

    library.appendChild(tableRow);
    clearFields();
})

document.querySelector("#library").addEventListener("click", (e) => {
    readBook(e.target);
    removeBookFromLibrary(e.target);
})

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function removeBookFromLibrary(element){
    if(element.className === "delete-button") {
        for(let book of myLibrary){
            if(book.title === element.parentElement.children[0].innerHTML){
                myLibrary.splice(myLibrary.indexOf(book), 1);
            }
        }
        element.parentElement.remove();
    }
}

function readBook(element){
    if(element.className === "read-button"){
        element.style.backgroundColor = "green";
        for(let book of myLibrary){
            if(book.title === element.parentElement.children[0].innerHTML){
                book.isRead = true;
                return;
            }
        }
    }
}

function clearFields(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
}

