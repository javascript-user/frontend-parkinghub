import "./styles/App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="poppins-regular">
      <Router />
    </BrowserRouter>
  );
}

export default App;
