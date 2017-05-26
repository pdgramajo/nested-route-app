const initialState = {
    create_user:{}
}


export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return Object.assign({}, state, {create_user:action.data});
        default:
            return state;
    }
}
