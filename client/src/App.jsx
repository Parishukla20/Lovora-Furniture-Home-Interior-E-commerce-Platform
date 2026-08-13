import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CouchSection from "./pages/CouchSection";
import ChairSection from "./pages/ChairSection";
import LightSection from "./pages/LightSection";
import StorageSection from "./pages/StorageSection";
import DoorSection from "./pages/DoorSection";
import BedSection from "./pages/BedSection";
import ClockSection from "./pages/ClockSection";
import ShelvesSection from "./pages/ShelvesSection";
import ModernBathSection from "./pages/ModernBathSection";
import InteriorSection from "./pages/InteriorSection";
import CrockerySection from "./pages/CrockerySection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sofa" element={<CouchSection />} />
        <Route path="/chair" element={<ChairSection/>} />
        <Route path="/light" element={<LightSection/>} />
        <Route path="/storage" element={<StorageSection/>} />
        <Route path="/door" element={<DoorSection/>} />
        <Route path="/bed" element={<BedSection/>} />
        <Route path="/clock" element={<ClockSection/>}/>
        <Route path="/shelves" element={<ShelvesSection/>}/>
        <Route path="/interior" element={<InteriorSection/>} />
        <Route path="/bath" element={<ModernBathSection/>} />
        <Route path="/crockery" element={<CrockerySection/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;