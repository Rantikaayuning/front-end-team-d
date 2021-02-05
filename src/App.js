import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DetailMoviePage from './pages/DetailMoviePage';
import UserProfilePage from './pages/UserProfilePage';
import UserSettingPage from './pages/UserSettingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/detail-movie/:id' component={DetailMoviePage} />
        <Route exact path='/user-profile-page' component={UserProfilePage} />
        <Route exact path='/user-setting-page' component={UserSettingPage} />
      </Switch>
      <Footer />
    </Router>
  );
=======

function App() {
  return <div className="App"></div>;
>>>>>>> 537f7b634065df528daa3310319275ecaefe9b36
}

export default App;
