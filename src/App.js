import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Services from './Components/Services';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
