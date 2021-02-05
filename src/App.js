import "./App.css";
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
}

export default App;
