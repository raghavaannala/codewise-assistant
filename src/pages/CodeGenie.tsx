
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CodeEditor from '@/components/code/CodeEditor';
import CodeSuggestions from '@/components/code/CodeSuggestions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Save, Upload, Cpu } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { tinyLlama } from '@/services/tinyLlama';
import { Input } from '@/components/ui/input';

const CodeGenie = () => {
  const { toast } = useToast();
  const [code, setCode] = useState('// Write your code here...');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('> Ready to execute code');
  const [isProcessing, setIsProcessing] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleSaveCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${language === 'javascript' ? 'js' : language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Code saved!",
      description: "Your code has been saved to your device.",
    });
  };

  const handleRunCode = async () => {
    if (!code.trim()) {
      toast({
        title: "Empty Code",
        description: "Please write some code before running it.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setOutput('> Processing with TinyLlama...');

    try {
      // In a real implementation, this would actually run the code
      // Here we're just simulating execution
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setOutput(`> Program executed successfully.\n> Time complexity: ${code.includes('for') && code.includes('for') ? 'O(n²)' : 'O(n)'}\n> Memory usage: minimal`);
      
      toast({
        title: "Code Executed",
        description: "Your code has been processed successfully with TinyLlama!",
      });
    } catch (error) {
      setOutput(`> Error: ${error instanceof Error ? error.message : "Unknown error"}`);
      toast({
        title: "Execution Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateCode = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty Prompt",
        description: "Please enter a prompt for code generation.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    toast({
      title: "Generating Code",
      description: "TinyLlama is working on your request...",
    });

    try {
      const generatedCode = await tinyLlama.completeCode(prompt, language);
      setCode(generatedCode);
      
      toast({
        title: "Code Generated",
        description: "TinyLlama has generated code based on your prompt.",
      });
    } catch (error) {
      toast({
        title: "Generation Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">CodeGenie + TinyLlama</h1>
              <p className="text-muted-foreground">Write, analyze, and optimize your code with AI assistance</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm" onClick={handleSaveCode}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex gap-2 items-center">
              <Input
                placeholder="Describe the code you want to generate..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-grow"
              />
              <Button 
                onClick={handleGenerateCode}
                disabled={isProcessing || !prompt.trim()}
              >
                {isProcessing ? (
                  <Cpu className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                Generate Code
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Powered by TinyLlama - Local AI model for code generation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="editor" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="editor">Code Editor</TabsTrigger>
                  <TabsTrigger value="output">Output</TabsTrigger>
                </TabsList>
                
                <TabsContent value="editor">
                  <CodeEditor 
                    code={code} 
                    setCode={setCode} 
                    language={language}
                    setLanguage={setLanguage}
                  />
                </TabsContent>
                
                <TabsContent value="output">
                  <div className="bg-black/90 rounded-lg p-4 min-h-[400px] font-mono text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-green-400">TinyLlama Console</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={handleRunCode}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <Cpu className="h-4 w-4 mr-1 animate-spin" />
                        ) : null}
                        Run Code
                      </Button>
                    </div>
                    <pre className="whitespace-pre-wrap text-sm">{output}</pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <CodeSuggestions code={code} language={language} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodeGenie;
