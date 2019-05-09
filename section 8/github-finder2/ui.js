const UIprofileDiv = document.getElementById('profile');

class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }    

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <button class="btn btn-primary btn-block">View Profile</button>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-pill badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-pill badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="repos"></div>
        `
    }

    showAlert(message, className){
        this.clearAlert();
        const search = document.querySelector('.search');
        const searchContainer = document.querySelector('.searchContainer');
        const alert = document.createElement('div');
        alert.className = className;
        alert.appendChild(document.createTextNode(message));
        searchContainer.insertBefore(alert, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    showRepos(repos){
        const reposDiv = document.getElementById('repos');
        let output = '';

        repos.forEach(function(repo){
            output += `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-pill badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-pill badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-pill badge-success">Forks: ${repo.forks}</span>
                        </div>
                    </div>
                </div>
            `
        });

        reposDiv.innerHTML = output;
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}