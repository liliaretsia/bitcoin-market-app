import React from 'react';
import Button from "react-bootstrap/Button";

const Chat = () => {
    return (
        <div>
            <div className="form-group">
                <textarea className="form-control" id="chat" rows="3" placeholder="Type your message here"></textarea>
            </div>
            <Button variant="primary">Send message</Button>{''}
        </div>
    )
};

export default Chat;
