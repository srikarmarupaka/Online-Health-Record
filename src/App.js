// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Signup from './components/LoginSignup';
import AuthProvider from './contexts/AuthContext'

function App() {
  return (
    <>
      {/* <h1>Hello</h1> */}
      {/* <Navbar /> */}
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center">
          <Signup />
        </Container>
      </AuthProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
