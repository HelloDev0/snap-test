
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Start from './component/Start';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    
    
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={()=><Start/>}/>
      <Route exact path="/login" component={()=><Login/>}/>
    </Switch>
    
    </Router>
    
  );
}

export default App;
