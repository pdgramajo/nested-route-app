import Api from '../Api';

export function loadUsers() {
    return (dispatch) => {
        return Api.getGitHubUsers().then(response => {           
            dispatch({ type: 'LOAD_DATA', data: response })
        }).catch(error => {
            console.error('error => ', error);
        });
    };
}
