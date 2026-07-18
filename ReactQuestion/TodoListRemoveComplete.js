// Here is a simple and clean React To-Do component with:

// ✅ A list of todos
// ✅ Each todo has Delete and Mark as Completed buttons
// ✅ Clicking Delete → removes from list
// ✅ Clicking Mark as Completed → moves item to a Completed List

import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        "Learn React",
        "Practice JavaScript",
        "Go to Gym",
        "Read a Book"
    ]);

    const [completed, setCompleted] = useState([]);

    // delete item
    const handleDelete = (item) => {
        setTodos(todos.filter((todo) => todo !== item));
    };

    // mark item as completed
    const handleComplete = (item) => {
        setCompleted([...completed, item]);     // add to completed list
        setTodos(todos.filter((todo) => todo !== item)); // remove from todo list
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>✅ Todo List</h2>

            <ul>
                {todos.map((item, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        {item}
                        <button
                            onClick={() => handleDelete(item)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>

                        <button
                            onClick={() => handleComplete(item)}
                            style={{ marginLeft: "10px" }}
                        >
                            Mark as Completed
                        </button>
                    </li>
                ))}
            </ul>

            <h2>✅ Completed List</h2>

            <ul>
                {completed.map((item, index) => (
                    <li key={index} style={{ color: "green" }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
