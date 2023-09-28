import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
