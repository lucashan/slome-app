import React, {Component} from 'react';
import CollapseTeam from './components/CollapseTeam';
import {Container, Card, CardDeck, CardTitle} from 'reactstrap';
import Background from './assets/slome.svg';
import Lucas from './assets/lucas.jpg';
import Reese from './assets/reese.jpg';
import Rose from './assets/rose.jpg';
import Christian from './assets/christian.jpg';
import linkedIn from './assets/linkedinIcon.png';
import gitHub from './assets/githubIcon.svg'

class About extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <Container>
                <img className="mx-auto" src={Background} alt = "background" width="80%" height="80%"/>
                <CardTitle style={{fontSize: "40px", color: "black", row: "-4px"}} className="text-center mt-5">Meet the Team</CardTitle>
                <div style={{minHeight: "450px"}}>
                    <CardDeck className = "mt-5">
                        <Card>
                            <CollapseTeam imgSrc = {Lucas} linkedPic = {linkedIn} name = "Lucas Han" gitPic = {gitHub}
                                          position = "Front End Development" linkL = "https://www.linkedin.com/in/hanlucas/"
                                          linkG = "https://github.com/lucashan"/>
                        </Card>
                        <Card>
                            <CollapseTeam imgSrc = {Reese} linkedPic = {linkedIn} name = "Reese Woodard" gitPic = {gitHub}
                                          position = "Front End Development" linkL = "https://www.linkedin.com/in/reesewoodard/"/>
                        </Card>
                        <Card>
                            <CollapseTeam imgSrc = {Christian} linkedPic = {linkedIn} name = "Christian Johansen" gitPic = {gitHub}
                                          position = "Back End Development"/>
                        </Card>
                        <Card>
                            <CollapseTeam imgSrc = {Rose} linkedPic = {linkedIn} name = "Rose Chang" gitPic = {gitHub}
                                          position = "UI Designer" linkL = "https://www.linkedin.com/in/changrose/"/>
                        </Card>
                    </CardDeck>
                </div>
                <CardTitle style={{fontSize: "40px", color: "black", row: "-4px"}} className="text-center mt-4">    </CardTitle>
            </Container>
        );
    }
}

export default About;