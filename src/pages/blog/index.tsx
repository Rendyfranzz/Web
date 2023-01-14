import { allBlogs } from '@/../.contentlayer/generated'
import { Layout } from '@/components/Layout'
import TechIcons, { TechListType } from '@/components/icons/TechIcon'
import Link from 'next/link'
import React from 'react'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Head from 'next/head'
import { useRouteLoad } from '@/hook/useRouteLoad'

function PostCard(blog: any) {
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
const index = ({ blog }: any) => {
  
  const routeLoad = useRouteLoad()
  return (
    <Layout>
      <section className={`layout ${routeLoad && 'fade-in-start'}`}>

        <Head>
          <title>Blog</title>
        </Head>
        <h1 className="mt-8 text-3xl font-bold" data-fade='0'>Projects</h1>
        <h3 className="text-xl font-bold" data-fade='1'>Showcase of my works on frontend development.</h3>
        <ul className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-fade='2'>
          {blog.map((post: any, idx: any) => (
            <PostCard key={idx} {...post} />
          ))}
        </ul>

      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const blog = allBlogs
  return { props: { blog } }
}

export default index