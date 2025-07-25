import { AuthProvider } from "./components/auth/useAuth.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Modules from "./components/views/Modules.jsx";
import Students from "./components/views/Students.jsx";
import PageNotFound from "./components/views/404.jsx";
import Login from "./components/views/Login.jsx";

function App() {
  //Initialisation-----------------------------------
  //State--------------------------------------------
  //Handlers-----------------------------------------
  //View---------------------------------------------

  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/students" element={<Students />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
