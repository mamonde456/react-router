import Route from "./router/Route";
import Router from "./router/Router";
import Home from "./components/Home";
import About from "./components/About";
import Routes from "./router/Routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" components={<Home />}></Route>
        <Route path="/about" components={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
