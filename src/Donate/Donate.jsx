import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonateCategory } from "../Title/utlity/localstorage";
import Donatedetail from "../Donatedetail/Donatedetail";

const Donate = () => {
    const storedDonation = getDonateCategory();
    const detail = useLoaderData();
    const [donation,setDonation] =useState([]);
    const [length,setLenght]= useState(4);
        
    useEffect(()=>{
        
        if(detail.length > 0){
            const donations = detail.filter(data =>storedDonation.includes(data.id))
            setDonation(donations)  
        }
        
        
    },[])
    console.log(donation)
    let value= 'hidden'
    if(donation.length>4){
        value ='inline'
    }
    const handleClick=()=>{
        setLenght(donation.length)
        value='hidden'
    }
    return (
        <div>
            <div className="grid lg:grid-cols-2 pt-10 px-10 md:px-24 gap-10 " >
                {
                    donation.slice(0, length).map(donation => <Donatedetail key={donation.id} donation={donation} ></Donatedetail>)              
                }
            </div>

            <div className="text-center py-8">
                <button onClick={handleClick} className={`btn text-white bg-green-500 ${value}`}>See All</button>
            </div>                                    
        </div>
    );
};

export default Donate;