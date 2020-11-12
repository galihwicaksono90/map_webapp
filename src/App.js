import { LocationProvider } from "./contexts/LocationContext";
import MainMap from "./components/MainMap";

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <MainMap />
      </div>
    </LocationProvider>
  );
}

export default App;
