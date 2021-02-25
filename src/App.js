import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CocktailPage from "./pages/CocktailPage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar className="App"></Navbar>
      <Switch>
        <Route path="/category/:id" component={CocktailPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
