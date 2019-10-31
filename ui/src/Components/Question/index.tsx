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
    correct_answers: number[];
}
interface IQuestionState {
    selectedAnswers: string[];
}
class Question extends Component<IQuestionProps, IQuestionState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedAnswers: [],
        };
    }
    public handleChange = (value: any) => {
        this.setState({
            selectedAnswers: value,
        });
    }

    public render() {
        const { selectedAnswers } = this.state;
        const { question, answers } = this.props;
        return (
            <React.Fragment>
                <Form style={{maxWidth: '60%', margin: '0% 20%'}}>
                    <Message type="info" description={question} />
                    <br />
                    <FormGroup>
                        <CheckboxGroup
                            inline={false}
                            name="checkboxList"
                            value={selectedAnswers}
                            onChange={this.handleChange}
                        >
                            {answers.map((answer) => <Checkbox key={answer} value={answer}>{answer}</Checkbox>)}
                        </CheckboxGroup>
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar>
                            <Button appearance="primary">Submit</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    }
}

export default Question;
