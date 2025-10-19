import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <style>{`
        :root {
          --cream: #F3EFE0;
        }
        .text-cream {
          color: var(--cream);
        }
        .bg-cream {
          background-color: var(--cream);
        }
        .border-cream {
          border-color: var(--cream);
        }
        .hover\:text-cream:hover {
          color: var(--cream);
        }
        .hover\:bg-cream:hover {
          background-color: var(--cream);
        }
        .hover\:border-cream:hover {
          border-color: var(--cream);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}