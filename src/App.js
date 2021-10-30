// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Shared/Login/Login';
import Header from './pages/Shared/Header/Header';
import Services from './pages/HomePage/Services/Services';
import OurGuides from './pages/HomePage/OurGuides/OurGuides';
import AuthProvider from './contexts/AuthProvider';
import Booking from './pages/Booking/Booking';
import PrivateRoute from './pages/Shared/PrivateRoute/PrivateRoute';
import AddService from './pages/AddService/AddService';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
              <Services />
              <OurGuides />
            </Route>
            <Route path="/home">
              <Home />
              <Services />
              <OurGuides />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/booking/:_id">
              <Booking/>
            </Route>
            <Route path="/addservice">
              <AddService/>
            </Route>
            <PrivateRoute path="/booking">
              <Booking/>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
