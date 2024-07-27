import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/cart";
import ProductDetail from "./components/features/product-detail/index";
import Aboutus from "./pages/aboutus";
import Dashboard from "./pages/dashboard";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (isLoggedIn) {
    return (
      <main>
        <Routes>
          <Route path="/dashboard/" element={<Dashboard />}></Route>
          <Route path="/dashboard/:id" element={<Dashboard />}></Route>
        </Routes>
        ;
      </main>
    );
  } else {
    return (
      <main>
        <Header />
        <Routes>
          <Route path="/dashboard/" element={<Dashboard />}></Route>
          <Route path="/dashboard/:id" element={<Dashboard />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/*" exact element={<Home />}></Route>
        </Routes>
        <Footer />
      </main>
    );
  }
}

export default App;
