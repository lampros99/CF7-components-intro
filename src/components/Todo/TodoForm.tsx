import { useState } from "react";

const TodoForm = () => {


    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        
    }



    return (
        <>
        <div className="max-w-sm mx-auto p-6">
        <h1 className="text-center text-2xl">TO-DO List</h1>
        <form 
        className="flex gap-4 mb-4"
        onSubmit={handleSubmit}
        >

            <input 
            type="text" 
            value={text}
            onChange={handleChange}
            className="flex-1 border p-2 rounded" 
            placeholder="New task.." />

            <button
             type="submit"
             className="bg-cf-dark-gray text-white px-4 py-4 rounded"
             >Add
             </button>
        </form>
        </div>
        

        </>
    )
};

export default TodoForm;