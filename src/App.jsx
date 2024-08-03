import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import DivsionPage from "./components/DivsionPage.jsx";
import DivisionPostPage from "./components/DivisionPostPage.jsx";
import MessPage from "./components/MessPage.jsx";
import Home from "./components/Home.jsx";
import CouncilPage from "./components/CouncilPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mess" element={<MessPage />} />
          <Route path="/council" element={<CouncilPage />} />
          <Route path="/:division/" element={<DivsionPage />} />
          <Route path="/:division/:postID" element={<DivisionPostPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
