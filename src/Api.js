
export default class Api {
    host = 'http://localhost:54445/';
    namespace = 'api/';
    option = {
        access_token: '<asdfasdf',
        header: { access_origin: '' }
    };
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(this.host + this.namespace + url)
                .then((response) => {
                    return response.json()
                })
                .then((operson) => {
                    resolve(operson);
                })
                .catch((error) => {
                    reject(error);
                })
        })

    }
    getGitHubUsers() {
        return new Promise((resolve, reject) => {
            fetch('https://api.github.com/users')
                .then((response) => {
                    return response.json()
                })
                .then((operson) => {
                    resolve(operson);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    getGitHubUserById(id) {
        return new Promise((resolve, reject) => {
            fetch('https://api.github.com/users')
                .then((response) => {
                    return response.json()
                })
                .then((operson) => {
                    let user = operson.filter(x => x.id === parseInt(id,10));
                    console.log('data => ', user);
                    resolve(user[0]);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    getData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
               resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

}