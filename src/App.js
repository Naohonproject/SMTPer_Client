import { useContext } from "react";

import "./App.css";
import NavBar from "./components/Nav/NavBar/NavBar";
import Title from "./components/Slogan/Slogan";
import Footer from "./components/Footer/Footer";

import MainForm from "./components/MainForm/MainForm";
import { NavBarContext } from "./context/NavBarContext";
import AboutModal from "./components/AboutModal/AboutModal";
import About from "./components/AboutModal/About/About";
import Disclaimer from "./components/AboutModal/Disclaimer/Disclaimer";

function App() {
  const { ModalOpen } = useContext(NavBarContext);
  const { setIsDropdownHide, setShowItemId } = useContext(NavBarContext);
  return (
    <div
      onClick={() => {
        setIsDropdownHide((prev) => !prev);
        setShowItemId(0);
      }}
      className="App"
    >
      <NavBar />
      <Title />
      {ModalOpen === "disclaimer" && (
        <AboutModal mainContent={<Disclaimer />} headerContent="Disclaimer" />
      )}
      {ModalOpen === "about" && <AboutModal mainContent={<About />} headerContent="About" />}
      <MainForm />
      <Footer />
    </div>
  );
}

export default App;
