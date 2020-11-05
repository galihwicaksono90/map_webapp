import React from "react";
import { LocationProvider } from "./contexts/LocationContext";
import MainMap from "./components/MainMap";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <MainMap />
        <Sidebar />
      </div>
    </LocationProvider>
  );
}

export default App;
