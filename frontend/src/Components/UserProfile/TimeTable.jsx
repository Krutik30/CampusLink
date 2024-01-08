import React from 'react'
import './TimeTable.css'

function TimeTable() {
  return (
    <div className='timetable-container'>
      <table>
          <thead>
              <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>8:00 - 9:00</td>
                  <td>Math</td>
                  <td>Science</td>
                  <td>English</td>
                  <td>History</td>
                  <td>Geography</td>
              </tr>
              <tr>
                  <td>9:00 - 10:00</td>
                  <td>Physics</td>
                  <td>Math</td>
                  <td>Biology</td>
                  <td>Chemistry</td>
                  <td>Literature</td>
              </tr>
              <tr>
                  <td>10:00 - 11:00</td>
                  <td colSpan="5">Break</td>
              </tr>
              <tr>
                  <td>11:00 - 12:00</td>
                  <td>History</td>
                  <td>Geography</td>
                  <td>Math</td>
                  <td>Science</td>
                  <td>English</td>
              </tr>
              <tr>
                  <td>12:00 - 1:00</td>
                  <td>Chemistry</td>
                  <td>Literature</td>
                  <td>Physics</td>
                  <td>Biology</td>
                  <td>History</td>
              </tr>
              <tr>
                  <td>1:00 - 2:00</td>
                  <td colSpan="5">Lunch</td>
              </tr>
              <tr>
                  <td>2:00 - 3:00</td>
                  <td>Arts</td>
                  <td>PE</td>
                  <td>Music</td>
                  <td>Computer Sci.</td>
                  <td>Ethics</td>
              </tr>
              <tr>
                  <td>3:00 - 4:00</td>
                  <td>Science Lab</td>
                  <td>Sports Club</td>
                  <td>Art Class</td>
                  <td>Debate Club</td>
                  <td>Chess Club</td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default TimeTable