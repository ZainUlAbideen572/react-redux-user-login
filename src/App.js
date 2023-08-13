import React from "react";
import Chartdropdown from "./Chartdropdown";
// import { Bar } from "react-chartjs-2";
// import { Chart } from "chart.js/auto";
// const labels=['jan','feb','mar','apr','May']
// const data={
//   labels,
//   datasets:[
//     {
//       label:'2021 expenses',
//       data:[1000,2100,3000,2000,500],
//       backgroundcolor:'pink'
//     },
//     {
      
//         label:'2021 expenses',
//         data:[2000,2000,1000,3000,1000],
//         backgroundcolor:'grey'
      
//     }
//   ]
// }
function App(){
  return <div>
    <Chartdropdown/>
    {/* <Bar data={data}/> */}
  </div>
}
export default App;