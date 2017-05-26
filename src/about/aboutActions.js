import Api from '../Api';

export function addUser(user) {
    return dispatch => {
        return Api.post('People', user).then(
            response => {
                dispatch({ type: 'CREATE_USER', data: response })
            }
        )
    }
}