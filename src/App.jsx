import { Route, Routes } from "react-router";
import "./App.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="Register" element={<RegisterPage />}></Route>
        <Route path="start" element={<MainPage />}></Route>
      </Routes>
      {/* <RegisterPage></RegisterPage> */}
      {/* <LoginPage></LoginPage> */}
    </>
  );
}

export default App;
