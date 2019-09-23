import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import AllBarChart from './charts/AllBarChart';
// import BarChart from './XBarChart';
import ClusterChart2018 from './charts/ClusterChart2018';
import ClusterChart2019 from './charts/ClusterChart2019';
import Compare from './charts/Compare';
import Map from './charts/Map';
// import BarChartTest from './sandbox/BarChartTest';
import StackedChartSB from './sandbox/StackedChartSB';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/nyc-permits-viz' exact={true} component={Home} />
        <Route path='/about' exact={true} component={About} />
        {/* <Route path='/barchart' exact={true} component={BarChart} /> */}
        <Route path='/2018' exact={true} component={ClusterChart2018} />
        <Route path='/2019' exact={true} component={ClusterChart2019} />
        <Route path='/comparison' exact={true} component={Compare} />
        <Route path='/map' exact={true} component={Map} />
        <Route path='/barchart-test' exact={true} component={AllBarChart} />
        {/* <Route path='/clusterchart-test' exact={true} component={ClusterChart2018} /> */}
        <Route path='/stackedchart-sb' exact={true} component={StackedChartSB} />
      </Switch>
    </Router>
  );
}

export default App;
