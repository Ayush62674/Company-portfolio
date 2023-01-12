import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Pricing from './Components/Pricing/Pricing';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/><br />
      <Home/><br />
      <Registration/><br/>
      <Services/><br />
      <Pricing/><br />
      <Footer/>
    </div>
  );
}

export default App;
