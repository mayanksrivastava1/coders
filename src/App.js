import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Community from './components/Community';
import SponsorComponent from './components/Sponser';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SponsorComponent/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
