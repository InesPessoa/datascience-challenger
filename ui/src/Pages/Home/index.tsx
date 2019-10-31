import React, { Component } from 'react';

import {
    Container,
    Content,
    Footer,
    Header,
} from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';

import Navbar from '../../Components/Navbar/';
import Question from '../../Components/Question';


class Main extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Container>
                <Header>
                    <Navbar />
                </Header>
                <Content style={{margin: '5% 10%'}}>
                    <Question />
                </Content>
                <Footer>Footer</Footer>
            </Container>
        );
    }
}

export default Main;
