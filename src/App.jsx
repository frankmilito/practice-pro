import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';
import Hello from './components/Hello';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
      <Hello/>
    </>
  );
}

export default App;
