import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useFetch from '../helper/useFetch'
import {  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const History = () => {

  const {state: { label }} = useLocation()
  const [chartData, setChartData] = useState({})
  const { data, loading, error } = useFetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
  const [loadChart, setLoadChart] = useState(false)

  useEffect(() => {
    if (data && label) {
      // console.log(data[label]);
      // console.log(Object.keys(data[label]))
      // console.log(Object.values(data[label]))
      setChartData({
        labels: Object.keys(data[label]),
        datasets: [{
          label: label,
          data: Object.values(data[label]),
          borderColor: '#81a795',
          backgroundColor: '#81a795',
          color: '#81a795'    
        }] 
      })
      setLoadChart(true)
    }
  }, [data])

  


  // if (data && label) {
  //   console.log(data[label]);
  //   console.log(Object.keys(data[label]));
  //   console.log(Object.values(data[label]));
  //   setChartData({
  //     labels: Object.keys(data[label]),
  //     datasets: {
  //       label: label,
  //       data: Object.values(data[label])
  //     } 
  //   })
  // }


  // const [foo, setFoo] = useState({
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [{
  //     label: 'label',
  //     data: [12, 23, 33, 10, 6, 44, 2]
  //   }] 
  // })
  

  return (
    <>
      {loadChart ? <Line data={chartData} /> : <h1>loading...</h1>}
      {/* {data && label && chartData ? <Line data={chartData} /> : <h1>loadin</h1>} */}
      {/* <Bar data={foo} />  */}
    </>
  )
}

export default History