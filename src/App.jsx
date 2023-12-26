import React, { useEffect } from "react";
import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageContent from "./layouts/PageContent";
import { setUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { AxiosInstance, renewAxiosInstance } from "./api/api";

import gravatar from "gravatar";
function App() {
  const dispatch = useDispatch();

  const getGravatar = (email) => {
    return gravatar.url(email, { s: "100", r: "x", d: "wavatar" }, true);
  };

  useEffect(() => {
    AxiosInstance.get("/verify")
      .then((response) => {
        const user = response.data;
        const gravatar = getGravatar(user.email);
        dispatch(setUser({ ...user, isLoggedIn: true, gravatar: gravatar }));
        renewAxiosInstance();
      })
      .catch((error) => {
        console.error("Token verification failed", error);
        localStorage.removeItem("token");
        dispatch(
          setUser({ name: "", email: "", gravatar: "", isLoggedIn: false })
        );
        renewAxiosInstance();
      });
  }, []);
  return (
    <DataProvider>
      <PageContent />
      <ToastContainer />
    </DataProvider>
  );
}

export default App;
