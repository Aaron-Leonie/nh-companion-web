import React, { useState } from 'react'
import { TextareaAutosize, Avatar, Button} from '@material-ui/core'
import styles from './PostField.module.css';
import EventIcon from '@material-ui/icons/Event';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PostModal from '../PostModal/PostModal';
import cn from 'classnames';

export default function PostField(props) {

    const [modal, setModal] = useState({
        type: '',
    });



    const handleModalClick = (type: string) => {
        setModal({ type });
        return props.handleModalClick();

    };

    const handleModalClose = () => {
        return props.handleModalClose();
    };

    const handleTextChange = (e) => {
        props.handleTextChange(e.target.value);
    }

    // Lifting state to Feed page
    const handleDialoguePublishClick = (type, event, eventPermissions, dodoCode, postBody) => {
        return props.handleDialoguePublishClick(type, event, eventPermissions, dodoCode, postBody);
    }

    const handleTextPostPublishClick = () => {
        return handleDialoguePublishClick('text', null, null, null, props.postText);
    };


    // TODO: find a better way of clearing the text area. Too many dom rerenders.
    return (
            <div className={cn(styles.fieldContainer, 'card')}>
                <div className={styles.inputContainer}>
                    <Avatar className={styles.avatar}>AH</Avatar>
                    <TextareaAutosize className={styles.textArea} rowsMax={3} placeholder="Write a post!" onChange={handleTextChange} value={props.postText} />
                    <Button style={{margin: 10}} color="primary" variant="contained" onClick={handleTextPostPublishClick}>Publish</Button>
                </div>
                <div className={styles.buttonContainer}>
                        <div id="events" className={cn(styles.statusButton, styles.buttonLeft)}>

                            <Button
                                style={{width: '100%', fontWeight: 550}}
                                variant="text"
                                color="primary"
                                startIcon={<EventIcon/>}
                                onClick={() => handleModalClick('event')}
                            >
                                Events
                            </Button>
                        </div>
                        <div id="flights" className={cn(styles.statusButton, styles.buttonRight)}>
                            <Button
                                style={{width: '100%', fontWeight: 550}}
                                variant="text"
                                color="primary"
                                startIcon={ <FlightTakeoffIcon/>}
                                onClick={() => handleModalClick('flight')}
                            >
                                Open Flights
                            </Button>
                        </div>
                    </div>
                    <PostModal 
                        open={props.open} 
                        type={modal.type}
                        onClose={handleModalClose}
                        handlePublishClick={handleDialoguePublishClick}
                    />
            </div>
    );
};
