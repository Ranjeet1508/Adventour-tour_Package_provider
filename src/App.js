import logo from './logo.svg';
import './App.css';
import TourList from './Components/TourList/TourList';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './Components/Homepage/Navbar';
import Footer from './Components/Homepage/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <AllRoutes />
        <Footer />
    </div>
  );
}

export default App;

