import "./App.css";
import Header from "./components/header";
import TrawelCard from "./components/trawelCard";
import TopDestinations from "./components/topDestinations";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TopDestinations />
      <TrawelCard />
      <Footer />
    </div>
  );
}

export default App;
