import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
