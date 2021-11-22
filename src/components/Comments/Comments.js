import React, { useState } from "react";
import classes from "./Comments.module.css";

function Comments() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo === "") {
      alert("You should not add an empty comment!");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  return (
    <div className={classes.Comments} id={"comments"}>
      <div className={classes.Container}>
        <div className={classes.subContainer}>
          <form className={classes.formContainer} onSubmit={handleSubmit}>
            {/*parametre almayacağı için () olmadan geçilmiş*/}
            <div>Comment:</div>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className={classes.submitButton} type="submit">
              Add
            </button>
          </form>

          {todos.map((todo) => (
            <div key={todo.id} className={classes.todoItem}>
              <p>{todo.text}</p>
              <button
                className={classes.deleteButton}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Comments;
