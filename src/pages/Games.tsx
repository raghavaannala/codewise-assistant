
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Trophy, Brain, Timer, Zap, Heart, Star } from 'lucide-react';
import GlassMorphCard from '@/components/ui/GlassMorphCard';
import { useNavigate } from 'react-router-dom';

const Games = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />
      
      <main className="flex-grow pt-20 pl-16 md:pl-64 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Coding Games</h1>
              <p className="text-muted-foreground">Fun ways to improve your coding skills</p>
            </div>
          </div>
          
          <Tabs defaultValue="challenges" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="algorithm-race">Algorithm Race</TabsTrigger>
            </TabsList>
            
            <TabsContent value="challenges" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GlassMorphCard className="min-h-[220px] flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Array Manipulation</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Practice array methods by solving optimized sorting and search problems.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Easy</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">10 min</span>
                    </div>
                    <Button size="sm" onClick={() => navigate('/games/challenges/arrays')}>
                      Start
                    </Button>
                  </div>
                </GlassMorphCard>
                
                <GlassMorphCard className="min-h-[220px] flex flex-col">
                  <h3 className="text-lg font-medium mb-2">String Puzzles</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Solve various string manipulation challenges and optimize for performance.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full text-xs">Medium</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">15 min</span>
                    </div>
                    <Button size="sm" onClick={() => navigate('/games/challenges/strings')}>
                      Start
                    </Button>
                  </div>
                </GlassMorphCard>
                
                <GlassMorphCard className="min-h-[220px] flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Algorithm Design</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Design efficient algorithms to solve complex computational problems.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="bg-rose-500/10 text-rose-500 px-2 py-1 rounded-full text-xs">Hard</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">25 min</span>
                    </div>
                    <Button size="sm" onClick={() => navigate('/games/challenges/algorithms')}>
                      Start
                    </Button>
                  </div>
                </GlassMorphCard>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
                <GlassMorphCard>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left pb-2">Rank</th>
                          <th className="text-left pb-2">Player</th>
                          <th className="text-left pb-2">Challenges</th>
                          <th className="text-left pb-2">Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 flex items-center">
                            <Trophy className="h-4 w-4 mr-1 text-amber-500" />
                            1
                          </td>
                          <td>CodeMaster</td>
                          <td>24</td>
                          <td>980</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 flex items-center">
                            <Trophy className="h-4 w-4 mr-1 text-gray-400" />
                            2
                          </td>
                          <td>AlgoNinja</td>
                          <td>22</td>
                          <td>945</td>
                        </tr>
                        <tr>
                          <td className="py-3 flex items-center">
                            <Trophy className="h-4 w-4 mr-1 text-amber-800" />
                            3
                          </td>
                          <td>ByteWizard</td>
                          <td>21</td>
                          <td>890</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </GlassMorphCard>
              </div>
            </TabsContent>
            
            <TabsContent value="quizzes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GlassMorphCard className="min-h-[220px] flex flex-col">
                  <h3 className="text-lg font-medium mb-2">JavaScript Fundamentals</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Test your knowledge of JavaScript basics, closures, and asynchronous programming.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Brain className="h-4 w-4 mr-1" />
                      <span className="text-xs">20 questions</span>
                    </div>
                    <Button size="sm" onClick={() => navigate('/games/quizzes/javascript')}>
                      Start Quiz
                    </Button>
                  </div>
                </GlassMorphCard>
                
                <GlassMorphCard className="min-h-[220px] flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Python Concepts</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Quiz yourself on Python data structures, comprehensions, and best practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Brain className="h-4 w-4 mr-1" />
                      <span className="text-xs">15 questions</span>
                    </div>
                    <Button size="sm" onClick={() => navigate('/games/quizzes/python')}>
                      Start Quiz
                    </Button>
                  </div>
                </GlassMorphCard>
                
                <GlassMorphCard className="min-h-[220px] flex flex-col">
                  <h3 className="text-lg font-medium mb-2">Data Structures</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    Test your knowledge of arrays, linked lists, trees, and other data structures.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Brain className="h-4 w-4 mr-1" />
                      <span className="text-xs">25 questions</span>
                    </div>
                    <Button size="sm" onClick={() => navigate('/games/quizzes/data-structures')}>
                      Start Quiz
                    </Button>
                  </div>
                </GlassMorphCard>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Your Quiz Stats</h3>
                <GlassMorphCard>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <div className="flex justify-center mb-2">
                        <Timer className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-2xl font-bold">18</h4>
                      <p className="text-sm text-muted-foreground">Quizzes Completed</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="flex justify-center mb-2">
                        <Zap className="h-8 w-8 text-amber-500" />
                      </div>
                      <h4 className="text-2xl font-bold">87%</h4>
                      <p className="text-sm text-muted-foreground">Average Score</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="flex justify-center mb-2">
                        <Star className="h-8 w-8 text-yellow-500" />
                      </div>
                      <h4 className="text-2xl font-bold">5</h4>
                      <p className="text-sm text-muted-foreground">Badges Earned</p>
                    </div>
                  </div>
                </GlassMorphCard>
              </div>
            </TabsContent>
            
            <TabsContent value="algorithm-race" className="space-y-6">
              <GlassMorphCard>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-4">Algorithm Race</h3>
                    <p className="text-muted-foreground mb-4">
                      Race against the clock to implement algorithms with optimal time and space complexity. Compete with others in real-time or practice solo.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-lg font-medium mb-2">Solo Mode</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Practice implementing algorithms at your own pace with helpful hints.
                        </p>
                        <Button onClick={() => navigate('/games/algorithm-race/solo')}>
                          Start Solo Race
                        </Button>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Multiplayer Mode</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Compete against other students in real-time algorithm implementation races.
                        </p>
                        <Button onClick={() => navigate('/games/algorithm-race/multiplayer')}>
                          Join Multiplayer
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="bg-black/90 rounded-lg code-block p-3 h-full">
                      <pre className="text-xs overflow-x-auto">
                        <code>{`function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Time Complexity: O(n log n) average case
// Space Complexity: O(n) for the new arrays`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </GlassMorphCard>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassMorphCard>
                  <h3 className="text-lg font-medium mb-4">Upcoming Races</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b pb-3">
                      <div>
                        <h4 className="font-medium">Graph Algorithms Race</h4>
                        <p className="text-xs text-muted-foreground">March 15, 2025 - 7:00 PM</p>
                      </div>
                      <Button size="sm" variant="outline">Remind Me</Button>
                    </li>
                    <li className="flex justify-between items-center border-b pb-3">
                      <div>
                        <h4 className="font-medium">Dynamic Programming Challenge</h4>
                        <p className="text-xs text-muted-foreground">March 22, 2025 - 6:30 PM</p>
                      </div>
                      <Button size="sm" variant="outline">Remind Me</Button>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Weekly Algorithm Sprint</h4>
                        <p className="text-xs text-muted-foreground">Every Saturday - 5:00 PM</p>
                      </div>
                      <Button size="sm" variant="outline">Subscribe</Button>
                    </li>
                  </ul>
                </GlassMorphCard>
                
                <GlassMorphCard>
                  <h3 className="text-lg font-medium mb-4">Your Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Sorting Algorithms</span>
                      <div className="flex items-center">
                        <div className="bg-primary h-2 rounded-full w-36 overflow-hidden">
                          <div className="bg-primary h-full w-[85%]"></div>
                        </div>
                        <span className="ml-2 text-sm">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Searching Algorithms</span>
                      <div className="flex items-center">
                        <div className="bg-primary/20 h-2 rounded-full w-36 overflow-hidden">
                          <div className="bg-primary h-full w-[92%]"></div>
                        </div>
                        <span className="ml-2 text-sm">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Dynamic Programming</span>
                      <div className="flex items-center">
                        <div className="bg-primary/20 h-2 rounded-full w-36 overflow-hidden">
                          <div className="bg-primary h-full w-[70%]"></div>
                        </div>
                        <span className="ml-2 text-sm">70%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Graph Algorithms</span>
                      <div className="flex items-center">
                        <div className="bg-primary/20 h-2 rounded-full w-36 overflow-hidden">
                          <div className="bg-primary h-full w-[65%]"></div>
                        </div>
                        <span className="ml-2 text-sm">65%</span>
                      </div>
                    </div>
                  </div>
                </GlassMorphCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;
