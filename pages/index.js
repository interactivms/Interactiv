import HomeBanner from "../components/HomeBanner";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import PageLayout from '../layouts/pageLayout'
import Services from "../components/Services";
import BannerParallax from "../components/BannerParallax";
import OurWork from "../components/OurWork";
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <AboutUs />
      <Services />
      <BannerParallax />
      <OurWork />
      <Footer />
    </div>
  );
}

Home.layout = PageLayout