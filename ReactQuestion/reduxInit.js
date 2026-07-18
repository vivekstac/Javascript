// Redux basic setup

// 1️⃣ Action
// actions.js
export const increment = () => ({
    type: "INCREMENT"
});

export const decrement = () => ({
    type: "DECREMENT"
});

export const updateName = (newName) => ({
    type: "UPDATE_NAME",
    payload: newName
});


// 2️⃣ Reducer

// reducer.js
const initialState = {
    count: 0,
    name: "Guest"
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };

        case "DECREMENT":
            return { ...state, count: state.count - 1 };

        case "UPDATE_NAME":
            return {
                ...state,
                name: action.payload
            };

        default:
            return state;
    }
}

// If multiple reducers needed then

import { combineReducers, createStore } from 'redux'

import theDefaultReducer, {
    counterReducer
} from './reducers'

// Use object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    theDefaultReducer,
    counterReducer
})

// export default counterReducer;

// 3️⃣ Store
// store.js
import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer) || createStore(rootReducer);

// export default store;


// 4️⃣ Provide Store to React App
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { createStoreHook, Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);


// 5️⃣ Use Redux in Component
// App.js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(updateName("Vivek"))}>
                Update Name
            </button>
        </>
    );
}

export default App;
