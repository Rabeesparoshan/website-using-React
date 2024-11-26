import react from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';

function App(){
  return(
    <div className="root">
     <Navbar/>
      <Hero/>
      <Content/>
    </div>
  );
}
export default App;