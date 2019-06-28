import { combineReducers } from 'redux';
import empReducer from './EmployeeReducer';

const rootReducer = combineReducers({
    employee: empReducer,
});

export default rootReducer;