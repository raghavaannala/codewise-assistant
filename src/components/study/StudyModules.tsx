
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, BookOpen, BookCheck, Brain } from 'lucide-react';
import GlassMorphCard from '../ui/GlassMorphCard';

const StudyModules = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Study Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personalized learning experiences powered by AI to help you master any subject.
          </p>
        </div>
        
        <Tabs defaultValue="programming" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="programming" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Programming</span>
            </TabsTrigger>
            <TabsTrigger value="mathematics" className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="hidden sm:inline">Mathematics</span>
            </TabsTrigger>
            <TabsTrigger value="science" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Science</span>
            </TabsTrigger>
            <TabsTrigger value="language" className="flex items-center gap-2">
              <BookCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Language</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="programming" className="space-y-6">
            <GlassMorphCard>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium mb-2">Python Essentials</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Master Python fundamentals with interactive exercises and real-time feedback.
                  </p>
                  <Button className="w-full btn-hover">Start Learning</Button>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-black/90 rounded-lg code-block p-3">
                    <pre className="text-xs md:text-sm overflow-x-auto">
                      <code>{`def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Example usage
unsorted = [3, 6, 8, 10, 1, 2, 1]
sorted_arr = quick_sort(unsorted)
print(sorted_arr)  # [1, 1, 2, 3, 6, 8, 10]`}</code>
                    </pre>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Time Complexity: O(n log n)</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Space Complexity: O(n)</span>
                  </div>
                </div>
              </div>
            </GlassMorphCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassMorphCard className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-medium mb-2">Data Structures</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Learn essential data structures with visual explanations and practical applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">12 modules</span>
                    <Button size="sm" variant="outline" className="btn-hover">View</Button>
                  </div>
                </div>
              </GlassMorphCard>
              
              <GlassMorphCard className="h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-medium mb-2">Algorithms</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Master searching, sorting, and graph algorithms with step-by-step visualizations.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">15 modules</span>
                    <Button size="sm" variant="outline" className="btn-hover">View</Button>
                  </div>
                </div>
              </GlassMorphCard>
            </div>
          </TabsContent>
          
          <TabsContent value="mathematics" className="space-y-6">
            <GlassMorphCard>
              <h3 className="text-lg font-medium mb-4">Calculus Fundamentals</h3>
              <p className="text-muted-foreground mb-6">
                Interactive calculus lessons with step-by-step problem solving and visualizations.
              </p>
              <Button className="btn-hover">Explore Mathematics Modules</Button>
            </GlassMorphCard>
          </TabsContent>
          
          <TabsContent value="science" className="space-y-6">
            <GlassMorphCard>
              <h3 className="text-lg font-medium mb-4">Physics Explorer</h3>
              <p className="text-muted-foreground mb-6">
                Discover the laws of physics through interactive simulations and guided experiments.
              </p>
              <Button className="btn-hover">Explore Science Modules</Button>
            </GlassMorphCard>
          </TabsContent>
          
          <TabsContent value="language" className="space-y-6">
            <GlassMorphCard>
              <h3 className="text-lg font-medium mb-4">Language Learning</h3>
              <p className="text-muted-foreground mb-6">
                Master new languages with AI-powered conversation practice and grammar assistance.
              </p>
              <Button className="btn-hover">Explore Language Modules</Button>
            </GlassMorphCard>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StudyModules;
