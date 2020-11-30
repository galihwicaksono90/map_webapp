import { useState } from "react";
import { LocationProvider } from "./contexts/LocationContext";
import MainMap from "./components/MainMap";
import Details from "./components/Details";
// import LanguageSelector from "./components/LanguageSelector";
// import GallerySmall from "./components/GallerySmall";

function App() {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <LocationProvider>
      <div className="App">
        <Details openDetails={openDetails} setOpenDetails={setOpenDetails} />
        <MainMap setOpenDetails={setOpenDetails} />
        {/* <LanguageSelector /> */}
      </div>
    </LocationProvider>
  );
}

export default App;
