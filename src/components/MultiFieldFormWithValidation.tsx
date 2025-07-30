import { useState } from "react";


type FormValues = {
    name: string;
    email: string;
    message: string;
}

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
}

const initialValues = {
    name: "",
    email: "",
    message: ""
}

const MultiFieldFormWithValidation = () => {

    const [values, setValues] = useState<FormValues>(initialValues);
    const [submitted, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>(null);

    const validationForm = (values: FormValues): FormErrors => {
        const errors: FormErrors = {};

        if (!values.name.trim()) {
            errors.name = "Name is required";
        }

        if (!values.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[a-zA-Z0-9][a-zA-Z0-9._%+\\-]{0,63}@[a-zA-Z0-9.\\-]+\.[a-zA-Z]{2,30}$/.test(values.email)) {
            errors.email = "Email is invalid";
        }

        if (!values.message.trim()) {
            errors.message = "Message is required";
        } else if (values.message.length > 200) {
            errors.message = "Message cannot exceed 500 characters";
        }

        return errors;

    }


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validationForm(values);

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmittedData(null);
            console.error("Validation errors:", validationErrors);
            console.log("Validation errors:", validationErrors);
            return;
        }


        setSubmittedData(values);
        setValues(initialValues);
        setErrors(null);
        console.log("Form submitted with values:", values);

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues(
        (prev) => ({
            ...prev,
            [name]: value
        }));         

        setErrors(
            prev => ({
                ...prev,
                [name]: undefined,
            }));
    };


    const handleClear = () => {
         setValues(initialValues);
         setErrors(null);
         setSubmittedData(null);
         console.log("Form cleared");
    }



    return (
        <>
           
            <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto mt-10">
            <div>
               <input 
               type="text"
               value={values.name}
               name="name"
               placeholder="Enter your name"
               onChange={handleChange}
               className="px-4 py-2 border border-gray-300 rounded-md mb-4"
               required
                />
                {errors?.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                <input 
               type="text"
               value={values.email}
               name="email"
               placeholder="Enter your email"
               onChange={handleChange}
               className="px-4 py-2 border border-gray-300 rounded-md mb-4"
               required
                /> 
                {errors?.email && (
                <p className="text-red-500 text-sm">{errors.email}
                </p> )}
                 </div>

                 <div>
                <textarea
                placeholder="type your message"
                value={values.message}
                className="px-4 py-2 border border-gray-300 rounded-md mb-4"
                name="message"
                onChange={handleChange}
                maxLength={200}
                required
                ></textarea>
                {errors?.message && (
                <p className="text-red-500 text-sm">{errors.message}
                </p> )}
                </div>

                <div className="bg-gray-100 p-4 rounded-md  mb-5">

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 mr-5"
                >
                    submit
                </button>
                <button
                    type="button"
                    onClick={handleClear}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-300 mb-10"
                >
                    clear
                </button>
                </div>

                {submitted && (
                    <div className="bg-green-100 p-4 rounded-md mb-5">
                        <h3 className="text-lg font-semibold">Form Submitted Successfully!</h3>
                        <p><strong>Name:</strong> {submitted.name}</p>
                        <p><strong>Email:</strong> {submitted.email}</p>
                        <p><strong>Message:</strong> {submitted.message}</p>
                    </div>
                )}
            </form>

        </>
);

}


export default MultiFieldFormWithValidation;