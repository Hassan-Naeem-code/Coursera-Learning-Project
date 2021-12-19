import Menu from "./component/Menu";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";
// import './App.css';

function App() {
  return (
    <>
      <Navbar dark={true} color="primary">
        <div className="container d-flex align-self-center">
          <NavbarBrand>
            <h1>Ristorante Con Fusion</h1>
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} />
    </>
  );
}

export default App;
