import React, { Component } from 'react';

import {
    Button,
    Content,
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const Quiz = React.lazy(() => import('../../Components/Quiz/'));


export interface IQuestion {
    id: number;
    groupId: number;
    level: number;
    question: string;
    answers: string[];
    correct_answers: number[];
    total_points: number;
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
            .then((data: { questions: IQuestion[] }) => {
                this.setState({ questions: data.questions });
            });
    }

    public render() {
        const { runningQuest, questions } = this.state;
        const buttonCenter = {
            display: 'block',
            margin: 'auto',
        };
        const openQuizButton = (<Button
            style={buttonCenter}
            appearance="primary"
            onClick={this.startQuest}
        >
            Open Quiz
        </Button>);
        return (
            <Content style={{ margin: '5% 10%' }}>
                <Content>
                    {!runningQuest && openQuizButton}
                    {runningQuest && <Quiz questions={questions} />}
                </Content>
            </Content>
        );
    }

    private startQuest = (event: any) => {
        this.setState({ runningQuest: true });
    }
}

export default Main;
