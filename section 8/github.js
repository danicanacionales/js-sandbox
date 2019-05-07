class GitHub {
    constructor() {
        this.client_id = 'a22ca87673ddaae098fc'
        this.client_secret = 'ba224af1c314190766263bb6087b2455cadde573'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}