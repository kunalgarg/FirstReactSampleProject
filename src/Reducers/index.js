import { combineReducers } from 'redux';
import empReducer from './EmployeeReducer';
import mraReducer from './MralexgrayReducer';

const rootReducer = combineReducers({
    employee: empReducer,
    mralexgray: mraReducer
});

export default rootReducer;