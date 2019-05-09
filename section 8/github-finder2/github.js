class GitHub {
    constructor(){
        this.client_ID = "a22ca87673ddaae098fc";
        this.client_secret = "ba224af1c314190766263bb6087b2455cadde573";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getProfile(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}&per_page=${this.repos_count}&client_id=${this.client_ID}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}