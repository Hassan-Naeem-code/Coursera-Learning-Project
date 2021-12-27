import Header from "./component/HeaderComponent";
import Footer from "./component/FooterComponent";
import MainComponent from "./component/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <MainComponent />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
