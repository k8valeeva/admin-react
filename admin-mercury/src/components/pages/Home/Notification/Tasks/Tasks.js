import React from 'react';
import _map from 'lodash/map';

import TasksList from './TasksList';
import tasksData from './tasksData';

class Tasks extends React.Component {
    render() {
        const delayedTasks = tasksData.filter(item => item.isDelayed === true).length;
        const allTasks = tasksData.length;

        return (
            <div className="Content">
                <div className="ContentHeader">
                    <h3 className="HeaderCaption">Tasks</h3>

                    <div>
                        <span className="badge badge-primary">{allTasks}</span>
                        <span className="badge badge-secondary">
							{delayedTasks}
						</span>
                    </div>
                </div>

                <div>
                    {_map(
                        tasksData,
                        (item, index) =>
                            index < 4 && <TasksList key={item.id} item={item} />
                    )}
                </div>
            </div>
        );
    }
}

export default Tasks;