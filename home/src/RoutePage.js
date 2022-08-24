import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const ContainerPage = React.lazy(() => import('../pages/container.page'))

export default function RoutePage() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} component={ContainerPage} />
            </Switch>
        </BrowserRouter>
    )
}