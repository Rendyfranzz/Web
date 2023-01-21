import { Blog, allBlogs } from '@/../.contentlayer/generated';
import { Layout } from '@/components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react'
import { format, parseISO } from 'date-fns'
import Image from 'next/image';
import { Comment } from '@/components/Comment';

const blog = ({ blog }: { blog: Blog }) => {
  const MDXContent = useMDXComponent(blog.body.code)
  
  return (
    <Layout>
    <section className='layout'>
      {blog.thumbnail && <Image src={blog.thumbnail} alt={blog.title} height={300} width={800} className='rounded-lg' />}
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{blog.title}</h1>
        <time dateTime={blog.date} className="text-sm text-slate-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className='space-y-3'>
        <MDXContent />
      </div>
      <Comment/>
    </section> 
  </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allBlogs.map((blog) => blog.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.url === `/blog/${params?.slug}`);
  return {
    props: {
      blog
    }
  }
}
export default blog
