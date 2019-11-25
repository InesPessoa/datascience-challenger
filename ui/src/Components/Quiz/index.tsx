import React, { Component } from 'react';

import { IQuestion } from '../../Pages/Home';
import Question from '../Question';


interface IQuizProps {
    questions: IQuestion[];
}
interface IQuizState {
    currentQuestionNumber: number;
    totalQuestions: number;
}
class Quiz extends Component<IQuizProps, IQuizState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentQuestionNumber: 0,
            totalQuestions: this.props.questions.length,
        };
    }

    public nextQuestion = (event: React.SyntheticEvent<Element, Event>) => {
        const { currentQuestionNumber } = this.state;
        this.setState({ currentQuestionNumber: currentQuestionNumber + 1 });
        event.preventDefault();
    }

    public render() {
        const { questions } = this.props;
        const { currentQuestionNumber } = this.state;
        return (
            <Question
                question={questions[currentQuestionNumber].question}
                answers={questions[currentQuestionNumber].answers}
                correctAnswers={questions[currentQuestionNumber].correct_answers}
                nextQuestion={this.nextQuestion}
            />
        );
    }
}

export default Quiz;
