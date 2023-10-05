import Route from "./router/Route";
import Router from "./router/Router";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Route path="/" components={<Home />}></Route>
      <Route path="/about" components={<About />}></Route>
    </Router>
  );
}

export default App;
