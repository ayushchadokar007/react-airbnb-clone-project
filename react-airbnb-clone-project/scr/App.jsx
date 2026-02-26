import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import PropertySection from "./components/PropertySection";
import Footer from "./components/Footer";
import sections from "./data/properties";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <main className="main-content">
        {sections.map((section, index) => (
          <PropertySection key={index} section={section} />
        ))}
      </main>
      <Footer />
    </div>
  );
} 

export default App;
