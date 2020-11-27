import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import WhatIsBackflow from './Pages/WhatIsBackflow/WhatIsBackflow';
import Locations from './Pages/Locations/Locations';
import ContactUs from './Pages/ContactUs/ContactUs';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/whatisbackflow">
          <WhatIsBackflow />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
