import React from 'react'
import {Paper, Container, makeStyles, TextareaAutosize, Avatar} from '@material-ui/core'
import styles from './PostField.module.css';
import EventIcon from '@material-ui/icons/Event';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import cn from 'classnames'



export default function PostField() {

    const text = 'At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.';
    console.log(styles);

    return (
            <div className={styles.fieldContainer}>
                <div className={styles.inputContainer}>
                    <Avatar className={styles.avatar}>AH</Avatar>
                    <TextareaAutosize className={styles.textArea} rowsMax={3} placeholder="Write a post!" defaultValue={text}/>
                </div>
                <div className={styles.buttonContainer}>
                        <div id="events" className={cn(styles.statusButton, styles.buttonLeft)}>
                            <EventIcon/> Events
                        </div>
                        <div id="flights" className={cn(styles.statusButton, styles.buttonRight)}>
                            <FlightTakeoffIcon/> Open Flights
                        </div>
                    </div>
            </div>
    )
}
