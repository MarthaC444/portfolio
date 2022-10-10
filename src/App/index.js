import Home from "../components/Home";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css";

function App() {
  return (
    <>
      <Home />
      <Button variant="danger">danger button</Button>
    </>
  );
}

export default App;
