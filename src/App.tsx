import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import ApartmentsPainting from "./pages/services/ApartmentsPainting";
import CommercialPainting from "./pages/services/CommercialPainting";
import CommunitiesPainting from "./pages/services/CommunitiesPainting";
import FacadesPainting from "./pages/services/FacadesPainting";
import GaragesPainting from "./pages/services/GaragesPainting";
import HousesPainting from "./pages/services/HousesPainting";
import IndustrialPainting from "./pages/services/IndustrialPainting";
import OfficePainting from "./pages/services/OfficePainting";
import RestaurantsPainting from "./pages/services/RestaurantsPainting";
import TownhousesPainting from "./pages/services/TownhousesPainting";
import VillasPainting from "./pages/services/VillasPainting";

function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/servicios/pintura-apartamentos" element={<ApartmentsPainting />} />
              <Route path="/servicios/pintura-comercial" element={<CommercialPainting />} />
              <Route path="/servicios/pintura-comunidades" element={<CommunitiesPainting />} />
              <Route path="/servicios/pintura-fachadas" element={<FacadesPainting />} />
              <Route path="/servicios/pintura-garajes" element={<GaragesPainting />} />
              <Route path="/servicios/pintura-casas" element={<HousesPainting />} />
              <Route path="/servicios/pintura-industrial" element={<IndustrialPainting />} />
              <Route path="/servicios/pintura-oficinas" element={<OfficePainting />} />
              <Route path="/servicios/pintura-restaurantes" element={<RestaurantsPainting />} />
              <Route path="/servicios/pintura-adosados" element={<TownhousesPainting />} />
              <Route path="/servicios/pintura-chalets" element={<VillasPainting />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;