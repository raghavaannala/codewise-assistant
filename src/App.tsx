
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Study from "./pages/Study";
import CodeGenie from "./pages/CodeGenie";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Games from "./pages/Games";
import StudyGroups from "./pages/StudyGroups";
import Quiz from "./pages/Quiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study" element={<Study />} />
          <Route path="/code" element={<CodeGenie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/quizzes/:quizId" element={<Quiz />} />
          <Route path="/groups" element={<StudyGroups />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
