const github = new GitHub;
const ui = new UI;
const UIsearchBar = document.getElementById('searchUser');

UIsearchBar.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText === ''){
        ui.clearProfile();
    }else{
        ui.clearProfile();
        github.getProfile(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User Not Found', 'alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }
});