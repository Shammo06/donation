import { useNavigate } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";


const Donatedetail = ({donation}) => {
    const {id,picture,title, category, cardBg, price, textAndButtonBg, categoryBg} = donation
    
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/detail/${id}`)
    }
    return (
        <div>
            <div className="card md:card-side bg-base-100 shadow-xl" style={{backgroundColor:cardBg}}>
                <img src={picture} alt=""/>
                <div className="card-body">
                    <button className="w-24 text-lg text-center" style={{backgroundColor: categoryBg, color:textAndButtonBg}} >{category}</button>
                    <h2 className="card-title">{title}</h2>
                    <h2 className="flex" style= {{color:textAndButtonBg}}><BsCurrencyDollar className="mt-1"></BsCurrencyDollar>{price}</h2>                        
                    <div className="card-actions">
                        <button onClick={handleClick} style= {{backgroundColor:textAndButtonBg}} className="btn text-white">View Details</button>
                    </div>
                </div>
            </div>        
            
        </div>
    );
};

export default Donatedetail;