import React from 'react';
import _map from 'lodash/map';

import MessagesList from './MessagesList';
import messagesData from './messagesData';

class Messages extends React.Component {
    render() {
        const unreadedMessages = messagesData.filter(
            item => item.unreaded === true
        ).length;

        return (
            <div className="Content">
                <div className="ContentHeader">
                    <h3 className="HeaderCaption">Messages</h3>
                    <div>
						<span className="badge badge-primary">
							{unreadedMessages}
						</span>
                    </div>
                </div>
                <ul>
                    {_map(
                        messagesData,
                        (item, index) =>
                            index < 4 && (
                                <MessagesList key={item.id} item={item} />
                            )
                    )}
                </ul>
            </div>
        );
    }
}

export default Messages;