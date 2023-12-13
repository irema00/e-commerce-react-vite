import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <>
      <DataProvider>
        <HomePage />
        <ProductListPage />
      </DataProvider>
    </>
  );
}

export default App;
