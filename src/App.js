import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Slider from "./components/Slider"
import Virtual from "./components/Virtual"
import Products from './components/Products'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
