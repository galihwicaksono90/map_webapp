import { useState } from "react";
import { LocationProvider } from "./contexts/LocationContext";
import LocationSelector from "./components/LocationSelector";
import MainMap from "./components/MainMap";
import Details from "./components/Details";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const [openDetails, setOpenDetails] = useState(false);
  const [map, setMap] = useState("dieng");

  return (
    <LocationProvider>
      <div className="App">
        <LocationSelector map={map} setMap={setMap} />
        <MainMap openDetails={openDetails} setOpenDetails={setOpenDetails} />
        <Details openDetails={openDetails} setOpenDetails={setOpenDetails} />
        <LanguageSelector />
      </div>
    </LocationProvider>
  );
}

export default App;
