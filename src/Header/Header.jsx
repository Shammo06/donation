import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="lg:flex md:flex center-div  justify-between items-center lg:px-32 pt-9 px-10">
            <img className="pb-8" src="https://i.ibb.co/xCWrpvs/Logo.png" alt="" />
            <div className="">
                <ul className="flex gap-8 pb-5 font-bold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/donation'>Donation</NavLink></li>
                    <li><NavLink to='/statistics'>Statistics</NavLink></li>
                </ul>
            </div>
        </div>  

    );
};

export default Header;