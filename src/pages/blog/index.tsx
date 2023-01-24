import Head from 'next/head'
import { allBlogs } from '@/../.contentlayer/generated'
import { Layout } from '@/components/Layout'
import { BlogCard } from '@/components/content/blog/BlogCard'
import { UseRouteLoad } from '@/hook/useRouteLoad'

const index = ({ blog }: any) => {
  
  const routeLoad = UseRouteLoad()
  return (
    <Layout>
      <section className={`layout ${routeLoad && 'fade-in-start'}`}>
        <Head>
          <title>Blog</title>
        </Head>
        <h1 className="mt-8 text-3xl font-bold" data-fade='0'>Blog</h1>
        <h3 className="text-xl font-bold" data-fade='1'>Showcase of my works on frontend development.</h3>
        <ul className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-fade='2'>
          {blog.map((blog: any, idx: any) => (
            <BlogCard key={idx} {...blog} />
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