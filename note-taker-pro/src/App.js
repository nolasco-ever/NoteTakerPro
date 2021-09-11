import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import components
import LandingPage from './components/landingPage';

//import components
import Header from './components/header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
