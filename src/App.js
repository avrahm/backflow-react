import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import WhatIsBackflow from './Components/WhatIsBackflow/WhatIsBackflow';
import Locations from './Components/Locations/Locations';
import ContactUs from './Components/ContactUs/ContactUs';


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
