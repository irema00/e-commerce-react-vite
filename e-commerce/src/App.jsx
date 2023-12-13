import "./App.css";
import { DataProvider } from "./contexts/DataContext";

import PageContent from "./layouts/PageContent";

function App() {
  return (
    <DataProvider>
      <PageContent />
    </DataProvider>
  );
}

export default App;
