import "./App.css";

// Containers
import Navbar from "./containers/Navbar/Navbar";
import Header from "./containers/Header/Header";
import Features from "./containers/Features/Features";
import Footer from "./containers/Footer/Footer";

function App() {
    return (
        <div className="tu-app">
            <Navbar />
            <Header />
            <Features />
            <Footer />
        </div>
    );
}

export default App;
