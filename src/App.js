import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Heading from './component/Heading';
import Home from "./component/Body/Home";
import Sale from "./component/Body/Sale";
import Blog1 from "./component/Body/Blog/Blog1/blog1";
import Blog2 from "./component/Body/Blog/Blog2/blog2";
import Blog3 from "./component/Body/Blog/Blog3/blog3";
import Footer from "./component/Footer";
import Info1 from "./component/Body/Info/Info1/info1";
import Info2 from "./component/Body/Info/Info2/info2";
import Info3 from "./component/Body/Info/Info3/info3";
import Menu1 from "./component/Body/Menu/Menu1/menu1";
import Menu2 from "./component/Body/Menu/Menu2/menu2";
import Menu3 from "./component/Body/Menu/Menu3/menu3";
import Menu4 from "./component/Body/Menu/Menu4/menu4";
import Menu5 from "./component/Body/Menu/Menu5/menu5";

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
            <Route path="/menu-1" element={<Menu1 />}/>
            <Route path="/menu-2" element={<Menu2 />}/>
            <Route path="/menu-3" element={<Menu3 />}/>
            <Route path="/menu-4" element={<Menu4 />}/>
            <Route path="/menu-5" element={<Menu5 />}/>
            <Route path="/sale" element={<Sale />}/>
            <Route path="/blog-1" element={<Blog1 />}/>
            <Route path="/blog-2" element={<Blog2 />}/>
            <Route path="/blog-3" element={<Blog3 />}/>
          </Routes>
        </div>

        <Footer/>
      </Router>


    
    </div>
  );
}

export default App;
