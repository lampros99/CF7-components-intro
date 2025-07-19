import {Link} from "react-router-dom";
import CodingFactoryLogo from "./CodingFactoryLogo";

const Header = () => {

    return (
        <>
        <header className="bg-[#782024] fixed w-full">
            
            <div className="container mx-auto px-4 flex items-center justify-between"> 
                <CodingFactoryLogo/>
                <nav className="flex gap-4">
                {/* <a  href="/" className="text-white hover:underline hover:underline-offset-4 ">Home</a> */}
                <Link to="/" className="text-white hover:underline hover:underline-offset-4">Home</Link>
                <Link to="/examples/name-changer" className="text-white hover:underline hover:underline-offset-4">Name Changer</Link>
                </nav>
            </div>
           
        </header>
        </>
    )
}


export default Header;