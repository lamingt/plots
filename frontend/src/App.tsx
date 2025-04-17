import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Sanity from "./pages/Sanity";
import Accuracy from "./pages/Accuracy";
import Reward from "./pages/Reward";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sanity" key="sanity" element={<Sanity />} />
        <Route path="/accuracy" key="accuracy" element={<Accuracy />} />
        <Route path="/reward" key="reward" element={<Reward />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
