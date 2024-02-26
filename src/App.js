import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import { useState } from "react";
import Alert from "./components/Alert";




function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  const removebodyclass = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };

  const togglemode = (cls) => {
    removebodyclass();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("dark mode has been enabeled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabeled", "success");
    }
  };
  const togglecolour = () => {
    setMode("green");
    if (mode === "green") {
      document.body.style.backgroundColor = "green";
    }
  };
  const [mode, setMode] = useState("light");
  return (
    <>
      
        <Navbar
          title="TextUtils"
          about="about TextUtils"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Textform/>
    </>
  );
}

export default App;
