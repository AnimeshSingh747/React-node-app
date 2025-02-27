import React, { useReducer } from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1};
        case 'decrement':
            return { count: state.count - 1};
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0});

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}

export default Counter;