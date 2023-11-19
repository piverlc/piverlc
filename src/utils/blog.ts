import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';
import { BlogPost } from '~/types/types';

async function getMDXFiles(dir: string) {
  try {
    return (await fs.readdir(dir)).filter((file) => path.extname(file) === '.mdx');
  } catch (error) {
    console.error('Error at getMDXFiles', error);
    return ['lorem-ipsum.mdx'];
  }
}

async function readMDXFiles(dir: string) {
  try {
    let rawContent = await fs.readFile(dir, 'utf-8');
    return matter(rawContent);
  } catch (error) {
    console.error('Error at readMDXFiles', error);
    return matter('<h1>hello there,😀</h1>');
  }
}

async function getMDXData(dir: string) {
  let mdxFiles = await getMDXFiles(dir);
  try {
    return await Promise.all(
      mdxFiles.map(async (mdxFile) => {
        let { data, content } = await readMDXFiles(path.join(dir, mdxFile));
        let slug = path.basename(mdxFile, path.extname(mdxFile));
        return {
          metadata: {
            ...data,
          },
          slug,
          content,
        } as BlogPost;
      })
    );
  } catch (error) {
    console.error('Error at getMDXData', error);
    return [];
  }
}

export async function getBlogPosts() {
  return await getMDXData(path.join(process.cwd(), 'content'));
}
