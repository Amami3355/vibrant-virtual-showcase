import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;