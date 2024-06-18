import "./App.css";
import Avatar from "./components/Avatar";
import Name from "./components/Name";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Button from "./components/Button";
import Socials from "./components/Socials";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Avatar />
      <Name fname="Salomon" lname="DIEI" />
      <Title />
      <Bio />
      <Button />
      <Socials />
      <Skills />
    </>
  );
}

export default App;
