
const host = 'http://localhost:54445/';
const namespace = 'api/';

const BASE_URL = host + namespace;

import axios from 'axios';

export default class Api {

    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(host + namespace + url)
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
    static getGitHubUsers() {
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
                    let user = operson.filter(x => x.id === parseInt(id, 10));
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

    static post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(BASE_URL + url, data)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static put(url, data) {
        return new Promise((resolve, reject) => {
            axios.put(BASE_URL + url, data)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

}