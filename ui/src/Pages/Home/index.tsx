import React, { Component } from 'react';

import {
    Button,
    Container,
    Content,
    Footer,
    Header,
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import Navbar from '../../Components/Navbar/';
import Question from '../../Components/Question';


interface IQuestion {
    id: number;
    groupId: number;
    level: number;
    question: string;
    answers: string[];
    correctAnswers: number[];
    totalPoints: number;
}
interface IMainState {
    runningQuest: boolean;
    questions: IQuestion[];
}
class Main extends Component<{}, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
            questions: [],
            runningQuest: false,
        };
    }

    public componentDidMount = () => {
        fetch('http://localhost:5000/questions')
            .then((res) => res.json())
            .then((data: { questions: IQuestion[]}) => {
                this.setState({ questions: data.questions });
            });
    }

    public render() {
        const { runningQuest, questions } = this.state;
        const question = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat diam, volutpat sit amet nunc eget, volutpat mollis urna. Nullam maximus euismod turpis, non viverra sapien. In hac habitasse platea dictumst. Etiam tempor nisi interdum nunc hendrerit interdum. In tincidunt odio in erat consequat, a consectetur dolor fringilla.';
        return (
            <Container>
                <Header>
                    <Navbar />
                </Header>
                <Content style={{ margin: '5% 10%' }}>
                    <Button onClick={this.startQuest} appearance="primary">Open Quiz</Button>
                    {runningQuest && <Question
                        question={questions[0].question}
                        answers={questions[0].answers}
                        correct_answers={questions[0].correctAnswers}
                    />}
                </Content>
                <Footer>Footer</Footer>
            </Container>
        );
    }

    private startQuest = (event: any) => {
        this.setState({ runningQuest: true });
    }
}

export default Main;
