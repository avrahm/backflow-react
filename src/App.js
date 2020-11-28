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
    <div>
      <NavBar />

      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/whatisbackflow" component={WhatIsBackflow} />
        <Route path="/locations" component={Locations} />
        <Route path="/contactus" component={ContactUs} />
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
