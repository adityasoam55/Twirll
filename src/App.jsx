// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import ProductModal from "./components/ProductModal";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/product/:productId" element={<ProductModal />} />
      </Routes>
  );
}

export default App;
