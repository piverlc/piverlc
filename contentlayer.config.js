import { defineDocumentType, makeSource } from 'contentlayer/source-files';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slugDir: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileDir,
  },
  slugAsPath: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsSegments: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Example = defineDocumentType(() => ({
  name: 'Example',
  filePathPattern: `example/**/*.mdx`,
  contentType: 'mdx',
  computedFields,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    author: {
      type: 'string',
      default: '@Piverlc',
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    author: {
      type: 'string',
      default: '@Piverlc',
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Example, Post],
});
