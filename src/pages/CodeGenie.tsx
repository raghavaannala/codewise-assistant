
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CodeEditor from '@/components/code/CodeEditor';
import CodeSuggestions from '@/components/code/CodeSuggestions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Save, Upload } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CodeGenie = () => {
  const { toast } = useToast();
  const [code, setCode] = useState('// Write your code here...');
  const [language, setLanguage] = useState('javascript');

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">CodeGenie</h1>
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
                    {/* Output would be displayed here */}
                    <div className="text-green-400">
                      &gt; Program executed successfully.
                    </div>
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
