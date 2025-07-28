import { useRef } from "react";

const ControlledInput = () => {
    // const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // setName(e.target.value);
    // };

    const handleClick = () => {
        alert(`Value: ${inputRef.current?.value}`);
    };

    return (

        <div className="text-center mt-8 space-x-4">
           <input

        //    value={name} 
           ref={inputRef}
           type="text"
           className="border border-gray-300 rounded p-2"
            />
            <button
            onClick={handleClick}
            className="ml-2 p-2 bg-blue-500 text-white rounded">
                Show Value
            </button> 
        </div>
    )

};

export default ControlledInput;