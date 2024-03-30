import Navbar from "@/components/NavBar";
import FullscreenImage from "./home/components/FullScreenImage";
import HortaSolidariaInformations from "./home/components/HortaSolidariaInformations";
import Justify from "./home/components/Justify";
import Mission from "./home/components/Mission";
import Sponsors from "./home/components/Sponsors";
import Video from "./home/components/Video";
import FeatureDisplay from "./home/components/feature/FeatureDisplay";
import Team from "./home/components/team/TeamDisplay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<>
    <Navbar/>
    <div className="flex w-full flex-col items-center justify-center bg-gray-300">
      <FullscreenImage imageUrl="/fullImage.jpg" />
      <HortaSolidariaInformations />
      <Mission />
      <Justify />
      <FeatureDisplay />
      <Team />
      <Video />
      <Sponsors />
    </div>
    <Footer/>
</>
  );
}
