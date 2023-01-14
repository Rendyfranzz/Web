import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allProjects } from '../../../.contentlayer/generated'
import { Layout } from '@/components/Layout'
import TechIcons, { TechListType } from '@/components/icons/TechIcon'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as react from 'react'
import { useLoad } from '@/hook/useLoad'
import { useRouteLoad } from '@/hook/useRouteLoad'

export async function getStaticProps() {
  const posts = allProjects
  return { props: { posts } }
}


function PostCard(post: any) {
  return (
    <li className='project-card rounded-md md:w-full
        border dark:border-gray-600
        scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu
        transition duration-100
        motion-reduce:hover:scale-100
        animate-shadow'>
      <div className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
        <h4>{post.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {post.description}
        </p>
        <div className='mt-2'>
          <TechIcons techs={post.techStack.split(',') as Array<TechListType>} />
        </div>
        {post.thumbnail && <Image src={post.thumbnail} alt={post.title} width={1440}
          height={792} className='rounded-lg' />}
        <time dateTime={post.date} className="block text-sm text-slate-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <Link href={post.url}>
          <span className="animated-underline mt-2 inline-block font-medium">See more →</span>
        </Link>
      </div>

    </li>

  )
}

export default function Home({ posts }: any) {

  const isLoaded = useLoad()
  const routeLoad = useRouteLoad()


  
  return (
    <Layout>
      <section className={`layout ${ routeLoad && 'fade-in-start'}`}>

        <Head>
          <title>Projects</title>
        </Head>
        <h1 className="mt-8 text-3xl font-bold" data-fade='0'>Projects</h1>
        <h3 className="text-xl font-bold" data-fade='1'>Showcase of my works on frontend development.</h3>
        <ul className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-fade='2'>
          {posts.map((post: any, idx: any) => (
            <PostCard key={idx} {...post} />
          ))}
        </ul>

      </section>

    </Layout>

  )
}