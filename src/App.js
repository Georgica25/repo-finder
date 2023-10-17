import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <div className="container mx-auto px-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
