import "./App.scss";
import { About, Footer, Header, Contact, Skills, Work } from "./container";
import { Navbar } from "./components";
function App() {
  return (
    <div className="app">
      <Navbar />

      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
