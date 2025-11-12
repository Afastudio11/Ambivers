import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import ComingSoon from "@/pages/ComingSoon";
import AmbiversFoundation from "@/pages/AmbiversFoundation";
import ASYP from "@/pages/ASYP";
import StudentAmbassador from "@/pages/StudentAmbassador";
import BimbelUTBK from "@/pages/BimbelUTBK";
import TentangKami from "@/pages/TentangKami";
import WhatWeDo from "@/pages/WhatWeDo";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/ambivers-foundation" component={AmbiversFoundation} />
      <Route path="/asyp" component={ASYP} />
      <Route path="/student-ambassador" component={StudentAmbassador} />
      <Route path="/bimbel-utbk" component={BimbelUTBK} />
      <Route path="/tentang-kami" component={TentangKami} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/coming-soon" component={ComingSoon} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
