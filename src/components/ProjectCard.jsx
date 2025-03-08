import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Card key={project.id} className='w-full shadow-none'>
      <div className='aspect-video rounded-t-xl overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='object-cover w-full h-full'
        />
      </div>
      <Link to={`project/${project.id}`}>
        <CardHeader className='p-4'>
          <CardTitle className='text-xl'>{project.title}</CardTitle>
          <CardDescription className='line-clamp-2'>
            {project.description}
          </CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className='flex gap-x-2 p-4 pt-0'>
        <Link to={`${project.author.username}`}>
          <Avatar className='h-8 w-8'>
            <AvatarImage
              src={project.author.avatar}
              alt={project.author.name}
            />
            <AvatarFallback>{project.author.name[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <Link
            to={`${project.author.username}`}
            className='font-medium leading-none tracking-tight text-sm'
          >
            {project.author.name}
          </Link>
          <p className='text-xs text-muted-foreground'>{project.author.role}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
