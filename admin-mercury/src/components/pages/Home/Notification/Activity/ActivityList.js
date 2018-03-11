import React from 'react';

class ActivityList extends React.Component {
    render() {
        const item = this.props.item;

        return (

            <li className="ContentItem">
                <a href="">
                    <img
                        src={item.icon}
                        alt="user-icon"
                        style={{ width: 50, height: 50 }}
                        className="ItemPhoto"
                    />
                </a>

                <div className="ItemMessage">
                    <div>
						<span className="UserItem">
							<a href="">{item.user} </a>
						</span>

                        <span className="ItemAction">
							{item.action}{' '}
						</span>

                        <span className="content-item-project">
							<a>{item.project}</a>
						</span>
                    </div>

                    <div className="ItemTime">
                        <i className="fa fa-clock-o fa-fw" />
                        <span>{item.time}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default ActivityList;