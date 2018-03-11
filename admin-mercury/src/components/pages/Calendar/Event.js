import React from "react";
import { Popover, PopoverBody } from "reactstrap";

import User from "./../../../assets/images/ava.jpg";
import './Event.css';

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div>
                <a id={"Popover-" + this.props.event.id} onClick={this.toggle}>
                    {this.props.event.title}
                </a>

                <Popover
                    placement="right"
                    isOpen={this.state.popoverOpen}
                    target={"Popover-" + this.props.event.id}
                    toggle={this.toggle}
                >
                    <PopoverBody>
                        <div className="PopoverCard">
                            <p className="PopoverInfo mb-2">Author: </p>

                            <div className="d-flex align-items-center">
                                <a>
                                    <img
                                        src={User}
                                        alt="user-img"
                                        style={{ width: 40, height: 40 }}
                                        className="PopoverPhoto"
                                    />
                                </a>

                                <div>
                                    <h4 className="PopoverTitle">
                                        <a>Nicky Hunt</a>
                                    </h4>

                                    <p className="PopoverItem">
                                        Product Designer
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="PopoverCard">
                            <ul>
                                <li className="popoverList">
									<span className="PopoverInfo">
										Title:
									</span>
                                    <span>{this.props.event.title}</span>
                                </li>

                                <li className="popoverList">
									<span className="PopoverInfo">
										Starts:
									</span>
                                    <span>
										{this.props.event.start.toLocaleTimeString()}
									</span>
                                </li>

                                <li className="popoverList">
									<span className="PopoverInfo">
										Ends:
									</span>
                                    <span>
										{this.props.event.end.toLocaleTimeString()}
									</span>
                                </li>

                                <li className="popoverList">
									<span className="PopoverInfo">
										Place:
									</span>
                                    <span>{this.props.event.place}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="PopoverCard">
                            <button
                                type="button"
                                className="btn btn-lg btn-primary"
                            >
                                Edit event
                            </button>
                        </div>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}