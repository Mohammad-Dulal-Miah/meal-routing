import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import ProductInformation from './components/ProductInformation/ProductInformation';
import Products from './components/Products/Products';


function App() {
  return (
    <div className="App">
      {/* <Products></Products> */}
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/home" element={<Products></Products>}></Route>
        <Route path="/food/:idMeal" element={<ProductInformation></ProductInformation>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
