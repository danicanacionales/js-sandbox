const UIsearchUser = document.getElementById('searchUser');

UIsearchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        console.log(userText);
    }
});