import React, { Component } from 'react';

import {
    Container,
    Content,
    Footer,
    Header,
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import Navbar from '../../Components/Navbar/';
import Question from '../../Components/Question';


class Main extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const question = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat diam, volutpat sit amet nunc eget, volutpat mollis urna. Nullam maximus euismod turpis, non viverra sapien. In hac habitasse platea dictumst. Etiam tempor nisi interdum nunc hendrerit interdum. In tincidunt odio in erat consequat, a consectetur dolor fringilla.';
        return (
            <Container>
                <Header>
                    <Navbar />
                </Header>
                <Content style={{margin: '5% 10%'}}>
                    <Question
                        question={question}
                        answers={['a', 'b', 'c', 'd']}
                        correct_answers={[0, 1]}
                    />
                </Content>
                <Footer>Footer</Footer>
            </Container>
        );
    }
}

export default Main;
