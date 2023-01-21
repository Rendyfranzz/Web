import TechIcons, { TechListType } from '@/components/icons/TechIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { format, parseISO } from 'date-fns'
import { Project } from '@/../.contentlayer/generated'


export const ProjectCard = (project: Project) => {
  return (
    <li className='project-card rounded-md md:w-full
        border dark:border-gray-600
        scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu
        transition duration-100
        motion-reduce:hover:scale-100
        animate-shadow'>
      <div className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
        <h4>{project.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {project.description}
        </p>
        <div className='mt-2'>
          <TechIcons techs={project.techStack.split(',') as Array<TechListType>} />
        </div>
        {project.thumbnail && <Image src={project.thumbnail} alt={project.title} width={1440}
          height={792} className='rounded-lg' />}
        <time dateTime={project.date} className="block text-sm text-slate-600">
          {format(parseISO(project.date), 'LLLL d, yyyy')}
        </time>
        <Link href={project.url}>
          <span className="animated-underline mt-2 inline-block font-medium">See more →</span>
        </Link>
      </div>

    </li>

  )
}

