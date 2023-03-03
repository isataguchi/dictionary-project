import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="App-Logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <p className="footer">
            {" "}
            🌟 Coded by Isadora and is open-sourced on{" "}
            <a
              href="https://github.com/isataguchi/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
