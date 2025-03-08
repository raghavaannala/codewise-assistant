
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GlassMorphCard from '../ui/GlassMorphCard';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const CodeEditor = ({ code, setCode, language, setLanguage }: CodeEditorProps) => {
  return (
    <GlassMorphCard isDark>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium mb-1">Edit Code</h3>
          <p className="text-sm text-muted-foreground">Write or paste your code</p>
        </div>
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
