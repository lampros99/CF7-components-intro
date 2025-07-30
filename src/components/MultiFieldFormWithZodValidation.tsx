import { useState } from "react";
import { z } from "zod";


const formSchema = z.object(
    {
        name: z.string().trim().nonempty("Name is required"),
        email: z
        .string()
        .trim()
        .nonempty("Email is required")
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9._%+\\-]{0,63}@[a-zA-Z0-9.\\-]+\.[a-zA-Z]{2,30}$/, "Email is invalid")
        .email("Email is invalid"),
        message: z.string().trim().nonempty().min(1, "Message is required").max(50, "Message cannot exceed 50 characters"),
    }
)
    

type FormValues = z.infer<typeof formSchema>;


// type FormValues = {
//     name: string;
//     email: string;
//     message: string;
// }

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

const MultiFieldFormWithZodValidation = () => {

    const [values, setValues] = useState<FormValues>(initialValues);
    const [submitted, setSubmittedData] = useState<FormValues | null>(null);
    const [errors, setErrors] = useState<FormErrors | null>(null);

    const validationForm = () => {

        const result = formSchema.safeParse(values);
        // {success: true, data: values} = result;
        // {success: false, error: zodError} = result;

        if (!result.success) {
            console.log(result.error.issues);
            const newErrors: FormErrors = {};

            result.error.issues.forEach((issue) => {
                const filedName = issue.path[0] as keyof FormErrors;
                newErrors[filedName] = issue.message;
            });

            setErrors(newErrors);
            return false;
        }

        setErrors({});
        return true;

    };


    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        const isValid = validationForm();

        if (isValid) {
            setSubmittedData(values);
            setValues(initialValues);
        }

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
         setErrors({});
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
               autoComplete="off"
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


export default MultiFieldFormWithZodValidation;