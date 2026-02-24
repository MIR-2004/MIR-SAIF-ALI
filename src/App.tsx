import { useState } from 'react';
import { PreLanding } from './components/PreLanding';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { SectionDivider } from './components/SectionDivider';

export function App() {
  const [showPreLanding, setShowPreLanding] = useState(true);

  if (showPreLanding) {
    return <PreLanding onComplete={() => setShowPreLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-garage text-off-white font-rajdhani selection:bg-challenger-orange selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <main className="relative z-10">

        <SectionDivider title="SPECS" />
        <About />

        <SectionDivider title="MODELS" />
        <Projects />

        <SectionDivider title="PERFORMANCE" />
        <Skills />

        <SectionDivider title="CONTACT" />
        <Contact />
      </main>

      <footer className="py-12 bg-black border-t-4 border-challenger-orange mt-12 relative overflow-hidden">
        <div className="absolute inset-0 carbon-fiber opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-bebas text-3xl text-white mb-1">MIR SAIF ALI</h2>
            <p className="font-tech text-muted-metal text-sm">
              BUILT DETROIT TOUGH. POWERED BY CODE.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/MIR-2004"
              className="text-muted-metal hover:text-white font-bebas tracking-wider transition-colors">

              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/mir-saif-ali-9b9415256/"
              className="text-muted-metal hover:text-white font-bebas tracking-wider transition-colors">

              LINKEDIN
            </a>
            <a
              href="https://x.com/mir_ali2004"
              className="text-muted-metal hover:text-white font-bebas tracking-wider transition-colors">

              TWITTER
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="font-tech text-xs text-zinc-600">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>);

}