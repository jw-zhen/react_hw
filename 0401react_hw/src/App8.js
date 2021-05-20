import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counter from'counter.js';
import Form from 'From.js'
import React,{useState} from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const [formDone, setFormDone] = useState(false)
  return (
    <Router>
      <div className="App">
        <p>react router example</p>
        <ul>
          <li><Link to="counter">Counter</Link></li>
          <li><Link to="form">Form</Link></li>
        </ul>
        <Switch>
        <Route path='/counter' component={Counter}/>
          <Route path='/form' component={Form}/>
          
        </Switch>
      </div>
    </Router>
    
  );
}
export default App;