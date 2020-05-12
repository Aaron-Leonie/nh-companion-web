import React from 'react';
import styles from './ProfileAbout.module.css';
import {Avatar, IconButton} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


const ProfileAbout = (props) => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>
                <Avatar className={styles.avatar}>AH</Avatar>
                <div className={styles.titleAbout}>
                    <div className={styles.nameText}>
                        <span>After Midnight</span>
                    </div>
                    <div className={styles.islandName}>
                        <span>Island Name</span>
                    </div>
                </div>
                    <span className={styles.headerButtons}>
                        <IconButton><PersonAddIcon /></IconButton>
                        <IconButton><HomeIcon /></IconButton>
                        <IconButton><InsertCommentIcon /></IconButton>
                    </span>
            </div>
            <div className={styles.friendCode}>
                <p>Friend Code: SW-1234-5678-9012</p>
            </div>
            <div className={styles.aboutText}>
                <p>This is a lot of text about me. I need lots of money. Give me all your money bitch.</p>
            </div>
        </div>
    );
};

export default ProfileAbout;