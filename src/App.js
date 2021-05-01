// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Signup from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import Details from './components/Details';
import Hospital from './components/Hospital';
import College from './components/College';
import Patient from './components/Patient';
import Doctor from './components/Doctor';
import UpdateProfile from './components/UpdateProfile';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{minHeight:"100vh"}}
        >
          <Router>
            <AuthProvider>
              <Route exact path="/detailform" component={Details} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/dashboard/admin" component={Admin} />
              <PrivateRoute exact path="/dashboard/Hospital" component={Hospital} />
              <PrivateRoute exact path="/dashboard/College" component={College} />
              <PrivateRoute exact path="/dashboard/Patient" component={Patient} />
              <PrivateRoute exact path="/dashboard/Doctor" component={Doctor} />
              <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
              <Route exact path="/" component={LandingPage} />
              <Route path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </AuthProvider>
          </Router>
        </Container>
    </>
  );
}

export default App;
