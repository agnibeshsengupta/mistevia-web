import HeroSection from "../components/home/HeroSection"
import Reviews from '../components/home/Reviews'
import Aboutus from '../components/home/Aboutus'
import MisteviaMenu from '../components/home/MisteviaMenu'
import Contactus from '../components/home/Contactus'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <Aboutus />
      <MisteviaMenu />
      <Reviews />
      <Contactus />
    </main>
  );
}
