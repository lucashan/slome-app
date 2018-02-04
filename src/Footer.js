import React, { Component } from 'react';
import {Container} from 'reactstrap';

class Footer extends Component {
    state = {

    }
    render() {
        return (
            <div className="pr-footer mt-5">
                <Container>
                    <p className="copyright">Created by SLOMe team at SLO Hacks.</p>
                </Container>
            </div>
        );
    }
}

export default Footer;
