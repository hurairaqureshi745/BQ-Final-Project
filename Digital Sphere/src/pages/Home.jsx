import {
  CTABannerSection,
  ContactPreviewSection,
  HeroSection,
  PortfolioSection,
  ServicesOverviewSection,
  TeamSection,
  TestimonialsSection,
  TrustedCompaniesSection,
  WhyChooseUsSection,
} from '../components/sections/home'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Home() {
  useDocumentTitle('Digital Sphere | Premium Digital Agency')

  return (
    <>
      <HeroSection />
      <TrustedCompaniesSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <CTABannerSection />
      <ContactPreviewSection />
    </>
  )
}
