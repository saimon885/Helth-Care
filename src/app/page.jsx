import AboutSection from "@/Components/Home/AboutSection";
import Banner from "@/Components/Home/Banner";
import Services from "./services/page";

export default function Home() {
  return (
    <div className="space-y-5">
      <main>
        <Banner></Banner>
      </main>
      <main>
        <Services></Services>
      </main>
      <main>
        <AboutSection></AboutSection>
      </main>
    </div>
  );
}
