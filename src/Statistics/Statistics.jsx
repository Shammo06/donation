import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getDonateCategory } from "../Title/utlity/localstorage";

const Statistics = () => {
    
    const detail= useLoaderData();
    const para = getDonateCategory();
    const parameter2Value = para.length
    const parameter1Value = detail.length
    
    const data = [
        ["Donation", "amount"],
        ["Total dotation", parameter1Value],
        ["Your Donation", parameter2Value]
        
    ];
    const options = {
      pieStartAngle: 100,
      legend: {
        position: "bottom"
      }      
    };    

    return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      
    />
    )
};

export default Statistics;
