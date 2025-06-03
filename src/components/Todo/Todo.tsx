//ToDo: create a function with useReducer
import TodoForm from "./TodoForm";

type TodoProps = {
    id: number, 
    text: string,
}

type actions = {
    
}

const Todo = () => {
    return (
        <>
        <div className="max-w-sm mx-auto p-6">
        <h1 className="text-center text-2xl">TO-DO List</h1>
        <TodoForm></TodoForm>
        </div>
        </>
    );
}



export default Todo;