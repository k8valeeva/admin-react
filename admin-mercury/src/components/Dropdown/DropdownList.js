import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';


class DropdownList extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.state = {
            activeTab: this.props.activeTab,
            dropdownOpen: false
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
            >
                <DropdownToggle caret>
                    <span>{this.props.action}: </span>
                    <span className="active">{this.state.activeTab}</span>
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem
                        className={`${
                            this.state.activeTab === this.props.activeTab
                                ? 'disabled'
                                : ''
                            }`}
                        onClick={() => {
                            this.toggle(this.props.activeTab);
                            this.props.updateData(this.props.activeTab);
                        }}
                    >
                        {this.props.activeTab}
                    </DropdownItem>

                    <DropdownItem
                        className={`${
                            this.state.activeTab === this.props.anotherTab
                                ? 'disabled'
                                : ''
                            }`}
                        onClick={() => {
                            this.toggle(this.props.anotherTab);
                            this.props.updateData(this.props.anotherTab);
                        }}
                    >
                        {this.props.anotherTab}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default DropdownList;