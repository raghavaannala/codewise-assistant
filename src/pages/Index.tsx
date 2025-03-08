
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import StudyModules from '@/components/study/StudyModules';
import CodeEditor from '@/components/study/CodeEditor';
import FadeIn from '@/components/animations/FadeIn';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="animate-fade-in">
          <Hero />
        </div>
        
        <div className="glass mx-4 md:mx-12 my-16 rounded-2xl overflow-hidden">
          <FadeIn delay={0.2}>
            <Features />
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="px-4 py-8 md:px-8">
              <StudyModules />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="px-4 pb-12 md:px-8 floating">
              <CodeEditor />
            </div>
          </FadeIn>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
