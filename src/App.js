import FolletosItems from "./component/FolletosItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./component/contexto/ContextProvider";
import Layout from "./component/Layout";
import Login from "./component/Login";
import AuthContext, { Auth } from "./component/contexto/AuthContext";
import Account from "./component/Account";
import EnviandoPedido from "./component/EnviandoPedido";
import PerfildelaCuenta from "./component/PerfildelaCuenta";
import PageItems from "./component/PageItems";
import PriveteRoute from "./component/PriveteRoute";
import PageImagenes from "./component/PageImagenes";
import DiseñoFolleto from "./component/DiseñoFolleto";
import Home from "./Home";

function App() {

  return (
    <BrowserRouter>
      <AuthContext>
        <ContextProvider>
          <Routes>

            <Route path="/" element={<Home />}/ >
            <Route path="/:businessName" element={<FolletosItems />}/ >
            <Route path="/:businessName/enviando" element={<EnviandoPedido />} />
         
            <Route path="/login" element={<Login />} />
            <Route
              element={
                <PriveteRoute>
                  <Layout />
                </PriveteRoute>
              }
            >
              <Route path="account" element={<Account />} />
              <Route path="perfildelaCuenta" element={<PerfildelaCuenta />} />
              <Route path="pageItems" element={<PageItems />} />
              <Route path="pageIgames" element={<PageImagenes />} />
              <Route path="disenioFolleto" element={<DiseñoFolleto />} />
            </Route>
          </Routes>
        </ContextProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
