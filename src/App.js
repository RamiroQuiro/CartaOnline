import FolletosItems from "./component/FolletoPublico/FolletosItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./component/contexto/ContextProvider";
import Layout from "./component/Layout/Layout";
import Login from "./component/Login/Login";
import AuthContext, { Auth } from "./component/contexto/AuthContext";
import Account from "./component/Account/Account";
import EnviandoPedido from "./component/EnviandoPedido";
import PerfildelaCuenta from "./component/DatosPerfil/PerfildelaCuenta";
import PageItems from "./component/CargaItems/PageItems";
import PriveteRoute from "./component/PriveteRoute";
import PageImagenes from "./component/PageImagenes";
import DiseñoFolleto from "./component/DiseñoFolleto/DiseñoFolleto";
import Home from "./Home";
import Folleto2 from "./component/DiseñoFolleto/EstilosFolletos/Folleto2";
import EditorFolleto from "./component/DiseñoFolleto/OutletdeDiseños/EditorFolleto";
import StyleContexto from "./component/contexto/ContextDelDiseño";
import Diseños from "./component/DiseñoFolleto/OutletdeDiseños/Diseños";
function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <ContextProvider>
              <StyleContexto>
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
                <Route path="disenioFolleto" element={<DiseñoFolleto />}>
                  <Route path="disenios"  index element={<Diseños/>}/>
                  <Route path="editorFolleto" element={<EditorFolleto />} />
                </Route>
            </Route>
            <Route path="folleto2" element={<Folleto2 />} />
          </Routes>
              </StyleContexto>
        </ContextProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
