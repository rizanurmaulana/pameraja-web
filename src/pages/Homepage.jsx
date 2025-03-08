import Navbar from '@/components/navbar';
import ProjectCard from '@/components/ProjectCard';

import React from 'react';

const projects = [
  {
    id: 1,
    image: '/images/project-1.png',
    title: 'Sales Dashboard',
    description:
      'Dashboard interaktif untuk memantau performa penjualan secara real-time.',
    author: {
      name: 'John Doe',
      username: 'johndoe',
      role: 'Frontend Developer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 2,
    image: '/images/project-1.png',
    title: 'E-Commerce Platform',
    description:
      'Sistem e-commerce lengkap dengan fitur pembayaran dan manajemen produk.',
    author: {
      name: 'Jane Smith',
      username: 'janesmith',
      role: 'UI/UX Designer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 3,
    image: '/images/project-1.png',
    title: 'HR Management System',
    description:
      'Aplikasi untuk mengelola data karyawan, absensi, dan payroll secara otomatis.',
    author: {
      name: 'Michael Brown',
      username: 'michaelb',
      role: 'Backend Developer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 4,
    image: '/images/project-1.png',
    title: 'Social Media Analytics',
    description:
      'Tools untuk menganalisis performa akun media sosial dengan AI.',
    author: {
      name: 'Sarah Lee',
      username: 'sarahlee',
      role: 'Data Analyst',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 5,
    image: '/images/project-1.png',
    title: 'Crypto Portfolio Tracker',
    description:
      'Aplikasi untuk melacak portofolio aset kripto secara real-time.',
    author: {
      name: 'David Kim',
      username: 'davidkim',
      role: 'Fullstack Developer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 6,
    image: '/images/project-1.png',
    title: 'Personal Finance App',
    description:
      'Aplikasi untuk mengatur keuangan pribadi dengan fitur budgeting otomatis.',
    author: {
      name: 'Emma Watson',
      username: 'emmawatson',
      role: 'Mobile Developer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 7,
    image: '/images/project-1.png',
    title: 'Online Learning Platform',
    description:
      'Platform pembelajaran online dengan fitur video course dan quiz.',
    author: {
      name: 'Chris Evans',
      username: 'chrisevans',
      role: 'Product Designer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 8,
    image: '/images/project-1.png',
    title: 'AI-Powered Chatbot',
    description:
      'Chatbot berbasis AI yang bisa menangani customer support otomatis.',
    author: {
      name: 'Sophia Miller',
      username: 'sophiam',
      role: 'AI Engineer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 9,
    image: '/images/project-1.png',
    title: 'Freelance Job Marketplace',
    description:
      'Platform untuk mempertemukan freelancer dengan klien potensial.',
    author: {
      name: 'William Johnson',
      username: 'willjohnson',
      role: 'Backend Developer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 10,
    image: '/images/project-1.png',
    title: 'Smart Home Automation',
    description: 'Sistem IoT untuk mengontrol rumah pintar dari satu aplikasi.',
    author: {
      name: 'Olivia Taylor',
      username: 'oliviat',
      role: 'Embedded System Engineer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 11,
    image: '/images/project-1.png',
    title: 'Fitness Tracker App',
    description:
      'Aplikasi untuk melacak aktivitas olahraga dan nutrisi harian.',
    author: {
      name: 'Daniel White',
      username: 'danielwhite',
      role: 'Mobile Developer',
      avatar: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 12,
    image: '/images/project-1.png',
    title: 'Task Management Tool',
    description:
      'Aplikasi manajemen tugas berbasis kanban board untuk tim remote.',
    author: {
      name: 'Lisa Brown',
      username: 'lisabrown',
      role: 'Product Manager',
      avatar: 'https://github.com/shadcn.png',
    },
  },
];

const Homepage = () => {
  return (
    <>
      <Navbar />

      <section className='max-w-7xl mx-auto pt-10 sm:pt-0 px-4 xl:px-0 mb-10'>
        <div className='flex justify-center items-center min-h-64'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4'>
              Show Off Your Project, Bro!
            </h1>
            <p className='text-muted-foreground'>
              Punya proyek keren? Jangan cuma disimpen di laptop!{' '}
              <br className='hidden md:block' /> Upload di Pameraja, biar makin
              banyak yang lihat, apresiasi, dan kasih feedback.{' '}
              <br className='hidden md:block' /> No project left unseen, let's
              flex your creativity!
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 xl:px-0 mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;
