import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterHandler } from "./redux/action";

export default function SelectTodo() {
  const dispatch = useDispatch();
  const filterTodo = (e) => {
    dispatch(filterHandler(e.target.value));
  };
  return (
    <div>
      <Form.Select aria-label="Default select example" className="select" onChange={filterTodo}>

        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="unDone">unDone</option>
      </Form.Select>
    </div>
  );
}
