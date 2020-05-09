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
                    <div>
                        <p>Aaron Hawkey</p>
                    </div>
                    <div>
                        <p>Maralago</p>
                    </div>
                    <div className={styles.postOptions}>
                    <IconButton><MoreVertIcon /></IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;