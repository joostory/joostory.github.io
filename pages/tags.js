import ContentBody from "@/components/layout/content-body";
import ContentHeader from "@/components/layout/content-header";
import Layout from "@/components/layout/layout";
import MetaIndex from "@/components/layout/meta-index";
import { getAllTags } from "@/lib/api";
import Link from "next/link";

export async function getStaticProps() {
  const tags = await getAllTags()
  return {
    props: { tags }
  }
}

export default function Tags({ tags }) {
  return (
    <>
      <Layout>
        <MetaIndex />
        <ContentHeader>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">Tags</h1>
          </div>
        </ContentHeader>

        <div className='divider' />
        
        <ContentBody>
          <div className="mt-20 mb-20 space-x-2 flex justify-center">
            {tags && tags.map(t =>
              <div key={t.tag} className={'float-left'}>
                <Link as={`/tags/${t.tag}`} href="/tags/[tag]" className="group">
                  <b className="text-lg group-hover:text-yellow-500">{t.tag}</b>
                  <span>({t.count})</span>
                </Link>
              </div>
            )}
          </div>
        </ContentBody>
      </Layout>
    </>
  )
}
