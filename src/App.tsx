import "./App.css";
import Avatar from "./components/Avatar";
import Name from "./components/Name";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Avatar />
      <Name fname="Matthew" lname="Young" />
      <Title />
      <Bio />
      <Button />
    </>
  );
}

export default App;
