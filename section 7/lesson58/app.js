// 56. What is Asynchronous Programming?
// Synchronous Code
// posts = loadPostSync();
// // ... wait til posts are fetched
// // ... do something with posts
// doTheNextThing();

//Asynchronous Code
// loadPostsAsync(function() {
//  // ... wait til posts are fetched
//  // ... do something with posts 
// });
// doTheNextThing(); // Doesn't have to wait until posts load

// Handle Async Code: Callbacks, Promises, Async/Wait

// 57. Ajax & XHR Introduction
// Ajax - Asynchronous JavaScript & XML
//      - Send and receive data asynchronously
// XmlHttpRequest (XHR) Object - API in the form of an object
//      - Methods transfer data between client or server

// 58. XHR Object Methods & Working with text
document.getElementById("button").addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.txt', true);
    // console.log('READYSTATE', xhr.readyState);

    // Optional - used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
         if(this.status === 200){
            //  console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
         }
    }

    // // Old
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('Request Error');
    }
    xhr.send();
    
}