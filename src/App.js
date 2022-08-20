import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import IMDB from "./Pages/IMDB/IMDB";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Container >
          <SimpleBottomNavigation />

          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/series" component={Series} />
            <Route path="/IMDb" component={IMDB} />


            <Route path="/search" component={Search} />
          </Switch>

        </Container>
        
      </div>
      

    </BrowserRouter>


  );
}

export default App;
