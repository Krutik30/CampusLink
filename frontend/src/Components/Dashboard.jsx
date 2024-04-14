import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { PiCertificateBold } from "react-icons/pi";
import { GrAchievement } from "react-icons/gr";
import { FaAlignJustify, FaChartArea } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { BsList } from "react-icons/bs";
import Home from '../Page/HomePage/Home';


function Dashboard() {
    const [Menu, setMenu] = useState(false);
    const [pageTitle, setPageTitle] = useState('')

    const sideMenu = () => {
        setMenu(!Menu);

    }

    const handleClickOnIcon = (title) => {
        setPageTitle(title)
    }
    return (
        <section className='dashboard-container'>
            <div className='flex md:fixed'>
                <main className='hidden md:flex'>

                    <nav className='flex fixed flex-row w-16 top-14  h-screen bg-blue-900'>
                        < div className='' >
                            <div>
                                <BsList className=' mt-3 mx-2 text-2xl text-white cursor-pointer hover:text-emerald-400' onClick={sideMenu} />
                                <LuLayoutDashboard className=' mt-5 mx-2 text-2xl text-white cursor-pointer hover:text-emerald-400' onClick={() => handleClickOnIcon('DashBoard')} />
                                <PiCertificateBold className=' mt-5 mx-2 text-2xl text-white cursor-pointer hover:text-emerald-400' onClick={() => handleClickOnIcon('Certificate')} />
                                <GrAchievement className=' mt-5 mx-2 text-2xl text-white cursor-pointer hover:text-emerald-400' onClick={() => handleClickOnIcon('Achievement')} />
                                <FaChartArea className=' mt-5 mx-2 text-2xl text-white cursor-pointer hover:text-emerald-400' onClick={() => handleClickOnIcon('Analysis')} />
                                <IoMdDocument className=' mt-5 mx-2 text-2xl text-white cursor-pointer hover:text-emerald-400' onClick={() => handleClickOnIcon('Resume')} />
                            </div>
                        </div>
                    </nav>
                    <nav className={`cursor-pointer mx-14 top-14 flex  py-2  bg-blue-900 ${Menu ? 'animate-menu-slide flex fixed flex-row w-48 h-screen' : 'hidden'}`}>
                        <div className=' px-4 text-white text-lg text-semibold'>
                            <div className='py-2 block'>
                                <p className='hover:text-emerald-300 py-1' onClick={() => handleClickOnIcon('Profile')}><a href="/edit"></a>Profile</p>
                                <p className='hover:text-emerald-300 py-3' onClick={() => handleClickOnIcon('DashBoard')}>Dashboard</p>
                                <p className='hover:text-emerald-300 py-3' onClick={() => handleClickOnIcon('Certificate')}>Certificate</p>
                                <p className='hover:text-emerald-300 py-3' onClick={() => handleClickOnIcon('Achievements')}>Achievements</p>
                                <p className='hover:text-emerald-300 py-3' onClick={() => handleClickOnIcon('Analysis')}>Analysis</p>
                                <p className='hover:text-emerald-300 py-2' onClick={() => handleClickOnIcon('Resume')}>Resume</p>
                            </div>
                        </div>
                    </nav>
                    {/* For mobile view */}
                </main>
                <main className='md:hidden lg:hidden fixed bottom-0 w-full bg-blue-900'>
                    <div className='grid grid-cols-5 mx-14'>
                        <LuLayoutDashboard className='  m-3  mx-3 text-2xl text-white  cursor-pointer hover:text-emerald-400' onClick={() => handleClickOnIcon('')} />
                        <PiCertificateBold className='  m-3  mx-3 text-2xl text-white  cursor-pointer hover:text-emerald-400' />
                        <GrAchievement className='  m-3  mx-3 text-2xl text-white  cursor-pointer hover:text-emerald-400' />
                        <FaChartArea className='  m-3  mx-3 text-2xl text-white  cursor-pointer hover:text-emerald-400' />
                        <IoMdDocument className='  m-3  mx-3 text-2xl text-white  cursor-pointer hover:text-emerald-400' />
                    </div>
                </main>
                {/* Dynamic name  */}
                <section className={`py-4 mx-12 px-10 ${Menu ? ' mx-24 px-28 mr-0 ' : 'py-4 mx-12 px-10'}`} >
                    <div className=' px-5 mx-3 my-4'>
                        <h2 className=' font-semibold text-blue-900 font-sans'>{pageTitle}</h2>
                    </div>
                </section>
            </div>
            <Home menuOpen={Menu}/>
        </section>

    )
}

export default Dashboard