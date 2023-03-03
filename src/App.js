import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <a className="btn btn-primary" href="/">
        Button
      </a>
    </div>
  );
}

export default App;
