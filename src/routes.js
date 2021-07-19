import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/index";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cadastro' component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    )
}