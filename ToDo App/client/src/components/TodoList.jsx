import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList(props) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(data => {
                const todos = Object.values(data)
                setTodos(todos)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const changeStatusHandler = (todoId) => {
        setTodos(state => state.map(todo=>todo._id===todoId ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    return (




        <main className="main">

            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">



                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {todos.map(todo => (
                                <TodoItem
                                    key={todo._id}
                                    text={todo.text}
                                    isCompleted={todo.isCompleted}
                                    _id={todo._id}
                                    changeStatusHandler={changeStatusHandler}
                                />
                            ))}


                        </tbody>
                    </table>
                </div>
            </section>
        </main>




    )
}