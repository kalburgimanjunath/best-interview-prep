import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/cart";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/*" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
