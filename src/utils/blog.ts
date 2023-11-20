import fs from 'node:fs/promises';
import path from 'node:path';
import type { BlogPost, BlogPostMetadata } from '~/types/types';

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1] || '';
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<BlogPostMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key?.trim() as keyof BlogPostMetadata] = value;
  });

  return { metadata: metadata as BlogPostMetadata, content };
}

async function getMDXFiles(dir: string) {
  try {
    return (await fs.readdir(dir)).filter((file) => path.extname(file) === '.mdx');
  } catch (error) {
    throw error;
  }
}

async function readMDXFiles(dir: string) {
  try {
    let rawContent = await fs.readFile(dir, 'utf-8');
    return parseFrontmatter(rawContent);
  } catch (error) {
    throw error;
  }
}

async function getMDXData(dir: string) {
  let mdxFiles = await getMDXFiles(dir);
  try {
    return await Promise.all(
      mdxFiles.map(async (mdxFile) => {
        let { metadata, content } = await readMDXFiles(path.join(dir, mdxFile));
        let slug = path.basename(mdxFile, path.extname(mdxFile));
        return {
          metadata,
          slug,
          content,
        } as BlogPost;
      })
    );
  } catch (error) {
    throw error;
  }
}

export async function getBlogPosts() {
  return await getMDXData(path.join(process.cwd(), 'content'));
}
