import Index from "./pages/Index";
import Butiker from "./pages/Butiker";
import Inlämning from "./pages/Inlämning";
import Franchise from "./pages/Franchise";
import Omoss from "./pages/Omoss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route path="/Butiker" element={<Butiker/>} />
          <Route path="/Inlämning" element={<Inlämning/>} />
          <Route path="/Franchise" element={<Franchise/>} />
          <Route path="/Omoss" element={<Omoss/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
