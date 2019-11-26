import React, { Component } from 'react';

import Question from '../Question';


export interface IQuestion {
    id: number;
    groupId: number;
    level: number;
    question: string;
    answers: string[];
    correct_answers: number[];
    total_points: number;
}
export interface IQuizContext {
    currentQuestionNumber: number;
    totalQuestions: number;
    handleGoNextQuestion: any;
}
export const QuizContext = React.createContext(
    {
        currentQuestionNumber: 0,
        // tslint:disable-next-line: no-empty
        handleGoNextQuestion: () => { },
        totalQuestions: 0,
    },
);
interface IQuizState extends IQuizContext {
    loading: boolean;
    questions: IQuestion[];
}
class Quiz extends Component<{}, IQuizState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentQuestionNumber: 0,
            handleGoNextQuestion: this.handleGoNextQuestion,
            loading: true,
            questions: [],
            totalQuestions: 0,
        };
    }

    public componentDidMount = () => {
        fetch('http://localhost:5000/questions')
            .then((res) => res.json())
            .then((data: { questions: IQuestion[] }) => {
                this.setState({ questions: data.questions, loading: false, totalQuestions: data.questions.length });
            });
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
        const { loading, currentQuestionNumber, questions } = this.state;
        if (loading) {
            return 'Loading...';
        }
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
