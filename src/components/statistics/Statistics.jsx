import React, { useEffect, useMemo, useRef } from 'react'
import './statistics.css'
import { FaHouseUser } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import Chart from 'chart.js/auto';

const Statistics = () => {
  const totalUsers=sessionStorage.getItem('userLength');
  const totalHouse=sessionStorage.getItem('houseLength');
  const bookings=sessionStorage.getItem('bookings');
  const data = useMemo(() => [totalHouse, totalUsers, bookings], [totalHouse, totalUsers, bookings]);

 
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const lineChartContainer = useRef(null);
  const lineChartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer.current && data && data.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartContainer.current, {
        type: 'bar',
        data: {
          labels: ['Houses', 'Users', 'Bookings'],
          datasets: [
            {
              label: 'Count',
              data: data,
              backgroundColor: [
                'rgba(140, 199, 255, 1)',
                'rgba(248, 183, 123, 1)',
                'rgba(255, 146, 255,1)',
              ],
              borderColor: [
                'rgba(176, 217, 255, 0.5)',
                'rgba(250, 216, 154, 0.5)',
                'rgba(250, 201, 250,0.5)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartContainer, data]);
  useEffect(() => {
    if (lineChartContainer.current && data && data.length > 0) {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }
  
      lineChartInstance.current = new Chart(lineChartContainer.current, {
        type: 'pie',
        data: {
          labels: ['Houses', 'Users', 'Bookings'],
          datasets: [
            {
              label: 'Count',
              data: data,
              backgroundColor: [
                'rgba(140, 199, 255, 1)',
                'rgba(248, 183, 123, 1)',
                'rgba(255, 146, 255,1)',
              ],
              borderColor: [
                'rgba(176, 217, 255, 0.8)',
                'rgba(248, 183, 123, 0.8)',
                'rgba(255, 146, 255,0.8)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }
  }, [lineChartContainer, data]);

  return (
    <div className='static__homepage'>
        <div className="static__number">
            <h2 className='static__header'>DashBoard</h2>
            <div className="static__graphs">
               <div className='static__graph graph__1'>
                <div className="graph__icon">
                <FaHouseUser className='graph__icons'/>
                <p className='graph__p'>Houses</p>
                </div>
                <h2 className='graph__header'>{totalHouse?totalHouse:0}</h2>
                </div>
                <div className='static__graph graph__2'>
                <div className="graph__icon">
                <FaUserCheck className='graph__icons'/>
                <p className='graph__p'>Users</p>
                </div>
                    <h2 className='graph__header'>{totalUsers?totalUsers:0}</h2>

                </div>
                <div className='static__graph graph__3'>
                <div className="graph__icon">
                <IoIosBook className='graph__icons'/>
                <p className='graph__p'>Bookings</p>
                
                </div>
                    <h2 className='graph__header'>{bookings?bookings:0}</h2>

                </div>

            </div>
            
        </div>
        <h2 className='static__header'>Charts</h2>
        <div className="static__home">
            <div className="chart-container">
            <canvas ref={chartContainer} width="400" height="400" />
         </div>
         <div className="chart-container">
         <canvas ref={lineChartContainer} width="400" height="400" />
         </div>
         
        </div>
        
      
    </div>
  )
}

export default Statistics
