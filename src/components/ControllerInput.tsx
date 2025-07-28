import { useState } from "react";

const ControlledInput = () => {
    const [name, setName] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (

        <div>
           <input
           value={name} 
           onChange={handleChange}
           type="text"
           className="border border-gray-300 rounded p-2"
            /> 
        </div>

    )

};

export default ControlledInput;