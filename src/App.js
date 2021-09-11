import logo from './_assets/images/png/logo.png';
import Header from './_components/Header_pc.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>こういうディレクトリ依存でファイル挿入とかする時</p>
        <p>LateXくん触ってて良かった感あるね</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
