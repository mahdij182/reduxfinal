import { ADD, CHECK, DELETE, EDIT, FILTER, FILTER_TAB } from "./action-types";

const initialState = {
  todos: [{ id: 1, text: "workshop redux", isDone: false }],
  filter: "All",
  filteredTodo:[]

};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== payload),
      };
    case CHECK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload? { ...el, isDone: !el.isDone } : el
        ),
      };

    case EDIT:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload.ID ? { ...el, text: payload.newTodo } : el
        ),
      };
 case FILTER: return{
   ...state, 
   filter:payload
 }
 case FILTER_TAB:return{
   ...state,
   filteredTodo: state.filter==="Done"? state.todos.filter(el=>  el.isDone===true ):
   state.filter==="unDone"? state.todos.filter(el=>  el.isDone===false ):
   state.filter==="All"? state.todos:null 
 }

    default:
      return state;
  }
};
