import React from 'react'
import './Home.css'
import SuspenseAndErrorBoundary from '../../SuspendError'
import ApexCharts from 'apexcharts'


const options = {
  series: [{
    name: 'Languege',
    data: ['C', 'TS', 'Go', 'Rust', 'Java Advance', 'JavaScript', 'Java', 'C#', 'C++',]
  }, {
    name: 'Percent',
    data: [76, 85, 10, 98, 87, 15, 91, 14, 94]
  }, {
    name: 'Percent',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: 'Percent'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " %"
      }
    }
  }
}

const optionsPie = {
  series: [76, 15, 10, 15, 91, 14, 94],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['C', 'TS', 'Go', 'Rust', 'Java', 'C#', 'C++',],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chartPie"), optionsPie);
chart.render();

var chart = new ApexCharts(document.querySelector("#chartNew"), options);
chart.render();



function Home() {
  return (
    <SuspenseAndErrorBoundary>
      <h1>Home</h1>
      <div className="home-page">
        <div className="chart">
          {/* <img src="https://online.hbs.edu/PublishingImages/Pie%20Chart%20Example.png" alt="Pie Chart" /> */}
          <div id='chartNew'></div>
          <div className="description">
            <h2>Pie Chart Example</h2>
            <p>Description for the pie chart goes here.</p>
          </div>
        </div>
        <div className="chart">
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmlY9UukZUiB8YA2YZW1NcQnsE-ZImSl_EL6sS8cHfdgVxU5zcjfkh2Z8_9K3UeUFp8Q&usqp=CAU" alt="Bar Chart" /> */}
          <div id='chartPie'></div>
          <div className="description">
            <h2>Bar Chart Example</h2>
            <p>Description for the bar chart goes here.</p>
          </div>
        </div>
      </div>
    </SuspenseAndErrorBoundary>
  )
}

export default Home
