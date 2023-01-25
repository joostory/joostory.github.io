import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'data', 'posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export interface PostAuthor {
  name: string
  picture: string
}

export interface OgImage {
  url: string
}

export class Post {
  title: string = ""
  excerpt: string = ""
  date: string = ""
  tags: string[] = []
  author?: PostAuthor
  slug: string = ""
  content: string = ""
  ogImage?: OgImage
  coverImage?: string = ""
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post: Post = {
    slug: realSlug,
    title: data['title'],
    excerpt: data['excerpt'],
    content: content,
    tags: data['tags'] || [],
    date: data['date'],
    author: data['author'] || null,
    ogImage: data['ogImage'] || null,
    coverImage: data['coverImage'] || null
  }
  return post
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export interface Tag {
  tag: string
  count: number
}

export function getAllTags() {
  let init: {[key: string]: Tag} = {}
  return Object.values(getPostSlugs()
    .map(slug => getPostBySlug(slug).tags)
    .flat()
    .reduce((result, tag) => {
      result[tag] = result[tag] || { tag: tag, count: 0 }
      result[tag].count++
      return result
    }, init))
}
