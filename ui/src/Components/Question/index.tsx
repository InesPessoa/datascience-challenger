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

    public handleChange = (value: any) => {
        this.setState({
            selectedAnswers: value,
        });
    }

    public handleSubmit = (event: React.SyntheticEvent<Element, Event>) => {
        const { selectedAnswers } = this.state;
        const comparison = this.props.correctAnswers.length === selectedAnswers.length
            && this.props.correctAnswers.every((v) => selectedAnswers.indexOf(v) !== -1);
        this.setState({ submitDisabled: true });
        if (comparison) {
            console.log('success!');
        } else {
            console.log('failed!');
        }
        event.preventDefault();
    }

    public render() {
        const { selectedAnswers, submitDisabled } = this.state;
        const { question, answers } = this.props;
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
                    <FormGroup>
                        <ButtonToolbar>
                            <Button
                                appearance="primary"
                                disabled={submitDisabled}
                                onClick={this.handleSubmit}
                            >
                                Submit
                            </Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    }
}

export default Question;
