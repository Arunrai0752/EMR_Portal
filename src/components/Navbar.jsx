import React from 'react'
import { SiAsciidoctor } from "react-icons/si";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <main>
            <div className='flex px-8 py-4 justify-between items-center w-full h-[60px] bg-teal-50 border-b border-teal-100 text-[20px]'>


                <div >
                    <Link to="/" className='flex items-center gap-2' >
                        <SiAsciidoctor className='text-3xl text-teal-600' />
                        <span className='font-semibold text-teal-800'>Medical Record</span>
                    </Link>

                </div>


                <div>
                    <ul className='flex items-center gap-6'>


                        <div className='flex gap-4 items-center'>
                            <Link to="/login">
                                <li className='text-teal-700 hover:text-teal-500 transition-colors duration-300'>LogIn</li>
                            </Link>
                            <Link to="/register">
                                <li className='text-white bg-teal-600 hover:bg-teal-700 px-3 py-1 rounded-md transition-colors duration-300'>SignUp</li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Navbar