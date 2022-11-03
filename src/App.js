import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Heading from './component/Heading';
import Home from "./component/Body/Home";
import Menu from "./component/Body/Menu";
import Sale from "./component/Body/Sale";
import Blog from "./component/Body/Blog";
import Footer from "./component/Footer";
import Info1 from "./component/Body/Info/info1";
import Info2 from "./component/Body/Info/info2";
import Info3 from "./component/Body/Info/info3";


function App() {
  return (
    <div className="app">
      <Router>
        <Heading/>

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/info-1" element={<Info1 />}/>
            <Route path="/info-2" element={<Info2 />}/>
            <Route path="/info-3" element={<Info3 />}/>
            <Route path="/menu-1" element={<Menu />}/>
            <Route path="/sale" element={<Sale />}/>
            <Route path="/blog-1" element={<Blog />}/>
          </Routes>
        </div>

        <Footer/>
      </Router>


    
    </div>
  );
}

export default App;
