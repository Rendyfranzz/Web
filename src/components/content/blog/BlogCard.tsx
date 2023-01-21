import React from 'react'
import { Blog } from '@/../.contentlayer/generated'
import TechIcons, { TechListType } from '@/components/icons/TechIcon'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export const BlogCard = (blog: Blog) => {
  return (
    <li className='project-card rounded-md md:w-full
        border dark:border-gray-600
        scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu
        transition duration-100
        motion-reduce:hover:scale-100
        animate-shadow'>
      <div className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
        <h4>{blog.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {blog.description}
        </p>
        <div className='mt-2'>
          <TechIcons techs={blog.techStack.split(',') as Array<TechListType>} />
        </div>
        {blog.thumbnail && <Image src={blog.thumbnail} alt={blog.title} width={1440}
          height={792} className='rounded-lg' />}
        <div className='flex justify-between w-full'>
          <time dateTime={blog.date} className="block text-sm text-slate-600">
            {format(parseISO(blog.date), 'LLLL d, yyyy')}
          </time>
          <span className="block text-sm text-slate-600">{blog.readingTime.text}</span>
        </div>
        <Link href={blog.url}>
          <span className="animated-underline mt-2 inline-block font-medium">See more →</span>
        </Link>
      </div>

    </li>
  )
}
