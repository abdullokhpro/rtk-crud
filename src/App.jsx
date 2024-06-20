import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./components/layouts";
import Home from "./pages/home/Home";
import Login from "./pages/login/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route element={<Auth />}>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
