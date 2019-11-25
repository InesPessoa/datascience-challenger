import React, { Component } from 'react';

import {
    Button,
    ButtonToolbar,
    Checkbox,
    CheckboxGroup,
    Form,
    FormGroup,
    Message,
} from 'rsuite';


interface IQuestionProps {
    question: string;
    answers: string[];
    correctAnswers: number[];
    nextQuestion: (event: React.SyntheticEvent<Element, Event>) => void;
}
interface IQuestionState {
    selectedAnswers: number[];
    success: boolean;
    submitDisabled: boolean;
}
class Question extends Component<IQuestionProps, IQuestionState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedAnswers: [],
            submitDisabled: false,
            success: undefined as any,
        };
    }

    public goNext = (event: React.SyntheticEvent<Element, Event>) => {
        this.setState({ selectedAnswers: [] });
        this.props.nextQuestion(event);
    }

    public handleChange = (value: any) => {
        this.setState({
            selectedAnswers: value,
        });
    }

    public handleSubmit = (event: React.SyntheticEvent<Element, Event>) => {
        const { selectedAnswers } = this.state;
        const comparison = this.props.correctAnswers.length === selectedAnswers.length
            && this.props.correctAnswers.every((v) => selectedAnswers.indexOf(v) !== -1);
        this.setState({ submitDisabled: true, success: comparison });
        event.preventDefault();
    }

    public render() {
        const { selectedAnswers, submitDisabled, success } = this.state;
        const { question, answers } = this.props;
        const nextButton = (
            <Button
                appearance="primary"
                onClick={this.goNext}
            >
                Next
            </Button>
        );
        let resultStatus;
        if (submitDisabled) {
            if (success) {
                resultStatus = 'Correct!';
            } else {
                resultStatus = 'Wrong!';
            }
        }
        return (
            <React.Fragment>
                <Form style={{ maxWidth: '60%', margin: '0% 20%' }}>
                    <Message type="info" description={question} />
                    <br />
                    <FormGroup>
                        <CheckboxGroup
                            inline={false}
                            name="checkboxList"
                            value={selectedAnswers}
                            onChange={this.handleChange}
                        >
                            {answers.map((answer, index) => <Checkbox key={index} value={index}>{answer}</Checkbox>)}
                        </CheckboxGroup>
                    </FormGroup>
                    <div>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button
                                    appearance="primary"
                                    disabled={submitDisabled}
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </Button>
                                {submitDisabled && nextButton}
                            </ButtonToolbar>
                        </FormGroup>
                    </div>
                    <h2>{resultStatus}</h2>
                </Form>
            </React.Fragment>
        );
    }
}

export default Question;
