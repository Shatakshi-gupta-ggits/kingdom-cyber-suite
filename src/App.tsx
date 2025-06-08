
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LatestReleases from "./pages/LatestReleases";
import TrendingMods from "./pages/TrendingMods";
import VipAccess from "./pages/VipAccess";
import Favorites from "./pages/Favorites";
import AppModHub from "./pages/AppModHub";
import MediaLibrary from "./pages/MediaLibrary";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/latest-releases" element={<LatestReleases />} />
          <Route path="/trending-mods" element={<TrendingMods />} />
          <Route path="/vip-access" element={<VipAccess />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/app-mod-hub" element={<AppModHub />} />
          <Route path="/media-library" element={<MediaLibrary />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
