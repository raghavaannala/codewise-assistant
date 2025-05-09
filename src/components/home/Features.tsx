
import React from 'react';
import { Code, BookOpen, Search, Clock, Zap, Cpu } from 'lucide-react';
import GlassMorphCard from '../ui/GlassMorphCard';
import FadeIn from '../animations/FadeIn';

const features = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'CodeGenie Integration',
    description: 'Intelligent code completion, debugging, and explanation powered by TinyLlama.',
    delay: 0.1
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Interactive Study Modules',
    description: 'AI-generated quizzes, notes, and summaries to enhance your learning experience.',
    delay: 0.2
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Time & Space Complexity Analysis',
    description: 'Understand the efficiency of your code with detailed complexity breakdowns.',
    delay: 0.3
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Smart Search',
    description: 'Find exactly what you need with our AI-powered semantic search functionality.',
    delay: 0.4
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Offline Mode',
    description: 'Continue studying without internet using locally cached data and models.',
    delay: 0.5
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Local Processing',
    description: 'All AI processing happens on your device, ensuring privacy and fast responses.',
    delay: 0.6
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              StudyBuddy combines powerful AI capabilities with intuitive design to enhance your learning journey.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={feature.delay} direction="up">
              <GlassMorphCard className="h-full" hoverEffect>
                <div className="flex flex-col h-full">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
                </div>
              </GlassMorphCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
