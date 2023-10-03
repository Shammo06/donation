import { useLoaderData, useParams } from "react-router-dom";
import './Detail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Title/utlity/localstorage";
import { BsCurrencyDollar } from "react-icons/bs";

const Detail = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const intId = parseInt(id);
    const category = data.find(data => data.id === intId);

    const notify = () =>{
        saveDonation(intId);
        toast.success("Thank you for donation", {
            position: toast.POSITION.TOP_CENTER
          });
    }    

    return (
        <div className="pt-5">
            <div className="image-container relative">
                <img className="w-3/4" src={category.picture} alt="" />
                <div className="w-3/4 h-16 lg:h-1/6 hero-overlay opacity-100 absolute bottom-0">
                    <button onClick={notify} className="btn text-white w-29 absolute bottom-2 lg:bottom-8 left-10 " style={{backgroundColor:category.textAndButtonBg}}>Donate<BsCurrencyDollar></BsCurrencyDollar>{category.price}</button>
                </div>
            </div>
            <div className="lg:px-48 md:px-24 py-5 px-6">
                <h1 className='py-5 text-4xl font-bold'>{category.title}</h1>
                <p>{category.description}</p>                
            </div>
            <ToastContainer/>
        </div>

    );
};

export default Detail;