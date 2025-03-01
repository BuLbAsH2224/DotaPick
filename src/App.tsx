import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultHeader, DefaultFooter } from "./components";
import { MainPage, SingleHeroPage } from "./pages";

function App() {
  return (
    <>
      <DefaultHeader />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/singleHero/:id" element={<SingleHeroPage />} />
        </Routes>
      </div>
      <DefaultFooter />
    </>
  );
}

export default App;
