import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/index";
import CadastroUsu from "./pages/CadastroUsuario/index";
import CadastroEnder from "./pages/CadastroEndereco/index";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cadastroUsuario' component={CadastroUsu}/>
                <Route path='/cadastroEndereco' component={CadastroEnder}/>
            </Switch>
        </BrowserRouter>
    )
}