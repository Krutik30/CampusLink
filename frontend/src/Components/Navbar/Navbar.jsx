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
        <>
            <div className=''>
            <div>
                <nav className={`font-bold text-base  bg-blue-900 p-2 ${navbarFixed ? 'fixed top-16 left-0 w-full z-50' : ''}`}>
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
                <nav className={`cursor-pointer flex fixed py-2 bg-blue-900 ${userMenuOpen ? ' flex flex-col w-52 right-0 z-10' : 'hidden'}`}>
                    <div className='text-left px-1.5 text-white text-lg text-semibold'>
                        <p className='hover:text-emerald-300'>Profile</p>
                        <p className='hover:text-emerald-300'>LogOut</p>
                        <p className='hover:text-emerald-300'>Login</p>
                    </div>
                </nav>


        </div>
            {/* <div className='s2'>
                {
                    SvgContainer(
                        [
                            <a href='/home'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                </svg>
                            </a>,
                            <a href='/upload'>
                                <svg xmlns="http:A//www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                </svg>
                            </a>,
                            <a href='/home'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </a>,
                            <a href='/certificates'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </a>,
                            <a href='/edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </a>
                        ]
                    )
                }
            </div> */}
        </>
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