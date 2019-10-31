import React, { Component } from 'react';

import { IQuestion } from '../../Pages/Home';
import Question from '../Question';


interface IQuizProps {
    questions: IQuestion[];
}
interface IQuizState {
    //
}
class Quiz extends Component<IQuizProps, IQuizState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedAnswers: [],
        };
    }

    public render() {
        const { questions } = this.props;
        return (
            <React.Fragment>
                <Question
                    question={questions[0].question}
                    answers={questions[0].answers}
                    correctAnswers={questions[0].correct_answers}
                />
            </React.Fragment>
        );
    }
}

export default Quiz;
