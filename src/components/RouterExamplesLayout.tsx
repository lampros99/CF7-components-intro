import { Outlet } from "react-router";
import ExamplesSection from "./ExamplesSection";




const RouterExamplesLayout = () => {
    return (
        <>
       
        <div className="container mx-auto min-h-[65vh] pt-24">
        <Outlet></Outlet>
        </div>

        <ExamplesSection/>
   
       
 
        </>
    )
}

export default RouterExamplesLayout;