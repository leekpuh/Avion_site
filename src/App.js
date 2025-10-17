import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/pages/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ceramics from "./components/pages/ceramics/Ceramics";
import Tables from "./components/pages/tables/Tables";
import Chairs from "./components/pages/chairs/Chairs";
import PlantPost from "./components/pages/plantPost/PlantPost";
import Crockery from "./components/pages/crockery/Crockery";
import Tableware from "./components/pages/tableware/Tableware";
import Cultery from "./components/pages/cultery/Cultery";
import Cart from "./components/pages/cart/Cart";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="plant-post" element={<PlantPost />} />
                    <Route path="ceramics" element={<Ceramics />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="chairs" element={<Chairs />} />
                    <Route path="crockery" element={<Crockery />} />
                    <Route path="tableware" element={<Tableware />} />
                    <Route path="cultery" element={<Cultery />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
