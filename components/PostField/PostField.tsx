import React from 'react'
import {Paper, Container, makeStyles, TextareaAutosize, Avatar, Button} from '@material-ui/core'
import styles from './PostField.module.css';
import EventIcon from '@material-ui/icons/Event';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import cn from 'classnames';



export default function PostField() {

    return (
            <div className={cn(styles.fieldContainer, 'card')}>
                <div className={styles.inputContainer}>
                    <Avatar className={styles.avatar}>AH</Avatar>
                    <TextareaAutosize className={styles.textArea} rowsMax={3} placeholder="Write a post!" />
                </div>
                <div className={styles.buttonContainer}>
                        <div id="events" className={cn(styles.statusButton, styles.buttonLeft)}>

                            <Button
                                style={{width: '100%'}}
                                variant="text"
                                color="primary"
                                startIcon={<EventIcon/>}
                            >
                                Events
                            </Button>

                            {/* <EventIcon/> Events */}
                        </div>
                        <div id="flights" className={cn(styles.statusButton, styles.buttonRight)}>
                            <Button
                                style={{width: '100%'}}
                                variant="text"
                                color="primary"
                                startIcon={ <FlightTakeoffIcon/>}
                            >
                                Open Flights
                            </Button>
                        </div>
                    </div>
            </div>
    );
};
