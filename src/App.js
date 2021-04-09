import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="mp4/bg2.mp4" type="video/mp4" />
        </video>
        <Route
          exact
          path="https://axeian.github.io/QC-Interest-Group/"
          component={Landing}
        />
        <Route
          path="https://axeian.github.io/QC-Interest-Group/about"
          component={About}
        />
      </div>
    </Router>
  );
}

export default App;
