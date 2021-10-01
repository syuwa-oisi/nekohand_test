import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './_components/Header/Header_pc.js';
import UpperMenu from './_components/UpperMenu/UpperMenu_pc.js';
import Footer from './_components/Footer/Footer'
import Home from './_pages/Home/Home.js'
import CardList from './_pages/Card/CardList/CardList.js'
import CardPrice from './_pages/Card/CardPrice/CardPrice.js'
import CardSearch from './_pages/Card/CardSearch/CardSearch.js'
import CardView from './_pages/Card/CardView/CardView.js'
import Reccomend from './_pages/Card/Reccomend/Reccomend.js';
import DeckList from './_pages/Deck/DeckList/DeckList.js'
import DeckMake from './_pages/Deck/DeckMake/DeckMake.js'
import DeckSearch from './_pages/Deck/DeckSearch/DeckSearch.js'
import DeckView from './_pages/Deck/DeckView/DeckView.js'
import NotFound from './_pages/NotFound/NotFound.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="fixed">
        <Header/>
        <UpperMenu/>
      </div>
      <div className="content">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/CardSearch">
          <CardSearch />
        </Route>
        <Route path="/CardView">
          <CardView />
        </Route>
        <Route path="/CardPrice">
          <CardPrice />
        </Route>
        <Route path="/CardList">
          <CardList />
        </Route>
        <Route path="/CardReccomend">
          <Reccomend />
        </Route>
        <Route path="/DeckSearch">
          <DeckSearch />
        </Route>
        <Route path="/DeckView">
          <DeckView />
        </Route>
        <Route path="/DeckList">
          <DeckList />
        </Route>
        <Route path="/DeckMake">
          <DeckMake />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
