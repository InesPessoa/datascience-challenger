import React, { Component } from 'react';

import {
    Button,
    Content,
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { IQuizResults } from '../../Components/Quiz';

const Quiz = React.lazy(() => import('../../Components/Quiz/'));


interface IMainState {
    runningQuest: boolean;
}
class Main extends Component<{}, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
            runningQuest: false,
        };
    }

    public finishQuizCallback = () => {
        this.setState({ runningQuest: false });
    }

    public render() {
        const { runningQuest } = this.state;
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
                    {runningQuest && <Quiz finishQuizCallback={this.finishQuizCallback} />}
                </Content>
            </Content>
        );
    }

    private startQuest = (event: any) => {
        this.setState({ runningQuest: true });
    }
}

export default Main;
