import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const data = {
      labels: [
        'competetive',
        'web dev',
        'academic',
        'machine learning',
        'Cyber security',
        'others'
      ],
      datasets: [
        {
          label : "your queries",
          data: props.qt,
          fill: true,
          backgroundColor: 'rgb(0, 225, 225 , 0.4)',
          borderColor: 'rgb(0, 225, 225)',
          pointBackgroundColor: 'rgb(0, 225, 225)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(0, 255, 255)' , 
          font : 'white'
        }
      ]
    };
    const config = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        point: {
          radius: 0, // Set the point radius to 0 to hide points
        },
        plugins: {
         legend: {
             labels: {
                 // This more specific font property overrides the global property
                color : "rgb(225,225,225)"

             }
         }
     },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 30,
            bottom: 30
          }
        },
        scales: {
          r: {
            grid: {
               color: 'rgb(225,225,225)'
             },
            pointLabels: {
               color: 'rgb(225,225,225)'
             },
            ticks: {
              display: false, // Hide point labels
              beginAtZero: false, // Hide axis labels
              font: {
                color: 'white' // Set label color to white
              }
            },
            angleLines: {
              color: 'white' // Set the color of the lines connecting the radar chart points
            }
          }
        }
      }
    };
    
        
    const createRadarChart = () => {
      const ctx = chartRef.current?.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, config);
      }
    };

    createRadarChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '30vw', height: '38vh' }}>
      <canvas ref={chartRef} width={300} height={380}></canvas>
    </div>
  );
};

export default RadarChart;
