
import './App.css';
import Header from './components/Header';
// import Login from './pages/LoginPage';
import {StartPage, LoginPage,DetailsFormPage,
  IdentityPage,InstructionPage,RecordVideoPage,TestResultPage,
  FinishPage,FinalPage} from './pages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (


    <Router>
      <Header />
      <Switch >
        {/* <main> */}
        <Route exact path="/" component={() => <StartPage />} />
        <Route exact path="/login" component={() => <LoginPage />} />
        <Route exact path="/detailsform" component={() => <DetailsFormPage />} />
        <Route exact path="/identity" component={() => <IdentityPage />} />
        <Route exact path="/instruction" component={() => <InstructionPage />} />
        <Route exact path="/recordvideo" component={() => <RecordVideoPage />} />
        <Route exact path="/testresult" component={() => <TestResultPage />} />
        <Route exact path="/finish" component={() => <FinishPage />} />
      <Route exact path="/final" component={() => <FinalPage />} />
      {/* </main> */}
      </Switch>

    </Router>

  );
}

export default App;
