import React, {Component} from 'react';
import CollapseTeam from './CollapseTeam';
import {Container, Card, CardDeck, CardTitle} from 'reactstrap';
import Background from './assets/slome.svg';
import Lucas from './assets/lucas.jpg';
import Reese from './assets/reese.jpg';
import Rose from './assets/rose.jpg';
import Christian from './assets/christian.jpg';
import linkedIn from './assets/linkedinIcon.png';
import gitHub from './assets/githubIcon.svg';
import bar from './assets/Group 3.png';

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
            <body className="about">
                <Container>
                <img className="mx-auto d-block" style={{display: "block", position: "relative", top: "80px"}}
                     src={Background} alt = "background" width="50%" height="50%"/>
                    <div id="wrapper">
                        <img style={{display: "block", position: "relative", width: "105.5%", height: "110%", top: "200px"}}
                             src={bar} alt = "bar"/>
                    </div>
                <CardTitle style={{fontSize: "40px", color: "black", display: "block", position: "relative", top: "220px"}}
                           className="text-center mt-5">Meet the Team</CardTitle>
                <div style={{minHeight: "700px"}}>
                    <CardDeck className = "mt-5" style={{position: "relative", top: "200px"}}>
                        <Card>
                            <CollapseTeam imgSrc = {Lucas} linkedPic = {linkedIn} name = "Lucas Han" gitPic = {gitHub}
                                          position = "Front End Development" linkL = "https://www.linkedin.com/in/hanlucas/"
                                          linkG = "https://github.com/lucashan"/>
                        </Card>
                        <Card>
                            <CollapseTeam imgSrc = {Reese} linkedPic = {linkedIn} name = "Reese Woodard" gitPic = {gitHub}
                                          position = "Front End Development" linkL = "https://www.linkedin.com/in/reesewoodard/"
                                          linkG = "https://github.com/reese695"/>
                        </Card>
                        <Card>
                            <CollapseTeam imgSrc = {Christian} linkedPic = {linkedIn} name = "Christian Johansen" gitPic = {gitHub}
                                          position = "Back End Development" linkL = "https://www.linkedin.com/in/christianajohansen"
                                          linkG = "https://github.com/caj2"/>
                        </Card>
                        <Card>
                            <CollapseTeam imgSrc = {Rose} linkedPic = {linkedIn} name = "Rose Chang" gitPic = {gitHub}
                                          position = "User Interface Designer" linkL = "https://www.linkedin.com/in/changrose/"
                                          linkG = "https://github.com/heyimrose"/>
                        </Card>
                    </CardDeck>
                </div>
                <CardTitle style={{fontSize: "40px", color: "black", row: "-4px"}} className="text-center mt-4">    </CardTitle>
                </Container>
            </body>
        );
    }
}

export default About;