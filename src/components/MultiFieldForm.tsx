import { useState } from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
}

const initialValues = {
    name: "",
    email: "",
    message: ""
}

const MultiFieldForm = () => {

    const [values, setValues] = useState<FormValues>(initialValues);


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with values:", values);
        setValues(initialValues);

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues(
        (prev) => ({
            ...prev,
            [name]: value
        })
        )

    };


    const handleClear = () => {
         setValues(initialValues);

    }



    return (
        <>
           
            <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto mt-10">
               <input 
               type="text"
               value={values.name}
               name="name"
               placeholder="Enter your name"
               onChange={handleChange}
               className="px-4 py-2 border border-gray-300 rounded-md mb-4"
               required
                />
                <input 
               type="email"
               value={values.email}
               name="email"
               placeholder="Enter your email"
               onChange={handleChange}
               className="px-4 py-2 border border-gray-300 rounded-md mb-4"
               required
                />
                <textarea
                placeholder="type your message"
                value={values.message}
                className="px-4 py-2 border border-gray-300 rounded-md mb-4"
                name="message"
                onChange={handleChange}
                required
                ></textarea>

                <div className="bg-gray-100 p-4 rounded-md mb-4">

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 mb-4"
                >
                    submit
                </button>
                <button
                    type="button"
                    onClick={handleClear}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-300"
                >
                    clear
                </button>

                </div>

                
                  
            </form>

        </>
);

}


export default MultiFieldForm;