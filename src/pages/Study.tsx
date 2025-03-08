
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaskGroups from '@/components/study/TaskGroups';
import StudyModules from '@/components/study/StudyModules';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

// Define interest categories
const interests = [
  { id: 'programming', label: 'Programming' },
  { id: 'math', label: 'Mathematics' },
  { id: 'science', label: 'Science' },
  { id: 'language', label: 'Languages' },
  { id: 'other', label: 'Other Interests' },
];

const Study = () => {
  const [activeTab, setActiveTab] = useState('modules');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />
      
      <main className="flex-grow pt-20 pl-16 md:pl-64 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Study Dashboard</h1>
              <p className="text-muted-foreground">Organize your learning journey and track your progress</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button variant="default" size="sm" className="btn-hover">
                <Plus className="h-4 w-4 mr-2" />
                Add New Task
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="modules">Study Modules</TabsTrigger>
              <TabsTrigger value="tasks">Task Groups</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modules">
              <StudyModules />
            </TabsContent>
            
            <TabsContent value="tasks">
              <div className="space-y-8">
                {interests.map((interest) => (
                  <TaskGroups 
                    key={interest.id} 
                    interest={interest} 
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Study;
