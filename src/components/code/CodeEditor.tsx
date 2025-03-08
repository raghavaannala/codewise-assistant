
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Cpu, Play } from 'lucide-react';
import GlassMorphCard from '../ui/GlassMorphCard';
import { tinyLlama } from '@/services/tinyLlama';
import { useToast } from '../ui/use-toast';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const CodeEditor = ({ code, setCode, language, setLanguage }: CodeEditorProps) => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRunCode = async () => {
    if (!code.trim()) {
      toast({
        title: "Empty Code",
        description: "Please write some code before running it.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    toast({
      title: "Processing with TinyLlama",
      description: "Analyzing and running your code...",
    });

    try {
      // In a real implementation, this would actually run the code
      // Here we're just showing a toast to simulate execution
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Code Executed",
        description: "Your code has been processed successfully!",
      });
    } catch (error) {
      toast({
        title: "Execution Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <GlassMorphCard isDark>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium mb-1">Edit Code</h3>
          <p className="text-sm text-muted-foreground">Write or paste your code</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="c">C</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            onClick={handleRunCode} 
            disabled={isAnalyzing}
            className="flex items-center gap-1"
          >
            {isAnalyzing ? (
              <Cpu className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            Run
          </Button>
        </div>
      </div>
      
      <div className="bg-black/90 rounded-lg code-block">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-[400px] bg-transparent text-white p-4 font-mono text-sm resize-none focus:outline-none"
          spellCheck="false"
        />
      </div>
    </GlassMorphCard>
  );
};

export default CodeEditor;
