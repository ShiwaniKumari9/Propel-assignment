import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes, Redirect } from "react-router-dom";
import Dashboard from './Dashboard';
import UnmarkFund from './UnmarkFund';
import PortfolioFetch from './PortfolioFetch';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/unmarkfund" component={UnmarkFund} />
          <Route exact path="/portfoliofetch" component={PortfolioFetch} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
