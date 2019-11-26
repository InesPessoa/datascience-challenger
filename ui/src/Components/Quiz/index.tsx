import React, { Component } from 'react';

import { IQuestion } from '../../Pages/Home';
import Question from '../Question';


export interface IQuizContext {
    currentQuestionNumber: number;
    totalQuestions: number;
    handleGoNextQuestion: any;
}
export const QuizContext = React.createContext(
    {
        currentQuestionNumber : 0,
        // tslint:disable-next-line: no-empty
        handleGoNextQuestion: () => { },
        totalQuestions: 0,
    },
);

interface IQuizProps {
    questions: IQuestion[];
}
class Quiz extends Component<IQuizProps, IQuizContext> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentQuestionNumber: 0,
            handleGoNextQuestion: this.handleGoNextQuestion,
            totalQuestions: this.props.questions.length,
        };
    }

    public handleGoNextQuestion = (event: React.SyntheticEvent<Element, Event>) => {
        const { currentQuestionNumber, totalQuestions } = this.state;
        if (currentQuestionNumber === totalQuestions - 1) {
            //
        } else {
            this.setState({ currentQuestionNumber: currentQuestionNumber + 1 });
        }
        event.preventDefault();
    }

    public render() {
        const { questions } = this.props;
        const { currentQuestionNumber } = this.state;
        return (
            <QuizContext.Provider value={this.state}>
                <Question
                    question={questions[currentQuestionNumber].question}
                    answers={questions[currentQuestionNumber].answers}
                    correctAnswers={questions[currentQuestionNumber].correct_answers}
                />
            </QuizContext.Provider>
        );
    }
}

export default Quiz;
