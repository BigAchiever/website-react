import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SocialMediaPage from './pages/SocialMediaPage';
import LearnMore1Page from './pages/LearnMore1Page';
import LearnMore2Page from './pages/LearnMore2Page';
import NotificationsPage from './pages/NotificationsPage';
import NotFoundPage from './pages/NotFoundPage';
import AdmissionsPage from './pages/AdmissionsPage';
import GalleryPage from './pages/GalleryPage';

// Import styles
import './styles/index.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

import ScrollToTopWrapper from './components/ui/ScrollToTopWrapper';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopWrapper />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="social-media" element={<SocialMediaPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="learn-more-symbiosis-higher-secondary-school" element={<LearnMore1Page />} />
          <Route path="learn-more-symbiosis-senior-secondary-school" element={<LearnMore2Page />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
