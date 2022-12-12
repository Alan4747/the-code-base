import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/ui/pages/login";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { setCurrentUser } from "./store/slices/appSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setCurrentUser({
        phone: "5551112233",
        passwordPhone: "user",
        email:"admin@theodebase.io",
        passwordEmail: "admin"

      })
    );
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
