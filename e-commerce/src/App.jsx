import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageContent from "./layouts/PageContent";

function App() {
  return (
    <DataProvider>
      <PageContent />
      <ToastContainer />
    </DataProvider>
  );
}

export default App;
