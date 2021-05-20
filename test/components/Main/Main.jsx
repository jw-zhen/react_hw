import React from'react'
import {TopBlock} from './TopBlock';
import {HashRouter} from "react-router-dom";

class Main extends React.Component{
    render(){
        return(
            <HashRouter>
                <TopBlock/>
            </HashRouter>
            )
        }
}

export {Main}