import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'введите статус'}</span>
                </div>}
            {editMode &&
                <div>
                    <input
                        value={status}
                        onChange={onStatusChange}
                        onBlur={deActivateEditMode}
                        autoFocus={true} />
                </div>}
        </div>
    );
}


export default ProfileStatusWithHooks;