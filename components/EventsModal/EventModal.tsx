import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Button, Radio, FormGroup, FormControlLabel, RadioGroup, TextField } from '@material-ui/core';
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

    // State declarations
    const [step, setStep] = useState(1);
    const [event, setEvent] = useState({} as EventState);
    const [eventPermissions, setEventPermissions] = useState('friends');
    const [dodoCode, setDodoCode] = useState('');
    const [dodoError, setDodoError] = useState({status: false, text: ''});

    // Validationo declaratisons
    const dodoValidation = new RegExp('^([A-Z0-9]{5})');


    // --- Event Handlers ---

    // Handles Modal close - clears state
    const handleClose = () => {
        props.onClose();
        setEvent({} as EventState);
        setEventPermissions('frieds');
        setDodoCode('');
        setDodoError({status: false, text: ''});
        setStep(1);
    };

    // Event Publish handler
    const handlePublishClick = () => {
        return;
    };

    // Modal Step handler
    const goNext = () => {
        setStep(step + 1);
    };

    // Image clicking handler
    const handleImageClick = (event) => {
        setEvent(event);
        return;
    }

    // Event permission handler
    const handleCheckChange = (e) => {
        setEventPermissions(e.target.value);
    }

    // Dodo Code validation and handler
    const handleDodoCodeChange = (e) => {
        if(dodoValidation.test(e.target.value)) {
            setDodoCode(e.target.value);
            setDodoError({text: '', status: false});
        } else {
            setDodoError({status: true, text:'5 Characters/Numbers Uppercase'});
        }
    };

    // --- Event Handlers End

    // --- Dynamic Rendering --- 

    const helperText = event.eventUserMessage !== undefined ? <p>{event.eventUserMessage + ' Is this correct?'}</p> : <p>Please select an event before continuing.</p>;


    let view;

    let dodoCodeField;


    if(eventPermissions === 'dodoCode') {
        dodoCodeField = (
            <TextField  
                onChange={handleDodoCodeChange} 
                id="standard-basic" 
                label="Dodo Code" 
                error={dodoError.status}
                helperText={dodoError.text}
                />
        );
    }
   

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
                    <Button onClick={handleClose} color="secondary">Cancel</Button>
                    <Button onClick={goNext} color="primary">Next</Button>
                </DialogActions>
            </div>
        );
    } else if(step === 2){
       view = (
        <div>
            <FormGroup >
                <RadioGroup name="invitePermissions" value={eventPermissions} onChange={handleCheckChange}>
                    <FormControlLabel value="friends" control={<Radio />} label="Friends Only" />
                    <FormControlLabel value="bestFriends" control={<Radio />} label="Best Friends Only" />
                    <FormControlLabel value="dodoCode" control={<Radio />} label="Dodo Code" />
                </RadioGroup>
                {dodoCodeField}
            </FormGroup>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">Cancel</Button>
                <Button onClick={handlePublishClick} color="primary">Publish</Button>
            </DialogActions>
        </div>
       );
    }

    // --- Dynamic Rendering End ---

    // Render
    return (
        <Dialog open={props.open} onClose={handleClose} >
            <DialogTitle>Events</DialogTitle>
            {view}
        </Dialog>
    );
};

export default EventModal;