import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ContextProvider from "./component/contexto/ContextProvider";
import Layout from "./component/Layout";
import Login from "./component/Login";
import AuthContext from "./component/contexto/AuthContext";
import Account from "./component/Account";
import EnviandoPedido from "./component/EnviandoPedido";
import NewItems from "./component/NewItems";

function App() {
  return (
    <BrowserRouter>
        <ContextProvider>
            <AuthContext>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path="/enviando" element={<EnviandoPedido/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Layout/>}>
                <Route path="/account" element={<Account/>}/>
                    <Route path="/newItems" element={<NewItems/>}/>
            </Route>

          </Routes>
            </AuthContext>
        </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
