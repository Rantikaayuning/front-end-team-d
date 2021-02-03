import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
        <Navbar />
          <Route exact path='/' component={HomePage}/>
        <Footer />
    </Router>
  );
}

export default App;
