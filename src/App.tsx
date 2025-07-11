import "./index.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Login    from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useAppSelector } from "./store/hooks";
import { selectToken } from "./store/authSlice";
import CaptionList from "./pages/captions/CaptionList";
import Countries from "./pages/countries/Countries";

export default function App() {
  const token = useAppSelector(selectToken);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

       
        <Route
          path="/captions"
          element={token ? <CaptionList /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/countries"
          element={token ? <Countries /> : <Navigate to="/login" replace />}
        />

        
        <Route
          path="*"
          element={<Navigate to={token ? "/captions" : "/login"} replace />}
        />
      </Routes>
    </>
  );
}
