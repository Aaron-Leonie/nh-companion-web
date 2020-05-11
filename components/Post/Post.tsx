import React from 'react';
import styles from './Post.module.css'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Post  = (props) => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <Avatar className={styles.avatar}>AH</Avatar>
                    <div className={styles.headerText}>
                        <div className={styles.headerTextName}>
                            <span>Aaron Hawkey</span>
                        </div>
                        <div className={styles.headerTextIsland}>
                            <span>An Island</span>
                        </div>
                    </div>
                    <div className={styles.postOptions}>
                    <IconButton><MoreVertIcon /></IconButton>
                    </div>
                </div>
                <div className={styles.postBody}>
                    <p>This is my post. Hello everyone. I want some fucking turnips.</p>
                </div>
            </div>
        </div>
    );
}

export default Post;

// TODO: Make post header component. 
// TODO: Make post type -- render on post type
// Make status post componenet