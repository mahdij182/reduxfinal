import { ADD, CHECK, DELETE, EDIT, FILTER, FILTER_TAB } from "./action-types"

export const addHandler=(newTodo)=>{
    return {
        type:ADD,
        payload: newTodo
    }
}
export const deleteHandler=(ID)=>{
    return {
        type:DELETE,
        payload: ID
    }
}
export const checkHandler=(ID)=>{
    return {
        type:CHECK,
        payload: ID
    }
}
export const editHandler=(ID,newTodo)=>{
    return {
        type:EDIT,
        payload: {ID,newTodo}
    }
}

export const filterHandler=(choix)=>{
return{
    type:FILTER,
    payload:choix
}
}

export const filterTabHandler=()=>{
    return {
        type:FILTER_TAB
    }
}