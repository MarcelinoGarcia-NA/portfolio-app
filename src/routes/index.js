  
import React from 'react';
import { BrowserRouter, Router, Switch} from 'react-router-dom';
import  Menu from '../pages/Menu/menu';
import Login from '../pages/Login/index';
import Route from './Route';
import Home from '../pages/Home/index';
import View from '../pages/view/index';
import Update from '../pages/Update/index';
export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
           <Route  path="/login" component={Login} />
           <Route  path="/view" component={View} />  
           <Route  path="/update" component={Update} />
           <>
             <Menu component={Menu}/>
             <Home component={Home}/>
           </>
           
        </Switch>
     </BrowserRouter>

    );
}