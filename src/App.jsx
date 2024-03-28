import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
      <Logout />
      <Signup />
      <Login />
      <Logout />
    </>
  );
}

export default App;
