// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import ProductDetailsPage from "./components/ProductDetailsPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
      </Routes>
  );
}

export default App;
