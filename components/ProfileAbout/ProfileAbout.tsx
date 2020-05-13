import React from 'react';
import styles from './ProfileAbout.module.css';
import {Avatar, IconButton} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

export interface ProfileAboutProps {
    userFullName: string,
    islandName: string,
    userFriendCode: string,
    userAbout: string,
};


const ProfileAbout = (props: ProfileAboutProps) => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>
                <Avatar className={styles.avatar}>AH</Avatar>
                <div className={styles.titleAbout}>
                    <div className={styles.nameText}>
                        <span>{props.userFullName}</span>
                    </div>
                    <div className={styles.islandName}>
                        <span>{props.islandName}</span>
                    </div>
                </div>
                    <span className={styles.headerButtons}>
                        <IconButton><PersonAddIcon /></IconButton>
                        <IconButton><HomeIcon /></IconButton>
                        <IconButton><InsertCommentIcon /></IconButton>
                    </span>
            </div>
            <div className={styles.friendCode}>
                <p>{props.userFriendCode}</p>
            </div>
            <div className={styles.aboutText}>
                <p>{props.userAbout}</p>
            </div>
        </div>
    );
};

export default ProfileAbout;