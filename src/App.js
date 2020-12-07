import { useState } from "react";
import { LocationProvider } from "./contexts/LocationContext";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LocationSelector from "./components/LocationSelector";
import MainMap from "./components/MainMap";

const ErrorPage = () => <h1>404 not Found</h1>;
function App() {
  // const [openDetails, setOpenDetails] = useState(false);
  const [locationSelectorShow, setLocationSelectorShow] = useState(true);
  const locationArray = ["dieng", "wadaslintang"];

  const checkIfLocationExist = (location) => {
    if (locationArray.includes(location)) return true;
  };

  return (
    <LocationProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <LocationSelector
                locationSelectorShow={locationSelectorShow}
                setLocationSelectorShow={setLocationSelectorShow}
              />
            </Route>
            <Route
              path="/location/:location"
              render={({ match }) => {
                if (checkIfLocationExist(match.params.location)) {
                  return <MainMap match={match} />;
                } else {
                  return <ErrorPage />;
                }
              }}
            />
            <Route path="/" component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </LocationProvider>
  );
}

export default App;
