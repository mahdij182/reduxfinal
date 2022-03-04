import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandler } from "./redux/action";
import SelectTodo from "./selectTask";

export default function AddTodo() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTodo = () => {
    const newTodo = { id: Math.random(), text, isDone: false };

    text && dispatch(addHandler(newTodo));
    setText("");
  };
  return (
    <div className="addTodoContainer">
      <input
        placeholder="add your task here ..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="header">
        <button onClick={addTodo}>
          {" "}
          <i class="far fa-plus-square"></i>{" "}
        </button>
        <SelectTodo />
      </div>
    </div>
  );
}
