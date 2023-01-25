import { test, expect } from '@jest/globals'
import markdownToHtml from "./markdownToHtml"

test('simple test', async () => {
  expect('<h1>Hello</h1>').toBe(await markdownToHtml('# Hello'))
})
