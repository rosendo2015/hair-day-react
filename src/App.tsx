import { BrowserRouter, Route, Routes } from "react-router-dom";
import Components from "./Pages/Components";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}
