import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ContactPage from "./Components/Contact/Contact";

function App() {
  return (
    <div className="MainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
