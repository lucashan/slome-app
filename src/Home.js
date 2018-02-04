import React, {Component} from 'react';
import {Container, Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

class Homepage extends Component {
    state = {

    }
    render() {
        return (
            <Container>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Card className="mb-5">
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Button color="primary">Test Button</Button>
            </Container>
        );
    }
}

export default Homepage;


