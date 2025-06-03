import CodingFactoryLogo from "./CodingFactoryLogo";
const Header = () => {

    return (
        <>
        <header className="bg-[#782024] fixed w-full">
            <div className="container mx-auto px-4 flex items-center justify-between"> 
                <CodingFactoryLogo/>
                <a className="text-white hover:underline hover:underline-offset-4 " href="/">Home</a>
            </div>
           
        </header>
        </>
    )
}


export default Header;