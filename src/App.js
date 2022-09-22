import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Hero from './components/Hero';
import ProductList from './pages/ProductList/index';
import RepoList from './pages/RepoList/index';
import Footer  from './components/Footer';
import GlobalStyles from './Globalstyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
      <Routes>
        <Route exact path="/" element={<div></div>}/>
        <Route exact path="/show-product" element={<ProductList/>}/>
        <Route path={"/show-product/product/:id"} element={<RepoList/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
