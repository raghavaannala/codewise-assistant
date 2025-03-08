
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import GlassMorphCard from '../ui/GlassMorphCard';

const Hero = () => {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} direction="left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Powered by TinyLlama
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your AI-Powered <span className="text-gradient">Study Assistant</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Elevate your learning with StudyBuddy + CodeGenie. Intelligent code assistance, study modules, and instant knowledge at your fingertips.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-hover">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="btn-hover">
                  Learn More
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="right">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full filter blur-3xl -z-10 animate-float" />
              
              <GlassMorphCard className="w-full max-w-md mx-auto transform rotate-1">
                <div className="p-2 bg-black/90 rounded-lg code-block">
                  <pre className="text-xs md:text-sm">
                    <code>{`# Using TinyLlama for code assistance
from tinyLlama import CodeGenie

# Initialize the AI assistant
assistant = CodeGenie(model="local")

# Generate optimized code
result = assistant.optimize("""
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
""")

print(result.code)
# Returns optimized code with memoization
`}</code>
                  </pre>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Time Complexity Analysis</p>
                    <p className="text-xs text-muted-foreground">Original: O(2^n) → Optimized: O(n)</p>
                  </div>
                  <Button size="sm" variant="outline">Run</Button>
                </div>
              </GlassMorphCard>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
