import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";


const formSchema = z.object(
    {
        name: z.string().trim().nonempty("Name is required"),
        email: z
        .string()
        .trim()
        .nonempty("Email is required")
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9._%+\\-]{0,63}@[a-zA-Z0-9.\\-]+\.[a-zA-Z]{2,30}$/, "Email is invalid")
        .email("Email is invalid"),
        message: 
        z.string()
        .trim()
        .nonempty()
        .min(1, "Message is required")
        .max(50, "Message cannot exceed 50 characters"),
    }
)
    

type FormValues = z.infer<typeof formSchema>;


const initialValues = {
    name: "",
    email: "",
    message: ""
}

const MultiFieldFormWithReactHook = () => {

    const  {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    })
    



    const onSubmit = (data: FormValues) => {
        console.log("Form submitted:", data);
        reset();
        // setSubmittedData(data);
        // setValues(initialValues);
    }; 

    const onClear = () => {
        reset();
    }

    const watchedValues = watch();


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-md mx-auto mt-10 p-6 bg-white shadow-md">
            <div>
               <input 
               {...register("name")}
               placeholder="Enter your name"
               className="px-4 py-2 w-full border border-gray-300 mb-2 rounded-md"
                autoComplete="off"
                />
                {errors?.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                <input 
                {...register("email")}
               placeholder="Enter your email"
               className="px-4 py-2 w-full border border-gray-300 rounded-md mb-2"
               autoComplete="off"
                /> 
                {errors?.email && (
                <p className="text-red-500 text-sm">{errors.email.message}
                </p> )}
                 </div>

                 <div>
                <textarea
                placeholder="type your message"
                {...register("message")}
                className="px-4 py-3 w-full border border-gray-300 rounded-md mb-1"
                maxLength={200}
                ></textarea>
                {errors?.message && (
                <p className="text-red-500 text-sm">{errors.message.message}
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
                    onClick={onClear}
                    className="px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-300 mb-10"
                >
                    clear
                </button>
                <div><Button>Click me</Button></div>
                
                </div>
                   </form>
                    <div className="bg-green-100 p-4 rounded-md mb-5 items-center text-center">
                        <h3 className="text-lg font-semibold">Live Data</h3>
                        <p><strong>Name:</strong> {watchedValues.name}</p>
                        <p><strong>Email:</strong> {watchedValues.email}</p>
                        <p><strong>Message:</strong> {watchedValues.message}</p>
                    </div>
        </>
);

}


export default MultiFieldFormWithReactHook;