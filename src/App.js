import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import LocationSelector from "./components/LocationSelector";
import MainMap from "./components/MainMap";
import Footer from "./components/Footer";

const ErrorPage = () => <h1>404 not Found</h1>;

function App() {
  const checkIfLocationExist = (location) => {
    const locationArray = ["dieng", "wadaslintang", "kertek"];
    if (locationArray.includes(location)) return true;
  };

  return (
    <div className="App">
      <HashRouter>
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
          <Route path="/" component={ErrorPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
