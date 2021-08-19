import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Frontpage from './components/Frontpage/Frontpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemsList from './components/ItemsList/ItemsList';
import CartPage from './components/CartPage/CartPage';
import ItemDetail from './components/ItemsList/ItemDetail';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/aboutus">
        </Route>
        <Route path="/products/:id">
          <ItemDetail />
        </Route>
        <Route path="/products">
          <ItemsList />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/bestsellers">
          <ItemsList />
        </Route>
        <Route path="/">
          <Frontpage />
        </Route>
      </Switch>

      
    </Router>



  );
}

export default App;
