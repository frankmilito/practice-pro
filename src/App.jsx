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
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
