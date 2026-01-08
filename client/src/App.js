import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { Context } from "./context/Context";
// import { useState } from "react";
// import { AppContext } from "./AppContext";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route
          path="/settings"
          element={user ? <Settings /> : <Register />}
        ></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
