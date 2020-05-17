import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Button, StylesProvider } from '@material-ui/core';
import styles from './EventModal.module.css';
import EventImage from './EventImage/EventImage';
import eventDirectory from '../../public/images/event_images/event-images.json';


interface EventState {
    fileName: string,
    eventName: string,
    eventMessage: string,
    eventUserMessage: string
}


const EventModal = (props) => {

    const [step, setStep] = useState(1);

    const [event, setEvent] = useState({} as EventState);

    const handlePublishClick = () => {
        return;
    };

    const goNext = () => {
        setStep(step + 1);
    };

    const handleImageClick = (event) => {
        setEvent(event);
        return;
    }

    const helperText = event.eventUserMessage !== undefined ? <p>{event.eventUserMessage + ' Is this correct?'}</p> : <p>Please select an event before continuing.</p>;


    let view;

    if(step === 1) {
        view = (
            <div>
                <div className={styles.eventsContainer}>
                    {eventDirectory.images.map((image) => {
                        return <EventImage 
                            onClick={handleImageClick} 
                            src={image.fileName} 
                            alt={image.eventName} 
                            key={image.eventName} 
                            event={image}
                            isSelected={event.eventName === image.eventName}
                        />
                    })}
                </div>
                <div className={styles.helperText}>
                    {helperText}
                </div>
                <DialogActions>
                    <Button onClick={props.onClose} color="secondary">Cancel</Button>
                    <Button onClick={goNext} color="primary">Next</Button>
                </DialogActions>
            </div>
        );
    } else if(step === 2){

    }

    return (
        <Dialog open={props.open} onClose={props.onClose} >
            <DialogTitle>Events</DialogTitle>
            {view}
            {/* <DialogActions>
                <Button onClick={props.onClose} color="secondary">Cancel</Button>
                <Button onClick={handlePublishClick} color="primary">Publish</Button>
            </DialogActions> */}
        </Dialog>
    );
};

export default EventModal;