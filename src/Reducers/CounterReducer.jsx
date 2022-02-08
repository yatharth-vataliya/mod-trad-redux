
const initialState = { count: 0 };

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...state, count: parseInt(state.count) + 1 };
        //break;
        case 'counter/decrement':
            return { ...state, count: parseInt(state.count) - 1 };
        //break;
        default:
            return state;
    }
}

export default CounterReducer;