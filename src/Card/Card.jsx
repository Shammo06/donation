import { useNavigate } from "react-router-dom";

const Card = ({donation}) => {
    const {id,picture,title, category, cardBg, textAndButtonBg, categoryBg} = donation

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/detail/${id}`)
    }
       
    return (
        <div>
            <div onClick={handleClick} className= "card card-compact w-92 shadow-xl" style={{backgroundColor:cardBg}}>
                <img  src={picture} alt="" />
                <div className="card-body">
                    <button className="w-24 text-lg text-center" style={{backgroundColor: categoryBg, color:textAndButtonBg}} >{category}</button>
                    <p className="font-semibold text-xl" style={{color:textAndButtonBg}}>{title}</p>
                </div>            
            </div>
        </div>
      
    );
};

export default Card;