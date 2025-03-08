import Navbar from '@/components/navbar';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <Navbar />

      <section className='flex justify-center items-center min-h-screen'>
        <h1 className='text-2xl font-bold tracking-tighter'>Pameraja.</h1>
      </section>
    </>
  );
};

export default Homepage;
