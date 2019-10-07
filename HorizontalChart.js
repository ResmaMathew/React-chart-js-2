

import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';

const data = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
  datasets: [
    {
      label: 'Klikk',
      backgroundColor: 'rgba(194, 194, 194, 1)',
      borderColor: 'rgba(29, 149, 137, 1)',
      borderWidth: 1, 
      hoverBackgroundColor: 'rgba(29, 149, 137, 1)',
      hoverBorderColor: 'rgba(194, 194, 194, 1)',
      data: [2429, 10647, 13124, 16685, 160528, 120584, 8500]
    }
  ]
};
const Horizontalchart =()=>{



    return (
      <div>
     
        <HorizontalBar data={data} />
     
      </div>
    );
 }

 export default Horizontalchart;
    
