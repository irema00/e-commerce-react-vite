import React, { useEffect } from "react";
import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageContent from "./layouts/PageContent";
import { setUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { AxiosInstance, renewAxiosInstance } from "./api/api";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      AxiosInstance.get("/verify")
        .then((response) => {
          const user = response.data;
          dispatch(setUser(user));
          renewAxiosInstance();
          console.log("verified", user);
        })
        .catch((error) => {
          console.error("Token verification failed", error);
          localStorage.removeItem("token");
          renewAxiosInstance();
        });
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
