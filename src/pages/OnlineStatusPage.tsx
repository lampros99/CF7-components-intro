import { useEffect } from "react";
import OnlineStatus from "../components/OnlineStatus";


const OnlineStatusPage = () => {

    useEffect(() => {
        document.title = "CF7 Online Status"
    }, [])


    return (
        <>
        <OnlineStatus/>
        </>
    )
}

export default OnlineStatusPage;