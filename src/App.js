import "./App.scss";
import { About, Footer, Header, Highlights, Skills, Work } from "./container";
import { Navbar } from "./components";
function App() {
  return (
    <div className="app">
      <Navbar />

      <Header />
      <About />
      <Work />
      <Skills />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
