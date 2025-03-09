import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultHeader, DefaultFooter } from "./components";
import { MainPage, NotFoundPage, SingleHeroPage } from "./pages";
import { useQuery } from "@tanstack/react-query";
import { getHeroesStatsAPI } from "./api";
import { IHeroStats } from "./types";

function App() {
  const { data } = useQuery<IHeroStats[]>({
    queryKey: ['heroesStats'],
    queryFn: getHeroesStatsAPI
  });

  return (
    <>
      <DefaultHeader />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/singleHero/:id" element={<SingleHeroPage heroesStats={data}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <DefaultFooter />
    </>
  );
}

export default App;
