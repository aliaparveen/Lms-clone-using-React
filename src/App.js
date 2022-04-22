import "./App.css";
import Cardbody from "./components/CardBody/Cardbody";

import Footer from "./components/Footer/Footer";

import Route from "./components/Routes/Routes.js";

function App() {
  return (
    <div className="App">
      <Route/>
      <Cardbody/>
      
      <Footer />
    </div>
  );
}

export default App;
