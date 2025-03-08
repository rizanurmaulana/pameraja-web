import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ToggleTheme from '@/components/theme-toggle';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth/login');
  };
  return (
    <>
      <section className='border-b sticky top-0 z-50 bg-background w-full'>
        <div className='max-w-7xl mx-auto flex justify-between items-center h-16 px-4 xl:px-0'>
          <Link
            to='/'
            className='text-xl font-bold tracking-tighter flex items-center gap-x-2'
          >
            <img src='/pameraja-icon.png' alt='Logo icon' className='h-6' />
            Pameraja.
          </Link>
          <div className='flex gap-x-2'>
            <Button variants='default' onClick={handleLogin}>
              Login
            </Button>
            <ToggleTheme />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
