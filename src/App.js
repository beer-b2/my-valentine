import "./App.css";
import Home from "./components/Home";
import { Part1 } from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Part1 />
      <Part2 />
      <Part3 />
      <Footer />
    </div>
  );
}

export default App;
