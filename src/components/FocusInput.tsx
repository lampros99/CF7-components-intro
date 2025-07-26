import { useRef } from "react";

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null); 

    const handleClick = () => {
        inputRef.current?.focus();
        };

    return (
        <>
        <div className="text-center space-x-4 mt-4">
         <input 
        ref={inputRef}
         className="border px-4 py-2 rounded" 
         type="text" 
         placeholder="text me!" 
         onFocus={(e) => {
         e.target.style.backgroundColor = 'lightblue';
         }} 
         onBlur={(e) => { e.target.style.backgroundColor = ''; 
         }} 
         />
        <button
        onClick={handleClick}
         className="bg-cf-dark-gray text-white px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">Focus input</button>
        </div>
        </>
   
  );
}

export default FocusInput;