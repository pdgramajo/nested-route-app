const initialState = {
    people: [],
    person: {}
}


export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_DATA':
            return Object.assign({}, state, action.data);
        case 'GET_USER':
            return Object.assign({}, state.person, action.data);
        case 'EDIT_USER':
            return Object.assign({}, state.person, action.data);
        default:
            return state;
    }
}
