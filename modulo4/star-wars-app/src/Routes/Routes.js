import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterListPage from '../pages/CharacterListPage/CharacterListPage'
import CharacterDetailPage from '../pages/CharacterDetailPage/CharacterDetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <CharacterListPage />
                </Route>
                <Route path='/details' exact>
                    <CharacterDetailPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;