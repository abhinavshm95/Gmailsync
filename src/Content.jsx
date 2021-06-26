import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home from './Home'
import Sign from './Sign'
import Create from './Create'
import Login from './Login'
import History from './History'
const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/history' component={History} /> 
                <Route exact path='/create' component={Create} /> 
                <Route exact path='/login' component={Login} /> 
                <Route exact path='/sign' component={Sign} /> 
            </Switch>
        </>
    )
}

export default Content
