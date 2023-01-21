import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import GithubSlugger from "github-slugger"
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"


const Blog = defineDocumentType(() => ({
	name: "Blog",
	filePathPattern: `blog/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		thumbnail: {
			type: "string",
		},
		date: {
			type: "date",
			required: true,
		},
		techStack: {
			type: "string",
			required: true,
		},
	},
	computedFields: {
		headings: {
			type: "json",
			resolve: async (doc) => {
			  // use same package as rehypeSlug so toc and sluggified headings match
			  // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
			  const slugger = new GithubSlugger()
	  
			  // https://stackoverflow.com/a/70802303
			//   const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g
			  const regXHeader = /\n\n(?<flag>#{2,6})\s+(?<content>.+)/g;
	  
			  const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
				({ groups }) => {
				  const flag = groups?.flag
				  const content = groups?.content
				  return {
					heading: flag?.length,
					text: content,
					slug: content ? slugger.slug(content) : undefined,
				  }
				},
			  )
	  
			  return headings
			},
		  },
		readingTime :{
			type:"json",
			resolve: (doc) => readingTime(doc.body.raw)
		},
		url: {
			type: "string",
			resolve: (doc) => `/${doc._raw.flattenedPath}`,
		},
	},
}));

const Project = defineDocumentType(() => ({
	name: "Project",
	filePathPattern: `project/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		thumbnail: {
			type: "string",
		},
		date: {
			type: "date",
			required: true,
		},
		techStack: {
			type: "string",
			required: true,
		},
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (project) => `/${project._raw.flattenedPath}`,
		},
	},
}));

const contentLayerConfig = makeSource({
	contentDirPath: "src/contents",
	documentTypes: [Project,Blog]
	
});

export default contentLayerConfig