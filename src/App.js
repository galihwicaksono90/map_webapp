import { useState } from "react";
import { LocationProvider } from "./contexts/LocationContext";
import LocationSelector from "./components/LocationSelector";
import MainMap from "./components/MainMap";
import LoadingSpinner from "./components/LoadingSpinner";
import Details from "./components/Details";
// import LanguageSelector from "./components/LanguageSelector";

function App() {
  const [openDetails, setOpenDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [locationSelectorShow, setLocationSelectorShow] = useState(true);

  return (
    <LocationProvider>
      <div className="App">
        <LocationSelector
          setIsLoading={(state) => setIsLoading(state)}
          locationSelectorShow={locationSelectorShow}
          setLocationSelectorShow={setLocationSelectorShow}
        />
        <MainMap
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
          isLoading={isLoading}
        />
        <Details openDetails={openDetails} setOpenDetails={setOpenDetails} />
      </div>
    </LocationProvider>
  );
}

export default App;
