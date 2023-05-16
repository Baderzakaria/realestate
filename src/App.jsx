import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Values/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetSarted/GetStarted";
import Footer from "./components/Footer/Footer";

/**
 * Renders the App component. This component is used to display hero and header in the header area of the game.
 *
 *
 * @return { JSX } The component rendered as a string to allow styling of the component and its children
 */
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
