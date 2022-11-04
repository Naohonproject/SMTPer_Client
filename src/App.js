import { useContext } from "react";

import "./App.css";
import NavBar from "./components/Nav/NavBar/NavBar";
import Title from "./components/Slogan/Slogan";
import Footer from "./components/Footer/Footer";

import MainForm from "./components/MainForm/MainForm";
import { NavBarContext } from "./context/NavBarContext";
import AboutModal from "./components/AboutModal/AboutModal";

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
      {ModalOpen === "disclaimer" && <AboutModal headerContent="Disclaimer" />}
      {ModalOpen === "about" && <AboutModal headerContent="About" />}
      <MainForm />
      <Footer />
    </div>
  );
}

export default App;
