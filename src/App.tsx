import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultHeader, DefaultFooter } from "./components";
import { MainPage, NotFoundPage, SingleHeroPage,HeroRoulettePage } from "./pages";
import { useQuery } from "@tanstack/react-query";
import { getHeroesStatsAPI, getItemsAPI } from "./api";
import { IHeroStats, IItems } from "./types";

function App() {
  const { data: heroesStatsData } = useQuery<IHeroStats[]>({
    queryKey: ["heroesStats"],
    queryFn: getHeroesStatsAPI,
  });

  const { data: itemsData } = useQuery<IItems>({
    queryKey: ["itemsInfo"],
    queryFn: getItemsAPI,
  });
  
  return (
    <>
      <DefaultHeader />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<MainPage heroesStats={heroesStatsData} />} />
          <Route
            path="/singleHero/:id"
            element={<SingleHeroPage heroesStats={heroesStatsData} items={itemsData}/>}
          />
          <Route path="/heroRoulette" element={<HeroRoulettePage heroesStats={heroesStatsData}/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <DefaultFooter />
    </>
  );
}

export default App;
