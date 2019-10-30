import React, { Component, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

const Home = React.lazy(() => import('./Pages/Home/'));

class App extends Component<{}, {}> {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Home />
                        </Suspense>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
