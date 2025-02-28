import { useEffect, useState } from "react";
import { getHeroStatsAPI } from "./api";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { I_HeroStats } from "./types";
import { DefaultHeader, DefaultFooter } from "./components";
import { MainPage } from "./pages";

function App() {
  const [heroStats, setHeroStats] = useState<I_HeroStats[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getHeroStatsAPI();
      setHeroStats(data);
    };
    getData();
  }, []);
  useEffect(() => {
    console.log(heroStats);
  }, [heroStats]);
  return (
    <>
      <DefaultHeader />
      <div className="mainContent">
        <Routes>
        <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <DefaultFooter />
    </>
  );
}

export default App;
