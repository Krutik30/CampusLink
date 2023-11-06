import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <div className="home-page">
        <div className="chart">
          <img src="https://online.hbs.edu/PublishingImages/Pie%20Chart%20Example.png" alt="Pie Chart" />
          <div className="description">
            <h2>Pie Chart Example</h2>
            <p>Description for the pie chart goes here.</p>
          </div>
        </div>
        <div className="chart">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmlY9UukZUiB8YA2YZW1NcQnsE-ZImSl_EL6sS8cHfdgVxU5zcjfkh2Z8_9K3UeUFp8Q&usqp=CAU" alt="Bar Chart" />
          <div className="description">
            <h2>Bar Chart Example</h2>
            <p>Description for the bar chart goes here.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
