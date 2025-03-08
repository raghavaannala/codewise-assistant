
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Lightbulb, RefreshCw } from 'lucide-react';
import GlassMorphCard from '../ui/GlassMorphCard';

interface CodeSuggestionsProps {
  code: string;
  language: string;
}

const CodeSuggestions = ({ code, language }: CodeSuggestionsProps) => {
  // In a real app, we'd generate these from AI analysis
  const timeComplexity = code.length > 100 ? 'O(n log n)' : 'O(n²)';
  const spaceComplexity = 'O(n)';
  const suggestion = code.length > 100 
    ? 'Consider using memoization to optimize recursive calls.' 
    : 'The nested loops could be optimized for better performance.';

  const optimizedCode = `// Optimized version
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`;
  
  return (
    <Tabs defaultValue="analysis">
      <TabsList className="w-full mb-4 grid grid-cols-3">
        <TabsTrigger value="analysis">Analysis</TabsTrigger>
        <TabsTrigger value="optimization">Optimize</TabsTrigger>
        <TabsTrigger value="explanation">Explain</TabsTrigger>
      </TabsList>
      
      <TabsContent value="analysis">
        <GlassMorphCard className="h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Code Analysis</h3>
            <Button size="sm" variant="outline" className="flex items-center">
              <RefreshCw className="h-4 w-4 mr-1" />
              <span>Analyze</span>
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium flex items-center">
                  <Cpu className="h-4 w-4 mr-1" />
                  Time Complexity
                </span>
                <span className="text-sm text-primary font-mono">{timeComplexity}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium flex items-center">
                  <Cpu className="h-4 w-4 mr-1" />
                  Space Complexity
                </span>
                <span className="text-sm text-primary font-mono">{spaceComplexity}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-1/4"></div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <Lightbulb className="h-4 w-4 mr-1" />
                Recommendation:
              </h4>
              <p className="text-sm text-muted-foreground">{suggestion}</p>
            </div>
            
            <Button className="w-full mt-4 btn-hover">
              View Detailed Analysis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </GlassMorphCard>
      </TabsContent>
      
      <TabsContent value="optimization">
        <GlassMorphCard className="h-full">
          <h3 className="text-lg font-medium mb-4">Optimized Solution</h3>
          
          <div className="bg-black/90 rounded-lg code-block p-3 mb-4 max-h-[356px] overflow-auto">
            <pre className="text-xs md:text-sm">
              <code className="text-white">{optimizedCode}</code>
            </pre>
          </div>
          
          <Button className="w-full btn-hover">
            Apply Optimization
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </GlassMorphCard>
      </TabsContent>
      
      <TabsContent value="explanation">
        <GlassMorphCard className="h-full">
          <h3 className="text-lg font-medium mb-4">Code Explanation</h3>
          
          <div className="prose prose-sm dark:prose-invert max-h-[356px] overflow-auto">
            <p>This code appears to be implementing a sorting algorithm.</p>
            <h4>Key Observations:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>The algorithm uses nested loops to compare elements</li>
              <li>Elements are swapped when the current element is greater than the next one</li>
              <li>This is characteristic of a <strong>bubble sort</strong> algorithm</li>
            </ul>
            <h4>How It Works:</h4>
            <p>The algorithm passes through the array multiple times, comparing adjacent elements and swapping them if they're in the wrong order. Each pass bubbles up the largest element to its correct position.</p>
          </div>
          
          <Button className="w-full mt-4 btn-hover">
            Generate Full Documentation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </GlassMorphCard>
      </TabsContent>
    </Tabs>
  );
};

export default CodeSuggestions;
