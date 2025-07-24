import { useEffect } from "react";
import AutoRedirect from "../components/AutoRedirect";
import AutoRedirectAdvanced from "../components/AutoRedirectAdvanced";





const AutoRedirectPage = () => {

    useEffect(() => {
        document.title = "CF7 Auto Redirect Example";   
        }, []);

    return (
        <>
        <AutoRedirect></AutoRedirect>
        <AutoRedirectAdvanced></AutoRedirectAdvanced>
        </>
    )
}

export default AutoRedirectPage