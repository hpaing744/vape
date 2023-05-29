import React from "react";
import Best from "./components/Best";
import Cards from "./components/Cards";
import Devices from "./components/Devices";
import Disposable from "./components/Disposable";
import Footer from "./components/Footer";
import Member from "./components/Member";
import Navbar from "./components/Navbar";
import NewReleased from "./components/NewReleased";
import Pods from "./components/Pods";
import Slider from "./components/Slider";

const App=()=> {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Best />
      <Member />
      <NewReleased />
      <Cards />
      <Devices />
      <Pods/>
      <Disposable/>
      <Footer />
    </div>
  );
}

export default App;
