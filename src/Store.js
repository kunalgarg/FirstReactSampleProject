import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';

const middleware = [
    thunk
];
const enhancer = compose(applyMiddleware(...middleware));
// const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default createStore(reducer, {}, enhancer);