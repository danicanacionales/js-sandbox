const UIform = document.getElementById('book-form'),
    UItbody = document.getElementById('book-list'),
    UItitle = document.getElementById('title'),
    UIauthor = document.getElementById('author'),
    UIisbn = document.getElementById('isbn');

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">x</a></td>
        `
        UItbody.appendChild(tableRow);
    }

    clearFields(){
        UItitle.value = '';
        UIauthor.value = '';
        UIisbn.value = '';
    }

    showAlert(message, type){
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;

        alertDiv.appendChild(document.createTextNode(message));

        const card = document.querySelector('.card');
        card.insertBefore(alertDiv, UIform);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            if(confirm('Are you sure?')){
                target.parentElement.parentElement.remove();
            }
        }
    }
}

class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;
            
            ui.addBookToList(book);
        });
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

UIform.addEventListener('submit', function(e){
    const title = UItitle.value;
    const author = UIauthor.value;
    const isbn = UIisbn.value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    //validate
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'danger');
    } else{
        ui.addBookToList(book);
        Store.addBook(book);
        ui.clearFields();
        ui.showAlert('Book inserted', 'success');
    }
    e.preventDefault();
});

UItbody.addEventListener('click', function(e){
    const ui = new UI();

    ui.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Removed', 'info');
    e.preventDefault();
});