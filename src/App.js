import MainComponent from "./component/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./Store/index";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App">
            <MainComponent />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <Router>
//           <div className="App">
//             <MainComponent />
//           </div>
//         </Router>
//       </PersistGate>
//     </Provider>
//   );
// }

// export default App;
