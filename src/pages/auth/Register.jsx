import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Navbar />

      <section className='flex justify-center items-center h-[calc(100vh-4rem)]'>
        <Card className='w-[350px] shadow-none'>
          <CardHeader className='items-center'>
            <CardTitle className='text-2xl'>Register</CardTitle>
            <CardDescription>
              Create your account and get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='fullname'>Fullname</Label>
                  <Input
                    id='fullname'
                    type='text'
                    name='fullname'
                    placeholder='John Doe'
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='johndoe@mail.com'
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='********'
                  />
                </div>
                <Button type='submit'>Register</Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className='justify-center'>
            <CardDescription>
              Already have an account?{' '}
              <Link
                className='text-foreground font-medium hover:underline underline-offset-4'
                to='/auth/login'
              >
                Login
              </Link>
            </CardDescription>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Register;
