// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/product/:productId" element={<ProductModal />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
