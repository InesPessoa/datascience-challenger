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
import 'rsuite/dist/styles/rsuite-default.css';

import Navbar from '../../Components/Navbar/';


class Main extends Component<{}, { selectedAnswers: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedAnswers: ['A', 'C'],
        };
    }
    public handleChange = (value: any) => {
        this.setState({
            selectedAnswers: value,
        });
    }

    public render() {
        const { selectedAnswers } = this.state;
        const question = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat diam, volutpat sit amet nunc eget, volutpat mollis urna. Nullam maximus euismod turpis, non viverra sapien. In hac habitasse platea dictumst. Etiam tempor nisi interdum nunc hendrerit interdum. In tincidunt odio in erat consequat, a consectetur dolor fringilla.';
        return (
            <React.Fragment>
                <Navbar />
                <Form>
                    <Message type="info" description={question} />
                    <FormGroup>
                        <CheckboxGroup
                            inline={false}
                            name="checkboxList"
                            value={selectedAnswers}
                            onChange={this.handleChange}
                        >
                            <Checkbox value="A">Item A</Checkbox>
                            <Checkbox value="B">Item B</Checkbox>
                            <Checkbox value="C">Item C</Checkbox>
                            <Checkbox value="D">Item D</Checkbox>
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

export default Main;


/*
{
    questions: [
        {
            question: 'abc?';
            answers: [
                'sfsdf',
                'sdfsd',
                'sfdf',
                'ssgsdfs',
            ],
            right_answers: [1]
        }
    ]
}*/
