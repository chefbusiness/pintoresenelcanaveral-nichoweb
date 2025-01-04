import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

// Páginas de servicios específicos
import GaragesPainting from './pages/services/GaragesPainting';
import FacadesPainting from './pages/services/FacadesPainting';
import CommunitiesPainting from './pages/services/CommunitiesPainting';
import HousesPainting from './pages/services/HousesPainting';
import ApartmentsPainting from './pages/services/ApartmentsPainting';
import VillasPainting from './pages/services/VillasPainting';
import TownhousesPainting from './pages/services/TownhousesPainting';
import OfficePainting from './pages/services/OfficePainting';
import CommercialPainting from './pages/services/CommercialPainting';
import IndustrialPainting from './pages/services/IndustrialPainting';
import RestaurantsPainting from './pages/services/RestaurantsPainting';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      
      {/* Rutas de servicios específicos */}
      <Route path="/servicios/garajes" element={<GaragesPainting />} />
      <Route path="/servicios/fachadas" element={<FacadesPainting />} />
      <Route path="/servicios/comunidades" element={<CommunitiesPainting />} />
      <Route path="/servicios/casas" element={<HousesPainting />} />
      <Route path="/servicios/pisos" element={<ApartmentsPainting />} />
      <Route path="/servicios/chalets" element={<VillasPainting />} />
      <Route path="/servicios/adosados" element={<TownhousesPainting />} />
      <Route path="/servicios/oficinas" element={<OfficePainting />} />
      <Route path="/servicios/locales" element={<CommercialPainting />} />
      <Route path="/servicios/naves" element={<IndustrialPainting />} />
      <Route path="/servicios/restaurantes" element={<RestaurantsPainting />} />
    </Routes>
  );
};

export default AppRoutes;