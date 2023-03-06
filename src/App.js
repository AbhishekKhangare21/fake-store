import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import ProductComponent from "./containers/ProductComponent";
import ErrorPage from "./containers/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<ErrorPage />}>
            404 Not Found
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
