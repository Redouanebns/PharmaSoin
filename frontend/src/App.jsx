import About from "./Components/about/About";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />;
    </Routes>
  );
}
