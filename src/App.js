import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import {Font} from './assets/styles/styled';

function App() {
  return (
      <Router>
        <Header />
        <Font />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/sign-up' component={SignUp}/>
            {/* <Route path='/log-in' component={LogIn}/> */}
            {/* <Route path='/detail-page' component={DetailPage}/>
            <Route path='/detail-page-overview' component={Overview}/>
            <Route path='/detail-page-review' component={Review}/>
            <Route path='/profile-page' component={ProfilePage}/> */}
          </Switch>
        {/* <Footer /> */}
      </Router>
  );
}

export default App;
