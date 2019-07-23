import React from 'react';

const MessegeForm = (props) => {
    return <div>
        <form>
            <div>
                <textarea placeholder="enter messege" value={props.newMessegeBody} onChange={props.onNewMessegeChange} />
            </div>
            <div>
                <button onClick={props.onSendMessegeClick}>Add messege</button>
            </div>
        </form>
    </div>
};

export default MessegeForm;