import './App.css';

import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';

import { AuthProvider } from './context/AuthContext';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
