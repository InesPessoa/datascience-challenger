import React, { Component, Suspense } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {
    Avatar,
    Container,
    Header,
    Nav,
    Navbar,
} from 'rsuite';

const Home = React.lazy(() => import('./Pages/Home/'));

class App extends Component<{}, {}> {
    public render() {
        return (
            <Container>
                <Header>
                    <Navbar>
                        <Navbar.Header>
                            <img src="/img/clown-fish.svg" height={60} style={{ padding: '5px 30px 5px 20px' }} />
                            <span>Bem-vindo ao DataScience Challenger</span>
                        </Navbar.Header>
                        <Navbar.Body>
                            <Nav pullRight={true} style={{ height: '60px' }}>
                                <Avatar style={{ margin: '10px' }} circle={true} src="/img/user.jpg" />
                            </Nav>
                        </Navbar.Body>
                    </Navbar>
                </Header>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </Container>
        );
    }
}

export default App;
