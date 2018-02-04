import React, {Component} from 'react';
import {Container, Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

class Error404 extends Component {
    state = {

    }
    render() {
        return (
            <Container>
                <Card className="mt-5 mb-5">
                    <CardBody>
                        <CardTitle>Page Not Found</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default Error404;