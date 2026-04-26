import { Routes, Route, Link } from 'react-router-dom';
import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';
import Hello from './components/Hello';

function Home() {
  return (
    <>
      <MainContent />
      <Hello />
    </>
  );
}

function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>This is a dummy About page for testing React Router.</p>
    </main>
  );
}
function Aws() {
  return (
    <main>
      <h1>About AWS</h1>
      <p>You can login at <a href="">www.aws.com</a> to get more info about this amazing project.</p>
    </main>
  );
}

function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>This is a dummy Contact page for testing React Router.</p>
    </main>
  );
}

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="GitHub Actions Logo" />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to='/aws'>Aws</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Aws />} />
        <Route path="/aws" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
