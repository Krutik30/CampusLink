import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import UserSidebar from '../../Components/UserProfile/UserSidebar'
import AccountSetting from '../../Components/UserProfile/AccountSetting'
import './UserProfile.css'
import ChangePassword from '../../Components/UserProfile/ChangePassword'
import TimeTable from '../../Components/UserProfile/TimeTable'

function UserProfile() {
    const {activepage} = useParams()
    //alert(activepage) - > it will show alert if active page is working or not


  return (

    <div className='userprofile'>
     <Navbar/>    
    {/* UserProfile,{activepage} */}
    <div className="userprofilein">
        <div className="left">
            <UserSidebar activepage={activepage}/>
        </div>
        <div className="right">
            {activepage === 'accountsettings' && <AccountSetting/>}
            {activepage === 'changepassword' && <ChangePassword/>}
            {activepage === 'yourtimetable' && <TimeTable/>}
        </div>
    </div>
    </div>
  )
}

export default UserProfile