import {useEffect} from "react";
import { useParams } from "react-router";


const UserPage = () => {

    const { userId } = useParams();

    useEffect(() => {
     document.title = `CF7 User id: ${ userId }`;
}, [userId])
    return(
        <>
        <h1>user with id: ${}</h1>

        </>

    )
}


export default UserPage;