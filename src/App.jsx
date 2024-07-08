import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <Router>
      <div className="p-5 md:p-10 lg:p-16 xl:p-20">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
