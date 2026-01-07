import React from 'react';

import Header from './componenets/Header.jsx';
import Footer from './componenets/Footer.jsx';
import Home from './componenets/Home.jsx';
import Slider from './componenets/Slider.jsx';
import List from './componenets/List.jsx';
import Contactform from './componenets/Contactform.jsx';  
const App = () => {


  return (
    <div>
      <Header />
      <Slider />
      <List />
      <Home />
      <Contactform />
      <Footer />
    </div>
  );


};

export default App;
