import { combineReducers } from 'redux';
import peopleReducer from '../people/peopleReducer';
import usuariosReducer from '../usuarios/usuariosReducer';
import aboutReducer from '../about/aboutReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
   peopleReducer ,
   usuariosReducer ,
   aboutReducer,
   form: reduxFormReducer
});
export default rootReducer ;