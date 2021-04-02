
import './App.css';
import Main from "../src/pages/mainpage"
import "./pages/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import PostScript from "./components/MatrixRain"

function App() {
  return (
    <Router>
    <div className="body">
 <Main/>
 {/* <PostScript/> */}
 
    </div>
    </Router>
  );
}

export default App;
