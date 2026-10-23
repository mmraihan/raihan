import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import InteractiveResume from "./components/InteractiveResume";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="resume" aria-label="Resume" className="scroll-mt-20">
        <InteractiveResume headingLevel="h2" />
      </section>
      <Blogs />
      <Newsletter />
    </>
  );
}
