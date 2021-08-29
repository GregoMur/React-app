import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Pages/HomePage';
// import TestPage from './Pages/TestPage'
import UserForms from './Pages/UserForms'
import Header from './Components/Header';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";


function App() {
  return(
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/UserForms">
            <UserForms />
          </Route>
          <Route path="/">
            <HomePage />
            <div className="button">
              <Link to="/UserForms" className="form-button">Заполнить форму</Link>
            </div>
          </Route>
        </Switch>
      </main>
      
    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


