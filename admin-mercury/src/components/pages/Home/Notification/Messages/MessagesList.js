import React from 'react';
import { Link } from 'react-router-dom';

class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this.readMessage = this.readMessage.bind(this);
        this.state = {
            isUnreaded: true
        };
    }

    readMessage() {
        if (this.props.item.unreaded) {
            this.props.item.unreaded = false;
            this.setState({
                isUnreaded: false
            });
        }
    }

    render() {
        const item = this.props.item;

        return (
            <li
                className={`ContentItem users-message ${item.unreaded &&
                this.state.isUnreaded &&
                'active'}`}>

                <a href="">
                    <img
                        src={item.icon}
                        alt="user-icon"
                        style={{ width: 50, height: 50 }}
                        className="ItemPhoto"
                    />
                </a>

                <div className="ItemMessage">
					<span className="UserItem">
						<a href="">{item.user}</a>
					</span>

                    <span className="ItemTime">
						<span>{item.time}</span>
					</span>

                    <p>{item.message}</p>

                    <Link to="/" onClick={this.readMessage}>
                        <i className="fa fa-reply fa-fw" aria-hidden="true" />
                    </Link>

                    <a href="">
                        <i className="fa fa-cog fa-fw" aria-hidden="true" />
                    </a>
                </div>
            </li>
        );
    }
}

export default MessagesList;