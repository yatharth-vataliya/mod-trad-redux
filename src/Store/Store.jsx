import { configureStore } from '@reduxjs/toolkit';
// import { createStore, combineReducers } from 'redux';
import CounterReducer from '../Reducers/CounterReducer';
import CustomCounterReducer from '../Slices/CounterSlice';


/* const rootReducer = (state = { count: 0 }, action) => {
    return {
        counter: CounterReducer(state, action),
        customCounter: CustomCounterReducer(state, action)
    };
}; */

/* const rootReducer = combineReducers({
    counter: CounterReducer,
    customCounter: CustomCounterReducer
}) */

const store = configureStore({
    reducer: {
        CounterReducer,
        CustomCounterReducer
    }
})

// const store = createStore(rootReducer);

export default store;