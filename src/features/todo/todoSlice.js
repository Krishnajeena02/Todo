import { createSlice,nanoid } from '@reduxjs/toolkit'


const intialState = {
    todos:[{
        id:"abc",
        task:"demo",
        isDone:false
    }],
}

 export const todoSlice = createSlice({


    name:"todo",
    intialState,
    reducers:{
        addTodo:(state, action) =>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo:(state, action)=>{
        state.todos=state.todos.filter((todo)=>todo.id != action.payload)
        },
        markAsDone:(state,action)=>{
          state.todos=  state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true;
                }
                return todo;
            })
        }
    }
 })
export const{addTodo,deleteTodo,markAsDone}=todoSlice.actions;
 export default  todoSlice.reducer;

