import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DetailMoviePage from './Pages/DetailMoviePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/detail-movie/:id' component={DetailMoviePage}/>
      </Switch>   
      <Footer />
    </Router>
  );
}

export default App;
