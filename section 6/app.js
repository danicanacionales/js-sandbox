const UIform = document.getElementById('book-form'),
    UItbody = document.getElementById('book-list'),
    UItitle = document.getElementById('title'),
    UIauthor = document.getElementById('author'),
    UIisbn = document.getElementById('isbn');

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book){
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
    `
    UItbody.appendChild(tableRow);
    // return tableRow;
}

UI.prototype.clearFields = function(){
    UItitle.value = '';
    UIauthor.value = '';
    UIisbn.value = '';
}

UI.prototype.showAlert = function(message, type){
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;

    alertDiv.appendChild(document.createTextNode(message));

    const card = document.querySelector('.card');
    card.insertBefore(alertDiv, UIform);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        if(confirm('Are you sure?')){
            target.parentElement.parentElement.remove();
        }
    }
}

let books = new Array();

loadBooks();

function loadBooks(){
    books.forEach(function(book){
        const tableRow = createTableRow(book);
        UItbody.appendChild(tableRow);
    });
}

UIform.addEventListener('submit', function(e){
    const title = UItitle.value;
    const author = UIauthor.value;
    const isbn = UIisbn.value;

    const book = new Book(title, author, isbn);
    // books.push(book);

    // const tableRow = createTableRow(book);
    const ui = new UI();

    //validate
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'danger');
    } else{
        ui.addBookToList(book);
        ui.clearFields();
        ui.showAlert('Book inserted', 'success');
    }
    // UItbody.appendChild(tableRow); 

    // console.log(books);
    e.preventDefault();
});

UItbody.addEventListener('click', function(e){
    const ui = new UI();

    ui.deleteBook(e.target);
    ui.showAlert('Book Removed', 'info');
    e.preventDefault();
});

function createTableRow(book){
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
    `    

    // const tdTitle = document.createElement('td');
    // tdTitle.innerHTML = book.title;

    // const tdAuthor = document.createElement('td');
    // tdAuthor.innerHTML = book.author;

    // const tdIsbn = document.createElement('td');
    // tdIsbn.innerHTML = book.isbn;

    // const tdDelete = document.createElement('td');
    // tdDelete.innerHTML = '<a href="#">x</a>';

    // tableRow.appendChild(tdTitle);
    // tableRow.appendChild(tdAuthor);
    // tableRow.appendChild(tdIsbn);
    // tableRow.appendChild(tdDelete);

    return tableRow;
}