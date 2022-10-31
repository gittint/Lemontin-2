import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route ,Link} from 'react-router-dom'
import logo from './logo.svg';
import Heading from './component/Heading';
import Home from "./component/Body/Home";
import Menu from "./component/Body/Menu";
import Info from "./component/Body/Info";
import Sale from "./component/Body/Sale";
import Blog from "./component/Body/Blog";


function App() {
  return (
    <div className="app">
      <Router>
        <Heading/>

        <div className="app-container">
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/info-1" element={<Info />}/>
            <Route path="/menu-1" element={<Menu />}/>
            <Route path="/sale" element={<Sale />}/>
            <Route path="/blog-1" element={<Blog />}/>
          </Routes>
        </div>

        
      </Router>

    
    </div>
  );
}

export default App;
