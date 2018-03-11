import React from 'react';

class TasksList extends React.Component {
    render() {
        const item = this.props.item;

        return (
            <div className="ContentItem">
                <img
                    src={item.icon}
                    alt="user-icon"
                    style={{ width: 50, height: 50 }}
                    className="ItemPhoto"
                />

                <div className="row">
                    <div>
                        <h4>
                            <a className="TitleItem">{item.title}</a>
                        </h4>

                        {this.props.listId === 3 ? (
                            <div className="ItemTime completed">
                                <i className="fa fa-check-circle-o" />{' '}
                                <span>Completed!</span>
                            </div>
                        ) : (
                            <div className="ItemTime">
                                <i className="fa fa-clock-o fa-fw" />
                                <span
                                    className={`${item.isDelayed && 'active'}`}
                                >
									{item.time}
								</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

export default TasksList;