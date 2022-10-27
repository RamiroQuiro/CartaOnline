import FolletosItems from "./component/FolletoPublico/FolletosItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./component/contexto/ContextProvider";
import Layout from "./component/Layout/Layout";
import Login from "./component/Login/Login";
import AuthContext from "./component/contexto/AuthContext";
import Account from "./component/Account/Account";
import EnviandoPedido from "./component/EnviandoPedido";
import PerfildelaCuenta from "./component/DatosPerfil/PerfildelaCuenta";
import PageItems from "./component/CargaItems/PageItems";
import PriveteRoute from "./component/PriveteRoute";
import PageImagenes from "./component/PageImagenes";
import DiseñoFolleto from "./component/DiseñoFolleto/DiseñoFolleto";
import Home from "./Home";
import EditorFolleto from "./component/DiseñoFolleto/OutletdeDiseños/EditorFolleto";
import Afiches from "./component/DiseñoFolleto/EditorAfiches/Afiches";
import SelectorDiseños from "./component/DiseñoFolleto/OutletdeDiseños/SelectorDiseños";
function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:businessName" element={<FolletosItems />} />
            <Route
              path="/:businessName/enviando"
              element={<EnviandoPedido />}
            />

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
                <Route  element={<DiseñoFolleto />}>
                  <Route path="disenios"  index element={<SelectorDiseños/>}/>
                  <Route path="editorFolleto" element={<EditorFolleto />} />
                  <Route path="afiches" element={<Afiches />} />
                </Route>
            </Route>
          </Routes>
        </ContextProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
