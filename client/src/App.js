import { ThemeProvider } from "@mui/material";
import Dashboard from "./views/Dashboard/Dashboard";
import Auth from "./views/Auth/Auth";
import { theme } from "./theme";

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      <Dashboard />
      {/* <Auth /> */}
    </ThemeProvider>
    </>
  );
}

export default App;
