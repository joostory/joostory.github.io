import xml2js from 'xml2js'
import { parse } from 'node-html-parser'

export async function getTistoryPostIds() {
  const res = await fetch("https://blog.joostory.net/sitemap.xml")
  const text = await res.text()
  const parser = new xml2js.Parser()
  const data = await parser.parseStringPromise(text)

  const urlPattern = /https:\/\/blog.joostory.net\/(\d+)/

  return data?.urlset?.url
    .filter(item => !!item.lastmod)
    .filter(item => item?.loc[0].match(urlPattern))
    .map(item => item?.loc[0].match(urlPattern)[1])
}

export async function getTistoryPost(id) {
  const res = await fetch("https://blog.joostory.net/" + id)
  if (!res.ok) {
    return {}
  }

  const text = await res.text()
  const root = parse(text)
  const content = root.querySelector(".area_view .contents_style")
  content.querySelector(".revenue_unit_wrap").remove()
  content.querySelector(".container_postbtn").remove()
  const title = root.querySelector('.tit_post a')
  const date = root.querySelector('.info_date')
  const image = root.querySelector("meta[property='og:image']")?.getAttribute("content")

  return {
    id: id,
    date: date.innerText,
    title: title.innerText,
    content: content.innerHTML,
    summary: content.innerText.substring(0, 255),
    image: image
  }
}