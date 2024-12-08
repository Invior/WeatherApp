import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { GeolocationProvider } from "./contexts/GeolocationContext";

function App() {

  return (
    <GeolocationProvider>
      <Header />
      <Main />
    </GeolocationProvider>
  );
}

export default App;
