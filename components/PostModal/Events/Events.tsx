import React from 'react';
import EventImage from '../EventImage/EventImage';
import eventDirectory from '../../../public/images/event_images/event-images.json';
import {DialogActions, Button} from '@material-ui/core';
import styles from './Events.module.css';
import cn from 'classnames';

// TODO declare interface for props

const Events = (props) => {

    const helperText = 
        props.event.eventUserMessage !== undefined ? 
            <p>{props.event.eventUserMessage + ' Is this correct?'}</p> 
            : <p>Please select an event before continuing.</p>;

    return (
        <div className={'noselect'}>
            <div className={cn(styles.eventsContainer)}>
                {eventDirectory.images.map((image) => {
                    return <EventImage 
                        onClick={props.handleImageClick} 
                        src={image.fileName} 
                        alt={image.eventName} 
                        key={image.eventName} 
                        event={image}
                        isSelected={props.event.eventName === image.eventName}
                    />
                })}
            </div>
            <div className={styles.helperText}>
                {helperText}
            </div>
            <DialogActions>
                <Button onClick={props.handleClose} color="secondary">Cancel</Button>
                <Button onClick={props.goNext} 
                    disabled={props.event.eventUserMessage === undefined} 
                    color="primary">
                        Next
                </Button>
            </DialogActions>
        </div>
    );
}

export default Events;