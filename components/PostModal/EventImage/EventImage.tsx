import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames';

const useStyles = makeStyles({
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 'var(--primary-border-radius)',
    },
    imageContainer: {
        margin: 8,
        width: 55,
        height: 55,
    },
    imageSelected: {
        border: '5px solid var(--primary-main-color)',
        boxSizing:'border-box',
    }
});

const EventImage = (props) => {

    const styles = useStyles();


    // Conditionally styling on prop state
    let imgStyles = styles.image;

    if(props.isSelected) {
        imgStyles = cn(styles.image, styles.imageSelected);
    } else {
        imgStyles = cn(styles.image);
    }


    return (
        <div className={styles.imageContainer}>
            <img 
                src={props.src} 
                alt={props.alt} 
                className={imgStyles} 
                onClick={() => props.onClick(props.event)}
                draggable="false"
            />
        </div>
    )
};

export default EventImage;