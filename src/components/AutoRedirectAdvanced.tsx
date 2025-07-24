import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const AutoRedirect = () => {
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        const intervalId:number = setInterval(() => {
            setSecondsLeft((prev:number) => prev - 1)
        }, 1000);
    
        // Redirect to the home page after 3 seconds
        const timer = setTimeout(() => {
            navigate("/examples/name-changer");
        }, 3000);

        // Cleanup the timer on component unmount
        return () => {
            clearInterval(intervalId);
            clearTimeout(timer);
    };
    }, []);

    return (
        <>
        <h1 className="text-center text-2xl mb-4">
            Redirecting in {secondsLeft} seconds{secondsLeft !== 1 && "s"}...
        </h1>
        </>
    )
};

export default AutoRedirect;