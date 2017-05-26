
import Api from '../Api';

export function loadPeople() {
    return (dispatch) => {
        return Api.get('people').then(response => {
            dispatch({ type: 'LOAD_DATA', data: { people: response.peoplebd } })
        }).catch(error => {
            console.error('error => ', error);
        });
    };
}


export function getUserById(id) {
    return dispatch => {
        return Api.get('people/' + id).then(
            response => {
                dispatch({ type: 'GET_USER', data: { person: response.person } })
            }
        )


    }
}

export function editUser(id, user) {
    return dispatch => {
        return Api.put('People/' + id, user).then(
            response => {
                dispatch({ type: 'EDIT_USER', data: { person: response.data.person } })
            }
        )
    }
}