import './Navbar.css'
import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setuserMenuOpen] = useState(false);
    const [Option, setOption] = useState('');
    const [navbarFixed, setnavbarFixed] = useState(false);


    const UserToggle = () => {
        setuserMenuOpen(!userMenuOpen)

        setMenuOpen(false)
    }

    const toggle = () => {
        setMenuOpen(!MenuOpen)
        setuserMenuOpen(false)

    }

    const handleOnOption = (Option) => {
        setOption(Option)
        setMenuOpen(false)
    }
    return (

            <div>
            <div>
                <nav className={`font-bold fixed top-0 w-full   text-base  bg-blue-900 p-2 ${navbarFixed ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
                    <div className='flex justify-between'>
                        <div className='flex mx-2 my-2 text-white font-extrabold text-lg'>
                            CampusLink

                        </div>
                        <div className=' cursor-pointer flex justify-end py-2' onClick={UserToggle}>
                            <FaUserAlt className='text-2xl text-blue-100 mr-3' />
                        </div>
                    </div>
                </nav>
            </div>
                {/* for user profile */}
                <nav className={`cursor-pointer flex fixed py-2 bg-blue-900 ${userMenuOpen ? ' flex flex-col top-16 w-52 right-0 z-10' : 'hidden'}`}>
                    <div className='text-left px-1.5 text-white text-lg text-semibold'>
                        <p className='hover:text-emerald-300'>Profile</p>
                        <p className='hover:text-emerald-300'>LogOut</p>
                        <p className='hover:text-emerald-300'>Login</p>
                    </div>
                </nav>


        </div>
    )
}

export default Navbar

export const SvgContainer = (svgArray) =>{
    return (
        <>
            {
                svgArray.map((svg, index )=> (
                    <div key={index}>
                        {svg}_____
                    </div>
                ))
            }
        </>
    )
}