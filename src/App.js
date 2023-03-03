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
          <h1 className="text-center mt-5">Dictionary</h1>
          <Dictionary />
        </main>
        <footer>
          <p className="footer text-center">
            {" "}
            <small>
              🌟 Coded by Isadora and is open-sourced on{" "}
              <a
                href="https://github.com/isataguchi/dictionary-project"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                GitHub
              </a>
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
