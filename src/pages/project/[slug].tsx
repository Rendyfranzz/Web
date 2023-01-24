import { GetStaticPaths, GetStaticProps } from 'next'
import { Project, allProjects } from '@/../.contentlayer/generated'
import * as React from 'react'
import TechIcons, { TechListType } from '@/components/icons/TechIcon';
import { Layout } from '@/components/Layout';
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from 'date-fns'
import Image from 'next/image';
import { Comment } from '@/components/Comment';

const Project = ({ project }: { project: Project }) => {
  const MDXContent = useMDXComponent(project.body.code)
  return (
    <Layout>
      <section className='layout'>
        <TechIcons techs={project.techStack.split(',') as Array<TechListType>} />
        {project.thumbnail && <Image src={project.thumbnail} alt={project.title} height={300} width={800} className='rounded-lg' />}
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{project.title}</h1>
          <time dateTime={project.date} className="text-sm text-slate-600">
            {format(parseISO(project.date), 'LLLL d, yyyy')}
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
  const paths = allProjects.map((project) => project.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find((project) => project.url === `/project/${params?.slug}`);
  return {
    props: {
      project
    }
  }
}

export default Project