import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Authprovider from './Context/Authprovider';
import Bokking from './components/Booking/Booking/Bokking';

import Confirmbooking from './components/Confirmbooked/Confirmbooking';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Addservice from './components/Addservice/Addservice';
import MyOrder from './components/Order/MyOrder';
import Myorders from './components/Myorder/Myorders';
import Pagenotfound from './components/Notfoundpage/Pagenotfound';
import Traveloffer from './components/Offer/Traveloffer';
import Updatedorder from './components/Update/Updatedorder';






function App() {
  return (
    <div>
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>

            </Route>
            <PrivateRoute path="/addservice">
              <Addservice></Addservice>

            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/booking">
              <Bokking></Bokking>
            </Route>
            <PrivateRoute path="/confirm/:bokkingId">
              <Confirmbooking></Confirmbooking>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/myorders">
              <Myorders></Myorders>
            </Route>
            <Route path="/offer">
              <Traveloffer></Traveloffer>
            </Route>
            <Route path="/update/:bokkingId">
              <Updatedorder></Updatedorder>
            </Route>

            <Route exact path="*">
              <Pagenotfound></Pagenotfound>
            </Route>



          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>

    </div>
  );
}

export default App;
