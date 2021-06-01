import { useState, useEffect} from 'react'
import AllBikes from "./screens/AllBikes/AllBikes";
import BikeDetails from "./screens/BikeDetails/BikeDetails";
import BikeEdit from "./screens/BikeEdit/BikeEdit";
import CreateBike from "./screens/CreateBike/CreateBike";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Logout from "./screens/Logout/Logout";
import SignUp from "./screens/SignUp/SignUp";
import {verifyUser} from "./services/users"
import { Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/all-bikes" component={AllBikes} />
        <Route path="/create-bike" component={CreateBike} />
        <Route exact path="/bikes/:id" component={BikeDetails} />
        <Route path="/bikes/:id/edit" component={BikeEdit} />
        <Route path="/log-in" component={Login} />
        <Route path="/log-out" component={Logout} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
