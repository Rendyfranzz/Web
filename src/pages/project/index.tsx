import Head from 'next/head'
import { allProjects } from '../../../.contentlayer/generated'
import { Layout } from '@/components/Layout'
import { useLoad } from '@/hook/useLoad'
import { ProjectCard } from '@/components/content/project/ProjectCard'
import { UseRouteLoad } from '@/hook/useRouteLoad'

export async function getStaticProps() {
  const posts = allProjects
  return { props: { posts } }
}

export default function Home({ posts }: any) {

  const isLoaded = useLoad()
  const routeLoad = UseRouteLoad()


  
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
            <ProjectCard key={idx} {...post} />
          ))}
        </ul>

      </section>

    </Layout>

  )
}