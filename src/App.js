import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contact />
      <Comments />
    </div>
  );
}

export default App;
