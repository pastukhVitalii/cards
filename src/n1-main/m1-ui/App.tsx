import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from "../m2-bll/store";
import {login, newPass, packs, profile, registration, restore} from "./routes/routes";
import Profile from "../../n2-features/f1-auth/a5-profile/Profile";
import {HashRouter, Route} from "react-router-dom";
import Header from "./header/Header";
import Login from "../../n2-features/f1-auth/a1-login/Login";
import Restore from "../../n2-features/f1-auth/a3-restore/Restore";
import RegisterV from "../../n2-features/f1-auth/a2-register/r1-ui/RegisterV";
import NewPass from "../../n2-features/f1-auth/a4-newPass/NewPass";
import Packs from "../../n2-features/f3-cards/с1-packs/p1-ui/Packs";

const App = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <div className='main'><Route path={profile} component={Profile}/>
                        <Route path={login} component={Login}/>
                        <Route path={registration} component={RegisterV}/>
                        <Route path={restore} component={Restore}/>
                        <Route path={newPass} component={NewPass}/>
                        <Route path={packs} component={Packs}/>
                        <Route path='/' render={() => <div>Error 404</div> } exact={true}/>
                    </div>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;
