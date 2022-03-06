import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#101b2b";
      document.body.style.color = "#FFFFFF";
      showAlert("Dark mode Enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.color = "#000000";
      document.body.style.backgroundColor = "#fff";
      showAlert("Dark mode Disabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  const [color, setColor] = useState();
  const handleBgColor = (color = "#202b2b", className) => {
    document.body.style.backgroundColor = color;
    document.body.style.color = "white";
    setColor(color);
    // document.body.classList.add(className);
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutTitle="about"
          mode={mode}
          toggleMode={toggleMode}
          handleBgColor={handleBgColor}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm mode={mode} showAlert={showAlert} color={color} />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
