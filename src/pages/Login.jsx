import React, { useState } from 'react';
import { FaUserMd, FaUserInjured, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [isDoctor, setIsDoctor] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        console.log('Logging in as:', isDoctor ? 'Doctor' : 'Patient', formData);
    };

    return (
        <main className='min-h-[92vh] w-full bg-teal-50 flex justify-center items-center p-4'>
            <div className='w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden'>
                
                <div className='flex border-b border-teal-100'>
                    <button 
                        className={`flex-1 py-4 flex items-center justify-center gap-2 transition-colors ${isDoctor ? 'bg-teal-600 text-white' : 'bg-white text-teal-800'}`}
                        onClick={() => setIsDoctor(true)}
                    >
                        <FaUserMd className="text-lg" />
                        <span className='font-medium'>Doctor</span>
                    </button>
                    
                    <button 
                        className={`flex-1 py-4 flex items-center justify-center gap-2 transition-colors ${!isDoctor ? 'bg-teal-600 text-white' : 'bg-white text-teal-800'}`}
                        onClick={() => setIsDoctor(false)}
                    >
                        <FaUserInjured className="text-lg" />
                        <span className='font-medium'>Patient</span>
                    </button>
                </div>

                <div>
                      



                      
                </div>

                
              
            </div>
        </main>
    );
};

export default Login;