import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'customCounter',
    initialState: {
        customCount: 0,
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.customCount = state.customCount + parseInt(action.payload);
        }
    }
});

export const { incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;