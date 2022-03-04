import { useDispatch } from "react-redux";
import { checkHandler, deleteHandler, editHandler } from "./redux/action";
import { useState } from "react";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(deleteHandler(todo.id));
  };
  const checkTodo = () => {
    dispatch(checkHandler(todo.id));
  };
  //creating a boolean value to show the input tag or the text
  const [editing, setEditing] = useState(false);
  const toggle = () => {
    setEditing(!editing);
  };

  const [input, setInput] = useState(todo.text);

  const editTodo = () => {
    dispatch(editHandler(todo.id, input));
    toggle();
  };
  return (
    <div className="todoContainer">
      {editing ? (
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          autoFocus
        />
      ) : (
        <h3>{todo.text} </h3>
      )}
      <div className="todoBtns">
        <button onClick={deleteTodo}>
          <i class="far fa-trash-alt"></i>
        </button>
        <button  onClick={checkTodo} >
          {todo.isDone ? (
            <i class="fas fa-check-circle"></i>
          ) : (
            <i class="far fa-check-circle"></i>
          )}
        </button>

        <button onClick={() => (editing ? editTodo() : toggle())}>
          {editing ? <i class="fas fa-save"></i> : <i class="fas fa-edit"></i>}
        </button>
      </div>
    </div>
  );
}
