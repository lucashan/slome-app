import React, {Component} from 'react';
import {Collapse, CardTitle, CardSubtitle} from 'reactstrap';

class CollapseTeam extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
                <div className="overlay">
                    <img src={this.props.imgSrc} className="image" alt = "team" onClick={this.toggle} width="100%"/>
                        <Collapse isOpen={this.state.collapse}>
                                <CardTitle style={{fontSize: "20px", color: "black", row: "-2px"}} className="text-center mt-2">{this.props.name}</CardTitle>
                                <CardSubtitle style={{fontSize: "14px"}} className="text-center">{this.props.position}</CardSubtitle>
                                <div className="nav3">
                                    <a href={this.props.linkL}>
                                        <img src={this.props.linkedPic} alt = "linkedIn" width="40px" height="40px"/>
                                    </a>
                                    <a href={this.props.linkG}>
                                        <img src={this.props.gitPic} alt = "linkedIn" width="40px" height="40px"/>
                                    </a>
                                </div>
                        </Collapse>
                </div>
        );
    }
}

export default CollapseTeam;