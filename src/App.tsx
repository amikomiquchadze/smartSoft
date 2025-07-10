// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Login    from "./pages/login/Login";
import Register from "./pages/register/Register";
import WordsList from "./pages/captions/WordsList";
import Countries from "./pages/countries/countries";
import { useAppSelector } from "./store/hooks";
import { selectToken } from "./store/authSlice";

export default function App() {
  const token = useAppSelector(selectToken);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* protected */}
        <Route
          path="/words"
          element={token ? <WordsList /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/countries"
          element={token ? <Countries /> : <Navigate to="/login" replace />}
        />

        {/* catch-all */}
        <Route
          path="*"
          element={<Navigate to={token ? "/words" : "/login"} replace />}
        />
      </Routes>
    </>
  );
}
