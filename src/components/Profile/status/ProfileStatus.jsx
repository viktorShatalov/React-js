import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'введите статус'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onChange={this.onStatusChange}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}></input>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;