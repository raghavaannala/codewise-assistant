
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Gamepad, 
  Brain, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap,
  BookOpen,
  Code,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StudyGroup {
  id: string;
  name: string;
  interest: string;
  members: number;
}

const studyGroups: StudyGroup[] = [
  { id: 'prog1', name: 'JS Wizards', interest: 'programming', members: 24 },
  { id: 'prog2', name: 'Python Masters', interest: 'programming', members: 18 },
  { id: 'math1', name: 'Math Enthusiasts', interest: 'math', members: 15 },
  { id: 'sci1', name: 'Physics Geeks', interest: 'science', members: 12 },
  { id: 'lang1', name: 'Language Lovers', interest: 'language', members: 9 },
  { id: 'prog3', name: 'Web Developers', interest: 'programming', members: 21 },
  { id: 'math2', name: 'Stats Group', interest: 'math', members: 8 },
];

interface InterestGroup {
  id: string;
  label: string;
  icon: React.ElementType;
}

const interestGroups: InterestGroup[] = [
  { id: 'programming', label: 'Programming', icon: Code },
  { id: 'math', label: 'Mathematics', icon: Brain },
  { id: 'science', label: 'Science', icon: GraduationCap },
  { id: 'language', label: 'Languages', icon: BookOpen },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeInterest, setActiveInterest] = useState<string | null>('programming');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const filteredGroups = activeInterest 
    ? studyGroups.filter(group => group.interest === activeInterest)
    : studyGroups;

  return (
    <div className={cn(
      "h-screen fixed left-0 top-0 z-40 pt-16 flex flex-col glass shadow-lg transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex-1 p-3 overflow-y-auto scrollbar-thin">
        {!collapsed && (
          <div className="mb-6 mt-2">
            <h2 className="text-lg font-semibold mb-2">Study Hub</h2>
            <p className="text-xs text-muted-foreground">Connect with others & learn together</p>
          </div>
        )}

        <div className="mb-6">
          <div className="flex items-center mb-2">
            {collapsed ? (
              <Users className="h-5 w-5 mx-auto" />
            ) : (
              <h3 className="text-sm font-medium flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Study Groups
              </h3>
            )}
          </div>

          {!collapsed && (
            <div className="grid grid-cols-2 gap-1 mb-3">
              {interestGroups.map((interest) => (
                <Button
                  key={interest.id}
                  variant={activeInterest === interest.id ? "default" : "outline"}
                  size="sm"
                  className="h-8 text-xs justify-start"
                  onClick={() => setActiveInterest(interest.id)}
                >
                  <interest.icon className="h-3 w-3 mr-1" />
                  {interest.label}
                </Button>
              ))}
            </div>
          )}

          <div className="space-y-1">
            {collapsed ? (
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full mx-auto block"
                onClick={() => navigate('/groups')}
              >
                <Users className="h-5 w-5" />
              </Button>
            ) : (
              filteredGroups.map((group) => (
                <Button
                  key={group.id}
                  variant="ghost"
                  className="w-full justify-start text-left h-9"
                  onClick={() => navigate(`/groups/${group.id}`)}
                >
                  <div className="truncate">
                    {group.name}
                    <span className="ml-2 text-xs bg-primary/10 text-primary rounded-full px-1.5">
                      {group.members}
                    </span>
                  </div>
                </Button>
              ))
            )}
            
            {!collapsed && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2 text-xs"
                onClick={() => navigate('/groups')}
              >
                View All Groups
              </Button>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            {collapsed ? (
              <Gamepad className="h-5 w-5 mx-auto" />
            ) : (
              <h3 className="text-sm font-medium flex items-center">
                <Gamepad className="h-4 w-4 mr-2" />
                Coding Games
              </h3>
            )}
          </div>

          <div className="space-y-1">
            {!collapsed && (
              <>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left h-9"
                  onClick={() => navigate('/games/challenges')}
                >
                  Code Challenges
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left h-9"
                  onClick={() => navigate('/games/quizzes')}
                >
                  Coding Quizzes
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left h-9"
                  onClick={() => navigate('/games/algorithm-race')}
                >
                  Algorithm Race
                </Button>
              </>
            )}
            
            {collapsed && (
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full mx-auto block"
                onClick={() => navigate('/games')}
              >
                <Gamepad className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {!collapsed && (
          <div className="border-t border-border pt-4 mt-4">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate('/search')}
            >
              <Search className="h-4 w-4 mr-2" />
              Search Resources
            </Button>
          </div>
        )}
      </div>
      
      <div className="p-2 border-t border-border flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
