import { Footer, Header } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
