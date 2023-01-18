import { useAuth } from "./context/auth/authContext";
import Login from "./pages/auth/Login";
import { GlobalStyle } from "./styles/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import Header from "./layout/Header";
import { Loading } from "./components/Loading";
import Home from "./pages/principal/Home";
import Crud from "./pages/pagina3/Crud";
import Signup from "./pages/auth/signup";

function App() {
  const queryClient = new QueryClient();

  const { isLogged, isLoading } = useAuth();

  if (isLoading) return <Loading />
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        {isLogged && <Header />}
        <Routes>
          <Route
            path="/"
            element={isLogged ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/crud"
            element={isLogged ? <Crud /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!isLogged ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isLogged ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
