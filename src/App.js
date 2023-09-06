import "./App.css";
import Header from "./headerF/header";
import About from "./aboutF/about";
import Skills from "./skillsF/skills";
import Portfolio from "./profile/portfolio";
import Footer from "./footerF/footer";
function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
