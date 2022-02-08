import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, increment, decrement }) => {

    useEffect(() => {
        // console.log(props);
    });

    /* const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    } */

    return (
        <div>
            <div>
                <button onClick={increment}>Plus</button>
                <button onClick={decrement}>Minus</button>
            </div>
            <div>
                {count}
            </div>
        </div>
    );

}

const increment = () => {
    return {
        type: 'counter/increment',
        payload: {}
    };
}

const decrement = () => {
    return {
        type: 'counter/decrement',
        payload: {}
    };
}

export default connect(({ CounterReducer }) => (CounterReducer), { increment, decrement })(Counter);