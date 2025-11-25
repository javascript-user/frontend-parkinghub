import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components//common/Footer";
import Header from "../components/Header/Header.js";
import AboutUs from "./AboutUs";
import ContactForm from '../components/Forms/ContactForm.js';

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header>
        <NavBar />
      </Header>
      <Routes>
        <Route index element={<MainContent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default HomePage;
