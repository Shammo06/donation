import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/card";

const Search = () => {
    
    const {inputvalue} = useParams();
    const data = useLoaderData();
    
    const targetCategory = data.filter(data => data.category === inputvalue);
    
    
       
    return (
        <div className= "grid md:grid-cols-2 lg:grid-cols-3 py-16 px-10 gap-5">
            {
                targetCategory.map(targetCategory => <Card key={targetCategory.id} donation={targetCategory} ></Card>)
            }
            
        </div>
           
        
      
    );
};

export default Search;