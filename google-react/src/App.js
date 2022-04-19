import './App.css';
import { Navigation } from "./components/navigation/Navigation";
import { Header } from "./components/header/Header";
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <Footer />
    </div>
  );
}

export default App;
