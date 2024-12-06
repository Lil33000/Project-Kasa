import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
