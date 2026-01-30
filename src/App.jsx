import { Route, Routes } from "react-router";
import "./App.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="Register" element={<RegisterPage />}></Route>
      </Routes>
      {/* <RegisterPage></RegisterPage> */}
      {/* <LoginPage></LoginPage> */}
    </>
  );
}

export default App;
