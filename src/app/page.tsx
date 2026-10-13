import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import InteractiveResume from "./components/InteractiveResume";
import Newsletter from "./components/Newsletter";


export default function Home() {
  return (
    <main>
      <Hero />
      <section id="resume" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
        <InteractiveResume />
      </section>
      <Blogs />
      <Newsletter />
    </main>
  );
} 