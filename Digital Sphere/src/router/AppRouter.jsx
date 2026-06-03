import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact/Contact'
import { Home } from '../pages/Home'
import { ScrollToTop } from '../components/common/ScrollToTop'
import { NotFound } from '../pages/NotFound'
import { Services } from '../pages/Services'
import { WebDevelopmentService } from '../pages/WebDevelopmentService'
import { UiUxDesignService } from '../pages/UiUxDesignService'
import { MobileAppService } from '../pages/MobileAppService'
import { DigitalMarketingService } from '../pages/DigitalMarketingService'
import { CyberSecurityService } from '../pages/CyberSecurityService'
import { GraphicDesign } from '../pages/GraphicDesign'
import { Blog } from '../pages/Blog/Blog'
import { BlogPost } from '../pages/BlogPost/BlogPost'
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy'
import { TermsConditions } from '../pages/TermsConditions/TermsConditions'
import { RefundPolicy } from '../pages/RefundPolicy/RefundPolicy'
import { ROUTES } from '../utils/routes'

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.webDevelopment} element={<WebDevelopmentService />} />
          <Route path={ROUTES.uiUxDesign} element={<UiUxDesignService />} />
          <Route path={ROUTES.mobileApps} element={<MobileAppService />} />
          <Route path={ROUTES.digitalMarketing} element={<DigitalMarketingService />} />
          <Route path={ROUTES.cyberSecurity} element={<CyberSecurityService />} />
          <Route path={ROUTES.graphicDesign} element={<GraphicDesign />} />
          <Route path={ROUTES.blog} element={<Blog />} />
          <Route path={`${ROUTES.blog}/:slug`} element={<BlogPost />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
          <Route path={ROUTES.termsConditions} element={<TermsConditions />} />
          <Route path={ROUTES.refundPolicy} element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
