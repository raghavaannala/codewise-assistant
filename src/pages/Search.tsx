
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon, Book, Code, FileText, Video, Clock } from 'lucide-react';
import GlassMorphCard from '@/components/ui/GlassMorphCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Mock search results - in a real app, this would be an API call
    setTimeout(() => {
      const mockResults = [
        {
          id: '1',
          title: 'Introduction to Algorithms',
          type: 'course',
          description: 'Learn the fundamentals of algorithms and data structures',
          tags: ['programming', 'algorithms', 'computer science'],
        },
        {
          id: '2',
          title: 'Quick Sort Implementation',
          type: 'code',
          description: 'An efficient implementation of the Quick Sort algorithm',
          language: 'JavaScript',
          tags: ['programming', 'algorithms', 'sorting'],
        },
        {
          id: '3',
          title: 'Understanding Big O Notation',
          type: 'article',
          description: 'A deep dive into time and space complexity analysis',
          readTime: '8 min',
          tags: ['algorithms', 'computer science', 'programming'],
        },
      ];
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 800);
  };
  
  const ResultIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'course':
        return <Book className="h-5 w-5 text-blue-500" />;
      case 'code':
        return <Code className="h-5 w-5 text-green-500" />;
      case 'article':
        return <FileText className="h-5 w-5 text-amber-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-3xl font-bold text-center mb-6">Search Resources</h1>
            
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search for topics, courses, code examples..."
                className="pl-10 pr-4 py-6 text-lg rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                disabled={isSearching}
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </form>
          </div>
          
          {searchResults.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="all">
                <TabsList className="grid grid-cols-5 mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="space-y-4">
                    {searchResults.map((result) => (
                      <GlassMorphCard key={result.id} className="p-4">
                        <div className="flex">
                          <div className="mr-4 mt-1">
                            <ResultIcon type={result.type} />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1">{result.title}</h3>
                            <p className="text-muted-foreground text-sm mb-2">{result.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {result.tags.map((tag: string) => (
                                  <span 
                                    key={tag} 
                                    className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              {result.readTime && (
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {result.readTime}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </GlassMorphCard>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="courses">
                  <div className="space-y-4">
                    {searchResults
                      .filter(result => result.type === 'course')
                      .map((result) => (
                        <GlassMorphCard key={result.id} className="p-4">
                          <div className="flex">
                            <div className="mr-4 mt-1">
                              <ResultIcon type={result.type} />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium mb-1">{result.title}</h3>
                              <p className="text-muted-foreground text-sm mb-2">{result.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {result.tags.map((tag: string) => (
                                  <span 
                                    key={tag} 
                                    className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </GlassMorphCard>
                      ))}
                  </div>
                </TabsContent>
                
                {/* Similar content for other tabs */}
                <TabsContent value="code">
                  <div className="space-y-4">
                    {searchResults
                      .filter(result => result.type === 'code')
                      .map((result) => (
                        <GlassMorphCard key={result.id} className="p-4">
                          <div className="flex">
                            <div className="mr-4 mt-1">
                              <ResultIcon type={result.type} />
                            </div>
                            <div className="w-full">
                              <h3 className="text-lg font-medium mb-1">{result.title}</h3>
                              <p className="text-muted-foreground text-sm mb-2">{result.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                  {result.tags.map((tag: string) => (
                                    <span 
                                      key={tag} 
                                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                {result.language && (
                                  <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">
                                    {result.language}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </GlassMorphCard>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="articles">
                  <div className="space-y-4">
                    {searchResults
                      .filter(result => result.type === 'article')
                      .map((result) => (
                        <GlassMorphCard key={result.id} className="p-4">
                          <div className="flex">
                            <div className="mr-4 mt-1">
                              <ResultIcon type={result.type} />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium mb-1">{result.title}</h3>
                              <p className="text-muted-foreground text-sm mb-2">{result.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                  {result.tags.map((tag: string) => (
                                    <span 
                                      key={tag} 
                                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                {result.readTime && (
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {result.readTime}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </GlassMorphCard>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="videos">
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground">No video results found.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
