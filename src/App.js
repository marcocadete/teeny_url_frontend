import "./App.css";

// Containers
import Navbar from "./containers/Navbar/Navbar";
import Header from "./containers/Header/Header";
import Features from "./containers/Features/Features";
import Preview from "./containers/Preview/Preview";
import Footer from "./containers/Footer/Footer";

function App() {
    return (
        <div className="tu-app">
            <Navbar />
            <Header />
            <Features />
            <Preview />
            <Footer />
        </div>
    );
}

export default App;
