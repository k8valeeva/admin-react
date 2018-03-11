import React from 'react';
import _map from 'lodash/map';

import ActivityList from './ActivityList';
import activityData from './activityData';

class Activity extends React.Component {
    render() {
        const activities = activityData.length;

        return (
            <div className="Content">
                <div className="ContentHeader">
                    <h3 className="HeaderCaption">Activity</h3>
                    <div>
						<span className="badge badge-primary badge-activity">
							{activities}
						</span>
                    </div>
                </div>

                <ul>
                    {_map(
                        activityData,
                        (item, index) =>
                            index < 4 && (
                                <ActivityList key={item.id} item={item} />
                            )
                    )}
                </ul>
            </div>
        );
    }
}

export default Activity;