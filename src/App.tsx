import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultHeader, DefaultFooter } from "./components";
import { MainPage } from "./pages";

function App() {
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
