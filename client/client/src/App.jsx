import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./pages/WishlistContext";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Home from "./pages/Home";
import CouchSection from "./pages/CouchSection";
import ChairSection from "./pages/ChairSection";
import LightSection from "./pages/LightSection";
import StorageSection from "./pages/StorageSection";
import BedSection from "./pages/BedSection";
import ClockSection from "./pages/ClockSection";
import ModernBathSection from "./pages/ModernBathSection";
import InteriorSection from "./pages/InteriorSection";
import CrockerySection from "./pages/CrockerySection";
import Wishlist from "./pages/Wishlist";
import { CartProvider } from "./pages/CartContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sofa" element={<CouchSection />} />
          <Route path="/chair" element={<ChairSection />} />
          <Route path="/light" element={<LightSection />} />
          <Route path="/storage" element={<StorageSection />} />
          <Route path="/bed" element={<BedSection />} />
          <Route path="/clock" element={<ClockSection />} />
          <Route path="/interior" element={<InteriorSection />} />
          <Route path="/bath" element={<ModernBathSection />} />
          <Route path="/crockery" element={<CrockerySection />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

        <Location />
      </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;