import React, { useState } from 'react';
import { Dialog, DialogTitle, TextField } from '@material-ui/core';
import Events from './Events/Events';
import PermissionsForm from './PermissionsForm/PermissionsForm';


interface EventState {
    eventId: number,
    fileName: string,
    eventName: string,
    eventMessage: string,
    eventUserMessage: string
}

// TODO: props interface
// TODO: Lift extra state to feed. Would simplify code and allow for 
// managment of state where the request is being made so I can clear the modal

const EventModal = (props) => {

    // State declarations
    const [step, setStep] = useState(1);
    const [event, setEvent] = useState({} as EventState);
    const [eventPermissions, setEventPermissions] = useState('friends');
    const [dodoCode, setDodoCode] = useState('');


    // --- Event Handlers ---

    // Handles Modal close - clears state
    const handleClose = () => {
        props.onClose();
        setEvent({} as EventState);
        setEventPermissions('frieds');
        setDodoCode('');
        setStep(1);
    };

    // Event Publish handler
    // Lifting state here
    const handlePublishClick = (postBody: string) => {
        setEvent({} as EventState);
        setEventPermissions('frieds');
        setDodoCode('');
        setStep(1);
        return props.handlePublishClick(props.type, event, eventPermissions, dodoCode, postBody);
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
        setDodoCode(e.target.value);
    };

    // --- Event Handlers End ---

    // --- Dynamic Rendering --- 

    let view; 

    if(step === 1 && props.type === 'event') {
        view = (
            <Events 
                handleImageClick={handleImageClick}
                event={event}
                handleClose={handleClose}
                goNext={goNext}
            />
        );
    } else if(step === 2 || props.type === 'flight'){
       view = (
        <PermissionsForm 
            eventPermissions={eventPermissions}
            handleCheckChange={handleCheckChange}
            handleClose={handleClose}
            handlePublishClick={handlePublishClick}
            handleDodoCodeChange={handleDodoCodeChange}
        />
       );
    }

    // --- Dynamic Rendering End ---

    // Render
    return (
        <Dialog open={props.open} fullWidth onClose={handleClose} >
            <DialogTitle>Events</DialogTitle>
            {view}
        </Dialog>
    );
};

export default EventModal;