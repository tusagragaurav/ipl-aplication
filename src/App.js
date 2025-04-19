import "./styles.css";
import Header from "./components/Header";
import Hero from ".//components/hero";
import HomePage from "./page/HomePage";
import { BrowserRouter as Router, Routes, Rout } from "react-router-dom";
import { Route } from "lucide-react";
export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
