
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Lightbulb, RefreshCw } from 'lucide-react';
import GlassMorphCard from '../ui/GlassMorphCard';
import { CodeAnalysis, tinyLlama } from '@/services/tinyLlama';
import { useToast } from '../ui/use-toast';

interface CodeSuggestionsProps {
  code: string;
  language: string;
}

const CodeSuggestions = ({ code, language }: CodeSuggestionsProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<CodeAnalysis>({
    timeComplexity: '...',
    spaceComplexity: '...',
    recommendation: 'Write or paste code to analyze',
  });
  const [explanation, setExplanation] = useState<string>('');

  // Analyze code when it changes
  useEffect(() => {
    if (code.trim().length > 10) {
      analyzeCode();
    }
  }, [code, language]);

  const analyzeCode = async () => {
    if (!code.trim()) {
      toast({
        title: "Empty Code",
        description: "Please write some code before analyzing.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await tinyLlama.analyzeCode(code, language);
      setAnalysis(result);
      
      // Generate explanation in the background
      tinyLlama.explainCode(code, language).then(result => {
        setExplanation(result);
      });
    } catch (error) {
      toast({
        title: "Analysis Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            <Button 
              size="sm" 
              variant="outline" 
              className="flex items-center"
              onClick={analyzeCode}
              disabled={isLoading}
            >
              {isLoading ? (
                <Cpu className="h-4 w-4 mr-1 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-1" />
              )}
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
                <span className="text-sm text-primary font-mono">{analysis.timeComplexity}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ 
                    width: analysis.timeComplexity === 'O(1)' ? '10%' : 
                           analysis.timeComplexity === 'O(log n)' ? '30%' :
                           analysis.timeComplexity === 'O(n)' ? '50%' :
                           analysis.timeComplexity === 'O(n log n)' ? '70%' : '90%'
                  }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium flex items-center">
                  <Cpu className="h-4 w-4 mr-1" />
                  Space Complexity
                </span>
                <span className="text-sm text-primary font-mono">{analysis.spaceComplexity}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ 
                    width: analysis.spaceComplexity === 'O(1)' ? '20%' : 
                           analysis.spaceComplexity === 'O(log n)' ? '40%' :
                           analysis.spaceComplexity === 'O(n)' ? '60%' : '80%'
                  }}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 flex items-center">
                <Lightbulb className="h-4 w-4 mr-1" />
                Recommendation:
              </h4>
              <p className="text-sm text-muted-foreground">{analysis.recommendation}</p>
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
              <code className="text-white">{analysis.optimizedCode || "// Optimized code will appear here once analysis is complete."}</code>
            </pre>
          </div>
          
          <Button 
            className="w-full btn-hover"
            onClick={() => {
              if (analysis.optimizedCode) {
                toast({
                  title: "Optimization Applied",
                  description: "The optimized code has been applied to the editor."
                });
              }
            }}
          >
            Apply Optimization
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </GlassMorphCard>
      </TabsContent>
      
      <TabsContent value="explanation">
        <GlassMorphCard className="h-full">
          <h3 className="text-lg font-medium mb-4">Code Explanation</h3>
          
          <div className="prose prose-sm dark:prose-invert max-h-[356px] overflow-auto">
            {explanation ? (
              <p>{explanation}</p>
            ) : (
              <>
                <p>Code explanation will appear here after analysis.</p>
                <p>TinyLlama will break down your code in simple terms.</p>
              </>
            )}
          </div>
          
          <Button 
            className="w-full mt-4 btn-hover"
            onClick={() => analyzeCode()}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Cpu className="h-4 w-4 mr-2 animate-spin" />
                Generating Explanation...
              </>
            ) : (
              <>
                Generate Explanation
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </GlassMorphCard>
      </TabsContent>
    </Tabs>
  );
};

export default CodeSuggestions;
