export default function usuariosReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_DATA':
            return Object.assign([], state, action.data);
        default:
            return state;
    }
}
