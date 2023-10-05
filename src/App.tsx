<<<<<<< HEAD
function App() {
  return <></>;
=======
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
>>>>>>> d87a9a8a94446d0bab713d983d3c341a72b11534
}

export default App;
