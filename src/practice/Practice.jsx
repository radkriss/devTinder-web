import { useState } from "react";

const Practice = () => {

    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const changeTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setTodoList([...todoList, {value: e.target.value, edit: false}]);
            setNewTodo("");
        }
    }

    const deleteTodo = (index) => {
        let todos = [...todoList];
        todos.splice(index, 1);
        setTodoList(todos);
    }

    const editTodo = (index) => {
        let todos = [...todoList];
        todos[index].edit = true;
        setTodoList(todos);
    }

    const editTodoValue = (e, index) => {
        let todos = [...todoList];
        todos[index].value = e.target.value;
        setTodoList(todos); 
    }

    const handleEditEnter = (e, index) => {
        if (e.key==="Enter") {
            let todos = [...todoList];
            todos[index].edit = false;
            setTodoList(todos);
        }
    }

    return (
        <div>
            <div>Practice page</div>
            <div>
                <input type="text" value={newTodo} onChange={changeTodo} onKeyDown={handleKeyDown} />
                {todoList.map((todo, index) => {
                    return <div className="todos">
                        {!todo.edit && <div>{todo.value}</div>}
                        {todo.edit && <input type="text" value={todo.value} onKeyDown={(e) => handleEditEnter(e, index)} onChange={(e) => editTodoValue(e, index)}/>}
                        <div onClick={() => deleteTodo(index)}>Delete</div>
                        <div onClick={() => editTodo(index)}>Edit</div>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Practice;