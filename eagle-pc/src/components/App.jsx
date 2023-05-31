import React from 'react'
import Show from './Show'
import Offers from './Offers'
import Offcanvas from './Offcanvas'
import Cards from './Cards'
import Contact from './Contact'
import Gpu from './GPU'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

export default function App() {
  return (
    <div>
      <Show />
      <Offers />
      <Offcanvas />
      <Cards />
      <Contact />
      <Gpu />
    </div>
  );
}
