import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import DivsionPage from "./components/DivsionPage.jsx";
import DivisionPostPage from "./components/DivisionPostPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/:division/" element={<DivsionPage />} />
          <Route path="/:division/:postID" element={<DivisionPostPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
