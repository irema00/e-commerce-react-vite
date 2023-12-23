import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageContent from "./layouts/PageContent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "./store/actions/userActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      dispatch(setIsLoggedIn(true));
    }
  }, [dispatch]);
  return (
    <DataProvider>
      <PageContent />
      <ToastContainer />
    </DataProvider>
  );
}

export default App;
