import {useState} from "react";
import {Link} from "react-router-dom";
import { Menu , X } from "lucide-react";
import CodingFactoryLogo from "./CodingFactoryLogo";

const HeaderResponsive = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <>
        <header className="bg-[#782024] fixed w-full">
            
            <div className="container mx-auto px-4 flex items-center justify-between"> 
                <CodingFactoryLogo/>

                <button
                className="text-white md:hidden"
                onClick={() => setMenuOpen(!menuOpen)} 
                >
                    { menuOpen ? <X size={36}/> : <Menu size={36}/>}
                    
                </button>

                <nav 
                // className="flex gap-4"
                className={`
                      ${menuOpen ? "block" : "hidden"
                    } md:flex gap-4 bg-cf-dark-red text-white top-24 absolute md:p-2 w-full md:static md:w-auto left-0
                    `}
                >


                {/* <a  href="/" className="text-white hover:underline hover:underline-offset-4 ">Home</a> */}
                <Link to="/" className="block md-inline hover:underline hover:underline-offset-4"
                 onClick={() => setMenuOpen(false)}>Home</Link>

                <Link to="/examples/name-changer" className="block md-inline hover:underline hover:underline-offset-4"
                 onClick={() => setMenuOpen(false)}>Name Changer</Link>
                </nav>
            </div>
           
        </header>
        </>
    )
}


export default HeaderResponsive;