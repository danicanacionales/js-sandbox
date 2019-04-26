const http = new easyHTTP;

// GET request
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

// Get single post
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });


const data = {
    title: "Title One Hundred And One",
    body: "Body One Hundred And One"
};

//POST request
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

//PUT Request
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });


//DELETE Request
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});