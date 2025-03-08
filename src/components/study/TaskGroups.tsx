
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, ChevronDown, ChevronUp, Clock, Star } from 'lucide-react';
import GlassMorphCard from '../ui/GlassMorphCard';

interface Interest {
  id: string;
  label: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

interface TaskGroupsProps {
  interest: Interest;
}

// Mock data - in a real app, this would come from a database
const mockTasks: Record<string, Task[]> = {
  'programming': [
    { id: 'prog1', title: 'Complete JavaScript fundamentals', completed: true, priority: 'high' },
    { id: 'prog2', title: 'Build a React todo app', completed: false, priority: 'medium', dueDate: '2023-10-30' },
    { id: 'prog3', title: 'Learn TypeScript basics', completed: false, priority: 'high', dueDate: '2023-11-05' },
  ],
  'math': [
    { id: 'math1', title: 'Review calculus formulas', completed: false, priority: 'medium' },
    { id: 'math2', title: 'Complete linear algebra assignment', completed: false, priority: 'high', dueDate: '2023-10-28' },
  ],
  'science': [
    { id: 'sci1', title: 'Read chapter on thermodynamics', completed: true, priority: 'medium' },
    { id: 'sci2', title: 'Prepare lab report', completed: false, priority: 'high', dueDate: '2023-10-25' },
  ],
  'language': [
    { id: 'lang1', title: 'Practice German vocabulary', completed: false, priority: 'low' },
    { id: 'lang2', title: 'Complete Spanish grammar exercises', completed: true, priority: 'medium' },
  ],
  'other': [
    { id: 'other1', title: 'Research topic for essay', completed: false, priority: 'medium', dueDate: '2023-11-10' },
  ],
};

const TaskGroups = ({ interest }: TaskGroupsProps) => {
  const [expanded, setExpanded] = useState(true);
  const tasks = mockTasks[interest.id] || [];
  const completedCount = tasks.filter(task => task.completed).length;
  
  const toggleExpanded = () => setExpanded(!expanded);
  
  const toggleTask = (taskId: string) => {
    // In a real app, this would update the task in the database
    console.log(`Toggling task: ${taskId}`);
  };
  
  const getPriorityColor = (priority: 'low' | 'medium' | 'high') => {
    switch (priority) {
      case 'low': return 'text-blue-500';
      case 'medium': return 'text-amber-500';
      case 'high': return 'text-rose-500';
      default: return '';
    }
  };
  
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold">{interest.label}</h3>
          <div className="ml-3 text-xs bg-primary/10 text-primary rounded-full px-2 py-1">
            {completedCount}/{tasks.length} completed
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleExpanded}
          className="h-8 w-8 p-0"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      
      {expanded && (
        <div className="space-y-3">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <GlassMorphCard key={task.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id={task.id} 
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <label 
                      htmlFor={task.id}
                      className={`text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                    >
                      {task.title}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    {task.dueDate && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {task.dueDate}
                      </div>
                    )}
                    <Star className={`h-4 w-4 ${getPriorityColor(task.priority)}`} fill="currentColor" />
                  </div>
                </div>
              </GlassMorphCard>
            ))
          ) : (
            <GlassMorphCard className="p-4">
              <p className="text-center text-muted-foreground">No tasks yet in this category</p>
            </GlassMorphCard>
          )}
          
          <Button variant="outline" size="sm" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
      )}
    </section>
  );
};

export default TaskGroups;
