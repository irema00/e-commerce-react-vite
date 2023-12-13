import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <>
      <DataProvider>
        <HomePage />
        <ProductListPage />
        <ProductDetailPage />
      </DataProvider>
    </>
  );
}

export default App;
