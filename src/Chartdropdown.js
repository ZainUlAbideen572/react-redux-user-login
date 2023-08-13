import React from 'react';
import Chart from 'react-apexcharts'
import { useState } from 'react';

function ChartDropdownTutorial() {
    const [empName, setEmpName] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    const [salaryList, setSalaryList] = useState([10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000 ]);
    // const[chart,setChart]=useState("")
    // const Chartoptions=["bar","line","pie"]
    const [options, setOption] = useState({
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,1999],
          backgroundColor:'red'
        },
        scales:{
          yaxes:[
            {
              scaleLabel:{
               labelString:'temperature'
              },
              ticks:{
                beginatZero:true
              }
            }
          ]
        }
        
      });
     const [series, setSeries] = useState([{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }])

      const [name, setName] = useState([]);
      const [salary, setSalary] = useState([]);
      // const[forms,setForms]=useState([])
      const submit = () => {
          console.log("submit", name, salary)
          setOption({
            chart: {
              id: 'apex-chart'
            },
            xaxis: {
              categories: name
            }
          })
          setSeries([{
            name: 'series-1',
            data: salary
          }])

      }
      // const handleChange=(e)=>{
        // setChart(e.target.value)
      // }
      return (
          <div style={{padding:"20px"}}>
              <div>
              <span><b>Employee Name: </b></span>
              <select onChange={(e) => setName([...name, e.target.value])}>
                  {
                      empName.map(item => {
                        return(
                            <option k>
                                {item}
                            </option>
                        )
                      })
                  }
                  
              </select>
              </div>
              <div>
              <span><b>Employee Salary: </b></span>
              <select onChange={(e) => setSalary([...salary, e.target.value])}>
                  {
                      salaryList.map(item => {
                        return(
                            <option>
                                {item}
                            </option>
                        )
                      })
                  }
                  
              </select>
              </div>
              {/* <div>
                <span><b>Types:</b></span>
                <select  value={Chart} onChange={handleChange}>
                   {
                      Chartoptions.map(item => {
                        return(
                            <option>
                                {item}
                            </option>
                        )
                      })
                  }
                </select>
              </div> */}
              <button onClick={submit}>Submit</button>
            <Chart options={options} series={series} type="line" width={500} height={320} />
        </div>
      )
    
  }


  export default ChartDropdownTutorial;