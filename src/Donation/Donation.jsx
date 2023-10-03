import { useEffect, useState } from "react";
import Card from "../Card/card";


const Donation = () => {
    const [donation, setDonation ] = useState([])

    useEffect(()=>{
        fetch('donationlist.json')
        .then(res=> res.json())
        .then(data => setDonation(data))
    }, [])
    
    
    return ( 
        <div className= "grid md:grid-cols-2 lg:grid-cols-4 py-16 px-10 gap-5">
            {
                donation.map(donation => <Card key={donation.id} donation={donation} ></Card>)
            }
            
        </div>
    );
};

export default Donation;