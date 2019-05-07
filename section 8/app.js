const github = new GitHub;
const ui = new UI;

const UIsearchUser = document.getElementById('searchUser');

UIsearchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){

                }else{
                    ui.showProfile(data.profile);
                }
            })
    }else{

    }
});