import React, { Component, Suspense } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import User from './container/Users'
const Pizza = React.lazy(() => import('./container/Pizza'))
class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={User} />
                    <Route path="/pizza" render={() =>
                        <Suspense fallback={<div>Loading....</div>}>
                            <Pizza />
                        </Suspense>

                    } />
                </div>
            </div>
        )
    }
}

export default App