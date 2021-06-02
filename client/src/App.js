import { useState, useEffect } from "react";
import AllBikes from "./screens/AllBikes/AllBikes";
import BikeDetails from "./screens/BikeDetails/BikeDetails";
import BikeEdit from "./screens/BikeEdit/BikeEdit";
import CreateBike from "./screens/CreateBike/CreateBike";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Logout from "./screens/Logout/Logout";
import SignUp from "./screens/Sign-Up/SignUp";
import { verifyUser } from "./services/users";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
       
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/log-in">
          <Login setUser={setUser} />
        </Route>
        <Route path="/log-out" component={Logout}>
          <Logout setUser={setUser} />
        </Route>
        <Route exact path="/all-bikes" component={AllBikes}>
          <AllBikes user={user} />
        </Route>
        <Route path="/create-bike" component={CreateBike}>
          {user ? <CreateBike user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/bikes/:id" >
          <BikeDetails user={user} />
        </Route>
        <Route path="/bikes/:id/edit" component={BikeEdit}>
          {user ? <BikeEdit user={user} /> : <Redirect to='/' />}
        </Route>

      </Switch>
    </div>
  );
}

export default App;
