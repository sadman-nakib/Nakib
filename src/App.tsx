/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScroll } from './components/SmoothScroll';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollNarrative } from './components/ScrollNarrative';
import { Projects } from './components/Projects';
import { SplitSection } from './components/SplitSection';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-apple-bg text-apple-text grain">
        <Cursor />
        <Navbar />
        
        <main>
          <Hero />
          <ScrollNarrative />
          <Projects />
          <SplitSection />
          <Stats />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}
