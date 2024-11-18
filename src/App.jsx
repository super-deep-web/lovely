import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SecretPageProvider } from "./components/context/SecretPageProvider";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { LetterPage } from "./pages/LetterPage";
import { MusicPage } from "./pages/MusicPage";
import { SecretPage } from "./pages/SecretPage";

function App() {
  return (
    <Router>
      <SecretPageProvider>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/letter" element={<LetterPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/secret" element={<SecretPage />} />
          </Routes>
          <Footer />
        </div>
      </SecretPageProvider>
    </Router>
  );
}

export default App;
