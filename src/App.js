import './App.css';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';

function App() {
  return (
    <Router>
      <>
        <nav className='navigation'>
          <Link to="/SignIn">Sign In</Link>
          <Link to="/signUp">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;