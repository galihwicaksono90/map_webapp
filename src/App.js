import { useContext } from "react";
import { LocationContext } from "./contexts/LocationContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocationSelector from "./components/LocationSelector";
import MainMap from "./components/MainMap";
import Details from "./components/Details";

const ErrorPage = () => <h1>404 not Found</h1>;

function App() {
  const { locationState } = useContext(LocationContext);
  const { currentAttraction, availableAttractions } = locationState;

  const checkIfLocationExist = (location) => {
    const locationArray = ["dieng", "wadaslintang", "kertek"];
    if (locationArray.includes(location)) return true;
  };

  const checkIfAttractionExist = (attraction) => {
    if (
      availableAttractions.includes(attraction) &&
      Object.keys(currentAttraction).length !== 0
    )
      return true;
  };

  return (
    // <LocationProvider>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LocationSelector />
          </Route>
          <Route
            exact
            path="/:location"
            render={({ match }) => {
              if (checkIfLocationExist(match.params.location)) {
                return <MainMap match={match} />;
              } else {
                return <ErrorPage />;
              }
            }}
          />
          <Route
            exact
            path="/:location/:attraction/"
            render={({ match }) => {
              if (checkIfAttractionExist(match.params.attraction)) {
                return <Details match={match} />;
              } else {
                return <ErrorPage />;
              }
            }}
          />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
    // </LocationProvider>
  );
}

export default App;
