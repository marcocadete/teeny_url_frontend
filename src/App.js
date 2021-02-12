import "./App.css";

// Containers
import Navbar from "./containers/Navbar/Navbar";
import Header from "./containers/Header/Header";
import Features from "./containers/Features/Features";

function App() {
    return (
        <div className="tu-app">
            <Navbar />
            <Header />
            <Features />
        </div>
    );
}

export default App;
