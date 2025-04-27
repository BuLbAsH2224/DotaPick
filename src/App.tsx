import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultHeader, DefaultFooter } from "./components";
import { MainPage, NotFoundPage, SingleHeroPage,HeroRoulettePage } from "./pages";
import { useQuery } from "@tanstack/react-query";
import { getAbilities, getHeroAbilities  } from "./api";
import { IAbilities, IHeroAbilities } from "./types";

function App() {



  const { data: abilitiesData } = useQuery<IAbilities>({
    queryKey: ["abilitiesInfo"],
    queryFn: getAbilities,
  });

  const { data: heroAbilitiesData } = useQuery<IHeroAbilities>({
    queryKey: ["heroAbilitiesInfo"],
    queryFn: getHeroAbilities,
  });


  return (
    <>
    
      <DefaultHeader />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route
            path="/singleHero/:id"
            element={<SingleHeroPage abilitiesData={abilitiesData} heroAbilitiesData={heroAbilitiesData}/>}
          />
          <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
      </div>
      <DefaultFooter />
    </>
  );
}

export default App;
//  <Route path="/heroRoulette" element={<HeroRoulettePage heroesStats={heroesPreviewData}/>}/>