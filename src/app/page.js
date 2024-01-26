import HeroSection from "../components/home/HeroSection"
import Reviews from '../components/home/Reviews'
import Aboutus from '../components/home/Aboutus'
import MenuSlider from '../components/home/MenuSlider'
import Contactus from '../components/home/Contactus'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <Aboutus />
      <MenuSlider />
      <Reviews />
      <Contactus />
    </main>
  );
}
