// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Signup from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import UpdateProfile from './components/UpdateProfile';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <>
      {/* <h1>Hello</h1> */}
        {/* <Navbar /> */}
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{minHeight:"100vh"}}
        >
          <Router>
          <AuthProvider>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            </AuthProvider>
          </Router>
        </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
