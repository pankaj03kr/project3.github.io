import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./nav";
import Main from "./main";
import Foot from "./footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Foot/>
    </div>
  );
}

export default App;
