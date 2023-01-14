import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time';


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
	documentTypes: [Project,Blog],
	
});

export default contentLayerConfig