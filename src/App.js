import './App.css';
import CallToAction from './Components/CallToAction';
import Description from './Components/Description/Description';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import axios from "axios";
import { LinkProvider } from './Context/Context';

const baseURL = 'https://api.shrtco.de/v2/';
axios.defaults.baseURL = baseURL;

function App() {
  return (
   <LinkProvider>
    <div className="App">
      <Nav />
      <Hero />
      <Form />
      <Description />
      <CallToAction />
      <Footer />
    </div>
    </LinkProvider>
  );
}

export default App;
