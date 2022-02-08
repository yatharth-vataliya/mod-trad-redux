import React, { useEffect } from "react";
import { connect } from "react-redux";
import { incrementByAmount } from "../Slices/CounterSlice";

const CustomCounter = ({ customCount, incrementByAmount }) => {


    useEffect(() => {
        // console.log(props);
    }, []);

    return (
        <div>
            <div>
                <button onClick={() => { incrementByAmount(10) }}> Increment By 10</button>
                <div>{customCount}</div>
            </div>
        </div>
    );

}

/* const incrementByAmount = () => {
    return {
        type: 'customCounter/incrementByAmount',
        payload: 10
    };
}; */

export default connect(({ CustomCounterReducer }) => (CustomCounterReducer), { incrementByAmount })(CustomCounter);