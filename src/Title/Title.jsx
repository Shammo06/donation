import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Title = () => {
    
    const [inputvalue, setInputValue]= useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      
    const navigate = useNavigate()

    const handleClick = () =>{
      navigate(`/search/${inputvalue}`)
    }

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JzjgZPX/Rectangle-4281.png)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-center text-black">I Grow By Helping People In Need</h1>
                
            <div className="flex pt-40">
                <input value={inputvalue} onChange={handleInputChange} type="text" placeholder="Search here" className="h-12 input-primary w-42 lg:w-96 rounded-l-lg pl-3" />
                <button onClick={handleClick} className="text-white  bg-orange-500 w-20 lg:w-32 rounded-r-lg">Search</button>
            </div>
        </div>
        
            
           

    );
};

export default Title;