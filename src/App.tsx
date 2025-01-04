import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import GaragesPainting from "./pages/services/GaragesPainting";
import FacadesPainting from "./pages/services/FacadesPainting";
import CommunitiesPainting from "./pages/services/CommunitiesPainting";
import OfficePainting from "./pages/services/OfficePainting";
import CommercialPainting from "./pages/services/CommercialPainting";
import IndustrialPainting from "./pages/services/IndustrialPainting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/servicios/garajes" element={<GaragesPainting />} />
              <Route path="/servicios/fachadas" element={<FacadesPainting />} />
              <Route path="/servicios/comunidades" element={<CommunitiesPainting />} />
              <Route path="/servicios/oficinas" element={<OfficePainting />} />
              <Route path="/servicios/locales" element={<CommercialPainting />} />
              <Route path="/servicios/naves" element={<IndustrialPainting />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;