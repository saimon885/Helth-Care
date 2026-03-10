import AboutSection from "@/Components/Home/AboutSection";
import Banner from "@/Components/Home/Banner";
import Services from "./services/page";
import FeedbackCard from "@/Components/Card/FeedbackCard";

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
      <main>
        <FeedbackCard></FeedbackCard>
      </main>
    </div>
  );
}
