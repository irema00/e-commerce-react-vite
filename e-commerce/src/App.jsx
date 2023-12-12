import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <DataProvider>
        <HomePage />
      </DataProvider>
    </>
  );
}

export default App;
