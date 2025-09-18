import { BrowserRouter,Routes,Route} from "react-router-dom";
import Coins from "./Coins.tsx";
import Coin from "./Coin.tsx";
import React from "react";
function Router(){
    return<BrowserRouter>
    <Routes>
        <Route path="/:coinId">
            <Coin></Coin>
        </Route>
        <Route path="/">
            <Coins></Coins>
        </Route>
    </Routes>
    </BrowserRouter>
}
export default Router;