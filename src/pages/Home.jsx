import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className='flex justify-center items-center gap-10 h-[75vh] w-full p-4'>
      <div 
        className='relative h-[60vh] w-[45vw] bg-blue-800/40 rounded-lg flex flex-col overflow-hidden' 
        onClick={() => navigate("/login", { state: { isDoctorDefault: true } })}
      >
        <h1 className='text-4xl p-4 font-medium text-white'>Login As A Doctor</h1>
        <div className='flex-1 flex items-end'>
          <img
            src="Doctor.png"
            alt="Doctor"
            className='w-full h-auto object-cover'
          />
        </div>
      </div>
      
      <div 
        className='relative h-[60vh] w-[45vw] bg-blue-800/40 rounded-lg flex flex-col overflow-hidden'  
        onClick={() => navigate("/login", { state: { isDoctorDefault: false } })}
      >
        <h1 className='text-4xl p-4 font-medium text-white'>Login As A Patient</h1>
        <div className='flex-1 flex items-end'>
          <img
            src="Patient.png"  
            alt="Patient"
            className='w-full h-auto object-cover'
          />
        </div>
      </div>
    </main>
  );
};

export default Home;