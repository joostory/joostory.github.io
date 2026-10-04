import Layout from '@/components/layout/layout'
import MetaIndex from '@/components/layout/meta-index'
import HeroSection from '@/components/hub/hero-section'
import ChannelsSection from '@/components/hub/channels-section'
import CareerSection from '@/components/hub/career-section'
import ProjectsSection from '@/components/hub/projects-section'
import TechStackSection from '@/components/hub/tech-stack-section'

export default function Index() {
  return (
    <Layout>
      <MetaIndex />
      <HeroSection />
      <ChannelsSection />
      <CareerSection />
      <ProjectsSection />
      <TechStackSection />
    </Layout>
  )
}
