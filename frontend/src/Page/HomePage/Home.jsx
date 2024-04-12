import React, { useEffect, useRef } from 'react';
import './Home.css';
import SuspenseAndErrorBoundary from '../../SuspendError';
import ApexCharts from 'apexcharts';

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

const Home = () => {
  const chartPieRef = useRef(null);
  const chartNewRef = useRef(null);

  useEffect(() => {
    const chart1 = new ApexCharts(chartPieRef.current, optionsPie);
    chart1.render();

    const chart2 = new ApexCharts(chartNewRef.current, options);
    chart2.render();

    return () => {
      chart1.destroy();
      chart2.destroy();
    };
  }, []);

  return (
      <SuspenseAndErrorBoundary>
        {/* <h1>Home</h1>
        <div className="home-page">
          <div className="chart">
            <div ref={chartPieRef}></div>
            <div className="description">
              <h2>Pie Chart Example</h2>
              <p>Description for the pie chart goes here.</p>
            </div>
          </div>
          <div className="chart">
            <div ref={chartNewRef}></div>
            <div className="description">
              <h2>Bar Chart Example</h2>
              <p>Description for the bar chart goes here.</p>
            </div>
          </div>
        </div> */}
      </SuspenseAndErrorBoundary>
  );
};

export default Home;
