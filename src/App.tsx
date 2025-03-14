
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import PiDay from "./pages/PiDay";
import StPatricksDay from "./pages/StPatricksDay";
import PickupDelivery from "./pages/PickupDelivery";
import Catering from "./pages/Catering";
import Shipping from "./pages/Shipping";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/pi-day" element={<PiDay />} />
          <Route path="/st-patricks-day" element={<StPatricksDay />} />
          <Route path="/pickup-delivery" element={<PickupDelivery />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/shipping" element={<Shipping />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
