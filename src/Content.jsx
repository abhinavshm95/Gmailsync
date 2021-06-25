import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home from './Home'
import sign from './sign'
import Create from './Create'
import login from './login'
import History from './History'
const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/history' component={History} /> 
                <Route exact path='/create' component={Create} /> 
                <Route exact path='/login' component={login} /> 
                <Route exact path='/sign' component={sign} /> 
            </Switch>
        </>
    )
}

export default Content
