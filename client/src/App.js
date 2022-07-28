import { ThemeProvider } from "@mui/material";
import Dashboard from "./views/Dashboard/Dashboard";
import Auth from "./views/Auth/Auth";
import { theme } from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/all-season-24x7-b2b" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;


      {/* <Dashboard /> */}
      {/* <Auth /> */}