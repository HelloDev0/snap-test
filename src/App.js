
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Start from './component/Start';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from './component/Form';
import TakePic from './component/TakePic';
import Instruction from './component/Instruction';
import RecordVideo from './component/RecordVideo';


function App() {
  return (
    
    
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={()=><Start/>}/>
      <Route exact path="/login" component={()=><Login/>}/>
      <Route exact path="/form" component={()=><Form/>}/>
      <Route exact path="/snap" component={()=><TakePic/>}/>
      <Route exact path="/instruction" component={()=><Instruction/>}/>
      <Route exact path="/recordvideo" component={()=><RecordVideo/>}/>
    </Switch>
    
    </Router>
    
  );
}

export default App;
