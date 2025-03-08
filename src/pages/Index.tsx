
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import StudyModules from '@/components/study/StudyModules';
import CodeEditor from '@/components/study/CodeEditor';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <StudyModules />
        <CodeEditor />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
