import { test, expect } from '@jest/globals'
import { getAllPosts, getAllTags, getPostSlugs, getPostBySlug } from '@/lib/api'


test('get all posts', () => {
  const slugs = getPostSlugs()
  const posts = getAllPosts()
  expect(posts.length).toBe(slugs.length)
})

test('get all tags', () => {
  const tags = getAllTags()
  console.log(tags)
})
