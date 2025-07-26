import { useEffect } from "react";
import { useNavigate } from "react-router";


const AutoRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the home page after 3 seconds
        const timer = setTimeout(() => {
            navigate("/examples");
        }, 3000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
        <h1 className="text-center text-2xl mb-4">
            Redirecting...
        </h1>
        </>
    )
};

export default AutoRedirect;