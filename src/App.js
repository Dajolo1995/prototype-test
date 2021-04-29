import Login from './views/login/Login'
import Users from './views/users/Users'
import CrearForm from './views/crear/CrearForm'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Login/> } />
        <Route exact path="/users" render={() => <Users/> } />
        <Route exact path="/crear-usuarios" render={() => <CrearForm/> } />
      </Switch>
    </div>
  );
}

export default App;
