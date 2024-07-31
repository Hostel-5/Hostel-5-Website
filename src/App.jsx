import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import DivsionPage from "./components/DivsionPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/:division" element={<DivsionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
